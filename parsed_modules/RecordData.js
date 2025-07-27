import * as s from "./cc.js";
import * as n from "./Enum.js";
import * as i from "./Enum.js";
import * as e from "./HashMap.js";
import * as h from "./RoomData.js";

function main() {
    s._RF.push({}, "13be6uNDJVMuaMBbWIo51ke", "RecordData", void 0);
    t("HandCardType", class {
        constructor() {
            this.eCardNum = i.CARD_2, this.eCardSuit = n.CARD_DIAMOND
        }
    });
    t("RecordsData", class {
        constructor() {
            this.sRoomUUID = "0", this.nCreateTime = 0, this.nSelfWinbet = 0, this.nInsuranceWinbet = 0, this.nJackpotWinbet = 0, this.nSelfNetMargin = 0, this.nHandCount = 0, this.nBuyIn = 0, this.nServiceFee = 0, this.sOwnerName = "", this.sOwnerHead = "", this.tRoomParam = new h
        }
    });
    t("BuyInsData", class {
        constructor() {
            this.nUID = 0, this.nTotalBuyin = 0, this.nWinBet = 0, this.nInsuraceWinbet = 0, this.nInsuranceBetAmount = 0, this.nHand = 0, this.nDrawin = 0, this.nJackpotWinbet = 0, this.sPlayername = "", this.sPlayerHead = "", this.nLastBuyinClubid = 0, this.nAward2CludFund = 0
        }
    });
    t("PlayerRecord", class {
        constructor() {
            this.nPlayerBettingRoundBet = 0, this.nWinBet = 0, this.nInsuranceBet = 0, this.nInsuranceAmount = 0, this.nJackWinbet = 0, this.nPlayerID = 0, this.sPlayerName = "", this.sPlayerHead = "", this.bMuck = !1, this.bActiveShow = !1, this.bForceShowDown = !1, this.nLastRoundType = 0, this.vCards = [], this.plat = 0, this.seatNo = -1, this.seatInfo = 0, this.bFold = !1, this.nReviewSendOutLen = 0, this.nReviewSendOutActLen = 0, this.bForceShowedAct = !1, this.jackpotType = 0
        }
    });
    t("ClubInfo", class {
        constructor() {
            this.sClubName = "", this.nCreateClubUid = 0, this.nOwnerId = 0, this.nClubId = 0, this.vUID = []
        }
    });
    t("AllinceResultInfo", class {
        constructor() {
            this.sAllianceName = "", this.nAllianceID = 0, this.vClubID = []
        }
    });
    class a {
        constructor() {
            this.nClubID = 0, this.nRoomID = 0, this.sGameUUID = "", this.sRoomUUID = "", this.nCreateTime = 0, this.nTotalPot = 0, this.nMaxPot = 0, this.nInsuranceWinbet = 0, this.nJackpotWinbet = 0, this.nGameMode = 0, this.nShortFull = 0, this.bMirco = !1, this.nGameid = 0, this.bAssociatedJackpot = !0, this.objReplay = null, this.objReplayInsurance = null, this.vPlayerRecords = [], this.vPublicCards = [], this.vUnsendPublicCards = [], this.bForceShowcard = !1, this.bStarClosed = !0, this.vShowCardByStanderUID = [], this.nJackpotTotalWinbet = 0
        }
        reset() {
            this.nClubID = 0, this.nRoomID = 0, this.sGameUUID = "", this.sRoomUUID = "", this.nCreateTime = 0, this.nTotalPot = 0, this.nMaxPot = 0, this.nInsuranceWinbet = 0, this.nJackpotWinbet = 0, this.nGameMode = 0, this.nShortFull = 0, this.bMirco = !1, this.nGameid = 0, this.bAssociatedJackpot = !1, this.objReplay = null, this.objReplayInsurance = null, this.vPlayerRecords = [], this.vPublicCards = [], this.vUnsendPublicCards = [], this.bForceShowcard = !1, this.bStarClosed = !0, this.nJackpotTotalWinbet = 0
        }
    }
    t("PokerHandData", a);
    class o {
        constructor() {
            this.sRoomUUID = "", this.nCreateTime = 0, this.nTotalHand = 0, this.nSelfWinbet = 0, this.nMaxPot = 0, this.nInsurance_Winbet = 0, this.nJackpotWinbet = 0, this.nTotalBuyin = 0, this.nAllianceId = 0, this.sOwnerName = "", this.sAllianceName = "", this.sOwnerClubName = "", this.vClubs = [], this.vClubAdminids = [], this.vHandUUIDList = [], this.vBuyinList = [], this.vAllinceResultInfos = [], this.tRoomParam = new h
        }
        reset() {
            this.sRoomUUID = "", this.nCreateTime = 0, this.nTotalHand = 0, this.nSelfWinbet = 0, this.nMaxPot = 0, this.nInsurance_Winbet = 0, this.nJackpotWinbet = 0, this.nTotalBuyin = 0, this.nAllianceId = 0, this.sOwnerName = "", this.sAllianceName = "", this.sOwnerClubName = "", this.vClubs = [], this.vClubAdminids = [], this.vHandUUIDList = [], this.vBuyinList = [], this.vAllinceResultInfos = [], this.tRoomParam.reset()
        }
        getBuyInData(t) {
            let s = null;
            for (let i = 0; i < this.vBuyinList.length; ++i)
                if (t === this.vBuyinList[i].nUID) {
                    s = this.vBuyinList[i];
                    break
                } return s
        }
        getClubInfoByClubId(t) {
            let s = null;
            for (let i = 0; i < this.vClubs.length; ++i)
                if (t === this.vClubs[i].nClubId) {
                    s = this.vClubs[i];
                    break
                } return s
        }
        getClubTotalBuyin(t) {
            let s = 0;
            for (let i = 0; i < t.length; ++i)
                for (let n = 0; n < this.vBuyinList.length; ++n) t[i] === this.vBuyinList[n].nUID && (s += this.vBuyinList[n].nTotalBuyin);
            return s
        }
        getClubTotalWinbet(t) {
            let s = 0;
            for (let i = 0; i < t.length; ++i) {
                for (let n = 0; n < this.vBuyinList.length; ++n) t[i] === this.vBuyinList[n].nUID && (s += this.vBuyinList[n].nWinBet);
                return s
            }
        }
        getClubTotalJackpotWinbet(t) {
            let s = 0;
            for (let i = 0; i < t.length; ++i) {
                for (let n = 0; n < this.vBuyinList.length; ++n) t[i] === this.vBuyinList[n].nUID && (s += this.vBuyinList[n].nDrawin);
                return s
            }
        }
        getAward2ClubFund(t) {
            let s = 0;
            for (let i = 0; i < t.length; ++i) {
                for (let n = 0; n < this.vBuyinList.length; ++n) t[i] === this.vBuyinList[n].nUID && (s += this.vBuyinList[n].nAward2CludFund);
                return s
            }
        }
        getClubTotalInsurance(t) {
            let s = 0;
            for (let i = 0; i < t.length; ++i) {
                for (let n = 0; n < this.vBuyinList.length; ++n) t[i] === this.vBuyinList[n].nUID && (s += this.vBuyinList[n].nInsuraceWinbet - this.vBuyinList[n].nInsuranceBetAmount);
                return s
            }
        }
    }
    t("PokerInfoData", o);
    t("GameRecordsData", class {
        constructor() {
            this.nRecordsTexasCount = 0, this.nRecordsAofCount = 0, this.nRecordsBetCount = 0, this.sCurRoomuuid = "", this.gameID = 0, this.tPokerHandData = new a, this.tPokerInfoData = new o, this.mHandMapCache = new e, this.vRecordTexasList = [], this.vRecordAofList = [], this.vRecordBetList = []
        }
        reset() {
            this.nRecordsTexasCount = 0, this.nRecordsAofCount = 0, this.nRecordsBetCount = 0, this.sCurRoomuuid = "", this.gameID = 0, this.tPokerHandData.reset(), this.tPokerInfoData.reset(), this.mHandMapCache.clear(), this.vRecordTexasList = [], this.vRecordAofList = [], this.vRecordBetList = []
        }
        isCanSeeAllianceResult(t) {
            let s = !1;
            if (this.tPokerInfoData.vClubs.length > 0)
                for (let i = 0; i < this.tPokerInfoData.vClubAdminids.length; ++i)
                    if (t === this.tPokerInfoData.vClubAdminids[i]) {
                        s = !0;
                        break
                    } return s
        }
        addRecordAofList(t) {
            for (let s = 0; s < this.vRecordAofList.length; ++s) {
                if (t.sRoomUUID === this.vRecordAofList[s].sRoomUUID) return;
                this.vRecordAofList.push(t)
            }
        }
        addRecordTexasList(t) {
            for (let s = 0; this.vRecordTexasList.length; ++s) {
                if (t.sRoomUUID === this.vRecordTexasList[s].sRoomUUID) return;
                this.vRecordTexasList.push(t)
            }
        }
        hasJsonValue(t) {
            let s = !1;
            return this.mHandMapCache.forEach(((i, n) => {
                if (i === t) return s = !0, "break"
            })), s
        }
    });
    t("CollectUUIDS", class {
        constructor() {
            this.sUUID = "", this.nAddTime = 0
        }
    });
    t("CollectPokerMapData", class {
        constructor() {
            this.nCollectHaveCount = 0, this.nCollectCurGetCount = 0, this.nCurPageSize = 1, this.nPageNum = 100, this.sCurCollectUUID = "", this.tPokerHandData = new a, this.vCollectUUidList = [], this.mHandMapCache = new e
        }
        reset() {
            this.nCollectHaveCount = 0, this.nCollectCurGetCount = 0, this.nPageNum = 100, this.nCurPageSize = 1, this.sCurCollectUUID = "", this.tPokerHandData.reset(), this.vCollectUUidList = [], this.mHandMapCache.clear()
        }
        isHaveCollect(t) {
            for (let s = 0; s < this.vCollectUUidList.length; ++s)
                if (this.vCollectUUidList[s].sUUID === t) return !0;
            return !1
        }
        hasJsonValue(t) {
            let s = !1;
            return this.mHandMapCache.forEach(((i, n) => {
                if (i === t) return s = !0, "break"
            })), s
        }
    });
    t("GameReviewBettingRoundType", function(t) {
        return t[t.Enum_BettingRound_None = 0] = "Enum_BettingRound_None", t[t.Enum_BettingRound_Preflop = 1] = "Enum_BettingRound_Preflop", t[t.Enum_BettingRound_Flop = 2] = "Enum_BettingRound_Flop", t[t.Enum_BettingRound_Turn = 3] = "Enum_BettingRound_Turn", t[t.Enum_BettingRound_River = 4] = "Enum_BettingRound_River", t[t.Enum_BettingRound_ShowDown = 5] = "Enum_BettingRound_ShowDown", t
    }({}));
    t("GameReviewItemData", class {
        constructor() {
            this.sGameUUID = "", this.nGameMode = 0, this.nShortFull = 0, this.vPubsCards = [], this.vUnsendPublicCards = [], this.nGameid = 0, this.nPlayerID = 0, this.sPlayerName = "", this.sPlayerHead = "", this.nWinBet = 0, this.nInsuranceBet = 0, this.nInsuranceAmount = 0, this.nJackWinbet = 0, this.nPlayerBettingRoundBet = 0, this.bMuck = !1, this.bActiveShow = !1, this.bForceShowDown = !1, this.nLastRoundType = 0, this.vHandCards = [], this.plat = 0, this.seatNo = -1, this.seatInfo = 0, this.bFold = !1, this.nReviewSendOutLen = 0, this.nReviewSendOutActLen = 0, this.bForceShowedAct = !1, this.jackpotType = 0
        }
    }), s._RF.pop()
}