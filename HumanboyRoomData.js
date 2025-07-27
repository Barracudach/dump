import * as e from "./cc.js";
import * as a from "./humanboy.mjs_cjs=&original=.js";
import * as o from "./cv.js";
import * as r from "./HashMap.js";
import * as i from "./CowboyRoomData.js";

function main() {
    e._RF.push({}, "83c996X0p1M1adDkxNlocjk", "HumanboyRoomData", void 0);
    class s {
        constructor() {
            this.result = 0, this.luckLoseHand = 0, this.totalBet = 0, this.selfBet = 0, this.maxHistoryResultsRetention = 0, this.option = i.humanboy_proto.BetZoneOption.BetZoneOption_DUMMY, this.vTotalBetDetail = [], this.vHistoryResults = [], this.reset(!0)
        }
        reset(t) {
            this.result = 0, this.totalBet = 0, this.selfBet = 0, this.maxHistoryResultsRetention = 30, this.option = i.humanboy_proto.BetZoneOption.BetZoneOption_DUMMY, a.StringTools.clearArray(this.vTotalBetDetail), t && (this.luckLoseHand = 0, a.StringTools.clearArray(this.vHistoryResults))
        }
    }
    t("HumanboyZoneData", s);
    t("HumanboyRoomData", class {
        constructor() {
            this.u32Uid = 0, this.u32RoomId = 0, this.nStopWorld = 0, this.uCanBuyStockNum = 0, this.uDealerWinAll = 0, this.udeskType = 0, this.uTotalStockNum = 0, this.llJackpotLeftMoney = 0, this.bCanAuto = !1, this.bHasBetInCurRound = !1, this.bOnDealerList = !1, this.bShowDealerInvitation = !1, this.bCanUpdateWorldServerGold = !0, this.sBackToMainTips = "", this.tCurRoom = i.humanboy_proto.RoomParam.create(), this.eCurState = i.humanboy_proto.RoundState.RoundState_DUMMY, this.eMaxLevel = i.humanboy_proto.CardResult.CardResult_Dummy, this.eMaxLevelOption = i.humanboy_proto.BetZoneOption.BetZoneOption_DUMMY, this.llLeftSeconds = 0, this.llNextRoundEndStamp = 0, this.mapZoneData = new o, this.mapPlayerBeforeSettlementCoin = new o, this.llCoinUICritical = 0, this.iUsedAutoBetCount = 0, this.iSelectAutoBetCount = 0, this.bCanAdvanceAuto = !1, this.eAutoLevel = i.humanboy_proto.AutoBetLevel.Level_Normal, this.vAutoBetCountList = [], this.vBetCoinOption = [], this.vDealerInfo = [], this.tSelfPlayer = i.humanboy_proto.GamePlayer.create(), this.vOtherPlayer = [], this.vPlayerHoleCard = [], this.vPlayerSettles = [], this.tOtherPlayerSettle = i.humanboy_proto.PlayerSettle.create(), this.tCurPlayerOneBet = new r, this.vHitJackpotAward = [], this.vDealerWatingList = [], this.vDealerCandidateList = [], this.tDownDealerResp = i.humanboy_proto.DownDealerResp.create(), this.tDownDealerNotify = i.humanboy_proto.DownDealerNotify.create(), this.TrendOption = [], this.handLevelStatistics = i.humanboy_proto.RoomTrendLevelStatistics.create(), this.lastResult = [], this.brdzplayerNum = 0, this.gamePlayerList = [], this.jackpotData = i.humanboy_proto.JackpotDataInfo.create(), this.luckyOne = i.humanboy_proto.AwardData.create(), this.lastAwardData = [], this.change_points = 0, this.idle_roomid = 0
        }
        reset() {
            this.u32Uid = 0, this.u32RoomId = 0, this.nStopWorld = 0, this.idle_roomid = 0, this.uCanBuyStockNum = 0, this.uDealerWinAll = 0, this.udeskType = 0, this.uTotalStockNum = 0, this.llJackpotLeftMoney = 0, this.bCanAuto = !1, this.bHasBetInCurRound = !1, this.bOnDealerList = !1, this.bShowDealerInvitation = !1, this.bCanUpdateWorldServerGold = !0, this.sBackToMainTips = "", this.tCurRoom = i.humanboy_proto.RoomParam.create(), this.eCurState = i.humanboy_proto.RoundState.RoundState_DUMMY, this.eMaxLevel = i.humanboy_proto.CardResult.CardResult_Dummy, this.llLeftSeconds = 0, this.llNextRoundEndStamp = 0, this.llCoinUICritical = 0, this.iUsedAutoBetCount = 0, this.iSelectAutoBetCount = 0, this.eAutoLevel = i.humanboy_proto.AutoBetLevel.Level_Normal, a.StringTools.clearArray(this.vAutoBetCountList), a.StringTools.clearArray(this.vBetCoinOption), this.tCurPlayerOneBet.reset(), this.mapPlayerBeforeSettlementCoin.clear(), this.tSelfPlayer = i.humanboy_proto.GamePlayer.create(), this.tOtherPlayerSettle = i.humanboy_proto.PlayerSettle.create(), this.tDownDealerNotify = i.humanboy_proto.DownDealerNotify.create(), a.StringTools.clearArray(this.vDealerInfo), a.StringTools.clearArray(this.vOtherPlayer), a.StringTools.clearArray(this.vPlayerHoleCard), a.StringTools.clearArray(this.vPlayerSettles), a.StringTools.clearArray(this.vHitJackpotAward), a.StringTools.clearArray(this.vDealerWatingList), a.StringTools.clearArray(this.vDealerCandidateList), a.StringTools.clearArray(this.lastAwardData), this.brdzplayerNum = 0, this.luckyOne = i.humanboy_proto.AwardData.create(), a.StringTools.clearArray(this.gamePlayerList), a.StringTools.clearArray(this.lastResult), a.StringTools.clearArray(this.lastAwardData), this.clearMapZoneData(!1), this.change_points = 0
        }
        resetRound() {
            this.uDealerWinAll = 0, this.bHasBetInCurRound = !1, this.bShowDealerInvitation = !1, this.eCurState = i.humanboy_proto.RoundState.RoundState_DUMMY, this.eMaxLevel = i.humanboy_proto.CardResult.CardResult_Dummy, this.llLeftSeconds = 0, this.llNextRoundEndStamp = 0, this.tCurPlayerOneBet.reset(), this.tOtherPlayerSettle = i.humanboy_proto.PlayerSettle.create(), this.tDownDealerResp = i.humanboy_proto.DownDealerResp.create(), this.tDownDealerNotify = i.humanboy_proto.DownDealerNotify.create(), a.StringTools.clearArray(this.vPlayerHoleCard), a.StringTools.clearArray(this.vPlayerSettles), a.StringTools.clearArray(this.vHitJackpotAward), this.clearMapZoneData(!1), this.change_points = 0
        }
        clearMapZoneData(t) {
            this.mapZoneData.forEach(((e, a) => {
                a.reset(t)
            }))
        }
        transNumberToString(t, e = 2, o = !1) {
            let r = a.StringTools.serverGoldToShowNumber(t);
            r = Math.floor(r * Math.pow(10, e)) / Math.pow(10, e);
            let i = "";
            o && (i = r >= 0 ? "+" : "");
            let s = "%s%" + a.StringTools.formatC(".%df", e),
                l = a.StringTools.formatC(s, i, r),
                n = 0,
                h = l.indexOf(".");
            for (let t = l.length - 1; h > 0 && t >= h && ("0" == l[t] || "." == l[t]); --t) ++n;
            return l.substr(0, l.length - n)
        }
        transGoldShortString(t, e = 4) {
            let o = "",
                r = !1;
            t < 0 && (r = !0, t = -t);
            let i = a.StringTools.serverGoldToShowNumber(t),
                s = Math.pow(10, 6),
                l = Math.pow(10, 9),
                n = Math.pow(10, 4);
            return o = i >= Math.pow(10, e) ? i >= 10 * l ? this.transNumberToString(t / l) + a.config.getStringData("Humanboy_game_gold_short_suffix_billion") : i >= 100 * s ? this.transNumberToString(t / s) + a.config.getStringData("Humanboy_game_gold_short_suffix_million") : i >= n ? this.transNumberToString(t / n) + a.config.getStringData("Humanboy_game_gold_short_suffix_w") : this.transNumberToString(t) : this.transNumberToString(t), r && (o = "-" + o), o
        }
        updatePlayerSettleKeepWinCountAndCoin() {
            for (let t = 0; t < this.vPlayerSettles.length; ++t) {
                let e = this.vPlayerSettles[t];
                e.uid == this.tSelfPlayer.uid && (this.tSelfPlayer.curCoin = e.curCoin, this.tSelfPlayer.keepWinCount = e.keepWinCount), this.vOtherPlayer.forEach((t => {
                    e.uid == t.uid && (t.curCoin = e.curCoin, t.keepWinCount = e.keepWinCount)
                }))
            }
        }
        updatePlayerCoin(t, e) {
            if (t == this.u32Uid) this.tSelfPlayer.curCoin = e;
            else
                for (let a = 0; a < this.vOtherPlayer.length; ++a)
                    if (this.vOtherPlayer[a].uid === t) {
                        this.vOtherPlayer[a].curCoin = e;
                        break
                    }
        }
        updateAreaBet(t) {
            let e = t.detail.option;
            this.mapZoneData.has(e) || this.mapZoneData.add(e, new s), t.uid === this.u32Uid && (this.mapZoneData.get(e).selfBet = t.selfBet), this.mapZoneData.get(e).totalBet = t.totalBet
        }
        setCurOneBet(t, e) {
            this.tCurPlayerOneBet.uid = t, this.tCurPlayerOneBet.betOption = e.option, this.tCurPlayerOneBet.betAmount = e.betAmount
        }
        getOtherPlayerByUid(t) {
            let e = null;
            for (let a = 0; a < this.vOtherPlayer.length; ++a)
                if (this.vOtherPlayer[a].uid === t) {
                    e = this.vOtherPlayer[a];
                    break
                } return e
        }
        getPlayerKeepWinCountByUid(t) {
            let e = 0;
            if (this.tSelfPlayer.uid === t) e = this.tSelfPlayer.keepWinCount;
            else
                for (let a = 0; a < this.vOtherPlayer.length; ++a)
                    if (this.vOtherPlayer[a].uid === t) {
                        e = this.vOtherPlayer[a].keepWinCount;
                        break
                    } return e
        }
        isInDealerWatingList(t) {
            let e = !1;
            for (let a = 0; a < this.vDealerWatingList.length; ++a)
                if (this.vDealerWatingList[a].uid === t) {
                    e = !0;
                    break
                } return e
        }
        isInDealerCandidateList(t) {
            let e = !1;
            for (let a = 0; a < this.vDealerCandidateList.length; ++a)
                if (this.vDealerCandidateList[a].uid === t) {
                    e = !0;
                    break
                } return e
        }
        getDealerInfoByUid(t) {
            let e = null;
            for (let a = 0; a < this.vDealerCandidateList.length; ++a)
                if (this.vDealerCandidateList[a].uid === t) {
                    e = this.vDealerCandidateList[a];
                    break
                } return e
        }
        getPlayerBeforeSettlementGold(t) {
            let e = 0;
            return this.mapPlayerBeforeSettlementCoin.has(t) && (e = this.mapPlayerBeforeSettlementCoin.get(t)), e
        }
        setPlayerBeforeSettlementGold(t, e) {
            this.mapPlayerBeforeSettlementCoin.add(t, e, !0)
        }
    }), e._RF.pop()
}