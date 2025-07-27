import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";

function main() {
    var o, a, u, p, h, y, d;
    r._RF.push({}, "3aa26+1a7hFKoq2IXVxm+eB", "Particle_2D_MB", void 0);
    const {
        ccclass: f,
        property: D,
        menu: m
    } = c;
    e("default", (o = m("Animation/Particle2D_MB"), a = D(n), u = D(l), f(p = o((y = t((h = class extends s {
        constructor(...e) {
            super(...e), i(this, "nodeList", y, this), i(this, "DelaySec", d, this)
        }
        playParticles() {
            this.unscheduleAllCallbacks(), this.scheduleOnce((function() {
                for (let e = 0; e < this.nodeList.length; e++) this.nodeList[e].resetSystem()
            }), this.DelaySec)
        }
    }).prototype, "nodeList", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), d = t(h.prototype, "DelaySec", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), p = h)) || p) || p));
    r._RF.pop()
}