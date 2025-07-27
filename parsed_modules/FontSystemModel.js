import * as t from "./cc.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./cv.js";
import * as S from "./AppConfig.js";

function main() {
    t._RF.push({}, "5b687BkEh5NPYs1usWLuKXj", "FontSystemModel", void 0);
    let g = e("FontSystemType", function(e) {
            return e[e.SFProDisplay = 0] = "SFProDisplay", e[e.IBMPlexSansJP = 3] = "IBMPlexSansJP", e[e.IBMPlexSansKR = 4] = "IBMPlexSansKR", e[e.NotoSansThai = 5] = "NotoSansThai", e[e.SystemDefault = 6] = "SystemDefault", e[e.IBMPlexSansCondensed = 8] = "IBMPlexSansCondensed", e[e.PingFang = 9] = "PingFang", e
        }({})),
        y = (e("SystemFontType", function(e) {
            return e[e.Arial = 0] = "Arial", e[e.Verdana = 1] = "Verdana", e[e.Courier = 2] = "Courier", e[e.Serif = 3] = "Serif", e
        }({})), e("FontOverride", function(e) {
            return e[e.MainFont = 0] = "MainFont", e[e.SecondaryFont = 1] = "SecondaryFont", e[e.CustomOverride = 2] = "CustomOverride", e
        }({})), e("FontSystemWeight", function(e) {
            return e[e.Custom = 0] = "Custom", e[e.TitleSemibold = 1] = "TitleSemibold", e[e.HeadlineSemibold = 2] = "HeadlineSemibold", e[e.TextSemiBold = 3] = "TextSemiBold", e[e.Text1Medium = 4] = "Text1Medium", e[e.Text2Regular = 5] = "Text2Regular", e[e.Text3Regular = 6] = "Text3Regular", e[e.Text4Medium = 7] = "Text4Medium", e[e.Subhead1Medium = 8] = "Subhead1Medium", e[e.Subhead2Semibold = 9] = "Subhead2Semibold", e[e.CaptionCapsSemibold = 10] = "CaptionCapsSemibold", e[e.CaptionCapsMedium = 11] = "CaptionCapsMedium", e
        }({}))),
        F = e("FontSystemWeightCustom", function(e) {
            return e[e.W100 = 0] = "W100", e[e.W200 = 1] = "W200", e[e.W300 = 2] = "W300", e[e.W400 = 3] = "W400", e[e.W500 = 4] = "W500", e[e.W600 = 5] = "W600", e[e.W700 = 6] = "W700", e[e.W800 = 7] = "W800", e[e.W900 = 8] = "W900", e
        }({}));
    const m = e("FontSystems", [{
            key: g.SFProDisplay,
            value: [{
                key: F.W100,
                value: "SFProDisplay_Light"
            }, {
                key: F.W200,
                value: "SFProDisplay_Light"
            }, {
                key: F.W300,
                value: "SFProDisplay_Light"
            }, {
                key: F.W400,
                value: "SFProDisplay_Regular"
            }, {
                key: F.W500,
                value: "SFProDisplay_Medium"
            }, {
                key: F.W600,
                value: "SFProDisplay_SemiBold"
            }, {
                key: F.W700,
                value: "SFProDisplay_Bold"
            }, {
                key: F.W800,
                value: "SFProDisplay_Heavy"
            }, {
                key: F.W900,
                value: "SFProDisplay_Heavy"
            }]
        }, {
            key: g.IBMPlexSansJP,
            value: [{
                key: F.W100,
                value: "IBMPlexSansJP-Light"
            }, {
                key: F.W200,
                value: "IBMPlexSansJP-Light"
            }, {
                key: F.W300,
                value: "IBMPlexSansJP-Light"
            }, {
                key: F.W400,
                value: "IBMPlexSansJP-Regular"
            }, {
                key: F.W500,
                value: "IBMPlexSansJP-Medium"
            }, {
                key: F.W600,
                value: "IBMPlexSansJP-SemiBold"
            }, {
                key: F.W700,
                value: "IBMPlexSansJP-SemiBold"
            }, {
                key: F.W800,
                value: "IBMPlexSansJP-Bold"
            }, {
                key: F.W900,
                value: "IBMPlexSansJP-Bold"
            }]
        }, {
            key: g.IBMPlexSansKR,
            value: [{
                key: F.W100,
                value: "IBMPlexSansKR-Light"
            }, {
                key: F.W200,
                value: "IBMPlexSansKR-Light"
            }, {
                key: F.W300,
                value: "IBMPlexSansKR-Light"
            }, {
                key: F.W400,
                value: "IBMPlexSansKR-Regular"
            }, {
                key: F.W500,
                value: "IBMPlexSansKR-Medium"
            }, {
                key: F.W600,
                value: "IBMPlexSansKR-SemiBold"
            }, {
                key: F.W700,
                value: "IBMPlexSansKR-SemiBold"
            }, {
                key: F.W800,
                value: "IBMPlexSansKR-Bold"
            }, {
                key: F.W900,
                value: "IBMPlexSansKR-Bold"
            }]
        }, {
            key: g.NotoSansThai,
            value: [{
                key: F.W100,
                value: "NotoSansThai-Light"
            }, {
                key: F.W200,
                value: "NotoSansThai-Light"
            }, {
                key: F.W300,
                value: "NotoSansThai-Light"
            }, {
                key: F.W400,
                value: "NotoSansThai-Regular"
            }, {
                key: F.W500,
                value: "NotoSansThai-Medium"
            }, {
                key: F.W600,
                value: "NotoSansThai-SemiBold"
            }, {
                key: F.W700,
                value: "NotoSansThai-SemiBold"
            }, {
                key: F.W800,
                value: "NotoSansThai-Bold"
            }, {
                key: F.W900,
                value: "NotoSansThai-Bold"
            }]
        }, {
            key: g.IBMPlexSansCondensed,
            value: [{
                key: F.W100,
                value: "IBMPlexSansCond_Light"
            }, {
                key: F.W200,
                value: "IBMPlexSansCond_Light"
            }, {
                key: F.W300,
                value: "IBMPlexSansCond_Regular"
            }, {
                key: F.W400,
                value: "IBMPlexSansCond_Regular"
            }, {
                key: F.W500,
                value: "IBMPlexSansCond_Medium"
            }, {
                key: F.W600,
                value: "IBMPlexSansCond_Medium"
            }, {
                key: F.W700,
                value: "IBMPlexSansCond_Medium"
            }, {
                key: F.W800,
                value: "IBMPlexSansCond_SemiBold"
            }, {
                key: F.W900,
                value: "IBMPlexSansCond_SemiBold"
            }]
        }, {
            key: g.PingFang,
            value: [{
                key: F.W100,
                value: "FF2_PingFangSC_Regular"
            }, {
                key: F.W200,
                value: "FF2_PingFangSC_Regular"
            }, {
                key: F.W300,
                value: "FF2_PingFangSC_Regular"
            }, {
                key: F.W400,
                value: "FF2_PingFangSC_Regular"
            }, {
                key: F.W500,
                value: "FF2_PingFangSC_Medium"
            }, {
                key: F.W600,
                value: "FF2_PingFangSC_Medium"
            }, {
                key: F.W700,
                value: "FF2_PingFangSC_Medium"
            }, {
                key: F.W800,
                value: "FF2_PingFangSC_Bold"
            }, {
                key: F.W900,
                value: "FF2_PingFangSC_Bold"
            }]
        }]),
        c = e("BMFontSystems", [{
            key: g.IBMPlexSansCondensed,
            value: [{
                key: F.W100,
                value: "IBMPlexSansCond_Regular"
            }, {
                key: F.W200,
                value: "IBMPlexSansCond_Regular"
            }, {
                key: F.W300,
                value: "IBMPlexSansCond_Regular"
            }, {
                key: F.W400,
                value: "IBMPlexSansCond_Regular"
            }, {
                key: F.W500,
                value: "IBMPlexSansCond_Medium"
            }, {
                key: F.W600,
                value: "IBMPlexSansCond_Medium"
            }, {
                key: F.W700,
                value: "IBMPlexSansCond_Medium"
            }]
        }]),
        C = e("BMFontSizes", {
            IBMPlexSansCond_Regular: [30],
            IBMPlexSansCond_Medium: [30]
        });
    class B {
        static getInstance() {
            return B.g_instance || (B.g_instance = new B), B.g_instance
        }
        set isFontLoaded(e) {
            this._isFontLoaded = e
        }
        get isFontLoaded() {
            return this._isFontLoaded
        }
        constructor() {
            this.fontCache = new Map, this._shouldPreLoadAllFonts = !0, this._keepFontsLoaded = !0, this._isFontLoaded = !1, h.appConfig.getGeneralConfig().isWebApp || (this._shouldPreLoadAllFonts ? this.preLoadAllFonts() : this.preLoadCurrentLangFont(), this.isFontLoaded = !0)
        }
        preLoadAllFonts() {
            this.initBitmapFontCache(g.IBMPlexSansCondensed);
            let e = Object.keys(g);
            for (let t = 0; t < e.length; t++) this.initFontCache(g[e[t]])
        }
        preLoadCurrentLangFont() {
            const e = h.config.getCurrentLanguageDetails();
            this.initFontCache(e.fontType), this.initFontCache(e.secondaryFontType)
        }
        initFontCache(e) {
            if (e != g.SystemDefault)
                for (let t = 0; t < Object.keys(F).length; t++) this.addFontWeightToCache(this.getFontPath(e, y.Custom, t))
        }
        addFontWeightToCache(e, t = null) {
            null != e && "" != e && a.load(e, n, function(a, n) {
                a ? console.error(a.message || a) : (this.fontCache.set(e, n), h.appConfig.getGeneralConfig().isWebApp || this.createCacheLabel(e, n), null == t || t(n))
            }.bind(this))
        }
        async addFontWeightToCache_Editor(e, t = null) {
            let a = "db://assets/resources/" + e + ".ttf",
                n = await Editor.Message.request("asset-db", "query-uuid", a);
            l.loadAny({
                uuid: n
            }, function(a, n) {
                a ? console.error(a.message || a) : (this.fontCache.set(e, n), null == t || t(n))
            }.bind(this))
        }
        createCacheLabel(e, t) {
            if (!this._keepFontsLoaded) return;
            let a = new i(e);
            a.addComponent(o).font = t, s.addPersistRootNode(a)
        }
        getFontPath(e, t, a) {
            let n = g[e];
            if (null == n || "" == n) return;
            let l = "Fonts/" + n;
            if (t == y.Custom) l += this.getFontFileName(e, a);
            else switch (t) {
                case y.TitleSemibold:
                case y.HeadlineSemibold:
                case y.TextSemiBold:
                case y.Subhead1Medium:
                case y.Subhead2Semibold:
                case y.CaptionCapsMedium:
                    l += this.getFontFileName(e, F.W600);
                    break;
                case y.Text1Medium:
                case y.Text4Medium:
                    l += this.getFontFileName(e, F.W500);
                    break;
                case y.Text2Regular:
                case y.Text3Regular:
                    l += this.getFontFileName(e, F.W400);
                    break;
                case y.CaptionCapsSemibold:
                    l += this.getFontFileName(e, F.W700)
            }
            return l
        }
        getFont(e, t, a, n = 0) {
            if (t == g.SystemDefault) return void(null == e || e(null));
            let l = this.getFontPath(t, a, n);
            this.fontCache.has(l) ? null == e || e(this.fontCache.get(l)) : this.addFontWeightToCache(l, e)
        }
        getFontFileName(e, t) {
            const a = this.getElementByKey(m, e);
            let n = "";
            if (void 0 !== a) {
                const e = this.getElementByKey(a.value, t);
                void 0 !== e && (n += "/" + e.value)
            }
            return n
        }
        getElementByKey(e, t) {
            return e.find((e => e.key === t))
        }
        initBitmapFontCache(e) {
            for (let a = 0; a < Object.keys(F).length; a++) {
                var t;
                if (null != (t = C[e]) && t[a])
                    for (let t of C[e][a].value) this.addBitmapFontToCache(this.getBitmapFontPath(e, y.Custom, a, t))
            }
        }
        getBitmapFont(e, t, a, n = 0, l = 0) {
            var i;
            let o = this.getBitmapFontPath(t, a, n, l);
            !this.fontCache.has(o) || null != (i = this.fontCache.get(o)) && i.isValid || this.fontCache.delete(o), this.fontCache.has(o) ? null == e || e(this.fontCache.get(o)) : l > 0 && o.endsWith(".fnt") ? this.addBitmapFontToCache(o, e) : null == e || e(null)
        }
        getBitmapFontPath(e, t, a, n) {
            let l = "BMFonts/" + g[e];
            if (t == y.Custom) l += this.getBitmapFontFileName(e, a, n);
            else switch (t) {
                case y.TitleSemibold:
                case y.HeadlineSemibold:
                case y.TextSemiBold:
                case y.Subhead1Medium:
                case y.Subhead2Semibold:
                case y.CaptionCapsMedium:
                    l += this.getBitmapFontFileName(e, F.W600, n);
                    break;
                case y.Text1Medium:
                case y.Text4Medium:
                    l += this.getBitmapFontFileName(e, F.W500, n);
                    break;
                case y.Text2Regular:
                case y.Text3Regular:
                    l += this.getBitmapFontFileName(e, F.W400, n);
                    break;
                case y.CaptionCapsSemibold:
                    l += this.getBitmapFontFileName(e, F.W700, n)
            }
            return l
        }
        getBitmapFontFileName(e, t, a) {
            const n = this.getElementByKey(c, e);
            if (void 0 !== n) {
                const e = this.getElementByKey(n.value, t);
                if (void 0 !== e) {
                    let t = C[e.value];
                    if (null == t || 0 == t.length) return "";
                    let n = t[0];
                    for (const e of t)
                        if (n < e && (n = e), n >= a) break;
                    return `/${e.value}-${n}.fnt`
                }
            }
            return ""
        }
        addBitmapFontToCache(e, t = null) {
            let a = e.replace(".fnt", ""),
                n = n => {
                    n.load(a, r, ((a, n) => {
                        if (a) return u(a.message || a), void(null == t || t(null));
                        this.fontCache.set(e, n), null == t || t(n)
                    }))
                },
                i = l.getBundle(h.appConfig.layoutUse);
            i ? n(i) : l.loadBundle(h.appConfig.layoutUse, ((e, a) => {
                if (e) return u(e.message || e), void(null == t || t(null));
                n(a)
            }))
        }
        async addBitmapFontToCache_Editor(e, t = null) {
            let a = "db://assets/bundles/" + S.Instance.layoutUse + "/" + e,
                n = await Editor.Message.request("asset-db", "query-uuid", a);
            if (void 0 === n) return d(`BMFont ${a} not found`), void(null == t || t(null));
            l.loadAny({
                uuid: n
            }, ((a, n) => {
                if (a) return u(a.message || a), void(null == t || t(null));
                this.fontCache.set(e, n), null == t || t(n)
            }))
        }
    }
    e("FontSystemModel", B), B.g_instance = void 0, t._RF.pop()
}