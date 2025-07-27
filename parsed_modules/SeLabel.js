import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var c, u, p, d, h, b, f, y;
    r._RF.push({}, "14aaaW8hVxEnZ09rs5pIV/t", "SeLabel", void 0);
    const {
        ccclass: g,
        property: L
    } = s;
    e("default", (c = L(n), u = L(o), p = L(l), g((b = t((h = class extends a {
        constructor(...e) {
            super(...e), i(this, "nodeList", b, this), i(this, "Word", f, this), i(this, "delay", y, this)
        }
        SetLabel() {
            this.scheduleOnce((function() {
                for (let e = 0; e < this.nodeList.length; e++) this.nodeList[e].string = this.Word.toString()
            }), this.delay)
        }
    }).prototype, "nodeList", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), f = t(h.prototype, "Word", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return "Hello"
        }
    }), y = t(h.prototype, "delay", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), d = h)) || d));
    r._RF.pop()
}