import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as e from "./cc.js";
import * as i from "./FieldValidator.js";
import * as a from "./DropDown.js";

function main() {
    var l, s, p, u, c, d;
    e._RF.push({}, "b35912BnpBIUoXDm3Vm7S7U", "DropDownValidator", void 0);
    const {
        ccclass: D,
        property: w,
        menu: f
    } = n;
    o("DropDownValidator", (l = D("DropDownValidator"), s = f("Custom UI/Validator/DropDownValidator"), p = w(a), l(u = s((d = r((c = class extends i {
        constructor(...o) {
            super(...o), t(this, "dropDown", d, this)
        }
        get value() {
            return this.dropDown.value
        }
        set value(o) {
            this.dropDown.value = o
        }
        clear() {
            this.dropDown.selectedIndex = 0
        }
        onLoad() {
            super.onLoad(), null == this.dropDown && (this.dropDown = this.node.getComponent(a))
        }
    }).prototype, "dropDown", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = c)) || u) || u));
    e._RF.pop()
}