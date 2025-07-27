import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";
import * as r from "./cv.js";
import * as p from "./SlideView.js";
import * as l from "./WebviewHelper.js";
import * as c from "./WebviewHelperData.js";
import * as h from "./FreshchatHandler.js";
import * as u from "./CommonWebView.js";

function main() {
    var d, w, b, v;
    i._RF.push({}, "f96e4xuY7NJpLxK4PogupcN", "PaymentSupportPopup", void 0);
    const {
        ccclass: m,
        property: g
    } = o;
    e("PaymentSupportPopup", (d = g(u), m((v = t((b = class extends s {
        constructor(...e) {
            super(...e), n(this, "webComponent", v, this), this.slideView = null, this.jsSchema = "paymentsupport"
        }
        get isNodeActive() {
            var e;
            return (null == (e = this.slideView) ? void 0 : e.isActive) || this.node.active
        }
        onLoad() {
            const e = this.handleWebEvents.bind(this);
            a.isNative ? (this.webComponent.setSchemeName(this.jsSchema), this.webComponent.webView.setOnJSCallback(((t, n) => {
                e(n)
            }))) : r.MessageCenter.register("on_webCcjsCallback", this.handleWebEvents.bind(this), this.node), this.slideView = this.getComponent(p)
        }
        onEnable() {
            this.webComponent.reset(`${this.getWebAppUrl()}/support-page${c.getCommonURLParams()}`)
        }
        onDisable() {
            this.isNodeActive || r.tools.triggerPopupHideEvent()
        }
        onWebviewLoaded() {}
        onWebviewError() {}
        handleWebEvents(e) {
            if (console.log(`handlePaymentPopupEvents is called with event: ${JSON.stringify(e)}`), this.webComponent.eventFromWebView(e)) return;
            if (!e) return;
            let t = "",
                n = null;
            switch ("object" == typeof e ? [t, n] = [e.name, e.data] : "string" == typeof e && ([t, n] = this.parseWebviewEvent(e)), console.log("handlePaymentPopupEvents eventName:", t, "eventData:", n), t) {
                case "cashierReady":
                    l.sendSegmentData(this.webComponent.webView), this.webComponent.setShouldShowWebview(!0);
                    break;
                case "newWindow":
                    n && l.handleNewWindowEvent(n);
                    break;
                case "openFreshchat":
                    h.getInstance().openExternalWindow || this.hidePopup(), h.getInstance().expandFreshChat();
                    break;
                default:
                    console.log(`handlePaymentPopupEvents unknown event: ${t}`)
            }
        }
        parseWebviewEvent(e) {
            let [t, n] = e.replace(this.jsSchema + "://", "").split("..");
            if (n) try {
                let e = decodeURIComponent(n),
                    i = r.tryParseJSON(e);
                if (i) return [t, i]
            } catch (e) {}
            return [t, null]
        }
        showPopup() {
            r.tools.triggerPopupShowEvent(), this.isNodeActive || (this.slideView ? this.slideView.show(!1) : this.node.active = !0)
        }
        hidePopup() {
            this.slideView ? this.slideView.hide() : this.node.active = !1
        }
        getWebAppUrl() {
            return r.config.getStringData("WEB_CASHIER", !0)
        }
    }).prototype, "webComponent", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = b)) || w));
    i._RF.pop()
}