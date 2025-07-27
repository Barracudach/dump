import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var u, s, p, S, h, f, b, y;
    i._RF.push({}, "7e9b7ixmglPv79IuSyf3S0p", "SetSpriteFrame_MB", void 0);
    const {
        ccclass: m,
        property: g
    } = c;
    e("default", (u = g(n), s = g(l), p = g(a), m((f = t((h = class extends o {
        constructor(...e) {
            super(...e), r(this, "Source", f, this), r(this, "Target", b, this), r(this, "DelaySec", y, this)
        }
        SetSpriteFrame() {
            this.unscheduleAllCallbacks(), this.scheduleOnce((function() {
                this.Target.spriteFrame = this.Source
            }), this.DelaySec)
        }
    }).prototype, "Source", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = t(h.prototype, "Target", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(h.prototype, "DelaySec", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), S = h)) || S));
    i._RF.pop()
}