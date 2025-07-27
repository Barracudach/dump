import * as t from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cv.js";
import * as i from "./libphonenumber.mjs_cjs=&original=.js";

function main() {
    t._RF.push({}, "1baa3/03tdLRbRzaJcQF6Bp", "FormValidator", void 0);
    let n = e("FormValidatorFieldType", function(e) {
            return e[e.Any = 0] = "Any", e[e.Text = 1] = "Text", e[e.Number = 2] = "Number", e[e.Email = 3] = "Email", e[e.Password = 4] = "Password", e[e.URL = 5] = "URL", e[e.Age = 6] = "Age", e[e.DateTime = 7] = "DateTime", e[e.Date = 8] = "Date", e[e.Checkbox = 9] = "Checkbox", e[e.Username = 10] = "Username", e[e.Phone = 11] = "Phone", e
        }({})),
        l = e("FieldComparisonType", function(e) {
            return e[e.Equal = 0] = "Equal", e[e.Lower = 1] = "Lower", e[e.LowerOrEqual = 2] = "LowerOrEqual", e[e.Greater = 3] = "Greater", e[e.GreaterOrEqual = 4] = "GreaterOrEqual", e[e.NotEqual = 5] = "NotEqual", e
        }({}));
    let s = e("PasswdStrength", function(e) {
        return e[e.None = 0] = "None", e[e.Space = 1] = "Space", e[e.RepetitiveChar = 2] = "RepetitiveChar", e[e.RepetitiveGroup = 4] = "RepetitiveGroup", e[e.Repetitive = 6] = "Repetitive", e[e.Uppercase = 8] = "Uppercase", e[e.Number = 16] = "Number", e[e.Strong = 24] = "Strong", e[e.Symbol = 32] = "Symbol", e[e.ExtraStrong = 56] = "ExtraStrong", e[e.Full = 63] = "Full", e
    }({}));
    class o {
        validate(e) {
            if (null != e) {
                let r;
                for (let t = 0; t < e.length; t++)
                    if (r = this.isFieldValidator(e[t]) ? e[t].doValidate() : this.validateField(e[t]), !0 !== r) return r
            }
            return !0
        }
        validateAll(e) {
            let t = [];
            if (null != e) {
                let a;
                for (let i = 0; i < e.length; i++) {
                    if (!r(e[i])) {
                        t.push(!0);
                        continue
                    }
                    let n = e[i];
                    n.node.activeInHierarchy ? (a = this.isFieldValidator(e[i]) ? n.doValidate() : this.validateField(e[i]), t.push(a)) : t.push(!0)
                }
            }
            return t
        }
        validateField(e) {
            let r = this.isFieldValidator(e) ? e.formValidatorField : e,
                t = !0;
            for (let a = 0; a < r.constraints.length; a++) {
                let i = r.constraints[a];
                if (i.isRequired && (t = this.validateRequired(r.value, r.name, i.customErrorI18nKey), !0 !== t)) return t;
                if (i.equalTo && (t = this.validateEquality(r.value, i.equalToValue, i.equalToComparisonType, r.name, i.equalToName, i.equalToExcludeValue, i.customErrorI18nKey), !0 !== t)) return t;
                if (i.validationType == n.Checkbox) return t;
                if (i.pattern && (t = this.validatePattern(r.value.toString(), i.patternRegexp, r.name, i.customErrorI18nKey), !0 !== t)) return t;
                switch (i.validationType) {
                    case n.Email:
                        t = this.validateEmail(r);
                        break;
                    case n.Password:
                        t = this.validatePassword(r.value, r.name, i);
                        break;
                    case n.URL:
                        t = this.validateURL(r.value, r.name, i.customErrorI18nKey);
                        break;
                    case n.Age:
                        t = this.validateAge(r.value, i.minNr, i.customErrorI18nKey);
                        break;
                    case n.Username:
                        t = this.validateUsername(r.value, r.name, i);
                        break;
                    case n.Phone:
                        let a = e;
                        t = this.validatePhone(a, r.name, i);
                        break;
                    default:
                        if (null != i.minNr || null != i.maxNr) {
                            t = "number" !== typeof r.value || i.asString ? this.validateLength(r.value.toString(), i.minNr, i.maxNr, r.name, i.customErrorI18nKey) : this.validateMinMax(r.value, i.minNr, i.maxNr, r.name, i.customErrorI18nKey)
                        }
                }
                if (!0 !== t) return t
            }
            return t
        }
        isFieldValidator(e) {
            return void 0 !== e.formValidatorField
        }
        validateEmail(e) {
            let r = e.value;
            if (null == r || 0 == r.length) return !0;
            let t = this.error("ServerErrorCode192", !1, "Incorrect Email Address");
            return !(r.length > 256) || t
        }
        validatePassword(e, r = "", t) {
            if (null == e || 0 == e.length) return !0;
            null == t && (t = {
                min: 8..toString(),
                max: 16..toString(),
                passwdStrength: s.Full
            });
            let i = this.validateLength(e, t.minNr || 8, t.maxNr || 16, r);
            if (!0 !== i) return i;
            let n = t.passwdStrength;
            if ((n & s.Space) === s.Space && -1 != e.search(" ")) return this.formatC(this.error("ErrorValidContainSpace", !1, "%s should not contain space"), r);
            if ((n & s.RepetitiveChar) === s.RepetitiveChar && this.haveRepetitiveChar(e)) return this.formatC(this.error("ErrorValidRepetition", !1, "%s should not contain repetitions"), r);
            if ((n & s.RepetitiveGroup) === s.RepetitiveGroup && this.haveRepetitiveGroups(e)) return this.formatC(this.error("ErrorValidRepetition", !1, "%s should not contain repetitions"), r);
            if (!t.pattern) {
                const r = a.appConfig.getFormsConfig().password.validations[s[n]];
                if (r && !r.regExp.test(e)) return this.error(r.errorMessage, !1, "Password should have at least 2 letters, 1 number, and 1 special character")
            }
            return !0
        }
        validatePattern(e, r, t = "", a) {
            return !(null != e && 0 != e.length && null != r && !r.test(e)) || this.formatC(this.error(a || "ErrorInvalidField", !1, "%s is invalid"), t)
        }
        validateURL(e, r = "", t) {
            if (null == e || 0 == e.length) return !0;
            return this.validatePattern(e, /^(https?:\/\/)?(www\.)?[-a-z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\\+.~#?&\/=]*)$/i, r, t)
        }
        validateUsername(e, r = "", t) {
            if (null == e || 0 == e.length) return !0;
            null == t && (t = {
                min: 8..toString(),
                max: 16..toString()
            });
            let i = this.validateLength(e, t.minNr || 8, t.maxNr || 16, r);
            if (!0 !== i) return i;
            if (!t.pattern) {
                if (!a.appConfig.getFormsConfig().userName.regexp.test(e)) return this.formatC(this.error(a.appConfig.getFormsConfig().userName.errorMessagei18Key, !1, "Username should start with letters and must contain only letters and numbers"), r)
            }
            return this.haveRepetitiveChar(e) ? this.formatC(this.error("ErrorValidRepetition", !1, "%s should not contain repetitions"), r) : !this.haveRepetitiveGroups(e) || this.formatC(this.error("ErrorValidRepetition", !1, "%s should not contain repetitions"), r)
        }
        haveRepetitiveChar(e) {
            if (null == e || 0 == e.length) return !1;
            return /(.)\1{2,}/g.test(e)
        }
        haveRepetitiveGroups(e) {
            if (null == e || 0 == e.length) return !1;
            return /([a-zA-Z0-9]{2,})\1{2,}/g.test(e)
        }
        validatePhone(e, r = "", t) {
            let n = e.value;
            if (isNaN(Number(n))) return n = "", this.formatC(this.error((null == t ? void 0 : t.customErrorI18nKey) || "ErrorInvalidField", !1, "%s is invalid"), r);
            let l = e.fullAreaCode,
                s = null == l ? void 0 : l.split("+")[0];
            if (null == n || 0 == n.length) return !0;
            if (null != s && s.length > 0 && (null == t || !t.pattern)) return !! function(e, r) {
                try {
                    const t = i.PhoneNumberUtil.getInstance().parseAndKeepRawInput(e, r);
                    return i.PhoneNumberUtil.getInstance().isValidNumber(t)
                } catch (e) {
                    return !1
                }
            }(n, s) || a.StringTools.formatC(a.config.getStringData((null == t ? void 0 : t.customErrorI18nKey) || "ErrorInvalidField", !1, "%s is invalid"), r);
            let o = this.validateLength(n, 5, 14, r);
            return !0 === o || o
        }
        validateAge(e, r, t) {
            if (null == e) return !0;
            if ("number" == typeof e && isNaN(e)) return !0;
            if (e instanceof Date && isNaN(e.getTime())) return this.error("ErrorInvalidDate", !1, "Invalid Date");
            if (null == r || isNaN(r)) return !0;
            if ("number" == typeof e) {
                if (e >= r) return !0
            } else {
                if (Math.floor(((new Date).getTime() - e.getTime()) / 1e3 / 86400 / 365.25) >= r) return !0
            }
            return this.formatC(this.error(t || "ErrorValidAge", !1, "You must be at least %d years old"), r)
        }
        validateRequired(e, r = "", t) {
            let a = typeof e;
            if ("boolean" === a) {
                if (!0 === e) return !0
            } else if ("number" === a) {
                if (null != e && !isNaN(e)) return !0
            } else if (null != e && e.toString().length > 0) return !0;
            return this.formatC(this.error(t || "ErrorValidRequired", !1, "%s is required"), r)
        }
        validateEquality(e, r, t, a = "", i = "", n, s) {
            if (null == e || null == r) return !0;
            e instanceof Date && (e = new Date(e).getTime()), r instanceof Date && (r = new Date(r).getTime()), n && n instanceof Date && (n = new Date(n).getTime());
            let o = null != n && (e == n || r == n);
            switch (t) {
                case l.Equal:
                    if (!1 === o && e != r) return this.formatC(this.error(s || "ErrorMatchFields", !1, "%s does not match %s"), a, i);
                    break;
                case l.NotEqual:
                    if (!1 === o && e == r) return this.formatC(this.error(s || "ErrorMatchFieldsNotEqual", !1, "%s should not be the same as %s"), a, i);
                    break;
                case l.Lower:
                    if (!1 === o && e >= r) return this.formatC(this.error(s || "ErrorMatchFieldsLower", !1, "%s must be lower than %s"), a, i);
                    break;
                case l.LowerOrEqual:
                    if (!1 === o && e > r) return this.formatC(this.error(s || "ErrorMatchFieldsLowerEqual", !1, "%s must be lower than or equal to %s"), a, i);
                    break;
                case l.Greater:
                    if (!1 === o && e <= r) return this.formatC(this.error(s || "ErrorMatchFieldsGreater", !1, "%s must be greater than %s"), a, i);
                    break;
                case l.GreaterOrEqual:
                    if (!1 === o && e < r) return this.formatC(this.error(s || "ErrorMatchFieldsGreaterEqual", !1, "%s must be greater than or equal to %s"), a, i)
            }
            return !0
        }
        validateLength(e, r, t, a = "", i) {
            if (null == e || 0 == e.toString().length) return !0;
            let n = this.getStrLen(e.toString());
            if (null != r && null != t && r > 0 && t >= r) {
                if (n < r || n > t) return r == t ? this.formatC(this.error(i || "ErrorValidMinMaxExactLengthString", !1, "%s should have exactly %d characters"), a, r) : this.formatC(this.error(i || "ErrorValidMinMaxString", !1, "%s should have between %d and %d characters"), a, r, t)
            } else if (null != r && r > 0) {
                if (n < r) return this.formatC(this.error(i || "ErrorValidMinString", !1, "%s should have minimum %d characters"), a, r)
            } else if (null != t && t > 0 && n > t) return this.formatC(this.error(i || "ErrorValidMaxString", !1, "%s should have maximum %d characters"), a, t);
            return !0
        }
        validateLengthMin(e, r, t = "", a) {
            return this.validateLength(e, r, null, t, a)
        }
        validateLengthMax(e, r, t = "", a) {
            return this.validateLength(e, null, r, t, a)
        }
        validateMinMax(e, r, t, a = "", i) {
            if (null == e || isNaN(e)) return !0;
            let n = this.strip(e);
            if (null != r && null != t) {
                if (n < r || n > t) return this.formatC(this.error(i || "ErrorValidMinMaxNumber", !1, "%s should be between %d and %d"), a, r, t)
            } else if (null != r) {
                if (n < r) return this.formatC(this.error(i || "ErrorValidMinNumber", !1, "%s should be greater than %d"), a, r)
            } else if (null != t && n > t) return this.formatC(this.error(i || "ErrorValidMaxNumber", !1, "%s should be lower than %d"), a, t);
            return !0
        }
        validateMin(e, r, t = "", a) {
            return this.validateMinMax(e, r, null, t, a)
        }
        validateMax(e, r, t = "", a) {
            return this.validateMinMax(e, null, r, t, a)
        }
        error(e, r, t) {
            return a.config.getStringData(e, r, t)
        }
        getStrLen(e) {
            return a.StringTools.getStrLen(e)
        }
        strip(e, r = 12) {
            return a.numFix.strip(e, r)
        }
        formatC(e, ...r) {
            return a.StringTools.formatC(e, ...r)
        }
    }
    e("default", o);
    e("formValidator", new o);
    t._RF.pop()
}