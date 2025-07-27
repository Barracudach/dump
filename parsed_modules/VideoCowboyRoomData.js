import * as e from "./cc.js";
import * as s from "./video_cowboy.mjs_cjs=&original=.js";
import * as i from "./HashMap.js";
import * as h from "./RoomData.js";
import * as o from "./RoomData.js";
import * as a from "./RoomData.js";
import * as r from "./CowboyEnum.js";
import * as n from "./cv.js";

function main() {
    e._RF.push({}, "37e9fj7mN5B3LrE54wb57gK", "VideoCowboyRoomData", void 0);
    class l {
        constructor() {
            this.uid = 0, this.name = "", this.head = "", this.totalBetAmount = 0, this.winCount = 0, this.rank = 0, this.curCoin = 0, this.keepWinCount = 0, this.plat = 0
        }
        reset() {
            this.uid = 0, this.name = "", this.head = "", this.totalBetAmount = 0, this.winCount = 0, this.rank = 0, this.curCoin = 0, this.keepWinCount = 0, this.plat = 0
        }
    }
    t("CowboyPlayer", l);
    class u {
        constructor() {
            this.uid = 0, this.betOption = 0, this.betAmount = 0
        }
        reset() {
            this.uid = 0, this.betOption = 0, this.betAmount = 0
        }
    }
    t("PlayerOneBet", u);
    t("BetDetail", class {
        constructor() {
            this.zone = 0, this.option = 0, this.betAmount = 0, this.auto = !1
        }
    });
    t("OddsDetail", class {
        constructor() {
            this.zone = o.ZONE_DUMMY, this.option = h.BetZoneOption_DUMMY, this.odds = 0, this.limit = 0
        }
    });
    class d {
        constructor() {
            this.roomid = 0, this.amountLevel = [], this.oddsDetail = [], this.limitPlayers = 0, this.deskType = 0, this.smallBet = 0, this.pictureCn = [], this.pictureEn = [], this.pictureTh = []
        }
        reset() {
            this.roomid = 0, this.amountLevel = [], this.oddsDetail = [], this.limitPlayers = 0, this.deskType = 0, this.smallBet = 0, this.pictureCn = [], this.pictureEn = [], this.pictureTh = []
        }
    }
    t("RoomParam", d);
    t("GameSnapShot", class {
        constructor() {
            this.param = new d, this.playerNum = 0
        }
    });
    t("TrendData", class {
        constructor() {
            this.win = h.BetZoneOption_DUMMY, this.win_patterns = 0, this.hand_num = 0
        }
    });
    t("DailyStat", class {
        constructor() {
            this.betzone_type = h.BetZoneOption_DUMMY, this.count = 0, this.win_pattern = 0
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
    class c {
        constructor() {
            this.uid = 0, this.settle = [], this.totalWinAmount = 0, this.curCoin = 0, this.keepWinCount = 0
        }
        reset() {
            this.uid = 0, this.settle = [], this.totalWinAmount = 0, this.curCoin = 0, this.keepWinCount = 0
        }
    }
    t("PlayerSettle", c);
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
            this.result = 0, this.maxHistoryResultsRetention = 30, this.option = h.BetZoneOption_DUMMY, t && (this.luckLoseHand = 0, this.vHistoryResults = [])
        }
    });
    t("tGameNodeScale", class {
        constructor(t, e) {
            this.node = null, this.scale = 0, this.node = t, this.scale = e
        }
    });
    t("VideoCowboyRoomData", class {
        constructor() {
            this.u32Uid = 0, this.u32RoomId = 0, this.roomList = [], this.snapList = [], this.pkRoomParam = n.video_cowboy_proto.RoomParam.create(), this.selfZoneBet = new s, this.totalZoneBet = new s, this.allZoneBet = new s, this.selfPlayer = new l, this.otherPlayers = [], this.curState = a.RoundState_DUMMY, this.nextRoundEndStamp = 0, this.leftSeconds = 0, this.publicCards = [], this.redHandCards = [], this.blueHandCards = [], this.lasttrendData = [], this.trendData = [], this.dailyStat = [], this.trendRoad = [], this.lastdailyStat = [], this.gamePlayerList = [], this.xianluList = [], this.openCardData = new s, this.dzplayerNum = 0, this.lastRow = 0, this.lastCol = 0, this.isOpen = !1, this.playerself = new l, this.curPlayerBet = new u, this.matchOption = [], this.result = 0, this.redLevel = 0, this.blueLevel = 0, this.winCards = [], this.playerSettles = new s, this.otherPlayersSettle = new c, this.canAuto = !1, this.historyResults = [], this.stopWorld = 0, this.showTheNewestTrend = !1, this.hasBetInCurRound = !1, this.backToMainTips = "", this.bCanUpdateWorldServerGold = !0, this.mapZoneData = new s, this.llCoinUICritical = 0, this.iUsedAutoBetCount = 0, this.iSelectAutoBetCount = 0, this.canAdvanceAuto = !1, this.eAutoLevel = n.video_cowboy_proto.AutoBetLevel.Level_Normal, this.vAutoBetCountList = void 0, this.vBetCoinOption = void 0, this.change_points = 0, this.idle_roomid = 0, this.reachLimitBet = void 0, this.Reset()
        }
        Reset() {
            this.u32RoomId = 0, this.pkRoomParam = n.video_cowboy_proto.RoomParam.create(), this.selfZoneBet.clear(), this.totalZoneBet.clear(), this.allZoneBet.clear(), this.otherPlayers = [], this.selfPlayer.reset(), this.curState = a.GAME_PENDING, this.nextRoundEndStamp = 0, this.leftSeconds = 0, this.publicCards = [], this.redHandCards = [], this.blueHandCards = [], this.playerSettles.clear(), this.otherPlayersSettle.reset(), this.trendData = [], this.lasttrendData = [], this.dailyStat = [], this.trendRoad = [], this.lastdailyStat = [], this.curPlayerBet.reset(), this.gamePlayerList = [], this.openCardData.clear(), this.playerself.reset(), this.matchOption = [], this.clearMapZoneData(!1), this.result = -1, this.redLevel = 0, this.blueLevel = 0, this.winCards = [], this.canAuto = !1, this.historyResults = [], this.stopWorld = 0, this.idle_roomid = 0, this.showTheNewestTrend = !0, this.hasBetInCurRound = !1, this.bCanUpdateWorldServerGold = !0, this.backToMainTips = "", this.lastRow = -1, this.lastCol = -1, this.dzplayerNum = 0, this.isOpen = !1, this.llCoinUICritical = 0, this.iUsedAutoBetCount = 0, this.iSelectAutoBetCount = 0, this.eAutoLevel = n.video_cowboy_proto.AutoBetLevel.Level_Normal, this.vAutoBetCountList = [], this.vBetCoinOption = [], this.change_points = 0
        }
        ResetRound() {
            this.publicCards = [], this.redHandCards = [], this.blueHandCards = [], this.otherPlayers = [], this.selfZoneBet.clear(), this.openCardData.clear(), this.totalZoneBet.clear(), this.allZoneBet.clear(), this.historyResults = [], this.curPlayerBet.reset(), this.matchOption = [], this.result = -1, this.redLevel = 0, this.blueLevel = 0, this.winCards = [], this.playerSettles.clear(), this.otherPlayersSettle.reset(), this.hasBetInCurRound = !1, this.change_points = 0
        }
        updateSelfPlayer(t) {
            this.selfPlayer.uid = t.uid, this.selfPlayer.name = t.name, this.selfPlayer.head = t.head, this.selfPlayer.totalBetAmount = t.totalBetAmount, this.selfPlayer.winCount = t.winCount, this.selfPlayer.rank = t.rank, this.selfPlayer.curCoin = t.curCoin, this.selfPlayer.keepWinCount = t.keepWinCount
        }
        addPlayer(t) {
            let e = new l;
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
                    let t = new l;
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
        updateOpenCardData(t) {
            let e = t.cardIndex,
                s = this.openCardData.get(e);
            if (s) s.number = t.card.number, s.suit = t.card.suit;
            else {
                let s = new i;
                r.StringTools.deepCopy(t.card, s), this.openCardData.add(e, s)
            }
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