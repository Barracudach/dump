import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./AutoResizeLabel.js";
import * as f from "./ThemeSystem.js";
import * as d from "./commonProto.mjs_cjs=&original=.js";
import * as y from "./MttHall.js";
import * as b from "./FormatParser.js";
import * as M from "./CurrencyValue.js";
import * as S from "./CurrencyValue.js";
import * as _ from "./CurrencyValue.js";
import * as I from "./Enum.js";
import * as v from "./cv.js";
import * as C from "./Translator.js";
import * as L from "./MttItemHelper.js";
import * as E from "./ColorsystemLobbyV2.js";
import * as B from "./ColorSystemType.js";
import * as P from "./ColorSystemType.js";
import * as D from "./DesignSystemButtonBase.js";
import * as G from "./MttGameOverviewTip.js";
import * as A from "./MttGameOverviewListItem.js";
import * as H from "./MttItemRenderHelper.js";
import * as R from "./HallMttDetailLandscapeRenderer.js";
import * as V from "./LobbyTools.js";
import * as N from "./mttconfig.js";
import * as w from "./MttGameItemColorIndentifier.js";
import * as O from "./MttGameItemPrizepoolValGradient.js";
import * as z from "./ButtonTooltip.js";
import * as F from "./HallPokerController.js";

function main() {
    var U, k, $, W, x, K, J, j, Y, X, q, Q, Z, tt, et, it, nt, at, st, rt, ot, lt, ut, ht, mt, pt, ct, Tt, gt, ft, dt, yt, bt, _t, St, Mt, It, vt, Ct, Lt, Et, Bt, Pt, Dt, Gt, At, Ht, Rt, Vt, Nt, wt, Ot, zt, Ft, Ut, kt, $t, Wt, xt, Kt, Jt;
    n._RF.push({}, "2c1a998p7VNdoV7iXwM04ck", "MttGameListOverviewCompLandscape", void 0);
    const {
        ccclass: jt,
        property: Yt
    } = h;
    t("MttGameListOverviewCompLandscape", (U = jt("MttGameListOverviewCompLandscape"), k = Yt(O), $ = Yt(g), W = Yt(b), x = Yt(f), K = Yt(f), J = Yt(a), j = Yt(G), Y = Yt(G), X = Yt(a), q = Yt(G), Q = Yt(a), Z = Yt(G), tt = Yt(a), et = Yt(a), it = Yt(s), nt = Yt(b), at = Yt(G), st = Yt(G), rt = Yt(r), ot = Yt(s), lt = Yt(G), ut = Yt(G), ht = Yt(s), mt = Yt(D), pt = Yt(o), ct = Yt([l]), Tt = Yt([l]), gt = Yt(a), ft = Yt(u), U((bt = e((yt = class extends H {
        constructor(...t) {
            super(...t), this.mvcView = null, this.TAG = "MttGameListOverviewLandscape", i(this, "btnToolTipBounty", bt, this), i(this, "mttNameLabel", _t, this), i(this, "prizePoolValue", St, this), i(this, "statusBg", Mt, this), i(this, "statusValueTheme", It, this), i(this, "statusValue", vt, this), i(this, "startTimeGroup", Ct, this), i(this, "estimatedDurationGroup", Lt, this), i(this, "buyInValue", Et, this), i(this, "startChipsGroup", Bt, this), i(this, "blindIntervalValue", Pt, this), i(this, "currentLevelGroup", Dt, this), i(this, "currentLevelValue", Gt, this), i(this, "currentLevelInfoValue", At, this), i(this, "overlayGroup", Ht, this), i(this, "overlayValue", Rt, this), i(this, "regOpenGroup", Vt, this), i(this, "bountyGroup", Nt, this), i(this, "bountyTipToggle", wt, this), i(this, "bountyTipLocation", Ot, this), i(this, "tableTypeGroup", zt, this), i(this, "gameTypeGroup", Ft, this), i(this, "loadingContentNode", Ut, this), i(this, "tipComp", kt, this), i(this, "titleBgSprite", $t, this), i(this, "titleBgSpriteFrames", Wt, this), i(this, "pageBgSpriteFrames", xt, this), i(this, "gameClockLabel", Kt, this), i(this, "unregisterPopupPrefab", Jt, this), this.lateRegLeftSecTimeStamp = 0, this.timerStopResumeTime = 0, this.data = null, this.tournamentData = null, this._mttHallInfo = null, this._blindConfig = [], this._currentBaseCurrency = _.None, this._currentDisplayCurrency = _.None, this._timeDifference = 0, this._mttPrefab = null, this.convertCurrency = !1, this.myJoinStatus = 0, this.unregisterPopup = null, this.cacheMTTName = "", this._startingTime = null
        }
        get holdemBlindsConfig() {
            return this._blindConfig
        }
        get isMttStarted() {
            return this._mttHallInfo && (this._mttHallInfo.Status != F.commonProto.MTT_GAME_STATUS.NOT_STARTED || 0 == this._mttHallInfo.PlayOnJoint && cc_mtt.vv.DataManager.getNow().getTime() >= this._mttHallInfo.StartingTime.getTime())
        }
        get startingTime() {
            return m(this._startingTime) || (this._startingTime = this.getStartingTimeIsInFuture()), this._startingTime
        }
        set startingTime(t) {
            this._startingTime = t
        }
        getStartingTimeIsInFuture() {
            return new Date(2100, 1, 1)
        }
        onLoad() {
            this.mttNameLabel.string = "", this.setEmpty(), R.registerMessage(V.mttPlayerTableEvent, this.onMttPlayerTableEvent.bind(this), this), R.registerMessage(z, this.checkToShowCacheDetails.bind(this), this), R.registerMessage(S.IncreaseBlindLevel, this.onIncreaseBlindLevel.bind(this), this)
        }
        onIncreaseBlindLevel(t) {
            this._mttHallInfo && this._mttHallInfo.TournamentId != t.TournamentId || this.setCurrentLevelDisplay(t.CurrentLevel)
        }
        start() {
            this.tipComp.setCallback(this.onTipBack.bind(this))
        }
        onDestroy() {
            R.unregisterMessage(V.mttPlayerTableEvent, this), R.unregisterMessage(z, this), R.unregisterMessage(S.IncreaseBlindLevel, this)
        }
        onMttPlayerTableEvent(t) {
            var e;
            const i = t.getUserData();
            null == (e = this.mvcView) || null == e.onClickPlayerTableItem || e.onClickPlayerTableItem((null == i ? void 0 : i.tableId) || 0, (null == i ? void 0 : i.playerId) || 0)
        }
        checkToShowCacheDetails(t) {
            this.tournamentData && this._mttHallInfo && this.data && this._render(this.tournamentData, this._mttHallInfo, this.data)
        }
        _render(t, e, i, n) {
            this.data = i, this.tournamentData = t, this._mttHallInfo = e, this._blindConfig = e.HoldemBlindsConfig, this._currentBaseCurrency = this._currentDisplayCurrency = I.appConfig.getWalletConfig().convertStringToCurrencyType(e.DisplayCurrency), this.updateTimeDifference(), I.MessageCenter.send(I.Enum.MessageCenterAction.onRefreshJoinedTournaments), C.checkTableToUpdateJoinStatus(), this.updateLang(), this._mttHallInfo && cc_mtt.vv.ConsoleLog.log(`${this._mttHallInfo.TournamentName} (${this._mttHallInfo.TournamentId}, initMttHall): ${this.myJoinStatus}_${this._mttHallInfo.Status}_${this._mttHallInfo.CurrentLevel}_${this._mttHallInfo.LeftRiseBlindTime}`), this.node.active = !0, this.updateView()
        }
        updateView() {
            var t;
            this.lateRegLeftSecTimeStamp = C.getStopSignUpTimestampFromDetail(this._mttHallInfo), this.timerStopResumeTime = null != (t = this.tournamentData) && t.willPlayStartTime ? this.tournamentData.willPlayStartTime : -1, this.setMttName(cc_mtt.vv.DataManager.i18DataFromServer(this._mttHallInfo.TournamentName, this._mttHallInfo.TournamentNameI18N)), this.setBanner(), this.setPrizePool(this.data.prizePool, this._mttHallInfo.DisplayCurrency), this.updateMttStatus(), this.setStartTime(this._mttHallInfo.PlayOnJoint <= 0 ? this._mttHallInfo.StartingTime : null), this.setEstimatedDuration(this._mttHallInfo.EstimatedDuration), this.setBuyIn(this._mttHallInfo.RegFee, this._mttHallInfo.SrvFee, this._mttHallInfo.BountyFee), this.setStartChip(C.getStartingCoinsMultiday(this._mttHallInfo.MultiFlightLevel, this._mttHallInfo.StartingCoins)), this.updateBlindInterval(), this.setCurrentLevelDisplay(this.isMttStarted ? this._mttHallInfo.CurrentLevel : 0), this.setOverlay(this._mttHallInfo.Overlay, this._mttHallInfo.DisplayCurrency), this.updateBounty(), this.setTableType(this._mttHallInfo.Seats), this.setGameType(this._mttHallInfo.GameMode), this.setContentTooltipBounty()
        }
        setContentTooltipBounty() {
            this.btnToolTipBounty.setInfoDialogText(A.getBountyTipText(this._mttHallInfo))
        }
        getAllowSignupMin() {
            return this.tournamentData && this.tournamentData.Detail.Status == F.commonProto.MTT_GAME_STATUS.NOT_STARTED && 0 == this.tournamentData.Detail.PlayOnJoint && this.tournamentData.Detail.AllowSignupHours > 0 ? this.tournamentData.Detail.AllowSignupHours : 0
        }
        getSignUpPopup() {
            return null == this.buyInPopup && (this.buyInPopup = p(this.buyInPopupPrefab), this.buyInPopup.parent = d.instance.getHallScene().bottomView.parent, this.buyInPopup.active = !1), this.buyInPopup
        }
        getUnregisterPopup() {
            return null == this.unregisterPopup && (this.unregisterPopup = p(this.unregisterPopupPrefab), this.unregisterPopup.parent = d.instance.getHallScene().bottomView.parent, this.unregisterPopup.active = !1), this.unregisterPopup
        }
        setMttName(t) {
            t != this.cacheMTTName && (this.cacheMTTName = t, this.mttNameLabel.setString(t, !0))
        }
        setBanner() {
            let t = C.getPageType(this._mttHallInfo),
                e = this._mttHallInfo.Banners[0] || F.commonProto.MttBanner.Banner_None;
            if (this.titleBgSprite.node.active = !0, t != N.None) this.titleBgSprite.spriteFrame = this.pageBgSpriteFrames[t];
            else switch (e) {
                case F.commonProto.MttBanner.CNYBanner:
                    this.titleBgSprite.spriteFrame = this.titleBgSpriteFrames[1];
                    break;
                case F.commonProto.MttBanner.BountyBanner:
                    this.titleBgSprite.spriteFrame = this.titleBgSpriteFrames[2];
                    break;
                case F.commonProto.MttBanner.WeeklyGoldenBanner:
                    this.titleBgSprite.spriteFrame = this.titleBgSpriteFrames[3];
                    break;
                case F.commonProto.MttBanner.WPTBanner:
                    this.titleBgSprite.spriteFrame = this.titleBgSpriteFrames[4];
                    break;
                default:
                    this.titleBgSprite.spriteFrame = this.titleBgSpriteFrames[0]
            }
        }
        setPrizePool(t, e, i = "") {
            var n;
            this.prizePoolValue.updateVal(y.ThousandPointFormat(t), e, this.convertCurrency, i, this._mttHallInfo.Rate);
            const a = null == (n = this.prizePoolValue.node) ? void 0 : n.getComponent(w);
            m(a) && (a.enabled = !1, a.enabled = !0)
        }
        setStartTime(t) {
            t ? (this.startTimeGroup.node.active = !0, this.startTimeGroup.setValue(C.showDateOrTime(t, !0, !0))) : this.startTimeGroup.node.active = !1
        }
        setEstimatedDuration(t) {
            t ? (this.estimatedDurationGroup.node.active = !0, this.estimatedDurationGroup.setValue(this.getRemainSecWithString(t))) : this.estimatedDurationGroup.node.active = !1
        }
        setBuyIn(t, e, i) {
            this.buyInValue.string = `${this.getExchangeWithSymbol(t)} + ${this.getExchangeWithSymbol(e)}`, i > 0 && (this.buyInValue.string = `${this.getExchangeWithSymbol(t-i)} + ${this.getExchangeWithSymbol(i)} + ${this.getExchangeWithSymbol(e)}`), this._mttHallInfo.MultiFlightLevel > 0 && (this.buyInValue.string = "N/A")
        }
        setStartChip(t) {
            if (t) {
                this.startChipsGroup.node.active = !0;
                const e = y.ThousandPointFormat(this.convertChipToBB(t, this._mttHallInfo.CurrentLevel), 1);
                this.startChipsGroup.setValue(`${y.ThousandPointFormat(t)} (${e} BB)`)
            } else this.startChipsGroup.node.active = !1
        }
        updateBlindInterval() {
            if (this._mttHallInfo.BlindHands > 0) this.blindIntervalValue.string = c.formatStr(v("PKWMTT.OVERVIEW.BLIND_HAND"), this._mttHallInfo.BlindHands);
            else {
                let t = this._mttHallInfo.LevelTime / 60;
                this.blindIntervalValue.string = y.FloorToDecimal(t) + v("TIME.MINUTE_V2")
            }
        }
        setOverlay(t, e, i = "") {
            var n;
            t ? (this.overlayGroup.active = !0, this.overlayValue.updateVal(y.ThousandPointFormat(t), e, this.convertCurrency, i, this._mttHallInfo.Rate)) : this.overlayGroup.active = !1;
            const a = null == (n = this.overlayValue.node) ? void 0 : n.getComponent(w);
            m(a) && (a.enabled = !1, a.enabled = !0)
        }
        setCurrentLevelDisplay(t) {
            this.currentLevelValue.string = `${t} ${v("TOURNAMENT_DETAIL.LEVEL")}`;
            let e = this.getHoldemBlindsByLevel(t);
            if (e && t > 0) {
                this.currentLevelGroup.node.active = !0;
                let t = v("TOURNAMENT_DETAIL.TAB.TOURNAMENT_DETAIL.LEVEL_LIST.HEADER.BLIND"),
                    i = v("TOURNAMENT_DETAIL.TAB.TOURNAMENT_DETAIL.LEVEL_LIST.HEADER.ANTE"),
                    n = e.SmallBlind,
                    a = e.BigBlind,
                    s = e.Ante;
                C.isDetailShortDeck(this._mttHallInfo) ? this.currentLevelGroup.setValue(`${t} ${s} ${i} ${s}`) : this.currentLevelGroup.setValue(`${t} ${n} / ${a} ${i} ${s}`)
            } else this.currentLevelGroup.node.active = !1
        }
        setTableType(t) {
            t ? (this.tableTypeGroup.node.active = !0, this.tableTypeGroup.setValue(`${t}${R.getSpaceBetweenNumberAndText()}${v("MTT_SIGN_UP.PEOPLE_PER_TABLE").toLowerCase()}`)) : this.tableTypeGroup.node.active = !1
        }
        setGameType(t) {
            let e = "";
            switch (t) {
                case F.commonProto.MTT_GAME_MODE.NLH:
                    e = v("MTT_GAME_MODE.NLH");
                    break;
                case F.commonProto.MTT_GAME_MODE.OMAHA:
                    e = v("MTT_GAME_MODE.OMAHA");
                    break;
                case F.commonProto.MTT_GAME_MODE.SHORT_DECK:
                    e = v("MTT_GAME_MODE.SHORT_DECK");
                    break;
                case F.commonProto.MTT_GAME_MODE.PP:
                    e = v("MTT_GAME_MODE.PP");
                    break;
                default:
                    return void(this.gameTypeGroup.node.active = !1)
            }
            this.gameTypeGroup.node.active = !0, this.gameTypeGroup.setValue(e)
        }
        convertChipToBB(t, e) {
            const i = this.getBigBlind(e);
            return i > 0 ? y.RoundToDecimal(t / i, 2) : -1
        }
        getBigBlind(t) {
            const e = this.getHoldemBlindsByLevel(t);
            if (e) {
                return C.isDetailShortDeck(this._mttHallInfo) ? e.Ante : e.BigBlind
            }
            return -1
        }
        getHoldemBlindsByLevel(t) {
            let e = t - 1;
            return this.holdemBlindsConfig && this.holdemBlindsConfig.length > 0 ? (e = e < 0 ? 0 : e >= this.holdemBlindsConfig.length ? this.holdemBlindsConfig.length - 1 : e, this.holdemBlindsConfig[e]) : null
        }
        updateBounty() {
            let t = this._mttHallInfo.TournamentMode;
            if (t == F.commonProto.TOURNAMENT_MODE.NORMAL) this.bountyGroup.node.active = !1;
            else {
                this.bountyGroup.node.active = !0;
                const e = A.getBountyString(t, this.getCurrencySymbol(), this._mttHallInfo);
                this.bountyGroup.setValue(e)
            }
        }
        setRegOpen(t) {
            t > 0 ? (this.regOpenGroup.node.active = !0, this.regOpenGroup.setValue(c.formatStr(v("PKWMTT.OVERVIEW.REGISTRATION_OPENS_VAL"), y.FloorToDecimal(t) + v("TIME.MINUTE_V2")))) : this.regOpenGroup.node.active = !1
        }
        updateTimeDifference() {
            this._timeDifference = (cc_mtt.vv.DataManager.getNow().getTime() - this.startingTime.getTime()) / 1e3
        }
        updateLang() {}
        updateMttStatus() {
            if (this.unschedule(this.updateMttStatus_Registering), this.unschedule(this.updateMttStatus_LateReg), this.unschedule(this.updateMttStatus_Paused), C.isDetailRebuyState(this._mttHallInfo)) this.statusValue.string = v("GAME_LIST.TOURNAMENT_STATUS_REBUY"), this.setMttStatusColor(L.ListItem_Mtt_Bg_Text_LateReg);
            else if (C.isDetailMoreBuyState(this._mttHallInfo)) this.statusValue.string = v("PKWMTT.GAMELIST.WATCH") + ` (${this._mttHallInfo.PlayingPlayersCount} / ${this._mttHallInfo.SignupCount})`, this.setMttStatusColor(L.ListItem_Mtt_Bg_Text_Running);
            else switch (this._mttHallInfo.Status) {
                case F.commonProto.MTT_GAME_STATUS.NOT_STARTED:
                    this.getAllowSignupDate() ? (this.statusValue.string = v("PKWMTT.GAMELIST.ANNOUNCED"), this.setMttStatusColor(L.ListItem_Mtt_Text)) : (this.statusValue.string = v("PKWMTT.GAMELIST.SIGNING_UP_INTEGRATE"), this.setMttStatusColor(L.ListItem_Mtt_Bg_Text_Register));
                    break;
                case F.commonProto.MTT_GAME_STATUS.STARTED:
                    this.updateMttStatus_LateReg(), this.schedule(this.updateMttStatus_LateReg, 1, T.REPEAT_FOREVER), this.setMttStatusColor(L.ListItem_Mtt_Bg_Text_LateReg);
                    break;
                case F.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                    this.statusValue.string = v("PKWMTT.GAMELIST.WATCH") + ` (${this._mttHallInfo.PlayingPlayersCount} / ${this._mttHallInfo.SignupCount})`, this.setMttStatusColor(L.ListItem_Mtt_Bg_Text_Running);
                    break;
                case F.commonProto.MTT_GAME_STATUS.STARTED + 100:
                case F.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
                    this.statusValue.string = v("GAME_LIST.TOURNAMENT_STATUS_PAUSE_INTEGRATE"), this.setMttStatusColor(L.ListItem_Mtt_Text);
                    break;
                case F.commonProto.MTT_GAME_STATUS.ENDED:
                    this.statusValue.string = v("PKWMTT.GAMELIST.GAME_ENDED"), this.setMttStatusColor(L.ListItem_Mtt_Text)
            }
        }
        setMttStatusColor(t) {
            this.statusBg.setColorScheme(E.LobbyV2, t), this.statusValueTheme.setColorScheme(E.LobbyV2, t)
        }
        getAllowSignupDate() {
            let t = C.getAllowSignupDate(this.tournamentData);
            return t && C.getServerNow().getTime() < t.getTime() ? t : null
        }
        updateMttStatus_Registering() {
            let t = C.timeStampToTimeLeftSec(this._mttHallInfo.StartingTime.getTime());
            t < 0 && (t = 0), this.statusValue.string = v("PKWMTT.GAMELIST.START_IN") + ": " + this.mttStatusRemainTimeStr(t), t <= 0 && this.unschedule(this.updateMttStatus_Registering)
        }
        updateMttStatus_LateReg() {
            let t = C.timeStampToTimeLeftSec(this.lateRegLeftSecTimeStamp);
            t < 0 && (t = 0), this.statusValue.string = v("PKWMTT.OVERVIEW.LATE_REG") + " " + this.mttStatusRemainTimeStr(t), t <= 0 && this.unschedule(this.updateMttStatus_LateReg)
        }
        updateMttStatus_Paused() {
            let t = "";
            if (-1 === this.timerStopResumeTime) t = v("PKWMTT.GAMELIST.TBD"), this.unschedule(this.updateMttStatus_Paused);
            else {
                let e = this.getTimerResumeTimeSec();
                e < 0 && (e = 0);
                t = C.showRemainTime(!0, e), 0 == e && this.unschedule(this.updateMttStatus_Paused)
            }
            this.statusValue.string = v("PKWMTT.GAMELIST.RESUME_IN") + ": " + t
        }
        mttStatusRemainTimeStr(t) {
            return "(" + C.showRemainTime(!0, t, !0) + ")"
        }
        getRemainSecWithString(t) {
            let {
                hr: e,
                min: i,
                sec: n
            } = C.splitSecond(t);
            return e > 0 ? `${e}${v("TIME.HOUR")} ${i}${v("TIME.MINUTE")}` : `${i}${v("TIME.MINUTE")}`
        }
        getExchangeWithSymbol(t) {
            return this.getCurrencySymbol() + this.getExchange(t)
        }
        getExchange(t) {
            const e = this.convertCurrency ? I.appConfig.getWalletConfig().defaultCurrency.type : this._currentDisplayCurrency;
            return I.StringTools.toFixedAsString(I.currencyManager.convert(this._currentBaseCurrency, e, t, this._mttHallInfo.Rate), I.currencyManager.defaultRoundDecimal)
        }
        getCurrencySymbol() {
            const t = this.convertCurrency ? I.appConfig.getWalletConfig().defaultCurrency.type : this._currentDisplayCurrency;
            return M[t].shortSymbol ? M[t].shortSymbol : M[t].symbol
        }
        mttStatusLevelStr() {
            return `(${v("TOURNAMENT_DETAIL.LEVEL")} ${this._mttHallInfo.CurrentLevel})`
        }
        getTimerResumeTimeSec() {
            return this.timerStopResumeTime && this.timerStopResumeTime > C.getServerNow().getTime() ? Math.floor(C.timeStampToTimeLeftSec(new Date(this.timerStopResumeTime).getTime())) : 0
        }
        setLoading(t = !0) {
            cc_mtt.vv.ConsoleLog.log(this.TAG, "setLoading", t), this.loadingBlocker && (this.loadingBlocker.active = t), t ? (this.showLoadingContent(!1), this.unschedule(this.showLoadingContent), this.scheduleOnce(this.showLoadingContent, 1)) : this.scheduleOnce((() => {
                this.startingTime ? this.updateGameClock(this._timeDifference) : this.gameClockLabel && (this.gameClockLabel.string = "-")
            }))
        }
        updateGameClock(t) {}
        showLoadingContent(t = !0) {
            this.loadingContentNode && (this.loadingContentNode.active = t)
        }
        setEmpty() {
            this.startTimeGroup.setValue("-"), this.setEstimatedDuration(null), this.buyInValue.string = "-", this.setStartChip(null), this.blindIntervalValue.string = "-", this.setCurrentLevelDisplay(0), this.setOverlay(null, ""), this.bountyGroup.node.active = !1, this.setTableType(null), this.setGameType(null), this.setActiveTipComp(!1)
        }
        setSignUpButtonColor(t) {
            if (this.signUpButton.interactable = t, !this.node.active || !this.signUpButton.node.active) return;
            const e = this.signUpButton.getComponent(B);
            e.btnStyle = t ? P.primary : P.integrateMttOverviewRegButton
        }
        setActiveTipComp(t, e = null, i = "") {
            t ? (this.tipComp.setTargetNode(e), this.tipComp.setTipLabel(i), this.tipComp.show()) : this.tipComp.hide()
        }
        onTipBack() {
            this.bountyTipToggle.setIsCheckedWithoutNotify(!1), this.setActiveTipComp(!1)
        }
        onLobbyButtonClicked() {
            var t;
            null == (t = this.mvcView) || t.onClickMttLobby()
        }
        onRegisterButtonClicked() {
            var t;
            null == (t = this.mvcView) || t.onClickSignup()
        }
        reset() {
            this.onTipBack()
        }
        updateDisplayCurrency() {
            this.convertCurrency = R.isMTTJPcurrencySwitcherOn, this.setPrizePool(this._mttHallInfo.GamePot + (this._mttHallInfo.BountyPot ? this._mttHallInfo.BountyPot : 0), this._mttHallInfo.DisplayCurrency), this.setOverlay(this._mttHallInfo.Overlay, this._mttHallInfo.DisplayCurrency), this.setBuyIn(this._mttHallInfo.RegFee, this._mttHallInfo.SrvFee, this._mttHallInfo.BountyFee)
        }
    }).prototype, "btnToolTipBounty", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(yt.prototype, "mttNameLabel", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(yt.prototype, "prizePoolValue", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(yt.prototype, "statusBg", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(yt.prototype, "statusValueTheme", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(yt.prototype, "statusValue", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(yt.prototype, "startTimeGroup", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(yt.prototype, "estimatedDurationGroup", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = e(yt.prototype, "buyInValue", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(yt.prototype, "startChipsGroup", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(yt.prototype, "blindIntervalValue", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(yt.prototype, "currentLevelGroup", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(yt.prototype, "currentLevelValue", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = e(yt.prototype, "currentLevelInfoValue", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(yt.prototype, "overlayGroup", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(yt.prototype, "overlayValue", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(yt.prototype, "regOpenGroup", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(yt.prototype, "bountyGroup", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(yt.prototype, "bountyTipToggle", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(yt.prototype, "bountyTipLocation", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = e(yt.prototype, "tableTypeGroup", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = e(yt.prototype, "gameTypeGroup", [ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = e(yt.prototype, "loadingContentNode", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(yt.prototype, "tipComp", [mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $t = e(yt.prototype, "titleBgSprite", [pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Wt = e(yt.prototype, "titleBgSpriteFrames", [ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), xt = e(yt.prototype, "pageBgSpriteFrames", [Tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Kt = e(yt.prototype, "gameClockLabel", [gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Jt = e(yt.prototype, "unregisterPopupPrefab", [ft], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = yt)) || dt));
    n._RF.pop()
}