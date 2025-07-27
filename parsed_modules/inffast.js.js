import * as t from "./cjs-loader.mjs.js";

function main() {
    let a;
    e("default", void 0);
    const o = e("__cjsMetaURL", i.meta.url);
    t.define(o, (function(i, t, o, n, d) {
        o.exports = function(e, i) {
            var t, a, o, n, d, l, s, f, r, u, c, v, b, m, _, h, w, k, x, g, j, p, y, z, L;
            t = e.state, a = e.next_in, z = e.input, o = a + (e.avail_in - 5), n = e.next_out, L = e.output, d = n - (i - e.avail_out), l = n + (e.avail_out - 257), s = t.dmax, f = t.wsize, r = t.whave, u = t.wnext, c = t.window, v = t.hold, b = t.bits, m = t.lencode, _ = t.distcode, h = (1 << t.lenbits) - 1, w = (1 << t.distbits) - 1;
            e: do {
                b < 15 && (v += z[a++] << b, b += 8, v += z[a++] << b, b += 8), k = m[v & h];
                i: for (;;) {
                    if (v >>>= x = k >>> 24, b -= x, 0 === (x = k >>> 16 & 255)) L[n++] = 65535 & k;
                    else {
                        if (!(16 & x)) {
                            if (0 == (64 & x)) {
                                k = m[(65535 & k) + (v & (1 << x) - 1)];
                                continue i
                            }
                            if (32 & x) {
                                t.mode = 12;
                                break e
                            }
                            e.msg = "invalid literal/length code", t.mode = 30;
                            break e
                        }
                        g = 65535 & k, (x &= 15) && (b < x && (v += z[a++] << b, b += 8), g += v & (1 << x) - 1, v >>>= x, b -= x), b < 15 && (v += z[a++] << b, b += 8, v += z[a++] << b, b += 8), k = _[v & w];
                        t: for (;;) {
                            if (v >>>= x = k >>> 24, b -= x, !(16 & (x = k >>> 16 & 255))) {
                                if (0 == (64 & x)) {
                                    k = _[(65535 & k) + (v & (1 << x) - 1)];
                                    continue t
                                }
                                e.msg = "invalid distance code", t.mode = 30;
                                break e
                            }
                            if (j = 65535 & k, b < (x &= 15) && (v += z[a++] << b, (b += 8) < x && (v += z[a++] << b, b += 8)), (j += v & (1 << x) - 1) > s) {
                                e.msg = "invalid distance too far back", t.mode = 30;
                                break e
                            }
                            if (v >>>= x, b -= x, j > (x = n - d)) {
                                if ((x = j - x) > r && t.sane) {
                                    e.msg = "invalid distance too far back", t.mode = 30;
                                    break e
                                }
                                if (p = 0, y = c, 0 === u) {
                                    if (p += f - x, x < g) {
                                        g -= x;
                                        do {
                                            L[n++] = c[p++]
                                        } while (--x);
                                        p = n - j, y = L
                                    }
                                } else if (u < x) {
                                    if (p += f + u - x, (x -= u) < g) {
                                        g -= x;
                                        do {
                                            L[n++] = c[p++]
                                        } while (--x);
                                        if (p = 0, u < g) {
                                            g -= x = u;
                                            do {
                                                L[n++] = c[p++]
                                            } while (--x);
                                            p = n - j, y = L
                                        }
                                    }
                                } else if (p += u - x, x < g) {
                                    g -= x;
                                    do {
                                        L[n++] = c[p++]
                                    } while (--x);
                                    p = n - j, y = L
                                }
                                for (; g > 2;) L[n++] = y[p++], L[n++] = y[p++], L[n++] = y[p++], g -= 3;
                                g && (L[n++] = y[p++], g > 1 && (L[n++] = y[p++]))
                            } else {
                                p = n - j;
                                do {
                                    L[n++] = L[p++], L[n++] = L[p++], L[n++] = L[p++], g -= 3
                                } while (g > 2);
                                g && (L[n++] = L[p++], g > 1 && (L[n++] = L[p++]))
                            }
                            break
                        }
                    }
                    break
                }
            } while (a < o && n < l);
            a -= g = b >> 3, v &= (1 << (b -= g << 3)) - 1, e.next_in = a, e.next_out = n, e.avail_in = a < o ? o - a + 5 : 5 - (a - o), e.avail_out = n < l ? l - n + 257 : 257 - (n - l), t.hold = v, t.bits = b
        }, a = e("default", o.exports)
    }), {})
}