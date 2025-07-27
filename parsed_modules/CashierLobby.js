import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as C from "./AndroidBackButton.js";
import * as g from "./CommonHallSubViewController.js";
import * as b from "./CommonWebView.js";
import * as w from "./WebviewHelper.js";
import * as m from "./WebviewHelper.js";
import * as T from "./WebviewHelperData.js";
import * as v from "./FreshchatHandler.js";
import * as y from "./KYCHandler.js";
import * as f from "./Enum.js";
import * as S from "./Enum.js";
import * as k from "./TooltipsHandler.js";
import * as E from "./TooltipsHandler.js";
import * as A from "./TooltipsManager.js";
import * as P from "./cv.js";
import * as W from "./profile_player_complaint.js";

function main() {
    var M, L, R, N, V, D, O, _, G, H, I, U, x, F;
    s._RF.push({}, "e7eb5mFvD9FN5xAeVA7UDdh", "CashierLobby", void 0);
    var B = function(e) {
        return e.none = "none", e.deposit = "deposit", e.withdraw = "withdraw", e.transfer = "transfer", e.records = "records", e
    }(B || {});
    const K = 40,
        z = 60,
        Y = 10,
        J = 10,
        {
            ccclass: Q,
            property: $
        } = r;
    e("default", (M = $(o), L = $(n), R = $(a), N = $({
        type: [a]
    }), V = $(b), D = $(a), Q((G = t((_ = class extends g {
        constructor(...e) {
            super(...e), i(this, "paymentSupportPopupPrefab", G, this), i(this, "loaderText", H, this), i(this, "mexicanCashierToolTipNode", I, this), i(this, "paymentSupportItemsToEnable", U, this), i(this, "webViewComponent", x, this), i(this, "paymentPopupParent", F, this), this.serverResponseWaitTime = K, this.CASHIER_JS_SCHEMA = "cashier", this.URL_KEY = "WEB_CASHIER", this.hallScene = null, this.lastActiveTab = f.None, this.webviewReset = !0, this.isCashierLoaded = !1, this.popupQueue = [], this.showPromoOnCashierClose = !1
        }
        onLoad() {
            if (super.onLoad(), this.webViewComponent.setShouldShowWebview(!1), this.getComponent(h).bottom = this.hallScene.getBottomMenuHeight(), l(this.webViewComponent.webView, !0)) {
                this.webViewComponent.setSchemeName(this.CASHIER_JS_SCHEMA);
                const e = this.handleWebviewEvents.bind(this);
                c.isNative ? this.webViewComponent.webView.setOnJSCallback(((t, i) => {
                    e(i)
                })) : P.MessageCenter.register("on_webCcjsCallback", e, this.node)
            }
            P.MessageCenter.register(P.Enum.MessageCenterAction.onGetNewGeoToken, (e => {
                this.sendNewGeoComplyToken(e)
            }), this), P.appConfig.isLandscapeLayout || this.node.on(a.EventType.TOUCH_START, this.hideCashierToolTips, this), P.MessageCenter.register("onLogout", this.onLogoutSuccess.bind(this), this)
        }
        onDestroy() {
            null == super.onDestroy || super.onDestroy(), P.MessageCenter.unregister(P.Enum.MessageCenterAction.onGetNewGeoToken, this), P.MessageCenter.unregister("onLogout", this)
        }
        onEnable() {
            super.onEnable(), P.MessageCenter.register("native_onKeyboardStateChanged", this.onKeyboardStateChangedCallback.bind(this), this), l(this.webViewComponent.webView, !0) && this.webViewComponent.webView.node.on(p.MOUSE_DOWN, this.hideToolTip, this, !0), P.MessageCenter.register(P.Enum.MessageCenterAction.onCommonWebviewNodeShowPos, this.onCashierNodeShowPos.bind(this), this.node), P.MessageCenter.register(P.Enum.MessageCenterAction.onCommonWebviewNodeAwayPos, this.onCashierNodeAwayPos.bind(this), this.node), P.MessageCenter.register(P.Enum.MessageCenterAction.OnLoginSuccess, this.onLoginSuccessCallback.bind(this), this.node), P.MessageCenter.register(P.config.CHANGE_LANGUAGE, this.onLanguageChangeCallback.bind(this), this.node)
        }
        onDisable() {
            super.onDisable(), this.webviewReset = !0, P.MessageCenter.unregister("native_onKeyboardStateChanged", this), this.hideToolTip(), v.getInstance().onShowCashier(!1), P.MessageCenter.unregister(P.Enum.MessageCenterAction.onCommonWebviewNodeShowPos, this.node), P.MessageCenter.unregister(P.Enum.MessageCenterAction.onCommonWebviewNodeAwayPos, this.node), P.MessageCenter.unregister(P.Enum.MessageCenterAction.OnLoginSuccess, this.node), P.MessageCenter.unregister(P.config.CHANGE_LANGUAGE, this.node), P.appConfig.isLandscapeLayout || this.node.off(a.EventType.TOUCH_START, this.hideCashierToolTips, this)
        }
        hideCashierToolTips() {
            P.MessageCenter.send(P.Enum.MessageCenterAction.HideCashierCoinToolTips)
        }
        onCashierNodeShowPos(e) {
            this.node.uuid === (null == e ? void 0 : e.uuid) && (this.showPromoOnCashierClose = !0, v.getInstance().onShowCashier(!0), this.processPopupQueue())
        }
        onCashierNodeAwayPos(e) {
            this.node.uuid === (null == e ? void 0 : e.uuid) && (this.hideToolTip(), v.getInstance().onShowCashier(!1), this.showPromoOnCashierClose && P.authenticator.showDelayedPromo(), this.showPromoOnCashierClose = !1)
        }
        start() {
            this.initForAndroidWebview(), this.checkCountryRestrictions(), this.node.on(p.MOUSE_DOWN, this.hideToolTip, this, !0)
        }
        onMouseOver(e) {
            let t = e.target;
            const i = P.config.getStringData("Cashier_tool_tip");
            this.showToolTip(t, i, new u(0, 0))
        }
        onMouseLeave() {
            this.hideToolTip()
        }
        handleWebviewEvents(e) {
            var t;
            if ("string" == typeof e && (null != (t = this.webViewComponent) && t.eventFromWebView(e))) return;
            if (console.log(`handleCashierWebviewEvents is called with event: ${JSON.stringify(e)}`), this.hideToolTip(), !e) return;
            let i = "",
                s = null;
            "object" == typeof e ? [i, s] = [e.name, e.data] : "string" == typeof e && ([i, s] = this.parseWebviewEvent(e)), this.handlePaymentWebviewEvents(i, s)
        }
        handlePaymentWebviewEvents(e, t) {
            var i;
            switch (console.log("[new-cashier] events"), e) {
                case "onLoad":
                    break;
                case "txSuccess":
                    let e = f.Deposit;
                    t && t.activeTab && (e = this.getPageTypeFromName(t.activeTab)), this.scheduleOnce(this.initCashierPage.bind(this, e), J);
                    break;
                case "InitStage2":
                    this.hallScene.InitStage2Reg();
                    break;
                case "GeoComplyFail":
                    this.onGeoComplyError(t);
                    break;
                case "cashierReady":
                    this.isCashierLoaded = !0, null == (i = this.webViewComponent) || i.setShouldShowWebview(!0), this.setCashierLoadingMsg(""), this.unScheduleServerWaitResponse();
                    break;
                case "newWindow":
                    t && w.handleNewWindowEvent(t);
                case "checkCurp":
                    P.KYCHandler.checkStatus({
                        type: y.Curp,
                        onCBCancelForm: this.initCashierPage.bind(this, f.Deposit)
                    });
                    break;
                case "openFreshchat":
                    P.appConfig.getGeneralConfig().playerSupportLiveChat ? W.openChat() : v.getInstance().expandFreshChat();
                    break;
                case "initKYC":
                    let s = "WithdrawError_NotAllowedSelfieCheckRequired";
                    this.showPopup({
                        txt: s,
                        isTwoBtn: !0,
                        sureCallback: this.startKYCProcess.bind(this),
                        msgType: P.Enum.ToastType.ToastTypeWarning
                    })
            }
        }
        parseWebviewEvent(e) {
            let [t, i] = e.replace(this.CASHIER_JS_SCHEMA + "://", "").split("..");
            if (i) try {
                let e = decodeURIComponent(i),
                    s = P.tryParseJSON(e);
                if (s) return [t, s]
            } catch (t) {
                console.warn(`[new-cashier] parseWebviewEvent ${e} Exception`, t.Message, t.stack)
            }
            return [t, null]
        }
        onGeoComplyError(e) {
            if (e.activeTab == B.deposit || e.activeTab == B.withdraw) {
                var t;
                const i = e.activeTab == B.deposit ? "GeoComplyDepositCheckFailed" : "GeoComplyWithdrawalCheckFailed",
                    s = () => {
                        var e, t;
                        null != (e = P.geoComplyManager) && e.isGeoTokenRequired() && (null == (t = P.geoComplyManager) || t.requestValidToken(((e = "") => {
                            e && this.sendNewGeoComplyToken(e)
                        }), (() => {
                            this.changeActiveTab(B.records)
                        }), (() => {
                            this.changeActiveTab(B.records)
                        })))
                    };
                null == (t = P.geoComplyManager) || t.serverErrorHandler(e.payload, null, s, (() => {
                    this.changeActiveTab(B.records)
                }), {
                    ErrorCode: e.code,
                    ErrorType: i,
                    ErrorDetails: JSON.stringify(e)
                })
            }
        }
        showToolTip(e, t, i) {
            this.hideToolTip();
            let s = e.getComponent(d).contentSize,
                o = e.getComponent(d).anchorPoint,
                n = new u(s.width * (.5 - o.x), s.height * (0 - o.y) + 40),
                a = e.convertToWorldSpaceAR(n);
            A.showToolTips(a, "", t, i, k.PointerDownRight, 810, E.Default, e)
        }
        hideToolTip() {
            A.hideAllTooltips()
        }
        initForAndroidWebview() {
            c.isNative && c.os === c.OS.ANDROID && C.getInstance().addBackFunction("CashierLobby", this.onBackClicked.bind(this))
        }
        onBackClicked() {
            c.isNative && c.os === c.OS.ANDROID && C.getInstance().removeBackFunction("CashierLobby")
        }
        setCashierLoadingMsg(e, t = !0) {
            this.loaderText && (this.loaderText.string = t ? P.config.getStringData("Loading") + " " + e : P.config.getStringData(e, !1, e))
        }
        checkCountryRestrictions() {
            P.security.locationMonitor.getLocationDetails(this.onGetCountry.bind(this))
        }
        onGetCountry(e) {
            P.appConfig.getGeneralConfig().listOfCashierContriesUnderWorking && P.appConfig.getGeneralConfig().listOfCashierContriesUnderWorking.includes(e) && this.scheduleOnce(this.showCountriesAccessPopup)
        }
        showCountriesAccessPopup() {
            this.showPopup({
                title: "CashierInformation",
                subtitle: "PaymentOptions",
                txt: "WorkingPaymentOptionsInfo",
                iconType: S.Payment,
                msgType: P.Enum.ToastType.ToastTypeInfo,
                isShowGameLogoGroup: !0,
                sureLabel: "OK"
            })
        }
        resetView(e) {
            var t;
            this.webviewReset && (this.webviewReset = !1, this.isCashierLoaded = !1, null == (t = this.webViewComponent) || t.reset(e))
        }
        onKeyboardStateChangedCallback(e) {
            w.sendMessageToWebview(this.webViewComponent.webView, {
                name: m.keyboardState,
                data: e
            })
        }
        getCustomCashierWebAppBaseUrl() {
            return P.config.getStringData(this.URL_KEY, !0)
        }
        initCashierPage(e) {
            this.lastActiveTab = e, this.scheduleServerWaitResponse(), this.loadUrl(e == f.None ? "" : this.getPageName(e))
        }
        onWebViewLoaded(e) {
            console.log("[new-cashier] webview loaded")
        }
        onWebViewError(e) {
            console.log("[new-cashier] webview Error"), this.isCashierLoaded = !1
        }
        getPageName(e) {
            let t = B.deposit;
            switch (e) {
                case f.Withdraw:
                    t = B.withdraw;
                    break;
                case f.Records:
                    t = B.records;
                    break;
                case f.Transfer:
                    t = B.transfer;
                    break;
                default:
                    t = B.deposit
            }
            return t
        }
        getPageTypeFromName(e) {
            let t = f.Deposit;
            switch (e) {
                case B.withdraw:
                    t = f.Withdraw;
                    break;
                case B.records:
                    t = f.Records;
                    break;
                case B.transfer:
                    t = f.Transfer;
                    break;
                default:
                    t = f.Deposit
            }
            return t
        }
        loadUrl(e) {
            this.setCashierLoadingMsg("...");
            const t = `${this.getCustomCashierWebAppBaseUrl()}/lobby${T.getCommonURLParams()}`;
            this.resetView(e ? `${t}&page=${e}` : t)
        }
        scheduleServerWaitResponse(e = K) {
            this.isCashierLoaded || (this.unscheduleAllCallbacks(), this.unScheduleServerWaitResponse(), this.schedule(this.onServerResponseTimedOut, e))
        }
        unScheduleServerWaitResponse() {
            this.unschedule(this.onServerResponseTimedOut)
        }
        onServerResponseTimedOut() {
            this.unscheduleAllCallbacks(), this.serverResponseWaitTime += Y, this.serverResponseWaitTime > z && (this.serverResponseWaitTime = z), P.server.nextProxy(this.URL_KEY), this.webviewReset = !0;
            let e = "serverErrorCode100158";
            this.showPopup({
                txt: e,
                isTwoBtn: !0,
                sureCallback: this.reloadLastActiveTab.bind(this),
                cancelCallback: this.onCashierServerPopUpCancel.bind(this, e),
                sureLabel: "Hotupdate_retrybtn",
                cancelLabel: "BackBtnText",
                msgType: P.Enum.ToastType.ToastTypeWarning
            })
        }
        onCashierServerPopUpCancel(e) {
            this.setCashierLoadingMsg(e, !1)
        }
        onLogoutSuccess() {
            this.webviewReset = !0, this.resetView("about:blank")
        }
        onLoginSuccessCallback() {
            this.webviewReset = !0
        }
        onLanguageChangeCallback() {
            this.webviewReset = !0
        }
        reloadLastActiveTab() {
            this.initCashierPage(this.lastActiveTab)
        }
        startKYCProcess() {
            this.hallScene.goToKycPage()
        }
        changeActiveTab(e) {
            w.sendMessageToWebview(this.webViewComponent.webView, {
                name: m.ChangeActiveTab,
                data: {
                    name: e
                }
            })
        }
        sendNewGeoComplyToken(e) {
            w.sendMessageToWebview(this.webViewComponent.webView, {
                name: m.GeoComplyTokenRenewed,
                data: {
                    token: e
                }
            })
        }
        showPopup(e, t) {
            if (this.webViewComponent.isActive()) P.popUp.showMsgI18n(e), t && t();
            else {
                this.popupQueue.some((t => t.config.txt === e.txt && t.config.title === e.title)) || this.popupQueue.push({
                    config: e
                })
            }
        }
        processPopupQueue() {
            for (; this.popupQueue.length > 0;) {
                const e = this.popupQueue.shift();
                e && P.popUp.showMsgI18n(e.config)
            }
        }
    }).prototype, "paymentSupportPopupPrefab", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(_.prototype, "loaderText", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(_.prototype, "mexicanCashierToolTipNode", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(_.prototype, "paymentSupportItemsToEnable", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), x = t(_.prototype, "webViewComponent", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(_.prototype, "paymentPopupParent", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = _)) || O));
    s._RF.pop()
}