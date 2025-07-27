import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var c, u, p, f, h, M, d, k;
    r._RF.push({}, "c45d18gTaZGqqK6xYqoX+gf", "SetSpriteMask_MB", void 0);
    const {
        ccclass: y,
        property: S
    } = o;
    e("default", (c = S(a), u = S(n), p = S(s), y((M = t((h = class extends l {
        constructor(...e) {
            super(...e), i(this, "Mask", M, this), i(this, "NewSpriteMask", d, this), i(this, "delay", k, this)
        }
        SetSpriteMask() {
            this.scheduleOnce((function() {
                this.Mask.spriteFrame = this.NewSpriteMask
            }), this.delay)
        }
    }).prototype, "Mask", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = t(h.prototype, "NewSpriteMask", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(h.prototype, "delay", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), f = h)) || f));
    r._RF.pop()
}