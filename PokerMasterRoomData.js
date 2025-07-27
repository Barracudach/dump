import * as e from "./cc.js";
import * as r from "./pokermaster.mjs_cjs=&original=.js";
import * as s from "./cv.js";
import * as o from "./HashMap.js";

function main() {
    e._RF.push({}, "384bdEnMMVDb641mWCCFYi/", "PokerMasterRoomData", void 0);
    class i {
        constructor() {
            this.option = o.pokermaster_proto.BetZoneOption.BetZoneOption_DUMMY, this.result = 0, this.totalBet = 0, this.selfBet = 0, this.odds = 0, this.limitBet = 0, this.maxHistoryResultsRetention = 30, this.luckLoseHand = 0, this.vTotalBetDetail = [], this.vHistoryResults = []
        }
        reset(t) {
            this.result = 0, this.totalBet = 0, this.selfBet = 0, this.odds = 0, this.limitBet = 0, this.option = o.pokermaster_proto.BetZoneOption.BetZoneOption_DUMMY, r.StringTools.clearArray(this.vTotalBetDetail), t && (this.luckLoseHand = 0, r.StringTools.clearArray(this.vHistoryResults))
        }
    }
    t("PokerMasterZoneData", i);
    t("PokerMasterRoomData", class {
        constructor() {
            this.u32Uid = 0, this.u32RoomId = 0, this.nStopWorld = 0, this.bCanAuto = !1, this.bHasBetInCurRound = !1, this.bCanUpdateWorldServerGold = !0, this.sBackToMainTips = "", this.tCurRoom = o.pokermaster_proto.RoomParam.create(), this.eCurState = o.pokermaster_proto.RoundState.RoundState_DUMMY, this.llLeftSeconds = 0, this.llNextRoundEndStamp = 0, this.llCoinUICritical = 0, this.iUsedAutoBetCount = 0, this.iSelectAutoBetCount = 0, this.reachLimitBet = !1, this.bCanAdvanceAuto = !1, this.eAutoLevel = o.pokermaster_proto.AutoBetLevel.Level_Normal, this.vAutoBetCountList = [], this.vBetCoinOption = [], this.tSelfPlayer = o.pokermaster_proto.GamePlayer.create(), this.vOtherPlayer = [], this.vLeftHandCards = [], this.vRightHandCards = [], this.vPublicHoleCards = [], this.vPlayerSettles = [], this.tOtherPlayerSettle = o.pokermaster_proto.PlayerSettle.create(), this.tRoundresult = o.pokermaster_proto.RoundResult.create(), this.uWhoIsLeader = 0, this.fLeftFortune = 0, this.fRightFortune = 0, this.nSkipInsureCode = o.pokermaster_proto.ErrorCode.ErrorCode_DUMMY, this.bCanSquint = !1, this.bSkipSquint = !1, this.vLastResult = [], this.nMaxLastResultRetention = 20, this.mapZoneData = new s, this.vTrendData = [], this.vTrendRoad = [], this.vBetReview = [], this.tFortune = o.pokermaster_proto.PlayerFortune.create(), this.iLastRow = 0, this.iLastCol = 0, this.brdzplayerNum = 0, this.lastResult = [], this.gamePlayerList = [], this.fisherLevel = 0, this.sharkLevel = 0, this.sharkOuts = [], this.dashiOuts = [], this.change_points = 0, this.idle_roomid = 0
        }
        reset() {
            this.u32Uid = 0, this.u32RoomId = 0, this.nStopWorld = 0, this.idle_roomid = 0, this.bCanAuto = !1, this.bHasBetInCurRound = !1, this.bCanUpdateWorldServerGold = !1, this.sBackToMainTips = "", this.tCurRoom = o.pokermaster_proto.RoomParam.create(), this.eCurState = o.pokermaster_proto.RoundState.RoundState_DUMMY, this.llLeftSeconds = 0, this.llNextRoundEndStamp = 0, this.llCoinUICritical = 0, this.iUsedAutoBetCount = 0, this.iSelectAutoBetCount = 0, this.bCanAdvanceAuto = !1, this.eAutoLevel = o.pokermaster_proto.AutoBetLevel.Level_Normal, r.StringTools.clearArray(this.vAutoBetCountList), r.StringTools.clearArray(this.vBetCoinOption), this.tSelfPlayer = o.pokermaster_proto.GamePlayer.create(), this.tOtherPlayerSettle = o.pokermaster_proto.PlayerSettle.create(), this.tRoundresult = o.pokermaster_proto.RoundResult.create(), r.StringTools.clearArray(this.vOtherPlayer), r.StringTools.clearArray(this.vLeftHandCards), r.StringTools.clearArray(this.vRightHandCards), r.StringTools.clearArray(this.vPublicHoleCards), r.StringTools.clearArray(this.vPlayerSettles), this.uWhoIsLeader = 0, this.fLeftFortune = 0, this.fRightFortune = 0, this.nSkipInsureCode = o.pokermaster_proto.ErrorCode.ErrorCode_DUMMY, this.bCanSquint = !1, this.bSkipSquint = !1, r.StringTools.clearArray(this.vLastResult), r.StringTools.clearArray(this.vTrendData), r.StringTools.clearArray(this.vTrendRoad), r.StringTools.clearArray(this.vBetReview), this.tFortune = o.pokermaster_proto.PlayerFortune.create(), this.iLastRow = 0, this.iLastCol = 0, this.brdzplayerNum = 0, this.fisherLevel = 0, this.sharkLevel = 0, r.StringTools.clearArray(this.gamePlayerList), r.StringTools.clearArray(this.lastResult), this.clearMapZoneData(!0), r.StringTools.clearArray(this.sharkOuts), r.StringTools.clearArray(this.dashiOuts), this.change_points = 0
        }
        resetRound() {
            this.bHasBetInCurRound = !1, this.bCanUpdateWorldServerGold = !1, this.eCurState = o.pokermaster_proto.RoundState.RoundState_DUMMY, this.llLeftSeconds = 0, this.llNextRoundEndStamp = 0, this.tOtherPlayerSettle = o.pokermaster_proto.PlayerSettle.create(), this.tRoundresult = o.pokermaster_proto.RoundResult.create(), r.StringTools.clearArray(this.vLeftHandCards), r.StringTools.clearArray(this.vRightHandCards), r.StringTools.clearArray(this.vPublicHoleCards), r.StringTools.clearArray(this.vPlayerSettles), this.uWhoIsLeader = 0, this.nSkipInsureCode = o.pokermaster_proto.ErrorCode.ErrorCode_DUMMY, this.bCanSquint = !1, this.bSkipSquint = !1, this.fisherLevel = 0, this.sharkLevel = 0, this.clearMapZoneData(!1), r.StringTools.clearArray(this.sharkOuts), r.StringTools.clearArray(this.dashiOuts), this.change_points = 0
        }
        clearMapZoneData(t) {
            this.mapZoneData.forEach(((e, r) => {
                r.reset(t)
            }))
        }
        transNumberToString(t, e = 2, s = !1) {
            let o = r.StringTools.serverGoldToShowNumber(t),
                i = "";
            s && (i = o >= 0 ? "+" : "");
            let a = "%s%" + r.StringTools.formatC(".%df", e),
                l = r.StringTools.formatC(a, i, o),
                n = 0,
                h = l.indexOf(".");
            for (let t = l.length - 1; h > 0 && t >= h && ("0" == l[t] || "." == l[t]); --t) ++n;
            return l.substr(0, l.length - n)
        }
        transGoldShortString(t, e = 4, s = !0) {
            let o = "",
                i = !1;
            t < 0 && (i = !0, t = -t);
            let a = r.StringTools.serverGoldToShowNumber(t);
            if (!s) return r.StringTools.numberToString(a);
            let l = Math.pow(10, 6),
                n = Math.pow(10, 3);
            return o = a >= Math.pow(10, e) ? a >= l ? this.transNumberToString(t / l) + r.config.getStringData("Cowboy_million_coin_short_text") : a >= n ? this.transNumberToString(t / n) + r.config.getStringData("Cowboy_coin_short_text") : this.transNumberToString(t) : this.transNumberToString(t), i && (o = "-" + o), o
        }
        updatePlayerSettleKeepWinCountAndCoin() {
            for (let t = 0; t < this.vPlayerSettles.length; ++t) {
                let e = this.vPlayerSettles[t];
                e.uid == this.tSelfPlayer.uid && (this.tSelfPlayer.curCoin = e.curCoin, this.tSelfPlayer.keepWinCount = e.keepWinCount, r.dataHandler.getUserData().minigame_coin = e.curCoin), this.vOtherPlayer.forEach((t => {
                    e.uid == t.uid && (t.curCoin = e.curCoin, t.keepWinCount = e.keepWinCount)
                }))
            }
        }
        updatePlayerCoin(t, e) {
            if (t == this.u32Uid) this.tSelfPlayer.curCoin = e, r.dataHandler.getUserData().minigame_coin = e;
            else
                for (let r = 0; r < this.vOtherPlayer.length; ++r)
                    if (this.vOtherPlayer[r].uid === t) {
                        this.vOtherPlayer[r].curCoin = e;
                        break
                    }
        }
        updateAreaBet(t) {
            let e = t.detail.option;
            this.mapZoneData.has(e) || this.mapZoneData.add(e, new i), t.uid === this.u32Uid && (this.mapZoneData.get(e).selfBet = t.selfBet), this.mapZoneData.get(e).totalBet = t.totalBet
        }
        getOtherPlayerByUid(t) {
            let e = null;
            for (let r = 0; r < this.vOtherPlayer.length; ++r)
                if (this.vOtherPlayer[r].uid === t) {
                    e = this.vOtherPlayer[r];
                    break
                } return e
        }
        getPlayerKeepWinCountByUid(t) {
            let e = 0;
            if (this.tSelfPlayer.uid === t) e = this.tSelfPlayer.keepWinCount;
            else
                for (let r = 0; r < this.vOtherPlayer.length; ++r)
                    if (this.vOtherPlayer[r].uid === t) {
                        e = this.vOtherPlayer[r].keepWinCount;
                        break
                    } return e
        }
    }), e._RF.pop()
}