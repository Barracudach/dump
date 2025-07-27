import * as a from "./cjs-loader.mjs.js";
import * as i from "./common.js";
import * as n from "./adler32.js";
import * as s from "./crc32.js";
import * as o from "./inffast.js";
import * as r from "./inftrees.js";

function main() {
    let l;
    e("default", void 0);
    const d = e("__cjsMetaURL", t.meta.url);
    a.define(d, (function(t, a, i, n, s) {
        var o = a("../utils/common"),
            r = a("./adler32"),
            d = a("./crc32"),
            f = a("./inffast"),
            c = a("./inftrees"),
            h = -2,
            k = 12,
            b = 30;

        function m(e) {
            return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
        }

        function u() {
            this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new o.Buf16(320), this.work = new o.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
        }

        function w(e) {
            var t;
            return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = 1, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new o.Buf32(852), t.distcode = t.distdyn = new o.Buf32(592), t.sane = 1, t.back = -1, 0) : h
        }

        function g(e) {
            var t;
            return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, w(e)) : h
        }

        function v(e, t) {
            var a, i;
            return e && e.state ? (i = e.state, t < 0 ? (a = 0, t = -t) : (a = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? h : (null !== i.window && i.wbits !== t && (i.window = null), i.wrap = a, i.wbits = t, g(e))) : h
        }

        function x(e, t) {
            var a, i;
            return e ? (i = new u, e.state = i, i.window = null, 0 !== (a = v(e, t)) && (e.state = null), a) : h
        }
        var _, p, y = !0;

        function j(e) {
            if (y) {
                var t;
                for (_ = new o.Buf32(512), p = new o.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;
                for (; t < 256;) e.lens[t++] = 9;
                for (; t < 280;) e.lens[t++] = 7;
                for (; t < 288;) e.lens[t++] = 8;
                for (c(1, e.lens, 0, 288, _, 0, e.work, {
                        bits: 9
                    }), t = 0; t < 32;) e.lens[t++] = 5;
                c(2, e.lens, 0, 32, p, 0, e.work, {
                    bits: 5
                }), y = !1
            }
            e.lencode = _, e.lenbits = 9, e.distcode = p, e.distbits = 5
        }

        function z(e, t, a, i) {
            var n, s = e.state;
            return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new o.Buf8(s.wsize)), i >= s.wsize ? (o.arraySet(s.window, t, a - s.wsize, s.wsize, 0), s.wnext = 0, s.whave = s.wsize) : ((n = s.wsize - s.wnext) > i && (n = i), o.arraySet(s.window, t, a - i, n, s.wnext), (i -= n) ? (o.arraySet(s.window, t, a - i, i, 0), s.wnext = i, s.whave = s.wsize) : (s.wnext += n, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += n))), 0
        }
        t.inflateReset = g, t.inflateReset2 = v, t.inflateResetKeep = w, t.inflateInit = function(e) {
            return x(e, 15)
        }, t.inflateInit2 = x, t.inflate = function(e, t) {
            var a, i, n, s, l, u, w, g, v, x, _, p, y, R, S, B, I, L, M, U, C, D, E, G, H = 0,
                K = new o.Buf8(4),
                A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return h;
            (a = e.state).mode === k && (a.mode = 13), l = e.next_out, n = e.output, w = e.avail_out, s = e.next_in, i = e.input, u = e.avail_in, g = a.hold, v = a.bits, x = u, _ = w, D = 0;
            e: for (;;) switch (a.mode) {
                case 1:
                    if (0 === a.wrap) {
                        a.mode = 13;
                        break
                    }
                    for (; v < 16;) {
                        if (0 === u) break e;
                        u--, g += i[s++] << v, v += 8
                    }
                    if (2 & a.wrap && 35615 === g) {
                        a.check = 0, K[0] = 255 & g, K[1] = g >>> 8 & 255, a.check = d(a.check, K, 2, 0), g = 0, v = 0, a.mode = 2;
                        break
                    }
                    if (a.flags = 0, a.head && (a.head.done = !1), !(1 & a.wrap) || (((255 & g) << 8) + (g >> 8)) % 31) {
                        e.msg = "incorrect header check", a.mode = b;
                        break
                    }
                    if (8 != (15 & g)) {
                        e.msg = "unknown compression method", a.mode = b;
                        break
                    }
                    if (v -= 4, C = 8 + (15 & (g >>>= 4)), 0 === a.wbits) a.wbits = C;
                    else if (C > a.wbits) {
                        e.msg = "invalid window size", a.mode = b;
                        break
                    }
                    a.dmax = 1 << C, e.adler = a.check = 1, a.mode = 512 & g ? 10 : k, g = 0, v = 0;
                    break;
                case 2:
                    for (; v < 16;) {
                        if (0 === u) break e;
                        u--, g += i[s++] << v, v += 8
                    }
                    if (a.flags = g, 8 != (255 & a.flags)) {
                        e.msg = "unknown compression method", a.mode = b;
                        break
                    }
                    if (57344 & a.flags) {
                        e.msg = "unknown header flags set", a.mode = b;
                        break
                    }
                    a.head && (a.head.text = g >> 8 & 1), 512 & a.flags && (K[0] = 255 & g, K[1] = g >>> 8 & 255, a.check = d(a.check, K, 2, 0)), g = 0, v = 0, a.mode = 3;
                case 3:
                    for (; v < 32;) {
                        if (0 === u) break e;
                        u--, g += i[s++] << v, v += 8
                    }
                    a.head && (a.head.time = g), 512 & a.flags && (K[0] = 255 & g, K[1] = g >>> 8 & 255, K[2] = g >>> 16 & 255, K[3] = g >>> 24 & 255, a.check = d(a.check, K, 4, 0)), g = 0, v = 0, a.mode = 4;
                case 4:
                    for (; v < 16;) {
                        if (0 === u) break e;
                        u--, g += i[s++] << v, v += 8
                    }
                    a.head && (a.head.xflags = 255 & g, a.head.os = g >> 8), 512 & a.flags && (K[0] = 255 & g, K[1] = g >>> 8 & 255, a.check = d(a.check, K, 2, 0)), g = 0, v = 0, a.mode = 5;
                case 5:
                    if (1024 & a.flags) {
                        for (; v < 16;) {
                            if (0 === u) break e;
                            u--, g += i[s++] << v, v += 8
                        }
                        a.length = g, a.head && (a.head.extra_len = g), 512 & a.flags && (K[0] = 255 & g, K[1] = g >>> 8 & 255, a.check = d(a.check, K, 2, 0)), g = 0, v = 0
                    } else a.head && (a.head.extra = null);
                    a.mode = 6;
                case 6:
                    if (1024 & a.flags && ((p = a.length) > u && (p = u), p && (a.head && (C = a.head.extra_len - a.length, a.head.extra || (a.head.extra = new Array(a.head.extra_len)), o.arraySet(a.head.extra, i, s, p, C)), 512 & a.flags && (a.check = d(a.check, i, p, s)), u -= p, s += p, a.length -= p), a.length)) break e;
                    a.length = 0, a.mode = 7;
                case 7:
                    if (2048 & a.flags) {
                        if (0 === u) break e;
                        p = 0;
                        do {
                            C = i[s + p++], a.head && C && a.length < 65536 && (a.head.name += String.fromCharCode(C))
                        } while (C && p < u);
                        if (512 & a.flags && (a.check = d(a.check, i, p, s)), u -= p, s += p, C) break e
                    } else a.head && (a.head.name = null);
                    a.length = 0, a.mode = 8;
                case 8:
                    if (4096 & a.flags) {
                        if (0 === u) break e;
                        p = 0;
                        do {
                            C = i[s + p++], a.head && C && a.length < 65536 && (a.head.comment += String.fromCharCode(C))
                        } while (C && p < u);
                        if (512 & a.flags && (a.check = d(a.check, i, p, s)), u -= p, s += p, C) break e
                    } else a.head && (a.head.comment = null);
                    a.mode = 9;
                case 9:
                    if (512 & a.flags) {
                        for (; v < 16;) {
                            if (0 === u) break e;
                            u--, g += i[s++] << v, v += 8
                        }
                        if (g !== (65535 & a.check)) {
                            e.msg = "header crc mismatch", a.mode = b;
                            break
                        }
                        g = 0, v = 0
                    }
                    a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = !0), e.adler = a.check = 0, a.mode = k;
                    break;
                case 10:
                    for (; v < 32;) {
                        if (0 === u) break e;
                        u--, g += i[s++] << v, v += 8
                    }
                    e.adler = a.check = m(g), g = 0, v = 0, a.mode = 11;
                case 11:
                    if (0 === a.havedict) return e.next_out = l, e.avail_out = w, e.next_in = s, e.avail_in = u, a.hold = g, a.bits = v, 2;
                    e.adler = a.check = 1, a.mode = k;
                case k:
                    if (5 === t || 6 === t) break e;
                case 13:
                    if (a.last) {
                        g >>>= 7 & v, v -= 7 & v, a.mode = 27;
                        break
                    }
                    for (; v < 3;) {
                        if (0 === u) break e;
                        u--, g += i[s++] << v, v += 8
                    }
                    switch (a.last = 1 & g, v -= 1, 3 & (g >>>= 1)) {
                        case 0:
                            a.mode = 14;
                            break;
                        case 1:
                            if (j(a), a.mode = 20, 6 === t) {
                                g >>>= 2, v -= 2;
                                break e
                            }
                            break;
                        case 2:
                            a.mode = 17;
                            break;
                        case 3:
                            e.msg = "invalid block type", a.mode = b
                    }
                    g >>>= 2, v -= 2;
                    break;
                case 14:
                    for (g >>>= 7 & v, v -= 7 & v; v < 32;) {
                        if (0 === u) break e;
                        u--, g += i[s++] << v, v += 8
                    }
                    if ((65535 & g) != (g >>> 16 ^ 65535)) {
                        e.msg = "invalid stored block lengths", a.mode = b;
                        break
                    }
                    if (a.length = 65535 & g, g = 0, v = 0, a.mode = 15, 6 === t) break e;
                case 15:
                    a.mode = 16;
                case 16:
                    if (p = a.length) {
                        if (p > u && (p = u), p > w && (p = w), 0 === p) break e;
                        o.arraySet(n, i, s, p, l), u -= p, s += p, w -= p, l += p, a.length -= p;
                        break
                    }
                    a.mode = k;
                    break;
                case 17:
                    for (; v < 14;) {
                        if (0 === u) break e;
                        u--, g += i[s++] << v, v += 8
                    }
                    if (a.nlen = 257 + (31 & g), g >>>= 5, v -= 5, a.ndist = 1 + (31 & g), g >>>= 5, v -= 5, a.ncode = 4 + (15 & g), g >>>= 4, v -= 4, a.nlen > 286 || a.ndist > 30) {
                        e.msg = "too many length or distance symbols", a.mode = b;
                        break
                    }
                    a.have = 0, a.mode = 18;
                case 18:
                    for (; a.have < a.ncode;) {
                        for (; v < 3;) {
                            if (0 === u) break e;
                            u--, g += i[s++] << v, v += 8
                        }
                        a.lens[A[a.have++]] = 7 & g, g >>>= 3, v -= 3
                    }
                    for (; a.have < 19;) a.lens[A[a.have++]] = 0;
                    if (a.lencode = a.lendyn, a.lenbits = 7, E = {
                            bits: a.lenbits
                        }, D = c(0, a.lens, 0, 19, a.lencode, 0, a.work, E), a.lenbits = E.bits, D) {
                        e.msg = "invalid code lengths set", a.mode = b;
                        break
                    }
                    a.have = 0, a.mode = 19;
                case 19:
                    for (; a.have < a.nlen + a.ndist;) {
                        for (; B = (H = a.lencode[g & (1 << a.lenbits) - 1]) >>> 16 & 255, I = 65535 & H, !((S = H >>> 24) <= v);) {
                            if (0 === u) break e;
                            u--, g += i[s++] << v, v += 8
                        }
                        if (I < 16) g >>>= S, v -= S, a.lens[a.have++] = I;
                        else {
                            if (16 === I) {
                                for (G = S + 2; v < G;) {
                                    if (0 === u) break e;
                                    u--, g += i[s++] << v, v += 8
                                }
                                if (g >>>= S, v -= S, 0 === a.have) {
                                    e.msg = "invalid bit length repeat", a.mode = b;
                                    break
                                }
                                C = a.lens[a.have - 1], p = 3 + (3 & g), g >>>= 2, v -= 2
                            } else if (17 === I) {
                                for (G = S + 3; v < G;) {
                                    if (0 === u) break e;
                                    u--, g += i[s++] << v, v += 8
                                }
                                v -= S, C = 0, p = 3 + (7 & (g >>>= S)), g >>>= 3, v -= 3
                            } else {
                                for (G = S + 7; v < G;) {
                                    if (0 === u) break e;
                                    u--, g += i[s++] << v, v += 8
                                }
                                v -= S, C = 0, p = 11 + (127 & (g >>>= S)), g >>>= 7, v -= 7
                            }
                            if (a.have + p > a.nlen + a.ndist) {
                                e.msg = "invalid bit length repeat", a.mode = b;
                                break
                            }
                            for (; p--;) a.lens[a.have++] = C
                        }
                    }
                    if (a.mode === b) break;
                    if (0 === a.lens[256]) {
                        e.msg = "invalid code -- missing end-of-block", a.mode = b;
                        break
                    }
                    if (a.lenbits = 9, E = {
                            bits: a.lenbits
                        }, D = c(1, a.lens, 0, a.nlen, a.lencode, 0, a.work, E), a.lenbits = E.bits, D) {
                        e.msg = "invalid literal/lengths set", a.mode = b;
                        break
                    }
                    if (a.distbits = 6, a.distcode = a.distdyn, E = {
                            bits: a.distbits
                        }, D = c(2, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, E), a.distbits = E.bits, D) {
                        e.msg = "invalid distances set", a.mode = b;
                        break
                    }
                    if (a.mode = 20, 6 === t) break e;
                case 20:
                    a.mode = 21;
                case 21:
                    if (u >= 6 && w >= 258) {
                        e.next_out = l, e.avail_out = w, e.next_in = s, e.avail_in = u, a.hold = g, a.bits = v, f(e, _), l = e.next_out, n = e.output, w = e.avail_out, s = e.next_in, i = e.input, u = e.avail_in, g = a.hold, v = a.bits, a.mode === k && (a.back = -1);
                        break
                    }
                    for (a.back = 0; B = (H = a.lencode[g & (1 << a.lenbits) - 1]) >>> 16 & 255, I = 65535 & H, !((S = H >>> 24) <= v);) {
                        if (0 === u) break e;
                        u--, g += i[s++] << v, v += 8
                    }
                    if (B && 0 == (240 & B)) {
                        for (L = S, M = B, U = I; B = (H = a.lencode[U + ((g & (1 << L + M) - 1) >> L)]) >>> 16 & 255, I = 65535 & H, !(L + (S = H >>> 24) <= v);) {
                            if (0 === u) break e;
                            u--, g += i[s++] << v, v += 8
                        }
                        g >>>= L, v -= L, a.back += L
                    }
                    if (g >>>= S, v -= S, a.back += S, a.length = I, 0 === B) {
                        a.mode = 26;
                        break
                    }
                    if (32 & B) {
                        a.back = -1, a.mode = k;
                        break
                    }
                    if (64 & B) {
                        e.msg = "invalid literal/length code", a.mode = b;
                        break
                    }
                    a.extra = 15 & B, a.mode = 22;
                case 22:
                    if (a.extra) {
                        for (G = a.extra; v < G;) {
                            if (0 === u) break e;
                            u--, g += i[s++] << v, v += 8
                        }
                        a.length += g & (1 << a.extra) - 1, g >>>= a.extra, v -= a.extra, a.back += a.extra
                    }
                    a.was = a.length, a.mode = 23;
                case 23:
                    for (; B = (H = a.distcode[g & (1 << a.distbits) - 1]) >>> 16 & 255, I = 65535 & H, !((S = H >>> 24) <= v);) {
                        if (0 === u) break e;
                        u--, g += i[s++] << v, v += 8
                    }
                    if (0 == (240 & B)) {
                        for (L = S, M = B, U = I; B = (H = a.distcode[U + ((g & (1 << L + M) - 1) >> L)]) >>> 16 & 255, I = 65535 & H, !(L + (S = H >>> 24) <= v);) {
                            if (0 === u) break e;
                            u--, g += i[s++] << v, v += 8
                        }
                        g >>>= L, v -= L, a.back += L
                    }
                    if (g >>>= S, v -= S, a.back += S, 64 & B) {
                        e.msg = "invalid distance code", a.mode = b;
                        break
                    }
                    a.offset = I, a.extra = 15 & B, a.mode = 24;
                case 24:
                    if (a.extra) {
                        for (G = a.extra; v < G;) {
                            if (0 === u) break e;
                            u--, g += i[s++] << v, v += 8
                        }
                        a.offset += g & (1 << a.extra) - 1, g >>>= a.extra, v -= a.extra, a.back += a.extra
                    }
                    if (a.offset > a.dmax) {
                        e.msg = "invalid distance too far back", a.mode = b;
                        break
                    }
                    a.mode = 25;
                case 25:
                    if (0 === w) break e;
                    if (p = _ - w, a.offset > p) {
                        if ((p = a.offset - p) > a.whave && a.sane) {
                            e.msg = "invalid distance too far back", a.mode = b;
                            break
                        }
                        p > a.wnext ? (p -= a.wnext, y = a.wsize - p) : y = a.wnext - p, p > a.length && (p = a.length), R = a.window
                    } else R = n, y = l - a.offset, p = a.length;
                    p > w && (p = w), w -= p, a.length -= p;
                    do {
                        n[l++] = R[y++]
                    } while (--p);
                    0 === a.length && (a.mode = 21);
                    break;
                case 26:
                    if (0 === w) break e;
                    n[l++] = a.length, w--, a.mode = 21;
                    break;
                case 27:
                    if (a.wrap) {
                        for (; v < 32;) {
                            if (0 === u) break e;
                            u--, g |= i[s++] << v, v += 8
                        }
                        if (_ -= w, e.total_out += _, a.total += _, _ && (e.adler = a.check = a.flags ? d(a.check, n, _, l - _) : r(a.check, n, _, l - _)), _ = w, (a.flags ? g : m(g)) !== a.check) {
                            e.msg = "incorrect data check", a.mode = b;
                            break
                        }
                        g = 0, v = 0
                    }
                    a.mode = 28;
                case 28:
                    if (a.wrap && a.flags) {
                        for (; v < 32;) {
                            if (0 === u) break e;
                            u--, g += i[s++] << v, v += 8
                        }
                        if (g !== (4294967295 & a.total)) {
                            e.msg = "incorrect length check", a.mode = b;
                            break
                        }
                        g = 0, v = 0
                    }
                    a.mode = 29;
                case 29:
                    D = 1;
                    break e;
                case b:
                    D = -3;
                    break e;
                case 31:
                    return -4;
                case 32:
                default:
                    return h
            }
            return e.next_out = l, e.avail_out = w, e.next_in = s, e.avail_in = u, a.hold = g, a.bits = v, (a.wsize || _ !== e.avail_out && a.mode < b && (a.mode < 27 || 4 !== t)) && z(e, e.output, e.next_out, _ - e.avail_out), x -= e.avail_in, _ -= e.avail_out, e.total_in += x, e.total_out += _, a.total += _, a.wrap && _ && (e.adler = a.check = a.flags ? d(a.check, n, _, e.next_out - _) : r(a.check, n, _, e.next_out - _)), e.data_type = a.bits + (a.last ? 64 : 0) + (a.mode === k ? 128 : 0) + (20 === a.mode || 15 === a.mode ? 256 : 0), (0 === x && 0 === _ || 4 === t) && 0 === D && (D = -5), D
        }, t.inflateEnd = function(e) {
            if (!e || !e.state) return h;
            var t = e.state;
            return t.window && (t.window = null), e.state = null, 0
        }, t.inflateGetHeader = function(e, t) {
            var a;
            return e && e.state ? 0 == (2 & (a = e.state).wrap) ? h : (a.head = t, t.done = !1, 0) : h
        }, t.inflateSetDictionary = function(e, t) {
            var a, i = t.length;
            return e && e.state ? 0 !== (a = e.state).wrap && 11 !== a.mode ? h : 11 === a.mode && r(1, t, i, 0) !== a.check ? -3 : z(e, t, i, i) ? (a.mode = 31, -4) : (a.havedict = 1, 0) : h
        }, t.inflateInfo = "pako inflate (from Nodeca project)", l = e("default", i.exports), i.exports.inflateReset, i.exports.inflateReset2, i.exports.inflateResetKeep, i.exports.inflateInit, i.exports.inflateInit2, i.exports.inflate, i.exports.inflateEnd, i.exports.inflateGetHeader, i.exports.inflateSetDictionary, i.exports.inflateInfo
    }), (() => ({
        "../utils/common": i,
        "./adler32": n,
        "./crc32": s,
        "./inffast": o,
        "./inftrees": r
    })))
}