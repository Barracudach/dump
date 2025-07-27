import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as s from "./AppConfig.js";
import * as m from "./Gradient.js";
import * as c from "./ThemeSystem.js";
import * as a from "./ThemeSystemModel.js";
import * as u from "./ThemeSystemType.js";
import * as C from "./ThemeSystemType.js";
import * as p from "./ColorSystemType.js";
import * as d from "./ColorSystemMainBtnState.js";
import * as y from "./ColorSystemWeight.js";
import * as S from "./ColorSystemTypeOther.js";
import * as b from "./ColorsystemLobbyV2.js";

function main() {
    var T, f, g, O, M, L, v, w, W, z, B, E, I, V, G, F, D, _, x, U, A, H, N, q, P, R, j, k;
    i._RF.push({}, "6444fAVbGpJLrEvu5B1pxUq", "ThemeSystemForGradient", void 0);
    const {
        ccclass: J,
        property: K,
        executeInEditMode: Q,
        playOnFocus: X,
        menu: Y,
        requireComponent: Z
    } = l;
    e("default", (T = Y("Design System/Theme System for Gradient"), f = Z(m), g = K({
        type: r(u),
        readonly: !0
    }), O = K({
        type: r(p)
    }), M = K({
        type: r(y),
        visible: function() {
            return this.toColorScheme != p.Other && this.toColorScheme != p.MainBtn && this.toColorScheme != p.LobbyV2
        }
    }), L = K({
        type: r(d),
        visible: function() {
            return this.toColorScheme == p.MainBtn
        }
    }), v = K({
        type: r(S),
        visible: function() {
            return this.toColorScheme == p.Other
        }
    }), w = K({
        tooltip: "Custom color",
        visible: function() {
            return this.toColorScheme == p.Other && this.toColorSchemeOther == S.Custom
        }
    }), W = K({
        type: r(b),
        visible: function() {
            return this.colorScheme == p.LobbyV2
        }
    }), z = K({
        type: r(u),
        readonly: !0
    }), B = K({
        type: r(p)
    }), E = K({
        type: r(y),
        visible: function() {
            return this.middleColorScheme != p.Other
        }
    }), I = K({
        type: r(S),
        visible: function() {
            return this.middleColorScheme == p.Other
        }
    }), V = K({
        tooltip: "Custom color",
        visible: function() {
            return this.toColorScheme == p.Other && this.toColorSchemeOther == S.Custom
        }
    }), J(G = Q(G = X(G = T(G = f((D = t((F = class extends c {
        constructor(...e) {
            super(...e), o(this, "toThemeType", D, this), o(this, "toColorScheme", _, this), o(this, "toColorWeight", x, this), o(this, "toColorMainBtnState", U, this), o(this, "toColorSchemeOther", A, this), o(this, "toCustomColor", H, this), o(this, "toColorSchemeLobbyV2", N, this), o(this, "middleThemeType", q, this), o(this, "middleColorScheme", P, this), o(this, "middleColorWeight", R, this), o(this, "middleColorSchemeOther", j, this), o(this, "middleCustomColor", k, this), this.gradient = null
        }
        applyThemeColor(e) {
            this.gradient && (this.gradient.startColor = e)
        }
        applyThemeEndColor(e) {
            this.gradient && (this.gradient.endColor = e)
        }
        applyThemeMiddleColor(e) {
            this.gradient && (this.gradient.middleColor = e)
        }
        setThemeEndColor(e, t = !0) {
            this.toThemeType != e && (this.toThemeType = e, t && this.applyTheme())
        }
        setThemeMiddleColor(e, t = !0) {
            this.middleThemeType != e && (this.middleThemeType = e, t && this.applyTheme())
        }
        setEndColorScheme(e, t = 0) {
            e == p.Other && null != S[t] ? (this.toColorScheme = e, this.toColorSchemeOther = t, this.applyTheme()) : e == p.LobbyV2 && null != b[t] ? (this.toColorScheme = e, this.toColorSchemeLobbyV2 = t, this.applyTheme()) : h("[ThemeSystemForGradient] invalid colorSystem " + e + ":" + t)
        }
        setMiddleColorScheme(e, t = 0) {
            this.middleColorScheme = e, this.middleColorSchemeOther = t, this.applyTheme()
        }
        setEndColorWeight(e) {
            this.toColorWeight = e, this.applyTheme()
        }
        applyTheme() {
            let e;
            super.applyTheme(), e = this.toColorScheme == p.Other && this.toColorSchemeOther == S.Custom ? this.toCustomColor : this.toColorScheme == p.MainBtn ? a.getInstance().getColor(this.toThemeType, this.toColorScheme, this.toColorMainBtnState, this.toColorSchemeOther).clone() : this.toColorScheme == p.LobbyV2 ? a.getInstance().getColor(this.toThemeType, this.toColorScheme, this.toColorSchemeLobbyV2, this.toColorSchemeOther).clone() : a.getInstance().getColor(this.toThemeType, this.toColorScheme, this.toColorWeight, this.toColorSchemeOther).clone(), this.applyThemeEndColor(e), e = this.middleColorScheme == p.Other && this.middleColorSchemeOther == S.Custom ? this.middleCustomColor : a.getInstance().getColor(this.middleThemeType, this.middleColorScheme, this.middleColorWeight, this.middleColorSchemeOther).clone(), this.applyThemeMiddleColor(e)
        }
        onLoad() {
            this.gradient = this.getComponent(m), super.onLoad()
        }
        onThemeChanged() {
            this.setThemeEndColor(s.Instance.themeUse, !1), this.setThemeMiddleColor(s.Instance.themeUse, !1), this.setTheme(s.Instance.themeUse)
        }
    }).prototype, "toThemeType", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return C
        }
    }), _ = t(F.prototype, "toColorScheme", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return p.Nero
        }
    }), x = t(F.prototype, "toColorWeight", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return y.W400
        }
    }), U = t(F.prototype, "toColorMainBtnState", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return d.NormalBg
        }
    }), A = t(F.prototype, "toColorSchemeOther", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return S.Blue
        }
    }), H = t(F.prototype, "toCustomColor", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new n(n.WHITE)
        }
    }), N = t(F.prototype, "toColorSchemeLobbyV2", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return b.ListItem_SurfaceSecondary2
        }
    }), q = t(F.prototype, "middleThemeType", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return C
        }
    }), P = t(F.prototype, "middleColorScheme", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return p.Nero
        }
    }), R = t(F.prototype, "middleColorWeight", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return y.W400
        }
    }), j = t(F.prototype, "middleColorSchemeOther", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return S.Blue
        }
    }), k = t(F.prototype, "middleCustomColor", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new n(n.WHITE)
        }
    }), G = F)) || G) || G) || G) || G) || G));
    i._RF.pop()
}