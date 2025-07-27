import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var s, u, a, h, p, m, B;
    n._RF.push({}, "eecee8EhhBIsrPE+rVl3VqX", "ButtonEmit_MB", void 0);
    const {
        ccclass: f,
        property: E,
        menu: y
    } = l;
    t("default", (s = y("Animation/ButtonEmit"), u = E(o), a = E(r), f(h = s((m = e((p = class extends c {
        constructor(...t) {
            super(...t), i(this, "EmitButtonList", m, this), i(this, "DelaySec", B, this)
        }
        ClickAnotherButton() {
            this.unscheduleAllCallbacks();
            for (let t = 0; t < this.EmitButtonList.length; t++) this.scheduleOnce((function() {
                for (let e = 0; e < this.EmitButtonList[t].clickEvents.length; e++) this.EmitButtonList[t].clickEvents[e].emit([])
            }), this.DelaySec)
        }
    }).prototype, "EmitButtonList", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), B = e(p.prototype, "DelaySec", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), h = p)) || h) || h));
    n._RF.pop()
}