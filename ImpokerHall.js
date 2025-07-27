import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as P from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as m from "./cc.js";
import * as _ from "./cc.js";
import * as M from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as v from "./cc.js";
import * as i from "./cc.js";
import * as L from "./cc.js";
import * as I from "./mttconfig.js";
import * as b from "./mttconfig.js";
import * as C from "./mttconfig.js";
import * as A from "./mttconfig.js";
import * as G from "./Pb.js";
import * as D from "./commonProto.mjs_cjs=&original=.js";
import * as k from "./httpApis.js";
import * as R from "./Translator.js";
import * as S from "./Translator.js";
import * as B from "./MttPrefab.js";
import * as w from "./MttHall.js";
import * as y from "./TopUpPage.js";
import * as O from "./AgentCodeInputPage.js";
import * as N from "./StatusBar.js";
import * as U from "./ProfilePrefab.js";
import * as H from "./worldWebsocket.js";
import * as V from "./HallNotification.js";
import * as W from "./Holdem_View.js";
import * as x from "./ImpokerHallBannerPageViewControl.js";
import * as F from "./HistoryPrefab.js";
import * as K from "./HistoryDetailPrefab.js";
import * as z from "./NodePage.js";
import * as q from "./CheckUpdateTools.js";
import * as Y from "./CheckUpdateTools.js";
import * as J from "./MessagePage.js";
import * as j from "./SystemAvatar.js";
import * as X from "./PersonalSetting.js";
import * as mod24 from "./GameViewLoader.js";
import * as Q from "./LoadingBlocker.js";
import * as Z from "./SngPrefab.js";
import * as ee from "./PinePrefab.js";
import * as te from "./ConnectionLine.js";
import * as ae from "./PswBox.js";
import * as oe from "./Marquee.js";
import * as ie from "./AndroidBackButton.js";
import * as ne from "./websocket.js";
import * as se from "./ResourcesLoader.js";
import * as le from "./SignUpWithToolPopUp.js";
import * as re from "./GiftPlayerPrefab.js";
import * as ce from "./MttPrefabPkw.js";
import * as ge from "./BasicScene.js";
import * as me from "./cv.js";
import * as he from "./MttItemHelper.js";
import * as _e from "./FullscreenController.js";
import * as pe from "./HttpApiTournamentDetail.js";
import * as ue from "./DataManager.js";
import * as de from "./AssetsManager.js";
import * as Pe from "./Enum.js";
import * as ve from "./commonProto.js";

function main() {
    var Le, Ee, Me, fe, Te, Ie, Ce, Ae, be, Ge, De, ke, Re, Se, Be, we, ye, Oe, Ne, Ue, He, Ve, We, xe, Fe, Ke, ze, qe, Ye, Je, je, Xe, $e, Qe, Ze, et, tt, at, ot, it, nt, st, lt, rt, ct, gt, mt, ht, _t, pt, ut, dt, Pt, vt, Lt, Et, Mt, ft, Tt, It, Ct, At, bt, Gt, Dt, kt, Rt, St, Bt, wt, yt, Ot, Nt, Ut, Ht, Vt, Wt, xt, Ft;
    o._RF.push({}, "b4ffalEuhdHf4pChrrhyDx3", "ImpokerHall", void 0);
    const {
        ccclass: Kt,
        property: zt
    } = c;
    e("ImpokerHall", (Le = zt(i), Ee = zt([i]), Me = zt(i), fe = zt(i), Te = zt(i), Ie = zt([i]), Ce = zt(n), Ae = zt(s), be = zt(i), Ge = zt(i), De = zt(s), ke = zt(i), Re = zt(i), Se = zt(s), Be = zt(l), we = zt(l), ye = zt(l), Oe = zt(l), Ne = zt([l]), Ue = zt(r), He = zt(i), Ve = zt(i), We = zt(l), xe = zt(n), Fe = zt(n), Ke = zt(n), ze = zt(n), qe = zt([n]), Ye = zt(n), Je = zt(n), je = zt(i), Xe = zt(i), $e = zt(i), Qe = zt(i), Ze = zt(i), et = zt(i), tt = zt(i), at = zt(H), Kt(((Ft = class e extends ce {
        constructor(...e) {
            super(...e), a(this, "hallLayer", nt, this), a(this, "layers", st, this), a(this, "blockLayer", lt, this), a(this, "blackScreen", rt, this), a(this, "gameReminderParent", ct, this), a(this, "position", gt, this), a(this, "reConnectLoading", mt, this), a(this, "messageButton", ht, this), a(this, "messageBell", _t, this), a(this, "messageRedDot", pt, this), a(this, "eventButton", ut, this), a(this, "eventBell", dt, this), a(this, "eventRedDot", Pt, this), a(this, "withdrawButton", vt, this), a(this, "pineNormalTableNum", Lt, this), a(this, "sngTableNum", Et, this), a(this, "pineCowboyTableNum", Mt, this), a(this, "mttTableNum", ft, this), a(this, "profileBar", Tt, this), a(this, "avatar", It, this), a(this, "refreshButton", Ct, this), a(this, "newBagsHint", At, this), a(this, "newBagsNum", bt, this), a(this, "profilePrefab", Gt, this), a(this, "messagePrefab", Dt, this), a(this, "topUpPrefab", kt, this), a(this, "agentCodeInputPrefab", Rt, this), a(this, "gamePagePrefabs", St, this), a(this, "hallNotificationPrefab", Bt, this), a(this, "gameReminderPrefab", wt, this), a(this, "_pinePage", yt, this), a(this, "_sngPage", Ot, this), a(this, "_mttPage", Nt, this), a(this, "_profilePage", Ut, this), a(this, "_messagePage", Ht, this), a(this, "_topUpPage", Vt, this), a(this, "_agentCodeInputPage", Wt, this), a(this, "_hallNotification", xt, this), this._lastPauseTime = Number.MAX_SAFE_INTEGER, this._showHallNotificationPauseTime = 144e5, this._hideHallNotificationTime = 864e5, this._timeUpdate = 5, this._timeUpdateInterval = 5, this.pageActionSpeed = .15, this.loadingDelay = .2, this._avatarUrl = "", this._reConnectLoading = null, this.marquee = null, this.pineGameViewPrefab = null, this.holdemGameViewPrefab = null, this.hallMain = null, this.loginPopupBanner = null, this.pendingCallback = [], this.gameViewLoader = new X, this._connectionLineNode = null, this.isAppPause = !1, this.dialogLocks = [], this.isHallLayerUpdatePaused = !1, this.onRefreshCallback = void 0, this.onUserInfoResponse = e => {
                if (cc_mtt.vv.ConsoleLog.log("onUserInfoResponse"), e && e.UserData) {
                    cc_mtt.vv.DataManager.userData = e.UserData, this.refreshUserInfo();
                    let t = g.getScene().getComponentInChildren(le);
                    t && t.node.active && (cc_mtt.vv.ConsoleLog.log("updateGiftPlayerReLogin"), t.refreshPage())
                }
            }, this.enterMiniGame = () => {
                $.show("hall minigame"), cc_mtt.vv.DataManager.worldNetwork.enterMiniGame({
                    MiniGameId: cc_mtt.vv.DataManager.miniGameId,
                    Platform: cc_mtt.vv.DataManager.miniGamePlatform,
                    TicketId: cc_mtt.vv.DataManager.miniGameToolId
                })
            }, this.exitMiniGame = () => {
                $.show("hall minigame"), cc_mtt.vv.DataManager.worldNetwork.exitMiniGame({
                    MiniGameId: cc_mtt.vv.DataManager.miniGameId,
                    Platform: cc_mtt.vv.DataManager.miniGamePlatform
                })
            }, this.onBLMiniGameEnterRes = e => {
                if (cc_mtt.vv.ConsoleLog.log("onBLMiniGameEnterRes"), $.hide("hall minigame"), e)
                    if (e.ErrorCode && e.ErrorCode != Pe.commonProto.ErrorCode.GOLD_INSUFFICENT && e.ErrorCode != Pe.commonProto.ErrorCode.Mini_Game_User_Not_Taken_Out) {
                        let t = {
                            Translation: "MINIGAME.MINIGAME_ENTER_ERROR",
                            payload: t => k(t) + ": " + e.ErrorCode
                        };
                        this.callPopUpBox(t, (() => {}))
                    } else e.Url ? (cc_mtt.vv.DataManager.miniGameURL = e.Url, U.reconnectMode = ie.FOREVER_RECONNECT, cc_mtt.vv.AssetsManager.loadScene(I.SCENE_NAME.MINIGAME)) : this.callPopUpBox("MINIGAME.MINIGAME_LOAD_ERROR_PARAM", (() => {}));
                else this.callPopUpBox("MINIGAME.MINIGAME_LOAD_ERROR_PARAM", (() => {}))
            }, this.onBLMiniGameExitRes = e => {
                if (cc_mtt.vv.ConsoleLog.log("onBLMiniGameExitRes"), $.hide("hall minigame"), e) {
                    let t = () => {
                        cc_mtt.vv.DataManager.miniGameId = 0, cc_mtt.vv.DataManager.miniGamePlatform = 0, cc_mtt.vv.DataManager.miniGameToolId = 0, cc_mtt.vv.DataManager.miniGameURL = ""
                    };
                    if (e.ErrorCode)
                        if (e.ErrorCode === Pe.commonProto.ErrorCode.Mini_Game_Bet_Amount_Fewer_Than_Tool_Value) t(), this.callPopUpBox("MINIGAME.MINIGAME_EXIT_BET_FEWER_TOOL_VALUE", (() => {
                            this.checkMiniGameRedPocket()
                        }));
                        else {
                            let t = {
                                Translation: "MINIGAME.MINIGAME_EXIT_ERROR",
                                payload: t => k(t) + ": " + e.ErrorCode
                            };
                            switch (e.ErrorCode) {
                                case 107:
                                    t = "ERROR_CODE_PKW.107"
                            }
                            this.callRetryPopUpBox(t, (() => {
                                this.exitMiniGame()
                            }), (() => {
                                this.checkMiniGameRedPocket()
                            }))
                        }
                    else t(), this.checkMiniGameRedPocket()
                }
            }, this.onAppPause = () => {
                this.isAppPause ? cc_mtt.vv.ConsoleLog.log("onAppPause hall other") : (this.isAppPause = !0, this._lastPauseTime = (new Date).getTime(), cc_mtt.vv.ConsoleLog.log("onAppPause hall", this._lastPauseTime)), B.instance && m(B.instance.node) && B.instance.node.active && (B.instance.signUpButton.interactable = !1)
            }, this.onAppResume = () => {
                if (this.isAppPause) {
                    this.isAppPause = !1;
                    let e = (new Date).getTime();
                    cc_mtt.vv.ConsoleLog.log("onAppResume", e, e - this._lastPauseTime), (!cc_mtt.vv.DataManager.hasShowLoginPopup || e - this._lastPauseTime > this._showHallNotificationPauseTime) && this.showLoginPopupBanner(), this.checkHotupdate(), this.blockLayer && this.blockLayer.active && (cc_mtt.vv.ConsoleLog.log("onAppResume block layer is active, set to false now"), this.controlHallBlockLayer(!1, "onAppResume"))
                } else cc_mtt.vv.ConsoleLog.log("onAppResume hall other")
            }, this.onGameStartReminderEnterClickAction = e => {
                if (this.showLoading(), this.getGameStartReminderPlayCurrent(e)) this.hidLoading();
                else switch (e.TypeId) {
                    case 0:
                        this.callGameView(Pe.commonProto.MTT_GAME_MODE.PP, I.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL, e.RoomId);
                        break;
                    case 1:
                        this.callGameView(e.GameMode, I.GAME_LEVEL_LIST_ID.MTT, e.TournamentId);
                        break;
                    case 2:
                        e.IsAof ? this.callGameView(e.GameMode, I.GAME_LEVEL_LIST_ID.AOF, e.TournamentId) : this.callGameView(e.GameMode, I.GAME_LEVEL_LIST_ID.SNG, e.TournamentId)
                }
            }, this.onCreateConnectionLinePrefab = (e, t) => {
                try {
                    e && cc_mtt.vv.ConsoleLog.error(e), this._connectionLineNode = h(t), this._connectionLineNode.parent = this.hallLayer
                } catch (e) {
                    cc_mtt.vv.ConsoleLog.error(e)
                }
            }
        }
        onDestroy() {
            this.unbindMessageHandler(), this.unscheduleAllCallbacks(), _.off(p.EVENT_HIDE, this.onAppPause), _.off(p.EVENT_SHOW, this.onAppResume), K.releaseImage(this._avatarUrl), this.destroyBasicScene()
        }
        onLoad() {
            cc_mtt.vv.ConsoleLog.log("impoker hall onload"), u.garbageCollect(), cc_mtt.vv.DataManager = pe, cc_mtt.vv.AssetsManager = ue, e.instance = this, cc_mtt.vv.AssetsManager.init(), cc_mtt.vv.DataManager.worldNetwork.setReConnect(), U.bindSocketMessage(), this.setWorldWebSocketCallBack(), this.bindMessageHandler(), this.pageActionSpeed = cc_mtt.vv.DataManager.pageActionSpeed, this.attachGameListPage(), this.updateProfileBar(), this._messagePage || (this._messagePage = h(this.messagePrefab), this._messagePage.parent = this.layers[0], this._messagePage.setPosition(this.position[2].position));
            let t = this;
            cc_mtt.vv.AssetsManager.loadRes("prefab/common/status_bar", n, (function(e, a) {
                let o = h(a);
                o.parent = t.layers[9], o.setPosition(t.position[1].position), pe.StatusBar = o.getComponent(O)
            })), cc_mtt.vv.AssetsManager.loadRes("prefab/common/marquee", n, (function(e, a) {
                t.marquee = h(a), t.marquee.parent = t.layers[9]
            })), this._reConnectLoading || (this._reConnectLoading = h(this.reConnectLoading), this._reConnectLoading.parent = this.node, this._reConnectLoading.active = !1, cc_mtt.vv.DataManager.reConnectLoading = this._reConnectLoading), _.on(p.EVENT_HIDE, this.onAppPause), _.on(p.EVENT_SHOW, this.onAppResume);
            try {
                if (u.os === u.OS.IOS && u.isNative) {
                    let e = this.getComponent(d);
                    e && (e.top = "true" === P.reflection.callStaticMethod("AppController", "checkModern") ? 88 * 1.2171875 : 0, e.updateAlignment())
                }
            } catch (e) {
                cc_mtt.vv.ConsoleLog.log(e.stack.split("\n"))
            }(this.shouldUseScene() && cc_mtt.vv.DataManager.gameMode > 0 || cc_mtt.vv.DataManager.currentResultId > 0 || cc_mtt.vv.DataManager.currentFavouriteResultId > 0) && this.activeBlackScreen(!0), ge.dataHandler.getUserData().countryISO2 || ge.security.locationMonitor.getLocationDetails()
        }
        start() {
            cc_mtt.vv.ConsoleLog.log("impoker hall start"), this.checkRedDots(), this.showNewBags();
            let e = !1;
            if (u.isNative && !cc_mtt.vv.DataManager.hasRedirect) {
                let t = null;
                try {
                    u.os === u.OS.ANDROID ? t = JSON.parse(P.reflection.callStaticMethod("com/cocos/game/AppActivity", "notificationOpen", "()Ljava/lang/String;")) : u.os === u.OS.IOS && (t = JSON.parse(P.reflection.callStaticMethod("AppController", "notificationOpen")))
                } catch (e) {
                    cc_mtt.vv.ConsoleLog.log(e.stack.split("\n"))
                }
                if (t && (cc_mtt.vv.ConsoleLog.log("notification: ", t), t.redirect)) {
                    cc_mtt.vv.ConsoleLog.log("notification redirect: " + t.redirect);
                    let a = t.redirect.split("/");
                    switch (cc_mtt.vv.ConsoleLog.log("notification redirect url: " + a), a[0]) {
                        case "message":
                            cc_mtt.vv.DataManager.hasRedirect = !0, this._messagePage.getComponent(q)._redirect = a[1] ? Number(a[1]) : 0, e = !0;
                            break;
                        case "setting":
                            cc_mtt.vv.DataManager.hasRedirect = !0, this.onClickProfile((() => {
                                this._profilePage.getComponent(N).onSettingClicked()
                            }), !1), e = !0;
                            break;
                        default:
                            cc_mtt.vv.ConsoleLog.log("unknow url: " + a)
                    }
                }
            }
            if (this._messagePage.active = !0, cc_mtt.vv.ConsoleLog.log("impoker hall start, message page active: ", this._messagePage.active), !e) {
                if (cc_mtt.vv.ConsoleLog.log("ImpokerHall autoOpenView currentGamePageIdx", cc_mtt.vv.DataManager.gameMode), cc_mtt.vv.DataManager.currentResultId > 0) {
                    let e = cc_mtt.vv.DataManager.currentResultId;
                    this.onClickProfile((() => {
                        this._profilePage.getComponent(N).onHistoryClicked((() => {
                            this._profilePage.getComponent(N)._historyPage.getComponent(x).clickTuple(e, (() => {
                                this._profilePage.getComponent(N)._historyPage.getComponent(x)._historyDetailPage.getComponent(F).onRecordClicked(!0)
                            }), !0)
                        }), !0)
                    }), !0), cc_mtt.vv.DataManager.currentResultId = 0
                } else cc_mtt.vv.DataManager.currentFavouriteResultId > 0 ? (this.onClickProfile((() => {
                    this._profilePage.getComponent(N).onCardCollectionClicked(!0), this.activeBlackScreen(!1)
                }), !0), cc_mtt.vv.DataManager.currentFavouriteResultId = 0) : this.shouldUseScene() && cc_mtt.vv.DataManager.gameMode > 0 ? cc_mtt.vv.DataManager.joinedGameClicked ? this.onClickProfile((() => {
                    this.activeBlackScreen(!1)
                }), !0) : this.autoOpenView() : cc_mtt.vv.DataManager.hasShowLoginPopup || this.showLoginPopupBanner();
                cc_mtt.vv.ConsoleLog.log("MiniGameId MiniGamePlatform", cc_mtt.vv.DataManager.miniGameId, cc_mtt.vv.DataManager.miniGamePlatform), cc_mtt.vv.DataManager.miniGameId || cc_mtt.vv.DataManager.miniGamePlatform ? this.exitMiniGame() : this.checkBLMiniGameExit()
            }
            U.hasInstance() && !U.checkNetwork("update user data") && cc_mtt.vv.DataManager.worldNetwork.requestUserData(), this.scheduleOnce((() => {
                this.activeBlackScreen(!1)
            }), 3), this.checkHotupdate()
        }
        update(e) {}
        pauseHallLayerUpdate(e) {
            this.isHallLayerUpdatePaused = e
        }
        checkHotupdate() {
            z.checkHotupdate((e => {
                e && this.onReceivedHotUpdate()
            }))
        }
        setWorldWebSocketCallBack() {
            U.setCallBack((e => {
                this.repeatLoginDialog(e)
            }), (e => {
                this.updateUserInfo(e)
            }), (e => {
                this.broadcastMessageEnvelope(e)
            }), (() => {
                this._topUpPage && this._topUpPage.active ? $.show("Hall World", this.layers[0]) : $.show("Hall World")
            }), (() => {
                $.hide("Hall World")
            }), null, (() => {
                cc_mtt.vv.ConsoleLog.log("World verify token", cc_mtt.vv.DataManager.token), cc_mtt.vv.DataManager.token && U.getInstance().requestSecureTokenCheck()
            }))
        }
        bindMessageHandler() {
            this.gameViewLoader.bindMessageHandler(), cc_mtt.vv.DataManager.worldNetwork.AddMessageHandler(Pe.commonProto.SocketMessageId.User_Info_Response, this.onUserInfoResponse), cc_mtt.vv.DataManager.worldNetwork.AddMessageHandler(Pe.commonProto.SocketMessageId.BLMiniGameEnterRes, this.onBLMiniGameEnterRes), cc_mtt.vv.DataManager.worldNetwork.AddMessageHandler(Pe.commonProto.SocketMessageId.BLMiniGameExitRes, this.onBLMiniGameExitRes)
        }
        unbindMessageHandler() {
            U.hasInstance() && (this.gameViewLoader.unbindMessageHandler(), cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(Pe.commonProto.SocketMessageId.User_Info_Response, this.onUserInfoResponse), cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(Pe.commonProto.SocketMessageId.BLMiniGameEnterRes, this.onBLMiniGameEnterRes), cc_mtt.vv.DataManager.worldNetwork.RemoveMessageHandler(Pe.commonProto.SocketMessageId.BLMiniGameExitRes, this.onBLMiniGameExitRes))
        }
        onReceivedHotUpdate() {
            this.callPopUpBox("UPDATE.HOT_UPDATE_NEED", (() => {
                U.forceClose("HotUpdate"), _.restart()
            }))
        }
        updateUserInfo(e) {
            cc_mtt.vv.ConsoleLog.log("onUserInfoUpdated"), cc_mtt.vv.DataManager.userData = e.UserData, this.refreshUserInfo()
        }
        refreshUserInfo() {
            this.updateProfileBar(), this._profilePage && this._profilePage.getComponent(N).updateUserInfo()
        }
        requestBLMiniGamesNotTakenOut(e, t) {
            cc_mtt.vv.DataManager.worldNetwork.requestBLMiniGamesNotTakenOut((a => {
                a.Result ? e(a) : (cc_mtt.vv.ConsoleLog.log("requestBLMiniGamesNotTakenOut:error", a), t(a))
            }))
        }
        checkBLMiniGameActivityRewards(e, t) {
            e > 0 ? cc_mtt.vv.DataManager.worldNetwork.requestBLMiniGameActivityRewards((e => {
                cc_mtt.vv.ConsoleLog.log("requestBLMiniGameActivityRewards_RES"), u.isBrowser && cc_mtt.vv.ConsoleLog.log("requestBLMiniGameActivityRewards_RES_data", e && e.ActivityRewards ? e.ActivityRewards.slice() : ""), cc_mtt.vv.DataManager.miniGameActivityRewards = e && e.ActivityRewards ? e.ActivityRewards.reverse() : [], t()
            })) : cc_mtt.vv.DataManager.miniGameActivityRewards = []
        }
        checkBLMiniGameExit() {
            let e = new Pe.commonProto.BLMiniGameTakeInStatusRequest;
            e.MiniGameId = Pe.commonProto.GAME_CATEGORY.COW_BOY, cc_mtt.vv.DataManager.worldNetwork.requestBLMiniGameTakeInStatus(e, (e => {
                cc_mtt.vv.ConsoleLog.log("requestBLMiniGameTakeInStatus_RES"), m(this.node) && e.Status > 0 && (cc_mtt.vv.DataManager.miniGameId = Pe.commonProto.GAME_CATEGORY.COW_BOY, cc_mtt.vv.DataManager.miniGamePlatform = Pe.commonProto.PLATFORM.PKW, cc_mtt.vv.DataManager.miniGameToolId = 0, this.showBLMiniGameExitDialog())
            }))
        }
        broadcastMessageEnvelope(e) {
            var t;
            let a, o = {
                body: {}
            };
            switch (e.TypeId) {
                case 0:
                    o.body = Pe.commonProto.Broadcast_Message_Plain.decode(e.Body);
                    break;
                case 1:
                    o.body = Pe.commonProto.Broadcast_Message_Link.decode(e.Body);
                    break;
                case 2:
                    this.onReceivedHotUpdate();
                    break;
                case 1e3:
                    const i = Pe.commonProto.Broadcast_Message_Enter_Game.decode(e.Body);
                    cc_mtt.vv.ConsoleLog.log("msgEnterGame", i);
                    let n = this.getGameStartReminderPlayCurrent(i);
                    this._topUpPage && this._topUpPage.active && (n = !0), i.TypeId == Pe.commonProto.GAME_CATEGORY.MTT ? D.requestMttTournamentStatus(i.TournamentId, (e => {
                        cc_mtt.vv.ConsoleLog.log("broadcastMessageEnvelope", e), e.Status != Pe.commonProto.MTT_GAME_STATUS.STARTED && e.Status != Pe.commonProto.MTT_GAME_STATUS.STOP_SIGNUP || this.gameReminderPrefab && this.gameReminderPrefab.data.getComponent("GameStartReminder").reachTimeAlarm(n, i, this.gameReminderParent, this.node.getComponent(v).height, this.onGameStartReminderEnterClickAction)
                    }), (() => {
                        cc_mtt.vv.ConsoleLog.log("broadcastMessageEnvelope error")
                    })) : this.gameReminderPrefab && this.gameReminderPrefab.data.getComponent("GameStartReminder").reachTimeAlarm(n, i, this.gameReminderParent, this.node.getComponent(v).height, this.onGameStartReminderEnterClickAction), o.body = i;
                    break;
                case 1002:
                    const s = Pe.commonProto.Broadcast_Message_Out_Game.decode(e.Body);
                    cc_mtt.vv.ConsoleLog.log("broadcast:msgOutGame", s.TournamentId, s.JoinedStatus);
                    let l = cc_mtt.vv.DataManager.JoinedTournaments.findIndex((e => e.TournamentId == s.TournamentId));
                    l >= 0 ? (cc_mtt.vv.DataManager.JoinedTournaments[l].JoinStatus = s.JoinedStatus, cc_mtt.vv.ConsoleLog.log("check local joinStatus", l, cc_mtt.vv.DataManager.JoinedTournaments[l].JoinStatus)) : me.addJoinedTournaments(s.TournamentId, {
                        joinStatus: s.JoinedStatus
                    });
                    let r = null == (t = this._mttPage) || null == (t = t.getComponent(R)._mttHall) ? void 0 : t.getComponent(B);
                    r && r.node.active && r._mttHallInfo && r._mttHallInfo.TournamentId == s.TournamentId && (r.updateMyJoinStatus(), r.updateSignUpButton());
                    break;
                case 1003:
                    a = Pe.commonProto.Broadcast_Message_Mtt_Status_Changed_Notice.decode(e.Body), o.body = a;
                    break;
                case 1004:
                    a = Pe.commonProto.Broadcast_Message_End_Game.decode(e.Body), o.body = a;
                    break;
                case 1005:
                    o.body = Pe.commonProto.Broadcast_Message_End_Game.decode(e.Body);
                    break;
                case 2e3:
                    Pe.commonProto.Broadcast_Message_Events_Updated.decode(e.Body);
                    this.checkRedDots();
                    break;
                case 3e3:
                    let c = Pe.commonProto.Broadcast_Message_Events_RED_POCKET_NOTICE.decode(e.Body);
                    cc_mtt.vv.ConsoleLog.log("broadcastMsg: redPocketNotice", c), this.showBigWin(c);
                    break;
                case 3001:
                    let g = Pe.commonProto.Broadcast_Message_Events_RED_POCKET_CAROUSEL.decode(e.Body);
                    cc_mtt.vv.ConsoleLog.log("redPocketCarousel~~~ ", g), this.showMarquee(g);
                    break;
                case 3500:
                    let m = Pe.commonProto.Broadcast_Message_Got_Tool.decode(e.Body);
                    cc_mtt.vv.ConsoleLog.log("gotToolMsg~~~ ", m), this.showBagDistributionHints(m);
                    break;
                case 4e3:
                    this.reviewReject(e.Title.toUpperCase());
                    break;
                case 4500:
                    let h = Pe.commonProto.Broadcast_Message_Push_Carousel.decode(e.Body);
                    cc_mtt.vv.ConsoleLog.log("pushCarousel~~~ ", h), this.showMarquee(h);
                    break;
                default:
                    cc_mtt.vv.ConsoleLog.log("broadcast message", e), o.body = e.Body
            }
            0 !== Object.keys(o.body).length && (cc_mtt.vv.ConsoleLog.log("decode message", o.body), this._messagePage && this._messagePage.getComponent(q).addMessage(e.MessageType, !this.messageRedDot.active))
        }
        reviewReject(e) {
            let t = this,
                a = {
                    Translation: "PERSONAL_SETTING.GENERAL.DIALOG.REVIEW_REJECT.FORMAT",
                    payload: t => k(t).replace("{0}", k(`PERSONAL_SETTING.GENERAL.DIALOG.REVIEW_REJECT.${e}`)).replace("{1}", k(`PERSONAL_SETTING.GENERAL.DIALOG.REVIEW_REJECT.${e}.ACTION`))
                };
            this.callPopUpBox(a, (() => {
                u.localStorage.setItem(`${cc_mtt.vv.DataManager.userId}_${e}_REJECT`, (new Date).getTime().toString()), e === Y.avatar ? J.changeSystemAvatar(-1).then((e => {
                    e.status && (t.refreshUserInfo(), t.updatePersonalSettingPage(t, Y.avatar))
                })) : e === Y.nickname && t.updatePersonalSettingPage(t, Y.nickname)
            }))
        }
        updatePersonalSettingPage(e, t) {
            if (e._profilePage) {
                let a = e._profilePage.getComponent(N)._personalSettingPage;
                if (a.active) {
                    let e = a.getComponent(j);
                    t === Y.avatar ? (e.selfAvatar.initSet(), e.updateAvatar(!1)) : t === Y.nickname && e.updateNickname()
                }
            }
        }
        setPos(e, t, a = !1) {
            e.setPosition(t), this.setWidget(e, a), e.getComponent(v).width = this.node.getComponent(v).width, e.getComponent(v).height = this.node.getComponent(v).height
        }
        setWidget(e, t) {
            let a = e.getComponent(d);
            a.enabled = t, t && (a.left = 0, a.right = 0, a.updateAlignment())
        }
        movePageFromLeft(e, t = !0, a = !1, o) {
            m(e) ? "boolean" == typeof a && a ? (e.active = !0, this.setPos(e, this.position[1].position, !0), o && o instanceof Function && o(), t && 1 == this.hallLayer.active && (this.hallLayer.active = !1)) : (this.setPos(e, this.position[0].getPosition()), e.active = !0, L(e).to(this.pageActionSpeed, {
                position: this.position[1].position
            }, {
                easing: E.sineInOut
            }).call((() => {
                e.setPosition(this.position[1].getPosition()), this.setWidget(e, !0), o && o instanceof Function && o(), t && 1 == this.hallLayer.active && (this.hallLayer.active = !1)
            })).start()) : o && o instanceof Function && o()
        }
        movePageFromRight(e, t = this.hallLayer, a = !0, o = !1, i) {
            m(e, !0) && m(t, !0) ? "boolean" == typeof o && o ? (e.active = !0, this.setPos(e, this.position[1].getPosition(), !0), i && i instanceof Function && i(), a && 1 == t.active && (t.active = !1)) : (this.setPos(e, this.position[2].position), e.active = !0, L(e).to(this.pageActionSpeed, {
                position: this.position[1].position
            }, {
                easing: E.sineInOut
            }).call((() => {
                e.setPosition(this.position[1].getPosition()), this.setWidget(e, !0), i && i instanceof Function && i(), a && m(t, !0) && 1 == t.active && (t.active = !1)
            })).start()) : i && i instanceof Function && i()
        }
        movePageToLeft(e, t) {
            m(e) && e.active ? (0 == this.hallLayer.active && (this.hallLayer.active = !0), this.setWidget(e, !1), L(e).to(this.pageActionSpeed, {
                position: this.position[0].getPosition()
            }, {
                easing: E.sineInOut
            }).call((() => {
                e.setPosition(this.position[0].getPosition()), t && t instanceof Function && t(), m(e) && (e.active = !1), this.controlHallBlockLayer(!1, "movePageToLeft")
            })).start()) : t && t instanceof Function && t()
        }
        movePageToRight(e, t = this.hallLayer, a) {
            m(e) && m(t) && e.active ? (0 == t.active && (t.active = !0), this.setPos(t, this.position[1].position, !0), this.setWidget(e, !1), L(e).sequence(L().to(this.pageActionSpeed, {
                position: new M(this.position[2].position)
            }, {
                easing: E.sineInOut
            }), L().call((() => {
                e.setPosition(this.position[2].getPosition()), a && a instanceof Function && a(), m(e) && (e.active = !1)
            }))).start()) : a && a instanceof Function && a()
        }
        shouldUseScene() {
            return !0
        }
        autoOpenView() {
            switch (f("autoOpenView"), cc_mtt.vv.DataManager.gameMode) {
                case I.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL:
                    this.callGamePage(I.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL, !0);
                    break;
                case I.GAME_LEVEL_LIST_ID.PINEAPPLE_ROLL:
                    this.callGamePage(I.GAME_LEVEL_LIST_ID.PINEAPPLE_ROLL, !0);
                    break;
                case I.GAME_LEVEL_LIST_ID.SNG:
                    this.callGamePage(I.GAME_LEVEL_LIST_ID.SNG, !0);
                    break;
                case I.GAME_LEVEL_LIST_ID.MTT:
                    this.callGamePage(I.GAME_LEVEL_LIST_ID.MTT, !0, (() => {
                        !cc_mtt.vv.DataManager.isEndGame && cc_mtt.vv.DataManager.currentGameInfo ? this.callMTTHall(cc_mtt.vv.DataManager.currentGameInfo.Detail.Id, ge.appConfig.isLandscapeLayout) : this.activeBlackScreen(!1)
                    }));
                    break;
                case I.GAME_LEVEL_LIST_ID.AOF:
                    this.callGamePage(I.GAME_LEVEL_LIST_ID.AOF, !0);
                    break;
                case I.GAME_LEVEL_LIST_ID.PINEAPPLE_COWBOY:
                case I.GAME_LEVEL_LIST_ID.HOLDEM_NORMAL:
            }
        }
        setHallMain(e) {
            this.hallMain = e
        }
        openHall(e, t, a = 0, o = !1) {
            let i = this.getGameLevelListId(e, a, o);
            switch (this.showLoading(), e == Pe.commonProto.GAME_CATEGORY.MTT ? this.callGamePage(I.GAME_LEVEL_LIST_ID.MTT, !1, (() => {
                    let e = I.GAME_LEVEL_LIST_ID.MTT,
                        a = cc_mtt.vv.DataManager.GAME_LEVEL_LIST.MttTournaments,
                        o = null;
                    for (let i = 0; e !== I.GAME_LEVEL_LIST_ID.HOLDEM_NORMAL && i < a.length; i++)
                        if (t == a[i].Detail.Id) {
                            o = a[i];
                            break
                        } if (cc_mtt.vv.ConsoleLog.log("Impoker hall info", o), o) {
                        let e = o.Detail.Id;
                        _e.requestMttTournamentDetail(e, (e => {
                            if (e && !e.ErrorCode && e.TournamentDetail) {
                                var t;
                                null == (t = this._mttPage) || null == (t = t.getComponent(R)) || t.callMttHall(e)
                            } else {
                                let t = e.ErrorCode ? "ERROR_CODE_PKW." + e.ErrorCode : "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR";
                                this.callPopUpBox(t, (() => {})), this.hidLoading()
                            }
                        }), (e => {
                            this.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", (() => {})), this.hidLoading()
                        }))
                    } else {
                        this.hidLoading();
                        let t = e == I.GAME_LEVEL_LIST_ID.MTT ? "POPUP_HINTS.TOURNAMENT_END" : "POPUP_HINTS.GAME_END";
                        this.callPopUpBox(t, (() => {
                            this._messagePage.active || this.requestGameList(I.GAME_LEVEL_LIST_ID.MTT)
                        }))
                    }
                })) : this.callGameView(a, i, t), e) {
                case Pe.commonProto.GAME_CATEGORY.GEN_PP:
                    this.onClickPineappleNormal();
                    break;
                case Pe.commonProto.GAME_CATEGORY.LOOP_PP:
                    this.onClickPineappleRoll();
                    break;
                case Pe.commonProto.GAME_CATEGORY.MTT:
                    break;
                case Pe.commonProto.GAME_CATEGORY.SNG:
                    if (o);
                    else switch (a) {
                        case Pe.commonProto.MTT_GAME_MODE.NLH:
                        case Pe.commonProto.MTT_GAME_MODE.PP:
                        case Pe.commonProto.MTT_GAME_MODE.SHORT_DECK:
                        case Pe.commonProto.MTT_GAME_MODE.OMAHA:
                    }
                    this.onClickSNG();
                    break;
                case Pe.commonProto.GAME_CATEGORY.SNG_AOF:
                    this.onClickSNG()
            }
        }
        attachGameListPage() {
            this._pinePage = h(this.gamePagePrefabs[0]), this._pinePage.parent = this.layers[0], this._sngPage = h(this.gamePagePrefabs[1]), this._sngPage.parent = this.layers[0], this._mttPage = h(this.gamePagePrefabs[2]), this._mttPage.parent = this.layers[0];
            for (let e of this.layers[0].children) e.active = !1, e.position = this.position[2].position
        }
        updateTableNum() {
            if (!this.node) return;
            const {
                DataManager: e
            } = cc_mtt.vv;
            let t = e.GAME_LEVEL_LIST;
            t && (this.pineNormalTableNum && (this.pineNormalTableNum.string = (t.PpLevelsLen + t.PpRoomsLen).toString()), this.sngTableNum && (this.sngTableNum.string = (t.SngTournamentsLen + t.AofTournamentsLen).toString()), this.mttTableNum && (this.mttTableNum.string = t.MttTournamentsLen.toString()), this.pineCowboyTableNum && (this.pineCowboyTableNum.string = t.CowboyPlayerCount.toString()))
        }
        updateProfileBar() {
            const {
                DataManager: e
            } = cc_mtt.vv, {
                AssetsManager: t
            } = cc_mtt.vv;
            this._avatarUrl = t.getAvatarUrl(e.avatarId, {
                isThumbnails: !0,
                timestamp: Date.now()
            }), t.loadWebImage(this.avatar, this._avatarUrl), this.profileBar[0].string = e.userData.Nickname;
            let a = e.userId;
            cc_mtt.vv.DataManager.webPlatform == Pe.commonProto.PLATFORM.PKW && (a = e.userData.ForeignId), this.profileBar[1].string = "ID: " + a, this.handleBarLabelCoins()
        }
        handleBarLabelCoins() {
            let e, t = cc_mtt.vv.DataManager.userData.Gold.toFixed(4),
                a = t.substr(-5, 3);
            for (t = Math.floor(t); Math.floor(t / 1e3) > 0;) e = t % 1e3, a = e < 10 ? ",00" + t % 1e3 + a : e < 100 ? ",0" + t % 1e3 + a : "," + t % 1e3 + a, t = Math.floor(t / 1e3);
            a = t + a, this.profileBar[2].string = a
        }
        showNewBags() {
            this.checkMyBags((() => {
                this.checkForNewBags()
            }))
        }
        checkForNewBags() {
            let e = cc_mtt.vv.DataManager.newBagsCount;
            this.newBagsHint.active = e > 0, e > 0 && (this.newBagsNum.string = e > 99 ? "99+" : e.toString())
        }
        doBellAction(e, t) {
            e && (t ? L(e).sequence(L().to(.1, {
                angle: 22
            }), L().to(.1, {
                angle: -22
            }), L().to(.1, {
                angle: 0
            }), L().to(2, {
                angle: 0
            })).repeatForever().start() : (T.stopAllByTarget(e), L(e).to(.01, {
                angle: 0
            }).start()))
        }
        checkRedDots() {
            const e = u.localStorage,
                t = pe;
            let a = "eventReadList" + t.userId,
                o = e.getItem(a);
            o = o ? JSON.parse(o) : [];
            let i = cc_mtt.vv.DataManager.getNow(),
                n = t.events.filter((e => e.Created <= i));
            n.length > 0 && n.some((e => o.indexOf(e.Id) < 0)) ? this.eventRedDot.active = !0 : this.eventRedDot.active = !1, this.doBellAction(this.eventBell, this.eventRedDot.active)
        }
        checkMessageRedDot(e) {
            this.messageRedDot.active = e, this.doBellAction(this.messageBell, this.messageRedDot.active)
        }
        checkSidePagesDisable() {
            return !this._profilePage || !this._profilePage.active
        }
        getLoginPopupBanner() {
            cc_mtt.vv.ConsoleLog.log("getLoginPopupBanner", cc_mtt.vv.DataManager.banners);
            for (let e of cc_mtt.vv.DataManager.banners)
                if (e.Position && e.Position == W.LOGIN_POPUP) return e;
            return null
        }
        showBLMiniGameExitDialog() {
            this.callPopUpBoxDIY("POPUP_TITLE.REMIND", "MINIGAME_CHECK_EXIT_DIALOG.MESSAGE", !1, [{
                type: 0,
                text: "MINIGAME_CHECK_EXIT_DIALOG.KEEP",
                callback: () => {
                    this.enterMiniGame()
                }
            }, {
                type: 0,
                text: "MINIGAME_CHECK_EXIT_DIALOG.EXIT",
                callback: () => {
                    this.exitMiniGame()
                }
            }])
        }
        shouldShowLoginPopupBanner() {
            let e = u.localStorage.getItem(C.key_lastSetHideHallNoftificationOneDayTime);
            return cc_mtt.vv.ConsoleLog.log("lastSetHideHallNoftificationOneDayTime", cc_mtt.vv.DataManager.getNow().getTime(), e), !(e && cc_mtt.vv.DataManager.getNow().getTime() - parseInt(e) < this._hideHallNotificationTime)
        }
        showLoginPopupBanner() {
            if (m(this.node) && m(this.hallLayer) && this.shouldShowLoginPopupBanner() && this.hallLayer.active) {
                this.controlHallBlockLayer(!0, "showLoginPopupBanner"), setTimeout((() => {
                    this.controlHallBlockLayer(!1, "showLoginPopupBanner")
                }), 1100 * this.pageActionSpeed);
                let e = this.getLoginPopupBanner();
                if (e) {
                    if (!m(this._hallNotification)) {
                        let e = h(this.hallNotificationPrefab);
                        e.parent = this.layers[0], e.setPosition(this.position[2].position), this._hallNotification = e.getComponent(H), this._hallNotification.node.active = !1
                    }
                    if (this._hallNotification) {
                        if (this._hallNotification.node.active) return;
                        this._hallNotification.init(e, (e => {
                            e && e.node && (cc_mtt.vv.DataManager.hasShowLoginPopup = !0, e.node.active = !0, this.movePageFromRight(e.node, this.hallLayer, !1))
                        }), ((e, t = !1) => {
                            cc_mtt.vv.ConsoleLog.log("lastSetHideHallNoftificationOneDayTime script", e, e.node), e && e.node && (cc_mtt.vv.ConsoleLog.log("lastSetHideHallNoftificationOneDayTime checked", e.hideCheckbox.isChecked), t && u.localStorage.setItem(C.key_lastSetHideHallNoftificationOneDayTime, cc_mtt.vv.DataManager.getNow().getTime().toString()), this.controlHallBlockLayer(!0, "showLoginPopupBanner"), e.closeAnimation((() => {
                                this.controlHallBlockLayer(!1, "showLoginPopupBanner"), e.node.destroy()
                            })))
                        }), (e => {
                            e && null != e.game_type && this.openHall(e.game_type, e.room_id, e.game_mode, e.allIn)
                        }))
                    }
                }
            }
        }
        showBagDistributionHints(e) {
            let t = this.createProfilePage(!0),
                a = this._topUpPage && this._topUpPage.active;
            if (this.addNewBagsCount(e.Qty), this.checkForNewBags(), t.node.active && t.checkForNewBags(), t.checkBagPagesActive() || a || e.Type !== G.commonProto.Broadcast_Message_Got_Tool_Type.FROM_BACKEND) return;
            let o = k("POPUP_HINTS.BAG_NUM").replace("${bag}", e.Name).replace("${number}", e.Qty.toString()),
                i = {
                    Translation: "POPUP_HINTS.AUTO_DISTRIBUTE_BAG_HINTS",
                    payload: e => k(e).replace("${tools}", o)
                };
            this.callPopUpBox(i, (() => {}), "POPUP_TITLE.REMIND")
        }
        showLoading(e = 50, t) {
            t instanceof Function || (t = () => {
                this.hidLoading(), this.blockLayer.active && this.controlHallBlockLayer(!1, "showLoading")
            }), this.controlHallBlockLayer(!1, "showLoading"), $.setLoading(t, e), this._topUpPage && this._topUpPage.active ? $.show("Hall", this.layers[0]) : $.show("Hall")
        }
        hidLoading(e, t = !0) {
            t ? setTimeout((() => {
                $.hide("Hall"), e && e()
            }), 1e3 * this.loadingDelay) : ($.hide("Hall"), e && e())
        }
        removeLoadingWhenGameViewError() {
            cc_mtt.vv.ConsoleLog.log("removeLoadingWhenGameViewError is deprecated")
        }
        controlHallBlockLayer(e, t = "") {
            this.blockLayer.active = e, cc_mtt.vv.ConsoleLog.log("hallBlockLayer:", e, t)
        }
        updateToolList(e, t = !1) {
            cc_mtt.vv.DataManager.updateToolList(e, t)
        }
        checkMyBags(e) {
            cc_mtt.vv.DataManager.updateToolList((t => {
                m(this) && (cc_mtt.vv.ConsoleLog.log("checkForNewBags_RES", cc_mtt.vv.DataManager.backPackTool.length), this.getNewBagsCount(cc_mtt.vv.DataManager.backPackTool), e())
            }))
        }
        getNewBagsCount(e) {
            let t = K.getItemFromLocal(A.OLD_BAG_ID);
            t || (t = []);
            let a = 0,
                o = [];
            for (const i of e) {
                let e = t.indexOf(i.Id);
                o.push(i.Id), e >= 0 ? t.splice(e, 1) : a++
            }
            cc_mtt.vv.DataManager.newBagsCount = a
        }
        addNewBagsCount(e = 1) {
            cc_mtt.vv.DataManager.newBagsCount += e
        }
        showMarquee(e) {
            this.marquee.getComponent(ae).showMarquee(e)
        }
        showBigWin(e) {
            let t = this;
            ne.instance.loadRes(ne.RES_PATH.PREFAB.COMMON.BIG_WIN, n, null, ((a, o) => {
                let i = h(o);
                i.parent = t.layers[7], i.active = !0;
                let n = 1.5,
                    s = i.children[0].getComponent(Animation);
                s && (n = s.getClips()[0].duration, s.play()), L(i).delay(n).call((() => {
                    i.destroy(), t.showRedPocket(e)
                })).start()
            }))
        }
        showRedPocket(e) {
            let t = this;
            ne.instance.loadRes(ne.RES_PATH.PREFAB.COMMON.RED_POCKET, n, null, ((a, o) => {
                let i = h(o);
                i.parent = t.layers[7];
                let n = e.ToolName.length > 0 ? e.ToolName : e.Amount,
                    s = [{
                        buttonName: k(e.Approved ? "RED_POCKET.CONTENT_CS" : "GAME.CONFIRM"),
                        callback: () => {
                            m(i) && i.getComponent(b.RedPocketDialog).hide()
                        }
                    }];
                i.getComponent(b.RedPocketDialog).showBlockedDialogMessage(k("RED_POCKET.CONGREGATION"), n, s, e.RecordId)
            }))
        }
        checkMiniGameRedPocket() {
            for (; cc_mtt.vv.DataManager.miniGameRedPocketNotice.length > 0;) {
                let e = cc_mtt.vv.DataManager.miniGameRedPocketNotice.pop();
                void 0 !== e && this.showBigWin(e)
            }
        }
        checkAgent(e, t = this.hallLayer) {
            const a = e => {
                this.controlHallBlockLayer(!0, "checkAgent"), setTimeout((() => {
                    this.controlHallBlockLayer(!1, "checkAgent"), this.activeBlackScreen(!1)
                }), 1100 * this.pageActionSpeed), this._agentCodeInputPage || (this._agentCodeInputPage = h(this.agentCodeInputPrefab), this._agentCodeInputPage.parent = this.layers[1], this._agentCodeInputPage.setPosition(this.position[2].position)), this._agentCodeInputPage.getComponent(y)._parentPage = e, this.movePageFromRight(this._agentCodeInputPage, e), this._agentCodeInputPage.getComponent(y).setFocus()
            };
            let o = cc_mtt.vv.DataManager.userData;
            if (cc_mtt.vv.DataManager.webPlatform == G.commonProto.PLATFORM.TRIBAL_PIONEER && (!o.FirstAssociationId || o.FirstAssociationId <= 0)) {
                if (pe.popUps.length < 1) {
                    let e = "ASSOCIATION.BIND_AGENT_CODE";
                    this.callPopUpBoxWithTwoOptions(e, (() => {
                        a(t)
                    }), void 0)
                }
            } else e()
        }
        callMTTHall(e, t = !1) {
            let a = cc_mtt.vv.DataManager.GAME_LEVEL_LIST.MttTournaments,
                o = e,
                i = a.findIndex((e => e.Detail.Id === o));
            cc_mtt.vv.ConsoleLog.log("Impoker Hall currentMttId:" + o + " tupleId:" + i), i >= 0 ? _e.requestMttTournamentDetail(o, (e => {
                if (cc_mtt.vv.ConsoleLog.log("Impoker Hall hallDetail", e), e && !e.ErrorCode && e.TournamentDetail) {
                    var a;
                    null == (a = this._mttPage) || null == (a = a.getComponent(R)) || a.callMttHall(e, t)
                } else {
                    this.activeBlackScreen(!1);
                    let t = e.ErrorCode ? "ERROR_CODE_PKW." + e.ErrorCode : "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR";
                    this.hidLoading((() => {
                        this.callPopUpBox(t, (() => {}))
                    }))
                }
            }), (e => {
                this.controlHallBlockLayer(!1, "callMTTHall"), this.activeBlackScreen(!1);
                this.hidLoading((() => {
                    this.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0)
                }))
            })) : (this.controlHallBlockLayer(!1, "callMTTHall"), this.activeBlackScreen(!1))
        }
        repeatLoginDialog(e) {
            if (e && e.ErrorCode) {
                let t = "ERROR_CODE_PKW." + e.ErrorCode;
                this.callPopUpBox(t, (() => {
                    U.logout()
                }))
            } else cc_mtt.vv.ConsoleLog.log("impoker repeatLoginDialog: no msg or msg error code"), this.callPopUpBox("GAME.OTHER_LOGIN_PKW", (() => {
                U.logout()
            }))
        }
        getGameStartReminderPlayCurrent(e) {
            let t = !1;
            switch (e.TypeId) {
                case 0:
                    break;
                case 1:
                    let a = this._mttPage.getComponent(R)._mttHall;
                    t = a.active && a.getComponent(B)._mttHallInfo.TournamentId == e.TournamentId
            }
            return t
        }
        getLevelList(e, t, a, o, i = !0) {
            cc_mtt.vv.ConsoleLog.log("getLevelList in hall", e, t), this.gameViewLoader && this.gameViewLoader.getLevelList(e, t, a, o, i)
        }
        getGameLevelListId(e, t = 0, a = !1) {
            switch (e) {
                case Pe.commonProto.GAME_CATEGORY.GEN_PP:
                    return I.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL;
                case Pe.commonProto.GAME_CATEGORY.LOOP_PP:
                    return I.GAME_LEVEL_LIST_ID.PINEAPPLE_ROLL;
                case Pe.commonProto.GAME_CATEGORY.MTT:
                    return I.GAME_LEVEL_LIST_ID.MTT;
                case Pe.commonProto.GAME_CATEGORY.SNG:
                    return a ? I.GAME_LEVEL_LIST_ID.AOF : I.GAME_LEVEL_LIST_ID.SNG;
                case Pe.commonProto.GAME_CATEGORY.SNG_AOF:
                    return I.GAME_LEVEL_LIST_ID.AOF
            }
        }
        callGamePage(e, t = !1, a) {
            if (!ge.appConfig.isLandscapeLayout) return;
            this.controlHallBlockLayer(!0, "callGamePage");
            let o = null;
            switch (e) {
                case I.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL:
                case I.GAME_LEVEL_LIST_ID.PINEAPPLE_ROLL:
                    o = this._pinePage;
                    break;
                case I.GAME_LEVEL_LIST_ID.SNG:
                    o = this._sngPage;
                    break;
                case I.GAME_LEVEL_LIST_ID.MTT:
                    o = this._mttPage;
                    break;
                case I.GAME_LEVEL_LIST_ID.AOF:
                    o = this._sngPage
            }
            o && this.node.active ? this.movePageFromRight(o, this.hallLayer, !0, t, (() => {
                this.controlHallBlockLayer(!1, "callGamePage"), a || this.activeBlackScreen(!1)
            })) : (this.controlHallBlockLayer(!1, "callGamePage_" + e), this.activeBlackScreen(!1))
        }
        requestGameList(e, t, a = !0) {
            if (ge.appConfig.isLandscapeLayout) switch (e) {
                case I.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL:
                case I.GAME_LEVEL_LIST_ID.PINEAPPLE_ROLL:
                    this._pinePage.getComponent(Z).setPage(t);
                    break;
                case I.GAME_LEVEL_LIST_ID.SNG:
                case I.GAME_LEVEL_LIST_ID.AOF:
                    this._sngPage.getComponent(Q).setPage(t);
                    break;
                case I.GAME_LEVEL_LIST_ID.MTT:
                    const e = 0 !== cc_mtt.vv.DataManager.listPageIdx ? S.Full : S.Simplified;
                    this._mttPage.getComponent(re).setPage(t, a, e)
            }
        }
        setHoldemViewMttHallInfo(e, t) {
            if (e == I.GAME_LEVEL_LIST_ID.MTT) {
                let e = g.getScene().getComponentInChildren(V);
                e && e.setMttHallInfo(t)
            }
        }
        callGameView(e, t, a, o = 0, i = 0, n = !1, s = 0, l = 0, r = de.None) {
            he.getInstance().isAbleToJoinRoom() && (cc_mtt.vv.ConsoleLog.warn("selected Tournament ID : " + l), cc_mtt.vv.DataManager.selectedTournamentID = l, this.gameViewLoader.callGameView(e, t, a, o, i, n, s, null, !0, l, r))
        }
        reboundGameView(e = !1, t = !1) {
            cc_mtt.vv.ConsoleLog.log("reboundGameView hall: deprecated")
        }
        getGameResult(e, t, a) {
            D.requestGameResults(e, (e => {
                e && !e.ErrorCode ? t(e) : a && a()
            }), (() => {
                a && a()
            }))
        }
        callPopUpBox(e, t, a = "ERROR_CODE_PKW.TITLE", o) {
            cc_mtt.vv.ConsoleLog.log("callPopUpBox", e), m(this.node) && (o = o || this.layers[7], cc_mtt.vv.AssetsManager.showDialogBox(a, e, !1, [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: t
            }], o), this.kickWebViewPage())
        }
        callPopUpBoxWithTwoOptions(e, t, a, o = "ERROR_CODE_PKW.TITLE", i, n = "MESSAGE_DIALOG_BLOCKER.OK", s = "MESSAGE_DIALOG_BLOCKER.CANCEL") {
            cc_mtt.vv.ConsoleLog.log("callPopUpBoxWithTwoOptions", e), m(this.node) && (i = i || this.layers[7], cc_mtt.vv.AssetsManager.showDialogBox(o, e, !1, [{
                type: 1,
                text: s,
                callback: a
            }, {
                type: 0,
                text: n,
                callback: t
            }], i), this.kickWebViewPage())
        }
        callRetryPopUpBox(e, t, a, o = "ERROR_CODE_PKW.TITLE", i) {
            cc_mtt.vv.ConsoleLog.log("callRetryPopUpBox", e), m(this.node) && (i = i || this.layers[7], cc_mtt.vv.AssetsManager.showDialogBox(o, e, !1, [{
                type: 1,
                text: "MESSAGE_DIALOG_BLOCKER.CANCEL",
                callback: a
            }, {
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.RETRY",
                callback: t
            }], i), this.kickWebViewPage())
        }
        callPopUpBoxDIY(e, t, a, o, i) {
            cc_mtt.vv.ConsoleLog.log("callPopUpBoxDIY", t), m(this.node) && (i = i || this.layers[7], cc_mtt.vv.AssetsManager.showDialogBox(e, t, !1, o, i), this.kickWebViewPage())
        }
        callPopUpMsg(e, t, a) {
            cc_mtt.vv.ConsoleLog.log("callPopUpMsg", e, t), m(this.node) && (ge.popUp.showMsg({
                title: e,
                txt: t,
                sureLabel: k("GAME.CONFIRM").toUpperCase(),
                sureCallback: a
            }), this.kickWebViewPage())
        }
        kickWebViewPage() {
            this._topUpPage && this._topUpPage.active && this._topUpPage.getComponent(w).onBackClicked()
        }
        msgErrorDialog(e, t) {
            let a = e ? (e.ErrorCode, e.ErrorCode) : "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR";
            this.callPopUpBox(a, t)
        }
        showMiniGameToolsDialog(e, t, a) {
            this.showLoading(), cc_mtt.vv.DataManager.updateToolList((() => {
                this.hidLoading((() => {
                    let o = new ve(k("POPUP_TITLE.ENTER_METHOD"), Math.floor(cc_mtt.vv.DataManager.userData.Gold), e, t, cc_mtt.vv.DataManager.currentGameInfo.currency, null, [], cc_mtt.vv.DataManager.currentGameInfo.DisplayCurrency, cc_mtt.vv.DataManager.currentGameInfo.CurrencyRate);
                    if (o.tools.length < 1) a(0);
                    else {
                        const e = () => {
                            this.getDialogLock(A.DIALOG), cc_mtt.vv.AssetsManager.loadPopup(ne.RES_PATH.PREFAB.COMMON.SIGNUP_WITH_TOOLS_BLOCKER, (e => {
                                e.getComponent(se).callPopUp(o, (e => {
                                    a(e ? e.Id : 0), this.releaseDialogLock(A.DIALOG)
                                }), (() => {
                                    this.releaseDialogLock(A.DIALOG)
                                }))
                            }), !1, this.layers[7])
                        };
                        this.isDialogLocked(A.DIALOG) || e()
                    }
                }), !1)
            }))
        }
        getDialogLock(e) {
            this.dialogLocks.lastIndexOf(e) < 0 && this.dialogLocks.push(e), cc_mtt.vv.ConsoleLog.log("getDialogLock", this.dialogLocks)
        }
        releaseDialogLock(e) {
            let t = 0;
            (t = this.dialogLocks.lastIndexOf(e)) >= 0 && this.dialogLocks.splice(t, 1)
        }
        isDialogLocked(e) {
            return this.dialogLocks.lastIndexOf(e) >= 0
        }
        onClickPineappleNormal() {
            this.callGamePage(I.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL)
        }
        onClickPineappleRoll() {
            this.callGamePage(I.GAME_LEVEL_LIST_ID.PINEAPPLE_ROLL)
        }
        onClickPineappleCowboy() {
            this.checkAgent((() => {
                this.showLoading(30);
                let e = Date.now();
                cc_mtt.vv.ConsoleLog.log("onClickPineappleCowboy"), this.requestBLMiniGamesNotTakenOut((t => {
                    if (e + 3e4 <= Date.now()) return;
                    const a = e => {
                        cc_mtt.vv.DataManager.miniGameId = Pe.commonProto.GAME_CATEGORY.COW_BOY, cc_mtt.vv.DataManager.miniGamePlatform = Pe.commonProto.PLATFORM.PKW, cc_mtt.vv.DataManager.miniGameToolId = e, this.enterMiniGame()
                    };
                    Object.keys(t.Result).indexOf(I.BL_MINIGAME_KEYS.COWBOY) >= 0 && t.Result[I.BL_MINIGAME_KEYS.COWBOY] ? a(0) : this.showMiniGameToolsDialog(Pe.commonProto.GAME_CATEGORY.COW_BOY, I.SIGN_UP_OPTIONS.all, (e => {
                        a(e)
                    })), this.hidLoading()
                }), (e => {
                    this.hidLoading((() => {}), !1)
                }))
            }))
        }
        onClickSNG() {
            this.callGamePage(I.GAME_LEVEL_LIST_ID.SNG)
        }
        onClickMTT() {
            this.callGamePage(I.GAME_LEVEL_LIST_ID.MTT)
        }
        onClickActivity() {
            cc_mtt.vv.ConsoleLog.log("clicked activity")
        }
        onClickTopUp() {
            this.controlHallBlockLayer(!0, "onClickTopUp"), setTimeout((() => {
                this.controlHallBlockLayer(!1, "onClickTopUp"), this._topUpPage.getComponent(w).addWebView()
            }), 1100 * this.pageActionSpeed), this._topUpPage || (this._topUpPage = h(this.topUpPrefab), this._topUpPage.parent = this.layers[8]), this.movePageFromRight(this._topUpPage)
        }
        loadPswBox(e, t, a = !0) {
            this.controlHallBlockLayer(!0, "loadPswBox");
            let o = this;
            ne.instance.loadRes(ne.RES_PATH.PREFAB.HALL.PSW_DIALOG, n, null, ((i, n) => {
                let s = g.getScene().getComponentInChildren(te);
                if (s) cc_mtt.vv.ConsoleLog.log("loadPswBox:already", !!s);
                else {
                    let i = h(n);
                    i.parent = o.layers[7], i.getComponent(te).callPopUp(e, t, a)
                }
                o.controlHallBlockLayer(!1, "loadPswBox")
            }))
        }
        checkIsThereAnyPswSet(e, t, a = !0) {
            cc_mtt.vv.DataManager.userData.WithdrawPassword.length > 0 ? this.loadPswBox(e, t, a) : this.callPopUpBoxWithTwoOptions("WITHDRAW_POPUP.ASK_PSW_SETTING", (() => {
                this.loadPswBox(e, t, a)
            }), (() => {}), "WITHDRAW_POPUP.TITLE.SAFE_TIPS")
        }
        showWithdrawPage() {
            this.controlHallBlockLayer(!0, "showWithdrawPage"), this._topUpPage || (this._topUpPage = h(this.topUpPrefab), this._topUpPage.parent = this.layers[8]), this.movePageFromRight(this._topUpPage), setTimeout((() => {
                this.controlHallBlockLayer(!1, "showWithdrawPage"), this._topUpPage.getComponent(w).addWebView(1)
            }), 1100 * cc_mtt.vv.DataManager.pageActionSpeed)
        }
        onClickWithdraw() {
            cc_mtt.vv.ConsoleLog.log("onClickWithdraw", cc_mtt.vv.DataManager.userData.WithdrawPassword.length);
            let e = k("WITHDRAW_POPUP.TITLE.WITHDRAW");
            this.checkIsThereAnyPswSet(e, (() => {
                this.showWithdrawPage()
            }))
        }
        onClickCoffer() {
            cc_mtt.vv.ConsoleLog.log("onClickCoffer")
        }
        onClickTopUpOnOtherPage(e, t, a = !0) {
            this.controlHallBlockLayer(!0, "onClickTopUpOnOtherPage"), setTimeout((() => {
                t && t(), this.controlHallBlockLayer(!1, "onClickTopUpOnOtherPage"), this._topUpPage.getComponent(w).addWebView()
            }), 1100 * this.pageActionSpeed), this._topUpPage || (this._topUpPage = h(this.topUpPrefab), this._topUpPage.parent = this.layers[8]), this._topUpPage.getComponent(w)._returnNode = e, this.movePageFromRight(this._topUpPage, e, a)
        }
        onClickCustomerService(e = this.hallLayer, t) {
            cc_mtt.vv.ConsoleLog.log("CustomerService");
            u.openURL("https://800.aspk88.com/chat/chatClient/chatbox.jsp?companyID=9074&configID=141&codeType=custom")
        }
        createProfilePage(e = !0) {
            if (this._profilePage || (this._profilePage = h(this.profilePrefab), this._profilePage.parent = this.hallLayer, this._profilePage.setPosition(this.position[0].position)), e) return this._profilePage.getComponent(N)
        }
        onClickProfile(e = null, t = !1) {
            this.controlHallBlockLayer(!0, "onClickProfile"), setTimeout((() => {
                this.controlHallBlockLayer(!1, "onClickProfile")
            }), 1100 * this.pageActionSpeed);
            let a = this.createProfilePage(!0);
            u.isNative && u.os === u.OS.ANDROID && oe.getInstance().addBackFunction("ProfilePrefab", a.onBackClicked.bind(a)), setTimeout((() => {
                this.movePageFromLeft(this._profilePage, !1, t, e)
            }), 0)
        }
        onClickRefresh() {
            L(this.refreshButton).by(.5, {
                angle: 360
            }).repeat(2).start(), this.updateProfileBar()
        }
        onClickMessage(e) {
            this.controlHallBlockLayer(!0, "onClickMessage"), this.movePageFromRight(this._messagePage), setTimeout((() => {
                this.controlHallBlockLayer(!1, "onClickMessage"), this._messagePage.getComponent(q).init(e)
            }), 1100 * this.pageActionSpeed)
        }
        onClickConnectionLine() {
            m(this._connectionLineNode) ? this._connectionLineNode.getComponent(ee).connect() : cc_mtt.vv.AssetsManager.loadRes("connection_line/connection_line", n, this.onCreateConnectionLinePrefab)
        }
        callBannerDetailPage(e, t, a = k("EVENT.EVENT_DETAIL"), o) {
            cc_mtt.vv.ConsoleLog.log("loadRes:bannerDetailPage")
        }
        activeBlackScreen(e) {
            null !== this.blackScreen && (this.blackScreen.active = e), cc_mtt.vv.ConsoleLog.log("blackscreen active", e)
        }
        resetIntervalRefresh() {
            var e;
            null == (e = this.onRefreshCallback) || e.call(this)
        }
        refreshMTTLobby() {
            this.callGamePage(I.GAME_LEVEL_LIST_ID.MTT, !0)
        }
    }).instance = void 0, nt = t((it = Ft).prototype, "hallLayer", [Le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = t(it.prototype, "layers", [Ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), lt = t(it.prototype, "blockLayer", [Me], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = t(it.prototype, "blackScreen", [fe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = t(it.prototype, "gameReminderParent", [Te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = t(it.prototype, "position", [Ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), mt = t(it.prototype, "reConnectLoading", [Ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = t(it.prototype, "messageButton", [Ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = t(it.prototype, "messageBell", [be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = t(it.prototype, "messageRedDot", [Ge], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = t(it.prototype, "eventButton", [De], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = t(it.prototype, "eventBell", [ke], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = t(it.prototype, "eventRedDot", [Re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = t(it.prototype, "withdrawButton", [Se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = t(it.prototype, "pineNormalTableNum", [Be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = t(it.prototype, "sngTableNum", [we], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = t(it.prototype, "pineCowboyTableNum", [ye], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = t(it.prototype, "mttTableNum", [Oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = t(it.prototype, "profileBar", [Ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), It = t(it.prototype, "avatar", [Ue], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = t(it.prototype, "refreshButton", [He], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = t(it.prototype, "newBagsHint", [Ve], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = t(it.prototype, "newBagsNum", [We], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = t(it.prototype, "profilePrefab", [xe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = t(it.prototype, "messagePrefab", [Fe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = t(it.prototype, "topUpPrefab", [Ke], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = t(it.prototype, "agentCodeInputPrefab", [ze], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = t(it.prototype, "gamePagePrefabs", [qe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Bt = t(it.prototype, "hallNotificationPrefab", [Ye], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = t(it.prototype, "gameReminderPrefab", [Je], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = t(it.prototype, "_pinePage", [je], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = t(it.prototype, "_sngPage", [Xe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = t(it.prototype, "_mttPage", [$e], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = t(it.prototype, "_profilePage", [Qe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = t(it.prototype, "_messagePage", [Ze], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = t(it.prototype, "_topUpPage", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Wt = t(it.prototype, "_agentCodeInputPage", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xt = t(it.prototype, "_hallNotification", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = it)) || ot));
    o._RF.pop()
}