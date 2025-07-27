import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var u, p, h, f, _, b, d, m, g, y, v, w, A;
    r._RF.push({}, "0bd3eJtw8ZGAJnLbw0/eoBu", "GiftAnimOrbit", void 0);
    const {
        ccclass: z,
        property: O
    } = a;
    e("GiftAnimOrbit", (u = O(n), p = O(n), h = O(n), f = O(o), _ = O(o), z(((A = class e extends l {
        constructor(...e) {
            super(...e), i(this, "particle_heart", m, this), i(this, "particle_hitSpark", g, this), i(this, "particle_hitEffect", y, this), i(this, "node_hit", v, this), i(this, "img_starBurst", w, this)
        }
        play(e, t, i, r) {
            let n = new s(s.ZERO),
                o = new s(s.ZERO);
            this.node.parent.getComponent(c).convertToNodeSpaceAR(e, n), this.node.parent.getComponent(c).convertToNodeSpaceAR(t, o), this.node.position = n, this.node.active = !0, this.particle_heart.node.active = !0
        }
        onLoad() {
            this._reset()
        }
        start() {}
        reuse() {
            console.log(`${e.g_class_name} - pool node reuse`)
        }
        unuse() {
            console.log(`${e.g_class_name} - pool node unuse`), this._reset()
        }
        _reset() {
            this.node.active = !0
        }
    }).g_class_name = "GiftAnimOrbit", m = t((d = A).prototype, "particle_heart", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(d.prototype, "particle_hitSpark", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(d.prototype, "particle_hitEffect", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(d.prototype, "node_hit", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(d.prototype, "img_starBurst", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = d)) || b));
    r._RF.pop()
}