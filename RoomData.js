import * as i from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cc.js";
import * as o from "./cv.js";
import * as h from "./Enum.js";
import * as r from "./Enum.js";
import * as a from "./Enum.js";
import * as n from "./FormatParser.js";
import * as u from "./bignumber.mjs.js";

function main() {
    var l;
    i._RF.push({}, "9c0c7Gsy2pPuJgMdrw4GN+k", "RoomData", void 0);
    const {
        ccclass: c,
        property: d
    } = e;
    t("RoomData", c(l = class extends s {
        constructor(...t) {
            super(...t), this.u32RoomId = 0, this.roomUuidJs = "", this.u32GameID = 0, this.roomPassword = void 0, this.isQuick = !1, this.u32OwnerId = 0, this.u32BuyinLimit = null, this.u32Buyin = 0, this.u32Stake = 0, this.i32SelfSeat = -1, this.m_bSelfInGame = !1, this.pkRoomState = new _, this.pkRoomParam = new g, this.pkTableStates = new m, this.kOwnerMsg = [], this.kTablePlayerList = [], this.u32BigBlind = 0, this.u32SmallBlind = 0, this.u32CreateTime = 0, this.u32StartTime = 0, this.u32PrePickSeatId = -1, this.game_uuids_js = [], this.m_bIsCancelVoice = !1, this.last_buyin_clubid = 0, this.last_buyin_ownerid = 0, this.last_buyin_allianceId = 0, this.entry_clubid = 0, this.m_bChooseOuts = !1, this.u32DelayLeft = 0, this.clubInfos = [], this.buyinInfos = [], this.obPlayer = null, this.prohibit_sitdown_list = [], this.m_bIsReconnectMode = !1, this.m_kStraddleList = [], this.pkPayMoneyItem = new f, this.kingBee = 0, this.hasRecvBuyinToApplicantNotice = !1, this.hasRecvBuyinNotice = !1, this.recNeedBuyNoticeData = null, this.recNeedBuyInsuranceData = null, this.hasRecvStartGame = !1, this.isBuyin = !1, this.m_isAllInMode = !1, this.isSelfFold = !1, this.buyinAmount = 0, this.curBuyInAmount = 0, this.curConvertedBringChipsNum = -1, this.is_quick_sit = !1, this.isvirtual = !1, this.isShowNeedClub = !1, this.isNowCritTime = !1, this.isShowCritPrompt = !1, this.guess_odds_list = [], this.anyoneAllin = !1, this.change_points = 0, this.starSeats = [], this.inviterSeats = [], this.identity = 0, this.voicePrivate = [], this.voiceArr = [], this.voicePlaying = !1, this.last_voice = null, this.last_audioID = -1, this.curActionPlayerId = 0, this.quickraise = new v, this.nextCustomBarrageFee = 0, this.auth = 0, this.forbidden = [], this.openCustomBarrage = !1, this.openTablePlayerCustomBarrage = !1, this.muteCustomBarrageSeconds = 0, this.starRedpacketInfo = new C, this.allPlayersCount = 0, this.currency = a.None, this.spectatorRevealEnabled = !1, this._coinMode = 0, this.pkDynamicConfig = new S, this.isAntiRatHoleBuyIn = !1, this._playerBuyoutMeta = null
        }
        get playerBuyoutMeta() {
            return this._playerBuyoutMeta
        }
        set playerBuyoutMeta(t) {
            this._playerBuyoutMeta = t, t && (this._playerBuyoutMeta.time_end_ms = Date.now() + t.time_remaining_ms)
        }
        reset() {
            this.u32RoomId = 0, this.roomUuidJs = "", this.u32GameID = 0, this.u32OwnerId = 0, this.u32Buyin = 0, this.u32Stake = 0, this.i32SelfSeat = -1, this.m_bSelfInGame = !1, this.pkRoomState.reset(), this.pkRoomParam.reset(), this.kOwnerMsg = [], this.kTablePlayerList = [], this.u32BigBlind = 0, this.u32SmallBlind = 0, this.game_uuids_js = [], this.m_bIsCancelVoice = !1, this.m_bChooseOuts = !1, this.u32DelayLeft = 0, this.buyinInfos = [], this.obPlayer = new b, this.prohibit_sitdown_list = [], this.m_bIsReconnectMode = !1, this.m_kStraddleList = [], this.hasRecvBuyinToApplicantNotice = !1, this.hasRecvBuyinNotice = !1, this.recNeedBuyInsuranceData = null, this.recNeedBuyNoticeData = null, this.hasRecvStartGame = !1, this.isBuyin = !1, this.m_isAllInMode = !1, this.isSelfFold = !1, this.buyinAmount = 0, this.curBuyInAmount = 0, this.curConvertedBringChipsNum = -1, this.isvirtual = !1, this.is_quick_sit = !1, this.isShowNeedClub = !1, this.isNowCritTime = !1, this.guess_odds_list = [], this.anyoneAllin = !1, this.change_points = 0, this.starSeats = [], this.inviterSeats = [], this.identity = 0, this.voicePrivate = [], this.curActionPlayerId = 0, this.nextCustomBarrageFee = 0, this.auth = 1, this.forbidden = [], this.openCustomBarrage = !1, this.openTablePlayerCustomBarrage = !1, this.muteCustomBarrageSeconds = 0, this.starRedpacketInfo.reset(), this.allPlayersCount = 0, this.currency = o.appConfig.getWalletConfig().getTempCurrency(), this.pkDynamicConfig.reset()
        }
        resetVoice() {
            this.voiceArr = [], this.voicePlaying = !1, this.last_voice = null, this.last_audioID = -1
        }
        addGuessOdds(t) {
            this.guess_odds_list.push(t)
        }
        RemoveGuessOdds() {
            this.guess_odds_list = []
        }
        updateBuyinInfo(t) {
            let i = !1;
            for (let s = 0; s < this.buyinInfos.length; s++) this.buyinInfos[s].playerid === t.playerid && (this.buyinInfos[s].total_buyin = t.total_buyin, this.buyinInfos[s].buyin_limit = t.buyin_limit, i = !0);
            i || this.buyinInfos.push(t)
        }
        isZoom() {
            return o.roomManager.checkGameIsZoom(this.u32GameID)
        }
        haveEnoughMoneyForBuyIn() {
            return this.curConvertedBringChipsNum >= o.StringTools.serverGoldByClient(this.curBuyInAmount)
        }
        addTablePlayer(t) {
            let i = new y;
            o.StringTools.deepCopy(t, i);
            for (let i = 0; i < this.kTablePlayerList.length; i++) {
                let s = this.kTablePlayerList[i];
                if (s.playerid == t.playerid || s.seatid == t.seatid) return
            }
            this.kTablePlayerList.push(i)
        }
        RemoveOwnerMsgById(t) {
            for (let i of this.kOwnerMsg)
                if (i.requestid === t) {
                    this.kOwnerMsg.splice(this.kOwnerMsg.indexOf(i), 1);
                    break
                }
        }
        RemoveTablePlayer(t) {
            for (let i of this.kTablePlayerList)
                if (i.playerid == t) {
                    this.kTablePlayerList.splice(this.kTablePlayerList.indexOf(i), 1);
                    break
                }
        }
        GetTablePlayer(t) {
            for (let i of this.kTablePlayerList)
                if (i.playerid == t) return i;
            return null
        }
        updateTablePlayer(t, i) {
            for (let s of this.kTablePlayerList) s.playerid == t && o.StringTools.deepCopy(i, s)
        }
        GetTablePlayerBySeatId(t) {
            for (let i of this.kTablePlayerList)
                if (i.seatid == t) return i;
            return null
        }
        add_isProhibit_sitdown(t) {
            for (let i of this.prohibit_sitdown_list)
                if (i == t) return;
            this.prohibit_sitdown_list.push(t)
        }
        isProhibit_sitdown(t) {
            for (let i of this.prohibit_sitdown_list)
                if (i == t) return !0;
            return !1
        }
        isStraddle(t) {
            for (let i of this.m_kStraddleList)
                if (i == t) return !0;
            return !1
        }
        getIngamePlayer() {
            let t = 0;
            for (let i = 0; i < this.kTablePlayerList.length; i++) this.kTablePlayerList[i].in_game && t++;
            return t
        }
        get coinMode() {
            return this._coinMode
        }
        set coinMode(t) {
            this._coinMode = t
        }
        get isShortDeck() {
            return this.pkRoomParam.game_mode == o.Enum.CreateGameMode.CreateGame_Mode_Short
        }
        getDataPointValue(t) {
            const i = this.u32BigBlind > 0 ? this.u32BigBlind : this.pkTableStates.bb_amount || this.pkRoomParam.BB;
            return isNaN(t) || (t = o.StringTools.toFixed(t, o.currencyManager.defaultRoundDecimal, o.StringTools.RoundingMode.ROUND_FLOOR)), n.getDataPointValueWithCurrency(t, o.StringTools.clientGoldByServer(this.isShortDeck ? this.pkRoomParam.rule_ante_amount : i), this.coinMode, this.isShortDeck, this.currency.type, o.appConfig.getGameConfig().useShortCurrencySymbolCashGame)
        }
        getDataPointValueCustomRound(t, i = 2, s = u.ROUND_FLOOR) {
            const e = this.u32BigBlind > 0 ? this.u32BigBlind : this.pkTableStates.bb_amount || this.pkRoomParam.BB;
            return n.getDataPointValueWithCurrencyCustomRound(t, o.StringTools.clientGoldByServer(this.isShortDeck ? this.pkRoomParam.rule_ante_amount : e), this.coinMode, this.isShortDeck, this.currency.type, i, s, o.appConfig.getGameConfig().useShortCurrencySymbolCashGame)
        }
        getChipAmountFromDataPoint(t) {
            const i = this.u32BigBlind > 0 ? this.u32BigBlind : this.pkTableStates.bb_amount || this.pkRoomParam.BB;
            let s = n.getChipAmountFromDataPointWithCurrency(t, o.StringTools.clientGoldByServer(this.isShortDeck ? this.pkRoomParam.rule_ante_amount : i), this.coinMode, this.currency.type, o.appConfig.getGameConfig().useShortCurrencySymbolCashGame);
            return s = o.StringTools.toFixed(s, 2, o.StringTools.RoundingMode.ROUND_FLOOR), s
        }
        removeDataPoint(t) {
            return n.removeDataPointWithCurrency(t, this.currency.type, o.appConfig.getGameConfig().useShortCurrencySymbolCashGame)
        }
        neededFeeAsPerCurrency(t) {
            switch (this.currency.type) {
                case r.USD:
                    return t.needUsd;
                case r.GOLDCOIN:
                case r.CNY:
                default:
                    return t.needCoin
            }
        }
    }) || l);
    class _ {
        constructor() {
            this.isBegin = void 0, this.isWaiting = void 0, this.isPause = void 0, this.isMute = void 0, this.paused = void 0
        }
        reset() {
            this.isBegin = !1, this.isWaiting = !1, this.isPause = !1, this.isMute = !1, this.paused = !1
        }
    }
    t("RoomStates", _);
    t("PlayerBuyinInfo", class {
        constructor() {
            this.playername = "", this.playerid = 0, this.total_buyin = 0, this.curr_record = 0, this.buyin_limit = 0, this.HandCount = 0, this.total_buyout = 0
        }
    });
    t("clubInfo", class {
        constructor() {
            this.club_id = 0, this.creater_id = 0, this.club_name = ""
        }
    });
    t("PotInfo", class {
        constructor() {
            this.potid = 1, this.amount = 2
        }
    });
    t("CAFInfo", class {
        constructor() {
            this.kUrl = "", this.kSender = "", this.f32Time = 0, this.u32SeatId = 0, this.uid = 0
        }
        reset() {
            this.kUrl = "", this.kSender = "", this.f32Time = 0, this.u32SeatId = 0, this.uid = 0
        }
    });
    class m {
        constructor() {
            this.players = [], this.pots = [], this.public_card = [], this.curr_action_player_seatid = 0, this.curr_action_left_time = 0, this.curr_dealer_seatid = 0, this.curr_bb_seatid = 0, this.curr_sb_seatid = 0, this.curr_straddle_seatid = 0, this.bb_amount = 0, this.sb_amount = 0
        }
        recet() {
            this.players = [], this.pots = [], this.public_card = [], this.curr_action_player_seatid = 0, this.curr_action_left_time = 0, this.curr_dealer_seatid = 0, this.curr_bb_seatid = 0, this.curr_sb_seatid = 0, this.curr_straddle_seatid = 0, this.bb_amount = 0, this.sb_amount = 0
        }
    }
    t("TableStates", m);
    t("BuyinPlayerInfo", class {
        constructor() {
            this.playerid = void 0, this.amount = void 0, this.playername = void 0, this.playerhead = void 0, this.requestid = void 0, this.timestamp = void 0, this.last_clubid = void 0, this.allianceInfos = []
        }
    });
    t("AllianceInfo", class {
        constructor() {
            this.alliance_id = void 0, this.alliance_name = void 0
        }
    });
    t("PlayerBuyInfo", class {
        constructor() {
            this.playername = void 0, this.playerid = void 0, this.total_buyin = void 0, this.curr_record = void 0, this.buyin_limit = void 0
        }
    });
    class y {
        constructor() {
            this.playerid = void 0, this.seatid = void 0, this.name = void 0, this.headurl = void 0, this.marks = void 0, this.gender = void 0, this.stake = void 0, this.last_voice = void 0, this.last_action = void 0, this.in_game = void 0, this.inStay = void 0, this.left_stay_time = void 0, this.round_bet = void 0, this.cards = [], this.position = void 0, this.is_auto_withdraw = void 0, this.isGameEnd = void 0, this.plat = void 0, this.is_online = void 0, this.user_join_room_time = void 0, this.identity = void 0, this.NotDisturbUids = [], this.liveStatus = void 0, this.mikeStatus = void 0, this.mikeMode = 0, this.canSpeak = !1
        }
    }
    t("PlayerInfo", y);
    class p {
        constructor() {
            this.number = void 0, this.suit = void 0
        }
        static getCardId(t, i) {
            if (t < 0 || t > 12) return -1;
            switch (i) {
                case h.CARD_SPADE:
                    return t + 130;
                case h.CARD_HEART:
                    return t + 66;
                case h.CARD_CLUB:
                    return t + 34;
                case h.CARD_DIAMOND:
                    return t + 18;
                default:
                    return -1
            }
        }
        static getCardIds(t) {
            let i = [];
            for (let s = 0; s < t.length; s++) {
                let e = p.getCardId(t[s].number, t[s].suit);
                if (e < 0) return;
                i.push(e)
            }
            return i
        }
    }
    t("CardItem", p);
    t("PositionInfo", class {
        constructor() {
            this.longtitude = void 0, this.latitude = void 0, this.ip = void 0
        }
    });
    class b {
        constructor() {
            this.data = void 0, this.name = void 0, this.headPath = void 0, this.playerid = void 0, this.marks = void 0, this.isInroom = void 0, this.plat = void 0, this.is_online = void 0, this.user_join_room_time = void 0
        }
    }
    t("ObPlayer", b);
    t("ObInfo", class {
        constructor() {
            this.onlineNum = 0, this.totalNum = 0
        }
    });
    class g {
        constructor() {
            this.owner_type = 0, this.game_mode = 0, this.player_count_max = 0, this.rule_blind_enum = 0, this.rule_buyin_min_enum = 0, this.rule_buyin_fold = 0, this.leastBuyin = 0, this.rule_time_limit = 0, this.rule_switch_buyin_control = 0, this.rule_switch_insurance = 0, this.rule_switch_anti_cheat = 0, this.rule_switch_force_straddle = 0, this.rule_switch_random_seat = 0, this.rule_ante_amount = 0, this.game_name = "", this.club_id = 0, this.is_associated_jackpot = !1, this.is_allin_allfold = !1, this.alliance_ids = [], this.owner_clubname = "", this.CreaterId = 0, this.short_game_double_ante = !1, this.short_fullhouse_flush_straight_three = !1, this.is_opened_drawback = !1, this.drawback_hold_times = 0, this.drawback_times = 0, this.choose_outs = !1, this.muck_switch = !1, this.anti_simulator = !1, this.force_showcard = !1, this.unlimit_force_showcard = !1, this.club_head = "", this.auto_start_num = 0, this.join_password = "", this.buyin_password = "", this.IscalcIncomePerhand = !1, this.is_mirco = 0, this.BB = 0, this.anti_multiple = 0, this.showForClients = [], this.gameid = 0, this.isCriticismField = !1, this.minCritProb = 0, this.maxCritProb = 0, this.critNeedMoney = 0, this.is_open_guess = !1, this.guess_betamout_cfg = "", this.insuranceMode = 0, this.auto_withdraw = !0, this.forceWithdrawMode = !1, this.auto_buyin_val = 0, this.auto_buyout_val = 0, this.bottom_limit = 0, this.anti_simulator_ignore_cond = 0, this.manual_created = 0, this.reserveSeat = 0, this.starData = [], this.commentators = [], this.canSpeak = !1, this.formalBegin = 0, this.starInviter = [], this.tableTitle = "", this.showAllHole = !1, this.proDatas = [], this.currencyType = 0
        }
        reset() {
            this.owner_type = 0, this.game_mode = 0, this.player_count_max = 0, this.rule_blind_enum = 0, this.rule_buyin_min_enum = 0, this.rule_buyin_fold = 0, this.leastBuyin = 0, this.rule_time_limit = 0, this.rule_switch_buyin_control = 0, this.rule_switch_insurance = 0, this.rule_switch_anti_cheat = 0, this.rule_switch_force_straddle = 0, this.rule_switch_random_seat = 0, this.rule_ante_amount = 0, this.game_name = "", this.club_id = 0, this.is_associated_jackpot = !1, this.is_allin_allfold = !1, this.alliance_ids = [], this.owner_clubname = "", this.CreaterId = 0, this.short_game_double_ante = !1, this.short_fullhouse_flush_straight_three = !1, this.is_opened_drawback = !1, this.drawback_hold_times = 0, this.drawback_times = 0, this.choose_outs = !1, this.muck_switch = !1, this.anti_simulator = !1, this.force_showcard = !1, this.unlimit_force_showcard = !1, this.club_head = "", this.auto_start_num = 0, this.join_password = "", this.buyin_password = "", this.IscalcIncomePerhand = !1, this.is_mirco = 0, this.BB = 0, this.anti_multiple = 0, this.showForClients = [], this.gameid = 0, this.isCriticismField = !1, this.minCritProb = 0, this.maxCritProb = 0, this.critNeedMoney = 0, this.is_open_guess = !1, this.guess_betamout_cfg = "", this.insuranceMode = 0, this.auto_withdraw = !0, this.forceWithdrawMode = !1, this.auto_buyin_val = 0, this.auto_buyout_val = 0, this.bottom_limit = 0, this.anti_simulator_ignore_cond = 0, this.manual_created = 0, this.reserveSeat = 0, this.starData = [], this.commentators = [], this.canSpeak = !1, this.formalBegin = 0, this.starInviter = [], this.tableTitle = "", this.showAllHole = !1, this.proDatas = []
        }
    }
    t("RoomParams", g);
    class f {
        constructor() {
            this.playWay = 0, this.actionCount = 0, this.showCardCount = 0, this.insuranceCount = 0, this.actionDelayCountsFee = [], this.showCardCountsFee = [], this.insuranceCountsFee = [], this.showLeftCardFee = [], this.emotionFee = null, this.emotionFee2 = null, this.magicEmojiFee = null, this.showCardCountsSpectatorFee = [], this.spectatorShowCardCount = 0
        }
    }
    t("PayMoneyItems", f);
    t("FeeItem", class {
        constructor() {
            this.startCount = 0, this.endCount = 0, this.needCoin = 0, this.state = "", this.needUsd = 0
        }
    });
    t("NoticeResetGame", class {
        constructor() {
            this.roomid = 0, this.gameid = 0, this.players = []
        }
    });
    t("NoticeGameElectDealer", class {
        constructor() {
            this.roomid = 0, this.dealer_seatid = 0, this.sb_seateid = 0, this.bb_seatid = 0
        }
    });
    t("NoticeGameBlind", class {
        constructor() {
            this.roomid = 0, this.sb_amount = 0, this.bb_amount = 0, this.straddle_seat_list = [], this.straddle_amount_list = [], this.post_seat_list = [], this.sb_seatid = 0, this.bb_seatid = 0, this.dealer_seatid = 0
        }
    });
    t("NoticeGameHolecard", class {
        constructor() {
            this.roomid = 1, this.seat_list = [], this.holdcards = []
        }
    });
    t("NoticePlayerAction", class {
        constructor() {
            this.roomid = 1, this.last_action_seat_id = 0, this.action_type = 0, this.amount = 4, this.pots = [], this.default_fold = !1, this.ActionSeq = 0
        }
    });
    t("NoticeCommunityCards", class {
        constructor() {
            this.roomid = 0, this.cards = [], this.betting_round = null
        }
    });
    t("NoticeGameRoundEnd", class {
        constructor() {
            this.roomid = 0, this.pots = [], this.public_card = []
        }
    });
    t("OutItem", class {
        constructor() {
            this.outs_id = 0, this.card = null, this.is_tie = !1
        }
    });
    t("PlayerSeatInfo", class {
        constructor() {
            this.seatid = 0, this.playername = "", this.outs_count = 0, this.holecards = [], this.total_investment = 0
        }
    });
    t("PlayerSettleInfo", class {
        constructor() {
            this.seatid = 0, this.playerid = 0, this.amount = 0, this.is_steal_blind = !1, this.pots = [], this.total_investment = 0
        }
    });
    t("JackPotWinInfo", class {
        constructor() {
            this.win_jackpot_id = 0, this.win_jackpot_num = 0
        }
    });
    t("WinPotInfo", class {
        constructor() {
            this.potid = 0, this.amount = 0
        }
    });
    t("playerWinPotInfo", class {
        constructor() {
            this.pot = null, this.playerid = 0
        }
    });
    t("WinPotInfoPlayerIds", class {
        constructor() {
            this.pot = null, this.playerids = []
        }
    });
    t("PotIdWidthWinPotInfo", class {
        constructor() {
            this.potInfo = null, this.potid = 0
        }
    });
    t("NoticeAddActionTime", class {
        constructor() {
            this.roomid = 0, this.action_seatid = 0, this.rest_action_time = 0, this.count = 0
        }
    });
    t("RequestSendChat", class {
        constructor() {
            this.roomid = 1, this.ctype = 2, this.content = 3
        }
    });
    t("ResponseSendChat", class {
        constructor() {
            this.error = 1, this.next_fee = 2
        }
    });
    t("NoticeSendChat", class {
        constructor() {
            this.roomid = 1, this.ctype = 2, this.content = 3, this.playerid = 4, this.seatid = 5
        }
    });
    t("NoticeGameAnte", class {
        constructor() {
            this.roomid = 0, this.seat_list = [], this.amount_list = []
        }
    });
    t("NotiPlayerHoleCard", class {
        constructor() {
            this.holdcards = []
        }
    });
    t("GuessOdds", class {
        constructor() {
            this.option = 0, this.odds_percent = void 0
        }
    });
    t("CommentatorInfo", class {
        constructor() {
            this.uid = void 0, this.mikeStatus = void 0, this.television = void 0
        }
    });
    t("StarData", class {
        constructor() {
            this.uid = void 0, this.nickName = void 0, this.thumb = void 0, this.status = void 0
        }
    });
    class v {
        constructor() {
            this.raise3 = [], this.raise5 = [], this.selected = 0
        }
    }
    t("QuickRaise", v);
    t("VoicePrivateNotice", class {
        constructor() {
            this.uid = 0, this.isVoicePublic = !1
        }
    });
    t("CanSpeakNotice", class {
        constructor() {
            this.uid = 0, this.CanSpeak = !1
        }
    });
    class C {
        constructor() {
            this.left_time = 0, this.total_luck_amount = 0, this.desc = "", this.title = ""
        }
        reset() {
            this.left_time = 0, this.total_luck_amount = 0, this.desc = "", this.title = ""
        }
    }
    t("StarRedpacketInfo", C);
    class I {
        constructor(t, i) {
            this.gameId = void 0, this.roomId = void 0, this.gameId = t, this.roomId = i
        }
        isSameRoom(t) {
            return this.isSameRoomInfo(t.gameId, t.roomId)
        }
        isSameRoomInfo(t, i) {
            return this.gameId === t && (t === o.Enum.GameId.CowBoy || this.roomId === i)
        }
        Clone() {
            return new I(this.gameId, this.roomId)
        }
        getData() {
            return {
                gameId: this.gameId,
                roomId: this.roomId
            }
        }
    }
    t("CashRoomInfo", I);
    class S {
        constructor() {
            this.magicEmojiEnable = !0, this.magicEmojiDuration = 0, this.magicEmojiPotBB = 0
        }
        reset() {
            this.magicEmojiEnable = !0, this.magicEmojiDuration = 0, this.magicEmojiPotBB = 0
        }
    }
    t("DynamicConfig", S), i._RF.pop()
}