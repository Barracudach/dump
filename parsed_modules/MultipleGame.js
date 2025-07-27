import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as p from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as f from "./NestableScrollView_Outer_ts.js";
import * as C from "./NestableScrollView_Inner_ts.js";
import * as S from "./NodePage.js";
import * as G from "./Holdem_View_Web.js";
import * as M from "./Holdem_Room_ts.js";
import * as I from "./websocket.js";
import * as v from "./websocket.js";
import * as E from "./worldWebsocket.js";
import * as R from "./holdemRoom.js";
import * as b from "./Pb.js";
import * as L from "./MTTConnector.js";
import * as y from "./MultipleGameTabButton.js";
import * as w from "./mttconfig.js";
import * as P from "./GameViewLoader.js";
import * as k from "./httpApis.js";
import * as D from "./httpApis.js";
import * as A from "./HttpApiTournamentDetail.js";
import * as B from "./Translator.js";
import * as H from "./MttPrefab.js";
import * as x from "./HoldemReplayPrefab.js";
import * as N from "./Holdem_Live.js";
import * as O from "./cv.js";
import * as U from "./Enum.js";
import * as W from "./Enum.js";
import * as V from "./Enum.js";
import * as F from "./mttController.js";
import * as q from "./MultiTableBarSelector.js";
import * as z from "./CommonTools.js";
import * as J from "./GameSceneInstance.js";
import * as K from "./MultipleRoomManager.js";
import * as Y from "./FakeMultipleGame.js";
import * as j from "./CrashTracing.js";
import * as Z from "./CrashTracing.js";
import * as mod30 from "./FakeCashRoom.js";
import * as X from "./FakeHoldemRoom.js";
import * as Q from "./ChangeCard.js";
import * as ne from "./SngEvent.js";
import * as te from "./SngEvent.js";
import * as ee from "./SngEvent.js";
import * as oe from "./MultipleGameJsng.js";
import * as ae from "./GameScene.js";
import * as ie from "./MessageBroker.js";
import * as se from "./MttItemHelper.js";
import * as le from "./menu.js";
import * as re from "./LobbyTools.js";
import * as he from "./TimeElapse.js";
import * as de from "./EmojiView.js";

function main() {
    var me, ce, ue, ge, _e, Te, pe, fe, Ce, Se, Ge, Me, Ie, ve, Ee, Re, be, Le, ye, we, Pe, ke, De, Ae, Be, He, xe, Ne, Oe, We, Ve, Ue, Fe, qe, ze, Je, Ke;
    o._RF.push({}, "a1e55suvclHha+lbLbC6pE9", "MultipleGame", void 0);
    const {
        ccclass: Ye,
        property: je
    } = r;
    let Ze = e("MultipleGameType", function(e) {
        return e[e.NONE = 0] = "NONE", e[e.HOLDEM = 1] = "HOLDEM", e[e.CASH = 2] = "CASH", e[e.COUNT = 3] = "COUNT", e
    }({}));
    e("MultipleGameUIInfo", class {
        constructor() {
            this.type = void 0, this.index = void 0
        }
    });
    e("MultipleGameUIType", function(e) {
        return e[e.MTT = 0] = "MTT", e[e.CASH = 1] = "CASH", e
    }({}));
    e("default", (me = je(a), ce = je(i), ue = je(f), ge = je([C]), _e = je(i), Te = je(i), pe = je(s), fe = je(s), Ce = je([s]), Se = je(i), Ge = je(l), Me = je(s), Ie = je(a), ve = je(i), Ee = je(a), Re = je(a), be = je(i), Ye(((Ke = class e extends G {
        constructor(...t) {
            super(...t), this.enabledBackToMainLobby = !0, n(this, "replayRoomPrefab", we, this), n(this, "replayRoomContainer", Pe, this), n(this, "pageView", ke, this), n(this, "pageScrollViews", De, this), n(this, "headerContainer", Ae, this), n(this, "rootHeaderContainer", Be, this), n(this, "gameContainerWidget", He, this), n(this, "gameContainerContentWidget", xe, this), n(this, "gameContainerPagesWidget", Ne, this), n(this, "hallContainer", Oe, this), n(this, "backButton", We, this), n(this, "menuButton", Ve, this), n(this, "menu_Panel_prefab", Ue, this), this.menu_Panel = null, n(this, "menuNewIcon", Fe, this), this.menuScript = null, n(this, "ruleDiscription_panel_prefab", qe, this), this.ruleDiscription_panel = null, n(this, "changeCard_panel_prefab", ze, this), this.changeCard_panel = null, this._roomCash = [], n(this, "cashGamesComponentsContainer", Je, this), this.hall = void 0, this.halls = [], this.multipleGameUI = [], this._gameViewLoader = new P, this._roomNodes = [], this._replayRoomNode = null, this._replayRoomNodes = new Map, this._room = [], this._replayRoom = null, this._replayRooms = new Map, this._holdemRoom = [], this._holdemReplayPrefab = null, this._backButtonAction = null, this._hasShowHall = !1, this._data = null, this._lastTabIndexBeforeShowHall = -1, this._selectedTabIndex = -1, this._featureChangePageIndex = [], this._hasShowChildrenLoading = !0, this.selectedGameInfo = 0, this.hasShowHeader = !1, this.maxTabCount = 3, this._onHoldemReconnectShowLoading = [], this._onHoldemReconnectHideLoading = [], this._onHoldemReconnectFail = [], this._onHoldemVerifyToken = [], this._onHoldemVerifyTokenEnd = [], this._onWorldRepeatLoginDialog = [], this._onWorldUpdateUserInfo = [], this._onWorldBoardcastMessageEnvelope = [], this._onWorldReconnectShowLoading = [], this._onWorldReconnectHideLoading = [], this._onWorldReconnectFail = [], this._onWorldVerifyToken = [], this._onWorldVerifyTokenEnd = [], this._logTimes = 0, this._retryTimeout = null, this._retryInterval = 3e3, this._delayTimeout = null, this.timeOutID = null, this._delayInterval = 3e3, this._isReloadMttTours = !1, this._isReloadSNGTours = !1, this.isLoadedStatusRoom = !1, this.retryStartMTTGames = 0, this.isFlowTournamentCheckExist = !1, this.isFlowTournamentCheckSelectedTable = !1, this._startTime = void 0, this._selfPlayStatus = void 0, this.firstTimePageChanged = !0, this.OFFSET_Y_DEFAULT = 126, this.OFFSET_Y_MENU_PANEL = 50, this._adapted = !1, this._adaptWidgetOnHideHeader = !1, this.preStartGame = () => {
                var t;
                this.hideHall(), this.hallContainer.getComponent(h).opacity = 255, this.hideHeader(), this.updateScrollView(), this.selectedGameInfo = cc_mtt.vv.DataManager.currentGameInfo, null == (t = j.getInstance()) || t.addEventToSpan(Z.SwitchLoadingIssue, "MultipleGame_preStartGame()"), this.startGames(), this.initTabButton(), e.isGameMode_SNG() || this.hideLoading("preStartGame")
            }, this.VerifyToken = e => {
                cc_mtt.vv.ConsoleLog.log("VerifyToken: " + cc_mtt.vv.DataManager.token), e && cc_mtt.vv.DataManager.token ? e.requestSecureTokenCheck() : cc_mtt.vv.DataManager.token || L.instance.onAuthMttError(L.instance.config.tokenErrorMsg.NO_TOKEN)
            }, this.onHoldemReconnectShowLoading = e => {
                this.onCallBack(e, this._onHoldemReconnectShowLoading)
            }, this.onHoldemReconnectHideLoading = e => {
                this.onCallBack(e, this._onHoldemReconnectHideLoading)
            }, this.onHoldemReconnectFail = e => {
                this.onCallBack(e, this._onHoldemReconnectFail)
            }, this.onHoldemVerifyToken = e => {
                var t;
                null == (t = this.VerifyToken) || t.call(this, e), this.onCallBack(e, this._onHoldemVerifyToken)
            }, this.onHoldemVerifyTokenEnd = e => {
                this.onCallBack(e, this._onHoldemVerifyTokenEnd)
            }, this.onWorldRepeatLoginDialog = e => {
                this.repeatLoginDialog(e), this.onWorldCallBack(this._onHoldemReconnectShowLoading, e)
            }, this.onWorldUpdateUserInfo = e => {
                this.updateUserInfo(e), this.onWorldCallBack(this._onWorldUpdateUserInfo, e)
            }, this.onWorldBoardcastMessageEnvelope = e => {
                this.broadcastMessageEnvelope(e), this.onWorldCallBack(this._onWorldBoardcastMessageEnvelope, e)
            }, this.onWorldReconnectShowLoading = () => {
                if (d(this.node)) {
                    const t = (new Date).getTime(),
                        n = t - this._startTime,
                        o = {
                            time: t,
                            openTime: n,
                            currentRoomId: this.getCurrentRoomId()
                        };
                    var e;
                    if (n < 1e4) null == (e = j.getInstance()) || e.traceEvent(Z.CashGameIssues, "ConnectingPopupWhenEnterRoom_Show", o);
                    this.showLoading("Connecting", !0)
                }
                this.onWorldCallBack(this._onWorldReconnectShowLoading)
            }, this.onWorldReconnectHideLoading = () => {
                if (d(this.node)) {
                    const t = (new Date).getTime();
                    if (t - this._startTime < 25e3) {
                        var e;
                        const n = {
                            time: t,
                            closeTime: t,
                            currentRoomId: this.getCurrentRoomId()
                        };
                        null == (e = j.getInstance()) || e.traceEvent(Z.CashGameIssues, "ConnectingPopupWhenEnterRoom_Hide", n)
                    }
                    this.hideLoading("Connecting")
                }
                this.onWorldCallBack(this._onWorldReconnectHideLoading)
            }, this.onWorldReconnectFail = () => {
                this.onWorldCallBack(this._onWorldReconnectFail)
            }, this.onWorldVerifyToken = () => {
                cc_mtt.vv.DataManager.token ? E.getInstance().requestSecureTokenCheck() : L.instance.onAuthMttError(L.instance.config.tokenErrorMsg.NO_TOKEN), this.onWorldCallBack(this._onWorldVerifyToken)
            }, this.onWorldVerifyTokenEnd = () => {
                E.reconnectAllGameSockets(), this.onWorldCallBack(this._onWorldVerifyTokenEnd)
            }, this.onClickTabButton = (e, t) => {
                cc_mtt.vv.ConsoleLog.log("MultipleGame onClickTabButton", e), this.onChangedPage(e, !0, !0), this.resetStatusAllTabBtn(e), this.setColorSelect(e), this.progressShowCloseTableButton(e)
            }, this.onClickCloseTableButton = e => {
                let t = () => {
                    const e = F.selfTours.getPlayingTournaments();
                    e.length > this.maxTabCount ? q.checkAndShow() : (F.selfTours.setSelectedTournamentMultiTableBar(e.map((e => null == e ? void 0 : e.TournamentId))), this.onMultiTableBarTableSelected())
                };
                var n, o;
                if (null != this._room && K.instance.listRoom.length > 1) this._room[e] && this._room[e].isGlobalSpinGameMode() ? null == (n = this._room[e]) || null == (n = n.store) || n.ExitSngRoomLevel() : (null == (o = this._room[e]) || null == (o = o.store) || o.reboundGameView(), t(), this.isNoGameInRoom() && this.leaveGame());
                else if (O.appConfig.isWebApp && this._room[e] && this._room[e].isGlobalSpinGameMode()) {
                    var a;
                    null == (a = this._room[e]) || null == (a = a.store) || a.ExitSngRoomLevel()
                } else {
                    if (this._room[e] && this._room[e].isHoldemMTTGame()) {
                        const t = this._room[e].store.tournamentId;
                        se.removeJoinedTournaments(t), F.selfTours.manualRemoveTournament(t)
                    }
                    this.leaveGame(), t()
                }
            }, this.retryRequestToken = () => {
                L.instance.requestToken()
            }, this.onTokenUpdate = () => {
                this.reconnectMttWorldServer("multiple_onTokenUpdate")
            }, this.onTokenEnd = () => {
                this.reconnectMttWorldServer("multiple_onTokenEnd")
            }, this.onTokenError = e => {
                cc_mtt.vv.ConsoleLog.log("MultipleGame onTokenError", cc_mtt.vv.DataManager.token, e, d(this.node), this.node.active), d(this.node) && (e != L.instance.config.tokenErrorMsg.REQUEST_TOKEN_FAIL && this._logTimes < 5 && (this._logTimes++, cc_mtt.vv.ConsoleLog.error("error_hall")), this.node.active && (clearTimeout(this._retryTimeout), e == L.instance.config.tokenErrorMsg.REQUEST_TOKEN_FAIL || e == L.instance.config.tokenErrorMsg.EMPTY_RESPONSE ? this._retryTimeout = setTimeout(this.retryRequestToken, this._retryInterval) : this.retryRequestToken()))
            }, this._sngManager = new oe, this._joinedSngTournamentsID = []
        }
        static get instance() {
            return this._instance
        }
        getSelfPlayStatus() {
            return (17 & this._selfPlayStatus) > 0
        }
        setSelfPlayStatus(e, t) {
            let n;
            switch (e) {
                case w.GAME_LEVEL_LIST_ID.SNG:
                    n = 16;
                    break;
                default:
                    n = 1
            }
            t ? this._selfPlayStatus |= n : this._selfPlayStatus &= ~n
        }
        onLoad() {
            if (!O.appConfig.isLandscapeLayout) {
                let e = m.getScene().getComponentInChildren(c);
                e.overrideResolutionPolicy = !0, e.resolutionPolicy = O.config.getResolutionPolicy(!0, this.isWideScreen())
            }
            super.onLoad(), e._instance = this, cc_mtt.vv.MultipleGame = e._instance, this.sceneName = W.GAME_SCENE, O.config.setCurrentScene(O.Enum.SCENE.GAME_SCENE), this.cashGamesComponentsContainer && (this.cashGamesComponentsContainer.active = !1), this.maxTabCount = O.appConfig.getGameConfig().gameTablesConcurrent.maxConcurrent, this._roomNodes = new Array(this.maxTabCount).fill(void 0), this._room = new Array(this.maxTabCount).fill(void 0), this._holdemRoom = new Array(this.maxTabCount).fill(void 0), this._roomCash = new Array(this.maxTabCount).fill(void 0), L.instance.registerMessageCenter(L.instance.config.BroadCast.MTT_TOKEN_END, this.onTokenEnd, this.node), L.instance.registerMessageCenter(L.instance.config.BroadCast.MTT_TOKEN_ERROR, this.onTokenError, this.node), L.instance.registerMessageCenter(L.instance.config.BroadCast.MTT_TOKEN_UPDATE, this.onTokenUpdate, this.node), O.appConfig.getGameConfig().enableMultiTableBar && (L.instance.registerMessageCenter(L.instance.config.BroadCast.MULTI_TABLE_BAR_TABLE_SELECTED, this.onMultiTableBarTableSelected.bind(this), this.node), O.MessageCenter.register("close_cash_room", this.onCloseCashRoom.bind(this), this.node)), L.instance.registerMessageCenter(L.instance.config.BroadCast.SHOW_FULL_SCREEN_PANEL, this.moveHeaderContainerToHoldemRoomView.bind(this), this.node), L.instance.registerMessageCenter(L.instance.config.BroadCast.HIDE_FULL_SCREEN_PANEL, this.onHideFullScreenPanel.bind(this), this.node), O.MessageCenter.register("multiple_game_log_all_indexs", this.logToNRAllNeededIndex.bind(this), this.node), this._startTime = (new Date).getTime()
        }
        isWideScreen() {
            if (O.native.IsPad()) return !0;
            return O.config.WIDTH / O.config.HEIGHT > O.config.DESIGN_WIDTH / O.config.DESIGN_HEIGHT
        }
        start() {
            if (super.start(), O.appConfig.getGeneralConfig().multiWindowEnabled || (O.appConfig.getGameConfig().enableMultiTableBar && (O.appConfig.isWebApp || this.scheduleOnce((() => {
                    this.removePageViewWidgets()
                }), .01)), e.isGameMode_SNG() || (L.instance.cv.SwitchLoadingView.show(B("LOADER.LOADING_VIEW")), j.hasInstance() && (j.getInstance().startSpan(Z.SwitchLoadingIssue), j.getInstance().addEventToSpan(Z.SwitchLoadingIssue, "MultipleGame_start()_loading_show"), setTimeout((() => {
                    L.instance.cv.SwitchLoadingView.isShow() && j.getInstance().endSpan(Z.SwitchLoadingIssue, "loading_error")
                }), 15e3)))), this.cashGameInit(), O.appConfig.isWebApp && (u.on("canvas-resize", this.onResolutionChange, this), j.hasInstance())) {
                const e = j.GetTrackAttributeOfSpan(Z.ReloadingScene, "reloadingTimestamp");
                if (e) {
                    const t = Date.now() - e;
                    if (t > 3e3) {
                        const e = {
                            reloadingTime: t
                        };
                        j.getInstance().endSpan(Z.ReloadingScene, "reloading_scene_slow", e)
                    }
                }
                j.SetTrackAttributeToSpan(Z.ReloadingScene, "reloadingTimestamp", 0)
            }
        }
        onResolutionChange(e) {
            L.instance.cv.SwitchLoadingView.show(B("LOADER.LOADING_VIEW")), this.unschedule(this.reloadScene), this.scheduleOnce(this.reloadScene, 1)
        }
        reloadScene() {
            if (j.hasInstance()) {
                j.getInstance().startSpan(Z.ReloadingScene);
                const e = Date.now();
                j.SetTrackAttributeToSpan(Z.ReloadingScene, "reloadingTimestamp", e), this.scheduleOnce((() => {
                    j.getInstance().endSpan(Z.ReloadingScene, "reloading_scene_not_successfully")
                }), 10)
            }
            k.cancelAll();
            const e = (new Date).getTime();
            m.loadScene(m.getScene().name, ((t, n) => {
                var o;
                null == (o = j.getInstance()) || o.trace(Z.SceneLoadTime, Z.SceneLoadTime, {
                    LoadType: "Load",
                    SceneName: n.name,
                    Message: t ? t.message || t : "",
                    Stack: t ? t.stack || t : "",
                    LoadTimeMS: (new Date).getTime() - e
                }, !1, null != t)
            }))
        }
        checkAndInitMenuPanel() {
            d(this.menu_Panel) || (this.menu_Panel = g(this.menu_Panel_prefab), this.node.addChild(this.menu_Panel), this.menuScript = this.menu_Panel.getComponent(le), this.menuScript.setGameManager(this), this.adaptiveExpand(), this.menu_Panel.active = !1)
        }
        checkAndInitChangeCardPanel() {
            d(this.changeCard_panel) || (this.changeCard_panel = g(this.changeCard_panel_prefab), this.changeCard_panel.active = !1, this.node.addChild(this.changeCard_panel), this.changeCard_panel.setSiblingIndex(O.Enum.ZORDER_TYPE.ZORDER_5))
        }
        cashGameInit() {
            this.checkAndInitMenuPanel(), this.ruleDiscription_panel = g(this.ruleDiscription_panel_prefab), this.ruleDiscription_panel.setSiblingIndex(121), z.instance.getParentScene(m, this.node).getComponentInChildren(c).node.addChild(this.ruleDiscription_panel), this.ruleDiscription_panel.setSiblingIndex(121), this.ruleDiscription_panel.active = !1, this.checkAndInitChangeCardPanel()
        }
        setMenuNewIcon(e) {
            this.menuNewIcon.active = e
        }
        updateMenuNewIcon() {
            this.setMenuNewIcon(this.menu_Panel.getComponent(le).isShowPos())
        }
        onbtnMenuClick(e) {
            const t = this.pageScrollViews[this._selectedTabIndex].content.getComponentInChildren(ae);
            if (t) {
                var n;
                if (O.AudioMgr.playButtonSound("button_click"), d(t.emoji_Panel)) null == (n = t.emoji_Panel.getComponent(de)) || n.hideUi();
                this.menu_Panel.getComponent("menu").updateMenu(t), this.menu_Panel.active = !0, this.enablePageView(!1)
            }
        }
        onBtnBuyin(e, t) {
            this.menu_Panel.getComponent(le).onBtnBuyin(e, t)
        }
        enablePageView(e) {
            this.pageView.enabled = e
        }
        onBtnExitPoker() {
            this.menu_Panel.getComponent(le).onBtnExitPoker()
        }
        updateMenu(e) {
            this.menu_Panel.getComponent(le).updateMenu(e)
        }
        sureToSettlement() {
            this.menu_Panel.getComponent(le).sureToSettlement()
        }
        adaptiveExpand() {
            if (O.config.IS_FULLSCREEN && !O.appConfig.isLandscapeLayout) {
                let e = _("menu_img0", this.menu_Panel);
                e.setPosition(e.position.x, e.position.y - O.config.FULLSCREEN_OFFSETY)
            }
            const e = O.tools.calcTopOffsetToMove(this.OFFSET_Y_DEFAULT);
            if (e) {
                var t;
                const n = this.menu_Panel.getComponent(s);
                n.top = n.top + this.OFFSET_Y_MENU_PANEL + e;
                const o = null == (t = this.menu_Panel.getComponent(le).background) ? void 0 : t.getComponent(s);
                o && (o.top = o.top - this.OFFSET_Y_MENU_PANEL - e), O.resMgr.adaptWidget(this.menu_Panel, !0), d(this.menuButton) && (this.menuButton.top = this.menuButton.top + e)
            }
        }
        static getFakeMultipleGame() {
            return Y.instance
        }
        static getCurrentShowGameScript(t) {
            if (!e.instance) return null;
            let n = e.currentMultipleGameIndex,
                o = e.instance._roomNodes[n];
            if (o)
                if (t) {
                    let e = o.getComponent("GameScene");
                    if (e) return e;
                    T("Can not find GameScene in _roomNodes INDEX:" + n)
                } else {
                    let e = o.getComponentInChildren(M);
                    if (e) return e;
                    T("Can not find Holdem_Room in _roomNodes INDEX:" + n)
                }
            else T("GAME NOT AVAILABLE AT INDEX:" + n);
            return null
        }
        onDestroy() {
            e._instance = null, cc_mtt.vv.MultipleGame = null, this.clearSelfHoldemReconnectCallBack(), this.unscheduleAllCallbacks(), N.destroyVideoEngine(), this.destroyBasicScene(), L.instance.unregisterMessageCenter(L.instance.config.BroadCast.MTT_TOKEN_END, this.node), L.instance.unregisterMessageCenter(L.instance.config.BroadCast.MTT_TOKEN_ERROR, this.node), L.instance.unregisterMessageCenter(L.instance.config.BroadCast.MTT_TOKEN_UPDATE, this.node), L.instance.unregisterMessageCenter(L.instance.config.BroadCast.MULTI_TABLE_BAR_TABLE_SELECTED, this.node), L.instance.unregisterMessageCenter(L.instance.config.BroadCast.SHOW_FULL_SCREEN_PANEL, this.node), L.instance.unregisterMessageCenter("close_cash_room", this.node), L.instance.unregisterMessageCenter(L.instance.config.BroadCast.HIDE_FULL_SCREEN_PANEL, this.node), O.MessageCenter.unregister("multiple_game_log_all_indexs", this.node), clearTimeout(this._retryTimeout), this.isLoadedStatusRoom = !1, clearTimeout(this._delayTimeout), O.MessageCenter.send(O.Enum.MessageCenterAction.WindowFocusChanged, 0), O.appConfig.isWebApp && u.off("canvas-resize", this.onResolutionChange, this)
        }
        setScrollingPage(e) {
            this._holdemRoom.forEach((t => {
                d(t) && (t.isScrolling = e)
            })), this._roomCash.forEach((t => {
                d(t) && (t.isScrolling = e)
            }))
        }
        setHeader(e) {
            this._selectedTabIndex = e;
            for (let o = 0; o < (null == (t = Y.instance) ? void 0 : t._multipleGameTabButtons.length); o++) {
                var t, n;
                null == (n = Y.instance) || n._multipleGameTabButtons[o].setSelected(o === e)
            }
            this.shouldMoveHeaderToRootView() ? this.moveHeaderContainerToRoot() : this.moveHeaderContainerToHoldemRoomView();
            let o = this._roomCash[this._selectedTabIndex];
            if (o) {
                this.updateMenuNewIcon(), this.checkAndInitChangeCardPanel();
                let e = o.gameMain_panel.getComponent("GameMain");
                this.changeCard_panel.getComponent(Q).setGameMain(e), this.cashGamesComponentsContainer.active = !0
            } else this.cashGamesComponentsContainer.active = !1
        }
        shouldMoveHeaderToRoomView(e) {
            var t, n, o;
            const a = this._holdemRoom[e];
            return !!(null != a && null != (t = a.menu) && t.node.active || null != a && null != (n = a.menu) && null != (n = n.rulesNodePopup) && n.active || null != a && null != (o = a.gameRecord) && null != (o = o.node) && o.active)
        }
        shouldMoveHeaderToRootView() {
            let e = !0;
            return this._holdemRoom.forEach(((t, n) => {
                t && this.shouldMoveHeaderToRoomView(n) && (e = !1)
            })), e
        }
        removePageViewWidgets() {
            let e;
            e = t => {
                t.removeComponent(s), t.children.forEach((t => e(t)))
            }, e(this.pageView.node)
        }
        adaptWidget(e) {
            this._adapted || (L.instance.cv.resMgr.adaptWidget(e, !0), this._adapted = !0)
        }
        showHeader(e = !0) {
            this.headerContainer.getComponent(h).opacity = 255, this.gameContainerWidget.top = 0, this.pageView.enabled = !0, this.hasShowHeader = !0, this.updateVisibleTableBar(), this.setHeader(this.pageView.getCurrentPageIndex()), e && this.updateAllGameAlignment(), this.adaptWidget(this.node)
        }
        hideHeader(e = !0) {
            this.headerContainer.getComponent(h).opacity = 0, this.gameContainerWidget.top = 0, this.pageView.enabled = !1, this.hasShowHeader = !1, this.setHeader(this.pageView.getCurrentPageIndex()), e && this.updateAllGameAlignment(), this._adaptWidgetOnHideHeader || (this._adaptWidgetOnHideHeader = !0, this.scheduleOnce((() => {
                this.adaptWidget(this.node)
            }), .1))
        }
        exitToLobby(t = !1, n = !1) {
            if (this.isloadAllStatusRoom()) {
                if (cc_mtt.vv.DataManager.currentResultId = 0, t) {
                    const t = K.instance.getGameInfoByTabIndex(this._selectedTabIndex);
                    if (t)
                        if (t.type == Ze.HOLDEM) e.isGameMode_SNG() ? O.dataHandler.getUserData().forceStartingGameTypeInHall = V.GLOBAL_SPIN : O.dataHandler.getUserData().forceStartingGameTypeInHall = V.MTT;
                        else if (t.type == Ze.CASH && t.data) {
                        var o;
                        const e = t,
                            n = O.GameDataManager.getDataInstanceByGameAndRoomId(e.data.gameId, e.data.roomId);
                        (null == n || null == (o = n.tRoomData) ? void 0 : o.pkRoomParam.game_mode) == O.Enum.CreateGameMode.CreateGame_Mode_Short ? O.roomManager.checkGameIsZoom(e.data.gameId) ? O.dataHandler.getUserData().forceStartingGameTypeInHall = V.ZOOM_TEXAS : O.dataHandler.getUserData().forceStartingGameTypeInHall = V.DZPK_SHORT : e.data.gameId == O.Enum.GameId.Plo || e.data.gameId == O.Enum.GameId.Plo5 ? O.dataHandler.getUserData().forceStartingGameTypeInHall = V.PLO : O.roomManager.checkGameIsZoom(e.data.gameId) ? O.dataHandler.getUserData().forceStartingGameTypeInHall = V.ZOOM_TEXAS : O.dataHandler.getUserData().forceStartingGameTypeInHall = V.DZPK
                    }
                }
                this.leaveGame()
            } else n && this.leaveGame()
        }
        showHall(e, t = !1) {
            this.enabledBackToMainLobby ? this.exitToLobby(t) : (this._hasShowHall = !0, console.log("changeMTTStyle MultipleGame 1"), L.instance.sendMessageCenter("changeMTTStyle", 1), this.hallContainer.active = !0, this.showHeader(), this.showBackButton(e), this.setHeader(-1), d(this.hall) && d(this.hall._mttPage) && this.hall._mttPage.getComponent(H).setPage())
        }
        showHallSNG(e = !1, t = 0) {
            O.dataHandler.getUserData().autoShowBuyInSNGValue = t, this.showHall(K.instance.listRoom.length, !0)
        }
        isloadAllStatusRoom() {
            return this.isLoadedStatusRoom
        }
        startDelayTimeEnableTableBarBtn() {
            this.isLoadedStatusRoom = !1, clearTimeout(this.timeOutID), this.timeOutID = setTimeout(this.setFinishLoadAllStatusRoom.bind(this), this._delayTimeout)
        }
        setFinishLoadAllStatusRoom() {
            this.isLoadedStatusRoom = !0
        }
        hideHall(e = -1) {
            this._hasShowHall = !1, console.log("changeMTTStyle MultipleGame 0"), L.instance.sendMessageCenter("changeMTTStyle", 0), this.hallContainer.active = !1, this.updateHeader(), this.hideBackButton(), this.hideHallAllDialog(), -1 != e ? this.setHeader(e) : -1 != this._lastTabIndexBeforeShowHall ? this.setHeader(this._lastTabIndexBeforeShowHall) : this.setHeader(0)
        }
        hideHallAllDialog() {
            this.hall && this.hall.dialogController && this.hall.dialogController.hideAllDialogBox()
        }
        updateScrollView() {}
        showBackButton(e) {
            this.backButton.node.active = !0, this.scheduleOnce((() => {
                this.adaptWidget(this.headerContainer)
            }), .1)
        }
        hideBackButton() {
            this.backButton.node.active = !1, this.scheduleOnce((() => {
                this.adaptWidget(this.headerContainer)
            }), .1)
        }
        shouldShowHeader() {
            let e = O.appConfig.getGameConfig().enableMultiTableBar,
                t = K.instance.getAmountMTTRooms() > 0 && this.getSelfPlayStatus(),
                n = K.instance.getAmountCashRooms() > 0;
            return e && (t || n)
        }
        isNoGameInRoom() {
            let e = O.appConfig.getGameConfig().enableMultiTableBar;
            return 0 == K.instance.listRoom.length && e
        }
        hasMoreGameInRoom() {
            let e = O.appConfig.getGameConfig().enableMultiTableBar;
            return K.instance.listRoom.length > 1 && e
        }
        updateHeader(e = !0) {
            this.shouldShowHeader() ? this.showHeader(e) : this.hideHeader(e)
        }
        updateAllGameAlignment() {
            if (this._room)
                for (let e = 0; e < this._room.length; e++) this._room[e] && this._room[e].updateGameAlignment()
        }
        loadPrefab() {
            var t;
            d(this.preloadProgress) && (this.preloadProgress.node.active = !1), this.showLoading(), d(this.pageView, !0) && (this.pageView.node.on(p.EventType.PAGE_TURNING, (() => {
                d(this, !0) && d(this.pageView, !0) && this.onChangedPageEnd(this.pageView.getCurrentPageIndex())
            })), this.pageView.node.on(p.EventType.SCROLL_ENDED, (() => {
                d(this, !0) && (this.setScrollingPage(!1), d(this.pageView, !0) && this.setHeader(this.pageView.getCurrentPageIndex()))
            })), this.pageView.node.on(p.EventType.SCROLL_BEGAN, (() => {
                d(this, !0) && this.setScrollingPage(!0)
            })), this.pageView.autoPageTurningThreshold = .4 * u.getVisibleSize().width, this.pageView.enableFreezeSolver = !0, this.pageView.disableNestableScroll = !0), cc_mtt.vv.AssetsManager.init(), this.setPopUpParent(), this.initBasicScene(!0), this.setSelfWorldCallBack(), this.connect("multiple_loadPrefab"), this.setSelfHoldemReconnectCallBack(), this.hallContainer.getComponent(h).opacity = 0, this.unschedule(this.preStartGame), this.scheduleOnce(this.preStartGame, .01), e.isGameMode_SNG() || this.showLoading("preStartGame"), null == (t = j.getInstance()) || t.addEventToSpan(Z.SwitchLoadingIssue, "MultipleGame_loadPrefab()")
        }
        setPopUpParent() {
            cc_mtt.vv.AssetsManager.popupParent = this.dialogLayer
        }
        isMultipleGameStart(e) {
            return (e.MttTournamentStatus != b.commonProto.MTT_GAME_STATUS.NOT_STARTED || e.MttTournamentStatus == b.commonProto.MTT_GAME_STATUS.NOT_STARTED && e.MttTournamentIsPreparing) && e.MttTournamentStatus != b.commonProto.MTT_GAME_STATUS.ENDED && e.JoinStatus > 0
        }
        isMultipleGamePreparing(e) {
            return e.JoinStatus > 0 && e.MttTournamentIsPreparing
        }
        startGames() {
            O.appConfig.isLandscapeLayout || this.startCashGames(), this.retryStartMTTGames = 3, this.startMTTGgames(), O.appConfig.getGeneralConfig().multiWindowEnabled || this.backToAllSngGames(), this.reselectSelectedRoom()
        }
        startCashGames() {
            O.roomManager.rooms.filter((e => e.joinedGame || e.quickLeaveData)).forEach(e.addCashGame)
        }
        startMTTGgames() {
            var t;
            cc_mtt.vv.DataManager.isWebFeature, null == (t = j.getInstance()) || t.addEventToSpan(Z.SwitchLoadingIssue, "MultipleGame_startMTTGgames()_requestMttMultiTable"), D.requestMttMultiTable((t => {
                var n;
                if (!d(this, !0)) return;
                null == (n = j.getInstance()) || n.addEventToSpan(Z.SwitchLoadingIssue, "MultipleGame_startMTTGgames()_requestMttMultiTable_success");
                const o = F.selfTours.getAllRegisteredTournaments();
                let a = !1,
                    i = !1,
                    s = !0;
                if (0 == cc_mtt.vv.DataManager.mttReviewTableId && 0 == cc_mtt.vv.DataManager.mttReviewPlayerId && (i = !0, s = !1), i) {
                    var l;
                    if (!o || 0 == o.length) return this.retryStartMTTGames > 0 ? (this.scheduleOnce((() => this.startMTTGgames), 1), void this.retryStartMTTGames--) : (this.onStartMTTGamesFail(), void(null == (l = j.getInstance()) || l.endSpan(Z.SwitchLoadingIssue, "MultipleGame_startMTTGgames()_userGameInfo_empty")));
                    {
                        const e = cc_mtt.vv.DataManager.selectedTournamentID > 0;
                        let t = !1;
                        for (let e = 0; e < o.length; e++)
                            if (o[e].TournamentId == cc_mtt.vv.DataManager.selectedTournamentID) {
                                t = !0;
                                break
                            } if (t || !e) this.retryStartMTTGames = 0, this.isFlowTournamentCheckExist = !1, a = !0;
                        else if (this.isFlowTournamentCheckExist || (this.isFlowTournamentCheckExist = !0, this.retryStartMTTGames = 3), this.retryStartMTTGames > 0) return this.scheduleOnce((() => this.startMTTGgames), 1), void this.retryStartMTTGames--
                    }
                }
                if (this.selectedGameInfo)
                    for (let e = 0; e < o.length; e++)
                        if (o[e] && o[e].GameMode == this.selectedGameInfo.Detail.GameMode && o[e].SngMttLevelId == this.selectedGameInfo.Detail.Id && this.isMultipleGameStart(o[e])) {
                            a = !0;
                            break
                        } if (this.setSelfPlayStatus(w.GAME_LEVEL_LIST_ID.MTT, a), a)
                    if (O.appConfig.getGameConfig().enableMultiTableBar) {
                        const e = F.selfTours.getPlayingTournaments(),
                            t = F.selfTours.getSelectedTournamentMultiTableBarPlaying();
                        if (t.length < this.maxTabCount && t.length < e.length && e.forEach((e => {
                                e.TournamentId && t.length < this.maxTabCount && !t.includes(e.TournamentId) && t.push(e.TournamentId)
                            })), O.appConfig.isWebApp)
                            if (t.length > 0) this.isFlowTournamentCheckSelectedTable = !1, this.retryStartMTTGames = 0;
                            else if (this.isFlowTournamentCheckSelectedTable || (this.isFlowTournamentCheckSelectedTable = !0, this.retryStartMTTGames = 3), this.retryStartMTTGames > 0) return this.scheduleOnce((() => this.startMTTGgames), 1), void this.retryStartMTTGames--;
                        F.selfTours.setSelectedTournamentMultiTableBar(t), this.onMultiTableBarTableSelected()
                    } else this.checkEnterGames(o, 0);
                else !O.appConfig.getGeneralConfig().multiWindowEnabled && this.selectedGameInfo && s && cc_mtt.vv.DataManager.gameMode == w.GAME_LEVEL_LIST_ID.MTT && e.addMTTGame(cc_mtt.vv.DataManager.gameViewType, cc_mtt.vv.DataManager.gameMode, this.selectedGameInfo, !0)
            }), (() => {
                d(this.node, !1) && (cc_mtt.vv.ConsoleLog.log("MultipleGame requestMttMultiTable error"), this.onStartMTTGamesFail())
            }))
        }
        onStartMTTGamesFail() {
            this.hideLoading(), this.showMttGameErrorDialog()
        }
        reloadMttMultiTable() {
            this._isReloadMttTours || (this._isReloadMttTours = !0, D.requestMttMultiTable((e => {
                if (this._isReloadMttTours = !1, O.appConfig.getGameConfig().enableMultiTableBar && F.selfTours.getPlayingTournaments().length > this.maxTabCount) {
                    K.instance.getRoomsCount() < this.maxTabCount && q.checkAndShow(!1)
                } else this.checkEnterGames(e.UserGameInfo, 0)
            }), (() => {
                this._isReloadMttTours = !1, cc_mtt.vv.ConsoleLog.log("MultipleGame reloadMttMultiTable requestMttMultiTable error")
            })))
        }
        reloadSNGMultiTable() {
            this._isReloadSNGTours || (this._isReloadSNGTours = !0, D.requestJSNGMultiTable((e => {
                this._isReloadSNGTours = !1, O.appConfig.getGameConfig().enableMultiTableBar && F.selfTours.getPlayingTournaments().length > this.maxTabCount ? q.checkAndShow(!1) : this.checkEnterGames(e.UserGameInfo, 0)
            }), (() => {
                this._isReloadSNGTours = !1, cc_mtt.vv.ConsoleLog.log("MultipleGame reloadSNGMultiTable requestSNGMultiTable error")
            })))
        }
        setBlockAllAudioPlayer(e, t = []) {
            if (this._holdemRoom)
                for (let n = 0; n < this._holdemRoom.length; n++) d(this._holdemRoom[n]) && this._holdemRoom[n].audioPlayer && this._holdemRoom[n].audioPlayer.setBlock(e, t)
        }
        getMyJoinStatus(e) {
            let t = cc_mtt.vv.DataManager.JoinedTournaments.findIndex((t => t.TournamentId == e));
            return t >= 0 ? cc_mtt.vv.DataManager.JoinedTournaments[t].JoinStatus : 0
        }
        callGameViewNew(e, t = null) {
            if (cc_mtt.vv.ConsoleLog.log("MultipleGame checkConditionEnterGames callGameViewNew:", e), this.isValidMttGameCategory(e.Category)) {
                var n;
                let o = this.getGameListId(e.Category),
                    a = e.SngMttLevelId,
                    i = e.GameMode;
                null == (n = this._gameViewLoader) || n.callGameView(i, o, a, 0, 0, !1, e.PlayOnJoint, t, !1, e.TournamentId)
            } else this.callNextFunction(t)
        }
        isValidMttGameCategory(e) {
            return e == b.commonProto.GAME_CATEGORY.MTT || e == b.commonProto.GAME_CATEGORY.SNG
        }
        getGameListId(e) {
            return e == b.commonProto.GAME_CATEGORY.SNG ? w.GAME_LEVEL_LIST_ID.SNG : w.GAME_LEVEL_LIST_ID.MTT
        }
        callGameView(e, t = null) {
            if (this.isValidMttGameCategory(e.Category)) {
                let n = this.getGameListId(e.Category),
                    o = e.SngMttLevelId,
                    a = e.GameMode;
                A.requestMttTournamentDetail(e.SngMttLevelId, (i => {
                    var s;
                    (cc_mtt.vv.ConsoleLog.log("MultipleGame requestMttTournamentDetail", e.SngMttLevelId, i), !i.ErrorCode && i.TournamentDetail && i.TournamentDetail.TablesDetail && i.TournamentDetail.TablesDetail.length > 0) ? null == (s = this._gameViewLoader) || s.callGameView(a, n, o, 0, 0, !1, i.TournamentDetail.PlayOnJoint, t): this.callNextFunction(t)
                }), (n => {
                    cc_mtt.vv.ConsoleLog.log("MultipleGame requestMttTournamentDetail:error", e.SngMttLevelId, n), this.callNextFunction(t)
                }))
            } else this.callNextFunction(t)
        }
        callHallOrGame(e, t, n, o = null) {
            t <= 0 || n <= 0 ? this.callNextFunction(o) : this.callGameView(e, o)
        }
        callNextFunction(e) {
            e && e instanceof Function && e()
        }
        showMttGameErrorDialog() {
            let e = this,
                t = () => {
                    O.getTotalOpeningGames() <= 0 && e.leaveGame()
                };
            this.isOnMttGamePage() ? this.dialogController.showDialogBox("ERROR_CODE_PKW.TITLE", "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", !1, [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: t
            }]) : t()
        }
        findTableIndexFrom(e) {
            let t = cc_mtt.vv.DataManager.currentGameInfo;
            if (e.length <= 0 || null == t || null == t.Detail) return 0;
            let n = t.Detail.Id;
            for (let t = 0; t < e.length; t++)
                if (e[t].TournamentId && e[t].TournamentId == n) return t;
            return 0
        }
        checkEnterGames(e, t, n = !1, o = null) {
            if (!n) {
                if (!O.appConfig.getGameConfig().enableMultiTableBar) {
                    let t = this.findTableIndexFrom(e);
                    return void this.checkEnterGame(e[t])
                }
            }
            if (cc_mtt.vv.ConsoleLog.log("MultipleGame checkConditionEnterGames Check:", e, t), e && t < e.length && e[t]) this.checkEnterGame(e[t], (() => {
                this.checkEnterGames(e, t + 1, n, o)
            }));
            else {
                if (this.hideLoading(), cc_mtt.vv.ConsoleLog.log("MultipleGame checkConditionEnterGames End:", e, K.instance.listRoom), e.length <= 0 || K.instance.listRoom.length <= 0) {
                    var a, i;
                    const e = null == (a = this._holdemRoom[null == (i = this.pageView) ? void 0 : i.getCurrentPageIndex()]) ? void 0 : a.store;
                    null != e && e.isGameEnd || null == e || !e.isPlayingTour || this.showMttGameErrorDialog()
                } else this.switchToTableSelect(e);
                o instanceof Function && o()
            }
        }
        switchToTableSelect(e) {
            let t = cc_mtt.vv.DataManager.selectedTournamentID;
            if (0 == t || e.length <= 0) return;
            let n = this.findTableIndexToSwitch(e, t);
            this.onChangedPage(n)
        }
        findTableIndexToSwitch(e, t) {
            if (e.length <= 0) return 0;
            for (let n = 0; n < e.length; n++)
                if (e[n].TournamentId && e[n].TournamentId == t) return n;
            return 0
        }
        findTableIndexById(e) {
            for (let o = 0; o < this._room.length; o++) {
                var t, n;
                if (this._room[o] && null != (t = this._room[o].store) && t.tournamentId && (null == (n = this._room[o].store) ? void 0 : n.tournamentId) == e) return o
            }
            return -1
        }
        checkEnterGame(e, t = null) {
            cc_mtt.vv.ConsoleLog.log("MultipleGame checkConditionEnterGames checkEnterGame:", e), this.isMultipleGameStart(e) ? this.callGameViewNew(e, t) : this.callNextFunction(t)
        }
        checkConditionEnterGames(e, t) {
            e && t < e.length && e[t] ? (cc_mtt.vv.ConsoleLog.log("MultipleGame handleJoinedGameClickedEvents:", e, t), this.checkConditionEnterGame(e[t], (() => {
                this.checkConditionEnterGames(e, t + 1)
            }))) : (cc_mtt.vv.ConsoleLog.log("MultipleGame checkConditionEnterGames End:", e, K.instance.listRoom), (e.length <= 0 || K.instance.listRoom.length <= 0) && this.showMttGameErrorDialog())
        }
        checkConditionEnterGame(e, t = null) {
            e.Category === b.commonProto.GAME_CATEGORY.MTT ? (cc_mtt.vv.ConsoleLog.log("MultipleGame gameInfo:", e), D.requestMttTournamentStatus(e.SngMttLevelId, (n => {
                if (n)
                    if (cc_mtt.vv.ConsoleLog.log("MultipleGame requestMttTournamentStatus:", e.SngMttLevelId, n), n.Status === b.commonProto.MTT_GAME_STATUS.ENDED) this.callNextFunction(t);
                    else if (n.IsPreparing) this.callHallOrGame(e, 0, 1, t);
                else {
                    let o = new b.commonProto.MttTournamentPlayersRequest;
                    o.UserId = cc_mtt.vv.DataManager.userId, o.TournamentId = e.SngMttLevelId, D.requestMttTournamentPlayers(o, (a => {
                        if (a && !a.ErrorCode) {
                            cc_mtt.vv.ConsoleLog.log("MultipleGame requestMttTournamentPlayers:", e.SngMttLevelId, a);
                            let o = a.PlayersDetail.findIndex((e => e.UserId == cc_mtt.vv.DataManager.userId));
                            this.callHallOrGame(e, n.Status, o >= 0 ? a.PlayersDetail[o].JoinStatus : 0, t)
                        } else {
                            let a = this.getMyJoinStatus(o.TournamentId);
                            this.callHallOrGame(e, n.Status, a, t)
                        }
                    }), (() => {
                        let a = this.getMyJoinStatus(o.TournamentId);
                        this.callHallOrGame(e, n.Status, a, t)
                    }))
                } else cc_mtt.vv.ConsoleLog.log("MultipleGame requestMttTournamentStatus:no data response")
            }), (e => {
                cc_mtt.vv.ConsoleLog.log("MultipleGame requestMttTournamentStatus:error", e)
            }))) : this.callGameView(e, t)
        }
        initHall() {}
        initTabButton() {
            null == Y || Y.instance._multipleGameTabButtons.forEach((e => {
                e.setOnClickAction(this.onClickTabButton), e.setOnClickCloseTable(this.onClickCloseTableButton.bind(this))
            }))
        }
        static addMTTGame(t, n, o, a) {
            let i = K.instance.addMttRoom(t, n, o);
            var s;
            a && i >= 0 && (null == (s = e.instance) || s.initMTTGame(i, n, o));
            return i
        }
        static addCashGame(t) {
            let n = K.instance.addCashRoom(t);
            var o, a;
            n >= 0 && (null == (o = e.instance) || o.initCashGame(n, t), null == (a = Y.instance) || a.initCashGame(n));
            return n
        }
        static canAddCashGame(e) {
            return K.instance.canAddCashGame(e)
        }
        static canAddMttGame(e) {
            return K.instance.canAddMttGame(e)
        }
        reselectSelectedRoom() {
            var e;
            let t = null == (e = K.instance) ? void 0 : e.selectedRoomInfo;
            if (t) {
                let e = K.instance.getRoomIndex(t.data);
                e >= 0 && this.onChangedPage(e)
            }
        }
        initMTTGame(e, t, n) {
            var o;
            if (!O.appConfig.isLandscapeLayout) {
                if (!this.checkLoadPrefabWithRoomIndex(e)) {
                    const t = K.instance.getMttRoomIndex(n.Detail.Id);
                    e != t && (e = t)
                }
            }
            this.updateScrollView(), this.hideHall(e), this.initGameSocket(Ze.HOLDEM, t), this.actualLoadPrefab(e), O.appConfig.isLandscapeLayout || Y.instance.initMttGame(e, t), this.updateAllAddTableButton(), this.scheduleOnce(this.reselectSelectedRoom.bind(this)), null == (o = j.getInstance()) || o.addEventToSpan(Z.SwitchLoadingIssue, "MultipleGame_initMTTGame()")
        }
        initCashGame(e, t) {
            this.updateScrollView(), this.actualLoadPrefabCashGame(e, t), this.hideHall(e), this.updateAllAddTableButton(), this.startDelayTimeEnableTableBarBtn(), this.scheduleOnce(this.reselectSelectedRoom.bind(this))
        }
        sendWindowRemovedMsg(e) {
            O.MessageCenter.send(O.Enum.MessageCenterAction.WindowRemoved, e)
        }
        removeRoom(e, t, n = !0) {
            let o = t => {
                if (O.appConfig.getGeneralConfig().multiWindowEnabled) {
                    let e = t.windowID;
                    this.sendWindowRemovedMsg(e)
                } else this.sendWindowRemovedMsg(e + 1)
            };
            if (d(this._roomNodes[e]) && n && this._roomNodes[e].destroy(), this._roomNodes[e] = void 0, t && t == Ze.CASH) {
                if (d(this._roomCash[e])) {
                    let t = this._roomCash[e];
                    var a;
                    if (t) o(null == (a = t.gameSceneInstance) || null == (a = a.room) ? void 0 : a.gameScene);
                    this._roomCash[e].destroy()
                }
                this._roomCash[e] = void 0
            } else {
                if (d(this._room[e])) {
                    o(this._room[e].currentScene), this._room[e].destroy()
                }
                this._room[e] = void 0, this._holdemRoom[e] = void 0
            }
        }
        removeReplayRoom(e) {
            d(this._replayRoomNode) && (this._replayRoomNode.destroy(), this._replayRoomNode = null), this._replayRoom && (this._replayRoom.destroy(), this._replayRoom = null)
        }
        leaveGame() {
            cc_mtt.vv.DataManager.currentRoomID = 0, cc_mtt.vv.DataManager.selectedTournamentID = 0, this.checkSngRoomsStatus();
            let e = w.SCENE_NAME.HALL;
            cc_mtt.vv.AssetsManager.loadScene(e, (() => {})), O.appConfig.isLandscapeLayout || O.MessageCenter.send(U.LeaveToLobby)
        }
        exitGame(e, t = !0) {
            he.getInstance().start("exitGame", "1"), cc_mtt.vv.DataManager.selectedTournamentID = 0, this.onChangedPage(0), cc_mtt.vv.ConsoleLog.log("exitGame before", K.instance.listRoom.length, this.getSelfPlayStatus()), he.getInstance().end("exitGame", "1"), he.getInstance().start("exitGame", "2");
            const n = K.instance.listRoom[e];
            var o, a;
            (this.removeRoom(e, null == n ? void 0 : n.type, t), K.instance.removeRoomByIndex(e), this.removeWorldCallBack(e), this.removeHoldemReconnectCallBack(e), O.appConfig.isLandscapeLayout) || (null == (o = Y.instance._multipleGameTabButtons[e]) || o.reset(), null != n && n.type && (null == n ? void 0 : n.type) == Ze.HOLDEM && Y.instance.removeMttRoom(null == (a = n.data) || null == (a = a.Detail) ? void 0 : a.Id));
            he.getInstance().end("exitGame", "2"), he.getInstance().start("exitGame", "3"), !this.shouldShowHeader() && K.instance && K.instance.getMttRooms().length > 0 && this.pageView.scrollToPage(0, 0), this.updateRoomIndex(), this.updateHeader(!1), this.updateAllAddTableButton(), this.updateAllGameAlignment(), this.adaptWidget(this.node), this.pageView.isScrolling() || this.pageView.isAutoScrolling() || this.notifyMutlipleGameTabChangePage(this.pageView.getCurrentPageIndex()), cc_mtt.vv.ConsoleLog.log("exitGame after", K.instance.listRoom.length, this.getSelfPlayStatus()), O.MessageCenter.send("click_btn_exit_room"), he.getInstance().end("exitGame", "3")
        }
        exitReplayGame() {
            this.removeReplayRoom(0)
        }
        updateRoomIndex() {
            if (O.appConfig.isLandscapeLayout) this.setIndexsAfterUpdate();
            else {
                var e;
                let t = null == (e = Y.instance) ? void 0 : e._multipleGameTabButtons;
                if (!d(t)) return;
                const n = {};
                t.forEach((e => n[e._multipleGameIndex] = e));
                const o = K.instance.listRoom,
                    a = K.instance.getSortedRooms(),
                    i = [].concat(this._holdemRoom, this._roomCash);
                O.StringTools.mapOrder(o, a, "index", "index"), O.StringTools.mapOrder(i, a, "multipleGameIndex", "index");
                const s = (e, t, n) => {
                    let o = e[t];
                    e[t] = e[n], e[n] = o
                };
                let l = -1;
                for (let e = 0; e < i.length; e++) {
                    const t = i[e];
                    d(t) && (t instanceof M ? (l = this._holdemRoom.findIndex((e => e == t)), s(this._holdemRoom, l, e), s(this._room, l, e)) : null != t && t.getComponent("GameScene") && (l = this._roomCash.findIndex((e => e == t)), s(this._roomCash, l, e)))
                }
                let r = new Map;
                this._roomNodes.forEach(((e, t) => r.set(e, t))), O.StringTools.mapOrder(this._roomNodes, a, (e => {
                    if (d(e)) {
                        let t = e.getComponentInChildren(M);
                        if (d(t)) return t.multipleGameIndex;
                        let n = e.getComponent(ae);
                        if (d(n)) return n.multipleGameIndex
                    }
                    return r.get(e)
                }), "index"), Y.instance.updateRoomIndex(a), this.setIndexsAfterUpdate(), o.forEach(((e, t) => e.index = t)), i.splice(0, i.length), a.splice(0, a.length), this._featureChangePageIndex.forEach(((e, t) => {
                    this._featureChangePageIndex[t] = n[e]._multipleGameIndex
                }))
            }
        }
        setIndexsAfterUpdate() {
            this._holdemRoom.forEach(((e, t) => {
                d(e) && e.setMultipleGameIndex(t)
            })), this._room.forEach(((e, t) => {
                d(e) && e.setMultipleGameIndex(t)
            })), this._roomCash.forEach(((e, t) => {
                d(e) && (e.multipleGameIndex = t)
            })), this._roomNodes.forEach(((e, t) => {
                d(e) && this.pageScrollViews.length > t && d(this.pageScrollViews[t]) && (e.parent = this.pageScrollViews[t].content)
            }))
        }
        initGameSocket(e, t) {
            switch (cc_mtt.vv.ConsoleLog.log("initGameSocket before", e, JSON.stringify(R)), e) {
                case Ze.HOLDEM:
                    const {
                        holdem: e, mttPro: n
                    } = b, o = {
                        ...e.MessageId,
                        ...n.MessageId
                    };
                    let a = t == w.GAME_LEVEL_LIST_ID.SNG ? I.HOLDEM_SNG : I.HOLDEM_MTT,
                        i = R[a];
                    E.GameSocketConnectedOrReconnecting(t) && (a == I.HOLDEM_MTT ? i = R[a] = E.gameSocket : a == I.HOLDEM_SNG && (i = R[a] = E.gameSNGSocket), i.setReConnect()), i || (i = R[a] = new v(a, {
                        ...n,
                        ...e,
                        MessageId: o
                    }), a == I.HOLDEM_MTT ? E.gameSocket = i : a == I.HOLDEM_SNG && (E.gameSNGSocket = i), i.setReConnect())
            }
            cc_mtt.vv.ConsoleLog.log("initGameSocket", e, JSON.stringify(R))
        }
        showLoading(e = this.prefix, t = !1) {
            this.hideChildrenLoadingContainer(), super.showLoading(e, null, t)
        }
        hideLoading(e = this.prefix, t = !1) {
            super.hideLoading(e, t), this.showChildrenLoadingContainer()
        }
        connectGame(e, t, n) {
            switch (e) {
                case Ze.HOLDEM:
                    const {
                        holdem: e, mttPro: a
                    } = b;
                    e.MessageId, a.MessageId;
                    let i = R[n];
                    var o;
                    if (i && i.hasVerifyToken) null == (o = this._room[t]) || o.store.EnterRoom()
            }
        }
        setSelfHoldemReconnectCallBack() {
            v.setLoadingCallBack(this.onHoldemReconnectShowLoading, this.onHoldemReconnectHideLoading), v.onReconnectFail = this.onHoldemReconnectFail, v.onVerifyToken = this.onHoldemVerifyToken, v.onVerifyTokenEnd = this.onHoldemVerifyTokenEnd
        }
        clearSelfHoldemReconnectCallBack() {
            v.setLoadingCallBack(), v.onReconnectFail = null, v.onVerifyToken = null, v.onVerifyTokenEnd = null
        }
        setHoldemReconnectCallBack(e, t = null, n = null, o = null, a = null, i = null) {
            this._onHoldemReconnectShowLoading[e] = t, this._onHoldemReconnectHideLoading[e] = n, this._onHoldemReconnectFail[e] = o, this._onHoldemVerifyToken[e] = a, this._onHoldemVerifyTokenEnd[e] = i
        }
        removeHoldemReconnectCallBack(e) {
            this._onHoldemReconnectShowLoading.splice(e, 1), this._onHoldemReconnectHideLoading.splice(e, 1), this._onHoldemReconnectFail.splice(e, 1), this._onHoldemVerifyToken.splice(e, 1), this._onHoldemVerifyTokenEnd.splice(e, 1)
        }
        repeatLoginDialog(e) {
            var t;
            (E.hasInstance() && E.getInstance().close(!0, !0), E.destroyGameSockets(), E.hasShowLoginFailDialog || 20 == e.ErrorCode) || (E.hasShowLoginFailDialog = !0, null == (t = this.dialogController) || t.showDialogBox("ERROR_CODE_PKW.TITLE", "ERROR_CODE_PKW." + e.ErrorCode, !1, [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: () => {
                    E.hasShowLoginFailDialog = !1, E.logout()
                }
            }]), m.isPaused() && m.resume())
        }
        updateUserInfo(e) {
            cc_mtt.vv.DataManager.userData = e.UserData
        }
        setSelfWorldCallBack() {
            E.getInstance().setReConnect(), E.onRepeatLoginDialog = this.onWorldRepeatLoginDialog, E.onUpdateUserInfo = this.onWorldUpdateUserInfo, E.onBoardcastMessageEnvelope = this.onWorldBoardcastMessageEnvelope, E.setReconnectCallBack(this.onWorldReconnectShowLoading, this.onWorldReconnectHideLoading, this.onWorldReconnectFail, this.onWorldVerifyToken, this.onWorldVerifyTokenEnd), E.bindSocketMessage()
        }
        setWorldCallBack(e, t = null, n = null, o = null, a = null, i = null, s = null, l = null, r = null) {
            this._onWorldRepeatLoginDialog[e] = t, this._onWorldUpdateUserInfo[e] = n, this._onWorldBoardcastMessageEnvelope[e] = o, this._onWorldReconnectShowLoading[e] = a, this._onWorldReconnectHideLoading[e] = i, this._onWorldReconnectFail[e] = s, this._onWorldVerifyToken[e] = l, this._onWorldVerifyTokenEnd[e] = r
        }
        removeWorldCallBack(e) {
            this._onWorldRepeatLoginDialog.splice(e, 1), this._onWorldUpdateUserInfo.splice(e, 1), this._onWorldBoardcastMessageEnvelope.splice(e, 1), this._onWorldReconnectShowLoading.splice(e, 1), this._onWorldReconnectHideLoading.splice(e, 1), this._onWorldReconnectFail.splice(e, 1), this._onWorldVerifyToken.splice(e, 1), this._onWorldVerifyTokenEnd.splice(e, 1)
        }
        setWorldVerifyTokenEndCallback(e, t = null) {
            this._onWorldVerifyTokenEnd[e] = t
        }
        onCallBack(e, t, n = null) {
            if (t)
                for (let o = 0; o < t.length; o++) t[o] && t[o] instanceof Function && t[o](e, n)
        }
        onWorldCallBack(e, t = null) {
            if (e)
                for (let n = 0; n < e.length; n++) e[n] && e[n] instanceof Function && e[n](t)
        }
        getCurrentRoomId() {
            if (-1 == this._selectedTabIndex) return;
            let e = -1,
                t = this._selectedTabIndex;
            if (this._holdemRoom && d(this._holdemRoom[t]) && (e = this._holdemRoom[t].store.roomId), e <= 0) {
                let o = this._roomCash[t];
                var n;
                if (d(o)) e = null == (n = o.gameSceneInstance.room) ? void 0 : n.roomId
            }
            return e
        }
        getGameStartReminderPlayCurrent(e) {
            if (this._room)
                for (let t = 0; t < this._room.length; t++)
                    if (this._room[t] && this._room[t].store && this._room[t].store.tournamentId == e.TournamentId) return !0;
            return !1
        }
        broadcastMessageEnvelope(t) {
            switch (cc_mtt.vv.ConsoleLog.log("@@@@@ MultipleGame broadcastMessageEnvelope", t.TypeId, t), t.TypeId) {
                case 1e3: {
                    const e = b.commonProto.Broadcast_Message_Enter_Game.decode(t.Body);
                    this.broadcastMessageEnterMttGames(e);
                    break
                }
                case 1002: {
                    const e = b.commonProto.Broadcast_Message_Out_Game.decode(t.Body);
                    if (cc_mtt.vv.ConsoleLog.log("@@@@@ MultipleGame broadcastMessageEnvelope msg", e), F.selfTours.manualUpdateTournament({
                            TournamentId: e.TournamentId,
                            JoinStatus: e.JoinedStatus
                        }), se.isTournamentStarted(e)) {
                        K.instance.getMttRoom(e.TournamentId) || this.scheduleOnce((() => {
                            const t = F.selfTours.getTournamentById(e.TournamentId);
                            null != t && t.Category === b.commonProto.GAME_CATEGORY.SNG ? this.requestMultiTableByTournamentID_SNG(e.TournamentId) : this.requestMultiTableByTournamentID_MTT(e.TournamentId)
                        }), 1)
                    }
                    break
                }
                case 1004: {
                    const e = b.commonProto.Broadcast_Message_End_Game.decode(t.Body);
                    if (cc_mtt.vv.ConsoleLog.log("@@@@@ MultipleGame broadcastMessageEnvelope msg", e), e.TypeId == b.commonProto.GAME_CATEGORY.MTT || e.TypeId == b.commonProto.GAME_CATEGORY.SNG) {
                        F.selfTours.manualRemoveTournament(e.TournamentId);
                        const t = K.instance.getMttRoom(e.TournamentId);
                        t && (t.isWatching = !1)
                    }
                    break
                }
                case b.commonProto.BROADCAST_MESSAGE_EVENT_TYPE.Release_GAME_NOTICE:
                    const o = b.commonProto.Broadcast_Message_End_Game.decode(t.Body);
                    if (o.TypeId == b.commonProto.GAME_CATEGORY.MTT && this._room) {
                        for (let e = 0; e < this._room.length; e++) {
                            var n;
                            if (null != (n = this._room[e]) && n.store && this._room[e].store.tournamentId == o.TournamentId && (this._room[e].store.isGameEnd = !0, this._room[e].store.closeAllPopUp(), this._room[e].store.callPopUpBox("ERROR_CODE_PKW." + b.commonProto.ErrorCode.Mtt_Tournament_Release, (() => {
                                    cc_mtt.vv.ConsoleLog.log(`Popup click callback [${"ERROR_CODE_PKW."+b.commonProto.ErrorCode.Mtt_Tournament_Release}]`), this._room[e].store.reboundGameView(!0)
                                }), void 0, !0), t.Uuid)) {
                                const e = b.commonProto.UserUpdateBroadcastMsgRequest.create({
                                    Token: cc_mtt.vv.DataManager.token,
                                    Uuid: t.Uuid,
                                    Result: w.BROADCAST_MSG_STATUS.READ
                                });
                                D.requestUpdateBroadcastMsgResult(e).then((e => {
                                    cc_mtt.vv.ConsoleLog.log("MultipleGame broadcastMessageEnvelope requestUpdateBroadcastMsgResult", e)
                                }))
                            }
                        }
                        se.removeJoinedTournaments(o.TournamentId), F.selfTours.manualRemoveTournament(o.TournamentId)
                    }
                    break;
                case 3e3: {
                    let n = b.commonProto.Broadcast_Message_Events_RED_POCKET_NOTICE.decode(t.Body);
                    cc_mtt.vv.ConsoleLog.log("holdem redPocketNotice", n), cc_mtt.vv.ConsoleLog.log("$$$$$$$", n.Amount), this._room[e.currentMultipleGameIndex] && this._room[e.currentMultipleGameIndex].store && this._room[e.currentMultipleGameIndex].store.setRedPocketDialog(n);
                    break
                }
                case 3001: {
                    let e = b.commonProto.Broadcast_Message_Events_RED_POCKET_CAROUSEL.decode(t.Body);
                    cc_mtt.vv.ConsoleLog.log("holdem redPocketCarousel", e);
                    for (let t = 0; t < this._room.length; t++) !this.isReplay() && this._room[t] && this._room[t].store && this._room[t].store.onBroadcastRedPocketCarousel(e);
                    break
                }
                case 4507:
                    this.broadcastSngServerMaintenance();
                    break;
                case 4508: {
                    const e = b.commonProto.Broadcast_Message_Start_Game.decode(t.Body);
                    e && this.broadcastMessageEnterMttGames(e);
                    break
                }
            }
        }
        requestMultiTableByTournamentID_MTT(e) {
            D.requestMttMultiTable((t => {
                if (d(this, !0))
                    if (cc_mtt.vv.ConsoleLog.log("@@@@@ MultipleGame broadcastMessageEnvelope msg", e, t), O.appConfig.getGameConfig().enableMultiTableBar && F.selfTours.getPlayingTournaments().length > this.maxTabCount) q.checkAndShow(!1);
                    else
                        for (let n = 0; n < t.UserGameInfo.length; n++)
                            if (t.UserGameInfo[n].TournamentId == e) {
                                this.checkEnterGame(t.UserGameInfo[n]);
                                break
                            }
            }), (() => {
                cc_mtt.vv.ConsoleLog.log("MultipleGame broadcastMessageEnvelope requestMttMultiTable error")
            }));
            const t = F.selfTours.getTournamentById(e),
                n = {
                    TournamentId: e,
                    MttTournamentStatus: b.commonProto.MTT_GAME_STATUS.STARTED
                };
            void 0 !== (null == t ? void 0 : t.Category) && null !== (null == t ? void 0 : t.Category) || (n.Category = b.commonProto.GAME_CATEGORY.MTT), void 0 !== (null == t ? void 0 : t.GameMode) && null !== (null == t ? void 0 : t.GameMode) || (n.GameMode = b.commonProto.MTT_GAME_MODE.NLH), F.selfTours.manualUpdateTournament(n)
        }
        requestMultiTableByTournamentID_SNG(e) {
            D.requestJSNGMultiTable((t => {
                cc_mtt.vv.ConsoleLog.log("MultipleGame broadcastMessageEnvelope requestMttMultiTable", e, t);
                const n = F.selfTours.getTournamentById(e),
                    o = {
                        TournamentId: e,
                        MttTournamentStatus: b.commonProto.MTT_GAME_STATUS.STARTED
                    };
                if (void 0 !== (null == n ? void 0 : n.Category) && null !== (null == n ? void 0 : n.Category) || (o.Category = b.commonProto.GAME_CATEGORY.SNG), void 0 !== (null == n ? void 0 : n.GameMode) && null !== (null == n ? void 0 : n.GameMode) || (o.GameMode = b.commonProto.MTT_GAME_MODE.NLH), F.selfTours.manualUpdateTournament(o), d(this, !0))
                    if (O.appConfig.getGameConfig().enableMultiTableBar && F.selfTours.getPlayingTournaments().length > this.maxTabCount) q.checkAndShow(!1);
                    else
                        for (let n = 0; n < t.UserGameInfo.length; n++)
                            if (t.UserGameInfo[n].TournamentId == e) {
                                this.checkEnterGame(t.UserGameInfo[n]);
                                break
                            }
            }), (() => {
                cc_mtt.vv.ConsoleLog.log("MultipleGame broadcastMessageEnvelope requestSngMultiTable error")
            }))
        }
        broadcastMessageEnterMttGames(e) {
            e.TypeId == b.commonProto.GAME_CATEGORY.MTT ? this.requestMultiTableByTournamentID_MTT(e.TournamentId) : e.TypeId == b.commonProto.GAME_CATEGORY.SNG && this.requestMultiTableByTournamentID_SNG(e.TournamentId)
        }
        showChildrenLoadingContainer() {
            if (this._hasShowChildrenLoading = !0, this._room)
                for (let e = 0; e < this._room.length; e++) this._room[e] && this._room[e].showLoadingContainer && this._room[e].showLoadingContainer();
            this.hall && this.hall.showLoadingContainer()
        }
        hideChildrenLoadingContainer() {
            if (this._hasShowChildrenLoading = !1, this._room)
                for (let e = 0; e < this._room.length; e++) this._room[e] && this._room[e].hideLoadingContainer && this._room[e].hideLoadingContainer();
            this.hall && this.hall.hideLoadingContainer()
        }
        showDialogBox(e, t, n, o, a, i = null, s = null, l = "") {
            if (this._room)
                for (let r = 0; r < this._room.length; r++) this._room[r] && this._room[r].multipleGameType == e && null != this._room[r].dialogController && this._room[r].dialogController.showDialogBox(t, n, o, a, i, s, l)
        }
        hideDialogBox(e, t = "") {
            if (e == Ze.HOLDEM && this._room)
                for (let n = 0; n < this._room.length; n++) this._room[n] && this._room[n].multipleGameType == e && this._room[n].dialogController.hideDialogBox(t)
        }
        hideAllDialogBox(e, t = "") {
            if (e == Ze.HOLDEM && this._room)
                for (let e = 0; e < this._room.length; e++) this._room[e].dialogController.hideDialogBox(t)
        }
        checkLoadPrefabWithRoomIndex(e) {
            if (!O.appConfig.isLandscapeLayout && (d(this._roomNodes[e]) || e < 0 || e >= K.instance.listRoom.length)) {
                if (j.hasInstance()) {
                    let t = {
                        roomIndex: e,
                        multipleRoomLength: K.instance.listRoom.length
                    };
                    j.getInstance().trace(Z.MttIssues, ee.InitRoomIndexInvalid, t)
                }
                return !1
            }
            return !0
        }
        actualLoadPrefab(t) {
            var n, o, a;
            e.currentMultipleGameIndex = t, this.cashGamesComponentsContainer && (this.cashGamesComponentsContainer.active = !1), cc_mtt.vv.DataManager.currentGameInfo = K.instance.listRoom[t].data, this._roomNodes[t] = g(this.roomPrefab), this._roomNodes[t].parent = this.pageScrollViews[t].content, this._holdemRoom[t] = this._room[t] = this._roomNodes[t].getComponentInChildren(M), null == (n = this._holdemRoom[t]) || n.setMultipleGameIndex(t), null == (o = this._room[t]) || o.setMultipleGameIndex(t), this.hideHall(t), this._room[t].startGame(), cc_mtt.vv.ConsoleLog.log("this._hasShowChildrenLoading", this._hasShowChildrenLoading), this._hasShowChildrenLoading || this._room[t].hideLoadingContainer(), null == (a = j.getInstance()) || a.addEventToSpan(Z.SwitchLoadingIssue, "MultipleGame_actualLoadPrefab()")
        }
        actualLoadPrefabCashGame(t, n) {
            e.currentMultipleGameIndex = t, this.cashGamesComponentsContainer && (this.cashGamesComponentsContainer.active = !0);
            let o = this;
            if (!this._roomNodes[t]) {
                let e = g(this.cashGameRoomPrefab);
                e.addComponent("BlockAdaptWidget");
                let a = e.getComponent("GameScene");
                J.addInstance(a.node, n), this._roomNodes[t] = e, e.parent = this.pageScrollViews[t].content, a ? (this.menuScript || this.checkAndInitMenuPanel(), this.menuScript.setGameScene(a), a.setGameManager(o), this._roomCash[t] = a, this._roomCash[t].multipleGameIndex = t) : T("Can not find GameScene in roomPrefab")
            }
        }
        setReplayNodeParent(e, t) {
            e.parent = this.replayRoomContainer
        }
        actualLoadReplayPrefab(t, n) {
            if (this._replayRoomNode = g(this.replayRoomPrefab), !d(this._replayRoomNode)) return;
            e.currentMultipleGameIndex = n, this.setReplayNodeParent(this._replayRoomNode, n), this._replayRoom = this._replayRoomNode.getComponent(x), this._holdemReplayPrefab = this._replayRoom;
            let o = n;
            this._holdemReplayPrefab.setPage(cc_mtt.vv.DataManager.replayRecord, ((e, t) => {
                this.removeReplayRoom(o)
            }), t)
        }
        isTabSelected(e) {
            return -1 != e && this._selectedTabIndex == e
        }
        setColorSelect(e) {
            var t;
            O.appConfig.isLandscapeLayout || (null == (t = Y.instance) || t._multipleGameTabButtons[e].setCardsSelected(!0))
        }
        progressShowCloseTableButton(e) {
            var t, n;
            if (O.appConfig.isLandscapeLayout) return;
            let o = null == (t = Y.instance) ? void 0 : t._multipleGameTabButtons[e].getStatus();
            var a;
            if ((null == (n = Y.instance) ? void 0 : n._multipleGameTabButtons[e].getActiveCloseTable()) && !this.checkRoomEndGame(e)) null == (a = Y.instance) || a._multipleGameTabButtons[e].setActiveCloseTable(!1);
            else if (o != y.EMPTY && this.checkRoomEndGame(e)) {
                var i;
                null == (i = Y.instance) || i._multipleGameTabButtons[e].setActiveCloseTable(!0)
            }
        }
        resetStatusAllTabBtn(e) {
            var t;
            if (null == this._room) return;
            if (O.appConfig.isLandscapeLayout) return;
            let n = null == (t = Y.instance) ? void 0 : t.subHeader;
            if (n)
                for (let t = 0; t < n.length; t++)
                    if (t < this._room.length + 1) {
                        var o, a;
                        if (e != t) null == (a = Y.instance) || a._multipleGameTabButtons[t].setActiveCloseTable(!1);
                        null == (o = Y.instance) || o._multipleGameTabButtons[t].setCardsSelected(!1)
                    }
        }
        checkRoomEndGame(e) {
            if (null == this._room || !this._room[e]) return !1;
            let t = this._room[e].store;
            if (!t) return !1;
            const n = t.getSelfPlayer_ts();
            return t.isSngGame() && n ? t.isHeroOut || n.isSngPlayerGameOver() : t.isHeroOut
        }
        isOnMttGamePage() {
            let e = this.pageView.getCurrentPageIndex();
            return K.instance.isMttRoom(e)
        }
        onChangedPage(e, t = !0, n = !1) {
            if (cc_mtt.vv.ConsoleLog.log("MultipleGame onChangedPage", e), K.instance.listRoom[e]) this.hideHall(e), (this.pageView.getCurrentPageIndex() !== e || this.firstTimePageChanged) && (this.pageView.scrollToPage(e, .3), this.firstTimePageChanged = !1), S.updateContentWidget(this.pageView.content, e), this._lastTabIndexBeforeShowHall = e;
            else if (!this._hasShowHall) {
                if (e >= 0 && K.instance.listRoom.length > e && (this._room[e] || Y.instance._rooms[e])) {
                    var o;
                    const t = K.instance.listRoom.map((e => {
                            if (e) {
                                if (e.type === Ze.HOLDEM) return K.instance.getMttRoomId(e.data).toString();
                                if (e.type === Ze.CASH) return e.data.gameId + " " + e.data.roomId
                            }
                            return "-1"
                        })).join(","),
                        n = Y.instance._rooms.map((e => {
                            if (e) {
                                if (e instanceof X) return e.tournamentId.toString();
                                if (e instanceof $) return e.gameId + " " + e.roomId
                            }
                            return "-1"
                        })).join(",");
                    null == (o = j.getInstance()) || o.traceEvent(Z.CashGameIssues, "AsynchronizedMultipleCashGameMobileIndex", {
                        index: e,
                        MultipleRoomManager: t,
                        MultipleGame: this._room.map((e => e ? 1 : 0)).join(","),
                        FakeMultipleGame: n,
                        roomManager: O.roomManager.rooms.map((e => e ? 1 : 0)).join(",")
                    })
                }
                O.appConfig.isWebApp ? t && ie.getInstance().sendShowDownloadPopup() : this.showHall(e, n)
            }
        }
        onChangedPageEnd(e) {
            cc_mtt.vv.ConsoleLog.log("MultipleGame onChangedPageEnd", e), this.setHeader(e), this.notifyMutlipleGameTabChangePage(e), K.instance.listRoom[e] ? (this._lastTabIndexBeforeShowHall = e, this.hideHall(e)) : this._hasShowHall || this.showHall(e), O.MessageCenter.send(O.Enum.MessageCenterAction.WindowFocusChanged, e + 1)
        }
        notifyMutlipleGameTabChangePage(e) {
            if (this._holdemRoom)
                for (let n = 0; n < this._holdemRoom.length; n++) {
                    var t;
                    if (this._holdemRoom) null == (t = this._holdemRoom[n]) || t.onMultipleGameChangePage(e)
                }
        }
        getSelectedTabButton() {
            var e;
            return -1 != this._selectedTabIndex ? null == (e = Y.instance) ? void 0 : e._multipleGameTabButtons[this._selectedTabIndex] : null
        }
        hasAlreadyFeatureChangePage() {
            return this._featureChangePageIndex.length > 0
        }
        isSelfFeatureChangePageIndex(e) {
            return this._featureChangePageIndex.indexOf(e) >= 0
        }
        resetFeatureChangePageIndex(e) {
            let t = this._featureChangePageIndex.indexOf(e);
            t >= 0 && this._featureChangePageIndex.splice(t, 1)
        }
        isSelectedGameNeedFeatureChangePage() {
            let e = this.getSelectedTabButton();
            return cc_mtt.vv.db("isSelectedGameNeedFeatureChangePage check : index : " + e._multipleGameIndex), e && e.needFeatureChangePage
        }
        featureChangePage(e) {
            var t, n;
            cc_mtt.vv.ConsoleLog.log("MultipleGame featureChangePage", e, this.isSelectedGameNeedFeatureChangePage());
            let o = this.getSelectedTabButton()._multipleGameIndex,
                a = this.isSelfFeatureChangePageIndex(e),
                i = !(null == (t = Y.instance) || !t._multipleGameTabButtons[e]) && (null == (n = Y.instance) ? void 0 : n._multipleGameTabButtons[e].getStatus()) == y.SITTING_OUT;
            cc_mtt.vv.db("featureChangePage : index : " + e + " selected tab : " + o + " isCurrentTabAdded : " + a), a || (0 == this._featureChangePageIndex.length && e != o && !i && K.instance.listRoom[e] && this.onChangedPage(e), cc_mtt.vv.db("@@@@@@@@@@ ADDED ::: " + e), this._featureChangePageIndex.push(e))
        }
        CheckAndChangePage(e) {
            if (-1 == this._selectedTabIndex) return;
            let t = -1,
                n = this._selectedTabIndex;
            if (this._holdemRoom && d(this._holdemRoom[n]) && (t = this._holdemRoom[n].store.roomId), t <= 0) {
                let e = this._roomCash[n];
                var o;
                if (d(e)) t = null == (o = e.gameSceneInstance.room) ? void 0 : o.roomId
            }
            if (t != e || 0 == this._featureChangePageIndex.length) return;
            let a = this._featureChangePageIndex[0];
            K.instance.listRoom[a] ? this.onChangedPage(a) : this.resetFeatureChangePageIndex(a)
        }
        onClickChangedPage(e, t) {
            let n = parseInt(t);
            this.onChangedPage(n)
        }
        setBackButtonAction(e) {
            this._backButtonAction = e
        }
        updateBackground(e) {
            if (e == Ze.HOLDEM && this._holdemRoom)
                for (let e = 0; e < this._holdemRoom.length; e++) {
                    var t;
                    null == (t = this._holdemRoom[e]) || t.setBackground(!0)
                }
        }
        updateCard(e) {
            if (this._holdemRoom)
                for (let n = 0; n < this._holdemRoom.length; n++) {
                    var t;
                    null == (t = this._holdemRoom[n]) || t.updateCard(e)
                }
        }
        updateAllAddTableButton() {
            if (this._holdemRoom)
                for (let e = 0; e < this._holdemRoom.length; e++) this._holdemRoom[e] && this._holdemRoom[e].updateAddTableButton()
        }
        onClickBackButton() {
            if (this._backButtonAction && this._backButtonAction instanceof Function) this._backButtonAction();
            else {
                let e = this._lastTabIndexBeforeShowHall; - 1 != e && this.onChangedPage(e), this.hideHall()
            }
        }
        connect(e = "unknown") {
            this.setSelfWorldCallBack(), this.setSelfHoldemReconnectCallBack();
            const t = E.getInstance();
            !t || t.isConnected() || t.isReconnecting || t.connect("multipleGame_connect_" + e)
        }
        reconnectMttWorldServer(e) {
            cc_mtt.vv.ConsoleLog.log("MultipleGame reconnectMttWorldServer", cc_mtt.vv.DataManager.token, d(this.node)), d(this.node) && (clearTimeout(this._retryTimeout), this.connect(e))
        }
        updateSubHeader() {
            const e = this.headerContainer.parent.getComponent(s),
                t = O.tools.calcTopOffsetToMove(this.OFFSET_Y_DEFAULT);
            t && (e.top = t, O.resMgr.adaptWidget(e.node, !0))
        }
        updateVisibleTableBar() {
            var e;
            let t = null == (e = Y.instance) ? void 0 : e.subHeader;
            if (null == this._room || !t) return;
            let n = this._room.filter((e => d(e, !0))).length + this._roomCash.filter((e => d(e, !0))).length,
                o = new Set;
            for (let e = 0; e < this._room.length; e++) d(this._room[e], !0) && o.add(this._room[e].multipleGameIndex);
            for (let e = 0; e < this._roomCash.length; e++) d(this._roomCash[e], !0) && o.add(this._roomCash[e].multipleGameIndex);
            let a = 0;
            for (let e = 0; e < t.length; e++) {
                var i;
                let s = null == (i = Y.instance) ? void 0 : i._multipleGameTabButtons[e];
                if (s)
                    if (o.has(e)) s.show(), a++;
                    else {
                        let e = this.maxTabCount;
                        O.appConfig.isWebApp && (e = e < (null == t ? void 0 : t.length) ? null == t ? void 0 : t.length : e), a < n + 1 && n + 1 <= e ? (s.show(), a++) : s.hide()
                    }
            }
            this.pageView.limitScrollToPageIdxHorizontal = n - 1, this.updateSubHeader()
        }
        setTriggerStartTime(e) {
            var t;
            null == (t = Y.instance) || null == (t = t._multipleGameTabButtons[e]) || t.setTriggerStartTime(!0)
        }
        onHideFullScreenPanel() {
            this.shouldMoveHeaderToRootView() && this.moveHeaderContainerToRoot()
        }
        moveHeaderContainerToHoldemRoomView() {
            if (null == this.headerContainer) return;
            let e = this._selectedTabIndex > -1 ? this._selectedTabIndex : 0;
            if (this._holdemRoom && d(this._holdemRoom[e])) {
                let t = this._holdemRoom[e].getTableBarContainer();
                d(t) && (this.headerContainer.parent = t, this.updateSubHeader())
            } else if (this._roomCash && d(this._roomCash[e])) {
                let t = this._roomCash[e].tableBarContainer;
                d(t) && (this.headerContainer.parent = t)
            }
        }
        moveHeaderContainerToRoot() {
            null != this.rootHeaderContainer && null != this.headerContainer && (this.headerContainer.parent = this.rootHeaderContainer)
        }
        isCurrentRoom(e) {
            let t = this._selectedTabIndex > -1 ? this._selectedTabIndex : 0;
            if (this._holdemRoom && d(this._holdemRoom[t])) return this._holdemRoom[t].store.roomId == e;
            var n;
            if (this._roomCash && d(this._roomCash[t])) return (null == (n = this._roomCash[t].gameSceneInstance.room) ? void 0 : n.roomId) == e;
            return !1
        }
        onMultiTableBarTableSelected() {
            if (!d(this, !0)) return;
            const e = F.selfTours.getSelectedTournamentMultiTableBar(),
                t = [];
            let n = this._room;
            for (let i = 0; i < n.length; i++) {
                var o, a;
                if (this._room[i] && !e.includes(null == (o = n[i]) || null == (o = o.store) ? void 0 : o.tournamentId)) t.push(null == (a = n[i]) || null == (a = a.store) ? void 0 : a.tournamentId)
            }
            t.forEach((e => {
                n = this._room;
                const t = n.findIndex((t => {
                    var n;
                    return (null == t || null == (n = t.store) ? void 0 : n.tournamentId) == e
                }));
                t >= 0 && this.exitGame(t)
            }));
            const i = F.selfTours.getPlayingTournaments();
            let s = [];
            if (O.appConfig.isWebApp) {
                var l;
                let t = null == (l = K.instance) ? void 0 : l.selectedRoomInfo,
                    o = null;
                t && (t.gameListId == w.GAME_LEVEL_LIST_ID.SNG ? o = i.find((e => e.Category == b.commonProto.GAME_CATEGORY.SNG)) : t.gameListId == w.GAME_LEVEL_LIST_ID.MTT && (o = i.find((e => {
                    var n;
                    return (null == e ? void 0 : e.TournamentId) == (null == (n = t.data.Detail) ? void 0 : n.Id)
                }))), o && s.push(o));
                let a = i.filter((t => {
                    var a;
                    return e.includes(null == t ? void 0 : t.TournamentId) && !n.some((e => {
                        var n;
                        return (null == e || null == (n = e.store) ? void 0 : n.tournamentId) == (null == t ? void 0 : t.TournamentId)
                    })) && !(o && (null == (a = o) ? void 0 : a.TournamentId) == (null == t ? void 0 : t.TournamentId))
                }));
                if (s.length > 0 && a.length > 0) {
                    if (s.length + a.length > this.maxTabCount) {
                        let t = null == a ? void 0 : a.findIndex((e => (null == e ? void 0 : e.TournamentId) == o.TournamentId)),
                            i = null;
                        t > -1 ? (i = a[t], a.splice(t, 1)) : (i = a[a.length - 1], a.splice(a.length - 1, 1));
                        const s = n.findIndex((e => {
                            var t;
                            return (null == e || null == (t = e.store) ? void 0 : t.tournamentId) == i.TournamentId
                        }));
                        s >= 0 && this.exitGame(s), e.includes(i.TournamentId) && e.splice(e.indexOf(i.TournamentId), 1), e.includes(o.TournamentId) || e.splice(0, 0, o.TournamentId), F.selfTours.setSelectedTournamentMultiTableBar(e)
                    }
                    s.push(...a)
                }
            } else s = i.filter((t => e.includes(null == t ? void 0 : t.TournamentId)));
            s.length > 0 && this.checkEnterGames(s, 0)
        }
        onCloseCashRoom(e, t = !0) {
            if (!d(this, !0) || !e) return;
            const n = K.instance.getRoomIndex(e);
            n >= 0 && this.exitGame(n, t)
        }
        static isGameMode_SNG() {
            var e, t;
            if (null != (e = K.instance) && e.selectedRoomInfo && (null == (t = K.instance) ? void 0 : t.selectedRoomInfo.type) == Ze.HOLDEM) {
                var n;
                return (null == (n = K.instance) ? void 0 : n.selectedRoomInfo).gameListId === w.GAME_LEVEL_LIST_ID.SNG
            }
            return cc_mtt.vv.DataManager.gameMode == w.GAME_LEVEL_LIST_ID.SNG
        }
        isReplay() {
            return d(this._replayRoomNode)
        }
        get SNG() {
            return this._sngManager || (this._sngManager = new oe), this._sngManager
        }
        static startSngSingleGame(e, t = 0, n = null) {
            let o = w.GAME_LEVEL_LIST_ID.SNG,
                a = t,
                i = b.commonProto.MTT_GAME_MODE.NLH;
            (new P).callGameView(i, o, a, 0, 0, !1, 0, n, !1, e)
        }
        static startSngGamesFromBuyin(t, n = 0, o = 1, a = null) {
            if (t && 0 != t.length) {
                let o = 0,
                    i = t.length;
                t.forEach((t => {
                    let s = o++;
                    e.startSngSingleGame(t, n, (() => {
                        s === i - 1 && (null == a || a())
                    }))
                })), re.setSelectedSngGameInfo(t[t.length - 1])
            } else if (this.openAllSngGames(), j.hasInstance()) {
                let e = {
                    levelID: n,
                    userID: cc_mtt.vv.DataManager.userId
                };
                j.getInstance().trace(Z.SNG_Global_Spins, te.StartGamesMissingRoomIds, e)
            }
        }
        backToAllSngGames(e = 0, t = 0, n = null) {
            D.requestJSNGMultiTable((o => {
                let a = !1,
                    i = e > 0;
                if (o.UserGameInfo && o.UserGameInfo.length > 0 && (a = !0), t > 0 && (!o.UserGameInfo || o.UserGameInfo.length < t) && j.hasInstance()) {
                    var s;
                    let e = null == (s = K.instance) || null == (s = s.getSngRooms()) ? void 0 : s.length,
                        n = o.UserGameInfo ? o.UserGameInfo.length : 0,
                        a = {
                            backendGamesCount: n,
                            buyinCount: t,
                            clientGamesCount: e,
                            gamesCountMatch: e + t >= n
                        };
                    j.getInstance().trace(Z.SNG_Global_Spins, te.StartGamesNotMatch, a), o.UserGameInfo || j.getInstance().trace(Z.SNG_Global_Spins, te.StartGamesEmpty)
                }
                if (this.setSelfPlayStatus(w.GAME_LEVEL_LIST_ID.SNG, a), a) {
                    let e = () => {
                        this._joinedSngTournamentsID = Array.from(o.UserGameInfo, (e => e.RoomId)), null == n || n()
                    };
                    this.checkEnterGames(o.UserGameInfo, 0, O.appConfig.getGeneralConfig().multiWindowEnabled, (() => {
                        O.appConfig.getGeneralConfig().multiWindowEnabled && i && this.reCheckOpenSngGames(o.UserGameInfo)
                    })), null == e || e()
                } else O.appConfig.getGeneralConfig().multiWindowEnabled && i && this.reCheckOpenSngGames(), null == n || n()
            }), (() => {
                O.MessageCenter.send(ne.GameStartError), null == n || n()
            }))
        }
        reCheckOpenSngGames(e = null) {
            e && e.length > 0 && e.forEach((t => {
                var n;
                if (-1 == (null == (n = K.instance) ? void 0 : n.getRoomIndex(t)) && (this.checkEnterGame(t), j.hasInstance())) {
                    var o;
                    let n = {
                        gameInfosCount: e.length,
                        sngGamesCount: null == (o = K.instance) || null == (o = o.listRoom) ? void 0 : o.length,
                        gameInfo: JSON.stringify(t)
                    };
                    j.getInstance().trace(Z.SNG_Global_Spins, te.StartGamesNotEnoughWindows, n)
                }
            }))
        }
        startSingleSngGame(t, n = 0, o = 1, a = null) {
            let i = new Map,
                s = 0;
            t.UserGameInfo.forEach((e => {
                e.SngMttLevelId != n && e.RoomId != n || i.set(s++, e)
            }));
            let l = new Map;
            i.forEach(((e, t) => {
                this._joinedSngTournamentsID.includes(e.RoomId) || l.set(t, e)
            }));
            let r = null;
            if (l.size > 0 && l.size < i.size) r = l.values().next().value;
            else if (i && i.size > 0) {
                const e = Array.from(i).sort(((e, t) => t[1].RoomId - e[1].RoomId));
                r = e[0][1]
            }
            if (null != r) this.checkEnterGame(r, (() => {
                --o > 0 ? (this._joinedSngTournamentsID.indexOf(r.RoomId) < 0 && this._joinedSngTournamentsID.push(r.RoomId), this.startSingleSngGame(t, n, o, a)) : null == a || a()
            }));
            else {
                if (e.openAllSngGames(), j.hasInstance()) {
                    let e = {
                        data: t ? JSON.stringify(t) : "unknown",
                        selectedTournamentID: n,
                        buyinCount: o,
                        onFinish: null != a,
                        mapLength: i ? i.size : 0,
                        filteredMapLength: l ? l.size : 0
                    };
                    j.getInstance().trace(Z.SNG_Global_Spins, te.StartSingleGameFailed, e)
                }
                null == a || a()
            }
        }
        removeJoinedSngTournamentID(e) {
            const t = this._joinedSngTournamentsID.findIndex((t => t == e));
            t >= 0 && this._joinedSngTournamentsID.splice(t, 1)
        }
        static openAllSngGames() {
            e.instance ? e.instance.backToAllSngGames() : D.requestJSNGMultiTable((t => {
                let n = !1;
                t.UserGameInfo && t.UserGameInfo.length > 0 && (n = !0), n && t.UserGameInfo.forEach((t => {
                    e.startSngSingleGame(t.RoomId, t.SngMttLevelId)
                }))
            }), (() => {
                O.MessageCenter.send(ne.GameStartError)
            }))
        }
        broadcastSngServerMaintenance() {
            this.hasSngRoomRetain().then((e => {
                if (this._room)
                    for (let e = 0; e < this._room.length; e++) {
                        var t;
                        let n = this._room[e];
                        null != n && null != (t = n.store) && t.isSngGame() && 0 == n.store.isSngRoomExistOnServer && n.store.showSngServerMaintenancePopup()
                    }
            })).catch((e => {
                O.appConfig.isLandscapeLayout || this.showMttGameErrorDialog()
            }))
        }
        hasSngRoomRetain() {
            return new Promise(((e, t) => {
                let n = !1;
                D.requestJSNGMultiTable((o => {
                    if (this._room) {
                        for (let e = this._room.length - 1; e >= 0; e--) {
                            let t = this._room[e];
                            if (null != t && t.store) {
                                t.store.isSngRoomExistOnServer = !1;
                                for (let e = 0; e < o.UserGameInfo.length; e++) t.store && t.store.roomId == o.UserGameInfo[e].TournamentId && (t.store.isSngRoomExistOnServer = !0, n = !0)
                            }
                        }
                        e(n)
                    } else t()
                }), (() => {
                    t()
                }))
            }))
        }
        checkSngRoomsStatus() {
            if (!O.appConfig.isLandscapeLayout && this._room)
                for (let t = 0; t < this._room.length; t++) {
                    var e;
                    let n = this._room[t];
                    null != n && null != (e = n.store) && e.isSngGame() && (0 == n.store.isSngRoomExistOnServer || n.store.isSngGameReleased()) && n.store.removeSngTournament()
                }
        }
        logToNRAllNeededIndex(e) {
            if (j.IsActive()) try {
                var t, n, o, a, i, s;
                let l = {
                    listRoom: null == (t = K.instance) || null == (t = t.listRoom) ? void 0 : t.map((e => ({
                        type: null == e ? void 0 : e.type,
                        index: null == e ? void 0 : e.index
                    }))),
                    multipleRoomLength: null == (n = K.instance) || null == (n = n.listRoom) ? void 0 : n.length,
                    holdemRoomIndexs: null == (o = this._holdemRoom) ? void 0 : o.map((e => null == e ? void 0 : e.multipleGameIndex)),
                    holdemRoomIds: null == (a = this._holdemRoom) ? void 0 : a.map((e => null == e ? void 0 : e._roomId)),
                    cashRoomIndexs: null == (i = this._roomCash) ? void 0 : i.map((e => null == e ? void 0 : e.multipleGameIndex)),
                    cashRoomIds: this._roomCash.map((e => {
                        var t, n;
                        return (null == e || null == (t = e.gameDataInstance) || null == (t = t.tRoomData) ? void 0 : t.u32GameID) + "-" + (null == e || null == (n = e.gameDataInstance) || null == (n = n.tRoomData) ? void 0 : n.u32RoomId)
                    })),
                    fakeMultipleRoomIndexs: null == Y || null == (s = Y.instance) || null == (s = s._rooms) ? void 0 : s.map((e => null == e ? void 0 : e.tabIndex))
                };
                j.getInstance().trace(Z.MttIssues, e, {
                    attr: JSON.stringify(l)
                })
            } catch (e) {
                T(e)
            }
        }
    }).currentMultipleGameIndex = 0, Ke._instance = null, we = t((ye = Ke).prototype, "replayRoomPrefab", [me], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pe = t(ye.prototype, "replayRoomContainer", [ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ke = t(ye.prototype, "pageView", [ue], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), De = t(ye.prototype, "pageScrollViews", [ge], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Ae = t(ye.prototype, "headerContainer", [_e], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Be = t(ye.prototype, "rootHeaderContainer", [Te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), He = t(ye.prototype, "gameContainerWidget", [pe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xe = t(ye.prototype, "gameContainerContentWidget", [fe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ne = t(ye.prototype, "gameContainerPagesWidget", [Ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Oe = t(ye.prototype, "hallContainer", [Se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), We = t(ye.prototype, "backButton", [Ge], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ve = t(ye.prototype, "menuButton", [Me], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ue = t(ye.prototype, "menu_Panel_prefab", [Ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Fe = t(ye.prototype, "menuNewIcon", [ve], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qe = t(ye.prototype, "ruleDiscription_panel_prefab", [Ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ze = t(ye.prototype, "changeCard_panel_prefab", [Re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Je = t(ye.prototype, "cashGamesComponentsContainer", [be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Le = ye)) || Le));
    o._RF.pop()
}