import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";

function main() {
    var s, a, u, d, h, p, f;
    i._RF.push({}, "8b5d4RWg51GXoWZ5Q9oL67/", "Node_Show_MB", void 0);
    const {
        ccclass: y,
        property: b,
        menu: S
    } = c;
    e("default", (s = S("Animation/NodeShow"), a = b(n), u = b(r), y(d = s((p = t((h = class extends l {
        constructor(...e) {
            super(...e), o(this, "nodeList", p, this), o(this, "DelaySec", f, this)
        }
        ShowNode() {
            this.unscheduleAllCallbacks(), this.scheduleOnce((function() {
                for (let e = 0; e < this.nodeList.length; e++) this.nodeList[e].active = !0
            }), this.DelaySec)
        }
    }).prototype, "nodeList", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), f = t(h.prototype, "DelaySec", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), d = h)) || d) || d));
    i._RF.pop()
}