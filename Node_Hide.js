import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var s, a, u, d, p, h;
    n._RF.push({}, "452aeIHNLVI9pdkv81liFPb", "Node_Hide", void 0);
    const {
        ccclass: f,
        property: y
    } = c;
    e("default", (s = y(r), a = y(o), f((p = t((d = class extends l {
        constructor(...e) {
            super(...e), i(this, "nodeList", p, this), i(this, "DelaySec", h, this)
        }
        HideNode() {
            this.unscheduleAllCallbacks(), this.scheduleOnce((function() {
                for (let e = 0; e < this.nodeList.length; e++) this.nodeList[e].active = !1
            }), this.DelaySec)
        }
    }).prototype, "nodeList", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), h = t(d.prototype, "DelaySec", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), u = d)) || u));
    n._RF.pop()
}