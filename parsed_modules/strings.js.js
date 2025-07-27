import * as n from "./cjs-loader.mjs.js";
import * as e from "./common.js";

function main() {
    let o;
    r("default", void 0);
    const u = r("__cjsMetaURL", t.meta.url);
    n.define(u, (function(t, n, e, u, f) {
        var i = n("./common"),
            a = !0,
            s = !0;
        try {
            String.fromCharCode.apply(null, [0])
        } catch (r) {
            a = !1
        }
        try {
            String.fromCharCode.apply(null, new Uint8Array(1))
        } catch (r) {
            s = !1
        }
        for (var c = new i.Buf8(256), l = 0; l < 256; l++) c[l] = l >= 252 ? 6 : l >= 248 ? 5 : l >= 240 ? 4 : l >= 224 ? 3 : l >= 192 ? 2 : 1;

        function g(r, t) {
            if (t < 65537 && (r.subarray && s || !r.subarray && a)) return String.fromCharCode.apply(null, i.shrinkBuf(r, t));
            for (var n = "", e = 0; e < t; e++) n += String.fromCharCode(r[e]);
            return n
        }
        c[254] = c[254] = 1, t.string2buf = function(r) {
            var t, n, e, o, u, f = r.length,
                a = 0;
            for (o = 0; o < f; o++) 55296 == (64512 & (n = r.charCodeAt(o))) && o + 1 < f && 56320 == (64512 & (e = r.charCodeAt(o + 1))) && (n = 65536 + (n - 55296 << 10) + (e - 56320), o++), a += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
            for (t = new i.Buf8(a), u = 0, o = 0; u < a; o++) 55296 == (64512 & (n = r.charCodeAt(o))) && o + 1 < f && 56320 == (64512 & (e = r.charCodeAt(o + 1))) && (n = 65536 + (n - 55296 << 10) + (e - 56320), o++), n < 128 ? t[u++] = n : n < 2048 ? (t[u++] = 192 | n >>> 6, t[u++] = 128 | 63 & n) : n < 65536 ? (t[u++] = 224 | n >>> 12, t[u++] = 128 | n >>> 6 & 63, t[u++] = 128 | 63 & n) : (t[u++] = 240 | n >>> 18, t[u++] = 128 | n >>> 12 & 63, t[u++] = 128 | n >>> 6 & 63, t[u++] = 128 | 63 & n);
            return t
        }, t.buf2binstring = function(r) {
            return g(r, r.length)
        }, t.binstring2buf = function(r) {
            for (var t = new i.Buf8(r.length), n = 0, e = t.length; n < e; n++) t[n] = r.charCodeAt(n);
            return t
        }, t.buf2string = function(r, t) {
            var n, e, o, u, f = t || r.length,
                i = new Array(2 * f);
            for (e = 0, n = 0; n < f;)
                if ((o = r[n++]) < 128) i[e++] = o;
                else if ((u = c[o]) > 4) i[e++] = 65533, n += u - 1;
            else {
                for (o &= 2 === u ? 31 : 3 === u ? 15 : 7; u > 1 && n < f;) o = o << 6 | 63 & r[n++], u--;
                u > 1 ? i[e++] = 65533 : o < 65536 ? i[e++] = o : (o -= 65536, i[e++] = 55296 | o >> 10 & 1023, i[e++] = 56320 | 1023 & o)
            }
            return g(i, e)
        }, t.utf8border = function(r, t) {
            var n;
            for ((t = t || r.length) > r.length && (t = r.length), n = t - 1; n >= 0 && 128 == (192 & r[n]);) n--;
            return n < 0 || 0 === n ? t : n + c[r[n]] > t ? n : t
        }, o = r("default", e.exports), e.exports.string2buf, e.exports.buf2binstring, e.exports.binstring2buf, e.exports.buf2string, e.exports.utf8border
    }), (() => ({
        "./common": e
    })))
}