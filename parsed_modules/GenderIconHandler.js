import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as l from "./cc.js";
import * as a from "./cc.js";

function main() {
    var c, o, s, u, p, d;
    n._RF.push({}, "dc468aM311A8L2vctUY2TrJ", "GenderIconHandler", void 0);
    const {
        ccclass: f,
        property: m
    } = l;
    e("default", (c = m(i), o = m(i), f((p = t((u = class extends a {
        constructor(...e) {
            super(...e), r(this, "male", p, this), r(this, "female", d, this)
        }
        setGender(e) {
            this.female.active = e, this.male.active = !e
        }
    }).prototype, "male", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = t(u.prototype, "female", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), s = u)) || s));
    n._RF.pop()
}