import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as b from "./cv.js";
import * as w from "./FieldValidator.js";
import * as p from "./NotifyMsg.js";
import * as g from "./CrashTracing.js";
import * as C from "./CrashTracing.js";

function main() {
    var V, m, f, T, v, E, y, W, R;
    s._RF.push({}, "e69096JtYJDuY7ibNkSbWaT", "CFTurnstileCaptcha", void 0);
    const {
        ccclass: M,
        property: S
    } = o;
    var k = function(e) {
        return e.CaptchaGenerated = "CaptchaGenerated", e
    }(k || {});
    e("CFTurnstileCaptcha", (V = M("CFTurnstileCaptcha"), m = S(n), f = S(a), T = S(a), V((y = t((E = class extends w {
        constructor(...e) {
            super(...e), i(this, "webView", y, this), i(this, "loaderNode", W, this), i(this, "retryNode", R, this), this.isWebViewLoaded = !1, this.SCHEME_CAPTCHA = "captcha", this.URL_KEY = "WEB_CAPTCHA", this.captchaTimestamp = 0, this.captchaValability = 240, this._value = "", this.refreshReason = "", this.refreshCallback = this.refresh.bind(this), this.webViewSize = new r.Size(510, 111), this.webViewPos = r.Vec3.ZERO, this.startLoadTime = 0, this.popupcount = 0, this.loadTimeoutCallback = this.onWebLoadTimeout.bind(this), this.loadTimeoutDuration = 20
        }
        get value() {
            return this._value
        }
        set value(e) {
            this._value = e
        }
        get isValueEmpty() {
            return null == this._value || "" == this._value
        }
        start() {
            this.webViewSize = this.webView.getComponent(h).contentSize, this.webViewPos = this.webView.node.getPosition(), this.initWebView(), this.keepAspectRatio(), b.MessageCenter.register("on_webCcjsCallback", this.on_webCcjsCallback.bind(this), this.node), this.node.on(a.EventType.SIZE_CHANGED, this.keepAspectRatio.bind(this), this.node)
        }
        onEnable() {
            if (this.popupcount = 0, super.onEnable(), this.isWebViewLoaded || (this.loaderNode.active = !0), 0 != this.captchaTimestamp) {
                let e = (Date.now() - this.captchaTimestamp) / 1e3,
                    t = this.captchaValability - e;
                this.refreshReason = "tokenExpired", t > 0 ? this.scheduleRefresh(this.captchaValability - e, !1) : (this.captchaTimestamp = Date.now() - 1e3 * this.captchaValability, this.refresh())
            }
            b.MessageCenter.register(b.Enum.MessageCenterAction.onOpenPopUpMsg, this.onHideWebView.bind(this), this.node), b.MessageCenter.register(b.Enum.MessageCenterAction.OnSelectViewShow, this.onHideWebView.bind(this), this.node), b.MessageCenter.register(b.Enum.MessageCenterAction.onDisablePopUpMsg, this.onShowWebView.bind(this), this.node), b.MessageCenter.register(b.Enum.MessageCenterAction.OnSelectViewHide, this.onShowWebView.bind(this), this.node)
        }
        onHideWebView() {
            this.toggleWebViewVisibility(!1), this.popupcount++
        }
        onShowWebView() {
            this.popupcount > 0 && this.popupcount--, this.toggleWebViewVisibility(!0)
        }
        toggleWebViewVisibility(e) {
            l(this.webView, !0) && (e && 0 == this.popupcount ? this.webView.node.setPosition(this.webViewPos) : this.webView.node.setPosition(5e3, 5e3))
        }
        onDisable() {
            super.onDisable(), this.unschedule(this.refreshCallback), b.MessageCenter.unregister(b.Enum.MessageCenterAction.onOpenPopUpMsg, this.node), b.MessageCenter.unregister(b.Enum.MessageCenterAction.OnSelectViewShow, this.node), b.MessageCenter.unregister(b.Enum.MessageCenterAction.onDisablePopUpMsg, this.node), b.MessageCenter.unregister(b.Enum.MessageCenterAction.OnSelectViewHide, this.node)
        }
        onDestroy() {
            b.MessageCenter.unregister("on_webCcjsCallback", this.node)
        }
        initWebView() {
            this.hideWebView(), this.webView.setJavascriptInterfaceScheme(this.SCHEME_CAPTCHA), this.webView.setOnJSCallback(this.on_webjsCallback.bind(this)), this.webView.node.on(n.EventType.LOADED, this.onWebViewLoaded.bind(this)), this.webView.node.on(n.EventType.ERROR, this.onWebViewError.bind(this)), this.loadWebPage()
        }
        onWebViewLoaded(e) {
            this.isWebViewLoaded = !0, this.unschedule(this.loadTimeoutCallback), this.scheduleOnce((() => {
                this.loaderNode.active = !1, this.toggleWebViewVisibility(!0)
            }), 1)
        }
        hideWebView() {
            var e, t;
            b.appConfig.getSecurityConfig().CFTurnstileCaptchaHidden && (null == (e = (t = this.webView).setHiddenWebView) || e.call(t), this.webView.node.setPosition(5e3, 5e3))
        }
        doBaseValidate(e = !0) {
            return !this.isValueEmpty
        }
        showOrHideErrorToolTipText(e, t = "") {
            return e && (d("[CFTurnstileCaptcha] client side validation error, token: \n\tvalue: " + this._value + "\n\tlength: " + this._value.length), p.getInstance().showi18n("serverErrorCode100026", !0), this.refreshReason = "tokenValidationFailed", this.scheduleRefresh(.2, !0)), !0
        }
        addValueToObject(e, t = !1) {
            super.addValueToObject(e, t), this.refreshReason = "lastTokenUsed", this.scheduleRefresh(.2, !0)
        }
        scheduleRefresh(e, t) {
            t && (this.captchaTimestamp = Date.now() - 1e3 * this.captchaValability), this.unschedule(this.refreshCallback), this.scheduleOnce(this.refreshCallback, e)
        }
        destroyWebView() {
            l(this.webView, !0) && (this.webViewSize = this.webView.getComponent(h).contentSize, this.webView.node.off(n.EventType.ERROR), this.webView.node.destroy(), this.webView = null)
        }
        refresh() {
            this.unschedule(this.refreshCallback), this.isValueEmpty && (this.traceEvent("destroyWebView", {
                refreshReason: this.refreshReason
            }, !0), this.destroyWebView()), l(this.webView, !0) ? this.loadWebPage() : this.scheduleOnce((() => {
                if (l(this.webView, !0)) return;
                let e = new a("WebView");
                e.setParent(this.node), e.addComponent(h).setContentSize(this.webViewSize), e.setPosition(this.webViewPos), this.webView = e.addComponent(n), this.loaderNode.active = !0, this.initWebView()
            }), .1), b.MessageCenter.send(b.Enum.MessageCenterAction.onCaptchaRefresh)
        }
        loadWebPage() {
            this.value = "", this.isWebViewLoaded = !1, this.webView.url = this.getFullURL(), this.startLoadTime = Date.now(), this.unschedule(this.loadTimeoutCallback), this.scheduleOnce(this.loadTimeoutCallback, this.loadTimeoutDuration), this.toggleWebViewVisibility(!1), d("[CFTurnstileCaptcha] begin to load:", this.webView.url), b.MessageCenter.send(b.Enum.MessageCenterAction.onChangeCheckFormValid)
        }
        getFullURL() {
            var e;
            let t = "?theme=" + encodeURIComponent(b.appConfig.getDesignConfig().webViewThemeUse);
            return t += "&locale=" + b.config.getCurrentLanguageDetails().code + "&country=" + ((null == (e = b.dataHandler.getUserData()) ? void 0 : e.countryISO2) ?? "US"), t += "&platform=" + (b.appConfig.isLandscapeLayout ? "desktop" : "mobile"), t += "&bundleID=" + encodeURIComponent(b.appConfig.getGeneralConfig().bunderConfig.bunder_AppID), t += "&licenseType=" + encodeURIComponent(b.appConfig.getGeneralConfig().mapNewLicenseType), t += "&isNative=" + c.isNative, b.dataHandler.getUserData().isLoggedIn() && !b.dataHandler.getUserData().isTouristUser && (t += "&userId=" + b.dataHandler.getUserData().getUserId(), t += "&sessionId=" + b.dataHandler.getUserData().getUserToken()), b.config.getStringData(this.URL_KEY, !0) + t
        }
        on_webCcjsCallback(e) {
            this.onWebViewEvent(e)
        }
        on_webjsCallback(e, t) {
            this.onWebViewEvent(t)
        }
        onWebViewEvent(e) {
            if (e && "string" == typeof e) {
                if (e.startsWith(this.SCHEME_CAPTCHA)) {
                    let [t, i] = e.replace(this.SCHEME_CAPTCHA + "://", "").split("..");
                    if (t == k.CaptchaGenerated) {
                        let e = decodeURIComponent(i),
                            t = b.tryParseJSON(e);
                        t && t.token && (this._value = t.token, u("[CFTurnstileCaptcha] token received: " + this._value), this._value ? (this.traceEvent("tokenGenerated", {}, !1), b.MessageCenter.send(b.Enum.MessageCenterAction.onCaptchaverified), b.appConfig.getSecurityConfig().CFTurnstileCaptchaHidden && this.destroyWebView(), this.captchaTimestamp = Date.now(), this.refreshReason = "tokenExpired", this.scheduleRefresh(this.captchaValability, !1), b.MessageCenter.send(b.Enum.MessageCenterAction.onChangeCheckFormValid)) : this.activateRetryButton(!0))
                    }
                }
            } else d(`[CFTurnstileCaptcha] data send from webview should be string, event is: ${e}`)
        }
        onWebViewError(e) {
            l(this.webView, !0) && "about:blank" != this.webView.url && "" != this.webView.url && (this.traceEvent("onWebViewError", {}, !0), d("[CFTurnstileCaptcha] web view load `error` trying to load " + this.webView.url), this.refreshReason = "onWebViewError")
        }
        onBtnRetry() {
            this.refreshReason = "onWebViewError", this.refresh(), this.activateRetryButton(!1)
        }
        activateRetryButton(e = !0) {
            this.retryNode.active = e, this.loaderNode.active = !e
        }
        traceEvent(e, t = {}, i) {
            var s, n;
            const a = {
                elapsedTime: 0 == this.startLoadTime ? 0 : (Date.now() - this.startLoadTime) / 1e3,
                node: this.node.parent.name,
                url: null == (s = this.webView) ? void 0 : s.url,
                isTokenEmpty: this.isValueEmpty
            };
            null == (n = C.getInstance()) || n.trace(g.CFTurnstileCaptcha, e, {
                ...a,
                ...t
            }, !1, i)
        }
        keepAspectRatio() {
            const e = this.node.getComponent(h);
            e.height = e.width / (300 / 65), this.webViewSize = e.contentSize, l(this.webView, !0) && this.webView.getComponent(h).setContentSize(this.webViewSize), b.resMgr.adaptWidget(this.node, !1, !1)
        }
        onWebLoadTimeout() {
            var e;
            null == (e = C.getInstance()) || e.trace(g.WebView, "CaptchaLoadTimeout", {
                url: this.webView.url,
                loadTimeout: this.loadTimeoutDuration
            }, !1, !0), b.server.nextProxy(this.URL_KEY)[1] && (this.loadTimeoutDuration += 5), this.activateRetryButton(!0)
        }
    }).prototype, "webView", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(E.prototype, "loaderNode", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(E.prototype, "retryNode", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = E)) || v));
    s._RF.pop()
}