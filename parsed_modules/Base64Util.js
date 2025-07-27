import * as o from "./cc.js";
import * as r from "./cc.js";
import * as e from "./cc.js";

function main() {
    var n, a;
    r._RF.push({}, "4054bfYyBtC8Y0tJfdVlTNt", "Base64Util", void 0);
    const {
        ccclass: c,
        property: h
    } = e;
    t("Base64Util", c(((a = class t extends o {
        constructor(...t) {
            super(...t), this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }
        encode(t) {
            let r, e, o, n, a, c, h, i = "",
                d = 0;
            for (t = this._utf8_encode(t); d < t.length;) r = t.charCodeAt(d++), e = t.charCodeAt(d++), o = t.charCodeAt(d++), n = r >> 2, a = (3 & r) << 4 | e >> 4, c = (15 & e) << 2 | o >> 6, h = 63 & o, isNaN(e) ? c = h = 64 : isNaN(o) && (h = 64), i = i + this._keyStr.charAt(n) + this._keyStr.charAt(a) + this._keyStr.charAt(c) + this._keyStr.charAt(h);
            return i
        }
        decode(t) {
            let r, e, o, n, a, c, h, i = "",
                d = 0;
            for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); d < t.length;) n = this._keyStr.indexOf(t.charAt(d++)), a = this._keyStr.indexOf(t.charAt(d++)), c = this._keyStr.indexOf(t.charAt(d++)), h = this._keyStr.indexOf(t.charAt(d++)), r = n << 2 | a >> 4, e = (15 & a) << 4 | c >> 2, o = (3 & c) << 6 | h, i += String.fromCharCode(r), 64 != c && (i += String.fromCharCode(e)), 64 != h && (i += String.fromCharCode(o));
            return i = this._utf8_decode(i), i
        }
        _utf8_encode(t) {
            t = t.replace(/\r\n/g, "\n");
            let r = "";
            for (let e = 0; e < t.length; e++) {
                const o = t.charCodeAt(e);
                o < 128 ? r += String.fromCharCode(o) : o > 127 && o < 2048 ? (r += String.fromCharCode(o >> 6 | 192), r += String.fromCharCode(63 & o | 128)) : (r += String.fromCharCode(o >> 12 | 224), r += String.fromCharCode(o >> 6 & 63 | 128), r += String.fromCharCode(63 & o | 128))
            }
            return r
        }
        _utf8_decode(t) {
            let r = "",
                e = 0,
                o = 0,
                n = 0,
                a = 0;
            for (; e < t.length;) o = t.charCodeAt(e), o < 128 ? (r += String.fromCharCode(o), e++) : o > 191 && o < 224 ? (n = t.charCodeAt(e + 1), r += String.fromCharCode((31 & o) << 6 | 63 & n), e += 2) : (n = t.charCodeAt(e + 1), a = t.charCodeAt(e + 2), r += String.fromCharCode((15 & o) << 12 | (63 & n) << 6 | 63 & a), e += 3);
            return r
        }
        static getInstance() {
            return t.g_instance || (t.g_instance = new t), t.g_instance
        }
    }).g_instance = void 0, n = a)) || n);
    r._RF.pop()
}