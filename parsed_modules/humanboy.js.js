import * as o from "./cjs-loader.mjs.js";
import * as n from "./minimal.js";

function main() {
    let r;
    e("default", void 0);
    const a = e("__cjsMetaURL", t.meta.url);
    o.define(a, (function(t, o, n, a, i) {
        var c, u, s, l = o("protobufjs/minimal.js"),
            p = l.Reader,
            d = l.Writer,
            m = l.util,
            f = l.roots.default || (l.roots.default = {});
        f.humanboy_proto = ((s = {}).RoomLevel = (c = {}, (u = Object.create(c))[c[0] = "RoomLevel_DUMMY"] = 0, u[c[1] = "Small"] = 1, u[c[2] = "Middle"] = 2, u[c[3] = "Big"] = 3, u), s.KickApplyDealerReason = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "K_NULL"] = 0, t[e[1] = "K_NoMoney"] = 1, t[e[2] = "K_SUPPLY"] = 2, t[e[3] = "K_OFFLINE"] = 3, t[e[4] = "K_LEAVE"] = 4, t
        }(), s.RoundState = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "RoundState_DUMMY"] = 0, t[e[1] = "GAME_PENDING"] = 1, t[e[2] = "NEW_ROUND"] = 2, t[e[3] = "BET"] = 3, t[e[4] = "WAIT_NEXT_ROUND"] = 4, t[e[5] = "WAIT_NEXT_ROUND2"] = 5, t
        }(), s.BetZoneOption = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "BetZoneOption_DUMMY"] = 0, t[e[1] = "HOST"] = 1, t[e[2] = "POS1"] = 2, t[e[3] = "POS2"] = 3, t[e[4] = "POS3"] = 4, t[e[5] = "POS4"] = 5, t[e[100] = "POS_LUCK"] = 100, t[e[101] = "POS_LUCK_1"] = 101, t[e[102] = "POS_LUCK_2"] = 102, t[e[103] = "POS_LUCK_3"] = 103, t[e[104] = "POS_LUCK_4"] = 104, t[e[105] = "POS_LUCK_5"] = 105, t[e[106] = "POS_LUCK_6"] = 106, t
        }(), s.CMD = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "CMD_DUMMY"] = 0, t[e[4e4] = "LOGIN_GAME_REQ"] = 4e4, t[e[40001] = "LOGIN_GAME_RESP"] = 40001, t[e[40004] = "HEART_BEAT_REQ"] = 40004, t[e[40005] = "HEART_BEAT_RESP"] = 40005, t[e[40007] = "JOIN_ROOM_REQ"] = 40007, t[e[40008] = "JOIN_ROOM_RESP"] = 40008, t[e[40009] = "GAME_LIST_REQ"] = 40009, t[e[40010] = "GAME_LIST_RESP"] = 40010, t[e[40011] = "GAME_DATA_SYN"] = 40011, t[e[40012] = "DEAL_NOTIFY"] = 40012, t[e[40013] = "BET_REQ"] = 40013, t[e[40014] = "BET_RESP"] = 40014, t[e[40015] = "BET_NOTIFY"] = 40015, t[e[40016] = "GAME_ROUND_END_NOTIFY"] = 40016, t[e[40018] = "LEAVE_ROOM_REQ"] = 40018, t[e[40019] = "LEAVE_ROOM_RESP"] = 40019, t[e[40020] = "LEAVE_ROOM_NOTIFY"] = 40020, t[e[40022] = "CONN_CLOSE_REQ"] = 40022, t[e[40023] = "ROOM_TREND_REQ"] = 40023, t[e[40024] = "ROOM_TREND_RSP"] = 40024, t[e[40025] = "ROOM_TREND_NOTICE"] = 40025, t[e[40026] = "START_BET_NOTIFY"] = 40026, t[e[40029] = "AUTO_BET_REQ"] = 40029, t[e[40030] = "AUTO_BET_RESP"] = 40030, t[e[40031] = "AUTO_BET_NOTIFY"] = 40031, t[e[40032] = "PLAYER_LIST_REQ"] = 40032, t[e[40033] = "PLAYER_LIST_RESP"] = 40033, t[e[40036] = "MERGE_AUTO_BET_NOTIFY"] = 40036, t[e[40037] = "KICK_NOTIFY"] = 40037, t[e[40038] = "DOWN_DEALER_REQ"] = 40038, t[e[40039] = "DOWN_DEALER_RSP"] = 40039, t[e[40040] = "DOWN_DEALER_NOTIFY"] = 40040, t[e[40041] = "UP_DEALER_REQ"] = 40041, t[e[40042] = "UP_DEALER_RSP"] = 40042, t[e[40043] = "UP_DEALER_NOTIFY"] = 40043, t[e[40044] = "CANCEL_WAIT_REQ"] = 40044, t[e[40045] = "CANCEL_WAIT_RSP"] = 40045, t[e[40047] = "DEALER_LIST_REQ"] = 40047, t[e[40048] = "DEALER_LIST_RSP"] = 40048, t[e[40050] = "GET_BUY_STOCK_NUM_REQ"] = 40050, t[e[40051] = "GET_BUY_STOCK_NUM_RSP"] = 40051, t[e[40052] = "JACKPOT_DATA_REQ"] = 40052, t[e[40053] = "JACKPOT_DATA_RSP"] = 40053, t[e[40055] = "JACKPOT_AWARD_LIST_REQ"] = 40055, t[e[40056] = "JACKPOT_AWARD_LIST_RSP"] = 40056, t[e[40063] = "GAME_WILL_START_NOTIFY"] = 40063, t[e[40066] = "KICK_DEALER_APPLY_NOTIFY"] = 40066, t[e[40067] = "UPDATE_DEALER_LIST_REQ"] = 40067, t[e[40068] = "UPDATE_DEALER_LIST_RSP"] = 40068, t[e[40070] = "SET_GAME_OPTION_REQ"] = 40070, t[e[40071] = "SET_GAME_OPTION_RSP"] = 40071, t[e[40073] = "START_SETTLEMENT_NOTIFY"] = 40073, t[e[40074] = "SEND_EXPRESSION_REQ"] = 40074, t[e[40075] = "SEND_EXPRESSION_RSP"] = 40075, t[e[40076] = "SEND_EXPRESSION_NOTIFY"] = 40076, t[e[40080] = "ADVANCE_AUTO_BET_REQ"] = 40080, t[e[40081] = "ADVANCE_AUTO_BET_RSP"] = 40081, t[e[40082] = "CANCEL_ADVANCE_AUTO_BET_REQ"] = 40082, t[e[40083] = "CANCEL_ADVANCE_AUTO_BET_RSP"] = 40083, t[e[40084] = "ADVANCE_AUTO_BET_SET_REQ"] = 40084, t[e[40085] = "ADVANCE_AUTO_BET_SET_RSP"] = 40085, t[e[40086] = "USER_POINTS_CHANGE_NOTICE"] = 40086, t
        }(), s.ErrorCode = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "ErrorCode_DUMMY"] = 0, t[e[1] = "OK"] = 1, t[e[41e3] = "ROOM_WITHOUT_YOU"] = 41e3, t[e[41001] = "LOW_VERSION"] = 41001, t[e[41002] = "INVALID_TOKEN"] = 41002, t[e[41003] = "SERVER_BUSY"] = 41003, t[e[41004] = "WITHOUT_LOGIN"] = 41004, t[e[41005] = "ROOM_NOT_MATCH"] = 41005, t[e[41006] = "ROOM_NOT_EXIST"] = 41006, t[e[41007] = "BET_EXCEED_LIMIT"] = 41007, t[e[41008] = "ROOM_PLAYER_LIMIT"] = 41008, t[e[41009] = "NO_BET"] = 41009, t[e[41010] = "BET_AMOUNT_NOT_MATCH"] = 41010, t[e[41011] = "NO_MONEY"] = 41011, t[e[41012] = "BET_BAD_PARAM"] = 41012, t[e[41013] = "STOP_SERVICE"] = 41013, t[e[41014] = "NOT_BET_WHEN_AUTO_BET"] = 41014, t[e[41015] = "BET_TOO_SMALL"] = 41015, t[e[41016] = "BET_COUNT_LIMIT"] = 41016, t[e[41017] = "AUTO_BET_LIMIT"] = 41017, t[e[41018] = "TOO_MANY_PEOPLE"] = 41018, t[e[41019] = "NO_UP_DEALER"] = 41019, t[e[41020] = "STOCK_NUM_EXCEED"] = 41020, t[e[41021] = "NO_MONEY_TO_DEALER"] = 41021, t[e[41022] = "NOT_A_DEALER"] = 41022, t[e[41023] = "NOT_IN_APPLY"] = 41023, t[e[41024] = "DEALER_NO_BET"] = 41024, t[e[41025] = "BAD_REQ_PARAM"] = 41025, t[e[41026] = "NO_SET_ADVANCE_AUTO_BET"] = 41026, t[e[41027] = "AUTO_BET_COUNT_LIMIT"] = 41027, t[e[41028] = "AUTO_BET_NO_MONEY"] = 41028, t[e[41029] = "AUTO_BET_EXCEED_LIMIT"] = 41029, t
        }(), s.DownDealerReason = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "DownDummy"] = 0, t[e[1] = "NoMoney"] = 1, t[e[2] = "LongTime"] = 2, t[e[3] = "Leave"] = 3, t[e[4] = "Offline"] = 4, t
        }(), s.CardResult = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "CardResult_Dummy"] = 0, t[e[1] = "GAO_PAI"] = 1, t[e[2] = "YI_DUI"] = 2, t[e[3] = "LIAN_DUI"] = 3, t[e[4] = "SAN_TIAO"] = 4, t[e[5] = "SHUN_ZI"] = 5, t[e[6] = "TONG_HUA"] = 6, t[e[7] = "HU_LU"] = 7, t[e[8] = "SI_TIAO"] = 8, t[e[9] = "TONG_HUA_SHUN"] = 9, t[e[10] = "HUANG_TONG"] = 10, t
        }(), s.Kick = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Kick_DUMMY"] = 0, t[e[1] = "IDLE_LONG_TIME"] = 1, t[e[2] = "Stop_World"] = 2, t
        }(), s.AutoBetLevel = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Level_Normal"] = 0, t[e[1] = "Level_Advance"] = 1, t
        }(), s.ClientType = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Dummy"] = 0, t[e[1] = "Normal"] = 1, t[e[2] = "OverSeas"] = 2, t[e[3] = "H5"] = 3, t[e[4] = "H5OverSeas"] = 4, t[e[5] = "H5Web"] = 5, t[e[6] = "H5WebOverSeas"] = 6, t[e[7] = "H5VietnamLasted"] = 7, t[e[8] = "H5WebVietnamLasted"] = 8, t
        }(), s.CardItem = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.number = 0, e.prototype.suit = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.number && Object.hasOwnProperty.call(e, "number") && t.uint32(8).int32(e.number), null != e.suit && Object.hasOwnProperty.call(e, "suit") && t.uint32(16).int32(e.suit), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.CardItem; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.number = e.int32();
                            break;
                        case 2:
                            n.suit = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.number && e.hasOwnProperty("number") && !m.isInteger(e.number) ? "number: integer expected" : null != e.suit && e.hasOwnProperty("suit") && !m.isInteger(e.suit) ? "suit: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.CardItem) return e;
                var t = new f.humanboy_proto.CardItem;
                return null != e.number && (t.number = 0 | e.number), null != e.suit && (t.suit = 0 | e.suit), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.number = 0, o.suit = 0), null != e.number && e.hasOwnProperty("number") && (o.number = e.number), null != e.suit && e.hasOwnProperty("suit") && (o.suit = e.suit), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.CardItem"
            }, e
        }(), s.HeartBeatReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.uid = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).uint32(e.uid), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.HeartBeatReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.uid = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.uid && e.hasOwnProperty("uid") && !m.isInteger(e.uid) ? "uid: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.HeartBeatReq) return e;
                var t = new f.humanboy_proto.HeartBeatReq;
                return null != e.uid && (t.uid = e.uid >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.uid = 0), null != e.uid && e.hasOwnProperty("uid") && (o.uid = e.uid), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.HeartBeatReq"
            }, e
        }(), s.HeartBeatResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.uid = 0, e.prototype.timestamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).uint32(e.uid), null != e.timestamp && Object.hasOwnProperty.call(e, "timestamp") && t.uint32(16).int64(e.timestamp), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.HeartBeatResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.uid = e.uint32();
                            break;
                        case 2:
                            n.timestamp = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.uid && e.hasOwnProperty("uid") && !m.isInteger(e.uid) ? "uid: integer expected" : null != e.timestamp && e.hasOwnProperty("timestamp") && !(m.isInteger(e.timestamp) || e.timestamp && m.isInteger(e.timestamp.low) && m.isInteger(e.timestamp.high)) ? "timestamp: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.HeartBeatResp) return e;
                var t = new f.humanboy_proto.HeartBeatResp;
                return null != e.uid && (t.uid = e.uid >>> 0), null != e.timestamp && (m.Long ? (t.timestamp = m.Long.fromValue(e.timestamp)).unsigned = !1 : "string" == typeof e.timestamp ? t.timestamp = parseInt(e.timestamp, 10) : "number" == typeof e.timestamp ? t.timestamp = e.timestamp : "object" == typeof e.timestamp && (t.timestamp = new m.LongBits(e.timestamp.low >>> 0, e.timestamp.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults)
                    if (o.uid = 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.timestamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.timestamp = t.longs === String ? "0" : 0;
                return null != e.uid && e.hasOwnProperty("uid") && (o.uid = e.uid), null != e.timestamp && e.hasOwnProperty("timestamp") && ("number" == typeof e.timestamp ? o.timestamp = t.longs === String ? String(e.timestamp) : e.timestamp : o.timestamp = t.longs === String ? m.Long.prototype.toString.call(e.timestamp) : t.longs === Number ? new m.LongBits(e.timestamp.low >>> 0, e.timestamp.high >>> 0).toNumber() : e.timestamp), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.HeartBeatResp"
            }, e
        }(), s.LoginReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.version = "", e.prototype.token = "", e.prototype.client_type = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(10).string(e.version), null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(18).string(e.token), null != e.client_type && Object.hasOwnProperty.call(e, "client_type") && t.uint32(24).int32(e.client_type), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.LoginReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.version = e.string();
                            break;
                        case 2:
                            n.token = e.string();
                            break;
                        case 3:
                            n.client_type = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.version && e.hasOwnProperty("version") && !m.isString(e.version)) return "version: string expected";
                if (null != e.token && e.hasOwnProperty("token") && !m.isString(e.token)) return "token: string expected";
                if (null != e.client_type && e.hasOwnProperty("client_type")) switch (e.client_type) {
                    default:
                        return "client_type: enum value expected";
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
                if (e instanceof f.humanboy_proto.LoginReq) return e;
                var t = new f.humanboy_proto.LoginReq;
                switch (null != e.version && (t.version = String(e.version)), null != e.token && (t.token = String(e.token)), e.client_type) {
                    default:
                        if ("number" == typeof e.client_type) {
                            t.client_type = e.client_type;
                            break
                        }
                        break;
                    case "Dummy":
                    case 0:
                        t.client_type = 0;
                        break;
                    case "Normal":
                    case 1:
                        t.client_type = 1;
                        break;
                    case "OverSeas":
                    case 2:
                        t.client_type = 2;
                        break;
                    case "H5":
                    case 3:
                        t.client_type = 3;
                        break;
                    case "H5OverSeas":
                    case 4:
                        t.client_type = 4;
                        break;
                    case "H5Web":
                    case 5:
                        t.client_type = 5;
                        break;
                    case "H5WebOverSeas":
                    case 6:
                        t.client_type = 6;
                        break;
                    case "H5VietnamLasted":
                    case 7:
                        t.client_type = 7;
                        break;
                    case "H5WebVietnamLasted":
                    case 8:
                        t.client_type = 8
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.version = "", o.token = "", o.client_type = t.enums === String ? "Dummy" : 0), null != e.version && e.hasOwnProperty("version") && (o.version = e.version), null != e.token && e.hasOwnProperty("token") && (o.token = e.token), null != e.client_type && e.hasOwnProperty("client_type") && (o.client_type = t.enums === String ? void 0 === f.humanboy_proto.ClientType[e.client_type] ? e.client_type : f.humanboy_proto.ClientType[e.client_type] : e.client_type), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.LoginReq"
            }, e
        }(), s.LoginResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.roomid = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.roomid && Object.hasOwnProperty.call(e, "roomid") && t.uint32(16).uint32(e.roomid), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.LoginResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.roomid = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                return null != e.roomid && e.hasOwnProperty("roomid") && !m.isInteger(e.roomid) ? "roomid: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.LoginResp) return e;
                var t = new f.humanboy_proto.LoginResp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                return null != e.roomid && (t.roomid = e.roomid >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.roomid = 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), null != e.roomid && e.hasOwnProperty("roomid") && (o.roomid = e.roomid), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.LoginResp"
            }, e
        }(), s.JoinRoomReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.roomid = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.roomid && Object.hasOwnProperty.call(e, "roomid") && t.uint32(8).uint32(e.roomid), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.JoinRoomReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.roomid = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomid && e.hasOwnProperty("roomid") && !m.isInteger(e.roomid) ? "roomid: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.JoinRoomReq) return e;
                var t = new f.humanboy_proto.JoinRoomReq;
                return null != e.roomid && (t.roomid = e.roomid >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.roomid = 0), null != e.roomid && e.hasOwnProperty("roomid") && (o.roomid = e.roomid), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.JoinRoomReq"
            }, e
        }(), s.JoinRoomResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.roomid = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.roomid && Object.hasOwnProperty.call(e, "roomid") && t.uint32(16).uint32(e.roomid), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.JoinRoomResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.roomid = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                return null != e.roomid && e.hasOwnProperty("roomid") && !m.isInteger(e.roomid) ? "roomid: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.JoinRoomResp) return e;
                var t = new f.humanboy_proto.JoinRoomResp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                return null != e.roomid && (t.roomid = e.roomid >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.roomid = 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), null != e.roomid && e.hasOwnProperty("roomid") && (o.roomid = e.roomid), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.JoinRoomResp"
            }, e
        }(), s.RoomParam = function() {
            function e(e) {
                if (this.amountLevel = [], this.oddsDetail = [], this.pictureCn = [], this.pictureEn = [], this.totalAmountLevel = [], this.pictureVn = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.roomid = 0, e.prototype.amountLevel = m.emptyArray, e.prototype.oddsDetail = m.emptyArray, e.prototype.limitPlayers = 0, e.prototype.deskType = 0, e.prototype.smallBet = 0, e.prototype.pictureCn = m.emptyArray, e.prototype.pictureEn = m.emptyArray, e.prototype.upDealerMoney = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.dealerCount = 0, e.prototype.singleMaxStock = 0, e.prototype.downDealerMoney = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.moneyPerStock = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.totalStockNum = 0, e.prototype.shareLimitAmount = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.stdJackpotBet = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.version = 0, e.prototype.totalAmountLevel = m.emptyArray, e.prototype.pictureVn = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.roomid && Object.hasOwnProperty.call(e, "roomid") && t.uint32(8).uint32(e.roomid), null != e.amountLevel && e.amountLevel.length) {
                    t.uint32(18).fork();
                    for (var o = 0; o < e.amountLevel.length; ++o) t.uint64(e.amountLevel[o]);
                    t.ldelim()
                }
                if (null != e.oddsDetail && e.oddsDetail.length)
                    for (o = 0; o < e.oddsDetail.length; ++o) f.humanboy_proto.OddsDetail.encode(e.oddsDetail[o], t.uint32(26).fork()).ldelim();
                if (null != e.limitPlayers && Object.hasOwnProperty.call(e, "limitPlayers") && t.uint32(40).uint32(e.limitPlayers), null != e.deskType && Object.hasOwnProperty.call(e, "deskType") && t.uint32(48).uint32(e.deskType), null != e.smallBet && Object.hasOwnProperty.call(e, "smallBet") && t.uint32(56).uint32(e.smallBet), null != e.pictureCn && e.pictureCn.length)
                    for (o = 0; o < e.pictureCn.length; ++o) t.uint32(66).string(e.pictureCn[o]);
                if (null != e.pictureEn && e.pictureEn.length)
                    for (o = 0; o < e.pictureEn.length; ++o) t.uint32(74).string(e.pictureEn[o]);
                if (null != e.upDealerMoney && Object.hasOwnProperty.call(e, "upDealerMoney") && t.uint32(80).uint64(e.upDealerMoney), null != e.dealerCount && Object.hasOwnProperty.call(e, "dealerCount") && t.uint32(96).uint32(e.dealerCount), null != e.singleMaxStock && Object.hasOwnProperty.call(e, "singleMaxStock") && t.uint32(104).uint32(e.singleMaxStock), null != e.downDealerMoney && Object.hasOwnProperty.call(e, "downDealerMoney") && t.uint32(112).uint64(e.downDealerMoney), null != e.moneyPerStock && Object.hasOwnProperty.call(e, "moneyPerStock") && t.uint32(120).uint64(e.moneyPerStock), null != e.totalStockNum && Object.hasOwnProperty.call(e, "totalStockNum") && t.uint32(128).uint32(e.totalStockNum), null != e.shareLimitAmount && Object.hasOwnProperty.call(e, "shareLimitAmount") && t.uint32(136).uint64(e.shareLimitAmount), null != e.stdJackpotBet && Object.hasOwnProperty.call(e, "stdJackpotBet") && t.uint32(144).uint64(e.stdJackpotBet), null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(152).uint32(e.version), null != e.totalAmountLevel && e.totalAmountLevel.length) {
                    for (t.uint32(162).fork(), o = 0; o < e.totalAmountLevel.length; ++o) t.uint64(e.totalAmountLevel[o]);
                    t.ldelim()
                }
                if (null != e.pictureVn && e.pictureVn.length)
                    for (o = 0; o < e.pictureVn.length; ++o) t.uint32(170).string(e.pictureVn[o]);
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.RoomParam; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.roomid = e.uint32();
                            break;
                        case 2:
                            if (n.amountLevel && n.amountLevel.length || (n.amountLevel = []), 2 == (7 & r))
                                for (var a = e.uint32() + e.pos; e.pos < a;) n.amountLevel.push(e.uint64());
                            else n.amountLevel.push(e.uint64());
                            break;
                        case 3:
                            n.oddsDetail && n.oddsDetail.length || (n.oddsDetail = []), n.oddsDetail.push(f.humanboy_proto.OddsDetail.decode(e, e.uint32()));
                            break;
                        case 5:
                            n.limitPlayers = e.uint32();
                            break;
                        case 6:
                            n.deskType = e.uint32();
                            break;
                        case 7:
                            n.smallBet = e.uint32();
                            break;
                        case 8:
                            n.pictureCn && n.pictureCn.length || (n.pictureCn = []), n.pictureCn.push(e.string());
                            break;
                        case 9:
                            n.pictureEn && n.pictureEn.length || (n.pictureEn = []), n.pictureEn.push(e.string());
                            break;
                        case 10:
                            n.upDealerMoney = e.uint64();
                            break;
                        case 12:
                            n.dealerCount = e.uint32();
                            break;
                        case 13:
                            n.singleMaxStock = e.uint32();
                            break;
                        case 14:
                            n.downDealerMoney = e.uint64();
                            break;
                        case 15:
                            n.moneyPerStock = e.uint64();
                            break;
                        case 16:
                            n.totalStockNum = e.uint32();
                            break;
                        case 17:
                            n.shareLimitAmount = e.uint64();
                            break;
                        case 18:
                            n.stdJackpotBet = e.uint64();
                            break;
                        case 19:
                            n.version = e.uint32();
                            break;
                        case 20:
                            if (n.totalAmountLevel && n.totalAmountLevel.length || (n.totalAmountLevel = []), 2 == (7 & r))
                                for (a = e.uint32() + e.pos; e.pos < a;) n.totalAmountLevel.push(e.uint64());
                            else n.totalAmountLevel.push(e.uint64());
                            break;
                        case 21:
                            n.pictureVn && n.pictureVn.length || (n.pictureVn = []), n.pictureVn.push(e.string());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.roomid && e.hasOwnProperty("roomid") && !m.isInteger(e.roomid)) return "roomid: integer expected";
                if (null != e.amountLevel && e.hasOwnProperty("amountLevel")) {
                    if (!Array.isArray(e.amountLevel)) return "amountLevel: array expected";
                    for (var t = 0; t < e.amountLevel.length; ++t)
                        if (!(m.isInteger(e.amountLevel[t]) || e.amountLevel[t] && m.isInteger(e.amountLevel[t].low) && m.isInteger(e.amountLevel[t].high))) return "amountLevel: integer|Long[] expected"
                }
                if (null != e.oddsDetail && e.hasOwnProperty("oddsDetail")) {
                    if (!Array.isArray(e.oddsDetail)) return "oddsDetail: array expected";
                    for (t = 0; t < e.oddsDetail.length; ++t) {
                        var o = f.humanboy_proto.OddsDetail.verify(e.oddsDetail[t]);
                        if (o) return "oddsDetail." + o
                    }
                }
                if (null != e.limitPlayers && e.hasOwnProperty("limitPlayers") && !m.isInteger(e.limitPlayers)) return "limitPlayers: integer expected";
                if (null != e.deskType && e.hasOwnProperty("deskType") && !m.isInteger(e.deskType)) return "deskType: integer expected";
                if (null != e.smallBet && e.hasOwnProperty("smallBet") && !m.isInteger(e.smallBet)) return "smallBet: integer expected";
                if (null != e.pictureCn && e.hasOwnProperty("pictureCn")) {
                    if (!Array.isArray(e.pictureCn)) return "pictureCn: array expected";
                    for (t = 0; t < e.pictureCn.length; ++t)
                        if (!m.isString(e.pictureCn[t])) return "pictureCn: string[] expected"
                }
                if (null != e.pictureEn && e.hasOwnProperty("pictureEn")) {
                    if (!Array.isArray(e.pictureEn)) return "pictureEn: array expected";
                    for (t = 0; t < e.pictureEn.length; ++t)
                        if (!m.isString(e.pictureEn[t])) return "pictureEn: string[] expected"
                }
                if (null != e.upDealerMoney && e.hasOwnProperty("upDealerMoney") && !(m.isInteger(e.upDealerMoney) || e.upDealerMoney && m.isInteger(e.upDealerMoney.low) && m.isInteger(e.upDealerMoney.high))) return "upDealerMoney: integer|Long expected";
                if (null != e.dealerCount && e.hasOwnProperty("dealerCount") && !m.isInteger(e.dealerCount)) return "dealerCount: integer expected";
                if (null != e.singleMaxStock && e.hasOwnProperty("singleMaxStock") && !m.isInteger(e.singleMaxStock)) return "singleMaxStock: integer expected";
                if (null != e.downDealerMoney && e.hasOwnProperty("downDealerMoney") && !(m.isInteger(e.downDealerMoney) || e.downDealerMoney && m.isInteger(e.downDealerMoney.low) && m.isInteger(e.downDealerMoney.high))) return "downDealerMoney: integer|Long expected";
                if (null != e.moneyPerStock && e.hasOwnProperty("moneyPerStock") && !(m.isInteger(e.moneyPerStock) || e.moneyPerStock && m.isInteger(e.moneyPerStock.low) && m.isInteger(e.moneyPerStock.high))) return "moneyPerStock: integer|Long expected";
                if (null != e.totalStockNum && e.hasOwnProperty("totalStockNum") && !m.isInteger(e.totalStockNum)) return "totalStockNum: integer expected";
                if (null != e.shareLimitAmount && e.hasOwnProperty("shareLimitAmount") && !(m.isInteger(e.shareLimitAmount) || e.shareLimitAmount && m.isInteger(e.shareLimitAmount.low) && m.isInteger(e.shareLimitAmount.high))) return "shareLimitAmount: integer|Long expected";
                if (null != e.stdJackpotBet && e.hasOwnProperty("stdJackpotBet") && !(m.isInteger(e.stdJackpotBet) || e.stdJackpotBet && m.isInteger(e.stdJackpotBet.low) && m.isInteger(e.stdJackpotBet.high))) return "stdJackpotBet: integer|Long expected";
                if (null != e.version && e.hasOwnProperty("version") && !m.isInteger(e.version)) return "version: integer expected";
                if (null != e.totalAmountLevel && e.hasOwnProperty("totalAmountLevel")) {
                    if (!Array.isArray(e.totalAmountLevel)) return "totalAmountLevel: array expected";
                    for (t = 0; t < e.totalAmountLevel.length; ++t)
                        if (!(m.isInteger(e.totalAmountLevel[t]) || e.totalAmountLevel[t] && m.isInteger(e.totalAmountLevel[t].low) && m.isInteger(e.totalAmountLevel[t].high))) return "totalAmountLevel: integer|Long[] expected"
                }
                if (null != e.pictureVn && e.hasOwnProperty("pictureVn")) {
                    if (!Array.isArray(e.pictureVn)) return "pictureVn: array expected";
                    for (t = 0; t < e.pictureVn.length; ++t)
                        if (!m.isString(e.pictureVn[t])) return "pictureVn: string[] expected"
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.RoomParam) return e;
                var t = new f.humanboy_proto.RoomParam;
                if (null != e.roomid && (t.roomid = e.roomid >>> 0), e.amountLevel) {
                    if (!Array.isArray(e.amountLevel)) throw TypeError(".humanboy_proto.RoomParam.amountLevel: array expected");
                    t.amountLevel = [];
                    for (var o = 0; o < e.amountLevel.length; ++o) m.Long ? (t.amountLevel[o] = m.Long.fromValue(e.amountLevel[o])).unsigned = !0 : "string" == typeof e.amountLevel[o] ? t.amountLevel[o] = parseInt(e.amountLevel[o], 10) : "number" == typeof e.amountLevel[o] ? t.amountLevel[o] = e.amountLevel[o] : "object" == typeof e.amountLevel[o] && (t.amountLevel[o] = new m.LongBits(e.amountLevel[o].low >>> 0, e.amountLevel[o].high >>> 0).toNumber(!0))
                }
                if (e.oddsDetail) {
                    if (!Array.isArray(e.oddsDetail)) throw TypeError(".humanboy_proto.RoomParam.oddsDetail: array expected");
                    for (t.oddsDetail = [], o = 0; o < e.oddsDetail.length; ++o) {
                        if ("object" != typeof e.oddsDetail[o]) throw TypeError(".humanboy_proto.RoomParam.oddsDetail: object expected");
                        t.oddsDetail[o] = f.humanboy_proto.OddsDetail.fromObject(e.oddsDetail[o])
                    }
                }
                if (null != e.limitPlayers && (t.limitPlayers = e.limitPlayers >>> 0), null != e.deskType && (t.deskType = e.deskType >>> 0), null != e.smallBet && (t.smallBet = e.smallBet >>> 0), e.pictureCn) {
                    if (!Array.isArray(e.pictureCn)) throw TypeError(".humanboy_proto.RoomParam.pictureCn: array expected");
                    for (t.pictureCn = [], o = 0; o < e.pictureCn.length; ++o) t.pictureCn[o] = String(e.pictureCn[o])
                }
                if (e.pictureEn) {
                    if (!Array.isArray(e.pictureEn)) throw TypeError(".humanboy_proto.RoomParam.pictureEn: array expected");
                    for (t.pictureEn = [], o = 0; o < e.pictureEn.length; ++o) t.pictureEn[o] = String(e.pictureEn[o])
                }
                if (null != e.upDealerMoney && (m.Long ? (t.upDealerMoney = m.Long.fromValue(e.upDealerMoney)).unsigned = !0 : "string" == typeof e.upDealerMoney ? t.upDealerMoney = parseInt(e.upDealerMoney, 10) : "number" == typeof e.upDealerMoney ? t.upDealerMoney = e.upDealerMoney : "object" == typeof e.upDealerMoney && (t.upDealerMoney = new m.LongBits(e.upDealerMoney.low >>> 0, e.upDealerMoney.high >>> 0).toNumber(!0))), null != e.dealerCount && (t.dealerCount = e.dealerCount >>> 0), null != e.singleMaxStock && (t.singleMaxStock = e.singleMaxStock >>> 0), null != e.downDealerMoney && (m.Long ? (t.downDealerMoney = m.Long.fromValue(e.downDealerMoney)).unsigned = !0 : "string" == typeof e.downDealerMoney ? t.downDealerMoney = parseInt(e.downDealerMoney, 10) : "number" == typeof e.downDealerMoney ? t.downDealerMoney = e.downDealerMoney : "object" == typeof e.downDealerMoney && (t.downDealerMoney = new m.LongBits(e.downDealerMoney.low >>> 0, e.downDealerMoney.high >>> 0).toNumber(!0))), null != e.moneyPerStock && (m.Long ? (t.moneyPerStock = m.Long.fromValue(e.moneyPerStock)).unsigned = !0 : "string" == typeof e.moneyPerStock ? t.moneyPerStock = parseInt(e.moneyPerStock, 10) : "number" == typeof e.moneyPerStock ? t.moneyPerStock = e.moneyPerStock : "object" == typeof e.moneyPerStock && (t.moneyPerStock = new m.LongBits(e.moneyPerStock.low >>> 0, e.moneyPerStock.high >>> 0).toNumber(!0))), null != e.totalStockNum && (t.totalStockNum = e.totalStockNum >>> 0), null != e.shareLimitAmount && (m.Long ? (t.shareLimitAmount = m.Long.fromValue(e.shareLimitAmount)).unsigned = !0 : "string" == typeof e.shareLimitAmount ? t.shareLimitAmount = parseInt(e.shareLimitAmount, 10) : "number" == typeof e.shareLimitAmount ? t.shareLimitAmount = e.shareLimitAmount : "object" == typeof e.shareLimitAmount && (t.shareLimitAmount = new m.LongBits(e.shareLimitAmount.low >>> 0, e.shareLimitAmount.high >>> 0).toNumber(!0))), null != e.stdJackpotBet && (m.Long ? (t.stdJackpotBet = m.Long.fromValue(e.stdJackpotBet)).unsigned = !0 : "string" == typeof e.stdJackpotBet ? t.stdJackpotBet = parseInt(e.stdJackpotBet, 10) : "number" == typeof e.stdJackpotBet ? t.stdJackpotBet = e.stdJackpotBet : "object" == typeof e.stdJackpotBet && (t.stdJackpotBet = new m.LongBits(e.stdJackpotBet.low >>> 0, e.stdJackpotBet.high >>> 0).toNumber(!0))), null != e.version && (t.version = e.version >>> 0), e.totalAmountLevel) {
                    if (!Array.isArray(e.totalAmountLevel)) throw TypeError(".humanboy_proto.RoomParam.totalAmountLevel: array expected");
                    for (t.totalAmountLevel = [], o = 0; o < e.totalAmountLevel.length; ++o) m.Long ? (t.totalAmountLevel[o] = m.Long.fromValue(e.totalAmountLevel[o])).unsigned = !0 : "string" == typeof e.totalAmountLevel[o] ? t.totalAmountLevel[o] = parseInt(e.totalAmountLevel[o], 10) : "number" == typeof e.totalAmountLevel[o] ? t.totalAmountLevel[o] = e.totalAmountLevel[o] : "object" == typeof e.totalAmountLevel[o] && (t.totalAmountLevel[o] = new m.LongBits(e.totalAmountLevel[o].low >>> 0, e.totalAmountLevel[o].high >>> 0).toNumber(!0))
                }
                if (e.pictureVn) {
                    if (!Array.isArray(e.pictureVn)) throw TypeError(".humanboy_proto.RoomParam.pictureVn: array expected");
                    for (t.pictureVn = [], o = 0; o < e.pictureVn.length; ++o) t.pictureVn[o] = String(e.pictureVn[o])
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.amountLevel = [], o.oddsDetail = [], o.pictureCn = [], o.pictureEn = [], o.totalAmountLevel = [], o.pictureVn = []), t.defaults) {
                    if (o.roomid = 0, o.limitPlayers = 0, o.deskType = 0, o.smallBet = 0, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.upDealerMoney = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.upDealerMoney = t.longs === String ? "0" : 0;
                    o.dealerCount = 0, o.singleMaxStock = 0, m.Long ? (n = new m.Long(0, 0, !0), o.downDealerMoney = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.downDealerMoney = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !0), o.moneyPerStock = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.moneyPerStock = t.longs === String ? "0" : 0, o.totalStockNum = 0, m.Long ? (n = new m.Long(0, 0, !0), o.shareLimitAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.shareLimitAmount = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !0), o.stdJackpotBet = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.stdJackpotBet = t.longs === String ? "0" : 0, o.version = 0
                }
                if (null != e.roomid && e.hasOwnProperty("roomid") && (o.roomid = e.roomid), e.amountLevel && e.amountLevel.length) {
                    o.amountLevel = [];
                    for (var r = 0; r < e.amountLevel.length; ++r) "number" == typeof e.amountLevel[r] ? o.amountLevel[r] = t.longs === String ? String(e.amountLevel[r]) : e.amountLevel[r] : o.amountLevel[r] = t.longs === String ? m.Long.prototype.toString.call(e.amountLevel[r]) : t.longs === Number ? new m.LongBits(e.amountLevel[r].low >>> 0, e.amountLevel[r].high >>> 0).toNumber(!0) : e.amountLevel[r]
                }
                if (e.oddsDetail && e.oddsDetail.length)
                    for (o.oddsDetail = [], r = 0; r < e.oddsDetail.length; ++r) o.oddsDetail[r] = f.humanboy_proto.OddsDetail.toObject(e.oddsDetail[r], t);
                if (null != e.limitPlayers && e.hasOwnProperty("limitPlayers") && (o.limitPlayers = e.limitPlayers), null != e.deskType && e.hasOwnProperty("deskType") && (o.deskType = e.deskType), null != e.smallBet && e.hasOwnProperty("smallBet") && (o.smallBet = e.smallBet), e.pictureCn && e.pictureCn.length)
                    for (o.pictureCn = [], r = 0; r < e.pictureCn.length; ++r) o.pictureCn[r] = e.pictureCn[r];
                if (e.pictureEn && e.pictureEn.length)
                    for (o.pictureEn = [], r = 0; r < e.pictureEn.length; ++r) o.pictureEn[r] = e.pictureEn[r];
                if (null != e.upDealerMoney && e.hasOwnProperty("upDealerMoney") && ("number" == typeof e.upDealerMoney ? o.upDealerMoney = t.longs === String ? String(e.upDealerMoney) : e.upDealerMoney : o.upDealerMoney = t.longs === String ? m.Long.prototype.toString.call(e.upDealerMoney) : t.longs === Number ? new m.LongBits(e.upDealerMoney.low >>> 0, e.upDealerMoney.high >>> 0).toNumber(!0) : e.upDealerMoney), null != e.dealerCount && e.hasOwnProperty("dealerCount") && (o.dealerCount = e.dealerCount), null != e.singleMaxStock && e.hasOwnProperty("singleMaxStock") && (o.singleMaxStock = e.singleMaxStock), null != e.downDealerMoney && e.hasOwnProperty("downDealerMoney") && ("number" == typeof e.downDealerMoney ? o.downDealerMoney = t.longs === String ? String(e.downDealerMoney) : e.downDealerMoney : o.downDealerMoney = t.longs === String ? m.Long.prototype.toString.call(e.downDealerMoney) : t.longs === Number ? new m.LongBits(e.downDealerMoney.low >>> 0, e.downDealerMoney.high >>> 0).toNumber(!0) : e.downDealerMoney), null != e.moneyPerStock && e.hasOwnProperty("moneyPerStock") && ("number" == typeof e.moneyPerStock ? o.moneyPerStock = t.longs === String ? String(e.moneyPerStock) : e.moneyPerStock : o.moneyPerStock = t.longs === String ? m.Long.prototype.toString.call(e.moneyPerStock) : t.longs === Number ? new m.LongBits(e.moneyPerStock.low >>> 0, e.moneyPerStock.high >>> 0).toNumber(!0) : e.moneyPerStock), null != e.totalStockNum && e.hasOwnProperty("totalStockNum") && (o.totalStockNum = e.totalStockNum), null != e.shareLimitAmount && e.hasOwnProperty("shareLimitAmount") && ("number" == typeof e.shareLimitAmount ? o.shareLimitAmount = t.longs === String ? String(e.shareLimitAmount) : e.shareLimitAmount : o.shareLimitAmount = t.longs === String ? m.Long.prototype.toString.call(e.shareLimitAmount) : t.longs === Number ? new m.LongBits(e.shareLimitAmount.low >>> 0, e.shareLimitAmount.high >>> 0).toNumber(!0) : e.shareLimitAmount), null != e.stdJackpotBet && e.hasOwnProperty("stdJackpotBet") && ("number" == typeof e.stdJackpotBet ? o.stdJackpotBet = t.longs === String ? String(e.stdJackpotBet) : e.stdJackpotBet : o.stdJackpotBet = t.longs === String ? m.Long.prototype.toString.call(e.stdJackpotBet) : t.longs === Number ? new m.LongBits(e.stdJackpotBet.low >>> 0, e.stdJackpotBet.high >>> 0).toNumber(!0) : e.stdJackpotBet), null != e.version && e.hasOwnProperty("version") && (o.version = e.version), e.totalAmountLevel && e.totalAmountLevel.length)
                    for (o.totalAmountLevel = [], r = 0; r < e.totalAmountLevel.length; ++r) "number" == typeof e.totalAmountLevel[r] ? o.totalAmountLevel[r] = t.longs === String ? String(e.totalAmountLevel[r]) : e.totalAmountLevel[r] : o.totalAmountLevel[r] = t.longs === String ? m.Long.prototype.toString.call(e.totalAmountLevel[r]) : t.longs === Number ? new m.LongBits(e.totalAmountLevel[r].low >>> 0, e.totalAmountLevel[r].high >>> 0).toNumber(!0) : e.totalAmountLevel[r];
                if (e.pictureVn && e.pictureVn.length)
                    for (o.pictureVn = [], r = 0; r < e.pictureVn.length; ++r) o.pictureVn[r] = e.pictureVn[r];
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.RoomParam"
            }, e
        }(), s.OddsDetail = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.option = 0, e.prototype.odds = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.limit = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(16).int32(e.option), null != e.odds && Object.hasOwnProperty.call(e, "odds") && t.uint32(24).uint64(e.odds), null != e.limit && Object.hasOwnProperty.call(e, "limit") && t.uint32(32).uint64(e.limit), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.OddsDetail; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 2:
                            n.option = e.int32();
                            break;
                        case 3:
                            n.odds = e.uint64();
                            break;
                        case 4:
                            n.limit = e.uint64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.option && e.hasOwnProperty("option")) switch (e.option) {
                    default:
                        return "option: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 106:
                }
                return null != e.odds && e.hasOwnProperty("odds") && !(m.isInteger(e.odds) || e.odds && m.isInteger(e.odds.low) && m.isInteger(e.odds.high)) ? "odds: integer|Long expected" : null != e.limit && e.hasOwnProperty("limit") && !(m.isInteger(e.limit) || e.limit && m.isInteger(e.limit.low) && m.isInteger(e.limit.high)) ? "limit: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.OddsDetail) return e;
                var t = new f.humanboy_proto.OddsDetail;
                switch (e.option) {
                    default:
                        if ("number" == typeof e.option) {
                            t.option = e.option;
                            break
                        }
                        break;
                    case "BetZoneOption_DUMMY":
                    case 0:
                        t.option = 0;
                        break;
                    case "HOST":
                    case 1:
                        t.option = 1;
                        break;
                    case "POS1":
                    case 2:
                        t.option = 2;
                        break;
                    case "POS2":
                    case 3:
                        t.option = 3;
                        break;
                    case "POS3":
                    case 4:
                        t.option = 4;
                        break;
                    case "POS4":
                    case 5:
                        t.option = 5;
                        break;
                    case "POS_LUCK":
                    case 100:
                        t.option = 100;
                        break;
                    case "POS_LUCK_1":
                    case 101:
                        t.option = 101;
                        break;
                    case "POS_LUCK_2":
                    case 102:
                        t.option = 102;
                        break;
                    case "POS_LUCK_3":
                    case 103:
                        t.option = 103;
                        break;
                    case "POS_LUCK_4":
                    case 104:
                        t.option = 104;
                        break;
                    case "POS_LUCK_5":
                    case 105:
                        t.option = 105;
                        break;
                    case "POS_LUCK_6":
                    case 106:
                        t.option = 106
                }
                return null != e.odds && (m.Long ? (t.odds = m.Long.fromValue(e.odds)).unsigned = !0 : "string" == typeof e.odds ? t.odds = parseInt(e.odds, 10) : "number" == typeof e.odds ? t.odds = e.odds : "object" == typeof e.odds && (t.odds = new m.LongBits(e.odds.low >>> 0, e.odds.high >>> 0).toNumber(!0))), null != e.limit && (m.Long ? (t.limit = m.Long.fromValue(e.limit)).unsigned = !0 : "string" == typeof e.limit ? t.limit = parseInt(e.limit, 10) : "number" == typeof e.limit ? t.limit = e.limit : "object" == typeof e.limit && (t.limit = new m.LongBits(e.limit.low >>> 0, e.limit.high >>> 0).toNumber(!0))), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.odds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.odds = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !0), o.limit = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.limit = t.longs === String ? "0" : 0
                }
                return null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.humanboy_proto.BetZoneOption[e.option] ? e.option : f.humanboy_proto.BetZoneOption[e.option] : e.option), null != e.odds && e.hasOwnProperty("odds") && ("number" == typeof e.odds ? o.odds = t.longs === String ? String(e.odds) : e.odds : o.odds = t.longs === String ? m.Long.prototype.toString.call(e.odds) : t.longs === Number ? new m.LongBits(e.odds.low >>> 0, e.odds.high >>> 0).toNumber(!0) : e.odds), null != e.limit && e.hasOwnProperty("limit") && ("number" == typeof e.limit ? o.limit = t.longs === String ? String(e.limit) : e.limit : o.limit = t.longs === String ? m.Long.prototype.toString.call(e.limit) : t.longs === Number ? new m.LongBits(e.limit.low >>> 0, e.limit.high >>> 0).toNumber(!0) : e.limit), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.OddsDetail"
            }, e
        }(), s.OptionLimit = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.option = 0, e.prototype.limitAmount = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(8).int32(e.option), null != e.limitAmount && Object.hasOwnProperty.call(e, "limitAmount") && t.uint32(16).uint64(e.limitAmount), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.OptionLimit; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.option = e.int32();
                            break;
                        case 2:
                            n.limitAmount = e.uint64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.option && e.hasOwnProperty("option")) switch (e.option) {
                    default:
                        return "option: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 106:
                }
                return null != e.limitAmount && e.hasOwnProperty("limitAmount") && !(m.isInteger(e.limitAmount) || e.limitAmount && m.isInteger(e.limitAmount.low) && m.isInteger(e.limitAmount.high)) ? "limitAmount: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.OptionLimit) return e;
                var t = new f.humanboy_proto.OptionLimit;
                switch (e.option) {
                    default:
                        if ("number" == typeof e.option) {
                            t.option = e.option;
                            break
                        }
                        break;
                    case "BetZoneOption_DUMMY":
                    case 0:
                        t.option = 0;
                        break;
                    case "HOST":
                    case 1:
                        t.option = 1;
                        break;
                    case "POS1":
                    case 2:
                        t.option = 2;
                        break;
                    case "POS2":
                    case 3:
                        t.option = 3;
                        break;
                    case "POS3":
                    case 4:
                        t.option = 4;
                        break;
                    case "POS4":
                    case 5:
                        t.option = 5;
                        break;
                    case "POS_LUCK":
                    case 100:
                        t.option = 100;
                        break;
                    case "POS_LUCK_1":
                    case 101:
                        t.option = 101;
                        break;
                    case "POS_LUCK_2":
                    case 102:
                        t.option = 102;
                        break;
                    case "POS_LUCK_3":
                    case 103:
                        t.option = 103;
                        break;
                    case "POS_LUCK_4":
                    case 104:
                        t.option = 104;
                        break;
                    case "POS_LUCK_5":
                    case 105:
                        t.option = 105;
                        break;
                    case "POS_LUCK_6":
                    case 106:
                        t.option = 106
                }
                return null != e.limitAmount && (m.Long ? (t.limitAmount = m.Long.fromValue(e.limitAmount)).unsigned = !0 : "string" == typeof e.limitAmount ? t.limitAmount = parseInt(e.limitAmount, 10) : "number" == typeof e.limitAmount ? t.limitAmount = e.limitAmount : "object" == typeof e.limitAmount && (t.limitAmount = new m.LongBits(e.limitAmount.low >>> 0, e.limitAmount.high >>> 0).toNumber(!0))), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults)
                    if (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.limitAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.limitAmount = t.longs === String ? "0" : 0;
                return null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.humanboy_proto.BetZoneOption[e.option] ? e.option : f.humanboy_proto.BetZoneOption[e.option] : e.option), null != e.limitAmount && e.hasOwnProperty("limitAmount") && ("number" == typeof e.limitAmount ? o.limitAmount = t.longs === String ? String(e.limitAmount) : e.limitAmount : o.limitAmount = t.longs === String ? m.Long.prototype.toString.call(e.limitAmount) : t.longs === Number ? new m.LongBits(e.limitAmount.low >>> 0, e.limitAmount.high >>> 0).toNumber(!0) : e.limitAmount), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.OptionLimit"
            }, e
        }(), s.GameListReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.GameListReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.humanboy_proto.GameListReq ? e : new f.humanboy_proto.GameListReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.GameListReq"
            }, e
        }(), s.StartSettlementNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.StartSettlementNotify; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.humanboy_proto.StartSettlementNotify ? e : new f.humanboy_proto.StartSettlementNotify
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.StartSettlementNotify"
            }, e
        }(), s.GameListResp = function() {
            function e(e) {
                if (this.gameList = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.gameList = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.gameList && e.gameList.length)
                    for (var o = 0; o < e.gameList.length; ++o) f.humanboy_proto.GameSnapShot.encode(e.gameList[o], t.uint32(10).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.GameListResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.gameList && n.gameList.length || (n.gameList = []), n.gameList.push(f.humanboy_proto.GameSnapShot.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.gameList && e.hasOwnProperty("gameList")) {
                    if (!Array.isArray(e.gameList)) return "gameList: array expected";
                    for (var t = 0; t < e.gameList.length; ++t) {
                        var o = f.humanboy_proto.GameSnapShot.verify(e.gameList[t]);
                        if (o) return "gameList." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.GameListResp) return e;
                var t = new f.humanboy_proto.GameListResp;
                if (e.gameList) {
                    if (!Array.isArray(e.gameList)) throw TypeError(".humanboy_proto.GameListResp.gameList: array expected");
                    t.gameList = [];
                    for (var o = 0; o < e.gameList.length; ++o) {
                        if ("object" != typeof e.gameList[o]) throw TypeError(".humanboy_proto.GameListResp.gameList: object expected");
                        t.gameList[o] = f.humanboy_proto.GameSnapShot.fromObject(e.gameList[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.gameList = []), e.gameList && e.gameList.length) {
                    o.gameList = [];
                    for (var n = 0; n < e.gameList.length; ++n) o.gameList[n] = f.humanboy_proto.GameSnapShot.toObject(e.gameList[n], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.GameListResp"
            }, e
        }(), s.GameSnapShot = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.param = null, e.prototype.playerNum = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.param && Object.hasOwnProperty.call(e, "param") && f.humanboy_proto.RoomParam.encode(e.param, t.uint32(10).fork()).ldelim(), null != e.playerNum && Object.hasOwnProperty.call(e, "playerNum") && t.uint32(16).int32(e.playerNum), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.GameSnapShot; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.param = f.humanboy_proto.RoomParam.decode(e, e.uint32());
                            break;
                        case 2:
                            n.playerNum = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.param && e.hasOwnProperty("param")) {
                    var t = f.humanboy_proto.RoomParam.verify(e.param);
                    if (t) return "param." + t
                }
                return null != e.playerNum && e.hasOwnProperty("playerNum") && !m.isInteger(e.playerNum) ? "playerNum: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.GameSnapShot) return e;
                var t = new f.humanboy_proto.GameSnapShot;
                if (null != e.param) {
                    if ("object" != typeof e.param) throw TypeError(".humanboy_proto.GameSnapShot.param: object expected");
                    t.param = f.humanboy_proto.RoomParam.fromObject(e.param)
                }
                return null != e.playerNum && (t.playerNum = 0 | e.playerNum), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.param = null, o.playerNum = 0), null != e.param && e.hasOwnProperty("param") && (o.param = f.humanboy_proto.RoomParam.toObject(e.param, t)), null != e.playerNum && e.hasOwnProperty("playerNum") && (o.playerNum = e.playerNum), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.GameSnapShot"
            }, e
        }(), s.GameDataSynNotify = function() {
            function e(e) {
                if (this.optionInfo = [], this.lastResult = [], this.players = [], this.dealer = [], this.optionResults = [], this.betCoinOption = [], this.items = [], this.AutoBetCountList = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.param = null, e.prototype.optionInfo = m.emptyArray, e.prototype.lastResult = m.emptyArray, e.prototype.curState = 0, e.prototype.nextRoundEndStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.players = m.emptyArray, e.prototype.canAuto = !1, e.prototype.cachedNotifyMsg = null, e.prototype.leftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.dealer = m.emptyArray, e.prototype.onDealerList = 0, e.prototype.jackpotLeftMoney = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.beDealerNum = 0, e.prototype.optionResults = m.emptyArray, e.prototype.isWaitDownDealer = !1, e.prototype.surplusStockNum = 0, e.prototype.occupyStockNum = 0, e.prototype.showMiddleUpDealerBtn = !1, e.prototype.totalStockNum = 0, e.prototype.betCoinOption = m.emptyArray, e.prototype.autoLevel = 0, e.prototype.items = m.emptyArray, e.prototype.usedAutoBetCount = 0, e.prototype.selectAutoBetCount = 0, e.prototype.AutoBetCountList = m.emptyArray, e.prototype.canAdvanceAuto = !1, e.prototype.BetButtonLimitAmount = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.param && Object.hasOwnProperty.call(e, "param") && f.humanboy_proto.RoomParam.encode(e.param, t.uint32(10).fork()).ldelim(), null != e.optionInfo && e.optionInfo.length)
                    for (var o = 0; o < e.optionInfo.length; ++o) f.humanboy_proto.BetOptionInfo.encode(e.optionInfo[o], t.uint32(18).fork()).ldelim();
                if (null != e.lastResult && e.lastResult.length) {
                    for (t.uint32(26).fork(), o = 0; o < e.lastResult.length; ++o) t.int32(e.lastResult[o]);
                    t.ldelim()
                }
                if (null != e.curState && Object.hasOwnProperty.call(e, "curState") && t.uint32(32).int32(e.curState), null != e.nextRoundEndStamp && Object.hasOwnProperty.call(e, "nextRoundEndStamp") && t.uint32(40).int64(e.nextRoundEndStamp), null != e.players && e.players.length)
                    for (o = 0; o < e.players.length; ++o) f.humanboy_proto.GamePlayer.encode(e.players[o], t.uint32(50).fork()).ldelim();
                if (null != e.canAuto && Object.hasOwnProperty.call(e, "canAuto") && t.uint32(64).bool(e.canAuto), null != e.cachedNotifyMsg && Object.hasOwnProperty.call(e, "cachedNotifyMsg") && f.humanboy_proto.GameRoundEndNotify.encode(e.cachedNotifyMsg, t.uint32(74).fork()).ldelim(), null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(80).int64(e.leftSeconds), null != e.dealer && e.dealer.length)
                    for (o = 0; o < e.dealer.length; ++o) f.humanboy_proto.DealerPlayerInfo.encode(e.dealer[o], t.uint32(90).fork()).ldelim();
                if (null != e.onDealerList && Object.hasOwnProperty.call(e, "onDealerList") && t.uint32(96).uint32(e.onDealerList), null != e.jackpotLeftMoney && Object.hasOwnProperty.call(e, "jackpotLeftMoney") && t.uint32(104).int64(e.jackpotLeftMoney), null != e.beDealerNum && Object.hasOwnProperty.call(e, "beDealerNum") && t.uint32(112).int32(e.beDealerNum), null != e.optionResults && e.optionResults.length)
                    for (o = 0; o < e.optionResults.length; ++o) f.humanboy_proto.OptionResults.encode(e.optionResults[o], t.uint32(122).fork()).ldelim();
                if (null != e.isWaitDownDealer && Object.hasOwnProperty.call(e, "isWaitDownDealer") && t.uint32(128).bool(e.isWaitDownDealer), null != e.surplusStockNum && Object.hasOwnProperty.call(e, "surplusStockNum") && t.uint32(136).uint32(e.surplusStockNum), null != e.occupyStockNum && Object.hasOwnProperty.call(e, "occupyStockNum") && t.uint32(144).uint32(e.occupyStockNum), null != e.showMiddleUpDealerBtn && Object.hasOwnProperty.call(e, "showMiddleUpDealerBtn") && t.uint32(152).bool(e.showMiddleUpDealerBtn), null != e.totalStockNum && Object.hasOwnProperty.call(e, "totalStockNum") && t.uint32(160).uint32(e.totalStockNum), null != e.betCoinOption && e.betCoinOption.length) {
                    for (t.uint32(170).fork(), o = 0; o < e.betCoinOption.length; ++o) t.uint64(e.betCoinOption[o]);
                    t.ldelim()
                }
                if (null != e.autoLevel && Object.hasOwnProperty.call(e, "autoLevel") && t.uint32(176).int32(e.autoLevel), null != e.items && e.items.length)
                    for (o = 0; o < e.items.length; ++o) f.humanboy_proto.FeeItems.encode(e.items[o], t.uint32(186).fork()).ldelim();
                if (null != e.usedAutoBetCount && Object.hasOwnProperty.call(e, "usedAutoBetCount") && t.uint32(192).int32(e.usedAutoBetCount), null != e.selectAutoBetCount && Object.hasOwnProperty.call(e, "selectAutoBetCount") && t.uint32(200).int32(e.selectAutoBetCount), null != e.AutoBetCountList && e.AutoBetCountList.length) {
                    for (t.uint32(210).fork(), o = 0; o < e.AutoBetCountList.length; ++o) t.int32(e.AutoBetCountList[o]);
                    t.ldelim()
                }
                return null != e.canAdvanceAuto && Object.hasOwnProperty.call(e, "canAdvanceAuto") && t.uint32(216).bool(e.canAdvanceAuto), null != e.BetButtonLimitAmount && Object.hasOwnProperty.call(e, "BetButtonLimitAmount") && t.uint32(224).int64(e.BetButtonLimitAmount), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.GameDataSynNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.param = f.humanboy_proto.RoomParam.decode(e, e.uint32());
                            break;
                        case 2:
                            n.optionInfo && n.optionInfo.length || (n.optionInfo = []), n.optionInfo.push(f.humanboy_proto.BetOptionInfo.decode(e, e.uint32()));
                            break;
                        case 3:
                            if (n.lastResult && n.lastResult.length || (n.lastResult = []), 2 == (7 & r))
                                for (var a = e.uint32() + e.pos; e.pos < a;) n.lastResult.push(e.int32());
                            else n.lastResult.push(e.int32());
                            break;
                        case 4:
                            n.curState = e.int32();
                            break;
                        case 5:
                            n.nextRoundEndStamp = e.int64();
                            break;
                        case 6:
                            n.players && n.players.length || (n.players = []), n.players.push(f.humanboy_proto.GamePlayer.decode(e, e.uint32()));
                            break;
                        case 8:
                            n.canAuto = e.bool();
                            break;
                        case 9:
                            n.cachedNotifyMsg = f.humanboy_proto.GameRoundEndNotify.decode(e, e.uint32());
                            break;
                        case 10:
                            n.leftSeconds = e.int64();
                            break;
                        case 11:
                            n.dealer && n.dealer.length || (n.dealer = []), n.dealer.push(f.humanboy_proto.DealerPlayerInfo.decode(e, e.uint32()));
                            break;
                        case 12:
                            n.onDealerList = e.uint32();
                            break;
                        case 13:
                            n.jackpotLeftMoney = e.int64();
                            break;
                        case 14:
                            n.beDealerNum = e.int32();
                            break;
                        case 15:
                            n.optionResults && n.optionResults.length || (n.optionResults = []), n.optionResults.push(f.humanboy_proto.OptionResults.decode(e, e.uint32()));
                            break;
                        case 16:
                            n.isWaitDownDealer = e.bool();
                            break;
                        case 17:
                            n.surplusStockNum = e.uint32();
                            break;
                        case 18:
                            n.occupyStockNum = e.uint32();
                            break;
                        case 19:
                            n.showMiddleUpDealerBtn = e.bool();
                            break;
                        case 20:
                            n.totalStockNum = e.uint32();
                            break;
                        case 21:
                            if (n.betCoinOption && n.betCoinOption.length || (n.betCoinOption = []), 2 == (7 & r))
                                for (a = e.uint32() + e.pos; e.pos < a;) n.betCoinOption.push(e.uint64());
                            else n.betCoinOption.push(e.uint64());
                            break;
                        case 22:
                            n.autoLevel = e.int32();
                            break;
                        case 23:
                            n.items && n.items.length || (n.items = []), n.items.push(f.humanboy_proto.FeeItems.decode(e, e.uint32()));
                            break;
                        case 24:
                            n.usedAutoBetCount = e.int32();
                            break;
                        case 25:
                            n.selectAutoBetCount = e.int32();
                            break;
                        case 26:
                            if (n.AutoBetCountList && n.AutoBetCountList.length || (n.AutoBetCountList = []), 2 == (7 & r))
                                for (a = e.uint32() + e.pos; e.pos < a;) n.AutoBetCountList.push(e.int32());
                            else n.AutoBetCountList.push(e.int32());
                            break;
                        case 27:
                            n.canAdvanceAuto = e.bool();
                            break;
                        case 28:
                            n.BetButtonLimitAmount = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.param && e.hasOwnProperty("param") && (o = f.humanboy_proto.RoomParam.verify(e.param))) return "param." + o;
                if (null != e.optionInfo && e.hasOwnProperty("optionInfo")) {
                    if (!Array.isArray(e.optionInfo)) return "optionInfo: array expected";
                    for (var t = 0; t < e.optionInfo.length; ++t)
                        if (o = f.humanboy_proto.BetOptionInfo.verify(e.optionInfo[t])) return "optionInfo." + o
                }
                if (null != e.lastResult && e.hasOwnProperty("lastResult")) {
                    if (!Array.isArray(e.lastResult)) return "lastResult: array expected";
                    for (t = 0; t < e.lastResult.length; ++t)
                        if (!m.isInteger(e.lastResult[t])) return "lastResult: integer[] expected"
                }
                if (null != e.curState && e.hasOwnProperty("curState")) switch (e.curState) {
                    default:
                        return "curState: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                }
                if (null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && !(m.isInteger(e.nextRoundEndStamp) || e.nextRoundEndStamp && m.isInteger(e.nextRoundEndStamp.low) && m.isInteger(e.nextRoundEndStamp.high))) return "nextRoundEndStamp: integer|Long expected";
                if (null != e.players && e.hasOwnProperty("players")) {
                    if (!Array.isArray(e.players)) return "players: array expected";
                    for (t = 0; t < e.players.length; ++t)
                        if (o = f.humanboy_proto.GamePlayer.verify(e.players[t])) return "players." + o
                }
                if (null != e.canAuto && e.hasOwnProperty("canAuto") && "boolean" != typeof e.canAuto) return "canAuto: boolean expected";
                if (null != e.cachedNotifyMsg && e.hasOwnProperty("cachedNotifyMsg") && (o = f.humanboy_proto.GameRoundEndNotify.verify(e.cachedNotifyMsg))) return "cachedNotifyMsg." + o;
                if (null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(m.isInteger(e.leftSeconds) || e.leftSeconds && m.isInteger(e.leftSeconds.low) && m.isInteger(e.leftSeconds.high))) return "leftSeconds: integer|Long expected";
                if (null != e.dealer && e.hasOwnProperty("dealer")) {
                    if (!Array.isArray(e.dealer)) return "dealer: array expected";
                    for (t = 0; t < e.dealer.length; ++t)
                        if (o = f.humanboy_proto.DealerPlayerInfo.verify(e.dealer[t])) return "dealer." + o
                }
                if (null != e.onDealerList && e.hasOwnProperty("onDealerList") && !m.isInteger(e.onDealerList)) return "onDealerList: integer expected";
                if (null != e.jackpotLeftMoney && e.hasOwnProperty("jackpotLeftMoney") && !(m.isInteger(e.jackpotLeftMoney) || e.jackpotLeftMoney && m.isInteger(e.jackpotLeftMoney.low) && m.isInteger(e.jackpotLeftMoney.high))) return "jackpotLeftMoney: integer|Long expected";
                if (null != e.beDealerNum && e.hasOwnProperty("beDealerNum") && !m.isInteger(e.beDealerNum)) return "beDealerNum: integer expected";
                if (null != e.optionResults && e.hasOwnProperty("optionResults")) {
                    if (!Array.isArray(e.optionResults)) return "optionResults: array expected";
                    for (t = 0; t < e.optionResults.length; ++t)
                        if (o = f.humanboy_proto.OptionResults.verify(e.optionResults[t])) return "optionResults." + o
                }
                if (null != e.isWaitDownDealer && e.hasOwnProperty("isWaitDownDealer") && "boolean" != typeof e.isWaitDownDealer) return "isWaitDownDealer: boolean expected";
                if (null != e.surplusStockNum && e.hasOwnProperty("surplusStockNum") && !m.isInteger(e.surplusStockNum)) return "surplusStockNum: integer expected";
                if (null != e.occupyStockNum && e.hasOwnProperty("occupyStockNum") && !m.isInteger(e.occupyStockNum)) return "occupyStockNum: integer expected";
                if (null != e.showMiddleUpDealerBtn && e.hasOwnProperty("showMiddleUpDealerBtn") && "boolean" != typeof e.showMiddleUpDealerBtn) return "showMiddleUpDealerBtn: boolean expected";
                if (null != e.totalStockNum && e.hasOwnProperty("totalStockNum") && !m.isInteger(e.totalStockNum)) return "totalStockNum: integer expected";
                if (null != e.betCoinOption && e.hasOwnProperty("betCoinOption")) {
                    if (!Array.isArray(e.betCoinOption)) return "betCoinOption: array expected";
                    for (t = 0; t < e.betCoinOption.length; ++t)
                        if (!(m.isInteger(e.betCoinOption[t]) || e.betCoinOption[t] && m.isInteger(e.betCoinOption[t].low) && m.isInteger(e.betCoinOption[t].high))) return "betCoinOption: integer|Long[] expected"
                }
                if (null != e.autoLevel && e.hasOwnProperty("autoLevel")) switch (e.autoLevel) {
                    default:
                        return "autoLevel: enum value expected";
                    case 0:
                    case 1:
                }
                if (null != e.items && e.hasOwnProperty("items")) {
                    if (!Array.isArray(e.items)) return "items: array expected";
                    for (t = 0; t < e.items.length; ++t) {
                        var o;
                        if (o = f.humanboy_proto.FeeItems.verify(e.items[t])) return "items." + o
                    }
                }
                if (null != e.usedAutoBetCount && e.hasOwnProperty("usedAutoBetCount") && !m.isInteger(e.usedAutoBetCount)) return "usedAutoBetCount: integer expected";
                if (null != e.selectAutoBetCount && e.hasOwnProperty("selectAutoBetCount") && !m.isInteger(e.selectAutoBetCount)) return "selectAutoBetCount: integer expected";
                if (null != e.AutoBetCountList && e.hasOwnProperty("AutoBetCountList")) {
                    if (!Array.isArray(e.AutoBetCountList)) return "AutoBetCountList: array expected";
                    for (t = 0; t < e.AutoBetCountList.length; ++t)
                        if (!m.isInteger(e.AutoBetCountList[t])) return "AutoBetCountList: integer[] expected"
                }
                return null != e.canAdvanceAuto && e.hasOwnProperty("canAdvanceAuto") && "boolean" != typeof e.canAdvanceAuto ? "canAdvanceAuto: boolean expected" : null != e.BetButtonLimitAmount && e.hasOwnProperty("BetButtonLimitAmount") && !(m.isInteger(e.BetButtonLimitAmount) || e.BetButtonLimitAmount && m.isInteger(e.BetButtonLimitAmount.low) && m.isInteger(e.BetButtonLimitAmount.high)) ? "BetButtonLimitAmount: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.GameDataSynNotify) return e;
                var t = new f.humanboy_proto.GameDataSynNotify;
                if (null != e.param) {
                    if ("object" != typeof e.param) throw TypeError(".humanboy_proto.GameDataSynNotify.param: object expected");
                    t.param = f.humanboy_proto.RoomParam.fromObject(e.param)
                }
                if (e.optionInfo) {
                    if (!Array.isArray(e.optionInfo)) throw TypeError(".humanboy_proto.GameDataSynNotify.optionInfo: array expected");
                    t.optionInfo = [];
                    for (var o = 0; o < e.optionInfo.length; ++o) {
                        if ("object" != typeof e.optionInfo[o]) throw TypeError(".humanboy_proto.GameDataSynNotify.optionInfo: object expected");
                        t.optionInfo[o] = f.humanboy_proto.BetOptionInfo.fromObject(e.optionInfo[o])
                    }
                }
                if (e.lastResult) {
                    if (!Array.isArray(e.lastResult)) throw TypeError(".humanboy_proto.GameDataSynNotify.lastResult: array expected");
                    for (t.lastResult = [], o = 0; o < e.lastResult.length; ++o) t.lastResult[o] = 0 | e.lastResult[o]
                }
                switch (e.curState) {
                    default:
                        if ("number" == typeof e.curState) {
                            t.curState = e.curState;
                            break
                        }
                        break;
                    case "RoundState_DUMMY":
                    case 0:
                        t.curState = 0;
                        break;
                    case "GAME_PENDING":
                    case 1:
                        t.curState = 1;
                        break;
                    case "NEW_ROUND":
                    case 2:
                        t.curState = 2;
                        break;
                    case "BET":
                    case 3:
                        t.curState = 3;
                        break;
                    case "WAIT_NEXT_ROUND":
                    case 4:
                        t.curState = 4;
                        break;
                    case "WAIT_NEXT_ROUND2":
                    case 5:
                        t.curState = 5
                }
                if (null != e.nextRoundEndStamp && (m.Long ? (t.nextRoundEndStamp = m.Long.fromValue(e.nextRoundEndStamp)).unsigned = !1 : "string" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = parseInt(e.nextRoundEndStamp, 10) : "number" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = e.nextRoundEndStamp : "object" == typeof e.nextRoundEndStamp && (t.nextRoundEndStamp = new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber())), e.players) {
                    if (!Array.isArray(e.players)) throw TypeError(".humanboy_proto.GameDataSynNotify.players: array expected");
                    for (t.players = [], o = 0; o < e.players.length; ++o) {
                        if ("object" != typeof e.players[o]) throw TypeError(".humanboy_proto.GameDataSynNotify.players: object expected");
                        t.players[o] = f.humanboy_proto.GamePlayer.fromObject(e.players[o])
                    }
                }
                if (null != e.canAuto && (t.canAuto = Boolean(e.canAuto)), null != e.cachedNotifyMsg) {
                    if ("object" != typeof e.cachedNotifyMsg) throw TypeError(".humanboy_proto.GameDataSynNotify.cachedNotifyMsg: object expected");
                    t.cachedNotifyMsg = f.humanboy_proto.GameRoundEndNotify.fromObject(e.cachedNotifyMsg)
                }
                if (null != e.leftSeconds && (m.Long ? (t.leftSeconds = m.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), e.dealer) {
                    if (!Array.isArray(e.dealer)) throw TypeError(".humanboy_proto.GameDataSynNotify.dealer: array expected");
                    for (t.dealer = [], o = 0; o < e.dealer.length; ++o) {
                        if ("object" != typeof e.dealer[o]) throw TypeError(".humanboy_proto.GameDataSynNotify.dealer: object expected");
                        t.dealer[o] = f.humanboy_proto.DealerPlayerInfo.fromObject(e.dealer[o])
                    }
                }
                if (null != e.onDealerList && (t.onDealerList = e.onDealerList >>> 0), null != e.jackpotLeftMoney && (m.Long ? (t.jackpotLeftMoney = m.Long.fromValue(e.jackpotLeftMoney)).unsigned = !1 : "string" == typeof e.jackpotLeftMoney ? t.jackpotLeftMoney = parseInt(e.jackpotLeftMoney, 10) : "number" == typeof e.jackpotLeftMoney ? t.jackpotLeftMoney = e.jackpotLeftMoney : "object" == typeof e.jackpotLeftMoney && (t.jackpotLeftMoney = new m.LongBits(e.jackpotLeftMoney.low >>> 0, e.jackpotLeftMoney.high >>> 0).toNumber())), null != e.beDealerNum && (t.beDealerNum = 0 | e.beDealerNum), e.optionResults) {
                    if (!Array.isArray(e.optionResults)) throw TypeError(".humanboy_proto.GameDataSynNotify.optionResults: array expected");
                    for (t.optionResults = [], o = 0; o < e.optionResults.length; ++o) {
                        if ("object" != typeof e.optionResults[o]) throw TypeError(".humanboy_proto.GameDataSynNotify.optionResults: object expected");
                        t.optionResults[o] = f.humanboy_proto.OptionResults.fromObject(e.optionResults[o])
                    }
                }
                if (null != e.isWaitDownDealer && (t.isWaitDownDealer = Boolean(e.isWaitDownDealer)), null != e.surplusStockNum && (t.surplusStockNum = e.surplusStockNum >>> 0), null != e.occupyStockNum && (t.occupyStockNum = e.occupyStockNum >>> 0), null != e.showMiddleUpDealerBtn && (t.showMiddleUpDealerBtn = Boolean(e.showMiddleUpDealerBtn)), null != e.totalStockNum && (t.totalStockNum = e.totalStockNum >>> 0), e.betCoinOption) {
                    if (!Array.isArray(e.betCoinOption)) throw TypeError(".humanboy_proto.GameDataSynNotify.betCoinOption: array expected");
                    for (t.betCoinOption = [], o = 0; o < e.betCoinOption.length; ++o) m.Long ? (t.betCoinOption[o] = m.Long.fromValue(e.betCoinOption[o])).unsigned = !0 : "string" == typeof e.betCoinOption[o] ? t.betCoinOption[o] = parseInt(e.betCoinOption[o], 10) : "number" == typeof e.betCoinOption[o] ? t.betCoinOption[o] = e.betCoinOption[o] : "object" == typeof e.betCoinOption[o] && (t.betCoinOption[o] = new m.LongBits(e.betCoinOption[o].low >>> 0, e.betCoinOption[o].high >>> 0).toNumber(!0))
                }
                switch (e.autoLevel) {
                    default:
                        if ("number" == typeof e.autoLevel) {
                            t.autoLevel = e.autoLevel;
                            break
                        }
                        break;
                    case "Level_Normal":
                    case 0:
                        t.autoLevel = 0;
                        break;
                    case "Level_Advance":
                    case 1:
                        t.autoLevel = 1
                }
                if (e.items) {
                    if (!Array.isArray(e.items)) throw TypeError(".humanboy_proto.GameDataSynNotify.items: array expected");
                    for (t.items = [], o = 0; o < e.items.length; ++o) {
                        if ("object" != typeof e.items[o]) throw TypeError(".humanboy_proto.GameDataSynNotify.items: object expected");
                        t.items[o] = f.humanboy_proto.FeeItems.fromObject(e.items[o])
                    }
                }
                if (null != e.usedAutoBetCount && (t.usedAutoBetCount = 0 | e.usedAutoBetCount), null != e.selectAutoBetCount && (t.selectAutoBetCount = 0 | e.selectAutoBetCount), e.AutoBetCountList) {
                    if (!Array.isArray(e.AutoBetCountList)) throw TypeError(".humanboy_proto.GameDataSynNotify.AutoBetCountList: array expected");
                    for (t.AutoBetCountList = [], o = 0; o < e.AutoBetCountList.length; ++o) t.AutoBetCountList[o] = 0 | e.AutoBetCountList[o]
                }
                return null != e.canAdvanceAuto && (t.canAdvanceAuto = Boolean(e.canAdvanceAuto)), null != e.BetButtonLimitAmount && (m.Long ? (t.BetButtonLimitAmount = m.Long.fromValue(e.BetButtonLimitAmount)).unsigned = !1 : "string" == typeof e.BetButtonLimitAmount ? t.BetButtonLimitAmount = parseInt(e.BetButtonLimitAmount, 10) : "number" == typeof e.BetButtonLimitAmount ? t.BetButtonLimitAmount = e.BetButtonLimitAmount : "object" == typeof e.BetButtonLimitAmount && (t.BetButtonLimitAmount = new m.LongBits(e.BetButtonLimitAmount.low >>> 0, e.BetButtonLimitAmount.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.optionInfo = [], o.lastResult = [], o.players = [], o.dealer = [], o.optionResults = [], o.betCoinOption = [], o.items = [], o.AutoBetCountList = []), t.defaults) {
                    if (o.param = null, o.curState = t.enums === String ? "RoundState_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.nextRoundEndStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.nextRoundEndStamp = t.longs === String ? "0" : 0;
                    o.canAuto = !1, o.cachedNotifyMsg = null, m.Long ? (n = new m.Long(0, 0, !1), o.leftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.leftSeconds = t.longs === String ? "0" : 0, o.onDealerList = 0, m.Long ? (n = new m.Long(0, 0, !1), o.jackpotLeftMoney = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.jackpotLeftMoney = t.longs === String ? "0" : 0, o.beDealerNum = 0, o.isWaitDownDealer = !1, o.surplusStockNum = 0, o.occupyStockNum = 0, o.showMiddleUpDealerBtn = !1, o.totalStockNum = 0, o.autoLevel = t.enums === String ? "Level_Normal" : 0, o.usedAutoBetCount = 0, o.selectAutoBetCount = 0, o.canAdvanceAuto = !1, m.Long ? (n = new m.Long(0, 0, !1), o.BetButtonLimitAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.BetButtonLimitAmount = t.longs === String ? "0" : 0
                }
                if (null != e.param && e.hasOwnProperty("param") && (o.param = f.humanboy_proto.RoomParam.toObject(e.param, t)), e.optionInfo && e.optionInfo.length) {
                    o.optionInfo = [];
                    for (var r = 0; r < e.optionInfo.length; ++r) o.optionInfo[r] = f.humanboy_proto.BetOptionInfo.toObject(e.optionInfo[r], t)
                }
                if (e.lastResult && e.lastResult.length)
                    for (o.lastResult = [], r = 0; r < e.lastResult.length; ++r) o.lastResult[r] = e.lastResult[r];
                if (null != e.curState && e.hasOwnProperty("curState") && (o.curState = t.enums === String ? void 0 === f.humanboy_proto.RoundState[e.curState] ? e.curState : f.humanboy_proto.RoundState[e.curState] : e.curState), null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && ("number" == typeof e.nextRoundEndStamp ? o.nextRoundEndStamp = t.longs === String ? String(e.nextRoundEndStamp) : e.nextRoundEndStamp : o.nextRoundEndStamp = t.longs === String ? m.Long.prototype.toString.call(e.nextRoundEndStamp) : t.longs === Number ? new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber() : e.nextRoundEndStamp), e.players && e.players.length)
                    for (o.players = [], r = 0; r < e.players.length; ++r) o.players[r] = f.humanboy_proto.GamePlayer.toObject(e.players[r], t);
                if (null != e.canAuto && e.hasOwnProperty("canAuto") && (o.canAuto = e.canAuto), null != e.cachedNotifyMsg && e.hasOwnProperty("cachedNotifyMsg") && (o.cachedNotifyMsg = f.humanboy_proto.GameRoundEndNotify.toObject(e.cachedNotifyMsg, t)), null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? o.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : o.leftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), e.dealer && e.dealer.length)
                    for (o.dealer = [], r = 0; r < e.dealer.length; ++r) o.dealer[r] = f.humanboy_proto.DealerPlayerInfo.toObject(e.dealer[r], t);
                if (null != e.onDealerList && e.hasOwnProperty("onDealerList") && (o.onDealerList = e.onDealerList), null != e.jackpotLeftMoney && e.hasOwnProperty("jackpotLeftMoney") && ("number" == typeof e.jackpotLeftMoney ? o.jackpotLeftMoney = t.longs === String ? String(e.jackpotLeftMoney) : e.jackpotLeftMoney : o.jackpotLeftMoney = t.longs === String ? m.Long.prototype.toString.call(e.jackpotLeftMoney) : t.longs === Number ? new m.LongBits(e.jackpotLeftMoney.low >>> 0, e.jackpotLeftMoney.high >>> 0).toNumber() : e.jackpotLeftMoney), null != e.beDealerNum && e.hasOwnProperty("beDealerNum") && (o.beDealerNum = e.beDealerNum), e.optionResults && e.optionResults.length)
                    for (o.optionResults = [], r = 0; r < e.optionResults.length; ++r) o.optionResults[r] = f.humanboy_proto.OptionResults.toObject(e.optionResults[r], t);
                if (null != e.isWaitDownDealer && e.hasOwnProperty("isWaitDownDealer") && (o.isWaitDownDealer = e.isWaitDownDealer), null != e.surplusStockNum && e.hasOwnProperty("surplusStockNum") && (o.surplusStockNum = e.surplusStockNum), null != e.occupyStockNum && e.hasOwnProperty("occupyStockNum") && (o.occupyStockNum = e.occupyStockNum), null != e.showMiddleUpDealerBtn && e.hasOwnProperty("showMiddleUpDealerBtn") && (o.showMiddleUpDealerBtn = e.showMiddleUpDealerBtn), null != e.totalStockNum && e.hasOwnProperty("totalStockNum") && (o.totalStockNum = e.totalStockNum), e.betCoinOption && e.betCoinOption.length)
                    for (o.betCoinOption = [], r = 0; r < e.betCoinOption.length; ++r) "number" == typeof e.betCoinOption[r] ? o.betCoinOption[r] = t.longs === String ? String(e.betCoinOption[r]) : e.betCoinOption[r] : o.betCoinOption[r] = t.longs === String ? m.Long.prototype.toString.call(e.betCoinOption[r]) : t.longs === Number ? new m.LongBits(e.betCoinOption[r].low >>> 0, e.betCoinOption[r].high >>> 0).toNumber(!0) : e.betCoinOption[r];
                if (null != e.autoLevel && e.hasOwnProperty("autoLevel") && (o.autoLevel = t.enums === String ? void 0 === f.humanboy_proto.AutoBetLevel[e.autoLevel] ? e.autoLevel : f.humanboy_proto.AutoBetLevel[e.autoLevel] : e.autoLevel), e.items && e.items.length)
                    for (o.items = [], r = 0; r < e.items.length; ++r) o.items[r] = f.humanboy_proto.FeeItems.toObject(e.items[r], t);
                if (null != e.usedAutoBetCount && e.hasOwnProperty("usedAutoBetCount") && (o.usedAutoBetCount = e.usedAutoBetCount), null != e.selectAutoBetCount && e.hasOwnProperty("selectAutoBetCount") && (o.selectAutoBetCount = e.selectAutoBetCount), e.AutoBetCountList && e.AutoBetCountList.length)
                    for (o.AutoBetCountList = [], r = 0; r < e.AutoBetCountList.length; ++r) o.AutoBetCountList[r] = e.AutoBetCountList[r];
                return null != e.canAdvanceAuto && e.hasOwnProperty("canAdvanceAuto") && (o.canAdvanceAuto = e.canAdvanceAuto), null != e.BetButtonLimitAmount && e.hasOwnProperty("BetButtonLimitAmount") && ("number" == typeof e.BetButtonLimitAmount ? o.BetButtonLimitAmount = t.longs === String ? String(e.BetButtonLimitAmount) : e.BetButtonLimitAmount : o.BetButtonLimitAmount = t.longs === String ? m.Long.prototype.toString.call(e.BetButtonLimitAmount) : t.longs === Number ? new m.LongBits(e.BetButtonLimitAmount.low >>> 0, e.BetButtonLimitAmount.high >>> 0).toNumber() : e.BetButtonLimitAmount), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.GameDataSynNotify"
            }, e
        }(), s.FeeItems = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.id = 0, e.prototype.coin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(8).int32(e.id), null != e.coin && Object.hasOwnProperty.call(e, "coin") && t.uint32(16).int64(e.coin), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.FeeItems; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.id = e.int32();
                            break;
                        case 2:
                            n.coin = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.id && e.hasOwnProperty("id") && !m.isInteger(e.id) ? "id: integer expected" : null != e.coin && e.hasOwnProperty("coin") && !(m.isInteger(e.coin) || e.coin && m.isInteger(e.coin.low) && m.isInteger(e.coin.high)) ? "coin: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.FeeItems) return e;
                var t = new f.humanboy_proto.FeeItems;
                return null != e.id && (t.id = 0 | e.id), null != e.coin && (m.Long ? (t.coin = m.Long.fromValue(e.coin)).unsigned = !1 : "string" == typeof e.coin ? t.coin = parseInt(e.coin, 10) : "number" == typeof e.coin ? t.coin = e.coin : "object" == typeof e.coin && (t.coin = new m.LongBits(e.coin.low >>> 0, e.coin.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults)
                    if (o.id = 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.coin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.coin = t.longs === String ? "0" : 0;
                return null != e.id && e.hasOwnProperty("id") && (o.id = e.id), null != e.coin && e.hasOwnProperty("coin") && ("number" == typeof e.coin ? o.coin = t.longs === String ? String(e.coin) : e.coin : o.coin = t.longs === String ? m.Long.prototype.toString.call(e.coin) : t.longs === Number ? new m.LongBits(e.coin.low >>> 0, e.coin.high >>> 0).toNumber() : e.coin), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.FeeItems"
            }, e
        }(), s.OptionResults = function() {
            function e(e) {
                if (this.results = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.option = 0, e.prototype.results = m.emptyArray, e.prototype.loseHand = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(8).int32(e.option), null != e.results && e.results.length) {
                    t.uint32(18).fork();
                    for (var o = 0; o < e.results.length; ++o) t.int32(e.results[o]);
                    t.ldelim()
                }
                return null != e.loseHand && Object.hasOwnProperty.call(e, "loseHand") && t.uint32(24).int32(e.loseHand), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.OptionResults; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.option = e.int32();
                            break;
                        case 2:
                            if (n.results && n.results.length || (n.results = []), 2 == (7 & r))
                                for (var a = e.uint32() + e.pos; e.pos < a;) n.results.push(e.int32());
                            else n.results.push(e.int32());
                            break;
                        case 3:
                            n.loseHand = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.option && e.hasOwnProperty("option")) switch (e.option) {
                    default:
                        return "option: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 106:
                }
                if (null != e.results && e.hasOwnProperty("results")) {
                    if (!Array.isArray(e.results)) return "results: array expected";
                    for (var t = 0; t < e.results.length; ++t)
                        if (!m.isInteger(e.results[t])) return "results: integer[] expected"
                }
                return null != e.loseHand && e.hasOwnProperty("loseHand") && !m.isInteger(e.loseHand) ? "loseHand: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.OptionResults) return e;
                var t = new f.humanboy_proto.OptionResults;
                switch (e.option) {
                    default:
                        if ("number" == typeof e.option) {
                            t.option = e.option;
                            break
                        }
                        break;
                    case "BetZoneOption_DUMMY":
                    case 0:
                        t.option = 0;
                        break;
                    case "HOST":
                    case 1:
                        t.option = 1;
                        break;
                    case "POS1":
                    case 2:
                        t.option = 2;
                        break;
                    case "POS2":
                    case 3:
                        t.option = 3;
                        break;
                    case "POS3":
                    case 4:
                        t.option = 4;
                        break;
                    case "POS4":
                    case 5:
                        t.option = 5;
                        break;
                    case "POS_LUCK":
                    case 100:
                        t.option = 100;
                        break;
                    case "POS_LUCK_1":
                    case 101:
                        t.option = 101;
                        break;
                    case "POS_LUCK_2":
                    case 102:
                        t.option = 102;
                        break;
                    case "POS_LUCK_3":
                    case 103:
                        t.option = 103;
                        break;
                    case "POS_LUCK_4":
                    case 104:
                        t.option = 104;
                        break;
                    case "POS_LUCK_5":
                    case 105:
                        t.option = 105;
                        break;
                    case "POS_LUCK_6":
                    case 106:
                        t.option = 106
                }
                if (e.results) {
                    if (!Array.isArray(e.results)) throw TypeError(".humanboy_proto.OptionResults.results: array expected");
                    t.results = [];
                    for (var o = 0; o < e.results.length; ++o) t.results[o] = 0 | e.results[o]
                }
                return null != e.loseHand && (t.loseHand = 0 | e.loseHand), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.results = []), t.defaults && (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, o.loseHand = 0), null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.humanboy_proto.BetZoneOption[e.option] ? e.option : f.humanboy_proto.BetZoneOption[e.option] : e.option), e.results && e.results.length) {
                    o.results = [];
                    for (var n = 0; n < e.results.length; ++n) o.results[n] = e.results[n]
                }
                return null != e.loseHand && e.hasOwnProperty("loseHand") && (o.loseHand = e.loseHand), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.OptionResults"
            }, e
        }(), s.BetOptionInfo = function() {
            function e(e) {
                if (this.amount = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.option = 0, e.prototype.selfBet = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.totalBet = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.amount = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(8).int32(e.option), null != e.selfBet && Object.hasOwnProperty.call(e, "selfBet") && t.uint32(16).uint64(e.selfBet), null != e.totalBet && Object.hasOwnProperty.call(e, "totalBet") && t.uint32(24).uint64(e.totalBet), null != e.amount && e.amount.length) {
                    t.uint32(34).fork();
                    for (var o = 0; o < e.amount.length; ++o) t.uint64(e.amount[o]);
                    t.ldelim()
                }
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.BetOptionInfo; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.option = e.int32();
                            break;
                        case 2:
                            n.selfBet = e.uint64();
                            break;
                        case 3:
                            n.totalBet = e.uint64();
                            break;
                        case 4:
                            if (n.amount && n.amount.length || (n.amount = []), 2 == (7 & r))
                                for (var a = e.uint32() + e.pos; e.pos < a;) n.amount.push(e.uint64());
                            else n.amount.push(e.uint64());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.option && e.hasOwnProperty("option")) switch (e.option) {
                    default:
                        return "option: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 106:
                }
                if (null != e.selfBet && e.hasOwnProperty("selfBet") && !(m.isInteger(e.selfBet) || e.selfBet && m.isInteger(e.selfBet.low) && m.isInteger(e.selfBet.high))) return "selfBet: integer|Long expected";
                if (null != e.totalBet && e.hasOwnProperty("totalBet") && !(m.isInteger(e.totalBet) || e.totalBet && m.isInteger(e.totalBet.low) && m.isInteger(e.totalBet.high))) return "totalBet: integer|Long expected";
                if (null != e.amount && e.hasOwnProperty("amount")) {
                    if (!Array.isArray(e.amount)) return "amount: array expected";
                    for (var t = 0; t < e.amount.length; ++t)
                        if (!(m.isInteger(e.amount[t]) || e.amount[t] && m.isInteger(e.amount[t].low) && m.isInteger(e.amount[t].high))) return "amount: integer|Long[] expected"
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.BetOptionInfo) return e;
                var t = new f.humanboy_proto.BetOptionInfo;
                switch (e.option) {
                    default:
                        if ("number" == typeof e.option) {
                            t.option = e.option;
                            break
                        }
                        break;
                    case "BetZoneOption_DUMMY":
                    case 0:
                        t.option = 0;
                        break;
                    case "HOST":
                    case 1:
                        t.option = 1;
                        break;
                    case "POS1":
                    case 2:
                        t.option = 2;
                        break;
                    case "POS2":
                    case 3:
                        t.option = 3;
                        break;
                    case "POS3":
                    case 4:
                        t.option = 4;
                        break;
                    case "POS4":
                    case 5:
                        t.option = 5;
                        break;
                    case "POS_LUCK":
                    case 100:
                        t.option = 100;
                        break;
                    case "POS_LUCK_1":
                    case 101:
                        t.option = 101;
                        break;
                    case "POS_LUCK_2":
                    case 102:
                        t.option = 102;
                        break;
                    case "POS_LUCK_3":
                    case 103:
                        t.option = 103;
                        break;
                    case "POS_LUCK_4":
                    case 104:
                        t.option = 104;
                        break;
                    case "POS_LUCK_5":
                    case 105:
                        t.option = 105;
                        break;
                    case "POS_LUCK_6":
                    case 106:
                        t.option = 106
                }
                if (null != e.selfBet && (m.Long ? (t.selfBet = m.Long.fromValue(e.selfBet)).unsigned = !0 : "string" == typeof e.selfBet ? t.selfBet = parseInt(e.selfBet, 10) : "number" == typeof e.selfBet ? t.selfBet = e.selfBet : "object" == typeof e.selfBet && (t.selfBet = new m.LongBits(e.selfBet.low >>> 0, e.selfBet.high >>> 0).toNumber(!0))), null != e.totalBet && (m.Long ? (t.totalBet = m.Long.fromValue(e.totalBet)).unsigned = !0 : "string" == typeof e.totalBet ? t.totalBet = parseInt(e.totalBet, 10) : "number" == typeof e.totalBet ? t.totalBet = e.totalBet : "object" == typeof e.totalBet && (t.totalBet = new m.LongBits(e.totalBet.low >>> 0, e.totalBet.high >>> 0).toNumber(!0))), e.amount) {
                    if (!Array.isArray(e.amount)) throw TypeError(".humanboy_proto.BetOptionInfo.amount: array expected");
                    t.amount = [];
                    for (var o = 0; o < e.amount.length; ++o) m.Long ? (t.amount[o] = m.Long.fromValue(e.amount[o])).unsigned = !0 : "string" == typeof e.amount[o] ? t.amount[o] = parseInt(e.amount[o], 10) : "number" == typeof e.amount[o] ? t.amount[o] = e.amount[o] : "object" == typeof e.amount[o] && (t.amount[o] = new m.LongBits(e.amount[o].low >>> 0, e.amount[o].high >>> 0).toNumber(!0))
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.amount = []), t.defaults) {
                    if (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.selfBet = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.selfBet = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !0), o.totalBet = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.totalBet = t.longs === String ? "0" : 0
                }
                if (null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.humanboy_proto.BetZoneOption[e.option] ? e.option : f.humanboy_proto.BetZoneOption[e.option] : e.option), null != e.selfBet && e.hasOwnProperty("selfBet") && ("number" == typeof e.selfBet ? o.selfBet = t.longs === String ? String(e.selfBet) : e.selfBet : o.selfBet = t.longs === String ? m.Long.prototype.toString.call(e.selfBet) : t.longs === Number ? new m.LongBits(e.selfBet.low >>> 0, e.selfBet.high >>> 0).toNumber(!0) : e.selfBet), null != e.totalBet && e.hasOwnProperty("totalBet") && ("number" == typeof e.totalBet ? o.totalBet = t.longs === String ? String(e.totalBet) : e.totalBet : o.totalBet = t.longs === String ? m.Long.prototype.toString.call(e.totalBet) : t.longs === Number ? new m.LongBits(e.totalBet.low >>> 0, e.totalBet.high >>> 0).toNumber(!0) : e.totalBet), e.amount && e.amount.length) {
                    o.amount = [];
                    for (var r = 0; r < e.amount.length; ++r) "number" == typeof e.amount[r] ? o.amount[r] = t.longs === String ? String(e.amount[r]) : e.amount[r] : o.amount[r] = t.longs === String ? m.Long.prototype.toString.call(e.amount[r]) : t.longs === Number ? new m.LongBits(e.amount[r].low >>> 0, e.amount[r].high >>> 0).toNumber(!0) : e.amount[r]
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.BetOptionInfo"
            }, e
        }(), s.DealNotify = function() {
            function e(e) {
                if (this.players = [], this.lastResult = [], this.dealerInfo = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.card = null, e.prototype.nextRoundEndStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.players = m.emptyArray, e.prototype.param = null, e.prototype.changed = !1, e.prototype.lastResult = m.emptyArray, e.prototype.leftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.canAuto = !1, e.prototype.dealerInfo = m.emptyArray, e.prototype.totalStockNum = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.card && Object.hasOwnProperty.call(e, "card") && f.humanboy_proto.CardItem.encode(e.card, t.uint32(10).fork()).ldelim(), null != e.nextRoundEndStamp && Object.hasOwnProperty.call(e, "nextRoundEndStamp") && t.uint32(16).int64(e.nextRoundEndStamp), null != e.players && e.players.length)
                    for (var o = 0; o < e.players.length; ++o) f.humanboy_proto.GamePlayer.encode(e.players[o], t.uint32(26).fork()).ldelim();
                if (null != e.param && Object.hasOwnProperty.call(e, "param") && f.humanboy_proto.RoomParam.encode(e.param, t.uint32(34).fork()).ldelim(), null != e.changed && Object.hasOwnProperty.call(e, "changed") && t.uint32(40).bool(e.changed), null != e.lastResult && e.lastResult.length) {
                    for (t.uint32(50).fork(), o = 0; o < e.lastResult.length; ++o) t.int32(e.lastResult[o]);
                    t.ldelim()
                }
                if (null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(56).int64(e.leftSeconds), null != e.canAuto && Object.hasOwnProperty.call(e, "canAuto") && t.uint32(64).bool(e.canAuto), null != e.dealerInfo && e.dealerInfo.length)
                    for (o = 0; o < e.dealerInfo.length; ++o) f.humanboy_proto.DealerPlayerInfo.encode(e.dealerInfo[o], t.uint32(74).fork()).ldelim();
                return null != e.totalStockNum && Object.hasOwnProperty.call(e, "totalStockNum") && t.uint32(80).uint32(e.totalStockNum), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.DealNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.card = f.humanboy_proto.CardItem.decode(e, e.uint32());
                            break;
                        case 2:
                            n.nextRoundEndStamp = e.int64();
                            break;
                        case 3:
                            n.players && n.players.length || (n.players = []), n.players.push(f.humanboy_proto.GamePlayer.decode(e, e.uint32()));
                            break;
                        case 4:
                            n.param = f.humanboy_proto.RoomParam.decode(e, e.uint32());
                            break;
                        case 5:
                            n.changed = e.bool();
                            break;
                        case 6:
                            if (n.lastResult && n.lastResult.length || (n.lastResult = []), 2 == (7 & r))
                                for (var a = e.uint32() + e.pos; e.pos < a;) n.lastResult.push(e.int32());
                            else n.lastResult.push(e.int32());
                            break;
                        case 7:
                            n.leftSeconds = e.int64();
                            break;
                        case 8:
                            n.canAuto = e.bool();
                            break;
                        case 9:
                            n.dealerInfo && n.dealerInfo.length || (n.dealerInfo = []), n.dealerInfo.push(f.humanboy_proto.DealerPlayerInfo.decode(e, e.uint32()));
                            break;
                        case 10:
                            n.totalStockNum = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.card && e.hasOwnProperty("card") && (o = f.humanboy_proto.CardItem.verify(e.card))) return "card." + o;
                if (null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && !(m.isInteger(e.nextRoundEndStamp) || e.nextRoundEndStamp && m.isInteger(e.nextRoundEndStamp.low) && m.isInteger(e.nextRoundEndStamp.high))) return "nextRoundEndStamp: integer|Long expected";
                if (null != e.players && e.hasOwnProperty("players")) {
                    if (!Array.isArray(e.players)) return "players: array expected";
                    for (var t = 0; t < e.players.length; ++t)
                        if (o = f.humanboy_proto.GamePlayer.verify(e.players[t])) return "players." + o
                }
                if (null != e.param && e.hasOwnProperty("param") && (o = f.humanboy_proto.RoomParam.verify(e.param))) return "param." + o;
                if (null != e.changed && e.hasOwnProperty("changed") && "boolean" != typeof e.changed) return "changed: boolean expected";
                if (null != e.lastResult && e.hasOwnProperty("lastResult")) {
                    if (!Array.isArray(e.lastResult)) return "lastResult: array expected";
                    for (t = 0; t < e.lastResult.length; ++t)
                        if (!m.isInteger(e.lastResult[t])) return "lastResult: integer[] expected"
                }
                if (null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(m.isInteger(e.leftSeconds) || e.leftSeconds && m.isInteger(e.leftSeconds.low) && m.isInteger(e.leftSeconds.high))) return "leftSeconds: integer|Long expected";
                if (null != e.canAuto && e.hasOwnProperty("canAuto") && "boolean" != typeof e.canAuto) return "canAuto: boolean expected";
                if (null != e.dealerInfo && e.hasOwnProperty("dealerInfo")) {
                    if (!Array.isArray(e.dealerInfo)) return "dealerInfo: array expected";
                    for (t = 0; t < e.dealerInfo.length; ++t) {
                        var o;
                        if (o = f.humanboy_proto.DealerPlayerInfo.verify(e.dealerInfo[t])) return "dealerInfo." + o
                    }
                }
                return null != e.totalStockNum && e.hasOwnProperty("totalStockNum") && !m.isInteger(e.totalStockNum) ? "totalStockNum: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.DealNotify) return e;
                var t = new f.humanboy_proto.DealNotify;
                if (null != e.card) {
                    if ("object" != typeof e.card) throw TypeError(".humanboy_proto.DealNotify.card: object expected");
                    t.card = f.humanboy_proto.CardItem.fromObject(e.card)
                }
                if (null != e.nextRoundEndStamp && (m.Long ? (t.nextRoundEndStamp = m.Long.fromValue(e.nextRoundEndStamp)).unsigned = !1 : "string" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = parseInt(e.nextRoundEndStamp, 10) : "number" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = e.nextRoundEndStamp : "object" == typeof e.nextRoundEndStamp && (t.nextRoundEndStamp = new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber())), e.players) {
                    if (!Array.isArray(e.players)) throw TypeError(".humanboy_proto.DealNotify.players: array expected");
                    t.players = [];
                    for (var o = 0; o < e.players.length; ++o) {
                        if ("object" != typeof e.players[o]) throw TypeError(".humanboy_proto.DealNotify.players: object expected");
                        t.players[o] = f.humanboy_proto.GamePlayer.fromObject(e.players[o])
                    }
                }
                if (null != e.param) {
                    if ("object" != typeof e.param) throw TypeError(".humanboy_proto.DealNotify.param: object expected");
                    t.param = f.humanboy_proto.RoomParam.fromObject(e.param)
                }
                if (null != e.changed && (t.changed = Boolean(e.changed)), e.lastResult) {
                    if (!Array.isArray(e.lastResult)) throw TypeError(".humanboy_proto.DealNotify.lastResult: array expected");
                    for (t.lastResult = [], o = 0; o < e.lastResult.length; ++o) t.lastResult[o] = 0 | e.lastResult[o]
                }
                if (null != e.leftSeconds && (m.Long ? (t.leftSeconds = m.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), null != e.canAuto && (t.canAuto = Boolean(e.canAuto)), e.dealerInfo) {
                    if (!Array.isArray(e.dealerInfo)) throw TypeError(".humanboy_proto.DealNotify.dealerInfo: array expected");
                    for (t.dealerInfo = [], o = 0; o < e.dealerInfo.length; ++o) {
                        if ("object" != typeof e.dealerInfo[o]) throw TypeError(".humanboy_proto.DealNotify.dealerInfo: object expected");
                        t.dealerInfo[o] = f.humanboy_proto.DealerPlayerInfo.fromObject(e.dealerInfo[o])
                    }
                }
                return null != e.totalStockNum && (t.totalStockNum = e.totalStockNum >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.players = [], o.lastResult = [], o.dealerInfo = []), t.defaults) {
                    if (o.card = null, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.nextRoundEndStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.nextRoundEndStamp = t.longs === String ? "0" : 0;
                    o.param = null, o.changed = !1, m.Long ? (n = new m.Long(0, 0, !1), o.leftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.leftSeconds = t.longs === String ? "0" : 0, o.canAuto = !1, o.totalStockNum = 0
                }
                if (null != e.card && e.hasOwnProperty("card") && (o.card = f.humanboy_proto.CardItem.toObject(e.card, t)), null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && ("number" == typeof e.nextRoundEndStamp ? o.nextRoundEndStamp = t.longs === String ? String(e.nextRoundEndStamp) : e.nextRoundEndStamp : o.nextRoundEndStamp = t.longs === String ? m.Long.prototype.toString.call(e.nextRoundEndStamp) : t.longs === Number ? new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber() : e.nextRoundEndStamp), e.players && e.players.length) {
                    o.players = [];
                    for (var r = 0; r < e.players.length; ++r) o.players[r] = f.humanboy_proto.GamePlayer.toObject(e.players[r], t)
                }
                if (null != e.param && e.hasOwnProperty("param") && (o.param = f.humanboy_proto.RoomParam.toObject(e.param, t)), null != e.changed && e.hasOwnProperty("changed") && (o.changed = e.changed), e.lastResult && e.lastResult.length)
                    for (o.lastResult = [], r = 0; r < e.lastResult.length; ++r) o.lastResult[r] = e.lastResult[r];
                if (null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? o.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : o.leftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), null != e.canAuto && e.hasOwnProperty("canAuto") && (o.canAuto = e.canAuto), e.dealerInfo && e.dealerInfo.length)
                    for (o.dealerInfo = [], r = 0; r < e.dealerInfo.length; ++r) o.dealerInfo[r] = f.humanboy_proto.DealerPlayerInfo.toObject(e.dealerInfo[r], t);
                return null != e.totalStockNum && e.hasOwnProperty("totalStockNum") && (o.totalStockNum = e.totalStockNum), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.DealNotify"
            }, e
        }(), s.BetReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.detail = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.detail && Object.hasOwnProperty.call(e, "detail") && f.humanboy_proto.BetDetail.encode(e.detail, t.uint32(10).fork()).ldelim(), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.BetReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.detail = f.humanboy_proto.BetDetail.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.detail && e.hasOwnProperty("detail")) {
                    var t = f.humanboy_proto.BetDetail.verify(e.detail);
                    if (t) return "detail." + t
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.BetReq) return e;
                var t = new f.humanboy_proto.BetReq;
                if (null != e.detail) {
                    if ("object" != typeof e.detail) throw TypeError(".humanboy_proto.BetReq.detail: object expected");
                    t.detail = f.humanboy_proto.BetDetail.fromObject(e.detail)
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.detail = null), null != e.detail && e.hasOwnProperty("detail") && (o.detail = f.humanboy_proto.BetDetail.toObject(e.detail, t)), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.BetReq"
            }, e
        }(), s.BetResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.BetResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.BetResp) return e;
                var t = new f.humanboy_proto.BetResp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.BetResp"
            }, e
        }(), s.BetNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.uid = 0, e.prototype.detail = null, e.prototype.curCoin = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.selfBet = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.totalBet = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).uint32(e.uid), null != e.detail && Object.hasOwnProperty.call(e, "detail") && f.humanboy_proto.BetDetail.encode(e.detail, t.uint32(18).fork()).ldelim(), null != e.curCoin && Object.hasOwnProperty.call(e, "curCoin") && t.uint32(24).uint64(e.curCoin), null != e.selfBet && Object.hasOwnProperty.call(e, "selfBet") && t.uint32(32).uint64(e.selfBet), null != e.totalBet && Object.hasOwnProperty.call(e, "totalBet") && t.uint32(40).uint64(e.totalBet), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.BetNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.uid = e.uint32();
                            break;
                        case 2:
                            n.detail = f.humanboy_proto.BetDetail.decode(e, e.uint32());
                            break;
                        case 3:
                            n.curCoin = e.uint64();
                            break;
                        case 4:
                            n.selfBet = e.uint64();
                            break;
                        case 5:
                            n.totalBet = e.uint64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.uid && e.hasOwnProperty("uid") && !m.isInteger(e.uid)) return "uid: integer expected";
                if (null != e.detail && e.hasOwnProperty("detail")) {
                    var t = f.humanboy_proto.BetDetail.verify(e.detail);
                    if (t) return "detail." + t
                }
                return null != e.curCoin && e.hasOwnProperty("curCoin") && !(m.isInteger(e.curCoin) || e.curCoin && m.isInteger(e.curCoin.low) && m.isInteger(e.curCoin.high)) ? "curCoin: integer|Long expected" : null != e.selfBet && e.hasOwnProperty("selfBet") && !(m.isInteger(e.selfBet) || e.selfBet && m.isInteger(e.selfBet.low) && m.isInteger(e.selfBet.high)) ? "selfBet: integer|Long expected" : null != e.totalBet && e.hasOwnProperty("totalBet") && !(m.isInteger(e.totalBet) || e.totalBet && m.isInteger(e.totalBet.low) && m.isInteger(e.totalBet.high)) ? "totalBet: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.BetNotify) return e;
                var t = new f.humanboy_proto.BetNotify;
                if (null != e.uid && (t.uid = e.uid >>> 0), null != e.detail) {
                    if ("object" != typeof e.detail) throw TypeError(".humanboy_proto.BetNotify.detail: object expected");
                    t.detail = f.humanboy_proto.BetDetail.fromObject(e.detail)
                }
                return null != e.curCoin && (m.Long ? (t.curCoin = m.Long.fromValue(e.curCoin)).unsigned = !0 : "string" == typeof e.curCoin ? t.curCoin = parseInt(e.curCoin, 10) : "number" == typeof e.curCoin ? t.curCoin = e.curCoin : "object" == typeof e.curCoin && (t.curCoin = new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber(!0))), null != e.selfBet && (m.Long ? (t.selfBet = m.Long.fromValue(e.selfBet)).unsigned = !0 : "string" == typeof e.selfBet ? t.selfBet = parseInt(e.selfBet, 10) : "number" == typeof e.selfBet ? t.selfBet = e.selfBet : "object" == typeof e.selfBet && (t.selfBet = new m.LongBits(e.selfBet.low >>> 0, e.selfBet.high >>> 0).toNumber(!0))), null != e.totalBet && (m.Long ? (t.totalBet = m.Long.fromValue(e.totalBet)).unsigned = !0 : "string" == typeof e.totalBet ? t.totalBet = parseInt(e.totalBet, 10) : "number" == typeof e.totalBet ? t.totalBet = e.totalBet : "object" == typeof e.totalBet && (t.totalBet = new m.LongBits(e.totalBet.low >>> 0, e.totalBet.high >>> 0).toNumber(!0))), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.uid = 0, o.detail = null, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.curCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.curCoin = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !0), o.selfBet = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.selfBet = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !0), o.totalBet = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.totalBet = t.longs === String ? "0" : 0
                }
                return null != e.uid && e.hasOwnProperty("uid") && (o.uid = e.uid), null != e.detail && e.hasOwnProperty("detail") && (o.detail = f.humanboy_proto.BetDetail.toObject(e.detail, t)), null != e.curCoin && e.hasOwnProperty("curCoin") && ("number" == typeof e.curCoin ? o.curCoin = t.longs === String ? String(e.curCoin) : e.curCoin : o.curCoin = t.longs === String ? m.Long.prototype.toString.call(e.curCoin) : t.longs === Number ? new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber(!0) : e.curCoin), null != e.selfBet && e.hasOwnProperty("selfBet") && ("number" == typeof e.selfBet ? o.selfBet = t.longs === String ? String(e.selfBet) : e.selfBet : o.selfBet = t.longs === String ? m.Long.prototype.toString.call(e.selfBet) : t.longs === Number ? new m.LongBits(e.selfBet.low >>> 0, e.selfBet.high >>> 0).toNumber(!0) : e.selfBet), null != e.totalBet && e.hasOwnProperty("totalBet") && ("number" == typeof e.totalBet ? o.totalBet = t.longs === String ? String(e.totalBet) : e.totalBet : o.totalBet = t.longs === String ? m.Long.prototype.toString.call(e.totalBet) : t.longs === Number ? new m.LongBits(e.totalBet.low >>> 0, e.totalBet.high >>> 0).toNumber(!0) : e.totalBet), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.BetNotify"
            }, e
        }(), s.MergeAutoBetNotify = function() {
            function e(e) {
                if (this.notify = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.notify = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.notify && e.notify.length)
                    for (var o = 0; o < e.notify.length; ++o) f.humanboy_proto.BetNotify.encode(e.notify[o], t.uint32(10).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.MergeAutoBetNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.notify && n.notify.length || (n.notify = []), n.notify.push(f.humanboy_proto.BetNotify.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.notify && e.hasOwnProperty("notify")) {
                    if (!Array.isArray(e.notify)) return "notify: array expected";
                    for (var t = 0; t < e.notify.length; ++t) {
                        var o = f.humanboy_proto.BetNotify.verify(e.notify[t]);
                        if (o) return "notify." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.MergeAutoBetNotify) return e;
                var t = new f.humanboy_proto.MergeAutoBetNotify;
                if (e.notify) {
                    if (!Array.isArray(e.notify)) throw TypeError(".humanboy_proto.MergeAutoBetNotify.notify: array expected");
                    t.notify = [];
                    for (var o = 0; o < e.notify.length; ++o) {
                        if ("object" != typeof e.notify[o]) throw TypeError(".humanboy_proto.MergeAutoBetNotify.notify: object expected");
                        t.notify[o] = f.humanboy_proto.BetNotify.fromObject(e.notify[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.notify = []), e.notify && e.notify.length) {
                    o.notify = [];
                    for (var n = 0; n < e.notify.length; ++n) o.notify[n] = f.humanboy_proto.BetNotify.toObject(e.notify[n], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.MergeAutoBetNotify"
            }, e
        }(), s.BetDetail = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.option = 0, e.prototype.betAmount = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.auto = !1, e.prototype.betGameCoin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(16).int32(e.option), null != e.betAmount && Object.hasOwnProperty.call(e, "betAmount") && t.uint32(24).uint64(e.betAmount), null != e.auto && Object.hasOwnProperty.call(e, "auto") && t.uint32(32).bool(e.auto), null != e.betGameCoin && Object.hasOwnProperty.call(e, "betGameCoin") && t.uint32(40).int64(e.betGameCoin), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.BetDetail; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 2:
                            n.option = e.int32();
                            break;
                        case 3:
                            n.betAmount = e.uint64();
                            break;
                        case 4:
                            n.auto = e.bool();
                            break;
                        case 5:
                            n.betGameCoin = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.option && e.hasOwnProperty("option")) switch (e.option) {
                    default:
                        return "option: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 106:
                }
                return null != e.betAmount && e.hasOwnProperty("betAmount") && !(m.isInteger(e.betAmount) || e.betAmount && m.isInteger(e.betAmount.low) && m.isInteger(e.betAmount.high)) ? "betAmount: integer|Long expected" : null != e.auto && e.hasOwnProperty("auto") && "boolean" != typeof e.auto ? "auto: boolean expected" : null != e.betGameCoin && e.hasOwnProperty("betGameCoin") && !(m.isInteger(e.betGameCoin) || e.betGameCoin && m.isInteger(e.betGameCoin.low) && m.isInteger(e.betGameCoin.high)) ? "betGameCoin: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.BetDetail) return e;
                var t = new f.humanboy_proto.BetDetail;
                switch (e.option) {
                    default:
                        if ("number" == typeof e.option) {
                            t.option = e.option;
                            break
                        }
                        break;
                    case "BetZoneOption_DUMMY":
                    case 0:
                        t.option = 0;
                        break;
                    case "HOST":
                    case 1:
                        t.option = 1;
                        break;
                    case "POS1":
                    case 2:
                        t.option = 2;
                        break;
                    case "POS2":
                    case 3:
                        t.option = 3;
                        break;
                    case "POS3":
                    case 4:
                        t.option = 4;
                        break;
                    case "POS4":
                    case 5:
                        t.option = 5;
                        break;
                    case "POS_LUCK":
                    case 100:
                        t.option = 100;
                        break;
                    case "POS_LUCK_1":
                    case 101:
                        t.option = 101;
                        break;
                    case "POS_LUCK_2":
                    case 102:
                        t.option = 102;
                        break;
                    case "POS_LUCK_3":
                    case 103:
                        t.option = 103;
                        break;
                    case "POS_LUCK_4":
                    case 104:
                        t.option = 104;
                        break;
                    case "POS_LUCK_5":
                    case 105:
                        t.option = 105;
                        break;
                    case "POS_LUCK_6":
                    case 106:
                        t.option = 106
                }
                return null != e.betAmount && (m.Long ? (t.betAmount = m.Long.fromValue(e.betAmount)).unsigned = !0 : "string" == typeof e.betAmount ? t.betAmount = parseInt(e.betAmount, 10) : "number" == typeof e.betAmount ? t.betAmount = e.betAmount : "object" == typeof e.betAmount && (t.betAmount = new m.LongBits(e.betAmount.low >>> 0, e.betAmount.high >>> 0).toNumber(!0))), null != e.auto && (t.auto = Boolean(e.auto)), null != e.betGameCoin && (m.Long ? (t.betGameCoin = m.Long.fromValue(e.betGameCoin)).unsigned = !1 : "string" == typeof e.betGameCoin ? t.betGameCoin = parseInt(e.betGameCoin, 10) : "number" == typeof e.betGameCoin ? t.betGameCoin = e.betGameCoin : "object" == typeof e.betGameCoin && (t.betGameCoin = new m.LongBits(e.betGameCoin.low >>> 0, e.betGameCoin.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.betAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.betAmount = t.longs === String ? "0" : 0;
                    o.auto = !1, m.Long ? (n = new m.Long(0, 0, !1), o.betGameCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.betGameCoin = t.longs === String ? "0" : 0
                }
                return null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.humanboy_proto.BetZoneOption[e.option] ? e.option : f.humanboy_proto.BetZoneOption[e.option] : e.option), null != e.betAmount && e.hasOwnProperty("betAmount") && ("number" == typeof e.betAmount ? o.betAmount = t.longs === String ? String(e.betAmount) : e.betAmount : o.betAmount = t.longs === String ? m.Long.prototype.toString.call(e.betAmount) : t.longs === Number ? new m.LongBits(e.betAmount.low >>> 0, e.betAmount.high >>> 0).toNumber(!0) : e.betAmount), null != e.auto && e.hasOwnProperty("auto") && (o.auto = e.auto), null != e.betGameCoin && e.hasOwnProperty("betGameCoin") && ("number" == typeof e.betGameCoin ? o.betGameCoin = t.longs === String ? String(e.betGameCoin) : e.betGameCoin : o.betGameCoin = t.longs === String ? m.Long.prototype.toString.call(e.betGameCoin) : t.longs === Number ? new m.LongBits(e.betGameCoin.low >>> 0, e.betGameCoin.high >>> 0).toNumber() : e.betGameCoin), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.BetDetail"
            }, e
        }(), s.GameRoundEndNotify = function() {
            function e(e) {
                if (this.playerHoleCard = [], this.playerSettle = [], this.matchOption = [], this.dealer = [], this.optionResult = [], this.hitJackpotAward = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.playerHoleCard = m.emptyArray, e.prototype.playerSettle = m.emptyArray, e.prototype.nextRoundEndStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.matchOption = m.emptyArray, e.prototype.stopWorld = 0, e.prototype.leftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.otherPlayers = null, e.prototype.maxLevel = 0, e.prototype.dealerWinAll = 0, e.prototype.jackpotLeftMoney = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.dealerTotalWin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.dealer = m.emptyArray, e.prototype.optionResult = m.emptyArray, e.prototype.hitJackpotAward = m.emptyArray, e.prototype.maxLevelOption = 0, e.prototype.change_points = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.playerHoleCard && e.playerHoleCard.length)
                    for (var o = 0; o < e.playerHoleCard.length; ++o) f.humanboy_proto.PlayerHoleCard.encode(e.playerHoleCard[o], t.uint32(10).fork()).ldelim();
                if (null != e.playerSettle && e.playerSettle.length)
                    for (o = 0; o < e.playerSettle.length; ++o) f.humanboy_proto.PlayerSettle.encode(e.playerSettle[o], t.uint32(26).fork()).ldelim();
                if (null != e.nextRoundEndStamp && Object.hasOwnProperty.call(e, "nextRoundEndStamp") && t.uint32(40).int64(e.nextRoundEndStamp), null != e.matchOption && e.matchOption.length) {
                    for (t.uint32(50).fork(), o = 0; o < e.matchOption.length; ++o) t.int32(e.matchOption[o]);
                    t.ldelim()
                }
                if (null != e.stopWorld && Object.hasOwnProperty.call(e, "stopWorld") && t.uint32(56).int32(e.stopWorld), null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(64).int64(e.leftSeconds), null != e.otherPlayers && Object.hasOwnProperty.call(e, "otherPlayers") && f.humanboy_proto.PlayerSettle.encode(e.otherPlayers, t.uint32(74).fork()).ldelim(), null != e.maxLevel && Object.hasOwnProperty.call(e, "maxLevel") && t.uint32(80).int32(e.maxLevel), null != e.dealerWinAll && Object.hasOwnProperty.call(e, "dealerWinAll") && t.uint32(88).uint32(e.dealerWinAll), null != e.jackpotLeftMoney && Object.hasOwnProperty.call(e, "jackpotLeftMoney") && t.uint32(96).int64(e.jackpotLeftMoney), null != e.dealerTotalWin && Object.hasOwnProperty.call(e, "dealerTotalWin") && t.uint32(104).int64(e.dealerTotalWin), null != e.dealer && e.dealer.length)
                    for (o = 0; o < e.dealer.length; ++o) f.humanboy_proto.DealerPlayerInfo.encode(e.dealer[o], t.uint32(114).fork()).ldelim();
                if (null != e.optionResult && e.optionResult.length)
                    for (o = 0; o < e.optionResult.length; ++o) f.humanboy_proto.OptionResult.encode(e.optionResult[o], t.uint32(122).fork()).ldelim();
                if (null != e.hitJackpotAward && e.hitJackpotAward.length)
                    for (o = 0; o < e.hitJackpotAward.length; ++o) f.humanboy_proto.HitJackpotAward.encode(e.hitJackpotAward[o], t.uint32(130).fork()).ldelim();
                return null != e.maxLevelOption && Object.hasOwnProperty.call(e, "maxLevelOption") && t.uint32(136).int32(e.maxLevelOption), null != e.change_points && Object.hasOwnProperty.call(e, "change_points") && t.uint32(144).int64(e.change_points), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.GameRoundEndNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.playerHoleCard && n.playerHoleCard.length || (n.playerHoleCard = []), n.playerHoleCard.push(f.humanboy_proto.PlayerHoleCard.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.playerSettle && n.playerSettle.length || (n.playerSettle = []), n.playerSettle.push(f.humanboy_proto.PlayerSettle.decode(e, e.uint32()));
                            break;
                        case 5:
                            n.nextRoundEndStamp = e.int64();
                            break;
                        case 6:
                            if (n.matchOption && n.matchOption.length || (n.matchOption = []), 2 == (7 & r))
                                for (var a = e.uint32() + e.pos; e.pos < a;) n.matchOption.push(e.int32());
                            else n.matchOption.push(e.int32());
                            break;
                        case 7:
                            n.stopWorld = e.int32();
                            break;
                        case 8:
                            n.leftSeconds = e.int64();
                            break;
                        case 9:
                            n.otherPlayers = f.humanboy_proto.PlayerSettle.decode(e, e.uint32());
                            break;
                        case 10:
                            n.maxLevel = e.int32();
                            break;
                        case 11:
                            n.dealerWinAll = e.uint32();
                            break;
                        case 12:
                            n.jackpotLeftMoney = e.int64();
                            break;
                        case 13:
                            n.dealerTotalWin = e.int64();
                            break;
                        case 14:
                            n.dealer && n.dealer.length || (n.dealer = []), n.dealer.push(f.humanboy_proto.DealerPlayerInfo.decode(e, e.uint32()));
                            break;
                        case 15:
                            n.optionResult && n.optionResult.length || (n.optionResult = []), n.optionResult.push(f.humanboy_proto.OptionResult.decode(e, e.uint32()));
                            break;
                        case 16:
                            n.hitJackpotAward && n.hitJackpotAward.length || (n.hitJackpotAward = []), n.hitJackpotAward.push(f.humanboy_proto.HitJackpotAward.decode(e, e.uint32()));
                            break;
                        case 17:
                            n.maxLevelOption = e.int32();
                            break;
                        case 18:
                            n.change_points = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.playerHoleCard && e.hasOwnProperty("playerHoleCard")) {
                    if (!Array.isArray(e.playerHoleCard)) return "playerHoleCard: array expected";
                    for (var t = 0; t < e.playerHoleCard.length; ++t)
                        if (o = f.humanboy_proto.PlayerHoleCard.verify(e.playerHoleCard[t])) return "playerHoleCard." + o
                }
                if (null != e.playerSettle && e.hasOwnProperty("playerSettle")) {
                    if (!Array.isArray(e.playerSettle)) return "playerSettle: array expected";
                    for (t = 0; t < e.playerSettle.length; ++t)
                        if (o = f.humanboy_proto.PlayerSettle.verify(e.playerSettle[t])) return "playerSettle." + o
                }
                if (null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && !(m.isInteger(e.nextRoundEndStamp) || e.nextRoundEndStamp && m.isInteger(e.nextRoundEndStamp.low) && m.isInteger(e.nextRoundEndStamp.high))) return "nextRoundEndStamp: integer|Long expected";
                if (null != e.matchOption && e.hasOwnProperty("matchOption")) {
                    if (!Array.isArray(e.matchOption)) return "matchOption: array expected";
                    for (t = 0; t < e.matchOption.length; ++t) switch (e.matchOption[t]) {
                        default:
                            return "matchOption: enum value[] expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 100:
                        case 101:
                        case 102:
                        case 103:
                        case 104:
                        case 105:
                        case 106:
                    }
                }
                if (null != e.stopWorld && e.hasOwnProperty("stopWorld") && !m.isInteger(e.stopWorld)) return "stopWorld: integer expected";
                if (null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(m.isInteger(e.leftSeconds) || e.leftSeconds && m.isInteger(e.leftSeconds.low) && m.isInteger(e.leftSeconds.high))) return "leftSeconds: integer|Long expected";
                if (null != e.otherPlayers && e.hasOwnProperty("otherPlayers") && (o = f.humanboy_proto.PlayerSettle.verify(e.otherPlayers))) return "otherPlayers." + o;
                if (null != e.maxLevel && e.hasOwnProperty("maxLevel")) switch (e.maxLevel) {
                    default:
                        return "maxLevel: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                }
                if (null != e.dealerWinAll && e.hasOwnProperty("dealerWinAll") && !m.isInteger(e.dealerWinAll)) return "dealerWinAll: integer expected";
                if (null != e.jackpotLeftMoney && e.hasOwnProperty("jackpotLeftMoney") && !(m.isInteger(e.jackpotLeftMoney) || e.jackpotLeftMoney && m.isInteger(e.jackpotLeftMoney.low) && m.isInteger(e.jackpotLeftMoney.high))) return "jackpotLeftMoney: integer|Long expected";
                if (null != e.dealerTotalWin && e.hasOwnProperty("dealerTotalWin") && !(m.isInteger(e.dealerTotalWin) || e.dealerTotalWin && m.isInteger(e.dealerTotalWin.low) && m.isInteger(e.dealerTotalWin.high))) return "dealerTotalWin: integer|Long expected";
                if (null != e.dealer && e.hasOwnProperty("dealer")) {
                    if (!Array.isArray(e.dealer)) return "dealer: array expected";
                    for (t = 0; t < e.dealer.length; ++t)
                        if (o = f.humanboy_proto.DealerPlayerInfo.verify(e.dealer[t])) return "dealer." + o
                }
                if (null != e.optionResult && e.hasOwnProperty("optionResult")) {
                    if (!Array.isArray(e.optionResult)) return "optionResult: array expected";
                    for (t = 0; t < e.optionResult.length; ++t)
                        if (o = f.humanboy_proto.OptionResult.verify(e.optionResult[t])) return "optionResult." + o
                }
                if (null != e.hitJackpotAward && e.hasOwnProperty("hitJackpotAward")) {
                    if (!Array.isArray(e.hitJackpotAward)) return "hitJackpotAward: array expected";
                    for (t = 0; t < e.hitJackpotAward.length; ++t) {
                        var o;
                        if (o = f.humanboy_proto.HitJackpotAward.verify(e.hitJackpotAward[t])) return "hitJackpotAward." + o
                    }
                }
                if (null != e.maxLevelOption && e.hasOwnProperty("maxLevelOption")) switch (e.maxLevelOption) {
                    default:
                        return "maxLevelOption: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 106:
                }
                return null != e.change_points && e.hasOwnProperty("change_points") && !(m.isInteger(e.change_points) || e.change_points && m.isInteger(e.change_points.low) && m.isInteger(e.change_points.high)) ? "change_points: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.GameRoundEndNotify) return e;
                var t = new f.humanboy_proto.GameRoundEndNotify;
                if (e.playerHoleCard) {
                    if (!Array.isArray(e.playerHoleCard)) throw TypeError(".humanboy_proto.GameRoundEndNotify.playerHoleCard: array expected");
                    t.playerHoleCard = [];
                    for (var o = 0; o < e.playerHoleCard.length; ++o) {
                        if ("object" != typeof e.playerHoleCard[o]) throw TypeError(".humanboy_proto.GameRoundEndNotify.playerHoleCard: object expected");
                        t.playerHoleCard[o] = f.humanboy_proto.PlayerHoleCard.fromObject(e.playerHoleCard[o])
                    }
                }
                if (e.playerSettle) {
                    if (!Array.isArray(e.playerSettle)) throw TypeError(".humanboy_proto.GameRoundEndNotify.playerSettle: array expected");
                    for (t.playerSettle = [], o = 0; o < e.playerSettle.length; ++o) {
                        if ("object" != typeof e.playerSettle[o]) throw TypeError(".humanboy_proto.GameRoundEndNotify.playerSettle: object expected");
                        t.playerSettle[o] = f.humanboy_proto.PlayerSettle.fromObject(e.playerSettle[o])
                    }
                }
                if (null != e.nextRoundEndStamp && (m.Long ? (t.nextRoundEndStamp = m.Long.fromValue(e.nextRoundEndStamp)).unsigned = !1 : "string" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = parseInt(e.nextRoundEndStamp, 10) : "number" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = e.nextRoundEndStamp : "object" == typeof e.nextRoundEndStamp && (t.nextRoundEndStamp = new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber())), e.matchOption) {
                    if (!Array.isArray(e.matchOption)) throw TypeError(".humanboy_proto.GameRoundEndNotify.matchOption: array expected");
                    for (t.matchOption = [], o = 0; o < e.matchOption.length; ++o) switch (e.matchOption[o]) {
                        default:
                            if ("number" == typeof e.matchOption[o]) {
                                t.matchOption[o] = e.matchOption[o];
                                break
                            }
                        case "BetZoneOption_DUMMY":
                        case 0:
                            t.matchOption[o] = 0;
                            break;
                        case "HOST":
                        case 1:
                            t.matchOption[o] = 1;
                            break;
                        case "POS1":
                        case 2:
                            t.matchOption[o] = 2;
                            break;
                        case "POS2":
                        case 3:
                            t.matchOption[o] = 3;
                            break;
                        case "POS3":
                        case 4:
                            t.matchOption[o] = 4;
                            break;
                        case "POS4":
                        case 5:
                            t.matchOption[o] = 5;
                            break;
                        case "POS_LUCK":
                        case 100:
                            t.matchOption[o] = 100;
                            break;
                        case "POS_LUCK_1":
                        case 101:
                            t.matchOption[o] = 101;
                            break;
                        case "POS_LUCK_2":
                        case 102:
                            t.matchOption[o] = 102;
                            break;
                        case "POS_LUCK_3":
                        case 103:
                            t.matchOption[o] = 103;
                            break;
                        case "POS_LUCK_4":
                        case 104:
                            t.matchOption[o] = 104;
                            break;
                        case "POS_LUCK_5":
                        case 105:
                            t.matchOption[o] = 105;
                            break;
                        case "POS_LUCK_6":
                        case 106:
                            t.matchOption[o] = 106
                    }
                }
                if (null != e.stopWorld && (t.stopWorld = 0 | e.stopWorld), null != e.leftSeconds && (m.Long ? (t.leftSeconds = m.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), null != e.otherPlayers) {
                    if ("object" != typeof e.otherPlayers) throw TypeError(".humanboy_proto.GameRoundEndNotify.otherPlayers: object expected");
                    t.otherPlayers = f.humanboy_proto.PlayerSettle.fromObject(e.otherPlayers)
                }
                switch (e.maxLevel) {
                    default:
                        if ("number" == typeof e.maxLevel) {
                            t.maxLevel = e.maxLevel;
                            break
                        }
                        break;
                    case "CardResult_Dummy":
                    case 0:
                        t.maxLevel = 0;
                        break;
                    case "GAO_PAI":
                    case 1:
                        t.maxLevel = 1;
                        break;
                    case "YI_DUI":
                    case 2:
                        t.maxLevel = 2;
                        break;
                    case "LIAN_DUI":
                    case 3:
                        t.maxLevel = 3;
                        break;
                    case "SAN_TIAO":
                    case 4:
                        t.maxLevel = 4;
                        break;
                    case "SHUN_ZI":
                    case 5:
                        t.maxLevel = 5;
                        break;
                    case "TONG_HUA":
                    case 6:
                        t.maxLevel = 6;
                        break;
                    case "HU_LU":
                    case 7:
                        t.maxLevel = 7;
                        break;
                    case "SI_TIAO":
                    case 8:
                        t.maxLevel = 8;
                        break;
                    case "TONG_HUA_SHUN":
                    case 9:
                        t.maxLevel = 9;
                        break;
                    case "HUANG_TONG":
                    case 10:
                        t.maxLevel = 10
                }
                if (null != e.dealerWinAll && (t.dealerWinAll = e.dealerWinAll >>> 0), null != e.jackpotLeftMoney && (m.Long ? (t.jackpotLeftMoney = m.Long.fromValue(e.jackpotLeftMoney)).unsigned = !1 : "string" == typeof e.jackpotLeftMoney ? t.jackpotLeftMoney = parseInt(e.jackpotLeftMoney, 10) : "number" == typeof e.jackpotLeftMoney ? t.jackpotLeftMoney = e.jackpotLeftMoney : "object" == typeof e.jackpotLeftMoney && (t.jackpotLeftMoney = new m.LongBits(e.jackpotLeftMoney.low >>> 0, e.jackpotLeftMoney.high >>> 0).toNumber())), null != e.dealerTotalWin && (m.Long ? (t.dealerTotalWin = m.Long.fromValue(e.dealerTotalWin)).unsigned = !1 : "string" == typeof e.dealerTotalWin ? t.dealerTotalWin = parseInt(e.dealerTotalWin, 10) : "number" == typeof e.dealerTotalWin ? t.dealerTotalWin = e.dealerTotalWin : "object" == typeof e.dealerTotalWin && (t.dealerTotalWin = new m.LongBits(e.dealerTotalWin.low >>> 0, e.dealerTotalWin.high >>> 0).toNumber())), e.dealer) {
                    if (!Array.isArray(e.dealer)) throw TypeError(".humanboy_proto.GameRoundEndNotify.dealer: array expected");
                    for (t.dealer = [], o = 0; o < e.dealer.length; ++o) {
                        if ("object" != typeof e.dealer[o]) throw TypeError(".humanboy_proto.GameRoundEndNotify.dealer: object expected");
                        t.dealer[o] = f.humanboy_proto.DealerPlayerInfo.fromObject(e.dealer[o])
                    }
                }
                if (e.optionResult) {
                    if (!Array.isArray(e.optionResult)) throw TypeError(".humanboy_proto.GameRoundEndNotify.optionResult: array expected");
                    for (t.optionResult = [], o = 0; o < e.optionResult.length; ++o) {
                        if ("object" != typeof e.optionResult[o]) throw TypeError(".humanboy_proto.GameRoundEndNotify.optionResult: object expected");
                        t.optionResult[o] = f.humanboy_proto.OptionResult.fromObject(e.optionResult[o])
                    }
                }
                if (e.hitJackpotAward) {
                    if (!Array.isArray(e.hitJackpotAward)) throw TypeError(".humanboy_proto.GameRoundEndNotify.hitJackpotAward: array expected");
                    for (t.hitJackpotAward = [], o = 0; o < e.hitJackpotAward.length; ++o) {
                        if ("object" != typeof e.hitJackpotAward[o]) throw TypeError(".humanboy_proto.GameRoundEndNotify.hitJackpotAward: object expected");
                        t.hitJackpotAward[o] = f.humanboy_proto.HitJackpotAward.fromObject(e.hitJackpotAward[o])
                    }
                }
                switch (e.maxLevelOption) {
                    default:
                        if ("number" == typeof e.maxLevelOption) {
                            t.maxLevelOption = e.maxLevelOption;
                            break
                        }
                        break;
                    case "BetZoneOption_DUMMY":
                    case 0:
                        t.maxLevelOption = 0;
                        break;
                    case "HOST":
                    case 1:
                        t.maxLevelOption = 1;
                        break;
                    case "POS1":
                    case 2:
                        t.maxLevelOption = 2;
                        break;
                    case "POS2":
                    case 3:
                        t.maxLevelOption = 3;
                        break;
                    case "POS3":
                    case 4:
                        t.maxLevelOption = 4;
                        break;
                    case "POS4":
                    case 5:
                        t.maxLevelOption = 5;
                        break;
                    case "POS_LUCK":
                    case 100:
                        t.maxLevelOption = 100;
                        break;
                    case "POS_LUCK_1":
                    case 101:
                        t.maxLevelOption = 101;
                        break;
                    case "POS_LUCK_2":
                    case 102:
                        t.maxLevelOption = 102;
                        break;
                    case "POS_LUCK_3":
                    case 103:
                        t.maxLevelOption = 103;
                        break;
                    case "POS_LUCK_4":
                    case 104:
                        t.maxLevelOption = 104;
                        break;
                    case "POS_LUCK_5":
                    case 105:
                        t.maxLevelOption = 105;
                        break;
                    case "POS_LUCK_6":
                    case 106:
                        t.maxLevelOption = 106
                }
                return null != e.change_points && (m.Long ? (t.change_points = m.Long.fromValue(e.change_points)).unsigned = !1 : "string" == typeof e.change_points ? t.change_points = parseInt(e.change_points, 10) : "number" == typeof e.change_points ? t.change_points = e.change_points : "object" == typeof e.change_points && (t.change_points = new m.LongBits(e.change_points.low >>> 0, e.change_points.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.playerHoleCard = [], o.playerSettle = [], o.matchOption = [], o.dealer = [], o.optionResult = [], o.hitJackpotAward = []), t.defaults) {
                    if (m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.nextRoundEndStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.nextRoundEndStamp = t.longs === String ? "0" : 0;
                    o.stopWorld = 0, m.Long ? (n = new m.Long(0, 0, !1), o.leftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.leftSeconds = t.longs === String ? "0" : 0, o.otherPlayers = null, o.maxLevel = t.enums === String ? "CardResult_Dummy" : 0, o.dealerWinAll = 0, m.Long ? (n = new m.Long(0, 0, !1), o.jackpotLeftMoney = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.jackpotLeftMoney = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !1), o.dealerTotalWin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.dealerTotalWin = t.longs === String ? "0" : 0, o.maxLevelOption = t.enums === String ? "BetZoneOption_DUMMY" : 0, m.Long ? (n = new m.Long(0, 0, !1), o.change_points = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.change_points = t.longs === String ? "0" : 0
                }
                if (e.playerHoleCard && e.playerHoleCard.length) {
                    o.playerHoleCard = [];
                    for (var r = 0; r < e.playerHoleCard.length; ++r) o.playerHoleCard[r] = f.humanboy_proto.PlayerHoleCard.toObject(e.playerHoleCard[r], t)
                }
                if (e.playerSettle && e.playerSettle.length)
                    for (o.playerSettle = [], r = 0; r < e.playerSettle.length; ++r) o.playerSettle[r] = f.humanboy_proto.PlayerSettle.toObject(e.playerSettle[r], t);
                if (null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && ("number" == typeof e.nextRoundEndStamp ? o.nextRoundEndStamp = t.longs === String ? String(e.nextRoundEndStamp) : e.nextRoundEndStamp : o.nextRoundEndStamp = t.longs === String ? m.Long.prototype.toString.call(e.nextRoundEndStamp) : t.longs === Number ? new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber() : e.nextRoundEndStamp), e.matchOption && e.matchOption.length)
                    for (o.matchOption = [], r = 0; r < e.matchOption.length; ++r) o.matchOption[r] = t.enums === String ? void 0 === f.humanboy_proto.BetZoneOption[e.matchOption[r]] ? e.matchOption[r] : f.humanboy_proto.BetZoneOption[e.matchOption[r]] : e.matchOption[r];
                if (null != e.stopWorld && e.hasOwnProperty("stopWorld") && (o.stopWorld = e.stopWorld), null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? o.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : o.leftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), null != e.otherPlayers && e.hasOwnProperty("otherPlayers") && (o.otherPlayers = f.humanboy_proto.PlayerSettle.toObject(e.otherPlayers, t)), null != e.maxLevel && e.hasOwnProperty("maxLevel") && (o.maxLevel = t.enums === String ? void 0 === f.humanboy_proto.CardResult[e.maxLevel] ? e.maxLevel : f.humanboy_proto.CardResult[e.maxLevel] : e.maxLevel), null != e.dealerWinAll && e.hasOwnProperty("dealerWinAll") && (o.dealerWinAll = e.dealerWinAll), null != e.jackpotLeftMoney && e.hasOwnProperty("jackpotLeftMoney") && ("number" == typeof e.jackpotLeftMoney ? o.jackpotLeftMoney = t.longs === String ? String(e.jackpotLeftMoney) : e.jackpotLeftMoney : o.jackpotLeftMoney = t.longs === String ? m.Long.prototype.toString.call(e.jackpotLeftMoney) : t.longs === Number ? new m.LongBits(e.jackpotLeftMoney.low >>> 0, e.jackpotLeftMoney.high >>> 0).toNumber() : e.jackpotLeftMoney), null != e.dealerTotalWin && e.hasOwnProperty("dealerTotalWin") && ("number" == typeof e.dealerTotalWin ? o.dealerTotalWin = t.longs === String ? String(e.dealerTotalWin) : e.dealerTotalWin : o.dealerTotalWin = t.longs === String ? m.Long.prototype.toString.call(e.dealerTotalWin) : t.longs === Number ? new m.LongBits(e.dealerTotalWin.low >>> 0, e.dealerTotalWin.high >>> 0).toNumber() : e.dealerTotalWin), e.dealer && e.dealer.length)
                    for (o.dealer = [], r = 0; r < e.dealer.length; ++r) o.dealer[r] = f.humanboy_proto.DealerPlayerInfo.toObject(e.dealer[r], t);
                if (e.optionResult && e.optionResult.length)
                    for (o.optionResult = [], r = 0; r < e.optionResult.length; ++r) o.optionResult[r] = f.humanboy_proto.OptionResult.toObject(e.optionResult[r], t);
                if (e.hitJackpotAward && e.hitJackpotAward.length)
                    for (o.hitJackpotAward = [], r = 0; r < e.hitJackpotAward.length; ++r) o.hitJackpotAward[r] = f.humanboy_proto.HitJackpotAward.toObject(e.hitJackpotAward[r], t);
                return null != e.maxLevelOption && e.hasOwnProperty("maxLevelOption") && (o.maxLevelOption = t.enums === String ? void 0 === f.humanboy_proto.BetZoneOption[e.maxLevelOption] ? e.maxLevelOption : f.humanboy_proto.BetZoneOption[e.maxLevelOption] : e.maxLevelOption), null != e.change_points && e.hasOwnProperty("change_points") && ("number" == typeof e.change_points ? o.change_points = t.longs === String ? String(e.change_points) : e.change_points : o.change_points = t.longs === String ? m.Long.prototype.toString.call(e.change_points) : t.longs === Number ? new m.LongBits(e.change_points.low >>> 0, e.change_points.high >>> 0).toNumber() : e.change_points), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.GameRoundEndNotify"
            }, e
        }(), s.OptionResult = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.option = 0, e.prototype.result = 0, e.prototype.loseHand = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(8).int32(e.option), null != e.result && Object.hasOwnProperty.call(e, "result") && t.uint32(16).int32(e.result), null != e.loseHand && Object.hasOwnProperty.call(e, "loseHand") && t.uint32(24).int32(e.loseHand), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.OptionResult; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.option = e.int32();
                            break;
                        case 2:
                            n.result = e.int32();
                            break;
                        case 3:
                            n.loseHand = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.option && e.hasOwnProperty("option")) switch (e.option) {
                    default:
                        return "option: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 106:
                }
                return null != e.result && e.hasOwnProperty("result") && !m.isInteger(e.result) ? "result: integer expected" : null != e.loseHand && e.hasOwnProperty("loseHand") && !m.isInteger(e.loseHand) ? "loseHand: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.OptionResult) return e;
                var t = new f.humanboy_proto.OptionResult;
                switch (e.option) {
                    default:
                        if ("number" == typeof e.option) {
                            t.option = e.option;
                            break
                        }
                        break;
                    case "BetZoneOption_DUMMY":
                    case 0:
                        t.option = 0;
                        break;
                    case "HOST":
                    case 1:
                        t.option = 1;
                        break;
                    case "POS1":
                    case 2:
                        t.option = 2;
                        break;
                    case "POS2":
                    case 3:
                        t.option = 3;
                        break;
                    case "POS3":
                    case 4:
                        t.option = 4;
                        break;
                    case "POS4":
                    case 5:
                        t.option = 5;
                        break;
                    case "POS_LUCK":
                    case 100:
                        t.option = 100;
                        break;
                    case "POS_LUCK_1":
                    case 101:
                        t.option = 101;
                        break;
                    case "POS_LUCK_2":
                    case 102:
                        t.option = 102;
                        break;
                    case "POS_LUCK_3":
                    case 103:
                        t.option = 103;
                        break;
                    case "POS_LUCK_4":
                    case 104:
                        t.option = 104;
                        break;
                    case "POS_LUCK_5":
                    case 105:
                        t.option = 105;
                        break;
                    case "POS_LUCK_6":
                    case 106:
                        t.option = 106
                }
                return null != e.result && (t.result = 0 | e.result), null != e.loseHand && (t.loseHand = 0 | e.loseHand), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, o.result = 0, o.loseHand = 0), null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.humanboy_proto.BetZoneOption[e.option] ? e.option : f.humanboy_proto.BetZoneOption[e.option] : e.option), null != e.result && e.hasOwnProperty("result") && (o.result = e.result), null != e.loseHand && e.hasOwnProperty("loseHand") && (o.loseHand = e.loseHand), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.OptionResult"
            }, e
        }(), s.PlayerHoleCard = function() {
            function e(e) {
                if (this.holeCards = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.option = 0, e.prototype.holeCards = m.emptyArray, e.prototype.level = 0, e.prototype.result = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(8).int32(e.option), null != e.holeCards && e.holeCards.length)
                    for (var o = 0; o < e.holeCards.length; ++o) f.humanboy_proto.CardItem.encode(e.holeCards[o], t.uint32(18).fork()).ldelim();
                return null != e.level && Object.hasOwnProperty.call(e, "level") && t.uint32(24).int32(e.level), null != e.result && Object.hasOwnProperty.call(e, "result") && t.uint32(40).int32(e.result), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.PlayerHoleCard; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.option = e.int32();
                            break;
                        case 2:
                            n.holeCards && n.holeCards.length || (n.holeCards = []), n.holeCards.push(f.humanboy_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.level = e.int32();
                            break;
                        case 5:
                            n.result = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.option && e.hasOwnProperty("option")) switch (e.option) {
                    default:
                        return "option: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 106:
                }
                if (null != e.holeCards && e.hasOwnProperty("holeCards")) {
                    if (!Array.isArray(e.holeCards)) return "holeCards: array expected";
                    for (var t = 0; t < e.holeCards.length; ++t) {
                        var o = f.humanboy_proto.CardItem.verify(e.holeCards[t]);
                        if (o) return "holeCards." + o
                    }
                }
                if (null != e.level && e.hasOwnProperty("level")) switch (e.level) {
                    default:
                        return "level: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                }
                return null != e.result && e.hasOwnProperty("result") && !m.isInteger(e.result) ? "result: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.PlayerHoleCard) return e;
                var t = new f.humanboy_proto.PlayerHoleCard;
                switch (e.option) {
                    default:
                        if ("number" == typeof e.option) {
                            t.option = e.option;
                            break
                        }
                        break;
                    case "BetZoneOption_DUMMY":
                    case 0:
                        t.option = 0;
                        break;
                    case "HOST":
                    case 1:
                        t.option = 1;
                        break;
                    case "POS1":
                    case 2:
                        t.option = 2;
                        break;
                    case "POS2":
                    case 3:
                        t.option = 3;
                        break;
                    case "POS3":
                    case 4:
                        t.option = 4;
                        break;
                    case "POS4":
                    case 5:
                        t.option = 5;
                        break;
                    case "POS_LUCK":
                    case 100:
                        t.option = 100;
                        break;
                    case "POS_LUCK_1":
                    case 101:
                        t.option = 101;
                        break;
                    case "POS_LUCK_2":
                    case 102:
                        t.option = 102;
                        break;
                    case "POS_LUCK_3":
                    case 103:
                        t.option = 103;
                        break;
                    case "POS_LUCK_4":
                    case 104:
                        t.option = 104;
                        break;
                    case "POS_LUCK_5":
                    case 105:
                        t.option = 105;
                        break;
                    case "POS_LUCK_6":
                    case 106:
                        t.option = 106
                }
                if (e.holeCards) {
                    if (!Array.isArray(e.holeCards)) throw TypeError(".humanboy_proto.PlayerHoleCard.holeCards: array expected");
                    t.holeCards = [];
                    for (var o = 0; o < e.holeCards.length; ++o) {
                        if ("object" != typeof e.holeCards[o]) throw TypeError(".humanboy_proto.PlayerHoleCard.holeCards: object expected");
                        t.holeCards[o] = f.humanboy_proto.CardItem.fromObject(e.holeCards[o])
                    }
                }
                switch (e.level) {
                    default:
                        if ("number" == typeof e.level) {
                            t.level = e.level;
                            break
                        }
                        break;
                    case "CardResult_Dummy":
                    case 0:
                        t.level = 0;
                        break;
                    case "GAO_PAI":
                    case 1:
                        t.level = 1;
                        break;
                    case "YI_DUI":
                    case 2:
                        t.level = 2;
                        break;
                    case "LIAN_DUI":
                    case 3:
                        t.level = 3;
                        break;
                    case "SAN_TIAO":
                    case 4:
                        t.level = 4;
                        break;
                    case "SHUN_ZI":
                    case 5:
                        t.level = 5;
                        break;
                    case "TONG_HUA":
                    case 6:
                        t.level = 6;
                        break;
                    case "HU_LU":
                    case 7:
                        t.level = 7;
                        break;
                    case "SI_TIAO":
                    case 8:
                        t.level = 8;
                        break;
                    case "TONG_HUA_SHUN":
                    case 9:
                        t.level = 9;
                        break;
                    case "HUANG_TONG":
                    case 10:
                        t.level = 10
                }
                return null != e.result && (t.result = 0 | e.result), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.holeCards = []), t.defaults && (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, o.level = t.enums === String ? "CardResult_Dummy" : 0, o.result = 0), null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.humanboy_proto.BetZoneOption[e.option] ? e.option : f.humanboy_proto.BetZoneOption[e.option] : e.option), e.holeCards && e.holeCards.length) {
                    o.holeCards = [];
                    for (var n = 0; n < e.holeCards.length; ++n) o.holeCards[n] = f.humanboy_proto.CardItem.toObject(e.holeCards[n], t)
                }
                return null != e.level && e.hasOwnProperty("level") && (o.level = t.enums === String ? void 0 === f.humanboy_proto.CardResult[e.level] ? e.level : f.humanboy_proto.CardResult[e.level] : e.level), null != e.result && e.hasOwnProperty("result") && (o.result = e.result), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.PlayerHoleCard"
            }, e
        }(), s.PlayerSettle = function() {
            function e(e) {
                if (this.settle = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.uid = 0, e.prototype.settle = m.emptyArray, e.prototype.totalWinAmount = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.curCoin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.keepWinCount = 0, e.prototype.hasBet = 0, e.prototype.pos4WinAmount = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.posLuckWinAmount = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).uint32(e.uid), null != e.settle && e.settle.length)
                    for (var o = 0; o < e.settle.length; ++o) f.humanboy_proto.ZoneSettleDetail.encode(e.settle[o], t.uint32(18).fork()).ldelim();
                return null != e.totalWinAmount && Object.hasOwnProperty.call(e, "totalWinAmount") && t.uint32(24).int64(e.totalWinAmount), null != e.curCoin && Object.hasOwnProperty.call(e, "curCoin") && t.uint32(32).int64(e.curCoin), null != e.keepWinCount && Object.hasOwnProperty.call(e, "keepWinCount") && t.uint32(40).int32(e.keepWinCount), null != e.hasBet && Object.hasOwnProperty.call(e, "hasBet") && t.uint32(48).int32(e.hasBet), null != e.pos4WinAmount && Object.hasOwnProperty.call(e, "pos4WinAmount") && t.uint32(56).int64(e.pos4WinAmount), null != e.posLuckWinAmount && Object.hasOwnProperty.call(e, "posLuckWinAmount") && t.uint32(64).int64(e.posLuckWinAmount), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.PlayerSettle; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.uid = e.uint32();
                            break;
                        case 2:
                            n.settle && n.settle.length || (n.settle = []), n.settle.push(f.humanboy_proto.ZoneSettleDetail.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.totalWinAmount = e.int64();
                            break;
                        case 4:
                            n.curCoin = e.int64();
                            break;
                        case 5:
                            n.keepWinCount = e.int32();
                            break;
                        case 6:
                            n.hasBet = e.int32();
                            break;
                        case 7:
                            n.pos4WinAmount = e.int64();
                            break;
                        case 8:
                            n.posLuckWinAmount = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.uid && e.hasOwnProperty("uid") && !m.isInteger(e.uid)) return "uid: integer expected";
                if (null != e.settle && e.hasOwnProperty("settle")) {
                    if (!Array.isArray(e.settle)) return "settle: array expected";
                    for (var t = 0; t < e.settle.length; ++t) {
                        var o = f.humanboy_proto.ZoneSettleDetail.verify(e.settle[t]);
                        if (o) return "settle." + o
                    }
                }
                return null != e.totalWinAmount && e.hasOwnProperty("totalWinAmount") && !(m.isInteger(e.totalWinAmount) || e.totalWinAmount && m.isInteger(e.totalWinAmount.low) && m.isInteger(e.totalWinAmount.high)) ? "totalWinAmount: integer|Long expected" : null != e.curCoin && e.hasOwnProperty("curCoin") && !(m.isInteger(e.curCoin) || e.curCoin && m.isInteger(e.curCoin.low) && m.isInteger(e.curCoin.high)) ? "curCoin: integer|Long expected" : null != e.keepWinCount && e.hasOwnProperty("keepWinCount") && !m.isInteger(e.keepWinCount) ? "keepWinCount: integer expected" : null != e.hasBet && e.hasOwnProperty("hasBet") && !m.isInteger(e.hasBet) ? "hasBet: integer expected" : null != e.pos4WinAmount && e.hasOwnProperty("pos4WinAmount") && !(m.isInteger(e.pos4WinAmount) || e.pos4WinAmount && m.isInteger(e.pos4WinAmount.low) && m.isInteger(e.pos4WinAmount.high)) ? "pos4WinAmount: integer|Long expected" : null != e.posLuckWinAmount && e.hasOwnProperty("posLuckWinAmount") && !(m.isInteger(e.posLuckWinAmount) || e.posLuckWinAmount && m.isInteger(e.posLuckWinAmount.low) && m.isInteger(e.posLuckWinAmount.high)) ? "posLuckWinAmount: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.PlayerSettle) return e;
                var t = new f.humanboy_proto.PlayerSettle;
                if (null != e.uid && (t.uid = e.uid >>> 0), e.settle) {
                    if (!Array.isArray(e.settle)) throw TypeError(".humanboy_proto.PlayerSettle.settle: array expected");
                    t.settle = [];
                    for (var o = 0; o < e.settle.length; ++o) {
                        if ("object" != typeof e.settle[o]) throw TypeError(".humanboy_proto.PlayerSettle.settle: object expected");
                        t.settle[o] = f.humanboy_proto.ZoneSettleDetail.fromObject(e.settle[o])
                    }
                }
                return null != e.totalWinAmount && (m.Long ? (t.totalWinAmount = m.Long.fromValue(e.totalWinAmount)).unsigned = !1 : "string" == typeof e.totalWinAmount ? t.totalWinAmount = parseInt(e.totalWinAmount, 10) : "number" == typeof e.totalWinAmount ? t.totalWinAmount = e.totalWinAmount : "object" == typeof e.totalWinAmount && (t.totalWinAmount = new m.LongBits(e.totalWinAmount.low >>> 0, e.totalWinAmount.high >>> 0).toNumber())), null != e.curCoin && (m.Long ? (t.curCoin = m.Long.fromValue(e.curCoin)).unsigned = !1 : "string" == typeof e.curCoin ? t.curCoin = parseInt(e.curCoin, 10) : "number" == typeof e.curCoin ? t.curCoin = e.curCoin : "object" == typeof e.curCoin && (t.curCoin = new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber())), null != e.keepWinCount && (t.keepWinCount = 0 | e.keepWinCount), null != e.hasBet && (t.hasBet = 0 | e.hasBet), null != e.pos4WinAmount && (m.Long ? (t.pos4WinAmount = m.Long.fromValue(e.pos4WinAmount)).unsigned = !1 : "string" == typeof e.pos4WinAmount ? t.pos4WinAmount = parseInt(e.pos4WinAmount, 10) : "number" == typeof e.pos4WinAmount ? t.pos4WinAmount = e.pos4WinAmount : "object" == typeof e.pos4WinAmount && (t.pos4WinAmount = new m.LongBits(e.pos4WinAmount.low >>> 0, e.pos4WinAmount.high >>> 0).toNumber())), null != e.posLuckWinAmount && (m.Long ? (t.posLuckWinAmount = m.Long.fromValue(e.posLuckWinAmount)).unsigned = !1 : "string" == typeof e.posLuckWinAmount ? t.posLuckWinAmount = parseInt(e.posLuckWinAmount, 10) : "number" == typeof e.posLuckWinAmount ? t.posLuckWinAmount = e.posLuckWinAmount : "object" == typeof e.posLuckWinAmount && (t.posLuckWinAmount = new m.LongBits(e.posLuckWinAmount.low >>> 0, e.posLuckWinAmount.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.settle = []), t.defaults) {
                    if (o.uid = 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.totalWinAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.totalWinAmount = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !1), o.curCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.curCoin = t.longs === String ? "0" : 0, o.keepWinCount = 0, o.hasBet = 0, m.Long ? (n = new m.Long(0, 0, !1), o.pos4WinAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.pos4WinAmount = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !1), o.posLuckWinAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.posLuckWinAmount = t.longs === String ? "0" : 0
                }
                if (null != e.uid && e.hasOwnProperty("uid") && (o.uid = e.uid), e.settle && e.settle.length) {
                    o.settle = [];
                    for (var r = 0; r < e.settle.length; ++r) o.settle[r] = f.humanboy_proto.ZoneSettleDetail.toObject(e.settle[r], t)
                }
                return null != e.totalWinAmount && e.hasOwnProperty("totalWinAmount") && ("number" == typeof e.totalWinAmount ? o.totalWinAmount = t.longs === String ? String(e.totalWinAmount) : e.totalWinAmount : o.totalWinAmount = t.longs === String ? m.Long.prototype.toString.call(e.totalWinAmount) : t.longs === Number ? new m.LongBits(e.totalWinAmount.low >>> 0, e.totalWinAmount.high >>> 0).toNumber() : e.totalWinAmount), null != e.curCoin && e.hasOwnProperty("curCoin") && ("number" == typeof e.curCoin ? o.curCoin = t.longs === String ? String(e.curCoin) : e.curCoin : o.curCoin = t.longs === String ? m.Long.prototype.toString.call(e.curCoin) : t.longs === Number ? new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber() : e.curCoin), null != e.keepWinCount && e.hasOwnProperty("keepWinCount") && (o.keepWinCount = e.keepWinCount), null != e.hasBet && e.hasOwnProperty("hasBet") && (o.hasBet = e.hasBet), null != e.pos4WinAmount && e.hasOwnProperty("pos4WinAmount") && ("number" == typeof e.pos4WinAmount ? o.pos4WinAmount = t.longs === String ? String(e.pos4WinAmount) : e.pos4WinAmount : o.pos4WinAmount = t.longs === String ? m.Long.prototype.toString.call(e.pos4WinAmount) : t.longs === Number ? new m.LongBits(e.pos4WinAmount.low >>> 0, e.pos4WinAmount.high >>> 0).toNumber() : e.pos4WinAmount), null != e.posLuckWinAmount && e.hasOwnProperty("posLuckWinAmount") && ("number" == typeof e.posLuckWinAmount ? o.posLuckWinAmount = t.longs === String ? String(e.posLuckWinAmount) : e.posLuckWinAmount : o.posLuckWinAmount = t.longs === String ? m.Long.prototype.toString.call(e.posLuckWinAmount) : t.longs === Number ? new m.LongBits(e.posLuckWinAmount.low >>> 0, e.posLuckWinAmount.high >>> 0).toNumber() : e.posLuckWinAmount), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.PlayerSettle"
            }, e
        }(), s.ZoneSettleDetail = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.option = 0, e.prototype.betAmount = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.winAmount = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.isAuto = 0, e.prototype.betGameCoin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(16).int32(e.option), null != e.betAmount && Object.hasOwnProperty.call(e, "betAmount") && t.uint32(24).uint64(e.betAmount), null != e.winAmount && Object.hasOwnProperty.call(e, "winAmount") && t.uint32(32).int64(e.winAmount), null != e.isAuto && Object.hasOwnProperty.call(e, "isAuto") && t.uint32(40).int32(e.isAuto), null != e.betGameCoin && Object.hasOwnProperty.call(e, "betGameCoin") && t.uint32(48).int64(e.betGameCoin), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.ZoneSettleDetail; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 2:
                            n.option = e.int32();
                            break;
                        case 3:
                            n.betAmount = e.uint64();
                            break;
                        case 4:
                            n.winAmount = e.int64();
                            break;
                        case 5:
                            n.isAuto = e.int32();
                            break;
                        case 6:
                            n.betGameCoin = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.option && e.hasOwnProperty("option")) switch (e.option) {
                    default:
                        return "option: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 106:
                }
                return null != e.betAmount && e.hasOwnProperty("betAmount") && !(m.isInteger(e.betAmount) || e.betAmount && m.isInteger(e.betAmount.low) && m.isInteger(e.betAmount.high)) ? "betAmount: integer|Long expected" : null != e.winAmount && e.hasOwnProperty("winAmount") && !(m.isInteger(e.winAmount) || e.winAmount && m.isInteger(e.winAmount.low) && m.isInteger(e.winAmount.high)) ? "winAmount: integer|Long expected" : null != e.isAuto && e.hasOwnProperty("isAuto") && !m.isInteger(e.isAuto) ? "isAuto: integer expected" : null != e.betGameCoin && e.hasOwnProperty("betGameCoin") && !(m.isInteger(e.betGameCoin) || e.betGameCoin && m.isInteger(e.betGameCoin.low) && m.isInteger(e.betGameCoin.high)) ? "betGameCoin: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.ZoneSettleDetail) return e;
                var t = new f.humanboy_proto.ZoneSettleDetail;
                switch (e.option) {
                    default:
                        if ("number" == typeof e.option) {
                            t.option = e.option;
                            break
                        }
                        break;
                    case "BetZoneOption_DUMMY":
                    case 0:
                        t.option = 0;
                        break;
                    case "HOST":
                    case 1:
                        t.option = 1;
                        break;
                    case "POS1":
                    case 2:
                        t.option = 2;
                        break;
                    case "POS2":
                    case 3:
                        t.option = 3;
                        break;
                    case "POS3":
                    case 4:
                        t.option = 4;
                        break;
                    case "POS4":
                    case 5:
                        t.option = 5;
                        break;
                    case "POS_LUCK":
                    case 100:
                        t.option = 100;
                        break;
                    case "POS_LUCK_1":
                    case 101:
                        t.option = 101;
                        break;
                    case "POS_LUCK_2":
                    case 102:
                        t.option = 102;
                        break;
                    case "POS_LUCK_3":
                    case 103:
                        t.option = 103;
                        break;
                    case "POS_LUCK_4":
                    case 104:
                        t.option = 104;
                        break;
                    case "POS_LUCK_5":
                    case 105:
                        t.option = 105;
                        break;
                    case "POS_LUCK_6":
                    case 106:
                        t.option = 106
                }
                return null != e.betAmount && (m.Long ? (t.betAmount = m.Long.fromValue(e.betAmount)).unsigned = !0 : "string" == typeof e.betAmount ? t.betAmount = parseInt(e.betAmount, 10) : "number" == typeof e.betAmount ? t.betAmount = e.betAmount : "object" == typeof e.betAmount && (t.betAmount = new m.LongBits(e.betAmount.low >>> 0, e.betAmount.high >>> 0).toNumber(!0))), null != e.winAmount && (m.Long ? (t.winAmount = m.Long.fromValue(e.winAmount)).unsigned = !1 : "string" == typeof e.winAmount ? t.winAmount = parseInt(e.winAmount, 10) : "number" == typeof e.winAmount ? t.winAmount = e.winAmount : "object" == typeof e.winAmount && (t.winAmount = new m.LongBits(e.winAmount.low >>> 0, e.winAmount.high >>> 0).toNumber())), null != e.isAuto && (t.isAuto = 0 | e.isAuto), null != e.betGameCoin && (m.Long ? (t.betGameCoin = m.Long.fromValue(e.betGameCoin)).unsigned = !1 : "string" == typeof e.betGameCoin ? t.betGameCoin = parseInt(e.betGameCoin, 10) : "number" == typeof e.betGameCoin ? t.betGameCoin = e.betGameCoin : "object" == typeof e.betGameCoin && (t.betGameCoin = new m.LongBits(e.betGameCoin.low >>> 0, e.betGameCoin.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.betAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.betAmount = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !1), o.winAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.winAmount = t.longs === String ? "0" : 0, o.isAuto = 0, m.Long ? (n = new m.Long(0, 0, !1), o.betGameCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.betGameCoin = t.longs === String ? "0" : 0
                }
                return null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.humanboy_proto.BetZoneOption[e.option] ? e.option : f.humanboy_proto.BetZoneOption[e.option] : e.option), null != e.betAmount && e.hasOwnProperty("betAmount") && ("number" == typeof e.betAmount ? o.betAmount = t.longs === String ? String(e.betAmount) : e.betAmount : o.betAmount = t.longs === String ? m.Long.prototype.toString.call(e.betAmount) : t.longs === Number ? new m.LongBits(e.betAmount.low >>> 0, e.betAmount.high >>> 0).toNumber(!0) : e.betAmount), null != e.winAmount && e.hasOwnProperty("winAmount") && ("number" == typeof e.winAmount ? o.winAmount = t.longs === String ? String(e.winAmount) : e.winAmount : o.winAmount = t.longs === String ? m.Long.prototype.toString.call(e.winAmount) : t.longs === Number ? new m.LongBits(e.winAmount.low >>> 0, e.winAmount.high >>> 0).toNumber() : e.winAmount), null != e.isAuto && e.hasOwnProperty("isAuto") && (o.isAuto = e.isAuto), null != e.betGameCoin && e.hasOwnProperty("betGameCoin") && ("number" == typeof e.betGameCoin ? o.betGameCoin = t.longs === String ? String(e.betGameCoin) : e.betGameCoin : o.betGameCoin = t.longs === String ? m.Long.prototype.toString.call(e.betGameCoin) : t.longs === Number ? new m.LongBits(e.betGameCoin.low >>> 0, e.betGameCoin.high >>> 0).toNumber() : e.betGameCoin), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.ZoneSettleDetail"
            }, e
        }(), s.ConnClosed = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.Reason = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.Reason && Object.hasOwnProperty.call(e, "Reason") && t.uint32(8).int32(e.Reason), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.ConnClosed; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.Reason = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.Reason && e.hasOwnProperty("Reason") && !m.isInteger(e.Reason) ? "Reason: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.ConnClosed) return e;
                var t = new f.humanboy_proto.ConnClosed;
                return null != e.Reason && (t.Reason = 0 | e.Reason), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.Reason = 0), null != e.Reason && e.hasOwnProperty("Reason") && (o.Reason = e.Reason), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.ConnClosed"
            }, e
        }(), s.LeaveRoomReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.LeaveRoomReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.humanboy_proto.LeaveRoomReq ? e : new f.humanboy_proto.LeaveRoomReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.LeaveRoomReq"
            }, e
        }(), s.LeaveRoomResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.LeaveRoomResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.LeaveRoomResp) return e;
                var t = new f.humanboy_proto.LeaveRoomResp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.LeaveRoomResp"
            }, e
        }(), s.StartBetNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.nextRoundEndStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.leftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.nextRoundEndStamp && Object.hasOwnProperty.call(e, "nextRoundEndStamp") && t.uint32(8).int64(e.nextRoundEndStamp), null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(16).int64(e.leftSeconds), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.StartBetNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.nextRoundEndStamp = e.int64();
                            break;
                        case 2:
                            n.leftSeconds = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && !(m.isInteger(e.nextRoundEndStamp) || e.nextRoundEndStamp && m.isInteger(e.nextRoundEndStamp.low) && m.isInteger(e.nextRoundEndStamp.high)) ? "nextRoundEndStamp: integer|Long expected" : null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(m.isInteger(e.leftSeconds) || e.leftSeconds && m.isInteger(e.leftSeconds.low) && m.isInteger(e.leftSeconds.high)) ? "leftSeconds: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.StartBetNotify) return e;
                var t = new f.humanboy_proto.StartBetNotify;
                return null != e.nextRoundEndStamp && (m.Long ? (t.nextRoundEndStamp = m.Long.fromValue(e.nextRoundEndStamp)).unsigned = !1 : "string" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = parseInt(e.nextRoundEndStamp, 10) : "number" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = e.nextRoundEndStamp : "object" == typeof e.nextRoundEndStamp && (t.nextRoundEndStamp = new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber())), null != e.leftSeconds && (m.Long ? (t.leftSeconds = m.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.nextRoundEndStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.nextRoundEndStamp = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !1), o.leftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.leftSeconds = t.longs === String ? "0" : 0
                }
                return null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && ("number" == typeof e.nextRoundEndStamp ? o.nextRoundEndStamp = t.longs === String ? String(e.nextRoundEndStamp) : e.nextRoundEndStamp : o.nextRoundEndStamp = t.longs === String ? m.Long.prototype.toString.call(e.nextRoundEndStamp) : t.longs === Number ? new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber() : e.nextRoundEndStamp), null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? o.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : o.leftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.StartBetNotify"
            }, e
        }(), s.AutoBetReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.AutoBetReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.humanboy_proto.AutoBetReq ? e : new f.humanboy_proto.AutoBetReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.AutoBetReq"
            }, e
        }(), s.AutoBetResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.canAuto = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.canAuto && Object.hasOwnProperty.call(e, "canAuto") && t.uint32(16).bool(e.canAuto), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.AutoBetResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.canAuto = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                return null != e.canAuto && e.hasOwnProperty("canAuto") && "boolean" != typeof e.canAuto ? "canAuto: boolean expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.AutoBetResp) return e;
                var t = new f.humanboy_proto.AutoBetResp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                return null != e.canAuto && (t.canAuto = Boolean(e.canAuto)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.canAuto = !1), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), null != e.canAuto && e.hasOwnProperty("canAuto") && (o.canAuto = e.canAuto), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.AutoBetResp"
            }, e
        }(), s.AutoBetNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.open = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.open && Object.hasOwnProperty.call(e, "open") && t.uint32(16).bool(e.open), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.AutoBetNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 2:
                            n.open = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.open && e.hasOwnProperty("open") && "boolean" != typeof e.open ? "open: boolean expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.AutoBetNotify) return e;
                var t = new f.humanboy_proto.AutoBetNotify;
                return null != e.open && (t.open = Boolean(e.open)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.open = !1), null != e.open && e.hasOwnProperty("open") && (o.open = e.open), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.AutoBetNotify"
            }, e
        }(), s.PlayerListReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.PlayerListReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.humanboy_proto.PlayerListReq ? e : new f.humanboy_proto.PlayerListReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.PlayerListReq"
            }, e
        }(), s.PlayerListResp = function() {
            function e(e) {
                if (this.gamePlayers = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.gamePlayers = m.emptyArray, e.prototype.self = null, e.prototype.playerNum = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.gamePlayers && e.gamePlayers.length)
                    for (var o = 0; o < e.gamePlayers.length; ++o) f.humanboy_proto.GamePlayer.encode(e.gamePlayers[o], t.uint32(18).fork()).ldelim();
                return null != e.self && Object.hasOwnProperty.call(e, "self") && f.humanboy_proto.GamePlayer.encode(e.self, t.uint32(26).fork()).ldelim(), null != e.playerNum && Object.hasOwnProperty.call(e, "playerNum") && t.uint32(40).uint32(e.playerNum), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.PlayerListResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.gamePlayers && n.gamePlayers.length || (n.gamePlayers = []), n.gamePlayers.push(f.humanboy_proto.GamePlayer.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.self = f.humanboy_proto.GamePlayer.decode(e, e.uint32());
                            break;
                        case 5:
                            n.playerNum = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                if (null != e.gamePlayers && e.hasOwnProperty("gamePlayers")) {
                    if (!Array.isArray(e.gamePlayers)) return "gamePlayers: array expected";
                    for (var t = 0; t < e.gamePlayers.length; ++t)
                        if (o = f.humanboy_proto.GamePlayer.verify(e.gamePlayers[t])) return "gamePlayers." + o
                }
                var o;
                return null != e.self && e.hasOwnProperty("self") && (o = f.humanboy_proto.GamePlayer.verify(e.self)) ? "self." + o : null != e.playerNum && e.hasOwnProperty("playerNum") && !m.isInteger(e.playerNum) ? "playerNum: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.PlayerListResp) return e;
                var t = new f.humanboy_proto.PlayerListResp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                if (e.gamePlayers) {
                    if (!Array.isArray(e.gamePlayers)) throw TypeError(".humanboy_proto.PlayerListResp.gamePlayers: array expected");
                    t.gamePlayers = [];
                    for (var o = 0; o < e.gamePlayers.length; ++o) {
                        if ("object" != typeof e.gamePlayers[o]) throw TypeError(".humanboy_proto.PlayerListResp.gamePlayers: object expected");
                        t.gamePlayers[o] = f.humanboy_proto.GamePlayer.fromObject(e.gamePlayers[o])
                    }
                }
                if (null != e.self) {
                    if ("object" != typeof e.self) throw TypeError(".humanboy_proto.PlayerListResp.self: object expected");
                    t.self = f.humanboy_proto.GamePlayer.fromObject(e.self)
                }
                return null != e.playerNum && (t.playerNum = e.playerNum >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.gamePlayers = []), t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.self = null, o.playerNum = 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), e.gamePlayers && e.gamePlayers.length) {
                    o.gamePlayers = [];
                    for (var n = 0; n < e.gamePlayers.length; ++n) o.gamePlayers[n] = f.humanboy_proto.GamePlayer.toObject(e.gamePlayers[n], t)
                }
                return null != e.self && e.hasOwnProperty("self") && (o.self = f.humanboy_proto.GamePlayer.toObject(e.self, t)), null != e.playerNum && e.hasOwnProperty("playerNum") && (o.playerNum = e.playerNum), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.PlayerListResp"
            }, e
        }(), s.GamePlayer = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.uid = 0, e.prototype.name = "", e.prototype.head = "", e.prototype.totalBetAmount = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.winCount = 0, e.prototype.rank = 0, e.prototype.curCoin = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.keepWinCount = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).uint32(e.uid), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(18).string(e.name), null != e.head && Object.hasOwnProperty.call(e, "head") && t.uint32(26).string(e.head), null != e.totalBetAmount && Object.hasOwnProperty.call(e, "totalBetAmount") && t.uint32(32).uint64(e.totalBetAmount), null != e.winCount && Object.hasOwnProperty.call(e, "winCount") && t.uint32(40).uint32(e.winCount), null != e.rank && Object.hasOwnProperty.call(e, "rank") && t.uint32(48).uint32(e.rank), null != e.curCoin && Object.hasOwnProperty.call(e, "curCoin") && t.uint32(56).uint64(e.curCoin), null != e.keepWinCount && Object.hasOwnProperty.call(e, "keepWinCount") && t.uint32(64).int32(e.keepWinCount), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.GamePlayer; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.uid = e.uint32();
                            break;
                        case 2:
                            n.name = e.string();
                            break;
                        case 3:
                            n.head = e.string();
                            break;
                        case 4:
                            n.totalBetAmount = e.uint64();
                            break;
                        case 5:
                            n.winCount = e.uint32();
                            break;
                        case 6:
                            n.rank = e.uint32();
                            break;
                        case 7:
                            n.curCoin = e.uint64();
                            break;
                        case 8:
                            n.keepWinCount = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.uid && e.hasOwnProperty("uid") && !m.isInteger(e.uid) ? "uid: integer expected" : null != e.name && e.hasOwnProperty("name") && !m.isString(e.name) ? "name: string expected" : null != e.head && e.hasOwnProperty("head") && !m.isString(e.head) ? "head: string expected" : null != e.totalBetAmount && e.hasOwnProperty("totalBetAmount") && !(m.isInteger(e.totalBetAmount) || e.totalBetAmount && m.isInteger(e.totalBetAmount.low) && m.isInteger(e.totalBetAmount.high)) ? "totalBetAmount: integer|Long expected" : null != e.winCount && e.hasOwnProperty("winCount") && !m.isInteger(e.winCount) ? "winCount: integer expected" : null != e.rank && e.hasOwnProperty("rank") && !m.isInteger(e.rank) ? "rank: integer expected" : null != e.curCoin && e.hasOwnProperty("curCoin") && !(m.isInteger(e.curCoin) || e.curCoin && m.isInteger(e.curCoin.low) && m.isInteger(e.curCoin.high)) ? "curCoin: integer|Long expected" : null != e.keepWinCount && e.hasOwnProperty("keepWinCount") && !m.isInteger(e.keepWinCount) ? "keepWinCount: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.GamePlayer) return e;
                var t = new f.humanboy_proto.GamePlayer;
                return null != e.uid && (t.uid = e.uid >>> 0), null != e.name && (t.name = String(e.name)), null != e.head && (t.head = String(e.head)), null != e.totalBetAmount && (m.Long ? (t.totalBetAmount = m.Long.fromValue(e.totalBetAmount)).unsigned = !0 : "string" == typeof e.totalBetAmount ? t.totalBetAmount = parseInt(e.totalBetAmount, 10) : "number" == typeof e.totalBetAmount ? t.totalBetAmount = e.totalBetAmount : "object" == typeof e.totalBetAmount && (t.totalBetAmount = new m.LongBits(e.totalBetAmount.low >>> 0, e.totalBetAmount.high >>> 0).toNumber(!0))), null != e.winCount && (t.winCount = e.winCount >>> 0), null != e.rank && (t.rank = e.rank >>> 0), null != e.curCoin && (m.Long ? (t.curCoin = m.Long.fromValue(e.curCoin)).unsigned = !0 : "string" == typeof e.curCoin ? t.curCoin = parseInt(e.curCoin, 10) : "number" == typeof e.curCoin ? t.curCoin = e.curCoin : "object" == typeof e.curCoin && (t.curCoin = new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber(!0))), null != e.keepWinCount && (t.keepWinCount = 0 | e.keepWinCount), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.uid = 0, o.name = "", o.head = "", m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.totalBetAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.totalBetAmount = t.longs === String ? "0" : 0;
                    o.winCount = 0, o.rank = 0, m.Long ? (n = new m.Long(0, 0, !0), o.curCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.curCoin = t.longs === String ? "0" : 0, o.keepWinCount = 0
                }
                return null != e.uid && e.hasOwnProperty("uid") && (o.uid = e.uid), null != e.name && e.hasOwnProperty("name") && (o.name = e.name), null != e.head && e.hasOwnProperty("head") && (o.head = e.head), null != e.totalBetAmount && e.hasOwnProperty("totalBetAmount") && ("number" == typeof e.totalBetAmount ? o.totalBetAmount = t.longs === String ? String(e.totalBetAmount) : e.totalBetAmount : o.totalBetAmount = t.longs === String ? m.Long.prototype.toString.call(e.totalBetAmount) : t.longs === Number ? new m.LongBits(e.totalBetAmount.low >>> 0, e.totalBetAmount.high >>> 0).toNumber(!0) : e.totalBetAmount), null != e.winCount && e.hasOwnProperty("winCount") && (o.winCount = e.winCount), null != e.rank && e.hasOwnProperty("rank") && (o.rank = e.rank), null != e.curCoin && e.hasOwnProperty("curCoin") && ("number" == typeof e.curCoin ? o.curCoin = t.longs === String ? String(e.curCoin) : e.curCoin : o.curCoin = t.longs === String ? m.Long.prototype.toString.call(e.curCoin) : t.longs === Number ? new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber(!0) : e.curCoin), null != e.keepWinCount && e.hasOwnProperty("keepWinCount") && (o.keepWinCount = e.keepWinCount), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.GamePlayer"
            }, e
        }(), s.KickNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.kickType = 0, e.prototype.desc = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.kickType && Object.hasOwnProperty.call(e, "kickType") && t.uint32(8).int32(e.kickType), null != e.desc && Object.hasOwnProperty.call(e, "desc") && t.uint32(18).string(e.desc), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.KickNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.kickType = e.int32();
                            break;
                        case 2:
                            n.desc = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.kickType && e.hasOwnProperty("kickType")) switch (e.kickType) {
                    default:
                        return "kickType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                }
                return null != e.desc && e.hasOwnProperty("desc") && !m.isString(e.desc) ? "desc: string expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.KickNotify) return e;
                var t = new f.humanboy_proto.KickNotify;
                switch (e.kickType) {
                    default:
                        if ("number" == typeof e.kickType) {
                            t.kickType = e.kickType;
                            break
                        }
                        break;
                    case "Kick_DUMMY":
                    case 0:
                        t.kickType = 0;
                        break;
                    case "IDLE_LONG_TIME":
                    case 1:
                        t.kickType = 1;
                        break;
                    case "Stop_World":
                    case 2:
                        t.kickType = 2
                }
                return null != e.desc && (t.desc = String(e.desc)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.kickType = t.enums === String ? "Kick_DUMMY" : 0, o.desc = ""), null != e.kickType && e.hasOwnProperty("kickType") && (o.kickType = t.enums === String ? void 0 === f.humanboy_proto.Kick[e.kickType] ? e.kickType : f.humanboy_proto.Kick[e.kickType] : e.kickType), null != e.desc && e.hasOwnProperty("desc") && (o.desc = e.desc), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.KickNotify"
            }, e
        }(), s.TrendReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.TrendReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.humanboy_proto.TrendReq ? e : new f.humanboy_proto.TrendReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.TrendReq"
            }, e
        }(), s.TrendResp = function() {
            function e(e) {
                if (this.trendOption = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.trendOption = m.emptyArray, e.prototype.handLevelStatistics = null, e.prototype.handNum = 0, e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.trendOption && e.trendOption.length)
                    for (var o = 0; o < e.trendOption.length; ++o) f.humanboy_proto.RoomTrendOption.encode(e.trendOption[o], t.uint32(10).fork()).ldelim();
                return null != e.handLevelStatistics && Object.hasOwnProperty.call(e, "handLevelStatistics") && f.humanboy_proto.RoomTrendLevelStatistics.encode(e.handLevelStatistics, t.uint32(18).fork()).ldelim(), null != e.handNum && Object.hasOwnProperty.call(e, "handNum") && t.uint32(24).int32(e.handNum), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(32).int32(e.code), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.TrendResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.trendOption && n.trendOption.length || (n.trendOption = []), n.trendOption.push(f.humanboy_proto.RoomTrendOption.decode(e, e.uint32()));
                            break;
                        case 2:
                            n.handLevelStatistics = f.humanboy_proto.RoomTrendLevelStatistics.decode(e, e.uint32());
                            break;
                        case 3:
                            n.handNum = e.int32();
                            break;
                        case 4:
                            n.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.trendOption && e.hasOwnProperty("trendOption")) {
                    if (!Array.isArray(e.trendOption)) return "trendOption: array expected";
                    for (var t = 0; t < e.trendOption.length; ++t)
                        if (o = f.humanboy_proto.RoomTrendOption.verify(e.trendOption[t])) return "trendOption." + o
                }
                var o;
                if (null != e.handLevelStatistics && e.hasOwnProperty("handLevelStatistics") && (o = f.humanboy_proto.RoomTrendLevelStatistics.verify(e.handLevelStatistics))) return "handLevelStatistics." + o;
                if (null != e.handNum && e.hasOwnProperty("handNum") && !m.isInteger(e.handNum)) return "handNum: integer expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.TrendResp) return e;
                var t = new f.humanboy_proto.TrendResp;
                if (e.trendOption) {
                    if (!Array.isArray(e.trendOption)) throw TypeError(".humanboy_proto.TrendResp.trendOption: array expected");
                    t.trendOption = [];
                    for (var o = 0; o < e.trendOption.length; ++o) {
                        if ("object" != typeof e.trendOption[o]) throw TypeError(".humanboy_proto.TrendResp.trendOption: object expected");
                        t.trendOption[o] = f.humanboy_proto.RoomTrendOption.fromObject(e.trendOption[o])
                    }
                }
                if (null != e.handLevelStatistics) {
                    if ("object" != typeof e.handLevelStatistics) throw TypeError(".humanboy_proto.TrendResp.handLevelStatistics: object expected");
                    t.handLevelStatistics = f.humanboy_proto.RoomTrendLevelStatistics.fromObject(e.handLevelStatistics)
                }
                switch (null != e.handNum && (t.handNum = 0 | e.handNum), e.code) {
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.trendOption = []), t.defaults && (o.handLevelStatistics = null, o.handNum = 0, o.code = t.enums === String ? "ErrorCode_DUMMY" : 0), e.trendOption && e.trendOption.length) {
                    o.trendOption = [];
                    for (var n = 0; n < e.trendOption.length; ++n) o.trendOption[n] = f.humanboy_proto.RoomTrendOption.toObject(e.trendOption[n], t)
                }
                return null != e.handLevelStatistics && e.hasOwnProperty("handLevelStatistics") && (o.handLevelStatistics = f.humanboy_proto.RoomTrendLevelStatistics.toObject(e.handLevelStatistics, t)), null != e.handNum && e.hasOwnProperty("handNum") && (o.handNum = e.handNum), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.TrendResp"
            }, e
        }(), s.RoomTrendNotice = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.RoomTrendNotice; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.humanboy_proto.RoomTrendNotice ? e : new f.humanboy_proto.RoomTrendNotice
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.RoomTrendNotice"
            }, e
        }(), s.TrendData = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.result = 0, e.prototype.handLevel = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.result && Object.hasOwnProperty.call(e, "result") && t.uint32(8).int32(e.result), null != e.handLevel && Object.hasOwnProperty.call(e, "handLevel") && t.uint32(16).int32(e.handLevel), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.TrendData; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.result = e.int32();
                            break;
                        case 2:
                            n.handLevel = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.result && e.hasOwnProperty("result") && !m.isInteger(e.result)) return "result: integer expected";
                if (null != e.handLevel && e.hasOwnProperty("handLevel")) switch (e.handLevel) {
                    default:
                        return "handLevel: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.TrendData) return e;
                var t = new f.humanboy_proto.TrendData;
                switch (null != e.result && (t.result = 0 | e.result), e.handLevel) {
                    default:
                        if ("number" == typeof e.handLevel) {
                            t.handLevel = e.handLevel;
                            break
                        }
                        break;
                    case "CardResult_Dummy":
                    case 0:
                        t.handLevel = 0;
                        break;
                    case "GAO_PAI":
                    case 1:
                        t.handLevel = 1;
                        break;
                    case "YI_DUI":
                    case 2:
                        t.handLevel = 2;
                        break;
                    case "LIAN_DUI":
                    case 3:
                        t.handLevel = 3;
                        break;
                    case "SAN_TIAO":
                    case 4:
                        t.handLevel = 4;
                        break;
                    case "SHUN_ZI":
                    case 5:
                        t.handLevel = 5;
                        break;
                    case "TONG_HUA":
                    case 6:
                        t.handLevel = 6;
                        break;
                    case "HU_LU":
                    case 7:
                        t.handLevel = 7;
                        break;
                    case "SI_TIAO":
                    case 8:
                        t.handLevel = 8;
                        break;
                    case "TONG_HUA_SHUN":
                    case 9:
                        t.handLevel = 9;
                        break;
                    case "HUANG_TONG":
                    case 10:
                        t.handLevel = 10
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.result = 0, o.handLevel = t.enums === String ? "CardResult_Dummy" : 0), null != e.result && e.hasOwnProperty("result") && (o.result = e.result), null != e.handLevel && e.hasOwnProperty("handLevel") && (o.handLevel = t.enums === String ? void 0 === f.humanboy_proto.CardResult[e.handLevel] ? e.handLevel : f.humanboy_proto.CardResult[e.handLevel] : e.handLevel), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.TrendData"
            }, e
        }(), s.RoomTrendOption = function() {
            function e(e) {
                if (this.road = [], this.lastResult = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.option = 0, e.prototype.stats = null, e.prototype.road = m.emptyArray, e.prototype.lastResult = m.emptyArray, e.prototype.lastRow = 0, e.prototype.lastCol = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(8).int32(e.option), null != e.stats && Object.hasOwnProperty.call(e, "stats") && f.humanboy_proto.RoomTrendOptionStats.encode(e.stats, t.uint32(26).fork()).ldelim(), null != e.road && e.road.length)
                    for (var o = 0; o < e.road.length; ++o) f.humanboy_proto.TrendRoad.encode(e.road[o], t.uint32(34).fork()).ldelim();
                if (null != e.lastResult && e.lastResult.length) {
                    for (t.uint32(42).fork(), o = 0; o < e.lastResult.length; ++o) t.int32(e.lastResult[o]);
                    t.ldelim()
                }
                return null != e.lastRow && Object.hasOwnProperty.call(e, "lastRow") && t.uint32(56).int32(e.lastRow), null != e.lastCol && Object.hasOwnProperty.call(e, "lastCol") && t.uint32(64).int32(e.lastCol), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.RoomTrendOption; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.option = e.int32();
                            break;
                        case 3:
                            n.stats = f.humanboy_proto.RoomTrendOptionStats.decode(e, e.uint32());
                            break;
                        case 4:
                            n.road && n.road.length || (n.road = []), n.road.push(f.humanboy_proto.TrendRoad.decode(e, e.uint32()));
                            break;
                        case 5:
                            if (n.lastResult && n.lastResult.length || (n.lastResult = []), 2 == (7 & r))
                                for (var a = e.uint32() + e.pos; e.pos < a;) n.lastResult.push(e.int32());
                            else n.lastResult.push(e.int32());
                            break;
                        case 7:
                            n.lastRow = e.int32();
                            break;
                        case 8:
                            n.lastCol = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.option && e.hasOwnProperty("option")) switch (e.option) {
                    default:
                        return "option: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 106:
                }
                if (null != e.stats && e.hasOwnProperty("stats") && (o = f.humanboy_proto.RoomTrendOptionStats.verify(e.stats))) return "stats." + o;
                if (null != e.road && e.hasOwnProperty("road")) {
                    if (!Array.isArray(e.road)) return "road: array expected";
                    for (var t = 0; t < e.road.length; ++t) {
                        var o;
                        if (o = f.humanboy_proto.TrendRoad.verify(e.road[t])) return "road." + o
                    }
                }
                if (null != e.lastResult && e.hasOwnProperty("lastResult")) {
                    if (!Array.isArray(e.lastResult)) return "lastResult: array expected";
                    for (t = 0; t < e.lastResult.length; ++t)
                        if (!m.isInteger(e.lastResult[t])) return "lastResult: integer[] expected"
                }
                return null != e.lastRow && e.hasOwnProperty("lastRow") && !m.isInteger(e.lastRow) ? "lastRow: integer expected" : null != e.lastCol && e.hasOwnProperty("lastCol") && !m.isInteger(e.lastCol) ? "lastCol: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.RoomTrendOption) return e;
                var t = new f.humanboy_proto.RoomTrendOption;
                switch (e.option) {
                    default:
                        if ("number" == typeof e.option) {
                            t.option = e.option;
                            break
                        }
                        break;
                    case "BetZoneOption_DUMMY":
                    case 0:
                        t.option = 0;
                        break;
                    case "HOST":
                    case 1:
                        t.option = 1;
                        break;
                    case "POS1":
                    case 2:
                        t.option = 2;
                        break;
                    case "POS2":
                    case 3:
                        t.option = 3;
                        break;
                    case "POS3":
                    case 4:
                        t.option = 4;
                        break;
                    case "POS4":
                    case 5:
                        t.option = 5;
                        break;
                    case "POS_LUCK":
                    case 100:
                        t.option = 100;
                        break;
                    case "POS_LUCK_1":
                    case 101:
                        t.option = 101;
                        break;
                    case "POS_LUCK_2":
                    case 102:
                        t.option = 102;
                        break;
                    case "POS_LUCK_3":
                    case 103:
                        t.option = 103;
                        break;
                    case "POS_LUCK_4":
                    case 104:
                        t.option = 104;
                        break;
                    case "POS_LUCK_5":
                    case 105:
                        t.option = 105;
                        break;
                    case "POS_LUCK_6":
                    case 106:
                        t.option = 106
                }
                if (null != e.stats) {
                    if ("object" != typeof e.stats) throw TypeError(".humanboy_proto.RoomTrendOption.stats: object expected");
                    t.stats = f.humanboy_proto.RoomTrendOptionStats.fromObject(e.stats)
                }
                if (e.road) {
                    if (!Array.isArray(e.road)) throw TypeError(".humanboy_proto.RoomTrendOption.road: array expected");
                    t.road = [];
                    for (var o = 0; o < e.road.length; ++o) {
                        if ("object" != typeof e.road[o]) throw TypeError(".humanboy_proto.RoomTrendOption.road: object expected");
                        t.road[o] = f.humanboy_proto.TrendRoad.fromObject(e.road[o])
                    }
                }
                if (e.lastResult) {
                    if (!Array.isArray(e.lastResult)) throw TypeError(".humanboy_proto.RoomTrendOption.lastResult: array expected");
                    for (t.lastResult = [], o = 0; o < e.lastResult.length; ++o) t.lastResult[o] = 0 | e.lastResult[o]
                }
                return null != e.lastRow && (t.lastRow = 0 | e.lastRow), null != e.lastCol && (t.lastCol = 0 | e.lastCol), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.road = [], o.lastResult = []), t.defaults && (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, o.stats = null, o.lastRow = 0, o.lastCol = 0), null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.humanboy_proto.BetZoneOption[e.option] ? e.option : f.humanboy_proto.BetZoneOption[e.option] : e.option), null != e.stats && e.hasOwnProperty("stats") && (o.stats = f.humanboy_proto.RoomTrendOptionStats.toObject(e.stats, t)), e.road && e.road.length) {
                    o.road = [];
                    for (var n = 0; n < e.road.length; ++n) o.road[n] = f.humanboy_proto.TrendRoad.toObject(e.road[n], t)
                }
                if (e.lastResult && e.lastResult.length)
                    for (o.lastResult = [], n = 0; n < e.lastResult.length; ++n) o.lastResult[n] = e.lastResult[n];
                return null != e.lastRow && e.hasOwnProperty("lastRow") && (o.lastRow = e.lastRow), null != e.lastCol && e.hasOwnProperty("lastCol") && (o.lastCol = e.lastCol), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.RoomTrendOption"
            }, e
        }(), s.RoomTrendOptionStats = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.capHandNum = 0, e.prototype.lenHandNum = 0, e.prototype.win = 0, e.prototype.lose = 0, e.prototype.equal = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.capHandNum && Object.hasOwnProperty.call(e, "capHandNum") && t.uint32(8).int32(e.capHandNum), null != e.lenHandNum && Object.hasOwnProperty.call(e, "lenHandNum") && t.uint32(16).int32(e.lenHandNum), null != e.win && Object.hasOwnProperty.call(e, "win") && t.uint32(24).int32(e.win), null != e.lose && Object.hasOwnProperty.call(e, "lose") && t.uint32(32).int32(e.lose), null != e.equal && Object.hasOwnProperty.call(e, "equal") && t.uint32(40).int32(e.equal), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.RoomTrendOptionStats; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.capHandNum = e.int32();
                            break;
                        case 2:
                            n.lenHandNum = e.int32();
                            break;
                        case 3:
                            n.win = e.int32();
                            break;
                        case 4:
                            n.lose = e.int32();
                            break;
                        case 5:
                            n.equal = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.capHandNum && e.hasOwnProperty("capHandNum") && !m.isInteger(e.capHandNum) ? "capHandNum: integer expected" : null != e.lenHandNum && e.hasOwnProperty("lenHandNum") && !m.isInteger(e.lenHandNum) ? "lenHandNum: integer expected" : null != e.win && e.hasOwnProperty("win") && !m.isInteger(e.win) ? "win: integer expected" : null != e.lose && e.hasOwnProperty("lose") && !m.isInteger(e.lose) ? "lose: integer expected" : null != e.equal && e.hasOwnProperty("equal") && !m.isInteger(e.equal) ? "equal: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.RoomTrendOptionStats) return e;
                var t = new f.humanboy_proto.RoomTrendOptionStats;
                return null != e.capHandNum && (t.capHandNum = 0 | e.capHandNum), null != e.lenHandNum && (t.lenHandNum = 0 | e.lenHandNum), null != e.win && (t.win = 0 | e.win), null != e.lose && (t.lose = 0 | e.lose), null != e.equal && (t.equal = 0 | e.equal), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.capHandNum = 0, o.lenHandNum = 0, o.win = 0, o.lose = 0, o.equal = 0), null != e.capHandNum && e.hasOwnProperty("capHandNum") && (o.capHandNum = e.capHandNum), null != e.lenHandNum && e.hasOwnProperty("lenHandNum") && (o.lenHandNum = e.lenHandNum), null != e.win && e.hasOwnProperty("win") && (o.win = e.win), null != e.lose && e.hasOwnProperty("lose") && (o.lose = e.lose), null != e.equal && e.hasOwnProperty("equal") && (o.equal = e.equal), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.RoomTrendOptionStats"
            }, e
        }(), s.RoomTrendLevelStatistics = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.stats = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.stats && Object.hasOwnProperty.call(e, "stats") && f.humanboy_proto.RoomTrendLevelStatisticsStats.encode(e.stats, t.uint32(10).fork()).ldelim(), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.RoomTrendLevelStatistics; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.stats = f.humanboy_proto.RoomTrendLevelStatisticsStats.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.stats && e.hasOwnProperty("stats")) {
                    var t = f.humanboy_proto.RoomTrendLevelStatisticsStats.verify(e.stats);
                    if (t) return "stats." + t
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.RoomTrendLevelStatistics) return e;
                var t = new f.humanboy_proto.RoomTrendLevelStatistics;
                if (null != e.stats) {
                    if ("object" != typeof e.stats) throw TypeError(".humanboy_proto.RoomTrendLevelStatistics.stats: object expected");
                    t.stats = f.humanboy_proto.RoomTrendLevelStatisticsStats.fromObject(e.stats)
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.stats = null), null != e.stats && e.hasOwnProperty("stats") && (o.stats = f.humanboy_proto.RoomTrendLevelStatisticsStats.toObject(e.stats, t)), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.RoomTrendLevelStatistics"
            }, e
        }(), s.RoomTrendLevelStatisticsStats = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.capHandNum = 0, e.prototype.lenHandNum = 0, e.prototype.gaoPai = 0, e.prototype.yuDui = 0, e.prototype.lianDui = 0, e.prototype.sanTiao = 0, e.prototype.shunZiAnd1 = 0, e.prototype.huLuAnd3 = 0, e.prototype.winAll = 0, e.prototype.loseAll = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.capHandNum && Object.hasOwnProperty.call(e, "capHandNum") && t.uint32(8).int32(e.capHandNum), null != e.lenHandNum && Object.hasOwnProperty.call(e, "lenHandNum") && t.uint32(16).int32(e.lenHandNum), null != e.gaoPai && Object.hasOwnProperty.call(e, "gaoPai") && t.uint32(24).int32(e.gaoPai), null != e.yuDui && Object.hasOwnProperty.call(e, "yuDui") && t.uint32(32).int32(e.yuDui), null != e.lianDui && Object.hasOwnProperty.call(e, "lianDui") && t.uint32(40).int32(e.lianDui), null != e.sanTiao && Object.hasOwnProperty.call(e, "sanTiao") && t.uint32(48).int32(e.sanTiao), null != e.shunZiAnd1 && Object.hasOwnProperty.call(e, "shunZiAnd1") && t.uint32(56).int32(e.shunZiAnd1), null != e.huLuAnd3 && Object.hasOwnProperty.call(e, "huLuAnd3") && t.uint32(64).int32(e.huLuAnd3), null != e.winAll && Object.hasOwnProperty.call(e, "winAll") && t.uint32(72).int32(e.winAll), null != e.loseAll && Object.hasOwnProperty.call(e, "loseAll") && t.uint32(80).int32(e.loseAll), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.RoomTrendLevelStatisticsStats; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.capHandNum = e.int32();
                            break;
                        case 2:
                            n.lenHandNum = e.int32();
                            break;
                        case 3:
                            n.gaoPai = e.int32();
                            break;
                        case 4:
                            n.yuDui = e.int32();
                            break;
                        case 5:
                            n.lianDui = e.int32();
                            break;
                        case 6:
                            n.sanTiao = e.int32();
                            break;
                        case 7:
                            n.shunZiAnd1 = e.int32();
                            break;
                        case 8:
                            n.huLuAnd3 = e.int32();
                            break;
                        case 9:
                            n.winAll = e.int32();
                            break;
                        case 10:
                            n.loseAll = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.capHandNum && e.hasOwnProperty("capHandNum") && !m.isInteger(e.capHandNum) ? "capHandNum: integer expected" : null != e.lenHandNum && e.hasOwnProperty("lenHandNum") && !m.isInteger(e.lenHandNum) ? "lenHandNum: integer expected" : null != e.gaoPai && e.hasOwnProperty("gaoPai") && !m.isInteger(e.gaoPai) ? "gaoPai: integer expected" : null != e.yuDui && e.hasOwnProperty("yuDui") && !m.isInteger(e.yuDui) ? "yuDui: integer expected" : null != e.lianDui && e.hasOwnProperty("lianDui") && !m.isInteger(e.lianDui) ? "lianDui: integer expected" : null != e.sanTiao && e.hasOwnProperty("sanTiao") && !m.isInteger(e.sanTiao) ? "sanTiao: integer expected" : null != e.shunZiAnd1 && e.hasOwnProperty("shunZiAnd1") && !m.isInteger(e.shunZiAnd1) ? "shunZiAnd1: integer expected" : null != e.huLuAnd3 && e.hasOwnProperty("huLuAnd3") && !m.isInteger(e.huLuAnd3) ? "huLuAnd3: integer expected" : null != e.winAll && e.hasOwnProperty("winAll") && !m.isInteger(e.winAll) ? "winAll: integer expected" : null != e.loseAll && e.hasOwnProperty("loseAll") && !m.isInteger(e.loseAll) ? "loseAll: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.RoomTrendLevelStatisticsStats) return e;
                var t = new f.humanboy_proto.RoomTrendLevelStatisticsStats;
                return null != e.capHandNum && (t.capHandNum = 0 | e.capHandNum), null != e.lenHandNum && (t.lenHandNum = 0 | e.lenHandNum), null != e.gaoPai && (t.gaoPai = 0 | e.gaoPai), null != e.yuDui && (t.yuDui = 0 | e.yuDui), null != e.lianDui && (t.lianDui = 0 | e.lianDui), null != e.sanTiao && (t.sanTiao = 0 | e.sanTiao), null != e.shunZiAnd1 && (t.shunZiAnd1 = 0 | e.shunZiAnd1), null != e.huLuAnd3 && (t.huLuAnd3 = 0 | e.huLuAnd3), null != e.winAll && (t.winAll = 0 | e.winAll), null != e.loseAll && (t.loseAll = 0 | e.loseAll), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.capHandNum = 0, o.lenHandNum = 0, o.gaoPai = 0, o.yuDui = 0, o.lianDui = 0, o.sanTiao = 0, o.shunZiAnd1 = 0, o.huLuAnd3 = 0, o.winAll = 0, o.loseAll = 0), null != e.capHandNum && e.hasOwnProperty("capHandNum") && (o.capHandNum = e.capHandNum), null != e.lenHandNum && e.hasOwnProperty("lenHandNum") && (o.lenHandNum = e.lenHandNum), null != e.gaoPai && e.hasOwnProperty("gaoPai") && (o.gaoPai = e.gaoPai), null != e.yuDui && e.hasOwnProperty("yuDui") && (o.yuDui = e.yuDui), null != e.lianDui && e.hasOwnProperty("lianDui") && (o.lianDui = e.lianDui), null != e.sanTiao && e.hasOwnProperty("sanTiao") && (o.sanTiao = e.sanTiao), null != e.shunZiAnd1 && e.hasOwnProperty("shunZiAnd1") && (o.shunZiAnd1 = e.shunZiAnd1), null != e.huLuAnd3 && e.hasOwnProperty("huLuAnd3") && (o.huLuAnd3 = e.huLuAnd3), null != e.winAll && e.hasOwnProperty("winAll") && (o.winAll = e.winAll), null != e.loseAll && e.hasOwnProperty("loseAll") && (o.loseAll = e.loseAll), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.RoomTrendLevelStatisticsStats"
            }, e
        }(), s.TrendRoad = function() {
            function e(e) {
                if (this.roadRow = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.roadRow = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.roadRow && e.roadRow.length)
                    for (var o = 0; o < e.roadRow.length; ++o) f.humanboy_proto.TrendRoadInfo.encode(e.roadRow[o], t.uint32(10).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.TrendRoad; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.roadRow && n.roadRow.length || (n.roadRow = []), n.roadRow.push(f.humanboy_proto.TrendRoadInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.roadRow && e.hasOwnProperty("roadRow")) {
                    if (!Array.isArray(e.roadRow)) return "roadRow: array expected";
                    for (var t = 0; t < e.roadRow.length; ++t) {
                        var o = f.humanboy_proto.TrendRoadInfo.verify(e.roadRow[t]);
                        if (o) return "roadRow." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.TrendRoad) return e;
                var t = new f.humanboy_proto.TrendRoad;
                if (e.roadRow) {
                    if (!Array.isArray(e.roadRow)) throw TypeError(".humanboy_proto.TrendRoad.roadRow: array expected");
                    t.roadRow = [];
                    for (var o = 0; o < e.roadRow.length; ++o) {
                        if ("object" != typeof e.roadRow[o]) throw TypeError(".humanboy_proto.TrendRoad.roadRow: object expected");
                        t.roadRow[o] = f.humanboy_proto.TrendRoadInfo.fromObject(e.roadRow[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.roadRow = []), e.roadRow && e.roadRow.length) {
                    o.roadRow = [];
                    for (var n = 0; n < e.roadRow.length; ++n) o.roadRow[n] = f.humanboy_proto.TrendRoadInfo.toObject(e.roadRow[n], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.TrendRoad"
            }, e
        }(), s.TrendRoadInfo = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.result = 0, e.prototype.eqc = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.result && Object.hasOwnProperty.call(e, "result") && t.uint32(8).int32(e.result), null != e.eqc && Object.hasOwnProperty.call(e, "eqc") && t.uint32(16).int32(e.eqc), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.TrendRoadInfo; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.result = e.int32();
                            break;
                        case 2:
                            n.eqc = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.result && e.hasOwnProperty("result") && !m.isInteger(e.result) ? "result: integer expected" : null != e.eqc && e.hasOwnProperty("eqc") && !m.isInteger(e.eqc) ? "eqc: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.TrendRoadInfo) return e;
                var t = new f.humanboy_proto.TrendRoadInfo;
                return null != e.result && (t.result = 0 | e.result), null != e.eqc && (t.eqc = 0 | e.eqc), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.result = 0, o.eqc = 0), null != e.result && e.hasOwnProperty("result") && (o.result = e.result), null != e.eqc && e.hasOwnProperty("eqc") && (o.eqc = e.eqc), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.TrendRoadInfo"
            }, e
        }(), s.GetBuyStockNumReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.GetBuyStockNumReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.humanboy_proto.GetBuyStockNumReq ? e : new f.humanboy_proto.GetBuyStockNumReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.GetBuyStockNumReq"
            }, e
        }(), s.GetBuyStockNumResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.stockNum = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.stockNum && Object.hasOwnProperty.call(e, "stockNum") && t.uint32(16).uint32(e.stockNum), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.GetBuyStockNumResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.stockNum = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                return null != e.stockNum && e.hasOwnProperty("stockNum") && !m.isInteger(e.stockNum) ? "stockNum: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.GetBuyStockNumResp) return e;
                var t = new f.humanboy_proto.GetBuyStockNumResp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                return null != e.stockNum && (t.stockNum = e.stockNum >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.stockNum = 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), null != e.stockNum && e.hasOwnProperty("stockNum") && (o.stockNum = e.stockNum), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.GetBuyStockNumResp"
            }, e
        }(), s.UpDealerReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.buyStockNum = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.buyStockNum && Object.hasOwnProperty.call(e, "buyStockNum") && t.uint32(8).uint32(e.buyStockNum), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.UpDealerReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.buyStockNum = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.buyStockNum && e.hasOwnProperty("buyStockNum") && !m.isInteger(e.buyStockNum) ? "buyStockNum: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.UpDealerReq) return e;
                var t = new f.humanboy_proto.UpDealerReq;
                return null != e.buyStockNum && (t.buyStockNum = e.buyStockNum >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.buyStockNum = 0), null != e.buyStockNum && e.hasOwnProperty("buyStockNum") && (o.buyStockNum = e.buyStockNum), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.UpDealerReq"
            }, e
        }(), s.UpDealerResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.buyStockNum = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.buyStockNum && Object.hasOwnProperty.call(e, "buyStockNum") && t.uint32(16).uint32(e.buyStockNum), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.UpDealerResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.buyStockNum = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                return null != e.buyStockNum && e.hasOwnProperty("buyStockNum") && !m.isInteger(e.buyStockNum) ? "buyStockNum: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.UpDealerResp) return e;
                var t = new f.humanboy_proto.UpDealerResp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                return null != e.buyStockNum && (t.buyStockNum = e.buyStockNum >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.buyStockNum = 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), null != e.buyStockNum && e.hasOwnProperty("buyStockNum") && (o.buyStockNum = e.buyStockNum), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.UpDealerResp"
            }, e
        }(), s.UpDealerNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.uid = 0, e.prototype.holdStockNum = 0, e.prototype.curCoin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).uint32(e.uid), null != e.holdStockNum && Object.hasOwnProperty.call(e, "holdStockNum") && t.uint32(16).uint32(e.holdStockNum), null != e.curCoin && Object.hasOwnProperty.call(e, "curCoin") && t.uint32(24).int64(e.curCoin), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.UpDealerNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.uid = e.uint32();
                            break;
                        case 2:
                            n.holdStockNum = e.uint32();
                            break;
                        case 3:
                            n.curCoin = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.uid && e.hasOwnProperty("uid") && !m.isInteger(e.uid) ? "uid: integer expected" : null != e.holdStockNum && e.hasOwnProperty("holdStockNum") && !m.isInteger(e.holdStockNum) ? "holdStockNum: integer expected" : null != e.curCoin && e.hasOwnProperty("curCoin") && !(m.isInteger(e.curCoin) || e.curCoin && m.isInteger(e.curCoin.low) && m.isInteger(e.curCoin.high)) ? "curCoin: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.UpDealerNotify) return e;
                var t = new f.humanboy_proto.UpDealerNotify;
                return null != e.uid && (t.uid = e.uid >>> 0), null != e.holdStockNum && (t.holdStockNum = e.holdStockNum >>> 0), null != e.curCoin && (m.Long ? (t.curCoin = m.Long.fromValue(e.curCoin)).unsigned = !1 : "string" == typeof e.curCoin ? t.curCoin = parseInt(e.curCoin, 10) : "number" == typeof e.curCoin ? t.curCoin = e.curCoin : "object" == typeof e.curCoin && (t.curCoin = new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults)
                    if (o.uid = 0, o.holdStockNum = 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.curCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.curCoin = t.longs === String ? "0" : 0;
                return null != e.uid && e.hasOwnProperty("uid") && (o.uid = e.uid), null != e.holdStockNum && e.hasOwnProperty("holdStockNum") && (o.holdStockNum = e.holdStockNum), null != e.curCoin && e.hasOwnProperty("curCoin") && ("number" == typeof e.curCoin ? o.curCoin = t.longs === String ? String(e.curCoin) : e.curCoin : o.curCoin = t.longs === String ? m.Long.prototype.toString.call(e.curCoin) : t.longs === Number ? new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber() : e.curCoin), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.UpDealerNotify"
            }, e
        }(), s.DownDealerReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.DownDealerReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.humanboy_proto.DownDealerReq ? e : new f.humanboy_proto.DownDealerReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.DownDealerReq"
            }, e
        }(), s.DownDealerResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.doNow = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.doNow && Object.hasOwnProperty.call(e, "doNow") && t.uint32(16).uint32(e.doNow), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.DownDealerResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.doNow = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                return null != e.doNow && e.hasOwnProperty("doNow") && !m.isInteger(e.doNow) ? "doNow: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.DownDealerResp) return e;
                var t = new f.humanboy_proto.DownDealerResp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                return null != e.doNow && (t.doNow = e.doNow >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.doNow = 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), null != e.doNow && e.hasOwnProperty("doNow") && (o.doNow = e.doNow), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.DownDealerResp"
            }, e
        }(), s.CancelWaitReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.CancelWaitReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.humanboy_proto.CancelWaitReq ? e : new f.humanboy_proto.CancelWaitReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.CancelWaitReq"
            }, e
        }(), s.CancelWaitResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.CancelWaitResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.CancelWaitResp) return e;
                var t = new f.humanboy_proto.CancelWaitResp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.CancelWaitResp"
            }, e
        }(), s.DownDealerNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.reason = 0, e.prototype.uid = 0, e.prototype.curCoin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.holdStockNum = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.reason && Object.hasOwnProperty.call(e, "reason") && t.uint32(8).int32(e.reason), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(16).uint32(e.uid), null != e.curCoin && Object.hasOwnProperty.call(e, "curCoin") && t.uint32(24).int64(e.curCoin), null != e.holdStockNum && Object.hasOwnProperty.call(e, "holdStockNum") && t.uint32(32).uint32(e.holdStockNum), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.DownDealerNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.reason = e.int32();
                            break;
                        case 2:
                            n.uid = e.uint32();
                            break;
                        case 3:
                            n.curCoin = e.int64();
                            break;
                        case 4:
                            n.holdStockNum = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.reason && e.hasOwnProperty("reason")) switch (e.reason) {
                    default:
                        return "reason: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                }
                return null != e.uid && e.hasOwnProperty("uid") && !m.isInteger(e.uid) ? "uid: integer expected" : null != e.curCoin && e.hasOwnProperty("curCoin") && !(m.isInteger(e.curCoin) || e.curCoin && m.isInteger(e.curCoin.low) && m.isInteger(e.curCoin.high)) ? "curCoin: integer|Long expected" : null != e.holdStockNum && e.hasOwnProperty("holdStockNum") && !m.isInteger(e.holdStockNum) ? "holdStockNum: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.DownDealerNotify) return e;
                var t = new f.humanboy_proto.DownDealerNotify;
                switch (e.reason) {
                    default:
                        if ("number" == typeof e.reason) {
                            t.reason = e.reason;
                            break
                        }
                        break;
                    case "DownDummy":
                    case 0:
                        t.reason = 0;
                        break;
                    case "NoMoney":
                    case 1:
                        t.reason = 1;
                        break;
                    case "LongTime":
                    case 2:
                        t.reason = 2;
                        break;
                    case "Leave":
                    case 3:
                        t.reason = 3;
                        break;
                    case "Offline":
                    case 4:
                        t.reason = 4
                }
                return null != e.uid && (t.uid = e.uid >>> 0), null != e.curCoin && (m.Long ? (t.curCoin = m.Long.fromValue(e.curCoin)).unsigned = !1 : "string" == typeof e.curCoin ? t.curCoin = parseInt(e.curCoin, 10) : "number" == typeof e.curCoin ? t.curCoin = e.curCoin : "object" == typeof e.curCoin && (t.curCoin = new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber())), null != e.holdStockNum && (t.holdStockNum = e.holdStockNum >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.reason = t.enums === String ? "DownDummy" : 0, o.uid = 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.curCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.curCoin = t.longs === String ? "0" : 0;
                    o.holdStockNum = 0
                }
                return null != e.reason && e.hasOwnProperty("reason") && (o.reason = t.enums === String ? void 0 === f.humanboy_proto.DownDealerReason[e.reason] ? e.reason : f.humanboy_proto.DownDealerReason[e.reason] : e.reason), null != e.uid && e.hasOwnProperty("uid") && (o.uid = e.uid), null != e.curCoin && e.hasOwnProperty("curCoin") && ("number" == typeof e.curCoin ? o.curCoin = t.longs === String ? String(e.curCoin) : e.curCoin : o.curCoin = t.longs === String ? m.Long.prototype.toString.call(e.curCoin) : t.longs === Number ? new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber() : e.curCoin), null != e.holdStockNum && e.hasOwnProperty("holdStockNum") && (o.holdStockNum = e.holdStockNum), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.DownDealerNotify"
            }, e
        }(), s.DealerListReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.DealerListReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.humanboy_proto.DealerListReq ? e : new f.humanboy_proto.DealerListReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.DealerListReq"
            }, e
        }(), s.DealerListResp = function() {
            function e(e) {
                if (this.waitList = [], this.dealerList = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.waitList = m.emptyArray, e.prototype.dealerList = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.waitList && e.waitList.length)
                    for (var o = 0; o < e.waitList.length; ++o) f.humanboy_proto.DealerPlayerInfo.encode(e.waitList[o], t.uint32(18).fork()).ldelim();
                if (null != e.dealerList && e.dealerList.length)
                    for (o = 0; o < e.dealerList.length; ++o) f.humanboy_proto.DealerPlayerInfo.encode(e.dealerList[o], t.uint32(26).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.DealerListResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.waitList && n.waitList.length || (n.waitList = []), n.waitList.push(f.humanboy_proto.DealerPlayerInfo.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.dealerList && n.dealerList.length || (n.dealerList = []), n.dealerList.push(f.humanboy_proto.DealerPlayerInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                if (null != e.waitList && e.hasOwnProperty("waitList")) {
                    if (!Array.isArray(e.waitList)) return "waitList: array expected";
                    for (var t = 0; t < e.waitList.length; ++t)
                        if (o = f.humanboy_proto.DealerPlayerInfo.verify(e.waitList[t])) return "waitList." + o
                }
                if (null != e.dealerList && e.hasOwnProperty("dealerList")) {
                    if (!Array.isArray(e.dealerList)) return "dealerList: array expected";
                    for (t = 0; t < e.dealerList.length; ++t) {
                        var o;
                        if (o = f.humanboy_proto.DealerPlayerInfo.verify(e.dealerList[t])) return "dealerList." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.DealerListResp) return e;
                var t = new f.humanboy_proto.DealerListResp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                if (e.waitList) {
                    if (!Array.isArray(e.waitList)) throw TypeError(".humanboy_proto.DealerListResp.waitList: array expected");
                    t.waitList = [];
                    for (var o = 0; o < e.waitList.length; ++o) {
                        if ("object" != typeof e.waitList[o]) throw TypeError(".humanboy_proto.DealerListResp.waitList: object expected");
                        t.waitList[o] = f.humanboy_proto.DealerPlayerInfo.fromObject(e.waitList[o])
                    }
                }
                if (e.dealerList) {
                    if (!Array.isArray(e.dealerList)) throw TypeError(".humanboy_proto.DealerListResp.dealerList: array expected");
                    for (t.dealerList = [], o = 0; o < e.dealerList.length; ++o) {
                        if ("object" != typeof e.dealerList[o]) throw TypeError(".humanboy_proto.DealerListResp.dealerList: object expected");
                        t.dealerList[o] = f.humanboy_proto.DealerPlayerInfo.fromObject(e.dealerList[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.waitList = [], o.dealerList = []), t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), e.waitList && e.waitList.length) {
                    o.waitList = [];
                    for (var n = 0; n < e.waitList.length; ++n) o.waitList[n] = f.humanboy_proto.DealerPlayerInfo.toObject(e.waitList[n], t)
                }
                if (e.dealerList && e.dealerList.length)
                    for (o.dealerList = [], n = 0; n < e.dealerList.length; ++n) o.dealerList[n] = f.humanboy_proto.DealerPlayerInfo.toObject(e.dealerList[n], t);
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.DealerListResp"
            }, e
        }(), s.DealerPlayerInfo = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.uid = 0, e.prototype.head = "", e.prototype.name = "", e.prototype.curCoin = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.stockNum = 0, e.prototype.beDealerNum = 0, e.prototype.stockCoin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.winningCoin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.recentlyWinCoin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).uint32(e.uid), null != e.head && Object.hasOwnProperty.call(e, "head") && t.uint32(18).string(e.head), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(26).string(e.name), null != e.curCoin && Object.hasOwnProperty.call(e, "curCoin") && t.uint32(32).uint64(e.curCoin), null != e.stockNum && Object.hasOwnProperty.call(e, "stockNum") && t.uint32(40).uint32(e.stockNum), null != e.beDealerNum && Object.hasOwnProperty.call(e, "beDealerNum") && t.uint32(48).uint32(e.beDealerNum), null != e.stockCoin && Object.hasOwnProperty.call(e, "stockCoin") && t.uint32(56).int64(e.stockCoin), null != e.winningCoin && Object.hasOwnProperty.call(e, "winningCoin") && t.uint32(64).int64(e.winningCoin), null != e.recentlyWinCoin && Object.hasOwnProperty.call(e, "recentlyWinCoin") && t.uint32(72).int64(e.recentlyWinCoin), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.DealerPlayerInfo; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.uid = e.uint32();
                            break;
                        case 2:
                            n.head = e.string();
                            break;
                        case 3:
                            n.name = e.string();
                            break;
                        case 4:
                            n.curCoin = e.uint64();
                            break;
                        case 5:
                            n.stockNum = e.uint32();
                            break;
                        case 6:
                            n.beDealerNum = e.uint32();
                            break;
                        case 7:
                            n.stockCoin = e.int64();
                            break;
                        case 8:
                            n.winningCoin = e.int64();
                            break;
                        case 9:
                            n.recentlyWinCoin = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.uid && e.hasOwnProperty("uid") && !m.isInteger(e.uid) ? "uid: integer expected" : null != e.head && e.hasOwnProperty("head") && !m.isString(e.head) ? "head: string expected" : null != e.name && e.hasOwnProperty("name") && !m.isString(e.name) ? "name: string expected" : null != e.curCoin && e.hasOwnProperty("curCoin") && !(m.isInteger(e.curCoin) || e.curCoin && m.isInteger(e.curCoin.low) && m.isInteger(e.curCoin.high)) ? "curCoin: integer|Long expected" : null != e.stockNum && e.hasOwnProperty("stockNum") && !m.isInteger(e.stockNum) ? "stockNum: integer expected" : null != e.beDealerNum && e.hasOwnProperty("beDealerNum") && !m.isInteger(e.beDealerNum) ? "beDealerNum: integer expected" : null != e.stockCoin && e.hasOwnProperty("stockCoin") && !(m.isInteger(e.stockCoin) || e.stockCoin && m.isInteger(e.stockCoin.low) && m.isInteger(e.stockCoin.high)) ? "stockCoin: integer|Long expected" : null != e.winningCoin && e.hasOwnProperty("winningCoin") && !(m.isInteger(e.winningCoin) || e.winningCoin && m.isInteger(e.winningCoin.low) && m.isInteger(e.winningCoin.high)) ? "winningCoin: integer|Long expected" : null != e.recentlyWinCoin && e.hasOwnProperty("recentlyWinCoin") && !(m.isInteger(e.recentlyWinCoin) || e.recentlyWinCoin && m.isInteger(e.recentlyWinCoin.low) && m.isInteger(e.recentlyWinCoin.high)) ? "recentlyWinCoin: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.DealerPlayerInfo) return e;
                var t = new f.humanboy_proto.DealerPlayerInfo;
                return null != e.uid && (t.uid = e.uid >>> 0), null != e.head && (t.head = String(e.head)), null != e.name && (t.name = String(e.name)), null != e.curCoin && (m.Long ? (t.curCoin = m.Long.fromValue(e.curCoin)).unsigned = !0 : "string" == typeof e.curCoin ? t.curCoin = parseInt(e.curCoin, 10) : "number" == typeof e.curCoin ? t.curCoin = e.curCoin : "object" == typeof e.curCoin && (t.curCoin = new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber(!0))), null != e.stockNum && (t.stockNum = e.stockNum >>> 0), null != e.beDealerNum && (t.beDealerNum = e.beDealerNum >>> 0), null != e.stockCoin && (m.Long ? (t.stockCoin = m.Long.fromValue(e.stockCoin)).unsigned = !1 : "string" == typeof e.stockCoin ? t.stockCoin = parseInt(e.stockCoin, 10) : "number" == typeof e.stockCoin ? t.stockCoin = e.stockCoin : "object" == typeof e.stockCoin && (t.stockCoin = new m.LongBits(e.stockCoin.low >>> 0, e.stockCoin.high >>> 0).toNumber())), null != e.winningCoin && (m.Long ? (t.winningCoin = m.Long.fromValue(e.winningCoin)).unsigned = !1 : "string" == typeof e.winningCoin ? t.winningCoin = parseInt(e.winningCoin, 10) : "number" == typeof e.winningCoin ? t.winningCoin = e.winningCoin : "object" == typeof e.winningCoin && (t.winningCoin = new m.LongBits(e.winningCoin.low >>> 0, e.winningCoin.high >>> 0).toNumber())), null != e.recentlyWinCoin && (m.Long ? (t.recentlyWinCoin = m.Long.fromValue(e.recentlyWinCoin)).unsigned = !1 : "string" == typeof e.recentlyWinCoin ? t.recentlyWinCoin = parseInt(e.recentlyWinCoin, 10) : "number" == typeof e.recentlyWinCoin ? t.recentlyWinCoin = e.recentlyWinCoin : "object" == typeof e.recentlyWinCoin && (t.recentlyWinCoin = new m.LongBits(e.recentlyWinCoin.low >>> 0, e.recentlyWinCoin.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.uid = 0, o.head = "", o.name = "", m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.curCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.curCoin = t.longs === String ? "0" : 0;
                    o.stockNum = 0, o.beDealerNum = 0, m.Long ? (n = new m.Long(0, 0, !1), o.stockCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.stockCoin = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !1), o.winningCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.winningCoin = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !1), o.recentlyWinCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.recentlyWinCoin = t.longs === String ? "0" : 0
                }
                return null != e.uid && e.hasOwnProperty("uid") && (o.uid = e.uid), null != e.head && e.hasOwnProperty("head") && (o.head = e.head), null != e.name && e.hasOwnProperty("name") && (o.name = e.name), null != e.curCoin && e.hasOwnProperty("curCoin") && ("number" == typeof e.curCoin ? o.curCoin = t.longs === String ? String(e.curCoin) : e.curCoin : o.curCoin = t.longs === String ? m.Long.prototype.toString.call(e.curCoin) : t.longs === Number ? new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber(!0) : e.curCoin), null != e.stockNum && e.hasOwnProperty("stockNum") && (o.stockNum = e.stockNum), null != e.beDealerNum && e.hasOwnProperty("beDealerNum") && (o.beDealerNum = e.beDealerNum), null != e.stockCoin && e.hasOwnProperty("stockCoin") && ("number" == typeof e.stockCoin ? o.stockCoin = t.longs === String ? String(e.stockCoin) : e.stockCoin : o.stockCoin = t.longs === String ? m.Long.prototype.toString.call(e.stockCoin) : t.longs === Number ? new m.LongBits(e.stockCoin.low >>> 0, e.stockCoin.high >>> 0).toNumber() : e.stockCoin), null != e.winningCoin && e.hasOwnProperty("winningCoin") && ("number" == typeof e.winningCoin ? o.winningCoin = t.longs === String ? String(e.winningCoin) : e.winningCoin : o.winningCoin = t.longs === String ? m.Long.prototype.toString.call(e.winningCoin) : t.longs === Number ? new m.LongBits(e.winningCoin.low >>> 0, e.winningCoin.high >>> 0).toNumber() : e.winningCoin), null != e.recentlyWinCoin && e.hasOwnProperty("recentlyWinCoin") && ("number" == typeof e.recentlyWinCoin ? o.recentlyWinCoin = t.longs === String ? String(e.recentlyWinCoin) : e.recentlyWinCoin : o.recentlyWinCoin = t.longs === String ? m.Long.prototype.toString.call(e.recentlyWinCoin) : t.longs === Number ? new m.LongBits(e.recentlyWinCoin.low >>> 0, e.recentlyWinCoin.high >>> 0).toNumber() : e.recentlyWinCoin), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.DealerPlayerInfo"
            }, e
        }(), s.JackpotDataReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.roomType = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.roomType && Object.hasOwnProperty.call(e, "roomType") && t.uint32(8).uint32(e.roomType), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.JackpotDataReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.roomType = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomType && e.hasOwnProperty("roomType") && !m.isInteger(e.roomType) ? "roomType: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.JackpotDataReq) return e;
                var t = new f.humanboy_proto.JackpotDataReq;
                return null != e.roomType && (t.roomType = e.roomType >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.roomType = 0), null != e.roomType && e.hasOwnProperty("roomType") && (o.roomType = e.roomType), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.JackpotDataReq"
            }, e
        }(), s.JackpotDataResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.data = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.data && Object.hasOwnProperty.call(e, "data") && f.humanboy_proto.JackpotDataInfo.encode(e.data, t.uint32(18).fork()).ldelim(), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.JackpotDataResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.data = f.humanboy_proto.JackpotDataInfo.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                if (null != e.data && e.hasOwnProperty("data")) {
                    var t = f.humanboy_proto.JackpotDataInfo.verify(e.data);
                    if (t) return "data." + t
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.JackpotDataResp) return e;
                var t = new f.humanboy_proto.JackpotDataResp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                if (null != e.data) {
                    if ("object" != typeof e.data) throw TypeError(".humanboy_proto.JackpotDataResp.data: object expected");
                    t.data = f.humanboy_proto.JackpotDataInfo.fromObject(e.data)
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.data = null), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), null != e.data && e.hasOwnProperty("data") && (o.data = f.humanboy_proto.JackpotDataInfo.toObject(e.data, t)), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.JackpotDataResp"
            }, e
        }(), s.JackpotDataInfo = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.leftAmount = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.huangTongPer = 0, e.prototype.siTiaoPer = 0, e.prototype.tongHuaShunPer = 0, e.prototype.roomType = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.leftAmount && Object.hasOwnProperty.call(e, "leftAmount") && t.uint32(8).uint64(e.leftAmount), null != e.huangTongPer && Object.hasOwnProperty.call(e, "huangTongPer") && t.uint32(16).uint32(e.huangTongPer), null != e.siTiaoPer && Object.hasOwnProperty.call(e, "siTiaoPer") && t.uint32(24).uint32(e.siTiaoPer), null != e.tongHuaShunPer && Object.hasOwnProperty.call(e, "tongHuaShunPer") && t.uint32(32).uint32(e.tongHuaShunPer), null != e.roomType && Object.hasOwnProperty.call(e, "roomType") && t.uint32(40).uint32(e.roomType), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.JackpotDataInfo; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.leftAmount = e.uint64();
                            break;
                        case 2:
                            n.huangTongPer = e.uint32();
                            break;
                        case 3:
                            n.siTiaoPer = e.uint32();
                            break;
                        case 4:
                            n.tongHuaShunPer = e.uint32();
                            break;
                        case 5:
                            n.roomType = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.leftAmount && e.hasOwnProperty("leftAmount") && !(m.isInteger(e.leftAmount) || e.leftAmount && m.isInteger(e.leftAmount.low) && m.isInteger(e.leftAmount.high)) ? "leftAmount: integer|Long expected" : null != e.huangTongPer && e.hasOwnProperty("huangTongPer") && !m.isInteger(e.huangTongPer) ? "huangTongPer: integer expected" : null != e.siTiaoPer && e.hasOwnProperty("siTiaoPer") && !m.isInteger(e.siTiaoPer) ? "siTiaoPer: integer expected" : null != e.tongHuaShunPer && e.hasOwnProperty("tongHuaShunPer") && !m.isInteger(e.tongHuaShunPer) ? "tongHuaShunPer: integer expected" : null != e.roomType && e.hasOwnProperty("roomType") && !m.isInteger(e.roomType) ? "roomType: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.JackpotDataInfo) return e;
                var t = new f.humanboy_proto.JackpotDataInfo;
                return null != e.leftAmount && (m.Long ? (t.leftAmount = m.Long.fromValue(e.leftAmount)).unsigned = !0 : "string" == typeof e.leftAmount ? t.leftAmount = parseInt(e.leftAmount, 10) : "number" == typeof e.leftAmount ? t.leftAmount = e.leftAmount : "object" == typeof e.leftAmount && (t.leftAmount = new m.LongBits(e.leftAmount.low >>> 0, e.leftAmount.high >>> 0).toNumber(!0))), null != e.huangTongPer && (t.huangTongPer = e.huangTongPer >>> 0), null != e.siTiaoPer && (t.siTiaoPer = e.siTiaoPer >>> 0), null != e.tongHuaShunPer && (t.tongHuaShunPer = e.tongHuaShunPer >>> 0), null != e.roomType && (t.roomType = e.roomType >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.leftAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.leftAmount = t.longs === String ? "0" : 0;
                    o.huangTongPer = 0, o.siTiaoPer = 0, o.tongHuaShunPer = 0, o.roomType = 0
                }
                return null != e.leftAmount && e.hasOwnProperty("leftAmount") && ("number" == typeof e.leftAmount ? o.leftAmount = t.longs === String ? String(e.leftAmount) : e.leftAmount : o.leftAmount = t.longs === String ? m.Long.prototype.toString.call(e.leftAmount) : t.longs === Number ? new m.LongBits(e.leftAmount.low >>> 0, e.leftAmount.high >>> 0).toNumber(!0) : e.leftAmount), null != e.huangTongPer && e.hasOwnProperty("huangTongPer") && (o.huangTongPer = e.huangTongPer), null != e.siTiaoPer && e.hasOwnProperty("siTiaoPer") && (o.siTiaoPer = e.siTiaoPer), null != e.tongHuaShunPer && e.hasOwnProperty("tongHuaShunPer") && (o.tongHuaShunPer = e.tongHuaShunPer), null != e.roomType && e.hasOwnProperty("roomType") && (o.roomType = e.roomType), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.JackpotDataInfo"
            }, e
        }(), s.JackpotAwardListReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.roomType = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.roomType && Object.hasOwnProperty.call(e, "roomType") && t.uint32(8).uint32(e.roomType), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.JackpotAwardListReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.roomType = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomType && e.hasOwnProperty("roomType") && !m.isInteger(e.roomType) ? "roomType: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.JackpotAwardListReq) return e;
                var t = new f.humanboy_proto.JackpotAwardListReq;
                return null != e.roomType && (t.roomType = e.roomType >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.roomType = 0), null != e.roomType && e.hasOwnProperty("roomType") && (o.roomType = e.roomType), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.JackpotAwardListReq"
            }, e
        }(), s.JackpotAwardListResp = function() {
            function e(e) {
                if (this.lastData = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.luckyOne = null, e.prototype.lastData = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.luckyOne && Object.hasOwnProperty.call(e, "luckyOne") && f.humanboy_proto.AwardData.encode(e.luckyOne, t.uint32(18).fork()).ldelim(), null != e.lastData && e.lastData.length)
                    for (var o = 0; o < e.lastData.length; ++o) f.humanboy_proto.AwardData.encode(e.lastData[o], t.uint32(26).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.JackpotAwardListResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.luckyOne = f.humanboy_proto.AwardData.decode(e, e.uint32());
                            break;
                        case 3:
                            n.lastData && n.lastData.length || (n.lastData = []), n.lastData.push(f.humanboy_proto.AwardData.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                if (null != e.luckyOne && e.hasOwnProperty("luckyOne") && (o = f.humanboy_proto.AwardData.verify(e.luckyOne))) return "luckyOne." + o;
                if (null != e.lastData && e.hasOwnProperty("lastData")) {
                    if (!Array.isArray(e.lastData)) return "lastData: array expected";
                    for (var t = 0; t < e.lastData.length; ++t) {
                        var o;
                        if (o = f.humanboy_proto.AwardData.verify(e.lastData[t])) return "lastData." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.JackpotAwardListResp) return e;
                var t = new f.humanboy_proto.JackpotAwardListResp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                if (null != e.luckyOne) {
                    if ("object" != typeof e.luckyOne) throw TypeError(".humanboy_proto.JackpotAwardListResp.luckyOne: object expected");
                    t.luckyOne = f.humanboy_proto.AwardData.fromObject(e.luckyOne)
                }
                if (e.lastData) {
                    if (!Array.isArray(e.lastData)) throw TypeError(".humanboy_proto.JackpotAwardListResp.lastData: array expected");
                    t.lastData = [];
                    for (var o = 0; o < e.lastData.length; ++o) {
                        if ("object" != typeof e.lastData[o]) throw TypeError(".humanboy_proto.JackpotAwardListResp.lastData: object expected");
                        t.lastData[o] = f.humanboy_proto.AwardData.fromObject(e.lastData[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.lastData = []), t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.luckyOne = null), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), null != e.luckyOne && e.hasOwnProperty("luckyOne") && (o.luckyOne = f.humanboy_proto.AwardData.toObject(e.luckyOne, t)), e.lastData && e.lastData.length) {
                    o.lastData = [];
                    for (var n = 0; n < e.lastData.length; ++n) o.lastData[n] = f.humanboy_proto.AwardData.toObject(e.lastData[n], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.JackpotAwardListResp"
            }, e
        }(), s.AwardData = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.name = "", e.prototype.handLevel = 0, e.prototype.amount = 0, e.prototype.timeStamp = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(10).string(e.name), null != e.handLevel && Object.hasOwnProperty.call(e, "handLevel") && t.uint32(16).int32(e.handLevel), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(24).uint32(e.amount), null != e.timeStamp && Object.hasOwnProperty.call(e, "timeStamp") && t.uint32(32).uint64(e.timeStamp), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.AwardData; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.name = e.string();
                            break;
                        case 2:
                            n.handLevel = e.int32();
                            break;
                        case 3:
                            n.amount = e.uint32();
                            break;
                        case 4:
                            n.timeStamp = e.uint64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.name && e.hasOwnProperty("name") && !m.isString(e.name)) return "name: string expected";
                if (null != e.handLevel && e.hasOwnProperty("handLevel")) switch (e.handLevel) {
                    default:
                        return "handLevel: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                }
                return null != e.amount && e.hasOwnProperty("amount") && !m.isInteger(e.amount) ? "amount: integer expected" : null != e.timeStamp && e.hasOwnProperty("timeStamp") && !(m.isInteger(e.timeStamp) || e.timeStamp && m.isInteger(e.timeStamp.low) && m.isInteger(e.timeStamp.high)) ? "timeStamp: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.AwardData) return e;
                var t = new f.humanboy_proto.AwardData;
                switch (null != e.name && (t.name = String(e.name)), e.handLevel) {
                    default:
                        if ("number" == typeof e.handLevel) {
                            t.handLevel = e.handLevel;
                            break
                        }
                        break;
                    case "CardResult_Dummy":
                    case 0:
                        t.handLevel = 0;
                        break;
                    case "GAO_PAI":
                    case 1:
                        t.handLevel = 1;
                        break;
                    case "YI_DUI":
                    case 2:
                        t.handLevel = 2;
                        break;
                    case "LIAN_DUI":
                    case 3:
                        t.handLevel = 3;
                        break;
                    case "SAN_TIAO":
                    case 4:
                        t.handLevel = 4;
                        break;
                    case "SHUN_ZI":
                    case 5:
                        t.handLevel = 5;
                        break;
                    case "TONG_HUA":
                    case 6:
                        t.handLevel = 6;
                        break;
                    case "HU_LU":
                    case 7:
                        t.handLevel = 7;
                        break;
                    case "SI_TIAO":
                    case 8:
                        t.handLevel = 8;
                        break;
                    case "TONG_HUA_SHUN":
                    case 9:
                        t.handLevel = 9;
                        break;
                    case "HUANG_TONG":
                    case 10:
                        t.handLevel = 10
                }
                return null != e.amount && (t.amount = e.amount >>> 0), null != e.timeStamp && (m.Long ? (t.timeStamp = m.Long.fromValue(e.timeStamp)).unsigned = !0 : "string" == typeof e.timeStamp ? t.timeStamp = parseInt(e.timeStamp, 10) : "number" == typeof e.timeStamp ? t.timeStamp = e.timeStamp : "object" == typeof e.timeStamp && (t.timeStamp = new m.LongBits(e.timeStamp.low >>> 0, e.timeStamp.high >>> 0).toNumber(!0))), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults)
                    if (o.name = "", o.handLevel = t.enums === String ? "CardResult_Dummy" : 0, o.amount = 0, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.timeStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.timeStamp = t.longs === String ? "0" : 0;
                return null != e.name && e.hasOwnProperty("name") && (o.name = e.name), null != e.handLevel && e.hasOwnProperty("handLevel") && (o.handLevel = t.enums === String ? void 0 === f.humanboy_proto.CardResult[e.handLevel] ? e.handLevel : f.humanboy_proto.CardResult[e.handLevel] : e.handLevel), null != e.amount && e.hasOwnProperty("amount") && (o.amount = e.amount), null != e.timeStamp && e.hasOwnProperty("timeStamp") && ("number" == typeof e.timeStamp ? o.timeStamp = t.longs === String ? String(e.timeStamp) : e.timeStamp : o.timeStamp = t.longs === String ? m.Long.prototype.toString.call(e.timeStamp) : t.longs === Number ? new m.LongBits(e.timeStamp.low >>> 0, e.timeStamp.high >>> 0).toNumber(!0) : e.timeStamp), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.AwardData"
            }, e
        }(), s.HitJackpotAward = function() {
            function e(e) {
                if (this.hitJackpotAwardData = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.option = 0, e.prototype.hitJackpotAwardData = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(8).int32(e.option), null != e.hitJackpotAwardData && e.hitJackpotAwardData.length)
                    for (var o = 0; o < e.hitJackpotAwardData.length; ++o) f.humanboy_proto.HitJackpotAwardData.encode(e.hitJackpotAwardData[o], t.uint32(18).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.HitJackpotAward; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.option = e.int32();
                            break;
                        case 2:
                            n.hitJackpotAwardData && n.hitJackpotAwardData.length || (n.hitJackpotAwardData = []), n.hitJackpotAwardData.push(f.humanboy_proto.HitJackpotAwardData.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.option && e.hasOwnProperty("option")) switch (e.option) {
                    default:
                        return "option: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 106:
                }
                if (null != e.hitJackpotAwardData && e.hasOwnProperty("hitJackpotAwardData")) {
                    if (!Array.isArray(e.hitJackpotAwardData)) return "hitJackpotAwardData: array expected";
                    for (var t = 0; t < e.hitJackpotAwardData.length; ++t) {
                        var o = f.humanboy_proto.HitJackpotAwardData.verify(e.hitJackpotAwardData[t]);
                        if (o) return "hitJackpotAwardData." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.HitJackpotAward) return e;
                var t = new f.humanboy_proto.HitJackpotAward;
                switch (e.option) {
                    default:
                        if ("number" == typeof e.option) {
                            t.option = e.option;
                            break
                        }
                        break;
                    case "BetZoneOption_DUMMY":
                    case 0:
                        t.option = 0;
                        break;
                    case "HOST":
                    case 1:
                        t.option = 1;
                        break;
                    case "POS1":
                    case 2:
                        t.option = 2;
                        break;
                    case "POS2":
                    case 3:
                        t.option = 3;
                        break;
                    case "POS3":
                    case 4:
                        t.option = 4;
                        break;
                    case "POS4":
                    case 5:
                        t.option = 5;
                        break;
                    case "POS_LUCK":
                    case 100:
                        t.option = 100;
                        break;
                    case "POS_LUCK_1":
                    case 101:
                        t.option = 101;
                        break;
                    case "POS_LUCK_2":
                    case 102:
                        t.option = 102;
                        break;
                    case "POS_LUCK_3":
                    case 103:
                        t.option = 103;
                        break;
                    case "POS_LUCK_4":
                    case 104:
                        t.option = 104;
                        break;
                    case "POS_LUCK_5":
                    case 105:
                        t.option = 105;
                        break;
                    case "POS_LUCK_6":
                    case 106:
                        t.option = 106
                }
                if (e.hitJackpotAwardData) {
                    if (!Array.isArray(e.hitJackpotAwardData)) throw TypeError(".humanboy_proto.HitJackpotAward.hitJackpotAwardData: array expected");
                    t.hitJackpotAwardData = [];
                    for (var o = 0; o < e.hitJackpotAwardData.length; ++o) {
                        if ("object" != typeof e.hitJackpotAwardData[o]) throw TypeError(".humanboy_proto.HitJackpotAward.hitJackpotAwardData: object expected");
                        t.hitJackpotAwardData[o] = f.humanboy_proto.HitJackpotAwardData.fromObject(e.hitJackpotAwardData[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.hitJackpotAwardData = []), t.defaults && (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0), null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.humanboy_proto.BetZoneOption[e.option] ? e.option : f.humanboy_proto.BetZoneOption[e.option] : e.option), e.hitJackpotAwardData && e.hitJackpotAwardData.length) {
                    o.hitJackpotAwardData = [];
                    for (var n = 0; n < e.hitJackpotAwardData.length; ++n) o.hitJackpotAwardData[n] = f.humanboy_proto.HitJackpotAwardData.toObject(e.hitJackpotAwardData[n], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.HitJackpotAward"
            }, e
        }(), s.HitJackpotAwardData = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.uid = 0, e.prototype.amount = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).uint32(e.uid), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(16).uint32(e.amount), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.HitJackpotAwardData; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.uid = e.uint32();
                            break;
                        case 2:
                            n.amount = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.uid && e.hasOwnProperty("uid") && !m.isInteger(e.uid) ? "uid: integer expected" : null != e.amount && e.hasOwnProperty("amount") && !m.isInteger(e.amount) ? "amount: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.HitJackpotAwardData) return e;
                var t = new f.humanboy_proto.HitJackpotAwardData;
                return null != e.uid && (t.uid = e.uid >>> 0), null != e.amount && (t.amount = e.amount >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.uid = 0, o.amount = 0), null != e.uid && e.hasOwnProperty("uid") && (o.uid = e.uid), null != e.amount && e.hasOwnProperty("amount") && (o.amount = e.amount), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.HitJackpotAwardData"
            }, e
        }(), s.GameWillStartNotify = function() {
            function e(e) {
                if (this.dealer = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.showMiddleUpDealerBtn = !1, e.prototype.surplusStockNum = 0, e.prototype.roundState = 0, e.prototype.leftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.nextRoundEndStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.dealer = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.showMiddleUpDealerBtn && Object.hasOwnProperty.call(e, "showMiddleUpDealerBtn") && t.uint32(8).bool(e.showMiddleUpDealerBtn), null != e.surplusStockNum && Object.hasOwnProperty.call(e, "surplusStockNum") && t.uint32(16).uint32(e.surplusStockNum), null != e.roundState && Object.hasOwnProperty.call(e, "roundState") && t.uint32(24).int32(e.roundState), null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(32).int64(e.leftSeconds), null != e.nextRoundEndStamp && Object.hasOwnProperty.call(e, "nextRoundEndStamp") && t.uint32(40).int64(e.nextRoundEndStamp), null != e.dealer && e.dealer.length)
                    for (var o = 0; o < e.dealer.length; ++o) f.humanboy_proto.DealerPlayerInfo.encode(e.dealer[o], t.uint32(50).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.GameWillStartNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.showMiddleUpDealerBtn = e.bool();
                            break;
                        case 2:
                            n.surplusStockNum = e.uint32();
                            break;
                        case 3:
                            n.roundState = e.int32();
                            break;
                        case 4:
                            n.leftSeconds = e.int64();
                            break;
                        case 5:
                            n.nextRoundEndStamp = e.int64();
                            break;
                        case 6:
                            n.dealer && n.dealer.length || (n.dealer = []), n.dealer.push(f.humanboy_proto.DealerPlayerInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.showMiddleUpDealerBtn && e.hasOwnProperty("showMiddleUpDealerBtn") && "boolean" != typeof e.showMiddleUpDealerBtn) return "showMiddleUpDealerBtn: boolean expected";
                if (null != e.surplusStockNum && e.hasOwnProperty("surplusStockNum") && !m.isInteger(e.surplusStockNum)) return "surplusStockNum: integer expected";
                if (null != e.roundState && e.hasOwnProperty("roundState")) switch (e.roundState) {
                    default:
                        return "roundState: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                }
                if (null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(m.isInteger(e.leftSeconds) || e.leftSeconds && m.isInteger(e.leftSeconds.low) && m.isInteger(e.leftSeconds.high))) return "leftSeconds: integer|Long expected";
                if (null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && !(m.isInteger(e.nextRoundEndStamp) || e.nextRoundEndStamp && m.isInteger(e.nextRoundEndStamp.low) && m.isInteger(e.nextRoundEndStamp.high))) return "nextRoundEndStamp: integer|Long expected";
                if (null != e.dealer && e.hasOwnProperty("dealer")) {
                    if (!Array.isArray(e.dealer)) return "dealer: array expected";
                    for (var t = 0; t < e.dealer.length; ++t) {
                        var o = f.humanboy_proto.DealerPlayerInfo.verify(e.dealer[t]);
                        if (o) return "dealer." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.GameWillStartNotify) return e;
                var t = new f.humanboy_proto.GameWillStartNotify;
                switch (null != e.showMiddleUpDealerBtn && (t.showMiddleUpDealerBtn = Boolean(e.showMiddleUpDealerBtn)), null != e.surplusStockNum && (t.surplusStockNum = e.surplusStockNum >>> 0), e.roundState) {
                    default:
                        if ("number" == typeof e.roundState) {
                            t.roundState = e.roundState;
                            break
                        }
                        break;
                    case "RoundState_DUMMY":
                    case 0:
                        t.roundState = 0;
                        break;
                    case "GAME_PENDING":
                    case 1:
                        t.roundState = 1;
                        break;
                    case "NEW_ROUND":
                    case 2:
                        t.roundState = 2;
                        break;
                    case "BET":
                    case 3:
                        t.roundState = 3;
                        break;
                    case "WAIT_NEXT_ROUND":
                    case 4:
                        t.roundState = 4;
                        break;
                    case "WAIT_NEXT_ROUND2":
                    case 5:
                        t.roundState = 5
                }
                if (null != e.leftSeconds && (m.Long ? (t.leftSeconds = m.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), null != e.nextRoundEndStamp && (m.Long ? (t.nextRoundEndStamp = m.Long.fromValue(e.nextRoundEndStamp)).unsigned = !1 : "string" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = parseInt(e.nextRoundEndStamp, 10) : "number" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = e.nextRoundEndStamp : "object" == typeof e.nextRoundEndStamp && (t.nextRoundEndStamp = new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber())), e.dealer) {
                    if (!Array.isArray(e.dealer)) throw TypeError(".humanboy_proto.GameWillStartNotify.dealer: array expected");
                    t.dealer = [];
                    for (var o = 0; o < e.dealer.length; ++o) {
                        if ("object" != typeof e.dealer[o]) throw TypeError(".humanboy_proto.GameWillStartNotify.dealer: object expected");
                        t.dealer[o] = f.humanboy_proto.DealerPlayerInfo.fromObject(e.dealer[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.dealer = []), t.defaults) {
                    if (o.showMiddleUpDealerBtn = !1, o.surplusStockNum = 0, o.roundState = t.enums === String ? "RoundState_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.leftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.leftSeconds = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !1), o.nextRoundEndStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.nextRoundEndStamp = t.longs === String ? "0" : 0
                }
                if (null != e.showMiddleUpDealerBtn && e.hasOwnProperty("showMiddleUpDealerBtn") && (o.showMiddleUpDealerBtn = e.showMiddleUpDealerBtn), null != e.surplusStockNum && e.hasOwnProperty("surplusStockNum") && (o.surplusStockNum = e.surplusStockNum), null != e.roundState && e.hasOwnProperty("roundState") && (o.roundState = t.enums === String ? void 0 === f.humanboy_proto.RoundState[e.roundState] ? e.roundState : f.humanboy_proto.RoundState[e.roundState] : e.roundState), null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? o.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : o.leftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && ("number" == typeof e.nextRoundEndStamp ? o.nextRoundEndStamp = t.longs === String ? String(e.nextRoundEndStamp) : e.nextRoundEndStamp : o.nextRoundEndStamp = t.longs === String ? m.Long.prototype.toString.call(e.nextRoundEndStamp) : t.longs === Number ? new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber() : e.nextRoundEndStamp), e.dealer && e.dealer.length) {
                    o.dealer = [];
                    for (var r = 0; r < e.dealer.length; ++r) o.dealer[r] = f.humanboy_proto.DealerPlayerInfo.toObject(e.dealer[r], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.GameWillStartNotify"
            }, e
        }(), s.KickDealerApplyNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.reason = 0, e.prototype.extension = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.reason && Object.hasOwnProperty.call(e, "reason") && t.uint32(8).int32(e.reason), null != e.extension && Object.hasOwnProperty.call(e, "extension") && t.uint32(18).string(e.extension), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.KickDealerApplyNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.reason = e.int32();
                            break;
                        case 2:
                            n.extension = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.reason && e.hasOwnProperty("reason")) switch (e.reason) {
                    default:
                        return "reason: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                }
                return null != e.extension && e.hasOwnProperty("extension") && !m.isString(e.extension) ? "extension: string expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.KickDealerApplyNotify) return e;
                var t = new f.humanboy_proto.KickDealerApplyNotify;
                switch (e.reason) {
                    default:
                        if ("number" == typeof e.reason) {
                            t.reason = e.reason;
                            break
                        }
                        break;
                    case "K_NULL":
                    case 0:
                        t.reason = 0;
                        break;
                    case "K_NoMoney":
                    case 1:
                        t.reason = 1;
                        break;
                    case "K_SUPPLY":
                    case 2:
                        t.reason = 2;
                        break;
                    case "K_OFFLINE":
                    case 3:
                        t.reason = 3;
                        break;
                    case "K_LEAVE":
                    case 4:
                        t.reason = 4
                }
                return null != e.extension && (t.extension = String(e.extension)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.reason = t.enums === String ? "K_NULL" : 0, o.extension = ""), null != e.reason && e.hasOwnProperty("reason") && (o.reason = t.enums === String ? void 0 === f.humanboy_proto.KickApplyDealerReason[e.reason] ? e.reason : f.humanboy_proto.KickApplyDealerReason[e.reason] : e.reason), null != e.extension && e.hasOwnProperty("extension") && (o.extension = e.extension), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.KickDealerApplyNotify"
            }, e
        }(), s.SetGameOptionReq = function() {
            function e(e) {
                if (this.betCoinOption = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.autoLevel = 0, e.prototype.betCoinOption = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.autoLevel && Object.hasOwnProperty.call(e, "autoLevel") && t.uint32(8).int32(e.autoLevel), null != e.betCoinOption && e.betCoinOption.length) {
                    t.uint32(18).fork();
                    for (var o = 0; o < e.betCoinOption.length; ++o) t.uint64(e.betCoinOption[o]);
                    t.ldelim()
                }
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.SetGameOptionReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.autoLevel = e.int32();
                            break;
                        case 2:
                            if (n.betCoinOption && n.betCoinOption.length || (n.betCoinOption = []), 2 == (7 & r))
                                for (var a = e.uint32() + e.pos; e.pos < a;) n.betCoinOption.push(e.uint64());
                            else n.betCoinOption.push(e.uint64());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.autoLevel && e.hasOwnProperty("autoLevel")) switch (e.autoLevel) {
                    default:
                        return "autoLevel: enum value expected";
                    case 0:
                    case 1:
                }
                if (null != e.betCoinOption && e.hasOwnProperty("betCoinOption")) {
                    if (!Array.isArray(e.betCoinOption)) return "betCoinOption: array expected";
                    for (var t = 0; t < e.betCoinOption.length; ++t)
                        if (!(m.isInteger(e.betCoinOption[t]) || e.betCoinOption[t] && m.isInteger(e.betCoinOption[t].low) && m.isInteger(e.betCoinOption[t].high))) return "betCoinOption: integer|Long[] expected"
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.SetGameOptionReq) return e;
                var t = new f.humanboy_proto.SetGameOptionReq;
                switch (e.autoLevel) {
                    default:
                        if ("number" == typeof e.autoLevel) {
                            t.autoLevel = e.autoLevel;
                            break
                        }
                        break;
                    case "Level_Normal":
                    case 0:
                        t.autoLevel = 0;
                        break;
                    case "Level_Advance":
                    case 1:
                        t.autoLevel = 1
                }
                if (e.betCoinOption) {
                    if (!Array.isArray(e.betCoinOption)) throw TypeError(".humanboy_proto.SetGameOptionReq.betCoinOption: array expected");
                    t.betCoinOption = [];
                    for (var o = 0; o < e.betCoinOption.length; ++o) m.Long ? (t.betCoinOption[o] = m.Long.fromValue(e.betCoinOption[o])).unsigned = !0 : "string" == typeof e.betCoinOption[o] ? t.betCoinOption[o] = parseInt(e.betCoinOption[o], 10) : "number" == typeof e.betCoinOption[o] ? t.betCoinOption[o] = e.betCoinOption[o] : "object" == typeof e.betCoinOption[o] && (t.betCoinOption[o] = new m.LongBits(e.betCoinOption[o].low >>> 0, e.betCoinOption[o].high >>> 0).toNumber(!0))
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.betCoinOption = []), t.defaults && (o.autoLevel = t.enums === String ? "Level_Normal" : 0), null != e.autoLevel && e.hasOwnProperty("autoLevel") && (o.autoLevel = t.enums === String ? void 0 === f.humanboy_proto.AutoBetLevel[e.autoLevel] ? e.autoLevel : f.humanboy_proto.AutoBetLevel[e.autoLevel] : e.autoLevel), e.betCoinOption && e.betCoinOption.length) {
                    o.betCoinOption = [];
                    for (var n = 0; n < e.betCoinOption.length; ++n) "number" == typeof e.betCoinOption[n] ? o.betCoinOption[n] = t.longs === String ? String(e.betCoinOption[n]) : e.betCoinOption[n] : o.betCoinOption[n] = t.longs === String ? m.Long.prototype.toString.call(e.betCoinOption[n]) : t.longs === Number ? new m.LongBits(e.betCoinOption[n].low >>> 0, e.betCoinOption[n].high >>> 0).toNumber(!0) : e.betCoinOption[n]
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.SetGameOptionReq"
            }, e
        }(), s.SetGameOptionResp = function() {
            function e(e) {
                if (this.betCoinOption = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.autoLevel = 0, e.prototype.betCoinOption = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.autoLevel && Object.hasOwnProperty.call(e, "autoLevel") && t.uint32(16).int32(e.autoLevel), null != e.betCoinOption && e.betCoinOption.length) {
                    t.uint32(26).fork();
                    for (var o = 0; o < e.betCoinOption.length; ++o) t.uint64(e.betCoinOption[o]);
                    t.ldelim()
                }
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.SetGameOptionResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.autoLevel = e.int32();
                            break;
                        case 3:
                            if (n.betCoinOption && n.betCoinOption.length || (n.betCoinOption = []), 2 == (7 & r))
                                for (var a = e.uint32() + e.pos; e.pos < a;) n.betCoinOption.push(e.uint64());
                            else n.betCoinOption.push(e.uint64());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                if (null != e.autoLevel && e.hasOwnProperty("autoLevel")) switch (e.autoLevel) {
                    default:
                        return "autoLevel: enum value expected";
                    case 0:
                    case 1:
                }
                if (null != e.betCoinOption && e.hasOwnProperty("betCoinOption")) {
                    if (!Array.isArray(e.betCoinOption)) return "betCoinOption: array expected";
                    for (var t = 0; t < e.betCoinOption.length; ++t)
                        if (!(m.isInteger(e.betCoinOption[t]) || e.betCoinOption[t] && m.isInteger(e.betCoinOption[t].low) && m.isInteger(e.betCoinOption[t].high))) return "betCoinOption: integer|Long[] expected"
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.SetGameOptionResp) return e;
                var t = new f.humanboy_proto.SetGameOptionResp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                switch (e.autoLevel) {
                    default:
                        if ("number" == typeof e.autoLevel) {
                            t.autoLevel = e.autoLevel;
                            break
                        }
                        break;
                    case "Level_Normal":
                    case 0:
                        t.autoLevel = 0;
                        break;
                    case "Level_Advance":
                    case 1:
                        t.autoLevel = 1
                }
                if (e.betCoinOption) {
                    if (!Array.isArray(e.betCoinOption)) throw TypeError(".humanboy_proto.SetGameOptionResp.betCoinOption: array expected");
                    t.betCoinOption = [];
                    for (var o = 0; o < e.betCoinOption.length; ++o) m.Long ? (t.betCoinOption[o] = m.Long.fromValue(e.betCoinOption[o])).unsigned = !0 : "string" == typeof e.betCoinOption[o] ? t.betCoinOption[o] = parseInt(e.betCoinOption[o], 10) : "number" == typeof e.betCoinOption[o] ? t.betCoinOption[o] = e.betCoinOption[o] : "object" == typeof e.betCoinOption[o] && (t.betCoinOption[o] = new m.LongBits(e.betCoinOption[o].low >>> 0, e.betCoinOption[o].high >>> 0).toNumber(!0))
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.betCoinOption = []), t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.autoLevel = t.enums === String ? "Level_Normal" : 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), null != e.autoLevel && e.hasOwnProperty("autoLevel") && (o.autoLevel = t.enums === String ? void 0 === f.humanboy_proto.AutoBetLevel[e.autoLevel] ? e.autoLevel : f.humanboy_proto.AutoBetLevel[e.autoLevel] : e.autoLevel), e.betCoinOption && e.betCoinOption.length) {
                    o.betCoinOption = [];
                    for (var n = 0; n < e.betCoinOption.length; ++n) "number" == typeof e.betCoinOption[n] ? o.betCoinOption[n] = t.longs === String ? String(e.betCoinOption[n]) : e.betCoinOption[n] : o.betCoinOption[n] = t.longs === String ? m.Long.prototype.toString.call(e.betCoinOption[n]) : t.longs === Number ? new m.LongBits(e.betCoinOption[n].low >>> 0, e.betCoinOption[n].high >>> 0).toNumber(!0) : e.betCoinOption[n]
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.SetGameOptionResp"
            }, e
        }(), s.SendExpressionReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.id = 0, e.prototype.toUid = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(8).int32(e.id), null != e.toUid && Object.hasOwnProperty.call(e, "toUid") && t.uint32(16).uint32(e.toUid), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.SendExpressionReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.id = e.int32();
                            break;
                        case 2:
                            n.toUid = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.id && e.hasOwnProperty("id") && !m.isInteger(e.id) ? "id: integer expected" : null != e.toUid && e.hasOwnProperty("toUid") && !m.isInteger(e.toUid) ? "toUid: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.SendExpressionReq) return e;
                var t = new f.humanboy_proto.SendExpressionReq;
                return null != e.id && (t.id = 0 | e.id), null != e.toUid && (t.toUid = e.toUid >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.id = 0, o.toUid = 0), null != e.id && e.hasOwnProperty("id") && (o.id = e.id), null != e.toUid && e.hasOwnProperty("toUid") && (o.toUid = e.toUid), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.SendExpressionReq"
            }, e
        }(), s.SendExpressionResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.coin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.coin && Object.hasOwnProperty.call(e, "coin") && t.uint32(16).int64(e.coin), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.SendExpressionResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.coin = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                return null != e.coin && e.hasOwnProperty("coin") && !(m.isInteger(e.coin) || e.coin && m.isInteger(e.coin.low) && m.isInteger(e.coin.high)) ? "coin: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.SendExpressionResp) return e;
                var t = new f.humanboy_proto.SendExpressionResp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                return null != e.coin && (m.Long ? (t.coin = m.Long.fromValue(e.coin)).unsigned = !1 : "string" == typeof e.coin ? t.coin = parseInt(e.coin, 10) : "number" == typeof e.coin ? t.coin = e.coin : "object" == typeof e.coin && (t.coin = new m.LongBits(e.coin.low >>> 0, e.coin.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults)
                    if (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.coin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.coin = t.longs === String ? "0" : 0;
                return null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), null != e.coin && e.hasOwnProperty("coin") && ("number" == typeof e.coin ? o.coin = t.longs === String ? String(e.coin) : e.coin : o.coin = t.longs === String ? m.Long.prototype.toString.call(e.coin) : t.longs === Number ? new m.LongBits(e.coin.low >>> 0, e.coin.high >>> 0).toNumber() : e.coin), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.SendExpressionResp"
            }, e
        }(), s.SendExpressionNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.uid = 0, e.prototype.toUid = 0, e.prototype.coin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).uint32(e.uid), null != e.toUid && Object.hasOwnProperty.call(e, "toUid") && t.uint32(16).uint32(e.toUid), null != e.coin && Object.hasOwnProperty.call(e, "coin") && t.uint32(24).int64(e.coin), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.SendExpressionNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.uid = e.uint32();
                            break;
                        case 2:
                            n.toUid = e.uint32();
                            break;
                        case 3:
                            n.coin = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.uid && e.hasOwnProperty("uid") && !m.isInteger(e.uid) ? "uid: integer expected" : null != e.toUid && e.hasOwnProperty("toUid") && !m.isInteger(e.toUid) ? "toUid: integer expected" : null != e.coin && e.hasOwnProperty("coin") && !(m.isInteger(e.coin) || e.coin && m.isInteger(e.coin.low) && m.isInteger(e.coin.high)) ? "coin: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.SendExpressionNotify) return e;
                var t = new f.humanboy_proto.SendExpressionNotify;
                return null != e.uid && (t.uid = e.uid >>> 0), null != e.toUid && (t.toUid = e.toUid >>> 0), null != e.coin && (m.Long ? (t.coin = m.Long.fromValue(e.coin)).unsigned = !1 : "string" == typeof e.coin ? t.coin = parseInt(e.coin, 10) : "number" == typeof e.coin ? t.coin = e.coin : "object" == typeof e.coin && (t.coin = new m.LongBits(e.coin.low >>> 0, e.coin.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults)
                    if (o.uid = 0, o.toUid = 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.coin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.coin = t.longs === String ? "0" : 0;
                return null != e.uid && e.hasOwnProperty("uid") && (o.uid = e.uid), null != e.toUid && e.hasOwnProperty("toUid") && (o.toUid = e.toUid), null != e.coin && e.hasOwnProperty("coin") && ("number" == typeof e.coin ? o.coin = t.longs === String ? String(e.coin) : e.coin : o.coin = t.longs === String ? m.Long.prototype.toString.call(e.coin) : t.longs === Number ? new m.LongBits(e.coin.low >>> 0, e.coin.high >>> 0).toNumber() : e.coin), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.SendExpressionNotify"
            }, e
        }(), s.AdvanceAutoBetReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.AdvanceAutoBetReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.humanboy_proto.AdvanceAutoBetReq ? e : new f.humanboy_proto.AdvanceAutoBetReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.AdvanceAutoBetReq"
            }, e
        }(), s.AdvanceAutoBetRsp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.usedAutoBetCount = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.usedAutoBetCount && Object.hasOwnProperty.call(e, "usedAutoBetCount") && t.uint32(16).int32(e.usedAutoBetCount), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.AdvanceAutoBetRsp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.usedAutoBetCount = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                return null != e.usedAutoBetCount && e.hasOwnProperty("usedAutoBetCount") && !m.isInteger(e.usedAutoBetCount) ? "usedAutoBetCount: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.AdvanceAutoBetRsp) return e;
                var t = new f.humanboy_proto.AdvanceAutoBetRsp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                return null != e.usedAutoBetCount && (t.usedAutoBetCount = 0 | e.usedAutoBetCount), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.usedAutoBetCount = 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), null != e.usedAutoBetCount && e.hasOwnProperty("usedAutoBetCount") && (o.usedAutoBetCount = e.usedAutoBetCount), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.AdvanceAutoBetRsp"
            }, e
        }(), s.CancelAdvanceAutoBetReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.CancelAdvanceAutoBetReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.humanboy_proto.CancelAdvanceAutoBetReq ? e : new f.humanboy_proto.CancelAdvanceAutoBetReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.CancelAdvanceAutoBetReq"
            }, e
        }(), s.CancelAdvanceAutoBetRsp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.is_manual = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.is_manual && Object.hasOwnProperty.call(e, "is_manual") && t.uint32(16).bool(e.is_manual), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.CancelAdvanceAutoBetRsp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.is_manual = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                return null != e.is_manual && e.hasOwnProperty("is_manual") && "boolean" != typeof e.is_manual ? "is_manual: boolean expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.CancelAdvanceAutoBetRsp) return e;
                var t = new f.humanboy_proto.CancelAdvanceAutoBetRsp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                return null != e.is_manual && (t.is_manual = Boolean(e.is_manual)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.is_manual = !1), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), null != e.is_manual && e.hasOwnProperty("is_manual") && (o.is_manual = e.is_manual), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.CancelAdvanceAutoBetRsp"
            }, e
        }(), s.AdvanceAutoBetSetReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.count = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.count && Object.hasOwnProperty.call(e, "count") && t.uint32(8).int32(e.count), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.AdvanceAutoBetSetReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.count = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.count && e.hasOwnProperty("count") && !m.isInteger(e.count) ? "count: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.AdvanceAutoBetSetReq) return e;
                var t = new f.humanboy_proto.AdvanceAutoBetSetReq;
                return null != e.count && (t.count = 0 | e.count), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.count = 0), null != e.count && e.hasOwnProperty("count") && (o.count = e.count), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.AdvanceAutoBetSetReq"
            }, e
        }(), s.AdvanceAutoBetSetRsp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.count = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.count && Object.hasOwnProperty.call(e, "count") && t.uint32(16).int32(e.count), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.AdvanceAutoBetSetRsp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.count = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 41e3:
                    case 41001:
                    case 41002:
                    case 41003:
                    case 41004:
                    case 41005:
                    case 41006:
                    case 41007:
                    case 41008:
                    case 41009:
                    case 41010:
                    case 41011:
                    case 41012:
                    case 41013:
                    case 41014:
                    case 41015:
                    case 41016:
                    case 41017:
                    case 41018:
                    case 41019:
                    case 41020:
                    case 41021:
                    case 41022:
                    case 41023:
                    case 41024:
                    case 41025:
                    case 41026:
                    case 41027:
                    case 41028:
                    case 41029:
                }
                return null != e.count && e.hasOwnProperty("count") && !m.isInteger(e.count) ? "count: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.AdvanceAutoBetSetRsp) return e;
                var t = new f.humanboy_proto.AdvanceAutoBetSetRsp;
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
                    case "ROOM_WITHOUT_YOU":
                    case 41e3:
                        t.code = 41e3;
                        break;
                    case "LOW_VERSION":
                    case 41001:
                        t.code = 41001;
                        break;
                    case "INVALID_TOKEN":
                    case 41002:
                        t.code = 41002;
                        break;
                    case "SERVER_BUSY":
                    case 41003:
                        t.code = 41003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 41004:
                        t.code = 41004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 41005:
                        t.code = 41005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 41006:
                        t.code = 41006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 41007:
                        t.code = 41007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 41008:
                        t.code = 41008;
                        break;
                    case "NO_BET":
                    case 41009:
                        t.code = 41009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 41010:
                        t.code = 41010;
                        break;
                    case "NO_MONEY":
                    case 41011:
                        t.code = 41011;
                        break;
                    case "BET_BAD_PARAM":
                    case 41012:
                        t.code = 41012;
                        break;
                    case "STOP_SERVICE":
                    case 41013:
                        t.code = 41013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 41014:
                        t.code = 41014;
                        break;
                    case "BET_TOO_SMALL":
                    case 41015:
                        t.code = 41015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 41016:
                        t.code = 41016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 41017:
                        t.code = 41017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 41018:
                        t.code = 41018;
                        break;
                    case "NO_UP_DEALER":
                    case 41019:
                        t.code = 41019;
                        break;
                    case "STOCK_NUM_EXCEED":
                    case 41020:
                        t.code = 41020;
                        break;
                    case "NO_MONEY_TO_DEALER":
                    case 41021:
                        t.code = 41021;
                        break;
                    case "NOT_A_DEALER":
                    case 41022:
                        t.code = 41022;
                        break;
                    case "NOT_IN_APPLY":
                    case 41023:
                        t.code = 41023;
                        break;
                    case "DEALER_NO_BET":
                    case 41024:
                        t.code = 41024;
                        break;
                    case "BAD_REQ_PARAM":
                    case 41025:
                        t.code = 41025;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 41026:
                        t.code = 41026;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 41027:
                        t.code = 41027;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 41028:
                        t.code = 41028;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 41029:
                        t.code = 41029
                }
                return null != e.count && (t.count = 0 | e.count), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.count = 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.humanboy_proto.ErrorCode[e.code] ? e.code : f.humanboy_proto.ErrorCode[e.code] : e.code), null != e.count && e.hasOwnProperty("count") && (o.count = e.count), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.AdvanceAutoBetSetRsp"
            }, e
        }(), s.UserPointsChangeNotice = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.change_points = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.change_points && Object.hasOwnProperty.call(e, "change_points") && t.uint32(8).int64(e.change_points), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.humanboy_proto.UserPointsChangeNotice; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.change_points = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.change_points && e.hasOwnProperty("change_points") && !(m.isInteger(e.change_points) || e.change_points && m.isInteger(e.change_points.low) && m.isInteger(e.change_points.high)) ? "change_points: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.humanboy_proto.UserPointsChangeNotice) return e;
                var t = new f.humanboy_proto.UserPointsChangeNotice;
                return null != e.change_points && (m.Long ? (t.change_points = m.Long.fromValue(e.change_points)).unsigned = !1 : "string" == typeof e.change_points ? t.change_points = parseInt(e.change_points, 10) : "number" == typeof e.change_points ? t.change_points = e.change_points : "object" == typeof e.change_points && (t.change_points = new m.LongBits(e.change_points.low >>> 0, e.change_points.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults)
                    if (m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.change_points = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.change_points = t.longs === String ? "0" : 0;
                return null != e.change_points && e.hasOwnProperty("change_points") && ("number" == typeof e.change_points ? o.change_points = t.longs === String ? String(e.change_points) : e.change_points : o.change_points = t.longs === String ? m.Long.prototype.toString.call(e.change_points) : t.longs === Number ? new m.LongBits(e.change_points.low >>> 0, e.change_points.high >>> 0).toNumber() : e.change_points), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, l.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/humanboy_proto.UserPointsChangeNotice"
            }, e
        }(), s), n.exports = f, r = e("default", n.exports)
    }), (() => ({
        "protobufjs/minimal.js": n
    })))
}