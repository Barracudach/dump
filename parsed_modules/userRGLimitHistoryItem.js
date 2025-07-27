import * as e from "./cc.js";
import * as i from "./cv.js";

function main() {
    e._RF.push({}, "1f966dD4PNCg4uALeZqcj1i", "userRGLimitHistoryItem", void 0);
    t("userRGLimitHistoryItem", class {
        constructor(t, e) {
            this.updated_at_ts = void 0, this.trigger_at_ts = void 0, this.limit_name = void 0, this.type = void 0, this.value = void 0, this.updated_at_ts = e.start_at && new Date(e.start_at.nanos ? e.start_at.nanos : 1e3 * e.start_at.seconds), this.trigger_at_ts = e.trigger_at && new Date(e.trigger_at.nanos ? e.trigger_at.nanos : 1e3 * e.trigger_at.seconds), this.limit_name = `${i.config.getStringData(t)} ${e.duration_type?i.config.getStringData(e.duration_type.toLowerCase()):""}`, this.value = e.limit ? `${e.currency} ${e.limit}` : "", this.type = t
        }
        get updatedAtPretty() {
            return this.updated_at_ts ? i.StringTools.formatDateTimeByCountry(this.updated_at_ts.getTime(), !0, !0) : "-"
        }
        get triggeredAtPretty() {
            return this.trigger_at_ts ? i.StringTools.formatDateTimeByCountry(this.trigger_at_ts.getTime(), !0, !0) : "-"
        }
    }), e._RF.pop()
}