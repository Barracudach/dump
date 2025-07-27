import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";

function main() {
    var y, h, g, f, m, v;
    i._RF.push({}, "906a2xOrZJGY5oOTZlq8LCQ", "RedGoldMove", void 0);
    const {
        ccclass: C,
        property: L
    } = r;
    t("default", (y = L(n), h = L(n), C((m = e((f = class extends s {
        constructor(...t) {
            super(...t), o(this, "goldList", m, this), o(this, "particle", v, this)
        }
        onLoad() {}
        runGoldMoveAction(t, e, o, i, n, r) {
            let s = this.node.getComponent(a).convertToNodeSpaceAR(t),
                y = this.node.getComponent(a).convertToNodeSpaceAR(e);
            for (let t = 0; t < this.goldList.length; t++) {
                let e = l(this.goldList[t]),
                    a = l(this.particle);
                this.node.addChild(e), this.node.addChild(a), e.active = !0, a.active = !0, e.getComponent(c).opacity = 0, a.getComponent(c).opacity = 0, e.setPosition(s), a.setPosition(s), a.getComponent(d).resetSystem();
                let h = n.x * Math.random() * 2 - n.x,
                    g = n.y * Math.random() * 2 - n.y,
                    f = p(y.x + h, y.y + g);
                u(this.node).sequence(u().delay(t * i), u().to(.1, {
                    opacity: 255
                }), u().to(o - .2, {
                    position: f
                }), u().to(.1, {
                    opacity: 0
                }), u().call((() => {
                    t == this.goldList.length - 1 && r && r()
                })), u().destroySelf()).start(), u(a).sequence(u().delay(t * i), u().to(.1, {
                    opacity: 255
                }), u().to(o - .2, {
                    position: f
                }), u().to(.1, {
                    opacity: 0
                }), u().destroySelf()).start()
            }
        }
    }).prototype, "goldList", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), v = e(f.prototype, "particle", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = f)) || g));
    i._RF.pop()
}