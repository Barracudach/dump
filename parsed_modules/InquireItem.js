import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./CurrencyValue.js";
import * as l from "./cv.js";

function main() {
    var h, g, m, d, p, f, y, b, C, T, N, D, A, S, v, w, I, _, E, L;
    n._RF.push({}, "2d254lIsaJPbZcOdBsOClcu", "InquireItem", void 0);
    const {
        ccclass: M,
        property: z
    } = a;
    t("InquireItem", (h = z(r), g = z(r), m = z([r]), d = z(r), p = z([s]), f = z([s]), y = z([s]), b = z([s]), C = z(c), M((D = e((N = class extends o {
        constructor(...t) {
            super(...t), i(this, "refNumber", D, this), i(this, "transactionDescription", A, this), i(this, "transactionAmount", S, this), i(this, "transactionTime", v, this), i(this, "depositNodes", w, this), i(this, "withdrawNodes", I, this), i(this, "failedNodes", _, this), i(this, "inProgressNodes", E, this), i(this, "localCurrencyAmount", L, this), this.msg = null, this.CurrencyConversionRate = 1
        }
        onLoad() {
            l.resMgr.adaptWidget(this.node, !0, !1), l.MessageCenter.register(l.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node)
        }
        onDestroy() {
            l.MessageCenter.unregister(l.config.CHANGE_LANGUAGE, this.node)
        }
        initLanguage() {
            this.msg && (this.msg.transactionType ? this.updateTransactionRecord() : this.updateBankTransaction())
        }
        updateBankTransaction() {
            let t = this.msg.amount > 0;
            this.updateIcon(t), this.refNumber.string = l.config.getStringData("InquireView_content_" + this.msg.source_type);
            let e = l.StringTools.serverGoldToShowString(this.msg.amount),
                i = (t ? "+" : "") + e;
            this.transactionAmount.forEach((t => t.string = i)), this.transactionTime.string = l.StringTools.formatTime(this.msg.create_time, l.Enum.eTimeType.Hour_Minute), this.transactionDescription.node.active = !1, this.transactionDescription.string = "", this.localCurrencyAmount && this.localCurrencyAmount.node.active && this.localCurrencyAmount.updateVal(e, null, null, null, this.CurrencyConversionRate), this.failedNodes.forEach((t => t.active = !1)), this.inProgressNodes.forEach((t => t.active = !1))
        }
        updateTransactionRecord() {
            let t = 1 == this.msg.sign;
            "Deposit" != this.msg.transactionType && "Bonus" != this.msg.transactionType || (t = !0), this.updateIcon(t);
            let e = "";
            this.msg.paymentMethodDetails ? e = this.msg.paymentMethodDetails : this.msg.transactionId && (e = this.msg.transactionId, e.length > 12 && (e = "**** " + e.substr(-12)));
            let i = this.getStringKey(this.msg.transactionType);
            "None" != this.msg.paymentOption ? (this.refNumber.string = l.config.getStringData(i, !1, i) + "  " + l.config.getStringData(this.msg.paymentOption, !1, this.msg.paymentOption), this.transactionDescription.node.active = !0, this.transactionDescription.string = e) : (this.refNumber.string = l.config.getStringData(i, !1, i), this.transactionDescription.node.active = !1, this.transactionDescription.string = "");
            let n = Date.parse(this.msg.createdAt),
                r = (t ? "+" : "-") + l.dataHandler.getUserData().getCurrencySymbol() + l.StringTools.formatNumberThousand(l.StringTools.toFixed(this.msg.realMoneyAmount, 2));
            0 == this.msg.realMoneyAmount && (r = l.dataHandler.getUserData().getCurrencySymbol() + "0"), this.transactionAmount.forEach((t => t.string = r)), this.transactionTime.string = l.StringTools.formatTime(n, l.Enum.eTimeType.Hour_Minute, !0), this.localCurrencyAmount && this.localCurrencyAmount.node.active && this.localCurrencyAmount.updateVal(String(this.msg.realMoneyAmount), null, null, null, this.CurrencyConversionRate), this.failedNodes.forEach((t => t.active = "Failed" == this.msg.transactionStatus || "Rejected" == this.msg.transactionStatus)), this.inProgressNodes.forEach((t => t.active = "InProgress" == this.msg.transactionStatus || "Pending" == this.msg.transactionStatus)), this.scheduleOnce((() => {
                this.node.getComponentsInChildren(u).forEach((t => t.updateLayout()))
            }))
        }
        updateIcon(t) {
            this.depositNodes.forEach((e => e.active = t)), this.withdrawNodes.forEach((e => e.active = !t))
        }
        updateSVReuseData(t, e) {
            e.length <= 0 || e.length - 1 < t || (this.msg = e[t], this.initLanguage())
        }
        updateItemData(t, e, i = 1) {
            this.msg = e, this.CurrencyConversionRate = i, this.initLanguage()
        }
        getStringKey(t) {
            switch (t) {
                case "Withdrawal":
                    return "Exchange_titile_text";
                case "Bonus":
                    return "UITitle12";
                case "Credit":
                    return "roleInfo_root_houseOwer_Panel_setBring_Button";
                case "BuyIn":
                    return "UITitle32";
                default:
                    return t
            }
        }
    }).prototype, "refNumber", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(N.prototype, "transactionDescription", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(N.prototype, "transactionAmount", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), v = e(N.prototype, "transactionTime", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(N.prototype, "depositNodes", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), I = e(N.prototype, "withdrawNodes", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), _ = e(N.prototype, "failedNodes", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), E = e(N.prototype, "inProgressNodes", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), L = e(N.prototype, "localCurrencyAmount", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = N)) || T));
    n._RF.pop()
}