import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./AutoResizeLabel.js";
import * as p from "./ThemeSystem.js";
import * as d from "./commonProto.mjs_cjs=&original=.js";
import * as g from "./commonProto.mjs_cjs=&original=.js";
import * as S from "./MttHall.js";
import * as _ from "./FormatParser.js";
import * as f from "./CurrencyValue.js";
import * as y from "./CurrencyValue.js";
import * as b from "./Enum.js";
import * as M from "./cv.js";
import * as I from "./Translator.js";
import * as E from "./MttItemHelper.js";
import * as L from "./ColorsystemLobbyV2.js";
import * as v from "./ColorSystemType.js";
import * as C from "./MttHallPkw.js";
import * as B from "./AndroidBackButton.js";
import * as A from "./AndroidBackButton.js";
import * as P from "./DesignSystemButtonBase.js";
import * as R from "./MttGameOverviewTip.js";
import * as D from "./MttGameOverviewListItem.js";
import * as G from "./testOpenWindow.js";
import * as N from "./MttItemRenderHelper.js";
import * as H from "./LobbyTools.js";

function main() {
    var O, w, V, U, W, k, z, F, $, x, K, Y, J, j, q, X, Q, Z, tt, et, it, nt, at, st, rt, ot, lt, ut, ht, mt, Tt, ct, pt, gt, dt, St, _t, ft, yt, bt, Mt, It, Et, Lt, vt, Ct, Bt, At, Pt, Rt, Dt, Gt, Nt, Ht, Ot;
    n._RF.push({}, "d6e7dSYAhtP8pD1lgk+PItC", "MttGameListOverviewLandscape", void 0);
    const {
        ccclass: wt,
        property: Vt
    } = u;
    t("MttGameListOverviewLandscape", (O = wt("MttGameListOverviewLandscape"), w = Vt(c), V = Vt(_), U = Vt(p), W = Vt(p), k = Vt(a), z = Vt(a), F = Vt(R), $ = Vt(R), x = Vt(a), K = Vt(R), Y = Vt(a), J = Vt(s), j = Vt(a), q = Vt(a), X = Vt(s), Q = Vt(_), Z = Vt(R), tt = Vt(R), et = Vt(r), it = Vt(s), nt = Vt(R), at = Vt(s), st = Vt(s), rt = Vt(P), ot = Vt(o), lt = Vt([l]), O((mt = e((ht = class extends v {
        constructor(...t) {
            super(...t), this.TAG = "MttGameListOverviewLandscape", i(this, "mttNameLabel", mt, this), i(this, "prizePoolValue", Tt, this), i(this, "statusBg", ct, this), i(this, "statusTitleTheme", pt, this), i(this, "statusTitle", gt, this), i(this, "statusValue", dt, this), i(this, "startTimeGroup", St, this), i(this, "estimatedDurationGroup", _t, this), i(this, "buyInValue", ft, this), i(this, "startChipsGroup", yt, this), i(this, "blindIntervalValue", bt, this), i(this, "currentLevelGroup", Mt, this), i(this, "currentLevelValue", It, this), i(this, "currentLevelInfoValue", Et, this), i(this, "overlayGroup", Lt, this), i(this, "overlayValue", vt, this), i(this, "regOpenGroup", Ct, this), i(this, "bountyGroup", Bt, this), i(this, "bountyTipToggle", At, this), i(this, "bountyTipLocation", Pt, this), i(this, "tableTypeGroup", Rt, this), i(this, "loadingBlocker", Dt, this), i(this, "loadingContentNode", Gt, this), i(this, "tipComp", Nt, this), i(this, "titleBgSprite", Ht, this), i(this, "titleBgSpriteFrames", Ot, this), this._mttPrefab = null, this.convertCurrency = !1, this._currentDisplayCurrency = f.None, this._currentBaseCurrency = f.None, this.lateRegLeftSecTimeStamp = 0, this.timerStopResumeTime = 0
        }
        get holdemBlindsConfig() {
            return this._blindConfig
        }
        onLoad() {
            this.mttNameLabel.string = "", this.setEmpty()
        }
        start() {
            this.tipComp.setCallback(this.onTipBack.bind(this))
        }
        updateAbstract(t) {}
        updatePageDetails(t) {}
        updatePagePlayers() {}
        updatePageRewards() {}
        updatePageTables() {}
        addTuplesInTable(t) {}
        updateGameClock(t) {}
        onChangedPage(t, e) {}
        onChangeSubHeader(t) {}
        controlCounter(t, e) {}
        resetPageTables() {}
        controlPageTable(t) {}
        resetMttHall() {
            this.unscheduleAllCallbacks(), this.changeSignUpButtonStatus(g.RESET), this.bountyTipToggle.isChecked = !1, this.setEmpty(), this.resetTimer(), this.lateRegLeftSecTimeStamp = 0, this._popupIsCalled = !1, this.startingTime = null, this._autoEnterCalled = !1, this._mttHallInfo = null, this._blindConfig = []
        }
        initMttHall(t, e, i) {
            this.resetMttHall(), h.isNative && h.os === h.OS.ANDROID && C.getInstance().addBackFunction("MttHall", this.onReturnClicked.bind(this)), cc_mtt.vv.ConsoleLog.log(this.TAG, "initMttHall", t, i), this.tournamentDetailResponse = t, this.tournamentData = i, this.initReturnConfig(e), this._blindConfig = t.TournamentDetail.HoldemBlindsConfig, this._currentBaseCurrency = this._currentDisplayCurrency = b.appConfig.getWalletConfig().convertStringToCurrencyType(t.TournamentDetail.DisplayCurrency), this._updatedPages = [d.ALL], this.setInfo(t, d.ALL), this.updateTimeDifference(), I.checkTableToUpdateJoinStatus(), this.updateSignUpButton(), cc_mtt.vv.DataManager.currentResultId = t.TournamentDetail.TournamentId, this._autoEnterCalled = !0, this.setMttSchedule(), this.updateLang(), this._mttHallInfo && cc_mtt.vv.ConsoleLog.log(`${this._mttHallInfo.TournamentName} (${this._mttHallInfo.TournamentId}, initMttHall): ${this.myJoinStatus}_${this._mttHallInfo.Status}_${this._mttHallInfo.CurrentLevel}_${this._mttHallInfo.LeftRiseBlindTime}`)
        }
        setInfo(t = null, e = this.getMttHallPageByIdx()) {
            super.setInfo(t, e), this.updateView(), this.setLoading(!1)
        }
        updateLang() {}
        setLoading(t = !0) {
            cc_mtt.vv.ConsoleLog.log(this.TAG, "setLoading", t), this.loadingBlocker && (this.loadingBlocker.active = t), t ? (this.mttNameLabel.string = b.config.getStringData("Loading") + "...", this.setEmpty(), this.showLoadingContent(!1), this.unschedule(this.showLoadingContent), this.scheduleOnce(this.showLoadingContent, 3)) : this.scheduleOnce((() => {
                this.startingTime ? this.updateGameClock(this._timeDifference) : this.gameClockLabel && (this.gameClockLabel.string = "-")
            }))
        }
        showLoadingContent(t = !0) {
            this.loadingContentNode && (this.loadingContentNode.active = t)
        }
        setEmpty() {
            this.startTimeGroup.setValue("-"), this.setEstimatedDuration(null), this.buyInValue.string = "-", this.setStartChip(null), this.blindIntervalValue.string = "-", this.setCurrentLevelDisplay(0), this.setOverlay(null, ""), this.setRegOpen(0), this.bountyGroup.node.active = !1, this.setTableType(null), this.setActiveTipComp(!1)
        }
        updateGameDetailsCurrency(t) {}
        getMttHallPageByIdx(t) {
            return d.ALL
        }
        updateImmediately() {
            this.updateView()
        }
        updateView() {
            var t;
            this.lateRegLeftSecTimeStamp = this._mttHallInfo.TimeLeftSec > 0 ? I.timeLeftSecToTimeStamp(this._mttHallInfo.TimeLeftSec) : 0, this.timerStopResumeTime = null != (t = this.tournamentData) && t.willPlayStartTime ? this.tournamentData.willPlayStartTime : -1, this.setMttName(cc_mtt.vv.DataManager.i18DataFromServer(this._mttHallInfo.TournamentName, this._mttHallInfo.TournamentNameI18N)), this.setBanner(), this.setPrizePool(this._mttHallInfo.GamePot + (this._mttHallInfo.BountyPot ? this._mttHallInfo.BountyPot : 0), this._mttHallInfo.DisplayCurrency), this.updateMttStatus(), this.setStartTime(this._mttHallInfo.PlayOnJoint <= 0 ? this._mttHallInfo.StartingTime : null), this.setEstimatedDuration(this._mttHallInfo.EstimatedDuration), this.setBuyIn(this._mttHallInfo.RegFee, this._mttHallInfo.SrvFee, this._mttHallInfo.BountyFee), this.setStartChip(this._mttHallInfo.StartingCoins), this.updateBlindInterval(), this.setCurrentLevelDisplay(this.isMttStarted ? this._mttHallInfo.CurrentLevel : 0), this.setOverlay(this._mttHallInfo.Overlay, this._mttHallInfo.DisplayCurrency), this.setRegOpen(this.getAllowSignupMin()), this.updateBounty(), this.setTableType(this._mttHallInfo.Seats)
        }
        setMttName(t) {
            this.mttNameLabel.setString(t)
        }
        setBanner() {
            let t = this._mttHallInfo.Banners[0] || H.commonProto.MttBanner.Banner_None;
            switch (this.titleBgSprite.node.active = !0, t) {
                case H.commonProto.MttBanner.CNYBanner:
                    this.titleBgSprite.spriteFrame = this.titleBgSpriteFrames[1];
                    break;
                case H.commonProto.MttBanner.BountyBanner:
                    this.titleBgSprite.spriteFrame = this.titleBgSpriteFrames[2];
                    break;
                case H.commonProto.MttBanner.WeeklyGoldenBanner:
                    this.titleBgSprite.spriteFrame = this.titleBgSpriteFrames[3];
                    break;
                case H.commonProto.MttBanner.WPTBanner:
                    this.titleBgSprite.spriteFrame = this.titleBgSpriteFrames[4];
                    break;
                default:
                    this.titleBgSprite.spriteFrame = this.titleBgSpriteFrames[0]
            }
        }
        setPrizePool(t, e, i = "") {
            this.prizePoolValue.updateVal(S.ThousandPointFormat(t), e, this.convertCurrency, i, this._mttHallInfo.Rate)
        }
        updateMttStatus() {
            switch (this.unschedule(this.updateMttStatus_Registering), this.unschedule(this.updateMttStatus_LateReg), this.unschedule(this.updateMttStatus_Paused), this._mttHallInfo.Status) {
                case H.commonProto.MTT_GAME_STATUS.NOT_STARTED:
                    let t = this.getAllowSignupDate();
                    t ? (this.statusTitle.string = M("PKWMTT.GAMELIST.ANNOUNCED"), this.statusValue.string = M("PKWMTT.GAMELIST.START_IN") + ": " + I.showDateOrTime(t, !0, !0), this.setMttStatusColor(E.ListItem_Mtt_Text)) : (this.statusTitle.string = M("PKWMTT.GAMELIST.SIGNING_UP_INTEGRATE"), this.updateMttStatus_Registering(), this.schedule(this.updateMttStatus_Registering, 1, m.REPEAT_FOREVER), this.setMttStatusColor(E.ListItem_Mtt_Bg_Text_Register));
                    break;
                case H.commonProto.MTT_GAME_STATUS.STARTED:
                    this.statusTitle.string = M("PKWMTT.OVERVIEW.LATE_REG"), this.updateMttStatus_LateReg(), this.schedule(this.updateMttStatus_LateReg, 1, m.REPEAT_FOREVER), this.setMttStatusColor(E.ListItem_Mtt_Bg_Text_LateReg);
                    break;
                case H.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                    this.statusTitle.string = M("PKWMTT.GAMELIST.WATCH");
                    let e = `(${this._mttHallInfo.PlayingPlayersCount} / ${this._mttHallInfo.SignupCount})`;
                    this.statusValue.string = e + " " + this.mttStatusLevelStr(), this.setMttStatusColor(E.ListItem_Mtt_Bg_Text_Running);
                    break;
                case H.commonProto.MTT_GAME_STATUS.STARTED + 100:
                case H.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
                    this.statusTitle.string = M("GAME_LIST.TOURNAMENT_STATUS_PAUSE_INTEGRATE"), this.schedule(this.updateMttStatus_Paused, 1, m.REPEAT_FOREVER), this.updateMttStatus_Paused(), this.setMttStatusColor(E.ListItem_Mtt_Text);
                    break;
                case H.commonProto.MTT_GAME_STATUS.ENDED:
                    this.statusTitle.string = M("PKWMTT.GAMELIST.GAME_ENDED"), this.statusValue.string = "", this.setMttStatusColor(E.ListItem_Mtt_Text)
            }
        }
        setMttStatusColor(t) {
            this.statusBg.setColorScheme(L.LobbyV2, t), this.statusTitleTheme.setColorScheme(L.LobbyV2, t)
        }
        mttStatusLevelStr() {
            return `(${M("TOURNAMENT_DETAIL.LEVEL")} ${this._mttHallInfo.CurrentLevel})`
        }
        mttStatusRemainTimeStr(t) {
            return "(" + I.showRemainTime(!0, t, !0) + ")"
        }
        updateMttStatus_Registering() {
            let t = I.timeStampToTimeLeftSec(this._mttHallInfo.StartingTime.getTime());
            t < 0 && (t = 0), this.statusValue.string = M("PKWMTT.GAMELIST.START_IN") + ": " + this.mttStatusRemainTimeStr(t), t <= 0 && this.unschedule(this.updateMttStatus_Registering)
        }
        updateMttStatus_LateReg() {
            let t = I.timeStampToTimeLeftSec(this.lateRegLeftSecTimeStamp);
            t < 0 && (t = 0), this.statusValue.string = M("PKWMTT.GAMELIST.CLOSE_IN") + ": " + this.mttStatusRemainTimeStr(t) + " " + this.mttStatusLevelStr(), t <= 0 && this.unschedule(this.updateMttStatus_LateReg)
        }
        updateMttStatus_Paused() {
            let t = "";
            if (-1 == this.timerStopResumeTime) t = M("PKWMTT.GAMELIST.TBD"), this.unschedule(this.updateMttStatus_Paused);
            else {
                let e = this.getTimerResumeTimeSec();
                e < 0 && (e = 0);
                t = I.showRemainTime(!0, e), 0 == e && this.unschedule(this.updateMttStatus_Paused)
            }
            this.statusValue.string = M("PKWMTT.GAMELIST.RESUME_IN") + ": " + t
        }
        getTimerResumeTimeSec() {
            return this.timerStopResumeTime && this.timerStopResumeTime > I.getServerNow().getTime() ? Math.floor(I.timeStampToTimeLeftSec(new Date(this.timerStopResumeTime).getTime())) : 0
        }
        setSignUpButtonColor(t) {
            if (!this.node.active || !this.signUpButton.node.active) return;
            let e = this.signUpButton.getComponent(B);
            t && this.myJoinStatus > 0 && this._mttHallInfo.Status == H.commonProto.MTT_GAME_STATUS.NOT_STARTED ? e.btnStyle = A.integrateMttOverviewRegButton2 : e.btnStyle = A.integrateMttOverviewRegButton
        }
        setStartTime(t) {
            t ? (this.startTimeGroup.node.active = !0, this.startTimeGroup.setValue(I.showDateOrTime(t, !0, !0))) : this.startTimeGroup.node.active = !1
        }
        setEstimatedDuration(t) {
            t ? (this.estimatedDurationGroup.node.active = !0, this.estimatedDurationGroup.setValue(this.getRemainSecWithString(t))) : this.estimatedDurationGroup.node.active = !1
        }
        setBuyIn(t, e, i) {
            this.buyInValue.string = `${this.getExchangeWithSymbol(t)} + ${this.getExchangeWithSymbol(e)}`, i > 0 && (this.buyInValue.string = `${this.getExchangeWithSymbol(t-i)} + ${this.getExchangeWithSymbol(i)} + ${this.getExchangeWithSymbol(e)}`)
        }
        setStartChip(t) {
            t ? (this.startChipsGroup.node.active = !0, this.startChipsGroup.setValue(`${S.ThousandPointFormat(t)} (${this.convertChipToBB(t,1)}BB)`)) : this.startChipsGroup.node.active = !1
        }
        updateBlindInterval() {
            if (this._mttHallInfo.BlindHands > 0) this.blindIntervalValue.string = T.formatStr(M("PKWMTT.OVERVIEW.BLIND_HAND"), this._mttHallInfo.BlindHands);
            else {
                let t = this._mttHallInfo.LevelTime / 60;
                this.blindIntervalValue.string = S.FloorToDecimal(t) + M("TIME.MINUTE_V2")
            }
        }
        setCurrentLevelDisplay(t) {
            this.currentLevelValue.string = `${t} ${M("TOURNAMENT_DETAIL.LEVEL")}`;
            let e = this.getHoldemBlindsByLevel(t);
            if (e && t > 0) {
                this.currentLevelGroup.active = !0;
                let t = M("TOURNAMENT_DETAIL.TAB.TOURNAMENT_DETAIL.LEVEL_LIST.HEADER.BLIND"),
                    i = M("TOURNAMENT_DETAIL.TAB.TOURNAMENT_DETAIL.LEVEL_LIST.HEADER.ANTE"),
                    n = e.SmallBlind,
                    a = e.BigBlind,
                    s = e.Ante;
                this.currentLevelInfoValue.string = `${t} ${n} / ${a} ${i} ${s}`
            } else this.currentLevelGroup.active = !1
        }
        setOverlay(t, e, i = "") {
            t ? (this.overlayGroup.active = !0, this.overlayValue.updateVal(S.ThousandPointFormat(t), e, this.convertCurrency, i, this._mttHallInfo.Rate)) : this.overlayGroup.active = !1
        }
        setRegOpen(t) {
            t > 0 ? (this.regOpenGroup.node.active = !0, this.regOpenGroup.setValue(T.formatStr(M("PKWMTT.OVERVIEW.REGISTRATION_OPENS_VAL"), S.FloorToDecimal(t) + M("TIME.MINUTE_V2")))) : this.regOpenGroup.node.active = !1
        }
        updateBounty() {
            let t = this._mttHallInfo.TournamentMode;
            if (t == H.commonProto.TOURNAMENT_MODE.NORMAL) this.bountyGroup.node.active = !1;
            else {
                this.bountyGroup.node.active = !0;
                const e = G.getBountyString(t, this.getCurrencySymbol(), this._mttHallInfo);
                this.bountyGroup.setValue(e)
            }
        }
        setTableType(t) {
            t ? (this.tableTypeGroup.node.active = !0, this.tableTypeGroup.setValue(`${t}${N.getSpaceBetweenNumberAndText()}${M("MTT_SIGN_UP.PEOPLE_PER_TABLE").toLowerCase()}`)) : this.tableTypeGroup.node.active = !1
        }
        onToggleBountyTip(t) {
            t.isChecked ? this.setActiveTipComp(!0, this.bountyTipLocation, this.getBountyTipText()) : this.setActiveTipComp(!1)
        }
        setActiveTipComp(t, e = null, i = "") {
            t ? (this.tipComp.setTargetNode(e), this.tipComp.setTipLabel(i), this.tipComp.show()) : this.tipComp.hide()
        }
        onTipBack() {
            this.bountyTipToggle.isChecked = !1
        }
        onClickLobby() {
            this.openMttHall()
        }
        openMttHall() {
            if (b.appConfig.getGeneralConfig().multiWindowEnabled) {
                let t = cc_mtt.vv.DataManager.i18DataFromServer(this._mttHallInfo.TournamentName, this._mttHallInfo.TournamentNameI18N);
                b.createWindow("testOpenWindow", t, (function(t) {
                    let e = t.windowID;
                    t.getComponentInChildren(D).init(t, "Data from MttGameListOverviewLandscape " + e), b.focusWindow(e)
                }))
            }
        }
        getExchangeWithSymbol(t) {
            return this.getCurrencySymbol() + this.getExchange(t)
        }
        getExchange(t) {
            return b.StringTools.toFixedAsString(b.currencyManager.convert(this._currentBaseCurrency, this._currentDisplayCurrency, t, this._mttHallInfo.Rate), b.currencyManager.defaultRoundDecimal)
        }
        getCurrencySymbol() {
            return cc_mtt.vv.ConsoleLog.log("MttGameListOverviewLandscape", this._currentDisplayCurrency, y[this._currentDisplayCurrency]), y[this._currentDisplayCurrency].shortSymbol ? y[this._currentDisplayCurrency].shortSymbol : y[this._currentDisplayCurrency].symbol
        }
        convertChipToBB(t, e) {
            let i = this.getBigBlind(e);
            return i > 0 ? S.RoundToDecimal(t / i, 2) : -1
        }
        getBigBlind(t) {
            let e = this.getHoldemBlindsByLevel(t);
            return e ? e.BigBlind : -1
        }
        getHoldemBlindsByLevel(t) {
            let e = t - 1;
            return this.holdemBlindsConfig && this.holdemBlindsConfig.length > 0 ? (e = e < 0 ? 0 : e >= this.holdemBlindsConfig.length ? this.holdemBlindsConfig.length - 1 : e, this.holdemBlindsConfig[e]) : null
        }
        get isMttStarted() {
            return this._mttHallInfo && (this._mttHallInfo.Status != H.commonProto.MTT_GAME_STATUS.NOT_STARTED || 0 == this._mttHallInfo.PlayOnJoint && cc_mtt.vv.DataManager.getNow().getTime() >= this._mttHallInfo.StartingTime.getTime())
        }
        checkForSignUpStop() {
            return this._mttHallInfo.Status == H.commonProto.MTT_GAME_STATUS.STOP_SIGNUP || this._mttHallInfo.Status == H.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100
        }
        getAllowSignupMin() {
            return this.tournamentData && this.tournamentData.Detail.Status == H.commonProto.MTT_GAME_STATUS.NOT_STARTED && 0 == this.tournamentData.Detail.PlayOnJoint && this.tournamentData.Detail.AllowSignupHours > 0 ? this.tournamentData.Detail.AllowSignupHours : 0
        }
        getAllowSignupDate() {
            let t = I.getAllowSignupDate(this.tournamentData);
            return t && I.getServerNow().getTime() < t.getTime() ? t : null
        }
        getRemainSecWithString(t) {
            let {
                hr: e,
                min: i,
                sec: n
            } = I.splitSecond(t);
            return e > 0 ? `${e}${M("TIME.HOUR")} ${i}${M("TIME.MINUTE")}` : `${i}${M("TIME.MINUTE")}`
        }
        getBountyTipText() {
            switch (this._mttHallInfo.TournamentMode) {
                case H.commonProto.TOURNAMENT_MODE.HUNTER:
                    return M("PKWMTT.OVERVIEW.FIXED_BOUNTY_TIP");
                case H.commonProto.TOURNAMENT_MODE.SUPER_HUNTER:
                    return M("PKWMTT.OVERVIEW.PROGRESSIVE_BOUNTY_TIP");
                case H.commonProto.TOURNAMENT_MODE.Mystery:
                    return M("PKWMTT.OVERVIEW.MYSTERY_BOUNTY_TIP");
                default:
                    return ""
            }
        }
        update(t) {
            this.startingTime && (this.updateTimeDifference(), this.updateSignUpButton()), this.mttCancelOrEnd || (this.autoEnterWhenStart(), this._timeUpdate2 += t, this._timeUpdate2 >= 5 && (this._timeUpdate2 = 0, I.checkTableToUpdateJoinStatus()), this._mttHallInfo && this._mttHallInfo.Status == H.commonProto.MTT_GAME_STATUS.ENDED || (this._timeUpdate3 += t, this._timeUpdate3 >= this._updateDataInterval && (this._updatedPages = [], this.requestDataToUpdate(d.LOBBY))))
        }
    }).prototype, "mttNameLabel", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(ht.prototype, "prizePoolValue", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(ht.prototype, "statusBg", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(ht.prototype, "statusTitleTheme", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(ht.prototype, "statusTitle", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(ht.prototype, "statusValue", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(ht.prototype, "startTimeGroup", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(ht.prototype, "estimatedDurationGroup", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(ht.prototype, "buyInValue", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(ht.prototype, "startChipsGroup", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(ht.prototype, "blindIntervalValue", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(ht.prototype, "currentLevelGroup", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(ht.prototype, "currentLevelValue", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = e(ht.prototype, "currentLevelInfoValue", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(ht.prototype, "overlayGroup", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(ht.prototype, "overlayValue", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(ht.prototype, "regOpenGroup", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(ht.prototype, "bountyGroup", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = e(ht.prototype, "bountyTipToggle", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(ht.prototype, "bountyTipLocation", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(ht.prototype, "tableTypeGroup", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(ht.prototype, "loadingBlocker", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(ht.prototype, "loadingContentNode", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(ht.prototype, "tipComp", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(ht.prototype, "titleBgSprite", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(ht.prototype, "titleBgSpriteFrames", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ut = ht)) || ut));
    n._RF.pop()
}