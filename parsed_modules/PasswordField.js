import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as n from "./EditBoxValidator.js";
import * as p from "./FormValidator.js";
import * as l from "./FormValidator.js";
import * as d from "./cv.js";

function main() {
    var h, u, g, c, w, m, v, f, _, k, F, P, A;
    a._RF.push({}, "9ea6fH587pKOLkIAx2gdp62", "PasswordField", void 0);
    const {
        ccclass: y,
        property: b,
        executionOrder: C
    } = r;
    e("default", (h = C(-1), u = b({
        override: !0,
        tooltip: "Payload key used to send this value to backend\n~ overwrite by AppConfig ~"
    }), g = b(n), c = b(i), w = b(i), m = b(i), y(v = h((_ = s((f = class extends n {
        constructor(...e) {
            super(...e), t(this, "schemaKey", _, this), t(this, "repeat_password", k, this), t(this, "passwordCheckUnmark", F, this), t(this, "passwordAgainCheckUnmark", P, this), t(this, "passwordAgainToggle", A, this), this.togglePass = null, this.togglePassAgain = null
        }
        onLoad() {
            super.onLoad();
            let e = d.appConfig.getFormsConfig().password;
            if (null != e) {
                this.schemaKey = e.key || this.schemaKey;
                let s = this.getFirstConstraintsOfType(l.Password, !1);
                null != s && (s.min = e.min.toString(), s.max = e.max.toString(), s.passwdStrength = e.strength), !e.showRepeatPassword && this.repeat_password && (this.repeat_password.node.active = !1, this.repeat_password = null, this.passwordAgainCheckUnmark && (this.passwordAgainCheckUnmark.active = !1), this.passwordAgainToggle && (this.passwordAgainToggle.active = !1))
            }
        }
        reset() {
            super.reset(), this.repeat_password && this.repeat_password.reset(!0), this.setViewPass(!1, !0), this.setViewPassAgain(!1, !0)
        }
        setForm(e, s) {
            var t;
            super.setForm(e, s), null == (t = this.repeat_password) || t.setForm(e, s)
        }
        getInvalidFieldNode() {
            let e = this.node,
                s = p.validateField(this);
            return !0 !== s ? this.onMouseEventNode && (e = this.onMouseEventNode) : this.repeat_password && (s = p.validate([this.repeat_password]), !0 !== s ? e = this.repeat_password.node : this.onMouseEventNode && (e = this.onMouseEventNode)), e
        }
        clearBindTooltips() {
            var e;
            super.clearBindTooltips(), null == (e = this.repeat_password) || e.clearBindTooltips()
        }
        setBindTooltips(e, s) {
            var t;
            super.setBindTooltips(e, s), null == (t = this.repeat_password) || t.setBindTooltips(e, s)
        }
        clear() {
            this.value = "", this.repeat_password && (this.repeat_password.value = "")
        }
        doValidate() {
            var e;
            let s = super.doValidate();
            return null == (e = this.repeat_password) || e.doValidate(), !0 !== s ? s : !this.repeat_password || (this._valid = this.repeat_password.valid, !0 === this._valid) || (this._error = this.repeat_password.error, this._error)
        }
        setValueFromObj(e) {
            super.setValueFromObj(e), this.repeat_password && (this.repeat_password.value = this.value)
        }
        addValueToObject(e, s = !1) {
            if (null == this.schemaKey || 0 == this.schemaKey.length) return;
            let t = this.value,
                a = d.appConfig.getFormsConfig().password;
            !1 === s && null != a && null != a.modifier && (t = a.modifier(t)), d.tools.traverseObjSet(e, this.schemaKey, t)
        }
        toggleViewPass(e) {
            this.togglePass = e, this.setViewPass(e.isChecked, !1)
        }
        setViewPass(e, s) {
            this.inputFlag = e ? o.InputFlag.DEFAULT : o.InputFlag.PASSWORD, this.passwordCheckUnmark && (this.passwordCheckUnmark.active = !e), s && this.togglePass && (this.togglePass.isChecked = e)
        }
        toggleViewPassAgain(e) {
            this.togglePassAgain = e, this.setViewPassAgain(e.isChecked, !1)
        }
        setViewPassAgain(e, s) {
            this.repeat_password && (this.repeat_password.inputFlag = e ? o.InputFlag.DEFAULT : o.InputFlag.PASSWORD), this.passwordAgainCheckUnmark && (this.passwordAgainCheckUnmark.active = !e), s && this.togglePassAgain && (this.togglePassAgain.isChecked = e)
        }
    }).prototype, "schemaKey", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), k = s(f.prototype, "repeat_password", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = s(f.prototype, "passwordCheckUnmark", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = s(f.prototype, "passwordAgainCheckUnmark", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = s(f.prototype, "passwordAgainToggle", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = f)) || v) || v));
    a._RF.pop()
}