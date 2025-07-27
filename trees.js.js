import * as n from "./cjs-loader.mjs.js";
import * as _ from "./common.js";

function main() {
    let r;
    e("default", void 0);
    const a = e("__cjsMetaURL", t.meta.url);
    n.define(a, (function(t, n, _, a, i) {
        var l = n("../utils/common");

        function d(e) {
            for (var t = e.length; --t >= 0;) e[t] = 0
        }
        var o = 256,
            f = 286,
            s = 30,
            u = 15,
            c = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
            b = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
            h = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            v = new Array(576);
        d(v);
        var y = new Array(60);
        d(y);
        var m = new Array(512);
        d(m);
        var x = new Array(256);
        d(x);
        var g = new Array(29);
        d(g);
        var w, A, j, k = new Array(s);

        function L(e, t, n, _, r) {
            this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = _, this.max_length = r, this.has_stree = e && e.length
        }

        function M(e, t) {
            this.dyn_tree = e, this.max_code = 0, this.stat_desc = t
        }

        function R(e) {
            return e < 256 ? m[e] : m[256 + (e >>> 7)]
        }

        function S(e, t) {
            e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255
        }

        function U(e, t, n) {
            e.bi_valid > 16 - n ? (e.bi_buf |= t << e.bi_valid & 65535, S(e, e.bi_buf), e.bi_buf = t >> 16 - e.bi_valid, e.bi_valid += n - 16) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n)
        }

        function z(e, t, n) {
            U(e, n[2 * t], n[2 * t + 1])
        }

        function q(e, t) {
            var n = 0;
            do {
                n |= 1 & e, e >>>= 1, n <<= 1
            } while (--t > 0);
            return n >>> 1
        }

        function B(e, t, n) {
            var _, r, a = new Array(16),
                i = 0;
            for (_ = 1; _ <= u; _++) a[_] = i = i + n[_ - 1] << 1;
            for (r = 0; r <= t; r++) {
                var l = e[2 * r + 1];
                0 !== l && (e[2 * r] = q(a[l]++, l))
            }
        }

        function C(e) {
            var t;
            for (t = 0; t < f; t++) e.dyn_ltree[2 * t] = 0;
            for (t = 0; t < s; t++) e.dyn_dtree[2 * t] = 0;
            for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
            e.dyn_ltree[512] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0
        }

        function D(e) {
            e.bi_valid > 8 ? S(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
        }

        function E(e, t, n, _) {
            var r = 2 * t,
                a = 2 * n;
            return e[r] < e[a] || e[r] === e[a] && _[t] <= _[n]
        }

        function F(e, t, n) {
            for (var _ = e.heap[n], r = n << 1; r <= e.heap_len && (r < e.heap_len && E(t, e.heap[r + 1], e.heap[r], e.depth) && r++, !E(t, _, e.heap[r], e.depth));) e.heap[n] = e.heap[r], n = r, r <<= 1;
            e.heap[n] = _
        }

        function G(e, t, n) {
            var _, r, a, i, l = 0;
            if (0 !== e.last_lit)
                do {
                    _ = e.pending_buf[e.d_buf + 2 * l] << 8 | e.pending_buf[e.d_buf + 2 * l + 1], r = e.pending_buf[e.l_buf + l], l++, 0 === _ ? z(e, r, t) : (z(e, (a = x[r]) + o + 1, t), 0 !== (i = c[a]) && U(e, r -= g[a], i), z(e, a = R(--_), n), 0 !== (i = b[a]) && U(e, _ -= k[a], i))
                } while (l < e.last_lit);
            z(e, 256, t)
        }

        function H(e, t) {
            var n, _, r, a = t.dyn_tree,
                i = t.stat_desc.static_tree,
                l = t.stat_desc.has_stree,
                d = t.stat_desc.elems,
                o = -1;
            for (e.heap_len = 0, e.heap_max = 573, n = 0; n < d; n++) 0 !== a[2 * n] ? (e.heap[++e.heap_len] = o = n, e.depth[n] = 0) : a[2 * n + 1] = 0;
            for (; e.heap_len < 2;) a[2 * (r = e.heap[++e.heap_len] = o < 2 ? ++o : 0)] = 1, e.depth[r] = 0, e.opt_len--, l && (e.static_len -= i[2 * r + 1]);
            for (t.max_code = o, n = e.heap_len >> 1; n >= 1; n--) F(e, a, n);
            r = d;
            do {
                n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], F(e, a, 1), _ = e.heap[1], e.heap[--e.heap_max] = n, e.heap[--e.heap_max] = _, a[2 * r] = a[2 * n] + a[2 * _], e.depth[r] = (e.depth[n] >= e.depth[_] ? e.depth[n] : e.depth[_]) + 1, a[2 * n + 1] = a[2 * _ + 1] = r, e.heap[1] = r++, F(e, a, 1)
            } while (e.heap_len >= 2);
            e.heap[--e.heap_max] = e.heap[1],
                function(e, t) {
                    var n, _, r, a, i, l, d = t.dyn_tree,
                        o = t.max_code,
                        f = t.stat_desc.static_tree,
                        s = t.stat_desc.has_stree,
                        c = t.stat_desc.extra_bits,
                        b = t.stat_desc.extra_base,
                        p = t.stat_desc.max_length,
                        h = 0;
                    for (a = 0; a <= u; a++) e.bl_count[a] = 0;
                    for (d[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < 573; n++)(a = d[2 * d[2 * (_ = e.heap[n]) + 1] + 1] + 1) > p && (a = p, h++), d[2 * _ + 1] = a, _ > o || (e.bl_count[a]++, i = 0, _ >= b && (i = c[_ - b]), l = d[2 * _], e.opt_len += l * (a + i), s && (e.static_len += l * (f[2 * _ + 1] + i)));
                    if (0 !== h) {
                        do {
                            for (a = p - 1; 0 === e.bl_count[a];) a--;
                            e.bl_count[a]--, e.bl_count[a + 1] += 2, e.bl_count[p]--, h -= 2
                        } while (h > 0);
                        for (a = p; 0 !== a; a--)
                            for (_ = e.bl_count[a]; 0 !== _;)(r = e.heap[--n]) > o || (d[2 * r + 1] !== a && (e.opt_len += (a - d[2 * r + 1]) * d[2 * r], d[2 * r + 1] = a), _--)
                    }
                }(e, t), B(a, o, e.bl_count)
        }

        function I(e, t, n) {
            var _, r, a = -1,
                i = t[1],
                l = 0,
                d = 7,
                o = 4;
            for (0 === i && (d = 138, o = 3), t[2 * (n + 1) + 1] = 65535, _ = 0; _ <= n; _++) r = i, i = t[2 * (_ + 1) + 1], ++l < d && r === i || (l < o ? e.bl_tree[2 * r] += l : 0 !== r ? (r !== a && e.bl_tree[2 * r]++, e.bl_tree[32]++) : l <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++, l = 0, a = r, 0 === i ? (d = 138, o = 3) : r === i ? (d = 6, o = 3) : (d = 7, o = 4))
        }

        function J(e, t, n) {
            var _, r, a = -1,
                i = t[1],
                l = 0,
                d = 7,
                o = 4;
            for (0 === i && (d = 138, o = 3), _ = 0; _ <= n; _++)
                if (r = i, i = t[2 * (_ + 1) + 1], !(++l < d && r === i)) {
                    if (l < o)
                        do {
                            z(e, r, e.bl_tree)
                        } while (0 != --l);
                    else 0 !== r ? (r !== a && (z(e, r, e.bl_tree), l--), z(e, 16, e.bl_tree), U(e, l - 3, 2)) : l <= 10 ? (z(e, 17, e.bl_tree), U(e, l - 3, 3)) : (z(e, 18, e.bl_tree), U(e, l - 11, 7));
                    l = 0, a = r, 0 === i ? (d = 138, o = 3) : r === i ? (d = 6, o = 3) : (d = 7, o = 4)
                }
        }
        d(k);
        var K = !1;

        function N(e, t, n, _) {
            U(e, 0 + (_ ? 1 : 0), 3),
                function(e, t, n, _) {
                    D(e), _ && (S(e, n), S(e, ~n)), l.arraySet(e.pending_buf, e.window, t, n, e.pending), e.pending += n
                }(e, t, n, !0)
        }
        t._tr_init = function(e) {
            K || (! function() {
                var e, t, n, _, r, a = new Array(16);
                for (n = 0, _ = 0; _ < 28; _++)
                    for (g[_] = n, e = 0; e < 1 << c[_]; e++) x[n++] = _;
                for (x[n - 1] = _, r = 0, _ = 0; _ < 16; _++)
                    for (k[_] = r, e = 0; e < 1 << b[_]; e++) m[r++] = _;
                for (r >>= 7; _ < s; _++)
                    for (k[_] = r << 7, e = 0; e < 1 << b[_] - 7; e++) m[256 + r++] = _;
                for (t = 0; t <= u; t++) a[t] = 0;
                for (e = 0; e <= 143;) v[2 * e + 1] = 8, e++, a[8]++;
                for (; e <= 255;) v[2 * e + 1] = 9, e++, a[9]++;
                for (; e <= 279;) v[2 * e + 1] = 7, e++, a[7]++;
                for (; e <= 287;) v[2 * e + 1] = 8, e++, a[8]++;
                for (B(v, 287, a), e = 0; e < s; e++) y[2 * e + 1] = 5, y[2 * e] = q(e, 5);
                w = new L(v, c, 257, f, u), A = new L(y, b, 0, s, u), j = new L(new Array(0), p, 0, 19, 7)
            }(), K = !0), e.l_desc = new M(e.dyn_ltree, w), e.d_desc = new M(e.dyn_dtree, A), e.bl_desc = new M(e.bl_tree, j), e.bi_buf = 0, e.bi_valid = 0, C(e)
        }, t._tr_stored_block = N, t._tr_flush_block = function(e, t, n, _) {
            var r, a, i = 0;
            e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = function(e) {
                var t, n = 4093624447;
                for (t = 0; t <= 31; t++, n >>>= 1)
                    if (1 & n && 0 !== e.dyn_ltree[2 * t]) return 0;
                if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
                for (t = 32; t < o; t++)
                    if (0 !== e.dyn_ltree[2 * t]) return 1;
                return 0
            }(e)), H(e, e.l_desc), H(e, e.d_desc), i = function(e) {
                var t;
                for (I(e, e.dyn_ltree, e.l_desc.max_code), I(e, e.dyn_dtree, e.d_desc.max_code), H(e, e.bl_desc), t = 18; t >= 3 && 0 === e.bl_tree[2 * h[t] + 1]; t--);
                return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
            }(e), r = e.opt_len + 3 + 7 >>> 3, (a = e.static_len + 3 + 7 >>> 3) <= r && (r = a)) : r = a = n + 5, n + 4 <= r && -1 !== t ? N(e, t, n, _) : 4 === e.strategy || a === r ? (U(e, 2 + (_ ? 1 : 0), 3), G(e, v, y)) : (U(e, 4 + (_ ? 1 : 0), 3), function(e, t, n, _) {
                var r;
                for (U(e, t - 257, 5), U(e, n - 1, 5), U(e, _ - 4, 4), r = 0; r < _; r++) U(e, e.bl_tree[2 * h[r] + 1], 3);
                J(e, e.dyn_ltree, t - 1), J(e, e.dyn_dtree, n - 1)
            }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, i + 1), G(e, e.dyn_ltree, e.dyn_dtree)), C(e), _ && D(e)
        }, t._tr_tally = function(e, t, n) {
            return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & n, e.last_lit++, 0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[2 * (x[n] + o + 1)]++, e.dyn_dtree[2 * R(t)]++), e.last_lit === e.lit_bufsize - 1
        }, t._tr_align = function(e) {
            U(e, 2, 3), z(e, 256, v),
                function(e) {
                    16 === e.bi_valid ? (S(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
                }(e)
        }, r = e("default", _.exports), _.exports._tr_init, _.exports._tr_stored_block, _.exports._tr_flush_block, _.exports._tr_tally, _.exports._tr_align
    }), (() => ({
        "../utils/common": _
    })))
}