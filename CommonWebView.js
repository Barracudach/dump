import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as w from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as d from "./cv.js";
import * as c from "./WebViewUIData.js";
import * as p from "./Base64Img.js";
import * as v from "./WebviewHelperData.js";
import * as g from "./Enum.js";
import * as m from "./Enum.js";
import * as V from "./NativeEvent.js";
import * as W from "./CommonTools.js";

function main() {
    var S, f, C, E, P, L, A, y, M, _, T, N, k, I, D, U;
    s._RF.push({}, "6b2a5o4YpVEDreGDEaY13SM", "CommonWebView", void 0);
    const {
        ccclass: O,
        property: R,
        executionOrder: x
    } = a;
    let B = e("ACTION_NAMES", function(e) {
            return e.GET_SCREENSHOT = "screenshot", e.TAKE_SCREENSHOT = "takescreenshot", e
        }({})),
        H = e("CommonWebView", (S = x(-1), f = R({
            tooltip: "Is this web view in a pop-up?"
        }), C = R(o), E = R(p), P = R([n]), L = R([n]), A = R([n]), O(y = S(((U = class e extends r {
            constructor(...e) {
                super(...e), t(this, "isPopup", _, this), t(this, "webView", T, this), t(this, "baseImg", N, this), t(this, "onWebviewLoaded", k, this), t(this, "onWebviewLoadError", I, this), t(this, "onWebviewLoading", D, this), this.webScheme = "", this.isWebViewLoaded = !1, this._webViewShowPos = new l(0, 0, 0), this._webViewMovePos = new l(-5e3, -5e3, 0), this.urlToCall = null, this.shouldShowWebview = !1, this.isMoveActiveWebView = !0, this._allowScreenshot = !0, this.isWebviewActive = null, this.parentNode = null
            }
            get url() {
                return h(this.webView, !0) ? this.webView.url : "about:blank"
            }
            set allowScreenshot(e) {
                this._allowScreenshot = e
            }
            onLoad() {
                this.reset(null)
            }
            onEnable() {
                var e, i, t;
                d.MessageCenter.register(d.Enum.MessageCenterAction.onDisablePopUpMsg, this.onPopupEnable.bind(this, !1), this), d.MessageCenter.register(d.Enum.MessageCenterAction.onOpenPopUpMsg, this.onPopupEnable.bind(this, !0), this), d.MessageCenter.register("HideWebview_ShowWindows", this.hideWebViewShowWindow.bind(this), this.node), null == (e = this.webView) || e.node.on("loaded", this.onWebViewLoaded.bind(this)), null == (i = this.webView) || i.node.on("loading", this.onWebViewLoading.bind(this)), null == (t = this.webView) || t.node.on("error", this.onWebViewError.bind(this))
            }
            onDisable() {
                var e, i, t;
                d.MessageCenter.unregister(d.Enum.MessageCenterAction.onDisablePopUpMsg, this), d.MessageCenter.unregister(d.Enum.MessageCenterAction.onOpenPopUpMsg, this), d.MessageCenter.unregister("HideWebview_ShowWindows", this.node), null == (e = this.webView) || e.node.off("loaded"), null == (i = this.webView) || i.node.off("loading"), null == (t = this.webView) || t.node.off("error"), this.reset(null)
            }
            setShouldShowWebview(e) {
                this.shouldShowWebview = e, this.setActiveWebViewByPos()
            }
            getShouldShowWebview() {
                return this.shouldShowWebview
            }
            setUrl(e) {
                h(this.webView, !0) && (console.log("----webView---loaded----URL CommonWebView.setUrl(): load " + e), this.webView.url = e)
            }
            reset(e) {
                var i;
                this.isWebViewLoaded = !1, this.unscheduleAllCallbacks(), null == (i = this.baseImg) || i.cleanImage(), this.setShouldShowWebview(!1), this.urlToCall = e, h(this.webView, !0) && (this.loadNextURL() || (this.webView.url = "about:blank", this.scheduleOnce((() => {
                    this.loadNextURL()
                }), .1)))
            }
            eventFromWebView(e) {
                if (null == e || "" == e) return !1;
                if ("string" != typeof e) return !1;
                if (e.indexOf(this.webScheme + "://") < 0) return !1;
                if (e.indexOf(`${this.webScheme}://${B.GET_SCREENSHOT}//`) >= 0) return this.updateScreenShot(e), !0;
                let i = e.replace(`${this.webScheme}://`, ""),
                    t = i.indexOf("&"),
                    s = i.slice(0, t),
                    o = i.slice(t + 1);
                switch (s) {
                    case v.NAVIGATE:
                        let e = o || "",
                            i = V.getAppSchemaByJurisdiction();
                        e = e.replace("http//", "http://").replace("https//", "https://"), e = e.replace(i.replace(":", "") + "//", i + "//");
                        const t = W.parseURL(e);
                        if (console.log(`@@@@@@ Open External link ..... ${t}`), "http:" == t.protocol || "https:" === t.protocol) return d.native.openUrl(e), !0;
                        if (t.protocol === i) {
                            if (t.hostname === g.open) {
                                const i = t.query[m.SceneOnWPTGApplication];
                                null != i && "" != i && window.DeeplinkCustomSchemaParseInfo(e)
                            }
                            return !0
                        }
                }
                return !1
            }
            setSchemeName(e) {
                this.webScheme = e, this.webView.setJavascriptInterfaceScheme(this.webScheme)
            }
            onWebViewLoaded(e) {
                var i;
                console.log("----webView---loaded----URL CommonWebView.onWebViewLoaded(): \n\tnode: " + (null == (i = this.node) ? void 0 : i.uuid) + " \n\turl:" + (null == e ? void 0 : e._url)), this.loadNextURL() || this.onWebViewReady()
            }
            loadNextURL() {
                return ("about:blank" == this.url || "" == this.url) && (null != this.urlToCall && "" != this.urlToCall && "about:blank" != this.urlToCall && this.setUrl(this.urlToCall), !0)
            }
            onWebViewReady() {
                this.isWebViewLoaded || (this.isWebViewLoaded = !0, this.unscheduleAllCallbacks(), this.onWebviewLoaded.forEach((e => e.emit([e.customEventData]))), this.setActiveWebViewByPos())
            }
            onWebViewLoading(e) {
                console.log("----webView---loading----URL : " + (null == e ? void 0 : e._url)), this.onWebviewLoading.forEach((e => e.emit([e.customEventData])))
            }
            onWebViewError(e) {
                "about:blank" != e._url && "" != e._url && "about:blank" != this.url && "" != this.url && (console.log("----webView---load---error----"), this.onWebviewLoadError.forEach((e => e.emit([e.customEventData]))))
            }
            onPopupEnable(e, i = 0) {
                this.setActiveWebViewByPos(!0)
            }
            hideWebViewShowWindow(e) {
                this.setActiveWebViewByPos()
            }
            setActiveWebViewByPos(e = !1) {
                const i = this.isWebViewLoaded && this.shouldShowWebview;
                if (this.isMoveActiveWebView) {
                    var t;
                    if (i && !d.tools.isAnyPopupVisible(this.isPopup)) return null == (t = this.baseImg) || t.cleanImage(), void this.setWebviewDefaultPosition();
                    this.setWebviewPositionAway()
                } else {
                    var s;
                    if (i) return null == (s = this.baseImg) || s.cleanImage(), void this.setWebviewDefaultPosition();
                    this.setWebviewPositionAway()
                }
                this.isWebViewLoaded && e && this.takeScreenShot()
            }
            evaluateJs(e) {
                this.isWebViewLoaded ? this.webView.evaluateJS(e) : console.error("[CommonWebView.evaluateJs()] try to send event from cocos to web view but web view is not loaded yet:\n\t" + e)
            }
            evaluateJsBrowser(e, i) {
                this.isWebViewLoaded ? this.webView.nativeWebView.contentWindow.postMessage({
                    name: e,
                    data: i
                }, "*") : console.error("[CommonWebView.evaluateJs()] try to send event from cocos to web view but web view is not loaded yet:\n\t" + js)
            }
            takeScreenShot() {
                var i;
                if (!d.appConfig.isLandscapeLayout || !this.isWebViewLoaded || !this.shouldShowWebview || null != (i = this.baseImg) && i.ImageExist || !this._allowScreenshot || !d.tools.isAbleTakeScreenShot()) return;
                if (e.isTakingScreenshot) return void this.scheduleOnce(this.takeScreenShot.bind(this), .02);
                e.isTakingScreenshot = !0;
                const t = `${this.webScheme}://${B.TAKE_SCREENSHOT}_${this.webView.node.uuid}//0.5`;
                var s, o;
                w.isNative ? (this.scheduleOnce(this.screenshotTaken, .5), null == (s = (o = this.webView).evaluateJS) || s.call(o, `\n                window.parent.postMessage ("${t}", "*");\n                document.location = "${t}";\n            `)) : (console.log("####### [Browser] is not support takeScreenShot"), this.updateScreenShot(c.fakeImgBase64))
            }
            updateScreenShot(e) {
                var i;
                const t = e.replace(`${this.webScheme}://${B.GET_SCREENSHOT}//`, "");
                let s = "";
                if (t.includes(".png")) {
                    const e = /.*_([^_]+?)\.png$/;
                    let i = t.match(e);
                    if (i && i[1] && (s = i[1], s !== this.webView.node.uuid)) return
                }
                null == (i = this.baseImg) || i.setImage(t, {
                    pixelsWidth: this.webView.node.getComponent(u).width,
                    pixelsHeight: this.webView.node.getComponent(u).height
                }), this.unschedule(this.screenshotTaken), this.screenshotTaken()
            }
            screenshotTaken() {
                e.isTakingScreenshot = !1
            }
            setWebviewPositionAway() {
                this.webView.node.setPosition(this._webViewMovePos), d.appConfig.isLandscapeLayout || this.updateWidget(this.webView.node, !1)
            }
            setWebviewDefaultPosition() {
                this.webView.node.setPosition(this._webViewShowPos), d.appConfig.isLandscapeLayout || this.updateWidget(this.webView.node, !0)
            }
            static webviewIsClosing() {}
            isActive() {
                return 1 == this.isWebviewActive
            }
            setActive(e, i) {
                if (this.parentNode) {
                    if (this.parentNode.active) {
                        if (!i && this.isWebviewActive == e) return
                    } else this.parentNode.active = !0;
                    this._allowScreenshot = e, this.isWebviewActive = e, e ? (this.parentNode.setPosition(this._webViewShowPos), d.MessageCenter.send(d.Enum.MessageCenterAction.onCommonWebviewNodeShowPos, this.parentNode), this.setActiveWebViewByPos(!0)) : (this.parentNode.setPosition(this._webViewMovePos), d.MessageCenter.send(d.Enum.MessageCenterAction.onCommonWebviewNodeAwayPos, this.parentNode)), this.updateWidget(this.parentNode, e)
                }
            }
            updateWidget(e, i) {
                if (!h(e, !0)) return;
                let t = e.getComponent(b);
                if (null == t) return;
                let s = !t.enabled;
                t.enabled = !0, i ? (t.left = 0, t.right = 0) : (t.left = -this._webViewMovePos.x, t.right = this._webViewMovePos.x), t.updateAlignment(), s && (t.enabled = !1)
            }
        }).isTakingScreenshot = !1, _ = i((M = U).prototype, "isPopup", [f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return !1
            }
        }), T = i(M.prototype, "webView", [C], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), N = i(M.prototype, "baseImg", [E], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return null
            }
        }), k = i(M.prototype, "onWebviewLoaded", [P], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return []
            }
        }), I = i(M.prototype, "onWebviewLoadError", [L], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return []
            }
        }), D = i(M.prototype, "onWebviewLoading", [A], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
                return []
            }
        }), y = M)) || y) || y));
    window.webviewIsClosing = H.webviewIsClosing, s._RF.pop()
}