import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var c, p, m, h, u, F, d, b, y, k, B, g, _, D, O, f, P, N, T, E, w, C, A, I, z, L, R, j, H, V, S, v, W;
    i._RF.push({}, "4011esa+xdGMYFJUxty9Fz0", "studio-component", void 0);
    const {
        ccclass: G,
        type: x,
        property: M
    } = l;
    let X = e("ComponentType", function(e) {
        return e[e.NONE = 0] = "NONE", e[e.CHECKBOX = 1] = "CHECKBOX", e[e.TEXT_ATLAS = 2] = "TEXT_ATLAS", e[e.SLIDER_BAR = 3] = "SLIDER_BAR", e[e.LIST_VIEW = 4] = "LIST_VIEW", e[e.PAGE_VIEW = 5] = "PAGE_VIEW", e
    }({}));
    a(X);
    let K = e("ListDirection", function(e) {
        return e[e.VERTICAL = 0] = "VERTICAL", e[e.HORIZONTAL = 1] = "HORIZONTAL", e
    }({}));
    a(K);
    let Z = e("VerticalAlign", function(e) {
        return e[e.TOP = 0] = "TOP", e[e.CENTER = 1] = "CENTER", e[e.BOTTOM = 2] = "BOTTOM", e
    }({}));
    a(Z);
    let J = e("HorizontalAlign", function(e) {
        return e[e.LEFT = 0] = "LEFT", e[e.CENTER = 1] = "CENTER", e[e.RIGHT = 2] = "RIGHT", e
    }({}));
    a(J);
    e("StudioComponent", (c = G("StudioComponent"), p = x(X), m = x(o), h = x(o), u = x(o), F = x(o), d = x(o), b = x(o), y = x(o), k = x(o), B = x(o), g = x(o), _ = x(o), D = x(s), O = x(K), f = x(J), P = x(Z), c(((W = class extends n {
        constructor(...e) {
            super(...e), this._type = X.NONE, this._checkNormalBackFrame = null, this._checkPressedBackFrame = null, this._checkDisableBackFrame = null, this._checkNormalFrame = null, this._checkDisableFrame = null, this._atlasFrame = null, this._sliderBackFrame = null, this._sliderBarFrame = null, this._sliderBtnNormalFrame = null, this._sliderBtnPressedFrame = null, this._sliderBtnDisabledFrame = null, t(this, "checkInteractable", E, this), t(this, "isChecked", w, this), t(this, "firstChar", C, this), t(this, "charWidth", A, this), t(this, "charHeight", I, this), t(this, "string", z, this), t(this, "sliderInteractable", L, this), t(this, "sliderProgress", R, this), t(this, "listInertia", j, this), t(this, "listDirection", H, this), t(this, "listHorizontalAlign", V, this), t(this, "listVerticalAlign", S, this), t(this, "listPadding", v, this)
        }
        get type() {
            return this._type
        }
        set type(e) {
            this._type = e
        }
        get checkNormalBackFrame() {
            return this._checkNormalBackFrame
        }
        set checkNormalBackFrame(e) {
            this._checkNormalBackFrame = e
        }
        get checkPressedBackFrame() {
            return this._checkPressedBackFrame
        }
        set checkPressedBackFrame(e) {
            this._checkPressedBackFrame = e
        }
        get checkDisableBackFrame() {
            return this._checkDisableBackFrame
        }
        set checkDisableBackFrame(e) {
            this._checkDisableBackFrame = e
        }
        get checkNormalFrame() {
            return this._checkNormalFrame
        }
        set checkNormalFrame(e) {
            this._checkNormalFrame = e
        }
        get checkDisableFrame() {
            return this._checkDisableFrame
        }
        set checkDisableFrame(e) {
            this._checkDisableFrame = e
        }
        get atlasFrame() {
            return this._atlasFrame
        }
        set atlasFrame(e) {
            this._atlasFrame = e
        }
        get sliderBackFrame() {
            return this._sliderBackFrame
        }
        set sliderBackFrame(e) {
            this._sliderBackFrame = e
        }
        get sliderBarFrame() {
            return this._sliderBarFrame
        }
        set sliderBarFrame(e) {
            this._sliderBarFrame = e
        }
        get sliderBtnNormalFrame() {
            return this._sliderBtnNormalFrame
        }
        set sliderBtnNormalFrame(e) {
            this._sliderBtnNormalFrame = e
        }
        get sliderBtnPressedFrame() {
            return this._sliderBtnPressedFrame
        }
        set sliderBtnPressedFrame(e) {
            this._sliderBtnPressedFrame = e
        }
        get sliderBtnDisabledFrame() {
            return this._sliderBtnDisabledFrame
        }
        set sliderBtnDisabledFrame(e) {
            this._sliderBtnDisabledFrame = e
        }
    }).ComponentType = void 0, W.ListDirection = void 0, W.VerticalAlign = void 0, W.HorizontalAlign = void 0, r((T = W).prototype, "type", [M, p], Object.getOwnPropertyDescriptor(T.prototype, "type"), T.prototype), r(T.prototype, "checkNormalBackFrame", [M, m], Object.getOwnPropertyDescriptor(T.prototype, "checkNormalBackFrame"), T.prototype), r(T.prototype, "checkPressedBackFrame", [M, h], Object.getOwnPropertyDescriptor(T.prototype, "checkPressedBackFrame"), T.prototype), r(T.prototype, "checkDisableBackFrame", [M, u], Object.getOwnPropertyDescriptor(T.prototype, "checkDisableBackFrame"), T.prototype), r(T.prototype, "checkNormalFrame", [M, F], Object.getOwnPropertyDescriptor(T.prototype, "checkNormalFrame"), T.prototype), r(T.prototype, "checkDisableFrame", [M, d], Object.getOwnPropertyDescriptor(T.prototype, "checkDisableFrame"), T.prototype), E = r(T.prototype, "checkInteractable", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), w = r(T.prototype, "isChecked", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), r(T.prototype, "atlasFrame", [M, b], Object.getOwnPropertyDescriptor(T.prototype, "atlasFrame"), T.prototype), C = r(T.prototype, "firstChar", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return "."
        }
    }), A = r(T.prototype, "charWidth", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), I = r(T.prototype, "charHeight", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), z = r(T.prototype, "string", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), r(T.prototype, "sliderBackFrame", [M, y], Object.getOwnPropertyDescriptor(T.prototype, "sliderBackFrame"), T.prototype), r(T.prototype, "sliderBarFrame", [M, k], Object.getOwnPropertyDescriptor(T.prototype, "sliderBarFrame"), T.prototype), r(T.prototype, "sliderBtnNormalFrame", [M, B], Object.getOwnPropertyDescriptor(T.prototype, "sliderBtnNormalFrame"), T.prototype), r(T.prototype, "sliderBtnPressedFrame", [M, g], Object.getOwnPropertyDescriptor(T.prototype, "sliderBtnPressedFrame"), T.prototype), r(T.prototype, "sliderBtnDisabledFrame", [M, _], Object.getOwnPropertyDescriptor(T.prototype, "sliderBtnDisabledFrame"), T.prototype), L = r(T.prototype, "sliderInteractable", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), R = r(T.prototype, "sliderProgress", [M, D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return .5
        }
    }), j = r(T.prototype, "listInertia", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), H = r(T.prototype, "listDirection", [M, O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return K.VERTICAL
        }
    }), V = r(T.prototype, "listHorizontalAlign", [M, f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return J.LEFT
        }
    }), S = r(T.prototype, "listVerticalAlign", [M, P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return Z.TOP
        }
    }), v = r(T.prototype, "listPadding", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), N = T)) || N));
    i._RF.pop()
}