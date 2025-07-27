import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./FormValidator.js";
import * as u from "./FormValidator.js";
import * as s from "./FormValidator.js";
import * as h from "./FieldValidator.js";
import * as c from "./cv.js";

function main() {
    var m, f, b, d, y, g, v, T, q, w, x, N, C, z, F, I, V, E, S, K, M, D, R, P, k, A, B;
    n._RF.push({}, "00605+v8cBD7q/Y2lfZCwRS", "FieldValidatorConstraint", void 0);
    const {
        ccclass: _,
        property: j
    } = l;
    e("FieldValidatorConstraint", (m = _("FieldValidatorConstraint"), f = j({
        type: r(u)
    }), b = j(a), d = j({
        tooltip: "min value if is decimal or numeric, min length otherwise",
        visible: function() {
            return this.visibleMin
        }
    }), y = j({
        tooltip: "max value if is decimal or numeric, max length otherwise",
        visible: function() {
            return this.visibleMax
        }
    }), g = j({
        tooltip: "force check min,max as string length",
        visible: function() {
            return (this.visibleMin || this.visibleMax) && this.validationType != u.Age
        }
    }), v = j({
        tooltip: "this regex should be used to validate more complex inputs, like password or email",
        visible: function() {
            return this.validationType != u.Checkbox
        }
    }), T = j({
        type: o,
        tooltip: "other input value to be compared with this one"
    }), q = j({
        type: r(s),
        tooltip: "comparison mode between current value and `Equal To` value",
        visible: function() {
            return null != this.equalTo
        }
    }), w = j({
        tooltip: "if value of this is equal to default then comparison validation will not run",
        visible: function() {
            return this.equalToComparisonType != s.Equal && null != this.equalTo
        }
    }), x = j({
        tooltip: "label of other input to match, used in error handling",
        visible: function() {
            return null != this.equalTo
        }
    }), N = j({
        tooltip: "custom i18n key for validation error"
    }), C = j({
        type: r(p),
        tooltip: "Password validation strength\n~ overwrite by AppConfig ~",
        visible: function() {
            return this.validationType == u.Password
        }
    }), m((I = i((F = class {
        constructor() {
            t(this, "validationType", I, this), t(this, "isRequired", V, this), t(this, "min", E, this), t(this, "max", S, this), t(this, "asString", K, this), t(this, "pattern", M, this), t(this, "equalTo", D, this), t(this, "equalToComparisonType", R, this), t(this, "equalToExcludeValue", P, this), t(this, "equalToNameI18nKey", k, this), t(this, "customErrorI18nKey", A, this), t(this, "passwdStrength", B, this)
        }
        get equalToValue() {
            if (this.equalTo) {
                let e = this.equalTo.getComponent(h);
                return e ? e.value : this.equalTo.string
            }
            return null
        }
        get equalToName() {
            if (null != this.equalToNameI18nKey && this.equalToNameI18nKey.length > 0) return c.config.getStringData(this.equalToNameI18nKey, !1, this.equalToNameI18nKey);
            if (this.equalTo) {
                let e = this.equalTo.getComponent(h);
                if (e) return e.getName()
            }
            return ""
        }
        get patternRegexp() {
            return c.StringTools.getPatternRegexp(this.pattern)
        }
        get minNr() {
            if (null != this.min) {
                let e = parseInt(this.min);
                if (!isNaN(e)) return e
            }
            return null
        }
        get maxNr() {
            if (null != this.max) {
                let e = parseInt(this.max);
                if (!isNaN(e)) return e
            }
            return null
        }
        get visibleMax() {
            return this.validationType == u.Any || this.validationType == u.Text || this.validationType == u.Number || this.validationType == u.DateTime || this.validationType == u.Date || this.validationType == u.Username
        }
        get visibleMin() {
            return this.validationType == u.Age || this.visibleMax
        }
    }).prototype, "validationType", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return u.Any
        }
    }), V = i(F.prototype, "isRequired", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), E = i(F.prototype, "min", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), S = i(F.prototype, "max", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), K = i(F.prototype, "asString", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), M = i(F.prototype, "pattern", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), D = i(F.prototype, "equalTo", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = i(F.prototype, "equalToComparisonType", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return s.Equal
        }
    }), P = i(F.prototype, "equalToExcludeValue", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), k = i(F.prototype, "equalToNameI18nKey", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), A = i(F.prototype, "customErrorI18nKey", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), B = i(F.prototype, "passwdStrength", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return p.None
        }
    }), z = F)) || z));
    n._RF.pop()
}