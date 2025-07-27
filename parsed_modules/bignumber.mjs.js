import * as r from "./cc.js";

function main() {
    r._RF.push({}, "f6c21AapuBNmaGQULLenu57", "bignumber", void 0);
    var n = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
        t = Math.ceil,
        i = Math.floor,
        o = "[BigNumber Error] ",
        s = o + "Number primitive has more than 15 significant digits: ",
        u = 1e14,
        f = 14,
        c = 9007199254740991,
        l = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
        a = 1e7,
        h = 1e9;

    function g(e) {
        var r = 0 | e;
        return e > 0 || e === r ? r : r - 1
    }

    function p(e) {
        for (var r, n, t = 1, i = e.length, o = e[0] + ""; t < i;) {
            for (r = e[t++] + "", n = f - r.length; n--; r = "0" + r);
            o += r
        }
        for (i = o.length; 48 === o.charCodeAt(--i););
        return o.slice(0, i + 1 || 1)
    }

    function w(e, r) {
        var n, t, i = e.c,
            o = r.c,
            s = e.s,
            u = r.s,
            f = e.e,
            c = r.e;
        if (!s || !u) return null;
        if (n = i && !i[0], t = o && !o[0], n || t) return n ? t ? 0 : -u : s;
        if (s != u) return s;
        if (n = s < 0, t = f == c, !i || !o) return t ? 0 : !i ^ n ? 1 : -1;
        if (!t) return f > c ^ n ? 1 : -1;
        for (u = (f = i.length) < (c = o.length) ? f : c, s = 0; s < u; s++)
            if (i[s] != o[s]) return i[s] > o[s] ^ n ? 1 : -1;
        return f == c ? 0 : f > c ^ n ? 1 : -1
    }

    function m(e, r, n, t) {
        if (e < r || e > n || e !== i(e)) throw Error(o + (t || "Argument") + ("number" == typeof e ? e < r || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
    }

    function d(e) {
        var r = e.c.length - 1;
        return g(e.e / f) == r && e.c[r] % 2 != 0
    }

    function v(e, r) {
        return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (r < 0 ? "e" : "e+") + r
    }

    function N(e, r, n) {
        var t, i;
        if (r < 0) {
            for (i = n + "."; ++r; i += n);
            e = i + e
        } else if (++r > (t = e.length)) {
            for (i = n, r -= t; --r; i += n);
            e += i
        } else r < t && (e = e.slice(0, r) + "." + e.slice(r));
        return e
    }
    var b;
    b = function e(r) {
        var b, O, y, E, A, S, _, R, B, L, D = z.prototype = {
                constructor: z,
                toString: null,
                valueOf: null
            },
            P = new z(1),
            U = 20,
            x = 4,
            I = -7,
            T = 21,
            C = -1e7,
            M = 1e7,
            G = !1,
            F = 1,
            k = 0,
            j = {
                prefix: "",
                groupSize: 3,
                secondaryGroupSize: 0,
                groupSeparator: ",",
                decimalSeparator: ".",
                fractionGroupSize: 0,
                fractionGroupSeparator: " ",
                suffix: ""
            },
            q = "0123456789abcdefghijklmnopqrstuvwxyz",
            $ = !0;

        function z(e, r) {
            var t, o, u, l, a, h, g, p, w = this;
            if (!(w instanceof z)) return new z(e, r);
            if (null == r) {
                if (e && !0 === e._isBigNumber) return w.s = e.s, void(!e.c || e.e > M ? w.c = w.e = null : e.e < C ? w.c = [w.e = 0] : (w.e = e.e, w.c = e.c.slice()));
                if ((h = "number" == typeof e) && 0 * e == 0) {
                    if (w.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                        for (l = 0, a = e; a >= 10; a /= 10, l++);
                        return void(l > M ? w.c = w.e = null : (w.e = l, w.c = [e]))
                    }
                    p = String(e)
                } else {
                    if (!n.test(p = String(e))) return y(w, p, h);
                    w.s = 45 == p.charCodeAt(0) ? (p = p.slice(1), -1) : 1
                }(l = p.indexOf(".")) > -1 && (p = p.replace(".", "")), (a = p.search(/e/i)) > 0 ? (l < 0 && (l = a), l += +p.slice(a + 1), p = p.substring(0, a)) : l < 0 && (l = p.length)
            } else {
                if (m(r, 2, q.length, "Base"), 10 == r && $) return X(w = new z(e), U + w.e + 1, x);
                if (p = String(e), h = "number" == typeof e) {
                    if (0 * e != 0) return y(w, p, h, r);
                    if (w.s = 1 / e < 0 ? (p = p.slice(1), -1) : 1, z.DEBUG && p.replace(/^0\.0*|\./, "").length > 15) throw Error(s + e)
                } else w.s = 45 === p.charCodeAt(0) ? (p = p.slice(1), -1) : 1;
                for (t = q.slice(0, r), l = a = 0, g = p.length; a < g; a++)
                    if (t.indexOf(o = p.charAt(a)) < 0) {
                        if ("." == o) {
                            if (a > l) {
                                l = g;
                                continue
                            }
                        } else if (!u && (p == p.toUpperCase() && (p = p.toLowerCase()) || p == p.toLowerCase() && (p = p.toUpperCase()))) {
                            u = !0, a = -1, l = 0;
                            continue
                        }
                        return y(w, String(e), h, r)
                    } h = !1, (l = (p = O(p, r, 10, w.s)).indexOf(".")) > -1 ? p = p.replace(".", "") : l = p.length
            }
            for (a = 0; 48 === p.charCodeAt(a); a++);
            for (g = p.length; 48 === p.charCodeAt(--g););
            if (p = p.slice(a, ++g)) {
                if (g -= a, h && z.DEBUG && g > 15 && (e > c || e !== i(e))) throw Error(s + w.s * e);
                if ((l = l - a - 1) > M) w.c = w.e = null;
                else if (l < C) w.c = [w.e = 0];
                else {
                    if (w.e = l, w.c = [], a = (l + 1) % f, l < 0 && (a += f), a < g) {
                        for (a && w.c.push(+p.slice(0, a)), g -= f; a < g;) w.c.push(+p.slice(a, a += f));
                        a = f - (p = p.slice(a)).length
                    } else a -= g;
                    for (; a--; p += "0");
                    w.c.push(+p)
                }
            } else w.c = [w.e = 0]
        }

        function H(e, r, n, t) {
            var i, o, s, u, f;
            if (null == n ? n = x : m(n, 0, 8), !e.c) return e.toString();
            if (i = e.c[0], s = e.e, null == r) f = p(e.c), f = 1 == t || 2 == t && (s <= I || s >= T) ? v(f, s) : N(f, s, "0");
            else if (o = (e = X(new z(e), r, n)).e, u = (f = p(e.c)).length, 1 == t || 2 == t && (r <= o || o <= I)) {
                for (; u < r; f += "0", u++);
                f = v(f, o)
            } else if (r -= s, f = N(f, o, "0"), o + 1 > u) {
                if (--r > 0)
                    for (f += "."; r--; f += "0");
            } else if ((r += o - u) > 0)
                for (o + 1 == u && (f += "."); r--; f += "0");
            return e.s < 0 && i ? "-" + f : f
        }

        function V(e, r) {
            for (var n, t = 1, i = new z(e[0]); t < e.length; t++) {
                if (!(n = new z(e[t])).s) {
                    i = n;
                    break
                }
                r.call(i, n) && (i = n)
            }
            return i
        }

        function W(e, r, n) {
            for (var t = 1, i = r.length; !r[--i]; r.pop());
            for (i = r[0]; i >= 10; i /= 10, t++);
            return (n = t + n * f - 1) > M ? e.c = e.e = null : n < C ? e.c = [e.e = 0] : (e.e = n, e.c = r), e
        }

        function X(e, r, n, o) {
            var s, c, a, h, g, p, w, m = e.c,
                d = l;
            if (m) {
                e: {
                    for (s = 1, h = m[0]; h >= 10; h /= 10, s++);
                    if ((c = r - s) < 0) c += f,
                    a = r,
                    w = (g = m[p = 0]) / d[s - a - 1] % 10 | 0;
                    else if ((p = t((c + 1) / f)) >= m.length) {
                        if (!o) break e;
                        for (; m.length <= p; m.push(0));
                        g = w = 0, s = 1, a = (c %= f) - f + 1
                    } else {
                        for (g = h = m[p], s = 1; h >= 10; h /= 10, s++);
                        w = (a = (c %= f) - f + s) < 0 ? 0 : g / d[s - a - 1] % 10 | 0
                    }
                    if (o = o || r < 0 || null != m[p + 1] || (a < 0 ? g : g % d[s - a - 1]), o = n < 4 ? (w || o) && (0 == n || n == (e.s < 0 ? 3 : 2)) : w > 5 || 5 == w && (4 == n || o || 6 == n && (c > 0 ? a > 0 ? g / d[s - a] : 0 : m[p - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), r < 1 || !m[0]) return m.length = 0,
                    o ? (r -= e.e + 1, m[0] = d[(f - r % f) % f], e.e = -r || 0) : m[0] = e.e = 0,
                    e;
                    if (0 == c ? (m.length = p, h = 1, p--) : (m.length = p + 1, h = d[f - c], m[p] = a > 0 ? i(g / d[s - a] % d[a]) * h : 0), o)
                        for (;;) {
                            if (0 == p) {
                                for (c = 1, a = m[0]; a >= 10; a /= 10, c++);
                                for (a = m[0] += h, h = 1; a >= 10; a /= 10, h++);
                                c != h && (e.e++, m[0] == u && (m[0] = 1));
                                break
                            }
                            if (m[p] += h, m[p] != u) break;
                            m[p--] = 0, h = 1
                        }
                    for (c = m.length; 0 === m[--c]; m.pop());
                }
                e.e > M ? e.c = e.e = null : e.e < C && (e.c = [e.e = 0])
            }
            return e
        }

        function Y(e) {
            var r, n = e.e;
            return null === n ? e.toString() : (r = p(e.c), r = n <= I || n >= T ? v(r, n) : N(r, n, "0"), e.s < 0 ? "-" + r : r)
        }
        return z.clone = e, z.ROUND_UP = 0, z.ROUND_DOWN = 1, z.ROUND_CEIL = 2, z.ROUND_FLOOR = 3, z.ROUND_HALF_UP = 4, z.ROUND_HALF_DOWN = 5, z.ROUND_HALF_EVEN = 6, z.ROUND_HALF_CEIL = 7, z.ROUND_HALF_FLOOR = 8, z.EUCLID = 9, z.config = z.set = function(e) {
            var r, n;
            if (null != e) {
                if ("object" != typeof e) throw Error(o + "Object expected: " + e);
                if (e.hasOwnProperty(r = "DECIMAL_PLACES") && (m(n = e[r], 0, h, r), U = n), e.hasOwnProperty(r = "ROUNDING_MODE") && (m(n = e[r], 0, 8, r), x = n), e.hasOwnProperty(r = "EXPONENTIAL_AT") && ((n = e[r]) && n.pop ? (m(n[0], -h, 0, r), m(n[1], 0, h, r), I = n[0], T = n[1]) : (m(n, -h, h, r), I = -(T = n < 0 ? -n : n))), e.hasOwnProperty(r = "RANGE"))
                    if ((n = e[r]) && n.pop) m(n[0], -h, -1, r), m(n[1], 1, h, r), C = n[0], M = n[1];
                    else {
                        if (m(n, -h, h, r), !n) throw Error(o + r + " cannot be zero: " + n);
                        C = -(M = n < 0 ? -n : n)
                    } if (e.hasOwnProperty(r = "CRYPTO")) {
                    if ((n = e[r]) !== !!n) throw Error(o + r + " not true or false: " + n);
                    if (n) {
                        if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw G = !n, Error(o + "crypto unavailable");
                        G = n
                    } else G = n
                }
                if (e.hasOwnProperty(r = "MODULO_MODE") && (m(n = e[r], 0, 9, r), F = n), e.hasOwnProperty(r = "POW_PRECISION") && (m(n = e[r], 0, h, r), k = n), e.hasOwnProperty(r = "FORMAT")) {
                    if ("object" != typeof(n = e[r])) throw Error(o + r + " not an object: " + n);
                    j = n
                }
                if (e.hasOwnProperty(r = "ALPHABET")) {
                    if ("string" != typeof(n = e[r]) || /^.?$|[+\-.\s]|(.).*\1/.test(n)) throw Error(o + r + " invalid: " + n);
                    $ = "0123456789" == n.slice(0, 10), q = n
                }
            }
            return {
                DECIMAL_PLACES: U,
                ROUNDING_MODE: x,
                EXPONENTIAL_AT: [I, T],
                RANGE: [C, M],
                CRYPTO: G,
                MODULO_MODE: F,
                POW_PRECISION: k,
                FORMAT: j,
                ALPHABET: q
            }
        }, z.isBigNumber = function(e) {
            if (!e || !0 !== e._isBigNumber) return !1;
            if (!z.DEBUG) return !0;
            var r, n, t = e.c,
                s = e.e,
                c = e.s;
            e: if ("[object Array]" == {}.toString.call(t)) {
                if ((1 === c || -1 === c) && s >= -h && s <= h && s === i(s)) {
                    if (0 === t[0]) {
                        if (0 === s && 1 === t.length) return !0;
                        break e
                    }
                    if ((r = (s + 1) % f) < 1 && (r += f), String(t[0]).length == r) {
                        for (r = 0; r < t.length; r++)
                            if ((n = t[r]) < 0 || n >= u || n !== i(n)) break e;
                        if (0 !== n) return !0
                    }
                }
            } else
            if (null === t && null === s && (null === c || 1 === c || -1 === c)) return !0;
            throw Error(o + "Invalid BigNumber: " + e)
        }, z.maximum = z.max = function() {
            return V(arguments, D.lt)
        }, z.minimum = z.min = function() {
            return V(arguments, D.gt)
        }, z.random = (E = 9007199254740992, A = Math.random() * E & 2097151 ? function() {
            return i(Math.random() * E)
        } : function() {
            return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
        }, function(e) {
            var r, n, s, u, c, a = 0,
                g = [],
                p = new z(P);
            if (null == e ? e = U : m(e, 0, h), u = t(e / f), G)
                if (crypto.getRandomValues) {
                    for (r = crypto.getRandomValues(new Uint32Array(u *= 2)); a < u;)(c = 131072 * r[a] + (r[a + 1] >>> 11)) >= 9e15 ? (n = crypto.getRandomValues(new Uint32Array(2)), r[a] = n[0], r[a + 1] = n[1]) : (g.push(c % 1e14), a += 2);
                    a = u / 2
                } else {
                    if (!crypto.randomBytes) throw G = !1, Error(o + "crypto unavailable");
                    for (r = crypto.randomBytes(u *= 7); a < u;)(c = 281474976710656 * (31 & r[a]) + 1099511627776 * r[a + 1] + 4294967296 * r[a + 2] + 16777216 * r[a + 3] + (r[a + 4] << 16) + (r[a + 5] << 8) + r[a + 6]) >= 9e15 ? crypto.randomBytes(7).copy(r, a) : (g.push(c % 1e14), a += 7);
                    a = u / 7
                } if (!G)
                for (; a < u;)(c = A()) < 9e15 && (g[a++] = c % 1e14);
            for (u = g[--a], e %= f, u && e && (c = l[f - e], g[a] = i(u / c) * c); 0 === g[a]; g.pop(), a--);
            if (a < 0) g = [s = 0];
            else {
                for (s = -1; 0 === g[0]; g.splice(0, 1), s -= f);
                for (a = 1, c = g[0]; c >= 10; c /= 10, a++);
                a < f && (s -= f - a)
            }
            return p.e = s, p.c = g, p
        }), z.sum = function() {
            for (var e = 1, r = arguments, n = new z(r[0]); e < r.length;) n = n.plus(r[e++]);
            return n
        }, O = function() {
            var e = "0123456789";

            function r(e, r, n, t) {
                for (var i, o, s = [0], u = 0, f = e.length; u < f;) {
                    for (o = s.length; o--; s[o] *= r);
                    for (s[0] += t.indexOf(e.charAt(u++)), i = 0; i < s.length; i++) s[i] > n - 1 && (null == s[i + 1] && (s[i + 1] = 0), s[i + 1] += s[i] / n | 0, s[i] %= n)
                }
                return s.reverse()
            }
            return function(n, t, i, o, s) {
                var u, f, c, l, a, h, g, w, m = n.indexOf("."),
                    d = U,
                    v = x;
                for (m >= 0 && (l = k, k = 0, n = n.replace(".", ""), h = (w = new z(t)).pow(n.length - m), k = l, w.c = r(N(p(h.c), h.e, "0"), 10, i, e), w.e = w.c.length), c = l = (g = r(n, t, i, s ? (u = q, e) : (u = e, q))).length; 0 == g[--l]; g.pop());
                if (!g[0]) return u.charAt(0);
                if (m < 0 ? --c : (h.c = g, h.e = c, h.s = o, g = (h = b(h, w, d, v, i)).c, a = h.r, c = h.e), m = g[f = c + d + 1], l = i / 2, a = a || f < 0 || null != g[f + 1], a = v < 4 ? (null != m || a) && (0 == v || v == (h.s < 0 ? 3 : 2)) : m > l || m == l && (4 == v || a || 6 == v && 1 & g[f - 1] || v == (h.s < 0 ? 8 : 7)), f < 1 || !g[0]) n = a ? N(u.charAt(1), -d, u.charAt(0)) : u.charAt(0);
                else {
                    if (g.length = f, a)
                        for (--i; ++g[--f] > i;) g[f] = 0, f || (++c, g = [1].concat(g));
                    for (l = g.length; !g[--l];);
                    for (m = 0, n = ""; m <= l; n += u.charAt(g[m++]));
                    n = N(n, c, u.charAt(0))
                }
                return n
            }
        }(), b = function() {
            function e(e, r, n) {
                var t, i, o, s, u = 0,
                    f = e.length,
                    c = r % a,
                    l = r / a | 0;
                for (e = e.slice(); f--;) u = ((i = c * (o = e[f] % a) + (t = l * o + (s = e[f] / a | 0) * c) % a * a + u) / n | 0) + (t / a | 0) + l * s, e[f] = i % n;
                return u && (e = [u].concat(e)), e
            }

            function r(e, r, n, t) {
                var i, o;
                if (n != t) o = n > t ? 1 : -1;
                else
                    for (i = o = 0; i < n; i++)
                        if (e[i] != r[i]) {
                            o = e[i] > r[i] ? 1 : -1;
                            break
                        } return o
            }

            function n(e, r, n, t) {
                for (var i = 0; n--;) e[n] -= i, i = e[n] < r[n] ? 1 : 0, e[n] = i * t + e[n] - r[n];
                for (; !e[0] && e.length > 1; e.splice(0, 1));
            }
            return function(t, o, s, c, l) {
                var a, h, p, w, m, d, v, N, b, O, y, E, A, S, _, R, B, L = t.s == o.s ? 1 : -1,
                    D = t.c,
                    P = o.c;
                if (!(D && D[0] && P && P[0])) return new z(t.s && o.s && (D ? !P || D[0] != P[0] : P) ? D && 0 == D[0] || !P ? 0 * L : L / 0 : NaN);
                for (b = (N = new z(L)).c = [], L = s + (h = t.e - o.e) + 1, l || (l = u, h = g(t.e / f) - g(o.e / f), L = L / f | 0), p = 0; P[p] == (D[p] || 0); p++);
                if (P[p] > (D[p] || 0) && h--, L < 0) b.push(1), w = !0;
                else {
                    for (S = D.length, R = P.length, p = 0, L += 2, (m = i(l / (P[0] + 1))) > 1 && (P = e(P, m, l), D = e(D, m, l), R = P.length, S = D.length), A = R, y = (O = D.slice(0, R)).length; y < R; O[y++] = 0);
                    B = P.slice(), B = [0].concat(B), _ = P[0], P[1] >= l / 2 && _++;
                    do {
                        if (m = 0, (a = r(P, O, R, y)) < 0) {
                            if (E = O[0], R != y && (E = E * l + (O[1] || 0)), (m = i(E / _)) > 1)
                                for (m >= l && (m = l - 1), v = (d = e(P, m, l)).length, y = O.length; 1 == r(d, O, v, y);) m--, n(d, R < v ? B : P, v, l), v = d.length, a = 1;
                            else 0 == m && (a = m = 1), v = (d = P.slice()).length;
                            if (v < y && (d = [0].concat(d)), n(O, d, y, l), y = O.length, -1 == a)
                                for (; r(P, O, R, y) < 1;) m++, n(O, R < y ? B : P, y, l), y = O.length
                        } else 0 === a && (m++, O = [0]);
                        b[p++] = m, O[0] ? O[y++] = D[A] || 0 : (O = [D[A]], y = 1)
                    } while ((A++ < S || null != O[0]) && L--);
                    w = null != O[0], b[0] || b.splice(0, 1)
                }
                if (l == u) {
                    for (p = 1, L = b[0]; L >= 10; L /= 10, p++);
                    X(N, s + (N.e = p + h * f - 1) + 1, c, w)
                } else N.e = h, N.r = +w;
                return N
            }
        }(), S = /^(-?)0([xbo])(?=\w[\w.]*$)/i, _ = /^([^.]+)\.$/, R = /^\.([^.]+)$/, B = /^-?(Infinity|NaN)$/, L = /^\s*\+(?=[\w.])|^\s+|\s+$/g, y = function(e, r, n, t) {
            var i, s = n ? r : r.replace(L, "");
            if (B.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1;
            else {
                if (!n && (s = s.replace(S, (function(e, r, n) {
                        return i = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, t && t != i ? e : r
                    })), t && (i = t, s = s.replace(_, "$1").replace(R, "0.$1")), r != s)) return new z(s, i);
                if (z.DEBUG) throw Error(o + "Not a" + (t ? " base " + t : "") + " number: " + r);
                e.s = null
            }
            e.c = e.e = null
        }, D.absoluteValue = D.abs = function() {
            var e = new z(this);
            return e.s < 0 && (e.s = 1), e
        }, D.comparedTo = function(e, r) {
            return w(this, new z(e, r))
        }, D.decimalPlaces = D.dp = function(e, r) {
            var n, t, i, o = this;
            if (null != e) return m(e, 0, h), null == r ? r = x : m(r, 0, 8), X(new z(o), e + o.e + 1, r);
            if (!(n = o.c)) return null;
            if (t = ((i = n.length - 1) - g(this.e / f)) * f, i = n[i])
                for (; i % 10 == 0; i /= 10, t--);
            return t < 0 && (t = 0), t
        }, D.dividedBy = D.div = function(e, r) {
            return b(this, new z(e, r), U, x)
        }, D.dividedToIntegerBy = D.idiv = function(e, r) {
            return b(this, new z(e, r), 0, 1)
        }, D.exponentiatedBy = D.pow = function(e, r) {
            var n, s, u, c, l, a, h, g, p = this;
            if ((e = new z(e)).c && !e.isInteger()) throw Error(o + "Exponent not an integer: " + Y(e));
            if (null != r && (r = new z(r)), l = e.e > 14, !p.c || !p.c[0] || 1 == p.c[0] && !p.e && 1 == p.c.length || !e.c || !e.c[0]) return g = new z(Math.pow(+Y(p), l ? e.s * (2 - d(e)) : +Y(e))), r ? g.mod(r) : g;
            if (a = e.s < 0, r) {
                if (r.c ? !r.c[0] : !r.s) return new z(NaN);
                (s = !a && p.isInteger() && r.isInteger()) && (p = p.mod(r))
            } else {
                if (e.e > 9 && (p.e > 0 || p.e < -1 || (0 == p.e ? p.c[0] > 1 || l && p.c[1] >= 24e7 : p.c[0] < 8e13 || l && p.c[0] <= 9999975e7))) return c = p.s < 0 && d(e) ? -0 : 0, p.e > -1 && (c = 1 / c), new z(a ? 1 / c : c);
                k && (c = t(k / f + 2))
            }
            for (l ? (n = new z(.5), a && (e.s = 1), h = d(e)) : h = (u = Math.abs(+Y(e))) % 2, g = new z(P);;) {
                if (h) {
                    if (!(g = g.times(p)).c) break;
                    c ? g.c.length > c && (g.c.length = c) : s && (g = g.mod(r))
                }
                if (u) {
                    if (0 === (u = i(u / 2))) break;
                    h = u % 2
                } else if (X(e = e.times(n), e.e + 1, 1), e.e > 14) h = d(e);
                else {
                    if (0 == (u = +Y(e))) break;
                    h = u % 2
                }
                p = p.times(p), c ? p.c && p.c.length > c && (p.c.length = c) : s && (p = p.mod(r))
            }
            return s ? g : (a && (g = P.div(g)), r ? g.mod(r) : c ? X(g, k, x, void 0) : g)
        }, D.integerValue = function(e) {
            var r = new z(this);
            return null == e ? e = x : m(e, 0, 8), X(r, r.e + 1, e)
        }, D.isEqualTo = D.eq = function(e, r) {
            return 0 === w(this, new z(e, r))
        }, D.isFinite = function() {
            return !!this.c
        }, D.isGreaterThan = D.gt = function(e, r) {
            return w(this, new z(e, r)) > 0
        }, D.isGreaterThanOrEqualTo = D.gte = function(e, r) {
            return 1 === (r = w(this, new z(e, r))) || 0 === r
        }, D.isInteger = function() {
            return !!this.c && g(this.e / f) > this.c.length - 2
        }, D.isLessThan = D.lt = function(e, r) {
            return w(this, new z(e, r)) < 0
        }, D.isLessThanOrEqualTo = D.lte = function(e, r) {
            return -1 === (r = w(this, new z(e, r))) || 0 === r
        }, D.isNaN = function() {
            return !this.s
        }, D.isNegative = function() {
            return this.s < 0
        }, D.isPositive = function() {
            return this.s > 0
        }, D.isZero = function() {
            return !!this.c && 0 == this.c[0]
        }, D.minus = function(e, r) {
            var n, t, i, o, s = this,
                c = s.s;
            if (r = (e = new z(e, r)).s, !c || !r) return new z(NaN);
            if (c != r) return e.s = -r, s.plus(e);
            var l = s.e / f,
                a = e.e / f,
                h = s.c,
                p = e.c;
            if (!l || !a) {
                if (!h || !p) return h ? (e.s = -r, e) : new z(p ? s : NaN);
                if (!h[0] || !p[0]) return p[0] ? (e.s = -r, e) : new z(h[0] ? s : 3 == x ? -0 : 0)
            }
            if (l = g(l), a = g(a), h = h.slice(), c = l - a) {
                for ((o = c < 0) ? (c = -c, i = h) : (a = l, i = p), i.reverse(), r = c; r--; i.push(0));
                i.reverse()
            } else
                for (t = (o = (c = h.length) < (r = p.length)) ? c : r, c = r = 0; r < t; r++)
                    if (h[r] != p[r]) {
                        o = h[r] < p[r];
                        break
                    } if (o && (i = h, h = p, p = i, e.s = -e.s), (r = (t = p.length) - (n = h.length)) > 0)
                for (; r--; h[n++] = 0);
            for (r = u - 1; t > c;) {
                if (h[--t] < p[t]) {
                    for (n = t; n && !h[--n]; h[n] = r);
                    --h[n], h[t] += u
                }
                h[t] -= p[t]
            }
            for (; 0 == h[0]; h.splice(0, 1), --a);
            return h[0] ? W(e, h, a) : (e.s = 3 == x ? -1 : 1, e.c = [e.e = 0], e)
        }, D.modulo = D.mod = function(e, r) {
            var n, t, i = this;
            return e = new z(e, r), !i.c || !e.s || e.c && !e.c[0] ? new z(NaN) : !e.c || i.c && !i.c[0] ? new z(i) : (9 == F ? (t = e.s, e.s = 1, n = b(i, e, 0, 3), e.s = t, n.s *= t) : n = b(i, e, 0, F), (e = i.minus(n.times(e))).c[0] || 1 != F || (e.s = i.s), e)
        }, D.multipliedBy = D.times = function(e, r) {
            var n, t, i, o, s, c, l, h, p, w, m, d, v, N, b, O = this,
                y = O.c,
                E = (e = new z(e, r)).c;
            if (!(y && E && y[0] && E[0])) return !O.s || !e.s || y && !y[0] && !E || E && !E[0] && !y ? e.c = e.e = e.s = null : (e.s *= O.s, y && E ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
            for (t = g(O.e / f) + g(e.e / f), e.s *= O.s, (l = y.length) < (w = E.length) && (v = y, y = E, E = v, i = l, l = w, w = i), i = l + w, v = []; i--; v.push(0));
            for (N = u, b = a, i = w; --i >= 0;) {
                for (n = 0, m = E[i] % b, d = E[i] / b | 0, o = i + (s = l); o > i;) n = ((h = m * (h = y[--s] % b) + (c = d * h + (p = y[s] / b | 0) * m) % b * b + v[o] + n) / N | 0) + (c / b | 0) + d * p, v[o--] = h % N;
                v[o] = n
            }
            return n ? ++t : v.splice(0, 1), W(e, v, t)
        }, D.negated = function() {
            var e = new z(this);
            return e.s = -e.s || null, e
        }, D.plus = function(e, r) {
            var n, t = this,
                i = t.s;
            if (r = (e = new z(e, r)).s, !i || !r) return new z(NaN);
            if (i != r) return e.s = -r, t.minus(e);
            var o = t.e / f,
                s = e.e / f,
                c = t.c,
                l = e.c;
            if (!o || !s) {
                if (!c || !l) return new z(i / 0);
                if (!c[0] || !l[0]) return l[0] ? e : new z(c[0] ? t : 0 * i)
            }
            if (o = g(o), s = g(s), c = c.slice(), i = o - s) {
                for (i > 0 ? (s = o, n = l) : (i = -i, n = c), n.reverse(); i--; n.push(0));
                n.reverse()
            }
            for ((i = c.length) - (r = l.length) < 0 && (n = l, l = c, c = n, r = i), i = 0; r;) i = (c[--r] = c[r] + l[r] + i) / u | 0, c[r] = u === c[r] ? 0 : c[r] % u;
            return i && (c = [i].concat(c), ++s), W(e, c, s)
        }, D.precision = D.sd = function(e, r) {
            var n, t, i, o = this;
            if (null != e && e !== !!e) return m(e, 1, h), null == r ? r = x : m(r, 0, 8), X(new z(o), e, r);
            if (!(n = o.c)) return null;
            if (t = (i = n.length - 1) * f + 1, i = n[i]) {
                for (; i % 10 == 0; i /= 10, t--);
                for (i = n[0]; i >= 10; i /= 10, t++);
            }
            return e && o.e + 1 > t && (t = o.e + 1), t
        }, D.shiftedBy = function(e) {
            return m(e, -9007199254740991, c), this.times("1e" + e)
        }, D.squareRoot = D.sqrt = function() {
            var e, r, n, t, i, o = this,
                s = o.c,
                u = o.s,
                f = o.e,
                c = U + 4,
                l = new z("0.5");
            if (1 !== u || !s || !s[0]) return new z(!u || u < 0 && (!s || s[0]) ? NaN : s ? o : 1 / 0);
            if (0 == (u = Math.sqrt(+Y(o))) || u == 1 / 0 ? (((r = p(s)).length + f) % 2 == 0 && (r += "0"), u = Math.sqrt(+r), f = g((f + 1) / 2) - (f < 0 || f % 2), n = new z(r = u == 1 / 0 ? "5e" + f : (r = u.toExponential()).slice(0, r.indexOf("e") + 1) + f)) : n = new z(u + ""), n.c[0])
                for ((u = (f = n.e) + c) < 3 && (u = 0);;)
                    if (i = n, n = l.times(i.plus(b(o, i, c, 1))), p(i.c).slice(0, u) === (r = p(n.c)).slice(0, u)) {
                        if (n.e < f && --u, "9999" != (r = r.slice(u - 3, u + 1)) && (t || "4999" != r)) {
                            +r && (+r.slice(1) || "5" != r.charAt(0)) || (X(n, n.e + U + 2, 1), e = !n.times(n).eq(o));
                            break
                        }
                        if (!t && (X(i, i.e + U + 2, 0), i.times(i).eq(o))) {
                            n = i;
                            break
                        }
                        c += 4, u += 4, t = 1
                    } return X(n, n.e + U + 1, x, e)
        }, D.toExponential = function(e, r) {
            return null != e && (m(e, 0, h), e++), H(this, e, r, 1)
        }, D.toFixed = function(e, r) {
            return null != e && (m(e, 0, h), e = e + this.e + 1), H(this, e, r)
        }, D.toFormat = function(e, r, n) {
            var t, i = this;
            if (null == n) null != e && r && "object" == typeof r ? (n = r, r = null) : e && "object" == typeof e ? (n = e, e = r = null) : n = j;
            else if ("object" != typeof n) throw Error(o + "Argument not an object: " + n);
            if (t = i.toFixed(e, r), i.c) {
                var s, u = t.split("."),
                    f = +n.groupSize,
                    c = +n.secondaryGroupSize,
                    l = n.groupSeparator || "",
                    a = u[0],
                    h = u[1],
                    g = i.s < 0,
                    p = g ? a.slice(1) : a,
                    w = p.length;
                if (c && (s = f, f = c, c = s, w -= s), f > 0 && w > 0) {
                    for (s = w % f || f, a = p.substr(0, s); s < w; s += f) a += l + p.substr(s, f);
                    c > 0 && (a += l + p.slice(s)), g && (a = "-" + a)
                }
                t = h ? a + (n.decimalSeparator || "") + ((c = +n.fractionGroupSize) ? h.replace(new RegExp("\\d{" + c + "}\\B", "g"), "$&" + (n.fractionGroupSeparator || "")) : h) : a
            }
            return (n.prefix || "") + t + (n.suffix || "")
        }, D.toFraction = function(e) {
            var r, n, t, i, s, u, c, a, h, g, w, m, d = this,
                v = d.c;
            if (null != e && (!(c = new z(e)).isInteger() && (c.c || 1 !== c.s) || c.lt(P))) throw Error(o + "Argument " + (c.isInteger() ? "out of range: " : "not an integer: ") + Y(c));
            if (!v) return new z(d);
            for (r = new z(P), h = n = new z(P), t = a = new z(P), m = p(v), s = r.e = m.length - d.e - 1, r.c[0] = l[(u = s % f) < 0 ? f + u : u], e = !e || c.comparedTo(r) > 0 ? s > 0 ? r : h : c, u = M, M = 1 / 0, c = new z(m), a.c[0] = 0; g = b(c, r, 0, 1), 1 != (i = n.plus(g.times(t))).comparedTo(e);) n = t, t = i, h = a.plus(g.times(i = h)), a = i, r = c.minus(g.times(i = r)), c = i;
            return i = b(e.minus(n), t, 0, 1), a = a.plus(i.times(h)), n = n.plus(i.times(t)), a.s = h.s = d.s, w = b(h, t, s *= 2, x).minus(d).abs().comparedTo(b(a, n, s, x).minus(d).abs()) < 1 ? [h, t] : [a, n], M = u, w
        }, D.toNumber = function() {
            return +Y(this)
        }, D.toPrecision = function(e, r) {
            return null != e && m(e, 1, h), H(this, e, r, 2)
        }, D.toString = function(e) {
            var r, n = this,
                t = n.s,
                i = n.e;
            return null === i ? t ? (r = "Infinity", t < 0 && (r = "-" + r)) : r = "NaN" : (null == e ? r = i <= I || i >= T ? v(p(n.c), i) : N(p(n.c), i, "0") : 10 === e && $ ? r = N(p((n = X(new z(n), U + i + 1, x)).c), n.e, "0") : (m(e, 2, q.length, "Base"), r = O(N(p(n.c), i, "0"), 10, e, t, !0)), t < 0 && n.c[0] && (r = "-" + r)), r
        }, D.valueOf = D.toJSON = function() {
            return Y(this)
        }, D._isBigNumber = !0, D[Symbol.toStringTag] = "BigNumber", D[Symbol.for("nodejs.util.inspect.custom")] = D.valueOf, null != r && z.set(r), z
    }(), e({
        BigNumber: b,
        default: b
    });
    r._RF.pop()
}