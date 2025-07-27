import * as i from "./cc.js";
import * as e from "./cc.js";
import * as a from "./cv.js";
import * as r from "./FilterSliderDouble.js";

function main() {
    var n;
    e._RF.push({}, "974464teitMdq7CybLAt69Y", "FilterTimeInterval", void 0);
    const {
        ccclass: l,
        property: o
    } = i;
    t("FilterTimeInterval", l(n = class extends r {
        updateMinMaxLabels() {
            let t = a.config.getTimeWithTimeZone();
            this.valueMin.string = a.StringTools.formatDateTimeByCountry(t.getTime(), !0, !1), t.setDate(t.getDate() - this.data.valueMaxBase), this.valueMax.string = a.StringTools.formatDateTimeByCountry(t.getTime(), !0, !1)
        }
        updateValueLabel(t, e) {
            if (t == this.data.valueMinBase) this.filterValue.string = e == t ? a.config.getStringData("Today") : a.StringTools.formatC(a.config.getStringData("FilterView_TimeInterval_LastDays"), e + 1);
            else {
                let i = a.config.getTimeWithTimeZone();
                i.setDate(i.getDate() - t);
                let r = a.StringTools.formatDateTimeByCountry(i.getTime(), !0, !1);
                i.setDate(i.getDate() - (e - t));
                let n = a.StringTools.formatDateTimeByCountry(i.getTime(), !0, !1);
                this.filterValue.string = n + " - " + r
            }
        }
    }) || n);
    e._RF.pop()
}