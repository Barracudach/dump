import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var s, a, u, d, p, h, f;
    n._RF.push({}, "714acEtHDdJzZAC5NRAPOdF", "Node_Hide_MB", void 0);
    const {
        ccclass: y,
        property: b,
        menu: _
    } = c;
    e("default", (s = _("Animation/NodeHide"), a = b(o), u = b(r), y(d = s((h = t((p = class extends l {
        constructor(...e) {
            super(...e), i(this, "nodeList", h, this), i(this, "DelaySec", f, this)
        }
        HideNode() {
            this.unscheduleAllCallbacks(), this.scheduleOnce((function() {
                for (let e = 0; e < this.nodeList.length; e++) this.nodeList[e].active = !1
            }), this.DelaySec)
        }
    }).prototype, "nodeList", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), f = t(p.prototype, "DelaySec", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), d = p)) || d) || d));
    n._RF.pop()
}