import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";
import * as c from "./DesignSystemRegularButton.js";
import * as d from "./DesignSystemButtonBase.js";

function main() {
    var b, m, p, h, f, g, y, A, S, v, B, E, D, x;
    i._RF.push({}, "3b90awBog1DobHIw9sX2fNP", "AmountField", void 0);
    const {
        ccclass: P,
        property: T
    } = a;
    let w = (b = P("PredefinedAmountData"), m = T(c), b((f = e((h = class {
        constructor() {
            n(this, "tab", f, this), n(this, "amount", g, this)
        }
        updateCurrencySymbol(t) {
            this.tab.node.getComponentsInChildren(u).forEach((e => e.string = (t + " " + this.amount).trim()))
        }
    }).prototype, "tab", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = e(h.prototype, "amount", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), p = h)) || p);
    t("AmountField", (y = T(o), A = T(r), S = T([w]), P((E = e((B = class extends s {
        constructor(...t) {
            super(...t), n(this, "amountEditBox", E, this), n(this, "tabsLayout", D, this), n(this, "predefinedAmounts", x, this), this.activeTab = null
        }
        get amount() {
            return this.checkInputAmount(this.amountEditBox)
        }
        start() {
            let t = l.dataHandler.getUserData().getCurrencySymbol();
            this.predefinedAmounts.forEach((e => {
                e.updateCurrencySymbol(t), e.tab.node.on("click", this.predefinedAmountSelected.bind(this, e))
            })), this.reset()
        }
        reset() {
            this.amountEditBox.string = "0", this.activatePredefinedAmountTab(null)
        }
        predefinedAmountSelected(t) {
            l.AudioMgr.playButtonSound("tab.mp3"), this.amountEditBox.string = t.amount.toString(), this.activatePredefinedAmountTab(t)
        }
        activatePredefinedAmountTab(t) {
            null != this.activeTab && (this.activeTab.tab.btnState = d.normal), null != t && (t.tab.btnState = d.pressed), this.activeTab = t
        }
        onEditDidChanged(t, e) {
            this.activatePredefinedAmountTab(null)
        }
        onEditDidEnded(t, e) {
            this.checkInputAmount(t)
        }
        checkInputAmount(t) {
            let e = 0;
            return "" == t.string ? e = 0 : (e = parseFloat(t.string), (null == e || isNaN(e)) && (e = 0)), t.string = e.toString(), e
        }
    }).prototype, "amountEditBox", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(B.prototype, "tabsLayout", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(B.prototype, "predefinedAmounts", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), v = B)) || v));
    i._RF.pop()
}