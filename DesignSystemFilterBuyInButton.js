import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./ThemeSystem.js";
import * as c from "./DesignSystemButtonBase.js";
import * as a from "./DesignSystemRegularButton.js";

function main() {
    var b, h, y, p, d, m, f, L, C, B, g, I;
    i._RF.push({}, "e8ecf0yhQtGC6ToqOFB/EsR", "DesignSystemFilterBuyInButton", void 0);
    const {
        ccclass: S,
        property: N,
        executeInEditMode: D,
        playOnFocus: F,
        executionOrder: _,
        requireComponent: k,
        menu: v
    } = l;
    e("default", (b = v("Design System/Design System Filter BuyIn"), h = _(0), y = N(o), p = N(o), d = N(o), m = N(r), S(f = b(f = D(f = F(f = h((C = t((L = class extends a {
        constructor(...e) {
            super(...e), n(this, "buyinLabel1", C, this), n(this, "buyinLabel2", B, this), n(this, "buyinLabel3", g, this), n(this, "currencyIcon", I, this)
        }
        onLoad() {
            super.onLoad(), this.btnStyle != c.filterBtn && this.btnStyle != c.pokerGroupFilterBuyInBtnV2 && (this.btnStyle = c.filterBtn), this._checkNodeCompoenet(this.buyinLabel1), this._checkNodeCompoenet(this.buyinLabel2), this._checkNodeCompoenet(this.buyinLabel3), this._checkNodeCompoenet(this.currencyIcon)
        }
        applyThemeNodeColors() {
            if (super.applyThemeNodeColors(), this.label1.renderedNode)
                if (this.btnStyle == c.filterBtn) {
                    let e = this.label1.renderedNode.getComponent(s).color;
                    this.buyinLabel1 && this.setColor(this.buyinLabel1.node, e), this.buyinLabel2 && this.setColor(this.buyinLabel2.node, e), this.buyinLabel3 && this.setColor(this.buyinLabel3.node, e), this.currencyIcon && this.setColor(this.currencyIcon.node, e)
                } else if (this.btnStyle == c.pokerGroupFilterBuyInBtnV2) {
                let e = this.label2.renderedNode.getComponent(s).color;
                this.buyinLabel2 && this.setColor(this.buyinLabel2.node, e), this.buyinLabel3 && this.setColor(this.buyinLabel3.node, e), this.currencyIcon && this.setColor(this.currencyIcon.node, e)
            }
        }
        _checkNodeCompoenet(e) {
            e && e.node.getComponent(u) && e.node.removeComponent(u)
        }
    }).prototype, "buyinLabel1", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(L.prototype, "buyinLabel2", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(L.prototype, "buyinLabel3", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(L.prototype, "currencyIcon", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = L)) || f) || f) || f) || f) || f));
    i._RF.pop()
}