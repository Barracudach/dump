import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var s, u, p, f, S, d, h;
    i._RF.push({}, "afb06r/pu9Kfa4JRrulenq7", "SetScale", void 0);
    const {
        ccclass: b,
        property: y
    } = o;
    e("default", (s = b("SetScale"), u = y(n), p = y(c), s((d = t((S = class extends l {
        constructor(...e) {
            super(...e), r(this, "nodeList", d, this), r(this, "Scale", h, this)
        }
        SetScale() {
            for (let e = 0; e < this.nodeList.length; e++) this.nodeList[e].setScale(this.Scale)
        }
    }).prototype, "nodeList", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), h = t(S.prototype, "Scale", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return a(0, 0, 1)
        }
    }), f = S)) || f));
    i._RF.pop()
}