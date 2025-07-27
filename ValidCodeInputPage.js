import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as E from "./Login_ts.js";
import * as _ from "./httpApis.js";
import * as h from "./md5.mjs_cjs=&original=.js";
import * as C from "./NodePage.js";
import * as S from "./Translator.js";
import * as O from "./AndroidBackButton.js";

function main() {
    var p, R, I, b, D, L, v, A, B, m, P, M, f, T, x, G, k;
    i._RF.push({}, "473d18J6cxPLag/VLZGA5sQ", "ValidCodeInputPage", void 0);
    const {
        ccclass: w,
        property: K
    } = l;
    t("ValidCodeInputPage", (p = K(o), R = K(a), I = K(a), b = K(a), D = K(s), L = K(o), v = K(o), w((m = e((B = class extends r {
        constructor(...t) {
            super(...t), n(this, "backButton", m, this), n(this, "headerLabel", P, this), n(this, "msgLabel", M, this), n(this, "codeLabel", f, this), n(this, "validCodeInput", T, this), n(this, "nextButton", x, this), n(this, "getValidCodeAgainButton", G, this), n(this, "_label", k, this)
        }
        onLoad() {
            this._label = C("VALID_CODE_INPUT.RE_SEND_SMS")
        }
        update(t) {
            1 == this.node.active && (this.validCodeInput.string.length < 6 ? this.nextButton.interactable = !1 : this.nextButton.interactable = !0, this.nextButton.getComponentInChildren(a).node.getComponent(c).color = this.nextButton.interactable ? u.WHITE : (new u).fromHEX("#9B9B9B"))
        }
        setFocus() {
            d.isNative && this.validCodeInput.setFocus()
        }
        clearEditText() {
            this.validCodeInput.string = "", this.codeLabel.string = ""
        }
        editChangedCall() {
            this.codeLabel.string = this.validCodeInput.string
        }
        resetSMSButton() {
            this.getValidCodeAgainButton.node.parent.getComponent(a).string = this._label, this.getValidCodeAgainButton.interactable = !0
        }
        resetPage() {
            this.clearEditText()
        }
        countDown(t) {
            if (Date.now() >= t) return void this.resetSMSButton();
            let e = Math.ceil((t - Date.now()) / 1e3);
            this.getValidCodeAgainButton.node.parent.getComponent(a).string = this._label + "(" + e + ")", this.scheduleOnce((() => {
                this.countDown(t)
            }), 1)
        }
        clearCountDown() {
            this.unscheduleAllCallbacks(), this.resetSMSButton()
        }
        onSMSclick() {
            this.getValidCodeAgainButton.interactable = !1, this.countDown(Date.now() + 6e4);
            let t = g.getScene().getComponentInChildren("Login_ts")._userAreaCode,
                e = g.getScene().getComponentInChildren("Login_ts")._userPhone,
                n = O(`${t}dk is so handsome${e}`),
                i = t + "/" + e + "/" + n;
            switch (g.getScene().getComponentInChildren("Login_ts")._intention) {
                case E.REGISTER:
                    _.requestSMS(i, (n => {
                        if (n)
                            if (cc_mtt.vv.ConsoleLog.log("SMS status", n), n === cc_mtt.vv.DataManager.SMSStatus[0]) this.msgLabel.string = `+${t} ${e}`;
                            else {
                                let t = h.getSmsErrorStr(n);
                                cc_mtt.vv.AssetsManager.showDialogBox("POPUP_TITLE.REMIND", t, !1, [{
                                    type: 0,
                                    text: "MESSAGE_DIALOG_BLOCKER.OK",
                                    callback: void 0
                                }])
                            }
                    }), (t => {
                        cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", !1, [{
                            type: 0,
                            text: "MESSAGE_DIALOG_BLOCKER.OK",
                            callback: void 0
                        }])
                    }));
                    break;
                case E.RESET_PASSWORD:
                    _.requestPasswordResetSMS(i, (n => {
                        if (n)
                            if (cc_mtt.vv.ConsoleLog.log("SMS status", n), n === cc_mtt.vv.DataManager.SMSStatus[0]) this.msgLabel.string = `+${t} ${e}`;
                            else {
                                let t = h.getSmsErrorStr(n);
                                cc_mtt.vv.AssetsManager.showDialogBox("POPUP_TITLE.REMIND", t, !1, [{
                                    type: 0,
                                    text: "MESSAGE_DIALOG_BLOCKER.OK",
                                    callback: void 0
                                }])
                            }
                    }), (t => {
                        cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", !1, [{
                            type: 0,
                            text: "MESSAGE_DIALOG_BLOCKER.OK",
                            callback: void 0
                        }])
                    }))
            }
        }
        onBackClicked() {
            d.isNative && d.os === d.OS.ANDROID && S.getInstance().removeBackFunction("ValidCodeInputPage"), g.getScene().getComponentInChildren("PhoneInputPage").setBackData(), g.getScene().getComponentInChildren("Login_ts").moveFromCenter(E.VALID_CODE, E.PHONE, (() => {
                this.resetPage()
            }))
        }
        onNextClicked() {
            let t = g.getScene().getComponentInChildren("Login_ts");
            this.nextButton.enabled = !1;
            let e = this.validCodeInput.string,
                n = t._userPhone,
                i = t._userAreaCode + "/" + n + "/" + e;
            switch (t._intention) {
                case E.REGISTER:
                    _.requestSMSCheck(i, (e => {
                        if (this.nextButton.enabled = !0, e)
                            if (cc_mtt.vv.ConsoleLog.log("status", e), "1" === e) {
                                t._userValidCode = this.validCodeInput.string, t.moveToCenter(E.VALID_CODE, E.REGISTER);
                                let e = g.getScene().getComponentInChildren("RegisterInputPage");
                                d.isNative && d.os === d.OS.ANDROID && S.getInstance().addBackFunction("RegisterInputPage", e.onBackClicked.bind(e))
                            } else "0" === e && cc_mtt.vv.AssetsManager.showDialogBox("POPUP_TITLE.REMIND", "VALID_CODE_INPUT.WRONG_CODE", !1, [{
                                type: 0,
                                text: "MESSAGE_DIALOG_BLOCKER.OK",
                                callback: void 0
                            }])
                    }), (t => {
                        this.nextButton.enabled = !0, cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", !1, [{
                            type: 0,
                            text: "MESSAGE_DIALOG_BLOCKER.OK",
                            callback: void 0
                        }])
                    }));
                    break;
                case E.RESET_PASSWORD:
                    _.requestPasswordResetSMSCheck(i, (e => {
                        if (this.nextButton.enabled = !0, e)
                            if (cc_mtt.vv.ConsoleLog.log("status", e), "1" === e) {
                                t._userValidCode = this.validCodeInput.string, t.moveToCenter(E.VALID_CODE, E.RESET_PASSWORD);
                                let e = g.getScene().getComponentInChildren("ResetPasswordPage");
                                d.isNative && d.os === d.OS.ANDROID && S.getInstance().addBackFunction("ResetPasswordPage", e.onBackClicked.bind(e))
                            } else "0" === e && cc_mtt.vv.AssetsManager.showDialogBox("POPUP_TITLE.REMIND", "VALID_CODE_INPUT.WRONG_CODE", !1, [{
                                type: 0,
                                text: "MESSAGE_DIALOG_BLOCKER.OK",
                                callback: void 0
                            }])
                    }), (t => {
                        this.nextButton.enabled = !0, cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", !1, [{
                            type: 0,
                            text: "MESSAGE_DIALOG_BLOCKER.OK",
                            callback: void 0
                        }])
                    }))
            }
        }
    }).prototype, "backButton", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(B.prototype, "headerLabel", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(B.prototype, "msgLabel", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = e(B.prototype, "codeLabel", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(B.prototype, "validCodeInput", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(B.prototype, "nextButton", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(B.prototype, "getValidCodeAgainButton", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(B.prototype, "_label", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), A = B)) || A));
    i._RF.pop()
}