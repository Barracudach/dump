import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var s, u, a, h, p, f;
    n._RF.push({}, "d5b70ijMZBGm5kZ2VNW6ilW", "ButtonEmit", void 0);
    const {
        ccclass: m,
        property: B
    } = l;
    t("default", (s = B(o), u = B(r), m((p = e((h = class extends c {
        constructor(...t) {
            super(...t), i(this, "EmitButtonList", p, this), i(this, "DelaySec", f, this)
        }
        ClickAnotherButton() {
            this.unscheduleAllCallbacks();
            for (let t = 0; t < this.EmitButtonList.length; t++) this.scheduleOnce((function() {
                for (let e = 0; e < this.EmitButtonList[t].clickEvents.length; e++) this.EmitButtonList[t].clickEvents[e].emit([])
            }), this.DelaySec)
        }
    }).prototype, "EmitButtonList", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), f = e(h.prototype, "DelaySec", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), a = h)) || a));
    n._RF.pop()
}