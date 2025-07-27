import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";

function main() {
    var o, l, a, u;
    i._RF.push({}, "ac729Omu21A5LJGH4jDIc/K", "Particle_2D", void 0);
    const {
        ccclass: p,
        property: d
    } = s;
    e("default", (o = d(n), p((u = t((a = class extends c {
        constructor(...e) {
            super(...e), r(this, "nodeList", u, this)
        }
        playParticles() {
            for (let e = 0; e < this.nodeList.length; e++) this.nodeList[e].resetSystem()
        }
    }).prototype, "nodeList", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), l = a)) || l));
    i._RF.pop()
}