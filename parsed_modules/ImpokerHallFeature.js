import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as _ from "./LoadingBlocker.js";
import * as v from "./worldWebsocket.js";
import * as p from "./commonProto.mjs_cjs=&original=.js";
import * as M from "./Pb.js";
import * as f from "./ImpokerHall.js";
import * as S from "./MttPrefab.js";
import * as k from "./MttHall.js";
import * as C from "./MttHall.js";
import * as E from "./MttHall.js";
import * as I from "./mttconfig.js";
import * as L from "./ProfilePrefab.js";
import * as P from "./HistoryPrefab.js";
import * as D from "./BagPrefab.js";
import * as w from "./HistoryDetailPrefab.js";
import * as b from "./WebPlatformTools.js";
import * as R from "./ResourcesLoader.js";
import * as A from "./MttPrefabPkw.js";
import * as y from "./MttHallPkw.js";
import * as G from "./MTTConnector.js";
import * as H from "./cv.js";
import * as O from "./FakeMultipleGame.js";
import * as U from "./MultipleGame.js";
import * as B from "./ConnectionTracing.js";
import * as N from "./ConnectionTracing.js";
import * as J from "./CrashTracing.js";
import * as F from "./HttpApiTournamentDetail.js";
import * as W from "./Tools.js";
import * as V from "./mttController.js";
import * as K from "./GameListTuplePkw.js";
import * as q from "./MttItemHelper.js";
import * as x from "./GameViewLoader.js";
import * as j from "./AppUpdate.js";
import * as Y from "./httpApis.js";

function main() {
    var X, z, Q, $, Z, tt;
    o._RF.push({}, "f86a8Rv8apD6bfg5Ud3e9mD", "ImpokerHallFeature", void 0);
    const {
        ccclass: et,
        property: nt
    } = r;
    t("ImpokerHallFeature", (X = nt(a), z = nt(s), et((Z = e(($ = class extends M {
        constructor(...t) {
            super(...t), n(this, "mttListPrefabFullScreenList", Z, this), n(this, "hallMask", tt, this), this.hasInit = !1, this.hasInitConnect = !1, this.mttSetTimeout = null, this.lastOnEnableTime = 0, this.onEnableGetListInterval = 6e4, this._logTimes = 0, this._retryTimeout = null, this._retryInterval = 3e3, this.appUpdate = void 0, this.isMain = !0, this._widget = null, this._skipInitInStart = !1, this.connect = () => {
                cc_mtt.vv.ConsoleLog.log("ImpokerHallFeature connect", this.hasInitConnect, cc_mtt.vv.DataManager.token, i(this.node), this.node.active), cc_mtt.vv.DataManager.token && i(this.node) ? this.hasInitConnect ? this.initWebSocket() : (this.hasInitConnect = !0, cc_mtt.vv.ConsoleLog.log("cc_mtt.vv.DataManager.token", cc_mtt.vv.DataManager.token), this.init(), cc_mtt.vv.ConsoleLog.log("initMTT connect impoker"), _.show("Hall"), this.appUpdate = new x, this.appUpdate.getUrlConfigVersion(this.initStartPage, null)) : this.node.active && (clearTimeout(this._retryTimeout), this._retryTimeout = setTimeout(this.retryRequestToken, this._retryInterval))
            }, this.initStartPage = () => {
                G.MessageCenter.send(G.Enum.MessageCenterAction.RequestMttLobbyLevelList), this.initStartPageAction()
            }, this.autoOpenGameView = () => {
                this.autoOpenGameViewAction()
            }, this.onScrollEndResponse = t => {
                3 == t && this.onShowMttEnd()
            }, this.onHideLoading = t => {
                !t || t.length && !t.includes("getLevelList") || this.blockLayer && this.blockLayer.active && this.controlHallBlockLayer(!1, "ImpokerHallFeature onHideLoading " + t.toString())
            }, this.onShowLoading = t => {}, this.responseUserLogin = t => {
                if (t && !t.ErrorCode) {
                    v.getInstance().hasVerifyToken = !0, cc_mtt.vv.DataManager.gameList = t.Games, cc_mtt.vv.DataManager.userData = t.UserData, cc_mtt.vv.DataManager.JoinedTournaments = t.JoinedTournaments, y.instance.setStorage(C.key_loginData, p.commonProto.User_Login_Response.encode(t).finish()), cc_mtt.vv.DataManager.token = t.Token, cc_mtt.vv.DataManager.loginData = t;
                    let e = new Date;
                    cc_mtt.vv.DataManager.timeOffset = e.getTime() - t.ServerTime.getTime(), cc_mtt.vv.DataManager.agentCodes = t.AgentCodes, cc_mtt.vv.DataManager.defaultAgentCode = t.DefaultAgentCode, cc_mtt.vv.DataManager.ownAssociationId = t.OwnAssociationId, _.hide("login"), G.appConfig.isWebApp || G.SwitchLoadingView.hide("", !1, !0), v.getInstance().reconnectCount = 0, y.instance.cv.MessageCenter.send("updateHallJoinedTournaments"), W.selfTours.resetTournamentsData(t.JoinedTournaments), W.selfTours.reloadUserTournaments(null, null).catch(l), this.autoJoinTournament(!0), c.isNative && c.localStorage.setItem("lastLogin", cc_mtt.vv.DataManager.token), G.appConfig.isLandscapeLayout && G.appConfig.getGeneralConfig().multiWindowEnabled && O.openAllSngGames()
                } else cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", "ERROR_CODE_PKW." + t.ErrorCode, !1, [{
                    type: 0,
                    text: "MESSAGE_DIALOG_BLOCKER.OK",
                    callback: () => {}
                }])
            }, this.autoJoinRetryTimes = 0, this.countRequest = 0, this.retryRequestToken = () => {
                U.hasInstance() && U.getInstance().addEventDefault("retryRequestToken", !0), cc_mtt.vv.DataManager.token = "", y.instance.requestToken()
            }, this.onTokenEnd = () => {
                cc_mtt.vv.ConsoleLog.log("ImpokerHallFeature onTokenEnd", cc_mtt.vv.DataManager.token, cc_mtt.vv.DataManager.worldNetwork ? cc_mtt.vv.DataManager.worldNetwork.lastVerifyToken + " " + cc_mtt.vv.DataManager.worldNetwork.isConnected() : "null", i(this.node)), i(this.node) && (clearTimeout(this._retryTimeout), cc_mtt.vv.DataManager.worldNetwork && cc_mtt.vv.DataManager.token == cc_mtt.vv.DataManager.worldNetwork.lastVerifyToken && cc_mtt.vv.DataManager.worldNetwork.isConnected() ? (i(this.node) && this.createPagePrefab(), cc_mtt.vv.ConsoleLog.log("ImpokerHallFeature onTokenEnd same token and world already connected")) : this.connect())
            }, this.onTokenError = t => {
                i(this.node) && cc_mtt.vv.ConsoleLog.log("ImpokerHallFeature onTokenError", cc_mtt.vv.DataManager.token, t, i(this.node), this.node.active), U.hasInstance() && U.getInstance().addIssueDefault("onTokenError", "message", t), i(this.node) && (t != y.instance.config.tokenErrorMsg.REQUEST_TOKEN_FAIL && this._logTimes < 5 && (this._logTimes++, cc_mtt.vv.ConsoleLog.error("error_hall"), 5 == this._logTimes && this.showTokenErrorPopup()), t != y.instance.config.tokenErrorMsg.BACK_NORMAL && t != y.instance.config.tokenErrorMsg.BACK_ABNORMAL || (this.hasInitConnect = !1), this.node.active && (this.gameViewLoader.reset(), clearTimeout(this._retryTimeout), t == y.instance.config.tokenErrorMsg.REQUEST_TOKEN_FAIL || t == y.instance.config.tokenErrorMsg.NO_TOKEN ? this._retryTimeout = setTimeout(this.retryRequestToken, this._retryInterval) : this.retryRequestToken()))
            }
        }
        get widget() {
            return this._widget || (this._widget = this.node.getComponent(g)), this._widget
        }
        onLoad() {
            this.registerTokenEvents(), this.init()
        }
        registerTokenEvents() {
            y.instance.unregisterMessageCenter(y.instance.config.BroadCast.MTT_TOKEN_END, this.node), y.instance.unregisterMessageCenter(y.instance.config.BroadCast.MTT_TOKEN_ERROR, this.node), y.instance.unregisterMessageCenter(y.instance.config.BroadCast.MTT_TOKEN_UPDATE, this.node), y.instance.unregisterMessageCenter(y.instance.config.BroadCast.CHANGE_LANGUAGE, this.node), y.instance.registerMessageCenter(y.instance.config.BroadCast.MTT_TOKEN_END, this.onTokenEnd, this.node), y.instance.registerMessageCenter(y.instance.config.BroadCast.MTT_TOKEN_ERROR, this.onTokenError, this.node), y.instance.registerMessageCenter(y.instance.config.BroadCast.MTT_TOKEN_UPDATE, this.onTokenEnd, this.node), this.init()
        }
        onEnable() {
            let t = cc_mtt.vv.DataManager.getNow();
            this.hasInit && i(this.node) && y.instance.cv.resMgr.adaptWidget(this.node, !0), i(this.node) && this.hasInit && t - this.lastOnEnableTime > this.onEnableGetListInterval && (this.lastOnEnableTime = t, v.checkNetwork("ImpokerHallFeature onEnable requestGameList") && (this.initPagePrefab(!1), this._skipInitInStart = !0))
        }
        initPagePrefab(t, e = !1) {
            cc_mtt.vv.ConsoleLog.log("MTTManager start", cc_mtt.vv.DataManager.token, cc_mtt.vv.DataManager.worldNetwork ? cc_mtt.vv.DataManager.worldNetwork.lastVerifyToken + " " + cc_mtt.vv.DataManager.worldNetwork.isConnected() : "null", i(this.node)), cc_mtt.vv.DataManager.worldNetwork && cc_mtt.vv.DataManager.token == cc_mtt.vv.DataManager.worldNetwork.lastVerifyToken && cc_mtt.vv.DataManager.worldNetwork.isConnected() ? (t && this.bindMessageHandler(), !e && i(this.node) && this.createPagePrefab(), H.instance && !H.instance.isInitHoldem && H.instance.preStartMttGame(this), cc_mtt.vv.ConsoleLog.log("MTTManager start same token and world already connected")) : e || this.connect()
        }
        init() {
            this.hasInit || (this.hasInit = !0, w.instance.sendCCJS("enter"), M.instance = this, this.initBasicScene(this.isMain), this.attachGameListPage(), this.startpage(), y.instance.cv.resMgr.adaptWidget(this.node, !0, !1), console.log("changeMTTStyle ImpokerHallFeature 1"), this.dialogController.dialogStyle = 1, this.loadingStyle = 1, y.instance.sendMessageCenter("changeMTTStyle"))
        }
        onDestroy() {
            super.onDestroy(), clearTimeout(this.mttSetTimeout), y.instance.unregisterMessageCenter(y.instance.config.BroadCast.MTT_TOKEN_END, this.node), y.instance.unregisterMessageCenter(y.instance.config.BroadCast.MTT_TOKEN_ERROR, this.node), y.instance.unregisterMessageCenter(y.instance.config.BroadCast.MTT_TOKEN_UPDATE, this.node), this.unscheduleAllCallbacks()
        }
        start() {
            this.initPagePrefab(!0, this._skipInitInStart), this._skipInitInStart = !1, this.createUploadLog()
        }
        showArchivedMttTournament() {
            cc_mtt.vv.DataManager.hasArchivedMttTournament && (cc_mtt.vv.ConsoleLog.log("show archived mtt tournament"), _.instance.hideContainer(), this._mttPage.getComponent(R).refreshPage(!0), this.movePageFromRight(this._mttPage, this.hallLayer, !0, !0), this.autoOpenGameView())
        }
        startpage() {
            this.scheduleOnce((() => {
                this.showArchivedMttTournament()
            }))
        }
        initWebSocket() {
            v.bindSocketMessage(), cc_mtt.vv.DataManager.worldNetwork.setReConnect(), this.setWorldWebSocketCallBack(), this.bindMessageHandler()
        }
        needAutoCallMTTHall() {
            return !cc_mtt.vv.DataManager.isEndGame && (cc_mtt.vv.DataManager.currentResultId > 0 || G.appConfig.isLandscapeLayout && V.LastSelectedTournamentId > 0)
        }
        initStartPageAction() {
            i(this.node) && (_.hide("Hall"), this.initWebSocket(), cc_mtt.vv.AssetsManager.popupParent = this.node, cc_mtt.vv.ConsoleLog.log("cc_mtt.vv.DataManager.webPage", cc_mtt.vv.DataManager.webPage))
        }
        createUploadLog() {
            E.writeWebLog && b.instance.loadRes("mtt/upload_web_log/UploadLog", a, null, ((t, e) => {
                if (!t) {
                    var n;
                    let t = null == (n = this.node.parent) || null == (n = n.parent) || null == (n = n.parent) || null == (n = n.getComponent("MTTGameTabComp")) ? void 0 : n.listContainer,
                        o = m(e);
                    i(t) ? (o.parent = t, o.setPosition(new d(t.getComponent(u).width * t.getComponent(u).anchorX - o.getComponent(u).width * o.getComponent(u).anchorX - 50, -t.getComponent(u).anchorX * o.getComponent(u).height, 0))) : (o.parent = this.node, o.setPosition(new d(this.node.getComponent(u).width * this.node.getComponent(u).anchorX - o.getComponent(u).width * o.getComponent(u).anchorX - 50, 0 - this.node.getComponent(u).height * this.node.getComponent(u).anchorY + o.getComponent(u).height * o.getComponent(u).anchorY + 50, 0)))
                }
            })), cc_mtt.vv.ConsoleLog.log("can upload log:", E.writeWebLog)
        }
        createPagePrefab() {
            switch (this.init(), cc_mtt.vv.DataManager.webPage) {
                case k.WEB_PAGE.GAME_RESULT:
                    if (cc_mtt.vv.DataManager.currentResultId > 0) {
                        let t = cc_mtt.vv.DataManager.currentResultId;
                        this.onClickProfile((() => {
                            this._profilePage.getComponent(I).onHistoryClicked((() => {
                                this._profilePage.getComponent(I)._historyPage.getComponent(L).clickTuple(t, (() => {
                                    this._profilePage.getComponent(I)._historyPage.getComponent(L)._historyDetailPage.getComponent(D).onRecordClicked(!0), this.activeBlackScreen(!1)
                                }), !0)
                            }), !0)
                        }), !0), cc_mtt.vv.DataManager.currentResultId = 0
                    } else this.onClickProfile((() => {
                        this._profilePage.getComponent(I).onHistoryClicked((() => {
                            this._profilePage.getComponent(I)._historyPage.getComponent(L).backButton.interactable = !1, this.activeBlackScreen(!1)
                        }), !0)
                    }), !0);
                    break;
                case k.WEB_PAGE.TOOL:
                    this.onClickProfile((() => {
                        this._profilePage.getComponent(I).onBagClicked((() => {
                            this._profilePage.getComponent(I)._bagPage.getComponent(P).backButton.interactable = !1, this.activeBlackScreen(!1)
                        }), !0)
                    }), !0);
                    break;
                default:
                    this.callGamePage(k.GAME_LEVEL_LIST_ID.MTT, !0)
            }
        }
        autoOpenGameViewAction() {
            if (cc_mtt.vv.ConsoleLog.log("autoOpenGameView", cc_mtt.vv.DataManager.currentResultId, cc_mtt.vv.DataManager.isEndGame, cc_mtt.vv.DataManager.currentGameInfo), this.needAutoCallMTTHall()) {
                let t = 0;
                V.LastSelectedTournamentId > 0 ? t = V.LastSelectedTournamentId : (t = cc_mtt.vv.DataManager.currentResultId, V.PreviousSelectedTournamentId = V.LastSelectedTournamentId, V.LastSelectedTournamentId = t), this.callMTTHall(t, G.appConfig.isLandscapeLayout)
            } else this.activeBlackScreen(!1)
        }
        onShowComplete(t) {
            this.blockLayer.active = !1, this.activeBlackScreen(!1), t.onShowAnimationEnd()
        }
        onShowMttEnd() {
            let t = this._mttPage.getComponent(R)._mttHall.getComponent(A);
            t.removeScrollEndResponse(), t.pageThreeFinalPlayerPage.clickTupleByUserId(cc_mtt.vv.DataManager.currentResultUserId, (() => {
                this.onShowComplete(t)
            }))
        }
        callMTTHall(t, e = !1, n = !1) {
            let o = this._mttPage.getComponent(R),
                a = o._mttHall.getComponent(A);
            cc_mtt.vv.ConsoleLog.log("ImpokerHallFeature callMTTHall", i(this._mttPage), i(a));
            const s = () => {
                let s = cc_mtt.vv.DataManager.GAME_LEVEL_LIST.MttTournaments.find((e => e.Detail.Id == t));
                return !!s && (cc_mtt.vv.ConsoleLog.log("ImpokerHallFeature callMTTHall2"), a.setScollEndResponse(this.onScrollEndResponse), o.showMTTHall(s, e, (() => {
                    cc_mtt.vv.DataManager.currentResultUserId ? a.onTableClicked() : this.onShowComplete(a)
                })), n && this.selectMttPrefabTuple(t), !0)
            };
            s() || o.switchToFullList((() => {
                s() && this.activeBlackScreen(!1)
            }), (() => {
                this.activeBlackScreen(!1)
            }))
        }
        selectMttPrefabTuple(t) {
            var e;
            let n = this._mttPage.getComponent(R);
            n.refreshListData(), n.onChangedPage(0), null == (e = n.listScrollItem) || e.scrollToItem((e => {
                var n;
                return (null == e || null == (n = e.Detail) ? void 0 : n.Id) == t
            }), .5, (() => {
                const e = n.listScrollItem.node.getComponent(T).content.children;
                for (let n = 0; n < e.length; n++) {
                    var o;
                    const a = e[n].getComponent(V);
                    if (a && t == (null == (o = a._tupleInfo) ? void 0 : o.Detail.Id)) {
                        a.onClickTuple();
                        break
                    }
                }
            }))
        }
        update(t) {
            super.update(t)
        }
        setWorldWebSocketCallBack() {
            if (O.instance);
            else {
                var t = this;
                v.setCallBack((e => {
                    t.repeatLoginDialog(e)
                }), (e => {
                    t.updateUserInfo(e)
                }), (e => {
                    t.broadcastMessageEnvelope(e)
                }), (() => {
                    t.reconnectShowLoading()
                }), (() => {
                    t.reconnectHideLoading()
                }), null, (() => {
                    cc_mtt.vv.ConsoleLog.log("World verify token", cc_mtt.vv.DataManager.token), cc_mtt.vv.DataManager.token ? v.getInstance().requestSecureTokenCheck() : t && t.onTokenError && t.onTokenError instanceof Function && t.onTokenError(y.instance.config.tokenErrorMsg.NO_TOKEN)
                }), (() => {
                    i(t.node) && (t.createPagePrefab(), H.instance && !H.instance.isInitHoldem && H.instance.preStartMttGame(t))
                }))
            }
            if (cc_mtt.vv.DataManager.token) {
                const t = v.getInstance();
                t.isConnected() || t.isReconnecting || t.connect("wws_set_cb")
            } else cc_mtt.vv.ConsoleLog.log("setWorldWebSocketCallBack token is empty")
        }
        reconnectShowLoading() {
            this._topUpPage && this._topUpPage.active ? _.show("Hall World", this.layers[0]) : _.show("Hall World")
        }
        reconnectHideLoading() {
            _.hide("Hall World")
        }
        bindMessageHandler() {
            this.gameViewLoader.bindMessageHandler(), G.MessageCenter.unregister("show_loading", this.node), G.MessageCenter.unregister("hide_loading", this.node), G.MessageCenter.register("show_loading", this.onShowLoading.bind(this), this.node), G.MessageCenter.register("hide_loading", this.onHideLoading.bind(this), this.node), cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(p.commonProto.SocketMessageId.User_Info_Response, this.onUserInfoResponse), cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(p.commonProto.SocketMessageId.User_Login_Response, this.responseUserLogin), cc_mtt.vv.DataManager.worldNetwork.AddMessageHandler(p.commonProto.SocketMessageId.User_Info_Response, this.onUserInfoResponse), cc_mtt.vv.DataManager.worldNetwork.AddMessageHandler(p.commonProto.SocketMessageId.User_Login_Response, this.responseUserLogin)
        }
        unbindMessageHandler() {
            G.MessageCenter.unregister("show_loading", this.node), G.MessageCenter.unregister("hide_loading", this.node), v.hasInstance() && (this.gameViewLoader.unbindMessageHandler(), cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(p.commonProto.SocketMessageId.User_Info_Response, this.onUserInfoResponse), cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(p.commonProto.SocketMessageId.User_Login_Response, this.responseUserLogin))
        }
        callPopUpBox(t, e, n = "ERROR_CODE_PKW.TITLE", o, a = null, s = "") {
            i(this.node) && (o = o || this.layers[7], cc_mtt.vv.AssetsManager.showDialogBox(n, t, !1, [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: e
            }], o, a, s))
        }
        callLogoutPopUpBox(t, e, n = "ERROR_CODE_PKW.TITLE", o) {
            cc_mtt.vv.ConsoleLog.log("callPopUpBox", t), i(this.node) && (o = o || this.layers[7], cc_mtt.vv.AssetsManager.showDialogBox(n, t, !1, [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: e
            }], o))
        }
        repeatLoginDialog(t) {
            if (t && t.ErrorCode) {
                let e = "ERROR_CODE_PKW." + t.ErrorCode;
                this.callLogoutPopUpBox(e, (() => {
                    v.logout()
                }))
            } else cc_mtt.vv.ConsoleLog.log("impoker repeatLoginDialog: no msg or msg error code"), this.callLogoutPopUpBox("GAME.OTHER_LOGIN_PKW", (() => {
                v.logout()
            }))
        }
        getMttListPrefab() {
            var t;
            let e = p.commonProto.PLATFORM.PKW,
                n = null == (t = this.mttListPrefabFullScreenList) ? void 0 : t[0];
            return this.mttListPrefabFullScreenList && e < this.mttListPrefabFullScreenList.length && (n = this.mttListPrefabFullScreenList[e]), n || B.hasInstance() && B.getInstance().traceJSException("Hall", "MTT prefab is not available", "", !1), n
        }
        attachGameListPage() {
            if (this.mttListPrefabFullScreenList && this.mttListPrefabFullScreenList.length > 0 && !i(this._mttPage)) {
                let t = this.getMttListPrefab();
                this._mttPage = m(t), this._mttPage.parent = this.layers[0];
                for (let t of this.layers[0].children) t.position = this.position[2].position
            }
        }
        updateUserInfo(t) {
            cc_mtt.vv.ConsoleLog.log("updateUserInfo", t), cc_mtt.vv.DataManager.userData = t.UserData
        }
        broadcastMessageEnvelope(t) {
            switch (cc_mtt.vv.ConsoleLog.log("@@@@@ ImpokerHallFeature broadcastMessageEnvelope", t.TypeId, t), t.TypeId) {
                case 1e3: {
                    const e = p.commonProto.Broadcast_Message_Enter_Game.decode(t.Body);
                    cc_mtt.vv.ConsoleLog.log("@@@@@ ImpokerHallFeature broadcastMessageEnvelope msg", e), e.TypeId == p.commonProto.GAME_CATEGORY.MTT && W.selfTours.manualUpdateTournament({
                        TournamentId: e.TournamentId,
                        MttTournamentStatus: p.commonProto.MTT_GAME_STATUS.STARTED
                    });
                    break
                }
                case 1002: {
                    var e;
                    const n = p.commonProto.Broadcast_Message_Out_Game.decode(t.Body);
                    cc_mtt.vv.ConsoleLog.log("@@@@@ ImpokerHallFeature broadcastMessageEnvelope msg", n);
                    let o = cc_mtt.vv.DataManager.JoinedTournaments.findIndex((t => t.TournamentId == n.TournamentId));
                    o >= 0 ? (cc_mtt.vv.DataManager.JoinedTournaments[o].JoinStatus = n.JoinedStatus, cc_mtt.vv.ConsoleLog.log("check joined", o, cc_mtt.vv.DataManager.JoinedTournaments[o].JoinStatus)) : K.addJoinedTournaments(n.TournamentId, {
                        joinStatus: n.JoinedStatus
                    }), W.selfTours.manualUpdateTournament({
                        TournamentId: n.TournamentId,
                        JoinStatus: n.JoinedStatus
                    });
                    let a = null == (e = this._mttPage) || null == (e = e.getComponent(f)._mttHall) ? void 0 : e.getComponent(S);
                    a && a.node.active && a._mttHallInfo && a._mttHallInfo.TournamentId == n.TournamentId && (a.updateMyJoinStatus(), a.updateSignUpButton());
                    break
                }
                case 1004: {
                    const e = p.commonProto.Broadcast_Message_End_Game.decode(t.Body);
                    cc_mtt.vv.ConsoleLog.log("@@@@@ ImpokerHallFeature broadcastMessageEnvelope msg", e), e.TypeId == p.commonProto.GAME_CATEGORY.MTT && W.selfTours.manualRemoveTournament(e.TournamentId);
                    break
                }
                case p.commonProto.BROADCAST_MESSAGE_EVENT_TYPE.Release_GAME_NOTICE:
                    const n = p.commonProto.Broadcast_Message_End_Game.decode(t.Body);
                    if (cc_mtt.vv.ConsoleLog.log("ImpokerHallFeature broadcastMessageEnvelope 1006", n), n.TypeId == p.commonProto.GAME_CATEGORY.MTT) {
                        let e = h.getScene().getComponentInChildren("HallMttDetailRenderer");
                        if (this.callPopUpBox("ERROR_CODE_PKW." + p.commonProto.ErrorCode.Mtt_Tournament_Release, (() => {
                                var t, o;
                                H.instance && H.instance.removeMttRoom(n.TournamentId), this.requestGameList(k.GAME_LEVEL_LIST_ID.MTT), e && null != (t = e.node) && t.active && (null == (o = e.model) || null == (o = o.detailData) ? void 0 : o.TournamentId) == n.TournamentId && e.onClickButtonBack()
                            })), t.Uuid) {
                            const e = p.commonProto.UserUpdateBroadcastMsgRequest.create({
                                Token: cc_mtt.vv.DataManager.token,
                                Uuid: t.Uuid,
                                Result: k.BROADCAST_MSG_STATUS.READ
                            });
                            j.requestUpdateBroadcastMsgResult(e).then((t => {
                                cc_mtt.vv.ConsoleLog.log("ImpokerHallFeature broadcastMessageEnvelope requestUpdateBroadcastMsgResult", t)
                            }))
                        }
                        K.removeJoinedTournaments(n.TournamentId), G.MessageCenter.send("refreshLobby")
                    }
                    break;
                case 4508: {
                    const e = p.commonProto.Broadcast_Message_Start_Game.decode(t.Body);
                    if (e && e.TypeId == p.commonProto.GAME_CATEGORY.MTT && 60 == e.LeftTime) {
                        const t = () => {
                            W.selfTours.manualUpdateTournament({
                                TournamentId: e.TournamentId,
                                MttTournamentStatus: p.commonProto.MTT_GAME_STATUS.STARTED
                            }), G.appConfig.isLandscapeLayout && G.appConfig.getGeneralConfig().multiWindowEnabled && (new q).callGameView(e.GameMode, k.GAME_LEVEL_LIST_ID.MTT, e.TournamentId, 0, 0, !1, 0)
                        };
                        this.checkTournamentStarted(e.TournamentId, t, (() => {
                            console.error("broadcast 4508 | MTT Tournament not started", e.TournamentId)
                        }))
                    }
                    break
                }
                default:
                    cc_mtt.vv.ConsoleLog.log("broadcast message", t)
            }
        }
        checkTournamentStarted(t, e, n) {
            const o = K.getJoinedTournamentById(t);
            o ? j.requestMttTournamentStatus(t, (t => {
                i(t) && this.isMultipleGameStart(t, o) || this.isJoinedTournamentStart(o) ? null == e || e() : null == n || n()
            }), (() => {
                this.isJoinedTournamentStart(o) ? null == e || e() : null == n || n()
            })) : null == n || n()
        }
        onClickProfile(t = !1, e = !1) {
            this.createProfilePage(!1), t && t instanceof Function && t()
        }
        autoJoinTournament(t = !1) {
            if (t ? this.autoJoinRetryTimes = 0 : this.autoJoinRetryTimes++, i(this.node) && G.appConfig.isLandscapeLayout && G.appConfig.getGeneralConfig().multiWindowEnabled && F.isDesktopMultiWindowSupported()) {
                const t = cc_mtt.vv.DataManager.JoinedTournaments || [];
                let e = !1;
                this.countRequest = 0;
                for (let e of t)(e.JoinStatus != p.commonProto.MTT_GAME_STATUS.NOT_STARTED || e.JoinStatus == p.commonProto.MTT_GAME_STATUS.NOT_STARTED) && e.JoinStatus != p.commonProto.MTT_GAME_STATUS.ENDED && e.JoinStatus > 0 && this.countRequest++;
                let n = this;
                for (let o of t) {
                    const a = () => {
                        var a;
                        const s = N.AutoStartTournament + o.TournamentId;
                        null == (a = B.getInstance()) || a.startSpan(s, "AutoStartTournament", t), J.requestMttTournamentDetail(o.TournamentId, (t => {
                            var a;
                            o.TournamentId !== V.LastSelectedTournamentId || 0 == t.ErrorCode && t.TournamentDetail || (V.LastSelectedTournamentId = 0);
                            let r = {
                                TournamentId: o.TournamentId,
                                ErrorCode: null == t ? void 0 : t.ErrorCode
                            };
                            if (null == (a = B.getInstance()) || a.addEventToSpan(s, "SuccessGetTournamentDetail", r), !t.ErrorCode) {
                                const n = t.TournamentDetail;
                                if (n) {
                                    var i, l;
                                    let t = n.StartingTime;
                                    var c;
                                    if (!t) return void(null == (c = B.getInstance()) || c.endSpan(s, "InvalidStartTime", {
                                        StartingTime: n.StartingTime
                                    }));
                                    let o = cc_mtt.vv.DataManager.getNow().getTime();
                                    if (t instanceof Date) {
                                        let e = t.getTime();
                                        var g;
                                        if (e > o || 0 == e) return void(null == (g = B.getInstance()) || g.endSpan(s, "TournamentNotStart", {
                                            startTimeValue: e,
                                            currentTimeValue: o
                                        }))
                                    } else if (t instanceof Y.google.protobuf.Timestamp) {
                                        var m;
                                        if (t.seconds > o / 1e3 || 0 == t.seconds) return void(null == (m = B.getInstance()) || m.endSpan(s, "TournamentNotStart", {
                                            "startTime.seconds": t.seconds,
                                            currentTimeValue: o
                                        }))
                                    }
                                    var d, u;
                                    if (n.SignupCount >= 5 && n.MultiFlightLevel > 0) return void(null == (d = B.getInstance()) || d.endSpan(s, "InvalidCondition", {
                                        SignupCount: n.SignupCount,
                                        MultiFlightLevel: n.MultiFlightLevel
                                    }));
                                    if (n.Status)
                                        if (n.Status == p.commonProto.MTT_GAME_STATUS.NOT_STARTED || n.Status == p.commonProto.MTT_GAME_STATUS.ENDED) return void(null == (u = B.getInstance()) || u.endSpan(s, "InvalidStatus", {
                                            Status: n.Status
                                        }));
                                    e || (G.MessageCenter.send("jumpToMtt"), e = !0), null == (i = B.getInstance()) || i.stopSpan(s), null == (l = this.gameViewLoader) || l.callGameView(n.GameMode, k.GAME_LEVEL_LIST_ID.MTT, n.TournamentId, 0, 0, !1, n.PlayOnJoint, null, !1)
                                }
                            }
                            n && n.countRequest--
                        }), (t => {
                            var e;
                            o.TournamentId === V.LastSelectedTournamentId && (V.LastSelectedTournamentId = 0);
                            let a = {
                                error: t,
                                _autoJoinRetryTimes: (null == n ? void 0 : n.autoJoinRetryTimes) ?? "0"
                            };
                            null == (e = B.getInstance()) || e.endSpan(s, "ErrorGetTournamentDetail", a), n && (n.countRequest--, n.countRequest <= 0 && n.autoJoinRetryTimes < 10 && n.scheduleOnce(n.autoJoinTournament))
                        }))
                    };
                    o.JoinStatus === p.commonProto.MTT_GAME_STATUS.ENDED ? j.requestMttTournamentStatus(o.TournamentId, (t => {
                        this.isMultipleGameStart(t, o.JoinStatus) && a()
                    }), (() => {
                        cc_mtt.vv.ConsoleLog.log("ImpokerHallFeature requestMttTournamentStatus error"), this.isJoinedTournamentStart(o) && a()
                    })) : this.isJoinedTournamentStart(o) && a()
                }
            }
        }
        isMultipleGameStart(t, e) {
            return t.Status != p.commonProto.MTT_GAME_STATUS.NOT_STARTED && t.Status != p.commonProto.MTT_GAME_STATUS.ENDED && e > 0 || t.IsPreparing
        }
        isJoinedTournamentStart(t) {
            return (t.JoinStatus != p.commonProto.MTT_GAME_STATUS.NOT_STARTED || t.JoinStatus == p.commonProto.MTT_GAME_STATUS.NOT_STARTED) && t.JoinStatus != p.commonProto.MTT_GAME_STATUS.ENDED && t.JoinStatus > 0
        }
        refreshMTTLobby() {
            this._mttPage.getComponent(R).storeSvOffsets(), this.callGamePage(k.GAME_LEVEL_LIST_ID.MTT, !0, this.autoOpenGameView)
        }
        showTokenErrorPopup() {
            U.hasInstance() && U.getInstance().addIssueDefault("onTokenError", "message", `token error: ${this._logTimes} times`);
            let t = () => {};
            G.popUp.showMsg({
                txt: G.config.getStringData("ServerErrorCode5"),
                sureCallback: t,
                cancelCallback: t,
                onXCancelCallback: !0
            })
        }
        show(t) {
            this.node.active = t
        }
        isShow() {
            return this.node.active
        }
    }).prototype, "mttListPrefabFullScreenList", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), tt = e($.prototype, "hallMask", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = $)) || Q));
    o._RF.pop()
}