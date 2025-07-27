import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./ColorsystemLobbyV2.js";
import * as r from "./ThemeSystem.js";
import * as l from "./LobbyTools.js";
import * as h from "./MTTBuyInComp.js";
import * as y from "./FormatParser.js";
import * as f from "./CurrencyValue.js";
import * as p from "./Enum.js";
import * as d from "./Enum.js";
import * as m from "./cv.js";

function main() {
    var b, T, C, B, _, g, k, v, L, I, P, O, S, w, z, V;
    i._RF.push({}, "9fbf5qPacZJ3KZau9uR7Qgq", "MTTBuyInCompLandscape", void 0);
    const {
        ccclass: j,
        property: F
    } = s;
    e("default", (b = F(o), T = F(a), C = F(o), B = F(o), _ = F(r), g = F(r), k = F(f), j((I = t((L = class extends h {
        constructor(...e) {
            super(...e), n(this, "mainPanel", I, this), n(this, "contentLayout", P, this), n(this, "noTickets_objets", O, this), n(this, "insufficient_funds_objects", S, this), n(this, "cashOutlineTheme", w, this), n(this, "ticketOutlineTheme", z, this), n(this, "balanceCurrency", V, this)
        }
        onEnable() {
            this.checkBalanceToReload()
        }
        show() {
            this.node.active = !0, l.zoomIn(this.node, this.mainPanel), this.updateCountryCost()
        }
        hide() {
            l.zoomOut(this.node, this.mainPanel, (() => {
                this.onHideCallBack(), this.node.active = !1
            }))
        }
        updateCountryCost() {
            if (this.CountryCurency && this.CountryCurency.activeInHierarchy) {
                let {
                    regFee: e,
                    srvFee: t
                } = this.model.data.hallMttDetailData;
                const n = this.CountryCurency.getComponent(f),
                    i = this.currencyType != p.None ? this.currencyType : p.USD;
                n && (n.updateProps(!0), n.updateVal(y.ThousandPointFormat(e + t), i))
            }
        }
        updateInfo(e) {
            super.updateInfo(e), this.updateContentLayout()
        }
        updateContentLayout() {
            this.noTickets_objets.forEach((e => {
                e.active = this.noTicketNode.active
            })), this.insufficient_funds_objects.forEach((e => {
                e.active = this.insufficientBalanceNode.active
            })), u(this.contentLayout) && this.scheduleOnce((() => {
                this.contentLayout.node.active = !1, this.contentLayout.node.active = !0
            }), .1)
        }
        updateBuyInButtons() {
            if (u(this.cashOutlineTheme) && u(this.ticketOutlineTheme)) {
                const e = this._paymentType == d.Cash,
                    t = this._paymentType == d.Ticket;
                this.cashOutlineTheme.colorSchemeLobbyV2 = e ? c.BuyIn_OptionBorder_Selected : c.BuyIn_OptionBorder, this.ticketOutlineTheme.colorSchemeLobbyV2 = t ? c.BuyIn_OptionBorder_Selected : c.BuyIn_OptionBorder, this.cashOutlineTheme.applyTheme(), this.ticketOutlineTheme.applyTheme()
            }
        }
        isInsufficientBalanceShowing() {
            var e;
            return null == (e = this.insufficientBalanceNode) ? void 0 : e.active
        }
        checkBalanceToReload() {
            this.isInsufficientBalanceShowing() && this.userBalance > 0 && this.updateInfo(this.model)
        }
        onCashPaymentClicked() {
            super.onCashPaymentClicked(), this.isInsufficientBalanceShowing() && this.updateContentLayout()
        }
        onTicketPaymentClicked() {
            const e = this.isInsufficientBalanceShowing();
            super.onTicketPaymentClicked(), e !== this.isInsufficientBalanceShowing() && this.updateContentLayout()
        }
        setBalance(e) {
            u(this.balanceCurrency) && (this.balanceCurrency.value = m.StringTools.numberToString(e))
        }
    }).prototype, "mainPanel", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(L.prototype, "contentLayout", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(L.prototype, "noTickets_objets", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), S = t(L.prototype, "insufficient_funds_objects", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), w = t(L.prototype, "cashOutlineTheme", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(L.prototype, "ticketOutlineTheme", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = t(L.prototype, "balanceCurrency", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = L)) || v));
    i._RF.pop()
}