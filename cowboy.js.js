import * as o from "./cjs-loader.mjs.js";
import * as n from "./minimal.js";

function main() {
    let r;
    e("default", void 0);
    const a = e("__cjsMetaURL", t.meta.url);
    o.define(a, (function(t, o, n, a, i) {
        var c, s, l, u = o("protobufjs/minimal.js"),
            p = u.Reader,
            d = u.Writer,
            m = u.util,
            f = u.roots.default || (u.roots.default = {});
        f.cowboy_proto = ((l = {}).RoomLevel = (c = {}, (s = Object.create(c))[c[0] = "RoomLevel_DUMMY"] = 0, s[c[1] = "Small"] = 1, s[c[2] = "Middle"] = 2, s[c[3] = "Big"] = 3, s), l.RoleName = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "RoleName_DUMMY"] = 0, t[e[1] = "Red"] = 1, t[e[2] = "Blue"] = 2, t
        }(), l.RoundState = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "RoundState_DUMMY"] = 0, t[e[1] = "GAME_PENDING"] = 1, t[e[2] = "NEW_ROUND"] = 2, t[e[3] = "BET"] = 3, t[e[4] = "WAIT_NEXT_ROUND"] = 4, t
        }(), l.BetZone = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "ZONE_DUMMY"] = 0, t[e[10] = "WIN"] = 10, t[e[20] = "HOLE_CARD"] = 20, t[e[30] = "FIVE_CARD"] = 30, t
        }(), l.BetZoneOption = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "BetZoneOption_DUMMY"] = 0, t[e[100] = "WIN_BEGIN"] = 100, t[e[101] = "RED_WIN"] = 101, t[e[102] = "BLUE_WIN"] = 102, t[e[103] = "EQUAL"] = 103, t[e[199] = "WIN_END"] = 199, t[e[200] = "HOLE_BEGIN"] = 200, t[e[203] = "HOLE_SAME"] = 203, t[e[205] = "HOLE_A"] = 205, t[e[206] = "HOLE_3_TONG_SAME_SHUN"] = 206, t[e[299] = "HOLE_END"] = 299, t[e[300] = "FIVE_BEGIN"] = 300, t[e[301] = "FIVE_NONE_1DUI"] = 301, t[e[302] = "FIVE_2DUI"] = 302, t[e[303] = "FIVE_3_SHUN_TONG_HUA"] = 303, t[e[304] = "FIVE_3_2"] = 304, t[e[305] = "FIVE_KING_TONG_HUA_SHUN_4"] = 305, t[e[399] = "FIVE_END"] = 399, t
        }(), l.CMD = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "CMD_DUMMY"] = 0, t[e[3e4] = "LOGIN_GAME_REQ"] = 3e4, t[e[30001] = "LOGIN_GAME_RESP"] = 30001, t[e[30004] = "HEART_BEAT_REQ"] = 30004, t[e[30005] = "HEART_BEAT_RESP"] = 30005, t[e[30007] = "JOIN_ROOM_REQ"] = 30007, t[e[30008] = "JOIN_ROOM_RESP"] = 30008, t[e[30009] = "GAME_LIST_REQ"] = 30009, t[e[30010] = "GAME_LIST_RESP"] = 30010, t[e[30011] = "GAME_DATA_SYN"] = 30011, t[e[30012] = "DEAL_NOTIFY"] = 30012, t[e[30013] = "BET_REQ"] = 30013, t[e[30014] = "BET_RESP"] = 30014, t[e[30015] = "BET_NOTIFY"] = 30015, t[e[30016] = "GAME_ROUND_END_NOTIFY"] = 30016, t[e[30018] = "LEAVE_ROOM_REQ"] = 30018, t[e[30019] = "LEAVE_ROOM_RESP"] = 30019, t[e[30020] = "LEAVE_ROOM_NOTIFY"] = 30020, t[e[30022] = "CONN_CLOSE_REQ"] = 30022, t[e[30023] = "ROOM_TREND_REQ"] = 30023, t[e[30024] = "ROOM_TREND_RSP"] = 30024, t[e[30025] = "ROOM_TREND_NOTICE"] = 30025, t[e[30026] = "START_BET_NOTIFY"] = 30026, t[e[30029] = "AUTO_BET_REQ"] = 30029, t[e[30030] = "AUTO_BET_RESP"] = 30030, t[e[30031] = "AUTO_BET_NOTIFY"] = 30031, t[e[30032] = "PLAYER_LIST_REQ"] = 30032, t[e[30033] = "PLAYER_LIST_RESP"] = 30033, t[e[30036] = "MERGE_AUTO_BET_NOTIFY"] = 30036, t[e[30037] = "KICK_NOTIFY"] = 30037, t[e[30038] = "ROOM_TREND_ROAD_REQ"] = 30038, t[e[30039] = "ROOM_TREND_ROAD_RSP"] = 30039, t[e[30040] = "ROOM_TREND_ROAD_NOTICE"] = 30040, t[e[30041] = "AUTO_OPEN_ROADS_REQ"] = 30041, t[e[30042] = "AUTO_OPEN_ROADS_RSP"] = 30042, t[e[30044] = "SET_GAME_OPTION_REQ"] = 30044, t[e[30045] = "SET_GAME_OPTION_RSP"] = 30045, t[e[30047] = "START_SETTLEMENT_NOTIFY"] = 30047, t[e[30050] = "ADVANCE_AUTO_BET_REQ"] = 30050, t[e[30051] = "ADVANCE_AUTO_BET_RSP"] = 30051, t[e[30052] = "CANCEL_ADVANCE_AUTO_BET_REQ"] = 30052, t[e[30053] = "CANCEL_ADVANCE_AUTO_BET_RSP"] = 30053, t[e[30054] = "ADVANCE_AUTO_BET_SET_REQ"] = 30054, t[e[30055] = "ADVANCE_AUTO_BET_SET_RSP"] = 30055, t[e[30056] = "USER_POINTS_CHANGE_NOTICE"] = 30056, t[e[30057] = "ADVANCE_AUTO_BET_ADD_REQ"] = 30057, t[e[30058] = "ADVANCE_AUTO_BET_ADD_RSP"] = 30058, t[e[30059] = "BUYIN_REQ"] = 30059, t[e[30060] = "BUYIN_RSP"] = 30060, t
        }(), l.ErrorCode = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "ErrorCode_DUMMY"] = 0, t[e[1] = "OK"] = 1, t[e[31e3] = "ROOM_WITHOUT_YOU"] = 31e3, t[e[31001] = "LOW_VERSION"] = 31001, t[e[31002] = "INVALID_TOKEN"] = 31002, t[e[31003] = "SERVER_BUSY"] = 31003, t[e[31004] = "WITHOUT_LOGIN"] = 31004, t[e[31005] = "ROOM_NOT_MATCH"] = 31005, t[e[31006] = "ROOM_NOT_EXIST"] = 31006, t[e[31007] = "BET_EXCEED_LIMIT"] = 31007, t[e[31008] = "ROOM_PLAYER_LIMIT"] = 31008, t[e[31009] = "NO_BET"] = 31009, t[e[31010] = "BET_AMOUNT_NOT_MATCH"] = 31010, t[e[31011] = "NO_MONEY"] = 31011, t[e[31012] = "BET_BAD_PARAM"] = 31012, t[e[31013] = "STOP_SERVICE"] = 31013, t[e[31014] = "NOT_BET_WHEN_AUTO_BET"] = 31014, t[e[31015] = "BET_TOO_SMALL"] = 31015, t[e[31016] = "BET_COUNT_LIMIT"] = 31016, t[e[31017] = "AUTO_BET_LIMIT"] = 31017, t[e[31018] = "TOO_MANY_PEOPLE"] = 31018, t[e[31019] = "BAD_REQ_PARAM"] = 31019, t[e[31020] = "NO_SET_ADVANCE_AUTO_BET"] = 31020, t[e[31021] = "AUTO_BET_COUNT_LIMIT"] = 31021, t[e[31022] = "AUTO_BET_NO_MONEY"] = 31022, t[e[31023] = "AUTO_BET_EXCEED_LIMIT"] = 31023, t[e[31026] = "REACH_LIMIT_BET"] = 31026, t[e[31024] = "ROOM_SYSTEM_FORCE_CLOSED"] = 31024, t[e[31025] = "IN_CALM_DOWN"] = 31025, t[e[31117] = "C2CPAYMENT_LIST_GET_ERROR"] = 31117, t[e[31118] = "C2CPAYMENT_NOT_ALLOW"] = 31118, t[e[31119] = "CAN_NOT_LEAVE_IN_BETTING"] = 31119, t
        }(), l.ClientType = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Dummy"] = 0, t[e[1] = "Normal"] = 1, t[e[2] = "OverSeas"] = 2, t[e[3] = "H5"] = 3, t[e[4] = "H5OverSeas"] = 4, t[e[5] = "H5Web"] = 5, t[e[6] = "H5WebOverSeas"] = 6, t[e[7] = "H5VietnamLasted"] = 7, t[e[8] = "H5WebVietnamLasted"] = 8, t[e[9] = "H5CowboyWeb"] = 9, t[e[10] = "H5Thailand"] = 10, t[e[11] = "H5WebThailand"] = 11, t[e[12] = "H5Arab"] = 12, t[e[13] = "H5Hindi"] = 13, t[e[14] = "H5Mempoker"] = 14, t[e[15] = "PC"] = 15, t[e[16] = "WPTG"] = 16, t
        }(), l.Kick = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Kick_DUMMY"] = 0, t[e[1] = "IDLE_LONG_TIME"] = 1, t[e[2] = "Stop_World"] = 2, t
        }(), l.AutoBetLevel = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Level_Normal"] = 0, t[e[1] = "Level_Advance"] = 1, t
        }(), l.StartSettlementNotify = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.StartSettlementNotify; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.cowboy_proto.StartSettlementNotify ? e : new f.cowboy_proto.StartSettlementNotify
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.StartSettlementNotify"
            }, e
        }(), l.CardItem = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.CardItem; e.pos < o;) {
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
                if (e instanceof f.cowboy_proto.CardItem) return e;
                var t = new f.cowboy_proto.CardItem;
                return null != e.number && (t.number = 0 | e.number), null != e.suit && (t.suit = 0 | e.suit), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.number = 0, o.suit = 0), null != e.number && e.hasOwnProperty("number") && (o.number = e.number), null != e.suit && e.hasOwnProperty("suit") && (o.suit = e.suit), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.CardItem"
            }, e
        }(), l.HeartBeatReq = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.HeartBeatReq; e.pos < o;) {
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
                if (e instanceof f.cowboy_proto.HeartBeatReq) return e;
                var t = new f.cowboy_proto.HeartBeatReq;
                return null != e.uid && (t.uid = e.uid >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.uid = 0), null != e.uid && e.hasOwnProperty("uid") && (o.uid = e.uid), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.HeartBeatReq"
            }, e
        }(), l.HeartBeatResp = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.HeartBeatResp; e.pos < o;) {
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
                if (e instanceof f.cowboy_proto.HeartBeatResp) return e;
                var t = new f.cowboy_proto.HeartBeatResp;
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
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.HeartBeatResp"
            }, e
        }(), l.LoginReq = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.LoginReq; e.pos < o;) {
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
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.LoginReq) return e;
                var t = new f.cowboy_proto.LoginReq;
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
                        t.client_type = 8;
                        break;
                    case "H5CowboyWeb":
                    case 9:
                        t.client_type = 9;
                        break;
                    case "H5Thailand":
                    case 10:
                        t.client_type = 10;
                        break;
                    case "H5WebThailand":
                    case 11:
                        t.client_type = 11;
                        break;
                    case "H5Arab":
                    case 12:
                        t.client_type = 12;
                        break;
                    case "H5Hindi":
                    case 13:
                        t.client_type = 13;
                        break;
                    case "H5Mempoker":
                    case 14:
                        t.client_type = 14;
                        break;
                    case "PC":
                    case 15:
                        t.client_type = 15;
                        break;
                    case "WPTG":
                    case 16:
                        t.client_type = 16
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.version = "", o.token = "", o.client_type = t.enums === String ? "Dummy" : 0), null != e.version && e.hasOwnProperty("version") && (o.version = e.version), null != e.token && e.hasOwnProperty("token") && (o.token = e.token), null != e.client_type && e.hasOwnProperty("client_type") && (o.client_type = t.enums === String ? void 0 === f.cowboy_proto.ClientType[e.client_type] ? e.client_type : f.cowboy_proto.ClientType[e.client_type] : e.client_type), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.LoginReq"
            }, e
        }(), l.LoginResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.roomid = 0, e.prototype.CalmDownLeftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.CalmDownDeadLineTimeStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.roomid && Object.hasOwnProperty.call(e, "roomid") && t.uint32(16).uint32(e.roomid), null != e.CalmDownLeftSeconds && Object.hasOwnProperty.call(e, "CalmDownLeftSeconds") && t.uint32(24).int64(e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && Object.hasOwnProperty.call(e, "CalmDownDeadLineTimeStamp") && t.uint32(32).int64(e.CalmDownDeadLineTimeStamp), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.LoginResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.roomid = e.uint32();
                            break;
                        case 3:
                            n.CalmDownLeftSeconds = e.int64();
                            break;
                        case 4:
                            n.CalmDownDeadLineTimeStamp = e.int64();
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
                    case 31e3:
                    case 31001:
                    case 31002:
                    case 31003:
                    case 31004:
                    case 31005:
                    case 31006:
                    case 31007:
                    case 31008:
                    case 31009:
                    case 31010:
                    case 31011:
                    case 31012:
                    case 31013:
                    case 31014:
                    case 31015:
                    case 31016:
                    case 31017:
                    case 31018:
                    case 31019:
                    case 31020:
                    case 31021:
                    case 31022:
                    case 31023:
                    case 31026:
                    case 31024:
                    case 31025:
                    case 31117:
                    case 31118:
                    case 31119:
                }
                return null != e.roomid && e.hasOwnProperty("roomid") && !m.isInteger(e.roomid) ? "roomid: integer expected" : null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && !(m.isInteger(e.CalmDownLeftSeconds) || e.CalmDownLeftSeconds && m.isInteger(e.CalmDownLeftSeconds.low) && m.isInteger(e.CalmDownLeftSeconds.high)) ? "CalmDownLeftSeconds: integer|Long expected" : null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && !(m.isInteger(e.CalmDownDeadLineTimeStamp) || e.CalmDownDeadLineTimeStamp && m.isInteger(e.CalmDownDeadLineTimeStamp.low) && m.isInteger(e.CalmDownDeadLineTimeStamp.high)) ? "CalmDownDeadLineTimeStamp: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.LoginResp) return e;
                var t = new f.cowboy_proto.LoginResp;
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
                    case 31e3:
                        t.code = 31e3;
                        break;
                    case "LOW_VERSION":
                    case 31001:
                        t.code = 31001;
                        break;
                    case "INVALID_TOKEN":
                    case 31002:
                        t.code = 31002;
                        break;
                    case "SERVER_BUSY":
                    case 31003:
                        t.code = 31003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 31004:
                        t.code = 31004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 31005:
                        t.code = 31005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 31006:
                        t.code = 31006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 31007:
                        t.code = 31007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 31008:
                        t.code = 31008;
                        break;
                    case "NO_BET":
                    case 31009:
                        t.code = 31009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 31010:
                        t.code = 31010;
                        break;
                    case "NO_MONEY":
                    case 31011:
                        t.code = 31011;
                        break;
                    case "BET_BAD_PARAM":
                    case 31012:
                        t.code = 31012;
                        break;
                    case "STOP_SERVICE":
                    case 31013:
                        t.code = 31013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 31014:
                        t.code = 31014;
                        break;
                    case "BET_TOO_SMALL":
                    case 31015:
                        t.code = 31015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 31016:
                        t.code = 31016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 31017:
                        t.code = 31017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 31018:
                        t.code = 31018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 31019:
                        t.code = 31019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 31020:
                        t.code = 31020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 31021:
                        t.code = 31021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 31022:
                        t.code = 31022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 31023:
                        t.code = 31023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 31026:
                        t.code = 31026;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 31024:
                        t.code = 31024;
                        break;
                    case "IN_CALM_DOWN":
                    case 31025:
                        t.code = 31025;
                        break;
                    case "C2CPAYMENT_LIST_GET_ERROR":
                    case 31117:
                        t.code = 31117;
                        break;
                    case "C2CPAYMENT_NOT_ALLOW":
                    case 31118:
                        t.code = 31118;
                        break;
                    case "CAN_NOT_LEAVE_IN_BETTING":
                    case 31119:
                        t.code = 31119
                }
                return null != e.roomid && (t.roomid = e.roomid >>> 0), null != e.CalmDownLeftSeconds && (m.Long ? (t.CalmDownLeftSeconds = m.Long.fromValue(e.CalmDownLeftSeconds)).unsigned = !1 : "string" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = parseInt(e.CalmDownLeftSeconds, 10) : "number" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = e.CalmDownLeftSeconds : "object" == typeof e.CalmDownLeftSeconds && (t.CalmDownLeftSeconds = new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber())), null != e.CalmDownDeadLineTimeStamp && (m.Long ? (t.CalmDownDeadLineTimeStamp = m.Long.fromValue(e.CalmDownDeadLineTimeStamp)).unsigned = !1 : "string" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = parseInt(e.CalmDownDeadLineTimeStamp, 10) : "number" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = e.CalmDownDeadLineTimeStamp : "object" == typeof e.CalmDownDeadLineTimeStamp && (t.CalmDownDeadLineTimeStamp = new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.roomid = 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.CalmDownLeftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.CalmDownLeftSeconds = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !1), o.CalmDownDeadLineTimeStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.CalmDownDeadLineTimeStamp = t.longs === String ? "0" : 0
                }
                return null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.cowboy_proto.ErrorCode[e.code] ? e.code : f.cowboy_proto.ErrorCode[e.code] : e.code), null != e.roomid && e.hasOwnProperty("roomid") && (o.roomid = e.roomid), null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && ("number" == typeof e.CalmDownLeftSeconds ? o.CalmDownLeftSeconds = t.longs === String ? String(e.CalmDownLeftSeconds) : e.CalmDownLeftSeconds : o.CalmDownLeftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownLeftSeconds) : t.longs === Number ? new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber() : e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && ("number" == typeof e.CalmDownDeadLineTimeStamp ? o.CalmDownDeadLineTimeStamp = t.longs === String ? String(e.CalmDownDeadLineTimeStamp) : e.CalmDownDeadLineTimeStamp : o.CalmDownDeadLineTimeStamp = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownDeadLineTimeStamp) : t.longs === Number ? new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber() : e.CalmDownDeadLineTimeStamp), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.LoginResp"
            }, e
        }(), l.JoinRoomReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.roomid = 0, e.prototype.geoComplyToken = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.roomid && Object.hasOwnProperty.call(e, "roomid") && t.uint32(8).uint32(e.roomid), null != e.geoComplyToken && Object.hasOwnProperty.call(e, "geoComplyToken") && t.uint32(18).string(e.geoComplyToken), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.JoinRoomReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.roomid = e.uint32();
                            break;
                        case 2:
                            n.geoComplyToken = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomid && e.hasOwnProperty("roomid") && !m.isInteger(e.roomid) ? "roomid: integer expected" : null != e.geoComplyToken && e.hasOwnProperty("geoComplyToken") && !m.isString(e.geoComplyToken) ? "geoComplyToken: string expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.JoinRoomReq) return e;
                var t = new f.cowboy_proto.JoinRoomReq;
                return null != e.roomid && (t.roomid = e.roomid >>> 0), null != e.geoComplyToken && (t.geoComplyToken = String(e.geoComplyToken)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.roomid = 0, o.geoComplyToken = ""), null != e.roomid && e.hasOwnProperty("roomid") && (o.roomid = e.roomid), null != e.geoComplyToken && e.hasOwnProperty("geoComplyToken") && (o.geoComplyToken = e.geoComplyToken), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.JoinRoomReq"
            }, e
        }(), l.JoinRoomResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.roomid = 0, e.prototype.roomuuid = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.failedReasons = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.roomid && Object.hasOwnProperty.call(e, "roomid") && t.uint32(16).uint32(e.roomid), null != e.roomuuid && Object.hasOwnProperty.call(e, "roomuuid") && t.uint32(24).uint64(e.roomuuid), null != e.failedReasons && Object.hasOwnProperty.call(e, "failedReasons") && t.uint32(34).string(e.failedReasons), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.JoinRoomResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.roomid = e.uint32();
                            break;
                        case 3:
                            n.roomuuid = e.uint64();
                            break;
                        case 4:
                            n.failedReasons = e.string();
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
                    case 31e3:
                    case 31001:
                    case 31002:
                    case 31003:
                    case 31004:
                    case 31005:
                    case 31006:
                    case 31007:
                    case 31008:
                    case 31009:
                    case 31010:
                    case 31011:
                    case 31012:
                    case 31013:
                    case 31014:
                    case 31015:
                    case 31016:
                    case 31017:
                    case 31018:
                    case 31019:
                    case 31020:
                    case 31021:
                    case 31022:
                    case 31023:
                    case 31026:
                    case 31024:
                    case 31025:
                    case 31117:
                    case 31118:
                    case 31119:
                }
                return null != e.roomid && e.hasOwnProperty("roomid") && !m.isInteger(e.roomid) ? "roomid: integer expected" : null != e.roomuuid && e.hasOwnProperty("roomuuid") && !(m.isInteger(e.roomuuid) || e.roomuuid && m.isInteger(e.roomuuid.low) && m.isInteger(e.roomuuid.high)) ? "roomuuid: integer|Long expected" : null != e.failedReasons && e.hasOwnProperty("failedReasons") && !m.isString(e.failedReasons) ? "failedReasons: string expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.JoinRoomResp) return e;
                var t = new f.cowboy_proto.JoinRoomResp;
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
                    case 31e3:
                        t.code = 31e3;
                        break;
                    case "LOW_VERSION":
                    case 31001:
                        t.code = 31001;
                        break;
                    case "INVALID_TOKEN":
                    case 31002:
                        t.code = 31002;
                        break;
                    case "SERVER_BUSY":
                    case 31003:
                        t.code = 31003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 31004:
                        t.code = 31004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 31005:
                        t.code = 31005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 31006:
                        t.code = 31006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 31007:
                        t.code = 31007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 31008:
                        t.code = 31008;
                        break;
                    case "NO_BET":
                    case 31009:
                        t.code = 31009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 31010:
                        t.code = 31010;
                        break;
                    case "NO_MONEY":
                    case 31011:
                        t.code = 31011;
                        break;
                    case "BET_BAD_PARAM":
                    case 31012:
                        t.code = 31012;
                        break;
                    case "STOP_SERVICE":
                    case 31013:
                        t.code = 31013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 31014:
                        t.code = 31014;
                        break;
                    case "BET_TOO_SMALL":
                    case 31015:
                        t.code = 31015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 31016:
                        t.code = 31016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 31017:
                        t.code = 31017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 31018:
                        t.code = 31018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 31019:
                        t.code = 31019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 31020:
                        t.code = 31020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 31021:
                        t.code = 31021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 31022:
                        t.code = 31022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 31023:
                        t.code = 31023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 31026:
                        t.code = 31026;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 31024:
                        t.code = 31024;
                        break;
                    case "IN_CALM_DOWN":
                    case 31025:
                        t.code = 31025;
                        break;
                    case "C2CPAYMENT_LIST_GET_ERROR":
                    case 31117:
                        t.code = 31117;
                        break;
                    case "C2CPAYMENT_NOT_ALLOW":
                    case 31118:
                        t.code = 31118;
                        break;
                    case "CAN_NOT_LEAVE_IN_BETTING":
                    case 31119:
                        t.code = 31119
                }
                return null != e.roomid && (t.roomid = e.roomid >>> 0), null != e.roomuuid && (m.Long ? (t.roomuuid = m.Long.fromValue(e.roomuuid)).unsigned = !0 : "string" == typeof e.roomuuid ? t.roomuuid = parseInt(e.roomuuid, 10) : "number" == typeof e.roomuuid ? t.roomuuid = e.roomuuid : "object" == typeof e.roomuuid && (t.roomuuid = new m.LongBits(e.roomuuid.low >>> 0, e.roomuuid.high >>> 0).toNumber(!0))), null != e.failedReasons && (t.failedReasons = String(e.failedReasons)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.roomid = 0, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.roomuuid = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.roomuuid = t.longs === String ? "0" : 0;
                    o.failedReasons = ""
                }
                return null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.cowboy_proto.ErrorCode[e.code] ? e.code : f.cowboy_proto.ErrorCode[e.code] : e.code), null != e.roomid && e.hasOwnProperty("roomid") && (o.roomid = e.roomid), null != e.roomuuid && e.hasOwnProperty("roomuuid") && ("number" == typeof e.roomuuid ? o.roomuuid = t.longs === String ? String(e.roomuuid) : e.roomuuid : o.roomuuid = t.longs === String ? m.Long.prototype.toString.call(e.roomuuid) : t.longs === Number ? new m.LongBits(e.roomuuid.low >>> 0, e.roomuuid.high >>> 0).toNumber(!0) : e.roomuuid), null != e.failedReasons && e.hasOwnProperty("failedReasons") && (o.failedReasons = e.failedReasons), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.JoinRoomResp"
            }, e
        }(), l.RoomParam = function() {
            function e(e) {
                if (this.amountLevel = [], this.oddsDetail = [], this.pictureCn = [], this.pictureEn = [], this.totalAmountLevel = [], this.pictureVn = [], this.ruleByLanguage = [], this.toThirdRulePic = {}, this.plats = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.roomid = 0, e.prototype.amountLevel = m.emptyArray, e.prototype.oddsDetail = m.emptyArray, e.prototype.limitPlayers = 0, e.prototype.deskType = 0, e.prototype.smallBet = 0, e.prototype.pictureCn = m.emptyArray, e.prototype.pictureEn = m.emptyArray, e.prototype.totalAmountLevel = m.emptyArray, e.prototype.pictureVn = m.emptyArray, e.prototype.ruleByLanguage = m.emptyArray, e.prototype.langVersion = 0, e.prototype.rulePic = "", e.prototype.toThirdRulePic = m.emptyObject, e.prototype.plats = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.roomid && Object.hasOwnProperty.call(e, "roomid") && t.uint32(8).uint32(e.roomid), null != e.amountLevel && e.amountLevel.length) {
                    t.uint32(18).fork();
                    for (var o = 0; o < e.amountLevel.length; ++o) t.uint64(e.amountLevel[o]);
                    t.ldelim()
                }
                if (null != e.oddsDetail && e.oddsDetail.length)
                    for (o = 0; o < e.oddsDetail.length; ++o) f.cowboy_proto.OddsDetail.encode(e.oddsDetail[o], t.uint32(26).fork()).ldelim();
                if (null != e.limitPlayers && Object.hasOwnProperty.call(e, "limitPlayers") && t.uint32(40).uint32(e.limitPlayers), null != e.deskType && Object.hasOwnProperty.call(e, "deskType") && t.uint32(48).uint32(e.deskType), null != e.smallBet && Object.hasOwnProperty.call(e, "smallBet") && t.uint32(56).uint32(e.smallBet), null != e.pictureCn && e.pictureCn.length)
                    for (o = 0; o < e.pictureCn.length; ++o) t.uint32(66).string(e.pictureCn[o]);
                if (null != e.pictureEn && e.pictureEn.length)
                    for (o = 0; o < e.pictureEn.length; ++o) t.uint32(74).string(e.pictureEn[o]);
                if (null != e.totalAmountLevel && e.totalAmountLevel.length) {
                    for (t.uint32(82).fork(), o = 0; o < e.totalAmountLevel.length; ++o) t.uint64(e.totalAmountLevel[o]);
                    t.ldelim()
                }
                if (null != e.pictureVn && e.pictureVn.length)
                    for (o = 0; o < e.pictureVn.length; ++o) t.uint32(90).string(e.pictureVn[o]);
                if (null != e.ruleByLanguage && e.ruleByLanguage.length)
                    for (o = 0; o < e.ruleByLanguage.length; ++o) f.cowboy_proto.LanguageItem.encode(e.ruleByLanguage[o], t.uint32(98).fork()).ldelim();
                if (null != e.langVersion && Object.hasOwnProperty.call(e, "langVersion") && t.uint32(104).int32(e.langVersion), null != e.rulePic && Object.hasOwnProperty.call(e, "rulePic") && t.uint32(114).string(e.rulePic), null != e.toThirdRulePic && Object.hasOwnProperty.call(e, "toThirdRulePic")) {
                    var n = Object.keys(e.toThirdRulePic);
                    for (o = 0; o < n.length; ++o) t.uint32(122).fork().uint32(10).string(n[o]).uint32(18).string(e.toThirdRulePic[n[o]]).ldelim()
                }
                if (null != e.plats && e.plats.length) {
                    for (t.uint32(130).fork(), o = 0; o < e.plats.length; ++o) t.uint32(e.plats[o]);
                    t.ldelim()
                }
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o, n, r = void 0 === t ? e.len : e.pos + t, a = new f.cowboy_proto.RoomParam; e.pos < r;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            a.roomid = e.uint32();
                            break;
                        case 2:
                            if (a.amountLevel && a.amountLevel.length || (a.amountLevel = []), 2 == (7 & i))
                                for (var c = e.uint32() + e.pos; e.pos < c;) a.amountLevel.push(e.uint64());
                            else a.amountLevel.push(e.uint64());
                            break;
                        case 3:
                            a.oddsDetail && a.oddsDetail.length || (a.oddsDetail = []), a.oddsDetail.push(f.cowboy_proto.OddsDetail.decode(e, e.uint32()));
                            break;
                        case 5:
                            a.limitPlayers = e.uint32();
                            break;
                        case 6:
                            a.deskType = e.uint32();
                            break;
                        case 7:
                            a.smallBet = e.uint32();
                            break;
                        case 8:
                            a.pictureCn && a.pictureCn.length || (a.pictureCn = []), a.pictureCn.push(e.string());
                            break;
                        case 9:
                            a.pictureEn && a.pictureEn.length || (a.pictureEn = []), a.pictureEn.push(e.string());
                            break;
                        case 10:
                            if (a.totalAmountLevel && a.totalAmountLevel.length || (a.totalAmountLevel = []), 2 == (7 & i))
                                for (c = e.uint32() + e.pos; e.pos < c;) a.totalAmountLevel.push(e.uint64());
                            else a.totalAmountLevel.push(e.uint64());
                            break;
                        case 11:
                            a.pictureVn && a.pictureVn.length || (a.pictureVn = []), a.pictureVn.push(e.string());
                            break;
                        case 12:
                            a.ruleByLanguage && a.ruleByLanguage.length || (a.ruleByLanguage = []), a.ruleByLanguage.push(f.cowboy_proto.LanguageItem.decode(e, e.uint32()));
                            break;
                        case 13:
                            a.langVersion = e.int32();
                            break;
                        case 14:
                            a.rulePic = e.string();
                            break;
                        case 15:
                            for (a.toThirdRulePic === m.emptyObject && (a.toThirdRulePic = {}), c = e.uint32() + e.pos, o = "", n = ""; e.pos < c;) {
                                var s = e.uint32();
                                switch (s >>> 3) {
                                    case 1:
                                        o = e.string();
                                        break;
                                    case 2:
                                        n = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & s)
                                }
                            }
                            a.toThirdRulePic[o] = n;
                            break;
                        case 16:
                            if (a.plats && a.plats.length || (a.plats = []), 2 == (7 & i))
                                for (c = e.uint32() + e.pos; e.pos < c;) a.plats.push(e.uint32());
                            else a.plats.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return a
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
                    for (t = 0; t < e.oddsDetail.length; ++t)
                        if (o = f.cowboy_proto.OddsDetail.verify(e.oddsDetail[t])) return "oddsDetail." + o
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
                if (null != e.ruleByLanguage && e.hasOwnProperty("ruleByLanguage")) {
                    if (!Array.isArray(e.ruleByLanguage)) return "ruleByLanguage: array expected";
                    for (t = 0; t < e.ruleByLanguage.length; ++t) {
                        var o;
                        if (o = f.cowboy_proto.LanguageItem.verify(e.ruleByLanguage[t])) return "ruleByLanguage." + o
                    }
                }
                if (null != e.langVersion && e.hasOwnProperty("langVersion") && !m.isInteger(e.langVersion)) return "langVersion: integer expected";
                if (null != e.rulePic && e.hasOwnProperty("rulePic") && !m.isString(e.rulePic)) return "rulePic: string expected";
                if (null != e.toThirdRulePic && e.hasOwnProperty("toThirdRulePic")) {
                    if (!m.isObject(e.toThirdRulePic)) return "toThirdRulePic: object expected";
                    var n = Object.keys(e.toThirdRulePic);
                    for (t = 0; t < n.length; ++t)
                        if (!m.isString(e.toThirdRulePic[n[t]])) return "toThirdRulePic: string{k:string} expected"
                }
                if (null != e.plats && e.hasOwnProperty("plats")) {
                    if (!Array.isArray(e.plats)) return "plats: array expected";
                    for (t = 0; t < e.plats.length; ++t)
                        if (!m.isInteger(e.plats[t])) return "plats: integer[] expected"
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.RoomParam) return e;
                var t = new f.cowboy_proto.RoomParam;
                if (null != e.roomid && (t.roomid = e.roomid >>> 0), e.amountLevel) {
                    if (!Array.isArray(e.amountLevel)) throw TypeError(".cowboy_proto.RoomParam.amountLevel: array expected");
                    t.amountLevel = [];
                    for (var o = 0; o < e.amountLevel.length; ++o) m.Long ? (t.amountLevel[o] = m.Long.fromValue(e.amountLevel[o])).unsigned = !0 : "string" == typeof e.amountLevel[o] ? t.amountLevel[o] = parseInt(e.amountLevel[o], 10) : "number" == typeof e.amountLevel[o] ? t.amountLevel[o] = e.amountLevel[o] : "object" == typeof e.amountLevel[o] && (t.amountLevel[o] = new m.LongBits(e.amountLevel[o].low >>> 0, e.amountLevel[o].high >>> 0).toNumber(!0))
                }
                if (e.oddsDetail) {
                    if (!Array.isArray(e.oddsDetail)) throw TypeError(".cowboy_proto.RoomParam.oddsDetail: array expected");
                    for (t.oddsDetail = [], o = 0; o < e.oddsDetail.length; ++o) {
                        if ("object" != typeof e.oddsDetail[o]) throw TypeError(".cowboy_proto.RoomParam.oddsDetail: object expected");
                        t.oddsDetail[o] = f.cowboy_proto.OddsDetail.fromObject(e.oddsDetail[o])
                    }
                }
                if (null != e.limitPlayers && (t.limitPlayers = e.limitPlayers >>> 0), null != e.deskType && (t.deskType = e.deskType >>> 0), null != e.smallBet && (t.smallBet = e.smallBet >>> 0), e.pictureCn) {
                    if (!Array.isArray(e.pictureCn)) throw TypeError(".cowboy_proto.RoomParam.pictureCn: array expected");
                    for (t.pictureCn = [], o = 0; o < e.pictureCn.length; ++o) t.pictureCn[o] = String(e.pictureCn[o])
                }
                if (e.pictureEn) {
                    if (!Array.isArray(e.pictureEn)) throw TypeError(".cowboy_proto.RoomParam.pictureEn: array expected");
                    for (t.pictureEn = [], o = 0; o < e.pictureEn.length; ++o) t.pictureEn[o] = String(e.pictureEn[o])
                }
                if (e.totalAmountLevel) {
                    if (!Array.isArray(e.totalAmountLevel)) throw TypeError(".cowboy_proto.RoomParam.totalAmountLevel: array expected");
                    for (t.totalAmountLevel = [], o = 0; o < e.totalAmountLevel.length; ++o) m.Long ? (t.totalAmountLevel[o] = m.Long.fromValue(e.totalAmountLevel[o])).unsigned = !0 : "string" == typeof e.totalAmountLevel[o] ? t.totalAmountLevel[o] = parseInt(e.totalAmountLevel[o], 10) : "number" == typeof e.totalAmountLevel[o] ? t.totalAmountLevel[o] = e.totalAmountLevel[o] : "object" == typeof e.totalAmountLevel[o] && (t.totalAmountLevel[o] = new m.LongBits(e.totalAmountLevel[o].low >>> 0, e.totalAmountLevel[o].high >>> 0).toNumber(!0))
                }
                if (e.pictureVn) {
                    if (!Array.isArray(e.pictureVn)) throw TypeError(".cowboy_proto.RoomParam.pictureVn: array expected");
                    for (t.pictureVn = [], o = 0; o < e.pictureVn.length; ++o) t.pictureVn[o] = String(e.pictureVn[o])
                }
                if (e.ruleByLanguage) {
                    if (!Array.isArray(e.ruleByLanguage)) throw TypeError(".cowboy_proto.RoomParam.ruleByLanguage: array expected");
                    for (t.ruleByLanguage = [], o = 0; o < e.ruleByLanguage.length; ++o) {
                        if ("object" != typeof e.ruleByLanguage[o]) throw TypeError(".cowboy_proto.RoomParam.ruleByLanguage: object expected");
                        t.ruleByLanguage[o] = f.cowboy_proto.LanguageItem.fromObject(e.ruleByLanguage[o])
                    }
                }
                if (null != e.langVersion && (t.langVersion = 0 | e.langVersion), null != e.rulePic && (t.rulePic = String(e.rulePic)), e.toThirdRulePic) {
                    if ("object" != typeof e.toThirdRulePic) throw TypeError(".cowboy_proto.RoomParam.toThirdRulePic: object expected");
                    t.toThirdRulePic = {};
                    var n = Object.keys(e.toThirdRulePic);
                    for (o = 0; o < n.length; ++o) t.toThirdRulePic[n[o]] = String(e.toThirdRulePic[n[o]])
                }
                if (e.plats) {
                    if (!Array.isArray(e.plats)) throw TypeError(".cowboy_proto.RoomParam.plats: array expected");
                    for (t.plats = [], o = 0; o < e.plats.length; ++o) t.plats[o] = e.plats[o] >>> 0
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o, n = {};
                if ((t.arrays || t.defaults) && (n.amountLevel = [], n.oddsDetail = [], n.pictureCn = [], n.pictureEn = [], n.totalAmountLevel = [], n.pictureVn = [], n.ruleByLanguage = [], n.plats = []), (t.objects || t.defaults) && (n.toThirdRulePic = {}), t.defaults && (n.roomid = 0, n.limitPlayers = 0, n.deskType = 0, n.smallBet = 0, n.langVersion = 0, n.rulePic = ""), null != e.roomid && e.hasOwnProperty("roomid") && (n.roomid = e.roomid), e.amountLevel && e.amountLevel.length) {
                    n.amountLevel = [];
                    for (var r = 0; r < e.amountLevel.length; ++r) "number" == typeof e.amountLevel[r] ? n.amountLevel[r] = t.longs === String ? String(e.amountLevel[r]) : e.amountLevel[r] : n.amountLevel[r] = t.longs === String ? m.Long.prototype.toString.call(e.amountLevel[r]) : t.longs === Number ? new m.LongBits(e.amountLevel[r].low >>> 0, e.amountLevel[r].high >>> 0).toNumber(!0) : e.amountLevel[r]
                }
                if (e.oddsDetail && e.oddsDetail.length)
                    for (n.oddsDetail = [], r = 0; r < e.oddsDetail.length; ++r) n.oddsDetail[r] = f.cowboy_proto.OddsDetail.toObject(e.oddsDetail[r], t);
                if (null != e.limitPlayers && e.hasOwnProperty("limitPlayers") && (n.limitPlayers = e.limitPlayers), null != e.deskType && e.hasOwnProperty("deskType") && (n.deskType = e.deskType), null != e.smallBet && e.hasOwnProperty("smallBet") && (n.smallBet = e.smallBet), e.pictureCn && e.pictureCn.length)
                    for (n.pictureCn = [], r = 0; r < e.pictureCn.length; ++r) n.pictureCn[r] = e.pictureCn[r];
                if (e.pictureEn && e.pictureEn.length)
                    for (n.pictureEn = [], r = 0; r < e.pictureEn.length; ++r) n.pictureEn[r] = e.pictureEn[r];
                if (e.totalAmountLevel && e.totalAmountLevel.length)
                    for (n.totalAmountLevel = [], r = 0; r < e.totalAmountLevel.length; ++r) "number" == typeof e.totalAmountLevel[r] ? n.totalAmountLevel[r] = t.longs === String ? String(e.totalAmountLevel[r]) : e.totalAmountLevel[r] : n.totalAmountLevel[r] = t.longs === String ? m.Long.prototype.toString.call(e.totalAmountLevel[r]) : t.longs === Number ? new m.LongBits(e.totalAmountLevel[r].low >>> 0, e.totalAmountLevel[r].high >>> 0).toNumber(!0) : e.totalAmountLevel[r];
                if (e.pictureVn && e.pictureVn.length)
                    for (n.pictureVn = [], r = 0; r < e.pictureVn.length; ++r) n.pictureVn[r] = e.pictureVn[r];
                if (e.ruleByLanguage && e.ruleByLanguage.length)
                    for (n.ruleByLanguage = [], r = 0; r < e.ruleByLanguage.length; ++r) n.ruleByLanguage[r] = f.cowboy_proto.LanguageItem.toObject(e.ruleByLanguage[r], t);
                if (null != e.langVersion && e.hasOwnProperty("langVersion") && (n.langVersion = e.langVersion), null != e.rulePic && e.hasOwnProperty("rulePic") && (n.rulePic = e.rulePic), e.toThirdRulePic && (o = Object.keys(e.toThirdRulePic)).length)
                    for (n.toThirdRulePic = {}, r = 0; r < o.length; ++r) n.toThirdRulePic[o[r]] = e.toThirdRulePic[o[r]];
                if (e.plats && e.plats.length)
                    for (n.plats = [], r = 0; r < e.plats.length; ++r) n.plats[r] = e.plats[r];
                return n
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.RoomParam"
            }, e
        }(), l.LanguageItem = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.lang = "", e.prototype.value = "", e.prototype.plat = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.lang && Object.hasOwnProperty.call(e, "lang") && t.uint32(10).string(e.lang), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(18).string(e.value), null != e.plat && Object.hasOwnProperty.call(e, "plat") && t.uint32(24).uint32(e.plat), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.LanguageItem; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.lang = e.string();
                            break;
                        case 2:
                            n.value = e.string();
                            break;
                        case 3:
                            n.plat = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.lang && e.hasOwnProperty("lang") && !m.isString(e.lang) ? "lang: string expected" : null != e.value && e.hasOwnProperty("value") && !m.isString(e.value) ? "value: string expected" : null != e.plat && e.hasOwnProperty("plat") && !m.isInteger(e.plat) ? "plat: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.LanguageItem) return e;
                var t = new f.cowboy_proto.LanguageItem;
                return null != e.lang && (t.lang = String(e.lang)), null != e.value && (t.value = String(e.value)), null != e.plat && (t.plat = e.plat >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.lang = "", o.value = "", o.plat = 0), null != e.lang && e.hasOwnProperty("lang") && (o.lang = e.lang), null != e.value && e.hasOwnProperty("value") && (o.value = e.value), null != e.plat && e.hasOwnProperty("plat") && (o.plat = e.plat), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.LanguageItem"
            }, e
        }(), l.ZoneLimit = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.zone = 0, e.prototype.limit = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.zone && Object.hasOwnProperty.call(e, "zone") && t.uint32(8).int32(e.zone), null != e.limit && Object.hasOwnProperty.call(e, "limit") && t.uint32(16).uint64(e.limit), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.ZoneLimit; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.zone = e.int32();
                            break;
                        case 2:
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
                if (null != e.zone && e.hasOwnProperty("zone")) switch (e.zone) {
                    default:
                        return "zone: enum value expected";
                    case 0:
                    case 10:
                    case 20:
                    case 30:
                }
                return null != e.limit && e.hasOwnProperty("limit") && !(m.isInteger(e.limit) || e.limit && m.isInteger(e.limit.low) && m.isInteger(e.limit.high)) ? "limit: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.ZoneLimit) return e;
                var t = new f.cowboy_proto.ZoneLimit;
                switch (e.zone) {
                    default:
                        if ("number" == typeof e.zone) {
                            t.zone = e.zone;
                            break
                        }
                        break;
                    case "ZONE_DUMMY":
                    case 0:
                        t.zone = 0;
                        break;
                    case "WIN":
                    case 10:
                        t.zone = 10;
                        break;
                    case "HOLE_CARD":
                    case 20:
                        t.zone = 20;
                        break;
                    case "FIVE_CARD":
                    case 30:
                        t.zone = 30
                }
                return null != e.limit && (m.Long ? (t.limit = m.Long.fromValue(e.limit)).unsigned = !0 : "string" == typeof e.limit ? t.limit = parseInt(e.limit, 10) : "number" == typeof e.limit ? t.limit = e.limit : "object" == typeof e.limit && (t.limit = new m.LongBits(e.limit.low >>> 0, e.limit.high >>> 0).toNumber(!0))), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults)
                    if (o.zone = t.enums === String ? "ZONE_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.limit = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.limit = t.longs === String ? "0" : 0;
                return null != e.zone && e.hasOwnProperty("zone") && (o.zone = t.enums === String ? void 0 === f.cowboy_proto.BetZone[e.zone] ? e.zone : f.cowboy_proto.BetZone[e.zone] : e.zone), null != e.limit && e.hasOwnProperty("limit") && ("number" == typeof e.limit ? o.limit = t.longs === String ? String(e.limit) : e.limit : o.limit = t.longs === String ? m.Long.prototype.toString.call(e.limit) : t.longs === Number ? new m.LongBits(e.limit.low >>> 0, e.limit.high >>> 0).toNumber(!0) : e.limit), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.ZoneLimit"
            }, e
        }(), l.OddsDetail = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.zone = 0, e.prototype.option = 0, e.prototype.odds = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.limit = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.zone && Object.hasOwnProperty.call(e, "zone") && t.uint32(8).int32(e.zone), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(16).int32(e.option), null != e.odds && Object.hasOwnProperty.call(e, "odds") && t.uint32(24).uint64(e.odds), null != e.limit && Object.hasOwnProperty.call(e, "limit") && t.uint32(32).uint64(e.limit), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.OddsDetail; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.zone = e.int32();
                            break;
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
                if (null != e.zone && e.hasOwnProperty("zone")) switch (e.zone) {
                    default:
                        return "zone: enum value expected";
                    case 0:
                    case 10:
                    case 20:
                    case 30:
                }
                if (null != e.option && e.hasOwnProperty("option")) switch (e.option) {
                    default:
                        return "option: enum value expected";
                    case 0:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 199:
                    case 200:
                    case 203:
                    case 205:
                    case 206:
                    case 299:
                    case 300:
                    case 301:
                    case 302:
                    case 303:
                    case 304:
                    case 305:
                    case 399:
                }
                return null != e.odds && e.hasOwnProperty("odds") && !(m.isInteger(e.odds) || e.odds && m.isInteger(e.odds.low) && m.isInteger(e.odds.high)) ? "odds: integer|Long expected" : null != e.limit && e.hasOwnProperty("limit") && !(m.isInteger(e.limit) || e.limit && m.isInteger(e.limit.low) && m.isInteger(e.limit.high)) ? "limit: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.OddsDetail) return e;
                var t = new f.cowboy_proto.OddsDetail;
                switch (e.zone) {
                    default:
                        if ("number" == typeof e.zone) {
                            t.zone = e.zone;
                            break
                        }
                        break;
                    case "ZONE_DUMMY":
                    case 0:
                        t.zone = 0;
                        break;
                    case "WIN":
                    case 10:
                        t.zone = 10;
                        break;
                    case "HOLE_CARD":
                    case 20:
                        t.zone = 20;
                        break;
                    case "FIVE_CARD":
                    case 30:
                        t.zone = 30
                }
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
                    case "WIN_BEGIN":
                    case 100:
                        t.option = 100;
                        break;
                    case "RED_WIN":
                    case 101:
                        t.option = 101;
                        break;
                    case "BLUE_WIN":
                    case 102:
                        t.option = 102;
                        break;
                    case "EQUAL":
                    case 103:
                        t.option = 103;
                        break;
                    case "WIN_END":
                    case 199:
                        t.option = 199;
                        break;
                    case "HOLE_BEGIN":
                    case 200:
                        t.option = 200;
                        break;
                    case "HOLE_SAME":
                    case 203:
                        t.option = 203;
                        break;
                    case "HOLE_A":
                    case 205:
                        t.option = 205;
                        break;
                    case "HOLE_3_TONG_SAME_SHUN":
                    case 206:
                        t.option = 206;
                        break;
                    case "HOLE_END":
                    case 299:
                        t.option = 299;
                        break;
                    case "FIVE_BEGIN":
                    case 300:
                        t.option = 300;
                        break;
                    case "FIVE_NONE_1DUI":
                    case 301:
                        t.option = 301;
                        break;
                    case "FIVE_2DUI":
                    case 302:
                        t.option = 302;
                        break;
                    case "FIVE_3_SHUN_TONG_HUA":
                    case 303:
                        t.option = 303;
                        break;
                    case "FIVE_3_2":
                    case 304:
                        t.option = 304;
                        break;
                    case "FIVE_KING_TONG_HUA_SHUN_4":
                    case 305:
                        t.option = 305;
                        break;
                    case "FIVE_END":
                    case 399:
                        t.option = 399
                }
                return null != e.odds && (m.Long ? (t.odds = m.Long.fromValue(e.odds)).unsigned = !0 : "string" == typeof e.odds ? t.odds = parseInt(e.odds, 10) : "number" == typeof e.odds ? t.odds = e.odds : "object" == typeof e.odds && (t.odds = new m.LongBits(e.odds.low >>> 0, e.odds.high >>> 0).toNumber(!0))), null != e.limit && (m.Long ? (t.limit = m.Long.fromValue(e.limit)).unsigned = !0 : "string" == typeof e.limit ? t.limit = parseInt(e.limit, 10) : "number" == typeof e.limit ? t.limit = e.limit : "object" == typeof e.limit && (t.limit = new m.LongBits(e.limit.low >>> 0, e.limit.high >>> 0).toNumber(!0))), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.zone = t.enums === String ? "ZONE_DUMMY" : 0, o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.odds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.odds = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !0), o.limit = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.limit = t.longs === String ? "0" : 0
                }
                return null != e.zone && e.hasOwnProperty("zone") && (o.zone = t.enums === String ? void 0 === f.cowboy_proto.BetZone[e.zone] ? e.zone : f.cowboy_proto.BetZone[e.zone] : e.zone), null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.cowboy_proto.BetZoneOption[e.option] ? e.option : f.cowboy_proto.BetZoneOption[e.option] : e.option), null != e.odds && e.hasOwnProperty("odds") && ("number" == typeof e.odds ? o.odds = t.longs === String ? String(e.odds) : e.odds : o.odds = t.longs === String ? m.Long.prototype.toString.call(e.odds) : t.longs === Number ? new m.LongBits(e.odds.low >>> 0, e.odds.high >>> 0).toNumber(!0) : e.odds), null != e.limit && e.hasOwnProperty("limit") && ("number" == typeof e.limit ? o.limit = t.longs === String ? String(e.limit) : e.limit : o.limit = t.longs === String ? m.Long.prototype.toString.call(e.limit) : t.longs === Number ? new m.LongBits(e.limit.low >>> 0, e.limit.high >>> 0).toNumber(!0) : e.limit), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.OddsDetail"
            }, e
        }(), l.OptionLimit = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.OptionLimit; e.pos < o;) {
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
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 199:
                    case 200:
                    case 203:
                    case 205:
                    case 206:
                    case 299:
                    case 300:
                    case 301:
                    case 302:
                    case 303:
                    case 304:
                    case 305:
                    case 399:
                }
                return null != e.limitAmount && e.hasOwnProperty("limitAmount") && !(m.isInteger(e.limitAmount) || e.limitAmount && m.isInteger(e.limitAmount.low) && m.isInteger(e.limitAmount.high)) ? "limitAmount: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.OptionLimit) return e;
                var t = new f.cowboy_proto.OptionLimit;
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
                    case "WIN_BEGIN":
                    case 100:
                        t.option = 100;
                        break;
                    case "RED_WIN":
                    case 101:
                        t.option = 101;
                        break;
                    case "BLUE_WIN":
                    case 102:
                        t.option = 102;
                        break;
                    case "EQUAL":
                    case 103:
                        t.option = 103;
                        break;
                    case "WIN_END":
                    case 199:
                        t.option = 199;
                        break;
                    case "HOLE_BEGIN":
                    case 200:
                        t.option = 200;
                        break;
                    case "HOLE_SAME":
                    case 203:
                        t.option = 203;
                        break;
                    case "HOLE_A":
                    case 205:
                        t.option = 205;
                        break;
                    case "HOLE_3_TONG_SAME_SHUN":
                    case 206:
                        t.option = 206;
                        break;
                    case "HOLE_END":
                    case 299:
                        t.option = 299;
                        break;
                    case "FIVE_BEGIN":
                    case 300:
                        t.option = 300;
                        break;
                    case "FIVE_NONE_1DUI":
                    case 301:
                        t.option = 301;
                        break;
                    case "FIVE_2DUI":
                    case 302:
                        t.option = 302;
                        break;
                    case "FIVE_3_SHUN_TONG_HUA":
                    case 303:
                        t.option = 303;
                        break;
                    case "FIVE_3_2":
                    case 304:
                        t.option = 304;
                        break;
                    case "FIVE_KING_TONG_HUA_SHUN_4":
                    case 305:
                        t.option = 305;
                        break;
                    case "FIVE_END":
                    case 399:
                        t.option = 399
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
                return null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.cowboy_proto.BetZoneOption[e.option] ? e.option : f.cowboy_proto.BetZoneOption[e.option] : e.option), null != e.limitAmount && e.hasOwnProperty("limitAmount") && ("number" == typeof e.limitAmount ? o.limitAmount = t.longs === String ? String(e.limitAmount) : e.limitAmount : o.limitAmount = t.longs === String ? m.Long.prototype.toString.call(e.limitAmount) : t.longs === Number ? new m.LongBits(e.limitAmount.low >>> 0, e.limitAmount.high >>> 0).toNumber(!0) : e.limitAmount), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.OptionLimit"
            }, e
        }(), l.GameListReq = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.GameListReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.cowboy_proto.GameListReq ? e : new f.cowboy_proto.GameListReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.GameListReq"
            }, e
        }(), l.GameListResp = function() {
            function e(e) {
                if (this.gameList = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.gameList = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.gameList && e.gameList.length)
                    for (var o = 0; o < e.gameList.length; ++o) f.cowboy_proto.GameSnapShot.encode(e.gameList[o], t.uint32(10).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.GameListResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.gameList && n.gameList.length || (n.gameList = []), n.gameList.push(f.cowboy_proto.GameSnapShot.decode(e, e.uint32()));
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
                        var o = f.cowboy_proto.GameSnapShot.verify(e.gameList[t]);
                        if (o) return "gameList." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.GameListResp) return e;
                var t = new f.cowboy_proto.GameListResp;
                if (e.gameList) {
                    if (!Array.isArray(e.gameList)) throw TypeError(".cowboy_proto.GameListResp.gameList: array expected");
                    t.gameList = [];
                    for (var o = 0; o < e.gameList.length; ++o) {
                        if ("object" != typeof e.gameList[o]) throw TypeError(".cowboy_proto.GameListResp.gameList: object expected");
                        t.gameList[o] = f.cowboy_proto.GameSnapShot.fromObject(e.gameList[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.gameList = []), e.gameList && e.gameList.length) {
                    o.gameList = [];
                    for (var n = 0; n < e.gameList.length; ++n) o.gameList[n] = f.cowboy_proto.GameSnapShot.toObject(e.gameList[n], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.GameListResp"
            }, e
        }(), l.GameSnapShot = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.param = null, e.prototype.playerNum = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.param && Object.hasOwnProperty.call(e, "param") && f.cowboy_proto.RoomParam.encode(e.param, t.uint32(10).fork()).ldelim(), null != e.playerNum && Object.hasOwnProperty.call(e, "playerNum") && t.uint32(16).int32(e.playerNum), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.GameSnapShot; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.param = f.cowboy_proto.RoomParam.decode(e, e.uint32());
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
                    var t = f.cowboy_proto.RoomParam.verify(e.param);
                    if (t) return "param." + t
                }
                return null != e.playerNum && e.hasOwnProperty("playerNum") && !m.isInteger(e.playerNum) ? "playerNum: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.GameSnapShot) return e;
                var t = new f.cowboy_proto.GameSnapShot;
                if (null != e.param) {
                    if ("object" != typeof e.param) throw TypeError(".cowboy_proto.GameSnapShot.param: object expected");
                    t.param = f.cowboy_proto.RoomParam.fromObject(e.param)
                }
                return null != e.playerNum && (t.playerNum = 0 | e.playerNum), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.param = null, o.playerNum = 0), null != e.param && e.hasOwnProperty("param") && (o.param = f.cowboy_proto.RoomParam.toObject(e.param, t)), null != e.playerNum && e.hasOwnProperty("playerNum") && (o.playerNum = e.playerNum), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.GameSnapShot"
            }, e
        }(), l.GameDataSynNotify = function() {
            function e(e) {
                if (this.optionInfo = [], this.lastResult = [], this.players = [], this.publicCards = [], this.optionResults = [], this.betCoinOption = [], this.AutoBetCountList = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.param = null, e.prototype.optionInfo = m.emptyArray, e.prototype.lastResult = m.emptyArray, e.prototype.curState = 0, e.prototype.nextRoundEndStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.players = m.emptyArray, e.prototype.publicCards = m.emptyArray, e.prototype.canAuto = !1, e.prototype.cachedNotifyMsg = null, e.prototype.leftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.openRoads = !1, e.prototype.optionResults = m.emptyArray, e.prototype.betCoinOption = m.emptyArray, e.prototype.autoLevel = 0, e.prototype.usedAutoBetCount = 0, e.prototype.selectAutoBetCount = 0, e.prototype.AutoBetCountList = m.emptyArray, e.prototype.canAdvanceAuto = !1, e.prototype.BetButtonLimitAmount = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.CalmDownLeftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.CalmDownDeadLineTimeStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.reachLimitBet = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.param && Object.hasOwnProperty.call(e, "param") && f.cowboy_proto.RoomParam.encode(e.param, t.uint32(10).fork()).ldelim(), null != e.optionInfo && e.optionInfo.length)
                    for (var o = 0; o < e.optionInfo.length; ++o) f.cowboy_proto.BetOptionInfo.encode(e.optionInfo[o], t.uint32(18).fork()).ldelim();
                if (null != e.lastResult && e.lastResult.length) {
                    for (t.uint32(26).fork(), o = 0; o < e.lastResult.length; ++o) t.int32(e.lastResult[o]);
                    t.ldelim()
                }
                if (null != e.curState && Object.hasOwnProperty.call(e, "curState") && t.uint32(32).int32(e.curState), null != e.nextRoundEndStamp && Object.hasOwnProperty.call(e, "nextRoundEndStamp") && t.uint32(40).int64(e.nextRoundEndStamp), null != e.players && e.players.length)
                    for (o = 0; o < e.players.length; ++o) f.cowboy_proto.GamePlayer.encode(e.players[o], t.uint32(50).fork()).ldelim();
                if (null != e.publicCards && e.publicCards.length)
                    for (o = 0; o < e.publicCards.length; ++o) f.cowboy_proto.CardItem.encode(e.publicCards[o], t.uint32(58).fork()).ldelim();
                if (null != e.canAuto && Object.hasOwnProperty.call(e, "canAuto") && t.uint32(64).bool(e.canAuto), null != e.cachedNotifyMsg && Object.hasOwnProperty.call(e, "cachedNotifyMsg") && f.cowboy_proto.GameRoundEndNotify.encode(e.cachedNotifyMsg, t.uint32(74).fork()).ldelim(), null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(80).int64(e.leftSeconds), null != e.openRoads && Object.hasOwnProperty.call(e, "openRoads") && t.uint32(88).bool(e.openRoads), null != e.optionResults && e.optionResults.length)
                    for (o = 0; o < e.optionResults.length; ++o) f.cowboy_proto.OptionResults.encode(e.optionResults[o], t.uint32(98).fork()).ldelim();
                if (null != e.betCoinOption && e.betCoinOption.length) {
                    for (t.uint32(106).fork(), o = 0; o < e.betCoinOption.length; ++o) t.uint64(e.betCoinOption[o]);
                    t.ldelim()
                }
                if (null != e.autoLevel && Object.hasOwnProperty.call(e, "autoLevel") && t.uint32(112).int32(e.autoLevel), null != e.usedAutoBetCount && Object.hasOwnProperty.call(e, "usedAutoBetCount") && t.uint32(120).int32(e.usedAutoBetCount), null != e.selectAutoBetCount && Object.hasOwnProperty.call(e, "selectAutoBetCount") && t.uint32(128).int32(e.selectAutoBetCount), null != e.AutoBetCountList && e.AutoBetCountList.length) {
                    for (t.uint32(138).fork(), o = 0; o < e.AutoBetCountList.length; ++o) t.int32(e.AutoBetCountList[o]);
                    t.ldelim()
                }
                return null != e.canAdvanceAuto && Object.hasOwnProperty.call(e, "canAdvanceAuto") && t.uint32(144).bool(e.canAdvanceAuto), null != e.BetButtonLimitAmount && Object.hasOwnProperty.call(e, "BetButtonLimitAmount") && t.uint32(152).int64(e.BetButtonLimitAmount), null != e.CalmDownLeftSeconds && Object.hasOwnProperty.call(e, "CalmDownLeftSeconds") && t.uint32(160).int64(e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && Object.hasOwnProperty.call(e, "CalmDownDeadLineTimeStamp") && t.uint32(168).int64(e.CalmDownDeadLineTimeStamp), null != e.reachLimitBet && Object.hasOwnProperty.call(e, "reachLimitBet") && t.uint32(176).bool(e.reachLimitBet), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.GameDataSynNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.param = f.cowboy_proto.RoomParam.decode(e, e.uint32());
                            break;
                        case 2:
                            n.optionInfo && n.optionInfo.length || (n.optionInfo = []), n.optionInfo.push(f.cowboy_proto.BetOptionInfo.decode(e, e.uint32()));
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
                            n.players && n.players.length || (n.players = []), n.players.push(f.cowboy_proto.GamePlayer.decode(e, e.uint32()));
                            break;
                        case 7:
                            n.publicCards && n.publicCards.length || (n.publicCards = []), n.publicCards.push(f.cowboy_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 8:
                            n.canAuto = e.bool();
                            break;
                        case 9:
                            n.cachedNotifyMsg = f.cowboy_proto.GameRoundEndNotify.decode(e, e.uint32());
                            break;
                        case 10:
                            n.leftSeconds = e.int64();
                            break;
                        case 11:
                            n.openRoads = e.bool();
                            break;
                        case 12:
                            n.optionResults && n.optionResults.length || (n.optionResults = []), n.optionResults.push(f.cowboy_proto.OptionResults.decode(e, e.uint32()));
                            break;
                        case 13:
                            if (n.betCoinOption && n.betCoinOption.length || (n.betCoinOption = []), 2 == (7 & r))
                                for (a = e.uint32() + e.pos; e.pos < a;) n.betCoinOption.push(e.uint64());
                            else n.betCoinOption.push(e.uint64());
                            break;
                        case 14:
                            n.autoLevel = e.int32();
                            break;
                        case 15:
                            n.usedAutoBetCount = e.int32();
                            break;
                        case 16:
                            n.selectAutoBetCount = e.int32();
                            break;
                        case 17:
                            if (n.AutoBetCountList && n.AutoBetCountList.length || (n.AutoBetCountList = []), 2 == (7 & r))
                                for (a = e.uint32() + e.pos; e.pos < a;) n.AutoBetCountList.push(e.int32());
                            else n.AutoBetCountList.push(e.int32());
                            break;
                        case 18:
                            n.canAdvanceAuto = e.bool();
                            break;
                        case 19:
                            n.BetButtonLimitAmount = e.int64();
                            break;
                        case 20:
                            n.CalmDownLeftSeconds = e.int64();
                            break;
                        case 21:
                            n.CalmDownDeadLineTimeStamp = e.int64();
                            break;
                        case 22:
                            n.reachLimitBet = e.bool();
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
                if (null != e.param && e.hasOwnProperty("param") && (o = f.cowboy_proto.RoomParam.verify(e.param))) return "param." + o;
                if (null != e.optionInfo && e.hasOwnProperty("optionInfo")) {
                    if (!Array.isArray(e.optionInfo)) return "optionInfo: array expected";
                    for (var t = 0; t < e.optionInfo.length; ++t)
                        if (o = f.cowboy_proto.BetOptionInfo.verify(e.optionInfo[t])) return "optionInfo." + o
                }
                if (null != e.lastResult && e.hasOwnProperty("lastResult")) {
                    if (!Array.isArray(e.lastResult)) return "lastResult: array expected";
                    for (t = 0; t < e.lastResult.length; ++t) switch (e.lastResult[t]) {
                        default:
                            return "lastResult: enum value[] expected";
                        case 0:
                        case 100:
                        case 101:
                        case 102:
                        case 103:
                        case 199:
                        case 200:
                        case 203:
                        case 205:
                        case 206:
                        case 299:
                        case 300:
                        case 301:
                        case 302:
                        case 303:
                        case 304:
                        case 305:
                        case 399:
                    }
                }
                if (null != e.curState && e.hasOwnProperty("curState")) switch (e.curState) {
                    default:
                        return "curState: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                }
                if (null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && !(m.isInteger(e.nextRoundEndStamp) || e.nextRoundEndStamp && m.isInteger(e.nextRoundEndStamp.low) && m.isInteger(e.nextRoundEndStamp.high))) return "nextRoundEndStamp: integer|Long expected";
                if (null != e.players && e.hasOwnProperty("players")) {
                    if (!Array.isArray(e.players)) return "players: array expected";
                    for (t = 0; t < e.players.length; ++t)
                        if (o = f.cowboy_proto.GamePlayer.verify(e.players[t])) return "players." + o
                }
                if (null != e.publicCards && e.hasOwnProperty("publicCards")) {
                    if (!Array.isArray(e.publicCards)) return "publicCards: array expected";
                    for (t = 0; t < e.publicCards.length; ++t)
                        if (o = f.cowboy_proto.CardItem.verify(e.publicCards[t])) return "publicCards." + o
                }
                if (null != e.canAuto && e.hasOwnProperty("canAuto") && "boolean" != typeof e.canAuto) return "canAuto: boolean expected";
                if (null != e.cachedNotifyMsg && e.hasOwnProperty("cachedNotifyMsg") && (o = f.cowboy_proto.GameRoundEndNotify.verify(e.cachedNotifyMsg))) return "cachedNotifyMsg." + o;
                if (null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(m.isInteger(e.leftSeconds) || e.leftSeconds && m.isInteger(e.leftSeconds.low) && m.isInteger(e.leftSeconds.high))) return "leftSeconds: integer|Long expected";
                if (null != e.openRoads && e.hasOwnProperty("openRoads") && "boolean" != typeof e.openRoads) return "openRoads: boolean expected";
                if (null != e.optionResults && e.hasOwnProperty("optionResults")) {
                    if (!Array.isArray(e.optionResults)) return "optionResults: array expected";
                    for (t = 0; t < e.optionResults.length; ++t) {
                        var o;
                        if (o = f.cowboy_proto.OptionResults.verify(e.optionResults[t])) return "optionResults." + o
                    }
                }
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
                if (null != e.usedAutoBetCount && e.hasOwnProperty("usedAutoBetCount") && !m.isInteger(e.usedAutoBetCount)) return "usedAutoBetCount: integer expected";
                if (null != e.selectAutoBetCount && e.hasOwnProperty("selectAutoBetCount") && !m.isInteger(e.selectAutoBetCount)) return "selectAutoBetCount: integer expected";
                if (null != e.AutoBetCountList && e.hasOwnProperty("AutoBetCountList")) {
                    if (!Array.isArray(e.AutoBetCountList)) return "AutoBetCountList: array expected";
                    for (t = 0; t < e.AutoBetCountList.length; ++t)
                        if (!m.isInteger(e.AutoBetCountList[t])) return "AutoBetCountList: integer[] expected"
                }
                return null != e.canAdvanceAuto && e.hasOwnProperty("canAdvanceAuto") && "boolean" != typeof e.canAdvanceAuto ? "canAdvanceAuto: boolean expected" : null != e.BetButtonLimitAmount && e.hasOwnProperty("BetButtonLimitAmount") && !(m.isInteger(e.BetButtonLimitAmount) || e.BetButtonLimitAmount && m.isInteger(e.BetButtonLimitAmount.low) && m.isInteger(e.BetButtonLimitAmount.high)) ? "BetButtonLimitAmount: integer|Long expected" : null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && !(m.isInteger(e.CalmDownLeftSeconds) || e.CalmDownLeftSeconds && m.isInteger(e.CalmDownLeftSeconds.low) && m.isInteger(e.CalmDownLeftSeconds.high)) ? "CalmDownLeftSeconds: integer|Long expected" : null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && !(m.isInteger(e.CalmDownDeadLineTimeStamp) || e.CalmDownDeadLineTimeStamp && m.isInteger(e.CalmDownDeadLineTimeStamp.low) && m.isInteger(e.CalmDownDeadLineTimeStamp.high)) ? "CalmDownDeadLineTimeStamp: integer|Long expected" : null != e.reachLimitBet && e.hasOwnProperty("reachLimitBet") && "boolean" != typeof e.reachLimitBet ? "reachLimitBet: boolean expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.GameDataSynNotify) return e;
                var t = new f.cowboy_proto.GameDataSynNotify;
                if (null != e.param) {
                    if ("object" != typeof e.param) throw TypeError(".cowboy_proto.GameDataSynNotify.param: object expected");
                    t.param = f.cowboy_proto.RoomParam.fromObject(e.param)
                }
                if (e.optionInfo) {
                    if (!Array.isArray(e.optionInfo)) throw TypeError(".cowboy_proto.GameDataSynNotify.optionInfo: array expected");
                    t.optionInfo = [];
                    for (var o = 0; o < e.optionInfo.length; ++o) {
                        if ("object" != typeof e.optionInfo[o]) throw TypeError(".cowboy_proto.GameDataSynNotify.optionInfo: object expected");
                        t.optionInfo[o] = f.cowboy_proto.BetOptionInfo.fromObject(e.optionInfo[o])
                    }
                }
                if (e.lastResult) {
                    if (!Array.isArray(e.lastResult)) throw TypeError(".cowboy_proto.GameDataSynNotify.lastResult: array expected");
                    for (t.lastResult = [], o = 0; o < e.lastResult.length; ++o) switch (e.lastResult[o]) {
                        default:
                            if ("number" == typeof e.lastResult[o]) {
                                t.lastResult[o] = e.lastResult[o];
                                break
                            }
                        case "BetZoneOption_DUMMY":
                        case 0:
                            t.lastResult[o] = 0;
                            break;
                        case "WIN_BEGIN":
                        case 100:
                            t.lastResult[o] = 100;
                            break;
                        case "RED_WIN":
                        case 101:
                            t.lastResult[o] = 101;
                            break;
                        case "BLUE_WIN":
                        case 102:
                            t.lastResult[o] = 102;
                            break;
                        case "EQUAL":
                        case 103:
                            t.lastResult[o] = 103;
                            break;
                        case "WIN_END":
                        case 199:
                            t.lastResult[o] = 199;
                            break;
                        case "HOLE_BEGIN":
                        case 200:
                            t.lastResult[o] = 200;
                            break;
                        case "HOLE_SAME":
                        case 203:
                            t.lastResult[o] = 203;
                            break;
                        case "HOLE_A":
                        case 205:
                            t.lastResult[o] = 205;
                            break;
                        case "HOLE_3_TONG_SAME_SHUN":
                        case 206:
                            t.lastResult[o] = 206;
                            break;
                        case "HOLE_END":
                        case 299:
                            t.lastResult[o] = 299;
                            break;
                        case "FIVE_BEGIN":
                        case 300:
                            t.lastResult[o] = 300;
                            break;
                        case "FIVE_NONE_1DUI":
                        case 301:
                            t.lastResult[o] = 301;
                            break;
                        case "FIVE_2DUI":
                        case 302:
                            t.lastResult[o] = 302;
                            break;
                        case "FIVE_3_SHUN_TONG_HUA":
                        case 303:
                            t.lastResult[o] = 303;
                            break;
                        case "FIVE_3_2":
                        case 304:
                            t.lastResult[o] = 304;
                            break;
                        case "FIVE_KING_TONG_HUA_SHUN_4":
                        case 305:
                            t.lastResult[o] = 305;
                            break;
                        case "FIVE_END":
                        case 399:
                            t.lastResult[o] = 399
                    }
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
                        t.curState = 4
                }
                if (null != e.nextRoundEndStamp && (m.Long ? (t.nextRoundEndStamp = m.Long.fromValue(e.nextRoundEndStamp)).unsigned = !1 : "string" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = parseInt(e.nextRoundEndStamp, 10) : "number" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = e.nextRoundEndStamp : "object" == typeof e.nextRoundEndStamp && (t.nextRoundEndStamp = new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber())), e.players) {
                    if (!Array.isArray(e.players)) throw TypeError(".cowboy_proto.GameDataSynNotify.players: array expected");
                    for (t.players = [], o = 0; o < e.players.length; ++o) {
                        if ("object" != typeof e.players[o]) throw TypeError(".cowboy_proto.GameDataSynNotify.players: object expected");
                        t.players[o] = f.cowboy_proto.GamePlayer.fromObject(e.players[o])
                    }
                }
                if (e.publicCards) {
                    if (!Array.isArray(e.publicCards)) throw TypeError(".cowboy_proto.GameDataSynNotify.publicCards: array expected");
                    for (t.publicCards = [], o = 0; o < e.publicCards.length; ++o) {
                        if ("object" != typeof e.publicCards[o]) throw TypeError(".cowboy_proto.GameDataSynNotify.publicCards: object expected");
                        t.publicCards[o] = f.cowboy_proto.CardItem.fromObject(e.publicCards[o])
                    }
                }
                if (null != e.canAuto && (t.canAuto = Boolean(e.canAuto)), null != e.cachedNotifyMsg) {
                    if ("object" != typeof e.cachedNotifyMsg) throw TypeError(".cowboy_proto.GameDataSynNotify.cachedNotifyMsg: object expected");
                    t.cachedNotifyMsg = f.cowboy_proto.GameRoundEndNotify.fromObject(e.cachedNotifyMsg)
                }
                if (null != e.leftSeconds && (m.Long ? (t.leftSeconds = m.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), null != e.openRoads && (t.openRoads = Boolean(e.openRoads)), e.optionResults) {
                    if (!Array.isArray(e.optionResults)) throw TypeError(".cowboy_proto.GameDataSynNotify.optionResults: array expected");
                    for (t.optionResults = [], o = 0; o < e.optionResults.length; ++o) {
                        if ("object" != typeof e.optionResults[o]) throw TypeError(".cowboy_proto.GameDataSynNotify.optionResults: object expected");
                        t.optionResults[o] = f.cowboy_proto.OptionResults.fromObject(e.optionResults[o])
                    }
                }
                if (e.betCoinOption) {
                    if (!Array.isArray(e.betCoinOption)) throw TypeError(".cowboy_proto.GameDataSynNotify.betCoinOption: array expected");
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
                if (null != e.usedAutoBetCount && (t.usedAutoBetCount = 0 | e.usedAutoBetCount), null != e.selectAutoBetCount && (t.selectAutoBetCount = 0 | e.selectAutoBetCount), e.AutoBetCountList) {
                    if (!Array.isArray(e.AutoBetCountList)) throw TypeError(".cowboy_proto.GameDataSynNotify.AutoBetCountList: array expected");
                    for (t.AutoBetCountList = [], o = 0; o < e.AutoBetCountList.length; ++o) t.AutoBetCountList[o] = 0 | e.AutoBetCountList[o]
                }
                return null != e.canAdvanceAuto && (t.canAdvanceAuto = Boolean(e.canAdvanceAuto)), null != e.BetButtonLimitAmount && (m.Long ? (t.BetButtonLimitAmount = m.Long.fromValue(e.BetButtonLimitAmount)).unsigned = !1 : "string" == typeof e.BetButtonLimitAmount ? t.BetButtonLimitAmount = parseInt(e.BetButtonLimitAmount, 10) : "number" == typeof e.BetButtonLimitAmount ? t.BetButtonLimitAmount = e.BetButtonLimitAmount : "object" == typeof e.BetButtonLimitAmount && (t.BetButtonLimitAmount = new m.LongBits(e.BetButtonLimitAmount.low >>> 0, e.BetButtonLimitAmount.high >>> 0).toNumber())), null != e.CalmDownLeftSeconds && (m.Long ? (t.CalmDownLeftSeconds = m.Long.fromValue(e.CalmDownLeftSeconds)).unsigned = !1 : "string" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = parseInt(e.CalmDownLeftSeconds, 10) : "number" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = e.CalmDownLeftSeconds : "object" == typeof e.CalmDownLeftSeconds && (t.CalmDownLeftSeconds = new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber())), null != e.CalmDownDeadLineTimeStamp && (m.Long ? (t.CalmDownDeadLineTimeStamp = m.Long.fromValue(e.CalmDownDeadLineTimeStamp)).unsigned = !1 : "string" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = parseInt(e.CalmDownDeadLineTimeStamp, 10) : "number" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = e.CalmDownDeadLineTimeStamp : "object" == typeof e.CalmDownDeadLineTimeStamp && (t.CalmDownDeadLineTimeStamp = new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber())), null != e.reachLimitBet && (t.reachLimitBet = Boolean(e.reachLimitBet)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.optionInfo = [], o.lastResult = [], o.players = [], o.publicCards = [], o.optionResults = [], o.betCoinOption = [], o.AutoBetCountList = []), t.defaults) {
                    if (o.param = null, o.curState = t.enums === String ? "RoundState_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.nextRoundEndStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.nextRoundEndStamp = t.longs === String ? "0" : 0;
                    o.canAuto = !1, o.cachedNotifyMsg = null, m.Long ? (n = new m.Long(0, 0, !1), o.leftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.leftSeconds = t.longs === String ? "0" : 0, o.openRoads = !1, o.autoLevel = t.enums === String ? "Level_Normal" : 0, o.usedAutoBetCount = 0, o.selectAutoBetCount = 0, o.canAdvanceAuto = !1, m.Long ? (n = new m.Long(0, 0, !1), o.BetButtonLimitAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.BetButtonLimitAmount = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !1), o.CalmDownLeftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.CalmDownLeftSeconds = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !1), o.CalmDownDeadLineTimeStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.CalmDownDeadLineTimeStamp = t.longs === String ? "0" : 0, o.reachLimitBet = !1
                }
                if (null != e.param && e.hasOwnProperty("param") && (o.param = f.cowboy_proto.RoomParam.toObject(e.param, t)), e.optionInfo && e.optionInfo.length) {
                    o.optionInfo = [];
                    for (var r = 0; r < e.optionInfo.length; ++r) o.optionInfo[r] = f.cowboy_proto.BetOptionInfo.toObject(e.optionInfo[r], t)
                }
                if (e.lastResult && e.lastResult.length)
                    for (o.lastResult = [], r = 0; r < e.lastResult.length; ++r) o.lastResult[r] = t.enums === String ? void 0 === f.cowboy_proto.BetZoneOption[e.lastResult[r]] ? e.lastResult[r] : f.cowboy_proto.BetZoneOption[e.lastResult[r]] : e.lastResult[r];
                if (null != e.curState && e.hasOwnProperty("curState") && (o.curState = t.enums === String ? void 0 === f.cowboy_proto.RoundState[e.curState] ? e.curState : f.cowboy_proto.RoundState[e.curState] : e.curState), null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && ("number" == typeof e.nextRoundEndStamp ? o.nextRoundEndStamp = t.longs === String ? String(e.nextRoundEndStamp) : e.nextRoundEndStamp : o.nextRoundEndStamp = t.longs === String ? m.Long.prototype.toString.call(e.nextRoundEndStamp) : t.longs === Number ? new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber() : e.nextRoundEndStamp), e.players && e.players.length)
                    for (o.players = [], r = 0; r < e.players.length; ++r) o.players[r] = f.cowboy_proto.GamePlayer.toObject(e.players[r], t);
                if (e.publicCards && e.publicCards.length)
                    for (o.publicCards = [], r = 0; r < e.publicCards.length; ++r) o.publicCards[r] = f.cowboy_proto.CardItem.toObject(e.publicCards[r], t);
                if (null != e.canAuto && e.hasOwnProperty("canAuto") && (o.canAuto = e.canAuto), null != e.cachedNotifyMsg && e.hasOwnProperty("cachedNotifyMsg") && (o.cachedNotifyMsg = f.cowboy_proto.GameRoundEndNotify.toObject(e.cachedNotifyMsg, t)), null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? o.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : o.leftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), null != e.openRoads && e.hasOwnProperty("openRoads") && (o.openRoads = e.openRoads), e.optionResults && e.optionResults.length)
                    for (o.optionResults = [], r = 0; r < e.optionResults.length; ++r) o.optionResults[r] = f.cowboy_proto.OptionResults.toObject(e.optionResults[r], t);
                if (e.betCoinOption && e.betCoinOption.length)
                    for (o.betCoinOption = [], r = 0; r < e.betCoinOption.length; ++r) "number" == typeof e.betCoinOption[r] ? o.betCoinOption[r] = t.longs === String ? String(e.betCoinOption[r]) : e.betCoinOption[r] : o.betCoinOption[r] = t.longs === String ? m.Long.prototype.toString.call(e.betCoinOption[r]) : t.longs === Number ? new m.LongBits(e.betCoinOption[r].low >>> 0, e.betCoinOption[r].high >>> 0).toNumber(!0) : e.betCoinOption[r];
                if (null != e.autoLevel && e.hasOwnProperty("autoLevel") && (o.autoLevel = t.enums === String ? void 0 === f.cowboy_proto.AutoBetLevel[e.autoLevel] ? e.autoLevel : f.cowboy_proto.AutoBetLevel[e.autoLevel] : e.autoLevel), null != e.usedAutoBetCount && e.hasOwnProperty("usedAutoBetCount") && (o.usedAutoBetCount = e.usedAutoBetCount), null != e.selectAutoBetCount && e.hasOwnProperty("selectAutoBetCount") && (o.selectAutoBetCount = e.selectAutoBetCount), e.AutoBetCountList && e.AutoBetCountList.length)
                    for (o.AutoBetCountList = [], r = 0; r < e.AutoBetCountList.length; ++r) o.AutoBetCountList[r] = e.AutoBetCountList[r];
                return null != e.canAdvanceAuto && e.hasOwnProperty("canAdvanceAuto") && (o.canAdvanceAuto = e.canAdvanceAuto), null != e.BetButtonLimitAmount && e.hasOwnProperty("BetButtonLimitAmount") && ("number" == typeof e.BetButtonLimitAmount ? o.BetButtonLimitAmount = t.longs === String ? String(e.BetButtonLimitAmount) : e.BetButtonLimitAmount : o.BetButtonLimitAmount = t.longs === String ? m.Long.prototype.toString.call(e.BetButtonLimitAmount) : t.longs === Number ? new m.LongBits(e.BetButtonLimitAmount.low >>> 0, e.BetButtonLimitAmount.high >>> 0).toNumber() : e.BetButtonLimitAmount), null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && ("number" == typeof e.CalmDownLeftSeconds ? o.CalmDownLeftSeconds = t.longs === String ? String(e.CalmDownLeftSeconds) : e.CalmDownLeftSeconds : o.CalmDownLeftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownLeftSeconds) : t.longs === Number ? new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber() : e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && ("number" == typeof e.CalmDownDeadLineTimeStamp ? o.CalmDownDeadLineTimeStamp = t.longs === String ? String(e.CalmDownDeadLineTimeStamp) : e.CalmDownDeadLineTimeStamp : o.CalmDownDeadLineTimeStamp = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownDeadLineTimeStamp) : t.longs === Number ? new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber() : e.CalmDownDeadLineTimeStamp), null != e.reachLimitBet && e.hasOwnProperty("reachLimitBet") && (o.reachLimitBet = e.reachLimitBet), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.GameDataSynNotify"
            }, e
        }(), l.BetOptionInfo = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.BetOptionInfo; e.pos < o;) {
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
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 199:
                    case 200:
                    case 203:
                    case 205:
                    case 206:
                    case 299:
                    case 300:
                    case 301:
                    case 302:
                    case 303:
                    case 304:
                    case 305:
                    case 399:
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
                if (e instanceof f.cowboy_proto.BetOptionInfo) return e;
                var t = new f.cowboy_proto.BetOptionInfo;
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
                    case "WIN_BEGIN":
                    case 100:
                        t.option = 100;
                        break;
                    case "RED_WIN":
                    case 101:
                        t.option = 101;
                        break;
                    case "BLUE_WIN":
                    case 102:
                        t.option = 102;
                        break;
                    case "EQUAL":
                    case 103:
                        t.option = 103;
                        break;
                    case "WIN_END":
                    case 199:
                        t.option = 199;
                        break;
                    case "HOLE_BEGIN":
                    case 200:
                        t.option = 200;
                        break;
                    case "HOLE_SAME":
                    case 203:
                        t.option = 203;
                        break;
                    case "HOLE_A":
                    case 205:
                        t.option = 205;
                        break;
                    case "HOLE_3_TONG_SAME_SHUN":
                    case 206:
                        t.option = 206;
                        break;
                    case "HOLE_END":
                    case 299:
                        t.option = 299;
                        break;
                    case "FIVE_BEGIN":
                    case 300:
                        t.option = 300;
                        break;
                    case "FIVE_NONE_1DUI":
                    case 301:
                        t.option = 301;
                        break;
                    case "FIVE_2DUI":
                    case 302:
                        t.option = 302;
                        break;
                    case "FIVE_3_SHUN_TONG_HUA":
                    case 303:
                        t.option = 303;
                        break;
                    case "FIVE_3_2":
                    case 304:
                        t.option = 304;
                        break;
                    case "FIVE_KING_TONG_HUA_SHUN_4":
                    case 305:
                        t.option = 305;
                        break;
                    case "FIVE_END":
                    case 399:
                        t.option = 399
                }
                if (null != e.selfBet && (m.Long ? (t.selfBet = m.Long.fromValue(e.selfBet)).unsigned = !0 : "string" == typeof e.selfBet ? t.selfBet = parseInt(e.selfBet, 10) : "number" == typeof e.selfBet ? t.selfBet = e.selfBet : "object" == typeof e.selfBet && (t.selfBet = new m.LongBits(e.selfBet.low >>> 0, e.selfBet.high >>> 0).toNumber(!0))), null != e.totalBet && (m.Long ? (t.totalBet = m.Long.fromValue(e.totalBet)).unsigned = !0 : "string" == typeof e.totalBet ? t.totalBet = parseInt(e.totalBet, 10) : "number" == typeof e.totalBet ? t.totalBet = e.totalBet : "object" == typeof e.totalBet && (t.totalBet = new m.LongBits(e.totalBet.low >>> 0, e.totalBet.high >>> 0).toNumber(!0))), e.amount) {
                    if (!Array.isArray(e.amount)) throw TypeError(".cowboy_proto.BetOptionInfo.amount: array expected");
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
                if (null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.cowboy_proto.BetZoneOption[e.option] ? e.option : f.cowboy_proto.BetZoneOption[e.option] : e.option), null != e.selfBet && e.hasOwnProperty("selfBet") && ("number" == typeof e.selfBet ? o.selfBet = t.longs === String ? String(e.selfBet) : e.selfBet : o.selfBet = t.longs === String ? m.Long.prototype.toString.call(e.selfBet) : t.longs === Number ? new m.LongBits(e.selfBet.low >>> 0, e.selfBet.high >>> 0).toNumber(!0) : e.selfBet), null != e.totalBet && e.hasOwnProperty("totalBet") && ("number" == typeof e.totalBet ? o.totalBet = t.longs === String ? String(e.totalBet) : e.totalBet : o.totalBet = t.longs === String ? m.Long.prototype.toString.call(e.totalBet) : t.longs === Number ? new m.LongBits(e.totalBet.low >>> 0, e.totalBet.high >>> 0).toNumber(!0) : e.totalBet), e.amount && e.amount.length) {
                    o.amount = [];
                    for (var r = 0; r < e.amount.length; ++r) "number" == typeof e.amount[r] ? o.amount[r] = t.longs === String ? String(e.amount[r]) : e.amount[r] : o.amount[r] = t.longs === String ? m.Long.prototype.toString.call(e.amount[r]) : t.longs === Number ? new m.LongBits(e.amount[r].low >>> 0, e.amount[r].high >>> 0).toNumber(!0) : e.amount[r]
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.BetOptionInfo"
            }, e
        }(), l.DealNotify = function() {
            function e(e) {
                if (this.players = [], this.lastResult = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.card = null, e.prototype.nextRoundEndStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.players = m.emptyArray, e.prototype.param = null, e.prototype.changed = !1, e.prototype.lastResult = m.emptyArray, e.prototype.leftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.canAuto = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.card && Object.hasOwnProperty.call(e, "card") && f.cowboy_proto.CardItem.encode(e.card, t.uint32(10).fork()).ldelim(), null != e.nextRoundEndStamp && Object.hasOwnProperty.call(e, "nextRoundEndStamp") && t.uint32(16).int64(e.nextRoundEndStamp), null != e.players && e.players.length)
                    for (var o = 0; o < e.players.length; ++o) f.cowboy_proto.GamePlayer.encode(e.players[o], t.uint32(26).fork()).ldelim();
                if (null != e.param && Object.hasOwnProperty.call(e, "param") && f.cowboy_proto.RoomParam.encode(e.param, t.uint32(34).fork()).ldelim(), null != e.changed && Object.hasOwnProperty.call(e, "changed") && t.uint32(40).bool(e.changed), null != e.lastResult && e.lastResult.length) {
                    for (t.uint32(50).fork(), o = 0; o < e.lastResult.length; ++o) t.int32(e.lastResult[o]);
                    t.ldelim()
                }
                return null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(56).int64(e.leftSeconds), null != e.canAuto && Object.hasOwnProperty.call(e, "canAuto") && t.uint32(64).bool(e.canAuto), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.DealNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.card = f.cowboy_proto.CardItem.decode(e, e.uint32());
                            break;
                        case 2:
                            n.nextRoundEndStamp = e.int64();
                            break;
                        case 3:
                            n.players && n.players.length || (n.players = []), n.players.push(f.cowboy_proto.GamePlayer.decode(e, e.uint32()));
                            break;
                        case 4:
                            n.param = f.cowboy_proto.RoomParam.decode(e, e.uint32());
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
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.card && e.hasOwnProperty("card") && (o = f.cowboy_proto.CardItem.verify(e.card))) return "card." + o;
                if (null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && !(m.isInteger(e.nextRoundEndStamp) || e.nextRoundEndStamp && m.isInteger(e.nextRoundEndStamp.low) && m.isInteger(e.nextRoundEndStamp.high))) return "nextRoundEndStamp: integer|Long expected";
                if (null != e.players && e.hasOwnProperty("players")) {
                    if (!Array.isArray(e.players)) return "players: array expected";
                    for (var t = 0; t < e.players.length; ++t) {
                        var o;
                        if (o = f.cowboy_proto.GamePlayer.verify(e.players[t])) return "players." + o
                    }
                }
                if (null != e.param && e.hasOwnProperty("param") && (o = f.cowboy_proto.RoomParam.verify(e.param))) return "param." + o;
                if (null != e.changed && e.hasOwnProperty("changed") && "boolean" != typeof e.changed) return "changed: boolean expected";
                if (null != e.lastResult && e.hasOwnProperty("lastResult")) {
                    if (!Array.isArray(e.lastResult)) return "lastResult: array expected";
                    for (t = 0; t < e.lastResult.length; ++t) switch (e.lastResult[t]) {
                        default:
                            return "lastResult: enum value[] expected";
                        case 0:
                        case 100:
                        case 101:
                        case 102:
                        case 103:
                        case 199:
                        case 200:
                        case 203:
                        case 205:
                        case 206:
                        case 299:
                        case 300:
                        case 301:
                        case 302:
                        case 303:
                        case 304:
                        case 305:
                        case 399:
                    }
                }
                return null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(m.isInteger(e.leftSeconds) || e.leftSeconds && m.isInteger(e.leftSeconds.low) && m.isInteger(e.leftSeconds.high)) ? "leftSeconds: integer|Long expected" : null != e.canAuto && e.hasOwnProperty("canAuto") && "boolean" != typeof e.canAuto ? "canAuto: boolean expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.DealNotify) return e;
                var t = new f.cowboy_proto.DealNotify;
                if (null != e.card) {
                    if ("object" != typeof e.card) throw TypeError(".cowboy_proto.DealNotify.card: object expected");
                    t.card = f.cowboy_proto.CardItem.fromObject(e.card)
                }
                if (null != e.nextRoundEndStamp && (m.Long ? (t.nextRoundEndStamp = m.Long.fromValue(e.nextRoundEndStamp)).unsigned = !1 : "string" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = parseInt(e.nextRoundEndStamp, 10) : "number" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = e.nextRoundEndStamp : "object" == typeof e.nextRoundEndStamp && (t.nextRoundEndStamp = new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber())), e.players) {
                    if (!Array.isArray(e.players)) throw TypeError(".cowboy_proto.DealNotify.players: array expected");
                    t.players = [];
                    for (var o = 0; o < e.players.length; ++o) {
                        if ("object" != typeof e.players[o]) throw TypeError(".cowboy_proto.DealNotify.players: object expected");
                        t.players[o] = f.cowboy_proto.GamePlayer.fromObject(e.players[o])
                    }
                }
                if (null != e.param) {
                    if ("object" != typeof e.param) throw TypeError(".cowboy_proto.DealNotify.param: object expected");
                    t.param = f.cowboy_proto.RoomParam.fromObject(e.param)
                }
                if (null != e.changed && (t.changed = Boolean(e.changed)), e.lastResult) {
                    if (!Array.isArray(e.lastResult)) throw TypeError(".cowboy_proto.DealNotify.lastResult: array expected");
                    for (t.lastResult = [], o = 0; o < e.lastResult.length; ++o) switch (e.lastResult[o]) {
                        default:
                            if ("number" == typeof e.lastResult[o]) {
                                t.lastResult[o] = e.lastResult[o];
                                break
                            }
                        case "BetZoneOption_DUMMY":
                        case 0:
                            t.lastResult[o] = 0;
                            break;
                        case "WIN_BEGIN":
                        case 100:
                            t.lastResult[o] = 100;
                            break;
                        case "RED_WIN":
                        case 101:
                            t.lastResult[o] = 101;
                            break;
                        case "BLUE_WIN":
                        case 102:
                            t.lastResult[o] = 102;
                            break;
                        case "EQUAL":
                        case 103:
                            t.lastResult[o] = 103;
                            break;
                        case "WIN_END":
                        case 199:
                            t.lastResult[o] = 199;
                            break;
                        case "HOLE_BEGIN":
                        case 200:
                            t.lastResult[o] = 200;
                            break;
                        case "HOLE_SAME":
                        case 203:
                            t.lastResult[o] = 203;
                            break;
                        case "HOLE_A":
                        case 205:
                            t.lastResult[o] = 205;
                            break;
                        case "HOLE_3_TONG_SAME_SHUN":
                        case 206:
                            t.lastResult[o] = 206;
                            break;
                        case "HOLE_END":
                        case 299:
                            t.lastResult[o] = 299;
                            break;
                        case "FIVE_BEGIN":
                        case 300:
                            t.lastResult[o] = 300;
                            break;
                        case "FIVE_NONE_1DUI":
                        case 301:
                            t.lastResult[o] = 301;
                            break;
                        case "FIVE_2DUI":
                        case 302:
                            t.lastResult[o] = 302;
                            break;
                        case "FIVE_3_SHUN_TONG_HUA":
                        case 303:
                            t.lastResult[o] = 303;
                            break;
                        case "FIVE_3_2":
                        case 304:
                            t.lastResult[o] = 304;
                            break;
                        case "FIVE_KING_TONG_HUA_SHUN_4":
                        case 305:
                            t.lastResult[o] = 305;
                            break;
                        case "FIVE_END":
                        case 399:
                            t.lastResult[o] = 399
                    }
                }
                return null != e.leftSeconds && (m.Long ? (t.leftSeconds = m.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), null != e.canAuto && (t.canAuto = Boolean(e.canAuto)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.players = [], o.lastResult = []), t.defaults) {
                    if (o.card = null, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.nextRoundEndStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.nextRoundEndStamp = t.longs === String ? "0" : 0;
                    o.param = null, o.changed = !1, m.Long ? (n = new m.Long(0, 0, !1), o.leftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.leftSeconds = t.longs === String ? "0" : 0, o.canAuto = !1
                }
                if (null != e.card && e.hasOwnProperty("card") && (o.card = f.cowboy_proto.CardItem.toObject(e.card, t)), null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && ("number" == typeof e.nextRoundEndStamp ? o.nextRoundEndStamp = t.longs === String ? String(e.nextRoundEndStamp) : e.nextRoundEndStamp : o.nextRoundEndStamp = t.longs === String ? m.Long.prototype.toString.call(e.nextRoundEndStamp) : t.longs === Number ? new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber() : e.nextRoundEndStamp), e.players && e.players.length) {
                    o.players = [];
                    for (var r = 0; r < e.players.length; ++r) o.players[r] = f.cowboy_proto.GamePlayer.toObject(e.players[r], t)
                }
                if (null != e.param && e.hasOwnProperty("param") && (o.param = f.cowboy_proto.RoomParam.toObject(e.param, t)), null != e.changed && e.hasOwnProperty("changed") && (o.changed = e.changed), e.lastResult && e.lastResult.length)
                    for (o.lastResult = [], r = 0; r < e.lastResult.length; ++r) o.lastResult[r] = t.enums === String ? void 0 === f.cowboy_proto.BetZoneOption[e.lastResult[r]] ? e.lastResult[r] : f.cowboy_proto.BetZoneOption[e.lastResult[r]] : e.lastResult[r];
                return null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? o.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : o.leftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), null != e.canAuto && e.hasOwnProperty("canAuto") && (o.canAuto = e.canAuto), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.DealNotify"
            }, e
        }(), l.BetReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.detail = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.detail && Object.hasOwnProperty.call(e, "detail") && f.cowboy_proto.BetDetail.encode(e.detail, t.uint32(10).fork()).ldelim(), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.BetReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.detail = f.cowboy_proto.BetDetail.decode(e, e.uint32());
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
                    var t = f.cowboy_proto.BetDetail.verify(e.detail);
                    if (t) return "detail." + t
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.BetReq) return e;
                var t = new f.cowboy_proto.BetReq;
                if (null != e.detail) {
                    if ("object" != typeof e.detail) throw TypeError(".cowboy_proto.BetReq.detail: object expected");
                    t.detail = f.cowboy_proto.BetDetail.fromObject(e.detail)
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.detail = null), null != e.detail && e.hasOwnProperty("detail") && (o.detail = f.cowboy_proto.BetDetail.toObject(e.detail, t)), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.BetReq"
            }, e
        }(), l.BillInfo = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.BillNo = "", e.prototype.time = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.BillNo && Object.hasOwnProperty.call(e, "BillNo") && t.uint32(10).string(e.BillNo), null != e.time && Object.hasOwnProperty.call(e, "time") && t.uint32(16).int64(e.time), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.BillInfo; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.BillNo = e.string();
                            break;
                        case 2:
                            n.time = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.BillNo && e.hasOwnProperty("BillNo") && !m.isString(e.BillNo) ? "BillNo: string expected" : null != e.time && e.hasOwnProperty("time") && !(m.isInteger(e.time) || e.time && m.isInteger(e.time.low) && m.isInteger(e.time.high)) ? "time: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.BillInfo) return e;
                var t = new f.cowboy_proto.BillInfo;
                return null != e.BillNo && (t.BillNo = String(e.BillNo)), null != e.time && (m.Long ? (t.time = m.Long.fromValue(e.time)).unsigned = !1 : "string" == typeof e.time ? t.time = parseInt(e.time, 10) : "number" == typeof e.time ? t.time = e.time : "object" == typeof e.time && (t.time = new m.LongBits(e.time.low >>> 0, e.time.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults)
                    if (o.BillNo = "", m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.time = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.time = t.longs === String ? "0" : 0;
                return null != e.BillNo && e.hasOwnProperty("BillNo") && (o.BillNo = e.BillNo), null != e.time && e.hasOwnProperty("time") && ("number" == typeof e.time ? o.time = t.longs === String ? String(e.time) : e.time : o.time = t.longs === String ? m.Long.prototype.toString.call(e.time) : t.longs === Number ? new m.LongBits(e.time.low >>> 0, e.time.high >>> 0).toNumber() : e.time), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.BillInfo"
            }, e
        }(), l.BetResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.CalmDownLeftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.CalmDownDeadLineTimeStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.bill = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.CalmDownLeftSeconds && Object.hasOwnProperty.call(e, "CalmDownLeftSeconds") && t.uint32(24).int64(e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && Object.hasOwnProperty.call(e, "CalmDownDeadLineTimeStamp") && t.uint32(32).int64(e.CalmDownDeadLineTimeStamp), null != e.bill && Object.hasOwnProperty.call(e, "bill") && f.cowboy_proto.BillInfo.encode(e.bill, t.uint32(42).fork()).ldelim(), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.BetResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 3:
                            n.CalmDownLeftSeconds = e.int64();
                            break;
                        case 4:
                            n.CalmDownDeadLineTimeStamp = e.int64();
                            break;
                        case 5:
                            n.bill = f.cowboy_proto.BillInfo.decode(e, e.uint32());
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
                    case 31e3:
                    case 31001:
                    case 31002:
                    case 31003:
                    case 31004:
                    case 31005:
                    case 31006:
                    case 31007:
                    case 31008:
                    case 31009:
                    case 31010:
                    case 31011:
                    case 31012:
                    case 31013:
                    case 31014:
                    case 31015:
                    case 31016:
                    case 31017:
                    case 31018:
                    case 31019:
                    case 31020:
                    case 31021:
                    case 31022:
                    case 31023:
                    case 31026:
                    case 31024:
                    case 31025:
                    case 31117:
                    case 31118:
                    case 31119:
                }
                if (null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && !(m.isInteger(e.CalmDownLeftSeconds) || e.CalmDownLeftSeconds && m.isInteger(e.CalmDownLeftSeconds.low) && m.isInteger(e.CalmDownLeftSeconds.high))) return "CalmDownLeftSeconds: integer|Long expected";
                if (null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && !(m.isInteger(e.CalmDownDeadLineTimeStamp) || e.CalmDownDeadLineTimeStamp && m.isInteger(e.CalmDownDeadLineTimeStamp.low) && m.isInteger(e.CalmDownDeadLineTimeStamp.high))) return "CalmDownDeadLineTimeStamp: integer|Long expected";
                if (null != e.bill && e.hasOwnProperty("bill")) {
                    var t = f.cowboy_proto.BillInfo.verify(e.bill);
                    if (t) return "bill." + t
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.BetResp) return e;
                var t = new f.cowboy_proto.BetResp;
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
                    case 31e3:
                        t.code = 31e3;
                        break;
                    case "LOW_VERSION":
                    case 31001:
                        t.code = 31001;
                        break;
                    case "INVALID_TOKEN":
                    case 31002:
                        t.code = 31002;
                        break;
                    case "SERVER_BUSY":
                    case 31003:
                        t.code = 31003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 31004:
                        t.code = 31004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 31005:
                        t.code = 31005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 31006:
                        t.code = 31006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 31007:
                        t.code = 31007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 31008:
                        t.code = 31008;
                        break;
                    case "NO_BET":
                    case 31009:
                        t.code = 31009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 31010:
                        t.code = 31010;
                        break;
                    case "NO_MONEY":
                    case 31011:
                        t.code = 31011;
                        break;
                    case "BET_BAD_PARAM":
                    case 31012:
                        t.code = 31012;
                        break;
                    case "STOP_SERVICE":
                    case 31013:
                        t.code = 31013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 31014:
                        t.code = 31014;
                        break;
                    case "BET_TOO_SMALL":
                    case 31015:
                        t.code = 31015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 31016:
                        t.code = 31016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 31017:
                        t.code = 31017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 31018:
                        t.code = 31018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 31019:
                        t.code = 31019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 31020:
                        t.code = 31020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 31021:
                        t.code = 31021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 31022:
                        t.code = 31022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 31023:
                        t.code = 31023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 31026:
                        t.code = 31026;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 31024:
                        t.code = 31024;
                        break;
                    case "IN_CALM_DOWN":
                    case 31025:
                        t.code = 31025;
                        break;
                    case "C2CPAYMENT_LIST_GET_ERROR":
                    case 31117:
                        t.code = 31117;
                        break;
                    case "C2CPAYMENT_NOT_ALLOW":
                    case 31118:
                        t.code = 31118;
                        break;
                    case "CAN_NOT_LEAVE_IN_BETTING":
                    case 31119:
                        t.code = 31119
                }
                if (null != e.CalmDownLeftSeconds && (m.Long ? (t.CalmDownLeftSeconds = m.Long.fromValue(e.CalmDownLeftSeconds)).unsigned = !1 : "string" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = parseInt(e.CalmDownLeftSeconds, 10) : "number" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = e.CalmDownLeftSeconds : "object" == typeof e.CalmDownLeftSeconds && (t.CalmDownLeftSeconds = new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber())), null != e.CalmDownDeadLineTimeStamp && (m.Long ? (t.CalmDownDeadLineTimeStamp = m.Long.fromValue(e.CalmDownDeadLineTimeStamp)).unsigned = !1 : "string" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = parseInt(e.CalmDownDeadLineTimeStamp, 10) : "number" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = e.CalmDownDeadLineTimeStamp : "object" == typeof e.CalmDownDeadLineTimeStamp && (t.CalmDownDeadLineTimeStamp = new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber())), null != e.bill) {
                    if ("object" != typeof e.bill) throw TypeError(".cowboy_proto.BetResp.bill: object expected");
                    t.bill = f.cowboy_proto.BillInfo.fromObject(e.bill)
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.CalmDownLeftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.CalmDownLeftSeconds = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !1), o.CalmDownDeadLineTimeStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.CalmDownDeadLineTimeStamp = t.longs === String ? "0" : 0, o.bill = null
                }
                return null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.cowboy_proto.ErrorCode[e.code] ? e.code : f.cowboy_proto.ErrorCode[e.code] : e.code), null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && ("number" == typeof e.CalmDownLeftSeconds ? o.CalmDownLeftSeconds = t.longs === String ? String(e.CalmDownLeftSeconds) : e.CalmDownLeftSeconds : o.CalmDownLeftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownLeftSeconds) : t.longs === Number ? new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber() : e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && ("number" == typeof e.CalmDownDeadLineTimeStamp ? o.CalmDownDeadLineTimeStamp = t.longs === String ? String(e.CalmDownDeadLineTimeStamp) : e.CalmDownDeadLineTimeStamp : o.CalmDownDeadLineTimeStamp = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownDeadLineTimeStamp) : t.longs === Number ? new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber() : e.CalmDownDeadLineTimeStamp), null != e.bill && e.hasOwnProperty("bill") && (o.bill = f.cowboy_proto.BillInfo.toObject(e.bill, t)), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.BetResp"
            }, e
        }(), l.BetNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.uid = 0, e.prototype.detail = null, e.prototype.curCoin = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.selfBet = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.totalBet = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.curUsdt = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).uint32(e.uid), null != e.detail && Object.hasOwnProperty.call(e, "detail") && f.cowboy_proto.BetDetail.encode(e.detail, t.uint32(18).fork()).ldelim(), null != e.curCoin && Object.hasOwnProperty.call(e, "curCoin") && t.uint32(24).uint64(e.curCoin), null != e.selfBet && Object.hasOwnProperty.call(e, "selfBet") && t.uint32(32).uint64(e.selfBet), null != e.totalBet && Object.hasOwnProperty.call(e, "totalBet") && t.uint32(40).uint64(e.totalBet), null != e.curUsdt && Object.hasOwnProperty.call(e, "curUsdt") && t.uint32(48).uint64(e.curUsdt), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.BetNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.uid = e.uint32();
                            break;
                        case 2:
                            n.detail = f.cowboy_proto.BetDetail.decode(e, e.uint32());
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
                        case 6:
                            n.curUsdt = e.uint64();
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
                    var t = f.cowboy_proto.BetDetail.verify(e.detail);
                    if (t) return "detail." + t
                }
                return null != e.curCoin && e.hasOwnProperty("curCoin") && !(m.isInteger(e.curCoin) || e.curCoin && m.isInteger(e.curCoin.low) && m.isInteger(e.curCoin.high)) ? "curCoin: integer|Long expected" : null != e.selfBet && e.hasOwnProperty("selfBet") && !(m.isInteger(e.selfBet) || e.selfBet && m.isInteger(e.selfBet.low) && m.isInteger(e.selfBet.high)) ? "selfBet: integer|Long expected" : null != e.totalBet && e.hasOwnProperty("totalBet") && !(m.isInteger(e.totalBet) || e.totalBet && m.isInteger(e.totalBet.low) && m.isInteger(e.totalBet.high)) ? "totalBet: integer|Long expected" : null != e.curUsdt && e.hasOwnProperty("curUsdt") && !(m.isInteger(e.curUsdt) || e.curUsdt && m.isInteger(e.curUsdt.low) && m.isInteger(e.curUsdt.high)) ? "curUsdt: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.BetNotify) return e;
                var t = new f.cowboy_proto.BetNotify;
                if (null != e.uid && (t.uid = e.uid >>> 0), null != e.detail) {
                    if ("object" != typeof e.detail) throw TypeError(".cowboy_proto.BetNotify.detail: object expected");
                    t.detail = f.cowboy_proto.BetDetail.fromObject(e.detail)
                }
                return null != e.curCoin && (m.Long ? (t.curCoin = m.Long.fromValue(e.curCoin)).unsigned = !0 : "string" == typeof e.curCoin ? t.curCoin = parseInt(e.curCoin, 10) : "number" == typeof e.curCoin ? t.curCoin = e.curCoin : "object" == typeof e.curCoin && (t.curCoin = new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber(!0))), null != e.selfBet && (m.Long ? (t.selfBet = m.Long.fromValue(e.selfBet)).unsigned = !0 : "string" == typeof e.selfBet ? t.selfBet = parseInt(e.selfBet, 10) : "number" == typeof e.selfBet ? t.selfBet = e.selfBet : "object" == typeof e.selfBet && (t.selfBet = new m.LongBits(e.selfBet.low >>> 0, e.selfBet.high >>> 0).toNumber(!0))), null != e.totalBet && (m.Long ? (t.totalBet = m.Long.fromValue(e.totalBet)).unsigned = !0 : "string" == typeof e.totalBet ? t.totalBet = parseInt(e.totalBet, 10) : "number" == typeof e.totalBet ? t.totalBet = e.totalBet : "object" == typeof e.totalBet && (t.totalBet = new m.LongBits(e.totalBet.low >>> 0, e.totalBet.high >>> 0).toNumber(!0))), null != e.curUsdt && (m.Long ? (t.curUsdt = m.Long.fromValue(e.curUsdt)).unsigned = !0 : "string" == typeof e.curUsdt ? t.curUsdt = parseInt(e.curUsdt, 10) : "number" == typeof e.curUsdt ? t.curUsdt = e.curUsdt : "object" == typeof e.curUsdt && (t.curUsdt = new m.LongBits(e.curUsdt.low >>> 0, e.curUsdt.high >>> 0).toNumber(!0))), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.uid = 0, o.detail = null, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.curCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.curCoin = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !0), o.selfBet = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.selfBet = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !0), o.totalBet = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.totalBet = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !0), o.curUsdt = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.curUsdt = t.longs === String ? "0" : 0
                }
                return null != e.uid && e.hasOwnProperty("uid") && (o.uid = e.uid), null != e.detail && e.hasOwnProperty("detail") && (o.detail = f.cowboy_proto.BetDetail.toObject(e.detail, t)), null != e.curCoin && e.hasOwnProperty("curCoin") && ("number" == typeof e.curCoin ? o.curCoin = t.longs === String ? String(e.curCoin) : e.curCoin : o.curCoin = t.longs === String ? m.Long.prototype.toString.call(e.curCoin) : t.longs === Number ? new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber(!0) : e.curCoin), null != e.selfBet && e.hasOwnProperty("selfBet") && ("number" == typeof e.selfBet ? o.selfBet = t.longs === String ? String(e.selfBet) : e.selfBet : o.selfBet = t.longs === String ? m.Long.prototype.toString.call(e.selfBet) : t.longs === Number ? new m.LongBits(e.selfBet.low >>> 0, e.selfBet.high >>> 0).toNumber(!0) : e.selfBet), null != e.totalBet && e.hasOwnProperty("totalBet") && ("number" == typeof e.totalBet ? o.totalBet = t.longs === String ? String(e.totalBet) : e.totalBet : o.totalBet = t.longs === String ? m.Long.prototype.toString.call(e.totalBet) : t.longs === Number ? new m.LongBits(e.totalBet.low >>> 0, e.totalBet.high >>> 0).toNumber(!0) : e.totalBet), null != e.curUsdt && e.hasOwnProperty("curUsdt") && ("number" == typeof e.curUsdt ? o.curUsdt = t.longs === String ? String(e.curUsdt) : e.curUsdt : o.curUsdt = t.longs === String ? m.Long.prototype.toString.call(e.curUsdt) : t.longs === Number ? new m.LongBits(e.curUsdt.low >>> 0, e.curUsdt.high >>> 0).toNumber(!0) : e.curUsdt), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.BetNotify"
            }, e
        }(), l.MergeAutoBetNotify = function() {
            function e(e) {
                if (this.notify = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.notify = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.notify && e.notify.length)
                    for (var o = 0; o < e.notify.length; ++o) f.cowboy_proto.BetNotify.encode(e.notify[o], t.uint32(10).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.MergeAutoBetNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.notify && n.notify.length || (n.notify = []), n.notify.push(f.cowboy_proto.BetNotify.decode(e, e.uint32()));
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
                        var o = f.cowboy_proto.BetNotify.verify(e.notify[t]);
                        if (o) return "notify." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.MergeAutoBetNotify) return e;
                var t = new f.cowboy_proto.MergeAutoBetNotify;
                if (e.notify) {
                    if (!Array.isArray(e.notify)) throw TypeError(".cowboy_proto.MergeAutoBetNotify.notify: array expected");
                    t.notify = [];
                    for (var o = 0; o < e.notify.length; ++o) {
                        if ("object" != typeof e.notify[o]) throw TypeError(".cowboy_proto.MergeAutoBetNotify.notify: object expected");
                        t.notify[o] = f.cowboy_proto.BetNotify.fromObject(e.notify[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.notify = []), e.notify && e.notify.length) {
                    o.notify = [];
                    for (var n = 0; n < e.notify.length; ++n) o.notify[n] = f.cowboy_proto.BetNotify.toObject(e.notify[n], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.MergeAutoBetNotify"
            }, e
        }(), l.BetDetail = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.zone = 0, e.prototype.option = 0, e.prototype.betAmount = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.auto = !1, e.prototype.betGameCoin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.zone && Object.hasOwnProperty.call(e, "zone") && t.uint32(8).int32(e.zone), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(16).int32(e.option), null != e.betAmount && Object.hasOwnProperty.call(e, "betAmount") && t.uint32(24).uint64(e.betAmount), null != e.auto && Object.hasOwnProperty.call(e, "auto") && t.uint32(32).bool(e.auto), null != e.betGameCoin && Object.hasOwnProperty.call(e, "betGameCoin") && t.uint32(40).int64(e.betGameCoin), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.BetDetail; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.zone = e.int32();
                            break;
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
                if (null != e.zone && e.hasOwnProperty("zone")) switch (e.zone) {
                    default:
                        return "zone: enum value expected";
                    case 0:
                    case 10:
                    case 20:
                    case 30:
                }
                if (null != e.option && e.hasOwnProperty("option")) switch (e.option) {
                    default:
                        return "option: enum value expected";
                    case 0:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 199:
                    case 200:
                    case 203:
                    case 205:
                    case 206:
                    case 299:
                    case 300:
                    case 301:
                    case 302:
                    case 303:
                    case 304:
                    case 305:
                    case 399:
                }
                return null != e.betAmount && e.hasOwnProperty("betAmount") && !(m.isInteger(e.betAmount) || e.betAmount && m.isInteger(e.betAmount.low) && m.isInteger(e.betAmount.high)) ? "betAmount: integer|Long expected" : null != e.auto && e.hasOwnProperty("auto") && "boolean" != typeof e.auto ? "auto: boolean expected" : null != e.betGameCoin && e.hasOwnProperty("betGameCoin") && !(m.isInteger(e.betGameCoin) || e.betGameCoin && m.isInteger(e.betGameCoin.low) && m.isInteger(e.betGameCoin.high)) ? "betGameCoin: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.BetDetail) return e;
                var t = new f.cowboy_proto.BetDetail;
                switch (e.zone) {
                    default:
                        if ("number" == typeof e.zone) {
                            t.zone = e.zone;
                            break
                        }
                        break;
                    case "ZONE_DUMMY":
                    case 0:
                        t.zone = 0;
                        break;
                    case "WIN":
                    case 10:
                        t.zone = 10;
                        break;
                    case "HOLE_CARD":
                    case 20:
                        t.zone = 20;
                        break;
                    case "FIVE_CARD":
                    case 30:
                        t.zone = 30
                }
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
                    case "WIN_BEGIN":
                    case 100:
                        t.option = 100;
                        break;
                    case "RED_WIN":
                    case 101:
                        t.option = 101;
                        break;
                    case "BLUE_WIN":
                    case 102:
                        t.option = 102;
                        break;
                    case "EQUAL":
                    case 103:
                        t.option = 103;
                        break;
                    case "WIN_END":
                    case 199:
                        t.option = 199;
                        break;
                    case "HOLE_BEGIN":
                    case 200:
                        t.option = 200;
                        break;
                    case "HOLE_SAME":
                    case 203:
                        t.option = 203;
                        break;
                    case "HOLE_A":
                    case 205:
                        t.option = 205;
                        break;
                    case "HOLE_3_TONG_SAME_SHUN":
                    case 206:
                        t.option = 206;
                        break;
                    case "HOLE_END":
                    case 299:
                        t.option = 299;
                        break;
                    case "FIVE_BEGIN":
                    case 300:
                        t.option = 300;
                        break;
                    case "FIVE_NONE_1DUI":
                    case 301:
                        t.option = 301;
                        break;
                    case "FIVE_2DUI":
                    case 302:
                        t.option = 302;
                        break;
                    case "FIVE_3_SHUN_TONG_HUA":
                    case 303:
                        t.option = 303;
                        break;
                    case "FIVE_3_2":
                    case 304:
                        t.option = 304;
                        break;
                    case "FIVE_KING_TONG_HUA_SHUN_4":
                    case 305:
                        t.option = 305;
                        break;
                    case "FIVE_END":
                    case 399:
                        t.option = 399
                }
                return null != e.betAmount && (m.Long ? (t.betAmount = m.Long.fromValue(e.betAmount)).unsigned = !0 : "string" == typeof e.betAmount ? t.betAmount = parseInt(e.betAmount, 10) : "number" == typeof e.betAmount ? t.betAmount = e.betAmount : "object" == typeof e.betAmount && (t.betAmount = new m.LongBits(e.betAmount.low >>> 0, e.betAmount.high >>> 0).toNumber(!0))), null != e.auto && (t.auto = Boolean(e.auto)), null != e.betGameCoin && (m.Long ? (t.betGameCoin = m.Long.fromValue(e.betGameCoin)).unsigned = !1 : "string" == typeof e.betGameCoin ? t.betGameCoin = parseInt(e.betGameCoin, 10) : "number" == typeof e.betGameCoin ? t.betGameCoin = e.betGameCoin : "object" == typeof e.betGameCoin && (t.betGameCoin = new m.LongBits(e.betGameCoin.low >>> 0, e.betGameCoin.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.zone = t.enums === String ? "ZONE_DUMMY" : 0, o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.betAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.betAmount = t.longs === String ? "0" : 0;
                    o.auto = !1, m.Long ? (n = new m.Long(0, 0, !1), o.betGameCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.betGameCoin = t.longs === String ? "0" : 0
                }
                return null != e.zone && e.hasOwnProperty("zone") && (o.zone = t.enums === String ? void 0 === f.cowboy_proto.BetZone[e.zone] ? e.zone : f.cowboy_proto.BetZone[e.zone] : e.zone), null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.cowboy_proto.BetZoneOption[e.option] ? e.option : f.cowboy_proto.BetZoneOption[e.option] : e.option), null != e.betAmount && e.hasOwnProperty("betAmount") && ("number" == typeof e.betAmount ? o.betAmount = t.longs === String ? String(e.betAmount) : e.betAmount : o.betAmount = t.longs === String ? m.Long.prototype.toString.call(e.betAmount) : t.longs === Number ? new m.LongBits(e.betAmount.low >>> 0, e.betAmount.high >>> 0).toNumber(!0) : e.betAmount), null != e.auto && e.hasOwnProperty("auto") && (o.auto = e.auto), null != e.betGameCoin && e.hasOwnProperty("betGameCoin") && ("number" == typeof e.betGameCoin ? o.betGameCoin = t.longs === String ? String(e.betGameCoin) : e.betGameCoin : o.betGameCoin = t.longs === String ? m.Long.prototype.toString.call(e.betGameCoin) : t.longs === Number ? new m.LongBits(e.betGameCoin.low >>> 0, e.betGameCoin.high >>> 0).toNumber() : e.betGameCoin), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.BetDetail"
            }, e
        }(), l.GameRoundEndNotify = function() {
            function e(e) {
                if (this.playerHoleCard = [], this.publicCards = [], this.playerSettle = [], this.matchOption = [], this.optionResult = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.playerHoleCard = m.emptyArray, e.prototype.publicCards = m.emptyArray, e.prototype.playerSettle = m.emptyArray, e.prototype.roundResult = null, e.prototype.nextRoundEndStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.matchOption = m.emptyArray, e.prototype.stopWorld = 0, e.prototype.leftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.otherPlayers = null, e.prototype.openRoads = !1, e.prototype.optionResult = m.emptyArray, e.prototype.change_points = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.idle_roomid = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.playerHoleCard && e.playerHoleCard.length)
                    for (var o = 0; o < e.playerHoleCard.length; ++o) f.cowboy_proto.PlayerHoleCard.encode(e.playerHoleCard[o], t.uint32(10).fork()).ldelim();
                if (null != e.publicCards && e.publicCards.length)
                    for (o = 0; o < e.publicCards.length; ++o) f.cowboy_proto.CardItem.encode(e.publicCards[o], t.uint32(18).fork()).ldelim();
                if (null != e.playerSettle && e.playerSettle.length)
                    for (o = 0; o < e.playerSettle.length; ++o) f.cowboy_proto.PlayerSettle.encode(e.playerSettle[o], t.uint32(26).fork()).ldelim();
                if (null != e.roundResult && Object.hasOwnProperty.call(e, "roundResult") && f.cowboy_proto.RoundResult.encode(e.roundResult, t.uint32(34).fork()).ldelim(), null != e.nextRoundEndStamp && Object.hasOwnProperty.call(e, "nextRoundEndStamp") && t.uint32(40).int64(e.nextRoundEndStamp), null != e.matchOption && e.matchOption.length) {
                    for (t.uint32(50).fork(), o = 0; o < e.matchOption.length; ++o) t.int32(e.matchOption[o]);
                    t.ldelim()
                }
                if (null != e.stopWorld && Object.hasOwnProperty.call(e, "stopWorld") && t.uint32(56).int32(e.stopWorld), null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(64).int64(e.leftSeconds), null != e.otherPlayers && Object.hasOwnProperty.call(e, "otherPlayers") && f.cowboy_proto.PlayerSettle.encode(e.otherPlayers, t.uint32(74).fork()).ldelim(), null != e.openRoads && Object.hasOwnProperty.call(e, "openRoads") && t.uint32(80).bool(e.openRoads), null != e.optionResult && e.optionResult.length)
                    for (o = 0; o < e.optionResult.length; ++o) f.cowboy_proto.OptionResult.encode(e.optionResult[o], t.uint32(90).fork()).ldelim();
                return null != e.change_points && Object.hasOwnProperty.call(e, "change_points") && t.uint32(96).int64(e.change_points), null != e.idle_roomid && Object.hasOwnProperty.call(e, "idle_roomid") && t.uint32(104).uint32(e.idle_roomid), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.GameRoundEndNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.playerHoleCard && n.playerHoleCard.length || (n.playerHoleCard = []), n.playerHoleCard.push(f.cowboy_proto.PlayerHoleCard.decode(e, e.uint32()));
                            break;
                        case 2:
                            n.publicCards && n.publicCards.length || (n.publicCards = []), n.publicCards.push(f.cowboy_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.playerSettle && n.playerSettle.length || (n.playerSettle = []), n.playerSettle.push(f.cowboy_proto.PlayerSettle.decode(e, e.uint32()));
                            break;
                        case 4:
                            n.roundResult = f.cowboy_proto.RoundResult.decode(e, e.uint32());
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
                            n.otherPlayers = f.cowboy_proto.PlayerSettle.decode(e, e.uint32());
                            break;
                        case 10:
                            n.openRoads = e.bool();
                            break;
                        case 11:
                            n.optionResult && n.optionResult.length || (n.optionResult = []), n.optionResult.push(f.cowboy_proto.OptionResult.decode(e, e.uint32()));
                            break;
                        case 12:
                            n.change_points = e.int64();
                            break;
                        case 13:
                            n.idle_roomid = e.uint32();
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
                        if (o = f.cowboy_proto.PlayerHoleCard.verify(e.playerHoleCard[t])) return "playerHoleCard." + o
                }
                if (null != e.publicCards && e.hasOwnProperty("publicCards")) {
                    if (!Array.isArray(e.publicCards)) return "publicCards: array expected";
                    for (t = 0; t < e.publicCards.length; ++t)
                        if (o = f.cowboy_proto.CardItem.verify(e.publicCards[t])) return "publicCards." + o
                }
                if (null != e.playerSettle && e.hasOwnProperty("playerSettle")) {
                    if (!Array.isArray(e.playerSettle)) return "playerSettle: array expected";
                    for (t = 0; t < e.playerSettle.length; ++t)
                        if (o = f.cowboy_proto.PlayerSettle.verify(e.playerSettle[t])) return "playerSettle." + o
                }
                if (null != e.roundResult && e.hasOwnProperty("roundResult") && (o = f.cowboy_proto.RoundResult.verify(e.roundResult))) return "roundResult." + o;
                if (null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && !(m.isInteger(e.nextRoundEndStamp) || e.nextRoundEndStamp && m.isInteger(e.nextRoundEndStamp.low) && m.isInteger(e.nextRoundEndStamp.high))) return "nextRoundEndStamp: integer|Long expected";
                if (null != e.matchOption && e.hasOwnProperty("matchOption")) {
                    if (!Array.isArray(e.matchOption)) return "matchOption: array expected";
                    for (t = 0; t < e.matchOption.length; ++t) switch (e.matchOption[t]) {
                        default:
                            return "matchOption: enum value[] expected";
                        case 0:
                        case 100:
                        case 101:
                        case 102:
                        case 103:
                        case 199:
                        case 200:
                        case 203:
                        case 205:
                        case 206:
                        case 299:
                        case 300:
                        case 301:
                        case 302:
                        case 303:
                        case 304:
                        case 305:
                        case 399:
                    }
                }
                if (null != e.stopWorld && e.hasOwnProperty("stopWorld") && !m.isInteger(e.stopWorld)) return "stopWorld: integer expected";
                if (null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(m.isInteger(e.leftSeconds) || e.leftSeconds && m.isInteger(e.leftSeconds.low) && m.isInteger(e.leftSeconds.high))) return "leftSeconds: integer|Long expected";
                if (null != e.otherPlayers && e.hasOwnProperty("otherPlayers") && (o = f.cowboy_proto.PlayerSettle.verify(e.otherPlayers))) return "otherPlayers." + o;
                if (null != e.openRoads && e.hasOwnProperty("openRoads") && "boolean" != typeof e.openRoads) return "openRoads: boolean expected";
                if (null != e.optionResult && e.hasOwnProperty("optionResult")) {
                    if (!Array.isArray(e.optionResult)) return "optionResult: array expected";
                    for (t = 0; t < e.optionResult.length; ++t) {
                        var o;
                        if (o = f.cowboy_proto.OptionResult.verify(e.optionResult[t])) return "optionResult." + o
                    }
                }
                return null != e.change_points && e.hasOwnProperty("change_points") && !(m.isInteger(e.change_points) || e.change_points && m.isInteger(e.change_points.low) && m.isInteger(e.change_points.high)) ? "change_points: integer|Long expected" : null != e.idle_roomid && e.hasOwnProperty("idle_roomid") && !m.isInteger(e.idle_roomid) ? "idle_roomid: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.GameRoundEndNotify) return e;
                var t = new f.cowboy_proto.GameRoundEndNotify;
                if (e.playerHoleCard) {
                    if (!Array.isArray(e.playerHoleCard)) throw TypeError(".cowboy_proto.GameRoundEndNotify.playerHoleCard: array expected");
                    t.playerHoleCard = [];
                    for (var o = 0; o < e.playerHoleCard.length; ++o) {
                        if ("object" != typeof e.playerHoleCard[o]) throw TypeError(".cowboy_proto.GameRoundEndNotify.playerHoleCard: object expected");
                        t.playerHoleCard[o] = f.cowboy_proto.PlayerHoleCard.fromObject(e.playerHoleCard[o])
                    }
                }
                if (e.publicCards) {
                    if (!Array.isArray(e.publicCards)) throw TypeError(".cowboy_proto.GameRoundEndNotify.publicCards: array expected");
                    for (t.publicCards = [], o = 0; o < e.publicCards.length; ++o) {
                        if ("object" != typeof e.publicCards[o]) throw TypeError(".cowboy_proto.GameRoundEndNotify.publicCards: object expected");
                        t.publicCards[o] = f.cowboy_proto.CardItem.fromObject(e.publicCards[o])
                    }
                }
                if (e.playerSettle) {
                    if (!Array.isArray(e.playerSettle)) throw TypeError(".cowboy_proto.GameRoundEndNotify.playerSettle: array expected");
                    for (t.playerSettle = [], o = 0; o < e.playerSettle.length; ++o) {
                        if ("object" != typeof e.playerSettle[o]) throw TypeError(".cowboy_proto.GameRoundEndNotify.playerSettle: object expected");
                        t.playerSettle[o] = f.cowboy_proto.PlayerSettle.fromObject(e.playerSettle[o])
                    }
                }
                if (null != e.roundResult) {
                    if ("object" != typeof e.roundResult) throw TypeError(".cowboy_proto.GameRoundEndNotify.roundResult: object expected");
                    t.roundResult = f.cowboy_proto.RoundResult.fromObject(e.roundResult)
                }
                if (null != e.nextRoundEndStamp && (m.Long ? (t.nextRoundEndStamp = m.Long.fromValue(e.nextRoundEndStamp)).unsigned = !1 : "string" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = parseInt(e.nextRoundEndStamp, 10) : "number" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = e.nextRoundEndStamp : "object" == typeof e.nextRoundEndStamp && (t.nextRoundEndStamp = new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber())), e.matchOption) {
                    if (!Array.isArray(e.matchOption)) throw TypeError(".cowboy_proto.GameRoundEndNotify.matchOption: array expected");
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
                        case "WIN_BEGIN":
                        case 100:
                            t.matchOption[o] = 100;
                            break;
                        case "RED_WIN":
                        case 101:
                            t.matchOption[o] = 101;
                            break;
                        case "BLUE_WIN":
                        case 102:
                            t.matchOption[o] = 102;
                            break;
                        case "EQUAL":
                        case 103:
                            t.matchOption[o] = 103;
                            break;
                        case "WIN_END":
                        case 199:
                            t.matchOption[o] = 199;
                            break;
                        case "HOLE_BEGIN":
                        case 200:
                            t.matchOption[o] = 200;
                            break;
                        case "HOLE_SAME":
                        case 203:
                            t.matchOption[o] = 203;
                            break;
                        case "HOLE_A":
                        case 205:
                            t.matchOption[o] = 205;
                            break;
                        case "HOLE_3_TONG_SAME_SHUN":
                        case 206:
                            t.matchOption[o] = 206;
                            break;
                        case "HOLE_END":
                        case 299:
                            t.matchOption[o] = 299;
                            break;
                        case "FIVE_BEGIN":
                        case 300:
                            t.matchOption[o] = 300;
                            break;
                        case "FIVE_NONE_1DUI":
                        case 301:
                            t.matchOption[o] = 301;
                            break;
                        case "FIVE_2DUI":
                        case 302:
                            t.matchOption[o] = 302;
                            break;
                        case "FIVE_3_SHUN_TONG_HUA":
                        case 303:
                            t.matchOption[o] = 303;
                            break;
                        case "FIVE_3_2":
                        case 304:
                            t.matchOption[o] = 304;
                            break;
                        case "FIVE_KING_TONG_HUA_SHUN_4":
                        case 305:
                            t.matchOption[o] = 305;
                            break;
                        case "FIVE_END":
                        case 399:
                            t.matchOption[o] = 399
                    }
                }
                if (null != e.stopWorld && (t.stopWorld = 0 | e.stopWorld), null != e.leftSeconds && (m.Long ? (t.leftSeconds = m.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), null != e.otherPlayers) {
                    if ("object" != typeof e.otherPlayers) throw TypeError(".cowboy_proto.GameRoundEndNotify.otherPlayers: object expected");
                    t.otherPlayers = f.cowboy_proto.PlayerSettle.fromObject(e.otherPlayers)
                }
                if (null != e.openRoads && (t.openRoads = Boolean(e.openRoads)), e.optionResult) {
                    if (!Array.isArray(e.optionResult)) throw TypeError(".cowboy_proto.GameRoundEndNotify.optionResult: array expected");
                    for (t.optionResult = [], o = 0; o < e.optionResult.length; ++o) {
                        if ("object" != typeof e.optionResult[o]) throw TypeError(".cowboy_proto.GameRoundEndNotify.optionResult: object expected");
                        t.optionResult[o] = f.cowboy_proto.OptionResult.fromObject(e.optionResult[o])
                    }
                }
                return null != e.change_points && (m.Long ? (t.change_points = m.Long.fromValue(e.change_points)).unsigned = !1 : "string" == typeof e.change_points ? t.change_points = parseInt(e.change_points, 10) : "number" == typeof e.change_points ? t.change_points = e.change_points : "object" == typeof e.change_points && (t.change_points = new m.LongBits(e.change_points.low >>> 0, e.change_points.high >>> 0).toNumber())), null != e.idle_roomid && (t.idle_roomid = e.idle_roomid >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.playerHoleCard = [], o.publicCards = [], o.playerSettle = [], o.matchOption = [], o.optionResult = []), t.defaults) {
                    if (o.roundResult = null, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.nextRoundEndStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.nextRoundEndStamp = t.longs === String ? "0" : 0;
                    o.stopWorld = 0, m.Long ? (n = new m.Long(0, 0, !1), o.leftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.leftSeconds = t.longs === String ? "0" : 0, o.otherPlayers = null, o.openRoads = !1, m.Long ? (n = new m.Long(0, 0, !1), o.change_points = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.change_points = t.longs === String ? "0" : 0, o.idle_roomid = 0
                }
                if (e.playerHoleCard && e.playerHoleCard.length) {
                    o.playerHoleCard = [];
                    for (var r = 0; r < e.playerHoleCard.length; ++r) o.playerHoleCard[r] = f.cowboy_proto.PlayerHoleCard.toObject(e.playerHoleCard[r], t)
                }
                if (e.publicCards && e.publicCards.length)
                    for (o.publicCards = [], r = 0; r < e.publicCards.length; ++r) o.publicCards[r] = f.cowboy_proto.CardItem.toObject(e.publicCards[r], t);
                if (e.playerSettle && e.playerSettle.length)
                    for (o.playerSettle = [], r = 0; r < e.playerSettle.length; ++r) o.playerSettle[r] = f.cowboy_proto.PlayerSettle.toObject(e.playerSettle[r], t);
                if (null != e.roundResult && e.hasOwnProperty("roundResult") && (o.roundResult = f.cowboy_proto.RoundResult.toObject(e.roundResult, t)), null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && ("number" == typeof e.nextRoundEndStamp ? o.nextRoundEndStamp = t.longs === String ? String(e.nextRoundEndStamp) : e.nextRoundEndStamp : o.nextRoundEndStamp = t.longs === String ? m.Long.prototype.toString.call(e.nextRoundEndStamp) : t.longs === Number ? new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber() : e.nextRoundEndStamp), e.matchOption && e.matchOption.length)
                    for (o.matchOption = [], r = 0; r < e.matchOption.length; ++r) o.matchOption[r] = t.enums === String ? void 0 === f.cowboy_proto.BetZoneOption[e.matchOption[r]] ? e.matchOption[r] : f.cowboy_proto.BetZoneOption[e.matchOption[r]] : e.matchOption[r];
                if (null != e.stopWorld && e.hasOwnProperty("stopWorld") && (o.stopWorld = e.stopWorld), null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? o.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : o.leftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), null != e.otherPlayers && e.hasOwnProperty("otherPlayers") && (o.otherPlayers = f.cowboy_proto.PlayerSettle.toObject(e.otherPlayers, t)), null != e.openRoads && e.hasOwnProperty("openRoads") && (o.openRoads = e.openRoads), e.optionResult && e.optionResult.length)
                    for (o.optionResult = [], r = 0; r < e.optionResult.length; ++r) o.optionResult[r] = f.cowboy_proto.OptionResult.toObject(e.optionResult[r], t);
                return null != e.change_points && e.hasOwnProperty("change_points") && ("number" == typeof e.change_points ? o.change_points = t.longs === String ? String(e.change_points) : e.change_points : o.change_points = t.longs === String ? m.Long.prototype.toString.call(e.change_points) : t.longs === Number ? new m.LongBits(e.change_points.low >>> 0, e.change_points.high >>> 0).toNumber() : e.change_points), null != e.idle_roomid && e.hasOwnProperty("idle_roomid") && (o.idle_roomid = e.idle_roomid), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.GameRoundEndNotify"
            }, e
        }(), l.OptionResult = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.OptionResult; e.pos < o;) {
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
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 199:
                    case 200:
                    case 203:
                    case 205:
                    case 206:
                    case 299:
                    case 300:
                    case 301:
                    case 302:
                    case 303:
                    case 304:
                    case 305:
                    case 399:
                }
                return null != e.result && e.hasOwnProperty("result") && !m.isInteger(e.result) ? "result: integer expected" : null != e.loseHand && e.hasOwnProperty("loseHand") && !m.isInteger(e.loseHand) ? "loseHand: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.OptionResult) return e;
                var t = new f.cowboy_proto.OptionResult;
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
                    case "WIN_BEGIN":
                    case 100:
                        t.option = 100;
                        break;
                    case "RED_WIN":
                    case 101:
                        t.option = 101;
                        break;
                    case "BLUE_WIN":
                    case 102:
                        t.option = 102;
                        break;
                    case "EQUAL":
                    case 103:
                        t.option = 103;
                        break;
                    case "WIN_END":
                    case 199:
                        t.option = 199;
                        break;
                    case "HOLE_BEGIN":
                    case 200:
                        t.option = 200;
                        break;
                    case "HOLE_SAME":
                    case 203:
                        t.option = 203;
                        break;
                    case "HOLE_A":
                    case 205:
                        t.option = 205;
                        break;
                    case "HOLE_3_TONG_SAME_SHUN":
                    case 206:
                        t.option = 206;
                        break;
                    case "HOLE_END":
                    case 299:
                        t.option = 299;
                        break;
                    case "FIVE_BEGIN":
                    case 300:
                        t.option = 300;
                        break;
                    case "FIVE_NONE_1DUI":
                    case 301:
                        t.option = 301;
                        break;
                    case "FIVE_2DUI":
                    case 302:
                        t.option = 302;
                        break;
                    case "FIVE_3_SHUN_TONG_HUA":
                    case 303:
                        t.option = 303;
                        break;
                    case "FIVE_3_2":
                    case 304:
                        t.option = 304;
                        break;
                    case "FIVE_KING_TONG_HUA_SHUN_4":
                    case 305:
                        t.option = 305;
                        break;
                    case "FIVE_END":
                    case 399:
                        t.option = 399
                }
                return null != e.result && (t.result = 0 | e.result), null != e.loseHand && (t.loseHand = 0 | e.loseHand), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, o.result = 0, o.loseHand = 0), null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.cowboy_proto.BetZoneOption[e.option] ? e.option : f.cowboy_proto.BetZoneOption[e.option] : e.option), null != e.result && e.hasOwnProperty("result") && (o.result = e.result), null != e.loseHand && e.hasOwnProperty("loseHand") && (o.loseHand = e.loseHand), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.OptionResult"
            }, e
        }(), l.OptionResults = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.OptionResults; e.pos < o;) {
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
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 199:
                    case 200:
                    case 203:
                    case 205:
                    case 206:
                    case 299:
                    case 300:
                    case 301:
                    case 302:
                    case 303:
                    case 304:
                    case 305:
                    case 399:
                }
                if (null != e.results && e.hasOwnProperty("results")) {
                    if (!Array.isArray(e.results)) return "results: array expected";
                    for (var t = 0; t < e.results.length; ++t)
                        if (!m.isInteger(e.results[t])) return "results: integer[] expected"
                }
                return null != e.loseHand && e.hasOwnProperty("loseHand") && !m.isInteger(e.loseHand) ? "loseHand: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.OptionResults) return e;
                var t = new f.cowboy_proto.OptionResults;
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
                    case "WIN_BEGIN":
                    case 100:
                        t.option = 100;
                        break;
                    case "RED_WIN":
                    case 101:
                        t.option = 101;
                        break;
                    case "BLUE_WIN":
                    case 102:
                        t.option = 102;
                        break;
                    case "EQUAL":
                    case 103:
                        t.option = 103;
                        break;
                    case "WIN_END":
                    case 199:
                        t.option = 199;
                        break;
                    case "HOLE_BEGIN":
                    case 200:
                        t.option = 200;
                        break;
                    case "HOLE_SAME":
                    case 203:
                        t.option = 203;
                        break;
                    case "HOLE_A":
                    case 205:
                        t.option = 205;
                        break;
                    case "HOLE_3_TONG_SAME_SHUN":
                    case 206:
                        t.option = 206;
                        break;
                    case "HOLE_END":
                    case 299:
                        t.option = 299;
                        break;
                    case "FIVE_BEGIN":
                    case 300:
                        t.option = 300;
                        break;
                    case "FIVE_NONE_1DUI":
                    case 301:
                        t.option = 301;
                        break;
                    case "FIVE_2DUI":
                    case 302:
                        t.option = 302;
                        break;
                    case "FIVE_3_SHUN_TONG_HUA":
                    case 303:
                        t.option = 303;
                        break;
                    case "FIVE_3_2":
                    case 304:
                        t.option = 304;
                        break;
                    case "FIVE_KING_TONG_HUA_SHUN_4":
                    case 305:
                        t.option = 305;
                        break;
                    case "FIVE_END":
                    case 399:
                        t.option = 399
                }
                if (e.results) {
                    if (!Array.isArray(e.results)) throw TypeError(".cowboy_proto.OptionResults.results: array expected");
                    t.results = [];
                    for (var o = 0; o < e.results.length; ++o) t.results[o] = 0 | e.results[o]
                }
                return null != e.loseHand && (t.loseHand = 0 | e.loseHand), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.results = []), t.defaults && (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, o.loseHand = 0), null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.cowboy_proto.BetZoneOption[e.option] ? e.option : f.cowboy_proto.BetZoneOption[e.option] : e.option), e.results && e.results.length) {
                    o.results = [];
                    for (var n = 0; n < e.results.length; ++n) o.results[n] = e.results[n]
                }
                return null != e.loseHand && e.hasOwnProperty("loseHand") && (o.loseHand = e.loseHand), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.OptionResults"
            }, e
        }(), l.RoundResult = function() {
            function e(e) {
                if (this.Cards = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.result = 0, e.prototype.redLevel = 0, e.prototype.blueLevel = 0, e.prototype.Cards = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.result && Object.hasOwnProperty.call(e, "result") && t.uint32(8).int32(e.result), null != e.redLevel && Object.hasOwnProperty.call(e, "redLevel") && t.uint32(16).int32(e.redLevel), null != e.blueLevel && Object.hasOwnProperty.call(e, "blueLevel") && t.uint32(24).int32(e.blueLevel), null != e.Cards && e.Cards.length)
                    for (var o = 0; o < e.Cards.length; ++o) f.cowboy_proto.CardItem.encode(e.Cards[o], t.uint32(34).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.RoundResult; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.result = e.int32();
                            break;
                        case 2:
                            n.redLevel = e.int32();
                            break;
                        case 3:
                            n.blueLevel = e.int32();
                            break;
                        case 4:
                            n.Cards && n.Cards.length || (n.Cards = []), n.Cards.push(f.cowboy_proto.CardItem.decode(e, e.uint32()));
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
                if (null != e.redLevel && e.hasOwnProperty("redLevel") && !m.isInteger(e.redLevel)) return "redLevel: integer expected";
                if (null != e.blueLevel && e.hasOwnProperty("blueLevel") && !m.isInteger(e.blueLevel)) return "blueLevel: integer expected";
                if (null != e.Cards && e.hasOwnProperty("Cards")) {
                    if (!Array.isArray(e.Cards)) return "Cards: array expected";
                    for (var t = 0; t < e.Cards.length; ++t) {
                        var o = f.cowboy_proto.CardItem.verify(e.Cards[t]);
                        if (o) return "Cards." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.RoundResult) return e;
                var t = new f.cowboy_proto.RoundResult;
                if (null != e.result && (t.result = 0 | e.result), null != e.redLevel && (t.redLevel = 0 | e.redLevel), null != e.blueLevel && (t.blueLevel = 0 | e.blueLevel), e.Cards) {
                    if (!Array.isArray(e.Cards)) throw TypeError(".cowboy_proto.RoundResult.Cards: array expected");
                    t.Cards = [];
                    for (var o = 0; o < e.Cards.length; ++o) {
                        if ("object" != typeof e.Cards[o]) throw TypeError(".cowboy_proto.RoundResult.Cards: object expected");
                        t.Cards[o] = f.cowboy_proto.CardItem.fromObject(e.Cards[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.Cards = []), t.defaults && (o.result = 0, o.redLevel = 0, o.blueLevel = 0), null != e.result && e.hasOwnProperty("result") && (o.result = e.result), null != e.redLevel && e.hasOwnProperty("redLevel") && (o.redLevel = e.redLevel), null != e.blueLevel && e.hasOwnProperty("blueLevel") && (o.blueLevel = e.blueLevel), e.Cards && e.Cards.length) {
                    o.Cards = [];
                    for (var n = 0; n < e.Cards.length; ++n) o.Cards[n] = f.cowboy_proto.CardItem.toObject(e.Cards[n], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.RoundResult"
            }, e
        }(), l.PlayerSettle = function() {
            function e(e) {
                if (this.settle = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.uid = 0, e.prototype.settle = m.emptyArray, e.prototype.totalWinAmount = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.curCoin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.keepWinCount = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).uint32(e.uid), null != e.settle && e.settle.length)
                    for (var o = 0; o < e.settle.length; ++o) f.cowboy_proto.ZoneSettleDetail.encode(e.settle[o], t.uint32(18).fork()).ldelim();
                return null != e.totalWinAmount && Object.hasOwnProperty.call(e, "totalWinAmount") && t.uint32(24).int64(e.totalWinAmount), null != e.curCoin && Object.hasOwnProperty.call(e, "curCoin") && t.uint32(32).int64(e.curCoin), null != e.keepWinCount && Object.hasOwnProperty.call(e, "keepWinCount") && t.uint32(40).int32(e.keepWinCount), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.PlayerSettle; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.uid = e.uint32();
                            break;
                        case 2:
                            n.settle && n.settle.length || (n.settle = []), n.settle.push(f.cowboy_proto.ZoneSettleDetail.decode(e, e.uint32()));
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
                        var o = f.cowboy_proto.ZoneSettleDetail.verify(e.settle[t]);
                        if (o) return "settle." + o
                    }
                }
                return null != e.totalWinAmount && e.hasOwnProperty("totalWinAmount") && !(m.isInteger(e.totalWinAmount) || e.totalWinAmount && m.isInteger(e.totalWinAmount.low) && m.isInteger(e.totalWinAmount.high)) ? "totalWinAmount: integer|Long expected" : null != e.curCoin && e.hasOwnProperty("curCoin") && !(m.isInteger(e.curCoin) || e.curCoin && m.isInteger(e.curCoin.low) && m.isInteger(e.curCoin.high)) ? "curCoin: integer|Long expected" : null != e.keepWinCount && e.hasOwnProperty("keepWinCount") && !m.isInteger(e.keepWinCount) ? "keepWinCount: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.PlayerSettle) return e;
                var t = new f.cowboy_proto.PlayerSettle;
                if (null != e.uid && (t.uid = e.uid >>> 0), e.settle) {
                    if (!Array.isArray(e.settle)) throw TypeError(".cowboy_proto.PlayerSettle.settle: array expected");
                    t.settle = [];
                    for (var o = 0; o < e.settle.length; ++o) {
                        if ("object" != typeof e.settle[o]) throw TypeError(".cowboy_proto.PlayerSettle.settle: object expected");
                        t.settle[o] = f.cowboy_proto.ZoneSettleDetail.fromObject(e.settle[o])
                    }
                }
                return null != e.totalWinAmount && (m.Long ? (t.totalWinAmount = m.Long.fromValue(e.totalWinAmount)).unsigned = !1 : "string" == typeof e.totalWinAmount ? t.totalWinAmount = parseInt(e.totalWinAmount, 10) : "number" == typeof e.totalWinAmount ? t.totalWinAmount = e.totalWinAmount : "object" == typeof e.totalWinAmount && (t.totalWinAmount = new m.LongBits(e.totalWinAmount.low >>> 0, e.totalWinAmount.high >>> 0).toNumber())), null != e.curCoin && (m.Long ? (t.curCoin = m.Long.fromValue(e.curCoin)).unsigned = !1 : "string" == typeof e.curCoin ? t.curCoin = parseInt(e.curCoin, 10) : "number" == typeof e.curCoin ? t.curCoin = e.curCoin : "object" == typeof e.curCoin && (t.curCoin = new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber())), null != e.keepWinCount && (t.keepWinCount = 0 | e.keepWinCount), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.settle = []), t.defaults) {
                    if (o.uid = 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.totalWinAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.totalWinAmount = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !1), o.curCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.curCoin = t.longs === String ? "0" : 0, o.keepWinCount = 0
                }
                if (null != e.uid && e.hasOwnProperty("uid") && (o.uid = e.uid), e.settle && e.settle.length) {
                    o.settle = [];
                    for (var r = 0; r < e.settle.length; ++r) o.settle[r] = f.cowboy_proto.ZoneSettleDetail.toObject(e.settle[r], t)
                }
                return null != e.totalWinAmount && e.hasOwnProperty("totalWinAmount") && ("number" == typeof e.totalWinAmount ? o.totalWinAmount = t.longs === String ? String(e.totalWinAmount) : e.totalWinAmount : o.totalWinAmount = t.longs === String ? m.Long.prototype.toString.call(e.totalWinAmount) : t.longs === Number ? new m.LongBits(e.totalWinAmount.low >>> 0, e.totalWinAmount.high >>> 0).toNumber() : e.totalWinAmount), null != e.curCoin && e.hasOwnProperty("curCoin") && ("number" == typeof e.curCoin ? o.curCoin = t.longs === String ? String(e.curCoin) : e.curCoin : o.curCoin = t.longs === String ? m.Long.prototype.toString.call(e.curCoin) : t.longs === Number ? new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber() : e.curCoin), null != e.keepWinCount && e.hasOwnProperty("keepWinCount") && (o.keepWinCount = e.keepWinCount), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.PlayerSettle"
            }, e
        }(), l.ZoneSettleDetail = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.zone = 0, e.prototype.option = 0, e.prototype.betAmount = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.winAmount = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.isAuto = 0, e.prototype.betGameCoin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.zone && Object.hasOwnProperty.call(e, "zone") && t.uint32(8).int32(e.zone), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(16).int32(e.option), null != e.betAmount && Object.hasOwnProperty.call(e, "betAmount") && t.uint32(24).uint64(e.betAmount), null != e.winAmount && Object.hasOwnProperty.call(e, "winAmount") && t.uint32(32).int64(e.winAmount), null != e.isAuto && Object.hasOwnProperty.call(e, "isAuto") && t.uint32(40).int32(e.isAuto), null != e.betGameCoin && Object.hasOwnProperty.call(e, "betGameCoin") && t.uint32(48).int64(e.betGameCoin), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.ZoneSettleDetail; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.zone = e.int32();
                            break;
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
                if (null != e.zone && e.hasOwnProperty("zone")) switch (e.zone) {
                    default:
                        return "zone: enum value expected";
                    case 0:
                    case 10:
                    case 20:
                    case 30:
                }
                if (null != e.option && e.hasOwnProperty("option")) switch (e.option) {
                    default:
                        return "option: enum value expected";
                    case 0:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 199:
                    case 200:
                    case 203:
                    case 205:
                    case 206:
                    case 299:
                    case 300:
                    case 301:
                    case 302:
                    case 303:
                    case 304:
                    case 305:
                    case 399:
                }
                return null != e.betAmount && e.hasOwnProperty("betAmount") && !(m.isInteger(e.betAmount) || e.betAmount && m.isInteger(e.betAmount.low) && m.isInteger(e.betAmount.high)) ? "betAmount: integer|Long expected" : null != e.winAmount && e.hasOwnProperty("winAmount") && !(m.isInteger(e.winAmount) || e.winAmount && m.isInteger(e.winAmount.low) && m.isInteger(e.winAmount.high)) ? "winAmount: integer|Long expected" : null != e.isAuto && e.hasOwnProperty("isAuto") && !m.isInteger(e.isAuto) ? "isAuto: integer expected" : null != e.betGameCoin && e.hasOwnProperty("betGameCoin") && !(m.isInteger(e.betGameCoin) || e.betGameCoin && m.isInteger(e.betGameCoin.low) && m.isInteger(e.betGameCoin.high)) ? "betGameCoin: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.ZoneSettleDetail) return e;
                var t = new f.cowboy_proto.ZoneSettleDetail;
                switch (e.zone) {
                    default:
                        if ("number" == typeof e.zone) {
                            t.zone = e.zone;
                            break
                        }
                        break;
                    case "ZONE_DUMMY":
                    case 0:
                        t.zone = 0;
                        break;
                    case "WIN":
                    case 10:
                        t.zone = 10;
                        break;
                    case "HOLE_CARD":
                    case 20:
                        t.zone = 20;
                        break;
                    case "FIVE_CARD":
                    case 30:
                        t.zone = 30
                }
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
                    case "WIN_BEGIN":
                    case 100:
                        t.option = 100;
                        break;
                    case "RED_WIN":
                    case 101:
                        t.option = 101;
                        break;
                    case "BLUE_WIN":
                    case 102:
                        t.option = 102;
                        break;
                    case "EQUAL":
                    case 103:
                        t.option = 103;
                        break;
                    case "WIN_END":
                    case 199:
                        t.option = 199;
                        break;
                    case "HOLE_BEGIN":
                    case 200:
                        t.option = 200;
                        break;
                    case "HOLE_SAME":
                    case 203:
                        t.option = 203;
                        break;
                    case "HOLE_A":
                    case 205:
                        t.option = 205;
                        break;
                    case "HOLE_3_TONG_SAME_SHUN":
                    case 206:
                        t.option = 206;
                        break;
                    case "HOLE_END":
                    case 299:
                        t.option = 299;
                        break;
                    case "FIVE_BEGIN":
                    case 300:
                        t.option = 300;
                        break;
                    case "FIVE_NONE_1DUI":
                    case 301:
                        t.option = 301;
                        break;
                    case "FIVE_2DUI":
                    case 302:
                        t.option = 302;
                        break;
                    case "FIVE_3_SHUN_TONG_HUA":
                    case 303:
                        t.option = 303;
                        break;
                    case "FIVE_3_2":
                    case 304:
                        t.option = 304;
                        break;
                    case "FIVE_KING_TONG_HUA_SHUN_4":
                    case 305:
                        t.option = 305;
                        break;
                    case "FIVE_END":
                    case 399:
                        t.option = 399
                }
                return null != e.betAmount && (m.Long ? (t.betAmount = m.Long.fromValue(e.betAmount)).unsigned = !0 : "string" == typeof e.betAmount ? t.betAmount = parseInt(e.betAmount, 10) : "number" == typeof e.betAmount ? t.betAmount = e.betAmount : "object" == typeof e.betAmount && (t.betAmount = new m.LongBits(e.betAmount.low >>> 0, e.betAmount.high >>> 0).toNumber(!0))), null != e.winAmount && (m.Long ? (t.winAmount = m.Long.fromValue(e.winAmount)).unsigned = !1 : "string" == typeof e.winAmount ? t.winAmount = parseInt(e.winAmount, 10) : "number" == typeof e.winAmount ? t.winAmount = e.winAmount : "object" == typeof e.winAmount && (t.winAmount = new m.LongBits(e.winAmount.low >>> 0, e.winAmount.high >>> 0).toNumber())), null != e.isAuto && (t.isAuto = 0 | e.isAuto), null != e.betGameCoin && (m.Long ? (t.betGameCoin = m.Long.fromValue(e.betGameCoin)).unsigned = !1 : "string" == typeof e.betGameCoin ? t.betGameCoin = parseInt(e.betGameCoin, 10) : "number" == typeof e.betGameCoin ? t.betGameCoin = e.betGameCoin : "object" == typeof e.betGameCoin && (t.betGameCoin = new m.LongBits(e.betGameCoin.low >>> 0, e.betGameCoin.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.zone = t.enums === String ? "ZONE_DUMMY" : 0, o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.betAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.betAmount = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !1), o.winAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.winAmount = t.longs === String ? "0" : 0, o.isAuto = 0, m.Long ? (n = new m.Long(0, 0, !1), o.betGameCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.betGameCoin = t.longs === String ? "0" : 0
                }
                return null != e.zone && e.hasOwnProperty("zone") && (o.zone = t.enums === String ? void 0 === f.cowboy_proto.BetZone[e.zone] ? e.zone : f.cowboy_proto.BetZone[e.zone] : e.zone), null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.cowboy_proto.BetZoneOption[e.option] ? e.option : f.cowboy_proto.BetZoneOption[e.option] : e.option), null != e.betAmount && e.hasOwnProperty("betAmount") && ("number" == typeof e.betAmount ? o.betAmount = t.longs === String ? String(e.betAmount) : e.betAmount : o.betAmount = t.longs === String ? m.Long.prototype.toString.call(e.betAmount) : t.longs === Number ? new m.LongBits(e.betAmount.low >>> 0, e.betAmount.high >>> 0).toNumber(!0) : e.betAmount), null != e.winAmount && e.hasOwnProperty("winAmount") && ("number" == typeof e.winAmount ? o.winAmount = t.longs === String ? String(e.winAmount) : e.winAmount : o.winAmount = t.longs === String ? m.Long.prototype.toString.call(e.winAmount) : t.longs === Number ? new m.LongBits(e.winAmount.low >>> 0, e.winAmount.high >>> 0).toNumber() : e.winAmount), null != e.isAuto && e.hasOwnProperty("isAuto") && (o.isAuto = e.isAuto), null != e.betGameCoin && e.hasOwnProperty("betGameCoin") && ("number" == typeof e.betGameCoin ? o.betGameCoin = t.longs === String ? String(e.betGameCoin) : e.betGameCoin : o.betGameCoin = t.longs === String ? m.Long.prototype.toString.call(e.betGameCoin) : t.longs === Number ? new m.LongBits(e.betGameCoin.low >>> 0, e.betGameCoin.high >>> 0).toNumber() : e.betGameCoin), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.ZoneSettleDetail"
            }, e
        }(), l.PlayerHoleCard = function() {
            function e(e) {
                if (this.Cards = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.name = 0, e.prototype.Cards = m.emptyArray, e.prototype.option = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(8).int32(e.name), null != e.Cards && e.Cards.length)
                    for (var o = 0; o < e.Cards.length; ++o) f.cowboy_proto.CardItem.encode(e.Cards[o], t.uint32(18).fork()).ldelim();
                return null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(24).int32(e.option), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.PlayerHoleCard; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.name = e.int32();
                            break;
                        case 2:
                            n.Cards && n.Cards.length || (n.Cards = []), n.Cards.push(f.cowboy_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.option = e.int32();
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
                if (null != e.name && e.hasOwnProperty("name")) switch (e.name) {
                    default:
                        return "name: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                }
                if (null != e.Cards && e.hasOwnProperty("Cards")) {
                    if (!Array.isArray(e.Cards)) return "Cards: array expected";
                    for (var t = 0; t < e.Cards.length; ++t) {
                        var o = f.cowboy_proto.CardItem.verify(e.Cards[t]);
                        if (o) return "Cards." + o
                    }
                }
                if (null != e.option && e.hasOwnProperty("option")) switch (e.option) {
                    default:
                        return "option: enum value expected";
                    case 0:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 199:
                    case 200:
                    case 203:
                    case 205:
                    case 206:
                    case 299:
                    case 300:
                    case 301:
                    case 302:
                    case 303:
                    case 304:
                    case 305:
                    case 399:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.PlayerHoleCard) return e;
                var t = new f.cowboy_proto.PlayerHoleCard;
                switch (e.name) {
                    default:
                        if ("number" == typeof e.name) {
                            t.name = e.name;
                            break
                        }
                        break;
                    case "RoleName_DUMMY":
                    case 0:
                        t.name = 0;
                        break;
                    case "Red":
                    case 1:
                        t.name = 1;
                        break;
                    case "Blue":
                    case 2:
                        t.name = 2
                }
                if (e.Cards) {
                    if (!Array.isArray(e.Cards)) throw TypeError(".cowboy_proto.PlayerHoleCard.Cards: array expected");
                    t.Cards = [];
                    for (var o = 0; o < e.Cards.length; ++o) {
                        if ("object" != typeof e.Cards[o]) throw TypeError(".cowboy_proto.PlayerHoleCard.Cards: object expected");
                        t.Cards[o] = f.cowboy_proto.CardItem.fromObject(e.Cards[o])
                    }
                }
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
                    case "WIN_BEGIN":
                    case 100:
                        t.option = 100;
                        break;
                    case "RED_WIN":
                    case 101:
                        t.option = 101;
                        break;
                    case "BLUE_WIN":
                    case 102:
                        t.option = 102;
                        break;
                    case "EQUAL":
                    case 103:
                        t.option = 103;
                        break;
                    case "WIN_END":
                    case 199:
                        t.option = 199;
                        break;
                    case "HOLE_BEGIN":
                    case 200:
                        t.option = 200;
                        break;
                    case "HOLE_SAME":
                    case 203:
                        t.option = 203;
                        break;
                    case "HOLE_A":
                    case 205:
                        t.option = 205;
                        break;
                    case "HOLE_3_TONG_SAME_SHUN":
                    case 206:
                        t.option = 206;
                        break;
                    case "HOLE_END":
                    case 299:
                        t.option = 299;
                        break;
                    case "FIVE_BEGIN":
                    case 300:
                        t.option = 300;
                        break;
                    case "FIVE_NONE_1DUI":
                    case 301:
                        t.option = 301;
                        break;
                    case "FIVE_2DUI":
                    case 302:
                        t.option = 302;
                        break;
                    case "FIVE_3_SHUN_TONG_HUA":
                    case 303:
                        t.option = 303;
                        break;
                    case "FIVE_3_2":
                    case 304:
                        t.option = 304;
                        break;
                    case "FIVE_KING_TONG_HUA_SHUN_4":
                    case 305:
                        t.option = 305;
                        break;
                    case "FIVE_END":
                    case 399:
                        t.option = 399
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.Cards = []), t.defaults && (o.name = t.enums === String ? "RoleName_DUMMY" : 0, o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0), null != e.name && e.hasOwnProperty("name") && (o.name = t.enums === String ? void 0 === f.cowboy_proto.RoleName[e.name] ? e.name : f.cowboy_proto.RoleName[e.name] : e.name), e.Cards && e.Cards.length) {
                    o.Cards = [];
                    for (var n = 0; n < e.Cards.length; ++n) o.Cards[n] = f.cowboy_proto.CardItem.toObject(e.Cards[n], t)
                }
                return null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.cowboy_proto.BetZoneOption[e.option] ? e.option : f.cowboy_proto.BetZoneOption[e.option] : e.option), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.PlayerHoleCard"
            }, e
        }(), l.ConnClosed = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.ConnClosed; e.pos < o;) {
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
                if (e instanceof f.cowboy_proto.ConnClosed) return e;
                var t = new f.cowboy_proto.ConnClosed;
                return null != e.Reason && (t.Reason = 0 | e.Reason), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.Reason = 0), null != e.Reason && e.hasOwnProperty("Reason") && (o.Reason = e.Reason), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.ConnClosed"
            }, e
        }(), l.LeaveRoomReq = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.LeaveRoomReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.cowboy_proto.LeaveRoomReq ? e : new f.cowboy_proto.LeaveRoomReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.LeaveRoomReq"
            }, e
        }(), l.LeaveRoomResp = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.LeaveRoomResp; e.pos < o;) {
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
                    case 31e3:
                    case 31001:
                    case 31002:
                    case 31003:
                    case 31004:
                    case 31005:
                    case 31006:
                    case 31007:
                    case 31008:
                    case 31009:
                    case 31010:
                    case 31011:
                    case 31012:
                    case 31013:
                    case 31014:
                    case 31015:
                    case 31016:
                    case 31017:
                    case 31018:
                    case 31019:
                    case 31020:
                    case 31021:
                    case 31022:
                    case 31023:
                    case 31026:
                    case 31024:
                    case 31025:
                    case 31117:
                    case 31118:
                    case 31119:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.LeaveRoomResp) return e;
                var t = new f.cowboy_proto.LeaveRoomResp;
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
                    case 31e3:
                        t.code = 31e3;
                        break;
                    case "LOW_VERSION":
                    case 31001:
                        t.code = 31001;
                        break;
                    case "INVALID_TOKEN":
                    case 31002:
                        t.code = 31002;
                        break;
                    case "SERVER_BUSY":
                    case 31003:
                        t.code = 31003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 31004:
                        t.code = 31004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 31005:
                        t.code = 31005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 31006:
                        t.code = 31006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 31007:
                        t.code = 31007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 31008:
                        t.code = 31008;
                        break;
                    case "NO_BET":
                    case 31009:
                        t.code = 31009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 31010:
                        t.code = 31010;
                        break;
                    case "NO_MONEY":
                    case 31011:
                        t.code = 31011;
                        break;
                    case "BET_BAD_PARAM":
                    case 31012:
                        t.code = 31012;
                        break;
                    case "STOP_SERVICE":
                    case 31013:
                        t.code = 31013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 31014:
                        t.code = 31014;
                        break;
                    case "BET_TOO_SMALL":
                    case 31015:
                        t.code = 31015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 31016:
                        t.code = 31016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 31017:
                        t.code = 31017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 31018:
                        t.code = 31018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 31019:
                        t.code = 31019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 31020:
                        t.code = 31020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 31021:
                        t.code = 31021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 31022:
                        t.code = 31022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 31023:
                        t.code = 31023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 31026:
                        t.code = 31026;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 31024:
                        t.code = 31024;
                        break;
                    case "IN_CALM_DOWN":
                    case 31025:
                        t.code = 31025;
                        break;
                    case "C2CPAYMENT_LIST_GET_ERROR":
                    case 31117:
                        t.code = 31117;
                        break;
                    case "C2CPAYMENT_NOT_ALLOW":
                    case 31118:
                        t.code = 31118;
                        break;
                    case "CAN_NOT_LEAVE_IN_BETTING":
                    case 31119:
                        t.code = 31119
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.cowboy_proto.ErrorCode[e.code] ? e.code : f.cowboy_proto.ErrorCode[e.code] : e.code), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.LeaveRoomResp"
            }, e
        }(), l.StartBetNotify = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.StartBetNotify; e.pos < o;) {
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
                if (e instanceof f.cowboy_proto.StartBetNotify) return e;
                var t = new f.cowboy_proto.StartBetNotify;
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
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.StartBetNotify"
            }, e
        }(), l.TrendData = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.win = 0, e.prototype.win_patterns = 0, e.prototype.hand_num = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.win && Object.hasOwnProperty.call(e, "win") && t.uint32(8).int32(e.win), null != e.win_patterns && Object.hasOwnProperty.call(e, "win_patterns") && t.uint32(16).uint32(e.win_patterns), null != e.hand_num && Object.hasOwnProperty.call(e, "hand_num") && t.uint32(24).int32(e.hand_num), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.TrendData; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.win = e.int32();
                            break;
                        case 2:
                            n.win_patterns = e.uint32();
                            break;
                        case 3:
                            n.hand_num = e.int32();
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
                if (null != e.win && e.hasOwnProperty("win")) switch (e.win) {
                    default:
                        return "win: enum value expected";
                    case 0:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 199:
                    case 200:
                    case 203:
                    case 205:
                    case 206:
                    case 299:
                    case 300:
                    case 301:
                    case 302:
                    case 303:
                    case 304:
                    case 305:
                    case 399:
                }
                return null != e.win_patterns && e.hasOwnProperty("win_patterns") && !m.isInteger(e.win_patterns) ? "win_patterns: integer expected" : null != e.hand_num && e.hasOwnProperty("hand_num") && !m.isInteger(e.hand_num) ? "hand_num: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.TrendData) return e;
                var t = new f.cowboy_proto.TrendData;
                switch (e.win) {
                    default:
                        if ("number" == typeof e.win) {
                            t.win = e.win;
                            break
                        }
                        break;
                    case "BetZoneOption_DUMMY":
                    case 0:
                        t.win = 0;
                        break;
                    case "WIN_BEGIN":
                    case 100:
                        t.win = 100;
                        break;
                    case "RED_WIN":
                    case 101:
                        t.win = 101;
                        break;
                    case "BLUE_WIN":
                    case 102:
                        t.win = 102;
                        break;
                    case "EQUAL":
                    case 103:
                        t.win = 103;
                        break;
                    case "WIN_END":
                    case 199:
                        t.win = 199;
                        break;
                    case "HOLE_BEGIN":
                    case 200:
                        t.win = 200;
                        break;
                    case "HOLE_SAME":
                    case 203:
                        t.win = 203;
                        break;
                    case "HOLE_A":
                    case 205:
                        t.win = 205;
                        break;
                    case "HOLE_3_TONG_SAME_SHUN":
                    case 206:
                        t.win = 206;
                        break;
                    case "HOLE_END":
                    case 299:
                        t.win = 299;
                        break;
                    case "FIVE_BEGIN":
                    case 300:
                        t.win = 300;
                        break;
                    case "FIVE_NONE_1DUI":
                    case 301:
                        t.win = 301;
                        break;
                    case "FIVE_2DUI":
                    case 302:
                        t.win = 302;
                        break;
                    case "FIVE_3_SHUN_TONG_HUA":
                    case 303:
                        t.win = 303;
                        break;
                    case "FIVE_3_2":
                    case 304:
                        t.win = 304;
                        break;
                    case "FIVE_KING_TONG_HUA_SHUN_4":
                    case 305:
                        t.win = 305;
                        break;
                    case "FIVE_END":
                    case 399:
                        t.win = 399
                }
                return null != e.win_patterns && (t.win_patterns = e.win_patterns >>> 0), null != e.hand_num && (t.hand_num = 0 | e.hand_num), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.win = t.enums === String ? "BetZoneOption_DUMMY" : 0, o.win_patterns = 0, o.hand_num = 0), null != e.win && e.hasOwnProperty("win") && (o.win = t.enums === String ? void 0 === f.cowboy_proto.BetZoneOption[e.win] ? e.win : f.cowboy_proto.BetZoneOption[e.win] : e.win), null != e.win_patterns && e.hasOwnProperty("win_patterns") && (o.win_patterns = e.win_patterns), null != e.hand_num && e.hasOwnProperty("hand_num") && (o.hand_num = e.hand_num), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.TrendData"
            }, e
        }(), l.RoomTrendRoadReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.roomuuid = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.roomuuid && Object.hasOwnProperty.call(e, "roomuuid") && t.uint32(8).uint64(e.roomuuid), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.RoomTrendRoadReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.roomuuid = e.uint64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomuuid && e.hasOwnProperty("roomuuid") && !(m.isInteger(e.roomuuid) || e.roomuuid && m.isInteger(e.roomuuid.low) && m.isInteger(e.roomuuid.high)) ? "roomuuid: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.RoomTrendRoadReq) return e;
                var t = new f.cowboy_proto.RoomTrendRoadReq;
                return null != e.roomuuid && (m.Long ? (t.roomuuid = m.Long.fromValue(e.roomuuid)).unsigned = !0 : "string" == typeof e.roomuuid ? t.roomuuid = parseInt(e.roomuuid, 10) : "number" == typeof e.roomuuid ? t.roomuuid = e.roomuuid : "object" == typeof e.roomuuid && (t.roomuuid = new m.LongBits(e.roomuuid.low >>> 0, e.roomuuid.high >>> 0).toNumber(!0))), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults)
                    if (m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.roomuuid = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.roomuuid = t.longs === String ? "0" : 0;
                return null != e.roomuuid && e.hasOwnProperty("roomuuid") && ("number" == typeof e.roomuuid ? o.roomuuid = t.longs === String ? String(e.roomuuid) : e.roomuuid : o.roomuuid = t.longs === String ? m.Long.prototype.toString.call(e.roomuuid) : t.longs === Number ? new m.LongBits(e.roomuuid.low >>> 0, e.roomuuid.high >>> 0).toNumber(!0) : e.roomuuid), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.RoomTrendRoadReq"
            }, e
        }(), l.RoomTrendRoadRsp = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.RoomTrendRoadRsp; e.pos < o;) {
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
                    case 31e3:
                    case 31001:
                    case 31002:
                    case 31003:
                    case 31004:
                    case 31005:
                    case 31006:
                    case 31007:
                    case 31008:
                    case 31009:
                    case 31010:
                    case 31011:
                    case 31012:
                    case 31013:
                    case 31014:
                    case 31015:
                    case 31016:
                    case 31017:
                    case 31018:
                    case 31019:
                    case 31020:
                    case 31021:
                    case 31022:
                    case 31023:
                    case 31026:
                    case 31024:
                    case 31025:
                    case 31117:
                    case 31118:
                    case 31119:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.RoomTrendRoadRsp) return e;
                var t = new f.cowboy_proto.RoomTrendRoadRsp;
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
                    case 31e3:
                        t.code = 31e3;
                        break;
                    case "LOW_VERSION":
                    case 31001:
                        t.code = 31001;
                        break;
                    case "INVALID_TOKEN":
                    case 31002:
                        t.code = 31002;
                        break;
                    case "SERVER_BUSY":
                    case 31003:
                        t.code = 31003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 31004:
                        t.code = 31004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 31005:
                        t.code = 31005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 31006:
                        t.code = 31006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 31007:
                        t.code = 31007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 31008:
                        t.code = 31008;
                        break;
                    case "NO_BET":
                    case 31009:
                        t.code = 31009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 31010:
                        t.code = 31010;
                        break;
                    case "NO_MONEY":
                    case 31011:
                        t.code = 31011;
                        break;
                    case "BET_BAD_PARAM":
                    case 31012:
                        t.code = 31012;
                        break;
                    case "STOP_SERVICE":
                    case 31013:
                        t.code = 31013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 31014:
                        t.code = 31014;
                        break;
                    case "BET_TOO_SMALL":
                    case 31015:
                        t.code = 31015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 31016:
                        t.code = 31016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 31017:
                        t.code = 31017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 31018:
                        t.code = 31018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 31019:
                        t.code = 31019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 31020:
                        t.code = 31020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 31021:
                        t.code = 31021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 31022:
                        t.code = 31022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 31023:
                        t.code = 31023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 31026:
                        t.code = 31026;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 31024:
                        t.code = 31024;
                        break;
                    case "IN_CALM_DOWN":
                    case 31025:
                        t.code = 31025;
                        break;
                    case "C2CPAYMENT_LIST_GET_ERROR":
                    case 31117:
                        t.code = 31117;
                        break;
                    case "C2CPAYMENT_NOT_ALLOW":
                    case 31118:
                        t.code = 31118;
                        break;
                    case "CAN_NOT_LEAVE_IN_BETTING":
                    case 31119:
                        t.code = 31119
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.cowboy_proto.ErrorCode[e.code] ? e.code : f.cowboy_proto.ErrorCode[e.code] : e.code), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.RoomTrendRoadRsp"
            }, e
        }(), l.RoomTrendRoadNotice = function() {
            function e(e) {
                if (this.road = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.road = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.road && e.road.length)
                    for (var o = 0; o < e.road.length; ++o) f.cowboy_proto.TrendRoad.encode(e.road[o], t.uint32(10).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.RoomTrendRoadNotice; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.road && n.road.length || (n.road = []), n.road.push(f.cowboy_proto.TrendRoad.decode(e, e.uint32()));
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
                if (null != e.road && e.hasOwnProperty("road")) {
                    if (!Array.isArray(e.road)) return "road: array expected";
                    for (var t = 0; t < e.road.length; ++t) {
                        var o = f.cowboy_proto.TrendRoad.verify(e.road[t]);
                        if (o) return "road." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.RoomTrendRoadNotice) return e;
                var t = new f.cowboy_proto.RoomTrendRoadNotice;
                if (e.road) {
                    if (!Array.isArray(e.road)) throw TypeError(".cowboy_proto.RoomTrendRoadNotice.road: array expected");
                    t.road = [];
                    for (var o = 0; o < e.road.length; ++o) {
                        if ("object" != typeof e.road[o]) throw TypeError(".cowboy_proto.RoomTrendRoadNotice.road: object expected");
                        t.road[o] = f.cowboy_proto.TrendRoad.fromObject(e.road[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.road = []), e.road && e.road.length) {
                    o.road = [];
                    for (var n = 0; n < e.road.length; ++n) o.road[n] = f.cowboy_proto.TrendRoad.toObject(e.road[n], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.RoomTrendRoadNotice"
            }, e
        }(), l.TrendRoad = function() {
            function e(e) {
                if (this.road_row = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.road_row = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.road_row && e.road_row.length)
                    for (var o = 0; o < e.road_row.length; ++o) f.cowboy_proto.TrendRoadInfo.encode(e.road_row[o], t.uint32(10).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.TrendRoad; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.road_row && n.road_row.length || (n.road_row = []), n.road_row.push(f.cowboy_proto.TrendRoadInfo.decode(e, e.uint32()));
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
                if (null != e.road_row && e.hasOwnProperty("road_row")) {
                    if (!Array.isArray(e.road_row)) return "road_row: array expected";
                    for (var t = 0; t < e.road_row.length; ++t) {
                        var o = f.cowboy_proto.TrendRoadInfo.verify(e.road_row[t]);
                        if (o) return "road_row." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.TrendRoad) return e;
                var t = new f.cowboy_proto.TrendRoad;
                if (e.road_row) {
                    if (!Array.isArray(e.road_row)) throw TypeError(".cowboy_proto.TrendRoad.road_row: array expected");
                    t.road_row = [];
                    for (var o = 0; o < e.road_row.length; ++o) {
                        if ("object" != typeof e.road_row[o]) throw TypeError(".cowboy_proto.TrendRoad.road_row: object expected");
                        t.road_row[o] = f.cowboy_proto.TrendRoadInfo.fromObject(e.road_row[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.road_row = []), e.road_row && e.road_row.length) {
                    o.road_row = [];
                    for (var n = 0; n < e.road_row.length; ++n) o.road_row[n] = f.cowboy_proto.TrendRoadInfo.toObject(e.road_row[n], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.TrendRoad"
            }, e
        }(), l.TrendRoadInfo = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.win = "", e.prototype.eqc = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.win && Object.hasOwnProperty.call(e, "win") && t.uint32(10).string(e.win), null != e.eqc && Object.hasOwnProperty.call(e, "eqc") && t.uint32(16).int32(e.eqc), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.TrendRoadInfo; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.win = e.string();
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
                return "object" != typeof e || null === e ? "object expected" : null != e.win && e.hasOwnProperty("win") && !m.isString(e.win) ? "win: string expected" : null != e.eqc && e.hasOwnProperty("eqc") && !m.isInteger(e.eqc) ? "eqc: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.TrendRoadInfo) return e;
                var t = new f.cowboy_proto.TrendRoadInfo;
                return null != e.win && (t.win = String(e.win)), null != e.eqc && (t.eqc = 0 | e.eqc), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.win = "", o.eqc = 0), null != e.win && e.hasOwnProperty("win") && (o.win = e.win), null != e.eqc && e.hasOwnProperty("eqc") && (o.eqc = e.eqc), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.TrendRoadInfo"
            }, e
        }(), l.DailyStat = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.betzone_type = 0, e.prototype.count = 0, e.prototype.win_pattern = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.betzone_type && Object.hasOwnProperty.call(e, "betzone_type") && t.uint32(8).int32(e.betzone_type), null != e.count && Object.hasOwnProperty.call(e, "count") && t.uint32(16).uint32(e.count), null != e.win_pattern && Object.hasOwnProperty.call(e, "win_pattern") && t.uint32(24).uint32(e.win_pattern), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.DailyStat; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.betzone_type = e.int32();
                            break;
                        case 2:
                            n.count = e.uint32();
                            break;
                        case 3:
                            n.win_pattern = e.uint32();
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
                if (null != e.betzone_type && e.hasOwnProperty("betzone_type")) switch (e.betzone_type) {
                    default:
                        return "betzone_type: enum value expected";
                    case 0:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 199:
                    case 200:
                    case 203:
                    case 205:
                    case 206:
                    case 299:
                    case 300:
                    case 301:
                    case 302:
                    case 303:
                    case 304:
                    case 305:
                    case 399:
                }
                return null != e.count && e.hasOwnProperty("count") && !m.isInteger(e.count) ? "count: integer expected" : null != e.win_pattern && e.hasOwnProperty("win_pattern") && !m.isInteger(e.win_pattern) ? "win_pattern: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.DailyStat) return e;
                var t = new f.cowboy_proto.DailyStat;
                switch (e.betzone_type) {
                    default:
                        if ("number" == typeof e.betzone_type) {
                            t.betzone_type = e.betzone_type;
                            break
                        }
                        break;
                    case "BetZoneOption_DUMMY":
                    case 0:
                        t.betzone_type = 0;
                        break;
                    case "WIN_BEGIN":
                    case 100:
                        t.betzone_type = 100;
                        break;
                    case "RED_WIN":
                    case 101:
                        t.betzone_type = 101;
                        break;
                    case "BLUE_WIN":
                    case 102:
                        t.betzone_type = 102;
                        break;
                    case "EQUAL":
                    case 103:
                        t.betzone_type = 103;
                        break;
                    case "WIN_END":
                    case 199:
                        t.betzone_type = 199;
                        break;
                    case "HOLE_BEGIN":
                    case 200:
                        t.betzone_type = 200;
                        break;
                    case "HOLE_SAME":
                    case 203:
                        t.betzone_type = 203;
                        break;
                    case "HOLE_A":
                    case 205:
                        t.betzone_type = 205;
                        break;
                    case "HOLE_3_TONG_SAME_SHUN":
                    case 206:
                        t.betzone_type = 206;
                        break;
                    case "HOLE_END":
                    case 299:
                        t.betzone_type = 299;
                        break;
                    case "FIVE_BEGIN":
                    case 300:
                        t.betzone_type = 300;
                        break;
                    case "FIVE_NONE_1DUI":
                    case 301:
                        t.betzone_type = 301;
                        break;
                    case "FIVE_2DUI":
                    case 302:
                        t.betzone_type = 302;
                        break;
                    case "FIVE_3_SHUN_TONG_HUA":
                    case 303:
                        t.betzone_type = 303;
                        break;
                    case "FIVE_3_2":
                    case 304:
                        t.betzone_type = 304;
                        break;
                    case "FIVE_KING_TONG_HUA_SHUN_4":
                    case 305:
                        t.betzone_type = 305;
                        break;
                    case "FIVE_END":
                    case 399:
                        t.betzone_type = 399
                }
                return null != e.count && (t.count = e.count >>> 0), null != e.win_pattern && (t.win_pattern = e.win_pattern >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.betzone_type = t.enums === String ? "BetZoneOption_DUMMY" : 0, o.count = 0, o.win_pattern = 0), null != e.betzone_type && e.hasOwnProperty("betzone_type") && (o.betzone_type = t.enums === String ? void 0 === f.cowboy_proto.BetZoneOption[e.betzone_type] ? e.betzone_type : f.cowboy_proto.BetZoneOption[e.betzone_type] : e.betzone_type), null != e.count && e.hasOwnProperty("count") && (o.count = e.count), null != e.win_pattern && e.hasOwnProperty("win_pattern") && (o.win_pattern = e.win_pattern), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.DailyStat"
            }, e
        }(), l.RoomTrendReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.roomuuid = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.roomuuid && Object.hasOwnProperty.call(e, "roomuuid") && t.uint32(8).uint64(e.roomuuid), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.RoomTrendReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.roomuuid = e.uint64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.roomuuid && e.hasOwnProperty("roomuuid") && !(m.isInteger(e.roomuuid) || e.roomuuid && m.isInteger(e.roomuuid.low) && m.isInteger(e.roomuuid.high)) ? "roomuuid: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.RoomTrendReq) return e;
                var t = new f.cowboy_proto.RoomTrendReq;
                return null != e.roomuuid && (m.Long ? (t.roomuuid = m.Long.fromValue(e.roomuuid)).unsigned = !0 : "string" == typeof e.roomuuid ? t.roomuuid = parseInt(e.roomuuid, 10) : "number" == typeof e.roomuuid ? t.roomuuid = e.roomuuid : "object" == typeof e.roomuuid && (t.roomuuid = new m.LongBits(e.roomuuid.low >>> 0, e.roomuuid.high >>> 0).toNumber(!0))), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults)
                    if (m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.roomuuid = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.roomuuid = t.longs === String ? "0" : 0;
                return null != e.roomuuid && e.hasOwnProperty("roomuuid") && ("number" == typeof e.roomuuid ? o.roomuuid = t.longs === String ? String(e.roomuuid) : e.roomuuid : o.roomuuid = t.longs === String ? m.Long.prototype.toString.call(e.roomuuid) : t.longs === Number ? new m.LongBits(e.roomuuid.low >>> 0, e.roomuuid.high >>> 0).toNumber(!0) : e.roomuuid), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.RoomTrendReq"
            }, e
        }(), l.RoomTrendRsp = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.RoomTrendRsp; e.pos < o;) {
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
                    case 31e3:
                    case 31001:
                    case 31002:
                    case 31003:
                    case 31004:
                    case 31005:
                    case 31006:
                    case 31007:
                    case 31008:
                    case 31009:
                    case 31010:
                    case 31011:
                    case 31012:
                    case 31013:
                    case 31014:
                    case 31015:
                    case 31016:
                    case 31017:
                    case 31018:
                    case 31019:
                    case 31020:
                    case 31021:
                    case 31022:
                    case 31023:
                    case 31026:
                    case 31024:
                    case 31025:
                    case 31117:
                    case 31118:
                    case 31119:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.RoomTrendRsp) return e;
                var t = new f.cowboy_proto.RoomTrendRsp;
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
                    case 31e3:
                        t.code = 31e3;
                        break;
                    case "LOW_VERSION":
                    case 31001:
                        t.code = 31001;
                        break;
                    case "INVALID_TOKEN":
                    case 31002:
                        t.code = 31002;
                        break;
                    case "SERVER_BUSY":
                    case 31003:
                        t.code = 31003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 31004:
                        t.code = 31004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 31005:
                        t.code = 31005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 31006:
                        t.code = 31006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 31007:
                        t.code = 31007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 31008:
                        t.code = 31008;
                        break;
                    case "NO_BET":
                    case 31009:
                        t.code = 31009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 31010:
                        t.code = 31010;
                        break;
                    case "NO_MONEY":
                    case 31011:
                        t.code = 31011;
                        break;
                    case "BET_BAD_PARAM":
                    case 31012:
                        t.code = 31012;
                        break;
                    case "STOP_SERVICE":
                    case 31013:
                        t.code = 31013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 31014:
                        t.code = 31014;
                        break;
                    case "BET_TOO_SMALL":
                    case 31015:
                        t.code = 31015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 31016:
                        t.code = 31016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 31017:
                        t.code = 31017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 31018:
                        t.code = 31018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 31019:
                        t.code = 31019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 31020:
                        t.code = 31020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 31021:
                        t.code = 31021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 31022:
                        t.code = 31022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 31023:
                        t.code = 31023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 31026:
                        t.code = 31026;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 31024:
                        t.code = 31024;
                        break;
                    case "IN_CALM_DOWN":
                    case 31025:
                        t.code = 31025;
                        break;
                    case "C2CPAYMENT_LIST_GET_ERROR":
                    case 31117:
                        t.code = 31117;
                        break;
                    case "C2CPAYMENT_NOT_ALLOW":
                    case 31118:
                        t.code = 31118;
                        break;
                    case "CAN_NOT_LEAVE_IN_BETTING":
                    case 31119:
                        t.code = 31119
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.cowboy_proto.ErrorCode[e.code] ? e.code : f.cowboy_proto.ErrorCode[e.code] : e.code), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.RoomTrendRsp"
            }, e
        }(), l.RoomTrendNotice = function() {
            function e(e) {
                if (this.trend = [], this.stats = [], this.road = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.roomuuid = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.trend = m.emptyArray, e.prototype.stats = m.emptyArray, e.prototype.road = m.emptyArray, e.prototype.lastRow = 0, e.prototype.lastCol = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.roomuuid && Object.hasOwnProperty.call(e, "roomuuid") && t.uint32(8).uint64(e.roomuuid), null != e.trend && e.trend.length)
                    for (var o = 0; o < e.trend.length; ++o) f.cowboy_proto.TrendData.encode(e.trend[o], t.uint32(18).fork()).ldelim();
                if (null != e.stats && e.stats.length)
                    for (o = 0; o < e.stats.length; ++o) f.cowboy_proto.DailyStat.encode(e.stats[o], t.uint32(26).fork()).ldelim();
                if (null != e.road && e.road.length)
                    for (o = 0; o < e.road.length; ++o) f.cowboy_proto.TrendRoad.encode(e.road[o], t.uint32(34).fork()).ldelim();
                return null != e.lastRow && Object.hasOwnProperty.call(e, "lastRow") && t.uint32(40).int32(e.lastRow), null != e.lastCol && Object.hasOwnProperty.call(e, "lastCol") && t.uint32(48).int32(e.lastCol), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.RoomTrendNotice; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.roomuuid = e.uint64();
                            break;
                        case 2:
                            n.trend && n.trend.length || (n.trend = []), n.trend.push(f.cowboy_proto.TrendData.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.stats && n.stats.length || (n.stats = []), n.stats.push(f.cowboy_proto.DailyStat.decode(e, e.uint32()));
                            break;
                        case 4:
                            n.road && n.road.length || (n.road = []), n.road.push(f.cowboy_proto.TrendRoad.decode(e, e.uint32()));
                            break;
                        case 5:
                            n.lastRow = e.int32();
                            break;
                        case 6:
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
                if (null != e.roomuuid && e.hasOwnProperty("roomuuid") && !(m.isInteger(e.roomuuid) || e.roomuuid && m.isInteger(e.roomuuid.low) && m.isInteger(e.roomuuid.high))) return "roomuuid: integer|Long expected";
                if (null != e.trend && e.hasOwnProperty("trend")) {
                    if (!Array.isArray(e.trend)) return "trend: array expected";
                    for (var t = 0; t < e.trend.length; ++t)
                        if (o = f.cowboy_proto.TrendData.verify(e.trend[t])) return "trend." + o
                }
                if (null != e.stats && e.hasOwnProperty("stats")) {
                    if (!Array.isArray(e.stats)) return "stats: array expected";
                    for (t = 0; t < e.stats.length; ++t)
                        if (o = f.cowboy_proto.DailyStat.verify(e.stats[t])) return "stats." + o
                }
                if (null != e.road && e.hasOwnProperty("road")) {
                    if (!Array.isArray(e.road)) return "road: array expected";
                    for (t = 0; t < e.road.length; ++t) {
                        var o;
                        if (o = f.cowboy_proto.TrendRoad.verify(e.road[t])) return "road." + o
                    }
                }
                return null != e.lastRow && e.hasOwnProperty("lastRow") && !m.isInteger(e.lastRow) ? "lastRow: integer expected" : null != e.lastCol && e.hasOwnProperty("lastCol") && !m.isInteger(e.lastCol) ? "lastCol: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.RoomTrendNotice) return e;
                var t = new f.cowboy_proto.RoomTrendNotice;
                if (null != e.roomuuid && (m.Long ? (t.roomuuid = m.Long.fromValue(e.roomuuid)).unsigned = !0 : "string" == typeof e.roomuuid ? t.roomuuid = parseInt(e.roomuuid, 10) : "number" == typeof e.roomuuid ? t.roomuuid = e.roomuuid : "object" == typeof e.roomuuid && (t.roomuuid = new m.LongBits(e.roomuuid.low >>> 0, e.roomuuid.high >>> 0).toNumber(!0))), e.trend) {
                    if (!Array.isArray(e.trend)) throw TypeError(".cowboy_proto.RoomTrendNotice.trend: array expected");
                    t.trend = [];
                    for (var o = 0; o < e.trend.length; ++o) {
                        if ("object" != typeof e.trend[o]) throw TypeError(".cowboy_proto.RoomTrendNotice.trend: object expected");
                        t.trend[o] = f.cowboy_proto.TrendData.fromObject(e.trend[o])
                    }
                }
                if (e.stats) {
                    if (!Array.isArray(e.stats)) throw TypeError(".cowboy_proto.RoomTrendNotice.stats: array expected");
                    for (t.stats = [], o = 0; o < e.stats.length; ++o) {
                        if ("object" != typeof e.stats[o]) throw TypeError(".cowboy_proto.RoomTrendNotice.stats: object expected");
                        t.stats[o] = f.cowboy_proto.DailyStat.fromObject(e.stats[o])
                    }
                }
                if (e.road) {
                    if (!Array.isArray(e.road)) throw TypeError(".cowboy_proto.RoomTrendNotice.road: array expected");
                    for (t.road = [], o = 0; o < e.road.length; ++o) {
                        if ("object" != typeof e.road[o]) throw TypeError(".cowboy_proto.RoomTrendNotice.road: object expected");
                        t.road[o] = f.cowboy_proto.TrendRoad.fromObject(e.road[o])
                    }
                }
                return null != e.lastRow && (t.lastRow = 0 | e.lastRow), null != e.lastCol && (t.lastCol = 0 | e.lastCol), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.trend = [], o.stats = [], o.road = []), t.defaults) {
                    if (m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.roomuuid = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.roomuuid = t.longs === String ? "0" : 0;
                    o.lastRow = 0, o.lastCol = 0
                }
                if (null != e.roomuuid && e.hasOwnProperty("roomuuid") && ("number" == typeof e.roomuuid ? o.roomuuid = t.longs === String ? String(e.roomuuid) : e.roomuuid : o.roomuuid = t.longs === String ? m.Long.prototype.toString.call(e.roomuuid) : t.longs === Number ? new m.LongBits(e.roomuuid.low >>> 0, e.roomuuid.high >>> 0).toNumber(!0) : e.roomuuid), e.trend && e.trend.length) {
                    o.trend = [];
                    for (var r = 0; r < e.trend.length; ++r) o.trend[r] = f.cowboy_proto.TrendData.toObject(e.trend[r], t)
                }
                if (e.stats && e.stats.length)
                    for (o.stats = [], r = 0; r < e.stats.length; ++r) o.stats[r] = f.cowboy_proto.DailyStat.toObject(e.stats[r], t);
                if (e.road && e.road.length)
                    for (o.road = [], r = 0; r < e.road.length; ++r) o.road[r] = f.cowboy_proto.TrendRoad.toObject(e.road[r], t);
                return null != e.lastRow && e.hasOwnProperty("lastRow") && (o.lastRow = e.lastRow), null != e.lastCol && e.hasOwnProperty("lastCol") && (o.lastCol = e.lastCol), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.RoomTrendNotice"
            }, e
        }(), l.AutoBetReq = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.AutoBetReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.cowboy_proto.AutoBetReq ? e : new f.cowboy_proto.AutoBetReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.AutoBetReq"
            }, e
        }(), l.AutoBetResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.canAuto = !1, e.prototype.CalmDownLeftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.CalmDownDeadLineTimeStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.bill = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.canAuto && Object.hasOwnProperty.call(e, "canAuto") && t.uint32(16).bool(e.canAuto), null != e.CalmDownLeftSeconds && Object.hasOwnProperty.call(e, "CalmDownLeftSeconds") && t.uint32(24).int64(e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && Object.hasOwnProperty.call(e, "CalmDownDeadLineTimeStamp") && t.uint32(32).int64(e.CalmDownDeadLineTimeStamp), null != e.bill && Object.hasOwnProperty.call(e, "bill") && f.cowboy_proto.BillInfo.encode(e.bill, t.uint32(42).fork()).ldelim(), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.AutoBetResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.canAuto = e.bool();
                            break;
                        case 3:
                            n.CalmDownLeftSeconds = e.int64();
                            break;
                        case 4:
                            n.CalmDownDeadLineTimeStamp = e.int64();
                            break;
                        case 5:
                            n.bill = f.cowboy_proto.BillInfo.decode(e, e.uint32());
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
                    case 31e3:
                    case 31001:
                    case 31002:
                    case 31003:
                    case 31004:
                    case 31005:
                    case 31006:
                    case 31007:
                    case 31008:
                    case 31009:
                    case 31010:
                    case 31011:
                    case 31012:
                    case 31013:
                    case 31014:
                    case 31015:
                    case 31016:
                    case 31017:
                    case 31018:
                    case 31019:
                    case 31020:
                    case 31021:
                    case 31022:
                    case 31023:
                    case 31026:
                    case 31024:
                    case 31025:
                    case 31117:
                    case 31118:
                    case 31119:
                }
                if (null != e.canAuto && e.hasOwnProperty("canAuto") && "boolean" != typeof e.canAuto) return "canAuto: boolean expected";
                if (null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && !(m.isInteger(e.CalmDownLeftSeconds) || e.CalmDownLeftSeconds && m.isInteger(e.CalmDownLeftSeconds.low) && m.isInteger(e.CalmDownLeftSeconds.high))) return "CalmDownLeftSeconds: integer|Long expected";
                if (null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && !(m.isInteger(e.CalmDownDeadLineTimeStamp) || e.CalmDownDeadLineTimeStamp && m.isInteger(e.CalmDownDeadLineTimeStamp.low) && m.isInteger(e.CalmDownDeadLineTimeStamp.high))) return "CalmDownDeadLineTimeStamp: integer|Long expected";
                if (null != e.bill && e.hasOwnProperty("bill")) {
                    var t = f.cowboy_proto.BillInfo.verify(e.bill);
                    if (t) return "bill." + t
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.AutoBetResp) return e;
                var t = new f.cowboy_proto.AutoBetResp;
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
                    case 31e3:
                        t.code = 31e3;
                        break;
                    case "LOW_VERSION":
                    case 31001:
                        t.code = 31001;
                        break;
                    case "INVALID_TOKEN":
                    case 31002:
                        t.code = 31002;
                        break;
                    case "SERVER_BUSY":
                    case 31003:
                        t.code = 31003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 31004:
                        t.code = 31004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 31005:
                        t.code = 31005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 31006:
                        t.code = 31006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 31007:
                        t.code = 31007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 31008:
                        t.code = 31008;
                        break;
                    case "NO_BET":
                    case 31009:
                        t.code = 31009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 31010:
                        t.code = 31010;
                        break;
                    case "NO_MONEY":
                    case 31011:
                        t.code = 31011;
                        break;
                    case "BET_BAD_PARAM":
                    case 31012:
                        t.code = 31012;
                        break;
                    case "STOP_SERVICE":
                    case 31013:
                        t.code = 31013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 31014:
                        t.code = 31014;
                        break;
                    case "BET_TOO_SMALL":
                    case 31015:
                        t.code = 31015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 31016:
                        t.code = 31016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 31017:
                        t.code = 31017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 31018:
                        t.code = 31018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 31019:
                        t.code = 31019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 31020:
                        t.code = 31020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 31021:
                        t.code = 31021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 31022:
                        t.code = 31022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 31023:
                        t.code = 31023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 31026:
                        t.code = 31026;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 31024:
                        t.code = 31024;
                        break;
                    case "IN_CALM_DOWN":
                    case 31025:
                        t.code = 31025;
                        break;
                    case "C2CPAYMENT_LIST_GET_ERROR":
                    case 31117:
                        t.code = 31117;
                        break;
                    case "C2CPAYMENT_NOT_ALLOW":
                    case 31118:
                        t.code = 31118;
                        break;
                    case "CAN_NOT_LEAVE_IN_BETTING":
                    case 31119:
                        t.code = 31119
                }
                if (null != e.canAuto && (t.canAuto = Boolean(e.canAuto)), null != e.CalmDownLeftSeconds && (m.Long ? (t.CalmDownLeftSeconds = m.Long.fromValue(e.CalmDownLeftSeconds)).unsigned = !1 : "string" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = parseInt(e.CalmDownLeftSeconds, 10) : "number" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = e.CalmDownLeftSeconds : "object" == typeof e.CalmDownLeftSeconds && (t.CalmDownLeftSeconds = new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber())), null != e.CalmDownDeadLineTimeStamp && (m.Long ? (t.CalmDownDeadLineTimeStamp = m.Long.fromValue(e.CalmDownDeadLineTimeStamp)).unsigned = !1 : "string" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = parseInt(e.CalmDownDeadLineTimeStamp, 10) : "number" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = e.CalmDownDeadLineTimeStamp : "object" == typeof e.CalmDownDeadLineTimeStamp && (t.CalmDownDeadLineTimeStamp = new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber())), null != e.bill) {
                    if ("object" != typeof e.bill) throw TypeError(".cowboy_proto.AutoBetResp.bill: object expected");
                    t.bill = f.cowboy_proto.BillInfo.fromObject(e.bill)
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.canAuto = !1, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.CalmDownLeftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.CalmDownLeftSeconds = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !1), o.CalmDownDeadLineTimeStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.CalmDownDeadLineTimeStamp = t.longs === String ? "0" : 0, o.bill = null
                }
                return null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.cowboy_proto.ErrorCode[e.code] ? e.code : f.cowboy_proto.ErrorCode[e.code] : e.code), null != e.canAuto && e.hasOwnProperty("canAuto") && (o.canAuto = e.canAuto), null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && ("number" == typeof e.CalmDownLeftSeconds ? o.CalmDownLeftSeconds = t.longs === String ? String(e.CalmDownLeftSeconds) : e.CalmDownLeftSeconds : o.CalmDownLeftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownLeftSeconds) : t.longs === Number ? new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber() : e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && ("number" == typeof e.CalmDownDeadLineTimeStamp ? o.CalmDownDeadLineTimeStamp = t.longs === String ? String(e.CalmDownDeadLineTimeStamp) : e.CalmDownDeadLineTimeStamp : o.CalmDownDeadLineTimeStamp = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownDeadLineTimeStamp) : t.longs === Number ? new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber() : e.CalmDownDeadLineTimeStamp), null != e.bill && e.hasOwnProperty("bill") && (o.bill = f.cowboy_proto.BillInfo.toObject(e.bill, t)), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.AutoBetResp"
            }, e
        }(), l.AutoBetNotify = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.AutoBetNotify; e.pos < o;) {
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
                if (e instanceof f.cowboy_proto.AutoBetNotify) return e;
                var t = new f.cowboy_proto.AutoBetNotify;
                return null != e.open && (t.open = Boolean(e.open)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.open = !1), null != e.open && e.hasOwnProperty("open") && (o.open = e.open), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.AutoBetNotify"
            }, e
        }(), l.PlayerListReq = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.PlayerListReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.cowboy_proto.PlayerListReq ? e : new f.cowboy_proto.PlayerListReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.PlayerListReq"
            }, e
        }(), l.PlayerListResp = function() {
            function e(e) {
                if (this.gamePlayers = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.gamePlayers = m.emptyArray, e.prototype.self = null, e.prototype.playerNum = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.gamePlayers && e.gamePlayers.length)
                    for (var o = 0; o < e.gamePlayers.length; ++o) f.cowboy_proto.GamePlayer.encode(e.gamePlayers[o], t.uint32(18).fork()).ldelim();
                return null != e.self && Object.hasOwnProperty.call(e, "self") && f.cowboy_proto.GamePlayer.encode(e.self, t.uint32(26).fork()).ldelim(), null != e.playerNum && Object.hasOwnProperty.call(e, "playerNum") && t.uint32(40).uint32(e.playerNum), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.PlayerListResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.gamePlayers && n.gamePlayers.length || (n.gamePlayers = []), n.gamePlayers.push(f.cowboy_proto.GamePlayer.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.self = f.cowboy_proto.GamePlayer.decode(e, e.uint32());
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
                    case 31e3:
                    case 31001:
                    case 31002:
                    case 31003:
                    case 31004:
                    case 31005:
                    case 31006:
                    case 31007:
                    case 31008:
                    case 31009:
                    case 31010:
                    case 31011:
                    case 31012:
                    case 31013:
                    case 31014:
                    case 31015:
                    case 31016:
                    case 31017:
                    case 31018:
                    case 31019:
                    case 31020:
                    case 31021:
                    case 31022:
                    case 31023:
                    case 31026:
                    case 31024:
                    case 31025:
                    case 31117:
                    case 31118:
                    case 31119:
                }
                if (null != e.gamePlayers && e.hasOwnProperty("gamePlayers")) {
                    if (!Array.isArray(e.gamePlayers)) return "gamePlayers: array expected";
                    for (var t = 0; t < e.gamePlayers.length; ++t)
                        if (o = f.cowboy_proto.GamePlayer.verify(e.gamePlayers[t])) return "gamePlayers." + o
                }
                var o;
                return null != e.self && e.hasOwnProperty("self") && (o = f.cowboy_proto.GamePlayer.verify(e.self)) ? "self." + o : null != e.playerNum && e.hasOwnProperty("playerNum") && !m.isInteger(e.playerNum) ? "playerNum: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.PlayerListResp) return e;
                var t = new f.cowboy_proto.PlayerListResp;
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
                    case 31e3:
                        t.code = 31e3;
                        break;
                    case "LOW_VERSION":
                    case 31001:
                        t.code = 31001;
                        break;
                    case "INVALID_TOKEN":
                    case 31002:
                        t.code = 31002;
                        break;
                    case "SERVER_BUSY":
                    case 31003:
                        t.code = 31003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 31004:
                        t.code = 31004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 31005:
                        t.code = 31005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 31006:
                        t.code = 31006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 31007:
                        t.code = 31007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 31008:
                        t.code = 31008;
                        break;
                    case "NO_BET":
                    case 31009:
                        t.code = 31009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 31010:
                        t.code = 31010;
                        break;
                    case "NO_MONEY":
                    case 31011:
                        t.code = 31011;
                        break;
                    case "BET_BAD_PARAM":
                    case 31012:
                        t.code = 31012;
                        break;
                    case "STOP_SERVICE":
                    case 31013:
                        t.code = 31013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 31014:
                        t.code = 31014;
                        break;
                    case "BET_TOO_SMALL":
                    case 31015:
                        t.code = 31015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 31016:
                        t.code = 31016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 31017:
                        t.code = 31017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 31018:
                        t.code = 31018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 31019:
                        t.code = 31019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 31020:
                        t.code = 31020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 31021:
                        t.code = 31021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 31022:
                        t.code = 31022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 31023:
                        t.code = 31023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 31026:
                        t.code = 31026;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 31024:
                        t.code = 31024;
                        break;
                    case "IN_CALM_DOWN":
                    case 31025:
                        t.code = 31025;
                        break;
                    case "C2CPAYMENT_LIST_GET_ERROR":
                    case 31117:
                        t.code = 31117;
                        break;
                    case "C2CPAYMENT_NOT_ALLOW":
                    case 31118:
                        t.code = 31118;
                        break;
                    case "CAN_NOT_LEAVE_IN_BETTING":
                    case 31119:
                        t.code = 31119
                }
                if (e.gamePlayers) {
                    if (!Array.isArray(e.gamePlayers)) throw TypeError(".cowboy_proto.PlayerListResp.gamePlayers: array expected");
                    t.gamePlayers = [];
                    for (var o = 0; o < e.gamePlayers.length; ++o) {
                        if ("object" != typeof e.gamePlayers[o]) throw TypeError(".cowboy_proto.PlayerListResp.gamePlayers: object expected");
                        t.gamePlayers[o] = f.cowboy_proto.GamePlayer.fromObject(e.gamePlayers[o])
                    }
                }
                if (null != e.self) {
                    if ("object" != typeof e.self) throw TypeError(".cowboy_proto.PlayerListResp.self: object expected");
                    t.self = f.cowboy_proto.GamePlayer.fromObject(e.self)
                }
                return null != e.playerNum && (t.playerNum = e.playerNum >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.gamePlayers = []), t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.self = null, o.playerNum = 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.cowboy_proto.ErrorCode[e.code] ? e.code : f.cowboy_proto.ErrorCode[e.code] : e.code), e.gamePlayers && e.gamePlayers.length) {
                    o.gamePlayers = [];
                    for (var n = 0; n < e.gamePlayers.length; ++n) o.gamePlayers[n] = f.cowboy_proto.GamePlayer.toObject(e.gamePlayers[n], t)
                }
                return null != e.self && e.hasOwnProperty("self") && (o.self = f.cowboy_proto.GamePlayer.toObject(e.self, t)), null != e.playerNum && e.hasOwnProperty("playerNum") && (o.playerNum = e.playerNum), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.PlayerListResp"
            }, e
        }(), l.GamePlayer = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.uid = 0, e.prototype.name = "", e.prototype.head = "", e.prototype.totalBetAmount = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.winCount = 0, e.prototype.rank = 0, e.prototype.curCoin = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.keepWinCount = 0, e.prototype.curUsdt = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.plat = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).uint32(e.uid), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(18).string(e.name), null != e.head && Object.hasOwnProperty.call(e, "head") && t.uint32(26).string(e.head), null != e.totalBetAmount && Object.hasOwnProperty.call(e, "totalBetAmount") && t.uint32(32).uint64(e.totalBetAmount), null != e.winCount && Object.hasOwnProperty.call(e, "winCount") && t.uint32(40).uint32(e.winCount), null != e.rank && Object.hasOwnProperty.call(e, "rank") && t.uint32(48).uint32(e.rank), null != e.curCoin && Object.hasOwnProperty.call(e, "curCoin") && t.uint32(56).uint64(e.curCoin), null != e.keepWinCount && Object.hasOwnProperty.call(e, "keepWinCount") && t.uint32(64).int32(e.keepWinCount), null != e.curUsdt && Object.hasOwnProperty.call(e, "curUsdt") && t.uint32(72).uint64(e.curUsdt), null != e.plat && Object.hasOwnProperty.call(e, "plat") && t.uint32(80).uint32(e.plat), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.GamePlayer; e.pos < o;) {
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
                        case 9:
                            n.curUsdt = e.uint64();
                            break;
                        case 10:
                            n.plat = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.uid && e.hasOwnProperty("uid") && !m.isInteger(e.uid) ? "uid: integer expected" : null != e.name && e.hasOwnProperty("name") && !m.isString(e.name) ? "name: string expected" : null != e.head && e.hasOwnProperty("head") && !m.isString(e.head) ? "head: string expected" : null != e.totalBetAmount && e.hasOwnProperty("totalBetAmount") && !(m.isInteger(e.totalBetAmount) || e.totalBetAmount && m.isInteger(e.totalBetAmount.low) && m.isInteger(e.totalBetAmount.high)) ? "totalBetAmount: integer|Long expected" : null != e.winCount && e.hasOwnProperty("winCount") && !m.isInteger(e.winCount) ? "winCount: integer expected" : null != e.rank && e.hasOwnProperty("rank") && !m.isInteger(e.rank) ? "rank: integer expected" : null != e.curCoin && e.hasOwnProperty("curCoin") && !(m.isInteger(e.curCoin) || e.curCoin && m.isInteger(e.curCoin.low) && m.isInteger(e.curCoin.high)) ? "curCoin: integer|Long expected" : null != e.keepWinCount && e.hasOwnProperty("keepWinCount") && !m.isInteger(e.keepWinCount) ? "keepWinCount: integer expected" : null != e.curUsdt && e.hasOwnProperty("curUsdt") && !(m.isInteger(e.curUsdt) || e.curUsdt && m.isInteger(e.curUsdt.low) && m.isInteger(e.curUsdt.high)) ? "curUsdt: integer|Long expected" : null != e.plat && e.hasOwnProperty("plat") && !m.isInteger(e.plat) ? "plat: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.GamePlayer) return e;
                var t = new f.cowboy_proto.GamePlayer;
                return null != e.uid && (t.uid = e.uid >>> 0), null != e.name && (t.name = String(e.name)), null != e.head && (t.head = String(e.head)), null != e.totalBetAmount && (m.Long ? (t.totalBetAmount = m.Long.fromValue(e.totalBetAmount)).unsigned = !0 : "string" == typeof e.totalBetAmount ? t.totalBetAmount = parseInt(e.totalBetAmount, 10) : "number" == typeof e.totalBetAmount ? t.totalBetAmount = e.totalBetAmount : "object" == typeof e.totalBetAmount && (t.totalBetAmount = new m.LongBits(e.totalBetAmount.low >>> 0, e.totalBetAmount.high >>> 0).toNumber(!0))), null != e.winCount && (t.winCount = e.winCount >>> 0), null != e.rank && (t.rank = e.rank >>> 0), null != e.curCoin && (m.Long ? (t.curCoin = m.Long.fromValue(e.curCoin)).unsigned = !0 : "string" == typeof e.curCoin ? t.curCoin = parseInt(e.curCoin, 10) : "number" == typeof e.curCoin ? t.curCoin = e.curCoin : "object" == typeof e.curCoin && (t.curCoin = new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber(!0))), null != e.keepWinCount && (t.keepWinCount = 0 | e.keepWinCount), null != e.curUsdt && (m.Long ? (t.curUsdt = m.Long.fromValue(e.curUsdt)).unsigned = !0 : "string" == typeof e.curUsdt ? t.curUsdt = parseInt(e.curUsdt, 10) : "number" == typeof e.curUsdt ? t.curUsdt = e.curUsdt : "object" == typeof e.curUsdt && (t.curUsdt = new m.LongBits(e.curUsdt.low >>> 0, e.curUsdt.high >>> 0).toNumber(!0))), null != e.plat && (t.plat = e.plat >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.uid = 0, o.name = "", o.head = "", m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.totalBetAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.totalBetAmount = t.longs === String ? "0" : 0;
                    o.winCount = 0, o.rank = 0, m.Long ? (n = new m.Long(0, 0, !0), o.curCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.curCoin = t.longs === String ? "0" : 0, o.keepWinCount = 0, m.Long ? (n = new m.Long(0, 0, !0), o.curUsdt = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.curUsdt = t.longs === String ? "0" : 0, o.plat = 0
                }
                return null != e.uid && e.hasOwnProperty("uid") && (o.uid = e.uid), null != e.name && e.hasOwnProperty("name") && (o.name = e.name), null != e.head && e.hasOwnProperty("head") && (o.head = e.head), null != e.totalBetAmount && e.hasOwnProperty("totalBetAmount") && ("number" == typeof e.totalBetAmount ? o.totalBetAmount = t.longs === String ? String(e.totalBetAmount) : e.totalBetAmount : o.totalBetAmount = t.longs === String ? m.Long.prototype.toString.call(e.totalBetAmount) : t.longs === Number ? new m.LongBits(e.totalBetAmount.low >>> 0, e.totalBetAmount.high >>> 0).toNumber(!0) : e.totalBetAmount), null != e.winCount && e.hasOwnProperty("winCount") && (o.winCount = e.winCount), null != e.rank && e.hasOwnProperty("rank") && (o.rank = e.rank), null != e.curCoin && e.hasOwnProperty("curCoin") && ("number" == typeof e.curCoin ? o.curCoin = t.longs === String ? String(e.curCoin) : e.curCoin : o.curCoin = t.longs === String ? m.Long.prototype.toString.call(e.curCoin) : t.longs === Number ? new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber(!0) : e.curCoin), null != e.keepWinCount && e.hasOwnProperty("keepWinCount") && (o.keepWinCount = e.keepWinCount), null != e.curUsdt && e.hasOwnProperty("curUsdt") && ("number" == typeof e.curUsdt ? o.curUsdt = t.longs === String ? String(e.curUsdt) : e.curUsdt : o.curUsdt = t.longs === String ? m.Long.prototype.toString.call(e.curUsdt) : t.longs === Number ? new m.LongBits(e.curUsdt.low >>> 0, e.curUsdt.high >>> 0).toNumber(!0) : e.curUsdt), null != e.plat && e.hasOwnProperty("plat") && (o.plat = e.plat), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.GamePlayer"
            }, e
        }(), l.KickNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.kickType = 0, e.prototype.desc = "", e.prototype.idle_roomid = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.kickType && Object.hasOwnProperty.call(e, "kickType") && t.uint32(8).int32(e.kickType), null != e.desc && Object.hasOwnProperty.call(e, "desc") && t.uint32(18).string(e.desc), null != e.idle_roomid && Object.hasOwnProperty.call(e, "idle_roomid") && t.uint32(24).uint32(e.idle_roomid), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.KickNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.kickType = e.int32();
                            break;
                        case 2:
                            n.desc = e.string();
                            break;
                        case 3:
                            n.idle_roomid = e.uint32();
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
                return null != e.desc && e.hasOwnProperty("desc") && !m.isString(e.desc) ? "desc: string expected" : null != e.idle_roomid && e.hasOwnProperty("idle_roomid") && !m.isInteger(e.idle_roomid) ? "idle_roomid: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.KickNotify) return e;
                var t = new f.cowboy_proto.KickNotify;
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
                return null != e.desc && (t.desc = String(e.desc)), null != e.idle_roomid && (t.idle_roomid = e.idle_roomid >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.kickType = t.enums === String ? "Kick_DUMMY" : 0, o.desc = "", o.idle_roomid = 0), null != e.kickType && e.hasOwnProperty("kickType") && (o.kickType = t.enums === String ? void 0 === f.cowboy_proto.Kick[e.kickType] ? e.kickType : f.cowboy_proto.Kick[e.kickType] : e.kickType), null != e.desc && e.hasOwnProperty("desc") && (o.desc = e.desc), null != e.idle_roomid && e.hasOwnProperty("idle_roomid") && (o.idle_roomid = e.idle_roomid), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.KickNotify"
            }, e
        }(), l.AutoOpenRoadsReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.open = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.open && Object.hasOwnProperty.call(e, "open") && t.uint32(8).bool(e.open), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.AutoOpenRoadsReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
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
                if (e instanceof f.cowboy_proto.AutoOpenRoadsReq) return e;
                var t = new f.cowboy_proto.AutoOpenRoadsReq;
                return null != e.open && (t.open = Boolean(e.open)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.open = !1), null != e.open && e.hasOwnProperty("open") && (o.open = e.open), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.AutoOpenRoadsReq"
            }, e
        }(), l.AutoOpenRoadsResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.open = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.open && Object.hasOwnProperty.call(e, "open") && t.uint32(16).bool(e.open), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.AutoOpenRoadsResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
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
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.code && e.hasOwnProperty("code")) switch (e.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 31e3:
                    case 31001:
                    case 31002:
                    case 31003:
                    case 31004:
                    case 31005:
                    case 31006:
                    case 31007:
                    case 31008:
                    case 31009:
                    case 31010:
                    case 31011:
                    case 31012:
                    case 31013:
                    case 31014:
                    case 31015:
                    case 31016:
                    case 31017:
                    case 31018:
                    case 31019:
                    case 31020:
                    case 31021:
                    case 31022:
                    case 31023:
                    case 31026:
                    case 31024:
                    case 31025:
                    case 31117:
                    case 31118:
                    case 31119:
                }
                return null != e.open && e.hasOwnProperty("open") && "boolean" != typeof e.open ? "open: boolean expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.AutoOpenRoadsResp) return e;
                var t = new f.cowboy_proto.AutoOpenRoadsResp;
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
                    case 31e3:
                        t.code = 31e3;
                        break;
                    case "LOW_VERSION":
                    case 31001:
                        t.code = 31001;
                        break;
                    case "INVALID_TOKEN":
                    case 31002:
                        t.code = 31002;
                        break;
                    case "SERVER_BUSY":
                    case 31003:
                        t.code = 31003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 31004:
                        t.code = 31004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 31005:
                        t.code = 31005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 31006:
                        t.code = 31006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 31007:
                        t.code = 31007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 31008:
                        t.code = 31008;
                        break;
                    case "NO_BET":
                    case 31009:
                        t.code = 31009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 31010:
                        t.code = 31010;
                        break;
                    case "NO_MONEY":
                    case 31011:
                        t.code = 31011;
                        break;
                    case "BET_BAD_PARAM":
                    case 31012:
                        t.code = 31012;
                        break;
                    case "STOP_SERVICE":
                    case 31013:
                        t.code = 31013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 31014:
                        t.code = 31014;
                        break;
                    case "BET_TOO_SMALL":
                    case 31015:
                        t.code = 31015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 31016:
                        t.code = 31016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 31017:
                        t.code = 31017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 31018:
                        t.code = 31018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 31019:
                        t.code = 31019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 31020:
                        t.code = 31020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 31021:
                        t.code = 31021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 31022:
                        t.code = 31022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 31023:
                        t.code = 31023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 31026:
                        t.code = 31026;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 31024:
                        t.code = 31024;
                        break;
                    case "IN_CALM_DOWN":
                    case 31025:
                        t.code = 31025;
                        break;
                    case "C2CPAYMENT_LIST_GET_ERROR":
                    case 31117:
                        t.code = 31117;
                        break;
                    case "C2CPAYMENT_NOT_ALLOW":
                    case 31118:
                        t.code = 31118;
                        break;
                    case "CAN_NOT_LEAVE_IN_BETTING":
                    case 31119:
                        t.code = 31119
                }
                return null != e.open && (t.open = Boolean(e.open)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.open = !1), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.cowboy_proto.ErrorCode[e.code] ? e.code : f.cowboy_proto.ErrorCode[e.code] : e.code), null != e.open && e.hasOwnProperty("open") && (o.open = e.open), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.AutoOpenRoadsResp"
            }, e
        }(), l.SetGameOptionReq = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.SetGameOptionReq; e.pos < o;) {
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
                if (e instanceof f.cowboy_proto.SetGameOptionReq) return e;
                var t = new f.cowboy_proto.SetGameOptionReq;
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
                    if (!Array.isArray(e.betCoinOption)) throw TypeError(".cowboy_proto.SetGameOptionReq.betCoinOption: array expected");
                    t.betCoinOption = [];
                    for (var o = 0; o < e.betCoinOption.length; ++o) m.Long ? (t.betCoinOption[o] = m.Long.fromValue(e.betCoinOption[o])).unsigned = !0 : "string" == typeof e.betCoinOption[o] ? t.betCoinOption[o] = parseInt(e.betCoinOption[o], 10) : "number" == typeof e.betCoinOption[o] ? t.betCoinOption[o] = e.betCoinOption[o] : "object" == typeof e.betCoinOption[o] && (t.betCoinOption[o] = new m.LongBits(e.betCoinOption[o].low >>> 0, e.betCoinOption[o].high >>> 0).toNumber(!0))
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.betCoinOption = []), t.defaults && (o.autoLevel = t.enums === String ? "Level_Normal" : 0), null != e.autoLevel && e.hasOwnProperty("autoLevel") && (o.autoLevel = t.enums === String ? void 0 === f.cowboy_proto.AutoBetLevel[e.autoLevel] ? e.autoLevel : f.cowboy_proto.AutoBetLevel[e.autoLevel] : e.autoLevel), e.betCoinOption && e.betCoinOption.length) {
                    o.betCoinOption = [];
                    for (var n = 0; n < e.betCoinOption.length; ++n) "number" == typeof e.betCoinOption[n] ? o.betCoinOption[n] = t.longs === String ? String(e.betCoinOption[n]) : e.betCoinOption[n] : o.betCoinOption[n] = t.longs === String ? m.Long.prototype.toString.call(e.betCoinOption[n]) : t.longs === Number ? new m.LongBits(e.betCoinOption[n].low >>> 0, e.betCoinOption[n].high >>> 0).toNumber(!0) : e.betCoinOption[n]
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.SetGameOptionReq"
            }, e
        }(), l.SetGameOptionResp = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.SetGameOptionResp; e.pos < o;) {
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
                    case 31e3:
                    case 31001:
                    case 31002:
                    case 31003:
                    case 31004:
                    case 31005:
                    case 31006:
                    case 31007:
                    case 31008:
                    case 31009:
                    case 31010:
                    case 31011:
                    case 31012:
                    case 31013:
                    case 31014:
                    case 31015:
                    case 31016:
                    case 31017:
                    case 31018:
                    case 31019:
                    case 31020:
                    case 31021:
                    case 31022:
                    case 31023:
                    case 31026:
                    case 31024:
                    case 31025:
                    case 31117:
                    case 31118:
                    case 31119:
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
                if (e instanceof f.cowboy_proto.SetGameOptionResp) return e;
                var t = new f.cowboy_proto.SetGameOptionResp;
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
                    case 31e3:
                        t.code = 31e3;
                        break;
                    case "LOW_VERSION":
                    case 31001:
                        t.code = 31001;
                        break;
                    case "INVALID_TOKEN":
                    case 31002:
                        t.code = 31002;
                        break;
                    case "SERVER_BUSY":
                    case 31003:
                        t.code = 31003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 31004:
                        t.code = 31004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 31005:
                        t.code = 31005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 31006:
                        t.code = 31006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 31007:
                        t.code = 31007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 31008:
                        t.code = 31008;
                        break;
                    case "NO_BET":
                    case 31009:
                        t.code = 31009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 31010:
                        t.code = 31010;
                        break;
                    case "NO_MONEY":
                    case 31011:
                        t.code = 31011;
                        break;
                    case "BET_BAD_PARAM":
                    case 31012:
                        t.code = 31012;
                        break;
                    case "STOP_SERVICE":
                    case 31013:
                        t.code = 31013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 31014:
                        t.code = 31014;
                        break;
                    case "BET_TOO_SMALL":
                    case 31015:
                        t.code = 31015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 31016:
                        t.code = 31016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 31017:
                        t.code = 31017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 31018:
                        t.code = 31018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 31019:
                        t.code = 31019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 31020:
                        t.code = 31020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 31021:
                        t.code = 31021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 31022:
                        t.code = 31022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 31023:
                        t.code = 31023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 31026:
                        t.code = 31026;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 31024:
                        t.code = 31024;
                        break;
                    case "IN_CALM_DOWN":
                    case 31025:
                        t.code = 31025;
                        break;
                    case "C2CPAYMENT_LIST_GET_ERROR":
                    case 31117:
                        t.code = 31117;
                        break;
                    case "C2CPAYMENT_NOT_ALLOW":
                    case 31118:
                        t.code = 31118;
                        break;
                    case "CAN_NOT_LEAVE_IN_BETTING":
                    case 31119:
                        t.code = 31119
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
                    if (!Array.isArray(e.betCoinOption)) throw TypeError(".cowboy_proto.SetGameOptionResp.betCoinOption: array expected");
                    t.betCoinOption = [];
                    for (var o = 0; o < e.betCoinOption.length; ++o) m.Long ? (t.betCoinOption[o] = m.Long.fromValue(e.betCoinOption[o])).unsigned = !0 : "string" == typeof e.betCoinOption[o] ? t.betCoinOption[o] = parseInt(e.betCoinOption[o], 10) : "number" == typeof e.betCoinOption[o] ? t.betCoinOption[o] = e.betCoinOption[o] : "object" == typeof e.betCoinOption[o] && (t.betCoinOption[o] = new m.LongBits(e.betCoinOption[o].low >>> 0, e.betCoinOption[o].high >>> 0).toNumber(!0))
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.betCoinOption = []), t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.autoLevel = t.enums === String ? "Level_Normal" : 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.cowboy_proto.ErrorCode[e.code] ? e.code : f.cowboy_proto.ErrorCode[e.code] : e.code), null != e.autoLevel && e.hasOwnProperty("autoLevel") && (o.autoLevel = t.enums === String ? void 0 === f.cowboy_proto.AutoBetLevel[e.autoLevel] ? e.autoLevel : f.cowboy_proto.AutoBetLevel[e.autoLevel] : e.autoLevel), e.betCoinOption && e.betCoinOption.length) {
                    o.betCoinOption = [];
                    for (var n = 0; n < e.betCoinOption.length; ++n) "number" == typeof e.betCoinOption[n] ? o.betCoinOption[n] = t.longs === String ? String(e.betCoinOption[n]) : e.betCoinOption[n] : o.betCoinOption[n] = t.longs === String ? m.Long.prototype.toString.call(e.betCoinOption[n]) : t.longs === Number ? new m.LongBits(e.betCoinOption[n].low >>> 0, e.betCoinOption[n].high >>> 0).toNumber(!0) : e.betCoinOption[n]
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.SetGameOptionResp"
            }, e
        }(), l.AdvanceAutoBetReq = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.AdvanceAutoBetReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.cowboy_proto.AdvanceAutoBetReq ? e : new f.cowboy_proto.AdvanceAutoBetReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.AdvanceAutoBetReq"
            }, e
        }(), l.AdvanceAutoBetRsp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.usedAutoBetCount = 0, e.prototype.CalmDownLeftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.CalmDownDeadLineTimeStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.bill = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.usedAutoBetCount && Object.hasOwnProperty.call(e, "usedAutoBetCount") && t.uint32(16).int32(e.usedAutoBetCount), null != e.CalmDownLeftSeconds && Object.hasOwnProperty.call(e, "CalmDownLeftSeconds") && t.uint32(24).int64(e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && Object.hasOwnProperty.call(e, "CalmDownDeadLineTimeStamp") && t.uint32(32).int64(e.CalmDownDeadLineTimeStamp), null != e.bill && Object.hasOwnProperty.call(e, "bill") && f.cowboy_proto.BillInfo.encode(e.bill, t.uint32(42).fork()).ldelim(), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.AdvanceAutoBetRsp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.usedAutoBetCount = e.int32();
                            break;
                        case 3:
                            n.CalmDownLeftSeconds = e.int64();
                            break;
                        case 4:
                            n.CalmDownDeadLineTimeStamp = e.int64();
                            break;
                        case 5:
                            n.bill = f.cowboy_proto.BillInfo.decode(e, e.uint32());
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
                    case 31e3:
                    case 31001:
                    case 31002:
                    case 31003:
                    case 31004:
                    case 31005:
                    case 31006:
                    case 31007:
                    case 31008:
                    case 31009:
                    case 31010:
                    case 31011:
                    case 31012:
                    case 31013:
                    case 31014:
                    case 31015:
                    case 31016:
                    case 31017:
                    case 31018:
                    case 31019:
                    case 31020:
                    case 31021:
                    case 31022:
                    case 31023:
                    case 31026:
                    case 31024:
                    case 31025:
                    case 31117:
                    case 31118:
                    case 31119:
                }
                if (null != e.usedAutoBetCount && e.hasOwnProperty("usedAutoBetCount") && !m.isInteger(e.usedAutoBetCount)) return "usedAutoBetCount: integer expected";
                if (null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && !(m.isInteger(e.CalmDownLeftSeconds) || e.CalmDownLeftSeconds && m.isInteger(e.CalmDownLeftSeconds.low) && m.isInteger(e.CalmDownLeftSeconds.high))) return "CalmDownLeftSeconds: integer|Long expected";
                if (null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && !(m.isInteger(e.CalmDownDeadLineTimeStamp) || e.CalmDownDeadLineTimeStamp && m.isInteger(e.CalmDownDeadLineTimeStamp.low) && m.isInteger(e.CalmDownDeadLineTimeStamp.high))) return "CalmDownDeadLineTimeStamp: integer|Long expected";
                if (null != e.bill && e.hasOwnProperty("bill")) {
                    var t = f.cowboy_proto.BillInfo.verify(e.bill);
                    if (t) return "bill." + t
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.AdvanceAutoBetRsp) return e;
                var t = new f.cowboy_proto.AdvanceAutoBetRsp;
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
                    case 31e3:
                        t.code = 31e3;
                        break;
                    case "LOW_VERSION":
                    case 31001:
                        t.code = 31001;
                        break;
                    case "INVALID_TOKEN":
                    case 31002:
                        t.code = 31002;
                        break;
                    case "SERVER_BUSY":
                    case 31003:
                        t.code = 31003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 31004:
                        t.code = 31004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 31005:
                        t.code = 31005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 31006:
                        t.code = 31006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 31007:
                        t.code = 31007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 31008:
                        t.code = 31008;
                        break;
                    case "NO_BET":
                    case 31009:
                        t.code = 31009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 31010:
                        t.code = 31010;
                        break;
                    case "NO_MONEY":
                    case 31011:
                        t.code = 31011;
                        break;
                    case "BET_BAD_PARAM":
                    case 31012:
                        t.code = 31012;
                        break;
                    case "STOP_SERVICE":
                    case 31013:
                        t.code = 31013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 31014:
                        t.code = 31014;
                        break;
                    case "BET_TOO_SMALL":
                    case 31015:
                        t.code = 31015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 31016:
                        t.code = 31016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 31017:
                        t.code = 31017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 31018:
                        t.code = 31018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 31019:
                        t.code = 31019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 31020:
                        t.code = 31020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 31021:
                        t.code = 31021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 31022:
                        t.code = 31022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 31023:
                        t.code = 31023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 31026:
                        t.code = 31026;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 31024:
                        t.code = 31024;
                        break;
                    case "IN_CALM_DOWN":
                    case 31025:
                        t.code = 31025;
                        break;
                    case "C2CPAYMENT_LIST_GET_ERROR":
                    case 31117:
                        t.code = 31117;
                        break;
                    case "C2CPAYMENT_NOT_ALLOW":
                    case 31118:
                        t.code = 31118;
                        break;
                    case "CAN_NOT_LEAVE_IN_BETTING":
                    case 31119:
                        t.code = 31119
                }
                if (null != e.usedAutoBetCount && (t.usedAutoBetCount = 0 | e.usedAutoBetCount), null != e.CalmDownLeftSeconds && (m.Long ? (t.CalmDownLeftSeconds = m.Long.fromValue(e.CalmDownLeftSeconds)).unsigned = !1 : "string" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = parseInt(e.CalmDownLeftSeconds, 10) : "number" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = e.CalmDownLeftSeconds : "object" == typeof e.CalmDownLeftSeconds && (t.CalmDownLeftSeconds = new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber())), null != e.CalmDownDeadLineTimeStamp && (m.Long ? (t.CalmDownDeadLineTimeStamp = m.Long.fromValue(e.CalmDownDeadLineTimeStamp)).unsigned = !1 : "string" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = parseInt(e.CalmDownDeadLineTimeStamp, 10) : "number" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = e.CalmDownDeadLineTimeStamp : "object" == typeof e.CalmDownDeadLineTimeStamp && (t.CalmDownDeadLineTimeStamp = new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber())), null != e.bill) {
                    if ("object" != typeof e.bill) throw TypeError(".cowboy_proto.AdvanceAutoBetRsp.bill: object expected");
                    t.bill = f.cowboy_proto.BillInfo.fromObject(e.bill)
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.usedAutoBetCount = 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.CalmDownLeftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.CalmDownLeftSeconds = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !1), o.CalmDownDeadLineTimeStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.CalmDownDeadLineTimeStamp = t.longs === String ? "0" : 0, o.bill = null
                }
                return null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.cowboy_proto.ErrorCode[e.code] ? e.code : f.cowboy_proto.ErrorCode[e.code] : e.code), null != e.usedAutoBetCount && e.hasOwnProperty("usedAutoBetCount") && (o.usedAutoBetCount = e.usedAutoBetCount), null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && ("number" == typeof e.CalmDownLeftSeconds ? o.CalmDownLeftSeconds = t.longs === String ? String(e.CalmDownLeftSeconds) : e.CalmDownLeftSeconds : o.CalmDownLeftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownLeftSeconds) : t.longs === Number ? new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber() : e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && ("number" == typeof e.CalmDownDeadLineTimeStamp ? o.CalmDownDeadLineTimeStamp = t.longs === String ? String(e.CalmDownDeadLineTimeStamp) : e.CalmDownDeadLineTimeStamp : o.CalmDownDeadLineTimeStamp = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownDeadLineTimeStamp) : t.longs === Number ? new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber() : e.CalmDownDeadLineTimeStamp), null != e.bill && e.hasOwnProperty("bill") && (o.bill = f.cowboy_proto.BillInfo.toObject(e.bill, t)), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.AdvanceAutoBetRsp"
            }, e
        }(), l.CancelAdvanceAutoBetReq = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.CancelAdvanceAutoBetReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.cowboy_proto.CancelAdvanceAutoBetReq ? e : new f.cowboy_proto.CancelAdvanceAutoBetReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.CancelAdvanceAutoBetReq"
            }, e
        }(), l.CancelAdvanceAutoBetRsp = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.CancelAdvanceAutoBetRsp; e.pos < o;) {
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
                    case 31e3:
                    case 31001:
                    case 31002:
                    case 31003:
                    case 31004:
                    case 31005:
                    case 31006:
                    case 31007:
                    case 31008:
                    case 31009:
                    case 31010:
                    case 31011:
                    case 31012:
                    case 31013:
                    case 31014:
                    case 31015:
                    case 31016:
                    case 31017:
                    case 31018:
                    case 31019:
                    case 31020:
                    case 31021:
                    case 31022:
                    case 31023:
                    case 31026:
                    case 31024:
                    case 31025:
                    case 31117:
                    case 31118:
                    case 31119:
                }
                return null != e.is_manual && e.hasOwnProperty("is_manual") && "boolean" != typeof e.is_manual ? "is_manual: boolean expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.CancelAdvanceAutoBetRsp) return e;
                var t = new f.cowboy_proto.CancelAdvanceAutoBetRsp;
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
                    case 31e3:
                        t.code = 31e3;
                        break;
                    case "LOW_VERSION":
                    case 31001:
                        t.code = 31001;
                        break;
                    case "INVALID_TOKEN":
                    case 31002:
                        t.code = 31002;
                        break;
                    case "SERVER_BUSY":
                    case 31003:
                        t.code = 31003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 31004:
                        t.code = 31004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 31005:
                        t.code = 31005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 31006:
                        t.code = 31006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 31007:
                        t.code = 31007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 31008:
                        t.code = 31008;
                        break;
                    case "NO_BET":
                    case 31009:
                        t.code = 31009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 31010:
                        t.code = 31010;
                        break;
                    case "NO_MONEY":
                    case 31011:
                        t.code = 31011;
                        break;
                    case "BET_BAD_PARAM":
                    case 31012:
                        t.code = 31012;
                        break;
                    case "STOP_SERVICE":
                    case 31013:
                        t.code = 31013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 31014:
                        t.code = 31014;
                        break;
                    case "BET_TOO_SMALL":
                    case 31015:
                        t.code = 31015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 31016:
                        t.code = 31016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 31017:
                        t.code = 31017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 31018:
                        t.code = 31018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 31019:
                        t.code = 31019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 31020:
                        t.code = 31020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 31021:
                        t.code = 31021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 31022:
                        t.code = 31022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 31023:
                        t.code = 31023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 31026:
                        t.code = 31026;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 31024:
                        t.code = 31024;
                        break;
                    case "IN_CALM_DOWN":
                    case 31025:
                        t.code = 31025;
                        break;
                    case "C2CPAYMENT_LIST_GET_ERROR":
                    case 31117:
                        t.code = 31117;
                        break;
                    case "C2CPAYMENT_NOT_ALLOW":
                    case 31118:
                        t.code = 31118;
                        break;
                    case "CAN_NOT_LEAVE_IN_BETTING":
                    case 31119:
                        t.code = 31119
                }
                return null != e.is_manual && (t.is_manual = Boolean(e.is_manual)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.is_manual = !1), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.cowboy_proto.ErrorCode[e.code] ? e.code : f.cowboy_proto.ErrorCode[e.code] : e.code), null != e.is_manual && e.hasOwnProperty("is_manual") && (o.is_manual = e.is_manual), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.CancelAdvanceAutoBetRsp"
            }, e
        }(), l.AdvanceAutoBetSetReq = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.AdvanceAutoBetSetReq; e.pos < o;) {
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
                if (e instanceof f.cowboy_proto.AdvanceAutoBetSetReq) return e;
                var t = new f.cowboy_proto.AdvanceAutoBetSetReq;
                return null != e.count && (t.count = 0 | e.count), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.count = 0), null != e.count && e.hasOwnProperty("count") && (o.count = e.count), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.AdvanceAutoBetSetReq"
            }, e
        }(), l.AdvanceAutoBetSetRsp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.count = 0, e.prototype.CalmDownLeftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.CalmDownDeadLineTimeStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.count && Object.hasOwnProperty.call(e, "count") && t.uint32(16).int32(e.count), null != e.CalmDownLeftSeconds && Object.hasOwnProperty.call(e, "CalmDownLeftSeconds") && t.uint32(24).int64(e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && Object.hasOwnProperty.call(e, "CalmDownDeadLineTimeStamp") && t.uint32(32).int64(e.CalmDownDeadLineTimeStamp), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.AdvanceAutoBetSetRsp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.count = e.int32();
                            break;
                        case 3:
                            n.CalmDownLeftSeconds = e.int64();
                            break;
                        case 4:
                            n.CalmDownDeadLineTimeStamp = e.int64();
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
                    case 31e3:
                    case 31001:
                    case 31002:
                    case 31003:
                    case 31004:
                    case 31005:
                    case 31006:
                    case 31007:
                    case 31008:
                    case 31009:
                    case 31010:
                    case 31011:
                    case 31012:
                    case 31013:
                    case 31014:
                    case 31015:
                    case 31016:
                    case 31017:
                    case 31018:
                    case 31019:
                    case 31020:
                    case 31021:
                    case 31022:
                    case 31023:
                    case 31026:
                    case 31024:
                    case 31025:
                    case 31117:
                    case 31118:
                    case 31119:
                }
                return null != e.count && e.hasOwnProperty("count") && !m.isInteger(e.count) ? "count: integer expected" : null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && !(m.isInteger(e.CalmDownLeftSeconds) || e.CalmDownLeftSeconds && m.isInteger(e.CalmDownLeftSeconds.low) && m.isInteger(e.CalmDownLeftSeconds.high)) ? "CalmDownLeftSeconds: integer|Long expected" : null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && !(m.isInteger(e.CalmDownDeadLineTimeStamp) || e.CalmDownDeadLineTimeStamp && m.isInteger(e.CalmDownDeadLineTimeStamp.low) && m.isInteger(e.CalmDownDeadLineTimeStamp.high)) ? "CalmDownDeadLineTimeStamp: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.AdvanceAutoBetSetRsp) return e;
                var t = new f.cowboy_proto.AdvanceAutoBetSetRsp;
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
                    case 31e3:
                        t.code = 31e3;
                        break;
                    case "LOW_VERSION":
                    case 31001:
                        t.code = 31001;
                        break;
                    case "INVALID_TOKEN":
                    case 31002:
                        t.code = 31002;
                        break;
                    case "SERVER_BUSY":
                    case 31003:
                        t.code = 31003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 31004:
                        t.code = 31004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 31005:
                        t.code = 31005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 31006:
                        t.code = 31006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 31007:
                        t.code = 31007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 31008:
                        t.code = 31008;
                        break;
                    case "NO_BET":
                    case 31009:
                        t.code = 31009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 31010:
                        t.code = 31010;
                        break;
                    case "NO_MONEY":
                    case 31011:
                        t.code = 31011;
                        break;
                    case "BET_BAD_PARAM":
                    case 31012:
                        t.code = 31012;
                        break;
                    case "STOP_SERVICE":
                    case 31013:
                        t.code = 31013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 31014:
                        t.code = 31014;
                        break;
                    case "BET_TOO_SMALL":
                    case 31015:
                        t.code = 31015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 31016:
                        t.code = 31016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 31017:
                        t.code = 31017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 31018:
                        t.code = 31018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 31019:
                        t.code = 31019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 31020:
                        t.code = 31020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 31021:
                        t.code = 31021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 31022:
                        t.code = 31022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 31023:
                        t.code = 31023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 31026:
                        t.code = 31026;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 31024:
                        t.code = 31024;
                        break;
                    case "IN_CALM_DOWN":
                    case 31025:
                        t.code = 31025;
                        break;
                    case "C2CPAYMENT_LIST_GET_ERROR":
                    case 31117:
                        t.code = 31117;
                        break;
                    case "C2CPAYMENT_NOT_ALLOW":
                    case 31118:
                        t.code = 31118;
                        break;
                    case "CAN_NOT_LEAVE_IN_BETTING":
                    case 31119:
                        t.code = 31119
                }
                return null != e.count && (t.count = 0 | e.count), null != e.CalmDownLeftSeconds && (m.Long ? (t.CalmDownLeftSeconds = m.Long.fromValue(e.CalmDownLeftSeconds)).unsigned = !1 : "string" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = parseInt(e.CalmDownLeftSeconds, 10) : "number" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = e.CalmDownLeftSeconds : "object" == typeof e.CalmDownLeftSeconds && (t.CalmDownLeftSeconds = new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber())), null != e.CalmDownDeadLineTimeStamp && (m.Long ? (t.CalmDownDeadLineTimeStamp = m.Long.fromValue(e.CalmDownDeadLineTimeStamp)).unsigned = !1 : "string" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = parseInt(e.CalmDownDeadLineTimeStamp, 10) : "number" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = e.CalmDownDeadLineTimeStamp : "object" == typeof e.CalmDownDeadLineTimeStamp && (t.CalmDownDeadLineTimeStamp = new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.count = 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.CalmDownLeftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.CalmDownLeftSeconds = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !1), o.CalmDownDeadLineTimeStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.CalmDownDeadLineTimeStamp = t.longs === String ? "0" : 0
                }
                return null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.cowboy_proto.ErrorCode[e.code] ? e.code : f.cowboy_proto.ErrorCode[e.code] : e.code), null != e.count && e.hasOwnProperty("count") && (o.count = e.count), null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && ("number" == typeof e.CalmDownLeftSeconds ? o.CalmDownLeftSeconds = t.longs === String ? String(e.CalmDownLeftSeconds) : e.CalmDownLeftSeconds : o.CalmDownLeftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownLeftSeconds) : t.longs === Number ? new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber() : e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && ("number" == typeof e.CalmDownDeadLineTimeStamp ? o.CalmDownDeadLineTimeStamp = t.longs === String ? String(e.CalmDownDeadLineTimeStamp) : e.CalmDownDeadLineTimeStamp : o.CalmDownDeadLineTimeStamp = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownDeadLineTimeStamp) : t.longs === Number ? new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber() : e.CalmDownDeadLineTimeStamp), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.AdvanceAutoBetSetRsp"
            }, e
        }(), l.UserPointsChangeNotice = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.UserPointsChangeNotice; e.pos < o;) {
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
                if (e instanceof f.cowboy_proto.UserPointsChangeNotice) return e;
                var t = new f.cowboy_proto.UserPointsChangeNotice;
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
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.UserPointsChangeNotice"
            }, e
        }(), l.AdvanceAutoBetAddReq = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.AdvanceAutoBetAddReq; e.pos < o;) {
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
                if (e instanceof f.cowboy_proto.AdvanceAutoBetAddReq) return e;
                var t = new f.cowboy_proto.AdvanceAutoBetAddReq;
                return null != e.count && (t.count = 0 | e.count), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.count = 0), null != e.count && e.hasOwnProperty("count") && (o.count = e.count), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.AdvanceAutoBetAddReq"
            }, e
        }(), l.AdvanceAutoBetAddRsp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.autoBetCount = 0, e.prototype.usedAutoBetCount = 0, e.prototype.numberHandAdded = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.autoBetCount && Object.hasOwnProperty.call(e, "autoBetCount") && t.uint32(16).int32(e.autoBetCount), null != e.usedAutoBetCount && Object.hasOwnProperty.call(e, "usedAutoBetCount") && t.uint32(24).int32(e.usedAutoBetCount), null != e.numberHandAdded && Object.hasOwnProperty.call(e, "numberHandAdded") && t.uint32(32).int32(e.numberHandAdded), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.AdvanceAutoBetAddRsp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.autoBetCount = e.int32();
                            break;
                        case 3:
                            n.usedAutoBetCount = e.int32();
                            break;
                        case 4:
                            n.numberHandAdded = e.int32();
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
                    case 31e3:
                    case 31001:
                    case 31002:
                    case 31003:
                    case 31004:
                    case 31005:
                    case 31006:
                    case 31007:
                    case 31008:
                    case 31009:
                    case 31010:
                    case 31011:
                    case 31012:
                    case 31013:
                    case 31014:
                    case 31015:
                    case 31016:
                    case 31017:
                    case 31018:
                    case 31019:
                    case 31020:
                    case 31021:
                    case 31022:
                    case 31023:
                    case 31026:
                    case 31024:
                    case 31025:
                    case 31117:
                    case 31118:
                    case 31119:
                }
                return null != e.autoBetCount && e.hasOwnProperty("autoBetCount") && !m.isInteger(e.autoBetCount) ? "autoBetCount: integer expected" : null != e.usedAutoBetCount && e.hasOwnProperty("usedAutoBetCount") && !m.isInteger(e.usedAutoBetCount) ? "usedAutoBetCount: integer expected" : null != e.numberHandAdded && e.hasOwnProperty("numberHandAdded") && !m.isInteger(e.numberHandAdded) ? "numberHandAdded: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.AdvanceAutoBetAddRsp) return e;
                var t = new f.cowboy_proto.AdvanceAutoBetAddRsp;
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
                    case 31e3:
                        t.code = 31e3;
                        break;
                    case "LOW_VERSION":
                    case 31001:
                        t.code = 31001;
                        break;
                    case "INVALID_TOKEN":
                    case 31002:
                        t.code = 31002;
                        break;
                    case "SERVER_BUSY":
                    case 31003:
                        t.code = 31003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 31004:
                        t.code = 31004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 31005:
                        t.code = 31005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 31006:
                        t.code = 31006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 31007:
                        t.code = 31007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 31008:
                        t.code = 31008;
                        break;
                    case "NO_BET":
                    case 31009:
                        t.code = 31009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 31010:
                        t.code = 31010;
                        break;
                    case "NO_MONEY":
                    case 31011:
                        t.code = 31011;
                        break;
                    case "BET_BAD_PARAM":
                    case 31012:
                        t.code = 31012;
                        break;
                    case "STOP_SERVICE":
                    case 31013:
                        t.code = 31013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 31014:
                        t.code = 31014;
                        break;
                    case "BET_TOO_SMALL":
                    case 31015:
                        t.code = 31015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 31016:
                        t.code = 31016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 31017:
                        t.code = 31017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 31018:
                        t.code = 31018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 31019:
                        t.code = 31019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 31020:
                        t.code = 31020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 31021:
                        t.code = 31021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 31022:
                        t.code = 31022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 31023:
                        t.code = 31023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 31026:
                        t.code = 31026;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 31024:
                        t.code = 31024;
                        break;
                    case "IN_CALM_DOWN":
                    case 31025:
                        t.code = 31025;
                        break;
                    case "C2CPAYMENT_LIST_GET_ERROR":
                    case 31117:
                        t.code = 31117;
                        break;
                    case "C2CPAYMENT_NOT_ALLOW":
                    case 31118:
                        t.code = 31118;
                        break;
                    case "CAN_NOT_LEAVE_IN_BETTING":
                    case 31119:
                        t.code = 31119
                }
                return null != e.autoBetCount && (t.autoBetCount = 0 | e.autoBetCount), null != e.usedAutoBetCount && (t.usedAutoBetCount = 0 | e.usedAutoBetCount), null != e.numberHandAdded && (t.numberHandAdded = 0 | e.numberHandAdded), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.autoBetCount = 0, o.usedAutoBetCount = 0, o.numberHandAdded = 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.cowboy_proto.ErrorCode[e.code] ? e.code : f.cowboy_proto.ErrorCode[e.code] : e.code), null != e.autoBetCount && e.hasOwnProperty("autoBetCount") && (o.autoBetCount = e.autoBetCount), null != e.usedAutoBetCount && e.hasOwnProperty("usedAutoBetCount") && (o.usedAutoBetCount = e.usedAutoBetCount), null != e.numberHandAdded && e.hasOwnProperty("numberHandAdded") && (o.numberHandAdded = e.numberHandAdded), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.AdvanceAutoBetAddRsp"
            }, e
        }(), l.BuyInReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.currency_type = 0, e.prototype.ticket_id = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.currency_type && Object.hasOwnProperty.call(e, "currency_type") && t.uint32(8).uint32(e.currency_type), null != e.ticket_id && Object.hasOwnProperty.call(e, "ticket_id") && t.uint32(18).string(e.ticket_id), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.BuyInReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.currency_type = e.uint32();
                            break;
                        case 2:
                            n.ticket_id = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.currency_type && e.hasOwnProperty("currency_type") && !m.isInteger(e.currency_type) ? "currency_type: integer expected" : null != e.ticket_id && e.hasOwnProperty("ticket_id") && !m.isString(e.ticket_id) ? "ticket_id: string expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.BuyInReq) return e;
                var t = new f.cowboy_proto.BuyInReq;
                return null != e.currency_type && (t.currency_type = e.currency_type >>> 0), null != e.ticket_id && (t.ticket_id = String(e.ticket_id)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.currency_type = 0, o.ticket_id = ""), null != e.currency_type && e.hasOwnProperty("currency_type") && (o.currency_type = e.currency_type), null != e.ticket_id && e.hasOwnProperty("ticket_id") && (o.ticket_id = e.ticket_id), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.BuyInReq"
            }, e
        }(), l.BuyInResp = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.cowboy_proto.BuyInResp; e.pos < o;) {
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
                    case 31e3:
                    case 31001:
                    case 31002:
                    case 31003:
                    case 31004:
                    case 31005:
                    case 31006:
                    case 31007:
                    case 31008:
                    case 31009:
                    case 31010:
                    case 31011:
                    case 31012:
                    case 31013:
                    case 31014:
                    case 31015:
                    case 31016:
                    case 31017:
                    case 31018:
                    case 31019:
                    case 31020:
                    case 31021:
                    case 31022:
                    case 31023:
                    case 31026:
                    case 31024:
                    case 31025:
                    case 31117:
                    case 31118:
                    case 31119:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.cowboy_proto.BuyInResp) return e;
                var t = new f.cowboy_proto.BuyInResp;
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
                    case 31e3:
                        t.code = 31e3;
                        break;
                    case "LOW_VERSION":
                    case 31001:
                        t.code = 31001;
                        break;
                    case "INVALID_TOKEN":
                    case 31002:
                        t.code = 31002;
                        break;
                    case "SERVER_BUSY":
                    case 31003:
                        t.code = 31003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 31004:
                        t.code = 31004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 31005:
                        t.code = 31005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 31006:
                        t.code = 31006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 31007:
                        t.code = 31007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 31008:
                        t.code = 31008;
                        break;
                    case "NO_BET":
                    case 31009:
                        t.code = 31009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 31010:
                        t.code = 31010;
                        break;
                    case "NO_MONEY":
                    case 31011:
                        t.code = 31011;
                        break;
                    case "BET_BAD_PARAM":
                    case 31012:
                        t.code = 31012;
                        break;
                    case "STOP_SERVICE":
                    case 31013:
                        t.code = 31013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 31014:
                        t.code = 31014;
                        break;
                    case "BET_TOO_SMALL":
                    case 31015:
                        t.code = 31015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 31016:
                        t.code = 31016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 31017:
                        t.code = 31017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 31018:
                        t.code = 31018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 31019:
                        t.code = 31019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 31020:
                        t.code = 31020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 31021:
                        t.code = 31021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 31022:
                        t.code = 31022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 31023:
                        t.code = 31023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 31026:
                        t.code = 31026;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 31024:
                        t.code = 31024;
                        break;
                    case "IN_CALM_DOWN":
                    case 31025:
                        t.code = 31025;
                        break;
                    case "C2CPAYMENT_LIST_GET_ERROR":
                    case 31117:
                        t.code = 31117;
                        break;
                    case "C2CPAYMENT_NOT_ALLOW":
                    case 31118:
                        t.code = 31118;
                        break;
                    case "CAN_NOT_LEAVE_IN_BETTING":
                    case 31119:
                        t.code = 31119
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.cowboy_proto.ErrorCode[e.code] ? e.code : f.cowboy_proto.ErrorCode[e.code] : e.code), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/cowboy_proto.BuyInResp"
            }, e
        }(), l), n.exports = f, r = e("default", n.exports)
    }), (() => ({
        "protobufjs/minimal.js": n
    })))
}