import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as d from "./Translator.js";
import * as p from "./md5.mjs_cjs=&original=.js";
import * as C from "./AndroidBackButton.js";
import * as I from "./LoadingBlocker.js";
import * as E from "./NodePage.js";
import * as S from "./httpApis.js";
import * as _ from "./Login_ts.js";

function main() {
    var m, B, D, P, O, R, b, L, T, v, A, f, N, k;
    o._RF.push({}, "d3908aS5+RCyIkqzHcKaVVq", "PhoneInputPage", void 0);
    const {
        ccclass: x,
        property: w
    } = r;
    t("PhoneInputPage", (m = w(i), B = w(a), D = w(a), P = w(s), O = w(a), R = w(a), x((T = e((L = class extends l {
        constructor(...t) {
            super(...t), n(this, "headerLabel", T, this), n(this, "backButton", v, this), n(this, "areaCodeButton", A, this), n(this, "phoneInput", f, this), n(this, "nextButton", N, this), n(this, "agreementButton", k, this), this.flag = !0, this._areaCode = "", this._phone = ""
        }
        start() {}
        update(t) {
            1 == this.node.active && this.flag && ("" == this.phoneInput.string || null == this.phoneInput.string ? this.nextButton.interactable = !1 : this.nextButton.interactable = !0, this.nextButton.getComponentInChildren(i).node.getComponent(c).color = this.nextButton.interactable ? h.WHITE : (new h).fromHEX("#9B9B9B"))
        }
        setFocus() {
            u.isNative && this.phoneInput.setFocus()
        }
        setAreaCodeStr(t = g.getScene().getComponentInChildren("Login_ts").areaCodeButton.getComponentInChildren(i).string) {
            this.areaCodeButton.getComponentInChildren(i).string = t
        }
        setTitle(t) {
            this.headerLabel.string = t
        }
        presetPage(t) {
            this.setTitle(t), this.clearCountDown(), this.setAreaCodeStr()
        }
        resetPage() {
            this.phoneInput.string = ""
        }
        resetNextButton() {
            this.nextButton.node.getComponentInChildren(i).string = d("PHONE_INPUT.NEXT"), this.nextButton.interactable = !0, this.nextButton.node.getComponent(c).color = this.nextButton.normalColor, this.flag = !0
        }
        countDown(t) {
            if (Date.now() >= t) return void this.resetNextButton();
            let e = Math.ceil((t - Date.now()) / 1e3);
            this.nextButton.node.getComponentInChildren(i).string = `${d("PHONE_INPUT.NEXT")}(${e})`, this.scheduleOnce((() => {
                this.countDown(t)
            }), 1)
        }
        clearCountDown() {
            this.unscheduleAllCallbacks(), this.resetNextButton()
        }
        onAgreementClicked() {
            g.getScene().getComponentInChildren("Login_ts").moveToCenter(S.PHONE, S.AGREEMENT)
        }
        onBackClicked() {
            u.isNative && u.os === u.OS.ANDROID && p.getInstance().removeBackFunction("PhoneInputPage"), g.getScene().getComponentInChildren("Login_ts").moveFromCenter(S.PHONE, S.LOGIN, (() => {
                this.resetPage()
            }))
        }
        onAreaCodeClicked() {
            let t = g.getScene().getComponentInChildren("AreaCodeInputPage");
            t._comeFrom = S.PHONE, g.getScene().getComponentInChildren("Login_ts").moveToCenter(S.PHONE, S.AREA_CODE), u.isNative && u.os === u.OS.ANDROID && p.getInstance().addBackFunction("AreaCodeInputPage", t.onBackClicked.bind(t))
        }
        setBackData(t = !1) {
            this._areaCode = t ? "" : this.areaCodeButton.getComponentInChildren(i).string.substr(1), this._phone = t ? "" : this.phoneInput.string
        }
        changeToValidCodePage(t, e, n, o = !1) {
            g.getScene().getComponentInChildren("Login_ts")._userAreaCode = t, g.getScene().getComponentInChildren("Login_ts")._userPhone = e, g.getScene().getComponentInChildren("Login_ts").moveToCenter(S.PHONE, S.VALID_CODE);
            let i = g.getScene().getComponentInChildren("ValidCodeInputPage");
            i.msgLabel.string = `+${t} ${e}`, i.headerLabel.string = n, o ? this.setBackData(!0) : (i.clearCountDown(), i.countDown(60)), i.setFocus(), u.isNative && u.os === u.OS.ANDROID && p.getInstance().addBackFunction("ValidCodeInputPage", i.onBackClicked.bind(i))
        }
        onNextClicked() {
            this.nextButton.interactable = !1, this.nextButton.node.getComponent(c).color = this.nextButton.disabledColor, this.flag = !1, this.countDown(Date.now() + 6e4);
            let t = "phoneInputPage";
            C.show(t);
            let e = this.areaCodeButton.getComponentInChildren(i).string.substr(1),
                n = _(`${e}dk is so handsome${this.phoneInput.string}`),
                o = e + "/" + this.phoneInput.string + "/" + n;
            switch (g.getScene().getComponentInChildren("Login_ts")._intention) {
                case S.REGISTER:
                    cc_mtt.vv.ConsoleLog.log("here"), this._areaCode === e && this._phone === this.phoneInput.string ? (this.changeToValidCodePage(e, this.phoneInput.string, d("REGISTER.TITLE"), !0), this.clearCountDown(), C.hide(t)) : (this.setBackData(!0), E.requestSMS(o, (n => {
                        if (cc_mtt.vv.ConsoleLog.log("SMS status", n), n !== cc_mtt.vv.DataManager.SMSStatus[3] && this.clearCountDown(), n === cc_mtt.vv.DataManager.SMSStatus[0]) this.changeToValidCodePage(e, this.phoneInput.string, d("REGISTER.TITLE"));
                        else {
                            let t = I.getSmsErrorStr(n);
                            cc_mtt.vv.AssetsManager.showDialogBox("POPUP_TITLE.REMIND", t, !1, [{
                                type: 0,
                                text: "MESSAGE_DIALOG_BLOCKER.OK",
                                callback: void 0
                            }])
                        }
                        C.hide(t)
                    }), (e => {
                        cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", !1, [{
                            type: 0,
                            text: "MESSAGE_DIALOG_BLOCKER.OK",
                            callback: void 0
                        }]), C.hide(t)
                    })));
                    break;
                case S.RESET_PASSWORD:
                    this._areaCode === e && this._phone === this.phoneInput.string ? (this.changeToValidCodePage(e, this.phoneInput.string, d("RESET_PASSWORD.TITLE"), !0), this.clearCountDown(), C.hide(t)) : (this.setBackData(!0), E.requestPasswordResetSMS(o, (n => {
                        if (cc_mtt.vv.ConsoleLog.log("SMS status", n), n !== cc_mtt.vv.DataManager.SMSStatus[3] && this.clearCountDown(), n === cc_mtt.vv.DataManager.SMSStatus[0]) this.changeToValidCodePage(e, this.phoneInput.string, d("RESET_PASSWORD.TITLE"));
                        else {
                            let t = I.getSmsErrorStr(n);
                            cc_mtt.vv.AssetsManager.showDialogBox("POPUP_TITLE.REMIND", t, !1, [{
                                type: 0,
                                text: "MESSAGE_DIALOG_BLOCKER.OK",
                                callback: void 0
                            }])
                        }
                        C.hide(t)
                    }), (e => {
                        cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", !1, [{
                            type: 0,
                            text: "MESSAGE_DIALOG_BLOCKER.OK",
                            callback: void 0
                        }]), C.hide(t)
                    })))
            }
        }
    }).prototype, "headerLabel", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(L.prototype, "backButton", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(L.prototype, "areaCodeButton", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = e(L.prototype, "phoneInput", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(L.prototype, "nextButton", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(L.prototype, "agreementButton", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = L)) || b));
    o._RF.pop()
}