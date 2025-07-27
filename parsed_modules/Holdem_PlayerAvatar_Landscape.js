import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./Holdem_PlayerAvatar_ts.js";

function main() {
    var o, s, u, c, p, d;
    a._RF.push({}, "e506aPxfaxAwIDUHHC+3NKJ", "Holdem_PlayerAvatar_Landscape", void 0);
    const {
        ccclass: f,
        property: y
    } = l;
    e("default", (o = y(i), s = y(i), f((p = r((c = class extends n {
        constructor(...e) {
            super(...e), t(this, "blurSprite", p, this), t(this, "normalSprite", d, this)
        }
        setBlur(e) {
            this.sprite.setSharedMaterial(e ? this.blurSprite : this.normalSprite, 0)
        }
    }).prototype, "blurSprite", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = r(c.prototype, "normalSprite", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = c)) || u));
    a._RF.pop()
}