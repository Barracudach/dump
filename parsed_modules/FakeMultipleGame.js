import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as _ from "./cc.js";
import * as M from "./cc.js";
import * as b from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as i from "./cc.js";
import * as T from "./cc.js";
import * as S from "./cv.js";
import * as R from "./MttHall.js";
import * as I from "./MultiTableBarSelector.js";
import * as H from "./mttController.js";
import * as G from "./mttconfig.js";
import * as k from "./MTTConnector.js";
import * as B from "./httpApis.js";
import * as v from "./Pb.js";
import * as L from "./websocket.js";
import * as y from "./websocket.js";
import * as A from "./worldWebsocket.js";
import * as O from "./holdemRoom.js";
import * as D from "./FakeHoldemRoom.js";
import * as N from "./MultipleGame.js";
import * as P from "./MultipleGame.js";
import * as F from "./MultipleGameTabButton.js";
import * as w from "./MultipleRoomManager.js";
import * as V from "./FakeCashRoom.js";
import * as W from "./RoomData.js";
import * as x from "./BlockAdaptWidget.js";
import * as U from "./SngEvent.js";
import * as Y from "./MultipleGameJsng.js";
import * as q from "./MessageBroker.js";
import * as J from "./MttItemHelper.js";
import * as z from "./FullscreenController.js";
import * as j from "./Enum.js";
import * as K from "./Enum.js";

function main() {
    var $, Q, X, Z, ee, te, oe, ne, ie, ae, se, le, re, he, de;
    n._RF.push({}, "ecc64cVuC1IdLYi8Mt1/07f", "FakeMultipleGame", void 0);
    const {
        ccclass: ce,
        property: me
    } = l;
    e("default", ($ = me(i), Q = me(i), X = me(a), Z = me(a), ee = me([a]), te = me(i), ce(((de = class e extends r {
        constructor(...t) {
            super(...t), this.OFFSET_Y_DEFAULT = 126, this.TABLE_BAR_H = 96, this.TABLE_BAR_MARGIN = 39, this.OFFSET_Y_TO_MOVE = this.TABLE_BAR_H + this.TABLE_BAR_MARGIN, this.BG_TOP_H = 252, this.RIGHT_TOP_Y_OFFSET = 132, this.PATH_FIND_VIEW_NODE = "HallPokerView", this.PATH_BG_TOP_IMG_NODE = "bg_top_img", this.PATH_TOP_RIGHT_BAR_NODE = "New Node", this.OFFSET_X_TO_MOVE_HEADER = 30, o(this, "roomPrefab", ie, this), o(this, "cashRoomPrefab", ae, this), o(this, "headerContainer", se, this), o(this, "header", le, this), o(this, "subHeader", re, this), o(this, "multipleGameTabButtonPrefab", he, this), this._findViewNodeHallScene = null, this._hallSceneNode = null, this._bgTopImageHallScene = null, this._topRightNodeHallScene = null, this.selectedGameInfo = 0, this.isInit = !1, this.isInitHoldem = !1, this.isInitCash = !1, this._rooms = [], this._roomNodes = [], this._multipleGameTabButtons = [], this._onHoldemReconnectShowLoading = [], this._onHoldemReconnectHideLoading = [], this._onHoldemReconnectFail = [], this._onHoldemVerifyToken = [], this._onHoldemVerifyTokenEnd = [], this._onWorldRepeatLoginDialog = [], this._onWorldUpdateUserInfo = [], this._onWorldBoardcastMessageEnvelope = [], this._onWorldReconnectShowLoading = [], this._onWorldReconnectHideLoading = [], this._onWorldReconnectFail = [], this._onWorldVerifyToken = [], this._onWorldVerifyTokenEnd = [], this._imporkerHall = null, this._featureChangePageIndex = [], this._selectedCashRooms = [], this._logTimes = 0, this._retryTimeout = null, this._retryInterval = 3e3, this._startProcessFinishedCount = 0, this._isRegisterCallback = !1, this.isHoldemDataReady = !1, this.preStartMttGame = e => {
                S.appConfig.getGameConfig().enableMultiTableBar && (this._imporkerHall = e, this.isInitHoldem = !0, this.setSelfWorldCallBack(), this.setSelfHoldemReconnectCallBack(), this.startMttGame())
            }, this.onClickTabButton = (t, o) => {
                var n;
                console.log(` click into Tabar button:\n            index : ${t}\n            MultipleRoomManager.instance.listRoom[index] checking null --\x3e : ${w.instance.listRoom[t]?"NOT NULL":"IS NULL"}\n            isRoomLoaded[${t}] : ${e.instance.isRoomLoaded(t)}\n        `);
                let i = o;
                if (!i && w.instance.listRoom[t] && e.instance.isRoomLoaded(t) && (i = w.instance.getGameInfoByTabIndex(t)), i) {
                    switch (i.type) {
                        case N.HOLDEM:
                            if (!z.getInstance().isAbleToJoinRoom()) return;
                            i = i, this.openHall(i.gameListId, w.instance.getMttRoomId(i.data), i.gameMode), i.data && i.data instanceof v.commonProto.SngTournament && (S.MessageCenter.send(U.ShowLoading), S.MessageCenter.send(S.Enum.MessageCenterAction.onHideAllWebview, null));
                            break;
                        case N.CASH:
                            var a, s;
                            if (cc_mtt.vv.DataManager.gameMode = G.GAME_LEVEL_LIST_ID.HALL, S.appConfig.isWebApp && e.mttBackButtonVisible && (q.getInstance().sendShowBackButton(!1, "", !1), e.mttBackButtonVisible = !1), i = i, null != (n = i) && null != (n = n.data) && n.joinedGame) {
                                if (null != (a = i) && null != (a = a.data) && a.openMobileGameScene()) null == (s = i) || null == (s = s.data) || s.checkShowLoadingByGameID()
                            } else S.roomManager.RequestJoinRoom(i.data.gameId, i.data.roomId)
                    }
                    w.instance.selectedRoomInfo = i
                } else S.appConfig.isWebApp ? q.getInstance().sendShowDownloadPopup() : h(`Should not go to this ..... ${t}`)
            }, this.onHoldemReconnectShowLoading = () => {
                this.onCallBack(this._onHoldemReconnectShowLoading)
            }, this.onHoldemReconnectHideLoading = () => {
                this.onCallBack(this._onHoldemReconnectHideLoading)
            }, this.onHoldemReconnectFail = e => {
                this.onCallBack(this._onHoldemReconnectFail)
            }, this.onHoldemVerifyToken = e => {
                var t;
                null == (t = this.VerifyToken) || t.call(this, e), this.onCallBack(this._onHoldemVerifyToken)
            }, this.onHoldemVerifyTokenEnd = e => {
                this.onCallBack(this._onHoldemVerifyTokenEnd)
            }, this.onWorldRepeatLoginDialog = e => {
                this._imporkerHall && this._imporkerHall.repeatLoginDialog(e), this.repeatLoginDialog(e), this.onCallBack(this._onHoldemReconnectShowLoading, e)
            }, this.onWorldUpdateUserInfo = e => {
                this.updateUserInfo(e), this.onCallBack(this._onWorldUpdateUserInfo, e)
            }, this.onWorldBoardcastMessageEnvelope = e => {
                this._imporkerHall && this._imporkerHall.broadcastMessageEnvelope(e), this.broadcastMessageEnvelope(e), this.onCallBack(this._onWorldBoardcastMessageEnvelope, e)
            }, this.onWorldReconnectShowLoading = () => {
                this._imporkerHall && this._imporkerHall.reconnectShowLoading(), d(this.node), this.onCallBack(this._onWorldReconnectShowLoading)
            }, this.onWorldReconnectHideLoading = () => {
                this._imporkerHall && this._imporkerHall.reconnectHideLoading(), d(this.node), this.onCallBack(this._onWorldReconnectHideLoading)
            }, this.onWorldReconnectFail = () => {
                this.onCallBack(this._onWorldReconnectFail)
            }, this.onWorldVerifyToken = () => {
                cc_mtt.vv.DataManager.token && A.getInstance().requestSecureTokenCheck(), this.onCallBack(this._onWorldVerifyToken)
            }, this.onWorldVerifyTokenEnd = () => {
                A.reconnectAllGameSockets(), this.onCallBack(this._onWorldVerifyTokenEnd)
            }, this.VerifyToken = t => {
                e.DB("VerifyToken: " + cc_mtt.vv.DataManager.token), t && cc_mtt.vv.DataManager.token && t.requestSecureTokenCheck()
            }, this.retryRequestToken = () => {
                k.instance.requestToken()
            }, this.onTokenEnd = () => {
                cc_mtt.vv.ConsoleLog.log("MultipleGame onTokenUpdate", cc_mtt.vv.DataManager.token, d(this.node)), d(this.node) && (clearTimeout(this._retryTimeout), this.connect())
            }, this.onTokenError = e => {
                cc_mtt.vv.ConsoleLog.log("MultipleGame onTokenError", cc_mtt.vv.DataManager.token, e, d(this.node), this.node.active), d(this.node) && (e != k.instance.config.tokenErrorMsg.REQUEST_TOKEN_FAIL && this._logTimes < 5 && (this._logTimes++, cc_mtt.vv.ConsoleLog.error("error_hall")), this.node.active && (clearTimeout(this._retryTimeout), e == k.instance.config.tokenErrorMsg.REQUEST_TOKEN_FAIL || e == k.instance.config.tokenErrorMsg.EMPTY_RESPONSE ? this._retryTimeout = setTimeout(this.retryRequestToken, this._retryInterval) : this.retryRequestToken()))
            }
        }
        static isShowingFirstTimeAfterLogin() {
            return 0 == e.showTimes
        }
        static get instance() {
            return this._instance
        }
        get maxOpenRooms() {
            return w.instance.maxOpenRooms
        }
        onLoginServer() {
            e.showTimes = 0
        }
        preStartCashGame() {
            this.isInitCash = !0, this.moveUpHallSceneElements(!0), this.updateVisibleTableBar(), this.startCashGame(), this._startProcessFinishedCount++
        }
        onLoad() {
            S.config.getCurrentScene() != S.Enum.SCENE.HALL_SCENE && e.showTimes++, e._instance = this, this.initTabButton(), this.registerCallbacks(), this.getAllHallSceneNodeRef(), w.instance.listRoom.length > 0 && this.moveUpHallSceneElements(!1), w.instance.removeAllRooms(), S.MessageCenter.register("onLogout", this.onLogOut.bind(this), this), S.MessageCenter.register(K.OnLoginSuccess, this.onLoginSuccess.bind(this), this), S.appConfig.isWebApp && c.on("canvas-resize", this.adaptHeader, this)
        }
        onEnable() {
            S.appConfig.isWebApp && S.MessageCenter.register("webApp_close_profile", this.onWebAppUserCloseProfile.bind(this), this.node)
        }
        onDisable() {
            S.appConfig.isWebApp && S.MessageCenter.unregister("webApp_close_profile", this.node)
        }
        onLoginSuccess() {
            d(e._instance) && e._instance.registerCallbacks()
        }
        registerCallbacks() {
            this._isRegisterCallback || (this._isRegisterCallback = !0, k.instance.registerMessageCenter(k.instance.config.BroadCast.MTT_TOKEN_END, this.onTokenEnd, this.node), k.instance.registerMessageCenter(k.instance.config.BroadCast.MTT_TOKEN_ERROR, this.onTokenError, this.node), k.instance.registerMessageCenter(k.instance.config.BroadCast.MULTI_TABLE_BAR_TABLE_SELECTED, this.syncAndJoinSelectedTables.bind(this), this.node))
        }
        clearCallBack() {
            S.appConfig.isWebApp || (k.instance.unregisterMessageCenter(k.instance.config.BroadCast.MTT_TOKEN_END, this.node), k.instance.unregisterMessageCenter(k.instance.config.BroadCast.MTT_TOKEN_ERROR, this.node), k.instance.unregisterMessageCenter(k.instance.config.BroadCast.MULTI_TABLE_BAR_TABLE_SELECTED, this.node), this._isRegisterCallback = !1), L.setLoadingCallBack(null, null), L.onReconnectFail = null, L.onVerifyToken = null, L.onVerifyTokenEnd = null, S.MessageCenter.unregister("onLogout", this)
        }
        getAllHallSceneNodeRef() {
            let e = this.node.parent;
            e && (this._hallSceneNode = e.parent, S.appConfig.isWebApp ? this._findViewNodeHallScene = m(this.PATH_FIND_VIEW_NODE + "H5", e) : this._findViewNodeHallScene = m(this.PATH_FIND_VIEW_NODE, e), this._bgTopImageHallScene = m(this.PATH_BG_TOP_IMG_NODE, this._hallSceneNode), this._topRightNodeHallScene = m(this.PATH_TOP_RIGHT_BAR_NODE, e))
        }
        reset(e = !0) {
            if (this.leaveGame(), this.isInitHoldem = !1, this.isInitCash = !1, e) this._multipleGameTabButtons.length = 0;
            else
                for (let e = 0; e < this.subHeader.length; e++)
                    if (d(this._multipleGameTabButtons[e])) {
                        const t = this._multipleGameTabButtons[e];
                        t.hide(), t.reset()
                    } this.updateVisibleTableBar(), this.moveUpHallSceneElements(!0), this.unscheduleAllCallbacks(), w.instance.removeAllRooms(), this.clearCallBack(), clearTimeout(this._retryTimeout)
        }
        onDestroy() {
            S.appConfig.isWebApp && (k.instance.unregisterMessageCenter(k.instance.config.BroadCast.MTT_TOKEN_END, this.node), k.instance.unregisterMessageCenter(k.instance.config.BroadCast.MTT_TOKEN_ERROR, this.node), k.instance.unregisterMessageCenter(k.instance.config.BroadCast.MULTI_TABLE_BAR_TABLE_SELECTED, this.node), c.off("canvas-resize", this.adaptHeader, this)), e._instance = null
        }
        moveUpHallSceneElements(t) {
            this._bgTopImageHallScene && this._topRightNodeHallScene && this._findViewNodeHallScene && (e.haveTopBarShow = !t, this.updateBGTopHallScene(t), this.updateTopRightHallScene(t), this.updateFindViewHallScene(t), this.updateDetailMTTHall(), this.updateHallSceneAdapt(), this.node.setSiblingIndex(this.node.parent.children.length), S.MessageCenter.send("haveTopBarShowChanged"))
        }
        updateDetailMTTHall() {
            if (!R.instance || !R.instance.signUpButton || this._imporkerHall && !this._imporkerHall.needAutoCallMTTHall()) return;
            let e = R.instance.node;
            S.mttHallDetailsLandscape && S.mttHallDetailsLandscape._mttHallInfo && (e = S.mttHallDetailsLandscape.node), e.activeInHierarchy && (e.active = !1, this.scheduleOnce((() => {
                e.active = !0
            })))
        }
        getOffsetYAreaToMove() {
            return S.tools.calcTopOffsetToMove(this.OFFSET_Y_DEFAULT)
        }
        getTopBarOffsetYToMove() {
            return this.OFFSET_Y_TO_MOVE + this.getOffsetYAreaToMove()
        }
        updateSubHeader(e) {
            this.headerContainer.parent.getComponent(u).top = e ? 0 : this.getOffsetYAreaToMove()
        }
        updateHallSceneAdapt() {
            if (!this._hallSceneNode) return;
            let e = this._hallSceneNode.getComponent("HallScene");
            e && e.adaptScreen(!0)
        }
        updateFindViewHallScene(e) {
            let t = this._findViewNodeHallScene.getComponent(u);
            t && (t.top = e ? this.getOffsetYAreaToMove() : this.OFFSET_Y_TO_MOVE + this.getOffsetYAreaToMove(), S.MessageCenter.send("updateFindViewHallScene"))
        }
        updateTopRightHallScene(e) {
            let t = this._topRightNodeHallScene.getComponent(u);
            t && (t.top = this.getOffsetYAreaToMove() + (e ? this.RIGHT_TOP_Y_OFFSET : this.RIGHT_TOP_Y_OFFSET + this.OFFSET_Y_TO_MOVE))
        }
        updateBGTopHallScene(e) {
            let t = this._bgTopImageHallScene.getComponent(g).width,
                o = e ? this.BG_TOP_H : this.BG_TOP_H + this.OFFSET_Y_TO_MOVE;
            o += this.getOffsetYAreaToMove(), this._bgTopImageHallScene.getComponent(g).setContentSize(t, o)
        }
        startCashGame() {
            I.needToShow() || S.roomManager.rooms.length && S.roomManager.rooms.filter((e => e.joinedGame || e.quickLeaveData)).forEach(this.onCreateCashRoomInstance.bind(this))
        }
        onCreateCashRoomInstance(e) {
            if (!d(this.node, !0)) return; - 1 == this.getMultipleGameInfoIndex(e) && P.addCashGame(e)
        }
        isStartProcessFinished() {
            return this._startProcessFinishedCount >= 3
        }
        startMttGame() {
            let e = this,
                t = !1,
                o = !1,
                n = 0;
            this.isHoldemDataReady = !1;
            let i = () => {
                    S.appConfig.isLandscapeLayout || this.isPlayingSngGames() && (o = !0), w.instance.removeAllMttRooms(), w.instance.removeAllSngRooms(), this.onRoomListChanged(t || o), this.isHoldemDataReady = !0
                },
                a = o => {
                    this._startProcessFinishedCount++, n++;
                    for (let n = 0; n < o.length; n++)
                        if (o[n] && e.isMultipleGameStart(o[n])) {
                            t = !0;
                            break
                        } n >= 2 && i()
                },
                s = e => {
                    this._startProcessFinishedCount++, n++, o = e.length > 0, n >= 2 && i()
                },
                l = () => {
                    this._startProcessFinishedCount++, n++, this.isHoldemDataReady = !1
                };
            B.requestMttMultiTable((e => {
                a(null == e ? void 0 : e.UserGameInfo)
            }), (() => {
                l()
            })), B.requestJSNGMultiTable((e => {
                s(null == e ? void 0 : e.UserGameInfo)
            }), (() => {
                l()
            }))
        }
        onRoomListChanged(e) {
            I.needToShow() ? I.show(!1) : (I.syncSelectedRooms(e), this.syncAndJoinSelectedTables()), this.syncSngGameModel(), this.updateVisibleTableBar()
        }
        isMultipleGameStart(e) {
            return e.MttTournamentStatus != v.commonProto.MTT_GAME_STATUS.NOT_STARTED && e.MttTournamentStatus != v.commonProto.MTT_GAME_STATUS.ENDED && e.JoinStatus > 0 || e.MttTournamentIsPreparing
        }
        checkEnterGames(e, t) {
            _("MultipleGame checkConditionEnterGames Check:", e, t), e && t < e.length && e[t] ? this.checkEnterGame(e[t], (() => {
                this.checkEnterGames(e, t + 1)
            })) : (e.length <= 0 || w.instance.listRoom.length <= 0) && _("FakeMultipleGame checkConditionEnterGames End:", e, w.instance.listRoom)
        }
        checkEnterGame(e, t = null) {
            if (this.isMultipleGameStart(e)) {
                let o = null,
                    n = 0,
                    i = 0;
                e.Category == v.commonProto.GAME_CATEGORY.MTT ? (o = new v.commonProto.MttTournament, o.Detail = new v.modelProto.MttTournament, o.Detail.Id = e.TournamentId, o.Detail.GameMode = e.GameMode, o.Detail.PlayOnJoint = e.PlayOnJoint, n = G.GAME_LEVEL_LIST_ID.MTT, i = e.GameMode) : e.Category == v.commonProto.GAME_CATEGORY.SNG && (o = new v.commonProto.SngTournament, o.Detail = new v.modelProto.SngTournament, o.Detail.Id = e.TournamentId, o.Detail.GameMode = e.GameMode, o.Detail.TournamentName = e.GameName, n = G.GAME_LEVEL_LIST_ID.SNG, i = e.GameMode), this._loadGameViewByGameInfo(i, n, o, t)
            } else this.callNextFunction(t)
        }
        callNextFunction(e) {
            e && e instanceof Function && e()
        }
        _loadGameViewByGameInfo(e, t, o, n = null) {
            cc_mtt.vv.DataManager.gameMode = t, cc_mtt.vv.DataManager.currentGameInfo = o, cc_mtt.vv.DataManager.gameViewType = e;
            let i = this.getMultipleGameInfoIndex(o); - 1 == i && (w.instance.listRoom.length < this.maxOpenRooms ? (i = P.addMTTGame(e, t, o, !1), i >= 0 ? this.initMttGame(i, t) : cc_mtt.vv.ConsoleLog.log(">>>>> [FakeMultipleGame _loadGameViewByGameInfo] can not init mtt")) : cc_mtt.vv.ConsoleLog.log("Multiple Game multipleGameInfos >= " + this.maxOpenRooms)), n && n instanceof Function && n()
        }
        initTabButton() {
            if (this.multipleGameTabButtonPrefab)
                for (let e = 0; e < this.subHeader.length; e++) {
                    let t = T(this.multipleGameTabButtonPrefab);
                    t.parent = this.subHeader[e], this._multipleGameTabButtons[e] = t.getComponent(F), this._multipleGameTabButtons[e].init(this.onClickTabButton.bind(this), e)
                }
        }
        isRoomLoaded(e) {
            let t = this._rooms[e];
            return !!t && t.isLoadedStatus
        }
        openHall(e, t, o = 0, n = !1) {
            this._imporkerHall && this._imporkerHall.callGameView(o, e, t, 0, 0, !1, 0, t, j.MultipleBarTabClicked)
        }
        getMultipleGameInfoIndex(e) {
            var t;
            return e && this._rooms && 0 != this._rooms.length ? (null == (t = w.instance) ? void 0 : t.getRoomIndex(e)) ?? -1 : -1
        }
        initCashGame(e) {
            this.initTableBars(N.CASH, e), this.doInitCashRoom(e), this.updateVisibleTableBar()
        }
        initMttGame(e, t = G.GAME_LEVEL_LIST_ID.MTT) {
            this.initGameSocket(N.HOLDEM, t), this.connectHoldemRoom(e), this.initTableBars(N.HOLDEM, e)
        }
        connectHoldemRoom(t) {
            e.currentMultipleGameIndex = t, cc_mtt.vv.DataManager.currentGameInfo = w.instance.listRoom[t].data;
            let o, n = cc_mtt.vv.DataManager.currentGameInfo.Detail.Id,
                i = w.instance.listRoom[t];
            this._roomNodes && this._rooms && (d(this._roomNodes[t]) && (o = this._roomNodes[t].getComponent(D)), o || (d(this._roomNodes[t]) && this._roomNodes[t].destroy(), this._roomNodes[t] = T(this.roomPrefab), this._roomNodes[t].parent = this.node, o = this._roomNodes[t].getComponent(D)), o ? (this._rooms[t] = o, o.initHoldemRoom(0, i.gameListId, n, t), o.connectWebSocket()) : console.error("........................... not found FakeHoldemRoom component " + t))
        }
        initTableBars(e, t) {
            if (!d(this._multipleGameTabButtons, !0)) return;
            0 == this._multipleGameTabButtons.length && this.initTabButton();
            const o = this._multipleGameTabButtons[t];
            o && o.initMultipleGame(e, t)
        }
        setTableBarCardStatus(e, t) {
            var o;
            this._multipleGameTabButtons && (null == (o = this._multipleGameTabButtons[e]) || o.setCards(t))
        }
        initGameSocket(e, t) {
            switch (e) {
                case N.HOLDEM:
                    const {
                        holdem: e, mttPro: o
                    } = v, n = {
                        ...e.MessageId,
                        ...o.MessageId
                    };
                    let i = t == G.GAME_LEVEL_LIST_ID.SNG ? y.HOLDEM_SNG : y.HOLDEM_MTT,
                        a = O[i];
                    A.GameSocketConnectedOrReconnecting(t) && (i == y.HOLDEM_MTT ? a = O[i] = A.gameSocket : i == y.HOLDEM_SNG && (a = O[i] = A.gameSNGSocket), a.setReConnect()), a || (a = O[i] = new L(i, {
                        ...o,
                        ...e,
                        MessageId: n
                    }), i == y.HOLDEM_MTT ? A.gameSocket = a : i == y.HOLDEM_SNG && (A.gameSNGSocket = a), a.setReConnect())
            }
        }
        setSelfWorldCallBack() {
            A.onRepeatLoginDialog = this.onWorldRepeatLoginDialog.bind(this), A.onUpdateUserInfo = this.onWorldUpdateUserInfo.bind(this), A.onBoardcastMessageEnvelope_FakeMultipleGame = this.onWorldBoardcastMessageEnvelope.bind(this), A.setReconnectCallBack(this.onWorldReconnectShowLoading.bind(this), this.onWorldReconnectHideLoading.bind(this), this.onWorldReconnectFail.bind(this), this.onWorldVerifyToken.bind(this), this.onWorldVerifyTokenEnd.bind(this)), A.bindSocketMessage()
        }
        setWorldCallBack(e, t = null, o = null, n = null, i = null, a = null, s = null, l = null, r = null) {
            this._onWorldRepeatLoginDialog[e] = t, this._onWorldUpdateUserInfo[e] = o, this._onWorldBoardcastMessageEnvelope[e] = n, this._onWorldReconnectShowLoading[e] = i, this._onWorldReconnectHideLoading[e] = a, this._onWorldReconnectFail[e] = s, this._onWorldVerifyToken[e] = l, this._onWorldVerifyTokenEnd[e] = r
        }
        setHoldemReconnectCallBack(e, t = null, o = null, n = null, i = null, a = null) {
            this._onHoldemReconnectShowLoading[e] = t, this._onHoldemReconnectHideLoading[e] = o, this._onHoldemReconnectFail[e] = n, this._onHoldemVerifyToken[e] = i, this._onHoldemVerifyTokenEnd[e] = a
        }
        setSelfHoldemReconnectCallBack() {
            L.setLoadingCallBack(this.onHoldemReconnectShowLoading, this.onHoldemReconnectHideLoading), L.onReconnectFail = this.onHoldemReconnectFail, L.onVerifyToken = this.onHoldemVerifyToken, L.onVerifyTokenEnd = this.onHoldemVerifyTokenEnd
        }
        onCallBack(e, t = null) {
            if (e)
                for (let o in e) e[o] && e[o] instanceof Function && e[o](t)
        }
        repeatLoginDialog(e) {
            A.hasInstance() && A.getInstance().close(!0, !0), A.closeGameSockets(), A.hasShowLoginFailDialog || 20 == e.ErrorCode || (A.hasShowLoginFailDialog = !0, p.isPaused() && p.resume())
        }
        updateUserInfo(e) {
            cc_mtt.vv.DataManager.userData = e.UserData
        }
        broadcastMessageEnvelope(e) {
            switch (cc_mtt.vv.ConsoleLog.log("FakeMultipleGame broadcastMessageEnvelope", e), e.TypeId) {
                case 1e3:
                    const t = v.commonProto.Broadcast_Message_Enter_Game.decode(e.Body);
                    this.broadcastMessageEnterMttGames(t);
                    break;
                case 1002: {
                    const t = v.commonProto.Broadcast_Message_Out_Game.decode(e.Body);
                    if (H.selfTours.manualUpdateTournament({
                            TournamentId: t.TournamentId,
                            JoinStatus: t.JoinedStatus
                        }), J.isTournamentStarted(t)) {
                        w.instance.getMttRoom(t.TournamentId) || this.scheduleOnce((() => {
                            this.requestMultiTableByTournamentID_MTT(t.TournamentId)
                        }), 1)
                    }
                    break
                }
                case 4508:
                    const o = v.commonProto.Broadcast_Message_Start_Game.decode(e.Body);
                    this.broadcastMessageEnterMttGames(o)
            }
        }
        broadcastMessageEnterMttGames(e) {
            e.TypeId == v.commonProto.GAME_CATEGORY.MTT && this.requestMultiTableByTournamentID_MTT(e.TournamentId)
        }
        requestMultiTableByTournamentID_MTT(e, t) {
            B.requestMttMultiTable((o => {
                if (d(this, !0)) {
                    if (cc_mtt.vv.ConsoleLog.log("FakeMultipleGame broadcastMessageEnvelope requestrequestMttMultiTable", e, o), I.needToShow()) I.show(!1);
                    else {
                        for (let t = 0; t < o.UserGameInfo.length; t++)
                            if (o.UserGameInfo[t].SngMttLevelId == e) {
                                this.checkEnterGame(o.UserGameInfo[t]);
                                break
                            } this.updateVisibleTableBar()
                    }
                    void 0 !== t && (null !== o.UserGameInfo && o.UserGameInfo.length > 0 ? t(!0) : t(!1))
                }
            }), (() => {
                void 0 !== t && t(!1), cc_mtt.vv.ConsoleLog.log("FakeMultipleGame broadcastMessageEnvelope requestMttMultiTable error")
            }))
        }
        connectGame(e, t, o) {
            switch (e) {
                case N.HOLDEM:
                    const {
                        holdem: e, mttPro: n
                    } = v;
                    e.MessageId, n.MessageId;
                    let i = O[o];
                    if (i && i.hasVerifyToken) {
                        let e = this._rooms[t];
                        e instanceof D && e.EnterRoom()
                    }
            }
        }
        leaveGame() {
            if (!S.appConfig.getGameConfig().enableMultiTableBar) return;
            for (let e = this._rooms.length - 1; e >= 0; e--) this._rooms[e] && this._rooms.splice(e, 1)
        }
        updateVisibleTableBar() {
            if (S.config.getCurrentScene() != S.Enum.SCENE.HALL_SCENE) return;
            if (!this.subHeader) return void this.moveUpHallSceneElements(!0);
            for (let e = 0; e < this.subHeader.length; e++) {
                let t = this._multipleGameTabButtons[e];
                t && t.hide()
            }
            if (null == this._rooms) return;
            let e = this._rooms.filter((e => null != e)).length,
                t = 0;
            for (let i = 0; i < this.subHeader.length; i++) {
                let a = this._rooms[i],
                    s = this._multipleGameTabButtons[i];
                if (s)
                    if (d(a, !0)) s.show(), t++;
                    else if (S.appConfig.isWebApp) {
                    let i = this.maxOpenRooms;
                    var o, n;
                    if (S.appConfig.isWebApp) i = i < (null == (o = this.subHeader) ? void 0 : o.length) ? null == (n = this.subHeader) ? void 0 : n.length : i;
                    e > 0 && t < e + 1 && e + 1 <= i ? (s.show(), t++) : s.hide()
                } else t < e && e <= this.maxOpenRooms ? (s.show(), t++) : s.hide()
            }
            this.moveUpHallSceneElements(0 == t), this.updateSubHeader(0 == t)
        }
        getRoomByIndex(e) {
            return this._rooms[e]
        }
        isHoldemRoomAvailableByTournamentMode(e) {
            return this._rooms.some((t => t instanceof D && t.tournamentMode == e))
        }
        removeMttRoom(e) {
            this._rooms.length;
            for (let t = 0; t < this._rooms.length; t++) {
                let o = this._rooms[t];
                if (o instanceof D && e === o.tournamentId) {
                    this._rooms.splice(t, 1), this._roomNodes.splice(t, 1);
                    break
                }
            }
            w.instance.removeMttRoom(e), this.updateRoomIndex(), this.updateVisibleTableBar()
        }
        removeCashRoom(e, t = !0) {
            const [o, n] = [e.gameId, e.roomId], i = this._rooms.findIndex((t => d(t) && t instanceof V && e.isSameRoomInfo(t.gameId, t.roomId)));
            if (i >= 0) {
                const e = this._rooms[i];
                t ? e.leaveRoom() : null == e || e.node.destroy(), this._rooms.splice(i, 1), this._roomNodes.splice(i, 1)
            } else t && S.roomManager.forceLeaveRoom(o, n);
            S.config.getCurrentScene() == S.Enum.SCENE.HALL_SCENE && (w.instance.removeCashRoomById(o, n), S.roomManager.closeGame(o, n)), I.removeSelectedCashRoom(e), this.updateRoomIndex(), this.updateVisibleTableBar()
        }
        featureChangePage(e) {
            this._featureChangePageIndex.indexOf(e) >= 0 || this._featureChangePageIndex.push(e)
        }
        resetFeatureChangePageIndex(e) {
            let t = this._featureChangePageIndex.indexOf(e);
            t >= 0 && this._featureChangePageIndex.splice(t, 1)
        }
        CheckAndChangePage(e) {
            return this._featureChangePageIndex.length > 1
        }
        connect() {
            this.setSelfWorldCallBack(), this.setSelfHoldemReconnectCallBack()
        }
        onLogOut() {
            this.onLogOutSng()
        }
        syncAndJoinSelectedTables() {
            if (!d(this, !0)) return;
            const e = H.selfTours.getSelectedTournamentMultiTableBar(),
                t = [];
            for (let o = 0; o < this._rooms.length; o++) {
                let n = this._rooms[o];
                n && n instanceof D && !e.includes(n.tournamentId) && t.push(n.tournamentId)
            }
            t.forEach(this.removeMttRoom.bind(this));
            this.maxOpenRooms, e.length;
            const o = I.selectedCashRooms,
                n = [];
            for (let e = 0; e < this._rooms.length; e++) {
                let t = this._rooms[e];
                if (t && t instanceof V) {
                    let e = t.gameId,
                        i = t.roomId;
                    o.some((t => t.isSameRoomInfo(e, i))) || n.push(new W(e, i))
                }
            }
            let i = I.getValidCashRoomInstances();
            for (let e = 0; e < i.length; e++) {
                let t = i[e];
                if (t) {
                    let e = t.gameId,
                        i = t.roomId;
                    o.some((t => t.isSameRoomInfo(e, i))) || n.some((t => t.isSameRoomInfo(e, i))) || n.push(new W(e, i))
                }
            }
            n.forEach((e => this.removeCashRoom(e))), this.joinSelectedTables(e, o), this.updateVisibleTableBar()
        }
        joinSelectedTables(e, t) {
            let o = H.selfTours.getPlayingTournaments().filter((t => e.includes(t.TournamentId) && !this._rooms.some((e => e instanceof D && (null == e ? void 0 : e.tournamentId) == (null == t ? void 0 : t.TournamentId)))));
            if (this.checkEnterGames(o, 0), t.length > 0) {
                const e = S.roomManager.getJoiningGameID(),
                    o = S.roomManager.getJoiningRoomID(),
                    n = S.roomManager.getRoomByIds(e, o),
                    i = !n || n.joinWithoutOpenGame,
                    a = t.filter((e => {
                        const t = S.roomManager.getRoomByIds(e.gameId, e.roomId);
                        return t && !(n == t) && !t.joinedGame && !t.doingRequestJoinRoom && !t.quickLeaveData
                    }));
                S.roomManager.RequestJoinRooms(a, i);
                t.filter((e => !a.includes(e))).map((e => S.roomManager.getRoomByIds(e.gameId, e.roomId))).forEach((e => {
                    e && P.addCashGame(e)
                }))
            }
        }
        isRoomAdded(e, t) {
            return this._rooms.some((o => o instanceof V && o.gameId == e && o.roomId == t))
        }
        doInitCashRoom(t) {
            let o = w.instance.getGameInfoByTabIndex(t);
            if (-1 != t && o && o.type == N.CASH) {
                if (o = o, e.currentMultipleGameIndex = t, this._roomNodes && !this.isRoomAdded(o.data.gameId, o.data.roomId)) {
                    var n;
                    d(this._roomNodes[t]) && this._roomNodes[t].destroy();
                    let e = T(this.cashRoomPrefab);
                    this._roomNodes[t] = e, this._roomNodes[t].parent = this.node;
                    let i = e.getComponent(V);
                    this._rooms[t] = i, o = o, i.init(o.data.gameId, o.data.roomId, t), null == (n = this._multipleGameTabButtons[t]) || n.initMultipleGame(N.CASH, t), this.updateVisibleTableBar()
                }
            } else cc_mtt.vv.ConsoleLog.log("Multiple Game. Can not add more tab bar button!")
        }
        onCashGameLeaveRoom(e, t, o = !1) {
            this.removeCashRoom(t, o)
        }
        getNumOfCashRoomCanAutoJoin() {
            let e = H.selfTours.getPlayingTournaments().length,
                t = S.roomManager.getOpeningRoomCountOnServer();
            return e < this.maxOpenRooms && e + t <= this.maxOpenRooms ? Math.min(t, this.maxOpenRooms - e) : 0
        }
        updateRoomIndex(t) {
            var o, n;
            if (S.appConfig.isLandscapeLayout || !d(null == (o = e.instance) ? void 0 : o.subHeader) || !d(null == (n = e.instance) ? void 0 : n._multipleGameTabButtons)) return;
            const i = e.instance._multipleGameTabButtons,
                a = e.instance.subHeader,
                s = w.instance.listRoom,
                l = t ?? s;
            S.StringTools.mapOrder(i, l, "_multipleGameIndex", "index"), S.StringTools.mapOrder(this._rooms, l, "tabIndex", "index"), S.StringTools.mapOrder(s, l, "index", "index"), i.forEach(((e, t) => {
                d(e) && (e.setMultipleGameIndex(t), e.node.parent = a[t])
            })), this._rooms.forEach(((e, t) => {
                d(e) && (e.tabIndex = t)
            })), s.forEach(((e, t) => e.index = t))
        }
        moveHeaderToLeft(e = 0) {
            if (d(this.header)) {
                const t = this.header.getPosition(),
                    o = f(e, t.y, 0);
                if (this.header.activeInHierarchy) {
                    M.stopAllByTarget(this.header);
                    let e = this.headerContainer.getComponent(x);
                    e || (e = this.headerContainer.addComponent(x)), S.action.moveToAction(this.header, S.Enum.action_FuncType.to_left, S.Enum.action_FuncType.enter, S.Enum.action_FuncType.dt_NORMAL, t, o, null, C().delay(1).call((() => {
                        var t;
                        this.isStartProcessFinished() && e && (null == (t = this.headerContainer.getComponent(x)) || t.destroy())
                    })))
                } else this.header.setPosition(new b(o.x, o.y, 0))
            }
        }
        moveHeaderToRight(e, t = this.OFFSET_X_TO_MOVE_HEADER) {
            if (d(this.header) && d(this.headerContainer)) {
                const o = S.config.WIDTH / 2 - this.headerContainer.getComponent(g).contentSize.width / 2 + this.headerContainer.getPosition().x,
                    n = this.header.getPosition(),
                    i = f(e - o + t, n.y);
                if (this.header.activeInHierarchy) {
                    let e = this.headerContainer.getComponent(x);
                    e || (e = this.headerContainer.addComponent(x)), M.stopAllByTarget(this.header), S.action.moveToAction(this.header, S.Enum.action_FuncType.to_right, S.Enum.action_FuncType.enter, S.Enum.action_FuncType.dt_NORMAL, n, i, null, C().delay(1).call((() => {
                        var t;
                        this.isStartProcessFinished() && e && (null == (t = this.headerContainer.getComponent(x)) || t.destroy())
                    })))
                } else this.header.setPosition(new b(i.x, i.y, 0))
            }
        }
        isPlayingSngGames() {
            const e = H.selfTours.getSngPlayingTournaments();
            return (null == e ? void 0 : e.length) > 0
        }
        syncSngGameModel() {
            var e;
            if ((null == (e = Y.GetCacheSngRoomModel()) ? void 0 : e.size) > 0) {
                const e = Y.GetCacheSngRoomModel(),
                    t = w.instance.getSngRooms();
                null == t || t.forEach((t => {
                    const o = w.instance.getMttRoomId(t.data);
                    if (o && e.has(o)) {
                        const n = e.get(o);
                        n && (t.isWatching = n.isWatching)
                    }
                }))
            }
        }
        onLogOutSng() {
            Y.ClearAllCache()
        }
        adaptHeader() {
            var e;
            let t = null;
            this.header && (t = this.header.getComponent(E)), !t && null != (e = this.subHeader) && e[0] && (t = this.subHeader[0].parent.getComponent(E)), t && t.updateLayout()
        }
        onWebAppUserCloseProfile() {
            this.updateVisibleTableBar()
        }
    }).isEnableAutoSwitchTableHallScene = !1, de.currentMultipleGameIndex = 0, de._instance = null, de.showTimes = 0, de.haveTopBarShow = !1, de.mttBackButtonVisible = !1, de.DB = e => {
        s("######### " + e)
    }, ie = t((ne = de).prototype, "roomPrefab", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = t(ne.prototype, "cashRoomPrefab", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = t(ne.prototype, "headerContainer", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = t(ne.prototype, "header", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = t(ne.prototype, "subHeader", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), he = t(ne.prototype, "multipleGameTabButtonPrefab", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = ne)) || oe));
    n._RF.pop()
}