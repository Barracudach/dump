import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";

function main() {
    var c, o, u, h, b, p, f;
    i._RF.push({}, "7a5fa6DutZIK5VnrQCJ/Sjj", "MaskEnableDisable_MB", void 0);
    const {
        ccclass: k,
        property: d,
        menu: m
    } = n;
    e("default", (c = m("Animation/MaskEnableDisable"), o = d(a), u = d(l), k(h = c((p = t((b = class extends r {
        constructor(...e) {
            super(...e), s(this, "maskList", p, this), s(this, "DelaySec", f, this)
        }
        MaskEnable() {
            this.unscheduleAllCallbacks(), this.scheduleOnce((function() {
                for (let e = 0; e < this.maskList.length; e++) this.maskList[e].enabled = !0
            }), this.DelaySec)
        }
        MaskDisable() {
            this.unscheduleAllCallbacks(), this.scheduleOnce((function() {
                for (let e = 0; e < this.maskList.length; e++) this.maskList[e].enabled = !1
            }), this.DelaySec)
        }
    }).prototype, "maskList", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), f = t(b.prototype, "DelaySec", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), h = b)) || h) || h));
    i._RF.pop()
}