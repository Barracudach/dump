import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as w from "./cv.js";
import * as d from "./CommonWebView.js";
import * as u from "./FreshchatHandler.js";
import * as b from "./BlockAdaptWidget.js";
import * as C from "./CrashTracing.js";
import * as c from "./CrashTracing.js";

function main() {
    var m, p, g, f;
    s._RF.push({}, "9a97cVzchBDr5XN8npgVxoZ", "FreshchatWebview", void 0);
    const {
        ccclass: V,
        property: v
    } = o;
    e("default", (m = v(d), V((f = t((g = class extends n {
        constructor(...e) {
            super(...e), i(this, "webComponent", f, this), this.URL_KEY = "WEB_FRESHDESK", this.SCHEME_FRESHCHAT = "freshchat", this.ACTIONS_FRESCHAT = {
                pageReady: "pageReady"
            }, this.userInfo = null, this.widgetComp = null, this.isActivated = !1, this.loadTimeoutCallback = this.onWebLoadTimeout.bind(this), this.loadTimeoutDuration = 20
        }
        onLoad() {
            this.webComponent.webView && (this.widgetComp = this.webComponent.webView.node.getComponent(a), this.widgetComp && (this.widgetComp.top = 0), w.resMgr.adaptWidget(this.webComponent.webView.node, !0), this.webComponent.webView.node.addComponent(b))
        }
        start() {
            if (this.webComponent.webView) {
                this.webComponent.setSchemeName(this.SCHEME_FRESHCHAT);
                const e = this.freshdeskCallbacks.bind(this);
                this.webComponent.webView.setOnJSCallback(((t, i) => {
                    e(i)
                })), w.MessageCenter.register("on_webCcjsCallback", (t => {
                    e(t)
                }), this.node)
            }
        }
        onDestroy() {
            this.isActivated = !1, w.MessageCenter.unregister("on_webCcjsCallback", this.node), w.MessageCenter.unregister(w.Enum.MessageCenterAction.onCashierWebViewHide, this), u.getInstance().onDestroyWebView()
        }
        getFreshdeskURL() {
            let e = w.config.getStringData(this.URL_KEY, !0);
            return e = w.tools.addParameterToURL(e, "theme", encodeURIComponent(w.appConfig.getDesignConfig().webViewThemeUse)), e
        }
        showWebview(e) {
            this.isActivated ? this.onShow() : (this.userInfo = e, this.isActivated = !0, w.MessageCenter.register(w.Enum.MessageCenterAction.onCashierWebViewHide, this.onHide.bind(this), this), this.setWebviewUrl())
        }
        setWebviewUrl() {
            this.webComponent.webView && (this.scheduleOnce(this.loadTimeoutCallback, this.loadTimeoutDuration), this.webComponent.reset(this.getFreshdeskURL()))
        }
        onHide() {
            this.webComponent.webView && this.webComponent.setShouldShowWebview(!1)
        }
        onShow() {
            var e;
            w.tools.isAnyPopupVisible() || this.webComponent.webView && !0 === (null == (e = u.getInstance().cashierNode) ? void 0 : e.active) && this.webComponent.setShouldShowWebview(!0)
        }
        onWebViewLoaded(e) {
            this.webComponent.webView && this.scheduleOnce((() => {
                r(this.node, !0) && this.onShow()
            }), .2)
        }
        onWebViewLoadingFailure(e) {
            h("onWebViewLoadingFailure" + e)
        }
        freshdeskCallbacks(e) {
            if (null == e || "" == e) return;
            if ("string" != typeof e) return;
            if (this.webComponent.eventFromWebView(e)) return;
            const t = e.replace(`${this.SCHEME_FRESHCHAT}://`, "");
            this.webComponent.webView && t === this.ACTIONS_FRESCHAT.pageReady && (this.unschedule(this.loadTimeoutCallback), l.isBrowser ? this.webComponent.evaluateJsBrowser("initFreshChat", {
                externalId: this.userInfo.email,
                firstName: this.userInfo.username,
                email: this.userInfo.email,
                tag: this.userInfo.tag,
                restoreId: u.getInstance().randomRestoreUUID
            }) : this.webComponent.evaluateJs(`initFreshChat("${this.userInfo.email}","${this.userInfo.username}","${this.userInfo.email}","${this.userInfo.tag}","${u.getInstance().randomRestoreUUID}")`))
        }
        onWebLoadTimeout() {
            var e;
            null == (e = c.getInstance()) || e.trace(C.WebView, "FrashChatLoadTimeout", {
                url: this.webComponent.webView.url,
                loadTimeout: this.loadTimeoutDuration,
                webViewLoaded: this.webComponent.isWebViewLoaded
            }, !1, !0), w.server.nextProxy(this.URL_KEY)[1] && (this.loadTimeoutDuration += 5), this.setWebviewUrl()
        }
    }).prototype, "webComponent", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = g)) || p));
    s._RF.pop()
}