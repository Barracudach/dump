import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as l from "./cc.js";
import * as s from "./cc.js";
import * as n from "./FieldValidator.js";
import * as c from "./CustomToggle.js";

function main() {
    var g, u, a, h, d, m, p, C;
    i._RF.push({}, "5799aZuzz5Pi5sQFraBxYro", "CheckboxValidator", void 0);
    const {
        ccclass: k,
        property: f,
        menu: T
    } = l;
    e("CheckboxValidator", (g = k("CheckboxValidator"), u = T("Custom UI/Validator/CheckboxValidator"), a = f(s), h = f(c), g(d = u((p = t((m = class extends n {
        constructor(...e) {
            super(...e), o(this, "toggle", p, this), o(this, "customToggle", C, this), this.i18TextKey = "", this.maxNodeWidth = 0
        }
        get isChecked() {
            return this.toggle ? this.toggle.isChecked : !!this.customToggle && this.customToggle.isChecked
        }
        set isChecked(e) {
            this.toggle && (this.toggle.isChecked = e), this.customToggle && (this.customToggle.isChecked = e)
        }
        get value() {
            return this.isChecked
        }
        set value(e) {
            this.isChecked = e
        }
        clear() {
            this.value = !1
        }
        onLoad() {
            super.onLoad(), this.maxNodeWidth = this.node.getComponent(r).width, null == this.toggle && (this.toggle = this.node.getComponent(s)), null == this.customToggle && (this.customToggle = this.node.getComponent(c))
        }
    }).prototype, "toggle", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(m.prototype, "customToggle", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = m)) || d) || d));
    i._RF.pop()
}