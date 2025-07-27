import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var c, u, a, p, d, h, f, y;
    n._RF.push({}, "80dd0ysbkFMmaXthUdisGDD", "SetPosition", void 0);
    const {
        ccclass: b,
        property: g
    } = s;
    t("default", (c = g(o), u = g(r), a = g(r), b((h = e((d = class extends l {
        constructor(...t) {
            super(...t), i(this, "nodeList", h, this), i(this, "x", f, this), i(this, "y", y, this)
        }
        SetPosition() {
            for (let t = 0; t < this.nodeList.length; t++) this.nodeList[t].setPosition(this.x, this.y, 0)
        }
    }).prototype, "nodeList", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), f = e(d.prototype, "x", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), y = e(d.prototype, "y", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), p = d)) || p));
    n._RF.pop()
}