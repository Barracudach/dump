import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as p from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as f from "./DesignSystemButtonBase.js";
import * as L from "./CurrencyValue.js";
import * as S from "./cv.js";
import * as I from "./CollapsibleLabel.js";
import * as b from "./MttBlindStructureLandscape.js";
import * as P from "./MttItemHelper.js";
import * as H from "./AndroidBackButton.js";
import * as C from "./MTTConnector.js";
import * as M from "./NodePage.js";
import * as y from "./ResourcesLoader.js";
import * as E from "./SignUpBoxProperty.js";
import * as A from "./Translator.js";
import * as D from "./WebPlatformTools.js";
import * as v from "./MultipleGame.js";
import * as R from "./mttconfig.js";
import * as N from "./Pb.js";
import * as B from "./FormatParser.js";
import * as U from "./MttBlindPotTable.js";
import * as w from "./MttHall.js";
import * as O from "./MttHall.js";
import * as G from "./MttHall.js";
import * as k from "./MttHallTableOneScript.js";
import * as F from "./MttHallTableThreeScript.js";
import * as V from "./MttHallTableTwoScript.js";
import * as W from "./MttPrefab.js";
import * as z from "./GameListTuplePkw.js";
import * as J from "./MttBlindPotTablePkw.js";
import * as x from "./PageThreeFinalPlayerPagePkw.js";
import * as K from "./WPTTerms.js";
import * as Y from "./CustomLocalizedLabel.js";
import * as j from "./CrashTracing.js";
import * as q from "./SngEvent.js";

function main() {
    var X, Z, Q, tt, et, at, it, nt, lt, st, ot, rt, ht, ut, mt, ct, Tt, gt, _t, dt, pt, ft, Lt, St;
    i._RF.push({}, "78fb5eL5WhLT50vf5ES0ujb", "MttHallPkw", void 0);
    const {
        ccclass: It,
        property: bt
    } = u;
    t("MttHallPkw", (X = bt(n), Z = bt([l]), Q = bt([l]), tt = bt(s), et = bt(o), at = bt(o), it = bt(o), nt = bt(o), lt = bt(x), st = bt(r), ot = bt(h), It((ut = e((ht = class extends w {
        constructor(...t) {
            super(...t), a(this, "containerWidget", ut, this), a(this, "abstractLabels", mt, this), a(this, "page0LabelTitles", ct, this), a(this, "hintsBtn", Tt, this), a(this, "hintsLayer", gt, this), a(this, "hintsNode", _t, this), a(this, "pageThreeTableLayout", dt, this), a(this, "pageThreeFinalPlayerLayout", pt, this), a(this, "pageThreeFinalPlayerPage", ft, this), a(this, "wptTermsPrefab", Lt, this), a(this, "eventDetailRT", St, this), this.tournamentDetailResponse = null, this.tournamentData = null, this.multiDayI18n = "Multi_Day_Hall_Details", this._scrollEndResponse = null, this._levelRised = !1, this._autoEnterCalled = !1, this._wptTerms = null, this._updateDataInterval = 15, this.setMttScheduleAction = () => {
                let t = Math.floor(this._timeDifference); - 60 != t && 0 != t || (this.requestDataToUpdate(), null !== W.instance && void 0 !== W.instance && W.instance.getLevelList()), t > -31 && t < 6 && P.checkStartGameRequirementIsOk(this._mttHallInfo) && cc_mtt.vv.ConsoleLog.log("MttHall::+CountDown", t), this.updateGameClock(this._timeDifference)
            }
        }
        onLoad() {
            super.onLoad(), this.updateLang(), this.signUpButtonLabel.string = this.getSignUpTranslation("MTT_HALL.REG_STATUS.SIGN_UP"), S.MessageCenter.register(S.config.CHANGE_LANGUAGE, this.updateDetailsLabels.bind(this), this.node)
        }
        onDestroy() {
            S.MessageCenter.unregister(S.config.CHANGE_LANGUAGE, this.node)
        }
        onEnable() {
            super.onEnable(), console.log("changeDialogStyle MttHallPkw 0"), this._hallScript.dialogController.dialogStyle = 0, this._hallScript.loadingStyle = 0, C.instance.sendMessageCenter("changeMTTStyle")
        }
        onDisable() {
            super.onDisable(), console.log("changeDialogStyle MttHallPkw 1"), this._hallScript.dialogController.dialogStyle = 1, this._hallScript.loadingStyle = 1, C.instance.sendMessageCenter("changeMTTStyle")
        }
        start() {
            this.bodyPageView.node.on(m.EventType.PAGE_TURNING, (() => {
                this.onChangedPage(this.bodyPageView.getCurrentPageIndex())
            })), this.bodyPageView.node.on(m.EventType.SCROLL_ENDED, (() => {
                this.onScrollEnded()
            })), this.handleMttPlayerTableEvent(), this.controlCounter(!1), v.instance && (this.containerWidget.top = 0, this.adaptWidget())
        }
        onScrollEnded() {
            let t = this.bodyPageView.getCurrentPageIndex();
            this.onChangeSubHeader(t), this._scrollEndResponse && this._scrollEndResponse(t)
        }
        onPlayerClicked() {
            this.onChangedPage(1)
        }
        onRewardsClicked() {
            this.onChangedPage(2)
        }
        reinitMttHall() {
            this.tournamentDetailResponse && this.initMttHall(this.tournamentDetailResponse, this._returnConfig, this.tournamentData)
        }
        setLoading(t) {}
        initMttHall(t = null, e, a) {
            this.tournamentDetailResponse = t, this.tournamentData = a, super.initMttHall(t, e), cc_mtt.vv.DataManager.currentResultId = t.TournamentDetail.TournamentId, this.updateGameClock(this._timeDifference), this._autoEnterCalled = !0, this.setMttSchedule(), this.pageThreeFinalPlayerLayout.active = !1, this.pageThreeTableLayout.active = !0, this.setSubHeaderLocalizedLabel(3, "MTT_HALL.TAB.TABLE.TAB_NAME"), this.tournamentData instanceof N.commonProto.MttTournament && this.tournamentData.IsCardsShown && (this.pageThreeFinalPlayerLayout.active = !0, this.pageThreeTableLayout.active = !1, this.setSubHeaderLocalizedLabel(3, "MTT_HALL.TAB.FINAL_PLAYER.TAB_NAME")), this.updateLang(), v.instance && v.instance.setBackButtonAction((() => {
                this.onReturnClicked()
            }))
        }
        checkAutoEnterCalled() {
            this._autoEnterCalled = this._timeDifference > 0
        }
        setMttSchedule() {
            this.unschedule(this.setMttScheduleAction), this.schedule(this.setMttScheduleAction, 1)
        }
        setScollEndResponse(t) {
            this._scrollEndResponse = t
        }
        removeScrollEndResponse() {
            this._scrollEndResponse = null
        }
        onShowAnimationEnd() {
            cc_mtt.vv.DataManager.webPlatform == N.commonProto.PLATFORM.PKW && D.instance.sendCCJS("goto_game")
        }
        addTuplesInTable(t = this.getMttHallPageByIdx()) {
            for (let e = 0; e < this.pageScrollViews.length; e++) switch (e) {
                case 0:
                    t != O.REWARD && t != O.ALL || (this.pageScrollViews[e].getComponent(k).setPage(this._mttHallInfo.PrizeMoney, this._mttHallInfo, this._mttHallInfo.currency, this._mttHallInfo.DisplayCurrency, this.tournamentData.CurrencyRate || this._mttHallInfo.Rate), this.pageScrollViews[e].getComponent(k).setConvertCurrency(this.getConvertCurrencySwitcher()));
                    break;
                case 1:
                    t != O.PLAYER && t != O.ALL || this.pageScrollViews[e].getComponent(V).setPage(this);
                    break;
                case 2:
                    if (t == O.TABLE || t == O.ALL)
                        if (this.tournamentData && this.tournamentData.IsCardsShown) {
                            let t = 3600 * this.tournamentData.Detail.EndDisplayHours;
                            t -= Math.round((cc_mtt.vv.DataManager.getNow() - this.tournamentData.Detail.EndingTime.getTime()) / 1e3), this.pageThreeFinalPlayerPage.setPage(this._mttHallInfo.FinalTablePlayers, t, this._mttHallInfo.TournamentId, this._mttHallInfo.TournamentName, this._mttHallInfo.EndingTime, this._mttHallInfo.Seats, N.commonProto.GAME_CATEGORY.MTT, this._mttHallInfo.PlayOnJoint)
                        } else this.pageScrollViews[e].getComponent(F).setPage(this._mttHallInfo.TablesDetail)
            }
        }
        getSignUpBoxPath() {
            return S.appConfig.isLandscapeLayout ? y.RES_PATH.PREFAB.COMMON.MTT_SIGN_UP_BOX_LANDSCAPE : y.RES_PATH.PREFAB.COMMON.MTT_SIGN_UP_BOX
        }
        getSignUpBoxProperty(t) {
            var e;
            let a = this._mttHallInfo.SignUpOptions,
                i = this._mttHallInfo.Tag,
                n = 0,
                l = this._mttHallInfo.RegFee + this._mttHallInfo.SrvFee;
            switch (this.mttButtonStatus) {
                case G.REVIVE:
                    if (n = this._mttHallInfo.StartingCoins, null != (e = this.rebuyParam) && e.defineParam) {
                        const t = [];
                        var s;
                        if (this.rebuyParam.AllowGold && t.push("gold"), this.rebuyParam.AllowTool)
                            if (t.push("tool"), null != (s = this.rebuyParam.signupToolParamList) && s.length) {
                                let e = "specific:mtt:";
                                e += Array.from(this.rebuyParam.signupToolParamList, (t => (t.platform == N.commonProto.PLATFORM.BL ? "a93:" : "a92:") + t.toolId.toString())).join(","), t.push(e)
                            } a = t.join(","), i = this.rebuyParam.Tag ? this.rebuyParam.Tag : [], n = this.rebuyParam.initCoin, l = this.rebuyParam.regFee + this.rebuyParam.srvFee
                    }
            }
            return new E(t, B.DisplayGold(l), N.commonProto.GAME_CATEGORY.MTT, a, this._mttHallInfo.currency, this._mttHallInfo.GameInvitationCode, i, this._mttHallInfo.DisplayCurrency, this.tournamentData.CurrencyRate || this._mttHallInfo.Rate, 0, n, 0, this._mttHallInfo.StartingTime, this._mttHallInfo.TournamentName, this.myJoinStatus, this._mttHallInfo.PlayOnJoint)
        }
        updateLang() {
            this.setLabelTitle(this.page0LabelTitles[0], "MTT_HALL.TAB.HALL.TOURNAMENT_DETAIL_HEADER.GAME_TYPE"), this.setLabelTitle(this.page0LabelTitles[1], "MTT_HALL.TAB.HALL.TOURNAMENT_DETAIL_HEADER.STATUS"), this.setLabelTitle(this.page0LabelTitles[2], "GAME_LIST.BUY_IN_FEE"), this.setLabelTitle(this.page0LabelTitles[3], "MTT_HALL.TAB.HALL.TOURNAMENT_DETAIL_HEADER.STRUCTURE"), this.setLabelTitle(this.page0LabelTitles[4], "MTT_HALL.TAB.HALL.TOURNAMENT_DETAIL_HEADER.INIT_SCORES"), this.setLabelTitle(this.page0LabelTitles[5], "MTT_HALL.TAB.HALL.TOURNAMENT_DETAIL_HEADER.BUY_IN_LIMIT"), this.setLabelTitle(this.page0LabelTitles[6], "MTT_HALL.TAB.HALL.TOURNAMENT_DETAIL_HEADER.EVENT_DETAILS")
        }
        setLabelTitle(t, e) {
            t.string = A(e) + ":"
        }
        updatePageTwoLabel() {
            cc_mtt.vv.DataManager.getNow().getTime() < this.startingTime.getTime() ? (this.page2Label[0].string = A("MTT_HALL.TAB.PLAYER.SIGNED_UP"), this.page2Label[1].string = `${this._mttHallInfo.SignupCount}`, this.page2Label[3].node.parent.active = !1) : (this.page2Label[0].string = A("MTT_HALL.TAB.PLAYER.CURRENT_PLAYER"), this.page2Label[1].string = `${this._mttHallInfo.PlayersCount}`, this.page2Label[3].node.parent.active = !0, this.page2Label[3].string = `${this._mttHallInfo.JoinedCount}`)
        }
        showSignUpButton(t) {
            this.signUpButton.node.active != t && (this.signUpButton.node.active = t)
        }
        updateSignUpButton() {
            var t;
            if (!this._startingTime && c(this._mttHallInfo)) {
                const t = {
                    tournamentId: this._mttHallInfo.TournamentId,
                    tournamentMode: this._mttHallInfo.TournamentMode,
                    status: this._mttHallInfo.Status
                };
                $.getInstance().trace(j.MttIssues, q.UpdateSignUpButtonNoStartingTime, t)
            }
            if (!c(this._mttHallInfo)) return;
            this.updateMyJoinStatus();
            let e = Math.floor(this._timeDifference);
            this.showSignUpButton(!((null == (t = this._mttHallInfo) ? void 0 : t.MultiFlightLevel) > 0 && e <= -60)), P.checkIsSignUpNotStart(this.startingTime, this._mttHallInfo) ? this.changeSignUpButtonStatus(G.SIGN_UP_NOT_START) : P.checkIsEnd(this._mttHallInfo) ? this.changeSignUpButtonStatus(G.END) : e > 0 ? this.myJoinStatus > 0 ? this.changeSignUpButtonStatus(G.BACK_TO_GAME) : this.myJoinStatus < 0 ? P.checkForOverOutLimit(this.myJoinStatus, this._mttHallInfo) ? this.changeSignUpButtonStatus(G.OUT) : P.checkForSignUpStop(this._mttHallInfo) ? this.rebuyFlag == N.commonProto.RebuyFlag.Rebuy ? this.changeSignUpButtonStatus(G.REVIVE) : this.changeSignUpButtonStatus(G.OUT) : this.changeSignUpButtonStatus(G.REVIVE) : P.checkForSignUpStop(this._mttHallInfo) ? this.changeSignUpButtonStatus(G.SIGN_UP_STOP) : this.changeSignUpButtonStatus(G.SIGN_UP) : e > -60 ? (this.changeSignUpButtonStatus(this.myJoinStatus > 0 ? G.BACK_TO_GAME : P.checkForSignUpStop(this._mttHallInfo) ? G.SIGN_UP_STOP : G.SIGN_UP), this.myJoinStatus <= 0 ? (this.setSignUpButtonLabel(!1), this.signUpButtonLabel.string = this.getSignUpTranslation("MTT_HALL.REG_STATUS.STARTING")) : this.setSignUpButtonLabel(P.checkStartGameRequirementIsOk(this._mttHallInfo)), P.checkStartGameRequirementIsOk(this._mttHallInfo) && this.closeMttPopups()) : this.isAutoFeed ? this.changeSignUpButtonStatus(G.AUTO_FEED) : this.myJoinStatus > 0 ? this.mttButtonStatus != G.CANCELLING_REGISTER && (this.setSignUpButtonLabel(!0), this.changeSignUpButtonStatus(G.SIGN_UP_CANCEL)) : this.mttButtonStatus != G.REGISTERING && (this.setSignUpButtonLabel(!0), this.changeSignUpButtonStatus(G.SIGN_UP))
        }
        updateGameClock(t) {
            if (this._mttHallInfo)
                if (P.checkIsSignUpNotStart(this.startingTime, this._mttHallInfo)) this.gameClockLabel.string = "";
                else if (P.checkIsEnd(this._mttHallInfo)) this.gameClockLabel.string = "00:00:00";
            else if (P.checkHasTournamentStartTime(this._mttHallInfo))
                if (t <= 0) {
                    t = Math.abs(t);
                    let e = P.handleTimeLabel(t);
                    this.gameClockLabel.string = e.join(":"), 0 == Math.floor(t) && (this._mttHallInfo.LeftRiseBlindTime = this._mttHallInfo.LevelTime - 1)
                } else if (this._mttHallInfo.BlindHands > 0) this.gameClockLabel.string = "";
            else {
                const e = this._blindConfig.length,
                    a = this._mttHallInfo.timeStampLateReg ? P.timeStampToTimeLeftSec(this._mttHallInfo.timeStampLateReg) : this._mttHallInfo.TimeLeftSec;
                this._mttHallInfo.CurrentLevel >= e || this._mttHallInfo.BlindLevelPause && this._mttHallInfo.CurrentLevel >= this._mttHallInfo.BlindLevelPause ? this.gameClockLabel.string = "00:00:00" : this._mttHallInfo.Status == N.commonProto.MTT_GAME_STATUS.STARTED && (this._mttHallInfo.CurrentLevel >= this._mttHallInfo.LevelStopSignup || a <= 0 && a >= -this._rebuyInterval) ? this.gameClockLabel.string = "00:00" : this._mttHallInfo.PauseStatus ? this.gameClockLabel.string = P.handleTimeLabel(this._mttHallInfo.LeftRiseBlindTime).join(":") : 0 === this._mttHallInfo.LeftRiseBlindTime ? (t > 20 && !this._levelRised && (this.abstractLabels[1].string = (this._mttHallInfo.CurrentLevel + 1).toString()), this._mttHallInfo.CurrentLevel + 1 >= e ? (this.gameClockLabel.string = "00:00:00", this.abstractLabels[6].string = A("MTT_HALL.ABSTRACT.INTERMISSION_NONE")) : (this._mttHallInfo.LeftRiseBlindTime = this._mttHallInfo.LevelTime, this.gameClockLabel.string = P.handleTimeLabel(this._mttHallInfo.LeftRiseBlindTime--).join(":"))) : (this._mttHallInfo.LeftRiseBlindTime < 0 && (this._mttHallInfo.LeftRiseBlindTime = this._mttHallInfo.LevelTime), this.gameClockLabel.string = P.handleTimeLabel(this._mttHallInfo.LeftRiseBlindTime--).join(":"))
            } else this.gameClockLabel.string = ""
        }
        updateNextBreak(t) {
            const e = this._blindConfig.length;
            if (this._mttHallInfo.RestDuration > 0 && this._mttHallInfo.CurrentLevel < e)
                if (t.getTime() < this.startingTime.getTime()) {
                    let t = A("MTT_HALL.ABSTRACT.INTERMISSION_MINUTES");
                    if (this._mttHallInfo.RestDuration <= 1) {
                        let e = 0;
                        t = t.replace(/Mins/g, (t => 2 == ++e ? "Min" : t))
                    }
                    t.indexOf("undefined") >= 0 && (t = A("MTT_HALL.ABSTRACT.INTERMISSION_MINUTES")), this.abstractLabels[6].string = T.formatStr(t, this._mttHallInfo.RestDuration)
                } else {
                    let t = this._mttHallInfo.LeftEnterRestTime > 0 ? Math.floor(this._mttHallInfo.LeftEnterRestTime / 60) : 0;
                    this.abstractLabels[6].string = this._mttHallInfo.TimerStop ? "-" : t + A("TIME.MINUTE")
                }
            else this.abstractLabels[6].string = A("MTT_HALL.ABSTRACT.INTERMISSION_NONE")
        }
        showCountDown(t) {
            this.myJoinStatus > 0 ? this.changeSignUpButtonStatus(G.BACK_TO_GAME) : this.changeSignUpButtonStatus(G.SIGN_UP), (P.checkStartGameRequirementIsOk(this._mttHallInfo) || this._mttHallInfo.IsDelayed) && this.setSignUpButtonLabel(!1), P.checkStartGameRequirementIsOk(this._mttHallInfo) && this.closeMttPopups()
        }
        autoEnterWhenStart() {
            if (this.startingTime && !this._autoEnterCalled && P.checkStartGameRequirementIsOk(this._mttHallInfo)) {
                let t = this._timeDifference;
                t >= 0 && t < 1 && (this._autoEnterCalled = !0, cc_mtt.vv.ConsoleLog.log("MttHall::time to enter"), this.myJoinStatus > 0 ? this.callMttGameView() : P.checkForSignUpStop(this._mttHallInfo) && this.changeSignUpButtonStatus(G.SIGN_UP_STOP))
            }
        }
        updateTableOneWidget() {}
        setTags() {}
        onChangedPage(t, e = !1) {
            this.bodyPageView.getCurrentPageIndex() !== t && (this.onChangeSubHeader(t), this.bodyPageView.scrollToPage(t, e ? 0 : .3)), M.updateContentWidget(this.bodyPageView.content, t), this.controlPageTable(t);
            const a = this.getMttHallPageByIdx(t);
            this.isPageOutdated(a) && (cc_mtt.vv.ConsoleLog.log("MttHallPkw onChangedPage requestData", a, this._updatedPages), this.requestDataToUpdate(a))
        }
        controlPageTable(t) {
            this.pageScrollViews[0].getComponent(k).pageActive = 2 === t, this.pageScrollViews[1].getComponent(V).pageActive = 1 === t, this.pageScrollViews[2].getComponent(F).pageActive = 3 === t
        }
        getTournamentType() {
            return this._mttHallInfo.PlayOnJoint > 0 ? "SNG" : this._mttHallInfo.IsAiptMode ? "SAT" : this._mttHallInfo.MultiFlightId ? S.config.getStringData(this.multiDayI18n) + ", MTT" : "MTT"
        }
        getGameType() {
            switch (this._mttHallInfo.GameMode) {
                case N.commonProto.MTT_GAME_MODE.NLH:
                    return "NLH";
                case N.commonProto.MTT_GAME_MODE.SHORT_DECK:
                    return "ShortDeck";
                case N.commonProto.MTT_GAME_MODE.OMAHA:
                    return "Omaha";
                default:
                    return ""
            }
        }
        getTournamentStatus() {
            switch (this._mttHallInfo.Status) {
                case N.commonProto.MTT_GAME_STATUS.NOT_STARTED:
                    return A("GAME_LIST.TOURNAMENT_STATUS_ENROLLING");
                case N.commonProto.MTT_GAME_STATUS.STARTED:
                case N.commonProto.MTT_GAME_STATUS.STARTED + 100:
                    return A("GAME_LIST.TOURNAMENT_STATUS_DELAY");
                case N.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                case N.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
                case N.commonProto.MTT_GAME_STATUS.ENDED:
                    return A("GAME_LIST.TOURNAMENT_STATUS_EOE")
            }
        }
        getStructure() {
            switch (this._mttHallInfo.MttMode) {
                case N.commonProto.MTT_MODE.Normal:
                    return A("PKWMTT.SPEED.NORMAL");
                case N.commonProto.MTT_MODE.Turbo:
                    return A("PKWMTT.SPEED.TURBO");
                case N.commonProto.MTT_MODE.Hyper:
                    return A("PKWMTT.SPEED.HYPER");
                default:
                    return ""
            }
        }
        updatePageDetails(t) {
            let e = this._mttHallInfo;
            if (this.mttBlindPotTableTitle.string = this._blindConfig.length > 0 ? A("MTT_HALL.TAB.HALL.MTT_BLIND_LIST.BLIND_TITLE") : A("MTT_HALL.TAB.HALL.MTT_BLIND_LIST.ANTE_TITLE"), this.page0Label[0].string = this.getTournamentType(), this.page0Label[1].string = this.getGameType(), this.page0Label[2].string = this.getTournamentStatus(), this._mttHallInfo.MultiFlightLevel > 0) this.setCurrencyValue(this.page0Label[3], "N/A");
            else {
                let t = B.ThousandPointFormat(B.DisplayGold(e.RegFee)) + "+" + B.ThousandPointFormat(B.DisplayGold(e.SrvFee));
                const a = this.getSignUpBoxProperty("");
                a && a.toolOption && !a.goldOption && a.tools.length < 1 && (t = A("PKWMTT.GAMELIST.TICKET")), this.setCurrencyValue(this.page0Label[3], t)
            }
            this.page0Label[4].string = this.getStructure(), this.page0Label[5].string = B.ThousandPointFormat(B.DisplayGold(e.StartingCoins)), this.page0Label[6].string = this._mttHallInfo.ReentryLimit.toString();
            let a = P.getFullDescriptionMttDetail(this._mttHallInfo.Desc, this._mttHallInfo.DescI18N);
            this.eventDetailRT.node.parent.active = a.length > 0, this.eventDetailRT.getComponent(I).setText(a, !0), this.eventDetailRT.maxWidth = this.eventDetailRT.node.parent.getComponent(g).width - 25, this.eventDetailRT.node.parent.parent.getComponentInChildren(s).node.active = "WPT" === this._mttHallInfo.DisplayTag
        }
        updatePagePlayers() {
            this.updatePageTwoLabel()
        }
        updatePageRewards() {
            this.setCurrencyValue(this.page1Label[0], B.ThousandPointFormat(+M.getFeeLabel(this._mttHallInfo.GamePot))), this.setupBounty(), this.updateRewardLabels(), this.page1Label[2].string = this._mttHallInfo.InTheMoney.toString()
        }
        updateImmediately() {
            var t;
            if (!S.appConfig.isLandscapeLayout) return;
            let e = cc_mtt.vv.DataManager.getNow();
            this.updateAbstract(e), this.updatePageDetails(e), this.updatePageTwoLabel(), this.updatePagePlayers(), this.updatePageRewards(), this.updatePageTables(), this.addTuplesInTable(), this._mttHallInfo.TournamentId == z.LastSelectedTournamentId && z.lastSelectedTournamentListItem && z.lastSelectedTournamentListItem._tupleInfo && this._mttHallInfo.TournamentId == (null == (t = z.lastSelectedTournamentListItem._tupleInfo) || null == (t = t.Detail) ? void 0 : t.Id) && (z.lastSelectedTournamentListItem._tupleInfo.Joined = this._mttHallInfo.JoinedCount, z.lastSelectedTournamentListItem._tupleInfo.Players = this._mttHallInfo.PlayersCount, z.lastSelectedTournamentListItem._tupleInfo.RegisteredCount = this._mttHallInfo.MultiFlightLevel > 0 ? this._mttHallInfo.PlayersCount : this._mttHallInfo.SignupCount, z.lastSelectedTournamentListItem._tupleInfo.GamePool = this._mttHallInfo.GamePot, z.lastSelectedTournamentListItem._tupleInfo.BountyPool = this._mttHallInfo.BountyPot, this.scheduleOnce((() => {
                var t, e, a;
                null == (t = z.lastSelectedTournamentListItem) || t.updatePrizePool(), null == (e = z.lastSelectedTournamentListItem) || e.updateCardEntrants(z.lastSelectedTournamentListItem._gameId), null == (a = z.lastSelectedTournamentListItem) || a.showSignUpTag(!0)
            }), 0))
        }
        setupBounty() {
            this.page1Label[1].node.parent.active && (this.page1Label[1].string = B.ThousandPointFormat(+M.getFeeLabel(this._mttHallInfo.BountyPot))), this.page1Label[1].node.parent.active = this._mttHallInfo.TournamentMode != N.commonProto.TOURNAMENT_MODE.NORMAL
        }
        updateRewardLabels() {
            this.page1Label[4].node.active = this.page1Label[1].node.parent.active, this.page1TableAttributes[1].node.active = this._mttHallInfo.PrizeMode == R.MTT_PRIZE_MODE.MTT_PRIZE_CONFIG_MODE_DEFAULT
        }
        updatePageTables() {
            this.page3Label[0].string = `${this._mttHallInfo.TablesDetail.length}`, this.page3Label[1].string = `${this._mttHallInfo.Seats}`
        }
        checkReachMultiFlightFinal() {
            let t = cc_mtt.vv.DataManager.getNow().getTime() >= 1e3 * this._mttHallInfo.FinalStartTime;
            return this._mttHallInfo.MultiFlightLevel > 0 && (this._mttHallInfo.FinalPause || !this._mttHallInfo.FinalPause && t)
        }
        updateAbstract(t) {
            if (!this._mttHallInfo) return;
            if (this._levelRised = this._mttHallInfo.CurrentLevel > parseInt(this.abstractLabels[1].string), this.abstractLabels[0].string = cc_mtt.vv.DataManager.i18DataFromServer(this._mttHallInfo.TournamentName, this._mttHallInfo.TournamentNameI18N), this.checkReachMultiFlightFinal()) {
                let t = new Date(1e3 * parseInt(this._mttHallInfo.FinalStartTime.toString())),
                    [e, a] = M.handleTimeLabel(t),
                    [i, n, l] = M.handleDateLabel(t);
                this.setDateTime(i, n, l, e, a)
            } else if (P.checkHasTournamentStartTime(this._mttHallInfo)) {
                let [t, e] = M.handleTimeLabel(this._mttHallInfo.StartingTime), [a, i, n] = M.handleDateLabel(this._mttHallInfo.StartingTime);
                this.setDateTime(a, i, n, t, e)
            } else this._mttHallInfo.PlayOnJoint > 0 ? this.setDateTimeWithText(A("MTT_HALL.FULL_TO_PLAY_PKW")) : this.setDateTimeWithText("");
            let e = t.getTime() < this.startingTime.getTime();
            this.setNotStartedLabel(e);
            const a = P.getEntrantsCountDetail(this._mttHallInfo, this.startingTime),
                i = P.getPlayOnJoinDetail(this._mttHallInfo, this.startingTime);
            e ? (this.abstractLabels[1].string = this.getCurrentLevelNotStartedString(), this.abstractLabels[3].string = a.toString() + (i > 0 ? "/" + i : "")) : (this.abstractLabels[1].string = this._mttHallInfo.CurrentLevel.toString(), this.abstractLabels[3].string = a.toString() + "/" + i);
            let n = this._mttHallInfo.GamePot + this._mttHallInfo.BountyPot;
            this.setCurrencyValue(this.abstractLabels[4], B.ThousandPointFormat(B.DisplayGold(n))), this.abstractLabels[5].string = this._mttHallInfo.LevelStopSignup > 1 && this._mttHallInfo.MultiFlightLevel <= 0 ? T.formatStr(A("FORMAT.UNIT.LEVELS"), this._mttHallInfo.LevelStopSignup - 1) : "-", this.updateNextBreak(t)
        }
        setCurrencyValue(t, e) {
            let a = t.getComponent(L);
            if (a) {
                const t = this._hallScript._mttPage.getComponent(W).currencySwitcherEnable;
                a.updateVal(e, this.tournamentData.Detail.currency, t, this.tournamentData.Detail.DisplayCurrency, this.tournamentData.CurrencyRate || this._mttHallInfo.Rate)
            } else t.string = e
        }
        getCurrentLevelNotStartedString() {
            return `- ${A("MTT_HALL.CURRENT_LEVEL_NOT_STARTED")}`
        }
        setInfo(t = null, e = this.getMttHallPageByIdx()) {
            var a;
            if (!t || !t.TournamentDetail) return void cc_mtt.vv.ConsoleLog.log("MttHall::NoTournamentDetail", t);
            S.appConfig.getWalletConfig().checkAndSetGameTableCurrency(t.TournamentDetail), this.mttCancelOrEnd = !1, this.setMttInfo(t), t.timeStampLateReg && this.updateMttHallInfoTimeStampLageReg(t.timeStampLateReg);
            const {
                HoldemBlindsConfig: i,
                PPBasePotConfig: n,
                PrizeMoney: l,
                PrizeTools: s,
                PlayersDetail: o,
                TablesDetail: r,
                CelebrityList: h,
                ...u
            } = this._mttHallInfo;
            cc_mtt.vv.ConsoleLog.log("mttinfo update page", e), cc_mtt.vv.ConsoleLog.log("mttinfo", u), cc_mtt.vv.ConsoleLog.log("mttinfo prize", {
                PrizeMoney: l,
                PrizeTools: s
            }), cc_mtt.vv.ConsoleLog.log("mttinfo player", {
                PlayersDetail: o,
                CelebrityList: h
            }), cc_mtt.vv.ConsoleLog.log("mttinfo table", r), this.setUpdatedPageTimestamp(e, this._mttHallInfo.TimeStamp), this._mttHallInfo.TournamentName = cc_mtt.vv.DataManager.i18DataFromServer(this._mttHallInfo.TournamentName, this._mttHallInfo.TournamentNameI18N);
            let m = this._mttHallInfo.PlayOnJoint > 0 && this._mttHallInfo.Status <= N.commonProto.MTT_GAME_STATUS.NOT_STARTED;
            this.startingTime = m ? new Date(2100, 1, 1) : this._mttHallInfo.StartingTime, this.gameDuration = Number(t.TournamentDetail.TotalPauseTime), this._mttHallInfo.RebuyParam && (this.rebuyParam = JSON.parse(this._mttHallInfo.RebuyParam), cc_mtt.vv.ConsoleLog.log("mttinfo rebuyParam", this.rebuyParam));
            let c = cc_mtt.vv.DataManager.getNow();
            this.updateAbstract(c), this.updatePageDetails(c), this.updatePagePlayers(), this.updatePageRewards(), this.updatePageTables(), this.addTuplesInTable(e), this._mttHallInfo.TournamentId == z.LastSelectedTournamentId && z.lastSelectedTournamentListItem && z.lastSelectedTournamentListItem._tupleInfo && this._mttHallInfo.TournamentId == (null == (a = z.lastSelectedTournamentListItem._tupleInfo) || null == (a = a.Detail) ? void 0 : a.Id) && (z.lastSelectedTournamentListItem._tupleInfo.Joined = this._mttHallInfo.JoinedCount, z.lastSelectedTournamentListItem._tupleInfo.Players = this._mttHallInfo.PlayersCount, z.lastSelectedTournamentListItem._tupleInfo.RegisteredCount = this._mttHallInfo.MultiFlightLevel > 0 ? this._mttHallInfo.PlayersCount : this._mttHallInfo.SignupCount, z.lastSelectedTournamentListItem._tupleInfo.GamePool = this._mttHallInfo.GamePot + this._mttHallInfo.BountyPot, z.lastSelectedTournamentListItem._tupleInfo.BountyPool = this._mttHallInfo.BountyPot, this.scheduleOnce((() => {
                var t, e, a;
                null == (t = z.lastSelectedTournamentListItem) || t.updatePrizePool(), null == (e = z.lastSelectedTournamentListItem) || e.updateCardEntrants(z.lastSelectedTournamentListItem._gameId), null == (a = z.lastSelectedTournamentListItem) || a.showSignUpTag(!0)
            }), 0))
        }
        updateDetailsLabels() {
            if (!this._mttHallInfo) return;
            let t = cc_mtt.vv.DataManager.getNow();
            this.updateAbstract(t), this.updatePageDetails(t), this.updateLang()
        }
        resetMttHall() {
            this.unscheduleAllCallbacks(), this.onChangedPage(0, !0), this.onChangeSubHeader(0), this.controlCounter(!1), this.resetTimer(), this.resetPageTables(), this.changeSignUpButtonStatus(G.RESET), this.gameClockLabel.string = "", this._popupIsCalled = !1, this.startingTime = null, this.loader.active && this.removeSignUpLoading(null, !0), this._autoEnterCalled = !1, this._mttHallInfo = null, c(this._blindPotTable) && this._blindPotTable.getComponent(U).onBackClicked(), this.setUpdatedPageTimestamp(O.ALL, 0)
        }
        onBlindPotTableClicked() {
            this._hallScript.controlHallBlockLayer(!0, this.name), this._hallScript.showLoading(), this._blindPotTable || (this._blindPotTable = _(this.blindPotTablePrefab), this.setBlindPotTableParent(this._blindPotTable), this._blindPotTable.getComponent(J).parentNode = this.node);
            let t = this._blindPotTable.getComponent(J);
            t.tableTitle.string = this.mttBlindPotTableTitle.string, t.levelDuration = this._mttHallInfo ? this._mttHallInfo.LevelTime : 0;
            let e = cc_mtt.vv.DataManager.getNow() < this.startingTime.getTime() ? 0 : this._mttHallInfo ? this._mttHallInfo.CurrentLevel : 0;
            this._blindConfig.length > 0 && t.setPage(0, this._blindConfig, e, this._mttHallInfo ? this._mttHallInfo.LevelStopSignup : 0, this._mttHallInfo ? this._mttHallInfo.BlindHands : 0, (this._mttHallInfo ? this._mttHallInfo.GameMode : 0) == N.commonProto.MTT_GAME_MODE.SHORT_DECK), S.appConfig.isLandscapeLayout || (this._blindPotTable.getComponent(b).slideView.node.active = !1), this._hallScript.hidLoading((() => {
                this.showBlindPotTable()
            }))
        }
        onReturnClicked() {
            if (!c(this.node) || !this._showing) return;
            this._showing = !1, d.isNative && d.os === d.OS.ANDROID && H.getInstance().removeBackFunction("MttHall"), cc_mtt.vv.DataManager.currentResultId = 0, cc_mtt.vv.ConsoleLog.log("mttHall:onReturnClicked"), this.pageThreeFinalPlayerPage.unscheduleAllCallbacks(), this._hallScript.controlHallBlockLayer(!0, this.name);
            let t = this._returnConfig && this._returnConfig.returnPage ? this._returnConfig.returnPage : this.node.parent.getChildByName("mtt_prefab");
            this._hallScript.movePageToRight(this.node, t, (() => {
                var t, e;
                (this.resetMttHall(), cc_mtt.vv.DataManager.webPlatform == N.commonProto.PLATFORM.PKW && D.instance.sendCCJS("goto_list"), (null == (t = this._returnConfig) ? void 0 : t.returnCallback) instanceof Function) && (null == (e = this._returnConfig) || e.returnCallback());
                this._hallScript.controlHallBlockLayer(!1, this.name)
            })), v.instance && v.instance.setBackButtonAction(null)
        }
        onClickWPTTerms() {
            this._hallScript.showLoading(), this._wptTerms || (this._wptTerms = _(this.wptTermsPrefab), this._wptTerms.parent = this._hallScript.layers[0]), this._hallScript.hidLoading((() => {
                this._hallScript.movePageFromRight(this._wptTerms, this.node, !1, !1, (() => {
                    this._wptTerms.getComponent(K).setPage(this.node)
                }))
            }))
        }
        onClickHintsReEntries() {
            this.hintsLayer.active = !this.hintsLayer.active, this.hintsNode.active = !this.hintsNode.active
        }
        setSubHeaderLocalizedLabel(t, e) {
            this.subHeader[t].getComponentInChildren(Y).dataID = e
        }
        adaptWidget() {
            C.instance.cv.resMgr.adaptWidget(this.node, !0, !1)
        }
        setDateTimeWithText(t) {
            this.abstractLabels[2].string = t
        }
        setDateTime(t, e, a, i, n) {
            this.abstractLabels[2].string = `${t}-${e}-${a} ${i}:${n}`
        }
        synchSwitchCurrencyButton(t = !1) {
            if (this.currencySwitcher && this.currencySwitcher.node.active) {
                let e = this.currencySwitcher.getComponent(p);
                e && (e.isChecked = t)
            }
        }
        switchCurrency(t) {
            let e = !1;
            this.currencySwitcher && this.currencySwitcher.node.active && (e = this.currencySwitcher.btnState === f.pressed), this.mttPrefab.syncSwitchCurrencyButton(e), this.updateGameDetailsCurrency(e)
        }
        updateGameDetailsCurrency(t = !1) {
            this.updateNodeConvertCurrency(this.abstractLabels[4], t), this.updateNodeConvertCurrency(this.page0Label[3], t), this.updateNodeConvertCurrency(this.page1Label[0], t), this.pageScrollViews[0].getComponent(k).setConvertCurrency(t)
        }
        updateNodeConvertCurrency(t, e = !1) {
            let a = t.getComponent(L);
            a && (a.shouldConvert = e)
        }
        getConvertCurrencySwitcher() {
            return this._hallScript._mttPage.getComponent(W).currencySwitcherEnable
        }
        setNotStartedLabel(t) {}
        setBlindPotTableParent(t) {
            t.parent = this._hallScript.layers[0]
        }
        showBlindPotTable() {
            this._hallScript.movePageFromRight(this._blindPotTable, this.node, !1, !1, (() => {
                this._hallScript.controlHallBlockLayer(!1, this.name)
            }))
        }
    }).prototype, "containerWidget", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(ht.prototype, "abstractLabels", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ct = e(ht.prototype, "page0LabelTitles", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Tt = e(ht.prototype, "hintsBtn", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(ht.prototype, "hintsLayer", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(ht.prototype, "hintsNode", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(ht.prototype, "pageThreeTableLayout", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(ht.prototype, "pageThreeFinalPlayerLayout", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(ht.prototype, "pageThreeFinalPlayerPage", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(ht.prototype, "wptTermsPrefab", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(ht.prototype, "eventDetailRT", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = ht)) || rt));
    i._RF.pop()
}