import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";

function main() {
    var h, p, b, d, f, m, y, g, v;
    n._RF.push({}, "834b2pxtGBLnYBWONyWfvtH", "MTTSubfilterTextButton", void 0);
    const {
        ccclass: T,
        property: _
    } = s;
    t("MTTSubfilterTextButton", (h = T("MTTSubfilterTextButton"), p = _(o), b = _(u), d = _(r), h((y = i((m = class extends a {
        constructor(...t) {
            super(...t), this.iconPath = "textures/subfilter_icons/", e(this, "lbAmount", y, this), e(this, "icon", g, this), e(this, "layout", v, this), this._amount = -1
        }
        onLoad() {
            this.icon.node.active = !1
        }
        start() {
            this.lbAmount.node.active = this._amount >= 0
        }
        setAmount(t) {
            var i;
            l(this.lbAmount) && (this._amount = t, this.lbAmount.node.active = this._amount >= 0, this.lbAmount.string = `(${t})`, null == (i = this.node.parent.getComponent(r)) || i.updateLayout())
        }
        setIcon(t) {
            if (l(this.icon))
                if (Boolean(t)) {
                    const i = this.iconPath + t;
                    c.resMgr.loadSprite(i, [this.icon], (() => {
                        this.icon.node.active = !0, this.layout.paddingRight = 0
                    }), (() => {
                        this.icon.node.active = !1, this.layout.paddingRight = 24
                    }))
                } else this.icon.node.active = !1, this.layout.paddingRight = 24
        }
    }).prototype, "lbAmount", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = i(m.prototype, "icon", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = i(m.prototype, "layout", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = m)) || f));
    n._RF.pop()
}