import * as t from "./cc.js";
import * as i from "./MVCView.js";
import * as n from "./MTTBuyInComp.js";

function main() {
    t._RF.push({}, "0ef59Xk1etKnLnYdDPs22qJ", "MTTBuyInView", void 0);
    e("MTTBuyInView", class extends i {
        constructor(...e) {
            super(...e), this.comp = void 0, this.isShowing = !1, this.onClickedRegisterBtn = void 0, this.onHideCallBack = void 0, this.onTicketPaymentClicked = void 0, this.onCashPaymentClicked = void 0, this.onChangeTicketClicked = null, this.onDepositClicked = null
        }
        onAttachedEngineView(e) {
            this.comp = e.getComponent(n), this.comp.mvcView = this
        }
        getRenderer() {
            return this.comp
        }
        updateView(e) {
            this.getRenderer().updateInfo(e)
        }
        show() {
            var e;
            this.isShowing = !0, null == (e = this.getRenderer()) || e.show()
        }
        hide() {
            var e;
            this.isShowing = !1, null == (e = this.getRenderer()) || e.hide()
        }
        hideImmediate() {
            var e;
            this.isShowing = !1, null == (e = this.getRenderer()) || e.hideImmediate()
        }
        isValidObject() {
            var e;
            return (null == (e = this.getRenderer()) ? void 0 : e.isValidObject()) ?? !1
        }
        ticketPaymentClicked() {
            var e;
            null == (e = this.getRenderer()) || e.onTicketPaymentClicked()
        }
        cashPaymentClicked() {
            var e;
            null == (e = this.getRenderer()) || e.onCashPaymentClicked()
        }
        getCheckTicketGroup() {
            var e;
            return null == (e = this.getRenderer()) ? void 0 : e.getCheckTicketGroup()
        }
        setSelectedTicket(e) {
            this.getRenderer().setTicketLabel(null == e ? void 0 : e.Name)
        }
        updateBalance() {
            this.getRenderer().updateBalance()
        }
    }), t._RF.pop()
}