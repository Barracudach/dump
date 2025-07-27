import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as u from "./TweenControl.js";

function main() {
    var b, g, y, h, N, x;
    n._RF.push({}, "f4c731KzxxAcaLpy6DlVi4H", "RedEnvelopeWelcome", void 0);
    const {
        ccclass: f,
        property: m
    } = l;
    e("default", (b = m(i), g = m(i), f((N = t((h = class extends s {
        constructor(...e) {
            super(...e), o(this, "boxNode", N, this), o(this, "bgNode", x, this)
        }
        onEnable() {
            this.boxNode.getComponent(r).opacity = 0, a.stopAllByTarget(this.boxNode), c(this.boxNode).delay(1).call((() => {
                this.boxNode.scale = new d(.7, .7, 1), u.scaleAndFade(this.boxNode, .15, p(1, 1, 1), 255)
            })).start(), this.bgNode.getComponent(r).opacity = 0, a.stopAllByTarget(this.bgNode), c(this.bgNode.getComponent(r)).delay(1).to(.15, {
                opacity: 125
            }).start()
        }
        onBtnClose() {
            a.stopAllByTarget(this.boxNode), u.scaleAndFade(this.boxNode, .15, p(d.ZERO), 0), a.stopAllByTarget(this.bgNode), c(this.bgNode.getComponent(r)).to(.1, {
                opacity: 0
            }).call((() => {
                this.node.destroy()
            })).start()
        }
    }).prototype, "boxNode", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(h.prototype, "bgNode", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = h)) || y));
    n._RF.pop()
}