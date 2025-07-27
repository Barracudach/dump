import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";
import * as r from "./CountDownButton.js";
import * as l from "./EditBoxValidator.js";
import * as u from "./cv.js";
import * as d from "./PhoneField.js";

function main() {
    var h, p, c, g, f, b, C, I, v, y;
    i._RF.push({}, "6dfa6L4KJpI0pf6El+tBc+7", "BindNewDevice", void 0);
    const {
        ccclass: m,
        property: B
    } = s;
    t("BindNewDevice", (h = B(o), p = B(d), c = B(l), g = B(r), m((C = e((b = class extends a {
        constructor(...t) {
            super(...t), n(this, "infoLabel", C, this), n(this, "phoneInput", I, this), n(this, "vcodeInput", v, this), n(this, "getVerifyCodeBtn", y, this), this._userId = "", this._mobileNr = "", this._mobileNrHiden = "", this.onBackCallback = null
        }
        onEnable() {
            this.init(), u.MessageCenter.register("BindDevice_vcode_succ", this.onVCodeCallBack.bind(this), this.node), u.MessageCenter.register(u.config.CHANGE_LANGUAGE, this.updateInfoText.bind(this), this.node)
        }
        onDisable() {
            u.MessageCenter.unregister("BindDevice_vcode_succ", this.node), u.MessageCenter.unregister(u.config.CHANGE_LANGUAGE, this.node)
        }
        init() {
            this._userId != u.dataHandler.getUserData().getUserIdS() ? (this._userId = u.dataHandler.getUserData().getUserIdS(), this.initPhoneInput(), this.initInfo()) : this.updateInfoText(), this.vcodeInput.reset()
        }
        initInfo() {
            let t = u.StringTools.getArrayLength(this._mobileNr);
            if (t >= 5) {
                let e = "",
                    n = t - 5;
                for (let t = 0; t < n; t++) e += "*";
                this._mobileNrHiden = this._mobileNr.substr(0, 3) + e + this._mobileNr.substr(-2)
            }
            this.updateInfoText()
        }
        updateInfoText() {
            this.infoLabel.string = u.StringTools.formatC(u.config.getStringData("BindDevice_guard_text_full"), this._mobileNrHiden)
        }
        initPhoneInput() {
            this.phoneInput.updateAreaCode(u.dataHandler.getUserData().areaCodeWithPlus, !1), this.phoneInput.updateAreaCodeInteractable(!1), this.phoneInput.reset(!0), this._mobileNr != u.dataHandler.getUserData().mobile && (this._mobileNr = u.dataHandler.getUserData().mobile, this.getVerifyCodeBtn.reset())
        }
        onVCodeCallBack() {
            this.getVerifyCodeBtn.startCountDown(!0)
        }
        onBtnGetCode() {
            this.getVerifyCodeBtn.isStillCounting || (u.AudioMgr.playButtonSound("button_click.mp3"), this.phoneInput.valid ? u.httpHandler.requestGetVCodeByDevice(this.phoneInput.value, this.phoneInput.areaCodeValue, this.onGetCodeSuccess.bind(this)) : this.showValidationMsg({
                title: u.config.getStringData("Attention"),
                txt: this.phoneInput.error,
                msgType: u.Enum.ToastType.ToastTypeWarning
            }, this.phoneInput))
        }
        onGetCodeSuccess(t) {
            "100071" == u.httpHandler.getResponseCode(t) ? this.showValidationMsg({
                title: u.config.getStringData("Attention"),
                txt: u.config.getStringData("ServerErrorCode100071"),
                msgType: u.Enum.ToastType.ToastTypeWarning
            }, this.phoneInput) : u.httpHandler.responseGetVCodeByDevice(t)
        }
        showValidationMsg(t, e) {
            e.showInvalidEffectsOnServerError(), u.popUp.showMsg(t)
        }
        onBtnBack() {
            u.AudioMgr.playButtonSound("back_button.mp3"), this.onBackCallback ? this.onBackCallback() : u.action.showAction(this.node, u.action.eMoveActionDir.EMAD_TO_RIGHT, u.action.eMoveActionType.EMAT_FADE_OUT)
        }
        onBtnConfirm() {
            u.AudioMgr.playButtonSound("button_click.mp3");
            let t = null;
            this.phoneInput.valid ? this.vcodeInput.valid || (t = this.vcodeInput) : t = this.phoneInput, null == t ? u.httpHandler.requestBindSafeDevice(this.phoneInput.value, this.phoneInput.areaCodeValue, this.vcodeInput.value, this.onConfirmSuccess.bind(this)) : this.showValidationMsg({
                title: u.config.getStringData("Attention"),
                txt: t.error,
                msgType: u.Enum.ToastType.ToastTypeWarning
            }, t)
        }
        onConfirmSuccess(t) {
            "100017" == u.httpHandler.getResponseCode(t) ? this.showValidationMsg({
                title: u.config.getStringData("Attention"),
                txt: u.config.getStringData("ServerErrorCode100017"),
                msgType: u.Enum.ToastType.ToastTypeWarning
            }, this.vcodeInput) : u.httpHandler.responseBindSafeDevice(t)
        }
    }).prototype, "infoLabel", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(b.prototype, "phoneInput", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(b.prototype, "vcodeInput", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(b.prototype, "getVerifyCodeBtn", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = b)) || f));
    i._RF.pop()
}