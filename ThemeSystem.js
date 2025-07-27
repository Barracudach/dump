import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as a from "./AppConfig.js";
import * as u from "./ThemeSystemColor.js";
import * as p from "./ColorSystemType.js";
import * as y from "./ColorSystemWeight.js";
import * as d from "./ColorSystemTypeOther.js";
import * as C from "./ColorsystemLobbyV2.js";
import * as S from "./ColorSystemMainBtnState.js";

function main() {
    var f, T, g;
    s._RF.push({}, "faa23hpLpJFcJ2GfnLz3V29", "ThemeSystem", void 0);
    const {
        ccclass: b,
        property: O,
        executeInEditMode: F,
        playOnFocus: I,
        menu: L
    } = i;
    e("default", b(f = F(f = I(f = L("Design System/Theme System")((g = t((T = class extends u {
        constructor(...e) {
            super(...e), o(this, "shouldAutoUpdateInEditor", g, this), this.editorFocus = !1
        }
        onLoad() {
            this.onThemeChanged(), n.on("themechange", this.onThemeChanged, this)
        }
        onThemeChanged() {
            this.setTheme(a.Instance.themeUse)
        }
        setTheme(e) {
            null != this.node && (this.themeType = e, this.applyTheme())
        }
        useCustomeColor(e) {
            this.colorScheme = p.Other, this.colorSchemeOther = d.Custom, this.customColor = e, this.applyTheme()
        }
        setColorScheme(e, t = 0) {
            if (e == p.Other && null != d[t]) this.colorSchemeOther = t;
            else if (e == p.MainBtn && null != S[t]) this.colorMainBtn = t;
            else {
                if (e != p.LobbyV2 || null == C[t]) return void r("[ThemeSystem] invalid colorSystem " + e + ":" + t);
                this.colorSchemeLobbyV2 = t
            }
            this.colorScheme = e, this.applyTheme()
        }
        setColorSystemWeight(e, t = y.W400) {
            this.hasColorSystemTypeOfWeight(e) && null != y[t] ? (this.colorWeight = t, this.colorScheme = e, this.applyTheme()) : r("[ThemeSystem] invalid colorSystem " + e + ":" + t)
        }
        hasColorSystemTypeOfWeight(e) {
            return -1 != [p.Nero, p.Vulcano, p.Gold, p.Background].indexOf(e)
        }
        applyTheme() {
            let e = this.getThemeColor();
            this.applyThemeColor(e)
        }
        applyThemeColor(e) {
            let t = this.node.getComponent(h);
            if (t) {
                let o = new l(e.r, e.g, e.b);
                t.color = o
            } else {
                let t = this.node.getComponent(c);
                if (t) {
                    let o = new l(e.r, e.g, e.b);
                    t.fontColor = o
                }
            }
            255 > e.a && (this.node.addOrGetComponent(m).opacity = e.a)
        }
        onFocusInEditor() {
            this.editorFocus = !0
        }
        onLostFocusInEditor() {
            this.editorFocus = !1
        }
        update(e) {
            this.editorFocus && this.shouldAutoUpdateInEditor && this.applyTheme()
        }
    }).prototype, "shouldAutoUpdateInEditor", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), f = T)) || f) || f) || f) || f);
    s._RF.pop()
}