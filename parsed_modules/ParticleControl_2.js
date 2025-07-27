import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var n, a, p, u, h, y, P;
    r._RF.push({}, "48b72GOKypILYBYc6ijyNpe", "ParticleControl_2", void 0);
    const {
        ccclass: g,
        property: f
    } = s;
    t("ParticleControl2", (n = g("ParticleControl2"), a = f(c), p = f(c), n((y = e((h = class extends o {
        constructor(...t) {
            super(...t), i(this, "particle", y, this), this._reset = !1, i(this, "switch", P, this)
        }
        update() {
            this.switch.active !== this._reset && (this._reset = this.switch.active, this.toggleParticlePlay())
        }
        toggleParticlePlay() {
            var t = this.particle.getComponent(l);
            this.switch.active ? t.resetSystem() : t.stopSystem()
        }
    }).prototype, "particle", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(h.prototype, "switch", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = h)) || u));
    r._RF.pop()
}