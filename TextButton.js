import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as a from "./ThemeSystemModel.js";
import * as m from "./ResourceManager.js";
import * as p from "./cv.js";
import * as b from "./AppConfig.js";
import * as g from "./ThemeSystemType.js";
import * as f from "./ThemeSystemType.js";
import * as y from "./ColorSystemType.js";
import * as d from "./ColorSystemWeight.js";
import * as O from "./ColorSystemTypeOther.js";

function main() {
    var S, C, T, v, N, w, D, H, z, P, W, I, x, E, U, B, M, _, F, A, K, L, R, j, k, Y, Z, q, G, J, Q, V, X, $, ee, te, oe, re, ie, le, se, ne, he, ce, ue, ae, me, pe, be, ge, fe, ye, de;
    r._RF.push({}, "237b4bYBUxAUb2xmyLUwhgL", "TextButton", void 0);
    const {
        ccclass: Oe,
        property: Se,
        executeInEditMode: Ce,
        playOnFocus: Te,
        menu: ve
    } = s;
    e("default", (S = ve("Custom UI/Text Button"), C = Se({
        type: i(g),
        readonly: !0
    }), T = Se({
        type: i(y)
    }), v = Se({
        type: i(d),
        visible: function() {
            return this.colorSchemeNormal != y.Other
        }
    }), N = Se({
        type: i(O),
        visible: function() {
            return this.colorSchemeNormal == y.Other
        }
    }), w = Se({
        tooltip: "Custom color",
        visible: function() {
            return this.colorSchemeNormal == y.Other && this.colorSchemeOtherNormal == O.Custom
        }
    }), D = Se({
        type: i(g),
        readonly: !0
    }), H = Se({
        type: i(y)
    }), z = Se({
        type: i(d),
        visible: function() {
            return this.colorSchemeHover != y.Other
        }
    }), P = Se({
        type: i(O),
        visible: function() {
            return this.colorSchemeHover == y.Other
        }
    }), W = Se({
        tooltip: "Custom color",
        visible: function() {
            return this.colorSchemeHover == y.Other && this.colorSchemeOtherHover == O.Custom
        }
    }), I = Se({
        type: i(g),
        readonly: !0
    }), x = Se({
        type: i(y)
    }), E = Se({
        type: i(d),
        visible: function() {
            return this.colorSchemePressed != y.Other
        }
    }), U = Se({
        type: i(O),
        visible: function() {
            return this.colorSchemePressed == y.Other
        }
    }), B = Se({
        tooltip: "Custom color",
        visible: function() {
            return this.colorSchemePressed == y.Other && this.colorSchemeOtherPressed == O.Custom
        }
    }), M = Se({
        type: i(g),
        readonly: !0
    }), _ = Se({
        type: i(y)
    }), F = Se({
        type: i(d),
        visible: function() {
            return this.colorSchemeDisable != y.Other
        }
    }), A = Se({
        type: i(O),
        visible: function() {
            return this.colorSchemeDisable == y.Other
        }
    }), K = Se({
        tooltip: "Custom color",
        visible: function() {
            return this.colorSchemeDisable == y.Other && this.colorSchemeOtherDisable == O.Custom
        }
    }), L = Se(l), R = Se(l), j = Se({
        visible: function() {
            return this.useToggleOnOffText
        }
    }), k = Se({
        visible: function() {
            return this.useToggleOnOffText
        }
    }), Oe(Y = Ce(Y = Te(Y = S((q = t((Z = class extends n {
        constructor(...e) {
            super(...e), o(this, "themeTypeNormal", q, this), o(this, "colorSchemeNormal", G, this), o(this, "colorWeightNormal", J, this), o(this, "colorSchemeOtherNormal", Q, this), o(this, "customColorNormal", V, this), o(this, "themeTypeHover", X, this), o(this, "colorSchemeHover", $, this), o(this, "colorWeightHover", ee, this), o(this, "colorSchemeOtherHover", te, this), o(this, "customColorHover", oe, this), o(this, "themeTypePressed", re, this), o(this, "colorSchemePressed", ie, this), o(this, "colorWeightPressed", le, this), o(this, "colorSchemeOtherPressed", se, this), o(this, "customColorPressed", ne, this), o(this, "themeTypeDisable", he, this), o(this, "colorSchemeDisable", ce, this), o(this, "colorWeightDisable", ue, this), o(this, "colorSchemeOtherDisable", ae, this), o(this, "customColorDisable", me, this), o(this, "shouldAutoUpdateInEditor", pe, this), o(this, "toggleOnNode", be, this), o(this, "toggleOffNode", ge, this), o(this, "useToggleOnOffText", fe, this), o(this, "toggleOnTextKey", ye, this), o(this, "toggleOffTextKey", de, this), this._isToggleOn = !1, this.editorFocus = !1
        }
        onLoad() {
            this.themeTypeNormal = b.Instance.themeUse, this.themeTypeHover = b.Instance.themeUse, this.themeTypePressed = b.Instance.themeUse, this.themeTypeDisable = b.Instance.themeUse, this.updateMouseEventColor(), this.turnOn(this._isToggleOn)
        }
        toggle() {
            this.turnOn(!this._isToggleOn)
        }
        turnOn(e) {
            if (this.toggleOnNode && (this.toggleOnNode.active = e), this.toggleOffNode && (this.toggleOffNode.active = !e), this._isToggleOn = e, this.useToggleOnOffText) {
                let t = this.node.getComponent(h);
                if (t) {
                    let o = e ? this.toggleOnTextKey : this.toggleOffTextKey;
                    t.string = p.config.getStringData(o)
                }
                m.updateWidget(this.node, !0, c.AlignMode.ON_WINDOW_RESIZE)
            }
        }
        getNormalColor() {
            let e;
            return e = this.colorSchemeNormal == y.Other && this.colorSchemeOtherNormal == O.Custom ? this.customColorNormal : a.getInstance().getColor(this.themeTypeNormal, this.colorSchemeNormal, this.colorWeightNormal, this.colorSchemeOtherNormal), e
        }
        getHoverColor() {
            let e;
            return e = this.colorSchemeHover == y.Other && this.colorSchemeOtherHover == O.Custom ? this.customColorHover : a.getInstance().getColor(this.themeTypeHover, this.colorSchemeHover, this.colorWeightHover, this.colorSchemeOtherHover), e
        }
        getPressedColor() {
            let e;
            return e = this.colorSchemePressed == y.Other && this.colorSchemeOtherPressed == O.Custom ? this.customColorPressed : a.getInstance().getColor(this.themeTypePressed, this.colorSchemePressed, this.colorWeightPressed, this.colorSchemeOtherPressed), e
        }
        getDisabledColor() {
            let e;
            return e = this.colorSchemeDisable == y.Other && this.colorSchemeOtherDisable == O.Custom ? this.customColorDisable : a.getInstance().getColor(this.themeTypeDisable, this.colorSchemeDisable, this.colorWeightDisable, this.colorSchemeOtherDisable), e
        }
        updateMouseEventColor() {
            this.normalColor = this.getNormalColor(), this.hoverColor = this.getHoverColor(), this.pressedColor = this.getPressedColor(), this.disabledColor = this.getDisabledColor()
        }
        onFocusInEditor() {
            this.editorFocus = !0
        }
        onLostFocusInEditor() {
            this.editorFocus = !1
        }
        update(e) {
            super.update(e), this.editorFocus && this.shouldAutoUpdateInEditor && this.updateMouseEventColor()
        }
    }).prototype, "themeTypeNormal", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return f
        }
    }), G = t(Z.prototype, "colorSchemeNormal", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return y.Nero
        }
    }), J = t(Z.prototype, "colorWeightNormal", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return d.W400
        }
    }), Q = t(Z.prototype, "colorSchemeOtherNormal", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return O.Blue
        }
    }), V = t(Z.prototype, "customColorNormal", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new u(u.WHITE)
        }
    }), X = t(Z.prototype, "themeTypeHover", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return f
        }
    }), $ = t(Z.prototype, "colorSchemeHover", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return y.Nero
        }
    }), ee = t(Z.prototype, "colorWeightHover", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return d.W400
        }
    }), te = t(Z.prototype, "colorSchemeOtherHover", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return O.Blue
        }
    }), oe = t(Z.prototype, "customColorHover", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new u(u.WHITE)
        }
    }), re = t(Z.prototype, "themeTypePressed", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return f
        }
    }), ie = t(Z.prototype, "colorSchemePressed", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return y.Nero
        }
    }), le = t(Z.prototype, "colorWeightPressed", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return d.W400
        }
    }), se = t(Z.prototype, "colorSchemeOtherPressed", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return O.Blue
        }
    }), ne = t(Z.prototype, "customColorPressed", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new u(u.WHITE)
        }
    }), he = t(Z.prototype, "themeTypeDisable", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return f
        }
    }), ce = t(Z.prototype, "colorSchemeDisable", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return y.Nero
        }
    }), ue = t(Z.prototype, "colorWeightDisable", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return d.W400
        }
    }), ae = t(Z.prototype, "colorSchemeOtherDisable", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return O.Blue
        }
    }), me = t(Z.prototype, "customColorDisable", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new u(u.WHITE)
        }
    }), pe = t(Z.prototype, "shouldAutoUpdateInEditor", [Se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), be = t(Z.prototype, "toggleOnNode", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = t(Z.prototype, "toggleOffNode", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fe = t(Z.prototype, "useToggleOnOffText", [Se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), ye = t(Z.prototype, "toggleOnTextKey", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), de = t(Z.prototype, "toggleOffTextKey", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), Y = Z)) || Y) || Y) || Y) || Y));
    r._RF.pop()
}