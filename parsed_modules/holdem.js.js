import * as n from "./cjs-loader.mjs.js";
import * as o from "./minimal.js";

function main() {
    let r;
    e("default", void 0);
    const i = e("__cjsMetaURL", t.meta.url);
    n.define(i, (function(t, n, o, i, u) {
        var a, s, c, d = n("protobufjs/minimal.js"),
            l = d.Reader,
            p = d.Writer,
            f = d.util,
            m = d.roots.default || (d.roots.default = {});
        m.holdem = ((c = {}).Action = (a = {}, (s = Object.create(a))[a[0] = "NONE_ACTION"] = 0, s[a[1] = "CHECK"] = 1, s[a[2] = "CALL"] = 2, s[a[3] = "BET"] = 3, s[a[4] = "FOLD"] = 4, s[a[5] = "RAISE"] = 5, s[a[6] = "ALL_IN"] = 6, s[a[11] = "OPT_FIRST_CHECK"] = 11, s), c.PlayerState = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "NONE_STATE"] = 0, t[e[20] = "WAITING"] = 20, t[e[21] = "FORCE_BLIND"] = 21, t[e[22] = "PAUSE"] = 22, t[e[23] = "FORCE_ANTE"] = 23, t[e[100] = "PLAYER_STATE_PREPARE"] = 100, t[e[101] = "PLAYER_STATE_ZOMBIE"] = 101, t[e[102] = "PLAYER_STATE_HU_WAIT"] = 102, t
        }(), c.Pong = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Pong", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.Pong; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.RealIp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RealIp", e.prototype.ip = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.ip && e.hasOwnProperty("ip") && t.uint32(10).string(e.ip), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.RealIp; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ip = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.UserTokenReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserTokenReq", e.prototype.userId = 0, e.prototype.token = "", e.prototype.hideHole = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.token && e.hasOwnProperty("token") && t.uint32(18).string(e.token), null != e.hideHole && e.hasOwnProperty("hideHole") && t.uint32(24).bool(e.hideHole), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.UserTokenReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.userId = e.uint32();
                            break;
                        case 2:
                            o.token = e.string();
                            break;
                        case 3:
                            o.hideHole = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.UserTokenRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserTokenRes", e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && e.hasOwnProperty("code") && t.uint32(8).int32(e.code), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.UserTokenRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.EnterRoomReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "EnterRoomReq", e.prototype.roomId = 0, e.prototype.level = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.level && e.hasOwnProperty("level") && t.uint32(16).uint32(e.level), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.EnterRoomReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.level = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.EnterRoomRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "EnterRoomRes", e.prototype.code = 0, e.prototype.roomId = 0, e.prototype.mode = 0, e.prototype.sb = 0, e.prototype.bb = 0, e.prototype.ante = 0, e.prototype.flags = 0, e.prototype.minTakein = 0, e.prototype.maxTakein = 0, e.prototype.mttId = 0, e.prototype.seatCount = 0, e.prototype.mttStatus = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.code && e.hasOwnProperty("code") && t.uint32(8).int32(e.code), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.mode && e.hasOwnProperty("mode") && t.uint32(24).int32(e.mode), null != e.sb && e.hasOwnProperty("sb") && t.uint32(37).float(e.sb), null != e.bb && e.hasOwnProperty("bb") && t.uint32(45).float(e.bb), null != e.ante && e.hasOwnProperty("ante") && t.uint32(53).float(e.ante), null != e.flags && e.hasOwnProperty("flags") && t.uint32(56).int32(e.flags), null != e.minTakein && e.hasOwnProperty("minTakein") && t.uint32(69).float(e.minTakein), null != e.maxTakein && e.hasOwnProperty("maxTakein") && t.uint32(77).float(e.maxTakein), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(80).uint32(e.mttId), null != e.seatCount && e.hasOwnProperty("seatCount") && t.uint32(88).int32(e.seatCount), null != e.mttStatus && e.hasOwnProperty("mttStatus") && t.uint32(96).int32(e.mttStatus), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.EnterRoomRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        case 2:
                            o.roomId = e.uint32();
                            break;
                        case 3:
                            o.mode = e.int32();
                            break;
                        case 4:
                            o.sb = e.float();
                            break;
                        case 5:
                            o.bb = e.float();
                            break;
                        case 6:
                            o.ante = e.float();
                            break;
                        case 7:
                            o.flags = e.int32();
                            break;
                        case 8:
                            o.minTakein = e.float();
                            break;
                        case 9:
                            o.maxTakein = e.float();
                            break;
                        case 10:
                            o.mttId = e.uint32();
                            break;
                        case 11:
                            o.seatCount = e.int32();
                            break;
                        case 12:
                            o.mttStatus = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.RoomSnapshotReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RoomSnapshotReq", e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.RoomSnapshotReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.RoomSnapshotMsg = function() {
            function e(e) {
                if (this.pots = [], this.players = [], this.visitors = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RoomSnapshotMsg", e.prototype.roomId = 0, e.prototype.pots = f.emptyArray, e.prototype.players = f.emptyArray, e.prototype.dealerPos = 0, e.prototype.straddlePos = 0, e.prototype.boardCards = f.newBuffer([]), e.prototype.holeCards = f.newBuffer([]), e.prototype.currAct = null, e.prototype.visitors = f.emptyArray, e.prototype.state = 0, e.prototype.bbPos = 0, e.prototype.sbPos = 0, e.prototype.code = 0, e.prototype.mttId = 0, e.prototype.startTime = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.pots && e.pots.length) {
                    t.uint32(26).fork();
                    for (var n = 0; n < e.pots.length; ++n) t.double(e.pots[n]);
                    t.ldelim()
                }
                if (null != e.players && e.players.length)
                    for (n = 0; n < e.players.length; ++n) m.holdem.RoomSnapshotMsg.Player.encode(e.players[n], t.uint32(34).fork()).ldelim();
                if (null != e.dealerPos && e.hasOwnProperty("dealerPos") && t.uint32(40).int32(e.dealerPos), null != e.straddlePos && e.hasOwnProperty("straddlePos") && t.uint32(48).int32(e.straddlePos), null != e.boardCards && e.hasOwnProperty("boardCards") && t.uint32(58).bytes(e.boardCards), null != e.holeCards && e.hasOwnProperty("holeCards") && t.uint32(66).bytes(e.holeCards), null != e.currAct && e.hasOwnProperty("currAct") && m.holdem.RoomSnapshotMsg.CurrentAct.encode(e.currAct, t.uint32(74).fork()).ldelim(), null != e.visitors && e.visitors.length)
                    for (n = 0; n < e.visitors.length; ++n) m.holdem.RoomSnapshotMsg.Visitor.encode(e.visitors[n], t.uint32(82).fork()).ldelim();
                return null != e.state && e.hasOwnProperty("state") && t.uint32(88).int32(e.state), null != e.bbPos && e.hasOwnProperty("bbPos") && t.uint32(96).int32(e.bbPos), null != e.sbPos && e.hasOwnProperty("sbPos") && t.uint32(104).int32(e.sbPos), null != e.code && e.hasOwnProperty("code") && t.uint32(112).int32(e.code), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(120).uint32(e.mttId), null != e.startTime && e.hasOwnProperty("startTime") && t.uint32(128).int64(e.startTime), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.RoomSnapshotMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 3:
                            if (o.pots && o.pots.length || (o.pots = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.pots.push(e.double());
                            else o.pots.push(e.double());
                            break;
                        case 4:
                            o.players && o.players.length || (o.players = []), o.players.push(m.holdem.RoomSnapshotMsg.Player.decode(e, e.uint32()));
                            break;
                        case 5:
                            o.dealerPos = e.int32();
                            break;
                        case 6:
                            o.straddlePos = e.int32();
                            break;
                        case 7:
                            o.boardCards = e.bytes();
                            break;
                        case 8:
                            o.holeCards = e.bytes();
                            break;
                        case 9:
                            o.currAct = m.holdem.RoomSnapshotMsg.CurrentAct.decode(e, e.uint32());
                            break;
                        case 10:
                            o.visitors && o.visitors.length || (o.visitors = []), o.visitors.push(m.holdem.RoomSnapshotMsg.Visitor.decode(e, e.uint32()));
                            break;
                        case 11:
                            o.state = e.int32();
                            break;
                        case 12:
                            o.bbPos = e.int32();
                            break;
                        case 13:
                            o.sbPos = e.int32();
                            break;
                        case 14:
                            o.code = e.int32();
                            break;
                        case 15:
                            o.mttId = e.uint32();
                            break;
                        case 16:
                            o.startTime = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e.Player = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "Player", e.prototype.userId = 0, e.prototype.nickName = "", e.prototype.seatNum = 0, e.prototype.deskCoin = 0, e.prototype.leftCoin = 0, e.prototype.state = 0, e.prototype.flags = 0, e.prototype.holeCards = f.newBuffer([]), e.prototype.gender = 0, e.prototype.stateTurn = 0, e.prototype.showCards = f.newBuffer([]), e.prototype.avatar = "", e.prototype.avatarFrame = 0, e.prototype.areaCode = "", e.prototype.area = "", e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.nickName && e.hasOwnProperty("nickName") && t.uint32(18).string(e.nickName), null != e.seatNum && e.hasOwnProperty("seatNum") && t.uint32(24).int32(e.seatNum), null != e.deskCoin && e.hasOwnProperty("deskCoin") && t.uint32(33).double(e.deskCoin), null != e.leftCoin && e.hasOwnProperty("leftCoin") && t.uint32(41).double(e.leftCoin), null != e.state && e.hasOwnProperty("state") && t.uint32(56).int32(e.state), null != e.flags && e.hasOwnProperty("flags") && t.uint32(64).uint32(e.flags), null != e.holeCards && e.hasOwnProperty("holeCards") && t.uint32(74).bytes(e.holeCards), null != e.gender && e.hasOwnProperty("gender") && t.uint32(80).int32(e.gender), null != e.stateTurn && e.hasOwnProperty("stateTurn") && t.uint32(88).int32(e.stateTurn), null != e.showCards && e.hasOwnProperty("showCards") && t.uint32(98).bytes(e.showCards), null != e.avatar && e.hasOwnProperty("avatar") && t.uint32(106).string(e.avatar), null != e.avatarFrame && e.hasOwnProperty("avatarFrame") && t.uint32(112).int32(e.avatarFrame), null != e.areaCode && e.hasOwnProperty("areaCode") && t.uint32(122).string(e.areaCode), null != e.area && e.hasOwnProperty("area") && t.uint32(130).string(e.area), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof l || (e = l.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.RoomSnapshotMsg.Player; e.pos < n;) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                            case 1:
                                o.userId = e.uint32();
                                break;
                            case 2:
                                o.nickName = e.string();
                                break;
                            case 3:
                                o.seatNum = e.int32();
                                break;
                            case 4:
                                o.deskCoin = e.double();
                                break;
                            case 5:
                                o.leftCoin = e.double();
                                break;
                            case 7:
                                o.state = e.int32();
                                break;
                            case 8:
                                o.flags = e.uint32();
                                break;
                            case 9:
                                o.holeCards = e.bytes();
                                break;
                            case 10:
                                o.gender = e.int32();
                                break;
                            case 11:
                                o.stateTurn = e.int32();
                                break;
                            case 12:
                                o.showCards = e.bytes();
                                break;
                            case 13:
                                o.avatar = e.string();
                                break;
                            case 14:
                                o.avatarFrame = e.int32();
                                break;
                            case 15:
                                o.areaCode = e.string();
                                break;
                            case 16:
                                o.area = e.string();
                                break;
                            default:
                                e.skipType(7 & r)
                        }
                    }
                    return o
                }, e.decodeDelimited = function(e) {
                    return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
                }, e
            }(), e.Visitor = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "Visitor", e.prototype.userId = 0, e.prototype.nickName = "", e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.nickName && e.hasOwnProperty("nickName") && t.uint32(18).string(e.nickName), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof l || (e = l.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.RoomSnapshotMsg.Visitor; e.pos < n;) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                            case 1:
                                o.userId = e.uint32();
                                break;
                            case 2:
                                o.nickName = e.string();
                                break;
                            default:
                                e.skipType(7 & r)
                        }
                    }
                    return o
                }, e.decodeDelimited = function(e) {
                    return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
                }, e
            }(), e.CurrentAct = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "CurrentAct", e.prototype.seatNum = 0, e.prototype.optAction = 0, e.prototype.optCoin = 0, e.prototype.minBetCoin = 0, e.prototype.countdownTotal = 0, e.prototype.countdownLeft = 0, e.prototype.maxBetCoin = 0, e.prototype.extendTime = !1, e.prototype.lastRaisePos = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.seatNum && e.hasOwnProperty("seatNum") && t.uint32(8).int32(e.seatNum), null != e.optAction && e.hasOwnProperty("optAction") && t.uint32(16).int32(e.optAction), null != e.optCoin && e.hasOwnProperty("optCoin") && t.uint32(25).double(e.optCoin), null != e.minBetCoin && e.hasOwnProperty("minBetCoin") && t.uint32(33).double(e.minBetCoin), null != e.countdownTotal && e.hasOwnProperty("countdownTotal") && t.uint32(40).int32(e.countdownTotal), null != e.countdownLeft && e.hasOwnProperty("countdownLeft") && t.uint32(48).int32(e.countdownLeft), null != e.maxBetCoin && e.hasOwnProperty("maxBetCoin") && t.uint32(57).double(e.maxBetCoin), null != e.extendTime && e.hasOwnProperty("extendTime") && t.uint32(64).bool(e.extendTime), null != e.lastRaisePos && e.hasOwnProperty("lastRaisePos") && t.uint32(72).int32(e.lastRaisePos), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof l || (e = l.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.RoomSnapshotMsg.CurrentAct; e.pos < n;) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                            case 1:
                                o.seatNum = e.int32();
                                break;
                            case 2:
                                o.optAction = e.int32();
                                break;
                            case 3:
                                o.optCoin = e.double();
                                break;
                            case 4:
                                o.minBetCoin = e.double();
                                break;
                            case 5:
                                o.countdownTotal = e.int32();
                                break;
                            case 6:
                                o.countdownLeft = e.int32();
                                break;
                            case 7:
                                o.maxBetCoin = e.double();
                                break;
                            case 8:
                                o.extendTime = e.bool();
                                break;
                            case 9:
                                o.lastRaisePos = e.int32();
                                break;
                            default:
                                e.skipType(7 & r)
                        }
                    }
                    return o
                }, e.decodeDelimited = function(e) {
                    return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
                }, e
            }(), e
        }(), c.HoleCardsMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "HoleCardsMsg", e.prototype.roomId = 0, e.prototype.cards = f.newBuffer([]), e.prototype.userId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.cards && e.hasOwnProperty("cards") && t.uint32(18).bytes(e.cards), null != e.userId && e.hasOwnProperty("userId") && t.uint32(24).uint32(e.userId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.HoleCardsMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.cards = e.bytes();
                            break;
                        case 3:
                            o.userId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.BoardCardsMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BoardCardsMsg", e.prototype.roomId = 0, e.prototype.roomState = 0, e.prototype.cards = f.newBuffer([]), e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.roomState && e.hasOwnProperty("roomState") && t.uint32(16).int32(e.roomState), null != e.cards && e.hasOwnProperty("cards") && t.uint32(26).bytes(e.cards), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.BoardCardsMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.roomState = e.int32();
                            break;
                        case 3:
                            o.cards = e.bytes();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.SitDownReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SitDownReq", e.prototype.roomId = 0, e.prototype.seatNum = 0, e.prototype.takeInCoin = 0, e.prototype.lat = 0, e.prototype.lng = 0, e.prototype.itemId = f.Long ? f.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.seatNum && e.hasOwnProperty("seatNum") && t.uint32(16).int32(e.seatNum), null != e.takeInCoin && e.hasOwnProperty("takeInCoin") && t.uint32(25).double(e.takeInCoin), null != e.lat && e.hasOwnProperty("lat") && t.uint32(37).float(e.lat), null != e.lng && e.hasOwnProperty("lng") && t.uint32(45).float(e.lng), null != e.itemId && e.hasOwnProperty("itemId") && t.uint32(48).uint64(e.itemId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.SitDownReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.seatNum = e.int32();
                            break;
                        case 3:
                            o.takeInCoin = e.double();
                            break;
                        case 4:
                            o.lat = e.float();
                            break;
                        case 5:
                            o.lng = e.float();
                            break;
                        case 6:
                            o.itemId = e.uint64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.SitDownRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SitDownRes", e.prototype.roomId = 0, e.prototype.seatNum = 0, e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.seatNum && e.hasOwnProperty("seatNum") && t.uint32(16).int32(e.seatNum), null != e.code && e.hasOwnProperty("code") && t.uint32(24).int32(e.code), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.SitDownRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.seatNum = e.int32();
                            break;
                        case 3:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.LeaveRoomReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "LeaveRoomReq", e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.LeaveRoomReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.LeaveRoomRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "LeaveRoomRes", e.prototype.roomId = 0, e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && t.uint32(16).int32(e.code), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.LeaveRoomRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.NeedMoreCoinMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "NeedMoreCoinMsg", e.prototype.userId = 0, e.prototype.roomId = 0, e.prototype.moreCoin = 0, e.prototype.targetCoin = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.moreCoin && e.hasOwnProperty("moreCoin") && t.uint32(25).double(e.moreCoin), null != e.targetCoin && e.hasOwnProperty("targetCoin") && t.uint32(33).double(e.targetCoin), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.NeedMoreCoinMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.userId = e.uint32();
                            break;
                        case 2:
                            o.roomId = e.uint32();
                            break;
                        case 3:
                            o.moreCoin = e.double();
                            break;
                        case 4:
                            o.targetCoin = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.SeatOccupiedMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SeatOccupiedMsg", e.prototype.roomId = 0, e.prototype.userId = 0, e.prototype.nickName = "", e.prototype.seatNum = 0, e.prototype.coin = 0, e.prototype.gender = 0, e.prototype.avatar = "", e.prototype.avatarFrame = 0, e.prototype.areaCode = "", e.prototype.area = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), null != e.nickName && e.hasOwnProperty("nickName") && t.uint32(26).string(e.nickName), null != e.seatNum && e.hasOwnProperty("seatNum") && t.uint32(32).int32(e.seatNum), null != e.coin && e.hasOwnProperty("coin") && t.uint32(41).double(e.coin), null != e.gender && e.hasOwnProperty("gender") && t.uint32(48).int32(e.gender), null != e.avatar && e.hasOwnProperty("avatar") && t.uint32(58).string(e.avatar), null != e.avatarFrame && e.hasOwnProperty("avatarFrame") && t.uint32(64).int32(e.avatarFrame), null != e.areaCode && e.hasOwnProperty("areaCode") && t.uint32(74).string(e.areaCode), null != e.area && e.hasOwnProperty("area") && t.uint32(82).string(e.area), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.SeatOccupiedMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.userId = e.uint32();
                            break;
                        case 3:
                            o.nickName = e.string();
                            break;
                        case 4:
                            o.seatNum = e.int32();
                            break;
                        case 5:
                            o.coin = e.double();
                            break;
                        case 6:
                            o.gender = e.int32();
                            break;
                        case 7:
                            o.avatar = e.string();
                            break;
                        case 8:
                            o.avatarFrame = e.int32();
                            break;
                        case 9:
                            o.areaCode = e.string();
                            break;
                        case 10:
                            o.area = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.SeatEmptyMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SeatEmptyMsg", e.prototype.roomId = 0, e.prototype.seatNum = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.seatNum && e.hasOwnProperty("seatNum") && t.uint32(16).int32(e.seatNum), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.SeatEmptyMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.seatNum = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.PlayerActionMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "PlayerActionMsg", e.prototype.roomId = 0, e.prototype.seatNum = 0, e.prototype.action = 0, e.prototype.deskCoin = 0, e.prototype.leftCoin = 0, e.prototype.sittingOut = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.seatNum && e.hasOwnProperty("seatNum") && t.uint32(16).int32(e.seatNum), null != e.action && e.hasOwnProperty("action") && t.uint32(24).int32(e.action), null != e.deskCoin && e.hasOwnProperty("deskCoin") && t.uint32(33).double(e.deskCoin), null != e.leftCoin && e.hasOwnProperty("leftCoin") && t.uint32(41).double(e.leftCoin), null != e.sittingOut && e.hasOwnProperty("sittingOut") && t.uint32(48).bool(e.sittingOut), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.PlayerActionMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.seatNum = e.int32();
                            break;
                        case 3:
                            o.action = e.int32();
                            break;
                        case 4:
                            o.deskCoin = e.double();
                            break;
                        case 5:
                            o.leftCoin = e.double();
                            break;
                        case 6:
                            o.sittingOut = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.PlayerStateMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "PlayerStateMsg", e.prototype.roomId = 0, e.prototype.seatNum = 0, e.prototype.state = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.seatNum && e.hasOwnProperty("seatNum") && t.uint32(16).int32(e.seatNum), null != e.state && e.hasOwnProperty("state") && t.uint32(24).int32(e.state), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.PlayerStateMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.seatNum = e.int32();
                            break;
                        case 3:
                            o.state = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.DealerPosMsg = function() {
            function e(e) {
                if (this.seats = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "DealerPosMsg", e.prototype.roomId = 0, e.prototype.dealerPos = 0, e.prototype.straddlePos = 0, e.prototype.seats = f.emptyArray, e.prototype.sbPos = 0, e.prototype.bbPos = 0, e.prototype.pot = 0, e.prototype.startTime = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.roomBlindIndex = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.dealerPos && e.hasOwnProperty("dealerPos") && t.uint32(16).int32(e.dealerPos), null != e.straddlePos && e.hasOwnProperty("straddlePos") && t.uint32(24).int32(e.straddlePos), null != e.seats && e.seats.length)
                    for (var n = 0; n < e.seats.length; ++n) m.holdem.DealerPosMsg.SeatInfo.encode(e.seats[n], t.uint32(34).fork()).ldelim();
                return null != e.sbPos && e.hasOwnProperty("sbPos") && t.uint32(40).int32(e.sbPos), null != e.bbPos && e.hasOwnProperty("bbPos") && t.uint32(48).int32(e.bbPos), null != e.pot && e.hasOwnProperty("pot") && t.uint32(57).double(e.pot), null != e.startTime && e.hasOwnProperty("startTime") && t.uint32(64).int64(e.startTime), null != e.roomBlindIndex && e.hasOwnProperty("roomBlindIndex") && t.uint32(72).int32(e.roomBlindIndex), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.DealerPosMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.dealerPos = e.int32();
                            break;
                        case 3:
                            o.straddlePos = e.int32();
                            break;
                        case 4:
                            o.seats && o.seats.length || (o.seats = []), o.seats.push(m.holdem.DealerPosMsg.SeatInfo.decode(e, e.uint32()));
                            break;
                        case 5:
                            o.sbPos = e.int32();
                            break;
                        case 6:
                            o.bbPos = e.int32();
                            break;
                        case 7:
                            o.pot = e.double();
                            break;
                        case 8:
                            o.startTime = e.int64();
                            break;
                        case 9:
                            o.roomBlindIndex = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e.SeatInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "SeatInfo", e.prototype.seatNum = 0, e.prototype.deskCoin = 0, e.prototype.leftCoin = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.seatNum && e.hasOwnProperty("seatNum") && t.uint32(8).int32(e.seatNum), null != e.deskCoin && e.hasOwnProperty("deskCoin") && t.uint32(25).double(e.deskCoin), null != e.leftCoin && e.hasOwnProperty("leftCoin") && t.uint32(33).double(e.leftCoin), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof l || (e = l.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.DealerPosMsg.SeatInfo; e.pos < n;) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                            case 1:
                                o.seatNum = e.int32();
                                break;
                            case 3:
                                o.deskCoin = e.double();
                                break;
                            case 4:
                                o.leftCoin = e.double();
                                break;
                            default:
                                e.skipType(7 & r)
                        }
                    }
                    return o
                }, e.decodeDelimited = function(e) {
                    return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
                }, e
            }(), e
        }(), c.ActionReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "ActionReq", e.prototype.roomId = 0, e.prototype.action = 0, e.prototype.coin = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.action && e.hasOwnProperty("action") && t.uint32(16).int32(e.action), null != e.coin && e.hasOwnProperty("coin") && t.uint32(25).double(e.coin), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.ActionReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.action = e.int32();
                            break;
                        case 3:
                            o.coin = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.ActionRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "ActionRes", e.prototype.roomId = 0, e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && t.uint32(16).int32(e.code), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.ActionRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.NeedActionMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "NeedActionMsg", e.prototype.roomId = 0, e.prototype.optAction = 0, e.prototype.optCoin = 0, e.prototype.seatNum = 0, e.prototype.countDown = 0, e.prototype.minBetCoin = 0, e.prototype.maxBetCoin = 0, e.prototype.lastRaisePos = 0, e.prototype.deskCoin = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.optAction && e.hasOwnProperty("optAction") && t.uint32(16).int32(e.optAction), null != e.optCoin && e.hasOwnProperty("optCoin") && t.uint32(25).double(e.optCoin), null != e.seatNum && e.hasOwnProperty("seatNum") && t.uint32(32).int32(e.seatNum), null != e.countDown && e.hasOwnProperty("countDown") && t.uint32(40).int32(e.countDown), null != e.minBetCoin && e.hasOwnProperty("minBetCoin") && t.uint32(49).double(e.minBetCoin), null != e.maxBetCoin && e.hasOwnProperty("maxBetCoin") && t.uint32(57).double(e.maxBetCoin), null != e.lastRaisePos && e.hasOwnProperty("lastRaisePos") && t.uint32(64).int32(e.lastRaisePos), null != e.deskCoin && e.hasOwnProperty("deskCoin") && t.uint32(73).double(e.deskCoin), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.NeedActionMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.optAction = e.int32();
                            break;
                        case 3:
                            o.optCoin = e.double();
                            break;
                        case 4:
                            o.seatNum = e.int32();
                            break;
                        case 5:
                            o.countDown = e.int32();
                            break;
                        case 6:
                            o.minBetCoin = e.double();
                            break;
                        case 7:
                            o.maxBetCoin = e.double();
                            break;
                        case 8:
                            o.lastRaisePos = e.int32();
                            break;
                        case 9:
                            o.deskCoin = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.ShowdownMsg = function() {
            function e(e) {
                if (this.players = [], this.winners = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "ShowdownMsg", e.prototype.roomId = 0, e.prototype.players = f.emptyArray, e.prototype.winners = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.players && e.players.length)
                    for (var n = 0; n < e.players.length; ++n) m.holdem.ShowdownMsg.Player.encode(e.players[n], t.uint32(18).fork()).ldelim();
                if (null != e.winners && e.winners.length) {
                    for (t.uint32(26).fork(), n = 0; n < e.winners.length; ++n) t.int32(e.winners[n]);
                    t.ldelim()
                }
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.ShowdownMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.players && o.players.length || (o.players = []), o.players.push(m.holdem.ShowdownMsg.Player.decode(e, e.uint32()));
                            break;
                        case 3:
                            if (o.winners && o.winners.length || (o.winners = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.winners.push(e.int32());
                            else o.winners.push(e.int32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e.Player = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "Player", e.prototype.seatNum = 0, e.prototype.holeCards = f.newBuffer([]), e.prototype.rank = 0, e.prototype.rankCards = f.newBuffer([]), e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.seatNum && e.hasOwnProperty("seatNum") && t.uint32(8).int32(e.seatNum), null != e.holeCards && e.hasOwnProperty("holeCards") && t.uint32(18).bytes(e.holeCards), null != e.rank && e.hasOwnProperty("rank") && t.uint32(24).int32(e.rank), null != e.rankCards && e.hasOwnProperty("rankCards") && t.uint32(34).bytes(e.rankCards), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof l || (e = l.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.ShowdownMsg.Player; e.pos < n;) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                            case 1:
                                o.seatNum = e.int32();
                                break;
                            case 2:
                                o.holeCards = e.bytes();
                                break;
                            case 3:
                                o.rank = e.int32();
                                break;
                            case 4:
                                o.rankCards = e.bytes();
                                break;
                            default:
                                e.skipType(7 & r)
                        }
                    }
                    return o
                }, e.decodeDelimited = function(e) {
                    return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
                }, e
            }(), e
        }(), c.RoundResultMsg = function() {
            function e(e) {
                if (this.players = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RoundResultMsg", e.prototype.roomId = 0, e.prototype.players = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.players && e.players.length)
                    for (var n = 0; n < e.players.length; ++n) m.holdem.RoundResultMsg.Player.encode(e.players[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.RoundResultMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.players && o.players.length || (o.players = []), o.players.push(m.holdem.RoundResultMsg.Player.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e.Player = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "Player", e.prototype.seatNum = 0, e.prototype.profit = 0, e.prototype.leftCoins = 0, e.prototype.getPot = !1, e.prototype.winPot = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.seatNum && e.hasOwnProperty("seatNum") && t.uint32(8).int32(e.seatNum), null != e.profit && e.hasOwnProperty("profit") && t.uint32(17).double(e.profit), null != e.leftCoins && e.hasOwnProperty("leftCoins") && t.uint32(25).double(e.leftCoins), null != e.getPot && e.hasOwnProperty("getPot") && t.uint32(32).bool(e.getPot), null != e.winPot && e.hasOwnProperty("winPot") && t.uint32(41).double(e.winPot), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof l || (e = l.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.RoundResultMsg.Player; e.pos < n;) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                            case 1:
                                o.seatNum = e.int32();
                                break;
                            case 2:
                                o.profit = e.double();
                                break;
                            case 3:
                                o.leftCoins = e.double();
                                break;
                            case 4:
                                o.getPot = e.bool();
                                break;
                            case 5:
                                o.winPot = e.double();
                                break;
                            default:
                                e.skipType(7 & r)
                        }
                    }
                    return o
                }, e.decodeDelimited = function(e) {
                    return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
                }, e
            }(), e
        }(), c.PotsMsg = function() {
            function e(e) {
                if (this.pots = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "PotsMsg", e.prototype.roomId = 0, e.prototype.pots = f.emptyArray, e.prototype.lastShared = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.pots && e.pots.length) {
                    t.uint32(18).fork();
                    for (var n = 0; n < e.pots.length; ++n) t.double(e.pots[n]);
                    t.ldelim()
                }
                return null != e.lastShared && e.hasOwnProperty("lastShared") && t.uint32(24).bool(e.lastShared), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.PotsMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            if (o.pots && o.pots.length || (o.pots = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.pots.push(e.double());
                            else o.pots.push(e.double());
                            break;
                        case 3:
                            o.lastShared = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.PauseGameReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "PauseGameReq", e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.PauseGameReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.PauseGameRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "PauseGameRes", e.prototype.roomId = 0, e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && t.uint32(16).int32(e.code), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.PauseGameRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.ResumeGameReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "ResumeGameReq", e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.ResumeGameReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.ResumeGameRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "ResumeGameRes", e.prototype.roomId = 0, e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && t.uint32(16).int32(e.code), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.ResumeGameRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.StandbyReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "StandbyReq", e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.StandbyReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.StandbyRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "StandbyRes", e.prototype.roomId = 0, e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && t.uint32(16).int32(e.code), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.StandbyRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.RoomBillReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RoomBillReq", e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.RoomBillReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.RoomBillRes = function() {
            function e(e) {
                if (this.bills = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RoomBillRes", e.prototype.roomId = 0, e.prototype.code = 0, e.prototype.bills = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && t.uint32(16).int32(e.code), null != e.bills && e.bills.length)
                    for (var n = 0; n < e.bills.length; ++n) m.holdem.RoomBillRes.RoomBill.encode(e.bills[n], t.uint32(26).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.RoomBillRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        case 3:
                            o.bills && o.bills.length || (o.bills = []), o.bills.push(m.holdem.RoomBillRes.RoomBill.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e.RoomBill = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "RoomBill", e.prototype.userId = 0, e.prototype.nickname = "", e.prototype.initCoin = 0, e.prototype.profit = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.nickname && e.hasOwnProperty("nickname") && t.uint32(18).string(e.nickname), null != e.initCoin && e.hasOwnProperty("initCoin") && t.uint32(25).double(e.initCoin), null != e.profit && e.hasOwnProperty("profit") && t.uint32(33).double(e.profit), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof l || (e = l.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.RoomBillRes.RoomBill; e.pos < n;) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                            case 1:
                                o.userId = e.uint32();
                                break;
                            case 2:
                                o.nickname = e.string();
                                break;
                            case 3:
                                o.initCoin = e.double();
                                break;
                            case 4:
                                o.profit = e.double();
                                break;
                            default:
                                e.skipType(7 & r)
                        }
                    }
                    return o
                }, e.decodeDelimited = function(e) {
                    return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
                }, e
            }(), e
        }(), c.AutoPlayMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "AutoPlayMsg", e.prototype.roomId = 0, e.prototype.userId = 0, e.prototype.autoPlay = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), null != e.autoPlay && e.hasOwnProperty("autoPlay") && t.uint32(24).bool(e.autoPlay), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.AutoPlayMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.userId = e.uint32();
                            break;
                        case 3:
                            o.autoPlay = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.CancelAutoPlayReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "CancelAutoPlayReq", e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.CancelAutoPlayReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.CancelAutoPlayRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "CancelAutoPlayRes", e.prototype.roomId = 0, e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && t.uint32(16).int32(e.code), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.CancelAutoPlayRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.HoleCardListMsg = function() {
            function e(e) {
                if (this.playerList = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "HoleCardListMsg", e.prototype.roomId = 0, e.prototype.playerList = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.playerList && e.playerList.length) {
                    t.uint32(18).fork();
                    for (var n = 0; n < e.playerList.length; ++n) t.uint32(e.playerList[n]);
                    t.ldelim()
                }
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.HoleCardListMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            if (o.playerList && o.playerList.length || (o.playerList = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.playerList.push(e.uint32());
                            else o.playerList.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.PlayerLeaveMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "PlayerLeaveMsg", e.prototype.roomId = 0, e.prototype.userId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.PlayerLeaveMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.userId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.OtherRoomMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "OtherRoomMsg", e.prototype.roomId = 0, e.prototype.categary = 0, e.prototype.isAof = !1, e.prototype.levelId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.categary && e.hasOwnProperty("categary") && t.uint32(16).uint32(e.categary), null != e.isAof && e.hasOwnProperty("isAof") && t.uint32(24).bool(e.isAof), null != e.levelId && e.hasOwnProperty("levelId") && t.uint32(32).uint32(e.levelId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.OtherRoomMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.categary = e.uint32();
                            break;
                        case 3:
                            o.isAof = e.bool();
                            break;
                        case 4:
                            o.levelId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.HideHoleCardReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "HideHoleCardReq", e.prototype.roomId = 0, e.prototype.hide = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.hide && e.hasOwnProperty("hide") && t.uint32(16).bool(e.hide), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.HideHoleCardReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.hide = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.HideHoleCardRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "HideHoleCardRes", e.prototype.roomId = 0, e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && t.uint32(16).int32(e.code), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.HideHoleCardRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.RoomConfReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RoomConfReq", e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.RoomConfReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.RoomConfRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RoomConfRes", e.prototype.roomId = 0, e.prototype.code = 0, e.prototype.roomName = "", e.prototype.playerCount = 0, e.prototype.flags = 0, e.prototype.roomNameI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && t.uint32(16).int32(e.code), null != e.roomName && e.hasOwnProperty("roomName") && t.uint32(26).string(e.roomName), null != e.playerCount && e.hasOwnProperty("playerCount") && t.uint32(32).int32(e.playerCount), null != e.flags && e.hasOwnProperty("flags") && t.uint32(40).int32(e.flags), null != e.roomNameI18N && e.hasOwnProperty("roomNameI18N") && t.uint32(50).string(e.roomNameI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.RoomConfRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        case 3:
                            o.roomName = e.string();
                            break;
                        case 4:
                            o.playerCount = e.int32();
                            break;
                        case 5:
                            o.flags = e.int32();
                            break;
                        case 6:
                            o.roomNameI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.Emoji = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Emoji", e.prototype.userId = 0, e.prototype.roomId = 0, e.prototype.body = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.body && e.hasOwnProperty("body") && t.uint32(26).string(e.body), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.Emoji; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.userId = e.uint32();
                            break;
                        case 2:
                            o.roomId = e.uint32();
                            break;
                        case 3:
                            o.body = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.EmojiRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "EmojiRes", e.prototype.roomId = 0, e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && t.uint32(16).int32(e.code), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.EmojiRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.AnimReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "AnimReq", e.prototype.roomId = 0, e.prototype.targetUser = 0, e.prototype.anim = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.targetUser && e.hasOwnProperty("targetUser") && t.uint32(16).uint32(e.targetUser), null != e.anim && e.hasOwnProperty("anim") && t.uint32(26).string(e.anim), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.AnimReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.targetUser = e.uint32();
                            break;
                        case 3:
                            o.anim = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.AnimRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "AnimRes", e.prototype.roomId = 0, e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && t.uint32(16).int32(e.code), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.AnimRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.AnimMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "AnimMsg", e.prototype.roomId = 0, e.prototype.sender = 0, e.prototype.targetUser = 0, e.prototype.anim = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.sender && e.hasOwnProperty("sender") && t.uint32(16).uint32(e.sender), null != e.targetUser && e.hasOwnProperty("targetUser") && t.uint32(24).uint32(e.targetUser), null != e.anim && e.hasOwnProperty("anim") && t.uint32(34).string(e.anim), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.AnimMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.sender = e.uint32();
                            break;
                        case 3:
                            o.targetUser = e.uint32();
                            break;
                        case 4:
                            o.anim = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.VoiceReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "VoiceReq", e.prototype.roomId = 0, e.prototype.voiceUrl = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.voiceUrl && e.hasOwnProperty("voiceUrl") && t.uint32(18).string(e.voiceUrl), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.VoiceReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.voiceUrl = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.VoiceRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "VoiceRes", e.prototype.roomId = 0, e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && t.uint32(16).int32(e.code), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.VoiceRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.VoiceMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "VoiceMsg", e.prototype.roomId = 0, e.prototype.userId = 0, e.prototype.voiceUrl = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), null != e.voiceUrl && e.hasOwnProperty("voiceUrl") && t.uint32(26).string(e.voiceUrl), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.VoiceMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.userId = e.uint32();
                            break;
                        case 3:
                            o.voiceUrl = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.PlayerNickNameChangeMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "PlayerNickNameChangeMsg", e.prototype.roomId = 0, e.prototype.userId = 0, e.prototype.nickName = "", e.prototype.avatar = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), null != e.nickName && e.hasOwnProperty("nickName") && t.uint32(26).string(e.nickName), null != e.avatar && e.hasOwnProperty("avatar") && t.uint32(34).string(e.avatar), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.PlayerNickNameChangeMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.userId = e.uint32();
                            break;
                        case 3:
                            o.nickName = e.string();
                            break;
                        case 4:
                            o.avatar = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.SetCardReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SetCardReq", e.prototype.roomId = 0, e.prototype.holeCards = f.newBuffer([]), e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.holeCards && e.hasOwnProperty("holeCards") && t.uint32(18).bytes(e.holeCards), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.SetCardReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.holeCards = e.bytes();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.SetCardRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SetCardRes", e.prototype.roomId = 0, e.prototype.code = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && t.uint32(16).int32(e.code), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.SetCardRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.ShowCardReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "ShowCardReq", e.prototype.roomId = 0, e.prototype.userId = 0, e.prototype.showCards = f.newBuffer([]), e.prototype.show = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), null != e.showCards && e.hasOwnProperty("showCards") && t.uint32(26).bytes(e.showCards), null != e.show && e.hasOwnProperty("show") && t.uint32(32).bool(e.show), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.ShowCardReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.userId = e.uint32();
                            break;
                        case 3:
                            o.showCards = e.bytes();
                            break;
                        case 4:
                            o.show = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.ShowCardRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "ShowCardRes", e.prototype.roomId = 0, e.prototype.userId = 0, e.prototype.code = 0, e.prototype.showCards = f.newBuffer([]), e.prototype.show = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), null != e.code && e.hasOwnProperty("code") && t.uint32(24).int32(e.code), null != e.showCards && e.hasOwnProperty("showCards") && t.uint32(34).bytes(e.showCards), null != e.show && e.hasOwnProperty("show") && t.uint32(40).bool(e.show), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.ShowCardRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.userId = e.uint32();
                            break;
                        case 3:
                            o.code = e.int32();
                            break;
                        case 4:
                            o.showCards = e.bytes();
                            break;
                        case 5:
                            o.show = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.RedPocketCarouseMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RedPocketCarouseMsg", e.prototype.eventId = 0, e.prototype.amount = 0, e.prototype.format = "", e.prototype.nickname = "", e.prototype.category = 0, e.prototype.UserId = 0, e.prototype.GameId = 0, e.prototype.ToolName = "", e.prototype.ToolNameI18N = "", e.prototype.formatI18N = "", e.prototype.DisplayCurrency = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.eventId && e.hasOwnProperty("eventId") && t.uint32(8).uint32(e.eventId), null != e.amount && e.hasOwnProperty("amount") && t.uint32(17).double(e.amount), null != e.format && e.hasOwnProperty("format") && t.uint32(26).string(e.format), null != e.nickname && e.hasOwnProperty("nickname") && t.uint32(34).string(e.nickname), null != e.category && e.hasOwnProperty("category") && t.uint32(40).int32(e.category), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(48).uint32(e.UserId), null != e.GameId && e.hasOwnProperty("GameId") && t.uint32(56).uint32(e.GameId), null != e.ToolName && e.hasOwnProperty("ToolName") && t.uint32(66).string(e.ToolName), null != e.ToolNameI18N && e.hasOwnProperty("ToolNameI18N") && t.uint32(74).string(e.ToolNameI18N), null != e.formatI18N && e.hasOwnProperty("formatI18N") && t.uint32(82).string(e.formatI18N), null != e.DisplayCurrency && e.hasOwnProperty("DisplayCurrency") && t.uint32(90).string(e.DisplayCurrency), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.RedPocketCarouseMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.eventId = e.uint32();
                            break;
                        case 2:
                            o.amount = e.double();
                            break;
                        case 3:
                            o.format = e.string();
                            break;
                        case 4:
                            o.nickname = e.string();
                            break;
                        case 5:
                            o.category = e.int32();
                            break;
                        case 6:
                            o.UserId = e.uint32();
                            break;
                        case 7:
                            o.GameId = e.uint32();
                            break;
                        case 8:
                            o.ToolName = e.string();
                            break;
                        case 9:
                            o.ToolNameI18N = e.string();
                            break;
                        case 10:
                            o.formatI18N = e.string();
                            break;
                        case 11:
                            o.DisplayCurrency = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.PlaybackReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "PlaybackReq", e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.PlaybackReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.PlaybackRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "PlaybackRes", e.prototype.data = f.newBuffer([]), e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.data && e.hasOwnProperty("data") && t.uint32(10).bytes(e.data), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.PlaybackRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.data = e.bytes();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.CelebrityBroadcastReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "CelebrityBroadcastReq", e.prototype.roomId = 0, e.prototype.isOnlive = !1, e.prototype.isAudioOnlive = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.isOnlive && e.hasOwnProperty("isOnlive") && t.uint32(16).bool(e.isOnlive), null != e.isAudioOnlive && e.hasOwnProperty("isAudioOnlive") && t.uint32(24).bool(e.isAudioOnlive), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.CelebrityBroadcastReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.isOnlive = e.bool();
                            break;
                        case 3:
                            o.isAudioOnlive = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.CelebrityBroadcastRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "CelebrityBroadcastRes", e.prototype.errorCode = 0, e.prototype.success = !1, e.prototype.mttId = 0, e.prototype.roomId = 0, e.prototype.audioSuccess = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.errorCode && e.hasOwnProperty("errorCode") && t.uint32(8).int32(e.errorCode), null != e.success && e.hasOwnProperty("success") && t.uint32(16).bool(e.success), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(24).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(32).uint32(e.roomId), null != e.audioSuccess && e.hasOwnProperty("audioSuccess") && t.uint32(40).bool(e.audioSuccess), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.CelebrityBroadcastRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.errorCode = e.int32();
                            break;
                        case 2:
                            o.success = e.bool();
                            break;
                        case 3:
                            o.mttId = e.uint32();
                            break;
                        case 4:
                            o.roomId = e.uint32();
                            break;
                        case 5:
                            o.audioSuccess = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.CelebrityBroadcastNotifyFullMsg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "CelebrityBroadcastNotifyFullMsg", e.prototype.mttId = 0, e.prototype.roomId = 0, e.prototype.closeBroadcast = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(8).uint32(e.mttId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.closeBroadcast && e.hasOwnProperty("closeBroadcast") && t.uint32(24).bool(e.closeBroadcast), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.CelebrityBroadcastNotifyFullMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.mttId = e.uint32();
                            break;
                        case 2:
                            o.roomId = e.uint32();
                            break;
                        case 3:
                            o.closeBroadcast = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.CelebrityBroadcastListMsg = function() {
            function e(e) {
                if (this.broadcastList = [], this.audioBroadcastList = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "CelebrityBroadcastListMsg", e.prototype.roomId = 0, e.prototype.broadcastList = f.emptyArray, e.prototype.audioBroadcastList = f.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.broadcastList && e.broadcastList.length) {
                    t.uint32(18).fork();
                    for (var n = 0; n < e.broadcastList.length; ++n) t.uint32(e.broadcastList[n]);
                    t.ldelim()
                }
                if (null != e.audioBroadcastList && e.audioBroadcastList.length) {
                    for (t.uint32(26).fork(), n = 0; n < e.audioBroadcastList.length; ++n) t.uint32(e.audioBroadcastList[n]);
                    t.ldelim()
                }
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.CelebrityBroadcastListMsg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            if (o.broadcastList && o.broadcastList.length || (o.broadcastList = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.broadcastList.push(e.uint32());
                            else o.broadcastList.push(e.uint32());
                            break;
                        case 3:
                            if (o.audioBroadcastList && o.audioBroadcastList.length || (o.audioBroadcastList = []), 2 == (7 & r))
                                for (i = e.uint32() + e.pos; e.pos < i;) o.audioBroadcastList.push(e.uint32());
                            else o.audioBroadcastList.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.Code = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "OK"] = 0, t[e[50001] = "INVALID_TOKEN"] = 50001, t[e[50002] = "INVALID_ROOM"] = 50002, t[e[50003] = "INVALID_PARAM"] = 50003, t[e[50004] = "INVALID_STATE"] = 50004, t[e[50005] = "INVALID_ACTION"] = 50005, t[e[50006] = "INVALID_TAKEIN"] = 50006, t[e[50007] = "OVER_TURN"] = 50007, t[e[50051] = "TIMEOUT"] = 50051, t[e[50052] = "PLAYING"] = 50052, t[e[50053] = "LESS_COIN"] = 50053, t[e[50054] = "NEAR_GPS"] = 50054, t[e[50055] = "SAME_IP"] = 50055, t[e[50071] = "NO_SEAT"] = 50071, t[e[50072] = "NO_ROOM"] = 50072, t[e[50073] = "NO_LOGIN"] = 50073, t[e[50074] = "CAN_LEAVE"] = 50074, t[e[50075] = "OTHER_ROOM"] = 50075, t[e[50085] = "FinalVoice"] = 50085, t[e[50086] = "Emoje_Frequent"] = 50086, t
        }(), c.MessageId = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Null"] = 0, t[e[50001] = "UserTokenReq"] = 50001, t[e[50002] = "UserTokenRes"] = 50002, t[e[50003] = "EnterRoomReq"] = 50003, t[e[50004] = "EnterRoomRes"] = 50004, t[e[50005] = "RoomSnapshotReq"] = 50005, t[e[50006] = "RoomSnapshotMsg"] = 50006, t[e[50013] = "SitDownReq"] = 50013, t[e[50014] = "SitDownRes"] = 50014, t[e[50016] = "NeedMoreCoinMsg"] = 50016, t[e[50029] = "LeaveRoomReq"] = 50029, t[e[50030] = "LeaveRoomRes"] = 50030, t[e[50032] = "SeatOccupiedMsg"] = 50032, t[e[50034] = "SeatEmptyMsg"] = 50034, t[e[50036] = "PlayerActionMsg"] = 50036, t[e[50037] = "HoleCardListMsg"] = 50037, t[e[50038] = "PlayerLeaveMsg"] = 50038, t[e[50039] = "OtherRoomMsg"] = 50039, t[e[50040] = "HideHoleCardReq"] = 50040, t[e[50041] = "HideHoleCardRes"] = 50041, t[e[50042] = "RoomConfReq"] = 50042, t[e[50043] = "RoomConfRes"] = 50043, t[e[50063] = "Emoji"] = 50063, t[e[50067] = "EmojiRes"] = 50067, t[e[50064] = "AnimReq"] = 50064, t[e[50065] = "AnimRes"] = 50065, t[e[50066] = "AnimMsg"] = 50066, t[e[50069] = "VoiceReq"] = 50069, t[e[50070] = "VoiceRes"] = 50070, t[e[50071] = "VoiceMsg"] = 50071, t[e[50102] = "DealerPosMsg"] = 50102, t[e[50104] = "HoleCardsMsg"] = 50104, t[e[50106] = "BoardCardsMsg"] = 50106, t[e[50109] = "ActionReq"] = 50109, t[e[50110] = "ActionRes"] = 50110, t[e[50112] = "NeedActionMsg"] = 50112, t[e[50114] = "ShowdownMsg"] = 50114, t[e[50116] = "RoundResultMsg"] = 50116, t[e[50120] = "PotsMsg"] = 50120, t[e[50124] = "PlayerStateMsg"] = 50124, t[e[50125] = "PauseGameReq"] = 50125, t[e[50126] = "PauseGameRes"] = 50126, t[e[50127] = "StandbyReq"] = 50127, t[e[50128] = "StandbyRes"] = 50128, t[e[50129] = "ResumeGameReq"] = 50129, t[e[50130] = "ResumeGameRes"] = 50130, t[e[50131] = "RoomBillReq"] = 50131, t[e[50132] = "RoomBillRes"] = 50132, t[e[50133] = "AutoPlayMsg"] = 50133, t[e[50134] = "CancelAutoPlayReq"] = 50134, t[e[50135] = "CancelAutoPlayRes"] = 50135, t[e[50136] = "PlaybackReq"] = 50136, t[e[50137] = "PlaybackRes"] = 50137, t[e[50122] = "PlayerNickNameChangeMsg"] = 50122, t[e[50501] = "ChangeBlindMsg"] = 50501, t[e[50505] = "ReJoinMQ"] = 50505, t[e[50506] = "SetCardReq"] = 50506, t[e[50507] = "SetCardRes"] = 50507, t[e[50510] = "ShowCardReq"] = 50510, t[e[50511] = "ShowCardRes"] = 50511, t[e[50512] = "RedPocketCarouseMsg"] = 50512, t[e[50513] = "CelebrityBroadcastReq"] = 50513, t[e[50514] = "CelebrityBroadcastRes"] = 50514, t[e[50515] = "CelebrityBroadcastNotifyFullMsg"] = 50515, t[e[50516] = "CelebrityBroadcastListMsg"] = 50516, t
        }(), c.RoomFlags = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "ROOM_FLAG_NONE"] = 0, t[e[1] = "ROOM_FLAG_CHECK_GPS"] = 1, t[e[2] = "ROOM_FLAG_CHECK_IP"] = 2, t
        }(), c.PlayerFlags = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "FLAG_NONE"] = 0, t[e[1] = "FLAG_AUTO_PLAY"] = 1, t[e[2] = "FLAG_HOLE_CARDS"] = 2, t
        }(), c.Wrapper = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Wrapper", e.prototype.topic = "", e.prototype.body = f.newBuffer([]), e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.topic && e.hasOwnProperty("topic") && t.uint32(10).string(e.topic), null != e.body && e.hasOwnProperty("body") && t.uint32(18).bytes(e.body), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.Wrapper; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.topic = e.string();
                            break;
                        case 2:
                            o.body = e.bytes();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.RequestConsume = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RequestConsume", e.prototype.userId = 0, e.prototype.seq = 0, e.prototype.coin = 0, e.prototype.roomId = 0, e.prototype.gameId = 0, e.prototype.minCoin = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.seq && e.hasOwnProperty("seq") && t.uint32(16).uint32(e.seq), null != e.coin && e.hasOwnProperty("coin") && t.uint32(29).float(e.coin), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(32).uint32(e.roomId), null != e.gameId && e.hasOwnProperty("gameId") && t.uint32(40).uint32(e.gameId), null != e.minCoin && e.hasOwnProperty("minCoin") && t.uint32(53).float(e.minCoin), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.RequestConsume; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.userId = e.uint32();
                            break;
                        case 2:
                            o.seq = e.uint32();
                            break;
                        case 3:
                            o.coin = e.float();
                            break;
                        case 4:
                            o.roomId = e.uint32();
                            break;
                        case 5:
                            o.gameId = e.uint32();
                            break;
                        case 6:
                            o.minCoin = e.float();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.ResponseConsume = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "ResponseConsume", e.prototype.userId = 0, e.prototype.seq = 0, e.prototype.code = 0, e.prototype.coin = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.seq && e.hasOwnProperty("seq") && t.uint32(16).uint32(e.seq), null != e.code && e.hasOwnProperty("code") && t.uint32(24).int32(e.code), null != e.coin && e.hasOwnProperty("coin") && t.uint32(37).float(e.coin), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.ResponseConsume; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.userId = e.uint32();
                            break;
                        case 2:
                            o.seq = e.uint32();
                            break;
                        case 3:
                            o.code = e.int32();
                            break;
                        case 4:
                            o.coin = e.float();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.StartRecord = function() {
            function e(e) {
                if (this.Players = {}, e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "StartRecord", e.prototype.Players = f.emptyObject, e.prototype.bigBlind = 0, e.prototype.smallBlind = 0, e.prototype.ante = 0, e.prototype.roomId = 0, e.prototype.gameId = 0, e.prototype.groupId = 0, e.prototype.categoryId = 0, e.prototype.dealer = 0, e.prototype.seatnum = 0, e.prototype.gameMode = 0, e.prototype.isAof = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.Players && e.hasOwnProperty("Players"))
                    for (var n = Object.keys(e.Players), o = 0; o < n.length; ++o) t.uint32(10).fork().uint32(8).uint32(n[o]), m.holdem.StartRecord.PlayerInfo.encode(e.Players[n[o]], t.uint32(18).fork()).ldelim().ldelim();
                return null != e.bigBlind && e.hasOwnProperty("bigBlind") && t.uint32(37).float(e.bigBlind), null != e.smallBlind && e.hasOwnProperty("smallBlind") && t.uint32(45).float(e.smallBlind), null != e.ante && e.hasOwnProperty("ante") && t.uint32(53).float(e.ante), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(56).uint32(e.roomId), null != e.gameId && e.hasOwnProperty("gameId") && t.uint32(64).int32(e.gameId), null != e.groupId && e.hasOwnProperty("groupId") && t.uint32(72).uint32(e.groupId), null != e.categoryId && e.hasOwnProperty("categoryId") && t.uint32(80).uint32(e.categoryId), null != e.dealer && e.hasOwnProperty("dealer") && t.uint32(88).uint32(e.dealer), null != e.seatnum && e.hasOwnProperty("seatnum") && t.uint32(96).uint32(e.seatnum), null != e.gameMode && e.hasOwnProperty("gameMode") && t.uint32(104).int32(e.gameMode), null != e.isAof && e.hasOwnProperty("isAof") && t.uint32(112).bool(e.isAof), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n, o = void 0 === t ? e.len : e.pos + t, r = new m.holdem.StartRecord; e.pos < o;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            e.skip().pos++, r.Players === f.emptyObject && (r.Players = {}), n = e.uint32(), e.pos++, r.Players[n] = m.holdem.StartRecord.PlayerInfo.decode(e, e.uint32());
                            break;
                        case 4:
                            r.bigBlind = e.float();
                            break;
                        case 5:
                            r.smallBlind = e.float();
                            break;
                        case 6:
                            r.ante = e.float();
                            break;
                        case 7:
                            r.roomId = e.uint32();
                            break;
                        case 8:
                            r.gameId = e.int32();
                            break;
                        case 9:
                            r.groupId = e.uint32();
                            break;
                        case 10:
                            r.categoryId = e.uint32();
                            break;
                        case 11:
                            r.dealer = e.uint32();
                            break;
                        case 12:
                            r.seatnum = e.uint32();
                            break;
                        case 13:
                            r.gameMode = e.int32();
                            break;
                        case 14:
                            r.isAof = e.bool();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e.PlayerInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "PlayerInfo", e.prototype.UserId = 0, e.prototype.DeskCoin = 0, e.prototype.state = 0, e.prototype.startCoin = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = p.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), null != e.DeskCoin && e.hasOwnProperty("DeskCoin") && t.uint32(17).double(e.DeskCoin), null != e.state && e.hasOwnProperty("state") && t.uint32(24).int32(e.state), null != e.startCoin && e.hasOwnProperty("startCoin") && t.uint32(33).double(e.startCoin), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof l || (e = l.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.StartRecord.PlayerInfo; e.pos < n;) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                            case 1:
                                o.UserId = e.uint32();
                                break;
                            case 2:
                                o.DeskCoin = e.double();
                                break;
                            case 3:
                                o.state = e.int32();
                                break;
                            case 4:
                                o.startCoin = e.double();
                                break;
                            default:
                                e.skipType(7 & r)
                        }
                    }
                    return o
                }, e.decodeDelimited = function(e) {
                    return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
                }, e
            }(), e
        }(), c.ActionRecord = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "ActionRecord", e.prototype.Body = f.newBuffer([]), e.prototype.roomId = 0, e.prototype.groupId = 0, e.prototype.categoryId = 0, e.prototype.ttlTime = 0, e.prototype.usedTime = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.Body && e.hasOwnProperty("Body") && t.uint32(18).bytes(e.Body), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(24).uint32(e.roomId), null != e.groupId && e.hasOwnProperty("groupId") && t.uint32(32).uint32(e.groupId), null != e.categoryId && e.hasOwnProperty("categoryId") && t.uint32(40).uint32(e.categoryId), null != e.ttlTime && e.hasOwnProperty("ttlTime") && t.uint32(48).uint32(e.ttlTime), null != e.usedTime && e.hasOwnProperty("usedTime") && t.uint32(56).uint32(e.usedTime), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.ActionRecord; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 2:
                            o.Body = e.bytes();
                            break;
                        case 3:
                            o.roomId = e.uint32();
                            break;
                        case 4:
                            o.groupId = e.uint32();
                            break;
                        case 5:
                            o.categoryId = e.uint32();
                            break;
                        case 6:
                            o.ttlTime = e.uint32();
                            break;
                        case 7:
                            o.usedTime = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.RoundPlayerProfit = function() {
            function e(e) {
                if (this.profits = {}, this.ranks = {}, e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RoundPlayerProfit", e.prototype.roomId = 0, e.prototype.typeId = 0, e.prototype.groupId = 0, e.prototype.profits = f.emptyObject, e.prototype.ranks = f.emptyObject, e.prototype.uuid = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.typeId && e.hasOwnProperty("typeId") && t.uint32(16).uint32(e.typeId), null != e.groupId && e.hasOwnProperty("groupId") && t.uint32(24).uint32(e.groupId), null != e.profits && e.hasOwnProperty("profits"))
                    for (var n = Object.keys(e.profits), o = 0; o < n.length; ++o) t.uint32(34).fork().uint32(8).uint32(n[o]).uint32(17).double(e.profits[n[o]]).ldelim();
                if (null != e.ranks && e.hasOwnProperty("ranks"))
                    for (n = Object.keys(e.ranks), o = 0; o < n.length; ++o) t.uint32(42).fork().uint32(8).uint32(n[o]).uint32(16).int32(e.ranks[n[o]]).ldelim();
                return null != e.uuid && e.hasOwnProperty("uuid") && t.uint32(50).string(e.uuid), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n, o = void 0 === t ? e.len : e.pos + t, r = new m.holdem.RoundPlayerProfit; e.pos < o;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        case 2:
                            r.typeId = e.uint32();
                            break;
                        case 3:
                            r.groupId = e.uint32();
                            break;
                        case 4:
                            e.skip().pos++, r.profits === f.emptyObject && (r.profits = {}), n = e.uint32(), e.pos++, r.profits[n] = e.double();
                            break;
                        case 5:
                            e.skip().pos++, r.ranks === f.emptyObject && (r.ranks = {}), n = e.uint32(), e.pos++, r.ranks[n] = e.int32();
                            break;
                        case 6:
                            r.uuid = e.string();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c.RequestExitGame = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RequestExitGame", e.prototype.userId = 0, e.prototype.roomId = 0, e.prototype.initCoin = 0, e.prototype.leftCoin = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = p.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(16).uint32(e.roomId), null != e.initCoin && e.hasOwnProperty("initCoin") && t.uint32(25).double(e.initCoin), null != e.leftCoin && e.hasOwnProperty("leftCoin") && t.uint32(33).double(e.leftCoin), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof l || (e = l.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new m.holdem.RequestExitGame; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.userId = e.uint32();
                            break;
                        case 2:
                            o.roomId = e.uint32();
                            break;
                        case 3:
                            o.initCoin = e.double();
                            break;
                        case 4:
                            o.leftCoin = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), c), o.exports = m, r = e("default", o.exports)
    }), (() => ({
        "protobufjs/minimal.js": o
    })))
}