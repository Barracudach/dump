import * as e from "./cc.js";
import * as n from "./cv.js";
import * as r from "./aesHandler.js";

function main() {
    e._RF.push({}, "867aeOk/x5OUo3CgIB+ok0O", "rsaHandler", void 0);
    class s {
        static RSA_EncryptString(t) {
            let e = this.RSA_PUB_KEY;
            var n = new window.JSEncrypt({
                default_key_size: 2048
            });
            return n.setPublicKey(e), n.encrypt(t)
        }
        static RSA_DecryptString(t) {
            var e = this.RSA_PRI_KEY;
            var n = new window.JSEncrypt({
                default_key_size: 2048
            });
            return n.setPrivateKey(e), n.decrypt(t)
        }
        static RSA_get32BitRand() {
            let t = "",
                e = "_0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_",
                r = "";
            for (let t = 0; t < 32; t++) {
                r += e[n.StringTools.randomRange(0, e.length)]
            }
            let s = Math.floor((new Date).getTime() / 1e3),
                i = n.StringTools.formatC("%lld%s", s, r);
            return t = n.md5.md5(i), t
        }
        static RSA_run_test() {
            var t = this.RSA_EncryptString("this is a busy.");
            console.log("加密文本:" + t);
            var e = this.RSA_DecryptString(t);
            console.log("解密文本:" + e);
            let n = this.RSA_get32BitRand();
            console.log("md5Str =====================%s", n);
            let s = this.RSA_EncryptString(n);
            console.log("enMd5Str =====================%s", s);
            let i = r.bytesToBase64(r.stringToUint8Array(s));
            console.log("_baseData ====================== %s", i)
        }
    }
    t("rsaHandler", s), s.RSA_PUB_KEY = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3nBEl1X8qNEjxBFI2oOg\ne5wVCzO4vGiFJ+PeBcAljYxNi6/wA1kwTtm4kRtBQDeCFcpFFY0EQtIw/BX0LBCT\nDAivZFD+hMPyq8hN0nd/HXEklyNFtb78iEOaas5p3XfLBE8fFTAPubpN+cSZWifp\nwZH1x7Dykimjz2gUNZ4TR6tRCKx6WJfJB8xJ5EpeiEumW6s8ajpUfCVfIiqTQ+cE\nJyvnxluz1I+3HKXqRXNHtO8zcGt1niPAMcPouexcP8+GDaAjnLWexdzK/5WM3F3H\neh5Mo1N9tai9yDqcf8QUiSBXF2J01NXRUkkI9dBkDZq6TfpzFI6YGzrun1bdx4Lz\nvwIDAQAB\n-----END PUBLIC KEY-----", s.RSA_PRI_KEY = "-----BEGIN PRIVATE KEY-----\n-----END PRIVATE KEY-----", e._RF.pop()
}