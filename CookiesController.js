import * as n from "./cc.js";
import * as e from "./cv.js";

function main() {
    n._RF.push({}, "9950aD5QEFP3pE9J0HLpell", "CookiesController", void 0);
    class i {
        constructor() {
            this.domain = "localhost", this.isValidJsonString = t => {
                try {
                    if ("string" != typeof t) return !1;
                    const n = JSON.parse(t);
                    return !!n || 0 === n || !1 === n || "" === t
                } catch (t) {
                    return !1
                }
            }, e.appConfig.isWebApp && (this.domain = this.getDomainName())
        }
        getDomainName() {
            if (!window) return "";
            const t = window.location.host;
            if (!t) return "";
            const n = t.split(":")[0].split(".");
            return n.slice(Math.max(n.length - 2, 0)).join(".")
        }
        static getInstance() {
            return e.appConfig.isWebApp ? (i._instance || (i._instance = new i), i._instance) : null
        }
        get(t) {
            const n = t + "=",
                e = document.cookie.split(";");
            for (let t = 0; t < e.length; t++) {
                let i = e[t].trimStart();
                if (0 === i.indexOf(n)) {
                    const t = i.substring(n.length, i.length);
                    return this.isValidJsonString(t) ? JSON.parse(t) : t
                }
            }
            return null
        }
        set(t, n, e = 365) {
            const i = new Date;
            i.setTime(i.getTime() + 24 * e * 60 * 60 * 1e3);
            const o = `; expires=${i.toUTCString()}`,
                s = `${t}=` + ("string" == typeof n ? n : JSON.stringify(n)) + (this.domain ? `; domain=${this.domain}` : "") + o + "; path=/";
            document.cookie = s
        }
        remove(t) {
            const n = this.domain ? `domain=${this.domain}; ` : "";
            document.cookie = t + `=; Max-Age=0; path=/; ${n}expires=Thu, 01 Jan 1970 00:00:00 GMT`
        }
        clear() {
            const t = document.cookie.split(";");
            for (let n = 0; n < t.length; n++) {
                const e = t[n],
                    i = e.indexOf("="),
                    o = i > -1 ? e.substring(0, i).trim() : e.trim();
                this.remove(o)
            }
        }
    }
    t("CookiesController", i), i._instance = void 0, n._RF.pop()
}