import * as e from "./cc.js";
import * as c from "./cv.js";

function main() {
    e._RF.push({}, "4d7a5n0PBxJoJSiTaKcnEHl", "userDocAcceptanceEntry", void 0);
    class i {
        constructor() {
            this.accepted = void 0, this.acceptedAt = void 0, this.name = void 0, this.version = void 0, this.jurisdiction = void 0, this._cb = void 0
        }
        get acceptedAtPretty() {
            return this.acceptedAt ? c.StringTools.formatDateTimeByCountry(this.acceptedAt.getTime(), !0, !0) : ""
        }
        get countryName() {
            return this.jurisdiction ? (this.jurisdiction = this.jurisdiction.toUpperCase(), c.config.getStringData("country_" + this.jurisdiction, !1, c.countryISO2NameMap[this.jurisdiction] || this.jurisdiction || "-")) : "-"
        }
        get fullName() {
            return c.config.getStringData(this.name)
        }
        set cb(t) {
            this._cb = t
        }
        get cb() {
            return this._cb
        }
    }
    t("userDocAccecptanceEntry", i);
    t("parseUserDocAcceptanceEntry", (function({
        name: t,
        jurisdiction: e,
        accepted: c,
        acceptedAt: n,
        version: r
    }) {
        if (!t) return;
        let s = new i;
        return n && (s.acceptedAt = new Date(n)), s.name = t || "", s.jurisdiction = (null == e ? void 0 : e.toLocaleUpperCase()) || "", s.version = r || "", s.accepted = c || !0, s
    }));
    e._RF.pop()
}