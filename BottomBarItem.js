import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var b, g, m, d, U, f, _, y, B, F;
    i._RF.push({}, "4dcbccUMlNDma3NgBhhAzcV", "BottomBarItem", void 0);
    const {
        ccclass: T,
        property: z
    } = n;
    t("default", (b = z(l), g = z(l), m = z(o), d = z(o), T((_ = e((f = class extends s {
        constructor(...t) {
            super(...t), r(this, "bg", _, this), r(this, "logo", y, this), r(this, "title", B, this), r(this, "subTitle", F, this), this._redirectUrl = null
        }
        onLoad() {
            this.node.on(a.TOUCH_END, this._onclick, this)
        }
        setBottomBarData(t) {
            this._redirectUrl = t.redirectUrl, this.title && (this.title.string = t.title), this.subTitle && (this.subTitle.string = t.subTitle), this.bg && t.bgUrl && this._updateImgFromUrl(this.bg, t.bgUrl), this.logo && t.logoUrl && this._updateImgFromUrl(this.logo, t.logoUrl)
        }
        _updateImgFromUrl(t, e) {
            u.load(e, (function(e, r) {
                e ? c(e.message || e) : (t.spriteFrame = new p, t.spriteFrame.texture = r)
            }))
        }
        _onclick() {
            this.redirectUser()
        }
        redirectUser() {
            h.openURL(this._redirectUrl)
        }
    }).prototype, "bg", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(f.prototype, "logo", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(f.prototype, "title", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(f.prototype, "subTitle", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = f)) || U));
    i._RF.pop()
}