var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decoratorStart = (base) => [, , , __create(base?.[__knownSymbol("metadata")] ?? null)];
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
  return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc(k < 4 ? target : { get [name]() {
    return __privateGet(this, extra);
  }, set [name](x) {
    return __privateSet(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y) => __privateSet(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
    }
    it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata(array, target), desc && __defProp(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
/**
 * @license
 * Copyright 2025-2026 Open Home Foundation
 * SPDX-License-Identifier: Apache-2.0
 */
var _featureSet_dec, _errorCodes_dec, _filterAlert_dec, _waterBucketFull_dec, _currentHumidity_dec, _targetHumidity_dec, _mode_dec, _TclDehumidifierCluster_decorators, _init, _opaque_dec, _TclPrivateCluster_decorators, _init2;
import { attribute, bool, cluster, string, uint8, writable } from "@matter/main/model";
_TclDehumidifierCluster_decorators = [cluster(322239491)], _mode_dec = [attribute(0, uint8, writable)], _targetHumidity_dec = [attribute(1, uint8, writable)], _currentHumidity_dec = [attribute(2, uint8)], _waterBucketFull_dec = [attribute(3, bool)], _filterAlert_dec = [attribute(4, bool)], _errorCodes_dec = [attribute(5, string)], _featureSet_dec = [attribute(6, string)];
class TclDehumidifierCluster {
  constructor() {
    __publicField(this, "mode", __runInitializers(_init, 8, this)), __runInitializers(_init, 11, this);
    __publicField(this, "targetHumidity", __runInitializers(_init, 12, this)), __runInitializers(_init, 15, this);
    __publicField(this, "currentHumidity", __runInitializers(_init, 16, this)), __runInitializers(_init, 19, this);
    __publicField(this, "waterBucketFull", __runInitializers(_init, 20, this)), __runInitializers(_init, 23, this);
    __publicField(this, "filterAlert", __runInitializers(_init, 24, this)), __runInitializers(_init, 27, this);
    __publicField(this, "errorCodes", __runInitializers(_init, 28, this)), __runInitializers(_init, 31, this);
    __publicField(this, "featureSet", __runInitializers(_init, 32, this)), __runInitializers(_init, 35, this);
  }
}
_init = __decoratorStart(null);
__decorateElement(_init, 5, "mode", _mode_dec, TclDehumidifierCluster);
__decorateElement(_init, 5, "targetHumidity", _targetHumidity_dec, TclDehumidifierCluster);
__decorateElement(_init, 5, "currentHumidity", _currentHumidity_dec, TclDehumidifierCluster);
__decorateElement(_init, 5, "waterBucketFull", _waterBucketFull_dec, TclDehumidifierCluster);
__decorateElement(_init, 5, "filterAlert", _filterAlert_dec, TclDehumidifierCluster);
__decorateElement(_init, 5, "errorCodes", _errorCodes_dec, TclDehumidifierCluster);
__decorateElement(_init, 5, "featureSet", _featureSet_dec, TclDehumidifierCluster);
TclDehumidifierCluster = __decorateElement(_init, 0, "TclDehumidifierCluster", _TclDehumidifierCluster_decorators, TclDehumidifierCluster);
__runInitializers(_init, 1, TclDehumidifierCluster);
_TclPrivateCluster_decorators = [cluster(322239488)], _opaque_dec = [attribute(57344, string)];
class TclPrivateCluster {
  constructor() {
    __publicField(this, "opaque", __runInitializers(_init2, 8, this)), __runInitializers(_init2, 11, this);
  }
}
_init2 = __decoratorStart(null);
__decorateElement(_init2, 5, "opaque", _opaque_dec, TclPrivateCluster);
TclPrivateCluster = __decorateElement(_init2, 0, "TclPrivateCluster", _TclPrivateCluster_decorators, TclPrivateCluster);
__runInitializers(_init2, 1, TclPrivateCluster);
export {
  TclDehumidifierCluster,
  TclPrivateCluster
};
//# sourceMappingURL=tcl.js.map
