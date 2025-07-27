import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as f from "./MessageBroker.js";
import * as u from "./JurisdLoader.js";
import * as h from "./Helpers2.js";
import * as c from "./ConfigJurisdBase.js";

function main() {
    var d, p, y, b, P, g, C, $, L, v, w, z, m, A;
    i._RF.push({}, "49cd3rEMpFH+re2PDL3eDCo", "LazyLoadJurisdPrefab", void 0);
    const {
        ccclass: F,
        property: E,
        disallowMultiple: x,
        menu: B
    } = a, J = "[LazyLoadJurisdPrefab]";
    e("LazyLoadJurisdPrefab", (d = B(`Custom UI/${J}`), p = E(s), y = E({
        type: n,
        visible: function() {
            return this.isArraySet
        }
    }), b = E({
        type: o(h),
        visible: function() {
            return this.needSendEvent
        }
    }), F(P = x(P = d((C = r((g = class extends c {
        constructor(...e) {
            super(...e), this.fileType = l, this._prefab = null, t(this, "refNode", C, this), t(this, "refClass", $, this), t(this, "refProperty", L, this), t(this, "refCallFunction", v, this), t(this, "isArraySet", w, this), t(this, "index", z, this), t(this, "needSendEvent", m, this), t(this, "lazyLoadAssetEvent", A, this)
        }
        start() {
            this.reload()
        }
        updatePrefabRef() {
            if (this._prefab) {
                if (this.refNode && this.refClass) {
                    const e = this.refNode.getComponent(`${this.refClass}`);
                    if (e) {
                        if (this.refProperty in e) {
                            if (Array.isArray(e[this.refProperty]) && !this.isArraySet) return void console.warn(`${J} refProperty: ${this.refProperty} is Array but setting is not Array, pls double check`);
                            if (Array.isArray(e[this.refProperty])) {
                                const r = this.index;
                                e[this.refProperty].length > 0 && e[this.refProperty].length > r ? (console.log(`${J} Set prefab for element of array ${this.refProperty} at ${r}`), e[this.refProperty][r] = this._prefab) : console.warn(`${J} array set index is not correct at index: ${r}`)
                            } else e[this.refProperty] = this._prefab
                        } else console.warn(`${J} Property '${this.refProperty}' does not exist on ${this.refClass}`);
                        this.refCallFunction && this.refCallFunction in e && "function" == typeof e[this.refCallFunction] && (console.log(`${J} check this.refCallFunction = ${this.refCallFunction} OK`), e[this.refCallFunction]())
                    }
                }
            } else console.error(`${J} loadJurisdPrefab failed`)
        }
        loadBundle(e) {
            console.log(`${J} -> loadBundle(${e}) with path : ${this.filePath}`);
            let r = this;
            u.loadJurisdPrefab(e, this.filePath, ((t, i) => {
                t && (console.log(`${J} loadBundle -> finish loadBundle with useCommonBundle? : ${e} : filePath: ${this.filePath}`), r.needSendEvent && f.getInstance().sendLazyLoadProgress(r.lazyLoadAssetEvent), this._prefab = t, r.updatePrefabRef()), r.bundle = i
            }))
        }
        clearPreview() {
            if (this.refNode && this.refClass) {
                const e = this.refNode.getComponent(`${this.refClass}`);
                if (e) {
                    if (this.refProperty in e) {
                        if (Array.isArray(e[this.refProperty])) {
                            const r = this.index;
                            e[this.refProperty][r] = null
                        } else e[this.refProperty] = null;
                        return !0
                    }
                    console.warn(`${J} Property '${this.refProperty}' does not exist on ${this.refClass}`)
                }
            }
            return !1
        }
        onFocusInEditor() {
            this.filePath && this.clearPreview() && this.preview && Editor.Message.request("scene", "save-scene"), this.reload()
        }
    }).prototype, "refNode", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = r(g.prototype, "refClass", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), L = r(g.prototype, "refProperty", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), v = r(g.prototype, "refCallFunction", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), w = r(g.prototype, "isArraySet", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), z = r(g.prototype, "index", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), m = r(g.prototype, "needSendEvent", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), A = r(g.prototype, "lazyLoadAssetEvent", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return h.None
        }
    }), P = g)) || P) || P) || P));
    i._RF.pop()
}