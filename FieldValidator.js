import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./FormValidator.js";
import * as c from "./FormValidator.js";
import * as f from "./cv.js";
import * as v from "./FieldValidatorConstraint.js";
import * as g from "./borderGraphic.js";
import * as p from "./AutoConfigNodes.js";
import * as y from "./DesignSystemConfigs.js";
import * as m from "./DesignSystemConfigs.js";
import * as T from "./ThemeSystemModel.js";
import * as b from "./AppConfig.js";
import * as C from "./CustomHintsValidator.js";

function main() {
    var w, V, x, E, F, H, I, S, _, K, O, R, A, B, N, k, D, z, L, j, U, P, q, G, M, Z;
    o._RF.push({}, "1bffc2O3ZtNLJCyUyHmZBdG", "FieldValidator", void 0);
    const {
        ccclass: J,
        property: Q,
        menu: W,
        executionOrder: X
    } = s;
    class Y extends h {}
    i("default", (w = W("Custom UI/Validator/FieldValidator"), V = X(-1), x = Q({
        tooltip: "Form should ignore this field from submit?"
    }), E = Q(l), F = Q(l), H = Q({
        type: n,
        tooltip: "Node affected when field is invalid"
    }), I = Q({
        type: n,
        tooltip: "Node showed/hidden when field is invalid/valid"
    }), S = Q({
        type: n,
        tooltip: "Node hidden/showed when field is invalid/valid"
    }), _ = Q({
        type: r,
        tooltip: "Error tool tip label to showed/hidden when field is invalid/valid after text is changed"
    }), K = Q({
        type: a,
        tooltip: "Error tool tip richtext to showed/hidden when field is invalid/valid after text is changed"
    }), O = Q({
        type: C
    }), R = Q({
        tooltip: "Force return value as string"
    }), A = Q({
        type: v
    }), J(B = w(B = V((k = t((N = class extends Y {
        constructor(...i) {
            super(...i), e(this, "ignoreFromSubmit", k, this), e(this, "schemaKey", D, this), e(this, "nameI18nKey", z, this), e(this, "invalidAffect", L, this), e(this, "invalidShow", j, this), e(this, "invalidHide", U, this), e(this, "errorToolTipText", P, this), e(this, "errorToolTipRichText", q, this), e(this, "validatorHints", G, this), e(this, "asString", M, this), e(this, "constraints", Z, this), this.urlKey = null, this.schemaFull = null, this.m_invalidAffectInitColor = null, this.invalidBorder = null, this.onValidCallback = null, this.onDisableCallback = null, this.isBindedToTooltips = !1, this._valid = !1, this._error = "", this._isValidated = !1
        }
        get value() {
            return ""
        }
        set value(i) {}
        clear() {}
        get valid() {
            return this.doValidate(), this._valid
        }
        isFieldValid(i = !0) {
            return i ? !0 === this.doBaseValidate(!1) : this._valid
        }
        getInvalidFieldNode() {
            return this.node
        }
        get error() {
            return this._error
        }
        get formValidatorField() {
            return {
                value: this.value,
                name: this.getName(),
                constraints: this.constraints
            }
        }
        onLoad() {
            if (null != this.invalidAffect && (this.invalidBorder = this.invalidAffect.getComponent(g)), this.validatorHints) {
                let i = this.getFirstConstraints();
                this.validatorHints.init(i.minNr, i.maxNr)
            }
        }
        onEnable() {
            this._isValidated || this.doValidateOnShowHideNodes()
        }
        onDisable() {
            var i;
            null == (i = this.onDisableCallback) || i.call(this)
        }
        clearBindTooltips() {
            this.onValidCallback = null, this.onDisableCallback = null, this.isBindedToTooltips = !1
        }
        setBindTooltips(i, t) {
            this.onValidCallback = i, this.onDisableCallback = t, this.isBindedToTooltips = !0
        }
        reset(i = !1) {
            var t;
            this._valid = !1, this._error = "", this._isValidated = !1, this.hideInvalidEffects(), this.toggleValidEffects(!1), this.toggleInvalidEffects(!1), this.clear(), null == (t = this.validatorHints) || t.reset(), i && this.doValidateOnShowHideNodes()
        }
        initFieldFromSchema(i) {
            let t = this.getFirstConstraints();
            if (i) {
                var e;
                let o = f.tools.checkNestedValue(f.appConfig.getFormsConfig(), i.name, "key");
                this.schemaKey = o || i.name, this.nameI18nKey = i.name.trim(), t.isRequired = i.required, t.validationType === c.Any && (t.validationType = c[i.type] || c.Any), i.minLength && (t.min = i.minLength), i.maxLength && (t.max = i.maxLength);
                let l = this.getRegexConstraints();
                i.validationRegEx && i.validationRegEx.length > 0 && (l.pattern = i.validationRegEx), i.validationRegExErrorKey && i.validationRegExErrorKey.length > 0 && (l.customErrorI18nKey = i.validationRegExErrorKey), i.urlKey && i.urlKey.length > 0 && (this.urlKey = i.urlKey);
                const n = null == (e = i.defaultValue) ? void 0 : e.trim();
                null != n && "" !== n && this.setDefualtValue(n), this.schemaFull = i
            }
            this.validatorHints && this.validatorHints.init(t.minNr, t.maxNr)
        }
        setDefualtValue(i) {
            this.value = i
        }
        getFirstConstraints() {
            return 0 == this.constraints.length && this.constraints.push(new v), this.constraints[0]
        }
        getRegexConstraints(i = !0) {
            let t = null;
            for (let i = 0, e = this.constraints.length; i < e; i++)
                if (this.constraints[i].pattern.length > 0 || this.fieldTypeHaveCustomRegexValidation(this.constraints[i])) {
                    t = this.constraints[i];
                    break
                } return null == t && i && (t = new v, this.constraints.push(t)), t
        }
        fieldTypeHaveCustomRegexValidation(i) {
            return i.validationType == c.Password || i.validationType == c.URL || i.validationType == c.Username || i.validationType == c.Phone
        }
        getFirstConstraintsOfType(i, t = !0) {
            let e = null;
            for (let t = 0, o = this.constraints.length; t < o; t++)
                if (this.constraints[t].validationType == i) {
                    e = this.constraints[t];
                    break
                } return null == e && t && (e = new v, e.validationType = i, this.constraints.push(e)), e
        }
        doBaseValidate(i = !0) {
            return this.validatorHints ? this.validatorHints.validate(this.value.toString(), this._isValidated && i) : u.validateField(this.formValidatorField)
        }
        doValidate() {
            let i = this.doBaseValidate();
            return !0 === i ? (this._valid = !0, this._error = "", this.hideInvalidEffects()) : (this._valid = !1, this._error = !1 === i ? "" : i, this.showInvalidEffects()), this.node.activeInHierarchy && (this._isValidated = !0), i
        }
        doValidateOnShowHideNodes() {
            let i = this.doBaseValidate();
            !0 === i ? (this._valid = !0, this._error = "", this.showOrHideInvalid(!1)) : (this._valid = !1, this._error = !1 === i ? "" : i, this.showOrHideInvalid(!0)), this.node.activeInHierarchy && (this._isValidated = !0)
        }
        showInvalidEffects() {
            if (null != this.invalidAffect) {
                let i = m[y.error];
                this.invalidBorder ? p.configure(this.invalidBorder, i) : (this.m_invalidAffectInitColor = this.invalidAffect.getComponent(d).color, this.invalidAffect.getComponent(d).color = T.getInstance().getColor(b.Instance.themeUse, i["strokesColor.colorScheme"], null, i["strokesColor.colorSchemeOther"]))
            }
            this.showOrHideErrorToolTipText(!0, this._error), this.showOrHideInvalid(!0)
        }
        hideInvalidEffects() {
            var i;
            null != this.invalidAffect && (this.invalidBorder ? p.configure(this.invalidBorder, m[y.normal]) : null != this.m_invalidAffectInitColor && (this.invalidAffect.getComponent(d).color = this.m_invalidAffectInitColor)), this.showOrHideErrorToolTipText(!1), this.showOrHideInvalid(!1), null == (i = this.onValidCallback) || i.call(this)
        }
        showOrHideErrorToolTipText(i, t = "") {
            return this.errorToolTipText ? (null != t && t.length > 0 ? (this.errorToolTipText.string = t, this.errorToolTipText.node.active = i) : this.errorToolTipText.node.active = !1, !0) : !!this.errorToolTipRichText && (this.errorToolTipRichText.string = t, this.errorToolTipRichText.node.parent.active = i, !0)
        }
        showOrHideInvalid(i) {
            var t, e;
            (null == (t = this.getFirstConstraints()) ? void 0 : t.isRequired) || 0 != (null == (e = this.formValidatorField) || null == (e = e.value) ? void 0 : e.toString().length) ? (this.toggleValidEffects(!i), this.toggleInvalidEffects(i)) : this.toggleValidEffects(!1)
        }
        toggleValidEffects(i) {
            if (this.invalidHide) {
                let t = this.invalidHide.length;
                for (let e = 0; e < t; e++) {
                    let t = this.invalidHide[e];
                    null != t && (t.active = i)
                }
            }
        }
        toggleInvalidEffects(i) {
            if (this.invalidShow) {
                let t = this.invalidShow.length;
                for (let e = 0; e < t; e++) {
                    let t = this.invalidShow[e];
                    null != t && (t.active = i)
                }
            }
        }
        getName() {
            return f.config.getStringData(this.nameI18nKey, !1, this.nameI18nKey)
        }
        setValueFromObj(i) {
            if (null == this.schemaKey || 0 == this.schemaKey.length) return;
            let t = f.tools.traverseObjGet(i, this.schemaKey);
            void 0 !== t && "object" != typeof t && (this.value = t)
        }
        addValueToObject(i, t = !1) {
            null != this.schemaKey && 0 != this.schemaKey.length && f.tools.traverseObjSet(i, this.schemaKey, this.value)
        }
        removeValueFromObj(i) {
            null != this.schemaKey && 0 != this.schemaKey.length && f.tools.traverseObjRemove(i, this.schemaKey)
        }
        formatServerError(i) {
            f.appConfig.getFormsConfig().code.key.toLowerCase(), f.appConfig.getFormsConfig().verificationCode.key.toLowerCase();
            let t = this.getName(),
                e = f.config.getStringData("serverErrorCode" + i.code, !1, i.description || "Unknown error occured");
            return e = f.StringTools.formatC(e, t.toLowerCase()), null != t && t.length > 0 && this.showInvalidEffectsOnServerError(), e
        }
        showInvalidEffectsOnServerError() {
            this._valid = !1, this._isValidated = !0, this.showInvalidEffects()
        }
    }).prototype, "ignoreFromSubmit", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), D = t(N.prototype, "schemaKey", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), z = t(N.prototype, "nameI18nKey", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), L = t(N.prototype, "invalidAffect", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(N.prototype, "invalidShow", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), U = t(N.prototype, "invalidHide", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), P = t(N.prototype, "errorToolTipText", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(N.prototype, "errorToolTipRichText", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(N.prototype, "validatorHints", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(N.prototype, "asString", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), Z = t(N.prototype, "constraints", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), B = N)) || B) || B) || B));
    o._RF.pop()
}