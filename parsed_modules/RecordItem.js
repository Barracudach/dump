import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./cv.js";

function main() {
    var c, m, p, b, _, h, g, d;
    i._RF.push({}, "43e8d5F9idKSpr3VA4SB0qR", "RecordItem", void 0);
    const {
        ccclass: f,
        property: y
    } = r;
    e("default", (c = y(l), m = y(l), p = y(l), f((h = t((_ = class extends o {
        constructor(...e) {
            super(...e), n(this, "name_label", h, this), n(this, "num_label", g, this), n(this, "time_label", d, this)
        }
        updateSVReuseData(e, t) {
            if (t.length <= 0 || t.length - 1 < e) return;
            let n = t[e],
                i = n.is_high_light ? new a(239, 209, 133) : new a(172, 172, 212);
            this.name_label.string = n.nick_name, this.num_label.string = s.StringTools.serverGoldToShowString(n.amount), this.time_label.string = s.StringTools.formatTime(n.draw_time, s.Enum.eTimeType.Hour_Minute), this.name_label.node.getComponent(u).color = i, this.num_label.node.getComponent(u).color = i, this.time_label.node.getComponent(u).color = i
        }
    }).prototype, "name_label", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(_.prototype, "num_label", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = t(_.prototype, "time_label", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = _)) || b));
    i._RF.pop()
}