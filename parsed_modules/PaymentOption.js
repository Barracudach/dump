import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var h, b, m, f, v, y, C, k;
    n._RF.push({}, "e66c2qHMKtDopNgasv44mT9", "PaymentOption", void 0);
    const {
        ccclass: g,
        property: N
    } = l, P = {
        PayPal: "PayPal",
        Neteller: "Neteller",
        FastBankTransfer: "Fast Bank Transfer",
        CreditCard: "CreditCard",
        DebitCard: "DebitCard",
        QIWI: "QIWI",
        Yandex: "Yandex"
    };
    e("PaymentOption", (h = N({
        type: o,
        tooltip: "Background of button"
    }), b = N({
        type: r,
        tooltip: "Icon of button"
    }), m = N({
        type: a,
        tooltip: "Label of button"
    }), g((y = t((v = class extends s {
        constructor(...e) {
            super(...e), i(this, "background", y, this), i(this, "icon", C, this), i(this, "label", k, this), this.onClickEventName = "click", this.providerName = null, this.vendor = null, this.uiTransform = null
        }
        onLoad() {
            this.uiTransform = this.node.getComponent(c)
        }
        loadIcon(e) {
            d.loadRes("textures/lobby/payment_options/" + e, u, this.onLoadIconCallBack.bind(this))
        }
        onLoadIconCallBack(e, t) {
            e ? p("failed to load payment provider's icon", e) : this.icon && (this.icon.spriteFrame = t)
        }
        setLabel(e) {
            const t = P[e];
            this.label.string = null != t ? t : e, this.providerName = e
        }
        setVendor(e) {
            this.vendor = e
        }
        getProviderName() {
            return this.providerName
        }
        setChecked(e) {
            this.background.active = e
        }
        registerClickedEvent(e, t) {
            this.node.on(this.onClickEventName, e, t)
        }
        onClicked(e) {
            this.node.emit(this.onClickEventName, this.vendor, this.providerName), this.setChecked(!0)
        }
        setSize(e) {
            this.uiTransform.setContentSize(e)
        }
    }).prototype, "background", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(v.prototype, "icon", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(v.prototype, "label", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = v)) || f));
    n._RF.pop()
}