import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var u, a, p, d, h, f;
    o._RF.push({}, "6a526ktuZVPlqCuhOhr6x6G", "CustomToggleHandler", void 0);
    const {
        ccclass: g,
        property: b
    } = l;
    e("default", (u = b(r), a = b(i), g((h = t((d = class extends s {
        constructor(...e) {
            super(...e), n(this, "selectNode", h, this), n(this, "button", f, this)
        }
        setActive(e) {
            for (let t = 0; t < this.selectNode.length; t++) {
                this.selectNode[t].active = e
            }
        }
        initializeBase(e, t, n) {
            let o = new c;
            o.target = e, o.component = t, o.handler = n, this.button.clickEvents.push(o)
        }
    }).prototype, "selectNode", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), f = t(d.prototype, "button", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = d)) || p));
    o._RF.pop()
}