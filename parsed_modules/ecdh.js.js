import * as r from "./cjs-loader.mjs.js";

function main() {
    let e;
    t("default", void 0);
    const o = t("__cjsMetaURL", i.meta.url);
    r.define(o, (function(i, r, o, s, n) {
        var h, F = function() {
                function t(t, i) {
                    this.x = i, this.q = t
                }
                return t.prototype.equals = function(t) {
                    return t == this || this.q.equals(t.q) && this.x.equals(t.x)
                }, t.prototype.toBigInteger = function() {
                    return this.x
                }, t.prototype.negate = function() {
                    return new t(this.q, this.x.negate().mod(this.q))
                }, t.prototype.add = function(i) {
                    return new t(this.q, this.x.add(i.toBigInteger()).mod(this.q))
                }, t.prototype.subtract = function(i) {
                    return new t(this.q, this.x.subtract(i.toBigInteger()).mod(this.q))
                }, t.prototype.multiply = function(i) {
                    return new t(this.q, this.x.multiply(i.toBigInteger()).mod(this.q))
                }, t.prototype.square = function() {
                    return new t(this.q, this.x.square().mod(this.q))
                }, t.prototype.divide = function(i) {
                    return new t(this.q, this.x.multiply(i.toBigInteger().modInverse(this.q)).mod(this.q))
                }, t
            }(),
            u = function() {
                function t(t, i, r, e) {
                    this.curve = t, this.x = i, this.y = r, this.z = null == e ? p.ONE : e, this.zinv = null
                }
                return t.prototype.getX = function() {
                    null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q));
                    var t = this.x.toBigInteger().multiply(this.zinv);
                    return this.curve.reduce(t), this.curve.fromBigInteger(t)
                }, t.prototype.getY = function() {
                    null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q));
                    var t = this.y.toBigInteger().multiply(this.zinv);
                    return this.curve.reduce(t), this.curve.fromBigInteger(t)
                }, t.prototype.equals = function(t) {
                    return t == this || (this.isInfinity() ? t.isInfinity() : t.isInfinity() ? this.isInfinity() : !!t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(p.ZERO) && t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(p.ZERO))
                }, t.prototype.isInfinity = function() {
                    return null == this.x && null == this.y || this.z.equals(p.ZERO) && !this.y.toBigInteger().equals(p.ZERO)
                }, t.prototype.negate = function() {
                    return new t(this.curve, this.x, this.y.negate(), this.z)
                }, t.prototype.add = function(i) {
                    if (this.isInfinity()) return i;
                    if (i.isInfinity()) return this;
                    var r = i.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(i.z)).mod(this.curve.q),
                        e = i.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(i.z)).mod(this.curve.q);
                    if (p.ZERO.equals(e)) return p.ZERO.equals(r) ? this.twice() : this.curve.getInfinity();
                    var o = new p("3"),
                        s = this.x.toBigInteger(),
                        n = this.y.toBigInteger(),
                        h = (i.x.toBigInteger(), i.y.toBigInteger(), e.square()),
                        F = h.multiply(e),
                        u = s.multiply(h),
                        f = r.square().multiply(this.z),
                        a = f.subtract(u.shiftLeft(1)).multiply(i.z).subtract(F).multiply(e).mod(this.curve.q),
                        c = u.multiply(o).multiply(r).subtract(n.multiply(F)).subtract(f.multiply(r)).multiply(i.z).add(r.multiply(F)).mod(this.curve.q),
                        l = F.multiply(this.z).multiply(i.z).mod(this.curve.q);
                    return new t(this.curve, this.curve.fromBigInteger(a), this.curve.fromBigInteger(c), l)
                }, t.prototype.twice = function() {
                    if (this.isInfinity()) return this;
                    if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
                    var i = new p("3"),
                        r = this.x.toBigInteger(),
                        e = this.y.toBigInteger(),
                        o = e.multiply(this.z),
                        s = o.multiply(e).mod(this.curve.q),
                        n = this.curve.a.toBigInteger(),
                        h = r.square().multiply(i);
                    p.ZERO.equals(n) || (h = h.add(this.z.square().multiply(n)));
                    var F = (h = h.mod(this.curve.q)).square().subtract(r.shiftLeft(3).multiply(s)).shiftLeft(1).multiply(o).mod(this.curve.q),
                        u = h.multiply(i).multiply(r).subtract(s.shiftLeft(1)).shiftLeft(2).multiply(s).subtract(h.square().multiply(h)).mod(this.curve.q),
                        f = o.square().multiply(o).shiftLeft(3).mod(this.curve.q);
                    return new t(this.curve, this.curve.fromBigInteger(F), this.curve.fromBigInteger(u), f)
                }, t.prototype.multiply = function(t) {
                    if (this.isInfinity()) return this;
                    if (0 == t.signum()) return this.curve.getInfinity();
                    var i, r = t,
                        e = r.multiply(new p("3")),
                        o = this.negate(),
                        s = this;
                    for (i = e.bitLength() - 2; i > 0; --i) {
                        s = s.twice();
                        var n = e.testBit(i);
                        n != r.testBit(i) && (s = s.add(n ? this : o))
                    }
                    return s
                }, t.prototype.multiplyTwo = function(t, i, r) {
                    var e;
                    e = t.bitLength() > r.bitLength() ? t.bitLength() - 1 : r.bitLength() - 1;
                    for (var o = this.curve.getInfinity(), s = this.add(i); e >= 0;) o = o.twice(), t.testBit(e) ? o = r.testBit(e) ? o.add(s) : o.add(this) : r.testBit(e) && (o = o.add(i)), --e;
                    return o
                }, t
            }(),
            f = function() {
                function t(t, i, r) {
                    this.q = t, this.a = this.fromBigInteger(i), this.b = this.fromBigInteger(r), this.infinity = new u(this, null, null), this.reducer = new I(this.q)
                }
                return t.prototype.getQ = function() {
                    return this.q
                }, t.prototype.getA = function() {
                    return this.a
                }, t.prototype.getB = function() {
                    return this.b
                }, t.prototype.equals = function(t) {
                    return t == this || this.q.equals(t.q) && this.a.equals(t.a) && this.b.equals(t.b)
                }, t.prototype.getInfinity = function() {
                    return this.infinity
                }, t.prototype.fromBigInteger = function(t) {
                    return new F(this.q, t)
                }, t.prototype.reduce = function(t) {
                    this.reducer.reduce(t)
                }, t.prototype.decodePointHex = function(t) {
                    switch (parseInt(t.substr(0, 2), 16)) {
                        case 0:
                            return this.infinity;
                        case 2:
                        case 3:
                            return null;
                        case 4:
                        case 6:
                        case 7:
                            var i = (t.length - 2) / 2,
                                r = t.substr(2, i),
                                e = t.substr(i + 2, i);
                            return new u(this, this.fromBigInteger(new p(r, 16)), this.fromBigInteger(new p(e, 16)));
                        default:
                            return null
                    }
                }, t.prototype.encodePointHex = function(t) {
                    if (t.isInfinity()) return "00";
                    var i = t.getX().toBigInteger().toString(16),
                        r = t.getY().toBigInteger().toString(16),
                        e = this.getQ().toString(16).length;
                    for (e % 2 != 0 && e++; i.length < e;) i = "0" + i;
                    for (; r.length < e;) r = "0" + r;
                    return "04" + i + r
                }, t
            }();

        function p(t, i, r) {
            null != t && ("number" == typeof t ? this.fromNumber(t, i, r) : null == i && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, i))
        }

        function a() {
            return new p(null)
        }
        i = {
            ECCurveFp: f,
            ECPointFp: u,
            ECFieldElementFp: F
        }, "Microsoft Internet Explorer" == navigator.appName ? (p.prototype.am = function(t, i, r, e, o, s) {
            for (var n = 32767 & i, h = i >> 15; --s >= 0;) {
                var F = 32767 & this[t],
                    u = this[t++] >> 15,
                    f = h * F + u * n;
                o = ((F = n * F + ((32767 & f) << 15) + r[e] + (1073741823 & o)) >>> 30) + (f >>> 15) + h * u + (o >>> 30), r[e++] = 1073741823 & F
            }
            return o
        }, h = 30) : "Netscape" != navigator.appName ? (p.prototype.am = function(t, i, r, e, o, s) {
            for (; --s >= 0;) {
                var n = i * this[t++] + r[e] + o;
                o = Math.floor(n / 67108864), r[e++] = 67108863 & n
            }
            return o
        }, h = 26) : (p.prototype.am = function(t, i, r, e, o, s) {
            for (var n = 16383 & i, h = i >> 14; --s >= 0;) {
                var F = 16383 & this[t],
                    u = this[t++] >> 14,
                    f = h * F + u * n;
                o = ((F = n * F + ((16383 & f) << 14) + r[e] + o) >> 28) + (f >> 14) + h * u, r[e++] = 268435455 & F
            }
            return o
        }, h = 28), p.prototype.DB = h, p.prototype.DM = (1 << h) - 1, p.prototype.DV = 1 << h;
        p.prototype.FV = Math.pow(2, 52), p.prototype.F1 = 52 - h, p.prototype.F2 = 2 * h - 52;
        var c, l, m = new Array;
        for (c = "0".charCodeAt(0), l = 0; l <= 9; ++l) m[c++] = l;
        for (c = "a".charCodeAt(0), l = 10; l < 36; ++l) m[c++] = l;
        for (c = "A".charCodeAt(0), l = 10; l < 36; ++l) m[c++] = l;

        function y(t) {
            return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)
        }

        function v(t, i) {
            var r = m[t.charCodeAt(i)];
            return null == r ? -1 : r
        }

        function d(t) {
            var i = a();
            return i.fromInt(t), i
        }

        function B(t) {
            var i, r = 1;
            return 0 != (i = t >>> 16) && (t = i, r += 16), 0 != (i = t >> 8) && (t = i, r += 8), 0 != (i = t >> 4) && (t = i, r += 4), 0 != (i = t >> 2) && (t = i, r += 2), 0 != (i = t >> 1) && (t = i, r += 1), r
        }

        function g(t) {
            this.m = t
        }

        function T(t) {
            this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
        }

        function D(t, i) {
            return t & i
        }

        function E(t, i) {
            return t | i
        }

        function w(t, i) {
            return t ^ i
        }

        function b(t, i) {
            return t & ~i
        }

        function C(t) {
            if (0 == t) return -1;
            var i = 0;
            return 0 == (65535 & t) && (t >>= 16, i += 16), 0 == (255 & t) && (t >>= 8, i += 8), 0 == (15 & t) && (t >>= 4, i += 4), 0 == (3 & t) && (t >>= 2, i += 2), 0 == (1 & t) && ++i, i
        }

        function A(t) {
            for (var i = 0; 0 != t;) t &= t - 1, ++i;
            return i
        }

        function q() {}

        function S(t) {
            return t
        }

        function I(t) {
            this.r2 = a(), this.q3 = a(), p.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t), this.m = t
        }
        g.prototype.convert = function(t) {
            return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
        }, g.prototype.revert = function(t) {
            return t
        }, g.prototype.reduce = function(t) {
            t.divRemTo(this.m, null, t)
        }, g.prototype.mulTo = function(t, i, r) {
            t.multiplyTo(i, r), this.reduce(r)
        }, g.prototype.sqrTo = function(t, i) {
            t.squareTo(i), this.reduce(i)
        }, T.prototype.convert = function(t) {
            var i = a();
            return t.abs().dlShiftTo(this.m.t, i), i.divRemTo(this.m, null, i), t.s < 0 && i.compareTo(p.ZERO) > 0 && this.m.subTo(i, i), i
        }, T.prototype.revert = function(t) {
            var i = a();
            return t.copyTo(i), this.reduce(i), i
        }, T.prototype.reduce = function(t) {
            for (; t.t <= this.mt2;) t[t.t++] = 0;
            for (var i = 0; i < this.m.t; ++i) {
                var r = 32767 & t[i],
                    e = r * this.mpl + ((r * this.mph + (t[i] >> 15) * this.mpl & this.um) << 15) & t.DM;
                for (t[r = i + this.m.t] += this.m.am(0, e, t, i, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV, t[++r]++
            }
            t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
        }, T.prototype.mulTo = function(t, i, r) {
            t.multiplyTo(i, r), this.reduce(r)
        }, T.prototype.sqrTo = function(t, i) {
            t.squareTo(i), this.reduce(i)
        }, p.prototype.copyTo = function(t) {
            for (var i = this.t - 1; i >= 0; --i) t[i] = this[i];
            t.t = this.t, t.s = this.s
        }, p.prototype.fromInt = function(t) {
            this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
        }, p.prototype.fromString = function(t, i) {
            var r;
            if (16 == i) r = 4;
            else if (8 == i) r = 3;
            else if (256 == i) r = 8;
            else if (2 == i) r = 1;
            else if (32 == i) r = 5;
            else {
                if (4 != i) return void this.fromRadix(t, i);
                r = 2
            }
            this.t = 0, this.s = 0;
            for (var e = t.length, o = !1, s = 0; --e >= 0;) {
                var n = 8 == r ? 255 & t[e] : v(t, e);
                n < 0 ? "-" == t.charAt(e) && (o = !0) : (o = !1, 0 == s ? this[this.t++] = n : s + r > this.DB ? (this[this.t - 1] |= (n & (1 << this.DB - s) - 1) << s, this[this.t++] = n >> this.DB - s) : this[this.t - 1] |= n << s, (s += r) >= this.DB && (s -= this.DB))
            }
            8 == r && 0 != (128 & t[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), o && p.ZERO.subTo(this, this)
        }, p.prototype.clamp = function() {
            for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t
        }, p.prototype.dlShiftTo = function(t, i) {
            var r;
            for (r = this.t - 1; r >= 0; --r) i[r + t] = this[r];
            for (r = t - 1; r >= 0; --r) i[r] = 0;
            i.t = this.t + t, i.s = this.s
        }, p.prototype.drShiftTo = function(t, i) {
            for (var r = t; r < this.t; ++r) i[r - t] = this[r];
            i.t = Math.max(this.t - t, 0), i.s = this.s
        }, p.prototype.lShiftTo = function(t, i) {
            var r, e = t % this.DB,
                o = this.DB - e,
                s = (1 << o) - 1,
                n = Math.floor(t / this.DB),
                h = this.s << e & this.DM;
            for (r = this.t - 1; r >= 0; --r) i[r + n + 1] = this[r] >> o | h, h = (this[r] & s) << e;
            for (r = n - 1; r >= 0; --r) i[r] = 0;
            i[n] = h, i.t = this.t + n + 1, i.s = this.s, i.clamp()
        }, p.prototype.rShiftTo = function(t, i) {
            i.s = this.s;
            var r = Math.floor(t / this.DB);
            if (r >= this.t) i.t = 0;
            else {
                var e = t % this.DB,
                    o = this.DB - e,
                    s = (1 << e) - 1;
                i[0] = this[r] >> e;
                for (var n = r + 1; n < this.t; ++n) i[n - r - 1] |= (this[n] & s) << o, i[n - r] = this[n] >> e;
                e > 0 && (i[this.t - r - 1] |= (this.s & s) << o), i.t = this.t - r, i.clamp()
            }
        }, p.prototype.subTo = function(t, i) {
            for (var r = 0, e = 0, o = Math.min(t.t, this.t); r < o;) e += this[r] - t[r], i[r++] = e & this.DM, e >>= this.DB;
            if (t.t < this.t) {
                for (e -= t.s; r < this.t;) e += this[r], i[r++] = e & this.DM, e >>= this.DB;
                e += this.s
            } else {
                for (e += this.s; r < t.t;) e -= t[r], i[r++] = e & this.DM, e >>= this.DB;
                e -= t.s
            }
            i.s = e < 0 ? -1 : 0, e < -1 ? i[r++] = this.DV + e : e > 0 && (i[r++] = e), i.t = r, i.clamp()
        }, p.prototype.multiplyTo = function(t, i) {
            var r = this.abs(),
                e = t.abs(),
                o = r.t;
            for (i.t = o + e.t; --o >= 0;) i[o] = 0;
            for (o = 0; o < e.t; ++o) i[o + r.t] = r.am(0, e[o], i, o, 0, r.t);
            i.s = 0, i.clamp(), this.s != t.s && p.ZERO.subTo(i, i)
        }, p.prototype.squareTo = function(t) {
            for (var i = this.abs(), r = t.t = 2 * i.t; --r >= 0;) t[r] = 0;
            for (r = 0; r < i.t - 1; ++r) {
                var e = i.am(r, i[r], t, 2 * r, 0, 1);
                (t[r + i.t] += i.am(r + 1, 2 * i[r], t, 2 * r + 1, e, i.t - r - 1)) >= i.DV && (t[r + i.t] -= i.DV, t[r + i.t + 1] = 1)
            }
            t.t > 0 && (t[t.t - 1] += i.am(r, i[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp()
        }, p.prototype.divRemTo = function(t, i, r) {
            var e = t.abs();
            if (!(e.t <= 0)) {
                var o = this.abs();
                if (o.t < e.t) return null != i && i.fromInt(0), void(null != r && this.copyTo(r));
                null == r && (r = a());
                var s = a(),
                    n = this.s,
                    h = t.s,
                    F = this.DB - B(e[e.t - 1]);
                F > 0 ? (e.lShiftTo(F, s), o.lShiftTo(F, r)) : (e.copyTo(s), o.copyTo(r));
                var u = s.t,
                    f = s[u - 1];
                if (0 != f) {
                    var c = f * (1 << this.F1) + (u > 1 ? s[u - 2] >> this.F2 : 0),
                        l = this.FV / c,
                        m = (1 << this.F1) / c,
                        y = 1 << this.F2,
                        v = r.t,
                        d = v - u,
                        g = null == i ? a() : i;
                    for (s.dlShiftTo(d, g), r.compareTo(g) >= 0 && (r[r.t++] = 1, r.subTo(g, r)), p.ONE.dlShiftTo(u, g), g.subTo(s, s); s.t < u;) s[s.t++] = 0;
                    for (; --d >= 0;) {
                        var T = r[--v] == f ? this.DM : Math.floor(r[v] * l + (r[v - 1] + y) * m);
                        if ((r[v] += s.am(0, T, r, d, 0, u)) < T)
                            for (s.dlShiftTo(d, g), r.subTo(g, r); r[v] < --T;) r.subTo(g, r)
                    }
                    null != i && (r.drShiftTo(u, i), n != h && p.ZERO.subTo(i, i)), r.t = u, r.clamp(), F > 0 && r.rShiftTo(F, r), n < 0 && p.ZERO.subTo(r, r)
                }
            }
        }, p.prototype.invDigit = function() {
            if (this.t < 1) return 0;
            var t = this[0];
            if (0 == (1 & t)) return 0;
            var i = 3 & t;
            return (i = (i = (i = (i = i * (2 - (15 & t) * i) & 15) * (2 - (255 & t) * i) & 255) * (2 - ((65535 & t) * i & 65535)) & 65535) * (2 - t * i % this.DV) % this.DV) > 0 ? this.DV - i : -i
        }, p.prototype.isEven = function() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }, p.prototype.exp = function(t, i) {
            if (t > 4294967295 || t < 1) return p.ONE;
            var r = a(),
                e = a(),
                o = i.convert(this),
                s = B(t) - 1;
            for (o.copyTo(r); --s >= 0;)
                if (i.sqrTo(r, e), (t & 1 << s) > 0) i.mulTo(e, o, r);
                else {
                    var n = r;
                    r = e, e = n
                } return i.revert(r)
        }, p.prototype.toString = function(t) {
            if (this.s < 0) return "-" + this.negate().toString(t);
            var i;
            if (16 == t) i = 4;
            else if (8 == t) i = 3;
            else if (2 == t) i = 1;
            else if (32 == t) i = 5;
            else {
                if (4 != t) return this.toRadix(t);
                i = 2
            }
            var r, e = (1 << i) - 1,
                o = !1,
                s = "",
                n = this.t,
                h = this.DB - n * this.DB % i;
            if (n-- > 0)
                for (h < this.DB && (r = this[n] >> h) > 0 && (o = !0, s = y(r)); n >= 0;) h < i ? (r = (this[n] & (1 << h) - 1) << i - h, r |= this[--n] >> (h += this.DB - i)) : (r = this[n] >> (h -= i) & e, h <= 0 && (h += this.DB, --n)), r > 0 && (o = !0), o && (s += y(r));
            return o ? s : "0"
        }, p.prototype.negate = function() {
            var t = a();
            return p.ZERO.subTo(this, t), t
        }, p.prototype.abs = function() {
            return this.s < 0 ? this.negate() : this
        }, p.prototype.compareTo = function(t) {
            var i = this.s - t.s;
            if (0 != i) return i;
            var r = this.t;
            if (0 != (i = r - t.t)) return this.s < 0 ? -i : i;
            for (; --r >= 0;)
                if (0 != (i = this[r] - t[r])) return i;
            return 0
        }, p.prototype.bitLength = function() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + B(this[this.t - 1] ^ this.s & this.DM)
        }, p.prototype.mod = function(t) {
            var i = a();
            return this.abs().divRemTo(t, null, i), this.s < 0 && i.compareTo(p.ZERO) > 0 && t.subTo(i, i), i
        }, p.prototype.modPowInt = function(t, i) {
            var r;
            return r = t < 256 || i.isEven() ? new g(i) : new T(i), this.exp(t, r)
        }, p.ZERO = d(0), p.ONE = d(1), i = {
            BigInteger: p
        }, q.prototype.convert = S, q.prototype.revert = S, q.prototype.mulTo = function(t, i, r) {
            t.multiplyTo(i, r)
        }, q.prototype.sqrTo = function(t, i) {
            t.squareTo(i)
        }, I.prototype.convert = function(t) {
            if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
            if (t.compareTo(this.m) < 0) return t;
            var i = a();
            return t.copyTo(i), this.reduce(i), i
        }, I.prototype.revert = function(t) {
            return t
        }, I.prototype.reduce = function(t) {
            for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
            for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
        }, I.prototype.mulTo = function(t, i, r) {
            t.multiplyTo(i, r), this.reduce(r)
        }, I.prototype.sqrTo = function(t, i) {
            t.squareTo(i), this.reduce(i)
        };
        var x = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
            M = (1 << 26) / x[x.length - 1];

        function O() {
            this.i = 0, this.j = 0, this.S = new Array
        }
        p.prototype.chunkSize = function(t) {
            return Math.floor(Math.LN2 * this.DB / Math.log(t))
        }, p.prototype.toRadix = function(t) {
            if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
            var i = this.chunkSize(t),
                r = Math.pow(t, i),
                e = d(r),
                o = a(),
                s = a(),
                n = "";
            for (this.divRemTo(e, o, s); o.signum() > 0;) n = (r + s.intValue()).toString(t).substr(1) + n, o.divRemTo(e, o, s);
            return s.intValue().toString(t) + n
        }, p.prototype.fromRadix = function(t, i) {
            this.fromInt(0), null == i && (i = 10);
            for (var r = this.chunkSize(i), e = Math.pow(i, r), o = !1, s = 0, n = 0, h = 0; h < t.length; ++h) {
                var F = v(t, h);
                F < 0 ? "-" == t.charAt(h) && 0 == this.signum() && (o = !0) : (n = i * n + F, ++s >= r && (this.dMultiply(e), this.dAddOffset(n, 0), s = 0, n = 0))
            }
            s > 0 && (this.dMultiply(Math.pow(i, s)), this.dAddOffset(n, 0)), o && p.ZERO.subTo(this, this)
        }, p.prototype.fromNumber = function(t, i, r) {
            if ("number" == typeof i)
                if (t < 2) this.fromInt(1);
                else
                    for (this.fromNumber(t, r), this.testBit(t - 1) || this.bitwiseTo(p.ONE.shiftLeft(t - 1), E, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(i);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(p.ONE.shiftLeft(t - 1), this);
            else {
                var e = new Array,
                    o = 7 & t;
                e.length = 1 + (t >> 3), i.nextBytes(e), o > 0 ? e[0] &= (1 << o) - 1 : e[0] = 0, this.fromString(e, 256)
            }
        }, p.prototype.bitwiseTo = function(t, i, r) {
            var e, o, s = Math.min(t.t, this.t);
            for (e = 0; e < s; ++e) r[e] = i(this[e], t[e]);
            if (t.t < this.t) {
                for (o = t.s & this.DM, e = s; e < this.t; ++e) r[e] = i(this[e], o);
                r.t = this.t
            } else {
                for (o = this.s & this.DM, e = s; e < t.t; ++e) r[e] = i(o, t[e]);
                r.t = t.t
            }
            r.s = i(this.s, t.s), r.clamp()
        }, p.prototype.changeBit = function(t, i) {
            var r = p.ONE.shiftLeft(t);
            return this.bitwiseTo(r, i, r), r
        }, p.prototype.addTo = function(t, i) {
            for (var r = 0, e = 0, o = Math.min(t.t, this.t); r < o;) e += this[r] + t[r], i[r++] = e & this.DM, e >>= this.DB;
            if (t.t < this.t) {
                for (e += t.s; r < this.t;) e += this[r], i[r++] = e & this.DM, e >>= this.DB;
                e += this.s
            } else {
                for (e += this.s; r < t.t;) e += t[r], i[r++] = e & this.DM, e >>= this.DB;
                e += t.s
            }
            i.s = e < 0 ? -1 : 0, e > 0 ? i[r++] = e : e < -1 && (i[r++] = this.DV + e), i.t = r, i.clamp()
        }, p.prototype.dMultiply = function(t) {
            this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
        }, p.prototype.dAddOffset = function(t, i) {
            if (0 != t) {
                for (; this.t <= i;) this[this.t++] = 0;
                for (this[i] += t; this[i] >= this.DV;) this[i] -= this.DV, ++i >= this.t && (this[this.t++] = 0), ++this[i]
            }
        }, p.prototype.multiplyLowerTo = function(t, i, r) {
            var e, o = Math.min(this.t + t.t, i);
            for (r.s = 0, r.t = o; o > 0;) r[--o] = 0;
            for (e = r.t - this.t; o < e; ++o) r[o + this.t] = this.am(0, t[o], r, o, 0, this.t);
            for (e = Math.min(t.t, i); o < e; ++o) this.am(0, t[o], r, o, 0, i - o);
            r.clamp()
        }, p.prototype.multiplyUpperTo = function(t, i, r) {
            --i;
            var e = r.t = this.t + t.t - i;
            for (r.s = 0; --e >= 0;) r[e] = 0;
            for (e = Math.max(i - this.t, 0); e < t.t; ++e) r[this.t + e - i] = this.am(i - e, t[e], r, 0, 0, this.t + e - i);
            r.clamp(), r.drShiftTo(1, r)
        }, p.prototype.modInt = function(t) {
            if (t <= 0) return 0;
            var i = this.DV % t,
                r = this.s < 0 ? t - 1 : 0;
            if (this.t > 0)
                if (0 == i) r = this[0] % t;
                else
                    for (var e = this.t - 1; e >= 0; --e) r = (i * r + this[e]) % t;
            return r
        }, p.prototype.millerRabin = function(t) {
            var i = this.subtract(p.ONE),
                r = i.getLowestSetBit();
            if (r <= 0) return !1;
            var e = i.shiftRight(r);
            (t = t + 1 >> 1) > x.length && (t = x.length);
            for (var o = a(), s = 0; s < t; ++s) {
                o.fromInt(x[Math.floor(Math.random() * x.length)]);
                var n = o.modPow(e, this);
                if (0 != n.compareTo(p.ONE) && 0 != n.compareTo(i)) {
                    for (var h = 1; h++ < r && 0 != n.compareTo(i);)
                        if (0 == (n = n.modPowInt(2, this)).compareTo(p.ONE)) return !1;
                    if (0 != n.compareTo(i)) return !1
                }
            }
            return !0
        }, p.prototype.clone = function() {
            var t = a();
            return this.copyTo(t), t
        }, p.prototype.intValue = function() {
            if (this.s < 0) {
                if (1 == this.t) return this[0] - this.DV;
                if (0 == this.t) return -1
            } else {
                if (1 == this.t) return this[0];
                if (0 == this.t) return 0
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
        }, p.prototype.byteValue = function() {
            return 0 == this.t ? this.s : this[0] << 24 >> 24
        }, p.prototype.shortValue = function() {
            return 0 == this.t ? this.s : this[0] << 16 >> 16
        }, p.prototype.signum = function() {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
        }, p.prototype.toByteArray = function() {
            var t = this.t,
                i = new Array;
            i[0] = this.s;
            var r, e = this.DB - t * this.DB % 8,
                o = 0;
            if (t-- > 0)
                for (e < this.DB && (r = this[t] >> e) != (this.s & this.DM) >> e && (i[o++] = r | this.s << this.DB - e); t >= 0;) e < 8 ? (r = (this[t] & (1 << e) - 1) << 8 - e, r |= this[--t] >> (e += this.DB - 8)) : (r = this[t] >> (e -= 8) & 255, e <= 0 && (e += this.DB, --t)), 0 != (128 & r) && (r |= -256), 0 == o && (128 & this.s) != (128 & r) && ++o, (o > 0 || r != this.s) && (i[o++] = r);
            return i
        }, p.prototype.equals = function(t) {
            return 0 == this.compareTo(t)
        }, p.prototype.min = function(t) {
            return this.compareTo(t) < 0 ? this : t
        }, p.prototype.max = function(t) {
            return this.compareTo(t) > 0 ? this : t
        }, p.prototype.and = function(t) {
            var i = a();
            return this.bitwiseTo(t, D, i), i
        }, p.prototype.or = function(t) {
            var i = a();
            return this.bitwiseTo(t, E, i), i
        }, p.prototype.xor = function(t) {
            var i = a();
            return this.bitwiseTo(t, w, i), i
        }, p.prototype.andNot = function(t) {
            var i = a();
            return this.bitwiseTo(t, b, i), i
        }, p.prototype.not = function() {
            for (var t = a(), i = 0; i < this.t; ++i) t[i] = this.DM & ~this[i];
            return t.t = this.t, t.s = ~this.s, t
        }, p.prototype.shiftLeft = function(t) {
            var i = a();
            return t < 0 ? this.rShiftTo(-t, i) : this.lShiftTo(t, i), i
        }, p.prototype.shiftRight = function(t) {
            var i = a();
            return t < 0 ? this.lShiftTo(-t, i) : this.rShiftTo(t, i), i
        }, p.prototype.getLowestSetBit = function() {
            for (var t = 0; t < this.t; ++t)
                if (0 != this[t]) return t * this.DB + C(this[t]);
            return this.s < 0 ? this.t * this.DB : -1
        }, p.prototype.bitCount = function() {
            for (var t = 0, i = this.s & this.DM, r = 0; r < this.t; ++r) t += A(this[r] ^ i);
            return t
        }, p.prototype.testBit = function(t) {
            var i = Math.floor(t / this.DB);
            return i >= this.t ? 0 != this.s : 0 != (this[i] & 1 << t % this.DB)
        }, p.prototype.setBit = function(t) {
            return this.changeBit(t, E)
        }, p.prototype.clearBit = function(t) {
            return this.changeBit(t, b)
        }, p.prototype.flipBit = function(t) {
            return this.changeBit(t, w)
        }, p.prototype.add = function(t) {
            var i = a();
            return this.addTo(t, i), i
        }, p.prototype.subtract = function(t) {
            var i = a();
            return this.subTo(t, i), i
        }, p.prototype.multiply = function(t) {
            var i = a();
            return this.multiplyTo(t, i), i
        }, p.prototype.divide = function(t) {
            var i = a();
            return this.divRemTo(t, i, null), i
        }, p.prototype.remainder = function(t) {
            var i = a();
            return this.divRemTo(t, null, i), i
        }, p.prototype.divideAndRemainder = function(t) {
            var i = a(),
                r = a();
            return this.divRemTo(t, i, r), new Array(i, r)
        }, p.prototype.modPow = function(t, i) {
            var r, e, o = t.bitLength(),
                s = d(1);
            if (o <= 0) return s;
            r = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6, e = o < 8 ? new g(i) : i.isEven() ? new I(i) : new T(i);
            var n = new Array,
                h = 3,
                F = r - 1,
                u = (1 << r) - 1;
            if (n[1] = e.convert(this), r > 1) {
                var f = a();
                for (e.sqrTo(n[1], f); h <= u;) n[h] = a(), e.mulTo(f, n[h - 2], n[h]), h += 2
            }
            var p, c, l = t.t - 1,
                m = !0,
                y = a();
            for (o = B(t[l]) - 1; l >= 0;) {
                for (o >= F ? p = t[l] >> o - F & u : (p = (t[l] & (1 << o + 1) - 1) << F - o, l > 0 && (p |= t[l - 1] >> this.DB + o - F)), h = r; 0 == (1 & p);) p >>= 1, --h;
                if ((o -= h) < 0 && (o += this.DB, --l), m) n[p].copyTo(s), m = !1;
                else {
                    for (; h > 1;) e.sqrTo(s, y), e.sqrTo(y, s), h -= 2;
                    h > 0 ? e.sqrTo(s, y) : (c = s, s = y, y = c), e.mulTo(y, n[p], s)
                }
                for (; l >= 0 && 0 == (t[l] & 1 << o);) e.sqrTo(s, y), c = s, s = y, y = c, --o < 0 && (o = this.DB - 1, --l)
            }
            return e.revert(s)
        }, p.prototype.modInverse = function(t) {
            var i = t.isEven();
            if (this.isEven() && i || 0 == t.signum()) return p.ZERO;
            for (var r = t.clone(), e = this.clone(), o = d(1), s = d(0), n = d(0), h = d(1); 0 != r.signum();) {
                for (; r.isEven();) r.rShiftTo(1, r), i ? (o.isEven() && s.isEven() || (o.addTo(this, o), s.subTo(t, s)), o.rShiftTo(1, o)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
                for (; e.isEven();) e.rShiftTo(1, e), i ? (n.isEven() && h.isEven() || (n.addTo(this, n), h.subTo(t, h)), n.rShiftTo(1, n)) : h.isEven() || h.subTo(t, h), h.rShiftTo(1, h);
                r.compareTo(e) >= 0 ? (r.subTo(e, r), i && o.subTo(n, o), s.subTo(h, s)) : (e.subTo(r, e), i && n.subTo(o, n), h.subTo(s, h))
            }
            return 0 != e.compareTo(p.ONE) ? p.ZERO : h.compareTo(t) >= 0 ? h.subtract(t) : h.signum() < 0 ? (h.addTo(t, h), h.signum() < 0 ? h.add(t) : h) : h
        }, p.prototype.pow = function(t) {
            return this.exp(t, new q)
        }, p.prototype.gcd = function(t) {
            var i = this.s < 0 ? this.negate() : this.clone(),
                r = t.s < 0 ? t.negate() : t.clone();
            if (i.compareTo(r) < 0) {
                var e = i;
                i = r, r = e
            }
            var o = i.getLowestSetBit(),
                s = r.getLowestSetBit();
            if (s < 0) return i;
            for (o < s && (s = o), s > 0 && (i.rShiftTo(s, i), r.rShiftTo(s, r)); i.signum() > 0;)(o = i.getLowestSetBit()) > 0 && i.rShiftTo(o, i), (o = r.getLowestSetBit()) > 0 && r.rShiftTo(o, r), i.compareTo(r) >= 0 ? (i.subTo(r, i), i.rShiftTo(1, i)) : (r.subTo(i, r), r.rShiftTo(1, r));
            return s > 0 && r.lShiftTo(s, r), r
        }, p.prototype.isProbablePrime = function(t) {
            var i, r = this.abs();
            if (1 == r.t && r[0] <= x[x.length - 1]) {
                for (i = 0; i < x.length; ++i)
                    if (r[0] == x[i]) return !0;
                return !1
            }
            if (r.isEven()) return !1;
            for (i = 1; i < x.length;) {
                for (var e = x[i], o = i + 1; o < x.length && e < M;) e *= x[o++];
                for (e = r.modInt(e); i < o;)
                    if (e % x[i++] == 0) return !1
            }
            return r.millerRabin(t)
        }, p.prototype.square = function() {
            var t = a();
            return this.squareTo(t), t
        }, O.prototype.init = function(t) {
            var i, r, e;
            for (i = 0; i < 256; ++i) this.S[i] = i;
            for (r = 0, i = 0; i < 256; ++i) r = r + this.S[i] + t[i % t.length] & 255, e = this.S[i], this.S[i] = this.S[r], this.S[r] = e;
            this.i = 0, this.j = 0
        }, O.prototype.next = function() {
            var t;
            return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
        };
        var R, z, N;

        function L() {
            var t;
            t = (new Date).getTime(), z[N++] ^= 255 & t, z[N++] ^= t >> 8 & 255, z[N++] ^= t >> 16 & 255, z[N++] ^= t >> 24 & 255, N >= 256 && (N -= 256)
        }
        if (null == z) {
            var V;
            if (z = new Array, N = 0, window.crypto && window.crypto.getRandomValues) {
                var Z = new Uint8Array(32);
                for (window.crypto.getRandomValues(Z), V = 0; V < 32; ++V) z[N++] = Z[V]
            }
            if ("Netscape" == navigator.appName && navigator.appVersion < "5" && window.crypto) {
                var P = window.crypto.random(32);
                for (V = 0; V < P.length; ++V) z[N++] = 255 & P.charCodeAt(V)
            }
            for (; N < 256;) V = Math.floor(65536 * Math.random()), z[N++] = V >>> 8, z[N++] = 255 & V;
            N = 0, L()
        }

        function j() {
            if (null == R) {
                for (L(), (R = new O).init(z), N = 0; N < z.length; ++N) z[N] = 0;
                N = 0
            }
            return R.next()
        }

        function H() {}
        H.prototype.nextBytes = function(t) {
            var i;
            for (i = 0; i < t.length; ++i) t[i] = j()
        }, i = {
            SecureRandom: H
        };
        var k = function() {
            function t(t, i, r, e) {
                this.curve = t, this.g = i, this.n = r, this.h = e
            }
            return t.prototype.getCurve = function() {
                return this.curve
            }, t.prototype.getG = function() {
                return this.g
            }, t.prototype.getN = function() {
                return this.n
            }, t.prototype.getH = function() {
                return this.h
            }, t
        }();

        function U(t) {
            return new p(t, 16)
        }

        function J(t) {
            return "secp128r1" == t ? (i = U("FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF"), r = U("FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC"), e = U("E87579C11079F43DD824993C2CEE5ED3"), o = U("FFFFFFFE0000000075A30D1B9038A115"), s = p.ONE, n = new f(i, r, e), h = n.decodePointHex("04161FF7528B899B2D0C28607CA52C5B86CF5AC8395BAFEB13C02DA292DDED7A83"), new k(n, h, o, s)) : "secp160k1" == t ? function() {
                var t = U("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73"),
                    i = p.ZERO,
                    r = U("7"),
                    e = U("0100000000000000000001B8FA16DFAB9ACA16B6B3"),
                    o = p.ONE,
                    s = new f(t, i, r),
                    n = s.decodePointHex("043B4C382CE37AA192A4019E763036F4F5DD4D7EBB938CF935318FDCED6BC28286531733C3F03C4FEE");
                return new k(s, n, e, o)
            }() : "secp160r1" == t ? function() {
                var t = U("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF"),
                    i = U("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC"),
                    r = U("1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45"),
                    e = U("0100000000000000000001F4C8F927AED3CA752257"),
                    o = p.ONE,
                    s = new f(t, i, r),
                    n = s.decodePointHex("044A96B5688EF573284664698968C38BB913CBFC8223A628553168947D59DCC912042351377AC5FB32");
                return new k(s, n, e, o)
            }() : "secp192k1" == t ? function() {
                var t = U("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37"),
                    i = p.ZERO,
                    r = U("3"),
                    e = U("FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D"),
                    o = p.ONE,
                    s = new f(t, i, r),
                    n = s.decodePointHex("04DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D");
                return new k(s, n, e, o)
            }() : "secp192r1" == t ? function() {
                var t = U("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF"),
                    i = U("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC"),
                    r = U("64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1"),
                    e = U("FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831"),
                    o = p.ONE,
                    s = new f(t, i, r),
                    n = s.decodePointHex("04188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF101207192B95FFC8DA78631011ED6B24CDD573F977A11E794811");
                return new k(s, n, e, o)
            }() : "secp224r1" == t ? function() {
                var t = U("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001"),
                    i = U("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE"),
                    r = U("B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4"),
                    e = U("FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D"),
                    o = p.ONE,
                    s = new f(t, i, r),
                    n = s.decodePointHex("04B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34");
                return new k(s, n, e, o)
            }() : "secp256r1" == t ? function() {
                var t = U("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF"),
                    i = U("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC"),
                    r = U("5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B"),
                    e = U("FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551"),
                    o = p.ONE,
                    s = new f(t, i, r),
                    n = s.decodePointHex("046B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C2964FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5");
                return new k(s, n, e, o)
            }() : null;
            var i, r, e, o, s, n, h
        }
        var _ = function() {
            function t() {}
            return t.prototype.getSECCurveByName = J, t.prototype.BigInteger = p, t.prototype.ECCurveFp = f, t.prototype.SecureRandom = H, t.prototype.ECPointFp = u, t
        }();
        window.ecdhJs = _, i.ecdhJs = _, i.default = _, e = t("default", o.exports), o.exports.ecdhJs, o.exports.default
    }), {})
}