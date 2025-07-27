import * as e from "./cjs-loader.mjs.js";
import * as s from "./common.js";
import * as n from "./trees.js";
import * as i from "./adler32.js";
import * as r from "./crc32.js";
import * as h from "./messages.js";

function main() {
    let l;
    t("default", void 0);
    const _ = t("__cjsMetaURL", a.meta.url);
    e.define(_, (function(a, e, s, n, i) {
        var r, h = e("../utils/common"),
            _ = e("./trees"),
            d = e("./adler32"),
            o = e("./crc32"),
            u = e("./messages"),
            g = -2,
            f = 258,
            c = 262,
            m = 103,
            p = 113,
            w = 666;

        function v(t, a) {
            return t.msg = u[a], a
        }

        function k(t) {
            return (t << 1) - (t > 4 ? 9 : 0)
        }

        function z(t) {
            for (var a = t.length; --a >= 0;) t[a] = 0
        }

        function b(t) {
            var a = t.state,
                e = a.pending;
            e > t.avail_out && (e = t.avail_out), 0 !== e && (h.arraySet(t.output, a.pending_buf, a.pending_out, e, t.next_out), t.next_out += e, a.pending_out += e, t.total_out += e, t.avail_out -= e, a.pending -= e, 0 === a.pending && (a.pending_out = 0))
        }

        function x(t, a) {
            _._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, a), t.block_start = t.strstart, b(t.strm)
        }

        function y(t, a) {
            t.pending_buf[t.pending++] = a
        }

        function j(t, a) {
            t.pending_buf[t.pending++] = a >>> 8 & 255, t.pending_buf[t.pending++] = 255 & a
        }

        function B(t, a) {
            var e, s, n = t.max_chain_length,
                i = t.strstart,
                r = t.prev_length,
                h = t.nice_match,
                l = t.strstart > t.w_size - c ? t.strstart - (t.w_size - c) : 0,
                _ = t.window,
                d = t.w_mask,
                o = t.prev,
                u = t.strstart + f,
                g = _[i + r - 1],
                m = _[i + r];
            t.prev_length >= t.good_match && (n >>= 2), h > t.lookahead && (h = t.lookahead);
            do {
                if (_[(e = a) + r] === m && _[e + r - 1] === g && _[e] === _[i] && _[++e] === _[i + 1]) {
                    i += 2, e++;
                    do {} while (_[++i] === _[++e] && _[++i] === _[++e] && _[++i] === _[++e] && _[++i] === _[++e] && _[++i] === _[++e] && _[++i] === _[++e] && _[++i] === _[++e] && _[++i] === _[++e] && i < u);
                    if (s = f - (u - i), i = u - f, s > r) {
                        if (t.match_start = a, r = s, s >= h) break;
                        g = _[i + r - 1], m = _[i + r]
                    }
                }
            } while ((a = o[a & d]) > l && 0 != --n);
            return r <= t.lookahead ? r : t.lookahead
        }

        function R(t) {
            var a, e, s, n, i, r, l, _, u, g, f = t.w_size;
            do {
                if (n = t.window_size - t.lookahead - t.strstart, t.strstart >= f + (f - c)) {
                    h.arraySet(t.window, t.window, f, f, 0), t.match_start -= f, t.strstart -= f, t.block_start -= f, a = e = t.hash_size;
                    do {
                        s = t.head[--a], t.head[a] = s >= f ? s - f : 0
                    } while (--e);
                    a = e = f;
                    do {
                        s = t.prev[--a], t.prev[a] = s >= f ? s - f : 0
                    } while (--e);
                    n += f
                }
                if (0 === t.strm.avail_in) break;
                if (r = t.strm, l = t.window, _ = t.strstart + t.lookahead, u = n, g = void 0, (g = r.avail_in) > u && (g = u), e = 0 === g ? 0 : (r.avail_in -= g, h.arraySet(l, r.input, r.next_in, g, _), 1 === r.state.wrap ? r.adler = d(r.adler, l, g, _) : 2 === r.state.wrap && (r.adler = o(r.adler, l, g, _)), r.next_in += g, r.total_in += g, g), t.lookahead += e, t.lookahead + t.insert >= 3)
                    for (i = t.strstart - t.insert, t.ins_h = t.window[i], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[i + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[i + 3 - 1]) & t.hash_mask, t.prev[i & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = i, i++, t.insert--, !(t.lookahead + t.insert < 3)););
            } while (t.lookahead < c && 0 !== t.strm.avail_in)
        }

        function S(t, a) {
            for (var e, s;;) {
                if (t.lookahead < c) {
                    if (R(t), t.lookahead < c && 0 === a) return 1;
                    if (0 === t.lookahead) break
                }
                if (e = 0, t.lookahead >= 3 && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 3 - 1]) & t.hash_mask, e = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== e && t.strstart - e <= t.w_size - c && (t.match_length = B(t, e)), t.match_length >= 3)
                    if (s = _._tr_tally(t, t.strstart - t.match_start, t.match_length - 3), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
                        t.match_length--;
                        do {
                            t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 3 - 1]) & t.hash_mask, e = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart
                        } while (0 != --t.match_length);
                        t.strstart++
                    } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
                else s = _._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
                if (s && (x(t, !1), 0 === t.strm.avail_out)) return 1
            }
            return t.insert = t.strstart < 2 ? t.strstart : 2, 4 === a ? (x(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (x(t, !1), 0 === t.strm.avail_out) ? 1 : 2
        }

        function I(t, a) {
            for (var e, s, n;;) {
                if (t.lookahead < c) {
                    if (R(t), t.lookahead < c && 0 === a) return 1;
                    if (0 === t.lookahead) break
                }
                if (e = 0, t.lookahead >= 3 && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 3 - 1]) & t.hash_mask, e = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = 2, 0 !== e && t.prev_length < t.max_lazy_match && t.strstart - e <= t.w_size - c && (t.match_length = B(t, e), t.match_length <= 5 && (1 === t.strategy || 3 === t.match_length && t.strstart - t.match_start > 4096) && (t.match_length = 2)), t.prev_length >= 3 && t.match_length <= t.prev_length) {
                    n = t.strstart + t.lookahead - 3, s = _._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - 3), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
                    do {
                        ++t.strstart <= n && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 3 - 1]) & t.hash_mask, e = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart)
                    } while (0 != --t.prev_length);
                    if (t.match_available = 0, t.match_length = 2, t.strstart++, s && (x(t, !1), 0 === t.strm.avail_out)) return 1
                } else if (t.match_available) {
                    if ((s = _._tr_tally(t, 0, t.window[t.strstart - 1])) && x(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return 1
                } else t.match_available = 1, t.strstart++, t.lookahead--
            }
            return t.match_available && (s = _._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < 2 ? t.strstart : 2, 4 === a ? (x(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (x(t, !1), 0 === t.strm.avail_out) ? 1 : 2
        }

        function L(t, a, e, s, n) {
            this.good_length = t, this.max_lazy = a, this.nice_length = e, this.max_chain = s, this.func = n
        }

        function M() {
            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = 8, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new h.Buf16(1146), this.dyn_dtree = new h.Buf16(122), this.bl_tree = new h.Buf16(78), z(this.dyn_ltree), z(this.dyn_dtree), z(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new h.Buf16(16), this.heap = new h.Buf16(573), z(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new h.Buf16(573), z(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
        }

        function U(t) {
            var a;
            return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = 2, (a = t.state).pending = 0, a.pending_out = 0, a.wrap < 0 && (a.wrap = -a.wrap), a.status = a.wrap ? 42 : p, t.adler = 2 === a.wrap ? 0 : 1, a.last_flush = 0, _._tr_init(a), 0) : v(t, g)
        }

        function A(t) {
            var a, e = U(t);
            return 0 === e && ((a = t.state).window_size = 2 * a.w_size, z(a.head), a.max_lazy_match = r[a.level].max_lazy, a.good_match = r[a.level].good_length, a.nice_match = r[a.level].nice_length, a.max_chain_length = r[a.level].max_chain, a.strstart = 0, a.block_start = 0, a.lookahead = 0, a.insert = 0, a.match_length = a.prev_length = 2, a.match_available = 0, a.ins_h = 0), e
        }

        function C(t, a, e, s, n, i) {
            if (!t) return g;
            var r = 1;
            if (-1 === a && (a = 6), s < 0 ? (r = 0, s = -s) : s > 15 && (r = 2, s -= 16), n < 1 || n > 9 || 8 !== e || s < 8 || s > 15 || a < 0 || a > 9 || i < 0 || i > 4) return v(t, g);
            8 === s && (s = 9);
            var l = new M;
            return t.state = l, l.strm = t, l.wrap = r, l.gzhead = null, l.w_bits = s, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.hash_bits = n + 7, l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + 3 - 1) / 3), l.window = new h.Buf8(2 * l.w_size), l.head = new h.Buf16(l.hash_size), l.prev = new h.Buf16(l.w_size), l.lit_bufsize = 1 << n + 6, l.pending_buf_size = 4 * l.lit_bufsize, l.pending_buf = new h.Buf8(l.pending_buf_size), l.d_buf = 1 * l.lit_bufsize, l.l_buf = 3 * l.lit_bufsize, l.level = a, l.strategy = i, l.method = e, A(t)
        }
        r = [new L(0, 0, 0, 0, (function(t, a) {
            var e = 65535;
            for (e > t.pending_buf_size - 5 && (e = t.pending_buf_size - 5);;) {
                if (t.lookahead <= 1) {
                    if (R(t), 0 === t.lookahead && 0 === a) return 1;
                    if (0 === t.lookahead) break
                }
                t.strstart += t.lookahead, t.lookahead = 0;
                var s = t.block_start + e;
                if ((0 === t.strstart || t.strstart >= s) && (t.lookahead = t.strstart - s, t.strstart = s, x(t, !1), 0 === t.strm.avail_out)) return 1;
                if (t.strstart - t.block_start >= t.w_size - c && (x(t, !1), 0 === t.strm.avail_out)) return 1
            }
            return t.insert = 0, 4 === a ? (x(t, !0), 0 === t.strm.avail_out ? 3 : 4) : (t.strstart > t.block_start && (x(t, !1), t.strm.avail_out), 1)
        })), new L(4, 4, 8, 4, S), new L(4, 5, 16, 8, S), new L(4, 6, 32, 32, S), new L(4, 4, 16, 16, I), new L(8, 16, 32, 32, I), new L(8, 16, 128, 128, I), new L(8, 32, 128, 256, I), new L(32, 128, 258, 1024, I), new L(32, 258, 258, 4096, I)], a.deflateInit = function(t, a) {
            return C(t, a, 8, 15, 8, 0)
        }, a.deflateInit2 = C, a.deflateReset = A, a.deflateResetKeep = U, a.deflateSetHeader = function(t, a) {
            return t && t.state ? 2 !== t.state.wrap ? g : (t.state.gzhead = a, 0) : g
        }, a.deflate = function(t, a) {
            var e, s, n, i;
            if (!t || !t.state || a > 5 || a < 0) return t ? v(t, g) : g;
            if (s = t.state, !t.output || !t.input && 0 !== t.avail_in || s.status === w && 4 !== a) return v(t, 0 === t.avail_out ? -5 : g);
            if (s.strm = t, e = s.last_flush, s.last_flush = a, 42 === s.status)
                if (2 === s.wrap) t.adler = 0, y(s, 31), y(s, 139), y(s, 8), s.gzhead ? (y(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (s.gzhead.extra ? 4 : 0) + (s.gzhead.name ? 8 : 0) + (s.gzhead.comment ? 16 : 0)), y(s, 255 & s.gzhead.time), y(s, s.gzhead.time >> 8 & 255), y(s, s.gzhead.time >> 16 & 255), y(s, s.gzhead.time >> 24 & 255), y(s, 9 === s.level ? 2 : s.strategy >= 2 || s.level < 2 ? 4 : 0), y(s, 255 & s.gzhead.os), s.gzhead.extra && s.gzhead.extra.length && (y(s, 255 & s.gzhead.extra.length), y(s, s.gzhead.extra.length >> 8 & 255)), s.gzhead.hcrc && (t.adler = o(t.adler, s.pending_buf, s.pending, 0)), s.gzindex = 0, s.status = 69) : (y(s, 0), y(s, 0), y(s, 0), y(s, 0), y(s, 0), y(s, 9 === s.level ? 2 : s.strategy >= 2 || s.level < 2 ? 4 : 0), y(s, 3), s.status = p);
                else {
                    var h = 8 + (s.w_bits - 8 << 4) << 8;
                    h |= (s.strategy >= 2 || s.level < 2 ? 0 : s.level < 6 ? 1 : 6 === s.level ? 2 : 3) << 6, 0 !== s.strstart && (h |= 32), h += 31 - h % 31, s.status = p, j(s, h), 0 !== s.strstart && (j(s, t.adler >>> 16), j(s, 65535 & t.adler)), t.adler = 1
                } if (69 === s.status)
                if (s.gzhead.extra) {
                    for (n = s.pending; s.gzindex < (65535 & s.gzhead.extra.length) && (s.pending !== s.pending_buf_size || (s.gzhead.hcrc && s.pending > n && (t.adler = o(t.adler, s.pending_buf, s.pending - n, n)), b(t), n = s.pending, s.pending !== s.pending_buf_size));) y(s, 255 & s.gzhead.extra[s.gzindex]), s.gzindex++;
                    s.gzhead.hcrc && s.pending > n && (t.adler = o(t.adler, s.pending_buf, s.pending - n, n)), s.gzindex === s.gzhead.extra.length && (s.gzindex = 0, s.status = 73)
                } else s.status = 73;
            if (73 === s.status)
                if (s.gzhead.name) {
                    n = s.pending;
                    do {
                        if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > n && (t.adler = o(t.adler, s.pending_buf, s.pending - n, n)), b(t), n = s.pending, s.pending === s.pending_buf_size)) {
                            i = 1;
                            break
                        }
                        i = s.gzindex < s.gzhead.name.length ? 255 & s.gzhead.name.charCodeAt(s.gzindex++) : 0, y(s, i)
                    } while (0 !== i);
                    s.gzhead.hcrc && s.pending > n && (t.adler = o(t.adler, s.pending_buf, s.pending - n, n)), 0 === i && (s.gzindex = 0, s.status = 91)
                } else s.status = 91;
            if (91 === s.status)
                if (s.gzhead.comment) {
                    n = s.pending;
                    do {
                        if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > n && (t.adler = o(t.adler, s.pending_buf, s.pending - n, n)), b(t), n = s.pending, s.pending === s.pending_buf_size)) {
                            i = 1;
                            break
                        }
                        i = s.gzindex < s.gzhead.comment.length ? 255 & s.gzhead.comment.charCodeAt(s.gzindex++) : 0, y(s, i)
                    } while (0 !== i);
                    s.gzhead.hcrc && s.pending > n && (t.adler = o(t.adler, s.pending_buf, s.pending - n, n)), 0 === i && (s.status = m)
                } else s.status = m;
            if (s.status === m && (s.gzhead.hcrc ? (s.pending + 2 > s.pending_buf_size && b(t), s.pending + 2 <= s.pending_buf_size && (y(s, 255 & t.adler), y(s, t.adler >> 8 & 255), t.adler = 0, s.status = p)) : s.status = p), 0 !== s.pending) {
                if (b(t), 0 === t.avail_out) return s.last_flush = -1, 0
            } else if (0 === t.avail_in && k(a) <= k(e) && 4 !== a) return v(t, -5);
            if (s.status === w && 0 !== t.avail_in) return v(t, -5);
            if (0 !== t.avail_in || 0 !== s.lookahead || 0 !== a && s.status !== w) {
                var l = 2 === s.strategy ? function(t, a) {
                    for (var e;;) {
                        if (0 === t.lookahead && (R(t), 0 === t.lookahead)) {
                            if (0 === a) return 1;
                            break
                        }
                        if (t.match_length = 0, e = _._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, e && (x(t, !1), 0 === t.strm.avail_out)) return 1
                    }
                    return t.insert = 0, 4 === a ? (x(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (x(t, !1), 0 === t.strm.avail_out) ? 1 : 2
                }(s, a) : 3 === s.strategy ? function(t, a) {
                    for (var e, s, n, i, r = t.window;;) {
                        if (t.lookahead <= f) {
                            if (R(t), t.lookahead <= f && 0 === a) return 1;
                            if (0 === t.lookahead) break
                        }
                        if (t.match_length = 0, t.lookahead >= 3 && t.strstart > 0 && (s = r[n = t.strstart - 1]) === r[++n] && s === r[++n] && s === r[++n]) {
                            i = t.strstart + f;
                            do {} while (s === r[++n] && s === r[++n] && s === r[++n] && s === r[++n] && s === r[++n] && s === r[++n] && s === r[++n] && s === r[++n] && n < i);
                            t.match_length = f - (i - n), t.match_length > t.lookahead && (t.match_length = t.lookahead)
                        }
                        if (t.match_length >= 3 ? (e = _._tr_tally(t, 1, t.match_length - 3), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (e = _._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), e && (x(t, !1), 0 === t.strm.avail_out)) return 1
                    }
                    return t.insert = 0, 4 === a ? (x(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (x(t, !1), 0 === t.strm.avail_out) ? 1 : 2
                }(s, a) : r[s.level].func(s, a);
                if (3 !== l && 4 !== l || (s.status = w), 1 === l || 3 === l) return 0 === t.avail_out && (s.last_flush = -1), 0;
                if (2 === l && (1 === a ? _._tr_align(s) : 5 !== a && (_._tr_stored_block(s, 0, 0, !1), 3 === a && (z(s.head), 0 === s.lookahead && (s.strstart = 0, s.block_start = 0, s.insert = 0))), b(t), 0 === t.avail_out)) return s.last_flush = -1, 0
            }
            return 4 !== a ? 0 : s.wrap <= 0 ? 1 : (2 === s.wrap ? (y(s, 255 & t.adler), y(s, t.adler >> 8 & 255), y(s, t.adler >> 16 & 255), y(s, t.adler >> 24 & 255), y(s, 255 & t.total_in), y(s, t.total_in >> 8 & 255), y(s, t.total_in >> 16 & 255), y(s, t.total_in >> 24 & 255)) : (j(s, t.adler >>> 16), j(s, 65535 & t.adler)), b(t), s.wrap > 0 && (s.wrap = -s.wrap), 0 !== s.pending ? 0 : 1)
        }, a.deflateEnd = function(t) {
            var a;
            return t && t.state ? 42 !== (a = t.state.status) && 69 !== a && 73 !== a && 91 !== a && a !== m && a !== p && a !== w ? v(t, g) : (t.state = null, a === p ? v(t, -3) : 0) : g
        }, a.deflateSetDictionary = function(t, a) {
            var e, s, n, i, r, l, _, o, u = a.length;
            if (!t || !t.state) return g;
            if (2 === (i = (e = t.state).wrap) || 1 === i && 42 !== e.status || e.lookahead) return g;
            for (1 === i && (t.adler = d(t.adler, a, u, 0)), e.wrap = 0, u >= e.w_size && (0 === i && (z(e.head), e.strstart = 0, e.block_start = 0, e.insert = 0), o = new h.Buf8(e.w_size), h.arraySet(o, a, u - e.w_size, e.w_size, 0), a = o, u = e.w_size), r = t.avail_in, l = t.next_in, _ = t.input, t.avail_in = u, t.next_in = 0, t.input = a, R(e); e.lookahead >= 3;) {
                s = e.strstart, n = e.lookahead - 2;
                do {
                    e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + 3 - 1]) & e.hash_mask, e.prev[s & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = s, s++
                } while (--n);
                e.strstart = s, e.lookahead = 2, R(e)
            }
            return e.strstart += e.lookahead, e.block_start = e.strstart, e.insert = e.lookahead, e.lookahead = 0, e.match_length = e.prev_length = 2, e.match_available = 0, t.next_in = l, t.input = _, t.avail_in = r, e.wrap = i, 0
        }, a.deflateInfo = "pako deflate (from Nodeca project)", l = t("default", s.exports), s.exports.deflateInit, s.exports.deflateInit2, s.exports.deflateReset, s.exports.deflateResetKeep, s.exports.deflateSetHeader, s.exports.deflate, s.exports.deflateEnd, s.exports.deflateSetDictionary, s.exports.deflateInfo
    }), (() => ({
        "../utils/common": s,
        "./trees": n,
        "./adler32": i,
        "./crc32": r,
        "./messages": h
    })))
}