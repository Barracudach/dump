import * as e from "./cc.js";
import * as s from "./cc.js";
import * as n from "./Enum.js";
import * as a from "./cv.js";
import * as o from "./GameViewLoader.js";
import * as i from "./MTTConnector.js";
import * as c from "./JackpotSngSignUpPopUp.js";

function main() {
    var h;
    e._RF.push({}, "3b14d/lhaZLcZWIhlBVeSgE", "JackpotSngBuyInLandscape", void 0);
    const {
        ccclass: u,
        property: r
    } = s;
    t("default", u(h = class extends c {
        init() {
            this.gameViewLoader = new o, i.instance.cv.resMgr.adaptWidget(this.node), this.paymentTicketRow.active = !1, this.paymentMoneyRow.active = !1, this.showPromoOnBuyInClose = !0
        }
        show(t = !0) {
            this._show(t), this.setBuyInCount(this.buyInCount)
        }
        _show(t) {
            this._allowRegister = !0, this.node.active = !0
        }
        hide(t) {
            this.node.active = !1, this.showPromoOnBuyInClose && a.authenticator.showDelayedPromo(), this.showPromoOnBuyInClose = !0
        }
        showLimitErrorPopup(t) {
            a.popUp.showMsg({
                txt: t,
                isTwoBtn: !1,
                sureLabel: a.config.getStringData("OKAY"),
                msgType: a.Enum.ToastType.ToastTypeDefault
            })
        }
        setBuyInCount(t) {
            const e = cc_mtt.vv.DataManager.getSignUpToolsByRegFee(this.data.Detail.RegFee),
                s = null != this.data && null != this.data.Detail ? this.data.Detail.RegFee : 0;
            this.buyInCount = t, this.numOfGameLabel.string = `${t} ${a.config.getStringData("GamePageTitle")}`;
            const o = Math.min(e.length, t),
                i = t - o;
            if (o > 0) {
                var c;
                this.paymentTicketRow.active = !0;
                const t = null == (c = n[this.currency]) ? void 0 : c.symbol;
                this.paymentTicketLabel.string = o + " x " + t + s
            } else this.paymentTicketRow.active = !1;
            i > 0 ? (this.paymentMoneyRow.active = !0, this.updateCostLabel(s, i)) : this.paymentMoneyRow.active = !1, this.updateMxCost(s, t)
        }
        setErrorMessage(t, e) {
            a.popUp.showMsg({
                title: t,
                txt: e,
                isTwoBtn: !1,
                sureCallback: () => {}
            })
        }
    }) || h);
    e._RF.pop()
}