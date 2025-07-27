import * as n from "./cjs-loader.mjs.js";

function main() {
    let e;
    i("default", void 0);
    const s = i("__cjsMetaURL", t.meta.url);
    n.define(s, (function(t, n, s, h, r) {
        s.exports = o;
        var u = null;
        try {
            u = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports
        } catch (i) {}

        function o(i, t, n) {
            this.low = 0 | i, this.high = 0 | t, this.unsigned = !!n
        }

        function g(i) {
            return !0 === (i && i.__isLong__)
        }
        o.prototype.__isLong__, Object.defineProperty(o.prototype, "__isLong__", {
            value: !0
        }), o.isLong = g;
        var f = {},
            l = {};

        function a(i, t) {
            var n, e, s;
            return t ? (s = 0 <= (i >>>= 0) && i < 256) && (e = l[i]) ? e : (n = c(i, (0 | i) < 0 ? -1 : 0, !0), s && (l[i] = n), n) : (s = -128 <= (i |= 0) && i < 128) && (e = f[i]) ? e : (n = c(i, i < 0 ? -1 : 0, !1), s && (f[i] = n), n)
        }

        function d(i, t) {
            if (isNaN(i)) return t ? p : _;
            if (t) {
                if (i < 0) return p;
                if (i >= E) return U
            } else {
                if (i <= -y) return I;
                if (i + 1 >= y) return O
            }
            return i < 0 ? d(-i, t).neg() : c(i % N | 0, i / N | 0, t)
        }

        function c(i, t, n) {
            return new o(i, t, n)
        }
        o.fromInt = a, o.fromNumber = d, o.fromBits = c;
        var v = Math.pow;

        function w(i, t, n) {
            if (0 === i.length) throw Error("empty string");
            if ("NaN" === i || "Infinity" === i || "+Infinity" === i || "-Infinity" === i) return _;
            if ("number" == typeof t ? (n = t, t = !1) : t = !!t, (n = n || 10) < 2 || 36 < n) throw RangeError("radix");
            var e;
            if ((e = i.indexOf("-")) > 0) throw Error("interior hyphen");
            if (0 === e) return w(i.substring(1), t, n).neg();
            for (var s = d(v(n, 8)), h = _, r = 0; r < i.length; r += 8) {
                var u = Math.min(8, i.length - r),
                    o = parseInt(i.substring(r, r + u), n);
                if (u < 8) {
                    var g = d(v(n, u));
                    h = h.mul(g).add(d(o))
                } else h = (h = h.mul(s)).add(d(o))
            }
            return h.unsigned = t, h
        }

        function m(i, t) {
            return "number" == typeof i ? d(i, t) : "string" == typeof i ? w(i, t) : c(i.low, i.high, "boolean" == typeof t ? t : i.unsigned)
        }
        o.fromString = w, o.fromValue = m;
        var N = 4294967296,
            E = N * N,
            y = E / 2,
            b = a(1 << 24),
            _ = a(0);
        o.ZERO = _;
        var p = a(0, !0);
        o.UZERO = p;
        var q = a(1);
        o.ONE = q;
        var B = a(1, !0);
        o.UONE = B;
        var L = a(-1);
        o.NEG_ONE = L;
        var O = c(-1, 2147483647, !1);
        o.MAX_VALUE = O;
        var U = c(-1, -1, !0);
        o.MAX_UNSIGNED_VALUE = U;
        var I = c(0, -2147483648, !1);
        o.MIN_VALUE = I;
        var M = o.prototype;
        M.toInt = function() {
            return this.unsigned ? this.low >>> 0 : this.low
        }, M.toNumber = function() {
            return this.unsigned ? (this.high >>> 0) * N + (this.low >>> 0) : this.high * N + (this.low >>> 0)
        }, M.toString = function(i) {
            if ((i = i || 10) < 2 || 36 < i) throw RangeError("radix");
            if (this.isZero()) return "0";
            if (this.isNegative()) {
                if (this.eq(I)) {
                    var t = d(i),
                        n = this.div(t),
                        e = n.mul(t).sub(this);
                    return n.toString(i) + e.toInt().toString(i)
                }
                return "-" + this.neg().toString(i)
            }
            for (var s = d(v(i, 6), this.unsigned), h = this, r = "";;) {
                var u = h.div(s),
                    o = (h.sub(u.mul(s)).toInt() >>> 0).toString(i);
                if ((h = u).isZero()) return o + r;
                for (; o.length < 6;) o = "0" + o;
                r = "" + o + r
            }
        }, M.getHighBits = function() {
            return this.high
        }, M.getHighBitsUnsigned = function() {
            return this.high >>> 0
        }, M.getLowBits = function() {
            return this.low
        }, M.getLowBitsUnsigned = function() {
            return this.low >>> 0
        }, M.getNumBitsAbs = function() {
            if (this.isNegative()) return this.eq(I) ? 64 : this.neg().getNumBitsAbs();
            for (var i = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (i & 1 << t); t--);
            return 0 != this.high ? t + 33 : t + 1
        }, M.isZero = function() {
            return 0 === this.high && 0 === this.low
        }, M.eqz = M.isZero, M.isNegative = function() {
            return !this.unsigned && this.high < 0
        }, M.isPositive = function() {
            return this.unsigned || this.high >= 0
        }, M.isOdd = function() {
            return 1 == (1 & this.low)
        }, M.isEven = function() {
            return 0 == (1 & this.low)
        }, M.equals = function(i) {
            return g(i) || (i = m(i)), (this.unsigned === i.unsigned || this.high >>> 31 != 1 || i.high >>> 31 != 1) && (this.high === i.high && this.low === i.low)
        }, M.eq = M.equals, M.notEquals = function(i) {
            return !this.eq(i)
        }, M.neq = M.notEquals, M.ne = M.notEquals, M.lessThan = function(i) {
            return this.comp(i) < 0
        }, M.lt = M.lessThan, M.lessThanOrEqual = function(i) {
            return this.comp(i) <= 0
        }, M.lte = M.lessThanOrEqual, M.le = M.lessThanOrEqual, M.greaterThan = function(i) {
            return this.comp(i) > 0
        }, M.gt = M.greaterThan, M.greaterThanOrEqual = function(i) {
            return this.comp(i) >= 0
        }, M.gte = M.greaterThanOrEqual, M.ge = M.greaterThanOrEqual, M.compare = function(i) {
            if (g(i) || (i = m(i)), this.eq(i)) return 0;
            var t = this.isNegative(),
                n = i.isNegative();
            return t && !n ? -1 : !t && n ? 1 : this.unsigned ? i.high >>> 0 > this.high >>> 0 || i.high === this.high && i.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(i).isNegative() ? -1 : 1
        }, M.comp = M.compare, M.negate = function() {
            return !this.unsigned && this.eq(I) ? I : this.not().add(q)
        }, M.neg = M.negate, M.add = function(i) {
            g(i) || (i = m(i));
            var t = this.high >>> 16,
                n = 65535 & this.high,
                e = this.low >>> 16,
                s = 65535 & this.low,
                h = i.high >>> 16,
                r = 65535 & i.high,
                u = i.low >>> 16,
                o = 0,
                f = 0,
                l = 0,
                a = 0;
            return l += (a += s + (65535 & i.low)) >>> 16, f += (l += e + u) >>> 16, o += (f += n + r) >>> 16, o += t + h, c((l &= 65535) << 16 | (a &= 65535), (o &= 65535) << 16 | (f &= 65535), this.unsigned)
        }, M.subtract = function(i) {
            return g(i) || (i = m(i)), this.add(i.neg())
        }, M.sub = M.subtract, M.multiply = function(i) {
            if (this.isZero()) return _;
            if (g(i) || (i = m(i)), u) return c(u.mul(this.low, this.high, i.low, i.high), u.get_high(), this.unsigned);
            if (i.isZero()) return _;
            if (this.eq(I)) return i.isOdd() ? I : _;
            if (i.eq(I)) return this.isOdd() ? I : _;
            if (this.isNegative()) return i.isNegative() ? this.neg().mul(i.neg()) : this.neg().mul(i).neg();
            if (i.isNegative()) return this.mul(i.neg()).neg();
            if (this.lt(b) && i.lt(b)) return d(this.toNumber() * i.toNumber(), this.unsigned);
            var t = this.high >>> 16,
                n = 65535 & this.high,
                e = this.low >>> 16,
                s = 65535 & this.low,
                h = i.high >>> 16,
                r = 65535 & i.high,
                o = i.low >>> 16,
                f = 65535 & i.low,
                l = 0,
                a = 0,
                v = 0,
                w = 0;
            return v += (w += s * f) >>> 16, a += (v += e * f) >>> 16, v &= 65535, a += (v += s * o) >>> 16, l += (a += n * f) >>> 16, a &= 65535, l += (a += e * o) >>> 16, a &= 65535, l += (a += s * r) >>> 16, l += t * f + n * o + e * r + s * h, c((v &= 65535) << 16 | (w &= 65535), (l &= 65535) << 16 | (a &= 65535), this.unsigned)
        }, M.mul = M.multiply, M.divide = function(i) {
            if (g(i) || (i = m(i)), i.isZero()) throw Error("division by zero");
            var t, n, e;
            if (u) return this.unsigned || -2147483648 !== this.high || -1 !== i.low || -1 !== i.high ? c((this.unsigned ? u.div_u : u.div_s)(this.low, this.high, i.low, i.high), u.get_high(), this.unsigned) : this;
            if (this.isZero()) return this.unsigned ? p : _;
            if (this.unsigned) {
                if (i.unsigned || (i = i.toUnsigned()), i.gt(this)) return p;
                if (i.gt(this.shru(1))) return B;
                e = p
            } else {
                if (this.eq(I)) return i.eq(q) || i.eq(L) ? I : i.eq(I) ? q : (t = this.shr(1).div(i).shl(1)).eq(_) ? i.isNegative() ? q : L : (n = this.sub(i.mul(t)), e = t.add(n.div(i)));
                if (i.eq(I)) return this.unsigned ? p : _;
                if (this.isNegative()) return i.isNegative() ? this.neg().div(i.neg()) : this.neg().div(i).neg();
                if (i.isNegative()) return this.div(i.neg()).neg();
                e = _
            }
            for (n = this; n.gte(i);) {
                t = Math.max(1, Math.floor(n.toNumber() / i.toNumber()));
                for (var s = Math.ceil(Math.log(t) / Math.LN2), h = s <= 48 ? 1 : v(2, s - 48), r = d(t), o = r.mul(i); o.isNegative() || o.gt(n);) o = (r = d(t -= h, this.unsigned)).mul(i);
                r.isZero() && (r = q), e = e.add(r), n = n.sub(o)
            }
            return e
        }, M.div = M.divide, M.modulo = function(i) {
            return g(i) || (i = m(i)), u ? c((this.unsigned ? u.rem_u : u.rem_s)(this.low, this.high, i.low, i.high), u.get_high(), this.unsigned) : this.sub(this.div(i).mul(i))
        }, M.mod = M.modulo, M.rem = M.modulo, M.not = function() {
            return c(~this.low, ~this.high, this.unsigned)
        }, M.and = function(i) {
            return g(i) || (i = m(i)), c(this.low & i.low, this.high & i.high, this.unsigned)
        }, M.or = function(i) {
            return g(i) || (i = m(i)), c(this.low | i.low, this.high | i.high, this.unsigned)
        }, M.xor = function(i) {
            return g(i) || (i = m(i)), c(this.low ^ i.low, this.high ^ i.high, this.unsigned)
        }, M.shiftLeft = function(i) {
            return g(i) && (i = i.toInt()), 0 == (i &= 63) ? this : i < 32 ? c(this.low << i, this.high << i | this.low >>> 32 - i, this.unsigned) : c(0, this.low << i - 32, this.unsigned)
        }, M.shl = M.shiftLeft, M.shiftRight = function(i) {
            return g(i) && (i = i.toInt()), 0 == (i &= 63) ? this : i < 32 ? c(this.low >>> i | this.high << 32 - i, this.high >> i, this.unsigned) : c(this.high >> i - 32, this.high >= 0 ? 0 : -1, this.unsigned)
        }, M.shr = M.shiftRight, M.shiftRightUnsigned = function(i) {
            if (g(i) && (i = i.toInt()), 0 === (i &= 63)) return this;
            var t = this.high;
            return i < 32 ? c(this.low >>> i | t << 32 - i, t >>> i, this.unsigned) : c(32 === i ? t : t >>> i - 32, 0, this.unsigned)
        }, M.shru = M.shiftRightUnsigned, M.shr_u = M.shiftRightUnsigned, M.toSigned = function() {
            return this.unsigned ? c(this.low, this.high, !1) : this
        }, M.toUnsigned = function() {
            return this.unsigned ? this : c(this.low, this.high, !0)
        }, M.toBytes = function(i) {
            return i ? this.toBytesLE() : this.toBytesBE()
        }, M.toBytesLE = function() {
            var i = this.high,
                t = this.low;
            return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & i, i >>> 8 & 255, i >>> 16 & 255, i >>> 24]
        }, M.toBytesBE = function() {
            var i = this.high,
                t = this.low;
            return [i >>> 24, i >>> 16 & 255, i >>> 8 & 255, 255 & i, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
        }, o.fromBytes = function(i, t, n) {
            return n ? o.fromBytesLE(i, t) : o.fromBytesBE(i, t)
        }, o.fromBytesLE = function(i, t) {
            return new o(i[0] | i[1] << 8 | i[2] << 16 | i[3] << 24, i[4] | i[5] << 8 | i[6] << 16 | i[7] << 24, t)
        }, o.fromBytesBE = function(i, t) {
            return new o(i[4] << 24 | i[5] << 16 | i[6] << 8 | i[7], i[0] << 24 | i[1] << 16 | i[2] << 8 | i[3], t)
        }, e = i("default", s.exports)
    }), {})
}