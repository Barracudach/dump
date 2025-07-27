import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as y from "./cv.js";
import * as f from "./PaymentOption.js";
import * as O from "./DesignSystemRegularButton.js";
import * as g from "./DesignSystemButtonBase.js";

function main() {
    var b, V, P, C, w, T, S, v, I, B, D, E;
    n._RF.push({}, "1d3ccapdGNID696CseedKWo", "PaymentViewOptions", void 0);
    const {
        ccclass: W,
        property: k
    } = p;
    let L = t("TransactionType", function(t) {
        return t[t.Deposit = 0] = "Deposit", t[t.Withdraw = 1] = "Withdraw", t
    }({}));
    t("PaymentViewOptions", (b = k({
        type: o,
        tooltip: "Option template option"
    }), V = k({
        type: s,
        tooltip: "Amount input"
    }), P = k({
        type: a(L),
        tooltip: "Confirmation button label"
    }), C = k({
        type: O,
        tooltip: "Confirmation button"
    }), w = k({
        type: l,
        tooltip: "Content scroll view"
    }), W((v = e((S = class extends r {
        constructor(...t) {
            super(...t), i(this, "optionTemplate", v, this), i(this, "amountInput", I, this), i(this, "transactionType", B, this), i(this, "confirmButton", D, this), i(this, "contentScrollView", E, this), this.options = [], this.MIN = 20, this.selectedValue = 0, this.selectedPaymentProvider = void 0, this.selectedVendor = void 0
        }
        onEnable() {
            if (this.onValidated(), !y.appConfig.isLandscapeLayout) {
                null !== this.contentScrollView && this.contentScrollView.scrollTo(c(0, 1), .1);
                this.optionTemplate.parent.getComponent(h).updateLayout()
            }
        }
        onLoad() {
            this.onPaymentOptionClicked = this.onPaymentOptionClicked.bind(this), this.onBtnAvailableChipClicked = this.onBtnAvailableChipClicked.bind(this), this.onInputChanged = this.onInputChanged.bind(this), this.onValidated = this.onValidated.bind(this), this.checkValidate = this.checkValidate.bind(this), this.getPaymentOptionInfo = this.getPaymentOptionInfo.bind(this)
        }
        start() {
            this.transactionType === L.Withdraw ? this.requestWithdrawOptions() : this.transactionType === L.Deposit && this.requestDepositOptions()
        }
        isValidValue(t) {
            return t >= this.MIN
        }
        checkValidate() {
            return this.isValidValue(this.selectedValue) && void 0 !== this.selectedPaymentProvider
        }
        onValidated() {
            const t = this.checkValidate();
            this.confirmButton && (this.confirmButton.btnState = t ? g.normal : g.disabled)
        }
        onInputChanged() {
            const t = parseInt(this.amountInput.string);
            this.selectedValue = t, this.onValidated()
        }
        onBtnAvailableChipClicked(t, e) {
            this.selectedValue = e, this.onValidated()
        }
        onPaymentOptionClicked(t, e) {
            this.selectedPaymentProvider = e, this.selectedVendor = t, this.options.forEach(((t, e) => {
                null != t && t.getComponent(f).setChecked(!1)
            })), this.onValidated()
        }
        getPaymentOptionInfo() {
            return {
                paymentOption: {
                    name: this.selectedPaymentProvider,
                    vendor: this.selectedVendor
                }
            }
        }
        clearOptions() {
            this.options.forEach((t => {
                t.parent = null, t.destroy()
            })), this.options = []
        }
        processOptions(t) {
            this.clearOptions(), t.forEach((t => {
                null !== t.options && void 0 !== t.options && t.options.forEach((e => {
                    this.setPaymentOption(t, e)
                }))
            })), y.appConfig.isLandscapeLayout || null !== this.contentScrollView && this.contentScrollView.scrollTo(c(0, 1), .1);
            this.optionTemplate.parent.getComponent(h).updateLayout()
        }
        setPaymentOption(t, e) {
            if (null !== this.optionTemplate) {
                let i = null;
                i = u(this.optionTemplate), i.parent = this.optionTemplate.parent, i.active = !0, this.options.push(i);
                let n = i.getComponent(f);
                n.setLabel(e), n.setVendor(t.vendor), n.loadIcon(e), n.registerClickedEvent(this.onPaymentOptionClicked, this);
                const o = y.appConfig.isLandscapeLayout ? 3 : 2,
                    s = i.parent.getComponent(d).contentSize,
                    a = i.parent.getComponent(h).spacingX,
                    l = (s.width - a * (o - 1)) / o,
                    p = i.getComponent(d).height;
                n.setSize(m(l, p))
            }
        }
        requestDepositOptions() {
            let t = y.config.getStringData("WEB_API_PAYMENTS_DEPOSIT_OPTIONS", !0);
            y.http.sendRequestV2(t, null, this.onGetOptionsSuccess.bind(this), this.onGetOptionsFailure.bind(this), y.http.HttpRequestType.GET)
        }
        requestWithdrawOptions() {
            let t = y.config.getStringData("WEB_API_PAYMENTS_WITHDRAWAL_OPTIONS", !0);
            y.http.sendRequestV2(t, null, this.onGetWithdrawOptionsSuccess.bind(this), this.onGetWithdrawOptionsFailure.bind(this), y.http.HttpRequestType.GET)
        }
        onGetOptionsSuccess(t) {
            this.processOptions(t.vendorPaymentOptions)
        }
        onGetOptionsFailure(t) {}
        onGetWithdrawOptionsSuccess(t) {
            this.processOptions(t.vendorPaymentOptions)
        }
        onGetWithdrawOptionsFailure(t) {}
    }).prototype, "optionTemplate", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(S.prototype, "amountInput", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(S.prototype, "transactionType", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return L.Withdraw
        }
    }), D = e(S.prototype, "confirmButton", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(S.prototype, "contentScrollView", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = S)) || T));
    n._RF.pop()
}