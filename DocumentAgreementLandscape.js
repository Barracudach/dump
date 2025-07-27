import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as c from "./cc.js";
import * as s from "./DocumentAgreement.js";

function main() {
    var a, u, d, p;
    c._RF.push({}, "1e9carf1fdKy7XVbnBmXiUZ", "DocumentAgreementLandscape", void 0);
    const {
        ccclass: l,
        property: m
    } = i;
    e("DocumentAgreementLandscape", (a = m(o), l((p = t((d = class extends s {
        constructor(...e) {
            super(...e), n(this, "backBtn", p, this)
        }
        onDocLoaded(e) {
            super.onDocLoaded(e), this.backBtn.active = !this.skipBtn.active
        }
        hide() {
            r(this.node) && (this.node.active = !1)
        }
        show() {
            r(this.node) && (this.node.active = !0)
        }
    }).prototype, "backBtn", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = d)) || u));
    c._RF.pop()
}