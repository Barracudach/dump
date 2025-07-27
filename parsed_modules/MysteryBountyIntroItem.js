import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./MysteryBountyChestSprite.js";
import * as u from "./PlayAnim_MB.js";

function main() {
    var c, p, y, h, b, f, d, g;
    r._RF.push({}, "2bb9faKZf5Bgqnvwly4Jklz", "MysteryBountyIntroItem", void 0);
    const {
        ccclass: m,
        property: z
    } = s;
    t("default", (c = z(n), p = z(a), y = z(n), m((f = e((b = class extends l {
        constructor(...t) {
            super(...t), i(this, "prizeLabel", f, this), i(this, "chestSprite", d, this), i(this, "qtyLabel", g, this), this._chestType = null
        }
        start() {
            const t = this.node.getComponent(u);
            o(t) && t.playAnimation()
        }
        setChest(t) {
            this._chestType = t, this.chestSprite.updateSprite(t)
        }
        setQty(t) {
            this.qtyLabel.string = t.toString()
        }
        setPrizeValue(t) {
            this.prizeLabel.string = t
        }
    }).prototype, "prizeLabel", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = e(b.prototype, "chestSprite", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = e(b.prototype, "qtyLabel", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = b)) || h));
    r._RF.pop()
}