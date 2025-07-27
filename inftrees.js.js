import * as e from "./cjs-loader.mjs.js";
import * as f from "./common.js";

function main() {
    let n;
    r("default", void 0);
    const o = r("__cjsMetaURL", t.meta.url);
    e.define(o, (function(t, e, f, o, u) {
        var i = e("../utils/common"),
            s = 15,
            c = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
            l = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
            a = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
            m = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        f.exports = function(r, t, e, f, n, o, u, d) {
            var j, v, _, b, w, x, h, k, p, B = d.bits,
                L = 0,
                M = 0,
                R = 0,
                U = 0,
                g = 0,
                y = 0,
                S = 0,
                q = 0,
                z = 0,
                A = 0,
                C = null,
                D = 0,
                E = new i.Buf16(16),
                F = new i.Buf16(16),
                G = null,
                H = 0;
            for (L = 0; L <= s; L++) E[L] = 0;
            for (M = 0; M < f; M++) E[t[e + M]]++;
            for (g = B, U = s; U >= 1 && 0 === E[U]; U--);
            if (g > U && (g = U), 0 === U) return n[o++] = 20971520, n[o++] = 20971520, d.bits = 1, 0;
            for (R = 1; R < U && 0 === E[R]; R++);
            for (g < R && (g = R), q = 1, L = 1; L <= s; L++)
                if (q <<= 1, (q -= E[L]) < 0) return -1;
            if (q > 0 && (0 === r || 1 !== U)) return -1;
            for (F[1] = 0, L = 1; L < s; L++) F[L + 1] = F[L] + E[L];
            for (M = 0; M < f; M++) 0 !== t[e + M] && (u[F[t[e + M]]++] = M);
            if (0 === r ? (C = G = u, x = 19) : 1 === r ? (C = c, D -= 257, G = l, H -= 257, x = 256) : (C = a, G = m, x = -1), A = 0, M = 0, L = R, w = o, y = g, S = 0, _ = -1, b = (z = 1 << g) - 1, 1 === r && z > 852 || 2 === r && z > 592) return 1;
            for (;;) {
                h = L - S, u[M] < x ? (k = 0, p = u[M]) : u[M] > x ? (k = G[H + u[M]], p = C[D + u[M]]) : (k = 96, p = 0), j = 1 << L - S, R = v = 1 << y;
                do {
                    n[w + (A >> S) + (v -= j)] = h << 24 | k << 16 | p | 0
                } while (0 !== v);
                for (j = 1 << L - 1; A & j;) j >>= 1;
                if (0 !== j ? (A &= j - 1, A += j) : A = 0, M++, 0 == --E[L]) {
                    if (L === U) break;
                    L = t[e + u[M]]
                }
                if (L > g && (A & b) !== _) {
                    for (0 === S && (S = g), w += R, q = 1 << (y = L - S); y + S < U && !((q -= E[y + S]) <= 0);) y++, q <<= 1;
                    if (z += 1 << y, 1 === r && z > 852 || 2 === r && z > 592) return 1;
                    n[_ = A & b] = g << 24 | y << 16 | w - o | 0
                }
            }
            return 0 !== A && (n[w + A] = L - S << 24 | 64 << 16 | 0), d.bits = g, 0
        }, n = r("default", f.exports)
    }), (() => ({
        "../utils/common": f
    })))
}