import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as d from "./CommonHallSubViewController.js";
import * as u from "./CommonWebView.js";
import * as h from "./cv.js";
import * as m from "./Enum.js";
import * as c from "./Enum.js";
import * as g from "./NativeEvent.js";
import * as b from "./CommonTools.js";
import * as p from "./CrashTracing.js";
import * as w from "./CrashTracing.js";

function main() {
    var C, f, v, L, V, S;
    i._RF.push({}, "3d61cHdy7BIRJVa2gxv/o3x", "PromotionView", void 0);
    const {
        ccclass: y,
        property: U
    } = s;
    e("default", (C = U(u), f = U(n), y((V = o((L = class extends d {
        constructor(...e) {
            super(...e), t(this, "webViewComponent", V, this), t(this, "loadingNode", S, this), this.SCHEME_PROMOTION = "promo", this.URL_KEY = "WEB_PROMOTION_LOBBY", this._promotionURL = "about:blank", this._promoSlug = "", this.loadTimeoutCallback = this.onWebLoadTimeout.bind(this), this.loadTimeoutDuration = 20, this.readyTimeoutDuration = 10, this.promoReady = !1
        }
        onLoad() {
            if (super.onLoad(), this.webViewComponent.setShouldShowWebview(!1), a(this.webViewComponent.webView, !0)) {
                this.webViewComponent.webView.url = "about:blank", this.webViewComponent.setSchemeName(this.SCHEME_PROMOTION);
                const e = this.promotionPageCallbacks.bind(this);
                this.webViewComponent.webView.setOnJSCallback(((o, t) => {
                    e(t)
                }))
            }
        }
        onEnable() {
            super.onEnable(), h.resMgr.adaptWidget(this.node, !0, !0), a(this.webViewComponent.webView, !0) && h.MessageCenter.register("on_webCcjsCallback", this.on_webCcjsCallback.bind(this), this.node), this.setWebviewUrl(), h.MessageCenter.register(h.Enum.MessageCenterAction.OnLoginSuccess, this.onLoginSuccessCallback.bind(this), this.node), h.MessageCenter.register(h.config.CHANGE_LANGUAGE, this.onLanguageChangeCallback.bind(this), this.node), h.MessageCenter.register(h.Enum.MessageCenterAction.onCommonWebviewNodeShowPos, this.onNodeShowPos.bind(this), this.node)
        }
        onDisable() {
            super.onDisable(), a(this.webViewComponent.webView, !0) && h.MessageCenter.unregister("on_webCcjsCallback", this.node), h.MessageCenter.unregister(h.Enum.MessageCenterAction.OnLoginSuccess, this.node), h.MessageCenter.unregister(h.config.CHANGE_LANGUAGE, this.node), h.MessageCenter.unregister(h.Enum.MessageCenterAction.onCommonWebviewNodeShowPos, this.node)
        }
        onNodeShowPos(e) {
            this.node.uuid === (null == e ? void 0 : e.uuid) && this._promoSlug && "" != this._promoSlug && (h.resMgr.adaptWidget(this.node, !0, !0), this.setWebviewUrl())
        }
        onWebViewLoaded(e) {
            console.log("----webView---loaded----URL : " + this.webViewComponent.webView.url), a(this.webViewComponent.webView, !0) && (this.promoReady || (this.unschedule(this.loadTimeoutCallback), this.scheduleOnce(this.loadTimeoutCallback, this.readyTimeoutDuration)), this.webViewComponent.setShouldShowWebview(!0))
        }
        setWebviewUrl() {
            this.loadingNode.active = !0, this._promotionURL = this.getLobbyPromotionURL(), this.unschedule(this.loadTimeoutCallback), this.scheduleOnce(this.loadTimeoutCallback, this.loadTimeoutDuration), this.promoReady = !1, this.webViewComponent.reset(this._promotionURL)
        }
        onPromosLoaded() {
            this.loadingNode.active = !1
        }
        getLobbyPromotionURL() {
            let e = h.config.getStringData(this.URL_KEY, !0);
            return this._promoSlug && "" != this._promoSlug ? (e = e + (h.appConfig.isLandscapeLayout ? "/desktop" : "/mobile") + "/promotions/" + this._promoSlug + this.getPromotionWebParams(), this._promoSlug = null, e) : e + (h.appConfig.isLandscapeLayout ? "/desktop" : "/mobile") + this.getPromotionWebParams()
        }
        getPromotionWebParams() {
            var e;
            let o = "?locale=" + h.config.getCurrentLanguageDetails().code + "&country=" + ((null == (e = h.dataHandler.getUserData()) ? void 0 : e.countryISO2) ?? "US");
            return o += "&platform=" + (h.appConfig.isLandscapeLayout ? "desktop" : "mobile"), o += "&bundleID=" + encodeURIComponent(h.appConfig.getGeneralConfig().bunderConfig.bunder_AppID), o += "&licenseType=" + encodeURIComponent(h.appConfig.getGeneralConfig().mapNewLicenseType), o += "&theme=" + encodeURIComponent(h.appConfig.getDesignConfig().webViewThemeUse), o += "&isNative=" + r.isNative, h.dataHandler.getUserData().isLoggedIn() && !h.dataHandler.getUserData().isTouristUser && (o += "&userId=" + h.dataHandler.getUserData().getUserId(), o += "&sessionId=" + h.dataHandler.getUserData().getUserToken()), o
        }
        onLoginSuccessCallback() {
            this.setWebviewUrl()
        }
        onLanguageChangeCallback() {
            this.setWebviewUrl()
        }
        sendEventsInit() {
            var e, o;
            let t = {
                name: "initialData",
                data: {
                    locale: h.config.getCurrentLanguageDetails().code ?? "en",
                    country: (null == (e = h.dataHandler.getUserData()) ? void 0 : e.countryISO2) ?? "US",
                    sessionId: h.dataHandler.getUserData().getUserToken(),
                    userId: null == (o = h.dataHandler.getUserData()) ? void 0 : o.getUserIdS(),
                    platform: h.appConfig.isLandscapeLayout ? "desktop" : "mobile",
                    isIpad: !1
                }
            };
            if (r.isBrowser) console.log("[promotion ... send to web view ... by BROWSER ....]"), this.webViewComponent.webView.nativeWebView.contentWindow.postMessage(t, "*");
            else if (r.isNative) {
                const e = `window.${"setUserInfo"} (${JSON.stringify(t)})`;
                this.webViewComponent.evaluateJs(e)
            }
        }
        on_webCcjsCallback(e) {
            e && "string" == typeof e ? this.getEventFromWebView(e) : l(`data send from webview should be string, event is: ${e}`)
        }
        promotionPageCallbacks(e) {
            e && "string" == typeof e ? this.getEventFromWebView(e) : l("data send from webview should be string")
        }
        getEventFromWebView(e) {
            if (this.webViewComponent.eventFromWebView(e)) return;
            let o = g.getAppSchemaByJurisdiction();
            if (e.indexOf(o + "//" + m.open) >= 0) {
                let t = e || "";
                const i = b.parseURL(t);
                if (i.protocol === o) {
                    if (i.hostname === m.open) {
                        const e = i.query[c.SceneOnWPTGApplication];
                        null != e && "" != e && window.DeeplinkCustomSchemaParseInfo(t)
                    }
                    return !0
                }
            }
            if (e.indexOf(`${this.SCHEME_PROMOTION}://`) >= 0) {
                let o = e.replace(`${this.SCHEME_PROMOTION}://`, ""),
                    t = o,
                    i = o.split("&");
                switch (i && i.length > 1 && (t = i[0], i.shift()), t) {
                    case "promoReady":
                        this.onPromoReady(), this.sendEventsInit();
                        break;
                    case "promosLoaded":
                    case "promoLoaded":
                        this.onPromosLoaded()
                }
            }
        }
        onWebLoadTimeout() {
            var e;
            null == (e = p.getInstance()) || e.trace(w.WebView, "PromotionLoadTimeout", {
                url: this._promotionURL,
                loadTimeout: this.loadTimeoutDuration,
                readyTimeout: this.readyTimeoutDuration,
                webViewLoaded: this.webViewComponent.isWebViewLoaded
            }, !1, !0), h.server.nextProxy(this.URL_KEY)[1] && (this.loadTimeoutDuration += 5, this.readyTimeoutDuration += 2), this.reloadWebview()
        }
        onPromoReady() {
            this.promoReady = !0, this.unschedule(this.loadTimeoutCallback)
        }
        setPromoSlug(e) {
            e && (this._promoSlug = e)
        }
        reloadWebview() {
            this.setWebviewUrl()
        }
    }).prototype, "webViewComponent", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = o(L.prototype, "loadingNode", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = L)) || v));
    i._RF.pop()
}