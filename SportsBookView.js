import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as w from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as b from "./CommonWebView.js";
import * as C from "./cv.js";
import * as m from "./SportsBookApi.js";
import * as _ from "./WebViewThemeType.js";
import * as S from "./Enum.js";
import * as v from "./Enum.js";
import * as V from "./NativeEvent.js";
import * as f from "./CommonHallSubViewController.js";

function main() {
    var k, B, E, W, L, y, T, M, A, P, R, q, N, G, D, O;
    s._RF.push({}, "d6ae9fSPJ1Ph6htgpaDWHP/", "SportsBookView", void 0);
    const {
        ccclass: x,
        property: I
    } = r;
    e("default", (k = I(b), B = I(o), E = I(n), W = I(a), L = I(a), y = I(a), T = I(a), x((P = t((A = class extends f {
        constructor(...e) {
            super(...e), i(this, "webViewComponent", P, this), i(this, "loadingNode", R, this), i(this, "loadingText", q, this), i(this, "listenBackWebEvent", N, this), i(this, "showCloseOnWeb", G, this), i(this, "showDeposit", D, this), i(this, "isDirectDetailPage", O, this), this.SCHEME_SPORTS_BOOK_EVENT = "ccjs", this.sportsBookApi = new m, this.waitingLayerName = "shieldLayer-sportsBook", this._url = "", this._loadingBar = void 0, this._currentProgress = 0, this._maxProgress = 0, this._isWebViewLoaded = !1, this._matchId = "", this._isRequestCloseGameAuto = !1, this._isRequestingCloseGame = !1
        }
        on_webCcjsCallback(e) {
            e && "string" == typeof e ? this.getEventFromWebView(e) : h(`data send from webview should be string, event is: ${e}`)
        }
        sportsBookEventPageCallbacks(e) {
            e && "string" == typeof e ? this.getEventFromWebView(e) : h("data send from webview should be string")
        }
        reloadWebview() {
            this.updateUrl(), this.node.active && l(this.webViewComponent.webView, !0) && (this.loadingNode.active = !0, this.webViewComponent.reset(this._url))
        }
        onLoad() {
            if (super.onLoad(), this.webViewComponent.setShouldShowWebview(!1), g.on("themechange", this.onThemeChanged, this), C.MessageCenter.register(C.config.CHANGE_LANGUAGE, this.onChangeLanguage.bind(this), this.node), C.isDesktopBuild() && C.appConfig.getGeneralConfig().multiWindowEnabled) {
                this.webViewComponent.isMoveActiveWebView = !1;
                try {
                    this.webViewComponent.webView.setBackgroundTransparent(!0)
                } catch (e) {
                    c("[SportsBookView] Error setting background transparent for webview")
                }
            }
            if (l(this.webViewComponent.webView, !0)) {
                this.webViewComponent.webView.url = "about:blank", this.webViewComponent.setSchemeName(this.SCHEME_SPORTS_BOOK_EVENT);
                const e = this.sportsBookEventPageCallbacks.bind(this);
                this.webViewComponent.webView.setOnJSCallback(((t, i) => {
                    e(i)
                }))
            }
            this.showLoading(), this._loadingBar = this.loadingNode.getComponentInChildren(u)
        }
        onEnable() {
            super.onEnable(), this._isRequestCloseGameAuto = !1, this._isRequestingCloseGame = !1, this.activeWaitingLayer(!1), C.resMgr.adaptWidget(this.node, !0, !0), l(this.webViewComponent.webView, !0) && C.MessageCenter.register("on_webCcjsCallback", this.on_webCcjsCallback.bind(this), this.node), C.MessageCenter.register(C.Enum.MessageCenterAction.onRequestLeaveWebview, this.onRequestLeaveWebview.bind(this), this.node), C.MessageCenter.register(v.WindowScreenChanged, this.onScreenChanged.bind(this), this), this.showLoading(), this.checkOpenView()
        }
        onScreenChanged(e) {
            e == this.node.scene.windowID && this.onAdaptedScreen()
        }
        onAdaptedScreen() {
            C.resMgr.adaptWidget(this.node, !0, !0)
        }
        update(e) {
            if (this._loadingBar && this.loadingNode.active) {
                const e = .1;
                this._currentProgress += e, this._currentProgress = Math.min(this._currentProgress, this._maxProgress);
                const t = Math.round(Math.atan(this._currentProgress) / (Math.PI / 2) * 1e5) / 1e3;
                this._loadingBar.progress = Math.clamp01(t / 100), this._loadingBar.progress >= .9 && this._isWebViewLoaded && this._url.length && this.hideLoading()
            } else this._isRequestCloseGameAuto && (this.requestLeave(), this._isRequestCloseGameAuto = !1)
        }
        onDisable() {
            var e;
            super.onDisable(), l(this.webViewComponent.webView, !0) && C.MessageCenter.unregister("on_webCcjsCallback", this.node), C.MessageCenter.unregister(C.Enum.MessageCenterAction.onRequestLeaveWebview, this.node), C.MessageCenter.unregister(v.WindowScreenChanged, this), null == (e = this.sportsBookApi) || e.stopStart(!0), this._url = "", this.requestLeave()
        }
        onDestroy() {
            g.off("themechange", this.onThemeChanged, this), C.MessageCenter.unregister(C.config.CHANGE_LANGUAGE, this.node), this.unscheduleAllCallbacks()
        }
        onRequestLeaveWebview(e) {
            e && e.gameId === C.Enum.GameId.SportsBook && this.requestLeave()
        }
        requestLeave() {
            if (C.appConfig.getGeneralConfig().multiWindowEnabled) {
                var e, t;
                if (null != (e = this.loadingNode) && e.active || this._isRequestingCloseGame) return void(this._isRequestCloseGameAuto = !0);
                this._isRequestingCloseGame = !0, this.activeWaitingLayer(!0), null == (t = this.sportsBookApi) || t.postSettleBalance((() => {
                    this.activeWaitingLayer(!1), C.MessageCenter.send(C.Enum.MessageCenterAction.onSportsBookLeaveSuccess, !0), this._isRequestingCloseGame = !1
                }), (() => {
                    this.activeWaitingLayer(!1), C.MessageCenter.send(C.Enum.MessageCenterAction.onSportsBookLeaveSuccess, !1), this._isRequestingCloseGame = !1
                }))
            } else {
                var i;
                null == (i = this.sportsBookApi) || i.postSettleBalance((() => {}), (() => {
                    C.worldNet.requestGetUserData()
                }))
            }
        }
        activeWaitingLayer(e) {
            var t, i;
            e ? C.action.createShieldLayer((null == (t = this.node) ? void 0 : t.getParent()) || d.getScene().getComponentInChildren(w).node, this.waitingLayerName) : C.action.removeShieldLayer((null == (i = this.node) ? void 0 : i.getParent()) || d.getScene().getComponentInChildren(w).node, this.waitingLayerName)
        }
        checkOpenView() {
            this._url.length ? (this._maxProgress = 200, this.reloadWebview()) : (this._maxProgress = 2, this.sportsBookApi.stopSettleBalance(!0), this.requestStart())
        }
        requestStart() {
            var e, t, i;
            null != (e = C.geoComplyManager) && e.isGeoTokenRequired() ? null == (i = C.geoComplyManager) || i.requestValidToken(((e = "") => {
                e && this.requestStart()
            }), (() => {})) : null == (t = this.sportsBookApi) || t.fetchStart(this.onSportsBookStartStatusSuccess.bind(this), this.onSportsBookStartStatusFail.bind(this))
        }
        showLoading() {
            this._currentProgress = 0, this.loadingText && (this.loadingText.string = C.config.getStringData("MainScene_Sports_Book_Loading_text")), this._loadingBar && (this._loadingBar.progress = 0, this._loadingBar.node.active = !0), this.loadingNode.active = !0, this.webViewComponent.setShouldShowWebview(!1)
        }
        hideLoading() {
            this._loadingBar && (this._loadingBar.node.active = !1), this.loadingNode.active = !1, this.webViewComponent.setShouldShowWebview(!0)
        }
        onWebViewLoaded(e) {
            if (!l(this.webViewComponent.webView, !0)) return;
            this.webViewComponent.evaluateJs("document.addEventListener('contextmenu', event => event.preventDefault());"), this._isWebViewLoaded = !0, this.webViewComponent.webView.url != this._url && this._url.length && (this.webViewComponent.webView.url = this._url), this._loadingBar.progress >= .9 && this._url.length && this.hideLoading()
        }
        onWebViewLoading(e) {
            l(this.webViewComponent.webView, !0) && (this._isWebViewLoaded = !1)
        }
        onWebViewError(e) {
            this.node.active && l(this.webViewComponent.webView, !0) && (this._isWebViewLoaded = !1, this.showErrorMessage("sports_book_time_out_error"))
        }
        onErrorRetryBtn() {
            this.showLoading(), this._url = "", this.checkOpenView()
        }
        onErrorCancelBtn() {}
        onSportsBookStartStatusSuccess(e) {
            this._url = e, this.updateUrl(), this.checkOpenView()
        }
        onSportsBookStartStatusFail(e) {
            this.showErrorMessage("sports_book_time_out_error")
        }
        getEventFromWebView(e) {
            if (!this.webViewComponent.eventFromWebView(e) && e.indexOf(`${this.SCHEME_SPORTS_BOOK_EVENT}://`) >= 0) {
                let t = e.replace(`${this.SCHEME_SPORTS_BOOK_EVENT}://`, ""),
                    i = t,
                    s = t.split("&");
                switch (s && s.length > 1 && (i = s[0], s.shift()), i) {
                    case "back":
                    case "back-normal":
                    case "back-abnormal":
                        this.onBackClickedAction();
                        break;
                    case "back-normal-recharge":
                        this.RedirectToCashierPage()
                }
            }
        }
        showErrorMessage(e) {
            this._loadingBar && (this._loadingBar.node.active = !1, this.loadingText.string = e), C.popUp.showMsgI18n({
                txt: e,
                isTwoBtn: !0,
                sureCallback: () => this.onErrorRetryBtn(),
                cancelCallback: () => this.onErrorCancelBtn(),
                sureLabel: "Hotupdate_retrybtn",
                cancelLabel: "BackBtnText",
                msgType: C.Enum.ToastType.ToastTypeWarning
            })
        }
        onBackClickedAction() {
            this.requestLeave()
        }
        getSportsBookUrl() {
            let e = "&lang=" + C.config.getCurrentLanguageDetails().code;
            e += "&isNative=" + (p.isNative ? "1" : "0"), e += "&backOpt=" + (this.listenBackWebEvent ? "0" : "1"), e += "&hideClose=" + (this.showCloseOnWeb ? "0" : "1"), e += "&region=" + C.StringTools.countryAlpha3Code, e += "&isRecharge=" + (this.showDeposit ? "1" : "0"), e += "&theme=" + (C.appConfig.getDesignConfig().webViewThemeUse == _.LIGHT ? "1" : "2"), e += "&logo=" + (C.appConfig.getAppClone() == C.Enum.AppClone.WPTGO ? "wptgo" : "wptg"), this.isDirectDetailPage && this._matchId.length && (e += "&matchId=" + this._matchId);
            const t = this._url.split("?"),
                i = t[1] ? t[1].split("&") : [],
                s = e.split("&"),
                o = i.reduce(((e, t) => {
                    const [i, s] = t.split("=");
                    return i.length && (e[i] = s), e
                }), {});
            s.forEach((e => {
                const [t, i] = e.split("=");
                t.length && (o[t] = i)
            }));
            const n = Object.entries(o).map((([e, t]) => `${e}=${t}`)).join("&");
            return `${t[0]}?${n}`
        }
        RedirectToCashierPage() {
            C.MessageCenter.send("switchSceneToEarnView", S.DepositScene), C.appConfig.getGeneralConfig().multiWindowEnabled && (C.focusWindow(1), V.showMainWindow())
        }
        onThemeChanged() {
            this.reloadWebview()
        }
        onChangeLanguage() {
            this.reloadWebview()
        }
        updateUrl() {
            this._url.length && (this._url = this.getSportsBookUrl())
        }
    }).prototype, "webViewComponent", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(A.prototype, "loadingNode", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(A.prototype, "loadingText", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(A.prototype, "listenBackWebEvent", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), G = t(A.prototype, "showCloseOnWeb", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), D = t(A.prototype, "showDeposit", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), O = t(A.prototype, "isDirectDetailPage", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), M = A)) || M));
    s._RF.pop()
}