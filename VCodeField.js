import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./AnalyticsHandler.js";
import * as l from "./CountDownButton.js";
import * as h from "./EditBoxValidator.js";
import * as d from "./cv.js";
import * as c from "./ResourceManager.js";
import * as u from "./ThemeSystem.js";
import * as g from "./ColorSystemType.js";
import * as f from "./ColorSystemTypeOther.js";
import * as m from "./Enum.js";
import * as C from "./StringUtils.js";

function main() {
    var p, v, y, x, b, T, B, D, E, V, S, _, w, M;
    n._RF.push({}, "cb71d8YwTxEuKNLOQxtTbVU", "VCodeField", void 0);
    const {
        ccclass: I,
        property: A
    } = s;
    let k = t("requestCodeMsgType", function(t) {
        return t[t.sending = 0] = "sending", t[t.success = 1] = "success", t[t.error = 2] = "error", t[t.none = 3] = "none", t
    }({}));
    t("default", (p = A(l), v = A({
        type: [h]
    }), y = A({
        type: o
    }), x = A({
        type: o
    }), b = A({
        tooltip: "i18n key for verify phone number text"
    }), T = A({
        tooltip: "i18n key for verify email address text"
    }), I((E = e((D = class extends h {
        constructor(...t) {
            super(...t), i(this, "countDownButton", E, this), i(this, "v_code", V, this), i(this, "contactDetailText", S, this), i(this, "emailText", _, this), i(this, "phoneNumberKey", w, this), i(this, "emailKey", M, this), this.requestCallback = null, this.onValueChanged = null, this.verficationMethod = m.EMAIL, this.emailVal = void 0, this.emailSchemaKey = "", this.enteredCode = [], this.maySendVerificationCode = void 0
        }
        canSendCodeAgain(t) {
            var e, i;
            const n = C.isSameString(t.verificationType, "Email") ? null == t ? void 0 : t.email : null == t ? void 0 : t.phone;
            if (typeof n != typeof this.emailVal) return this.maySendVerificationCode = !0;
            const o = "string" == typeof n ? n === this.emailVal : (null == n ? void 0 : n.mobile) === (null == (e = this.emailVal) ? void 0 : e.mobile) && (null == n ? void 0 : n.areaCode) === (null == (i = this.emailVal) ? void 0 : i.areaCode);
            return this.maySendVerificationCode = !o || !this.countDownButton.isStillCounting, this.maySendVerificationCode
        }
        onLoad() {
            if (super.onLoad(), this.reset(), d.appConfig.isLandscapeLayout)
                for (let t = 0; t < this.v_code.length; t++) this.v_code[t].editBox.node.on("editing-did-ended", this.onBoxTextChangedFinish, this);
            else this.editBox.string = "", this.editBox.node.on("text-changed", this.onEditBoxTextChanged, this)
        }
        onBoxTextChangedFinish(t, e) {
            const i = d.native.getTextFromClipboard();
            if (i && i.length == this.v_code.length) {
                if (d.StringTools.isNumber(i)) {
                    var n;
                    for (let t = 0; t < this.v_code.length; t++) this.v_code[t].editBox.string = i.charAt(t), this.enteredCode[t] = i.charAt(t);
                    null == (n = this.onValueChanged) || n.call(this), t.blur(), this.isCodeComplete() && this.hideInvalidEffects()
                }
            }
        }
        onClickEditBox(t, e) {
            this.editBox.focus()
        }
        onEditBoxTextChanged(t) {
            var e;
            let i = t.string;
            const n = this.v_code.length;
            i = i.substring(i.length >= n ? i.length - n : 0);
            for (let t = 0; t < n; t++) {
                const e = i.length > t ? i.charAt(t) : "";
                this.enteredCode[t] = e, this.v_code[t].editBox.string = e
            }
            i.length >= n && (this.editBox.string = i, this.editBox.blur()), null == (e = this.onValueChanged) || e.call(this), this.isCodeComplete() && this.hideInvalidEffects()
        }
        onEnable() {
            super.onEnable(), c.updateWidget(this.errorToolTipText.node, !0, r.AlignMode.ALWAYS)
        }
        initFieldFromSchema(t) {
            super.initFieldFromSchema(t), this.countDownButton && (this.countDownButton.node.active = null != this.urlKey)
        }
        getCode() {
            if (this.countDownButton.isStillCounting) return void this.setRequestCodeMsg(k.success);
            this.reset(), this.requestVerificationCode();
            a.getInstance().sendEvent(d.Enum.CurrentScreen.validation, d.Enum.segmentEvent.Clicked, d.Enum.Functionality.registration, {
                item: "getTheCodeButton"
            });
            let t = {
                item: "getTheCodeButton",
                method: this.verficationMethod,
                intent: "cta",
                label: "get code"
            };
            a.getInstance().sendEvent(d.Enum.CurrentScreen.registrationStageOne, d.Enum.segmentEvent.GetCodeInitiated, d.Enum.Functionality.registration, t)
        }
        requestVerificationCode() {
            let t = {};
            t[this.emailSchemaKey] = this.emailVal, null != this.requestCallback && this.requestCallback(this, t)
        }
        setCountDownButton(t, e) {
            this.verficationMethod = e, this.countDownButton && this.countDownButton.node.off("click", this.getCode, this), this.countDownButton = t, this.countDownButton && this.countDownButton.node.on("click", this.getCode, this)
        }
        onBoxTextChanged(t, e, i) {
            var n;
            let o = parseInt(i);
            if (!isNaN(o)) {
                var s;
                if (isNaN(parseInt(t))) return e.string = "", this.enteredCode[o] = "", void(null == (s = this.onValueChanged) || s.call(this));
                this.enteredCode[o] = t, null == (n = this.onValueChanged) || n.call(this), e.blur(), this.isCodeComplete() && this.hideInvalidEffects(), this.focusNextInput(o)
            }
        }
        focusNextInput(t = 0) {
            for (let e = t + 1; e < this.v_code.length; e++)
                if (0 === this.v_code[e].editBox.string.length) return void this.v_code[e].editBox.focus();
            for (let e = 0; e < t; e++)
                if (0 === this.v_code[e].editBox.string.length) return void this.v_code[e].editBox.focus()
        }
        isCodeComplete() {
            return this.enteredCode.every((t => 1 === t.length))
        }
        reset(t = !1) {
            this.resetAllEditbox(), super.reset(t)
        }
        resetAllEditbox() {
            var t;
            for (let t = 0; t < this.v_code.length; t++) this.v_code[t].editBox.string = "", this.enteredCode[t] = "";
            this.hideInvalidEffects(), null == (t = this.onValueChanged) || t.call(this)
        }
        hideInvalidEffects() {
            for (let t = 0; t < this.v_code.length; t++) this.v_code[t].hideInvalidEffects();
            this.showOrHideErrorToolTipText(!1)
        }
        showOrHideErrorToolTipText(t, e = "") {
            let i = super.showOrHideErrorToolTipText(t, e);
            if (t && this.isCodeComplete())
                for (let t = 0; t < this.v_code.length; t++) this.v_code[t].showInvalidEffects();
            return i
        }
        updatePersonalDetailText(t, e = m.EMAIL, i = "") {
            null != t && (this.verficationMethod = e, this.emailSchemaKey = i, this.emailVal = t, this.maySendVerificationCode && this.countDownButton.reset(), this.setRequestCodeMsg(k.success, e, t))
        }
        setRequestCodeMsg(t, e = null, i = null) {
            if (!this.contactDetailText) return;
            null == e && (e = this.verficationMethod), null == i && (i = this.emailVal);
            let n = this.contactDetailText.getComponent(u);
            switch (t) {
                case k.sending:
                    this.contactDetailText.string = d.config.getStringData("ValidateEmailPhone_requestCode_sending_msg"), n.setColorScheme(g.Other, f.TypoGraphyMain), this.emailText.string = "", this.countDownButton.disable();
                    break;
                case k.success:
                    this.contactDetailText.string = this.contactMethodText(e), n.setColorScheme(g.Other, f.TypoGraphyMain), this.emailText.string = this.contactMethodMasked(e, i), this.countDownButton.isStillCounting || (this.countDownButton.startCountDown(!0), this.reset());
                    break;
                case k.error:
                    this.contactDetailText.string = d.config.getStringData("ValidateEmailPhone_requestCode_error_msg"), n.setColorScheme(g.Other, f.ErrorColor), this.emailText.string = "", this.countDownButton.reset();
                    break;
                case k.none:
                default:
                    this.contactDetailText.string = "", n.setColorScheme(g.Other, f.TypoGraphyMain), this.emailText.string = "", this.countDownButton.reset()
            }
        }
        contactMethodText(t = m.EMAIL) {
            let e = "";
            return e = t === m.EMAIL ? d.config.getStringData(this.emailKey) : d.config.getStringData(this.phoneNumberKey), e
        }
        contactMethodMasked(t = m.EMAIL, e = null) {
            if (e && ("string" == typeof e || Array.isArray(e) || "object" == typeof e) && Object.keys(e).length > 0) return this.maskPersonalDetail(e, t);
            let i = "";
            return i = t == m.EMAIL ? d.dataHandler.getUserData().email : {
                areaCode: d.dataHandler.getUserData().areaCodeWithPlus,
                mobile: d.dataHandler.getUserData().mobile
            }, this.maskPersonalDetail(i, t)
        }
        maskPersonalDetail(t, e) {
            if (!t || 0 === t.length) return "";
            if (e === m.EMAIL) {
                let [e, i] = t.split("@");
                return i ? `${e.length>3?e.substring(0,3)+"****":e}@${i}` : t
            }
            if (!t || !t.mobile) return "";
            return `${t.areaCode||""} ${t.mobile.replace(/(\d{2})\d+(\d{2})/,"$1****$2")}`
        }
        isFieldValid(t = !0) {
            return t ? !0 === this.doBaseValidate(!this._isValidated) : this._valid
        }
        doBaseValidate(t = !0) {
            let e = super.doBaseValidate(),
                i = 0;
            for (let e = 0; e < this.v_code.length; e++) {
                "" === this.v_code[e].editBox.string.trim() ? (t && this._isValidated && this.v_code[e].showInvalidEffects(), i++) : t && this.v_code[e].hideInvalidEffects()
            }
            return 0 === i && (e = !0), e
        }
        setValueFromObj(t) {}
        addValueToObject(t) {
            this.enteredCode.length > 0 && (t[this.schemaKey] = this.enteredCode.join(""))
        }
        attachCaptchaNodeToVCodeField(t) {
            var e, i;
            t && null != (e = this.countDownButton) && e.captchaNode && (t.setParent(null == (i = this.countDownButton) ? void 0 : i.captchaNode), this.countDownButton.isCaptchaValidationNeeded = !0)
        }
    }).prototype, "countDownButton", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(D.prototype, "v_code", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), S = e(D.prototype, "contactDetailText", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = e(D.prototype, "emailText", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(D.prototype, "phoneNumberKey", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), M = e(D.prototype, "emailKey", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), B = D)) || B));
    n._RF.pop()
}