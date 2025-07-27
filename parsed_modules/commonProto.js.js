import * as n from "./cjs-loader.mjs.js";
import * as o from "./minimal.js";

function main() {
    let r;
    e("default", void 0);
    const i = e("__cjsMetaURL", t.meta.url);
    n.define(i, (function(t, n, o, i, a) {
        var s, u, l, c, d, p, m, f = n("protobufjs/minimal.js"),
            y = f.Reader,
            h = f.Writer,
            b = f.util,
            k = f.roots.default || (f.roots.default = {});
        k.dataTypes = ((s = {}).NullableInt64 = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "NullableInt64", e.prototype.notNull = !1, e.prototype.value = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.value && e.hasOwnProperty("value") && t.uint32(8).int64(e.value), null != e.notNull && e.hasOwnProperty("notNull") && t.uint32(16).bool(e.notNull), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.dataTypes.NullableInt64; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 2:
                            o.notNull = e.bool();
                            break;
                        case 1:
                            o.value = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), s.NullableInt32 = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "NullableInt32", e.prototype.notNull = !1, e.prototype.value = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.value && e.hasOwnProperty("value") && t.uint32(8).int32(e.value), null != e.notNull && e.hasOwnProperty("notNull") && t.uint32(16).bool(e.notNull), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.dataTypes.NullableInt32; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 2:
                            o.notNull = e.bool();
                            break;
                        case 1:
                            o.value = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), s.NullableFloat64 = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "NullableFloat64", e.prototype.notNull = !1, e.prototype.value = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.value && e.hasOwnProperty("value") && t.uint32(9).double(e.value), null != e.notNull && e.hasOwnProperty("notNull") && t.uint32(16).bool(e.notNull), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.dataTypes.NullableFloat64; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 2:
                            o.notNull = e.bool();
                            break;
                        case 1:
                            o.value = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), s.NullableFloat32 = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "NullableFloat32", e.prototype.notNull = !1, e.prototype.value = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.value && e.hasOwnProperty("value") && t.uint32(13).float(e.value), null != e.notNull && e.hasOwnProperty("notNull") && t.uint32(16).bool(e.notNull), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.dataTypes.NullableFloat32; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 2:
                            o.notNull = e.bool();
                            break;
                        case 1:
                            o.value = e.float();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), s.NullableString = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "NullableString", e.prototype.notNull = !1, e.prototype.value = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.value && e.hasOwnProperty("value") && t.uint32(10).string(e.value), null != e.notNull && e.hasOwnProperty("notNull") && t.uint32(16).bool(e.notNull), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.dataTypes.NullableString; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 2:
                            o.notNull = e.bool();
                            break;
                        case 1:
                            o.value = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), s.NullableBool = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "NullableBool", e.prototype.notNull = !1, e.prototype.value = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.value && e.hasOwnProperty("value") && t.uint32(8).bool(e.value), null != e.notNull && e.hasOwnProperty("notNull") && t.uint32(16).bool(e.notNull), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.dataTypes.NullableBool; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 2:
                            o.notNull = e.bool();
                            break;
                        case 1:
                            o.value = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), s.NullableBytes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "NullableBytes", e.prototype.notNull = !1, e.prototype.value = b.newBuffer([]), e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.value && e.hasOwnProperty("value") && t.uint32(10).bytes(e.value), null != e.notNull && e.hasOwnProperty("notNull") && t.uint32(16).bool(e.notNull), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.dataTypes.NullableBytes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 2:
                            o.notNull = e.bool();
                            break;
                        case 1:
                            o.value = e.bytes();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), s.NullableTime = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "NullableTime", e.prototype.value = null, e.prototype.notNull = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.value && e.hasOwnProperty("value") && k.google.protobuf.Timestamp.encode(e.value, t.uint32(10).fork()).ldelim(), null != e.notNull && e.hasOwnProperty("notNull") && t.uint32(16).bool(e.notNull), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.dataTypes.NullableTime; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.value = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 2:
                            o.notNull = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), s), k.google = ((l = {}).protobuf = ((u = {}).Timestamp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Timestamp", e.prototype.seconds = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.prototype.nanos = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(t, n) {
                return void 0 === t.notNull && (t = e.create({
                    seconds: Math.floor(t.getTime() / 1e3)
                })), n || (n = h.create()), null != t.seconds && t.hasOwnProperty("seconds") && n.uint32(8).int64(t.seconds), null != t.nanos && t.hasOwnProperty("nanos") && n.uint32(16).int32(t.nanos), n
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.google.protobuf.Timestamp; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.seconds = e.int64();
                            break;
                        case 2:
                            o.nanos = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return new Date(1e3 * o.seconds)
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), u), l), k.commonProto = ((p = {}).MTT_MODE = (c = {}, (d = Object.create(c))[c[0] = "Normal"] = 0, d[c[1] = "Turbo"] = 1, d[c[2] = "Hyper"] = 2, d), p.MttPlayerSignupRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttPlayerSignupRequest", e.prototype.UserId = 0, e.prototype.TournamentId = 0, e.prototype.TicketId = b.Long ? b.Long.fromBits(0, 0, !0) : 0, e.prototype.UserToken = "", e.prototype.PlatForm = 0, e.prototype.PrivateMttToken = "", e.prototype.isDesktop = !1, e.prototype.RegGoldType = 0, e.prototype.GeoComplianceToken = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(16).uint32(e.TournamentId), null != e.TicketId && e.hasOwnProperty("TicketId") && t.uint32(24).uint64(e.TicketId), null != e.UserToken && e.hasOwnProperty("UserToken") && t.uint32(34).string(e.UserToken), null != e.PlatForm && e.hasOwnProperty("PlatForm") && t.uint32(40).int32(e.PlatForm), null != e.PrivateMttToken && e.hasOwnProperty("PrivateMttToken") && t.uint32(50).string(e.PrivateMttToken), null != e.isDesktop && e.hasOwnProperty("isDesktop") && t.uint32(56).bool(e.isDesktop), null != e.RegGoldType && e.hasOwnProperty("RegGoldType") && t.uint32(64).int32(e.RegGoldType), null != e.GeoComplianceToken && e.hasOwnProperty("GeoComplianceToken") && t.uint32(74).string(e.GeoComplianceToken), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttPlayerSignupRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        case 2:
                            o.TournamentId = e.uint32();
                            break;
                        case 3:
                            o.TicketId = e.uint64();
                            break;
                        case 4:
                            o.UserToken = e.string();
                            break;
                        case 5:
                            o.PlatForm = e.int32();
                            break;
                        case 6:
                            o.PrivateMttToken = e.string();
                            break;
                        case 7:
                            o.isDesktop = e.bool();
                            break;
                        case 8:
                            o.RegGoldType = e.int32();
                            break;
                        case 9:
                            o.GeoComplianceToken = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttPlayerSignupResponse = function() {
            function e(e) {
                if (this.ExternalErrorCode = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttPlayerSignupResponse", e.prototype.ErrorCode = 0, e.prototype.PlayerId = 0, e.prototype.ExternalErrorCode = b.emptyArray, e.prototype.GeoComplianceRes = b.newBuffer([]), e.prototype.recoverTime = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.prototype.LastSeconds = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.prototype.tournamentId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.PlayerId && e.hasOwnProperty("PlayerId") && t.uint32(16).uint32(e.PlayerId), null != e.ExternalErrorCode && e.ExternalErrorCode.length) {
                    t.uint32(26).fork();
                    for (var n = 0; n < e.ExternalErrorCode.length; ++n) t.uint32(e.ExternalErrorCode[n]);
                    t.ldelim()
                }
                return null != e.GeoComplianceRes && e.hasOwnProperty("GeoComplianceRes") && t.uint32(34).bytes(e.GeoComplianceRes), null != e.recoverTime && e.hasOwnProperty("recoverTime") && t.uint32(40).int64(e.recoverTime), null != e.LastSeconds && e.hasOwnProperty("LastSeconds") && t.uint32(48).int64(e.LastSeconds), null != e.tournamentId && e.hasOwnProperty("tournamentId") && t.uint32(56).uint32(e.tournamentId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttPlayerSignupResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.PlayerId = e.uint32();
                            break;
                        case 3:
                            if (o.ExternalErrorCode && o.ExternalErrorCode.length || (o.ExternalErrorCode = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.ExternalErrorCode.push(e.uint32());
                            else o.ExternalErrorCode.push(e.uint32());
                            break;
                        case 4:
                            o.GeoComplianceRes = e.bytes();
                            break;
                        case 5:
                            o.recoverTime = e.int64();
                            break;
                        case 6:
                            o.LastSeconds = e.int64();
                            break;
                        case 7:
                            o.tournamentId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttPlayerCancelSignUpRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttPlayerCancelSignUpRequest", e.prototype.UserId = 0, e.prototype.TournamentId = 0, e.prototype.UserToken = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(16).uint32(e.TournamentId), null != e.UserToken && e.hasOwnProperty("UserToken") && t.uint32(26).string(e.UserToken), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttPlayerCancelSignUpRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        case 2:
                            o.TournamentId = e.uint32();
                            break;
                        case 3:
                            o.UserToken = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttPlayerCancelSignUpResponse = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttPlayerCancelSignUpResponse", e.prototype.ErrorCode = 0, e.prototype.ExternalErrorCode = 0, e.prototype.tournamentId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.ExternalErrorCode && e.hasOwnProperty("ExternalErrorCode") && t.uint32(16).uint32(e.ExternalErrorCode), null != e.tournamentId && e.hasOwnProperty("tournamentId") && t.uint32(24).uint32(e.tournamentId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttPlayerCancelSignUpResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.ExternalErrorCode = e.uint32();
                            break;
                        case 3:
                            o.tournamentId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Join_Type = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Join_Type_Null"] = 0, t[e[1] = "Join_Type_ReBuy"] = 1, t[e[2] = "Join_Type_ReJoin"] = 2, t[e[3] = "Join_Type_Join"] = 3, t[e[4] = "Join_Type_MoreBuy"] = 4, t
        }(), p.MttMorebuyTicketInfo = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttMorebuyTicketInfo", e.prototype.TicketId = b.Long ? b.Long.fromBits(0, 0, !0) : 0, e.prototype.PlatForm = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.TicketId && e.hasOwnProperty("TicketId") && t.uint32(8).uint64(e.TicketId), null != e.PlatForm && e.hasOwnProperty("PlatForm") && t.uint32(16).int32(e.PlatForm), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttMorebuyTicketInfo; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TicketId = e.uint64();
                            break;
                        case 2:
                            o.PlatForm = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttMorebuyRequest = function() {
            function e(e) {
                if (this.TicketInfo = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttMorebuyRequest", e.prototype.UserId = 0, e.prototype.TournamentId = 0, e.prototype.TicketInfo = b.emptyArray, e.prototype.UserToken = "", e.prototype.isDesktop = !1, e.prototype.RegGoldType = 0, e.prototype.GeoComplianceToken = "", e.prototype.BuyCount = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(16).uint32(e.TournamentId), null != e.TicketInfo && e.TicketInfo.length)
                    for (var n = 0; n < e.TicketInfo.length; ++n) k.commonProto.MttMorebuyTicketInfo.encode(e.TicketInfo[n], t.uint32(26).fork()).ldelim();
                return null != e.UserToken && e.hasOwnProperty("UserToken") && t.uint32(34).string(e.UserToken), null != e.isDesktop && e.hasOwnProperty("isDesktop") && t.uint32(48).bool(e.isDesktop), null != e.RegGoldType && e.hasOwnProperty("RegGoldType") && t.uint32(64).int32(e.RegGoldType), null != e.GeoComplianceToken && e.hasOwnProperty("GeoComplianceToken") && t.uint32(74).string(e.GeoComplianceToken), null != e.BuyCount && e.hasOwnProperty("BuyCount") && t.uint32(80).int32(e.BuyCount), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttMorebuyRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        case 2:
                            o.TournamentId = e.uint32();
                            break;
                        case 3:
                            o.TicketInfo && o.TicketInfo.length || (o.TicketInfo = []), o.TicketInfo.push(k.commonProto.MttMorebuyTicketInfo.decode(e, e.uint32()));
                            break;
                        case 4:
                            o.UserToken = e.string();
                            break;
                        case 6:
                            o.isDesktop = e.bool();
                            break;
                        case 8:
                            o.RegGoldType = e.int32();
                            break;
                        case 9:
                            o.GeoComplianceToken = e.string();
                            break;
                        case 10:
                            o.BuyCount = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttMorebuyResponse = function() {
            function e(e) {
                if (this.ExternalErrorCode = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttMorebuyResponse", e.prototype.ErrorCode = 0, e.prototype.ExternalErrorCode = b.emptyArray, e.prototype.GeoComplianceRes = b.newBuffer([]), e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.ExternalErrorCode && e.ExternalErrorCode.length) {
                    t.uint32(18).fork();
                    for (var n = 0; n < e.ExternalErrorCode.length; ++n) t.uint32(e.ExternalErrorCode[n]);
                    t.ldelim()
                }
                return null != e.GeoComplianceRes && e.hasOwnProperty("GeoComplianceRes") && t.uint32(26).bytes(e.GeoComplianceRes), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttMorebuyResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            if (o.ExternalErrorCode && o.ExternalErrorCode.length || (o.ExternalErrorCode = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.ExternalErrorCode.push(e.uint32());
                            else o.ExternalErrorCode.push(e.uint32());
                            break;
                        case 3:
                            o.GeoComplianceRes = e.bytes();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttReenterRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttReenterRequest", e.prototype.UserId = 0, e.prototype.TournamentId = 0, e.prototype.TicketId = b.Long ? b.Long.fromBits(0, 0, !0) : 0, e.prototype.UserToken = "", e.prototype.PlatForm = 0, e.prototype.isDesktop = !1, e.prototype.RegGoldType = 0, e.prototype.GeoComplianceToken = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(16).uint32(e.TournamentId), null != e.TicketId && e.hasOwnProperty("TicketId") && t.uint32(24).uint64(e.TicketId), null != e.UserToken && e.hasOwnProperty("UserToken") && t.uint32(34).string(e.UserToken), null != e.PlatForm && e.hasOwnProperty("PlatForm") && t.uint32(40).int32(e.PlatForm), null != e.isDesktop && e.hasOwnProperty("isDesktop") && t.uint32(48).bool(e.isDesktop), null != e.RegGoldType && e.hasOwnProperty("RegGoldType") && t.uint32(64).int32(e.RegGoldType), null != e.GeoComplianceToken && e.hasOwnProperty("GeoComplianceToken") && t.uint32(74).string(e.GeoComplianceToken), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttReenterRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        case 2:
                            o.TournamentId = e.uint32();
                            break;
                        case 3:
                            o.TicketId = e.uint64();
                            break;
                        case 4:
                            o.UserToken = e.string();
                            break;
                        case 5:
                            o.PlatForm = e.int32();
                            break;
                        case 6:
                            o.isDesktop = e.bool();
                            break;
                        case 8:
                            o.RegGoldType = e.int32();
                            break;
                        case 9:
                            o.GeoComplianceToken = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttReenterResponse = function() {
            function e(e) {
                if (this.ExternalErrorCode = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttReenterResponse", e.prototype.ErrorCode = 0, e.prototype.ExternalErrorCode = b.emptyArray, e.prototype.GeoComplianceRes = b.newBuffer([]), e.prototype.tournamentId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.ExternalErrorCode && e.ExternalErrorCode.length) {
                    t.uint32(18).fork();
                    for (var n = 0; n < e.ExternalErrorCode.length; ++n) t.uint32(e.ExternalErrorCode[n]);
                    t.ldelim()
                }
                return null != e.GeoComplianceRes && e.hasOwnProperty("GeoComplianceRes") && t.uint32(26).bytes(e.GeoComplianceRes), null != e.tournamentId && e.hasOwnProperty("tournamentId") && t.uint32(32).uint32(e.tournamentId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttReenterResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            if (o.ExternalErrorCode && o.ExternalErrorCode.length || (o.ExternalErrorCode = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.ExternalErrorCode.push(e.uint32());
                            else o.ExternalErrorCode.push(e.uint32());
                            break;
                        case 3:
                            o.GeoComplianceRes = e.bytes();
                            break;
                        case 4:
                            o.tournamentId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttTournamentDetailRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttTournamentDetailRequest", e.prototype.TournamentId = 0, e.prototype.FilterPlayer = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(8).uint32(e.TournamentId), null != e.FilterPlayer && e.hasOwnProperty("FilterPlayer") && t.uint32(16).bool(e.FilterPlayer), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttTournamentDetailRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TournamentId = e.uint32();
                            break;
                        case 2:
                            o.FilterPlayer = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttTournamentDetailResponse = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttTournamentDetailResponse", e.prototype.ErrorCode = 0, e.prototype.TournamentDetail = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.TournamentDetail && e.hasOwnProperty("TournamentDetail") && k.commonProto.MttTournamentDetail.encode(e.TournamentDetail, t.uint32(18).fork()).ldelim(), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttTournamentDetailResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.TournamentDetail = k.commonProto.MttTournamentDetail.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttPrize = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttPrize", e.prototype.Rank = 0, e.prototype.Proportion = 0, e.prototype.Money = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Rank && e.hasOwnProperty("Rank") && t.uint32(8).uint32(e.Rank), null != e.Proportion && e.hasOwnProperty("Proportion") && t.uint32(17).double(e.Proportion), null != e.Money && e.hasOwnProperty("Money") && t.uint32(25).double(e.Money), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttPrize; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Rank = e.uint32();
                            break;
                        case 2:
                            o.Proportion = e.double();
                            break;
                        case 3:
                            o.Money = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttPrizeCircleInfo = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttPrizeCircleInfo", e.prototype.Begin = 0, e.prototype.End = 0, e.prototype.Circle = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Begin && e.hasOwnProperty("Begin") && t.uint32(8).uint32(e.Begin), null != e.End && e.hasOwnProperty("End") && t.uint32(16).uint32(e.End), null != e.Circle && e.hasOwnProperty("Circle") && t.uint32(24).uint32(e.Circle), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttPrizeCircleInfo; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Begin = e.uint32();
                            break;
                        case 2:
                            o.End = e.uint32();
                            break;
                        case 3:
                            o.Circle = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttPrizeTool = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttPrizeTool", e.prototype.Id = 0, e.prototype.TournamentId = 0, e.prototype.Rank = 0, e.prototype.ToolId = 0, e.prototype.Created = null, e.prototype.Platform = 0, e.prototype.Name = "", e.prototype.NameI18N = "", e.prototype.Value = 0, e.prototype.Currency = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(16).uint32(e.TournamentId), null != e.Rank && e.hasOwnProperty("Rank") && t.uint32(24).uint32(e.Rank), null != e.ToolId && e.hasOwnProperty("ToolId") && t.uint32(32).uint32(e.ToolId), null != e.Created && e.hasOwnProperty("Created") && k.google.protobuf.Timestamp.encode(e.Created, t.uint32(42).fork()).ldelim(), null != e.Platform && e.hasOwnProperty("Platform") && t.uint32(48).uint32(e.Platform), null != e.Name && e.hasOwnProperty("Name") && t.uint32(58).string(e.Name), null != e.NameI18N && e.hasOwnProperty("NameI18N") && t.uint32(66).string(e.NameI18N), null != e.Value && e.hasOwnProperty("Value") && t.uint32(77).float(e.Value), null != e.Currency && e.hasOwnProperty("Currency") && t.uint32(82).string(e.Currency), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttPrizeTool; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.TournamentId = e.uint32();
                            break;
                        case 3:
                            o.Rank = e.uint32();
                            break;
                        case 4:
                            o.ToolId = e.uint32();
                            break;
                        case 5:
                            o.Created = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 6:
                            o.Platform = e.uint32();
                            break;
                        case 7:
                            o.Name = e.string();
                            break;
                        case 8:
                            o.NameI18N = e.string();
                            break;
                        case 9:
                            o.Value = e.float();
                            break;
                        case 10:
                            o.Currency = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttHoldemBlindsConfig = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttHoldemBlindsConfig", e.prototype.Id = 0, e.prototype.ConfigId = 0, e.prototype.Level = 0, e.prototype.BigBlind = 0, e.prototype.SmallBlind = 0, e.prototype.Ante = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.ConfigId && e.hasOwnProperty("ConfigId") && t.uint32(16).uint32(e.ConfigId), null != e.Level && e.hasOwnProperty("Level") && t.uint32(24).uint32(e.Level), null != e.BigBlind && e.hasOwnProperty("BigBlind") && t.uint32(32).uint32(e.BigBlind), null != e.SmallBlind && e.hasOwnProperty("SmallBlind") && t.uint32(40).uint32(e.SmallBlind), null != e.Ante && e.hasOwnProperty("Ante") && t.uint32(48).uint32(e.Ante), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttHoldemBlindsConfig; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.ConfigId = e.uint32();
                            break;
                        case 3:
                            o.Level = e.uint32();
                            break;
                        case 4:
                            o.BigBlind = e.uint32();
                            break;
                        case 5:
                            o.SmallBlind = e.uint32();
                            break;
                        case 6:
                            o.Ante = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttPPBasePotConfig = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttPPBasePotConfig", e.prototype.Id = 0, e.prototype.ConfigId = 0, e.prototype.Level = 0, e.prototype.BasePot = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.ConfigId && e.hasOwnProperty("ConfigId") && t.uint32(16).uint32(e.ConfigId), null != e.Level && e.hasOwnProperty("Level") && t.uint32(24).uint32(e.Level), null != e.BasePot && e.hasOwnProperty("BasePot") && t.uint32(33).double(e.BasePot), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttPPBasePotConfig; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.ConfigId = e.uint32();
                            break;
                        case 3:
                            o.Level = e.uint32();
                            break;
                        case 4:
                            o.BasePot = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttTournamentDetail = function() {
            function e(e) {
                if (this.HoldemBlindsConfig = [], this.PPBasePotConfig = [], this.PrizeMoney = [], this.PrizeTools = [], this.PlayersDetail = [], this.TablesDetail = [], this.FinalTablePlayers = [], this.CelebrityList = [], this.Rate = [], this.Tag = [], this.PrizeCircleInfo = [], this.Banners = [], this.Icons = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttTournamentDetail", e.prototype.TournamentId = 0, e.prototype.TournamentName = "", e.prototype.TournamentMode = 0, e.prototype.GameMode = 0, e.prototype.StartingCoins = 0, e.prototype.SignupLimit = 0, e.prototype.SignupCount = 0, e.prototype.RegFee = 0, e.prototype.SrvFee = 0, e.prototype.PrizeFee = 0, e.prototype.BountyFee = 0, e.prototype.BountyIncrease = 0, e.prototype.LevelTime = 0, e.prototype.Seats = 0, e.prototype.ReBuyLimit = 0, e.prototype.ReentryLimit = 0, e.prototype.RestTime = 0, e.prototype.RestDuration = 0, e.prototype.StartingTime = null, e.prototype.CurrentLevel = 0, e.prototype.LevelStopSignup = 0, e.prototype.MaxCoins = 0, e.prototype.MinCoins = 0, e.prototype.AvgCoins = 0, e.prototype.HoldemBlindsConfig = b.emptyArray, e.prototype.PPBasePotConfig = b.emptyArray, e.prototype.GamePot = 0, e.prototype.BountyPot = 0, e.prototype.PrizeCircle = 0, e.prototype.PrizeMoney = b.emptyArray, e.prototype.PrizeTools = b.emptyArray, e.prototype.PrizeMode = 0, e.prototype.JoinedCount = 0, e.prototype.PlayersDetail = b.emptyArray, e.prototype.TablesDetail = b.emptyArray, e.prototype.Status = 0, e.prototype.SignUpOptions = "", e.prototype.RestBeforeFinal = !1, e.prototype.VoiceInFinal = !1, e.prototype.IsSatelliteMode = !1, e.prototype.IsAiptMode = !1, e.prototype.PlayersCount = 0, e.prototype.PlayingPlayersCount = 0, e.prototype.HunterModeBountyProportion = 0, e.prototype.HunterModeBountyIncreasingRate = 0, e.prototype.BaseToolPrize = !1, e.prototype.PlayOnJoint = 0, e.prototype.EndingTime = null, e.prototype.IsDelayed = !1, e.prototype.TournamentNameI18N = "", e.prototype.DescI18N = "", e.prototype.AllowSignupHours = 0, e.prototype.FinalTableNumPlayers = 0, e.prototype.FinalTablePlayers = b.emptyArray, e.prototype.DisplayCardsLeftSeconds = 0, e.prototype.PauseStatus = !1, e.prototype.LeftRiseBlindTime = 0, e.prototype.LeftRestTime = 0, e.prototype.TimeLeftSec = 0, e.prototype.TimerStop = !1, e.prototype.LeftEnterRestTime = 0, e.prototype.Bullet = 0, e.prototype.MaxBullet = 0, e.prototype.MinBullet = 0, e.prototype.AvgBullet = 0, e.prototype.MttMode = 0, e.prototype.RestIntervalLevel = 0, e.prototype.InTheMoney = 0, e.prototype.MultiFlightId = 0, e.prototype.MultiFlightLevel = 0, e.prototype.FinalStartTime = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.prototype.FinalPause = !1, e.prototype.Desc = "", e.prototype.IsHeadUp = !1, e.prototype.DisplayTag = "", e.prototype.IsCelebrity = !1, e.prototype.CelebrityList = b.emptyArray, e.prototype.BlindLevelPause = 0, e.prototype.GameInvitationCode = "", e.prototype.BlindHands = 0, e.prototype.DisplayCurrency = "", e.prototype.Rate = b.emptyArray, e.prototype.TournamentInfo = "", e.prototype.TournamentInfoI18N = "", e.prototype.TotalPauseTime = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.prototype.IsBlOnly = !1, e.prototype.DisplayRegFee = 0, e.prototype.DisplaySrvFee = 0, e.prototype.RegGoldType = 0, e.prototype.isPrivate = !1, e.prototype.Tag = b.emptyArray, e.prototype.LowerLimitPlayers = 0, e.prototype.BlockRobotNum = 0, e.prototype.TicketBase = !1, e.prototype.BlockRobot = !1, e.prototype.TablesCount = 0, e.prototype.RebuyParam = "", e.prototype.MorebuyParam = "", e.prototype.Day2TournamentName = "", e.prototype.Day2TournamentNameI18N = "", e.prototype.TimeStamp = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.prototype.EstimatedDuration = 0, e.prototype.PrizeCircleInfo = b.emptyArray, e.prototype.FirstPrize = 0, e.prototype.NextPrize = 0, e.prototype.Guaranteed = 0, e.prototype.Overlay = 0, e.prototype.MinPlayers = 0, e.prototype.MaxPlayers = 0, e.prototype.ShowOverlayIcon = !1, e.prototype.AdditionalPrizePool = 0, e.prototype.TargetID = 0, e.prototype.Banners = b.emptyArray, e.prototype.Icons = b.emptyArray, e.prototype.InitialTimeBank = 0, e.prototype.TimeBankAdd = 0, e.prototype.StopSignupTime = null, e.prototype.MorebuyStatus = !1, e.prototype.MysteryType = 0, e.prototype.MysteryLeftPercent = 0, e.prototype.MysteryBlindLevel = 0, e.prototype.WillPlayStartTime = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.prototype.WPTDailyAsia = !1, e.prototype.DailyPrime = !1, e.prototype.BountyRumble = !1, e.prototype.OneShot = !1, e.prototype.HyperDash = !1, e.prototype.WeeklyGoldenBounty = !1, e.prototype.WPTMysteryMillion = !1, e.prototype.AllGamePot = 0, e.prototype.MFJoinedCount = 0, e.prototype.CrazyFreeroll = !1, e.prototype.WPTLive = !1, e.prototype.RebuyStatus = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(8).uint32(e.TournamentId), null != e.TournamentName && e.hasOwnProperty("TournamentName") && t.uint32(18).string(e.TournamentName), null != e.TournamentMode && e.hasOwnProperty("TournamentMode") && t.uint32(24).uint32(e.TournamentMode), null != e.GameMode && e.hasOwnProperty("GameMode") && t.uint32(32).uint32(e.GameMode), null != e.StartingCoins && e.hasOwnProperty("StartingCoins") && t.uint32(41).double(e.StartingCoins), null != e.SignupLimit && e.hasOwnProperty("SignupLimit") && t.uint32(48).uint32(e.SignupLimit), null != e.SignupCount && e.hasOwnProperty("SignupCount") && t.uint32(56).uint32(e.SignupCount), null != e.RegFee && e.hasOwnProperty("RegFee") && t.uint32(65).double(e.RegFee), null != e.SrvFee && e.hasOwnProperty("SrvFee") && t.uint32(73).double(e.SrvFee), null != e.PrizeFee && e.hasOwnProperty("PrizeFee") && t.uint32(81).double(e.PrizeFee), null != e.BountyFee && e.hasOwnProperty("BountyFee") && t.uint32(89).double(e.BountyFee), null != e.BountyIncrease && e.hasOwnProperty("BountyIncrease") && t.uint32(97).double(e.BountyIncrease), null != e.LevelTime && e.hasOwnProperty("LevelTime") && t.uint32(104).uint32(e.LevelTime), null != e.Seats && e.hasOwnProperty("Seats") && t.uint32(112).uint32(e.Seats), null != e.ReBuyLimit && e.hasOwnProperty("ReBuyLimit") && t.uint32(120).uint32(e.ReBuyLimit), null != e.ReentryLimit && e.hasOwnProperty("ReentryLimit") && t.uint32(128).uint32(e.ReentryLimit), null != e.RestTime && e.hasOwnProperty("RestTime") && t.uint32(136).uint32(e.RestTime), null != e.RestDuration && e.hasOwnProperty("RestDuration") && t.uint32(144).uint32(e.RestDuration), null != e.StartingTime && e.hasOwnProperty("StartingTime") && k.google.protobuf.Timestamp.encode(e.StartingTime, t.uint32(154).fork()).ldelim(), null != e.CurrentLevel && e.hasOwnProperty("CurrentLevel") && t.uint32(160).uint32(e.CurrentLevel), null != e.LevelStopSignup && e.hasOwnProperty("LevelStopSignup") && t.uint32(168).uint32(e.LevelStopSignup), null != e.MaxCoins && e.hasOwnProperty("MaxCoins") && t.uint32(177).double(e.MaxCoins), null != e.MinCoins && e.hasOwnProperty("MinCoins") && t.uint32(185).double(e.MinCoins), null != e.AvgCoins && e.hasOwnProperty("AvgCoins") && t.uint32(193).double(e.AvgCoins), null != e.HoldemBlindsConfig && e.HoldemBlindsConfig.length)
                    for (var n = 0; n < e.HoldemBlindsConfig.length; ++n) k.commonProto.MttHoldemBlindsConfig.encode(e.HoldemBlindsConfig[n], t.uint32(202).fork()).ldelim();
                if (null != e.PPBasePotConfig && e.PPBasePotConfig.length)
                    for (n = 0; n < e.PPBasePotConfig.length; ++n) k.commonProto.MttPPBasePotConfig.encode(e.PPBasePotConfig[n], t.uint32(210).fork()).ldelim();
                if (null != e.GamePot && e.hasOwnProperty("GamePot") && t.uint32(217).double(e.GamePot), null != e.BountyPot && e.hasOwnProperty("BountyPot") && t.uint32(225).double(e.BountyPot), null != e.PrizeCircle && e.hasOwnProperty("PrizeCircle") && t.uint32(232).uint32(e.PrizeCircle), null != e.PrizeMoney && e.PrizeMoney.length)
                    for (n = 0; n < e.PrizeMoney.length; ++n) k.commonProto.MttPrize.encode(e.PrizeMoney[n], t.uint32(242).fork()).ldelim();
                if (null != e.PrizeTools && e.PrizeTools.length)
                    for (n = 0; n < e.PrizeTools.length; ++n) k.commonProto.MttPrizeTool.encode(e.PrizeTools[n], t.uint32(250).fork()).ldelim();
                if (null != e.PrizeMode && e.hasOwnProperty("PrizeMode") && t.uint32(256).uint32(e.PrizeMode), null != e.JoinedCount && e.hasOwnProperty("JoinedCount") && t.uint32(264).uint32(e.JoinedCount), null != e.PlayersDetail && e.PlayersDetail.length)
                    for (n = 0; n < e.PlayersDetail.length; ++n) k.commonProto.MttPlayerDetail.encode(e.PlayersDetail[n], t.uint32(274).fork()).ldelim();
                if (null != e.TablesDetail && e.TablesDetail.length)
                    for (n = 0; n < e.TablesDetail.length; ++n) k.commonProto.MttTableDetail.encode(e.TablesDetail[n], t.uint32(282).fork()).ldelim();
                if (null != e.Status && e.hasOwnProperty("Status") && t.uint32(288).int32(e.Status), null != e.SignUpOptions && e.hasOwnProperty("SignUpOptions") && t.uint32(298).string(e.SignUpOptions), null != e.RestBeforeFinal && e.hasOwnProperty("RestBeforeFinal") && t.uint32(304).bool(e.RestBeforeFinal), null != e.VoiceInFinal && e.hasOwnProperty("VoiceInFinal") && t.uint32(312).bool(e.VoiceInFinal), null != e.IsSatelliteMode && e.hasOwnProperty("IsSatelliteMode") && t.uint32(320).bool(e.IsSatelliteMode), null != e.IsAiptMode && e.hasOwnProperty("IsAiptMode") && t.uint32(328).bool(e.IsAiptMode), null != e.PlayersCount && e.hasOwnProperty("PlayersCount") && t.uint32(336).uint32(e.PlayersCount), null != e.PlayingPlayersCount && e.hasOwnProperty("PlayingPlayersCount") && t.uint32(344).uint32(e.PlayingPlayersCount), null != e.HunterModeBountyProportion && e.hasOwnProperty("HunterModeBountyProportion") && t.uint32(353).double(e.HunterModeBountyProportion), null != e.HunterModeBountyIncreasingRate && e.hasOwnProperty("HunterModeBountyIncreasingRate") && t.uint32(361).double(e.HunterModeBountyIncreasingRate), null != e.BaseToolPrize && e.hasOwnProperty("BaseToolPrize") && t.uint32(368).bool(e.BaseToolPrize), null != e.PlayOnJoint && e.hasOwnProperty("PlayOnJoint") && t.uint32(376).uint32(e.PlayOnJoint), null != e.EndingTime && e.hasOwnProperty("EndingTime") && k.google.protobuf.Timestamp.encode(e.EndingTime, t.uint32(386).fork()).ldelim(), null != e.IsDelayed && e.hasOwnProperty("IsDelayed") && t.uint32(392).bool(e.IsDelayed), null != e.TournamentNameI18N && e.hasOwnProperty("TournamentNameI18N") && t.uint32(402).string(e.TournamentNameI18N), null != e.DescI18N && e.hasOwnProperty("DescI18N") && t.uint32(410).string(e.DescI18N), null != e.AllowSignupHours && e.hasOwnProperty("AllowSignupHours") && t.uint32(416).uint32(e.AllowSignupHours), null != e.FinalTableNumPlayers && e.hasOwnProperty("FinalTableNumPlayers") && t.uint32(424).uint32(e.FinalTableNumPlayers), null != e.FinalTablePlayers && e.FinalTablePlayers.length)
                    for (n = 0; n < e.FinalTablePlayers.length; ++n) k.commonProto.MttFinalTablePlayer.encode(e.FinalTablePlayers[n], t.uint32(434).fork()).ldelim();
                if (null != e.DisplayCardsLeftSeconds && e.hasOwnProperty("DisplayCardsLeftSeconds") && t.uint32(440).uint32(e.DisplayCardsLeftSeconds), null != e.PauseStatus && e.hasOwnProperty("PauseStatus") && t.uint32(448).bool(e.PauseStatus), null != e.LeftRiseBlindTime && e.hasOwnProperty("LeftRiseBlindTime") && t.uint32(456).int32(e.LeftRiseBlindTime), null != e.LeftRestTime && e.hasOwnProperty("LeftRestTime") && t.uint32(464).int32(e.LeftRestTime), null != e.TimeLeftSec && e.hasOwnProperty("TimeLeftSec") && t.uint32(472).int32(e.TimeLeftSec), null != e.TimerStop && e.hasOwnProperty("TimerStop") && t.uint32(480).bool(e.TimerStop), null != e.LeftEnterRestTime && e.hasOwnProperty("LeftEnterRestTime") && t.uint32(488).int32(e.LeftEnterRestTime), null != e.Bullet && e.hasOwnProperty("Bullet") && t.uint32(496).int32(e.Bullet), null != e.MaxBullet && e.hasOwnProperty("MaxBullet") && t.uint32(504).int32(e.MaxBullet), null != e.MinBullet && e.hasOwnProperty("MinBullet") && t.uint32(512).int32(e.MinBullet), null != e.AvgBullet && e.hasOwnProperty("AvgBullet") && t.uint32(520).int32(e.AvgBullet), null != e.MttMode && e.hasOwnProperty("MttMode") && t.uint32(528).int32(e.MttMode), null != e.RestIntervalLevel && e.hasOwnProperty("RestIntervalLevel") && t.uint32(536).int32(e.RestIntervalLevel), null != e.InTheMoney && e.hasOwnProperty("InTheMoney") && t.uint32(544).uint32(e.InTheMoney), null != e.MultiFlightId && e.hasOwnProperty("MultiFlightId") && t.uint32(552).uint32(e.MultiFlightId), null != e.MultiFlightLevel && e.hasOwnProperty("MultiFlightLevel") && t.uint32(560).uint32(e.MultiFlightLevel), null != e.FinalStartTime && e.hasOwnProperty("FinalStartTime") && t.uint32(568).int64(e.FinalStartTime), null != e.FinalPause && e.hasOwnProperty("FinalPause") && t.uint32(576).bool(e.FinalPause), null != e.Desc && e.hasOwnProperty("Desc") && t.uint32(586).string(e.Desc), null != e.IsHeadUp && e.hasOwnProperty("IsHeadUp") && t.uint32(592).bool(e.IsHeadUp), null != e.DisplayTag && e.hasOwnProperty("DisplayTag") && t.uint32(602).string(e.DisplayTag), null != e.IsCelebrity && e.hasOwnProperty("IsCelebrity") && t.uint32(608).bool(e.IsCelebrity), null != e.CelebrityList && e.CelebrityList.length)
                    for (n = 0; n < e.CelebrityList.length; ++n) k.commonProto.MttCelebrityDetail.encode(e.CelebrityList[n], t.uint32(618).fork()).ldelim();
                if (null != e.BlindLevelPause && e.hasOwnProperty("BlindLevelPause") && t.uint32(624).uint32(e.BlindLevelPause), null != e.GameInvitationCode && e.hasOwnProperty("GameInvitationCode") && t.uint32(634).string(e.GameInvitationCode), null != e.BlindHands && e.hasOwnProperty("BlindHands") && t.uint32(640).uint32(e.BlindHands), null != e.DisplayCurrency && e.hasOwnProperty("DisplayCurrency") && t.uint32(650).string(e.DisplayCurrency), null != e.Rate && e.Rate.length)
                    for (n = 0; n < e.Rate.length; ++n) k.commonProto.TournamentRate.encode(e.Rate[n], t.uint32(658).fork()).ldelim();
                if (null != e.TournamentInfo && e.hasOwnProperty("TournamentInfo") && t.uint32(666).string(e.TournamentInfo), null != e.TournamentInfoI18N && e.hasOwnProperty("TournamentInfoI18N") && t.uint32(674).string(e.TournamentInfoI18N), null != e.TotalPauseTime && e.hasOwnProperty("TotalPauseTime") && t.uint32(680).int64(e.TotalPauseTime), null != e.IsBlOnly && e.hasOwnProperty("IsBlOnly") && t.uint32(688).bool(e.IsBlOnly), null != e.DisplayRegFee && e.hasOwnProperty("DisplayRegFee") && t.uint32(697).double(e.DisplayRegFee), null != e.DisplaySrvFee && e.hasOwnProperty("DisplaySrvFee") && t.uint32(705).double(e.DisplaySrvFee), null != e.RegGoldType && e.hasOwnProperty("RegGoldType") && t.uint32(712).int32(e.RegGoldType), null != e.isPrivate && e.hasOwnProperty("isPrivate") && t.uint32(720).bool(e.isPrivate), null != e.Tag && e.Tag.length)
                    for (n = 0; n < e.Tag.length; ++n) t.uint32(730).string(e.Tag[n]);
                if (null != e.LowerLimitPlayers && e.hasOwnProperty("LowerLimitPlayers") && t.uint32(736).int32(e.LowerLimitPlayers), null != e.BlockRobotNum && e.hasOwnProperty("BlockRobotNum") && t.uint32(744).int32(e.BlockRobotNum), null != e.TicketBase && e.hasOwnProperty("TicketBase") && t.uint32(752).bool(e.TicketBase), null != e.BlockRobot && e.hasOwnProperty("BlockRobot") && t.uint32(760).bool(e.BlockRobot), null != e.TablesCount && e.hasOwnProperty("TablesCount") && t.uint32(768).int32(e.TablesCount), null != e.RebuyParam && e.hasOwnProperty("RebuyParam") && t.uint32(778).string(e.RebuyParam), null != e.MorebuyParam && e.hasOwnProperty("MorebuyParam") && t.uint32(786).string(e.MorebuyParam), null != e.Day2TournamentName && e.hasOwnProperty("Day2TournamentName") && t.uint32(794).string(e.Day2TournamentName), null != e.Day2TournamentNameI18N && e.hasOwnProperty("Day2TournamentNameI18N") && t.uint32(802).string(e.Day2TournamentNameI18N), null != e.TimeStamp && e.hasOwnProperty("TimeStamp") && t.uint32(808).int64(e.TimeStamp), null != e.EstimatedDuration && e.hasOwnProperty("EstimatedDuration") && t.uint32(816).int32(e.EstimatedDuration), null != e.PrizeCircleInfo && e.PrizeCircleInfo.length)
                    for (n = 0; n < e.PrizeCircleInfo.length; ++n) k.commonProto.MttPrizeCircleInfo.encode(e.PrizeCircleInfo[n], t.uint32(826).fork()).ldelim();
                if (null != e.FirstPrize && e.hasOwnProperty("FirstPrize") && t.uint32(833).double(e.FirstPrize), null != e.NextPrize && e.hasOwnProperty("NextPrize") && t.uint32(841).double(e.NextPrize), null != e.Guaranteed && e.hasOwnProperty("Guaranteed") && t.uint32(849).double(e.Guaranteed), null != e.Overlay && e.hasOwnProperty("Overlay") && t.uint32(857).double(e.Overlay), null != e.MinPlayers && e.hasOwnProperty("MinPlayers") && t.uint32(864).uint32(e.MinPlayers), null != e.MaxPlayers && e.hasOwnProperty("MaxPlayers") && t.uint32(872).uint32(e.MaxPlayers), null != e.ShowOverlayIcon && e.hasOwnProperty("ShowOverlayIcon") && t.uint32(880).bool(e.ShowOverlayIcon), null != e.AdditionalPrizePool && e.hasOwnProperty("AdditionalPrizePool") && t.uint32(889).double(e.AdditionalPrizePool), null != e.TargetID && e.hasOwnProperty("TargetID") && t.uint32(896).uint32(e.TargetID), null != e.Banners && e.Banners.length) {
                    for (t.uint32(906).fork(), n = 0; n < e.Banners.length; ++n) t.int32(e.Banners[n]);
                    t.ldelim()
                }
                if (null != e.Icons && e.Icons.length) {
                    for (t.uint32(914).fork(), n = 0; n < e.Icons.length; ++n) t.int32(e.Icons[n]);
                    t.ldelim()
                }
                return null != e.InitialTimeBank && e.hasOwnProperty("InitialTimeBank") && t.uint32(920).int32(e.InitialTimeBank), null != e.TimeBankAdd && e.hasOwnProperty("TimeBankAdd") && t.uint32(936).int32(e.TimeBankAdd), null != e.StopSignupTime && e.hasOwnProperty("StopSignupTime") && k.google.protobuf.Timestamp.encode(e.StopSignupTime, t.uint32(946).fork()).ldelim(), null != e.MorebuyStatus && e.hasOwnProperty("MorebuyStatus") && t.uint32(952).bool(e.MorebuyStatus), null != e.MysteryType && e.hasOwnProperty("MysteryType") && t.uint32(960).int32(e.MysteryType), null != e.MysteryLeftPercent && e.hasOwnProperty("MysteryLeftPercent") && t.uint32(969).double(e.MysteryLeftPercent), null != e.MysteryBlindLevel && e.hasOwnProperty("MysteryBlindLevel") && t.uint32(976).uint32(e.MysteryBlindLevel), null != e.WillPlayStartTime && e.hasOwnProperty("WillPlayStartTime") && t.uint32(984).int64(e.WillPlayStartTime), null != e.WPTDailyAsia && e.hasOwnProperty("WPTDailyAsia") && t.uint32(992).bool(e.WPTDailyAsia), null != e.DailyPrime && e.hasOwnProperty("DailyPrime") && t.uint32(1e3).bool(e.DailyPrime), null != e.BountyRumble && e.hasOwnProperty("BountyRumble") && t.uint32(1008).bool(e.BountyRumble), null != e.OneShot && e.hasOwnProperty("OneShot") && t.uint32(1016).bool(e.OneShot), null != e.HyperDash && e.hasOwnProperty("HyperDash") && t.uint32(1024).bool(e.HyperDash), null != e.WeeklyGoldenBounty && e.hasOwnProperty("WeeklyGoldenBounty") && t.uint32(1032).bool(e.WeeklyGoldenBounty), null != e.WPTMysteryMillion && e.hasOwnProperty("WPTMysteryMillion") && t.uint32(1040).bool(e.WPTMysteryMillion), null != e.AllGamePot && e.hasOwnProperty("AllGamePot") && t.uint32(1049).double(e.AllGamePot), null != e.MFJoinedCount && e.hasOwnProperty("MFJoinedCount") && t.uint32(1056).uint32(e.MFJoinedCount), null != e.CrazyFreeroll && e.hasOwnProperty("CrazyFreeroll") && t.uint32(1064).bool(e.CrazyFreeroll), null != e.WPTLive && e.hasOwnProperty("WPTLive") && t.uint32(1072).bool(e.WPTLive), null != e.RebuyStatus && e.hasOwnProperty("RebuyStatus") && t.uint32(1080).int32(e.RebuyStatus), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttTournamentDetail; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TournamentId = e.uint32();
                            break;
                        case 2:
                            o.TournamentName = e.string();
                            break;
                        case 3:
                            o.TournamentMode = e.uint32();
                            break;
                        case 4:
                            o.GameMode = e.uint32();
                            break;
                        case 5:
                            o.StartingCoins = e.double();
                            break;
                        case 6:
                            o.SignupLimit = e.uint32();
                            break;
                        case 7:
                            o.SignupCount = e.uint32();
                            break;
                        case 8:
                            o.RegFee = e.double();
                            break;
                        case 9:
                            o.SrvFee = e.double();
                            break;
                        case 10:
                            o.PrizeFee = e.double();
                            break;
                        case 11:
                            o.BountyFee = e.double();
                            break;
                        case 12:
                            o.BountyIncrease = e.double();
                            break;
                        case 13:
                            o.LevelTime = e.uint32();
                            break;
                        case 14:
                            o.Seats = e.uint32();
                            break;
                        case 15:
                            o.ReBuyLimit = e.uint32();
                            break;
                        case 16:
                            o.ReentryLimit = e.uint32();
                            break;
                        case 17:
                            o.RestTime = e.uint32();
                            break;
                        case 18:
                            o.RestDuration = e.uint32();
                            break;
                        case 19:
                            o.StartingTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 20:
                            o.CurrentLevel = e.uint32();
                            break;
                        case 21:
                            o.LevelStopSignup = e.uint32();
                            break;
                        case 22:
                            o.MaxCoins = e.double();
                            break;
                        case 23:
                            o.MinCoins = e.double();
                            break;
                        case 24:
                            o.AvgCoins = e.double();
                            break;
                        case 25:
                            o.HoldemBlindsConfig && o.HoldemBlindsConfig.length || (o.HoldemBlindsConfig = []), o.HoldemBlindsConfig.push(k.commonProto.MttHoldemBlindsConfig.decode(e, e.uint32()));
                            break;
                        case 26:
                            o.PPBasePotConfig && o.PPBasePotConfig.length || (o.PPBasePotConfig = []), o.PPBasePotConfig.push(k.commonProto.MttPPBasePotConfig.decode(e, e.uint32()));
                            break;
                        case 27:
                            o.GamePot = e.double();
                            break;
                        case 28:
                            o.BountyPot = e.double();
                            break;
                        case 29:
                            o.PrizeCircle = e.uint32();
                            break;
                        case 30:
                            o.PrizeMoney && o.PrizeMoney.length || (o.PrizeMoney = []), o.PrizeMoney.push(k.commonProto.MttPrize.decode(e, e.uint32()));
                            break;
                        case 31:
                            o.PrizeTools && o.PrizeTools.length || (o.PrizeTools = []), o.PrizeTools.push(k.commonProto.MttPrizeTool.decode(e, e.uint32()));
                            break;
                        case 32:
                            o.PrizeMode = e.uint32();
                            break;
                        case 33:
                            o.JoinedCount = e.uint32();
                            break;
                        case 34:
                            o.PlayersDetail && o.PlayersDetail.length || (o.PlayersDetail = []), o.PlayersDetail.push(k.commonProto.MttPlayerDetail.decode(e, e.uint32()));
                            break;
                        case 35:
                            o.TablesDetail && o.TablesDetail.length || (o.TablesDetail = []), o.TablesDetail.push(k.commonProto.MttTableDetail.decode(e, e.uint32()));
                            break;
                        case 36:
                            o.Status = e.int32();
                            break;
                        case 37:
                            o.SignUpOptions = e.string();
                            break;
                        case 38:
                            o.RestBeforeFinal = e.bool();
                            break;
                        case 39:
                            o.VoiceInFinal = e.bool();
                            break;
                        case 40:
                            o.IsSatelliteMode = e.bool();
                            break;
                        case 41:
                            o.IsAiptMode = e.bool();
                            break;
                        case 42:
                            o.PlayersCount = e.uint32();
                            break;
                        case 43:
                            o.PlayingPlayersCount = e.uint32();
                            break;
                        case 44:
                            o.HunterModeBountyProportion = e.double();
                            break;
                        case 45:
                            o.HunterModeBountyIncreasingRate = e.double();
                            break;
                        case 46:
                            o.BaseToolPrize = e.bool();
                            break;
                        case 47:
                            o.PlayOnJoint = e.uint32();
                            break;
                        case 48:
                            o.EndingTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 49:
                            o.IsDelayed = e.bool();
                            break;
                        case 50:
                            o.TournamentNameI18N = e.string();
                            break;
                        case 51:
                            o.DescI18N = e.string();
                            break;
                        case 52:
                            o.AllowSignupHours = e.uint32();
                            break;
                        case 53:
                            o.FinalTableNumPlayers = e.uint32();
                            break;
                        case 54:
                            o.FinalTablePlayers && o.FinalTablePlayers.length || (o.FinalTablePlayers = []), o.FinalTablePlayers.push(k.commonProto.MttFinalTablePlayer.decode(e, e.uint32()));
                            break;
                        case 55:
                            o.DisplayCardsLeftSeconds = e.uint32();
                            break;
                        case 56:
                            o.PauseStatus = e.bool();
                            break;
                        case 57:
                            o.LeftRiseBlindTime = e.int32();
                            break;
                        case 58:
                            o.LeftRestTime = e.int32();
                            break;
                        case 59:
                            o.TimeLeftSec = e.int32();
                            break;
                        case 60:
                            o.TimerStop = e.bool();
                            break;
                        case 61:
                            o.LeftEnterRestTime = e.int32();
                            break;
                        case 62:
                            o.Bullet = e.int32();
                            break;
                        case 63:
                            o.MaxBullet = e.int32();
                            break;
                        case 64:
                            o.MinBullet = e.int32();
                            break;
                        case 65:
                            o.AvgBullet = e.int32();
                            break;
                        case 66:
                            o.MttMode = e.int32();
                            break;
                        case 67:
                            o.RestIntervalLevel = e.int32();
                            break;
                        case 68:
                            o.InTheMoney = e.uint32();
                            break;
                        case 69:
                            o.MultiFlightId = e.uint32();
                            break;
                        case 70:
                            o.MultiFlightLevel = e.uint32();
                            break;
                        case 71:
                            o.FinalStartTime = e.int64();
                            break;
                        case 72:
                            o.FinalPause = e.bool();
                            break;
                        case 73:
                            o.Desc = e.string();
                            break;
                        case 74:
                            o.IsHeadUp = e.bool();
                            break;
                        case 75:
                            o.DisplayTag = e.string();
                            break;
                        case 76:
                            o.IsCelebrity = e.bool();
                            break;
                        case 77:
                            o.CelebrityList && o.CelebrityList.length || (o.CelebrityList = []), o.CelebrityList.push(k.commonProto.MttCelebrityDetail.decode(e, e.uint32()));
                            break;
                        case 78:
                            o.BlindLevelPause = e.uint32();
                            break;
                        case 79:
                            o.GameInvitationCode = e.string();
                            break;
                        case 80:
                            o.BlindHands = e.uint32();
                            break;
                        case 81:
                            o.DisplayCurrency = e.string();
                            break;
                        case 82:
                            o.Rate && o.Rate.length || (o.Rate = []), o.Rate.push(k.commonProto.TournamentRate.decode(e, e.uint32()));
                            break;
                        case 83:
                            o.TournamentInfo = e.string();
                            break;
                        case 84:
                            o.TournamentInfoI18N = e.string();
                            break;
                        case 85:
                            o.TotalPauseTime = e.int64();
                            break;
                        case 86:
                            o.IsBlOnly = e.bool();
                            break;
                        case 87:
                            o.DisplayRegFee = e.double();
                            break;
                        case 88:
                            o.DisplaySrvFee = e.double();
                            break;
                        case 89:
                            o.RegGoldType = e.int32();
                            break;
                        case 90:
                            o.isPrivate = e.bool();
                            break;
                        case 91:
                            o.Tag && o.Tag.length || (o.Tag = []), o.Tag.push(e.string());
                            break;
                        case 92:
                            o.LowerLimitPlayers = e.int32();
                            break;
                        case 93:
                            o.BlockRobotNum = e.int32();
                            break;
                        case 94:
                            o.TicketBase = e.bool();
                            break;
                        case 95:
                            o.BlockRobot = e.bool();
                            break;
                        case 96:
                            o.TablesCount = e.int32();
                            break;
                        case 97:
                            o.RebuyParam = e.string();
                            break;
                        case 98:
                            o.MorebuyParam = e.string();
                            break;
                        case 99:
                            o.Day2TournamentName = e.string();
                            break;
                        case 100:
                            o.Day2TournamentNameI18N = e.string();
                            break;
                        case 101:
                            o.TimeStamp = e.int64();
                            break;
                        case 102:
                            o.EstimatedDuration = e.int32();
                            break;
                        case 103:
                            o.PrizeCircleInfo && o.PrizeCircleInfo.length || (o.PrizeCircleInfo = []), o.PrizeCircleInfo.push(k.commonProto.MttPrizeCircleInfo.decode(e, e.uint32()));
                            break;
                        case 104:
                            o.FirstPrize = e.double();
                            break;
                        case 105:
                            o.NextPrize = e.double();
                            break;
                        case 106:
                            o.Guaranteed = e.double();
                            break;
                        case 107:
                            o.Overlay = e.double();
                            break;
                        case 108:
                            o.MinPlayers = e.uint32();
                            break;
                        case 109:
                            o.MaxPlayers = e.uint32();
                            break;
                        case 110:
                            o.ShowOverlayIcon = e.bool();
                            break;
                        case 111:
                            o.AdditionalPrizePool = e.double();
                            break;
                        case 112:
                            o.TargetID = e.uint32();
                            break;
                        case 113:
                            if (o.Banners && o.Banners.length || (o.Banners = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.Banners.push(e.int32());
                            else o.Banners.push(e.int32());
                            break;
                        case 114:
                            if (o.Icons && o.Icons.length || (o.Icons = []), 2 == (7 & r))
                                for (i = e.uint32() + e.pos; e.pos < i;) o.Icons.push(e.int32());
                            else o.Icons.push(e.int32());
                            break;
                        case 115:
                            o.InitialTimeBank = e.int32();
                            break;
                        case 117:
                            o.TimeBankAdd = e.int32();
                            break;
                        case 118:
                            o.StopSignupTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 119:
                            o.MorebuyStatus = e.bool();
                            break;
                        case 120:
                            o.MysteryType = e.int32();
                            break;
                        case 121:
                            o.MysteryLeftPercent = e.double();
                            break;
                        case 122:
                            o.MysteryBlindLevel = e.uint32();
                            break;
                        case 123:
                            o.WillPlayStartTime = e.int64();
                            break;
                        case 124:
                            o.WPTDailyAsia = e.bool();
                            break;
                        case 125:
                            o.DailyPrime = e.bool();
                            break;
                        case 126:
                            o.BountyRumble = e.bool();
                            break;
                        case 127:
                            o.OneShot = e.bool();
                            break;
                        case 128:
                            o.HyperDash = e.bool();
                            break;
                        case 129:
                            o.WeeklyGoldenBounty = e.bool();
                            break;
                        case 130:
                            o.WPTMysteryMillion = e.bool();
                            break;
                        case 131:
                            o.AllGamePot = e.double();
                            break;
                        case 132:
                            o.MFJoinedCount = e.uint32();
                            break;
                        case 133:
                            o.CrazyFreeroll = e.bool();
                            break;
                        case 134:
                            o.WPTLive = e.bool();
                            break;
                        case 135:
                            o.RebuyStatus = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Mystery_Type = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "MysteryNone"] = 0, t[e[1] = "MysteryLeftPercent"] = 1, t[e[2] = "MysteryBlindLevel"] = 2, t[e[3] = "MysteryDay2"] = 3, t[e[4] = "MysteryPrizeCirlce"] = 4, t
        }(), p.TournamentRate = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "TournamentRate", e.prototype.Currency = "", e.prototype.ExchangeRate = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Currency && e.hasOwnProperty("Currency") && t.uint32(10).string(e.Currency), null != e.ExchangeRate && e.hasOwnProperty("ExchangeRate") && t.uint32(17).double(e.ExchangeRate), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.TournamentRate; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Currency = e.string();
                            break;
                        case 2:
                            o.ExchangeRate = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.CelebrityRole = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Celebrity"] = 0, t[e[1] = "Commentator"] = 1, t[e[2] = "LiveBroadcast"] = 2, t
        }(), p.MttCelebrityDetail = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttCelebrityDetail", e.prototype.Id = 0, e.prototype.UserID = 0, e.prototype.Nickname = "", e.prototype.WpkImage = "", e.prototype.WpkImageI18n = "", e.prototype.PkwImage = "", e.prototype.PkwImageI18n = "", e.prototype.Role = 0, e.prototype.Avatar = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.UserID && e.hasOwnProperty("UserID") && t.uint32(16).uint32(e.UserID), null != e.Nickname && e.hasOwnProperty("Nickname") && t.uint32(26).string(e.Nickname), null != e.WpkImage && e.hasOwnProperty("WpkImage") && t.uint32(34).string(e.WpkImage), null != e.WpkImageI18n && e.hasOwnProperty("WpkImageI18n") && t.uint32(42).string(e.WpkImageI18n), null != e.PkwImage && e.hasOwnProperty("PkwImage") && t.uint32(50).string(e.PkwImage), null != e.PkwImageI18n && e.hasOwnProperty("PkwImageI18n") && t.uint32(58).string(e.PkwImageI18n), null != e.Role && e.hasOwnProperty("Role") && t.uint32(64).int32(e.Role), null != e.Avatar && e.hasOwnProperty("Avatar") && t.uint32(74).string(e.Avatar), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttCelebrityDetail; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.UserID = e.uint32();
                            break;
                        case 3:
                            o.Nickname = e.string();
                            break;
                        case 4:
                            o.WpkImage = e.string();
                            break;
                        case 5:
                            o.WpkImageI18n = e.string();
                            break;
                        case 6:
                            o.PkwImage = e.string();
                            break;
                        case 7:
                            o.PkwImageI18n = e.string();
                            break;
                        case 8:
                            o.Role = e.int32();
                            break;
                        case 9:
                            o.Avatar = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttFinalTablePlayer = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttFinalTablePlayer", e.prototype.UserId = 0, e.prototype.Nickname = "", e.prototype.Avatar = "", e.prototype.Rank = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), null != e.Nickname && e.hasOwnProperty("Nickname") && t.uint32(18).string(e.Nickname), null != e.Avatar && e.hasOwnProperty("Avatar") && t.uint32(26).string(e.Avatar), null != e.Rank && e.hasOwnProperty("Rank") && t.uint32(32).uint32(e.Rank), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttFinalTablePlayer; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        case 2:
                            o.Nickname = e.string();
                            break;
                        case 3:
                            o.Avatar = e.string();
                            break;
                        case 4:
                            o.Rank = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttPlayerDetail = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttPlayerDetail", e.prototype.PlayerName = "", e.prototype.Wins = 0, e.prototype.Bounty = 0, e.prototype.Value = 0, e.prototype.Coins = 0, e.prototype.UserId = 0, e.prototype.JoinStatus = 0, e.prototype.Rank = 0, e.prototype.Index = 0, e.prototype.RegisterTime = null, e.prototype.Bullet = 0, e.prototype.InitCoin = 0, e.prototype.Avatar = "", e.prototype.Prize = 0, e.prototype.PrizeToolId = 0, e.prototype.ExchangePrize = 0, e.prototype.AreaCode = "", e.prototype.AutoFeed = !1, e.prototype.Area = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.PlayerName && e.hasOwnProperty("PlayerName") && t.uint32(10).string(e.PlayerName), null != e.Wins && e.hasOwnProperty("Wins") && t.uint32(17).double(e.Wins), null != e.Bounty && e.hasOwnProperty("Bounty") && t.uint32(25).double(e.Bounty), null != e.Value && e.hasOwnProperty("Value") && t.uint32(33).double(e.Value), null != e.Coins && e.hasOwnProperty("Coins") && t.uint32(41).double(e.Coins), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(48).uint32(e.UserId), null != e.JoinStatus && e.hasOwnProperty("JoinStatus") && t.uint32(56).int32(e.JoinStatus), null != e.Rank && e.hasOwnProperty("Rank") && t.uint32(64).int32(e.Rank), null != e.Index && e.hasOwnProperty("Index") && t.uint32(72).int32(e.Index), null != e.RegisterTime && e.hasOwnProperty("RegisterTime") && k.google.protobuf.Timestamp.encode(e.RegisterTime, t.uint32(82).fork()).ldelim(), null != e.Bullet && e.hasOwnProperty("Bullet") && t.uint32(88).int32(e.Bullet), null != e.InitCoin && e.hasOwnProperty("InitCoin") && t.uint32(97).double(e.InitCoin), null != e.Avatar && e.hasOwnProperty("Avatar") && t.uint32(106).string(e.Avatar), null != e.Prize && e.hasOwnProperty("Prize") && t.uint32(113).double(e.Prize), null != e.PrizeToolId && e.hasOwnProperty("PrizeToolId") && t.uint32(120).uint32(e.PrizeToolId), null != e.ExchangePrize && e.hasOwnProperty("ExchangePrize") && t.uint32(129).double(e.ExchangePrize), null != e.AreaCode && e.hasOwnProperty("AreaCode") && t.uint32(138).string(e.AreaCode), null != e.AutoFeed && e.hasOwnProperty("AutoFeed") && t.uint32(144).bool(e.AutoFeed), null != e.Area && e.hasOwnProperty("Area") && t.uint32(154).string(e.Area), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttPlayerDetail; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.PlayerName = e.string();
                            break;
                        case 2:
                            o.Wins = e.double();
                            break;
                        case 3:
                            o.Bounty = e.double();
                            break;
                        case 4:
                            o.Value = e.double();
                            break;
                        case 5:
                            o.Coins = e.double();
                            break;
                        case 6:
                            o.UserId = e.uint32();
                            break;
                        case 7:
                            o.JoinStatus = e.int32();
                            break;
                        case 8:
                            o.Rank = e.int32();
                            break;
                        case 9:
                            o.Index = e.int32();
                            break;
                        case 10:
                            o.RegisterTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 11:
                            o.Bullet = e.int32();
                            break;
                        case 12:
                            o.InitCoin = e.double();
                            break;
                        case 13:
                            o.Avatar = e.string();
                            break;
                        case 14:
                            o.Prize = e.double();
                            break;
                        case 15:
                            o.PrizeToolId = e.uint32();
                            break;
                        case 16:
                            o.ExchangePrize = e.double();
                            break;
                        case 17:
                            o.AreaCode = e.string();
                            break;
                        case 18:
                            o.AutoFeed = e.bool();
                            break;
                        case 19:
                            o.Area = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttTableDetail = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttTableDetail", e.prototype.TableId = 0, e.prototype.PlayersNum = 0, e.prototype.MaxCoins = 0, e.prototype.MinCoins = 0, e.prototype.MaxBullet = 0, e.prototype.MinBullet = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.TableId && e.hasOwnProperty("TableId") && t.uint32(8).uint32(e.TableId), null != e.PlayersNum && e.hasOwnProperty("PlayersNum") && t.uint32(16).uint32(e.PlayersNum), null != e.MaxCoins && e.hasOwnProperty("MaxCoins") && t.uint32(25).double(e.MaxCoins), null != e.MinCoins && e.hasOwnProperty("MinCoins") && t.uint32(33).double(e.MinCoins), null != e.MaxBullet && e.hasOwnProperty("MaxBullet") && t.uint32(40).int32(e.MaxBullet), null != e.MinBullet && e.hasOwnProperty("MinBullet") && t.uint32(48).int32(e.MinBullet), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttTableDetail; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TableId = e.uint32();
                            break;
                        case 2:
                            o.PlayersNum = e.uint32();
                            break;
                        case 3:
                            o.MaxCoins = e.double();
                            break;
                        case 4:
                            o.MinCoins = e.double();
                            break;
                        case 5:
                            o.MaxBullet = e.int32();
                            break;
                        case 6:
                            o.MinBullet = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttEnterGameReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttEnterGameReq", e.prototype.TournamentId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(8).uint32(e.TournamentId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttEnterGameReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TournamentId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttEnterGameRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttEnterGameRes", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttEnterGameRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttTournamentStatusRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttTournamentStatusRequest", e.prototype.TournamentId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(8).uint32(e.TournamentId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttTournamentStatusRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TournamentId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttTournamentStatusResponse = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttTournamentStatusResponse", e.prototype.Status = 0, e.prototype.IsPreparing = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Status && e.hasOwnProperty("Status") && t.uint32(8).int32(e.Status), null != e.IsPreparing && e.hasOwnProperty("IsPreparing") && t.uint32(16).bool(e.IsPreparing), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttTournamentStatusResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Status = e.int32();
                            break;
                        case 2:
                            o.IsPreparing = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttTournamentPlayersRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttTournamentPlayersRequest", e.prototype.TournamentId = 0, e.prototype.SearchKeyword = "", e.prototype.UserId = 0, e.prototype.Top200Players = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(8).uint32(e.TournamentId), null != e.SearchKeyword && e.hasOwnProperty("SearchKeyword") && t.uint32(18).string(e.SearchKeyword), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(24).uint32(e.UserId), null != e.Top200Players && e.hasOwnProperty("Top200Players") && t.uint32(32).bool(e.Top200Players), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttTournamentPlayersRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TournamentId = e.uint32();
                            break;
                        case 2:
                            o.SearchKeyword = e.string();
                            break;
                        case 3:
                            o.UserId = e.uint32();
                            break;
                        case 4:
                            o.Top200Players = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttRoomPlayerRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttRoomPlayerRequest", e.prototype.TournamentId = 0, e.prototype.RoomId = 0, e.prototype.UserId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(8).uint32(e.TournamentId), null != e.RoomId && e.hasOwnProperty("RoomId") && t.uint32(16).uint32(e.RoomId), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(24).uint32(e.UserId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttRoomPlayerRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TournamentId = e.uint32();
                            break;
                        case 2:
                            o.RoomId = e.uint32();
                            break;
                        case 3:
                            o.UserId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttRoomPlayerResponse = function() {
            function e(e) {
                if (this.Players = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttRoomPlayerResponse", e.prototype.ErrorCode = 0, e.prototype.Players = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.Players && e.Players.length)
                    for (var n = 0; n < e.Players.length; ++n) k.commonProto.PlayerInfo.encode(e.Players[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttRoomPlayerResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.Players && o.Players.length || (o.Players = []), o.Players.push(k.commonProto.PlayerInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.PlayerInfo = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "PlayerInfo", e.prototype.PlayerName = "", e.prototype.AreaCode = "", e.prototype.Stack = 0, e.prototype.Area = "", e.prototype.TableId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.PlayerName && e.hasOwnProperty("PlayerName") && t.uint32(10).string(e.PlayerName), null != e.AreaCode && e.hasOwnProperty("AreaCode") && t.uint32(18).string(e.AreaCode), null != e.Stack && e.hasOwnProperty("Stack") && t.uint32(24).uint32(e.Stack), null != e.Area && e.hasOwnProperty("Area") && t.uint32(34).string(e.Area), null != e.TableId && e.hasOwnProperty("TableId") && t.uint32(40).uint32(e.TableId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.PlayerInfo; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.PlayerName = e.string();
                            break;
                        case 2:
                            o.AreaCode = e.string();
                            break;
                        case 3:
                            o.Stack = e.uint32();
                            break;
                        case 4:
                            o.Area = e.string();
                            break;
                        case 5:
                            o.TableId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttTournamentPlayersResponse = function() {
            function e(e) {
                if (this.PlayersDetail = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttTournamentPlayersResponse", e.prototype.ErrorCode = 0, e.prototype.PlayersDetail = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.PlayersDetail && e.PlayersDetail.length)
                    for (var n = 0; n < e.PlayersDetail.length; ++n) k.commonProto.MttPlayerDetail.encode(e.PlayersDetail[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttTournamentPlayersResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.PlayersDetail && o.PlayersDetail.length || (o.PlayersDetail = []), o.PlayersDetail.push(k.commonProto.MttPlayerDetail.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttMultiTableRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttMultiTableRequest", e.prototype.UserId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttMultiTableRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Mtt_User_Current_Game_Info = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Mtt_User_Current_Game_Info", e.prototype.Category = 0, e.prototype.SngMttLevelId = 0, e.prototype.RoomId = 0, e.prototype.GameName = "", e.prototype.GameMode = 0, e.prototype.PlayOnJoint = 0, e.prototype.JoinStatus = 0, e.prototype.MttTournamentStatus = 0, e.prototype.MttTournamentIsPreparing = !1, e.prototype.TournamentId = 0, e.prototype.DisplayTag = "", e.prototype.JoinTime = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Category && e.hasOwnProperty("Category") && t.uint32(8).int32(e.Category), null != e.SngMttLevelId && e.hasOwnProperty("SngMttLevelId") && t.uint32(16).uint32(e.SngMttLevelId), null != e.RoomId && e.hasOwnProperty("RoomId") && t.uint32(24).uint32(e.RoomId), null != e.GameName && e.hasOwnProperty("GameName") && t.uint32(34).string(e.GameName), null != e.GameMode && e.hasOwnProperty("GameMode") && t.uint32(40).uint32(e.GameMode), null != e.PlayOnJoint && e.hasOwnProperty("PlayOnJoint") && t.uint32(48).uint32(e.PlayOnJoint), null != e.JoinStatus && e.hasOwnProperty("JoinStatus") && t.uint32(56).int32(e.JoinStatus), null != e.MttTournamentStatus && e.hasOwnProperty("MttTournamentStatus") && t.uint32(64).int32(e.MttTournamentStatus), null != e.MttTournamentIsPreparing && e.hasOwnProperty("MttTournamentIsPreparing") && t.uint32(72).bool(e.MttTournamentIsPreparing), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(80).uint32(e.TournamentId), null != e.DisplayTag && e.hasOwnProperty("DisplayTag") && t.uint32(90).string(e.DisplayTag), null != e.JoinTime && e.hasOwnProperty("JoinTime") && t.uint32(96).int64(e.JoinTime), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Mtt_User_Current_Game_Info; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Category = e.int32();
                            break;
                        case 2:
                            o.SngMttLevelId = e.uint32();
                            break;
                        case 3:
                            o.RoomId = e.uint32();
                            break;
                        case 4:
                            o.GameName = e.string();
                            break;
                        case 5:
                            o.GameMode = e.uint32();
                            break;
                        case 6:
                            o.PlayOnJoint = e.uint32();
                            break;
                        case 7:
                            o.JoinStatus = e.int32();
                            break;
                        case 8:
                            o.MttTournamentStatus = e.int32();
                            break;
                        case 9:
                            o.MttTournamentIsPreparing = e.bool();
                            break;
                        case 10:
                            o.TournamentId = e.uint32();
                            break;
                        case 11:
                            o.DisplayTag = e.string();
                            break;
                        case 12:
                            o.JoinTime = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttMultiTableResponse = function() {
            function e(e) {
                if (this.UserGameInfo = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttMultiTableResponse", e.prototype.UserGameInfo = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.UserGameInfo && e.UserGameInfo.length)
                    for (var n = 0; n < e.UserGameInfo.length; ++n) k.commonProto.Mtt_User_Current_Game_Info.encode(e.UserGameInfo[n], t.uint32(10).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttMultiTableResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserGameInfo && o.UserGameInfo.length || (o.UserGameInfo = []), o.UserGameInfo.push(k.commonProto.Mtt_User_Current_Game_Info.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.ErrorCode = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "No_Error"] = 0, t[e[1] = "Secure_Token_Invalid"] = 1, t[e[2] = "Connection_Invalid"] = 2, t[e[10] = "SERVER_EXITING"] = 10, t[e[20] = "SERVER_MAINTENANCE"] = 20, t[e[98] = "DB_Record_Not_Found"] = 98, t[e[99] = "DB_Query_Failed"] = 99, t[e[100] = "DB_Write_Failed"] = 100, t[e[101] = "JSON_Parse_Failed"] = 101, t[e[102] = "DB_Record_Already_Exist"] = 102, t[e[307] = "Temporary_Disabled"] = 307, t[e[400] = "Bad_Request"] = 400, t[e[401] = "Unauthorized"] = 401, t[e[403] = "Forbidden"] = 403, t[e[404] = "Not_Found"] = 404, t[e[422] = "Unprocessable"] = 422, t[e[5e3] = "GOLD_INSUFFICENT"] = 5e3, t[e[5001] = "GOLD_NOT_VALID"] = 5001, t[e[6e3] = "BROADCAST_MESSAGE_SEND_FAIL"] = 6e3, t[e[6002] = "GuessCard_Forbidden"] = 6002, t[e[9e3] = "Admin_Not_Exist"] = 9e3, t[e[9001] = "Admin_Operate_Abnormal"] = 9001, t[e[1e4] = "User_Register_Mobile_Taken"] = 1e4, t[e[10001] = "User_Login_Invalid"] = 10001, t[e[10002] = "User_Mobile_Not_Sent"] = 10002, t[e[10003] = "User_Mobile_Too_Frequent"] = 10003, t[e[10004] = "User_Mobile_Sms_In_Valid"] = 10004, t[e[10005] = "User_Login_Too_Frequent"] = 10005, t[e[10007] = "User_Login_Again"] = 10007, t[e[10008] = "User_Not_Exist"] = 10008, t[e[10009] = "User_Not_Online"] = 10009, t[e[10010] = "User_Account_Locked"] = 10010, t[e[10011] = "User_Device_Locked"] = 10011, t[e[10014] = "User_Account_Forbidden"] = 10014, t[e[10015] = "User_External_Token_Invalid"] = 10015, t[e[10100] = "User_Update_Failed"] = 10100, t[e[10101] = "User_Nickname_Already_Exists"] = 10101, t[e[10012] = "User_Account_Forbid"] = 10012, t[e[10200] = "User_Client_Need_Update"] = 10200, t[e[10500] = "User_No_Agent"] = 10500, t[e[10600] = "User_Login_Password_Fail_0"] = 10600, t[e[10601] = "User_Login_Password_Fail_1"] = 10601, t[e[10602] = "User_Login_Password_Fail_2"] = 10602, t[e[10603] = "User_Login_Password_Fail_3"] = 10603, t[e[10610] = "User_Login_Password_Fail_Impoker"] = 10610, t[e[10700] = "User_Account_Locked_For_Password"] = 10700, t[e[10800] = "User_Operating"] = 10800, t[e[10900] = "User_Withdraw_Password_Fail_0"] = 10900, t[e[10901] = "User_Withdraw_Password_Fail_1"] = 10901, t[e[10902] = "User_Withdraw_Password_Fail_2"] = 10902, t[e[10903] = "User_Withdraw_Password_Fail_3"] = 10903, t[e[10904] = "User_Withdraw_Password_Fail_4"] = 10904, t[e[10910] = "User_Operate_Frequent"] = 10910, t[e[10911] = "User_Note_Too_Long"] = 10911, t[e[10950] = "User_Favourite_Record_Limit_Reach"] = 10950, t[e[11e3] = "Tool_In_Backpack_Not_Exist"] = 11e3, t[e[11001] = "Tool_In_Backpack_Expired"] = 11001, t[e[11002] = "Tool_Not_Exists"] = 11002, t[e[11003] = "Tool_Value_Not_Match"] = 11003, t[e[11004] = "Tool_In_Backpack_Ownership_Invalid"] = 11004, t[e[11005] = "Tool_Expired"] = 11005, t[e[11006] = "Tool_Currency_Not_Match"] = 11006, t[e[11007] = "Tool_Type_Not_Match"] = 11007, t[e[11008] = "Tool_Rate_Invalid"] = 11008, t[e[13e3] = "Impoker_User_Not_Agent"] = 13e3, t[e[13001] = "Impoker_User_Migration_Failed"] = 13001, t[e[13002] = "Impoker_User_Need_To_Choose_User"] = 13002, t[e[2e4] = "Association_Locked"] = 2e4, t[e[20100] = "Association_Not_Member"] = 20100, t[e[20101] = "Association_Not_Admin"] = 20101, t[e[20501] = "Association_Invalid_Rate"] = 20501, t[e[21001] = "Association_Out_Of_Withdraw_Quota"] = 21001, t[e[210010] = "Association_Reward_Withdraw_Ration"] = 210010, t[e[210011] = "Association_Reward_Withdraw_Already_Draw"] = 210011, t[e[210012] = "Association_Reward_Withdraw_Pending_For_Review"] = 210012, t[e[3e4] = "Mtt_Invalid_Param"] = 3e4, t[e[30001] = "Mtt_Player_Already_SignUp"] = 30001, t[e[30002] = "Mtt_Player_Eliminated"] = 30002, t[e[30003] = "Mtt_Player_Rebuy_Limit_Exceeded"] = 30003, t[e[30004] = "Mtt_Player_Not_Eliminated"] = 30004, t[e[30005] = "Mtt_Player_Reenter_Limit_Exceeded"] = 30005, t[e[30006] = "Mtt_Player_Get_Redis_Fail"] = 30006, t[e[30007] = "Mtt_Get_DB_Fail"] = 30007, t[e[30008] = "Mtt_Update_DB_Fail"] = 30008, t[e[30009] = "Mtt_Timeout"] = 30009, t[e[30010] = "Mtt_Player_Delete_Redis_Fail"] = 30010, t[e[31e3] = "Mtt_Tournament_Signup_Stopped"] = 31e3, t[e[31001] = "Mtt_Tournament_Ended"] = 31001, t[e[31002] = "Mtt_Tournament_Signup_Limit_Reached"] = 31002, t[e[31003] = "Mtt_Tournament_Started"] = 31003, t[e[31004] = "Mtt_Tournament_Canceled"] = 31004, t[e[31005] = "Tournament_Ticket_Not_Exists"] = 31005, t[e[31006] = "Tournament_Not_A_Ticket"] = 31006, t[e[31007] = "Tournament_Ticket_Category_Not_Match"] = 31007, t[e[31008] = "Tournament_Ticket_Tournament_Id_Not_Match"] = 31008, t[e[31009] = "Mtt_Tournament_Paused"] = 31009, t[e[31010] = "Mtt_Tournament_Signup_Gold_Prohibited"] = 31010, t[e[31011] = "Mtt_Tournament_Signup_Ticket_Prohibited"] = 31011, t[e[31012] = "Mtt_Tournament_Signup_USDT_Prohibited"] = 31012, t[e[31013] = "Mtt_Tournament_Release"] = 31013, t[e[31014] = "Mtt_Tournament_Ticket_Invalid"] = 31014, t[e[31015] = "Mtt_Tournament_No_Update"] = 31015, t[e[31100] = "Mtt_Tournament_Preparing"] = 31100, t[e[31101] = "Mtt_Tournament_Not_Started"] = 31101, t[e[31102] = "Mtt_Tournament_Not_Exist"] = 31102, t[e[32e3] = "Mtt_Tournament_Ip_Already_Registered"] = 32e3, t[e[33e3] = "Mtt_Tournament_Not_Allow_Signup_Now"] = 33e3, t[e[33001] = "Mtt_Tournament_Max_Limit_Join"] = 33001, t[e[33002] = "Mtt_Multi_Flight_Final_NotAllow_Signup"] = 33002, t[e[33003] = "Mtt_Multi_Flight_Already_Signup"] = 33003, t[e[33004] = "Mtt_Multi_Flight_Not_Allow_Signup_Mul_Flight"] = 33004, t[e[33005] = "Mtt_Multi_Flight_Param"] = 33005, t[e[330050] = "Mtt_Multi_Flight_Param_NST_INVALID"] = 330050, t[e[330051] = "Mtt_Multi_Flight_Param_PAUSE_MISSING"] = 330051, t[e[33006] = "Mtt_Multi_Flight_Enter_Final"] = 33006, t[e[33007] = "Mtt_Multi_Flight_Final_Exist"] = 33007, t[e[33100] = "Mtt_Private_Pwd_Err"] = 33100, t[e[33101] = "Mtt_Private_Pwd_Err_Forbid"] = 33101, t[e[33102] = "Mtt_GeoComplianceToken_Check_Fail"] = 33102, t[e[33112] = "Mtt_Block_Robot"] = 33112, t[e[33113] = "Mtt_AutoFeed_NotAllowCancel"] = 33113, t[e[4e4] = "Platform_Connection_Error"] = 4e4, t[e[40001] = "Platform_Send_Error"] = 40001, t[e[40002] = "Platform_Response_Empty"] = 40002, t[e[40003] = "Platform_Response_Invalid"] = 40003, t[e[40004] = "Platform_Response_Error"] = 40004, t[e[40005] = "Platform_Timeout_Slow_Error"] = 40005, t[e[60001] = "Mini_Game_User_Not_Taken_Out"] = 60001, t[e[60002] = "Mini_Game_Bet_Amount_Fewer_Than_Tool_Value"] = 60002, t[e[60501] = "User_Point_Insufficient"] = 60501, t[e[60600] = "WorldCupGuess_Ended"] = 60600, t
        }(), p.BROADCAST_MESSAGE_EVENT_TYPE = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "PLAIN"] = 0, t[e[1] = "LINK"] = 1, t[e[2] = "HOT_UPDATE_NOTICE"] = 2, t[e[1e3] = "ENTER_GAME_NOTICE"] = 1e3, t[e[1001] = "ASSO_APPLICATION_REQ"] = 1001, t[e[1002] = "OUT_GAME_NOTICE"] = 1002, t[e[1003] = "MTT_STATUS_CHANGED_NOTICE"] = 1003, t[e[1004] = "END_GAME_NOTICE"] = 1004, t[e[1005] = "CANCEL_GAME_NOTICE"] = 1005, t[e[1006] = "Release_GAME_NOTICE"] = 1006, t[e[2e3] = "EVENTS_UPDATED"] = 2e3, t[e[3e3] = "RED_POCKET_NOTICE"] = 3e3, t[e[3001] = "RED_POCKET_CAROUSEL"] = 3001, t[e[3500] = "GOT_TOOL"] = 3500, t[e[4e3] = "CHANGE_REJECT"] = 4e3, t[e[4500] = "PUSH_CAROUSEL"] = 4500, t[e[4501] = "Aipt_Trade"] = 4501, t[e[4502] = "MTT_Reaward_Notice"] = 4502, t[e[4503] = "MT_BlockRobot_Start_NOTICE"] = 4503, t[e[4504] = "MT_BlockRobot_Stop_NOTICE"] = 4504, t[e[4505] = "MTT_AutoFeed_Notice"] = 4505, t[e[4506] = "Offline_Register_Audit_Notice"] = 4506, t[e[4507] = "Spins_Maintenance_Refund_Notice"] = 4507, t[e[4508] = "MTT_Start_GAME_NOTICE"] = 4508, t
        }(), p.USER_UPDATE_TYPE = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "REGISTER"] = 0, t[e[1] = "USER_SELF_UPDATE"] = 1, t[e[2] = "GOLD_CHANGE"] = 2, t[e[3] = "FIRST_JOIN_ASSOCIATION"] = 3, t[e[4] = "LOCKED"] = 4, t[e[5] = "UNLOCKED"] = 5, t[e[6] = "ADMIN_MOD_FROM_BACKEND"] = 6, t[e[7] = "USER_RESET_PASSWORD"] = 7, t[e[8] = "USER_CHANGE_NICKNAME"] = 8, t[e[9] = "ADMIN_LOCK_FROM_BACKEND"] = 9, t[e[10] = "ADMIN_UNLOCK_FROM_BACKEND"] = 10, t[e[11] = "NICKNAME_UPDATE_REJECTED"] = 11, t[e[12] = "AVATAR_CHANGED"] = 12, t[e[13] = "BROADCAST_CHANGED"] = 13, t[e[14] = "ADMIN_FORBIDDEN_FROM_BACKEND"] = 14, t
        }(), p.GOLD_UPDATE_TYPE = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "GAME_START_PAY"] = 0, t[e[1] = "GAME_END_RETURN"] = 1, t[e[2] = "GAME_END_SHARE"] = 2, t[e[3] = "ADMIN_CHANGE"] = 3, t[e[4] = "EVENT_MTT_COST"] = 4, t[e[5] = "EVENT_MTT_GAIN"] = 5, t[e[6] = "EVENT_SNG_COST"] = 6, t[e[7] = "EVENT_SNG_GAIN"] = 7, t[e[8] = "EXCEPTION_RETURN"] = 8, t[e[9] = "FROM_IMPOKER"] = 9, t[e[10] = "TO_IMPOKER"] = 10, t[e[11] = "USER_PAYMENT"] = 11, t[e[12] = "USER_WITHDRAW"] = 12, t[e[13] = "USER_REFUND"] = 13, t[e[14] = "USER_NICKNAME_UPDATE"] = 14, t[e[15] = "JACKPOT"] = 15, t[e[16] = "COMMISSION"] = 16, t[e[17] = "GAME_REFUND"] = 17, t[e[50] = "EVENT_RED_POCKET"] = 50, t[e[100] = "GAME_END_COMMISSION"] = 100, t[e[101] = "MTT_COMMISSION"] = 101, t[e[102] = "SNG_COMMISSION"] = 102, t[e[103] = "TOOL_REDEMPTION"] = 103, t[e[104] = "SNG_END_COMMISSION"] = 104, t[e[105] = "MINIGAME_GUESS_CARDS_COMMISSION"] = 105, t[e[106] = "MINIGAME_COMMISSION"] = 106, t[e[200] = "ASSOCIATION_WITHDRAW"] = 200, t[e[201] = "EMOJI_PAY"] = 201, t[e[202] = "SEND_GIFT"] = 202, t[e[203] = "RECEIVE_GIFT"] = 203, t[e[204] = "IN_GAME_PURCHASE"] = 204, t[e[210] = "CONSUME_TICKET"] = 210, t[e[211] = "CONSUME_COUPON"] = 211, t[e[212] = "RETURN_TICKET"] = 212, t[e[213] = "RETURN_COUPON"] = 213, t[e[214] = "MINIGAME_GUESS_CARDS_COST"] = 214, t[e[215] = "MINIGAME_GUESS_CARDS_GAIN"] = 215, t[e[300] = "PRIZE_BASE"] = 300, t[e[301] = "MINIGAME_TAKEIN"] = 301, t[e[302] = "MINIGAME_REFUND"] = 302, t[e[303] = "MINIGAME_REWARD"] = 303, t[e[304] = "MINIGAME_TRANSFER"] = 304, t[e[305] = "MINIGAME_ACTIVITY_REWARD"] = 305, t[e[400] = "TRANSFER_TO_COFFER"] = 400, t[e[401] = "TRANSFER_FROM_COFFER"] = 401, t[e[402] = "GOLD_UPDATE_TYPE_ASSOCIATION_Reward_WithDraw"] = 402, t[e[501] = "TRANSFER_AIPT_TICKET"] = 501, t[e[502] = "TRANSFER_AIPT_HOTEL"] = 502, t[e[503] = "TRANSFER_AIPT_TRADE_TICKET"] = 503, t[e[504] = "GOLD_UPDATE_TYPE_Aipt_Asso_WithDraw"] = 504, t[e[510] = "LOTTERY_TICKET"] = 510, t
        }(), p.GAME_CATEGORY = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "GEN_PP"] = 0, t[e[1] = "MTT"] = 1, t[e[2] = "SNG"] = 2, t[e[-2] = "SNG_AOF"] = -2, t[e[3] = "LOOP_PP"] = 3, t[e[100] = "BLACK_JACK"] = 100, t[e[200] = "COW_BOY"] = 200, t[e[-1] = "GUESS_CARD"] = -1, t[e[300] = "AIPT"] = 300, t
        }(), p.MTT_GAME_MODE = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "NONE"] = 0, t[e[1] = "PP"] = 1, t[e[2] = "NLH"] = 2, t[e[3] = "SHORT_DECK"] = 3, t[e[4] = "OMAHA"] = 4, t
        }(), p.MTT_GAME_STATUS = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "NOT_STARTED"] = 0, t[e[1] = "STARTED"] = 1, t[e[2] = "STOP_SIGNUP"] = 2, t[e[3] = "ENDED"] = 3, t
        }(), p.SNG_GAME_STATUS = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "SNG_NOT_STARTED"] = 0, t[e[1] = "SNG_STARTED"] = 1, t[e[3] = "SNG_ENDED"] = 3, t
        }(), p.GAME_ROOM_STATE = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "READY"] = 0, t[e[1] = "PLAYING"] = 1, t[e[3] = "END"] = 3, t
        }(), p.TOURNAMENT_MODE = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "NORMAL"] = 0, t[e[1] = "HUNTER"] = 1, t[e[2] = "SUPER_HUNTER"] = 2, t[e[3] = "Mystery"] = 3, t
        }(), p.CLIENT_TYPE = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "WEB"] = 0, t[e[1] = "ANDROID"] = 1, t[e[2] = "IOS"] = 2, t
        }(), p.BANNER_POSITION = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "HALL_TOP"] = 0, t[e[1] = "POPUP"] = 1, t[e[2] = "HALL_TOP_VIDEO"] = 2, t
        }(), p.TOOL_CONSUME_TYPE = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "CONSUME"] = 0, t[e[1] = "REFUND"] = 1, t
        }(), p.TOOL_TYPE = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "ticket"] = 0, t[e[1] = "redPocket"] = 1, t[e[2] = "gift"] = 2, t[e[3] = "coupon"] = 3, t[e[4] = "free_ticket"] = 4, t[e[5] = "Satellite_Ticket"] = 5, t[e[6] = "WPT_Offline"] = 6, t[e[7] = "WPT_Offline_Hotel"] = 7, t[e[8] = "WPT_Offline_Hotel_Mall"] = 8, t
        }(), p.PLATFORM = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "TRIBAL_PIONEER"] = 0, t[e[1] = "PKW"] = 1, t[e[2] = "WPK"] = 2, t[e[3] = "BL"] = 3, t[e[4] = "A5"] = 4, t[e[5] = "A5_Compliance"] = 5, t
        }(), p.Disable_Feature = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "withdraw"] = 0, t[e[1] = "user_gift"] = 1, t[e[2] = "charge"] = 2, t[e[3] = "tool_gift"] = 3, t[e[4] = "cs_800"] = 4, t[e[5] = "A5_GeoComply"] = 5, t[e[6] = "PKW_GeoComply"] = 6, t[e[7] = "WPK_GeoComply"] = 7, t[e[8] = "team_display"] = 8, t
        }(), p.Gold_Type = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Gold"] = 0, t[e[1] = "Usdt"] = 1, t
        }(), p.MttBanner = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Banner_None"] = 0, t[e[1] = "Series"] = 1, t[e[2] = "Live"] = 2, t[e[3] = "Satellite"] = 3, t[e[4] = "Special"] = 4, t[e[5] = "PKO"] = 5, t[e[6] = "KO"] = 6, t[e[7] = "MysteryBountyBanner"] = 7, t[e[8] = "Over10k"] = 8, t[e[9] = "Other"] = 9, t[e[10] = "CNYBanner"] = 10, t[e[11] = "WeeklyGoldenBanner"] = 11, t[e[12] = "WPTBanner"] = 12, t[e[13] = "BountyBanner"] = 13, t
        }(), p.MttIcon = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Icon_None"] = 0, t[e[1] = "WPTTrophy"] = 1, t[e[2] = "KoreaFlag"] = 2, t[e[3] = "MainEventPassport"] = 3, t[e[4] = "PrimePassport"] = 4, t[e[5] = "Crown"] = 5, t[e[6] = "Medals"] = 6, t[e[7] = "BumpUp"] = 7, t[e[8] = "PKOGlove"] = 8, t[e[9] = "BountyHunterAim"] = 9, t[e[10] = "MysteryBountyIcon"] = 10, t[e[11] = "CNYIcon"] = 11, t[e[12] = "WeeklyGoldenIcon"] = 12, t[e[13] = "WPTIcon"] = 13, t[e[14] = "BountyIcon"] = 14, t
        }(), p.Rebuy_Status_STATE = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Rebuy_Status_None"] = 0, t[e[1] = "Rebuy_Status_Rebuy"] = 1, t[e[2] = "Rebuy_Status_Add_ons"] = 2, t
        }(), p.UserRegisterRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserRegisterRequest", e.prototype.User = null, e.prototype.validationCode = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.User && e.hasOwnProperty("User") && k.modelProto.User.encode(e.User, t.uint32(10).fork()).ldelim(), null != e.validationCode && e.hasOwnProperty("validationCode") && t.uint32(18).string(e.validationCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.UserRegisterRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.User = k.modelProto.User.decode(e, e.uint32());
                            break;
                        case 2:
                            o.validationCode = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.UserRegisterResponse = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserRegisterResponse", e.prototype.ErrorCode = 0, e.prototype.UserId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(16).uint32(e.UserId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.UserRegisterResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.UserId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.UserLoginRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserLoginRequest", e.prototype.AreaCode = "", e.prototype.Mobile = "", e.prototype.Password = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.AreaCode && e.hasOwnProperty("AreaCode") && t.uint32(10).string(e.AreaCode), null != e.Mobile && e.hasOwnProperty("Mobile") && t.uint32(18).string(e.Mobile), null != e.Password && e.hasOwnProperty("Password") && t.uint32(26).string(e.Password), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.UserLoginRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.AreaCode = e.string();
                            break;
                        case 2:
                            o.Mobile = e.string();
                            break;
                        case 3:
                            o.Password = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.UserLoginResponse = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserLoginResponse", e.prototype.ErrorCode = 0, e.prototype.UserId = 0, e.prototype.Token = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(16).uint32(e.UserId), null != e.Token && e.hasOwnProperty("Token") && t.uint32(26).string(e.Token), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.UserLoginResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.UserId = e.uint32();
                            break;
                        case 3:
                            o.Token = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.UserResetPasswordRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserResetPasswordRequest", e.prototype.User = null, e.prototype.ValidationCode = "", e.prototype.NewPassword = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.User && e.hasOwnProperty("User") && k.modelProto.User.encode(e.User, t.uint32(10).fork()).ldelim(), null != e.ValidationCode && e.hasOwnProperty("ValidationCode") && t.uint32(18).string(e.ValidationCode), null != e.NewPassword && e.hasOwnProperty("NewPassword") && t.uint32(26).string(e.NewPassword), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.UserResetPasswordRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.User = k.modelProto.User.decode(e, e.uint32());
                            break;
                        case 2:
                            o.ValidationCode = e.string();
                            break;
                        case 3:
                            o.NewPassword = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.UserResetPasswordResponse = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserResetPasswordResponse", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.UserResetPasswordResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.SendBytes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SendBytes", e.prototype.data = b.newBuffer([]), e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.data && e.hasOwnProperty("data") && t.uint32(10).bytes(e.data), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.SendBytes; e.pos < n;) {
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
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.UpdateUserNoteRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UpdateUserNoteRequest", e.prototype.UserId = 0, e.prototype.Note = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), null != e.Note && e.hasOwnProperty("Note") && t.uint32(18).string(e.Note), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.UpdateUserNoteRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        case 2:
                            o.Note = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.UpdateUserNoteResponse = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UpdateUserNoteResponse", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.UpdateUserNoteResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.UserNoteRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserNoteRequest", e.prototype.UserId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.UserNoteRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.UserNoteResponse = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserNoteResponse", e.prototype.ErrorCode = 0, e.prototype.Note = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.Note && e.hasOwnProperty("Note") && t.uint32(18).string(e.Note), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.UserNoteResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.Note = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Secure_Token_Check = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Secure_Token_Check", e.prototype.Token = "", e.prototype.device = "", e.prototype.environment = "", e.prototype.ClientType = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Token && e.hasOwnProperty("Token") && t.uint32(10).string(e.Token), null != e.device && e.hasOwnProperty("device") && t.uint32(18).string(e.device), null != e.environment && e.hasOwnProperty("environment") && t.uint32(26).string(e.environment), null != e.ClientType && e.hasOwnProperty("ClientType") && t.uint32(32).uint32(e.ClientType), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Secure_Token_Check; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Token = e.string();
                            break;
                        case 2:
                            o.device = e.string();
                            break;
                        case 3:
                            o.environment = e.string();
                            break;
                        case 4:
                            o.ClientType = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Secure_Token_Error_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Secure_Token_Error_Response", e.prototype.ErrorCode = 0, e.prototype.FailMessage = "", e.prototype.FailMessageI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.FailMessage && e.hasOwnProperty("FailMessage") && t.uint32(18).string(e.FailMessage), null != e.FailMessageI18N && e.hasOwnProperty("FailMessageI18N") && t.uint32(26).string(e.FailMessageI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Secure_Token_Error_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.FailMessage = e.string();
                            break;
                        case 3:
                            o.FailMessageI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.RealIp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "RealIp", e.prototype.ip = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ip && e.hasOwnProperty("ip") && t.uint32(10).string(e.ip), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.RealIp; e.pos < n;) {
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
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Test1 = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Test1", e.prototype.a = 0, e.prototype.b = 0, e.prototype.c = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.a && e.hasOwnProperty("a") && t.uint32(8).int32(e.a), null != e.b && e.hasOwnProperty("b") && t.uint32(16).int32(e.b), null != e.c && e.hasOwnProperty("c") && t.uint32(26).string(e.c), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Test1; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.a = e.int32();
                            break;
                        case 2:
                            o.b = e.int32();
                            break;
                        case 3:
                            o.c = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Test2 = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Test2", e.prototype.a = 0, e.prototype.b = 0, e.prototype.c = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.a && e.hasOwnProperty("a") && t.uint32(8).int32(e.a), null != e.b && e.hasOwnProperty("b") && t.uint32(16).int32(e.b), null != e.c && e.hasOwnProperty("c") && t.uint32(26).string(e.c), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Test2; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.a = e.int32();
                            break;
                        case 2:
                            o.b = e.int32();
                            break;
                        case 3:
                            o.c = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Point_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Point_Request", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Point_Request; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Point_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Point_Response", e.prototype.ErrorCode = 0, e.prototype.userPoint = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.userPoint && e.hasOwnProperty("userPoint") && k.modelProto.UserPoint.encode(e.userPoint, t.uint32(18).fork()).ldelim(), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Point_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.userPoint = k.modelProto.UserPoint.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Point_Tools_Set_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Point_Tools_Set_Request", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Point_Tools_Set_Request; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Point_Tools_Set_Response = function() {
            function e(e) {
                if (this.userPointChangeSet = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Point_Tools_Set_Response", e.prototype.ErrorCode = 0, e.prototype.userPointChangeSet = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.userPointChangeSet && e.userPointChangeSet.length)
                    for (var n = 0; n < e.userPointChangeSet.length; ++n) k.modelProto.UserPointChangeToolSet.encode(e.userPointChangeSet[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Point_Tools_Set_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.userPointChangeSet && o.userPointChangeSet.length || (o.userPointChangeSet = []), o.userPointChangeSet.push(k.modelProto.UserPointChangeToolSet.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Point_Tools_Change_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Point_Tools_Change_Request", e.prototype.UserId = 0, e.prototype.ToolId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), null != e.ToolId && e.hasOwnProperty("ToolId") && t.uint32(16).uint32(e.ToolId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Point_Tools_Change_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        case 2:
                            o.ToolId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Point_Tools_Change_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Point_Tools_Change_Response", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Point_Tools_Change_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Point_Tools_Change_List_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Point_Tools_Change_List_Request", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Point_Tools_Change_List_Request; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Point_Tools_Change_List_Response = function() {
            function e(e) {
                if (this.userPointChangeList = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Point_Tools_Change_List_Response", e.prototype.ErrorCode = 0, e.prototype.userPointChangeList = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.userPointChangeList && e.userPointChangeList.length)
                    for (var n = 0; n < e.userPointChangeList.length; ++n) k.modelProto.UserPointToolChangeBill.encode(e.userPointChangeList[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Point_Tools_Change_List_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.userPointChangeList && o.userPointChangeList.length || (o.userPointChangeList = []), o.userPointChangeList.push(k.modelProto.UserPointToolChangeBill.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Results_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Results_Request", e.prototype.UserId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_Results_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.GameResult = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "GameResult", e.prototype.Id = 0, e.prototype.GameMode = 0, e.prototype.TypeId = 0, e.prototype.LevelId = 0, e.prototype.RoomId = 0, e.prototype.SectionId = 0, e.prototype.TournamentId = 0, e.prototype.TournamentMode = 0, e.prototype.IsAofSng = !1, e.prototype.UserId = 0, e.prototype.Name = "", e.prototype.NumPlayers = 0, e.prototype.PPBasePot = 0, e.prototype.TotalFee = 0, e.prototype.CommissionFee = 0, e.prototype.EndTime = null, e.prototype.PrizeMoney = 0, e.prototype.PrizeTool = 0, e.prototype.Rank = 0, e.prototype.GameTimeSec = 0, e.prototype.BuyCount = 0, e.prototype.PlayerTakeIn = 0, e.prototype.TotalTakeIn = 0, e.prototype.PlatformCommission = 0, e.prototype.AssoCommission = 0, e.prototype.TotalRounds = 0, e.prototype.PlayOnJoint = 0, e.prototype.TotalGamePot = 0, e.prototype.RoomMode = 0, e.prototype.LevelStartTime = null, e.prototype.LevelEndTime = null, e.prototype.RedPocket = 0, e.prototype.JackPot = 0, e.prototype.RedPocketToolIds = "", e.prototype.RedPocketBackpackIds = "", e.prototype.Bounty = 0, e.prototype.Wins = 0, e.prototype.JoinStatus = 0, e.prototype.RedPocketIds = "", e.prototype.IsMultiflight = !1, e.prototype.UseFreeTicket = !1, e.prototype.UseSatelliteTicket = !1, e.prototype.NameI18N = "", e.prototype.IsBl = !1, e.prototype.IsPkw = !1, e.prototype.IsWpk = !1, e.prototype.DisplayCurrency = "", e.prototype.ExchangeRate = 0, e.prototype.CelebrityHunt = 0, e.prototype.ThinkTime = 0, e.prototype.RegGoldType = 0, e.prototype.IsWpto = !1, e.prototype.ToolPlatForm = 0, e.prototype.Day2 = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.GameMode && e.hasOwnProperty("GameMode") && t.uint32(16).uint32(e.GameMode), null != e.TypeId && e.hasOwnProperty("TypeId") && t.uint32(24).uint32(e.TypeId), null != e.LevelId && e.hasOwnProperty("LevelId") && t.uint32(32).uint32(e.LevelId), null != e.RoomId && e.hasOwnProperty("RoomId") && t.uint32(40).uint32(e.RoomId), null != e.SectionId && e.hasOwnProperty("SectionId") && t.uint32(48).uint32(e.SectionId), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(56).uint32(e.TournamentId), null != e.TournamentMode && e.hasOwnProperty("TournamentMode") && t.uint32(64).uint32(e.TournamentMode), null != e.IsAofSng && e.hasOwnProperty("IsAofSng") && t.uint32(72).bool(e.IsAofSng), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(80).uint32(e.UserId), null != e.Name && e.hasOwnProperty("Name") && t.uint32(90).string(e.Name), null != e.NumPlayers && e.hasOwnProperty("NumPlayers") && t.uint32(96).uint32(e.NumPlayers), null != e.PPBasePot && e.hasOwnProperty("PPBasePot") && t.uint32(105).double(e.PPBasePot), null != e.TotalFee && e.hasOwnProperty("TotalFee") && t.uint32(113).double(e.TotalFee), null != e.CommissionFee && e.hasOwnProperty("CommissionFee") && t.uint32(121).double(e.CommissionFee), null != e.EndTime && e.hasOwnProperty("EndTime") && k.google.protobuf.Timestamp.encode(e.EndTime, t.uint32(130).fork()).ldelim(), null != e.PrizeMoney && e.hasOwnProperty("PrizeMoney") && t.uint32(137).double(e.PrizeMoney), null != e.PrizeTool && e.hasOwnProperty("PrizeTool") && t.uint32(144).uint32(e.PrizeTool), null != e.Rank && e.hasOwnProperty("Rank") && t.uint32(152).int32(e.Rank), null != e.GameTimeSec && e.hasOwnProperty("GameTimeSec") && t.uint32(160).uint32(e.GameTimeSec), null != e.BuyCount && e.hasOwnProperty("BuyCount") && t.uint32(168).uint32(e.BuyCount), null != e.PlayerTakeIn && e.hasOwnProperty("PlayerTakeIn") && t.uint32(177).double(e.PlayerTakeIn), null != e.TotalTakeIn && e.hasOwnProperty("TotalTakeIn") && t.uint32(185).double(e.TotalTakeIn), null != e.PlatformCommission && e.hasOwnProperty("PlatformCommission") && t.uint32(193).double(e.PlatformCommission), null != e.AssoCommission && e.hasOwnProperty("AssoCommission") && t.uint32(201).double(e.AssoCommission), null != e.TotalRounds && e.hasOwnProperty("TotalRounds") && t.uint32(208).uint32(e.TotalRounds), null != e.PlayOnJoint && e.hasOwnProperty("PlayOnJoint") && t.uint32(216).uint32(e.PlayOnJoint), null != e.TotalGamePot && e.hasOwnProperty("TotalGamePot") && t.uint32(225).double(e.TotalGamePot), null != e.RoomMode && e.hasOwnProperty("RoomMode") && t.uint32(232).uint32(e.RoomMode), null != e.LevelStartTime && e.hasOwnProperty("LevelStartTime") && k.google.protobuf.Timestamp.encode(e.LevelStartTime, t.uint32(242).fork()).ldelim(), null != e.LevelEndTime && e.hasOwnProperty("LevelEndTime") && k.google.protobuf.Timestamp.encode(e.LevelEndTime, t.uint32(250).fork()).ldelim(), null != e.RedPocket && e.hasOwnProperty("RedPocket") && t.uint32(257).double(e.RedPocket), null != e.JackPot && e.hasOwnProperty("JackPot") && t.uint32(265).double(e.JackPot), null != e.RedPocketToolIds && e.hasOwnProperty("RedPocketToolIds") && t.uint32(274).string(e.RedPocketToolIds), null != e.RedPocketBackpackIds && e.hasOwnProperty("RedPocketBackpackIds") && t.uint32(282).string(e.RedPocketBackpackIds), null != e.Bounty && e.hasOwnProperty("Bounty") && t.uint32(289).double(e.Bounty), null != e.Wins && e.hasOwnProperty("Wins") && t.uint32(297).double(e.Wins), null != e.JoinStatus && e.hasOwnProperty("JoinStatus") && t.uint32(304).int32(e.JoinStatus), null != e.RedPocketIds && e.hasOwnProperty("RedPocketIds") && t.uint32(314).string(e.RedPocketIds), null != e.IsMultiflight && e.hasOwnProperty("IsMultiflight") && t.uint32(320).bool(e.IsMultiflight), null != e.UseFreeTicket && e.hasOwnProperty("UseFreeTicket") && t.uint32(328).bool(e.UseFreeTicket), null != e.UseSatelliteTicket && e.hasOwnProperty("UseSatelliteTicket") && t.uint32(336).bool(e.UseSatelliteTicket), null != e.NameI18N && e.hasOwnProperty("NameI18N") && t.uint32(346).string(e.NameI18N), null != e.IsBl && e.hasOwnProperty("IsBl") && t.uint32(352).bool(e.IsBl), null != e.IsPkw && e.hasOwnProperty("IsPkw") && t.uint32(360).bool(e.IsPkw), null != e.IsWpk && e.hasOwnProperty("IsWpk") && t.uint32(368).bool(e.IsWpk), null != e.DisplayCurrency && e.hasOwnProperty("DisplayCurrency") && t.uint32(378).string(e.DisplayCurrency), null != e.ExchangeRate && e.hasOwnProperty("ExchangeRate") && t.uint32(385).double(e.ExchangeRate), null != e.CelebrityHunt && e.hasOwnProperty("CelebrityHunt") && t.uint32(393).double(e.CelebrityHunt), null != e.ThinkTime && e.hasOwnProperty("ThinkTime") && t.uint32(400).int32(e.ThinkTime), null != e.RegGoldType && e.hasOwnProperty("RegGoldType") && t.uint32(408).int32(e.RegGoldType), null != e.IsWpto && e.hasOwnProperty("IsWpto") && t.uint32(416).bool(e.IsWpto), null != e.ToolPlatForm && e.hasOwnProperty("ToolPlatForm") && t.uint32(424).int32(e.ToolPlatForm), null != e.Day2 && e.hasOwnProperty("Day2") && t.uint32(432).bool(e.Day2), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.GameResult; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.GameMode = e.uint32();
                            break;
                        case 3:
                            o.TypeId = e.uint32();
                            break;
                        case 4:
                            o.LevelId = e.uint32();
                            break;
                        case 5:
                            o.RoomId = e.uint32();
                            break;
                        case 6:
                            o.SectionId = e.uint32();
                            break;
                        case 7:
                            o.TournamentId = e.uint32();
                            break;
                        case 8:
                            o.TournamentMode = e.uint32();
                            break;
                        case 9:
                            o.IsAofSng = e.bool();
                            break;
                        case 10:
                            o.UserId = e.uint32();
                            break;
                        case 11:
                            o.Name = e.string();
                            break;
                        case 12:
                            o.NumPlayers = e.uint32();
                            break;
                        case 13:
                            o.PPBasePot = e.double();
                            break;
                        case 14:
                            o.TotalFee = e.double();
                            break;
                        case 15:
                            o.CommissionFee = e.double();
                            break;
                        case 16:
                            o.EndTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 17:
                            o.PrizeMoney = e.double();
                            break;
                        case 18:
                            o.PrizeTool = e.uint32();
                            break;
                        case 19:
                            o.Rank = e.int32();
                            break;
                        case 20:
                            o.GameTimeSec = e.uint32();
                            break;
                        case 21:
                            o.BuyCount = e.uint32();
                            break;
                        case 22:
                            o.PlayerTakeIn = e.double();
                            break;
                        case 23:
                            o.TotalTakeIn = e.double();
                            break;
                        case 24:
                            o.PlatformCommission = e.double();
                            break;
                        case 25:
                            o.AssoCommission = e.double();
                            break;
                        case 26:
                            o.TotalRounds = e.uint32();
                            break;
                        case 27:
                            o.PlayOnJoint = e.uint32();
                            break;
                        case 28:
                            o.TotalGamePot = e.double();
                            break;
                        case 29:
                            o.RoomMode = e.uint32();
                            break;
                        case 30:
                            o.LevelStartTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 31:
                            o.LevelEndTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 32:
                            o.RedPocket = e.double();
                            break;
                        case 33:
                            o.JackPot = e.double();
                            break;
                        case 34:
                            o.RedPocketToolIds = e.string();
                            break;
                        case 35:
                            o.RedPocketBackpackIds = e.string();
                            break;
                        case 36:
                            o.Bounty = e.double();
                            break;
                        case 37:
                            o.Wins = e.double();
                            break;
                        case 38:
                            o.JoinStatus = e.int32();
                            break;
                        case 39:
                            o.RedPocketIds = e.string();
                            break;
                        case 40:
                            o.IsMultiflight = e.bool();
                            break;
                        case 41:
                            o.UseFreeTicket = e.bool();
                            break;
                        case 42:
                            o.UseSatelliteTicket = e.bool();
                            break;
                        case 43:
                            o.NameI18N = e.string();
                            break;
                        case 44:
                            o.IsBl = e.bool();
                            break;
                        case 45:
                            o.IsPkw = e.bool();
                            break;
                        case 46:
                            o.IsWpk = e.bool();
                            break;
                        case 47:
                            o.DisplayCurrency = e.string();
                            break;
                        case 48:
                            o.ExchangeRate = e.double();
                            break;
                        case 49:
                            o.CelebrityHunt = e.double();
                            break;
                        case 50:
                            o.ThinkTime = e.int32();
                            break;
                        case 51:
                            o.RegGoldType = e.int32();
                            break;
                        case 52:
                            o.IsWpto = e.bool();
                            break;
                        case 53:
                            o.ToolPlatForm = e.int32();
                            break;
                        case 54:
                            o.Day2 = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Results_Response = function() {
            function e(e) {
                if (this.GameResults = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Results_Response", e.prototype.ErrorCode = 0, e.prototype.GameResults = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.GameResults && e.GameResults.length)
                    for (var n = 0; n < e.GameResults.length; ++n) k.commonProto.GameResult.encode(e.GameResults[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_Results_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.GameResults && o.GameResults.length || (o.GameResults = []), o.GameResults.push(k.commonProto.GameResult.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Result_Detail_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Result_Detail_Request", e.prototype.GameResultId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.GameResultId && e.hasOwnProperty("GameResultId") && t.uint32(8).uint32(e.GameResultId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_Result_Detail_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.GameResultId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Result_Detail_List_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Result_Detail_List_Request", e.prototype.GameResultId = 0, e.prototype.offset = 0, e.prototype.limit = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.GameResultId && e.hasOwnProperty("GameResultId") && t.uint32(8).uint32(e.GameResultId), null != e.offset && e.hasOwnProperty("offset") && t.uint32(16).uint32(e.offset), null != e.limit && e.hasOwnProperty("limit") && t.uint32(24).uint32(e.limit), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_Result_Detail_List_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.GameResultId = e.uint32();
                            break;
                        case 2:
                            o.offset = e.uint32();
                            break;
                        case 3:
                            o.limit = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Result_Detail_List_Response = function() {
            function e(e) {
                if (this.PlayerDetails = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Result_Detail_List_Response", e.prototype.ErrorCode = 0, e.prototype.PlayerDetails = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.PlayerDetails && e.PlayerDetails.length)
                    for (var n = 0; n < e.PlayerDetails.length; ++n) k.commonProto.PlayerResultDetail.encode(e.PlayerDetails[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_Result_Detail_List_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.PlayerDetails && o.PlayerDetails.length || (o.PlayerDetails = []), o.PlayerDetails.push(k.commonProto.PlayerResultDetail.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Result_Detail_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Result_Detail_Response", e.prototype.ErrorCode = 0, e.prototype.GameResultDetail = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.GameResultDetail && e.hasOwnProperty("GameResultDetail") && k.commonProto.GameResultDetail.encode(e.GameResultDetail, t.uint32(18).fork()).ldelim(), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_Result_Detail_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.GameResultDetail = k.commonProto.GameResultDetail.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Result_Rounds_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Result_Rounds_Request", e.prototype.GameResultId = 0, e.prototype.offset = 0, e.prototype.limit = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.GameResultId && e.hasOwnProperty("GameResultId") && t.uint32(8).uint32(e.GameResultId), null != e.offset && e.hasOwnProperty("offset") && t.uint32(16).uint32(e.offset), null != e.limit && e.hasOwnProperty("limit") && t.uint32(24).uint32(e.limit), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_Result_Rounds_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.GameResultId = e.uint32();
                            break;
                        case 2:
                            o.offset = e.uint32();
                            break;
                        case 3:
                            o.limit = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Result_Rounds_By_MttId_UserId_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Result_Rounds_By_MttId_UserId_Request", e.prototype.UserId = 0, e.prototype.MttId = 0, e.prototype.offset = 0, e.prototype.limit = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), null != e.MttId && e.hasOwnProperty("MttId") && t.uint32(16).uint32(e.MttId), null != e.offset && e.hasOwnProperty("offset") && t.uint32(24).uint32(e.offset), null != e.limit && e.hasOwnProperty("limit") && t.uint32(32).uint32(e.limit), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_Result_Rounds_By_MttId_UserId_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        case 2:
                            o.MttId = e.uint32();
                            break;
                        case 3:
                            o.offset = e.uint32();
                            break;
                        case 4:
                            o.limit = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Result_Rounds_Response = function() {
            function e(e) {
                if (this.GameDetailRounds = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Result_Rounds_Response", e.prototype.ErrorCode = 0, e.prototype.GameName = "", e.prototype.EndTime = null, e.prototype.GameDetailRounds = b.emptyArray, e.prototype.TotalRounds = 0, e.prototype.GameNameI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.GameName && e.hasOwnProperty("GameName") && t.uint32(18).string(e.GameName), null != e.EndTime && e.hasOwnProperty("EndTime") && k.google.protobuf.Timestamp.encode(e.EndTime, t.uint32(26).fork()).ldelim(), null != e.GameDetailRounds && e.GameDetailRounds.length)
                    for (var n = 0; n < e.GameDetailRounds.length; ++n) k.commonProto.GameDetailRound.encode(e.GameDetailRounds[n], t.uint32(34).fork()).ldelim();
                return null != e.TotalRounds && e.hasOwnProperty("TotalRounds") && t.uint32(40).uint32(e.TotalRounds), null != e.GameNameI18N && e.hasOwnProperty("GameNameI18N") && t.uint32(50).string(e.GameNameI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_Result_Rounds_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.GameName = e.string();
                            break;
                        case 3:
                            o.EndTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 4:
                            o.GameDetailRounds && o.GameDetailRounds.length || (o.GameDetailRounds = []), o.GameDetailRounds.push(k.commonProto.GameDetailRound.decode(e, e.uint32()));
                            break;
                        case 5:
                            o.TotalRounds = e.uint32();
                            break;
                        case 6:
                            o.GameNameI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.GameResultDetail = function() {
            function e(e) {
                if (this.PlayerDetails = [], this.RedPocketToolNames = [], this.RedPocketToolNamesI18N = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "GameResultDetail", e.prototype.TypeId = 0, e.prototype.GameMode = 0, e.prototype.LevelId = 0, e.prototype.RoomId = 0, e.prototype.TournamentId = 0, e.prototype.TournamentMode = 0, e.prototype.Name = "", e.prototype.EndTime = null, e.prototype.GameTimeSec = 0, e.prototype.PlayerCount = 0, e.prototype.JoinCount = 0, e.prototype.GamePot = 0, e.prototype.RoundCount = 0, e.prototype.WinRoundCount = 0, e.prototype.FantasyRoundCount = 0, e.prototype.PlayerDetails = b.emptyArray, e.prototype.TotalBuyMoney = 0, e.prototype.RedPocket = 0, e.prototype.JackPot = 0, e.prototype.RedPocketToolIds = "", e.prototype.RedPocketBackpackIds = "", e.prototype.RedPocketToolNames = b.emptyArray, e.prototype.SelfDetail = null, e.prototype.RedPocketIds = "", e.prototype.NameI18N = "", e.prototype.RedPocketToolNamesI18N = b.emptyArray, e.prototype.DisplayCurrency = "", e.prototype.ExchangeRate = 0, e.prototype.IsBlOnly = !1, e.prototype.RegGoldType = 0, e.prototype.RedPocket_USD = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.TypeId && e.hasOwnProperty("TypeId") && t.uint32(8).uint32(e.TypeId), null != e.GameMode && e.hasOwnProperty("GameMode") && t.uint32(16).uint32(e.GameMode), null != e.LevelId && e.hasOwnProperty("LevelId") && t.uint32(24).uint32(e.LevelId), null != e.RoomId && e.hasOwnProperty("RoomId") && t.uint32(32).uint32(e.RoomId), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(40).uint32(e.TournamentId), null != e.TournamentMode && e.hasOwnProperty("TournamentMode") && t.uint32(48).uint32(e.TournamentMode), null != e.Name && e.hasOwnProperty("Name") && t.uint32(58).string(e.Name), null != e.EndTime && e.hasOwnProperty("EndTime") && k.google.protobuf.Timestamp.encode(e.EndTime, t.uint32(66).fork()).ldelim(), null != e.GameTimeSec && e.hasOwnProperty("GameTimeSec") && t.uint32(72).uint32(e.GameTimeSec), null != e.PlayerCount && e.hasOwnProperty("PlayerCount") && t.uint32(80).uint32(e.PlayerCount), null != e.JoinCount && e.hasOwnProperty("JoinCount") && t.uint32(88).uint32(e.JoinCount), null != e.GamePot && e.hasOwnProperty("GamePot") && t.uint32(97).double(e.GamePot), null != e.RoundCount && e.hasOwnProperty("RoundCount") && t.uint32(104).uint32(e.RoundCount), null != e.WinRoundCount && e.hasOwnProperty("WinRoundCount") && t.uint32(112).uint32(e.WinRoundCount), null != e.FantasyRoundCount && e.hasOwnProperty("FantasyRoundCount") && t.uint32(120).uint32(e.FantasyRoundCount), null != e.PlayerDetails && e.PlayerDetails.length)
                    for (var n = 0; n < e.PlayerDetails.length; ++n) k.commonProto.PlayerResultDetail.encode(e.PlayerDetails[n], t.uint32(130).fork()).ldelim();
                if (null != e.TotalBuyMoney && e.hasOwnProperty("TotalBuyMoney") && t.uint32(137).double(e.TotalBuyMoney), null != e.RedPocket && e.hasOwnProperty("RedPocket") && t.uint32(145).double(e.RedPocket), null != e.JackPot && e.hasOwnProperty("JackPot") && t.uint32(153).double(e.JackPot), null != e.RedPocketToolIds && e.hasOwnProperty("RedPocketToolIds") && t.uint32(162).string(e.RedPocketToolIds), null != e.RedPocketBackpackIds && e.hasOwnProperty("RedPocketBackpackIds") && t.uint32(170).string(e.RedPocketBackpackIds), null != e.RedPocketToolNames && e.RedPocketToolNames.length)
                    for (n = 0; n < e.RedPocketToolNames.length; ++n) t.uint32(178).string(e.RedPocketToolNames[n]);
                if (null != e.SelfDetail && e.hasOwnProperty("SelfDetail") && k.commonProto.PlayerResultDetail.encode(e.SelfDetail, t.uint32(186).fork()).ldelim(), null != e.RedPocketIds && e.hasOwnProperty("RedPocketIds") && t.uint32(194).string(e.RedPocketIds), null != e.NameI18N && e.hasOwnProperty("NameI18N") && t.uint32(202).string(e.NameI18N), null != e.RedPocketToolNamesI18N && e.RedPocketToolNamesI18N.length)
                    for (n = 0; n < e.RedPocketToolNamesI18N.length; ++n) t.uint32(210).string(e.RedPocketToolNamesI18N[n]);
                return null != e.DisplayCurrency && e.hasOwnProperty("DisplayCurrency") && t.uint32(218).string(e.DisplayCurrency), null != e.ExchangeRate && e.hasOwnProperty("ExchangeRate") && t.uint32(225).double(e.ExchangeRate), null != e.IsBlOnly && e.hasOwnProperty("IsBlOnly") && t.uint32(232).bool(e.IsBlOnly), null != e.RegGoldType && e.hasOwnProperty("RegGoldType") && t.uint32(240).int32(e.RegGoldType), null != e.RedPocket_USD && e.hasOwnProperty("RedPocket_USD") && t.uint32(249).double(e.RedPocket_USD), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.GameResultDetail; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TypeId = e.uint32();
                            break;
                        case 2:
                            o.GameMode = e.uint32();
                            break;
                        case 3:
                            o.LevelId = e.uint32();
                            break;
                        case 4:
                            o.RoomId = e.uint32();
                            break;
                        case 5:
                            o.TournamentId = e.uint32();
                            break;
                        case 6:
                            o.TournamentMode = e.uint32();
                            break;
                        case 7:
                            o.Name = e.string();
                            break;
                        case 8:
                            o.EndTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 9:
                            o.GameTimeSec = e.uint32();
                            break;
                        case 10:
                            o.PlayerCount = e.uint32();
                            break;
                        case 11:
                            o.JoinCount = e.uint32();
                            break;
                        case 12:
                            o.GamePot = e.double();
                            break;
                        case 13:
                            o.RoundCount = e.uint32();
                            break;
                        case 14:
                            o.WinRoundCount = e.uint32();
                            break;
                        case 15:
                            o.FantasyRoundCount = e.uint32();
                            break;
                        case 16:
                            o.PlayerDetails && o.PlayerDetails.length || (o.PlayerDetails = []), o.PlayerDetails.push(k.commonProto.PlayerResultDetail.decode(e, e.uint32()));
                            break;
                        case 17:
                            o.TotalBuyMoney = e.double();
                            break;
                        case 18:
                            o.RedPocket = e.double();
                            break;
                        case 19:
                            o.JackPot = e.double();
                            break;
                        case 20:
                            o.RedPocketToolIds = e.string();
                            break;
                        case 21:
                            o.RedPocketBackpackIds = e.string();
                            break;
                        case 22:
                            o.RedPocketToolNames && o.RedPocketToolNames.length || (o.RedPocketToolNames = []), o.RedPocketToolNames.push(e.string());
                            break;
                        case 23:
                            o.SelfDetail = k.commonProto.PlayerResultDetail.decode(e, e.uint32());
                            break;
                        case 24:
                            o.RedPocketIds = e.string();
                            break;
                        case 25:
                            o.NameI18N = e.string();
                            break;
                        case 26:
                            o.RedPocketToolNamesI18N && o.RedPocketToolNamesI18N.length || (o.RedPocketToolNamesI18N = []), o.RedPocketToolNamesI18N.push(e.string());
                            break;
                        case 27:
                            o.DisplayCurrency = e.string();
                            break;
                        case 28:
                            o.ExchangeRate = e.double();
                            break;
                        case 29:
                            o.IsBlOnly = e.bool();
                            break;
                        case 30:
                            o.RegGoldType = e.int32();
                            break;
                        case 31:
                            o.RedPocket_USD = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.PlayerResultDetail = function() {
            function e(e) {
                if (this.RecordPaths = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "PlayerResultDetail", e.prototype.UserId = 0, e.prototype.Nickname = "", e.prototype.ResultMoney = 0, e.prototype.PrizeToolId = 0, e.prototype.Rank = 0, e.prototype.JoinStatus = 0, e.prototype.Wins = 0, e.prototype.Bounty = 0, e.prototype.RecordPaths = b.emptyArray, e.prototype.Avatar = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), null != e.Nickname && e.hasOwnProperty("Nickname") && t.uint32(18).string(e.Nickname), null != e.ResultMoney && e.hasOwnProperty("ResultMoney") && t.uint32(25).double(e.ResultMoney), null != e.PrizeToolId && e.hasOwnProperty("PrizeToolId") && t.uint32(32).uint32(e.PrizeToolId), null != e.Rank && e.hasOwnProperty("Rank") && t.uint32(40).int32(e.Rank), null != e.JoinStatus && e.hasOwnProperty("JoinStatus") && t.uint32(48).int32(e.JoinStatus), null != e.Wins && e.hasOwnProperty("Wins") && t.uint32(57).double(e.Wins), null != e.Bounty && e.hasOwnProperty("Bounty") && t.uint32(65).double(e.Bounty), null != e.RecordPaths && e.RecordPaths.length)
                    for (var n = 0; n < e.RecordPaths.length; ++n) t.uint32(74).string(e.RecordPaths[n]);
                return null != e.Avatar && e.hasOwnProperty("Avatar") && t.uint32(82).string(e.Avatar), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.PlayerResultDetail; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        case 2:
                            o.Nickname = e.string();
                            break;
                        case 3:
                            o.ResultMoney = e.double();
                            break;
                        case 4:
                            o.PrizeToolId = e.uint32();
                            break;
                        case 5:
                            o.Rank = e.int32();
                            break;
                        case 6:
                            o.JoinStatus = e.int32();
                            break;
                        case 7:
                            o.Wins = e.double();
                            break;
                        case 8:
                            o.Bounty = e.double();
                            break;
                        case 9:
                            o.RecordPaths && o.RecordPaths.length || (o.RecordPaths = []), o.RecordPaths.push(e.string());
                            break;
                        case 10:
                            o.Avatar = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.GameDetailRound = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "GameDetailRound", e.prototype.GameRoundData = b.newBuffer([]), e.prototype.UserFavouriteRoundId = 0, e.prototype.RecordPath = "", e.prototype.Name = "", e.prototype.EndTime = null, e.prototype.GameMode = 0, e.prototype.NameI18N = "", e.prototype.RecordPathId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.GameRoundData && e.hasOwnProperty("GameRoundData") && t.uint32(10).bytes(e.GameRoundData), null != e.UserFavouriteRoundId && e.hasOwnProperty("UserFavouriteRoundId") && t.uint32(16).uint32(e.UserFavouriteRoundId), null != e.RecordPath && e.hasOwnProperty("RecordPath") && t.uint32(26).string(e.RecordPath), null != e.Name && e.hasOwnProperty("Name") && t.uint32(34).string(e.Name), null != e.EndTime && e.hasOwnProperty("EndTime") && k.google.protobuf.Timestamp.encode(e.EndTime, t.uint32(42).fork()).ldelim(), null != e.GameMode && e.hasOwnProperty("GameMode") && t.uint32(48).uint32(e.GameMode), null != e.NameI18N && e.hasOwnProperty("NameI18N") && t.uint32(58).string(e.NameI18N), null != e.RecordPathId && e.hasOwnProperty("RecordPathId") && t.uint32(64).uint32(e.RecordPathId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.GameDetailRound; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.GameRoundData = e.bytes();
                            break;
                        case 2:
                            o.UserFavouriteRoundId = e.uint32();
                            break;
                        case 3:
                            o.RecordPath = e.string();
                            break;
                        case 4:
                            o.Name = e.string();
                            break;
                        case 5:
                            o.EndTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 6:
                            o.GameMode = e.uint32();
                            break;
                        case 7:
                            o.NameI18N = e.string();
                            break;
                        case 8:
                            o.RecordPathId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Add_User_Favourite_Round_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Add_User_Favourite_Round_Request", e.prototype.GameResultId = 0, e.prototype.RecordPathId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.GameResultId && e.hasOwnProperty("GameResultId") && t.uint32(8).uint32(e.GameResultId), null != e.RecordPathId && e.hasOwnProperty("RecordPathId") && t.uint32(16).uint32(e.RecordPathId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Add_User_Favourite_Round_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.GameResultId = e.uint32();
                            break;
                        case 2:
                            o.RecordPathId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Add_User_Favourite_Round_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Add_User_Favourite_Round_Response", e.prototype.ErrorCode = 0, e.prototype.UserFavouriteRoundId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.UserFavouriteRoundId && e.hasOwnProperty("UserFavouriteRoundId") && t.uint32(16).uint32(e.UserFavouriteRoundId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Add_User_Favourite_Round_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.UserFavouriteRoundId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Remove_User_Favourite_Round_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Remove_User_Favourite_Round_Request", e.prototype.UserFavouriteRoundId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserFavouriteRoundId && e.hasOwnProperty("UserFavouriteRoundId") && t.uint32(8).uint32(e.UserFavouriteRoundId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Remove_User_Favourite_Round_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserFavouriteRoundId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Remove_User_Favourite_Round_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Remove_User_Favourite_Round_Response", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Remove_User_Favourite_Round_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.List_User_Favourite_Rounds_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "List_User_Favourite_Rounds_Request", e.prototype.UserId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.List_User_Favourite_Rounds_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.List_User_Favourite_Rounds_Response = function() {
            function e(e) {
                if (this.GameDetailRounds = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "List_User_Favourite_Rounds_Response", e.prototype.ErrorCode = 0, e.prototype.GameDetailRounds = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.GameDetailRounds && e.GameDetailRounds.length)
                    for (var n = 0; n < e.GameDetailRounds.length; ++n) k.commonProto.GameDetailRound.encode(e.GameDetailRounds[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.List_User_Favourite_Rounds_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.GameDetailRounds && o.GameDetailRounds.length || (o.GameDetailRounds = []), o.GameDetailRounds.push(k.commonProto.GameDetailRound.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.List_User_Gifts_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "List_User_Gifts_Request", e.prototype.FromUserId = 0, e.prototype.Offset = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.FromUserId && e.hasOwnProperty("FromUserId") && t.uint32(8).uint32(e.FromUserId), null != e.Offset && e.hasOwnProperty("Offset") && t.uint32(16).uint32(e.Offset), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.List_User_Gifts_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.FromUserId = e.uint32();
                            break;
                        case 2:
                            o.Offset = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.List_User_Gifts_Response = function() {
            function e(e) {
                if (this.Gifts = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "List_User_Gifts_Response", e.prototype.ErrorCode = 0, e.prototype.Gifts = b.emptyArray, e.prototype.TotalGifts = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.Gifts && e.Gifts.length)
                    for (var n = 0; n < e.Gifts.length; ++n) k.commonProto.Gift_Info.encode(e.Gifts[n], t.uint32(18).fork()).ldelim();
                return null != e.TotalGifts && e.hasOwnProperty("TotalGifts") && t.uint32(24).uint32(e.TotalGifts), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.List_User_Gifts_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.Gifts && o.Gifts.length || (o.Gifts = []), o.Gifts.push(k.commonProto.Gift_Info.decode(e, e.uint32()));
                            break;
                        case 3:
                            o.TotalGifts = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Gift_Info = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Gift_Info", e.prototype.Gift = null, e.prototype.ToUserNickname = "", e.prototype.GiftToolName = "", e.prototype.GiftToolImgUrl = "", e.prototype.ToUserAvatarUrl = "", e.prototype.GiftToolNameI18N = "", e.prototype.GiftToolImgUrlI18N = "", e.prototype.ToUserForeignId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Gift && e.hasOwnProperty("Gift") && k.modelProto.Gift.encode(e.Gift, t.uint32(10).fork()).ldelim(), null != e.ToUserNickname && e.hasOwnProperty("ToUserNickname") && t.uint32(18).string(e.ToUserNickname), null != e.GiftToolName && e.hasOwnProperty("GiftToolName") && t.uint32(26).string(e.GiftToolName), null != e.GiftToolImgUrl && e.hasOwnProperty("GiftToolImgUrl") && t.uint32(34).string(e.GiftToolImgUrl), null != e.ToUserAvatarUrl && e.hasOwnProperty("ToUserAvatarUrl") && t.uint32(42).string(e.ToUserAvatarUrl), null != e.GiftToolNameI18N && e.hasOwnProperty("GiftToolNameI18N") && t.uint32(50).string(e.GiftToolNameI18N), null != e.GiftToolImgUrlI18N && e.hasOwnProperty("GiftToolImgUrlI18N") && t.uint32(58).string(e.GiftToolImgUrlI18N), null != e.ToUserForeignId && e.hasOwnProperty("ToUserForeignId") && t.uint32(64).uint32(e.ToUserForeignId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Gift_Info; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Gift = k.modelProto.Gift.decode(e, e.uint32());
                            break;
                        case 2:
                            o.ToUserNickname = e.string();
                            break;
                        case 3:
                            o.GiftToolName = e.string();
                            break;
                        case 4:
                            o.GiftToolImgUrl = e.string();
                            break;
                        case 5:
                            o.ToUserAvatarUrl = e.string();
                            break;
                        case 6:
                            o.GiftToolNameI18N = e.string();
                            break;
                        case 7:
                            o.GiftToolImgUrlI18N = e.string();
                            break;
                        case 8:
                            o.ToUserForeignId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Gift_Request = function() {
            function e(e) {
                if (this.ToolInBackpackIds = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Gift_Request", e.prototype.FromUserId = 0, e.prototype.ToUserId = 0, e.prototype.AssoId = 0, e.prototype.Coins = 0, e.prototype.ToolInBackpackIds = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.FromUserId && e.hasOwnProperty("FromUserId") && t.uint32(8).uint32(e.FromUserId), null != e.ToUserId && e.hasOwnProperty("ToUserId") && t.uint32(16).uint32(e.ToUserId), null != e.AssoId && e.hasOwnProperty("AssoId") && t.uint32(24).uint32(e.AssoId), null != e.Coins && e.hasOwnProperty("Coins") && t.uint32(33).double(e.Coins), null != e.ToolInBackpackIds && e.ToolInBackpackIds.length) {
                    t.uint32(42).fork();
                    for (var n = 0; n < e.ToolInBackpackIds.length; ++n) t.uint32(e.ToolInBackpackIds[n]);
                    t.ldelim()
                }
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Gift_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.FromUserId = e.uint32();
                            break;
                        case 2:
                            o.ToUserId = e.uint32();
                            break;
                        case 3:
                            o.AssoId = e.uint32();
                            break;
                        case 4:
                            o.Coins = e.double();
                            break;
                        case 5:
                            if (o.ToolInBackpackIds && o.ToolInBackpackIds.length || (o.ToolInBackpackIds = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.ToolInBackpackIds.push(e.uint32());
                            else o.ToolInBackpackIds.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Gift_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Gift_Response", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Gift_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.GameResultId_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "GameResultId_Request", e.prototype.uuid = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.uuid && e.hasOwnProperty("uuid") && t.uint32(10).string(e.uuid), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.GameResultId_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.uuid = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.GameResultId_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "GameResultId_Response", e.prototype.ErrorCode = 0, e.prototype.Resultid = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.Resultid && e.hasOwnProperty("Resultid") && t.uint32(16).uint32(e.Resultid), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.GameResultId_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.Resultid = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.UserJoinWorldCupGuessState = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Not_Joined"] = 0, t[e[1] = "Joined"] = 1, t[e[2] = "Disabled"] = 2, t
        }(), p.Check_User_WorldCupGuess_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Check_User_WorldCupGuess_Request", e.prototype.UserId = "", e.prototype.PlatForm = 0, e.prototype.Token = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(10).string(e.UserId), null != e.PlatForm && e.hasOwnProperty("PlatForm") && t.uint32(16).uint32(e.PlatForm), null != e.Token && e.hasOwnProperty("Token") && t.uint32(26).string(e.Token), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Check_User_WorldCupGuess_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.string();
                            break;
                        case 2:
                            o.PlatForm = e.uint32();
                            break;
                        case 3:
                            o.Token = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.WorldCupGuess_Team_Info = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "WorldCupGuess_Team_Info", e.prototype.Id = 0, e.prototype.NameHk = "", e.prototype.NameEn = "", e.prototype.NameCn = "", e.prototype.ImagePath = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.NameHk && e.hasOwnProperty("NameHk") && t.uint32(18).string(e.NameHk), null != e.NameEn && e.hasOwnProperty("NameEn") && t.uint32(26).string(e.NameEn), null != e.NameCn && e.hasOwnProperty("NameCn") && t.uint32(34).string(e.NameCn), null != e.ImagePath && e.hasOwnProperty("ImagePath") && t.uint32(42).string(e.ImagePath), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.WorldCupGuess_Team_Info; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.NameHk = e.string();
                            break;
                        case 3:
                            o.NameEn = e.string();
                            break;
                        case 4:
                            o.NameCn = e.string();
                            break;
                        case 5:
                            o.ImagePath = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Check_User_WorldCupGuess_Response = function() {
            function e(e) {
                if (this.TeamInfos = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Check_User_WorldCupGuess_Response", e.prototype.ErrorCode = 0, e.prototype.JoinStatus = 0, e.prototype.TeamInfos = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.JoinStatus && e.hasOwnProperty("JoinStatus") && t.uint32(16).int32(e.JoinStatus), null != e.TeamInfos && e.TeamInfos.length)
                    for (var n = 0; n < e.TeamInfos.length; ++n) k.commonProto.WorldCupGuess_Team_Info.encode(e.TeamInfos[n], t.uint32(26).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Check_User_WorldCupGuess_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.JoinStatus = e.int32();
                            break;
                        case 3:
                            o.TeamInfos && o.TeamInfos.length || (o.TeamInfos = []), o.TeamInfos.push(k.commonProto.WorldCupGuess_Team_Info.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Choice_WorldCupGuess_Team_Request = function() {
            function e(e) {
                if (this.TeamId = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Choice_WorldCupGuess_Team_Request", e.prototype.UserId = "", e.prototype.PlatForm = 0, e.prototype.Token = "", e.prototype.TeamId = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(10).string(e.UserId), null != e.PlatForm && e.hasOwnProperty("PlatForm") && t.uint32(16).uint32(e.PlatForm), null != e.Token && e.hasOwnProperty("Token") && t.uint32(26).string(e.Token), null != e.TeamId && e.TeamId.length) {
                    t.uint32(34).fork();
                    for (var n = 0; n < e.TeamId.length; ++n) t.uint32(e.TeamId[n]);
                    t.ldelim()
                }
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Choice_WorldCupGuess_Team_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.string();
                            break;
                        case 2:
                            o.PlatForm = e.uint32();
                            break;
                        case 3:
                            o.Token = e.string();
                            break;
                        case 4:
                            if (o.TeamId && o.TeamId.length || (o.TeamId = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.TeamId.push(e.uint32());
                            else o.TeamId.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Choice_WorldCupGuess_Team_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Choice_WorldCupGuess_Team_Response", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Choice_WorldCupGuess_Team_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.SocketMessageId = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Min"] = 0, t[e[1] = "Secure_Token_Check"] = 1, t[e[2] = "Secure_Token_Error_Response"] = 2, t[e[3] = "Ping"] = 3, t[e[4] = "Pong"] = 4, t[e[5] = "RealIp"] = 5, t[e[6] = "System_Status"] = 6, t[e[11] = "Game_Room_List"] = 11, t[e[12] = "Game_Levels_Request"] = 12, t[e[13] = "Game_Level_List"] = 13, t[e[14] = "Tool_Info_Request"] = 14, t[e[15] = "Tool_Info_Response"] = 15, t[e[16] = "Joined_Games_Request"] = 16, t[e[17] = "Joined_Games_Response"] = 17, t[e[18] = "Game_State_Request"] = 18, t[e[19] = "Game_State_Response"] = 19, t[e[600] = "Broadcast_Message_Envelope"] = 600, t[e[10005] = "User_Login_Request"] = 10005, t[e[10006] = "User_Login_Response"] = 10006, t[e[10007] = "User_Logout_Response"] = 10007, t[e[10011] = "User_Login_Frequently_Msg"] = 10011, t[e[10008] = "Legacy_Impoker_Login_Request"] = 10008, t[e[10009] = "Legacy_Impoker_Login_Response"] = 10009, t[e[10010] = "User_Banner_Event_Msg"] = 10010, t[e[10021] = "User_Info_Request"] = 10021, t[e[10022] = "User_Info_Response"] = 10022, t[e[10101] = "User_Update_Request"] = 10101, t[e[10102] = "User_Update_Response"] = 10102, t[e[10103] = "User_Nickname_Update_Request"] = 10103, t[e[10104] = "User_Nickname_Update_Response"] = 10104, t[e[10105] = "User_Update_Language_Request"] = 10105, t[e[10106] = "User_Update_Language_Response"] = 10106, t[e[10110] = "User_Info_Updated"] = 10110, t[e[10200] = "User_Notices"] = 10200, t[e[10201] = "User_Notice"] = 10201, t[e[10301] = "User_Tool_In_Backpacks_Request"] = 10301, t[e[10302] = "User_Tool_In_Backpacks_Response"] = 10302, t[e[10311] = "Tool_In_Backpack_Redeem_Request"] = 10311, t[e[10312] = "Tool_In_Backpack_Redeem_Response"] = 10312, t[e[10401] = "Tool_In_Backpack_Gift_Request"] = 10401, t[e[10402] = "Tool_In_Backpack_Gift_Response"] = 10402, t[e[10403] = "Tool_Admin_Gift_Msg"] = 10403, t[e[10501] = "User_Point_Request"] = 10501, t[e[10502] = "User_Point_Response"] = 10502, t[e[10503] = "User_Point_Tools_Set_Request"] = 10503, t[e[10504] = "User_Point_Tools_Set_Response"] = 10504, t[e[10505] = "User_Point_Tools_Change_Request"] = 10505, t[e[10506] = "User_Point_Tools_Change_Response"] = 10506, t[e[10507] = "User_Point_Tools_Change_List_Request"] = 10507, t[e[10508] = "User_Point_Tools_Change_List_Response"] = 10508, t[e[11e3] = "Transfer_From_Impoker_Request"] = 11e3, t[e[11001] = "Transfer_From_Impoker_Response"] = 11001, t[e[11101] = "Nickname_Check_Request"] = 11101, t[e[11102] = "Nickname_Check_Response"] = 11102, t[e[11201] = "Game_Results_Request"] = 11201, t[e[11202] = "Game_Results_Response"] = 11202, t[e[11203] = "Game_Result_Detail_Request"] = 11203, t[e[11204] = "Game_Result_Detail_Response"] = 11204, t[e[11205] = "Game_Result_Rounds_Request"] = 11205, t[e[11206] = "Game_Result_Rounds_Response"] = 11206, t[e[11207] = "Add_User_Favourite_Round_Request"] = 11207, t[e[11208] = "Add_User_Favourite_Round_Response"] = 11208, t[e[11209] = "Remove_User_Favourite_Round_Request"] = 11209, t[e[11210] = "Remove_User_Favourite_Round_Response"] = 11210, t[e[11211] = "List_User_Favourite_Rounds_Request"] = 11211, t[e[11212] = "List_User_Favourite_Rounds_Response"] = 11212, t[e[11221] = "List_User_Gifts_Request"] = 11221, t[e[11222] = "List_User_Gifts_Response"] = 11222, t[e[11223] = "User_Gift_Request"] = 11223, t[e[11224] = "User_Gift_Response"] = 11224, t[e[11225] = "Game_Result_Detail_List_Request"] = 11225, t[e[11226] = "Game_Result_Detail_List_Response"] = 11226, t[e[11230] = "Lottery_Info_List_Msg"] = 11230, t[e[11231] = "Lottery_Info_Del"] = 11231, t[e[11232] = "Lottery_Hit"] = 11232, t[e[11233] = "Lottery_Info_Add_Msg"] = 11233, t[e[11301] = "User_Withdraw_Password_Verification_Request"] = 11301, t[e[11302] = "User_Withdraw_Password_Verification_Response"] = 11302, t[e[11303] = "User_Withdraw_Password_Forget_Request"] = 11303, t[e[11304] = "User_Withdraw_Password_Forget_Response"] = 11304, t[e[11305] = "User_Withdraw_Password_Reset_Request"] = 11305, t[e[11306] = "User_Withdraw_Password_Reset_Response"] = 11306, t[e[11401] = "Transfer_To_Coffer_Request"] = 11401, t[e[11402] = "Transfer_To_Coffer_Response"] = 11402, t[e[11403] = "Transfer_Coffer_Log_Request"] = 11403, t[e[11404] = "Transfer_Coffer_Log_Response"] = 11404, t[e[11501] = "User_Search_Request"] = 11501, t[e[11502] = "User_Search_Response"] = 11502, t[e[20001] = "Association_Create_Request"] = 20001, t[e[20002] = "Association_Create_Response"] = 20002, t[e[20003] = "Association_Apply_Request"] = 20003, t[e[20004] = "Association_Apply_Response"] = 20004, t[e[20005] = "Association_Update_Request"] = 20005, t[e[20006] = "Association_Update_Response"] = 20006, t[e[20007] = "Association_Update_Rate_Request"] = 20007, t[e[20008] = "Association_Update_Rate_Response"] = 20008, t[e[20009] = "Association_Detail_Request"] = 20009, t[e[20010] = "Association_Detail_Response"] = 20010, t[e[20011] = "Association_Statistic_Request"] = 20011, t[e[20012] = "Association_Statistic_Response"] = 20012, t[e[20013] = "Association_Withdraw_Request"] = 20013, t[e[20014] = "Association_Withdraw_Response"] = 20014, t[e[20015] = "Association_Withdraw_Records_Request"] = 20015, t[e[20016] = "Association_Withdraw_Records_Response"] = 20016, t[e[20017] = "Association_Member_List_Request"] = 20017, t[e[20018] = "Association_Member_List_Response"] = 20018, t[e[20019] = "Association_Member_Detail_Request"] = 20019, t[e[20020] = "Association_Member_Detail_Response"] = 20020, t[e[20021] = "Association_Downline_List_Request"] = 20021, t[e[20022] = "Association_Downline_List_Response"] = 20022, t[e[20023] = "Association_Reward_Withdraw_Request"] = 20023, t[e[20024] = "Association_Reward_Withdraw_Response"] = 20024, t[e[20101] = "Association_Application_Handle_Request"] = 20101, t[e[20102] = "Association_Application_Handle_Response"] = 20102, t[e[20103] = "Association_Share_Rate_Modify_Request"] = 20103, t[e[20104] = "Association_Share_Rate_Modify_Response"] = 20104, t[e[20105] = "Association_Member_Game_Detail_Request"] = 20105, t[e[20106] = "Association_Member_Game_Detail_Response"] = 20106, t[e[20201] = "Impoker_User_Choose_Agent_Request"] = 20201, t[e[60001] = "MttEnterGameReq"] = 60001, t[e[60002] = "MttEnterGameRes"] = 60002, t[e[60101] = "BLMiniGameEnterReq"] = 60101, t[e[60102] = "BLMiniGameEnterRes"] = 60102, t[e[60201] = "BLMiniGameExitReq"] = 60201, t[e[60202] = "BLMiniGameExitRes"] = 60202, t[e[60301] = "BLMiniGamesNotTakenOutRequest"] = 60301, t[e[60302] = "BLMiniGamesNotTakenOutResponse"] = 60302, t[e[60303] = "BLMiniGameActivityRewardsRequest"] = 60303, t[e[60304] = "BLMiniGameActivityRewardsResponse"] = 60304, t[e[60305] = "BLMiniGameReceiveActivityRewardRequest"] = 60305, t[e[60306] = "BLMiniGameReceiveActivityRewardResponse"] = 60306, t[e[60307] = "BLMiniGameTakeInStatusRequest"] = 60307, t[e[60308] = "BLMiniGameTakeInStatusResponse"] = 60308, t
        }(), p.ImpokerAgentData = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "ImpokerAgentData", e.prototype.Id = 0, e.prototype.Uuid = 0, e.prototype.Nickname = "", e.prototype.AgentsCount = 0, e.prototype.UsersCount = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.Uuid && e.hasOwnProperty("Uuid") && t.uint32(16).uint32(e.Uuid), null != e.Nickname && e.hasOwnProperty("Nickname") && t.uint32(26).string(e.Nickname), null != e.AgentsCount && e.hasOwnProperty("AgentsCount") && t.uint32(32).uint32(e.AgentsCount), null != e.UsersCount && e.hasOwnProperty("UsersCount") && t.uint32(40).uint32(e.UsersCount), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.ImpokerAgentData; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.Uuid = e.uint32();
                            break;
                        case 3:
                            o.Nickname = e.string();
                            break;
                        case 4:
                            o.AgentsCount = e.uint32();
                            break;
                        case 5:
                            o.UsersCount = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Impoker_User_Choose_Agent_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Impoker_User_Choose_Agent_Request", e.prototype.UserId = 0, e.prototype.AgentId = 0, e.prototype.Password = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), null != e.AgentId && e.hasOwnProperty("AgentId") && t.uint32(16).uint32(e.AgentId), null != e.Password && e.hasOwnProperty("Password") && t.uint32(26).string(e.Password), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Impoker_User_Choose_Agent_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        case 2:
                            o.AgentId = e.uint32();
                            break;
                        case 3:
                            o.Password = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Info = function() {
            function e(e) {
                if (this.VersionHosts = {}, e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Info", e.prototype.Id = 0, e.prototype.Name = "", e.prototype.VersionHosts = b.emptyObject, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.Name && e.hasOwnProperty("Name") && t.uint32(18).string(e.Name), null != e.VersionHosts && e.hasOwnProperty("VersionHosts"))
                    for (var n = Object.keys(e.VersionHosts), o = 0; o < n.length; ++o) t.uint32(26).fork().uint32(10).string(n[o]), k.commonProto.Game_Host.encode(e.VersionHosts[n[o]], t.uint32(18).fork()).ldelim().ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n, o = void 0 === t ? e.len : e.pos + t, r = new k.commonProto.Game_Info; e.pos < o;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.Id = e.uint32();
                            break;
                        case 2:
                            r.Name = e.string();
                            break;
                        case 3:
                            e.skip().pos++, r.VersionHosts === b.emptyObject && (r.VersionHosts = {}), n = e.string(), e.pos++, r.VersionHosts[n] = k.commonProto.Game_Host.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Host = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Host", e.prototype.Host = "", e.prototype.Port = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Host && e.hasOwnProperty("Host") && t.uint32(10).string(e.Host), null != e.Port && e.hasOwnProperty("Port") && t.uint32(16).int32(e.Port), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_Host; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Host = e.string();
                            break;
                        case 2:
                            o.Port = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Rooms_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Rooms_Request", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_Rooms_Request; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Room = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Room", e.prototype.GameId = 0, e.prototype.RoomId = 0, e.prototype.Mode = 0, e.prototype.Name = "", e.prototype.MaxPlayers = 0, e.prototype.Players = 0, e.prototype.Joined = 0, e.prototype.GoldMinJoin = 0, e.prototype.GoldMinPerRound = 0, e.prototype.Level = 0, e.prototype.CloseInSecond = 0, e.prototype.NameI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.GameId && e.hasOwnProperty("GameId") && t.uint32(8).uint32(e.GameId), null != e.RoomId && e.hasOwnProperty("RoomId") && t.uint32(16).uint32(e.RoomId), null != e.Mode && e.hasOwnProperty("Mode") && t.uint32(24).uint32(e.Mode), null != e.Name && e.hasOwnProperty("Name") && t.uint32(34).string(e.Name), null != e.MaxPlayers && e.hasOwnProperty("MaxPlayers") && t.uint32(40).int32(e.MaxPlayers), null != e.Players && e.hasOwnProperty("Players") && t.uint32(48).int32(e.Players), null != e.Joined && e.hasOwnProperty("Joined") && t.uint32(56).int32(e.Joined), null != e.GoldMinJoin && e.hasOwnProperty("GoldMinJoin") && t.uint32(65).double(e.GoldMinJoin), null != e.GoldMinPerRound && e.hasOwnProperty("GoldMinPerRound") && t.uint32(73).double(e.GoldMinPerRound), null != e.Level && e.hasOwnProperty("Level") && t.uint32(80).int32(e.Level), null != e.CloseInSecond && e.hasOwnProperty("CloseInSecond") && t.uint32(88).int32(e.CloseInSecond), null != e.NameI18N && e.hasOwnProperty("NameI18N") && t.uint32(98).string(e.NameI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_Room; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.GameId = e.uint32();
                            break;
                        case 2:
                            o.RoomId = e.uint32();
                            break;
                        case 3:
                            o.Mode = e.uint32();
                            break;
                        case 4:
                            o.Name = e.string();
                            break;
                        case 5:
                            o.MaxPlayers = e.int32();
                            break;
                        case 6:
                            o.Players = e.int32();
                            break;
                        case 7:
                            o.Joined = e.int32();
                            break;
                        case 8:
                            o.GoldMinJoin = e.double();
                            break;
                        case 9:
                            o.GoldMinPerRound = e.double();
                            break;
                        case 10:
                            o.Level = e.int32();
                            break;
                        case 11:
                            o.CloseInSecond = e.int32();
                            break;
                        case 12:
                            o.NameI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Room_List = function() {
            function e(e) {
                if (this.Rooms = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Room_List", e.prototype.Rooms = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.Rooms && e.Rooms.length)
                    for (var n = 0; n < e.Rooms.length; ++n) k.commonProto.Game_Room.encode(e.Rooms[n], t.uint32(10).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_Room_List; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Rooms && o.Rooms.length || (o.Rooms = []), o.Rooms.push(k.commonProto.Game_Room.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Levels_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Levels_Request", e.prototype.ListId = 0, e.prototype.platForm = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ListId && e.hasOwnProperty("ListId") && t.uint32(8).uint32(e.ListId), null != e.platForm && e.hasOwnProperty("platForm") && t.uint32(16).int32(e.platForm), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_Levels_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ListId = e.uint32();
                            break;
                        case 2:
                            o.platForm = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.PP_Level = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "PP_Level", e.prototype.RoomId = 0, e.prototype.Mode = 0, e.prototype.Players = 0, e.prototype.Joined = 0, e.prototype.GoldMinPerPoint = 0, e.prototype.Level = 0, e.prototype.CloseInSecond = 0, e.prototype.Matching = !1, e.prototype.Label = "", e.prototype.State = 0, e.prototype.minCoin = 0, e.prototype.takeInCoin = 0, e.prototype.TimeLeftSec = 0, e.prototype.TimerStop = !1, e.prototype.Deal = !1, e.prototype.LabelI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.RoomId && e.hasOwnProperty("RoomId") && t.uint32(8).uint32(e.RoomId), null != e.Mode && e.hasOwnProperty("Mode") && t.uint32(24).uint32(e.Mode), null != e.Players && e.hasOwnProperty("Players") && t.uint32(48).int32(e.Players), null != e.Joined && e.hasOwnProperty("Joined") && t.uint32(56).int32(e.Joined), null != e.GoldMinPerPoint && e.hasOwnProperty("GoldMinPerPoint") && t.uint32(77).float(e.GoldMinPerPoint), null != e.Level && e.hasOwnProperty("Level") && t.uint32(80).int32(e.Level), null != e.CloseInSecond && e.hasOwnProperty("CloseInSecond") && t.uint32(88).int32(e.CloseInSecond), null != e.Matching && e.hasOwnProperty("Matching") && t.uint32(96).bool(e.Matching), null != e.Label && e.hasOwnProperty("Label") && t.uint32(106).string(e.Label), null != e.State && e.hasOwnProperty("State") && t.uint32(112).int32(e.State), null != e.minCoin && e.hasOwnProperty("minCoin") && t.uint32(125).float(e.minCoin), null != e.takeInCoin && e.hasOwnProperty("takeInCoin") && t.uint32(133).float(e.takeInCoin), null != e.TimeLeftSec && e.hasOwnProperty("TimeLeftSec") && t.uint32(136).int32(e.TimeLeftSec), null != e.TimerStop && e.hasOwnProperty("TimerStop") && t.uint32(144).bool(e.TimerStop), null != e.Deal && e.hasOwnProperty("Deal") && t.uint32(152).bool(e.Deal), null != e.LabelI18N && e.hasOwnProperty("LabelI18N") && t.uint32(162).string(e.LabelI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.PP_Level; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.RoomId = e.uint32();
                            break;
                        case 3:
                            o.Mode = e.uint32();
                            break;
                        case 6:
                            o.Players = e.int32();
                            break;
                        case 7:
                            o.Joined = e.int32();
                            break;
                        case 9:
                            o.GoldMinPerPoint = e.float();
                            break;
                        case 10:
                            o.Level = e.int32();
                            break;
                        case 11:
                            o.CloseInSecond = e.int32();
                            break;
                        case 12:
                            o.Matching = e.bool();
                            break;
                        case 13:
                            o.Label = e.string();
                            break;
                        case 14:
                            o.State = e.int32();
                            break;
                        case 15:
                            o.minCoin = e.float();
                            break;
                        case 16:
                            o.takeInCoin = e.float();
                            break;
                        case 17:
                            o.TimeLeftSec = e.int32();
                            break;
                        case 18:
                            o.TimerStop = e.bool();
                            break;
                        case 19:
                            o.Deal = e.bool();
                            break;
                        case 20:
                            o.LabelI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Holdem_Level = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Holdem_Level", e.prototype.Mode = 0, e.prototype.Players = 0, e.prototype.Joined = 0, e.prototype.BigBlind = 0, e.prototype.SmallBlind = 0, e.prototype.Ante = 0, e.prototype.Level = 0, e.prototype.CloseInSecond = 0, e.prototype.Matching = !1, e.prototype.Label = "", e.prototype.State = 0, e.prototype.TimeLeftSec = 0, e.prototype.TimerStop = !1, e.prototype.LabelI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Mode && e.hasOwnProperty("Mode") && t.uint32(24).uint32(e.Mode), null != e.Players && e.hasOwnProperty("Players") && t.uint32(48).int32(e.Players), null != e.Joined && e.hasOwnProperty("Joined") && t.uint32(56).int32(e.Joined), null != e.BigBlind && e.hasOwnProperty("BigBlind") && t.uint32(77).float(e.BigBlind), null != e.SmallBlind && e.hasOwnProperty("SmallBlind") && t.uint32(85).float(e.SmallBlind), null != e.Ante && e.hasOwnProperty("Ante") && t.uint32(93).float(e.Ante), null != e.Level && e.hasOwnProperty("Level") && t.uint32(96).int32(e.Level), null != e.CloseInSecond && e.hasOwnProperty("CloseInSecond") && t.uint32(104).int32(e.CloseInSecond), null != e.Matching && e.hasOwnProperty("Matching") && t.uint32(112).bool(e.Matching), null != e.Label && e.hasOwnProperty("Label") && t.uint32(122).string(e.Label), null != e.State && e.hasOwnProperty("State") && t.uint32(128).int32(e.State), null != e.TimeLeftSec && e.hasOwnProperty("TimeLeftSec") && t.uint32(136).int32(e.TimeLeftSec), null != e.TimerStop && e.hasOwnProperty("TimerStop") && t.uint32(144).bool(e.TimerStop), null != e.LabelI18N && e.hasOwnProperty("LabelI18N") && t.uint32(154).string(e.LabelI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Holdem_Level; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 3:
                            o.Mode = e.uint32();
                            break;
                        case 6:
                            o.Players = e.int32();
                            break;
                        case 7:
                            o.Joined = e.int32();
                            break;
                        case 9:
                            o.BigBlind = e.float();
                            break;
                        case 10:
                            o.SmallBlind = e.float();
                            break;
                        case 11:
                            o.Ante = e.float();
                            break;
                        case 12:
                            o.Level = e.int32();
                            break;
                        case 13:
                            o.CloseInSecond = e.int32();
                            break;
                        case 14:
                            o.Matching = e.bool();
                            break;
                        case 15:
                            o.Label = e.string();
                            break;
                        case 16:
                            o.State = e.int32();
                            break;
                        case 17:
                            o.TimeLeftSec = e.int32();
                            break;
                        case 18:
                            o.TimerStop = e.bool();
                            break;
                        case 19:
                            o.LabelI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_State_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_State_Request", e.prototype.CategoryId = 0, e.prototype.GameId = 0, e.prototype.Uuid = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.CategoryId && e.hasOwnProperty("CategoryId") && t.uint32(8).int32(e.CategoryId), null != e.GameId && e.hasOwnProperty("GameId") && t.uint32(16).uint32(e.GameId), null != e.Uuid && e.hasOwnProperty("Uuid") && t.uint32(26).string(e.Uuid), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_State_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.CategoryId = e.int32();
                            break;
                        case 2:
                            o.GameId = e.uint32();
                            break;
                        case 3:
                            o.Uuid = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_State_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_State_Response", e.prototype.State = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.State && e.hasOwnProperty("State") && t.uint32(8).int32(e.State), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_State_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.State = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttTournament = function() {
            function e(e) {
                if (this.OpenGroupId = [], this.CurrencyRate = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttTournament", e.prototype.Detail = null, e.prototype.RegisteredCount = 0, e.prototype.JoinedCount = 0, e.prototype.GamePool = 0, e.prototype.TimeLeftSec = 0, e.prototype.TimerStop = !1, e.prototype.GameMode = 0, e.prototype.IsCardsShown = !1, e.prototype.IsCelebrityBroadcast = !1, e.prototype.OpenGroupId = b.emptyArray, e.prototype.DisplayCurrency = "", e.prototype.CurrencyRate = b.emptyArray, e.prototype.Duration = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.prototype.IsPrivate = !1, e.prototype.BountyPool = 0, e.prototype.Festival = !1, e.prototype.WPTDailyAsia = !1, e.prototype.DailyPrime = !1, e.prototype.BountyRumble = !1, e.prototype.OneShot = !1, e.prototype.HyperDash = !1, e.prototype.WeeklyGoldenBounty = !1, e.prototype.WPTMysteryMillion = !1, e.prototype.CrazyFreeroll = !1, e.prototype.WPTLive = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.Detail && e.hasOwnProperty("Detail") && k.modelProto.MttTournament.encode(e.Detail, t.uint32(10).fork()).ldelim(), null != e.RegisteredCount && e.hasOwnProperty("RegisteredCount") && t.uint32(16).int32(e.RegisteredCount), null != e.JoinedCount && e.hasOwnProperty("JoinedCount") && t.uint32(24).int32(e.JoinedCount), null != e.GamePool && e.hasOwnProperty("GamePool") && t.uint32(33).double(e.GamePool), null != e.TimeLeftSec && e.hasOwnProperty("TimeLeftSec") && t.uint32(40).int32(e.TimeLeftSec), null != e.TimerStop && e.hasOwnProperty("TimerStop") && t.uint32(48).bool(e.TimerStop), null != e.GameMode && e.hasOwnProperty("GameMode") && t.uint32(56).uint32(e.GameMode), null != e.IsCardsShown && e.hasOwnProperty("IsCardsShown") && t.uint32(64).bool(e.IsCardsShown), null != e.IsCelebrityBroadcast && e.hasOwnProperty("IsCelebrityBroadcast") && t.uint32(72).bool(e.IsCelebrityBroadcast), null != e.OpenGroupId && e.OpenGroupId.length) {
                    t.uint32(82).fork();
                    for (var n = 0; n < e.OpenGroupId.length; ++n) t.uint32(e.OpenGroupId[n]);
                    t.ldelim()
                }
                if (null != e.DisplayCurrency && e.hasOwnProperty("DisplayCurrency") && t.uint32(90).string(e.DisplayCurrency), null != e.CurrencyRate && e.CurrencyRate.length)
                    for (n = 0; n < e.CurrencyRate.length; ++n) k.commonProto.CurrencyRate.encode(e.CurrencyRate[n], t.uint32(98).fork()).ldelim();
                return null != e.Duration && e.hasOwnProperty("Duration") && t.uint32(104).int64(e.Duration), null != e.IsPrivate && e.hasOwnProperty("IsPrivate") && t.uint32(112).bool(e.IsPrivate), null != e.BountyPool && e.hasOwnProperty("BountyPool") && t.uint32(121).double(e.BountyPool), null != e.Festival && e.hasOwnProperty("Festival") && t.uint32(128).bool(e.Festival), null != e.WPTDailyAsia && e.hasOwnProperty("WPTDailyAsia") && t.uint32(136).bool(e.WPTDailyAsia), null != e.DailyPrime && e.hasOwnProperty("DailyPrime") && t.uint32(144).bool(e.DailyPrime), null != e.BountyRumble && e.hasOwnProperty("BountyRumble") && t.uint32(152).bool(e.BountyRumble), null != e.OneShot && e.hasOwnProperty("OneShot") && t.uint32(160).bool(e.OneShot), null != e.HyperDash && e.hasOwnProperty("HyperDash") && t.uint32(168).bool(e.HyperDash), null != e.WeeklyGoldenBounty && e.hasOwnProperty("WeeklyGoldenBounty") && t.uint32(176).bool(e.WeeklyGoldenBounty), null != e.WPTMysteryMillion && e.hasOwnProperty("WPTMysteryMillion") && t.uint32(184).bool(e.WPTMysteryMillion), null != e.CrazyFreeroll && e.hasOwnProperty("CrazyFreeroll") && t.uint32(192).bool(e.CrazyFreeroll), null != e.WPTLive && e.hasOwnProperty("WPTLive") && t.uint32(200).bool(e.WPTLive), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttTournament; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Detail = k.modelProto.MttTournament.decode(e, e.uint32());
                            break;
                        case 2:
                            o.RegisteredCount = e.int32();
                            break;
                        case 3:
                            o.JoinedCount = e.int32();
                            break;
                        case 4:
                            o.GamePool = e.double();
                            break;
                        case 5:
                            o.TimeLeftSec = e.int32();
                            break;
                        case 6:
                            o.TimerStop = e.bool();
                            break;
                        case 7:
                            o.GameMode = e.uint32();
                            break;
                        case 8:
                            o.IsCardsShown = e.bool();
                            break;
                        case 9:
                            o.IsCelebrityBroadcast = e.bool();
                            break;
                        case 10:
                            if (o.OpenGroupId && o.OpenGroupId.length || (o.OpenGroupId = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.OpenGroupId.push(e.uint32());
                            else o.OpenGroupId.push(e.uint32());
                            break;
                        case 11:
                            o.DisplayCurrency = e.string();
                            break;
                        case 12:
                            o.CurrencyRate && o.CurrencyRate.length || (o.CurrencyRate = []), o.CurrencyRate.push(k.commonProto.CurrencyRate.decode(e, e.uint32()));
                            break;
                        case 13:
                            o.Duration = e.int64();
                            break;
                        case 14:
                            o.IsPrivate = e.bool();
                            break;
                        case 15:
                            o.BountyPool = e.double();
                            break;
                        case 16:
                            o.Festival = e.bool();
                            break;
                        case 17:
                            o.WPTDailyAsia = e.bool();
                            break;
                        case 18:
                            o.DailyPrime = e.bool();
                            break;
                        case 19:
                            o.BountyRumble = e.bool();
                            break;
                        case 20:
                            o.OneShot = e.bool();
                            break;
                        case 21:
                            o.HyperDash = e.bool();
                            break;
                        case 22:
                            o.WeeklyGoldenBounty = e.bool();
                            break;
                        case 23:
                            o.WPTMysteryMillion = e.bool();
                            break;
                        case 24:
                            o.CrazyFreeroll = e.bool();
                            break;
                        case 25:
                            o.WPTLive = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.CurrencyRate = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "CurrencyRate", e.prototype.Currency = "", e.prototype.Rate = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Currency && e.hasOwnProperty("Currency") && t.uint32(10).string(e.Currency), null != e.Rate && e.hasOwnProperty("Rate") && t.uint32(17).double(e.Rate), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.CurrencyRate; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Currency = e.string();
                            break;
                        case 2:
                            o.Rate = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.SngTournament = function() {
            function e(e) {
                if (this.CurrencyRate = [], this.MultiplierList = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SngTournament", e.prototype.Detail = null, e.prototype.CurrentPlayers = 0, e.prototype.TimeLeftSec = 0, e.prototype.TimerStop = !1, e.prototype.Jackpot = 0, e.prototype.prizePool = 0, e.prototype.CurrencyRate = b.emptyArray, e.prototype.MultiplierList = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.Detail && e.hasOwnProperty("Detail") && k.modelProto.SngTournament.encode(e.Detail, t.uint32(10).fork()).ldelim(), null != e.CurrentPlayers && e.hasOwnProperty("CurrentPlayers") && t.uint32(16).uint32(e.CurrentPlayers), null != e.TimeLeftSec && e.hasOwnProperty("TimeLeftSec") && t.uint32(136).int32(e.TimeLeftSec), null != e.TimerStop && e.hasOwnProperty("TimerStop") && t.uint32(144).bool(e.TimerStop), null != e.Jackpot && e.hasOwnProperty("Jackpot") && t.uint32(153).double(e.Jackpot), null != e.prizePool && e.hasOwnProperty("prizePool") && t.uint32(161).double(e.prizePool), null != e.CurrencyRate && e.CurrencyRate.length)
                    for (var n = 0; n < e.CurrencyRate.length; ++n) k.commonProto.CurrencyRate.encode(e.CurrencyRate[n], t.uint32(170).fork()).ldelim();
                if (null != e.MultiplierList && e.MultiplierList.length) {
                    for (t.uint32(178).fork(), n = 0; n < e.MultiplierList.length; ++n) t.double(e.MultiplierList[n]);
                    t.ldelim()
                }
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.SngTournament; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Detail = k.modelProto.SngTournament.decode(e, e.uint32());
                            break;
                        case 2:
                            o.CurrentPlayers = e.uint32();
                            break;
                        case 17:
                            o.TimeLeftSec = e.int32();
                            break;
                        case 18:
                            o.TimerStop = e.bool();
                            break;
                        case 19:
                            o.Jackpot = e.double();
                            break;
                        case 20:
                            o.prizePool = e.double();
                            break;
                        case 21:
                            o.CurrencyRate && o.CurrencyRate.length || (o.CurrencyRate = []), o.CurrencyRate.push(k.commonProto.CurrencyRate.decode(e, e.uint32()));
                            break;
                        case 22:
                            if (o.MultiplierList && o.MultiplierList.length || (o.MultiplierList = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.MultiplierList.push(e.double());
                            else o.MultiplierList.push(e.double());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Level_List = function() {
            function e(e) {
                if (this.PpLevels = [], this.HoldemLevels = [], this.MttTournaments = [], this.PpRooms = [], this.SngTournaments = [], this.AofTournaments = [], this.FinalBroadcastTournaments = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Level_List", e.prototype.PpLevels = b.emptyArray, e.prototype.HoldemLevels = b.emptyArray, e.prototype.MttTournaments = b.emptyArray, e.prototype.PpRooms = b.emptyArray, e.prototype.SngTournaments = b.emptyArray, e.prototype.AofTournaments = b.emptyArray, e.prototype.PpLevelsLen = 0, e.prototype.HoldemLevelsLen = 0, e.prototype.MttTournamentsLen = 0, e.prototype.PpRoomsLen = 0, e.prototype.SngTournamentsLen = 0, e.prototype.AofTournamentsLen = 0, e.prototype.ListId = 0, e.prototype.CowboyPlayerCount = 0, e.prototype.FinalBroadcastTournaments = b.emptyArray, e.prototype.FinalBroadcastsTournamentLen = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.PpLevels && e.PpLevels.length)
                    for (var n = 0; n < e.PpLevels.length; ++n) k.commonProto.PP_Level.encode(e.PpLevels[n], t.uint32(10).fork()).ldelim();
                if (null != e.HoldemLevels && e.HoldemLevels.length)
                    for (n = 0; n < e.HoldemLevels.length; ++n) k.commonProto.Holdem_Level.encode(e.HoldemLevels[n], t.uint32(18).fork()).ldelim();
                if (null != e.MttTournaments && e.MttTournaments.length)
                    for (n = 0; n < e.MttTournaments.length; ++n) k.commonProto.MttTournament.encode(e.MttTournaments[n], t.uint32(26).fork()).ldelim();
                if (null != e.PpRooms && e.PpRooms.length)
                    for (n = 0; n < e.PpRooms.length; ++n) k.commonProto.PP_Level.encode(e.PpRooms[n], t.uint32(34).fork()).ldelim();
                if (null != e.SngTournaments && e.SngTournaments.length)
                    for (n = 0; n < e.SngTournaments.length; ++n) k.commonProto.SngTournament.encode(e.SngTournaments[n], t.uint32(42).fork()).ldelim();
                if (null != e.AofTournaments && e.AofTournaments.length)
                    for (n = 0; n < e.AofTournaments.length; ++n) k.commonProto.SngTournament.encode(e.AofTournaments[n], t.uint32(50).fork()).ldelim();
                if (null != e.PpLevelsLen && e.hasOwnProperty("PpLevelsLen") && t.uint32(56).uint32(e.PpLevelsLen), null != e.HoldemLevelsLen && e.hasOwnProperty("HoldemLevelsLen") && t.uint32(64).uint32(e.HoldemLevelsLen), null != e.MttTournamentsLen && e.hasOwnProperty("MttTournamentsLen") && t.uint32(72).uint32(e.MttTournamentsLen), null != e.PpRoomsLen && e.hasOwnProperty("PpRoomsLen") && t.uint32(80).uint32(e.PpRoomsLen), null != e.SngTournamentsLen && e.hasOwnProperty("SngTournamentsLen") && t.uint32(88).uint32(e.SngTournamentsLen), null != e.AofTournamentsLen && e.hasOwnProperty("AofTournamentsLen") && t.uint32(96).uint32(e.AofTournamentsLen), null != e.ListId && e.hasOwnProperty("ListId") && t.uint32(104).uint32(e.ListId), null != e.CowboyPlayerCount && e.hasOwnProperty("CowboyPlayerCount") && t.uint32(112).uint32(e.CowboyPlayerCount), null != e.FinalBroadcastTournaments && e.FinalBroadcastTournaments.length)
                    for (n = 0; n < e.FinalBroadcastTournaments.length; ++n) k.commonProto.MttTournament.encode(e.FinalBroadcastTournaments[n], t.uint32(122).fork()).ldelim();
                return null != e.FinalBroadcastsTournamentLen && e.hasOwnProperty("FinalBroadcastsTournamentLen") && t.uint32(128).uint32(e.FinalBroadcastsTournamentLen), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_Level_List; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.PpLevels && o.PpLevels.length || (o.PpLevels = []), o.PpLevels.push(k.commonProto.PP_Level.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.HoldemLevels && o.HoldemLevels.length || (o.HoldemLevels = []), o.HoldemLevels.push(k.commonProto.Holdem_Level.decode(e, e.uint32()));
                            break;
                        case 3:
                            o.MttTournaments && o.MttTournaments.length || (o.MttTournaments = []), o.MttTournaments.push(k.commonProto.MttTournament.decode(e, e.uint32()));
                            break;
                        case 4:
                            o.PpRooms && o.PpRooms.length || (o.PpRooms = []), o.PpRooms.push(k.commonProto.PP_Level.decode(e, e.uint32()));
                            break;
                        case 5:
                            o.SngTournaments && o.SngTournaments.length || (o.SngTournaments = []), o.SngTournaments.push(k.commonProto.SngTournament.decode(e, e.uint32()));
                            break;
                        case 6:
                            o.AofTournaments && o.AofTournaments.length || (o.AofTournaments = []), o.AofTournaments.push(k.commonProto.SngTournament.decode(e, e.uint32()));
                            break;
                        case 7:
                            o.PpLevelsLen = e.uint32();
                            break;
                        case 8:
                            o.HoldemLevelsLen = e.uint32();
                            break;
                        case 9:
                            o.MttTournamentsLen = e.uint32();
                            break;
                        case 10:
                            o.PpRoomsLen = e.uint32();
                            break;
                        case 11:
                            o.SngTournamentsLen = e.uint32();
                            break;
                        case 12:
                            o.AofTournamentsLen = e.uint32();
                            break;
                        case 13:
                            o.ListId = e.uint32();
                            break;
                        case 14:
                            o.CowboyPlayerCount = e.uint32();
                            break;
                        case 15:
                            o.FinalBroadcastTournaments && o.FinalBroadcastTournaments.length || (o.FinalBroadcastTournaments = []), o.FinalBroadcastTournaments.push(k.commonProto.MttTournament.decode(e, e.uint32()));
                            break;
                        case 16:
                            o.FinalBroadcastsTournamentLen = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Pineapple_Turn_Record = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Pineapple_Turn_Record", e.prototype.turnId = 0, e.prototype.drawCards = b.newBuffer([]), e.prototype.headCards = b.newBuffer([]), e.prototype.midCards = b.newBuffer([]), e.prototype.tailCards = b.newBuffer([]), e.prototype.discardedCards = b.newBuffer([]), e.prototype.auto = !1, e.prototype.baseTime = 0, e.prototype.extraTime = 0, e.prototype.usedTime = 0, e.prototype.flags = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.turnId && e.hasOwnProperty("turnId") && t.uint32(8).int32(e.turnId), null != e.drawCards && e.hasOwnProperty("drawCards") && t.uint32(18).bytes(e.drawCards), null != e.headCards && e.hasOwnProperty("headCards") && t.uint32(26).bytes(e.headCards), null != e.midCards && e.hasOwnProperty("midCards") && t.uint32(34).bytes(e.midCards), null != e.tailCards && e.hasOwnProperty("tailCards") && t.uint32(42).bytes(e.tailCards), null != e.discardedCards && e.hasOwnProperty("discardedCards") && t.uint32(50).bytes(e.discardedCards), null != e.auto && e.hasOwnProperty("auto") && t.uint32(56).bool(e.auto), null != e.baseTime && e.hasOwnProperty("baseTime") && t.uint32(88).uint32(e.baseTime), null != e.extraTime && e.hasOwnProperty("extraTime") && t.uint32(96).uint32(e.extraTime), null != e.usedTime && e.hasOwnProperty("usedTime") && t.uint32(104).uint32(e.usedTime), null != e.flags && e.hasOwnProperty("flags") && t.uint32(112).uint32(e.flags), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Pineapple_Turn_Record; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.turnId = e.int32();
                            break;
                        case 2:
                            o.drawCards = e.bytes();
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
                            o.discardedCards = e.bytes();
                            break;
                        case 7:
                            o.auto = e.bool();
                            break;
                        case 11:
                            o.baseTime = e.uint32();
                            break;
                        case 12:
                            o.extraTime = e.uint32();
                            break;
                        case 13:
                            o.usedTime = e.uint32();
                            break;
                        case 14:
                            o.flags = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Pineapple_User_Record = function() {
            function e(e) {
                if (this.turns = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Pineapple_User_Record", e.prototype.userId = 0, e.prototype.userName = "", e.prototype.avator = "", e.prototype.turns = b.emptyArray, e.prototype.head = 0, e.prototype.mid = 0, e.prototype.tail = 0, e.prototype.total = 0, e.prototype.broken = !1, e.prototype.profit = 0, e.prototype.endCoin = 0, e.prototype.seatNumber = 0, e.prototype.rank = 0, e.prototype.wins = 0, e.prototype.bounty = 0, e.prototype.value = 0, e.prototype.beforeCoin = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.userName && e.hasOwnProperty("userName") && t.uint32(18).string(e.userName), null != e.avator && e.hasOwnProperty("avator") && t.uint32(26).string(e.avator), null != e.turns && e.turns.length)
                    for (var n = 0; n < e.turns.length; ++n) k.commonProto.Pineapple_Turn_Record.encode(e.turns[n], t.uint32(34).fork()).ldelim();
                return null != e.head && e.hasOwnProperty("head") && t.uint32(40).int32(e.head), null != e.mid && e.hasOwnProperty("mid") && t.uint32(48).int32(e.mid), null != e.tail && e.hasOwnProperty("tail") && t.uint32(56).int32(e.tail), null != e.total && e.hasOwnProperty("total") && t.uint32(64).int32(e.total), null != e.broken && e.hasOwnProperty("broken") && t.uint32(72).bool(e.broken), null != e.profit && e.hasOwnProperty("profit") && t.uint32(81).double(e.profit), null != e.endCoin && e.hasOwnProperty("endCoin") && t.uint32(89).double(e.endCoin), null != e.seatNumber && e.hasOwnProperty("seatNumber") && t.uint32(96).int32(e.seatNumber), null != e.rank && e.hasOwnProperty("rank") && t.uint32(104).uint32(e.rank), null != e.wins && e.hasOwnProperty("wins") && t.uint32(113).double(e.wins), null != e.bounty && e.hasOwnProperty("bounty") && t.uint32(121).double(e.bounty), null != e.value && e.hasOwnProperty("value") && t.uint32(129).double(e.value), null != e.beforeCoin && e.hasOwnProperty("beforeCoin") && t.uint32(137).double(e.beforeCoin), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Pineapple_User_Record; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.userId = e.uint32();
                            break;
                        case 2:
                            o.userName = e.string();
                            break;
                        case 3:
                            o.avator = e.string();
                            break;
                        case 4:
                            o.turns && o.turns.length || (o.turns = []), o.turns.push(k.commonProto.Pineapple_Turn_Record.decode(e, e.uint32()));
                            break;
                        case 5:
                            o.head = e.int32();
                            break;
                        case 6:
                            o.mid = e.int32();
                            break;
                        case 7:
                            o.tail = e.int32();
                            break;
                        case 8:
                            o.total = e.int32();
                            break;
                        case 9:
                            o.broken = e.bool();
                            break;
                        case 10:
                            o.profit = e.double();
                            break;
                        case 11:
                            o.endCoin = e.double();
                            break;
                        case 12:
                            o.seatNumber = e.int32();
                            break;
                        case 13:
                            o.rank = e.uint32();
                            break;
                        case 14:
                            o.wins = e.double();
                            break;
                        case 15:
                            o.bounty = e.double();
                            break;
                        case 16:
                            o.value = e.double();
                            break;
                        case 17:
                            o.beforeCoin = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Pineapple_Round_Record = function() {
            function e(e) {
                if (this.players = {}, e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Pineapple_Round_Record", e.prototype.roomId = 0, e.prototype.roundId = 0, e.prototype.players = b.emptyObject, e.prototype.levelId = 0, e.prototype.typeId = 0, e.prototype.sectionId = "", e.prototype.deal = 0, e.prototype.dealerPos = 0, e.prototype.name = "", e.prototype.gameMode = 0, e.prototype.coinPerPoint = 0, e.prototype.categoryId = 0, e.prototype.playcount = 0, e.prototype.prizecircle = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.roundId && e.hasOwnProperty("roundId") && t.uint32(16).uint32(e.roundId), null != e.players && e.hasOwnProperty("players"))
                    for (var n = Object.keys(e.players), o = 0; o < n.length; ++o) t.uint32(26).fork().uint32(8).uint32(n[o]), k.commonProto.Pineapple_User_Record.encode(e.players[n[o]], t.uint32(18).fork()).ldelim().ldelim();
                return null != e.levelId && e.hasOwnProperty("levelId") && t.uint32(40).uint32(e.levelId), null != e.typeId && e.hasOwnProperty("typeId") && t.uint32(48).uint32(e.typeId), null != e.sectionId && e.hasOwnProperty("sectionId") && t.uint32(58).string(e.sectionId), null != e.deal && e.hasOwnProperty("deal") && t.uint32(64).uint32(e.deal), null != e.dealerPos && e.hasOwnProperty("dealerPos") && t.uint32(72).uint32(e.dealerPos), null != e.name && e.hasOwnProperty("name") && t.uint32(82).string(e.name), null != e.gameMode && e.hasOwnProperty("gameMode") && t.uint32(88).uint32(e.gameMode), null != e.coinPerPoint && e.hasOwnProperty("coinPerPoint") && t.uint32(101).float(e.coinPerPoint), null != e.categoryId && e.hasOwnProperty("categoryId") && t.uint32(104).int32(e.categoryId), null != e.playcount && e.hasOwnProperty("playcount") && t.uint32(112).uint32(e.playcount), null != e.prizecircle && e.hasOwnProperty("prizecircle") && t.uint32(120).uint32(e.prizecircle), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n, o = void 0 === t ? e.len : e.pos + t, r = new k.commonProto.Pineapple_Round_Record; e.pos < o;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        case 2:
                            r.roundId = e.uint32();
                            break;
                        case 3:
                            e.skip().pos++, r.players === b.emptyObject && (r.players = {}), n = e.uint32(), e.pos++, r.players[n] = k.commonProto.Pineapple_User_Record.decode(e, e.uint32());
                            break;
                        case 5:
                            r.levelId = e.uint32();
                            break;
                        case 6:
                            r.typeId = e.uint32();
                            break;
                        case 7:
                            r.sectionId = e.string();
                            break;
                        case 8:
                            r.deal = e.uint32();
                            break;
                        case 9:
                            r.dealerPos = e.uint32();
                            break;
                        case 10:
                            r.name = e.string();
                            break;
                        case 11:
                            r.gameMode = e.uint32();
                            break;
                        case 12:
                            r.coinPerPoint = e.float();
                            break;
                        case 13:
                            r.categoryId = e.int32();
                            break;
                        case 14:
                            r.playcount = e.uint32();
                            break;
                        case 15:
                            r.prizecircle = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Pineapple_Round = function() {
            function e(e) {
                if (this.recordPath = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Pineapple_Round", e.prototype.label = "", e.prototype.result = 0, e.prototype.baseCoin = 0, e.prototype.length = 0, e.prototype.recordPath = b.emptyArray, e.prototype.created = null, e.prototype.roomId = 0, e.prototype.ended = !1, e.prototype.labelI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.label && e.hasOwnProperty("label") && t.uint32(10).string(e.label), null != e.result && e.hasOwnProperty("result") && t.uint32(16).int32(e.result), null != e.baseCoin && e.hasOwnProperty("baseCoin") && t.uint32(29).float(e.baseCoin), null != e.length && e.hasOwnProperty("length") && t.uint32(32).int32(e.length), null != e.recordPath && e.recordPath.length)
                    for (var n = 0; n < e.recordPath.length; ++n) t.uint32(42).string(e.recordPath[n]);
                return null != e.created && e.hasOwnProperty("created") && k.google.protobuf.Timestamp.encode(e.created, t.uint32(50).fork()).ldelim(), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(56).int32(e.roomId), null != e.ended && e.hasOwnProperty("ended") && t.uint32(64).bool(e.ended), null != e.labelI18N && e.hasOwnProperty("labelI18N") && t.uint32(74).string(e.labelI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Pineapple_Round; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.label = e.string();
                            break;
                        case 2:
                            o.result = e.int32();
                            break;
                        case 3:
                            o.baseCoin = e.float();
                            break;
                        case 4:
                            o.length = e.int32();
                            break;
                        case 5:
                            o.recordPath && o.recordPath.length || (o.recordPath = []), o.recordPath.push(e.string());
                            break;
                        case 6:
                            o.created = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 7:
                            o.roomId = e.int32();
                            break;
                        case 8:
                            o.ended = e.bool();
                            break;
                        case 9:
                            o.labelI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Pineapple_Rounds = function() {
            function e(e) {
                if (this.rounds = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Pineapple_Rounds", e.prototype.rounds = b.emptyArray, e.prototype.lastRoundStartTime = null, e.prototype.total = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.rounds && e.rounds.length)
                    for (var n = 0; n < e.rounds.length; ++n) k.commonProto.Pineapple_Round.encode(e.rounds[n], t.uint32(10).fork()).ldelim();
                return null != e.lastRoundStartTime && e.hasOwnProperty("lastRoundStartTime") && k.google.protobuf.Timestamp.encode(e.lastRoundStartTime, t.uint32(18).fork()).ldelim(), null != e.total && e.hasOwnProperty("total") && t.uint32(24).int32(e.total), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Pineapple_Rounds; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.rounds && o.rounds.length || (o.rounds = []), o.rounds.push(k.commonProto.Pineapple_Round.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.lastRoundStartTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 3:
                            o.total = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.BET_TYPE = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Bet_Null"] = 0, t[e[1] = "Bet_Pair_A"] = 1, t[e[2] = "Bet_Has_A"] = 2, t[e[3] = "Bet_Has_A_K"] = 3, t[e[4] = "Bet_Is_Pair"] = 4, t[e[5] = "Bet_No_A_K_Pair"] = 5, t
        }(), p.Holdem_Player_Info = function() {
            function e(e) {
                if (this.guessCards = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Holdem_Player_Info", e.prototype.userId = 0, e.prototype.deskCoin = 0, e.prototype.state = 0, e.prototype.nickname = "", e.prototype.startCoin = 0, e.prototype.rank = 0, e.prototype.wins = 0, e.prototype.bounty = 0, e.prototype.value = 0, e.prototype.guessCards = b.emptyArray, e.prototype.avatar = "", e.prototype.thirdUserId = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.deskCoin && e.hasOwnProperty("deskCoin") && t.uint32(17).double(e.deskCoin), null != e.state && e.hasOwnProperty("state") && t.uint32(24).int32(e.state), null != e.nickname && e.hasOwnProperty("nickname") && t.uint32(34).string(e.nickname), null != e.startCoin && e.hasOwnProperty("startCoin") && t.uint32(41).double(e.startCoin), null != e.rank && e.hasOwnProperty("rank") && t.uint32(104).uint32(e.rank), null != e.wins && e.hasOwnProperty("wins") && t.uint32(113).double(e.wins), null != e.bounty && e.hasOwnProperty("bounty") && t.uint32(121).double(e.bounty), null != e.value && e.hasOwnProperty("value") && t.uint32(129).double(e.value), null != e.guessCards && e.guessCards.length)
                    for (var n = 0; n < e.guessCards.length; ++n) k.modelProto.GuessCardLogs.encode(e.guessCards[n], t.uint32(138).fork()).ldelim();
                return null != e.avatar && e.hasOwnProperty("avatar") && t.uint32(146).string(e.avatar), null != e.thirdUserId && e.hasOwnProperty("thirdUserId") && t.uint32(152).int64(e.thirdUserId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Holdem_Player_Info; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.userId = e.uint32();
                            break;
                        case 2:
                            o.deskCoin = e.double();
                            break;
                        case 3:
                            o.state = e.int32();
                            break;
                        case 4:
                            o.nickname = e.string();
                            break;
                        case 5:
                            o.startCoin = e.double();
                            break;
                        case 13:
                            o.rank = e.uint32();
                            break;
                        case 14:
                            o.wins = e.double();
                            break;
                        case 15:
                            o.bounty = e.double();
                            break;
                        case 16:
                            o.value = e.double();
                            break;
                        case 17:
                            o.guessCards && o.guessCards.length || (o.guessCards = []), o.guessCards.push(k.modelProto.GuessCardLogs.decode(e, e.uint32()));
                            break;
                        case 18:
                            o.avatar = e.string();
                            break;
                        case 19:
                            o.thirdUserId = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Holdem_Rounds = function() {
            function e(e) {
                if (this.rounds = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Holdem_Rounds", e.prototype.rounds = b.emptyArray, e.prototype.lastRoundStartTime = null, e.prototype.total = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.rounds && e.rounds.length)
                    for (var n = 0; n < e.rounds.length; ++n) k.commonProto.Holdem_Round.encode(e.rounds[n], t.uint32(10).fork()).ldelim();
                return null != e.lastRoundStartTime && e.hasOwnProperty("lastRoundStartTime") && k.google.protobuf.Timestamp.encode(e.lastRoundStartTime, t.uint32(18).fork()).ldelim(), null != e.total && e.hasOwnProperty("total") && t.uint32(24).int32(e.total), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Holdem_Rounds; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.rounds && o.rounds.length || (o.rounds = []), o.rounds.push(k.commonProto.Holdem_Round.decode(e, e.uint32()));
                            break;
                        case 2:
                            o.lastRoundStartTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 3:
                            o.total = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Holdem_Round = function() {
            function e(e) {
                if (this.recordPath = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Holdem_Round", e.prototype.label = "", e.prototype.result = 0, e.prototype.recordPath = b.emptyArray, e.prototype.created = null, e.prototype.mttId = 0, e.prototype.sngId = 0, e.prototype.roomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.label && e.hasOwnProperty("label") && t.uint32(10).string(e.label), null != e.result && e.hasOwnProperty("result") && t.uint32(16).int32(e.result), null != e.recordPath && e.recordPath.length)
                    for (var n = 0; n < e.recordPath.length; ++n) t.uint32(42).string(e.recordPath[n]);
                return null != e.created && e.hasOwnProperty("created") && k.google.protobuf.Timestamp.encode(e.created, t.uint32(50).fork()).ldelim(), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(56).int32(e.roomId), null != e.mttId && e.hasOwnProperty("mttId") && t.uint32(64).int32(e.mttId), null != e.sngId && e.hasOwnProperty("sngId") && t.uint32(72).int32(e.sngId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Holdem_Round; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.label = e.string();
                            break;
                        case 2:
                            o.result = e.int32();
                            break;
                        case 5:
                            o.recordPath && o.recordPath.length || (o.recordPath = []), o.recordPath.push(e.string());
                            break;
                        case 6:
                            o.created = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 8:
                            o.mttId = e.int32();
                            break;
                        case 9:
                            o.sngId = e.int32();
                            break;
                        case 7:
                            o.roomId = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Holdem_Record_Action_Time = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Holdem_Record_Action_Time", e.prototype.ttlTime = 0, e.prototype.usedTime = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ttlTime && e.hasOwnProperty("ttlTime") && t.uint32(8).uint32(e.ttlTime), null != e.usedTime && e.hasOwnProperty("usedTime") && t.uint32(16).uint32(e.usedTime), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Holdem_Record_Action_Time; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ttlTime = e.uint32();
                            break;
                        case 2:
                            o.usedTime = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Holdem_Record = function() {
            function e(e) {
                if (this.Players = {}, this.Actions = [], this.ranks = {}, this.ActionTimes = [], this.ActionTimeStamp = [], this.prize = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Holdem_Record", e.prototype.roomId = 0, e.prototype.roundId = 0, e.prototype.levelId = 0, e.prototype.Players = b.emptyObject, e.prototype.Actions = b.emptyArray, e.prototype.gameId = 0, e.prototype.ranks = b.emptyObject, e.prototype.ActionTimes = b.emptyArray, e.prototype.dealer = 0, e.prototype.seatnum = 0, e.prototype.bigBlind = 0, e.prototype.smallBlind = 0, e.prototype.ante = 0, e.prototype.playcount = 0, e.prototype.prizecircle = 0, e.prototype.ActionTimeStamp = b.emptyArray, e.prototype.prize = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.roundId && e.hasOwnProperty("roundId") && t.uint32(16).uint32(e.roundId), null != e.levelId && e.hasOwnProperty("levelId") && t.uint32(24).uint32(e.levelId), null != e.Players && e.hasOwnProperty("Players"))
                    for (var n = Object.keys(e.Players), o = 0; o < n.length; ++o) t.uint32(34).fork().uint32(8).uint32(n[o]), k.commonProto.Holdem_Player_Info.encode(e.Players[n[o]], t.uint32(18).fork()).ldelim().ldelim();
                if (null != e.Actions && e.Actions.length)
                    for (o = 0; o < e.Actions.length; ++o) t.uint32(42).bytes(e.Actions[o]);
                if (null != e.gameId && e.hasOwnProperty("gameId") && t.uint32(48).uint32(e.gameId), null != e.ranks && e.hasOwnProperty("ranks"))
                    for (n = Object.keys(e.ranks), o = 0; o < n.length; ++o) t.uint32(58).fork().uint32(8).uint32(n[o]).uint32(16).int32(e.ranks[n[o]]).ldelim();
                if (null != e.ActionTimes && e.ActionTimes.length)
                    for (o = 0; o < e.ActionTimes.length; ++o) k.commonProto.Holdem_Record_Action_Time.encode(e.ActionTimes[o], t.uint32(66).fork()).ldelim();
                if (null != e.dealer && e.hasOwnProperty("dealer") && t.uint32(72).uint32(e.dealer), null != e.seatnum && e.hasOwnProperty("seatnum") && t.uint32(80).uint32(e.seatnum), null != e.bigBlind && e.hasOwnProperty("bigBlind") && t.uint32(93).float(e.bigBlind), null != e.smallBlind && e.hasOwnProperty("smallBlind") && t.uint32(101).float(e.smallBlind), null != e.ante && e.hasOwnProperty("ante") && t.uint32(109).float(e.ante), null != e.playcount && e.hasOwnProperty("playcount") && t.uint32(112).uint32(e.playcount), null != e.prizecircle && e.hasOwnProperty("prizecircle") && t.uint32(120).uint32(e.prizecircle), null != e.ActionTimeStamp && e.ActionTimeStamp.length) {
                    for (t.uint32(130).fork(), o = 0; o < e.ActionTimeStamp.length; ++o) t.int64(e.ActionTimeStamp[o]);
                    t.ldelim()
                }
                if (null != e.prize && e.prize.length) {
                    for (t.uint32(138).fork(), o = 0; o < e.prize.length; ++o) t.double(e.prize[o]);
                    t.ldelim()
                }
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n, o = void 0 === t ? e.len : e.pos + t, r = new k.commonProto.Holdem_Record; e.pos < o;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.roomId = e.uint32();
                            break;
                        case 2:
                            r.roundId = e.uint32();
                            break;
                        case 3:
                            r.levelId = e.uint32();
                            break;
                        case 4:
                            e.skip().pos++, r.Players === b.emptyObject && (r.Players = {}), n = e.uint32(), e.pos++, r.Players[n] = k.commonProto.Holdem_Player_Info.decode(e, e.uint32());
                            break;
                        case 5:
                            r.Actions && r.Actions.length || (r.Actions = []), r.Actions.push(e.bytes());
                            break;
                        case 6:
                            r.gameId = e.uint32();
                            break;
                        case 7:
                            e.skip().pos++, r.ranks === b.emptyObject && (r.ranks = {}), n = e.uint32(), e.pos++, r.ranks[n] = e.int32();
                            break;
                        case 8:
                            r.ActionTimes && r.ActionTimes.length || (r.ActionTimes = []), r.ActionTimes.push(k.commonProto.Holdem_Record_Action_Time.decode(e, e.uint32()));
                            break;
                        case 9:
                            r.dealer = e.uint32();
                            break;
                        case 10:
                            r.seatnum = e.uint32();
                            break;
                        case 11:
                            r.bigBlind = e.float();
                            break;
                        case 12:
                            r.smallBlind = e.float();
                            break;
                        case 13:
                            r.ante = e.float();
                            break;
                        case 14:
                            r.playcount = e.uint32();
                            break;
                        case 15:
                            r.prizecircle = e.uint32();
                            break;
                        case 16:
                            if (r.ActionTimeStamp && r.ActionTimeStamp.length || (r.ActionTimeStamp = []), 2 == (7 & i))
                                for (var a = e.uint32() + e.pos; e.pos < a;) r.ActionTimeStamp.push(e.int64());
                            else r.ActionTimeStamp.push(e.int64());
                            break;
                        case 17:
                            if (r.prize && r.prize.length || (r.prize = []), 2 == (7 & i))
                                for (a = e.uint32() + e.pos; e.pos < a;) r.prize.push(e.double());
                            else r.prize.push(e.double());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Result_List = function() {
            function e(e) {
                if (this.GameResults = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Result_List", e.prototype.GameResults = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.GameResults && e.GameResults.length)
                    for (var n = 0; n < e.GameResults.length; ++n) k.commonProto.Game_Result_Record.encode(e.GameResults[n], t.uint32(10).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_Result_List; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.GameResults && o.GameResults.length || (o.GameResults = []), o.GameResults.push(k.commonProto.Game_Result_Record.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Game_Result_Record = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Game_Result_Record", e.prototype.roomId = 0, e.prototype.levelId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.roomId && e.hasOwnProperty("roomId") && t.uint32(8).uint32(e.roomId), null != e.levelId && e.hasOwnProperty("levelId") && t.uint32(16).uint32(e.levelId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Game_Result_Record; e.pos < n;) {
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
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Mtt_Tournament_List_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Mtt_Tournament_List_Request", e.prototype.platForm = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.platForm && e.hasOwnProperty("platForm") && t.uint32(8).int32(e.platForm), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Mtt_Tournament_List_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.platForm = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttTournamentInfo = function() {
            function e(e) {
                if (this.OpenGroupId = [], this.CurrencyRate = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttTournamentInfo", e.prototype.Detail = null, e.prototype.RegisteredCount = 0, e.prototype.JoinedCount = 0, e.prototype.GamePool = 0, e.prototype.TimeLeftSec = 0, e.prototype.TimerStop = !1, e.prototype.IsCardsShown = !1, e.prototype.IsCelebrityBroadcast = !1, e.prototype.OpenGroupId = b.emptyArray, e.prototype.CurrencyRate = b.emptyArray, e.prototype.Duration = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.prototype.IsPrivate = !1, e.prototype.BountyPool = 0, e.prototype.WillPlayStartTime = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.prototype.overlay = !1, e.prototype.PlayingPlayersCount = 0, e.prototype.AllGamePool = 0, e.prototype.LateRegTime = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.prototype.RebuyStatus = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.Detail && e.hasOwnProperty("Detail") && k.commonProto.MttTournamentInfoDetail.encode(e.Detail, t.uint32(10).fork()).ldelim(), null != e.RegisteredCount && e.hasOwnProperty("RegisteredCount") && t.uint32(16).int32(e.RegisteredCount), null != e.JoinedCount && e.hasOwnProperty("JoinedCount") && t.uint32(24).int32(e.JoinedCount), null != e.GamePool && e.hasOwnProperty("GamePool") && t.uint32(33).double(e.GamePool), null != e.TimeLeftSec && e.hasOwnProperty("TimeLeftSec") && t.uint32(40).int32(e.TimeLeftSec), null != e.TimerStop && e.hasOwnProperty("TimerStop") && t.uint32(48).bool(e.TimerStop), null != e.IsCardsShown && e.hasOwnProperty("IsCardsShown") && t.uint32(56).bool(e.IsCardsShown), null != e.IsCelebrityBroadcast && e.hasOwnProperty("IsCelebrityBroadcast") && t.uint32(64).bool(e.IsCelebrityBroadcast), null != e.OpenGroupId && e.OpenGroupId.length) {
                    t.uint32(74).fork();
                    for (var n = 0; n < e.OpenGroupId.length; ++n) t.uint32(e.OpenGroupId[n]);
                    t.ldelim()
                }
                if (null != e.CurrencyRate && e.CurrencyRate.length)
                    for (n = 0; n < e.CurrencyRate.length; ++n) k.commonProto.CurrencyRate.encode(e.CurrencyRate[n], t.uint32(82).fork()).ldelim();
                return null != e.Duration && e.hasOwnProperty("Duration") && t.uint32(88).int64(e.Duration), null != e.IsPrivate && e.hasOwnProperty("IsPrivate") && t.uint32(96).bool(e.IsPrivate), null != e.BountyPool && e.hasOwnProperty("BountyPool") && t.uint32(121).double(e.BountyPool), null != e.WillPlayStartTime && e.hasOwnProperty("WillPlayStartTime") && t.uint32(128).int64(e.WillPlayStartTime), null != e.overlay && e.hasOwnProperty("overlay") && t.uint32(136).bool(e.overlay), null != e.PlayingPlayersCount && e.hasOwnProperty("PlayingPlayersCount") && t.uint32(144).int32(e.PlayingPlayersCount), null != e.AllGamePool && e.hasOwnProperty("AllGamePool") && t.uint32(153).double(e.AllGamePool), null != e.LateRegTime && e.hasOwnProperty("LateRegTime") && t.uint32(160).int64(e.LateRegTime), null != e.RebuyStatus && e.hasOwnProperty("RebuyStatus") && t.uint32(168).int32(e.RebuyStatus), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttTournamentInfo; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Detail = k.commonProto.MttTournamentInfoDetail.decode(e, e.uint32());
                            break;
                        case 2:
                            o.RegisteredCount = e.int32();
                            break;
                        case 3:
                            o.JoinedCount = e.int32();
                            break;
                        case 4:
                            o.GamePool = e.double();
                            break;
                        case 5:
                            o.TimeLeftSec = e.int32();
                            break;
                        case 6:
                            o.TimerStop = e.bool();
                            break;
                        case 7:
                            o.IsCardsShown = e.bool();
                            break;
                        case 8:
                            o.IsCelebrityBroadcast = e.bool();
                            break;
                        case 9:
                            if (o.OpenGroupId && o.OpenGroupId.length || (o.OpenGroupId = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.OpenGroupId.push(e.uint32());
                            else o.OpenGroupId.push(e.uint32());
                            break;
                        case 10:
                            o.CurrencyRate && o.CurrencyRate.length || (o.CurrencyRate = []), o.CurrencyRate.push(k.commonProto.CurrencyRate.decode(e, e.uint32()));
                            break;
                        case 11:
                            o.Duration = e.int64();
                            break;
                        case 12:
                            o.IsPrivate = e.bool();
                            break;
                        case 15:
                            o.BountyPool = e.double();
                            break;
                        case 16:
                            o.WillPlayStartTime = e.int64();
                            break;
                        case 17:
                            o.overlay = e.bool();
                            break;
                        case 18:
                            o.PlayingPlayersCount = e.int32();
                            break;
                        case 19:
                            o.AllGamePool = e.double();
                            break;
                        case 20:
                            o.LateRegTime = e.int64();
                            break;
                        case 21:
                            o.RebuyStatus = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MttTournamentInfoDetail = function() {
            function e(e) {
                if (this.Tag = [], this.Banners = [], this.Icons = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttTournamentInfoDetail", e.prototype.Id = 0, e.prototype.TournamentName = "", e.prototype.TournamentNameI18N = "", e.prototype.TournamentMode = 0, e.prototype.StartingTime = null, e.prototype.EndingTime = null, e.prototype.ShowingTime = null, e.prototype.ShowingPosition = 0, e.prototype.Seats = 0, e.prototype.RegFee = 0, e.prototype.SrvFee = 0, e.prototype.Status = 0, e.prototype.IsSatelliteMode = !1, e.prototype.IsAipt = !1, e.prototype.PlayOnJoint = 0, e.prototype.AllowSignupHours = 0, e.prototype.ThinkTime = 0, e.prototype.MttMode = 0, e.prototype.SpecialNameDisplay = 0, e.prototype.DisplayTag = "", e.prototype.FinalRoomId = 0, e.prototype.FinalStarted = null, e.prototype.IsCelebrity = !1, e.prototype.TournamentInfo = "", e.prototype.TournamentInfoI18N = "", e.prototype.Desc = "", e.prototype.DescI18N = "", e.prototype.MultiFlightLevel = 0, e.prototype.DisplayCurrency = "", e.prototype.GameMode = 0, e.prototype.GameInvitationCode = "", e.prototype.Tag = b.emptyArray, e.prototype.SignUpOptions = "", e.prototype.RegGoldType = 0, e.prototype.OptionsEx = "", e.prototype.LiveTour = !1, e.prototype.Special = !1, e.prototype.Private = !1, e.prototype.Festival = !1, e.prototype.MultiFlightId = 0, e.prototype.IsChampion = !1, e.prototype.Banners = b.emptyArray, e.prototype.Icons = b.emptyArray, e.prototype.MorebuyStatus = !1, e.prototype.WPTDailyAsia = !1, e.prototype.DailyPrime = !1, e.prototype.BountyRumble = !1, e.prototype.OneShot = !1, e.prototype.HyperDash = !1, e.prototype.WeeklyGoldenBounty = !1, e.prototype.WPTMysteryMillion = !1, e.prototype.BannerIconOffDisplay = !1, e.prototype.CrazyFreeroll = !1, e.prototype.WPTLive = !1, e.prototype.FontColor = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.TournamentName && e.hasOwnProperty("TournamentName") && t.uint32(18).string(e.TournamentName), null != e.TournamentNameI18N && e.hasOwnProperty("TournamentNameI18N") && t.uint32(26).string(e.TournamentNameI18N), null != e.TournamentMode && e.hasOwnProperty("TournamentMode") && t.uint32(32).uint32(e.TournamentMode), null != e.StartingTime && e.hasOwnProperty("StartingTime") && k.google.protobuf.Timestamp.encode(e.StartingTime, t.uint32(42).fork()).ldelim(), null != e.EndingTime && e.hasOwnProperty("EndingTime") && k.google.protobuf.Timestamp.encode(e.EndingTime, t.uint32(50).fork()).ldelim(), null != e.ShowingTime && e.hasOwnProperty("ShowingTime") && k.google.protobuf.Timestamp.encode(e.ShowingTime, t.uint32(58).fork()).ldelim(), null != e.ShowingPosition && e.hasOwnProperty("ShowingPosition") && t.uint32(64).int32(e.ShowingPosition), null != e.Seats && e.hasOwnProperty("Seats") && t.uint32(72).int32(e.Seats), null != e.RegFee && e.hasOwnProperty("RegFee") && t.uint32(81).double(e.RegFee), null != e.SrvFee && e.hasOwnProperty("SrvFee") && t.uint32(89).double(e.SrvFee), null != e.Status && e.hasOwnProperty("Status") && t.uint32(96).int32(e.Status), null != e.IsSatelliteMode && e.hasOwnProperty("IsSatelliteMode") && t.uint32(104).bool(e.IsSatelliteMode), null != e.IsAipt && e.hasOwnProperty("IsAipt") && t.uint32(112).bool(e.IsAipt), null != e.PlayOnJoint && e.hasOwnProperty("PlayOnJoint") && t.uint32(120).uint32(e.PlayOnJoint), null != e.AllowSignupHours && e.hasOwnProperty("AllowSignupHours") && t.uint32(128).uint32(e.AllowSignupHours), null != e.ThinkTime && e.hasOwnProperty("ThinkTime") && t.uint32(136).int32(e.ThinkTime), null != e.MttMode && e.hasOwnProperty("MttMode") && t.uint32(144).int32(e.MttMode), null != e.SpecialNameDisplay && e.hasOwnProperty("SpecialNameDisplay") && t.uint32(152).int32(e.SpecialNameDisplay), null != e.DisplayTag && e.hasOwnProperty("DisplayTag") && t.uint32(162).string(e.DisplayTag), null != e.FinalRoomId && e.hasOwnProperty("FinalRoomId") && t.uint32(168).int32(e.FinalRoomId), null != e.FinalStarted && e.hasOwnProperty("FinalStarted") && k.google.protobuf.Timestamp.encode(e.FinalStarted, t.uint32(178).fork()).ldelim(), null != e.IsCelebrity && e.hasOwnProperty("IsCelebrity") && t.uint32(184).bool(e.IsCelebrity), null != e.TournamentInfo && e.hasOwnProperty("TournamentInfo") && t.uint32(194).string(e.TournamentInfo), null != e.TournamentInfoI18N && e.hasOwnProperty("TournamentInfoI18N") && t.uint32(202).string(e.TournamentInfoI18N), null != e.Desc && e.hasOwnProperty("Desc") && t.uint32(210).string(e.Desc), null != e.DescI18N && e.hasOwnProperty("DescI18N") && t.uint32(218).string(e.DescI18N), null != e.MultiFlightLevel && e.hasOwnProperty("MultiFlightLevel") && t.uint32(224).uint32(e.MultiFlightLevel), null != e.DisplayCurrency && e.hasOwnProperty("DisplayCurrency") && t.uint32(234).string(e.DisplayCurrency), null != e.GameMode && e.hasOwnProperty("GameMode") && t.uint32(240).uint32(e.GameMode), null != e.GameInvitationCode && e.hasOwnProperty("GameInvitationCode") && t.uint32(250).string(e.GameInvitationCode), null != e.Tag && e.Tag.length)
                    for (var n = 0; n < e.Tag.length; ++n) t.uint32(258).string(e.Tag[n]);
                if (null != e.SignUpOptions && e.hasOwnProperty("SignUpOptions") && t.uint32(266).string(e.SignUpOptions), null != e.RegGoldType && e.hasOwnProperty("RegGoldType") && t.uint32(272).int32(e.RegGoldType), null != e.OptionsEx && e.hasOwnProperty("OptionsEx") && t.uint32(282).string(e.OptionsEx), null != e.LiveTour && e.hasOwnProperty("LiveTour") && t.uint32(288).bool(e.LiveTour), null != e.Special && e.hasOwnProperty("Special") && t.uint32(296).bool(e.Special), null != e.Private && e.hasOwnProperty("Private") && t.uint32(304).bool(e.Private), null != e.Festival && e.hasOwnProperty("Festival") && t.uint32(312).bool(e.Festival), null != e.MultiFlightId && e.hasOwnProperty("MultiFlightId") && t.uint32(320).uint32(e.MultiFlightId), null != e.IsChampion && e.hasOwnProperty("IsChampion") && t.uint32(328).bool(e.IsChampion), null != e.Banners && e.Banners.length) {
                    for (t.uint32(338).fork(), n = 0; n < e.Banners.length; ++n) t.int32(e.Banners[n]);
                    t.ldelim()
                }
                if (null != e.Icons && e.Icons.length) {
                    for (t.uint32(346).fork(), n = 0; n < e.Icons.length; ++n) t.int32(e.Icons[n]);
                    t.ldelim()
                }
                return null != e.MorebuyStatus && e.hasOwnProperty("MorebuyStatus") && t.uint32(352).bool(e.MorebuyStatus), null != e.WPTDailyAsia && e.hasOwnProperty("WPTDailyAsia") && t.uint32(360).bool(e.WPTDailyAsia), null != e.DailyPrime && e.hasOwnProperty("DailyPrime") && t.uint32(368).bool(e.DailyPrime), null != e.BountyRumble && e.hasOwnProperty("BountyRumble") && t.uint32(376).bool(e.BountyRumble), null != e.OneShot && e.hasOwnProperty("OneShot") && t.uint32(384).bool(e.OneShot), null != e.HyperDash && e.hasOwnProperty("HyperDash") && t.uint32(392).bool(e.HyperDash), null != e.WeeklyGoldenBounty && e.hasOwnProperty("WeeklyGoldenBounty") && t.uint32(400).bool(e.WeeklyGoldenBounty), null != e.WPTMysteryMillion && e.hasOwnProperty("WPTMysteryMillion") && t.uint32(408).bool(e.WPTMysteryMillion), null != e.BannerIconOffDisplay && e.hasOwnProperty("BannerIconOffDisplay") && t.uint32(416).bool(e.BannerIconOffDisplay), null != e.CrazyFreeroll && e.hasOwnProperty("CrazyFreeroll") && t.uint32(424).bool(e.CrazyFreeroll), null != e.WPTLive && e.hasOwnProperty("WPTLive") && t.uint32(432).bool(e.WPTLive), null != e.FontColor && e.hasOwnProperty("FontColor") && t.uint32(442).string(e.FontColor), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MttTournamentInfoDetail; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.TournamentName = e.string();
                            break;
                        case 3:
                            o.TournamentNameI18N = e.string();
                            break;
                        case 4:
                            o.TournamentMode = e.uint32();
                            break;
                        case 5:
                            o.StartingTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 6:
                            o.EndingTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 7:
                            o.ShowingTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 8:
                            o.ShowingPosition = e.int32();
                            break;
                        case 9:
                            o.Seats = e.int32();
                            break;
                        case 10:
                            o.RegFee = e.double();
                            break;
                        case 11:
                            o.SrvFee = e.double();
                            break;
                        case 12:
                            o.Status = e.int32();
                            break;
                        case 13:
                            o.IsSatelliteMode = e.bool();
                            break;
                        case 14:
                            o.IsAipt = e.bool();
                            break;
                        case 15:
                            o.PlayOnJoint = e.uint32();
                            break;
                        case 16:
                            o.AllowSignupHours = e.uint32();
                            break;
                        case 17:
                            o.ThinkTime = e.int32();
                            break;
                        case 18:
                            o.MttMode = e.int32();
                            break;
                        case 19:
                            o.SpecialNameDisplay = e.int32();
                            break;
                        case 20:
                            o.DisplayTag = e.string();
                            break;
                        case 21:
                            o.FinalRoomId = e.int32();
                            break;
                        case 22:
                            o.FinalStarted = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 23:
                            o.IsCelebrity = e.bool();
                            break;
                        case 24:
                            o.TournamentInfo = e.string();
                            break;
                        case 25:
                            o.TournamentInfoI18N = e.string();
                            break;
                        case 26:
                            o.Desc = e.string();
                            break;
                        case 27:
                            o.DescI18N = e.string();
                            break;
                        case 28:
                            o.MultiFlightLevel = e.uint32();
                            break;
                        case 29:
                            o.DisplayCurrency = e.string();
                            break;
                        case 30:
                            o.GameMode = e.uint32();
                            break;
                        case 31:
                            o.GameInvitationCode = e.string();
                            break;
                        case 32:
                            o.Tag && o.Tag.length || (o.Tag = []), o.Tag.push(e.string());
                            break;
                        case 33:
                            o.SignUpOptions = e.string();
                            break;
                        case 34:
                            o.RegGoldType = e.int32();
                            break;
                        case 35:
                            o.OptionsEx = e.string();
                            break;
                        case 36:
                            o.LiveTour = e.bool();
                            break;
                        case 37:
                            o.Special = e.bool();
                            break;
                        case 38:
                            o.Private = e.bool();
                            break;
                        case 39:
                            o.Festival = e.bool();
                            break;
                        case 40:
                            o.MultiFlightId = e.uint32();
                            break;
                        case 41:
                            o.IsChampion = e.bool();
                            break;
                        case 42:
                            if (o.Banners && o.Banners.length || (o.Banners = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.Banners.push(e.int32());
                            else o.Banners.push(e.int32());
                            break;
                        case 43:
                            if (o.Icons && o.Icons.length || (o.Icons = []), 2 == (7 & r))
                                for (i = e.uint32() + e.pos; e.pos < i;) o.Icons.push(e.int32());
                            else o.Icons.push(e.int32());
                            break;
                        case 44:
                            o.MorebuyStatus = e.bool();
                            break;
                        case 45:
                            o.WPTDailyAsia = e.bool();
                            break;
                        case 46:
                            o.DailyPrime = e.bool();
                            break;
                        case 47:
                            o.BountyRumble = e.bool();
                            break;
                        case 48:
                            o.OneShot = e.bool();
                            break;
                        case 49:
                            o.HyperDash = e.bool();
                            break;
                        case 50:
                            o.WeeklyGoldenBounty = e.bool();
                            break;
                        case 51:
                            o.WPTMysteryMillion = e.bool();
                            break;
                        case 52:
                            o.BannerIconOffDisplay = e.bool();
                            break;
                        case 53:
                            o.CrazyFreeroll = e.bool();
                            break;
                        case 54:
                            o.WPTLive = e.bool();
                            break;
                        case 55:
                            o.FontColor = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Mtt_Tournament_List_Response = function() {
            function e(e) {
                if (this.TournamentInfos = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Mtt_Tournament_List_Response", e.prototype.ErrorCode = 0, e.prototype.TournamentInfos = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.TournamentInfos && e.TournamentInfos.length)
                    for (var n = 0; n < e.TournamentInfos.length; ++n) k.commonProto.MttTournamentInfo.encode(e.TournamentInfos[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Mtt_Tournament_List_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.TournamentInfos && o.TournamentInfos.length || (o.TournamentInfos = []), o.TournamentInfos.push(k.commonProto.MttTournamentInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Mtt_Broadcast_List_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Mtt_Broadcast_List_Request", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Mtt_Broadcast_List_Request; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Mtt_Broadcast_List_Response = function() {
            function e(e) {
                if (this.TournamentInfos = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Mtt_Broadcast_List_Response", e.prototype.ErrorCode = 0, e.prototype.TournamentInfos = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.TournamentInfos && e.TournamentInfos.length)
                    for (var n = 0; n < e.TournamentInfos.length; ++n) k.commonProto.MttTournamentInfo.encode(e.TournamentInfos[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Mtt_Broadcast_List_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.TournamentInfos && o.TournamentInfos.length || (o.TournamentInfos = []), o.TournamentInfos.push(k.commonProto.MttTournamentInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Mtt_Player_Count_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Mtt_Player_Count_Request", e.prototype.platForm = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.platForm && e.hasOwnProperty("platForm") && t.uint32(8).int32(e.platForm), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Mtt_Player_Count_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.platForm = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Mtt_Player_Count_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Mtt_Player_Count_Response", e.prototype.ErrorCode = 0, e.prototype.MttPlayerCount = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.MttPlayerCount && e.hasOwnProperty("MttPlayerCount") && t.uint32(16).uint32(e.MttPlayerCount), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Mtt_Player_Count_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.MttPlayerCount = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Mtt_RelateTournament_List_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Mtt_RelateTournament_List_Request", e.prototype.platForm = 0, e.prototype.targetTournamentId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.platForm && e.hasOwnProperty("platForm") && t.uint32(8).int32(e.platForm), null != e.targetTournamentId && e.hasOwnProperty("targetTournamentId") && t.uint32(16).uint32(e.targetTournamentId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Mtt_RelateTournament_List_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.platForm = e.int32();
                            break;
                        case 2:
                            o.targetTournamentId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Mtt_RelateTournament_List_Response = function() {
            function e(e) {
                if (this.UpstreamTournamentList = [], this.DownstreamSatelliteTournamentList = [], this.DownstreamFeederTournamentList = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Mtt_RelateTournament_List_Response", e.prototype.ErrorCode = 0, e.prototype.UpstreamTournamentList = b.emptyArray, e.prototype.DownstreamSatelliteTournamentList = b.emptyArray, e.prototype.DownstreamFeederTournamentList = b.emptyArray, e.prototype.TargetID = 0, e.prototype.Day2TournamentName = "", e.prototype.Day2TournamentNameI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.UpstreamTournamentList && e.UpstreamTournamentList.length)
                    for (var n = 0; n < e.UpstreamTournamentList.length; ++n) k.commonProto.MttTournamentInfo.encode(e.UpstreamTournamentList[n], t.uint32(18).fork()).ldelim();
                if (null != e.DownstreamSatelliteTournamentList && e.DownstreamSatelliteTournamentList.length)
                    for (n = 0; n < e.DownstreamSatelliteTournamentList.length; ++n) k.commonProto.MttTournamentInfo.encode(e.DownstreamSatelliteTournamentList[n], t.uint32(26).fork()).ldelim();
                if (null != e.DownstreamFeederTournamentList && e.DownstreamFeederTournamentList.length)
                    for (n = 0; n < e.DownstreamFeederTournamentList.length; ++n) k.commonProto.MttTournamentInfo.encode(e.DownstreamFeederTournamentList[n], t.uint32(34).fork()).ldelim();
                return null != e.TargetID && e.hasOwnProperty("TargetID") && t.uint32(40).uint32(e.TargetID), null != e.Day2TournamentName && e.hasOwnProperty("Day2TournamentName") && t.uint32(794).string(e.Day2TournamentName), null != e.Day2TournamentNameI18N && e.hasOwnProperty("Day2TournamentNameI18N") && t.uint32(802).string(e.Day2TournamentNameI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Mtt_RelateTournament_List_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.UpstreamTournamentList && o.UpstreamTournamentList.length || (o.UpstreamTournamentList = []), o.UpstreamTournamentList.push(k.commonProto.MttTournamentInfo.decode(e, e.uint32()));
                            break;
                        case 3:
                            o.DownstreamSatelliteTournamentList && o.DownstreamSatelliteTournamentList.length || (o.DownstreamSatelliteTournamentList = []), o.DownstreamSatelliteTournamentList.push(k.commonProto.MttTournamentInfo.decode(e, e.uint32()));
                            break;
                        case 4:
                            o.DownstreamFeederTournamentList && o.DownstreamFeederTournamentList.length || (o.DownstreamFeederTournamentList = []), o.DownstreamFeederTournamentList.push(k.commonProto.MttTournamentInfo.decode(e, e.uint32()));
                            break;
                        case 5:
                            o.TargetID = e.uint32();
                            break;
                        case 99:
                            o.Day2TournamentName = e.string();
                            break;
                        case 100:
                            o.Day2TournamentNameI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Spins_List_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Spins_List_Request", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Spins_List_Request; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Spins_List_Response = function() {
            function e(e) {
                if (this.Spins = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Spins_List_Response", e.prototype.ErrorCode = 0, e.prototype.Spins = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.Spins && e.Spins.length)
                    for (var n = 0; n < e.Spins.length; ++n) k.commonProto.SngTournament.encode(e.Spins[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Spins_List_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.Spins && o.Spins.length || (o.Spins = []), o.Spins.push(k.commonProto.SngTournament.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MiniGameRankListRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MiniGameRankListRequest", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MiniGameRankListRequest; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MiniGameRankListResponse = function() {
            function e(e) {
                if (this.RankList = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MiniGameRankListResponse", e.prototype.ErrorCode = 0, e.prototype.RankList = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.RankList && e.RankList.length)
                    for (var n = 0; n < e.RankList.length; ++n) k.commonProto.MiniGameRank.encode(e.RankList[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MiniGameRankListResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.RankList && o.RankList.length || (o.RankList = []), o.RankList.push(k.commonProto.MiniGameRank.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.MiniGameRank = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MiniGameRank", e.prototype.UserId = 0, e.prototype.Nickname = "", e.prototype.Rank = 0, e.prototype.WinCoins = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), null != e.Nickname && e.hasOwnProperty("Nickname") && t.uint32(18).string(e.Nickname), null != e.Rank && e.hasOwnProperty("Rank") && t.uint32(24).uint32(e.Rank), null != e.WinCoins && e.hasOwnProperty("WinCoins") && t.uint32(33).double(e.WinCoins), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.MiniGameRank; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        case 2:
                            o.Nickname = e.string();
                            break;
                        case 3:
                            o.Rank = e.uint32();
                            break;
                        case 4:
                            o.WinCoins = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.BLMiniGameEnterReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BLMiniGameEnterReq", e.prototype.MiniGameId = 0, e.prototype.Platform = 0, e.prototype.TicketId = b.Long ? b.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.MiniGameId && e.hasOwnProperty("MiniGameId") && t.uint32(8).uint32(e.MiniGameId), null != e.Platform && e.hasOwnProperty("Platform") && t.uint32(16).uint32(e.Platform), null != e.TicketId && e.hasOwnProperty("TicketId") && t.uint32(24).uint64(e.TicketId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.BLMiniGameEnterReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.MiniGameId = e.uint32();
                            break;
                        case 2:
                            o.Platform = e.uint32();
                            break;
                        case 3:
                            o.TicketId = e.uint64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.BLMiniGameEnterRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BLMiniGameEnterRes", e.prototype.ErrorCode = 0, e.prototype.Url = "", e.prototype.Token = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.Url && e.hasOwnProperty("Url") && t.uint32(18).string(e.Url), null != e.Token && e.hasOwnProperty("Token") && t.uint32(26).string(e.Token), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.BLMiniGameEnterRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.Url = e.string();
                            break;
                        case 3:
                            o.Token = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.BLMiniGameExitReq = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BLMiniGameExitReq", e.prototype.MiniGameId = 0, e.prototype.Platform = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.MiniGameId && e.hasOwnProperty("MiniGameId") && t.uint32(8).uint32(e.MiniGameId), null != e.Platform && e.hasOwnProperty("Platform") && t.uint32(16).uint32(e.Platform), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.BLMiniGameExitReq; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.MiniGameId = e.uint32();
                            break;
                        case 2:
                            o.Platform = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.BLMiniGameExitRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BLMiniGameExitRes", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.BLMiniGameExitRes; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.BLMiniGamesNotTakenOutRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BLMiniGamesNotTakenOutRequest", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.BLMiniGamesNotTakenOutRequest; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.BLMiniGamesNotTakenOutResponse = function() {
            function e(e) {
                if (this.Result = {}, e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BLMiniGamesNotTakenOutResponse", e.prototype.Result = b.emptyObject, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.Result && e.hasOwnProperty("Result"))
                    for (var n = Object.keys(e.Result), o = 0; o < n.length; ++o) t.uint32(10).fork().uint32(10).string(n[o]).uint32(16).bool(e.Result[n[o]]).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n, o = void 0 === t ? e.len : e.pos + t, r = new k.commonProto.BLMiniGamesNotTakenOutResponse; e.pos < o;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            e.skip().pos++, r.Result === b.emptyObject && (r.Result = {}), n = e.string(), e.pos++, r.Result[n] = e.bool();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.BLMiniGameActivityRewardsRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BLMiniGameActivityRewardsRequest", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.BLMiniGameActivityRewardsRequest; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.BLMiniGameActivityRewardsResponse = function() {
            function e(e) {
                if (this.ActivityRewards = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BLMiniGameActivityRewardsResponse", e.prototype.ActivityRewards = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ActivityRewards && e.ActivityRewards.length)
                    for (var n = 0; n < e.ActivityRewards.length; ++n) k.modelProto.CowboyHoldemActivityRewards.encode(e.ActivityRewards[n], t.uint32(10).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.BLMiniGameActivityRewardsResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ActivityRewards && o.ActivityRewards.length || (o.ActivityRewards = []), o.ActivityRewards.push(k.modelProto.CowboyHoldemActivityRewards.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.BLMiniGameReceiveActivityRewardRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BLMiniGameReceiveActivityRewardRequest", e.prototype.RewardId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.RewardId && e.hasOwnProperty("RewardId") && t.uint32(8).uint32(e.RewardId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.BLMiniGameReceiveActivityRewardRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.RewardId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.BLMiniGameReceiveActivityRewardResponse = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BLMiniGameReceiveActivityRewardResponse", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(16).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.BLMiniGameReceiveActivityRewardResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 2:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.BLMiniGameTakeInStatusRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BLMiniGameTakeInStatusRequest", e.prototype.MiniGameId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.MiniGameId && e.hasOwnProperty("MiniGameId") && t.uint32(8).uint32(e.MiniGameId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.BLMiniGameTakeInStatusRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.MiniGameId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.BLMiniGameTakeInStatusResponse = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "BLMiniGameTakeInStatusResponse", e.prototype.Status = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Status && e.hasOwnProperty("Status") && t.uint32(8).uint32(e.Status), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.BLMiniGameTakeInStatusResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Status = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Tool_In_Backpacks_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Tool_In_Backpacks_Request", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Tool_In_Backpacks_Request; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.ToolGiftPack = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "ToolGiftPack", e.prototype.Gift_Log_Id = 0, e.prototype.ToolInfos = null, e.prototype.Qty = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Gift_Log_Id && e.hasOwnProperty("Gift_Log_Id") && t.uint32(8).uint32(e.Gift_Log_Id), null != e.ToolInfos && e.hasOwnProperty("ToolInfos") && k.modelProto.Tool.encode(e.ToolInfos, t.uint32(18).fork()).ldelim(), null != e.Qty && e.hasOwnProperty("Qty") && t.uint32(24).uint32(e.Qty), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.ToolGiftPack; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Gift_Log_Id = e.uint32();
                            break;
                        case 2:
                            o.ToolInfos = k.modelProto.Tool.decode(e, e.uint32());
                            break;
                        case 3:
                            o.Qty = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Tool_Consume_IN_WPT = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Tool_Consume_IN_WPT", e.prototype.UserId = 0, e.prototype.UserName = "", e.prototype.PassportNo = "", e.prototype.Email = "", e.prototype.Phone = "", e.prototype.Channel = 0, e.prototype.Group = "", e.prototype.Created = null, e.prototype.ToolsInBackpackId = 0, e.prototype.ToolId = 0, e.prototype.Status = 0, e.prototype.CheckinTime = null, e.prototype.CheckoutTime = null, e.prototype.RoomType = "", e.prototype.Giftable = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(16).uint32(e.UserId), null != e.UserName && e.hasOwnProperty("UserName") && t.uint32(26).string(e.UserName), null != e.PassportNo && e.hasOwnProperty("PassportNo") && t.uint32(34).string(e.PassportNo), null != e.Email && e.hasOwnProperty("Email") && t.uint32(42).string(e.Email), null != e.Phone && e.hasOwnProperty("Phone") && t.uint32(50).string(e.Phone), null != e.Channel && e.hasOwnProperty("Channel") && t.uint32(56).uint32(e.Channel), null != e.Group && e.hasOwnProperty("Group") && t.uint32(66).string(e.Group), null != e.Created && e.hasOwnProperty("Created") && k.google.protobuf.Timestamp.encode(e.Created, t.uint32(74).fork()).ldelim(), null != e.ToolsInBackpackId && e.hasOwnProperty("ToolsInBackpackId") && t.uint32(80).uint32(e.ToolsInBackpackId), null != e.ToolId && e.hasOwnProperty("ToolId") && t.uint32(88).uint32(e.ToolId), null != e.Status && e.hasOwnProperty("Status") && t.uint32(96).int32(e.Status), null != e.CheckinTime && e.hasOwnProperty("CheckinTime") && k.google.protobuf.Timestamp.encode(e.CheckinTime, t.uint32(106).fork()).ldelim(), null != e.CheckoutTime && e.hasOwnProperty("CheckoutTime") && k.google.protobuf.Timestamp.encode(e.CheckoutTime, t.uint32(114).fork()).ldelim(), null != e.RoomType && e.hasOwnProperty("RoomType") && t.uint32(122).string(e.RoomType), null != e.Giftable && e.hasOwnProperty("Giftable") && t.uint32(128).bool(e.Giftable), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Tool_Consume_IN_WPT; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 2:
                            o.UserId = e.uint32();
                            break;
                        case 3:
                            o.UserName = e.string();
                            break;
                        case 4:
                            o.PassportNo = e.string();
                            break;
                        case 5:
                            o.Email = e.string();
                            break;
                        case 6:
                            o.Phone = e.string();
                            break;
                        case 7:
                            o.Channel = e.uint32();
                            break;
                        case 8:
                            o.Group = e.string();
                            break;
                        case 9:
                            o.Created = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 10:
                            o.ToolsInBackpackId = e.uint32();
                            break;
                        case 11:
                            o.ToolId = e.uint32();
                            break;
                        case 12:
                            o.Status = e.int32();
                            break;
                        case 13:
                            o.CheckinTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 14:
                            o.CheckoutTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 15:
                            o.RoomType = e.string();
                            break;
                        case 16:
                            o.Giftable = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Tool_In_Backpacks_Response = function() {
            function e(e) {
                if (this.ToolInBackpacks = [], this.ToolConsumptions = [], this.ToolConsumeInWPT = [], this.gifts = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Tool_In_Backpacks_Response", e.prototype.ErrorCode = 0, e.prototype.ToolInBackpacks = b.emptyArray, e.prototype.ToolConsumptions = b.emptyArray, e.prototype.ToolConsumeInWPT = b.emptyArray, e.prototype.gifts = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.ToolInBackpacks && e.ToolInBackpacks.length)
                    for (var n = 0; n < e.ToolInBackpacks.length; ++n) k.modelProto.ToolInBackpack.encode(e.ToolInBackpacks[n], t.uint32(18).fork()).ldelim();
                if (null != e.ToolConsumptions && e.ToolConsumptions.length)
                    for (n = 0; n < e.ToolConsumptions.length; ++n) k.modelProto.ToolConsumptions.encode(e.ToolConsumptions[n], t.uint32(26).fork()).ldelim();
                if (null != e.ToolConsumeInWPT && e.ToolConsumeInWPT.length)
                    for (n = 0; n < e.ToolConsumeInWPT.length; ++n) k.commonProto.Tool_Consume_IN_WPT.encode(e.ToolConsumeInWPT[n], t.uint32(34).fork()).ldelim();
                if (null != e.gifts && e.gifts.length)
                    for (n = 0; n < e.gifts.length; ++n) k.commonProto.Gift_Record.encode(e.gifts[n], t.uint32(42).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Tool_In_Backpacks_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.ToolInBackpacks && o.ToolInBackpacks.length || (o.ToolInBackpacks = []), o.ToolInBackpacks.push(k.modelProto.ToolInBackpack.decode(e, e.uint32()));
                            break;
                        case 3:
                            o.ToolConsumptions && o.ToolConsumptions.length || (o.ToolConsumptions = []), o.ToolConsumptions.push(k.modelProto.ToolConsumptions.decode(e, e.uint32()));
                            break;
                        case 4:
                            o.ToolConsumeInWPT && o.ToolConsumeInWPT.length || (o.ToolConsumeInWPT = []), o.ToolConsumeInWPT.push(k.commonProto.Tool_Consume_IN_WPT.decode(e, e.uint32()));
                            break;
                        case 5:
                            o.gifts && o.gifts.length || (o.gifts = []), o.gifts.push(k.commonProto.Gift_Record.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Gift_Record = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Gift_Record", e.prototype.UserId = 0, e.prototype.FromUserId = 0, e.prototype.FromUserName = "", e.prototype.ToUserId = 0, e.prototype.ToUserName = "", e.prototype.ToolId = 0, e.prototype.ToolName = "", e.prototype.Created = null, e.prototype.Remark = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), null != e.FromUserId && e.hasOwnProperty("FromUserId") && t.uint32(16).uint32(e.FromUserId), null != e.FromUserName && e.hasOwnProperty("FromUserName") && t.uint32(26).string(e.FromUserName), null != e.ToUserId && e.hasOwnProperty("ToUserId") && t.uint32(32).uint32(e.ToUserId), null != e.ToUserName && e.hasOwnProperty("ToUserName") && t.uint32(42).string(e.ToUserName), null != e.ToolId && e.hasOwnProperty("ToolId") && t.uint32(48).uint32(e.ToolId), null != e.ToolName && e.hasOwnProperty("ToolName") && t.uint32(58).string(e.ToolName), null != e.Created && e.hasOwnProperty("Created") && k.google.protobuf.Timestamp.encode(e.Created, t.uint32(66).fork()).ldelim(), null != e.Remark && e.hasOwnProperty("Remark") && t.uint32(74).string(e.Remark), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Gift_Record; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        case 2:
                            o.FromUserId = e.uint32();
                            break;
                        case 3:
                            o.FromUserName = e.string();
                            break;
                        case 4:
                            o.ToUserId = e.uint32();
                            break;
                        case 5:
                            o.ToUserName = e.string();
                            break;
                        case 6:
                            o.ToolId = e.uint32();
                            break;
                        case 7:
                            o.ToolName = e.string();
                            break;
                        case 8:
                            o.Created = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 9:
                            o.Remark = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Tool_Info_Request = function() {
            function e(e) {
                if (this.ToolIds = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Tool_Info_Request", e.prototype.ToolIds = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ToolIds && e.ToolIds.length) {
                    t.uint32(10).fork();
                    for (var n = 0; n < e.ToolIds.length; ++n) t.uint32(e.ToolIds[n]);
                    t.ldelim()
                }
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Tool_Info_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            if (o.ToolIds && o.ToolIds.length || (o.ToolIds = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.ToolIds.push(e.uint32());
                            else o.ToolIds.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Tool_Info_Response = function() {
            function e(e) {
                if (this.ToolInfos = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Tool_Info_Response", e.prototype.ErrorCode = 0, e.prototype.ToolInfos = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.ToolInfos && e.ToolInfos.length)
                    for (var n = 0; n < e.ToolInfos.length; ++n) k.modelProto.Tool.encode(e.ToolInfos[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Tool_Info_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.ToolInfos && o.ToolInfos.length || (o.ToolInfos = []), o.ToolInfos.push(k.modelProto.Tool.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Tool_In_Backpack_Redeem_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Tool_In_Backpack_Redeem_Request", e.prototype.ToolInBackpackId = 0, e.prototype.UserId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ToolInBackpackId && e.hasOwnProperty("ToolInBackpackId") && t.uint32(8).uint32(e.ToolInBackpackId), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(16).uint32(e.UserId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Tool_In_Backpack_Redeem_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ToolInBackpackId = e.uint32();
                            break;
                        case 2:
                            o.UserId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Tool_In_Backpack_Redeem_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Tool_In_Backpack_Redeem_Response", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Tool_In_Backpack_Redeem_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Tool_In_Backpack_Gift_Request = function() {
            function e(e) {
                if (this.ToolInBackpackIds = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Tool_In_Backpack_Gift_Request", e.prototype.ToUserId = 0, e.prototype.ToolInBackpackIds = b.emptyArray, e.prototype.WPT = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ToUserId && e.hasOwnProperty("ToUserId") && t.uint32(8).uint32(e.ToUserId), null != e.ToolInBackpackIds && e.ToolInBackpackIds.length) {
                    t.uint32(18).fork();
                    for (var n = 0; n < e.ToolInBackpackIds.length; ++n) t.uint32(e.ToolInBackpackIds[n]);
                    t.ldelim()
                }
                return null != e.WPT && e.hasOwnProperty("WPT") && t.uint32(24).bool(e.WPT), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Tool_In_Backpack_Gift_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ToUserId = e.uint32();
                            break;
                        case 2:
                            if (o.ToolInBackpackIds && o.ToolInBackpackIds.length || (o.ToolInBackpackIds = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.ToolInBackpackIds.push(e.uint32());
                            else o.ToolInBackpackIds.push(e.uint32());
                            break;
                        case 3:
                            o.WPT = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Tool_In_Backpack_Gift_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Tool_In_Backpack_Gift_Response", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Tool_In_Backpack_Gift_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Tool_Admin_Gift_Msg = function() {
            function e(e) {
                if (this.ToolGiftPacks = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Tool_Admin_Gift_Msg", e.prototype.ToolGiftPacks = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ToolGiftPacks && e.ToolGiftPacks.length)
                    for (var n = 0; n < e.ToolGiftPacks.length; ++n) k.commonProto.Tool_Admin_Gift_Msg.ToolGiftPack.encode(e.ToolGiftPacks[n], t.uint32(10).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Tool_Admin_Gift_Msg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ToolGiftPacks && o.ToolGiftPacks.length || (o.ToolGiftPacks = []), o.ToolGiftPacks.push(k.commonProto.Tool_Admin_Gift_Msg.ToolGiftPack.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e.ToolGiftPack = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.pbName = "ToolGiftPack", e.prototype.Gift_Log_Id = 0, e.prototype.ToolInfos = null, e.prototype.Qty = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = h.create()), null != e.Gift_Log_Id && e.hasOwnProperty("Gift_Log_Id") && t.uint32(8).uint32(e.Gift_Log_Id), null != e.ToolInfos && e.hasOwnProperty("ToolInfos") && k.modelProto.Tool.encode(e.ToolInfos, t.uint32(18).fork()).ldelim(), null != e.Qty && e.hasOwnProperty("Qty") && t.uint32(24).uint32(e.Qty), t
                }, e.prototype.encode = function() {
                    return e.encode(this).finish()
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof y || (e = y.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Tool_Admin_Gift_Msg.ToolGiftPack; e.pos < n;) {
                        var r = e.uint32();
                        switch (r >>> 3) {
                            case 1:
                                o.Gift_Log_Id = e.uint32();
                                break;
                            case 2:
                                o.ToolInfos = k.modelProto.Tool.decode(e, e.uint32());
                                break;
                            case 3:
                                o.Qty = e.uint32();
                                break;
                            default:
                                e.skipType(7 & r)
                        }
                    }
                    return o
                }, e.decodeDelimited = function(e) {
                    return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
                }, e
            }(), e
        }(), p.Tool_WPT_Register_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Tool_WPT_Register_Request", e.prototype.UserName = "", e.prototype.PassportNo = "", e.prototype.Email = "", e.prototype.Phone = "", e.prototype.Channel = 0, e.prototype.Group = "", e.prototype.ToolsInBackpackId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserName && e.hasOwnProperty("UserName") && t.uint32(10).string(e.UserName), null != e.PassportNo && e.hasOwnProperty("PassportNo") && t.uint32(18).string(e.PassportNo), null != e.Email && e.hasOwnProperty("Email") && t.uint32(26).string(e.Email), null != e.Phone && e.hasOwnProperty("Phone") && t.uint32(34).string(e.Phone), null != e.Channel && e.hasOwnProperty("Channel") && t.uint32(40).uint32(e.Channel), null != e.Group && e.hasOwnProperty("Group") && t.uint32(50).string(e.Group), null != e.ToolsInBackpackId && e.hasOwnProperty("ToolsInBackpackId") && t.uint32(56).uint32(e.ToolsInBackpackId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Tool_WPT_Register_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserName = e.string();
                            break;
                        case 2:
                            o.PassportNo = e.string();
                            break;
                        case 3:
                            o.Email = e.string();
                            break;
                        case 4:
                            o.Phone = e.string();
                            break;
                        case 5:
                            o.Channel = e.uint32();
                            break;
                        case 6:
                            o.Group = e.string();
                            break;
                        case 7:
                            o.ToolsInBackpackId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Tool_WPT_Register_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Tool_WPT_Register_Response", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Tool_WPT_Register_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Tool_WPT_Hotel_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Tool_WPT_Hotel_Request", e.prototype.UserName = "", e.prototype.CheckinTime = null, e.prototype.CheckoutTime = null, e.prototype.PassportNo = "", e.prototype.Email = "", e.prototype.RoomType = "", e.prototype.ToolsInBackpackId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserName && e.hasOwnProperty("UserName") && t.uint32(10).string(e.UserName), null != e.CheckinTime && e.hasOwnProperty("CheckinTime") && k.google.protobuf.Timestamp.encode(e.CheckinTime, t.uint32(18).fork()).ldelim(), null != e.CheckoutTime && e.hasOwnProperty("CheckoutTime") && k.google.protobuf.Timestamp.encode(e.CheckoutTime, t.uint32(26).fork()).ldelim(), null != e.PassportNo && e.hasOwnProperty("PassportNo") && t.uint32(34).string(e.PassportNo), null != e.Email && e.hasOwnProperty("Email") && t.uint32(42).string(e.Email), null != e.RoomType && e.hasOwnProperty("RoomType") && t.uint32(50).string(e.RoomType), null != e.ToolsInBackpackId && e.hasOwnProperty("ToolsInBackpackId") && t.uint32(56).uint32(e.ToolsInBackpackId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Tool_WPT_Hotel_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserName = e.string();
                            break;
                        case 2:
                            o.CheckinTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 3:
                            o.CheckoutTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 4:
                            o.PassportNo = e.string();
                            break;
                        case 5:
                            o.Email = e.string();
                            break;
                        case 6:
                            o.RoomType = e.string();
                            break;
                        case 7:
                            o.ToolsInBackpackId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Tool_WPT_Hotel_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Tool_WPT_Hotel_Response", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Tool_WPT_Hotel_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Ping = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Ping", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Ping; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Pong = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Pong", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Pong; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Login_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Login_Request", e.prototype.AreaCode = "", e.prototype.Mobile = "", e.prototype.Password = "", e.prototype.Username = "", e.prototype.JPushRegistrationID = "", e.prototype.ClientType = 0, e.prototype.ClientVersion = "", e.prototype.device = "", e.prototype.environment = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.AreaCode && e.hasOwnProperty("AreaCode") && t.uint32(10).string(e.AreaCode), null != e.Mobile && e.hasOwnProperty("Mobile") && t.uint32(18).string(e.Mobile), null != e.Password && e.hasOwnProperty("Password") && t.uint32(26).string(e.Password), null != e.Username && e.hasOwnProperty("Username") && t.uint32(34).string(e.Username), null != e.JPushRegistrationID && e.hasOwnProperty("JPushRegistrationID") && t.uint32(42).string(e.JPushRegistrationID), null != e.ClientType && e.hasOwnProperty("ClientType") && t.uint32(48).uint32(e.ClientType), null != e.ClientVersion && e.hasOwnProperty("ClientVersion") && t.uint32(58).string(e.ClientVersion), null != e.device && e.hasOwnProperty("device") && t.uint32(66).string(e.device), null != e.environment && e.hasOwnProperty("environment") && t.uint32(74).string(e.environment), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Login_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.AreaCode = e.string();
                            break;
                        case 2:
                            o.Mobile = e.string();
                            break;
                        case 3:
                            o.Password = e.string();
                            break;
                        case 4:
                            o.Username = e.string();
                            break;
                        case 5:
                            o.JPushRegistrationID = e.string();
                            break;
                        case 6:
                            o.ClientType = e.uint32();
                            break;
                        case 7:
                            o.ClientVersion = e.string();
                            break;
                        case 8:
                            o.device = e.string();
                            break;
                        case 9:
                            o.environment = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Login_Response = function() {
            function e(e) {
                if (this.Games = [], this.AgentCodes = {}, this.JoinedTournaments = [], this.CurrentGames = [], this.ImpokerAgents = [], this.BLMiniGamesNotTakenOut = {}, e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Login_Response", e.prototype.ErrorCode = 0, e.prototype.Token = "", e.prototype.UserData = null, e.prototype.Games = b.emptyArray, e.prototype.AgentCodes = b.emptyObject, e.prototype.DefaultAgentCode = "", e.prototype.JoinedTournaments = b.emptyArray, e.prototype.ServerTime = null, e.prototype.OwnAssociationId = 0, e.prototype.CurrentGames = b.emptyArray, e.prototype.OwnParentAssociationId = 0, e.prototype.ImpokerAgents = b.emptyArray, e.prototype.BLMiniGamesNotTakenOut = b.emptyObject, e.prototype.LastInputErrPwdTime = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.prototype.failedMessage = "", e.prototype.failedMessageI18N = "", e.prototype.broadcast_Status = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.Token && e.hasOwnProperty("Token") && t.uint32(18).string(e.Token), null != e.UserData && e.hasOwnProperty("UserData") && k.modelProto.User.encode(e.UserData, t.uint32(26).fork()).ldelim(), null != e.Games && e.Games.length)
                    for (var n = 0; n < e.Games.length; ++n) k.commonProto.Game_Info.encode(e.Games[n], t.uint32(34).fork()).ldelim();
                if (null != e.AgentCodes && e.hasOwnProperty("AgentCodes")) {
                    var o = Object.keys(e.AgentCodes);
                    for (n = 0; n < o.length; ++n) t.uint32(42).fork().uint32(10).string(o[n]).uint32(18).string(e.AgentCodes[o[n]]).ldelim()
                }
                if (null != e.DefaultAgentCode && e.hasOwnProperty("DefaultAgentCode") && t.uint32(50).string(e.DefaultAgentCode), null != e.JoinedTournaments && e.JoinedTournaments.length)
                    for (n = 0; n < e.JoinedTournaments.length; ++n) k.commonProto.User_Mtt_Join_Info.encode(e.JoinedTournaments[n], t.uint32(58).fork()).ldelim();
                if (null != e.ServerTime && e.hasOwnProperty("ServerTime") && k.google.protobuf.Timestamp.encode(e.ServerTime, t.uint32(66).fork()).ldelim(), null != e.OwnAssociationId && e.hasOwnProperty("OwnAssociationId") && t.uint32(88).uint32(e.OwnAssociationId), null != e.CurrentGames && e.CurrentGames.length)
                    for (n = 0; n < e.CurrentGames.length; ++n) k.commonProto.User_Current_Game.encode(e.CurrentGames[n], t.uint32(98).fork()).ldelim();
                if (null != e.OwnParentAssociationId && e.hasOwnProperty("OwnParentAssociationId") && t.uint32(104).uint32(e.OwnParentAssociationId), null != e.ImpokerAgents && e.ImpokerAgents.length)
                    for (n = 0; n < e.ImpokerAgents.length; ++n) k.commonProto.ImpokerAgentData.encode(e.ImpokerAgents[n], t.uint32(114).fork()).ldelim();
                if (null != e.BLMiniGamesNotTakenOut && e.hasOwnProperty("BLMiniGamesNotTakenOut"))
                    for (o = Object.keys(e.BLMiniGamesNotTakenOut), n = 0; n < o.length; ++n) t.uint32(122).fork().uint32(10).string(o[n]).uint32(16).bool(e.BLMiniGamesNotTakenOut[o[n]]).ldelim();
                return null != e.LastInputErrPwdTime && e.hasOwnProperty("LastInputErrPwdTime") && t.uint32(128).int64(e.LastInputErrPwdTime), null != e.failedMessage && e.hasOwnProperty("failedMessage") && t.uint32(138).string(e.failedMessage), null != e.failedMessageI18N && e.hasOwnProperty("failedMessageI18N") && t.uint32(146).string(e.failedMessageI18N), null != e.broadcast_Status && e.hasOwnProperty("broadcast_Status") && t.uint32(152).bool(e.broadcast_Status), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n, o = void 0 === t ? e.len : e.pos + t, r = new k.commonProto.User_Login_Response; e.pos < o;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.ErrorCode = e.int32();
                            break;
                        case 2:
                            r.Token = e.string();
                            break;
                        case 3:
                            r.UserData = k.modelProto.User.decode(e, e.uint32());
                            break;
                        case 4:
                            r.Games && r.Games.length || (r.Games = []), r.Games.push(k.commonProto.Game_Info.decode(e, e.uint32()));
                            break;
                        case 5:
                            e.skip().pos++, r.AgentCodes === b.emptyObject && (r.AgentCodes = {}), n = e.string(), e.pos++, r.AgentCodes[n] = e.string();
                            break;
                        case 6:
                            r.DefaultAgentCode = e.string();
                            break;
                        case 7:
                            r.JoinedTournaments && r.JoinedTournaments.length || (r.JoinedTournaments = []), r.JoinedTournaments.push(k.commonProto.User_Mtt_Join_Info.decode(e, e.uint32()));
                            break;
                        case 8:
                            r.ServerTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 11:
                            r.OwnAssociationId = e.uint32();
                            break;
                        case 12:
                            r.CurrentGames && r.CurrentGames.length || (r.CurrentGames = []), r.CurrentGames.push(k.commonProto.User_Current_Game.decode(e, e.uint32()));
                            break;
                        case 13:
                            r.OwnParentAssociationId = e.uint32();
                            break;
                        case 14:
                            r.ImpokerAgents && r.ImpokerAgents.length || (r.ImpokerAgents = []), r.ImpokerAgents.push(k.commonProto.ImpokerAgentData.decode(e, e.uint32()));
                            break;
                        case 15:
                            e.skip().pos++, r.BLMiniGamesNotTakenOut === b.emptyObject && (r.BLMiniGamesNotTakenOut = {}), n = e.string(), e.pos++, r.BLMiniGamesNotTakenOut[n] = e.bool();
                            break;
                        case 16:
                            r.LastInputErrPwdTime = e.int64();
                            break;
                        case 17:
                            r.failedMessage = e.string();
                            break;
                        case 18:
                            r.failedMessageI18N = e.string();
                            break;
                        case 19:
                            r.broadcast_Status = e.bool();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Joined_Games_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Joined_Games_Request", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Joined_Games_Request; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Joined_Games_Response = function() {
            function e(e) {
                if (this.CurrentGames = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Joined_Games_Response", e.prototype.CurrentGames = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.CurrentGames && e.CurrentGames.length)
                    for (var n = 0; n < e.CurrentGames.length; ++n) k.commonProto.User_Current_Game.encode(e.CurrentGames[n], t.uint32(10).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Joined_Games_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.CurrentGames && o.CurrentGames.length || (o.CurrentGames = []), o.CurrentGames.push(k.commonProto.User_Current_Game.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Banner_Event_Msg = function() {
            function e(e) {
                if (this.Banners = [], this.Events = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Banner_Event_Msg", e.prototype.Banners = b.emptyArray, e.prototype.Events = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.Banners && e.Banners.length)
                    for (var n = 0; n < e.Banners.length; ++n) k.modelProto.Banner.encode(e.Banners[n], t.uint32(74).fork()).ldelim();
                if (null != e.Events && e.Events.length)
                    for (n = 0; n < e.Events.length; ++n) k.modelProto.Events.encode(e.Events[n], t.uint32(82).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Banner_Event_Msg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 9:
                            o.Banners && o.Banners.length || (o.Banners = []), o.Banners.push(k.modelProto.Banner.decode(e, e.uint32()));
                            break;
                        case 10:
                            o.Events && o.Events.length || (o.Events = []), o.Events.push(k.modelProto.Events.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Current_Game = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Current_Game", e.prototype.Category = 0, e.prototype.SngMttLevelId = 0, e.prototype.RoomId = 0, e.prototype.GameName = "", e.prototype.GameMode = 0, e.prototype.GameNameI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Category && e.hasOwnProperty("Category") && t.uint32(8).int32(e.Category), null != e.SngMttLevelId && e.hasOwnProperty("SngMttLevelId") && t.uint32(16).uint32(e.SngMttLevelId), null != e.RoomId && e.hasOwnProperty("RoomId") && t.uint32(24).uint32(e.RoomId), null != e.GameName && e.hasOwnProperty("GameName") && t.uint32(34).string(e.GameName), null != e.GameMode && e.hasOwnProperty("GameMode") && t.uint32(40).uint32(e.GameMode), null != e.GameNameI18N && e.hasOwnProperty("GameNameI18N") && t.uint32(50).string(e.GameNameI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Current_Game; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Category = e.int32();
                            break;
                        case 2:
                            o.SngMttLevelId = e.uint32();
                            break;
                        case 3:
                            o.RoomId = e.uint32();
                            break;
                        case 4:
                            o.GameName = e.string();
                            break;
                        case 5:
                            o.GameMode = e.uint32();
                            break;
                        case 6:
                            o.GameNameI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Logout_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Logout_Response", e.prototype.ErrorCode = 0, e.prototype.FailMessage = "", e.prototype.FailMessageI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.FailMessage && e.hasOwnProperty("FailMessage") && t.uint32(18).string(e.FailMessage), null != e.FailMessageI18N && e.hasOwnProperty("FailMessageI18N") && t.uint32(26).string(e.FailMessageI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Logout_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.FailMessage = e.string();
                            break;
                        case 3:
                            o.FailMessageI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Info_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Info_Request", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Info_Request; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Info_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Info_Response", e.prototype.ErrorCode = 0, e.prototype.UserData = null, e.prototype.broadcast_Status = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.UserData && e.hasOwnProperty("UserData") && k.modelProto.User.encode(e.UserData, t.uint32(18).fork()).ldelim(), null != e.broadcast_Status && e.hasOwnProperty("broadcast_Status") && t.uint32(24).bool(e.broadcast_Status), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Info_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.UserData = k.modelProto.User.decode(e, e.uint32());
                            break;
                        case 3:
                            o.broadcast_Status = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Login_Frequently_Msg = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Login_Frequently_Msg", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Login_Frequently_Msg; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Update_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Update_Request", e.prototype.UserData = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserData && e.hasOwnProperty("UserData") && k.modelProto.User.encode(e.UserData, t.uint32(10).fork()).ldelim(), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Update_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserData = k.modelProto.User.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Update_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Update_Response", e.prototype.ErrorCode = 0, e.prototype.UserData = null, e.prototype.broadcast_Status = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.UserData && e.hasOwnProperty("UserData") && k.modelProto.User.encode(e.UserData, t.uint32(18).fork()).ldelim(), null != e.broadcast_Status && e.hasOwnProperty("broadcast_Status") && t.uint32(24).bool(e.broadcast_Status), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Update_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.UserData = k.modelProto.User.decode(e, e.uint32());
                            break;
                        case 3:
                            o.broadcast_Status = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Nickname_Update_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Nickname_Update_Request", e.prototype.UserId = 0, e.prototype.Nickname = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), null != e.Nickname && e.hasOwnProperty("Nickname") && t.uint32(18).string(e.Nickname), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Nickname_Update_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        case 2:
                            o.Nickname = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Nickname_Update_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Nickname_Update_Response", e.prototype.ErrorCode = 0, e.prototype.UserGold = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.UserGold && e.hasOwnProperty("UserGold") && t.uint32(17).double(e.UserGold), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Nickname_Update_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.UserGold = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Update_Language_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Update_Language_Request", e.prototype.UserId = 0, e.prototype.Language = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), null != e.Language && e.hasOwnProperty("Language") && t.uint32(18).string(e.Language), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Update_Language_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        case 2:
                            o.Language = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Update_Language_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Update_Language_Response", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Update_Language_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Nickname_Check_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Nickname_Check_Request", e.prototype.Nickname = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Nickname && e.hasOwnProperty("Nickname") && t.uint32(10).string(e.Nickname), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Nickname_Check_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Nickname = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Nickname_Check_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Nickname_Check_Response", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Nickname_Check_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Info_Updated = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Info_Updated", e.prototype.type = 0, e.prototype.UserData = null, e.prototype.broadcast_Status = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.type && e.hasOwnProperty("type") && t.uint32(8).int32(e.type), null != e.UserData && e.hasOwnProperty("UserData") && k.modelProto.User.encode(e.UserData, t.uint32(18).fork()).ldelim(), null != e.broadcast_Status && e.hasOwnProperty("broadcast_Status") && t.uint32(24).bool(e.broadcast_Status), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Info_Updated; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.type = e.int32();
                            break;
                        case 2:
                            o.UserData = k.modelProto.User.decode(e, e.uint32());
                            break;
                        case 3:
                            o.broadcast_Status = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.RebuyFlag = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "NULL"] = 0, t[e[1] = "Rebuy"] = 1, t[e[2] = "MoreBuy"] = 2, t
        }(), p.User_Mtt_Join_Info = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Mtt_Join_Info", e.prototype.TournamentId = 0, e.prototype.JoinStatus = 0, e.prototype.AutoFeed = !1, e.prototype.UserRebuyFlag = 0, e.prototype.MyRank = 0, e.prototype.CoinLeft = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(8).uint32(e.TournamentId), null != e.JoinStatus && e.hasOwnProperty("JoinStatus") && t.uint32(16).int32(e.JoinStatus), null != e.AutoFeed && e.hasOwnProperty("AutoFeed") && t.uint32(24).bool(e.AutoFeed), null != e.UserRebuyFlag && e.hasOwnProperty("UserRebuyFlag") && t.uint32(32).int32(e.UserRebuyFlag), null != e.MyRank && e.hasOwnProperty("MyRank") && t.uint32(40).uint32(e.MyRank), null != e.CoinLeft && e.hasOwnProperty("CoinLeft") && t.uint32(49).double(e.CoinLeft), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Mtt_Join_Info; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TournamentId = e.uint32();
                            break;
                        case 2:
                            o.JoinStatus = e.int32();
                            break;
                        case 3:
                            o.AutoFeed = e.bool();
                            break;
                        case 4:
                            o.UserRebuyFlag = e.int32();
                            break;
                        case 5:
                            o.MyRank = e.uint32();
                            break;
                        case 6:
                            o.CoinLeft = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Legacy_Impoker_Login_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Legacy_Impoker_Login_Request", e.prototype.username = "", e.prototype.password = "", e.prototype.platform = "", e.prototype.areaCode = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.username && e.hasOwnProperty("username") && t.uint32(10).string(e.username), null != e.password && e.hasOwnProperty("password") && t.uint32(18).string(e.password), null != e.platform && e.hasOwnProperty("platform") && t.uint32(26).string(e.platform), null != e.areaCode && e.hasOwnProperty("areaCode") && t.uint32(34).string(e.areaCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Legacy_Impoker_Login_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.username = e.string();
                            break;
                        case 2:
                            o.password = e.string();
                            break;
                        case 3:
                            o.platform = e.string();
                            break;
                        case 4:
                            o.areaCode = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Legacy_Impoker_Login_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Legacy_Impoker_Login_Response", e.prototype.errorCode = 0, e.prototype.balance = 0, e.prototype.message = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.errorCode && e.hasOwnProperty("errorCode") && t.uint32(8).int32(e.errorCode), null != e.balance && e.hasOwnProperty("balance") && t.uint32(17).double(e.balance), null != e.message && e.hasOwnProperty("message") && t.uint32(26).string(e.message), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Legacy_Impoker_Login_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.errorCode = e.int32();
                            break;
                        case 2:
                            o.balance = e.double();
                            break;
                        case 3:
                            o.message = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Transfer_From_Impoker_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Transfer_From_Impoker_Request", e.prototype.amount = 0, e.prototype.smsCode = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.amount && e.hasOwnProperty("amount") && t.uint32(9).double(e.amount), null != e.smsCode && e.hasOwnProperty("smsCode") && t.uint32(18).string(e.smsCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Transfer_From_Impoker_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.amount = e.double();
                            break;
                        case 2:
                            o.smsCode = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Transfer_From_Impoker_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Transfer_From_Impoker_Response", e.prototype.errorCode = 0, e.prototype.message = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.errorCode && e.hasOwnProperty("errorCode") && t.uint32(8).int32(e.errorCode), null != e.message && e.hasOwnProperty("message") && t.uint32(18).string(e.message), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Transfer_From_Impoker_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.errorCode = e.int32();
                            break;
                        case 2:
                            o.message = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Withdraw_Password_Verification_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Withdraw_Password_Verification_Request", e.prototype.WithdrawPassword = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.WithdrawPassword && e.hasOwnProperty("WithdrawPassword") && t.uint32(10).string(e.WithdrawPassword), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Withdraw_Password_Verification_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.WithdrawPassword = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Withdraw_Password_Verification_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Withdraw_Password_Verification_Response", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Withdraw_Password_Verification_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Withdraw_Password_Forget_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Withdraw_Password_Forget_Request", e.prototype.VerificationCode = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.VerificationCode && e.hasOwnProperty("VerificationCode") && t.uint32(10).string(e.VerificationCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Withdraw_Password_Forget_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.VerificationCode = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Withdraw_Password_Forget_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Withdraw_Password_Forget_Response", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Withdraw_Password_Forget_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Withdraw_Password_Reset_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Withdraw_Password_Reset_Request", e.prototype.WithdrawPassword = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.WithdrawPassword && e.hasOwnProperty("WithdrawPassword") && t.uint32(10).string(e.WithdrawPassword), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Withdraw_Password_Reset_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.WithdrawPassword = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Withdraw_Password_Reset_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Withdraw_Password_Reset_Response", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Withdraw_Password_Reset_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Transfer_To_Coffer_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Transfer_To_Coffer_Request", e.prototype.Amount = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Amount && e.hasOwnProperty("Amount") && t.uint32(9).double(e.Amount), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Transfer_To_Coffer_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Amount = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Transfer_To_Coffer_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Transfer_To_Coffer_Response", e.prototype.ErrorCode = 0, e.prototype.Gold = 0, e.prototype.CofferGold = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.Gold && e.hasOwnProperty("Gold") && t.uint32(17).double(e.Gold), null != e.CofferGold && e.hasOwnProperty("CofferGold") && t.uint32(25).double(e.CofferGold), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Transfer_To_Coffer_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.Gold = e.double();
                            break;
                        case 3:
                            o.CofferGold = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Transfer_Coffer_Log_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Transfer_Coffer_Log_Request", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Transfer_Coffer_Log_Request; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Transfer_Coffer_Log_Response = function() {
            function e(e) {
                if (this.TransferCofferLogs = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Transfer_Coffer_Log_Response", e.prototype.TransferCofferLogs = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.TransferCofferLogs && e.TransferCofferLogs.length)
                    for (var n = 0; n < e.TransferCofferLogs.length; ++n) k.modelProto.TransferCofferLog.encode(e.TransferCofferLogs[n], t.uint32(10).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Transfer_Coffer_Log_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TransferCofferLogs && o.TransferCofferLogs.length || (o.TransferCofferLogs = []), o.TransferCofferLogs.push(k.modelProto.TransferCofferLog.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Search_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Search_Request", e.prototype.SearchForeignId = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.SearchForeignId && e.hasOwnProperty("SearchForeignId") && t.uint32(10).string(e.SearchForeignId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Search_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.SearchForeignId = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Search_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Search_Response", e.prototype.ErrorCode = 0, e.prototype.UserId = 0, e.prototype.ForeignId = "", e.prototype.Nickname = "", e.prototype.Avatar = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(16).uint32(e.UserId), null != e.ForeignId && e.hasOwnProperty("ForeignId") && t.uint32(26).string(e.ForeignId), null != e.Nickname && e.hasOwnProperty("Nickname") && t.uint32(34).string(e.Nickname), null != e.Avatar && e.hasOwnProperty("Avatar") && t.uint32(42).string(e.Avatar), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Search_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.UserId = e.uint32();
                            break;
                        case 3:
                            o.ForeignId = e.string();
                            break;
                        case 4:
                            o.Nickname = e.string();
                            break;
                        case 5:
                            o.Avatar = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.System_Status = function() {
            function e(e) {
                if (this.disabledFeatures = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "System_Status", e.prototype.disabledFeatures = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.disabledFeatures && e.disabledFeatures.length) {
                    t.uint32(10).fork();
                    for (var n = 0; n < e.disabledFeatures.length; ++n) t.int32(e.disabledFeatures[n]);
                    t.ldelim()
                }
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.System_Status; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            if (o.disabledFeatures && o.disabledFeatures.length || (o.disabledFeatures = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.disabledFeatures.push(e.int32());
                            else o.disabledFeatures.push(e.int32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Lottery_User_Info = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Lottery_User_Info", e.prototype.UserId = 0, e.prototype.Nickname = "", e.prototype.ForeignId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(8).uint32(e.UserId), null != e.Nickname && e.hasOwnProperty("Nickname") && t.uint32(18).string(e.Nickname), null != e.ForeignId && e.hasOwnProperty("ForeignId") && t.uint32(24).uint32(e.ForeignId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Lottery_User_Info; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UserId = e.uint32();
                            break;
                        case 2:
                            o.Nickname = e.string();
                            break;
                        case 3:
                            o.ForeignId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Lottery_Info = function() {
            function e(e) {
                if (this.user = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Lottery_Info", e.prototype.lotteryEvent = null, e.prototype.user = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.lotteryEvent && e.hasOwnProperty("lotteryEvent") && k.modelProto.LotteryEvent.encode(e.lotteryEvent, t.uint32(10).fork()).ldelim(), null != e.user && e.user.length)
                    for (var n = 0; n < e.user.length; ++n) k.commonProto.Lottery_User_Info.encode(e.user[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Lottery_Info; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.lotteryEvent = k.modelProto.LotteryEvent.decode(e, e.uint32());
                            break;
                        case 2:
                            o.user && o.user.length || (o.user = []), o.user.push(k.commonProto.Lottery_User_Info.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Lottery_Info_List_Msg = function() {
            function e(e) {
                if (this.lotteryInfoList = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Lottery_Info_List_Msg", e.prototype.lotteryInfoList = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.lotteryInfoList && e.lotteryInfoList.length)
                    for (var n = 0; n < e.lotteryInfoList.length; ++n) k.commonProto.Lottery_Info.encode(e.lotteryInfoList[n], t.uint32(10).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Lottery_Info_List_Msg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.lotteryInfoList && o.lotteryInfoList.length || (o.lotteryInfoList = []), o.lotteryInfoList.push(k.commonProto.Lottery_Info.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Lottery_Info_Add_Msg = function() {
            function e(e) {
                if (this.lotteryInfoList = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Lottery_Info_Add_Msg", e.prototype.lotteryInfoList = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.lotteryInfoList && e.lotteryInfoList.length)
                    for (var n = 0; n < e.lotteryInfoList.length; ++n) k.commonProto.Lottery_Info.encode(e.lotteryInfoList[n], t.uint32(10).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Lottery_Info_Add_Msg; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.lotteryInfoList && o.lotteryInfoList.length || (o.lotteryInfoList = []), o.lotteryInfoList.push(k.commonProto.Lottery_Info.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Lottery_Info_Del = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Lottery_Info_Del", e.prototype.EventId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.EventId && e.hasOwnProperty("EventId") && t.uint32(8).uint32(e.EventId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Lottery_Info_Del; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.EventId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Lottery_Hit = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Lottery_Hit", e.prototype.EventId = 0, e.prototype.userId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.EventId && e.hasOwnProperty("EventId") && t.uint32(8).uint32(e.EventId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Lottery_Hit; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.EventId = e.uint32();
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
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Player_Joined_Tournaments_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Player_Joined_Tournaments_Request", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Player_Joined_Tournaments_Request; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Player_Joined_Tournaments_Response = function() {
            function e(e) {
                if (this.MttList = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Player_Joined_Tournaments_Response", e.prototype.ErrorCode = 0, e.prototype.MttList = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.MttList && e.MttList.length)
                    for (var n = 0; n < e.MttList.length; ++n) k.commonProto.User_Mtt_Join_Info.encode(e.MttList[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Player_Joined_Tournaments_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.MttList && o.MttList.length || (o.MttList = []), o.MttList.push(k.commonProto.User_Mtt_Join_Info.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.User_Notice_Attachment_Asso_Application = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User_Notice_Attachment_Asso_Application", e.prototype.AppicationId = 0, e.prototype.Created = null, e.prototype.AssoName = "", e.prototype.ApplicantName = "", e.prototype.ApplicantAssoName = "", e.prototype.ApplyMessage = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.AppicationId && e.hasOwnProperty("AppicationId") && t.uint32(8).uint32(e.AppicationId), null != e.Created && e.hasOwnProperty("Created") && k.google.protobuf.Timestamp.encode(e.Created, t.uint32(18).fork()).ldelim(), null != e.AssoName && e.hasOwnProperty("AssoName") && t.uint32(26).string(e.AssoName), null != e.ApplicantName && e.hasOwnProperty("ApplicantName") && t.uint32(34).string(e.ApplicantName), null != e.ApplicantAssoName && e.hasOwnProperty("ApplicantAssoName") && t.uint32(42).string(e.ApplicantAssoName), null != e.ApplyMessage && e.hasOwnProperty("ApplyMessage") && t.uint32(50).string(e.ApplyMessage), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.User_Notice_Attachment_Asso_Application; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.AppicationId = e.uint32();
                            break;
                        case 2:
                            o.Created = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 3:
                            o.AssoName = e.string();
                            break;
                        case 4:
                            o.ApplicantName = e.string();
                            break;
                        case 5:
                            o.ApplicantAssoName = e.string();
                            break;
                        case 6:
                            o.ApplyMessage = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Create_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Create_Request", e.prototype.name = "", e.prototype.Introduce = "", e.prototype.AreaCode = "", e.prototype.Mobile = "", e.prototype.Email = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.name && e.hasOwnProperty("name") && t.uint32(10).string(e.name), null != e.Introduce && e.hasOwnProperty("Introduce") && t.uint32(18).string(e.Introduce), null != e.AreaCode && e.hasOwnProperty("AreaCode") && t.uint32(26).string(e.AreaCode), null != e.Mobile && e.hasOwnProperty("Mobile") && t.uint32(34).string(e.Mobile), null != e.Email && e.hasOwnProperty("Email") && t.uint32(42).string(e.Email), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Create_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.name = e.string();
                            break;
                        case 2:
                            o.Introduce = e.string();
                            break;
                        case 3:
                            o.AreaCode = e.string();
                            break;
                        case 4:
                            o.Mobile = e.string();
                            break;
                        case 5:
                            o.Email = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Create_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Create_Response", e.prototype.ErrorCode = 0, e.prototype.AssociationId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.AssociationId && e.hasOwnProperty("AssociationId") && t.uint32(16).uint32(e.AssociationId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Create_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.AssociationId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Update_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Update_Request", e.prototype.name = "", e.prototype.Introduce = "", e.prototype.DownShareRate = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.name && e.hasOwnProperty("name") && t.uint32(10).string(e.name), null != e.Introduce && e.hasOwnProperty("Introduce") && t.uint32(18).string(e.Introduce), null != e.DownShareRate && e.hasOwnProperty("DownShareRate") && t.uint32(53).float(e.DownShareRate), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Update_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.name = e.string();
                            break;
                        case 2:
                            o.Introduce = e.string();
                            break;
                        case 6:
                            o.DownShareRate = e.float();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Update_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Update_Response", e.prototype.ErrorCode = 0, e.prototype.AssociationData = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.AssociationData && e.hasOwnProperty("AssociationData") && k.modelProto.Association.encode(e.AssociationData, t.uint32(18).fork()).ldelim(), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Update_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.AssociationData = k.modelProto.Association.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Apply_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Apply_Request", e.prototype.AssoId = 0, e.prototype.ApplyingAssoId = 0, e.prototype.Message = "", e.prototype.AgentCode = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.AssoId && e.hasOwnProperty("AssoId") && t.uint32(8).uint32(e.AssoId), null != e.ApplyingAssoId && e.hasOwnProperty("ApplyingAssoId") && t.uint32(16).uint32(e.ApplyingAssoId), null != e.Message && e.hasOwnProperty("Message") && t.uint32(26).string(e.Message), null != e.AgentCode && e.hasOwnProperty("AgentCode") && t.uint32(34).string(e.AgentCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Apply_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.AssoId = e.uint32();
                            break;
                        case 2:
                            o.ApplyingAssoId = e.uint32();
                            break;
                        case 3:
                            o.Message = e.string();
                            break;
                        case 4:
                            o.AgentCode = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Apply_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Apply_Response", e.prototype.ErrorCode = 0, e.prototype.ApplicationId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.ApplicationId && e.hasOwnProperty("ApplicationId") && t.uint32(16).uint32(e.ApplicationId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Apply_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.ApplicationId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Application_Handle_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Application_Handle_Request", e.prototype.ApplicationId = 0, e.prototype.Message = "", e.prototype.Approve = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ApplicationId && e.hasOwnProperty("ApplicationId") && t.uint32(8).uint32(e.ApplicationId), null != e.Message && e.hasOwnProperty("Message") && t.uint32(18).string(e.Message), null != e.Approve && e.hasOwnProperty("Approve") && t.uint32(24).bool(e.Approve), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Application_Handle_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ApplicationId = e.uint32();
                            break;
                        case 2:
                            o.Message = e.string();
                            break;
                        case 3:
                            o.Approve = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Application_Handle_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Application_Handle_Response", e.prototype.ErrorCode = 0, e.prototype.ApplicationId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.ApplicationId && e.hasOwnProperty("ApplicationId") && t.uint32(16).uint32(e.ApplicationId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Application_Handle_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.ApplicationId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Share_Rate_Modify_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Share_Rate_Modify_Request", e.prototype.rate = 0, e.prototype.assoId = 0, e.prototype.membershipId = 0, e.prototype.targetAssoId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.rate && e.hasOwnProperty("rate") && t.uint32(13).float(e.rate), null != e.assoId && e.hasOwnProperty("assoId") && t.uint32(16).uint32(e.assoId), null != e.membershipId && e.hasOwnProperty("membershipId") && t.uint32(24).uint32(e.membershipId), null != e.targetAssoId && e.hasOwnProperty("targetAssoId") && t.uint32(32).uint32(e.targetAssoId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Share_Rate_Modify_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.rate = e.float();
                            break;
                        case 2:
                            o.assoId = e.uint32();
                            break;
                        case 3:
                            o.membershipId = e.uint32();
                            break;
                        case 4:
                            o.targetAssoId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Share_Rate_Modify_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Share_Rate_Modify_Response", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Share_Rate_Modify_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Detail_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Detail_Request", e.prototype.assoId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.assoId && e.hasOwnProperty("assoId") && t.uint32(8).uint32(e.assoId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Detail_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.assoId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Statistic_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Statistic_Request", e.prototype.assoId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.assoId && e.hasOwnProperty("assoId") && t.uint32(8).uint32(e.assoId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Statistic_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.assoId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Withdraw_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Withdraw_Request", e.prototype.assoId = 0, e.prototype.amount = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.assoId && e.hasOwnProperty("assoId") && t.uint32(8).uint32(e.assoId), null != e.amount && e.hasOwnProperty("amount") && t.uint32(21).float(e.amount), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Withdraw_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.assoId = e.uint32();
                            break;
                        case 2:
                            o.amount = e.float();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Withdraw_Records_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Withdraw_Records_Request", e.prototype.assoId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.assoId && e.hasOwnProperty("assoId") && t.uint32(8).uint32(e.assoId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Withdraw_Records_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.assoId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Member_Short_List_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Member_Short_List_Request", e.prototype.assoId = 0, e.prototype.offset = 0, e.prototype.search = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.assoId && e.hasOwnProperty("assoId") && t.uint32(8).uint32(e.assoId), null != e.offset && e.hasOwnProperty("offset") && t.uint32(16).uint32(e.offset), null != e.search && e.hasOwnProperty("search") && t.uint32(26).string(e.search), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Member_Short_List_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.assoId = e.uint32();
                            break;
                        case 2:
                            o.offset = e.uint32();
                            break;
                        case 3:
                            o.search = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Member_List_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Member_List_Request", e.prototype.assoId = 0, e.prototype.offset = 0, e.prototype.search = "", e.prototype.order = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.assoId && e.hasOwnProperty("assoId") && t.uint32(8).uint32(e.assoId), null != e.offset && e.hasOwnProperty("offset") && t.uint32(16).uint32(e.offset), null != e.search && e.hasOwnProperty("search") && t.uint32(26).string(e.search), null != e.order && e.hasOwnProperty("order") && t.uint32(34).string(e.order), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Member_List_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.assoId = e.uint32();
                            break;
                        case 2:
                            o.offset = e.uint32();
                            break;
                        case 3:
                            o.search = e.string();
                            break;
                        case 4:
                            o.order = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Member_Detail_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Member_Detail_Request", e.prototype.assoId = 0, e.prototype.userId = 0, e.prototype.isForFirstLevelAsso = !1, e.prototype.from = 0, e.prototype.limit = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.assoId && e.hasOwnProperty("assoId") && t.uint32(8).uint32(e.assoId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), null != e.isForFirstLevelAsso && e.hasOwnProperty("isForFirstLevelAsso") && t.uint32(24).bool(e.isForFirstLevelAsso), null != e.from && e.hasOwnProperty("from") && t.uint32(32).uint32(e.from), null != e.limit && e.hasOwnProperty("limit") && t.uint32(40).uint32(e.limit), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Member_Detail_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.assoId = e.uint32();
                            break;
                        case 2:
                            o.userId = e.uint32();
                            break;
                        case 3:
                            o.isForFirstLevelAsso = e.bool();
                            break;
                        case 4:
                            o.from = e.uint32();
                            break;
                        case 5:
                            o.limit = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Downline_List_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Downline_List_Request", e.prototype.assoId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.assoId && e.hasOwnProperty("assoId") && t.uint32(8).uint32(e.assoId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Downline_List_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.assoId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Detail_Response = function() {
            function e(e) {
                if (this.lvStatus = [], this.lvReward = [], this.lvRewardAchieve = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Detail_Response", e.prototype.errorCode = 0, e.prototype.members = 0, e.prototype.onlineMember = 0, e.prototype.newMember = 0, e.prototype.incomeMember = 0, e.prototype.incomeDownline = 0, e.prototype.balance = 0, e.prototype.incomeGuessCard = 0, e.prototype.incomeCowboy = 0, e.prototype.todayIncome = 0, e.prototype.curMonthIncome = 0, e.prototype.threeMonthAvgIncome = 0, e.prototype.lvStatus = b.emptyArray, e.prototype.lvReward = b.emptyArray, e.prototype.lvRewardAchieve = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.errorCode && e.hasOwnProperty("errorCode") && t.uint32(8).int32(e.errorCode), null != e.members && e.hasOwnProperty("members") && t.uint32(16).uint32(e.members), null != e.onlineMember && e.hasOwnProperty("onlineMember") && t.uint32(24).uint32(e.onlineMember), null != e.newMember && e.hasOwnProperty("newMember") && t.uint32(32).uint32(e.newMember), null != e.incomeMember && e.hasOwnProperty("incomeMember") && t.uint32(41).double(e.incomeMember), null != e.incomeDownline && e.hasOwnProperty("incomeDownline") && t.uint32(49).double(e.incomeDownline), null != e.balance && e.hasOwnProperty("balance") && t.uint32(57).double(e.balance), null != e.incomeGuessCard && e.hasOwnProperty("incomeGuessCard") && t.uint32(65).double(e.incomeGuessCard), null != e.incomeCowboy && e.hasOwnProperty("incomeCowboy") && t.uint32(73).double(e.incomeCowboy), null != e.todayIncome && e.hasOwnProperty("todayIncome") && t.uint32(81).double(e.todayIncome), null != e.curMonthIncome && e.hasOwnProperty("curMonthIncome") && t.uint32(89).double(e.curMonthIncome), null != e.threeMonthAvgIncome && e.hasOwnProperty("threeMonthAvgIncome") && t.uint32(97).double(e.threeMonthAvgIncome), null != e.lvStatus && e.lvStatus.length) {
                    t.uint32(106).fork();
                    for (var n = 0; n < e.lvStatus.length; ++n) t.int32(e.lvStatus[n]);
                    t.ldelim()
                }
                if (null != e.lvReward && e.lvReward.length) {
                    for (t.uint32(114).fork(), n = 0; n < e.lvReward.length; ++n) t.double(e.lvReward[n]);
                    t.ldelim()
                }
                if (null != e.lvRewardAchieve && e.lvRewardAchieve.length) {
                    for (t.uint32(122).fork(), n = 0; n < e.lvRewardAchieve.length; ++n) t.double(e.lvRewardAchieve[n]);
                    t.ldelim()
                }
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Detail_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.errorCode = e.int32();
                            break;
                        case 2:
                            o.members = e.uint32();
                            break;
                        case 3:
                            o.onlineMember = e.uint32();
                            break;
                        case 4:
                            o.newMember = e.uint32();
                            break;
                        case 5:
                            o.incomeMember = e.double();
                            break;
                        case 6:
                            o.incomeDownline = e.double();
                            break;
                        case 7:
                            o.balance = e.double();
                            break;
                        case 8:
                            o.incomeGuessCard = e.double();
                            break;
                        case 9:
                            o.incomeCowboy = e.double();
                            break;
                        case 10:
                            o.todayIncome = e.double();
                            break;
                        case 11:
                            o.curMonthIncome = e.double();
                            break;
                        case 12:
                            o.threeMonthAvgIncome = e.double();
                            break;
                        case 13:
                            if (o.lvStatus && o.lvStatus.length || (o.lvStatus = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.lvStatus.push(e.int32());
                            else o.lvStatus.push(e.int32());
                            break;
                        case 14:
                            if (o.lvReward && o.lvReward.length || (o.lvReward = []), 2 == (7 & r))
                                for (i = e.uint32() + e.pos; e.pos < i;) o.lvReward.push(e.double());
                            else o.lvReward.push(e.double());
                            break;
                        case 15:
                            if (o.lvRewardAchieve && o.lvRewardAchieve.length || (o.lvRewardAchieve = []), 2 == (7 & r))
                                for (i = e.uint32() + e.pos; e.pos < i;) o.lvRewardAchieve.push(e.double());
                            else o.lvRewardAchieve.push(e.double());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Detail_List_Item = function() {
            function e(e) {
                if (this.lvStatus = [], this.lvReward = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Detail_List_Item", e.prototype.incomeDownline = 0, e.prototype.balance = 0, e.prototype.todayIncome = 0, e.prototype.curMonthIncome = 0, e.prototype.threeMonthAvgIncome = 0, e.prototype.lvStatus = b.emptyArray, e.prototype.lvReward = b.emptyArray, e.prototype.assoId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.incomeDownline && e.hasOwnProperty("incomeDownline") && t.uint32(9).double(e.incomeDownline), null != e.balance && e.hasOwnProperty("balance") && t.uint32(17).double(e.balance), null != e.todayIncome && e.hasOwnProperty("todayIncome") && t.uint32(25).double(e.todayIncome), null != e.curMonthIncome && e.hasOwnProperty("curMonthIncome") && t.uint32(33).double(e.curMonthIncome), null != e.threeMonthAvgIncome && e.hasOwnProperty("threeMonthAvgIncome") && t.uint32(41).double(e.threeMonthAvgIncome), null != e.lvStatus && e.lvStatus.length) {
                    t.uint32(50).fork();
                    for (var n = 0; n < e.lvStatus.length; ++n) t.int32(e.lvStatus[n]);
                    t.ldelim()
                }
                if (null != e.lvReward && e.lvReward.length) {
                    for (t.uint32(58).fork(), n = 0; n < e.lvReward.length; ++n) t.double(e.lvReward[n]);
                    t.ldelim()
                }
                return null != e.assoId && e.hasOwnProperty("assoId") && t.uint32(64).uint32(e.assoId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Detail_List_Item; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.incomeDownline = e.double();
                            break;
                        case 2:
                            o.balance = e.double();
                            break;
                        case 3:
                            o.todayIncome = e.double();
                            break;
                        case 4:
                            o.curMonthIncome = e.double();
                            break;
                        case 5:
                            o.threeMonthAvgIncome = e.double();
                            break;
                        case 6:
                            if (o.lvStatus && o.lvStatus.length || (o.lvStatus = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.lvStatus.push(e.int32());
                            else o.lvStatus.push(e.int32());
                            break;
                        case 7:
                            if (o.lvReward && o.lvReward.length || (o.lvReward = []), 2 == (7 & r))
                                for (i = e.uint32() + e.pos; e.pos < i;) o.lvReward.push(e.double());
                            else o.lvReward.push(e.double());
                            break;
                        case 8:
                            o.assoId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Detail_List_Response = function() {
            function e(e) {
                if (this.details = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Detail_List_Response", e.prototype.errorCode = 0, e.prototype.details = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.errorCode && e.hasOwnProperty("errorCode") && t.uint32(8).int32(e.errorCode), null != e.details && e.details.length)
                    for (var n = 0; n < e.details.length; ++n) k.commonProto.Association_Detail_List_Item.encode(e.details[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Detail_List_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.errorCode = e.int32();
                            break;
                        case 2:
                            o.details && o.details.length || (o.details = []), o.details.push(k.commonProto.Association_Detail_List_Item.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Statistic_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Statistic_Response", e.prototype.errorCode = 0, e.prototype.todayIncome = 0, e.prototype.weekIncome = 0, e.prototype.monthIncome = 0, e.prototype.todayActive = 0, e.prototype.weekActive = 0, e.prototype.monthActive = 0, e.prototype.incomeCowboyThisWeek = 0, e.prototype.incomeCowboyLastWeek = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.errorCode && e.hasOwnProperty("errorCode") && t.uint32(8).int32(e.errorCode), null != e.todayIncome && e.hasOwnProperty("todayIncome") && t.uint32(17).double(e.todayIncome), null != e.weekIncome && e.hasOwnProperty("weekIncome") && t.uint32(25).double(e.weekIncome), null != e.monthIncome && e.hasOwnProperty("monthIncome") && t.uint32(33).double(e.monthIncome), null != e.todayActive && e.hasOwnProperty("todayActive") && t.uint32(40).uint32(e.todayActive), null != e.weekActive && e.hasOwnProperty("weekActive") && t.uint32(48).uint32(e.weekActive), null != e.monthActive && e.hasOwnProperty("monthActive") && t.uint32(56).uint32(e.monthActive), null != e.incomeCowboyThisWeek && e.hasOwnProperty("incomeCowboyThisWeek") && t.uint32(65).double(e.incomeCowboyThisWeek), null != e.incomeCowboyLastWeek && e.hasOwnProperty("incomeCowboyLastWeek") && t.uint32(73).double(e.incomeCowboyLastWeek), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Statistic_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.errorCode = e.int32();
                            break;
                        case 2:
                            o.todayIncome = e.double();
                            break;
                        case 3:
                            o.weekIncome = e.double();
                            break;
                        case 4:
                            o.monthIncome = e.double();
                            break;
                        case 5:
                            o.todayActive = e.uint32();
                            break;
                        case 6:
                            o.weekActive = e.uint32();
                            break;
                        case 7:
                            o.monthActive = e.uint32();
                            break;
                        case 8:
                            o.incomeCowboyThisWeek = e.double();
                            break;
                        case 9:
                            o.incomeCowboyLastWeek = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Withdraw_Response = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Withdraw_Response", e.prototype.errorCode = 0, e.prototype.remain = 0, e.prototype.quota = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.errorCode && e.hasOwnProperty("errorCode") && t.uint32(8).int32(e.errorCode), null != e.remain && e.hasOwnProperty("remain") && t.uint32(17).double(e.remain), null != e.quota && e.hasOwnProperty("quota") && t.uint32(24).uint32(e.quota), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Withdraw_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.errorCode = e.int32();
                            break;
                        case 2:
                            o.remain = e.double();
                            break;
                        case 3:
                            o.quota = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Withdraw_Record = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Withdraw_Record", e.prototype.date = null, e.prototype.amount = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.date && e.hasOwnProperty("date") && k.google.protobuf.Timestamp.encode(e.date, t.uint32(10).fork()).ldelim(), null != e.amount && e.hasOwnProperty("amount") && t.uint32(17).double(e.amount), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Withdraw_Record; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.date = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 2:
                            o.amount = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Withdraw_Records_Response = function() {
            function e(e) {
                if (this.records = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Withdraw_Records_Response", e.prototype.errorCode = 0, e.prototype.records = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.errorCode && e.hasOwnProperty("errorCode") && t.uint32(8).int32(e.errorCode), null != e.records && e.records.length)
                    for (var n = 0; n < e.records.length; ++n) k.commonProto.Association_Withdraw_Record.encode(e.records[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Withdraw_Records_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.errorCode = e.int32();
                            break;
                        case 2:
                            o.records && o.records.length || (o.records = []), o.records.push(k.commonProto.Association_Withdraw_Record.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Member_List_Item = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Member_List_Item", e.prototype.userId = 0, e.prototype.nickname = "", e.prototype.mobile = "", e.prototype.gold = 0, e.prototype.contribution = 0, e.prototype.lastAction = null, e.prototype.assoId = 0, e.prototype.avatar = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.nickname && e.hasOwnProperty("nickname") && t.uint32(18).string(e.nickname), null != e.mobile && e.hasOwnProperty("mobile") && t.uint32(26).string(e.mobile), null != e.gold && e.hasOwnProperty("gold") && t.uint32(33).double(e.gold), null != e.contribution && e.hasOwnProperty("contribution") && t.uint32(41).double(e.contribution), null != e.lastAction && e.hasOwnProperty("lastAction") && k.google.protobuf.Timestamp.encode(e.lastAction, t.uint32(50).fork()).ldelim(), null != e.assoId && e.hasOwnProperty("assoId") && t.uint32(56).uint32(e.assoId), null != e.avatar && e.hasOwnProperty("avatar") && t.uint32(66).string(e.avatar), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Member_List_Item; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.userId = e.uint32();
                            break;
                        case 2:
                            o.nickname = e.string();
                            break;
                        case 3:
                            o.mobile = e.string();
                            break;
                        case 4:
                            o.gold = e.double();
                            break;
                        case 5:
                            o.contribution = e.double();
                            break;
                        case 6:
                            o.lastAction = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 7:
                            o.assoId = e.uint32();
                            break;
                        case 8:
                            o.avatar = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Member_List_Response = function() {
            function e(e) {
                if (this.members = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Member_List_Response", e.prototype.errorCode = 0, e.prototype.members = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.errorCode && e.hasOwnProperty("errorCode") && t.uint32(8).int32(e.errorCode), null != e.members && e.members.length)
                    for (var n = 0; n < e.members.length; ++n) k.commonProto.Association_Member_List_Item.encode(e.members[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Member_List_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.errorCode = e.int32();
                            break;
                        case 2:
                            o.members && o.members.length || (o.members = []), o.members.push(k.commonProto.Association_Member_List_Item.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Member_Detail_Response = function() {
            function e(e) {
                if (this.GameDetails = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Member_Detail_Response", e.prototype.errorCode = 0, e.prototype.userId = 0, e.prototype.nickname = "", e.prototype.regTime = null, e.prototype.lastAction = null, e.prototype.coin = 0, e.prototype.contribution = 0, e.prototype.GameDetails = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.errorCode && e.hasOwnProperty("errorCode") && t.uint32(8).int32(e.errorCode), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), null != e.nickname && e.hasOwnProperty("nickname") && t.uint32(26).string(e.nickname), null != e.regTime && e.hasOwnProperty("regTime") && k.google.protobuf.Timestamp.encode(e.regTime, t.uint32(34).fork()).ldelim(), null != e.lastAction && e.hasOwnProperty("lastAction") && k.google.protobuf.Timestamp.encode(e.lastAction, t.uint32(42).fork()).ldelim(), null != e.coin && e.hasOwnProperty("coin") && t.uint32(49).double(e.coin), null != e.contribution && e.hasOwnProperty("contribution") && t.uint32(57).double(e.contribution), null != e.GameDetails && e.GameDetails.length)
                    for (var n = 0; n < e.GameDetails.length; ++n) k.commonProto.Association_Member_Game_Detail.encode(e.GameDetails[n], t.uint32(66).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Member_Detail_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.errorCode = e.int32();
                            break;
                        case 2:
                            o.userId = e.uint32();
                            break;
                        case 3:
                            o.nickname = e.string();
                            break;
                        case 4:
                            o.regTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 5:
                            o.lastAction = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 6:
                            o.coin = e.double();
                            break;
                        case 7:
                            o.contribution = e.double();
                            break;
                        case 8:
                            o.GameDetails && o.GameDetails.length || (o.GameDetails = []), o.GameDetails.push(k.commonProto.Association_Member_Game_Detail.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Member_Game_Detail_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Member_Game_Detail_Request", e.prototype.assoId = 0, e.prototype.userId = 0, e.prototype.isForFirstLevelAsso = !1, e.prototype.gameType = 0, e.prototype.from = 0, e.prototype.limit = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.assoId && e.hasOwnProperty("assoId") && t.uint32(8).uint32(e.assoId), null != e.userId && e.hasOwnProperty("userId") && t.uint32(16).uint32(e.userId), null != e.isForFirstLevelAsso && e.hasOwnProperty("isForFirstLevelAsso") && t.uint32(24).bool(e.isForFirstLevelAsso), null != e.gameType && e.hasOwnProperty("gameType") && t.uint32(32).int32(e.gameType), null != e.from && e.hasOwnProperty("from") && t.uint32(40).uint32(e.from), null != e.limit && e.hasOwnProperty("limit") && t.uint32(48).uint32(e.limit), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Member_Game_Detail_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.assoId = e.uint32();
                            break;
                        case 2:
                            o.userId = e.uint32();
                            break;
                        case 3:
                            o.isForFirstLevelAsso = e.bool();
                            break;
                        case 4:
                            o.gameType = e.int32();
                            break;
                        case 5:
                            o.from = e.uint32();
                            break;
                        case 6:
                            o.limit = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Member_Game_Detail_Response = function() {
            function e(e) {
                if (this.GameDetails = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Member_Game_Detail_Response", e.prototype.errorCode = 0, e.prototype.GameDetails = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.errorCode && e.hasOwnProperty("errorCode") && t.uint32(8).int32(e.errorCode), null != e.GameDetails && e.GameDetails.length)
                    for (var n = 0; n < e.GameDetails.length; ++n) k.commonProto.Association_Member_Game_Detail.encode(e.GameDetails[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Member_Game_Detail_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.errorCode = e.int32();
                            break;
                        case 2:
                            o.GameDetails && o.GameDetails.length || (o.GameDetails = []), o.GameDetails.push(k.commonProto.Association_Member_Game_Detail.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Member_Game_Detail = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Member_Game_Detail", e.prototype.name = "", e.prototype.buyCoins = 0, e.prototype.prizeMoney = 0, e.prototype.prizeTool = 0, e.prototype.contribution = 0, e.prototype.startTime = null, e.prototype.endTime = null, e.prototype.rank = 0, e.prototype.roundCount = 0, e.prototype.typeId = 0, e.prototype.isAofSng = !1, e.prototype.nameI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.name && e.hasOwnProperty("name") && t.uint32(10).string(e.name), null != e.buyCoins && e.hasOwnProperty("buyCoins") && t.uint32(17).double(e.buyCoins), null != e.prizeMoney && e.hasOwnProperty("prizeMoney") && t.uint32(25).double(e.prizeMoney), null != e.prizeTool && e.hasOwnProperty("prizeTool") && t.uint32(32).uint32(e.prizeTool), null != e.contribution && e.hasOwnProperty("contribution") && t.uint32(41).double(e.contribution), null != e.startTime && e.hasOwnProperty("startTime") && k.google.protobuf.Timestamp.encode(e.startTime, t.uint32(50).fork()).ldelim(), null != e.endTime && e.hasOwnProperty("endTime") && k.google.protobuf.Timestamp.encode(e.endTime, t.uint32(58).fork()).ldelim(), null != e.rank && e.hasOwnProperty("rank") && t.uint32(64).int32(e.rank), null != e.roundCount && e.hasOwnProperty("roundCount") && t.uint32(72).uint32(e.roundCount), null != e.typeId && e.hasOwnProperty("typeId") && t.uint32(80).uint32(e.typeId), null != e.isAofSng && e.hasOwnProperty("isAofSng") && t.uint32(88).bool(e.isAofSng), null != e.nameI18N && e.hasOwnProperty("nameI18N") && t.uint32(98).string(e.nameI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Member_Game_Detail; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.name = e.string();
                            break;
                        case 2:
                            o.buyCoins = e.double();
                            break;
                        case 3:
                            o.prizeMoney = e.double();
                            break;
                        case 4:
                            o.prizeTool = e.uint32();
                            break;
                        case 5:
                            o.contribution = e.double();
                            break;
                        case 6:
                            o.startTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 7:
                            o.endTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 8:
                            o.rank = e.int32();
                            break;
                        case 9:
                            o.roundCount = e.uint32();
                            break;
                        case 10:
                            o.typeId = e.uint32();
                            break;
                        case 11:
                            o.isAofSng = e.bool();
                            break;
                        case 12:
                            o.nameI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Downline_List_Item = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Downline_List_Item", e.prototype.userId = 0, e.prototype.nickname = "", e.prototype.mobile = "", e.prototype.contribution = 0, e.prototype.memberCount = 0, e.prototype.assoId = 0, e.prototype.code = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.userId && e.hasOwnProperty("userId") && t.uint32(8).uint32(e.userId), null != e.nickname && e.hasOwnProperty("nickname") && t.uint32(18).string(e.nickname), null != e.mobile && e.hasOwnProperty("mobile") && t.uint32(26).string(e.mobile), null != e.contribution && e.hasOwnProperty("contribution") && t.uint32(37).float(e.contribution), null != e.memberCount && e.hasOwnProperty("memberCount") && t.uint32(40).uint32(e.memberCount), null != e.assoId && e.hasOwnProperty("assoId") && t.uint32(48).uint32(e.assoId), null != e.code && e.hasOwnProperty("code") && t.uint32(58).string(e.code), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Downline_List_Item; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.userId = e.uint32();
                            break;
                        case 2:
                            o.nickname = e.string();
                            break;
                        case 3:
                            o.mobile = e.string();
                            break;
                        case 4:
                            o.contribution = e.float();
                            break;
                        case 5:
                            o.memberCount = e.uint32();
                            break;
                        case 6:
                            o.assoId = e.uint32();
                            break;
                        case 7:
                            o.code = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Downline_List_Response = function() {
            function e(e) {
                if (this.downlines = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Downline_List_Response", e.prototype.errorCode = 0, e.prototype.downlines = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.errorCode && e.hasOwnProperty("errorCode") && t.uint32(8).int32(e.errorCode), null != e.downlines && e.downlines.length)
                    for (var n = 0; n < e.downlines.length; ++n) k.commonProto.Association_Downline_List_Item.encode(e.downlines[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Downline_List_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.errorCode = e.int32();
                            break;
                        case 2:
                            o.downlines && o.downlines.length || (o.downlines = []), o.downlines.push(k.commonProto.Association_Downline_List_Item.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Reward_Withdraw_Request = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Reward_Withdraw_Request", e.prototype.assoId = 0, e.prototype.lv = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.assoId && e.hasOwnProperty("assoId") && t.uint32(8).uint32(e.assoId), null != e.lv && e.hasOwnProperty("lv") && t.uint32(16).int32(e.lv), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Reward_Withdraw_Request; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.assoId = e.uint32();
                            break;
                        case 2:
                            o.lv = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Association_Reward_Withdraw_Response = function() {
            function e(e) {
                if (this.lvStatus = [], this.lvReward = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association_Reward_Withdraw_Response", e.prototype.errorCode = 0, e.prototype.lvStatus = b.emptyArray, e.prototype.lvReward = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.errorCode && e.hasOwnProperty("errorCode") && t.uint32(8).int32(e.errorCode), null != e.lvStatus && e.lvStatus.length) {
                    t.uint32(18).fork();
                    for (var n = 0; n < e.lvStatus.length; ++n) t.int32(e.lvStatus[n]);
                    t.ldelim()
                }
                if (null != e.lvReward && e.lvReward.length) {
                    for (t.uint32(26).fork(), n = 0; n < e.lvReward.length; ++n) t.double(e.lvReward[n]);
                    t.ldelim()
                }
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Association_Reward_Withdraw_Response; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.errorCode = e.int32();
                            break;
                        case 2:
                            if (o.lvStatus && o.lvStatus.length || (o.lvStatus = []), 2 == (7 & r))
                                for (var i = e.uint32() + e.pos; e.pos < i;) o.lvStatus.push(e.int32());
                            else o.lvStatus.push(e.int32());
                            break;
                        case 3:
                            if (o.lvReward && o.lvReward.length || (o.lvReward = []), 2 == (7 & r))
                                for (i = e.uint32() + e.pos; e.pos < i;) o.lvReward.push(e.double());
                            else o.lvReward.push(e.double());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_Envelope = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_Envelope", e.prototype.Title = "", e.prototype.TypeId = 0, e.prototype.Body = b.newBuffer([]), e.prototype.MessageType = 0, e.prototype.TitleI18N = "", e.prototype.Uuid = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Title && e.hasOwnProperty("Title") && t.uint32(10).string(e.Title), null != e.TypeId && e.hasOwnProperty("TypeId") && t.uint32(16).int32(e.TypeId), null != e.Body && e.hasOwnProperty("Body") && t.uint32(26).bytes(e.Body), null != e.MessageType && e.hasOwnProperty("MessageType") && t.uint32(32).int32(e.MessageType), null != e.TitleI18N && e.hasOwnProperty("TitleI18N") && t.uint32(42).string(e.TitleI18N), null != e.Uuid && e.hasOwnProperty("Uuid") && t.uint32(50).string(e.Uuid), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_Envelope; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Title = e.string();
                            break;
                        case 2:
                            o.TypeId = e.int32();
                            break;
                        case 3:
                            o.Body = e.bytes();
                            break;
                        case 4:
                            o.MessageType = e.int32();
                            break;
                        case 5:
                            o.TitleI18N = e.string();
                            break;
                        case 6:
                            o.Uuid = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_Plain = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_Plain", e.prototype.Content = "", e.prototype.ContentI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Content && e.hasOwnProperty("Content") && t.uint32(10).string(e.Content), null != e.ContentI18N && e.hasOwnProperty("ContentI18N") && t.uint32(18).string(e.ContentI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_Plain; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Content = e.string();
                            break;
                        case 2:
                            o.ContentI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_Got_Tool_Type = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "FROM_BACKEND"] = 0, t[e[1] = "FROM_REWARD"] = 1, t[e[2] = "FROM_GIFT"] = 2, t[e[3] = "FROM_ADMIN"] = 3, t
        }(), p.Broadcast_Message_Got_Tool = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_Got_Tool", e.prototype.Name = "", e.prototype.ToolId = 0, e.prototype.Qty = 0, e.prototype.Type = 0, e.prototype.NameI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Name && e.hasOwnProperty("Name") && t.uint32(10).string(e.Name), null != e.ToolId && e.hasOwnProperty("ToolId") && t.uint32(16).uint32(e.ToolId), null != e.Qty && e.hasOwnProperty("Qty") && t.uint32(24).uint32(e.Qty), null != e.Type && e.hasOwnProperty("Type") && t.uint32(32).int32(e.Type), null != e.NameI18N && e.hasOwnProperty("NameI18N") && t.uint32(42).string(e.NameI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_Got_Tool; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Name = e.string();
                            break;
                        case 2:
                            o.ToolId = e.uint32();
                            break;
                        case 3:
                            o.Qty = e.uint32();
                            break;
                        case 4:
                            o.Type = e.int32();
                            break;
                        case 5:
                            o.NameI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_Link = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_Link", e.prototype.Body = "", e.prototype.TargetUrl = "", e.prototype.ImageUrl = "", e.prototype.BodyI18N = "", e.prototype.ImageUrlI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Body && e.hasOwnProperty("Body") && t.uint32(10).string(e.Body), null != e.TargetUrl && e.hasOwnProperty("TargetUrl") && t.uint32(18).string(e.TargetUrl), null != e.ImageUrl && e.hasOwnProperty("ImageUrl") && t.uint32(26).string(e.ImageUrl), null != e.BodyI18N && e.hasOwnProperty("BodyI18N") && t.uint32(34).string(e.BodyI18N), null != e.ImageUrlI18N && e.hasOwnProperty("ImageUrlI18N") && t.uint32(42).string(e.ImageUrlI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_Link; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Body = e.string();
                            break;
                        case 2:
                            o.TargetUrl = e.string();
                            break;
                        case 3:
                            o.ImageUrl = e.string();
                            break;
                        case 4:
                            o.BodyI18N = e.string();
                            break;
                        case 5:
                            o.ImageUrlI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_Enter_Game = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_Enter_Game", e.prototype.TypeId = 0, e.prototype.GameMode = 0, e.prototype.LevelId = 0, e.prototype.RoomId = 0, e.prototype.TournamentId = 0, e.prototype.Name = "", e.prototype.Seats = 0, e.prototype.IsAof = !1, e.prototype.TournamentMode = 0, e.prototype.NameI18N = "", e.prototype.Uuid = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.TypeId && e.hasOwnProperty("TypeId") && t.uint32(8).uint32(e.TypeId), null != e.GameMode && e.hasOwnProperty("GameMode") && t.uint32(16).uint32(e.GameMode), null != e.LevelId && e.hasOwnProperty("LevelId") && t.uint32(24).uint32(e.LevelId), null != e.RoomId && e.hasOwnProperty("RoomId") && t.uint32(32).uint32(e.RoomId), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(40).uint32(e.TournamentId), null != e.Name && e.hasOwnProperty("Name") && t.uint32(50).string(e.Name), null != e.Seats && e.hasOwnProperty("Seats") && t.uint32(56).uint32(e.Seats), null != e.IsAof && e.hasOwnProperty("IsAof") && t.uint32(64).bool(e.IsAof), null != e.TournamentMode && e.hasOwnProperty("TournamentMode") && t.uint32(72).uint32(e.TournamentMode), null != e.NameI18N && e.hasOwnProperty("NameI18N") && t.uint32(82).string(e.NameI18N), null != e.Uuid && e.hasOwnProperty("Uuid") && t.uint32(90).string(e.Uuid), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_Enter_Game; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TypeId = e.uint32();
                            break;
                        case 2:
                            o.GameMode = e.uint32();
                            break;
                        case 3:
                            o.LevelId = e.uint32();
                            break;
                        case 4:
                            o.RoomId = e.uint32();
                            break;
                        case 5:
                            o.TournamentId = e.uint32();
                            break;
                        case 6:
                            o.Name = e.string();
                            break;
                        case 7:
                            o.Seats = e.uint32();
                            break;
                        case 8:
                            o.IsAof = e.bool();
                            break;
                        case 9:
                            o.TournamentMode = e.uint32();
                            break;
                        case 10:
                            o.NameI18N = e.string();
                            break;
                        case 11:
                            o.Uuid = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_End_Game = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_End_Game", e.prototype.TypeId = 0, e.prototype.GameMode = 0, e.prototype.LevelId = 0, e.prototype.RoomId = 0, e.prototype.TournamentId = 0, e.prototype.Name = "", e.prototype.isAof = !1, e.prototype.NameI18N = "", e.prototype.Uuid = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.TypeId && e.hasOwnProperty("TypeId") && t.uint32(8).uint32(e.TypeId), null != e.GameMode && e.hasOwnProperty("GameMode") && t.uint32(16).uint32(e.GameMode), null != e.LevelId && e.hasOwnProperty("LevelId") && t.uint32(24).uint32(e.LevelId), null != e.RoomId && e.hasOwnProperty("RoomId") && t.uint32(32).uint32(e.RoomId), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(40).uint32(e.TournamentId), null != e.Name && e.hasOwnProperty("Name") && t.uint32(50).string(e.Name), null != e.isAof && e.hasOwnProperty("isAof") && t.uint32(56).bool(e.isAof), null != e.NameI18N && e.hasOwnProperty("NameI18N") && t.uint32(82).string(e.NameI18N), null != e.Uuid && e.hasOwnProperty("Uuid") && t.uint32(90).string(e.Uuid), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_End_Game; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TypeId = e.uint32();
                            break;
                        case 2:
                            o.GameMode = e.uint32();
                            break;
                        case 3:
                            o.LevelId = e.uint32();
                            break;
                        case 4:
                            o.RoomId = e.uint32();
                            break;
                        case 5:
                            o.TournamentId = e.uint32();
                            break;
                        case 6:
                            o.Name = e.string();
                            break;
                        case 7:
                            o.isAof = e.bool();
                            break;
                        case 10:
                            o.NameI18N = e.string();
                            break;
                        case 11:
                            o.Uuid = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_Out_Game = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_Out_Game", e.prototype.TournamentId = 0, e.prototype.JoinedStatus = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(8).uint32(e.TournamentId), null != e.JoinedStatus && e.hasOwnProperty("JoinedStatus") && t.uint32(16).int32(e.JoinedStatus), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_Out_Game; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TournamentId = e.uint32();
                            break;
                        case 2:
                            o.JoinedStatus = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_Mtt_Status_Changed_Notice = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_Mtt_Status_Changed_Notice", e.prototype.TournamentId = 0, e.prototype.TournamentName = "", e.prototype.Status = 0, e.prototype.TournamentNameI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(8).uint32(e.TournamentId), null != e.TournamentName && e.hasOwnProperty("TournamentName") && t.uint32(18).string(e.TournamentName), null != e.Status && e.hasOwnProperty("Status") && t.uint32(24).int32(e.Status), null != e.TournamentNameI18N && e.hasOwnProperty("TournamentNameI18N") && t.uint32(34).string(e.TournamentNameI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_Mtt_Status_Changed_Notice; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TournamentId = e.uint32();
                            break;
                        case 2:
                            o.TournamentName = e.string();
                            break;
                        case 3:
                            o.Status = e.int32();
                            break;
                        case 4:
                            o.TournamentNameI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_Events_Updated = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_Events_Updated", e.prototype.UpdatedEvent = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.UpdatedEvent && e.hasOwnProperty("UpdatedEvent") && k.modelProto.Events.encode(e.UpdatedEvent, t.uint32(10).fork()).ldelim(), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_Events_Updated; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.UpdatedEvent = k.modelProto.Events.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_Events_RED_POCKET_NOTICE = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_Events_RED_POCKET_NOTICE", e.prototype.EventId = 0, e.prototype.Amount = 0, e.prototype.Approved = !1, e.prototype.MttRegFee = 0, e.prototype.ToolName = "", e.prototype.RecordId = 0, e.prototype.ToolNameI18N = "", e.prototype.DisplayCurrency = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.EventId && e.hasOwnProperty("EventId") && t.uint32(8).uint32(e.EventId), null != e.Amount && e.hasOwnProperty("Amount") && t.uint32(17).double(e.Amount), null != e.Approved && e.hasOwnProperty("Approved") && t.uint32(24).bool(e.Approved), null != e.MttRegFee && e.hasOwnProperty("MttRegFee") && t.uint32(33).double(e.MttRegFee), null != e.ToolName && e.hasOwnProperty("ToolName") && t.uint32(42).string(e.ToolName), null != e.RecordId && e.hasOwnProperty("RecordId") && t.uint32(48).uint32(e.RecordId), null != e.ToolNameI18N && e.hasOwnProperty("ToolNameI18N") && t.uint32(58).string(e.ToolNameI18N), null != e.DisplayCurrency && e.hasOwnProperty("DisplayCurrency") && t.uint32(66).string(e.DisplayCurrency), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_Events_RED_POCKET_NOTICE; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.EventId = e.uint32();
                            break;
                        case 2:
                            o.Amount = e.double();
                            break;
                        case 3:
                            o.Approved = e.bool();
                            break;
                        case 4:
                            o.MttRegFee = e.double();
                            break;
                        case 5:
                            o.ToolName = e.string();
                            break;
                        case 6:
                            o.RecordId = e.uint32();
                            break;
                        case 7:
                            o.ToolNameI18N = e.string();
                            break;
                        case 8:
                            o.DisplayCurrency = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_Events_RED_POCKET_CAROUSEL = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_Events_RED_POCKET_CAROUSEL", e.prototype.EventId = 0, e.prototype.Amount = 0, e.prototype.Format = "", e.prototype.Nickname = "", e.prototype.Category = 0, e.prototype.UserId = 0, e.prototype.GameId = 0, e.prototype.ToolName = "", e.prototype.ToolNameI18N = "", e.prototype.FormatI18N = "", e.prototype.DisplayCurrency = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.EventId && e.hasOwnProperty("EventId") && t.uint32(8).uint32(e.EventId), null != e.Amount && e.hasOwnProperty("Amount") && t.uint32(17).double(e.Amount), null != e.Format && e.hasOwnProperty("Format") && t.uint32(26).string(e.Format), null != e.Nickname && e.hasOwnProperty("Nickname") && t.uint32(34).string(e.Nickname), null != e.Category && e.hasOwnProperty("Category") && t.uint32(40).int32(e.Category), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(48).uint32(e.UserId), null != e.GameId && e.hasOwnProperty("GameId") && t.uint32(56).uint32(e.GameId), null != e.ToolName && e.hasOwnProperty("ToolName") && t.uint32(66).string(e.ToolName), null != e.ToolNameI18N && e.hasOwnProperty("ToolNameI18N") && t.uint32(74).string(e.ToolNameI18N), null != e.FormatI18N && e.hasOwnProperty("FormatI18N") && t.uint32(82).string(e.FormatI18N), null != e.DisplayCurrency && e.hasOwnProperty("DisplayCurrency") && t.uint32(90).string(e.DisplayCurrency), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_Events_RED_POCKET_CAROUSEL; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.EventId = e.uint32();
                            break;
                        case 2:
                            o.Amount = e.double();
                            break;
                        case 3:
                            o.Format = e.string();
                            break;
                        case 4:
                            o.Nickname = e.string();
                            break;
                        case 5:
                            o.Category = e.int32();
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
                            o.FormatI18N = e.string();
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
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_Hot_Update_Needed = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_Hot_Update_Needed", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_Hot_Update_Needed; e.pos < n;) {
                    var r = e.uint32();
                    e.skipType(7 & r)
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.UserBroadcastMessagesRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserBroadcastMessagesRequest", e.prototype.Token = "", e.prototype.Timestamp = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Token && e.hasOwnProperty("Token") && t.uint32(10).string(e.Token), null != e.Timestamp && e.hasOwnProperty("Timestamp") && t.uint32(16).int64(e.Timestamp), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.UserBroadcastMessagesRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Token = e.string();
                            break;
                        case 2:
                            o.Timestamp = e.int64();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.UserBroadcastMessagesResponse = function() {
            function e(e) {
                if (this.UserBroadcastMessages = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserBroadcastMessagesResponse", e.prototype.ErrorCode = 0, e.prototype.UserBroadcastMessages = b.emptyArray, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                if (t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), null != e.UserBroadcastMessages && e.UserBroadcastMessages.length)
                    for (var n = 0; n < e.UserBroadcastMessages.length; ++n) k.modelProto.UserNotice.encode(e.UserBroadcastMessages[n], t.uint32(18).fork()).ldelim();
                return t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.UserBroadcastMessagesResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        case 2:
                            o.UserBroadcastMessages && o.UserBroadcastMessages.length || (o.UserBroadcastMessages = []), o.UserBroadcastMessages.push(k.modelProto.UserNotice.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_Push_Carousel = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_Push_Carousel", e.prototype.Body = "", e.prototype.BodyI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Body && e.hasOwnProperty("Body") && t.uint32(10).string(e.Body), null != e.BodyI18N && e.hasOwnProperty("BodyI18N") && t.uint32(18).string(e.BodyI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_Push_Carousel; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Body = e.string();
                            break;
                        case 2:
                            o.BodyI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_Aipt_Trade = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_Aipt_Trade", e.prototype.orderId = 0, e.prototype.orderName = "", e.prototype.userId = 0, e.prototype.nickName = "", e.prototype.fromUserId = 0, e.prototype.fromNickName = "", e.prototype.amount = 0, e.prototype.tradeTime = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.prototype.remark = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.orderId && e.hasOwnProperty("orderId") && t.uint32(8).uint32(e.orderId), null != e.orderName && e.hasOwnProperty("orderName") && t.uint32(18).string(e.orderName), null != e.userId && e.hasOwnProperty("userId") && t.uint32(24).uint32(e.userId), null != e.nickName && e.hasOwnProperty("nickName") && t.uint32(34).string(e.nickName), null != e.fromUserId && e.hasOwnProperty("fromUserId") && t.uint32(40).uint32(e.fromUserId), null != e.fromNickName && e.hasOwnProperty("fromNickName") && t.uint32(50).string(e.fromNickName), null != e.amount && e.hasOwnProperty("amount") && t.uint32(57).double(e.amount), null != e.tradeTime && e.hasOwnProperty("tradeTime") && t.uint32(64).int64(e.tradeTime), null != e.remark && e.hasOwnProperty("remark") && t.uint32(74).string(e.remark), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_Aipt_Trade; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.orderId = e.uint32();
                            break;
                        case 2:
                            o.orderName = e.string();
                            break;
                        case 3:
                            o.userId = e.uint32();
                            break;
                        case 4:
                            o.nickName = e.string();
                            break;
                        case 5:
                            o.fromUserId = e.uint32();
                            break;
                        case 6:
                            o.fromNickName = e.string();
                            break;
                        case 7:
                            o.amount = e.double();
                            break;
                        case 8:
                            o.tradeTime = e.int64();
                            break;
                        case 9:
                            o.remark = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.UserUpdateBroadcastMsgRequest = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserUpdateBroadcastMsgRequest", e.prototype.Token = "", e.prototype.Uuid = "", e.prototype.Result = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Token && e.hasOwnProperty("Token") && t.uint32(10).string(e.Token), null != e.Uuid && e.hasOwnProperty("Uuid") && t.uint32(18).string(e.Uuid), null != e.Result && e.hasOwnProperty("Result") && t.uint32(26).string(e.Result), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.UserUpdateBroadcastMsgRequest; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Token = e.string();
                            break;
                        case 2:
                            o.Uuid = e.string();
                            break;
                        case 3:
                            o.Result = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.UserUpdateBroadcastMsgResponse = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserUpdateBroadcastMsgResponse", e.prototype.ErrorCode = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ErrorCode && e.hasOwnProperty("ErrorCode") && t.uint32(8).int32(e.ErrorCode), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.UserUpdateBroadcastMsgResponse; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ErrorCode = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_Mtt_Reaward_Notice = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_Mtt_Reaward_Notice", e.prototype.TournamentId = 0, e.prototype.TournamentName = "", e.prototype.Start_Timestamp = b.Long ? b.Long.fromBits(0, 0, !1) : 0, e.prototype.TournamentNameI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(8).uint32(e.TournamentId), null != e.TournamentName && e.hasOwnProperty("TournamentName") && t.uint32(18).string(e.TournamentName), null != e.Start_Timestamp && e.hasOwnProperty("Start_Timestamp") && t.uint32(24).int64(e.Start_Timestamp), null != e.TournamentNameI18N && e.hasOwnProperty("TournamentNameI18N") && t.uint32(34).string(e.TournamentNameI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_Mtt_Reaward_Notice; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TournamentId = e.uint32();
                            break;
                        case 2:
                            o.TournamentName = e.string();
                            break;
                        case 3:
                            o.Start_Timestamp = e.int64();
                            break;
                        case 4:
                            o.TournamentNameI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_BlockRobot_Start_Game = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_BlockRobot_Start_Game", e.prototype.TypeId = 0, e.prototype.GameMode = 0, e.prototype.LevelId = 0, e.prototype.RoomId = 0, e.prototype.TournamentId = 0, e.prototype.Name = "", e.prototype.Seats = 0, e.prototype.IsAof = !1, e.prototype.TournamentMode = 0, e.prototype.NameI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.TypeId && e.hasOwnProperty("TypeId") && t.uint32(8).uint32(e.TypeId), null != e.GameMode && e.hasOwnProperty("GameMode") && t.uint32(16).uint32(e.GameMode), null != e.LevelId && e.hasOwnProperty("LevelId") && t.uint32(24).uint32(e.LevelId), null != e.RoomId && e.hasOwnProperty("RoomId") && t.uint32(32).uint32(e.RoomId), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(40).uint32(e.TournamentId), null != e.Name && e.hasOwnProperty("Name") && t.uint32(50).string(e.Name), null != e.Seats && e.hasOwnProperty("Seats") && t.uint32(56).uint32(e.Seats), null != e.IsAof && e.hasOwnProperty("IsAof") && t.uint32(64).bool(e.IsAof), null != e.TournamentMode && e.hasOwnProperty("TournamentMode") && t.uint32(72).uint32(e.TournamentMode), null != e.NameI18N && e.hasOwnProperty("NameI18N") && t.uint32(82).string(e.NameI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_BlockRobot_Start_Game; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TypeId = e.uint32();
                            break;
                        case 2:
                            o.GameMode = e.uint32();
                            break;
                        case 3:
                            o.LevelId = e.uint32();
                            break;
                        case 4:
                            o.RoomId = e.uint32();
                            break;
                        case 5:
                            o.TournamentId = e.uint32();
                            break;
                        case 6:
                            o.Name = e.string();
                            break;
                        case 7:
                            o.Seats = e.uint32();
                            break;
                        case 8:
                            o.IsAof = e.bool();
                            break;
                        case 9:
                            o.TournamentMode = e.uint32();
                            break;
                        case 10:
                            o.NameI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_BlockRobot_Stop_Game = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_BlockRobot_Stop_Game", e.prototype.TypeId = 0, e.prototype.GameMode = 0, e.prototype.LevelId = 0, e.prototype.RoomId = 0, e.prototype.TournamentId = 0, e.prototype.Name = "", e.prototype.Seats = 0, e.prototype.IsAof = !1, e.prototype.TournamentMode = 0, e.prototype.NameI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.TypeId && e.hasOwnProperty("TypeId") && t.uint32(8).uint32(e.TypeId), null != e.GameMode && e.hasOwnProperty("GameMode") && t.uint32(16).uint32(e.GameMode), null != e.LevelId && e.hasOwnProperty("LevelId") && t.uint32(24).uint32(e.LevelId), null != e.RoomId && e.hasOwnProperty("RoomId") && t.uint32(32).uint32(e.RoomId), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(40).uint32(e.TournamentId), null != e.Name && e.hasOwnProperty("Name") && t.uint32(50).string(e.Name), null != e.Seats && e.hasOwnProperty("Seats") && t.uint32(56).uint32(e.Seats), null != e.IsAof && e.hasOwnProperty("IsAof") && t.uint32(64).bool(e.IsAof), null != e.TournamentMode && e.hasOwnProperty("TournamentMode") && t.uint32(72).uint32(e.TournamentMode), null != e.NameI18N && e.hasOwnProperty("NameI18N") && t.uint32(82).string(e.NameI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_BlockRobot_Stop_Game; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TypeId = e.uint32();
                            break;
                        case 2:
                            o.GameMode = e.uint32();
                            break;
                        case 3:
                            o.LevelId = e.uint32();
                            break;
                        case 4:
                            o.RoomId = e.uint32();
                            break;
                        case 5:
                            o.TournamentId = e.uint32();
                            break;
                        case 6:
                            o.Name = e.string();
                            break;
                        case 7:
                            o.Seats = e.uint32();
                            break;
                        case 8:
                            o.IsAof = e.bool();
                            break;
                        case 9:
                            o.TournamentMode = e.uint32();
                            break;
                        case 10:
                            o.NameI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_AutoFeed = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_AutoFeed", e.prototype.TypeId = 0, e.prototype.GameMode = 0, e.prototype.LevelId = 0, e.prototype.RoomId = 0, e.prototype.TournamentId = 0, e.prototype.Name = "", e.prototype.Seats = 0, e.prototype.IsAof = !1, e.prototype.TournamentMode = 0, e.prototype.NameI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.TypeId && e.hasOwnProperty("TypeId") && t.uint32(8).uint32(e.TypeId), null != e.GameMode && e.hasOwnProperty("GameMode") && t.uint32(16).uint32(e.GameMode), null != e.LevelId && e.hasOwnProperty("LevelId") && t.uint32(24).uint32(e.LevelId), null != e.RoomId && e.hasOwnProperty("RoomId") && t.uint32(32).uint32(e.RoomId), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(40).uint32(e.TournamentId), null != e.Name && e.hasOwnProperty("Name") && t.uint32(50).string(e.Name), null != e.Seats && e.hasOwnProperty("Seats") && t.uint32(56).uint32(e.Seats), null != e.IsAof && e.hasOwnProperty("IsAof") && t.uint32(64).bool(e.IsAof), null != e.TournamentMode && e.hasOwnProperty("TournamentMode") && t.uint32(72).uint32(e.TournamentMode), null != e.NameI18N && e.hasOwnProperty("NameI18N") && t.uint32(82).string(e.NameI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_AutoFeed; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TypeId = e.uint32();
                            break;
                        case 2:
                            o.GameMode = e.uint32();
                            break;
                        case 3:
                            o.LevelId = e.uint32();
                            break;
                        case 4:
                            o.RoomId = e.uint32();
                            break;
                        case 5:
                            o.TournamentId = e.uint32();
                            break;
                        case 6:
                            o.Name = e.string();
                            break;
                        case 7:
                            o.Seats = e.uint32();
                            break;
                        case 8:
                            o.IsAof = e.bool();
                            break;
                        case 9:
                            o.TournamentMode = e.uint32();
                            break;
                        case 10:
                            o.NameI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_Offline_Register_Audit_Type = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Register"] = 0, t[e[1] = "Hotel"] = 1, t
        }(), p.Broadcast_Message_Offline_Register_Audit = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_Offline_Register_Audit", e.prototype.ToolsInBackpackId = 0, e.prototype.Pass = !1, e.prototype.Type = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.ToolsInBackpackId && e.hasOwnProperty("ToolsInBackpackId") && t.uint32(8).uint32(e.ToolsInBackpackId), null != e.Pass && e.hasOwnProperty("Pass") && t.uint32(16).bool(e.Pass), null != e.Type && e.hasOwnProperty("Type") && t.uint32(24).int32(e.Type), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_Offline_Register_Audit; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.ToolsInBackpackId = e.uint32();
                            break;
                        case 2:
                            o.Pass = e.bool();
                            break;
                        case 3:
                            o.Type = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p.Broadcast_Message_Start_Game = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Broadcast_Message_Start_Game", e.prototype.TypeId = 0, e.prototype.GameMode = 0, e.prototype.LevelId = 0, e.prototype.RoomId = 0, e.prototype.TournamentId = 0, e.prototype.Name = "", e.prototype.Seats = 0, e.prototype.IsAof = !1, e.prototype.TournamentMode = 0, e.prototype.NameI18N = "", e.prototype.Uuid = "", e.prototype.LeftTime = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.TypeId && e.hasOwnProperty("TypeId") && t.uint32(8).uint32(e.TypeId), null != e.GameMode && e.hasOwnProperty("GameMode") && t.uint32(16).uint32(e.GameMode), null != e.LevelId && e.hasOwnProperty("LevelId") && t.uint32(24).uint32(e.LevelId), null != e.RoomId && e.hasOwnProperty("RoomId") && t.uint32(32).uint32(e.RoomId), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(40).uint32(e.TournamentId), null != e.Name && e.hasOwnProperty("Name") && t.uint32(50).string(e.Name), null != e.Seats && e.hasOwnProperty("Seats") && t.uint32(56).uint32(e.Seats), null != e.IsAof && e.hasOwnProperty("IsAof") && t.uint32(64).bool(e.IsAof), null != e.TournamentMode && e.hasOwnProperty("TournamentMode") && t.uint32(72).uint32(e.TournamentMode), null != e.NameI18N && e.hasOwnProperty("NameI18N") && t.uint32(82).string(e.NameI18N), null != e.Uuid && e.hasOwnProperty("Uuid") && t.uint32(90).string(e.Uuid), null != e.LeftTime && e.hasOwnProperty("LeftTime") && t.uint32(96).uint32(e.LeftTime), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.commonProto.Broadcast_Message_Start_Game; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.TypeId = e.uint32();
                            break;
                        case 2:
                            o.GameMode = e.uint32();
                            break;
                        case 3:
                            o.LevelId = e.uint32();
                            break;
                        case 4:
                            o.RoomId = e.uint32();
                            break;
                        case 5:
                            o.TournamentId = e.uint32();
                            break;
                        case 6:
                            o.Name = e.string();
                            break;
                        case 7:
                            o.Seats = e.uint32();
                            break;
                        case 8:
                            o.IsAof = e.bool();
                            break;
                        case 9:
                            o.TournamentMode = e.uint32();
                            break;
                        case 10:
                            o.NameI18N = e.string();
                            break;
                        case 11:
                            o.Uuid = e.string();
                            break;
                        case 12:
                            o.LeftTime = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), p), k.modelProto = ((m = {}).User = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "User", e.prototype.Id = 0, e.prototype.AreaCode = "", e.prototype.Mobile = "", e.prototype.Username = "", e.prototype.Password = "", e.prototype.Avatar = null, e.prototype.AvatarThumb = null, e.prototype.Nickname = "", e.prototype.Gender = 0, e.prototype.Signature = null, e.prototype.Area = null, e.prototype.Gold = 0, e.prototype.GoldRecord = 0, e.prototype.GoldRecordChecksum = null, e.prototype.GoldRecordCutoff = null, e.prototype.RegCode = null, e.prototype.InvitorId = null, e.prototype.FirstAssociationId = null, e.prototype.RegTime = null, e.prototype.LastLogin = null, e.prototype.LastAction = null, e.prototype.ShareChain = null, e.prototype.Status = 0, e.prototype.StatusRemark = null, e.prototype.Remark = null, e.prototype.Contribution = 0, e.prototype.Platform = 0, e.prototype.ForeignId = "", e.prototype.WithdrawPassword = "", e.prototype.WithdrawLocked = !1, e.prototype.StateChangeTime = null, e.prototype.CofferGold = 0, e.prototype.NicknameReset = !1, e.prototype.OnTimeToday = 0, e.prototype.OnTimeMonth = 0, e.prototype.Language = "", e.prototype.WpkId = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                var n;
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.AreaCode && e.hasOwnProperty("AreaCode") && t.uint32(18).string(e.AreaCode), null != e.Mobile && e.hasOwnProperty("Mobile") && t.uint32(26).string(e.Mobile), null != e.Username && e.hasOwnProperty("Username") && t.uint32(34).string(e.Username), null != e.Password && e.hasOwnProperty("Password") && t.uint32(42).string(e.Password), e.hasOwnProperty("Avatar") && (n = null === e.Avatar ? k.dataTypes.NullableString.create({
                    notNull: !1
                }) : void 0 === e.Avatar.notNull ? k.dataTypes.NullableString.create({
                    notNull: !0,
                    value: e.Avatar
                }) : e.Avatar, k.dataTypes.NullableString.encode(n, t.uint32(50).fork()).ldelim()), e.hasOwnProperty("AvatarThumb") && (n = null === e.AvatarThumb ? k.dataTypes.NullableString.create({
                    notNull: !1
                }) : void 0 === e.AvatarThumb.notNull ? k.dataTypes.NullableString.create({
                    notNull: !0,
                    value: e.AvatarThumb
                }) : e.AvatarThumb, k.dataTypes.NullableString.encode(n, t.uint32(58).fork()).ldelim()), null != e.Nickname && e.hasOwnProperty("Nickname") && t.uint32(66).string(e.Nickname), null != e.Gender && e.hasOwnProperty("Gender") && t.uint32(72).int32(e.Gender), e.hasOwnProperty("Signature") && (n = null === e.Signature ? k.dataTypes.NullableString.create({
                    notNull: !1
                }) : void 0 === e.Signature.notNull ? k.dataTypes.NullableString.create({
                    notNull: !0,
                    value: e.Signature
                }) : e.Signature, k.dataTypes.NullableString.encode(n, t.uint32(82).fork()).ldelim()), e.hasOwnProperty("Area") && (n = null === e.Area ? k.dataTypes.NullableString.create({
                    notNull: !1
                }) : void 0 === e.Area.notNull ? k.dataTypes.NullableString.create({
                    notNull: !0,
                    value: e.Area
                }) : e.Area, k.dataTypes.NullableString.encode(n, t.uint32(90).fork()).ldelim()), null != e.Gold && e.hasOwnProperty("Gold") && t.uint32(97).double(e.Gold), null != e.GoldRecord && e.hasOwnProperty("GoldRecord") && t.uint32(105).double(e.GoldRecord), e.hasOwnProperty("GoldRecordChecksum") && (n = null === e.GoldRecordChecksum ? k.dataTypes.NullableString.create({
                    notNull: !1
                }) : void 0 === e.GoldRecordChecksum.notNull ? k.dataTypes.NullableString.create({
                    notNull: !0,
                    value: e.GoldRecordChecksum
                }) : e.GoldRecordChecksum, k.dataTypes.NullableString.encode(n, t.uint32(114).fork()).ldelim()), e.hasOwnProperty("GoldRecordCutoff") && (n = null === e.GoldRecordCutoff ? k.dataTypes.NullableInt64.create({
                    notNull: !1
                }) : void 0 === e.GoldRecordCutoff.notNull ? k.dataTypes.NullableInt64.create({
                    notNull: !0,
                    value: e.GoldRecordCutoff
                }) : e.GoldRecordCutoff, k.dataTypes.NullableInt64.encode(n, t.uint32(122).fork()).ldelim()), e.hasOwnProperty("RegCode") && (n = null === e.RegCode ? k.dataTypes.NullableString.create({
                    notNull: !1
                }) : void 0 === e.RegCode.notNull ? k.dataTypes.NullableString.create({
                    notNull: !0,
                    value: e.RegCode
                }) : e.RegCode, k.dataTypes.NullableString.encode(n, t.uint32(130).fork()).ldelim()), e.hasOwnProperty("InvitorId") && (n = null === e.InvitorId ? k.dataTypes.NullableInt64.create({
                    notNull: !1
                }) : void 0 === e.InvitorId.notNull ? k.dataTypes.NullableInt64.create({
                    notNull: !0,
                    value: e.InvitorId
                }) : e.InvitorId, k.dataTypes.NullableInt64.encode(n, t.uint32(138).fork()).ldelim()), e.hasOwnProperty("FirstAssociationId") && (n = null === e.FirstAssociationId ? k.dataTypes.NullableInt64.create({
                    notNull: !1
                }) : void 0 === e.FirstAssociationId.notNull ? k.dataTypes.NullableInt64.create({
                    notNull: !0,
                    value: e.FirstAssociationId
                }) : e.FirstAssociationId, k.dataTypes.NullableInt64.encode(n, t.uint32(146).fork()).ldelim()), null != e.RegTime && e.hasOwnProperty("RegTime") && k.google.protobuf.Timestamp.encode(e.RegTime, t.uint32(154).fork()).ldelim(), e.hasOwnProperty("LastLogin") && (n = null === e.LastLogin ? k.dataTypes.NullableTime.create({
                    notNull: !1
                }) : void 0 === e.LastLogin.notNull ? k.dataTypes.NullableTime.create({
                    notNull: !0,
                    value: e.LastLogin
                }) : e.LastLogin, k.dataTypes.NullableTime.encode(n, t.uint32(162).fork()).ldelim()), e.hasOwnProperty("LastAction") && (n = null === e.LastAction ? k.dataTypes.NullableTime.create({
                    notNull: !1
                }) : void 0 === e.LastAction.notNull ? k.dataTypes.NullableTime.create({
                    notNull: !0,
                    value: e.LastAction
                }) : e.LastAction, k.dataTypes.NullableTime.encode(n, t.uint32(170).fork()).ldelim()), e.hasOwnProperty("ShareChain") && (n = null === e.ShareChain ? k.dataTypes.NullableString.create({
                    notNull: !1
                }) : void 0 === e.ShareChain.notNull ? k.dataTypes.NullableString.create({
                    notNull: !0,
                    value: e.ShareChain
                }) : e.ShareChain, k.dataTypes.NullableString.encode(n, t.uint32(178).fork()).ldelim()), null != e.Status && e.hasOwnProperty("Status") && t.uint32(184).int32(e.Status), e.hasOwnProperty("StatusRemark") && (n = null === e.StatusRemark ? k.dataTypes.NullableString.create({
                    notNull: !1
                }) : void 0 === e.StatusRemark.notNull ? k.dataTypes.NullableString.create({
                    notNull: !0,
                    value: e.StatusRemark
                }) : e.StatusRemark, k.dataTypes.NullableString.encode(n, t.uint32(194).fork()).ldelim()), e.hasOwnProperty("Remark") && (n = null === e.Remark ? k.dataTypes.NullableString.create({
                    notNull: !1
                }) : void 0 === e.Remark.notNull ? k.dataTypes.NullableString.create({
                    notNull: !0,
                    value: e.Remark
                }) : e.Remark, k.dataTypes.NullableString.encode(n, t.uint32(202).fork()).ldelim()), null != e.Contribution && e.hasOwnProperty("Contribution") && t.uint32(209).double(e.Contribution), null != e.Platform && e.hasOwnProperty("Platform") && t.uint32(216).uint32(e.Platform), null != e.ForeignId && e.hasOwnProperty("ForeignId") && t.uint32(226).string(e.ForeignId), null != e.WithdrawPassword && e.hasOwnProperty("WithdrawPassword") && t.uint32(234).string(e.WithdrawPassword), null != e.WithdrawLocked && e.hasOwnProperty("WithdrawLocked") && t.uint32(240).bool(e.WithdrawLocked), null != e.StateChangeTime && e.hasOwnProperty("StateChangeTime") && k.google.protobuf.Timestamp.encode(e.StateChangeTime, t.uint32(250).fork()).ldelim(), null != e.CofferGold && e.hasOwnProperty("CofferGold") && t.uint32(257).double(e.CofferGold), null != e.NicknameReset && e.hasOwnProperty("NicknameReset") && t.uint32(264).bool(e.NicknameReset), null != e.OnTimeToday && e.hasOwnProperty("OnTimeToday") && t.uint32(272).uint32(e.OnTimeToday), null != e.OnTimeMonth && e.hasOwnProperty("OnTimeMonth") && t.uint32(280).uint32(e.OnTimeMonth), null != e.Language && e.hasOwnProperty("Language") && t.uint32(290).string(e.Language), null != e.WpkId && e.hasOwnProperty("WpkId") && t.uint32(298).string(e.WpkId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.User; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.AreaCode = e.string();
                            break;
                        case 3:
                            o.Mobile = e.string();
                            break;
                        case 4:
                            o.Username = e.string();
                            break;
                        case 5:
                            o.Password = e.string();
                            break;
                        case 6:
                            var i = k.dataTypes.NullableString.decode(e, e.uint32());
                            o.Avatar = i.notNull ? i.value : null;
                            break;
                        case 7:
                            i = k.dataTypes.NullableString.decode(e, e.uint32()), o.AvatarThumb = i.notNull ? i.value : null;
                            break;
                        case 8:
                            o.Nickname = e.string();
                            break;
                        case 9:
                            o.Gender = e.int32();
                            break;
                        case 10:
                            i = k.dataTypes.NullableString.decode(e, e.uint32()), o.Signature = i.notNull ? i.value : null;
                            break;
                        case 11:
                            i = k.dataTypes.NullableString.decode(e, e.uint32()), o.Area = i.notNull ? i.value : null;
                            break;
                        case 12:
                            o.Gold = e.double();
                            break;
                        case 13:
                            o.GoldRecord = e.double();
                            break;
                        case 14:
                            i = k.dataTypes.NullableString.decode(e, e.uint32()), o.GoldRecordChecksum = i.notNull ? i.value : null;
                            break;
                        case 15:
                            i = k.dataTypes.NullableInt64.decode(e, e.uint32()), o.GoldRecordCutoff = i.notNull ? i.value : null;
                            break;
                        case 16:
                            i = k.dataTypes.NullableString.decode(e, e.uint32()), o.RegCode = i.notNull ? i.value : null;
                            break;
                        case 17:
                            i = k.dataTypes.NullableInt64.decode(e, e.uint32()), o.InvitorId = i.notNull ? i.value : null;
                            break;
                        case 18:
                            i = k.dataTypes.NullableInt64.decode(e, e.uint32()), o.FirstAssociationId = i.notNull ? i.value : null;
                            break;
                        case 19:
                            o.RegTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 20:
                            i = k.dataTypes.NullableTime.decode(e, e.uint32()), o.LastLogin = i.notNull ? i.value : null;
                            break;
                        case 21:
                            i = k.dataTypes.NullableTime.decode(e, e.uint32()), o.LastAction = i.notNull ? i.value : null;
                            break;
                        case 22:
                            i = k.dataTypes.NullableString.decode(e, e.uint32()), o.ShareChain = i.notNull ? i.value : null;
                            break;
                        case 23:
                            o.Status = e.int32();
                            break;
                        case 24:
                            i = k.dataTypes.NullableString.decode(e, e.uint32()), o.StatusRemark = i.notNull ? i.value : null;
                            break;
                        case 25:
                            i = k.dataTypes.NullableString.decode(e, e.uint32()), o.Remark = i.notNull ? i.value : null;
                            break;
                        case 26:
                            o.Contribution = e.double();
                            break;
                        case 27:
                            o.Platform = e.uint32();
                            break;
                        case 28:
                            o.ForeignId = e.string();
                            break;
                        case 29:
                            o.WithdrawPassword = e.string();
                            break;
                        case 30:
                            o.WithdrawLocked = e.bool();
                            break;
                        case 31:
                            o.StateChangeTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 32:
                            o.CofferGold = e.double();
                            break;
                        case 33:
                            o.NicknameReset = e.bool();
                            break;
                        case 34:
                            o.OnTimeToday = e.uint32();
                            break;
                        case 35:
                            o.OnTimeMonth = e.uint32();
                            break;
                        case 36:
                            o.Language = e.string();
                            break;
                        case 37:
                            o.WpkId = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.UserPoint = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserPoint", e.prototype.Id = b.Long ? b.Long.fromBits(0, 0, !0) : 0, e.prototype.UserId = 0, e.prototype.Point = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint64(e.Id), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(16).uint32(e.UserId), null != e.Point && e.hasOwnProperty("Point") && t.uint32(25).double(e.Point), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.UserPoint; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint64();
                            break;
                        case 2:
                            o.UserId = e.uint32();
                            break;
                        case 3:
                            o.Point = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.UserPointChangeToolSet = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserPointChangeToolSet", e.prototype.Id = b.Long ? b.Long.fromBits(0, 0, !0) : 0, e.prototype.ToolId = 0, e.prototype.Point = 0, e.prototype.Usable = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint64(e.Id), null != e.ToolId && e.hasOwnProperty("ToolId") && t.uint32(16).uint32(e.ToolId), null != e.Point && e.hasOwnProperty("Point") && t.uint32(25).double(e.Point), null != e.Usable && e.hasOwnProperty("Usable") && t.uint32(32).bool(e.Usable), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.UserPointChangeToolSet; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint64();
                            break;
                        case 2:
                            o.ToolId = e.uint32();
                            break;
                        case 3:
                            o.Point = e.double();
                            break;
                        case 4:
                            o.Usable = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.UserPointToolChangeBill = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserPointToolChangeBill", e.prototype.Id = b.Long ? b.Long.fromBits(0, 0, !0) : 0, e.prototype.UserId = 0, e.prototype.ToolId = 0, e.prototype.Point = 0, e.prototype.Created = null, e.prototype.Remark = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint64(e.Id), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(16).uint32(e.UserId), null != e.ToolId && e.hasOwnProperty("ToolId") && t.uint32(24).uint32(e.ToolId), null != e.Point && e.hasOwnProperty("Point") && t.uint32(33).double(e.Point), null != e.Created && e.hasOwnProperty("Created") && k.google.protobuf.Timestamp.encode(e.Created, t.uint32(42).fork()).ldelim(), null != e.Remark && e.hasOwnProperty("Remark") && t.uint32(50).string(e.Remark), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.UserPointToolChangeBill; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint64();
                            break;
                        case 2:
                            o.UserId = e.uint32();
                            break;
                        case 3:
                            o.ToolId = e.uint32();
                            break;
                        case 4:
                            o.Point = e.double();
                            break;
                        case 5:
                            o.Created = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 6:
                            o.Remark = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.GameResult = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "GameResult", e.prototype.Id = 0, e.prototype.GameMode = 0, e.prototype.TypeId = 0, e.prototype.LevelId = 0, e.prototype.RoomId = 0, e.prototype.SectionId = 0, e.prototype.TournamentId = 0, e.prototype.TournamentMode = 0, e.prototype.IsAofSng = !1, e.prototype.UserId = 0, e.prototype.Name = "", e.prototype.NumPlayers = 0, e.prototype.PPBasePot = 0, e.prototype.TotalFee = 0, e.prototype.CommissionFee = 0, e.prototype.EndTime = null, e.prototype.PrizeMoney = 0, e.prototype.PrizeTool = 0, e.prototype.Rank = 0, e.prototype.GameTimeSec = 0, e.prototype.BuyCount = 0, e.prototype.PlayerTakeIn = 0, e.prototype.TotalTakeIn = 0, e.prototype.PlatformCommission = 0, e.prototype.AssoCommission = 0, e.prototype.TotalRounds = 0, e.prototype.PlayOnJoint = 0, e.prototype.TotalGamePot = 0, e.prototype.RoomMode = 0, e.prototype.LevelStartTime = null, e.prototype.LevelEndTime = null, e.prototype.RedPocket = 0, e.prototype.JackPot = 0, e.prototype.RedPocketToolIds = "", e.prototype.RedPocketBackpackIds = "", e.prototype.Bounty = 0, e.prototype.Wins = 0, e.prototype.JoinStatus = 0, e.prototype.RedPocketIds = "", e.prototype.IsMultiflight = !1, e.prototype.UseFreeTicket = !1, e.prototype.UseSatelliteTicket = !1, e.prototype.NameI18N = "", e.prototype.IsBl = !1, e.prototype.IsPkw = !1, e.prototype.IsWpk = !1, e.prototype.DisplayCurrency = "", e.prototype.ExchangeRate = 0, e.prototype.CelebrityHunt = 0, e.prototype.ExchangeTakein = 0, e.prototype.ExchangePrizeMoney = 0, e.prototype.RegGoldType = 0, e.prototype.IsWpto = !1, e.prototype.WinInfos = "", e.prototype.Uuid = "", e.prototype.BlockRobotNum = 0, e.prototype.EmojiFee = 0, e.prototype.MorebyNum = 0, e.prototype.MorebyGoldAmount = 0, e.prototype.MorebyTicketAmount = 0, e.prototype.RedPocket_Usd = 0, e.prototype.TakeinTicketAmount = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.GameMode && e.hasOwnProperty("GameMode") && t.uint32(16).uint32(e.GameMode), null != e.TypeId && e.hasOwnProperty("TypeId") && t.uint32(24).uint32(e.TypeId), null != e.LevelId && e.hasOwnProperty("LevelId") && t.uint32(32).uint32(e.LevelId), null != e.RoomId && e.hasOwnProperty("RoomId") && t.uint32(40).uint32(e.RoomId), null != e.SectionId && e.hasOwnProperty("SectionId") && t.uint32(48).uint32(e.SectionId), null != e.TournamentId && e.hasOwnProperty("TournamentId") && t.uint32(56).uint32(e.TournamentId), null != e.TournamentMode && e.hasOwnProperty("TournamentMode") && t.uint32(64).uint32(e.TournamentMode), null != e.IsAofSng && e.hasOwnProperty("IsAofSng") && t.uint32(72).bool(e.IsAofSng), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(80).uint32(e.UserId), null != e.Name && e.hasOwnProperty("Name") && t.uint32(90).string(e.Name), null != e.NumPlayers && e.hasOwnProperty("NumPlayers") && t.uint32(96).uint32(e.NumPlayers), null != e.PPBasePot && e.hasOwnProperty("PPBasePot") && t.uint32(105).double(e.PPBasePot), null != e.TotalFee && e.hasOwnProperty("TotalFee") && t.uint32(113).double(e.TotalFee), null != e.CommissionFee && e.hasOwnProperty("CommissionFee") && t.uint32(121).double(e.CommissionFee), null != e.EndTime && e.hasOwnProperty("EndTime") && k.google.protobuf.Timestamp.encode(e.EndTime, t.uint32(130).fork()).ldelim(), null != e.PrizeMoney && e.hasOwnProperty("PrizeMoney") && t.uint32(137).double(e.PrizeMoney), null != e.PrizeTool && e.hasOwnProperty("PrizeTool") && t.uint32(144).uint32(e.PrizeTool), null != e.Rank && e.hasOwnProperty("Rank") && t.uint32(152).int32(e.Rank), null != e.GameTimeSec && e.hasOwnProperty("GameTimeSec") && t.uint32(160).uint32(e.GameTimeSec), null != e.BuyCount && e.hasOwnProperty("BuyCount") && t.uint32(168).uint32(e.BuyCount), null != e.PlayerTakeIn && e.hasOwnProperty("PlayerTakeIn") && t.uint32(177).double(e.PlayerTakeIn), null != e.TotalTakeIn && e.hasOwnProperty("TotalTakeIn") && t.uint32(185).double(e.TotalTakeIn), null != e.PlatformCommission && e.hasOwnProperty("PlatformCommission") && t.uint32(193).double(e.PlatformCommission), null != e.AssoCommission && e.hasOwnProperty("AssoCommission") && t.uint32(201).double(e.AssoCommission), null != e.TotalRounds && e.hasOwnProperty("TotalRounds") && t.uint32(208).uint32(e.TotalRounds), null != e.PlayOnJoint && e.hasOwnProperty("PlayOnJoint") && t.uint32(216).uint32(e.PlayOnJoint), null != e.TotalGamePot && e.hasOwnProperty("TotalGamePot") && t.uint32(225).double(e.TotalGamePot), null != e.RoomMode && e.hasOwnProperty("RoomMode") && t.uint32(232).uint32(e.RoomMode), null != e.LevelStartTime && e.hasOwnProperty("LevelStartTime") && k.google.protobuf.Timestamp.encode(e.LevelStartTime, t.uint32(242).fork()).ldelim(), null != e.LevelEndTime && e.hasOwnProperty("LevelEndTime") && k.google.protobuf.Timestamp.encode(e.LevelEndTime, t.uint32(250).fork()).ldelim(), null != e.RedPocket && e.hasOwnProperty("RedPocket") && t.uint32(257).double(e.RedPocket), null != e.JackPot && e.hasOwnProperty("JackPot") && t.uint32(265).double(e.JackPot), null != e.RedPocketToolIds && e.hasOwnProperty("RedPocketToolIds") && t.uint32(274).string(e.RedPocketToolIds), null != e.RedPocketBackpackIds && e.hasOwnProperty("RedPocketBackpackIds") && t.uint32(282).string(e.RedPocketBackpackIds), null != e.Bounty && e.hasOwnProperty("Bounty") && t.uint32(289).double(e.Bounty), null != e.Wins && e.hasOwnProperty("Wins") && t.uint32(297).double(e.Wins), null != e.JoinStatus && e.hasOwnProperty("JoinStatus") && t.uint32(304).int32(e.JoinStatus), null != e.RedPocketIds && e.hasOwnProperty("RedPocketIds") && t.uint32(314).string(e.RedPocketIds), null != e.IsMultiflight && e.hasOwnProperty("IsMultiflight") && t.uint32(320).bool(e.IsMultiflight), null != e.UseFreeTicket && e.hasOwnProperty("UseFreeTicket") && t.uint32(328).bool(e.UseFreeTicket), null != e.UseSatelliteTicket && e.hasOwnProperty("UseSatelliteTicket") && t.uint32(336).bool(e.UseSatelliteTicket), null != e.NameI18N && e.hasOwnProperty("NameI18N") && t.uint32(346).string(e.NameI18N), null != e.IsBl && e.hasOwnProperty("IsBl") && t.uint32(352).bool(e.IsBl), null != e.IsPkw && e.hasOwnProperty("IsPkw") && t.uint32(360).bool(e.IsPkw), null != e.IsWpk && e.hasOwnProperty("IsWpk") && t.uint32(368).bool(e.IsWpk), null != e.DisplayCurrency && e.hasOwnProperty("DisplayCurrency") && t.uint32(378).string(e.DisplayCurrency), null != e.ExchangeRate && e.hasOwnProperty("ExchangeRate") && t.uint32(385).double(e.ExchangeRate), null != e.CelebrityHunt && e.hasOwnProperty("CelebrityHunt") && t.uint32(393).double(e.CelebrityHunt), null != e.ExchangeTakein && e.hasOwnProperty("ExchangeTakein") && t.uint32(401).double(e.ExchangeTakein), null != e.ExchangePrizeMoney && e.hasOwnProperty("ExchangePrizeMoney") && t.uint32(409).double(e.ExchangePrizeMoney), null != e.RegGoldType && e.hasOwnProperty("RegGoldType") && t.uint32(416).int32(e.RegGoldType), null != e.IsWpto && e.hasOwnProperty("IsWpto") && t.uint32(424).bool(e.IsWpto), null != e.WinInfos && e.hasOwnProperty("WinInfos") && t.uint32(434).string(e.WinInfos), null != e.Uuid && e.hasOwnProperty("Uuid") && t.uint32(442).string(e.Uuid), null != e.BlockRobotNum && e.hasOwnProperty("BlockRobotNum") && t.uint32(448).int32(e.BlockRobotNum), null != e.EmojiFee && e.hasOwnProperty("EmojiFee") && t.uint32(457).double(e.EmojiFee), null != e.MorebyNum && e.hasOwnProperty("MorebyNum") && t.uint32(464).int32(e.MorebyNum), null != e.MorebyGoldAmount && e.hasOwnProperty("MorebyGoldAmount") && t.uint32(473).double(e.MorebyGoldAmount), null != e.MorebyTicketAmount && e.hasOwnProperty("MorebyTicketAmount") && t.uint32(481).double(e.MorebyTicketAmount), null != e.RedPocket_Usd && e.hasOwnProperty("RedPocket_Usd") && t.uint32(489).double(e.RedPocket_Usd), null != e.TakeinTicketAmount && e.hasOwnProperty("TakeinTicketAmount") && t.uint32(497).double(e.TakeinTicketAmount), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.GameResult; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.GameMode = e.uint32();
                            break;
                        case 3:
                            o.TypeId = e.uint32();
                            break;
                        case 4:
                            o.LevelId = e.uint32();
                            break;
                        case 5:
                            o.RoomId = e.uint32();
                            break;
                        case 6:
                            o.SectionId = e.uint32();
                            break;
                        case 7:
                            o.TournamentId = e.uint32();
                            break;
                        case 8:
                            o.TournamentMode = e.uint32();
                            break;
                        case 9:
                            o.IsAofSng = e.bool();
                            break;
                        case 10:
                            o.UserId = e.uint32();
                            break;
                        case 11:
                            o.Name = e.string();
                            break;
                        case 12:
                            o.NumPlayers = e.uint32();
                            break;
                        case 13:
                            o.PPBasePot = e.double();
                            break;
                        case 14:
                            o.TotalFee = e.double();
                            break;
                        case 15:
                            o.CommissionFee = e.double();
                            break;
                        case 16:
                            o.EndTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 17:
                            o.PrizeMoney = e.double();
                            break;
                        case 18:
                            o.PrizeTool = e.uint32();
                            break;
                        case 19:
                            o.Rank = e.int32();
                            break;
                        case 20:
                            o.GameTimeSec = e.uint32();
                            break;
                        case 21:
                            o.BuyCount = e.uint32();
                            break;
                        case 22:
                            o.PlayerTakeIn = e.double();
                            break;
                        case 23:
                            o.TotalTakeIn = e.double();
                            break;
                        case 24:
                            o.PlatformCommission = e.double();
                            break;
                        case 25:
                            o.AssoCommission = e.double();
                            break;
                        case 26:
                            o.TotalRounds = e.uint32();
                            break;
                        case 27:
                            o.PlayOnJoint = e.uint32();
                            break;
                        case 28:
                            o.TotalGamePot = e.double();
                            break;
                        case 29:
                            o.RoomMode = e.uint32();
                            break;
                        case 30:
                            o.LevelStartTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 31:
                            o.LevelEndTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 32:
                            o.RedPocket = e.double();
                            break;
                        case 33:
                            o.JackPot = e.double();
                            break;
                        case 34:
                            o.RedPocketToolIds = e.string();
                            break;
                        case 35:
                            o.RedPocketBackpackIds = e.string();
                            break;
                        case 36:
                            o.Bounty = e.double();
                            break;
                        case 37:
                            o.Wins = e.double();
                            break;
                        case 38:
                            o.JoinStatus = e.int32();
                            break;
                        case 39:
                            o.RedPocketIds = e.string();
                            break;
                        case 40:
                            o.IsMultiflight = e.bool();
                            break;
                        case 41:
                            o.UseFreeTicket = e.bool();
                            break;
                        case 42:
                            o.UseSatelliteTicket = e.bool();
                            break;
                        case 43:
                            o.NameI18N = e.string();
                            break;
                        case 44:
                            o.IsBl = e.bool();
                            break;
                        case 45:
                            o.IsPkw = e.bool();
                            break;
                        case 46:
                            o.IsWpk = e.bool();
                            break;
                        case 47:
                            o.DisplayCurrency = e.string();
                            break;
                        case 48:
                            o.ExchangeRate = e.double();
                            break;
                        case 49:
                            o.CelebrityHunt = e.double();
                            break;
                        case 50:
                            o.ExchangeTakein = e.double();
                            break;
                        case 51:
                            o.ExchangePrizeMoney = e.double();
                            break;
                        case 52:
                            o.RegGoldType = e.int32();
                            break;
                        case 53:
                            o.IsWpto = e.bool();
                            break;
                        case 54:
                            o.WinInfos = e.string();
                            break;
                        case 55:
                            o.Uuid = e.string();
                            break;
                        case 56:
                            o.BlockRobotNum = e.int32();
                            break;
                        case 57:
                            o.EmojiFee = e.double();
                            break;
                        case 58:
                            o.MorebyNum = e.int32();
                            break;
                        case 59:
                            o.MorebyGoldAmount = e.double();
                            break;
                        case 60:
                            o.MorebyTicketAmount = e.double();
                            break;
                        case 61:
                            o.RedPocket_Usd = e.double();
                            break;
                        case 62:
                            o.TakeinTicketAmount = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.Gift = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Gift", e.prototype.Id = 0, e.prototype.FromUserId = 0, e.prototype.ToUserId = 0, e.prototype.Coins = null, e.prototype.ToolInBackpackId = null, e.prototype.Created = null, e.prototype.Remark = null, e.prototype.ToolId = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                var n;
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.FromUserId && e.hasOwnProperty("FromUserId") && t.uint32(16).uint32(e.FromUserId), null != e.ToUserId && e.hasOwnProperty("ToUserId") && t.uint32(24).uint32(e.ToUserId), e.hasOwnProperty("Coins") && (n = null === e.Coins ? k.dataTypes.NullableFloat64.create({
                    notNull: !1
                }) : void 0 === e.Coins.notNull ? k.dataTypes.NullableFloat64.create({
                    notNull: !0,
                    value: e.Coins
                }) : e.Coins, k.dataTypes.NullableFloat64.encode(n, t.uint32(34).fork()).ldelim()), e.hasOwnProperty("ToolInBackpackId") && (n = null === e.ToolInBackpackId ? k.dataTypes.NullableInt64.create({
                    notNull: !1
                }) : void 0 === e.ToolInBackpackId.notNull ? k.dataTypes.NullableInt64.create({
                    notNull: !0,
                    value: e.ToolInBackpackId
                }) : e.ToolInBackpackId, k.dataTypes.NullableInt64.encode(n, t.uint32(42).fork()).ldelim()), e.hasOwnProperty("Created") && (n = null === e.Created ? k.dataTypes.NullableTime.create({
                    notNull: !1
                }) : void 0 === e.Created.notNull ? k.dataTypes.NullableTime.create({
                    notNull: !0,
                    value: e.Created
                }) : e.Created, k.dataTypes.NullableTime.encode(n, t.uint32(50).fork()).ldelim()), e.hasOwnProperty("Remark") && (n = null === e.Remark ? k.dataTypes.NullableString.create({
                    notNull: !1
                }) : void 0 === e.Remark.notNull ? k.dataTypes.NullableString.create({
                    notNull: !0,
                    value: e.Remark
                }) : e.Remark, k.dataTypes.NullableString.encode(n, t.uint32(58).fork()).ldelim()), e.hasOwnProperty("ToolId") && (n = null === e.ToolId ? k.dataTypes.NullableInt64.create({
                    notNull: !1
                }) : void 0 === e.ToolId.notNull ? k.dataTypes.NullableInt64.create({
                    notNull: !0,
                    value: e.ToolId
                }) : e.ToolId, k.dataTypes.NullableInt64.encode(n, t.uint32(66).fork()).ldelim()), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.Gift; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.FromUserId = e.uint32();
                            break;
                        case 3:
                            o.ToUserId = e.uint32();
                            break;
                        case 4:
                            var i = k.dataTypes.NullableFloat64.decode(e, e.uint32());
                            o.Coins = i.notNull ? i.value : null;
                            break;
                        case 5:
                            i = k.dataTypes.NullableInt64.decode(e, e.uint32()), o.ToolInBackpackId = i.notNull ? i.value : null;
                            break;
                        case 6:
                            i = k.dataTypes.NullableTime.decode(e, e.uint32()), o.Created = i.notNull ? i.value : null;
                            break;
                        case 7:
                            i = k.dataTypes.NullableString.decode(e, e.uint32()), o.Remark = i.notNull ? i.value : null;
                            break;
                        case 8:
                            i = k.dataTypes.NullableInt64.decode(e, e.uint32()), o.ToolId = i.notNull ? i.value : null;
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.MttTournament = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "MttTournament", e.prototype.Id = 0, e.prototype.TournamentName = "", e.prototype.GameMode = 0, e.prototype.TournamentMode = 0, e.prototype.StartingTime = null, e.prototype.EndingTime = null, e.prototype.UpperLimitPlayers = 0, e.prototype.LowerLimitPlayers = 0, e.prototype.ShowingTime = null, e.prototype.ShowingPosition = 0, e.prototype.RegFee = 0, e.prototype.SrvFee = 0, e.prototype.Seats = 0, e.prototype.StartingCoins = 0, e.prototype.LevelTime = 0, e.prototype.ReBuyLimit = 0, e.prototype.ReentryLimit = 0, e.prototype.SignupLimit = 0, e.prototype.TimeBank = 0, e.prototype.HandForHand = 0, e.prototype.CycleTimeMinutes = 0, e.prototype.BasePot = 0, e.prototype.CurrentPot = 0, e.prototype.Status = 0, e.prototype.RestTime = 0, e.prototype.RestDuration = 0, e.prototype.BlindLevelStopSignup = 0, e.prototype.PrizeCircleProportion = 0, e.prototype.HunterModeBountyProportion = 0, e.prototype.HunterModeBountyIncreasingRate = 0, e.prototype.GameConfig = "", e.prototype.PrizeConfig = "", e.prototype.IsSatelliteMode = !1, e.prototype.PrizeGivenTime = null, e.prototype.SignUpOptions = "", e.prototype.RestBeforeFinal = !1, e.prototype.VoiceInFinal = !1, e.prototype.IsAipt = !1, e.prototype.BaseToolPrize = !1, e.prototype.PlayOnJoint = 0, e.prototype.PlayOnJointLoop = !1, e.prototype.Platform = 0, e.prototype.Desc = "", e.prototype.IpLimit = !1, e.prototype.EndDisplayHours = 0, e.prototype.AllowSignupHours = 0, e.prototype.TournamentNameI18N = "", e.prototype.DescI18N = "", e.prototype.IsNewbieGame = !1, e.prototype.OfflineAipt = !1, e.prototype.IsChampion = !1, e.prototype.ThinkTime = 0, e.prototype.Bullet = 0, e.prototype.RestIntervalLevel = 0, e.prototype.MttMode = 0, e.prototype.SpecialNameDisplay = 0, e.prototype.MultiFlightId = 0, e.prototype.MultiFlightLevel = 0, e.prototype.IsHeadsUp = !1, e.prototype.DisplayTag = "", e.prototype.FinalRoomId = 0, e.prototype.FinalStarted = null, e.prototype.IsCelebrity = !1, e.prototype.CelebrityHunt = 0, e.prototype.DescOnList = "", e.prototype.DescOnListI18N = "", e.prototype.IsBl = !1, e.prototype.IsPkw = !1, e.prototype.IsWpk = !1, e.prototype.TournamentInfo = "", e.prototype.TournamentInfoI18N = "", e.prototype.BlindHands = 0, e.prototype.DisplayCurrency = "", e.prototype.DisplayRegFee = 0, e.prototype.DisplaySrvFee = 0, e.prototype.IsWpto = !1, e.prototype.Password = "", e.prototype.RegGoldType = 0, e.prototype.LiveTour = !1, e.prototype.Special = !1, e.prototype.Private = !1, e.prototype.HfhFinalTable = 0, e.prototype.OptionsEx = "", e.prototype.Created = null, e.prototype.CreatedBy = 0, e.prototype.GameDuration = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.TournamentName && e.hasOwnProperty("TournamentName") && t.uint32(18).string(e.TournamentName), null != e.GameMode && e.hasOwnProperty("GameMode") && t.uint32(24).uint32(e.GameMode), null != e.TournamentMode && e.hasOwnProperty("TournamentMode") && t.uint32(32).uint32(e.TournamentMode), null != e.StartingTime && e.hasOwnProperty("StartingTime") && k.google.protobuf.Timestamp.encode(e.StartingTime, t.uint32(42).fork()).ldelim(), null != e.EndingTime && e.hasOwnProperty("EndingTime") && k.google.protobuf.Timestamp.encode(e.EndingTime, t.uint32(50).fork()).ldelim(), null != e.UpperLimitPlayers && e.hasOwnProperty("UpperLimitPlayers") && t.uint32(56).int32(e.UpperLimitPlayers), null != e.LowerLimitPlayers && e.hasOwnProperty("LowerLimitPlayers") && t.uint32(64).int32(e.LowerLimitPlayers), null != e.ShowingTime && e.hasOwnProperty("ShowingTime") && k.google.protobuf.Timestamp.encode(e.ShowingTime, t.uint32(74).fork()).ldelim(), null != e.ShowingPosition && e.hasOwnProperty("ShowingPosition") && t.uint32(80).int32(e.ShowingPosition), null != e.RegFee && e.hasOwnProperty("RegFee") && t.uint32(89).double(e.RegFee), null != e.SrvFee && e.hasOwnProperty("SrvFee") && t.uint32(97).double(e.SrvFee), null != e.Seats && e.hasOwnProperty("Seats") && t.uint32(104).int32(e.Seats), null != e.StartingCoins && e.hasOwnProperty("StartingCoins") && t.uint32(113).double(e.StartingCoins), null != e.LevelTime && e.hasOwnProperty("LevelTime") && t.uint32(120).int32(e.LevelTime), null != e.ReBuyLimit && e.hasOwnProperty("ReBuyLimit") && t.uint32(128).int32(e.ReBuyLimit), null != e.ReentryLimit && e.hasOwnProperty("ReentryLimit") && t.uint32(136).int32(e.ReentryLimit), null != e.SignupLimit && e.hasOwnProperty("SignupLimit") && t.uint32(144).int32(e.SignupLimit), null != e.TimeBank && e.hasOwnProperty("TimeBank") && t.uint32(152).int32(e.TimeBank), null != e.HandForHand && e.hasOwnProperty("HandForHand") && t.uint32(160).int32(e.HandForHand), null != e.CycleTimeMinutes && e.hasOwnProperty("CycleTimeMinutes") && t.uint32(168).int32(e.CycleTimeMinutes), null != e.BasePot && e.hasOwnProperty("BasePot") && t.uint32(177).double(e.BasePot), null != e.CurrentPot && e.hasOwnProperty("CurrentPot") && t.uint32(185).double(e.CurrentPot), null != e.Status && e.hasOwnProperty("Status") && t.uint32(192).int32(e.Status), null != e.RestTime && e.hasOwnProperty("RestTime") && t.uint32(200).int32(e.RestTime), null != e.RestDuration && e.hasOwnProperty("RestDuration") && t.uint32(208).int32(e.RestDuration), null != e.BlindLevelStopSignup && e.hasOwnProperty("BlindLevelStopSignup") && t.uint32(216).int32(e.BlindLevelStopSignup), null != e.PrizeCircleProportion && e.hasOwnProperty("PrizeCircleProportion") && t.uint32(225).double(e.PrizeCircleProportion), null != e.HunterModeBountyProportion && e.hasOwnProperty("HunterModeBountyProportion") && t.uint32(233).double(e.HunterModeBountyProportion), null != e.HunterModeBountyIncreasingRate && e.hasOwnProperty("HunterModeBountyIncreasingRate") && t.uint32(241).double(e.HunterModeBountyIncreasingRate), null != e.GameConfig && e.hasOwnProperty("GameConfig") && t.uint32(250).string(e.GameConfig), null != e.PrizeConfig && e.hasOwnProperty("PrizeConfig") && t.uint32(258).string(e.PrizeConfig), null != e.IsSatelliteMode && e.hasOwnProperty("IsSatelliteMode") && t.uint32(264).bool(e.IsSatelliteMode), null != e.PrizeGivenTime && e.hasOwnProperty("PrizeGivenTime") && k.google.protobuf.Timestamp.encode(e.PrizeGivenTime, t.uint32(274).fork()).ldelim(), null != e.SignUpOptions && e.hasOwnProperty("SignUpOptions") && t.uint32(282).string(e.SignUpOptions), null != e.RestBeforeFinal && e.hasOwnProperty("RestBeforeFinal") && t.uint32(288).bool(e.RestBeforeFinal), null != e.VoiceInFinal && e.hasOwnProperty("VoiceInFinal") && t.uint32(296).bool(e.VoiceInFinal), null != e.IsAipt && e.hasOwnProperty("IsAipt") && t.uint32(304).bool(e.IsAipt), null != e.BaseToolPrize && e.hasOwnProperty("BaseToolPrize") && t.uint32(312).bool(e.BaseToolPrize), null != e.PlayOnJoint && e.hasOwnProperty("PlayOnJoint") && t.uint32(320).uint32(e.PlayOnJoint), null != e.PlayOnJointLoop && e.hasOwnProperty("PlayOnJointLoop") && t.uint32(328).bool(e.PlayOnJointLoop), null != e.Platform && e.hasOwnProperty("Platform") && t.uint32(336).uint32(e.Platform), null != e.Desc && e.hasOwnProperty("Desc") && t.uint32(346).string(e.Desc), null != e.IpLimit && e.hasOwnProperty("IpLimit") && t.uint32(352).bool(e.IpLimit), null != e.EndDisplayHours && e.hasOwnProperty("EndDisplayHours") && t.uint32(360).uint32(e.EndDisplayHours), null != e.AllowSignupHours && e.hasOwnProperty("AllowSignupHours") && t.uint32(368).uint32(e.AllowSignupHours), null != e.TournamentNameI18N && e.hasOwnProperty("TournamentNameI18N") && t.uint32(378).string(e.TournamentNameI18N), null != e.DescI18N && e.hasOwnProperty("DescI18N") && t.uint32(386).string(e.DescI18N), null != e.IsNewbieGame && e.hasOwnProperty("IsNewbieGame") && t.uint32(392).bool(e.IsNewbieGame), null != e.OfflineAipt && e.hasOwnProperty("OfflineAipt") && t.uint32(400).bool(e.OfflineAipt), null != e.IsChampion && e.hasOwnProperty("IsChampion") && t.uint32(408).bool(e.IsChampion), null != e.ThinkTime && e.hasOwnProperty("ThinkTime") && t.uint32(416).int32(e.ThinkTime), null != e.Bullet && e.hasOwnProperty("Bullet") && t.uint32(424).int32(e.Bullet), null != e.RestIntervalLevel && e.hasOwnProperty("RestIntervalLevel") && t.uint32(432).int32(e.RestIntervalLevel), null != e.MttMode && e.hasOwnProperty("MttMode") && t.uint32(440).int32(e.MttMode), null != e.SpecialNameDisplay && e.hasOwnProperty("SpecialNameDisplay") && t.uint32(448).int32(e.SpecialNameDisplay), null != e.MultiFlightId && e.hasOwnProperty("MultiFlightId") && t.uint32(456).uint32(e.MultiFlightId), null != e.MultiFlightLevel && e.hasOwnProperty("MultiFlightLevel") && t.uint32(464).uint32(e.MultiFlightLevel), null != e.IsHeadsUp && e.hasOwnProperty("IsHeadsUp") && t.uint32(472).bool(e.IsHeadsUp), null != e.DisplayTag && e.hasOwnProperty("DisplayTag") && t.uint32(482).string(e.DisplayTag), null != e.FinalRoomId && e.hasOwnProperty("FinalRoomId") && t.uint32(488).uint32(e.FinalRoomId), null != e.FinalStarted && e.hasOwnProperty("FinalStarted") && k.google.protobuf.Timestamp.encode(e.FinalStarted, t.uint32(498).fork()).ldelim(), null != e.IsCelebrity && e.hasOwnProperty("IsCelebrity") && t.uint32(504).bool(e.IsCelebrity), null != e.CelebrityHunt && e.hasOwnProperty("CelebrityHunt") && t.uint32(513).double(e.CelebrityHunt), null != e.DescOnList && e.hasOwnProperty("DescOnList") && t.uint32(522).string(e.DescOnList), null != e.DescOnListI18N && e.hasOwnProperty("DescOnListI18N") && t.uint32(530).string(e.DescOnListI18N), null != e.IsBl && e.hasOwnProperty("IsBl") && t.uint32(536).bool(e.IsBl), null != e.IsPkw && e.hasOwnProperty("IsPkw") && t.uint32(544).bool(e.IsPkw), null != e.IsWpk && e.hasOwnProperty("IsWpk") && t.uint32(552).bool(e.IsWpk), null != e.TournamentInfo && e.hasOwnProperty("TournamentInfo") && t.uint32(562).string(e.TournamentInfo), null != e.TournamentInfoI18N && e.hasOwnProperty("TournamentInfoI18N") && t.uint32(570).string(e.TournamentInfoI18N), null != e.BlindHands && e.hasOwnProperty("BlindHands") && t.uint32(576).int32(e.BlindHands), null != e.DisplayCurrency && e.hasOwnProperty("DisplayCurrency") && t.uint32(586).string(e.DisplayCurrency), null != e.DisplayRegFee && e.hasOwnProperty("DisplayRegFee") && t.uint32(593).double(e.DisplayRegFee), null != e.DisplaySrvFee && e.hasOwnProperty("DisplaySrvFee") && t.uint32(601).double(e.DisplaySrvFee), null != e.IsWpto && e.hasOwnProperty("IsWpto") && t.uint32(608).bool(e.IsWpto), null != e.Password && e.hasOwnProperty("Password") && t.uint32(618).string(e.Password), null != e.RegGoldType && e.hasOwnProperty("RegGoldType") && t.uint32(624).int32(e.RegGoldType), null != e.LiveTour && e.hasOwnProperty("LiveTour") && t.uint32(632).bool(e.LiveTour), null != e.Special && e.hasOwnProperty("Special") && t.uint32(640).bool(e.Special), null != e.Private && e.hasOwnProperty("Private") && t.uint32(648).bool(e.Private), null != e.HfhFinalTable && e.hasOwnProperty("HfhFinalTable") && t.uint32(656).int32(e.HfhFinalTable), null != e.OptionsEx && e.hasOwnProperty("OptionsEx") && t.uint32(666).string(e.OptionsEx), null != e.Created && e.hasOwnProperty("Created") && k.google.protobuf.Timestamp.encode(e.Created, t.uint32(674).fork()).ldelim(), null != e.CreatedBy && e.hasOwnProperty("CreatedBy") && t.uint32(680).uint32(e.CreatedBy), null != e.GameDuration && e.hasOwnProperty("GameDuration") && t.uint32(688).int32(e.GameDuration), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.MttTournament; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.TournamentName = e.string();
                            break;
                        case 3:
                            o.GameMode = e.uint32();
                            break;
                        case 4:
                            o.TournamentMode = e.uint32();
                            break;
                        case 5:
                            o.StartingTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 6:
                            o.EndingTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 7:
                            o.UpperLimitPlayers = e.int32();
                            break;
                        case 8:
                            o.LowerLimitPlayers = e.int32();
                            break;
                        case 9:
                            o.ShowingTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 10:
                            o.ShowingPosition = e.int32();
                            break;
                        case 11:
                            o.RegFee = e.double();
                            break;
                        case 12:
                            o.SrvFee = e.double();
                            break;
                        case 13:
                            o.Seats = e.int32();
                            break;
                        case 14:
                            o.StartingCoins = e.double();
                            break;
                        case 15:
                            o.LevelTime = e.int32();
                            break;
                        case 16:
                            o.ReBuyLimit = e.int32();
                            break;
                        case 17:
                            o.ReentryLimit = e.int32();
                            break;
                        case 18:
                            o.SignupLimit = e.int32();
                            break;
                        case 19:
                            o.TimeBank = e.int32();
                            break;
                        case 20:
                            o.HandForHand = e.int32();
                            break;
                        case 21:
                            o.CycleTimeMinutes = e.int32();
                            break;
                        case 22:
                            o.BasePot = e.double();
                            break;
                        case 23:
                            o.CurrentPot = e.double();
                            break;
                        case 24:
                            o.Status = e.int32();
                            break;
                        case 25:
                            o.RestTime = e.int32();
                            break;
                        case 26:
                            o.RestDuration = e.int32();
                            break;
                        case 27:
                            o.BlindLevelStopSignup = e.int32();
                            break;
                        case 28:
                            o.PrizeCircleProportion = e.double();
                            break;
                        case 29:
                            o.HunterModeBountyProportion = e.double();
                            break;
                        case 30:
                            o.HunterModeBountyIncreasingRate = e.double();
                            break;
                        case 31:
                            o.GameConfig = e.string();
                            break;
                        case 32:
                            o.PrizeConfig = e.string();
                            break;
                        case 33:
                            o.IsSatelliteMode = e.bool();
                            break;
                        case 34:
                            o.PrizeGivenTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 35:
                            o.SignUpOptions = e.string();
                            break;
                        case 36:
                            o.RestBeforeFinal = e.bool();
                            break;
                        case 37:
                            o.VoiceInFinal = e.bool();
                            break;
                        case 38:
                            o.IsAipt = e.bool();
                            break;
                        case 39:
                            o.BaseToolPrize = e.bool();
                            break;
                        case 40:
                            o.PlayOnJoint = e.uint32();
                            break;
                        case 41:
                            o.PlayOnJointLoop = e.bool();
                            break;
                        case 42:
                            o.Platform = e.uint32();
                            break;
                        case 43:
                            o.Desc = e.string();
                            break;
                        case 44:
                            o.IpLimit = e.bool();
                            break;
                        case 45:
                            o.EndDisplayHours = e.uint32();
                            break;
                        case 46:
                            o.AllowSignupHours = e.uint32();
                            break;
                        case 47:
                            o.TournamentNameI18N = e.string();
                            break;
                        case 48:
                            o.DescI18N = e.string();
                            break;
                        case 49:
                            o.IsNewbieGame = e.bool();
                            break;
                        case 50:
                            o.OfflineAipt = e.bool();
                            break;
                        case 51:
                            o.IsChampion = e.bool();
                            break;
                        case 52:
                            o.ThinkTime = e.int32();
                            break;
                        case 53:
                            o.Bullet = e.int32();
                            break;
                        case 54:
                            o.RestIntervalLevel = e.int32();
                            break;
                        case 55:
                            o.MttMode = e.int32();
                            break;
                        case 56:
                            o.SpecialNameDisplay = e.int32();
                            break;
                        case 57:
                            o.MultiFlightId = e.uint32();
                            break;
                        case 58:
                            o.MultiFlightLevel = e.uint32();
                            break;
                        case 59:
                            o.IsHeadsUp = e.bool();
                            break;
                        case 60:
                            o.DisplayTag = e.string();
                            break;
                        case 61:
                            o.FinalRoomId = e.uint32();
                            break;
                        case 62:
                            o.FinalStarted = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 63:
                            o.IsCelebrity = e.bool();
                            break;
                        case 64:
                            o.CelebrityHunt = e.double();
                            break;
                        case 65:
                            o.DescOnList = e.string();
                            break;
                        case 66:
                            o.DescOnListI18N = e.string();
                            break;
                        case 67:
                            o.IsBl = e.bool();
                            break;
                        case 68:
                            o.IsPkw = e.bool();
                            break;
                        case 69:
                            o.IsWpk = e.bool();
                            break;
                        case 70:
                            o.TournamentInfo = e.string();
                            break;
                        case 71:
                            o.TournamentInfoI18N = e.string();
                            break;
                        case 72:
                            o.BlindHands = e.int32();
                            break;
                        case 73:
                            o.DisplayCurrency = e.string();
                            break;
                        case 74:
                            o.DisplayRegFee = e.double();
                            break;
                        case 75:
                            o.DisplaySrvFee = e.double();
                            break;
                        case 76:
                            o.IsWpto = e.bool();
                            break;
                        case 77:
                            o.Password = e.string();
                            break;
                        case 78:
                            o.RegGoldType = e.int32();
                            break;
                        case 79:
                            o.LiveTour = e.bool();
                            break;
                        case 80:
                            o.Special = e.bool();
                            break;
                        case 81:
                            o.Private = e.bool();
                            break;
                        case 82:
                            o.HfhFinalTable = e.int32();
                            break;
                        case 83:
                            o.OptionsEx = e.string();
                            break;
                        case 84:
                            o.Created = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 85:
                            o.CreatedBy = e.uint32();
                            break;
                        case 86:
                            o.GameDuration = e.int32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.SngTournament = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "SngTournament", e.prototype.Id = 0, e.prototype.TournamentName = "", e.prototype.GameMode = 0, e.prototype.RegFee = 0, e.prototype.SrvFee = 0, e.prototype.StartingCoins = 0, e.prototype.Seats = 0, e.prototype.LevelTime = 0, e.prototype.GpsLimit = !1, e.prototype.IpLimit = !1, e.prototype.Status = 0, e.prototype.GameConfig = "", e.prototype.Created = null, e.prototype.CreatedBy = 0, e.prototype.EndingTime = null, e.prototype.Loop = !1, e.prototype.ThinkTime = 0, e.prototype.Bullet = 0, e.prototype.TournamentNameI18N = "", e.prototype.Jackpot = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.TournamentName && e.hasOwnProperty("TournamentName") && t.uint32(18).string(e.TournamentName), null != e.GameMode && e.hasOwnProperty("GameMode") && t.uint32(24).uint32(e.GameMode), null != e.RegFee && e.hasOwnProperty("RegFee") && t.uint32(33).double(e.RegFee), null != e.SrvFee && e.hasOwnProperty("SrvFee") && t.uint32(41).double(e.SrvFee), null != e.StartingCoins && e.hasOwnProperty("StartingCoins") && t.uint32(49).double(e.StartingCoins), null != e.Seats && e.hasOwnProperty("Seats") && t.uint32(56).int32(e.Seats), null != e.LevelTime && e.hasOwnProperty("LevelTime") && t.uint32(64).int32(e.LevelTime), null != e.GpsLimit && e.hasOwnProperty("GpsLimit") && t.uint32(72).bool(e.GpsLimit), null != e.IpLimit && e.hasOwnProperty("IpLimit") && t.uint32(80).bool(e.IpLimit), null != e.Status && e.hasOwnProperty("Status") && t.uint32(88).uint32(e.Status), null != e.GameConfig && e.hasOwnProperty("GameConfig") && t.uint32(98).string(e.GameConfig), null != e.Created && e.hasOwnProperty("Created") && k.google.protobuf.Timestamp.encode(e.Created, t.uint32(106).fork()).ldelim(), null != e.CreatedBy && e.hasOwnProperty("CreatedBy") && t.uint32(112).uint32(e.CreatedBy), null != e.EndingTime && e.hasOwnProperty("EndingTime") && k.google.protobuf.Timestamp.encode(e.EndingTime, t.uint32(122).fork()).ldelim(), null != e.Loop && e.hasOwnProperty("Loop") && t.uint32(128).bool(e.Loop), null != e.ThinkTime && e.hasOwnProperty("ThinkTime") && t.uint32(136).int32(e.ThinkTime), null != e.Bullet && e.hasOwnProperty("Bullet") && t.uint32(144).int32(e.Bullet), null != e.TournamentNameI18N && e.hasOwnProperty("TournamentNameI18N") && t.uint32(154).string(e.TournamentNameI18N), null != e.Jackpot && e.hasOwnProperty("Jackpot") && t.uint32(161).double(e.Jackpot), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.SngTournament; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.TournamentName = e.string();
                            break;
                        case 3:
                            o.GameMode = e.uint32();
                            break;
                        case 4:
                            o.RegFee = e.double();
                            break;
                        case 5:
                            o.SrvFee = e.double();
                            break;
                        case 6:
                            o.StartingCoins = e.double();
                            break;
                        case 7:
                            o.Seats = e.int32();
                            break;
                        case 8:
                            o.LevelTime = e.int32();
                            break;
                        case 9:
                            o.GpsLimit = e.bool();
                            break;
                        case 10:
                            o.IpLimit = e.bool();
                            break;
                        case 11:
                            o.Status = e.uint32();
                            break;
                        case 12:
                            o.GameConfig = e.string();
                            break;
                        case 13:
                            o.Created = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 14:
                            o.CreatedBy = e.uint32();
                            break;
                        case 15:
                            o.EndingTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 16:
                            o.Loop = e.bool();
                            break;
                        case 17:
                            o.ThinkTime = e.int32();
                            break;
                        case 18:
                            o.Bullet = e.int32();
                            break;
                        case 19:
                            o.TournamentNameI18N = e.string();
                            break;
                        case 20:
                            o.Jackpot = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.GuessCardLogs = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "GuessCardLogs", e.prototype.Id = 0, e.prototype.UserId = 0, e.prototype.BetTime = null, e.prototype.ResultTime = null, e.prototype.BetCoin = 0, e.prototype.BetType = 0, e.prototype.Result = "", e.prototype.Profit = 0, e.prototype.Category = 0, e.prototype.GameId = 0, e.prototype.RoomId = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(16).uint32(e.UserId), null != e.BetTime && e.hasOwnProperty("BetTime") && k.google.protobuf.Timestamp.encode(e.BetTime, t.uint32(26).fork()).ldelim(), null != e.ResultTime && e.hasOwnProperty("ResultTime") && k.google.protobuf.Timestamp.encode(e.ResultTime, t.uint32(34).fork()).ldelim(), null != e.BetCoin && e.hasOwnProperty("BetCoin") && t.uint32(41).double(e.BetCoin), null != e.BetType && e.hasOwnProperty("BetType") && t.uint32(48).uint32(e.BetType), null != e.Result && e.hasOwnProperty("Result") && t.uint32(58).string(e.Result), null != e.Profit && e.hasOwnProperty("Profit") && t.uint32(65).double(e.Profit), null != e.Category && e.hasOwnProperty("Category") && t.uint32(72).uint32(e.Category), null != e.GameId && e.hasOwnProperty("GameId") && t.uint32(80).uint32(e.GameId), null != e.RoomId && e.hasOwnProperty("RoomId") && t.uint32(88).uint32(e.RoomId), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.GuessCardLogs; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.UserId = e.uint32();
                            break;
                        case 3:
                            o.BetTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 4:
                            o.ResultTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 5:
                            o.BetCoin = e.double();
                            break;
                        case 6:
                            o.BetType = e.uint32();
                            break;
                        case 7:
                            o.Result = e.string();
                            break;
                        case 8:
                            o.Profit = e.double();
                            break;
                        case 9:
                            o.Category = e.uint32();
                            break;
                        case 10:
                            o.GameId = e.uint32();
                            break;
                        case 11:
                            o.RoomId = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.CowboyHoldemActivityRewards = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "CowboyHoldemActivityRewards", e.prototype.Id = 0, e.prototype.UserId = 0, e.prototype.AssoId = 0, e.prototype.ActivityId = 0, e.prototype.MembersTotalBetAmount = 0, e.prototype.MembersTotalCommission = 0, e.prototype.RewardAmount = 0, e.prototype.Status = 0, e.prototype.Created = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(16).uint32(e.UserId), null != e.AssoId && e.hasOwnProperty("AssoId") && t.uint32(24).uint32(e.AssoId), null != e.ActivityId && e.hasOwnProperty("ActivityId") && t.uint32(32).uint32(e.ActivityId), null != e.MembersTotalBetAmount && e.hasOwnProperty("MembersTotalBetAmount") && t.uint32(41).double(e.MembersTotalBetAmount), null != e.MembersTotalCommission && e.hasOwnProperty("MembersTotalCommission") && t.uint32(49).double(e.MembersTotalCommission), null != e.RewardAmount && e.hasOwnProperty("RewardAmount") && t.uint32(57).double(e.RewardAmount), null != e.Status && e.hasOwnProperty("Status") && t.uint32(64).int32(e.Status), null != e.Created && e.hasOwnProperty("Created") && k.google.protobuf.Timestamp.encode(e.Created, t.uint32(74).fork()).ldelim(), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.CowboyHoldemActivityRewards; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.UserId = e.uint32();
                            break;
                        case 3:
                            o.AssoId = e.uint32();
                            break;
                        case 4:
                            o.ActivityId = e.uint32();
                            break;
                        case 5:
                            o.MembersTotalBetAmount = e.double();
                            break;
                        case 6:
                            o.MembersTotalCommission = e.double();
                            break;
                        case 7:
                            o.RewardAmount = e.double();
                            break;
                        case 8:
                            o.Status = e.int32();
                            break;
                        case 9:
                            o.Created = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.ToolInBackpack = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "ToolInBackpack", e.prototype.Id = b.Long ? b.Long.fromBits(0, 0, !0) : 0, e.prototype.ToolId = 0, e.prototype.UserId = 0, e.prototype.Usable = !1, e.prototype.Remark = "", e.prototype.Created = null, e.prototype.TypeId = 0, e.prototype.Expiry = null, e.prototype.Giftable = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint64(e.Id), null != e.ToolId && e.hasOwnProperty("ToolId") && t.uint32(16).uint32(e.ToolId), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(24).uint32(e.UserId), null != e.Usable && e.hasOwnProperty("Usable") && t.uint32(32).bool(e.Usable), null != e.Remark && e.hasOwnProperty("Remark") && t.uint32(42).string(e.Remark), null != e.Created && e.hasOwnProperty("Created") && k.google.protobuf.Timestamp.encode(e.Created, t.uint32(50).fork()).ldelim(), null != e.TypeId && e.hasOwnProperty("TypeId") && t.uint32(56).int32(e.TypeId), null != e.Expiry && e.hasOwnProperty("Expiry") && k.google.protobuf.Timestamp.encode(e.Expiry, t.uint32(66).fork()).ldelim(), null != e.Giftable && e.hasOwnProperty("Giftable") && t.uint32(72).bool(e.Giftable), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.ToolInBackpack; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint64();
                            break;
                        case 2:
                            o.ToolId = e.uint32();
                            break;
                        case 3:
                            o.UserId = e.uint32();
                            break;
                        case 4:
                            o.Usable = e.bool();
                            break;
                        case 5:
                            o.Remark = e.string();
                            break;
                        case 6:
                            o.Created = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 7:
                            o.TypeId = e.int32();
                            break;
                        case 8:
                            o.Expiry = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 9:
                            o.Giftable = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.ToolConsumptions = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "ToolConsumptions", e.prototype.Id = b.Long ? b.Long.fromBits(0, 0, !0) : 0, e.prototype.ToolId = 0, e.prototype.UserId = 0, e.prototype.Remark = "", e.prototype.Created = null, e.prototype.Consumed = null, e.prototype.TypeId = 0, e.prototype.GameId = 0, e.prototype.STypeId = 0, e.prototype.Expired = null, e.prototype.Giftable = !1, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint64(e.Id), null != e.ToolId && e.hasOwnProperty("ToolId") && t.uint32(16).uint32(e.ToolId), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(24).uint32(e.UserId), null != e.Remark && e.hasOwnProperty("Remark") && t.uint32(34).string(e.Remark), null != e.Created && e.hasOwnProperty("Created") && k.google.protobuf.Timestamp.encode(e.Created, t.uint32(42).fork()).ldelim(), null != e.Consumed && e.hasOwnProperty("Consumed") && k.google.protobuf.Timestamp.encode(e.Consumed, t.uint32(50).fork()).ldelim(), null != e.TypeId && e.hasOwnProperty("TypeId") && t.uint32(56).uint32(e.TypeId), null != e.GameId && e.hasOwnProperty("GameId") && t.uint32(64).uint32(e.GameId), null != e.STypeId && e.hasOwnProperty("STypeId") && t.uint32(72).int32(e.STypeId), null != e.Expired && e.hasOwnProperty("Expired") && k.google.protobuf.Timestamp.encode(e.Expired, t.uint32(82).fork()).ldelim(), null != e.Giftable && e.hasOwnProperty("Giftable") && t.uint32(88).bool(e.Giftable), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.ToolConsumptions; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint64();
                            break;
                        case 2:
                            o.ToolId = e.uint32();
                            break;
                        case 3:
                            o.UserId = e.uint32();
                            break;
                        case 4:
                            o.Remark = e.string();
                            break;
                        case 5:
                            o.Created = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 6:
                            o.Consumed = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 7:
                            o.TypeId = e.uint32();
                            break;
                        case 8:
                            o.GameId = e.uint32();
                            break;
                        case 9:
                            o.STypeId = e.int32();
                            break;
                        case 10:
                            o.Expired = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 11:
                            o.Giftable = e.bool();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.Tool = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Tool", e.prototype.Id = 0, e.prototype.Type = 0, e.prototype.Name = "", e.prototype.IconUrl = "", e.prototype.Value = 0, e.prototype.SellRatio = 0, e.prototype.Config = "", e.prototype.Created = null, e.prototype.Description = "", e.prototype.Remark = "", e.prototype.Expiry = null, e.prototype.GiftConfig = "", e.prototype.NameI18N = "", e.prototype.IconUrlI18N = "", e.prototype.DescriptionI18N = "", e.prototype.Currency = "", e.prototype.Disable = !1, e.prototype.Validity = 0, e.prototype.CreatedBy = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.Type && e.hasOwnProperty("Type") && t.uint32(16).uint32(e.Type), null != e.Name && e.hasOwnProperty("Name") && t.uint32(26).string(e.Name), null != e.IconUrl && e.hasOwnProperty("IconUrl") && t.uint32(34).string(e.IconUrl), null != e.Value && e.hasOwnProperty("Value") && t.uint32(45).float(e.Value), null != e.SellRatio && e.hasOwnProperty("SellRatio") && t.uint32(53).float(e.SellRatio), null != e.Config && e.hasOwnProperty("Config") && t.uint32(58).string(e.Config), null != e.Created && e.hasOwnProperty("Created") && k.google.protobuf.Timestamp.encode(e.Created, t.uint32(66).fork()).ldelim(), null != e.Description && e.hasOwnProperty("Description") && t.uint32(74).string(e.Description), null != e.Remark && e.hasOwnProperty("Remark") && t.uint32(82).string(e.Remark), null != e.Expiry && e.hasOwnProperty("Expiry") && k.google.protobuf.Timestamp.encode(e.Expiry, t.uint32(90).fork()).ldelim(), null != e.GiftConfig && e.hasOwnProperty("GiftConfig") && t.uint32(98).string(e.GiftConfig), null != e.NameI18N && e.hasOwnProperty("NameI18N") && t.uint32(106).string(e.NameI18N), null != e.IconUrlI18N && e.hasOwnProperty("IconUrlI18N") && t.uint32(114).string(e.IconUrlI18N), null != e.DescriptionI18N && e.hasOwnProperty("DescriptionI18N") && t.uint32(122).string(e.DescriptionI18N), null != e.Currency && e.hasOwnProperty("Currency") && t.uint32(130).string(e.Currency), null != e.Disable && e.hasOwnProperty("Disable") && t.uint32(136).bool(e.Disable), null != e.Validity && e.hasOwnProperty("Validity") && t.uint32(144).int32(e.Validity), null != e.CreatedBy && e.hasOwnProperty("CreatedBy") && t.uint32(152).uint32(e.CreatedBy), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.Tool; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.Type = e.uint32();
                            break;
                        case 3:
                            o.Name = e.string();
                            break;
                        case 4:
                            o.IconUrl = e.string();
                            break;
                        case 5:
                            o.Value = e.float();
                            break;
                        case 6:
                            o.SellRatio = e.float();
                            break;
                        case 7:
                            o.Config = e.string();
                            break;
                        case 8:
                            o.Created = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 9:
                            o.Description = e.string();
                            break;
                        case 10:
                            o.Remark = e.string();
                            break;
                        case 11:
                            o.Expiry = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 12:
                            o.GiftConfig = e.string();
                            break;
                        case 13:
                            o.NameI18N = e.string();
                            break;
                        case 14:
                            o.IconUrlI18N = e.string();
                            break;
                        case 15:
                            o.DescriptionI18N = e.string();
                            break;
                        case 16:
                            o.Currency = e.string();
                            break;
                        case 17:
                            o.Disable = e.bool();
                            break;
                        case 18:
                            o.Validity = e.int32();
                            break;
                        case 19:
                            o.CreatedBy = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.Banner = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Banner", e.prototype.Id = 0, e.prototype.Name = "", e.prototype.Position = 0, e.prototype.ImagePath = "", e.prototype.BannerPath = "", e.prototype.ClickUrl = "", e.prototype.Clicked = 0, e.prototype.Start = null, e.prototype.Expire = null, e.prototype.Sort = 0, e.prototype.Remark = "", e.prototype.ImagePathI18N = "", e.prototype.BannerPathI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.Name && e.hasOwnProperty("Name") && t.uint32(18).string(e.Name), null != e.Position && e.hasOwnProperty("Position") && t.uint32(24).int32(e.Position), null != e.ImagePath && e.hasOwnProperty("ImagePath") && t.uint32(34).string(e.ImagePath), null != e.BannerPath && e.hasOwnProperty("BannerPath") && t.uint32(42).string(e.BannerPath), null != e.ClickUrl && e.hasOwnProperty("ClickUrl") && t.uint32(50).string(e.ClickUrl), null != e.Clicked && e.hasOwnProperty("Clicked") && t.uint32(56).uint32(e.Clicked), null != e.Start && e.hasOwnProperty("Start") && k.google.protobuf.Timestamp.encode(e.Start, t.uint32(66).fork()).ldelim(), null != e.Expire && e.hasOwnProperty("Expire") && k.google.protobuf.Timestamp.encode(e.Expire, t.uint32(74).fork()).ldelim(), null != e.Sort && e.hasOwnProperty("Sort") && t.uint32(80).int32(e.Sort), null != e.Remark && e.hasOwnProperty("Remark") && t.uint32(90).string(e.Remark), null != e.ImagePathI18N && e.hasOwnProperty("ImagePathI18N") && t.uint32(98).string(e.ImagePathI18N), null != e.BannerPathI18N && e.hasOwnProperty("BannerPathI18N") && t.uint32(106).string(e.BannerPathI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.Banner; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.Name = e.string();
                            break;
                        case 3:
                            o.Position = e.int32();
                            break;
                        case 4:
                            o.ImagePath = e.string();
                            break;
                        case 5:
                            o.BannerPath = e.string();
                            break;
                        case 6:
                            o.ClickUrl = e.string();
                            break;
                        case 7:
                            o.Clicked = e.uint32();
                            break;
                        case 8:
                            o.Start = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 9:
                            o.Expire = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 10:
                            o.Sort = e.int32();
                            break;
                        case 11:
                            o.Remark = e.string();
                            break;
                        case 12:
                            o.ImagePathI18N = e.string();
                            break;
                        case 13:
                            o.BannerPathI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.Events = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Events", e.prototype.Id = 0, e.prototype.Name = "", e.prototype.ListImageUrl = "", e.prototype.ContentImageUrl = "", e.prototype.Status = 0, e.prototype.Created = null, e.prototype.ListImageUrlI18N = "", e.prototype.ContentImageUrlI18N = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.Name && e.hasOwnProperty("Name") && t.uint32(18).string(e.Name), null != e.ListImageUrl && e.hasOwnProperty("ListImageUrl") && t.uint32(26).string(e.ListImageUrl), null != e.ContentImageUrl && e.hasOwnProperty("ContentImageUrl") && t.uint32(34).string(e.ContentImageUrl), null != e.Status && e.hasOwnProperty("Status") && t.uint32(40).int32(e.Status), null != e.Created && e.hasOwnProperty("Created") && k.google.protobuf.Timestamp.encode(e.Created, t.uint32(50).fork()).ldelim(), null != e.ListImageUrlI18N && e.hasOwnProperty("ListImageUrlI18N") && t.uint32(58).string(e.ListImageUrlI18N), null != e.ContentImageUrlI18N && e.hasOwnProperty("ContentImageUrlI18N") && t.uint32(66).string(e.ContentImageUrlI18N), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.Events; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.Name = e.string();
                            break;
                        case 3:
                            o.ListImageUrl = e.string();
                            break;
                        case 4:
                            o.ContentImageUrl = e.string();
                            break;
                        case 5:
                            o.Status = e.int32();
                            break;
                        case 6:
                            o.Created = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 7:
                            o.ListImageUrlI18N = e.string();
                            break;
                        case 8:
                            o.ContentImageUrlI18N = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.TransferCofferLog = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "TransferCofferLog", e.prototype.Id = 0, e.prototype.UserId = 0, e.prototype.Amount = 0, e.prototype.Created = null, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(16).uint32(e.UserId), null != e.Amount && e.hasOwnProperty("Amount") && t.uint32(25).double(e.Amount), null != e.Created && e.hasOwnProperty("Created") && k.google.protobuf.Timestamp.encode(e.Created, t.uint32(34).fork()).ldelim(), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.TransferCofferLog; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.UserId = e.uint32();
                            break;
                        case 3:
                            o.Amount = e.double();
                            break;
                        case 4:
                            o.Created = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.LotteryEvent = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "LotteryEvent", e.prototype.Id = 0, e.prototype.Name = "", e.prototype.NameI18N = "", e.prototype.Created = null, e.prototype.StartTime = null, e.prototype.Category = 0, e.prototype.ToolId = 0, e.prototype.CarousellFormat = "", e.prototype.CarousellFormatI18N = "", e.prototype.Status = 0, e.prototype.Description = "", e.prototype.DescriptionI18N = "", e.prototype.CreatedBy = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.Name && e.hasOwnProperty("Name") && t.uint32(18).string(e.Name), null != e.NameI18N && e.hasOwnProperty("NameI18N") && t.uint32(26).string(e.NameI18N), null != e.Created && e.hasOwnProperty("Created") && k.google.protobuf.Timestamp.encode(e.Created, t.uint32(34).fork()).ldelim(), null != e.StartTime && e.hasOwnProperty("StartTime") && k.google.protobuf.Timestamp.encode(e.StartTime, t.uint32(42).fork()).ldelim(), null != e.Category && e.hasOwnProperty("Category") && t.uint32(48).int32(e.Category), null != e.ToolId && e.hasOwnProperty("ToolId") && t.uint32(56).uint32(e.ToolId), null != e.CarousellFormat && e.hasOwnProperty("CarousellFormat") && t.uint32(66).string(e.CarousellFormat), null != e.CarousellFormatI18N && e.hasOwnProperty("CarousellFormatI18N") && t.uint32(74).string(e.CarousellFormatI18N), null != e.Status && e.hasOwnProperty("Status") && t.uint32(80).int32(e.Status), null != e.Description && e.hasOwnProperty("Description") && t.uint32(90).string(e.Description), null != e.DescriptionI18N && e.hasOwnProperty("DescriptionI18N") && t.uint32(98).string(e.DescriptionI18N), null != e.CreatedBy && e.hasOwnProperty("CreatedBy") && t.uint32(104).uint32(e.CreatedBy), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.LotteryEvent; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.Name = e.string();
                            break;
                        case 3:
                            o.NameI18N = e.string();
                            break;
                        case 4:
                            o.Created = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 5:
                            o.StartTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 6:
                            o.Category = e.int32();
                            break;
                        case 7:
                            o.ToolId = e.uint32();
                            break;
                        case 8:
                            o.CarousellFormat = e.string();
                            break;
                        case 9:
                            o.CarousellFormatI18N = e.string();
                            break;
                        case 10:
                            o.Status = e.int32();
                            break;
                        case 11:
                            o.Description = e.string();
                            break;
                        case 12:
                            o.DescriptionI18N = e.string();
                            break;
                        case 13:
                            o.CreatedBy = e.uint32();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.Association = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "Association", e.prototype.Id = 0, e.prototype.Name = "", e.prototype.Introduce = null, e.prototype.CreateTime = null, e.prototype.Status = 0, e.prototype.ReviewTime = null, e.prototype.ReviewRemark = null, e.prototype.CreatorId = 0, e.prototype.ParentAssociationId = 0, e.prototype.Tier = 0, e.prototype.DirectMemberCount = 0, e.prototype.MemberPolicy = 0, e.prototype.UpShareRate = 0, e.prototype.DownShareRate = 0, e.prototype.Gold = 0, e.prototype.GoldRecord = 0, e.prototype.GoldRecordChecksum = "", e.prototype.AreaCode = null, e.prototype.Mobile = null, e.prototype.Email = null, e.prototype.Remark = null, e.prototype.Contribution = 0, e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                var n;
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.Name && e.hasOwnProperty("Name") && t.uint32(18).string(e.Name), e.hasOwnProperty("Introduce") && (n = null === e.Introduce ? k.dataTypes.NullableString.create({
                    notNull: !1
                }) : void 0 === e.Introduce.notNull ? k.dataTypes.NullableString.create({
                    notNull: !0,
                    value: e.Introduce
                }) : e.Introduce, k.dataTypes.NullableString.encode(n, t.uint32(26).fork()).ldelim()), null != e.CreateTime && e.hasOwnProperty("CreateTime") && k.google.protobuf.Timestamp.encode(e.CreateTime, t.uint32(34).fork()).ldelim(), null != e.Status && e.hasOwnProperty("Status") && t.uint32(40).int32(e.Status), e.hasOwnProperty("ReviewTime") && (n = null === e.ReviewTime ? k.dataTypes.NullableTime.create({
                    notNull: !1
                }) : void 0 === e.ReviewTime.notNull ? k.dataTypes.NullableTime.create({
                    notNull: !0,
                    value: e.ReviewTime
                }) : e.ReviewTime, k.dataTypes.NullableTime.encode(n, t.uint32(50).fork()).ldelim()), e.hasOwnProperty("ReviewRemark") && (n = null === e.ReviewRemark ? k.dataTypes.NullableString.create({
                    notNull: !1
                }) : void 0 === e.ReviewRemark.notNull ? k.dataTypes.NullableString.create({
                    notNull: !0,
                    value: e.ReviewRemark
                }) : e.ReviewRemark, k.dataTypes.NullableString.encode(n, t.uint32(58).fork()).ldelim()), null != e.CreatorId && e.hasOwnProperty("CreatorId") && t.uint32(64).uint32(e.CreatorId), null != e.ParentAssociationId && e.hasOwnProperty("ParentAssociationId") && t.uint32(72).uint32(e.ParentAssociationId), null != e.Tier && e.hasOwnProperty("Tier") && t.uint32(80).int32(e.Tier), null != e.DirectMemberCount && e.hasOwnProperty("DirectMemberCount") && t.uint32(88).uint32(e.DirectMemberCount), null != e.MemberPolicy && e.hasOwnProperty("MemberPolicy") && t.uint32(96).int32(e.MemberPolicy), null != e.UpShareRate && e.hasOwnProperty("UpShareRate") && t.uint32(109).float(e.UpShareRate), null != e.DownShareRate && e.hasOwnProperty("DownShareRate") && t.uint32(117).float(e.DownShareRate), null != e.Gold && e.hasOwnProperty("Gold") && t.uint32(121).double(e.Gold), null != e.GoldRecord && e.hasOwnProperty("GoldRecord") && t.uint32(129).double(e.GoldRecord), null != e.GoldRecordChecksum && e.hasOwnProperty("GoldRecordChecksum") && t.uint32(138).string(e.GoldRecordChecksum), e.hasOwnProperty("AreaCode") && (n = null === e.AreaCode ? k.dataTypes.NullableString.create({
                    notNull: !1
                }) : void 0 === e.AreaCode.notNull ? k.dataTypes.NullableString.create({
                    notNull: !0,
                    value: e.AreaCode
                }) : e.AreaCode, k.dataTypes.NullableString.encode(n, t.uint32(146).fork()).ldelim()), e.hasOwnProperty("Mobile") && (n = null === e.Mobile ? k.dataTypes.NullableString.create({
                    notNull: !1
                }) : void 0 === e.Mobile.notNull ? k.dataTypes.NullableString.create({
                    notNull: !0,
                    value: e.Mobile
                }) : e.Mobile, k.dataTypes.NullableString.encode(n, t.uint32(154).fork()).ldelim()), e.hasOwnProperty("Email") && (n = null === e.Email ? k.dataTypes.NullableString.create({
                    notNull: !1
                }) : void 0 === e.Email.notNull ? k.dataTypes.NullableString.create({
                    notNull: !0,
                    value: e.Email
                }) : e.Email, k.dataTypes.NullableString.encode(n, t.uint32(162).fork()).ldelim()), e.hasOwnProperty("Remark") && (n = null === e.Remark ? k.dataTypes.NullableString.create({
                    notNull: !1
                }) : void 0 === e.Remark.notNull ? k.dataTypes.NullableString.create({
                    notNull: !0,
                    value: e.Remark
                }) : e.Remark, k.dataTypes.NullableString.encode(n, t.uint32(170).fork()).ldelim()), null != e.Contribution && e.hasOwnProperty("Contribution") && t.uint32(177).double(e.Contribution), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.Association; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.Name = e.string();
                            break;
                        case 3:
                            var i = k.dataTypes.NullableString.decode(e, e.uint32());
                            o.Introduce = i.notNull ? i.value : null;
                            break;
                        case 4:
                            o.CreateTime = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 5:
                            o.Status = e.int32();
                            break;
                        case 6:
                            i = k.dataTypes.NullableTime.decode(e, e.uint32()), o.ReviewTime = i.notNull ? i.value : null;
                            break;
                        case 7:
                            i = k.dataTypes.NullableString.decode(e, e.uint32()), o.ReviewRemark = i.notNull ? i.value : null;
                            break;
                        case 8:
                            o.CreatorId = e.uint32();
                            break;
                        case 9:
                            o.ParentAssociationId = e.uint32();
                            break;
                        case 10:
                            o.Tier = e.int32();
                            break;
                        case 11:
                            o.DirectMemberCount = e.uint32();
                            break;
                        case 12:
                            o.MemberPolicy = e.int32();
                            break;
                        case 13:
                            o.UpShareRate = e.float();
                            break;
                        case 14:
                            o.DownShareRate = e.float();
                            break;
                        case 15:
                            o.Gold = e.double();
                            break;
                        case 16:
                            o.GoldRecord = e.double();
                            break;
                        case 17:
                            o.GoldRecordChecksum = e.string();
                            break;
                        case 18:
                            i = k.dataTypes.NullableString.decode(e, e.uint32()), o.AreaCode = i.notNull ? i.value : null;
                            break;
                        case 19:
                            i = k.dataTypes.NullableString.decode(e, e.uint32()), o.Mobile = i.notNull ? i.value : null;
                            break;
                        case 20:
                            i = k.dataTypes.NullableString.decode(e, e.uint32()), o.Email = i.notNull ? i.value : null;
                            break;
                        case 21:
                            i = k.dataTypes.NullableString.decode(e, e.uint32()), o.Remark = i.notNull ? i.value : null;
                            break;
                        case 22:
                            o.Contribution = e.double();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m.UserNotice = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.pbName = "UserNotice", e.prototype.Id = 0, e.prototype.UserId = 0, e.prototype.TypeId = 0, e.prototype.Title = "", e.prototype.Body = b.newBuffer([]), e.prototype.Pushed = null, e.prototype.Read = null, e.prototype.Created = null, e.prototype.Expiry = null, e.prototype.MessageType = 0, e.prototype.TitleI18N = "", e.prototype.Uuid = "", e.prototype.Result = "", e.create = function(t) {
                return new e(t)
            }, e.encode = function(e, t) {
                return t || (t = h.create()), null != e.Id && e.hasOwnProperty("Id") && t.uint32(8).uint32(e.Id), null != e.UserId && e.hasOwnProperty("UserId") && t.uint32(16).uint32(e.UserId), null != e.TypeId && e.hasOwnProperty("TypeId") && t.uint32(24).int32(e.TypeId), null != e.Title && e.hasOwnProperty("Title") && t.uint32(34).string(e.Title), null != e.Body && e.hasOwnProperty("Body") && t.uint32(42).bytes(e.Body), null != e.Pushed && e.hasOwnProperty("Pushed") && k.google.protobuf.Timestamp.encode(e.Pushed, t.uint32(50).fork()).ldelim(), null != e.Read && e.hasOwnProperty("Read") && k.google.protobuf.Timestamp.encode(e.Read, t.uint32(58).fork()).ldelim(), null != e.Created && e.hasOwnProperty("Created") && k.google.protobuf.Timestamp.encode(e.Created, t.uint32(66).fork()).ldelim(), null != e.Expiry && e.hasOwnProperty("Expiry") && k.google.protobuf.Timestamp.encode(e.Expiry, t.uint32(74).fork()).ldelim(), null != e.MessageType && e.hasOwnProperty("MessageType") && t.uint32(80).int32(e.MessageType), null != e.TitleI18N && e.hasOwnProperty("TitleI18N") && t.uint32(90).string(e.TitleI18N), null != e.Uuid && e.hasOwnProperty("Uuid") && t.uint32(98).string(e.Uuid), null != e.Result && e.hasOwnProperty("Result") && t.uint32(106).string(e.Result), t
            }, e.prototype.encode = function() {
                return e.encode(this).finish()
            }, e.encodeDelimited = function(e, t) {
                return this.encode(e, t).ldelim()
            }, e.decode = function(e, t) {
                e instanceof y || (e = y.create(e));
                for (var n = void 0 === t ? e.len : e.pos + t, o = new k.modelProto.UserNotice; e.pos < n;) {
                    var r = e.uint32();
                    switch (r >>> 3) {
                        case 1:
                            o.Id = e.uint32();
                            break;
                        case 2:
                            o.UserId = e.uint32();
                            break;
                        case 3:
                            o.TypeId = e.int32();
                            break;
                        case 4:
                            o.Title = e.string();
                            break;
                        case 5:
                            o.Body = e.bytes();
                            break;
                        case 6:
                            o.Pushed = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 7:
                            o.Read = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 8:
                            o.Created = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 9:
                            o.Expiry = k.google.protobuf.Timestamp.decode(e, e.uint32());
                            break;
                        case 10:
                            o.MessageType = e.int32();
                            break;
                        case 11:
                            o.TitleI18N = e.string();
                            break;
                        case 12:
                            o.Uuid = e.string();
                            break;
                        case 13:
                            o.Result = e.string();
                            break;
                        default:
                            e.skipType(7 & r)
                    }
                }
                return o
            }, e.decodeDelimited = function(e) {
                return e instanceof y || (e = new y(e)), this.decode(e, e.uint32())
            }, e
        }(), m), o.exports = k, r = e("default", o.exports)
    }), (() => ({
        "protobufjs/minimal.js": o
    })))
}