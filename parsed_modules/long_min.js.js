import * as n from "./cjs-loader.mjs.js";

function main() {
    let e;
    t("default", void 0);
    const r = t("__cjsMetaURL", i.meta.url);
    n.define(r, (function(i, n, r, s, h) {
        var u, o;
        u = "undefined" != typeof self ? self : this, o = function() {
            return function(t) {
                function i(e) {
                    if (n[e]) return n[e].exports;
                    var r = n[e] = {
                        i: e,
                        l: !1,
                        exports: {}
                    };
                    return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports
                }
                var n = {};
                return i.m = t, i.c = n, i.d = function(t, n, e) {
                    i.o(t, n) || Object.defineProperty(t, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: e
                    })
                }, i.n = function(t) {
                    var n = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return i.d(n, "a", n), n
                }, i.o = function(t, i) {
                    return Object.prototype.hasOwnProperty.call(t, i)
                }, i.p = "", i(i.s = 0)
            }([function(t, i) {
                function n(t, i, n) {
                    this.low = 0 | t, this.high = 0 | i, this.unsigned = !!n
                }

                function e(t) {
                    return !0 === (t && t.__isLong__)
                }

                function r(t, i) {
                    var n, e, r;
                    return i ? (r = 0 <= (t >>>= 0) && t < 256) && (e = l[t]) ? e : (n = h(t, (0 | t) < 0 ? -1 : 0, !0), r && (l[t] = n), n) : (r = -128 <= (t |= 0) && t < 128) && (e = f[t]) ? e : (n = h(t, t < 0 ? -1 : 0, !1), r && (f[t] = n), n)
                }

                function s(t, i) {
                    if (isNaN(t)) return i ? p : m;
                    if (i) {
                        if (t < 0) return p;
                        if (t >= c) return _
                    } else {
                        if (t <= -v) return q;
                        if (t + 1 >= v) return E
                    }
                    return t < 0 ? s(-t, i).neg() : h(t % d | 0, t / d | 0, i)
                }

                function h(t, i, e) {
                    return new n(t, i, e)
                }

                function u(t, i, n) {
                    if (0 === t.length) throw Error("empty string");
                    if ("NaN" === t || "Infinity" === t || "+Infinity" === t || "-Infinity" === t) return m;
                    if ("number" == typeof i ? (n = i, i = !1) : i = !!i, (n = n || 10) < 2 || 36 < n) throw RangeError("radix");
                    var e;
                    if ((e = t.indexOf("-")) > 0) throw Error("interior hyphen");
                    if (0 === e) return u(t.substring(1), i, n).neg();
                    for (var r = s(a(n, 8)), h = m, o = 0; o < t.length; o += 8) {
                        var g = Math.min(8, t.length - o),
                            f = parseInt(t.substring(o, o + g), n);
                        if (g < 8) {
                            var l = s(a(n, g));
                            h = h.mul(l).add(s(f))
                        } else h = (h = h.mul(r)).add(s(f))
                    }
                    return h.unsigned = i, h
                }

                function o(t, i) {
                    return "number" == typeof t ? s(t, i) : "string" == typeof t ? u(t, i) : h(t.low, t.high, "boolean" == typeof i ? i : t.unsigned)
                }
                t.exports = n;
                var g = null;
                try {
                    g = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports
                } catch (t) {}
                n.prototype.__isLong__, Object.defineProperty(n.prototype, "__isLong__", {
                    value: !0
                }), n.isLong = e;
                var f = {},
                    l = {};
                n.fromInt = r, n.fromNumber = s, n.fromBits = h;
                var a = Math.pow;
                n.fromString = u, n.fromValue = o;
                var d = 4294967296,
                    c = d * d,
                    v = c / 2,
                    w = r(1 << 24),
                    m = r(0);
                n.ZERO = m;
                var p = r(0, !0);
                n.UZERO = p;
                var y = r(1);
                n.ONE = y;
                var b = r(1, !0);
                n.UONE = b;
                var N = r(-1);
                n.NEG_ONE = N;
                var E = h(-1, 2147483647, !1);
                n.MAX_VALUE = E;
                var _ = h(-1, -1, !0);
                n.MAX_UNSIGNED_VALUE = _;
                var q = h(0, -2147483648, !1);
                n.MIN_VALUE = q;
                var B = n.prototype;
                B.toInt = function() {
                    return this.unsigned ? this.low >>> 0 : this.low
                }, B.toNumber = function() {
                    return this.unsigned ? (this.high >>> 0) * d + (this.low >>> 0) : this.high * d + (this.low >>> 0)
                }, B.toString = function(t) {
                    if ((t = t || 10) < 2 || 36 < t) throw RangeError("radix");
                    if (this.isZero()) return "0";
                    if (this.isNegative()) {
                        if (this.eq(q)) {
                            var i = s(t),
                                n = this.div(i),
                                e = n.mul(i).sub(this);
                            return n.toString(t) + e.toInt().toString(t)
                        }
                        return "-" + this.neg().toString(t)
                    }
                    for (var r = s(a(t, 6), this.unsigned), h = this, u = "";;) {
                        var o = h.div(r),
                            g = (h.sub(o.mul(r)).toInt() >>> 0).toString(t);
                        if ((h = o).isZero()) return g + u;
                        for (; g.length < 6;) g = "0" + g;
                        u = "" + g + u
                    }
                }, B.getHighBits = function() {
                    return this.high
                }, B.getHighBitsUnsigned = function() {
                    return this.high >>> 0
                }, B.getLowBits = function() {
                    return this.low
                }, B.getLowBitsUnsigned = function() {
                    return this.low >>> 0
                }, B.getNumBitsAbs = function() {
                    if (this.isNegative()) return this.eq(q) ? 64 : this.neg().getNumBitsAbs();
                    for (var t = 0 != this.high ? this.high : this.low, i = 31; i > 0 && 0 == (t & 1 << i); i--);
                    return 0 != this.high ? i + 33 : i + 1
                }, B.isZero = function() {
                    return 0 === this.high && 0 === this.low
                }, B.eqz = B.isZero, B.isNegative = function() {
                    return !this.unsigned && this.high < 0
                }, B.isPositive = function() {
                    return this.unsigned || this.high >= 0
                }, B.isOdd = function() {
                    return 1 == (1 & this.low)
                }, B.isEven = function() {
                    return 0 == (1 & this.low)
                }, B.equals = function(t) {
                    return e(t) || (t = o(t)), (this.unsigned === t.unsigned || this.high >>> 31 != 1 || t.high >>> 31 != 1) && this.high === t.high && this.low === t.low
                }, B.eq = B.equals, B.notEquals = function(t) {
                    return !this.eq(t)
                }, B.neq = B.notEquals, B.ne = B.notEquals, B.lessThan = function(t) {
                    return this.comp(t) < 0
                }, B.lt = B.lessThan, B.lessThanOrEqual = function(t) {
                    return this.comp(t) <= 0
                }, B.lte = B.lessThanOrEqual, B.le = B.lessThanOrEqual, B.greaterThan = function(t) {
                    return this.comp(t) > 0
                }, B.gt = B.greaterThan, B.greaterThanOrEqual = function(t) {
                    return this.comp(t) >= 0
                }, B.gte = B.greaterThanOrEqual, B.ge = B.greaterThanOrEqual, B.compare = function(t) {
                    if (e(t) || (t = o(t)), this.eq(t)) return 0;
                    var i = this.isNegative(),
                        n = t.isNegative();
                    return i && !n ? -1 : !i && n ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t).isNegative() ? -1 : 1
                }, B.comp = B.compare, B.negate = function() {
                    return !this.unsigned && this.eq(q) ? q : this.not().add(y)
                }, B.neg = B.negate, B.add = function(t) {
                    e(t) || (t = o(t));
                    var i = this.high >>> 16,
                        n = 65535 & this.high,
                        r = this.low >>> 16,
                        s = 65535 & this.low,
                        u = t.high >>> 16,
                        g = 65535 & t.high,
                        f = t.low >>> 16,
                        l = 0,
                        a = 0,
                        d = 0,
                        c = 0;
                    return d += (c += s + (65535 & t.low)) >>> 16, a += (d += r + f) >>> 16, l += (a += n + g) >>> 16, l += i + u, h((d &= 65535) << 16 | (c &= 65535), (l &= 65535) << 16 | (a &= 65535), this.unsigned)
                }, B.subtract = function(t) {
                    return e(t) || (t = o(t)), this.add(t.neg())
                }, B.sub = B.subtract, B.multiply = function(t) {
                    if (this.isZero()) return m;
                    if (e(t) || (t = o(t)), g) return h(g.mul(this.low, this.high, t.low, t.high), g.get_high(), this.unsigned);
                    if (t.isZero()) return m;
                    if (this.eq(q)) return t.isOdd() ? q : m;
                    if (t.eq(q)) return this.isOdd() ? q : m;
                    if (this.isNegative()) return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
                    if (t.isNegative()) return this.mul(t.neg()).neg();
                    if (this.lt(w) && t.lt(w)) return s(this.toNumber() * t.toNumber(), this.unsigned);
                    var i = this.high >>> 16,
                        n = 65535 & this.high,
                        r = this.low >>> 16,
                        u = 65535 & this.low,
                        f = t.high >>> 16,
                        l = 65535 & t.high,
                        a = t.low >>> 16,
                        d = 65535 & t.low,
                        c = 0,
                        v = 0,
                        p = 0,
                        y = 0;
                    return p += (y += u * d) >>> 16, v += (p += r * d) >>> 16, p &= 65535, v += (p += u * a) >>> 16, c += (v += n * d) >>> 16, v &= 65535, c += (v += r * a) >>> 16, v &= 65535, c += (v += u * l) >>> 16, c += i * d + n * a + r * l + u * f, h((p &= 65535) << 16 | (y &= 65535), (c &= 65535) << 16 | (v &= 65535), this.unsigned)
                }, B.mul = B.multiply, B.divide = function(t) {
                    if (e(t) || (t = o(t)), t.isZero()) throw Error("division by zero");
                    if (g) return this.unsigned || -2147483648 !== this.high || -1 !== t.low || -1 !== t.high ? h((this.unsigned ? g.div_u : g.div_s)(this.low, this.high, t.low, t.high), g.get_high(), this.unsigned) : this;
                    if (this.isZero()) return this.unsigned ? p : m;
                    var i, n, r;
                    if (this.unsigned) {
                        if (t.unsigned || (t = t.toUnsigned()), t.gt(this)) return p;
                        if (t.gt(this.shru(1))) return b;
                        r = p
                    } else {
                        if (this.eq(q)) return t.eq(y) || t.eq(N) ? q : t.eq(q) ? y : (i = this.shr(1).div(t).shl(1)).eq(m) ? t.isNegative() ? y : N : (n = this.sub(t.mul(i)), r = i.add(n.div(t)));
                        if (t.eq(q)) return this.unsigned ? p : m;
                        if (this.isNegative()) return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
                        if (t.isNegative()) return this.div(t.neg()).neg();
                        r = m
                    }
                    for (n = this; n.gte(t);) {
                        i = Math.max(1, Math.floor(n.toNumber() / t.toNumber()));
                        for (var u = Math.ceil(Math.log(i) / Math.LN2), f = u <= 48 ? 1 : a(2, u - 48), l = s(i), d = l.mul(t); d.isNegative() || d.gt(n);) d = (l = s(i -= f, this.unsigned)).mul(t);
                        l.isZero() && (l = y), r = r.add(l), n = n.sub(d)
                    }
                    return r
                }, B.div = B.divide, B.modulo = function(t) {
                    return e(t) || (t = o(t)), g ? h((this.unsigned ? g.rem_u : g.rem_s)(this.low, this.high, t.low, t.high), g.get_high(), this.unsigned) : this.sub(this.div(t).mul(t))
                }, B.mod = B.modulo, B.rem = B.modulo, B.not = function() {
                    return h(~this.low, ~this.high, this.unsigned)
                }, B.and = function(t) {
                    return e(t) || (t = o(t)), h(this.low & t.low, this.high & t.high, this.unsigned)
                }, B.or = function(t) {
                    return e(t) || (t = o(t)), h(this.low | t.low, this.high | t.high, this.unsigned)
                }, B.xor = function(t) {
                    return e(t) || (t = o(t)), h(this.low ^ t.low, this.high ^ t.high, this.unsigned)
                }, B.shiftLeft = function(t) {
                    return e(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? h(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : h(0, this.low << t - 32, this.unsigned)
                }, B.shl = B.shiftLeft, B.shiftRight = function(t) {
                    return e(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? h(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : h(this.high >> t - 32, this.high >= 0 ? 0 : -1, this.unsigned)
                }, B.shr = B.shiftRight, B.shiftRightUnsigned = function(t) {
                    if (e(t) && (t = t.toInt()), 0 == (t &= 63)) return this;
                    var i = this.high;
                    return t < 32 ? h(this.low >>> t | i << 32 - t, i >>> t, this.unsigned) : h(32 === t ? i : i >>> t - 32, 0, this.unsigned)
                }, B.shru = B.shiftRightUnsigned, B.shr_u = B.shiftRightUnsigned, B.toSigned = function() {
                    return this.unsigned ? h(this.low, this.high, !1) : this
                }, B.toUnsigned = function() {
                    return this.unsigned ? this : h(this.low, this.high, !0)
                }, B.toBytes = function(t) {
                    return t ? this.toBytesLE() : this.toBytesBE()
                }, B.toBytesLE = function() {
                    var t = this.high,
                        i = this.low;
                    return [255 & i, i >>> 8 & 255, i >>> 16 & 255, i >>> 24, 255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24]
                }, B.toBytesBE = function() {
                    var t = this.high,
                        i = this.low;
                    return [t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t, i >>> 24, i >>> 16 & 255, i >>> 8 & 255, 255 & i]
                }, n.fromBytes = function(t, i, e) {
                    return e ? n.fromBytesLE(t, i) : n.fromBytesBE(t, i)
                }, n.fromBytesLE = function(t, i) {
                    return new n(t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24, t[4] | t[5] << 8 | t[6] << 16 | t[7] << 24, i)
                }, n.fromBytesBE = function(t, i) {
                    return new n(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7], t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3], i)
                }
            }])
        }, "object" == typeof i && "object" == typeof r ? r.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" == typeof i ? i.Long = o() : u.Long = o(), e = t("default", r.exports), r.exports.Long
    }), {})
}