# Fork notes — `iamadamreed/addons`

This is a fork of [`home-assistant/addons`](https://github.com/home-assistant/addons) that ships **one custom modification**: the `matter_server` add-on builds and registers TCL's vendor-specific Matter clusters at startup so vendor-cluster `read_attribute` / `write_attribute` calls actually work.

## Why this fork exists

TCL ships several smart-home devices (e.g. the **H50D44W** dehumidifier) as Matter-over-Wi-Fi but registers them with the CSA as a generic **Fan** device type (`0x002B`). The dehumidifier-specific data — target humidity, current humidity, mode, bucket-full — lives in TCL's vendor-specific Matter cluster `0x1334FC03` that no Matter ecosystem decodes by default. Without a registered TLV schema, `write_attribute` on those vendor attributes silently no-ops, so HA's Matter integration cannot control these devices end-to-end.

The proper upstream fix is to add the TCL cluster decoder to matter.js itself. That's filed as:

> **[matter-js/matterjs-server PR #630 — `custom-clusters: add TCL vendor cluster (VID 0x1334)`](https://github.com/matter-js/matterjs-server/pull/630)** — ✅ **merged 2026-05-12** into `main` as `a60d524`.

Now waiting on a `matter-server` release that includes the merged cluster to roll into the official Matter Server add-on image. Latest stable was `0.6.8` (pre-merge); the next release (`0.6.9` or a fresh nightly) will carry the decoder. Once that ships and the official add-on rebuilds, **this fork becomes redundant** — switch back to `home-assistant/addons`.

## What changed vs upstream

The patch lives entirely inside the `matter_server` add-on:

- `matter_server/config.yaml` — version bumped to `8.4.0-tclpatch.6`; `image:` line removed so the add-on builds locally instead of pulling the official prebuilt image.
- `matter_server/rootfs/opt/tcl-patch/tcl.ts` — TypeScript source for `TclDehumidifierCluster` (`0x1334FC03`). Kept byte-for-byte identical to the file proposed in PR #630.
- `matter_server/rootfs/etc/s6-overlay/s6-rc.d/matter-server/run` — adds a build step before the matter-server starts: copies `tcl.ts` into the addon's `@matter-server/custom-clusters` package, runs `esbuild --target=es2022` against the addon's matter.js to produce `tcl.js`, then appends an `export * from "./tcl.js"` to the package's `index.js` so the cluster is discovered at startup.

Everything else is upstream.

## Consumers

The Home Assistant integration that consumes this addon's vendor-cluster decoding:

> **[iamadamreed/ha-tcl-matter](https://github.com/iamadamreed/ha-tcl-matter)** — surfaces `humidifier.tcl_dehumidifier`, `binary_sensor.tcl_dehumidifier_water_bucket_full`, etc. for any TCL Matter dehumidifier paired through the built-in Matter integration.

## Installing this fork in Home Assistant

1. Settings → Add-ons → Add-on Store → ⋮ → **Repositories**
2. Add `https://github.com/iamadamreed/addons`
3. Install **Matter Server** from the new repo (it'll appear alongside the official one — pick this one, version `8.4.0-tclpatch.X`).
4. Stop and uninstall the official `core_matter_server` if you have it (only one matter-server can bind port 5580).
5. Point the Home Assistant Matter integration at the patched addon's URL (`ws://fa40c075-matter-server:5580/ws`, where `fa40c075` is your local repo hash — check `Settings → Add-ons → Matter Server → Info → Hostname`).
