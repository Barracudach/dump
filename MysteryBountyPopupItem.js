import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./MysteryBountyChestSprite.js";

function main() {
    var u, h, y, b, g, L, d, f, z, S;
    r._RF.push({}, "a6501lbJ5tBtJLmJEfVR/Mi", "MysteryBountyPopupItem", void 0);
    const {
        ccclass: m,
        property: I
    } = s;
    e("default", (u = I(n), h = I(n), y = I(c), b = I(n), m((d = t((L = class extends o {
        constructor(...e) {
            super(...e), i(this, "prizeLabel", d, this), i(this, "prizeLabelInGrey", f, this), i(this, "chestSprite", z, this), i(this, "qtyLabel", S, this), this._chestType = null
        }
        start() {}
        reset() {
            this.node.children[0].getComponent(l).opacity = 0
        }
        setChest(e) {
            this._chestType = e, "grey" == e ? this.chestSprite.setChestState(!0) : (this.chestSprite.updateSprite(e), this.chestSprite.setChestState(!1))
        }
        setQty(e) {
            this.qtyLabel.string = e.toString(), "grey" == this._chestType ? this.qtyLabel.node.getComponent(a).color = p(127, 127, 127) : this.qtyLabel.node.getComponent(a).color = p(255, 255, 255)
        }
        setPrizeValue(e) {
            this.prizeLabel.string = e.toString(), this.prizeLabelInGrey.string = e.toString(), "grey" == this._chestType ? (this.prizeLabelInGrey.node.active = !0, this.prizeLabel.node.active = !1) : (this.prizeLabel.node.active = !0, this.prizeLabelInGrey.node.active = !1)
        }
    }).prototype, "prizeLabel", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(L.prototype, "prizeLabelInGrey", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(L.prototype, "chestSprite", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(L.prototype, "qtyLabel", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = L)) || g));
    r._RF.pop()
}