import * as t from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as d from "./WebviewHelper.js";
import * as l from "./WebviewHelper.js";
import * as f from "./FreshchatWebview.js";
import * as g from "./NativeEvent.js";

function main() {
    t._RF.push({}, "8e094yF5KxCn5X076JiSiDo", "FreshchatHandler", void 0);
    class u {
        constructor() {
            this.randomRestoreUUID = "", this.openExternalWindow = !0, this.freshchatWebview = null, this.freshchat_prefab = null, this.cashierNode = null, this.FRESHCHAT_PREFAB_PATH = "prefabs/FreshChatWebview", this.tag = "", this.hasTriggered = !1, this.shouldLaunchNextTime = void 0, this.externalWebViewId = -1, c.appConfig.isLandscapeLayout && c.MessageCenter.register(c.Enum.MessageCenterAction.OnLoginSuccess, this.onLoginSuccessfully.bind(this), this)
        }
        static getInstance() {
            return u.instance || (u.instance = new u), u.instance
        }
        loadResources() {
            if (c.appConfig.isLandscapeLayout) {
                if (this.freshchat_prefab) return;
                let e = i.getBundle(c.appConfig.layoutUse);
                e ? this.onBundleLoaded(null, e) : i.loadBundle(c.appConfig.layoutUse, this.onBundleLoaded.bind(this))
            }
        }
        onBundleLoaded(e, t) {
            e ? s(e.message || e) : t.load(this.FRESHCHAT_PREFAB_PATH, a, function(e, t) {
                e ? s(e.message || e) : (this.freshchat_prefab = t, n(this.cashierNode, !0) && this.loadWebview(this.cashierNode))
            }.bind(this))
        }
        loadWebview(e) {
            if (c.appConfig.getGeneralConfig().enableFreshchat && (this.cashierNode = e, c.appConfig.isLandscapeLayout && !this.openExternalWindow && n(this.cashierNode, !0))) {
                if (!this.freshchat_prefab) return void this.loadResources();
                if (!n(this.freshchatWebview, !0) && this.freshchat_prefab) {
                    let e = h(this.freshchat_prefab);
                    this.cashierNode.parent.addChild(e), this.freshchatWebview = e.getComponent(f), this.freshchatWebview.onHide()
                }
                if (this.hasTriggered) {
                    let e = this.getUserData(this.tag);
                    this.initWebview(e)
                }
            }
        }
        onLoginSuccessfully() {
            this.randomRestoreUUID = c.tools.getRandomUUID()
        }
        onDestroyWebView() {
            this.hasTriggered = !1, this.cashierNode = null, this.freshchatWebview = null, this.tag = ""
        }
        getUserData(e) {
            let t = c.dataHandler.getUserData(),
                i = c.appConfig.getUserProfileConfig().freshchatTag;
            return {
                username: t.nick_name || "",
                email: t.email || "",
                tag: e || i
            }
        }
        initFreshchat(e) {
            if (c.appConfig.getGeneralConfig().enableFreshchat) {
                e && (this.tag = e);
                let i = this.getUserData(this.tag);
                if (this.hasTriggered = !0, r.os === r.OS.ANDROID || r.os === r.OS.IOS) {
                    if (r.isBrowser) return void c.native.openUrl(this.getURL(i));
                    o.getScene().name == c.Enum.SCENE.HALL_SCENE ? (this.shouldLaunchNextTime = !1, c.native.initFreshchatSDK(i)) : this.shouldLaunchNextTime = !0
                } else if (this.openExternalWindow) {
                    if (r.isBrowser) return void c.native.openUrl(this.getURL(i));
                    (this.externalWebViewId < 0 || !g.focusExternalWebViewWindow(this.externalWebViewId)) && (this.externalWebViewId = g.openExternalWebViewWindow(this.getURL(i), 880, 1132))
                } else {
                    var t;
                    1 == (null == (t = this.cashierNode) ? void 0 : t.active) && this.initWebview(i)
                }
            }
        }
        getURL(e) {
            let t = c.config.getStringData("WEB_FRESHDESK", !0);
            return t = c.tools.addParameterToURL(t, "theme", c.appConfig.getDesignConfig().webViewThemeUse), t += "&externalId=" + encodeURIComponent(e.email), t += "&email=" + encodeURIComponent(e.email), t += "&username=" + encodeURIComponent(e.username), t += "&tag=" + encodeURIComponent(e.tag), t += "&restoreUUID=" + encodeURIComponent(this.randomRestoreUUID), t
        }
        initWebview(e) {
            n(this.freshchatWebview, !0) && this.freshchatWebview.showWebview(e)
        }
        onShowCashier(e) {
            r.isNative && (r.os !== r.OS.ANDROID && r.os !== r.OS.IOS || c.native.notifyNativeOnEnableCashier(e))
        }
        shouldOpenChat() {
            return !0 === this.shouldLaunchNextTime
        }
        expandFreshChat() {
            this.initFreshchat(), n(this.freshchatWebview, !0) && n(this.freshchatWebview.webComponent.webView, !0) && l.sendMessageToWebview(this.freshchatWebview.webComponent.webView, {
                name: d.openFreshchat,
                data: {}
            })
        }
    }
    e("FreshchatHandler", u), u.instance = null, t._RF.pop()
}