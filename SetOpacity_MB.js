import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var u, p, y, f, h, d, b, g;
    n._RF.push({}, "0f593NC8+JJTb9J/f9HwNf4", "SetOpacity_MB", void 0);
    const {
        ccclass: C,
        property: O
    } = a;
    e("default", (u = O(r), p = O(c), y = O(o), C((d = t((h = class extends l {
        constructor(...e) {
            super(...e), i(this, "nodeList", d, this), i(this, "Opacity", b, this), i(this, "DelaySec", g, this)
        }
        SetOpacity() {
            this.unscheduleAllCallbacks(), this.scheduleOnce((function() {
                for (let e = 0; e < this.nodeList.length; e++) this.nodeList[e].getComponent(s).opacity = this.Opacity
            }), this.DelaySec)
        }
    }).prototype, "nodeList", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), b = t(h.prototype, "Opacity", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), g = t(h.prototype, "DelaySec", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), f = h)) || f));
    n._RF.pop()
}