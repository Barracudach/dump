import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./CountryFlagSpriteFrame.js";
import * as c from "./AreaItem.js";

function main() {
    var d, h, p, f, g, b, y, m, v, F;
    r._RF.push({}, "a7c90mnECZI5oIfkdFDQ+Zk", "AreaItemLandscape", void 0);
    const {
        ccclass: L,
        property: E
    } = o;
    e("default", (d = E(a), h = E(a), p = E(n), f = E(a), L((y = t((b = class extends c {
        constructor(...e) {
            super(...e), i(this, "contryCode", y, this), i(this, "area", m, this), i(this, "flag", v, this), i(this, "bg", F, this)
        }
        updateSVReuseData(e, t) {
            super.updateSVReuseData(e, t), this.flag.spriteFrame = null, l.loadFlag(this.countryCode, this.onSpriteFrameLoaded.bind(this), this.onLoadFlagError.bind(this))
        }
        getCountryNode() {
            return this.contryCode
        }
        getAreaCodeNode() {
            return this.area
        }
        onSpriteFrameLoaded(e) {
            s(this.flag, !0) && (this.flag.spriteFrame = e)
        }
        onLoadFlagError(e) {
            this.flag.spriteFrame = null
        }
        onLoad() {
            this.node.on(u.MOUSE_ENTER, this.onMouseOver, this), this.node.on(u.MOUSE_LEAVE, this.onMouseLeave, this)
        }
        onMouseOver() {
            1 == this._canTouch && 0 == this.bg.active && (this.bg.active = !0)
        }
        onMouseLeave() {
            1 != this._canTouch && 1 != this.bg.active || (this.bg.active = !1)
        }
    }).prototype, "contryCode", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(b.prototype, "area", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(b.prototype, "flag", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(b.prototype, "bg", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = b)) || g));
    r._RF.pop()
}