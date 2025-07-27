import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./Translator.js";

function main() {
    var _, u, p, b, h, f, y, m, d, g;
    r._RF.push({}, "b14beN7cORA7otMzdgLZ8Ry", "Holdem_Room_Info_Alert_ts", void 0);
    const {
        ccclass: I,
        property: E
    } = o;
    t("default", (_ = E(n), u = E(n), p = E(n), b = E(n), I((y = e((f = class extends l {
        constructor(...t) {
            super(...t), i(this, "lb_start_score", y, this), i(this, "lb_entry_fee", m, this), i(this, "lb_time", d, this), i(this, "lb_relive", g, this), this.fixOpacity = 220
        }
        start() {}
        showAlert(t, e, i) {
            this.lb_start_score.string = c("HOLDEM.INITIAL_SCOREBOARD") + " " + t, this.lb_entry_fee.string = c("HOLDEM.JOIN_FEE") + " " + e, this.lb_time.string = c("HOLDEM.RISE_BLIND_TIME") + " " + i + c("TIME.MINUTE"), this.node.active = !0, this.node.getComponent(s).opacity = 0, a(this.node.getComponent(s)).to(.2, {
                opacity: this.fixOpacity
            }).start()
        }
        setReliveTime(t, e) {
            this.lb_relive.node.active = e, this.lb_relive.string = c("HOLDEM.RE_JOIN_TIME") + " " + t
        }
        hideAlert() {
            a(this.node.getComponent(s)).sequence(a().to(.2, {
                opacity: 0
            }), a().call((() => {
                this.node.active = !1, this.node.getComponent(s).opacity = this.fixOpacity
            }))).start()
        }
    }).prototype, "lb_start_score", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = e(f.prototype, "lb_entry_fee", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = e(f.prototype, "lb_time", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = e(f.prototype, "lb_relive", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = f)) || h));
    r._RF.pop()
}