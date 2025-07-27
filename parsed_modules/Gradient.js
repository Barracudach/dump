import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as C from "./CustomShader.js";

function main() {
    var f, y, g, m, b, P, _, w, T, E, M, O, z, x, S, U, R, A, D, v, I, N, G, L, j, X, V, W;
    r._RF.push({}, "496bbxIhdVEabN7IpNLxVm9", "Gradient", void 0);
    const {
        ccclass: B,
        property: H,
        executeInEditMode: k
    } = a;
    t("Gradient", (f = H({
        serializable: !0
    }), y = H({
        type: i,
        tooltip: "Gradient texture to be used.\nThis takes priority of colors."
    }), g = H({
        serializable: !0
    }), m = H({
        type: s,
        tooltip: "Start color of the gradient",
        visible: function() {
            return this.editorColorsAreUsed()
        }
    }), b = H({
        serializable: !0
    }), P = H({
        type: s,
        tooltip: "End color of the gradient",
        visible: function() {
            return this.editorColorsAreUsed()
        }
    }), _ = H({
        serializable: !0
    }), w = H({
        type: n,
        tooltip: "Start position of the gradient, used to calculate gradient direction, left top point is 0 0",
        visible: function() {
            return this.editorColorsAreUsed()
        }
    }), T = H({
        serializable: !0
    }), E = H({
        type: n,
        tooltip: "End position of the gradient, used to calculate gradient direction, right bottom point is 1 1",
        visible: function() {
            return this.editorColorsAreUsed()
        }
    }), M = H({
        serializable: !0
    }), O = H({
        type: l,
        tooltip: "If a 3rd middle color should be used",
        visible: function() {
            return this.editorColorsAreUsed()
        }
    }), z = H({
        serializable: !0
    }), x = H({
        type: s,
        tooltip: "Middle color of the gradient",
        visible: function() {
            return this.editorShowMiddleColor()
        }
    }), S = H({
        serializable: !0
    }), U = H({
        slide: !0,
        min: 0,
        max: 1,
        tooltip: "Position of middle color on gradient direction (between 0 and 1)",
        visible: function() {
            return this.editorShowMiddleColor()
        }
    }), R = H({
        tooltip: "If the Node opacity should be affected by the HACK or not"
    }), B(A = k((v = e((D = class extends C {
        constructor(...t) {
            super(...t), o(this, "_gradientTex", v, this), o(this, "_startColor", I, this), o(this, "_endColor", N, this), o(this, "_startPos", G, this), o(this, "_endPos", L, this), o(this, "_useMiddleColor", j, this), o(this, "_middleColor", X, this), o(this, "_middlePos", V, this), o(this, "affectNodeOpacity", W, this), this.effectPath = "db://assets/Shader/Gradient/Gradient.effect"
        }
        set gradientTex(t) {
            this._gradientTex = t, this.updateMaterial()
        }
        get gradientTex() {
            return this._gradientTex
        }
        set startColor(t) {
            this._startColor = t, this.updateMaterial()
        }
        get startColor() {
            return this._startColor
        }
        set endColor(t) {
            this._endColor = t, this.updateMaterial()
        }
        get endColor() {
            return this._endColor
        }
        set startPos(t) {
            this._startPos = t, this.updateMaterial()
        }
        get startPos() {
            return this._startPos
        }
        set endPos(t) {
            this._endPos = t, this.updateMaterial()
        }
        get endPos() {
            return this._endPos
        }
        set useMiddleColor(t) {
            this._useMiddleColor = t, this.updateMaterial()
        }
        get useMiddleColor() {
            return this._useMiddleColor
        }
        set middleColor(t) {
            this._middleColor = t, this.updateMaterial()
        }
        get middleColor() {
            return this._middleColor
        }
        set middlePos(t) {
            this._middlePos = t, this.updateMaterial()
        }
        get middlePos() {
            return this._middlePos
        }
        editorColorsAreUsed() {
            return null == this.gradientTex
        }
        editorShowMiddleColor() {
            return this.editorColorsAreUsed() && this.useMiddleColor
        }
        onLoad() {
            this.calcWorldPosChangeReq = !0, super.onLoad()
        }
        onNodeSizeChanged() {
            if (this.haveCorrectEffect) {
                let t = this.node.getComponent(d).contentSize,
                    e = new n(t.width, t.height);
                this.material.setProperty("nodeSize", e), this.onNodePositionChanged()
            }
        }
        onNodePositionChanged() {
            if (this.haveCorrectEffect) {
                let t = this.node.getComponent(d).contentSize,
                    e = this.node.parent.getComponent(d).convertToWorldSpaceAR(this.node.getPosition());
                e.x -= this.node.getComponent(d).anchorX * t.width, e.y -= this.node.getComponent(d).anchorY * t.height;
                let o = new n(e.x, e.y);
                this.material.setProperty("nodeOffset", o)
            }
        }
        initMaterial() {
            this.material = new p, this.gradientTex ? this.material.initialize({
                effectAsset: this.effect,
                defines: {
                    USE_TEXTURE: !0,
                    USE_GRADIENT_TEXTURE: !0,
                    USE_GRADIENT_COLORS: !1
                }
            }) : this.material.initialize({
                effectAsset: this.effect,
                defines: {
                    USE_TEXTURE: !0,
                    USE_GRADIENT_TEXTURE: !1,
                    USE_GRADIENT_COLORS: !0,
                    USE_EXTRA_COLOR: this.useMiddleColor
                }
            }), this.renderer.customMaterial = this.material, this.material.addRef()
        }
        updateMaterial() {
            if (h(this.node, !0) && h(this.node.getComponent(u), !0) && (this.material = this.node.getComponent(u).customMaterial, this.haveCorrectEffect))
                if (this.gradientTex) this.material.setProperty("gradientTex", this.gradientTex);
                else {
                    let t = this.startColor.a,
                        e = this.endColor.a,
                        o = this.middleColor.a;
                    this.material.setProperty("startColor", new c(this.startColor.r / 255, this.startColor.g / 255, this.startColor.b / 255, t / 255)), this.material.setProperty("endColor", new c(this.endColor.r / 255, this.endColor.g / 255, this.endColor.b / 255, e / 255)), this.material.setProperty("startPos", this.startPos), this.material.setProperty("endPos", this.endPos), this.useMiddleColor && (this.material.setProperty("middleColor", new c(this.middleColor.r / 255, this.middleColor.g / 255, this.middleColor.b / 255, o / 255)), this.material.setProperty("middlePos", this.middlePos))
                }
        }
    }).prototype, "_gradientTex", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), e(D.prototype, "gradientTex", [y], Object.getOwnPropertyDescriptor(D.prototype, "gradientTex"), D.prototype), I = e(D.prototype, "_startColor", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new s(s.WHITE)
        }
    }), e(D.prototype, "startColor", [m], Object.getOwnPropertyDescriptor(D.prototype, "startColor"), D.prototype), N = e(D.prototype, "_endColor", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new s(s.BLUE)
        }
    }), e(D.prototype, "endColor", [P], Object.getOwnPropertyDescriptor(D.prototype, "endColor"), D.prototype), G = e(D.prototype, "_startPos", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new n(0, .5)
        }
    }), e(D.prototype, "startPos", [w], Object.getOwnPropertyDescriptor(D.prototype, "startPos"), D.prototype), L = e(D.prototype, "_endPos", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new n(1, .5)
        }
    }), e(D.prototype, "endPos", [E], Object.getOwnPropertyDescriptor(D.prototype, "endPos"), D.prototype), j = e(D.prototype, "_useMiddleColor", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), e(D.prototype, "useMiddleColor", [O], Object.getOwnPropertyDescriptor(D.prototype, "useMiddleColor"), D.prototype), X = e(D.prototype, "_middleColor", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new s(s.YELLOW)
        }
    }), e(D.prototype, "middleColor", [x], Object.getOwnPropertyDescriptor(D.prototype, "middleColor"), D.prototype), V = e(D.prototype, "_middlePos", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return .5
        }
    }), e(D.prototype, "middlePos", [U], Object.getOwnPropertyDescriptor(D.prototype, "middlePos"), D.prototype), W = e(D.prototype, "affectNodeOpacity", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), A = D)) || A) || A));
    r._RF.pop()
}