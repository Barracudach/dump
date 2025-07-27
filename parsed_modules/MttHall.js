import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as i from "./cc.js";
import * as I from "./cc.js";
import * as T from "./cc.js";
import * as L from "./httpApis.js";
import * as E from "./HttpApiTournamentDetail.js";
import * as P from "./ImpokerHall.js";
import * as b from "./Pb.js";
import * as M from "./Translator.js";
import * as A from "./MTTConnector.js";
import * as U from "./mttconfig.js";
import * as H from "./MttBlindPotTable.js";
import * as v from "./NestableScrollView_Outer_ts.js";
import * as R from "./NestableScrollView_Inner_ts.js";
import * as B from "./NodePage.js";
import * as N from "./worldWebsocket.js";
import * as y from "./SignUpWithToolPopUp.js";
import * as O from "./MttPrefab.js";
import * as D from "./MttHallTableOneScript.js";
import * as G from "./MttHallTableTwoScript.js";
import * as w from "./MttHallTableThreeScript.js";
import * as k from "./AndroidBackButton.js";
import * as F from "./FormatParser.js";
import * as J from "./UtilsPkw.js";
import * as V from "./MultipleGame.js";
import * as x from "./cv.js";
import * as Y from "./DesignSystemButtonBase.js";
import * as z from "./DesignSystemButtonBase.js";
import * as W from "./DesignSystemButtonBase.js";
import * as K from "./CommonTools.js";
import * as q from "./FakeMultipleGame.js";
import * as j from "./CrashTracing.js";
import * as Z from "./Enum.js";
import * as X from "./Enum.js";
import * as Q from "./aesHandler.js";
import * as tt from "./MultiTableBarSelector.js";
import * as et from "./GameListTuplePkw.js";
import * as nt from "./DynamicPromoEnums.js";
import * as at from "./DynamicPromoEnums.js";
import * as it from "./MttItemHelper.js";
import * as ot from "./DialogBox.js";
import * as lt from "./index.mjs_cjs=&original=.js";
import * as st from "./SignUpBoxProperty.js";

function main() {
    var rt, gt, ht, ut, mt, ct, pt, Tt, _t, dt, St, ft, It, Ct, Lt, Et, Pt, bt, Mt, At, Ut, Ht, vt, Rt, Bt, Nt, yt, Ot, Dt, Gt, wt, kt, Ft, Jt, Vt, xt, Wt, zt, Yt, Kt, qt, $t, jt, Xt, Zt, Qt, te, ee, ne, ae, ie, oe, le, se, re, ge, he, ue, me, ce, pe;
    a._RF.push({}, "cb9d3UsbrxMEqIAbJtlbpzA", "MttHall", void 0);
    const {
        ccclass: Te,
        property: _e
    } = g, de = t("MTT_BUTTON_STATUS", i({
        SIGN_UP: 0,
        SIGN_UP_CANCEL: 1,
        SIGN_UP_STOP: 2,
        BACK_TO_GAME: 3,
        REVIVE: 4,
        OUT: 5,
        END: 6,
        SIGN_UP_NOT_START: 7,
        REGISTERING: 8,
        CANCELLING_REGISTER: 9,
        AUTO_FEED: 10,
        RESET: 1e4,
        NA: -1
    }));
    let Se = t("MTT_HALL_PAGE", function(t) {
        return t[t.ALL = 0] = "ALL", t[t.LOBBY = 1] = "LOBBY", t[t.PLAYER = 2] = "PLAYER", t[t.REWARD = 3] = "REWARD", t[t.TABLE = 4] = "TABLE", t
    }({}));
    t("default", (rt = _e(o), gt = _e([l]), ht = _e(l), ut = _e(v), mt = _e([R]), ct = _e([s]), pt = _e(o), Tt = _e(r), _t = _e(r), dt = _e([r]), St = _e(r), ft = _e(r), It = _e([l]), Ct = _e([l]), Lt = _e(l), Et = _e(r), Pt = _e([r]), bt = _e([r]), Mt = _e([r]), At = _e(l), Ut = _e(l), Ht = _e([r]), vt = _e([r]), Rt = _e([r]), Bt = _e([r]), Nt = _e(s), yt = _e(l), Ot = _e(W), Te(((pe = class t extends h {
        constructor(...t) {
            super(...t), n(this, "backButton", wt, this), n(this, "subHeader", kt, this), n(this, "underline", Ft, this), n(this, "bodyPageView", Jt, this), n(this, "pageScrollViews", Vt, this), n(this, "pageTableTuples", xt, this), n(this, "signUpButton", Wt, this), n(this, "signUpButtonLabel", zt, this), n(this, "gameClockLabel", Yt, this), n(this, "page0Label", Kt, this), n(this, "mttBlindPotTableTitle", qt, this), n(this, "gameType", $t, this), n(this, "gameTags", jt, this), n(this, "page0TopBeforeStart", Xt, this), n(this, "counter", Zt, this), n(this, "counterLabel", Qt, this), n(this, "page0TopContent", te, this), n(this, "page0BeforeGameContent", ee, this), n(this, "page0StartGameContent", ne, this), n(this, "blockLayer", ae, this), n(this, "loader", ie, this), n(this, "page1Label", oe, this), n(this, "page1TableAttributes", le, this), n(this, "page2Label", se, this), n(this, "page3Label", re, this), n(this, "blindPotTablePrefab", ge, this), n(this, "mttPopupsParent", he, this), n(this, "pageActionSpeed", ue, this), n(this, "_mttHallInfo", me, this), n(this, "currencySwitcher", ce, this), this._timeUpdate = 0, this._timeUpdate2 = 0, this._timeUpdate3 = 1, this._blindPotTable = null, this._blindConfig = [], this._returnConfig = void 0, this._popupIsCalled = !1, this._hallScript = null, this.loadingAction = null, this.timeoutAction = null, this.myJoinStatus = 0, this.isAutoFeed = !1, this.rebuyFlag = 0, this.rebuyParam = null, this.mttButtonStatus = de.NA, this.mttCancelOrEnd = !1, this.signUpPopUpScript = null, this._timeDifference = 0, this._showing = !1, this._updatedPages = {}, this.mttPrefab = null, this.hallScene = null, this.isStage2RegCheckingInProgress = !1, this._updateDataInterval = 5, this._rebuyInterval = 15, this.gameDuration = 0, this._startingTime = null
        }
        get startingTime() {
            return u(this._startingTime) || (this._startingTime = this.getStartingTimeIsInFuture()), this._startingTime
        }
        set startingTime(t) {
            this._startingTime = t
        }
        onLoad() {
            t.instance = this, this.pageActionSpeed = cc_mtt.vv.DataManager.pageActionSpeed, this.setActive(x.appConfig.isLandscapeLayout), this._hallScript = K.instance.getParentScene(m, this.node).getComponentInChildren(P), this.loadingAction = c(this.node).by(.75, {
                rotation: new p(360)
            }).repeatForever(), V.instance && this.backButton, A.instance.cv.MessageCenter.register("updateHallJoinedTournaments", this.updateHallJoinedTournaments.bind(this), this.node), A.instance.cv.MessageCenter.register("hideMttHall", this.onReturnClicked.bind(this), this.node), x.MessageCenter.register("gameListTupleDataChanged", this.onGameListTupleDataChanged.bind(this), this.node), this.currencySwitcher && (this.currencySwitcher.node.active = !x.appConfig.isLandscapeLayout), x.MessageCenter.send(x.Enum.MessageCenterAction.onCreateMttHallInstance)
        }
        setActive(t) {
            this.node.active = t
        }
        onDestroy() {
            this.timeoutAction && clearTimeout(this.timeoutAction), A.instance.cv.MessageCenter.unregister("updateHallJoinedTournaments", this.node), A.instance.cv.MessageCenter.unregister("hideMttHall", this.node), x.MessageCenter.unregister("gameListTupleDataChanged", this.node)
        }
        isGamePlaying() {
            return this._mttHallInfo && it.isGamePlaying(this._mttHallInfo.Status)
        }
        updateHallJoinedTournaments() {
            this._mttHallInfo && this.node.active && (this.updateSignUpButton(), it.checkTableToUpdateJoinStatus(), this.requestDataToUpdate())
        }
        onEnable() {
            this._showing = !0
        }
        onDisable() {
            this.unscheduleAllCallbacks(), this._showing = !1
        }
        start() {
            this.bodyPageView.node.on(T.EventType.PAGE_TURNING, (() => {
                this.onChangedPage(this.bodyPageView.getCurrentPageIndex())
            })), this.bodyPageView.node.on(T.EventType.SCROLL_ENDED, (() => {
                this.onChangeSubHeader(this.bodyPageView.getCurrentPageIndex())
            })), this.handleMttPlayerTableEvent()
        }
        getStartingTimeIsInFuture() {
            return new Date(2100, 1, 1)
        }
        setMttPrefab(t) {
            this.mttPrefab = t
        }
        getMttHallPageByIdx(t = this.bodyPageView.getCurrentPageIndex()) {
            return (A.instance.isBL ? [Se.LOBBY, Se.REWARD, Se.PLAYER, Se.TABLE] : [Se.LOBBY, Se.PLAYER, Se.REWARD, Se.TABLE])[t]
        }
        requestDataToUpdate(t = this.getMttHallPageByIdx()) {
            if (this._timeUpdate3 = 0, N.checkNetwork("requestMttTournamentDetail") || null == this._mttHallInfo) return;
            let e = this._mttHallInfo.TournamentId;
            et.LastSelectedTournamentId > 0 && et.LastSelectedTournamentId != e ? e = et.LastSelectedTournamentId : (et.previousSelectedTournamentId = et.LastSelectedTournamentId, et.LastSelectedTournamentId = e), E.requestMttTournamentDetail(e, (t => {
                if (et.LastSelectedTournamentId == e && u(this.node) && this._showing && this._mttHallInfo && e == this._mttHallInfo.TournamentId)
                    if (e !== et.LastSelectedTournamentId || t && !t.ErrorCode && t.TournamentDetail || (et.LastSelectedTournamentId = et.PreviousSelectedTournamentId, this.setInfo(et.PreviousSelectedTournamentDetail)), t)
                        if (t.ErrorCode)
                            if (t.ErrorCode == b.commonProto.ErrorCode.Mtt_Tournament_Ended || t.ErrorCode == b.commonProto.ErrorCode.Mtt_Tournament_Canceled) {
                                cc_mtt.vv.ConsoleLog.log("mtt handleGameEndOrCancel");
                                let n = t.ErrorCode;
                                this.handleGameEndOrCancel(n), O.instance && O.instance.updateClosedTournaments(e)
                            } else t.ErrorCode == b.commonProto.ErrorCode.Mtt_Tournament_No_Update && cc_mtt.vv.ConsoleLog.log("mtt hall no need update");
                else this._mttHallInfo.timeStampLateReg && (t.timeStampLateReg = this._mttHallInfo.timeStampLateReg), et.PreviousSelectedTournamentDetail = t, this.setInfo(t), t.TournamentDetail && cc_mtt.vv.ConsoleLog.log(`${this._mttHallInfo.TournamentName} (${this._mttHallInfo.TournamentId}, requestDataToUpdate): ${this.myJoinStatus}_${this._mttHallInfo.Status}_${t.TournamentDetail.CurrentLevel}_${t.TournamentDetail.LeftRiseBlindTime}_${t.TournamentDetail.PauseStatus}`);
                else cc_mtt.vv.ConsoleLog.log(`${this._mttHallInfo.TournamentName} (${this._mttHallInfo.TournamentId}, requestDataToUpdate): empty`)
            }), (t => {
                e === et.LastSelectedTournamentId && (et.LastSelectedTournamentId = 0)
            }), 5e3, {
                page: t,
                pageTimestamp: this.getUpdatedPageTimestamp(t)
            })
        }
        callReturnPopUp(t) {
            var e;
            null == (e = this._hallScript) || e.callPopUpBox(t, (() => {
                this.onReturnClicked()
            }))
        }
        handleGameEndOrCancel(t, e = 5) {
            var n;
            if (cc_mtt.vv.ConsoleLog.log("mtt end or cancel", t), this.mttCancelOrEnd) return;
            q.instance && q.instance.removeMttRoom(this._mttHallInfo.TournamentId), this.mttCancelOrEnd = !0, this._mttHallInfo.Status = b.commonProto.MTT_GAME_STATUS.ENDED, this.signUpButton.interactable && this.setSignUpButtonLabel(!1);
            let a = "ERROR_CODE_PKW." + t,
                i = "ERROR_CODE_PKW.TITLE",
                o = (null == (n = this._mttHallInfo) ? void 0 : n.TournamentName) ?? "";
            31004 == t && (a = {
                Translation: a,
                payload: t => _.formatStr(M(t), o)
            }, i = "ERROR_CODE_PKW.TITLE_TOURNAMENT_CANCEL"), t == b.commonProto.ErrorCode.Mtt_Tournament_Canceled ? this.gameClockLabel.string = M("MTT_HALL.GAME_TIMER.GAME_CANCEL") : t == b.commonProto.ErrorCode.Mtt_Tournament_Ended && (this.gameClockLabel.string = M("MTT_HALL.GAME_TIMER.GAME_OVER")), this.closePopUps(), t == b.commonProto.ErrorCode.Mtt_Tournament_Ended && x.appConfig.getLobbyConfig().mtt.disableTournamentEndedPopup ? this.onReturnClicked() : this._hallScript.callPopUpBox(a, (() => {
                this.onReturnClicked()
            }), i)
        }
        closePopUps() {
            if (this.closeMttPopups(), !N.checkNetwork("mttHall") && this._hallScript && this._hallScript.layers[7].children.length > 0) {
                for (let t of this._hallScript.layers[7].children) {
                    let e = t.getComponent(ot);
                    e && e.hide()
                }
                cc_mtt.vv.DataManager.popUps = []
            }
        }
        closeMttPopups() {
            if (this.mttPopupsParent.children.length > 0)
                for (let t of this.mttPopupsParent.children) {
                    let e = t.getComponent(ot);
                    e && e.hide()
                }
            this.closeSignUpPopup()
        }
        closeSignUpPopup() {
            this.signUpPopUpScript && (u(this.signUpPopUpScript.node) ? this.signUpPopUpScript.onCancelClicked() : this.signUpPopUpScript = null)
        }
        addTuplesInTable(t = this.getMttHallPageByIdx()) {
            for (let t = 0; t < this.pageScrollViews.length; t++) switch (t) {
                case 0:
                    this.pageScrollViews[t].getComponent(D).setPage(this._mttHallInfo.PrizeMoney, this._mttHallInfo, this._mttHallInfo.currency, this._mttHallInfo.DisplayCurrency, this._mttHallInfo.Rate);
                    break;
                case 1:
                    this.pageScrollViews[t].getComponent(G).setPage(this);
                    break;
                case 2:
                    this.pageScrollViews[t].getComponent(w).setPage(this._mttHallInfo.TablesDetail)
            }
        }
        resetTimer() {
            this._timeUpdate = 0, this._timeUpdate2 = 0, this._timeUpdate3 = 1
        }
        resetMttHall() {
            this.onChangedPage(0, !0);
            for (let t of this.gameTags) t.active = !1;
            this.controlPage0Content(!1, !1), this.page0TopBeforeStart[0].active = !1, this.controlCounter(!1), this.resetTimer(), this.resetPageTables(), this.changeSignUpButtonStatus(de.RESET), this.gameClockLabel.string = "", this._popupIsCalled = !1, this.startingTime = null, this.loader.active && this.removeSignUpLoading(null, !0), this._mttHallInfo = null
        }
        resetPageTables() {
            for (let t = 0; t < this.pageScrollViews.length; t++) {
                let e;
                switch (t) {
                    case 0:
                        e = this.pageScrollViews[t].getComponent(D);
                        break;
                    case 1:
                        e = this.pageScrollViews[t].getComponent(G);
                        break;
                    case 2:
                        e = this.pageScrollViews[t].getComponent(w)
                }
                this.pageScrollViews[t].scrollToTop(.01), e.resetPage()
            }
        }
        controlPageTable(t) {
            this.pageScrollViews[0].getComponent(D).pageActive = 1 === t, this.pageScrollViews[1].getComponent(G).pageActive = 2 === t, this.pageScrollViews[2].getComponent(w).pageActive = 3 === t
        }
        callMttGameView(t = 0, e = 0) {
            let n = cc_mtt.vv.DataManager.getNow();
            cc_mtt.vv.ConsoleLog.log("callMttGameView", n, this.startingTime);
            let a = n.getTime();
            if (this.startingTime && a > this.startingTime.getTime() - 6e4) try {
                const n = n => {
                    n ? this._hallScript.callGameView(this._mttHallInfo.GameMode, U.GAME_LEVEL_LIST_ID.MTT, this._mttHallInfo.TournamentId, t, e, !1, this._mttHallInfo.PlayOnJoint, this._mttHallInfo.TournamentId) : this._hallScript.hidLoading(null, !1)
                };
                if (x.appConfig.getGameConfig().enableMultiTableBar && tt.checkAndShow(!1, n)) return;
                n(!0)
            } catch (t) {
                cc_mtt.vv.ConsoleLog.log("callMttGameView fail: ", JSON.stringify(t)), this._hallScript.hidLoading()
            } else cc_mtt.vv.ConsoleLog.log("callMttGameView game not start")
        }
        removeSignUpLoading(t, e = !1) {
            u(this._hallScript) && u(this._hallScript.loadingBlockerScript) && this._hallScript.loadingBlockerScript.hide("MTTSignUpLoading"), t && t()
        }
        addSignUpLoading() {
            if (u(this._hallScript) && u(this._hallScript.loadingBlockerScript)) {
                const t = x.appConfig.isLandscapeLayout ? null : this.node;
                this._hallScript.loadingBlockerScript.show("MTTSignUpLoading", t)
            }
        }
        setSignUpButtonLabel(t) {
            this.signUpButton.interactable = t, this.setSignUpButtonColor(t)
        }
        setSignUpButtonColor(t) {
            if (!this.node.active || !this.signUpButton.node.active) return;
            let e = this.signUpButton.getComponent(W);
            t && (this._mttHallInfo.Status == b.commonProto.MTT_GAME_STATUS.STARTED || this._mttHallInfo.Status == b.commonProto.MTT_GAME_STATUS.STARTED + 100 ? e.btnStyle = z.primaryPink : e.btnStyle = z.primary)
        }
        changeSignUpButtonStatus(t) {
            var e, n, a;
            if (this.mttButtonStatus != t) switch (this.mttButtonStatus = t, null == (e = this.signUpButton) || null == (e = e.getComponent(W)) || e.showLoadingAnim(!1), t) {
                case de.SIGN_UP:
                    this.signUpButtonLabel.string = this.getSignUpTranslation("MTT_HALL.REG_STATUS.SIGN_UP"), this.setSignUpButtonLabel(!0);
                    break;
                case de.SIGN_UP_CANCEL:
                    this.signUpButtonLabel.string = this.getSignUpTranslation("MTT_HALL.REG_STATUS.SIGN_UP_CANCEL"), this.setSignUpButtonLabel(!0);
                    break;
                case de.SIGN_UP_STOP:
                    this.signUpButtonLabel.string = this.getSignUpTranslation("MTT_HALL.REG_STATUS.SIGN_UP_STOP"), this.setSignUpButtonLabel(!1);
                    break;
                case de.BACK_TO_GAME:
                    this.signUpButtonLabel.string = this.getSignUpTranslation("MTT_HALL.REG_STATUS.BACK_TO_GAME"), this.setSignUpButtonLabel(!0);
                    break;
                case de.REVIVE:
                    this.signUpButtonLabel.string = this.getSignUpTranslation("MTT_HALL.REG_STATUS.REVIVE"), this.setSignUpButtonLabel(!0);
                    break;
                case de.OUT:
                    this.signUpButtonLabel.string = this.getSignUpTranslation("MTT_HALL.REG_STATUS.OUT"), this.setSignUpButtonLabel(!1);
                    break;
                case de.END:
                    this.signUpButtonLabel.string = this.getSignUpTranslation("GAME_LIST.TOURNAMENT_STATUS_END"), this.setSignUpButtonLabel(!1);
                    break;
                case de.SIGN_UP_NOT_START:
                    this.signUpButtonLabel.string = this.getSignUpTranslation("GAME_LIST.TOURNAMENT_STATUS_NOT_START"), this.setSignUpButtonLabel(!1);
                    break;
                case de.RESET:
                    this.signUpButtonLabel.string = "", this.setSignUpButtonLabel(!1);
                    break;
                case de.REGISTERING:
                    this.signUpButtonLabel.string = this.getSignUpTranslation("MTT_HALL.REG_STATUS.REGISTERING"), null == (n = this.signUpButton) || null == (n = n.getComponent(W)) || n.showLoadingAnim(!0), this.setSignUpButtonLabel(!1);
                    break;
                case de.CANCELLING_REGISTER:
                    this.signUpButtonLabel.string = this.getSignUpTranslation("MTT_HALL.REG_STATUS.CANCELLING_REGISTER"), null == (a = this.signUpButton) || null == (a = a.getComponent(W)) || a.showLoadingAnim(!0), this.setSignUpButtonLabel(!1);
                    break;
                case de.AUTO_FEED:
                    this.signUpButtonLabel.string = M("GAME_LIST.TOURNAMENT_STATUS_AUTO_FEED"), this.setSignUpButtonLabel(!1)
            }
        }
        onSignUpClicked() {
            var t;
            x.dataHandler.getUserData().showTouristLimited() ? x.authenticator.autoShowBuyInMTTById = null == (t = this._mttHallInfo) ? void 0 : t.TournamentId : x.dataHandler.getUserData().showNDRPVerificationReviewPopup() || this.getStage2RegCheckingInProgressStatus() || (this.hallScene && !this.hallScene.isStage2RegistrationDone() ? (this.setStage2RegCheckingInProgressStatus(!0), this.hallScene.checkStage2Registration()) : this.OnStage2RegitrationComplete())
        }
        setHallScene(t) {
            this.hallScene = t
        }
        getHallScene() {
            return this.hallScene
        }
        setStage2RegCheckingInProgressStatus(t) {
            this.isStage2RegCheckingInProgress = t
        }
        getStage2RegCheckingInProgressStatus() {
            return this.isStage2RegCheckingInProgress
        }
        OnStage2RegitrationComplete() {
            switch (cc_mtt.vv.ConsoleLog.log("MttBtn::clicked", this.mttButtonStatus), V.instance || B.coolDownButton(this.signUpButton, u(this.hallScene) ? this.hallScene : this), this.mttButtonStatus) {
                case de.SIGN_UP: {
                    var t;
                    let e, n = t => {
                            e = t.string, x.worldNet.JoinRoomAccessCheck_Request(0, 0, a)
                        },
                        a = () => {
                            this.callSignUpPopUp((t => {
                                this.handleSignUp(t, e)
                            }))
                        };
                    null != (t = this._mttHallInfo) && t.isPrivate ? x.popUp.showMsg({
                        title: x.config.getStringData("Tournament_Enter_password_text"),
                        txt: x.config.getStringData("Tournament_Enter_password_Info"),
                        needPasswordField: !0,
                        isTwoBtn: !0,
                        iconType: X.Password,
                        sureCallback: n.bind(this),
                        cancelCallback: null,
                        msgType: x.Enum.ToastType.ToastTypeSuccess,
                        sureButtonType: Z.PopupConfirmBtn
                    }) : x.worldNet.JoinRoomAccessCheck_Request(0, 0, a)
                }
                break;
                case de.REVIVE: {
                    let t = () => {
                        this.callSignUpPopUp((t => {
                            this.handleRevive(t)
                        }))
                    };
                    x.worldNet.JoinRoomAccessCheck_Request(0, 0, t)
                }
                break;
                case de.BACK_TO_GAME:
                    this.callMttGameView();
                    break;
                case de.SIGN_UP_CANCEL:
                    this.handleSignUpCancel()
            }
            this.setStage2RegCheckingInProgressStatus(!1)
        }
        checkForCancelOrEnd() {
            return this.startingTime && cc_mtt.vv.DataManager.getTime() > this.startingTime.getTime() ? b.commonProto.ErrorCode.Mtt_Tournament_Canceled : b.commonProto.ErrorCode.Mtt_Tournament_Ended
        }
        getSignUpBoxProperty(t) {
            return new lt(t, F.DisplayGold(this._mttHallInfo.RegFee + this._mttHallInfo.SrvFee), b.commonProto.GAME_CATEGORY.MTT, this._mttHallInfo.SignUpOptions, this._mttHallInfo.currency, this._mttHallInfo.GameInvitationCode, this._mttHallInfo.Tag, this._mttHallInfo.DisplayCurrency, this._mttHallInfo.Rate)
        }
        createSignUpPopUp(t, e, n) {
            cc_mtt.vv.AssetsManager.loadPopup(it.getSignUpBoxPath(), (a => {
                this.signUpPopUpScript = a.getComponent(y).callPopUp(t, (a => {
                    this.handleCoupon(a, (() => {
                        !a && cc_mtt.vv.DataManager.userData.Gold < e ? (cc_mtt.vv.ConsoleLog.log("MttHall:SignupNoMoney", cc_mtt.vv.DataManager.userData.Gold, e), this.handleNoMoney()) : n(a)
                    }), (() => {
                        this.createSignUpPopUp(t, e, n)
                    }))
                }), (() => {})), this._popupIsCalled = !1, this.removeSignUpLoading()
            }), !1, this._hallScript && this._hallScript.dialogLayer ? this._hallScript.dialogLayer : cc_mtt.vv.AssetsManager.popupParent)
        }
        callSignUpPopUp(t) {
            this._popupIsCalled || (this._popupIsCalled = !0, this.addSignUpLoading(), cc_mtt.vv.DataManager.updateToolList((() => {
                var e;
                if (!this._mttHallInfo) return;
                let n;
                switch (this.mttButtonStatus) {
                    case de.REVIVE:
                        n = null != (e = this.rebuyParam) && e.defineParam ? this.rebuyParam.regFee + this.rebuyParam.srvFee : this._mttHallInfo.RegFee + this._mttHallInfo.SrvFee;
                        break;
                    default:
                        n = this._mttHallInfo.RegFee + this._mttHallInfo.SrvFee
                }
                n = F.DisplayGold(n);
                let a = M("POPUP_TITLE.JOIN_TOURNAMENT"),
                    i = this.getSignUpBoxProperty(a);
                if (i.toolOption && !i.goldOption && i.tools.length < 1) {
                    let t = {
                        UserId: cc_mtt.vv.DataManager.userId,
                        TournamentId: this._mttHallInfo.TournamentId,
                        TicketId: i.tools,
                        PlatForm: A.instance.getPlatform()
                    };
                    $.hasInstance() && $.getInstance().endSpan(j.BuyIn, "buyin-error", {
                        no_ticket: "true",
                        inputData: JSON.stringify(t),
                        tournamentId: t.TournamentId
                    });
                    const e = M("POPUP_HINTS.NO_TOOL"),
                        n = M("REGISTER.UNABLE_REGISTER");
                    this._hallScript.callPopUpMsg(n, e, void 0), this._popupIsCalled = !1, this.removeSignUpLoading()
                } else this.createSignUpPopUp(i, n, t)
            })))
        }
        updateMyJoinStatus() {
            this.myJoinStatus = it.getMyJoinStatus(this._mttHallInfo), this.isAutoFeed = it.getIsAutoFeed(this._mttHallInfo), this.rebuyFlag = it.getRebuyFlag(this._mttHallInfo)
        }
        reviveJoinedTournaments(t) {
            let e = cc_mtt.vv.DataManager.JoinedTournaments.findIndex((e => e.TournamentId == t));
            cc_mtt.vv.ConsoleLog.log("reviveJoinedTournaments"), e >= 0 && (cc_mtt.vv.DataManager.JoinedTournaments[e].JoinStatus = Math.abs(cc_mtt.vv.DataManager.JoinedTournaments[e].JoinStatus) + 1, cc_mtt.vv.ConsoleLog.log("mtt revive", e, cc_mtt.vv.DataManager.JoinedTournaments[e].JoinStatus))
        }
        updateJoinedTournaments({
            joinStatus: t,
            autoFeed: e,
            rebuyFlag: n
        }, a = this._mttHallInfo.TournamentId) {
            if (0 == t) it.removeJoinedTournaments(a);
            else {
                let i = cc_mtt.vv.DataManager.JoinedTournaments.findIndex((t => t.TournamentId === a));
                i >= 0 ? (cc_mtt.vv.DataManager.JoinedTournaments[i].JoinStatus = t, cc_mtt.vv.DataManager.JoinedTournaments[i].AutoFeed = e, cc_mtt.vv.DataManager.JoinedTournaments[i].rebuyFlag = n) : it.addJoinedTournaments(a, {
                    joinStatus: t,
                    autoFeed: e,
                    rebuyFlag: n
                })
            }
        }
        compareTableAndLocalJoinStatus({
            joinStatus: t,
            autoFeed: e
        }, n) {
            let a = it.getMyJoinStatus(this._mttHallInfo),
                i = it.getIsAutoFeed(this._mttHallInfo),
                o = Math.abs(t) > Math.abs(a),
                l = Math.abs(t) === a;
            (o || l || i != e) && n instanceof Function && n()
        }
        requestTableJoinStatus(t) {
            var e;
            if (null == this._mttHallInfo || null == cc_mtt.vv.DataManager) return;
            let n = new b.commonProto.MttTournamentPlayersRequest;
            n.TournamentId = null == (e = this._mttHallInfo) ? void 0 : e.TournamentId, n.UserId = cc_mtt.vv.DataManager.userId, cc_mtt.vv.ConsoleLog.log("requestTableJoinStatus"), L.requestMttTournamentPlayers(n, (e => {
                if (u(this.node) && this._mttHallInfo && n.TournamentId == this._mttHallInfo.TournamentId && e && !e.ErrorCode) {
                    let n = e.PlayersDetail.find((t => t.UserId === cc_mtt.vv.DataManager.userId));
                    cc_mtt.vv.ConsoleLog.log("requestTableJoinStatus response", null == n ? void 0 : n.JoinStatus, null == n ? void 0 : n.AutoFeed), n && 0 !== n.JoinStatus && t instanceof Function && t(n)
                }
            }), (() => {}))
        }
        handleMttPlayerTableEvent() {
            this.node.on(U.mttPlayerTableEvent, (t => {
                if ((x.appConfig.getGeneralConfig().multiWindowEnabled || !V.instance) && this.isGamePlaying()) {
                    let e = t.getUserData();
                    this.callMttGameView(0, e)
                }
                t.propagationStopped = !0
            }))
        }
        handleCoupon(t, e, n) {
            let a = this._mttHallInfo ? this._mttHallInfo.RegFee + this._mttHallInfo.SrvFee : 0;
            if (t && t.Type === b.commonProto.TOOL_TYPE.coupon && t.Value != a) {
                var i;
                let o = "",
                    l = F.DisplayGold(t.Value, 2);
                o = l > a ? "POPUP_HINTS.HIGHER_COUPON_VALUE" : {
                    Translation: "POPUP_HINTS.LOWER_COUPON_VALUE",
                    payload: t => _.formatStr(M(t), l, a - l)
                }, null == (i = this._hallScript) || i.callPopUpBoxWithTwoOptions(o, (() => {
                    a - t.Value > cc_mtt.vv.DataManager.userData.Gold ? this.handleNoMoney() : e instanceof Function && e(t)
                }), (() => {
                    n instanceof Function && n()
                }), "POPUP_TITLE.JOIN_TOURNAMENT", this.mttPopupsParent)
            } else e instanceof Function && e(t)
        }
        handleRevive(t) {
            var e, n;
            let a = (e = "") => {
                e && this.handleRevive(t)
            };
            var i;
            if (null != (e = x.geoComplyManager) && e.isGeoTokenRequired()) return void(null == (i = x.geoComplyManager) || i.requestValidToken(a, (() => {})));
            if (null != (n = x.geoComplyManager) && n.checkForLocationServices(a)) return;
            this.addSignUpLoading();
            let o = {
                UserId: cc_mtt.vv.DataManager.userId,
                TournamentId: this._mttHallInfo.TournamentId,
                TicketId: t ? t.Id : 0,
                PlatForm: A.instance.getPlatform(),
                isDesktop: x.appConfig.canRegisterMore(!0),
                GeoComplianceToken: "",
                RegGoldType: 0
            };
            var l;
            x.appConfig.getSecurityConfig().useGeoComply && (o.GeoComplianceToken = null == (l = x.geoComplyManager) ? void 0 : l.getGeoToken());
            cc_mtt.vv.ConsoleLog.log("mtt reenter"), L.requestMttReenter(o, (e => {
                if (this.removeSignUpLoading(), e && e.ErrorCode) {
                    cc_mtt.vv.ConsoleLog.log("handleRevive err:", e.ErrorCode);
                    let i = "ERROR_CODE_PKW." + J.getFullErrorCode(e);
                    if (e.ErrorCode == b.commonProto.ErrorCode.Mtt_Tournament_Max_Limit_Join && (i = {
                            Translation: i,
                            payload: t => _.formatStr(t, x.appConfig.getGameConfig().gameTablesConcurrent.mtt)
                        }), e.ErrorCode == b.commonProto.ErrorCode.Mtt_GeoComplianceToken_Check_Fail) {
                        var n;
                        let a = st.Buffer.from(e.GeoComplianceRes).toString("utf8");
                        a = x.tryParseJSON(a) || {}, null == (n = x.geoComplyManager) || n.serverErrorHandler(a, null, this.handleRevive.bind(this, t), null, {
                            ErrorType: "MttReEnterFailed",
                            ErrorCode: e.ErrorCode.toString(),
                            ErrorDetails: JSON.stringify(a)
                        })
                    } else {
                        var a;
                        null == (a = this._hallScript) || a.callPopUpBox(i, void 0)
                    }
                } else {
                    if (e.tournamentId != this._mttHallInfo.TournamentId) return;
                    this.updateMyJoinStatus(), this.changeSignUpButtonStatus(de.BACK_TO_GAME), this._mttHallInfo.Status > b.commonProto.MTT_GAME_STATUS.NOT_STARTED && this.callMttGameView()
                }
            }), (t => {
                var e;
                this.removeSignUpLoading(), null == (e = this._hallScript) || e.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0)
            }))
        }
        handleSignUp(t, e) {
            var n, a;
            if (!this._mttHallInfo) return;
            let i = (n = "") => {
                n && this.handleSignUp(t, e)
            };
            var o;
            if (null != (n = x.geoComplyManager) && n.isGeoTokenRequired()) return void(null == (o = x.geoComplyManager) || o.requestValidToken(i, (() => {})));
            if (null != (a = x.geoComplyManager) && a.checkForLocationServices(i)) return;
            this.addSignUpLoading(), this.changeSignUpButtonStatus(de.REGISTERING);
            let l = x.appConfig.canRegisterMore(),
                s = {
                    UserId: cc_mtt.vv.DataManager.userId,
                    TournamentId: this._mttHallInfo.TournamentId,
                    TicketId: t ? t.Id : 0,
                    PlatForm: A.instance.getPlatform(),
                    isDesktop: l,
                    PrivateMttToken: Q.EncryptStringCBC(e).toString(),
                    GeoComplianceToken: ""
                };
            var r;
            x.appConfig.getSecurityConfig().useGeoComply && (s.GeoComplianceToken = null == (r = x.geoComplyManager) ? void 0 : r.getGeoToken());
            cc_mtt.vv.ConsoleLog.log("mtt sign up"), $.hasInstance() && $.getInstance().addEventToSpan(j.BuyIn, "requestMttPlayerSignUp", {
                inputData: JSON.stringify(s),
                tournamentId: s.TournamentId
            }), L.requestMttPlayerSignUp(s, (n => {
                if ($.hasInstance() && $.getInstance().addEventToSpan(j.BuyIn, "finish", {
                        responseData: JSON.stringify(n)
                    }), n && n.ErrorCode) {
                    $.hasInstance() && $.getInstance().endSpan(j.BuyIn, "buyin-error"), cc_mtt.vv.ConsoleLog.log("handleSignUp err:", n.ErrorCode), n.ErrorCode == b.commonProto.ErrorCode.Mtt_Player_Already_SignUp && this._mttHallInfo.Status == b.commonProto.MTT_GAME_STATUS.NOT_STARTED && (it.addJoinedTournaments(s.TournamentId, {}), this.updateSignUpButton());
                    let a = M("ERROR_CODE_PKW." + J.getFullErrorCode(n));
                    switch (n.ErrorCode) {
                        case b.commonProto.ErrorCode.Mtt_Tournament_Max_Limit_Join:
                            a = _.formatStr(a, x.appConfig.getGameConfig().gameTablesConcurrent.mtt);
                            break;
                        case b.commonProto.ErrorCode.Mtt_Tournament_Not_Allow_Signup_Now:
                            const {
                                hour: t, min: e, sec: i
                            } = K.instance.splitSecond(n.LastSeconds, {
                                hasDay: !1,
                                hasHour: !0
                            }), [o, l] = F.addStartPadding([t, e], 2, "0");
                            if (a = _.formatStr(a, `${o}:${l}`), n.tournamentId == this._mttHallInfo.TournamentId) {
                                const n = cc_mtt.vv.DataManager.getNow();
                                n.setHours(n.getHours() + t, n.getMinutes() + e + this._mttHallInfo.AllowSignupHours, n.getSeconds() + i), cc_mtt.vv.ConsoleLog.log("update starting time", this._mttHallInfo.StartingTime, "to", n), this.startingTime = n, this._mttHallInfo.StartingTime = n
                            }
                    }
                    this.removeSignUpLoading((() => {
                        const i = x.Enum.ThirdPartyErrorCode.MttErrorNotEnoughMoney;
                        if (n.ErrorCode == b.commonProto.ErrorCode.Platform_Response_Error && n.ExternalErrorCode && n.ExternalErrorCode.includes(i)) x.showOutOfFundsPopup(a, null, null, x.SHOP.RechargeClick);
                        else if (n.ErrorCode == b.commonProto.ErrorCode.Mtt_GeoComplianceToken_Check_Fail) {
                            var o;
                            let a = st.Buffer.from(n.GeoComplianceRes).toString("utf8");
                            a = x.tryParseJSON(a) || {}, null == (o = x.geoComplyManager) || o.serverErrorHandler(a, null, this.handleSignUp.bind(this, t, e), null, {
                                ErrorType: "MttSignUpFailed",
                                ErrorCode: n.ErrorCode.toString(),
                                ErrorDetails: JSON.stringify(a)
                            })
                        } else x.popUp.showMsg({
                            txt: a
                        });
                        n.tournamentId == this._mttHallInfo.TournamentId && this.changeSignUpButtonStatus(de.SIGN_UP)
                    }))
                } else if (n) {
                    $.hasInstance() && $.getInstance().endSpan(j.BuyIn, "buyin-success"), it.addJoinedTournaments(this._mttHallInfo.TournamentId, {});
                    let t = cc_mtt.vv.DataManager.getNow();
                    const e = this.startingTime && t.getTime() < this.startingTime.getTime();
                    if (x.dynamicPromoController.incrementPopupTrigger(nt.LobbyPopup, at.TournamentBuyIn), (e || x.appConfig.getGeneralConfig().multiWindowEnabled) && x.dynamicPromoController.showPromoPopup(nt.LobbyPopup, at.TournamentBuyIn), n.tournamentId != this._mttHallInfo.TournamentId) return void this.removeSignUpLoading();
                    e ? (this.removeSignUpLoading((() => {
                        this.changeSignUpButtonStatus(de.SIGN_UP_CANCEL)
                    })), this._timeUpdate3 = this._updateDataInterval - 4, this._mttHallInfo.SignupCount++, this.updateImmediately()) : this.removeSignUpLoading((() => {
                        this.changeSignUpButtonStatus(de.BACK_TO_GAME), this._mttHallInfo && this._mttHallInfo.Status > b.commonProto.MTT_GAME_STATUS.NOT_STARTED && this.callMttGameView()
                    }))
                } else $.hasInstance() && ($.getInstance().endSpan(j.BuyIn, "buyin-error-no-data"), this.updateSignUpButton());
                this.updateMyJoinStatus()
            }), (t => {
                var e;
                this.removeSignUpLoading((() => {
                    s.TournamentId == this._mttHallInfo.TournamentId && this.changeSignUpButtonStatus(de.SIGN_UP)
                })), null == (e = this._hallScript) || e.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0)
            }))
        }
        handleSignUpCancel() {
            x.popUp.showMsg({
                title: M("GAME_MENU.CANCEL_APPLY"),
                txt: M("GAME_MENU.CONFIRM_CANCEL_REGISTRATION"),
                isTwoBtn: !0,
                sureCallback: () => {
                    if (!this._mttHallInfo) return;
                    this.addSignUpLoading();
                    let t = {
                        UserId: cc_mtt.vv.DataManager.userId,
                        TournamentId: this._mttHallInfo.TournamentId
                    };
                    cc_mtt.vv.ConsoleLog.log("mtt sign up cancel"), this.changeSignUpButtonStatus(de.CANCELLING_REGISTER), L.requestMttPlayerSignUpCancel(t, (e => {
                        if (this.removeSignUpLoading(), e.ErrorCode) {
                            var n;
                            cc_mtt.vv.ConsoleLog.log("handleSignUpCancel err:", e.ErrorCode);
                            let t = "";
                            t = e.ErrorCode === b.commonProto.ErrorCode.Mtt_Tournament_Started ? "POPUP_HINTS.MTT_HALL.CANCEL_FAIL_GAME_STARTED" : e.ErrorCode === b.commonProto.ErrorCode.User_Operate_Frequent || e.ErrorCode === b.commonProto.ErrorCode.Mtt_AutoFeed_NotAllowCancel ? "ERROR_CODE_PKW." + J.getFullErrorCode(e) : {
                                Translation: "POPUP_HINTS.MTT_HALL.SIGN_UP_CANCEL_FAIL",
                                payload: t => M(t).replace("${errorCode}", J.getFullErrorCode(e))
                            }, null == (n = this._hallScript) || n.callPopUpBox(t, void 0), e.tournamentId == this._mttHallInfo.TournamentId && this.changeSignUpButtonStatus(de.SIGN_UP_CANCEL)
                        } else it.removeJoinedTournaments(t.TournamentId), e.tournamentId == this._mttHallInfo.TournamentId && (this._timeUpdate3 = this._updateDataInterval - 4, this._mttHallInfo.SignupCount--, 0 == this._mttHallInfo.SignupCount && (this._mttHallInfo.GamePot = 0), this.updateImmediately())
                    }), (e => {
                        var n;
                        this.removeSignUpLoading(), null == (n = this._hallScript) || n.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0), t.TournamentId == this._mttHallInfo.TournamentId && this.changeSignUpButtonStatus(de.SIGN_UP_CANCEL)
                    }))
                },
                cancelCallback: () => {},
                onXCancelCallback: !0,
                cancelLabel: M("GAME_MENU.DO_NOT_CANCEL"),
                sureLabel: M("GAME_MENU.CANCEL_APPLY")
            })
        }
        updateImmediately() {}
        handleNoMoney() {
            var t;
            null == (t = this._hallScript) || t.callPopUpBoxWithTwoOptions("POPUP_HINTS.INSUFFICIENT_BALANCE", (() => {
                var t;
                null == (t = this._hallScript) || t.onClickTopUpOnOtherPage(this.node, void 0)
            }), void 0, "ERROR_CODE_PKW.TITLE", null, "Deposit")
        }
        showCountDown(t) {
            this.myJoinStatus > 0 ? this.changeSignUpButtonStatus(de.BACK_TO_GAME) : this.changeSignUpButtonStatus(de.SIGN_UP), this.setSignUpButtonLabel(!1), this.gameClockLabel.string = "", this.closeMttPopups(), this.controlCounter(!0, -t), cc_mtt.vv.ConsoleLog.log("MttHall::CountDown", t), 0 === t && (cc_mtt.vv.ConsoleLog.log("mtt hall:time to enter"), this.myJoinStatus > 0 ? this.callMttGameView() : it.checkForSignUpStop(this._mttHallInfo) && this.changeSignUpButtonStatus(de.SIGN_UP_STOP))
        }
        updateTimeDifference() {
            this._timeDifference = (cc_mtt.vv.DataManager.getNow().getTime() - this.startingTime.getTime()) / 1e3
        }
        updateSignUpButton() {
            const {
                DataManager: t
            } = cc_mtt.vv;
            let e = t.getNow();
            this.updateMyJoinStatus();
            let n = Math.floor((e.getTime() - this.startingTime.getTime()) / 1e3);
            if (it.checkIsSignUpNotStart(this.startingTime, this._mttHallInfo)) this.controlCounter(!1), this.changeSignUpButtonStatus(de.SIGN_UP_NOT_START), this.gameClockLabel.string = "";
            else if (it.checkIsEnd(this._mttHallInfo)) this.changeSignUpButtonStatus(de.END), this.gameClockLabel.string = "";
            else if (n > 0) {
                let t, e, a;
                this.controlCounter(!1), [t, e, a] = it.handleTimeLabel(n), this.gameClockLabel.string = _.formatStr(M("MTT_HALL.GAME_TIMER.IN_PROGRESS"), t, e, a), this.myJoinStatus > 0 ? this.changeSignUpButtonStatus(de.BACK_TO_GAME) : this.myJoinStatus < 0 ? it.checkForSignUpStop(this._mttHallInfo) || it.checkForOverOutLimit(this.myJoinStatus, this._mttHallInfo) ? this.changeSignUpButtonStatus(de.OUT) : this.changeSignUpButtonStatus(de.REVIVE) : it.checkForSignUpStop(this._mttHallInfo) ? this.changeSignUpButtonStatus(de.SIGN_UP_STOP) : this.changeSignUpButtonStatus(de.SIGN_UP)
            } else if (-60 != n && 0 != n || this.requestDataToUpdate(), n > -60 && it.checkStartGameRequirementIsOk(this._mttHallInfo)) this.showCountDown(n);
            else if (this.controlCounter(!1), this.setSignUpButtonLabel(!0), this.myJoinStatus > 0 ? this.changeSignUpButtonStatus(de.SIGN_UP_CANCEL) : this.changeSignUpButtonStatus(de.SIGN_UP), this._mttHallInfo.PlayOnJoint > 0) this.gameClockLabel.string = M("MTT_HALL.FULL_TO_PLAY_PKW");
            else if (n = Math.abs(n), n < 3600) {
                let t, e, a;
                [t, a, e] = it.handleTimeLabel(n), this._mttHallInfo.IsDelayed ? this.gameClockLabel.string = _.formatStr(M("MTT_HALL.GAME_TIMER.DELAY"), a, e) : this.gameClockLabel.string = _.formatStr(M("MTT_HALL.GAME_TIMER.ONE_HOUR_LEFT"), a, e)
            } else {
                let t = this.startingTime,
                    e = t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
                    n = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes();
                this.gameClockLabel.string = cc_mtt.vv.DataManager.customFormatStr(M("MTT_HALL.GAME_TIMER.START_TIME_PKW"), [t.getMonth() + 1, t.getDate(), e, n])
            }
        }
        controlCounter(t, e = 0) {
            this.counter.active = t, t && (this.counterLabel.string = e + "s")
        }
        controlPage0Content(t, e) {
            let n = [t, e];
            for (let t = 1; t < this.page0TopBeforeStart.length; t++) this.page0TopBeforeStart[t].active = n[t - 1];
            if (this.page0TopBeforeStart[0].active = this._mttHallInfo && this._mttHallInfo.TournamentMode !== b.commonProto.TOURNAMENT_MODE.NORMAL, this.page0TopBeforeStart[0].active) {
                let t = Math.round(this._mttHallInfo.HunterModeBountyProportion * this._mttHallInfo.RegFee);
                switch (this.page0TopContent[0].string = _.formatStr(M("MTT_HALL.ABSTRACT.HUNTER_FEE"), this._mttHallInfo.RegFee - t, t, this._mttHallInfo.SrvFee), this._mttHallInfo.TournamentMode) {
                    case b.commonProto.TOURNAMENT_MODE.HUNTER:
                        this.page0TopContent[1].string = _.formatStr(M("MTT_HALL.ABSTRACT.HUNTER_BOUNTY"), t);
                        break;
                    case b.commonProto.TOURNAMENT_MODE.SUPER_HUNTER:
                        this.page0TopContent[1].string = _.formatStr(M("MTT_HALL.ABSTRACT.SUPER_HUNTER_BOUNTY"), B.getFeeLabel(t * this._mttHallInfo.HunterModeBountyIncreasingRate))
                }
            }
            if (t && (Object.keys(this._blindConfig).length > 0 ? (this.page0BeforeGameContent[0].string = _.formatStr(M("MTT_HALL.ABSTRACT.BLIND_TIME"), Math.floor(this._mttHallInfo.LevelTime / 60)), this.page0BeforeGameContent[2].string = _.formatStr(M("MTT_HALL.ABSTRACT.LEVEL_STOP_SIGN_UP_BLIND"), this._mttHallInfo.LevelStopSignup)) : Object.keys(this._mttHallInfo.PPBasePotConfig).length > 0 && (this.page0BeforeGameContent[0].string = _.formatStr(M("MTT_HALL.ABSTRACT.BASE_TIME"), Math.floor(this._mttHallInfo.LevelTime / 60)), this.page0BeforeGameContent[2].string = _.formatStr(M("MTT_HALL.ABSTRACT.LEVEL_STOP_SIGN_UP_BASE"), this._mttHallInfo.LevelStopSignup)), this.page0BeforeGameContent[1].string = _.formatStr(M("MTT_HALL.ABSTRACT.PEOPLE_PER_TABLE"), this._mttHallInfo.Seats), this.page0BeforeGameContent[3].string = _.formatStr(M("MTT_HALL.ABSTRACT.REPURCHASE_LIMIT"), this._mttHallInfo.ReentryLimit), this.page0BeforeGameContent[4].string = M("MTT_HALL.ABSTRACT.INTERMISSION_PREFIXES") + (this._mttHallInfo.RestTime > 0 ? _.formatStr(M("MTT_HALL.ABSTRACT.INTERMISSION_SUFFIXES"), this._mttHallInfo.RestTime, this._mttHallInfo.RestDuration) : M("MTT_HALL.ABSTRACT.INTERMISSION_NONE"))), e) {
                let t = this._mttHallInfo.CurrentLevel;
                if (Object.keys(this._blindConfig).length > 0) {
                    let e = this._blindConfig;
                    this.page0StartGameContent[0].string = _.formatStr(M("MTT_HALL.ABSTRACT.CURRENT_LEVEL_BLIND_PKW"), t, J.NumberToString(e[t - 1].SmallBlind), J.NumberToString(e[t - 1].BigBlind), J.NumberToString(e[t - 1].Ante));
                    let n = t + 1,
                        a = n <= e.length;
                    this.page0StartGameContent[1].node.active = a, a && (this.page0StartGameContent[1].string = _.formatStr(M("MTT_HALL.ABSTRACT.NEXT_LEVEL_BLIND_PKW"), n, J.NumberToString(e[n - 1].SmallBlind), J.NumberToString(e[n - 1].BigBlind), J.NumberToString(e[n - 1].Ante))), this.page0StartGameContent[2].string = _.formatStr(M("MTT_HALL.ABSTRACT.BLIND_TIME"), Math.floor(this._mttHallInfo.LevelTime / 60))
                } else if (Object.keys(this._mttHallInfo.PPBasePotConfig).length > 0) {
                    let e = this._mttHallInfo.PPBasePotConfig;
                    this.page0StartGameContent[0].string = _.formatStr(M("MTT_HALL.ABSTRACT.CURRENT_LEVEL_BASE"), t, J.NumberToString(e[t - 1].BasePot));
                    let n = t + 1,
                        a = n <= e.length;
                    this.page0StartGameContent[1].node.active = a, a && (this.page0StartGameContent[1].string = _.formatStr(M("MTT_HALL.ABSTRACT.NEXT_LEVEL_BASE"), n, J.NumberToString(e[n - 1].BasePot))), this.page0StartGameContent[2].string = _.formatStr(M("MTT_HALL.ABSTRACT.BASE_TIME"), Math.floor(this._mttHallInfo.LevelTime / 60))
                }
                this.page0StartGameContent[3].string = _.formatStr(M("MTT_HALL.ABSTRACT.SCORES"), Math.round(this._mttHallInfo.MaxCoins), Math.round(this._mttHallInfo.AvgCoins), Math.round(this._mttHallInfo.MinCoins))
            }
        }
        initReturnConfig(t) {
            this._returnConfig = t || {
                returnPage: this._hallScript._mttPage,
                returnCallback: () => {}
            }
        }
        initMttHall(t = null, e) {
            d.isNative && d.os === d.OS.ANDROID && k.getInstance().addBackFunction("MttHall", this.onReturnClicked.bind(this)), this.initReturnConfig(e), this._blindConfig = t.TournamentDetail.HoldemBlindsConfig, this.setInfo(t, Se.ALL), this.setTags(), this.updateTimeDifference(), it.checkTableToUpdateJoinStatus(), this.mttButtonStatus = de.NA, this.updateSignUpButton(), this._mttHallInfo && cc_mtt.vv.ConsoleLog.log(`${this._mttHallInfo.TournamentName} (${this._mttHallInfo.TournamentId}, initMttHall): ${this.myJoinStatus}_${this._mttHallInfo.Status}_${this._mttHallInfo.CurrentLevel}_${this._mttHallInfo.LeftRiseBlindTime}`)
        }
        onShowAnimationEnd() {}
        setTags() {
            switch (this._mttHallInfo.GameMode) {
                case b.commonProto.MTT_GAME_MODE.PP:
                    this.gameType.string = M("MTT_GAME_MODE.PP"), this.gameType.node.parent.getComponent(S).color = (new f).fromHEX("#009887");
                    break;
                case b.commonProto.MTT_GAME_MODE.NLH:
                case b.commonProto.MTT_GAME_MODE.SHORT_DECK:
                    this.gameType.string = M("MTT_GAME_MODE.NLH"), this.gameType.node.parent.getComponent(S).color = (new f).fromHEX("#AB0086");
                    break;
                case b.commonProto.MTT_GAME_MODE.OMAHA:
                    this.gameType.string = M("MTT_GAME_MODE.OMAHA"), this.gameType.node.parent.getComponent(S).color = (new f).fromHEX("#FE0060")
            }
            switch (this._mttHallInfo.TournamentMode) {
                case b.commonProto.TOURNAMENT_MODE.HUNTER:
                    this.gameTags[0].active = !0, this.page2Label[2].string = M("MTT_HALL.TAB.PLAYER.PLAYER_LIST.COLUMN.HUNTER_HEAD_COUNT");
                    break;
                case b.commonProto.TOURNAMENT_MODE.SUPER_HUNTER:
                    this.gameTags[0].active = !0, this.page2Label[2].string = M("MTT_HALL.TAB.PLAYER.PLAYER_LIST.COLUMN.HUNTER_VALUE");
                    break;
                default:
                    this.gameTags[0].active = !1, this.page2Label[2].string = ""
            }
            this.gameTags[1].active = this._mttHallInfo.GameMode === b.commonProto.MTT_GAME_MODE.SHORT_DECK, this.gameTags[2].active = this._mttHallInfo.IsAiptMode
        }
        setMttInfo(t = null) {
            this._mttHallInfo = t.TournamentDetail
        }
        setInfo(t = null, e = this.getMttHallPageByIdx()) {
            if (!t || !t.TournamentDetail) return void cc_mtt.vv.ConsoleLog.log("MttHall::NoTournamentDetail", t);
            x.appConfig.getWalletConfig().checkAndSetGameTableCurrency(t.TournamentDetail), this.mttCancelOrEnd = !1, this.setMttInfo(t), cc_mtt.vv.ConsoleLog.log("mttinfo", this._mttHallInfo), this._mttHallInfo.TournamentName = cc_mtt.vv.DataManager.i18DataFromServer(this._mttHallInfo.TournamentName, this._mttHallInfo.TournamentNameI18N);
            let n = this._mttHallInfo.PlayOnJoint > 0 && this._mttHallInfo.Status <= b.commonProto.MTT_GAME_STATUS.NOT_STARTED;
            this.startingTime = n ? new Date(2100, 1, 1) : this._mttHallInfo.StartingTime, this.gameDuration = Number(t.TournamentDetail.TotalPauseTime);
            let a = this._mttHallInfo,
                i = cc_mtt.vv.DataManager.getNow();
            this.page0Label[0].string = a.TournamentName, this.page0Label[1].string = a.StartingCoins.toString(), cc_mtt.vv.DataManager.getNow().getTime() >= this.startingTime.getTime() && a.JoinedCount > 0 ? this.page0Label[2].string = a.JoinedCount + "/" + a.SignupLimit.toString() : this.page0Label[2].string = a.SignupLimit.toString(), this.page0Label[4].string = a.RegFee + "+" + a.SrvFee, i.getTime() < this.startingTime.getTime() ? (this.page0Label[3].string = this._mttHallInfo.SignupCount.toString() + (this._mttHallInfo.PlayOnJoint > 0 ? "/" + this._mttHallInfo.PlayOnJoint : ""), this.controlPage0Content(!0, !1)) : (this.page0Label[3].string = this._mttHallInfo.PlayingPlayersCount + "/" + this._mttHallInfo.PlayersCount, this.controlPage0Content(!1, !0)), this.updatePageTwoLabel(), this.mttBlindPotTableTitle.string = Object.keys(this._blindConfig).length > 0 ? M("MTT_HALL.TAB.HALL.MTT_BLIND_LIST.BLIND_TITLE") : M("MTT_HALL.TAB.HALL.MTT_BLIND_LIST.ANTE_TITLE"), this.page1Label[0].string = `${B.getFeeLabel(this._mttHallInfo.GamePot+this._mttHallInfo.BountyPot)}`, this.page1Label[1].node.parent.active = a.TournamentMode != b.commonProto.TOURNAMENT_MODE.NORMAL, this.page1Label[1].node.parent.active && (this.page1Label[1].string = `${B.getFeeLabel(this._mttHallInfo.BountyPot)}`), this.updateTableOneWidget(), this.page1Label[2].string = _.formatStr(M("FORMAT.UNIT.PEOPLE"), this._mttHallInfo.PrizeCircle), this.updateRewardAttributes(), this.page3Label[0].string = `${this._mttHallInfo.TablesDetail.length}`, this.page3Label[1].string = `${this._mttHallInfo.Seats}`, this.addTuplesInTable()
        }
        updateRewardAttributes() {
            this.page1TableAttributes[1].node.active = this._mttHallInfo.PrizeMode == U.MTT_PRIZE_MODE.MTT_PRIZE_CONFIG_MODE_DEFAULT
        }
        updatePageTwoLabel() {
            cc_mtt.vv.DataManager.getNow().getTime() < this.startingTime.getTime() ? (this.page2Label[0].node.parent.getComponent(r).string = M("MTT_HALL.TAB.PLAYER.SIGNED_UP"), this.page2Label[0].string = `${this._mttHallInfo.SignupCount}`, this.page2Label[1].node.active = !1) : (this.page2Label[0].node.parent.getComponent(r).string = M("MTT_HALL.TAB.PLAYER.CURRENT_PLAYER"), this.page2Label[0].string = `${this._mttHallInfo.PlayersCount}`, this.page2Label[1].node.active = !0, this.page2Label[1].string = `${this._mttHallInfo.JoinedCount}`)
        }
        updateTableOneWidget() {
            let t = this.pageScrollViews[0].getComponent(D).scrollView.node.getComponent(I),
                e = this._mttHallInfo.TournamentMode != b.commonProto.TOURNAMENT_MODE.NORMAL ? 269 : 200;
            if (t.top !== e) {
                t.top = e, t.updateAlignment();
                let n = t.node.children;
                for (let t of n) {
                    let e = t.getComponent(I);
                    e && e.updateAlignment()
                }
            }
        }
        onChangeSubHeader(t) {
            for (let n = 0; n < (null == (e = this.subHeader) ? void 0 : e.length); n++) {
                var e;
                let a = this.subHeader[n].getComponent(W);
                n == t ? (a.btnState = Y.pressed, a.isChecked = !0) : (a.btnState = Y.normal, a.isChecked = !1)
            }
        }
        onChangedPage(t, e = !1) {
            this.bodyPageView.getCurrentPageIndex() !== t && this.bodyPageView.scrollToPage(t, e ? 0 : .3), B.updateContentWidget(this.bodyPageView.content, t), this.controlPageTable(t)
        }
        onHallClicked() {
            this.onChangedPage(0)
        }
        onRewardsClicked() {
            this.onChangedPage(1)
        }
        onPlayerClicked() {
            this.onChangedPage(2)
        }
        onTableClicked() {
            this.onChangedPage(3)
        }
        onBlindPotTableClicked() {
            this._hallScript.controlHallBlockLayer(!0, this.name), this._hallScript.showLoading(), this._blindPotTable || (this._blindPotTable = C(this.blindPotTablePrefab), this._blindPotTable.parent = this._hallScript.layers[0], this._blindPotTable.getComponent(H).parentNode = this.node);
            let t = this._blindPotTable.getComponent(H);
            t.tableTitle.string = this.mttBlindPotTableTitle.string;
            let e = cc_mtt.vv.DataManager.getNow() < this.startingTime.getTime() ? 0 : this._mttHallInfo.CurrentLevel;
            this._blindConfig && this._blindConfig.length > 0 ? t.setPage(0, this._blindConfig, e, this._mttHallInfo.LevelStopSignup, this._mttHallInfo.BlindHands, this._mttHallInfo.GameMode == b.commonProto.MTT_GAME_MODE.SHORT_DECK) : this._mttHallInfo.PPBasePotConfig && this._mttHallInfo.PPBasePotConfig.length > 0 && t.setPage(1, this._mttHallInfo.PPBasePotConfig, e, this._mttHallInfo.LevelStopSignup, this._mttHallInfo.BlindHands), this._hallScript.hidLoading((() => {
                this._hallScript.movePageFromRight(this._blindPotTable, this.node), setTimeout((() => {
                    this._hallScript.controlHallBlockLayer(!1, this.name)
                }), 1100 * cc_mtt.vv.DataManager.pageActionSpeed)
            }))
        }
        onReturnClicked() {
            if (!u(this.node) || !this._showing) return;
            this._showing = !1, d.isNative && d.os === d.OS.ANDROID && k.getInstance().removeBackFunction("MttHall"), cc_mtt.vv.ConsoleLog.log("mttHall:onReturnClicked"), this._hallScript.controlHallBlockLayer(!0, this.name);
            let t = this._returnConfig.returnPage ? this._returnConfig.returnPage : this.node.parent.getChildByName("mtt_prefab");
            this._hallScript.movePageToRight(this.node, t, (() => {
                try {
                    var t, e;
                    if (this.resetMttHall(), (null == (t = this._returnConfig) ? void 0 : t.returnCallback) instanceof Function) null == (e = this._returnConfig) || e.returnCallback();
                    this._hallScript.controlHallBlockLayer(!1, this.name)
                } catch (t) {
                    console.error(t)
                }
            }))
        }
        onGameListTupleDataChanged(t) {
            t && t.timeStampLateReg && this._mttHallInfo && this.updateMttHallInfoTimeStampLageReg(t.timeStampLateReg)
        }
        updateMttHallInfoTimeStampLageReg(t) {
            this._mttHallInfo && (this._mttHallInfo.timeStampLateReg = t)
        }
        getSignUpTranslation(t) {
            return M(t)
        }
        setUpdatedPageTimestamp(t, e) {
            switch (t) {
                case Se.ALL:
                    this._updatedPages[Se.LOBBY] = e, this._updatedPages[Se.REWARD] = e, this._updatedPages[Se.PLAYER] = e, this._updatedPages[Se.TABLE] = e;
                    break;
                case Se.LOBBY:
                    this._updatedPages[Se.LOBBY] = e;
                    break;
                case Se.REWARD:
                    this._updatedPages[Se.REWARD] = e;
                    break;
                case Se.PLAYER:
                    this._updatedPages[Se.PLAYER] = e;
                    break;
                case Se.TABLE:
                    this._updatedPages[Se.TABLE] = e
            }
            cc_mtt.vv.ConsoleLog.log("mtt hall setUpdatedPageTimestamp", t, this._updatedPages)
        }
        getUpdatedPageTimestamp(t) {
            return this._updatedPages[t] || 0
        }
        isPageOutdated(t) {
            let e = Math.max(...Object.values(this._updatedPages));
            return this.getUpdatedPageTimestamp(t) < e
        }
        isShowingTournament(t) {
            var e;
            return this._showing && (null == (e = this._mttHallInfo) ? void 0 : e.TournamentId) == t
        }
    }).instance = null, wt = e((Gt = pe).prototype, "backButton", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(Gt.prototype, "subHeader", [gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Ft = e(Gt.prototype, "underline", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Jt = e(Gt.prototype, "bodyPageView", [ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(Gt.prototype, "pageScrollViews", [mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), xt = e(Gt.prototype, "pageTableTuples", [ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Wt = e(Gt.prototype, "signUpButton", [pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = e(Gt.prototype, "signUpButtonLabel", [Tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yt = e(Gt.prototype, "gameClockLabel", [_t], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Kt = e(Gt.prototype, "page0Label", [dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), qt = e(Gt.prototype, "mttBlindPotTableTitle", [St], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $t = e(Gt.prototype, "gameType", [ft], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), jt = e(Gt.prototype, "gameTags", [It], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Xt = e(Gt.prototype, "page0TopBeforeStart", [Ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Zt = e(Gt.prototype, "counter", [Lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qt = e(Gt.prototype, "counterLabel", [Et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = e(Gt.prototype, "page0TopContent", [Pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ee = e(Gt.prototype, "page0BeforeGameContent", [bt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ne = e(Gt.prototype, "page0StartGameContent", [Mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ae = e(Gt.prototype, "blockLayer", [At], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = e(Gt.prototype, "loader", [Ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = e(Gt.prototype, "page1Label", [Ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), le = e(Gt.prototype, "page1TableAttributes", [vt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), se = e(Gt.prototype, "page2Label", [Rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), re = e(Gt.prototype, "page3Label", [Bt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ge = e(Gt.prototype, "blindPotTablePrefab", [Nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = e(Gt.prototype, "mttPopupsParent", [yt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = e(Gt.prototype, "pageActionSpeed", [_e], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return .15
        }
    }), me = e(Gt.prototype, "_mttHallInfo", [_e], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = e(Gt.prototype, "currencySwitcher", [Ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = Gt)) || Dt));
    a._RF.pop()
}