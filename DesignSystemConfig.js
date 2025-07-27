import * as t from "./cc.js";
import * as s from "./cc.js";
import * as i from "./ThemeSystemType.js";
import * as h from "./ThemeSystemType.js";
import * as n from "./cv.js";
import * as a from "./WebViewThemeType.js";

function main() {
    t._RF.push({}, "92dc3Jc6/1Mt4YGi5/gmpHl", "DesignSystemConfig", void 0);
    class m {
        get themeUseIndex() {
            if (this.usingDefaultTheme) {
                const e = n.tools.getCurrentThemeUsage();
                e >= 0 && e < this.availableThemes.length && (this._themeUseIndex = e), this.usingDefaultTheme = !1
            }
            return this._themeUseIndex
        }
        set themeUseIndex(e) {
            e < 0 || e >= this.availableThemes.length || this._themeUseIndex == e || (this._themeUseIndex = e, this.usingDefaultTheme || (n.tools.setCurrentThemeUsage(this._themeUseIndex), s.emit("themechange")))
        }
        get themeUse() {
            return this.availableThemes && this.themeUseIndex >= 0 && this.themeUseIndex < this.availableThemes.length ? this.availableThemes[this.themeUseIndex] : h
        }
        get webViewThemeUse() {
            return this.themeUse != i.WPTODark ? a.LIGHT : a.DARK
        }
        get isDarkModeAvailable() {
            return -1 != this.availableThemes.indexOf(i.WPTODark)
        }
        get isDarkModeActive() {
            return this.themeUse == i.WPTODark
        }
        getThemeIndex(e) {
            return Math.max(this.availableThemes.indexOf(e), 0)
        }
        constructor(...e) {
            this.availableThemes = void 0, this._themeUseIndex = 0, this.usingDefaultTheme = !0, this.set(...e)
        }
        set(...e) {
            Object.assign(this, ...e)
        }
    }
    e("DesignSystemConfig", m);
    e("WPTODesign", new m({
        availableThemes: [i.WPTODark],
        themeUseIndex: 0
    }));
    t._RF.pop()
}