import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as w from "./CommonHallSubViewController.js";
import * as b from "./CommonWebView.js";
import * as d from "./cv.js";
import * as g from "./CrashTracing.js";
import * as u from "./CrashTracing.js";

function main() {
    var p, c, h, m, C, v;
    n._RF.push({}, "10025DJ1WBEjq4kelg7SFIF", "WPTGLiveView", void 0);
    const {
        ccclass: L,
        property: V
    } = a;
    e("default", (p = V(b), c = V(o), L((C = t((m = class extends w {
        constructor(...e) {
            super(...e), i(this, "webViewComponent", C, this), i(this, "loadingNode", v, this), this.SCHEME_LIVE_EVENT = "wptgliveevent", this.URL_KEY = "WEB_WPTG_LIVE_EVENT", this._wptgLiveEventURL = "", this.loadTimeoutCallback = this.onWebLoadTimeout.bind(this), this.loadTimeoutDuration = 20
        }
        onLoad() {
            if (super.onLoad(), this.webViewComponent.setShouldShowWebview(!1), s(this.webViewComponent.webView, !0)) {
                this.webViewComponent.webView.url = "about:blank", this.webViewComponent.setSchemeName(this.SCHEME_LIVE_EVENT);
                const e = this.wptgLiveEventPageCallbacks.bind(this);
                this.webViewComponent.webView.setOnJSCallback(((t, i) => {
                    e(i)
                }))
            }
        }
        onEnable() {
            super.onEnable(), d.resMgr.adaptWidget(this.node, !0, !0), s(this.webViewComponent.webView, !0) && d.MessageCenter.register("on_webCcjsCallback", this.on_webCcjsCallback.bind(this), this.node), this.setWebviewUrl()
        }
        onDisable() {
            super.onDisable(), s(this.webViewComponent.webView, !0) && d.MessageCenter.unregister("on_webCcjsCallback", this.node)
        }
        onWebViewLoaded(e) {
            console.log("----webView---loaded----URL : " + this.webViewComponent.webView.url), this.loadingNode.active = !1, s(this.webViewComponent.webView, !0) && (this.webViewComponent.webView.url != this._wptgLiveEventURL ? this.webViewComponent.webView.url = this._wptgLiveEventURL : this.unschedule(this.loadTimeoutCallback), this.webViewComponent.setShouldShowWebview(!0))
        }
        setWebviewUrl() {
            this.loadingNode.active = !0, this._wptgLiveEventURL = this.getLobbyWPTGLiveEventURL(), this.scheduleOnce(this.loadTimeoutCallback, this.loadTimeoutDuration), this.webViewComponent.reset(this._wptgLiveEventURL)
        }
        getLobbyWPTGLiveEventURL() {
            return d.config.getStringData(this.URL_KEY, !0) + this.getWPTGLiveParams()
        }
        getWPTGLiveParams() {
            var e;
            let t;
            return t = d.dataHandler.getUserData().isLoggedIn() && !d.dataHandler.getUserData().isTouristUser ? "?locale=" + d.config.getCurrentLanguageDetails().code + "&userId=" + d.dataHandler.getUserData().getUserId() + "&sessionId=" + d.dataHandler.getUserData().getUserToken() + "&platform=" + (d.appConfig.isLandscapeLayout ? "desktop" : "mobile") : "?locale=" + d.config.getCurrentLanguageDetails().code + "&platform=" + (d.appConfig.isLandscapeLayout ? "desktop" : "mobile"), t += "&country=" + ((null == (e = d.dataHandler.getUserData()) ? void 0 : e.countryISO2) ?? "US"), t += "&bundleID=" + encodeURIComponent(d.appConfig.getGeneralConfig().bunderConfig.bunder_AppID), t += "&licenseType=" + encodeURIComponent(d.appConfig.getGeneralConfig().mapNewLicenseType), t += "&theme=" + encodeURIComponent(d.appConfig.getDesignConfig().webViewThemeUse), t += "&isNative=" + r.isNative, t
        }
        on_webCcjsCallback(e) {
            e && "string" == typeof e ? this.getEventFromWebView(e) : l(`data send from webview should be string, event is: ${e}`)
        }
        wptgLiveEventPageCallbacks(e) {
            e && "string" == typeof e ? this.getEventFromWebView(e) : l("data send from webview should be string")
        }
        getEventFromWebView(e) {
            this.webViewComponent.eventFromWebView(e)
        }
        onWebLoadTimeout() {
            var e;
            null == (e = u.getInstance()) || e.trace(g.WebView, "WPTGLiveLoadTimeout", {
                url: this._wptgLiveEventURL,
                loadTimeout: this.loadTimeoutDuration,
                webViewLoaded: this.webViewComponent.isWebViewLoaded
            }, !1, !0), d.server.nextProxy(this.URL_KEY)[1] && (this.loadTimeoutDuration += 5), this.setWebviewUrl()
        }
    }).prototype, "webViewComponent", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(m.prototype, "loadingNode", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = m)) || h));
    n._RF.pop()
}