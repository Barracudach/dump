import * as e from "./cc.js";
import * as i from "./cv.js";
import * as s from "./Enum.js";
import * as o from "./MVCController.js";
import * as l from "./MVCModel.js";
import * as n from "./MTTBuyInView.js";
import * as h from "./MttHallCheckTicket.js";
import * as a from "./LobbyTools.js";
import * as c from "./MTTBuyInViewLandscape.js";

function main() {
    e._RF.push({}, "e0b340yBHJHpoX2XP173GyP", "MTTBuyInController", void 0);
    class d extends l {
        constructor(...t) {
            super(...t), this.data = void 0
        }
    }
    t("MTTBuyInModel", d);
    t("default", class extends o {
        constructor(t, e) {
            super(i.appConfig.isLandscapeLayout ? c : n, d, e), this.hallMttDetailController = void 0, this.paymentType = s.Cash, this.toolSelected = null, this.toolForSignUp = null, this.tools = [], this.isClosedByUser = !0, this.checkTicketGroup = null, this._onHideCallback = null, this.hallMttDetailController = t
        }
        onInitializeEnded() {
            this.checkTicketGroup = this.view.getCheckTicketGroup().getComponent(h), this.checkTicketGroup.registerOnClickConfirmCallback((t => {
                this.view.show(), this.setSelectedTicket(t)
            })), this.checkTicketGroup.registerOnClickBackCallback((() => this.view.show())), this.view.onClickedRegisterBtn = this.onClickedRegisterBtn.bind(this), this.view.onTicketPaymentClicked = this.onTicketPaymentClicked.bind(this), this.view.onCashPaymentClicked = this.onCashPaymentClicked.bind(this), this.view.onHideCallBack = this.onHideCallBack.bind(this), this.view.onChangeTicketClicked = this.onChangeTicketClicked.bind(this), this.view.onDepositClicked = this.onDepositClicked.bind(this), i.MessageCenter.unregister("update_gold", this), i.MessageCenter.register("update_gold", this.updateBalance.bind(this), this), a.registerMessage("timeStampLateRegUpdated", this.onTimeStampLateRegUpdated.bind(this), this)
        }
        onTimeStampLateRegUpdated(t) {
            this.model.data.timeStampLateReg = t.timeStampLateReg, this.view.updateView(this.model)
        }
        destroy() {
            a.unregisterMessage("timeStampLateRegUpdated", this), super.destroy()
        }
        onClickedRegisterBtn() {
            if (!this.view.isShowing) return;
            const t = this.model.data.password;
            this.model.data.isRevive ? this.hallMttDetailController.handleRevive(this.toolForSignUp) : this.hallMttDetailController.handleSignUp(this.toolForSignUp, t), this.isClosedByUser = !1, this.hide()
        }
        onHideCallBack() {
            var t;
            a.unregisterMessage("timeStampLateRegUpdated", this), null == (t = this.hallMttDetailController) || t.setPopupIsCalled(!1), this.isClosedByUser && i.authenticator.showDelayedPromo(), this.isClosedByUser = !0, this._onHideCallback && this._onHideCallback()
        }
        hide() {
            this.view.hide()
        }
        hideImmediate() {
            this.view.hideImmediate()
        }
        show(t, e = null) {
            a.registerMessage("timeStampLateRegUpdated", this.onTimeStampLateRegUpdated.bind(this), this), t && (this.model.data = t), this.tools = this.model.data.signUpBoxProperty.tools, this._onHideCallback = e;
            const i = this.tools.length > 0 ? this.tools[0] : null;
            this.checkTicketGroup.tool = i, this.setSelectedTicket(i), this.view.updateView(this.model), this.view.show(), this.toolSelected ? this.view.ticketPaymentClicked() : this.view.cashPaymentClicked()
        }
        setSelectedTicket(t) {
            this.toolSelected = t, this.view.setSelectedTicket(t), this.paymentType == s.Ticket && (this.toolForSignUp = t)
        }
        updateBalance() {
            this.view.updateBalance()
        }
        onTicketPaymentClicked() {
            return this.paymentType = this.toolSelected ? s.Ticket : s.Cash, this.toolForSignUp = this.toolSelected, this.paymentType
        }
        onCashPaymentClicked() {
            return this.paymentType = s.Cash, this.toolForSignUp = null, this.paymentType
        }
        onChangeTicketClicked() {
            this.hide(), this.checkTicketGroup.show(), this.checkTicketGroup.updateItems(this.tools)
        }
        onDepositClicked() {
            cc_mtt.vv.ConsoleLog.log("onDepositClicked", this.hallMttDetailController.getMttId()), i.MessageCenter.send("MttHall_Go_Deposit", this.hallMttDetailController.getMttId()), i.SHOP.RechargeClick()
        }
        isShowing() {
            var t;
            return !(null == (t = this.view.engineView) || !t.active)
        }
    }), e._RF.pop()
}