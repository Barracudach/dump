import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as l from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";

function main() {
    var o, c, u, p, b, g;
    i._RF.push({}, "e3988cMktZAp7CykRQ/oVoC", "PopUpItem", void 0);
    const {
        ccclass: h,
        property: f
    } = a;
    e("default", (o = f(r), c = f(s), h((b = t((p = class extends n {
        constructor(...e) {
            super(...e), l(this, "toggle", b, this), l(this, "label", g, this), this.listCallback = void 0
        }
        getValue() {
            return this.label.string
        }
        setValue(e) {
            this.label.string = e
        }
        select() {
            this.toggle.isChecked = !0
        }
        onItemClick(e, t) {
            null != this.listCallback && this.listCallback(e, this.label.string)
        }
        setCallback(e) {
            this.listCallback = e
        }
    }).prototype, "toggle", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(p.prototype, "label", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = p)) || u));
    i._RF.pop()
}