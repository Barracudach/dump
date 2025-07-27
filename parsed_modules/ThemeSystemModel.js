import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as c from "./ThemeSystemType.js";
import * as a from "./ThemeSystemType.js";
import * as m from "./ColorSystemType.js";
import * as u from "./ColorSystemMainBtnState.js";
import * as y from "./ColorSystemWeight.js";
import * as b from "./ColorSystemTypeOther.js";
import * as p from "./WPTOThemeModel.js";
import * as S from "./WPTODarkThemeModel.js";
import * as g from "./ColorsystemLobbyV2.js";

function main() {
    var f, T, C, O, d, D, M, W, B, w, L, V, v, k, I, P, _;
    r._RF.push({}, "f8843aHtO9ItIRWDN3OuTr5", "ThemeSystemModel", void 0);
    const {
        ccclass: z,
        property: H
    } = l;
    e("ColorType", (f = z("ColorType"), T = H({
        type: i(c),
        readonly: !0
    }), C = H({
        type: i(m)
    }), O = H({
        type: i(y),
        visible: function() {
            return this.colorScheme != m.Other && this.colorScheme != m.MainBtn && this.colorScheme != m.LobbyV2
        }
    }), d = H({
        type: i(u),
        visible: function() {
            return this.colorScheme == m.MainBtn
        }
    }), D = H({
        type: i(b),
        visible: function() {
            return this.colorScheme == m.Other
        }
    }), M = H({
        tooltip: "color now are using"
    }), W = H({
        type: i(g),
        visible: function() {
            return this.colorScheme == m.LobbyV2
        }
    }), f((L = t((w = class {
        constructor() {
            o(this, "themeType", L, this), o(this, "colorScheme", V, this), o(this, "colorWeight", v, this), o(this, "colorMainBtn", k, this), o(this, "colorSchemeOther", I, this), o(this, "usingColor", P, this), o(this, "colorSchemeLobbyV2", _, this)
        }
        getColor() {
            switch (this.colorScheme) {
                case m.MainBtn:
                    this.usingColor = E.getInstance().getColor(this.themeType, this.colorScheme, this.colorMainBtn, this.colorSchemeOther).clone();
                    break;
                case m.LobbyV2:
                    this.usingColor = E.getInstance().getColor(this.themeType, this.colorScheme, this.colorSchemeLobbyV2, this.colorSchemeOther).clone();
                    break;
                case m.Other:
                    if (this.colorSchemeOther == b.Custom) break;
                case m.Gold:
                case m.Nero:
                case m.Vulcano:
                case m.Background:
                default:
                    this.usingColor = E.getInstance().getColor(this.themeType, this.colorScheme, this.colorWeight, this.colorSchemeOther).clone()
            }
            return this.usingColor
        }
        setColorScheme(e, t) {
            e == m.Other && null != b[t] ? this.colorSchemeOther = t : e == m.MainBtn && null != u[t] ? this.colorMainBtn = t : e == m.LobbyV2 && null != g[t] ? this.colorSchemeLobbyV2 = t : s("[ThemeSystemModel] invalid colorSystem " + e + ":" + t)
        }
        setTheme(e) {
            this.themeType = e
        }
    }).prototype, "themeType", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return a
        }
    }), V = t(w.prototype, "colorScheme", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return m.MainBtn
        }
    }), v = t(w.prototype, "colorWeight", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return y.W400
        }
    }), k = t(w.prototype, "colorMainBtn", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return u.NormalBg
        }
    }), I = t(w.prototype, "colorSchemeOther", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return b.White
        }
    }), P = t(w.prototype, "usingColor", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new h(h.WHITE)
        }
    }), _ = t(w.prototype, "colorSchemeLobbyV2", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return g.ListItem_TextPrimary
        }
    }), B = w)) || B));
    class E {
        static getInstance() {
            return E.g_instance || (E.g_instance = new E), E.g_instance
        }
        constructor() {
            this.themeData = {}, this.themeData = {
                [c.WPTO]: p,
                [c.WPTODark]: S
            }
        }
        getThemeData() {
            return this.themeData
        }
        getColor(e, t, o, r = 0) {
            let i, l = "" + e,
                s = "" + a,
                c = "" + t;
            return i = t == m.Other ? "" + r : "" + o, this.themeData[l] && this.themeData[l][c] && this.themeData[l][c][i] ? this.themeData[l][c][i] : l != s && this.themeData[s] && this.themeData[s][c] && this.themeData[s][c][i] ? this.themeData[s][c][i] : (n("Color " + e.toString() + ":" + t.toString() + ":" + i.toString() + " not found and no fallback found"), h.WHITE)
        }
    }
    e("ThemeSystemModel", E), E.g_instance = void 0, r._RF.pop()
}