import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var h, d, f, S, b, y;
    o._RF.push({}, "be60eIyvO1KoKmfZ1moKTF0", "ButtonScaler", void 0);
    const {
        ccclass: D,
        property: g
    } = s;
    t("ButtonScaler", (h = g(i), d = g(i), D((b = e((S = class extends c {
        constructor(...t) {
            super(...t), n(this, "pressedScale", b, this), n(this, "transDuration", y, this), this.initScale = r(a.ZERO), this.button = null, this.scaleDownAction = null, this.scaleUpAction = null
        }
        onLoad() {
            var t = this;

            function e(e) {
                p.stopAllByTarget(this.node), t.scaleUpAction.start()
            }
            t.initScale = this.node.scale, t.button = t.getComponent(l), t.scaleDownAction = u(this.node).to(t.transDuration, {
                scale: new a(t.pressedScale, t.pressedScale, t.pressedScale)
            }), t.scaleUpAction = u(this.node).to(t.transDuration, {
                scale: t.initScale
            }), this.node.on("touchstart", (function(e) {
                p.stopAllByTarget(this.node), t.scaleDownAction.start()
            }), this.node), this.node.on("touchend", e, this.node), this.node.on("touchcancel", e, this.node)
        }
    }).prototype, "pressedScale", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1
        }
    }), y = e(S.prototype, "transDuration", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), f = S)) || f));
    o._RF.pop()
}