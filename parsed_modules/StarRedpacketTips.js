import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as d from "./cv.js";

function main() {
    var p, u, h, f;
    o._RF.push({}, "ad74cNZA8FEEKVFExh4Iums", "StarRedpacketTips", void 0);
    const {
        ccclass: g,
        property: b
    } = s;
    t("default", (p = b(n), g((f = e((h = class extends a {
        constructor(...t) {
            super(...t), i(this, "label", f, this)
        }
        onLoad() {
            d.resMgr.adaptWidget(this.node, !0)
        }
        show(t) {
            this.label.string = t, this.node.active = !0, this.node.setPosition(this.node.position.x, d.config.WIDTH + d.config.WIDTH / 2);
            const e = c(this.node).to(.2, {
                    position: r(d.config.WIDTH / 2, this.node.position.y)
                }, {
                    easing: "backOut"
                }),
                i = c(this.node).to(.2, {
                    position: r(-d.config.WIDTH / 2, this.node.position.y)
                }, {
                    easing: "backOut"
                });
            c(this.node).sequence(e, c(this.node).delay(2), i, c(this.node).call((() => {
                l.stopAllByTarget(this.node), this.node.active = !1
            }))).start()
        }
    }).prototype, "label", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = h)) || u));
    o._RF.pop()
}