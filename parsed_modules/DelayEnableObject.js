import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as c from "./cc.js";

function main() {
    var a, l, s, u, p;
    i._RF.push({}, "c63dcj4nApAxrOwAwo+7Xb4", "DelayEnableObject", void 0);
    const {
        ccclass: d,
        property: f
    } = o;
    e("default", (a = f(n), d((u = t((s = class extends c {
        constructor(...e) {
            super(...e), r(this, "refNode", u, this), r(this, "delayTimeMs", p, this)
        }
        start() {
            setTimeout((() => {
                this.refNode.active = !0
            }), this.delayTimeMs)
        }
    }).prototype, "refNode", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = t(s.prototype, "delayTimeMs", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), l = s)) || l));
    i._RF.pop()
}