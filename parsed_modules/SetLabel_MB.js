import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var c, u, p, d, b, f, h, y;
    r._RF.push({}, "de2ebjCtrVPsrVqfzzr76LW", "SetLabel_MB", void 0);
    const {
        ccclass: g,
        property: L
    } = s;
    e("default", (c = L(n), u = L(o), p = L(l), g((f = t((b = class extends a {
        constructor(...e) {
            super(...e), i(this, "nodeList", f, this), i(this, "Word", h, this), i(this, "delay", y, this)
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
    }), h = t(b.prototype, "Word", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return "Hello"
        }
    }), y = t(b.prototype, "delay", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), d = b)) || d));
    r._RF.pop()
}