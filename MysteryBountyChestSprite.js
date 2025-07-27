import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var a, c, u, h, y, f, S, b, m, g, d, F, v, z, B;
    r._RF.push({}, "340ffrqPo5E4Z8yfQcU4fCf", "MysteryBountyChestSprite", void 0);
    const {
        ccclass: C,
        property: T
    } = p;
    let w = (a = C("MysteryBountyChestSet"), c = T({
        visible: !0,
        tooltip: "chestType"
    }), u = T({
        type: s,
        visible: !0,
        tooltip: "spriteFrame"
    }), a((f = t((y = class {
        constructor() {
            i(this, "chestType", f, this), i(this, "spriteFrame", S, this)
        }
    }).prototype, "chestType", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), S = t(y.prototype, "spriteFrame", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = y)) || h);
    e("default", (b = T(n), m = T(n), g = T({
        type: [w]
    }), C((v = t((F = class extends o {
        constructor(...e) {
            super(...e), i(this, "sprite", v, this), i(this, "greySprite", z, this), i(this, "chestSet", B, this)
        }
        setChestState(e) {
            this.greySprite && (this.greySprite.node.active = e), this.sprite.node.active = !e
        }
        updateSprite(e) {
            if (!this.sprite) return void l("Failed to update localized sprite, sprite component is invalid!");
            let t = this.getSpriteFrameByType(e);
            !t && this.chestSet[0] && (t = this.chestSet[0].spriteFrame), this.sprite.spriteFrame = t
        }
        getSpriteFrameByType(e) {
            for (let t = 0; t < this.chestSet.length; ++t)
                if (this.chestSet[t].chestType === e) return this.chestSet[t].spriteFrame
        }
    }).prototype, "sprite", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(F.prototype, "greySprite", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(F.prototype, "chestSet", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), d = F)) || d));
    r._RF.pop()
}