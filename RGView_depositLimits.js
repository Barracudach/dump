import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cv.js";
import * as p from "./RGView.js";
import * as c from "./FormView.js";

function main() {
    var l, u, g, a, m, d;
    i._RF.push({}, "5032eroLa1PIK7CD+ddxYe+", "RGView_depositLimits", void 0);
    const {
        ccclass: k,
        property: h
    } = r;
    t("RGView_depositLimits", (l = h(c), u = h(s), k((m = e((a = class extends p {
        constructor(...t) {
            super(...t), o(this, "formLimits", m, this), o(this, "toggleBlockDeposit", d, this)
        }
        onEnable() {
            this.updateBlockDepositToggle()
        }
        updateBlockDepositToggle() {
            this.toggleBlockDeposit.isChecked = n.rg.blockDeposit, this.toggleBlockDeposit.interactable = !n.rg.blockDeposit
        }
        onBtnConfirmClick() {
            n.AudioMgr.playButtonSound("button_click.mp3"), n.rg.blockDeposit ? n.popUp.showMsgI18n({
                txt: "ResponsibleGaming_deposit_limit_blocked_msg",
                msgType: n.Enum.ToastType.ToastTypeWarning
            }) : this.toggleBlockDeposit.isChecked ? n.http.sendRequestV2(n.config.getStringData("WEB_API_RG_BLOCK_DEPOSIT", !0), {}, this.onSetBlockDepositSuccess.bind(this), this.onSetBlockDepositError.bind(this), n.http.HttpRequestType.POST) : this.formLimits.submit()
        }
        onSetBlockDepositSuccess(t) {
            n.popUp.showMsgI18n({
                txt: "ResponsibleGaming_deposit_limit_block_success",
                msgType: n.Enum.ToastType.ToastTypeSuccess
            }), n.rg.blockDeposit = !0, n.MessageCenter.send("rg_limits_updated"), super.goBack(!1)
        }
        onSetBlockDepositError(t) {
            n.popUp.showFirstServerError(t)
        }
    }).prototype, "formLimits", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = e(a.prototype, "toggleBlockDeposit", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = a)) || g));
    i._RF.pop()
}