import * as t from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cv.js";
import * as s from "./MTTBuyInController.js";
import * as l from "./MttHall.js";
import * as o from "./MultipleMttDetailsWindow.js";
import * as a from "./LobbyTypes.js";

function main() {
    t._RF.push({}, "e57609lEABLAI3r3YyweszX", "MTTBuyInControllerLandscape", void 0);
    e("default", class extends s {
        constructor(...e) {
            super(...e), this.KEY_EVENT_SWITCH_TO_LOBBY = "switchSceneToPokerLobby", this._isDeposit = !1, this.onHandleRevice = void 0, this.onHandleSignUp = void 0
        }
        get view() {
            return this._view
        }
        onClickedRegisterBtn() {
            if (!this.onHandleRevice || !this.onHandleSignUp) return void super.onClickedRegisterBtn();
            if (!this.view.isShowing) return;
            const e = this.model.data.password;
            var i, t;
            this.model.data.isRevive ? null == (i = this.onHandleRevice) || i.call(this, this.toolForSignUp) : null == (t = this.onHandleSignUp) || t.call(this, this.toolForSignUp, e);
            this.isClosedByUser = !1, this.hide()
        }
        setCallbackRevice(e) {
            this.onHandleRevice = e
        }
        setCallbackSignUp(e) {
            this.onHandleSignUp = e
        }
        onHideCallBack() {
            super.onHideCallBack(), this._isDeposit = !1
        }
        onDepositClicked() {
            super.onDepositClicked(), this._isDeposit = !0
        }
        isHaveEnoughBalanceToBuyin() {
            var e, i, t;
            return this._isDeposit && this.view && (null == (e = l.instance) || null == (e = e.getHallScene()) ? void 0 : e.isEarnViewShow()) && this.view.isInsufficientBalanceShowing() && (null == (i = this.hallMttDetailController) ? void 0 : i.getMttId()) === (null == (t = l.instance.getHallScene().hallPokerViewController) ? void 0 : t.getDepositMttId()) && this.view.getUserBalance() >= this.view.getBuyInValue()
        }
        updateBalance() {
            let e = !1;
            if (this.isHaveEnoughBalanceToBuyin()) {
                if (this._isDeposit = !1, i(this.model.data)) switch (this.model.data.regFrom) {
                    case a.LOBBY_HALL:
                        n.MessageCenter.send(this.KEY_EVENT_SWITCH_TO_LOBBY);
                        break;
                    case a.MTT_DETAIL_WINDOW: {
                        var t;
                        const e = null == (t = o.instance) ? void 0 : t.getWindowScene(this.model.data.tournamentId);
                        i(e) && e.focusWindow()
                    }
                }
                this.view.isShowing || (e = !0)
            }
            super.updateBalance(), e && this.show()
        }
    }), t._RF.pop()
}