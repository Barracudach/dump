import * as e from "./cjs-loader.mjs.js";

function main() {
    let t;
    o("default", void 0);
    const n = o("__cjsMetaURL", r.meta.url);
    e.define(n, (function(r, e, n, s, i) {
        var c = String.fromCharCode,
            u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
            p = {};

        function l(o, r) {
            if (!p[o]) {
                p[o] = {};
                for (var e = 0; e < o.length; e++) p[o][o.charAt(e)] = e
            }
            return p[o][r]
        }
        var f = {
            compressToBase64: function(o) {
                if (null == o) return "";
                var r = f._compress(o, 6, (function(o) {
                    return u.charAt(o)
                }));
                switch (r.length % 4) {
                    default:
                    case 0:
                        return r;
                    case 1:
                        return r + "===";
                    case 2:
                        return r + "==";
                    case 3:
                        return r + "="
                }
            },
            decompressFromBase64: function(o) {
                return null == o ? "" : "" == o ? null : f._decompress(o.length, 32, (function(r) {
                    return l(u, o.charAt(r))
                }))
            },
            compressToUTF16: function(o) {
                return null == o ? "" : f._compress(o, 15, (function(o) {
                    return c(o + 32)
                })) + " "
            },
            decompressFromUTF16: function(o) {
                return null == o ? "" : "" == o ? null : f._decompress(o.length, 16384, (function(r) {
                    return o.charCodeAt(r) - 32
                }))
            },
            compressToUint8Array: function(o) {
                for (var r = f.compress(o), e = new Uint8Array(2 * r.length), t = 0, n = r.length; t < n; t++) {
                    var s = r.charCodeAt(t);
                    e[2 * t] = s >>> 8, e[2 * t + 1] = s % 256
                }
                return e
            },
            decompressFromUint8Array: function(o) {
                if (null == o) return f.decompress(o);
                for (var r = new Array(o.length / 2), e = 0, t = r.length; e < t; e++) r[e] = 256 * o[2 * e] + o[2 * e + 1];
                var n = [];
                return r.forEach((function(o) {
                    n.push(c(o))
                })), f.decompress(n.join(""))
            },
            compressToEncodedURIComponent: function(o) {
                return null == o ? "" : f._compress(o, 6, (function(o) {
                    return a.charAt(o)
                }))
            },
            decompressFromEncodedURIComponent: function(o) {
                return null == o ? "" : "" == o ? null : (o = o.replace(/ /g, "+"), f._decompress(o.length, 32, (function(r) {
                    return l(a, o.charAt(r))
                })))
            },
            compress: function(o) {
                return f._compress(o, 16, (function(o) {
                    return c(o)
                }))
            },
            _compress: function(o, r, e) {
                if (null == o) return "";
                var t, n, s, i = {},
                    c = {},
                    u = "",
                    a = "",
                    p = "",
                    l = 2,
                    f = 3,
                    h = 2,
                    d = [],
                    m = 0,
                    v = 0;
                for (s = 0; s < o.length; s += 1)
                    if (u = o.charAt(s), Object.prototype.hasOwnProperty.call(i, u) || (i[u] = f++, c[u] = !0), a = p + u, Object.prototype.hasOwnProperty.call(i, a)) p = a;
                    else {
                        if (Object.prototype.hasOwnProperty.call(c, p)) {
                            if (p.charCodeAt(0) < 256) {
                                for (t = 0; t < h; t++) m <<= 1, v == r - 1 ? (v = 0, d.push(e(m)), m = 0) : v++;
                                for (n = p.charCodeAt(0), t = 0; t < 8; t++) m = m << 1 | 1 & n, v == r - 1 ? (v = 0, d.push(e(m)), m = 0) : v++, n >>= 1
                            } else {
                                for (n = 1, t = 0; t < h; t++) m = m << 1 | n, v == r - 1 ? (v = 0, d.push(e(m)), m = 0) : v++, n = 0;
                                for (n = p.charCodeAt(0), t = 0; t < 16; t++) m = m << 1 | 1 & n, v == r - 1 ? (v = 0, d.push(e(m)), m = 0) : v++, n >>= 1
                            }
                            0 == --l && (l = Math.pow(2, h), h++), delete c[p]
                        } else
                            for (n = i[p], t = 0; t < h; t++) m = m << 1 | 1 & n, v == r - 1 ? (v = 0, d.push(e(m)), m = 0) : v++, n >>= 1;
                        0 == --l && (l = Math.pow(2, h), h++), i[a] = f++, p = String(u)
                    } if ("" !== p) {
                    if (Object.prototype.hasOwnProperty.call(c, p)) {
                        if (p.charCodeAt(0) < 256) {
                            for (t = 0; t < h; t++) m <<= 1, v == r - 1 ? (v = 0, d.push(e(m)), m = 0) : v++;
                            for (n = p.charCodeAt(0), t = 0; t < 8; t++) m = m << 1 | 1 & n, v == r - 1 ? (v = 0, d.push(e(m)), m = 0) : v++, n >>= 1
                        } else {
                            for (n = 1, t = 0; t < h; t++) m = m << 1 | n, v == r - 1 ? (v = 0, d.push(e(m)), m = 0) : v++, n = 0;
                            for (n = p.charCodeAt(0), t = 0; t < 16; t++) m = m << 1 | 1 & n, v == r - 1 ? (v = 0, d.push(e(m)), m = 0) : v++, n >>= 1
                        }
                        0 == --l && (l = Math.pow(2, h), h++), delete c[p]
                    } else
                        for (n = i[p], t = 0; t < h; t++) m = m << 1 | 1 & n, v == r - 1 ? (v = 0, d.push(e(m)), m = 0) : v++, n >>= 1;
                    0 == --l && (l = Math.pow(2, h), h++)
                }
                for (n = 2, t = 0; t < h; t++) m = m << 1 | 1 & n, v == r - 1 ? (v = 0, d.push(e(m)), m = 0) : v++, n >>= 1;
                for (;;) {
                    if (m <<= 1, v == r - 1) {
                        d.push(e(m));
                        break
                    }
                    v++
                }
                return d.join("")
            },
            decompress: function(o) {
                return null == o ? "" : "" == o ? null : f._decompress(o.length, 32768, (function(r) {
                    return o.charCodeAt(r)
                }))
            },
            _decompress: function(o, r, e) {
                var t, n, s, i, u, a, p, l = [],
                    f = 4,
                    h = 4,
                    d = 3,
                    m = "",
                    v = [],
                    w = {
                        val: e(0),
                        position: r,
                        index: 1
                    };
                for (t = 0; t < 3; t += 1) l[t] = t;
                for (s = 0, u = Math.pow(2, 2), a = 1; a != u;) i = w.val & w.position, w.position >>= 1, 0 == w.position && (w.position = r, w.val = e(w.index++)), s |= (i > 0 ? 1 : 0) * a, a <<= 1;
                switch (s) {
                    case 0:
                        for (s = 0, u = Math.pow(2, 8), a = 1; a != u;) i = w.val & w.position, w.position >>= 1, 0 == w.position && (w.position = r, w.val = e(w.index++)), s |= (i > 0 ? 1 : 0) * a, a <<= 1;
                        p = c(s);
                        break;
                    case 1:
                        for (s = 0, u = Math.pow(2, 16), a = 1; a != u;) i = w.val & w.position, w.position >>= 1, 0 == w.position && (w.position = r, w.val = e(w.index++)), s |= (i > 0 ? 1 : 0) * a, a <<= 1;
                        p = c(s);
                        break;
                    case 2:
                        return ""
                }
                for (l[3] = p, n = p, v.push(p);;) {
                    if (w.index > o) return "";
                    for (s = 0, u = Math.pow(2, d), a = 1; a != u;) i = w.val & w.position, w.position >>= 1, 0 == w.position && (w.position = r, w.val = e(w.index++)), s |= (i > 0 ? 1 : 0) * a, a <<= 1;
                    switch (p = s) {
                        case 0:
                            for (s = 0, u = Math.pow(2, 8), a = 1; a != u;) i = w.val & w.position, w.position >>= 1, 0 == w.position && (w.position = r, w.val = e(w.index++)), s |= (i > 0 ? 1 : 0) * a, a <<= 1;
                            l[h++] = c(s), p = h - 1, f--;
                            break;
                        case 1:
                            for (s = 0, u = Math.pow(2, 16), a = 1; a != u;) i = w.val & w.position, w.position >>= 1, 0 == w.position && (w.position = r, w.val = e(w.index++)), s |= (i > 0 ? 1 : 0) * a, a <<= 1;
                            l[h++] = c(s), p = h - 1, f--;
                            break;
                        case 2:
                            return v.join("")
                    }
                    if (0 == f && (f = Math.pow(2, d), d++), l[p]) m = l[p];
                    else {
                        if (p !== h) return null;
                        m = n + n.charAt(0)
                    }
                    v.push(m), l[h++] = n + m.charAt(0), n = m, 0 == --f && (f = Math.pow(2, d), d++)
                }
            }
        };
        n.exports = f, t = o("default", n.exports)
    }), {})
}