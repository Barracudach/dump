import * as r from "./cjs-loader.mjs.js";
import * as o from "./minimal.js";

function main() {
    let n;
    e("default", void 0);
    const a = e("__cjsMetaURL", t.meta.url);
    r.define(a, (function(t, r, o, a, c) {
        var i, s, l, u = r("protobufjs/minimal.js"),
            d = u.Reader,
            p = u.Writer,
            f = u.util,
            y = u.roots.default || (u.roots.default = {});
        y.jackfruit_proto = ((l = {}).ClientType = (i = {}, (s = Object.create(i))[i[0] = "Dummy"] = 0, s[i[1] = "Normal"] = 1, s[i[2] = "OverSeas"] = 2, s[i[3] = "H5"] = 3, s[i[4] = "H5OverSeas"] = 4, s[i[5] = "H5Web"] = 5, s[i[6] = "H5WebOverSeas"] = 6, s[i[7] = "H5VietnamLasted"] = 7, s[i[8] = "H5WebVietnamLasted"] = 8, s), l.CMD = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "CMD_DUMMY"] = 0, t[e[12001] = "LOGIN_GAME_REQ"] = 12001, t[e[12002] = "LOGIN_GAME_RESP"] = 12002, t[e[12004] = "JOIN_ROOM_REQ"] = 12004, t[e[12005] = "JOIN_ROOM_RESP"] = 12005, t[e[12114] = "GAME_DATA_SYNC_REQ"] = 12114, t[e[12115] = "GAME_DATA_SYNC_RESP"] = 12115, t[e[12007] = "HEART_BEAT_REQ"] = 12007, t[e[12008] = "HEART_BEAT_RESP"] = 12008, t[e[12011] = "SIT_DOWN_REQ"] = 12011, t[e[12012] = "SIT_DOWN_RESP"] = 12012, t[e[12013] = "SIT_DOWN_NOTIFY"] = 12013, t[e[12014] = "PLACE_CARD_REQ"] = 12014, t[e[12015] = "PLACE_CARD_RESP"] = 12015, t[e[12017] = "PLACE_CARD_OVER_REQ"] = 12017, t[e[12018] = "PLACE_CARD_OVER_RESP"] = 12018, t[e[12019] = "PLACE_CARD_OVER_NOTIFY"] = 12019, t[e[12021] = "STAND_UP_REQ"] = 12021, t[e[12022] = "STAND_UP_RESP"] = 12022, t[e[12023] = "STAND_UP_NOTIFY"] = 12023, t[e[12024] = "READY_REQ"] = 12024, t[e[12025] = "READY_RESP"] = 12025, t[e[12026] = "READY_NOTIFY"] = 12026, t[e[12027] = "GAME_RECORD_REQ"] = 12027, t[e[12028] = "GAME_RECORD_RESP"] = 12028, t[e[12031] = "SEND_CHAT_REQ"] = 12031, t[e[12032] = "SEND_CHAT_RESP"] = 12032, t[e[12033] = "SEND_CHAT_NOTIFY"] = 12033, t[e[12034] = "BUY_IN_REQ"] = 12034, t[e[12035] = "BUY_IN_RESP"] = 12035, t[e[12036] = "BUY_IN_NOTIFY"] = 12036, t[e[12037] = "LEAVE_REQ"] = 12037, t[e[12038] = "LEAVE_RESP"] = 12038, t[e[12041] = "SITUATION_REQ"] = 12041, t[e[12042] = "SITUATION_RESP"] = 12042, t[e[12044] = "ACTION_DELAY_REQ"] = 12044, t[e[12045] = "ACTION_DELAY_RESP"] = 12045, t[e[12046] = "ACTION_DELAY_NOTIFY"] = 12046, t[e[12047] = "SEND_BARRAGE_REQ"] = 12047, t[e[12048] = "SEND_BARRAGE_RESP"] = 12048, t[e[12049] = "SEND_BARRAGE_NOTIFY"] = 12049, t[e[12051] = "MsgId_BarrageCount_REQ"] = 12051, t[e[12052] = "MsgId_BarrageCount_RESP"] = 12052, t[e[12054] = "CHANGE_TABLE_REQ"] = 12054, t[e[12055] = "CHANGE_TABLE_RESP"] = 12055, t[e[12057] = "SETTLE_REQ"] = 12057, t[e[12058] = "SETTLE_RESP"] = 12058, t[e[12061] = "JACKPOT_DATA_REQ"] = 12061, t[e[12062] = "JACKPOT_DATA_RESP"] = 12062, t[e[12064] = "JACKPOT_AWARD_LIST_REQ"] = 12064, t[e[12065] = "JACKPOT_AWARD_LIST_RESP"] = 12065, t[e[12103] = "GAME_WILL_START_NOTIFY"] = 12103, t[e[12106] = "DEAL_NOTIFY"] = 12106, t[e[12109] = "SQUAT_CARDS_NOTIFY"] = 12109, t[e[12113] = "GAME_ROUND_END_NOTIFY"] = 12113, t[e[12116] = "DESTROY_ROOM_NOTIFY"] = 12116, t[e[12119] = "CONFIRM_TO_CONTINUE"] = 12119, t[e[12123] = "COMMUNITY_CARDS_NOTIFY"] = 12123, t[e[12126] = "START_PLACE_CARDS"] = 12126, t[e[12129] = "Show_PLACE_CARDS_NOTIFY"] = 12129, t[e[12133] = "WAITING_OTHER_PLAYER_NOTIFY"] = 12133, t[e[12136] = "CAN_OPERATION_NOTIFY"] = 12136, t[e[12139] = "PLAYER_INFO_SYNC_NOTIFY"] = 12139, t[e[12143] = "START_MATCH_NOTIFY"] = 12143, t[e[12146] = "MATCH_RESULT_NOTIFY"] = 12146, t[e[12147] = "GetGameUUIds_REQ"] = 12147, t[e[12148] = "GetGameUUIds_RESP"] = 12148, t[e[12149] = "BRAND_BARRAGE_NOTIFY"] = 12149, t[e[12153] = "MODIFY_PLACE_CARDS_NOTIFY"] = 12153, t[e[10528] = "NotDisturb_REQ"] = 10528, t[e[10529] = "NotDisturb_RESP"] = 10529, t[e[10605] = "MagicEmoji_Request"] = 10605, t[e[10606] = "MagicEmoji_Response"] = 10606, t[e[10607] = "MagicEmoji_Notice"] = 10607, t[e[10608] = "DynamicConfig_Notice"] = 10608, t
        }(), l.RoundState = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "RoomStates_DUMMY"] = 0, t[e[1] = "Free"] = 1, t[e[2] = "Ready"] = 2, t[e[11] = "Wait"] = 11, t[e[12] = "Deal"] = 12, t[e[13] = "PlaceCards"] = 13, t[e[14] = "Turn"] = 14, t[e[18] = "River"] = 18, t[e[20] = "Settlement"] = 20, t
        }(), l.PlayerState = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "SeatState_DUMMY"] = 0, t[e[1] = "SFree"] = 1, t[e[2] = "SReady"] = 2, t[e[8] = "SClickReady"] = 8, t[e[11] = "SWaitPlaceCards"] = 11, t[e[13] = "SPlaceCards"] = 13, t[e[14] = "SModifyPlaceCards"] = 14, t[e[15] = "SConfirmsPlaceCards"] = 15, t[e[20] = "SWaitResult"] = 20, t
        }(), l.ErrorCode = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "ErrorCode_DUMMY"] = 0, t[e[1] = "OK"] = 1, t[e[100] = "FAILED"] = 100, t[e[13e3] = "ROOM_WITHOUT_YOU"] = 13e3, t[e[13001] = "LOW_VERSION"] = 13001, t[e[13002] = "INVALID_TOKEN"] = 13002, t[e[13003] = "SERVER_BUSY"] = 13003, t[e[13004] = "WITHOUT_LOGIN"] = 13004, t[e[13005] = "ROOM_NOT_MATCH"] = 13005, t[e[13006] = "ROOM_NOT_EXIST"] = 13006, t[e[13007] = "ALREADY_IN_OTHER_GAME"] = 13007, t[e[13008] = "ROOM_PLAYER_LIMIT"] = 13008, t[e[13013] = "STOP_SERVICE"] = 13013, t[e[13018] = "TOO_MANY_PEOPLE"] = 13018, t[e[13022] = "SEAT_ALREADY_BUSY"] = 13022, t[e[13023] = "NO_ENOUGH_MONEY"] = 13023, t[e[13025] = "NOT_YET_COMPLETED_PLACE_CARDS"] = 13025, t[e[13026] = "ALREADY_SIT_DOWN_THIS_SEAT"] = 13026, t[e[13027] = "ALREADY_SIT_DOWN_Other_SEAT"] = 13027, t[e[13028] = "SEAT_ID_NOT_EXIST"] = 13028, t[e[13029] = "NO_PLACE_CARDS"] = 13029, t[e[13030] = "BAD_REQ_PARAM"] = 13030, t[e[13031] = "DISALLOWED_OPERATION"] = 13031, t[e[13032] = "ALREADY_ADD_STAND_UP_LIST"] = 13032, t[e[13033] = "CAN_NOT_LEAVE_IN_THE_GAME"] = 13033, t[e[13034] = "Table_Player_Or_Owner_Can_Chat"] = 13034, t[e[13035] = "Barrage_Sent_Too_Often"] = 13035, t[e[13036] = "Action_Delay_Exhausted"] = 13036, t[e[13037] = "Player_Limit_BuyIn"] = 13037, t[e[13038] = "ALREADY_ADD_LEAVE_LIST"] = 13038, t[e[13039] = "NOT_ENOUGH_STAKE"] = 13039, t[e[13040] = "BUY_IN_AMOUNT_INVALID"] = 13040, t[e[13041] = "CAN_NOT_CHANGE_TABLE"] = 13041, t[e[13042] = "NOT_SETTLED_YET"] = 13042, t[e[13043] = "BUY_IN_SEAT_WAS_SNATCHED"] = 13043, t[e[13045] = "NO_JACKPOT"] = 13045, t[e[3] = "GameServer_Player_Not_Found"] = 3, t[e[1214] = "GameServer_Send_Barrage_Too_Fast"] = 1214, t[e[22] = "GameServer_RoomID_Not_Found"] = 22, t[e[1215] = "GameServer_Queue_Barrage_Full"] = 1215, t
        }(), l.GameDataSyncReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.GameDataSyncReq; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomId = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId) ? "roomId: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.GameDataSyncReq) return e;
                var t = new y.jackfruit_proto.GameDataSyncReq;
                return null != e.roomId && (t.roomId = 0 | e.roomId), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.roomId = 0), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.GameDataSyncReq"
            }, e
        }(), l.CardLevel = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Dump"] = 0, t[e[10] = "RoyalFlush"] = 10, t[e[9] = "StraightFlush"] = 9, t[e[8] = "FourOfAKind"] = 8, t[e[7] = "FullHouse"] = 7, t[e[6] = "Flush"] = 6, t[e[5] = "StraightI"] = 5, t[e[4] = "ThreeOfAKind"] = 4, t[e[3] = "TwoPair"] = 3, t[e[2] = "OnePair"] = 2, t[e[1] = "HighCard"] = 1, t
        }(), l.GameDataSyncResp = function() {
            function e(e) {
                if (this.delayedOperationPlayIds = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.prototype.param = null, e.prototype.curState = 0, e.prototype.cachedNotifyMsg = null, e.prototype.fee = null, e.prototype.barrageLeftSeconds = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.actionDelayCountsFee = 0, e.prototype.delayedOperationPlayIds = f.emptyArray, e.prototype.canChangeTable = !1, e.prototype.startMatchTimeStamp = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.matchedSeconds = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.jackpotLeftAmount = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.dynamicConfig = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.param && Object.hasOwnProperty.call(e, "param") && y.jackfruit_proto.RoomParam.encode(e.param, t.uint32(18).fork()).ldelim(), null != e.curState && Object.hasOwnProperty.call(e, "curState") && t.uint32(24).int32(e.curState), null != e.cachedNotifyMsg && Object.hasOwnProperty.call(e, "cachedNotifyMsg") && y.jackfruit_proto.GameRoundEndNotify.encode(e.cachedNotifyMsg, t.uint32(34).fork()).ldelim(), null != e.fee && Object.hasOwnProperty.call(e, "fee") && y.jackfruit_proto.PayMoneyItems.encode(e.fee, t.uint32(42).fork()).ldelim(), null != e.barrageLeftSeconds && Object.hasOwnProperty.call(e, "barrageLeftSeconds") && t.uint32(48).int64(e.barrageLeftSeconds), null != e.actionDelayCountsFee && Object.hasOwnProperty.call(e, "actionDelayCountsFee") && t.uint32(56).int32(e.actionDelayCountsFee), null != e.delayedOperationPlayIds && e.delayedOperationPlayIds.length) {
                    t.uint32(66).fork();
                    for (var r = 0; r < e.delayedOperationPlayIds.length; ++r) t.uint32(e.delayedOperationPlayIds[r]);
                    t.ldelim()
                }
                return null != e.canChangeTable && Object.hasOwnProperty.call(e, "canChangeTable") && t.uint32(72).bool(e.canChangeTable), null != e.startMatchTimeStamp && Object.hasOwnProperty.call(e, "startMatchTimeStamp") && t.uint32(80).int64(e.startMatchTimeStamp), null != e.matchedSeconds && Object.hasOwnProperty.call(e, "matchedSeconds") && t.uint32(88).int64(e.matchedSeconds), null != e.jackpotLeftAmount && Object.hasOwnProperty.call(e, "jackpotLeftAmount") && t.uint32(96).int64(e.jackpotLeftAmount), null != e.dynamicConfig && Object.hasOwnProperty.call(e, "dynamicConfig") && y.jackfruit_proto.DynamicConfig.encode(e.dynamicConfig, t.uint32(106).fork()).ldelim(), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.GameDataSyncResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        case 2:
                            o.param = y.jackfruit_proto.RoomParam.decode(e, e.uint32());
                            break;
                        case 3:
                            o.curState = e.int32();
                            break;
                        case 4:
                            o.cachedNotifyMsg = y.jackfruit_proto.GameRoundEndNotify.decode(e, e.uint32());
                            break;
                        case 5:
                            o.fee = y.jackfruit_proto.PayMoneyItems.decode(e, e.uint32());
                            break;
                        case 6:
                            o.barrageLeftSeconds = e.int64();
                            break;
                        case 7:
                            o.actionDelayCountsFee = e.int32();
                            break;
                        case 8:
                            if (o.delayedOperationPlayIds && o.delayedOperationPlayIds.length || (o.delayedOperationPlayIds = []), 2 == (7 & n))
                                for (var a = e.uint32() + e.pos; e.pos < a;) o.delayedOperationPlayIds.push(e.uint32());
                            else o.delayedOperationPlayIds.push(e.uint32());
                            break;
                        case 9:
                            o.canChangeTable = e.bool();
                            break;
                        case 10:
                            o.startMatchTimeStamp = e.int64();
                            break;
                        case 11:
                            o.matchedSeconds = e.int64();
                            break;
                        case 12:
                            o.jackpotLeftAmount = e.int64();
                            break;
                        case 13:
                            o.dynamicConfig = y.jackfruit_proto.DynamicConfig.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                var t;
                if (null != e.param && e.hasOwnProperty("param") && (t = y.jackfruit_proto.RoomParam.verify(e.param))) return "param." + t;
                if (null != e.curState && e.hasOwnProperty("curState")) switch (e.curState) {
                    default:
                        return "curState: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 18:
                    case 20:
                }
                if (null != e.cachedNotifyMsg && e.hasOwnProperty("cachedNotifyMsg") && (t = y.jackfruit_proto.GameRoundEndNotify.verify(e.cachedNotifyMsg))) return "cachedNotifyMsg." + t;
                if (null != e.fee && e.hasOwnProperty("fee") && (t = y.jackfruit_proto.PayMoneyItems.verify(e.fee))) return "fee." + t;
                if (null != e.barrageLeftSeconds && e.hasOwnProperty("barrageLeftSeconds") && !(f.isInteger(e.barrageLeftSeconds) || e.barrageLeftSeconds && f.isInteger(e.barrageLeftSeconds.low) && f.isInteger(e.barrageLeftSeconds.high))) return "barrageLeftSeconds: integer|Long expected";
                if (null != e.actionDelayCountsFee && e.hasOwnProperty("actionDelayCountsFee") && !f.isInteger(e.actionDelayCountsFee)) return "actionDelayCountsFee: integer expected";
                if (null != e.delayedOperationPlayIds && e.hasOwnProperty("delayedOperationPlayIds")) {
                    if (!Array.isArray(e.delayedOperationPlayIds)) return "delayedOperationPlayIds: array expected";
                    for (var r = 0; r < e.delayedOperationPlayIds.length; ++r)
                        if (!f.isInteger(e.delayedOperationPlayIds[r])) return "delayedOperationPlayIds: integer[] expected"
                }
                return null != e.canChangeTable && e.hasOwnProperty("canChangeTable") && "boolean" != typeof e.canChangeTable ? "canChangeTable: boolean expected" : null != e.startMatchTimeStamp && e.hasOwnProperty("startMatchTimeStamp") && !(f.isInteger(e.startMatchTimeStamp) || e.startMatchTimeStamp && f.isInteger(e.startMatchTimeStamp.low) && f.isInteger(e.startMatchTimeStamp.high)) ? "startMatchTimeStamp: integer|Long expected" : null != e.matchedSeconds && e.hasOwnProperty("matchedSeconds") && !(f.isInteger(e.matchedSeconds) || e.matchedSeconds && f.isInteger(e.matchedSeconds.low) && f.isInteger(e.matchedSeconds.high)) ? "matchedSeconds: integer|Long expected" : null != e.jackpotLeftAmount && e.hasOwnProperty("jackpotLeftAmount") && !(f.isInteger(e.jackpotLeftAmount) || e.jackpotLeftAmount && f.isInteger(e.jackpotLeftAmount.low) && f.isInteger(e.jackpotLeftAmount.high)) ? "jackpotLeftAmount: integer|Long expected" : null != e.dynamicConfig && e.hasOwnProperty("dynamicConfig") && (t = y.jackfruit_proto.DynamicConfig.verify(e.dynamicConfig)) ? "dynamicConfig." + t : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.GameDataSyncResp) return e;
                var t = new y.jackfruit_proto.GameDataSyncResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                if (null != e.param) {
                    if ("object" != typeof e.param) throw TypeError(".jackfruit_proto.GameDataSyncResp.param: object expected");
                    t.param = y.jackfruit_proto.RoomParam.fromObject(e.param)
                }
                switch (e.curState) {
                    default:
                        if ("number" == typeof e.curState) {
                            t.curState = e.curState;
                            break
                        }
                        break;
                    case "RoomStates_DUMMY":
                    case 0:
                        t.curState = 0;
                        break;
                    case "Free":
                    case 1:
                        t.curState = 1;
                        break;
                    case "Ready":
                    case 2:
                        t.curState = 2;
                        break;
                    case "Wait":
                    case 11:
                        t.curState = 11;
                        break;
                    case "Deal":
                    case 12:
                        t.curState = 12;
                        break;
                    case "PlaceCards":
                    case 13:
                        t.curState = 13;
                        break;
                    case "Turn":
                    case 14:
                        t.curState = 14;
                        break;
                    case "River":
                    case 18:
                        t.curState = 18;
                        break;
                    case "Settlement":
                    case 20:
                        t.curState = 20
                }
                if (null != e.cachedNotifyMsg) {
                    if ("object" != typeof e.cachedNotifyMsg) throw TypeError(".jackfruit_proto.GameDataSyncResp.cachedNotifyMsg: object expected");
                    t.cachedNotifyMsg = y.jackfruit_proto.GameRoundEndNotify.fromObject(e.cachedNotifyMsg)
                }
                if (null != e.fee) {
                    if ("object" != typeof e.fee) throw TypeError(".jackfruit_proto.GameDataSyncResp.fee: object expected");
                    t.fee = y.jackfruit_proto.PayMoneyItems.fromObject(e.fee)
                }
                if (null != e.barrageLeftSeconds && (f.Long ? (t.barrageLeftSeconds = f.Long.fromValue(e.barrageLeftSeconds)).unsigned = !1 : "string" == typeof e.barrageLeftSeconds ? t.barrageLeftSeconds = parseInt(e.barrageLeftSeconds, 10) : "number" == typeof e.barrageLeftSeconds ? t.barrageLeftSeconds = e.barrageLeftSeconds : "object" == typeof e.barrageLeftSeconds && (t.barrageLeftSeconds = new f.LongBits(e.barrageLeftSeconds.low >>> 0, e.barrageLeftSeconds.high >>> 0).toNumber())), null != e.actionDelayCountsFee && (t.actionDelayCountsFee = 0 | e.actionDelayCountsFee), e.delayedOperationPlayIds) {
                    if (!Array.isArray(e.delayedOperationPlayIds)) throw TypeError(".jackfruit_proto.GameDataSyncResp.delayedOperationPlayIds: array expected");
                    t.delayedOperationPlayIds = [];
                    for (var r = 0; r < e.delayedOperationPlayIds.length; ++r) t.delayedOperationPlayIds[r] = e.delayedOperationPlayIds[r] >>> 0
                }
                if (null != e.canChangeTable && (t.canChangeTable = Boolean(e.canChangeTable)), null != e.startMatchTimeStamp && (f.Long ? (t.startMatchTimeStamp = f.Long.fromValue(e.startMatchTimeStamp)).unsigned = !1 : "string" == typeof e.startMatchTimeStamp ? t.startMatchTimeStamp = parseInt(e.startMatchTimeStamp, 10) : "number" == typeof e.startMatchTimeStamp ? t.startMatchTimeStamp = e.startMatchTimeStamp : "object" == typeof e.startMatchTimeStamp && (t.startMatchTimeStamp = new f.LongBits(e.startMatchTimeStamp.low >>> 0, e.startMatchTimeStamp.high >>> 0).toNumber())), null != e.matchedSeconds && (f.Long ? (t.matchedSeconds = f.Long.fromValue(e.matchedSeconds)).unsigned = !1 : "string" == typeof e.matchedSeconds ? t.matchedSeconds = parseInt(e.matchedSeconds, 10) : "number" == typeof e.matchedSeconds ? t.matchedSeconds = e.matchedSeconds : "object" == typeof e.matchedSeconds && (t.matchedSeconds = new f.LongBits(e.matchedSeconds.low >>> 0, e.matchedSeconds.high >>> 0).toNumber())), null != e.jackpotLeftAmount && (f.Long ? (t.jackpotLeftAmount = f.Long.fromValue(e.jackpotLeftAmount)).unsigned = !1 : "string" == typeof e.jackpotLeftAmount ? t.jackpotLeftAmount = parseInt(e.jackpotLeftAmount, 10) : "number" == typeof e.jackpotLeftAmount ? t.jackpotLeftAmount = e.jackpotLeftAmount : "object" == typeof e.jackpotLeftAmount && (t.jackpotLeftAmount = new f.LongBits(e.jackpotLeftAmount.low >>> 0, e.jackpotLeftAmount.high >>> 0).toNumber())), null != e.dynamicConfig) {
                    if ("object" != typeof e.dynamicConfig) throw TypeError(".jackfruit_proto.GameDataSyncResp.dynamicConfig: object expected");
                    t.dynamicConfig = y.jackfruit_proto.DynamicConfig.fromObject(e.dynamicConfig)
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.delayedOperationPlayIds = []), t.defaults) {
                    if (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0, r.param = null, r.curState = t.enums === String ? "RoomStates_DUMMY" : 0, r.cachedNotifyMsg = null, r.fee = null, f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.barrageLeftSeconds = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.barrageLeftSeconds = t.longs === String ? "0" : 0;
                    r.actionDelayCountsFee = 0, r.canChangeTable = !1, f.Long ? (o = new f.Long(0, 0, !1), r.startMatchTimeStamp = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.startMatchTimeStamp = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.matchedSeconds = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.matchedSeconds = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.jackpotLeftAmount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.jackpotLeftAmount = t.longs === String ? "0" : 0, r.dynamicConfig = null
                }
                if (null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), null != e.param && e.hasOwnProperty("param") && (r.param = y.jackfruit_proto.RoomParam.toObject(e.param, t)), null != e.curState && e.hasOwnProperty("curState") && (r.curState = t.enums === String ? void 0 === y.jackfruit_proto.RoundState[e.curState] ? e.curState : y.jackfruit_proto.RoundState[e.curState] : e.curState), null != e.cachedNotifyMsg && e.hasOwnProperty("cachedNotifyMsg") && (r.cachedNotifyMsg = y.jackfruit_proto.GameRoundEndNotify.toObject(e.cachedNotifyMsg, t)), null != e.fee && e.hasOwnProperty("fee") && (r.fee = y.jackfruit_proto.PayMoneyItems.toObject(e.fee, t)), null != e.barrageLeftSeconds && e.hasOwnProperty("barrageLeftSeconds") && ("number" == typeof e.barrageLeftSeconds ? r.barrageLeftSeconds = t.longs === String ? String(e.barrageLeftSeconds) : e.barrageLeftSeconds : r.barrageLeftSeconds = t.longs === String ? f.Long.prototype.toString.call(e.barrageLeftSeconds) : t.longs === Number ? new f.LongBits(e.barrageLeftSeconds.low >>> 0, e.barrageLeftSeconds.high >>> 0).toNumber() : e.barrageLeftSeconds), null != e.actionDelayCountsFee && e.hasOwnProperty("actionDelayCountsFee") && (r.actionDelayCountsFee = e.actionDelayCountsFee), e.delayedOperationPlayIds && e.delayedOperationPlayIds.length) {
                    r.delayedOperationPlayIds = [];
                    for (var n = 0; n < e.delayedOperationPlayIds.length; ++n) r.delayedOperationPlayIds[n] = e.delayedOperationPlayIds[n]
                }
                return null != e.canChangeTable && e.hasOwnProperty("canChangeTable") && (r.canChangeTable = e.canChangeTable), null != e.startMatchTimeStamp && e.hasOwnProperty("startMatchTimeStamp") && ("number" == typeof e.startMatchTimeStamp ? r.startMatchTimeStamp = t.longs === String ? String(e.startMatchTimeStamp) : e.startMatchTimeStamp : r.startMatchTimeStamp = t.longs === String ? f.Long.prototype.toString.call(e.startMatchTimeStamp) : t.longs === Number ? new f.LongBits(e.startMatchTimeStamp.low >>> 0, e.startMatchTimeStamp.high >>> 0).toNumber() : e.startMatchTimeStamp), null != e.matchedSeconds && e.hasOwnProperty("matchedSeconds") && ("number" == typeof e.matchedSeconds ? r.matchedSeconds = t.longs === String ? String(e.matchedSeconds) : e.matchedSeconds : r.matchedSeconds = t.longs === String ? f.Long.prototype.toString.call(e.matchedSeconds) : t.longs === Number ? new f.LongBits(e.matchedSeconds.low >>> 0, e.matchedSeconds.high >>> 0).toNumber() : e.matchedSeconds), null != e.jackpotLeftAmount && e.hasOwnProperty("jackpotLeftAmount") && ("number" == typeof e.jackpotLeftAmount ? r.jackpotLeftAmount = t.longs === String ? String(e.jackpotLeftAmount) : e.jackpotLeftAmount : r.jackpotLeftAmount = t.longs === String ? f.Long.prototype.toString.call(e.jackpotLeftAmount) : t.longs === Number ? new f.LongBits(e.jackpotLeftAmount.low >>> 0, e.jackpotLeftAmount.high >>> 0).toNumber() : e.jackpotLeftAmount), null != e.dynamicConfig && e.hasOwnProperty("dynamicConfig") && (r.dynamicConfig = y.jackfruit_proto.DynamicConfig.toObject(e.dynamicConfig, t)), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.GameDataSyncResp"
            }, e
        }(), l.HeartBeatReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.uid = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).uint32(e.uid), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.HeartBeatReq; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.uid = e.uint32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.uid && e.hasOwnProperty("uid") && !f.isInteger(e.uid) ? "uid: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.HeartBeatReq) return e;
                var t = new y.jackfruit_proto.HeartBeatReq;
                return null != e.uid && (t.uid = e.uid >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.uid = 0), null != e.uid && e.hasOwnProperty("uid") && (r.uid = e.uid), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.HeartBeatReq"
            }, e
        }(), l.HeartBeatResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.uid = 0, e.prototype.timestamp = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).uint32(e.uid), null != e.timestamp && Object.hasOwnProperty.call(e, "timestamp") && t.uint32(16).int64(e.timestamp), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.HeartBeatResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.uid = e.uint32();
                            break;
                        case 2:
                            o.timestamp = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.uid && e.hasOwnProperty("uid") && !f.isInteger(e.uid) ? "uid: integer expected" : null != e.timestamp && e.hasOwnProperty("timestamp") && !(f.isInteger(e.timestamp) || e.timestamp && f.isInteger(e.timestamp.low) && f.isInteger(e.timestamp.high)) ? "timestamp: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.HeartBeatResp) return e;
                var t = new y.jackfruit_proto.HeartBeatResp;
                return null != e.uid && (t.uid = e.uid >>> 0), null != e.timestamp && (f.Long ? (t.timestamp = f.Long.fromValue(e.timestamp)).unsigned = !1 : "string" == typeof e.timestamp ? t.timestamp = parseInt(e.timestamp, 10) : "number" == typeof e.timestamp ? t.timestamp = e.timestamp : "object" == typeof e.timestamp && (t.timestamp = new f.LongBits(e.timestamp.low >>> 0, e.timestamp.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults)
                    if (r.uid = 0, f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.timestamp = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.timestamp = t.longs === String ? "0" : 0;
                return null != e.uid && e.hasOwnProperty("uid") && (r.uid = e.uid), null != e.timestamp && e.hasOwnProperty("timestamp") && ("number" == typeof e.timestamp ? r.timestamp = t.longs === String ? String(e.timestamp) : e.timestamp : r.timestamp = t.longs === String ? f.Long.prototype.toString.call(e.timestamp) : t.longs === Number ? new f.LongBits(e.timestamp.low >>> 0, e.timestamp.high >>> 0).toNumber() : e.timestamp), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.HeartBeatResp"
            }, e
        }(), l.RoomParam = function() {
            function e(e) {
                if (this.zoneMultiple = [], this.showForClients = [], this.allianceIds = [], this.plats = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.ownerType = 0, e.prototype.gameMode = 0, e.prototype.playerCountMax = 0, e.prototype.gameName = "", e.prototype.ante = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.manualCreated = 0, e.prototype.minimumAmount = 0, e.prototype.ruleCheckAmount = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.ruleAddToAmount = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.zoneMultiple = f.emptyArray, e.prototype.createTime = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.limitPlayers = 0, e.prototype.creatorId = 0, e.prototype.creatorName = "", e.prototype.gameTimeLimit = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.idleSecs = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.ruleCheckScore = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.ruleAddToScore = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.ruleServeScore = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.ownerClubName = "", e.prototype.clubHead = "", e.prototype.isBanVpn = !1, e.prototype.showForClients = f.emptyArray, e.prototype.clubId = 0, e.prototype.allianceIds = f.emptyArray, e.prototype.ruleSwitchRandomSeat = 0, e.prototype.deskType = 0, e.prototype.autoStartNum = 0, e.prototype.isPrivate = !1, e.prototype.JoinPassword = "", e.prototype.buyInPassword = "", e.prototype.plats = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.ownerType && Object.hasOwnProperty.call(e, "ownerType") && t.uint32(8).int32(e.ownerType), null != e.gameMode && Object.hasOwnProperty.call(e, "gameMode") && t.uint32(16).int32(e.gameMode), null != e.playerCountMax && Object.hasOwnProperty.call(e, "playerCountMax") && t.uint32(24).int32(e.playerCountMax), null != e.ante && Object.hasOwnProperty.call(e, "ante") && t.uint32(32).int64(e.ante), null != e.gameName && Object.hasOwnProperty.call(e, "gameName") && t.uint32(42).string(e.gameName), null != e.clubId && Object.hasOwnProperty.call(e, "clubId") && t.uint32(48).uint32(e.clubId), null != e.allianceIds && e.allianceIds.length) {
                    t.uint32(58).fork();
                    for (var r = 0; r < e.allianceIds.length; ++r) t.uint32(e.allianceIds[r]);
                    t.ldelim()
                }
                if (null != e.ruleSwitchRandomSeat && Object.hasOwnProperty.call(e, "ruleSwitchRandomSeat") && t.uint32(64).int32(e.ruleSwitchRandomSeat), null != e.manualCreated && Object.hasOwnProperty.call(e, "manualCreated") && t.uint32(72).int32(e.manualCreated), null != e.minimumAmount && Object.hasOwnProperty.call(e, "minimumAmount") && t.uint32(80).int32(e.minimumAmount), null != e.deskType && Object.hasOwnProperty.call(e, "deskType") && t.uint32(88).int32(e.deskType), null != e.ruleAddToAmount && Object.hasOwnProperty.call(e, "ruleAddToAmount") && t.uint32(96).int64(e.ruleAddToAmount), null != e.zoneMultiple && e.zoneMultiple.length) {
                    for (t.uint32(106).fork(), r = 0; r < e.zoneMultiple.length; ++r) t.uint32(e.zoneMultiple[r]);
                    t.ldelim()
                }
                if (null != e.createTime && Object.hasOwnProperty.call(e, "createTime") && t.uint32(112).int64(e.createTime), null != e.autoStartNum && Object.hasOwnProperty.call(e, "autoStartNum") && t.uint32(120).int32(e.autoStartNum), null != e.isPrivate && Object.hasOwnProperty.call(e, "isPrivate") && t.uint32(128).bool(e.isPrivate), null != e.creatorId && Object.hasOwnProperty.call(e, "creatorId") && t.uint32(136).uint32(e.creatorId), null != e.limitPlayers && Object.hasOwnProperty.call(e, "limitPlayers") && t.uint32(144).uint32(e.limitPlayers), null != e.JoinPassword && Object.hasOwnProperty.call(e, "JoinPassword") && t.uint32(154).string(e.JoinPassword), null != e.creatorName && Object.hasOwnProperty.call(e, "creatorName") && t.uint32(162).string(e.creatorName), null != e.gameTimeLimit && Object.hasOwnProperty.call(e, "gameTimeLimit") && t.uint32(168).int64(e.gameTimeLimit), null != e.ownerClubName && Object.hasOwnProperty.call(e, "ownerClubName") && t.uint32(178).string(e.ownerClubName), null != e.clubHead && Object.hasOwnProperty.call(e, "clubHead") && t.uint32(186).string(e.clubHead), null != e.buyInPassword && Object.hasOwnProperty.call(e, "buyInPassword") && t.uint32(194).string(e.buyInPassword), null != e.ruleCheckAmount && Object.hasOwnProperty.call(e, "ruleCheckAmount") && t.uint32(200).int64(e.ruleCheckAmount), null != e.idleSecs && Object.hasOwnProperty.call(e, "idleSecs") && t.uint32(208).int64(e.idleSecs), null != e.ruleCheckScore && Object.hasOwnProperty.call(e, "ruleCheckScore") && t.uint32(216).int64(e.ruleCheckScore), null != e.ruleAddToScore && Object.hasOwnProperty.call(e, "ruleAddToScore") && t.uint32(224).int64(e.ruleAddToScore), null != e.ruleServeScore && Object.hasOwnProperty.call(e, "ruleServeScore") && t.uint32(232).int64(e.ruleServeScore), null != e.plats && e.plats.length) {
                    for (t.uint32(242).fork(), r = 0; r < e.plats.length; ++r) t.uint32(e.plats[r]);
                    t.ldelim()
                }
                if (null != e.isBanVpn && Object.hasOwnProperty.call(e, "isBanVpn") && t.uint32(328).bool(e.isBanVpn), null != e.showForClients && e.showForClients.length) {
                    for (t.uint32(418).fork(), r = 0; r < e.showForClients.length; ++r) t.uint32(e.showForClients[r]);
                    t.ldelim()
                }
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.RoomParam; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.ownerType = e.int32();
                            break;
                        case 2:
                            o.gameMode = e.int32();
                            break;
                        case 3:
                            o.playerCountMax = e.int32();
                            break;
                        case 5:
                            o.gameName = e.string();
                            break;
                        case 4:
                            o.ante = e.int64();
                            break;
                        case 9:
                            o.manualCreated = e.int32();
                            break;
                        case 10:
                            o.minimumAmount = e.int32();
                            break;
                        case 25:
                            o.ruleCheckAmount = e.int64();
                            break;
                        case 12:
                            o.ruleAddToAmount = e.int64();
                            break;
                        case 13:
                            if (o.zoneMultiple && o.zoneMultiple.length || (o.zoneMultiple = []), 2 == (7 & n))
                                for (var a = e.uint32() + e.pos; e.pos < a;) o.zoneMultiple.push(e.uint32());
                            else o.zoneMultiple.push(e.uint32());
                            break;
                        case 14:
                            o.createTime = e.int64();
                            break;
                        case 18:
                            o.limitPlayers = e.uint32();
                            break;
                        case 17:
                            o.creatorId = e.uint32();
                            break;
                        case 20:
                            o.creatorName = e.string();
                            break;
                        case 21:
                            o.gameTimeLimit = e.int64();
                            break;
                        case 26:
                            o.idleSecs = e.int64();
                            break;
                        case 27:
                            o.ruleCheckScore = e.int64();
                            break;
                        case 28:
                            o.ruleAddToScore = e.int64();
                            break;
                        case 29:
                            o.ruleServeScore = e.int64();
                            break;
                        case 22:
                            o.ownerClubName = e.string();
                            break;
                        case 23:
                            o.clubHead = e.string();
                            break;
                        case 41:
                            o.isBanVpn = e.bool();
                            break;
                        case 52:
                            if (o.showForClients && o.showForClients.length || (o.showForClients = []), 2 == (7 & n))
                                for (a = e.uint32() + e.pos; e.pos < a;) o.showForClients.push(e.uint32());
                            else o.showForClients.push(e.uint32());
                            break;
                        case 6:
                            o.clubId = e.uint32();
                            break;
                        case 7:
                            if (o.allianceIds && o.allianceIds.length || (o.allianceIds = []), 2 == (7 & n))
                                for (a = e.uint32() + e.pos; e.pos < a;) o.allianceIds.push(e.uint32());
                            else o.allianceIds.push(e.uint32());
                            break;
                        case 8:
                            o.ruleSwitchRandomSeat = e.int32();
                            break;
                        case 11:
                            o.deskType = e.int32();
                            break;
                        case 15:
                            o.autoStartNum = e.int32();
                            break;
                        case 16:
                            o.isPrivate = e.bool();
                            break;
                        case 19:
                            o.JoinPassword = e.string();
                            break;
                        case 24:
                            o.buyInPassword = e.string();
                            break;
                        case 30:
                            if (o.plats && o.plats.length || (o.plats = []), 2 == (7 & n))
                                for (a = e.uint32() + e.pos; e.pos < a;) o.plats.push(e.uint32());
                            else o.plats.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.ownerType && e.hasOwnProperty("ownerType") && !f.isInteger(e.ownerType)) return "ownerType: integer expected";
                if (null != e.gameMode && e.hasOwnProperty("gameMode") && !f.isInteger(e.gameMode)) return "gameMode: integer expected";
                if (null != e.playerCountMax && e.hasOwnProperty("playerCountMax") && !f.isInteger(e.playerCountMax)) return "playerCountMax: integer expected";
                if (null != e.gameName && e.hasOwnProperty("gameName") && !f.isString(e.gameName)) return "gameName: string expected";
                if (null != e.ante && e.hasOwnProperty("ante") && !(f.isInteger(e.ante) || e.ante && f.isInteger(e.ante.low) && f.isInteger(e.ante.high))) return "ante: integer|Long expected";
                if (null != e.manualCreated && e.hasOwnProperty("manualCreated") && !f.isInteger(e.manualCreated)) return "manualCreated: integer expected";
                if (null != e.minimumAmount && e.hasOwnProperty("minimumAmount") && !f.isInteger(e.minimumAmount)) return "minimumAmount: integer expected";
                if (null != e.ruleCheckAmount && e.hasOwnProperty("ruleCheckAmount") && !(f.isInteger(e.ruleCheckAmount) || e.ruleCheckAmount && f.isInteger(e.ruleCheckAmount.low) && f.isInteger(e.ruleCheckAmount.high))) return "ruleCheckAmount: integer|Long expected";
                if (null != e.ruleAddToAmount && e.hasOwnProperty("ruleAddToAmount") && !(f.isInteger(e.ruleAddToAmount) || e.ruleAddToAmount && f.isInteger(e.ruleAddToAmount.low) && f.isInteger(e.ruleAddToAmount.high))) return "ruleAddToAmount: integer|Long expected";
                if (null != e.zoneMultiple && e.hasOwnProperty("zoneMultiple")) {
                    if (!Array.isArray(e.zoneMultiple)) return "zoneMultiple: array expected";
                    for (var t = 0; t < e.zoneMultiple.length; ++t)
                        if (!f.isInteger(e.zoneMultiple[t])) return "zoneMultiple: integer[] expected"
                }
                if (null != e.createTime && e.hasOwnProperty("createTime") && !(f.isInteger(e.createTime) || e.createTime && f.isInteger(e.createTime.low) && f.isInteger(e.createTime.high))) return "createTime: integer|Long expected";
                if (null != e.limitPlayers && e.hasOwnProperty("limitPlayers") && !f.isInteger(e.limitPlayers)) return "limitPlayers: integer expected";
                if (null != e.creatorId && e.hasOwnProperty("creatorId") && !f.isInteger(e.creatorId)) return "creatorId: integer expected";
                if (null != e.creatorName && e.hasOwnProperty("creatorName") && !f.isString(e.creatorName)) return "creatorName: string expected";
                if (null != e.gameTimeLimit && e.hasOwnProperty("gameTimeLimit") && !(f.isInteger(e.gameTimeLimit) || e.gameTimeLimit && f.isInteger(e.gameTimeLimit.low) && f.isInteger(e.gameTimeLimit.high))) return "gameTimeLimit: integer|Long expected";
                if (null != e.idleSecs && e.hasOwnProperty("idleSecs") && !(f.isInteger(e.idleSecs) || e.idleSecs && f.isInteger(e.idleSecs.low) && f.isInteger(e.idleSecs.high))) return "idleSecs: integer|Long expected";
                if (null != e.ruleCheckScore && e.hasOwnProperty("ruleCheckScore") && !(f.isInteger(e.ruleCheckScore) || e.ruleCheckScore && f.isInteger(e.ruleCheckScore.low) && f.isInteger(e.ruleCheckScore.high))) return "ruleCheckScore: integer|Long expected";
                if (null != e.ruleAddToScore && e.hasOwnProperty("ruleAddToScore") && !(f.isInteger(e.ruleAddToScore) || e.ruleAddToScore && f.isInteger(e.ruleAddToScore.low) && f.isInteger(e.ruleAddToScore.high))) return "ruleAddToScore: integer|Long expected";
                if (null != e.ruleServeScore && e.hasOwnProperty("ruleServeScore") && !(f.isInteger(e.ruleServeScore) || e.ruleServeScore && f.isInteger(e.ruleServeScore.low) && f.isInteger(e.ruleServeScore.high))) return "ruleServeScore: integer|Long expected";
                if (null != e.ownerClubName && e.hasOwnProperty("ownerClubName") && !f.isString(e.ownerClubName)) return "ownerClubName: string expected";
                if (null != e.clubHead && e.hasOwnProperty("clubHead") && !f.isString(e.clubHead)) return "clubHead: string expected";
                if (null != e.isBanVpn && e.hasOwnProperty("isBanVpn") && "boolean" != typeof e.isBanVpn) return "isBanVpn: boolean expected";
                if (null != e.showForClients && e.hasOwnProperty("showForClients")) {
                    if (!Array.isArray(e.showForClients)) return "showForClients: array expected";
                    for (t = 0; t < e.showForClients.length; ++t)
                        if (!f.isInteger(e.showForClients[t])) return "showForClients: integer[] expected"
                }
                if (null != e.clubId && e.hasOwnProperty("clubId") && !f.isInteger(e.clubId)) return "clubId: integer expected";
                if (null != e.allianceIds && e.hasOwnProperty("allianceIds")) {
                    if (!Array.isArray(e.allianceIds)) return "allianceIds: array expected";
                    for (t = 0; t < e.allianceIds.length; ++t)
                        if (!f.isInteger(e.allianceIds[t])) return "allianceIds: integer[] expected"
                }
                if (null != e.ruleSwitchRandomSeat && e.hasOwnProperty("ruleSwitchRandomSeat") && !f.isInteger(e.ruleSwitchRandomSeat)) return "ruleSwitchRandomSeat: integer expected";
                if (null != e.deskType && e.hasOwnProperty("deskType") && !f.isInteger(e.deskType)) return "deskType: integer expected";
                if (null != e.autoStartNum && e.hasOwnProperty("autoStartNum") && !f.isInteger(e.autoStartNum)) return "autoStartNum: integer expected";
                if (null != e.isPrivate && e.hasOwnProperty("isPrivate") && "boolean" != typeof e.isPrivate) return "isPrivate: boolean expected";
                if (null != e.JoinPassword && e.hasOwnProperty("JoinPassword") && !f.isString(e.JoinPassword)) return "JoinPassword: string expected";
                if (null != e.buyInPassword && e.hasOwnProperty("buyInPassword") && !f.isString(e.buyInPassword)) return "buyInPassword: string expected";
                if (null != e.plats && e.hasOwnProperty("plats")) {
                    if (!Array.isArray(e.plats)) return "plats: array expected";
                    for (t = 0; t < e.plats.length; ++t)
                        if (!f.isInteger(e.plats[t])) return "plats: integer[] expected"
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.RoomParam) return e;
                var t = new y.jackfruit_proto.RoomParam;
                if (null != e.ownerType && (t.ownerType = 0 | e.ownerType), null != e.gameMode && (t.gameMode = 0 | e.gameMode), null != e.playerCountMax && (t.playerCountMax = 0 | e.playerCountMax), null != e.gameName && (t.gameName = String(e.gameName)), null != e.ante && (f.Long ? (t.ante = f.Long.fromValue(e.ante)).unsigned = !1 : "string" == typeof e.ante ? t.ante = parseInt(e.ante, 10) : "number" == typeof e.ante ? t.ante = e.ante : "object" == typeof e.ante && (t.ante = new f.LongBits(e.ante.low >>> 0, e.ante.high >>> 0).toNumber())), null != e.manualCreated && (t.manualCreated = 0 | e.manualCreated), null != e.minimumAmount && (t.minimumAmount = 0 | e.minimumAmount), null != e.ruleCheckAmount && (f.Long ? (t.ruleCheckAmount = f.Long.fromValue(e.ruleCheckAmount)).unsigned = !1 : "string" == typeof e.ruleCheckAmount ? t.ruleCheckAmount = parseInt(e.ruleCheckAmount, 10) : "number" == typeof e.ruleCheckAmount ? t.ruleCheckAmount = e.ruleCheckAmount : "object" == typeof e.ruleCheckAmount && (t.ruleCheckAmount = new f.LongBits(e.ruleCheckAmount.low >>> 0, e.ruleCheckAmount.high >>> 0).toNumber())), null != e.ruleAddToAmount && (f.Long ? (t.ruleAddToAmount = f.Long.fromValue(e.ruleAddToAmount)).unsigned = !1 : "string" == typeof e.ruleAddToAmount ? t.ruleAddToAmount = parseInt(e.ruleAddToAmount, 10) : "number" == typeof e.ruleAddToAmount ? t.ruleAddToAmount = e.ruleAddToAmount : "object" == typeof e.ruleAddToAmount && (t.ruleAddToAmount = new f.LongBits(e.ruleAddToAmount.low >>> 0, e.ruleAddToAmount.high >>> 0).toNumber())), e.zoneMultiple) {
                    if (!Array.isArray(e.zoneMultiple)) throw TypeError(".jackfruit_proto.RoomParam.zoneMultiple: array expected");
                    t.zoneMultiple = [];
                    for (var r = 0; r < e.zoneMultiple.length; ++r) t.zoneMultiple[r] = e.zoneMultiple[r] >>> 0
                }
                if (null != e.createTime && (f.Long ? (t.createTime = f.Long.fromValue(e.createTime)).unsigned = !1 : "string" == typeof e.createTime ? t.createTime = parseInt(e.createTime, 10) : "number" == typeof e.createTime ? t.createTime = e.createTime : "object" == typeof e.createTime && (t.createTime = new f.LongBits(e.createTime.low >>> 0, e.createTime.high >>> 0).toNumber())), null != e.limitPlayers && (t.limitPlayers = e.limitPlayers >>> 0), null != e.creatorId && (t.creatorId = e.creatorId >>> 0), null != e.creatorName && (t.creatorName = String(e.creatorName)), null != e.gameTimeLimit && (f.Long ? (t.gameTimeLimit = f.Long.fromValue(e.gameTimeLimit)).unsigned = !1 : "string" == typeof e.gameTimeLimit ? t.gameTimeLimit = parseInt(e.gameTimeLimit, 10) : "number" == typeof e.gameTimeLimit ? t.gameTimeLimit = e.gameTimeLimit : "object" == typeof e.gameTimeLimit && (t.gameTimeLimit = new f.LongBits(e.gameTimeLimit.low >>> 0, e.gameTimeLimit.high >>> 0).toNumber())), null != e.idleSecs && (f.Long ? (t.idleSecs = f.Long.fromValue(e.idleSecs)).unsigned = !1 : "string" == typeof e.idleSecs ? t.idleSecs = parseInt(e.idleSecs, 10) : "number" == typeof e.idleSecs ? t.idleSecs = e.idleSecs : "object" == typeof e.idleSecs && (t.idleSecs = new f.LongBits(e.idleSecs.low >>> 0, e.idleSecs.high >>> 0).toNumber())), null != e.ruleCheckScore && (f.Long ? (t.ruleCheckScore = f.Long.fromValue(e.ruleCheckScore)).unsigned = !1 : "string" == typeof e.ruleCheckScore ? t.ruleCheckScore = parseInt(e.ruleCheckScore, 10) : "number" == typeof e.ruleCheckScore ? t.ruleCheckScore = e.ruleCheckScore : "object" == typeof e.ruleCheckScore && (t.ruleCheckScore = new f.LongBits(e.ruleCheckScore.low >>> 0, e.ruleCheckScore.high >>> 0).toNumber())), null != e.ruleAddToScore && (f.Long ? (t.ruleAddToScore = f.Long.fromValue(e.ruleAddToScore)).unsigned = !1 : "string" == typeof e.ruleAddToScore ? t.ruleAddToScore = parseInt(e.ruleAddToScore, 10) : "number" == typeof e.ruleAddToScore ? t.ruleAddToScore = e.ruleAddToScore : "object" == typeof e.ruleAddToScore && (t.ruleAddToScore = new f.LongBits(e.ruleAddToScore.low >>> 0, e.ruleAddToScore.high >>> 0).toNumber())), null != e.ruleServeScore && (f.Long ? (t.ruleServeScore = f.Long.fromValue(e.ruleServeScore)).unsigned = !1 : "string" == typeof e.ruleServeScore ? t.ruleServeScore = parseInt(e.ruleServeScore, 10) : "number" == typeof e.ruleServeScore ? t.ruleServeScore = e.ruleServeScore : "object" == typeof e.ruleServeScore && (t.ruleServeScore = new f.LongBits(e.ruleServeScore.low >>> 0, e.ruleServeScore.high >>> 0).toNumber())), null != e.ownerClubName && (t.ownerClubName = String(e.ownerClubName)), null != e.clubHead && (t.clubHead = String(e.clubHead)), null != e.isBanVpn && (t.isBanVpn = Boolean(e.isBanVpn)), e.showForClients) {
                    if (!Array.isArray(e.showForClients)) throw TypeError(".jackfruit_proto.RoomParam.showForClients: array expected");
                    for (t.showForClients = [], r = 0; r < e.showForClients.length; ++r) t.showForClients[r] = e.showForClients[r] >>> 0
                }
                if (null != e.clubId && (t.clubId = e.clubId >>> 0), e.allianceIds) {
                    if (!Array.isArray(e.allianceIds)) throw TypeError(".jackfruit_proto.RoomParam.allianceIds: array expected");
                    for (t.allianceIds = [], r = 0; r < e.allianceIds.length; ++r) t.allianceIds[r] = e.allianceIds[r] >>> 0
                }
                if (null != e.ruleSwitchRandomSeat && (t.ruleSwitchRandomSeat = 0 | e.ruleSwitchRandomSeat), null != e.deskType && (t.deskType = 0 | e.deskType), null != e.autoStartNum && (t.autoStartNum = 0 | e.autoStartNum), null != e.isPrivate && (t.isPrivate = Boolean(e.isPrivate)), null != e.JoinPassword && (t.JoinPassword = String(e.JoinPassword)), null != e.buyInPassword && (t.buyInPassword = String(e.buyInPassword)), e.plats) {
                    if (!Array.isArray(e.plats)) throw TypeError(".jackfruit_proto.RoomParam.plats: array expected");
                    for (t.plats = [], r = 0; r < e.plats.length; ++r) t.plats[r] = e.plats[r] >>> 0
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.allianceIds = [], r.zoneMultiple = [], r.plats = [], r.showForClients = []), t.defaults) {
                    if (r.ownerType = 0, r.gameMode = 0, r.playerCountMax = 0, f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.ante = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.ante = t.longs === String ? "0" : 0;
                    r.gameName = "", r.clubId = 0, r.ruleSwitchRandomSeat = 0, r.manualCreated = 0, r.minimumAmount = 0, r.deskType = 0, f.Long ? (o = new f.Long(0, 0, !1), r.ruleAddToAmount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.ruleAddToAmount = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.createTime = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.createTime = t.longs === String ? "0" : 0, r.autoStartNum = 0, r.isPrivate = !1, r.creatorId = 0, r.limitPlayers = 0, r.JoinPassword = "", r.creatorName = "", f.Long ? (o = new f.Long(0, 0, !1), r.gameTimeLimit = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.gameTimeLimit = t.longs === String ? "0" : 0, r.ownerClubName = "", r.clubHead = "", r.buyInPassword = "", f.Long ? (o = new f.Long(0, 0, !1), r.ruleCheckAmount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.ruleCheckAmount = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.idleSecs = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.idleSecs = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.ruleCheckScore = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.ruleCheckScore = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.ruleAddToScore = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.ruleAddToScore = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.ruleServeScore = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.ruleServeScore = t.longs === String ? "0" : 0, r.isBanVpn = !1
                }
                if (null != e.ownerType && e.hasOwnProperty("ownerType") && (r.ownerType = e.ownerType), null != e.gameMode && e.hasOwnProperty("gameMode") && (r.gameMode = e.gameMode), null != e.playerCountMax && e.hasOwnProperty("playerCountMax") && (r.playerCountMax = e.playerCountMax), null != e.ante && e.hasOwnProperty("ante") && ("number" == typeof e.ante ? r.ante = t.longs === String ? String(e.ante) : e.ante : r.ante = t.longs === String ? f.Long.prototype.toString.call(e.ante) : t.longs === Number ? new f.LongBits(e.ante.low >>> 0, e.ante.high >>> 0).toNumber() : e.ante), null != e.gameName && e.hasOwnProperty("gameName") && (r.gameName = e.gameName), null != e.clubId && e.hasOwnProperty("clubId") && (r.clubId = e.clubId), e.allianceIds && e.allianceIds.length) {
                    r.allianceIds = [];
                    for (var n = 0; n < e.allianceIds.length; ++n) r.allianceIds[n] = e.allianceIds[n]
                }
                if (null != e.ruleSwitchRandomSeat && e.hasOwnProperty("ruleSwitchRandomSeat") && (r.ruleSwitchRandomSeat = e.ruleSwitchRandomSeat), null != e.manualCreated && e.hasOwnProperty("manualCreated") && (r.manualCreated = e.manualCreated), null != e.minimumAmount && e.hasOwnProperty("minimumAmount") && (r.minimumAmount = e.minimumAmount), null != e.deskType && e.hasOwnProperty("deskType") && (r.deskType = e.deskType), null != e.ruleAddToAmount && e.hasOwnProperty("ruleAddToAmount") && ("number" == typeof e.ruleAddToAmount ? r.ruleAddToAmount = t.longs === String ? String(e.ruleAddToAmount) : e.ruleAddToAmount : r.ruleAddToAmount = t.longs === String ? f.Long.prototype.toString.call(e.ruleAddToAmount) : t.longs === Number ? new f.LongBits(e.ruleAddToAmount.low >>> 0, e.ruleAddToAmount.high >>> 0).toNumber() : e.ruleAddToAmount), e.zoneMultiple && e.zoneMultiple.length)
                    for (r.zoneMultiple = [], n = 0; n < e.zoneMultiple.length; ++n) r.zoneMultiple[n] = e.zoneMultiple[n];
                if (null != e.createTime && e.hasOwnProperty("createTime") && ("number" == typeof e.createTime ? r.createTime = t.longs === String ? String(e.createTime) : e.createTime : r.createTime = t.longs === String ? f.Long.prototype.toString.call(e.createTime) : t.longs === Number ? new f.LongBits(e.createTime.low >>> 0, e.createTime.high >>> 0).toNumber() : e.createTime), null != e.autoStartNum && e.hasOwnProperty("autoStartNum") && (r.autoStartNum = e.autoStartNum), null != e.isPrivate && e.hasOwnProperty("isPrivate") && (r.isPrivate = e.isPrivate), null != e.creatorId && e.hasOwnProperty("creatorId") && (r.creatorId = e.creatorId), null != e.limitPlayers && e.hasOwnProperty("limitPlayers") && (r.limitPlayers = e.limitPlayers), null != e.JoinPassword && e.hasOwnProperty("JoinPassword") && (r.JoinPassword = e.JoinPassword), null != e.creatorName && e.hasOwnProperty("creatorName") && (r.creatorName = e.creatorName), null != e.gameTimeLimit && e.hasOwnProperty("gameTimeLimit") && ("number" == typeof e.gameTimeLimit ? r.gameTimeLimit = t.longs === String ? String(e.gameTimeLimit) : e.gameTimeLimit : r.gameTimeLimit = t.longs === String ? f.Long.prototype.toString.call(e.gameTimeLimit) : t.longs === Number ? new f.LongBits(e.gameTimeLimit.low >>> 0, e.gameTimeLimit.high >>> 0).toNumber() : e.gameTimeLimit), null != e.ownerClubName && e.hasOwnProperty("ownerClubName") && (r.ownerClubName = e.ownerClubName), null != e.clubHead && e.hasOwnProperty("clubHead") && (r.clubHead = e.clubHead), null != e.buyInPassword && e.hasOwnProperty("buyInPassword") && (r.buyInPassword = e.buyInPassword), null != e.ruleCheckAmount && e.hasOwnProperty("ruleCheckAmount") && ("number" == typeof e.ruleCheckAmount ? r.ruleCheckAmount = t.longs === String ? String(e.ruleCheckAmount) : e.ruleCheckAmount : r.ruleCheckAmount = t.longs === String ? f.Long.prototype.toString.call(e.ruleCheckAmount) : t.longs === Number ? new f.LongBits(e.ruleCheckAmount.low >>> 0, e.ruleCheckAmount.high >>> 0).toNumber() : e.ruleCheckAmount), null != e.idleSecs && e.hasOwnProperty("idleSecs") && ("number" == typeof e.idleSecs ? r.idleSecs = t.longs === String ? String(e.idleSecs) : e.idleSecs : r.idleSecs = t.longs === String ? f.Long.prototype.toString.call(e.idleSecs) : t.longs === Number ? new f.LongBits(e.idleSecs.low >>> 0, e.idleSecs.high >>> 0).toNumber() : e.idleSecs), null != e.ruleCheckScore && e.hasOwnProperty("ruleCheckScore") && ("number" == typeof e.ruleCheckScore ? r.ruleCheckScore = t.longs === String ? String(e.ruleCheckScore) : e.ruleCheckScore : r.ruleCheckScore = t.longs === String ? f.Long.prototype.toString.call(e.ruleCheckScore) : t.longs === Number ? new f.LongBits(e.ruleCheckScore.low >>> 0, e.ruleCheckScore.high >>> 0).toNumber() : e.ruleCheckScore), null != e.ruleAddToScore && e.hasOwnProperty("ruleAddToScore") && ("number" == typeof e.ruleAddToScore ? r.ruleAddToScore = t.longs === String ? String(e.ruleAddToScore) : e.ruleAddToScore : r.ruleAddToScore = t.longs === String ? f.Long.prototype.toString.call(e.ruleAddToScore) : t.longs === Number ? new f.LongBits(e.ruleAddToScore.low >>> 0, e.ruleAddToScore.high >>> 0).toNumber() : e.ruleAddToScore), null != e.ruleServeScore && e.hasOwnProperty("ruleServeScore") && ("number" == typeof e.ruleServeScore ? r.ruleServeScore = t.longs === String ? String(e.ruleServeScore) : e.ruleServeScore : r.ruleServeScore = t.longs === String ? f.Long.prototype.toString.call(e.ruleServeScore) : t.longs === Number ? new f.LongBits(e.ruleServeScore.low >>> 0, e.ruleServeScore.high >>> 0).toNumber() : e.ruleServeScore), e.plats && e.plats.length)
                    for (r.plats = [], n = 0; n < e.plats.length; ++n) r.plats[n] = e.plats[n];
                if (null != e.isBanVpn && e.hasOwnProperty("isBanVpn") && (r.isBanVpn = e.isBanVpn), e.showForClients && e.showForClients.length)
                    for (r.showForClients = [], n = 0; n < e.showForClients.length; ++n) r.showForClients[n] = e.showForClients[n];
                return r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.RoomParam"
            }, e
        }(), l.PlayerInfo = function() {
            function e(e) {
                if (this.holeCards = [], this.headCards = [], this.middleCards = [], this.tailCards = [], this.NotDisturbUids = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.playerId = 0, e.prototype.seatId = 0, e.prototype.name = "", e.prototype.headUrl = "", e.prototype.marks = "", e.prototype.gender = 0, e.prototype.lastVoice = "", e.prototype.amount = 0, e.prototype.state = 0, e.prototype.holeCards = f.emptyArray, e.prototype.headCards = f.emptyArray, e.prototype.middleCards = f.emptyArray, e.prototype.tailCards = f.emptyArray, e.prototype.settleScore = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.settleAmount = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.score = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.plat = 0, e.prototype.is_online = !1, e.prototype.user_join_room_time = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.NotDisturbUids = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.playerId && Object.hasOwnProperty.call(e, "playerId") && t.uint32(8).uint32(e.playerId), null != e.seatId && Object.hasOwnProperty.call(e, "seatId") && t.uint32(16).int32(e.seatId), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(26).string(e.name), null != e.headUrl && Object.hasOwnProperty.call(e, "headUrl") && t.uint32(34).string(e.headUrl), null != e.marks && Object.hasOwnProperty.call(e, "marks") && t.uint32(42).string(e.marks), null != e.gender && Object.hasOwnProperty.call(e, "gender") && t.uint32(48).int32(e.gender), null != e.lastVoice && Object.hasOwnProperty.call(e, "lastVoice") && t.uint32(66).string(e.lastVoice), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(72).uint32(e.amount), null != e.state && Object.hasOwnProperty.call(e, "state") && t.uint32(80).int32(e.state), null != e.holeCards && e.holeCards.length)
                    for (var r = 0; r < e.holeCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.holeCards[r], t.uint32(90).fork()).ldelim();
                if (null != e.headCards && e.headCards.length)
                    for (r = 0; r < e.headCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.headCards[r], t.uint32(98).fork()).ldelim();
                if (null != e.middleCards && e.middleCards.length)
                    for (r = 0; r < e.middleCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.middleCards[r], t.uint32(106).fork()).ldelim();
                if (null != e.tailCards && e.tailCards.length)
                    for (r = 0; r < e.tailCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.tailCards[r], t.uint32(114).fork()).ldelim();
                if (null != e.settleScore && Object.hasOwnProperty.call(e, "settleScore") && t.uint32(120).int64(e.settleScore), null != e.settleAmount && Object.hasOwnProperty.call(e, "settleAmount") && t.uint32(128).int64(e.settleAmount), null != e.score && Object.hasOwnProperty.call(e, "score") && t.uint32(136).int64(e.score), null != e.plat && Object.hasOwnProperty.call(e, "plat") && t.uint32(144).uint32(e.plat), null != e.is_online && Object.hasOwnProperty.call(e, "is_online") && t.uint32(152).bool(e.is_online), null != e.user_join_room_time && Object.hasOwnProperty.call(e, "user_join_room_time") && t.uint32(160).int64(e.user_join_room_time), null != e.NotDisturbUids && e.NotDisturbUids.length) {
                    for (t.uint32(194).fork(), r = 0; r < e.NotDisturbUids.length; ++r) t.uint32(e.NotDisturbUids[r]);
                    t.ldelim()
                }
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.PlayerInfo; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.playerId = e.uint32();
                            break;
                        case 2:
                            o.seatId = e.int32();
                            break;
                        case 3:
                            o.name = e.string();
                            break;
                        case 4:
                            o.headUrl = e.string();
                            break;
                        case 5:
                            o.marks = e.string();
                            break;
                        case 6:
                            o.gender = e.int32();
                            break;
                        case 8:
                            o.lastVoice = e.string();
                            break;
                        case 9:
                            o.amount = e.uint32();
                            break;
                        case 10:
                            o.state = e.int32();
                            break;
                        case 11:
                            o.holeCards && o.holeCards.length || (o.holeCards = []), o.holeCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 12:
                            o.headCards && o.headCards.length || (o.headCards = []), o.headCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 13:
                            o.middleCards && o.middleCards.length || (o.middleCards = []), o.middleCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 14:
                            o.tailCards && o.tailCards.length || (o.tailCards = []), o.tailCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 15:
                            o.settleScore = e.int64();
                            break;
                        case 16:
                            o.settleAmount = e.int64();
                            break;
                        case 17:
                            o.score = e.int64();
                            break;
                        case 18:
                            o.plat = e.uint32();
                            break;
                        case 19:
                            o.is_online = e.bool();
                            break;
                        case 20:
                            o.user_join_room_time = e.int64();
                            break;
                        case 24:
                            if (o.NotDisturbUids && o.NotDisturbUids.length || (o.NotDisturbUids = []), 2 == (7 & n))
                                for (var a = e.uint32() + e.pos; e.pos < a;) o.NotDisturbUids.push(e.uint32());
                            else o.NotDisturbUids.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.playerId && e.hasOwnProperty("playerId") && !f.isInteger(e.playerId)) return "playerId: integer expected";
                if (null != e.seatId && e.hasOwnProperty("seatId") && !f.isInteger(e.seatId)) return "seatId: integer expected";
                if (null != e.name && e.hasOwnProperty("name") && !f.isString(e.name)) return "name: string expected";
                if (null != e.headUrl && e.hasOwnProperty("headUrl") && !f.isString(e.headUrl)) return "headUrl: string expected";
                if (null != e.marks && e.hasOwnProperty("marks") && !f.isString(e.marks)) return "marks: string expected";
                if (null != e.gender && e.hasOwnProperty("gender") && !f.isInteger(e.gender)) return "gender: integer expected";
                if (null != e.lastVoice && e.hasOwnProperty("lastVoice") && !f.isString(e.lastVoice)) return "lastVoice: string expected";
                if (null != e.amount && e.hasOwnProperty("amount") && !f.isInteger(e.amount)) return "amount: integer expected";
                if (null != e.state && e.hasOwnProperty("state")) switch (e.state) {
                    default:
                        return "state: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 8:
                    case 11:
                    case 13:
                    case 14:
                    case 15:
                    case 20:
                }
                if (null != e.holeCards && e.hasOwnProperty("holeCards")) {
                    if (!Array.isArray(e.holeCards)) return "holeCards: array expected";
                    for (var t = 0; t < e.holeCards.length; ++t)
                        if (r = y.jackfruit_proto.CardItem.verify(e.holeCards[t])) return "holeCards." + r
                }
                if (null != e.headCards && e.hasOwnProperty("headCards")) {
                    if (!Array.isArray(e.headCards)) return "headCards: array expected";
                    for (t = 0; t < e.headCards.length; ++t)
                        if (r = y.jackfruit_proto.CardItem.verify(e.headCards[t])) return "headCards." + r
                }
                if (null != e.middleCards && e.hasOwnProperty("middleCards")) {
                    if (!Array.isArray(e.middleCards)) return "middleCards: array expected";
                    for (t = 0; t < e.middleCards.length; ++t)
                        if (r = y.jackfruit_proto.CardItem.verify(e.middleCards[t])) return "middleCards." + r
                }
                if (null != e.tailCards && e.hasOwnProperty("tailCards")) {
                    if (!Array.isArray(e.tailCards)) return "tailCards: array expected";
                    for (t = 0; t < e.tailCards.length; ++t) {
                        var r;
                        if (r = y.jackfruit_proto.CardItem.verify(e.tailCards[t])) return "tailCards." + r
                    }
                }
                if (null != e.settleScore && e.hasOwnProperty("settleScore") && !(f.isInteger(e.settleScore) || e.settleScore && f.isInteger(e.settleScore.low) && f.isInteger(e.settleScore.high))) return "settleScore: integer|Long expected";
                if (null != e.settleAmount && e.hasOwnProperty("settleAmount") && !(f.isInteger(e.settleAmount) || e.settleAmount && f.isInteger(e.settleAmount.low) && f.isInteger(e.settleAmount.high))) return "settleAmount: integer|Long expected";
                if (null != e.score && e.hasOwnProperty("score") && !(f.isInteger(e.score) || e.score && f.isInteger(e.score.low) && f.isInteger(e.score.high))) return "score: integer|Long expected";
                if (null != e.plat && e.hasOwnProperty("plat") && !f.isInteger(e.plat)) return "plat: integer expected";
                if (null != e.is_online && e.hasOwnProperty("is_online") && "boolean" != typeof e.is_online) return "is_online: boolean expected";
                if (null != e.user_join_room_time && e.hasOwnProperty("user_join_room_time") && !(f.isInteger(e.user_join_room_time) || e.user_join_room_time && f.isInteger(e.user_join_room_time.low) && f.isInteger(e.user_join_room_time.high))) return "user_join_room_time: integer|Long expected";
                if (null != e.NotDisturbUids && e.hasOwnProperty("NotDisturbUids")) {
                    if (!Array.isArray(e.NotDisturbUids)) return "NotDisturbUids: array expected";
                    for (t = 0; t < e.NotDisturbUids.length; ++t)
                        if (!f.isInteger(e.NotDisturbUids[t])) return "NotDisturbUids: integer[] expected"
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.PlayerInfo) return e;
                var t = new y.jackfruit_proto.PlayerInfo;
                switch (null != e.playerId && (t.playerId = e.playerId >>> 0), null != e.seatId && (t.seatId = 0 | e.seatId), null != e.name && (t.name = String(e.name)), null != e.headUrl && (t.headUrl = String(e.headUrl)), null != e.marks && (t.marks = String(e.marks)), null != e.gender && (t.gender = 0 | e.gender), null != e.lastVoice && (t.lastVoice = String(e.lastVoice)), null != e.amount && (t.amount = e.amount >>> 0), e.state) {
                    default:
                        if ("number" == typeof e.state) {
                            t.state = e.state;
                            break
                        }
                        break;
                    case "SeatState_DUMMY":
                    case 0:
                        t.state = 0;
                        break;
                    case "SFree":
                    case 1:
                        t.state = 1;
                        break;
                    case "SReady":
                    case 2:
                        t.state = 2;
                        break;
                    case "SClickReady":
                    case 8:
                        t.state = 8;
                        break;
                    case "SWaitPlaceCards":
                    case 11:
                        t.state = 11;
                        break;
                    case "SPlaceCards":
                    case 13:
                        t.state = 13;
                        break;
                    case "SModifyPlaceCards":
                    case 14:
                        t.state = 14;
                        break;
                    case "SConfirmsPlaceCards":
                    case 15:
                        t.state = 15;
                        break;
                    case "SWaitResult":
                    case 20:
                        t.state = 20
                }
                if (e.holeCards) {
                    if (!Array.isArray(e.holeCards)) throw TypeError(".jackfruit_proto.PlayerInfo.holeCards: array expected");
                    t.holeCards = [];
                    for (var r = 0; r < e.holeCards.length; ++r) {
                        if ("object" != typeof e.holeCards[r]) throw TypeError(".jackfruit_proto.PlayerInfo.holeCards: object expected");
                        t.holeCards[r] = y.jackfruit_proto.CardItem.fromObject(e.holeCards[r])
                    }
                }
                if (e.headCards) {
                    if (!Array.isArray(e.headCards)) throw TypeError(".jackfruit_proto.PlayerInfo.headCards: array expected");
                    for (t.headCards = [], r = 0; r < e.headCards.length; ++r) {
                        if ("object" != typeof e.headCards[r]) throw TypeError(".jackfruit_proto.PlayerInfo.headCards: object expected");
                        t.headCards[r] = y.jackfruit_proto.CardItem.fromObject(e.headCards[r])
                    }
                }
                if (e.middleCards) {
                    if (!Array.isArray(e.middleCards)) throw TypeError(".jackfruit_proto.PlayerInfo.middleCards: array expected");
                    for (t.middleCards = [], r = 0; r < e.middleCards.length; ++r) {
                        if ("object" != typeof e.middleCards[r]) throw TypeError(".jackfruit_proto.PlayerInfo.middleCards: object expected");
                        t.middleCards[r] = y.jackfruit_proto.CardItem.fromObject(e.middleCards[r])
                    }
                }
                if (e.tailCards) {
                    if (!Array.isArray(e.tailCards)) throw TypeError(".jackfruit_proto.PlayerInfo.tailCards: array expected");
                    for (t.tailCards = [], r = 0; r < e.tailCards.length; ++r) {
                        if ("object" != typeof e.tailCards[r]) throw TypeError(".jackfruit_proto.PlayerInfo.tailCards: object expected");
                        t.tailCards[r] = y.jackfruit_proto.CardItem.fromObject(e.tailCards[r])
                    }
                }
                if (null != e.settleScore && (f.Long ? (t.settleScore = f.Long.fromValue(e.settleScore)).unsigned = !1 : "string" == typeof e.settleScore ? t.settleScore = parseInt(e.settleScore, 10) : "number" == typeof e.settleScore ? t.settleScore = e.settleScore : "object" == typeof e.settleScore && (t.settleScore = new f.LongBits(e.settleScore.low >>> 0, e.settleScore.high >>> 0).toNumber())), null != e.settleAmount && (f.Long ? (t.settleAmount = f.Long.fromValue(e.settleAmount)).unsigned = !1 : "string" == typeof e.settleAmount ? t.settleAmount = parseInt(e.settleAmount, 10) : "number" == typeof e.settleAmount ? t.settleAmount = e.settleAmount : "object" == typeof e.settleAmount && (t.settleAmount = new f.LongBits(e.settleAmount.low >>> 0, e.settleAmount.high >>> 0).toNumber())), null != e.score && (f.Long ? (t.score = f.Long.fromValue(e.score)).unsigned = !1 : "string" == typeof e.score ? t.score = parseInt(e.score, 10) : "number" == typeof e.score ? t.score = e.score : "object" == typeof e.score && (t.score = new f.LongBits(e.score.low >>> 0, e.score.high >>> 0).toNumber())), null != e.plat && (t.plat = e.plat >>> 0), null != e.is_online && (t.is_online = Boolean(e.is_online)), null != e.user_join_room_time && (f.Long ? (t.user_join_room_time = f.Long.fromValue(e.user_join_room_time)).unsigned = !1 : "string" == typeof e.user_join_room_time ? t.user_join_room_time = parseInt(e.user_join_room_time, 10) : "number" == typeof e.user_join_room_time ? t.user_join_room_time = e.user_join_room_time : "object" == typeof e.user_join_room_time && (t.user_join_room_time = new f.LongBits(e.user_join_room_time.low >>> 0, e.user_join_room_time.high >>> 0).toNumber())), e.NotDisturbUids) {
                    if (!Array.isArray(e.NotDisturbUids)) throw TypeError(".jackfruit_proto.PlayerInfo.NotDisturbUids: array expected");
                    for (t.NotDisturbUids = [], r = 0; r < e.NotDisturbUids.length; ++r) t.NotDisturbUids[r] = e.NotDisturbUids[r] >>> 0
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.holeCards = [], r.headCards = [], r.middleCards = [], r.tailCards = [], r.NotDisturbUids = []), t.defaults) {
                    if (r.playerId = 0, r.seatId = 0, r.name = "", r.headUrl = "", r.marks = "", r.gender = 0, r.lastVoice = "", r.amount = 0, r.state = t.enums === String ? "SeatState_DUMMY" : 0, f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.settleScore = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.settleScore = t.longs === String ? "0" : 0;
                    f.Long ? (o = new f.Long(0, 0, !1), r.settleAmount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.settleAmount = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.score = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.score = t.longs === String ? "0" : 0, r.plat = 0, r.is_online = !1, f.Long ? (o = new f.Long(0, 0, !1), r.user_join_room_time = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.user_join_room_time = t.longs === String ? "0" : 0
                }
                if (null != e.playerId && e.hasOwnProperty("playerId") && (r.playerId = e.playerId), null != e.seatId && e.hasOwnProperty("seatId") && (r.seatId = e.seatId), null != e.name && e.hasOwnProperty("name") && (r.name = e.name), null != e.headUrl && e.hasOwnProperty("headUrl") && (r.headUrl = e.headUrl), null != e.marks && e.hasOwnProperty("marks") && (r.marks = e.marks), null != e.gender && e.hasOwnProperty("gender") && (r.gender = e.gender), null != e.lastVoice && e.hasOwnProperty("lastVoice") && (r.lastVoice = e.lastVoice), null != e.amount && e.hasOwnProperty("amount") && (r.amount = e.amount), null != e.state && e.hasOwnProperty("state") && (r.state = t.enums === String ? void 0 === y.jackfruit_proto.PlayerState[e.state] ? e.state : y.jackfruit_proto.PlayerState[e.state] : e.state), e.holeCards && e.holeCards.length) {
                    r.holeCards = [];
                    for (var n = 0; n < e.holeCards.length; ++n) r.holeCards[n] = y.jackfruit_proto.CardItem.toObject(e.holeCards[n], t)
                }
                if (e.headCards && e.headCards.length)
                    for (r.headCards = [], n = 0; n < e.headCards.length; ++n) r.headCards[n] = y.jackfruit_proto.CardItem.toObject(e.headCards[n], t);
                if (e.middleCards && e.middleCards.length)
                    for (r.middleCards = [], n = 0; n < e.middleCards.length; ++n) r.middleCards[n] = y.jackfruit_proto.CardItem.toObject(e.middleCards[n], t);
                if (e.tailCards && e.tailCards.length)
                    for (r.tailCards = [], n = 0; n < e.tailCards.length; ++n) r.tailCards[n] = y.jackfruit_proto.CardItem.toObject(e.tailCards[n], t);
                if (null != e.settleScore && e.hasOwnProperty("settleScore") && ("number" == typeof e.settleScore ? r.settleScore = t.longs === String ? String(e.settleScore) : e.settleScore : r.settleScore = t.longs === String ? f.Long.prototype.toString.call(e.settleScore) : t.longs === Number ? new f.LongBits(e.settleScore.low >>> 0, e.settleScore.high >>> 0).toNumber() : e.settleScore), null != e.settleAmount && e.hasOwnProperty("settleAmount") && ("number" == typeof e.settleAmount ? r.settleAmount = t.longs === String ? String(e.settleAmount) : e.settleAmount : r.settleAmount = t.longs === String ? f.Long.prototype.toString.call(e.settleAmount) : t.longs === Number ? new f.LongBits(e.settleAmount.low >>> 0, e.settleAmount.high >>> 0).toNumber() : e.settleAmount), null != e.score && e.hasOwnProperty("score") && ("number" == typeof e.score ? r.score = t.longs === String ? String(e.score) : e.score : r.score = t.longs === String ? f.Long.prototype.toString.call(e.score) : t.longs === Number ? new f.LongBits(e.score.low >>> 0, e.score.high >>> 0).toNumber() : e.score), null != e.plat && e.hasOwnProperty("plat") && (r.plat = e.plat), null != e.is_online && e.hasOwnProperty("is_online") && (r.is_online = e.is_online), null != e.user_join_room_time && e.hasOwnProperty("user_join_room_time") && ("number" == typeof e.user_join_room_time ? r.user_join_room_time = t.longs === String ? String(e.user_join_room_time) : e.user_join_room_time : r.user_join_room_time = t.longs === String ? f.Long.prototype.toString.call(e.user_join_room_time) : t.longs === Number ? new f.LongBits(e.user_join_room_time.low >>> 0, e.user_join_room_time.high >>> 0).toNumber() : e.user_join_room_time), e.NotDisturbUids && e.NotDisturbUids.length)
                    for (r.NotDisturbUids = [], n = 0; n < e.NotDisturbUids.length; ++n) r.NotDisturbUids[n] = e.NotDisturbUids[n];
                return r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.PlayerInfo"
            }, e
        }(), l.LoginReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.version = "", e.prototype.token = "", e.prototype.clientType = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(10).string(e.version), null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(18).string(e.token), null != e.clientType && Object.hasOwnProperty.call(e, "clientType") && t.uint32(24).int32(e.clientType), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.LoginReq; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.version = e.string();
                            break;
                        case 2:
                            o.token = e.string();
                            break;
                        case 3:
                            o.clientType = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.version && e.hasOwnProperty("version") && !f.isString(e.version)) return "version: string expected";
                if (null != e.token && e.hasOwnProperty("token") && !f.isString(e.token)) return "token: string expected";
                if (null != e.clientType && e.hasOwnProperty("clientType")) switch (e.clientType) {
                    default:
                        return "clientType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.LoginReq) return e;
                var t = new y.jackfruit_proto.LoginReq;
                switch (null != e.version && (t.version = String(e.version)), null != e.token && (t.token = String(e.token)), e.clientType) {
                    default:
                        if ("number" == typeof e.clientType) {
                            t.clientType = e.clientType;
                            break
                        }
                        break;
                    case "Dummy":
                    case 0:
                        t.clientType = 0;
                        break;
                    case "Normal":
                    case 1:
                        t.clientType = 1;
                        break;
                    case "OverSeas":
                    case 2:
                        t.clientType = 2;
                        break;
                    case "H5":
                    case 3:
                        t.clientType = 3;
                        break;
                    case "H5OverSeas":
                    case 4:
                        t.clientType = 4;
                        break;
                    case "H5Web":
                    case 5:
                        t.clientType = 5;
                        break;
                    case "H5WebOverSeas":
                    case 6:
                        t.clientType = 6;
                        break;
                    case "H5VietnamLasted":
                    case 7:
                        t.clientType = 7;
                        break;
                    case "H5WebVietnamLasted":
                    case 8:
                        t.clientType = 8
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.version = "", r.token = "", r.clientType = t.enums === String ? "Dummy" : 0), null != e.version && e.hasOwnProperty("version") && (r.version = e.version), null != e.token && e.hasOwnProperty("token") && (r.token = e.token), null != e.clientType && e.hasOwnProperty("clientType") && (r.clientType = t.enums === String ? void 0 === y.jackfruit_proto.ClientType[e.clientType] ? e.clientType : y.jackfruit_proto.ClientType[e.clientType] : e.clientType), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.LoginReq"
            }, e
        }(), l.LoginResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(16).uint32(e.roomId), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.LoginResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        case 2:
                            o.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                return null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId) ? "roomId: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.LoginResp) return e;
                var t = new y.jackfruit_proto.LoginResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                return null != e.roomId && (t.roomId = e.roomId >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0, r.roomId = 0), null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.LoginResp"
            }, e
        }(), l.JoinRoomReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).uint32(e.roomId), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.JoinRoomReq; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId) ? "roomId: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.JoinRoomReq) return e;
                var t = new y.jackfruit_proto.JoinRoomReq;
                return null != e.roomId && (t.roomId = e.roomId >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.roomId = 0), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.JoinRoomReq"
            }, e
        }(), l.JoinRoomResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(16).uint32(e.roomId), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.JoinRoomResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        case 2:
                            o.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                return null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId) ? "roomId: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.JoinRoomResp) return e;
                var t = new y.jackfruit_proto.JoinRoomResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                return null != e.roomId && (t.roomId = e.roomId >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0, r.roomId = 0), null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.JoinRoomResp"
            }, e
        }(), l.LeaveReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.LeaveReq; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomId = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId) ? "roomId: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.LeaveReq) return e;
                var t = new y.jackfruit_proto.LeaveReq;
                return null != e.roomId && (t.roomId = 0 | e.roomId), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.roomId = 0), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.LeaveReq"
            }, e
        }(), l.LeaveResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.LeaveResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.LeaveResp) return e;
                var t = new y.jackfruit_proto.LeaveResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.LeaveResp"
            }, e
        }(), l.SitDownReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomId = 0, e.prototype.seatId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), null != e.seatId && Object.hasOwnProperty.call(e, "seatId") && t.uint32(16).int32(e.seatId), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.SitDownReq; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomId = e.int32();
                            break;
                        case 2:
                            o.seatId = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId) ? "roomId: integer expected" : null != e.seatId && e.hasOwnProperty("seatId") && !f.isInteger(e.seatId) ? "seatId: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.SitDownReq) return e;
                var t = new y.jackfruit_proto.SitDownReq;
                return null != e.roomId && (t.roomId = 0 | e.roomId), null != e.seatId && (t.seatId = 0 | e.seatId), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.roomId = 0, r.seatId = 0), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), null != e.seatId && e.hasOwnProperty("seatId") && (r.seatId = e.seatId), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.SitDownReq"
            }, e
        }(), l.SitDownResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.prototype.playerId = 0, e.prototype.playerName = "", e.prototype.seatId = 0, e.prototype.needAmount = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.amount = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.needScore = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.score = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.playerId && Object.hasOwnProperty.call(e, "playerId") && t.uint32(16).uint32(e.playerId), null != e.playerName && Object.hasOwnProperty.call(e, "playerName") && t.uint32(26).string(e.playerName), null != e.seatId && Object.hasOwnProperty.call(e, "seatId") && t.uint32(32).int32(e.seatId), null != e.needAmount && Object.hasOwnProperty.call(e, "needAmount") && t.uint32(40).int64(e.needAmount), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(48).int64(e.amount), null != e.needScore && Object.hasOwnProperty.call(e, "needScore") && t.uint32(56).int64(e.needScore), null != e.score && Object.hasOwnProperty.call(e, "score") && t.uint32(64).int64(e.score), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.SitDownResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        case 2:
                            o.playerId = e.uint32();
                            break;
                        case 3:
                            o.playerName = e.string();
                            break;
                        case 4:
                            o.seatId = e.int32();
                            break;
                        case 5:
                            o.needAmount = e.int64();
                            break;
                        case 6:
                            o.amount = e.int64();
                            break;
                        case 7:
                            o.needScore = e.int64();
                            break;
                        case 8:
                            o.score = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                return null != e.playerId && e.hasOwnProperty("playerId") && !f.isInteger(e.playerId) ? "playerId: integer expected" : null != e.playerName && e.hasOwnProperty("playerName") && !f.isString(e.playerName) ? "playerName: string expected" : null != e.seatId && e.hasOwnProperty("seatId") && !f.isInteger(e.seatId) ? "seatId: integer expected" : null != e.needAmount && e.hasOwnProperty("needAmount") && !(f.isInteger(e.needAmount) || e.needAmount && f.isInteger(e.needAmount.low) && f.isInteger(e.needAmount.high)) ? "needAmount: integer|Long expected" : null != e.amount && e.hasOwnProperty("amount") && !(f.isInteger(e.amount) || e.amount && f.isInteger(e.amount.low) && f.isInteger(e.amount.high)) ? "amount: integer|Long expected" : null != e.needScore && e.hasOwnProperty("needScore") && !(f.isInteger(e.needScore) || e.needScore && f.isInteger(e.needScore.low) && f.isInteger(e.needScore.high)) ? "needScore: integer|Long expected" : null != e.score && e.hasOwnProperty("score") && !(f.isInteger(e.score) || e.score && f.isInteger(e.score.low) && f.isInteger(e.score.high)) ? "score: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.SitDownResp) return e;
                var t = new y.jackfruit_proto.SitDownResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                return null != e.playerId && (t.playerId = e.playerId >>> 0), null != e.playerName && (t.playerName = String(e.playerName)), null != e.seatId && (t.seatId = 0 | e.seatId), null != e.needAmount && (f.Long ? (t.needAmount = f.Long.fromValue(e.needAmount)).unsigned = !1 : "string" == typeof e.needAmount ? t.needAmount = parseInt(e.needAmount, 10) : "number" == typeof e.needAmount ? t.needAmount = e.needAmount : "object" == typeof e.needAmount && (t.needAmount = new f.LongBits(e.needAmount.low >>> 0, e.needAmount.high >>> 0).toNumber())), null != e.amount && (f.Long ? (t.amount = f.Long.fromValue(e.amount)).unsigned = !1 : "string" == typeof e.amount ? t.amount = parseInt(e.amount, 10) : "number" == typeof e.amount ? t.amount = e.amount : "object" == typeof e.amount && (t.amount = new f.LongBits(e.amount.low >>> 0, e.amount.high >>> 0).toNumber())), null != e.needScore && (f.Long ? (t.needScore = f.Long.fromValue(e.needScore)).unsigned = !1 : "string" == typeof e.needScore ? t.needScore = parseInt(e.needScore, 10) : "number" == typeof e.needScore ? t.needScore = e.needScore : "object" == typeof e.needScore && (t.needScore = new f.LongBits(e.needScore.low >>> 0, e.needScore.high >>> 0).toNumber())), null != e.score && (f.Long ? (t.score = f.Long.fromValue(e.score)).unsigned = !1 : "string" == typeof e.score ? t.score = parseInt(e.score, 10) : "number" == typeof e.score ? t.score = e.score : "object" == typeof e.score && (t.score = new f.LongBits(e.score.low >>> 0, e.score.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults) {
                    if (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0, r.playerId = 0, r.playerName = "", r.seatId = 0, f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.needAmount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.needAmount = t.longs === String ? "0" : 0;
                    f.Long ? (o = new f.Long(0, 0, !1), r.amount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.amount = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.needScore = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.needScore = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.score = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.score = t.longs === String ? "0" : 0
                }
                return null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), null != e.playerId && e.hasOwnProperty("playerId") && (r.playerId = e.playerId), null != e.playerName && e.hasOwnProperty("playerName") && (r.playerName = e.playerName), null != e.seatId && e.hasOwnProperty("seatId") && (r.seatId = e.seatId), null != e.needAmount && e.hasOwnProperty("needAmount") && ("number" == typeof e.needAmount ? r.needAmount = t.longs === String ? String(e.needAmount) : e.needAmount : r.needAmount = t.longs === String ? f.Long.prototype.toString.call(e.needAmount) : t.longs === Number ? new f.LongBits(e.needAmount.low >>> 0, e.needAmount.high >>> 0).toNumber() : e.needAmount), null != e.amount && e.hasOwnProperty("amount") && ("number" == typeof e.amount ? r.amount = t.longs === String ? String(e.amount) : e.amount : r.amount = t.longs === String ? f.Long.prototype.toString.call(e.amount) : t.longs === Number ? new f.LongBits(e.amount.low >>> 0, e.amount.high >>> 0).toNumber() : e.amount), null != e.needScore && e.hasOwnProperty("needScore") && ("number" == typeof e.needScore ? r.needScore = t.longs === String ? String(e.needScore) : e.needScore : r.needScore = t.longs === String ? f.Long.prototype.toString.call(e.needScore) : t.longs === Number ? new f.LongBits(e.needScore.low >>> 0, e.needScore.high >>> 0).toNumber() : e.needScore), null != e.score && e.hasOwnProperty("score") && ("number" == typeof e.score ? r.score = t.longs === String ? String(e.score) : e.score : r.score = t.longs === String ? f.Long.prototype.toString.call(e.score) : t.longs === Number ? new f.LongBits(e.score.low >>> 0, e.score.high >>> 0).toNumber() : e.score), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.SitDownResp"
            }, e
        }(), l.SitDownNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomId = 0, e.prototype.player = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), null != e.player && Object.hasOwnProperty.call(e, "player") && y.jackfruit_proto.PlayerInfo.encode(e.player, t.uint32(18).fork()).ldelim(), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.SitDownNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomId = e.int32();
                            break;
                        case 2:
                            o.player = y.jackfruit_proto.PlayerInfo.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId)) return "roomId: integer expected";
                if (null != e.player && e.hasOwnProperty("player")) {
                    var t = y.jackfruit_proto.PlayerInfo.verify(e.player);
                    if (t) return "player." + t
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.SitDownNotify) return e;
                var t = new y.jackfruit_proto.SitDownNotify;
                if (null != e.roomId && (t.roomId = 0 | e.roomId), null != e.player) {
                    if ("object" != typeof e.player) throw TypeError(".jackfruit_proto.SitDownNotify.player: object expected");
                    t.player = y.jackfruit_proto.PlayerInfo.fromObject(e.player)
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.roomId = 0, r.player = null), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), null != e.player && e.hasOwnProperty("player") && (r.player = y.jackfruit_proto.PlayerInfo.toObject(e.player, t)), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.SitDownNotify"
            }, e
        }(), l.PlaceCardReq = function() {
            function e(e) {
                if (this.headCards = [], this.middleCards = [], this.tailCards = [], this.holeCards = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.headCards = f.emptyArray, e.prototype.middleCards = f.emptyArray, e.prototype.tailCards = f.emptyArray, e.prototype.holeCards = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.headCards && e.headCards.length)
                    for (var r = 0; r < e.headCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.headCards[r], t.uint32(10).fork()).ldelim();
                if (null != e.middleCards && e.middleCards.length)
                    for (r = 0; r < e.middleCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.middleCards[r], t.uint32(18).fork()).ldelim();
                if (null != e.tailCards && e.tailCards.length)
                    for (r = 0; r < e.tailCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.tailCards[r], t.uint32(26).fork()).ldelim();
                if (null != e.holeCards && e.holeCards.length)
                    for (r = 0; r < e.holeCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.holeCards[r], t.uint32(34).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.PlaceCardReq; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.headCards && o.headCards.length || (o.headCards = []), o.headCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.middleCards && o.middleCards.length || (o.middleCards = []), o.middleCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 3:
                            o.tailCards && o.tailCards.length || (o.tailCards = []), o.tailCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 4:
                            o.holeCards && o.holeCards.length || (o.holeCards = []), o.holeCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.headCards && e.hasOwnProperty("headCards")) {
                    if (!Array.isArray(e.headCards)) return "headCards: array expected";
                    for (var t = 0; t < e.headCards.length; ++t)
                        if (r = y.jackfruit_proto.CardItem.verify(e.headCards[t])) return "headCards." + r
                }
                if (null != e.middleCards && e.hasOwnProperty("middleCards")) {
                    if (!Array.isArray(e.middleCards)) return "middleCards: array expected";
                    for (t = 0; t < e.middleCards.length; ++t)
                        if (r = y.jackfruit_proto.CardItem.verify(e.middleCards[t])) return "middleCards." + r
                }
                if (null != e.tailCards && e.hasOwnProperty("tailCards")) {
                    if (!Array.isArray(e.tailCards)) return "tailCards: array expected";
                    for (t = 0; t < e.tailCards.length; ++t)
                        if (r = y.jackfruit_proto.CardItem.verify(e.tailCards[t])) return "tailCards." + r
                }
                if (null != e.holeCards && e.hasOwnProperty("holeCards")) {
                    if (!Array.isArray(e.holeCards)) return "holeCards: array expected";
                    for (t = 0; t < e.holeCards.length; ++t) {
                        var r;
                        if (r = y.jackfruit_proto.CardItem.verify(e.holeCards[t])) return "holeCards." + r
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.PlaceCardReq) return e;
                var t = new y.jackfruit_proto.PlaceCardReq;
                if (e.headCards) {
                    if (!Array.isArray(e.headCards)) throw TypeError(".jackfruit_proto.PlaceCardReq.headCards: array expected");
                    t.headCards = [];
                    for (var r = 0; r < e.headCards.length; ++r) {
                        if ("object" != typeof e.headCards[r]) throw TypeError(".jackfruit_proto.PlaceCardReq.headCards: object expected");
                        t.headCards[r] = y.jackfruit_proto.CardItem.fromObject(e.headCards[r])
                    }
                }
                if (e.middleCards) {
                    if (!Array.isArray(e.middleCards)) throw TypeError(".jackfruit_proto.PlaceCardReq.middleCards: array expected");
                    for (t.middleCards = [], r = 0; r < e.middleCards.length; ++r) {
                        if ("object" != typeof e.middleCards[r]) throw TypeError(".jackfruit_proto.PlaceCardReq.middleCards: object expected");
                        t.middleCards[r] = y.jackfruit_proto.CardItem.fromObject(e.middleCards[r])
                    }
                }
                if (e.tailCards) {
                    if (!Array.isArray(e.tailCards)) throw TypeError(".jackfruit_proto.PlaceCardReq.tailCards: array expected");
                    for (t.tailCards = [], r = 0; r < e.tailCards.length; ++r) {
                        if ("object" != typeof e.tailCards[r]) throw TypeError(".jackfruit_proto.PlaceCardReq.tailCards: object expected");
                        t.tailCards[r] = y.jackfruit_proto.CardItem.fromObject(e.tailCards[r])
                    }
                }
                if (e.holeCards) {
                    if (!Array.isArray(e.holeCards)) throw TypeError(".jackfruit_proto.PlaceCardReq.holeCards: array expected");
                    for (t.holeCards = [], r = 0; r < e.holeCards.length; ++r) {
                        if ("object" != typeof e.holeCards[r]) throw TypeError(".jackfruit_proto.PlaceCardReq.holeCards: object expected");
                        t.holeCards[r] = y.jackfruit_proto.CardItem.fromObject(e.holeCards[r])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.headCards = [], r.middleCards = [], r.tailCards = [], r.holeCards = []), e.headCards && e.headCards.length) {
                    r.headCards = [];
                    for (var o = 0; o < e.headCards.length; ++o) r.headCards[o] = y.jackfruit_proto.CardItem.toObject(e.headCards[o], t)
                }
                if (e.middleCards && e.middleCards.length)
                    for (r.middleCards = [], o = 0; o < e.middleCards.length; ++o) r.middleCards[o] = y.jackfruit_proto.CardItem.toObject(e.middleCards[o], t);
                if (e.tailCards && e.tailCards.length)
                    for (r.tailCards = [], o = 0; o < e.tailCards.length; ++o) r.tailCards[o] = y.jackfruit_proto.CardItem.toObject(e.tailCards[o], t);
                if (e.holeCards && e.holeCards.length)
                    for (r.holeCards = [], o = 0; o < e.holeCards.length; ++o) r.holeCards[o] = y.jackfruit_proto.CardItem.toObject(e.holeCards[o], t);
                return r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.PlaceCardReq"
            }, e
        }(), l.PlaceCardResp = function() {
            function e(e) {
                if (this.headCards = [], this.middleCards = [], this.tailCards = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.prototype.headCards = f.emptyArray, e.prototype.middleCards = f.emptyArray, e.prototype.tailCards = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.headCards && e.headCards.length)
                    for (var r = 0; r < e.headCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.headCards[r], t.uint32(18).fork()).ldelim();
                if (null != e.middleCards && e.middleCards.length)
                    for (r = 0; r < e.middleCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.middleCards[r], t.uint32(26).fork()).ldelim();
                if (null != e.tailCards && e.tailCards.length)
                    for (r = 0; r < e.tailCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.tailCards[r], t.uint32(34).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.PlaceCardResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        case 2:
                            o.headCards && o.headCards.length || (o.headCards = []), o.headCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 3:
                            o.middleCards && o.middleCards.length || (o.middleCards = []), o.middleCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 4:
                            o.tailCards && o.tailCards.length || (o.tailCards = []), o.tailCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                if (null != e.headCards && e.hasOwnProperty("headCards")) {
                    if (!Array.isArray(e.headCards)) return "headCards: array expected";
                    for (var t = 0; t < e.headCards.length; ++t)
                        if (r = y.jackfruit_proto.CardItem.verify(e.headCards[t])) return "headCards." + r
                }
                if (null != e.middleCards && e.hasOwnProperty("middleCards")) {
                    if (!Array.isArray(e.middleCards)) return "middleCards: array expected";
                    for (t = 0; t < e.middleCards.length; ++t)
                        if (r = y.jackfruit_proto.CardItem.verify(e.middleCards[t])) return "middleCards." + r
                }
                if (null != e.tailCards && e.hasOwnProperty("tailCards")) {
                    if (!Array.isArray(e.tailCards)) return "tailCards: array expected";
                    for (t = 0; t < e.tailCards.length; ++t) {
                        var r;
                        if (r = y.jackfruit_proto.CardItem.verify(e.tailCards[t])) return "tailCards." + r
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.PlaceCardResp) return e;
                var t = new y.jackfruit_proto.PlaceCardResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                if (e.headCards) {
                    if (!Array.isArray(e.headCards)) throw TypeError(".jackfruit_proto.PlaceCardResp.headCards: array expected");
                    t.headCards = [];
                    for (var r = 0; r < e.headCards.length; ++r) {
                        if ("object" != typeof e.headCards[r]) throw TypeError(".jackfruit_proto.PlaceCardResp.headCards: object expected");
                        t.headCards[r] = y.jackfruit_proto.CardItem.fromObject(e.headCards[r])
                    }
                }
                if (e.middleCards) {
                    if (!Array.isArray(e.middleCards)) throw TypeError(".jackfruit_proto.PlaceCardResp.middleCards: array expected");
                    for (t.middleCards = [], r = 0; r < e.middleCards.length; ++r) {
                        if ("object" != typeof e.middleCards[r]) throw TypeError(".jackfruit_proto.PlaceCardResp.middleCards: object expected");
                        t.middleCards[r] = y.jackfruit_proto.CardItem.fromObject(e.middleCards[r])
                    }
                }
                if (e.tailCards) {
                    if (!Array.isArray(e.tailCards)) throw TypeError(".jackfruit_proto.PlaceCardResp.tailCards: array expected");
                    for (t.tailCards = [], r = 0; r < e.tailCards.length; ++r) {
                        if ("object" != typeof e.tailCards[r]) throw TypeError(".jackfruit_proto.PlaceCardResp.tailCards: object expected");
                        t.tailCards[r] = y.jackfruit_proto.CardItem.fromObject(e.tailCards[r])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.headCards = [], r.middleCards = [], r.tailCards = []), t.defaults && (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), e.headCards && e.headCards.length) {
                    r.headCards = [];
                    for (var o = 0; o < e.headCards.length; ++o) r.headCards[o] = y.jackfruit_proto.CardItem.toObject(e.headCards[o], t)
                }
                if (e.middleCards && e.middleCards.length)
                    for (r.middleCards = [], o = 0; o < e.middleCards.length; ++o) r.middleCards[o] = y.jackfruit_proto.CardItem.toObject(e.middleCards[o], t);
                if (e.tailCards && e.tailCards.length)
                    for (r.tailCards = [], o = 0; o < e.tailCards.length; ++o) r.tailCards[o] = y.jackfruit_proto.CardItem.toObject(e.tailCards[o], t);
                return r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.PlaceCardResp"
            }, e
        }(), l.PlaceCardOverReq = function() {
            function e(e) {
                if (this.headCards = [], this.middleCards = [], this.tailCards = [], this.holeCards = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.headCards = f.emptyArray, e.prototype.middleCards = f.emptyArray, e.prototype.tailCards = f.emptyArray, e.prototype.holeCards = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.headCards && e.headCards.length)
                    for (var r = 0; r < e.headCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.headCards[r], t.uint32(10).fork()).ldelim();
                if (null != e.middleCards && e.middleCards.length)
                    for (r = 0; r < e.middleCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.middleCards[r], t.uint32(18).fork()).ldelim();
                if (null != e.tailCards && e.tailCards.length)
                    for (r = 0; r < e.tailCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.tailCards[r], t.uint32(26).fork()).ldelim();
                if (null != e.holeCards && e.holeCards.length)
                    for (r = 0; r < e.holeCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.holeCards[r], t.uint32(34).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.PlaceCardOverReq; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.headCards && o.headCards.length || (o.headCards = []), o.headCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.middleCards && o.middleCards.length || (o.middleCards = []), o.middleCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 3:
                            o.tailCards && o.tailCards.length || (o.tailCards = []), o.tailCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 4:
                            o.holeCards && o.holeCards.length || (o.holeCards = []), o.holeCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.headCards && e.hasOwnProperty("headCards")) {
                    if (!Array.isArray(e.headCards)) return "headCards: array expected";
                    for (var t = 0; t < e.headCards.length; ++t)
                        if (r = y.jackfruit_proto.CardItem.verify(e.headCards[t])) return "headCards." + r
                }
                if (null != e.middleCards && e.hasOwnProperty("middleCards")) {
                    if (!Array.isArray(e.middleCards)) return "middleCards: array expected";
                    for (t = 0; t < e.middleCards.length; ++t)
                        if (r = y.jackfruit_proto.CardItem.verify(e.middleCards[t])) return "middleCards." + r
                }
                if (null != e.tailCards && e.hasOwnProperty("tailCards")) {
                    if (!Array.isArray(e.tailCards)) return "tailCards: array expected";
                    for (t = 0; t < e.tailCards.length; ++t)
                        if (r = y.jackfruit_proto.CardItem.verify(e.tailCards[t])) return "tailCards." + r
                }
                if (null != e.holeCards && e.hasOwnProperty("holeCards")) {
                    if (!Array.isArray(e.holeCards)) return "holeCards: array expected";
                    for (t = 0; t < e.holeCards.length; ++t) {
                        var r;
                        if (r = y.jackfruit_proto.CardItem.verify(e.holeCards[t])) return "holeCards." + r
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.PlaceCardOverReq) return e;
                var t = new y.jackfruit_proto.PlaceCardOverReq;
                if (e.headCards) {
                    if (!Array.isArray(e.headCards)) throw TypeError(".jackfruit_proto.PlaceCardOverReq.headCards: array expected");
                    t.headCards = [];
                    for (var r = 0; r < e.headCards.length; ++r) {
                        if ("object" != typeof e.headCards[r]) throw TypeError(".jackfruit_proto.PlaceCardOverReq.headCards: object expected");
                        t.headCards[r] = y.jackfruit_proto.CardItem.fromObject(e.headCards[r])
                    }
                }
                if (e.middleCards) {
                    if (!Array.isArray(e.middleCards)) throw TypeError(".jackfruit_proto.PlaceCardOverReq.middleCards: array expected");
                    for (t.middleCards = [], r = 0; r < e.middleCards.length; ++r) {
                        if ("object" != typeof e.middleCards[r]) throw TypeError(".jackfruit_proto.PlaceCardOverReq.middleCards: object expected");
                        t.middleCards[r] = y.jackfruit_proto.CardItem.fromObject(e.middleCards[r])
                    }
                }
                if (e.tailCards) {
                    if (!Array.isArray(e.tailCards)) throw TypeError(".jackfruit_proto.PlaceCardOverReq.tailCards: array expected");
                    for (t.tailCards = [], r = 0; r < e.tailCards.length; ++r) {
                        if ("object" != typeof e.tailCards[r]) throw TypeError(".jackfruit_proto.PlaceCardOverReq.tailCards: object expected");
                        t.tailCards[r] = y.jackfruit_proto.CardItem.fromObject(e.tailCards[r])
                    }
                }
                if (e.holeCards) {
                    if (!Array.isArray(e.holeCards)) throw TypeError(".jackfruit_proto.PlaceCardOverReq.holeCards: array expected");
                    for (t.holeCards = [], r = 0; r < e.holeCards.length; ++r) {
                        if ("object" != typeof e.holeCards[r]) throw TypeError(".jackfruit_proto.PlaceCardOverReq.holeCards: object expected");
                        t.holeCards[r] = y.jackfruit_proto.CardItem.fromObject(e.holeCards[r])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.headCards = [], r.middleCards = [], r.tailCards = [], r.holeCards = []), e.headCards && e.headCards.length) {
                    r.headCards = [];
                    for (var o = 0; o < e.headCards.length; ++o) r.headCards[o] = y.jackfruit_proto.CardItem.toObject(e.headCards[o], t)
                }
                if (e.middleCards && e.middleCards.length)
                    for (r.middleCards = [], o = 0; o < e.middleCards.length; ++o) r.middleCards[o] = y.jackfruit_proto.CardItem.toObject(e.middleCards[o], t);
                if (e.tailCards && e.tailCards.length)
                    for (r.tailCards = [], o = 0; o < e.tailCards.length; ++o) r.tailCards[o] = y.jackfruit_proto.CardItem.toObject(e.tailCards[o], t);
                if (e.holeCards && e.holeCards.length)
                    for (r.holeCards = [], o = 0; o < e.holeCards.length; ++o) r.holeCards[o] = y.jackfruit_proto.CardItem.toObject(e.holeCards[o], t);
                return r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.PlaceCardOverReq"
            }, e
        }(), l.PlaceCardOverResp = function() {
            function e(e) {
                if (this.headCards = [], this.middleCards = [], this.tailCards = [], this.holeCards = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.prototype.headCards = f.emptyArray, e.prototype.middleCards = f.emptyArray, e.prototype.tailCards = f.emptyArray, e.prototype.holeCards = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.headCards && e.headCards.length)
                    for (var r = 0; r < e.headCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.headCards[r], t.uint32(18).fork()).ldelim();
                if (null != e.middleCards && e.middleCards.length)
                    for (r = 0; r < e.middleCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.middleCards[r], t.uint32(26).fork()).ldelim();
                if (null != e.tailCards && e.tailCards.length)
                    for (r = 0; r < e.tailCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.tailCards[r], t.uint32(34).fork()).ldelim();
                if (null != e.holeCards && e.holeCards.length)
                    for (r = 0; r < e.holeCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.holeCards[r], t.uint32(42).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.PlaceCardOverResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        case 2:
                            o.headCards && o.headCards.length || (o.headCards = []), o.headCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 3:
                            o.middleCards && o.middleCards.length || (o.middleCards = []), o.middleCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 4:
                            o.tailCards && o.tailCards.length || (o.tailCards = []), o.tailCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 5:
                            o.holeCards && o.holeCards.length || (o.holeCards = []), o.holeCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                if (null != e.headCards && e.hasOwnProperty("headCards")) {
                    if (!Array.isArray(e.headCards)) return "headCards: array expected";
                    for (var t = 0; t < e.headCards.length; ++t)
                        if (r = y.jackfruit_proto.CardItem.verify(e.headCards[t])) return "headCards." + r
                }
                if (null != e.middleCards && e.hasOwnProperty("middleCards")) {
                    if (!Array.isArray(e.middleCards)) return "middleCards: array expected";
                    for (t = 0; t < e.middleCards.length; ++t)
                        if (r = y.jackfruit_proto.CardItem.verify(e.middleCards[t])) return "middleCards." + r
                }
                if (null != e.tailCards && e.hasOwnProperty("tailCards")) {
                    if (!Array.isArray(e.tailCards)) return "tailCards: array expected";
                    for (t = 0; t < e.tailCards.length; ++t)
                        if (r = y.jackfruit_proto.CardItem.verify(e.tailCards[t])) return "tailCards." + r
                }
                if (null != e.holeCards && e.hasOwnProperty("holeCards")) {
                    if (!Array.isArray(e.holeCards)) return "holeCards: array expected";
                    for (t = 0; t < e.holeCards.length; ++t) {
                        var r;
                        if (r = y.jackfruit_proto.CardItem.verify(e.holeCards[t])) return "holeCards." + r
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.PlaceCardOverResp) return e;
                var t = new y.jackfruit_proto.PlaceCardOverResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                if (e.headCards) {
                    if (!Array.isArray(e.headCards)) throw TypeError(".jackfruit_proto.PlaceCardOverResp.headCards: array expected");
                    t.headCards = [];
                    for (var r = 0; r < e.headCards.length; ++r) {
                        if ("object" != typeof e.headCards[r]) throw TypeError(".jackfruit_proto.PlaceCardOverResp.headCards: object expected");
                        t.headCards[r] = y.jackfruit_proto.CardItem.fromObject(e.headCards[r])
                    }
                }
                if (e.middleCards) {
                    if (!Array.isArray(e.middleCards)) throw TypeError(".jackfruit_proto.PlaceCardOverResp.middleCards: array expected");
                    for (t.middleCards = [], r = 0; r < e.middleCards.length; ++r) {
                        if ("object" != typeof e.middleCards[r]) throw TypeError(".jackfruit_proto.PlaceCardOverResp.middleCards: object expected");
                        t.middleCards[r] = y.jackfruit_proto.CardItem.fromObject(e.middleCards[r])
                    }
                }
                if (e.tailCards) {
                    if (!Array.isArray(e.tailCards)) throw TypeError(".jackfruit_proto.PlaceCardOverResp.tailCards: array expected");
                    for (t.tailCards = [], r = 0; r < e.tailCards.length; ++r) {
                        if ("object" != typeof e.tailCards[r]) throw TypeError(".jackfruit_proto.PlaceCardOverResp.tailCards: object expected");
                        t.tailCards[r] = y.jackfruit_proto.CardItem.fromObject(e.tailCards[r])
                    }
                }
                if (e.holeCards) {
                    if (!Array.isArray(e.holeCards)) throw TypeError(".jackfruit_proto.PlaceCardOverResp.holeCards: array expected");
                    for (t.holeCards = [], r = 0; r < e.holeCards.length; ++r) {
                        if ("object" != typeof e.holeCards[r]) throw TypeError(".jackfruit_proto.PlaceCardOverResp.holeCards: object expected");
                        t.holeCards[r] = y.jackfruit_proto.CardItem.fromObject(e.holeCards[r])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.headCards = [], r.middleCards = [], r.tailCards = [], r.holeCards = []), t.defaults && (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), e.headCards && e.headCards.length) {
                    r.headCards = [];
                    for (var o = 0; o < e.headCards.length; ++o) r.headCards[o] = y.jackfruit_proto.CardItem.toObject(e.headCards[o], t)
                }
                if (e.middleCards && e.middleCards.length)
                    for (r.middleCards = [], o = 0; o < e.middleCards.length; ++o) r.middleCards[o] = y.jackfruit_proto.CardItem.toObject(e.middleCards[o], t);
                if (e.tailCards && e.tailCards.length)
                    for (r.tailCards = [], o = 0; o < e.tailCards.length; ++o) r.tailCards[o] = y.jackfruit_proto.CardItem.toObject(e.tailCards[o], t);
                if (e.holeCards && e.holeCards.length)
                    for (r.holeCards = [], o = 0; o < e.holeCards.length; ++o) r.holeCards[o] = y.jackfruit_proto.CardItem.toObject(e.holeCards[o], t);
                return r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.PlaceCardOverResp"
            }, e
        }(), l.PlaceCardOverNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.seatId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.seatId && Object.hasOwnProperty.call(e, "seatId") && t.uint32(8).int32(e.seatId), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.PlaceCardOverNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.seatId = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.seatId && e.hasOwnProperty("seatId") && !f.isInteger(e.seatId) ? "seatId: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.PlaceCardOverNotify) return e;
                var t = new y.jackfruit_proto.PlaceCardOverNotify;
                return null != e.seatId && (t.seatId = 0 | e.seatId), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.seatId = 0), null != e.seatId && e.hasOwnProperty("seatId") && (r.seatId = e.seatId), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.PlaceCardOverNotify"
            }, e
        }(), l.StandUpReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.StandUpReq; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomId = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId) ? "roomId: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.StandUpReq) return e;
                var t = new y.jackfruit_proto.StandUpReq;
                return null != e.roomId && (t.roomId = 0 | e.roomId), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.roomId = 0), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.StandUpReq"
            }, e
        }(), l.StandUpResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(16).int32(e.code), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.StandUpResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 2:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.StandUpResp) return e;
                var t = new y.jackfruit_proto.StandUpResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.StandUpResp"
            }, e
        }(), l.StandUpNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomId = 0, e.prototype.playerId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), null != e.playerId && Object.hasOwnProperty.call(e, "playerId") && t.uint32(16).uint32(e.playerId), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.StandUpNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomId = e.int32();
                            break;
                        case 2:
                            o.playerId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId) ? "roomId: integer expected" : null != e.playerId && e.hasOwnProperty("playerId") && !f.isInteger(e.playerId) ? "playerId: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.StandUpNotify) return e;
                var t = new y.jackfruit_proto.StandUpNotify;
                return null != e.roomId && (t.roomId = 0 | e.roomId), null != e.playerId && (t.playerId = e.playerId >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.roomId = 0, r.playerId = 0), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), null != e.playerId && e.hasOwnProperty("playerId") && (r.playerId = e.playerId), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.StandUpNotify"
            }, e
        }(), l.GameRecordReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.GameRecordReq; e.pos < r;) {
                    var n = e.uint32();
                    e.skipType(7 & n)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof y.jackfruit_proto.GameRecordReq ? e : new y.jackfruit_proto.GameRecordReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.GameRecordReq"
            }, e
        }(), l.GameRecordResp = function() {
            function e(e) {
                if (this.gameRecords = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.prototype.gameRecords = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.gameRecords && e.gameRecords.length)
                    for (var r = 0; r < e.gameRecords.length; ++r) y.jackfruit_proto.GameRecord.encode(e.gameRecords[r], t.uint32(10).fork()).ldelim();
                return null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(16).int32(e.code), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.GameRecordResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 2:
                            o.code = e.int32();
                            break;
                        case 1:
                            o.gameRecords && o.gameRecords.length || (o.gameRecords = []), o.gameRecords.push(y.jackfruit_proto.GameRecord.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                if (null != e.gameRecords && e.hasOwnProperty("gameRecords")) {
                    if (!Array.isArray(e.gameRecords)) return "gameRecords: array expected";
                    for (var t = 0; t < e.gameRecords.length; ++t) {
                        var r = y.jackfruit_proto.GameRecord.verify(e.gameRecords[t]);
                        if (r) return "gameRecords." + r
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.GameRecordResp) return e;
                var t = new y.jackfruit_proto.GameRecordResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                if (e.gameRecords) {
                    if (!Array.isArray(e.gameRecords)) throw TypeError(".jackfruit_proto.GameRecordResp.gameRecords: array expected");
                    t.gameRecords = [];
                    for (var r = 0; r < e.gameRecords.length; ++r) {
                        if ("object" != typeof e.gameRecords[r]) throw TypeError(".jackfruit_proto.GameRecordResp.gameRecords: object expected");
                        t.gameRecords[r] = y.jackfruit_proto.GameRecord.fromObject(e.gameRecords[r])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.gameRecords = []), t.defaults && (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0), e.gameRecords && e.gameRecords.length) {
                    r.gameRecords = [];
                    for (var o = 0; o < e.gameRecords.length; ++o) r.gameRecords[o] = y.jackfruit_proto.GameRecord.toObject(e.gameRecords[o], t)
                }
                return null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.GameRecordResp"
            }, e
        }(), l.GameRecord = function() {
            function e(e) {
                if (this.playerSettle = [], this.pubCards = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.playerSettle = f.emptyArray, e.prototype.pubCards = f.emptyArray, e.prototype.gameUuid = "", e.prototype.recordTime = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.playerSettle && e.playerSettle.length)
                    for (var r = 0; r < e.playerSettle.length; ++r) y.jackfruit_proto.PlayerSettle.encode(e.playerSettle[r], t.uint32(10).fork()).ldelim();
                if (null != e.pubCards && e.pubCards.length)
                    for (r = 0; r < e.pubCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.pubCards[r], t.uint32(18).fork()).ldelim();
                return null != e.gameUuid && Object.hasOwnProperty.call(e, "gameUuid") && t.uint32(26).string(e.gameUuid), null != e.recordTime && Object.hasOwnProperty.call(e, "recordTime") && t.uint32(32).int64(e.recordTime), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.GameRecord; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.playerSettle && o.playerSettle.length || (o.playerSettle = []), o.playerSettle.push(y.jackfruit_proto.PlayerSettle.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.pubCards && o.pubCards.length || (o.pubCards = []), o.pubCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 3:
                            o.gameUuid = e.string();
                            break;
                        case 4:
                            o.recordTime = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.playerSettle && e.hasOwnProperty("playerSettle")) {
                    if (!Array.isArray(e.playerSettle)) return "playerSettle: array expected";
                    for (var t = 0; t < e.playerSettle.length; ++t)
                        if (r = y.jackfruit_proto.PlayerSettle.verify(e.playerSettle[t])) return "playerSettle." + r
                }
                if (null != e.pubCards && e.hasOwnProperty("pubCards")) {
                    if (!Array.isArray(e.pubCards)) return "pubCards: array expected";
                    for (t = 0; t < e.pubCards.length; ++t) {
                        var r;
                        if (r = y.jackfruit_proto.CardItem.verify(e.pubCards[t])) return "pubCards." + r
                    }
                }
                return null != e.gameUuid && e.hasOwnProperty("gameUuid") && !f.isString(e.gameUuid) ? "gameUuid: string expected" : null != e.recordTime && e.hasOwnProperty("recordTime") && !(f.isInteger(e.recordTime) || e.recordTime && f.isInteger(e.recordTime.low) && f.isInteger(e.recordTime.high)) ? "recordTime: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.GameRecord) return e;
                var t = new y.jackfruit_proto.GameRecord;
                if (e.playerSettle) {
                    if (!Array.isArray(e.playerSettle)) throw TypeError(".jackfruit_proto.GameRecord.playerSettle: array expected");
                    t.playerSettle = [];
                    for (var r = 0; r < e.playerSettle.length; ++r) {
                        if ("object" != typeof e.playerSettle[r]) throw TypeError(".jackfruit_proto.GameRecord.playerSettle: object expected");
                        t.playerSettle[r] = y.jackfruit_proto.PlayerSettle.fromObject(e.playerSettle[r])
                    }
                }
                if (e.pubCards) {
                    if (!Array.isArray(e.pubCards)) throw TypeError(".jackfruit_proto.GameRecord.pubCards: array expected");
                    for (t.pubCards = [], r = 0; r < e.pubCards.length; ++r) {
                        if ("object" != typeof e.pubCards[r]) throw TypeError(".jackfruit_proto.GameRecord.pubCards: object expected");
                        t.pubCards[r] = y.jackfruit_proto.CardItem.fromObject(e.pubCards[r])
                    }
                }
                return null != e.gameUuid && (t.gameUuid = String(e.gameUuid)), null != e.recordTime && (f.Long ? (t.recordTime = f.Long.fromValue(e.recordTime)).unsigned = !1 : "string" == typeof e.recordTime ? t.recordTime = parseInt(e.recordTime, 10) : "number" == typeof e.recordTime ? t.recordTime = e.recordTime : "object" == typeof e.recordTime && (t.recordTime = new f.LongBits(e.recordTime.low >>> 0, e.recordTime.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.playerSettle = [], r.pubCards = []), t.defaults)
                    if (r.gameUuid = "", f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.recordTime = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.recordTime = t.longs === String ? "0" : 0;
                if (e.playerSettle && e.playerSettle.length) {
                    r.playerSettle = [];
                    for (var n = 0; n < e.playerSettle.length; ++n) r.playerSettle[n] = y.jackfruit_proto.PlayerSettle.toObject(e.playerSettle[n], t)
                }
                if (e.pubCards && e.pubCards.length)
                    for (r.pubCards = [], n = 0; n < e.pubCards.length; ++n) r.pubCards[n] = y.jackfruit_proto.CardItem.toObject(e.pubCards[n], t);
                return null != e.gameUuid && e.hasOwnProperty("gameUuid") && (r.gameUuid = e.gameUuid), null != e.recordTime && e.hasOwnProperty("recordTime") && ("number" == typeof e.recordTime ? r.recordTime = t.longs === String ? String(e.recordTime) : e.recordTime : r.recordTime = t.longs === String ? f.Long.prototype.toString.call(e.recordTime) : t.longs === Number ? new f.LongBits(e.recordTime.low >>> 0, e.recordTime.high >>> 0).toNumber() : e.recordTime), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.GameRecord"
            }, e
        }(), l.ActionDelayReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.ActionDelayReq; e.pos < r;) {
                    var n = e.uint32();
                    e.skipType(7 & n)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof y.jackfruit_proto.ActionDelayReq ? e : new y.jackfruit_proto.ActionDelayReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.ActionDelayReq"
            }, e
        }(), l.ActionDelayResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.prototype.actionDelayCountsFee = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.actionDelayCountsFee && Object.hasOwnProperty.call(e, "actionDelayCountsFee") && t.uint32(16).int64(e.actionDelayCountsFee), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.ActionDelayResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        case 2:
                            o.actionDelayCountsFee = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                return null != e.actionDelayCountsFee && e.hasOwnProperty("actionDelayCountsFee") && !(f.isInteger(e.actionDelayCountsFee) || e.actionDelayCountsFee && f.isInteger(e.actionDelayCountsFee.low) && f.isInteger(e.actionDelayCountsFee.high)) ? "actionDelayCountsFee: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.ActionDelayResp) return e;
                var t = new y.jackfruit_proto.ActionDelayResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                return null != e.actionDelayCountsFee && (f.Long ? (t.actionDelayCountsFee = f.Long.fromValue(e.actionDelayCountsFee)).unsigned = !1 : "string" == typeof e.actionDelayCountsFee ? t.actionDelayCountsFee = parseInt(e.actionDelayCountsFee, 10) : "number" == typeof e.actionDelayCountsFee ? t.actionDelayCountsFee = e.actionDelayCountsFee : "object" == typeof e.actionDelayCountsFee && (t.actionDelayCountsFee = new f.LongBits(e.actionDelayCountsFee.low >>> 0, e.actionDelayCountsFee.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults)
                    if (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0, f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.actionDelayCountsFee = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.actionDelayCountsFee = t.longs === String ? "0" : 0;
                return null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), null != e.actionDelayCountsFee && e.hasOwnProperty("actionDelayCountsFee") && ("number" == typeof e.actionDelayCountsFee ? r.actionDelayCountsFee = t.longs === String ? String(e.actionDelayCountsFee) : e.actionDelayCountsFee : r.actionDelayCountsFee = t.longs === String ? f.Long.prototype.toString.call(e.actionDelayCountsFee) : t.longs === Number ? new f.LongBits(e.actionDelayCountsFee.low >>> 0, e.actionDelayCountsFee.high >>> 0).toNumber() : e.actionDelayCountsFee), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.ActionDelayResp"
            }, e
        }(), l.ActionDelayNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.playerId = 0, e.prototype.leftSeconds = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.nextStateStamp = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.playerId && Object.hasOwnProperty.call(e, "playerId") && t.uint32(8).uint32(e.playerId), null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(16).int64(e.leftSeconds), null != e.nextStateStamp && Object.hasOwnProperty.call(e, "nextStateStamp") && t.uint32(24).int64(e.nextStateStamp), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.ActionDelayNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.playerId = e.uint32();
                            break;
                        case 2:
                            o.leftSeconds = e.int64();
                            break;
                        case 3:
                            o.nextStateStamp = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.playerId && e.hasOwnProperty("playerId") && !f.isInteger(e.playerId) ? "playerId: integer expected" : null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(f.isInteger(e.leftSeconds) || e.leftSeconds && f.isInteger(e.leftSeconds.low) && f.isInteger(e.leftSeconds.high)) ? "leftSeconds: integer|Long expected" : null != e.nextStateStamp && e.hasOwnProperty("nextStateStamp") && !(f.isInteger(e.nextStateStamp) || e.nextStateStamp && f.isInteger(e.nextStateStamp.low) && f.isInteger(e.nextStateStamp.high)) ? "nextStateStamp: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.ActionDelayNotify) return e;
                var t = new y.jackfruit_proto.ActionDelayNotify;
                return null != e.playerId && (t.playerId = e.playerId >>> 0), null != e.leftSeconds && (f.Long ? (t.leftSeconds = f.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new f.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), null != e.nextStateStamp && (f.Long ? (t.nextStateStamp = f.Long.fromValue(e.nextStateStamp)).unsigned = !1 : "string" == typeof e.nextStateStamp ? t.nextStateStamp = parseInt(e.nextStateStamp, 10) : "number" == typeof e.nextStateStamp ? t.nextStateStamp = e.nextStateStamp : "object" == typeof e.nextStateStamp && (t.nextStateStamp = new f.LongBits(e.nextStateStamp.low >>> 0, e.nextStateStamp.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults) {
                    if (r.playerId = 0, f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.leftSeconds = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.leftSeconds = t.longs === String ? "0" : 0;
                    f.Long ? (o = new f.Long(0, 0, !1), r.nextStateStamp = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.nextStateStamp = t.longs === String ? "0" : 0
                }
                return null != e.playerId && e.hasOwnProperty("playerId") && (r.playerId = e.playerId), null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? r.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : r.leftSeconds = t.longs === String ? f.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new f.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), null != e.nextStateStamp && e.hasOwnProperty("nextStateStamp") && ("number" == typeof e.nextStateStamp ? r.nextStateStamp = t.longs === String ? String(e.nextStateStamp) : e.nextStateStamp : r.nextStateStamp = t.longs === String ? f.Long.prototype.toString.call(e.nextStateStamp) : t.longs === Number ? new f.LongBits(e.nextStateStamp.low >>> 0, e.nextStateStamp.high >>> 0).toNumber() : e.nextStateStamp), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.ActionDelayNotify"
            }, e
        }(), l.GameWillStartNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.leftSeconds = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.nextStateStamp = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(8).int64(e.leftSeconds), null != e.nextStateStamp && Object.hasOwnProperty.call(e, "nextStateStamp") && t.uint32(16).int64(e.nextStateStamp), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.GameWillStartNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.leftSeconds = e.int64();
                            break;
                        case 2:
                            o.nextStateStamp = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(f.isInteger(e.leftSeconds) || e.leftSeconds && f.isInteger(e.leftSeconds.low) && f.isInteger(e.leftSeconds.high)) ? "leftSeconds: integer|Long expected" : null != e.nextStateStamp && e.hasOwnProperty("nextStateStamp") && !(f.isInteger(e.nextStateStamp) || e.nextStateStamp && f.isInteger(e.nextStateStamp.low) && f.isInteger(e.nextStateStamp.high)) ? "nextStateStamp: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.GameWillStartNotify) return e;
                var t = new y.jackfruit_proto.GameWillStartNotify;
                return null != e.leftSeconds && (f.Long ? (t.leftSeconds = f.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new f.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), null != e.nextStateStamp && (f.Long ? (t.nextStateStamp = f.Long.fromValue(e.nextStateStamp)).unsigned = !1 : "string" == typeof e.nextStateStamp ? t.nextStateStamp = parseInt(e.nextStateStamp, 10) : "number" == typeof e.nextStateStamp ? t.nextStateStamp = e.nextStateStamp : "object" == typeof e.nextStateStamp && (t.nextStateStamp = new f.LongBits(e.nextStateStamp.low >>> 0, e.nextStateStamp.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults) {
                    if (f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.leftSeconds = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.leftSeconds = t.longs === String ? "0" : 0;
                    f.Long ? (o = new f.Long(0, 0, !1), r.nextStateStamp = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.nextStateStamp = t.longs === String ? "0" : 0
                }
                return null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? r.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : r.leftSeconds = t.longs === String ? f.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new f.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), null != e.nextStateStamp && e.hasOwnProperty("nextStateStamp") && ("number" == typeof e.nextStateStamp ? r.nextStateStamp = t.longs === String ? String(e.nextStateStamp) : e.nextStateStamp : r.nextStateStamp = t.longs === String ? f.Long.prototype.toString.call(e.nextStateStamp) : t.longs === Number ? new f.LongBits(e.nextStateStamp.low >>> 0, e.nextStateStamp.high >>> 0).toNumber() : e.nextStateStamp), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.GameWillStartNotify"
            }, e
        }(), l.DealNotify = function() {
            function e(e) {
                if (this.seatList = [], this.holdCards = [], this.publicCards = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomId = 0, e.prototype.seatList = f.emptyArray, e.prototype.holdCards = f.emptyArray, e.prototype.publicCards = f.emptyArray, e.prototype.leftSeconds = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.nextStateStamp = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.actionDelayCountsFee = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), null != e.seatList && e.seatList.length) {
                    t.uint32(18).fork();
                    for (var r = 0; r < e.seatList.length; ++r) t.int32(e.seatList[r]);
                    t.ldelim()
                }
                if (null != e.holdCards && e.holdCards.length)
                    for (r = 0; r < e.holdCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.holdCards[r], t.uint32(26).fork()).ldelim();
                if (null != e.publicCards && e.publicCards.length)
                    for (r = 0; r < e.publicCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.publicCards[r], t.uint32(34).fork()).ldelim();
                return null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(40).int64(e.leftSeconds), null != e.nextStateStamp && Object.hasOwnProperty.call(e, "nextStateStamp") && t.uint32(48).int64(e.nextStateStamp), null != e.actionDelayCountsFee && Object.hasOwnProperty.call(e, "actionDelayCountsFee") && t.uint32(56).int64(e.actionDelayCountsFee), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.DealNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomId = e.int32();
                            break;
                        case 2:
                            if (o.seatList && o.seatList.length || (o.seatList = []), 2 == (7 & n))
                                for (var a = e.uint32() + e.pos; e.pos < a;) o.seatList.push(e.int32());
                            else o.seatList.push(e.int32());
                            break;
                        case 3:
                            o.holdCards && o.holdCards.length || (o.holdCards = []), o.holdCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 4:
                            o.publicCards && o.publicCards.length || (o.publicCards = []), o.publicCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 5:
                            o.leftSeconds = e.int64();
                            break;
                        case 6:
                            o.nextStateStamp = e.int64();
                            break;
                        case 7:
                            o.actionDelayCountsFee = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId)) return "roomId: integer expected";
                if (null != e.seatList && e.hasOwnProperty("seatList")) {
                    if (!Array.isArray(e.seatList)) return "seatList: array expected";
                    for (var t = 0; t < e.seatList.length; ++t)
                        if (!f.isInteger(e.seatList[t])) return "seatList: integer[] expected"
                }
                if (null != e.holdCards && e.hasOwnProperty("holdCards")) {
                    if (!Array.isArray(e.holdCards)) return "holdCards: array expected";
                    for (t = 0; t < e.holdCards.length; ++t)
                        if (r = y.jackfruit_proto.CardItem.verify(e.holdCards[t])) return "holdCards." + r
                }
                if (null != e.publicCards && e.hasOwnProperty("publicCards")) {
                    if (!Array.isArray(e.publicCards)) return "publicCards: array expected";
                    for (t = 0; t < e.publicCards.length; ++t) {
                        var r;
                        if (r = y.jackfruit_proto.CardItem.verify(e.publicCards[t])) return "publicCards." + r
                    }
                }
                return null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(f.isInteger(e.leftSeconds) || e.leftSeconds && f.isInteger(e.leftSeconds.low) && f.isInteger(e.leftSeconds.high)) ? "leftSeconds: integer|Long expected" : null != e.nextStateStamp && e.hasOwnProperty("nextStateStamp") && !(f.isInteger(e.nextStateStamp) || e.nextStateStamp && f.isInteger(e.nextStateStamp.low) && f.isInteger(e.nextStateStamp.high)) ? "nextStateStamp: integer|Long expected" : null != e.actionDelayCountsFee && e.hasOwnProperty("actionDelayCountsFee") && !(f.isInteger(e.actionDelayCountsFee) || e.actionDelayCountsFee && f.isInteger(e.actionDelayCountsFee.low) && f.isInteger(e.actionDelayCountsFee.high)) ? "actionDelayCountsFee: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.DealNotify) return e;
                var t = new y.jackfruit_proto.DealNotify;
                if (null != e.roomId && (t.roomId = 0 | e.roomId), e.seatList) {
                    if (!Array.isArray(e.seatList)) throw TypeError(".jackfruit_proto.DealNotify.seatList: array expected");
                    t.seatList = [];
                    for (var r = 0; r < e.seatList.length; ++r) t.seatList[r] = 0 | e.seatList[r]
                }
                if (e.holdCards) {
                    if (!Array.isArray(e.holdCards)) throw TypeError(".jackfruit_proto.DealNotify.holdCards: array expected");
                    for (t.holdCards = [], r = 0; r < e.holdCards.length; ++r) {
                        if ("object" != typeof e.holdCards[r]) throw TypeError(".jackfruit_proto.DealNotify.holdCards: object expected");
                        t.holdCards[r] = y.jackfruit_proto.CardItem.fromObject(e.holdCards[r])
                    }
                }
                if (e.publicCards) {
                    if (!Array.isArray(e.publicCards)) throw TypeError(".jackfruit_proto.DealNotify.publicCards: array expected");
                    for (t.publicCards = [], r = 0; r < e.publicCards.length; ++r) {
                        if ("object" != typeof e.publicCards[r]) throw TypeError(".jackfruit_proto.DealNotify.publicCards: object expected");
                        t.publicCards[r] = y.jackfruit_proto.CardItem.fromObject(e.publicCards[r])
                    }
                }
                return null != e.leftSeconds && (f.Long ? (t.leftSeconds = f.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new f.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), null != e.nextStateStamp && (f.Long ? (t.nextStateStamp = f.Long.fromValue(e.nextStateStamp)).unsigned = !1 : "string" == typeof e.nextStateStamp ? t.nextStateStamp = parseInt(e.nextStateStamp, 10) : "number" == typeof e.nextStateStamp ? t.nextStateStamp = e.nextStateStamp : "object" == typeof e.nextStateStamp && (t.nextStateStamp = new f.LongBits(e.nextStateStamp.low >>> 0, e.nextStateStamp.high >>> 0).toNumber())), null != e.actionDelayCountsFee && (f.Long ? (t.actionDelayCountsFee = f.Long.fromValue(e.actionDelayCountsFee)).unsigned = !1 : "string" == typeof e.actionDelayCountsFee ? t.actionDelayCountsFee = parseInt(e.actionDelayCountsFee, 10) : "number" == typeof e.actionDelayCountsFee ? t.actionDelayCountsFee = e.actionDelayCountsFee : "object" == typeof e.actionDelayCountsFee && (t.actionDelayCountsFee = new f.LongBits(e.actionDelayCountsFee.low >>> 0, e.actionDelayCountsFee.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.seatList = [], r.holdCards = [], r.publicCards = []), t.defaults) {
                    if (r.roomId = 0, f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.leftSeconds = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.leftSeconds = t.longs === String ? "0" : 0;
                    f.Long ? (o = new f.Long(0, 0, !1), r.nextStateStamp = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.nextStateStamp = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.actionDelayCountsFee = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.actionDelayCountsFee = t.longs === String ? "0" : 0
                }
                if (null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), e.seatList && e.seatList.length) {
                    r.seatList = [];
                    for (var n = 0; n < e.seatList.length; ++n) r.seatList[n] = e.seatList[n]
                }
                if (e.holdCards && e.holdCards.length)
                    for (r.holdCards = [], n = 0; n < e.holdCards.length; ++n) r.holdCards[n] = y.jackfruit_proto.CardItem.toObject(e.holdCards[n], t);
                if (e.publicCards && e.publicCards.length)
                    for (r.publicCards = [], n = 0; n < e.publicCards.length; ++n) r.publicCards[n] = y.jackfruit_proto.CardItem.toObject(e.publicCards[n], t);
                return null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? r.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : r.leftSeconds = t.longs === String ? f.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new f.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), null != e.nextStateStamp && e.hasOwnProperty("nextStateStamp") && ("number" == typeof e.nextStateStamp ? r.nextStateStamp = t.longs === String ? String(e.nextStateStamp) : e.nextStateStamp : r.nextStateStamp = t.longs === String ? f.Long.prototype.toString.call(e.nextStateStamp) : t.longs === Number ? new f.LongBits(e.nextStateStamp.low >>> 0, e.nextStateStamp.high >>> 0).toNumber() : e.nextStateStamp), null != e.actionDelayCountsFee && e.hasOwnProperty("actionDelayCountsFee") && ("number" == typeof e.actionDelayCountsFee ? r.actionDelayCountsFee = t.longs === String ? String(e.actionDelayCountsFee) : e.actionDelayCountsFee : r.actionDelayCountsFee = t.longs === String ? f.Long.prototype.toString.call(e.actionDelayCountsFee) : t.longs === Number ? new f.LongBits(e.actionDelayCountsFee.low >>> 0, e.actionDelayCountsFee.high >>> 0).toNumber() : e.actionDelayCountsFee), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.DealNotify"
            }, e
        }(), l.StartPlaceCardsNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.leftSeconds = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.nextStateStamp = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(8).int64(e.leftSeconds), null != e.nextStateStamp && Object.hasOwnProperty.call(e, "nextStateStamp") && t.uint32(16).int64(e.nextStateStamp), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.StartPlaceCardsNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.leftSeconds = e.int64();
                            break;
                        case 2:
                            o.nextStateStamp = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(f.isInteger(e.leftSeconds) || e.leftSeconds && f.isInteger(e.leftSeconds.low) && f.isInteger(e.leftSeconds.high)) ? "leftSeconds: integer|Long expected" : null != e.nextStateStamp && e.hasOwnProperty("nextStateStamp") && !(f.isInteger(e.nextStateStamp) || e.nextStateStamp && f.isInteger(e.nextStateStamp.low) && f.isInteger(e.nextStateStamp.high)) ? "nextStateStamp: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.StartPlaceCardsNotify) return e;
                var t = new y.jackfruit_proto.StartPlaceCardsNotify;
                return null != e.leftSeconds && (f.Long ? (t.leftSeconds = f.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new f.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), null != e.nextStateStamp && (f.Long ? (t.nextStateStamp = f.Long.fromValue(e.nextStateStamp)).unsigned = !1 : "string" == typeof e.nextStateStamp ? t.nextStateStamp = parseInt(e.nextStateStamp, 10) : "number" == typeof e.nextStateStamp ? t.nextStateStamp = e.nextStateStamp : "object" == typeof e.nextStateStamp && (t.nextStateStamp = new f.LongBits(e.nextStateStamp.low >>> 0, e.nextStateStamp.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults) {
                    if (f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.leftSeconds = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.leftSeconds = t.longs === String ? "0" : 0;
                    f.Long ? (o = new f.Long(0, 0, !1), r.nextStateStamp = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.nextStateStamp = t.longs === String ? "0" : 0
                }
                return null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? r.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : r.leftSeconds = t.longs === String ? f.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new f.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), null != e.nextStateStamp && e.hasOwnProperty("nextStateStamp") && ("number" == typeof e.nextStateStamp ? r.nextStateStamp = t.longs === String ? String(e.nextStateStamp) : e.nextStateStamp : r.nextStateStamp = t.longs === String ? f.Long.prototype.toString.call(e.nextStateStamp) : t.longs === Number ? new f.LongBits(e.nextStateStamp.low >>> 0, e.nextStateStamp.high >>> 0).toNumber() : e.nextStateStamp), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.StartPlaceCardsNotify"
            }, e
        }(), l.CommunityCardsNotify = function() {
            function e(e) {
                if (this.publicCards = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomId = 0, e.prototype.publicCards = f.emptyArray, e.prototype.roundState = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), null != e.publicCards && e.publicCards.length)
                    for (var r = 0; r < e.publicCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.publicCards[r], t.uint32(18).fork()).ldelim();
                return null != e.roundState && Object.hasOwnProperty.call(e, "roundState") && t.uint32(24).int32(e.roundState), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.CommunityCardsNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomId = e.int32();
                            break;
                        case 2:
                            o.publicCards && o.publicCards.length || (o.publicCards = []), o.publicCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 3:
                            o.roundState = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId)) return "roomId: integer expected";
                if (null != e.publicCards && e.hasOwnProperty("publicCards")) {
                    if (!Array.isArray(e.publicCards)) return "publicCards: array expected";
                    for (var t = 0; t < e.publicCards.length; ++t) {
                        var r = y.jackfruit_proto.CardItem.verify(e.publicCards[t]);
                        if (r) return "publicCards." + r
                    }
                }
                if (null != e.roundState && e.hasOwnProperty("roundState")) switch (e.roundState) {
                    default:
                        return "roundState: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 18:
                    case 20:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.CommunityCardsNotify) return e;
                var t = new y.jackfruit_proto.CommunityCardsNotify;
                if (null != e.roomId && (t.roomId = 0 | e.roomId), e.publicCards) {
                    if (!Array.isArray(e.publicCards)) throw TypeError(".jackfruit_proto.CommunityCardsNotify.publicCards: array expected");
                    t.publicCards = [];
                    for (var r = 0; r < e.publicCards.length; ++r) {
                        if ("object" != typeof e.publicCards[r]) throw TypeError(".jackfruit_proto.CommunityCardsNotify.publicCards: object expected");
                        t.publicCards[r] = y.jackfruit_proto.CardItem.fromObject(e.publicCards[r])
                    }
                }
                switch (e.roundState) {
                    default:
                        if ("number" == typeof e.roundState) {
                            t.roundState = e.roundState;
                            break
                        }
                        break;
                    case "RoomStates_DUMMY":
                    case 0:
                        t.roundState = 0;
                        break;
                    case "Free":
                    case 1:
                        t.roundState = 1;
                        break;
                    case "Ready":
                    case 2:
                        t.roundState = 2;
                        break;
                    case "Wait":
                    case 11:
                        t.roundState = 11;
                        break;
                    case "Deal":
                    case 12:
                        t.roundState = 12;
                        break;
                    case "PlaceCards":
                    case 13:
                        t.roundState = 13;
                        break;
                    case "Turn":
                    case 14:
                        t.roundState = 14;
                        break;
                    case "River":
                    case 18:
                        t.roundState = 18;
                        break;
                    case "Settlement":
                    case 20:
                        t.roundState = 20
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.publicCards = []), t.defaults && (r.roomId = 0, r.roundState = t.enums === String ? "RoomStates_DUMMY" : 0), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), e.publicCards && e.publicCards.length) {
                    r.publicCards = [];
                    for (var o = 0; o < e.publicCards.length; ++o) r.publicCards[o] = y.jackfruit_proto.CardItem.toObject(e.publicCards[o], t)
                }
                return null != e.roundState && e.hasOwnProperty("roundState") && (r.roundState = t.enums === String ? void 0 === y.jackfruit_proto.RoundState[e.roundState] ? e.roundState : y.jackfruit_proto.RoundState[e.roundState] : e.roundState), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.CommunityCardsNotify"
            }, e
        }(), l.GameRoundEndNotify = function() {
            function e(e) {
                if (this.playerSettle = [], this.pubCards = [], this.jackpotAwards = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.playerSettle = f.emptyArray, e.prototype.stopWorld = 0, e.prototype.pubCards = f.emptyArray, e.prototype.leftSeconds = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.nextStateStamp = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.settleType = 0, e.prototype.onlyWinAmount = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.jackpotLeftAmount = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.jackpotAwards = f.emptyArray, e.prototype.game_uuid_js = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.playerSettle && e.playerSettle.length)
                    for (var r = 0; r < e.playerSettle.length; ++r) y.jackfruit_proto.PlayerSettle.encode(e.playerSettle[r], t.uint32(10).fork()).ldelim();
                if (null != e.stopWorld && Object.hasOwnProperty.call(e, "stopWorld") && t.uint32(16).int32(e.stopWorld), null != e.pubCards && e.pubCards.length)
                    for (r = 0; r < e.pubCards.length; ++r) y.jackfruit_proto.CardItem.encode(e.pubCards[r], t.uint32(26).fork()).ldelim();
                if (null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(32).int64(e.leftSeconds), null != e.nextStateStamp && Object.hasOwnProperty.call(e, "nextStateStamp") && t.uint32(40).int64(e.nextStateStamp), null != e.settleType && Object.hasOwnProperty.call(e, "settleType") && t.uint32(48).int32(e.settleType), null != e.onlyWinAmount && Object.hasOwnProperty.call(e, "onlyWinAmount") && t.uint32(56).int64(e.onlyWinAmount), null != e.jackpotLeftAmount && Object.hasOwnProperty.call(e, "jackpotLeftAmount") && t.uint32(64).int64(e.jackpotLeftAmount), null != e.jackpotAwards && e.jackpotAwards.length)
                    for (r = 0; r < e.jackpotAwards.length; ++r) y.jackfruit_proto.JackpotAwardInfo.encode(e.jackpotAwards[r], t.uint32(74).fork()).ldelim();
                return null != e.game_uuid_js && Object.hasOwnProperty.call(e, "game_uuid_js") && t.uint32(82).string(e.game_uuid_js), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.GameRoundEndNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.playerSettle && o.playerSettle.length || (o.playerSettle = []), o.playerSettle.push(y.jackfruit_proto.PlayerSettle.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.stopWorld = e.int32();
                            break;
                        case 3:
                            o.pubCards && o.pubCards.length || (o.pubCards = []), o.pubCards.push(y.jackfruit_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 4:
                            o.leftSeconds = e.int64();
                            break;
                        case 5:
                            o.nextStateStamp = e.int64();
                            break;
                        case 6:
                            o.settleType = e.int32();
                            break;
                        case 7:
                            o.onlyWinAmount = e.int64();
                            break;
                        case 8:
                            o.jackpotLeftAmount = e.int64();
                            break;
                        case 9:
                            o.jackpotAwards && o.jackpotAwards.length || (o.jackpotAwards = []), o.jackpotAwards.push(y.jackfruit_proto.JackpotAwardInfo.decode(e, e.uint32()));
                            break;
                        case 10:
                            o.game_uuid_js = e.string();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.playerSettle && e.hasOwnProperty("playerSettle")) {
                    if (!Array.isArray(e.playerSettle)) return "playerSettle: array expected";
                    for (var t = 0; t < e.playerSettle.length; ++t)
                        if (r = y.jackfruit_proto.PlayerSettle.verify(e.playerSettle[t])) return "playerSettle." + r
                }
                if (null != e.stopWorld && e.hasOwnProperty("stopWorld") && !f.isInteger(e.stopWorld)) return "stopWorld: integer expected";
                if (null != e.pubCards && e.hasOwnProperty("pubCards")) {
                    if (!Array.isArray(e.pubCards)) return "pubCards: array expected";
                    for (t = 0; t < e.pubCards.length; ++t)
                        if (r = y.jackfruit_proto.CardItem.verify(e.pubCards[t])) return "pubCards." + r
                }
                if (null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(f.isInteger(e.leftSeconds) || e.leftSeconds && f.isInteger(e.leftSeconds.low) && f.isInteger(e.leftSeconds.high))) return "leftSeconds: integer|Long expected";
                if (null != e.nextStateStamp && e.hasOwnProperty("nextStateStamp") && !(f.isInteger(e.nextStateStamp) || e.nextStateStamp && f.isInteger(e.nextStateStamp.low) && f.isInteger(e.nextStateStamp.high))) return "nextStateStamp: integer|Long expected";
                if (null != e.settleType && e.hasOwnProperty("settleType") && !f.isInteger(e.settleType)) return "settleType: integer expected";
                if (null != e.onlyWinAmount && e.hasOwnProperty("onlyWinAmount") && !(f.isInteger(e.onlyWinAmount) || e.onlyWinAmount && f.isInteger(e.onlyWinAmount.low) && f.isInteger(e.onlyWinAmount.high))) return "onlyWinAmount: integer|Long expected";
                if (null != e.jackpotLeftAmount && e.hasOwnProperty("jackpotLeftAmount") && !(f.isInteger(e.jackpotLeftAmount) || e.jackpotLeftAmount && f.isInteger(e.jackpotLeftAmount.low) && f.isInteger(e.jackpotLeftAmount.high))) return "jackpotLeftAmount: integer|Long expected";
                if (null != e.jackpotAwards && e.hasOwnProperty("jackpotAwards")) {
                    if (!Array.isArray(e.jackpotAwards)) return "jackpotAwards: array expected";
                    for (t = 0; t < e.jackpotAwards.length; ++t) {
                        var r;
                        if (r = y.jackfruit_proto.JackpotAwardInfo.verify(e.jackpotAwards[t])) return "jackpotAwards." + r
                    }
                }
                return null != e.game_uuid_js && e.hasOwnProperty("game_uuid_js") && !f.isString(e.game_uuid_js) ? "game_uuid_js: string expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.GameRoundEndNotify) return e;
                var t = new y.jackfruit_proto.GameRoundEndNotify;
                if (e.playerSettle) {
                    if (!Array.isArray(e.playerSettle)) throw TypeError(".jackfruit_proto.GameRoundEndNotify.playerSettle: array expected");
                    t.playerSettle = [];
                    for (var r = 0; r < e.playerSettle.length; ++r) {
                        if ("object" != typeof e.playerSettle[r]) throw TypeError(".jackfruit_proto.GameRoundEndNotify.playerSettle: object expected");
                        t.playerSettle[r] = y.jackfruit_proto.PlayerSettle.fromObject(e.playerSettle[r])
                    }
                }
                if (null != e.stopWorld && (t.stopWorld = 0 | e.stopWorld), e.pubCards) {
                    if (!Array.isArray(e.pubCards)) throw TypeError(".jackfruit_proto.GameRoundEndNotify.pubCards: array expected");
                    for (t.pubCards = [], r = 0; r < e.pubCards.length; ++r) {
                        if ("object" != typeof e.pubCards[r]) throw TypeError(".jackfruit_proto.GameRoundEndNotify.pubCards: object expected");
                        t.pubCards[r] = y.jackfruit_proto.CardItem.fromObject(e.pubCards[r])
                    }
                }
                if (null != e.leftSeconds && (f.Long ? (t.leftSeconds = f.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new f.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), null != e.nextStateStamp && (f.Long ? (t.nextStateStamp = f.Long.fromValue(e.nextStateStamp)).unsigned = !1 : "string" == typeof e.nextStateStamp ? t.nextStateStamp = parseInt(e.nextStateStamp, 10) : "number" == typeof e.nextStateStamp ? t.nextStateStamp = e.nextStateStamp : "object" == typeof e.nextStateStamp && (t.nextStateStamp = new f.LongBits(e.nextStateStamp.low >>> 0, e.nextStateStamp.high >>> 0).toNumber())), null != e.settleType && (t.settleType = 0 | e.settleType), null != e.onlyWinAmount && (f.Long ? (t.onlyWinAmount = f.Long.fromValue(e.onlyWinAmount)).unsigned = !1 : "string" == typeof e.onlyWinAmount ? t.onlyWinAmount = parseInt(e.onlyWinAmount, 10) : "number" == typeof e.onlyWinAmount ? t.onlyWinAmount = e.onlyWinAmount : "object" == typeof e.onlyWinAmount && (t.onlyWinAmount = new f.LongBits(e.onlyWinAmount.low >>> 0, e.onlyWinAmount.high >>> 0).toNumber())), null != e.jackpotLeftAmount && (f.Long ? (t.jackpotLeftAmount = f.Long.fromValue(e.jackpotLeftAmount)).unsigned = !1 : "string" == typeof e.jackpotLeftAmount ? t.jackpotLeftAmount = parseInt(e.jackpotLeftAmount, 10) : "number" == typeof e.jackpotLeftAmount ? t.jackpotLeftAmount = e.jackpotLeftAmount : "object" == typeof e.jackpotLeftAmount && (t.jackpotLeftAmount = new f.LongBits(e.jackpotLeftAmount.low >>> 0, e.jackpotLeftAmount.high >>> 0).toNumber())), e.jackpotAwards) {
                    if (!Array.isArray(e.jackpotAwards)) throw TypeError(".jackfruit_proto.GameRoundEndNotify.jackpotAwards: array expected");
                    for (t.jackpotAwards = [], r = 0; r < e.jackpotAwards.length; ++r) {
                        if ("object" != typeof e.jackpotAwards[r]) throw TypeError(".jackfruit_proto.GameRoundEndNotify.jackpotAwards: object expected");
                        t.jackpotAwards[r] = y.jackfruit_proto.JackpotAwardInfo.fromObject(e.jackpotAwards[r])
                    }
                }
                return null != e.game_uuid_js && (t.game_uuid_js = String(e.game_uuid_js)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.playerSettle = [], r.pubCards = [], r.jackpotAwards = []), t.defaults) {
                    if (r.stopWorld = 0, f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.leftSeconds = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.leftSeconds = t.longs === String ? "0" : 0;
                    f.Long ? (o = new f.Long(0, 0, !1), r.nextStateStamp = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.nextStateStamp = t.longs === String ? "0" : 0, r.settleType = 0, f.Long ? (o = new f.Long(0, 0, !1), r.onlyWinAmount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.onlyWinAmount = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.jackpotLeftAmount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.jackpotLeftAmount = t.longs === String ? "0" : 0, r.game_uuid_js = ""
                }
                if (e.playerSettle && e.playerSettle.length) {
                    r.playerSettle = [];
                    for (var n = 0; n < e.playerSettle.length; ++n) r.playerSettle[n] = y.jackfruit_proto.PlayerSettle.toObject(e.playerSettle[n], t)
                }
                if (null != e.stopWorld && e.hasOwnProperty("stopWorld") && (r.stopWorld = e.stopWorld), e.pubCards && e.pubCards.length)
                    for (r.pubCards = [], n = 0; n < e.pubCards.length; ++n) r.pubCards[n] = y.jackfruit_proto.CardItem.toObject(e.pubCards[n], t);
                if (null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? r.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : r.leftSeconds = t.longs === String ? f.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new f.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), null != e.nextStateStamp && e.hasOwnProperty("nextStateStamp") && ("number" == typeof e.nextStateStamp ? r.nextStateStamp = t.longs === String ? String(e.nextStateStamp) : e.nextStateStamp : r.nextStateStamp = t.longs === String ? f.Long.prototype.toString.call(e.nextStateStamp) : t.longs === Number ? new f.LongBits(e.nextStateStamp.low >>> 0, e.nextStateStamp.high >>> 0).toNumber() : e.nextStateStamp), null != e.settleType && e.hasOwnProperty("settleType") && (r.settleType = e.settleType), null != e.onlyWinAmount && e.hasOwnProperty("onlyWinAmount") && ("number" == typeof e.onlyWinAmount ? r.onlyWinAmount = t.longs === String ? String(e.onlyWinAmount) : e.onlyWinAmount : r.onlyWinAmount = t.longs === String ? f.Long.prototype.toString.call(e.onlyWinAmount) : t.longs === Number ? new f.LongBits(e.onlyWinAmount.low >>> 0, e.onlyWinAmount.high >>> 0).toNumber() : e.onlyWinAmount), null != e.jackpotLeftAmount && e.hasOwnProperty("jackpotLeftAmount") && ("number" == typeof e.jackpotLeftAmount ? r.jackpotLeftAmount = t.longs === String ? String(e.jackpotLeftAmount) : e.jackpotLeftAmount : r.jackpotLeftAmount = t.longs === String ? f.Long.prototype.toString.call(e.jackpotLeftAmount) : t.longs === Number ? new f.LongBits(e.jackpotLeftAmount.low >>> 0, e.jackpotLeftAmount.high >>> 0).toNumber() : e.jackpotLeftAmount), e.jackpotAwards && e.jackpotAwards.length)
                    for (r.jackpotAwards = [], n = 0; n < e.jackpotAwards.length; ++n) r.jackpotAwards[n] = y.jackfruit_proto.JackpotAwardInfo.toObject(e.jackpotAwards[n], t);
                return null != e.game_uuid_js && e.hasOwnProperty("game_uuid_js") && (r.game_uuid_js = e.game_uuid_js), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.GameRoundEndNotify"
            }, e
        }(), l.ConfirmToContinueNotify = function() {
            function e(e) {
                if (this.playerId = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.leftSeconds = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.nextStateStamp = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.playerId = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(8).int64(e.leftSeconds), null != e.nextStateStamp && Object.hasOwnProperty.call(e, "nextStateStamp") && t.uint32(16).int64(e.nextStateStamp), null != e.playerId && e.playerId.length) {
                    t.uint32(26).fork();
                    for (var r = 0; r < e.playerId.length; ++r) t.uint32(e.playerId[r]);
                    t.ldelim()
                }
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.ConfirmToContinueNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.leftSeconds = e.int64();
                            break;
                        case 2:
                            o.nextStateStamp = e.int64();
                            break;
                        case 3:
                            if (o.playerId && o.playerId.length || (o.playerId = []), 2 == (7 & n))
                                for (var a = e.uint32() + e.pos; e.pos < a;) o.playerId.push(e.uint32());
                            else o.playerId.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(f.isInteger(e.leftSeconds) || e.leftSeconds && f.isInteger(e.leftSeconds.low) && f.isInteger(e.leftSeconds.high))) return "leftSeconds: integer|Long expected";
                if (null != e.nextStateStamp && e.hasOwnProperty("nextStateStamp") && !(f.isInteger(e.nextStateStamp) || e.nextStateStamp && f.isInteger(e.nextStateStamp.low) && f.isInteger(e.nextStateStamp.high))) return "nextStateStamp: integer|Long expected";
                if (null != e.playerId && e.hasOwnProperty("playerId")) {
                    if (!Array.isArray(e.playerId)) return "playerId: array expected";
                    for (var t = 0; t < e.playerId.length; ++t)
                        if (!f.isInteger(e.playerId[t])) return "playerId: integer[] expected"
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.ConfirmToContinueNotify) return e;
                var t = new y.jackfruit_proto.ConfirmToContinueNotify;
                if (null != e.leftSeconds && (f.Long ? (t.leftSeconds = f.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new f.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), null != e.nextStateStamp && (f.Long ? (t.nextStateStamp = f.Long.fromValue(e.nextStateStamp)).unsigned = !1 : "string" == typeof e.nextStateStamp ? t.nextStateStamp = parseInt(e.nextStateStamp, 10) : "number" == typeof e.nextStateStamp ? t.nextStateStamp = e.nextStateStamp : "object" == typeof e.nextStateStamp && (t.nextStateStamp = new f.LongBits(e.nextStateStamp.low >>> 0, e.nextStateStamp.high >>> 0).toNumber())), e.playerId) {
                    if (!Array.isArray(e.playerId)) throw TypeError(".jackfruit_proto.ConfirmToContinueNotify.playerId: array expected");
                    t.playerId = [];
                    for (var r = 0; r < e.playerId.length; ++r) t.playerId[r] = e.playerId[r] >>> 0
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.playerId = []), t.defaults) {
                    if (f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.leftSeconds = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.leftSeconds = t.longs === String ? "0" : 0;
                    f.Long ? (o = new f.Long(0, 0, !1), r.nextStateStamp = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.nextStateStamp = t.longs === String ? "0" : 0
                }
                if (null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? r.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : r.leftSeconds = t.longs === String ? f.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new f.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), null != e.nextStateStamp && e.hasOwnProperty("nextStateStamp") && ("number" == typeof e.nextStateStamp ? r.nextStateStamp = t.longs === String ? String(e.nextStateStamp) : e.nextStateStamp : r.nextStateStamp = t.longs === String ? f.Long.prototype.toString.call(e.nextStateStamp) : t.longs === Number ? new f.LongBits(e.nextStateStamp.low >>> 0, e.nextStateStamp.high >>> 0).toNumber() : e.nextStateStamp), e.playerId && e.playerId.length) {
                    r.playerId = [];
                    for (var n = 0; n < e.playerId.length; ++n) r.playerId[n] = e.playerId[n]
                }
                return r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.ConfirmToContinueNotify"
            }, e
        }(), l.CardItem = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.number = 0, e.prototype.suit = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.number && Object.hasOwnProperty.call(e, "number") && t.uint32(8).int32(e.number), null != e.suit && Object.hasOwnProperty.call(e, "suit") && t.uint32(16).int32(e.suit), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.CardItem; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.number = e.int32();
                            break;
                        case 2:
                            o.suit = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.number && e.hasOwnProperty("number") && !f.isInteger(e.number) ? "number: integer expected" : null != e.suit && e.hasOwnProperty("suit") && !f.isInteger(e.suit) ? "suit: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.CardItem) return e;
                var t = new y.jackfruit_proto.CardItem;
                return null != e.number && (t.number = 0 | e.number), null != e.suit && (t.suit = 0 | e.suit), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.number = 0, r.suit = 0), null != e.number && e.hasOwnProperty("number") && (r.number = e.number), null != e.suit && e.hasOwnProperty("suit") && (r.suit = e.suit), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.CardItem"
            }, e
        }(), l.PlaceResult = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.score = 0, e.prototype.result = 0, e.prototype.level = 0, e.prototype.zoneMultiple = 0, e.prototype.levelScore = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.score && Object.hasOwnProperty.call(e, "score") && t.uint32(16).int32(e.score), null != e.result && Object.hasOwnProperty.call(e, "result") && t.uint32(24).int32(e.result), null != e.level && Object.hasOwnProperty.call(e, "level") && t.uint32(32).int32(e.level), null != e.zoneMultiple && Object.hasOwnProperty.call(e, "zoneMultiple") && t.uint32(40).int32(e.zoneMultiple), null != e.levelScore && Object.hasOwnProperty.call(e, "levelScore") && t.uint32(48).int32(e.levelScore), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.PlaceResult; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 2:
                            o.score = e.int32();
                            break;
                        case 3:
                            o.result = e.int32();
                            break;
                        case 4:
                            o.level = e.int32();
                            break;
                        case 5:
                            o.zoneMultiple = e.int32();
                            break;
                        case 6:
                            o.levelScore = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.score && e.hasOwnProperty("score") && !f.isInteger(e.score)) return "score: integer expected";
                if (null != e.result && e.hasOwnProperty("result") && !f.isInteger(e.result)) return "result: integer expected";
                if (null != e.level && e.hasOwnProperty("level")) switch (e.level) {
                    default:
                        return "level: enum value expected";
                    case 0:
                    case 10:
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 5:
                    case 4:
                    case 3:
                    case 2:
                    case 1:
                }
                return null != e.zoneMultiple && e.hasOwnProperty("zoneMultiple") && !f.isInteger(e.zoneMultiple) ? "zoneMultiple: integer expected" : null != e.levelScore && e.hasOwnProperty("levelScore") && !f.isInteger(e.levelScore) ? "levelScore: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.PlaceResult) return e;
                var t = new y.jackfruit_proto.PlaceResult;
                switch (null != e.score && (t.score = 0 | e.score), null != e.result && (t.result = 0 | e.result), e.level) {
                    default:
                        if ("number" == typeof e.level) {
                            t.level = e.level;
                            break
                        }
                        break;
                    case "Dump":
                    case 0:
                        t.level = 0;
                        break;
                    case "RoyalFlush":
                    case 10:
                        t.level = 10;
                        break;
                    case "StraightFlush":
                    case 9:
                        t.level = 9;
                        break;
                    case "FourOfAKind":
                    case 8:
                        t.level = 8;
                        break;
                    case "FullHouse":
                    case 7:
                        t.level = 7;
                        break;
                    case "Flush":
                    case 6:
                        t.level = 6;
                        break;
                    case "StraightI":
                    case 5:
                        t.level = 5;
                        break;
                    case "ThreeOfAKind":
                    case 4:
                        t.level = 4;
                        break;
                    case "TwoPair":
                    case 3:
                        t.level = 3;
                        break;
                    case "OnePair":
                    case 2:
                        t.level = 2;
                        break;
                    case "HighCard":
                    case 1:
                        t.level = 1
                }
                return null != e.zoneMultiple && (t.zoneMultiple = 0 | e.zoneMultiple), null != e.levelScore && (t.levelScore = 0 | e.levelScore), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.score = 0, r.result = 0, r.level = t.enums === String ? "Dump" : 0, r.zoneMultiple = 0, r.levelScore = 0), null != e.score && e.hasOwnProperty("score") && (r.score = e.score), null != e.result && e.hasOwnProperty("result") && (r.result = e.result), null != e.level && e.hasOwnProperty("level") && (r.level = t.enums === String ? void 0 === y.jackfruit_proto.CardLevel[e.level] ? e.level : y.jackfruit_proto.CardLevel[e.level] : e.level), null != e.zoneMultiple && e.hasOwnProperty("zoneMultiple") && (r.zoneMultiple = e.zoneMultiple), null != e.levelScore && e.hasOwnProperty("levelScore") && (r.levelScore = e.levelScore), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.PlaceResult"
            }, e
        }(), l.PlayerSettle = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.player = null, e.prototype.headResult = null, e.prototype.middleResult = null, e.prototype.tailResult = null, e.prototype.repeatWining = 0, e.prototype.winAllAward = 0, e.prototype.totalScore = 0, e.prototype.winAmount = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.winScore = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.player && Object.hasOwnProperty.call(e, "player") && y.jackfruit_proto.PlayerInfo.encode(e.player, t.uint32(10).fork()).ldelim(), null != e.headResult && Object.hasOwnProperty.call(e, "headResult") && y.jackfruit_proto.PlaceResult.encode(e.headResult, t.uint32(50).fork()).ldelim(), null != e.middleResult && Object.hasOwnProperty.call(e, "middleResult") && y.jackfruit_proto.PlaceResult.encode(e.middleResult, t.uint32(58).fork()).ldelim(), null != e.tailResult && Object.hasOwnProperty.call(e, "tailResult") && y.jackfruit_proto.PlaceResult.encode(e.tailResult, t.uint32(66).fork()).ldelim(), null != e.repeatWining && Object.hasOwnProperty.call(e, "repeatWining") && t.uint32(72).int32(e.repeatWining), null != e.winAllAward && Object.hasOwnProperty.call(e, "winAllAward") && t.uint32(80).uint32(e.winAllAward), null != e.totalScore && Object.hasOwnProperty.call(e, "totalScore") && t.uint32(120).int32(e.totalScore), null != e.winAmount && Object.hasOwnProperty.call(e, "winAmount") && t.uint32(128).int64(e.winAmount), null != e.winScore && Object.hasOwnProperty.call(e, "winScore") && t.uint32(144).int64(e.winScore), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.PlayerSettle; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.player = y.jackfruit_proto.PlayerInfo.decode(e, e.uint32());
                            break;
                        case 6:
                            o.headResult = y.jackfruit_proto.PlaceResult.decode(e, e.uint32());
                            break;
                        case 7:
                            o.middleResult = y.jackfruit_proto.PlaceResult.decode(e, e.uint32());
                            break;
                        case 8:
                            o.tailResult = y.jackfruit_proto.PlaceResult.decode(e, e.uint32());
                            break;
                        case 9:
                            o.repeatWining = e.int32();
                            break;
                        case 10:
                            o.winAllAward = e.uint32();
                            break;
                        case 15:
                            o.totalScore = e.int32();
                            break;
                        case 16:
                            o.winAmount = e.int64();
                            break;
                        case 18:
                            o.winScore = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.player && e.hasOwnProperty("player") && (t = y.jackfruit_proto.PlayerInfo.verify(e.player)) ? "player." + t : null != e.headResult && e.hasOwnProperty("headResult") && (t = y.jackfruit_proto.PlaceResult.verify(e.headResult)) ? "headResult." + t : null != e.middleResult && e.hasOwnProperty("middleResult") && (t = y.jackfruit_proto.PlaceResult.verify(e.middleResult)) ? "middleResult." + t : null != e.tailResult && e.hasOwnProperty("tailResult") && (t = y.jackfruit_proto.PlaceResult.verify(e.tailResult)) ? "tailResult." + t : null != e.repeatWining && e.hasOwnProperty("repeatWining") && !f.isInteger(e.repeatWining) ? "repeatWining: integer expected" : null != e.winAllAward && e.hasOwnProperty("winAllAward") && !f.isInteger(e.winAllAward) ? "winAllAward: integer expected" : null != e.totalScore && e.hasOwnProperty("totalScore") && !f.isInteger(e.totalScore) ? "totalScore: integer expected" : null != e.winAmount && e.hasOwnProperty("winAmount") && !(f.isInteger(e.winAmount) || e.winAmount && f.isInteger(e.winAmount.low) && f.isInteger(e.winAmount.high)) ? "winAmount: integer|Long expected" : null != e.winScore && e.hasOwnProperty("winScore") && !(f.isInteger(e.winScore) || e.winScore && f.isInteger(e.winScore.low) && f.isInteger(e.winScore.high)) ? "winScore: integer|Long expected" : null;
                var t
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.PlayerSettle) return e;
                var t = new y.jackfruit_proto.PlayerSettle;
                if (null != e.player) {
                    if ("object" != typeof e.player) throw TypeError(".jackfruit_proto.PlayerSettle.player: object expected");
                    t.player = y.jackfruit_proto.PlayerInfo.fromObject(e.player)
                }
                if (null != e.headResult) {
                    if ("object" != typeof e.headResult) throw TypeError(".jackfruit_proto.PlayerSettle.headResult: object expected");
                    t.headResult = y.jackfruit_proto.PlaceResult.fromObject(e.headResult)
                }
                if (null != e.middleResult) {
                    if ("object" != typeof e.middleResult) throw TypeError(".jackfruit_proto.PlayerSettle.middleResult: object expected");
                    t.middleResult = y.jackfruit_proto.PlaceResult.fromObject(e.middleResult)
                }
                if (null != e.tailResult) {
                    if ("object" != typeof e.tailResult) throw TypeError(".jackfruit_proto.PlayerSettle.tailResult: object expected");
                    t.tailResult = y.jackfruit_proto.PlaceResult.fromObject(e.tailResult)
                }
                return null != e.repeatWining && (t.repeatWining = 0 | e.repeatWining), null != e.winAllAward && (t.winAllAward = e.winAllAward >>> 0), null != e.totalScore && (t.totalScore = 0 | e.totalScore), null != e.winAmount && (f.Long ? (t.winAmount = f.Long.fromValue(e.winAmount)).unsigned = !1 : "string" == typeof e.winAmount ? t.winAmount = parseInt(e.winAmount, 10) : "number" == typeof e.winAmount ? t.winAmount = e.winAmount : "object" == typeof e.winAmount && (t.winAmount = new f.LongBits(e.winAmount.low >>> 0, e.winAmount.high >>> 0).toNumber())), null != e.winScore && (f.Long ? (t.winScore = f.Long.fromValue(e.winScore)).unsigned = !1 : "string" == typeof e.winScore ? t.winScore = parseInt(e.winScore, 10) : "number" == typeof e.winScore ? t.winScore = e.winScore : "object" == typeof e.winScore && (t.winScore = new f.LongBits(e.winScore.low >>> 0, e.winScore.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults) {
                    if (r.player = null, r.headResult = null, r.middleResult = null, r.tailResult = null, r.repeatWining = 0, r.winAllAward = 0, r.totalScore = 0, f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.winAmount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.winAmount = t.longs === String ? "0" : 0;
                    f.Long ? (o = new f.Long(0, 0, !1), r.winScore = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.winScore = t.longs === String ? "0" : 0
                }
                return null != e.player && e.hasOwnProperty("player") && (r.player = y.jackfruit_proto.PlayerInfo.toObject(e.player, t)), null != e.headResult && e.hasOwnProperty("headResult") && (r.headResult = y.jackfruit_proto.PlaceResult.toObject(e.headResult, t)), null != e.middleResult && e.hasOwnProperty("middleResult") && (r.middleResult = y.jackfruit_proto.PlaceResult.toObject(e.middleResult, t)), null != e.tailResult && e.hasOwnProperty("tailResult") && (r.tailResult = y.jackfruit_proto.PlaceResult.toObject(e.tailResult, t)), null != e.repeatWining && e.hasOwnProperty("repeatWining") && (r.repeatWining = e.repeatWining), null != e.winAllAward && e.hasOwnProperty("winAllAward") && (r.winAllAward = e.winAllAward), null != e.totalScore && e.hasOwnProperty("totalScore") && (r.totalScore = e.totalScore), null != e.winAmount && e.hasOwnProperty("winAmount") && ("number" == typeof e.winAmount ? r.winAmount = t.longs === String ? String(e.winAmount) : e.winAmount : r.winAmount = t.longs === String ? f.Long.prototype.toString.call(e.winAmount) : t.longs === Number ? new f.LongBits(e.winAmount.low >>> 0, e.winAmount.high >>> 0).toNumber() : e.winAmount), null != e.winScore && e.hasOwnProperty("winScore") && ("number" == typeof e.winScore ? r.winScore = t.longs === String ? String(e.winScore) : e.winScore : r.winScore = t.longs === String ? f.Long.prototype.toString.call(e.winScore) : t.longs === Number ? new f.LongBits(e.winScore.low >>> 0, e.winScore.high >>> 0).toNumber() : e.winScore), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.PlayerSettle"
            }, e
        }(), l.ChatType = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Enum_Emoji"] = 0, t[e[1] = "Enum_Voice"] = 1, t[e[2] = "Enum_Emoji_Interactive"] = 2, t[e[3] = "Enum_Barrage"] = 3, t
        }(), l.SendChatReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomId = 0, e.prototype.cType = 0, e.prototype.content = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), null != e.cType && Object.hasOwnProperty.call(e, "cType") && t.uint32(16).int32(e.cType), null != e.content && Object.hasOwnProperty.call(e, "content") && t.uint32(26).string(e.content), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.SendChatReq; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomId = e.int32();
                            break;
                        case 2:
                            o.cType = e.int32();
                            break;
                        case 3:
                            o.content = e.string();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId)) return "roomId: integer expected";
                if (null != e.cType && e.hasOwnProperty("cType")) switch (e.cType) {
                    default:
                        return "cType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                }
                return null != e.content && e.hasOwnProperty("content") && !f.isString(e.content) ? "content: string expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.SendChatReq) return e;
                var t = new y.jackfruit_proto.SendChatReq;
                switch (null != e.roomId && (t.roomId = 0 | e.roomId), e.cType) {
                    default:
                        if ("number" == typeof e.cType) {
                            t.cType = e.cType;
                            break
                        }
                        break;
                    case "Enum_Emoji":
                    case 0:
                        t.cType = 0;
                        break;
                    case "Enum_Voice":
                    case 1:
                        t.cType = 1;
                        break;
                    case "Enum_Emoji_Interactive":
                    case 2:
                        t.cType = 2;
                        break;
                    case "Enum_Barrage":
                    case 3:
                        t.cType = 3
                }
                return null != e.content && (t.content = String(e.content)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.roomId = 0, r.cType = t.enums === String ? "Enum_Emoji" : 0, r.content = ""), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), null != e.cType && e.hasOwnProperty("cType") && (r.cType = t.enums === String ? void 0 === y.jackfruit_proto.ChatType[e.cType] ? e.cType : y.jackfruit_proto.ChatType[e.cType] : e.cType), null != e.content && e.hasOwnProperty("content") && (r.content = e.content), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.SendChatReq"
            }, e
        }(), l.SendChatResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.prototype.nextFee = null, e.prototype.barrageLeftSeconds = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.nextFee && Object.hasOwnProperty.call(e, "nextFee") && y.jackfruit_proto.PayMoneyItems.encode(e.nextFee, t.uint32(18).fork()).ldelim(), null != e.barrageLeftSeconds && Object.hasOwnProperty.call(e, "barrageLeftSeconds") && t.uint32(24).int64(e.barrageLeftSeconds), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.SendChatResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        case 2:
                            o.nextFee = y.jackfruit_proto.PayMoneyItems.decode(e, e.uint32());
                            break;
                        case 3:
                            o.barrageLeftSeconds = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                if (null != e.nextFee && e.hasOwnProperty("nextFee")) {
                    var t = y.jackfruit_proto.PayMoneyItems.verify(e.nextFee);
                    if (t) return "nextFee." + t
                }
                return null != e.barrageLeftSeconds && e.hasOwnProperty("barrageLeftSeconds") && !(f.isInteger(e.barrageLeftSeconds) || e.barrageLeftSeconds && f.isInteger(e.barrageLeftSeconds.low) && f.isInteger(e.barrageLeftSeconds.high)) ? "barrageLeftSeconds: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.SendChatResp) return e;
                var t = new y.jackfruit_proto.SendChatResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                if (null != e.nextFee) {
                    if ("object" != typeof e.nextFee) throw TypeError(".jackfruit_proto.SendChatResp.nextFee: object expected");
                    t.nextFee = y.jackfruit_proto.PayMoneyItems.fromObject(e.nextFee)
                }
                return null != e.barrageLeftSeconds && (f.Long ? (t.barrageLeftSeconds = f.Long.fromValue(e.barrageLeftSeconds)).unsigned = !1 : "string" == typeof e.barrageLeftSeconds ? t.barrageLeftSeconds = parseInt(e.barrageLeftSeconds, 10) : "number" == typeof e.barrageLeftSeconds ? t.barrageLeftSeconds = e.barrageLeftSeconds : "object" == typeof e.barrageLeftSeconds && (t.barrageLeftSeconds = new f.LongBits(e.barrageLeftSeconds.low >>> 0, e.barrageLeftSeconds.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults)
                    if (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0, r.nextFee = null, f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.barrageLeftSeconds = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.barrageLeftSeconds = t.longs === String ? "0" : 0;
                return null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), null != e.nextFee && e.hasOwnProperty("nextFee") && (r.nextFee = y.jackfruit_proto.PayMoneyItems.toObject(e.nextFee, t)), null != e.barrageLeftSeconds && e.hasOwnProperty("barrageLeftSeconds") && ("number" == typeof e.barrageLeftSeconds ? r.barrageLeftSeconds = t.longs === String ? String(e.barrageLeftSeconds) : e.barrageLeftSeconds : r.barrageLeftSeconds = t.longs === String ? f.Long.prototype.toString.call(e.barrageLeftSeconds) : t.longs === Number ? new f.LongBits(e.barrageLeftSeconds.low >>> 0, e.barrageLeftSeconds.high >>> 0).toNumber() : e.barrageLeftSeconds), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.SendChatResp"
            }, e
        }(), l.PayMoneyItems = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.emotionFee = 0, e.prototype.emotionFee2 = 0, e.prototype.magicEmojiFee = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.emotionFee && Object.hasOwnProperty.call(e, "emotionFee") && t.uint32(8).int32(e.emotionFee), null != e.emotionFee2 && Object.hasOwnProperty.call(e, "emotionFee2") && t.uint32(16).int32(e.emotionFee2), null != e.magicEmojiFee && Object.hasOwnProperty.call(e, "magicEmojiFee") && t.uint32(24).int32(e.magicEmojiFee), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.PayMoneyItems; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.emotionFee = e.int32();
                            break;
                        case 2:
                            o.emotionFee2 = e.int32();
                            break;
                        case 3:
                            o.magicEmojiFee = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.emotionFee && e.hasOwnProperty("emotionFee") && !f.isInteger(e.emotionFee) ? "emotionFee: integer expected" : null != e.emotionFee2 && e.hasOwnProperty("emotionFee2") && !f.isInteger(e.emotionFee2) ? "emotionFee2: integer expected" : null != e.magicEmojiFee && e.hasOwnProperty("magicEmojiFee") && !f.isInteger(e.magicEmojiFee) ? "magicEmojiFee: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.PayMoneyItems) return e;
                var t = new y.jackfruit_proto.PayMoneyItems;
                return null != e.emotionFee && (t.emotionFee = 0 | e.emotionFee), null != e.emotionFee2 && (t.emotionFee2 = 0 | e.emotionFee2), null != e.magicEmojiFee && (t.magicEmojiFee = 0 | e.magicEmojiFee), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.emotionFee = 0, r.emotionFee2 = 0, r.magicEmojiFee = 0), null != e.emotionFee && e.hasOwnProperty("emotionFee") && (r.emotionFee = e.emotionFee), null != e.emotionFee2 && e.hasOwnProperty("emotionFee2") && (r.emotionFee2 = e.emotionFee2), null != e.magicEmojiFee && e.hasOwnProperty("magicEmojiFee") && (r.magicEmojiFee = e.magicEmojiFee), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.PayMoneyItems"
            }, e
        }(), l.SendChatNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomId = 0, e.prototype.cType = 0, e.prototype.content = "", e.prototype.playerId = 0, e.prototype.seatId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), null != e.cType && Object.hasOwnProperty.call(e, "cType") && t.uint32(16).int32(e.cType), null != e.content && Object.hasOwnProperty.call(e, "content") && t.uint32(26).string(e.content), null != e.playerId && Object.hasOwnProperty.call(e, "playerId") && t.uint32(32).uint32(e.playerId), null != e.seatId && Object.hasOwnProperty.call(e, "seatId") && t.uint32(40).int32(e.seatId), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.SendChatNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomId = e.int32();
                            break;
                        case 2:
                            o.cType = e.int32();
                            break;
                        case 3:
                            o.content = e.string();
                            break;
                        case 4:
                            o.playerId = e.uint32();
                            break;
                        case 5:
                            o.seatId = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId)) return "roomId: integer expected";
                if (null != e.cType && e.hasOwnProperty("cType")) switch (e.cType) {
                    default:
                        return "cType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                }
                return null != e.content && e.hasOwnProperty("content") && !f.isString(e.content) ? "content: string expected" : null != e.playerId && e.hasOwnProperty("playerId") && !f.isInteger(e.playerId) ? "playerId: integer expected" : null != e.seatId && e.hasOwnProperty("seatId") && !f.isInteger(e.seatId) ? "seatId: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.SendChatNotify) return e;
                var t = new y.jackfruit_proto.SendChatNotify;
                switch (null != e.roomId && (t.roomId = 0 | e.roomId), e.cType) {
                    default:
                        if ("number" == typeof e.cType) {
                            t.cType = e.cType;
                            break
                        }
                        break;
                    case "Enum_Emoji":
                    case 0:
                        t.cType = 0;
                        break;
                    case "Enum_Voice":
                    case 1:
                        t.cType = 1;
                        break;
                    case "Enum_Emoji_Interactive":
                    case 2:
                        t.cType = 2;
                        break;
                    case "Enum_Barrage":
                    case 3:
                        t.cType = 3
                }
                return null != e.content && (t.content = String(e.content)), null != e.playerId && (t.playerId = e.playerId >>> 0), null != e.seatId && (t.seatId = 0 | e.seatId), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.roomId = 0, r.cType = t.enums === String ? "Enum_Emoji" : 0, r.content = "", r.playerId = 0, r.seatId = 0), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), null != e.cType && e.hasOwnProperty("cType") && (r.cType = t.enums === String ? void 0 === y.jackfruit_proto.ChatType[e.cType] ? e.cType : y.jackfruit_proto.ChatType[e.cType] : e.cType), null != e.content && e.hasOwnProperty("content") && (r.content = e.content), null != e.playerId && e.hasOwnProperty("playerId") && (r.playerId = e.playerId), null != e.seatId && e.hasOwnProperty("seatId") && (r.seatId = e.seatId), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.SendChatNotify"
            }, e
        }(), l.ReadyReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.ReadyReq; e.pos < r;) {
                    var n = e.uint32();
                    e.skipType(7 & n)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof y.jackfruit_proto.ReadyReq ? e : new y.jackfruit_proto.ReadyReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.ReadyReq"
            }, e
        }(), l.ReadyResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.ReadyResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.ReadyResp) return e;
                var t = new y.jackfruit_proto.ReadyResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.ReadyResp"
            }, e
        }(), l.ReadyNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.seatId = 0, e.prototype.playerId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.seatId && Object.hasOwnProperty.call(e, "seatId") && t.uint32(8).int32(e.seatId), null != e.playerId && Object.hasOwnProperty.call(e, "playerId") && t.uint32(16).uint32(e.playerId), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.ReadyNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.seatId = e.int32();
                            break;
                        case 2:
                            o.playerId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.seatId && e.hasOwnProperty("seatId") && !f.isInteger(e.seatId) ? "seatId: integer expected" : null != e.playerId && e.hasOwnProperty("playerId") && !f.isInteger(e.playerId) ? "playerId: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.ReadyNotify) return e;
                var t = new y.jackfruit_proto.ReadyNotify;
                return null != e.seatId && (t.seatId = 0 | e.seatId), null != e.playerId && (t.playerId = e.playerId >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.seatId = 0, r.playerId = 0), null != e.seatId && e.hasOwnProperty("seatId") && (r.seatId = e.seatId), null != e.playerId && e.hasOwnProperty("playerId") && (r.playerId = e.playerId), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.ReadyNotify"
            }, e
        }(), l.BuyInReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.amount = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.seatId = 0, e.prototype.afterSeat = !1, e.prototype.score = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(8).int64(e.amount), null != e.seatId && Object.hasOwnProperty.call(e, "seatId") && t.uint32(16).int32(e.seatId), null != e.afterSeat && Object.hasOwnProperty.call(e, "afterSeat") && t.uint32(24).bool(e.afterSeat), null != e.score && Object.hasOwnProperty.call(e, "score") && t.uint32(32).int64(e.score), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.BuyInReq; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.amount = e.int64();
                            break;
                        case 2:
                            o.seatId = e.int32();
                            break;
                        case 3:
                            o.afterSeat = e.bool();
                            break;
                        case 4:
                            o.score = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.amount && e.hasOwnProperty("amount") && !(f.isInteger(e.amount) || e.amount && f.isInteger(e.amount.low) && f.isInteger(e.amount.high)) ? "amount: integer|Long expected" : null != e.seatId && e.hasOwnProperty("seatId") && !f.isInteger(e.seatId) ? "seatId: integer expected" : null != e.afterSeat && e.hasOwnProperty("afterSeat") && "boolean" != typeof e.afterSeat ? "afterSeat: boolean expected" : null != e.score && e.hasOwnProperty("score") && !(f.isInteger(e.score) || e.score && f.isInteger(e.score.low) && f.isInteger(e.score.high)) ? "score: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.BuyInReq) return e;
                var t = new y.jackfruit_proto.BuyInReq;
                return null != e.amount && (f.Long ? (t.amount = f.Long.fromValue(e.amount)).unsigned = !1 : "string" == typeof e.amount ? t.amount = parseInt(e.amount, 10) : "number" == typeof e.amount ? t.amount = e.amount : "object" == typeof e.amount && (t.amount = new f.LongBits(e.amount.low >>> 0, e.amount.high >>> 0).toNumber())), null != e.seatId && (t.seatId = 0 | e.seatId), null != e.afterSeat && (t.afterSeat = Boolean(e.afterSeat)), null != e.score && (f.Long ? (t.score = f.Long.fromValue(e.score)).unsigned = !1 : "string" == typeof e.score ? t.score = parseInt(e.score, 10) : "number" == typeof e.score ? t.score = e.score : "object" == typeof e.score && (t.score = new f.LongBits(e.score.low >>> 0, e.score.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults) {
                    if (f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.amount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.amount = t.longs === String ? "0" : 0;
                    r.seatId = 0, r.afterSeat = !1, f.Long ? (o = new f.Long(0, 0, !1), r.score = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.score = t.longs === String ? "0" : 0
                }
                return null != e.amount && e.hasOwnProperty("amount") && ("number" == typeof e.amount ? r.amount = t.longs === String ? String(e.amount) : e.amount : r.amount = t.longs === String ? f.Long.prototype.toString.call(e.amount) : t.longs === Number ? new f.LongBits(e.amount.low >>> 0, e.amount.high >>> 0).toNumber() : e.amount), null != e.seatId && e.hasOwnProperty("seatId") && (r.seatId = e.seatId), null != e.afterSeat && e.hasOwnProperty("afterSeat") && (r.afterSeat = e.afterSeat), null != e.score && e.hasOwnProperty("score") && ("number" == typeof e.score ? r.score = t.longs === String ? String(e.score) : e.score : r.score = t.longs === String ? f.Long.prototype.toString.call(e.score) : t.longs === Number ? new f.LongBits(e.score.low >>> 0, e.score.high >>> 0).toNumber() : e.score), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.BuyInReq"
            }, e
        }(), l.BuyInResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.BuyInResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.BuyInResp) return e;
                var t = new y.jackfruit_proto.BuyInResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.BuyInResp"
            }, e
        }(), l.BuyInNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.seatId = 0, e.prototype.playerId = 0, e.prototype.playerName = "", e.prototype.buyInAmount = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.amount = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.isAuto = !1, e.prototype.roomId = 0, e.prototype.score = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.buyInScore = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.seatId && Object.hasOwnProperty.call(e, "seatId") && t.uint32(8).int32(e.seatId), null != e.playerId && Object.hasOwnProperty.call(e, "playerId") && t.uint32(16).uint32(e.playerId), null != e.playerName && Object.hasOwnProperty.call(e, "playerName") && t.uint32(26).string(e.playerName), null != e.buyInAmount && Object.hasOwnProperty.call(e, "buyInAmount") && t.uint32(32).int64(e.buyInAmount), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(40).int64(e.amount), null != e.isAuto && Object.hasOwnProperty.call(e, "isAuto") && t.uint32(48).bool(e.isAuto), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(56).int32(e.roomId), null != e.score && Object.hasOwnProperty.call(e, "score") && t.uint32(64).int64(e.score), null != e.buyInScore && Object.hasOwnProperty.call(e, "buyInScore") && t.uint32(72).int64(e.buyInScore), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.BuyInNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.seatId = e.int32();
                            break;
                        case 2:
                            o.playerId = e.uint32();
                            break;
                        case 3:
                            o.playerName = e.string();
                            break;
                        case 4:
                            o.buyInAmount = e.int64();
                            break;
                        case 5:
                            o.amount = e.int64();
                            break;
                        case 6:
                            o.isAuto = e.bool();
                            break;
                        case 7:
                            o.roomId = e.int32();
                            break;
                        case 8:
                            o.score = e.int64();
                            break;
                        case 9:
                            o.buyInScore = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.seatId && e.hasOwnProperty("seatId") && !f.isInteger(e.seatId) ? "seatId: integer expected" : null != e.playerId && e.hasOwnProperty("playerId") && !f.isInteger(e.playerId) ? "playerId: integer expected" : null != e.playerName && e.hasOwnProperty("playerName") && !f.isString(e.playerName) ? "playerName: string expected" : null != e.buyInAmount && e.hasOwnProperty("buyInAmount") && !(f.isInteger(e.buyInAmount) || e.buyInAmount && f.isInteger(e.buyInAmount.low) && f.isInteger(e.buyInAmount.high)) ? "buyInAmount: integer|Long expected" : null != e.amount && e.hasOwnProperty("amount") && !(f.isInteger(e.amount) || e.amount && f.isInteger(e.amount.low) && f.isInteger(e.amount.high)) ? "amount: integer|Long expected" : null != e.isAuto && e.hasOwnProperty("isAuto") && "boolean" != typeof e.isAuto ? "isAuto: boolean expected" : null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId) ? "roomId: integer expected" : null != e.score && e.hasOwnProperty("score") && !(f.isInteger(e.score) || e.score && f.isInteger(e.score.low) && f.isInteger(e.score.high)) ? "score: integer|Long expected" : null != e.buyInScore && e.hasOwnProperty("buyInScore") && !(f.isInteger(e.buyInScore) || e.buyInScore && f.isInteger(e.buyInScore.low) && f.isInteger(e.buyInScore.high)) ? "buyInScore: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.BuyInNotify) return e;
                var t = new y.jackfruit_proto.BuyInNotify;
                return null != e.seatId && (t.seatId = 0 | e.seatId), null != e.playerId && (t.playerId = e.playerId >>> 0), null != e.playerName && (t.playerName = String(e.playerName)), null != e.buyInAmount && (f.Long ? (t.buyInAmount = f.Long.fromValue(e.buyInAmount)).unsigned = !1 : "string" == typeof e.buyInAmount ? t.buyInAmount = parseInt(e.buyInAmount, 10) : "number" == typeof e.buyInAmount ? t.buyInAmount = e.buyInAmount : "object" == typeof e.buyInAmount && (t.buyInAmount = new f.LongBits(e.buyInAmount.low >>> 0, e.buyInAmount.high >>> 0).toNumber())), null != e.amount && (f.Long ? (t.amount = f.Long.fromValue(e.amount)).unsigned = !1 : "string" == typeof e.amount ? t.amount = parseInt(e.amount, 10) : "number" == typeof e.amount ? t.amount = e.amount : "object" == typeof e.amount && (t.amount = new f.LongBits(e.amount.low >>> 0, e.amount.high >>> 0).toNumber())), null != e.isAuto && (t.isAuto = Boolean(e.isAuto)), null != e.roomId && (t.roomId = 0 | e.roomId), null != e.score && (f.Long ? (t.score = f.Long.fromValue(e.score)).unsigned = !1 : "string" == typeof e.score ? t.score = parseInt(e.score, 10) : "number" == typeof e.score ? t.score = e.score : "object" == typeof e.score && (t.score = new f.LongBits(e.score.low >>> 0, e.score.high >>> 0).toNumber())), null != e.buyInScore && (f.Long ? (t.buyInScore = f.Long.fromValue(e.buyInScore)).unsigned = !1 : "string" == typeof e.buyInScore ? t.buyInScore = parseInt(e.buyInScore, 10) : "number" == typeof e.buyInScore ? t.buyInScore = e.buyInScore : "object" == typeof e.buyInScore && (t.buyInScore = new f.LongBits(e.buyInScore.low >>> 0, e.buyInScore.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults) {
                    if (r.seatId = 0, r.playerId = 0, r.playerName = "", f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.buyInAmount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.buyInAmount = t.longs === String ? "0" : 0;
                    f.Long ? (o = new f.Long(0, 0, !1), r.amount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.amount = t.longs === String ? "0" : 0, r.isAuto = !1, r.roomId = 0, f.Long ? (o = new f.Long(0, 0, !1), r.score = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.score = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.buyInScore = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.buyInScore = t.longs === String ? "0" : 0
                }
                return null != e.seatId && e.hasOwnProperty("seatId") && (r.seatId = e.seatId), null != e.playerId && e.hasOwnProperty("playerId") && (r.playerId = e.playerId), null != e.playerName && e.hasOwnProperty("playerName") && (r.playerName = e.playerName), null != e.buyInAmount && e.hasOwnProperty("buyInAmount") && ("number" == typeof e.buyInAmount ? r.buyInAmount = t.longs === String ? String(e.buyInAmount) : e.buyInAmount : r.buyInAmount = t.longs === String ? f.Long.prototype.toString.call(e.buyInAmount) : t.longs === Number ? new f.LongBits(e.buyInAmount.low >>> 0, e.buyInAmount.high >>> 0).toNumber() : e.buyInAmount), null != e.amount && e.hasOwnProperty("amount") && ("number" == typeof e.amount ? r.amount = t.longs === String ? String(e.amount) : e.amount : r.amount = t.longs === String ? f.Long.prototype.toString.call(e.amount) : t.longs === Number ? new f.LongBits(e.amount.low >>> 0, e.amount.high >>> 0).toNumber() : e.amount), null != e.isAuto && e.hasOwnProperty("isAuto") && (r.isAuto = e.isAuto), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), null != e.score && e.hasOwnProperty("score") && ("number" == typeof e.score ? r.score = t.longs === String ? String(e.score) : e.score : r.score = t.longs === String ? f.Long.prototype.toString.call(e.score) : t.longs === Number ? new f.LongBits(e.score.low >>> 0, e.score.high >>> 0).toNumber() : e.score), null != e.buyInScore && e.hasOwnProperty("buyInScore") && ("number" == typeof e.buyInScore ? r.buyInScore = t.longs === String ? String(e.buyInScore) : e.buyInScore : r.buyInScore = t.longs === String ? f.Long.prototype.toString.call(e.buyInScore) : t.longs === Number ? new f.LongBits(e.buyInScore.low >>> 0, e.buyInScore.high >>> 0).toNumber() : e.buyInScore), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.BuyInNotify"
            }, e
        }(), l.SituationReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.SituationReq; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomId = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId) ? "roomId: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.SituationReq) return e;
                var t = new y.jackfruit_proto.SituationReq;
                return null != e.roomId && (t.roomId = 0 | e.roomId), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.roomId = 0), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.SituationReq"
            }, e
        }(), l.PlayerBuyInInfo = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.playerName = "", e.prototype.playerId = 0, e.prototype.totalBuyIn = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.currRecord = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.totalBuyInScore = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.currRecordScore = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.handCount = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.playerName && Object.hasOwnProperty.call(e, "playerName") && t.uint32(10).string(e.playerName), null != e.playerId && Object.hasOwnProperty.call(e, "playerId") && t.uint32(16).uint32(e.playerId), null != e.totalBuyIn && Object.hasOwnProperty.call(e, "totalBuyIn") && t.uint32(24).int64(e.totalBuyIn), null != e.currRecord && Object.hasOwnProperty.call(e, "currRecord") && t.uint32(32).int64(e.currRecord), null != e.totalBuyInScore && Object.hasOwnProperty.call(e, "totalBuyInScore") && t.uint32(40).int64(e.totalBuyInScore), null != e.currRecordScore && Object.hasOwnProperty.call(e, "currRecordScore") && t.uint32(48).int64(e.currRecordScore), null != e.handCount && Object.hasOwnProperty.call(e, "handCount") && t.uint32(56).int64(e.handCount), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.PlayerBuyInInfo; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.playerName = e.string();
                            break;
                        case 2:
                            o.playerId = e.uint32();
                            break;
                        case 3:
                            o.totalBuyIn = e.int64();
                            break;
                        case 4:
                            o.currRecord = e.int64();
                            break;
                        case 5:
                            o.totalBuyInScore = e.int64();
                            break;
                        case 6:
                            o.currRecordScore = e.int64();
                            break;
                        case 7:
                            o.handCount = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.playerName && e.hasOwnProperty("playerName") && !f.isString(e.playerName) ? "playerName: string expected" : null != e.playerId && e.hasOwnProperty("playerId") && !f.isInteger(e.playerId) ? "playerId: integer expected" : null != e.totalBuyIn && e.hasOwnProperty("totalBuyIn") && !(f.isInteger(e.totalBuyIn) || e.totalBuyIn && f.isInteger(e.totalBuyIn.low) && f.isInteger(e.totalBuyIn.high)) ? "totalBuyIn: integer|Long expected" : null != e.currRecord && e.hasOwnProperty("currRecord") && !(f.isInteger(e.currRecord) || e.currRecord && f.isInteger(e.currRecord.low) && f.isInteger(e.currRecord.high)) ? "currRecord: integer|Long expected" : null != e.totalBuyInScore && e.hasOwnProperty("totalBuyInScore") && !(f.isInteger(e.totalBuyInScore) || e.totalBuyInScore && f.isInteger(e.totalBuyInScore.low) && f.isInteger(e.totalBuyInScore.high)) ? "totalBuyInScore: integer|Long expected" : null != e.currRecordScore && e.hasOwnProperty("currRecordScore") && !(f.isInteger(e.currRecordScore) || e.currRecordScore && f.isInteger(e.currRecordScore.low) && f.isInteger(e.currRecordScore.high)) ? "currRecordScore: integer|Long expected" : null != e.handCount && e.hasOwnProperty("handCount") && !(f.isInteger(e.handCount) || e.handCount && f.isInteger(e.handCount.low) && f.isInteger(e.handCount.high)) ? "handCount: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.PlayerBuyInInfo) return e;
                var t = new y.jackfruit_proto.PlayerBuyInInfo;
                return null != e.playerName && (t.playerName = String(e.playerName)), null != e.playerId && (t.playerId = e.playerId >>> 0), null != e.totalBuyIn && (f.Long ? (t.totalBuyIn = f.Long.fromValue(e.totalBuyIn)).unsigned = !1 : "string" == typeof e.totalBuyIn ? t.totalBuyIn = parseInt(e.totalBuyIn, 10) : "number" == typeof e.totalBuyIn ? t.totalBuyIn = e.totalBuyIn : "object" == typeof e.totalBuyIn && (t.totalBuyIn = new f.LongBits(e.totalBuyIn.low >>> 0, e.totalBuyIn.high >>> 0).toNumber())), null != e.currRecord && (f.Long ? (t.currRecord = f.Long.fromValue(e.currRecord)).unsigned = !1 : "string" == typeof e.currRecord ? t.currRecord = parseInt(e.currRecord, 10) : "number" == typeof e.currRecord ? t.currRecord = e.currRecord : "object" == typeof e.currRecord && (t.currRecord = new f.LongBits(e.currRecord.low >>> 0, e.currRecord.high >>> 0).toNumber())), null != e.totalBuyInScore && (f.Long ? (t.totalBuyInScore = f.Long.fromValue(e.totalBuyInScore)).unsigned = !1 : "string" == typeof e.totalBuyInScore ? t.totalBuyInScore = parseInt(e.totalBuyInScore, 10) : "number" == typeof e.totalBuyInScore ? t.totalBuyInScore = e.totalBuyInScore : "object" == typeof e.totalBuyInScore && (t.totalBuyInScore = new f.LongBits(e.totalBuyInScore.low >>> 0, e.totalBuyInScore.high >>> 0).toNumber())), null != e.currRecordScore && (f.Long ? (t.currRecordScore = f.Long.fromValue(e.currRecordScore)).unsigned = !1 : "string" == typeof e.currRecordScore ? t.currRecordScore = parseInt(e.currRecordScore, 10) : "number" == typeof e.currRecordScore ? t.currRecordScore = e.currRecordScore : "object" == typeof e.currRecordScore && (t.currRecordScore = new f.LongBits(e.currRecordScore.low >>> 0, e.currRecordScore.high >>> 0).toNumber())), null != e.handCount && (f.Long ? (t.handCount = f.Long.fromValue(e.handCount)).unsigned = !1 : "string" == typeof e.handCount ? t.handCount = parseInt(e.handCount, 10) : "number" == typeof e.handCount ? t.handCount = e.handCount : "object" == typeof e.handCount && (t.handCount = new f.LongBits(e.handCount.low >>> 0, e.handCount.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults) {
                    if (r.playerName = "", r.playerId = 0, f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.totalBuyIn = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.totalBuyIn = t.longs === String ? "0" : 0;
                    f.Long ? (o = new f.Long(0, 0, !1), r.currRecord = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.currRecord = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.totalBuyInScore = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.totalBuyInScore = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.currRecordScore = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.currRecordScore = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.handCount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.handCount = t.longs === String ? "0" : 0
                }
                return null != e.playerName && e.hasOwnProperty("playerName") && (r.playerName = e.playerName), null != e.playerId && e.hasOwnProperty("playerId") && (r.playerId = e.playerId), null != e.totalBuyIn && e.hasOwnProperty("totalBuyIn") && ("number" == typeof e.totalBuyIn ? r.totalBuyIn = t.longs === String ? String(e.totalBuyIn) : e.totalBuyIn : r.totalBuyIn = t.longs === String ? f.Long.prototype.toString.call(e.totalBuyIn) : t.longs === Number ? new f.LongBits(e.totalBuyIn.low >>> 0, e.totalBuyIn.high >>> 0).toNumber() : e.totalBuyIn), null != e.currRecord && e.hasOwnProperty("currRecord") && ("number" == typeof e.currRecord ? r.currRecord = t.longs === String ? String(e.currRecord) : e.currRecord : r.currRecord = t.longs === String ? f.Long.prototype.toString.call(e.currRecord) : t.longs === Number ? new f.LongBits(e.currRecord.low >>> 0, e.currRecord.high >>> 0).toNumber() : e.currRecord), null != e.totalBuyInScore && e.hasOwnProperty("totalBuyInScore") && ("number" == typeof e.totalBuyInScore ? r.totalBuyInScore = t.longs === String ? String(e.totalBuyInScore) : e.totalBuyInScore : r.totalBuyInScore = t.longs === String ? f.Long.prototype.toString.call(e.totalBuyInScore) : t.longs === Number ? new f.LongBits(e.totalBuyInScore.low >>> 0, e.totalBuyInScore.high >>> 0).toNumber() : e.totalBuyInScore), null != e.currRecordScore && e.hasOwnProperty("currRecordScore") && ("number" == typeof e.currRecordScore ? r.currRecordScore = t.longs === String ? String(e.currRecordScore) : e.currRecordScore : r.currRecordScore = t.longs === String ? f.Long.prototype.toString.call(e.currRecordScore) : t.longs === Number ? new f.LongBits(e.currRecordScore.low >>> 0, e.currRecordScore.high >>> 0).toNumber() : e.currRecordScore), null != e.handCount && e.hasOwnProperty("handCount") && ("number" == typeof e.handCount ? r.handCount = t.longs === String ? String(e.handCount) : e.handCount : r.handCount = t.longs === String ? f.Long.prototype.toString.call(e.handCount) : t.longs === Number ? new f.LongBits(e.handCount.low >>> 0, e.handCount.high >>> 0).toNumber() : e.handCount), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.PlayerBuyInInfo"
            }, e
        }(), l.SituationResp = function() {
            function e(e) {
                if (this.observerList = [], this.byStanderList = [], this.playerBuyInInfo = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.prototype.roomId = 0, e.prototype.observerList = f.emptyArray, e.prototype.byStanderList = f.emptyArray, e.prototype.leftTime = 0, e.prototype.roomStartTime = 0, e.prototype.playerBuyInInfo = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.observerList && e.observerList.length)
                    for (var r = 0; r < e.observerList.length; ++r) y.jackfruit_proto.PlayerInfo.encode(e.observerList[r], t.uint32(18).fork()).ldelim();
                if (null != e.byStanderList && e.byStanderList.length) {
                    for (t.uint32(26).fork(), r = 0; r < e.byStanderList.length; ++r) t.int32(e.byStanderList[r]);
                    t.ldelim()
                }
                if (null != e.leftTime && Object.hasOwnProperty.call(e, "leftTime") && t.uint32(32).int32(e.leftTime), null != e.roomStartTime && Object.hasOwnProperty.call(e, "roomStartTime") && t.uint32(40).int32(e.roomStartTime), null != e.playerBuyInInfo && e.playerBuyInInfo.length)
                    for (r = 0; r < e.playerBuyInInfo.length; ++r) y.jackfruit_proto.PlayerBuyInInfo.encode(e.playerBuyInInfo[r], t.uint32(50).fork()).ldelim();
                return null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(56).int32(e.roomId), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.SituationResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        case 7:
                            o.roomId = e.int32();
                            break;
                        case 2:
                            o.observerList && o.observerList.length || (o.observerList = []), o.observerList.push(y.jackfruit_proto.PlayerInfo.decode(e, e.uint32()));
                            break;
                        case 3:
                            if (o.byStanderList && o.byStanderList.length || (o.byStanderList = []), 2 == (7 & n))
                                for (var a = e.uint32() + e.pos; e.pos < a;) o.byStanderList.push(e.int32());
                            else o.byStanderList.push(e.int32());
                            break;
                        case 4:
                            o.leftTime = e.int32();
                            break;
                        case 5:
                            o.roomStartTime = e.int32();
                            break;
                        case 6:
                            o.playerBuyInInfo && o.playerBuyInInfo.length || (o.playerBuyInInfo = []), o.playerBuyInInfo.push(y.jackfruit_proto.PlayerBuyInInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                if (null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId)) return "roomId: integer expected";
                if (null != e.observerList && e.hasOwnProperty("observerList")) {
                    if (!Array.isArray(e.observerList)) return "observerList: array expected";
                    for (var t = 0; t < e.observerList.length; ++t)
                        if (r = y.jackfruit_proto.PlayerInfo.verify(e.observerList[t])) return "observerList." + r
                }
                if (null != e.byStanderList && e.hasOwnProperty("byStanderList")) {
                    if (!Array.isArray(e.byStanderList)) return "byStanderList: array expected";
                    for (t = 0; t < e.byStanderList.length; ++t)
                        if (!f.isInteger(e.byStanderList[t])) return "byStanderList: integer[] expected"
                }
                if (null != e.leftTime && e.hasOwnProperty("leftTime") && !f.isInteger(e.leftTime)) return "leftTime: integer expected";
                if (null != e.roomStartTime && e.hasOwnProperty("roomStartTime") && !f.isInteger(e.roomStartTime)) return "roomStartTime: integer expected";
                if (null != e.playerBuyInInfo && e.hasOwnProperty("playerBuyInInfo")) {
                    if (!Array.isArray(e.playerBuyInInfo)) return "playerBuyInInfo: array expected";
                    for (t = 0; t < e.playerBuyInInfo.length; ++t) {
                        var r;
                        if (r = y.jackfruit_proto.PlayerBuyInInfo.verify(e.playerBuyInInfo[t])) return "playerBuyInInfo." + r
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.SituationResp) return e;
                var t = new y.jackfruit_proto.SituationResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                if (null != e.roomId && (t.roomId = 0 | e.roomId), e.observerList) {
                    if (!Array.isArray(e.observerList)) throw TypeError(".jackfruit_proto.SituationResp.observerList: array expected");
                    t.observerList = [];
                    for (var r = 0; r < e.observerList.length; ++r) {
                        if ("object" != typeof e.observerList[r]) throw TypeError(".jackfruit_proto.SituationResp.observerList: object expected");
                        t.observerList[r] = y.jackfruit_proto.PlayerInfo.fromObject(e.observerList[r])
                    }
                }
                if (e.byStanderList) {
                    if (!Array.isArray(e.byStanderList)) throw TypeError(".jackfruit_proto.SituationResp.byStanderList: array expected");
                    for (t.byStanderList = [], r = 0; r < e.byStanderList.length; ++r) t.byStanderList[r] = 0 | e.byStanderList[r]
                }
                if (null != e.leftTime && (t.leftTime = 0 | e.leftTime), null != e.roomStartTime && (t.roomStartTime = 0 | e.roomStartTime), e.playerBuyInInfo) {
                    if (!Array.isArray(e.playerBuyInInfo)) throw TypeError(".jackfruit_proto.SituationResp.playerBuyInInfo: array expected");
                    for (t.playerBuyInInfo = [], r = 0; r < e.playerBuyInInfo.length; ++r) {
                        if ("object" != typeof e.playerBuyInInfo[r]) throw TypeError(".jackfruit_proto.SituationResp.playerBuyInInfo: object expected");
                        t.playerBuyInInfo[r] = y.jackfruit_proto.PlayerBuyInInfo.fromObject(e.playerBuyInInfo[r])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.observerList = [], r.byStanderList = [], r.playerBuyInInfo = []), t.defaults && (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0, r.leftTime = 0, r.roomStartTime = 0, r.roomId = 0), null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), e.observerList && e.observerList.length) {
                    r.observerList = [];
                    for (var o = 0; o < e.observerList.length; ++o) r.observerList[o] = y.jackfruit_proto.PlayerInfo.toObject(e.observerList[o], t)
                }
                if (e.byStanderList && e.byStanderList.length)
                    for (r.byStanderList = [], o = 0; o < e.byStanderList.length; ++o) r.byStanderList[o] = e.byStanderList[o];
                if (null != e.leftTime && e.hasOwnProperty("leftTime") && (r.leftTime = e.leftTime), null != e.roomStartTime && e.hasOwnProperty("roomStartTime") && (r.roomStartTime = e.roomStartTime), e.playerBuyInInfo && e.playerBuyInInfo.length)
                    for (r.playerBuyInInfo = [], o = 0; o < e.playerBuyInInfo.length; ++o) r.playerBuyInInfo[o] = y.jackfruit_proto.PlayerBuyInInfo.toObject(e.playerBuyInInfo[o], t);
                return null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.SituationResp"
            }, e
        }(), l.PlayerTotalSettle = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.playerName = "", e.prototype.playerHead = "", e.prototype.totalBuyIn = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.playerHandCount = 0, e.prototype.playerSettle = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.playerId = 0, e.prototype.totalBuyInScore = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.playerSettleScore = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.plat = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.playerName && Object.hasOwnProperty.call(e, "playerName") && t.uint32(10).string(e.playerName), null != e.playerHead && Object.hasOwnProperty.call(e, "playerHead") && t.uint32(18).string(e.playerHead), null != e.totalBuyIn && Object.hasOwnProperty.call(e, "totalBuyIn") && t.uint32(24).int64(e.totalBuyIn), null != e.playerHandCount && Object.hasOwnProperty.call(e, "playerHandCount") && t.uint32(32).int32(e.playerHandCount), null != e.playerSettle && Object.hasOwnProperty.call(e, "playerSettle") && t.uint32(40).int64(e.playerSettle), null != e.playerId && Object.hasOwnProperty.call(e, "playerId") && t.uint32(48).uint32(e.playerId), null != e.totalBuyInScore && Object.hasOwnProperty.call(e, "totalBuyInScore") && t.uint32(56).int64(e.totalBuyInScore), null != e.playerSettleScore && Object.hasOwnProperty.call(e, "playerSettleScore") && t.uint32(64).int64(e.playerSettleScore), null != e.plat && Object.hasOwnProperty.call(e, "plat") && t.uint32(72).uint32(e.plat), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.PlayerTotalSettle; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.playerName = e.string();
                            break;
                        case 2:
                            o.playerHead = e.string();
                            break;
                        case 3:
                            o.totalBuyIn = e.int64();
                            break;
                        case 4:
                            o.playerHandCount = e.int32();
                            break;
                        case 5:
                            o.playerSettle = e.int64();
                            break;
                        case 6:
                            o.playerId = e.uint32();
                            break;
                        case 7:
                            o.totalBuyInScore = e.int64();
                            break;
                        case 8:
                            o.playerSettleScore = e.int64();
                            break;
                        case 9:
                            o.plat = e.uint32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.playerName && e.hasOwnProperty("playerName") && !f.isString(e.playerName) ? "playerName: string expected" : null != e.playerHead && e.hasOwnProperty("playerHead") && !f.isString(e.playerHead) ? "playerHead: string expected" : null != e.totalBuyIn && e.hasOwnProperty("totalBuyIn") && !(f.isInteger(e.totalBuyIn) || e.totalBuyIn && f.isInteger(e.totalBuyIn.low) && f.isInteger(e.totalBuyIn.high)) ? "totalBuyIn: integer|Long expected" : null != e.playerHandCount && e.hasOwnProperty("playerHandCount") && !f.isInteger(e.playerHandCount) ? "playerHandCount: integer expected" : null != e.playerSettle && e.hasOwnProperty("playerSettle") && !(f.isInteger(e.playerSettle) || e.playerSettle && f.isInteger(e.playerSettle.low) && f.isInteger(e.playerSettle.high)) ? "playerSettle: integer|Long expected" : null != e.playerId && e.hasOwnProperty("playerId") && !f.isInteger(e.playerId) ? "playerId: integer expected" : null != e.totalBuyInScore && e.hasOwnProperty("totalBuyInScore") && !(f.isInteger(e.totalBuyInScore) || e.totalBuyInScore && f.isInteger(e.totalBuyInScore.low) && f.isInteger(e.totalBuyInScore.high)) ? "totalBuyInScore: integer|Long expected" : null != e.playerSettleScore && e.hasOwnProperty("playerSettleScore") && !(f.isInteger(e.playerSettleScore) || e.playerSettleScore && f.isInteger(e.playerSettleScore.low) && f.isInteger(e.playerSettleScore.high)) ? "playerSettleScore: integer|Long expected" : null != e.plat && e.hasOwnProperty("plat") && !f.isInteger(e.plat) ? "plat: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.PlayerTotalSettle) return e;
                var t = new y.jackfruit_proto.PlayerTotalSettle;
                return null != e.playerName && (t.playerName = String(e.playerName)), null != e.playerHead && (t.playerHead = String(e.playerHead)), null != e.totalBuyIn && (f.Long ? (t.totalBuyIn = f.Long.fromValue(e.totalBuyIn)).unsigned = !1 : "string" == typeof e.totalBuyIn ? t.totalBuyIn = parseInt(e.totalBuyIn, 10) : "number" == typeof e.totalBuyIn ? t.totalBuyIn = e.totalBuyIn : "object" == typeof e.totalBuyIn && (t.totalBuyIn = new f.LongBits(e.totalBuyIn.low >>> 0, e.totalBuyIn.high >>> 0).toNumber())), null != e.playerHandCount && (t.playerHandCount = 0 | e.playerHandCount), null != e.playerSettle && (f.Long ? (t.playerSettle = f.Long.fromValue(e.playerSettle)).unsigned = !1 : "string" == typeof e.playerSettle ? t.playerSettle = parseInt(e.playerSettle, 10) : "number" == typeof e.playerSettle ? t.playerSettle = e.playerSettle : "object" == typeof e.playerSettle && (t.playerSettle = new f.LongBits(e.playerSettle.low >>> 0, e.playerSettle.high >>> 0).toNumber())), null != e.playerId && (t.playerId = e.playerId >>> 0), null != e.totalBuyInScore && (f.Long ? (t.totalBuyInScore = f.Long.fromValue(e.totalBuyInScore)).unsigned = !1 : "string" == typeof e.totalBuyInScore ? t.totalBuyInScore = parseInt(e.totalBuyInScore, 10) : "number" == typeof e.totalBuyInScore ? t.totalBuyInScore = e.totalBuyInScore : "object" == typeof e.totalBuyInScore && (t.totalBuyInScore = new f.LongBits(e.totalBuyInScore.low >>> 0, e.totalBuyInScore.high >>> 0).toNumber())), null != e.playerSettleScore && (f.Long ? (t.playerSettleScore = f.Long.fromValue(e.playerSettleScore)).unsigned = !1 : "string" == typeof e.playerSettleScore ? t.playerSettleScore = parseInt(e.playerSettleScore, 10) : "number" == typeof e.playerSettleScore ? t.playerSettleScore = e.playerSettleScore : "object" == typeof e.playerSettleScore && (t.playerSettleScore = new f.LongBits(e.playerSettleScore.low >>> 0, e.playerSettleScore.high >>> 0).toNumber())), null != e.plat && (t.plat = e.plat >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults) {
                    if (r.playerName = "", r.playerHead = "", f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.totalBuyIn = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.totalBuyIn = t.longs === String ? "0" : 0;
                    r.playerHandCount = 0, f.Long ? (o = new f.Long(0, 0, !1), r.playerSettle = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.playerSettle = t.longs === String ? "0" : 0, r.playerId = 0, f.Long ? (o = new f.Long(0, 0, !1), r.totalBuyInScore = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.totalBuyInScore = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.playerSettleScore = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.playerSettleScore = t.longs === String ? "0" : 0, r.plat = 0
                }
                return null != e.playerName && e.hasOwnProperty("playerName") && (r.playerName = e.playerName), null != e.playerHead && e.hasOwnProperty("playerHead") && (r.playerHead = e.playerHead), null != e.totalBuyIn && e.hasOwnProperty("totalBuyIn") && ("number" == typeof e.totalBuyIn ? r.totalBuyIn = t.longs === String ? String(e.totalBuyIn) : e.totalBuyIn : r.totalBuyIn = t.longs === String ? f.Long.prototype.toString.call(e.totalBuyIn) : t.longs === Number ? new f.LongBits(e.totalBuyIn.low >>> 0, e.totalBuyIn.high >>> 0).toNumber() : e.totalBuyIn), null != e.playerHandCount && e.hasOwnProperty("playerHandCount") && (r.playerHandCount = e.playerHandCount), null != e.playerSettle && e.hasOwnProperty("playerSettle") && ("number" == typeof e.playerSettle ? r.playerSettle = t.longs === String ? String(e.playerSettle) : e.playerSettle : r.playerSettle = t.longs === String ? f.Long.prototype.toString.call(e.playerSettle) : t.longs === Number ? new f.LongBits(e.playerSettle.low >>> 0, e.playerSettle.high >>> 0).toNumber() : e.playerSettle), null != e.playerId && e.hasOwnProperty("playerId") && (r.playerId = e.playerId), null != e.totalBuyInScore && e.hasOwnProperty("totalBuyInScore") && ("number" == typeof e.totalBuyInScore ? r.totalBuyInScore = t.longs === String ? String(e.totalBuyInScore) : e.totalBuyInScore : r.totalBuyInScore = t.longs === String ? f.Long.prototype.toString.call(e.totalBuyInScore) : t.longs === Number ? new f.LongBits(e.totalBuyInScore.low >>> 0, e.totalBuyInScore.high >>> 0).toNumber() : e.totalBuyInScore), null != e.playerSettleScore && e.hasOwnProperty("playerSettleScore") && ("number" == typeof e.playerSettleScore ? r.playerSettleScore = t.longs === String ? String(e.playerSettleScore) : e.playerSettleScore : r.playerSettleScore = t.longs === String ? f.Long.prototype.toString.call(e.playerSettleScore) : t.longs === Number ? new f.LongBits(e.playerSettleScore.low >>> 0, e.playerSettleScore.high >>> 0).toNumber() : e.playerSettleScore), null != e.plat && e.hasOwnProperty("plat") && (r.plat = e.plat), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.PlayerTotalSettle"
            }, e
        }(), l.DestroyRoom = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.DestroyRoom; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomId = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId) ? "roomId: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.DestroyRoom) return e;
                var t = new y.jackfruit_proto.DestroyRoom;
                return null != e.roomId && (t.roomId = 0 | e.roomId), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.roomId = 0), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.DestroyRoom"
            }, e
        }(), l.DestroyRoomResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.DestroyRoomResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.DestroyRoomResp) return e;
                var t = new y.jackfruit_proto.DestroyRoomResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.DestroyRoomResp"
            }, e
        }(), l.DestroyRoomNotify = function() {
            function e(e) {
                if (this.playerTotalSettle = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomId = 0, e.prototype.createTime = 0, e.prototype.timeLimit = 0, e.prototype.ownerName = "", e.prototype.gameHand = 0, e.prototype.totalBuyIn = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.roomUuid = f.Long ? f.Long.fromBits(0, 0, !0) : 0, e.prototype.roomName = "", e.prototype.roomUuidStr = "", e.prototype.playerTotalSettle = f.emptyArray, e.prototype.reason = 0, e.prototype.totalBuyInScore = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), null != e.createTime && Object.hasOwnProperty.call(e, "createTime") && t.uint32(16).uint32(e.createTime), null != e.timeLimit && Object.hasOwnProperty.call(e, "timeLimit") && t.uint32(24).int32(e.timeLimit), null != e.ownerName && Object.hasOwnProperty.call(e, "ownerName") && t.uint32(34).string(e.ownerName), null != e.gameHand && Object.hasOwnProperty.call(e, "gameHand") && t.uint32(40).int32(e.gameHand), null != e.totalBuyIn && Object.hasOwnProperty.call(e, "totalBuyIn") && t.uint32(48).int64(e.totalBuyIn), null != e.roomUuid && Object.hasOwnProperty.call(e, "roomUuid") && t.uint32(56).uint64(e.roomUuid), null != e.roomName && Object.hasOwnProperty.call(e, "roomName") && t.uint32(66).string(e.roomName), null != e.roomUuidStr && Object.hasOwnProperty.call(e, "roomUuidStr") && t.uint32(74).string(e.roomUuidStr), null != e.playerTotalSettle && e.playerTotalSettle.length)
                    for (var r = 0; r < e.playerTotalSettle.length; ++r) y.jackfruit_proto.PlayerTotalSettle.encode(e.playerTotalSettle[r], t.uint32(82).fork()).ldelim();
                return null != e.reason && Object.hasOwnProperty.call(e, "reason") && t.uint32(88).int32(e.reason), null != e.totalBuyInScore && Object.hasOwnProperty.call(e, "totalBuyInScore") && t.uint32(96).int64(e.totalBuyInScore), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.DestroyRoomNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomId = e.int32();
                            break;
                        case 2:
                            o.createTime = e.uint32();
                            break;
                        case 3:
                            o.timeLimit = e.int32();
                            break;
                        case 4:
                            o.ownerName = e.string();
                            break;
                        case 5:
                            o.gameHand = e.int32();
                            break;
                        case 6:
                            o.totalBuyIn = e.int64();
                            break;
                        case 7:
                            o.roomUuid = e.uint64();
                            break;
                        case 8:
                            o.roomName = e.string();
                            break;
                        case 9:
                            o.roomUuidStr = e.string();
                            break;
                        case 10:
                            o.playerTotalSettle && o.playerTotalSettle.length || (o.playerTotalSettle = []), o.playerTotalSettle.push(y.jackfruit_proto.PlayerTotalSettle.decode(e, e.uint32()));
                            break;
                        case 11:
                            o.reason = e.int32();
                            break;
                        case 12:
                            o.totalBuyInScore = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId)) return "roomId: integer expected";
                if (null != e.createTime && e.hasOwnProperty("createTime") && !f.isInteger(e.createTime)) return "createTime: integer expected";
                if (null != e.timeLimit && e.hasOwnProperty("timeLimit") && !f.isInteger(e.timeLimit)) return "timeLimit: integer expected";
                if (null != e.ownerName && e.hasOwnProperty("ownerName") && !f.isString(e.ownerName)) return "ownerName: string expected";
                if (null != e.gameHand && e.hasOwnProperty("gameHand") && !f.isInteger(e.gameHand)) return "gameHand: integer expected";
                if (null != e.totalBuyIn && e.hasOwnProperty("totalBuyIn") && !(f.isInteger(e.totalBuyIn) || e.totalBuyIn && f.isInteger(e.totalBuyIn.low) && f.isInteger(e.totalBuyIn.high))) return "totalBuyIn: integer|Long expected";
                if (null != e.roomUuid && e.hasOwnProperty("roomUuid") && !(f.isInteger(e.roomUuid) || e.roomUuid && f.isInteger(e.roomUuid.low) && f.isInteger(e.roomUuid.high))) return "roomUuid: integer|Long expected";
                if (null != e.roomName && e.hasOwnProperty("roomName") && !f.isString(e.roomName)) return "roomName: string expected";
                if (null != e.roomUuidStr && e.hasOwnProperty("roomUuidStr") && !f.isString(e.roomUuidStr)) return "roomUuidStr: string expected";
                if (null != e.playerTotalSettle && e.hasOwnProperty("playerTotalSettle")) {
                    if (!Array.isArray(e.playerTotalSettle)) return "playerTotalSettle: array expected";
                    for (var t = 0; t < e.playerTotalSettle.length; ++t) {
                        var r = y.jackfruit_proto.PlayerTotalSettle.verify(e.playerTotalSettle[t]);
                        if (r) return "playerTotalSettle." + r
                    }
                }
                return null != e.reason && e.hasOwnProperty("reason") && !f.isInteger(e.reason) ? "reason: integer expected" : null != e.totalBuyInScore && e.hasOwnProperty("totalBuyInScore") && !(f.isInteger(e.totalBuyInScore) || e.totalBuyInScore && f.isInteger(e.totalBuyInScore.low) && f.isInteger(e.totalBuyInScore.high)) ? "totalBuyInScore: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.DestroyRoomNotify) return e;
                var t = new y.jackfruit_proto.DestroyRoomNotify;
                if (null != e.roomId && (t.roomId = 0 | e.roomId), null != e.createTime && (t.createTime = e.createTime >>> 0), null != e.timeLimit && (t.timeLimit = 0 | e.timeLimit), null != e.ownerName && (t.ownerName = String(e.ownerName)), null != e.gameHand && (t.gameHand = 0 | e.gameHand), null != e.totalBuyIn && (f.Long ? (t.totalBuyIn = f.Long.fromValue(e.totalBuyIn)).unsigned = !1 : "string" == typeof e.totalBuyIn ? t.totalBuyIn = parseInt(e.totalBuyIn, 10) : "number" == typeof e.totalBuyIn ? t.totalBuyIn = e.totalBuyIn : "object" == typeof e.totalBuyIn && (t.totalBuyIn = new f.LongBits(e.totalBuyIn.low >>> 0, e.totalBuyIn.high >>> 0).toNumber())), null != e.roomUuid && (f.Long ? (t.roomUuid = f.Long.fromValue(e.roomUuid)).unsigned = !0 : "string" == typeof e.roomUuid ? t.roomUuid = parseInt(e.roomUuid, 10) : "number" == typeof e.roomUuid ? t.roomUuid = e.roomUuid : "object" == typeof e.roomUuid && (t.roomUuid = new f.LongBits(e.roomUuid.low >>> 0, e.roomUuid.high >>> 0).toNumber(!0))), null != e.roomName && (t.roomName = String(e.roomName)), null != e.roomUuidStr && (t.roomUuidStr = String(e.roomUuidStr)), e.playerTotalSettle) {
                    if (!Array.isArray(e.playerTotalSettle)) throw TypeError(".jackfruit_proto.DestroyRoomNotify.playerTotalSettle: array expected");
                    t.playerTotalSettle = [];
                    for (var r = 0; r < e.playerTotalSettle.length; ++r) {
                        if ("object" != typeof e.playerTotalSettle[r]) throw TypeError(".jackfruit_proto.DestroyRoomNotify.playerTotalSettle: object expected");
                        t.playerTotalSettle[r] = y.jackfruit_proto.PlayerTotalSettle.fromObject(e.playerTotalSettle[r])
                    }
                }
                return null != e.reason && (t.reason = 0 | e.reason), null != e.totalBuyInScore && (f.Long ? (t.totalBuyInScore = f.Long.fromValue(e.totalBuyInScore)).unsigned = !1 : "string" == typeof e.totalBuyInScore ? t.totalBuyInScore = parseInt(e.totalBuyInScore, 10) : "number" == typeof e.totalBuyInScore ? t.totalBuyInScore = e.totalBuyInScore : "object" == typeof e.totalBuyInScore && (t.totalBuyInScore = new f.LongBits(e.totalBuyInScore.low >>> 0, e.totalBuyInScore.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.playerTotalSettle = []), t.defaults) {
                    if (r.roomId = 0, r.createTime = 0, r.timeLimit = 0, r.ownerName = "", r.gameHand = 0, f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.totalBuyIn = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.totalBuyIn = t.longs === String ? "0" : 0;
                    f.Long ? (o = new f.Long(0, 0, !0), r.roomUuid = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.roomUuid = t.longs === String ? "0" : 0, r.roomName = "", r.roomUuidStr = "", r.reason = 0, f.Long ? (o = new f.Long(0, 0, !1), r.totalBuyInScore = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.totalBuyInScore = t.longs === String ? "0" : 0
                }
                if (null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), null != e.createTime && e.hasOwnProperty("createTime") && (r.createTime = e.createTime), null != e.timeLimit && e.hasOwnProperty("timeLimit") && (r.timeLimit = e.timeLimit), null != e.ownerName && e.hasOwnProperty("ownerName") && (r.ownerName = e.ownerName), null != e.gameHand && e.hasOwnProperty("gameHand") && (r.gameHand = e.gameHand), null != e.totalBuyIn && e.hasOwnProperty("totalBuyIn") && ("number" == typeof e.totalBuyIn ? r.totalBuyIn = t.longs === String ? String(e.totalBuyIn) : e.totalBuyIn : r.totalBuyIn = t.longs === String ? f.Long.prototype.toString.call(e.totalBuyIn) : t.longs === Number ? new f.LongBits(e.totalBuyIn.low >>> 0, e.totalBuyIn.high >>> 0).toNumber() : e.totalBuyIn), null != e.roomUuid && e.hasOwnProperty("roomUuid") && ("number" == typeof e.roomUuid ? r.roomUuid = t.longs === String ? String(e.roomUuid) : e.roomUuid : r.roomUuid = t.longs === String ? f.Long.prototype.toString.call(e.roomUuid) : t.longs === Number ? new f.LongBits(e.roomUuid.low >>> 0, e.roomUuid.high >>> 0).toNumber(!0) : e.roomUuid), null != e.roomName && e.hasOwnProperty("roomName") && (r.roomName = e.roomName), null != e.roomUuidStr && e.hasOwnProperty("roomUuidStr") && (r.roomUuidStr = e.roomUuidStr), e.playerTotalSettle && e.playerTotalSettle.length) {
                    r.playerTotalSettle = [];
                    for (var n = 0; n < e.playerTotalSettle.length; ++n) r.playerTotalSettle[n] = y.jackfruit_proto.PlayerTotalSettle.toObject(e.playerTotalSettle[n], t)
                }
                return null != e.reason && e.hasOwnProperty("reason") && (r.reason = e.reason), null != e.totalBuyInScore && e.hasOwnProperty("totalBuyInScore") && ("number" == typeof e.totalBuyInScore ? r.totalBuyInScore = t.longs === String ? String(e.totalBuyInScore) : e.totalBuyInScore : r.totalBuyInScore = t.longs === String ? f.Long.prototype.toString.call(e.totalBuyInScore) : t.longs === Number ? new f.LongBits(e.totalBuyInScore.low >>> 0, e.totalBuyInScore.high >>> 0).toNumber() : e.totalBuyInScore), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.DestroyRoomNotify"
            }, e
        }(), l.BarrageType = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Enum_System"] = 0, t[e[1] = "Enum_Custom"] = 1, t[e[2] = "Enum_CardType"] = 2, t
        }(), l.RequestSendBarrage = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomid = 0, e.prototype.ctype = 0, e.prototype.content = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomid && Object.hasOwnProperty.call(e, "roomid") && t.uint32(8).int32(e.roomid), null != e.ctype && Object.hasOwnProperty.call(e, "ctype") && t.uint32(16).int32(e.ctype), null != e.content && Object.hasOwnProperty.call(e, "content") && t.uint32(26).string(e.content), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.RequestSendBarrage; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomid = e.int32();
                            break;
                        case 2:
                            o.ctype = e.int32();
                            break;
                        case 3:
                            o.content = e.string();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.roomid && e.hasOwnProperty("roomid") && !f.isInteger(e.roomid)) return "roomid: integer expected";
                if (null != e.ctype && e.hasOwnProperty("ctype")) switch (e.ctype) {
                    default:
                        return "ctype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                }
                return null != e.content && e.hasOwnProperty("content") && !f.isString(e.content) ? "content: string expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.RequestSendBarrage) return e;
                var t = new y.jackfruit_proto.RequestSendBarrage;
                switch (null != e.roomid && (t.roomid = 0 | e.roomid), e.ctype) {
                    default:
                        if ("number" == typeof e.ctype) {
                            t.ctype = e.ctype;
                            break
                        }
                        break;
                    case "Enum_System":
                    case 0:
                        t.ctype = 0;
                        break;
                    case "Enum_Custom":
                    case 1:
                        t.ctype = 1;
                        break;
                    case "Enum_CardType":
                    case 2:
                        t.ctype = 2
                }
                return null != e.content && (t.content = String(e.content)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.roomid = 0, r.ctype = t.enums === String ? "Enum_System" : 0, r.content = ""), null != e.roomid && e.hasOwnProperty("roomid") && (r.roomid = e.roomid), null != e.ctype && e.hasOwnProperty("ctype") && (r.ctype = t.enums === String ? void 0 === y.jackfruit_proto.BarrageType[e.ctype] ? e.ctype : y.jackfruit_proto.BarrageType[e.ctype] : e.ctype), null != e.content && e.hasOwnProperty("content") && (r.content = e.content), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.RequestSendBarrage"
            }, e
        }(), l.ResponseSendBarrage = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.error = 0, e.prototype.barrageId = 0, e.prototype.useCount = f.Long ? f.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.error && Object.hasOwnProperty.call(e, "error") && t.uint32(8).int32(e.error), null != e.barrageId && Object.hasOwnProperty.call(e, "barrageId") && t.uint32(16).uint32(e.barrageId), null != e.useCount && Object.hasOwnProperty.call(e, "useCount") && t.uint32(24).uint64(e.useCount), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.ResponseSendBarrage; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.error = e.int32();
                            break;
                        case 2:
                            o.barrageId = e.uint32();
                            break;
                        case 3:
                            o.useCount = e.uint64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.error && e.hasOwnProperty("error") && !f.isInteger(e.error) ? "error: integer expected" : null != e.barrageId && e.hasOwnProperty("barrageId") && !f.isInteger(e.barrageId) ? "barrageId: integer expected" : null != e.useCount && e.hasOwnProperty("useCount") && !(f.isInteger(e.useCount) || e.useCount && f.isInteger(e.useCount.low) && f.isInteger(e.useCount.high)) ? "useCount: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.ResponseSendBarrage) return e;
                var t = new y.jackfruit_proto.ResponseSendBarrage;
                return null != e.error && (t.error = 0 | e.error), null != e.barrageId && (t.barrageId = e.barrageId >>> 0), null != e.useCount && (f.Long ? (t.useCount = f.Long.fromValue(e.useCount)).unsigned = !0 : "string" == typeof e.useCount ? t.useCount = parseInt(e.useCount, 10) : "number" == typeof e.useCount ? t.useCount = e.useCount : "object" == typeof e.useCount && (t.useCount = new f.LongBits(e.useCount.low >>> 0, e.useCount.high >>> 0).toNumber(!0))), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults)
                    if (r.error = 0, r.barrageId = 0, f.Long) {
                        var o = new f.Long(0, 0, !0);
                        r.useCount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.useCount = t.longs === String ? "0" : 0;
                return null != e.error && e.hasOwnProperty("error") && (r.error = e.error), null != e.barrageId && e.hasOwnProperty("barrageId") && (r.barrageId = e.barrageId), null != e.useCount && e.hasOwnProperty("useCount") && ("number" == typeof e.useCount ? r.useCount = t.longs === String ? String(e.useCount) : e.useCount : r.useCount = t.longs === String ? f.Long.prototype.toString.call(e.useCount) : t.longs === Number ? new f.LongBits(e.useCount.low >>> 0, e.useCount.high >>> 0).toNumber(!0) : e.useCount), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.ResponseSendBarrage"
            }, e
        }(), l.NoticeSendBarrage = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomid = 0, e.prototype.ctype = 0, e.prototype.content = "", e.prototype.playerid = 0, e.prototype.nickname = "", e.prototype.avatar = "", e.prototype.send_time = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomid && Object.hasOwnProperty.call(e, "roomid") && t.uint32(8).int32(e.roomid), null != e.ctype && Object.hasOwnProperty.call(e, "ctype") && t.uint32(16).int32(e.ctype), null != e.content && Object.hasOwnProperty.call(e, "content") && t.uint32(26).string(e.content), null != e.playerid && Object.hasOwnProperty.call(e, "playerid") && t.uint32(32).uint32(e.playerid), null != e.nickname && Object.hasOwnProperty.call(e, "nickname") && t.uint32(42).string(e.nickname), null != e.avatar && Object.hasOwnProperty.call(e, "avatar") && t.uint32(50).string(e.avatar), null != e.send_time && Object.hasOwnProperty.call(e, "send_time") && t.uint32(56).int64(e.send_time), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.NoticeSendBarrage; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomid = e.int32();
                            break;
                        case 2:
                            o.ctype = e.int32();
                            break;
                        case 3:
                            o.content = e.string();
                            break;
                        case 4:
                            o.playerid = e.uint32();
                            break;
                        case 5:
                            o.nickname = e.string();
                            break;
                        case 6:
                            o.avatar = e.string();
                            break;
                        case 7:
                            o.send_time = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.roomid && e.hasOwnProperty("roomid") && !f.isInteger(e.roomid)) return "roomid: integer expected";
                if (null != e.ctype && e.hasOwnProperty("ctype")) switch (e.ctype) {
                    default:
                        return "ctype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                }
                return null != e.content && e.hasOwnProperty("content") && !f.isString(e.content) ? "content: string expected" : null != e.playerid && e.hasOwnProperty("playerid") && !f.isInteger(e.playerid) ? "playerid: integer expected" : null != e.nickname && e.hasOwnProperty("nickname") && !f.isString(e.nickname) ? "nickname: string expected" : null != e.avatar && e.hasOwnProperty("avatar") && !f.isString(e.avatar) ? "avatar: string expected" : null != e.send_time && e.hasOwnProperty("send_time") && !(f.isInteger(e.send_time) || e.send_time && f.isInteger(e.send_time.low) && f.isInteger(e.send_time.high)) ? "send_time: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.NoticeSendBarrage) return e;
                var t = new y.jackfruit_proto.NoticeSendBarrage;
                switch (null != e.roomid && (t.roomid = 0 | e.roomid), e.ctype) {
                    default:
                        if ("number" == typeof e.ctype) {
                            t.ctype = e.ctype;
                            break
                        }
                        break;
                    case "Enum_System":
                    case 0:
                        t.ctype = 0;
                        break;
                    case "Enum_Custom":
                    case 1:
                        t.ctype = 1;
                        break;
                    case "Enum_CardType":
                    case 2:
                        t.ctype = 2
                }
                return null != e.content && (t.content = String(e.content)), null != e.playerid && (t.playerid = e.playerid >>> 0), null != e.nickname && (t.nickname = String(e.nickname)), null != e.avatar && (t.avatar = String(e.avatar)), null != e.send_time && (f.Long ? (t.send_time = f.Long.fromValue(e.send_time)).unsigned = !1 : "string" == typeof e.send_time ? t.send_time = parseInt(e.send_time, 10) : "number" == typeof e.send_time ? t.send_time = e.send_time : "object" == typeof e.send_time && (t.send_time = new f.LongBits(e.send_time.low >>> 0, e.send_time.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults)
                    if (r.roomid = 0, r.ctype = t.enums === String ? "Enum_System" : 0, r.content = "", r.playerid = 0, r.nickname = "", r.avatar = "", f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.send_time = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.send_time = t.longs === String ? "0" : 0;
                return null != e.roomid && e.hasOwnProperty("roomid") && (r.roomid = e.roomid), null != e.ctype && e.hasOwnProperty("ctype") && (r.ctype = t.enums === String ? void 0 === y.jackfruit_proto.BarrageType[e.ctype] ? e.ctype : y.jackfruit_proto.BarrageType[e.ctype] : e.ctype), null != e.content && e.hasOwnProperty("content") && (r.content = e.content), null != e.playerid && e.hasOwnProperty("playerid") && (r.playerid = e.playerid), null != e.nickname && e.hasOwnProperty("nickname") && (r.nickname = e.nickname), null != e.avatar && e.hasOwnProperty("avatar") && (r.avatar = e.avatar), null != e.send_time && e.hasOwnProperty("send_time") && ("number" == typeof e.send_time ? r.send_time = t.longs === String ? String(e.send_time) : e.send_time : r.send_time = t.longs === String ? f.Long.prototype.toString.call(e.send_time) : t.longs === Number ? new f.LongBits(e.send_time.low >>> 0, e.send_time.high >>> 0).toNumber() : e.send_time), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.NoticeSendBarrage"
            }, e
        }(), l.BarrageCountReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.BarrageCountReq; e.pos < r;) {
                    var n = e.uint32();
                    e.skipType(7 & n)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof y.jackfruit_proto.BarrageCountReq ? e : new y.jackfruit_proto.BarrageCountReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.BarrageCountReq"
            }, e
        }(), l.BarrageCountRsp = function() {
            function e(e) {
                if (this.Infos = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.error = 0, e.prototype.Infos = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.error && Object.hasOwnProperty.call(e, "error") && t.uint32(8).int32(e.error), null != e.Infos && e.Infos.length)
                    for (var r = 0; r < e.Infos.length; ++r) y.jackfruit_proto.BarrageCount.encode(e.Infos[r], t.uint32(18).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.BarrageCountRsp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.error = e.int32();
                            break;
                        case 2:
                            o.Infos && o.Infos.length || (o.Infos = []), o.Infos.push(y.jackfruit_proto.BarrageCount.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.error && e.hasOwnProperty("error")) switch (e.error) {
                    default:
                        return "error: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                if (null != e.Infos && e.hasOwnProperty("Infos")) {
                    if (!Array.isArray(e.Infos)) return "Infos: array expected";
                    for (var t = 0; t < e.Infos.length; ++t) {
                        var r = y.jackfruit_proto.BarrageCount.verify(e.Infos[t]);
                        if (r) return "Infos." + r
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.BarrageCountRsp) return e;
                var t = new y.jackfruit_proto.BarrageCountRsp;
                switch (e.error) {
                    default:
                        if ("number" == typeof e.error) {
                            t.error = e.error;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.error = 0;
                        break;
                    case "OK":
                    case 1:
                        t.error = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.error = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.error = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.error = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.error = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.error = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.error = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.error = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.error = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.error = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.error = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.error = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.error = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.error = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.error = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.error = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.error = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.error = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.error = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.error = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.error = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.error = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.error = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.error = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.error = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.error = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.error = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.error = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.error = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.error = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.error = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.error = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.error = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.error = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.error = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.error = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.error = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.error = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.error = 1215
                }
                if (e.Infos) {
                    if (!Array.isArray(e.Infos)) throw TypeError(".jackfruit_proto.BarrageCountRsp.Infos: array expected");
                    t.Infos = [];
                    for (var r = 0; r < e.Infos.length; ++r) {
                        if ("object" != typeof e.Infos[r]) throw TypeError(".jackfruit_proto.BarrageCountRsp.Infos: object expected");
                        t.Infos[r] = y.jackfruit_proto.BarrageCount.fromObject(e.Infos[r])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.Infos = []), t.defaults && (r.error = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.error && e.hasOwnProperty("error") && (r.error = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.error] ? e.error : y.jackfruit_proto.ErrorCode[e.error] : e.error), e.Infos && e.Infos.length) {
                    r.Infos = [];
                    for (var o = 0; o < e.Infos.length; ++o) r.Infos[o] = y.jackfruit_proto.BarrageCount.toObject(e.Infos[o], t)
                }
                return r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.BarrageCountRsp"
            }, e
        }(), l.BarrageCount = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.BarrageId = 0, e.prototype.UseCount = f.Long ? f.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.BarrageId && Object.hasOwnProperty.call(e, "BarrageId") && t.uint32(8).uint32(e.BarrageId), null != e.UseCount && Object.hasOwnProperty.call(e, "UseCount") && t.uint32(16).uint64(e.UseCount), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.BarrageCount; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.BarrageId = e.uint32();
                            break;
                        case 2:
                            o.UseCount = e.uint64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.BarrageId && e.hasOwnProperty("BarrageId") && !f.isInteger(e.BarrageId) ? "BarrageId: integer expected" : null != e.UseCount && e.hasOwnProperty("UseCount") && !(f.isInteger(e.UseCount) || e.UseCount && f.isInteger(e.UseCount.low) && f.isInteger(e.UseCount.high)) ? "UseCount: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.BarrageCount) return e;
                var t = new y.jackfruit_proto.BarrageCount;
                return null != e.BarrageId && (t.BarrageId = e.BarrageId >>> 0), null != e.UseCount && (f.Long ? (t.UseCount = f.Long.fromValue(e.UseCount)).unsigned = !0 : "string" == typeof e.UseCount ? t.UseCount = parseInt(e.UseCount, 10) : "number" == typeof e.UseCount ? t.UseCount = e.UseCount : "object" == typeof e.UseCount && (t.UseCount = new f.LongBits(e.UseCount.low >>> 0, e.UseCount.high >>> 0).toNumber(!0))), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults)
                    if (r.BarrageId = 0, f.Long) {
                        var o = new f.Long(0, 0, !0);
                        r.UseCount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.UseCount = t.longs === String ? "0" : 0;
                return null != e.BarrageId && e.hasOwnProperty("BarrageId") && (r.BarrageId = e.BarrageId), null != e.UseCount && e.hasOwnProperty("UseCount") && ("number" == typeof e.UseCount ? r.UseCount = t.longs === String ? String(e.UseCount) : e.UseCount : r.UseCount = t.longs === String ? f.Long.prototype.toString.call(e.UseCount) : t.longs === Number ? new f.LongBits(e.UseCount.low >>> 0, e.UseCount.high >>> 0).toNumber(!0) : e.UseCount), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.BarrageCount"
            }, e
        }(), l.ShowPlaceCardsNotify = function() {
            function e(e) {
                if (this.player = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.player = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.player && e.player.length)
                    for (var r = 0; r < e.player.length; ++r) y.jackfruit_proto.PlayerInfo.encode(e.player[r], t.uint32(10).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.ShowPlaceCardsNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.player && o.player.length || (o.player = []), o.player.push(y.jackfruit_proto.PlayerInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.player && e.hasOwnProperty("player")) {
                    if (!Array.isArray(e.player)) return "player: array expected";
                    for (var t = 0; t < e.player.length; ++t) {
                        var r = y.jackfruit_proto.PlayerInfo.verify(e.player[t]);
                        if (r) return "player." + r
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.ShowPlaceCardsNotify) return e;
                var t = new y.jackfruit_proto.ShowPlaceCardsNotify;
                if (e.player) {
                    if (!Array.isArray(e.player)) throw TypeError(".jackfruit_proto.ShowPlaceCardsNotify.player: array expected");
                    t.player = [];
                    for (var r = 0; r < e.player.length; ++r) {
                        if ("object" != typeof e.player[r]) throw TypeError(".jackfruit_proto.ShowPlaceCardsNotify.player: object expected");
                        t.player[r] = y.jackfruit_proto.PlayerInfo.fromObject(e.player[r])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.player = []), e.player && e.player.length) {
                    r.player = [];
                    for (var o = 0; o < e.player.length; ++o) r.player[o] = y.jackfruit_proto.PlayerInfo.toObject(e.player[o], t)
                }
                return r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.ShowPlaceCardsNotify"
            }, e
        }(), l.WaitingOtherPlayerNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.WaitingOtherPlayerNotify; e.pos < r;) {
                    var n = e.uint32();
                    e.skipType(7 & n)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof y.jackfruit_proto.WaitingOtherPlayerNotify ? e : new y.jackfruit_proto.WaitingOtherPlayerNotify
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.WaitingOtherPlayerNotify"
            }, e
        }(), l.CanOperationNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.changeTable = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.changeTable && Object.hasOwnProperty.call(e, "changeTable") && t.uint32(8).bool(e.changeTable), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.CanOperationNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.changeTable = e.bool();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.changeTable && e.hasOwnProperty("changeTable") && "boolean" != typeof e.changeTable ? "changeTable: boolean expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.CanOperationNotify) return e;
                var t = new y.jackfruit_proto.CanOperationNotify;
                return null != e.changeTable && (t.changeTable = Boolean(e.changeTable)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.changeTable = !1), null != e.changeTable && e.hasOwnProperty("changeTable") && (r.changeTable = e.changeTable), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.CanOperationNotify"
            }, e
        }(), l.ChangeTableReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.ChangeTableReq; e.pos < r;) {
                    var n = e.uint32();
                    e.skipType(7 & n)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof y.jackfruit_proto.ChangeTableReq ? e : new y.jackfruit_proto.ChangeTableReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.ChangeTableReq"
            }, e
        }(), l.ChangeTableResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.ChangeTableResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.ChangeTableResp) return e;
                var t = new y.jackfruit_proto.ChangeTableResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.ChangeTableResp"
            }, e
        }(), l.SettleReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.SettleReq; e.pos < r;) {
                    var n = e.uint32();
                    e.skipType(7 & n)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof y.jackfruit_proto.SettleReq ? e : new y.jackfruit_proto.SettleReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.SettleReq"
            }, e
        }(), l.SettleResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.prototype.settleScore = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.settleAmount = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.settleScore && Object.hasOwnProperty.call(e, "settleScore") && t.uint32(16).int64(e.settleScore), null != e.settleAmount && Object.hasOwnProperty.call(e, "settleAmount") && t.uint32(24).int64(e.settleAmount), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.SettleResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        case 2:
                            o.settleScore = e.int64();
                            break;
                        case 3:
                            o.settleAmount = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                return null != e.settleScore && e.hasOwnProperty("settleScore") && !(f.isInteger(e.settleScore) || e.settleScore && f.isInteger(e.settleScore.low) && f.isInteger(e.settleScore.high)) ? "settleScore: integer|Long expected" : null != e.settleAmount && e.hasOwnProperty("settleAmount") && !(f.isInteger(e.settleAmount) || e.settleAmount && f.isInteger(e.settleAmount.low) && f.isInteger(e.settleAmount.high)) ? "settleAmount: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.SettleResp) return e;
                var t = new y.jackfruit_proto.SettleResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                return null != e.settleScore && (f.Long ? (t.settleScore = f.Long.fromValue(e.settleScore)).unsigned = !1 : "string" == typeof e.settleScore ? t.settleScore = parseInt(e.settleScore, 10) : "number" == typeof e.settleScore ? t.settleScore = e.settleScore : "object" == typeof e.settleScore && (t.settleScore = new f.LongBits(e.settleScore.low >>> 0, e.settleScore.high >>> 0).toNumber())), null != e.settleAmount && (f.Long ? (t.settleAmount = f.Long.fromValue(e.settleAmount)).unsigned = !1 : "string" == typeof e.settleAmount ? t.settleAmount = parseInt(e.settleAmount, 10) : "number" == typeof e.settleAmount ? t.settleAmount = e.settleAmount : "object" == typeof e.settleAmount && (t.settleAmount = new f.LongBits(e.settleAmount.low >>> 0, e.settleAmount.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults) {
                    if (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0, f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.settleScore = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.settleScore = t.longs === String ? "0" : 0;
                    f.Long ? (o = new f.Long(0, 0, !1), r.settleAmount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.settleAmount = t.longs === String ? "0" : 0
                }
                return null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), null != e.settleScore && e.hasOwnProperty("settleScore") && ("number" == typeof e.settleScore ? r.settleScore = t.longs === String ? String(e.settleScore) : e.settleScore : r.settleScore = t.longs === String ? f.Long.prototype.toString.call(e.settleScore) : t.longs === Number ? new f.LongBits(e.settleScore.low >>> 0, e.settleScore.high >>> 0).toNumber() : e.settleScore), null != e.settleAmount && e.hasOwnProperty("settleAmount") && ("number" == typeof e.settleAmount ? r.settleAmount = t.longs === String ? String(e.settleAmount) : e.settleAmount : r.settleAmount = t.longs === String ? f.Long.prototype.toString.call(e.settleAmount) : t.longs === Number ? new f.LongBits(e.settleAmount.low >>> 0, e.settleAmount.high >>> 0).toNumber() : e.settleAmount), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.SettleResp"
            }, e
        }(), l.PlayerInfoSyncNotify = function() {
            function e(e) {
                if (this.playerList = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.playerList = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.playerList && e.playerList.length)
                    for (var r = 0; r < e.playerList.length; ++r) y.jackfruit_proto.PlayerInfo.encode(e.playerList[r], t.uint32(10).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.PlayerInfoSyncNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.playerList && o.playerList.length || (o.playerList = []), o.playerList.push(y.jackfruit_proto.PlayerInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.playerList && e.hasOwnProperty("playerList")) {
                    if (!Array.isArray(e.playerList)) return "playerList: array expected";
                    for (var t = 0; t < e.playerList.length; ++t) {
                        var r = y.jackfruit_proto.PlayerInfo.verify(e.playerList[t]);
                        if (r) return "playerList." + r
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.PlayerInfoSyncNotify) return e;
                var t = new y.jackfruit_proto.PlayerInfoSyncNotify;
                if (e.playerList) {
                    if (!Array.isArray(e.playerList)) throw TypeError(".jackfruit_proto.PlayerInfoSyncNotify.playerList: array expected");
                    t.playerList = [];
                    for (var r = 0; r < e.playerList.length; ++r) {
                        if ("object" != typeof e.playerList[r]) throw TypeError(".jackfruit_proto.PlayerInfoSyncNotify.playerList: object expected");
                        t.playerList[r] = y.jackfruit_proto.PlayerInfo.fromObject(e.playerList[r])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.playerList = []), e.playerList && e.playerList.length) {
                    r.playerList = [];
                    for (var o = 0; o < e.playerList.length; ++o) r.playerList[o] = y.jackfruit_proto.PlayerInfo.toObject(e.playerList[o], t)
                }
                return r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.PlayerInfoSyncNotify"
            }, e
        }(), l.StartMatchNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.startTime = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.startTime && Object.hasOwnProperty.call(e, "startTime") && t.uint32(8).int64(e.startTime), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.StartMatchNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.startTime = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.startTime && e.hasOwnProperty("startTime") && !(f.isInteger(e.startTime) || e.startTime && f.isInteger(e.startTime.low) && f.isInteger(e.startTime.high)) ? "startTime: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.StartMatchNotify) return e;
                var t = new y.jackfruit_proto.StartMatchNotify;
                return null != e.startTime && (f.Long ? (t.startTime = f.Long.fromValue(e.startTime)).unsigned = !1 : "string" == typeof e.startTime ? t.startTime = parseInt(e.startTime, 10) : "number" == typeof e.startTime ? t.startTime = e.startTime : "object" == typeof e.startTime && (t.startTime = new f.LongBits(e.startTime.low >>> 0, e.startTime.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults)
                    if (f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.startTime = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.startTime = t.longs === String ? "0" : 0;
                return null != e.startTime && e.hasOwnProperty("startTime") && ("number" == typeof e.startTime ? r.startTime = t.longs === String ? String(e.startTime) : e.startTime : r.startTime = t.longs === String ? f.Long.prototype.toString.call(e.startTime) : t.longs === Number ? new f.LongBits(e.startTime.low >>> 0, e.startTime.high >>> 0).toNumber() : e.startTime), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.StartMatchNotify"
            }, e
        }(), l.MatchResultNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomId = 0, e.prototype.result = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), null != e.result && Object.hasOwnProperty.call(e, "result") && t.uint32(16).int32(e.result), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.MatchResultNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomId = e.int32();
                            break;
                        case 2:
                            o.result = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId) ? "roomId: integer expected" : null != e.result && e.hasOwnProperty("result") && !f.isInteger(e.result) ? "result: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.MatchResultNotify) return e;
                var t = new y.jackfruit_proto.MatchResultNotify;
                return null != e.roomId && (t.roomId = 0 | e.roomId), null != e.result && (t.result = 0 | e.result), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.roomId = 0, r.result = 0), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), null != e.result && e.hasOwnProperty("result") && (r.result = e.result), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.MatchResultNotify"
            }, e
        }(), l.GetGameUUIdsReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.GetGameUUIdsReq; e.pos < r;) {
                    var n = e.uint32();
                    e.skipType(7 & n)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof y.jackfruit_proto.GetGameUUIdsReq ? e : new y.jackfruit_proto.GetGameUUIdsReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.GetGameUUIdsReq"
            }, e
        }(), l.GetGameUUIdsResp = function() {
            function e(e) {
                if (this.list = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.prototype.Total = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.Page = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.list = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.Total && Object.hasOwnProperty.call(e, "Total") && t.uint32(16).int64(e.Total), null != e.Page && Object.hasOwnProperty.call(e, "Page") && t.uint32(24).int64(e.Page), null != e.list && e.list.length)
                    for (var r = 0; r < e.list.length; ++r) y.jackfruit_proto.JsStringGameUUid.encode(e.list[r], t.uint32(34).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.GetGameUUIdsResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        case 2:
                            o.Total = e.int64();
                            break;
                        case 3:
                            o.Page = e.int64();
                            break;
                        case 4:
                            o.list && o.list.length || (o.list = []), o.list.push(y.jackfruit_proto.JsStringGameUUid.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                if (null != e.Total && e.hasOwnProperty("Total") && !(f.isInteger(e.Total) || e.Total && f.isInteger(e.Total.low) && f.isInteger(e.Total.high))) return "Total: integer|Long expected";
                if (null != e.Page && e.hasOwnProperty("Page") && !(f.isInteger(e.Page) || e.Page && f.isInteger(e.Page.low) && f.isInteger(e.Page.high))) return "Page: integer|Long expected";
                if (null != e.list && e.hasOwnProperty("list")) {
                    if (!Array.isArray(e.list)) return "list: array expected";
                    for (var t = 0; t < e.list.length; ++t) {
                        var r = y.jackfruit_proto.JsStringGameUUid.verify(e.list[t]);
                        if (r) return "list." + r
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.GetGameUUIdsResp) return e;
                var t = new y.jackfruit_proto.GetGameUUIdsResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                if (null != e.Total && (f.Long ? (t.Total = f.Long.fromValue(e.Total)).unsigned = !1 : "string" == typeof e.Total ? t.Total = parseInt(e.Total, 10) : "number" == typeof e.Total ? t.Total = e.Total : "object" == typeof e.Total && (t.Total = new f.LongBits(e.Total.low >>> 0, e.Total.high >>> 0).toNumber())), null != e.Page && (f.Long ? (t.Page = f.Long.fromValue(e.Page)).unsigned = !1 : "string" == typeof e.Page ? t.Page = parseInt(e.Page, 10) : "number" == typeof e.Page ? t.Page = e.Page : "object" == typeof e.Page && (t.Page = new f.LongBits(e.Page.low >>> 0, e.Page.high >>> 0).toNumber())), e.list) {
                    if (!Array.isArray(e.list)) throw TypeError(".jackfruit_proto.GetGameUUIdsResp.list: array expected");
                    t.list = [];
                    for (var r = 0; r < e.list.length; ++r) {
                        if ("object" != typeof e.list[r]) throw TypeError(".jackfruit_proto.GetGameUUIdsResp.list: object expected");
                        t.list[r] = y.jackfruit_proto.JsStringGameUUid.fromObject(e.list[r])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.list = []), t.defaults) {
                    if (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0, f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.Total = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.Total = t.longs === String ? "0" : 0;
                    f.Long ? (o = new f.Long(0, 0, !1), r.Page = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.Page = t.longs === String ? "0" : 0
                }
                if (null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), null != e.Total && e.hasOwnProperty("Total") && ("number" == typeof e.Total ? r.Total = t.longs === String ? String(e.Total) : e.Total : r.Total = t.longs === String ? f.Long.prototype.toString.call(e.Total) : t.longs === Number ? new f.LongBits(e.Total.low >>> 0, e.Total.high >>> 0).toNumber() : e.Total), null != e.Page && e.hasOwnProperty("Page") && ("number" == typeof e.Page ? r.Page = t.longs === String ? String(e.Page) : e.Page : r.Page = t.longs === String ? f.Long.prototype.toString.call(e.Page) : t.longs === Number ? new f.LongBits(e.Page.low >>> 0, e.Page.high >>> 0).toNumber() : e.Page), e.list && e.list.length) {
                    r.list = [];
                    for (var n = 0; n < e.list.length; ++n) r.list[n] = y.jackfruit_proto.JsStringGameUUid.toObject(e.list[n], t)
                }
                return r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.GetGameUUIdsResp"
            }, e
        }(), l.JsStringGameUUid = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.game_uuid_js = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.game_uuid_js && Object.hasOwnProperty.call(e, "game_uuid_js") && t.uint32(10).string(e.game_uuid_js), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.JsStringGameUUid; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.game_uuid_js = e.string();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.game_uuid_js && e.hasOwnProperty("game_uuid_js") && !f.isString(e.game_uuid_js) ? "game_uuid_js: string expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.JsStringGameUUid) return e;
                var t = new y.jackfruit_proto.JsStringGameUUid;
                return null != e.game_uuid_js && (t.game_uuid_js = String(e.game_uuid_js)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.game_uuid_js = ""), null != e.game_uuid_js && e.hasOwnProperty("game_uuid_js") && (r.game_uuid_js = e.game_uuid_js), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.JsStringGameUUid"
            }, e
        }(), l.ModifyPlaceCardsNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomId = 0, e.prototype.seatId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), null != e.seatId && Object.hasOwnProperty.call(e, "seatId") && t.uint32(16).int32(e.seatId), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.ModifyPlaceCardsNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomId = e.int32();
                            break;
                        case 2:
                            o.seatId = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId) ? "roomId: integer expected" : null != e.seatId && e.hasOwnProperty("seatId") && !f.isInteger(e.seatId) ? "seatId: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.ModifyPlaceCardsNotify) return e;
                var t = new y.jackfruit_proto.ModifyPlaceCardsNotify;
                return null != e.roomId && (t.roomId = 0 | e.roomId), null != e.seatId && (t.seatId = 0 | e.seatId), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.roomId = 0, r.seatId = 0), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), null != e.seatId && e.hasOwnProperty("seatId") && (r.seatId = e.seatId), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.ModifyPlaceCardsNotify"
            }, e
        }(), l.BrandBarrageType = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "BrandBarrageType_DUMMY"] = 0, t[e[1] = "LIKE"] = 1, t[e[2] = "DESPISE"] = 2, t
        }(), l.BrandBarrageNotify = function() {
            function e(e) {
                if (this.infos = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomId = 0, e.prototype.infos = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), null != e.infos && e.infos.length)
                    for (var r = 0; r < e.infos.length; ++r) y.jackfruit_proto.BrandBarrageInfo.encode(e.infos[r], t.uint32(18).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.BrandBarrageNotify; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomId = e.int32();
                            break;
                        case 2:
                            o.infos && o.infos.length || (o.infos = []), o.infos.push(y.jackfruit_proto.BrandBarrageInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.roomId && e.hasOwnProperty("roomId") && !f.isInteger(e.roomId)) return "roomId: integer expected";
                if (null != e.infos && e.hasOwnProperty("infos")) {
                    if (!Array.isArray(e.infos)) return "infos: array expected";
                    for (var t = 0; t < e.infos.length; ++t) {
                        var r = y.jackfruit_proto.BrandBarrageInfo.verify(e.infos[t]);
                        if (r) return "infos." + r
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.BrandBarrageNotify) return e;
                var t = new y.jackfruit_proto.BrandBarrageNotify;
                if (null != e.roomId && (t.roomId = 0 | e.roomId), e.infos) {
                    if (!Array.isArray(e.infos)) throw TypeError(".jackfruit_proto.BrandBarrageNotify.infos: array expected");
                    t.infos = [];
                    for (var r = 0; r < e.infos.length; ++r) {
                        if ("object" != typeof e.infos[r]) throw TypeError(".jackfruit_proto.BrandBarrageNotify.infos: object expected");
                        t.infos[r] = y.jackfruit_proto.BrandBarrageInfo.fromObject(e.infos[r])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.infos = []), t.defaults && (r.roomId = 0), null != e.roomId && e.hasOwnProperty("roomId") && (r.roomId = e.roomId), e.infos && e.infos.length) {
                    r.infos = [];
                    for (var o = 0; o < e.infos.length; ++o) r.infos[o] = y.jackfruit_proto.BrandBarrageInfo.toObject(e.infos[o], t)
                }
                return r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.BrandBarrageNotify"
            }, e
        }(), l.BrandBarrageInfo = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.card = null, e.prototype.type = 0, e.prototype.index = 0, e.prototype.hasReverse = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.card && Object.hasOwnProperty.call(e, "card") && y.jackfruit_proto.CardItem.encode(e.card, t.uint32(10).fork()).ldelim(), null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(16).int32(e.type), null != e.index && Object.hasOwnProperty.call(e, "index") && t.uint32(24).int32(e.index), null != e.hasReverse && Object.hasOwnProperty.call(e, "hasReverse") && t.uint32(32).bool(e.hasReverse), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.BrandBarrageInfo; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.card = y.jackfruit_proto.CardItem.decode(e, e.uint32());
                            break;
                        case 2:
                            o.type = e.int32();
                            break;
                        case 3:
                            o.index = e.int32();
                            break;
                        case 4:
                            o.hasReverse = e.bool();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.card && e.hasOwnProperty("card")) {
                    var t = y.jackfruit_proto.CardItem.verify(e.card);
                    if (t) return "card." + t
                }
                if (null != e.type && e.hasOwnProperty("type")) switch (e.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                }
                return null != e.index && e.hasOwnProperty("index") && !f.isInteger(e.index) ? "index: integer expected" : null != e.hasReverse && e.hasOwnProperty("hasReverse") && "boolean" != typeof e.hasReverse ? "hasReverse: boolean expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.BrandBarrageInfo) return e;
                var t = new y.jackfruit_proto.BrandBarrageInfo;
                if (null != e.card) {
                    if ("object" != typeof e.card) throw TypeError(".jackfruit_proto.BrandBarrageInfo.card: object expected");
                    t.card = y.jackfruit_proto.CardItem.fromObject(e.card)
                }
                switch (e.type) {
                    default:
                        if ("number" == typeof e.type) {
                            t.type = e.type;
                            break
                        }
                        break;
                    case "BrandBarrageType_DUMMY":
                    case 0:
                        t.type = 0;
                        break;
                    case "LIKE":
                    case 1:
                        t.type = 1;
                        break;
                    case "DESPISE":
                    case 2:
                        t.type = 2
                }
                return null != e.index && (t.index = 0 | e.index), null != e.hasReverse && (t.hasReverse = Boolean(e.hasReverse)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.card = null, r.type = t.enums === String ? "BrandBarrageType_DUMMY" : 0, r.index = 0, r.hasReverse = !1), null != e.card && e.hasOwnProperty("card") && (r.card = y.jackfruit_proto.CardItem.toObject(e.card, t)), null != e.type && e.hasOwnProperty("type") && (r.type = t.enums === String ? void 0 === y.jackfruit_proto.BrandBarrageType[e.type] ? e.type : y.jackfruit_proto.BrandBarrageType[e.type] : e.type), null != e.index && e.hasOwnProperty("index") && (r.index = e.index), null != e.hasReverse && e.hasOwnProperty("hasReverse") && (r.hasReverse = e.hasReverse), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.BrandBarrageInfo"
            }, e
        }(), l.JackpotDataReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.ante = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.ante && Object.hasOwnProperty.call(e, "ante") && t.uint32(8).int64(e.ante), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.JackpotDataReq; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.ante = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.ante && e.hasOwnProperty("ante") && !(f.isInteger(e.ante) || e.ante && f.isInteger(e.ante.low) && f.isInteger(e.ante.high)) ? "ante: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.JackpotDataReq) return e;
                var t = new y.jackfruit_proto.JackpotDataReq;
                return null != e.ante && (f.Long ? (t.ante = f.Long.fromValue(e.ante)).unsigned = !1 : "string" == typeof e.ante ? t.ante = parseInt(e.ante, 10) : "number" == typeof e.ante ? t.ante = e.ante : "object" == typeof e.ante && (t.ante = new f.LongBits(e.ante.low >>> 0, e.ante.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults)
                    if (f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.ante = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.ante = t.longs === String ? "0" : 0;
                return null != e.ante && e.hasOwnProperty("ante") && ("number" == typeof e.ante ? r.ante = t.longs === String ? String(e.ante) : e.ante : r.ante = t.longs === String ? f.Long.prototype.toString.call(e.ante) : t.longs === Number ? new f.LongBits(e.ante.low >>> 0, e.ante.high >>> 0).toNumber() : e.ante), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.JackpotDataReq"
            }, e
        }(), l.JackpotDataResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.prototype.data = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.data && Object.hasOwnProperty.call(e, "data") && y.jackfruit_proto.JackpotDataInfo.encode(e.data, t.uint32(18).fork()).ldelim(), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.JackpotDataResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        case 2:
                            o.data = y.jackfruit_proto.JackpotDataInfo.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                if (null != e.data && e.hasOwnProperty("data")) {
                    var t = y.jackfruit_proto.JackpotDataInfo.verify(e.data);
                    if (t) return "data." + t
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.JackpotDataResp) return e;
                var t = new y.jackfruit_proto.JackpotDataResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                if (null != e.data) {
                    if ("object" != typeof e.data) throw TypeError(".jackfruit_proto.JackpotDataResp.data: object expected");
                    t.data = y.jackfruit_proto.JackpotDataInfo.fromObject(e.data)
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0, r.data = null), null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), null != e.data && e.hasOwnProperty("data") && (r.data = y.jackfruit_proto.JackpotDataInfo.toObject(e.data, t)), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.JackpotDataResp"
            }, e
        }(), l.JackpotDataInfo = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.leftAmount = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.boundaryScore = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.contrScore = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.huangTongPer = 0, e.prototype.siTiaoPer = 0, e.prototype.tongHuaShunPer = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.leftAmount && Object.hasOwnProperty.call(e, "leftAmount") && t.uint32(8).int64(e.leftAmount), null != e.boundaryScore && Object.hasOwnProperty.call(e, "boundaryScore") && t.uint32(16).int64(e.boundaryScore), null != e.contrScore && Object.hasOwnProperty.call(e, "contrScore") && t.uint32(24).int64(e.contrScore), null != e.huangTongPer && Object.hasOwnProperty.call(e, "huangTongPer") && t.uint32(32).uint32(e.huangTongPer), null != e.siTiaoPer && Object.hasOwnProperty.call(e, "siTiaoPer") && t.uint32(40).uint32(e.siTiaoPer), null != e.tongHuaShunPer && Object.hasOwnProperty.call(e, "tongHuaShunPer") && t.uint32(48).uint32(e.tongHuaShunPer), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.JackpotDataInfo; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.leftAmount = e.int64();
                            break;
                        case 2:
                            o.boundaryScore = e.int64();
                            break;
                        case 3:
                            o.contrScore = e.int64();
                            break;
                        case 4:
                            o.huangTongPer = e.uint32();
                            break;
                        case 5:
                            o.siTiaoPer = e.uint32();
                            break;
                        case 6:
                            o.tongHuaShunPer = e.uint32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.leftAmount && e.hasOwnProperty("leftAmount") && !(f.isInteger(e.leftAmount) || e.leftAmount && f.isInteger(e.leftAmount.low) && f.isInteger(e.leftAmount.high)) ? "leftAmount: integer|Long expected" : null != e.boundaryScore && e.hasOwnProperty("boundaryScore") && !(f.isInteger(e.boundaryScore) || e.boundaryScore && f.isInteger(e.boundaryScore.low) && f.isInteger(e.boundaryScore.high)) ? "boundaryScore: integer|Long expected" : null != e.contrScore && e.hasOwnProperty("contrScore") && !(f.isInteger(e.contrScore) || e.contrScore && f.isInteger(e.contrScore.low) && f.isInteger(e.contrScore.high)) ? "contrScore: integer|Long expected" : null != e.huangTongPer && e.hasOwnProperty("huangTongPer") && !f.isInteger(e.huangTongPer) ? "huangTongPer: integer expected" : null != e.siTiaoPer && e.hasOwnProperty("siTiaoPer") && !f.isInteger(e.siTiaoPer) ? "siTiaoPer: integer expected" : null != e.tongHuaShunPer && e.hasOwnProperty("tongHuaShunPer") && !f.isInteger(e.tongHuaShunPer) ? "tongHuaShunPer: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.JackpotDataInfo) return e;
                var t = new y.jackfruit_proto.JackpotDataInfo;
                return null != e.leftAmount && (f.Long ? (t.leftAmount = f.Long.fromValue(e.leftAmount)).unsigned = !1 : "string" == typeof e.leftAmount ? t.leftAmount = parseInt(e.leftAmount, 10) : "number" == typeof e.leftAmount ? t.leftAmount = e.leftAmount : "object" == typeof e.leftAmount && (t.leftAmount = new f.LongBits(e.leftAmount.low >>> 0, e.leftAmount.high >>> 0).toNumber())), null != e.boundaryScore && (f.Long ? (t.boundaryScore = f.Long.fromValue(e.boundaryScore)).unsigned = !1 : "string" == typeof e.boundaryScore ? t.boundaryScore = parseInt(e.boundaryScore, 10) : "number" == typeof e.boundaryScore ? t.boundaryScore = e.boundaryScore : "object" == typeof e.boundaryScore && (t.boundaryScore = new f.LongBits(e.boundaryScore.low >>> 0, e.boundaryScore.high >>> 0).toNumber())), null != e.contrScore && (f.Long ? (t.contrScore = f.Long.fromValue(e.contrScore)).unsigned = !1 : "string" == typeof e.contrScore ? t.contrScore = parseInt(e.contrScore, 10) : "number" == typeof e.contrScore ? t.contrScore = e.contrScore : "object" == typeof e.contrScore && (t.contrScore = new f.LongBits(e.contrScore.low >>> 0, e.contrScore.high >>> 0).toNumber())), null != e.huangTongPer && (t.huangTongPer = e.huangTongPer >>> 0), null != e.siTiaoPer && (t.siTiaoPer = e.siTiaoPer >>> 0), null != e.tongHuaShunPer && (t.tongHuaShunPer = e.tongHuaShunPer >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults) {
                    if (f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.leftAmount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.leftAmount = t.longs === String ? "0" : 0;
                    f.Long ? (o = new f.Long(0, 0, !1), r.boundaryScore = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.boundaryScore = t.longs === String ? "0" : 0, f.Long ? (o = new f.Long(0, 0, !1), r.contrScore = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.contrScore = t.longs === String ? "0" : 0, r.huangTongPer = 0, r.siTiaoPer = 0, r.tongHuaShunPer = 0
                }
                return null != e.leftAmount && e.hasOwnProperty("leftAmount") && ("number" == typeof e.leftAmount ? r.leftAmount = t.longs === String ? String(e.leftAmount) : e.leftAmount : r.leftAmount = t.longs === String ? f.Long.prototype.toString.call(e.leftAmount) : t.longs === Number ? new f.LongBits(e.leftAmount.low >>> 0, e.leftAmount.high >>> 0).toNumber() : e.leftAmount), null != e.boundaryScore && e.hasOwnProperty("boundaryScore") && ("number" == typeof e.boundaryScore ? r.boundaryScore = t.longs === String ? String(e.boundaryScore) : e.boundaryScore : r.boundaryScore = t.longs === String ? f.Long.prototype.toString.call(e.boundaryScore) : t.longs === Number ? new f.LongBits(e.boundaryScore.low >>> 0, e.boundaryScore.high >>> 0).toNumber() : e.boundaryScore), null != e.contrScore && e.hasOwnProperty("contrScore") && ("number" == typeof e.contrScore ? r.contrScore = t.longs === String ? String(e.contrScore) : e.contrScore : r.contrScore = t.longs === String ? f.Long.prototype.toString.call(e.contrScore) : t.longs === Number ? new f.LongBits(e.contrScore.low >>> 0, e.contrScore.high >>> 0).toNumber() : e.contrScore), null != e.huangTongPer && e.hasOwnProperty("huangTongPer") && (r.huangTongPer = e.huangTongPer), null != e.siTiaoPer && e.hasOwnProperty("siTiaoPer") && (r.siTiaoPer = e.siTiaoPer), null != e.tongHuaShunPer && e.hasOwnProperty("tongHuaShunPer") && (r.tongHuaShunPer = e.tongHuaShunPer), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.JackpotDataInfo"
            }, e
        }(), l.JackpotAwardListReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.JackpotAwardListReq; e.pos < r;) {
                    var n = e.uint32();
                    e.skipType(7 & n)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof y.jackfruit_proto.JackpotAwardListReq ? e : new y.jackfruit_proto.JackpotAwardListReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.JackpotAwardListReq"
            }, e
        }(), l.JackpotAwardListResp = function() {
            function e(e) {
                if (this.lastData = [], e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.prototype.luckyOne = null, e.prototype.lastData = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.luckyOne && Object.hasOwnProperty.call(e, "luckyOne") && y.jackfruit_proto.JackpotAwardInfo.encode(e.luckyOne, t.uint32(18).fork()).ldelim(), null != e.lastData && e.lastData.length)
                    for (var r = 0; r < e.lastData.length; ++r) y.jackfruit_proto.JackpotAwardInfo.encode(e.lastData[r], t.uint32(26).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.JackpotAwardListResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        case 2:
                            o.luckyOne = y.jackfruit_proto.JackpotAwardInfo.decode(e, e.uint32());
                            break;
                        case 3:
                            o.lastData && o.lastData.length || (o.lastData = []), o.lastData.push(y.jackfruit_proto.JackpotAwardInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                if (null != e.luckyOne && e.hasOwnProperty("luckyOne") && (r = y.jackfruit_proto.JackpotAwardInfo.verify(e.luckyOne))) return "luckyOne." + r;
                if (null != e.lastData && e.hasOwnProperty("lastData")) {
                    if (!Array.isArray(e.lastData)) return "lastData: array expected";
                    for (var t = 0; t < e.lastData.length; ++t) {
                        var r;
                        if (r = y.jackfruit_proto.JackpotAwardInfo.verify(e.lastData[t])) return "lastData." + r
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.JackpotAwardListResp) return e;
                var t = new y.jackfruit_proto.JackpotAwardListResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                if (null != e.luckyOne) {
                    if ("object" != typeof e.luckyOne) throw TypeError(".jackfruit_proto.JackpotAwardListResp.luckyOne: object expected");
                    t.luckyOne = y.jackfruit_proto.JackpotAwardInfo.fromObject(e.luckyOne)
                }
                if (e.lastData) {
                    if (!Array.isArray(e.lastData)) throw TypeError(".jackfruit_proto.JackpotAwardListResp.lastData: array expected");
                    t.lastData = [];
                    for (var r = 0; r < e.lastData.length; ++r) {
                        if ("object" != typeof e.lastData[r]) throw TypeError(".jackfruit_proto.JackpotAwardListResp.lastData: object expected");
                        t.lastData[r] = y.jackfruit_proto.JackpotAwardInfo.fromObject(e.lastData[r])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if ((t.arrays || t.defaults) && (r.lastData = []), t.defaults && (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0, r.luckyOne = null), null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), null != e.luckyOne && e.hasOwnProperty("luckyOne") && (r.luckyOne = y.jackfruit_proto.JackpotAwardInfo.toObject(e.luckyOne, t)), e.lastData && e.lastData.length) {
                    r.lastData = [];
                    for (var o = 0; o < e.lastData.length; ++o) r.lastData[o] = y.jackfruit_proto.JackpotAwardInfo.toObject(e.lastData[o], t)
                }
                return r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.JackpotAwardListResp"
            }, e
        }(), l.JackpotAwardInfo = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.playerId = 0, e.prototype.level = 0, e.prototype.awardAmount = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.awardTime = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.playerName = "", e.prototype.ante = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.playerId && Object.hasOwnProperty.call(e, "playerId") && t.uint32(8).uint32(e.playerId), null != e.level && Object.hasOwnProperty.call(e, "level") && t.uint32(16).int32(e.level), null != e.awardAmount && Object.hasOwnProperty.call(e, "awardAmount") && t.uint32(24).int64(e.awardAmount), null != e.awardTime && Object.hasOwnProperty.call(e, "awardTime") && t.uint32(32).int64(e.awardTime), null != e.playerName && Object.hasOwnProperty.call(e, "playerName") && t.uint32(42).string(e.playerName), null != e.ante && Object.hasOwnProperty.call(e, "ante") && t.uint32(48).int64(e.ante), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.JackpotAwardInfo; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.playerId = e.uint32();
                            break;
                        case 2:
                            o.level = e.int32();
                            break;
                        case 3:
                            o.awardAmount = e.int64();
                            break;
                        case 4:
                            o.awardTime = e.int64();
                            break;
                        case 5:
                            o.playerName = e.string();
                            break;
                        case 6:
                            o.ante = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.playerId && e.hasOwnProperty("playerId") && !f.isInteger(e.playerId)) return "playerId: integer expected";
                if (null != e.level && e.hasOwnProperty("level")) switch (e.level) {
                    default:
                        return "level: enum value expected";
                    case 0:
                    case 10:
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 5:
                    case 4:
                    case 3:
                    case 2:
                    case 1:
                }
                return null != e.awardAmount && e.hasOwnProperty("awardAmount") && !(f.isInteger(e.awardAmount) || e.awardAmount && f.isInteger(e.awardAmount.low) && f.isInteger(e.awardAmount.high)) ? "awardAmount: integer|Long expected" : null != e.awardTime && e.hasOwnProperty("awardTime") && !(f.isInteger(e.awardTime) || e.awardTime && f.isInteger(e.awardTime.low) && f.isInteger(e.awardTime.high)) ? "awardTime: integer|Long expected" : null != e.playerName && e.hasOwnProperty("playerName") && !f.isString(e.playerName) ? "playerName: string expected" : null != e.ante && e.hasOwnProperty("ante") && !(f.isInteger(e.ante) || e.ante && f.isInteger(e.ante.low) && f.isInteger(e.ante.high)) ? "ante: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.JackpotAwardInfo) return e;
                var t = new y.jackfruit_proto.JackpotAwardInfo;
                switch (null != e.playerId && (t.playerId = e.playerId >>> 0), e.level) {
                    default:
                        if ("number" == typeof e.level) {
                            t.level = e.level;
                            break
                        }
                        break;
                    case "Dump":
                    case 0:
                        t.level = 0;
                        break;
                    case "RoyalFlush":
                    case 10:
                        t.level = 10;
                        break;
                    case "StraightFlush":
                    case 9:
                        t.level = 9;
                        break;
                    case "FourOfAKind":
                    case 8:
                        t.level = 8;
                        break;
                    case "FullHouse":
                    case 7:
                        t.level = 7;
                        break;
                    case "Flush":
                    case 6:
                        t.level = 6;
                        break;
                    case "StraightI":
                    case 5:
                        t.level = 5;
                        break;
                    case "ThreeOfAKind":
                    case 4:
                        t.level = 4;
                        break;
                    case "TwoPair":
                    case 3:
                        t.level = 3;
                        break;
                    case "OnePair":
                    case 2:
                        t.level = 2;
                        break;
                    case "HighCard":
                    case 1:
                        t.level = 1
                }
                return null != e.awardAmount && (f.Long ? (t.awardAmount = f.Long.fromValue(e.awardAmount)).unsigned = !1 : "string" == typeof e.awardAmount ? t.awardAmount = parseInt(e.awardAmount, 10) : "number" == typeof e.awardAmount ? t.awardAmount = e.awardAmount : "object" == typeof e.awardAmount && (t.awardAmount = new f.LongBits(e.awardAmount.low >>> 0, e.awardAmount.high >>> 0).toNumber())), null != e.awardTime && (f.Long ? (t.awardTime = f.Long.fromValue(e.awardTime)).unsigned = !1 : "string" == typeof e.awardTime ? t.awardTime = parseInt(e.awardTime, 10) : "number" == typeof e.awardTime ? t.awardTime = e.awardTime : "object" == typeof e.awardTime && (t.awardTime = new f.LongBits(e.awardTime.low >>> 0, e.awardTime.high >>> 0).toNumber())), null != e.playerName && (t.playerName = String(e.playerName)), null != e.ante && (f.Long ? (t.ante = f.Long.fromValue(e.ante)).unsigned = !1 : "string" == typeof e.ante ? t.ante = parseInt(e.ante, 10) : "number" == typeof e.ante ? t.ante = e.ante : "object" == typeof e.ante && (t.ante = new f.LongBits(e.ante.low >>> 0, e.ante.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults) {
                    if (r.playerId = 0, r.level = t.enums === String ? "Dump" : 0, f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.awardAmount = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.awardAmount = t.longs === String ? "0" : 0;
                    f.Long ? (o = new f.Long(0, 0, !1), r.awardTime = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.awardTime = t.longs === String ? "0" : 0, r.playerName = "", f.Long ? (o = new f.Long(0, 0, !1), r.ante = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o) : r.ante = t.longs === String ? "0" : 0
                }
                return null != e.playerId && e.hasOwnProperty("playerId") && (r.playerId = e.playerId), null != e.level && e.hasOwnProperty("level") && (r.level = t.enums === String ? void 0 === y.jackfruit_proto.CardLevel[e.level] ? e.level : y.jackfruit_proto.CardLevel[e.level] : e.level), null != e.awardAmount && e.hasOwnProperty("awardAmount") && ("number" == typeof e.awardAmount ? r.awardAmount = t.longs === String ? String(e.awardAmount) : e.awardAmount : r.awardAmount = t.longs === String ? f.Long.prototype.toString.call(e.awardAmount) : t.longs === Number ? new f.LongBits(e.awardAmount.low >>> 0, e.awardAmount.high >>> 0).toNumber() : e.awardAmount), null != e.awardTime && e.hasOwnProperty("awardTime") && ("number" == typeof e.awardTime ? r.awardTime = t.longs === String ? String(e.awardTime) : e.awardTime : r.awardTime = t.longs === String ? f.Long.prototype.toString.call(e.awardTime) : t.longs === Number ? new f.LongBits(e.awardTime.low >>> 0, e.awardTime.high >>> 0).toNumber() : e.awardTime), null != e.playerName && e.hasOwnProperty("playerName") && (r.playerName = e.playerName), null != e.ante && e.hasOwnProperty("ante") && ("number" == typeof e.ante ? r.ante = t.longs === String ? String(e.ante) : e.ante : r.ante = t.longs === String ? f.Long.prototype.toString.call(e.ante) : t.longs === Number ? new f.LongBits(e.ante.low >>> 0, e.ante.high >>> 0).toNumber() : e.ante), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.JackpotAwardInfo"
            }, e
        }(), l.NotDisturbReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.operate = 0, e.prototype.whoId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.operate && Object.hasOwnProperty.call(e, "operate") && t.uint32(8).uint32(e.operate), null != e.whoId && Object.hasOwnProperty.call(e, "whoId") && t.uint32(16).uint32(e.whoId), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.NotDisturbReq; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.operate = e.uint32();
                            break;
                        case 2:
                            o.whoId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.operate && e.hasOwnProperty("operate") && !f.isInteger(e.operate) ? "operate: integer expected" : null != e.whoId && e.hasOwnProperty("whoId") && !f.isInteger(e.whoId) ? "whoId: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.NotDisturbReq) return e;
                var t = new y.jackfruit_proto.NotDisturbReq;
                return null != e.operate && (t.operate = e.operate >>> 0), null != e.whoId && (t.whoId = e.whoId >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.operate = 0, r.whoId = 0), null != e.operate && e.hasOwnProperty("operate") && (r.operate = e.operate), null != e.whoId && e.hasOwnProperty("whoId") && (r.whoId = e.whoId), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.NotDisturbReq"
            }, e
        }(), l.NotDisturbResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.code = 0, e.prototype.operate = 0, e.prototype.whoId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.operate && Object.hasOwnProperty.call(e, "operate") && t.uint32(16).uint32(e.operate), null != e.whoId && Object.hasOwnProperty.call(e, "whoId") && t.uint32(24).uint32(e.whoId), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.NotDisturbResp; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        case 2:
                            o.operate = e.uint32();
                            break;
                        case 3:
                            o.whoId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 100:
                    case 13e3:
                    case 13001:
                    case 13002:
                    case 13003:
                    case 13004:
                    case 13005:
                    case 13006:
                    case 13007:
                    case 13008:
                    case 13013:
                    case 13018:
                    case 13022:
                    case 13023:
                    case 13025:
                    case 13026:
                    case 13027:
                    case 13028:
                    case 13029:
                    case 13030:
                    case 13031:
                    case 13032:
                    case 13033:
                    case 13034:
                    case 13035:
                    case 13036:
                    case 13037:
                    case 13038:
                    case 13039:
                    case 13040:
                    case 13041:
                    case 13042:
                    case 13043:
                    case 13045:
                    case 3:
                    case 1214:
                    case 22:
                    case 1215:
                }
                return null != e.operate && e.hasOwnProperty("operate") && !f.isInteger(e.operate) ? "operate: integer expected" : null != e.whoId && e.hasOwnProperty("whoId") && !f.isInteger(e.whoId) ? "whoId: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.NotDisturbResp) return e;
                var t = new y.jackfruit_proto.NotDisturbResp;
                switch (e.code) {
                    default:
                        if ("number" == typeof e.code) {
                            t.code = e.code;
                            break
                        }
                        break;
                    case "ErrorCode_DUMMY":
                    case 0:
                        t.code = 0;
                        break;
                    case "OK":
                    case 1:
                        t.code = 1;
                        break;
                    case "FAILED":
                    case 100:
                        t.code = 100;
                        break;
                    case "ROOM_WITHOUT_YOU":
                    case 13e3:
                        t.code = 13e3;
                        break;
                    case "LOW_VERSION":
                    case 13001:
                        t.code = 13001;
                        break;
                    case "INVALID_TOKEN":
                    case 13002:
                        t.code = 13002;
                        break;
                    case "SERVER_BUSY":
                    case 13003:
                        t.code = 13003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 13004:
                        t.code = 13004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 13005:
                        t.code = 13005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 13006:
                        t.code = 13006;
                        break;
                    case "ALREADY_IN_OTHER_GAME":
                    case 13007:
                        t.code = 13007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 13008:
                        t.code = 13008;
                        break;
                    case "STOP_SERVICE":
                    case 13013:
                        t.code = 13013;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 13018:
                        t.code = 13018;
                        break;
                    case "SEAT_ALREADY_BUSY":
                    case 13022:
                        t.code = 13022;
                        break;
                    case "NO_ENOUGH_MONEY":
                    case 13023:
                        t.code = 13023;
                        break;
                    case "NOT_YET_COMPLETED_PLACE_CARDS":
                    case 13025:
                        t.code = 13025;
                        break;
                    case "ALREADY_SIT_DOWN_THIS_SEAT":
                    case 13026:
                        t.code = 13026;
                        break;
                    case "ALREADY_SIT_DOWN_Other_SEAT":
                    case 13027:
                        t.code = 13027;
                        break;
                    case "SEAT_ID_NOT_EXIST":
                    case 13028:
                        t.code = 13028;
                        break;
                    case "NO_PLACE_CARDS":
                    case 13029:
                        t.code = 13029;
                        break;
                    case "BAD_REQ_PARAM":
                    case 13030:
                        t.code = 13030;
                        break;
                    case "DISALLOWED_OPERATION":
                    case 13031:
                        t.code = 13031;
                        break;
                    case "ALREADY_ADD_STAND_UP_LIST":
                    case 13032:
                        t.code = 13032;
                        break;
                    case "CAN_NOT_LEAVE_IN_THE_GAME":
                    case 13033:
                        t.code = 13033;
                        break;
                    case "Table_Player_Or_Owner_Can_Chat":
                    case 13034:
                        t.code = 13034;
                        break;
                    case "Barrage_Sent_Too_Often":
                    case 13035:
                        t.code = 13035;
                        break;
                    case "Action_Delay_Exhausted":
                    case 13036:
                        t.code = 13036;
                        break;
                    case "Player_Limit_BuyIn":
                    case 13037:
                        t.code = 13037;
                        break;
                    case "ALREADY_ADD_LEAVE_LIST":
                    case 13038:
                        t.code = 13038;
                        break;
                    case "NOT_ENOUGH_STAKE":
                    case 13039:
                        t.code = 13039;
                        break;
                    case "BUY_IN_AMOUNT_INVALID":
                    case 13040:
                        t.code = 13040;
                        break;
                    case "CAN_NOT_CHANGE_TABLE":
                    case 13041:
                        t.code = 13041;
                        break;
                    case "NOT_SETTLED_YET":
                    case 13042:
                        t.code = 13042;
                        break;
                    case "BUY_IN_SEAT_WAS_SNATCHED":
                    case 13043:
                        t.code = 13043;
                        break;
                    case "NO_JACKPOT":
                    case 13045:
                        t.code = 13045;
                        break;
                    case "GameServer_Player_Not_Found":
                    case 3:
                        t.code = 3;
                        break;
                    case "GameServer_Send_Barrage_Too_Fast":
                    case 1214:
                        t.code = 1214;
                        break;
                    case "GameServer_RoomID_Not_Found":
                    case 22:
                        t.code = 22;
                        break;
                    case "GameServer_Queue_Barrage_Full":
                    case 1215:
                        t.code = 1215
                }
                return null != e.operate && (t.operate = e.operate >>> 0), null != e.whoId && (t.whoId = e.whoId >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.code = t.enums === String ? "ErrorCode_DUMMY" : 0, r.operate = 0, r.whoId = 0), null != e.code && e.hasOwnProperty("code") && (r.code = t.enums === String ? void 0 === y.jackfruit_proto.ErrorCode[e.code] ? e.code : y.jackfruit_proto.ErrorCode[e.code] : e.code), null != e.operate && e.hasOwnProperty("operate") && (r.operate = e.operate), null != e.whoId && e.hasOwnProperty("whoId") && (r.whoId = e.whoId), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.NotDisturbResp"
            }, e
        }(), l.MagicEmojiRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomid = 0, e.prototype.type = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomid && Object.hasOwnProperty.call(e, "roomid") && t.uint32(8).int32(e.roomid), null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(16).int32(e.type), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.MagicEmojiRequest; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomid = e.int32();
                            break;
                        case 2:
                            o.type = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomid && e.hasOwnProperty("roomid") && !f.isInteger(e.roomid) ? "roomid: integer expected" : null != e.type && e.hasOwnProperty("type") && !f.isInteger(e.type) ? "type: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.MagicEmojiRequest) return e;
                var t = new y.jackfruit_proto.MagicEmojiRequest;
                return null != e.roomid && (t.roomid = 0 | e.roomid), null != e.type && (t.type = 0 | e.type), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.roomid = 0, r.type = 0), null != e.roomid && e.hasOwnProperty("roomid") && (r.roomid = e.roomid), null != e.type && e.hasOwnProperty("type") && (r.type = e.type), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.MagicEmojiRequest"
            }, e
        }(), l.MagicEmojiResponse = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.error = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.error && Object.hasOwnProperty.call(e, "error") && t.uint32(8).int32(e.error), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.MagicEmojiResponse; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.error = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.error && e.hasOwnProperty("error") && !f.isInteger(e.error) ? "error: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.MagicEmojiResponse) return e;
                var t = new y.jackfruit_proto.MagicEmojiResponse;
                return null != e.error && (t.error = 0 | e.error), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.error = 0), null != e.error && e.hasOwnProperty("error") && (r.error = e.error), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.MagicEmojiResponse"
            }, e
        }(), l.MagicEmojiNotice = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.roomid = 0, e.prototype.playerid = 0, e.prototype.type = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomid && Object.hasOwnProperty.call(e, "roomid") && t.uint32(8).int32(e.roomid), null != e.playerid && Object.hasOwnProperty.call(e, "playerid") && t.uint32(16).uint32(e.playerid), null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(24).int32(e.type), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.MagicEmojiNotice; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.roomid = e.int32();
                            break;
                        case 2:
                            o.playerid = e.uint32();
                            break;
                        case 3:
                            o.type = e.int32();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomid && e.hasOwnProperty("roomid") && !f.isInteger(e.roomid) ? "roomid: integer expected" : null != e.playerid && e.hasOwnProperty("playerid") && !f.isInteger(e.playerid) ? "playerid: integer expected" : null != e.type && e.hasOwnProperty("type") && !f.isInteger(e.type) ? "type: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.MagicEmojiNotice) return e;
                var t = new y.jackfruit_proto.MagicEmojiNotice;
                return null != e.roomid && (t.roomid = 0 | e.roomid), null != e.playerid && (t.playerid = e.playerid >>> 0), null != e.type && (t.type = 0 | e.type), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                return t.defaults && (r.roomid = 0, r.playerid = 0, r.type = 0), null != e.roomid && e.hasOwnProperty("roomid") && (r.roomid = e.roomid), null != e.playerid && e.hasOwnProperty("playerid") && (r.playerid = e.playerid), null != e.type && e.hasOwnProperty("type") && (r.type = e.type), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.MagicEmojiNotice"
            }, e
        }(), l.DynamicConfig = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
            }
            return e.prototype.magicEmojiEnable = !1, e.prototype.magicEmojiDuration = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.magicEmojiEnable && Object.hasOwnProperty.call(e, "magicEmojiEnable") && t.uint32(8).bool(e.magicEmojiEnable), null != e.magicEmojiDuration && Object.hasOwnProperty.call(e, "magicEmojiDuration") && t.uint32(16).int64(e.magicEmojiDuration), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof d || (e = d.create(e));
                for (var r = void 0 === t ? e.len : e.pos + t, o = new y.jackfruit_proto.DynamicConfig; e.pos < r;) {
                    var n = e.uint32();
                    switch (n >>> 3) {
                        case 1:
                            o.magicEmojiEnable = e.bool();
                            break;
                        case 2:
                            o.magicEmojiDuration = e.int64();
                            break;
                        default:
                            e.skipType(7 & n)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.magicEmojiEnable && e.hasOwnProperty("magicEmojiEnable") && "boolean" != typeof e.magicEmojiEnable ? "magicEmojiEnable: boolean expected" : null != e.magicEmojiDuration && e.hasOwnProperty("magicEmojiDuration") && !(f.isInteger(e.magicEmojiDuration) || e.magicEmojiDuration && f.isInteger(e.magicEmojiDuration.low) && f.isInteger(e.magicEmojiDuration.high)) ? "magicEmojiDuration: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof y.jackfruit_proto.DynamicConfig) return e;
                var t = new y.jackfruit_proto.DynamicConfig;
                return null != e.magicEmojiEnable && (t.magicEmojiEnable = Boolean(e.magicEmojiEnable)), null != e.magicEmojiDuration && (f.Long ? (t.magicEmojiDuration = f.Long.fromValue(e.magicEmojiDuration)).unsigned = !1 : "string" == typeof e.magicEmojiDuration ? t.magicEmojiDuration = parseInt(e.magicEmojiDuration, 10) : "number" == typeof e.magicEmojiDuration ? t.magicEmojiDuration = e.magicEmojiDuration : "object" == typeof e.magicEmojiDuration && (t.magicEmojiDuration = new f.LongBits(e.magicEmojiDuration.low >>> 0, e.magicEmojiDuration.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults)
                    if (r.magicEmojiEnable = !1, f.Long) {
                        var o = new f.Long(0, 0, !1);
                        r.magicEmojiDuration = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                    } else r.magicEmojiDuration = t.longs === String ? "0" : 0;
                return null != e.magicEmojiEnable && e.hasOwnProperty("magicEmojiEnable") && (r.magicEmojiEnable = e.magicEmojiEnable), null != e.magicEmojiDuration && e.hasOwnProperty("magicEmojiDuration") && ("number" == typeof e.magicEmojiDuration ? r.magicEmojiDuration = t.longs === String ? String(e.magicEmojiDuration) : e.magicEmojiDuration : r.magicEmojiDuration = t.longs === String ? f.Long.prototype.toString.call(e.magicEmojiDuration) : t.longs === Number ? new f.LongBits(e.magicEmojiDuration.low >>> 0, e.magicEmojiDuration.high >>> 0).toNumber() : e.magicEmojiDuration), r
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/jackfruit_proto.DynamicConfig"
            }, e
        }(), l), o.exports = y, n = e("default", o.exports)
    }), (() => ({
        "protobufjs/minimal.js": o
    })))
}