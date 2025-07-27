import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as f from "./CustomShader.js";

function main() {
    var c, u, h, y, b, O, d, w, _, g, S, m, z, P, x, C, D;
    o._RF.push({}, "316a4kc+AVDgZH5hapCMhcU", "SoftShadow", void 0);
    const {
        ccclass: M,
        property: v,
        executeInEditMode: j
    } = a;
    t("SoftShadow", (c = v({
        serializable: !0
    }), u = v({
        type: i,
        tooltip: "Shadow OffsetX"
    }), h = v({
        serializable: !0
    }), y = v({
        type: i,
        tooltip: "Shadow OffsetY"
    }), b = v({
        serializable: !0
    }), O = v({
        type: i,
        tooltip: "Shadow Blur Size"
    }), d = v({
        serializable: !0
    }), w = v({
        type: i,
        tooltip: "Shadow Blur Intensity"
    }), _ = v({
        serializable: !0
    }), g = v({
        type: s,
        tooltip: "Shadow color"
    }), M(S = j((z = e((m = class extends f {
        constructor(...t) {
            super(...t), r(this, "_xOffset", z, this), r(this, "_yOffset", P, this), r(this, "_blur", x, this), r(this, "_intensity", C, this), r(this, "_color", D, this), this.effectPath = "db://assets/Shader/DropShadow/SoftShadow.effect"
        }
        set xOffset(t) {
            this._xOffset = t, this.updateMaterial()
        }
        get xOffset() {
            return this._xOffset
        }
        set yOffset(t) {
            this._yOffset = t, this.updateMaterial()
        }
        get yOffset() {
            return this._yOffset
        }
        set blur(t) {
            this._blur = t, this.updateMaterial()
        }
        get blur() {
            return this._blur
        }
        set intensity(t) {
            this._intensity = t, this.updateMaterial()
        }
        get intensity() {
            return this._intensity
        }
        set color(t) {
            this._color = t, this.updateMaterial()
        }
        get color() {
            return this._color
        }
        onNodeSizeChanged() {
            this.haveCorrectEffect
        }
        updateMaterial() {
            if (this.haveCorrectEffect) {
                this.material.setProperty("uOffset", new n(this.xOffset, this.yOffset)), this.material.setProperty("uBlur", this.blur), this.material.setProperty("uIntensity", this.intensity);
                let t = new p(this.color.r / 255, this.color.g / 255, this.color.b / 255, this.color.a / 255);
                this.material.setProperty("uColor", t);
                let e = this.node.getComponent(l).spriteFrame.uv,
                    r = new p(e[0], e[7], e[6] - e[0], e[1] - e[7]);
                this.material.setProperty("uRect", r)
            }
        }
    }).prototype, "_xOffset", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return .04
        }
    }), e(m.prototype, "xOffset", [u], Object.getOwnPropertyDescriptor(m.prototype, "xOffset"), m.prototype), P = e(m.prototype, "_yOffset", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return .04
        }
    }), e(m.prototype, "yOffset", [y], Object.getOwnPropertyDescriptor(m.prototype, "yOffset"), m.prototype), x = e(m.prototype, "_blur", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return .04
        }
    }), e(m.prototype, "blur", [O], Object.getOwnPropertyDescriptor(m.prototype, "blur"), m.prototype), C = e(m.prototype, "_intensity", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return .04
        }
    }), e(m.prototype, "intensity", [w], Object.getOwnPropertyDescriptor(m.prototype, "intensity"), m.prototype), D = e(m.prototype, "_color", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new s(s.WHITE)
        }
    }), e(m.prototype, "color", [g], Object.getOwnPropertyDescriptor(m.prototype, "color"), m.prototype), S = m)) || S) || S));
    o._RF.pop()
}