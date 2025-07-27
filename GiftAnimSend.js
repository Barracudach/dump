import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var p, h, u, m, d, f, y;
    n._RF.push({}, "26c26gihEtCf4I0UMNmoLPv", "GiftAnimSend", void 0);
    const {
        ccclass: D,
        property: v
    } = a;
    t("GiftAnimSend", (p = v(s), h = v(r), D(((y = class extends o {
        constructor(...t) {
            super(...t), i(this, "particle3D", d, this), i(this, "anim", f, this)
        }
        play(t, e, i) {
            let n = new l(l.ZERO);
            this.node.parent.getComponent(c).convertToNodeSpaceAR(t, n), this.node.setPosition(n), this.node.active = !0;
            let s = this.anim.clips,
                a = i ? 0 : 1;
            a < s.length && (this.anim.play(s[a].name), this.anim.on(r.EventType.FINISHED, ((t, e) => {
                this.anim.off(r.EventType.FINISHED), this._reset()
            }), this));
            let o = this.particle3D.shapeModule;
            o.scale.x !== e && (o.scale.x = e, this.particle3D.shapeModule = o), this.particle3D.stop(), this.particle3D.play()
        }
        onLoad() {
            this._reset()
        }
        start() {}
        _reset() {
            this.anim.stop(), this.particle3D.stop(), this.node.active = !1
        }
    }).g_class_name = "GiftAnimSend", d = e((m = y).prototype, "particle3D", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = e(m.prototype, "anim", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = m)) || u));
    n._RF.pop()
}