import * as i from "./cc.js";
import * as h from "./cc.js";
import * as s from "./cc.js";

function main() {
    var r, e;
    i._RF.push({}, "d0a809yTyFL5JUNrfIM9IJf", "mdR5", void 0);
    const {
        ccclass: n,
        property: d
    } = s;
    t("md5", n(((e = class t extends h {
        static getInstance() {
            return t.g_instance || (t.g_instance = new t), t.g_instance
        }
        getSortSign() {
            for (var t = "PlfBCVcwepsPSGkE&$%adA#$!!E@JK23", i = t.length, s = [], h = [], r = [], e = 0, n = 0; n < i; n++) s.push(t.charCodeAt(n));
            for (n = 0; n < i; n++) n % 2 != 0 ? h.push(s[n] - 2 * n + 32) : h.push(s[n]);
            for (n = 0; n < i; n++) e = h[n], e ^= n % 3, e >>= 3, n % 3 == 0 ? e <<= 2 : e ^= h[n], r.push(e);
            var d = "";
            for (i = r.length, n = 0; n < i; n++) d += r[n];
            return this.md5(d)
        }
        CreateSign(t) {
            var i = this.getSortSign(),
                s = i + t + i;
            return this.md5(s)
        }
        utf8(t) {
            for (var i, s, h = "", r = 0; r < t.length;)
                if (!((i = t.charCodeAt(r++)) >= 56320 && i < 57344)) {
                    if (i >= 55296 && i < 56320) {
                        if (r >= t.length) continue;
                        if ((s = t.charCodeAt(r++)) < 56320 || i >= 56832) continue;
                        i = s - 56320 + (i - 55296 << 10) + 65536
                    }
                    h += i < 128 ? String.fromCharCode(i) : i < 2048 ? String.fromCharCode(192 + (i >> 6), 128 + (63 & i)) : i < 65536 ? String.fromCharCode(224 + (i >> 12), 128 + (i >> 6 & 63), 128 + (63 & i)) : String.fromCharCode(240 + (i >> 18), 128 + (i >> 12 & 63), 128 + (i >> 6 & 63), 128 + (63 & i))
                } return h
        }
        toHex(t) {
            var i = "0123456789ABCDEF";
            return i.charAt(t >> 4) + i.charAt(15 & t)
        }
        encodeURIComponentNew(t) {
            for (var i = this.utf8(i), s = "", h = 0; h < i.length; h++) - 1 == "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".indexOf(i.charAt(h)) ? s += "%" + this.toHex(i.charCodeAt(h)) : s += i.charAt(h);
            return s
        }
        md5(t) {
            var i, s, h, r, e, n, d, o, a, g = Array();
            for (t = this.Utf8Encode(t), g = this.ConvertToWordArray(t), n = 1732584193, d = 4023233417, o = 2562383102, a = 271733878, i = 0; i < g.length; i += 16) s = n, h = d, r = o, e = a, n = this.FF(n, d, o, a, g[i + 0], 7, 3614090360), a = this.FF(a, n, d, o, g[i + 1], 12, 3905402710), o = this.FF(o, a, n, d, g[i + 2], 17, 606105819), d = this.FF(d, o, a, n, g[i + 3], 22, 3250441966), n = this.FF(n, d, o, a, g[i + 4], 7, 4118548399), a = this.FF(a, n, d, o, g[i + 5], 12, 1200080426), o = this.FF(o, a, n, d, g[i + 6], 17, 2821735955), d = this.FF(d, o, a, n, g[i + 7], 22, 4249261313), n = this.FF(n, d, o, a, g[i + 8], 7, 1770035416), a = this.FF(a, n, d, o, g[i + 9], 12, 2336552879), o = this.FF(o, a, n, d, g[i + 10], 17, 4294925233), d = this.FF(d, o, a, n, g[i + 11], 22, 2304563134), n = this.FF(n, d, o, a, g[i + 12], 7, 1804603682), a = this.FF(a, n, d, o, g[i + 13], 12, 4254626195), o = this.FF(o, a, n, d, g[i + 14], 17, 2792965006), d = this.FF(d, o, a, n, g[i + 15], 22, 1236535329), n = this.GG(n, d, o, a, g[i + 1], 5, 4129170786), a = this.GG(a, n, d, o, g[i + 6], 9, 3225465664), o = this.GG(o, a, n, d, g[i + 11], 14, 643717713), d = this.GG(d, o, a, n, g[i + 0], 20, 3921069994), n = this.GG(n, d, o, a, g[i + 5], 5, 3593408605), a = this.GG(a, n, d, o, g[i + 10], 9, 38016083), o = this.GG(o, a, n, d, g[i + 15], 14, 3634488961), d = this.GG(d, o, a, n, g[i + 4], 20, 3889429448), n = this.GG(n, d, o, a, g[i + 9], 5, 568446438), a = this.GG(a, n, d, o, g[i + 14], 9, 3275163606), o = this.GG(o, a, n, d, g[i + 3], 14, 4107603335), d = this.GG(d, o, a, n, g[i + 8], 20, 1163531501), n = this.GG(n, d, o, a, g[i + 13], 5, 2850285829), a = this.GG(a, n, d, o, g[i + 2], 9, 4243563512), o = this.GG(o, a, n, d, g[i + 7], 14, 1735328473), d = this.GG(d, o, a, n, g[i + 12], 20, 2368359562), n = this.HH(n, d, o, a, g[i + 5], 4, 4294588738), a = this.HH(a, n, d, o, g[i + 8], 11, 2272392833), o = this.HH(o, a, n, d, g[i + 11], 16, 1839030562), d = this.HH(d, o, a, n, g[i + 14], 23, 4259657740), n = this.HH(n, d, o, a, g[i + 1], 4, 2763975236), a = this.HH(a, n, d, o, g[i + 4], 11, 1272893353), o = this.HH(o, a, n, d, g[i + 7], 16, 4139469664), d = this.HH(d, o, a, n, g[i + 10], 23, 3200236656), n = this.HH(n, d, o, a, g[i + 13], 4, 681279174), a = this.HH(a, n, d, o, g[i + 0], 11, 3936430074), o = this.HH(o, a, n, d, g[i + 3], 16, 3572445317), d = this.HH(d, o, a, n, g[i + 6], 23, 76029189), n = this.HH(n, d, o, a, g[i + 9], 4, 3654602809), a = this.HH(a, n, d, o, g[i + 12], 11, 3873151461), o = this.HH(o, a, n, d, g[i + 15], 16, 530742520), d = this.HH(d, o, a, n, g[i + 2], 23, 3299628645), n = this.II(n, d, o, a, g[i + 0], 6, 4096336452), a = this.II(a, n, d, o, g[i + 7], 10, 1126891415), o = this.II(o, a, n, d, g[i + 14], 15, 2878612391), d = this.II(d, o, a, n, g[i + 5], 21, 4237533241), n = this.II(n, d, o, a, g[i + 12], 6, 1700485571), a = this.II(a, n, d, o, g[i + 3], 10, 2399980690), o = this.II(o, a, n, d, g[i + 10], 15, 4293915773), d = this.II(d, o, a, n, g[i + 1], 21, 2240044497), n = this.II(n, d, o, a, g[i + 8], 6, 1873313359), a = this.II(a, n, d, o, g[i + 15], 10, 4264355552), o = this.II(o, a, n, d, g[i + 6], 15, 2734768916), d = this.II(d, o, a, n, g[i + 13], 21, 1309151649), n = this.II(n, d, o, a, g[i + 4], 6, 4149444226), a = this.II(a, n, d, o, g[i + 11], 10, 3174756917), o = this.II(o, a, n, d, g[i + 2], 15, 718787259), d = this.II(d, o, a, n, g[i + 9], 21, 3951481745), n = this.AddUnsigned(n, s), d = this.AddUnsigned(d, h), o = this.AddUnsigned(o, r), a = this.AddUnsigned(a, e);
            return this.WordToHex(n) + this.WordToHex(d) + this.WordToHex(o) + this.WordToHex(a)
        }
        RotateLeft(t, i) {
            return t << i | t >>> 32 - i
        }
        AddUnsigned(t, i) {
            var s, h, r, e, n;
            return r = 2147483648 & t, e = 2147483648 & i, n = (1073741823 & t) + (1073741823 & i), (s = 1073741824 & t) & (h = 1073741824 & i) ? 2147483648 ^ n ^ r ^ e : s | h ? 1073741824 & n ? 3221225472 ^ n ^ r ^ e : 1073741824 ^ n ^ r ^ e : n ^ r ^ e
        }
        F(t, i, s) {
            return t & i | ~t & s
        }
        G(t, i, s) {
            return t & s | i & ~s
        }
        H(t, i, s) {
            return t ^ i ^ s
        }
        I(t, i, s) {
            return i ^ (t | ~s)
        }
        FF(t, i, s, h, r, e, n) {
            return t = this.AddUnsigned(t, this.AddUnsigned(this.AddUnsigned(this.F(i, s, h), r), n)), this.AddUnsigned(this.RotateLeft(t, e), i)
        }
        GG(t, i, s, h, r, e, n) {
            return t = this.AddUnsigned(t, this.AddUnsigned(this.AddUnsigned(this.G(i, s, h), r), n)), this.AddUnsigned(this.RotateLeft(t, e), i)
        }
        HH(t, i, s, h, r, e, n) {
            return t = this.AddUnsigned(t, this.AddUnsigned(this.AddUnsigned(this.H(i, s, h), r), n)), this.AddUnsigned(this.RotateLeft(t, e), i)
        }
        II(t, i, s, h, r, e, n) {
            return t = this.AddUnsigned(t, this.AddUnsigned(this.AddUnsigned(this.I(i, s, h), r), n)), this.AddUnsigned(this.RotateLeft(t, e), i)
        }
        ConvertToWordArray(t) {
            for (var i, s = t.length, h = s + 8, r = 16 * ((h - h % 64) / 64 + 1), e = Array(r - 1), n = 0, d = 0; d < s;) n = d % 4 * 8, e[i = (d - d % 4) / 4] = e[i] | t.charCodeAt(d) << n, d++;
            return n = d % 4 * 8, e[i = (d - d % 4) / 4] = e[i] | 128 << n, e[r - 2] = s << 3, e[r - 1] = s >>> 29, e
        }
        WordToHex(t) {
            var i, s = "",
                h = "";
            for (i = 0; i <= 3; i++) s += (h = "0" + (t >>> 8 * i & 255).toString(16)).substr(h.length - 2, 2);
            return s
        }
        Utf8Encode(t) {
            for (var i = "", s = 0; s < t.length; s++) {
                var h = t.charCodeAt(s);
                h < 128 ? i += String.fromCharCode(h) : h > 127 && h < 2048 ? (i += String.fromCharCode(h >> 6 | 192), i += String.fromCharCode(63 & h | 128)) : (i += String.fromCharCode(h >> 12 | 224), i += String.fromCharCode(h >> 6 & 63 | 128), i += String.fromCharCode(63 & h | 128))
            }
            return i
        }
        writeUTF(t, i) {
            for (var s = [], h = 0, r = 0; r < t.length; r++) {
                var e = t.charCodeAt(r);
                0 <= e && e <= 127 ? (h += 1, s.push(e)) : 128 <= e && e <= 2047 ? (h += 2, s.push(192 | 31 & e >> 6), s.push(128 | 63 & e)) : (2048 <= e && e <= 55295 || 57344 <= e && e <= 65535) && (h += 3, s.push(224 | 15 & e >> 12), s.push(128 | 63 & e >> 6), s.push(128 | 63 & e))
            }
            for (r = 0; r < s.length; r++) s[r] &= 255;
            return i ? s : h <= 255 ? [0, h].concat(s) : [h >> 8, 255 & h].concat(s)
        }
    }).g_instance = void 0, r = e)) || r);
    i._RF.pop()
}