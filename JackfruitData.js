import * as i from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cc.js";
import * as a from "./HashMap.js";
import * as o from "./cv.js";

function main() {
    var r, h;
    e._RF.push({}, "c5bc77xaRtKareZz6icFtRq", "JackfruitData", void 0);
    const {
        ccclass: n,
        property: l
    } = i;
    t("JackfruitRoomData", n(((h = class t extends s {
        constructor(...t) {
            super(...t), this.param = new d, this.curState = p.RS_DUMMY, this.cachedNotifyMsg = new c, this.fee = new u, this.barrageLeftSeconds = 0, this.nSelfSeatID = -1, this.nPrePickSeatID = -1, this.kTablePlayerList = [], this.actionDelayCountsFee = -1, this.delayedOperationPlayIds = [], this.buyinInfos = [], this.canChangeTable = !1, this.startMatchTimeStamp = 0, this.matchedSeconds = 0, this.gameUUIDs = [], this.jackpotDataInfo = new S, this.jackpotLeftAmount = -1, this.luckyOne = new y, this.JackpotRecords = [], this.BrandBarrageInfos = [], this.noticeJackPotAwardInfo = null, this.dynamicConfig = new f
        }
        static getInstance() {
            return t.g_instance || (t.g_instance = new t), t.g_instance
        }
        reset() {
            this.param.reset(), this.curState = p.RS_DUMMY, this.cachedNotifyMsg.reset(), this.fee.reset(), this.barrageLeftSeconds = 0, this.nSelfSeatID = -1, this.kTablePlayerList = [], this.actionDelayCountsFee = -1, this.delayedOperationPlayIds = [], this.buyinInfos = [], this.canChangeTable = !1, this.startMatchTimeStamp = 0, this.matchedSeconds = 0, this.gameUUIDs = [], this.jackpotDataInfo.reset(), this.jackpotLeftAmount = -1, this.luckyOne.reset(), this.JackpotRecords = [], this.BrandBarrageInfos = [], this.noticeJackPotAwardInfo = null, this.dynamicConfig.reset()
        }
        addTablePlayer(t) {
            let e = new m;
            o.StringTools.deepCopy(t, e);
            for (let e = 0; e < this.kTablePlayerList.length; e++) {
                let i = this.kTablePlayerList[e];
                if (i.playerId == t.playerId || i.seatId == t.seatId) return
            }
            this.kTablePlayerList.push(e)
        }
        setAllTablePlayerState(t) {
            for (let e of this.kTablePlayerList) e.state = t
        }
        RemoveTablePlayer(t) {
            for (let e of this.kTablePlayerList)
                if (e.playerId == t) {
                    this.kTablePlayerList.splice(this.kTablePlayerList.indexOf(e), 1);
                    break
                }
        }
        GetTablePlayer(t) {
            for (let e of this.kTablePlayerList)
                if (e.playerId == t) return e;
            return null
        }
        updateTablePlayer(t, e) {
            for (let i of this.kTablePlayerList) i.playerId == t && o.StringTools.deepCopy(e, i)
        }
        GetTablePlayerBySeatId(t) {
            for (let e of this.kTablePlayerList)
                if (e.seatId == t) return e;
            return null
        }
        updateBuyinInfo(t) {
            let e = !1;
            for (let i = 0; i < this.buyinInfos.length; i++) this.buyinInfos[i].playerId === t.playerId && (this.buyinInfos[i].totalBuyIn = t.totalBuyIn, this.buyinInfos[i].currRecord = t.currRecord, this.buyinInfos[i].handCount = t.handCount, e = !0);
            e || this.buyinInfos.push(t)
        }
    }).g_instance = void 0, r = h)) || r);
    class d {
        constructor() {
            this.ownerType = 0, this.gameMode = 0, this.playerCountMax = 0, this.gameName = "", this.ante = 0, this.manualCreated = 0, this.minimumAmount = 0, this.ruleCheckAmount = 0, this.ruleAddToAmount = 0, this.deskType = 0, this.zoneMultiple = [], this.createTime = 0, this.limitPlayers = 0, this.creatorId = 0, this.creatorName = "", this.gameTimeLimit = 0, this.idleSecs = 0, this.ruleCheckScore = 0, this.ruleAddToScore = 0, this.ruleServeScore = 0
        }
        reset() {
            this.ownerType = 0, this.gameMode = 0, this.playerCountMax = 0, this.gameName = "", this.ante = 0, this.manualCreated = 0, this.minimumAmount = 0, this.ruleCheckAmount = 0, this.ruleAddToAmount = 0, this.deskType = 0, this.zoneMultiple = [], this.createTime = 0, this.limitPlayers = 0, this.creatorId = 0, this.creatorName = "", this.gameTimeLimit = 0, this.idleSecs = 0, this.ruleCheckScore = 0, this.ruleAddToScore = 0, this.ruleServeScore = 0
        }
    }
    t("RoomParam", d);
    class c {
        constructor() {
            this.playerSettle = [], this.stopWorld = 0, this.pubCards = [], this.leftSeconds = 0, this.nextStateStamp = 0, this.settleType = 0, this.onlyWinAmount = 0
        }
        reset() {
            this.playerSettle = [], this.stopWorld = 0, this.pubCards = [], this.leftSeconds = 0, this.nextStateStamp = 0, this.settleType = 0, this.onlyWinAmount = 0
        }
    }
    t("GameRoundEndNotify", c);
    class u {
        constructor() {
            this.emotionFee = 0, this.emotionFee2 = 0, this.magicEmojiFee = 0
        }
        reset() {
            this.emotionFee = 0, this.emotionFee2 = 0, this.magicEmojiFee = 0
        }
    }
    t("PayMoneyItems", u);
    class m {
        constructor() {
            this.playerId = void 0, this.seatId = void 0, this.name = void 0, this.headUrl = void 0, this.marks = void 0, this.gender = void 0, this.lastVoice = void 0, this.amount = void 0, this.state = void 0, this.holeCards = [], this.headCards = [], this.middleCards = [], this.tailCards = [], this.settleScore = void 0, this.settleAmount = void 0, this.score = void 0, this.plat = void 0, this.is_online = void 0, this.user_join_room_time = void 0, this.NotDisturbUids = []
        }
    }
    t("PlayerInfo", m);
    t("PlayerSettle", class {
        constructor() {
            this.player = void 0, this.headResult = void 0, this.middleResult = void 0, this.tailResult = void 0, this.repeatWining = void 0, this.winAllAward = void 0, this.result = void 0, this.totalScore = void 0, this.winAmount = void 0, this.resultScore = void 0, this.winScore = void 0
        }
    });
    t("PlaceResult", class {
        constructor() {
            this.score = 0, this.result = 0, this.level = v.Dump, this.zoneMultiple = 0, this.levelScore = 0
        }
        reset() {
            this.score = 0, this.result = 0, this.level = v.Dump, this.zoneMultiple = 0, this.levelScore = 0
        }
    });
    t("CardItem", class {
        constructor() {
            this.number = void 0, this.suit = void 0
        }
    });
    t("DealNotify", class {
        constructor() {
            this.roomID = void 0, this.seatList = void 0, this.holdCards = void 0, this.publicCards = void 0, this.leftSeconds = void 0, this.nextStateStamp = void 0, this.actionDelayCountsFee = void 0
        }
    });
    t("BuyInNotify", class {
        constructor() {
            this.seatId = void 0, this.playerId = void 0, this.playerName = void 0, this.buyInAmount = void 0, this.amount = void 0, this.isAuto = void 0, this.roomId = void 0, this.score = void 0, this.buyInScore = void 0
        }
    });
    t("ObPlayer", class {
        constructor() {
            this.data = void 0, this.name = void 0, this.headPath = void 0, this.playerid = void 0, this.marks = void 0, this.isInroom = void 0, this.plat = void 0, this.is_online = void 0, this.user_join_room_time = void 0
        }
    });
    t("PlayerBuyInInfo", class {
        constructor() {
            this.playerName = void 0, this.playerId = void 0, this.totalBuyIn = void 0, this.currRecord = void 0, this.totalBuyInScore = void 0, this.currRecordScore = void 0, this.handCount = void 0
        }
    });
    class S {
        constructor() {
            this.leftAmount = void 0, this.boundaryScore = void 0, this.contrScore = void 0, this.huangTongPer = void 0, this.siTiaoPer = void 0, this.tongHuaShunPer = void 0
        }
        reset() {
            this.leftAmount = 0, this.boundaryScore = 0, this.contrScore = 0, this.huangTongPer = 0, this.siTiaoPer = 0, this.tongHuaShunPer = 0
        }
    }
    t("JackpotDataInfo", S);
    t("BrandBarrageType", function(t) {
        return t[t.BrandBarrageType_DUMMY = 0] = "BrandBarrageType_DUMMY", t[t.LIKE = 1] = "LIKE", t[t.DESPISE = 2] = "DESPISE", t
    }({}));
    t("BrandBarrageInfo", class {
        constructor() {
            this.card = void 0, this.type = void 0, this.index = void 0, this.hasReverse = void 0
        }
    });
    class y {
        constructor() {
            this.playerId = 0, this.level = v.Dump, this.awardAmount = 0, this.awardTime = 0, this.playerName = "", this.ante = 0
        }
        reset() {
            this.playerId = 0, this.level = v.Dump, this.awardAmount = 0, this.awardTime = 0, this.playerName = "", this.ante = 0
        }
    }
    t("JackpotAwardInfo", y);
    t("GameRecord", class {
        constructor() {
            this.playerSettle = [], this.pubCards = []
        }
    });
    let p = t("eRoundState", function(t) {
            return t[t.RS_DUMMY = 0] = "RS_DUMMY", t[t.RS_FREE = 1] = "RS_FREE", t[t.RS_READY = 2] = "RS_READY", t[t.RS_WAIT = 11] = "RS_WAIT", t[t.RS_DEAL = 12] = "RS_DEAL", t[t.RS_PLACE_CARDS = 13] = "RS_PLACE_CARDS", t[t.RS_TURN = 14] = "RS_TURN", t[t.RS_RIVER = 18] = "RS_RIVER", t[t.RS_SETTLEMENT = 20] = "RS_SETTLEMENT", t
        }({})),
        v = (t("ePlayerState", function(t) {
            return t[t.SeatState_DUMMY = 0] = "SeatState_DUMMY", t[t.SFree = 1] = "SFree", t[t.SReady = 2] = "SReady", t[t.SClickReady = 8] = "SClickReady", t[t.SWaitPlaceCards = 11] = "SWaitPlaceCards", t[t.SPlaceCards = 13] = "SPlaceCards", t[t.SModifyPlaceCards = 14] = "SModifyPlaceCards", t[t.SConfirmsPlaceCards = 15] = "SConfirmsPlaceCards", t[t.SWaitResult = 20] = "SWaitResult", t
        }({})), t("eSeatStatus", function(t) {
            return t[t.SeatStatus_empty = 0] = "SeatStatus_empty", t[t.SeatStatus_waiting = 1] = "SeatStatus_waiting", t[t.SeatStatus_inGame = 2] = "SeatStatus_inGame", t[t.SeatStatus_ready = 3] = "SeatStatus_ready", t[t.SeatStatus_wait_ready = 4] = "SeatStatus_wait_ready", t[t.SeatStatus_waiting_bubble = 5] = "SeatStatus_waiting_bubble", t
        }({})), t("CardLevel", function(t) {
            return t[t.Dump = 0] = "Dump", t[t.HighCard = 1] = "HighCard", t[t.OnePair = 2] = "OnePair", t[t.TwoPair = 3] = "TwoPair", t[t.ThreeOfAKind = 4] = "ThreeOfAKind", t[t.StraightI = 5] = "StraightI", t[t.Flush = 6] = "Flush", t[t.FullHouse = 7] = "FullHouse", t[t.FourOfAKind = 8] = "FourOfAKind", t[t.StraightFlush = 9] = "StraightFlush", t[t.RoyalFlush = 10] = "RoyalFlush", t
        }({})));
    t("ChatType", function(t) {
        return t[t.Enum_Emoji = 0] = "Enum_Emoji", t[t.Enum_Voice = 1] = "Enum_Voice", t[t.Enum_Emoji_Interactive = 2] = "Enum_Emoji_Interactive", t[t.Enum_Barrage = 3] = "Enum_Barrage", t
    }({})), t("BarrageType", function(t) {
        return t[t.Enum_System = 0] = "Enum_System", t[t.Enum_Custom = 1] = "Enum_Custom", t[t.Enum_CardType = 2] = "Enum_CardType", t
    }({}));
    t("BuYinData", class {
        constructor() {
            this.needAmount = 0, this.amount = 0, this.needScore = 0, this.score = 0
        }
    });
    t("SettleResp", class {
        constructor() {
            this.settleScore = 0, this.settleAmount = 0
        }
    });
    t("JackfruitRecordsData", class {
        constructor() {
            this.recordCaches = new a
        }
        reset() {
            this.recordCaches.clear()
        }
        hasJsonValue(t) {
            let e = !1;
            return this.recordCaches.forEach(((i, s) => {
                if (i === t) return e = !0, "break"
            })), e
        }
    });
    t("NoticeJackPotAwardInfo", class {
        constructor() {
            this.award_playid = 0, this.award_amount = 0, this.hand_level = 0, this.award_player_name = "", this.cur_time = 0, this.msg_type = 0, this.blind_level = 0, this.sys_msg_type = 0
        }
    });
    class f {
        constructor() {
            this.magicEmojiEnable = !0, this.magicEmojiDuration = 0
        }
        reset() {
            this.magicEmojiEnable = !0, this.magicEmojiDuration = 0
        }
    }
    t("DynamicConfig", f), e._RF.pop()
}