import * as t from "./cjs-loader.mjs.js";
import * as n from "./minimal.js";

function main() {
    let o;
    e("default", void 0);
    const i = e("__cjsMetaURL", r.meta.url);
    t.define(i, (function(r, t, n, i, a) {
        var u, c, l, s = t("protobufjs/minimal.js"),
            p = s.Reader,
            v = s.Writer,
            d = s.util,
            f = s.roots.default || (s.roots.default = {});
        f.gate_proto = ((l = {}).CMD = (u = {}, (c = Object.create(u))[u[0] = "CMD_DUMMY"] = 0, c[u[1003] = "CONNECT_SERVER_FAILED_NOTIFY"] = 1003, c[u[1006] = "SERVER_CLOSE_NOTIFY"] = 1006, c[u[1007] = "SERVER_EXCEPT_NOTIFY"] = 1007, c), l.ConnectServerFailedReason = function() {
            var e = {},
                r = Object.create(e);
            return r[e[0] = "Null"] = 0, r[e[1] = "NotFound"] = 1, r[e[2] = "DialFailed"] = 2, r
        }(), l.ErrorCode = function() {
            var e = {},
                r = Object.create(e);
            return r[e[0] = "ErrorCode_DUMMY"] = 0, r[e[1] = "OK"] = 1, r
        }(), l.ConnectServerFailedNotify = function() {
            function e(e) {
                if (e)
                    for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]])
            }
            return e.prototype.ServerType = 0, e.prototype.ServerId = 0, e.prototype.Reason = 0, e.create = function(r) {
                return new e(r)
            }, e.encode = function(e, r) {
                return r || (r = v.create()), null != e.ServerType && Object.hasOwnProperty.call(e, "ServerType") && r.uint32(8).uint32(e.ServerType), null != e.ServerId && Object.hasOwnProperty.call(e, "ServerId") && r.uint32(16).uint32(e.ServerId), null != e.Reason && Object.hasOwnProperty.call(e, "Reason") && r.uint32(24).int32(e.Reason), r
            }, e.encodeDelimited = function(e, r) {
                return this.encode(e, r).ldelim()
            }, e.decode = function(e, r) {
                e instanceof p || (e = p.create(e));
                for (var t = void 0 === r ? e.len : e.pos + r, n = new f.gate_proto.ConnectServerFailedNotify; e.pos < t;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            n.ServerType = e.uint32();
                            break;
                        case 2:
                            n.ServerId = e.uint32();
                            break;
                        case 3:
                            n.Reason = e.int32();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                if ("object" != typeof e || null === e) return "object expected";
                if (null != e.ServerType && e.hasOwnProperty("ServerType") && !d.isInteger(e.ServerType)) return "ServerType: integer expected";
                if (null != e.ServerId && e.hasOwnProperty("ServerId") && !d.isInteger(e.ServerId)) return "ServerId: integer expected";
                if (null != e.Reason && e.hasOwnProperty("Reason")) switch (e.Reason) {
                    default:
                        return "Reason: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                }
                return null
            }, e.fromObject = function(e) {
                if (e instanceof f.gate_proto.ConnectServerFailedNotify) return e;
                var r = new f.gate_proto.ConnectServerFailedNotify;
                switch (null != e.ServerType && (r.ServerType = e.ServerType >>> 0), null != e.ServerId && (r.ServerId = e.ServerId >>> 0), e.Reason) {
                    default:
                        if ("number" == typeof e.Reason) {
                            r.Reason = e.Reason;
                            break
                        }
                        break;
                    case "Null":
                    case 0:
                        r.Reason = 0;
                        break;
                    case "NotFound":
                    case 1:
                        r.Reason = 1;
                        break;
                    case "DialFailed":
                    case 2:
                        r.Reason = 2
                }
                return r
            }, e.toObject = function(e, r) {
                r || (r = {});
                var t = {};
                return r.defaults && (t.ServerType = 0, t.ServerId = 0, t.Reason = r.enums === String ? "Null" : 0), null != e.ServerType && e.hasOwnProperty("ServerType") && (t.ServerType = e.ServerType), null != e.ServerId && e.hasOwnProperty("ServerId") && (t.ServerId = e.ServerId), null != e.Reason && e.hasOwnProperty("Reason") && (t.Reason = r.enums === String ? void 0 === f.gate_proto.ConnectServerFailedReason[e.Reason] ? e.Reason : f.gate_proto.ConnectServerFailedReason[e.Reason] : e.Reason), t
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, s.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/gate_proto.ConnectServerFailedNotify"
            }, e
        }(), l.ServerCloseNotify = function() {
            function e(e) {
                if (e)
                    for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]])
            }
            return e.prototype.ServerType = 0, e.prototype.ServerId = 0, e.prototype.CreateTime = d.Long ? d.Long.fromBits(0, 0, !1) : 0, e.create = function(r) {
                return new e(r)
            }, e.encode = function(e, r) {
                return r || (r = v.create()), null != e.ServerType && Object.hasOwnProperty.call(e, "ServerType") && r.uint32(8).uint32(e.ServerType), null != e.ServerId && Object.hasOwnProperty.call(e, "ServerId") && r.uint32(16).uint32(e.ServerId), null != e.CreateTime && Object.hasOwnProperty.call(e, "CreateTime") && r.uint32(24).int64(e.CreateTime), r
            }, e.encodeDelimited = function(e, r) {
                return this.encode(e, r).ldelim()
            }, e.decode = function(e, r) {
                e instanceof p || (e = p.create(e));
                for (var t = void 0 === r ? e.len : e.pos + r, n = new f.gate_proto.ServerCloseNotify; e.pos < t;) {
                    var o = e.uint32();
                    switch (o >>> 3) {
                        case 1:
                            n.ServerType = e.uint32();
                            break;
                        case 2:
                            n.ServerId = e.uint32();
                            break;
                        case 3:
                            n.CreateTime = e.int64();
                            break;
                        default:
                            e.skipType(7 & o)
                    }
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.ServerType && e.hasOwnProperty("ServerType") && !d.isInteger(e.ServerType) ? "ServerType: integer expected" : null != e.ServerId && e.hasOwnProperty("ServerId") && !d.isInteger(e.ServerId) ? "ServerId: integer expected" : null != e.CreateTime && e.hasOwnProperty("CreateTime") && !(d.isInteger(e.CreateTime) || e.CreateTime && d.isInteger(e.CreateTime.low) && d.isInteger(e.CreateTime.high)) ? "CreateTime: integer|Long expected" : null
            }, e.fromObject = function(e) {
                if (e instanceof f.gate_proto.ServerCloseNotify) return e;
                var r = new f.gate_proto.ServerCloseNotify;
                return null != e.ServerType && (r.ServerType = e.ServerType >>> 0), null != e.ServerId && (r.ServerId = e.ServerId >>> 0), null != e.CreateTime && (d.Long ? (r.CreateTime = d.Long.fromValue(e.CreateTime)).unsigned = !1 : "string" == typeof e.CreateTime ? r.CreateTime = parseInt(e.CreateTime, 10) : "number" == typeof e.CreateTime ? r.CreateTime = e.CreateTime : "object" == typeof e.CreateTime && (r.CreateTime = new d.LongBits(e.CreateTime.low >>> 0, e.CreateTime.high >>> 0).toNumber())), r
            }, e.toObject = function(e, r) {
                r || (r = {});
                var t = {};
                if (r.defaults)
                    if (t.ServerType = 0, t.ServerId = 0, d.Long) {
                        var n = new d.Long(0, 0, !1);
                        t.CreateTime = r.longs === String ? n.toString() : r.longs === Number ? n.toNumber() : n
                    } else t.CreateTime = r.longs === String ? "0" : 0;
                return null != e.ServerType && e.hasOwnProperty("ServerType") && (t.ServerType = e.ServerType), null != e.ServerId && e.hasOwnProperty("ServerId") && (t.ServerId = e.ServerId), null != e.CreateTime && e.hasOwnProperty("CreateTime") && ("number" == typeof e.CreateTime ? t.CreateTime = r.longs === String ? String(e.CreateTime) : e.CreateTime : t.CreateTime = r.longs === String ? d.Long.prototype.toString.call(e.CreateTime) : r.longs === Number ? new d.LongBits(e.CreateTime.low >>> 0, e.CreateTime.high >>> 0).toNumber() : e.CreateTime), t
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, s.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/gate_proto.ServerCloseNotify"
            }, e
        }(), l.ServerExceptNotify = function() {
            function e(e) {
                if (e)
                    for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]])
            }
            return e.create = function(r) {
                return new e(r)
            }, e.encode = function(e, r) {
                return r || (r = v.create()), r
            }, e.encodeDelimited = function(e, r) {
                return this.encode(e, r).ldelim()
            }, e.decode = function(e, r) {
                e instanceof p || (e = p.create(e));
                for (var t = void 0 === r ? e.len : e.pos + r, n = new f.gate_proto.ServerExceptNotify; e.pos < t;) {
                    var o = e.uint32();
                    e.skipType(7 & o)
                }
                return n
            }, e.decodeDelimited = function(e) {
                return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
            }, e.verify = function(e) {
                return "object" != typeof e || null === e ? "object expected" : null
            }, e.fromObject = function(e) {
                return e instanceof f.gate_proto.ServerExceptNotify ? e : new f.gate_proto.ServerExceptNotify
            }, e.toObject = function() {
                return {}
            }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, s.util.toJSONOptions)
            }, e.getTypeUrl = function(e) {
                return void 0 === e && (e = "type.googleapis.com"), e + "/gate_proto.ServerExceptNotify"
            }, e
        }(), l), n.exports = f, o = e("default", n.exports)
    }), (() => ({
        "protobufjs/minimal.js": n
    })))
}