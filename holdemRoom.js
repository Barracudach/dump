import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as l from "./cc.js";
import * as M from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as T from "./websocket.js";
import * as y from "./websocket.js";
import * as R from "./mttconfig.js";
import * as S from "./mttconfig.js";
import * as P from "./mttconfig.js";
import * as v from "./mttconfig.js";
import * as _ from "./Pb.js";
import * as f from "./holdemPlayer.js";
import * as C from "./holdemPlayer.js";
import * as I from "./Holdem_Room_ts.js";
import * as b from "./GameOverWindow.js";
import * as w from "./httpApis.js";
import * as E from "./HttpApiTournamentDetail.js";
import * as L from "./SignUpBoxProperty.js";
import * as N from "./Translator.js";
import * as A from "./worldWebsocket.js";
import * as D from "./VoiceMessagePlayer.js";
import * as O from "./soundEffect.js";
import * as G from "./Holdem_View.js";
import * as B from "./MttHall.js";
import * as k from "./MttHall.js";
import * as H from "./GameViewLoader.js";
import * as U from "./FormatParser.js";
import * as F from "./Holdem_Player_ts.js";
import * as x from "./SystemAvatar.js";
import * as z from "./LoadingBlocker.js";
import * as V from "./Marquee.js";
import * as W from "./ResourcesLoader.js";
import * as J from "./CommonTools.js";
import * as j from "./MultipleGame.js";
import * as q from "./CelebritySelfSetting.js";
import * as K from "./cv.js";
import * as Y from "./holdemSidePot.js";
import * as Z from "./CrashTracing.js";
import * as X from "./MttAddOnBoxPkw.js";
import * as Q from "./MTTConnector.js";
import * as ee from "./MultipleGameTabButton.js";
import * as te from "./FakeMultipleGame.js";
import * as se from "./UtilsPkw.js";
import * as oe from "./GameEndPopUpJsng.js";
import * as ie from "./mttController.js";
import * as ne from "./JackpotSngSignUpPopUp.js";
import * as ae from "./SngEvent.js";
import * as re from "./MultipleGameJsng.js";
import * as le from "./MttItemHelper.js";
import * as de from "./MessageBroker.js";
import * as he from "./MultipleRoomManager.js";
import * as me from "./Enum.js";
import * as ce from "./aesHandler.js";
import * as ue from "./mobx.cjs.production.min.mjs_cjs=&original=.js";
import * as ge from "./AudioEngine.js";
import * as Me from "./GameListTuplePkw.js";
import * as pe from "./index.mjs_cjs=&original=.js";
import * as ye from "./MultipleMttDetailsWindow.js";
import * as Te from "./RightItemNewReplayerRenderer.js";
import * as Re from "./HandsRecordsManager.js";
import * as Pe from "./RecordType.js";

function main() {
    var Se, ve, _e, fe, Ce, Ie, be, we, Ee, Le, Ne, Ae, De, Oe, Ge, ke, Be, He, Ue, Fe, xe, ze, Ve, We, Je, je, qe, Ke, Ye, $e, Ze, Xe, Qe, et, tt, st, ot, it, nt, at, rt, lt, dt, ht, mt, ct, ut, gt, Mt, pt, yt, Tt, Rt, Pt, St, vt, _t, ft, Ct, It, bt, wt, Et, Lt, Nt, At, Dt, Ot, Gt, kt, Bt, Ht, Ut, Ft, xt, zt, Vt, Wt, Jt, jt, qt, Kt, Yt, $t, Zt, Xt, Qt, es, ts, ss, os, is, ns, as, rs, ls, ds, hs, ms, cs, us, gs, Ms, ps, ys, Ts, Rs, Ps, Ss, vs, _s, fs, Cs, Is, bs, ws, Es, Ls, Ns, As, Ds, Os, Gs, ks, Bs, Hs, Us, Fs, xs, zs, Vs, Ws, Js, js, qs, Ks, Ys, $s, Zs, Xs, Qs, eo, to, so, oo, io, no, ao, ro, lo, ho, mo, co, uo, go, Mo, po, yo, To, Ro, Po, So, vo, _o, fo, Co, Io, bo, wo, Eo, Lo, No, Ao, Do, Oo, Go, ko, Bo, Ho, Uo, Fo, xo, zo, Vo, Wo, Jo, jo, qo, Ko, Yo, $o, Zo, Xo, Qo, ei, ti, si, oi, ii, ni, ai, ri, li, di, hi, mi, ci, ui, gi, Mi, pi, yi, Ti, Ri, Pi, Si, vi, _i, fi, Ci, Ii, bi, wi, Ei, Li, Ni, Ai, Di, Oi, Gi, ki, Bi, Hi, Ui, Fi;
    o._RF.push({}, "65c95luV19JQ4XmEx40xrSg", "holdemRoom", void 0);
    e("STORE_DEBUG", !1);
    let xi = e("HoldemWebSocket", []);
    window.ROOM_STORES = [];
    var zi = function(e) {
        return e[e.NEW = 0] = "NEW", e[e.READY = 1] = "READY", e
    }(zi || {});
    let Vi = e("HOLDEM_TOURNAMENT_TYPE", function(e) {
            return e[e.MTT = 4] = "MTT", e[e.SNG = 3] = "SNG", e[e.AOF = 5] = "AOF", e[e.NORMAL = 7] = "NORMAL", e
        }({})),
        Wi = e("HOLDEM_ANIMATION", function(e) {
            return e[e.EMPTY = 0] = "EMPTY", e[e.GAME_START = 2] = "GAME_START", e[e.GAME_END = 1] = "GAME_END", e[e.KO = 3] = "KO", e[e.RISE_BLIND = 4] = "RISE_BLIND", e[e.VOICE_MSG = 5] = "VOICE_MSG", e
        }({}));
    e("holdemRoomStore", (Se = Re.observable, ve = Re.observable, _e = Re.observable, fe = Re.observable, Ce = Re.observable, Ie = Re.observable, be = Re.observable, we = Re.observable, Ee = Re.observable, Le = Re.observable, Ne = Re.observable, Ae = Re.observable, De = Re.observable, Oe = Re.observable, Ge = Re.observable, ke = Re.observable, Be = Re.observable, He = Re.observable, Ue = Re.observable, Fe = Re.observable, xe = Re.observable, ze = Re.observable, Ve = Re.observable, We = Re.observable, Je = Re.observable, je = Re.observable, qe = Re.observable, Ke = Re.observable, Ye = Re.observable, $e = Re.observable, Ze = Re.observable, Xe = Re.observable, Qe = Re.observable, et = Re.observable, tt = Re.observable, st = Re.observable, ot = Re.observable, it = Re.observable, nt = Re.observable, at = Re.observable, rt = Re.observable, lt = Re.observable, dt = Re.observable, ht = Re.observable, mt = Re.observable, ct = Re.observable, ut = Re.observable, gt = Re.observable, Mt = Re.observable, pt = Re.observable, yt = Re.observable, Tt = Re.observable, Rt = Re.observable, Pt = Re.observable, St = Re.observable, vt = Re.observable, _t = Re.observable, ft = Re.action, Ct = Re.action, It = Re.action, bt = Re.action, wt = Re.action, Et = Re.action, Lt = Re.action, Nt = Re.action, At = Re.action, Dt = Re.action, Ot = Re.action, Gt = Re.action, kt = Re.action, Bt = Re.action, Ht = Re.action, Ut = Re.action, Ft = Re.action, xt = Re.action, zt = Re.action, Vt = Re.action, Wt = Re.action, Jt = Re.action, jt = Re.action, qt = Re.action, Kt = Re.action, Yt = Re.action, $t = Re.action, Zt = Re.action, Xt = Re.action, Qt = Re.action, es = Re.action, ts = Re.action, ss = Re.action, os = Re.action, is = Re.action, ns = Re.action, as = Re.action, rs = Re.action, ls = Re.action, ds = Re.action, hs = Re.action, ms = Re.action, cs = Re.action, us = Re.action, gs = Re.action, Ms = Re.action, ps = Re.action, ys = Re.action, Ts = Re.action, Rs = Re.action, Ps = Re.action, Ss = Re.action, vs = Re.action, _s = Re.action, fs = Re.action, Cs = Re.action, Is = Re.action, bs = Re.action, ws = Re.action, Es = Re.action, Ls = Re.action, Ns = Re.action, As = Re.action, Ds = Re.action, Os = Re.action, Gs = Re.action, ks = Re.action, Hs = t((Bs = class {
                    get needAnimation() {
                        return this._needAnimation
                    }
                    set needAnimation(e) {
                        this._needAnimation = e, this.node && (this.node.needAnimation = e)
                    }
                    get tabButton() {
                        return K.appConfig.isLandscapeLayout ? null : te.instance._multipleGameTabButtons[this.node.multipleGameIndex]
                    }
                    constructor(e, t, o, n, a, r) {
                        this.ws = void 0, this.tournamentMode = void 0, this.tournamentId = 0, this.levelId = 0, this.tournament = void 0, this.playerUserId = void 0, this.maxHoleCard = 2, s(this, "roomId", Hs, this), this.marqueeMsg = "", s(this, "redPocketPrize", Us, this), s(this, "redPocketApproved", Fs, this), s(this, "redPocketRecordId", xs, this), this.focused = !1, this.state = zi.NEW, this.takeInCoin = void 0, this.node = void 0, this.roomNode = void 0, s(this, "self", zs, this), s(this, "seatedPlayers", Vs, this), s(this, "dealerPos", Ws, this), s(this, "bigBlind", Js, this), s(this, "smallBlind", js, this), s(this, "ante", qs, this), this.minTakein = 0, this.maxTakein = 0, s(this, "straddlePos", Ks, this), s(this, "sidePot", Ys, this), s(this, "tempPot", $s, this), s(this, "mainPot", Zs, this), s(this, "tmpMaxDeskCoin", Xs, this), s(this, "allBoardCards", Qs, this), s(this, "boardCardsHighlight", eo, this), s(this, "countdownTtl", to, this), s(this, "countdownLeft", so, this), s(this, "countdownSeat", oo, this), s(this, "countdownLastSeat", io, this), s(this, "gameRecord", no, this), s(this, "animate", ao, this), this.blindRiseType = R.BLIND_RISE_TYPE.DURATION, s(this, "riseBlindTime", ro, this), this.riseBlindHand = 0, s(this, "waitForStart", lo, this), s(this, "prizeMode", ho, this), this.displayCurrency = me.GOLDCOIN, this.exchangeRate = 1, s(this, "rbcList", mo, this), s(this, "rewardList", co, this), s(this, "toolList", uo, this), s(this, "prizeList", go, this), this.lastRewardMsg = void 0, s(this, "visitors", Mo, this), s(this, "roomSnapshotState", po, this), s(this, "sngStatus", yo, this), s(this, "gameDuration", To, this), s(this, "prizePool", Ro, this), s(this, "bountyPool", Po, this), s(this, "prizeCircle", So, this), s(this, "mttTablesDetail", vo, this), s(this, "currentBlindLevel", _o, this), s(this, "roomMessage", fo, this), this.roomStatus = 0, this.isPausing = !1, s(this, "handForHandMessage", Co, this), s(this, "restMessage", Io, this), s(this, "restTime", bo, this), this.restDuration = 5, s(this, "roundValue", wo, this), s(this, "leftRejoinCount", Eo, this), s(this, "voiceMessageList", Lo, this), s(this, "buyTimeCount", No, this), s(this, "waitForChangeTable", Ao, this), s(this, "isRebuyAllow", Do, this), this.isRebuyShown = !1, s(this, "rebuyLeftTime", Oo, this), this.rebuyEndTime = 0, s(this, "isSignUpAllow", Go, this), this.riseBlinding = !1, s(this, "isMorebuyAllow", ko, this), this.isMorebuyShown = !1, s(this, "morebuyLeftTime", Bo, this), this.morebuyEndTime = 0, this.isPreparing = !1, s(this, "isSittingOut", Ho, this), s(this, "isHeroOut", Uo, this), this.muteList = [], this.emojiMuteList = [], this.cameraMuteList = [], this.voiceInFinal = !0, this.calcBigBlind = 0, this.calcSmallBlind = 0, this.calcAnte = 0, this.totalSeatCount = 0, this.tournamentRoomName = "", this.SNGReliveLeftTime = 0, this.MTTDetail = void 0, this._roomMode = void 0, this._autoPlayAlert = !1, this.newResetTableTimeout = void 0, this.resetTableTime = 3e3, this.tournamentType = void 0, this.isGps = !1, this.isGameEnd = !1, this.isSNGMatching = !1, this.hasDisconnected = !1, this.loseFlowPopup = [], this.tryCounter = 0, this.loseState = [], this.hasCallGameView = !1, this.checkDate = new Date, this.saveName = ["selfMessage", "systemMessage"], this.isReplay = !1, this._needAnimation = !0, this.waitForResetTable = !1, this._rewardCount = 0, this._snapshotSelfFold = !1, this._notFoldLoopGuess = !1, this.MTTRank = 0, this.srvFee = 0, this.regFee = 0, this.rebuyParam = void 0, this.morebuyParam = void 0, this.srvFeeRebuy = 0, this.regFeeRebuy = 0, this.srvFeeMorebuy = 0, this.regFeeMorebuy = 0, this.initCoinRebuy = 0, this.initCoinMorebuy = 0, this.quantityMorebuy = 1, this.Multiplier = 0, this.AllMultiplier = void 0, this.Jackpot = 0, this.blindLevelTime = 0, this.blindHands = 0, this.url = void 0, this.uuid = "", this.isMysteryBountyOnIntro = !1, this.isMysteryBountyStage = !1, this.joinedCount = 0, this.isAppPause = !1, this.mttEndRoomId = 0, this.isShowDown = !1, this.isEndRound = !1, this.hasCallReboundGameView = !1, this.gameViewLoader = null, this._retryEnterRoomTime = 0, this._retryEnterRoomTimeout = null, this.anmiTimes = 0, this.isShowDisconnectDialog = !1, this.isMultiFlightDay1 = !1, this.nextPeriodStartTime = 0, this.isWPT = !1, this.isCelebrityTournament = !1, this.gameInvitationCode = "", this.CelebrityList = [], s(this, "streamingPlayers", Fo, this), s(this, "streamingAudioPlayers", xo, this), this._breakMessageDelayed = void 0, this._breakMessageTime = void 0, this.isNewHand = !1, this.isNewHandCardsDealt = !1, this.isNewHandSelfCardsDealt = !1, this.needCheckCardsDealt = !1, this.curSeatNumPlayerAction = void 0, this.isPlayingTour = !1, this._eventTimeMap = {}, this.needActionMsg = null, this._lastHoldemAction = 0, this._isHoldemUserBehavior = !1, this._selfPlayer_ts = null, this.isPlayedMultiplierAnim = !1, this.havePotSNG = !1, this.haveRankSNG = !1, this.isSettleSNG = !1, this.isSngReleased = !1, this.lastRiseBlindAt = 0, this.isPlayedSNGBgMusic = !1, this.currentGameInfoSng = null, this.windowTitle = "", this.windowTitleUpdatedCallback = null, this._lastPots = [], this.showDialogBox = (e, t, s, o, i = null, n = null, a = "") => {
                            this.node && this.node.dialogController ? (i || (i = this.node.dialogLayer), this.node.dialogController.showDialogBox(e, t, s, o, i, n, a)) : (i || (i = cc_mtt.vv.AssetsManager.popupParent), cc_mtt.vv.AssetsManager.showDialogBox(e, t, s, o, i, n, a))
                        }, this.VerifyToken = e => {
                            e && this.ws.url == e.url && (cc_mtt.vv.ConsoleLog.log("VerifyToken: " + cc_mtt.vv.DataManager.token), cc_mtt.vv.DataManager.token && this.ws.requestUserToken(cc_mtt.vv.DataManager.token, this.playerUserId, K.tools.isGameplayMuckLosingHands()))
                        }, this.connectFail = e => {
                            if (!e || this.ws.url != e.url) return;
                            let t = "ConnectFailDialog",
                                s = {
                                    Translation: "NETWORK.DISCONNECT_DIALOG",
                                    isTranslated: !0,
                                    resultArray: e => N(e).split("|")
                                };
                            if (!this.isShowDisconnectDialog) {
                                this.node.hideLoading("All"), this.isShowDisconnectDialog = !0;
                                let e = this;
                                this.showDialogBox("", s, !1, [{
                                    type: 0,
                                    text: "",
                                    callback: function() {
                                        cc_mtt.vv.ConsoleLog.log("Reconnect game websocket"), j.instance && j.instance.hideDialogBox(e.node.multipleGameType, t), e.ws.reconnectCount = 0, e.ws.unrespondedVertificationTokenCount = 0, e.ws.setReConnect(), e.ws.reConnect(), A.checkNetwork("disconnected") && (A.getInstance().reconnectCount = 0, A.getInstance().setReConnect(), A.getInstance().reConnect()), e.isShowDisconnectDialog = !1
                                    }
                                }, {
                                    type: 1,
                                    text: "",
                                    callback: function() {
                                        cc_mtt.vv.ConsoleLog.log("Cancel game reconnect dialog"), j.instance && j.instance.hideDialogBox(e.node.multipleGameType, t), e.ws.reset(), e.isShowDisconnectDialog = !1, e.ws.stopAllConnect = !0
                                    }
                                }], null, null, t)
                            }
                        }, this.onUserTokenRes = e => {
                            if (cc_mtt.vv.ConsoleLog.log("onUserTokenRes", JSON.stringify(e)), 0 === e.code) cc_mtt.vv.ConsoleLog.log("token cb"), this.ws && this.ws.verifyTokenEnd(), this.EnterRoom();
                            else if (50001 !== e.code)
                                if (50003 == e.code) {
                                    let t = e.code + ": userTokenRes " + cc_mtt.vv.DataManager.getNow();
                                    this.showDialogBox("MESSAGE_DIALOG_BLOCKER.SYSTEM_ERROR", t, !1, [{
                                        type: 0,
                                        text: "MESSAGE_DIALOG_BLOCKER.OK",
                                        callback: () => {
                                            this.reboundGameView()
                                        }
                                    }])
                                } else this.callPopUpBox("ERROR_CODE_PKW." + e.code, (() => {
                                    this.reboundGameView()
                                }));
                            else if (!A.hasShowLoginFailDialog) {
                                A.hasShowLoginFailDialog = !0, 1 == cc_mtt.vv.DataManager.userData.Status && z.instance.hide("All");
                                let e = 1 == cc_mtt.vv.DataManager.userData.Status ? "LOGIN.USER_ACCOUNT_LOCKED" : "GAME.LOGIN_TIME_OUT";
                                this.callPopUpBox(e, (() => {
                                    A.hasShowLoginFailDialog = !1, A.logout()
                                }))
                            }
                        }, s(this, "onSngRewardInfoRes", zo, this), s(this, "updateMttTableDetail", Vo, this), s(this, "updateMTTDetailInfo", Wo, this), this.updateMttDetail = (e = k.ALL, t = null) => {
                            this.isReplay || this.requestMttTournamentDetail(this.tournamentId, e, (e => {
                                var s;
                                if (e && null != (s = Object.keys(e)) && s.length && !e.ErrorCode) {
                                    if (!this.node || !this.node.node) return;
                                    if (t && t instanceof Function) return void t(e);
                                    this.MTTDetail || this.node.tournamentRecord.setTournamentType(e.TournamentDetail.TournamentMode), this.MTTDetail = e.TournamentDetail, K.appConfig.getWalletConfig().checkAndSetGameTableCurrency(this.MTTDetail), this.node.tournamentRecord.setTournamentName(this.MTTDetail), this.updateMttTableDetail(this.MTTDetail.TablesDetail), this.updateMTTDetailInfo(), this.node.GameMenu(), this.node.setGameIcon(), this.node.onUpdateMttDetailLive(), this.updateWindowTitle(), this.node.updateCoinModeValue(), this.node.RestMessage(), this.MTTDetail.TournamentMode == _.commonProto.TOURNAMENT_MODE.Mystery && this.node.initMysteryBounty()
                                } else {
                                    var o, i;
                                    let t = [];
                                    e && (t = Object.keys(e)), cc_mtt.vv.ConsoleLog.log("mtt blind list error ", null == (o = t) ? void 0 : o.length, null != (i = t) && i.length ? e.ErrorCode : "no data")
                                }
                            }))
                        }, s(this, "onMTTHoldemStadiumRes", Jo, this), s(this, "onMttEnterGameRes", jo, this), s(this, "onEnterRoomRes", qo, this), s(this, "onSitDownRes", Ko, this), s(this, "onSeatOccupiedMsg", Yo, this), s(this, "onSeatEmptyMsg", $o, this), s(this, "onNeedActionMsg", Zo, this), s(this, "onActionRes", Xo, this), s(this, "onPlayerActionMsg", Qo, this), s(this, "onPlayerStateMsg", ei, this), this.onHideHoleCardRes = e => {
                            cc_mtt.vv.ConsoleLog.log("onHideHoleCardRes", JSON.stringify(e)), this.roomId == e.roomId && (this.setCardAnimation(!0), e.code)
                        }, s(this, "onShowdownMsg", ti, this), this.onShowCardRes = e => {
                            e.roomId == this.roomId && e.userId === this.playerUserId && e.code && cc_mtt.vv.ConsoleLog.log("Show Card Msg Error: " + e.code, JSON.stringify(e))
                        }, s(this, "onBuyTime", si, this), s(this, "onRoundResultMsg", oi, this), this.rightItemNewReplayerDataList = [], s(this, "resetRest", ii, this), s(this, "onDealerPosMsgNewGame", ni, this), s(this, "onRoomSnapshotMsg", ai, this), s(this, "onStandbyRes", ri, this), s(this, "onRoomBillRes", li, this), s(this, "onHoleCardsMsg", di, this), s(this, "onHoleCardList", hi, this), s(this, "onPlayerNickNameChange", mi, this), s(this, "onBoardCardsMsg", ci, this), s(this, "onPauseGameRes", ui, this), s(this, "onLeaveRoomRes", gi, this), s(this, "onPotsMsg", Mi, this), s(this, "onNeedMoreCoinMsg", pi, this), s(this, "onRiseBlindNotifyMsg", yi, this), this._isJackpotMatch = !1, s(this, "onSngRoomSnapShotMsg", Ti, this), s(this, "onMttRoomSnapShot", Ri, this), this.AutoPlayMsg = () => {
                            this._autoPlayAlert = !0, cc_mtt.vv.ConsoleLog.log("** UI AUTO PLAY POP UP"), cc_mtt.vv.ConsoleLog.log("inisde autoplay from holdem ========"), this.node.waitForBack()
                        }, this.onAutoPlayMsg = e => {
                            e.roomId == this.roomId && (cc_mtt.vv.ConsoleLog.log("onAutoPlay", JSON.stringify(e)), cc_mtt.vv.DataManager.webPlatform == _.commonProto.PLATFORM.PKW ? e.autoPlay ? this.self && e.userId == this.self.userId ? (this.setSittingOut(e.userId, !0), this.node.RemoveGuessHandLoop(), this._autoPlayAlert || this.AutoPlayMsg()) : (cc_mtt.vv.ConsoleLog.log("show auto play in other player"), this.setAutoPlayLabel(e.userId, !0)) : (this.self && e.userId == this.self.userId && this.setSittingOut(e.userId, !1), cc_mtt.vv.ConsoleLog.log("hide auto play in other player"), this.setAutoPlayLabel(e.userId, !1)) : (this.node.RemoveGuessHandLoop(), this._autoPlayAlert || this.AutoPlayMsg()))
                        }, this.onOtherRoomMsg = e => {
                            cc_mtt.vv.ConsoleLog.log("onOtherRoomMsg", JSON.stringify(e)), cc_mtt.vv.ConsoleLog.log("** UI OTHER ROOM POP UP"), this.showDialogBox("", "GAME.PLAYING_OTHER_ROOM", !1, [{
                                type: 1,
                                text: "MESSAGE_DIALOG_BLOCKER.CANCEL",
                                callback: () => {}
                            }, {
                                type: 0,
                                text: "POPUP_HINTS.BACK_ROOM",
                                callback: () => {
                                    switch (this.roomId && this.ws.Send(_.holdem.LeaveRoomReq.create({
                                            roomId: this.roomId
                                        })), e.categary) {
                                        case _.commonProto.GAME_CATEGORY.GEN_PP:
                                            this.gameViewLoader.callGameView(_.commonProto.MTT_GAME_MODE.PP, R.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL, e.roomId);
                                            break;
                                        case _.commonProto.GAME_CATEGORY.LOOP_PP:
                                            this.gameViewLoader.callGameView(_.commonProto.MTT_GAME_MODE.PP, R.GAME_LEVEL_LIST_ID.PINEAPPLE_ROLL, e.levelId);
                                            break;
                                        case _.commonProto.GAME_CATEGORY.SNG:
                                            e.isAof ? this.gameViewLoader.callGameView(_.commonProto.MTT_GAME_MODE.NLH, R.GAME_LEVEL_LIST_ID.AOF, e.roomId) : this.gameViewLoader.callGameView(_.commonProto.MTT_GAME_MODE.NLH, R.GAME_LEVEL_LIST_ID.SNG, e.roomId)
                                    }
                                }
                            }])
                        }, s(this, "onMttNotifyMsg", Pi, this), s(this, "resetHandForHandMessage", Si, this), s(this, "onTimeBankMsg", vi, this), this.onTimeBankFlagSetRes = e => {
                            cc_mtt.vv.ConsoleLog.log("onTimeBankFlagSetRes", JSON.stringify(e)), e.mttId && e.mttId != this.tournamentId || (e.code ? this.callPopUpBox("ERROR_CODE_PKW." + e.code, (() => {})) : this.node.setTimeBankButton(e.flag))
                        }, this.onTimeBankDurationMsg = e => {
                            cc_mtt.vv.ConsoleLog.log("onTimeBankDurationMsg", JSON.stringify(e));
                            K.appConfig.getGeneralConfig().multiWindowEnabled;
                            e.roomId == this.roomId && this.self && this.self.seatNum == e.seatNum && this.node.setTimeBankRemainTime(e.timeBankDuration)
                        }, this.onHideLoading = e => {
                            !e || e.includes("Connecting") || e.includes("Holdem Game Reconnect") || this.node.setTimeBankProtection(!1)
                        }, this.onShowLoading = e => {
                            (e && e.includes("Connecting") || e.includes("Holdem Game Reconnect") && !K.netWork.isConnect() && !K.netWork.isConnecting()) && this.node.setTimeBankProtection(!0)
                        }, this.onLostConnection = () => {
                            this.ws && !this.ws.isReconnecting && (this.ws.setReConnect(), this.ws.reConnect()), cc_mtt.vv.ConsoleLog.log("** LOST CONNECTION"), this.hasDisconnected = !0
                        }, this.resetTableFunc = this.resetTable.bind(this), s(this, "onSngRelive", _i, this), this.GuessHandReq = (e, t, s = !1) => {
                            this._notFoldLoopGuess = s, this.tournamentId && (cc_mtt.vv.ConsoleLog.log("GuessHandReq", this.getUserBalance(), this.tournamentId, t, e, this._notFoldLoopGuess, "check local storage with UserId", P.getLocalStorageItem(P.key_enableGuessHand + cc_mtt.vv.DataManager.userId, !1)), this.ws.Send(_.mttPro.GuessHandlePorkReq.create({
                                stdId: this.tournamentId,
                                betType: t,
                                betAmount: e
                            })))
                        }, this.onGuessHandlePorkRes = e => {
                            cc_mtt.vv.ConsoleLog.log("onGuessHandlePorkRes", JSON.stringify(e), this.tournamentId), e.stdId == this.tournamentId && (e.code ? 60083 !== e.code && this.callPopUpBox("ERROR_CODE_PKW." + e.code, (() => {})) : !this._notFoldLoopGuess && this.node ? this.node.guessHand.SuccessPopUp() : cc_mtt.vv.ConsoleLog.log("default guess loop success"))
                        }, this.onGuessHandlePorkMsg = e => {
                            cc_mtt.vv.ConsoleLog.log("onGuessHandlePorkMsg", JSON.stringify(e), this.tournamentId), e.stdId == this.tournamentId && this.node && this.node.showGuessHandResult(U.DisplayGold(e.reward, 2), this.self.seatNum)
                        }, this.onCelebrityBroadcastNotifyFullMsg = e => {
                            cc_mtt.vv.ConsoleLog.log("onCelebrityBroadcastNotifyFullMsg", JSON.stringify(e), this.roomId), e.roomId == this.roomId && this.node && (this.node.setValidBroadcast(!e.closeBroadcast, !0), this.node.enableGameMic(e.closeBroadcast))
                        }, this.signUpPopUp = () => {
                            if (!this.MTTDetail) return void cc_mtt.vv.ConsoleLog.log("signUpPopUp no MTTDetail");
                            let e;
                            cc_mtt.vv.ConsoleLog.log("timTest debug signUpPopUp"), e = K.appConfig.isLandscapeLayout ? W.RES_PATH.PREFAB.COMMON.MTT_SIGN_UP_BOX_LANDSCAPE : W.RES_PATH.PREFAB.COMMON.MTT_SIGN_UP_BOX, cc_mtt.vv.ConsoleLog.log("** UI SING UP POP UP"), cc_mtt.vv.ConsoleLog.log("** UI SING UP POP UP prefabUrl: ", e);
                            let t = this.MTTDetail.StartingCoins;
                            cc_mtt.vv.DataManager.updateToolList((() => {
                                const s = () => {
                                    cc_mtt.vv.AssetsManager.loadRes(e, d, ((o, i) => {
                                        var n, a, r;
                                        p.setAutoRelease(e, !0);
                                        let l = h(i),
                                            d = l.getComponent("SignUpWithToolPopUp");
                                        l.parent = this.node.gameEndLayer;
                                        let m = (null == (n = this.MTTDetail) ? void 0 : n.SrvFee) + (null == (a = this.MTTDetail) ? void 0 : a.RegFee),
                                            c = R.GAME_TO_TOOL_ID.MTT;
                                        this.tournamentMode == Vi.SNG ? c = R.GAME_TO_TOOL_ID.SNG : this.tournamentMode == Vi.AOF && (c = R.GAME_TO_TOOL_ID.AOF);
                                        let u = this.MTTDetail ? this.MTTDetail.SignUpOptions.toLowerCase() : R.SIGN_UP_OPTIONS.all,
                                            g = this.MTTDetail.Tag;
                                        cc_mtt.vv.ConsoleLog.log("signUpPopUp params: ", u, g, typeof u);
                                        let M = new L(N("HOLDEM.JOIN_TOURNAMENT"), m, c, u, this.MTTDetail ? this.MTTDetail.currency : null, this.gameInvitationCode, g, null == (r = this.MTTDetail) ? void 0 : r.DisplayCurrency, this.getExchangeRate(), 0, t, 1, null, this.tournamentRoomName, 1001);
                                        if (cc_mtt.vv.ConsoleLog.log("signUpPopUp tools:", M.tools.length), M.toolOption && !M.goldOption && M.tools.length < 1) {
                                            let e = "POPUP_HINTS.NO_TOOL";
                                            this.callPopUpBox(e, (() => {
                                                cc_mtt.vv.ConsoleLog.log("** close signUpPopUp")
                                            }))
                                        } else d.callPopUp(M, (e => {
                                            let t = e ? e.Id : 0;
                                            this.tournamentMode == Vi.AOF ? 0 == t && this.getUserBalance() < m ? this.handleNoMoney() : this.handleCoupon(e, (() => {
                                                e && e.Type === _.commonProto.TOOL_TYPE.coupon && e.Value;
                                                this.handleSignUp(e)
                                            }), (() => {
                                                s()
                                            }), m) : this.tournamentMode == Vi.MTT && (0 == t && this.getUserBalance() < m ? this.handleNoMoney() : this.handleCoupon(e, (() => {
                                                this.handleSignUp(e)
                                            }), (() => {
                                                s()
                                            }), m))
                                        }), (() => {
                                            this.tournamentMode, Vi.MTT, cc_mtt.vv.ConsoleLog.log("** close signUpPopUp")
                                        }))
                                    }))
                                };
                                s()
                            }), !1)
                        }, this.reJoinPopUp = e => {
                            var t;
                            if (!this.MTTDetail) return null == (t = this.node) || t.scheduleOnce((() => this.reJoinPopUp(e)), 1), void cc_mtt.vv.ConsoleLog.log("retry reJoinPopUp");
                            let s;
                            s = K.appConfig.isLandscapeLayout ? W.RES_PATH.PREFAB.COMMON.MTT_SIGN_UP_BOX_LANDSCAPE : W.RES_PATH.PREFAB.COMMON.MTT_SIGN_UP_BOX, cc_mtt.vv.ConsoleLog.log("** UI REJOIN POP UP"), cc_mtt.vv.ConsoleLog.log("** UI REJOIN POP UP prefabUrl: ", s), -1 != e && -2 != e || (this.loseState[0] = !0);
                            let o = Math.floor(cc_mtt.vv.DataManager.getNow().getTime() / 1e3),
                                i = this.SNGReliveLeftTime ? this.SNGReliveLeftTime + o : o + 15,
                                n = this.MTTDetail.StartingCoins;
                            this.initCoinRebuy && (n = this.initCoinRebuy), cc_mtt.vv.DataManager.updateToolList((() => {
                                const t = () => {
                                    this.leftRejoinCount || this.isRebuyAllow ? cc_mtt.vv.AssetsManager.loadRes(s, d, ((o, a) => {
                                        var r;
                                        if (p.setAutoRelease(s, !0), !this.loseState[0]) return;
                                        this.loseFlowPopup[1] && (this.loseFlowPopup[1].active = !1);
                                        let l = h(a),
                                            d = l.getComponent("SignUpWithToolPopUp");
                                        l.parent = this.node.gameEndLayer;
                                        let m = this.srvFee + this.regFee,
                                            c = 0,
                                            u = R.GAME_TO_TOOL_ID.MTT,
                                            g = 0;
                                        this.tournamentMode == Vi.SNG ? u = R.GAME_TO_TOOL_ID.SNG : this.tournamentMode == Vi.AOF ? (u = R.GAME_TO_TOOL_ID.AOF, g = i) : this.rebuyLeftTime > 0 && this.isRebuyAllow && this.tournamentMode == Vi.MTT && (g = this.rebuyEndTime, c = 1), cc_mtt.vv.ConsoleLog.log("lose flow debug rejoin", this.loseFlowPopup), this.loseFlowPopup[0] = l, cc_mtt.vv.ConsoleLog.log("lose flow debug rejoin", this.loseFlowPopup);
                                        let M = this.MTTDetail ? this.MTTDetail.SignUpOptions.toLowerCase() : R.SIGN_UP_OPTIONS.all,
                                            y = this.MTTDetail.Tag;
                                        if (this.rebuyParam && this.rebuyParam.defineParam && (M = "", y = [], this.rebuyParam.AllowGold && (M += "gold"), this.rebuyParam.AllowTool)) {
                                            if (this.rebuyParam.AllowGold ? M += ",tool" : M += "tool", this.rebuyParam.signupToolParamList) {
                                                let e = this.rebuyParam.signupToolParamList.length;
                                                if (e > 0) {
                                                    M += ",specific:mtt:";
                                                    for (let t = 0; t < e; t++) {
                                                        let s = this.rebuyParam.signupToolParamList[t].toolId.toString();
                                                        t !== e - 1 && (s += ","), M += (3 == this.rebuyParam.signupToolParamList[t].platform ? "a93:" : "a92:") + s
                                                    }
                                                }
                                            }
                                            this.rebuyParam.Tag && (y = this.rebuyParam.Tag)
                                        }
                                        cc_mtt.vv.ConsoleLog.log("reJoinPopUp params: ", M, y, typeof M);
                                        let T = new L(N("HOLDEM.REVIVE_TOURNAMENT"), m, u, M, this.MTTDetail ? this.MTTDetail.currency : null, this.gameInvitationCode, y, null == (r = this.MTTDetail) ? void 0 : r.DisplayCurrency, this.getExchangeRate(), g, n, c, null, this.tournamentRoomName, -1);
                                        if (cc_mtt.vv.ConsoleLog.log("rejoin tools:", T.tools.length), T.toolOption && !T.goldOption && T.tools.length < 1) {
                                            let e = "POPUP_HINTS.NO_TOOL";
                                            this.callPopUpBox(e, (() => {
                                                this.loseState[0] = !1, cc_mtt.vv.ConsoleLog.log("** close rejoin and check reward"), this.loseCondition(1)
                                            }))
                                        } else this.checkAndSetMultipleGameTabButtonState(ee.RE_ENTER), d.callPopUp(T, (s => {
                                            let o = s ? s.Id : 0;
                                            this.checkAndSetMultipleGameTabButtonState(ee.GAME_TYPE), this.tournamentMode == Vi.AOF ? (this.SNGReliveLeftTime = 0, 0 == o && this.getUserBalance() < m ? this.handleNoMoney() : this.handleCoupon(s, (() => {
                                                let e = s && s.Type === _.commonProto.TOOL_TYPE.coupon ? s.Value : m;
                                                this.loseState[0] = !1, this.SNGRelive(_.mttPro.Sng_Relive_Type.Sng_Relive_Type_Rejoin, e, o)
                                            }), (() => {
                                                t()
                                            }), m)) : this.tournamentMode == Vi.MTT && (0 == o && this.getUserBalance() < m ? this.handleNoMoney() : (-2 == e && (this.isRebuyShown = !0), this.handleCoupon(s, (() => {
                                                this.loseState[0] = !1, this.MTTRelive(o)
                                            }), (() => {
                                                t()
                                            }), m)))
                                        }), (() => {
                                            this.checkAndSetMultipleGameTabButtonState(ee.GAME_TYPE), this.tournamentMode == Vi.MTT || (this.SNGReliveLeftTime = 0, this.SNGRelive(_.mttPro.Sng_Relive_Type.Sng_Relive_Type_Cancel, 0, 0)), this.loseState[0] = !1, cc_mtt.vv.ConsoleLog.log("** close rejoin and check reward"), this.loseCondition(1), this.self && this.self.PlayerIsOut(!0)
                                        }))
                                    })) : this.loseState[0] = !1
                                };
                                t()
                            }), !1)
                        }, this.onRewardMsgResponse = e => {
                            let t = e.Info;
                            0 == e.code && this.onRewardMsg(t)
                        }, s(this, "onRewardMsg", fi, this), s(this, "onSngStartNotifyMsg", Ci, this), s(this, "onMttRestTimeNotifyMsg", Ii, this), s(this, "onSngRoomRankNotifyMsg", bi, this), this.onMTTRoomRankNotifyMsg = e => {
                            if (e.mttId == this.tournamentId) {
                                cc_mtt.vv.ConsoleLog.log("onMTTRoomRankNotifyMsg", JSON.stringify(e)), this.closeAllPopUp(), this.isGameEnd = !0;
                                let t = e;
                                if (t.gameRoom = this.tournamentRoomName, t.gameType = this.tournamentMode, t.gameTime = `${N("GAME_OVER.GAME_TIME")} :  ${this.secondToString(e.GameDuration,1)} : ${this.secondToString(e.GameDuration,2)} : ${this.secondToString(e.GameDuration,3)}`, t.Review = !0, t.gamePlayers = [], t.allPlayerCount = e.allPlayerCount, 0 !== e.curPlayer.joinStatus) {
                                    if (e.curPlayer.toolName) {
                                        let s = e.curPlayer.reward;
                                        this.tournamentMode == Vi.MTT && this.MTTDetail && (this.MTTDetail.TournamentMode == _.commonProto.TOURNAMENT_MODE.HUNTER || this.MTTDetail.TournamentMode == _.commonProto.TOURNAMENT_MODE.SUPER_HUNTER || _.commonProto.TOURNAMENT_MODE.Mystery) && (s += e.curPlayer.bounty), t.UserProfit = this.getDisplayReward(s, e.curPlayer.toolValue, cc_mtt.vv.DataManager.i18DataFromServer(e.curPlayer.toolName, e.curPlayer.toolNameI18n))
                                    } else t.UserProfit = U.DisplayGold(e.curPlayer.reward + e.curPlayer.bounty, 2).toString();
                                    t.UserRank = e.curPlayer.rank, t.Review = !1
                                }
                                for (const s of e.players) {
                                    cc_mtt.vv.ConsoleLog.log(s);
                                    let e = {};
                                    e.ID = s.userId, e.PlayerName = s.nickName, e.Ranking = s.rank, this.tournamentMode == Vi.MTT && this.MTTDetail && (this.MTTDetail.TournamentMode == _.commonProto.TOURNAMENT_MODE.HUNTER ? e.HunterValue = U.RoundToDecimal(s.wins, 1) : this.MTTDetail.TournamentMode == _.commonProto.TOURNAMENT_MODE.SUPER_HUNTER && (e.HunterValue = U.DisplayGold(s.bounty, 2))), s.toolName ? e.Prize = this.getDisplayReward(s.reward, s.toolValue, cc_mtt.vv.DataManager.i18DataFromServer(s.toolName, s.toolNameI18n)) : e.Prize = U.DisplayGold(s.reward, 2).toString(), t.gamePlayers.push(e)
                                }
                                let s = W.RES_PATH.PREFAB.HOLDEM.GAME_END_POP_UP;
                                t.Review && (s = W.RES_PATH.PREFAB.HOLDEM.GAME_END_POP_UP_REVIEW), this.gameEndPopUp(s, t)
                            }
                        }, s(this, "onSngRealTimeRecordRes", wi, this), this.lastRequestData = void 0, s(this, "onMttRealTimeRecordRes", Ei, this), this.onMttLastRoomNotifyMsg = e => {
                            cc_mtt.vv.ConsoleLog.log("onMttLastRoomNotifyMsg", JSON.stringify(e), "tournament Id->", this.tournamentId), e.mttId == this.tournamentId && (this.voiceInFinal = this.MTTDetail.VoiceInFinal, this.self && null != this.node.restPopup && this.node.restPopup.restTime <= 0 && this.node.setNotificationMsg(N("PKW.POPUP.LAST_ROOM")), this.node && this.node.tournamentRecord.updateLateRegCountdown(0))
                        }, this.onMttLastRoomAnimationMsg = e => {
                            cc_mtt.vv.ConsoleLog.log("onMttLastRoomAnimationMsg", JSON.stringify(e)), e.mttId == this.tournamentId && e.roomId == this.roomId && this.node && this.node.playLastRoomEnterAnim()
                        }, this.onEnterRewardMsg = e => {
                            cc_mtt.vv.ConsoleLog.log("onEnterRewardMsg", JSON.stringify(e), "tournament Id->", this.tournamentId), e.mttId == this.tournamentId && this.self && (this.node.needShowInTheMoney = !0)
                        }, this.onMttRoomEndNotifyMsg = e => {
                            cc_mtt.vv.ConsoleLog.log("onMttRoomEndNotifyMsg", JSON.stringify(e)), this.isGameEnd || this.roomId == e.roomId && (cc_mtt.vv.ConsoleLog.log("** UI GAME END POP UP"), this.mttEndRoomId = e.roomId, this.isGameEnd = !0, this.loseState[3] = !0, this.loseCondition(3), this.isPausing && (this.isPausing = !1, this.node.PauseResumeMessage()))
                        }, s(this, "onMttStopReJoinNotifyMsg", Li, this), s(this, "onMttStateNotifyMsg", Ni, this), s(this, "onVoiceRes", Ai, this), s(this, "onVoiceMsg", Di, this), s(this, "onMttExDataMsg", Oi, this), s(this, "onMttUserRankMsg", Gi, this), this.onEmojiMsg = e => {
                            K.appConfig.getGameConfig().emojiTabMTTEnabled && (cc_mtt.vv.ConsoleLog.log(this.roomId, " on Emoji Msg: ", JSON.stringify(e)), e.roomId == this.roomId && (this.checkEmojiMuteList(e.userId) || this.node.startEmoticon(e)))
                        }, this.onEmojiRes = e => {
                            if (K.appConfig.getGameConfig().emojiTabMTTEnabled && (cc_mtt.vv.ConsoleLog.log(this.roomId, " on Emoji Res: ", JSON.stringify(e)), e.roomId == this.roomId))
                                if (e.code) switch (e.code) {
                                    case _.holdem.Code.LESS_COIN:
                                        this.node.setNotificationMsg(N("ICON_MESSAGE.NOT_ENOUGH_COIN"))
                                } else cc_mtt.vv.DataManager.webPlatform == _.commonProto.PLATFORM.PKW && this.anmiTimes++
                        }, s(this, "onAnimMsg", ki, this), this.onAnimRes = e => {
                            if (K.appConfig.getGameConfig().opponentEmojiMTTEnabled && (cc_mtt.vv.ConsoleLog.log("animation response", JSON.stringify(e)), e.roomId == this.roomId))
                                if (e.code) switch (cc_mtt.vv.ConsoleLog.log("Animation request error: " + e.code), e.code) {
                                    case _.holdem.Code.LESS_COIN:
                                        this.node.setNotificationMsg(N("ICON_MESSAGE.NOT_ENOUGH_COIN"))
                                } else;
                        }, s(this, "onRedPocketCarouseMsg", Bi, this), this.onMttUserInfoRes = e => {
                            cc_mtt.vv.ConsoleLog.log("Mtt User Info Res", JSON.stringify(e)), e.mttId == this.tournamentId && this.tournamentMode == Vi.MTT && this.MTTDetail && (this.MTTDetail.TournamentMode, _.commonProto.TOURNAMENT_MODE.SUPER_HUNTER)
                        }, s(this, "onMttRebuyMsg", Hi, this), s(this, "onMttMorebuyMsg", Ui, this), this.onMttCancelBuyRes = e => {
                            cc_mtt.vv.ConsoleLog.log("onMttCancelBuyRes", JSON.stringify(e))
                        }, this.onGameStartReminderEnterClickAction = e => {
                            let t = this.getGameStartReminderPlayCurrent(e);
                            if (cc_mtt.vv.ConsoleLog.log("msgEnterGame.TypeId", e), !t) switch (e.TypeId) {
                                case 0:
                                    this.gameViewLoader.callGameView(_.commonProto.MTT_GAME_MODE.PP, R.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL, e.RoomId);
                                    break;
                                case 1:
                                    this.gameViewLoader.callGameView(e.GameMode, R.GAME_LEVEL_LIST_ID.MTT, e.TournamentId);
                                    break;
                                case 2:
                                    e.IsAof ? this.gameViewLoader.callGameView(e.GameMode, R.GAME_LEVEL_LIST_ID.AOF, e.TournamentId) : this.gameViewLoader.callGameView(e.GameMode, R.GAME_LEVEL_LIST_ID.SNG, e.TournamentId)
                            }
                        }, this.onCelebrityBroadcastResCallback = null, this.onCelebrityBroadcastRes = e => {
                            e && e.roomId == this.roomId && (cc_mtt.vv.ConsoleLog.log("onCelebrityBroadcastRes", e), this.node.liveHandler.isBroadcastValid = e.success, this.node.enableGameMic(!(e.success || e.audioSuccess)), e.errorCode && (cc_mtt.vv.ConsoleLog.log("onCelebrityBroadcastRes error", e.errorCode), 50005 == e.errorCode && this.node.showReachMaxCannotStart()), this.onCelebrityBroadcastResCallback && (this.onCelebrityBroadcastResCallback(e), this.onCelebrityBroadcastResCallback = null))
                        }, s(this, "onCelebrityBroadcastListMsg", Fi, this), this.hadPlayMysteryBountyStartIntroAnim = !1, this.onMysteryPrizeTableMsg = e => {
                            e && e.mttId == this.tournamentId && (cc_mtt.vv.ConsoleLog.log("MysteryBounty onMysteryPrizeTableMsg : " + e.mttId + " " + e.prizeList), this.hadPlayMysteryBountyStartIntroAnim || (this.hadPlayMysteryBountyStartIntroAnim = !0, this.node.playMysteryBountyStartIntroAnim(e.prizeList, e.totalBounty), this.isMysteryBountyOnIntro = !0))
                        }, this.onMysteryPrizeMsg = e => {
                            cc_mtt.vv.ConsoleLog.log("onMysteryPrizeMsg Success: " + e.mttId + " " + e.eliminatUserInfo);
                            let t = () => {
                                e && e.mttId == this.tournamentId && e.eliminatUserInfo && e.eliminatUserInfo.length > 0 && e.eliminatUserInfo.forEach((e => {
                                    if (e.hitJackpot) {
                                        let t = 0,
                                            s = [];
                                        e.winnerInfoList.forEach((e => {
                                            t += e.prize, s.push(e.nick)
                                        })), this.node.showMysteryBountyJackpotGlobalMsg(s, t)
                                    }
                                }))
                            };
                            if (e.roomId == this.roomId) {
                                if (e.eliminatUserInfo && e.eliminatUserInfo.length > 0) {
                                    let s = [];
                                    e.eliminatUserInfo.forEach((e => {
                                        let t = !1;
                                        for (let s = 0; s < e.winnerInfoList.length; s++)
                                            if (e.winnerInfoList[s].userId == e.userId) {
                                                t = !0;
                                                break
                                            } t || s.push(e.userId)
                                    })), this.node.playMysteryBountyGloveHitAnim(s, e.eliminatUserInfo, t)
                                }
                            } else t()
                        }, this.onMysteryPrizeTableRes = e => {
                            e && e.mttId == this.tournamentId && (e.code ? cc_mtt.vv.ConsoleLog.log("onMysteryPrizeTableRes Error: " + e.code, JSON.stringify(e)) : (cc_mtt.vv.ConsoleLog.log("MysteryBounty onMysteryPrizeTableRes Success: " + e.mttId + " " + e.prizeList), e.prizeList && e.prizeList.length > 0 ? this.node.setMysteryBountyPrizeList(e.prizeList, e.totalBounty) : this.node.showMysteryBountyEnterTips(e, this.MTTDetail.LevelStopSignup)))
                        }, this._defaultTimeFlood = 500, this._sngGameEndPopup = null, this._sngWaitingSitDown = !1, this._sngGameStart = !1, this.isSngRoomExistOnServer = !0, this.onExitSngRoomLevelRes = e => (cc_mtt.vv.ConsoleLog.log("onExitSngRoomLevelRes", e), e.code || e.roomId != this.roomId || (this.removeSngTournament(), this.reboundGameView(!1)), "skip"), this.sngReEnterLevel = () => {
                            var e, t;
                            null != (e = K.geoComplyManager) && e.isGeoTokenRequired() ? null == (t = K.geoComplyManager) || t.requestValidToken(((e = "") => {
                                e && this.sngReEnterLevel()
                            }), (() => {
                                this.unlockSNGPlayAgainButton(!0)
                            })) : this.isSNGMatching || (this.isSNGMatching = !0, w.requestSngRoomLevelInfo().then((e => {
                                if (e.code) console.error("SngRoomLevelInfoRes error", e), this.unlockSNGPlayAgainButton(!0);
                                else if (e.takeinCount < 3) {
                                    this._sngWaitingSitDown = !0;
                                    let e = {
                                        count: 1,
                                        levelId: this.levelId,
                                        lat: 0,
                                        lng: 0,
                                        GeoComplianceToken: ""
                                    };
                                    var t;
                                    if (K.appConfig.getSecurityConfig().useGeoComply) e.GeoComplianceToken = null == (t = K.geoComplyManager) ? void 0 : t.getGeoToken();
                                    if (this.isGps) {
                                        let t = K.native.GetLocation(!0);
                                        e.lat = t.latitude, e.lng = t.longitude, this.requestEnterSNGRoomLevel(e)
                                    } else this.requestEnterSNGRoomLevel(e)
                                } else console.error("SngRoomLevelInfoRes error", e), this.unlockSNGPlayAgainButton(!0)
                            })))
                        }, this._isSngTableEndMessageShowed = !1, this._isSngServerMaintenancePopupShowed = !1, this.reBuyPopUp = () => {
                            if (!(Math.floor((this.rebuyEndTime - cc_mtt.vv.DataManager.getNow().getTime()) / 1e3) <= 0)) {
                                var e;
                                if (!this.MTTDetail) return null == (e = this.node) || e.scheduleOnce(this.reBuyPopUp, 1), void cc_mtt.vv.ConsoleLog.log("retry reBuyPopUp");
                                cc_mtt.vv.ConsoleLog.log("** reBuyPopUp **"), this.reJoinPopUp(-2)
                            }
                        }, this.moreBuyPopUp = () => {
                            if (Math.floor((this.morebuyEndTime - cc_mtt.vv.DataManager.getNow().getTime()) / 1e3) <= 0) return;
                            var e;
                            if (!this.MTTDetail) return null == (e = this.node) || e.scheduleOnce(this.moreBuyPopUp, 1), void cc_mtt.vv.ConsoleLog.log("retry moreBuyPopUp");
                            const t = W.RES_PATH.PREFAB.COMMON.MTT_ADD_ON_BOX;
                            cc_mtt.vv.ConsoleLog.log("** UI MOREBUY POP UP");
                            let s = this.MTTDetail.StartingCoins;
                            this.initCoinMorebuy && (s = this.initCoinMorebuy), cc_mtt.vv.DataManager.updateToolList((() => {
                                const e = () => {
                                    cc_mtt.vv.AssetsManager.loadRes(t, d, ((o, i) => {
                                        var n;
                                        p.setAutoRelease(t, !0);
                                        let a = h(i),
                                            r = a.getComponent("MttAddOnBoxPkw");
                                        a.parent = this.node.gameEndLayer;
                                        let l = this.srvFeeMorebuy + this.regFeeMorebuy,
                                            d = R.GAME_TO_TOOL_ID.MTT,
                                            m = 0;
                                        this.morebuyLeftTime > 0 && this.isMorebuyAllow && this.tournamentMode == Vi.MTT && (m = this.morebuyEndTime);
                                        let c = this.MTTDetail ? this.MTTDetail.SignUpOptions.toLowerCase() : R.SIGN_UP_OPTIONS.all,
                                            u = [],
                                            g = this.MTTDetail.Tag;
                                        if (this.morebuyParam && this.morebuyParam.defineParam && (c = "", g = [], this.morebuyParam.AllowGold && (c += "gold"), this.morebuyParam.AllowTool)) {
                                            if (this.morebuyParam.AllowGold ? c += ",tool" : c += "tool", this.morebuyParam.signupToolParamList) {
                                                let e = this.morebuyParam.signupToolParamList.length;
                                                if (e > 0) {
                                                    c += ",specific:mtt:";
                                                    for (let t = 0; t < e; t++) {
                                                        let s = this.morebuyParam.signupToolParamList[t].toolId.toString();
                                                        t !== e - 1 && (s += ",");
                                                        let o = 3 == this.morebuyParam.signupToolParamList[t].platform ? "a93:" : "a92:",
                                                            i = {
                                                                id: this.morebuyParam.signupToolParamList[t].toolId,
                                                                platform: 3 == this.morebuyParam.signupToolParamList[t].platform ? 3 : 1
                                                            };
                                                        c += o + s, u.push(i)
                                                    }
                                                }
                                            }
                                            this.morebuyParam.Tag && (g = this.morebuyParam.Tag)
                                        }
                                        cc_mtt.vv.ConsoleLog.log("moreBuyPopUp params: ", c, g, typeof c);
                                        let M = new X(N("POP_UP_OPTION.MOREBUY.TITLE"), l, d, c, this.MTTDetail ? this.MTTDetail.currency : null, this.gameInvitationCode, g, null == (n = this.MTTDetail) ? void 0 : n.DisplayCurrency, this.getExchangeRate(), m, s, this.quantityMorebuy, u, null, this.tournamentRoomName, -1);
                                        if (cc_mtt.vv.ConsoleLog.log("morebuy tools:", M.tools.length), M.toolOption && !M.goldOption && M.tools.length < 1) {
                                            let e = "POPUP_HINTS.NO_TOOL";
                                            this.callPopUpBox(e, (() => {
                                                cc_mtt.vv.ConsoleLog.log("** close morebuy and check reward"), r.zoomOut()
                                            }))
                                        } else r.callPopUp(M, (t => {
                                            let s = t ? t.Id : 0,
                                                o = l * r.morebuyCount;
                                            const i = this.getUserBalance();
                                            o = this.getConvertedFee(o);
                                            this.displayCurrency == me.USD && this.exchangeRate;
                                            cc_mtt.vv.ConsoleLog.log(`moreBuyPopUp\ntotalFee: ${l}\nmorebuyTotalFee: ${o}\ntoolInfo: `, t), this.tournamentMode == Vi.MTT && (0 == s && i < o ? this.handleMorebuyNoMoney() : this.handleCoupon(t, (() => {
                                                let e = [];
                                                if (t) {
                                                    const s = {
                                                        ticketId: t.Id,
                                                        platForm: t.platform
                                                    };
                                                    e.push(s)
                                                }
                                                this.MTTMorebuy(e), this.isMorebuyShown = !0
                                            }), (() => {
                                                e()
                                            }), o))
                                        }), (() => {
                                            this.tournamentMode == Vi.MTT && this.MttCancelBuyReq(_.mttPro.MTT_CancelBuy_Type.Morebuy)
                                        }))
                                    }))
                                };
                                Q.instance.isBL && cc_mtt.vv.BLDataManager ? cc_mtt.vv.BLDataManager.updateToolList((() => {
                                    e()
                                })) : e()
                            }), !1)
                        }, Re.makeObservable(this), this.node = a, this.isReplay = r, this.roomNode = n;
                        const {
                            holdem: l,
                            mttPro: m,
                            commonProto: c
                        } = _;
                        t !== Vi.NORMAL ? (this.tournamentId = o.Id, o.LevelTime && (this.levelId = o.LevelTime), this.tournamentType = t) : this.tournamentId = 3, this.checkInitSng(), this.loseFlowPopup = new Array(4), this.loseState = new Array(4), this.tournamentMode = t;
                        l.MessageId, m.MessageId;
                        this.playerUserId = cc_mtt.vv.DataManager.userId, this._roomMode = e, this.validateGameMode(), e == c.MTT_GAME_MODE.NLH || e == c.MTT_GAME_MODE.SHORT_DECK ? (t == Vi.MTT || t == Vi.NORMAL || t == Vi.SNG || Vi.AOF, this.maxHoleCard = 2) : (t == Vi.MTT ? S.mttWsUrl : v.sngWsUrl, this.maxHoleCard = 4), this.muteList = JSON.parse(i.localStorage.getItem(P.key_muteList)), this.muteList || (this.muteList = []), cc_mtt.vv.ConsoleLog.log("Init mute List", JSON.stringify(this.muteList)), this.emojiMuteList = JSON.parse(i.localStorage.getItem(P.key_emojiMuteList)), this.emojiMuteList || (this.emojiMuteList = []), cc_mtt.vv.ConsoleLog.log("Init emoji mute List", JSON.stringify(this.emojiMuteList)), this.cameraMuteList = JSON.parse(i.localStorage.getItem(P.key_cameraMuteList)), this.cameraMuteList || (this.cameraMuteList = []), cc_mtt.vv.ConsoleLog.log("Init camera mute List", JSON.stringify(this.cameraMuteList)), this.gameViewLoader = new H
                    }
                    checkInitSng() {
                        !this.currentGameInfoSng || 0 != this.tournamentId && 3 != this.tournamentId || (this.tournamentId = this.currentGameInfoSng.Id)
                    }
                    validateGameMode() {
                        let e = null;
                        if (cc_mtt.vv.DataManager.GAME_LEVEL_LIST) {
                            const o = cc_mtt.vv.DataManager.GAME_LEVEL_LIST.MttTournaments;
                            if (o)
                                for (let i = 0; i < o.length; i++) {
                                    var t;
                                    if (this.tournamentId == (null == (t = o[i]) || null == (t = t.Detail) ? void 0 : t.Id)) {
                                        var s;
                                        e = null == (s = o[i]) || null == (s = s.Detail) ? void 0 : s.GameMode;
                                        break
                                    }
                                }
                        }
                        if (null !== e && e != this._roomMode) {
                            var o, i;
                            const t = ie.selfTours.getAllRegisteredTournaments().find((e => e.TournamentId == this.tournamentId)),
                                s = {
                                    rootRoomMode: e,
                                    roomMode: this._roomMode,
                                    gameInfo: JSON.stringify((null == this || null == (o = this.node) ? void 0 : o.getMultipleGameInfo()) || {}),
                                    selfTourInfo: JSON.stringify(t ?? {})
                                };
                            cc_mtt.vv.ConsoleLog.log("Wrong_Game_Mode", s), null == (i = $.getInstance()) || i.trace(Z.MttIssues, "Wrong_Game_Mode", s), this._roomMode = e
                        }
                    }
                    setReconnectCallBack() {
                        j.instance ? j.instance.setHoldemReconnectCallBack(this.node.multipleGameIndex, (e => {
                            e && this.ws.url == e.url && (this.showLoading("Holdem Game Reconnect"), this.node && (cc_mtt.vv.ConsoleLog.log("lost connection, hide player control , removeGuessHandLoop"), this.node.ResetPlayerControl(), this.node.RemoveGuessHandLoop(), this.hasDisconnected = !0))
                        }), (e => {
                            e && this.ws.url == e.url && this.hideLoading("Holdem Game Reconnect")
                        }), this.connectFail, null) : y.setReconnectCallBack((e => {
                            e && this.ws.url == e.url && (this.showLoading("Holdem Game Reconnect"), this.node && (cc_mtt.vv.ConsoleLog.log("lost connection, hide player control , removeGuessHandLoop"), this.node.ResetPlayerControl(), this.node.RemoveGuessHandLoop(), this.hasDisconnected = !0))
                        }), (e => {
                            e && this.ws.url == e.url && this.hideLoading("Holdem Game Reconnect")
                        }), this.connectFail, this.VerifyToken)
                    }
                    setCallBack() {
                        j.instance ? K.appConfig.isLandscapeLayout || j.instance.setWorldVerifyTokenEndCallback(this.node.multipleGameIndex, (() => {
                            cc_mtt.vv.DataManager.token && (this.tournamentMode == Vi.SNG ? j.instance.reloadSNGMultiTable() : j.instance.reloadMttMultiTable())
                        })) : A.setCallBack((e => {
                            this.repeatLoginDialog(e)
                        }), (e => {
                            this.updateUserInfo(e)
                        }), (e => {
                            this.broadcastMessageEnvelope(e)
                        }), (() => {
                            this.node && this.node.loadingBlockerScript && this.showLoading("Holdem World")
                        }), (() => {
                            this.node && this.node.loadingBlockerScript && this.hideLoading("Holdem World")
                        }), null, (() => {
                            cc_mtt.vv.DataManager.token && A.getInstance().requestSecureTokenCheck()
                        }), (() => {
                            let e;
                            e = this.url == T.HOLDEM_SNG ? A.gameSNGSocket : A.gameSocket, A.reconnectGameSocket(e)
                        }));
                        const e = cc_mtt.vv.DataManager.worldNetwork;
                        !e || e.isConnected() || e.isReconnecting || (e.setReConnect(), e.connect("hr_set_cb")), !this.ws || this.ws.isConnected() || this.ws.isReconnecting || (this.ws.setReConnect(), this.ws.reConnect())
                    }
                    connectWebSocket() {
                        cc_mtt.vv.ConsoleLog.log("HoldemRoom connectWebSocket", this._roomMode);
                        const {
                            commonProto: e
                        } = _;
                        this._roomMode == e.MTT_GAME_MODE.NLH || this._roomMode == e.MTT_GAME_MODE.SHORT_DECK ? (this.tournamentMode == Vi.MTT ? this.url = T.HOLDEM_MTT : this.tournamentMode == Vi.NORMAL ? this.url = T.HOLDEM : this.tournamentMode != Vi.SNG && this.tournamentMode != Vi.AOF || (this.url = T.HOLDEM_SNG), this.maxHoleCard = 2) : (this.url = this.tournamentMode == Vi.MTT ? T.HOLDEM_MTT : T.OMAHA_SNG, this.maxHoleCard = 4), this.ws = xi[this.url], j.instance ? (this.isReplay || this.setReconnectCallBack(), this.node && !cc_mtt.vv.DataManager.isWebReplay && this.setCallBack(), this.AddMessageHandler(), j.instance.connectGame(this.node.multipleGameType, this.node.multipleGameIndex, this.url)) : (this.isReplay || (this.setReconnectCallBack(), this.initWebSocket(), this.ws.setReConnect()), this.node && !cc_mtt.vv.DataManager.isWebReplay && this.setCallBack(), this.AddMessageHandler())
                    }
                    initWebSocket() {
                        if (A.GameSocketNotConnect(this.url)) {
                            const {
                                holdem: e,
                                mttPro: t
                            } = _, s = {
                                ...e.MessageId,
                                ...t.MessageId
                            };
                            this.ws = xi[this.url] = new y(this.url, {
                                ...t,
                                ...e,
                                MessageId: s
                            }), this.url == T.HOLDEM_SNG ? A.gameSNGSocket = this.ws : A.gameSocket = this.ws
                        } else this.url == T.HOLDEM_SNG ? this.ws = xi[this.url] = A.gameSNGSocket : this.ws = xi[this.url] = A.gameSocket
                    }
                    AddMessageHandler() {
                        if (!this.isReplay) {
                            const {
                                holdem: e,
                                mttPro: t,
                                commonProto: s
                            } = _, o = {
                                ...e.MessageId,
                                ...t.MessageId
                            };
                            this.ws && (this.ws.AddMessageHandler(y.EVENT_ID.ON_CLOSE, this.onLostConnection), this.ws.AddMessageHandler(o.UserTokenRes, this.onUserTokenRes), this.ws.AddMessageHandler(o.HideHoleCardRes, this.onHideHoleCardRes), this.ws.AddMessageHandler(o.MttEnterGameRes, this.onMttEnterGameRes), this.ws.AddMessageHandler(o.EnterRoomRes, this.onEnterRoomRes), this.ws.AddMessageHandler(o.SitDownRes, this.onSitDownRes), this.ws.AddMessageHandler(o.SeatOccupiedMsg, this.onSeatOccupiedMsg), this.ws.AddMessageHandler(o.SeatEmptyMsg, this.onSeatEmptyMsg), this.ws.AddMessageHandler(o.ActionRes, this.onActionRes), this.ws.AddMessageHandler(o.PlayerActionMsg, this.onPlayerActionMsg), this.ws.AddMessageHandler(o.NeedActionMsg, this.onNeedActionMsg), this.ws.AddMessageHandler(o.RoomSnapshotMsg, this.onRoomSnapshotMsg), this.ws.AddMessageHandler(o.SngRoomSnapShotMsg, this.onSngRoomSnapShotMsg), this.ws.AddMessageHandler(o.HoleCardsMsg, this.onHoleCardsMsg), this.ws.AddMessageHandler(o.HoleCardListMsg, this.onHoleCardList), this.ws.AddMessageHandler(o.BoardCardsMsg, this.onBoardCardsMsg), this.ws.AddMessageHandler(o.DealerPosMsg, this.onDealerPosMsgNewGame), this.ws.AddMessageHandler(o.PauseGameRes, this.onPauseGameRes), this.ws.AddMessageHandler(o.LeaveRoomRes, this.onLeaveRoomRes), this.ws.AddMessageHandler(o.RoomBillRes, this.onRoomBillRes), this.ws.AddMessageHandler(o.PotsMsg, this.onPotsMsg), this.ws.AddMessageHandler(o.AutoPlayMsg, this.onAutoPlayMsg), this.ws.AddMessageHandler(o.StandbyRes, this.onStandbyRes), this.ws.AddMessageHandler(o.ShowdownMsg, this.onShowdownMsg), this.ws.AddMessageHandler(o.RoundResultMsg, this.onRoundResultMsg), this.ws.AddMessageHandler(o.PlayerNickNameChangeMsg, this.onPlayerNickNameChange), this.ws.AddMessageHandler(o.NeedMoreCoinMsg, this.onNeedMoreCoinMsg), this.ws.AddMessageHandler(o.RiseBlindNotifyMsg, this.onRiseBlindNotifyMsg), this.ws.AddMessageHandler(o.TimeBankMsg, this.onTimeBankMsg), this.ws.AddMessageHandler(o.TimeBankFlagSetRes, this.onTimeBankFlagSetRes), this.ws.AddMessageHandler(o.TimeBankDurationMsg, this.onTimeBankDurationMsg), this.ws.AddMessageHandler(o.RewardMsg, this.onRewardMsg), this.ws.AddMessageHandler(o.RewardMsgRes, this.onRewardMsgResponse), this.ws.AddMessageHandler(o.SngStartNotifyMsg, this.onSngStartNotifyMsg), this.ws.AddMessageHandler(o.SngRoomRankNotifyMsg, this.onSngRoomRankNotifyMsg), this.ws.AddMessageHandler(o.MttRoomRankNotifyMsg, this.onMTTRoomRankNotifyMsg), this.ws.AddMessageHandler(o.PlayerStateMsg, this.onPlayerStateMsg), this.ws.AddMessageHandler(o.MttNotifyMsg, this.onMttNotifyMsg), this.ws.AddMessageHandler(o.SngRealTimeRecordRes, this.onSngRealTimeRecordRes), this.ws.AddMessageHandler(o.MttRealTimeRecordRes, this.onMttRealTimeRecordRes), this.ws.AddMessageHandler(o.OtherRoomMsg, this.onOtherRoomMsg), this.ws.AddMessageHandler(o.BuyTimeRes, this.onBuyTime), this.ws.AddMessageHandler(o.MttLastRoomNotifyMsg, this.onMttLastRoomNotifyMsg), this.ws.AddMessageHandler(o.MttLastRoomAnimationMsg, this.onMttLastRoomAnimationMsg), this.ws.AddMessageHandler(o.EnterRewardMsg, this.onEnterRewardMsg), this.ws.AddMessageHandler(o.MttRoomEndNotifyMsg, this.onMttRoomEndNotifyMsg), this.ws.AddMessageHandler(o.MttRoomSnapshotRes, this.onMttRoomSnapShot), this.ws.AddMessageHandler(o.MttRestTimeNotifyMsg, this.onMttRestTimeNotifyMsg), this.ws.AddMessageHandler(o.SngReliveRes, this.onSngRelive), this.ws.AddMessageHandler(o.MttStopReJoinNotifyMsg, this.onMttStopReJoinNotifyMsg), this.ws.AddMessageHandler(o.VoiceRes, this.onVoiceRes), this.ws.AddMessageHandler(o.VoiceMsg, this.onVoiceMsg), this.ws.AddMessageHandler(o.MttUserRankMsg, this.onMttUserRankMsg), this.ws.AddMessageHandler(o.MttExDataMsg, this.onMttExDataMsg), K.appConfig.getGameConfig().opponentEmojiMTTEnabled && (this.ws.AddMessageHandler(o.AnimMsg, this.onAnimMsg), this.ws.AddMessageHandler(o.AnimRes, this.onAnimRes)), K.appConfig.getGameConfig().emojiTabMTTEnabled && (this.ws.AddMessageHandler(o.Emoji, this.onEmojiMsg), this.ws.AddMessageHandler(o.EmojiRes, this.onEmojiRes)), this.ws.AddMessageHandler(o.MttHoldemStadiumRes, this.onMTTHoldemStadiumRes), this.ws.AddMessageHandler(o.MttUserInfoRes, this.onMttUserInfoRes), this.ws.AddMessageHandler(o.MttRebuyMsg, this.onMttRebuyMsg), this.ws.AddMessageHandler(o.MttMorebuyMsg, this.onMttMorebuyMsg), this.ws.AddMessageHandler(o.MttCancelBuyRes, this.onMttCancelBuyRes), this.ws.AddMessageHandler(o.SngRewardInfoRes, this.onSngRewardInfoRes), this.ws.AddMessageHandler(o.ShowCardRes, this.onShowCardRes), this.ws.AddMessageHandler(o.MttStateNotifyMsg, this.onMttStateNotifyMsg), this.ws.AddMessageHandler(o.RedPocketCarouseMsg, this.onRedPocketCarouseMsg), this.ws.AddMessageHandler(o.GuessHandlePorkRes, this.onGuessHandlePorkRes), this.ws.AddMessageHandler(o.GuessHandlePorkMsg, this.onGuessHandlePorkMsg), this.ws.AddMessageHandler(o.CelebrityBroadcastRes, this.onCelebrityBroadcastRes), this.ws.AddMessageHandler(o.CelebrityBroadcastNotifyFullMsg, this.onCelebrityBroadcastNotifyFullMsg), this.ws.AddMessageHandler(o.CelebrityBroadcastListMsg, this.onCelebrityBroadcastListMsg), this.ws.AddMessageHandler(o.ExitSngRoomLevelRes, this.onExitSngRoomLevelRes), this.ws.AddMessageHandler(o.MysteryPrizeMsg, this.onMysteryPrizeMsg), this.ws.AddMessageHandler(o.MysteryPrizeTableRes, this.onMysteryPrizeTableRes), this.ws.AddMessageHandler(o.MysteryPrizeTableMsg, this.onMysteryPrizeTableMsg)), K.MessageCenter.register("show_loading", this.onShowLoading.bind(this), this.node), K.MessageCenter.register("hide_loading", this.onHideLoading.bind(this), this.node), K.MessageCenter.register(K.Enum.MessageCenterAction.changedMuckHandsSetting, this.HideHoleCard.bind(this), this.node), K.MessageCenter.register("mock_send_emoji_mtt", this.sendEmojiReq.bind(this), this.node), this.gameViewLoader.bindMessageHandler()
                        }
                    }
                    RemoveMessageHandler() {
                        if (!this.isReplay) {
                            const {
                                holdem: e,
                                mttPro: t,
                                commonProto: s
                            } = _, o = {
                                ...e.MessageId,
                                ...t.MessageId
                            };
                            this.ws && (this.ws.RemoveMessageHandler(y.EVENT_ID.ON_CLOSE, this.onLostConnection), this.ws.RemoveMessageHandler(o.UserTokenRes, this.onUserTokenRes), this.ws.RemoveMessageHandler(o.HideHoleCardRes, this.onHideHoleCardRes), this.ws.RemoveMessageHandler(o.MttEnterGameRes, this.onMttEnterGameRes), this.ws.RemoveMessageHandler(o.EnterRoomRes, this.onEnterRoomRes), this.ws.RemoveMessageHandler(o.SitDownRes, this.onSitDownRes), this.ws.RemoveMessageHandler(o.SeatOccupiedMsg, this.onSeatOccupiedMsg), this.ws.RemoveMessageHandler(o.SeatEmptyMsg, this.onSeatEmptyMsg), this.ws.RemoveMessageHandler(o.ActionRes, this.onActionRes), this.ws.RemoveMessageHandler(o.PlayerActionMsg, this.onPlayerActionMsg), this.ws.RemoveMessageHandler(o.NeedActionMsg, this.onNeedActionMsg), this.ws.RemoveMessageHandler(o.RoomSnapshotMsg, this.onRoomSnapshotMsg), this.ws.RemoveMessageHandler(o.HoleCardsMsg, this.onHoleCardsMsg), this.ws.RemoveMessageHandler(o.HoleCardListMsg, this.onHoleCardList), this.ws.RemoveMessageHandler(o.BoardCardsMsg, this.onBoardCardsMsg), this.ws.RemoveMessageHandler(o.DealerPosMsg, this.onDealerPosMsgNewGame), this.ws.RemoveMessageHandler(o.PauseGameRes, this.onPauseGameRes), this.ws.RemoveMessageHandler(o.LeaveRoomRes, this.onLeaveRoomRes), this.ws.RemoveMessageHandler(o.RoomBillRes, this.onRoomBillRes), this.ws.RemoveMessageHandler(o.PotsMsg, this.onPotsMsg), this.ws.RemoveMessageHandler(o.AutoPlayMsg, this.onAutoPlayMsg), this.ws.RemoveMessageHandler(o.StandbyRes, this.onStandbyRes), this.ws.RemoveMessageHandler(o.ShowdownMsg, this.onShowdownMsg), this.ws.RemoveMessageHandler(o.RoundResultMsg, this.onRoundResultMsg), this.ws.RemoveMessageHandler(o.PlayerNickNameChangeMsg, this.onPlayerNickNameChange), this.ws.RemoveMessageHandler(o.NeedMoreCoinMsg, this.onNeedMoreCoinMsg), this.ws.RemoveMessageHandler(o.RiseBlindNotifyMsg, this.onRiseBlindNotifyMsg), this.ws.RemoveMessageHandler(o.TimeBankMsg, this.onTimeBankMsg), this.ws.RemoveMessageHandler(o.TimeBankFlagSetRes, this.onTimeBankFlagSetRes), this.ws.RemoveMessageHandler(o.TimeBankDurationMsg, this.onTimeBankDurationMsg), this.ws.RemoveMessageHandler(o.RewardMsg, this.onRewardMsg), this.ws.RemoveMessageHandler(o.RewardMsgRes, this.onRewardMsgResponse), this.ws.RemoveMessageHandler(o.SngStartNotifyMsg, this.onSngStartNotifyMsg), this.ws.RemoveMessageHandler(o.SngRoomRankNotifyMsg, this.onSngRoomRankNotifyMsg), this.ws.RemoveMessageHandler(o.MttRoomRankNotifyMsg, this.onMTTRoomRankNotifyMsg), this.ws.RemoveMessageHandler(o.SngRoomSnapShotMsg, this.onSngRoomSnapShotMsg), this.ws.RemoveMessageHandler(o.MttRoomSnapshotRes, this.onMttRoomSnapShot), this.ws.RemoveMessageHandler(o.PlayerStateMsg, this.onPlayerStateMsg), this.ws.RemoveMessageHandler(o.MttNotifyMsg, this.onMttNotifyMsg), this.ws.RemoveMessageHandler(o.SngRealTimeRecordRes, this.onSngRealTimeRecordRes), this.ws.RemoveMessageHandler(o.MttRealTimeRecordRes, this.onMttRealTimeRecordRes), this.ws.RemoveMessageHandler(o.OtherRoomMsg, this.onOtherRoomMsg), this.ws.RemoveMessageHandler(o.BuyTimeRes, this.onBuyTime), this.ws.RemoveMessageHandler(o.MttLastRoomNotifyMsg, this.onMttLastRoomNotifyMsg), this.ws.RemoveMessageHandler(o.MttLastRoomAnimationMsg, this.onMttLastRoomAnimationMsg), this.ws.RemoveMessageHandler(o.EnterRewardMsg, this.onEnterRewardMsg), this.ws.RemoveMessageHandler(o.MttRoomEndNotifyMsg, this.onMttRoomEndNotifyMsg), this.ws.RemoveMessageHandler(o.MttRestTimeNotifyMsg, this.onMttRestTimeNotifyMsg), this.ws.RemoveMessageHandler(o.SngReliveRes, this.onSngRelive), this.ws.RemoveMessageHandler(o.MttStopReJoinNotifyMsg, this.onMttStopReJoinNotifyMsg), this.ws.RemoveMessageHandler(o.VoiceRes, this.onVoiceRes), this.ws.RemoveMessageHandler(o.VoiceMsg, this.onVoiceMsg), this.ws.RemoveMessageHandler(o.MttUserRankMsg, this.onMttUserRankMsg), this.ws.RemoveMessageHandler(o.MttExDataMsg, this.onMttExDataMsg), K.appConfig.getGameConfig().opponentEmojiMTTEnabled && (this.ws.RemoveMessageHandler(o.AnimMsg, this.onAnimMsg), this.ws.RemoveMessageHandler(o.AnimRes, this.onAnimRes)), K.appConfig.getGameConfig().emojiTabMTTEnabled && (this.ws.RemoveMessageHandler(o.Emoji, this.onEmojiMsg), this.ws.RemoveMessageHandler(o.EmojiRes, this.onEmojiRes)), this.ws.RemoveMessageHandler(o.MttHoldemStadiumRes, this.onMTTHoldemStadiumRes), this.ws.RemoveMessageHandler(o.MttUserInfoRes, this.onMttUserInfoRes), this.ws.RemoveMessageHandler(o.MttRebuyMsg, this.onMttRebuyMsg), this.ws.RemoveMessageHandler(o.MttMorebuyMsg, this.onMttMorebuyMsg), this.ws.RemoveMessageHandler(o.MttCancelBuyRes, this.onMttCancelBuyRes), this.ws.RemoveMessageHandler(o.SngRewardInfoRes, this.onSngRewardInfoRes), this.ws.RemoveMessageHandler(o.ShowCardRes, this.onShowCardRes), this.ws.RemoveMessageHandler(o.MttStateNotifyMsg, this.onMttStateNotifyMsg), this.ws.RemoveMessageHandler(o.RedPocketCarouseMsg, this.onRedPocketCarouseMsg), this.ws.RemoveMessageHandler(o.GuessHandlePorkRes, this.onGuessHandlePorkRes), this.ws.RemoveMessageHandler(o.GuessHandlePorkMsg, this.onGuessHandlePorkMsg), this.ws.RemoveMessageHandler(o.CelebrityBroadcastRes, this.onCelebrityBroadcastRes), this.ws.RemoveMessageHandler(o.CelebrityBroadcastNotifyFullMsg, this.onCelebrityBroadcastNotifyFullMsg), this.ws.RemoveMessageHandler(o.CelebrityBroadcastListMsg, this.onCelebrityBroadcastListMsg), this.ws.RemoveMessageHandler(o.ExitSngRoomLevelRes, this.onExitSngRoomLevelRes), this.ws.RemoveMessageHandler(o.MysteryPrizeMsg, this.onMysteryPrizeMsg), this.ws.RemoveMessageHandler(o.MysteryPrizeTableRes, this.onMysteryPrizeTableRes), this.ws.RemoveMessageHandler(o.MysteryPrizeTableMsg, this.onMysteryPrizeTableMsg)), K.MessageCenter.unregister("show_loading", this.node), K.MessageCenter.unregister("hide_loading", this.node), K.MessageCenter.unregister(K.Enum.MessageCenterAction.changedMuckHandsSetting, this.node), this.gameViewLoader.unbindMessageHandler()
                        }
                    }
                    showLoading(e) {
                        j.instance ? j.instance.showLoading(e) : this.node && this.node.showLoading(e)
                    }
                    hideLoading(e) {
                        j.instance ? j.instance.hideLoading(e) : this.node && this.node.hideLoading(e)
                    }
                    Destroy() {
                        this.uncacheAllVoiceMessageList(), j.instance ? (this._retryEnterRoomTimeout && clearTimeout(this._retryEnterRoomTimeout), this.isReplay || this.RemoveMessageHandler()) : (xi[this.url] = null, this._retryEnterRoomTimeout && clearTimeout(this._retryEnterRoomTimeout), this.node && !cc_mtt.vv.DataManager.isWebReplay && A.setCallBack(), this.isReplay || (this.ws && this.CloseGameSocket(), this.RemoveMessageHandler()))
                    }
                    Reset() {
                        this.tempPot = 0, this.mainPot = 0, this.allBoardCards = [], this.seatedPlayers = {}, this.countdownTtl = 0, this.countdownLeft = 0, this.countdownSeat = 0, this.countdownLastSeat = 0, this._eventTimeMap = {}
                    }
                    resetAnimate() {
                        this.animate = Wi.EMPTY
                    }
                    setAnimate(e) {
                        this.animate = e
                    }
                    setMarqueeMsg(e) {
                        this.node.addNotification(e)
                    }
                    setRedPocketDialog(e, t, s) {
                        this.redPocketPrize = e, this.redPocketApproved = t, this.redPocketRecordId = s
                    }
                    resetRedPocketDialog() {
                        this.redPocketPrize = ""
                    }
                    MTTEnterRoom(e) {
                        this.ws.Send(_.mttPro.MttEnterGameReq.create(e))
                    }
                    SNGEnterRoom(e) {
                        this.ws.Send(_.holdem.EnterRoomReq.create(e))
                    }
                    EnterRoom() {
                        if (cc_mtt.vv.ConsoleLog.log("EnterRoom", A.checkNetwork("holdem reconnect"), this.isGameEnd), this.tournamentMode == Vi.MTT)
                            if (this.isGameEnd) cc_mtt.vv.ConsoleLog.log("GameEnd, not need to enterRoom");
                            else {
                                cc_mtt.vv.ConsoleLog.log("enter MTT, tournamentId:", this.tournamentId);
                                const {
                                    mttReviewTableId: e,
                                    mttReviewPlayerId: t
                                } = cc_mtt.vv.DataManager;
                                ge.PreviousSelectedTournamentId = ge.LastSelectedTournamentId, ge.LastSelectedTournamentId = this.tournamentId, e || t ? (e && (cc_mtt.vv.ConsoleLog.log("enter mtt roomId:", e), this.MTTEnterRoom({
                                    mttId: this.tournamentId,
                                    roomId: e
                                })), t && (cc_mtt.vv.ConsoleLog.log("enter mtt roomId:", t), this.MTTEnterRoom({
                                    mttId: this.tournamentId,
                                    userId: t
                                }))) : this.roomId ? this.MTTEnterRoom({
                                    mttId: this.tournamentId,
                                    roomId: this.roomId
                                }) : this.MTTEnterRoom({
                                    mttId: this.tournamentId
                                })
                            }
                        else this.SNGEnterRoom({
                            roomId: this.tournamentId
                        })
                    }
                    updateSngRewardInfo() {
                        this.ws.Send(_.mttPro.SngRewardInfoReq.create({
                            roomId: this.roomId
                        }))
                    }
                    get isBaseToolPrize() {
                        let e = this.MTTDetail && this.MTTDetail.BaseToolPrize;
                        return cc_mtt.vv.ConsoleLog.log("Result has tool anyway:", e), e
                    }
                    get isFixPrize() {
                        let e = this.MTTDetail && this.MTTDetail.PrizeMode == R.MTT_PRIZE_MODE.MTT_PRIZE_CONFIG_MODE_FIX;
                        return cc_mtt.vv.ConsoleLog.log("Result is fix prize:", e), e
                    }
                    getDisplayReward(e, t = 0, s = "", o = me.GOLDCOIN, i = me.GOLDCOIN) {
                        if (s) {
                            if (this.isFixPrize) return e > 0 ? U.ExchangeCurrency_DisplayGold(e, this.exchangeRate, o) + "\n" + s : s;
                            {
                                i != me.GOLDCOIN && (t = U.ExchangeCurrency(this.lastRewardMsg.toolValue, this.exchangeRate, me.GOLDCOIN));
                                let n = e - t;
                                return n > 0 ? U.ExchangeCurrency_DisplayGold(n, this.exchangeRate, o) + "\n" + s : 0 == n || this.isBaseToolPrize ? s : U.ExchangeCurrency_DisplayGold(e, this.exchangeRate, o)
                            }
                        }
                        return U.ExchangeCurrency_DisplayGold(e, this.exchangeRate, o)
                    }
                    setMoneyList(e) {}
                    updatePrizeList(e, t) {
                        this.prizeList = {};
                        for (const s of e) {
                            let e = s.Rank,
                                o = s.Money ? s.Money : this.MTTDetail.GamePot * s.Proportion / 100;
                            const i = {
                                money: o,
                                proportion: s.Proportion,
                                rank: e
                            };
                            let n = t.find((t => t.Rank === e));
                            if (n) {
                                let e = n.Value;
                                if (n.Currency != this.displayCurrency) {
                                    let t = "GOLD" == n.Currency ? this.exchangeRate : this.getCurrencyRate(n.Currency);
                                    e = U.ExchangeCurrency(e, t, this.displayCurrency)
                                }
                                switch (this.prizeMode) {
                                    case R.MTT_PRIZE_MODE.MTT_PRIZE_CONFIG_MODE_FIX:
                                        i.tool = n;
                                        break;
                                    case R.MTT_PRIZE_MODE.MTT_PRIZE_CONFIG_MODE_TOOL:
                                        i.money = 0, i.tool = n;
                                        break;
                                    default:
                                        e > o ? (this.MTTDetail.BaseToolPrize || this.MTTDetail.TicketBase && e - o < this.regFee) && (i.money = 0, i.tool = n) : (i.tool = n, i.money = o - e)
                                }
                            }
                            this.prizeList[e] = i
                        }
                    }
                    requestMttTournamentDetail(e, t = k.ALL, s, o = null) {
                        !this.isReplay && e && s && E.requestMttTournamentDetail(e, s, o, 5e3, {
                            page: t
                        }, 3)
                    }
                    SitDown(e, t, s) {
                        this.takeInCoin = t;
                        let o = {
                            roomId: this.roomId,
                            seatNum: e,
                            takeInCoin: this.takeInCoin,
                            itemId: s
                        };
                        if (this.isGps) {
                            (e => {
                                e && (cc_mtt.vv.ConsoleLog.log("lat: " + e.latitude), cc_mtt.vv.ConsoleLog.log("lng: " + e.longitude), o.lat = e.latitude, o.lng = e.longitude), this.ws.Send(_.holdem.SitDownReq.create(o))
                            })(K.native.GetLocation(!0))
                        } else 0 === s && this.getUserBalance() < t ? this.handleNoMoney() : this.ws.Send(_.holdem.SitDownReq.create(o))
                    }
                    hideSngWaitingPlayers() {
                        var e;
                        this.isWaitingPlayerSngGame() || (null == (e = this.node) || e.hideWaitingPlayers())
                    }
                    Action(e, t, s = "", o = !0) {
                        cc_mtt.vv.ConsoleLog.log("ActionReq", " action:", e, " coin: ", t, " user: ", this.self.nickName, this.self.userId, this.self.seatNum, this.self.showControl), this.node.isScrolling || (this._lastHoldemAction = e, this._isHoldemUserBehavior = o, this.checkActionAllInRequest(e, t, s), $.hasInstance() && ($.getInstance().startSpan(Z.MttActionComeWrong), $.getInstance().addEventToSpan(Z.MttActionComeWrong, "request action", {
                            action: e,
                            amount: t
                        })), this.self.HideControl(), this.node.playerControl.preActionPanel.active = !1, K.MessageCenter.send("MTT_onActionMyTurn", {
                            roomId: this.roomId,
                            action: e
                        }), this.ws.Send(_.holdem.ActionReq.create({
                            roomId: this.roomId,
                            action: e,
                            coin: t
                        })))
                    }
                    resetActionAllInCheck() {
                        this._lastHoldemAction = _.holdem.Action.NONE_ACTION, this._isHoldemUserBehavior = !1
                    }
                    checkActionAllInRequest(e, t, s = "") {
                        if (this._lastHoldemAction === _.holdem.Action.ALL_IN)
                            if (K.appConfig.getGeneralConfig().multiWindowEnabled) {
                                this.node.currentScene.windowID != n.getFocusedWindowID() && $.hasInstance() && $.getInstance().trace(Z.MttAllInTrack, "AllIn No Focus", {
                                    action: e,
                                    amount: t,
                                    actionFrom: s,
                                    roomId: this.roomId,
                                    touchPos: this.node.playerControl.betBtnTouchLocation
                                })
                            } else $.hasInstance() && ($.getInstance().startSpan(Z.MttAllInTrack), $.getInstance().addEventToSpan(Z.MttAllInTrack, "request action", {
                                action: e,
                                amount: t,
                                actionFrom: s
                            }))
                    }
                    checkActionAllInResult() {
                        0 == this._isHoldemUserBehavior && $.hasInstance() && ($.HasSpan(Z.MttAllInTrack) ? $.StopSpan(Z.MttAllInTrack) : ($.getInstance().startSpan(Z.MttAllInTrack), $.getInstance().endSpan(Z.MttAllInTrack, "response action", {
                            roomId: this.roomId
                        }))), this.resetActionAllInCheck()
                    }
                    callPopUpBox(e, t, s = "MESSAGE_DIALOG_BLOCKER.OK", o = !1) {
                        this.showDialogBox("", e, !1, [{
                            type: 0,
                            text: s,
                            callback: t,
                            isNotClickBackgroundClose: o
                        }])
                    }
                    getMttRoomName() {
                        return se.getMttRoomName(this.MTTDetail ? this.MTTDetail.currency : null, this.srvFee + this.regFee, this.tournamentMode)
                    }
                    HideHoleCard() {
                        this.roomId && this.ws && this.ws.Send(_.holdem.HideHoleCardReq.create({
                            roomId: this.roomId,
                            hide: K.tools.isGameplayMuckLosingHands()
                        }))
                    }
                    StopResetTable() {
                        this.node.unschedule(this.resetTableFunc), this.waitForResetTable && this.resetTable()
                    }
                    sendShowCardReq(e, t) {
                        let s = {
                            showCards: e,
                            show: t,
                            roomId: this.roomId,
                            userId: this.playerUserId
                        };
                        cc_mtt.vv.ConsoleLog.log("Show Card Req", s), this.ws.Send(_.holdem.ShowCardReq.create(s))
                    }
                    BuyTime() {
                        this.roomId && this.ws.Send(_.mttPro.BuyTimeReq.create({
                            roomId: this.roomId
                        }))
                    }
                    addDataForRightPanelNewReplayer(e) {
                        this.node.newRelayer.requestLastNewReplayer((t => {
                            var s;
                            const o = (null == (s = t.rounds[0]) || null == (s = s.recordPath) ? void 0 : s.slice())[0];
                            t.lastRoundStartTime && (this.node.newRelayer.lastRoundRecordRequestTimestamp = t.lastRoundStartTime.getTime()), null != o && ye.getInstance().getRecord(o, Te.Mtt, this.tournamentId).then((t => {
                                null == this.rightItemNewReplayerDataList && (this.rightItemNewReplayerDataList = []);
                                let s = new pe;
                                s.roomId = e.roomId, s.gameId = this.tournamentId, s.gameuuid_js = o, s.totalPot = this.getTotalPots(t), s.winners = this.getNameWinners(t), s.myCards = this.getSelfCards(t), s.index = this.rightItemNewReplayerDataList.length, s.isChosing = !1, s.isCash = !1, s.isMtt = !0, s.mttGameMode = this.getGameMode(), s.dataPointInfo = {
                                    isShortDeck: this.getGameMode() == _.commonProto.MTT_GAME_MODE.SHORT_DECK,
                                    ante: this.calcAnte,
                                    bigBlind: this.calcBigBlind
                                }, this.rightItemNewReplayerDataList.unshift(s), K.MessageCenter.send("updateRightPanelNewReplayer", {
                                    roomId: this.tournamentId,
                                    dataList: this.rightItemNewReplayerDataList
                                })
                            }))
                        }), {
                            limit: 1,
                            after: new Date(this.node.newRelayer.lastRoundRecordRequestTimestamp)
                        })
                    }
                    getSelfCards(e) {
                        for (let t = 0; t < e.customData.players.length; t++) {
                            const s = e.customData.players[t];
                            if (s.uid == I.getSelfUserId().toString()) return s.cards
                        }
                        return null
                    }
                    getNameWinners(e) {
                        let t = [];
                        return e.customData.players.forEach((e => {
                            if (e.isWinning) {
                                let s = {
                                    name: e.name
                                };
                                t.push(s)
                            }
                        })), t
                    }
                    getTotalPots(e) {
                        let t = 0;
                        return e.customData.players.forEach((e => {
                            t += e.winningPot
                        })), t
                    }
                    getDataRightPanelNewReplayer() {
                        return this.rightItemNewReplayerDataList
                    }
                    RoomSnapshot() {
                        this.roomId && (cc_mtt.vv.ConsoleLog.log("Snapshot roomid: ", this.roomId), this.ws.Send(_.holdem.RoomSnapshotReq.create({
                            roomId: this.roomId
                        })))
                    }
                    getDealerPosition(e) {
                        let t = this.node.iconH.getIconPos(J.instance.convertToWorldSpace(this.node._players[e].node, new a(0, 0)), this.node._players[e].layout, this.node.iconH.dealerIcon);
                        return new r(t.x, t.y, 0)
                    }
                    Standby() {
                        this.roomId && this.ws.Send(_.holdem.StandbyReq.create({
                            roomId: this.roomId
                        }))
                    }
                    RoomBill() {
                        this.roomId && this.ws.Send(_.holdem.RoomBillReq.create({
                            roomId: this.roomId
                        }))
                    }
                    PauseGame() {
                        this.roomId && this.ws.Send(_.holdem.PauseGameReq.create({
                            roomId: this.roomId
                        }))
                    }
                    LeaveGame() {
                        var e;
                        (cc_mtt.vv.ConsoleLog.log("leave game"), this.roomId) && (he.instance && (null == (e = he.instance.selectedRoomInfo) || null == (e = e.data.Detail) ? void 0 : e.Id) == this.tournamentId && (he.instance.selectedRoomInfo = null), this.ws.Send(_.holdem.LeaveRoomReq.create({
                            roomId: this.roomId
                        })));
                        cc_mtt.vv.DataManager.currentRoomID = 0, this.reboundGameView(!1, !1)
                    }
                    changeBlind(e, t, s, o = 0) {
                        this.calcBigBlind = this.bigBlind = t, this.calcSmallBlind = this.smallBlind = e, this.calcAnte = this.ante = s, this.animate = o
                    }
                    SngRoomSnapShot() {
                        this.ws.Send(_.mttPro.SngRoomSnapShotReq.create({
                            roomId: this.roomId
                        }))
                    }
                    checkToPlayMultiplierAnim() {
                        if (this.isPlayedMultiplierAnim || this.havePotSNG || this.haveRankSNG || this.isSettleSNG) return this.isPlayedMultiplierAnim = !0, void((this.havePotSNG || this.haveRankSNG || this.isSettleSNG) && this.node.checkAndTurnOffSngSounds(!0));
                        this.Multiplier > 0 && null != this.AllMultiplier && this.AllMultiplier.length > 0 && (this.node.handlerJackpotDraw_GP(this.AllMultiplier, this.Multiplier, this._isJackpotMatch, this.Jackpot), this.isPlayedMultiplierAnim = !0)
                    }
                    MttRoomSnapShot() {
                        this.ws.Send(_.mttPro.MttRoomSnapshotReq.create({
                            mttId: this.tournamentId
                        }))
                    }
                    checkIsLastBlindLevel() {
                        return this.rbcList && this.rbcList.length > 0 && this.rbcList.length == this.currentBlindLevel
                    }
                    setWindowTitleCallback(e) {
                        this.windowTitleUpdatedCallback = e
                    }
                    updateWindowTitle() {
                        if (K.appConfig.getGeneralConfig().multiWindowEnabled) {
                            let e = this.node.currentScene.windowID,
                                t = "";
                            if (this.MTTDetail) {
                                let e = this.MTTDetail.TablesDetail.sort(((e, t) => e.TableId - t.TableId)),
                                    s = 1;
                                for (let t = 0; t < e.length; t++) {
                                    const o = e[t];
                                    o.TableId == this.roomId && (s = o.TableId % 1e4)
                                }
                                t = cc_mtt.vv.DataManager.i18DataFromServer(this.MTTDetail.TournamentName, this.MTTDetail.TournamentNameI18N) + " - " + K.config.getStringData("BlindBetTitle") + " " + this.smallBlind + "/" + this.bigBlind + " - " + K.config.getStringData("jackfruit_setting_tab_table") + " " + s
                            } else this.isSngGame() && (t = this.tournamentRoomName + " - " + K.config.getStringData("BlindBetTitle") + " " + this.smallBlind + "/" + this.bigBlind);
                            this.windowTitle = t, n.setWindowTitle(e, t), this.windowTitleUpdatedCallback && this.windowTitleUpdatedCallback()
                        }
                    }
                    getWindowTitle() {
                        return this.windowTitle
                    }
                    updateBlindCountdown(e, t, s) {
                        if (this.node) {
                            this.node.tournamentRecord.setBlindRiseType(e);
                            let o = e === R.BLIND_RISE_TYPE.DURATION ? t : s;
                            this.node.tournamentRecord.updateBlindValue(e, o), this.node.switchBlindMode(0 === this.blindHands)
                        }
                    }
                    cancelAutoPlay() {
                        this._autoPlayAlert = !1, this.ws.Send(_.holdem.CancelAutoPlayReq.create({
                            roomId: this.roomId
                        }))
                    }
                    setAutoPlayLabel(e, t) {
                        cc_mtt.vv.ConsoleLog.log("setAutoPlayLabel", this.seatedPlayers), Object.keys(this.seatedPlayers).forEach((s => {
                            this.seatedPlayers[s].userId == e && (this.seatedPlayers[s].isAutoPlay = t)
                        }))
                    }
                    setSittingOut(e, t) {
                        this.isSittingOut = t;
                        for (let s in this.seatedPlayers) {
                            let o = this.seatedPlayers[s];
                            if (o && o.userId == e) {
                                o.isSittingOut = t;
                                break
                            }
                        }
                    }
                    timeBankFlagSetReq(e) {
                        this.ws.Send(_.mttPro.TimeBankFlagSetReq.create({
                            flag: e,
                            mttId: this.tournamentId
                        }))
                    }
                    resetTable() {
                        if (cc_mtt.vv.ConsoleLog.log("this.resetTable after", (new Date).getTime()), this.waitForResetTable = !1, this.StopResetTable(), this.allBoardCards = [], this.mainPot = 0, this.tempPot = 0, this.sidePot = [], this.boardCardsHighlight = null, Object.keys(this.seatedPlayers).forEach((e => {
                                this.seatedPlayers[e].ClearTable()
                            })), this.node.PlayerGuessCardNextHandPanel(!1), this._breakMessageDelayed) {
                            let e = cc_mtt.vv.DataManager.getNow().getTime() - this._breakMessageTime;
                            this._breakMessageDelayed.RestTimeDuration -= 1e3 * e, this.onMttRestTimeNotifyMsg(this._breakMessageDelayed), this._breakMessageDelayed = null
                        }
                    }
                    SNGRelive(e, t, s) {
                        cc_mtt.vv.ConsoleLog.log("sngReliveReq", this.roomId, e, t, s), this._rewardCount > 0 && (1 == e && (this.loseState[1] = !1), this.ws.Send(_.mttPro.SngReliveReq.create({
                            roomId: this.roomId,
                            reliveType: e,
                            Coin: t,
                            ItemId: s
                        })), this._rewardCount = 0)
                    }
                    setHeroOut(e) {
                        this.isHeroOut = e
                    }
                    MTTRelive(e) {
                        var t, s;
                        if (null != (t = K.geoComplyManager) && t.isGeoTokenRequired()) return void(null == (s = K.geoComplyManager) || s.requestValidToken(((t = "") => {
                            t && this.MTTRelive(e)
                        }), (() => {})));
                        let o = {
                            UserId: cc_mtt.vv.DataManager.userId,
                            TournamentId: this.tournamentId,
                            TicketId: e,
                            PlatForm: Q.instance.getPlatform(),
                            isDesktop: K.appConfig.canRegisterMore(!0),
                            GeoComplianceToken: ""
                        };
                        var i;
                        K.appConfig.getSecurityConfig().useGeoComply && (o.GeoComplianceToken = null == (i = K.geoComplyManager) ? void 0 : i.getGeoToken());
                        cc_mtt.vv.ConsoleLog.log("MTTReliveReq", o.UserId, o.TournamentId, o.TicketId);
                        let n = this;
                        w.requestMttReenter(o, (t => {
                            if (cc_mtt.vv.ConsoleLog.log("MTTRelive Response", t), t.ErrorCode) {
                                let o = "ERROR_CODE_PKW." + se.getFullErrorCode(t);
                                cc_mtt.vv.ConsoleLog.log("MTTRelive error", o);
                                let i = 31001 == t.ErrorCode || 31e3 == t.ErrorCode ? () => {
                                    this.loseCondition(1), 31001 == t.ErrorCode && (this.isGameEnd = !0)
                                } : void 0;
                                if (t.ErrorCode == _.commonProto.ErrorCode.Mtt_Tournament_Max_Limit_Join && (o = l.formatStr(o, K.appConfig.getGameConfig().gameTablesConcurrent.mtt)), t.ErrorCode == _.commonProto.ErrorCode.Mtt_GeoComplianceToken_Check_Fail) {
                                    var s;
                                    let o = Pe.Buffer.from(t.GeoComplianceRes).toString("utf8");
                                    o = K.tryParseJSON(o) || {}, null == (s = K.geoComplyManager) || s.serverErrorHandler(o, null, this.MTTRelive.bind(this, e), null, {
                                        ErrorType: "MttReEnterFailed",
                                        ErrorCode: t.ErrorCode.toString(),
                                        ErrorDetails: JSON.stringify(o)
                                    })
                                } else this.callPopUpBox(o, i)
                            } else this.loseState[0] = !1, this.loseFlowPopup[0] = void 0, this.loseState[1] = !1, this.loseFlowPopup[1] = void 0, this.loseState[3] = !1, this._rewardCount = 0, n.setHeroOut(!1)
                        }), (e => {
                            let t = {};
                            try {
                                cc_mtt.vv.ConsoleLog.log("MTTRelive Response err ", e, " object-> ", JSON.stringify(e)), t = JSON.parse(JSON.stringify(e, ["message", "arguments", "type", "name"]))
                            } catch (t) {
                                cc_mtt.vv.ConsoleLog.log("MTTRelive Response err: parse json failed", e, t)
                            }
                            Object.keys(t).length > 0 && this.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0)
                        }))
                    }
                    MTTMorebuy(e) {
                        cc_mtt.vv.ConsoleLog.log("MTTMorebuy 1st\n", e);
                        let t = {
                            UserId: cc_mtt.vv.DataManager.userId,
                            TournamentId: this.tournamentId,
                            TicketInfo: e,
                            BuyCount: this.node.gameEndLayer.getComponentInChildren("MttAddOnBoxPkw").morebuyCount
                        };
                        cc_mtt.vv.ConsoleLog.log("MTTMorebuy", t.UserId, t.TournamentId, t.TicketInfo, t.BuyCount), w.requestMttMorebuy(t, (e => {
                            if (cc_mtt.vv.ConsoleLog.log("MTTMorebuy Response", e), e.ErrorCode) {
                                let t = "ERROR_CODE_PKW." + e.ErrorCode;
                                e.ErrorCode == _.commonProto.ErrorCode.Platform_Response_Error && (t = "POP_UP_OPTION.MOREBUY.ERROR_NO_MONEY"), cc_mtt.vv.ConsoleLog.log("MTTMorebuy error", e.ErrorCode, t), this.callPopUpBox(t, (() => {}))
                            }
                        }), (e => {
                            cc_mtt.vv.ConsoleLog.log("MTTMorebuy Response error", e)
                        }))
                    }
                    handleNoMoney() {
                        cc_mtt.vv.ConsoleLog.log("** UI NO MONEY POP UP", this.roomNode), this.showDialogBox("", "POPUP_HINTS.INSUFFICIENT_BALANCE", !1, [{
                            type: 0,
                            text: "Deposit",
                            callback: () => {
                                K.SHOP.RechargeClick()
                            }
                        }, {
                            type: 1,
                            text: "MESSAGE_DIALOG_BLOCKER.CANCEL",
                            callback: void 0
                        }])
                    }
                    handleMorebuyNoMoney() {
                        cc_mtt.vv.ConsoleLog.log("** UI MOREBUY NO MONEY POP UP");
                        this.callPopUpBox("POP_UP_OPTION.MOREBUY.ERROR_NO_MONEY", (() => {})), this.tournamentMode == Vi.MTT && this.MttCancelBuyReq(_.mttPro.MTT_CancelBuy_Type.Morebuy)
                    }
                    addSignUpLoading() {
                        this.node && this.node.loadingBlockerScript && this.showLoading("MTTSignUpLoading")
                    }
                    removeSignUpLoading(e, t = !1) {
                        this.node && this.node.loadingBlockerScript && this.hideLoading("MTTSignUpLoading"), e && e()
                    }
                    handleSignUp(e, t) {
                        var s, o;
                        let i = (s = "") => {
                            s && this.handleSignUp(e, t)
                        };
                        var n;
                        if (null != (s = K.geoComplyManager) && s.isGeoTokenRequired()) return void(null == (n = K.geoComplyManager) || n.requestValidToken(i, (() => {})));
                        if (null != (o = K.geoComplyManager) && o.checkForLocationServices(i)) return;
                        this.addSignUpLoading();
                        let a = K.appConfig.canRegisterMore(),
                            r = {
                                UserId: cc_mtt.vv.DataManager.userId,
                                TournamentId: this.tournamentId,
                                TicketId: e ? e.Id : 0,
                                PlatForm: Q.instance.getPlatform(),
                                isDesktop: a,
                                PrivateMttToken: ce.EncryptStringCBC(t).toString(),
                                GeoComplianceToken: "",
                                RegGoldType: 0
                            };
                        var d;
                        K.appConfig.getSecurityConfig().useGeoComply && (r.GeoComplianceToken = null == (d = K.geoComplyManager) ? void 0 : d.getGeoToken());
                        cc_mtt.vv.ConsoleLog.log("mtt sign up"), w.requestMttPlayerSignUp(r, (e => {
                            if (cc_mtt.vv.ConsoleLog.log("holdem room requestMttPlayerSignUp", r, e), e && e.ErrorCode) {
                                $.hasInstance() && $.getInstance().endSpan(Z.BuyIn, "buyin-error"), e.ErrorCode == _.commonProto.ErrorCode.Mtt_Player_Already_SignUp && le.addJoinedTournaments(r.TournamentId, {});
                                let t = "ERROR_CODE_PKW." + se.getFullErrorCode(e);
                                switch (e.ErrorCode) {
                                    case _.commonProto.ErrorCode.Mtt_Tournament_Max_Limit_Join:
                                        t = l.formatStr(t, K.appConfig.getGameConfig().gameTablesConcurrent.mtt)
                                }
                                this.callPopUpBox("ERROR_CODE_PKW." + e.ErrorCode, (() => {})), this.removeSignUpLoading()
                            } else if (e) {
                                $.hasInstance() && $.getInstance().endSpan(Z.BuyIn, "buyin-success"), le.addJoinedTournaments(this.tournamentId, {}), this.isSignUpAllow = !1;
                                cc_mtt.vv.DataManager.getNow();
                                this.removeSignUpLoading()
                            } else $.hasInstance() && $.getInstance().endSpan(Z.BuyIn, "buyin-error-no-data")
                        }), (e => {
                            this.removeSignUpLoading()
                        }))
                    }
                    handleCoupon(e, t, s, o) {
                        if (e && e.Type === _.commonProto.TOOL_TYPE.coupon && e.Value != o) {
                            let i = "",
                                n = U.DisplayGold(e.Value, 2);
                            i = n > o ? N("POPUP_HINTS.HIGHER_COUPON_VALUE") : l.formatStr(N("POPUP_HINTS.LOWER_COUPON_VALUE"), n, o - n), this.callPopUpWithOptionTwo(i, (() => {
                                o - e.Value > this.getUserBalance() ? this.handleNoMoney() : t instanceof Function && t(e)
                            }), (() => {
                                s instanceof Function && s()
                            }), N("POPUP_TITLE.JOIN_TOURNAMENT"))
                        } else t instanceof Function && t(e)
                    }
                    callPopUpWithOptionTwo(e, t, s, o) {
                        this.showDialogBox(o, e, !1, [{
                            type: 1,
                            text: "MESSAGE_DIALOG_BLOCKER.CANCEL",
                            callback: s
                        }, {
                            type: 0,
                            text: "MESSAGE_DIALOG_BLOCKER.OK",
                            callback: t
                        }])
                    }
                    fakeRewardMsg() {
                        let e = _.mttPro.RewardMsg.create();
                        e.mttName = "WPTG Weekly 10K Bounty", e.reward = 500, e.mttId = this.tournamentId, e.rewardType = _.mttPro.Rank_Type.Rank_Type_Not_Determined, e.bounty = 100, this.onRewardMsg(e)
                    }
                    _isNeedToSendRewardRequest() {
                        return this.hasDisconnected && this.isPlayingTour && null == this.self && !this.waitForStart
                    }
                    sendRewardRequest() {
                        this.tournamentId && this.ws.Send(_.mttPro.RewardMsgReq.create({
                            mttId: this.tournamentId
                        }))
                    }
                    callRewardPopUp() {
                        let e = K.appConfig.isLandscapeLayout ? W.RES_PATH.PREFAB.HOLDEM.GAME_OVER_WINDOW_LANDSCAPE : W.RES_PATH.PREFAB.HOLDEM.GAME_OVER_WINDOW;
                        if (this.tournamentMode == Vi.MTT) cc_mtt.vv.AssetsManager.loadRes(e, d, ((e, t) => {
                            var s;
                            if (cc_mtt.vv.ConsoleLog.log("RewardPopUp prefab loaded", this.loseState, this.isMultiFlightDay1), !this.loseState[1]) return;
                            null == (s = this.tabButton) || s.setText(this.getMttRoomName());
                            let o = this.loseFlowPopup[1];
                            if (o) {
                                cc_mtt.vv.ConsoleLog.log("Update Reward PopUp", o), o.getComponent(b).callGameOverWindow(this.lastRewardMsg, this, (() => {
                                    this.loseState[1] = !1, this.loseFlowPopup[1] = void 0, this.loseCondition(3)
                                })), o.active = !1, this.loseCondition(1), this.refreshMyMtts()
                            } else {
                                cc_mtt.vv.ConsoleLog.log("Instantiate Reward PopUp"), o = h(t);
                                let e = o.getComponent(b);
                                o.parent = this.node.gameEndLayer, e.callGameOverWindow(this.lastRewardMsg, this, (() => {
                                    this.loseState[1] = !1, this.loseFlowPopup[1] = void 0, this.loseCondition(3)
                                })), this.loseFlowPopup[1] = o, o.active = !1, this.loseCondition(1), this.refreshMyMtts()
                            }
                        })), this.requestRealTimeRecord();
                        else if (this.tournamentMode == Vi.SNG) {
                            if (re.isSngCacheGameModelWatchingRoom(this.roomId)) return;
                            this.showSngGameEndPopup()
                        }
                    }
                    updateRestRiseTime(e) {
                        this.riseBlindTime = e
                    }
                    animationS(e) {
                        this.animate = e
                    }
                    MTTAverageClearTable() {
                        this.allBoardCards = [], this.boardCardsHighlight = null, this.mainPot = 0, this.tempPot = 0, this.sidePot = [];
                        for (let e in this.seatedPlayers) delete this.seatedPlayers[e];
                        this.node ? (this.node.ResetPlayerControl(), this.node.PlayerGuessCardNextHandPanel(!1)) : cc_mtt.vv.ConsoleLog.log("MTTAverageClearTable - node not exist")
                    }
                    gameEndPopUp(e, t) {
                        this.node.scheduleOnce((() => {
                            this.animationS(1), cc_mtt.vv.ConsoleLog.log("end animation here")
                        }), 2.5), cc_mtt.vv.ConsoleLog.log("** UI GAME RESULT POP UP"), this.loseState[0] = !1, this.loseState[2] = !0, this.resetRest(), this.tournamentMode == R.GAME_LEVEL_LIST_ID.MTT && this.MTTDetail && this.MTTDetail.PrizeMode == R.MTT_PRIZE_MODE.MTT_PRIZE_CONFIG_MODE_AVERAGE && (this.MTTAverageClearTable(), this.loseFlowPopup[0] && (this.loseFlowPopup[0].active = !1), this.loseFlowPopup[0] = null, this.loseState[0] = !1), this.loseCondition(2), this.tournamentMode == R.GAME_LEVEL_LIST_ID.SNG && (this.isMultiFlightDay1 || cc_mtt.vv.AssetsManager.loadRes(e, d, ((e, s) => {
                            cc_mtt.vv.ConsoleLog.log("gameEndPopUp prefab loaded", this.loseState);
                            let o = h(s);
                            if (o.parent = this.node.gameEndLayer, this.tournamentMode == R.GAME_LEVEL_LIST_ID.MTT) {
                                var i;
                                let e = o.getComponent("GameEndPopUp");
                                if (this.tournamentMode == Vi.MTT && this.MTTDetail) switch (this.MTTDetail.TournamentMode) {
                                    case _.commonProto.TOURNAMENT_MODE.HUNTER:
                                        e.mttHunterHeader.active = !0;
                                        break;
                                    case _.commonProto.TOURNAMENT_MODE.SUPER_HUNTER:
                                        e.mttSuperHunterHeader.active = !0;
                                        break;
                                    default:
                                        e.normalHeader.active = !0
                                } else e.normalHeader.active = !0;
                                this.loseFlowPopup[2] = o, o.active = !1, this.tournamentMode == R.GAME_LEVEL_LIST_ID.MTT && this.prizeMode == R.MTT_PRIZE_MODE.MTT_PRIZE_CONFIG_MODE_AVERAGE && (this.loseFlowPopup[0] && (this.loseFlowPopup[0].active = !1), this.loseFlowPopup[0] = null, this.loseState[0] = !1), this.loseCondition(2), e.callGameEndPopUp(t, (() => {
                                    this.reboundGameView(this.isGameEnd)
                                })), null == (i = this.tabButton) || i.setText(this.getMttRoomName())
                            } else if (this.tournamentMode == R.GAME_LEVEL_LIST_ID.SNG) {
                                var n;
                                this.isGameEnd = !0, this.isHeroOut = !0, null == (n = this.tabButton) || n.setText(this.getMttRoomName());
                                let e = o.getComponent(oe);
                                this.loseFlowPopup[2] = o, o.active = !1, this.loseCondition(2);
                                let s = {};
                                s.levelId = this.levelId, s.isJackpotMatch = this._isJackpotMatch, s.isGPS = this.isGps, s.regFee = this.regFee, s.multipleGameInfo = this.node.multipleGameInfo, e.callGameEndPopUp(this, t, s, (() => {
                                    this.reboundGameView(this.isGameEnd), this.removeSngTournament()
                                }), (() => {
                                    this.node.matchingGameAnim_GP()
                                }))
                            }
                        })))
                    }
                    SngRealTimeRecord() {
                        this.roomId && this.ws.Send(_.mttPro.SngRealTimeRecordReq.create({
                            roomId: this.roomId
                        }))
                    }
                    get hasOpenMttDetailWindow() {
                        var e;
                        if (!K.appConfig.getGeneralConfig().multiWindowEnabled) return !1;
                        return null == (e = Me.instance) ? void 0 : e.getWindowScene(this.tournamentId)
                    }
                    requestRealTimeRecord() {
                        var e, t;
                        this.isReplay || this.isSngGame() || (this.lastRequestData ? (this.hasOpenMttDetailWindow && (this.lastRequestData.fullData = !0), null == (e = this.ws) || e.Send(_.mttPro.MttRealTimeRecordReq.create(this.lastRequestData))) : this.MttRealTimeRecord(!1, 0, null == (t = this.self) ? void 0 : t.nickName))
                    }
                    MttRealTimeRecord(e, t = 0, s = "") {
                        var o;
                        t = t || this.roomId, this.hasOpenMttDetailWindow && (e = !0);
                        let i = {
                            mttId: this.tournamentId,
                            roomId: t,
                            fullData: e,
                            searchKeyword: s
                        };
                        null == (o = this.ws) || o.Send(_.mttPro.MttRealTimeRecordReq.create(i)), this.lastRequestData = i
                    }
                    requestPlayerName(e, t) {
                        w.requestPlayersNickName(e, t, (() => {
                            cc_mtt.vv.ConsoleLog.log("Request Player Name Error.")
                        }))
                    }
                    secondToString(e, t) {
                        let s = 0;
                        switch (t) {
                            case 1:
                                s = Math.floor(e / 3600);
                                break;
                            case 2:
                                s = Math.floor(e / 60 % 60);
                                break;
                            case 3:
                                s = Math.floor(e % 60)
                        }
                        return (Array(2).join("0") + s).slice(-2)
                    }
                    uncacheAllVoiceMessageList() {
                        Object.keys(this.voiceMessageList).forEach((e => {
                            let t = this.voiceMessageList[e];
                            if (t) {
                                let s = t.voiceClip;
                                cc_mtt.vv.ConsoleLog.log(`uncache player ${e} voice clip`, t.voiceId, s.nativeUrl), ue.stop(t.voiceId), ue.uncache(s)
                            }
                        }))
                    }
                    sendEmojiReq(e) {
                        K.appConfig.getGameConfig().emojiTabMTTEnabled && this.ws.Send(_.holdem.Emoji.create({
                            roomId: this.roomId,
                            userId: this.playerUserId,
                            body: e
                        }))
                    }
                    sendAnimReq(e, t) {
                        if (!K.appConfig.getGameConfig().opponentEmojiMTTEnabled) return;
                        let s = {};
                        s = t ? {
                            roomId: this.roomId,
                            anim: e,
                            targetUser: t
                        } : {
                            roomId: this.roomId,
                            anim: e
                        }, this.ws.Send(_.holdem.AnimReq.create(s))
                    }
                    sendMttUserInfoReq(e) {
                        this.ws.Send(_.mttPro.MttUserInfoReq.create({
                            mttId: this.tournamentId,
                            userId: e
                        }))
                    }
                    MttCancelBuyReq(e) {
                        cc_mtt.vv.ConsoleLog.log("MttCancelBuyReq typeId: ", e), this.ws.Send(_.mttPro.MttCancelBuyReq.create({
                            typeId: e,
                            mttId: this.tournamentId
                        }))
                    }
                    updatePlayerWins(e, t, s) {
                        cc_mtt.vv.ConsoleLog.log("refreshMttSuperHunterPlayerIcon", e, t, s);
                        for (let t in this.seatedPlayers) this.seatedPlayers[t].userId == e && (this.seatedPlayers[t].bounty = s)
                    }
                    updateMuteList(e) {
                        var t = this.muteList.indexOf(e);
                        t >= 0 ? (this.muteList.splice(t, 1), cc_mtt.vv.ConsoleLog.log("Splice mute list: ", this.muteList)) : (this.muteList.push(e), cc_mtt.vv.ConsoleLog.log("Push mute list: ", this.muteList)), i.localStorage.setItem(P.key_muteList, JSON.stringify(this.muteList))
                    }
                    checkMuteList(e) {
                        return this.muteList.indexOf(e) >= 0
                    }
                    updateEmojiMuteList(e) {
                        var t = this.emojiMuteList.indexOf(e);
                        t >= 0 ? (this.emojiMuteList.splice(t, 1), cc_mtt.vv.ConsoleLog.log("Splice emoji mute list: ", this.emojiMuteList)) : (this.emojiMuteList.push(e), cc_mtt.vv.ConsoleLog.log("Push emoji mute list: ", this.emojiMuteList)), i.localStorage.setItem(P.key_emojiMuteList, JSON.stringify(this.emojiMuteList))
                    }
                    checkEmojiMuteList(e) {
                        return this.emojiMuteList.indexOf(e) >= 0
                    }
                    updateCameraMuteList(e) {
                        var t = this.cameraMuteList.indexOf(e);
                        t >= 0 ? (this.cameraMuteList.splice(t, 1), cc_mtt.vv.ConsoleLog.log("Splice camera mute list: ", this.cameraMuteList)) : (this.cameraMuteList.push(e), cc_mtt.vv.ConsoleLog.log("Push camera mute list: ", this.cameraMuteList)), i.localStorage.setItem(P.key_cameraMuteList, JSON.stringify(this.cameraMuteList))
                    }
                    checkCameraMuteList(e) {
                        return this.cameraMuteList.indexOf(e) >= 0
                    }
                    closeAllPopUp() {
                        if (this._autoPlayAlert = !1, cc_mtt.vv.ConsoleLog.log("** UI CLOSE ALL POP UP"), this.node && this.node.dialogController) this.node.dialogController.hideAllDialogBox();
                        else if (cc_mtt.vv.DataManager.popUps.length > 0) {
                            for (let e of cc_mtt.vv.DataManager.popUps) e instanceof m && e.destroy();
                            cc_mtt.vv.DataManager.popUps = []
                        }
                        this.node && c(this.node.celebritySelfSettingNode) && this.node.celebritySelfSettingNode.getComponent(q).onClose()
                    }
                    getSeatedPlayerByUserId(e) {
                        let t = Object.keys(this.seatedPlayers).find((t => this.seatedPlayers[t].userId == e));
                        return t ? this.seatedPlayers[t] : void 0
                    }
                    loseCondition(e) {
                        var t;
                        j.instance && c(this.node) && this.isReplay && (null == (t = this.tabButton) || t.setCards([]));
                        for (const t in this.loseState)
                            if (cc_mtt.vv.ConsoleLog.log(2634, "loseCondition", t, e, this.loseState, this.loseState[t]), this.loseState[t]) return void(Number(t) <= e && (cc_mtt.vv.ConsoleLog.log(2638, "loseCondition", Number(t), e), 3 == Number(t) ? this.roomId == this.mttEndRoomId && this.showLosePopUp(Number(t)) : this.showLosePopUp(Number(t))))
                    }
                    showLosePopUp(e) {
                        let t = ["mtt_rejoin", "reward", "game_end"];
                        if (void 0 !== this.loseFlowPopup[e]) cc_mtt.vv.ConsoleLog.log("lose flow debug open", t[e], this.loseFlowPopup), this.tryCounter = 0, this.loseFlowPopup[e].active = !0;
                        else if (cc_mtt.vv.ConsoleLog.log("lose flow debug ->", t[e], " empty"), 3 == e) this.closeAllPopUp(), this.callPopUpBox("ERROR_CODE_PKW.60081", (() => {
                            this.reboundGameView(this.isGameEnd)
                        }), void 0, !0);
                        else if (2 == e) cc_mtt.vv.ConsoleLog.log("skip game_end popup"), this.closeAllPopUp(), this.callPopUpBox("ERROR_CODE_PKW.60076", (() => {
                            this.reboundGameView(this.isGameEnd)
                        }), void 0, !0);
                        else try {
                            this.tryCounter < 4 && (this.tryCounter++, this.node.scheduleOnce((() => {
                                this.showLosePopUp(e)
                            }), .1))
                        } catch (e) {
                            cc_mtt.vv.ConsoleLog.log("lose flow debug -> error", e)
                        }
                    }
                    getToolsInfo(e, t, s) {
                        cc_mtt.vv.DataManager.worldNetwork.getToolsInfo(e, t, s)
                    }
                    msgErrorDialog(e, t) {
                        let s = e ? "ERROR_CODE_PKW." + e.ErrorCode : "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR";
                        this.showDialogBox("ERROR_CODE_PKW.TITLE", s, !1, [{
                            type: 0,
                            text: "MESSAGE_DIALOG_BLOCKER.CANCEL",
                            callback: t
                        }])
                    }
                    reboundGameView(e = !1, t = !0) {
                        cc_mtt.vv.ConsoleLog.log("reboundGameView", e, this.tournamentId);
                        let s = !1;
                        if (!this.hasCallReboundGameView)
                            if (this.hasCallReboundGameView = !0, this.tournamentMode == Vi.MTT && (cc_mtt.vv.DataManager.isEndGame = e, cc_mtt.vv.DataManager.currentResultId = this.tournamentId), K.appConfig.isLandscapeLayout && e && (cc_mtt.vv.DataManager.isTournamentFinished(this.tournamentId) || cc_mtt.vv.DataManager.finishedTournamentIds.push(this.tournamentId)), j.instance && t && j.instance.hasMoreGameInRoom()) j.instance.exitGame(this.node.multipleGameIndex), this.hasCallReboundGameView = !1;
                            else if (j.instance && this.isReplay) j.instance.exitReplayGame(), this.hasCallReboundGameView = !1;
                        else if (this.isReplay || this.ws && this.CloseGameSocket(), cc_mtt.vv.DataManager.currentRoomID = 0, K.appConfig.getGeneralConfig().multiWindowEnabled) {
                            if (j.instance) {
                                if (this.tournamentMode == Vi.SNG) {
                                    let e = -1;
                                    he.instance && (e = he.instance.getMttRoomIndex(this.tournamentId)), cc_mtt.vv.ConsoleLog.log("#34400 check in holdemRoom reboundGameView", this.node.multipleGameIndex, e), -1 != e ? j.instance.exitGame(e) : j.instance.exitGame(this.node.multipleGameIndex)
                                } else j.instance.exitGame(this.node.multipleGameIndex);
                                this.hasCallReboundGameView = !1
                            }
                        } else {
                            if (K.appConfig.isLandscapeLayout && he.instance && j.instance) {
                                let e = he.instance.getMttRoomIndex(this.tournamentId); - 1 != e && j.instance.exitGame(e)
                            }
                            s = !0;
                            let e = R.SCENE_NAME.HALL;
                            de.getInstance().registerShowDownloadPopupOnShowHallscene(), cc_mtt.vv.AssetsManager.loadScene(e, (() => {
                                this.hasCallReboundGameView = !1
                            }))
                        }
                        var o;
                        this.hasCallReboundGameView && !s && (null == (o = this.node) || o.scheduleOnce((() => {
                            if (this.hasCallReboundGameView = !1, $.hasInstance()) {
                                let e = {
                                    checkCloseTab: t,
                                    hasMoreGameInRoom: j.instance.hasMoreGameInRoom(),
                                    isReplay: this.isReplay,
                                    multiWindowEnabled: K.appConfig.getGeneralConfig().multiWindowEnabled
                                };
                                $.getInstance().trace(Z.MttIssues, ae.BackToLobbyFailed, e)
                            }
                        }), 1))
                    }
                    CloseGameSocket() {
                        const e = this.isSngGame();
                        let t = 0;
                        j.instance._room.forEach((s => {
                            var o;
                            0 == (null == s || null == (o = s.store) ? void 0 : o.isHeroOut) && (e && s.store.isSngGame() ? t++ : e || s.store.isSngGame() || t++)
                        })), t > 0 || (this.ws.close(!0, !0), this.clearGameSocket())
                    }
                    updateToolList(e, t = !1) {
                        cc_mtt.vv.DataManager.updateToolList(e, t)
                    }
                    updateUserInfo(e) {
                        cc_mtt.vv.DataManager.userData = e.UserData
                    }
                    clearGameSocket() {
                        this.url == T.HOLDEM_SNG ? A.gameSNGSocket = null : A.gameSocket = null
                    }
                    repeatLoginDialog(e) {
                        A.hasInstance() && A.getInstance().close(!0, !0), this.ws && this.ws.close(!0, !0), this.clearGameSocket(), A.hasShowLoginFailDialog || 20 == e.ErrorCode || (A.hasShowLoginFailDialog = !0, this.showDialogBox("ERROR_CODE_PKW.TITLE", "ERROR_CODE_PKW." + e.ErrorCode, !1, [{
                            type: 0,
                            text: "MESSAGE_DIALOG_BLOCKER.OK",
                            callback: () => {
                                A.hasShowLoginFailDialog = !1, A.logout()
                            }
                        }]), n.isPaused() && n.resume())
                    }
                    getMttHallInfo() {
                        if (G.instance) return G.instance.mttHallInfo;
                        let e = n.getScene().getComponentInChildren(B);
                        return e ? e._mttHallInfo : null
                    }
                    broadcastMessageEnvelope(e) {
                        if (!j.instance) switch (e.TypeId) {
                            case 0:
                            case 1:
                            case 2:
                                break;
                            case 1e3:
                                const t = _.commonProto.Broadcast_Message_Enter_Game.decode(e.Body);
                                let s = this.getGameStartReminderPlayCurrent(t);
                                t.TypeId == _.commonProto.GAME_CATEGORY.MTT ? w.requestMttTournamentStatus(t.TournamentId, (e => {
                                    cc_mtt.vv.ConsoleLog.log("broadcastMessageEnvelope", e), e.Status != _.commonProto.MTT_GAME_STATUS.STARTED && e.Status != _.commonProto.MTT_GAME_STATUS.STOP_SIGNUP || this.node.gameReminderPrefab && this.node.gameReminderPrefab.data.getComponent("GameStartReminder").reachTimeAlarm(s, t, this.node.gameReminderParent, this.node.node.parent.getComponent(u).height, this.onGameStartReminderEnterClickAction)
                                }), (() => {
                                    cc_mtt.vv.ConsoleLog.log("broadcastMessageEnvelope error")
                                })) : this.node.gameReminderPrefab && this.node.gameReminderPrefab.data.getComponent("GameStartReminder").reachTimeAlarm(s, t, this.node.gameReminderParent, this.node.node.parent.getComponent(u).height, this.onGameStartReminderEnterClickAction);
                                break;
                            case 1002:
                                const o = _.commonProto.Broadcast_Message_Out_Game.decode(e.Body);
                                cc_mtt.vv.ConsoleLog.log("broadcast:msgOutGame", o.TournamentId, o.JoinedStatus);
                                let n = cc_mtt.vv.DataManager.JoinedTournaments.findIndex((e => e.TournamentId == o.TournamentId));
                                n >= 0 ? (cc_mtt.vv.DataManager.JoinedTournaments[n].JoinStatus = o.JoinedStatus, cc_mtt.vv.ConsoleLog.log("check joined", n, cc_mtt.vv.DataManager.JoinedTournaments[n].JoinStatus)) : le.addJoinedTournaments(o.TournamentId, {
                                    joinStatus: o.JoinedStatus
                                });
                                break;
                            case 1003:
                                break;
                            case 1004:
                                _.commonProto.Broadcast_Message_End_Game.decode(e.Body);
                                t.TypeId == _.commonProto.GAME_CATEGORY.SNG && (this.sngStatus = _.mttPro.Sng_Status.Sng_Status_Release);
                                break;
                            case 1005:
                                break;
                            case 2e3:
                                _.commonProto.Broadcast_Message_Events_Updated.decode(e.Body);
                                break;
                            case 3e3:
                                let a = _.commonProto.Broadcast_Message_Events_RED_POCKET_NOTICE.decode(e.Body);
                                cc_mtt.vv.ConsoleLog.log("holdem redPocketNotice", a), cc_mtt.vv.ConsoleLog.log("$$$$$$$", a.Amount);
                                let r = "";
                                r = a.Amount.toString(), "" != a.ToolName && (r = a.ToolName);
                                let l = a.Approved,
                                    d = a.RecordId;
                                this.setRedPocketDialog(r, l, d);
                                break;
                            case 3001:
                                let h = _.commonProto.Broadcast_Message_Events_RED_POCKET_CAROUSEL.decode(e.Body);
                                cc_mtt.vv.ConsoleLog.log("holdem redPocketCarousel", h), this.isReplay || this.onBroadcastRedPocketCarousel(h);
                                break;
                            case 3500:
                                let m = _.commonProto.Broadcast_Message_Got_Tool.decode(e.Body);
                                cc_mtt.vv.ConsoleLog.log("gotToolMsg(holdemRoom)~~~ ", m), cc_mtt.vv.DataManager.newBagsCount += m.Qty;
                                break;
                            case 4e3:
                                let c = this;
                                const g = N(`PERSONAL_SETTING.GENERAL.DIALOG.REVIEW_REJECT.${e.Title.toUpperCase()}`),
                                    M = N(`PERSONAL_SETTING.GENERAL.DIALOG.REVIEW_REJECT.${e.Title.toUpperCase()}.ACTION`),
                                    p = {
                                        Translation: "PERSONAL_SETTING.GENERAL.DIALOG.REVIEW_REJECT.FORMAT",
                                        payload: e => N(e).replace("{0}", g).replace("{1}", M)
                                    };
                                this.callPopUpBox(p, (() => {
                                    i.localStorage.setItem(`${cc_mtt.vv.DataManager.userId}_${e.Title.toUpperCase()}_REJECT`, (new Date).getTime()), "AVATAR" === e.Title.toUpperCase() && x.changeSystemAvatar(-1).then((e => {
                                        if (e.status)
                                            for (let e in c.seatedPlayers) c.seatedPlayers[e].userId == cc_mtt.vv.DataManager.userId && c.node._players[parseInt(e) - 1].avatar.load(cc_mtt.vv.AssetsManager.getAvatarUrl(cc_mtt.vv.DataManager.avatarId, {
                                                isThumbnails: !0,
                                                timestamp: Date.now()
                                            }))
                                    }))
                                }));
                                break;
                            case 4500:
                                let y = _.commonProto.Broadcast_Message_Push_Carousel.decode(e.Body);
                                this.setMarqueeMsg(y.Body)
                        }
                    }
                    onBroadcastRedPocketCarousel(e) {
                        if (!this.isReplay) {
                            let t = V.prototype.getMsgContent(e);
                            this.setMarqueeMsg(t)
                        }
                    }
                    getGameStartReminderPlayCurrent(e) {
                        let t = !1;
                        return this.tournamentId && (t = this.tournamentId == e.TournamentId), t
                    }
                    setHoldemViewMttHallInfo(e, t) {
                        if (e == R.GAME_LEVEL_LIST_ID.MTT) {
                            let e = n.getScene().getComponentInChildren(G);
                            e && e.setMttHallInfo(t)
                        }
                    }
                    setCardAnimation(e) {
                        this.needAnimation = e;
                        for (let t in this.seatedPlayers) this.seatedPlayers[t].needAnimation = e
                    }
                    getSelfPlayer() {
                        return this.getPlayer(this.playerUserId)
                    }
                    getSelfPlayer_ts() {
                        if (!this._selfPlayer_ts) {
                            var e;
                            let t = this.getSelfPlayer();
                            t && null != (e = this.node) && e._players && this.node._players.forEach((e => {
                                e.getUserId() == t.userId && (this._selfPlayer_ts = e)
                            }))
                        }
                        return this._selfPlayer_ts
                    }
                    getPlayer(e) {
                        return this.seatedPlayers[Object.keys(this.seatedPlayers).find((t => this.seatedPlayers[t].userId == e))]
                    }
                    checkIsPlayerSeated(e) {
                        return Object.keys(this.seatedPlayers).find((t => this.seatedPlayers[t].userId == e)) >= 0
                    }
                    sendCelebrityBroadcastRequest(e, t, s) {
                        this.onCelebrityBroadcastResCallback = s, this.ws.Send(_.holdem.CelebrityBroadcastReq.create({
                            roomId: this.roomId,
                            isOnlive: e,
                            isAudioOnlive: t
                        }))
                    }
                    sendMysteryPrizeTableReq() {
                        console.log("sendMysteryPrizeTableReq mttId:", this.tournamentId), this.ws.Send(_.mttPro.MysteryPrizeTableReq.create({
                            mttId: this.tournamentId
                        }))
                    }
                    sendUpdateUserNoteRequest(e, t) {
                        w.updateUserNote(e, t, (e => {
                            cc_mtt.vv.ConsoleLog.log("Update User Note Response", e)
                        }))
                    }
                    sendUserNoteRequest(e, t) {
                        w.requestUserNote(e, (s => {
                            cc_mtt.vv.ConsoleLog.log("Request User Note", s, e), s && !s.ErrorCode && t(s.Note)
                        }))
                    }
                    getDisplayCurrencyType() {
                        return null == this.MTTDetail ? this.tournamentMode == Vi.SNG ? me.USD : this.displayCurrency || me.None : K.appConfig.getWalletConfig().convertStringToCurrencyType(this.MTTDetail.DisplayCurrency)
                    }
                    getCurrencyType() {
                        return null == this.MTTDetail ? this.tournamentMode == Vi.SNG ? me.USD : me.None : K.appConfig.getWalletConfig().convertStringToCurrencyType(this.MTTDetail.currency)
                    }
                    getExchangeRate() {
                        return null == this.MTTDetail ? null : this.MTTDetail.Rate
                    }
                    getCurrencyRate(e) {
                        var t;
                        let s = null == (t = this.getExchangeRate()) ? void 0 : t.find((t => t.Currency == e));
                        return (null == s ? void 0 : s.ExchangeRate) || 1
                    }
                    checkAndSetMultipleGameTabButtonState(e) {
                        var t;
                        j.instance && c(this.node) && (null == (t = this.tabButton) || t.setStatus(e))
                    }
                    getGameMode() {
                        return null == this.MTTDetail ? this._roomMode : this.MTTDetail.GameMode
                    }
                    updateCurrentBlinds(e = -1) {
                        if (this.rbcList && this.rbcList.length > 0) {
                            let t = e > 0 ? e - 1 : 1;
                            this.rbcList[t] && (this.smallBlind = this.rbcList[t].SmallBlind, this.bigBlind = this.rbcList[t].BigBlind, this.ante = this.rbcList[t].Ante, this.updateCalcBlind())
                        }
                    }
                    updateCalcBlind() {
                        this.calcBigBlind = this.bigBlind, this.calcSmallBlind = this.smallBlind, this.calcAnte = this.ante
                    }
                    checkEventFlooded(e) {
                        const t = cc_mtt.vv.DataManager.getNow().getTime(),
                            s = this._eventTimeMap[e];
                        let o = !1,
                            i = "",
                            n = 0;
                        s && (n = t - s, o = n < this._defaultTimeFlood, o && (i += `event ${e} flooded in ${n/1e3}s,`)), this._eventTimeMap[e] = t;
                        const a = this._eventTimeMap[_.holdem.MessageId.RoundResultMsg],
                            r = this._eventTimeMap[_.holdem.MessageId.HoleCardListMsg];
                        switch (e) {
                            case _.holdem.MessageId.RoundResultMsg:
                                n = a - r, o = r && a && n < this._defaultTimeFlood, o && (i += ` event RoundResultMsg flooded in ${n/1e3}s,`);
                                break;
                            case _.holdem.MessageId.HoleCardListMsg:
                                n = r - a, o = r && a && n < this.resetTableTime - this._defaultTimeFlood, o && (i += ` event HoleCardsMsg flooded in ${n/1e3}s,`)
                        }
                        if (o && c(this.node)) {
                            var l;
                            let e = {
                                reason: i
                            };
                            cc_mtt.vv.ConsoleLog.error(`----- [checkEventFlooded] ${i} ${n}`), this.node.requestRoomSnapshot(), null == (l = $.getInstance()) || l.trace(Z.EventFlooded, "MTT", e, !1, !1)
                        }
                    }
                    EnterSngRoomLevel() {
                        cc_mtt.vv.ConsoleLog.log("pat_entersngroomlevel", this.levelId), w.requestEnterSngRoomLevel(_.mttPro.EnterSngRoomLevelReq.create({
                            levelId: this.levelId
                        })).then((e => {
                            cc_mtt.vv.ConsoleLog.log("pat_check", e), e.code && console.error("enterSngRoomLevel error"), ne.handleErrorCode(e, {
                                levelId: this.levelId
                            }, null, !0)
                        }))
                    }
                    removeSngTournament() {
                        var e;
                        null == (e = j.instance) || e.removeJoinedSngTournamentID(this.roomId), ie.selfTours.manualRemoveTournament(this.roomId), re.removeCacheSngGameModel(this.roomId), re.removeCacheSngRank(this.roomId)
                    }
                    ExitSngRoomLevel() {
                        this.roomId && (this.isGameEnd || re.isSngCacheGameModelWatchingRoom(this.roomId) ? (this.removeSngTournament(), this.reboundGameView(this.isGameEnd)) : this.ws.Send(_.mttPro.ExitSngRoomLevelReq.create({
                            roomId: this.roomId
                        })))
                    }
                    requestEnterSNGRoomLevel(e) {
                        cc_mtt.vv.ConsoleLog.log("requestEnterSNGRoomLevel input", e), w.requestEnterSngRoomLevel(_.mttPro.EnterSngRoomLevelReq.create(e)).then((t => {
                            t.code ? (this.isSNGMatching = !1, this._sngWaitingSitDown = !1, this._sngGameStart = !1, this.unlockSNGPlayAgainButton(!0), cc_mtt.vv.ConsoleLog.log("EnterSngRoomLevelRes error", t), ne.handleErrorCode(t, e, null, !0)) : (this.resetSngGame(), c(this.loseFlowPopup[1]) && this.loseFlowPopup[1].destroy())
                        }))
                    }
                    resetSngGame() {
                        var e, t;
                        this.isSNGMatching = !1, this._sngWaitingSitDown = !1, this._sngGameStart = !1, this.isGameEnd = !1, this.node._gameMatchingAnim = !1, this.node.seats = this.totalSeatCount, this.node.playerIds = {}, this.node.moveCount = 0, null != (e = this.node) && e._players && this.node._players.forEach((e => {
                            e && (e.resetSngPlayer(), e.stopOutAnimation()), c(e) && e.setNodeActive(!0)
                        })), null != (t = this.node) && t.tournamentRecord && this.node.tournamentRecord.resetAllPages()
                    }
                    checkSngGameEndFromWatching(e) {
                        if (e && re.isSngCacheGameModelWatchingRoom(this.roomId)) {
                            let t = 0;
                            if (e.players.forEach((e => {
                                    0 == e.leftCoins && t++
                                })), t == e.players.length - 1) {
                                let e = re.getSngCacheGameModelRewardMsg(this.roomId);
                                this.showSngGameEndPopup(e, !1)
                            }
                        }
                    }
                    showSngGameEndPopup(e = null, t = !0) {
                        var s;
                        this.isGameEnd = !0, this.isHeroOut = !0, null == (s = this.tabButton) || s.setText(this.getMttRoomName()), oe.getInstance().loadPrefab().then((s => {
                            if (!this._sngGameEndPopup) {
                                let e = h(s);
                                e.parent = this.node.gameEndLayer, this._sngGameEndPopup = e.getComponent(oe)
                            }
                            let o = {};
                            o.levelId = this.levelId, o.isJackpotMatch = this._isJackpotMatch, o.isGPS = this.isGps, o.regFee = this.regFee, o.multipleGameInfo = this.node.multipleGameInfo, this.loseFlowPopup[1] = this._sngGameEndPopup.node;
                            let i = this.lastRewardMsg;
                            e && (i = e), this._sngGameEndPopup.callGameEndPopUp(this, i, o, (() => {
                                this.reboundGameView(this.isGameEnd), this.removeSngTournament()
                            }), (() => {}), t), this._sngGameEndPopup.node.active = !1, this.loseCondition(1)
                        })).catch((e => {
                            g(e.message || e)
                        }))
                    }
                    showSngTableEndMessage() {
                        if (!this._isSngTableEndMessageShowed) {
                            this._isSngTableEndMessageShowed = !0;
                            const e = K.Enum.ThirdPartyErrorCode.Sng_Room_End;
                            this.callPopUpBox(`ERROR_CODE_PKW.${e}`, (() => {
                                this._isSngTableEndMessageShowed = !1, this.removeSngTournament(), this.reboundGameView()
                            }))
                        }
                    }
                    showSngServerMaintenancePopup() {
                        this._isSngServerMaintenancePopupShowed || (this._isSngServerMaintenancePopupShowed = !0, this.showDialogBox("ERROR_CODE_PKW.TITLE", "ERROR_CODE_PKW.4507", !1, [{
                            type: 0,
                            text: "GAME.CONFIRM",
                            isNotClickBackgroundClose: !0,
                            callback: () => {
                                this._isSngServerMaintenancePopupShowed = !1, this.removeSngTournament(), this.reboundGameView(!1, !0)
                            }
                        }]))
                    }
                    isWaitingPlayerSngGame() {
                        return this.isSngGame() && this.isWaitingForPlayers()
                    }
                    isSngGame() {
                        return this.tournamentMode == Vi.SNG
                    }
                    hasEnoughPlayers() {
                        return this.getSeatedPlayerCount() >= this.totalSeatCount
                    }
                    isWaitingForPlayers() {
                        const e = this.getSeatedPlayerCount();
                        return e > 0 && e < this.totalSeatCount
                    }
                    setSngGameStart(e) {
                        this._sngGameStart = e
                    }
                    isSngGameStart() {
                        return this._sngGameStart
                    }
                    isSngGameReleased() {
                        return this.isSngReleased
                    }
                    isSngJackpotMultiplierAnimationPlayed() {
                        return this.isPlayedMultiplierAnim
                    }
                    getSeatedPlayerCount() {
                        let e = 0;
                        for (let t in this.seatedPlayers) this.seatedPlayers[t] && e++;
                        return e
                    }
                    verifySngPlayerGameOver(e, t) {
                        return (!this.isSngGame() || this.playerUserId != e.userId) && t
                    }
                    refreshMyMtts() {
                        K.appConfig.isLandscapeLayout && (K.MessageCenter.send(K.Enum.MessageCenterAction.RefreshLobbyMyMtts), K.MessageCenter.send("Refresh_Windows_MttDetail"))
                    }
                    getUserBalance() {
                        return K.StringTools.serverGoldToShowNumber(K.dataHandler.getUserData().total_amount)
                    }
                    getConvertedFee(e) {
                        let t = e;
                        if (this.MTTDetail) {
                            let o = K.appConfig.getWalletConfig().convertStringToCurrencyType(this.MTTDetail.currency);
                            if (o != me.None) {
                                var s;
                                let i = null == (s = K.appConfig.getWalletConfig().defaultCurrency) ? void 0 : s.type,
                                    n = this.getExchangeRate();
                                t = K.currencyManager.convert(o, i, e, n)
                            }
                        }
                        return cc_mtt.vv.ConsoleLog.log("holdemRoom getConvertedFee", e, t), t
                    }
                    unlockSNGPlayAgainButton(e) {
                        this._sngGameEndPopup && this._sngGameEndPopup.unlockPlayAgainButton(e)
                    }
                }).prototype, "roomId", [Se], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), Us = t(Bs.prototype, "redPocketPrize", [ve], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return ""
                    }
                }), Fs = t(Bs.prototype, "redPocketApproved", [_e], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), xs = t(Bs.prototype, "redPocketRecordId", [fe], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), zs = t(Bs.prototype, "self", [Ce], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), Vs = t(Bs.prototype, "seatedPlayers", [Ie], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return {}
                    }
                }), Ws = t(Bs.prototype, "dealerPos", [be], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), Js = t(Bs.prototype, "bigBlind", [we], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), js = t(Bs.prototype, "smallBlind", [Ee], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), qs = t(Bs.prototype, "ante", [Le], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), Ks = t(Bs.prototype, "straddlePos", [Ne], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), Ys = t(Bs.prototype, "sidePot", [Ae], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), $s = t(Bs.prototype, "tempPot", [De], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), Zs = t(Bs.prototype, "mainPot", [Oe], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), Xs = t(Bs.prototype, "tmpMaxDeskCoin", [Ge], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), Qs = t(Bs.prototype, "allBoardCards", [ke], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), eo = t(Bs.prototype, "boardCardsHighlight", [Be], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), to = t(Bs.prototype, "countdownTtl", [He], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), so = t(Bs.prototype, "countdownLeft", [Ue], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), oo = t(Bs.prototype, "countdownSeat", [Fe], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), io = t(Bs.prototype, "countdownLastSeat", [xe], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), no = t(Bs.prototype, "gameRecord", [ze], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), ao = t(Bs.prototype, "animate", [Ve], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), ro = t(Bs.prototype, "riseBlindTime", [We], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), lo = t(Bs.prototype, "waitForStart", [Je], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return !1
                    }
                }), ho = t(Bs.prototype, "prizeMode", [je], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), mo = t(Bs.prototype, "rbcList", [qe], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), co = t(Bs.prototype, "rewardList", [Ke], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), uo = t(Bs.prototype, "toolList", [Ye], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), go = t(Bs.prototype, "prizeList", [$e], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return {}
                    }
                }), Mo = t(Bs.prototype, "visitors", [Ze], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), po = t(Bs.prototype, "roomSnapshotState", [Xe], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), yo = t(Bs.prototype, "sngStatus", [Qe], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), To = t(Bs.prototype, "gameDuration", [et], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), Ro = t(Bs.prototype, "prizePool", [tt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), Po = t(Bs.prototype, "bountyPool", [st], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), So = t(Bs.prototype, "prizeCircle", [ot], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), vo = t(Bs.prototype, "mttTablesDetail", [it], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), _o = t(Bs.prototype, "currentBlindLevel", [nt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), fo = t(Bs.prototype, "roomMessage", [at], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), Co = t(Bs.prototype, "handForHandMessage", [rt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), Io = t(Bs.prototype, "restMessage", [lt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), bo = t(Bs.prototype, "restTime", [dt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), wo = t(Bs.prototype, "roundValue", [ht], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), Eo = t(Bs.prototype, "leftRejoinCount", [mt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), Lo = t(Bs.prototype, "voiceMessageList", [ct], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return {}
                    }
                }), No = t(Bs.prototype, "buyTimeCount", [ut], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), Ao = t(Bs.prototype, "waitForChangeTable", [gt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return !1
                    }
                }), Do = t(Bs.prototype, "isRebuyAllow", [Mt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return !1
                    }
                }), Oo = t(Bs.prototype, "rebuyLeftTime", [pt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), Go = t(Bs.prototype, "isSignUpAllow", [yt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return !1
                    }
                }), ko = t(Bs.prototype, "isMorebuyAllow", [Tt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return !1
                    }
                }), Bo = t(Bs.prototype, "morebuyLeftTime", [Rt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    }
                }), Ho = t(Bs.prototype, "isSittingOut", [Pt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return !1
                    }
                }), Uo = t(Bs.prototype, "isHeroOut", [St], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return !1
                    }
                }), Fo = t(Bs.prototype, "streamingPlayers", [vt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), xo = t(Bs.prototype, "streamingAudioPlayers", [_t], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), t(Bs.prototype, "Reset", [ft], Object.getOwnPropertyDescriptor(Bs.prototype, "Reset"), Bs.prototype), t(Bs.prototype, "resetAnimate", [Ct], Object.getOwnPropertyDescriptor(Bs.prototype, "resetAnimate"), Bs.prototype), t(Bs.prototype, "setAnimate", [It], Object.getOwnPropertyDescriptor(Bs.prototype, "setAnimate"), Bs.prototype), t(Bs.prototype, "setRedPocketDialog", [bt], Object.getOwnPropertyDescriptor(Bs.prototype, "setRedPocketDialog"), Bs.prototype), t(Bs.prototype, "resetRedPocketDialog", [wt], Object.getOwnPropertyDescriptor(Bs.prototype, "resetRedPocketDialog"), Bs.prototype), zo = t(Bs.prototype, "onSngRewardInfoRes", [Et], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return e => {
                            if (e.roomId == this.roomId) {
                                this.rewardList = e.rewardTable, this.prizeList = {};
                                for (let e = 0; e < this.rewardList.length; e++) {
                                    const t = Math.round(100 * this.rewardList[e]) / 100;
                                    this.prizeList[e + 1] = {
                                        money: t
                                    }
                                }
                            }
                        }
                    }
                }), Vo = t(Bs.prototype, "updateMttTableDetail", [Lt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return e => {
                            this.mttTablesDetail = e
                        }
                    }
                }), Wo = t(Bs.prototype, "updateMTTDetailInfo", [Nt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return () => {
                            if (this.MTTDetail) {
                                this.rebuyParam = JSON.parse(this.MTTDetail.RebuyParam), this.morebuyParam = JSON.parse(this.MTTDetail.MorebuyParam), this.MTTDetail.RestDuration && (this.restDuration = this.MTTDetail.RestDuration), this.srvFee = this.MTTDetail.SrvFee, this.regFee = this.MTTDetail.RegFee, this.srvFeeMorebuy = this.MTTDetail.SrvFee, this.regFeeMorebuy = this.MTTDetail.RegFee, this.rebuyParam && this.rebuyParam.defineParam && (this.srvFee = this.rebuyParam.srvFee, this.regFee = this.rebuyParam.regFee, this.initCoinRebuy = this.rebuyParam.initCoin), this.morebuyParam && this.morebuyParam.defineParam && (this.srvFeeMorebuy = this.morebuyParam.srvFee, this.regFeeMorebuy = this.morebuyParam.regFee, this.initCoinMorebuy = this.morebuyParam.initCoin, this.quantityMorebuy = this.morebuyParam.quantity), this.blindLevelTime = this.MTTDetail.LevelTime, this.prizeMode = this.MTTDetail.PrizeMode;
                                let e = this.MTTDetail.PrizeMoney.sort(((e, t) => e.Rank - t.Rank));
                                this.setMoneyList(e);
                                let t = this.MTTDetail.PrizeTools;
                                "WPT" != this.MTTDetail.DisplayTag || this.isWPT || (this.isWPT = !0, this.node.WPTUpdateBackground()), this.CelebrityList = this.MTTDetail.CelebrityList, this.isCelebrityTournament = this.MTTDetail.IsCelebrity, this.node.checkPlayerCelebrityList(), this.tournamentRoomName = cc_mtt.vv.DataManager.i18DataFromServer(this.MTTDetail.TournamentName, this.MTTDetail.TournamentNameI18N), this.node.setRoomName(this.tournamentRoomName), this.MTTDetail.MultiFlightId && 0 == this.MTTDetail.MultiFlightLevel && (this.isMultiFlightDay1 = !0), this.gameInvitationCode = this.MTTDetail.GameInvitationCode, this.node.tournamentRecord.updateTournamentInfoDesc(cc_mtt.vv.DataManager.i18DataFromServer(this.MTTDetail.Desc, this.MTTDetail.DescI18N)), this.updatePrizeList(e, t), this.prizePool = U.RoundToDecimal(this.MTTDetail.GamePot, 2), this.bountyPool = U.RoundToDecimal(this.MTTDetail.BountyPot, 2), this.prizeCircle = this.MTTDetail.InTheMoney, this.rbcList = this.MTTDetail.HoldemBlindsConfig, 0 == this.smallBlind && 0 !== this.currentBlindLevel && (this.smallBlind = this.rbcList[this.currentBlindLevel].SmallBlind, this.bigBlind = this.rbcList[this.currentBlindLevel].BigBlind, this.ante = this.rbcList[this.currentBlindLevel].Ante, this.updateCalcBlind()), this.MTTDetail.BlindHands > 0 && (this.blindHands = this.MTTDetail.BlindHands, this.node && this.riseBlindHand && 0 !== this.currentBlindLevel && this.node.updateBlindHand(this.checkIsLastBlindLevel() ? 0 : this.riseBlindHand)), this.node.tournamentRecord.setResurrectLimit(this.MTTDetail.ReentryLimit), this.node.tournamentRecord.setStackInfo(this.MTTDetail.MinCoins, this.MTTDetail.AvgCoins, this.MTTDetail.MaxCoins), this.node.tournamentRecord.updateLateRegCountdown(Math.max(this.MTTDetail.TimeLeftSec, 0)), this.joinedCount = this.MTTDetail.JoinedCount, this.node.tournamentInfoPanel && this.node.tournamentInfoPanel.init(this), cc_mtt.vv.ConsoleLog.log("Prize List:", this.prizeList)
                            }
                        }
                    }
                }), Jo = t(Bs.prototype, "onMTTHoldemStadiumRes", [At], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return e => {
                            cc_mtt.vv.ConsoleLog.log("onMTTHoldemStadiumRes", JSON.stringify(e)), this.tournamentId == e.mttId && (this.rbcList = e.rbc)
                        }
                    }
                }), jo = t(Bs.prototype, "onMttEnterGameRes", [Dt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return e => {
                            if (cc_mtt.vv.ConsoleLog.log("onMttEnterGameRes", JSON.stringify(e)), e.mttId == this.tournamentId)
                                if (cc_mtt.vv.DataManager.mttReviewTableId = 0, cc_mtt.vv.DataManager.mttReviewPlayerId = 0, e.code) switch (this.ws && this.ws.clearMessagePairList(), e.code) {
                                    case _.mttPro.Code.MTT_Prepare:
                                        this.isPreparing = !0, this.node.PreparingMessage(this.isPreparing), this._retryEnterRoomTimeout && clearTimeout(this._retryEnterRoomTimeout), cc_mtt.vv.ConsoleLog.log("60087 retryEnterRoomTime", this._retryEnterRoomTime), this.updateMttDetail(), this._retryEnterRoomTimeout = setTimeout((() => {
                                            this.EnterRoom()
                                        }), 1e3 * e.leftPrepareTime);
                                        break;
                                    case _.mttPro.Code.Mtt_Room_End:
                                    case _.mttPro.Code.Mtt_End:
                                        0 != this.roomId && (this.mttEndRoomId = this.roomId), this.loseState[3] = !0, this.loseCondition(3);
                                        break;
                                    case _.mttPro.Code.NO_MTT_ROOM:
                                        this.isGameEnd = !0, this.closeAllPopUp(), this.callPopUpBox("ERROR_CODE_PKW." + e.code, (() => {
                                            this.reboundGameView(!0)
                                        }));
                                        break;
                                    case _.mttPro.Code.NOT_ALLOW_ENTER:
                                        if (this._retryEnterRoomTime < 3) {
                                            this._retryEnterRoomTime++;
                                            let e = 3 * Math.random() + 1;
                                            this._retryEnterRoomTimeout && clearTimeout(this._retryEnterRoomTimeout), cc_mtt.vv.ConsoleLog.log("retryEnterRoomTime", this._retryEnterRoomTime, this._retryEnterRoomTime * e * 1e3), this._retryEnterRoomTimeout = setTimeout((() => {
                                                this.EnterRoom()
                                            }), this._retryEnterRoomTime * e * 1e3)
                                        } else {
                                            let t = "ERROR_CODE_PKW." + e.code;
                                            this.callPopUpBox(t, (() => {
                                                this.reboundGameView()
                                            }))
                                        }
                                        break;
                                    default:
                                        let t = {
                                            Translation: "ERROR_CODE_PKW." + e.code,
                                            payload: e => N(e) + " (MttEnterGameRes)"
                                        };
                                        this.callPopUpBox(t, (() => {
                                            this.reboundGameView()
                                        }))
                                } else this.isPreparing && (this.isPreparing = !1, this.node.PreparingMessage(!1)), this._retryEnterRoomTime = 0, this.updateMttDetail()
                        }
                    }
                }), qo = t(Bs.prototype, "onEnterRoomRes", [Ot], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return e => {
                            if (cc_mtt.vv.ConsoleLog.log("onEnterRoomRes check", e.code, this.tournamentId, e.mttId, e.roomId), 0 === e.code)(this.tournamentId == e.mttId || this.tournamentMode == Vi.SNG && this.isSNGMatching) && (this.isSNGMatching && (this.isSNGMatching = !1), cc_mtt.vv.DataManager.currentRoomID = e.roomId, cc_mtt.vv.ConsoleLog.log("onEnterRoomRes", e), this.tournamentId = e.mttId, this.tournamentMode == Vi.MTT && this.roomId != e.roomId && (this.node._dealerFirstDelay = !0, this.node.RemoveGuessHandLoop()), this.roomId = e.roomId, this.smallBlind = e.sb, this.bigBlind = e.bb, this.ante = e.ante, this.minTakein = e.minTakein, this.maxTakein = e.maxTakein, this.updateCalcBlind(), this.totalSeatCount = e.seatCount, e.flags && (e.flags & _.holdem.RoomFlags.ROOM_FLAG_CHECK_GPS && (i.isNative && null != cc_mtt.vv.DataManager.StatusBar && null != cc_mtt.vv.DataManager.StatusBar && cc_mtt.vv.DataManager.StatusBar.toggleGPSRes(!0), this.isGps = !0), e.flags & _.holdem.RoomFlags.ROOM_FLAG_CHECK_IP && i.isNative && null != cc_mtt.vv.DataManager.StatusBar && null != cc_mtt.vv.DataManager.StatusBar && cc_mtt.vv.DataManager.StatusBar.toggleIPRes(!0)), cc_mtt.vv.ConsoleLog.log("onEnterRoomRes", this.bigBlind, this.ante), this.waitForChangeTable = !1, !this.isReplay && K.appConfig.getLobbyConfig().enableMuckLosingHands && this.HideHoleCard(), this.requestRealTimeRecord());
                            else if (this.tournamentId == e.roomId || this.tournamentId == e.mttId)
                                if (50072 == e.code || 60076 == e.code) this.resetTable(), this.callPopUpBox("ERROR_CODE_PKW." + e.code, (() => {
                                    this.reboundGameView(!0, !0)
                                }));
                                else if (50073 == e.code) this.callPopUpBox("ERROR_CODE_PKW." + e.code, (() => {
                                A.logout()
                            }));
                            else if (60086 == e.code) this.tournamentId == e.roomId && (this.waitForChangeTable = !0, cc.isValid(this.node.waitForTableMessageLayer) && (this.node.waitForTableMessageLayer.opacity = 255), cc_mtt.vv.ConsoleLog.log("onEnterRoomRes Enter_Room_Need_Wait"));
                            else {
                                let t = {
                                    Translation: "ERROR_CODE_PKW." + e.code,
                                    payload: e => "EnterRoomRes " + N(e)
                                };
                                this.callPopUpBox(t, (() => {
                                    this.reboundGameView()
                                }))
                            }
                        }
                    }
                }), Ko = t(Bs.prototype, "onSitDownRes", [Gt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return e => {
                            this.roomId == e.roomId && (this.setCardAnimation(!0), cc_mtt.vv.ConsoleLog.log("onSitDownRes", JSON.stringify(e)), e.code == _.holdem.Code.NEAR_GPS || e.code == _.holdem.Code.SAME_IP ? this.showDialogBox("POPUP_TITLE.REMIND", "GAME.PLAYER_SAME_IP", !1, [{
                                type: 0,
                                text: "GAME.CONFIRM",
                                callback: void 0
                            }]) : e.code > 0 ? e.code == _.holdem.Code.OTHER_ROOM ? cc_mtt.vv.ConsoleLog.log("SitDownRes " + e.code) : 50051 == e.code ? this.callPopUpBox(`ERROR_CODE_PKW.${e.code}`, (() => {})) : this.callPopUpBox("ERROR_CODE_PKW." + e.code, (() => {})) : 0 == e.code ? c(this.node) && this.node.audioPlayer.playEffect(O.PlayerSitDown, this) : -1 == e.code && this.callPopUpBox("HOLDEM.ERROR_SEAT_SEATED", (() => {})))
                        }
                    }
                }), Yo = t(Bs.prototype, "onSeatOccupiedMsg", [kt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return (e, t = !0) => {
                            if (e.roomId == this.roomId) {
                                this.needAnimation = t, cc_mtt.vv.ConsoleLog.log("onSeatOccupiedMsg", JSON.stringify(e));
                                const s = {
                                    userId: e.userId,
                                    leftCoin: e.coin,
                                    deskCoin: 0,
                                    nickName: e.nickName,
                                    seatNum: e.seatNum,
                                    gender: e.gender,
                                    state: _.holdem.PlayerState.NONE_STATE,
                                    avatar: e.avatar
                                };
                                if (cc_mtt.vv.ConsoleLog.log("onSeatOccupiedMsg this.playerUserId", this.playerUserId), this.seatedPlayers[e.seatNum] && (this.seatedPlayers[e.seatNum].needAnimation = t), e.userId == this.playerUserId) {
                                    if (this.waitForChangeTable && (this.waitForChangeTable = !1), this.seatedPlayers[e.seatNum] && this.seatedPlayers[e.seatNum] instanceof f) {
                                        let t = this.seatedPlayers[e.seatNum];
                                        t.UpdateSelfPlayer(this, s, null), this.tournamentMode == Vi.MTT && 0 == t.mttRank && 0 !== this.MTTRank && (t.mttRank = this.MTTRank)
                                    } else this.seatedPlayers[e.seatNum] = this.self = new f(this, s, null), this.tournamentMode == Vi.MTT && 0 == this.seatedPlayers[e.seatNum].mttRank && 0 !== this.MTTRank && (this.seatedPlayers[e.seatNum].mttRank = this.MTTRank);
                                    this.isPlayingTour = !0
                                } else this.seatedPlayers[e.seatNum] && this.seatedPlayers[e.seatNum] instanceof C ? this.seatedPlayers[e.seatNum].UpdatePlayer(this, s) : this.seatedPlayers[e.seatNum] = new C(this, s), t && this.seatedPlayers[e.seatNum].SitDownAnimation();
                                this.seatedPlayers[e.seatNum] && (this.seatedPlayers[e.seatNum].needAnimation = t), this.hideSngWaitingPlayers(), this.node.showPlayerInfo(e.userId, e.userId == this.playerUserId)
                            }
                        }
                    }
                }), $o = t(Bs.prototype, "onSeatEmptyMsg", [Bt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return (e, t = !0) => {
                            e.roomId == this.roomId && (this.needAnimation = t, cc_mtt.vv.ConsoleLog.log("onSeatEmptyMsg", JSON.stringify(e)), delete this.seatedPlayers[e.seatNum], this.self && e.seatNum === this.self.seatNum && (this.self = null), this.seatedPlayers[e.seatNum] && (this.seatedPlayers[e.seatNum].needAnimation = t))
                        }
                    }
                }), Zo = t(Bs.prototype, "onNeedActionMsg", [Ht], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return e => {
                            if (this.roomId == e.roomId) {
                                var t;
                                if (this.needActionMsg = e, this.setCardAnimation(!0), cc_mtt.vv.ConsoleLog.log("onNeedActionMsg", JSON.stringify(e)), e.minBetCoin)
                                    if (null == (t = this.seatedPlayers[e.seatNum]) || t.OnNeedAction(e, e.countDown, e.countDown, e.maxBetCoin), j.instance && !K.appConfig.getGeneralConfig().multiWindowEnabled) {
                                        let e = this.node.multipleGameIndex;
                                        j.instance.setTriggerStartTime(e)
                                    } if (this.needCheckCardsDealt) {
                                    if (!this.isNewHandCardsDealt) {
                                        var s;
                                        let t = "unknown";
                                        this.seatedPlayers && this.seatedPlayers[e.seatNum] && (t = this.seatedPlayers[e.seatNum].nickName);
                                        let o = {
                                            roomId: e.roomId,
                                            seatNum: e.seatNum,
                                            playerName: t
                                        };
                                        null == (s = $.getInstance()) || s.trace(Z.NoCardDealt, "MTT", o, !1, !0)
                                    }
                                    let t = !1;
                                    for (let e in this.seatedPlayers) {
                                        var o;
                                        if (this.playerUserId == (null == (o = this.seatedPlayers[e]) ? void 0 : o.userId)) {
                                            t = !0;
                                            break
                                        }
                                    }
                                    if (t && !this.isNewHandSelfCardsDealt) {
                                        var i;
                                        let t = "unknown";
                                        this.seatedPlayers && this.seatedPlayers[e.seatNum] && (t = this.seatedPlayers[e.seatNum].nickName);
                                        let s = {
                                            roomId: e.roomId,
                                            seatNum: e.seatNum,
                                            playerName: t
                                        };
                                        null == (i = $.getInstance()) || i.trace(Z.NoCardDealtToSelf, "MTT", s, !1, !1)
                                    }
                                    this.needCheckCardsDealt = !1
                                }
                            }
                        }
                    }
                }), Xo = t(Bs.prototype, "onActionRes", [Ut], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return e => {
                            if (this.roomId == e.roomId) {
                                if (this.setCardAnimation(!0), cc_mtt.vv.ConsoleLog.log("onActionRes", JSON.stringify(e)), 0 !== e.code)
                                    if (cc_mtt.vv.ConsoleLog.log("error code: ", e.code, " object-> ", JSON.stringify(e)), 50007 == e.code || 50004 == e.code) this._autoPlayAlert || (cc_mtt.vv.ConsoleLog.log("show time out pop up"), this.callPopUpBox("POPUP_HINTS.TIME_OUT", (() => {})));
                                    else {
                                        let t = {
                                            Translation: `ERROR_CODE_PKW.${e.code}`,
                                            payload: t => N(t) + e.code
                                        };
                                        if (this.callPopUpBox(t, (() => {})), null != this.needActionMsg && null != this.seatedPlayers[this.needActionMsg.seatNum] && null != this.node.getPlayerByUserId(this.seatedPlayers[this.needActionMsg.seatNum].userId)) {
                                            let e = this.seatedPlayers[this.needActionMsg.seatNum].userId,
                                                t = this.node.getPlayerByUserId(e).timer.remainTime / 1e3,
                                                s = this.needActionMsg.countDown;
                                            this.seatedPlayers[this.needActionMsg.seatNum].OnNeedAction(this.needActionMsg, s, t, this.needActionMsg.maxBetCoin)
                                        }
                                        $.hasInstance() && $.getInstance().endSpan(Z.MttActionComeWrong, "response action", {
                                            error_code: e.code
                                        })
                                    } this.checkActionAllInResult()
                            }
                        }
                    }
                }), Qo = t(Bs.prototype, "onPlayerActionMsg", [Ft], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return e => {
                            if (e.roomId == this.roomId) {
                                var t;
                                if (this.setCardAnimation(!0), !this.seatedPlayers) return void(null == (t = $.getInstance()) || t.trace(Z.MttMsgComeWrong, "onPlayerActionMsg", {
                                    seatedPlayers: !1
                                }));
                                let o = this.seatedPlayers[e.seatNum];
                                var s;
                                if (!o) return void(null == (s = $.getInstance()) || s.trace(Z.MttMsgComeWrong, "onPlayerActionMsg", e));
                                switch (cc_mtt.vv.ConsoleLog.log("onPlayerActionMsg", JSON.stringify(e)), this.tmpMaxDeskCoin = Math.max(this.tmpMaxDeskCoin, e.deskCoin), this.tempPot += e.deskCoin - o.deskCoin, cc_mtt.vv.ConsoleLog.log("PotChange tempPot", this.tempPot, e.deskCoin, o.deskCoin), o.countdownTtl = 0, this.curSeatNumPlayerAction = e.seatNum, o.OnAction(e), e.action) {
                                    case _.holdem.Action.FOLD:
                                        c(this.node) && this.node.audioPlayer.playEffect(O.Fold, this)
                                }
                                if (o.userId == this.playerUserId) switch (K.tools.isAutoFocusOnMobile() && j.instance && !o.isSittingOut && !this.node.playerControl._preselectedAction ? j.instance.CheckAndChangePage(e.roomId) : this.node.playerControl._preselectedAction = !1, e.action) {
                                    case _.holdem.Action.FOLD:
                                        const e = $.GetTrackAttributesOfSpan(Z.MTTTimeBank);
                                        (null == e || !e.userClickFold) && this.node._timeBankFlag && this.node._timeBankRemainTime > 0 && $.EndSpan(Z.MTTTimeBank, "TimeBankNotWork", {
                                            roomId: this.roomId,
                                            tournamentId: this.tournamentId,
                                            timeBankLeft: this.node._timeBankRemainTime
                                        });
                                        break;
                                    case _.holdem.Action.CHECK:
                                        c(this.node) && this.node.audioPlayer.playEffect(O.Check, this);
                                        break;
                                    case _.holdem.Action.ALL_IN:
                                        c(this.node) && this.checkActionAllInResult()
                                }
                            }
                            $.StopSpan(Z.MTTTimeBank)
                        }
                    }
                }), ei = t(Bs.prototype, "onPlayerStateMsg", [xt], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return e => {
                            e.roomId == this.roomId && (this.setCardAnimation(!0), cc_mtt.vv.ConsoleLog.log("onPlayerStateMsg", JSON.stringify(e)), this.self && e.seatNum == this.self.seatNum && (this.waitForStart = 20 == e.state), 6 != e.state && 20 != e.state || (this.seatedPlayers[e.seatNum].state = e.state), this.seatedPlayers[e.seatNum].actualState = e.state, this.seatedPlayers[e.seatNum].SetHasFold())
                        }
                    }
                }), ti = t(Bs.prototype, "onShowdownMsg", [zt], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                                return (e, t = !0) => {
                                        if (this.roomId == e.roomId) {
                                            this.StopResetTable(), cc_mtt.vv.ConsoleLog.log("onShowDownMsg", JSON.stringify(e)), this.needAnimation = t, this.isShowDown = !0;
                                            let s = new Uint8Array,
                                                o = e.winners && e.winners.length > 0;
                                            o && e.players.forEach((t => {
                                                    t.seatNum == e.winners[0] && (s = t.rankCards)
                                                })), e.players.forEach((i => {
                                                            var n;
                                                            let a = null == (n = this.seatedPlayers[i.seatNum]) ? void 0 : n.userId;
                                                            if (a != this.playerUserId) {
                                                                let e = this.node._players.find((e => {
                                                                    var t;
                                                                    return (null == (t = e.info) ? void 0 : t.userId) == a
                                                                }));
                                                                e && e.updateOpponentZoder()
                                                            }
                                                            if (2 == this.maxHoleCard) {
                                                                var r;
                                                                let t = e.winners && e.winners.length > 0 && e.winners.includes(i.seatNum);
                                                                cc_mtt.vv.ConsoleLog.log("patcheck onShowDownMsg", t, i.seatNum, e.winners, e.winners[0], i), null == (r = this.seatedPlayers[i.seatNum]) || r.Showdown(i.holeCards, i.rank, i.rankCards && i.rankCards.length && t ? i.rankCards : o ? s : null)
                                                            } else {
                                                                var l;
                                                                null == (l = this.seatedPlayers[i.seatNum]) || l.Showdown(i.holeCards, i.rank, i.rankCards && i.rankCards.length ? i.rankCards : null)
                                                            }
                                                            if (this.seatedPlayers[i.seatNum] && (this.seatedPlayers[i.seatNum].needAnimation = t), i.rankCards && i.rankCards.length && e.winners && e.winners.length > 0 && i.seatNum === e.winners[0]) {
                                                                const e = [],
                                                                    t = this.allBoardCards.slice();
                                                                t.forEach((t => {
                                                                    e.push(-1 !== i.rankCards.indexOf(t))
                                                                })), cc_mtt.vv.ConsoleLog.log("highlight board card", t, i.rankCards, e), this.boardCardsHighlight = e;
                                                                for (let e in this.seatedPlayers) {
                                                                    let t = this.seatedPlayers[e];
                                                                    if (t.seatNum == i.seatNum) {
                                                                        this.node.winnerCombinationText.string = I.getCardType(t.rank), K.appConfig.getGameConfig().enableShowHandRankMTT || (this.node.winnerCombinationText.string = ""), this.node.showWinnerCombination(!0);
                                                                        break
                                                                    }
                                                                }