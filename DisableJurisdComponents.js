import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as s from "./DisableJurisdBase.js";

function main() {
    var c, a, u, l, p;
    n._RF.push({}, "cf9b5KaBGZK9qXFoq+VcuH0", "DisableJurisdComponents", void 0);
    const {
        ccclass: d,
        property: f,
        menu: m,
        requireComponent: b,
        executeInEditMode: y,
        disallowMultiple: h,
        playOnFocus: D
    } = i;
    e("default", (c = m("Custom UI/Disable Jurisdiction Components"), a = f([r]), d(u = h(u = y(u = D(u = c((p = t((l = class extends s {
        constructor(...e) {
            super(...e), o(this, "componentArray", p, this)
        }
        reload() {
            this.enabled && this.componentArray.forEach((e => {
                e && (e.enabled = this.isShow())
            }))
        }
    }).prototype, "componentArray", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), u = l)) || u) || u) || u) || u) || u));
    n._RF.pop()
}