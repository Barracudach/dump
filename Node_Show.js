import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";

function main() {
    var l, u, a, h, p, d;
    n._RF.push({}, "be88fV38eRG/bv/wESTywEi", "Node_Show", void 0);
    const {
        ccclass: f,
        property: y
    } = c;
    e("default", (l = y(o), u = y(r), f((p = t((h = class extends s {
        constructor(...e) {
            super(...e), i(this, "nodeList", p, this), i(this, "DelaySec", d, this)
        }
        ShowNode() {
            this.unscheduleAllCallbacks(), this.scheduleOnce((function() {
                for (let e = 0; e < this.nodeList.length; e++) this.nodeList[e].active = !0
            }), this.DelaySec)
        }
    }).prototype, "nodeList", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), d = t(h.prototype, "DelaySec", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), a = h)) || a));
    n._RF.pop()
}