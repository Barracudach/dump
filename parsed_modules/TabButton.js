import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";

function main() {
    var a, u, l, p, v, h, d, b, A;
    o._RF.push({}, "95763JmDiNPU6wT6i5QzhdY", "TabButton", void 0);
    const {
        ccclass: y,
        property: f,
        executeInEditMode: g
    } = s;
    t("TabButton", (a = f(r), u = f(r), l = f(c), p = f(c), y(v = g((d = e((h = class extends n {
        constructor(...t) {
            super(...t), i(this, "activeNode", d, this), i(this, "inactiveNode", b, this), i(this, "_isActive", A, this)
        }
        set isActive(t) {
            this._isActive = t, this.UpdateUI()
        }
        get isActive() {
            return this._isActive
        }
        UpdateUI() {
            this.activeNode && (this.activeNode.active = this.isActive), this.inactiveNode && (this.inactiveNode.active = !this.isActive)
        }
        Toggle() {
            return this.isActive = !this.isActive, this.isActive
        }
    }).prototype, "activeNode", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(h.prototype, "inactiveNode", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(h.prototype, "_isActive", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), e(h.prototype, "isActive", [p], Object.getOwnPropertyDescriptor(h.prototype, "isActive"), h.prototype), v = h)) || v) || v));
    o._RF.pop()
}