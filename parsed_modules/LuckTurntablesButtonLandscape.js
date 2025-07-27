import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./LuckTurntablesButton.js";
import * as u from "./cv.js";

function main() {
    var a, c, d, v, f, h, b, E, g, B, H, y;
    o._RF.push({}, "806e11cqYVCHqWfqqcRuUeY", "LuckTurntablesButtonLandscape", void 0);
    const {
        ccclass: m,
        property: w
    } = l;
    e("default", (a = w(r), c = w(r), d = w(r), v = w(r), f = w(i), m((E = t((b = class extends p {
        constructor(...e) {
            super(...e), n(this, "openEnvelop", E, this), n(this, "openEnvelopHover", g, this), n(this, "closeEnvelop", B, this), n(this, "closeEnvelopHover", H, this), n(this, "redEnvelopBtn", y, this)
        }
        updateBg(e) {
            let t, n;
            e ? (t = this.closeEnvelop, n = this.closeEnvelopHover) : (t = this.openEnvelop, n = this.openEnvelopHover), this.redEnvelopBtn.hoverSprite = n, this.redEnvelopBtn.normalSprite = this.redEnvelopBtn.pressedSprite = this.redEnvelopBtn.disabledSprite = t
        }
        drawRedPackage() {
            if (super.drawRedPackage(), this.isMiniGame) {
                let e = this.redeff_node.getParent().convertToNodeSpaceAR(new s(u.config.WIDTH / 2, u.config.HEIGHT / 2));
                this.redeff_node.setPosition(e)
            } else this.redeff_node.setPosition(-330, -400)
        }
    }).prototype, "openEnvelop", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(b.prototype, "openEnvelopHover", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(b.prototype, "closeEnvelop", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(b.prototype, "closeEnvelopHover", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(b.prototype, "redEnvelopBtn", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = b)) || h));
    o._RF.pop()
}