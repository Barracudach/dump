import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as S from "./cc.js";
import * as v from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as w from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as C from "./cv.js";
import * as _ from "./AnalyticsHandler.js";
import * as b from "./Enum.js";
import * as N from "./NativeEventCMD.js";

function main() {
    var E, T, D, y, H, U, A;
    i._RF.push({}, "ab70f4ckSVI1rtCIdcXbSMv", "Shop", void 0);
    const {
        ccclass: R,
        property: O
    } = a;
    e("default", (E = O(o), T = O(n), R(((A = class e extends r {
        constructor(...e) {
            super(...e), this.webview = null, this.msgNode = null, this.exitCallFunc = null, this.newWindow = null, s(this, "safeTakeOutDialogPref", H, this), s(this, "safeDialog", U, this)
        }
        init() {
            var e = this;
            console.log("shop init.................."), l.load("zh_CN/commonPrefab/Shop", ((t, s) => {
                console.log("start load commonPrefab/Shop.prefab file"), t ? console.log(t.message || t) : (e.msgNode = c(s), d.addPersistRootNode(e.msgNode), e.msgNode.addComponent(g), e.msgNode.setSiblingIndex(C.Enum.ZORDER_TYPE.ZORDER_TOP), e.registerMsg(), h.isBrowser || (e.webview = u("webView_panel", e.msgNode).addComponent(p)), e.initText("Shop_titile_text"), u("groupBack_button", e.msgNode).on(S.EventType.CLICK, e.hide, e), u("gold_panel/gold_btn", e.msgNode).on(S.EventType.CLICK, e.onBtnAddGold, e), e.msgNode.active = !1, C.resMgr.adaptWidget(e.msgNode), e.UpdateUserGold(), e.msgNode.off(n.EventType.TOUCH_END), e.msgNode.on(n.EventType.TOUCH_END, (e => {
                    e.propagationStopped = !0
                })))
            }))
        }
        onDestroy() {
            this.unregisterMsg()
        }
        unregisterMsg() {
            C.MessageCenter.unregister("getShopURLSuccess", this.msgNode), C.MessageCenter.unregister("update_gold", this.msgNode), C.MessageCenter.unregister("update_info", this.msgNode), C.MessageCenter.unregister("HideWebview_ShowWindows", this.msgNode), C.MessageCenter.unregister("on_syCcjsCallback", this.msgNode)
        }
        registerMsg() {
            C.MessageCenter.register("getShopURLSuccess", this.getShopURLSuccess.bind(this), this.msgNode), C.MessageCenter.register("update_gold", this.UpdateUserGold.bind(this), this.msgNode), C.MessageCenter.register("update_info", this.UpdateUserGold.bind(this), this.msgNode), C.MessageCenter.register("HideWebview_ShowWindows", this.HandleSwitchServer.bind(this), this.msgNode), C.MessageCenter.register("on_syCcjsCallback", this.onSyCcjsCallbak.bind(this), this.msgNode)
        }
        HandleSwitchServer(e) {
            e = !(1 != e || !this.webview || !this.msgNode.active), this.webview && (this.webview.node.active = e)
        }
        initText(e) {
            C.StringTools.setLabelString(this.msgNode, "titile_text", e)
        }
        UpdateUserGold() {
            C.dataHandler.getUserData().u32Chips.toString();
            let e = u("gold_panel/gold_text", this.msgNode);
            w(e, !0), e.getComponent(f).string;
            u("gold_panel/gold_text", this.msgNode).getComponent(f).string = C.StringTools.clientGoldByServer(C.dataHandler.getUserData().u32Chips).toString()
        }
        onSyCcjsCallbak(e) {
            if (h.os != h.OS.IOS) return;
            var t = this;
            let s = "http:";
            console.log("===========allurl:: " + e);
            let i = 0,
                n = "";
            if (-1 != e.search("ccjs://alipays")) {
                n = e.substr(i + 15, e.length);
                let t = "alipays:";
                return console.log("alipays:::" + n), void this.openSySysBrower(t + n)
            }
            return -1 != e.search("ccjs://https") ? (i = e.search("ccjs://https"), n = e.substr(i + 13, e.length), s = "https:") : -1 != e.search("ccjs://http") && (i = e.search("ccjs://http"), n = e.substr(i + 12, e.length)), console.log("===========url::=> %s" + n), console.log("end====="), "ccjs://opensafe" == e ? (C.native.SYwebCloseChildWebview(), void l.load("zh_CN/commonPrefab/Safe", o, (function(e, s) {
                if (e) return void console.log(e.message || e);
                t.safeDialog = c(s), d.getScene().addChild(t.safeDialog)
            }))) : "ccjs://guest" == e ? (t.show(!1), void C.TP.showMsg(C.config.getStringData("roleInfoSet_tips_updateGrade_rechargeTips_text"), !0, C.dataHandler.upgradeAccount.bind(C.dataHandler), C.dataHandler.cancleUpgradeAccount.bind(C.dataHandler))) : void this.openSySysBrower(s + n)
        }
        getShopURLSuccess(e) {
            if (console.log("====> getShopURLSuccess url:" + e), this.msgNode.active && (console.log("====> getShopURLSuccess url2"), !h.isBrowser)) {
                console.log("====> getShopURLSuccess url3");
                var t = this;
                this.webview.node.active = !0, this.webview.url = e, this.webview.setJavascriptInterfaceScheme("ccjs"), this.webview.setOnJSCallback((function() {
                    let s = "http:";
                    console.log("===========allurl:: " + e);
                    let i = 0,
                        n = "";
                    if (-1 != this.webview.url.search("ccjs://alipays")) {
                        n = this.webview.url.substr(i + 15, this.webview.url.length);
                        let e = "alipays:";
                        return console.log("alipays:::" + n), void C.native.invokeAsynFunc(N.KEY_CALL_OPEN_URL, {
                            url: e + n
                        })
                    }
                    return -1 != this.webview.url.search("ccjs://https") ? (i = this.webview.url.search("ccjs://https"), n = this.webview.url.substr(i + 13, this.webview.url.length), s = "https:") : -1 != this.webview.url.search("ccjs://http") && (i = this.webview.url.search("ccjs://http"), n = this.webview.url.substr(i + 12, this.webview.url.length)), console.log("===========url::=> %s" + n), console.log("end====="), "ccjs://opensafe" == this.webview.url ? (t.show(!1), void l.load("zh_CN/commonPrefab/Safe", o, (function(e, s) {
                        if (e) return void console.log(e.message || e);
                        if (C.dataHandler.getUserData().showTouristLimited("roleInfoSet_tips_useSafe_barntips_text")) return;
                        if (C.dataHandler.getUserData().showNDRPVerificationReviewPopup()) return;
                        t.safeDialog = c(s), d.getScene().addChild(t.safeDialog)
                    }))) : "ccjs://guest" == this.webview.url ? (t.show(!1), void C.TP.showMsg(C.config.getStringData("roleInfoSet_tips_updateGrade_rechargeTips_text"), !0, C.dataHandler.upgradeAccount.bind(C.dataHandler), C.dataHandler.cancleUpgradeAccount.bind(C.dataHandler))) : void C.native.invokeAsynFunc(N.KEY_CALL_OPEN_URL, {
                        url: s + n
                    })
                }))
            }
        }
        show(e) {
            if (h.isBrowser && C.config.GET_CLIENT_TYPE() == C.Enum.ClientType.H5WebPage) return;
            e = 0 != e;
            let t = !h.isBrowser && (h.os == h.OS.IOS || h.os == h.OS.ANDROID);
            if (e && this.msgNode.active || !e && !this.msgNode.active) return;
            let s = "HallScene" == d.getScene().name,
                i = e && t;
            h.isBrowser || (this.webview.node.active = i, t && C.MessageCenter.send("sendHideNoticeWebView", !i)), this.UpdateUserGold(), this.msgNode.active = i, s && (i ? C.action.showAction(this.msgNode, C.action.eMoveActionDir.EMAD_TO_LEFT, C.action.eMoveActionType.EMAT_FADE_IN) : C.action.showAction(this.msgNode, C.action.eMoveActionDir.EMAD_TO_RIGHT, C.action.eMoveActionType.EMAT_FADE_OUT))
        }
        onBtnAddGold(e) {
            this.RechargeClick()
        }
        hide(e) {
            C.AudioMgr.playButtonSound("button_click.mp3"), p.Impl.prototype.evaluateJS = function(e) {
                var t = this._iframe;
                if (t) return t.evaluateJS(e)
            }, this.webview.evaluateJS("document.activeElement.blur()"), this.exitCallFunc && this.exitCallFunc(), this.exitCallFunc = null, C.viewAdaptive.isselfchange || (this.show(!1), C.MessageCenter.send("sendHideNoticeWebView", !0));
            _.getInstance().sendEvent(C.Enum.CurrentScreen.deposit, C.Enum.segmentEvent.Clicked, C.Enum.Functionality.payments, {
                item: "closeButton"
            })
        }
        setExitCallFunc(e) {
            e && (this.exitCallFunc = e)
        }
        openSySysBrower(e) {
            let t = C.StringTools.formatC('{"cmd": "1012", "url":"%s"}', e);
            C.native.SYwebjsToClient(t)
        }
        HandleUrlForNative(e, t = !1) {
            if (m("[Shop] ==> HandleUrlForNative(" + e + ", " + t + ")"), C.appConfig.isPKW) {
                if (h.isBrowser && C.config.isSiyuType()) {
                    let t = '{"cmd": "1006", "url":"%s", "op":1, "width":%d, "height":%d}',
                        s = "",
                        i = 0;
                    return h.os == h.OS.IOS && C.config.IS_IPHONEX_SCREEN && (i = 0), s = C.native.isScreenLandscape() ? C.StringTools.formatC(t, e, C.config.HEIGHT, C.config.WIDTH - i) : C.StringTools.formatC(t, e, C.config.WIDTH, C.config.HEIGHT - i), void C.native.SYwebjsToClient(s)
                }
                h.isBrowser ? t ? window.open(e) : null != this.newWindow && (this.newWindow.location.href = e) : h.os == h.OS.ANDROID ? v.reflection.callStaticMethod("com.cocos.game.AppActivity", "openUrl", "(Ljava/lang/String;)V", e) : h.os == h.OS.IOS ? C.MessageCenter.send("getShopURLSuccess", e) : h.openURL(e)
            }
        }
        RechargeClick(e = !1) {
            if (_.getInstance().sendEvent(C.Enum.CurrentScreen.deposit, C.Enum.segmentEvent.ScreenOpened, C.Enum.Functionality.payments), C.appConfig.isPKW) this.RechargeClick_PKW();
            else if (C.appConfig.getGeneralConfig().multiWindowEnabled) C.miniGamePopupManager.reloadPopup(), C.focusWindow(1), C.MessageCenter.send("switchSceneToEarnView", b.DepositScene);
            else {
                C.config.getCurrentScene() == C.Enum.SCENE.HALL_SCENE ? C.MessageCenter.send("switchSceneToEarnView", b.DepositScene) : (C.viewAdaptive.enterHallJumpToIndex = b.DepositScene, e ? C.roomManager.RequestLeaveAllRooms() : (C.action.switchScene(C.Enum.SCENE.HALL_SCENE), C.appConfig.isWebApp && C.MessageCenter.send("switchSceneToEarnView", b.DepositScene)))
            }
        }
        RechargeClick_PKW() {
            this.initText("Shop_titile_text"), this.show(!h.isBrowser && (h.os == h.OS.IOS || h.os == h.OS.ANDROID)), 1 != C.dataHandler.getUserData().pay_type && (h.isBrowser && !C.config.isSiyuType() && (this.newWindow = window.open("", "_blank")), C.config.isThai() ? this.HandleUrlForNative(C.dataHandler.getUserData().getPktShopUrl()) : C.worldNet.RequestAddCoinOrderPayRequest(C.dataHandler.getUserData().pay_type, "", 0))
        }
        ExchangeEvent() {
            this.show(!h.isBrowser && (h.os == h.OS.IOS || h.os == h.OS.ANDROID)), 1 != C.dataHandler.getUserData().pay_type && C.worldNet.RequestDelCoinOrderRequest()
        }
        QueryClick() {
            if (this.initText("TradeRecord_titile_text"), this.show(!h.isBrowser && (h.os == h.OS.IOS || h.os == h.OS.ANDROID)), 1 != C.dataHandler.getUserData().pay_type) {
                let e = C.dataHandler.getUserData().getUserId(),
                    t = "";
                if (0 == e) {
                    if (t = C.tools.GetStringByCCFile("user_id"), C.StringTools.getArrayLength(t) <= 0) return
                } else t = e.toString();
                let s = C.config.getCurrentLanguageDetails().code,
                    i = 2,
                    o = Math.floor((new Date).getTime() / 1e3),
                    n = C.dataHandler.getUserData().firstClubId,
                    a = C.dataHandler.getUserData().firstAlliId,
                    r = (encodeURI(C.dataHandler.getUserData().nick_name), ""),
                    l = "294de072c3d679f3a6adc5ff2c50b448e9265ebe",
                    c = C.StringTools.formatC("%d", i) + t + t + C.StringTools.formatC("%d", n) + C.StringTools.formatC("%d", a) + s + C.StringTools.formatC("%lld", o) + r + C.StringTools.formatC("%s", l),
                    d = "product_id=" + C.StringTools.formatC("%d", i) + "&user_id=" + t + "&login_name=" + t + "&club_id=" + C.StringTools.formatC("%d", n) + "&union_id=" + C.StringTools.formatC("%d", a) + "&language_type=" + s + "&time=" + C.StringTools.formatC("%lld", o) + "&extra_param1=" + r + "&key_code=" + C.md5.md5(c),
                    g = C.dataHandler.getUserData().shopUrl + C.config.getStringData("WEB_API_TRADE_RECORD", !0) + "?" + d,
                    h = C.md5.md5(l);
                console.log(h), console.log(c), console.log(g), C.SHOP.HandleUrlForNative(g, !0)
            }
        }
        setNewWindow(e) {
            this.newWindow = e
        }
        static getInstance() {
            return e.g_instance && e.g_instance.msgNode && w(e.g_instance.msgNode, !0) || (e.g_instance = new e, e.g_instance.init()), e.g_instance
        }
    }).g_instance = void 0, H = t((y = A).prototype, "safeTakeOutDialogPref", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(y.prototype, "safeDialog", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = y)) || D));
    i._RF.pop()
}