import * as n from "./cc.js";
import * as r from "./cc.js";
import * as e from "./cc.js";
import * as a from "./CrashTracing.js";

function main() {
    var c;
    r._RF.push({}, "7a070JVOftG/rxdQdrVaKIp", "EncryptDecryptString", void 0);
    const s = CryptoJS.enc.Utf8.parse("4512631236589784"),
        i = CryptoJS.enc.Utf8.parse("4512631236589784"),
        p = "_!@#$%",
        {
            ccclass: y
        } = n;
    t("default", y(c = class {
        static encryptData(t) {
            try {
                let r = this.decryptString(t);
                if (this.isDataEncrypted(r)) return t;
                let e = t + p;
                return CryptoJS.AES.encrypt(JSON.stringify({
                    str: e
                }), s, {
                    keySize: 16,
                    iv: i,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                }).toString()
            } catch (r) {
                e("Error encrypting data === ", r), a.hasInstance() && a.getInstance().traceJSException(r.name + ` in EncryptDecryptString.encryptData(${t})`, r.message, r.stack, !1)
            }
            return t
        }
        static decryptData(t) {
            try {
                let r = this.decryptString(t);
                return this.isDataEncrypted(r) ? (r = r.substring(0, r.length - p.length), r) : t
            } catch (r) {
                e("Error Decrypting data === ", r), a.hasInstance() && a.getInstance().traceJSException(r.name + ` in EncryptDecryptString.decryptData(${t})`, r.message, r.stack, !1)
            }
            return t
        }
        static isDataEncrypted(t) {
            return !!(t && t.length > p.length && t.substring(t.length - p.length) == p)
        }
        static decryptString(t) {
            try {
                let r = CryptoJS.AES.decrypt(t, s, {
                    keySize: 16,
                    iv: i,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                }).toString(CryptoJS.enc.Utf8);
                return r = this.getParsedJsonData(r), r ?? ""
            } catch (r) {
                e("Error decryptString data === ", t, r.name, r.message, r.stack)
            }
            return ""
        }
        static getParsedJsonData(t) {
            try {
                if (t && "{" == t.charAt(0) && "}" == t.charAt(t.length - 1) && t.includes("str")) return JSON.parse(t).str ?? ""
            } catch (r) {
                e("Error while parsing JSON object ", r), a.hasInstance() && a.getInstance().traceJSException(r.name + ` in EncryptDecryptString.getParsedJsonData(${t})`, r.message, r.stack, !1)
            }
            return t
        }
    }) || c);
    r._RF.pop()
}