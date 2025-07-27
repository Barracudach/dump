import * as e from "./cc.js";
import * as s from "./cowboy.mjs_cjs=&original=.js";
import * as i from "./HashMap.js";
import * as o from "./HashMap.js";
import * as h from "./HashMap.js";
import * as r from "./CowboyEnum.js";
import * as a from "./cv.js";

function main() {
    e._RF.push({}, "a3501rO+4dHB7k8IS4bQJ58", "CowboyRoomData", void 0);
    class n {
        constructor() {
            this.uid = 0, this.name = "", this.head = "", this.totalBetAmount = 0, this.winCount = 0, this.rank = 0, this.curCoin = 0, this.keepWinCount = 0, this.plat = 0
        }
        reset() {
            this.uid = 0, this.name = "", this.head = "", this.totalBetAmount = 0, this.winCount = 0, this.rank = 0, this.curCoin = 0, this.keepWinCount = 0, this.plat = 0
        }
    }
    t("CowboyPlayer", n);
    class l {
        constructor() {
            this.uid = 0, this.betOption = 0, this.betAmount = 0
        }
        reset() {
            this.uid = 0, this.betOption = 0, this.betAmount = 0
        }
    }
    t("PlayerOneBet", l);
    t("BetDetail", class {
        constructor() {
            this.zone = 0, this.option = 0, this.betAmount = 0, this.auto = !1
        }
    });
    t("OddsDetail", class {
        constructor() {
            this.zone = i.ZONE_DUMMY, this.option = o.BetZoneOption_DUMMY, this.odds = 0, this.limit = 0
        }
    });
    class u {
        constructor() {
            this.roomid = 0, this.amountLevel = [], this.oddsDetail = [], this.limitPlayers = 0, this.deskType = 0, this.smallBet = 0, this.pictureCn = [], this.pictureEn = [], this.pictureTh = []
        }
        reset() {
            this.roomid = 0, this.amountLevel = [], this.oddsDetail = [], this.limitPlayers = 0, this.deskType = 0, this.smallBet = 0, this.pictureCn = [], this.pictureEn = [], this.pictureTh = []
        }
    }
    t("RoomParam", u);
    t("GameSnapShot", class {
        constructor() {
            this.param = new u, this.playerNum = 0
        }
    });
    t("TrendData", class {
        constructor() {
            this.win = o.BetZoneOption_DUMMY, this.win_patterns = 0, this.hand_num = 0
        }
    });
    t("DailyStat", class {
        constructor() {
            this.betzone_type = o.BetZoneOption_DUMMY, this.count = 0, this.win_pattern = 0
        }
    });
    t("TrendRoad", class {
        constructor() {
            this.road_row = []
        }
    });
    t("TrendRoadInfo", class {
        constructor() {
            this.win = "", this.eqc = 0
        }
    });
    class d {
        constructor() {
            this.uid = 0, this.settle = [], this.totalWinAmount = 0, this.curCoin = 0, this.keepWinCount = 0
        }
        reset() {
            this.uid = 0, this.settle = [], this.totalWinAmount = 0, this.curCoin = 0, this.keepWinCount = 0
        }
    }
    t("PlayerSettle", d);
    t("ZoneSettleDetail", class {
        constructor() {
            this.zone = 0, this.option = 0, this.betAmount = 0, this.winAmount = 0, this.isAuto = 0
        }
    });
    t("BetNotify", class {
        constructor() {
            this.uid = 0, this.detail = null, this.curCoin = 0, this.selfBet = 0, this.totalBet = 0
        }
    });
    t("CowboyZoneData", class {
        constructor() {
            this.result = void 0, this.luckLoseHand = void 0, this.maxHistoryResultsRetention = void 0, this.option = void 0, this.vHistoryResults = void 0, this.reset(!0)
        }
        reset(t) {
            this.result = 0, this.maxHistoryResultsRetention = 30, this.option = o.BetZoneOption_DUMMY, t && (this.luckLoseHand = 0, this.vHistoryResults = [])
        }
    });
    t("CowboyRoomData", class {
        constructor() {
            this.u32Uid = 0, this.u32RoomId = 0, this.roomList = [], this.snapList = [], this.pkRoomParam = a.cowboy_proto.RoomParam.create(), this.selfZoneBet = new s, this.totalZoneBet = new s, this.allZoneBet = new s, this.selfPlayer = new n, this.otherPlayers = [], this.curState = h.RoundState_DUMMY, this.nextRoundEndStamp = 0, this.leftSeconds = 0, this.publicCards = [], this.redHandCards = [], this.blueHandCards = [], this.trendData = [], this.dailyStat = [], this.trendRoad = [], this.gamePlayerList = [], this.dzplayerNum = 0, this.lastRow = 0, this.lastCol = 0, this.isOpen = !1, this.playerself = new n, this.curPlayerBet = new l, this.matchOption = [], this.result = 0, this.redLevel = 0, this.blueLevel = 0, this.winCards = [], this.playerSettles = new s, this.otherPlayersSettle = new d, this.canAuto = !1, this.historyResults = [], this.stopWorld = 0, this.showTheNewestTrend = !1, this.hasBetInCurRound = !1, this.backToMainTips = "", this.bCanUpdateWorldServerGold = !0, this.idle_roomid = 0, this.mapZoneData = new s, this.llCoinUICritical = 0, this.iUsedAutoBetCount = 0, this.iSelectAutoBetCount = 0, this.canAdvanceAuto = !1, this.eAutoLevel = a.cowboy_proto.AutoBetLevel.Level_Normal, this.vAutoBetCountList = void 0, this.vBetCoinOption = void 0, this.change_points = 0, this.reachLimitBet = void 0, this.Reset()
        }
        Reset() {
            this.u32RoomId = 0, this.pkRoomParam = a.cowboy_proto.RoomParam.create(), this.selfZoneBet.clear(), this.totalZoneBet.clear(), this.allZoneBet.clear(), this.otherPlayers = [], this.selfPlayer.reset(), this.curState = h.GAME_PENDING, this.nextRoundEndStamp = 0, this.leftSeconds = 0, this.publicCards = [], this.redHandCards = [], this.blueHandCards = [], this.playerSettles.clear(), this.otherPlayersSettle.reset(), this.trendData = [], this.dailyStat = [], this.trendRoad = [], this.curPlayerBet.reset(), this.gamePlayerList = [], this.playerself.reset(), this.matchOption = [], this.clearMapZoneData(!1), this.result = -1, this.redLevel = 0, this.blueLevel = 0, this.winCards = [], this.canAuto = !1, this.historyResults = [], this.stopWorld = 0, this.idle_roomid = 0, this.showTheNewestTrend = !0, this.hasBetInCurRound = !1, this.bCanUpdateWorldServerGold = !0, this.backToMainTips = "", this.lastRow = -1, this.lastCol = -1, this.dzplayerNum = 0, this.isOpen = !1, this.llCoinUICritical = 0, this.iUsedAutoBetCount = 0, this.iSelectAutoBetCount = 0, this.eAutoLevel = a.cowboy_proto.AutoBetLevel.Level_Normal, this.vAutoBetCountList = [], this.vBetCoinOption = [], this.change_points = 0
        }
        ResetRound() {
            this.publicCards = [], this.redHandCards = [], this.blueHandCards = [], this.otherPlayers = [], this.selfZoneBet.clear(), this.totalZoneBet.clear(), this.allZoneBet.clear(), this.historyResults = [], this.curPlayerBet.reset(), this.matchOption = [], this.result = -1, this.redLevel = 0, this.blueLevel = 0, this.winCards = [], this.playerSettles.clear(), this.otherPlayersSettle.reset(), this.hasBetInCurRound = !1, this.change_points = 0
        }
        updateSelfPlayer(t) {
            this.selfPlayer.uid = t.uid, this.selfPlayer.name = t.name, this.selfPlayer.head = t.head, this.selfPlayer.totalBetAmount = t.totalBetAmount, this.selfPlayer.winCount = t.winCount, this.selfPlayer.rank = t.rank, this.selfPlayer.curCoin = r.appConfig.getGameConfig().miniGameConfig.useMoneyFromSharePoolServer ? t.curCoin : r.dataHandler.getUserData().total_amount, r.dataHandler.getUserData().minigame_coin = this.selfPlayer.curCoin, this.selfPlayer.keepWinCount = t.keepWinCount
        }
        addPlayer(t) {
            let e = new n;
            e.uid = t.uid, e.name = t.name, e.head = t.head, e.totalBetAmount = t.totalBetAmount, e.winCount = t.winCount, e.rank = t.rank, e.curCoin = t.curCoin, e.keepWinCount = t.keepWinCount, e.plat = t.plat, this.otherPlayers.push(e)
        }
        removePlayer(t) {
            let e = this.otherPlayers.length;
            for (let s = 0; s < e; s++)
                if (this.otherPlayers[s].uid == t) {
                    this.otherPlayers.splice(s, 1);
                    break
                }
        }
        updatePlayerCoin(t, e) {
            if (t == this.u32Uid) return void(this.selfPlayer.curCoin = e);
            let s = this.otherPlayers.length;
            for (let i = 0; i < s; i++)
                if (this.otherPlayers[i].uid == t) {
                    this.otherPlayers[i].curCoin = e;
                    break
                }
        }
        getOtherPlayerByUid(t) {
            let e = this.otherPlayers.length;
            for (let s = 0; s < e; s++)
                if (this.otherPlayers[s].uid == t) {
                    let t = new n;
                    return t = this.otherPlayers[s], t
                } return null
        }
        updatePlayerKeepWinCount(t, e) {
            this.selfPlayer.uid == t && (this.selfPlayer.keepWinCount = e);
            let s = this.otherPlayers.length;
            for (let i = 0; i < s; i++) this.otherPlayers[i].uid == t && (this.otherPlayers[i].keepWinCount = e)
        }
        getPlayerKeepWinCountByUid(t) {
            if (this.selfPlayer.uid == t) return this.selfPlayer.keepWinCount;
            let e = this.otherPlayers.length;
            for (let s = 0; s < e; s++)
                if (this.otherPlayers[s].uid == t) return this.otherPlayers[s].keepWinCount;
            return 0
        }
        updateZoneBet(t, e, s, i) {
            t == this.u32Uid && this.selfZoneBet.add(e, s), this.totalZoneBet.add(e, i)
        }
        updateCurOneBet(t, e) {
            this.curPlayerBet.uid = t, this.curPlayerBet.betOption = e.option, this.curPlayerBet.betAmount = e.betAmount
        }
        removeCurrentHistoryResult() {
            return this.historyResults.length > 0 ? this.historyResults.pop() : -1
        }
        addCurrentHistoryResult(t) {
            this.historyResults.push(t)
        }
        clearMapZoneData(t) {
            this.mapZoneData.forEach(((e, s) => {
                s.reset(t)
            }))
        }
    }), e._RF.pop()
}