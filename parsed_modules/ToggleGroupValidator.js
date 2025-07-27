import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as l from "./cc.js";
import * as i from "./FieldValidator.js";
import * as u from "./CustomToggleGroup.js";

function main() {
    var s, g, a, c, d, p, h, C;
    r._RF.push({}, "696c7uJOi5DJpeZw10jydD5", "ToggleGroupValidator", void 0);
    const {
        ccclass: m,
        property: f,
        menu: G
    } = n;
    e("default", (s = m("ToggleGroupValidator"), g = G("Custom UI/Validator/ToggleGroupValidator"), a = f(l), c = f(u), s(d = g((h = t((p = class extends i {
        constructor(...e) {
            super(...e), o(this, "toggleContainer", h, this), o(this, "toggleGroupCustom", C, this)
        }
        get value() {
            return this.getCheckedIndexFromGroups(this.toggleContainer, this.toggleGroupCustom)
        }
        set value(e) {
            this.setCheckedIndexFromGroups(e, this.toggleContainer, this.toggleGroupCustom)
        }
        clear() {
            this.value = 0
        }
        onLoad() {
            super.onLoad(), this.toggleGroupCustom && (this.toggleGroupCustom = this.node.getComponent(u))
        }
        getCheckedIndexFromGroups(...e) {
            for (let t = 0, o = e.length; t < o; t++)
                if (null != e[t]) return this.getCheckedIndex(e[t].toggleItems)
        }
        getCheckedIndex(e) {
            for (let t = 0, o = e.length; t < o; t++)
                if (e[t].isChecked) return t
        }
        setCheckedIndexFromGroups(e, ...t) {
            for (let o = 0, r = t.length; o < r; o++) null != t[o] && this.setCheckedIndex(e, t[o].toggleItems)
        }
        setCheckedIndex(e, t) {
            for (let o = 0, r = t.length; o < r; o++) t[o].isChecked = o == e
        }
    }).prototype, "toggleContainer", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(p.prototype, "toggleGroupCustom", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = p)) || d) || d));
    r._RF.pop()
}