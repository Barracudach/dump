import * as o from "./cjs-loader.mjs.js";
import * as n from "./minimal.js";

function main() {
    let r;
    e("default", void 0);
    const a = e("__cjsMetaURL", t.meta.url);
    o.define(a, (function(t, o, n, a, i) {
        var s, c, l, u = o("protobufjs/minimal.js"),
            p = u.Reader,
            d = u.Writer,
            m = u.util,
            f = u.roots.default || (u.roots.default = {});
        f.pokermaster_proto = ((l = {}).RoomLevel = (s = {}, (c = Object.create(s))[s[0] = "RoomLevel_DUMMY"] = 0, c[s[1] = "Small"] = 1, c[s[2] = "Middle"] = 2, c[s[3] = "Big"] = 3, c), l.RoleName = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "RoleName_DUMMY"] = 0, t[e[1] = "Fisher"] = 1, t[e[2] = "Shark"] = 2, t
        }(), l.RoundState = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "RoundState_DUMMY"] = 0, t[e[1] = "GAME_PENDING"] = 1, t[e[2] = "NEW_ROUND"] = 2, t[e[3] = "SHOW_ODDS"] = 3, t[e[4] = "BET"] = 4, t[e[5] = "STOP_BET"] = 5, t[e[6] = "WAIT_NEXT_ROUND"] = 6, t[e[7] = "READY_GAME"] = 7, t
        }(), l.BetZoneOption = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "BetZoneOption_DUMMY"] = 0, t[e[100] = "WIN_BEGIN"] = 100, t[e[101] = "FISHER_WIN"] = 101, t[e[102] = "SHARK_WIN"] = 102, t[e[103] = "EQUAL"] = 103, t[e[199] = "WIN_END"] = 199, t[e[300] = "FIVE_BEGIN"] = 300, t[e[301] = "FIVE_NONE_1DUI"] = 301, t[e[302] = "FIVE_2DUI"] = 302, t[e[303] = "FIVE_SAN_SHUN_TONG"] = 303, t[e[304] = "FIVE_GOURD"] = 304, t[e[305] = "FIVE_KING_TONG_HUA_SHUN_4"] = 305, t[e[399] = "FIVE_END"] = 399, t
        }(), l.GameMode = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "DUMMY"] = 0, t[e[1] = "NOAML"] = 1, t[e[3] = "SHORT"] = 3, t
        }(), l.CMD = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "CMD_DUMMY"] = 0, t[e[3e4] = "LOGIN_GAME_REQ"] = 3e4, t[e[30001] = "LOGIN_GAME_RESP"] = 30001, t[e[30004] = "HEART_BEAT_REQ"] = 30004, t[e[30005] = "HEART_BEAT_RESP"] = 30005, t[e[30007] = "JOIN_ROOM_REQ"] = 30007, t[e[30008] = "JOIN_ROOM_RESP"] = 30008, t[e[30009] = "GAME_LIST_REQ"] = 30009, t[e[30010] = "GAME_LIST_RESP"] = 30010, t[e[30011] = "GAME_DATA_SYN"] = 30011, t[e[30012] = "DEAL_NOTIFY"] = 30012, t[e[30013] = "BET_REQ"] = 30013, t[e[30014] = "BET_RESP"] = 30014, t[e[30015] = "BET_NOTIFY"] = 30015, t[e[30016] = "GAME_ROUND_END_NOTIFY"] = 30016, t[e[30018] = "LEAVE_ROOM_REQ"] = 30018, t[e[30019] = "LEAVE_ROOM_RESP"] = 30019, t[e[30020] = "LEAVE_ROOM_NOTIFY"] = 30020, t[e[30022] = "CONN_CLOSE_REQ"] = 30022, t[e[30023] = "ROOM_TREND_REQ"] = 30023, t[e[30024] = "ROOM_TREND_RSP"] = 30024, t[e[30025] = "ROOM_TREND_NOTICE"] = 30025, t[e[30026] = "START_BET_NOTIFY"] = 30026, t[e[30029] = "AUTO_BET_REQ"] = 30029, t[e[30030] = "AUTO_BET_RESP"] = 30030, t[e[30031] = "AUTO_BET_NOTIFY"] = 30031, t[e[30032] = "PLAYER_LIST_REQ"] = 30032, t[e[30033] = "PLAYER_LIST_RESP"] = 30033, t[e[30036] = "MERGE_AUTO_BET_NOTIFY"] = 30036, t[e[30037] = "KICK_NOTIFY"] = 30037, t[e[30038] = "ROOM_TREND_ROAD_REQ"] = 30038, t[e[30039] = "ROOM_TREND_ROAD_RSP"] = 30039, t[e[30040] = "ROOM_TREND_ROAD_NOTICE"] = 30040, t[e[30041] = "AUTO_OPEN_ROADS_REQ"] = 30041, t[e[30042] = "AUTO_OPEN_ROADS_RSP"] = 30042, t[e[30044] = "SET_GAME_OPTION_REQ"] = 30044, t[e[30045] = "SET_GAME_OPTION_RSP"] = 30045, t[e[30047] = "START_SETTLEMENT_NOTIFY"] = 30047, t[e[30050] = "ADVANCE_AUTO_BET_REQ"] = 30050, t[e[30051] = "ADVANCE_AUTO_BET_RSP"] = 30051, t[e[30052] = "CANCEL_ADVANCE_AUTO_BET_REQ"] = 30052, t[e[30053] = "CANCEL_ADVANCE_AUTO_BET_RSP"] = 30053, t[e[30054] = "ADVANCE_AUTO_BET_SET_REQ"] = 30054, t[e[30055] = "ADVANCE_AUTO_BET_SET_RSP"] = 30055, t[e[30056] = "SHOW_ODDS_NOTIFY"] = 30056, t[e[30057] = "STOP_BET_NOTIFY"] = 30057, t[e[30058] = "BET_REVIEW_REQ"] = 30058, t[e[30059] = "BET_REVIEW_RSP"] = 30059, t[e[30060] = "READY_GAME_NOTIFY"] = 30060, t[e[30061] = "USER_POINTS_CHANGE_NOTICE"] = 30061, t[e[30062] = "ADVANCE_AUTO_BET_ADD_REQ"] = 30062, t[e[30063] = "ADVANCE_AUTO_BET_ADD_RSP"] = 30063, t[e[30064] = "BUYIN_REQ"] = 30064, t[e[30065] = "BUYIN_RSP"] = 30065, t
        }(), l.ErrorCode = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "ErrorCode_DUMMY"] = 0, t[e[1] = "OK"] = 1, t[e[51e3] = "ROOM_WITHOUT_YOU"] = 51e3, t[e[51001] = "LOW_VERSION"] = 51001, t[e[51002] = "INVALID_TOKEN"] = 51002, t[e[51003] = "SERVER_BUSY"] = 51003, t[e[51004] = "WITHOUT_LOGIN"] = 51004, t[e[51005] = "ROOM_NOT_MATCH"] = 51005, t[e[51006] = "ROOM_NOT_EXIST"] = 51006, t[e[51007] = "BET_EXCEED_LIMIT"] = 51007, t[e[51008] = "ROOM_PLAYER_LIMIT"] = 51008, t[e[51009] = "NO_BET"] = 51009, t[e[51010] = "BET_AMOUNT_NOT_MATCH"] = 51010, t[e[51011] = "NO_MONEY"] = 51011, t[e[51012] = "BET_BAD_PARAM"] = 51012, t[e[51013] = "STOP_SERVICE"] = 51013, t[e[51014] = "NOT_BET_WHEN_AUTO_BET"] = 51014, t[e[51015] = "BET_TOO_SMALL"] = 51015, t[e[51016] = "BET_COUNT_LIMIT"] = 51016, t[e[51017] = "AUTO_BET_LIMIT"] = 51017, t[e[51018] = "TOO_MANY_PEOPLE"] = 51018, t[e[51019] = "BAD_REQ_PARAM"] = 51019, t[e[51020] = "NO_SET_ADVANCE_AUTO_BET"] = 51020, t[e[51021] = "AUTO_BET_COUNT_LIMIT"] = 51021, t[e[51022] = "AUTO_BET_NO_MONEY"] = 51022, t[e[51023] = "AUTO_BET_EXCEED_LIMIT"] = 51023, t[e[51027] = "REACH_LIMIT_BET"] = 51027, t[e[51024] = "INNER_ERROR"] = 51024, t[e[51025] = "ROOM_SYSTEM_FORCE_CLOSED"] = 51025, t[e[51026] = "IN_CALM_DOWN"] = 51026, t[e[31117] = "C2CPAYMENT_LIST_GET_ERROR"] = 31117, t[e[31118] = "C2CPAYMENT_NOT_ALLOW"] = 31118, t[e[31119] = "CAN_NOT_LEAVE_IN_BETTING"] = 31119, t[e[31120] = "HAS_TICKET_BUY_IN"] = 31120, t
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.StartSettlementNotify; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.pokermaster_proto.StartSettlementNotify ? e : new f.pokermaster_proto.StartSettlementNotify
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.StartSettlementNotify"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.CardItem; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.CardItem) return e;
                var t = new f.pokermaster_proto.CardItem;
                return null != e.number && (t.number = 0 | e.number), null != e.suit && (t.suit = 0 | e.suit), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.number = 0, o.suit = 0), null != e.number && e.hasOwnProperty("number") && (o.number = e.number), null != e.suit && e.hasOwnProperty("suit") && (o.suit = e.suit), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.CardItem"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.HeartBeatReq; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.HeartBeatReq) return e;
                var t = new f.pokermaster_proto.HeartBeatReq;
                return null != e.uid && (t.uid = e.uid >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.uid = 0), null != e.uid && e.hasOwnProperty("uid") && (o.uid = e.uid), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.HeartBeatReq"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.HeartBeatResp; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.HeartBeatResp) return e;
                var t = new f.pokermaster_proto.HeartBeatResp;
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
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.HeartBeatResp"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.LoginReq; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.LoginReq) return e;
                var t = new f.pokermaster_proto.LoginReq;
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
                return t.defaults && (o.version = "", o.token = "", o.client_type = t.enums === String ? "Dummy" : 0), null != e.version && e.hasOwnProperty("version") && (o.version = e.version), null != e.token && e.hasOwnProperty("token") && (o.token = e.token), null != e.client_type && e.hasOwnProperty("client_type") && (o.client_type = t.enums === String ? void 0 === f.pokermaster_proto.ClientType[e.client_type] ? e.client_type : f.pokermaster_proto.ClientType[e.client_type] : e.client_type), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.LoginReq"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.LoginResp; e.pos < o;) {
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
                    case 51e3:
                    case 51001:
                    case 51002:
                    case 51003:
                    case 51004:
                    case 51005:
                    case 51006:
                    case 51007:
                    case 51008:
                    case 51009:
                    case 51010:
                    case 51011:
                    case 51012:
                    case 51013:
                    case 51014:
                    case 51015:
                    case 51016:
                    case 51017:
                    case 51018:
                    case 51019:
                    case 51020:
                    case 51021:
                    case 51022:
                    case 51023:
                    case 51027:
                    case 51024:
                    case 51025:
                    case 51026:
                    case 31117:
                    case 31118:
                    case 31119:
                    case 31120:
                }
                return null != e.roomid && e.hasOwnProperty("roomid") && !m.isInteger(e.roomid) ? "roomid: integer expected" : null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && !(m.isInteger(e.CalmDownLeftSeconds) || e.CalmDownLeftSeconds && m.isInteger(e.CalmDownLeftSeconds.low) && m.isInteger(e.CalmDownLeftSeconds.high)) ? "CalmDownLeftSeconds: integer|Long expected" : null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && !(m.isInteger(e.CalmDownDeadLineTimeStamp) || e.CalmDownDeadLineTimeStamp && m.isInteger(e.CalmDownDeadLineTimeStamp.low) && m.isInteger(e.CalmDownDeadLineTimeStamp.high)) ? "CalmDownDeadLineTimeStamp: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.LoginResp) return e;
                var t = new f.pokermaster_proto.LoginResp;
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
                    case 51e3:
                        t.code = 51e3;
                        break;
                    case "LOW_VERSION":
                    case 51001:
                        t.code = 51001;
                        break;
                    case "INVALID_TOKEN":
                    case 51002:
                        t.code = 51002;
                        break;
                    case "SERVER_BUSY":
                    case 51003:
                        t.code = 51003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 51004:
                        t.code = 51004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 51005:
                        t.code = 51005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 51006:
                        t.code = 51006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 51007:
                        t.code = 51007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 51008:
                        t.code = 51008;
                        break;
                    case "NO_BET":
                    case 51009:
                        t.code = 51009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 51010:
                        t.code = 51010;
                        break;
                    case "NO_MONEY":
                    case 51011:
                        t.code = 51011;
                        break;
                    case "BET_BAD_PARAM":
                    case 51012:
                        t.code = 51012;
                        break;
                    case "STOP_SERVICE":
                    case 51013:
                        t.code = 51013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 51014:
                        t.code = 51014;
                        break;
                    case "BET_TOO_SMALL":
                    case 51015:
                        t.code = 51015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 51016:
                        t.code = 51016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 51017:
                        t.code = 51017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 51018:
                        t.code = 51018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 51019:
                        t.code = 51019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 51020:
                        t.code = 51020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 51021:
                        t.code = 51021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 51022:
                        t.code = 51022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 51023:
                        t.code = 51023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 51027:
                        t.code = 51027;
                        break;
                    case "INNER_ERROR":
                    case 51024:
                        t.code = 51024;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 51025:
                        t.code = 51025;
                        break;
                    case "IN_CALM_DOWN":
                    case 51026:
                        t.code = 51026;
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
                        t.code = 31119;
                        break;
                    case "HAS_TICKET_BUY_IN":
                    case 31120:
                        t.code = 31120
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
                return null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.pokermaster_proto.ErrorCode[e.code] ? e.code : f.pokermaster_proto.ErrorCode[e.code] : e.code), null != e.roomid && e.hasOwnProperty("roomid") && (o.roomid = e.roomid), null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && ("number" == typeof e.CalmDownLeftSeconds ? o.CalmDownLeftSeconds = t.longs === String ? String(e.CalmDownLeftSeconds) : e.CalmDownLeftSeconds : o.CalmDownLeftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownLeftSeconds) : t.longs === Number ? new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber() : e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && ("number" == typeof e.CalmDownDeadLineTimeStamp ? o.CalmDownDeadLineTimeStamp = t.longs === String ? String(e.CalmDownDeadLineTimeStamp) : e.CalmDownDeadLineTimeStamp : o.CalmDownDeadLineTimeStamp = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownDeadLineTimeStamp) : t.longs === Number ? new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber() : e.CalmDownDeadLineTimeStamp), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.LoginResp"
            }, e
        }(), l.JoinRoomReq = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.JoinRoomReq; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.JoinRoomReq) return e;
                var t = new f.pokermaster_proto.JoinRoomReq;
                return null != e.roomid && (t.roomid = e.roomid >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.roomid = 0), null != e.roomid && e.hasOwnProperty("roomid") && (o.roomid = e.roomid), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.JoinRoomReq"
            }, e
        }(), l.JoinRoomResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.roomid = 0, e.prototype.roomuuid = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.roomid && Object.hasOwnProperty.call(e, "roomid") && t.uint32(16).uint32(e.roomid), null != e.roomuuid && Object.hasOwnProperty.call(e, "roomuuid") && t.uint32(24).uint64(e.roomuuid), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.JoinRoomResp; e.pos < o;) {
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
                    case 51e3:
                    case 51001:
                    case 51002:
                    case 51003:
                    case 51004:
                    case 51005:
                    case 51006:
                    case 51007:
                    case 51008:
                    case 51009:
                    case 51010:
                    case 51011:
                    case 51012:
                    case 51013:
                    case 51014:
                    case 51015:
                    case 51016:
                    case 51017:
                    case 51018:
                    case 51019:
                    case 51020:
                    case 51021:
                    case 51022:
                    case 51023:
                    case 51027:
                    case 51024:
                    case 51025:
                    case 51026:
                    case 31117:
                    case 31118:
                    case 31119:
                    case 31120:
                }
                return null != e.roomid && e.hasOwnProperty("roomid") && !m.isInteger(e.roomid) ? "roomid: integer expected" : null != e.roomuuid && e.hasOwnProperty("roomuuid") && !(m.isInteger(e.roomuuid) || e.roomuuid && m.isInteger(e.roomuuid.low) && m.isInteger(e.roomuuid.high)) ? "roomuuid: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.JoinRoomResp) return e;
                var t = new f.pokermaster_proto.JoinRoomResp;
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
                    case 51e3:
                        t.code = 51e3;
                        break;
                    case "LOW_VERSION":
                    case 51001:
                        t.code = 51001;
                        break;
                    case "INVALID_TOKEN":
                    case 51002:
                        t.code = 51002;
                        break;
                    case "SERVER_BUSY":
                    case 51003:
                        t.code = 51003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 51004:
                        t.code = 51004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 51005:
                        t.code = 51005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 51006:
                        t.code = 51006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 51007:
                        t.code = 51007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 51008:
                        t.code = 51008;
                        break;
                    case "NO_BET":
                    case 51009:
                        t.code = 51009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 51010:
                        t.code = 51010;
                        break;
                    case "NO_MONEY":
                    case 51011:
                        t.code = 51011;
                        break;
                    case "BET_BAD_PARAM":
                    case 51012:
                        t.code = 51012;
                        break;
                    case "STOP_SERVICE":
                    case 51013:
                        t.code = 51013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 51014:
                        t.code = 51014;
                        break;
                    case "BET_TOO_SMALL":
                    case 51015:
                        t.code = 51015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 51016:
                        t.code = 51016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 51017:
                        t.code = 51017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 51018:
                        t.code = 51018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 51019:
                        t.code = 51019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 51020:
                        t.code = 51020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 51021:
                        t.code = 51021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 51022:
                        t.code = 51022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 51023:
                        t.code = 51023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 51027:
                        t.code = 51027;
                        break;
                    case "INNER_ERROR":
                    case 51024:
                        t.code = 51024;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 51025:
                        t.code = 51025;
                        break;
                    case "IN_CALM_DOWN":
                    case 51026:
                        t.code = 51026;
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
                        t.code = 31119;
                        break;
                    case "HAS_TICKET_BUY_IN":
                    case 31120:
                        t.code = 31120
                }
                return null != e.roomid && (t.roomid = e.roomid >>> 0), null != e.roomuuid && (m.Long ? (t.roomuuid = m.Long.fromValue(e.roomuuid)).unsigned = !0 : "string" == typeof e.roomuuid ? t.roomuuid = parseInt(e.roomuuid, 10) : "number" == typeof e.roomuuid ? t.roomuuid = e.roomuuid : "object" == typeof e.roomuuid && (t.roomuuid = new m.LongBits(e.roomuuid.low >>> 0, e.roomuuid.high >>> 0).toNumber(!0))), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults)
                    if (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.roomid = 0, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.roomuuid = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.roomuuid = t.longs === String ? "0" : 0;
                return null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.pokermaster_proto.ErrorCode[e.code] ? e.code : f.pokermaster_proto.ErrorCode[e.code] : e.code), null != e.roomid && e.hasOwnProperty("roomid") && (o.roomid = e.roomid), null != e.roomuuid && e.hasOwnProperty("roomuuid") && ("number" == typeof e.roomuuid ? o.roomuuid = t.longs === String ? String(e.roomuuid) : e.roomuuid : o.roomuuid = t.longs === String ? m.Long.prototype.toString.call(e.roomuuid) : t.longs === Number ? new m.LongBits(e.roomuuid.low >>> 0, e.roomuuid.high >>> 0).toNumber(!0) : e.roomuuid), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.JoinRoomResp"
            }, e
        }(), l.RoomParam = function() {
            function e(e) {
                if (this.amountLevel = [], this.pictureCn = [], this.pictureEn = [], this.pictureThai = [], this.totalAmountLevel = [], this.pictureVn = [], this.optionLimit = [], this.ruleByLanguage = [], this.toThirdRulePic = {}, this.plats = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.roomid = 0, e.prototype.amountLevel = m.emptyArray, e.prototype.limitPlayers = 0, e.prototype.deskType = 0, e.prototype.smallBet = 0, e.prototype.pictureCn = m.emptyArray, e.prototype.pictureEn = m.emptyArray, e.prototype.pictureThai = m.emptyArray, e.prototype.totalAmountLevel = m.emptyArray, e.prototype.pictureVn = m.emptyArray, e.prototype.gameMode = 0, e.prototype.optionLimit = m.emptyArray, e.prototype.ruleByLanguage = m.emptyArray, e.prototype.langVersion = 0, e.prototype.rulePic = "", e.prototype.toThirdRulePic = m.emptyObject, e.prototype.plats = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.roomid && Object.hasOwnProperty.call(e, "roomid") && t.uint32(8).uint32(e.roomid), null != e.amountLevel && e.amountLevel.length) {
                    t.uint32(18).fork();
                    for (var o = 0; o < e.amountLevel.length; ++o) t.uint64(e.amountLevel[o]);
                    t.ldelim()
                }
                if (null != e.limitPlayers && Object.hasOwnProperty.call(e, "limitPlayers") && t.uint32(24).uint32(e.limitPlayers), null != e.deskType && Object.hasOwnProperty.call(e, "deskType") && t.uint32(32).uint32(e.deskType), null != e.smallBet && Object.hasOwnProperty.call(e, "smallBet") && t.uint32(40).uint32(e.smallBet), null != e.pictureCn && e.pictureCn.length)
                    for (o = 0; o < e.pictureCn.length; ++o) t.uint32(50).string(e.pictureCn[o]);
                if (null != e.pictureEn && e.pictureEn.length)
                    for (o = 0; o < e.pictureEn.length; ++o) t.uint32(58).string(e.pictureEn[o]);
                if (null != e.pictureThai && e.pictureThai.length)
                    for (o = 0; o < e.pictureThai.length; ++o) t.uint32(66).string(e.pictureThai[o]);
                if (null != e.totalAmountLevel && e.totalAmountLevel.length) {
                    for (t.uint32(74).fork(), o = 0; o < e.totalAmountLevel.length; ++o) t.uint64(e.totalAmountLevel[o]);
                    t.ldelim()
                }
                if (null != e.pictureVn && e.pictureVn.length)
                    for (o = 0; o < e.pictureVn.length; ++o) t.uint32(82).string(e.pictureVn[o]);
                if (null != e.gameMode && Object.hasOwnProperty.call(e, "gameMode") && t.uint32(88).int32(e.gameMode), null != e.optionLimit && e.optionLimit.length)
                    for (o = 0; o < e.optionLimit.length; ++o) f.pokermaster_proto.OddsOptionLimit.encode(e.optionLimit[o], t.uint32(98).fork()).ldelim();
                if (null != e.ruleByLanguage && e.ruleByLanguage.length)
                    for (o = 0; o < e.ruleByLanguage.length; ++o) f.pokermaster_proto.LanguageItem.encode(e.ruleByLanguage[o], t.uint32(106).fork()).ldelim();
                if (null != e.langVersion && Object.hasOwnProperty.call(e, "langVersion") && t.uint32(112).int32(e.langVersion), null != e.rulePic && Object.hasOwnProperty.call(e, "rulePic") && t.uint32(122).string(e.rulePic), null != e.toThirdRulePic && Object.hasOwnProperty.call(e, "toThirdRulePic")) {
                    var n = Object.keys(e.toThirdRulePic);
                    for (o = 0; o < n.length; ++o) t.uint32(130).fork().uint32(10).string(n[o]).uint32(18).string(e.toThirdRulePic[n[o]]).ldelim()
                }
                if (null != e.plats && e.plats.length) {
                    for (t.uint32(138).fork(), o = 0; o < e.plats.length; ++o) t.uint32(e.plats[o]);
                    t.ldelim()
                }
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o, n, r = void 0 === t ? e.len : e.pos + t, a = new f.pokermaster_proto.RoomParam; e.pos < r;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            a.roomid = e.uint32();
                            break;
                        case 2:
                            if (a.amountLevel && a.amountLevel.length || (a.amountLevel = []), 2 == (7 & i))
                                for (var s = e.uint32() + e.pos; e.pos < s;) a.amountLevel.push(e.uint64());
                            else a.amountLevel.push(e.uint64());
                            break;
                        case 3:
                            a.limitPlayers = e.uint32();
                            break;
                        case 4:
                            a.deskType = e.uint32();
                            break;
                        case 5:
                            a.smallBet = e.uint32();
                            break;
                        case 6:
                            a.pictureCn && a.pictureCn.length || (a.pictureCn = []), a.pictureCn.push(e.string());
                            break;
                        case 7:
                            a.pictureEn && a.pictureEn.length || (a.pictureEn = []), a.pictureEn.push(e.string());
                            break;
                        case 8:
                            a.pictureThai && a.pictureThai.length || (a.pictureThai = []), a.pictureThai.push(e.string());
                            break;
                        case 9:
                            if (a.totalAmountLevel && a.totalAmountLevel.length || (a.totalAmountLevel = []), 2 == (7 & i))
                                for (s = e.uint32() + e.pos; e.pos < s;) a.totalAmountLevel.push(e.uint64());
                            else a.totalAmountLevel.push(e.uint64());
                            break;
                        case 10:
                            a.pictureVn && a.pictureVn.length || (a.pictureVn = []), a.pictureVn.push(e.string());
                            break;
                        case 11:
                            a.gameMode = e.int32();
                            break;
                        case 12:
                            a.optionLimit && a.optionLimit.length || (a.optionLimit = []), a.optionLimit.push(f.pokermaster_proto.OddsOptionLimit.decode(e, e.uint32()));
                            break;
                        case 13:
                            a.ruleByLanguage && a.ruleByLanguage.length || (a.ruleByLanguage = []), a.ruleByLanguage.push(f.pokermaster_proto.LanguageItem.decode(e, e.uint32()));
                            break;
                        case 14:
                            a.langVersion = e.int32();
                            break;
                        case 15:
                            a.rulePic = e.string();
                            break;
                        case 16:
                            for (a.toThirdRulePic === m.emptyObject && (a.toThirdRulePic = {}), s = e.uint32() + e.pos, o = "", n = ""; e.pos < s;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        o = e.string();
                                        break;
                                    case 2:
                                        n = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            a.toThirdRulePic[o] = n;
                            break;
                        case 17:
                            if (a.plats && a.plats.length || (a.plats = []), 2 == (7 & i))
                                for (s = e.uint32() + e.pos; e.pos < s;) a.plats.push(e.uint32());
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
                if (null != e.pictureThai && e.hasOwnProperty("pictureThai")) {
                    if (!Array.isArray(e.pictureThai)) return "pictureThai: array expected";
                    for (t = 0; t < e.pictureThai.length; ++t)
                        if (!m.isString(e.pictureThai[t])) return "pictureThai: string[] expected"
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
                if (null != e.gameMode && e.hasOwnProperty("gameMode") && !m.isInteger(e.gameMode)) return "gameMode: integer expected";
                if (null != e.optionLimit && e.hasOwnProperty("optionLimit")) {
                    if (!Array.isArray(e.optionLimit)) return "optionLimit: array expected";
                    for (t = 0; t < e.optionLimit.length; ++t)
                        if (o = f.pokermaster_proto.OddsOptionLimit.verify(e.optionLimit[t])) return "optionLimit." + o
                }
                if (null != e.ruleByLanguage && e.hasOwnProperty("ruleByLanguage")) {
                    if (!Array.isArray(e.ruleByLanguage)) return "ruleByLanguage: array expected";
                    for (t = 0; t < e.ruleByLanguage.length; ++t) {
                        var o;
                        if (o = f.pokermaster_proto.LanguageItem.verify(e.ruleByLanguage[t])) return "ruleByLanguage." + o
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
                if (e instanceof f.pokermaster_proto.RoomParam) return e;
                var t = new f.pokermaster_proto.RoomParam;
                if (null != e.roomid && (t.roomid = e.roomid >>> 0), e.amountLevel) {
                    if (!Array.isArray(e.amountLevel)) throw TypeError(".pokermaster_proto.RoomParam.amountLevel: array expected");
                    t.amountLevel = [];
                    for (var o = 0; o < e.amountLevel.length; ++o) m.Long ? (t.amountLevel[o] = m.Long.fromValue(e.amountLevel[o])).unsigned = !0 : "string" == typeof e.amountLevel[o] ? t.amountLevel[o] = parseInt(e.amountLevel[o], 10) : "number" == typeof e.amountLevel[o] ? t.amountLevel[o] = e.amountLevel[o] : "object" == typeof e.amountLevel[o] && (t.amountLevel[o] = new m.LongBits(e.amountLevel[o].low >>> 0, e.amountLevel[o].high >>> 0).toNumber(!0))
                }
                if (null != e.limitPlayers && (t.limitPlayers = e.limitPlayers >>> 0), null != e.deskType && (t.deskType = e.deskType >>> 0), null != e.smallBet && (t.smallBet = e.smallBet >>> 0), e.pictureCn) {
                    if (!Array.isArray(e.pictureCn)) throw TypeError(".pokermaster_proto.RoomParam.pictureCn: array expected");
                    for (t.pictureCn = [], o = 0; o < e.pictureCn.length; ++o) t.pictureCn[o] = String(e.pictureCn[o])
                }
                if (e.pictureEn) {
                    if (!Array.isArray(e.pictureEn)) throw TypeError(".pokermaster_proto.RoomParam.pictureEn: array expected");
                    for (t.pictureEn = [], o = 0; o < e.pictureEn.length; ++o) t.pictureEn[o] = String(e.pictureEn[o])
                }
                if (e.pictureThai) {
                    if (!Array.isArray(e.pictureThai)) throw TypeError(".pokermaster_proto.RoomParam.pictureThai: array expected");
                    for (t.pictureThai = [], o = 0; o < e.pictureThai.length; ++o) t.pictureThai[o] = String(e.pictureThai[o])
                }
                if (e.totalAmountLevel) {
                    if (!Array.isArray(e.totalAmountLevel)) throw TypeError(".pokermaster_proto.RoomParam.totalAmountLevel: array expected");
                    for (t.totalAmountLevel = [], o = 0; o < e.totalAmountLevel.length; ++o) m.Long ? (t.totalAmountLevel[o] = m.Long.fromValue(e.totalAmountLevel[o])).unsigned = !0 : "string" == typeof e.totalAmountLevel[o] ? t.totalAmountLevel[o] = parseInt(e.totalAmountLevel[o], 10) : "number" == typeof e.totalAmountLevel[o] ? t.totalAmountLevel[o] = e.totalAmountLevel[o] : "object" == typeof e.totalAmountLevel[o] && (t.totalAmountLevel[o] = new m.LongBits(e.totalAmountLevel[o].low >>> 0, e.totalAmountLevel[o].high >>> 0).toNumber(!0))
                }
                if (e.pictureVn) {
                    if (!Array.isArray(e.pictureVn)) throw TypeError(".pokermaster_proto.RoomParam.pictureVn: array expected");
                    for (t.pictureVn = [], o = 0; o < e.pictureVn.length; ++o) t.pictureVn[o] = String(e.pictureVn[o])
                }
                if (null != e.gameMode && (t.gameMode = 0 | e.gameMode), e.optionLimit) {
                    if (!Array.isArray(e.optionLimit)) throw TypeError(".pokermaster_proto.RoomParam.optionLimit: array expected");
                    for (t.optionLimit = [], o = 0; o < e.optionLimit.length; ++o) {
                        if ("object" != typeof e.optionLimit[o]) throw TypeError(".pokermaster_proto.RoomParam.optionLimit: object expected");
                        t.optionLimit[o] = f.pokermaster_proto.OddsOptionLimit.fromObject(e.optionLimit[o])
                    }
                }
                if (e.ruleByLanguage) {
                    if (!Array.isArray(e.ruleByLanguage)) throw TypeError(".pokermaster_proto.RoomParam.ruleByLanguage: array expected");
                    for (t.ruleByLanguage = [], o = 0; o < e.ruleByLanguage.length; ++o) {
                        if ("object" != typeof e.ruleByLanguage[o]) throw TypeError(".pokermaster_proto.RoomParam.ruleByLanguage: object expected");
                        t.ruleByLanguage[o] = f.pokermaster_proto.LanguageItem.fromObject(e.ruleByLanguage[o])
                    }
                }
                if (null != e.langVersion && (t.langVersion = 0 | e.langVersion), null != e.rulePic && (t.rulePic = String(e.rulePic)), e.toThirdRulePic) {
                    if ("object" != typeof e.toThirdRulePic) throw TypeError(".pokermaster_proto.RoomParam.toThirdRulePic: object expected");
                    t.toThirdRulePic = {};
                    var n = Object.keys(e.toThirdRulePic);
                    for (o = 0; o < n.length; ++o) t.toThirdRulePic[n[o]] = String(e.toThirdRulePic[n[o]])
                }
                if (e.plats) {
                    if (!Array.isArray(e.plats)) throw TypeError(".pokermaster_proto.RoomParam.plats: array expected");
                    for (t.plats = [], o = 0; o < e.plats.length; ++o) t.plats[o] = e.plats[o] >>> 0
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o, n = {};
                if ((t.arrays || t.defaults) && (n.amountLevel = [], n.pictureCn = [], n.pictureEn = [], n.pictureThai = [], n.totalAmountLevel = [], n.pictureVn = [], n.optionLimit = [], n.ruleByLanguage = [], n.plats = []), (t.objects || t.defaults) && (n.toThirdRulePic = {}), t.defaults && (n.roomid = 0, n.limitPlayers = 0, n.deskType = 0, n.smallBet = 0, n.gameMode = 0, n.langVersion = 0, n.rulePic = ""), null != e.roomid && e.hasOwnProperty("roomid") && (n.roomid = e.roomid), e.amountLevel && e.amountLevel.length) {
                    n.amountLevel = [];
                    for (var r = 0; r < e.amountLevel.length; ++r) "number" == typeof e.amountLevel[r] ? n.amountLevel[r] = t.longs === String ? String(e.amountLevel[r]) : e.amountLevel[r] : n.amountLevel[r] = t.longs === String ? m.Long.prototype.toString.call(e.amountLevel[r]) : t.longs === Number ? new m.LongBits(e.amountLevel[r].low >>> 0, e.amountLevel[r].high >>> 0).toNumber(!0) : e.amountLevel[r]
                }
                if (null != e.limitPlayers && e.hasOwnProperty("limitPlayers") && (n.limitPlayers = e.limitPlayers), null != e.deskType && e.hasOwnProperty("deskType") && (n.deskType = e.deskType), null != e.smallBet && e.hasOwnProperty("smallBet") && (n.smallBet = e.smallBet), e.pictureCn && e.pictureCn.length)
                    for (n.pictureCn = [], r = 0; r < e.pictureCn.length; ++r) n.pictureCn[r] = e.pictureCn[r];
                if (e.pictureEn && e.pictureEn.length)
                    for (n.pictureEn = [], r = 0; r < e.pictureEn.length; ++r) n.pictureEn[r] = e.pictureEn[r];
                if (e.pictureThai && e.pictureThai.length)
                    for (n.pictureThai = [], r = 0; r < e.pictureThai.length; ++r) n.pictureThai[r] = e.pictureThai[r];
                if (e.totalAmountLevel && e.totalAmountLevel.length)
                    for (n.totalAmountLevel = [], r = 0; r < e.totalAmountLevel.length; ++r) "number" == typeof e.totalAmountLevel[r] ? n.totalAmountLevel[r] = t.longs === String ? String(e.totalAmountLevel[r]) : e.totalAmountLevel[r] : n.totalAmountLevel[r] = t.longs === String ? m.Long.prototype.toString.call(e.totalAmountLevel[r]) : t.longs === Number ? new m.LongBits(e.totalAmountLevel[r].low >>> 0, e.totalAmountLevel[r].high >>> 0).toNumber(!0) : e.totalAmountLevel[r];
                if (e.pictureVn && e.pictureVn.length)
                    for (n.pictureVn = [], r = 0; r < e.pictureVn.length; ++r) n.pictureVn[r] = e.pictureVn[r];
                if (null != e.gameMode && e.hasOwnProperty("gameMode") && (n.gameMode = e.gameMode), e.optionLimit && e.optionLimit.length)
                    for (n.optionLimit = [], r = 0; r < e.optionLimit.length; ++r) n.optionLimit[r] = f.pokermaster_proto.OddsOptionLimit.toObject(e.optionLimit[r], t);
                if (e.ruleByLanguage && e.ruleByLanguage.length)
                    for (n.ruleByLanguage = [], r = 0; r < e.ruleByLanguage.length; ++r) n.ruleByLanguage[r] = f.pokermaster_proto.LanguageItem.toObject(e.ruleByLanguage[r], t);
                if (null != e.langVersion && e.hasOwnProperty("langVersion") && (n.langVersion = e.langVersion), null != e.rulePic && e.hasOwnProperty("rulePic") && (n.rulePic = e.rulePic), e.toThirdRulePic && (o = Object.keys(e.toThirdRulePic)).length)
                    for (n.toThirdRulePic = {}, r = 0; r < o.length; ++r) n.toThirdRulePic[o[r]] = e.toThirdRulePic[o[r]];
                if (e.plats && e.plats.length)
                    for (n.plats = [], r = 0; r < e.plats.length; ++r) n.plats[r] = e.plats[r];
                return n
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.RoomParam"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.LanguageItem; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.LanguageItem) return e;
                var t = new f.pokermaster_proto.LanguageItem;
                return null != e.lang && (t.lang = String(e.lang)), null != e.value && (t.value = String(e.value)), null != e.plat && (t.plat = e.plat >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.lang = "", o.value = "", o.plat = 0), null != e.lang && e.hasOwnProperty("lang") && (o.lang = e.lang), null != e.value && e.hasOwnProperty("value") && (o.value = e.value), null != e.plat && e.hasOwnProperty("plat") && (o.plat = e.plat), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.LanguageItem"
            }, e
        }(), l.OddsOptionLimit = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.minOdds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.maxOdds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.limitRed = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.minOdds && Object.hasOwnProperty.call(e, "minOdds") && t.uint32(8).int64(e.minOdds), null != e.maxOdds && Object.hasOwnProperty.call(e, "maxOdds") && t.uint32(16).int64(e.maxOdds), null != e.limitRed && Object.hasOwnProperty.call(e, "limitRed") && t.uint32(24).int64(e.limitRed), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.OddsOptionLimit; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.minOdds = e.int64();
                            break;
                        case 2:
                            n.maxOdds = e.int64();
                            break;
                        case 3:
                            n.limitRed = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.minOdds && e.hasOwnProperty("minOdds") && !(m.isInteger(e.minOdds) || e.minOdds && m.isInteger(e.minOdds.low) && m.isInteger(e.minOdds.high)) ? "minOdds: integer|Long expected" : null != e.maxOdds && e.hasOwnProperty("maxOdds") && !(m.isInteger(e.maxOdds) || e.maxOdds && m.isInteger(e.maxOdds.low) && m.isInteger(e.maxOdds.high)) ? "maxOdds: integer|Long expected" : null != e.limitRed && e.hasOwnProperty("limitRed") && !(m.isInteger(e.limitRed) || e.limitRed && m.isInteger(e.limitRed.low) && m.isInteger(e.limitRed.high)) ? "limitRed: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.OddsOptionLimit) return e;
                var t = new f.pokermaster_proto.OddsOptionLimit;
                return null != e.minOdds && (m.Long ? (t.minOdds = m.Long.fromValue(e.minOdds)).unsigned = !1 : "string" == typeof e.minOdds ? t.minOdds = parseInt(e.minOdds, 10) : "number" == typeof e.minOdds ? t.minOdds = e.minOdds : "object" == typeof e.minOdds && (t.minOdds = new m.LongBits(e.minOdds.low >>> 0, e.minOdds.high >>> 0).toNumber())), null != e.maxOdds && (m.Long ? (t.maxOdds = m.Long.fromValue(e.maxOdds)).unsigned = !1 : "string" == typeof e.maxOdds ? t.maxOdds = parseInt(e.maxOdds, 10) : "number" == typeof e.maxOdds ? t.maxOdds = e.maxOdds : "object" == typeof e.maxOdds && (t.maxOdds = new m.LongBits(e.maxOdds.low >>> 0, e.maxOdds.high >>> 0).toNumber())), null != e.limitRed && (m.Long ? (t.limitRed = m.Long.fromValue(e.limitRed)).unsigned = !1 : "string" == typeof e.limitRed ? t.limitRed = parseInt(e.limitRed, 10) : "number" == typeof e.limitRed ? t.limitRed = e.limitRed : "object" == typeof e.limitRed && (t.limitRed = new m.LongBits(e.limitRed.low >>> 0, e.limitRed.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.minOdds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.minOdds = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !1), o.maxOdds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.maxOdds = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !1), o.limitRed = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.limitRed = t.longs === String ? "0" : 0
                }
                return null != e.minOdds && e.hasOwnProperty("minOdds") && ("number" == typeof e.minOdds ? o.minOdds = t.longs === String ? String(e.minOdds) : e.minOdds : o.minOdds = t.longs === String ? m.Long.prototype.toString.call(e.minOdds) : t.longs === Number ? new m.LongBits(e.minOdds.low >>> 0, e.minOdds.high >>> 0).toNumber() : e.minOdds), null != e.maxOdds && e.hasOwnProperty("maxOdds") && ("number" == typeof e.maxOdds ? o.maxOdds = t.longs === String ? String(e.maxOdds) : e.maxOdds : o.maxOdds = t.longs === String ? m.Long.prototype.toString.call(e.maxOdds) : t.longs === Number ? new m.LongBits(e.maxOdds.low >>> 0, e.maxOdds.high >>> 0).toNumber() : e.maxOdds), null != e.limitRed && e.hasOwnProperty("limitRed") && ("number" == typeof e.limitRed ? o.limitRed = t.longs === String ? String(e.limitRed) : e.limitRed : o.limitRed = t.longs === String ? m.Long.prototype.toString.call(e.limitRed) : t.longs === Number ? new m.LongBits(e.limitRed.low >>> 0, e.limitRed.high >>> 0).toNumber() : e.limitRed), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.OddsOptionLimit"
            }, e
        }(), l.ZoneLimit = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.limit = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.limit && Object.hasOwnProperty.call(e, "limit") && t.uint32(8).uint64(e.limit), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.ZoneLimit; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
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
                return "object" != typeof e || null === e ? "object expected" : null != e.limit && e.hasOwnProperty("limit") && !(m.isInteger(e.limit) || e.limit && m.isInteger(e.limit.low) && m.isInteger(e.limit.high)) ? "limit: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.ZoneLimit) return e;
                var t = new f.pokermaster_proto.ZoneLimit;
                return null != e.limit && (m.Long ? (t.limit = m.Long.fromValue(e.limit)).unsigned = !0 : "string" == typeof e.limit ? t.limit = parseInt(e.limit, 10) : "number" == typeof e.limit ? t.limit = e.limit : "object" == typeof e.limit && (t.limit = new m.LongBits(e.limit.low >>> 0, e.limit.high >>> 0).toNumber(!0))), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults)
                    if (m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.limit = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.limit = t.longs === String ? "0" : 0;
                return null != e.limit && e.hasOwnProperty("limit") && ("number" == typeof e.limit ? o.limit = t.longs === String ? String(e.limit) : e.limit : o.limit = t.longs === String ? m.Long.prototype.toString.call(e.limit) : t.longs === Number ? new m.LongBits(e.limit.low >>> 0, e.limit.high >>> 0).toNumber(!0) : e.limit), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.ZoneLimit"
            }, e
        }(), l.OddsDetail = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.option = 0, e.prototype.odds = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(8).int32(e.option), null != e.odds && Object.hasOwnProperty.call(e, "odds") && t.uint32(16).uint64(e.odds), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.OddsDetail; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.option = e.int32();
                            break;
                        case 2:
                            n.odds = e.uint64();
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
                    case 300:
                    case 301:
                    case 302:
                    case 303:
                    case 304:
                    case 305:
                    case 399:
                }
                return null != e.odds && e.hasOwnProperty("odds") && !(m.isInteger(e.odds) || e.odds && m.isInteger(e.odds.low) && m.isInteger(e.odds.high)) ? "odds: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.OddsDetail) return e;
                var t = new f.pokermaster_proto.OddsDetail;
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
                    case "FISHER_WIN":
                    case 101:
                        t.option = 101;
                        break;
                    case "SHARK_WIN":
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
                    case "FIVE_SAN_SHUN_TONG":
                    case 303:
                        t.option = 303;
                        break;
                    case "FIVE_GOURD":
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
                return null != e.odds && (m.Long ? (t.odds = m.Long.fromValue(e.odds)).unsigned = !0 : "string" == typeof e.odds ? t.odds = parseInt(e.odds, 10) : "number" == typeof e.odds ? t.odds = e.odds : "object" == typeof e.odds && (t.odds = new m.LongBits(e.odds.low >>> 0, e.odds.high >>> 0).toNumber(!0))), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults)
                    if (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.odds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.odds = t.longs === String ? "0" : 0;
                return null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.pokermaster_proto.BetZoneOption[e.option] ? e.option : f.pokermaster_proto.BetZoneOption[e.option] : e.option), null != e.odds && e.hasOwnProperty("odds") && ("number" == typeof e.odds ? o.odds = t.longs === String ? String(e.odds) : e.odds : o.odds = t.longs === String ? m.Long.prototype.toString.call(e.odds) : t.longs === Number ? new m.LongBits(e.odds.low >>> 0, e.odds.high >>> 0).toNumber(!0) : e.odds), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.OddsDetail"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.GameListReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.pokermaster_proto.GameListReq ? e : new f.pokermaster_proto.GameListReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.GameListReq"
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
                    for (var o = 0; o < e.gameList.length; ++o) f.pokermaster_proto.GameSnapShot.encode(e.gameList[o], t.uint32(10).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.GameListResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.gameList && n.gameList.length || (n.gameList = []), n.gameList.push(f.pokermaster_proto.GameSnapShot.decode(e, e.uint32()));
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
                        var o = f.pokermaster_proto.GameSnapShot.verify(e.gameList[t]);
                        if (o) return "gameList." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.GameListResp) return e;
                var t = new f.pokermaster_proto.GameListResp;
                if (e.gameList) {
                    if (!Array.isArray(e.gameList)) throw TypeError(".pokermaster_proto.GameListResp.gameList: array expected");
                    t.gameList = [];
                    for (var o = 0; o < e.gameList.length; ++o) {
                        if ("object" != typeof e.gameList[o]) throw TypeError(".pokermaster_proto.GameListResp.gameList: object expected");
                        t.gameList[o] = f.pokermaster_proto.GameSnapShot.fromObject(e.gameList[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.gameList = []), e.gameList && e.gameList.length) {
                    o.gameList = [];
                    for (var n = 0; n < e.gameList.length; ++n) o.gameList[n] = f.pokermaster_proto.GameSnapShot.toObject(e.gameList[n], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.GameListResp"
            }, e
        }(), l.GameSnapShot = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.param = null, e.prototype.playerNum = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.param && Object.hasOwnProperty.call(e, "param") && f.pokermaster_proto.RoomParam.encode(e.param, t.uint32(10).fork()).ldelim(), null != e.playerNum && Object.hasOwnProperty.call(e, "playerNum") && t.uint32(16).int32(e.playerNum), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.GameSnapShot; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.param = f.pokermaster_proto.RoomParam.decode(e, e.uint32());
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
                    var t = f.pokermaster_proto.RoomParam.verify(e.param);
                    if (t) return "param." + t
                }
                return null != e.playerNum && e.hasOwnProperty("playerNum") && !m.isInteger(e.playerNum) ? "playerNum: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.GameSnapShot) return e;
                var t = new f.pokermaster_proto.GameSnapShot;
                if (null != e.param) {
                    if ("object" != typeof e.param) throw TypeError(".pokermaster_proto.GameSnapShot.param: object expected");
                    t.param = f.pokermaster_proto.RoomParam.fromObject(e.param)
                }
                return null != e.playerNum && (t.playerNum = 0 | e.playerNum), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.param = null, o.playerNum = 0), null != e.param && e.hasOwnProperty("param") && (o.param = f.pokermaster_proto.RoomParam.toObject(e.param, t)), null != e.playerNum && e.hasOwnProperty("playerNum") && (o.playerNum = e.playerNum), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.GameSnapShot"
            }, e
        }(), l.GameDataSynNotify = function() {
            function e(e) {
                if (this.optionInfo = [], this.lastResult = [], this.players = [], this.publicCards = [], this.optionResults = [], this.betCoinOption = [], this.AutoBetCountList = [], this.fisherHoleCards = [], this.sharkHoleCards = [], this.oddsOp = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.param = null, e.prototype.optionInfo = m.emptyArray, e.prototype.lastResult = m.emptyArray, e.prototype.curState = 0, e.prototype.nextRoundEndStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.players = m.emptyArray, e.prototype.publicCards = m.emptyArray, e.prototype.canAuto = !1, e.prototype.cachedNotifyMsg = null, e.prototype.leftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.openRoads = !1, e.prototype.optionResults = m.emptyArray, e.prototype.betCoinOption = m.emptyArray, e.prototype.autoLevel = 0, e.prototype.usedAutoBetCount = 0, e.prototype.selectAutoBetCount = 0, e.prototype.AutoBetCountList = m.emptyArray, e.prototype.canAdvanceAuto = !1, e.prototype.BetButtonLimitAmount = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.fisherHoleCards = m.emptyArray, e.prototype.sharkHoleCards = m.emptyArray, e.prototype.squintMsg = null, e.prototype.fortune = null, e.prototype.oddsOp = m.emptyArray, e.prototype.whoIsLeader = 0, e.prototype.CalmDownLeftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.CalmDownDeadLineTimeStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.reachLimitBet = !1, e.prototype.isUsingTicket = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.param && Object.hasOwnProperty.call(e, "param") && f.pokermaster_proto.RoomParam.encode(e.param, t.uint32(10).fork()).ldelim(), null != e.optionInfo && e.optionInfo.length)
                    for (var o = 0; o < e.optionInfo.length; ++o) f.pokermaster_proto.BetOptionInfo.encode(e.optionInfo[o], t.uint32(18).fork()).ldelim();
                if (null != e.lastResult && e.lastResult.length) {
                    for (t.uint32(26).fork(), o = 0; o < e.lastResult.length; ++o) t.int32(e.lastResult[o]);
                    t.ldelim()
                }
                if (null != e.curState && Object.hasOwnProperty.call(e, "curState") && t.uint32(32).int32(e.curState), null != e.nextRoundEndStamp && Object.hasOwnProperty.call(e, "nextRoundEndStamp") && t.uint32(40).int64(e.nextRoundEndStamp), null != e.players && e.players.length)
                    for (o = 0; o < e.players.length; ++o) f.pokermaster_proto.GamePlayer.encode(e.players[o], t.uint32(50).fork()).ldelim();
                if (null != e.publicCards && e.publicCards.length)
                    for (o = 0; o < e.publicCards.length; ++o) f.pokermaster_proto.CardItem.encode(e.publicCards[o], t.uint32(58).fork()).ldelim();
                if (null != e.canAuto && Object.hasOwnProperty.call(e, "canAuto") && t.uint32(64).bool(e.canAuto), null != e.cachedNotifyMsg && Object.hasOwnProperty.call(e, "cachedNotifyMsg") && f.pokermaster_proto.GameRoundEndNotify.encode(e.cachedNotifyMsg, t.uint32(74).fork()).ldelim(), null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(80).int64(e.leftSeconds), null != e.openRoads && Object.hasOwnProperty.call(e, "openRoads") && t.uint32(88).bool(e.openRoads), null != e.optionResults && e.optionResults.length)
                    for (o = 0; o < e.optionResults.length; ++o) f.pokermaster_proto.OptionResults.encode(e.optionResults[o], t.uint32(98).fork()).ldelim();
                if (null != e.betCoinOption && e.betCoinOption.length) {
                    for (t.uint32(106).fork(), o = 0; o < e.betCoinOption.length; ++o) t.uint64(e.betCoinOption[o]);
                    t.ldelim()
                }
                if (null != e.autoLevel && Object.hasOwnProperty.call(e, "autoLevel") && t.uint32(112).int32(e.autoLevel), null != e.usedAutoBetCount && Object.hasOwnProperty.call(e, "usedAutoBetCount") && t.uint32(120).int32(e.usedAutoBetCount), null != e.selectAutoBetCount && Object.hasOwnProperty.call(e, "selectAutoBetCount") && t.uint32(128).int32(e.selectAutoBetCount), null != e.AutoBetCountList && e.AutoBetCountList.length) {
                    for (t.uint32(138).fork(), o = 0; o < e.AutoBetCountList.length; ++o) t.int32(e.AutoBetCountList[o]);
                    t.ldelim()
                }
                if (null != e.canAdvanceAuto && Object.hasOwnProperty.call(e, "canAdvanceAuto") && t.uint32(144).bool(e.canAdvanceAuto), null != e.BetButtonLimitAmount && Object.hasOwnProperty.call(e, "BetButtonLimitAmount") && t.uint32(152).int64(e.BetButtonLimitAmount), null != e.fisherHoleCards && e.fisherHoleCards.length)
                    for (o = 0; o < e.fisherHoleCards.length; ++o) f.pokermaster_proto.CardItem.encode(e.fisherHoleCards[o], t.uint32(162).fork()).ldelim();
                if (null != e.sharkHoleCards && e.sharkHoleCards.length)
                    for (o = 0; o < e.sharkHoleCards.length; ++o) f.pokermaster_proto.CardItem.encode(e.sharkHoleCards[o], t.uint32(170).fork()).ldelim();
                if (null != e.squintMsg && Object.hasOwnProperty.call(e, "squintMsg") && f.pokermaster_proto.StopBetNotify.encode(e.squintMsg, t.uint32(186).fork()).ldelim(), null != e.fortune && Object.hasOwnProperty.call(e, "fortune") && f.pokermaster_proto.PlayerFortune.encode(e.fortune, t.uint32(194).fork()).ldelim(), null != e.oddsOp && e.oddsOp.length)
                    for (o = 0; o < e.oddsOp.length; ++o) f.pokermaster_proto.BetOptionsOdds.encode(e.oddsOp[o], t.uint32(202).fork()).ldelim();
                return null != e.whoIsLeader && Object.hasOwnProperty.call(e, "whoIsLeader") && t.uint32(208).int32(e.whoIsLeader), null != e.CalmDownLeftSeconds && Object.hasOwnProperty.call(e, "CalmDownLeftSeconds") && t.uint32(232).int64(e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && Object.hasOwnProperty.call(e, "CalmDownDeadLineTimeStamp") && t.uint32(240).int64(e.CalmDownDeadLineTimeStamp), null != e.reachLimitBet && Object.hasOwnProperty.call(e, "reachLimitBet") && t.uint32(248).bool(e.reachLimitBet), null != e.isUsingTicket && Object.hasOwnProperty.call(e, "isUsingTicket") && t.uint32(256).bool(e.isUsingTicket), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.GameDataSynNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.param = f.pokermaster_proto.RoomParam.decode(e, e.uint32());
                            break;
                        case 2:
                            n.optionInfo && n.optionInfo.length || (n.optionInfo = []), n.optionInfo.push(f.pokermaster_proto.BetOptionInfo.decode(e, e.uint32()));
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
                            n.players && n.players.length || (n.players = []), n.players.push(f.pokermaster_proto.GamePlayer.decode(e, e.uint32()));
                            break;
                        case 7:
                            n.publicCards && n.publicCards.length || (n.publicCards = []), n.publicCards.push(f.pokermaster_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 8:
                            n.canAuto = e.bool();
                            break;
                        case 9:
                            n.cachedNotifyMsg = f.pokermaster_proto.GameRoundEndNotify.decode(e, e.uint32());
                            break;
                        case 10:
                            n.leftSeconds = e.int64();
                            break;
                        case 11:
                            n.openRoads = e.bool();
                            break;
                        case 12:
                            n.optionResults && n.optionResults.length || (n.optionResults = []), n.optionResults.push(f.pokermaster_proto.OptionResults.decode(e, e.uint32()));
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
                            n.fisherHoleCards && n.fisherHoleCards.length || (n.fisherHoleCards = []), n.fisherHoleCards.push(f.pokermaster_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 21:
                            n.sharkHoleCards && n.sharkHoleCards.length || (n.sharkHoleCards = []), n.sharkHoleCards.push(f.pokermaster_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 23:
                            n.squintMsg = f.pokermaster_proto.StopBetNotify.decode(e, e.uint32());
                            break;
                        case 24:
                            n.fortune = f.pokermaster_proto.PlayerFortune.decode(e, e.uint32());
                            break;
                        case 25:
                            n.oddsOp && n.oddsOp.length || (n.oddsOp = []), n.oddsOp.push(f.pokermaster_proto.BetOptionsOdds.decode(e, e.uint32()));
                            break;
                        case 26:
                            n.whoIsLeader = e.int32();
                            break;
                        case 29:
                            n.CalmDownLeftSeconds = e.int64();
                            break;
                        case 30:
                            n.CalmDownDeadLineTimeStamp = e.int64();
                            break;
                        case 31:
                            n.reachLimitBet = e.bool();
                            break;
                        case 32:
                            n.isUsingTicket = e.bool();
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
                if (null != e.param && e.hasOwnProperty("param") && (o = f.pokermaster_proto.RoomParam.verify(e.param))) return "param." + o;
                if (null != e.optionInfo && e.hasOwnProperty("optionInfo")) {
                    if (!Array.isArray(e.optionInfo)) return "optionInfo: array expected";
                    for (var t = 0; t < e.optionInfo.length; ++t)
                        if (o = f.pokermaster_proto.BetOptionInfo.verify(e.optionInfo[t])) return "optionInfo." + o
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
                    case 5:
                    case 6:
                    case 7:
                }
                if (null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && !(m.isInteger(e.nextRoundEndStamp) || e.nextRoundEndStamp && m.isInteger(e.nextRoundEndStamp.low) && m.isInteger(e.nextRoundEndStamp.high))) return "nextRoundEndStamp: integer|Long expected";
                if (null != e.players && e.hasOwnProperty("players")) {
                    if (!Array.isArray(e.players)) return "players: array expected";
                    for (t = 0; t < e.players.length; ++t)
                        if (o = f.pokermaster_proto.GamePlayer.verify(e.players[t])) return "players." + o
                }
                if (null != e.publicCards && e.hasOwnProperty("publicCards")) {
                    if (!Array.isArray(e.publicCards)) return "publicCards: array expected";
                    for (t = 0; t < e.publicCards.length; ++t)
                        if (o = f.pokermaster_proto.CardItem.verify(e.publicCards[t])) return "publicCards." + o
                }
                if (null != e.canAuto && e.hasOwnProperty("canAuto") && "boolean" != typeof e.canAuto) return "canAuto: boolean expected";
                if (null != e.cachedNotifyMsg && e.hasOwnProperty("cachedNotifyMsg") && (o = f.pokermaster_proto.GameRoundEndNotify.verify(e.cachedNotifyMsg))) return "cachedNotifyMsg." + o;
                if (null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(m.isInteger(e.leftSeconds) || e.leftSeconds && m.isInteger(e.leftSeconds.low) && m.isInteger(e.leftSeconds.high))) return "leftSeconds: integer|Long expected";
                if (null != e.openRoads && e.hasOwnProperty("openRoads") && "boolean" != typeof e.openRoads) return "openRoads: boolean expected";
                if (null != e.optionResults && e.hasOwnProperty("optionResults")) {
                    if (!Array.isArray(e.optionResults)) return "optionResults: array expected";
                    for (t = 0; t < e.optionResults.length; ++t)
                        if (o = f.pokermaster_proto.OptionResults.verify(e.optionResults[t])) return "optionResults." + o
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
                if (null != e.canAdvanceAuto && e.hasOwnProperty("canAdvanceAuto") && "boolean" != typeof e.canAdvanceAuto) return "canAdvanceAuto: boolean expected";
                if (null != e.BetButtonLimitAmount && e.hasOwnProperty("BetButtonLimitAmount") && !(m.isInteger(e.BetButtonLimitAmount) || e.BetButtonLimitAmount && m.isInteger(e.BetButtonLimitAmount.low) && m.isInteger(e.BetButtonLimitAmount.high))) return "BetButtonLimitAmount: integer|Long expected";
                if (null != e.fisherHoleCards && e.hasOwnProperty("fisherHoleCards")) {
                    if (!Array.isArray(e.fisherHoleCards)) return "fisherHoleCards: array expected";
                    for (t = 0; t < e.fisherHoleCards.length; ++t)
                        if (o = f.pokermaster_proto.CardItem.verify(e.fisherHoleCards[t])) return "fisherHoleCards." + o
                }
                if (null != e.sharkHoleCards && e.hasOwnProperty("sharkHoleCards")) {
                    if (!Array.isArray(e.sharkHoleCards)) return "sharkHoleCards: array expected";
                    for (t = 0; t < e.sharkHoleCards.length; ++t)
                        if (o = f.pokermaster_proto.CardItem.verify(e.sharkHoleCards[t])) return "sharkHoleCards." + o
                }
                if (null != e.squintMsg && e.hasOwnProperty("squintMsg") && (o = f.pokermaster_proto.StopBetNotify.verify(e.squintMsg))) return "squintMsg." + o;
                if (null != e.fortune && e.hasOwnProperty("fortune") && (o = f.pokermaster_proto.PlayerFortune.verify(e.fortune))) return "fortune." + o;
                if (null != e.oddsOp && e.hasOwnProperty("oddsOp")) {
                    if (!Array.isArray(e.oddsOp)) return "oddsOp: array expected";
                    for (t = 0; t < e.oddsOp.length; ++t) {
                        var o;
                        if (o = f.pokermaster_proto.BetOptionsOdds.verify(e.oddsOp[t])) return "oddsOp." + o
                    }
                }
                return null != e.whoIsLeader && e.hasOwnProperty("whoIsLeader") && !m.isInteger(e.whoIsLeader) ? "whoIsLeader: integer expected" : null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && !(m.isInteger(e.CalmDownLeftSeconds) || e.CalmDownLeftSeconds && m.isInteger(e.CalmDownLeftSeconds.low) && m.isInteger(e.CalmDownLeftSeconds.high)) ? "CalmDownLeftSeconds: integer|Long expected" : null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && !(m.isInteger(e.CalmDownDeadLineTimeStamp) || e.CalmDownDeadLineTimeStamp && m.isInteger(e.CalmDownDeadLineTimeStamp.low) && m.isInteger(e.CalmDownDeadLineTimeStamp.high)) ? "CalmDownDeadLineTimeStamp: integer|Long expected" : null != e.reachLimitBet && e.hasOwnProperty("reachLimitBet") && "boolean" != typeof e.reachLimitBet ? "reachLimitBet: boolean expected" : null != e.isUsingTicket && e.hasOwnProperty("isUsingTicket") && "boolean" != typeof e.isUsingTicket ? "isUsingTicket: boolean expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.GameDataSynNotify) return e;
                var t = new f.pokermaster_proto.GameDataSynNotify;
                if (null != e.param) {
                    if ("object" != typeof e.param) throw TypeError(".pokermaster_proto.GameDataSynNotify.param: object expected");
                    t.param = f.pokermaster_proto.RoomParam.fromObject(e.param)
                }
                if (e.optionInfo) {
                    if (!Array.isArray(e.optionInfo)) throw TypeError(".pokermaster_proto.GameDataSynNotify.optionInfo: array expected");
                    t.optionInfo = [];
                    for (var o = 0; o < e.optionInfo.length; ++o) {
                        if ("object" != typeof e.optionInfo[o]) throw TypeError(".pokermaster_proto.GameDataSynNotify.optionInfo: object expected");
                        t.optionInfo[o] = f.pokermaster_proto.BetOptionInfo.fromObject(e.optionInfo[o])
                    }
                }
                if (e.lastResult) {
                    if (!Array.isArray(e.lastResult)) throw TypeError(".pokermaster_proto.GameDataSynNotify.lastResult: array expected");
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
                        case "FISHER_WIN":
                        case 101:
                            t.lastResult[o] = 101;
                            break;
                        case "SHARK_WIN":
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
                        case "FIVE_SAN_SHUN_TONG":
                        case 303:
                            t.lastResult[o] = 303;
                            break;
                        case "FIVE_GOURD":
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
                    case "SHOW_ODDS":
                    case 3:
                        t.curState = 3;
                        break;
                    case "BET":
                    case 4:
                        t.curState = 4;
                        break;
                    case "STOP_BET":
                    case 5:
                        t.curState = 5;
                        break;
                    case "WAIT_NEXT_ROUND":
                    case 6:
                        t.curState = 6;
                        break;
                    case "READY_GAME":
                    case 7:
                        t.curState = 7
                }
                if (null != e.nextRoundEndStamp && (m.Long ? (t.nextRoundEndStamp = m.Long.fromValue(e.nextRoundEndStamp)).unsigned = !1 : "string" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = parseInt(e.nextRoundEndStamp, 10) : "number" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = e.nextRoundEndStamp : "object" == typeof e.nextRoundEndStamp && (t.nextRoundEndStamp = new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber())), e.players) {
                    if (!Array.isArray(e.players)) throw TypeError(".pokermaster_proto.GameDataSynNotify.players: array expected");
                    for (t.players = [], o = 0; o < e.players.length; ++o) {
                        if ("object" != typeof e.players[o]) throw TypeError(".pokermaster_proto.GameDataSynNotify.players: object expected");
                        t.players[o] = f.pokermaster_proto.GamePlayer.fromObject(e.players[o])
                    }
                }
                if (e.publicCards) {
                    if (!Array.isArray(e.publicCards)) throw TypeError(".pokermaster_proto.GameDataSynNotify.publicCards: array expected");
                    for (t.publicCards = [], o = 0; o < e.publicCards.length; ++o) {
                        if ("object" != typeof e.publicCards[o]) throw TypeError(".pokermaster_proto.GameDataSynNotify.publicCards: object expected");
                        t.publicCards[o] = f.pokermaster_proto.CardItem.fromObject(e.publicCards[o])
                    }
                }
                if (null != e.canAuto && (t.canAuto = Boolean(e.canAuto)), null != e.cachedNotifyMsg) {
                    if ("object" != typeof e.cachedNotifyMsg) throw TypeError(".pokermaster_proto.GameDataSynNotify.cachedNotifyMsg: object expected");
                    t.cachedNotifyMsg = f.pokermaster_proto.GameRoundEndNotify.fromObject(e.cachedNotifyMsg)
                }
                if (null != e.leftSeconds && (m.Long ? (t.leftSeconds = m.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), null != e.openRoads && (t.openRoads = Boolean(e.openRoads)), e.optionResults) {
                    if (!Array.isArray(e.optionResults)) throw TypeError(".pokermaster_proto.GameDataSynNotify.optionResults: array expected");
                    for (t.optionResults = [], o = 0; o < e.optionResults.length; ++o) {
                        if ("object" != typeof e.optionResults[o]) throw TypeError(".pokermaster_proto.GameDataSynNotify.optionResults: object expected");
                        t.optionResults[o] = f.pokermaster_proto.OptionResults.fromObject(e.optionResults[o])
                    }
                }
                if (e.betCoinOption) {
                    if (!Array.isArray(e.betCoinOption)) throw TypeError(".pokermaster_proto.GameDataSynNotify.betCoinOption: array expected");
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
                    if (!Array.isArray(e.AutoBetCountList)) throw TypeError(".pokermaster_proto.GameDataSynNotify.AutoBetCountList: array expected");
                    for (t.AutoBetCountList = [], o = 0; o < e.AutoBetCountList.length; ++o) t.AutoBetCountList[o] = 0 | e.AutoBetCountList[o]
                }
                if (null != e.canAdvanceAuto && (t.canAdvanceAuto = Boolean(e.canAdvanceAuto)), null != e.BetButtonLimitAmount && (m.Long ? (t.BetButtonLimitAmount = m.Long.fromValue(e.BetButtonLimitAmount)).unsigned = !1 : "string" == typeof e.BetButtonLimitAmount ? t.BetButtonLimitAmount = parseInt(e.BetButtonLimitAmount, 10) : "number" == typeof e.BetButtonLimitAmount ? t.BetButtonLimitAmount = e.BetButtonLimitAmount : "object" == typeof e.BetButtonLimitAmount && (t.BetButtonLimitAmount = new m.LongBits(e.BetButtonLimitAmount.low >>> 0, e.BetButtonLimitAmount.high >>> 0).toNumber())), e.fisherHoleCards) {
                    if (!Array.isArray(e.fisherHoleCards)) throw TypeError(".pokermaster_proto.GameDataSynNotify.fisherHoleCards: array expected");
                    for (t.fisherHoleCards = [], o = 0; o < e.fisherHoleCards.length; ++o) {
                        if ("object" != typeof e.fisherHoleCards[o]) throw TypeError(".pokermaster_proto.GameDataSynNotify.fisherHoleCards: object expected");
                        t.fisherHoleCards[o] = f.pokermaster_proto.CardItem.fromObject(e.fisherHoleCards[o])
                    }
                }
                if (e.sharkHoleCards) {
                    if (!Array.isArray(e.sharkHoleCards)) throw TypeError(".pokermaster_proto.GameDataSynNotify.sharkHoleCards: array expected");
                    for (t.sharkHoleCards = [], o = 0; o < e.sharkHoleCards.length; ++o) {
                        if ("object" != typeof e.sharkHoleCards[o]) throw TypeError(".pokermaster_proto.GameDataSynNotify.sharkHoleCards: object expected");
                        t.sharkHoleCards[o] = f.pokermaster_proto.CardItem.fromObject(e.sharkHoleCards[o])
                    }
                }
                if (null != e.squintMsg) {
                    if ("object" != typeof e.squintMsg) throw TypeError(".pokermaster_proto.GameDataSynNotify.squintMsg: object expected");
                    t.squintMsg = f.pokermaster_proto.StopBetNotify.fromObject(e.squintMsg)
                }
                if (null != e.fortune) {
                    if ("object" != typeof e.fortune) throw TypeError(".pokermaster_proto.GameDataSynNotify.fortune: object expected");
                    t.fortune = f.pokermaster_proto.PlayerFortune.fromObject(e.fortune)
                }
                if (e.oddsOp) {
                    if (!Array.isArray(e.oddsOp)) throw TypeError(".pokermaster_proto.GameDataSynNotify.oddsOp: array expected");
                    for (t.oddsOp = [], o = 0; o < e.oddsOp.length; ++o) {
                        if ("object" != typeof e.oddsOp[o]) throw TypeError(".pokermaster_proto.GameDataSynNotify.oddsOp: object expected");
                        t.oddsOp[o] = f.pokermaster_proto.BetOptionsOdds.fromObject(e.oddsOp[o])
                    }
                }
                return null != e.whoIsLeader && (t.whoIsLeader = 0 | e.whoIsLeader), null != e.CalmDownLeftSeconds && (m.Long ? (t.CalmDownLeftSeconds = m.Long.fromValue(e.CalmDownLeftSeconds)).unsigned = !1 : "string" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = parseInt(e.CalmDownLeftSeconds, 10) : "number" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = e.CalmDownLeftSeconds : "object" == typeof e.CalmDownLeftSeconds && (t.CalmDownLeftSeconds = new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber())), null != e.CalmDownDeadLineTimeStamp && (m.Long ? (t.CalmDownDeadLineTimeStamp = m.Long.fromValue(e.CalmDownDeadLineTimeStamp)).unsigned = !1 : "string" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = parseInt(e.CalmDownDeadLineTimeStamp, 10) : "number" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = e.CalmDownDeadLineTimeStamp : "object" == typeof e.CalmDownDeadLineTimeStamp && (t.CalmDownDeadLineTimeStamp = new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber())), null != e.reachLimitBet && (t.reachLimitBet = Boolean(e.reachLimitBet)), null != e.isUsingTicket && (t.isUsingTicket = Boolean(e.isUsingTicket)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.optionInfo = [], o.lastResult = [], o.players = [], o.publicCards = [], o.optionResults = [], o.betCoinOption = [], o.AutoBetCountList = [], o.fisherHoleCards = [], o.sharkHoleCards = [], o.oddsOp = []), t.defaults) {
                    if (o.param = null, o.curState = t.enums === String ? "RoundState_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.nextRoundEndStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.nextRoundEndStamp = t.longs === String ? "0" : 0;
                    o.canAuto = !1, o.cachedNotifyMsg = null, m.Long ? (n = new m.Long(0, 0, !1), o.leftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.leftSeconds = t.longs === String ? "0" : 0, o.openRoads = !1, o.autoLevel = t.enums === String ? "Level_Normal" : 0, o.usedAutoBetCount = 0, o.selectAutoBetCount = 0, o.canAdvanceAuto = !1, m.Long ? (n = new m.Long(0, 0, !1), o.BetButtonLimitAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.BetButtonLimitAmount = t.longs === String ? "0" : 0, o.squintMsg = null, o.fortune = null, o.whoIsLeader = 0, m.Long ? (n = new m.Long(0, 0, !1), o.CalmDownLeftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.CalmDownLeftSeconds = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !1), o.CalmDownDeadLineTimeStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.CalmDownDeadLineTimeStamp = t.longs === String ? "0" : 0, o.reachLimitBet = !1, o.isUsingTicket = !1
                }
                if (null != e.param && e.hasOwnProperty("param") && (o.param = f.pokermaster_proto.RoomParam.toObject(e.param, t)), e.optionInfo && e.optionInfo.length) {
                    o.optionInfo = [];
                    for (var r = 0; r < e.optionInfo.length; ++r) o.optionInfo[r] = f.pokermaster_proto.BetOptionInfo.toObject(e.optionInfo[r], t)
                }
                if (e.lastResult && e.lastResult.length)
                    for (o.lastResult = [], r = 0; r < e.lastResult.length; ++r) o.lastResult[r] = t.enums === String ? void 0 === f.pokermaster_proto.BetZoneOption[e.lastResult[r]] ? e.lastResult[r] : f.pokermaster_proto.BetZoneOption[e.lastResult[r]] : e.lastResult[r];
                if (null != e.curState && e.hasOwnProperty("curState") && (o.curState = t.enums === String ? void 0 === f.pokermaster_proto.RoundState[e.curState] ? e.curState : f.pokermaster_proto.RoundState[e.curState] : e.curState), null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && ("number" == typeof e.nextRoundEndStamp ? o.nextRoundEndStamp = t.longs === String ? String(e.nextRoundEndStamp) : e.nextRoundEndStamp : o.nextRoundEndStamp = t.longs === String ? m.Long.prototype.toString.call(e.nextRoundEndStamp) : t.longs === Number ? new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber() : e.nextRoundEndStamp), e.players && e.players.length)
                    for (o.players = [], r = 0; r < e.players.length; ++r) o.players[r] = f.pokermaster_proto.GamePlayer.toObject(e.players[r], t);
                if (e.publicCards && e.publicCards.length)
                    for (o.publicCards = [], r = 0; r < e.publicCards.length; ++r) o.publicCards[r] = f.pokermaster_proto.CardItem.toObject(e.publicCards[r], t);
                if (null != e.canAuto && e.hasOwnProperty("canAuto") && (o.canAuto = e.canAuto), null != e.cachedNotifyMsg && e.hasOwnProperty("cachedNotifyMsg") && (o.cachedNotifyMsg = f.pokermaster_proto.GameRoundEndNotify.toObject(e.cachedNotifyMsg, t)), null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? o.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : o.leftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), null != e.openRoads && e.hasOwnProperty("openRoads") && (o.openRoads = e.openRoads), e.optionResults && e.optionResults.length)
                    for (o.optionResults = [], r = 0; r < e.optionResults.length; ++r) o.optionResults[r] = f.pokermaster_proto.OptionResults.toObject(e.optionResults[r], t);
                if (e.betCoinOption && e.betCoinOption.length)
                    for (o.betCoinOption = [], r = 0; r < e.betCoinOption.length; ++r) "number" == typeof e.betCoinOption[r] ? o.betCoinOption[r] = t.longs === String ? String(e.betCoinOption[r]) : e.betCoinOption[r] : o.betCoinOption[r] = t.longs === String ? m.Long.prototype.toString.call(e.betCoinOption[r]) : t.longs === Number ? new m.LongBits(e.betCoinOption[r].low >>> 0, e.betCoinOption[r].high >>> 0).toNumber(!0) : e.betCoinOption[r];
                if (null != e.autoLevel && e.hasOwnProperty("autoLevel") && (o.autoLevel = t.enums === String ? void 0 === f.pokermaster_proto.AutoBetLevel[e.autoLevel] ? e.autoLevel : f.pokermaster_proto.AutoBetLevel[e.autoLevel] : e.autoLevel), null != e.usedAutoBetCount && e.hasOwnProperty("usedAutoBetCount") && (o.usedAutoBetCount = e.usedAutoBetCount), null != e.selectAutoBetCount && e.hasOwnProperty("selectAutoBetCount") && (o.selectAutoBetCount = e.selectAutoBetCount), e.AutoBetCountList && e.AutoBetCountList.length)
                    for (o.AutoBetCountList = [], r = 0; r < e.AutoBetCountList.length; ++r) o.AutoBetCountList[r] = e.AutoBetCountList[r];
                if (null != e.canAdvanceAuto && e.hasOwnProperty("canAdvanceAuto") && (o.canAdvanceAuto = e.canAdvanceAuto), null != e.BetButtonLimitAmount && e.hasOwnProperty("BetButtonLimitAmount") && ("number" == typeof e.BetButtonLimitAmount ? o.BetButtonLimitAmount = t.longs === String ? String(e.BetButtonLimitAmount) : e.BetButtonLimitAmount : o.BetButtonLimitAmount = t.longs === String ? m.Long.prototype.toString.call(e.BetButtonLimitAmount) : t.longs === Number ? new m.LongBits(e.BetButtonLimitAmount.low >>> 0, e.BetButtonLimitAmount.high >>> 0).toNumber() : e.BetButtonLimitAmount), e.fisherHoleCards && e.fisherHoleCards.length)
                    for (o.fisherHoleCards = [], r = 0; r < e.fisherHoleCards.length; ++r) o.fisherHoleCards[r] = f.pokermaster_proto.CardItem.toObject(e.fisherHoleCards[r], t);
                if (e.sharkHoleCards && e.sharkHoleCards.length)
                    for (o.sharkHoleCards = [], r = 0; r < e.sharkHoleCards.length; ++r) o.sharkHoleCards[r] = f.pokermaster_proto.CardItem.toObject(e.sharkHoleCards[r], t);
                if (null != e.squintMsg && e.hasOwnProperty("squintMsg") && (o.squintMsg = f.pokermaster_proto.StopBetNotify.toObject(e.squintMsg, t)), null != e.fortune && e.hasOwnProperty("fortune") && (o.fortune = f.pokermaster_proto.PlayerFortune.toObject(e.fortune, t)), e.oddsOp && e.oddsOp.length)
                    for (o.oddsOp = [], r = 0; r < e.oddsOp.length; ++r) o.oddsOp[r] = f.pokermaster_proto.BetOptionsOdds.toObject(e.oddsOp[r], t);
                return null != e.whoIsLeader && e.hasOwnProperty("whoIsLeader") && (o.whoIsLeader = e.whoIsLeader), null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && ("number" == typeof e.CalmDownLeftSeconds ? o.CalmDownLeftSeconds = t.longs === String ? String(e.CalmDownLeftSeconds) : e.CalmDownLeftSeconds : o.CalmDownLeftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownLeftSeconds) : t.longs === Number ? new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber() : e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && ("number" == typeof e.CalmDownDeadLineTimeStamp ? o.CalmDownDeadLineTimeStamp = t.longs === String ? String(e.CalmDownDeadLineTimeStamp) : e.CalmDownDeadLineTimeStamp : o.CalmDownDeadLineTimeStamp = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownDeadLineTimeStamp) : t.longs === Number ? new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber() : e.CalmDownDeadLineTimeStamp), null != e.reachLimitBet && e.hasOwnProperty("reachLimitBet") && (o.reachLimitBet = e.reachLimitBet), null != e.isUsingTicket && e.hasOwnProperty("isUsingTicket") && (o.isUsingTicket = e.isUsingTicket), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.GameDataSynNotify"
            }, e
        }(), l.BetOptionInfo = function() {
            function e(e) {
                if (this.amount = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.option = 0, e.prototype.selfBet = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.totalBet = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.amount = m.emptyArray, e.prototype.odds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.limitRed = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(8).int32(e.option), null != e.selfBet && Object.hasOwnProperty.call(e, "selfBet") && t.uint32(16).uint64(e.selfBet), null != e.totalBet && Object.hasOwnProperty.call(e, "totalBet") && t.uint32(24).uint64(e.totalBet), null != e.amount && e.amount.length) {
                    t.uint32(34).fork();
                    for (var o = 0; o < e.amount.length; ++o) t.uint64(e.amount[o]);
                    t.ldelim()
                }
                return null != e.odds && Object.hasOwnProperty.call(e, "odds") && t.uint32(40).int64(e.odds), null != e.limitRed && Object.hasOwnProperty.call(e, "limitRed") && t.uint32(48).uint64(e.limitRed), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.BetOptionInfo; e.pos < o;) {
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
                        case 5:
                            n.odds = e.int64();
                            break;
                        case 6:
                            n.limitRed = e.uint64();
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
                return null != e.odds && e.hasOwnProperty("odds") && !(m.isInteger(e.odds) || e.odds && m.isInteger(e.odds.low) && m.isInteger(e.odds.high)) ? "odds: integer|Long expected" : null != e.limitRed && e.hasOwnProperty("limitRed") && !(m.isInteger(e.limitRed) || e.limitRed && m.isInteger(e.limitRed.low) && m.isInteger(e.limitRed.high)) ? "limitRed: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.BetOptionInfo) return e;
                var t = new f.pokermaster_proto.BetOptionInfo;
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
                    case "FISHER_WIN":
                    case 101:
                        t.option = 101;
                        break;
                    case "SHARK_WIN":
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
                    case "FIVE_SAN_SHUN_TONG":
                    case 303:
                        t.option = 303;
                        break;
                    case "FIVE_GOURD":
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
                    if (!Array.isArray(e.amount)) throw TypeError(".pokermaster_proto.BetOptionInfo.amount: array expected");
                    t.amount = [];
                    for (var o = 0; o < e.amount.length; ++o) m.Long ? (t.amount[o] = m.Long.fromValue(e.amount[o])).unsigned = !0 : "string" == typeof e.amount[o] ? t.amount[o] = parseInt(e.amount[o], 10) : "number" == typeof e.amount[o] ? t.amount[o] = e.amount[o] : "object" == typeof e.amount[o] && (t.amount[o] = new m.LongBits(e.amount[o].low >>> 0, e.amount[o].high >>> 0).toNumber(!0))
                }
                return null != e.odds && (m.Long ? (t.odds = m.Long.fromValue(e.odds)).unsigned = !1 : "string" == typeof e.odds ? t.odds = parseInt(e.odds, 10) : "number" == typeof e.odds ? t.odds = e.odds : "object" == typeof e.odds && (t.odds = new m.LongBits(e.odds.low >>> 0, e.odds.high >>> 0).toNumber())), null != e.limitRed && (m.Long ? (t.limitRed = m.Long.fromValue(e.limitRed)).unsigned = !0 : "string" == typeof e.limitRed ? t.limitRed = parseInt(e.limitRed, 10) : "number" == typeof e.limitRed ? t.limitRed = e.limitRed : "object" == typeof e.limitRed && (t.limitRed = new m.LongBits(e.limitRed.low >>> 0, e.limitRed.high >>> 0).toNumber(!0))), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.amount = []), t.defaults) {
                    if (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.selfBet = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.selfBet = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !0), o.totalBet = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.totalBet = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !1), o.odds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.odds = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !0), o.limitRed = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.limitRed = t.longs === String ? "0" : 0
                }
                if (null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.pokermaster_proto.BetZoneOption[e.option] ? e.option : f.pokermaster_proto.BetZoneOption[e.option] : e.option), null != e.selfBet && e.hasOwnProperty("selfBet") && ("number" == typeof e.selfBet ? o.selfBet = t.longs === String ? String(e.selfBet) : e.selfBet : o.selfBet = t.longs === String ? m.Long.prototype.toString.call(e.selfBet) : t.longs === Number ? new m.LongBits(e.selfBet.low >>> 0, e.selfBet.high >>> 0).toNumber(!0) : e.selfBet), null != e.totalBet && e.hasOwnProperty("totalBet") && ("number" == typeof e.totalBet ? o.totalBet = t.longs === String ? String(e.totalBet) : e.totalBet : o.totalBet = t.longs === String ? m.Long.prototype.toString.call(e.totalBet) : t.longs === Number ? new m.LongBits(e.totalBet.low >>> 0, e.totalBet.high >>> 0).toNumber(!0) : e.totalBet), e.amount && e.amount.length) {
                    o.amount = [];
                    for (var r = 0; r < e.amount.length; ++r) "number" == typeof e.amount[r] ? o.amount[r] = t.longs === String ? String(e.amount[r]) : e.amount[r] : o.amount[r] = t.longs === String ? m.Long.prototype.toString.call(e.amount[r]) : t.longs === Number ? new m.LongBits(e.amount[r].low >>> 0, e.amount[r].high >>> 0).toNumber(!0) : e.amount[r]
                }
                return null != e.odds && e.hasOwnProperty("odds") && ("number" == typeof e.odds ? o.odds = t.longs === String ? String(e.odds) : e.odds : o.odds = t.longs === String ? m.Long.prototype.toString.call(e.odds) : t.longs === Number ? new m.LongBits(e.odds.low >>> 0, e.odds.high >>> 0).toNumber() : e.odds), null != e.limitRed && e.hasOwnProperty("limitRed") && ("number" == typeof e.limitRed ? o.limitRed = t.longs === String ? String(e.limitRed) : e.limitRed : o.limitRed = t.longs === String ? m.Long.prototype.toString.call(e.limitRed) : t.longs === Number ? new m.LongBits(e.limitRed.low >>> 0, e.limitRed.high >>> 0).toNumber(!0) : e.limitRed), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.BetOptionInfo"
            }, e
        }(), l.DealNotify = function() {
            function e(e) {
                if (this.players = [], this.lastResult = [], this.playerHoleCard = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.nextRoundEndStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.players = m.emptyArray, e.prototype.param = null, e.prototype.changed = !1, e.prototype.lastResult = m.emptyArray, e.prototype.leftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.canAuto = !1, e.prototype.playerHoleCard = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.nextRoundEndStamp && Object.hasOwnProperty.call(e, "nextRoundEndStamp") && t.uint32(8).int64(e.nextRoundEndStamp), null != e.players && e.players.length)
                    for (var o = 0; o < e.players.length; ++o) f.pokermaster_proto.GamePlayer.encode(e.players[o], t.uint32(18).fork()).ldelim();
                if (null != e.param && Object.hasOwnProperty.call(e, "param") && f.pokermaster_proto.RoomParam.encode(e.param, t.uint32(26).fork()).ldelim(), null != e.changed && Object.hasOwnProperty.call(e, "changed") && t.uint32(32).bool(e.changed), null != e.lastResult && e.lastResult.length) {
                    for (t.uint32(42).fork(), o = 0; o < e.lastResult.length; ++o) t.int32(e.lastResult[o]);
                    t.ldelim()
                }
                if (null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(48).int64(e.leftSeconds), null != e.canAuto && Object.hasOwnProperty.call(e, "canAuto") && t.uint32(56).bool(e.canAuto), null != e.playerHoleCard && e.playerHoleCard.length)
                    for (o = 0; o < e.playerHoleCard.length; ++o) f.pokermaster_proto.PlayerHoleCard.encode(e.playerHoleCard[o], t.uint32(66).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.DealNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.nextRoundEndStamp = e.int64();
                            break;
                        case 2:
                            n.players && n.players.length || (n.players = []), n.players.push(f.pokermaster_proto.GamePlayer.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.param = f.pokermaster_proto.RoomParam.decode(e, e.uint32());
                            break;
                        case 4:
                            n.changed = e.bool();
                            break;
                        case 5:
                            if (n.lastResult && n.lastResult.length || (n.lastResult = []), 2 == (7 & r))
                                for (var a = e.uint32() + e.pos; e.pos < a;) n.lastResult.push(e.int32());
                            else n.lastResult.push(e.int32());
                            break;
                        case 6:
                            n.leftSeconds = e.int64();
                            break;
                        case 7:
                            n.canAuto = e.bool();
                            break;
                        case 8:
                            n.playerHoleCard && n.playerHoleCard.length || (n.playerHoleCard = []), n.playerHoleCard.push(f.pokermaster_proto.PlayerHoleCard.decode(e, e.uint32()));
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
                if (null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && !(m.isInteger(e.nextRoundEndStamp) || e.nextRoundEndStamp && m.isInteger(e.nextRoundEndStamp.low) && m.isInteger(e.nextRoundEndStamp.high))) return "nextRoundEndStamp: integer|Long expected";
                if (null != e.players && e.hasOwnProperty("players")) {
                    if (!Array.isArray(e.players)) return "players: array expected";
                    for (var t = 0; t < e.players.length; ++t)
                        if (o = f.pokermaster_proto.GamePlayer.verify(e.players[t])) return "players." + o
                }
                if (null != e.param && e.hasOwnProperty("param") && (o = f.pokermaster_proto.RoomParam.verify(e.param))) return "param." + o;
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
                        case 300:
                        case 301:
                        case 302:
                        case 303:
                        case 304:
                        case 305:
                        case 399:
                    }
                }
                if (null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(m.isInteger(e.leftSeconds) || e.leftSeconds && m.isInteger(e.leftSeconds.low) && m.isInteger(e.leftSeconds.high))) return "leftSeconds: integer|Long expected";
                if (null != e.canAuto && e.hasOwnProperty("canAuto") && "boolean" != typeof e.canAuto) return "canAuto: boolean expected";
                if (null != e.playerHoleCard && e.hasOwnProperty("playerHoleCard")) {
                    if (!Array.isArray(e.playerHoleCard)) return "playerHoleCard: array expected";
                    for (t = 0; t < e.playerHoleCard.length; ++t) {
                        var o;
                        if (o = f.pokermaster_proto.PlayerHoleCard.verify(e.playerHoleCard[t])) return "playerHoleCard." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.DealNotify) return e;
                var t = new f.pokermaster_proto.DealNotify;
                if (null != e.nextRoundEndStamp && (m.Long ? (t.nextRoundEndStamp = m.Long.fromValue(e.nextRoundEndStamp)).unsigned = !1 : "string" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = parseInt(e.nextRoundEndStamp, 10) : "number" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = e.nextRoundEndStamp : "object" == typeof e.nextRoundEndStamp && (t.nextRoundEndStamp = new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber())), e.players) {
                    if (!Array.isArray(e.players)) throw TypeError(".pokermaster_proto.DealNotify.players: array expected");
                    t.players = [];
                    for (var o = 0; o < e.players.length; ++o) {
                        if ("object" != typeof e.players[o]) throw TypeError(".pokermaster_proto.DealNotify.players: object expected");
                        t.players[o] = f.pokermaster_proto.GamePlayer.fromObject(e.players[o])
                    }
                }
                if (null != e.param) {
                    if ("object" != typeof e.param) throw TypeError(".pokermaster_proto.DealNotify.param: object expected");
                    t.param = f.pokermaster_proto.RoomParam.fromObject(e.param)
                }
                if (null != e.changed && (t.changed = Boolean(e.changed)), e.lastResult) {
                    if (!Array.isArray(e.lastResult)) throw TypeError(".pokermaster_proto.DealNotify.lastResult: array expected");
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
                        case "FISHER_WIN":
                        case 101:
                            t.lastResult[o] = 101;
                            break;
                        case "SHARK_WIN":
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
                        case "FIVE_SAN_SHUN_TONG":
                        case 303:
                            t.lastResult[o] = 303;
                            break;
                        case "FIVE_GOURD":
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
                if (null != e.leftSeconds && (m.Long ? (t.leftSeconds = m.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), null != e.canAuto && (t.canAuto = Boolean(e.canAuto)), e.playerHoleCard) {
                    if (!Array.isArray(e.playerHoleCard)) throw TypeError(".pokermaster_proto.DealNotify.playerHoleCard: array expected");
                    for (t.playerHoleCard = [], o = 0; o < e.playerHoleCard.length; ++o) {
                        if ("object" != typeof e.playerHoleCard[o]) throw TypeError(".pokermaster_proto.DealNotify.playerHoleCard: object expected");
                        t.playerHoleCard[o] = f.pokermaster_proto.PlayerHoleCard.fromObject(e.playerHoleCard[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.players = [], o.lastResult = [], o.playerHoleCard = []), t.defaults) {
                    if (m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.nextRoundEndStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.nextRoundEndStamp = t.longs === String ? "0" : 0;
                    o.param = null, o.changed = !1, m.Long ? (n = new m.Long(0, 0, !1), o.leftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.leftSeconds = t.longs === String ? "0" : 0, o.canAuto = !1
                }
                if (null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && ("number" == typeof e.nextRoundEndStamp ? o.nextRoundEndStamp = t.longs === String ? String(e.nextRoundEndStamp) : e.nextRoundEndStamp : o.nextRoundEndStamp = t.longs === String ? m.Long.prototype.toString.call(e.nextRoundEndStamp) : t.longs === Number ? new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber() : e.nextRoundEndStamp), e.players && e.players.length) {
                    o.players = [];
                    for (var r = 0; r < e.players.length; ++r) o.players[r] = f.pokermaster_proto.GamePlayer.toObject(e.players[r], t)
                }
                if (null != e.param && e.hasOwnProperty("param") && (o.param = f.pokermaster_proto.RoomParam.toObject(e.param, t)), null != e.changed && e.hasOwnProperty("changed") && (o.changed = e.changed), e.lastResult && e.lastResult.length)
                    for (o.lastResult = [], r = 0; r < e.lastResult.length; ++r) o.lastResult[r] = t.enums === String ? void 0 === f.pokermaster_proto.BetZoneOption[e.lastResult[r]] ? e.lastResult[r] : f.pokermaster_proto.BetZoneOption[e.lastResult[r]] : e.lastResult[r];
                if (null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? o.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : o.leftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), null != e.canAuto && e.hasOwnProperty("canAuto") && (o.canAuto = e.canAuto), e.playerHoleCard && e.playerHoleCard.length)
                    for (o.playerHoleCard = [], r = 0; r < e.playerHoleCard.length; ++r) o.playerHoleCard[r] = f.pokermaster_proto.PlayerHoleCard.toObject(e.playerHoleCard[r], t);
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.DealNotify"
            }, e
        }(), l.BetReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.detail = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.detail && Object.hasOwnProperty.call(e, "detail") && f.pokermaster_proto.BetDetail.encode(e.detail, t.uint32(10).fork()).ldelim(), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.BetReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.detail = f.pokermaster_proto.BetDetail.decode(e, e.uint32());
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
                    var t = f.pokermaster_proto.BetDetail.verify(e.detail);
                    if (t) return "detail." + t
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.BetReq) return e;
                var t = new f.pokermaster_proto.BetReq;
                if (null != e.detail) {
                    if ("object" != typeof e.detail) throw TypeError(".pokermaster_proto.BetReq.detail: object expected");
                    t.detail = f.pokermaster_proto.BetDetail.fromObject(e.detail)
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.detail = null), null != e.detail && e.hasOwnProperty("detail") && (o.detail = f.pokermaster_proto.BetDetail.toObject(e.detail, t)), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.BetReq"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.BillInfo; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.BillInfo) return e;
                var t = new f.pokermaster_proto.BillInfo;
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
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.BillInfo"
            }, e
        }(), l.BetResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.CalmDownLeftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.CalmDownDeadLineTimeStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.bill = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.CalmDownLeftSeconds && Object.hasOwnProperty.call(e, "CalmDownLeftSeconds") && t.uint32(24).int64(e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && Object.hasOwnProperty.call(e, "CalmDownDeadLineTimeStamp") && t.uint32(32).int64(e.CalmDownDeadLineTimeStamp), null != e.bill && Object.hasOwnProperty.call(e, "bill") && f.pokermaster_proto.BillInfo.encode(e.bill, t.uint32(42).fork()).ldelim(), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.BetResp; e.pos < o;) {
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
                            n.bill = f.pokermaster_proto.BillInfo.decode(e, e.uint32());
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
                    case 51e3:
                    case 51001:
                    case 51002:
                    case 51003:
                    case 51004:
                    case 51005:
                    case 51006:
                    case 51007:
                    case 51008:
                    case 51009:
                    case 51010:
                    case 51011:
                    case 51012:
                    case 51013:
                    case 51014:
                    case 51015:
                    case 51016:
                    case 51017:
                    case 51018:
                    case 51019:
                    case 51020:
                    case 51021:
                    case 51022:
                    case 51023:
                    case 51027:
                    case 51024:
                    case 51025:
                    case 51026:
                    case 31117:
                    case 31118:
                    case 31119:
                    case 31120:
                }
                if (null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && !(m.isInteger(e.CalmDownLeftSeconds) || e.CalmDownLeftSeconds && m.isInteger(e.CalmDownLeftSeconds.low) && m.isInteger(e.CalmDownLeftSeconds.high))) return "CalmDownLeftSeconds: integer|Long expected";
                if (null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && !(m.isInteger(e.CalmDownDeadLineTimeStamp) || e.CalmDownDeadLineTimeStamp && m.isInteger(e.CalmDownDeadLineTimeStamp.low) && m.isInteger(e.CalmDownDeadLineTimeStamp.high))) return "CalmDownDeadLineTimeStamp: integer|Long expected";
                if (null != e.bill && e.hasOwnProperty("bill")) {
                    var t = f.pokermaster_proto.BillInfo.verify(e.bill);
                    if (t) return "bill." + t
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.BetResp) return e;
                var t = new f.pokermaster_proto.BetResp;
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
                    case 51e3:
                        t.code = 51e3;
                        break;
                    case "LOW_VERSION":
                    case 51001:
                        t.code = 51001;
                        break;
                    case "INVALID_TOKEN":
                    case 51002:
                        t.code = 51002;
                        break;
                    case "SERVER_BUSY":
                    case 51003:
                        t.code = 51003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 51004:
                        t.code = 51004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 51005:
                        t.code = 51005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 51006:
                        t.code = 51006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 51007:
                        t.code = 51007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 51008:
                        t.code = 51008;
                        break;
                    case "NO_BET":
                    case 51009:
                        t.code = 51009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 51010:
                        t.code = 51010;
                        break;
                    case "NO_MONEY":
                    case 51011:
                        t.code = 51011;
                        break;
                    case "BET_BAD_PARAM":
                    case 51012:
                        t.code = 51012;
                        break;
                    case "STOP_SERVICE":
                    case 51013:
                        t.code = 51013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 51014:
                        t.code = 51014;
                        break;
                    case "BET_TOO_SMALL":
                    case 51015:
                        t.code = 51015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 51016:
                        t.code = 51016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 51017:
                        t.code = 51017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 51018:
                        t.code = 51018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 51019:
                        t.code = 51019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 51020:
                        t.code = 51020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 51021:
                        t.code = 51021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 51022:
                        t.code = 51022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 51023:
                        t.code = 51023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 51027:
                        t.code = 51027;
                        break;
                    case "INNER_ERROR":
                    case 51024:
                        t.code = 51024;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 51025:
                        t.code = 51025;
                        break;
                    case "IN_CALM_DOWN":
                    case 51026:
                        t.code = 51026;
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
                        t.code = 31119;
                        break;
                    case "HAS_TICKET_BUY_IN":
                    case 31120:
                        t.code = 31120
                }
                if (null != e.CalmDownLeftSeconds && (m.Long ? (t.CalmDownLeftSeconds = m.Long.fromValue(e.CalmDownLeftSeconds)).unsigned = !1 : "string" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = parseInt(e.CalmDownLeftSeconds, 10) : "number" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = e.CalmDownLeftSeconds : "object" == typeof e.CalmDownLeftSeconds && (t.CalmDownLeftSeconds = new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber())), null != e.CalmDownDeadLineTimeStamp && (m.Long ? (t.CalmDownDeadLineTimeStamp = m.Long.fromValue(e.CalmDownDeadLineTimeStamp)).unsigned = !1 : "string" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = parseInt(e.CalmDownDeadLineTimeStamp, 10) : "number" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = e.CalmDownDeadLineTimeStamp : "object" == typeof e.CalmDownDeadLineTimeStamp && (t.CalmDownDeadLineTimeStamp = new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber())), null != e.bill) {
                    if ("object" != typeof e.bill) throw TypeError(".pokermaster_proto.BetResp.bill: object expected");
                    t.bill = f.pokermaster_proto.BillInfo.fromObject(e.bill)
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
                return null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.pokermaster_proto.ErrorCode[e.code] ? e.code : f.pokermaster_proto.ErrorCode[e.code] : e.code), null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && ("number" == typeof e.CalmDownLeftSeconds ? o.CalmDownLeftSeconds = t.longs === String ? String(e.CalmDownLeftSeconds) : e.CalmDownLeftSeconds : o.CalmDownLeftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownLeftSeconds) : t.longs === Number ? new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber() : e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && ("number" == typeof e.CalmDownDeadLineTimeStamp ? o.CalmDownDeadLineTimeStamp = t.longs === String ? String(e.CalmDownDeadLineTimeStamp) : e.CalmDownDeadLineTimeStamp : o.CalmDownDeadLineTimeStamp = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownDeadLineTimeStamp) : t.longs === Number ? new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber() : e.CalmDownDeadLineTimeStamp), null != e.bill && e.hasOwnProperty("bill") && (o.bill = f.pokermaster_proto.BillInfo.toObject(e.bill, t)), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.BetResp"
            }, e
        }(), l.BetNotify = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.uid = 0, e.prototype.detail = null, e.prototype.curCoin = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.selfBet = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.totalBet = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.curUsdt = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).uint32(e.uid), null != e.detail && Object.hasOwnProperty.call(e, "detail") && f.pokermaster_proto.BetDetail.encode(e.detail, t.uint32(18).fork()).ldelim(), null != e.curCoin && Object.hasOwnProperty.call(e, "curCoin") && t.uint32(24).uint64(e.curCoin), null != e.selfBet && Object.hasOwnProperty.call(e, "selfBet") && t.uint32(32).uint64(e.selfBet), null != e.totalBet && Object.hasOwnProperty.call(e, "totalBet") && t.uint32(40).uint64(e.totalBet), null != e.curUsdt && Object.hasOwnProperty.call(e, "curUsdt") && t.uint32(48).uint64(e.curUsdt), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.BetNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.uid = e.uint32();
                            break;
                        case 2:
                            n.detail = f.pokermaster_proto.BetDetail.decode(e, e.uint32());
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
                    var t = f.pokermaster_proto.BetDetail.verify(e.detail);
                    if (t) return "detail." + t
                }
                return null != e.curCoin && e.hasOwnProperty("curCoin") && !(m.isInteger(e.curCoin) || e.curCoin && m.isInteger(e.curCoin.low) && m.isInteger(e.curCoin.high)) ? "curCoin: integer|Long expected" : null != e.selfBet && e.hasOwnProperty("selfBet") && !(m.isInteger(e.selfBet) || e.selfBet && m.isInteger(e.selfBet.low) && m.isInteger(e.selfBet.high)) ? "selfBet: integer|Long expected" : null != e.totalBet && e.hasOwnProperty("totalBet") && !(m.isInteger(e.totalBet) || e.totalBet && m.isInteger(e.totalBet.low) && m.isInteger(e.totalBet.high)) ? "totalBet: integer|Long expected" : null != e.curUsdt && e.hasOwnProperty("curUsdt") && !(m.isInteger(e.curUsdt) || e.curUsdt && m.isInteger(e.curUsdt.low) && m.isInteger(e.curUsdt.high)) ? "curUsdt: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.BetNotify) return e;
                var t = new f.pokermaster_proto.BetNotify;
                if (null != e.uid && (t.uid = e.uid >>> 0), null != e.detail) {
                    if ("object" != typeof e.detail) throw TypeError(".pokermaster_proto.BetNotify.detail: object expected");
                    t.detail = f.pokermaster_proto.BetDetail.fromObject(e.detail)
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
                return null != e.uid && e.hasOwnProperty("uid") && (o.uid = e.uid), null != e.detail && e.hasOwnProperty("detail") && (o.detail = f.pokermaster_proto.BetDetail.toObject(e.detail, t)), null != e.curCoin && e.hasOwnProperty("curCoin") && ("number" == typeof e.curCoin ? o.curCoin = t.longs === String ? String(e.curCoin) : e.curCoin : o.curCoin = t.longs === String ? m.Long.prototype.toString.call(e.curCoin) : t.longs === Number ? new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber(!0) : e.curCoin), null != e.selfBet && e.hasOwnProperty("selfBet") && ("number" == typeof e.selfBet ? o.selfBet = t.longs === String ? String(e.selfBet) : e.selfBet : o.selfBet = t.longs === String ? m.Long.prototype.toString.call(e.selfBet) : t.longs === Number ? new m.LongBits(e.selfBet.low >>> 0, e.selfBet.high >>> 0).toNumber(!0) : e.selfBet), null != e.totalBet && e.hasOwnProperty("totalBet") && ("number" == typeof e.totalBet ? o.totalBet = t.longs === String ? String(e.totalBet) : e.totalBet : o.totalBet = t.longs === String ? m.Long.prototype.toString.call(e.totalBet) : t.longs === Number ? new m.LongBits(e.totalBet.low >>> 0, e.totalBet.high >>> 0).toNumber(!0) : e.totalBet), null != e.curUsdt && e.hasOwnProperty("curUsdt") && ("number" == typeof e.curUsdt ? o.curUsdt = t.longs === String ? String(e.curUsdt) : e.curUsdt : o.curUsdt = t.longs === String ? m.Long.prototype.toString.call(e.curUsdt) : t.longs === Number ? new m.LongBits(e.curUsdt.low >>> 0, e.curUsdt.high >>> 0).toNumber(!0) : e.curUsdt), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.BetNotify"
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
                    for (var o = 0; o < e.notify.length; ++o) f.pokermaster_proto.BetNotify.encode(e.notify[o], t.uint32(10).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.MergeAutoBetNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.notify && n.notify.length || (n.notify = []), n.notify.push(f.pokermaster_proto.BetNotify.decode(e, e.uint32()));
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
                        var o = f.pokermaster_proto.BetNotify.verify(e.notify[t]);
                        if (o) return "notify." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.MergeAutoBetNotify) return e;
                var t = new f.pokermaster_proto.MergeAutoBetNotify;
                if (e.notify) {
                    if (!Array.isArray(e.notify)) throw TypeError(".pokermaster_proto.MergeAutoBetNotify.notify: array expected");
                    t.notify = [];
                    for (var o = 0; o < e.notify.length; ++o) {
                        if ("object" != typeof e.notify[o]) throw TypeError(".pokermaster_proto.MergeAutoBetNotify.notify: object expected");
                        t.notify[o] = f.pokermaster_proto.BetNotify.fromObject(e.notify[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.notify = []), e.notify && e.notify.length) {
                    o.notify = [];
                    for (var n = 0; n < e.notify.length; ++n) o.notify[n] = f.pokermaster_proto.BetNotify.toObject(e.notify[n], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.MergeAutoBetNotify"
            }, e
        }(), l.BetDetail = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.option = 0, e.prototype.betAmount = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.auto = !1, e.prototype.is_shot = !1, e.prototype.win_amt = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.odds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.betGameCoin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(8).int32(e.option), null != e.betAmount && Object.hasOwnProperty.call(e, "betAmount") && t.uint32(16).uint64(e.betAmount), null != e.auto && Object.hasOwnProperty.call(e, "auto") && t.uint32(24).bool(e.auto), null != e.is_shot && Object.hasOwnProperty.call(e, "is_shot") && t.uint32(32).bool(e.is_shot), null != e.win_amt && Object.hasOwnProperty.call(e, "win_amt") && t.uint32(40).int64(e.win_amt), null != e.odds && Object.hasOwnProperty.call(e, "odds") && t.uint32(48).int64(e.odds), null != e.betGameCoin && Object.hasOwnProperty.call(e, "betGameCoin") && t.uint32(56).int64(e.betGameCoin), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.BetDetail; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.option = e.int32();
                            break;
                        case 2:
                            n.betAmount = e.uint64();
                            break;
                        case 3:
                            n.auto = e.bool();
                            break;
                        case 4:
                            n.is_shot = e.bool();
                            break;
                        case 5:
                            n.win_amt = e.int64();
                            break;
                        case 6:
                            n.odds = e.int64();
                            break;
                        case 7:
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
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 199:
                    case 300:
                    case 301:
                    case 302:
                    case 303:
                    case 304:
                    case 305:
                    case 399:
                }
                return null != e.betAmount && e.hasOwnProperty("betAmount") && !(m.isInteger(e.betAmount) || e.betAmount && m.isInteger(e.betAmount.low) && m.isInteger(e.betAmount.high)) ? "betAmount: integer|Long expected" : null != e.auto && e.hasOwnProperty("auto") && "boolean" != typeof e.auto ? "auto: boolean expected" : null != e.is_shot && e.hasOwnProperty("is_shot") && "boolean" != typeof e.is_shot ? "is_shot: boolean expected" : null != e.win_amt && e.hasOwnProperty("win_amt") && !(m.isInteger(e.win_amt) || e.win_amt && m.isInteger(e.win_amt.low) && m.isInteger(e.win_amt.high)) ? "win_amt: integer|Long expected" : null != e.odds && e.hasOwnProperty("odds") && !(m.isInteger(e.odds) || e.odds && m.isInteger(e.odds.low) && m.isInteger(e.odds.high)) ? "odds: integer|Long expected" : null != e.betGameCoin && e.hasOwnProperty("betGameCoin") && !(m.isInteger(e.betGameCoin) || e.betGameCoin && m.isInteger(e.betGameCoin.low) && m.isInteger(e.betGameCoin.high)) ? "betGameCoin: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.BetDetail) return e;
                var t = new f.pokermaster_proto.BetDetail;
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
                    case "FISHER_WIN":
                    case 101:
                        t.option = 101;
                        break;
                    case "SHARK_WIN":
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
                    case "FIVE_SAN_SHUN_TONG":
                    case 303:
                        t.option = 303;
                        break;
                    case "FIVE_GOURD":
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
                return null != e.betAmount && (m.Long ? (t.betAmount = m.Long.fromValue(e.betAmount)).unsigned = !0 : "string" == typeof e.betAmount ? t.betAmount = parseInt(e.betAmount, 10) : "number" == typeof e.betAmount ? t.betAmount = e.betAmount : "object" == typeof e.betAmount && (t.betAmount = new m.LongBits(e.betAmount.low >>> 0, e.betAmount.high >>> 0).toNumber(!0))), null != e.auto && (t.auto = Boolean(e.auto)), null != e.is_shot && (t.is_shot = Boolean(e.is_shot)), null != e.win_amt && (m.Long ? (t.win_amt = m.Long.fromValue(e.win_amt)).unsigned = !1 : "string" == typeof e.win_amt ? t.win_amt = parseInt(e.win_amt, 10) : "number" == typeof e.win_amt ? t.win_amt = e.win_amt : "object" == typeof e.win_amt && (t.win_amt = new m.LongBits(e.win_amt.low >>> 0, e.win_amt.high >>> 0).toNumber())), null != e.odds && (m.Long ? (t.odds = m.Long.fromValue(e.odds)).unsigned = !1 : "string" == typeof e.odds ? t.odds = parseInt(e.odds, 10) : "number" == typeof e.odds ? t.odds = e.odds : "object" == typeof e.odds && (t.odds = new m.LongBits(e.odds.low >>> 0, e.odds.high >>> 0).toNumber())), null != e.betGameCoin && (m.Long ? (t.betGameCoin = m.Long.fromValue(e.betGameCoin)).unsigned = !1 : "string" == typeof e.betGameCoin ? t.betGameCoin = parseInt(e.betGameCoin, 10) : "number" == typeof e.betGameCoin ? t.betGameCoin = e.betGameCoin : "object" == typeof e.betGameCoin && (t.betGameCoin = new m.LongBits(e.betGameCoin.low >>> 0, e.betGameCoin.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.betAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.betAmount = t.longs === String ? "0" : 0;
                    o.auto = !1, o.is_shot = !1, m.Long ? (n = new m.Long(0, 0, !1), o.win_amt = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.win_amt = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !1), o.odds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.odds = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !1), o.betGameCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.betGameCoin = t.longs === String ? "0" : 0
                }
                return null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.pokermaster_proto.BetZoneOption[e.option] ? e.option : f.pokermaster_proto.BetZoneOption[e.option] : e.option), null != e.betAmount && e.hasOwnProperty("betAmount") && ("number" == typeof e.betAmount ? o.betAmount = t.longs === String ? String(e.betAmount) : e.betAmount : o.betAmount = t.longs === String ? m.Long.prototype.toString.call(e.betAmount) : t.longs === Number ? new m.LongBits(e.betAmount.low >>> 0, e.betAmount.high >>> 0).toNumber(!0) : e.betAmount), null != e.auto && e.hasOwnProperty("auto") && (o.auto = e.auto), null != e.is_shot && e.hasOwnProperty("is_shot") && (o.is_shot = e.is_shot), null != e.win_amt && e.hasOwnProperty("win_amt") && ("number" == typeof e.win_amt ? o.win_amt = t.longs === String ? String(e.win_amt) : e.win_amt : o.win_amt = t.longs === String ? m.Long.prototype.toString.call(e.win_amt) : t.longs === Number ? new m.LongBits(e.win_amt.low >>> 0, e.win_amt.high >>> 0).toNumber() : e.win_amt), null != e.odds && e.hasOwnProperty("odds") && ("number" == typeof e.odds ? o.odds = t.longs === String ? String(e.odds) : e.odds : o.odds = t.longs === String ? m.Long.prototype.toString.call(e.odds) : t.longs === Number ? new m.LongBits(e.odds.low >>> 0, e.odds.high >>> 0).toNumber() : e.odds), null != e.betGameCoin && e.hasOwnProperty("betGameCoin") && ("number" == typeof e.betGameCoin ? o.betGameCoin = t.longs === String ? String(e.betGameCoin) : e.betGameCoin : o.betGameCoin = t.longs === String ? m.Long.prototype.toString.call(e.betGameCoin) : t.longs === Number ? new m.LongBits(e.betGameCoin.low >>> 0, e.betGameCoin.high >>> 0).toNumber() : e.betGameCoin), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.BetDetail"
            }, e
        }(), l.GameRoundEndNotify = function() {
            function e(e) {
                if (this.playerSettle = [], this.optionResult = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.playerSettle = m.emptyArray, e.prototype.roundResult = null, e.prototype.nextRoundEndStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.stopWorld = 0, e.prototype.leftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.otherPlayers = null, e.prototype.openRoads = !1, e.prototype.optionResult = m.emptyArray, e.prototype.fortune = null, e.prototype.idle_roomid = 0, e.prototype.change_points = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.playerSettle && e.playerSettle.length)
                    for (var o = 0; o < e.playerSettle.length; ++o) f.pokermaster_proto.PlayerSettle.encode(e.playerSettle[o], t.uint32(10).fork()).ldelim();
                if (null != e.roundResult && Object.hasOwnProperty.call(e, "roundResult") && f.pokermaster_proto.RoundResult.encode(e.roundResult, t.uint32(18).fork()).ldelim(), null != e.nextRoundEndStamp && Object.hasOwnProperty.call(e, "nextRoundEndStamp") && t.uint32(24).int64(e.nextRoundEndStamp), null != e.stopWorld && Object.hasOwnProperty.call(e, "stopWorld") && t.uint32(32).int32(e.stopWorld), null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(40).int64(e.leftSeconds), null != e.otherPlayers && Object.hasOwnProperty.call(e, "otherPlayers") && f.pokermaster_proto.PlayerSettle.encode(e.otherPlayers, t.uint32(50).fork()).ldelim(), null != e.openRoads && Object.hasOwnProperty.call(e, "openRoads") && t.uint32(56).bool(e.openRoads), null != e.optionResult && e.optionResult.length)
                    for (o = 0; o < e.optionResult.length; ++o) f.pokermaster_proto.OptionResult.encode(e.optionResult[o], t.uint32(66).fork()).ldelim();
                return null != e.fortune && Object.hasOwnProperty.call(e, "fortune") && f.pokermaster_proto.PlayerFortune.encode(e.fortune, t.uint32(74).fork()).ldelim(), null != e.idle_roomid && Object.hasOwnProperty.call(e, "idle_roomid") && t.uint32(80).uint32(e.idle_roomid), null != e.change_points && Object.hasOwnProperty.call(e, "change_points") && t.uint32(88).int64(e.change_points), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.GameRoundEndNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.playerSettle && n.playerSettle.length || (n.playerSettle = []), n.playerSettle.push(f.pokermaster_proto.PlayerSettle.decode(e, e.uint32()));
                            break;
                        case 2:
                            n.roundResult = f.pokermaster_proto.RoundResult.decode(e, e.uint32());
                            break;
                        case 3:
                            n.nextRoundEndStamp = e.int64();
                            break;
                        case 4:
                            n.stopWorld = e.int32();
                            break;
                        case 5:
                            n.leftSeconds = e.int64();
                            break;
                        case 6:
                            n.otherPlayers = f.pokermaster_proto.PlayerSettle.decode(e, e.uint32());
                            break;
                        case 7:
                            n.openRoads = e.bool();
                            break;
                        case 8:
                            n.optionResult && n.optionResult.length || (n.optionResult = []), n.optionResult.push(f.pokermaster_proto.OptionResult.decode(e, e.uint32()));
                            break;
                        case 9:
                            n.fortune = f.pokermaster_proto.PlayerFortune.decode(e, e.uint32());
                            break;
                        case 10:
                            n.idle_roomid = e.uint32();
                            break;
                        case 11:
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
                if (null != e.playerSettle && e.hasOwnProperty("playerSettle")) {
                    if (!Array.isArray(e.playerSettle)) return "playerSettle: array expected";
                    for (var t = 0; t < e.playerSettle.length; ++t)
                        if (o = f.pokermaster_proto.PlayerSettle.verify(e.playerSettle[t])) return "playerSettle." + o
                }
                if (null != e.roundResult && e.hasOwnProperty("roundResult") && (o = f.pokermaster_proto.RoundResult.verify(e.roundResult))) return "roundResult." + o;
                if (null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && !(m.isInteger(e.nextRoundEndStamp) || e.nextRoundEndStamp && m.isInteger(e.nextRoundEndStamp.low) && m.isInteger(e.nextRoundEndStamp.high))) return "nextRoundEndStamp: integer|Long expected";
                if (null != e.stopWorld && e.hasOwnProperty("stopWorld") && !m.isInteger(e.stopWorld)) return "stopWorld: integer expected";
                if (null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(m.isInteger(e.leftSeconds) || e.leftSeconds && m.isInteger(e.leftSeconds.low) && m.isInteger(e.leftSeconds.high))) return "leftSeconds: integer|Long expected";
                if (null != e.otherPlayers && e.hasOwnProperty("otherPlayers") && (o = f.pokermaster_proto.PlayerSettle.verify(e.otherPlayers))) return "otherPlayers." + o;
                if (null != e.openRoads && e.hasOwnProperty("openRoads") && "boolean" != typeof e.openRoads) return "openRoads: boolean expected";
                if (null != e.optionResult && e.hasOwnProperty("optionResult")) {
                    if (!Array.isArray(e.optionResult)) return "optionResult: array expected";
                    for (t = 0; t < e.optionResult.length; ++t) {
                        var o;
                        if (o = f.pokermaster_proto.OptionResult.verify(e.optionResult[t])) return "optionResult." + o
                    }
                }
                return null != e.fortune && e.hasOwnProperty("fortune") && (o = f.pokermaster_proto.PlayerFortune.verify(e.fortune)) ? "fortune." + o : null != e.idle_roomid && e.hasOwnProperty("idle_roomid") && !m.isInteger(e.idle_roomid) ? "idle_roomid: integer expected" : null != e.change_points && e.hasOwnProperty("change_points") && !(m.isInteger(e.change_points) || e.change_points && m.isInteger(e.change_points.low) && m.isInteger(e.change_points.high)) ? "change_points: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.GameRoundEndNotify) return e;
                var t = new f.pokermaster_proto.GameRoundEndNotify;
                if (e.playerSettle) {
                    if (!Array.isArray(e.playerSettle)) throw TypeError(".pokermaster_proto.GameRoundEndNotify.playerSettle: array expected");
                    t.playerSettle = [];
                    for (var o = 0; o < e.playerSettle.length; ++o) {
                        if ("object" != typeof e.playerSettle[o]) throw TypeError(".pokermaster_proto.GameRoundEndNotify.playerSettle: object expected");
                        t.playerSettle[o] = f.pokermaster_proto.PlayerSettle.fromObject(e.playerSettle[o])
                    }
                }
                if (null != e.roundResult) {
                    if ("object" != typeof e.roundResult) throw TypeError(".pokermaster_proto.GameRoundEndNotify.roundResult: object expected");
                    t.roundResult = f.pokermaster_proto.RoundResult.fromObject(e.roundResult)
                }
                if (null != e.nextRoundEndStamp && (m.Long ? (t.nextRoundEndStamp = m.Long.fromValue(e.nextRoundEndStamp)).unsigned = !1 : "string" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = parseInt(e.nextRoundEndStamp, 10) : "number" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = e.nextRoundEndStamp : "object" == typeof e.nextRoundEndStamp && (t.nextRoundEndStamp = new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber())), null != e.stopWorld && (t.stopWorld = 0 | e.stopWorld), null != e.leftSeconds && (m.Long ? (t.leftSeconds = m.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), null != e.otherPlayers) {
                    if ("object" != typeof e.otherPlayers) throw TypeError(".pokermaster_proto.GameRoundEndNotify.otherPlayers: object expected");
                    t.otherPlayers = f.pokermaster_proto.PlayerSettle.fromObject(e.otherPlayers)
                }
                if (null != e.openRoads && (t.openRoads = Boolean(e.openRoads)), e.optionResult) {
                    if (!Array.isArray(e.optionResult)) throw TypeError(".pokermaster_proto.GameRoundEndNotify.optionResult: array expected");
                    for (t.optionResult = [], o = 0; o < e.optionResult.length; ++o) {
                        if ("object" != typeof e.optionResult[o]) throw TypeError(".pokermaster_proto.GameRoundEndNotify.optionResult: object expected");
                        t.optionResult[o] = f.pokermaster_proto.OptionResult.fromObject(e.optionResult[o])
                    }
                }
                if (null != e.fortune) {
                    if ("object" != typeof e.fortune) throw TypeError(".pokermaster_proto.GameRoundEndNotify.fortune: object expected");
                    t.fortune = f.pokermaster_proto.PlayerFortune.fromObject(e.fortune)
                }
                return null != e.idle_roomid && (t.idle_roomid = e.idle_roomid >>> 0), null != e.change_points && (m.Long ? (t.change_points = m.Long.fromValue(e.change_points)).unsigned = !1 : "string" == typeof e.change_points ? t.change_points = parseInt(e.change_points, 10) : "number" == typeof e.change_points ? t.change_points = e.change_points : "object" == typeof e.change_points && (t.change_points = new m.LongBits(e.change_points.low >>> 0, e.change_points.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.playerSettle = [], o.optionResult = []), t.defaults) {
                    if (o.roundResult = null, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.nextRoundEndStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.nextRoundEndStamp = t.longs === String ? "0" : 0;
                    o.stopWorld = 0, m.Long ? (n = new m.Long(0, 0, !1), o.leftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.leftSeconds = t.longs === String ? "0" : 0, o.otherPlayers = null, o.openRoads = !1, o.fortune = null, o.idle_roomid = 0, m.Long ? (n = new m.Long(0, 0, !1), o.change_points = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.change_points = t.longs === String ? "0" : 0
                }
                if (e.playerSettle && e.playerSettle.length) {
                    o.playerSettle = [];
                    for (var r = 0; r < e.playerSettle.length; ++r) o.playerSettle[r] = f.pokermaster_proto.PlayerSettle.toObject(e.playerSettle[r], t)
                }
                if (null != e.roundResult && e.hasOwnProperty("roundResult") && (o.roundResult = f.pokermaster_proto.RoundResult.toObject(e.roundResult, t)), null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && ("number" == typeof e.nextRoundEndStamp ? o.nextRoundEndStamp = t.longs === String ? String(e.nextRoundEndStamp) : e.nextRoundEndStamp : o.nextRoundEndStamp = t.longs === String ? m.Long.prototype.toString.call(e.nextRoundEndStamp) : t.longs === Number ? new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber() : e.nextRoundEndStamp), null != e.stopWorld && e.hasOwnProperty("stopWorld") && (o.stopWorld = e.stopWorld), null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? o.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : o.leftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), null != e.otherPlayers && e.hasOwnProperty("otherPlayers") && (o.otherPlayers = f.pokermaster_proto.PlayerSettle.toObject(e.otherPlayers, t)), null != e.openRoads && e.hasOwnProperty("openRoads") && (o.openRoads = e.openRoads), e.optionResult && e.optionResult.length)
                    for (o.optionResult = [], r = 0; r < e.optionResult.length; ++r) o.optionResult[r] = f.pokermaster_proto.OptionResult.toObject(e.optionResult[r], t);
                return null != e.fortune && e.hasOwnProperty("fortune") && (o.fortune = f.pokermaster_proto.PlayerFortune.toObject(e.fortune, t)), null != e.idle_roomid && e.hasOwnProperty("idle_roomid") && (o.idle_roomid = e.idle_roomid), null != e.change_points && e.hasOwnProperty("change_points") && ("number" == typeof e.change_points ? o.change_points = t.longs === String ? String(e.change_points) : e.change_points : o.change_points = t.longs === String ? m.Long.prototype.toString.call(e.change_points) : t.longs === Number ? new m.LongBits(e.change_points.low >>> 0, e.change_points.high >>> 0).toNumber() : e.change_points), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.GameRoundEndNotify"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.OptionResult; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.OptionResult) return e;
                var t = new f.pokermaster_proto.OptionResult;
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
                    case "FISHER_WIN":
                    case 101:
                        t.option = 101;
                        break;
                    case "SHARK_WIN":
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
                    case "FIVE_SAN_SHUN_TONG":
                    case 303:
                        t.option = 303;
                        break;
                    case "FIVE_GOURD":
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
                return t.defaults && (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, o.result = 0, o.loseHand = 0), null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.pokermaster_proto.BetZoneOption[e.option] ? e.option : f.pokermaster_proto.BetZoneOption[e.option] : e.option), null != e.result && e.hasOwnProperty("result") && (o.result = e.result), null != e.loseHand && e.hasOwnProperty("loseHand") && (o.loseHand = e.loseHand), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.OptionResult"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.OptionResults; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.OptionResults) return e;
                var t = new f.pokermaster_proto.OptionResults;
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
                    case "FISHER_WIN":
                    case 101:
                        t.option = 101;
                        break;
                    case "SHARK_WIN":
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
                    case "FIVE_SAN_SHUN_TONG":
                    case 303:
                        t.option = 303;
                        break;
                    case "FIVE_GOURD":
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
                    if (!Array.isArray(e.results)) throw TypeError(".pokermaster_proto.OptionResults.results: array expected");
                    t.results = [];
                    for (var o = 0; o < e.results.length; ++o) t.results[o] = 0 | e.results[o]
                }
                return null != e.loseHand && (t.loseHand = 0 | e.loseHand), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.results = []), t.defaults && (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, o.loseHand = 0), null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.pokermaster_proto.BetZoneOption[e.option] ? e.option : f.pokermaster_proto.BetZoneOption[e.option] : e.option), e.results && e.results.length) {
                    o.results = [];
                    for (var n = 0; n < e.results.length; ++n) o.results[n] = e.results[n]
                }
                return null != e.loseHand && e.hasOwnProperty("loseHand") && (o.loseHand = e.loseHand), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.OptionResults"
            }, e
        }(), l.HandLevel = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "HAND_DUMMY"] = 0, t[e[1] = "HAND_NONE"] = 1, t[e[2] = "HAND_DUI"] = 2, t[e[3] = "HAND_DUI_TWO"] = 3, t[e[4] = "HAND_SANJO"] = 4, t[e[5] = "HAND_SHUN"] = 5, t[e[6] = "HAND_TONG"] = 6, t[e[7] = "HAND_HULU"] = 7, t[e[8] = "HAND_SIJO"] = 8, t[e[9] = "HAND_TONG_SHUN"] = 9, t[e[10] = "HAND_KING"] = 10, t
        }(), l.RoundResult = function() {
            function e(e) {
                if (this.Cards = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.winOp = 0, e.prototype.fisherLevel = 0, e.prototype.sharkLevel = 0, e.prototype.Cards = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.winOp && Object.hasOwnProperty.call(e, "winOp") && t.uint32(8).int32(e.winOp), null != e.fisherLevel && Object.hasOwnProperty.call(e, "fisherLevel") && t.uint32(16).int32(e.fisherLevel), null != e.sharkLevel && Object.hasOwnProperty.call(e, "sharkLevel") && t.uint32(24).int32(e.sharkLevel), null != e.Cards && e.Cards.length)
                    for (var o = 0; o < e.Cards.length; ++o) f.pokermaster_proto.CardItem.encode(e.Cards[o], t.uint32(34).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.RoundResult; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.winOp = e.int32();
                            break;
                        case 2:
                            n.fisherLevel = e.int32();
                            break;
                        case 3:
                            n.sharkLevel = e.int32();
                            break;
                        case 4:
                            n.Cards && n.Cards.length || (n.Cards = []), n.Cards.push(f.pokermaster_proto.CardItem.decode(e, e.uint32()));
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
                if (null != e.winOp && e.hasOwnProperty("winOp")) switch (e.winOp) {
                    default:
                        return "winOp: enum value expected";
                    case 0:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 199:
                    case 300:
                    case 301:
                    case 302:
                    case 303:
                    case 304:
                    case 305:
                    case 399:
                }
                if (null != e.fisherLevel && e.hasOwnProperty("fisherLevel") && !m.isInteger(e.fisherLevel)) return "fisherLevel: integer expected";
                if (null != e.sharkLevel && e.hasOwnProperty("sharkLevel") && !m.isInteger(e.sharkLevel)) return "sharkLevel: integer expected";
                if (null != e.Cards && e.hasOwnProperty("Cards")) {
                    if (!Array.isArray(e.Cards)) return "Cards: array expected";
                    for (var t = 0; t < e.Cards.length; ++t) {
                        var o = f.pokermaster_proto.CardItem.verify(e.Cards[t]);
                        if (o) return "Cards." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.RoundResult) return e;
                var t = new f.pokermaster_proto.RoundResult;
                switch (e.winOp) {
                    default:
                        if ("number" == typeof e.winOp) {
                            t.winOp = e.winOp;
                            break
                        }
                        break;
                    case "BetZoneOption_DUMMY":
                    case 0:
                        t.winOp = 0;
                        break;
                    case "WIN_BEGIN":
                    case 100:
                        t.winOp = 100;
                        break;
                    case "FISHER_WIN":
                    case 101:
                        t.winOp = 101;
                        break;
                    case "SHARK_WIN":
                    case 102:
                        t.winOp = 102;
                        break;
                    case "EQUAL":
                    case 103:
                        t.winOp = 103;
                        break;
                    case "WIN_END":
                    case 199:
                        t.winOp = 199;
                        break;
                    case "FIVE_BEGIN":
                    case 300:
                        t.winOp = 300;
                        break;
                    case "FIVE_NONE_1DUI":
                    case 301:
                        t.winOp = 301;
                        break;
                    case "FIVE_2DUI":
                    case 302:
                        t.winOp = 302;
                        break;
                    case "FIVE_SAN_SHUN_TONG":
                    case 303:
                        t.winOp = 303;
                        break;
                    case "FIVE_GOURD":
                    case 304:
                        t.winOp = 304;
                        break;
                    case "FIVE_KING_TONG_HUA_SHUN_4":
                    case 305:
                        t.winOp = 305;
                        break;
                    case "FIVE_END":
                    case 399:
                        t.winOp = 399
                }
                if (null != e.fisherLevel && (t.fisherLevel = 0 | e.fisherLevel), null != e.sharkLevel && (t.sharkLevel = 0 | e.sharkLevel), e.Cards) {
                    if (!Array.isArray(e.Cards)) throw TypeError(".pokermaster_proto.RoundResult.Cards: array expected");
                    t.Cards = [];
                    for (var o = 0; o < e.Cards.length; ++o) {
                        if ("object" != typeof e.Cards[o]) throw TypeError(".pokermaster_proto.RoundResult.Cards: object expected");
                        t.Cards[o] = f.pokermaster_proto.CardItem.fromObject(e.Cards[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.Cards = []), t.defaults && (o.winOp = t.enums === String ? "BetZoneOption_DUMMY" : 0, o.fisherLevel = 0, o.sharkLevel = 0), null != e.winOp && e.hasOwnProperty("winOp") && (o.winOp = t.enums === String ? void 0 === f.pokermaster_proto.BetZoneOption[e.winOp] ? e.winOp : f.pokermaster_proto.BetZoneOption[e.winOp] : e.winOp), null != e.fisherLevel && e.hasOwnProperty("fisherLevel") && (o.fisherLevel = e.fisherLevel), null != e.sharkLevel && e.hasOwnProperty("sharkLevel") && (o.sharkLevel = e.sharkLevel), e.Cards && e.Cards.length) {
                    o.Cards = [];
                    for (var n = 0; n < e.Cards.length; ++n) o.Cards[n] = f.pokermaster_proto.CardItem.toObject(e.Cards[n], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.RoundResult"
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
                    for (var o = 0; o < e.settle.length; ++o) f.pokermaster_proto.ZoneSettleDetail.encode(e.settle[o], t.uint32(18).fork()).ldelim();
                return null != e.totalWinAmount && Object.hasOwnProperty.call(e, "totalWinAmount") && t.uint32(24).int64(e.totalWinAmount), null != e.curCoin && Object.hasOwnProperty.call(e, "curCoin") && t.uint32(32).int64(e.curCoin), null != e.keepWinCount && Object.hasOwnProperty.call(e, "keepWinCount") && t.uint32(40).int32(e.keepWinCount), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.PlayerSettle; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.uid = e.uint32();
                            break;
                        case 2:
                            n.settle && n.settle.length || (n.settle = []), n.settle.push(f.pokermaster_proto.ZoneSettleDetail.decode(e, e.uint32()));
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
                        var o = f.pokermaster_proto.ZoneSettleDetail.verify(e.settle[t]);
                        if (o) return "settle." + o
                    }
                }
                return null != e.totalWinAmount && e.hasOwnProperty("totalWinAmount") && !(m.isInteger(e.totalWinAmount) || e.totalWinAmount && m.isInteger(e.totalWinAmount.low) && m.isInteger(e.totalWinAmount.high)) ? "totalWinAmount: integer|Long expected" : null != e.curCoin && e.hasOwnProperty("curCoin") && !(m.isInteger(e.curCoin) || e.curCoin && m.isInteger(e.curCoin.low) && m.isInteger(e.curCoin.high)) ? "curCoin: integer|Long expected" : null != e.keepWinCount && e.hasOwnProperty("keepWinCount") && !m.isInteger(e.keepWinCount) ? "keepWinCount: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.PlayerSettle) return e;
                var t = new f.pokermaster_proto.PlayerSettle;
                if (null != e.uid && (t.uid = e.uid >>> 0), e.settle) {
                    if (!Array.isArray(e.settle)) throw TypeError(".pokermaster_proto.PlayerSettle.settle: array expected");
                    t.settle = [];
                    for (var o = 0; o < e.settle.length; ++o) {
                        if ("object" != typeof e.settle[o]) throw TypeError(".pokermaster_proto.PlayerSettle.settle: object expected");
                        t.settle[o] = f.pokermaster_proto.ZoneSettleDetail.fromObject(e.settle[o])
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
                    for (var r = 0; r < e.settle.length; ++r) o.settle[r] = f.pokermaster_proto.ZoneSettleDetail.toObject(e.settle[r], t)
                }
                return null != e.totalWinAmount && e.hasOwnProperty("totalWinAmount") && ("number" == typeof e.totalWinAmount ? o.totalWinAmount = t.longs === String ? String(e.totalWinAmount) : e.totalWinAmount : o.totalWinAmount = t.longs === String ? m.Long.prototype.toString.call(e.totalWinAmount) : t.longs === Number ? new m.LongBits(e.totalWinAmount.low >>> 0, e.totalWinAmount.high >>> 0).toNumber() : e.totalWinAmount), null != e.curCoin && e.hasOwnProperty("curCoin") && ("number" == typeof e.curCoin ? o.curCoin = t.longs === String ? String(e.curCoin) : e.curCoin : o.curCoin = t.longs === String ? m.Long.prototype.toString.call(e.curCoin) : t.longs === Number ? new m.LongBits(e.curCoin.low >>> 0, e.curCoin.high >>> 0).toNumber() : e.curCoin), null != e.keepWinCount && e.hasOwnProperty("keepWinCount") && (o.keepWinCount = e.keepWinCount), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.PlayerSettle"
            }, e
        }(), l.ZoneSettleDetail = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.option = 0, e.prototype.betAmount = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.winAmount = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.isAuto = 0, e.prototype.betGameCoin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(8).int32(e.option), null != e.betAmount && Object.hasOwnProperty.call(e, "betAmount") && t.uint32(16).uint64(e.betAmount), null != e.winAmount && Object.hasOwnProperty.call(e, "winAmount") && t.uint32(24).int64(e.winAmount), null != e.isAuto && Object.hasOwnProperty.call(e, "isAuto") && t.uint32(32).int32(e.isAuto), null != e.betGameCoin && Object.hasOwnProperty.call(e, "betGameCoin") && t.uint32(40).int64(e.betGameCoin), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.ZoneSettleDetail; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.option = e.int32();
                            break;
                        case 2:
                            n.betAmount = e.uint64();
                            break;
                        case 3:
                            n.winAmount = e.int64();
                            break;
                        case 4:
                            n.isAuto = e.int32();
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
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 199:
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
                if (e instanceof f.pokermaster_proto.ZoneSettleDetail) return e;
                var t = new f.pokermaster_proto.ZoneSettleDetail;
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
                    case "FISHER_WIN":
                    case 101:
                        t.option = 101;
                        break;
                    case "SHARK_WIN":
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
                    case "FIVE_SAN_SHUN_TONG":
                    case 303:
                        t.option = 303;
                        break;
                    case "FIVE_GOURD":
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
                    if (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.betAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.betAmount = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !1), o.winAmount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.winAmount = t.longs === String ? "0" : 0, o.isAuto = 0, m.Long ? (n = new m.Long(0, 0, !1), o.betGameCoin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.betGameCoin = t.longs === String ? "0" : 0
                }
                return null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.pokermaster_proto.BetZoneOption[e.option] ? e.option : f.pokermaster_proto.BetZoneOption[e.option] : e.option), null != e.betAmount && e.hasOwnProperty("betAmount") && ("number" == typeof e.betAmount ? o.betAmount = t.longs === String ? String(e.betAmount) : e.betAmount : o.betAmount = t.longs === String ? m.Long.prototype.toString.call(e.betAmount) : t.longs === Number ? new m.LongBits(e.betAmount.low >>> 0, e.betAmount.high >>> 0).toNumber(!0) : e.betAmount), null != e.winAmount && e.hasOwnProperty("winAmount") && ("number" == typeof e.winAmount ? o.winAmount = t.longs === String ? String(e.winAmount) : e.winAmount : o.winAmount = t.longs === String ? m.Long.prototype.toString.call(e.winAmount) : t.longs === Number ? new m.LongBits(e.winAmount.low >>> 0, e.winAmount.high >>> 0).toNumber() : e.winAmount), null != e.isAuto && e.hasOwnProperty("isAuto") && (o.isAuto = e.isAuto), null != e.betGameCoin && e.hasOwnProperty("betGameCoin") && ("number" == typeof e.betGameCoin ? o.betGameCoin = t.longs === String ? String(e.betGameCoin) : e.betGameCoin : o.betGameCoin = t.longs === String ? m.Long.prototype.toString.call(e.betGameCoin) : t.longs === Number ? new m.LongBits(e.betGameCoin.low >>> 0, e.betGameCoin.high >>> 0).toNumber() : e.betGameCoin), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.ZoneSettleDetail"
            }, e
        }(), l.PlayerHoleCard = function() {
            function e(e) {
                if (this.Cards = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.name = 0, e.prototype.Cards = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(8).int32(e.name), null != e.Cards && e.Cards.length)
                    for (var o = 0; o < e.Cards.length; ++o) f.pokermaster_proto.CardItem.encode(e.Cards[o], t.uint32(18).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.PlayerHoleCard; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.name = e.int32();
                            break;
                        case 2:
                            n.Cards && n.Cards.length || (n.Cards = []), n.Cards.push(f.pokermaster_proto.CardItem.decode(e, e.uint32()));
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
                        var o = f.pokermaster_proto.CardItem.verify(e.Cards[t]);
                        if (o) return "Cards." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.PlayerHoleCard) return e;
                var t = new f.pokermaster_proto.PlayerHoleCard;
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
                    case "Fisher":
                    case 1:
                        t.name = 1;
                        break;
                    case "Shark":
                    case 2:
                        t.name = 2
                }
                if (e.Cards) {
                    if (!Array.isArray(e.Cards)) throw TypeError(".pokermaster_proto.PlayerHoleCard.Cards: array expected");
                    t.Cards = [];
                    for (var o = 0; o < e.Cards.length; ++o) {
                        if ("object" != typeof e.Cards[o]) throw TypeError(".pokermaster_proto.PlayerHoleCard.Cards: object expected");
                        t.Cards[o] = f.pokermaster_proto.CardItem.fromObject(e.Cards[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.Cards = []), t.defaults && (o.name = t.enums === String ? "RoleName_DUMMY" : 0), null != e.name && e.hasOwnProperty("name") && (o.name = t.enums === String ? void 0 === f.pokermaster_proto.RoleName[e.name] ? e.name : f.pokermaster_proto.RoleName[e.name] : e.name), e.Cards && e.Cards.length) {
                    o.Cards = [];
                    for (var n = 0; n < e.Cards.length; ++n) o.Cards[n] = f.pokermaster_proto.CardItem.toObject(e.Cards[n], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.PlayerHoleCard"
            }, e
        }(), l.PlayerFortune = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.fisherFortune = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.sharkFortune = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.whoWin = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.fisherFortune && Object.hasOwnProperty.call(e, "fisherFortune") && t.uint32(8).int64(e.fisherFortune), null != e.sharkFortune && Object.hasOwnProperty.call(e, "sharkFortune") && t.uint32(16).int64(e.sharkFortune), null != e.whoWin && Object.hasOwnProperty.call(e, "whoWin") && t.uint32(24).int32(e.whoWin), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.PlayerFortune; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.fisherFortune = e.int64();
                            break;
                        case 2:
                            n.sharkFortune = e.int64();
                            break;
                        case 3:
                            n.whoWin = e.int32();
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
                if (null != e.fisherFortune && e.hasOwnProperty("fisherFortune") && !(m.isInteger(e.fisherFortune) || e.fisherFortune && m.isInteger(e.fisherFortune.low) && m.isInteger(e.fisherFortune.high))) return "fisherFortune: integer|Long expected";
                if (null != e.sharkFortune && e.hasOwnProperty("sharkFortune") && !(m.isInteger(e.sharkFortune) || e.sharkFortune && m.isInteger(e.sharkFortune.low) && m.isInteger(e.sharkFortune.high))) return "sharkFortune: integer|Long expected";
                if (null != e.whoWin && e.hasOwnProperty("whoWin")) switch (e.whoWin) {
                    default:
                        return "whoWin: enum value expected";
                    case 0:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 199:
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
                if (e instanceof f.pokermaster_proto.PlayerFortune) return e;
                var t = new f.pokermaster_proto.PlayerFortune;
                switch (null != e.fisherFortune && (m.Long ? (t.fisherFortune = m.Long.fromValue(e.fisherFortune)).unsigned = !1 : "string" == typeof e.fisherFortune ? t.fisherFortune = parseInt(e.fisherFortune, 10) : "number" == typeof e.fisherFortune ? t.fisherFortune = e.fisherFortune : "object" == typeof e.fisherFortune && (t.fisherFortune = new m.LongBits(e.fisherFortune.low >>> 0, e.fisherFortune.high >>> 0).toNumber())), null != e.sharkFortune && (m.Long ? (t.sharkFortune = m.Long.fromValue(e.sharkFortune)).unsigned = !1 : "string" == typeof e.sharkFortune ? t.sharkFortune = parseInt(e.sharkFortune, 10) : "number" == typeof e.sharkFortune ? t.sharkFortune = e.sharkFortune : "object" == typeof e.sharkFortune && (t.sharkFortune = new m.LongBits(e.sharkFortune.low >>> 0, e.sharkFortune.high >>> 0).toNumber())), e.whoWin) {
                    default:
                        if ("number" == typeof e.whoWin) {
                            t.whoWin = e.whoWin;
                            break
                        }
                        break;
                    case "BetZoneOption_DUMMY":
                    case 0:
                        t.whoWin = 0;
                        break;
                    case "WIN_BEGIN":
                    case 100:
                        t.whoWin = 100;
                        break;
                    case "FISHER_WIN":
                    case 101:
                        t.whoWin = 101;
                        break;
                    case "SHARK_WIN":
                    case 102:
                        t.whoWin = 102;
                        break;
                    case "EQUAL":
                    case 103:
                        t.whoWin = 103;
                        break;
                    case "WIN_END":
                    case 199:
                        t.whoWin = 199;
                        break;
                    case "FIVE_BEGIN":
                    case 300:
                        t.whoWin = 300;
                        break;
                    case "FIVE_NONE_1DUI":
                    case 301:
                        t.whoWin = 301;
                        break;
                    case "FIVE_2DUI":
                    case 302:
                        t.whoWin = 302;
                        break;
                    case "FIVE_SAN_SHUN_TONG":
                    case 303:
                        t.whoWin = 303;
                        break;
                    case "FIVE_GOURD":
                    case 304:
                        t.whoWin = 304;
                        break;
                    case "FIVE_KING_TONG_HUA_SHUN_4":
                    case 305:
                        t.whoWin = 305;
                        break;
                    case "FIVE_END":
                    case 399:
                        t.whoWin = 399
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.fisherFortune = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.fisherFortune = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !1), o.sharkFortune = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.sharkFortune = t.longs === String ? "0" : 0, o.whoWin = t.enums === String ? "BetZoneOption_DUMMY" : 0
                }
                return null != e.fisherFortune && e.hasOwnProperty("fisherFortune") && ("number" == typeof e.fisherFortune ? o.fisherFortune = t.longs === String ? String(e.fisherFortune) : e.fisherFortune : o.fisherFortune = t.longs === String ? m.Long.prototype.toString.call(e.fisherFortune) : t.longs === Number ? new m.LongBits(e.fisherFortune.low >>> 0, e.fisherFortune.high >>> 0).toNumber() : e.fisherFortune), null != e.sharkFortune && e.hasOwnProperty("sharkFortune") && ("number" == typeof e.sharkFortune ? o.sharkFortune = t.longs === String ? String(e.sharkFortune) : e.sharkFortune : o.sharkFortune = t.longs === String ? m.Long.prototype.toString.call(e.sharkFortune) : t.longs === Number ? new m.LongBits(e.sharkFortune.low >>> 0, e.sharkFortune.high >>> 0).toNumber() : e.sharkFortune), null != e.whoWin && e.hasOwnProperty("whoWin") && (o.whoWin = t.enums === String ? void 0 === f.pokermaster_proto.BetZoneOption[e.whoWin] ? e.whoWin : f.pokermaster_proto.BetZoneOption[e.whoWin] : e.whoWin), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.PlayerFortune"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.ConnClosed; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.ConnClosed) return e;
                var t = new f.pokermaster_proto.ConnClosed;
                return null != e.Reason && (t.Reason = 0 | e.Reason), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.Reason = 0), null != e.Reason && e.hasOwnProperty("Reason") && (o.Reason = e.Reason), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.ConnClosed"
            }, e
        }(), l.LeaveRoomReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.force_buy_out = !1, e.prototype.force_kick = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.force_buy_out && Object.hasOwnProperty.call(e, "force_buy_out") && t.uint32(8).bool(e.force_buy_out), null != e.force_kick && Object.hasOwnProperty.call(e, "force_kick") && t.uint32(16).bool(e.force_kick), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.LeaveRoomReq; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.force_buy_out = e.bool();
                            break;
                        case 2:
                            n.force_kick = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.force_buy_out && e.hasOwnProperty("force_buy_out") && "boolean" != typeof e.force_buy_out ? "force_buy_out: boolean expected" : null != e.force_kick && e.hasOwnProperty("force_kick") && "boolean" != typeof e.force_kick ? "force_kick: boolean expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.LeaveRoomReq) return e;
                var t = new f.pokermaster_proto.LeaveRoomReq;
                return null != e.force_buy_out && (t.force_buy_out = Boolean(e.force_buy_out)), null != e.force_kick && (t.force_kick = Boolean(e.force_kick)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.force_buy_out = !1, o.force_kick = !1), null != e.force_buy_out && e.hasOwnProperty("force_buy_out") && (o.force_buy_out = e.force_buy_out), null != e.force_kick && e.hasOwnProperty("force_kick") && (o.force_kick = e.force_kick), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.LeaveRoomReq"
            }, e
        }(), l.LeaveRoomResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.ticket_amount = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.is_ban = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.ticket_amount && Object.hasOwnProperty.call(e, "ticket_amount") && t.uint32(16).int64(e.ticket_amount), null != e.is_ban && Object.hasOwnProperty.call(e, "is_ban") && t.uint32(24).bool(e.is_ban), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.LeaveRoomResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.ticket_amount = e.int64();
                            break;
                        case 3:
                            n.is_ban = e.bool();
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
                    case 51e3:
                    case 51001:
                    case 51002:
                    case 51003:
                    case 51004:
                    case 51005:
                    case 51006:
                    case 51007:
                    case 51008:
                    case 51009:
                    case 51010:
                    case 51011:
                    case 51012:
                    case 51013:
                    case 51014:
                    case 51015:
                    case 51016:
                    case 51017:
                    case 51018:
                    case 51019:
                    case 51020:
                    case 51021:
                    case 51022:
                    case 51023:
                    case 51027:
                    case 51024:
                    case 51025:
                    case 51026:
                    case 31117:
                    case 31118:
                    case 31119:
                    case 31120:
                }
                return null != e.ticket_amount && e.hasOwnProperty("ticket_amount") && !(m.isInteger(e.ticket_amount) || e.ticket_amount && m.isInteger(e.ticket_amount.low) && m.isInteger(e.ticket_amount.high)) ? "ticket_amount: integer|Long expected" : null != e.is_ban && e.hasOwnProperty("is_ban") && "boolean" != typeof e.is_ban ? "is_ban: boolean expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.LeaveRoomResp) return e;
                var t = new f.pokermaster_proto.LeaveRoomResp;
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
                    case 51e3:
                        t.code = 51e3;
                        break;
                    case "LOW_VERSION":
                    case 51001:
                        t.code = 51001;
                        break;
                    case "INVALID_TOKEN":
                    case 51002:
                        t.code = 51002;
                        break;
                    case "SERVER_BUSY":
                    case 51003:
                        t.code = 51003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 51004:
                        t.code = 51004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 51005:
                        t.code = 51005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 51006:
                        t.code = 51006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 51007:
                        t.code = 51007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 51008:
                        t.code = 51008;
                        break;
                    case "NO_BET":
                    case 51009:
                        t.code = 51009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 51010:
                        t.code = 51010;
                        break;
                    case "NO_MONEY":
                    case 51011:
                        t.code = 51011;
                        break;
                    case "BET_BAD_PARAM":
                    case 51012:
                        t.code = 51012;
                        break;
                    case "STOP_SERVICE":
                    case 51013:
                        t.code = 51013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 51014:
                        t.code = 51014;
                        break;
                    case "BET_TOO_SMALL":
                    case 51015:
                        t.code = 51015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 51016:
                        t.code = 51016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 51017:
                        t.code = 51017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 51018:
                        t.code = 51018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 51019:
                        t.code = 51019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 51020:
                        t.code = 51020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 51021:
                        t.code = 51021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 51022:
                        t.code = 51022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 51023:
                        t.code = 51023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 51027:
                        t.code = 51027;
                        break;
                    case "INNER_ERROR":
                    case 51024:
                        t.code = 51024;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 51025:
                        t.code = 51025;
                        break;
                    case "IN_CALM_DOWN":
                    case 51026:
                        t.code = 51026;
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
                        t.code = 31119;
                        break;
                    case "HAS_TICKET_BUY_IN":
                    case 31120:
                        t.code = 31120
                }
                return null != e.ticket_amount && (m.Long ? (t.ticket_amount = m.Long.fromValue(e.ticket_amount)).unsigned = !1 : "string" == typeof e.ticket_amount ? t.ticket_amount = parseInt(e.ticket_amount, 10) : "number" == typeof e.ticket_amount ? t.ticket_amount = e.ticket_amount : "object" == typeof e.ticket_amount && (t.ticket_amount = new m.LongBits(e.ticket_amount.low >>> 0, e.ticket_amount.high >>> 0).toNumber())), null != e.is_ban && (t.is_ban = Boolean(e.is_ban)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.ticket_amount = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.ticket_amount = t.longs === String ? "0" : 0;
                    o.is_ban = !1
                }
                return null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.pokermaster_proto.ErrorCode[e.code] ? e.code : f.pokermaster_proto.ErrorCode[e.code] : e.code), null != e.ticket_amount && e.hasOwnProperty("ticket_amount") && ("number" == typeof e.ticket_amount ? o.ticket_amount = t.longs === String ? String(e.ticket_amount) : e.ticket_amount : o.ticket_amount = t.longs === String ? m.Long.prototype.toString.call(e.ticket_amount) : t.longs === Number ? new m.LongBits(e.ticket_amount.low >>> 0, e.ticket_amount.high >>> 0).toNumber() : e.ticket_amount), null != e.is_ban && e.hasOwnProperty("is_ban") && (o.is_ban = e.is_ban), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.LeaveRoomResp"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.StartBetNotify; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.StartBetNotify) return e;
                var t = new f.pokermaster_proto.StartBetNotify;
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
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.StartBetNotify"
            }, e
        }(), l.ShowOddsNotify = function() {
            function e(e) {
                if (this.option_odds = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.nextRoundEndStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.leftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.option_odds = m.emptyArray, e.prototype.whoIsLeader = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.nextRoundEndStamp && Object.hasOwnProperty.call(e, "nextRoundEndStamp") && t.uint32(8).int64(e.nextRoundEndStamp), null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(16).int64(e.leftSeconds), null != e.option_odds && e.option_odds.length)
                    for (var o = 0; o < e.option_odds.length; ++o) f.pokermaster_proto.BetOptionsOdds.encode(e.option_odds[o], t.uint32(26).fork()).ldelim();
                return null != e.whoIsLeader && Object.hasOwnProperty.call(e, "whoIsLeader") && t.uint32(32).int32(e.whoIsLeader), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.ShowOddsNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.nextRoundEndStamp = e.int64();
                            break;
                        case 2:
                            n.leftSeconds = e.int64();
                            break;
                        case 3:
                            n.option_odds && n.option_odds.length || (n.option_odds = []), n.option_odds.push(f.pokermaster_proto.BetOptionsOdds.decode(e, e.uint32()));
                            break;
                        case 4:
                            n.whoIsLeader = e.int32();
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
                if (null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && !(m.isInteger(e.nextRoundEndStamp) || e.nextRoundEndStamp && m.isInteger(e.nextRoundEndStamp.low) && m.isInteger(e.nextRoundEndStamp.high))) return "nextRoundEndStamp: integer|Long expected";
                if (null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(m.isInteger(e.leftSeconds) || e.leftSeconds && m.isInteger(e.leftSeconds.low) && m.isInteger(e.leftSeconds.high))) return "leftSeconds: integer|Long expected";
                if (null != e.option_odds && e.hasOwnProperty("option_odds")) {
                    if (!Array.isArray(e.option_odds)) return "option_odds: array expected";
                    for (var t = 0; t < e.option_odds.length; ++t) {
                        var o = f.pokermaster_proto.BetOptionsOdds.verify(e.option_odds[t]);
                        if (o) return "option_odds." + o
                    }
                }
                return null != e.whoIsLeader && e.hasOwnProperty("whoIsLeader") && !m.isInteger(e.whoIsLeader) ? "whoIsLeader: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.ShowOddsNotify) return e;
                var t = new f.pokermaster_proto.ShowOddsNotify;
                if (null != e.nextRoundEndStamp && (m.Long ? (t.nextRoundEndStamp = m.Long.fromValue(e.nextRoundEndStamp)).unsigned = !1 : "string" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = parseInt(e.nextRoundEndStamp, 10) : "number" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = e.nextRoundEndStamp : "object" == typeof e.nextRoundEndStamp && (t.nextRoundEndStamp = new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber())), null != e.leftSeconds && (m.Long ? (t.leftSeconds = m.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), e.option_odds) {
                    if (!Array.isArray(e.option_odds)) throw TypeError(".pokermaster_proto.ShowOddsNotify.option_odds: array expected");
                    t.option_odds = [];
                    for (var o = 0; o < e.option_odds.length; ++o) {
                        if ("object" != typeof e.option_odds[o]) throw TypeError(".pokermaster_proto.ShowOddsNotify.option_odds: object expected");
                        t.option_odds[o] = f.pokermaster_proto.BetOptionsOdds.fromObject(e.option_odds[o])
                    }
                }
                return null != e.whoIsLeader && (t.whoIsLeader = 0 | e.whoIsLeader), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.option_odds = []), t.defaults) {
                    if (m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.nextRoundEndStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.nextRoundEndStamp = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !1), o.leftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.leftSeconds = t.longs === String ? "0" : 0, o.whoIsLeader = 0
                }
                if (null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && ("number" == typeof e.nextRoundEndStamp ? o.nextRoundEndStamp = t.longs === String ? String(e.nextRoundEndStamp) : e.nextRoundEndStamp : o.nextRoundEndStamp = t.longs === String ? m.Long.prototype.toString.call(e.nextRoundEndStamp) : t.longs === Number ? new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber() : e.nextRoundEndStamp), null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? o.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : o.leftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), e.option_odds && e.option_odds.length) {
                    o.option_odds = [];
                    for (var r = 0; r < e.option_odds.length; ++r) o.option_odds[r] = f.pokermaster_proto.BetOptionsOdds.toObject(e.option_odds[r], t)
                }
                return null != e.whoIsLeader && e.hasOwnProperty("whoIsLeader") && (o.whoIsLeader = e.whoIsLeader), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.ShowOddsNotify"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.TrendData; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.TrendData) return e;
                var t = new f.pokermaster_proto.TrendData;
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
                    case "FISHER_WIN":
                    case 101:
                        t.win = 101;
                        break;
                    case "SHARK_WIN":
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
                    case "FIVE_SAN_SHUN_TONG":
                    case 303:
                        t.win = 303;
                        break;
                    case "FIVE_GOURD":
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
                return t.defaults && (o.win = t.enums === String ? "BetZoneOption_DUMMY" : 0, o.win_patterns = 0, o.hand_num = 0), null != e.win && e.hasOwnProperty("win") && (o.win = t.enums === String ? void 0 === f.pokermaster_proto.BetZoneOption[e.win] ? e.win : f.pokermaster_proto.BetZoneOption[e.win] : e.win), null != e.win_patterns && e.hasOwnProperty("win_patterns") && (o.win_patterns = e.win_patterns), null != e.hand_num && e.hasOwnProperty("hand_num") && (o.hand_num = e.hand_num), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.TrendData"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.RoomTrendRoadReq; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.RoomTrendRoadReq) return e;
                var t = new f.pokermaster_proto.RoomTrendRoadReq;
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
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.RoomTrendRoadReq"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.RoomTrendRoadRsp; e.pos < o;) {
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
                    case 51e3:
                    case 51001:
                    case 51002:
                    case 51003:
                    case 51004:
                    case 51005:
                    case 51006:
                    case 51007:
                    case 51008:
                    case 51009:
                    case 51010:
                    case 51011:
                    case 51012:
                    case 51013:
                    case 51014:
                    case 51015:
                    case 51016:
                    case 51017:
                    case 51018:
                    case 51019:
                    case 51020:
                    case 51021:
                    case 51022:
                    case 51023:
                    case 51027:
                    case 51024:
                    case 51025:
                    case 51026:
                    case 31117:
                    case 31118:
                    case 31119:
                    case 31120:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.RoomTrendRoadRsp) return e;
                var t = new f.pokermaster_proto.RoomTrendRoadRsp;
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
                    case 51e3:
                        t.code = 51e3;
                        break;
                    case "LOW_VERSION":
                    case 51001:
                        t.code = 51001;
                        break;
                    case "INVALID_TOKEN":
                    case 51002:
                        t.code = 51002;
                        break;
                    case "SERVER_BUSY":
                    case 51003:
                        t.code = 51003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 51004:
                        t.code = 51004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 51005:
                        t.code = 51005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 51006:
                        t.code = 51006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 51007:
                        t.code = 51007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 51008:
                        t.code = 51008;
                        break;
                    case "NO_BET":
                    case 51009:
                        t.code = 51009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 51010:
                        t.code = 51010;
                        break;
                    case "NO_MONEY":
                    case 51011:
                        t.code = 51011;
                        break;
                    case "BET_BAD_PARAM":
                    case 51012:
                        t.code = 51012;
                        break;
                    case "STOP_SERVICE":
                    case 51013:
                        t.code = 51013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 51014:
                        t.code = 51014;
                        break;
                    case "BET_TOO_SMALL":
                    case 51015:
                        t.code = 51015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 51016:
                        t.code = 51016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 51017:
                        t.code = 51017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 51018:
                        t.code = 51018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 51019:
                        t.code = 51019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 51020:
                        t.code = 51020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 51021:
                        t.code = 51021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 51022:
                        t.code = 51022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 51023:
                        t.code = 51023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 51027:
                        t.code = 51027;
                        break;
                    case "INNER_ERROR":
                    case 51024:
                        t.code = 51024;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 51025:
                        t.code = 51025;
                        break;
                    case "IN_CALM_DOWN":
                    case 51026:
                        t.code = 51026;
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
                        t.code = 31119;
                        break;
                    case "HAS_TICKET_BUY_IN":
                    case 31120:
                        t.code = 31120
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.pokermaster_proto.ErrorCode[e.code] ? e.code : f.pokermaster_proto.ErrorCode[e.code] : e.code), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.RoomTrendRoadRsp"
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
                    for (var o = 0; o < e.road.length; ++o) f.pokermaster_proto.TrendRoad.encode(e.road[o], t.uint32(10).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.RoomTrendRoadNotice; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.road && n.road.length || (n.road = []), n.road.push(f.pokermaster_proto.TrendRoad.decode(e, e.uint32()));
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
                        var o = f.pokermaster_proto.TrendRoad.verify(e.road[t]);
                        if (o) return "road." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.RoomTrendRoadNotice) return e;
                var t = new f.pokermaster_proto.RoomTrendRoadNotice;
                if (e.road) {
                    if (!Array.isArray(e.road)) throw TypeError(".pokermaster_proto.RoomTrendRoadNotice.road: array expected");
                    t.road = [];
                    for (var o = 0; o < e.road.length; ++o) {
                        if ("object" != typeof e.road[o]) throw TypeError(".pokermaster_proto.RoomTrendRoadNotice.road: object expected");
                        t.road[o] = f.pokermaster_proto.TrendRoad.fromObject(e.road[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.road = []), e.road && e.road.length) {
                    o.road = [];
                    for (var n = 0; n < e.road.length; ++n) o.road[n] = f.pokermaster_proto.TrendRoad.toObject(e.road[n], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.RoomTrendRoadNotice"
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
                    for (var o = 0; o < e.road_row.length; ++o) f.pokermaster_proto.TrendRoadInfo.encode(e.road_row[o], t.uint32(10).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.TrendRoad; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.road_row && n.road_row.length || (n.road_row = []), n.road_row.push(f.pokermaster_proto.TrendRoadInfo.decode(e, e.uint32()));
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
                        var o = f.pokermaster_proto.TrendRoadInfo.verify(e.road_row[t]);
                        if (o) return "road_row." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.TrendRoad) return e;
                var t = new f.pokermaster_proto.TrendRoad;
                if (e.road_row) {
                    if (!Array.isArray(e.road_row)) throw TypeError(".pokermaster_proto.TrendRoad.road_row: array expected");
                    t.road_row = [];
                    for (var o = 0; o < e.road_row.length; ++o) {
                        if ("object" != typeof e.road_row[o]) throw TypeError(".pokermaster_proto.TrendRoad.road_row: object expected");
                        t.road_row[o] = f.pokermaster_proto.TrendRoadInfo.fromObject(e.road_row[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.road_row = []), e.road_row && e.road_row.length) {
                    o.road_row = [];
                    for (var n = 0; n < e.road_row.length; ++n) o.road_row[n] = f.pokermaster_proto.TrendRoadInfo.toObject(e.road_row[n], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.TrendRoad"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.TrendRoadInfo; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.TrendRoadInfo) return e;
                var t = new f.pokermaster_proto.TrendRoadInfo;
                return null != e.win && (t.win = String(e.win)), null != e.eqc && (t.eqc = 0 | e.eqc), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.win = "", o.eqc = 0), null != e.win && e.hasOwnProperty("win") && (o.win = e.win), null != e.eqc && e.hasOwnProperty("eqc") && (o.eqc = e.eqc), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.TrendRoadInfo"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.DailyStat; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.DailyStat) return e;
                var t = new f.pokermaster_proto.DailyStat;
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
                    case "FISHER_WIN":
                    case 101:
                        t.betzone_type = 101;
                        break;
                    case "SHARK_WIN":
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
                    case "FIVE_SAN_SHUN_TONG":
                    case 303:
                        t.betzone_type = 303;
                        break;
                    case "FIVE_GOURD":
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
                return t.defaults && (o.betzone_type = t.enums === String ? "BetZoneOption_DUMMY" : 0, o.count = 0, o.win_pattern = 0), null != e.betzone_type && e.hasOwnProperty("betzone_type") && (o.betzone_type = t.enums === String ? void 0 === f.pokermaster_proto.BetZoneOption[e.betzone_type] ? e.betzone_type : f.pokermaster_proto.BetZoneOption[e.betzone_type] : e.betzone_type), null != e.count && e.hasOwnProperty("count") && (o.count = e.count), null != e.win_pattern && e.hasOwnProperty("win_pattern") && (o.win_pattern = e.win_pattern), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.DailyStat"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.RoomTrendReq; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.RoomTrendReq) return e;
                var t = new f.pokermaster_proto.RoomTrendReq;
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
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.RoomTrendReq"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.RoomTrendRsp; e.pos < o;) {
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
                    case 51e3:
                    case 51001:
                    case 51002:
                    case 51003:
                    case 51004:
                    case 51005:
                    case 51006:
                    case 51007:
                    case 51008:
                    case 51009:
                    case 51010:
                    case 51011:
                    case 51012:
                    case 51013:
                    case 51014:
                    case 51015:
                    case 51016:
                    case 51017:
                    case 51018:
                    case 51019:
                    case 51020:
                    case 51021:
                    case 51022:
                    case 51023:
                    case 51027:
                    case 51024:
                    case 51025:
                    case 51026:
                    case 31117:
                    case 31118:
                    case 31119:
                    case 31120:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.RoomTrendRsp) return e;
                var t = new f.pokermaster_proto.RoomTrendRsp;
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
                    case 51e3:
                        t.code = 51e3;
                        break;
                    case "LOW_VERSION":
                    case 51001:
                        t.code = 51001;
                        break;
                    case "INVALID_TOKEN":
                    case 51002:
                        t.code = 51002;
                        break;
                    case "SERVER_BUSY":
                    case 51003:
                        t.code = 51003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 51004:
                        t.code = 51004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 51005:
                        t.code = 51005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 51006:
                        t.code = 51006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 51007:
                        t.code = 51007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 51008:
                        t.code = 51008;
                        break;
                    case "NO_BET":
                    case 51009:
                        t.code = 51009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 51010:
                        t.code = 51010;
                        break;
                    case "NO_MONEY":
                    case 51011:
                        t.code = 51011;
                        break;
                    case "BET_BAD_PARAM":
                    case 51012:
                        t.code = 51012;
                        break;
                    case "STOP_SERVICE":
                    case 51013:
                        t.code = 51013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 51014:
                        t.code = 51014;
                        break;
                    case "BET_TOO_SMALL":
                    case 51015:
                        t.code = 51015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 51016:
                        t.code = 51016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 51017:
                        t.code = 51017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 51018:
                        t.code = 51018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 51019:
                        t.code = 51019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 51020:
                        t.code = 51020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 51021:
                        t.code = 51021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 51022:
                        t.code = 51022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 51023:
                        t.code = 51023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 51027:
                        t.code = 51027;
                        break;
                    case "INNER_ERROR":
                    case 51024:
                        t.code = 51024;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 51025:
                        t.code = 51025;
                        break;
                    case "IN_CALM_DOWN":
                    case 51026:
                        t.code = 51026;
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
                        t.code = 31119;
                        break;
                    case "HAS_TICKET_BUY_IN":
                    case 31120:
                        t.code = 31120
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.pokermaster_proto.ErrorCode[e.code] ? e.code : f.pokermaster_proto.ErrorCode[e.code] : e.code), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.RoomTrendRsp"
            }, e
        }(), l.RoomTrendNotice = function() {
            function e(e) {
                if (this.trend = [], this.road = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.roomuuid = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.trend = m.emptyArray, e.prototype.fortune = null, e.prototype.road = m.emptyArray, e.prototype.lastRow = 0, e.prototype.lastCol = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.roomuuid && Object.hasOwnProperty.call(e, "roomuuid") && t.uint32(8).uint64(e.roomuuid), null != e.trend && e.trend.length)
                    for (var o = 0; o < e.trend.length; ++o) f.pokermaster_proto.TrendData.encode(e.trend[o], t.uint32(18).fork()).ldelim();
                if (null != e.fortune && Object.hasOwnProperty.call(e, "fortune") && f.pokermaster_proto.PlayerFortune.encode(e.fortune, t.uint32(26).fork()).ldelim(), null != e.road && e.road.length)
                    for (o = 0; o < e.road.length; ++o) f.pokermaster_proto.TrendRoad.encode(e.road[o], t.uint32(34).fork()).ldelim();
                return null != e.lastRow && Object.hasOwnProperty.call(e, "lastRow") && t.uint32(40).int32(e.lastRow), null != e.lastCol && Object.hasOwnProperty.call(e, "lastCol") && t.uint32(48).int32(e.lastCol), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.RoomTrendNotice; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.roomuuid = e.uint64();
                            break;
                        case 2:
                            n.trend && n.trend.length || (n.trend = []), n.trend.push(f.pokermaster_proto.TrendData.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.fortune = f.pokermaster_proto.PlayerFortune.decode(e, e.uint32());
                            break;
                        case 4:
                            n.road && n.road.length || (n.road = []), n.road.push(f.pokermaster_proto.TrendRoad.decode(e, e.uint32()));
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
                        if (o = f.pokermaster_proto.TrendData.verify(e.trend[t])) return "trend." + o
                }
                if (null != e.fortune && e.hasOwnProperty("fortune") && (o = f.pokermaster_proto.PlayerFortune.verify(e.fortune))) return "fortune." + o;
                if (null != e.road && e.hasOwnProperty("road")) {
                    if (!Array.isArray(e.road)) return "road: array expected";
                    for (t = 0; t < e.road.length; ++t) {
                        var o;
                        if (o = f.pokermaster_proto.TrendRoad.verify(e.road[t])) return "road." + o
                    }
                }
                return null != e.lastRow && e.hasOwnProperty("lastRow") && !m.isInteger(e.lastRow) ? "lastRow: integer expected" : null != e.lastCol && e.hasOwnProperty("lastCol") && !m.isInteger(e.lastCol) ? "lastCol: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.RoomTrendNotice) return e;
                var t = new f.pokermaster_proto.RoomTrendNotice;
                if (null != e.roomuuid && (m.Long ? (t.roomuuid = m.Long.fromValue(e.roomuuid)).unsigned = !0 : "string" == typeof e.roomuuid ? t.roomuuid = parseInt(e.roomuuid, 10) : "number" == typeof e.roomuuid ? t.roomuuid = e.roomuuid : "object" == typeof e.roomuuid && (t.roomuuid = new m.LongBits(e.roomuuid.low >>> 0, e.roomuuid.high >>> 0).toNumber(!0))), e.trend) {
                    if (!Array.isArray(e.trend)) throw TypeError(".pokermaster_proto.RoomTrendNotice.trend: array expected");
                    t.trend = [];
                    for (var o = 0; o < e.trend.length; ++o) {
                        if ("object" != typeof e.trend[o]) throw TypeError(".pokermaster_proto.RoomTrendNotice.trend: object expected");
                        t.trend[o] = f.pokermaster_proto.TrendData.fromObject(e.trend[o])
                    }
                }
                if (null != e.fortune) {
                    if ("object" != typeof e.fortune) throw TypeError(".pokermaster_proto.RoomTrendNotice.fortune: object expected");
                    t.fortune = f.pokermaster_proto.PlayerFortune.fromObject(e.fortune)
                }
                if (e.road) {
                    if (!Array.isArray(e.road)) throw TypeError(".pokermaster_proto.RoomTrendNotice.road: array expected");
                    for (t.road = [], o = 0; o < e.road.length; ++o) {
                        if ("object" != typeof e.road[o]) throw TypeError(".pokermaster_proto.RoomTrendNotice.road: object expected");
                        t.road[o] = f.pokermaster_proto.TrendRoad.fromObject(e.road[o])
                    }
                }
                return null != e.lastRow && (t.lastRow = 0 | e.lastRow), null != e.lastCol && (t.lastCol = 0 | e.lastCol), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.trend = [], o.road = []), t.defaults) {
                    if (m.Long) {
                        var n = new m.Long(0, 0, !0);
                        o.roomuuid = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.roomuuid = t.longs === String ? "0" : 0;
                    o.fortune = null, o.lastRow = 0, o.lastCol = 0
                }
                if (null != e.roomuuid && e.hasOwnProperty("roomuuid") && ("number" == typeof e.roomuuid ? o.roomuuid = t.longs === String ? String(e.roomuuid) : e.roomuuid : o.roomuuid = t.longs === String ? m.Long.prototype.toString.call(e.roomuuid) : t.longs === Number ? new m.LongBits(e.roomuuid.low >>> 0, e.roomuuid.high >>> 0).toNumber(!0) : e.roomuuid), e.trend && e.trend.length) {
                    o.trend = [];
                    for (var r = 0; r < e.trend.length; ++r) o.trend[r] = f.pokermaster_proto.TrendData.toObject(e.trend[r], t)
                }
                if (null != e.fortune && e.hasOwnProperty("fortune") && (o.fortune = f.pokermaster_proto.PlayerFortune.toObject(e.fortune, t)), e.road && e.road.length)
                    for (o.road = [], r = 0; r < e.road.length; ++r) o.road[r] = f.pokermaster_proto.TrendRoad.toObject(e.road[r], t);
                return null != e.lastRow && e.hasOwnProperty("lastRow") && (o.lastRow = e.lastRow), null != e.lastCol && e.hasOwnProperty("lastCol") && (o.lastCol = e.lastCol), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.RoomTrendNotice"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.AutoBetReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.pokermaster_proto.AutoBetReq ? e : new f.pokermaster_proto.AutoBetReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.AutoBetReq"
            }, e
        }(), l.AutoBetResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.canAuto = !1, e.prototype.CalmDownLeftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.CalmDownDeadLineTimeStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.bill = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.canAuto && Object.hasOwnProperty.call(e, "canAuto") && t.uint32(16).bool(e.canAuto), null != e.CalmDownLeftSeconds && Object.hasOwnProperty.call(e, "CalmDownLeftSeconds") && t.uint32(24).int64(e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && Object.hasOwnProperty.call(e, "CalmDownDeadLineTimeStamp") && t.uint32(32).int64(e.CalmDownDeadLineTimeStamp), null != e.bill && Object.hasOwnProperty.call(e, "bill") && f.pokermaster_proto.BillInfo.encode(e.bill, t.uint32(42).fork()).ldelim(), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.AutoBetResp; e.pos < o;) {
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
                            n.bill = f.pokermaster_proto.BillInfo.decode(e, e.uint32());
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
                    case 51e3:
                    case 51001:
                    case 51002:
                    case 51003:
                    case 51004:
                    case 51005:
                    case 51006:
                    case 51007:
                    case 51008:
                    case 51009:
                    case 51010:
                    case 51011:
                    case 51012:
                    case 51013:
                    case 51014:
                    case 51015:
                    case 51016:
                    case 51017:
                    case 51018:
                    case 51019:
                    case 51020:
                    case 51021:
                    case 51022:
                    case 51023:
                    case 51027:
                    case 51024:
                    case 51025:
                    case 51026:
                    case 31117:
                    case 31118:
                    case 31119:
                    case 31120:
                }
                if (null != e.canAuto && e.hasOwnProperty("canAuto") && "boolean" != typeof e.canAuto) return "canAuto: boolean expected";
                if (null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && !(m.isInteger(e.CalmDownLeftSeconds) || e.CalmDownLeftSeconds && m.isInteger(e.CalmDownLeftSeconds.low) && m.isInteger(e.CalmDownLeftSeconds.high))) return "CalmDownLeftSeconds: integer|Long expected";
                if (null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && !(m.isInteger(e.CalmDownDeadLineTimeStamp) || e.CalmDownDeadLineTimeStamp && m.isInteger(e.CalmDownDeadLineTimeStamp.low) && m.isInteger(e.CalmDownDeadLineTimeStamp.high))) return "CalmDownDeadLineTimeStamp: integer|Long expected";
                if (null != e.bill && e.hasOwnProperty("bill")) {
                    var t = f.pokermaster_proto.BillInfo.verify(e.bill);
                    if (t) return "bill." + t
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.AutoBetResp) return e;
                var t = new f.pokermaster_proto.AutoBetResp;
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
                    case 51e3:
                        t.code = 51e3;
                        break;
                    case "LOW_VERSION":
                    case 51001:
                        t.code = 51001;
                        break;
                    case "INVALID_TOKEN":
                    case 51002:
                        t.code = 51002;
                        break;
                    case "SERVER_BUSY":
                    case 51003:
                        t.code = 51003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 51004:
                        t.code = 51004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 51005:
                        t.code = 51005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 51006:
                        t.code = 51006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 51007:
                        t.code = 51007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 51008:
                        t.code = 51008;
                        break;
                    case "NO_BET":
                    case 51009:
                        t.code = 51009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 51010:
                        t.code = 51010;
                        break;
                    case "NO_MONEY":
                    case 51011:
                        t.code = 51011;
                        break;
                    case "BET_BAD_PARAM":
                    case 51012:
                        t.code = 51012;
                        break;
                    case "STOP_SERVICE":
                    case 51013:
                        t.code = 51013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 51014:
                        t.code = 51014;
                        break;
                    case "BET_TOO_SMALL":
                    case 51015:
                        t.code = 51015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 51016:
                        t.code = 51016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 51017:
                        t.code = 51017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 51018:
                        t.code = 51018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 51019:
                        t.code = 51019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 51020:
                        t.code = 51020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 51021:
                        t.code = 51021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 51022:
                        t.code = 51022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 51023:
                        t.code = 51023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 51027:
                        t.code = 51027;
                        break;
                    case "INNER_ERROR":
                    case 51024:
                        t.code = 51024;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 51025:
                        t.code = 51025;
                        break;
                    case "IN_CALM_DOWN":
                    case 51026:
                        t.code = 51026;
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
                        t.code = 31119;
                        break;
                    case "HAS_TICKET_BUY_IN":
                    case 31120:
                        t.code = 31120
                }
                if (null != e.canAuto && (t.canAuto = Boolean(e.canAuto)), null != e.CalmDownLeftSeconds && (m.Long ? (t.CalmDownLeftSeconds = m.Long.fromValue(e.CalmDownLeftSeconds)).unsigned = !1 : "string" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = parseInt(e.CalmDownLeftSeconds, 10) : "number" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = e.CalmDownLeftSeconds : "object" == typeof e.CalmDownLeftSeconds && (t.CalmDownLeftSeconds = new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber())), null != e.CalmDownDeadLineTimeStamp && (m.Long ? (t.CalmDownDeadLineTimeStamp = m.Long.fromValue(e.CalmDownDeadLineTimeStamp)).unsigned = !1 : "string" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = parseInt(e.CalmDownDeadLineTimeStamp, 10) : "number" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = e.CalmDownDeadLineTimeStamp : "object" == typeof e.CalmDownDeadLineTimeStamp && (t.CalmDownDeadLineTimeStamp = new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber())), null != e.bill) {
                    if ("object" != typeof e.bill) throw TypeError(".pokermaster_proto.AutoBetResp.bill: object expected");
                    t.bill = f.pokermaster_proto.BillInfo.fromObject(e.bill)
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
                return null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.pokermaster_proto.ErrorCode[e.code] ? e.code : f.pokermaster_proto.ErrorCode[e.code] : e.code), null != e.canAuto && e.hasOwnProperty("canAuto") && (o.canAuto = e.canAuto), null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && ("number" == typeof e.CalmDownLeftSeconds ? o.CalmDownLeftSeconds = t.longs === String ? String(e.CalmDownLeftSeconds) : e.CalmDownLeftSeconds : o.CalmDownLeftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownLeftSeconds) : t.longs === Number ? new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber() : e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && ("number" == typeof e.CalmDownDeadLineTimeStamp ? o.CalmDownDeadLineTimeStamp = t.longs === String ? String(e.CalmDownDeadLineTimeStamp) : e.CalmDownDeadLineTimeStamp : o.CalmDownDeadLineTimeStamp = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownDeadLineTimeStamp) : t.longs === Number ? new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber() : e.CalmDownDeadLineTimeStamp), null != e.bill && e.hasOwnProperty("bill") && (o.bill = f.pokermaster_proto.BillInfo.toObject(e.bill, t)), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.AutoBetResp"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.AutoBetNotify; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.AutoBetNotify) return e;
                var t = new f.pokermaster_proto.AutoBetNotify;
                return null != e.open && (t.open = Boolean(e.open)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.open = !1), null != e.open && e.hasOwnProperty("open") && (o.open = e.open), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.AutoBetNotify"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.PlayerListReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.pokermaster_proto.PlayerListReq ? e : new f.pokermaster_proto.PlayerListReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.PlayerListReq"
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
                    for (var o = 0; o < e.gamePlayers.length; ++o) f.pokermaster_proto.GamePlayer.encode(e.gamePlayers[o], t.uint32(18).fork()).ldelim();
                return null != e.self && Object.hasOwnProperty.call(e, "self") && f.pokermaster_proto.GamePlayer.encode(e.self, t.uint32(26).fork()).ldelim(), null != e.playerNum && Object.hasOwnProperty.call(e, "playerNum") && t.uint32(40).uint32(e.playerNum), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.PlayerListResp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.gamePlayers && n.gamePlayers.length || (n.gamePlayers = []), n.gamePlayers.push(f.pokermaster_proto.GamePlayer.decode(e, e.uint32()));
                            break;
                        case 3:
                            n.self = f.pokermaster_proto.GamePlayer.decode(e, e.uint32());
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
                    case 51e3:
                    case 51001:
                    case 51002:
                    case 51003:
                    case 51004:
                    case 51005:
                    case 51006:
                    case 51007:
                    case 51008:
                    case 51009:
                    case 51010:
                    case 51011:
                    case 51012:
                    case 51013:
                    case 51014:
                    case 51015:
                    case 51016:
                    case 51017:
                    case 51018:
                    case 51019:
                    case 51020:
                    case 51021:
                    case 51022:
                    case 51023:
                    case 51027:
                    case 51024:
                    case 51025:
                    case 51026:
                    case 31117:
                    case 31118:
                    case 31119:
                    case 31120:
                }
                if (null != e.gamePlayers && e.hasOwnProperty("gamePlayers")) {
                    if (!Array.isArray(e.gamePlayers)) return "gamePlayers: array expected";
                    for (var t = 0; t < e.gamePlayers.length; ++t)
                        if (o = f.pokermaster_proto.GamePlayer.verify(e.gamePlayers[t])) return "gamePlayers." + o
                }
                var o;
                return null != e.self && e.hasOwnProperty("self") && (o = f.pokermaster_proto.GamePlayer.verify(e.self)) ? "self." + o : null != e.playerNum && e.hasOwnProperty("playerNum") && !m.isInteger(e.playerNum) ? "playerNum: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.PlayerListResp) return e;
                var t = new f.pokermaster_proto.PlayerListResp;
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
                    case 51e3:
                        t.code = 51e3;
                        break;
                    case "LOW_VERSION":
                    case 51001:
                        t.code = 51001;
                        break;
                    case "INVALID_TOKEN":
                    case 51002:
                        t.code = 51002;
                        break;
                    case "SERVER_BUSY":
                    case 51003:
                        t.code = 51003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 51004:
                        t.code = 51004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 51005:
                        t.code = 51005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 51006:
                        t.code = 51006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 51007:
                        t.code = 51007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 51008:
                        t.code = 51008;
                        break;
                    case "NO_BET":
                    case 51009:
                        t.code = 51009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 51010:
                        t.code = 51010;
                        break;
                    case "NO_MONEY":
                    case 51011:
                        t.code = 51011;
                        break;
                    case "BET_BAD_PARAM":
                    case 51012:
                        t.code = 51012;
                        break;
                    case "STOP_SERVICE":
                    case 51013:
                        t.code = 51013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 51014:
                        t.code = 51014;
                        break;
                    case "BET_TOO_SMALL":
                    case 51015:
                        t.code = 51015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 51016:
                        t.code = 51016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 51017:
                        t.code = 51017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 51018:
                        t.code = 51018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 51019:
                        t.code = 51019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 51020:
                        t.code = 51020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 51021:
                        t.code = 51021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 51022:
                        t.code = 51022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 51023:
                        t.code = 51023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 51027:
                        t.code = 51027;
                        break;
                    case "INNER_ERROR":
                    case 51024:
                        t.code = 51024;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 51025:
                        t.code = 51025;
                        break;
                    case "IN_CALM_DOWN":
                    case 51026:
                        t.code = 51026;
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
                        t.code = 31119;
                        break;
                    case "HAS_TICKET_BUY_IN":
                    case 31120:
                        t.code = 31120
                }
                if (e.gamePlayers) {
                    if (!Array.isArray(e.gamePlayers)) throw TypeError(".pokermaster_proto.PlayerListResp.gamePlayers: array expected");
                    t.gamePlayers = [];
                    for (var o = 0; o < e.gamePlayers.length; ++o) {
                        if ("object" != typeof e.gamePlayers[o]) throw TypeError(".pokermaster_proto.PlayerListResp.gamePlayers: object expected");
                        t.gamePlayers[o] = f.pokermaster_proto.GamePlayer.fromObject(e.gamePlayers[o])
                    }
                }
                if (null != e.self) {
                    if ("object" != typeof e.self) throw TypeError(".pokermaster_proto.PlayerListResp.self: object expected");
                    t.self = f.pokermaster_proto.GamePlayer.fromObject(e.self)
                }
                return null != e.playerNum && (t.playerNum = e.playerNum >>> 0), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.gamePlayers = []), t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.self = null, o.playerNum = 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.pokermaster_proto.ErrorCode[e.code] ? e.code : f.pokermaster_proto.ErrorCode[e.code] : e.code), e.gamePlayers && e.gamePlayers.length) {
                    o.gamePlayers = [];
                    for (var n = 0; n < e.gamePlayers.length; ++n) o.gamePlayers[n] = f.pokermaster_proto.GamePlayer.toObject(e.gamePlayers[n], t)
                }
                return null != e.self && e.hasOwnProperty("self") && (o.self = f.pokermaster_proto.GamePlayer.toObject(e.self, t)), null != e.playerNum && e.hasOwnProperty("playerNum") && (o.playerNum = e.playerNum), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.PlayerListResp"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.GamePlayer; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.GamePlayer) return e;
                var t = new f.pokermaster_proto.GamePlayer;
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
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.GamePlayer"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.KickNotify; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.KickNotify) return e;
                var t = new f.pokermaster_proto.KickNotify;
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
                return t.defaults && (o.kickType = t.enums === String ? "Kick_DUMMY" : 0, o.desc = "", o.idle_roomid = 0), null != e.kickType && e.hasOwnProperty("kickType") && (o.kickType = t.enums === String ? void 0 === f.pokermaster_proto.Kick[e.kickType] ? e.kickType : f.pokermaster_proto.Kick[e.kickType] : e.kickType), null != e.desc && e.hasOwnProperty("desc") && (o.desc = e.desc), null != e.idle_roomid && e.hasOwnProperty("idle_roomid") && (o.idle_roomid = e.idle_roomid), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.KickNotify"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.AutoOpenRoadsReq; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.AutoOpenRoadsReq) return e;
                var t = new f.pokermaster_proto.AutoOpenRoadsReq;
                return null != e.open && (t.open = Boolean(e.open)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.open = !1), null != e.open && e.hasOwnProperty("open") && (o.open = e.open), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.AutoOpenRoadsReq"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.AutoOpenRoadsResp; e.pos < o;) {
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
                    case 51e3:
                    case 51001:
                    case 51002:
                    case 51003:
                    case 51004:
                    case 51005:
                    case 51006:
                    case 51007:
                    case 51008:
                    case 51009:
                    case 51010:
                    case 51011:
                    case 51012:
                    case 51013:
                    case 51014:
                    case 51015:
                    case 51016:
                    case 51017:
                    case 51018:
                    case 51019:
                    case 51020:
                    case 51021:
                    case 51022:
                    case 51023:
                    case 51027:
                    case 51024:
                    case 51025:
                    case 51026:
                    case 31117:
                    case 31118:
                    case 31119:
                    case 31120:
                }
                return null != e.open && e.hasOwnProperty("open") && "boolean" != typeof e.open ? "open: boolean expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.AutoOpenRoadsResp) return e;
                var t = new f.pokermaster_proto.AutoOpenRoadsResp;
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
                    case 51e3:
                        t.code = 51e3;
                        break;
                    case "LOW_VERSION":
                    case 51001:
                        t.code = 51001;
                        break;
                    case "INVALID_TOKEN":
                    case 51002:
                        t.code = 51002;
                        break;
                    case "SERVER_BUSY":
                    case 51003:
                        t.code = 51003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 51004:
                        t.code = 51004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 51005:
                        t.code = 51005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 51006:
                        t.code = 51006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 51007:
                        t.code = 51007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 51008:
                        t.code = 51008;
                        break;
                    case "NO_BET":
                    case 51009:
                        t.code = 51009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 51010:
                        t.code = 51010;
                        break;
                    case "NO_MONEY":
                    case 51011:
                        t.code = 51011;
                        break;
                    case "BET_BAD_PARAM":
                    case 51012:
                        t.code = 51012;
                        break;
                    case "STOP_SERVICE":
                    case 51013:
                        t.code = 51013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 51014:
                        t.code = 51014;
                        break;
                    case "BET_TOO_SMALL":
                    case 51015:
                        t.code = 51015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 51016:
                        t.code = 51016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 51017:
                        t.code = 51017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 51018:
                        t.code = 51018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 51019:
                        t.code = 51019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 51020:
                        t.code = 51020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 51021:
                        t.code = 51021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 51022:
                        t.code = 51022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 51023:
                        t.code = 51023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 51027:
                        t.code = 51027;
                        break;
                    case "INNER_ERROR":
                    case 51024:
                        t.code = 51024;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 51025:
                        t.code = 51025;
                        break;
                    case "IN_CALM_DOWN":
                    case 51026:
                        t.code = 51026;
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
                        t.code = 31119;
                        break;
                    case "HAS_TICKET_BUY_IN":
                    case 31120:
                        t.code = 31120
                }
                return null != e.open && (t.open = Boolean(e.open)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.open = !1), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.pokermaster_proto.ErrorCode[e.code] ? e.code : f.pokermaster_proto.ErrorCode[e.code] : e.code), null != e.open && e.hasOwnProperty("open") && (o.open = e.open), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.AutoOpenRoadsResp"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.SetGameOptionReq; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.SetGameOptionReq) return e;
                var t = new f.pokermaster_proto.SetGameOptionReq;
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
                    if (!Array.isArray(e.betCoinOption)) throw TypeError(".pokermaster_proto.SetGameOptionReq.betCoinOption: array expected");
                    t.betCoinOption = [];
                    for (var o = 0; o < e.betCoinOption.length; ++o) m.Long ? (t.betCoinOption[o] = m.Long.fromValue(e.betCoinOption[o])).unsigned = !0 : "string" == typeof e.betCoinOption[o] ? t.betCoinOption[o] = parseInt(e.betCoinOption[o], 10) : "number" == typeof e.betCoinOption[o] ? t.betCoinOption[o] = e.betCoinOption[o] : "object" == typeof e.betCoinOption[o] && (t.betCoinOption[o] = new m.LongBits(e.betCoinOption[o].low >>> 0, e.betCoinOption[o].high >>> 0).toNumber(!0))
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.betCoinOption = []), t.defaults && (o.autoLevel = t.enums === String ? "Level_Normal" : 0), null != e.autoLevel && e.hasOwnProperty("autoLevel") && (o.autoLevel = t.enums === String ? void 0 === f.pokermaster_proto.AutoBetLevel[e.autoLevel] ? e.autoLevel : f.pokermaster_proto.AutoBetLevel[e.autoLevel] : e.autoLevel), e.betCoinOption && e.betCoinOption.length) {
                    o.betCoinOption = [];
                    for (var n = 0; n < e.betCoinOption.length; ++n) "number" == typeof e.betCoinOption[n] ? o.betCoinOption[n] = t.longs === String ? String(e.betCoinOption[n]) : e.betCoinOption[n] : o.betCoinOption[n] = t.longs === String ? m.Long.prototype.toString.call(e.betCoinOption[n]) : t.longs === Number ? new m.LongBits(e.betCoinOption[n].low >>> 0, e.betCoinOption[n].high >>> 0).toNumber(!0) : e.betCoinOption[n]
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.SetGameOptionReq"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.SetGameOptionResp; e.pos < o;) {
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
                    case 51e3:
                    case 51001:
                    case 51002:
                    case 51003:
                    case 51004:
                    case 51005:
                    case 51006:
                    case 51007:
                    case 51008:
                    case 51009:
                    case 51010:
                    case 51011:
                    case 51012:
                    case 51013:
                    case 51014:
                    case 51015:
                    case 51016:
                    case 51017:
                    case 51018:
                    case 51019:
                    case 51020:
                    case 51021:
                    case 51022:
                    case 51023:
                    case 51027:
                    case 51024:
                    case 51025:
                    case 51026:
                    case 31117:
                    case 31118:
                    case 31119:
                    case 31120:
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
                if (e instanceof f.pokermaster_proto.SetGameOptionResp) return e;
                var t = new f.pokermaster_proto.SetGameOptionResp;
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
                    case 51e3:
                        t.code = 51e3;
                        break;
                    case "LOW_VERSION":
                    case 51001:
                        t.code = 51001;
                        break;
                    case "INVALID_TOKEN":
                    case 51002:
                        t.code = 51002;
                        break;
                    case "SERVER_BUSY":
                    case 51003:
                        t.code = 51003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 51004:
                        t.code = 51004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 51005:
                        t.code = 51005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 51006:
                        t.code = 51006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 51007:
                        t.code = 51007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 51008:
                        t.code = 51008;
                        break;
                    case "NO_BET":
                    case 51009:
                        t.code = 51009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 51010:
                        t.code = 51010;
                        break;
                    case "NO_MONEY":
                    case 51011:
                        t.code = 51011;
                        break;
                    case "BET_BAD_PARAM":
                    case 51012:
                        t.code = 51012;
                        break;
                    case "STOP_SERVICE":
                    case 51013:
                        t.code = 51013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 51014:
                        t.code = 51014;
                        break;
                    case "BET_TOO_SMALL":
                    case 51015:
                        t.code = 51015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 51016:
                        t.code = 51016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 51017:
                        t.code = 51017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 51018:
                        t.code = 51018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 51019:
                        t.code = 51019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 51020:
                        t.code = 51020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 51021:
                        t.code = 51021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 51022:
                        t.code = 51022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 51023:
                        t.code = 51023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 51027:
                        t.code = 51027;
                        break;
                    case "INNER_ERROR":
                    case 51024:
                        t.code = 51024;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 51025:
                        t.code = 51025;
                        break;
                    case "IN_CALM_DOWN":
                    case 51026:
                        t.code = 51026;
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
                        t.code = 31119;
                        break;
                    case "HAS_TICKET_BUY_IN":
                    case 31120:
                        t.code = 31120
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
                    if (!Array.isArray(e.betCoinOption)) throw TypeError(".pokermaster_proto.SetGameOptionResp.betCoinOption: array expected");
                    t.betCoinOption = [];
                    for (var o = 0; o < e.betCoinOption.length; ++o) m.Long ? (t.betCoinOption[o] = m.Long.fromValue(e.betCoinOption[o])).unsigned = !0 : "string" == typeof e.betCoinOption[o] ? t.betCoinOption[o] = parseInt(e.betCoinOption[o], 10) : "number" == typeof e.betCoinOption[o] ? t.betCoinOption[o] = e.betCoinOption[o] : "object" == typeof e.betCoinOption[o] && (t.betCoinOption[o] = new m.LongBits(e.betCoinOption[o].low >>> 0, e.betCoinOption[o].high >>> 0).toNumber(!0))
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.betCoinOption = []), t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.autoLevel = t.enums === String ? "Level_Normal" : 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.pokermaster_proto.ErrorCode[e.code] ? e.code : f.pokermaster_proto.ErrorCode[e.code] : e.code), null != e.autoLevel && e.hasOwnProperty("autoLevel") && (o.autoLevel = t.enums === String ? void 0 === f.pokermaster_proto.AutoBetLevel[e.autoLevel] ? e.autoLevel : f.pokermaster_proto.AutoBetLevel[e.autoLevel] : e.autoLevel), e.betCoinOption && e.betCoinOption.length) {
                    o.betCoinOption = [];
                    for (var n = 0; n < e.betCoinOption.length; ++n) "number" == typeof e.betCoinOption[n] ? o.betCoinOption[n] = t.longs === String ? String(e.betCoinOption[n]) : e.betCoinOption[n] : o.betCoinOption[n] = t.longs === String ? m.Long.prototype.toString.call(e.betCoinOption[n]) : t.longs === Number ? new m.LongBits(e.betCoinOption[n].low >>> 0, e.betCoinOption[n].high >>> 0).toNumber(!0) : e.betCoinOption[n]
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.SetGameOptionResp"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.AdvanceAutoBetReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.pokermaster_proto.AdvanceAutoBetReq ? e : new f.pokermaster_proto.AdvanceAutoBetReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.AdvanceAutoBetReq"
            }, e
        }(), l.AdvanceAutoBetRsp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.usedAutoBetCount = 0, e.prototype.CalmDownLeftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.CalmDownDeadLineTimeStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.bill = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.usedAutoBetCount && Object.hasOwnProperty.call(e, "usedAutoBetCount") && t.uint32(16).int32(e.usedAutoBetCount), null != e.CalmDownLeftSeconds && Object.hasOwnProperty.call(e, "CalmDownLeftSeconds") && t.uint32(24).int64(e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && Object.hasOwnProperty.call(e, "CalmDownDeadLineTimeStamp") && t.uint32(32).int64(e.CalmDownDeadLineTimeStamp), null != e.bill && Object.hasOwnProperty.call(e, "bill") && f.pokermaster_proto.BillInfo.encode(e.bill, t.uint32(42).fork()).ldelim(), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.AdvanceAutoBetRsp; e.pos < o;) {
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
                            n.bill = f.pokermaster_proto.BillInfo.decode(e, e.uint32());
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
                    case 51e3:
                    case 51001:
                    case 51002:
                    case 51003:
                    case 51004:
                    case 51005:
                    case 51006:
                    case 51007:
                    case 51008:
                    case 51009:
                    case 51010:
                    case 51011:
                    case 51012:
                    case 51013:
                    case 51014:
                    case 51015:
                    case 51016:
                    case 51017:
                    case 51018:
                    case 51019:
                    case 51020:
                    case 51021:
                    case 51022:
                    case 51023:
                    case 51027:
                    case 51024:
                    case 51025:
                    case 51026:
                    case 31117:
                    case 31118:
                    case 31119:
                    case 31120:
                }
                if (null != e.usedAutoBetCount && e.hasOwnProperty("usedAutoBetCount") && !m.isInteger(e.usedAutoBetCount)) return "usedAutoBetCount: integer expected";
                if (null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && !(m.isInteger(e.CalmDownLeftSeconds) || e.CalmDownLeftSeconds && m.isInteger(e.CalmDownLeftSeconds.low) && m.isInteger(e.CalmDownLeftSeconds.high))) return "CalmDownLeftSeconds: integer|Long expected";
                if (null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && !(m.isInteger(e.CalmDownDeadLineTimeStamp) || e.CalmDownDeadLineTimeStamp && m.isInteger(e.CalmDownDeadLineTimeStamp.low) && m.isInteger(e.CalmDownDeadLineTimeStamp.high))) return "CalmDownDeadLineTimeStamp: integer|Long expected";
                if (null != e.bill && e.hasOwnProperty("bill")) {
                    var t = f.pokermaster_proto.BillInfo.verify(e.bill);
                    if (t) return "bill." + t
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.AdvanceAutoBetRsp) return e;
                var t = new f.pokermaster_proto.AdvanceAutoBetRsp;
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
                    case 51e3:
                        t.code = 51e3;
                        break;
                    case "LOW_VERSION":
                    case 51001:
                        t.code = 51001;
                        break;
                    case "INVALID_TOKEN":
                    case 51002:
                        t.code = 51002;
                        break;
                    case "SERVER_BUSY":
                    case 51003:
                        t.code = 51003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 51004:
                        t.code = 51004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 51005:
                        t.code = 51005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 51006:
                        t.code = 51006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 51007:
                        t.code = 51007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 51008:
                        t.code = 51008;
                        break;
                    case "NO_BET":
                    case 51009:
                        t.code = 51009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 51010:
                        t.code = 51010;
                        break;
                    case "NO_MONEY":
                    case 51011:
                        t.code = 51011;
                        break;
                    case "BET_BAD_PARAM":
                    case 51012:
                        t.code = 51012;
                        break;
                    case "STOP_SERVICE":
                    case 51013:
                        t.code = 51013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 51014:
                        t.code = 51014;
                        break;
                    case "BET_TOO_SMALL":
                    case 51015:
                        t.code = 51015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 51016:
                        t.code = 51016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 51017:
                        t.code = 51017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 51018:
                        t.code = 51018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 51019:
                        t.code = 51019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 51020:
                        t.code = 51020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 51021:
                        t.code = 51021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 51022:
                        t.code = 51022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 51023:
                        t.code = 51023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 51027:
                        t.code = 51027;
                        break;
                    case "INNER_ERROR":
                    case 51024:
                        t.code = 51024;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 51025:
                        t.code = 51025;
                        break;
                    case "IN_CALM_DOWN":
                    case 51026:
                        t.code = 51026;
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
                        t.code = 31119;
                        break;
                    case "HAS_TICKET_BUY_IN":
                    case 31120:
                        t.code = 31120
                }
                if (null != e.usedAutoBetCount && (t.usedAutoBetCount = 0 | e.usedAutoBetCount), null != e.CalmDownLeftSeconds && (m.Long ? (t.CalmDownLeftSeconds = m.Long.fromValue(e.CalmDownLeftSeconds)).unsigned = !1 : "string" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = parseInt(e.CalmDownLeftSeconds, 10) : "number" == typeof e.CalmDownLeftSeconds ? t.CalmDownLeftSeconds = e.CalmDownLeftSeconds : "object" == typeof e.CalmDownLeftSeconds && (t.CalmDownLeftSeconds = new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber())), null != e.CalmDownDeadLineTimeStamp && (m.Long ? (t.CalmDownDeadLineTimeStamp = m.Long.fromValue(e.CalmDownDeadLineTimeStamp)).unsigned = !1 : "string" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = parseInt(e.CalmDownDeadLineTimeStamp, 10) : "number" == typeof e.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp = e.CalmDownDeadLineTimeStamp : "object" == typeof e.CalmDownDeadLineTimeStamp && (t.CalmDownDeadLineTimeStamp = new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber())), null != e.bill) {
                    if ("object" != typeof e.bill) throw TypeError(".pokermaster_proto.AdvanceAutoBetRsp.bill: object expected");
                    t.bill = f.pokermaster_proto.BillInfo.fromObject(e.bill)
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
                return null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.pokermaster_proto.ErrorCode[e.code] ? e.code : f.pokermaster_proto.ErrorCode[e.code] : e.code), null != e.usedAutoBetCount && e.hasOwnProperty("usedAutoBetCount") && (o.usedAutoBetCount = e.usedAutoBetCount), null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && ("number" == typeof e.CalmDownLeftSeconds ? o.CalmDownLeftSeconds = t.longs === String ? String(e.CalmDownLeftSeconds) : e.CalmDownLeftSeconds : o.CalmDownLeftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownLeftSeconds) : t.longs === Number ? new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber() : e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && ("number" == typeof e.CalmDownDeadLineTimeStamp ? o.CalmDownDeadLineTimeStamp = t.longs === String ? String(e.CalmDownDeadLineTimeStamp) : e.CalmDownDeadLineTimeStamp : o.CalmDownDeadLineTimeStamp = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownDeadLineTimeStamp) : t.longs === Number ? new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber() : e.CalmDownDeadLineTimeStamp), null != e.bill && e.hasOwnProperty("bill") && (o.bill = f.pokermaster_proto.BillInfo.toObject(e.bill, t)), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.AdvanceAutoBetRsp"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.CancelAdvanceAutoBetReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.pokermaster_proto.CancelAdvanceAutoBetReq ? e : new f.pokermaster_proto.CancelAdvanceAutoBetReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.CancelAdvanceAutoBetReq"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.CancelAdvanceAutoBetRsp; e.pos < o;) {
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
                    case 51e3:
                    case 51001:
                    case 51002:
                    case 51003:
                    case 51004:
                    case 51005:
                    case 51006:
                    case 51007:
                    case 51008:
                    case 51009:
                    case 51010:
                    case 51011:
                    case 51012:
                    case 51013:
                    case 51014:
                    case 51015:
                    case 51016:
                    case 51017:
                    case 51018:
                    case 51019:
                    case 51020:
                    case 51021:
                    case 51022:
                    case 51023:
                    case 51027:
                    case 51024:
                    case 51025:
                    case 51026:
                    case 31117:
                    case 31118:
                    case 31119:
                    case 31120:
                }
                return null != e.is_manual && e.hasOwnProperty("is_manual") && "boolean" != typeof e.is_manual ? "is_manual: boolean expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.CancelAdvanceAutoBetRsp) return e;
                var t = new f.pokermaster_proto.CancelAdvanceAutoBetRsp;
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
                    case 51e3:
                        t.code = 51e3;
                        break;
                    case "LOW_VERSION":
                    case 51001:
                        t.code = 51001;
                        break;
                    case "INVALID_TOKEN":
                    case 51002:
                        t.code = 51002;
                        break;
                    case "SERVER_BUSY":
                    case 51003:
                        t.code = 51003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 51004:
                        t.code = 51004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 51005:
                        t.code = 51005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 51006:
                        t.code = 51006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 51007:
                        t.code = 51007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 51008:
                        t.code = 51008;
                        break;
                    case "NO_BET":
                    case 51009:
                        t.code = 51009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 51010:
                        t.code = 51010;
                        break;
                    case "NO_MONEY":
                    case 51011:
                        t.code = 51011;
                        break;
                    case "BET_BAD_PARAM":
                    case 51012:
                        t.code = 51012;
                        break;
                    case "STOP_SERVICE":
                    case 51013:
                        t.code = 51013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 51014:
                        t.code = 51014;
                        break;
                    case "BET_TOO_SMALL":
                    case 51015:
                        t.code = 51015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 51016:
                        t.code = 51016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 51017:
                        t.code = 51017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 51018:
                        t.code = 51018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 51019:
                        t.code = 51019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 51020:
                        t.code = 51020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 51021:
                        t.code = 51021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 51022:
                        t.code = 51022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 51023:
                        t.code = 51023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 51027:
                        t.code = 51027;
                        break;
                    case "INNER_ERROR":
                    case 51024:
                        t.code = 51024;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 51025:
                        t.code = 51025;
                        break;
                    case "IN_CALM_DOWN":
                    case 51026:
                        t.code = 51026;
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
                        t.code = 31119;
                        break;
                    case "HAS_TICKET_BUY_IN":
                    case 31120:
                        t.code = 31120
                }
                return null != e.is_manual && (t.is_manual = Boolean(e.is_manual)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.is_manual = !1), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.pokermaster_proto.ErrorCode[e.code] ? e.code : f.pokermaster_proto.ErrorCode[e.code] : e.code), null != e.is_manual && e.hasOwnProperty("is_manual") && (o.is_manual = e.is_manual), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.CancelAdvanceAutoBetRsp"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.AdvanceAutoBetSetReq; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.AdvanceAutoBetSetReq) return e;
                var t = new f.pokermaster_proto.AdvanceAutoBetSetReq;
                return null != e.count && (t.count = 0 | e.count), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.count = 0), null != e.count && e.hasOwnProperty("count") && (o.count = e.count), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.AdvanceAutoBetSetReq"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.AdvanceAutoBetSetRsp; e.pos < o;) {
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
                    case 51e3:
                    case 51001:
                    case 51002:
                    case 51003:
                    case 51004:
                    case 51005:
                    case 51006:
                    case 51007:
                    case 51008:
                    case 51009:
                    case 51010:
                    case 51011:
                    case 51012:
                    case 51013:
                    case 51014:
                    case 51015:
                    case 51016:
                    case 51017:
                    case 51018:
                    case 51019:
                    case 51020:
                    case 51021:
                    case 51022:
                    case 51023:
                    case 51027:
                    case 51024:
                    case 51025:
                    case 51026:
                    case 31117:
                    case 31118:
                    case 31119:
                    case 31120:
                }
                return null != e.count && e.hasOwnProperty("count") && !m.isInteger(e.count) ? "count: integer expected" : null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && !(m.isInteger(e.CalmDownLeftSeconds) || e.CalmDownLeftSeconds && m.isInteger(e.CalmDownLeftSeconds.low) && m.isInteger(e.CalmDownLeftSeconds.high)) ? "CalmDownLeftSeconds: integer|Long expected" : null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && !(m.isInteger(e.CalmDownDeadLineTimeStamp) || e.CalmDownDeadLineTimeStamp && m.isInteger(e.CalmDownDeadLineTimeStamp.low) && m.isInteger(e.CalmDownDeadLineTimeStamp.high)) ? "CalmDownDeadLineTimeStamp: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.AdvanceAutoBetSetRsp) return e;
                var t = new f.pokermaster_proto.AdvanceAutoBetSetRsp;
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
                    case 51e3:
                        t.code = 51e3;
                        break;
                    case "LOW_VERSION":
                    case 51001:
                        t.code = 51001;
                        break;
                    case "INVALID_TOKEN":
                    case 51002:
                        t.code = 51002;
                        break;
                    case "SERVER_BUSY":
                    case 51003:
                        t.code = 51003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 51004:
                        t.code = 51004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 51005:
                        t.code = 51005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 51006:
                        t.code = 51006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 51007:
                        t.code = 51007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 51008:
                        t.code = 51008;
                        break;
                    case "NO_BET":
                    case 51009:
                        t.code = 51009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 51010:
                        t.code = 51010;
                        break;
                    case "NO_MONEY":
                    case 51011:
                        t.code = 51011;
                        break;
                    case "BET_BAD_PARAM":
                    case 51012:
                        t.code = 51012;
                        break;
                    case "STOP_SERVICE":
                    case 51013:
                        t.code = 51013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 51014:
                        t.code = 51014;
                        break;
                    case "BET_TOO_SMALL":
                    case 51015:
                        t.code = 51015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 51016:
                        t.code = 51016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 51017:
                        t.code = 51017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 51018:
                        t.code = 51018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 51019:
                        t.code = 51019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 51020:
                        t.code = 51020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 51021:
                        t.code = 51021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 51022:
                        t.code = 51022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 51023:
                        t.code = 51023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 51027:
                        t.code = 51027;
                        break;
                    case "INNER_ERROR":
                    case 51024:
                        t.code = 51024;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 51025:
                        t.code = 51025;
                        break;
                    case "IN_CALM_DOWN":
                    case 51026:
                        t.code = 51026;
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
                        t.code = 31119;
                        break;
                    case "HAS_TICKET_BUY_IN":
                    case 31120:
                        t.code = 31120
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
                return null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.pokermaster_proto.ErrorCode[e.code] ? e.code : f.pokermaster_proto.ErrorCode[e.code] : e.code), null != e.count && e.hasOwnProperty("count") && (o.count = e.count), null != e.CalmDownLeftSeconds && e.hasOwnProperty("CalmDownLeftSeconds") && ("number" == typeof e.CalmDownLeftSeconds ? o.CalmDownLeftSeconds = t.longs === String ? String(e.CalmDownLeftSeconds) : e.CalmDownLeftSeconds : o.CalmDownLeftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownLeftSeconds) : t.longs === Number ? new m.LongBits(e.CalmDownLeftSeconds.low >>> 0, e.CalmDownLeftSeconds.high >>> 0).toNumber() : e.CalmDownLeftSeconds), null != e.CalmDownDeadLineTimeStamp && e.hasOwnProperty("CalmDownDeadLineTimeStamp") && ("number" == typeof e.CalmDownDeadLineTimeStamp ? o.CalmDownDeadLineTimeStamp = t.longs === String ? String(e.CalmDownDeadLineTimeStamp) : e.CalmDownDeadLineTimeStamp : o.CalmDownDeadLineTimeStamp = t.longs === String ? m.Long.prototype.toString.call(e.CalmDownDeadLineTimeStamp) : t.longs === Number ? new m.LongBits(e.CalmDownDeadLineTimeStamp.low >>> 0, e.CalmDownDeadLineTimeStamp.high >>> 0).toNumber() : e.CalmDownDeadLineTimeStamp), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.AdvanceAutoBetSetRsp"
            }, e
        }(), l.StopBetNotify = function() {
            function e(e) {
                if (this.cards = [], this.fisherOuts = [], this.sharkOuts = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.cards = m.emptyArray, e.prototype.canSquint = !1, e.prototype.whoIsLeader = 0, e.prototype.nextRoundEndStamp = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.leftSeconds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.skipRound = !1, e.prototype.fisherOuts = m.emptyArray, e.prototype.sharkOuts = m.emptyArray, e.prototype.fisherLevel = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.sharkLevel = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.cards && e.cards.length)
                    for (var o = 0; o < e.cards.length; ++o) f.pokermaster_proto.CardItem.encode(e.cards[o], t.uint32(10).fork()).ldelim();
                if (null != e.canSquint && Object.hasOwnProperty.call(e, "canSquint") && t.uint32(16).bool(e.canSquint), null != e.whoIsLeader && Object.hasOwnProperty.call(e, "whoIsLeader") && t.uint32(24).int32(e.whoIsLeader), null != e.nextRoundEndStamp && Object.hasOwnProperty.call(e, "nextRoundEndStamp") && t.uint32(32).int64(e.nextRoundEndStamp), null != e.leftSeconds && Object.hasOwnProperty.call(e, "leftSeconds") && t.uint32(40).int64(e.leftSeconds), null != e.skipRound && Object.hasOwnProperty.call(e, "skipRound") && t.uint32(48).bool(e.skipRound), null != e.fisherOuts && e.fisherOuts.length)
                    for (o = 0; o < e.fisherOuts.length; ++o) f.pokermaster_proto.OutItem.encode(e.fisherOuts[o], t.uint32(58).fork()).ldelim();
                if (null != e.sharkOuts && e.sharkOuts.length)
                    for (o = 0; o < e.sharkOuts.length; ++o) f.pokermaster_proto.OutItem.encode(e.sharkOuts[o], t.uint32(66).fork()).ldelim();
                return null != e.fisherLevel && Object.hasOwnProperty.call(e, "fisherLevel") && t.uint32(72).int64(e.fisherLevel), null != e.sharkLevel && Object.hasOwnProperty.call(e, "sharkLevel") && t.uint32(80).int64(e.sharkLevel), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.StopBetNotify; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.cards && n.cards.length || (n.cards = []), n.cards.push(f.pokermaster_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 2:
                            n.canSquint = e.bool();
                            break;
                        case 3:
                            n.whoIsLeader = e.int32();
                            break;
                        case 4:
                            n.nextRoundEndStamp = e.int64();
                            break;
                        case 5:
                            n.leftSeconds = e.int64();
                            break;
                        case 6:
                            n.skipRound = e.bool();
                            break;
                        case 7:
                            n.fisherOuts && n.fisherOuts.length || (n.fisherOuts = []), n.fisherOuts.push(f.pokermaster_proto.OutItem.decode(e, e.uint32()));
                            break;
                        case 8:
                            n.sharkOuts && n.sharkOuts.length || (n.sharkOuts = []), n.sharkOuts.push(f.pokermaster_proto.OutItem.decode(e, e.uint32()));
                            break;
                        case 9:
                            n.fisherLevel = e.int64();
                            break;
                        case 10:
                            n.sharkLevel = e.int64();
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
                if (null != e.cards && e.hasOwnProperty("cards")) {
                    if (!Array.isArray(e.cards)) return "cards: array expected";
                    for (var t = 0; t < e.cards.length; ++t)
                        if (o = f.pokermaster_proto.CardItem.verify(e.cards[t])) return "cards." + o
                }
                if (null != e.canSquint && e.hasOwnProperty("canSquint") && "boolean" != typeof e.canSquint) return "canSquint: boolean expected";
                if (null != e.whoIsLeader && e.hasOwnProperty("whoIsLeader") && !m.isInteger(e.whoIsLeader)) return "whoIsLeader: integer expected";
                if (null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && !(m.isInteger(e.nextRoundEndStamp) || e.nextRoundEndStamp && m.isInteger(e.nextRoundEndStamp.low) && m.isInteger(e.nextRoundEndStamp.high))) return "nextRoundEndStamp: integer|Long expected";
                if (null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && !(m.isInteger(e.leftSeconds) || e.leftSeconds && m.isInteger(e.leftSeconds.low) && m.isInteger(e.leftSeconds.high))) return "leftSeconds: integer|Long expected";
                if (null != e.skipRound && e.hasOwnProperty("skipRound") && "boolean" != typeof e.skipRound) return "skipRound: boolean expected";
                if (null != e.fisherOuts && e.hasOwnProperty("fisherOuts")) {
                    if (!Array.isArray(e.fisherOuts)) return "fisherOuts: array expected";
                    for (t = 0; t < e.fisherOuts.length; ++t)
                        if (o = f.pokermaster_proto.OutItem.verify(e.fisherOuts[t])) return "fisherOuts." + o
                }
                if (null != e.sharkOuts && e.hasOwnProperty("sharkOuts")) {
                    if (!Array.isArray(e.sharkOuts)) return "sharkOuts: array expected";
                    for (t = 0; t < e.sharkOuts.length; ++t) {
                        var o;
                        if (o = f.pokermaster_proto.OutItem.verify(e.sharkOuts[t])) return "sharkOuts." + o
                    }
                }
                return null != e.fisherLevel && e.hasOwnProperty("fisherLevel") && !(m.isInteger(e.fisherLevel) || e.fisherLevel && m.isInteger(e.fisherLevel.low) && m.isInteger(e.fisherLevel.high)) ? "fisherLevel: integer|Long expected" : null != e.sharkLevel && e.hasOwnProperty("sharkLevel") && !(m.isInteger(e.sharkLevel) || e.sharkLevel && m.isInteger(e.sharkLevel.low) && m.isInteger(e.sharkLevel.high)) ? "sharkLevel: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.StopBetNotify) return e;
                var t = new f.pokermaster_proto.StopBetNotify;
                if (e.cards) {
                    if (!Array.isArray(e.cards)) throw TypeError(".pokermaster_proto.StopBetNotify.cards: array expected");
                    t.cards = [];
                    for (var o = 0; o < e.cards.length; ++o) {
                        if ("object" != typeof e.cards[o]) throw TypeError(".pokermaster_proto.StopBetNotify.cards: object expected");
                        t.cards[o] = f.pokermaster_proto.CardItem.fromObject(e.cards[o])
                    }
                }
                if (null != e.canSquint && (t.canSquint = Boolean(e.canSquint)), null != e.whoIsLeader && (t.whoIsLeader = 0 | e.whoIsLeader), null != e.nextRoundEndStamp && (m.Long ? (t.nextRoundEndStamp = m.Long.fromValue(e.nextRoundEndStamp)).unsigned = !1 : "string" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = parseInt(e.nextRoundEndStamp, 10) : "number" == typeof e.nextRoundEndStamp ? t.nextRoundEndStamp = e.nextRoundEndStamp : "object" == typeof e.nextRoundEndStamp && (t.nextRoundEndStamp = new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber())), null != e.leftSeconds && (m.Long ? (t.leftSeconds = m.Long.fromValue(e.leftSeconds)).unsigned = !1 : "string" == typeof e.leftSeconds ? t.leftSeconds = parseInt(e.leftSeconds, 10) : "number" == typeof e.leftSeconds ? t.leftSeconds = e.leftSeconds : "object" == typeof e.leftSeconds && (t.leftSeconds = new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber())), null != e.skipRound && (t.skipRound = Boolean(e.skipRound)), e.fisherOuts) {
                    if (!Array.isArray(e.fisherOuts)) throw TypeError(".pokermaster_proto.StopBetNotify.fisherOuts: array expected");
                    for (t.fisherOuts = [], o = 0; o < e.fisherOuts.length; ++o) {
                        if ("object" != typeof e.fisherOuts[o]) throw TypeError(".pokermaster_proto.StopBetNotify.fisherOuts: object expected");
                        t.fisherOuts[o] = f.pokermaster_proto.OutItem.fromObject(e.fisherOuts[o])
                    }
                }
                if (e.sharkOuts) {
                    if (!Array.isArray(e.sharkOuts)) throw TypeError(".pokermaster_proto.StopBetNotify.sharkOuts: array expected");
                    for (t.sharkOuts = [], o = 0; o < e.sharkOuts.length; ++o) {
                        if ("object" != typeof e.sharkOuts[o]) throw TypeError(".pokermaster_proto.StopBetNotify.sharkOuts: object expected");
                        t.sharkOuts[o] = f.pokermaster_proto.OutItem.fromObject(e.sharkOuts[o])
                    }
                }
                return null != e.fisherLevel && (m.Long ? (t.fisherLevel = m.Long.fromValue(e.fisherLevel)).unsigned = !1 : "string" == typeof e.fisherLevel ? t.fisherLevel = parseInt(e.fisherLevel, 10) : "number" == typeof e.fisherLevel ? t.fisherLevel = e.fisherLevel : "object" == typeof e.fisherLevel && (t.fisherLevel = new m.LongBits(e.fisherLevel.low >>> 0, e.fisherLevel.high >>> 0).toNumber())), null != e.sharkLevel && (m.Long ? (t.sharkLevel = m.Long.fromValue(e.sharkLevel)).unsigned = !1 : "string" == typeof e.sharkLevel ? t.sharkLevel = parseInt(e.sharkLevel, 10) : "number" == typeof e.sharkLevel ? t.sharkLevel = e.sharkLevel : "object" == typeof e.sharkLevel && (t.sharkLevel = new m.LongBits(e.sharkLevel.low >>> 0, e.sharkLevel.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.cards = [], o.fisherOuts = [], o.sharkOuts = []), t.defaults) {
                    if (o.canSquint = !1, o.whoIsLeader = 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.nextRoundEndStamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.nextRoundEndStamp = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !1), o.leftSeconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.leftSeconds = t.longs === String ? "0" : 0, o.skipRound = !1, m.Long ? (n = new m.Long(0, 0, !1), o.fisherLevel = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.fisherLevel = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !1), o.sharkLevel = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.sharkLevel = t.longs === String ? "0" : 0
                }
                if (e.cards && e.cards.length) {
                    o.cards = [];
                    for (var r = 0; r < e.cards.length; ++r) o.cards[r] = f.pokermaster_proto.CardItem.toObject(e.cards[r], t)
                }
                if (null != e.canSquint && e.hasOwnProperty("canSquint") && (o.canSquint = e.canSquint), null != e.whoIsLeader && e.hasOwnProperty("whoIsLeader") && (o.whoIsLeader = e.whoIsLeader), null != e.nextRoundEndStamp && e.hasOwnProperty("nextRoundEndStamp") && ("number" == typeof e.nextRoundEndStamp ? o.nextRoundEndStamp = t.longs === String ? String(e.nextRoundEndStamp) : e.nextRoundEndStamp : o.nextRoundEndStamp = t.longs === String ? m.Long.prototype.toString.call(e.nextRoundEndStamp) : t.longs === Number ? new m.LongBits(e.nextRoundEndStamp.low >>> 0, e.nextRoundEndStamp.high >>> 0).toNumber() : e.nextRoundEndStamp), null != e.leftSeconds && e.hasOwnProperty("leftSeconds") && ("number" == typeof e.leftSeconds ? o.leftSeconds = t.longs === String ? String(e.leftSeconds) : e.leftSeconds : o.leftSeconds = t.longs === String ? m.Long.prototype.toString.call(e.leftSeconds) : t.longs === Number ? new m.LongBits(e.leftSeconds.low >>> 0, e.leftSeconds.high >>> 0).toNumber() : e.leftSeconds), null != e.skipRound && e.hasOwnProperty("skipRound") && (o.skipRound = e.skipRound), e.fisherOuts && e.fisherOuts.length)
                    for (o.fisherOuts = [], r = 0; r < e.fisherOuts.length; ++r) o.fisherOuts[r] = f.pokermaster_proto.OutItem.toObject(e.fisherOuts[r], t);
                if (e.sharkOuts && e.sharkOuts.length)
                    for (o.sharkOuts = [], r = 0; r < e.sharkOuts.length; ++r) o.sharkOuts[r] = f.pokermaster_proto.OutItem.toObject(e.sharkOuts[r], t);
                return null != e.fisherLevel && e.hasOwnProperty("fisherLevel") && ("number" == typeof e.fisherLevel ? o.fisherLevel = t.longs === String ? String(e.fisherLevel) : e.fisherLevel : o.fisherLevel = t.longs === String ? m.Long.prototype.toString.call(e.fisherLevel) : t.longs === Number ? new m.LongBits(e.fisherLevel.low >>> 0, e.fisherLevel.high >>> 0).toNumber() : e.fisherLevel), null != e.sharkLevel && e.hasOwnProperty("sharkLevel") && ("number" == typeof e.sharkLevel ? o.sharkLevel = t.longs === String ? String(e.sharkLevel) : e.sharkLevel : o.sharkLevel = t.longs === String ? m.Long.prototype.toString.call(e.sharkLevel) : t.longs === Number ? new m.LongBits(e.sharkLevel.low >>> 0, e.sharkLevel.high >>> 0).toNumber() : e.sharkLevel), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.StopBetNotify"
            }, e
        }(), l.OutItem = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.OutsId = 0, e.prototype.card = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.OutsId && Object.hasOwnProperty.call(e, "OutsId") && t.uint32(8).int32(e.OutsId), null != e.card && Object.hasOwnProperty.call(e, "card") && f.pokermaster_proto.CardItem.encode(e.card, t.uint32(18).fork()).ldelim(), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.OutItem; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.OutsId = e.int32();
                            break;
                        case 2:
                            n.card = f.pokermaster_proto.CardItem.decode(e, e.uint32());
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
                if (null != e.OutsId && e.hasOwnProperty("OutsId") && !m.isInteger(e.OutsId)) return "OutsId: integer expected";
                if (null != e.card && e.hasOwnProperty("card")) {
                    var t = f.pokermaster_proto.CardItem.verify(e.card);
                    if (t) return "card." + t
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.OutItem) return e;
                var t = new f.pokermaster_proto.OutItem;
                if (null != e.OutsId && (t.OutsId = 0 | e.OutsId), null != e.card) {
                    if ("object" != typeof e.card) throw TypeError(".pokermaster_proto.OutItem.card: object expected");
                    t.card = f.pokermaster_proto.CardItem.fromObject(e.card)
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.OutsId = 0, o.card = null), null != e.OutsId && e.hasOwnProperty("OutsId") && (o.OutsId = e.OutsId), null != e.card && e.hasOwnProperty("card") && (o.card = f.pokermaster_proto.CardItem.toObject(e.card, t)), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.OutItem"
            }, e
        }(), l.BetOptionsOdds = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.option = 0, e.prototype.odds = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.limitRed = m.Long ? m.Long.fromBits(0, 0, !0) : 0, e.prototype.winRate = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = d.create()), null != e.option && Object.hasOwnProperty.call(e, "option") && t.uint32(8).int32(e.option), null != e.odds && Object.hasOwnProperty.call(e, "odds") && t.uint32(16).int64(e.odds), null != e.limitRed && Object.hasOwnProperty.call(e, "limitRed") && t.uint32(24).uint64(e.limitRed), null != e.winRate && Object.hasOwnProperty.call(e, "winRate") && t.uint32(33).double(e.winRate), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.BetOptionsOdds; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.option = e.int32();
                            break;
                        case 2:
                            n.odds = e.int64();
                            break;
                        case 3:
                            n.limitRed = e.uint64();
                            break;
                        case 4:
                            n.winRate = e.double();
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
                    case 300:
                    case 301:
                    case 302:
                    case 303:
                    case 304:
                    case 305:
                    case 399:
                }
                return null != e.odds && e.hasOwnProperty("odds") && !(m.isInteger(e.odds) || e.odds && m.isInteger(e.odds.low) && m.isInteger(e.odds.high)) ? "odds: integer|Long expected" : null != e.limitRed && e.hasOwnProperty("limitRed") && !(m.isInteger(e.limitRed) || e.limitRed && m.isInteger(e.limitRed.low) && m.isInteger(e.limitRed.high)) ? "limitRed: integer|Long expected" : null != e.winRate && e.hasOwnProperty("winRate") && "number" != typeof e.winRate ? "winRate: number expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.BetOptionsOdds) return e;
                var t = new f.pokermaster_proto.BetOptionsOdds;
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
                    case "FISHER_WIN":
                    case 101:
                        t.option = 101;
                        break;
                    case "SHARK_WIN":
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
                    case "FIVE_SAN_SHUN_TONG":
                    case 303:
                        t.option = 303;
                        break;
                    case "FIVE_GOURD":
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
                return null != e.odds && (m.Long ? (t.odds = m.Long.fromValue(e.odds)).unsigned = !1 : "string" == typeof e.odds ? t.odds = parseInt(e.odds, 10) : "number" == typeof e.odds ? t.odds = e.odds : "object" == typeof e.odds && (t.odds = new m.LongBits(e.odds.low >>> 0, e.odds.high >>> 0).toNumber())), null != e.limitRed && (m.Long ? (t.limitRed = m.Long.fromValue(e.limitRed)).unsigned = !0 : "string" == typeof e.limitRed ? t.limitRed = parseInt(e.limitRed, 10) : "number" == typeof e.limitRed ? t.limitRed = e.limitRed : "object" == typeof e.limitRed && (t.limitRed = new m.LongBits(e.limitRed.low >>> 0, e.limitRed.high >>> 0).toNumber(!0))), null != e.winRate && (t.winRate = Number(e.winRate)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if (t.defaults) {
                    if (o.option = t.enums === String ? "BetZoneOption_DUMMY" : 0, m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.odds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.odds = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !0), o.limitRed = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.limitRed = t.longs === String ? "0" : 0, o.winRate = 0
                }
                return null != e.option && e.hasOwnProperty("option") && (o.option = t.enums === String ? void 0 === f.pokermaster_proto.BetZoneOption[e.option] ? e.option : f.pokermaster_proto.BetZoneOption[e.option] : e.option), null != e.odds && e.hasOwnProperty("odds") && ("number" == typeof e.odds ? o.odds = t.longs === String ? String(e.odds) : e.odds : o.odds = t.longs === String ? m.Long.prototype.toString.call(e.odds) : t.longs === Number ? new m.LongBits(e.odds.low >>> 0, e.odds.high >>> 0).toNumber() : e.odds), null != e.limitRed && e.hasOwnProperty("limitRed") && ("number" == typeof e.limitRed ? o.limitRed = t.longs === String ? String(e.limitRed) : e.limitRed : o.limitRed = t.longs === String ? m.Long.prototype.toString.call(e.limitRed) : t.longs === Number ? new m.LongBits(e.limitRed.low >>> 0, e.limitRed.high >>> 0).toNumber(!0) : e.limitRed), null != e.winRate && e.hasOwnProperty("winRate") && (o.winRate = t.json && !isFinite(e.winRate) ? String(e.winRate) : e.winRate), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.BetOptionsOdds"
            }, e
        }(), l.BetReviewReq = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.BetReviewReq; e.pos < o;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.pokermaster_proto.BetReviewReq ? e : new f.pokermaster_proto.BetReviewReq
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.BetReviewReq"
            }, e
        }(), l.BetReviewRsp = function() {
            function e(e) {
                if (this.reviewed = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.code = 0, e.prototype.reviewed = m.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code), null != e.reviewed && e.reviewed.length)
                    for (var o = 0; o < e.reviewed.length; ++o) f.pokermaster_proto.BetReview.encode(e.reviewed[o], t.uint32(18).fork()).ldelim();
                return t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.BetReviewRsp; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.code = e.int32();
                            break;
                        case 2:
                            n.reviewed && n.reviewed.length || (n.reviewed = []), n.reviewed.push(f.pokermaster_proto.BetReview.decode(e, e.uint32()));
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
                    case 51e3:
                    case 51001:
                    case 51002:
                    case 51003:
                    case 51004:
                    case 51005:
                    case 51006:
                    case 51007:
                    case 51008:
                    case 51009:
                    case 51010:
                    case 51011:
                    case 51012:
                    case 51013:
                    case 51014:
                    case 51015:
                    case 51016:
                    case 51017:
                    case 51018:
                    case 51019:
                    case 51020:
                    case 51021:
                    case 51022:
                    case 51023:
                    case 51027:
                    case 51024:
                    case 51025:
                    case 51026:
                    case 31117:
                    case 31118:
                    case 31119:
                    case 31120:
                }
                if (null != e.reviewed && e.hasOwnProperty("reviewed")) {
                    if (!Array.isArray(e.reviewed)) return "reviewed: array expected";
                    for (var t = 0; t < e.reviewed.length; ++t) {
                        var o = f.pokermaster_proto.BetReview.verify(e.reviewed[t]);
                        if (o) return "reviewed." + o
                    }
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.BetReviewRsp) return e;
                var t = new f.pokermaster_proto.BetReviewRsp;
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
                    case 51e3:
                        t.code = 51e3;
                        break;
                    case "LOW_VERSION":
                    case 51001:
                        t.code = 51001;
                        break;
                    case "INVALID_TOKEN":
                    case 51002:
                        t.code = 51002;
                        break;
                    case "SERVER_BUSY":
                    case 51003:
                        t.code = 51003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 51004:
                        t.code = 51004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 51005:
                        t.code = 51005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 51006:
                        t.code = 51006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 51007:
                        t.code = 51007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 51008:
                        t.code = 51008;
                        break;
                    case "NO_BET":
                    case 51009:
                        t.code = 51009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 51010:
                        t.code = 51010;
                        break;
                    case "NO_MONEY":
                    case 51011:
                        t.code = 51011;
                        break;
                    case "BET_BAD_PARAM":
                    case 51012:
                        t.code = 51012;
                        break;
                    case "STOP_SERVICE":
                    case 51013:
                        t.code = 51013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 51014:
                        t.code = 51014;
                        break;
                    case "BET_TOO_SMALL":
                    case 51015:
                        t.code = 51015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 51016:
                        t.code = 51016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 51017:
                        t.code = 51017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 51018:
                        t.code = 51018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 51019:
                        t.code = 51019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 51020:
                        t.code = 51020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 51021:
                        t.code = 51021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 51022:
                        t.code = 51022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 51023:
                        t.code = 51023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 51027:
                        t.code = 51027;
                        break;
                    case "INNER_ERROR":
                    case 51024:
                        t.code = 51024;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 51025:
                        t.code = 51025;
                        break;
                    case "IN_CALM_DOWN":
                    case 51026:
                        t.code = 51026;
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
                        t.code = 31119;
                        break;
                    case "HAS_TICKET_BUY_IN":
                    case 31120:
                        t.code = 31120
                }
                if (e.reviewed) {
                    if (!Array.isArray(e.reviewed)) throw TypeError(".pokermaster_proto.BetReviewRsp.reviewed: array expected");
                    t.reviewed = [];
                    for (var o = 0; o < e.reviewed.length; ++o) {
                        if ("object" != typeof e.reviewed[o]) throw TypeError(".pokermaster_proto.BetReviewRsp.reviewed: object expected");
                        t.reviewed[o] = f.pokermaster_proto.BetReview.fromObject(e.reviewed[o])
                    }
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.reviewed = []), t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.pokermaster_proto.ErrorCode[e.code] ? e.code : f.pokermaster_proto.ErrorCode[e.code] : e.code), e.reviewed && e.reviewed.length) {
                    o.reviewed = [];
                    for (var n = 0; n < e.reviewed.length; ++n) o.reviewed[n] = f.pokermaster_proto.BetReview.toObject(e.reviewed[n], t)
                }
                return o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.BetReviewRsp"
            }, e
        }(), l.BetReview = function() {
            function e(e) {
                if (this.fisherCard = [], this.sharkCard = [], this.pubCard = [], this.detail = [], this.winOps = [], e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
            }
            return e.prototype.totalBet = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.totalWin = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.prototype.fisherCard = m.emptyArray, e.prototype.sharkCard = m.emptyArray, e.prototype.pubCard = m.emptyArray, e.prototype.detail = m.emptyArray, e.prototype.winOps = m.emptyArray, e.prototype.level = m.Long ? m.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = d.create()), null != e.totalBet && Object.hasOwnProperty.call(e, "totalBet") && t.uint32(8).int64(e.totalBet), null != e.totalWin && Object.hasOwnProperty.call(e, "totalWin") && t.uint32(16).int64(e.totalWin), null != e.fisherCard && e.fisherCard.length)
                    for (var o = 0; o < e.fisherCard.length; ++o) f.pokermaster_proto.CardItem.encode(e.fisherCard[o], t.uint32(26).fork()).ldelim();
                if (null != e.sharkCard && e.sharkCard.length)
                    for (o = 0; o < e.sharkCard.length; ++o) f.pokermaster_proto.CardItem.encode(e.sharkCard[o], t.uint32(34).fork()).ldelim();
                if (null != e.pubCard && e.pubCard.length)
                    for (o = 0; o < e.pubCard.length; ++o) f.pokermaster_proto.CardItem.encode(e.pubCard[o], t.uint32(42).fork()).ldelim();
                if (null != e.detail && e.detail.length)
                    for (o = 0; o < e.detail.length; ++o) f.pokermaster_proto.BetDetail.encode(e.detail[o], t.uint32(50).fork()).ldelim();
                if (null != e.winOps && e.winOps.length) {
                    for (t.uint32(58).fork(), o = 0; o < e.winOps.length; ++o) t.int32(e.winOps[o]);
                    t.ldelim()
                }
                return null != e.level && Object.hasOwnProperty.call(e, "level") && t.uint32(64).int64(e.level), t
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof p || (e = p.create(e));
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.BetReview; e.pos < o;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            n.totalBet = e.int64();
                            break;
                        case 2:
                            n.totalWin = e.int64();
                            break;
                        case 3:
                            n.fisherCard && n.fisherCard.length || (n.fisherCard = []), n.fisherCard.push(f.pokermaster_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 4:
                            n.sharkCard && n.sharkCard.length || (n.sharkCard = []), n.sharkCard.push(f.pokermaster_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 5:
                            n.pubCard && n.pubCard.length || (n.pubCard = []), n.pubCard.push(f.pokermaster_proto.CardItem.decode(e, e.uint32()));
                            break;
                        case 6:
                            n.detail && n.detail.length || (n.detail = []), n.detail.push(f.pokermaster_proto.BetDetail.decode(e, e.uint32()));
                            break;
                        case 7:
                            if (n.winOps && n.winOps.length || (n.winOps = []), 2 == (7 & r))
                                for (var a = e.uint32() + e.pos; e.pos < a;) n.winOps.push(e.int32());
                            else n.winOps.push(e.int32());
                            break;
                        case 8:
                            n.level = e.int64();
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
                if (null != e.totalBet && e.hasOwnProperty("totalBet") && !(m.isInteger(e.totalBet) || e.totalBet && m.isInteger(e.totalBet.low) && m.isInteger(e.totalBet.high))) return "totalBet: integer|Long expected";
                if (null != e.totalWin && e.hasOwnProperty("totalWin") && !(m.isInteger(e.totalWin) || e.totalWin && m.isInteger(e.totalWin.low) && m.isInteger(e.totalWin.high))) return "totalWin: integer|Long expected";
                if (null != e.fisherCard && e.hasOwnProperty("fisherCard")) {
                    if (!Array.isArray(e.fisherCard)) return "fisherCard: array expected";
                    for (var t = 0; t < e.fisherCard.length; ++t)
                        if (o = f.pokermaster_proto.CardItem.verify(e.fisherCard[t])) return "fisherCard." + o
                }
                if (null != e.sharkCard && e.hasOwnProperty("sharkCard")) {
                    if (!Array.isArray(e.sharkCard)) return "sharkCard: array expected";
                    for (t = 0; t < e.sharkCard.length; ++t)
                        if (o = f.pokermaster_proto.CardItem.verify(e.sharkCard[t])) return "sharkCard." + o
                }
                if (null != e.pubCard && e.hasOwnProperty("pubCard")) {
                    if (!Array.isArray(e.pubCard)) return "pubCard: array expected";
                    for (t = 0; t < e.pubCard.length; ++t)
                        if (o = f.pokermaster_proto.CardItem.verify(e.pubCard[t])) return "pubCard." + o
                }
                if (null != e.detail && e.hasOwnProperty("detail")) {
                    if (!Array.isArray(e.detail)) return "detail: array expected";
                    for (t = 0; t < e.detail.length; ++t) {
                        var o;
                        if (o = f.pokermaster_proto.BetDetail.verify(e.detail[t])) return "detail." + o
                    }
                }
                if (null != e.winOps && e.hasOwnProperty("winOps")) {
                    if (!Array.isArray(e.winOps)) return "winOps: array expected";
                    for (t = 0; t < e.winOps.length; ++t) switch (e.winOps[t]) {
                        default:
                            return "winOps: enum value[] expected";
                        case 0:
                        case 100:
                        case 101:
                        case 102:
                        case 103:
                        case 199:
                        case 300:
                        case 301:
                        case 302:
                        case 303:
                        case 304:
                        case 305:
                        case 399:
                    }
                }
                return null != e.level && e.hasOwnProperty("level") && !(m.isInteger(e.level) || e.level && m.isInteger(e.level.low) && m.isInteger(e.level.high)) ? "level: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.BetReview) return e;
                var t = new f.pokermaster_proto.BetReview;
                if (null != e.totalBet && (m.Long ? (t.totalBet = m.Long.fromValue(e.totalBet)).unsigned = !1 : "string" == typeof e.totalBet ? t.totalBet = parseInt(e.totalBet, 10) : "number" == typeof e.totalBet ? t.totalBet = e.totalBet : "object" == typeof e.totalBet && (t.totalBet = new m.LongBits(e.totalBet.low >>> 0, e.totalBet.high >>> 0).toNumber())), null != e.totalWin && (m.Long ? (t.totalWin = m.Long.fromValue(e.totalWin)).unsigned = !1 : "string" == typeof e.totalWin ? t.totalWin = parseInt(e.totalWin, 10) : "number" == typeof e.totalWin ? t.totalWin = e.totalWin : "object" == typeof e.totalWin && (t.totalWin = new m.LongBits(e.totalWin.low >>> 0, e.totalWin.high >>> 0).toNumber())), e.fisherCard) {
                    if (!Array.isArray(e.fisherCard)) throw TypeError(".pokermaster_proto.BetReview.fisherCard: array expected");
                    t.fisherCard = [];
                    for (var o = 0; o < e.fisherCard.length; ++o) {
                        if ("object" != typeof e.fisherCard[o]) throw TypeError(".pokermaster_proto.BetReview.fisherCard: object expected");
                        t.fisherCard[o] = f.pokermaster_proto.CardItem.fromObject(e.fisherCard[o])
                    }
                }
                if (e.sharkCard) {
                    if (!Array.isArray(e.sharkCard)) throw TypeError(".pokermaster_proto.BetReview.sharkCard: array expected");
                    for (t.sharkCard = [], o = 0; o < e.sharkCard.length; ++o) {
                        if ("object" != typeof e.sharkCard[o]) throw TypeError(".pokermaster_proto.BetReview.sharkCard: object expected");
                        t.sharkCard[o] = f.pokermaster_proto.CardItem.fromObject(e.sharkCard[o])
                    }
                }
                if (e.pubCard) {
                    if (!Array.isArray(e.pubCard)) throw TypeError(".pokermaster_proto.BetReview.pubCard: array expected");
                    for (t.pubCard = [], o = 0; o < e.pubCard.length; ++o) {
                        if ("object" != typeof e.pubCard[o]) throw TypeError(".pokermaster_proto.BetReview.pubCard: object expected");
                        t.pubCard[o] = f.pokermaster_proto.CardItem.fromObject(e.pubCard[o])
                    }
                }
                if (e.detail) {
                    if (!Array.isArray(e.detail)) throw TypeError(".pokermaster_proto.BetReview.detail: array expected");
                    for (t.detail = [], o = 0; o < e.detail.length; ++o) {
                        if ("object" != typeof e.detail[o]) throw TypeError(".pokermaster_proto.BetReview.detail: object expected");
                        t.detail[o] = f.pokermaster_proto.BetDetail.fromObject(e.detail[o])
                    }
                }
                if (e.winOps) {
                    if (!Array.isArray(e.winOps)) throw TypeError(".pokermaster_proto.BetReview.winOps: array expected");
                    for (t.winOps = [], o = 0; o < e.winOps.length; ++o) switch (e.winOps[o]) {
                        default:
                            if ("number" == typeof e.winOps[o]) {
                                t.winOps[o] = e.winOps[o];
                                break
                            }
                        case "BetZoneOption_DUMMY":
                        case 0:
                            t.winOps[o] = 0;
                            break;
                        case "WIN_BEGIN":
                        case 100:
                            t.winOps[o] = 100;
                            break;
                        case "FISHER_WIN":
                        case 101:
                            t.winOps[o] = 101;
                            break;
                        case "SHARK_WIN":
                        case 102:
                            t.winOps[o] = 102;
                            break;
                        case "EQUAL":
                        case 103:
                            t.winOps[o] = 103;
                            break;
                        case "WIN_END":
                        case 199:
                            t.winOps[o] = 199;
                            break;
                        case "FIVE_BEGIN":
                        case 300:
                            t.winOps[o] = 300;
                            break;
                        case "FIVE_NONE_1DUI":
                        case 301:
                            t.winOps[o] = 301;
                            break;
                        case "FIVE_2DUI":
                        case 302:
                            t.winOps[o] = 302;
                            break;
                        case "FIVE_SAN_SHUN_TONG":
                        case 303:
                            t.winOps[o] = 303;
                            break;
                        case "FIVE_GOURD":
                        case 304:
                            t.winOps[o] = 304;
                            break;
                        case "FIVE_KING_TONG_HUA_SHUN_4":
                        case 305:
                            t.winOps[o] = 305;
                            break;
                        case "FIVE_END":
                        case 399:
                            t.winOps[o] = 399
                    }
                }
                return null != e.level && (m.Long ? (t.level = m.Long.fromValue(e.level)).unsigned = !1 : "string" == typeof e.level ? t.level = parseInt(e.level, 10) : "number" == typeof e.level ? t.level = e.level : "object" == typeof e.level && (t.level = new m.LongBits(e.level.low >>> 0, e.level.high >>> 0).toNumber())), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                if ((t.arrays || t.defaults) && (o.fisherCard = [], o.sharkCard = [], o.pubCard = [], o.detail = [], o.winOps = []), t.defaults) {
                    if (m.Long) {
                        var n = new m.Long(0, 0, !1);
                        o.totalBet = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                    } else o.totalBet = t.longs === String ? "0" : 0;
                    m.Long ? (n = new m.Long(0, 0, !1), o.totalWin = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.totalWin = t.longs === String ? "0" : 0, m.Long ? (n = new m.Long(0, 0, !1), o.level = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n) : o.level = t.longs === String ? "0" : 0
                }
                if (null != e.totalBet && e.hasOwnProperty("totalBet") && ("number" == typeof e.totalBet ? o.totalBet = t.longs === String ? String(e.totalBet) : e.totalBet : o.totalBet = t.longs === String ? m.Long.prototype.toString.call(e.totalBet) : t.longs === Number ? new m.LongBits(e.totalBet.low >>> 0, e.totalBet.high >>> 0).toNumber() : e.totalBet), null != e.totalWin && e.hasOwnProperty("totalWin") && ("number" == typeof e.totalWin ? o.totalWin = t.longs === String ? String(e.totalWin) : e.totalWin : o.totalWin = t.longs === String ? m.Long.prototype.toString.call(e.totalWin) : t.longs === Number ? new m.LongBits(e.totalWin.low >>> 0, e.totalWin.high >>> 0).toNumber() : e.totalWin), e.fisherCard && e.fisherCard.length) {
                    o.fisherCard = [];
                    for (var r = 0; r < e.fisherCard.length; ++r) o.fisherCard[r] = f.pokermaster_proto.CardItem.toObject(e.fisherCard[r], t)
                }
                if (e.sharkCard && e.sharkCard.length)
                    for (o.sharkCard = [], r = 0; r < e.sharkCard.length; ++r) o.sharkCard[r] = f.pokermaster_proto.CardItem.toObject(e.sharkCard[r], t);
                if (e.pubCard && e.pubCard.length)
                    for (o.pubCard = [], r = 0; r < e.pubCard.length; ++r) o.pubCard[r] = f.pokermaster_proto.CardItem.toObject(e.pubCard[r], t);
                if (e.detail && e.detail.length)
                    for (o.detail = [], r = 0; r < e.detail.length; ++r) o.detail[r] = f.pokermaster_proto.BetDetail.toObject(e.detail[r], t);
                if (e.winOps && e.winOps.length)
                    for (o.winOps = [], r = 0; r < e.winOps.length; ++r) o.winOps[r] = t.enums === String ? void 0 === f.pokermaster_proto.BetZoneOption[e.winOps[r]] ? e.winOps[r] : f.pokermaster_proto.BetZoneOption[e.winOps[r]] : e.winOps[r];
                return null != e.level && e.hasOwnProperty("level") && ("number" == typeof e.level ? o.level = t.longs === String ? String(e.level) : e.level : o.level = t.longs === String ? m.Long.prototype.toString.call(e.level) : t.longs === Number ? new m.LongBits(e.level.low >>> 0, e.level.high >>> 0).toNumber() : e.level), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.BetReview"
            }, e
        }(), l.ReadyGameNotify = function() {
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.ReadyGameNotify; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.ReadyGameNotify) return e;
                var t = new f.pokermaster_proto.ReadyGameNotify;
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
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.ReadyGameNotify"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.UserPointsChangeNotice; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.UserPointsChangeNotice) return e;
                var t = new f.pokermaster_proto.UserPointsChangeNotice;
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
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.UserPointsChangeNotice"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.AdvanceAutoBetAddReq; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.AdvanceAutoBetAddReq) return e;
                var t = new f.pokermaster_proto.AdvanceAutoBetAddReq;
                return null != e.count && (t.count = 0 | e.count), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.count = 0), null != e.count && e.hasOwnProperty("count") && (o.count = e.count), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.AdvanceAutoBetAddReq"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.AdvanceAutoBetAddRsp; e.pos < o;) {
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
                    case 51e3:
                    case 51001:
                    case 51002:
                    case 51003:
                    case 51004:
                    case 51005:
                    case 51006:
                    case 51007:
                    case 51008:
                    case 51009:
                    case 51010:
                    case 51011:
                    case 51012:
                    case 51013:
                    case 51014:
                    case 51015:
                    case 51016:
                    case 51017:
                    case 51018:
                    case 51019:
                    case 51020:
                    case 51021:
                    case 51022:
                    case 51023:
                    case 51027:
                    case 51024:
                    case 51025:
                    case 51026:
                    case 31117:
                    case 31118:
                    case 31119:
                    case 31120:
                }
                return null != e.autoBetCount && e.hasOwnProperty("autoBetCount") && !m.isInteger(e.autoBetCount) ? "autoBetCount: integer expected" : null != e.usedAutoBetCount && e.hasOwnProperty("usedAutoBetCount") && !m.isInteger(e.usedAutoBetCount) ? "usedAutoBetCount: integer expected" : null != e.numberHandAdded && e.hasOwnProperty("numberHandAdded") && !m.isInteger(e.numberHandAdded) ? "numberHandAdded: integer expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.AdvanceAutoBetAddRsp) return e;
                var t = new f.pokermaster_proto.AdvanceAutoBetAddRsp;
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
                    case 51e3:
                        t.code = 51e3;
                        break;
                    case "LOW_VERSION":
                    case 51001:
                        t.code = 51001;
                        break;
                    case "INVALID_TOKEN":
                    case 51002:
                        t.code = 51002;
                        break;
                    case "SERVER_BUSY":
                    case 51003:
                        t.code = 51003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 51004:
                        t.code = 51004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 51005:
                        t.code = 51005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 51006:
                        t.code = 51006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 51007:
                        t.code = 51007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 51008:
                        t.code = 51008;
                        break;
                    case "NO_BET":
                    case 51009:
                        t.code = 51009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 51010:
                        t.code = 51010;
                        break;
                    case "NO_MONEY":
                    case 51011:
                        t.code = 51011;
                        break;
                    case "BET_BAD_PARAM":
                    case 51012:
                        t.code = 51012;
                        break;
                    case "STOP_SERVICE":
                    case 51013:
                        t.code = 51013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 51014:
                        t.code = 51014;
                        break;
                    case "BET_TOO_SMALL":
                    case 51015:
                        t.code = 51015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 51016:
                        t.code = 51016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 51017:
                        t.code = 51017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 51018:
                        t.code = 51018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 51019:
                        t.code = 51019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 51020:
                        t.code = 51020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 51021:
                        t.code = 51021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 51022:
                        t.code = 51022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 51023:
                        t.code = 51023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 51027:
                        t.code = 51027;
                        break;
                    case "INNER_ERROR":
                    case 51024:
                        t.code = 51024;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 51025:
                        t.code = 51025;
                        break;
                    case "IN_CALM_DOWN":
                    case 51026:
                        t.code = 51026;
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
                        t.code = 31119;
                        break;
                    case "HAS_TICKET_BUY_IN":
                    case 31120:
                        t.code = 31120
                }
                return null != e.autoBetCount && (t.autoBetCount = 0 | e.autoBetCount), null != e.usedAutoBetCount && (t.usedAutoBetCount = 0 | e.usedAutoBetCount), null != e.numberHandAdded && (t.numberHandAdded = 0 | e.numberHandAdded), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0, o.autoBetCount = 0, o.usedAutoBetCount = 0, o.numberHandAdded = 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.pokermaster_proto.ErrorCode[e.code] ? e.code : f.pokermaster_proto.ErrorCode[e.code] : e.code), null != e.autoBetCount && e.hasOwnProperty("autoBetCount") && (o.autoBetCount = e.autoBetCount), null != e.usedAutoBetCount && e.hasOwnProperty("usedAutoBetCount") && (o.usedAutoBetCount = e.usedAutoBetCount), null != e.numberHandAdded && e.hasOwnProperty("numberHandAdded") && (o.numberHandAdded = e.numberHandAdded), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.AdvanceAutoBetAddRsp"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.BuyInReq; e.pos < o;) {
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
                if (e instanceof f.pokermaster_proto.BuyInReq) return e;
                var t = new f.pokermaster_proto.BuyInReq;
                return null != e.currency_type && (t.currency_type = e.currency_type >>> 0), null != e.ticket_id && (t.ticket_id = String(e.ticket_id)), t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.currency_type = 0, o.ticket_id = ""), null != e.currency_type && e.hasOwnProperty("currency_type") && (o.currency_type = e.currency_type), null != e.ticket_id && e.hasOwnProperty("ticket_id") && (o.ticket_id = e.ticket_id), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.BuyInReq"
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
                for (var o = void 0 === t ? e.len : e.pos + t, n = new f.pokermaster_proto.BuyInResp; e.pos < o;) {
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
                    case 51e3:
                    case 51001:
                    case 51002:
                    case 51003:
                    case 51004:
                    case 51005:
                    case 51006:
                    case 51007:
                    case 51008:
                    case 51009:
                    case 51010:
                    case 51011:
                    case 51012:
                    case 51013:
                    case 51014:
                    case 51015:
                    case 51016:
                    case 51017:
                    case 51018:
                    case 51019:
                    case 51020:
                    case 51021:
                    case 51022:
                    case 51023:
                    case 51027:
                    case 51024:
                    case 51025:
                    case 51026:
                    case 31117:
                    case 31118:
                    case 31119:
                    case 31120:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.pokermaster_proto.BuyInResp) return e;
                var t = new f.pokermaster_proto.BuyInResp;
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
                    case 51e3:
                        t.code = 51e3;
                        break;
                    case "LOW_VERSION":
                    case 51001:
                        t.code = 51001;
                        break;
                    case "INVALID_TOKEN":
                    case 51002:
                        t.code = 51002;
                        break;
                    case "SERVER_BUSY":
                    case 51003:
                        t.code = 51003;
                        break;
                    case "WITHOUT_LOGIN":
                    case 51004:
                        t.code = 51004;
                        break;
                    case "ROOM_NOT_MATCH":
                    case 51005:
                        t.code = 51005;
                        break;
                    case "ROOM_NOT_EXIST":
                    case 51006:
                        t.code = 51006;
                        break;
                    case "BET_EXCEED_LIMIT":
                    case 51007:
                        t.code = 51007;
                        break;
                    case "ROOM_PLAYER_LIMIT":
                    case 51008:
                        t.code = 51008;
                        break;
                    case "NO_BET":
                    case 51009:
                        t.code = 51009;
                        break;
                    case "BET_AMOUNT_NOT_MATCH":
                    case 51010:
                        t.code = 51010;
                        break;
                    case "NO_MONEY":
                    case 51011:
                        t.code = 51011;
                        break;
                    case "BET_BAD_PARAM":
                    case 51012:
                        t.code = 51012;
                        break;
                    case "STOP_SERVICE":
                    case 51013:
                        t.code = 51013;
                        break;
                    case "NOT_BET_WHEN_AUTO_BET":
                    case 51014:
                        t.code = 51014;
                        break;
                    case "BET_TOO_SMALL":
                    case 51015:
                        t.code = 51015;
                        break;
                    case "BET_COUNT_LIMIT":
                    case 51016:
                        t.code = 51016;
                        break;
                    case "AUTO_BET_LIMIT":
                    case 51017:
                        t.code = 51017;
                        break;
                    case "TOO_MANY_PEOPLE":
                    case 51018:
                        t.code = 51018;
                        break;
                    case "BAD_REQ_PARAM":
                    case 51019:
                        t.code = 51019;
                        break;
                    case "NO_SET_ADVANCE_AUTO_BET":
                    case 51020:
                        t.code = 51020;
                        break;
                    case "AUTO_BET_COUNT_LIMIT":
                    case 51021:
                        t.code = 51021;
                        break;
                    case "AUTO_BET_NO_MONEY":
                    case 51022:
                        t.code = 51022;
                        break;
                    case "AUTO_BET_EXCEED_LIMIT":
                    case 51023:
                        t.code = 51023;
                        break;
                    case "REACH_LIMIT_BET":
                    case 51027:
                        t.code = 51027;
                        break;
                    case "INNER_ERROR":
                    case 51024:
                        t.code = 51024;
                        break;
                    case "ROOM_SYSTEM_FORCE_CLOSED":
                    case 51025:
                        t.code = 51025;
                        break;
                    case "IN_CALM_DOWN":
                    case 51026:
                        t.code = 51026;
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
                        t.code = 31119;
                        break;
                    case "HAS_TICKET_BUY_IN":
                    case 31120:
                        t.code = 31120
                }
                return t
            }, e.toObject = function(e, t) {
                t || (t = {});
                var o = {};
                return t.defaults && (o.code = t.enums === String ? "ErrorCode_DUMMY" : 0), null != e.code && e.hasOwnProperty("code") && (o.code = t.enums === String ? void 0 === f.pokermaster_proto.ErrorCode[e.code] ? e.code : f.pokermaster_proto.ErrorCode[e.code] : e.code), o
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/pokermaster_proto.BuyInResp"
            }, e
        }(), l), n.exports = f, r = e("default", n.exports)
    }), (() => ({
        "protobufjs/minimal.js": n
    })))
}