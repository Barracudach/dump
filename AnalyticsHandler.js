import * as n from "./cc.js";
import * as s from "./SegmentTools.js";
import * as e from "./AnalyticsTools.js";

function main() {
    n._RF.push({}, "449e8aegPlOI6Ck2eUoig5V", "AnalyticsHandler", void 0);
    class a {
        constructor() {
            this.analyticsTools = void 0, this.analyticsTools = new Map;
            let t = s.getInstance();
            t && this.analyticsTools.set(e.SEGMENT, t)
        }
        static getInstance() {
            return a.instance || (a.instance = new a), a.instance
        }
        sendEvent(t, n, s = "", e = {}) {
            this.analyticsTools.forEach((a => {
                a.sendEvent(t, n, s, e)
            }))
        }
        identify(t) {
            this.analyticsTools.forEach((n => {
                n.identify(t)
            }))
        }
    }
    t("AnalyticsHandler", a), a.instance = null, n._RF.pop()
}