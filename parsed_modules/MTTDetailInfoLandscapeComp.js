import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./MttItemHelper.js";
import * as T from "./FormatParser.js";
import * as g from "./CurrencyValue.js";
import * as f from "./ThemeSystem.js";
import * as b from "./AutoResizeLabel.js";
import * as S from "./Translator.js";
import * as x from "./cv.js";
import * as y from "./Pb.js";
import * as I from "./MttItemRenderHelper.js";
import * as P from "./CommonTools.js";
import * as B from "./MttGameItemColorIndentifier.js";
import * as k from "./AutoSizeByChildrenHeight.js";

function main() {
    var C, L, v, D, z, R, w, M, E, A, N, F, _, U, G, O, V, H, W, $, j, J, Y, K, q, Q, X, Z, tt, et, it, nt, at, rt, st, ot, lt, ut, ht, ct, mt, dt, pt, Tt, gt, ft, bt, St, xt, yt, It, Pt, Bt, kt, Ct, Lt, vt, Dt, zt, Rt, wt, Mt, Et, At, Nt, Ft, _t, Ut, Gt, Ot, Vt, Ht, Wt, $t, jt, Jt, Yt, Kt, qt, Qt, Xt, Zt, te, ee, ie, ne, ae, re, se, oe, le, ue, he;
    n._RF.push({}, "0725ep/RkpI+6ltWzTSbrp+", "MTTDetailInfoLandscapeComp", void 0);
    const {
        ccclass: ce,
        property: me
    } = u;
    t("MTTDetailInfoLandscapeComp", (C = ce("MTTDetailInfoLandscapeComp"), L = me(k), v = me([a]), D = me(r), z = me([a]), R = me([a]), w = me(r), M = me(b), E = me(r), A = me(s), N = me(o), F = me(g), _ = me(g), U = me(g), G = me(g), O = me(o), V = me(g), H = me(g), W = me(o), $ = me(o), j = me(r), J = me(r), Y = me(o), K = me(o), q = me(o), Q = me(o), X = me(o), Z = me(o), tt = me(o), et = me(o), it = me(o), nt = me(o), at = me(o), rt = me(o), st = me(o), ot = me(o), lt = me(o), ut = me(o), ht = me(o), ct = me(o), mt = me(o), dt = me(o), pt = me(o), Tt = me(o), gt = me(o), ft = me(l), C((xt = e((St = class extends h {
        constructor(...t) {
            super(...t), this.mvcView = null, i(this, "autoSizeHeight", xt, this), i(this, "bannerBgList", yt, this), i(this, "bannerBgSprite", It, this), i(this, "bannerIconList", Pt, this), i(this, "pageBgList", Bt, this), i(this, "bannerIconSprite", kt, this), i(this, "titleNameRoom", Ct, this), i(this, "bgTitleNormal", Lt, this), i(this, "signUpButton", vt, this), i(this, "signUpButtonLabel", Dt, this), i(this, "prizePoolTxt", zt, this), i(this, "buyInTxt", Rt, this), i(this, "guaranteedTxt", wt, this), i(this, "overlayTxt", Mt, this), i(this, "payoutTxt", Et, this), i(this, "firstPlaceTxt", At, this), i(this, "nextPrizeTxt", Nt, this), i(this, "time1Txt", Ft, this), i(this, "time2Txt", _t, this), i(this, "circleBgSpr", Ut, this), i(this, "circleCountSpr", Gt, this), i(this, "statusRoomTxt", Ot, this), i(this, "curLevelTxt", Vt, this), i(this, "curBlindTxt", Ht, this), i(this, "curTimeTxt", Wt, this), i(this, "startingTimeTxt", $t, this), i(this, "estimatedDurationTxt", jt, this), i(this, "nextBreakTxt", Jt, this), i(this, "playerLeftTxt", Yt, this), i(this, "placesPaidTxt", Kt, this), i(this, "myRankTxt", qt, this), i(this, "entriesTxt", Qt, this), i(this, "smallestStackTxt", Xt, this), i(this, "smallestStackBBTxt", Zt, this), i(this, "averageStackTxt", te, this), i(this, "averageStackBBTxt", ee, this), i(this, "largestStackTxt", ie, this), i(this, "largestStackBBTxt", ne, this), i(this, "startingChipsTxt", ae, this), i(this, "startingChipsBBTxt", re, this), i(this, "myChipsTxt", se, this), i(this, "myChipsBBTxt", oe, this), i(this, "minPlayersTxt", le, this), i(this, "maxPlayersTxt", ue, this), i(this, "unregisterPopupPrefab", he, this), this.unregisterPopup = null, this.model = null
        }
        updateInfo(t) {
            this.model = t, null != this.model.tournamentData && null != this.model.tournamentDetail && null != this.model.detailInfo && (this.setRoomStatusLabel(), this.handleColorStatus(), this.setPrizepool(), this.setBuyInFee(), this.setRoomName(), this.setOverlay(), this.setGuaranteed(), this.setFirstPlace(), this.setNextPrize(), this.setPayout(), this.setCurrentLevel(), this.setCurrentBlind(), this.setStartingTime(), this.setEstimatedDuration(), this.setNextBreakTime(), this.setPlayerLeft(), this.setPlacesPaid(), this.setMyRank(), this.setEntries(), this.setStartingChips(), this.setMyChips(), this.setMinPlayers(), this.setMaxPlayers(), this.setSmallestStack(), this.setAverageStack(), this.setLargestStack(), this.setDateStatus(), this.displayLeftItems(), this.displayMidItems(), this.displayRightItems(), this.setBannerActive())
        }
        setBannerActive() {
            let t = this.model.detailInfo.pageType,
                e = this.model.detailInfo.iconType,
                i = this.model.detailInfo.bannerType;
            if (this.bannerIconSprite.node.active = !0, this.bannerBgSprite.node.active = !0, this.bgTitleNormal.enabled = !1, t != B.None) c(this.bannerBgSprite) && c(this.pageBgList[t]) && (this.bannerBgSprite.spriteFrame = this.pageBgList[t]), c(this.bannerIconSprite) && (this.bannerIconSprite.spriteFrame = null);
            else {
                switch (e) {
                    case y.commonProto.MttIcon.CNYIcon:
                        this.bannerIconSprite.spriteFrame = this.bannerIconList[0];
                        break;
                    case y.commonProto.MttIcon.WeeklyGoldenIcon:
                        this.bannerIconSprite.spriteFrame = this.bannerIconList[1];
                        break;
                    case y.commonProto.MttIcon.WPTIcon:
                        this.bannerIconSprite.spriteFrame = this.bannerIconList[2];
                        break;
                    case y.commonProto.MttIcon.BountyIcon:
                        this.bannerIconSprite.spriteFrame = this.bannerIconList[3];
                        break;
                    default:
                        this.bannerIconSprite.node.active = !1
                }
                switch (i) {
                    case y.commonProto.MttBanner.CNYBanner:
                        this.bannerBgSprite.spriteFrame = this.bannerBgList[0];
                        break;
                    case y.commonProto.MttBanner.WeeklyGoldenBanner:
                        this.bannerBgSprite.spriteFrame = this.bannerBgList[1];
                        break;
                    case y.commonProto.MttBanner.WPTBanner:
                        this.bannerBgSprite.spriteFrame = this.bannerBgList[2];
                        break;
                    case y.commonProto.MttBanner.BountyBanner:
                        this.bannerBgSprite.spriteFrame = this.bannerBgList[3];
                        break;
                    default:
                        this.bannerBgSprite.node.active = !1, this.bgTitleNormal.enabled = !0
                }
            }
        }
        onLoad() {
            x.MessageCenter.register("updateMttDetail", this.refreshUI.bind(this), this.node), x.MessageCenter.register(x.config.CHANGE_LANGUAGE, this.onLanguageChanged.bind(this), this.node)
        }
        refreshUI(t) {
            var e, i;
            t && t.tournamentData && (null == (e = (i = this.mvcView).onRefreshUI) || e.call(i, t.tournamentData))
        }
        onDestroy() {
            x.MessageCenter.unregister(x.config.CHANGE_LANGUAGE, this.node), x.MessageCenter.unregister("updateMttDetail", this.node)
        }
        displayLeftItems() {
            [this.guaranteedTxt.node.parent, this.overlayTxt.node.parent, this.firstPlaceTxt.node.parent, this.nextPrizeTxt.node.parent, this.payoutTxt.node.parent].forEach((t => {
                t.active = !1
            })), Object.keys(this.model.data.leftDetailInfo).forEach(((t, e) => {
                switch (t) {
                    case "guarantee":
                        this.guaranteedTxt.node.parent.active = this.model.data.leftDetailInfo[t] > 0;
                        break;
                    case "overlay":
                        this.overlayTxt.node.parent.active = this.model.data.leftDetailInfo[t] > 0;
                        break;
                    case "payoutDistribution":
                        this.payoutTxt.node.parent.active = this.model.data.leftDetailInfo[t] > 0;
                        break;
                    case "firstPlacePrize":
                        this.firstPlaceTxt.node.parent.active = this.model.data.leftDetailInfo[t] > 0;
                        break;
                    case "nextPlacePrize":
                        this.nextPrizeTxt.node.parent.active = this.model.data.leftDetailInfo[t] > 0
                }
            }))
        }
        increaseCurLevel() {
            this.setCurrentLevel(), this.setCurrentBlind(), this.setNextBreakTime()
        }
        displayMidItems() {
            [this.entriesTxt.node.parent, this.curLevelTxt.node.parent, this.curBlindTxt.node.parent, this.curTimeTxt.node.parent, this.startingTimeTxt.node.parent, this.estimatedDurationTxt.node.parent, this.nextBreakTxt.node.parent, this.playerLeftTxt.node.parent, this.placesPaidTxt.node.parent, this.myRankTxt.node.parent].forEach((t => {
                t.active = !1
            })), Object.keys(this.model.data.midDetailInfo).forEach(((t, e) => {
                switch (t) {
                    case "entries":
                        this.entriesTxt.node.parent.active = !0;
                        break;
                    case "startingTime":
                        this.startingTimeTxt.node.parent.active = !0;
                        break;
                    case "estimatedDuration":
                        this.estimatedDurationTxt.node.parent.active = !0;
                        break;
                    case "currentLevel":
                        this.curLevelTxt.node.parent.active = !0;
                        break;
                    case "nextBreakTime":
                        this.nextBreakTxt.node.parent.active = !0;
                        break;
                    case "playingPlayers":
                        this.playerLeftTxt.node.parent.active = !0;
                        break;
                    case "inTheMoney":
                        this.placesPaidTxt.node.parent.active = this.model.data.midDetailInfo[t] > 0;
                        break;
                    case "myRank":
                        this.myRankTxt.node.parent.active = this.model.data.midDetailInfo[t] > 0
                }
            }))
        }
        displayRightItems() {
            [this.smallestStackTxt.node.parent.parent, this.averageStackTxt.node.parent.parent, this.largestStackTxt.node.parent.parent, this.startingChipsTxt.node.parent.parent, this.minPlayersTxt.node.parent, this.maxPlayersTxt.node.parent].forEach((t => {
                t.active = !1
            })), Object.keys(this.model.data.rightDetailInfo).forEach(((t, e) => {
                switch (t) {
                    case "startingChip":
                        this.startingChipsTxt.node.parent.parent.active = !0;
                        break;
                    case "minPlayers":
                        this.minPlayersTxt.node.parent.active = !0;
                        break;
                    case "maxPlayers":
                        this.maxPlayersTxt.node.parent.active = !0;
                        break;
                    case "smallestStack":
                        this.startingChipsTxt.node.parent.parent.active = !0;
                        break;
                    case "largestStack":
                        this.largestStackTxt.node.parent.parent.active = !0;
                        break;
                    case "avgStack":
                        this.averageStackTxt.node.parent.parent.active = !0;
                        break;
                    case "myChips":
                        this.myChipsTxt.node.parent.parent.active = this.model.detailInfo.isStarted && this.model.detailInfo.myJoinStatus > 0
                }
            }))
        }
        setRoomName() {
            const t = cc_mtt.vv.DataManager.i18DataFromServer(this.model.tournamentDetail.TournamentName, this.model.tournamentDetail.TournamentNameI18N);
            this.titleNameRoom.setString(t)
        }
        setNextBreakTime() {
            if (!this.model || !this.model.detailInfo) return;
            if (p.checkIsEnd(this.model.tournamentDetail)) return;
            let t = this.model.detailInfo.isPaused ? -1 : p.timeStampToTimeLeftSec(this.model.detailInfo.timeStampNextBreak);
            if (!this.nextBreakTxt) return;
            if (this.model.detailInfo.inMiddlePause && (t = 0), t < 0 || this.model.detailInfo.breakDuration <= 0) return void(this.nextBreakTxt.string = "-");
            const {
                min: e,
                sec: i
            } = P.instance.splitSecond(t, {
                hasDay: !1,
                hasHour: !1
            }), [n, a] = T.addStartPadding([e, i], 2, "0");
            this.nextBreakTxt.string = `${n}:${a}`
        }
        setPrizepool() {
            const {
                prizePool: t,
                currency: e,
                displayCurrency: i,
                convertCurrency: n,
                currencyRate: a
            } = this.model.detailInfo;
            I.setPrizePool(this.prizePoolTxt, t, e, n, i, a, !1)
        }
        setBuyInFee() {
            const {
                buyIn: t,
                currency: e,
                displayCurrency: i,
                convertCurrency: n,
                currencyRate: a,
                multiFlightLevel: r
            } = this.model.detailInfo;
            this.buyInTxt.updateVal(T.ThousandPointFormat(t), e, n, i, a), r > 0 && (this.buyInTxt.string = "N/A")
        }
        setOverlay() {
            const {
                overlay: t,
                currency: e,
                displayCurrency: i,
                convertCurrency: n,
                currencyRate: a
            } = this.model.detailInfo;
            this.overlayTxt.updateVal(T.ThousandPointFormat(t), e, n, i, a)
        }
        setGuaranteed() {
            const {
                guarantee: t,
                currency: e,
                displayCurrency: i,
                convertCurrency: n,
                currencyRate: a
            } = this.model.detailInfo;
            this.guaranteedTxt.updateVal(T.ThousandPointFormat(t), e, n, i, a)
        }
        setFirstPlace() {
            const {
                firstPlacePrize: t,
                currency: e,
                displayCurrency: i,
                convertCurrency: n,
                currencyRate: a
            } = this.model.detailInfo;
            this.firstPlaceTxt.updateVal(T.ThousandPointFormat(t), e, n, i, a)
        }
        setNextPrize() {
            const {
                nextPlacePrize: t,
                currency: e,
                displayCurrency: i,
                convertCurrency: n,
                currencyRate: a
            } = this.model.detailInfo;
            this.nextPrizeTxt.updateVal(T.ThousandPointFormat(t), e, n, i, a)
        }
        setPayout() {
            const {
                payoutDistribution: t
            } = this.model.detailInfo;
            this.payoutTxt.string = `${t}%`
        }
        setCurrentLevel() {
            this.curLevelTxt.string = S("TOURNAMENT_DETAIL.LEVEL") + " " + this.model.detailInfo.currentLevel
        }
        setCurrentBlind() {
            const {
                curBlind: t
            } = this.model.detailInfo;
            this.curBlindTxt.string = t
        }
        setStartingTime() {
            let t = p.checkStartingTime(this.model.tournamentDetail.StartingTime);
            this.startingTimeTxt.string = t ? p.showDateOrTime(this.model.detailInfo.startingTime, !0, !0) : "-"
        }
        setEstimatedDuration() {
            this.estimatedDurationTxt.string = p.getEstimatedDuration(this.model.detailInfo.estimatedDuration)
        }
        setPlayerLeft() {
            const {
                playingPlayers: t,
                entries: e
            } = this.model.detailInfo;
            this.playerLeftTxt.string = `${T.ThousandPointFormat(t)}/${T.ThousandPointFormat(e)}`
        }
        setPlacesPaid() {
            const {
                inTheMoney: t
            } = this.model.detailInfo;
            this.placesPaidTxt.string = T.ThousandPointFormat(t)
        }
        setMyRank() {
            const {
                myRank: t
            } = this.model.detailInfo;
            this.myRankTxt.string = t > 0 ? t.toString() : "-"
        }
        setEntries() {
            const {
                entries: t
            } = this.model.detailInfo;
            this.entriesTxt.string = T.ThousandPointFormat(t)
        }
        setStartingChips() {
            p.getStartingCoinsMultiday(this.model.detailInfo.multiFlightLevel, this.model.detailInfo.startingChip) <= 0 ? (this.startingChipsTxt.string = "-", this.startingChipsBBTxt.string = "") : (this.startingChipsTxt.string = T.ThousandPointFormat(this.model.detailInfo.startingChip, 0), this.startingChipsBBTxt.string = this.getStackBBTxt(this.model.detailInfo.startingChip))
        }
        setMyChips() {
            this.myChipsTxt.string = T.ThousandPointFormat(this.model.detailInfo.myChips, 0), this.myChipsBBTxt.string = this.getStackBBTxt(this.model.detailInfo.myChips)
        }
        setMinPlayers() {
            const {
                minPlayers: t
            } = this.model.detailInfo;
            this.minPlayersTxt.string = T.ThousandPointFormat(t)
        }
        setMaxPlayers() {
            const {
                maxPlayers: t
            } = this.model.detailInfo;
            this.maxPlayersTxt.string = T.ThousandPointFormat(t)
        }
        setSmallestStack() {
            this.smallestStackTxt.string = T.ThousandPointFormat(this.model.detailInfo.smallestStack, 0), this.smallestStackBBTxt.string = this.getStackBBTxt(this.model.detailInfo.smallestStack)
        }
        setAverageStack() {
            this.averageStackTxt.string = T.ThousandPointFormat(this.model.detailInfo.avgStack, 0), this.averageStackBBTxt.string = this.getStackBBTxt(this.model.detailInfo.avgStack)
        }
        setLargestStack() {
            this.largestStackTxt.string = T.ThousandPointFormat(this.model.detailInfo.largestStack, 0), this.largestStackBBTxt.string = this.getStackBBTxt(this.model.detailInfo.largestStack)
        }
        getStackBBTxt(t) {
            var e, i;
            const n = this.model.detailInfo.currentLevel > 0 ? this.model.detailInfo.currentLevel - 1 : 0,
                a = p.isDetailShortDeck(this.model.tournamentDetail) ? null == (e = this.model.tournamentDetail.HoldemBlindsConfig[n]) ? void 0 : e.Ante : null == (i = this.model.tournamentDetail.HoldemBlindsConfig[n]) ? void 0 : i.BigBlind;
            return a > 0 ? `(${T.ThousandPointFormat(t/a,1)} BB)` : "-"
        }
        onLanguageChanged() {
            this.setRoomName(), this.setRoomStatusLabel()
        }
        setRoomStatusLabel() {
            this.statusRoomTxt.string = x.StringTools.convertText(S(this.model.detailInfo.roomStatusI18nKey), 4)
        }
        setColorStatus() {
            let t = this.model.detailInfo.status;
            t == y.commonProto.MTT_GAME_STATUS.STARTED || t == y.commonProto.MTT_GAME_STATUS.STOP_SIGNUP ? this.model.detailInfo.isPaused && (t += 100) : this.model.tournamentDetail.PlayOnJoint <= 0 && t == y.commonProto.MTT_GAME_STATUS.NOT_STARTED && (p.checkCanReg(this.model.tournamentDetail) || (t = 101));
            const e = [this.statusRoomTxt.getComponent(f), this.time1Txt.getComponent(f), this.time2Txt.getComponent(f), this.circleBgSpr.getComponent(f), this.circleCountSpr.getComponent(f)];
            I.applyDetailMttStatusLandscape(t, e)
        }
        handleColorStatus() {
            this.model.detailInfo.roomStatusNumber = p.handleColorStatusMttDetail(this.model.detailInfo.roomStatusNumber, this.model.detailInfo.startingTime, this.model.detailInfo.allowSignupDate), this.setColorStatus()
        }
        getSignUpButtonLabel() {
            return this.signUpButtonLabel
        }
        getSignUpButton() {
            return this.signUpButton
        }
        updateRoomStatus() {
            this.setRoomStatusLabel(), this.setDateStatus(), this.handleColorStatus()
        }
        getTimeLeftSecLateReg() {
            return Math.floor(this.model.detailInfo.isTimerStop ? this.model.tournamentDetail.TimeLeftSec : p.timeStampToTimeLeftSec(this.model.detailInfo.timeStampLateReg))
        }
        getTimeLeftSecNotStarted() {
            return p.timeStampToTimeLeftSec(this.model.tournamentDetail.StartingTime.getTime())
        }
        getStopTimeLeftSec() {
            let t = new Date(this.model.detailInfo.lateRegEndTimestamp),
                e = new Date(this.model.detailInfo.startingTime);
            return (t.getTime() - e.getTime()) / 1e3
        }
        setDateStatus() {
            switch (this.unschedule(this.updateLateReg), this.unschedule(this.updateStarted), this.model.detailInfo.status) {
                case y.commonProto.MTT_GAME_STATUS.NOT_STARTED:
                    this.unscheduleAllCallbacks(), this.updateNotStarted(), this.schedule(this.updateNotStarted, 1, m.REPEAT_FOREVER);
                    break;
                case y.commonProto.MTT_GAME_STATUS.STARTED:
                case y.commonProto.MTT_GAME_STATUS.STARTED + 100:
                    this.unscheduleAllCallbacks(), this.updateLateReg(), this.schedule(this.updateLateReg, 1, m.REPEAT_FOREVER);
                    break;
                case y.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                case y.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
                    this.updateStarted(), this.model.detailInfo.timerStop || (this.unscheduleAllCallbacks(), this.schedule(this.updateStarted, 1, m.REPEAT_FOREVER));
                    break;
                case y.commonProto.MTT_GAME_STATUS.ENDED:
                    this.setDateInfo("N/A")
            }
            p.checkIsEnd(this.model.tournamentDetail) && this.unscheduleAllCallbacks()
        }
        updateStarted() {
            let t = this.model.detailInfo.gameDuration++;
            if (t > 0) {
                this.model.detailInfo.isPaused ? I.setDetailMttStatusTimeLabel_paused_landscape(this.time1Txt, this.time2Txt, this.model.tournamentData.WillPlayStartTime) : I.setTimeRunningLandscapeInDetail(this.time1Txt, this.time2Txt, this.circleCountSpr, t)
            }
        }
        setTimeStatusNotStartEmpty() {
            this.circleCountSpr.fillRange = 1, this.time2Txt.node.active = !1, this.setDateInfo("N/A")
        }
        updateNotStarted() {
            const t = this.getTimeLeftSecNotStarted();
            this.model.tournamentDetail.PlayOnJoint > 0 ? this.setTimeStatusNotStartEmpty() : p.checkStartingTime(this.model.detailInfo.startingTime) && (this.updateStartTimer(), this.unscheduleAllCallbacks(), this.schedule(this.updateStartTimer, 1, m.REPEAT_FOREVER)), t <= 0 && this.unschedule(this.updateNotStarted)
        }
        updateStartTimer() {
            I.setTimeLeftSecLandscapeInDetail(this.time1Txt, this.time2Txt, this.circleCountSpr, p.timeStampToTimeLeftSec(this.model.detailInfo.startingTime.getTime()), this.getStopTimeLeftSec())
        }
        updateAllowSignupTimer() {
            I.setTimeLeftSecLandscapeInDetail(this.time1Txt, this.time2Txt, this.circleCountSpr, p.timeStampToTimeLeftSec(this.model.detailInfo.allowSignupDate.getTime()), 1)
        }
        updateLateReg() {
            if (p.checkIsEnd(this.model.tournamentDetail)) return;
            const t = this.getTimeLeftSecLateReg(),
                e = this.getStopTimeLeftSec();
            let i = this.model.detailInfo.timerStop;
            if (this.model.detailInfo.isPaused) I.setDetailMttStatusTimeLabel_paused_landscape(this.time1Txt, this.time2Txt, this.model.detailInfo.willPlayStartTime);
            else if (t >= 0 && (!this.model.detailInfo.timerStop || this.model.detailInfo.isTimerStopFirstTime)) return void I.setTimeLeftSecLandscapeInDetail(this.time1Txt, this.time2Txt, this.circleCountSpr, t, e);
            t <= 0 && this.unschedule(this.updateLateReg), i && (this.model.detailInfo.isTimerStopFirstTime = !1)
        }
        onDisable() {
            var t, e;
            null == (t = (e = this.mvcView).onDisableAction) || t.call(e)
        }
        setDateInfo(t) {
            this.time1Txt.string = t
        }
        getCurLevelLabel() {
            return this.curLevelTxt
        }
        getUnregisterPopup() {
            return null == this.unregisterPopup && (this.unregisterPopup = d(this.unregisterPopupPrefab), this.unregisterPopup.setParent(this.mvcView.getWindowNode()), this.unregisterPopup.active = !1), this.unregisterPopup
        }
        onClickedSignUp() {
            var t, e;
            null == (t = (e = this.mvcView).onClickedSignUp) || t.call(e)
        }
    }).prototype, "autoSizeHeight", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(St.prototype, "bannerBgList", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), It = e(St.prototype, "bannerBgSprite", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(St.prototype, "bannerIconList", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Bt = e(St.prototype, "pageBgList", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), kt = e(St.prototype, "bannerIconSprite", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(St.prototype, "titleNameRoom", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(St.prototype, "bgTitleNormal", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(St.prototype, "signUpButton", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(St.prototype, "signUpButtonLabel", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = e(St.prototype, "prizePoolTxt", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(St.prototype, "buyInTxt", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(St.prototype, "guaranteedTxt", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(St.prototype, "overlayTxt", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = e(St.prototype, "payoutTxt", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = e(St.prototype, "firstPlaceTxt", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(St.prototype, "nextPrizeTxt", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = e(St.prototype, "time1Txt", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(St.prototype, "time2Txt", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = e(St.prototype, "circleBgSpr", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(St.prototype, "circleCountSpr", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(St.prototype, "statusRoomTxt", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(St.prototype, "curLevelTxt", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(St.prototype, "curBlindTxt", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Wt = e(St.prototype, "curTimeTxt", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $t = e(St.prototype, "startingTimeTxt", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), jt = e(St.prototype, "estimatedDurationTxt", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Jt = e(St.prototype, "nextBreakTxt", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yt = e(St.prototype, "playerLeftTxt", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Kt = e(St.prototype, "placesPaidTxt", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qt = e(St.prototype, "myRankTxt", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qt = e(St.prototype, "entriesTxt", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xt = e(St.prototype, "smallestStackTxt", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Zt = e(St.prototype, "smallestStackBBTxt", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = e(St.prototype, "averageStackTxt", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = e(St.prototype, "averageStackBBTxt", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = e(St.prototype, "largestStackTxt", [ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = e(St.prototype, "largestStackBBTxt", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = e(St.prototype, "startingChipsTxt", [ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = e(St.prototype, "startingChipsBBTxt", [mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = e(St.prototype, "myChipsTxt", [dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = e(St.prototype, "myChipsBBTxt", [pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = e(St.prototype, "minPlayersTxt", [Tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = e(St.prototype, "maxPlayersTxt", [gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = e(St.prototype, "unregisterPopupPrefab", [ft], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = St)) || bt));
    n._RF.pop()
}