import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var s, u, p, m, y, h, d, f;
    n._RF.push({}, "8b0fciQot9E5JcJe8JLZjGc", "PlayAnim_Name", void 0);
    const {
        ccclass: b,
        property: A
    } = o;
    e("default", (s = A(a), u = A(r), p = A(l), b((h = i((y = class extends c {
        constructor(...e) {
            super(...e), t(this, "Animator", h, this), t(this, "PlayClipName", d, this), t(this, "delay", f, this)
        }
        PlayAnimName() {
            this.scheduleOnce((function() {
                this.Animator.play(this.PlayClipName)
            }), this.delay)
        }
        PlayAdditive_AnimName() {
            this.scheduleOnce((function() {
                this.Animator.crossFade(this.PlayClipName)
            }), this.delay)
        }
    }).prototype, "Animator", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = i(y.prototype, "PlayClipName", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), f = i(y.prototype, "delay", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), m = y)) || m));
    n._RF.pop()
}