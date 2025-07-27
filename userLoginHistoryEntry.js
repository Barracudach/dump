import * as o from "./cc.js";
import * as i from "./cv.js";

function main() {
    o._RF.push({}, "e25d8hIjqROEpJKR4xaFNmK", "userLoginHistoryEntry", void 0);
    class n {
        constructor() {
            this.uid = void 0, this.logged_at_ts = void 0, this.ip = void 0, this.device = null, this.location = null
        }
        get loggedAtPretty() {
            return this.logged_at_ts ? i.StringTools.formatDateTimeByCountry(this.logged_at_ts.getTime(), !0, !0) : ""
        }
        get countryName() {
            return this.location ? (this.location.country && !this.location.country_code ? this.location.country_code = Object.keys(i.countryISO2NameMap).find((t => i.countryISO2NameMap[t] == this.location.country)) : this.location.country_code && !this.location.country && (this.location.country_code = this.location.country_code.toUpperCase(), this.location.country = i.countryISO2NameMap[this.location.country_code] || ""), i.config.getStringData("country_" + this.location.country_code, !1, this.location.country || this.location.country_code || "-")) : "-"
        }
    }
    t("userLoginHistoryEntry", n);
    t("parseUserLoginHistoryEntry", (function(t) {
        if (null == t) return;
        let o = new n;
        return null != t.logged_at_ts && (o.logged_at_ts = new Date(1e3 * t.logged_at_ts.seconds)), null != t.uid && (o.uid = Number(t.uid)), null != t.ip && (o.ip = t.ip), null != t.device && (o.device = t.device), null != t.location && (o.location = t.location), o
    }));
    o._RF.pop()
}