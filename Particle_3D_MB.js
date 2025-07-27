import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";

function main() {
    var o, a, u, h, p, d, f;
    s._RF.push({}, "bf4cb6csylAVKJguzhJ5gCG", "Particle_3D_MB", void 0);
    const {
        ccclass: y,
        property: D,
        menu: b
    } = c;
    e("default", (o = b("Animation/Particle3D"), a = D(l), u = D(n), y(h = o((d = t((p = class extends r {
        constructor(...e) {
            super(...e), i(this, "nodeList", d, this), i(this, "DelaySec", f, this)
        }
        playParticles3D() {
            this.unscheduleAllCallbacks(), this.scheduleOnce((function() {
                for (let e = 0; e < this.nodeList.length; e++) this.nodeList[e].stop(), this.nodeList[e].play()
            }), this.DelaySec)
        }
        stopParticles3D() {
            this.unscheduleAllCallbacks(), this.scheduleOnce((function() {
                for (let e = 0; e < this.nodeList.length; e++) this.nodeList[e].stop()
            }), this.DelaySec)
        }
    }).prototype, "nodeList", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), f = t(p.prototype, "DelaySec", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), h = p)) || h) || h));
    s._RF.pop()
}