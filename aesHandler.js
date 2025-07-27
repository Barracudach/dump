import * as e from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cv.js";

function main() {
    e._RF.push({}, "9400fj09CpHgpR7IOXqu4vp", "aesHandler", void 0);
    class n {
        static EncryptStringCBC(t) {
            let e = CryptoJS.enc.Utf8.parse(n.MTT_PRIVATE_KEY);
            const s = new String(n.MTT_PRIVATE_KEY).substring(0, 16);
            let o = CryptoJS.enc.Utf8.parse(t),
                a = CryptoJS.AES.encrypt(o, e, {
                    iv: CryptoJS.enc.Utf8.parse(s),
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                });
            return r(CryptoJS.enc.Base64.parse(a.toString()) + "  -----------\x3e 4:  \n " + a.toString()), CryptoJS.enc.Base64.parse(a.toString())
        }
        static EncryptString(t, e) {
            let r = CryptoJS.enc.Utf8.parse(e),
                s = CryptoJS.enc.Utf8.parse(t),
                n = CryptoJS.AES.encrypt(s, r, {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7
                });
            return console.log("-----------\x3e 4:" + n.toString()), CryptoJS.enc.Base64.parse(n.toString())
        }
        static DecryptString(t, e) {
            let r = CryptoJS.enc.Utf8.parse(e);
            return CryptoJS.AES.decrypt(t, r, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            }).toString(CryptoJS.enc.Utf8)
        }
        static EncryptBytes(t) {
            let e = CryptoJS.enc.Utf8.parse(s.dataHandler.getUserData().secretKey),
                r = this.Int8parse(t),
                n = CryptoJS.AES.encrypt(r, e, {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7
                });
            return console.log("-----------\x3e 4:" + n.toString()), this.base64ToBytes(n.toString())
        }
        static DecryptBytes(t) {
            t = new Int8Array(t);
            let e = CryptoJS.enc.Utf8.parse(s.dataHandler.getUserData().secretKey),
                r = this.Int8parse(t),
                n = CryptoJS.enc.Base64.stringify(r),
                o = CryptoJS.AES.decrypt(n, e, {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7
                }),
                a = [],
                p = o.words.length;
            for (let t = 0; t < p; t++) {
                let e = this.intTobytes(o.words[t]);
                if (!(o.sigBytes / 4 >= t + 1)) {
                    let t = o.sigBytes % 4;
                    for (let r = 0; r < t; r++) a.push(e[r]);
                    break
                }
                for (let t = 0; t < 4; t++) a.push(e[t]);
                if (o.sigBytes / 4 == t + 1) break
            }
            return new Int8Array(a)
        }
        static Int8parse(t) {
            let e = t.length | t.byteLength,
                r = [];
            for (let s = 0; s < e; s++) {
                t[s];
                r[s >>> 2] |= (255 & t[s]) << 24 - s % 4 * 8
            }
            return CryptoJS.lib.WordArray.create(r, e)
        }
        static getCharCode(t) {
            let e = "",
                r = t.split(",");
            for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
            return e
        }
        static bytesToHex(t) {
            let e = [];
            for (let r = 0; r < t.length; r++) e.push((t[r] >>> 4).toString(16)), e.push((15 & t[r]).toString(16));
            return e.join("")
        }
        static base64ToBytes(t) {
            let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            t = t.replace(/[^A-Z0-9+\/]/gi, "");
            let r = [];
            for (let s = 0, n = 0; s < t.length; n = ++s % 4) 0 != n && r.push((e.indexOf(t.charAt(s - 1)) & Math.pow(2, -2 * n + 8) - 1) << 2 * n | e.indexOf(t.charAt(s)) >>> 6 - 2 * n);
            return r
        }
        static hexToBytes(t) {
            let e = [];
            for (let r = 0; r < t.length; r += 2) e.push(parseInt(t.substr(r, 2), 16));
            return e
        }
        static bytesToBase64(t) {
            let e = [],
                r = t.length | t.byteLength;
            for (let s = 0; s < r; s += 3) {
                let n = t[s] << 16 | t[s + 1] << 8 | t[s + 2];
                for (let t = 0; t < 4; t++) 8 * s + 6 * t <= 8 * r ? e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >>> 6 * (3 - t) & 63)) : e.push("=")
            }
            return e.join("")
        }
        static stringToUint8Array(t) {
            let e = [],
                r = t.length;
            for (let s = 0; s < r; ++s) e.push(t.charCodeAt(s));
            return new Uint8Array(e)
        }
        static intTobytes(t) {
            var e = new Uint8Array(4);
            return e[0] = t >> 24 & 255, e[1] = t >> 16 & 255, e[2] = t >> 8 & 255, e[3] = 255 & t, e
        }
        static DecryptBase64(t, e) {
            let r = CryptoJS.enc.Utf8.parse(e),
                s = CryptoJS.AES.decrypt(t, r, {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7
                }),
                n = "",
                o = s.words.length;
            for (let t = 0; t < o; t++) {
                let e = this.intTobytes(s.words[t]);
                if (!(s.sigBytes / 4 >= t + 1)) {
                    let t = s.sigBytes % 4;
                    for (let r = 0; r < t; r++) 0 != e[r] && (n += String.fromCharCode(e[r]));
                    break
                }
                for (let t = 0; t < 4; t++) 0 != e[t] && (n += String.fromCharCode(e[t]));
                if (s.sigBytes / 4 == t + 1) break
            }
            return n.length <= 0 && (n = t), this.AES_KEY = n, n
        }
    }
    t("aesHandler", n), n.AES_KEY = "", n.MTT_PRIVATE_KEY = "2sdGzJ6rKkyZjPU04SWEqEK4Uwho8NDp", e._RF.pop()
}