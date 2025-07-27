import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./cv.js";
import * as c from "./FormView.js";
import * as p from "./Enum.js";
import * as f from "./CountDownButton.js";
import * as g from "./SlideView.js";
import * as S from "./MessageBroker.js";
import * as m from "./VCodeField.js";
import * as C from "./VCodeField.js";
import * as b from "./NotifyMsg.js";
import * as w from "./i18nText.js";
import * as B from "./DesignSystemButtonBase.js";
import * as v from "./TooltipsManager.js";

function main() {
    var y, F, E, D, P, _, T, V, R, q, A, I, k, L, M, H, x, z;
    n._RF.push({}, "2df6ae2/O9J6pu2BSmpzcYL", "ChangePassword", void 0);
    const {
        ccclass: N,
        property: O
    } = a;
    t("ChangePassword", (y = O(m), F = O(f), E = O(s), D = O(o), P = O(s), _ = O(o), T = O(w), N(((z = class t extends c {
        constructor(...t) {
            super(...t), i(this, "vcodeField", q, this), i(this, "getVerifyCodeBtn", A, this), i(this, "step1Node", I, this), i(this, "confirmStep1Button", k, this), i(this, "step2Node", L, this), i(this, "confirmStep2Button", M, this), i(this, "changeLoginPass", H, this), i(this, "titleText", x, this), this.confirmStep1ButtonDS = null, this.confirmStep2ButtonDS = null
        }
        static getSinglePrefabInst(t, e) {
            let i = e;
            return i || (i = r.getScene().getComponentInChildren(d).node), this.prefabInst && (i.getChildByUuid(this.prefabInst.uuid) || h(this.prefabInst, !0)) || (this.prefabInst = l(t), i.addChild(this.prefabInst)), this.prefabInst
        }
        static show(e, i) {
            return h(this.prefabInst, !0) || this.getSinglePrefabInst(e, i), this.prefabInst.getComponent(t).showScreenAnimation(), this.prefabInst
        }
        onLoad() {
            var t;
            super.onLoad(), this.confirmStep1ButtonDS = this.confirmStep1Button.getComponent(B), this.confirmStep2ButtonDS = this.confirmStep2Button.getComponent(B), this.vcodeField.requestCallback = this.requestCode.bind(this), this.vcodeField.onValueChanged = this.updateStep1BtnState.bind(this), this.fields[0].schemaKey = (null == (t = u.appConfig.getFormsConfig().verificationCode) ? void 0 : t.key) || this.fields[0].schemaKey, this.node.on(u.Enum.CustomEvent.ActionShowFinish, this.onFinishShow, this), this.customSubmitOnEnter = this.onBtnClickSubmit.bind(this);
            let e = this.node.getChildByName("content");
            e && e.on("size-changed", this.OnMainLayoutResized.bind(this));
            let i = this.fields[1];
            i.editBox.node.on("text-changed", this.updateStep2BtnState, this);
            let n = u.appConfig.getFormsConfig().password;
            i.initFieldFromSchema({
                type: "Password",
                name: n.key,
                required: !0,
                minLength: n.min,
                maxLength: n.max
            }), this.vcodeField.setRequestCodeMsg(C.none, u.dataHandler.getUserData().verificationType)
        }
        onEnable() {
            super.onEnable(), this.showStep1(), this.clear()
        }
        onDestroy() {
            this.node.off(u.Enum.CustomEvent.ActionShowFinish, this.onFinishShow, this)
        }
        clear() {
            for (let t = 0; t < this.fields.length; ++t) this.fields[t].reset()
        }
        onFinishShow() {
            this.requestCode()
        }
        showScreenAnimation() {
            let t = this.getComponent(g);
            t ? t.show(!1) : (this.showPanel(), this.onFinishShow())
        }
        showPanel() {
            this.node.active = !0
        }
        OnMainLayoutResized() {
            for (var t = 0; t < this.fields.length; t++) {
                let e = this.fields[t];
                e && e.editBox.isFocused() && e.editBox.focus()
            }
        }
        requestCode() {
            this.getVerifyCodeBtn.isStillCounting ? this.vcodeField.setRequestCodeMsg(C.success, u.dataHandler.getUserData().verificationType) : (this.clear(), this.sendGetVCodeReq())
        }
        sendGetVCodeReq() {
            this.vcodeField.setRequestCodeMsg(C.sending, u.dataHandler.getUserData().verificationType), u.http.sendRequestV2(u.config.getStringData("WEB_API_RESET_PASS_VCODE", !0), null, this.onRequestCodeSuccess.bind(this), this.onRequestCodeError.bind(this), u.http.HttpRequestType.POST)
        }
        onRequestCodeSuccess(t) {
            if (u.httpHandler.responseHaveErrorCode(t)) return void this.onRequestCodeError(t);
            let e = u.dataHandler.getUserData().verificationType;
            this.vcodeField.setRequestCodeMsg(C.success, e), b.getInstance().showi18n(e == p.EMAIL ? "ChangePassword_code_sent_Email" : "ChangePassword_code_sent_Phone", !1)
        }
        onRequestCodeError(t) {
            this.vcodeField.setRequestCodeMsg(C.error, u.dataHandler.getUserData().verificationType, t)
        }
        onBtnClickBack() {
            u.AudioMgr.playButtonSound("close.mp3"), this.goBack()
        }
        goBack() {
            let t = this.getComponent(g);
            t ? t.hide() : h(this.node, !0) && (this.node.active = !1)
        }
        onBtnClickSubmit() {
            var t;
            u.AudioMgr.playButtonSound("button_click.mp3"), this.confirmStep2Button.interactable = !1, null == (t = this.confirmStep2ButtonDS) || t.showLoadingAnim(!0), this.submit(this.onPasswordChangedSuccess.bind(this))
        }
        onPasswordChangedSuccess(t) {
            if (u.httpHandler.responseHaveErrorCode(t)) this.showServerError(t);
            else {
                if (this.changeLoginPass) {
                    let t = u.dataHandler.getUserData().loadLoginDataFromFile();
                    if (null != t && t.passwd) {
                        let e = this.fields[1].value.toString();
                        u.dataHandler.getUserData().setLoginData(t.loginMode, t.username, e, !0)
                    }
                    if (u.appConfig.isWebApp) {
                        let t = this.fields[1].value.toString();
                        const e = u.dataHandler.getUserData().nick_name;
                        S.getInstance().sendChangePassword(`${e}:${t}`)
                    }
                }
                this.clear(), this.getVerifyCodeBtn.resetRemainTime(), this.goBack(), this.showSuccessPopup()
            }
        }
        showServerError(t) {
            let e = this.getServerError(t);
            0 == e[1] ? (this.showStep1(), v.showToolTipsForFieldValidator(this.fields[0], u.config.getStringData("Attention"), e[0])) : (1 == e[1] ? v.showToolTipsForFieldValidator(this.fields[e[1]], u.config.getStringData("Attention"), e[0]) : b.getInstance().show(e[0], !0), this.updateStep1BtnState(), this.updateStep2BtnState())
        }
        showSuccessPopup() {
            b.getInstance().showi18n("ChangePassword_SuccessMsg", !1)
        }
        updateStep1BtnState() {
            var t;
            this.confirmStep1Button.interactable = this.vcodeField.isCodeComplete(), null == (t = this.confirmStep1ButtonDS) || t.showLoadingAnim(!1)
        }
        onStep1BtnClick() {
            u.AudioMgr.playButtonSound("button_click.mp3"), this.verifyCode()
        }
        verifyCode() {
            var t;
            this.confirmStep1Button.interactable = !1, null == (t = this.confirmStep1ButtonDS) || t.showLoadingAnim(!0), this.vcodeField.hideInvalidEffects();
            let e = {};
            this.fields[0].addValueToObject(e), u.http.sendRequestV2(u.config.getStringData("WEB_API_RESET_PASS_VCODE_CHECK", !0), e, this.onVerifyCodeSuccess.bind(this), this.showServerError.bind(this), u.http.HttpRequestType.POST)
        }
        onVerifyCodeSuccess(t) {
            u.httpHandler.responseHaveErrorCode(t) ? this.showServerError(t) : this.showStep2()
        }
        updateStep2BtnState() {
            var t;
            let e = this.fields[1];
            this.confirmStep2Button.interactable = e.isFieldValid(), null == (t = this.confirmStep2ButtonDS) || t.showLoadingAnim(!1)
        }
        onBackClick() {
            u.AudioMgr.playButtonSound("button_click.mp3"), this.showStep1()
        }
        showStep1() {
            this.step2Node.active = !1, this.step1Node.active = !0, this.titleText.setKey("selfView_ChangeLoginPassword", !0), this.updateStep1BtnState()
        }
        showStep2() {
            this.step1Node.active = !1, this.step2Node.active = !0, this.titleText.setKey("selfView_ChangeLoginPassword_CreateNew", !0), this.updateStep2BtnState()
        }
    }).prefabInst = null, q = e((R = z).prototype, "vcodeField", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(R.prototype, "getVerifyCodeBtn", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(R.prototype, "step1Node", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(R.prototype, "confirmStep1Button", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(R.prototype, "step2Node", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(R.prototype, "confirmStep2Button", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(R.prototype, "changeLoginPass", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), x = e(R.prototype, "titleText", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = R)) || V));
    n._RF.pop()
}