import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as m from "./AppConfig.js";
import * as u from "./ThemeSystemColor.js";

function main() {
    var p, d, C, g, f, x, T, y;
    o._RF.push({}, "4aa33cmOIxE17D49O+hAYZv", "ThemeSystemForRichText", void 0);
    const {
        ccclass: _,
        property: b,
        executeInEditMode: E,
        playOnFocus: L,
        menu: I,
        requireComponent: v
    } = h, S = t("ColorPatternBeginPrefix", "<rtc=#"), D = t("ColorPatternBeginSuffix", ">"), A = t("ColorPatternEnd", "</rtc>");
    t("default", (p = v(s), d = I("Design System/Theme System for RichText"), C = b(r), g = b(n), _(f = E(f = L(f = p(f = d((T = e((x = class extends l {
        constructor(...t) {
            super(...t), i(this, "themeColorsContainer", T, this), i(this, "shouldAutoUpdateInEditor", y, this), this.themeColorList = null, this._richtext = null
        }
        onLoad() {
            this.applyTheme(), c.on("themechange", this.onThemeChanged, this)
        }
        onDestroy() {
            a(this.node) && c.off("themechange", this.onThemeChanged, this)
        }
        onEnable() {
            a(this.node) && a(this._richtext) && (this.applyTheme(), this.node.on(r.EventType.SIZE_CHANGED, this.applyTheme, this))
        }
        onDisable() {
            a(this.node) && a(this._richtext) && this.node.off(r.EventType.SIZE_CHANGED, this.applyTheme, this)
        }
        updateTheme() {
            this.applyTheme()
        }
        initComponents() {
            this._richtext || (this._richtext = this.getComponent(s)), this.themeColorList || (this.themeColorList = this.getComponents(u))
        }
        updateThemeColorList() {
            let t = m.Instance.themeUse;
            this.themeColorList.forEach((e => {
                e.setTheme(t)
            }))
        }
        onThemeChanged() {
            this.applyTheme()
        }
        applyTheme() {
            if (this.initComponents(), !this.themeColorList || 0 == this.themeColorList.length) return void console.error("Please add some ThemeSystemColor component");
            this.updateThemeColorList();
            let t = !1;
            do {
                let e = this._richtext.string.indexOf(S),
                    i = this._richtext.string.indexOf(D, e),
                    o = this._richtext.string.indexOf(A);
                if (e >= 0 && o > i && o > i) {
                    t = !0;
                    let s = this._richtext.string.indexOf("#", e),
                        r = this._richtext.string.substr(s + 1, i - s - 1),
                        n = Number(r);
                    if (isNaN(n)) return void console.error("Invalid colorIndex, " + r + " must be a number");
                    if (n >= 0 && this.themeColorList.length <= n) return void console.error("Index " + n + " out of bound " + this.themeColorList.length);
                    let h = this.themeColorList[n].getThemeColor().toHEX("#rrggbb"),
                        l = this._richtext.string.substr(e, o + 6 - e),
                        c = this._richtext.string.indexOf(">", e),
                        a = o,
                        m = this._richtext.string.substr(c + 1, a - c - 1),
                        u = this._richtext.string.replace(l, "<color=#" + h + ">" + m + "</color>");
                    this._richtext.string != u && (this._richtext.string = u)
                } else t = !1
            } while (t)
        }
        onFocusInEditor() {
            0 != this.shouldAutoUpdateInEditor && (this.themeColorList = null, this.applyTheme())
        }
    }).prototype, "themeColorsContainer", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(x.prototype, "shouldAutoUpdateInEditor", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), f = x)) || f) || f) || f) || f) || f));
    o._RF.pop()
}