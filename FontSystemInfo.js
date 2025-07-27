import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cv.js";
import * as h from "./AppConfig.js";
import * as c from "./AppConfig.js";
import * as f from "./AppConfig.js";
import * as p from "./AppConfig.js";
import * as y from "./AppConfig.js";
import * as l from "./AppConfig.js";

function main() {
    var F, g, d, m, S, b, T, C, D, M, W, z, A, V, v, L, B, w;
    i._RF.push({}, "c10a4P3szZKA46sQyk4kB+n", "FontSystemInfo", void 0);
    const {
        ccclass: E,
        property: I,
        executeInEditMode: U,
        playOnFocus: O
    } = o;
    t("default", (F = I({
        type: s(h),
        readonly: !0
    }), g = I({
        type: s(p)
    }), d = I({
        type: s(h),
        visible: function() {
            return this.useMethod == p.CustomOverride
        }
    }), m = I({
        type: s(l)
    }), S = I({
        type: s(y),
        visible: function() {
            return this.fontWeight == l.Custom
        }
    }), b = I({
        tooltip: "Whether to use System Font"
    }), T = I({
        type: s(f),
        visible: function() {
            return this.useSystemDefaultFont
        }
    }), E(C = U(C = O((M = e((D = class extends r {
        constructor(...t) {
            super(...t), n(this, "fontType", M, this), n(this, "useMethod", W, this), n(this, "customOverrideFontType", z, this), n(this, "fontWeight", A, this), n(this, "fontCustomWeight", V, this), n(this, "fontSize", v, this), n(this, "useBitmapFont", L, this), this.isFontSupported = void 0, n(this, "useSystemDefaultFont", B, this), n(this, "systemDefaultFontType", w, this), this.currentValues = {}, this.editorFocus = !1
        }
        onLoad() {
            a.MessageCenter.register("onFontResLoaded", this.onFontResLoaded.bind(this), this), a.MessageCenter.register("change-scene", this.onChangeScene.bind(this), this)
        }
        onChangeScene() {
            this.applyFont()
        }
        onEnable() {
            this.applyFont(a.appConfig.isWebApp), a.MessageCenter.register(a.config.CHANGE_LANGUAGE, this.applyFont.bind(this), this)
        }
        onDisable() {
            a.MessageCenter.unregister(a.config.CHANGE_LANGUAGE, this)
        }
        onDestroy() {
            a.MessageCenter.unregister("onFontResLoaded", this), a.MessageCenter.unregister("change-scene", this)
        }
        getDefaultFont() {
            let t;
            return t = this.useMethod == p.MainFont ? this.getMainFontUse() : this.useMethod == p.SecondaryFont ? this.getSecondaryFontUse() : this.customOverrideFontType, t
        }
        getMainFontUse() {
            let t;
            return t = a.config.getCurrentLanguageDetails().fontType, t
        }
        getSecondaryFontUse() {
            let t;
            return t = a.config.getCurrentLanguageDetails().secondaryFontType, t
        }
        checkAndSetSystemFont() {
            this.useSystemDefaultFont = a.config.getCurrentLanguageDetails().fontType == h.SystemDefault, this.currentValues.useSystemDefaultFont = this.useSystemDefaultFont
        }
        onFocusInEditor() {
            this.editorFocus = !0
        }
        onLostFocusInEditor() {
            this.editorFocus = !1
        }
        update(t) {
            this.editorFocus && this.isChanged() && this.applyFont()
        }
        isChanged() {
            return this.useMethod == p.CustomOverride && this.currentValues.fontType != this.customOverrideFontType || this.useMethod == p.SecondaryFont && this.currentValues.fontType != this.getSecondaryFontUse() || this.useMethod == p.MainFont && this.currentValues.fontType != this.getMainFontUse() || this.currentValues.fontWeight !== this.fontWeight || this.currentValues.fontType !== this.fontType || this.currentValues.fontSize !== this.fontSize || this.currentValues.fontCustomWeight !== this.fontCustomWeight || this.currentValues.useBitmapFont !== this.useBitmapFont || this.currentValues.useSystemDefaultFont !== this.useSystemDefaultFont || this.currentValues.systemDefaultFontType !== this.systemDefaultFontType
        }
        setCurrentValues() {
            this.currentValues.fontWeight = this.fontWeight, this.currentValues.fontType = this.fontType, this.currentValues.fontSize = this.fontSize, this.currentValues.fontCustomWeight = this.fontCustomWeight, this.currentValues.useBitmapFont = this.useBitmapFont, this.currentValues.systemDefaultFontType = this.systemDefaultFontType, this.checkAndSetSystemFont()
        }
        applyFont(t = !1) {
            this.useBitmapFont && !1 !== this.isFontSupported ? this.applyBitmapFont() : this.applyTTFFont()
        }
        applyBitmapFont() {
            this.fontType = this.getDefaultFont(), c.getInstance().getBitmapFont((t => {
                t ? (this.getFontAndApply(t), this.isFontSupported = !0) : (u(`BMFont ${h[this.fontType]}-${y[this.fontCustomWeight]} not found. Use TTFont instead`), this.isFontSupported = !1, c.getInstance().getFont(this.getFontAndApply.bind(this), this.fontType, this.fontWeight, this.fontCustomWeight))
            }), this.fontType, this.fontWeight, this.fontCustomWeight, this.fontSize)
        }
        applyTTFFont() {
            this.fontType = this.getDefaultFont(), this.setCurrentValues(), c.getInstance().getFont(this.getFontAndApply.bind(this), this.fontType, this.fontWeight, this.fontCustomWeight)
        }
        getFontAndApply(t) {}
        updateLabelSize() {}
        onFontResLoaded() {
            c.getInstance().isFontLoaded = !0, this.applyFont()
        }
        getSystemFontName() {
            return f[this.systemDefaultFontType].toString()
        }
        setFontSize(t) {
            this.fontSize = t, this.updateLabelSize()
        }
    }).prototype, "fontType", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return h.SFProDisplay
        }
    }), W = e(D.prototype, "useMethod", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return p.MainFont
        }
    }), z = e(D.prototype, "customOverrideFontType", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return h.SFProDisplay
        }
    }), A = e(D.prototype, "fontWeight", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return l.Custom
        }
    }), V = e(D.prototype, "fontCustomWeight", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return y.W100
        }
    }), v = e(D.prototype, "fontSize", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 40
        }
    }), L = e(D.prototype, "useBitmapFont", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), B = e(D.prototype, "useSystemDefaultFont", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), w = e(D.prototype, "systemDefaultFontType", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return f.Arial
        }
    }), C = D)) || C) || C) || C));
    i._RF.pop()
}