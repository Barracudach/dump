import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as u from "./FormView.js";
import * as m from "./profile_player_complaint.js";
import * as d from "./CountDownButton.js";
import * as p from "./Enum.js";
import * as F from "./PhoneField.js";
import * as f from "./AnalyticsHandler.js";
import * as b from "./VCodeField.js";
import * as g from "./NotifyMsg.js";
import * as S from "./TooltipsManager.js";

function main() {
    var w, P, E, v, C, y, V, B, k, I, N, A, M, z, D, H, _, T, R, j, x, L, K, O, G, U, Q, W, q, J, X, Y, Z, $, ee, te;
    o._RF.push({}, "9a16aDiI8dBw6s5odQvfUma", "ForgotPasswordView", void 0);
    const {
        ccclass: ie,
        property: oe
    } = a;
    e("default", (w = oe(n), P = oe(u), E = oe(u), v = oe(u), C = oe(u), y = oe(u), V = oe(d), B = oe(d), k = oe(b), I = oe(r), N = oe(r), A = oe(r), M = oe(r), z = oe(s), D = oe(s), H = oe(s), _ = oe(s), ie((j = t((R = class extends h {
        constructor(...e) {
            super(...e), i(this, "prefabPlayerComplaints", j, this), i(this, "emailForm", x, this), i(this, "phoneForm", L, this), i(this, "verifyEmailForm", K, this), i(this, "verifyPhoneForm", O, this), i(this, "changePasswordForm", G, this), i(this, "countDownEmailBtn", U, this), i(this, "countDownPhoneBtn", Q, this), i(this, "vCodeField", W, this), i(this, "btnEmailSubmit", q, this), i(this, "btnPhoneSubmit", J, this), i(this, "btnVCodeSubmit", X, this), i(this, "btnPasswordSubmit", Y, this), i(this, "captchaEmailPosNode", Z, this), i(this, "captchaPhonePosNode", $, this), i(this, "captchaVerifyPosNode", ee, this), i(this, "captchaSetNewPosNode", te, this), this.firstStepForm = null, this.secondStepForm = null, this.useEmail = !0, this.captchaField = null, this.btnFirstPageSubmit = null, this.formButtonPairs = []
        }
        onLoad() {
            const e = c.dataHandler.getUserData().getLoginMode();
            e == p.Email ? this.useEmail = !0 : e == p.Phone ? this.useEmail = !1 : this.useEmail = c.appConfig.getGeneralConfig().userValidationMethodIsEmail, this.captchaField = this.emailForm.fields[1], l(this.captchaField, !0) && !c.appConfig.getSecurityConfig().addCaptchaFieldFromClient && (this.emailForm.removeField(this.captchaField.schemaKey), this.phoneForm.removeField(this.captchaField.schemaKey)), this.formButtonPairs = [{
                form: this.emailForm,
                button: this.btnEmailSubmit
            }, {
                form: this.phoneForm,
                button: this.btnPhoneSubmit
            }, {
                form: this.verifyEmailForm,
                button: this.btnVCodeSubmit
            }, {
                form: this.verifyPhoneForm,
                button: this.btnVCodeSubmit
            }, {
                form: this.changePasswordForm,
                button: this.btnPasswordSubmit
            }]
        }
        onEnable() {
            c.resMgr.adaptWidget(this.node, !0), this.useEmail ? this.enableEmailFormView() : this.enablePhoneFormView(), l(this.captchaField, !0) && (this.captchaField.node.active = !0), this.changePasswordForm.fields[0].initFieldFromSchema(null), this.changePasswordForm.node.active = !1, c.MessageCenter.register(c.Enum.MessageCenterAction.onChangeCheckFormValid, this.onChangeCheckFormValid.bind(this), this.node), f.getInstance().sendEvent(c.Enum.CurrentScreen.forgotPassword, c.Enum.segmentEvent.ScreenOpened, c.Enum.Functionality.login, {
                journey: "forgotPassword"
            })
        }
        enableEmailFormView() {
            this.useEmail = !0, this.firstStepForm = this.emailForm, this.emailForm.node.active = !0, this.phoneForm.node.active = !1, this.captchaField.node.setParent(this.captchaEmailPosNode), this.verifyEmailForm.node.active = !0, this.verifyPhoneForm.node.active = !1, this.secondStepForm = this.verifyEmailForm, this.secondStepForm.node.parent.active = !1, this.btnFirstPageSubmit = this.btnEmailSubmit;
            f.getInstance().sendEvent(c.Enum.CurrentScreen.forgotPassword, c.Enum.segmentEvent.VerificationMethodChosen, c.Enum.Functionality.login, {
                intent: "cta",
                label: "use email"
            })
        }
        enablePhoneFormView() {
            var e;
            this.useEmail = !1;
            let t = null == (e = this.phoneForm) ? void 0 : e.getComponentInChildren(F);
            null == t || t.addAreaCodeKeyByCountry(), this.firstStepForm = this.phoneForm, this.phoneForm.node.active = !0, this.emailForm.node.active = !1, this.captchaField.node.setParent(this.captchaPhonePosNode), this.verifyPhoneForm.node.active = !0, this.verifyEmailForm.node.active = !1, this.secondStepForm = this.verifyPhoneForm, this.secondStepForm.node.parent.active = !1, this.btnFirstPageSubmit = this.btnPhoneSubmit;
            f.getInstance().sendEvent(c.Enum.CurrentScreen.forgotPassword, c.Enum.segmentEvent.VerificationMethodChosen, c.Enum.Functionality.login, {
                intent: "cta",
                label: "use phone"
            })
        }
        onDisable() {
            this.emailForm.node.active = !1, this.phoneForm.node.active = !1, this.verifyEmailForm.node.active = !1, this.verifyPhoneForm.node.active = !1, this.changePasswordForm.node.active = !1, c.MessageCenter.unregister(c.Enum.MessageCenterAction.onChangeCheckFormValid, this.node)
        }
        onBtnKefuClick() {
            c.AudioMgr.playButtonSound("button_click.mp3"), m.show(this.prefabPlayerComplaints)
        }
        onBtnBackClick() {
            c.AudioMgr.playButtonSound("back_button.mp3"), this.goBack()
        }
        goBack() {
            this.secondStepForm.node.parent.active ? (this.showActionBoth(!1, this.firstStepForm.node, this.secondStepForm.node.parent), l(this.captchaField, !0) && (this.captchaField.node.active = !0)) : this.changePasswordForm.node.active ? (this.showActionBoth(!1, this.secondStepForm.node.parent, this.changePasswordForm.node), l(this.captchaField, !0) && (this.captchaField.node.active = !0)) : c.authenticator.showLoginPopup()
        }
        onBackToFirstStep(e) {
            this.secondStepForm.showServerError(e)
        }
        onBtnSubmitEmailClick() {
            this.handleFormSubmission(this.emailForm, this.showEmailSuccessPopup.bind(this), this.countDownEmailBtn, "email");
            f.getInstance().sendEvent(c.Enum.CurrentScreen.forgotPassword, c.Enum.segmentEvent.GetCodeInitiated, c.Enum.Functionality.login, {
                intent: "cta",
                label: "get code"
            })
        }
        onBtnSubmitPhoneClick() {
            this.handleFormSubmission(this.phoneForm, this.showPhoneSuccessPopup.bind(this), this.countDownPhoneBtn, "sms");
            f.getInstance().sendEvent(c.Enum.CurrentScreen.forgotPassword, c.Enum.segmentEvent.GetCodeInitiated, c.Enum.Functionality.login, {
                intent: "cta",
                label: "get code"
            })
        }
        sendCodeAgain() {
            this.useEmail ? this.onBtnSubmitEmailClick() : this.onBtnSubmitPhoneClick()
        }
        handleFormSubmission(e, t, i, o) {
            c.AudioMgr.playButtonSound("button_click.mp3"), 1 == e.submit(this.onSubmitEmailPhoneSuccess.bind(this, t, i, o), this.emailPhoneErrorHandler.bind(this, o)) && this.onChangeCheckFormValid()
        }
        showEmailSuccessPopup() {
            this.showSuccessPopup(), this.vCodeField.updatePersonalDetailText(this.emailForm.objValues.email, "Email", "email"), this.showActionBoth(!0, this.secondStepForm.node.parent, this.firstStepForm.node)
        }
        showPhoneSuccessPopup() {
            this.showSuccessPopup(), this.vCodeField.updatePersonalDetailText(this.phoneForm.objValues.phone, "Sms", "phone"), this.showActionBoth(!0, this.secondStepForm.node.parent, this.firstStepForm.node)
        }
        showSuccessPopup() {
            this.secondStepForm.clear(), this.secondStepForm.populate(c.StringTools.deepCopy(this.firstStepForm.objValues, {}));
            let e = c.appConfig.getFormsConfig().forgotpassword.popupMessagei18Key,
                t = c.config.getStringData(e),
                i = c.config.getStringData(this.firstStepForm.fields[0].nameI18nKey);
            g.getInstance().show(t.replace("%s", i.toLowerCase()), !1)
        }
        onSubmitEmailPhoneSuccess(e, t, i, o) {
            this.onChangeCheckFormValid(), c.httpHandler.responseHaveErrorCode(o) ? this.firstStepForm.showServerError(o) : (e(), this.trackCodeVerificationResp(i, "verificationSuccess"))
        }
        emailPhoneErrorHandler(e, t) {
            this.onChangeCheckFormValid();
            let i = this.firstStepForm.getServerError(t);
            var o, n;
            this.firstStepForm.node.active ? (i[1] = Math.max(0, i[1]), null == (o = this.firstStepForm) || o.fields[i[1]].showInvalidEffectsOnServerError(), S.showToolTipsForFieldValidator(this.firstStepForm.fields[i[1]], "", i[0]), null == (n = this.firstStepForm) || n.fields[i[1]].showOrHideInvalid(!1)) : i[0].length > 0 && g.getInstance().show(i[0], !0);
            this.trackCodeVerificationResp(e, "verificationFailure")
        }
        trackCodeVerificationResp(e, t) {
            let i = {
                method: e,
                intent: "cta",
                status: t
            };
            f.getInstance().sendEvent(c.Enum.CurrentScreen.forgotPassword, c.Enum.segmentEvent.CodeVerification, c.Enum.Functionality.login, i)
        }
        showActionBoth(e, t, i, o = null) {
            t.active = !0, i.active = !1, this.onChangeCheckFormValid(), t === this.secondStepForm.node.parent ? this.vCodeField.attachCaptchaNodeToVCodeField(this.captchaField.node) : t === this.changePasswordForm.node ? this.captchaField.node.setParent(this.captchaSetNewPosNode) : t === this.firstStepForm.node && (this.firstStepForm.node === this.emailForm.node ? this.captchaField.node.setParent(this.captchaEmailPosNode) : this.firstStepForm.node === this.phoneForm.node && this.captchaField.node.setParent(this.captchaPhonePosNode)), o && o()
        }
        onBtnSubmitVerifyClick() {
            c.AudioMgr.playButtonSound("button_click.mp3"), this.submitVerifyForm()
        }
        submitVerifyForm() {
            1 == this.secondStepForm.submit(this.onSubmitVerifySuccess.bind(this), this.onSubmitVerifyFailed.bind(this)) && this.onChangeCheckFormValid()
        }
        onSubmitVerifySuccess(e) {
            this.onChangeCheckFormValid(), c.httpHandler.responseHaveErrorCode(e) ? this.secondStepForm.showServerError(e) : (this.changePasswordForm.clear(), this.changePasswordForm.populate(c.StringTools.deepCopy(this.secondStepForm.objValues, {})), l(this.captchaField, !0) && (this.captchaField.node.active = !1), this.showActionBoth(!0, this.changePasswordForm.node, this.secondStepForm.node.parent), f.getInstance().sendEvent(c.Enum.CurrentScreen.createPassword, c.Enum.segmentEvent.ScreenOpened, c.Enum.Functionality.login, {
                journey: "forgot password"
            }))
        }
        onSubmitVerifyFailed(e) {
            this.onChangeCheckFormValid(), this.secondStepForm.showServerError(e)
        }
        onBtnSubmitSetNewClick() {
            c.AudioMgr.playButtonSound("button_click.mp3"), f.getInstance().sendEvent(c.Enum.CurrentScreen.createPassword, c.Enum.segmentEvent.PasswordResetInitiated, c.Enum.Functionality.login), this.submitChangePasswordForm()
        }
        submitChangePasswordForm() {
            1 == this.changePasswordForm.submit(this.onSubmitSetNewSuccess.bind(this), this.onSetNewPasswordErrorHandler.bind(this)) && this.onChangeCheckFormValid()
        }
        onSubmitSetNewSuccess(e) {
            this.onChangeCheckFormValid(), c.httpHandler.responseHaveErrorCode(e) ? this.changePasswordForm.showServerError(e) : (this.firstStepForm.clear(), this.secondStepForm.clear(), this.changePasswordForm.clear(), g.getInstance().showi18n("ForgotPassword_SuccessPanel_text", !1), c.authenticator.showLoginPopup(), f.getInstance().sendEvent(c.Enum.CurrentScreen.createPassword, c.Enum.segmentEvent.PasswordResetCompleted, c.Enum.Functionality.login))
        }
        onSetNewPasswordErrorHandler(e) {
            if (this.onChangeCheckFormValid(), !l(this.node, !0)) return;
            let t = this.changePasswordForm.getServerError(e);
            this.changePasswordForm.node.active ? (t[1] = Math.max(0, t[1]), this.changePasswordForm.fields[t[1]].showInvalidEffectsOnServerError(), S.showToolTipsForFieldValidator(this.changePasswordForm.fields[t[1]], "", t[0])) : t[0].length > 0 && g.getInstance().show(t[0], !0), f.getInstance().sendEvent(c.Enum.CurrentScreen.createPassword, c.Enum.segmentEvent.PasswordResetFailed, c.Enum.Functionality.login, {
                label: e
            })
        }
        getActiveFormAndButton() {
            for (const t of this.formButtonPairs) {
                var e;
                if (null != (e = t.form) && e.node.active) return {
                    form: t.form,
                    button: t.button
                }
            }
            return {
                form: null,
                button: null
            }
        }
        onChangeCheckFormValid() {
            var e;
            const {
                form: t,
                button: i
            } = this.getActiveFormAndButton();
            let o = !1;
            var n;
            if (null != (e = this.secondStepForm) && e.node.activeInHierarchy) o = null == (n = this.vCodeField) ? void 0 : n.isCodeComplete();
            else if (t) {
                var r;
                o = null == (r = t.fields) ? void 0 : r.every((e => e && (!e.node.activeInHierarchy || e.isFieldValid())))
            }
            i && (i.interactable = o)
        }
    }).prototype, "prefabPlayerComplaints", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(R.prototype, "emailForm", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(R.prototype, "phoneForm", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(R.prototype, "verifyEmailForm", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(R.prototype, "verifyPhoneForm", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(R.prototype, "changePasswordForm", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(R.prototype, "countDownEmailBtn", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(R.prototype, "countDownPhoneBtn", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(R.prototype, "vCodeField", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(R.prototype, "btnEmailSubmit", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(R.prototype, "btnPhoneSubmit", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(R.prototype, "btnVCodeSubmit", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(R.prototype, "btnPasswordSubmit", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = t(R.prototype, "captchaEmailPosNode", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = t(R.prototype, "captchaPhonePosNode", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t(R.prototype, "captchaVerifyPosNode", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = t(R.prototype, "captchaSetNewPosNode", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = R)) || T));
    o._RF.pop()
}