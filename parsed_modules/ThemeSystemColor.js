import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as h from "./ThemeSystemModel.js";
import * as m from "./ThemeSystemType.js";
import * as s from "./ThemeSystemType.js";
import * as u from "./ColorSystemType.js";
import * as a from "./ColorSystemMainBtnState.js";
import * as y from "./ColorSystemWeight.js";
import * as p from "./ColorSystemTypeOther.js";
import * as S from "./ColorsystemLobbyV2.js";

function main() {
    var b, f, C, g, T, O, B, M, L, d, v, w, z, V, W, D, E;
    r._RF.push({}, "7484eaiqx1M0KA58n7enaLB", "ThemeSystemColor", void 0);
    const {
        ccclass: I,
        property: _,
        menu: x
    } = n;
    e("default", (b = x("Design System/Theme System Color"), f = _({
        type: i(s),
        readonly: !0
    }), C = _({
        type: i(u)
    }), g = _({
        type: i(y),
        visible: function() {
            return this.colorScheme != u.Other && this.colorScheme != u.MainBtn && this.colorScheme != u.LobbyV2
        }
    }), T = _({
        type: i(a),
        visible: function() {
            return this.colorScheme == u.MainBtn
        }
    }), O = _({
        type: i(p),
        visible: function() {
            return this.colorScheme == u.Other
        }
    }), B = _({
        tooltip: "Custom color",
        visible: function() {
            return this.colorScheme == u.Other && this.colorSchemeOther == p.Custom
        }
    }), M = _({
        type: i(S),
        visible: function() {
            return this.colorScheme == u.LobbyV2
        }
    }), I(L = b((v = t((d = class extends c {
        constructor(...e) {
            super(...e), o(this, "themeType", v, this), o(this, "colorScheme", w, this), o(this, "colorWeight", z, this), o(this, "colorMainBtn", V, this), o(this, "colorSchemeOther", W, this), o(this, "customColor", D, this), o(this, "colorSchemeLobbyV2", E, this)
        }
        getThemeColor() {
            let e;
            return e = this.colorScheme == u.Other && this.colorSchemeOther == p.Custom ? this.customColor : this.colorScheme == u.MainBtn ? h.getInstance().getColor(this.themeType, this.colorScheme, this.colorMainBtn, this.colorSchemeOther).clone() : this.colorScheme == u.LobbyV2 ? h.getInstance().getColor(this.themeType, this.colorScheme, this.colorSchemeLobbyV2, this.colorSchemeOther).clone() : h.getInstance().getColor(this.themeType, this.colorScheme, this.colorWeight, this.colorSchemeOther).clone(), e || (e = (new l).fromHEX("#E9E1D1")), e
        }
        setTheme(e) {
            this.themeType = e
        }
    }).prototype, "themeType", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return m
        }
    }), w = t(d.prototype, "colorScheme", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return u.Nero
        }
    }), z = t(d.prototype, "colorWeight", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return y.W400
        }
    }), V = t(d.prototype, "colorMainBtn", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return a.NormalBg
        }
    }), W = t(d.prototype, "colorSchemeOther", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return p.Blue
        }
    }), D = t(d.prototype, "customColor", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new l(l.WHITE)
        }
    }), E = t(d.prototype, "colorSchemeLobbyV2", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return S.ListItem_TextPrimary
        }
    }), L = d)) || L) || L));
    r._RF.pop()
}