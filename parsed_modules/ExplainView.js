import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";

function main() {
    var d, p, g, u, b, m;
    n._RF.push({}, "ec2e26QJidOmaopqb+U3+b7", "ExplainView", void 0);
    const {
        ccclass: f,
        property: x
    } = s;
    t("default", (d = x(o), p = x(o), f((b = e((u = class extends r {
        constructor(...t) {
            super(...t), i(this, "bg", b, this), i(this, "item", m, this), this.lab_arr = [], this.maxWidth = 0, this.isShow = !1
        }
        show(t, e, i, n) {
            if (e <= 0) return;
            let o = [];
            for (let i = 0; i < e; i++) o.push(c.config.getStringData(t + i));
            this.isShow = !0, c.action.createShieldLayer(this.node.parent, "explainView_shaield", n - 1, void 0, void 0, (t => {
                c.action.removeShieldLayer(this.node.parent, "explainView_shaield"), this.node.active = !1, this.isShow = !1
            })), this.node.active = !0;
            let s = this.node.parent.getComponent(a).convertToNodeSpaceAR(i);
            this.node.setPosition(s), this.node.setSiblingIndex(n), e = this.lab_arr.length;
            let r = o.length;
            if (r < e)
                for (let t = e - 1; t >= r; t--) {
                    this.lab_arr[t].removeFromParent(), this.lab_arr.pop()
                } else
                    for (let t = 0; t < r - e; t++) {
                        let t = h(this.item);
                        this.bg.addChild(t), this.lab_arr.push(t)
                    }
            this.maxWidth = 0;
            let d = 0;
            for (let t = 0; t < r; t++) {
                let e = this.lab_arr[t],
                    i = c.resMgr.getLabelStringSize(e.getComponent(l), o[t]);
                d += i.height, i.width > this.maxWidth && (this.maxWidth = i.width), e.active = !0
            }
            this.bg.getComponent(a).setContentSize(100 + this.maxWidth, d + 10 * (r - 1) + 30), c.resMgr.adaptWidget(this.bg, !0);
            let p = .5 * (100 + this.maxWidth) - i.x + 20;
            p > 0 ? this.bg.setPosition(p, this.bg.getPosition().y) : this.bg.setPosition(0, this.bg.getPosition().y)
        }
    }).prototype, "bg", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = e(u.prototype, "item", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = u)) || g));
    n._RF.pop()
}