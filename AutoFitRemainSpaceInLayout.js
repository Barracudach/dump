import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";

function main() {
    var h, d, l, p, g, y, f;
    i._RF.push({}, "2fb8d6G3SRCBoxwiI94D19W", "AutoFitRemainSpaceInLayout", void 0);
    const {
        ccclass: m,
        property: C,
        executeInEditMode: L,
        menu: b,
        executionOrder: z
    } = s;
    e("AutoFitRemainSpaceInLayout", (h = b("Custom UI/AutoFitRemainSpaceInLayout"), d = C(n), l = C(r), m(p = L(p = h((y = t((g = class extends a {
        constructor(...e) {
            super(...e), o(this, "sourceNode", y, this), o(this, "layout", f, this)
        }
        onEnable() {
            this.resizeLayout(), c(this.sourceNode, !0) && this.sourceNode.on(n.EventType.SIZE_CHANGED, this.resizeLayout, this)
        }
        onDisable() {
            c(this.sourceNode, !0) && this.sourceNode.off(n.EventType.SIZE_CHANGED, this.resizeLayout, this)
        }
        resizeLayout() {
            const e = this.node.parent.getComponent(r);
            if (e) {
                let t = e.paddingLeft + e.paddingRight;
                for (let o = 0; o < this.node.parent.children.length; o++) {
                    const i = this.node.parent.children[o];
                    i !== this.node && i.active && (t += i.getComponent(u).width + e.spacingX)
                }
                const o = this.node.parent.getContentSize().width;
                o > t && (this.node.getComponent(u).width = o - t), this.resizeChildren()
            }
        }
        resizeChildren() {
            const e = this.node.children.filter((e => e.active)),
                t = e.length;
            if (t > 0) {
                let o = (this.node.getComponent(u).width - (t - 1) * this.layout.spacingX) / t;
                o > this.node.getComponent(u).height && (o = this.node.getComponent(u).height), e.forEach((e => {
                    e.getComponent(u).width = o, e.getComponent(u).height = o
                }))
            }
        }
    }).prototype, "sourceNode", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(g.prototype, "layout", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = g)) || p) || p) || p));
    i._RF.pop()
}