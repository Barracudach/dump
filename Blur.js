import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as s from "./CustomShader.js";

function main() {
    var l, a, c, n, p;
    u._RF.push({}, "4af04Hiu5BGw4xncRNSMZNN", "Blur", void 0);
    const {
        ccclass: b,
        property: h,
        executeInEditMode: m
    } = o;
    e("Blur", (l = h({
        type: i
    }), a = h({
        type: i,
        tooltip: "Blur strength"
    }), b(c = m((p = t((n = class extends s {
        constructor(...e) {
            super(...e), r(this, "_blurNumber", p, this), this.effectPath = "db://assets/Shader/SpriteBlur/SpriteBlur.effect"
        }
        set blurNumber(e) {
            this._blurNumber = e, this.updateMaterial()
        }
        get blurNumber() {
            return this._blurNumber
        }
        updateMaterial() {
            this.material && this.material.setProperty("num", this._blurNumber)
        }
    }).prototype, "_blurNumber", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return .02
        }
    }), t(n.prototype, "blurNumber", [a], Object.getOwnPropertyDescriptor(n.prototype, "blurNumber"), n.prototype), c = n)) || c) || c));
    u._RF.pop()
}