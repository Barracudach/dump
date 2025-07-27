import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./cv.js";
import * as h from "./FormView.js";
import * as m from "./FieldValidator.js";
import * as f from "./CheckboxValidator.js";
import * as p from "./VCodeField.js";
import * as g from "./VCodeField.js";
import * as b from "./PhoneField.js";
import * as C from "./CountDownButton.js";
import * as F from "./TooltipsManager.js";
import * as S from "./Enum.js";
import * as v from "./ThemeSystemModel.js";
import * as y from "./ColorSystemType.js";
import * as P from "./ColorSystemWeight.js";
import * as V from "./ColorSystemTypeOther.js";
import * as E from "./EmailField.js";
import * as N from "./AnalyticsHandler.js";
import * as T from "./StringUtils.js";
import * as w from "./NotifyMsg.js";

function main() {
    var M, R, I, A, _, k, x, O, B, D, K, z, H, G, q, U, L, j, W, X, Y, J, Q, Z, $, ee, ie, te, ne, ae, oe, le, re, se, de, ce, ue, he, me, fe, ge, pe, be, Ce, Fe, Se, ve, ye, Pe, Ve;
    n._RF.push({}, "11562r4MT5A3oPL+itYTMXA", "RegisterForm", void 0);
    const {
        ccclass: Ee,
        property: Ne
    } = l;
    e("default", (M = Ne(a), R = Ne(a), I = Ne(a), A = Ne(a), _ = Ne(a), k = Ne(a), x = Ne(a), O = Ne(a), B = Ne(a), D = Ne(a), K = Ne(a), z = Ne(a), H = Ne(a), G = Ne(a), q = Ne(a), U = Ne(a), L = Ne(a), j = Ne(a), W = Ne(a), X = Ne(a), Y = Ne(a), J = Ne(a), Q = Ne({
        type: o,
        tooltip: "Node showed/hidden when field is invalid/valid"
    }), Z = Ne({
        type: o,
        tooltip: "Node hidden/showed when field is invalid/valid"
    }), Ee((ie = i((ee = class extends h {
        constructor(...e) {
            super(...e), t(this, "locationFieldPrefab", ie, this), t(this, "userNameFieldPrefab", te, this), t(this, "passwordFieldPrefab", ne, this), t(this, "nickNameFieldPrefab", ae, this), t(this, "genderFieldPrefab", oe, this), t(this, "emailFieldPrefab", le, this), t(this, "phoneNumberFieldPrefab", re, this), t(this, "verificationCodeFieldPrefab", se, this), t(this, "bonusCodeFieldPrefab", de, this), t(this, "invitationCodeFieldPrefab", ce, this), t(this, "countryFieldPrefab", ue, this), t(this, "acceptPromoFieldPrefab", he, this), t(this, "acceptTermsFieldPrefab", me, this), t(this, "acceptMinAgeFieldPrefab", fe, this), t(this, "acceptPrivacyPolicyFieldPrefab", ge, this), t(this, "acceptInfoTrueFieldPrefab", pe, this), t(this, "legalDocumentPrefab", be, this), t(this, "captchaPrefab", Ce, this), t(this, "firstNameFieldPrefab", Fe, this), t(this, "middleNameFieldPrefab", Se, this), t(this, "lastNameFieldPrefab", ve, this), t(this, "birthDateFieldPrefab", ye, this), t(this, "invalidShow", Pe, this), t(this, "invalidHide", Ve, this), this.formName = null, this.titleKey = null, this.subTitleKey = null, this.selectedRegistrationMode = S.Email, this.vCodeField = null, this.hideAlternativeRegField = !1, this.getVCodeButton = null, this.checkBoxFields = [], this.getVCodeButtonMethod = "email", this.captchaField = null, this.captchaSchema = {
                type: "Text",
                name: "verifyToken",
                meta: null,
                required: !0,
                minLength: null,
                maxLength: null,
                isAdditionalField: !1,
                compatibility: null,
                validationRegEx: "",
                validationRegExErrorKey: "",
                defaultValue: "",
                ignoreValidation: !0
            }, this.VERIFICATION_CODE_FORM_NAME = "verification_code", this._isFormValid = void 0
        }
        onEnable() {
            this.updateCheckBoxField(), u.MessageCenter.register(u.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this.node), u.MessageCenter.register(u.Enum.MessageCenterAction.onChangeCheckFormValid, this.onChangeCheckFormValid.bind(this), this.node), super.onEnable()
        }
        onDisable() {
            u.MessageCenter.unregister(u.config.CHANGE_LANGUAGE, this.node), u.MessageCenter.unregister(u.Enum.MessageCenterAction.onChangeCheckFormValid, this.node), this.hideAlternativeRegField && (this.hideAlternativeRegField = !1)
        }
        onLanguageChange() {
            this.updateCheckBoxField()
        }
        updateCheckBoxField() {
            this.checkBoxFields.forEach((e => {
                let i = e.node.getComponentInChildren(r);
                if (i) {
                    let t = i.node.getComponent(s);
                    this.updateRichTextString(i, e.i18TextKey), i.maxWidth = t.width = e.maxNodeWidth, i._updateRichText();
                    let n = Math.ceil(Math.max(...i._linesWidth));
                    i.maxWidth = t.width = n
                }
            }))
        }
        init(e) {
            e.formName && (this.formName = e.formName);
            let i = e.fields,
                t = !1;
            this.checkBoxFields = [];
            let n = null,
                a = null;
            for (let e = 0, o = i.length; e < o; e++)
                if (this.createNewField(i[e]), T.isSameString(i[e].name, "verifyToken") && (t = !0), ["phone", "email"].includes(i[e].name) && (!0 === i[e].required && null == n ? n = this.fields[e] : !1 === i[e].required && null == a && (a = this.fields[e]), null != n && null != a)) {
                    n.alternateRegistrationPanelNode.active = !0, a.alternateRegistrationPanelNode.active = !0;
                    let e = "email";
                    a instanceof E ? e = "sms" : a instanceof b && (e = "email"), this.initChangeRegMethodButtons(n, a, e)
                } null != n && null != a || (null != n && (n.alternateRegistrationPanelNode.active = !1), null != a && (a.alternateRegistrationPanelNode.active = !1)), u.appConfig.getSecurityConfig().addCaptchaFieldFromClient && this.formName.includes("verification") && !t && this.createNewField(this.captchaSchema, this.formName != this.VERIFICATION_CODE_FORM_NAME), e.urlKey && e.urlKey.length > 0 ? this.urlKey = e.urlKey : "userInfo" == this.formName || "create_account" == this.formName ? this.urlKey = u.appConfig.getRegistrationConfig().userInfoForm.urlKey : "termsOfService" == this.formName ? (this.urlKey = u.appConfig.getRegistrationConfig().termsOfServiceForm.urlKey, this.node.getComponent(d).spacingY = 20) : this.formName.includes("verification") && (this.urlKey = u.appConfig.getRegistrationConfig().verificationForm.urlKey), e.titleKey && e.titleKey.length > 0 && (this.titleKey = e.titleKey), e.subTitleKey && e.subTitleKey.length > 0 && (this.subTitleKey = e.subTitleKey), u.resMgr.adaptWidget(this.node, !0, !1), this.checkAndEnableExtraNodes()
        }
        checkAndEnableExtraNodes() {
            let e = 0,
                i = -1;
            for (let t = 0, n = this.fields.length; t < n; t++) {
                let n = this.fields[t];
                n.node.active && "location" != n.schemaKey && (e++, "countryCode" == n.schemaKey && (i = t))
            }
            if (1 == e && i >= 0) {
                let e = this.fields[i].node.getChildByName("TitleLayout");
                e && (e.active = !0)
            }
        }
        requestVerificationCode(e, i = null, t = null) {
            let n = {
                    captcha: "",
                    version: u.config.GET_CLIENT_VERSION(),
                    device_uuid: u.native.GetDeviceUUID(),
                    reportError: !0
                },
                a = "email";
            for (let d = 0; d < this.fields.length; d++) {
                let c = this.fields[d],
                    h = c.schemaFull.name;
                if (T.isSameString(h, "phone") || T.isSameString(h, "email")) {
                    var o;
                    let d = null;
                    var l, r, s;
                    if (T.isSameString(h, "phone") && c.node.active ? (d = c.getComponent(b), d.addValueToObject(n), a = "sms") : T.isSameString(h, "email") && c.node.active && (d = c.getComponent(E), d.addValueToObject(n), a = "email"), null == (o = this.captchaField) || o.addValueToObject(n), d)
                        if (null == e && (e = this.findVerificationCodeField()), c.valid)
                            if (null == e || null != (l = e) && l.canSendCodeAgain(n)) null == (r = e) || r.setRequestCodeMsg(g.sending), u.httpHandler.getVerificationCode(n, this.onVerificationCodeSuccedded.bind(this, a, i), this.onGetVerificationCodeFailed.bind(this, a, t));
                            else setTimeout((() => {
                                var t;
                                null == (t = e) || t.setRequestCodeMsg(g.success, u.dataHandler.getUserData().verificationType), null == i || i()
                            }), 0);
                    else c.error && this.showFieldError(c, c.error), null == (s = e) || s.setRequestCodeMsg(g.error)
                }
            }
        }
        resendVerificationCode(e, i, t = null) {
            if (!0 === this.captchaField.doValidate()) {
                let r = {
                        captcha: "",
                        version: u.config.GET_CLIENT_VERSION(),
                        device_uuid: u.native.GetDeviceUUID(),
                        reportError: !0
                    },
                    s = "email";
                for (let d = 0; d < this.fields.length; d++) {
                    let c = this.fields[d],
                        h = c.schemaFull.name;
                    if (T.isSameString(h, "code")) {
                        var n;
                        let d = null;
                        var a, o, l;
                        if (d = c.getComponent(p), s = null == (n = d) ? void 0 : n.verficationMethod, d) r.verificationType = null == (a = d) ? void 0 : a.verficationMethod, null == (o = this.captchaField) || o.addValueToObject(r), null != i && (r = {
                            ...r,
                            ...i
                        }), null == e && (e = this.findVerificationCodeField()), null == (l = e) || l.setRequestCodeMsg(g.sending), u.httpHandler.getVerificationCode(r, this.onVerificationCodeSuccedded.bind(this, s, t), this.onGetVerificationCodeFailed.bind(this, s))
                    }
                }
            }
        }
        showFieldError(e, i) {
            e.showInvalidEffects(), F.hideAllTooltips(), F.showToolTipsForFieldValidator(e, u.config.getStringData("Attention"), i)
        }
        onVerificationCodeSuccedded(e, i, t, n, a) {
            let o = u.httpHandler.getErrorMessage(t),
                l = "email" in a,
                r = (l ? u.Enum.PopUpIconType.Email : u.Enum.PopUpIconType.Phone, this.findVerificationCodeField());
            if (null != o) {
                let e = l ? this.findFieldByName("email") : this.findFieldByName("phone");
                null == r || r.setRequestCodeMsg(g.error), this.showFieldError(e, o.description)
            } else {
                null == r || r.setRequestCodeMsg(g.success), null == i || i();
                let n = u.httpHandler.getResponseMessage(t);
                n ? w.getInstance().show(n, !1) : w.getInstance().showi18n(T.isSameString(e, "email") ? "ChangePassword_code_sent_Email" : "ChangePassword_code_sent_Phone", !1)
            }
            let s = {
                method: l ? "email" : "sms",
                intent: "cta",
                status: "verificationSuccess"
            };
            N.getInstance().sendEvent(u.Enum.CurrentScreen.registrationStageOne, u.Enum.segmentEvent.CodeVerification, u.Enum.Functionality.registration, s)
        }
        findVerificationCodeField() {
            for (let e = 0; e < this.fields.length; e++) {
                let i = this.fields[e];
                if (i.getComponent(p)) return i.getComponent(p)
            }
            return null
        }
        findFieldByName(e) {
            for (let i = 0; i < this.fields.length; i++) {
                let t = this.fields[i];
                if (T.isSameString(t.schemaFull.name, e)) return t
            }
            return null
        }
        onGetVerificationCodeFailed(e, i, t) {
            let n = this.findVerificationCodeField();
            null == n || n.setRequestCodeMsg(g.error), i && i(t);
            let a = {
                method: e,
                intent: "cta",
                status: "verificationFailure"
            };
            N.getInstance().sendEvent(u.Enum.CurrentScreen.registrationStageOne, u.Enum.segmentEvent.CodeVerification, u.Enum.Functionality.registration, a)
        }
        createNewField(e, i = !0) {
            let t = this.getFieldValidatorFromSchema(e);
            var n, a;
            null != t && (this.addFormComponent(t, i), this.formName === this.VERIFICATION_CODE_FORM_NAME && (null == (n = this.vCodeField) || n.attachCaptchaNodeToVCodeField(null == (a = this.captchaField) ? void 0 : a.node)))
        }
        initChangeRegMethodButtons(e, i, t) {
            null != i && (i.node.active = !1, this.hideAlternativeRegField = !0);
            e.addButton.on("click", (n => {
                e.node.active = !1, e.constraints[0].isRequired = !1, i.node.active = !0, i.constraints[0].isRequired = !0, this.updateGetCodeButton(i, t), this.checkAndSetAutoFocus(), this.removeOldVerficationDataFromObjValues(e.schemaKey), this.onChangeCheckFormValid(), this.selectedRegistrationMode = "sms" == t ? S.Phone : S.Email;
                let a = {
                    intent: "cta",
                    label: "sms" == t ? "use mobile" : "use email"
                };
                N.getInstance().sendEvent(u.Enum.CurrentScreen.registrationStageOne, u.Enum.segmentEvent.VerificationMethodChosen, u.Enum.Functionality.registration, a)
            }));
            i.addButton.on("click", (n => {
                i.node.active = !1, i.constraints[0].isRequired = !1, e.node.active = !0, e.constraints[0].isRequired = !0, this.updateGetCodeButton(e, T.isSameString(t, "sms") ? "email" : "sms"), this.checkAndSetAutoFocus(), this.removeOldVerficationDataFromObjValues(i.schemaKey), this.onChangeCheckFormValid(), this.selectedRegistrationMode = T.isSameString(t, "sms") ? S.Email : S.Phone;
                let a = {
                    intent: "cta",
                    label: T.isSameString(t, "sms") ? "use email" : "use mobile"
                };
                N.getInstance().sendEvent(u.Enum.CurrentScreen.registrationStageOne, u.Enum.segmentEvent.VerificationMethodChosen, u.Enum.Functionality.registration, a)
            }))
        }
        removeOldVerficationDataFromObjValues(e) {
            delete this.objValues[e]
        }
        updateGetCodeButton(e, i) {
            const t = e.getComponentInChildren(C);
            var n;
            t && (this.vCodeField ? null == (n = this.vCodeField) || n.setCountDownButton(t, i) : t && (t.node.active = !1))
        }
        getFieldValidatorFromSchema(e) {
            let i = null,
                t = e.name;
            return T.isSameString(t, "location") ? i = c(this.locationFieldPrefab).getComponent(m) : T.isSameString(t, "userName") ? i = c(this.userNameFieldPrefab).getComponent(m) : T.isSameString(t, "password") ? i = c(this.passwordFieldPrefab).getComponent(m) : T.isSameString(t, "nick_name") ? i = c(this.nickNameFieldPrefab).getComponent(m) : T.isSameString(t, "gender") ? (i = c(this.genderFieldPrefab).getComponent(m), u.appConfig.getRegistrationConfig().showGenderField || (i.node.active = !1)) : T.isSameString(t, "email") ? (i = c(this.emailFieldPrefab).getComponent(m), i.addVerificationTypeInValue = !0) : T.isSameString(t, "phone") ? (i = c(this.phoneNumberFieldPrefab).getComponent(m), i.addVerificationTypeInValue = !0) : T.isSameString(t, "verifyToken") ? (i = c(this.captchaPrefab).getComponent(m), this.captchaField = i) : T.isSameString(t, "code") || T.isSameString(t, "verificationCode") ? (e.urlKey = "WEB_API_VCODE", i = c(this.verificationCodeFieldPrefab).getComponent(m), this.vCodeField = i.getComponent(p), this.vCodeField.requestCallback = this.resendVerificationCode.bind(this)) : T.isSameString(t, u.Enum.InputSchemaKey.BonusCode) ? i = c(this.bonusCodeFieldPrefab).getComponent(m) : T.isSameString(t, u.appConfig.getFormsConfig().invitationCode.key) ? i = c(this.invitationCodeFieldPrefab).getComponent(m) : T.isSameString(t, "firstName") ? i = c(this.firstNameFieldPrefab).getComponent(m) : T.isSameString(t, "middleName") ? i = c(this.middleNameFieldPrefab).getComponent(m) : T.isSameString(t, "lastName") ? i = c(this.lastNameFieldPrefab).getComponent(m) : T.isSameString(t, "dateOfBirth") ? i = c(this.birthDateFieldPrefab).getComponent(m) : T.isSameString(t, "countryCode") ? i = c(this.countryFieldPrefab).getComponent(m) : T.isSameString(t, "acceptPromotions") ? i = c(this.acceptPromoFieldPrefab).getComponent(m) : T.isSameString(t, "acceptTerms") ? (i = c(this.acceptTermsFieldPrefab).getComponent(m), this.initCheckbox(i, "acceptTermsToggleRichText")) : T.isSameString(t, "aboveMinAge") ? i = c(this.acceptMinAgeFieldPrefab).getComponent(m) : T.isSameString(t, "acceptPrivacyPolicy") ? i = c(this.acceptPrivacyPolicyFieldPrefab).getComponent(m) : T.isSameString(t, "confirmInformationIsCorrect") ? i = c(this.acceptInfoTrueFieldPrefab).getComponent(m) : T.isSameString(t, "acceptLegalDocs") && (i = c(this.legalDocumentPrefab).getComponent(m), this.initCheckbox(i, "legalDocumentToggleRichText")), i && (i.initFieldFromSchema(e), this.getVCodeButton || (this.getVCodeButton = i.getComponentInChildren(C), this.getVCodeButton && "code" !== t && (this.getVCodeButton.node.active = !1, this.getVCodeButtonMethod = T.isSameString(t, "email") ? "email" : "sms"))), i
        }
        initCheckbox(e, i) {
            let t = e;
            t.i18TextKey = i;
            let n = t.node.getComponentInChildren(r);
            n && (this.updateRichTextString(n, i), this.checkBoxFields.push(t))
        }
        updateRichTextString(e, i) {
            const t = v.getInstance().getColor(u.appConfig.themeUse, y.Other, P.W400, V.TypoGraphySecond).toHEX(),
                n = v.getInstance().getColor(u.appConfig.themeUse, y.Other, P.W400, V.MainBlue).toHEX();
            let a = null;
            a = u.config.getCurrentLanguage() === u.Enum.LANGUAGE_TYPE.ja_JP ? u.StringTools.formatC(u.config.getStringData(i), n, t, n, t) : u.StringTools.formatC(u.config.getStringData(i), t, n, t, n), e.string = a
        }
        get formValid() {
            return this._isFormValid
        }
        set formValid(e) {
            this._isFormValid != e && (this._isFormValid = e, this.showOrHideInvalid(!e))
        }
        update() {
            if (this.invalidHide && this.invalidHide.length > 0 || this.invalidShow && this.invalidShow.length > 0) {
                let e = this.fields.length;
                for (let i = 0; i < e; i++) {
                    let e = this.fields[i];
                    if (null != e && !e.isFieldValid()) return void(this.formValid = !1)
                }
                this.formValid = !0
            }
        }
        showOrHideInvalid(e) {
            if (this.invalidHide) {
                let i = this.invalidHide.length;
                for (let t = 0; t < i; t++) {
                    let i = this.invalidHide[t];
                    null != i && (i.active = !e)
                }
            }
            if (this.invalidShow) {
                let i = this.invalidShow.length;
                for (let t = 0; t < i; t++) {
                    let i = this.invalidShow[t];
                    null != i && (i.active = e)
                }
            }
        }
        addFormComponent(e, i = !0) {
            i && this.addField(e), this.node.addChild(e.node)
        }
        toggleAllCheckboxes(e) {
            for (let i = 0, t = this.fields.length; i < t; i++) this.fields[i] instanceof f && (this.fields[i].value = e)
        }
        onChangeCheckFormValid() {
            const e = this.fields.every((e => e && (!e.node.activeInHierarchy || e.isFieldValid())));
            this.formValid = e, u.MessageCenter.send(u.Enum.MessageCenterAction.onUpdateRegisterNextButton, e)
        }
    }).prototype, "locationFieldPrefab", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = i(ee.prototype, "userNameFieldPrefab", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = i(ee.prototype, "passwordFieldPrefab", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = i(ee.prototype, "nickNameFieldPrefab", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = i(ee.prototype, "genderFieldPrefab", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = i(ee.prototype, "emailFieldPrefab", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = i(ee.prototype, "phoneNumberFieldPrefab", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = i(ee.prototype, "verificationCodeFieldPrefab", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = i(ee.prototype, "bonusCodeFieldPrefab", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = i(ee.prototype, "invitationCodeFieldPrefab", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = i(ee.prototype, "countryFieldPrefab", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = i(ee.prototype, "acceptPromoFieldPrefab", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = i(ee.prototype, "acceptTermsFieldPrefab", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fe = i(ee.prototype, "acceptMinAgeFieldPrefab", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = i(ee.prototype, "acceptPrivacyPolicyFieldPrefab", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = i(ee.prototype, "acceptInfoTrueFieldPrefab", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), be = i(ee.prototype, "legalDocumentPrefab", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ce = i(ee.prototype, "captchaPrefab", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Fe = i(ee.prototype, "firstNameFieldPrefab", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Se = i(ee.prototype, "middleNameFieldPrefab", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ve = i(ee.prototype, "lastNameFieldPrefab", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ye = i(ee.prototype, "birthDateFieldPrefab", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pe = i(ee.prototype, "invalidShow", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Ve = i(ee.prototype, "invalidHide", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), $ = ee)) || $));
    n._RF.pop()
}