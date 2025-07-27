import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var p, d, u, m;
    n._RF.push({}, "ef732GkVy5LopCUbZmM5P3i", "GameChipsDrop", void 0);
    const {
        ccclass: C,
        property: y
    } = a;
    i("default", (p = y(o), C((m = t((u = class extends s {
        constructor(...i) {
            super(...i), e(this, "chipsDrop", m, this), this.animationNode = null, this.shouldInvokeCallback = !1
        }
        showBetAnimation(i, t, e = 0) {
            this.shouldInvokeCallback = !0, 0 == e ? this.playAnimation(i, t) : this.scheduleOnce(this.playAnimation.bind(this, i, t), e)
        }
        showBetAnimReverst(i, t = (() => {})) {
            this.playAnimation(i, t, !0)
        }
        playAnimation(i, t, e = !1) {
            if (this.animationNode || (this.animationNode = l(this.chipsDrop), this.animationNode.setPosition(h(0, 0, 0)), this.animationNode.scale = h(1, 1, 1), this.node.addChild(this.animationNode)), r(this.animationNode)) {
                const n = this.animationNode.getComponent(c);
                n.on(c.EventType.FINISHED, (function(i) {
                    this.clearAll(t)
                }), this), n.play("chipsDrop_" + i);
                let o = n.getState("chipsDrop_" + i);
                e && r(o) && (o.wrapMode = 36)
            }
        }
        removeCallback() {
            this.shouldInvokeCallback = !1
        }
        clearAll(i = null) {
            if (null == this.animationNode) return;
            this.animationNode.getComponent(c).stop(), this.animationNode.destroy(), this.animationNode = null, this.shouldInvokeCallback && i && i()
        }
        cleanAllChildren() {
            this.clearAll(), this.unscheduleAllCallbacks(), this.node.destroyAllChildren(), this.node.removeAllChildren()
        }
    }).prototype, "chipsDrop", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = u)) || d));
    n._RF.pop()
}