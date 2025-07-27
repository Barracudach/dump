import * as e from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as s from "./index.mjs_cjs=&original=.js";
import * as r from "./MVCController.js";
import * as d from "./MVCModel.js";
import * as g from "./MTTDetailInfoLandscapeView.js";
import * as u from "./MTTDetailInfoLandscapeView.js";
import * as m from "./MTTDetailInfoLandscapeView.js";
import * as h from "./MTTDetailInfoLandscapeView.js";
import * as c from "./Enum.js";
import * as p from "./FormatParser.js";
import * as S from "./MttItemHelper.js";
import * as T from "./Pb.js";
import * as _ from "./LobbyTypes.js";
import * as C from "./LobbyTypes.js";
import * as f from "./MttHall.js";
import * as I from "./Translator.js";
import * as D from "./MTTConnector.js";
import * as v from "./MttItemRenderHelper.js";
import * as E from "./ThemeSystem.js";
import * as U from "./DialogBox.js";
import * as L from "./MultipleRoomManager.js";
import * as M from "./MultipleRoomManager.js";
import * as P from "./MultipleGame.js";
import * as R from "./mttconfig.js";
import * as w from "./cv.js";
import * as y from "./MultiTableBarSelector.js";
import * as A from "./CommonTools.js";
import * as G from "./ImpokerHall.js";
import * as b from "./LobbyTools.js";
import * as B from "./mttController.js";
import * as N from "./NodePage.js";
import * as k from "./FullscreenController.js";
import * as O from "./aesHandler.js";
import * as F from "./aesHandler.js";
import * as H from "./CrashTracing.js";
import * as V from "./httpApis.js";
import * as x from "./UtilsPkw.js";
import * as J from "./UtilsPkw.js";
import * as q from "./DynamicPromoEnums.js";
import * as W from "./FakeMultipleGame.js";
import * as K from "./worldWebsocket.js";
import * as mod34 from "./HttpApiTournamentDetail.js";
import * as j from "./AndroidBackButton.js";
import * as z from "./MTTUnregisterController.js";

function main() {
    var Z;
    e._RF.push({}, "9919au+vbZNlbZNs2E+HK5f", "MTTDetailInfoLandscapeController", void 0);
    const {
        ccclass: Q,
        property: X
    } = l;
    class Y extends r {
        constructor(...t) {
            super(...t), this.tournamentData = void 0, this.tournamentDetail = void 0, this.detailInfo = void 0, this.data = void 0
        }
    }
    t("MTTDetailInfoLandscapeModel", Y);
    class tt {
        constructor() {
            this.leftDetailInfo = void 0, this.midDetailInfo = void 0, this.rightDetailInfo = void 0
        }
    }
    t("MTTDetailInfoLandscapeData", tt);
    t("MTTDetailInfoLandscapeController", Q("MTTDetailInfoLandscapeController")(Z = class extends s {
        constructor(t) {
            super(d, Y, t), this._hallScript = null, this.hallScene = void 0, this.windowController = null, this.signUpPopUpScript = void 0, this._isCallGameView = !1, this._alreadyStarted = !1, this._rebuyInterval = 15, this.unregisterController = null, this.isDestroyed = !1, this.scheduleRender = null
        }
        onInitializeBegin(t) {
            var e;
            this._hallScript = y.instance.getParentScene(n, null == (e = this.view.engineView) ? void 0 : e.node).getComponentInChildren(A), this.hallScene = n.getScene().getComponentInChildren("HallScene"), this.view.getWindowNode = this.getMttPopupParentNode.bind(this), this.view.onDisableAction = this.resetAll.bind(this), this.view.onClickedSignUp = this.onSignUpClicked.bind(this), this.view.onRefreshUI = this.onRefreshUI.bind(this)
        }
        onRefreshUI(t) {
            var e, n;
            (null == t || null == (e = t.Detail) ? void 0 : e.Id) == (null == (n = this.model.tournamentData) || null == (n = n.Detail) ? void 0 : n.Id) && (this.model.tournamentData = t, this.view.updateView(this.model), this.updateSignUpButton(), this.setMttSchedule())
        }
        onInitializeEnd(t) {}
        addWindowController(t) {
            this.windowController = t
        }
        getMttPopupParentNode() {
            var t;
            return null == (t = this.windowController) ? void 0 : t.getMttPopupsParent()
        }
        destroy() {
            this.view.getRender().unscheduleAllCallbacks(), this.resetAll(), this.resetTimer(), this.isDestroyed = !0
        }
        loadByDatas(t, e) {
            this.isDestroyed || (this.model.tournamentData = t, this.model.tournamentDetail = e, this.model.detailInfo = p.getMTTDetailInfoData(t, e), this.model.data = this.parseData(), this.view.updateView(this.model), this.updateSignUpButton(), this.setMttSchedule())
        }
        increaseCurLevel() {
            this.model.detailInfo.currentLevel++, this.model.detailInfo.currentBlindConfig = this.model.tournamentDetail.HoldemBlindsConfig[this.model.detailInfo.currentLevel - 1], this.model.detailInfo.nextBlindConfig = this.model.tournamentDetail.HoldemBlindsConfig[this.model.detailInfo.currentLevel], null != this.model.detailInfo.currentBlindConfig ? this.model.detailInfo.curBlind = p.getCurrentBlindLevel(this.model.detailInfo.currentBlindConfig, this.model.detailInfo.isShortDeck) : this.model.detailInfo.curBlind = "-/-/-", this.view.increaseCurLevel(), this.windowController.updateCurrentLevel(this.model.detailInfo.currentLevel), G.emitMessage(m.IncreaseBlindLevel, this.model.tournamentDetail)
        }
        parseData() {
            let t = new tt;
            const {
                myChips: e,
                smallestStack: n,
                largestStack: o,
                avgStack: i,
                nextBreakTime: a,
                currentLevel: l,
                startingChip: s,
                startingTime: r,
                estimatedDuration: d,
                buyIn: m,
                prizePool: u,
                firstPlacePrize: h,
                nextPlacePrize: g,
                playingPlayers: c,
                inTheMoney: T,
                myRank: C,
                guarantee: _,
                overlay: f,
                entries: I,
                minPlayers: D,
                maxPlayers: v,
                payoutDistribution: E
            } = this.model.detailInfo, U = p.isMultiFlightDay1(this.model.tournamentDetail);
            switch (this.model.detailInfo.status) {
                case S.commonProto.MTT_GAME_STATUS.NOT_STARTED:
                    t.leftDetailInfo = U ? {
                        guarantee: _,
                        overlay: f
                    } : {
                        guarantee: _,
                        overlay: f,
                        payoutDistribution: E
                    }, t.midDetailInfo = {
                        entries: I,
                        startingTime: r,
                        estimatedDuration: d
                    }, t.rightDetailInfo = {
                        startingChip: s,
                        minPlayers: D,
                        maxPlayers: v
                    };
                    break;
                case S.commonProto.MTT_GAME_STATUS.STARTED:
                case S.commonProto.MTT_GAME_STATUS.STARTED + 100:
                case S.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                case S.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
                    t.leftDetailInfo = U ? {
                        guarantee: _,
                        overlay: f
                    } : {
                        guarantee: _,
                        overlay: f,
                        payoutDistribution: E,
                        firstPlacePrize: h,
                        nextPlacePrize: g
                    }, t.midDetailInfo = {
                        currentLevel: l,
                        nextBreakTime: a,
                        playingPlayers: c,
                        inTheMoney: T,
                        myRank: C
                    }, t.rightDetailInfo = {
                        myChips: e,
                        smallestStack: n,
                        largestStack: o,
                        avgStack: i
                    }
            }
            return t
        }
        showCountDown(t) {
            this.model.detailInfo.myJoinStatus > 0 ? this.changeSignUpButtonStatus(C.BACK_TO_GAME) : (this.changeSignUpButtonStatus(C.SIGN_UP), this.setSignUpButtonLabel(!1)), this.view.getGameClockLabel().string = "", this.closeMttPopups(), 0 === t && (this.model.detailInfo.myJoinStatus > 0 ? this.callMttGameView() : p.checkForSignUpStop(this.model.tournamentDetail) && this.changeSignUpButtonStatus(C.SIGN_UP_STOP))
        }
        changeSignUpButtonStatus(t) {
            var e;
            switch (this.model.detailInfo.mttButtonStatus = t, t) {
                case C.SIGN_UP:
                    this.view.getSignUpButtonLabel().string = f("MTT_HALL.REG_STATUS.SIGN_UP"), this.setSignUpButtonLabel(!0);
                    break;
                case C.SIGN_UP_CANCEL:
                    this.view.getSignUpButtonLabel().string = f("MTT_HALL.REG_STATUS.UNREGISTER"), this.setSignUpButtonLabel(!0);
                    break;
                case C.SIGN_UP_STOP:
                    this.view.getSignUpButtonLabel().string = f("MTT_HALL.REG_STATUS.SIGN_UP"), this.setSignUpButtonLabel(!1);
                    break;
                case C.BACK_TO_GAME:
                    this.view.getSignUpButtonLabel().string = f("MTT_HALL.REG_STATUS.BACK_TO_GAME"), this.setSignUpButtonLabel(!0);
                    break;
                case C.REVIVE:
                    this.view.getSignUpButtonLabel().string = f("MTT_HALL.REG_STATUS.REVIVE"), this.setSignUpButtonLabel(!0);
                    break;
                case C.OUT:
                    this.view.getSignUpButtonLabel().string = f("MTT_HALL.REG_STATUS.OUT"), this.setSignUpButtonLabel(!1);
                    break;
                case C.END:
                    this.view.getSignUpButtonLabel().string = f("GAME_LIST.TOURNAMENT_STATUS_END"), this.setSignUpButtonLabel(!1);
                    break;
                case C.SIGN_UP_NOT_START:
                    this.view.getSignUpButtonLabel().string = f("GAME_LIST.TOURNAMENT_STATUS_NOT_START"), this.setSignUpButtonLabel(!1);
                    break;
                case C.RESET:
                    this.view.getSignUpButtonLabel().string = "", this.setSignUpButtonLabel(!1);
                    break;
                case C.REGISTERING:
                    this.view.getSignUpButtonLabel().string = f("MTT_HALL.REG_STATUS.REGISTERING"), this.setSignUpButtonLabel(!1);
                    break;
                case C.CANCELLING_REGISTER:
                    this.view.getSignUpButtonLabel().string = f("MTT_HALL.REG_STATUS.CANCELLING_REGISTER"), this.setSignUpButtonLabel(!1);
                    break;
                case C.AUTO_FEED:
                    this.view.getSignUpButtonLabel().string = f("GAME_LIST.TOURNAMENT_STATUS_AUTO_FEED"), this.setSignUpButtonLabel(!1)
            }
            this.updateRoomStatus(this.model.tournamentDetail), I.instance.cv.MessageCenter.send("onUpdateStatusRoomMtt", {
                tourId: null == (e = this.model.tournamentData.Detail) ? void 0 : e.Id
            })
        }
        updateRoomStatus(t) {
            const e = p.isRegistered(t),
                n = p.isPaused(t);
            let [o, i, a] = p.getMttRoomStatusI18n(t);
            o = p.getOverriddenI18nStatusKey(o, n, e), this.model.detailInfo.roomStatus = f(o), this.model.detailInfo.isRegistered = e, this.model.detailInfo.isPaused = n, this.model.detailInfo.regStatus = a, this.model.detailInfo.inMiddlePause = !n && t.PauseStatus, this.view.updatRoomStatus()
        }
        setSignUpButtonLabel(t) {
            this.view.getSignUpButton().interactable = t, this.setSignUpButtonColor(t ? this.model.detailInfo.mttButtonStatus == C.SIGN_UP_CANCEL ? 3 : 1 : 2)
        }
        setSignUpButtonColor(t) {
            if (!this.view.isActive() || !this.view.getSignUpButton().node.active) return;
            const e = [this.view.getSignUpButton().target.getComponent(v), this.view.getSignUpButtonLabel().getComponent(v)];
            D.applySignUpColor(t, e)
        }
        closeMttPopups() {
            if (this.windowController.getMttPopupsParent().children.length > 0)
                for (let t of this.windowController.getMttPopupsParent().children) {
                    let e = t.getComponent(E);
                    e && e.hide()
                }
            this.closeSignUpPopup()
        }
        closeSignUpPopup() {
            this.signUpPopUpScript && (o(this.signUpPopUpScript.node) ? this.signUpPopUpScript.onCancelClicked() : this.signUpPopUpScript = null)
        }
        callMttGameView(t = 0, e = 0) {
            let n = cc_mtt.vv.DataManager.getNow();
            cc_mtt.vv.ConsoleLog.log("callMttGameView", n, this.model.detailInfo.startingTime);
            let o = n.getTime();
            if (this.model.detailInfo.startingTime && o > this.model.detailInfo.startingTime.getTime() - 6e4) try {
                const n = n => {
                    if (n) {
                        if (U.instance) {
                            let t = new S.commonProto.MttTournament;
                            t.Detail = new S.modelProto.MttTournament, t.Detail.Id = this.model.tournamentDetail.TournamentId, t.Detail.GameMode = this.model.tournamentDetail.GameMode;
                            let e = {
                                type: L.HOLDEM,
                                data: t,
                                gameMode: this.model.tournamentDetail.GameMode,
                                gameListId: P.GAME_LEVEL_LIST_ID.MTT,
                                index: 0,
                                isWatching: !1
                            };
                            U.instance.selectedRoomInfo = e
                        }
                        this._hallScript.callGameView(this.model.tournamentDetail.GameMode, P.GAME_LEVEL_LIST_ID.MTT, this.model.tournamentDetail.TournamentId, t, e, !1, this.model.tournamentDetail.PlayOnJoint, this.model.tournamentDetail.TournamentId, u.LobbyMttHallDetailAutoLaunch), this._isCallGameView = !0
                    } else this._hallScript.hidLoading(null, !1)
                };
                if (R.appConfig.getGameConfig().enableMultiTableBar && !R.appConfig.isWebApp && w.checkAndShow(!1, n)) return;
                n(!0)
            } catch (t) {
                cc_mtt.vv.ConsoleLog.log("callMttGameView fail: ", JSON.stringify(t)), this._hallScript.hidLoading()
            } else cc_mtt.vv.ConsoleLog.log("callMttGameView game not start")
        }
        onSignUpClicked() {
            if (R.dataHandler.getUserData().showWebAppTouristPopup()) return;
            var t;
            if (R.dataHandler.getUserData().showTouristLimited()) return void(R.authenticator.autoShowBuyInMTTById = null == (t = this.model.tournamentDetail) ? void 0 : t.TournamentId);
            if (R.dataHandler.getUserData().showNDRPVerificationReviewPopup()) return;
            const e = this.model.tournamentDetail.Status == S.commonProto.MTT_GAME_STATUS.NOT_STARTED;
            if (R.appConfig.isWebApp && !e) {
                const t = R.appConfig.getGameConfig().gameTablesConcurrent.maxConcurrent,
                    e = R.getTotalOpeningGames();
                if (!b.selfTours.getPlayingTournaments().some((t => t.TournamentId == this.model.tournamentDetail.TournamentId)) && e >= t) {
                    let e = R.config.getStringData("Max_playing_table_warning_title"),
                        n = R.StringTools.formatC(R.config.getStringData("Max_concurrent_game_tables_mtt_web"), t),
                        o = R.Enum.PopUpIconType.PhoneWarning;
                    return void R.popUp.showMsg({
                        subtitle: e,
                        txt: n,
                        iconType: o
                    })
                }
            }
            this.getStage2RegCheckingInProgressStatus() || (this.hallScene && !this.hallScene.isStage2RegistrationDone() ? (this.setStage2RegCheckingInProgressStatus(!0), this.hallScene.checkStage2Registration()) : this.OnStage2RegitrationComplete())
        }
        setStage2RegCheckingInProgressStatus(t) {
            var e;
            null != (e = this.model) && e.detailInfo && (this.model.detailInfo.isStage2RegCheckingInProgress = t)
        }
        getStage2RegCheckingInProgressStatus() {
            var t;
            return null == (t = this.model) || null == (t = t.detailInfo) ? void 0 : t.isStage2RegCheckingInProgress
        }
        OnStage2RegitrationComplete() {
            if (M.instance || B.coolDownButton(this.view.getSignUpButton(), this.hallScene), this.model.detailInfo.mttButtonStatus === C.SIGN_UP_CANCEL || N.getInstance().isAbleToJoinRoom()) {
                switch (this.model.detailInfo.mttButtonStatus) {
                    case C.SIGN_UP: {
                        var t;
                        let e, n = t => {
                                e = t.string, R.worldNet.JoinRoomAccessCheck_Request(0, 0, o)
                            },
                            o = () => {
                                this.callSignUpPopUp(e, !1)
                            };
                        null != (t = this.model.tournamentDetail) && t.isPrivate ? R.popUp.showMsg({
                            title: R.config.getStringData("Tournament_Enter_password_text"),
                            txt: R.config.getStringData("Tournament_Enter_password_Info"),
                            needPasswordField: !0,
                            isTwoBtn: !0,
                            iconType: h.Password,
                            sureCallback: n.bind(this),
                            cancelCallback: null,
                            msgType: R.Enum.ToastType.ToastTypeSuccess,
                            sureButtonType: g.PopupConfirmBtn
                        }) : R.worldNet.JoinRoomAccessCheck_Request(0, 0, o)
                    }
                    break;
                    case C.REVIVE: {
                        let t = () => {
                            this.callSignUpPopUp(null, !0)
                        };
                        R.worldNet.JoinRoomAccessCheck_Request(0, 0, t)
                    }
                    break;
                    case C.BACK_TO_GAME:
                        this.callMttGameView();
                        break;
                    case C.SIGN_UP_CANCEL:
                        this.handleSignUpCancel()
                }
                this.setStage2RegCheckingInProgressStatus(!1)
            }
        }
        addSignUpLoading() {
            if (o(this._hallScript) && o(this._hallScript.loadingBlockerScript)) {
                const t = R.appConfig.isLandscapeLayout ? null : this.windowController.getMttPopupsParent();
                this._hallScript.loadingBlockerScript.show("MTTSignUpLoading", t)
            }
        }
        callSignUpPopUp(t = null, e = !1) {
            this.model.detailInfo._popupIsCalled || (this.model.detailInfo._popupIsCalled = !0, this.addSignUpLoading(), cc_mtt.vv.DataManager.updateToolList((() => {
                var n;
                if (!this.model.tournamentDetail || !this.engineView) return;
                let o;
                switch (this.model.detailInfo.mttButtonStatus) {
                    case C.REVIVE:
                        o = null != (n = this.model.detailInfo.rebuyParam) && n.defineParam ? this.model.detailInfo.rebuyParam.regFee + this.model.detailInfo.rebuyParam.srvFee : this.model.tournamentDetail.RegFee + this.model.tournamentDetail.SrvFee;
                        break;
                    default:
                        o = this.model.tournamentDetail.RegFee + this.model.tournamentDetail.SrvFee
                }
                o = c.DisplayGold(o);
                let i = f("POPUP_TITLE.JOIN_TOURNAMENT"),
                    a = p.getSignUpPropertyByDetail(i, this.model.tournamentDetail, e, this.model.detailInfo);
                if (a.toolOption && !a.goldOption && a.tools.length < 1) {
                    var l;
                    cc_mtt.vv.DataManager.userId, null == (l = this.model.tournamentDetail) || l.TournamentId, a.tools, I.instance.getPlatform();
                    const t = "POPUP_HINTS.NO_TOOL",
                        e = "REGISTER.UNABLE_REGISTER";
                    this.showPopup(t, void 0, e), this.model.detailInfo._popupIsCalled = !1, this.removeSignUpLoading()
                } else this.createSignUpPopUp(a, e, t)
            })))
        }
        showPopup(t, e, n) {
            var o;
            null == (o = this.windowController) || o.showDialog(n, t, e)
        }
        removeSignUpLoading(t, e = !1) {
            o(this._hallScript) && o(this._hallScript.loadingBlockerScript) && this._hallScript.loadingBlockerScript.hide("MTTSignUpLoading"), t && t()
        }
        createSignUpPopUp(t, e = !1, n = null) {
            this.removeSignUpLoading();
            let o = {
                signUpBoxProperty: t,
                hallMttDetailData: this.model.detailInfo,
                tournamentId: this.model.tournamentDetail.TournamentId,
                tournamentName: cc_mtt.vv.DataManager.i18DataFromServer(this.model.tournamentDetail.TournamentName, this.model.tournamentDetail.TournamentNameI18N),
                isRevive: e,
                regStatus: this.model.detailInfo.regStatus,
                password: n,
                startingCoin: this.model.tournamentDetail.StartingCoins,
                regFrom: T.MTT_DETAIL_WINDOW
            };
            this.windowController.buyInController.show(o, (() => {
                this.model.detailInfo._popupIsCalled = !1
            }))
        }
        handleSignUp(t, e) {
            var n, o;
            if (!this.model.tournamentDetail) return;
            let a = (n = "") => {
                n && this.handleSignUp(t, e)
            };
            var l;
            if (null != (n = R.geoComplyManager) && n.isGeoTokenRequired()) return void(null == (l = R.geoComplyManager) || l.requestValidToken(a, (() => {})));
            if (null != (o = R.geoComplyManager) && o.checkForLocationServices(a)) return;
            this.addSignUpLoading(), this.changeSignUpButtonStatus(C.REGISTERING);
            let s = R.appConfig.canRegisterMore(),
                r = {
                    UserId: cc_mtt.vv.DataManager.userId,
                    TournamentId: this.model.tournamentDetail.TournamentId,
                    TicketId: t ? t.Id : 0,
                    PlatForm: I.instance.getPlatform(),
                    isDesktop: s,
                    PrivateMttToken: k.EncryptStringCBC(e).toString(),
                    GeoComplianceToken: "",
                    RegGoldType: 0
                };
            var d;
            R.appConfig.getSecurityConfig().useGeoComply && (r.GeoComplianceToken = null == (d = R.geoComplyManager) ? void 0 : d.getGeoToken());
            cc_mtt.vv.ConsoleLog.log("mtt sign up"), O.hasInstance() && O.getInstance().addEventToSpan(F.BuyIn, "requestMttPlayerSignUp", {
                inputData: JSON.stringify(r),
                tournamentId: r.TournamentId
            }), H.requestMttPlayerSignUp(r, (n => {
                if (O.hasInstance() && O.getInstance().addEventToSpan(F.BuyIn, "finish", {
                        responseData: JSON.stringify(n)
                    }), n && n.ErrorCode) {
                    O.hasInstance() && O.getInstance().endSpan(F.BuyIn, "buyin-error"), n.ErrorCode == S.commonProto.ErrorCode.Mtt_Player_Already_SignUp && this.model.tournamentDetail.Status == S.commonProto.MTT_GAME_STATUS.NOT_STARTED && (p.addJoinedTournaments(r.TournamentId, {}), this.updateSignUpButton());
                    let o = f("ERROR_CODE_PKW." + V.getFullErrorCode(n));
                    switch (n.ErrorCode) {
                        case S.commonProto.ErrorCode.Mtt_Tournament_Max_Limit_Join:
                            o = i.formatStr(o, R.appConfig.getGameConfig().gameTablesConcurrent.mtt);
                            break;
                        case S.commonProto.ErrorCode.Mtt_Tournament_Not_Allow_Signup_Now:
                            const {
                                hour: t, min: e, sec: a
                            } = y.instance.splitSecond(n.LastSeconds, {
                                hasDay: !1,
                                hasHour: !0
                            }), [l, s] = c.addStartPadding([t, e], 2, "0");
                            o = i.formatStr(o, `${l}:${s}`);
                            const r = cc_mtt.vv.DataManager.getNow();
                            r.setHours(r.getHours() + t, r.getMinutes() + e + this.model.tournamentDetail.AllowSignupHours, r.getSeconds() + a), cc_mtt.vv.ConsoleLog.log("update starting time", this.model.detailInfo.startingTime, "to", r), this.model.detailInfo.startingTime = r, this.model.tournamentDetail.StartingTime = r
                    }
                    this.removeSignUpLoading((() => {
                        const i = R.Enum.ThirdPartyErrorCode.MttErrorNotEnoughMoney;
                        if (n.ErrorCode == S.commonProto.ErrorCode.Platform_Response_Error && n.ExternalErrorCode && n.ExternalErrorCode.includes(i)) R.showOutOfFundsPopup(o, null, null, R.SHOP.RechargeClick);
                        else if (n.ErrorCode == S.commonProto.ErrorCode.Mtt_GeoComplianceToken_Check_Fail) {
                            var a;
                            let o = z.Buffer.from(n.GeoComplianceRes).toString("utf8");
                            o = R.tryParseJSON(o) || {}, null == (a = R.geoComplyManager) || a.serverErrorHandler(o, null, this.handleSignUp.bind(this, t, e), null, {
                                ErrorType: "MttSignUpFailed",
                                ErrorCode: n.ErrorCode.toString(),
                                ErrorDetails: JSON.stringify(o)
                            })
                        } else {
                            const t = () => {
                                R.appConfig.getGeneralConfig().multiWindowEnabled && R.authenticator.showDelayedPromo()
                            };
                            R.popUp.showMsg({
                                txt: o,
                                sureCallback: t,
                                cancelCallback: t
                            })
                        }
                        this.changeSignUpButtonStatus(C.SIGN_UP)
                    }))
                } else if (n) {
                    O.hasInstance() && O.getInstance().endSpan(F.BuyIn, "buyin-success"), p.addJoinedTournaments(this.model.tournamentDetail.TournamentId, {});
                    let t = cc_mtt.vv.DataManager.getNow();
                    const e = this.model.detailInfo.startingTime && t.getTime() < this.model.detailInfo.startingTime.getTime();
                    R.dynamicPromoController.incrementPopupTrigger(J.LobbyPopup, x.TournamentBuyIn), (e || R.appConfig.getGeneralConfig().multiWindowEnabled) && (R.authenticator.delayShowPromoPopup ? R.authenticator.showDelayedPromo() : R.dynamicPromoController.showPromoPopup(J.LobbyPopup, x.TournamentBuyIn)), e ? (this.removeSignUpLoading((() => {
                        this.changeSignUpButtonStatus(C.SIGN_UP_CANCEL)
                    })), this.model.detailInfo._timeUpdate3 = this.model.detailInfo._updateDataInterval - 4, this.model.tournamentDetail.SignupCount++) : this.removeSignUpLoading((() => {
                        this.changeSignUpButtonStatus(C.BACK_TO_GAME), this.model.tournamentDetail && this.model.tournamentDetail.Status > S.commonProto.MTT_GAME_STATUS.NOT_STARTED && this.callMttGameView()
                    })), this.view.getRender().scheduleOnce(this.requestLobbyListAndData.bind(this), 2)
                } else O.hasInstance() && (O.getInstance().endSpan(F.BuyIn, "buyin-error-no-data"), this.changeSignUpButtonStatus(C.SIGN_UP));
                this.updateMyJoinStatus()
            }), (t => {
                this.removeSignUpLoading(), this.showPopup("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0)
            }))
        }
        handleGameEndOrCancel(t, e = 5) {
            var n, o;
            if (this.model.detailInfo.mttCancelOrEnd) return;
            q.instance && q.instance.removeMttRoom(null == (o = this.model.tournamentDetail) ? void 0 : o.TournamentId);
            this.model.detailInfo.mttCancelOrEnd = !0, this.model.tournamentDetail.Status = S.commonProto.MTT_GAME_STATUS.ENDED, this.view.getSignUpButton().interactable && this.setSignUpButtonLabel(!1);
            let a = "ERROR_CODE_PKW." + t,
                l = "ERROR_CODE_PKW.TITLE",
                s = (null == (n = this.model.tournamentDetail) ? void 0 : n.TournamentName) ?? "";
            31004 == t && (a = {
                Translation: a,
                payload: t => i.formatStr(f(t), s)
            }, l = "ERROR_CODE_PKW.TITLE_TOURNAMENT_CANCEL"), t == S.commonProto.ErrorCode.Mtt_Tournament_Canceled ? (this.view.getGameClockLabel().string = f("MTT_HALL.GAME_TIMER.GAME_CANCEL"), this.changeSignUpButtonStatus(C.RESET)) : t == S.commonProto.ErrorCode.Mtt_Tournament_Ended && (this.view.getGameClockLabel().string = f("MTT_HALL.GAME_TIMER.GAME_OVER"), this.changeSignUpButtonStatus(C.END)), this.closePopUps(), t == S.commonProto.ErrorCode.Mtt_Tournament_Ended && R.appConfig.getLobbyConfig().mtt.disableTournamentEndedPopup ? this.onReturnClicked() : this._hallScript.callPopUpBox(a, (() => {
                this.onReturnClicked()
            }), l)
        }
        onReturnClicked() {
            o(this.view.getRender().node) && this.model.detailInfo._showing && (a.isNative && a.os === a.OS.ANDROID && $.getInstance().removeBackFunction("MttHall"), this.windowController.destroy())
        }
        closePopUps() {
            if (this.closeMttPopups(), !W.checkNetwork("mttHall") && this._hallScript && this._hallScript.layers[7].children.length > 0) {
                for (let t of this._hallScript.layers[7].children) {
                    let e = t.getComponent(E);
                    e && e.hide()
                }
                cc_mtt.vv.DataManager.popUps = []
            }
        }
        requestDataToUpdate(t = _.ALL, e = null) {
            var n;
            if (null == this.model.detailInfo || null == this.model.tournamentData || null == this.model.tournamentDetail) return;
            this.model.detailInfo._timeUpdate3 = 0;
            let i = this.model.tournamentDetail.TournamentId,
                a = e => {
                    if (e)
                        if (e.ErrorCode)
                            if (e.ErrorCode == S.commonProto.ErrorCode.Mtt_Tournament_Ended || e.ErrorCode == S.commonProto.ErrorCode.Mtt_Tournament_Canceled || e.ErrorCode == S.commonProto.ErrorCode.Mtt_Tournament_Release) {
                                let t = e.ErrorCode;
                                this.handleGameEndOrCancel(t)
                            } else e.ErrorCode == S.commonProto.ErrorCode.Mtt_Tournament_No_Update && cc_mtt.vv.ConsoleLog.log("mtt hall no need update", t);
                    else this.windowController.loadByDatas(this.model.tournamentData, e.TournamentDetail), I.instance.cv.MessageCenter.send("syncMttItemFromMttDetail", this.model.tournamentData.Detail), e.TournamentDetail && cc_mtt.vv.ConsoleLog.log(`${this.model.tournamentDetail.TournamentName} (${this.model.tournamentDetail.TournamentId}, requestDataToUpdate): ${this.model.detailInfo.myJoinStatus}_${this.model.tournamentDetail.Status}_${e.TournamentDetail.CurrentLevel}_${e.TournamentDetail.LeftRiseBlindTime}_${e.TournamentDetail.PauseStatus}`);
                    else cc_mtt.vv.ConsoleLog.log(`${this.model.tournamentDetail.TournamentName} (${this.model.tournamentDetail.TournamentId}, requestDataToUpdate): empty`)
                };
            var l, s;
            null != e && i == (null == (n = e.TournamentDetail) ? void 0 : n.TournamentId) ? (cc_mtt.vv.ConsoleLog.log("include mtt detail data, no need to request", null == (l = e.TournamentDetail) ? void 0 : l.TournamentId, i), a(e)) : (o(e) && cc_mtt.vv.ConsoleLog.log("dont have mtt detail data, need to request", null == (s = e.TournamentDetail) ? void 0 : s.TournamentId, i), K.requestMttTournamentDetail(i, (t => {
                a(t), R.MessageCenter.send(R.Enum.MessageCenterAction.onMttDetailUpdate, t)
            }), (t => {}), 1e3 * this.model.detailInfo._updateDataInterval, {
                page: t
            }))
        }
        requestLobbyListAndData() {
            this.requestDataToUpdate(), R.MessageCenter.send(R.Enum.MessageCenterAction.RequestMttLobbyLevelList)
        }
        showSignUpButton(t) {
            this.view.getSignUpButton().node.active = t
        }
        updateSignUpButton() {
            const {
                DataManager: t
            } = cc_mtt.vv;
            let e = t.getNow();
            this.updateMyJoinStatus();
            let n = Math.floor((e.getTime() - this.model.detailInfo.startingTime.getTime()) / 1e3);
            this.showSignUpButton(0 === this.model.detailInfo.multiFlightLevel || n >= -60), p.checkIsSignUpNotStart(this.model.detailInfo.startingTime, this.model.tournamentDetail) ? this.changeSignUpButtonStatus(C.SIGN_UP_NOT_START) : p.checkIsEnd(this.model.tournamentDetail) ? this.changeSignUpButtonStatus(C.END) : n > 0 ? this.model.detailInfo.myJoinStatus > 0 ? this.changeSignUpButtonStatus(C.BACK_TO_GAME) : this.model.detailInfo.myJoinStatus < 0 ? p.checkForSignUpStop(this.model.tournamentDetail) && !p.isDetailRebuyState(this.model.tournamentDetail) || p.checkForOverOutLimit(this.model.detailInfo.myJoinStatus, this.model.tournamentDetail) ? this.changeSignUpButtonStatus(C.OUT) : this.changeSignUpButtonStatus(C.REVIVE) : p.checkForSignUpStop(this.model.tournamentDetail) ? this.changeSignUpButtonStatus(C.SIGN_UP_STOP) : this.changeSignUpButtonStatus(C.SIGN_UP) : (-60 != n && 0 != n || this.requestDataToUpdate(), -60 === n ? !this._isCallGameView && this.model.detailInfo.myJoinStatus > 0 && this.callMttGameView() : n > -60 && p.checkStartGameRequirementIsOk(this.model.tournamentDetail) ? (this.showCountDown(n), n < 0 && this.model.detailInfo.myJoinStatus > 0 && !this._alreadyStarted && (this._alreadyStarted = !0, o(q.instance) && q.instance.requestMultiTableByTournamentID_MTT(this.model.tournamentDetail.TournamentId, (t => {
                t || (this._alreadyStarted = !1)
            })))) : (this.setSignUpButtonLabel(!0), this.changeSignUpButtonStatus(this.model.detailInfo.isAutoFeed ? C.AUTO_FEED : this.model.detailInfo.myJoinStatus > 0 ? C.SIGN_UP_CANCEL : C.SIGN_UP)))
        }
        handleSignUpCancel() {
            this.showUnregisterPopup((() => {
                if (!this.model.tournamentDetail) return;
                this.addSignUpLoading();
                let t = {
                    UserId: cc_mtt.vv.DataManager.userId,
                    TournamentId: this.model.tournamentDetail.TournamentId
                };
                cc_mtt.vv.ConsoleLog.log("mtt sign up cancel"), this.changeSignUpButtonStatus(C.CANCELLING_REGISTER), H.requestMttPlayerSignUpCancel(t, (e => {
                    if (this.removeSignUpLoading(), e.ErrorCode) {
                        cc_mtt.vv.ConsoleLog.log("handleSignUpCancel err:", e.ErrorCode);
                        let t = "";
                        t = e.ErrorCode === S.commonProto.ErrorCode.Mtt_Tournament_Started ? "POPUP_HINTS.MTT_HALL.CANCEL_FAIL_GAME_STARTED" : e.ErrorCode === S.commonProto.ErrorCode.User_Operate_Frequent || e.ErrorCode === S.commonProto.ErrorCode.Mtt_AutoFeed_NotAllowCancel ? "ERROR_CODE_PKW." + V.getFullErrorCode(e) : {
                            Translation: "POPUP_HINTS.MTT_HALL.SIGN_UP_CANCEL_FAIL",
                            payload: t => f(t).replace("${errorCode}", V.getFullErrorCode(e))
                        }, this.showPopup(t, void 0), this.changeSignUpButtonStatus(C.SIGN_UP_CANCEL)
                    } else p.removeJoinedTournaments(t.TournamentId), this.updateSignUpButton(), this.model.detailInfo._timeUpdate3 = this.model.detailInfo._updateDataInterval - 4, this.model.tournamentDetail.SignupCount--, 0 == this.model.tournamentDetail.SignupCount && (this.model.tournamentDetail.GamePot = 0), this.view.getRender().scheduleOnce(this.requestLobbyListAndData.bind(this), 2)
                }), (t => {
                    var e;
                    this.removeSignUpLoading(), null == (e = this._hallScript) || e.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0), this.changeSignUpButtonStatus(C.SIGN_UP_CANCEL)
                }))
            }), (() => {}))
        }
        showUnregisterPopup(t, e) {
            this.unregisterController = new j(this.view.getUnregisterPopup()), this.unregisterController.init(), this.unregisterController.show(this.model.tournamentDetail.TournamentId, (() => {
                t && t(), this.unregisterController.hide()
            }), e)
        }
        handleRevive(t) {
            var e, n;
            let o = (e = "") => {
                e && this.handleRevive(t)
            };
            var a;
            if (null != (e = R.geoComplyManager) && e.isGeoTokenRequired()) return void(null == (a = R.geoComplyManager) || a.requestValidToken(o, (() => {})));
            if (null != (n = R.geoComplyManager) && n.checkForLocationServices(o)) return;
            this.addSignUpLoading();
            let l = {
                UserId: cc_mtt.vv.DataManager.userId,
                TournamentId: this.model.tournamentDetail.TournamentId,
                TicketId: t ? t.Id : 0,
                PlatForm: I.instance.getPlatform(),
                isDesktop: R.appConfig.canRegisterMore(!0),
                GeoComplianceToken: "",
                RegGoldType: 0
            };
            var s;
            R.appConfig.getSecurityConfig().useGeoComply && (l.GeoComplianceToken = null == (s = R.geoComplyManager) ? void 0 : s.getGeoToken());
            cc_mtt.vv.ConsoleLog.log("mtt reenter"), H.requestMttReenter(l, (e => {
                if (e && e.ErrorCode) {
                    cc_mtt.vv.ConsoleLog.log("handleRevive err:", e.ErrorCode);
                    let o = "ERROR_CODE_PKW." + V.getFullErrorCode(e);
                    if (e.ErrorCode == S.commonProto.ErrorCode.Mtt_Tournament_Max_Limit_Join && (o = {
                            Translation: o,
                            payload: t => i.formatStr(f(t), R.appConfig.getGameConfig().gameTablesConcurrent.mtt)
                        }), e.ErrorCode == S.commonProto.ErrorCode.Mtt_GeoComplianceToken_Check_Fail) {
                        var n;
                        let o = z.Buffer.from(e.GeoComplianceRes).toString("utf8");
                        o = R.tryParseJSON(o) || {}, null == (n = R.geoComplyManager) || n.serverErrorHandler(o, null, this.handleRevive.bind(this, t), null, {
                            ErrorType: "MttReEnterFailed",
                            ErrorCode: e.ErrorCode.toString(),
                            ErrorDetails: JSON.stringify(o)
                        })
                    } else this.showPopup(o, void 0);
                    this.removeSignUpLoading()
                } else this.updateMyJoinStatus(), this.removeSignUpLoading(), this.changeSignUpButtonStatus(C.BACK_TO_GAME), this.model.tournamentDetail.Status > S.commonProto.MTT_GAME_STATUS.NOT_STARTED && this.callMttGameView()
            }), (t => {
                this.removeSignUpLoading(), this.showPopup("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0)
            }))
        }
        updateMyJoinStatus() {
            this.model.detailInfo.myJoinStatus = p.getMyJoinStatus(this.model.tournamentDetail), this.model.detailInfo.isAutoFeed = p.getIsAutoFeed(this.model.tournamentDetail), this.model.detailInfo.rebuyFlag = p.getRebuyFlag(this.model.tournamentDetail)
        }
        updateTimeDifference() {
            this.model.detailInfo._timeDifference = Math.floor((cc_mtt.vv.DataManager.getNow().getTime() - this.model.detailInfo.startingTime.getTime()) / 1e3)
        }
        schedulerAction() {
            this.view.setNextBreakTime()
        }
        resetTimer() {
            var t;
            null != (t = this.model) && t.detailInfo && (this.model.detailInfo._timeUpdate = 0, this.model.detailInfo._timeUpdate2 = 0, this.model.detailInfo._timeUpdate3 = 1)
        }
        resetAll() {
            null !== this.scheduleRender && (clearInterval(this.scheduleRender), this.scheduleRender = null)
        }
        setMttSchedule() {
            this.isDestroyed || (this.resetTimer(), null !== this.scheduleRender && (clearInterval(this.scheduleRender), this.scheduleRender = null), this.setMttScheduleAction(), this.scheduleRender = setInterval((() => {
                this.setMttScheduleAction()
            }), 1e3))
        }
        setMttScheduleAction() {
            let t = Math.floor(this.model.detailInfo._timeDifference);
            this.updateTimeDifference(), -60 != t && 0 != t || this.requestDataToUpdate(), this.updateGameClock(this.model.detailInfo._timeDifference), this.schedulerAction()
        }
        updateGameClock(t) {
            if (!this.model.tournamentDetail) return;
            const e = this.view.getGameClockLabel();
            if (o(e))
                if (p.checkIsSignUpNotStart(this.model.detailInfo.startingTime, this.model.tournamentDetail)) this.view.getGameClockLabel().string = "00:00";
                else if (p.checkIsEnd(this.model.tournamentDetail)) this.view.getGameClockLabel().string = "00:00";
            else if (p.checkHasTournamentStartTime(this.model.tournamentDetail))
                if (t <= 0) t = Math.abs(t), this.view.getGameClockLabel().string = "00:00", 0 == Math.floor(t) && (this.model.tournamentDetail.LeftRiseBlindTime = this.model.tournamentDetail.LevelTime - 1, this.increaseCurLevel());
                else if (this.model.tournamentDetail.BlindHands > 0) this.view.getGameClockLabel().string = "00:00";
            else {
                const e = this.model.detailInfo.blindConfig.length,
                    n = this.model.tournamentDetail.PauseStatus || this.model.tournamentDetail.Status > 100,
                    o = this.model.tournamentDetail.timeStampLateReg && !n ? p.timeStampToTimeLeftSec(this.model.tournamentDetail.timeStampLateReg) : this.model.tournamentDetail.TimeLeftSec;
                if (this.model.tournamentDetail.CurrentLevel >= e || this.model.tournamentDetail.BlindLevelPause && this.model.tournamentDetail.CurrentLevel >= this.model.tournamentDetail.BlindLevelPause) this.view.getGameClockLabel().string = "00:00";
                else if (this.model.tournamentDetail.Status == S.commonProto.MTT_GAME_STATUS.STARTED && (this.model.tournamentDetail.CurrentLevel >= this.model.tournamentDetail.LevelStopSignup || o <= 0 && o >= -this._rebuyInterval)) this.view.getGameClockLabel().string = "00:00";
                else if (n) this.view.getGameClockLabel().string = p.handleTimeLabel(this.model.tournamentDetail.LeftRiseBlindTime).join(":");
                else if (0 === this.model.tournamentDetail.LeftRiseBlindTime) {
                    let n = this.model.tournamentDetail.CurrentLevel > parseInt(this.view.getCurLevelLabel().string);
                    t > 20 && !n && (this.view.getGameClockLabel().string = f("TOURNAMENT_DETAIL.LEVEL") + " " + (this.model.tournamentDetail.CurrentLevel + 1)), this.model.tournamentDetail.CurrentLevel + 1 >= e ? this.view.getGameClockLabel().string = "00:00" : (this.model.tournamentDetail.LeftRiseBlindTime = this.model.tournamentDetail.LevelTime, this.increaseCurLevel(), this.view.getGameClockLabel().string = p.handleTimeLabel(this.model.tournamentDetail.LeftRiseBlindTime--).join(":"))
                } else this.model.tournamentDetail.LeftRiseBlindTime < 0 && (this.model.tournamentDetail.LeftRiseBlindTime = this.model.tournamentDetail.LevelTime, this.increaseCurLevel()), this.view.getGameClockLabel().string = p.handleTimeLabel(this.model.tournamentDetail.LeftRiseBlindTime--).join(":")
            } else this.view.getGameClockLabel().string = "00:00"
        }
    }) || Z);
    e._RF.pop()
}