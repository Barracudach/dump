import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var a, u, p, d, f, h;
    n._RF.push({}, "72ae2ADJ+pIeKF25pp9Ed2H", "SetScale_MB", void 0);
    const {
        ccclass: S,
        property: y
    } = o;
    e("default", (a = y(r), u = y(c), S((f = t((d = class extends l {
        constructor(...e) {
            super(...e), i(this, "nodeList", f, this), i(this, "Scale", h, this)
        }
        SetScale() {
            for (let e = 0; e < this.nodeList.length; e++) this.nodeList[e].scale = new s(this.Scale.x, this.Scale.y, 1)
        }
    }).prototype, "nodeList", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), h = t(d.prototype, "Scale", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new c(0, 0)
        }
    }), p = d)) || p));
    n._RF.pop()
}