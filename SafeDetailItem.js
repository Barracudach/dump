import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./ws_protocol.mjs_cjs=&original=.js";
import * as l from "./cv.js";

function main() {
    var g, u, c, p, m, h, f, _, b, y;
    n._RF.push({}, "97242rvUG1B74otb1ItXVTN", "SafeDetailItem", void 0);
    const {
        ccclass: S,
        property: x
    } = r;
    t("default", (g = x(o), u = x(o), c = x(o), p = x(o), S((f = e((h = class extends s {
        constructor(...t) {
            super(...t), i(this, "time_txt", f, this), i(this, "type_txt", _, this), i(this, "amount_txt", b, this), i(this, "balance_txt", y, this), this.msg = l.pb.StrongboxDetail.create()
        }
        updateSVReuseData(t, e, i) {
            if (e.length <= 0 || e.length - 1 < t) return;
            let n = e[t];
            this.msg = n, this.time_txt.getComponent(o).string = a.StringTools.formatTime(this.msg.time, a.Enum.eTimeType.Month_Day_Hour_Min), 1 == this.msg.type ? this.type_txt.getComponent(o).string = a.config.getStringData("Safe_deposit") : 2 == this.msg.type ? this.type_txt.getComponent(o).string = a.config.getStringData("Safe_takeout") : 3 == this.msg.type ? this.type_txt.getComponent(o).string = a.config.getStringData("Safe_frozen") : 4 == this.msg.type && (this.type_txt.getComponent(o).string = a.config.getStringData("Safe_thaw")), this.amount_txt.getComponent(o).string = a.StringTools.serverGoldToShowString(this.msg.amount), this.balance_txt.getComponent(o).string = a.StringTools.serverGoldToShowString(this.msg.balance)
        }
    }).prototype, "time_txt", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = e(h.prototype, "type_txt", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(h.prototype, "amount_txt", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(h.prototype, "balance_txt", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = h)) || m));
    n._RF.pop()
}