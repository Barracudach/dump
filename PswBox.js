import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as l from "./cc.js";
import * as P from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as w from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as I from "./ImpokerHall.js";
import * as g from "./Translator.js";
import * as T from "./mttconfig.js";
import * as E from "./httpApis.js";
import * as R from "./NodePage.js";
import * as b from "./md5.mjs_cjs=&original=.js";
import * as W from "./Pb.js";
import * as f from "./CommonTools.js";
import * as D from "./TweenControl.js";

function main() {
    var m, C, O, B, L, A, N, v, U, k, M, F, x, y, H, z, G, K, V, $, j, q, X, Q, Z, J, Y, tt;
    i._RF.push({}, "0215dmOQKlI75TV0/oSAEtz", "PswBox", void 0);
    const {
        ccclass: et,
        property: st
    } = l, it = n({
        FIRST_SET: 0,
        SECOND_SET: 1,
        INPUT: 2,
        RESET: 3
    });
    t("PswBox", (m = st(o), C = st(o), O = st(o), B = st(r), L = st(r), A = st(r), N = st(a), v = st(a), U = st(a), k = st(r), M = st(r), F = st(h), x = st(r), et((z = e((H = class extends c {
        constructor(...t) {
            super(...t), s(this, "blockLayer", z, this), s(this, "popUp", G, this), s(this, "resetSpace", K, this), s(this, "title", V, this), s(this, "tips", $, this), s(this, "warning", j, this), s(this, "resetPswBtn", q, this), s(this, "okBtn", X, this), s(this, "cancelBtn", Q, this), s(this, "resetLabel", Z, this), s(this, "cancelLabel", J, this), s(this, "inputBox", Y, this), s(this, "codeLabel", tt, this), this._hallScript = null, this._actionSpeed = .2, this._popStatus = 0, this._titleStr = void 0, this.firstPsw = "", this._okCb = void 0, this.resetStr = void 0, this.smsInputCount = 5, this.needPendingMsg = !0
        }
        onLoad() {
            this._titleStr = g("WITHDRAW_POPUP.TITLE.WITHDRAW"), this.resetStr = g("WITHDRAW_POPUP.RESET_LABEL"), this._hallScript = W.instance.getParentScene(u, this.node).getComponentInChildren(I), this.popUp.scale = new p(1e-4, 1e-4, 1e-4), this.blockLayer.getComponent(w).opacity = 1
        }
        start() {}
        update(t) {
            this.resetLabel.node.active && this.showResetCoolDown()
        }
        callPopUp(t, e, s = !0) {
            this._titleStr = t, this.needPendingMsg = s, cc_mtt.vv.DataManager.userData.WithdrawPassword.length > 0 ? this.showInfoInput() : this.showInfoFirstSet(), e && e instanceof Function && (this._okCb = e), this.zoomIn()
        }
        resetPopUp() {
            this.showTitle(""), this.showTips(""), this.showWarning(""), this.showResetPsw(!1), this.resetInput(), this.firstPsw = ""
        }
        resetInput() {
            this.inputBox.string = "", this.codeLabel.string = "", this.okBtn.interactable = !1
        }
        updateStatus(t) {
            this._popStatus = t
        }
        setInputBox() {
            this._popStatus === it.INPUT ? (this.codeLabel.spacingX = 73, this.inputBox.inputFlag = h.InputFlag.PASSWORD) : (this.codeLabel.spacingX = 60, this.inputBox.inputFlag = h.InputFlag.DEFAULT)
        }
        showTitle(t) {
            this.title.string = t
        }
        showTips(t) {
            this.tips.string = t
        }
        showWarning(t = "") {
            this.warning.string = t
        }
        showResetCoolDown() {
            Date.now() <= cc_mtt.vv.DataManager.withdrawResetTimer ? (this.resetPswBtn.interactable = !1, this.resetLabel.string = `${this.resetStr}(${Math.floor((cc_mtt.vv.DataManager.withdrawResetTimer-Date.now())/1e3)})`) : (this.resetLabel.string = this.resetStr, this.resetPswBtn.interactable = !0)
        }
        showResetPsw(t, e = g("WITHDRAW_POPUP.RESET_LABEL")) {
            this.resetPswBtn.node.active = t, this.resetSpace.active = !t, t && (this.resetStr = e)
        }
        showCancelLabel(t = g("MESSAGE_DIALOG_BLOCKER.CANCEL")) {
            this.cancelLabel.string = t
        }
        enableOkBtn() {
            this._popStatus === it.RESET ? this.okBtn.interactable = this.inputBox.string.length >= 6 && this.smsInputCount > 0 : this.okBtn.interactable = this.inputBox.string.length >= 6
        }
        editChangedCall() {
            let t = this.inputBox.string;
            t = t.replace(/[^0-9]/g, ""), this.inputBox.string = t, this._popStatus === it.INPUT ? this.codeLabel.string = "*".repeat(t.length) : this.codeLabel.string = t, this.enableOkBtn()
        }
        setSmsInputCount(t = 5) {
            this.smsInputCount = t
        }
        setFocus() {
            S.isNative && this.inputBox.setFocus()
        }
        getSmsErrorStr(t) {
            try {
                return g(`SMS_WARNING.PASSWORD.${t.toUpperCase()}`)
            } catch (t) {
                return cc_mtt.vv.ConsoleLog.log(`PswBox parse sms message error:\n${t}`), g("SMS_WARNING.PASSWORD.DEFAULT")
            }
        }
        showInfoFirstSet() {
            _(this.node) && (this.updateStatus(it.FIRST_SET), this.showTitle(g("WITHDRAW_POPUP.TITLE.SET_PSW")), this.showTips(g("WITHDRAW_POPUP.TIPS.ENTER")), this.showWarning(""), this.resetInput(), this.showResetPsw(!1), this.showCancelLabel(), this.setInputBox(), this.setFocus())
        }
        showInfoSecondSet() {
            _(this.node) && (this.updateStatus(it.SECOND_SET), this.showTitle(g("WITHDRAW_POPUP.TITLE.SET_PSW")), this.showTips(g("WITHDRAW_POPUP.TIPS.ENTER_PSW_AGAIN")), this.showWarning(""), this.resetInput(), this.showResetPsw(!1), this.showCancelLabel(g("MESSAGE_DIALOG_BLOCKER.RETURN")), this.setInputBox(), this.setFocus())
        }
        showInfoInput(t = g("WITHDRAW_POPUP.TIPS.ENTER_PSW")) {
            _(this.node) && (this.updateStatus(it.INPUT), this.showTitle(this._titleStr), this.showTips(t), this.showWarning(""), this.resetInput(), this.showResetPsw(!0), this.showCancelLabel(), this.setInputBox(), this.setFocus())
        }
        showInfoRestPsw(t = g("WITHDRAW_POPUP.TIPS.ENTER_VALID_CODE")) {
            _(this.node) && (this.updateStatus(it.RESET), this.showTitle(g("WITHDRAW_POPUP.TITLE.FORGET_PSW")), this.showTips(t), this.showWarning(""), this.resetInput(), this.showResetPsw(!0, g("WITHDRAW_POPUP.RESEND_LABEL")), this.showCancelLabel(g("MESSAGE_DIALOG_BLOCKER.RETURN")), this.setInputBox(), this.setFocus())
        }
        handleSMS(t, e) {
            if (t === cc_mtt.vv.DataManager.SMSStatus[0]) this.showTips(g("WITHDRAW_POPUP.TIPS.ENTER_VALID_CODE")), e();
            else {
                let e = this.getSmsErrorStr(t);
                this.showTips(e)
            }
        }
        handleFirstSet() {
            this.firstPsw = this.inputBox.string, this.showInfoSecondSet()
        }
        handleSecondSet() {
            if (this.firstPsw === this.inputBox.string) {
                this._hallScript.showLoading();
                let t = {
                    WithdrawPassword: this.inputBox.string
                };
                cc_mtt.vv.DataManager.worldNetwork.requestUserWithdrawPasswordReset(t, (t => {
                    _(this) && this._hallScript.hidLoading((() => {
                        if (t && !t.ErrorCode) this.showInfoInput(g("WITHDRAW_POPUP.TIPS.PASSWORD_SET_OK"));
                        else {
                            let e = g("ERROR_CODE_PKW." + t.ErrorCode);
                            this.showWarning(e)
                        }
                    }))
                }))
            } else this.showWarning(g("WITHDRAW_POPUP.WARNING.DIFFERENT_PASSWORD")), this.resetInput()
        }
        handleInput() {
            this._hallScript.showLoading();
            let t = {
                WithdrawPassword: this.inputBox.string
            };
            cc_mtt.vv.DataManager.worldNetwork.requestUserWithdrawPasswordVerification(t, (t => {
                _(this) && this._hallScript.hidLoading((() => {
                    if (t && !t.ErrorCode) this.zoomOut(this._okCb);
                    else if (t.ErrorCode >= 10900 && t.ErrorCode < 10904) {
                        let e = g("WITHDRAW_POPUP.WARNING.WRONG_PASSWORD");
                        this.showWarning(e.replace("${time}", (10904 - t.ErrorCode).toString())), this.resetInput()
                    } else if (10904 === t.ErrorCode) this.resetInput(), this.onResetClicked(), this._popStatus === it.INPUT ? (this.showTips(g("WITHDRAW_POPUP.WARNING.WRONG_INPUT_FIVE_TIMES_SMS_LOCKED")), this.showWarning("")) : this.showWarning(g("WITHDRAW_POPUP.WARNING.WRONG_INPUT_FIVE_TIMES"));
                    else {
                        let e = g("ERROR_CODE_PKW." + t.ErrorCode);
                        this.showWarning(e)
                    }
                }))
            }), !0, this.needPendingMsg)
        }
        handleResetPsw() {
            this._hallScript.showLoading();
            let t = {
                VerificationCode: this.inputBox.string
            };
            cc_mtt.vv.DataManager.worldNetwork.requestUserWithdrawPasswordForget(t, (t => {
                _(this) && this._hallScript.hidLoading((() => {
                    if (t && !t.ErrorCode) this.showInfoFirstSet();
                    else if (this.resetInput(), t.ErrorCode === b.commonProto.ErrorCode.User_Mobile_Sms_In_Valid) {
                        let e = "";
                        this.setSmsInputCount(--this.smsInputCount), e = this.smsInputCount > 0 ? g("ERROR_CODE_PKW." + t.ErrorCode) : g("WITHDRAW_POPUP.WARNING.WRONG_SMS_FIVE_TIMES"), this.enableOkBtn(), this.showWarning(e)
                    } else {
                        let e = g("ERROR_CODE_PKW." + t.ErrorCode);
                        this.showWarning(e)
                    }
                }))
            }))
        }
        zoomIn() {
            f.fade(this.blockLayer, this._actionSpeed, 128), f.scaleTo(this.popUp, this._actionSpeed, P(p.ONE), d.backOut, (() => {
                cc_mtt.vv.DataManager.popUps.push(this.node)
            }))
        }
        zoomOut(t) {
            f.fadeOut(this.blockLayer, this._actionSpeed), f.scaleTo(this.popUp, this._actionSpeed, P(p.ZERO), d.backIn, (() => {
                let e = cc_mtt.vv.DataManager.popUps,
                    s = e.indexOf(this.node);
                s >= 0 && e.splice(s, 1), t && t instanceof Function && t(), this.node.destroy()
            }))
        }
        onOkClicked() {
            switch (R.coolDownButton(this.okBtn, this), cc_mtt.vv.ConsoleLog.log("pswBox ok:", this._popStatus), this._popStatus) {
                case it.FIRST_SET:
                    this.handleFirstSet();
                    break;
                case it.SECOND_SET:
                    this.handleSecondSet();
                    break;
                case it.INPUT:
                    this.handleInput();
                    break;
                case it.RESET:
                    this.handleResetPsw()
            }
        }
        onCancelClicked() {
            switch (R.coolDownButton(this.cancelBtn, this), cc_mtt.vv.ConsoleLog.log("pswBox cancel:", this._popStatus), this._popStatus) {
                case it.FIRST_SET:
                    this.zoomOut();
                    break;
                case it.SECOND_SET:
                    this.showInfoFirstSet();
                    break;
                case it.INPUT:
                    this.zoomOut();
                    break;
                case it.RESET:
                    this.showInfoInput()
            }
        }
        onResetClicked() {
            if (Date.now() <= cc_mtt.vv.DataManager.withdrawResetTimer) return;
            cc_mtt.vv.DataManager.withdrawResetTimer = Date.now() + 6e4;
            let t = cc_mtt.vv.DataManager.userData.AreaCode,
                e = cc_mtt.vv.DataManager.userData.Mobile,
                s = t + "/" + e + "/" + D(`${t}${T.smsChecksumSalt}${e}`);
            this.setSmsInputCount(5), this._popStatus === it.INPUT && this.showInfoRestPsw(""), this.enableOkBtn(), E.requestPasswordResetSMS(s, (t => {
                _(this.node) && this._popStatus == it.RESET && (cc_mtt.vv.ConsoleLog.log("withdraw sms:", t), this.handleSMS(t, (() => {})))
            }), (() => {
                _(this.node) && this._popStatus == it.RESET && (cc_mtt.vv.ConsoleLog.log("onerror:withdraw"), this.showWarning(g("WITHDRAW_POPUP.WARNING.NETWORK_FAILURE")), cc_mtt.vv.DataManager.withdrawResetTimer = 0)
            }))
        }
        coolDownAllButtons() {
            R.coolDownButton(this.okBtn, this), R.coolDownButton(this.cancelBtn, this), R.coolDownButton(this.resetPswBtn, this)
        }
    }).prototype, "blockLayer", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(H.prototype, "popUp", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(H.prototype, "resetSpace", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(H.prototype, "title", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(H.prototype, "tips", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(H.prototype, "warning", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(H.prototype, "resetPswBtn", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(H.prototype, "okBtn", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(H.prototype, "cancelBtn", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(H.prototype, "resetLabel", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(H.prototype, "cancelLabel", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(H.prototype, "inputBox", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(H.prototype, "codeLabel", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = H)) || y));
    i._RF.pop()
}