import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";

function main() {
    var l, o, u, c, g, m, p, h, b, f;
    r._RF.push({}, "06361iEI0JODbGzU25++u6m", "RGHistoryItem", void 0);
    const {
        ccclass: y,
        property: D
    } = a;
    t("RGHistoryItem", (l = D(n), o = D(n), u = D(n), c = D(n), y((p = e((m = class extends s {
        constructor(...t) {
            super(...t), i(this, "startDate", p, this), i(this, "triggerDate", h, this), i(this, "limitName", b, this), i(this, "value", f, this)
        }
        init(t) {
            null != t ? (this.startDate.string = this.formatDateTime(t.updatedAtPretty), this.triggerDate.string = this.formatDateTime(t.triggeredAtPretty), this.limitName.string = t.limit_name || "", this.value.string = t.value.toString()) : this.node.destroy()
        }
        updateSVReuseData(t, e) {
            e.length <= 0 || e.length - 1 < t || this.init(e[t])
        }
        formatDateTime(t) {
            return t.substring(0, 11) + "\n" + t.substring(12)
        }
    }).prototype, "startDate", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = e(m.prototype, "triggerDate", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(m.prototype, "limitName", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = e(m.prototype, "value", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = m)) || g));
    r._RF.pop()
}