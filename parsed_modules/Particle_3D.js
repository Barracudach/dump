import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";

function main() {
    var l, c, a, p;
    s._RF.push({}, "02d33PAHcNMOalyLsajkAjq", "Particle_3D", void 0);
    const {
        ccclass: u,
        property: d
    } = o;
    t("default", (l = d(r), u((p = e((a = class extends n {
        constructor(...t) {
            super(...t), i(this, "nodeList", p, this)
        }
        playParticles3D() {
            for (let t = 0; t < this.nodeList.length; t++) this.nodeList[t].stop(), this.nodeList[t].play()
        }
        stopParticles3D() {
            for (let t = 0; t < this.nodeList.length; t++) this.nodeList[t].stop()
        }
    }).prototype, "nodeList", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), c = a)) || c));
    s._RF.pop()
}