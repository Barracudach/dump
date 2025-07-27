import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./CurrencyManager.js";
import * as p from "./Enum.js";
import * as f from "./cv.js";
import * as b from "./TweenControl.js";

function main() {
    var _, g, w, y, v, T, I, d, S, C, m, E;
    i._RF.push({}, "7ae33NZnf1KSLClOwtjt5Lk", "MexicoExchangeInfo", void 0);
    const {
        ccclass: M,
        property: O
    } = r;
    t("default", (_ = O(o), g = O(o), w = O(o), y = O(o), v = O(c), M((d = e((I = class extends s {
        constructor(...t) {
            super(...t), n(this, "button", d, this), n(this, "container", S, this), n(this, "openIcon", C, this), n(this, "closeIcon", m, this), n(this, "lblTitle", E, this), this._isShow = !1
        }
        start() {
            this.lblTitle.string = f.StringTools.formatC(f.config.getStringData("Mexico_disclaimer_currency_conversion_title"), Math.round(u.getInstance().convert(p.CNY, p.MXN, 1))), this.button.on(o.EventType.TOUCH_END, (() => {
                this._isShow ? this._hide() : this._show()
            })), this.container.on(o.EventType.TOUCH_END, (() => {
                this._isShow ? this._hide() : this._show()
            })), this._isShow = !1, this.openIcon.active = !0, this.closeIcon.active = !1
        }
        close(t) {
            t ? this._hide() : (l.stopAllByTarget(this.container), this.container.setScale(new a(a.ZERO)), this._isShow = !1, this.openIcon.active = !0, this.closeIcon.active = !1)
        }
        _show() {
            l.stopAllByTarget(this.container), b.scaleTo(this.container, .2, new a(a.ONE), h.backOut), this._isShow = !0, this.openIcon.active = !1, this.closeIcon.active = !0
        }
        _hide() {
            l.stopAllByTarget(this.container), b.scaleTo(this.container, .2, new a(a.ZERO), h.backInOut), this._isShow = !1, this.openIcon.active = !0, this.closeIcon.active = !1
        }
    }).prototype, "button", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(I.prototype, "container", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(I.prototype, "openIcon", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = e(I.prototype, "closeIcon", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(I.prototype, "lblTitle", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = I)) || T));
    i._RF.pop()
}