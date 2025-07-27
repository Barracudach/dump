import * as t from "./cjs-loader.mjs.js";
import * as o from "./minimal.js";

function main() {
    let r;
    e("default", void 0);
    const i = e("__cjsMetaURL", n.meta.url);
    t.define(i, (function(n, t, o, i, a) {
        var c, u, s, d = t("protobufjs/minimal.js"),
            l = d.Reader,
            p = d.Writer,
            f = d.util,
            h = d.roots.default || (d.roots.default = {});
        h.pineapple = ((s = {}).SharedData = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "SharedData", e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.SharedData; e.pos < t;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e.Player = function() {
                function e(e) {
                    if (e)
                        for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
                }
                return e.pbName = "Player", e.prototype.userId = 0, e.prototype.nickName = "", e.prototype.seat = 0, e.prototype.snapshot = null, e.prototype.initCoin = 0, e.prototype.state = 0, e.prototype.leftCoin = 0, e.prototype.gender = 0, e.create = function(n) {
                    return new e(n)
                }, e.encode = function(e, n) {
                    return n || (n = p.create()), null != e.userId && e.hasOwnProperty("userId") && n.uint32(8).uint32(e.userId), null != e.nickName && e.hasOwnProperty("nickName") && n.uint32(18).string(e.nickName), null != e.seat && e.hasOwnProperty("seat") && n.uint32(24).int32(e.seat), null != e.snapshot && e.hasOwnProperty("snapshot") && h.pineapple.SharedData.SeatSnapshot.encode(e.snapshot, n.uint32(42).fork()).ldelim(), null != e.initCoin && e.hasOwnProperty("initCoin") && n.uint32(49).double(e.initCoin), null != e.state && e.hasOwnProperty("state") && n.uint32(56).int32(e.state), null != e.leftCoin && e.hasOwnProperty("leftCoin") && n.uint32(65).double(e.leftCoin), null != e.gender && e.hasOwnProperty("gender") && n.uint32(72).int32(e.gender), n
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, n) {
                    return this.encode(e, n).ldelim()
                }, e.decode = function(e, n) {
                    e instanceof l || (e = l.create(e));
                    for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.SharedData.Player; e.pos < t;) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                            case 1:
                                o.userId = e.uint32();
                                break;
                            case 2:
                                o.nickName = e.string();
                                break;
                            case 3:
                                o.seat = e.int32();
                                break;
                            case 5:
                                o.snapshot = h.pineapple.SharedData.SeatSnapshot.decode(e, e.uint32());
                                break;
                            case 6:
                                o.initCoin = e.double();
                                break;
                            case 7:
                                o.state = e.int32();
                                break;
                            case 8:
                                o.leftCoin = e.double();
                                break;
                            case 9:
                                o.gender = e.int32();
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
                        for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
                }
                return e.pbName = "Visitor", e.prototype.userId = 0, e.prototype.nickName = "", e.create = function(n) {
                    return new e(n)
                }, e.encode = function(e, n) {
                    return n || (n = p.create()), null != e.userId && e.hasOwnProperty("userId") && n.uint32(8).uint32(e.userId), null != e.nickName && e.hasOwnProperty("nickName") && n.uint32(18).string(e.nickName), n
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, n) {
                    return this.encode(e, n).ldelim()
                }, e.decode = function(e, n) {
                    e instanceof l || (e = l.create(e));
                    for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.SharedData.Visitor; e.pos < t;) {
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
            }(), e.SeatSnapshot = function() {
                function e(e) {
                    if (e)
                        for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
                }
                return e.pbName = "SeatSnapshot", e.prototype.headCards = f.newBuffer([]), e.prototype.midCards = f.newBuffer([]), e.prototype.tailCards = f.newBuffer([]), e.prototype.fantasy = 0, e.prototype.countdownTotal = 0, e.prototype.countdownLeft = 0, e.prototype.dispatchCards = f.newBuffer([]), e.prototype.discardCards = f.newBuffer([]), e.prototype.useExtraTime = !1, e.prototype.coverCards = !1, e.create = function(n) {
                    return new e(n)
                }, e.encode = function(e, n) {
                    return n || (n = p.create()), null != e.headCards && e.hasOwnProperty("headCards") && n.uint32(18).bytes(e.headCards), null != e.midCards && e.hasOwnProperty("midCards") && n.uint32(26).bytes(e.midCards), null != e.tailCards && e.hasOwnProperty("tailCards") && n.uint32(34).bytes(e.tailCards), null != e.fantasy && e.hasOwnProperty("fantasy") && n.uint32(40).int32(e.fantasy), null != e.countdownTotal && e.hasOwnProperty("countdownTotal") && n.uint32(48).int32(e.countdownTotal), null != e.countdownLeft && e.hasOwnProperty("countdownLeft") && n.uint32(56).int32(e.countdownLeft), null != e.dispatchCards && e.hasOwnProperty("dispatchCards") && n.uint32(66).bytes(e.dispatchCards), null != e.discardCards && e.hasOwnProperty("discardCards") && n.uint32(74).bytes(e.discardCards), null != e.useExtraTime && e.hasOwnProperty("useExtraTime") && n.uint32(80).bool(e.useExtraTime), null != e.coverCards && e.hasOwnProperty("coverCards") && n.uint32(88).bool(e.coverCards), n
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, n) {
                    return this.encode(e, n).ldelim()
                }, e.decode = function(e, n) {
                    e instanceof l || (e = l.create(e));
                    for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.SharedData.SeatSnapshot; e.pos < t;) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                            case 2:
                                o.headCards = e.bytes();
                                break;
                            case 3:
                                o.midCards = e.bytes();
                                break;
                            case 4:
                                o.tailCards = e.bytes();
                                break;
                            case 5:
                                o.fantasy = e.int32();
                                break;
                            case 6:
                                o.countdownTotal = e.int32();
                                break;
                            case 7:
                                o.countdownLeft = e.int32();
                                break;
                            case 8:
                                o.dispatchCards = e.bytes();
                                break;
                            case 9:
                                o.discardCards = e.bytes();
                                break;
                            case 10:
                                o.useExtraTime = e.bool();
                                break;
                            case 11:
                                o.coverCards = e.bool();
                                break;
                            default:
                                e.skipType(7 & r)
                        }
                    }
                    return o
                }, e.decodeDelimited = function(e) {
                    return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
                }, e
            }(), e.ShowedCards = function() {
                function e(e) {
                    if (e)
                        for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
                }
                return e.pbName = "ShowedCards", e.prototype.userId = 0, e.prototype.head = f.newBuffer([]), e.prototype.mid = f.newBuffer([]), e.prototype.tail = f.newBuffer([]), e.prototype.discard = f.newBuffer([]), e.create = function(n) {
                    return new e(n)
                }, e.encode = function(e, n) {
                    return n || (n = p.create()), null != e.userId && e.hasOwnProperty("userId") && n.uint32(8).uint32(e.userId), null != e.head && e.hasOwnProperty("head") && n.uint32(18).bytes(e.head), null != e.mid && e.hasOwnProperty("mid") && n.uint32(26).bytes(e.mid), null != e.tail && e.hasOwnProperty("tail") && n.uint32(34).bytes(e.tail), null != e.discard && e.hasOwnProperty("discard") && n.uint32(42).bytes(e.discard), n
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, n) {
                    return this.encode(e, n).ldelim()
                }, e.decode = function(e, n) {
                    e instanceof l || (e = l.create(e));
                    for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.SharedData.ShowedCards; e.pos < t;) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                            case 1:
                                o.userId = e.uint32();
                                break;
                            case 2:
                                o.head = e.bytes();
                                break;
                            case 3:
                                o.mid = e.bytes();
                                break;
                            case 4:
                                o.tail = e.bytes();
                                break;
                            case 5:
                                o.discard = e.bytes();
                                break;
                            default:
                                e.skipType(7 & r)
                        }
                    }
                    return o
                }, e.decodeDelimited = function(e) {
                    return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
                }, e
            }(), e.PlayerRoundResult = function() {
                function e(e) {
                    if (e)
                        for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
                }
                return e.pbName = "PlayerRoundResult", e.prototype.userId = 0, e.prototype.head = 0, e.prototype.mid = 0, e.prototype.tail = 0, e.prototype.total = 0, e.prototype.ranks = f.newBuffer([]), e.prototype.fantasy = 0, e.prototype.broken = !1, e.prototype.toJackpot = 0, e.prototype.fromJackpot = 0, e.create = function(n) {
                    return new e(n)
                }, e.encode = function(e, n) {
                    return n || (n = p.create()), null != e.userId && e.hasOwnProperty("userId") && n.uint32(8).uint32(e.userId), null != e.head && e.hasOwnProperty("head") && n.uint32(16).int32(e.head), null != e.mid && e.hasOwnProperty("mid") && n.uint32(24).int32(e.mid), null != e.tail && e.hasOwnProperty("tail") && n.uint32(32).int32(e.tail), null != e.total && e.hasOwnProperty("total") && n.uint32(40).int32(e.total), null != e.ranks && e.hasOwnProperty("ranks") && n.uint32(50).bytes(e.ranks), null != e.fantasy && e.hasOwnProperty("fantasy") && n.uint32(56).int32(e.fantasy), null != e.broken && e.hasOwnProperty("broken") && n.uint32(64).bool(e.broken), null != e.toJackpot && e.hasOwnProperty("toJackpot") && n.uint32(73).double(e.toJackpot), null != e.fromJackpot && e.hasOwnProperty("fromJackpot") && n.uint32(81).double(e.fromJackpot), n
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, n) {
                    return this.encode(e, n).ldelim()
                }, e.decode = function(e, n) {
                    e instanceof l || (e = l.create(e));
                    for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.SharedData.PlayerRoundResult; e.pos < t;) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                            case 1:
                                o.userId = e.uint32();
                                break;
                            case 2:
                                o.head = e.int32();
                                break;
                            case 3:
                                o.mid = e.int32();
                                break;
                            case 4:
                                o.tail = e.int32();
                                break;
                            case 5:
                                o.total = e.int32();
                                break;
                            case 6:
                                o.ranks = e.bytes();
                                break;
                            case 7:
                                o.fantasy = e.int32();
                                break;
                            case 8:
                                o.broken = e.bool();
                                break;
                            case 9:
                                o.toJackpot = e.double();
                                break;
                            case 10:
                                o.fromJackpot = e.double();
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
        }(), s.MessageHeader = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "MessageHeader", e.prototype.Length = 0, e.prototype.MessageId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.Length && e.hasOwnProperty("Length") && n.uint32(8).int32(e.Length), null != e.MessageId && e.hasOwnProperty("MessageId") && n.uint32(16).int32(e.MessageId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.MessageHeader; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Length = e.int32();
                            break;
                        case 2:
                            o.MessageId = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.Pong = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "Pong", e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.Pong; e.pos < t;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.RealIp = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "RealIp", e.prototype.ip = "", e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.ip && e.hasOwnProperty("ip") && n.uint32(10).string(e.ip), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RealIp; e.pos < t;) {
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
        }(), s.UserTokenReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "UserTokenReq", e.prototype.userId = 0, e.prototype.token = "", e.prototype.lat = 0, e.prototype.lng = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.userId && e.hasOwnProperty("userId") && n.uint32(8).uint32(e.userId), null != e.token && e.hasOwnProperty("token") && n.uint32(18).string(e.token), null != e.lat && e.hasOwnProperty("lat") && n.uint32(29).float(e.lat), null != e.lng && e.hasOwnProperty("lng") && n.uint32(37).float(e.lng), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.UserTokenReq; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.userId = e.uint32();
                            break;
                        case 2:
                            o.token = e.string();
                            break;
                        case 3:
                            o.lat = e.float();
                            break;
                        case 4:
                            o.lng = e.float();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.UserTokenRes = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "UserTokenRes", e.prototype.code = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.code && e.hasOwnProperty("code") && n.uint32(8).int32(e.code), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.UserTokenRes; e.pos < t;) {
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
        }(), s.EnterRoomReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "EnterRoomReq", e.prototype.roomId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.EnterRoomReq; e.pos < t;) {
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
        }(), s.EnterRoomRes = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "EnterRoomRes", e.prototype.code = 0, e.prototype.roomId = 0, e.prototype.mttId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.code && e.hasOwnProperty("code") && n.uint32(8).int32(e.code), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(16).uint32(e.roomId), null != e.mttId && e.hasOwnProperty("mttId") && n.uint32(24).uint32(e.mttId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.EnterRoomRes; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        case 2:
                            o.roomId = e.uint32();
                            break;
                        case 3:
                            o.mttId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.EnterLevelReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "EnterLevelReq", e.prototype.levelId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(8).uint32(e.levelId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.EnterLevelReq; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
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
        }(), s.EnterLevelRes = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "EnterLevelRes", e.prototype.levelId = 0, e.prototype.code = 0, e.prototype.roomId = 0, e.prototype.mode = 0, e.prototype.flags = 0, e.prototype.deal = 0, e.prototype.coinPerPoint = 0, e.prototype.minTakeIn = 0, e.prototype.RoomName = "", e.prototype.takeIn = 0, e.prototype.jackpotEnable = !1, e.prototype.state = 0, e.prototype.leftTime = 0, e.prototype.allRoomIsPause = !1, e.prototype.startTime = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(8).uint32(e.levelId), null != e.code && e.hasOwnProperty("code") && n.uint32(16).int32(e.code), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(24).uint32(e.roomId), null != e.mode && e.hasOwnProperty("mode") && n.uint32(32).int32(e.mode), null != e.flags && e.hasOwnProperty("flags") && n.uint32(40).int32(e.flags), null != e.deal && e.hasOwnProperty("deal") && n.uint32(48).int32(e.deal), null != e.coinPerPoint && e.hasOwnProperty("coinPerPoint") && n.uint32(61).float(e.coinPerPoint), null != e.minTakeIn && e.hasOwnProperty("minTakeIn") && n.uint32(69).float(e.minTakeIn), null != e.RoomName && e.hasOwnProperty("RoomName") && n.uint32(74).string(e.RoomName), null != e.takeIn && e.hasOwnProperty("takeIn") && n.uint32(85).float(e.takeIn), null != e.jackpotEnable && e.hasOwnProperty("jackpotEnable") && n.uint32(88).bool(e.jackpotEnable), null != e.state && e.hasOwnProperty("state") && n.uint32(96).int32(e.state), null != e.leftTime && e.hasOwnProperty("leftTime") && n.uint32(104).int32(e.leftTime), null != e.allRoomIsPause && e.hasOwnProperty("allRoomIsPause") && n.uint32(112).bool(e.allRoomIsPause), null != e.startTime && e.hasOwnProperty("startTime") && n.uint32(120).int64(e.startTime), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.EnterLevelRes; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.levelId = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        case 3:
                            o.roomId = e.uint32();
                            break;
                        case 4:
                            o.mode = e.int32();
                            break;
                        case 5:
                            o.flags = e.int32();
                            break;
                        case 6:
                            o.deal = e.int32();
                            break;
                        case 7:
                            o.coinPerPoint = e.float();
                            break;
                        case 8:
                            o.minTakeIn = e.float();
                            break;
                        case 9:
                            o.RoomName = e.string();
                            break;
                        case 10:
                            o.takeIn = e.float();
                            break;
                        case 11:
                            o.jackpotEnable = e.bool();
                            break;
                        case 12:
                            o.state = e.int32();
                            break;
                        case 13:
                            o.leftTime = e.int32();
                            break;
                        case 14:
                            o.allRoomIsPause = e.bool();
                            break;
                        case 15:
                            o.startTime = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.RoomSnapshotMsg = function() {
            function e(e) {
                if (this.playerList = [], this.visitList = [], e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "RoomSnapshotMsg", e.prototype.roomId = 0, e.prototype.seatCount = 0, e.prototype.roomState = 0, e.prototype.playerList = f.emptyArray, e.prototype.visitList = f.emptyArray, e.prototype.level = 0, e.prototype.RoomName = "", e.prototype.mode = 0, e.prototype.coinPerPoint = 0, e.prototype.deal = 0, e.prototype.minTakeIn = 0, e.prototype.leftTime = 0, e.prototype.isAutoPlay = !1, e.prototype.flags = 0, e.prototype.takeIn = 0, e.prototype.note = "", e.prototype.code = 0, e.prototype.jackpotEnable = !1, e.prototype.mttId = 0, e.prototype.dealerPos = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                if (n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.seatCount && e.hasOwnProperty("seatCount") && n.uint32(16).int32(e.seatCount), null != e.roomState && e.hasOwnProperty("roomState") && n.uint32(24).int32(e.roomState), null != e.playerList && e.playerList.length)
                    for (var t = 0; t < e.playerList.length; ++t) h.pineapple.SharedData.Player.encode(e.playerList[t], n.uint32(34).fork()).ldelim();
                if (null != e.visitList && e.visitList.length)
                    for (t = 0; t < e.visitList.length; ++t) h.pineapple.SharedData.Visitor.encode(e.visitList[t], n.uint32(42).fork()).ldelim();
                return null != e.level && e.hasOwnProperty("level") && n.uint32(48).uint32(e.level), null != e.RoomName && e.hasOwnProperty("RoomName") && n.uint32(58).string(e.RoomName), null != e.mode && e.hasOwnProperty("mode") && n.uint32(64).int32(e.mode), null != e.coinPerPoint && e.hasOwnProperty("coinPerPoint") && n.uint32(77).float(e.coinPerPoint), null != e.deal && e.hasOwnProperty("deal") && n.uint32(80).int32(e.deal), null != e.minTakeIn && e.hasOwnProperty("minTakeIn") && n.uint32(93).float(e.minTakeIn), null != e.leftTime && e.hasOwnProperty("leftTime") && n.uint32(96).int32(e.leftTime), null != e.isAutoPlay && e.hasOwnProperty("isAutoPlay") && n.uint32(104).bool(e.isAutoPlay), null != e.flags && e.hasOwnProperty("flags") && n.uint32(112).int32(e.flags), null != e.takeIn && e.hasOwnProperty("takeIn") && n.uint32(125).float(e.takeIn), null != e.note && e.hasOwnProperty("note") && n.uint32(130).string(e.note), null != e.code && e.hasOwnProperty("code") && n.uint32(136).int32(e.code), null != e.jackpotEnable && e.hasOwnProperty("jackpotEnable") && n.uint32(144).bool(e.jackpotEnable), null != e.mttId && e.hasOwnProperty("mttId") && n.uint32(152).uint32(e.mttId), null != e.dealerPos && e.hasOwnProperty("dealerPos") && n.uint32(160).int32(e.dealerPos), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RoomSnapshotMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.seatCount = e.int32();
                            break;
                        case 3:
                            o.roomState = e.int32();
                            break;
                        case 4:
                            o.playerList && o.playerList.length || (o.playerList = []), o.playerList.push(h.pineapple.SharedData.Player.decode(e, e.uint32()));
                            break;
                        case 5:
                            o.visitList && o.visitList.length || (o.visitList = []), o.visitList.push(h.pineapple.SharedData.Visitor.decode(e, e.uint32()));
                            break;
                        case 6:
                            o.level = e.uint32();
                            break;
                        case 7:
                            o.RoomName = e.string();
                            break;
                        case 8:
                            o.mode = e.int32();
                            break;
                        case 9:
                            o.coinPerPoint = e.float();
                            break;
                        case 10:
                            o.deal = e.int32();
                            break;
                        case 11:
                            o.minTakeIn = e.float();
                            break;
                        case 12:
                            o.leftTime = e.int32();
                            break;
                        case 13:
                            o.isAutoPlay = e.bool();
                            break;
                        case 14:
                            o.flags = e.int32();
                            break;
                        case 15:
                            o.takeIn = e.float();
                            break;
                        case 16:
                            o.note = e.string();
                            break;
                        case 17:
                            o.code = e.int32();
                            break;
                        case 18:
                            o.jackpotEnable = e.bool();
                            break;
                        case 19:
                            o.mttId = e.uint32();
                            break;
                        case 20:
                            o.dealerPos = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.DispatchCardsMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "DispatchCardsMsg", e.prototype.roomId = 0, e.prototype.cards = f.newBuffer([]), e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.cards && e.hasOwnProperty("cards") && n.uint32(18).bytes(e.cards), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.DispatchCardsMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
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
        }(), s.ReadyReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "ReadyReq", e.prototype.roomId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.ReadyReq; e.pos < t;) {
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
        }(), s.ReadyRes = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "ReadyRes", e.prototype.code = 0, e.prototype.roomId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.code && e.hasOwnProperty("code") && n.uint32(8).int32(e.code), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(16).uint32(e.roomId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.ReadyRes; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.code = e.int32();
                            break;
                        case 2:
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
        }(), s.PlaceCardsReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "PlaceCardsReq", e.prototype.roomId = 0, e.prototype.headCards = f.newBuffer([]), e.prototype.midCards = f.newBuffer([]), e.prototype.tailCards = f.newBuffer([]), e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.headCards && e.hasOwnProperty("headCards") && n.uint32(18).bytes(e.headCards), null != e.midCards && e.hasOwnProperty("midCards") && n.uint32(26).bytes(e.midCards), null != e.tailCards && e.hasOwnProperty("tailCards") && n.uint32(34).bytes(e.tailCards), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.PlaceCardsReq; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.headCards = e.bytes();
                            break;
                        case 3:
                            o.midCards = e.bytes();
                            break;
                        case 4:
                            o.tailCards = e.bytes();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.PlayerCardCheckBreak = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "PlayerCardCheckBreak", e.prototype.headCards = f.newBuffer([]), e.prototype.midCards = f.newBuffer([]), e.prototype.tailCards = f.newBuffer([]), e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.headCards && e.hasOwnProperty("headCards") && n.uint32(18).bytes(e.headCards), null != e.midCards && e.hasOwnProperty("midCards") && n.uint32(26).bytes(e.midCards), null != e.tailCards && e.hasOwnProperty("tailCards") && n.uint32(34).bytes(e.tailCards), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.PlayerCardCheckBreak; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 2:
                            o.headCards = e.bytes();
                            break;
                        case 3:
                            o.midCards = e.bytes();
                            break;
                        case 4:
                            o.tailCards = e.bytes();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.PlayerCardCheckBreakAck = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "PlayerCardCheckBreakAck", e.prototype.Break = !1, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.Break && e.hasOwnProperty("Break") && n.uint32(8).bool(e.Break), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.PlayerCardCheckBreakAck; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Break = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.PlaceCardsRes = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "PlaceCardsRes", e.prototype.roomId = 0, e.prototype.code = 0, e.prototype.headCards = f.newBuffer([]), e.prototype.midCards = f.newBuffer([]), e.prototype.tailCards = f.newBuffer([]), e.prototype.discards = f.newBuffer([]), e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && n.uint32(16).int32(e.code), null != e.headCards && e.hasOwnProperty("headCards") && n.uint32(26).bytes(e.headCards), null != e.midCards && e.hasOwnProperty("midCards") && n.uint32(34).bytes(e.midCards), null != e.tailCards && e.hasOwnProperty("tailCards") && n.uint32(42).bytes(e.tailCards), null != e.discards && e.hasOwnProperty("discards") && n.uint32(50).bytes(e.discards), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.PlaceCardsRes; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        case 3:
                            o.headCards = e.bytes();
                            break;
                        case 4:
                            o.midCards = e.bytes();
                            break;
                        case 5:
                            o.tailCards = e.bytes();
                            break;
                        case 6:
                            o.discards = e.bytes();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.CardsShowedMsg = function() {
            function e(e) {
                if (this.cards = [], e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "CardsShowedMsg", e.prototype.roomId = 0, e.prototype.cards = f.emptyArray, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                if (n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.cards && e.cards.length)
                    for (var t = 0; t < e.cards.length; ++t) h.pineapple.SharedData.ShowedCards.encode(e.cards[t], n.uint32(18).fork()).ldelim();
                return n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.CardsShowedMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.cards && o.cards.length || (o.cards = []), o.cards.push(h.pineapple.SharedData.ShowedCards.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.CardsPlacedMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "CardsPlacedMsg", e.prototype.roomId = 0, e.prototype.userId = 0, e.prototype.headPlaced = 0, e.prototype.midPlaced = 0, e.prototype.tailPlaced = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && n.uint32(16).uint32(e.userId), null != e.headPlaced && e.hasOwnProperty("headPlaced") && n.uint32(24).int32(e.headPlaced), null != e.midPlaced && e.hasOwnProperty("midPlaced") && n.uint32(32).int32(e.midPlaced), null != e.tailPlaced && e.hasOwnProperty("tailPlaced") && n.uint32(40).int32(e.tailPlaced), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.CardsPlacedMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.userId = e.uint32();
                            break;
                        case 3:
                            o.headPlaced = e.int32();
                            break;
                        case 4:
                            o.midPlaced = e.int32();
                            break;
                        case 5:
                            o.tailPlaced = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.RoundResultMsg = function() {
            function e(e) {
                if (this.results = [], this.coinChanges = [], e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "RoundResultMsg", e.prototype.roomId = 0, e.prototype.results = f.emptyArray, e.prototype.coinChanges = f.emptyArray, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                if (n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.results && e.results.length)
                    for (var t = 0; t < e.results.length; ++t) h.pineapple.SharedData.PlayerRoundResult.encode(e.results[t], n.uint32(18).fork()).ldelim();
                if (null != e.coinChanges && e.coinChanges.length)
                    for (t = 0; t < e.coinChanges.length; ++t) h.pineapple.RoomCoinChangedMsg.encode(e.coinChanges[t], n.uint32(26).fork()).ldelim();
                return n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RoundResultMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.results && o.results.length || (o.results = []), o.results.push(h.pineapple.SharedData.PlayerRoundResult.decode(e, e.uint32()));
                            break;
                        case 3:
                            o.coinChanges && o.coinChanges.length || (o.coinChanges = []), o.coinChanges.push(h.pineapple.RoomCoinChangedMsg.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.PlayerSitDownReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "PlayerSitDownReq", e.prototype.roomId = 0, e.prototype.seat = 0, e.prototype.lat = 0, e.prototype.lng = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.seat && e.hasOwnProperty("seat") && n.uint32(16).int32(e.seat), null != e.lat && e.hasOwnProperty("lat") && n.uint32(29).float(e.lat), null != e.lng && e.hasOwnProperty("lng") && n.uint32(37).float(e.lng), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.PlayerSitDownReq; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.seat = e.int32();
                            break;
                        case 3:
                            o.lat = e.float();
                            break;
                        case 4:
                            o.lng = e.float();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.PlayerSitDownRes = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "PlayerSitDownRes", e.prototype.roomId = 0, e.prototype.code = 0, e.prototype.countdown = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && n.uint32(16).int32(e.code), null != e.countdown && e.hasOwnProperty("countdown") && n.uint32(24).uint32(e.countdown), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.PlayerSitDownRes; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        case 3:
                            o.countdown = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.PlayerLeaveRoomReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "PlayerLeaveRoomReq", e.prototype.roomId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.PlayerLeaveRoomReq; e.pos < t;) {
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
        }(), s.PlayerLeaveRoomRes = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "PlayerLeaveRoomRes", e.prototype.roomId = 0, e.prototype.code = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && n.uint32(16).int32(e.code), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.PlayerLeaveRoomRes; e.pos < t;) {
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
        }(), s.PlayerLeaveMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "PlayerLeaveMsg", e.prototype.roomId = 0, e.prototype.userId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && n.uint32(16).uint32(e.userId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.PlayerLeaveMsg; e.pos < t;) {
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
        }(), s.PlayerEnterMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "PlayerEnterMsg", e.prototype.roomId = 0, e.prototype.userId = 0, e.prototype.nickName = "", e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && n.uint32(16).uint32(e.userId), null != e.nickName && e.hasOwnProperty("nickName") && n.uint32(26).string(e.nickName), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.PlayerEnterMsg; e.pos < t;) {
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
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.RequireMoreCoinMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "RequireMoreCoinMsg", e.prototype.userId = 0, e.prototype.roomId = 0, e.prototype.levelId = 0, e.prototype.countdown = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.userId && e.hasOwnProperty("userId") && n.uint32(8).uint32(e.userId), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(16).uint32(e.roomId), null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(24).uint32(e.levelId), null != e.countdown && e.hasOwnProperty("countdown") && n.uint32(32).int32(e.countdown), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RequireMoreCoinMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.userId = e.uint32();
                            break;
                        case 2:
                            o.roomId = e.uint32();
                            break;
                        case 3:
                            o.levelId = e.uint32();
                            break;
                        case 4:
                            o.countdown = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.SeatOccupiedMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "SeatOccupiedMsg", e.prototype.roomId = 0, e.prototype.info = null, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.info && e.hasOwnProperty("info") && h.pineapple.SharedData.Player.encode(e.info, n.uint32(18).fork()).ldelim(), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.SeatOccupiedMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.info = h.pineapple.SharedData.Player.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.SeatEmptyMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "SeatEmptyMsg", e.prototype.roomId = 0, e.prototype.seat = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.seat && e.hasOwnProperty("seat") && n.uint32(24).int32(e.seat), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.SeatEmptyMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 3:
                            o.seat = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.GameFinishedMsg = function() {
            function e(e) {
                if (this.records = [], e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "GameFinishedMsg", e.prototype.roomId = 0, e.prototype.records = f.emptyArray, e.prototype.roundCount = 0, e.prototype.totalTakeIn = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                if (n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.records && e.records.length)
                    for (var t = 0; t < e.records.length; ++t) h.pineapple.GameFinishedMsg.RoundRecord.encode(e.records[t], n.uint32(18).fork()).ldelim();
                return null != e.roundCount && e.hasOwnProperty("roundCount") && n.uint32(24).uint32(e.roundCount), null != e.totalTakeIn && e.hasOwnProperty("totalTakeIn") && n.uint32(33).double(e.totalTakeIn), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.GameFinishedMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.records && o.records.length || (o.records = []), o.records.push(h.pineapple.GameFinishedMsg.RoundRecord.decode(e, e.uint32()));
                            break;
                        case 3:
                            o.roundCount = e.uint32();
                            break;
                        case 4:
                            o.totalTakeIn = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e.RoundRecord = function() {
                function e(e) {
                    if (e)
                        for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
                }
                return e.pbName = "RoundRecord", e.prototype.userId = 0, e.prototype.nickname = "", e.prototype.initCoin = 0, e.prototype.profit = 0, e.create = function(n) {
                    return new e(n)
                }, e.encode = function(e, n) {
                    return n || (n = p.create()), null != e.userId && e.hasOwnProperty("userId") && n.uint32(8).uint32(e.userId), null != e.nickname && e.hasOwnProperty("nickname") && n.uint32(18).string(e.nickname), null != e.initCoin && e.hasOwnProperty("initCoin") && n.uint32(25).double(e.initCoin), null != e.profit && e.hasOwnProperty("profit") && n.uint32(33).double(e.profit), n
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, n) {
                    return this.encode(e, n).ldelim()
                }, e.decode = function(e, n) {
                    e instanceof l || (e = l.create(e));
                    for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.GameFinishedMsg.RoundRecord; e.pos < t;) {
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
        }(), s.RoomCoinChangedMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "RoomCoinChangedMsg", e.prototype.roomId = 0, e.prototype.userId = 0, e.prototype.coin = 0, e.prototype.initCoin = 0, e.prototype.levelId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && n.uint32(16).uint32(e.userId), null != e.coin && e.hasOwnProperty("coin") && n.uint32(25).double(e.coin), null != e.initCoin && e.hasOwnProperty("initCoin") && n.uint32(33).double(e.initCoin), null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(40).uint32(e.levelId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RoomCoinChangedMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.userId = e.uint32();
                            break;
                        case 3:
                            o.coin = e.double();
                            break;
                        case 4:
                            o.initCoin = e.double();
                            break;
                        case 5:
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
        }(), s.PlayerLeaveSeatReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "PlayerLeaveSeatReq", e.prototype.roomId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.PlayerLeaveSeatReq; e.pos < t;) {
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
        }(), s.PlayerLeaveSeatRes = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "PlayerLeaveSeatRes", e.prototype.roomId = 0, e.prototype.code = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && n.uint32(16).int32(e.code), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.PlayerLeaveSeatRes; e.pos < t;) {
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
        }(), s.AllPlayersReadyMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "AllPlayersReadyMsg", e.prototype.roomId = 0, e.prototype.countdown = 0, e.prototype.leftTime = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.countdown && e.hasOwnProperty("countdown") && n.uint32(16).int32(e.countdown), null != e.leftTime && e.hasOwnProperty("leftTime") && n.uint32(24).int32(e.leftTime), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.AllPlayersReadyMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.countdown = e.int32();
                            break;
                        case 3:
                            o.leftTime = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.QuitGameMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "QuitGameMsg", e.prototype.roomId = 0, e.prototype.currCoin = 0, e.prototype.reqCoin = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.currCoin && e.hasOwnProperty("currCoin") && n.uint32(21).float(e.currCoin), null != e.reqCoin && e.hasOwnProperty("reqCoin") && n.uint32(29).float(e.reqCoin), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.QuitGameMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.currCoin = e.float();
                            break;
                        case 3:
                            o.reqCoin = e.float();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.MatchingNewGameMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "MatchingNewGameMsg", e.prototype.roomId = 0, e.prototype.level = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.level && e.hasOwnProperty("level") && n.uint32(16).uint32(e.level), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.MatchingNewGameMsg; e.pos < t;) {
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
        }(), s.MatchedNewGameMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "MatchedNewGameMsg", e.prototype.roomId = 0, e.prototype.level = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.level && e.hasOwnProperty("level") && n.uint32(16).uint32(e.level), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.MatchedNewGameMsg; e.pos < t;) {
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
        }(), s.ExitMatchingQueueReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "ExitMatchingQueueReq", e.prototype.level = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.level && e.hasOwnProperty("level") && n.uint32(16).uint32(e.level), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.ExitMatchingQueueReq; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
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
        }(), s.ExitMatchingQueueRes = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "ExitMatchingQueueRes", e.prototype.errorCode = 0, e.prototype.level = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.errorCode && e.hasOwnProperty("errorCode") && n.uint32(8).uint32(e.errorCode), null != e.level && e.hasOwnProperty("level") && n.uint32(16).uint32(e.level), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.ExitMatchingQueueRes; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.errorCode = e.uint32();
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
        }(), s.TakeInCoinReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "TakeInCoinReq", e.prototype.roomId = 0, e.prototype.levelId = 0, e.prototype.coin = 0, e.prototype.joinJP = 0, e.prototype.itemId = f.Long ? f.Long.fromBits(0, 0, !0) : 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(16).uint32(e.levelId), null != e.coin && e.hasOwnProperty("coin") && n.uint32(25).double(e.coin), null != e.joinJP && e.hasOwnProperty("joinJP") && n.uint32(32).int32(e.joinJP), null != e.itemId && e.hasOwnProperty("itemId") && n.uint32(40).uint64(e.itemId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.TakeInCoinReq; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.levelId = e.uint32();
                            break;
                        case 3:
                            o.coin = e.double();
                            break;
                        case 4:
                            o.joinJP = e.int32();
                            break;
                        case 5:
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
        }(), s.TakeInCoinRes = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "TakeInCoinRes", e.prototype.code = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.code && e.hasOwnProperty("code") && n.uint32(8).int32(e.code), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.TakeInCoinRes; e.pos < t;) {
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
        }(), s.RoomListReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "RoomListReq", e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RoomListReq; e.pos < t;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.RoomListRes = function() {
            function e(e) {
                if (this.rooms = [], e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "RoomListRes", e.prototype.rooms = f.emptyArray, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                if (n || (n = p.create()), null != e.rooms && e.rooms.length)
                    for (var t = 0; t < e.rooms.length; ++t) h.pineapple.RoomListRes.RoomInfo.encode(e.rooms[t], n.uint32(10).fork()).ldelim();
                return n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RoomListRes; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.rooms && o.rooms.length || (o.rooms = []), o.rooms.push(h.pineapple.RoomListRes.RoomInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e.RoomInfo = function() {
                function e(e) {
                    if (e)
                        for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
                }
                return e.pbName = "RoomInfo", e.prototype.roomId = 0, e.prototype.gameType = 0, e.prototype.level = 0, e.create = function(n) {
                    return new e(n)
                }, e.encode = function(e, n) {
                    return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.gameType && e.hasOwnProperty("gameType") && n.uint32(16).int32(e.gameType), null != e.level && e.hasOwnProperty("level") && n.uint32(24).int32(e.level), n
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, n) {
                    return this.encode(e, n).ldelim()
                }, e.decode = function(e, n) {
                    e instanceof l || (e = l.create(e));
                    for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RoomListRes.RoomInfo; e.pos < t;) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                            case 1:
                                o.roomId = e.uint32();
                                break;
                            case 2:
                                o.gameType = e.int32();
                                break;
                            case 3:
                                o.level = e.int32();
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
        }(), s.RoomSnapshotReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "RoomSnapshotReq", e.prototype.roomId = 0, e.prototype.levelId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(16).uint32(e.levelId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RoomSnapshotReq; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
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
        }(), s.Emoji = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "Emoji", e.prototype.userId = 0, e.prototype.roomId = 0, e.prototype.body = "", e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.userId && e.hasOwnProperty("userId") && n.uint32(8).uint32(e.userId), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(16).uint32(e.roomId), null != e.body && e.hasOwnProperty("body") && n.uint32(26).string(e.body), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.Emoji; e.pos < t;) {
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
        }(), s.ServerExiting = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "ServerExiting", e.prototype.message = "", e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.message && e.hasOwnProperty("message") && n.uint32(10).string(e.message), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.ServerExiting; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.message = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.RoomBillReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "RoomBillReq", e.prototype.roomId = 0, e.prototype.levelId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(16).uint32(e.levelId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RoomBillReq; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
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
        }(), s.RoomBillRes = function() {
            function e(e) {
                if (this.bills = [], e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "RoomBillRes", e.prototype.roomId = 0, e.prototype.code = 0, e.prototype.bills = f.emptyArray, e.prototype.levelId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                if (n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && n.uint32(16).int32(e.code), null != e.bills && e.bills.length)
                    for (var t = 0; t < e.bills.length; ++t) h.pineapple.RoomBillRes.RoomBill.encode(e.bills[t], n.uint32(26).fork()).ldelim();
                return null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(32).uint32(e.levelId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RoomBillRes; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        case 3:
                            o.bills && o.bills.length || (o.bills = []), o.bills.push(h.pineapple.RoomBillRes.RoomBill.decode(e, e.uint32()));
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
            }, e.RoomBill = function() {
                function e(e) {
                    if (e)
                        for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
                }
                return e.pbName = "RoomBill", e.prototype.userId = 0, e.prototype.nickname = "", e.prototype.initCoin = 0, e.prototype.profit = 0, e.create = function(n) {
                    return new e(n)
                }, e.encode = function(e, n) {
                    return n || (n = p.create()), null != e.userId && e.hasOwnProperty("userId") && n.uint32(8).uint32(e.userId), null != e.nickname && e.hasOwnProperty("nickname") && n.uint32(18).string(e.nickname), null != e.initCoin && e.hasOwnProperty("initCoin") && n.uint32(29).float(e.initCoin), null != e.profit && e.hasOwnProperty("profit") && n.uint32(37).float(e.profit), n
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, n) {
                    return this.encode(e, n).ldelim()
                }, e.decode = function(e, n) {
                    e instanceof l || (e = l.create(e));
                    for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RoomBillRes.RoomBill; e.pos < t;) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                            case 1:
                                o.userId = e.uint32();
                                break;
                            case 2:
                                o.nickname = e.string();
                                break;
                            case 3:
                                o.initCoin = e.float();
                                break;
                            case 4:
                                o.profit = e.float();
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
        }(), s.PlaceTimeMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "PlaceTimeMsg", e.prototype.roomId = 0, e.prototype.userId = 0, e.prototype.seconds = 0, e.prototype.extra = !1, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && n.uint32(16).uint32(e.userId), null != e.seconds && e.hasOwnProperty("seconds") && n.uint32(24).int32(e.seconds), null != e.extra && e.hasOwnProperty("extra") && n.uint32(32).bool(e.extra), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.PlaceTimeMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.userId = e.uint32();
                            break;
                        case 3:
                            o.seconds = e.int32();
                            break;
                        case 4:
                            o.extra = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.PlayerStateMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "PlayerStateMsg", e.prototype.roomId = 0, e.prototype.userId = 0, e.prototype.state = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && n.uint32(16).uint32(e.userId), null != e.state && e.hasOwnProperty("state") && n.uint32(24).int32(e.state), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.PlayerStateMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.userId = e.uint32();
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
        }(), s.AutoPlayMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "AutoPlayMsg", e.prototype.roomId = 0, e.prototype.userId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && n.uint32(16).uint32(e.userId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.AutoPlayMsg; e.pos < t;) {
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
        }(), s.CancelAutoPlayReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "CancelAutoPlayReq", e.prototype.roomId = 0, e.prototype.levelId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(16).uint32(e.levelId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.CancelAutoPlayReq; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
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
        }(), s.CancelAutoPlayRes = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "CancelAutoPlayRes", e.prototype.roomId = 0, e.prototype.code = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && n.uint32(16).int32(e.code), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.CancelAutoPlayRes; e.pos < t;) {
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
        }(), s.SettleNextReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "SettleNextReq", e.prototype.levelId = 0, e.prototype.noCheckItem = !1, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(8).uint32(e.levelId), null != e.noCheckItem && e.hasOwnProperty("noCheckItem") && n.uint32(16).bool(e.noCheckItem), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.SettleNextReq; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.levelId = e.uint32();
                            break;
                        case 2:
                            o.noCheckItem = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.SettleNextRes = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "SettleNextRes", e.prototype.levelId = 0, e.prototype.code = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(8).uint32(e.levelId), null != e.code && e.hasOwnProperty("code") && n.uint32(16).int32(e.code), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.SettleNextRes; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.levelId = e.uint32();
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
        }(), s.CancelTakeInReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "CancelTakeInReq", e.prototype.roomId = 0, e.prototype.levelId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(16).uint32(e.levelId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.CancelTakeInReq; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
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
        }(), s.CancelTakeInRes = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "CancelTakeInRes", e.prototype.code = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.code && e.hasOwnProperty("code") && n.uint32(8).int32(e.code), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.CancelTakeInRes; e.pos < t;) {
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
        }(), s.OtherRoomMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "OtherRoomMsg", e.prototype.roomId = 0, e.prototype.categary = 0, e.prototype.isAof = !1, e.prototype.levelId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.categary && e.hasOwnProperty("categary") && n.uint32(16).uint32(e.categary), null != e.isAof && e.hasOwnProperty("isAof") && n.uint32(24).bool(e.isAof), null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(32).uint32(e.levelId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.OtherRoomMsg; e.pos < t;) {
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
        }(), s.RoomReleaseMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "RoomReleaseMsg", e.prototype.roomId = 0, e.prototype.message = "", e.prototype.levelId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.message && e.hasOwnProperty("message") && n.uint32(18).string(e.message), null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(24).uint32(e.levelId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RoomReleaseMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.message = e.string();
                            break;
                        case 3:
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
        }(), s.RoomPauseMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "RoomPauseMsg", e.prototype.roomId = 0, e.prototype.pause = !1, e.prototype.message = "", e.prototype.levelId = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.pause && e.hasOwnProperty("pause") && n.uint32(16).bool(e.pause), null != e.message && e.hasOwnProperty("message") && n.uint32(26).string(e.message), null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(32).uint32(e.levelId), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RoomPauseMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.pause = e.bool();
                            break;
                        case 3:
                            o.message = e.string();
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
        }(), s.RoundStartMsg = function() {
            function e(e) {
                if (this.fantasyUserId = [], e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "RoundStartMsg", e.prototype.roomId = 0, e.prototype.fantasyUserId = f.emptyArray, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                if (n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.fantasyUserId && e.fantasyUserId.length) {
                    n.uint32(18).fork();
                    for (var t = 0; t < e.fantasyUserId.length; ++t) n.uint32(e.fantasyUserId[t]);
                    n.ldelim()
                }
                return n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RoundStartMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            if (o.fantasyUserId && o.fantasyUserId.length || (o.fantasyUserId = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.fantasyUserId.push(e.uint32());
                            else o.fantasyUserId.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.JackpotUpdateMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "JackpotUpdateMsg", e.prototype.point = 0, e.prototype.jp = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.point && e.hasOwnProperty("point") && n.uint32(13).float(e.point), null != e.jp && e.hasOwnProperty("jp") && n.uint32(17).double(e.jp), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.JackpotUpdateMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.point = e.float();
                            break;
                        case 2:
                            o.jp = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.JackpotHitMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "JackpotHitMsg", e.prototype.nickName = "", e.prototype.point = 0, e.prototype.ranks = f.newBuffer([]), e.prototype.coin = 0, e.prototype.hitKey = "", e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.nickName && e.hasOwnProperty("nickName") && n.uint32(10).string(e.nickName), null != e.point && e.hasOwnProperty("point") && n.uint32(21).float(e.point), null != e.ranks && e.hasOwnProperty("ranks") && n.uint32(26).bytes(e.ranks), null != e.coin && e.hasOwnProperty("coin") && n.uint32(49).double(e.coin), null != e.hitKey && e.hasOwnProperty("hitKey") && n.uint32(58).string(e.hitKey), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.JackpotHitMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.nickName = e.string();
                            break;
                        case 2:
                            o.point = e.float();
                            break;
                        case 3:
                            o.ranks = e.bytes();
                            break;
                        case 6:
                            o.coin = e.double();
                            break;
                        case 7:
                            o.hitKey = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.JackpotCarouseltMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "JackpotCarouseltMsg", e.prototype.message = "", e.prototype.coinPerPoint = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.message && e.hasOwnProperty("message") && n.uint32(10).string(e.message), null != e.coinPerPoint && e.hasOwnProperty("coinPerPoint") && n.uint32(17).double(e.coinPerPoint), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.JackpotCarouseltMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.message = e.string();
                            break;
                        case 2:
                            o.coinPerPoint = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.OtherLoginMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "OtherLoginMsg", e.prototype.otherIp = "", e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.otherIp && e.hasOwnProperty("otherIp") && n.uint32(10).string(e.otherIp), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.OtherLoginMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.otherIp = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.AnimReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "AnimReq", e.prototype.roomId = 0, e.prototype.targetUser = 0, e.prototype.anim = "", e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.targetUser && e.hasOwnProperty("targetUser") && n.uint32(16).uint32(e.targetUser), null != e.anim && e.hasOwnProperty("anim") && n.uint32(26).string(e.anim), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.AnimReq; e.pos < t;) {
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
        }(), s.AnimRes = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "AnimRes", e.prototype.roomId = 0, e.prototype.code = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && n.uint32(16).int32(e.code), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.AnimRes; e.pos < t;) {
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
        }(), s.AnimMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "AnimMsg", e.prototype.roomId = 0, e.prototype.sender = 0, e.prototype.targetUser = 0, e.prototype.anim = "", e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.sender && e.hasOwnProperty("sender") && n.uint32(16).uint32(e.sender), null != e.targetUser && e.hasOwnProperty("targetUser") && n.uint32(24).uint32(e.targetUser), null != e.anim && e.hasOwnProperty("anim") && n.uint32(34).string(e.anim), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.AnimMsg; e.pos < t;) {
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
        }(), s.RoomConfReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "RoomConfReq", e.prototype.id = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.id && e.hasOwnProperty("id") && n.uint32(8).uint32(e.id), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RoomConfReq; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.id = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.RoomConfRes = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "RoomConfRes", e.prototype.id = 0, e.prototype.code = 0, e.prototype.RoomName = "", e.prototype.playerCount = 0, e.prototype.flags = 0, e.prototype.mode = 0, e.prototype.coinPerPoint = 0, e.prototype.deal = 0, e.prototype.minTakeIn = 0, e.prototype.takeIn = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.id && e.hasOwnProperty("id") && n.uint32(8).uint32(e.id), null != e.code && e.hasOwnProperty("code") && n.uint32(16).int32(e.code), null != e.RoomName && e.hasOwnProperty("RoomName") && n.uint32(26).string(e.RoomName), null != e.playerCount && e.hasOwnProperty("playerCount") && n.uint32(32).int32(e.playerCount), null != e.flags && e.hasOwnProperty("flags") && n.uint32(40).int32(e.flags), null != e.mode && e.hasOwnProperty("mode") && n.uint32(48).int32(e.mode), null != e.coinPerPoint && e.hasOwnProperty("coinPerPoint") && n.uint32(61).float(e.coinPerPoint), null != e.deal && e.hasOwnProperty("deal") && n.uint32(64).int32(e.deal), null != e.minTakeIn && e.hasOwnProperty("minTakeIn") && n.uint32(77).float(e.minTakeIn), null != e.takeIn && e.hasOwnProperty("takeIn") && n.uint32(85).float(e.takeIn), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RoomConfRes; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.id = e.uint32();
                            break;
                        case 2:
                            o.code = e.int32();
                            break;
                        case 3:
                            o.RoomName = e.string();
                            break;
                        case 4:
                            o.playerCount = e.int32();
                            break;
                        case 5:
                            o.flags = e.int32();
                            break;
                        case 6:
                            o.mode = e.int32();
                            break;
                        case 7:
                            o.coinPerPoint = e.float();
                            break;
                        case 8:
                            o.deal = e.int32();
                            break;
                        case 9:
                            o.minTakeIn = e.float();
                            break;
                        case 10:
                            o.takeIn = e.float();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.VoiceReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "VoiceReq", e.prototype.roomId = 0, e.prototype.voiceUrl = "", e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.voiceUrl && e.hasOwnProperty("voiceUrl") && n.uint32(18).string(e.voiceUrl), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.VoiceReq; e.pos < t;) {
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
        }(), s.VoiceRes = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "VoiceRes", e.prototype.roomId = 0, e.prototype.code = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && n.uint32(16).int32(e.code), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.VoiceRes; e.pos < t;) {
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
        }(), s.VoiceMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "VoiceMsg", e.prototype.roomId = 0, e.prototype.userId = 0, e.prototype.voiceUrl = "", e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && n.uint32(16).uint32(e.userId), null != e.voiceUrl && e.hasOwnProperty("voiceUrl") && n.uint32(26).string(e.voiceUrl), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.VoiceMsg; e.pos < t;) {
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
        }(), s.PlayerNickNameChangeMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "PlayerNickNameChangeMsg", e.prototype.roomId = 0, e.prototype.userId = 0, e.prototype.nickName = "", e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && n.uint32(16).uint32(e.userId), null != e.nickName && e.hasOwnProperty("nickName") && n.uint32(26).string(e.nickName), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.PlayerNickNameChangeMsg; e.pos < t;) {
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
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.CancelTakeInMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "CancelTakeInMsg", e.prototype.levelId = 0, e.prototype.roomId = 0, e.prototype.userId = 0, e.prototype.coinLeft = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(8).uint32(e.levelId), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(16).uint32(e.roomId), null != e.userId && e.hasOwnProperty("userId") && n.uint32(24).uint32(e.userId), null != e.coinLeft && e.hasOwnProperty("coinLeft") && n.uint32(33).double(e.coinLeft), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.CancelTakeInMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.levelId = e.uint32();
                            break;
                        case 2:
                            o.roomId = e.uint32();
                            break;
                        case 3:
                            o.userId = e.uint32();
                            break;
                        case 4:
                            o.coinLeft = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.JackpotEnableMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "JackpotEnableMsg", e.prototype.levelId = 0, e.prototype.roomId = 0, e.prototype.enable = !1, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(8).uint32(e.levelId), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(16).uint32(e.roomId), null != e.enable && e.hasOwnProperty("enable") && n.uint32(24).bool(e.enable), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.JackpotEnableMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.levelId = e.uint32();
                            break;
                        case 2:
                            o.roomId = e.uint32();
                            break;
                        case 3:
                            o.enable = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.JackpotInfoReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "JackpotInfoReq", e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.JackpotInfoReq; e.pos < t;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.JackpotInfoRes = function() {
            function e(e) {
                if (this.jackpotPts = [], this.jackpotSets = [], e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "JackpotInfoRes", e.prototype.totalJackpot = 0, e.prototype.jackpotPts = f.emptyArray, e.prototype.jackpotSets = f.emptyArray, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                if (n || (n = p.create()), null != e.totalJackpot && e.hasOwnProperty("totalJackpot") && n.uint32(9).double(e.totalJackpot), null != e.jackpotPts && e.jackpotPts.length)
                    for (var t = 0; t < e.jackpotPts.length; ++t) h.pineapple.JackpotInfoRes.jackpotPt.encode(e.jackpotPts[t], n.uint32(18).fork()).ldelim();
                if (null != e.jackpotSets && e.jackpotSets.length)
                    for (t = 0; t < e.jackpotSets.length; ++t) h.pineapple.JackpotInfoRes.jackpotSet.encode(e.jackpotSets[t], n.uint32(26).fork()).ldelim();
                return n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.JackpotInfoRes; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.totalJackpot = e.double();
                            break;
                        case 2:
                            o.jackpotPts && o.jackpotPts.length || (o.jackpotPts = []), o.jackpotPts.push(h.pineapple.JackpotInfoRes.jackpotPt.decode(e, e.uint32()));
                            break;
                        case 3:
                            o.jackpotSets && o.jackpotSets.length || (o.jackpotSets = []), o.jackpotSets.push(h.pineapple.JackpotInfoRes.jackpotSet.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e.jackpotPt = function() {
                function e(e) {
                    if (e)
                        for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
                }
                return e.pbName = "jackpotPt", e.prototype.point = 0, e.prototype.jackpot = 0, e.create = function(n) {
                    return new e(n)
                }, e.encode = function(e, n) {
                    return n || (n = p.create()), null != e.point && e.hasOwnProperty("point") && n.uint32(13).float(e.point), null != e.jackpot && e.hasOwnProperty("jackpot") && n.uint32(17).double(e.jackpot), n
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, n) {
                    return this.encode(e, n).ldelim()
                }, e.decode = function(e, n) {
                    e instanceof l || (e = l.create(e));
                    for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.JackpotInfoRes.jackpotPt; e.pos < t;) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                            case 1:
                                o.point = e.float();
                                break;
                            case 2:
                                o.jackpot = e.double();
                                break;
                            default:
                                e.skipType(7 & r)
                        }
                    }
                    return o
                }, e.decodeDelimited = function(e) {
                    return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
                }, e
            }(), e.jackpotSet = function() {
                function e(e) {
                    if (e)
                        for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
                }
                return e.pbName = "jackpotSet", e.prototype.Point = 0, e.prototype.Ratio = 0, e.create = function(n) {
                    return new e(n)
                }, e.encode = function(e, n) {
                    return n || (n = p.create()), null != e.Point && e.hasOwnProperty("Point") && n.uint32(8).uint32(e.Point), null != e.Ratio && e.hasOwnProperty("Ratio") && n.uint32(21).float(e.Ratio), n
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, n) {
                    return this.encode(e, n).ldelim()
                }, e.decode = function(e, n) {
                    e instanceof l || (e = l.create(e));
                    for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.JackpotInfoRes.jackpotSet; e.pos < t;) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                            case 1:
                                o.Point = e.uint32();
                                break;
                            case 2:
                                o.Ratio = e.float();
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
        }(), s.SetCardReq = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "SetCardReq", e.prototype.roomId = 0, e.prototype.Cards = f.newBuffer([]), e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.Cards && e.hasOwnProperty("Cards") && n.uint32(18).bytes(e.Cards), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.SetCardReq; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.Cards = e.bytes();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.SetCardRes = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "SetCardRes", e.prototype.roomId = 0, e.prototype.code = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.code && e.hasOwnProperty("code") && n.uint32(16).int32(e.code), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.SetCardRes; e.pos < t;) {
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
        }(), s.LevelStateMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "LevelStateMsg", e.prototype.levelId = 0, e.prototype.state = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.levelId && e.hasOwnProperty("levelId") && n.uint32(8).uint32(e.levelId), null != e.state && e.hasOwnProperty("state") && n.uint32(16).int32(e.state), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.LevelStateMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.levelId = e.uint32();
                            break;
                        case 2:
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
        }(), s.RedPocketCarouseMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "RedPocketCarouseMsg", e.prototype.eventId = 0, e.prototype.amount = 0, e.prototype.format = "", e.prototype.nickname = "", e.prototype.category = 0, e.prototype.UserId = 0, e.prototype.GameId = 0, e.prototype.ToolName = "", e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.eventId && e.hasOwnProperty("eventId") && n.uint32(8).uint32(e.eventId), null != e.amount && e.hasOwnProperty("amount") && n.uint32(17).double(e.amount), null != e.format && e.hasOwnProperty("format") && n.uint32(26).string(e.format), null != e.nickname && e.hasOwnProperty("nickname") && n.uint32(34).string(e.nickname), null != e.category && e.hasOwnProperty("category") && n.uint32(40).uint32(e.category), null != e.UserId && e.hasOwnProperty("UserId") && n.uint32(48).uint32(e.UserId), null != e.GameId && e.hasOwnProperty("GameId") && n.uint32(56).uint32(e.GameId), null != e.ToolName && e.hasOwnProperty("ToolName") && n.uint32(66).string(e.ToolName), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.RedPocketCarouseMsg; e.pos < t;) {
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
                            o.category = e.uint32();
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
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.DealerPosMsg = function() {
            function e(e) {
                if (e)
                    for (var n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
            }
            return e.pbName = "DealerPosMsg", e.prototype.roomId = 0, e.prototype.dealerPos = 0, e.create = function(n) {
                return new e(n)
            }, e.encode = function(e, n) {
                return n || (n = p.create()), null != e.roomId && e.hasOwnProperty("roomId") && n.uint32(8).uint32(e.roomId), null != e.dealerPos && e.hasOwnProperty("dealerPos") && n.uint32(16).int32(e.dealerPos), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, n) {
                return this.encode(e, n).ldelim()
            }, e.decode = function(e, n) {
                e instanceof l || (e = l.create(e));
                for (var t = void 0 === n ? e.len : e.pos + n, o = new h.pineapple.DealerPosMsg; e.pos < t;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.roomId = e.uint32();
                            break;
                        case 2:
                            o.dealerPos = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof l || (e = new l(e)), this.decode(e, e.uint32())
            }, e
        }(), s.ErrorCode = (c = {}, (u = Object.create(c))[c[0] = "OK"] = 0, u[c[10] = "SERVER_EXITING"] = 10, u[c[50001] = "INVALID_TOKEN"] = 50001, u[c[50002] = "INVALID_ROOM"] = 50002, u[c[50003] = "INVALID_PARAM"] = 50003, u[c[50004] = "INVALID_STATE"] = 50004, u[c[50005] = "INVALID_SEAT_NUM"] = 50005, u[c[50049] = "ALREADY_PLACED"] = 50049, u[c[50050] = "CAN_LEAVE"] = 50050, u[c[50051] = "TIMEOUT"] = 50051, u[c[50052] = "PLAYING"] = 50052, u[c[50053] = "ALREADY_SITTED"] = 50053, u[c[50054] = "SEAT_OCCUPIED"] = 50054, u[c[50055] = "NOT_IN_ROOM"] = 50055, u[c[50056] = "NEAR_GPS"] = 50056, u[c[50057] = "SAME_IP"] = 50057, u[c[50058] = "OTHER_ROOM"] = 50058, u[c[50059] = "NEED_TAKEIN"] = 50059, u[c[50060] = "NEED_MORE_COIN"] = 50060, u[c[50061] = "OTHER_LEVEL"] = 50061, u[c[50062] = "ROOM_BROKEN"] = 50062, u[c[50063] = "GAME_PAUSED"] = 50063, u[c[50064] = "LESS_ONE_ROUND"] = 50064, u[c[50065] = "ROOM_RELEASED"] = 50065, u[c[50066] = "LESS_COIN"] = 50066, u[c[50070] = "NO_LEVEL"] = 50070, u[c[50071] = "NO_SEAT"] = 50071, u[c[50073] = "NO_LOGIN"] = 50073, u[c[50074] = "NO_MATCHING"] = 50074, u[c[50075] = "Level_User_Matching"] = 50075, u[c[50076] = "Level_User_Settled"] = 50076, u[c[50077] = "Level_User_AutoPlay"] = 50077, u[c[50085] = "FinalVoice"] = 50085, u), s.MessageId = function() {
            var e = {},
                n = Object.create(e);
            return n[e[0] = "Null"] = 0, n[e[10] = "ServerExiting"] = 10, n[e[50001] = "UserTokenReq"] = 50001, n[e[50002] = "UserTokenRes"] = 50002, n[e[50003] = "EnterRoomReq"] = 50003, n[e[50004] = "EnterRoomRes"] = 50004, n[e[50005] = "ReadyReq"] = 50005, n[e[50006] = "ReadyRes"] = 50006, n[e[50007] = "PlaceCardsReq"] = 50007, n[e[50008] = "PlaceCardsRes"] = 50008, n[e[50010] = "RoundResultMsg"] = 50010, n[e[50013] = "PlayerSitDownReq"] = 50013, n[e[50014] = "PlayerSitDownRes"] = 50014, n[e[50016] = "RequireMoreCoinMsg"] = 50016, n[e[50018] = "GameFinishedMsg"] = 50018, n[e[50022] = "DispatchCardsMsg"] = 50022, n[e[50023] = "JackpotUpdateMsg"] = 50023, n[e[50024] = "JackpotHitMsg"] = 50024, n[e[50025] = "JackpotCarouseltMsg"] = 50025, n[e[50026] = "CardsShowedMsg"] = 50026, n[e[50028] = "CardsPlacedMsg"] = 50028, n[e[50029] = "PlayerLeaveRoomReq"] = 50029, n[e[50030] = "PlayerLeaveRoomRes"] = 50030, n[e[50032] = "SeatOccupiedMsg"] = 50032, n[e[50034] = "SeatEmptyMsg"] = 50034, n[e[50036] = "RoomCoinChangedMsg"] = 50036, n[e[50039] = "PlayerLeaveSeatReq"] = 50039, n[e[50040] = "PlayerLeaveSeatRes"] = 50040, n[e[50042] = "AllPlayersReadyMsg"] = 50042, n[e[50044] = "QuitGameMsg"] = 50044, n[e[50045] = "TakeInCoinReq"] = 50045, n[e[50046] = "TakeInCoinRes"] = 50046, n[e[50047] = "RoomListReq"] = 50047, n[e[50048] = "RoomListRes"] = 50048, n[e[50049] = "RoomSnapshotReq"] = 50049, n[e[50051] = "RoomBillReq"] = 50051, n[e[50052] = "RoomBillRes"] = 50052, n[e[50054] = "RoomSnapshotMsg"] = 50054, n[e[50057] = "PlaceTimeMsg"] = 50057, n[e[50059] = "PlayerStateMsg"] = 50059, n[e[50061] = "EnterLevelReq"] = 50061, n[e[50062] = "EnterLevelRes"] = 50062, n[e[50063] = "Emoji"] = 50063, n[e[50064] = "AnimReq"] = 50064, n[e[50065] = "AnimRes"] = 50065, n[e[50066] = "AnimMsg"] = 50066, n[e[50067] = "RoomConfReq"] = 50067, n[e[50068] = "RoomConfRes"] = 50068, n[e[50069] = "VoiceReq"] = 50069, n[e[50070] = "VoiceRes"] = 50070, n[e[50071] = "VoiceMsg"] = 50071, n[e[50100] = "MatchingNewGameMsg"] = 50100, n[e[50101] = "ExitMatchingQueueReq"] = 50101, n[e[50102] = "ExitMatchingQueueRes"] = 50102, n[e[50104] = "AutoPlayMsg"] = 50104, n[e[50105] = "CancelAutoPlayReq"] = 50105, n[e[50106] = "CancelAutoPlayRes"] = 50106, n[e[50107] = "SettleNextReq"] = 50107, n[e[50108] = "SettleNextRes"] = 50108, n[e[50109] = "PlayerLeaveMsg"] = 50109, n[e[50111] = "PlayerEnterMsg"] = 50111, n[e[50113] = "CancelTakeInReq"] = 50113, n[e[50114] = "CancelTakeInRes"] = 50114, n[e[50116] = "OtherRoomMsg"] = 50116, n[e[50117] = "OtherLoginMsg"] = 50117, n[e[50118] = "MatchedNewGameMsg"] = 50118, n[e[50119] = "RoomReleaseMsg"] = 50119, n[e[50120] = "RoomPauseMsg"] = 50120, n[e[50121] = "RoundStartMsg"] = 50121, n[e[50122] = "PlayerNickNameChangeMsg"] = 50122, n[e[50123] = "CancelTakeInMsg"] = 50123, n[e[50124] = "JackpotEnableMsg"] = 50124, n[e[50125] = "JackpotInfoReq"] = 50125, n[e[50126] = "JackpotInfoRes"] = 50126, n[e[50127] = "SetCardReq"] = 50127, n[e[50128] = "SetCardRes"] = 50128, n[e[50130] = "LevelStateMsg"] = 50130, n[e[50131] = "RedPocketCarouseMsg"] = 50131, n[e[50134] = "DealerPosMsg"] = 50134, n
        }(), s.PlayerState = function() {
            var e = {},
                n = Object.create(e);
            return n[e[0] = "STATE_NONE"] = 0, n[e[1] = "READY"] = 1, n[e[9] = "NEXT_ROUND"] = 9, n[e[10] = "WAITFOR_NEXT"] = 10, n[e[31] = "WAIT_TAKEIN"] = 31, n[e[32] = "FINISH_TAKEIN"] = 32, n[e[33] = "LESS_TAKEIN"] = 33, n[e[34] = "RE_TAKEIN"] = 34, n[e[35] = "STATE_FINISH"] = 35, n[e[101] = "RECV_CARDS"] = 101, n[e[102] = "RECV_CARDS2"] = 102, n[e[103] = "RECV_CARDS3"] = 103, n[e[104] = "RECV_CARDS4"] = 104, n[e[105] = "RECV_CARDS5"] = 105, n[e[106] = "RECV_CARDS_END"] = 106, n
        }(), s.RoomFlags = function() {
            var e = {},
                n = Object.create(e);
            return n[e[0] = "ROOM_FLAG_NONE"] = 0, n[e[1] = "ROOM_FLAG_CHECK_GPS"] = 1, n[e[2] = "ROOM_FLAG_CHECK_IP"] = 2, n[e[4] = "ROOM_FLAG_PAUSED"] = 4, n[e[8] = "ROOM_FLAG_STOP_NEXT_ROUND"] = 8, n
        }(), s.Deal = function() {
            var e = {},
                n = Object.create(e);
            return n[e[0] = "DEAL_CONCURRENT"] = 0, n[e[1] = "DEAL_ORDER"] = 1, n
        }(), s.RoomMode = function() {
            var e = {},
                n = Object.create(e);
            return n[e[0] = "ROOM_MODE_NONE"] = 0, n[e[1] = "ROOM_MODE_NORMAL"] = 1, n[e[2] = "ROOM_MODE_JOKERS"] = 2, n[e[3] = "ROOM_MODE_BLOODWAR"] = 3, n[e[4] = "ROOM_MODE_BLOODINOUT"] = 4, n
        }(), s.RoomState = function() {
            var e = {},
                n = Object.create(e);
            return n[e[0] = "ROOM_STATE_NONE"] = 0, n[e[101] = "ROOM_STATE_SEND_CARDS_1"] = 101, n[e[102] = "ROOM_STATE_SEND_CARDS_2"] = 102, n[e[103] = "ROOM_STATE_SEND_CARDS_3"] = 103, n[e[104] = "ROOM_STATE_SEND_CARDS_4"] = 104, n[e[105] = "ROOM_STATE_SEND_CARDS_5"] = 105, n[e[9] = "ROOM_STATE_NEXT_ROUND"] = 9, n[e[10] = "ROOM_STATE_ALL_READY"] = 10, n[e[11] = "ROOM_STATE_WAIT_RE_TAKEIN"] = 11, n[e[12] = "ROOM_STATE_SHOW_RESULT"] = 12, n
        }(), s.JoinJackpotCode = function() {
            var e = {},
                n = Object.create(e);
            return n[e[0] = "JP_NONE"] = 0, n[e[1] = "JP_JOIN"] = 1, n[e[-1] = "JP_NOT_JOIN"] = -1, n
        }(), s.LevelState = function() {
            var e = {},
                n = Object.create(e);
            return n[e[0] = "LEVEL_STATE_NONE"] = 0, n[e[1] = "LEVEL_STATE_PLAY"] = 1, n[e[2] = "LEVEL_STATE_PAUSE"] = 2, n[e[3] = "LEVEL_STATE_End"] = 3, n[e[4] = "LEVEL_STATE_DISSOLVE"] = 4, n
        }(), s), o.exports = h, r = e("default", o.exports)
    }), (() => ({
        "protobufjs/minimal.js": o
    })))
}