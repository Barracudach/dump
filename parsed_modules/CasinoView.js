import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as V from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as w from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as O from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as v from "./cc.js";
import * as L from "./cc.js";
import * as T from "./cc.js";
import * as y from "./cc.js";
import * as A from "./CrashTracing.js";
import * as f from "./CrashTracing.js";
import * as N from "./Base64Img.js";
import * as W from "./Enum.js";
import * as P from "./Enum.js";
import * as G from "./Enum.js";
import * as M from "./NativeEvent.js";
import * as I from "./cv.js";
import * as R from "./WebViewUIData.js";
import * as B from "./CasinoData.js";
import * as U from "./CasinoData.js";
import * as k from "./CasinoData.js";
import * as D from "./CasinoData.js";
import * as x from "./CasinoEnum.js";
import * as H from "./CasinoEnum.js";
import * as F from "./CasinoEnum.js";
import * as Y from "./CasinoTracing.js";
import * as mod11 from "./FakeMultipleGame.js";
import * as J from "./HallScene.js";
import * as K from "./CasinoContentView.js";
import * as z from "./DeeplinksHandler.js";

function main() {
    var q, j, X, Q, Z, ee, te, ie, se, oe, ne, ae, re;
    s._RF.push({}, "08cefnsnHtKIL2NxyjuV90F", "CasinoView", void 0);
    const {
        ccclass: he,
        property: le
    } = r;
    e("default", (q = le(o), j = le(n), X = le(a), Q = le(n), Z = le(n), he(((re = class e extends h {
        constructor(...e) {
            super(...e), i(this, "webView", ie, this), i(this, "loadingNode", se, this), i(this, "prefabWebView", oe, this), i(this, "base64webViewScreenShot", ne, this), i(this, "rootNode", ae, this), this.webViewContentGamePlayNode = null, this.webViewGamePlay = null, this.gameUrl = "", this.SCHEME_CASINO = "casino", this.URL_KEY = "WEB_CASINO_LOBBY", this.TIME_WEB_LOAD_ERROR = 6e4, this.TIME_WAIT_TO_DESTROY_FROM_CLOSE_CASINO_LOBBY = 18e4, this.CASINO_TOP_OFFSET_Y = 369, this.CASINO_BOTTOM_OFFSET_Y = 210, this.MESSAGE_CHECK_NON_RESPONSE_WEB_VIEW = "MESSAGE_CHECK_NON_RESPONSE_WEB_VIEW", this.PATH_FIND_TOP_PANEL = "top_panel", this.PATH_FIND_WEBVIEW_PANEL = "webView_panel", this.PATH_FIND_CONTENT_WEBVIEW_GP = "contentGamePlay", this.PATH_FIND_WEBVIEW_GAMPLAY = "webViewGamePlay", this.PATH_FIND_BG_WEBVIEW = "bgWebView", this.isFakeiOS = !1, this.isEnableAutoRotateOnWeb = !1, this._webViewStartPos = new l(0, 0, 0), this._webViewMovePos = new l(-5e3, -5e3, 0), this.web = null, this.base64Image = null, this._endLoadingTimeOut = null, this._loadingWebErrorTimeOut = null, this._recreateWebViewTimeOut = null, this._backToCasinoLobbyTimeOut = null, this._destroyCasinoTimeOut = null, this._preState = F.NONE, this._state = F.NONE, this._isGotMessageCasinoReady = !1, this._webViewPanel = null, this._topPanel = null, this._isLoadedLobby = !1, this._needReCreateWebView = !1, this._lastTimeGetResponseFromWebView = 0, this.isInit = !1, this.AVERAGE_BACK_WIDTH = 300, this._allowScreenshot = !1, this._isLandscapeMode = !1, this._isAppFreeze = !1, this._requestToCleanupWebView = !1, this._shouldStartEmbedServer = !0, this._gameCodeGeoComplyRetry = "", this.bgWebViewHallScene = null, this.casinoGameConfig = {
                embed: !1,
                orientation: D.auto,
                position: k.left,
                gameLoaded: !1,
                isOpenMenu: !1,
                isShowingPopup: !1
            }, this._scheduledForOrientationChange = !1, this._scheduledRotateState = void 0, this.safeArea = void 0, this._loadingBar = void 0, this._currentProgress = 0, this._loadingText = void 0, this.isWebviewActive = null, this.lobbyLoadComplete = !1, this.popupQueue = [], this._lastTimeCallUpdate = 0, this.hadWebLoadErrorWhileInactive = !1, this._rotateMode = 0, this._webViewScale = d(1, 1, 1), this._isSilentLoadCasinoLobby = !1, this._silentLoadCount = 0, this.MAX_SILENT_LOADS = 5
        }
        preInit() {
            var e;
            if (this.hadWebLoadErrorWhileInactive = !1, this._isLandscapeMode = I.native.isScreenLandscape(), this.web = this.webView.node.parent, this.base64Image = null == (e = this.base64webViewScreenShot) ? void 0 : e.getComponent(N), this._webViewPanel = b(this.PATH_FIND_WEBVIEW_PANEL, this.node), this._loadingText = b("content/loading_text", this.loadingNode), c(this._loadingText) || u("[CasinoView] prefab has change wrong! loadingNode need <content/loading_text>"), !I.appConfig.isLandscapeLayout) {
                var t;
                this._topPanel = b(this.PATH_FIND_TOP_PANEL, this.node), this.webViewContentGamePlayNode = b(this.PATH_FIND_CONTENT_WEBVIEW_GP, this._webViewPanel);
                const e = b(this.PATH_FIND_WEBVIEW_GAMPLAY, this.webViewContentGamePlayNode);
                c(this._webViewPanel, !0) && c(this._topPanel, !0) && c(e, !0) || u("[CasinoView] structure prefab has change wrong!"), this.setActiveTopPanel(!1), this.webViewGamePlay = null == e ? void 0 : e.getComponent(o), this.bgWebViewHallScene = b(this.PATH_FIND_BG_WEBVIEW, this.rootNode), this.scheduleOnce((() => {
                    this.hideWebViewGamePlay()
                })), null == (t = $.instance) || t.moveHeaderToLeft(), !this._isLandscapeMode && c(this._webViewPanel) && (this._webViewPanel.getComponent(g).bottom = this.CASINO_BOTTOM_OFFSET_Y)
            }
        }
        isSupportOpenGameLocalHost() {
            return !!I.appConfig.isEnableEmbedLogic && (p.isNative && p.os === p.OS.IOS || this.isFakeiOS)
        }
        isIOSNative() {
            return p.isNative && p.os === p.OS.IOS
        }
        showWebViewGamePlay(e) {
            var t;
            c(this.webViewGamePlay, !0) && this.isSupportOpenGameLocalHost() && (this.webViewContentGamePlayNode.active = !0, null == (t = this.webViewGamePlay.node) || t.setPosition(this._webViewMovePos), this.webViewGamePlay.url = e, p.isBrowser && this.scheduleOnce((() => {
                this.showWebViewGamePlayByPos()
            }), 1))
        }
        showWebViewGamePlayByPos() {
            var e, t;
            (null == (e = this.webViewGamePlay.node) || e.setPosition(this._webViewStartPos), p.isNative && p.os == p.OS.ANDROID) && (null == (t = this.webViewGamePlay._impl) || null == (t = t.webview) || t.setVisible(!0))
        }
        hideWebViewGamePlay() {
            var e, t;
            c(this.webViewGamePlay, !0) && !I.appConfig.isLandscapeLayout && (this.webViewGamePlay.url = "", p.isNative && p.os == p.OS.ANDROID && (null == (e = this.webViewGamePlay._impl) || null == (e = e.webview) || e.setVisible(!1)), null == (t = this.webViewGamePlay.node) || t.setPosition(this._webViewMovePos), this.webViewContentGamePlayNode.active = !1)
        }
        recreateWebView() {
            this._recreateWebViewTimeOut && (clearTimeout(this._recreateWebViewTimeOut), this._recreateWebViewTimeOut = null), this.web.removeAllChildren(), this.isSupportOpenGameLocalHost() && this.webViewGamePlay.node.parent.removeAllChildren();
            let e = !1;
            this._recreateWebViewTimeOut = setTimeout((() => {
                if (0 == this.web.children.length) {
                    if (I.appConfig.isLandscapeLayout) {
                        const e = this.web.getComponent(K);
                        this.webView = null == e ? void 0 : e.recreateWebView(this.web)
                    } else {
                        const e = y(this.prefabWebView);
                        this.web.addChild(e), e.setSiblingIndex(I.Enum.ZORDER_TYPE.ZORDER_0), this.webView = e.getComponent(o)
                    }
                    e = !0
                }
                if (this.isSupportOpenGameLocalHost() && 0 == this.webViewContentGamePlayNode.children.length) {
                    const t = y(this.prefabWebView);
                    this.webViewContentGamePlayNode.addChild(t), this.webViewGamePlay = t.getComponent(o), e = !0
                }
                e && I.resMgr.adaptWidget(this.node, !0, !0), this.initWebView()
            }), 300)
        }
        onLoad() {
            this.preInit(), this.setActiveWebViewByPos(!1), c(this.webView, !0) && (this.setActiveWebView(!0), this.resetURL(!1)), p.isNative && !p.isMobile && this.schedule(this.checkUnreponsiveWebView, 1, w.REPEAT_FOREVER)
        }
        update(e) {
            if (this._isLandscapeMode != I.native.isScreenLandscape() && this.isEnableAutoRotateOnWeb) {
                this._isLandscapeMode = I.native.isScreenLandscape();
                const e = this._isLandscapeMode ? 2 : 1;
                this.updateRotateStateTimeout({
                    rotateMode: e,
                    forceRotate: !1,
                    isNeedChangeNative: !1,
                    needUpdateCasinoLobby: !0
                })
            }
            const t = 1e3 * e,
                i = Date.now();
            if ((t > 500 || i - this._lastTimeCallUpdate > 2e3) && (this._isAppFreeze = !0), this._lastTimeCallUpdate = i, this._loadingBar && this.loadingNode.active) {
                const e = .1;
                this._currentProgress += e;
                const t = Math.round(Math.atan(this._currentProgress) / (Math.PI / 2) * 1e5) / 1e3;
                this._loadingBar.progress = Math.clamp01(t / 100)
            }
        }
        onDestroy() {
            var e;
            m.off("orientation-change", this.onScreenOrientationChange, this), this.destroyWebView(), this.unscheduleAllCallbacks(), null == (e = this.webView) || null == (e = e.node) || e.destroy(), this.isInit = !1
        }
        startLoadingWebView() {
            this.showLoadingAnim(), this.setState(F.INIT_WEBVIEW);
            const e = {
                spanName: f.CasinoWebLoad
            };
            I.casinoTracing.startTrace(e)
        }
        showLoadingAnim() {
            c(this.loadingNode, !0) && (this.loadingNode.active = !0), this.setActiveWebViewByPos(!1, !0)
        }
        endLoadingWebView() {
            this.loadingNode.active = !1, this.setActiveTopPanel(!0), this.setCasinoToPlayMode(!1), this.setActiveWebViewByPos(!0, !0), I.tools.isAnyPopupVisible() && this.takeScreenShot(), this.traceDataWebLoadSuccess()
        }
        setActiveTopPanel(e) {
            !I.appConfig.isLandscapeLayout && this._topPanel && (this._topPanel.active = e)
        }
        loadingWebView() {
            this.traceDataWebLoading()
        }
        traceDataWebLoading() {
            var e, t, i, s, o;
            this.setDebugText(`\n            [.... IS LOADING ....]\n            webViewPos : x: ${null==(e=this.webView)||null==(e=e.node)?void 0:e.position.x} | y: ${null==(t=this.webView)||null==(t=t.node)?void 0:t.position.y}\n            webViewIsActive : ${null==(i=this.webView)||null==(i=i.node)?void 0:i.active}\n            thisWebViewNodePos : x: ${null==(s=this.node)?void 0:s.position.x} | y: ${null==(o=this.node)?void 0:o.position.y}\n            thisWebViewNodeActive : ${this.isWebviewActive}\n        `)
        }
        traceDataWebLoadSuccess() {
            var e, t, i;
            const s = new A;
            s.webViewPos = `x: ${null==(e=this.webView)||null==(e=e.node)?void 0:e.position.x} | y: ${null==(t=this.webView)||null==(t=t.node)?void 0:t.position.y}`, s.webViewIsActive = null == (i = this.webView) || null == (i = i.node) ? void 0 : i.active;
            const o = {
                spanName: f.CasinoWebLoad,
                attribute: s
            };
            I.casinoTracing.addInfoTrace(o);
            const n = {
                spanName: f.CasinoWebLoad,
                eventName: Y.LOADED,
                attribute: I.casinoTracing.getAttributeData(f.CasinoWebLoad)
            };
            I.casinoTracing.endTrace(n)
        }
        webLoadError(e = !0) {
            if (this.isActive() || (this.hadWebLoadErrorWhileInactive = !0), !this.isActive() || this._state == F.CASINO_GAMEPLAY || this._preState == F.CASINO_GAMEPLAY) return;
            this._loadingWebErrorTimeOut && (clearTimeout(this._loadingWebErrorTimeOut), this._loadingWebErrorTimeOut = null), this._endLoadingTimeOut && (clearTimeout(this._endLoadingTimeOut), this._endLoadingTimeOut = null), this._silentLoadCount = 0;
            let t = {
                spanName: f.CasinoWebLoad,
                eventName: Y.TIMEOUT,
                spandCode: 2
            };
            e ? (this.setDebugText("WEB LOADED ERROR TIMEOUT"), this.setState(F.ERROR_TIMEOUT)) : (this.setDebugText("WEB LOADED ERROR BY DEFAULT"), this.setState(F.ERROR_DEFAULT), t = {
                spanName: f.CasinoWebLoad,
                eventName: Y.ERROR,
                spandCode: 2
            }), I.casinoTracing.endTrace(t);
            let i = "casinoLoadingServerErrorCode100158";
            this._loadingBar && (this._loadingBar.node.active = !1, this._loadingText.getComponent(C).string = I.config.getStringData(i)), this.showPopup({
                txt: i,
                isTwoBtn: !0,
                sureCallback: () => this.onErrorRetryBtn(),
                cancelCallback: () => this.onErrorCancelBtn(),
                sureLabel: "Hotupdate_retrybtn",
                cancelLabel: "BackBtnText",
                msgType: I.Enum.ToastType.ToastTypeWarning
            })
        }
        onErrorRetryBtn() {
            this.forceReloadWebView()
        }
        onErrorCancelBtn() {
            this.forceReloadWebView()
        }
        onLogoutWebView() {
            this.requestToCasinoLobby(), this.sendEventInit()
        }
        forceReloadWebView() {
            I.MessageCenter.send("switchSceneToCasinoLobby"), this.showLoadingAnim(), this._requestToCleanupWebView = !0, this.node || (this.node.active = !1), this.setActive(!1, !0), this._needReCreateWebView = !0, setTimeout((() => {
                this.setActive(!0, !0)
            }), 100)
        }
        onEnable() {
            this.isInit && (I.resMgr.adaptWidget(this.node, !0, !0), I.appConfig.isLandscapeLayout || this.resetToPortrait(), this.clearDestroyCasinoTimeOut(), cc_mtt && cc_mtt.vv && (cc_mtt.vv.casinoView = this), this._needReCreateWebView || this._state === F.HIDDEN ? (this._isLoadedLobby = !1, this.recreateWebView()) : this.initWebView(), this.safeArea = p.getSafeAreaRect(), this._loadingBar = this.loadingNode.getComponentInChildren(_), this._loadingBar ? (this._currentProgress = 0, this._loadingBar.progress = 0, this._loadingBar.node.active = !0, this.setActiveTopPanel(!1)) : E("loading bar is missed"), this._loadingText && (this._loadingText.getComponent(C).string = I.config.getStringData("MainScene_Casino_Loading_text")))
        }
        onUpdateConfig() {
            this.isActive() && !I.appConfig.getLobbyConfig().showCasinoLobby && I.MessageCenter.send("switchSceneToPokerLobby")
        }
        clearDestroyCasinoTimeOut() {
            this._destroyCasinoTimeOut && (clearTimeout(this._destroyCasinoTimeOut), this._destroyCasinoTimeOut = null)
        }
        onScreenOrientationChange(e) {
            let t = 1;
            e !== w.ORIENTATION_LANDSCAPE_LEFT && e !== w.ORIENTATION_LANDSCAPE_RIGHT || (t = 2), this.updateRotateStateTimeout({
                rotateMode: t,
                forceRotate: !1,
                isNeedChangeNative: !1,
                needUpdateCasinoLobby: !0
            })
        }
        updateRotateNativeEvent(e) {
            return this.updateRotateStateTimeout({
                rotateMode: e,
                forceRotate: !1,
                isNeedChangeNative: !1,
                needUpdateCasinoLobby: !0
            })
        }
        updateRotateStateTimeout(e) {
            this._scheduledForOrientationChange && this.unschedule(this.updateRotateState), this._scheduledForOrientationChange = !0, this._scheduledRotateState = e, this.schedule(this.updateRotateState, .5, 3, 0)
        }
        updateRotateState() {
            var e;
            this._scheduledForOrientationChange = !1;
            const {
                rotateMode: t,
                forceRotate: i,
                isNeedChangeNative: s,
                needUpdateCasinoLobby: o
            } = this._scheduledRotateState, n = null == (e = this.rootNode) ? void 0 : e.getComponent(T);
            if (!(i || t != this._rotateMode) || I.appConfig.isLandscapeLayout || I.tools.isAnyPopupVisible() || null == n || I.dataHandler.getUserData().isUserRequestJoinMiniGame) return;
            if (1 == t)
                if (I.native.resetToPortrait(s), i) {
                    var a;
                    const e = null == (a = this.rootNode) ? void 0 : a.getComponent(J);
                    null == e || e.adaptScreen()
                } else S.setResolutionPolicy(O.FIXED_WIDTH);
            else I.native.setLandscape(s), S.setResolutionPolicy(O.FIXED_HEIGHT);
            const r = this.casinoGameConfig.isShowingPopup || this.casinoGameConfig.isOpenMenu;
            this.casinoGameConfig.embed && o && this.casinoLobbySetFull(r), this.updateWebViewChangeOrientation(t), this.updateWidget(), this._rotateMode = t
        }
        updateWidget() {
            this.isActive() && (I.resMgr.adaptWidget(this.rootNode, !1, !1), I.resMgr.adaptWidget(this.node, !0, !1), this.scheduleOnce((() => {
                this._webViewPanel.scale == this._webViewScale ? this._webViewPanel.scale = this._webViewScale.add(d(1e-4, 1e-4, 1e-4)) : this._webViewPanel.scale = this._webViewScale
            })))
        }
        initWebView() {
            const t = () => {
                if (this._shouldStartEmbedServer) {
                    const t = parseInt(I.appConfig.casinoLocalhostGamePort);
                    I.embeddedServer.runEmbedGame(e.PATH_WEB_LOCALHOST, t, e.CACHE_AGE_LOCALHOST), this._shouldStartEmbedServer = !1
                }
            };
            if (this._isLoadedLobby && !this._requestToCleanupWebView) {
                t();
                const e = {
                    needClear: !1,
                    setWebViewActive: !0,
                    useRealBlankUrl: !1,
                    needMoveWebViewOut: !0
                };
                return void this.resetView(e)
            }
            this._requestToCleanupWebView = !1, c(this.webView, !0) && (I.MessageCenter.register(I.Enum.MessageCenterAction.onDisablePopUpMsg, this.onPopupShow.bind(this, !1), this), I.MessageCenter.register(I.Enum.MessageCenterAction.onOpenPopUpMsg, this.onPopupShow.bind(this, !0), this), I.MessageCenter.register("HideWebview_ShowWindows", this.hideWebViewShowWindow.bind(this), this.node), I.MessageCenter.register("on_webCcjsCallback", this.on_webCcjsCallback.bind(this), this.node), I.MessageCenter.register(I.Enum.MessageCenterAction.onGetNewGeoToken, (e => {
                this.sendGeoComplyTokenCb(e)
            }), this), this.webView.node.on("loaded", this.onWebFinishLoad.bind(this)), this.webView.node.on("loading", this.onWebLoading.bind(this)), this.webView.node.on("error", this.onWebError.bind(this)), I.MessageCenter.register("CasinoDeepLinkAction", this.checkAndDoCasioDeepLinkAction.bind(this), this), I.MessageCenter.register("UpdateMiniGameCoin", this.sendMiniGameCoin.bind(this), this), I.MessageCenter.register("UpdateMiniGameId", this.sendMiniGameCoin.bind(this), this), I.MessageCenter.register("UpdateExchangeRate", this.sendUserBalances.bind(this), this), I.MessageCenter.register("update_gold", this.sendUserBalances.bind(this), this), I.MessageCenter.register("onAdaptedScreen", this.onAdaptedScreen.bind(this), this), I.MessageCenter.register("setActiveWebViewByPos", this.setActiveWebViewByPos.bind(this), this), I.MessageCenter.register(I.config.CHANGE_LANGUAGE, this.onLanguageChanged.bind(this), this), I.MessageCenter.register(I.Enum.MessageCenterAction.OnLoginSuccess, this.onLoginSuccessCallback.bind(this), this), I.MessageCenter.register("logout_webview", this.onLogoutWebView.bind(this), this.node), I.MessageCenter.register(I.Enum.MessageCenterAction.OnUpdateServerConfigSuccess, this.onUpdateConfig.bind(this), this), L.on("themechange", this.updateThemeData, this)), c(this.webViewGamePlay, !0) && this.isSupportOpenGameLocalHost() && this.webViewGamePlay.node.on("loaded", this.syncRecentGame.bind(this)), t(), this._isGotMessageCasinoReady = !1, this.lobbyLoadComplete = !1;
            const i = this.casinoPageCallbacks.bind(this);
            this.webView.url = this.getCasinoLobbyURL(), p.isNative && (this.webView.setJavascriptInterfaceScheme(this.SCHEME_CASINO), this.webView.setOnJSCallback(((e, t) => {
                i(t)
            })), this.isSupportOpenGameLocalHost() && (this.webViewGamePlay.setJavascriptInterfaceScheme(this.SCHEME_CASINO), this.webViewGamePlay.setOnJSCallback(((e, t) => {
                i(t)
            })))), this.startLoadingWebView(), this._loadingWebErrorTimeOut && clearTimeout(this._loadingWebErrorTimeOut), this._loadingWebErrorTimeOut = setTimeout((() => {
                this.webLoadError()
            }), this.TIME_WEB_LOAD_ERROR)
        }
        onDisable() {
            if (this.isInit)
                if (0 == I.roomManager.getCurrentMiniGameID() && this.resetToPortrait(), this._requestToCleanupWebView) this.destroyWebView();
                else {
                    const e = {
                        needClear: !1,
                        setWebViewActive: !0,
                        useRealBlankUrl: !1,
                        needMoveWebViewOut: !0
                    };
                    this.resetView(e);
                    const t = this._state === F.WEB_CASIO_READY;
                    this.destroyWebView({
                        destroyLocalServer: !1,
                        clearWebView: !0,
                        setBlankUrl: !1
                    }), this.clearDestroyCasinoTimeOut(), I.appConfig.getGeneralConfig().multiWindowEnabled && t || (this._destroyCasinoTimeOut = setTimeout((() => {
                        this.setDebugText("############## ++++++ pump ========"), this._needReCreateWebView = !0, this.destroyWebView()
                    }), this.TIME_WAIT_TO_DESTROY_FROM_CLOSE_CASINO_LOBBY))
                }
        }
        destroyWebView(e = {
            destroyLocalServer: !0,
            clearWebView: !0,
            setBlankUrl: !0
        }) {
            const {
                destroyLocalServer: t,
                clearWebView: i,
                setBlankUrl: s
            } = e;
            if (i) {
                this.resetURL(!1);
                const e = {
                    needClear: s,
                    setWebViewActive: !0,
                    useRealBlankUrl: !1,
                    needMoveWebViewOut: !0
                };
                this.resetView(e), this.setState(F.NONE), this._isLoadedLobby = !1, this.unscheduleAllCallbacks(), this._endLoadingTimeOut && (clearTimeout(this._endLoadingTimeOut), this._endLoadingTimeOut = null), this._loadingWebErrorTimeOut && (clearTimeout(this._loadingWebErrorTimeOut), this._loadingWebErrorTimeOut = null), this._recreateWebViewTimeOut && (clearTimeout(this._recreateWebViewTimeOut), this._recreateWebViewTimeOut = null), this._backToCasinoLobbyTimeOut && (clearTimeout(this._backToCasinoLobbyTimeOut), this._backToCasinoLobbyTimeOut = null), this.clearDestroyCasinoTimeOut(), c(this.webView, !0) && (p.isNative && (this.webView.setOnJSCallback((() => this.emptyCallback)), this.isSupportOpenGameLocalHost() && this.webViewGamePlay.setOnJSCallback((() => this.emptyCallback))), I.MessageCenter.unregister(I.Enum.MessageCenterAction.onDisablePopUpMsg, this), I.MessageCenter.unregister(I.Enum.MessageCenterAction.onOpenPopUpMsg, this), I.MessageCenter.unregister("on_webCcjsCallback", this.node), I.MessageCenter.unregister("HideWebview_ShowWindows", this.node), I.MessageCenter.unregister(I.Enum.MessageCenterAction.onGetNewGeoToken, this), I.MessageCenter.unregister("NativeDeviceOrientationDidChangedCallback", this), I.MessageCenter.unregister("CasinoDeepLinkAction", this), I.MessageCenter.unregister("UpdateMiniGameCoin", this), I.MessageCenter.unregister("UpdateMiniGameId", this), I.MessageCenter.unregister("UpdateExchangeRate", this), I.MessageCenter.unregister("update_gold", this), I.MessageCenter.unregister("onAdaptedScreen", this), I.MessageCenter.unregister("setActiveWebViewByPos", this), I.MessageCenter.unregister(I.config.CHANGE_LANGUAGE, this), I.MessageCenter.unregister(I.Enum.MessageCenterAction.OnLoginSuccess, this), I.MessageCenter.unregister("logout_webview", this), I.MessageCenter.unregister(I.Enum.MessageCenterAction.OnUpdateServerConfigSuccess, this), this.webView.node.off("loaded"), this.webView.node.off("loading"), this.webView.node.off("error"), L.off("themechange", this.updateThemeData, this)), c(this.webViewGamePlay, !0) && this.isSupportOpenGameLocalHost() && this.webViewGamePlay.node.off("loaded")
            }
            t && (this._shouldStartEmbedServer = !0, I.embeddedServer.stopEmbedGame())
        }
        setCasinoToPlayMode(e) {
            I.appConfig.isLandscapeLayout || (this.setState(e ? F.CASINO_GAMEPLAY : F.CASINO_LOBBY), this.updateWebViewContent())
        }
        resetCasinoLobbyToDefault() {
            var e;
            let t = null == (e = this.web) ? void 0 : e.getComponent(g);
            t ? (t.isAlignTop = !0, t.isAlignBottom = !0, t.isAlignLeft = !0, t.isAlignRight = !0, t.top = 0, t.left = 0, t.right = 0, t.bottom = 0) : u("[Casino View Prefab] wrong structure")
        }
        disableCasinoLobbyWidget() {
            var e;
            let t = null == (e = this.web) ? void 0 : e.getComponent(g);
            t ? (t.isAlignTop = !1, t.isAlignBottom = !1, t.isAlignLeft = !1, t.isAlignRight = !1, t.top = 0, t.left = 0, t.right = 0, t.bottom = 0) : u("[Casino View Prefab] wrong structure")
        }
        resetToPortrait(e = !0, t = !0) {
            var i;
            if (I.appConfig.isLandscapeLayout) return;
            if (this.bgWebViewHallScene && (this.bgWebViewHallScene.active = !1), !(null == (i = this._webViewPanel) ? void 0 : i.getComponent(g))) return void u("[Casino View Prefab] wrong structure");
            var s;
            (I.native.setAutoRotate(!1), t) && (this.resetCasinoLobbyToDefault(), this.casinoGameConfig.embed && this.isIOSNative() && (null == (s = this.webView) || s.setBackgroundTransparent(!1), this.bringGameViewToFront(!0)));
            this.adjustWebviewWidget();
            this.updateRotateStateTimeout({
                rotateMode: 1,
                forceRotate: !0,
                isNeedChangeNative: !0,
                needUpdateCasinoLobby: !1
            }), e && (this.casinoGameConfig = {
                embed: !1,
                orientation: D.auto,
                position: k.left,
                gameLoaded: !1,
                isOpenMenu: !1,
                isShowingPopup: !1
            })
        }
        bringGameViewToFront(e) {
            this.isIOSNative() && this.webView && this.webViewGamePlay && !I.appConfig.isLandscapeLayout && (e ? this.webViewGamePlay.bringWebViewToFront() : this.webView.bringWebViewToFront())
        }
        casinoLobbySetFull(e) {
            var t, i;
            if (!this.web || I.appConfig.isLandscapeLayout) return;
            let s = null == (t = this.web) ? void 0 : t.getComponent(g);
            if (!s) return void u("[Casino View Prefab] wrong structure");
            if (this.resetCasinoLobbyToDefault(), e) return void s.updateAlignment();
            const o = e => {
                s.node.getComponent(v).setContentSize(100, 400), e ? s.left = r : s.right = r, h = (n - 1200) / 2, s.node.setPosition(s.node.getPosition().x, h, s.node.getPosition().z)
            };
            let n = null == (i = s.node.parent) ? void 0 : i.getComponent(v).height;
            const a = I.native.isScreenLandscape();
            let r = I.config.IS_IPHONEX_SCREEN ? I.config.FULLSCREEN_OFFSETY : 0;
            a || (r = 0);
            let h = 0;
            switch (this.casinoGameConfig.position) {
                case k.left:
                    this.disableCasinoLobbyWidget(), s.isAlignLeft = !0, o(!0);
                    break;
                case k.right:
                    this.disableCasinoLobbyWidget(), s.isAlignRight = !0, o(!1);
                    break;
                case k.top:
                    s.isAlignBottom = !1, this.web.getComponent(v).height = 100;
                    break;
                case k.bottom:
                    s.isAlignTop = !1, this.web.getComponent(v).height = 100
            }
            s.updateAlignment()
        }
        updateWebViewChangeOrientation(e) {
            var t;
            if (!this.webView || I.appConfig.isLandscapeLayout) return;
            if (!p.isNative || p.os !== p.OS.ANDROID) return;
            let i = null == (t = this._webViewPanel) ? void 0 : t.getComponent(g);
            if (i) {
                if (this._state == F.CASINO_GAMEPLAY) {
                    let t = 0;
                    this.casinoGameConfig.orientation !== D.portrait && this.casinoGameConfig.orientation !== D.auto || 1 === e && (t = this.safeArea.y), i.top = t, i.bottom = 0, i.left = 0, i.right = 0
                }
            } else u("[Casino View Prefab] wrong structure")
        }
        updateWebViewContent() {
            var e;
            if (!this.webView || I.appConfig.isLandscapeLayout) return;
            let t = null == (e = this._webViewPanel) ? void 0 : e.getComponent(g);
            if (t) {
                if (this._state == F.CASINO_GAMEPLAY) {
                    switch (this.bgWebViewHallScene && (this.bgWebViewHallScene.active = !0), this.setActiveTopPanel(!1), this.casinoGameConfig.orientation) {
                        case D.auto:
                            I.native.setAutoRotate(!0), m.on("orientation-change", this.onScreenOrientationChange, this);
                            break;
                        case D.portrait:
                            I.native.setAutoRotate(!1);
                            break;
                        case D.landscape:
                            I.native.setAutoRotate(!1);
                            const e = {
                                rotateMode: 2,
                                forceRotate: !0,
                                isNeedChangeNative: !0,
                                needUpdateCasinoLobby: !0
                            };
                            this.updateRotateStateTimeout(e);
                            break;
                        default:
                            I.native.setAutoRotate(!0), m.on("orientation-change", this.onScreenOrientationChange, this)
                    }
                    let e = 0;
                    !p.isNative || p.os != p.OS.ANDROID || this.casinoGameConfig.orientation !== D.portrait && this.casinoGameConfig.orientation !== D.auto || (e = this.safeArea.y), t.top = e, t.bottom = 0, t.left = 0, t.right = 0;
                    let i = !1;
                    this.casinoGameConfig.embed && this.casinoGameConfig.gameLoaded && this.isIOSNative() && (this.bringGameViewToFront(!1), this.webView.setBackgroundTransparent(!0), this.UpdateWidgetEmbedded({
                        delayTime: .5
                    }), i = !0), i || this.updateWidget()
                } else if (this._state == F.CASINO_LOBBY) {
                    var i;
                    if (m.off("orientation-change", this.onScreenOrientationChange, this), this.resetToPortrait(), this.hideWebViewGamePlay(), this.setActiveTopPanel(!0), !I.appConfig.isLandscapeLayout) null == (i = $.instance) || i.moveHeaderToLeft();
                    this.scheduleOnce((() => {
                        let e = {
                            name: H.ORIENTATION_LOCKED,
                            data: null
                        };
                        this.sendEventToWebView(e)
                    }), 3)
                }
            } else u("[Casino View Prefab] wrong structure")
        }
        UpdateWidgetEmbedded(e) {
            var t;
            const {
                delayTime: i
            } = e;
            let s = null == (t = this.webViewContentGamePlayNode) ? void 0 : t.getComponent(g);
            s && (s.top = 0, s.bottom = 0, this.scheduleOnce((() => {
                if (I.tools.isAnyPopupVisible()) return;
                const e = !(!this.casinoGameConfig.isOpenMenu || !this.casinoGameConfig.gameLoaded);
                this.casinoLobbySetFull(e), this.updateWidget()
            }), i))
        }
        getCasinoLobbyURL() {
            return I.config.getStringData(this.URL_KEY, !0)
        }
        resetURL(e) {
            this.webView.url = e ? "https://www.blank.org" : "about:blank"
        }
        resetView(e) {
            var t;
            this.webView && e.needClear && this.resetURL(e.useRealBlankUrl), this.setActiveWebViewByPos(!e.needMoveWebViewOut), this.setActiveWebView(e.setWebViewActive), null == (t = this.base64Image) || t.cleanImage()
        }
        isActive() {
            return 1 == this.isWebviewActive
        }
        setActive(e, t) {
            var i, s;
            if (null != (i = this.node) && i.active) {
                if (!t && this.isWebviewActive == e) return
            } else this.node.active = !0;
            if (null == (s = this.node) || s.setPosition(e ? this._webViewStartPos : this._webViewMovePos), this._allowScreenshot = e, this.isWebviewActive = e, this.updateCasinoNodeWidget(e), e && this.hadWebLoadErrorWhileInactive && (this.hadWebLoadErrorWhileInactive = !1, this.webLoadError()), e && !I.appConfig.isLandscapeLayout) {
                this.webView.node.getComponent(g).enabled = !0
            }
            e && (this.processPopupQueue(), I.tools.isAnyPopupVisible() && this.takeScreenShot())
        }
        updateCasinoNodeWidget(e) {
            var t;
            let i = null == (t = this.node) ? void 0 : t.getComponent(g);
            if (!c(i)) return;
            let s = !i.enabled;
            i.enabled = !0, e ? (i.left = 0, i.right = 0) : (i.left = -this._webViewMovePos.x, i.right = this._webViewMovePos.y), i.updateAlignment(), s && (i.enabled = !1)
        }
        setActiveWebViewByPos(e, t = !1) {
            if (!I.tools.isAnyPopupVisible() && this.lobbyLoadComplete || (e = !1), c(this.web, !0)) {
                const i = this.web.getComponent(g);
                t && null != i && (i.isAlignTop = i.isAlignBottom = i.isAlignLeft = i.isAlignRight = e), this.web.setPosition(e ? this._webViewStartPos : this._webViewMovePos), t && null != i && e && i.updateAlignment()
            }
            if (c(this.webViewGamePlay, !0) && this.isSupportOpenGameLocalHost()) {
                var i;
                const s = this.webViewGamePlay.getComponent(g);
                t && null != s && (s.isAlignTop = s.isAlignBottom = s.isAlignLeft = s.isAlignRight = e), null == (i = this.webViewGamePlay.node) || i.setPosition(e ? this._webViewStartPos : this._webViewMovePos), t && null != s && e && s.updateAlignment()
            }
            var s;
            e && (null == (s = this.base64Image) || s.cleanImage())
        }
        onAdaptedScreen(e) {
            this.hideWebViewShowWindow(), e && this.adjustWebviewWidget()
        }
        hideWebViewShowWindow(e) {
            const t = !(e = e && c(this.node, !1) && this.isActive() && !I.tools.isAnyPopupVisible());
            this.onPopupShow(t, t ? 1 : 0, !1)
        }
        setActiveWebView(e) {
            c(this.webView, !0) && (this.webView.node.active = e)
        }
        onPopupShow(e, t = 0, i = !0) {
            this.node.active && (e && 1 === t && I.tools.isAnyPopupVisible() ? (I.appConfig.isLandscapeLayout || this.resetToPortrait(!1, !0), i && this.takeScreenShot(), this.setActiveWebViewByPos(!1)) : e || 0 != t || I.tools.isAnyPopupVisible() || (this.setActiveWebViewByPos(!0), this.updateWebViewContent()))
        }
        getFunctionName(e) {
            var t;
            return null == (t = B.METHOD_MAP[e]) ? void 0 : t.method
        }
        sendEventToWebView(e) {
            if (c(this.webView, !0))
                if (this._isLoadedLobby) {
                    if (p.isBrowser) console.log(`[Casino Cocos ... send to web view ... by BROWSER ....] + ${null==e?void 0:e.name}`), this.webView.nativeWebView.contentWindow.postMessage(e, "*");
                    else if (p.isNative) {
                        console.log(`[Casino Cocos ... send to web view ... by NATIVE ....] + event : ${null==e?void 0:e.name}`);
                        let t = JSON.stringify(e),
                            i = this.getFunctionName(e.name);
                        if (i) {
                            const e = `window.${i} (${t})`,
                                s = {
                                    spanName: f.CasinoLogInfo,
                                    eventName: "evaluateJS",
                                    attribute: {
                                        data: e
                                    }
                                };
                            I.casinoTracing.logInfo(s), this.webView.evaluateJS(e)
                        }
                    }
                } else console.error("[CASINO === sendEventToWebView] try to send event from cocos to web view but casino lobby is not loaded yet: " + JSON.stringify(e));
            else console.error(`[sendEventToWebView] try to send event but webView not valid ... ${Error().stack}`)
        }
        getEventFromWebView(t) {
            if (t.indexOf("casino://MESSAGE_CHECK_NON_RESPONSE_WEB_VIEW") < 0 && console.log(`data get from Webview: ${t}`), t.indexOf(`${this.SCHEME_CASINO}://${H.GET_SCREENSHOT}//`) >= 0) this.updateScreenShot(t);
            else if (t.indexOf(`${this.SCHEME_CASINO}://`) >= 0) {
                this._lastTimeGetResponseFromWebView = Date.now();
                let i = t.replace(`${this.SCHEME_CASINO}://`, ""),
                    s = i,
                    o = i.split("..");
                if (o && o.length > 1 && (s = o[0], o.shift()), s != this.MESSAGE_CHECK_NON_RESPONSE_WEB_VIEW) {
                    const e = {
                        spanName: f.CasinoLogInfo,
                        eventName: "getEventFromWebView",
                        attribute: {
                            name: i
                        },
                        spandCode: 1
                    };
                    I.casinoTracing.logInfo(e)
                }
                switch (s) {
                    case H.CASINO_READY:
                        this.setDebugText("Get Event CASINO_READY ....."), this._isGotMessageCasinoReady = !0, this._doFinishLoad(), this.setState(F.WEB_CASIO_READY), e.gameCode ? I.embeddedServer.isEnableEmbeddedServer() ? this.scheduleOnce((() => {
                            this.sendEventInit(e.gameCode)
                        }), 3) : this.sendEventInit(e.gameCode) : e.gameGroup ? this.sendEventInit(null, e.gameGroup) : this.sendEventInit();
                        break;
                    case H.OPEN_POKERFLIP:
                        this.OpenCowboyMiniGameList();
                        break;
                    case H.OPEN_VIDEOCOWBOY:
                        this.OpenVideoCowboyMiniGameList();
                        break;
                    case H.OPEN_CARIBBEAN_STUD:
                        z.GoToCaribBeanStud();
                        break;
                    case H.OPEN_CARIBBEAN_HOLDEM:
                        z.GoToCaribBeanHoldem();
                        break;
                    case H.INSUFFICIENT_FUNDS_DIALOG_VISIBILITY:
                        this.casinoGameConfig.embed && (this.casinoGameConfig.isShowingPopup = !0, this.casinoLobbySetFull(!0), this.updateWidget());
                        break;
                    case H.INSUFFICIENT_FUNDS:
                        this.RedirectToCashierPage();
                        break;
                    case H.OPEN_CASINO_GAME:
                        if (I.dataHandler.getUserData().showNDRPVerificationReviewPopup()) return;
                        let t = o[0] || "";
                        if (t = decodeURIComponent(t), t = I.tryParseJSON(t) || {}, I.appConfig.isLandscapeLayout && p.isBrowser && t.url) {
                            const e = t.url,
                                i = `http://localhost:${window.location.port}?open-in-new-window=1&gameURL=${encodeURIComponent(e)}`;
                            window.open(i, "_blank", "noopener,noreferrer,width=1024,height=768,resizable=yes")
                        }
                        null != t.embed && (this.casinoGameConfig.embed = !!t.embed), null != t.orientation && (this.casinoGameConfig.orientation = t.orientation), null != t.position && (this.casinoGameConfig.position = t.position), this.sendGeoComplyToken(), this.setCasinoToPlayMode(!0), this.sendUserBalances(), this.sendMiniGameCoin();
                        break;
                    case H.OPEN_CASINO_LOBBY:
                        this._backToCasinoLobbyTimeOut && (clearTimeout(this._backToCasinoLobbyTimeOut), this._backToCasinoLobbyTimeOut = null), I.appConfig.isLandscapeLayout || I.miniGamePopupManager.processClose(), this.setCasinoToPlayMode(!1);
                        break;
                    case H.OPEN_EXTERNAL_LINK:
                        I.AudioMgr.playButtonSound("button_click.mp3");
                        let i = o[0] || "";
                        i = decodeURIComponent(i), console.log(`@@@@@@ Open External link ..... ${i}`), i = this.getFormatUrl(i), I.native.openUrl(i);
                        break;
                    case H.OPEN_CASINO_GAME_FAILED:
                        let s = o[0] || "";
                        if (s = decodeURIComponent(s), console.log(s), s = I.tryParseJSON(s) || {}, s.data) {
                            s.gameCode && (this._gameCodeGeoComplyRetry = s.gameCode);
                            const e = {
                                    ErrorType: "FailedToOpenCasinoGame",
                                    ErrorCode: s.status ?? "",
                                    ErrorDetails: JSON.stringify(s)
                                },
                                t = () => {
                                    this.retryOpenCasinoGame()
                                },
                                i = () => {
                                    var i;
                                    null == (i = I.geoComplyManager) || i.serverErrorHandler(s.data, null, t, null, e)
                                };
                            this.scheduleOnce(i, 1)
                        } else s.status && (500 == +s.status ? this.onServerError() : 502 == +s.status ? this.onServerError(!0) : 503 == +s.status ? this.onServerError(!1, !0) : +s.status >= 400 && +s.status <= 500 && this.showPopup({
                            txt: "ErrorUnknown",
                            msgType: I.Enum.ToastType.ToastTypeMalformedResponse
                        }));
                        break;
                    case H.OPEN_LOGIN_SCREEN: {
                        I.AudioMgr.playButtonSound("button_click.mp3"), console.log("@@@@@@ it's a guest user so show popup to inform them to login ");
                        const e = I.tryParseJSON(decodeURIComponent(o[0] || "")) || {};
                        e.miniGameId && (I.authenticator.autoShowMiniGamePopup = e.miniGameId), this.showPopupRetrictGuest();
                        break
                    }
                    case H.OPEN_CASINO_GAME_LINK:
                        if (console.log("Loading Casino Game Link"), !I.dataHandler.getUserData().showNDRPVerificationReviewPopup()) {
                            const e = o[0] || "";
                            this.gameUrl = decodeURIComponent(e), this.showWebViewGamePlay(this.gameUrl)
                        }
                        break;
                    case H.FORWARD_MESSAGE:
                        let n = o[0] || "";
                        n = decodeURIComponent(n), console.log(`@@@@@@ will foward message : ${n}`);
                        const a = this.convertForwardGameMessage(n);
                        a && this.updateEmbedGameEvent(a);
                        break;
                    case H.SYNC_RECENT_MSG:
                        this.syncRecentGame(), p.isNative && this.showWebViewGamePlayByPos(), this.isIOSNative() && this.bringGameViewToFront(!0), this.scheduleOnce((() => {
                            this.updateEmbedGameMenu(), this.UpdateWidgetEmbedded({
                                delayTime: 0
                            })
                        }), 2);
                        break;
                    case H.OPEN_MENU:
                        this.embedOpenMenu();
                        break;
                    case H.CLOSE_MENU:
                        this.embedCloseMenu();
                        break;
                    case H.GAME_NOT_FOUND:
                        let r = o[0] || "";
                        r = decodeURIComponent(r), r = I.tryParseJSON(r) || {};
                        let h = r.gameCode ? r.gameCode : "";
                        const l = {
                            spanName: f.CasinoLogInfo,
                            eventName: "openGameNotFound",
                            attribute: {
                                gameCode: h
                            },
                            spandCode: 2
                        };
                        I.casinoTracing.logInfo(l);
                        let d = {
                            txt: "Casino_Game_NotFound",
                            iconType: P.Unreachable,
                            hideOkayBtn: !1
                        };
                        this.showPopup(d);
                        break;
                    case H.OPEN_POKERMASTER:
                        this.OpenPokerMasterMiniGameList();
                        break;
                    case H.CASINO_LOAD_COMPLETE:
                        if (this.setDebugText("Get Event CASINO_LOAD_COMPLETE ....."), !0 === this.lobbyLoadComplete) break;
                        this.lobbyLoadComplete = !0, this.endLoadingWebView(), this._currentProgress = 0;
                        break;
                    case H.OPEN_POKER_LOBBY:
                        this.openPokerLobby()
                }
            }
        }
        openPokerLobby() {
            I.MessageCenter.send("switchSceneToPokerLobby")
        }
        sendMiniGameCoin() {
            if (!c(this.webView, !0) && !I.appConfig.getGeneralConfig().multiWindowEnabled) return;
            let e = {
                    miniGameCoin: I.dataHandler.getUserData().minigame_coin,
                    gameId: I.dataHandler.getUserData().minigameId
                },
                t = {
                    name: H.SET_MINI_GAME_COIN,
                    data: e
                };
            this.sendEventToWebView(t)
        }
        sendUserBalances() {
            if (!c(this.webView, !0)) return;
            let e = {
                    userBalance: I.dataHandler.getUserData().total_amount / 100,
                    casinoCoin: I.dataHandler.getUserData().casino_coin / 100,
                    exchangeRate: I.appConfig.getLobbyConfig().casino.showMXNInfo ? I.currencyManager.getRate(W.USD, W.MXN) : 1
                },
                t = {
                    name: H.SET_USER_BALANCES,
                    data: e
                };
            this.sendEventToWebView(t)
        }
        retryOpenCasinoGame() {
            var e, t;
            this._gameCodeGeoComplyRetry && (null != (e = I.geoComplyManager) && e.isGeoTokenRequired() && (null == (t = I.geoComplyManager) || t.requestValidToken(((e = "") => {
                if (!e) return;
                let t = {
                        geoComplyToken: e
                    },
                    i = {
                        name: H.GEO_COMPLY_TOKEN,
                        data: t
                    };
                this.sendEventToWebView(i), this.scheduleOnce((() => this.openPreviousGame()), .5)
            }), (() => {}))))
        }
        openPreviousGame() {
            var e;
            this.requestOpenCasinoGame(this._gameCodeGeoComplyRetry, null == (e = I.geoComplyManager) ? void 0 : e.getGeoToken()), this._gameCodeGeoComplyRetry = ""
        }
        requestOpenCasinoGame(e, t) {
            const i = {
                gameCode: e,
                geoComplyToken: t
            };
            let s = {
                name: H.LAUNCH_CASINO_GAME,
                data: i
            };
            this.sendEventToWebView(s)
        }
        updateEmbedGameMenu() {
            this.isIOSNative() && (this.bringGameViewToFront(!1), this.webView.setBackgroundTransparent(!0)), this.casinoGameConfig.gameLoaded = !0
        }
        embedOpenMenu() {
            this.casinoGameConfig.isOpenMenu = !0, this.casinoLobbySetFull(!0), this.updateWidget()
        }
        embedCloseMenu() {
            this.casinoGameConfig.isOpenMenu = !1, this.casinoLobbySetFull(this.casinoGameConfig.isShowingPopup), this.updateWidget()
        }
        convertForwardGameMessage(e) {
            const t = e.length;
            let i = e.substring(1, t - 1);
            return i = i.replace(/\\/g, ""), console.log(i), I.tryParseJSON(i) || {}
        }
        onServerError(e = !1, t = !1) {
            let i = {
                title: "Server_Unreachable_Title",
                subtitle: "Server_Unreachable_SubTitle",
                txt: t ? "Server_Unreachable" : e ? "Something_Went_Wrong" : "Hotupdate_Get_URL_Unreachable",
                iconType: P.Unreachable,
                hideOkayBtn: !0,
                isShowGameLogoGroup: !0
            };
            this.showPopup(i)
        }
        sendGeoComplyTokenCb(e) {
            this.sendGeoComplyToken(e)
        }
        sendGeoComplyToken(e) {
            var t, i;
            if (!I.appConfig.getSecurityConfig().useGeoComply) return;
            let s = e || (null == (t = I.geoComplyManager) ? void 0 : t.getGeoToken());
            null != s || null != (i = I.geoComplyManager) && i.bypassGeoComply || (s = I.getEmptyGUID());
            let o = {
                    geoComplyToken: s
                },
                n = {
                    name: H.GEO_COMPLY_TOKEN,
                    data: o
                };
            this.sendEventToWebView(n)
        }
        updateScreenShot(e) {
            var t;
            const i = e.replace(`${this.SCHEME_CASINO}://${H.GET_SCREENSHOT}//`, "");
            let s = "";
            if (i.includes(".png")) {
                const e = /.*_([^_]+?)\.png$/;
                let t = i.match(e);
                if (t && t[1] && (s = t[1], s !== this.webView.node.uuid)) return
            }
            null == (t = this.base64Image) || t.setImage(i, {
                sizeMode: V.SizeMode.CUSTOM
            })
        }
        getFormatUrl(e) {
            let t = e;
            return -1 != e.search("http//") ? t = e.replace("http//", "http://") : -1 != e.search("https//") && (t = e.replace("https//", "https://")), t
        }
        requestToCasinoLobby() {
            this.hideWebViewGamePlay(), this.sendEventReqBackCasinoLobby()
        }
        RedirectToCashierPage() {
            this.requestToCasinoLobby(), setTimeout((() => {
                I.MessageCenter.send("switchSceneToEarnView", G.DepositScene), I.appConfig.getGeneralConfig().multiWindowEnabled && (I.focusWindow(1), M.showMainWindow())
            }), 0)
        }
        OpenCowboyMiniGameList() {
            I.MessageCenter.send(I.Enum.MessageCenterAction.OpenListMiniGamePopup, {
                gameId: I.Enum.GameId.CowBoy
            })
        }
        OpenPokerMasterMiniGameList() {
            I.MessageCenter.send(I.Enum.MessageCenterAction.OpenListMiniGamePopup, {
                gameId: I.Enum.GameId.PokerMaster
            })
        }
        OpenVideoCowboyMiniGameList() {
            I.MessageCenter.send(I.Enum.MessageCenterAction.OpenListMiniGamePopup, {
                gameId: I.Enum.GameId.VideoCowboy
            })
        }
        emptyCallback() {}
        on_webCcjsCallback(e) {
            if (!e || "string" != typeof e) return E(`data send from webview should be string event is: ${e}`), e = e || {}, void this.updateEmbedGameEvent(e);
            this.getEventFromWebView(e)
        }
        syncRecentGame() {
            const e = {
                name: H.SYNC_RECENT_GAMES,
                data: null
            };
            let t = {
                name: H.SYNC_RECENT_GAMES,
                data: e
            };
            this.sendEventToWebView(t)
        }
        updateEmbedGameEvent(e) {
            if (e && this.isSupportOpenGameLocalHost() && null != e.wpgaction && "" != e.wpgaction) {
                switch (e.wpgaction) {
                    case x.ERROR_OUT_OF_MONEY:
                    case x.ERROR_OUT_OF_MONEY_PARENT:
                        this.checkAndHideGameView();
                        break;
                    case x.CASHIER:
                    case x.CASHIER_PARENT:
                        this.RedirectToCashierPage();
                        break;
                    case x.LOAD_START:
                        this.syncRecentGame()
                }
                const t = {
                    name: H.SEND_FORWARD_MESSAGE,
                    data: e
                };
                this.sendEventToWebView(p.isBrowser ? e : t)
            }
        }
        updateThemeData() {
            let e = {
                    value: I.appConfig.getDesignConfig().webViewThemeUse
                },
                t = {
                    name: H.APP_THEME,
                    data: e
                };
            this.sendEventToWebView(t)
        }
        checkAndHideGameView() {
            var e;
            c(this.webViewGamePlay, !0) && this.isSupportOpenGameLocalHost() && (null == (e = this.webViewGamePlay.node) || e.setPosition(this._webViewMovePos))
        }
        casinoPageCallbacks(e) {
            if (!e || "string" != typeof e) return E("data send from webview should be string"), e = e || {}, void this.updateEmbedGameEvent(e);
            this.getEventFromWebView(e)
        }
        onWebFinishLoad(e) {
            this.setDebugText("----webView---loaded---finish!!---- URL : " + (null == e ? void 0 : e.url)), (null == e ? void 0 : e.url) == this.getCasinoLobbyURL() ? this._doFinishLoad() : "https://www.blank.org" !== (null == e ? void 0 : e.url) && "about:blank" !== (null == e ? void 0 : e.url) || this._isSilentLoadCasinoLobby && (I.server.nextProxy(this.URL_KEY), this.webView.url = this.getCasinoLobbyURL(), this._isSilentLoadCasinoLobby = !1)
        }
        _doFinishLoad() {
            if (this._isLoadedLobby) return;
            this.setState(F.LOADED), this.setDebugText("Finish Loaded web casino ........");
            const e = () => {
                    this._needReCreateWebView = !1, this._isLoadedLobby = !0, this._loadingWebErrorTimeOut && (clearTimeout(this._loadingWebErrorTimeOut), this._loadingWebErrorTimeOut = null), this._endLoadingTimeOut && clearTimeout(this._endLoadingTimeOut)
                },
                t = t => {
                    (e => {
                        const t = {
                            spanName: f.CasinoLogInfo,
                            eventName: "LoadSuccess",
                            attribute: {
                                detail: `loaded after retry ${e} time`
                            },
                            spandCode: 1
                        };
                        I.casinoTracing.logInfo(t)
                    })(t), e(), this.endLoadingWebView()
                },
                i = e => {
                    this._endLoadingTimeOut && clearTimeout(this._endLoadingTimeOut), this._endLoadingTimeOut = setTimeout((() => {
                        this._isGotMessageCasinoReady ? t(e) : e < 5 ? i(e + 1) : (this.errorCanNotRecivedCasinoReady(), this.silentLoadCasinoLobby())
                    }), 2e3)
                };
            this._isGotMessageCasinoReady ? t(0) : i(0)
        }
        silentLoadCasinoLobby() {
            this.setDebugText("Silent Load Casino Lobby"), c(this.webView, !0) && this._silentLoadCount < this.MAX_SILENT_LOADS ? (this._isSilentLoadCasinoLobby = !0, this.resetURL(!1), this._silentLoadCount++) : (this.setDebugText("Max Silent Loads Reached"), this.webLoadError())
        }
        errorCanNotRecivedCasinoReady() {
            const e = {
                spanName: f.CasinoLogInfo,
                eventName: "LoadPageError",
                attribute: {
                    detail: "loaded page but can not get event Casino Ready"
                },
                spandCode: 2
            };
            I.casinoTracing.logInfo(e)
        }
        onWebLoading(e) {
            this.setDebugText("----webView---loading----URL : " + (null == e ? void 0 : e._url)), this.setState(F.LOADING), this.loadingWebView()
        }
        onWebError(e) {
            this.setDebugText("----webView---load---error----" + (null == e ? void 0 : e.url)), this.scheduleOnce((() => {
                !1 === this.lobbyLoadComplete && (null == e ? void 0 : e.url) == this.getCasinoLobbyURL() && this.webLoadError(!1)
            }), 5)
        }
        setDebugText(e) {
            console.log(`********** ${e}`)
        }
        static StartCasinoDeepLinkAction(t, i) {
            e.gameCode = t, e.gameGroup = i, I.MessageCenter.send("CasinoDeepLinkAction")
        }
        checkAndDoCasioDeepLinkAction() {
            this._isGotMessageCasinoReady && this.sendEventInit(e.gameCode, e.gameGroup)
        }
        sendEventInit(t, i) {
            this.setDebugText("Init Data ......");
            let s = B.getInitData();
            t ? s.openGame = t : i && (s.openGroup = i), e.gameCode = "", e.gameGroup = "", s.isIpad = this.isIPad(), s.guestMode = I.dataHandler.getUserData().isTouristUser;
            let o = {
                name: H.INITIAL_DATA,
                data: s
            };
            switch (p.os) {
                case p.OS.IOS:
                    s.platformType = U.iOS;
                    break;
                case p.OS.ANDROID:
                    s.platformType = U.android;
                    break;
                case p.OS.WINDOWS:
                    s.platformType = U.windows;
                    break;
                case p.OS.OSX:
                    s.platformType = U.macOS
            }
            I.appConfig.isEnableEmbedLogic ? this.isFakeiOS && (s.platformType = U.iOS) : s.platformType = U.android, this.sendEventToWebView(o);
            const n = {
                spanName: f.CasinoLogInfo,
                eventName: "SendInitData",
                attribute: {
                    datasend: JSON.stringify(o)
                }
            };
            I.casinoTracing.logInfo(n)
        }
        sendEventReqBackCasinoLobby() {
            if (I.appConfig.isLandscapeLayout) return;
            let e = {
                name: H.REQUEST_BACK_CASINO_LOBBY,
                data: null
            };
            this.sendEventToWebView(e), this.setCasinoToPlayMode(!1), this._backToCasinoLobbyTimeOut && (clearTimeout(this._backToCasinoLobbyTimeOut), this._backToCasinoLobbyTimeOut = null);
            this._backToCasinoLobbyTimeOut = setTimeout((() => {
                this.onErrorRetryBtn()
            }), 2e3)
        }
        setState(e) {
            if (this._state === e) return;
            this._preState = this._state, this._state = e;
            const t = {
                spanName: f.CasinoLogInfo,
                eventName: "StateInfo",
                attribute: {
                    prevState: this._preState,
                    state: this._state
                }
            };
            I.casinoTracing.logInfo(t)
        }
        checkUnreponsiveWebView() {
            if (c(this.node, !0) && c(!this.webView, !0) && this._isGotMessageCasinoReady)
                if (this.isActive())
                    if (this._isAppFreeze) this._lastTimeGetResponseFromWebView = Date.now(), this._isAppFreeze = !1;
                    else {
                        const e = Date.now();
                        if (e - this._lastTimeGetResponseFromWebView > 3e3) {
                            const t = {
                                spanName: f.CasinoLogInfo,
                                eventName: "WebViewUnresponsive",
                                attribute: {
                                    lastTimeGetResponse: this._lastTimeGetResponseFromWebView,
                                    now: e
                                }
                            };
                            return I.casinoTracing.logInfo(t), this.node.active = !1, this.setActive(!1, !0), this._needReCreateWebView = !0, void setTimeout((() => this.setActive(!0, !0)), 300)
                        }
                        const t = `${this.SCHEME_CASINO}://${this.MESSAGE_CHECK_NON_RESPONSE_WEB_VIEW}`;
                        p.isNative ? this.webView.evaluateJS(`\n                    window.parent.postMessage ("${t}", "*");\n                    document.location = "${t}";\n                `) : this.webView._impl.webview.contentWindow.parent.postMessage(t, "*")
                    }
            else this._lastTimeGetResponseFromWebView = Date.now()
        }
        takeScreenShot() {
            if (!(I.appConfig.isLandscapeLayout && this._allowScreenshot && I.tools.isAbleTakeScreenShot() && this._isLoadedLobby)) return;
            const e = `${this.SCHEME_CASINO}://${H.TAKE_SCREENSHOT}_${this.webView.node.uuid}//0.5`;
            var t;
            p.isNative ? null == (t = this.webView) || null == t.evaluateJS || t.evaluateJS(`\n                window.parent.postMessage ("${e}", "*");\n                document.location = "${e}";\n            `) : (console.log("####### [Browser] is not support takeScreenShot"), this.updateScreenShot(R.fakeImgBase64))
        }
        isIPad() {
            let e = !1;
            if (I.native.isWideScreen())
                if (p.os == p.OS.ANDROID || p.os == p.OS.IOS) {
                    let t = S.getVisibleSize();
                    t.width / t.height <= 2048 / 1536 && (e = !0)
                } else e = !0;
            return e
        }
        showPopupRetrictGuest() {
            I.dataHandler.getUserData().showTouristLimited("Casino_Games_tourist_msg")
        }
        adjustWebviewWidget() {
            var e, t, i;
            if (I.appConfig.isLandscapeLayout) return;
            const s = null == (e = this._webViewPanel) ? void 0 : e.getComponent(g);
            if (!c(s)) return;
            const o = this.CASINO_TOP_OFFSET_Y,
                n = $.haveTopBarShow,
                a = (null == (t = $.instance) ? void 0 : t.getTopBarOffsetYToMove()) ?? 0,
                r = (null == (i = $.instance) ? void 0 : i.getOffsetYAreaToMove()) ?? 0,
                h = o + (n ? a : r);
            s.top = h, s.bottom = this.CASINO_BOTTOM_OFFSET_Y, this._topPanel.getComponent(v).height = h
        }
        onLanguageChanged() {
            this.sendEventInit()
        }
        onLoginSuccessCallback() {
            this.sendEventInit()
        }
        showPopup(e, t) {
            if (this.isActive()) I.popUp.showMsgI18n(e), t && t();
            else {
                this.popupQueue.some((t => t.config.txt === e.txt && t.config.title === e.title)) || this.popupQueue.push({
                    config: e
                })
            }
        }
        processPopupQueue() {
            for (; this.popupQueue.length > 0;) {
                const e = this.popupQueue.shift();
                e && I.popUp.showMsgI18n(e.config)
            }
        }
    }).gameCode = "", re.gameGroup = "", re.PATH_WEB_LOCALHOST = "html", re.CACHE_AGE_LOCALHOST = 3600, ie = t((te = re).prototype, "webView", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = t(te.prototype, "loadingNode", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = t(te.prototype, "prefabWebView", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = t(te.prototype, "base64webViewScreenShot", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = t(te.prototype, "rootNode", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = te)) || ee));
    s._RF.pop()
}