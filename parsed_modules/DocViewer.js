import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as S from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as p from "./cc.js";
import * as w from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as T from "./ThemeSystemModel.js";
import * as x from "./Enum.js";
import * as C from "./Enum.js";
import * as V from "./HtmlExtension.js";
import * as F from "./i18nText.js";
import * as L from "./APAspectRatioFitter.js";
import * as R from "./cv.js";
import * as v from "./ColorSystemType.js";
import * as _ from "./ColorSystemWeight.js";
import * as k from "./ColorSystemTypeOther.js";

function main() {
    var D, I, P, W, A, B, N, H, E, M, U, z, $, O, j, q, G, J, K, Y, Q;
    i._RF.push({}, "cc001C6FWNA+5YnoKsjrbmp", "DocViewer", void 0);
    const {
        ccclass: X,
        property: Z
    } = d;
    e("DocViewer", (D = Z({
        tooltip: "Doc Name to be loaded.\nIf is specified then will load it in onEnable"
    }), I = Z(o), P = Z(F), W = Z(l), A = Z(s), B = Z(r), N = Z(a), H = Z(c), E = Z({
        type: h(C)
    }), M = Z({
        type: h(C)
    }), X(($ = t((z = class extends u {
        constructor(...e) {
            super(...e), n(this, "docName", $, this), n(this, "isFullPage", O, this), n(this, "titleText", j, this), n(this, "contentParent", q, this), n(this, "contentLabel", G, this), n(this, "contentRichText", J, this), n(this, "webView", K, this), n(this, "imageView", Y, this), n(this, "_contentType", Q, this), this._docType = x.TermsAndConditions, this._docName = "", this._docVersion = -1, this._docLoadedCallback = null, this._richTextNodes = []
        }
        get contentType() {
            return this._contentType
        }
        set contentType(e) {
            this._contentType = e, e == C.URL || e == C.HTML ? (this.contentParent.active = !1, this.showWebView()) : (this.hideWebView(), this.contentParent.active = !0, this.contentLabel.node.active = e == C.PlainText, this.contentRichText.node.active = e == C.RichText, this.imageView && (this.imageView.node.active = e == C.HTMLImage))
        }
        set docType(e) {
            this._docType = e, this.loadDoc(x[this._docType])
        }
        set docURL(e) {
            var t;
            this.contentType = C.URL, this.webView.url = e, null == (t = this._docLoadedCallback) || t.call(this)
        }
        onEnable() {
            var e;
            p(this.webView, !0) && (this.webView.node.on("loaded", this.onWebViewLoaded, this), null == (e = this.webView) || e.setBackgroundTransparent(!1));
            this.docName && this.loadDoc(this.docName)
        }
        onDisable() {
            p(this.webView, !0) && this.webView.node.off("loaded", this.onWebViewLoaded, this), this.unscheduleAllCallbacks()
        }
        onWebViewLoaded(e) {
            this.loadFontAndSetBgColor()
        }
        getBgColorCSS() {
            return T.getInstance().getColor(R.appConfig.themeUse, v.Nero, _.W600).toCSS()
        }
        getTextColorCSS() {
            return T.getInstance().getColor(R.appConfig.themeUse, v.Other, null, k.TypoGraphyMain).toCSS()
        }
        getSecondaryTextColorCSS() {
            return T.getInstance().getColor(R.appConfig.themeUse, v.Other, null, k.TypoGraphySecond).toCSS()
        }
        getFontFamilyCSS() {
            return "IBM Plex Sans Condensed"
        }
        getFontsArray() {
            return ["IBM Plex Sans Condensed"]
        }
        getFontsURL() {
            return `https://fonts.googleapis.com/css2?${this.getFontsArray().map((e=>`family=${encodeURIComponent(e)}`)).join("&")}&display=block`
        }
        getFontSizeCSS() {
            return g.isBrowser ? "28px" : "14px"
        }
        getFontWeightCSS() {
            return "400"
        }
        hideWebView() {
            this.webView && (this.webView.node.active = !1, this.webView.enabled = !1)
        }
        showWebView() {
            this.webView && (this.webView.node.active = !0, this.webView.enabled = !0, this.loadFontAndSetBgColor())
        }
        loadDoc(e, t, n, i) {
            this.unscheduleAllCallbacks(), this._richTextNodes.forEach((e => e.destroy())), this._richTextNodes = [], this._docName = e;
            let o = `${e}`;
            const l = R.appConfig.getRegistrationConfig().legalDocsNamePrefix;
            l && o.startsWith(l) && (o = o.replace(l, "")), this.titleText && this.titleText.setKey("Document_title_" + o, !0), null != t && t >= 0 && (this._docVersion = t), null != n && (this.contentType = n), null != i && (this._docLoadedCallback = i), this.fetchDocumentContent()
        }
        fetchDocumentContent() {
            this.contentLabel.string = "", this.contentRichText.string = "", this.imageView && (this.imageView.spriteFrame = null), this.contentType == C.HTML && this.webView.evaluateJS(this.getResetSetBgColorScript());
            let e = R.httpHandler.getLegalDocsURL(this._docName, this._docVersion);
            this.contentType == C.HTMLImage ? this.fetchImageFromLink(e) : R.http.sendRequestV2(e, {}, this.onFetchDocSuccess.bind(this), this.onFetchDocError.bind(this), R.http.HttpRequestType.GET)
        }
        fetchImageFromLink(e) {
            R.config.haveWebView() ? this.docURL = e : V.extractImageUrlInWebpage(e, this).then((t => {
                var n;
                null != t && null != (n = t.node) && n.activeInHierarchy && m.loadRemote(t.imageUrl, {
                    reload: !0,
                    cacheAsset: !1,
                    cacheEnabled: !1,
                    type: "png"
                }, ((n, i) => {
                    var o;
                    t.node.activeInHierarchy && null == n ? (t.imageView.spriteFrame = new b, t.imageView.spriteFrame.texture = i, t.imageView.getComponent(L).onSizeChanged(), null == (o = this._docLoadedCallback) || o.call(this)) : n && y("[DocViewer => fetchImageFromLink loadRemote] => ", e, n)
                }))
            })).catch((t => {
                y("[DocViewer => fetchImageFromLink] => ", e, t.errorString)
            }))
        }
        onFetchDocSuccess(e) {
            var t;
            if (null != (t = this.node) && t.activeInHierarchy)
                if (null == e || null == e.document) this.hideWebView(), R.popUp.showMsgI18n({
                    txt: "Document_invalid",
                    sureCallback: this.close.bind(this),
                    msgType: R.Enum.ToastType.ToastTypeWarning
                });
                else {
                    var n;
                    if (this.contentType == C.HTML) {
                        let t = e.document;
                        t = t.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, "-").replace(/\uFF62|\uFF80|\uFF97/g, "").replace(/[\u200B-\u200D\uFEFF]/g, "").replace(/"/g, '\\"').replace(/(?:\r\n|\r|\n)/g, "<br>");
                        const n = 'document.body.innerHTML = "' + t + '";';
                        this.applyStyles(n)
                    } else if (this.contentType == C.RichText) {
                        this.contentRichText.maxWidth = this.contentRichText.node.getComponent(f).width, this.contentRichText.node.active = !1;
                        let t = V.toRichTextArray(e.document, this.contentRichText.fontSize),
                            n = 0,
                            i = t.length,
                            o = 0;
                        for (; n < i; n++) {
                            let e = t[n];
                            const i = e.length;
                            if (0 != i)
                                if (i > 1500) {
                                    let t = this.splitTextIntoParts(e, 1500);
                                    for (let e = 0; e < t.length; e++) this.scheduleOnce(this.newTextP.bind(this, t[e]), o), o += w.deltaTime
                                } else this.scheduleOnce(this.newTextP.bind(this, e), o), o += w.deltaTime
                        }
                    } else this.contentLabel.string = e.document;
                    null == (n = this._docLoadedCallback) || n.call(this, e)
                }
        }
        loadFontAndSetBgColor() {
            const e = `function loadfont() {\n        document.body.style.backgroundColor = '${this.getBgColorCSS()}';\n        if (!document.querySelector('link[data-fonts="multiple"]')) {\n            const fontLink = document.createElement('link');\n            fontLink.rel = 'stylesheet';\n            fontLink.href = '${this.getFontsURL()}';\n            fontLink.setAttribute('data-fonts', 'multiple');\n            document.head.appendChild(fontLink);\n        }} loadfont();`;
            this.webView.evaluateJS(e)
        }
        getResetSetBgColorScript() {
            return `function resetAndSetBgColor(){document.body.innerHTML='';document.body.style.backgroundColor = '${this.getBgColorCSS()}';} resetAndSetBgColor();`
        }
        getStylesScript() {
            const e = this.getBgColorCSS(),
                t = this.getSecondaryTextColorCSS(),
                n = this.getFontSizeCSS(),
                i = this.getFontWeightCSS(),
                o = `"'${this.getFontFamilyCSS()}', Arial, sans-serif"`;
            return `\n            function applyStyle(el) {\n                el.style.backgroundColor = '${e}';\n                el.style.color = '${t}';\n                el.style.fontFamily = ${o};\n                el.style.fontSize = '${n}';\n                el.style.fontWeight = '${i}';\n                if(el.localName === 'p') {\n                    el.style.margin = '8px 0';\n                    el.style.lineHeight = '1.4';               \n                }\n                if(el.localName === 'a') {\n                    el.style.textDecoration = 'none';\n                }\n            }\n            function applyStylesToElements() {\n                document.body.style.fontFamily = ${o};\n                const elms = document.querySelectorAll('span, p, a, li');\n                for (let i = 0; i < elms.length; i++) {\n                    applyStyle(elms[i]);\n                }\n            } applyStylesToElements();\n        `
        }
        applyStyles(e) {
            const t = e + this.getStylesScript();
            this.webView.evaluateJS(t)
        }
        newTextP(e) {
            let t = S(this.contentRichText.node);
            t.active = !0, this.contentRichText.node.parent.addChild(t), t.getComponent(r).string = e, this._richTextNodes.push(t)
        }
        splitTextIntoParts(e, t) {
            const n = [];
            let i = e;
            for (; i.length > t;) {
                let e = i.indexOf(" ", t);
                if (-1 === e) {
                    n.push(i);
                    break
                }
                n.push(i.substring(0, e)), i = i.substring(e).trim()
            }
            return i.length > 0 && n.push(i), n
        }
        onFetchDocError(e) {
            var t;
            null != (t = this.node) && t.activeInHierarchy && (this.hideWebView(), R.popUp.showFirstServerError(e, this.close.bind(this)))
        }
        onBtnBackClick() {
            R.AudioMgr.playButtonSound("back_button.mp3"), this.close(!0)
        }
        close(e = !1) {
            this.hideWebView(), (e || this.isFullPage) && this.node.destroy()
        }
    }).prototype, "docName", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), O = t(z.prototype, "isFullPage", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), j = t(z.prototype, "titleText", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(z.prototype, "contentParent", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(z.prototype, "contentLabel", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(z.prototype, "contentRichText", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(z.prototype, "webView", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(z.prototype, "imageView", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(z.prototype, "_contentType", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return C.PlainText
        }
    }), t(z.prototype, "contentType", [M], Object.getOwnPropertyDescriptor(z.prototype, "contentType"), z.prototype), U = z)) || U));
    i._RF.pop()
}