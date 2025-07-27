import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as o from "./cv.js";

function main() {
    var c, u, l, g;
    i._RF.push({}, "c1775PTfchE75a5mWunY13V", "InquireItemDate", void 0);
    const {
        ccclass: m,
        property: p
    } = s;
    e("InquireItemDate", (c = p(n), m((g = t((l = class extends r {
        constructor(...e) {
            super(...e), a(this, "dateLabel", g, this), this.msg = null
        }
        updateSVReuseData(e, t) {
            t.length <= 0 || t.length - 1 < e || (this.msg = t[e], this.updateUI())
        }
        updateItemData(e, t) {
            this.msg = t, this.updateUI()
        }
        updateUI() {
            let e = new Date;
            e = this.msg.createdAt ? new Date(this.msg.createdAt) : new Date(1e3 * this.msg.create_time);
            let t = o.StringTools.formatDateTimeByCountry(e.getTime(), !0, !1);
            o.config.getTimeWithTimeZone().setHours(0, 0, 0, 0) === this.msg.dayEpoch && (t = o.config.getStringData("Today", !1, "Today") + ", " + t), this.dateLabel.string = t
        }
    }).prototype, "dateLabel", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = l)) || u));
    i._RF.pop()
}