import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./cc.js";
import * as s from "./cc.js";
import * as n from "./ConfigJurisdVisibleBaseNode.js";

function main() {
    var r, l, c, a, u, d;
    o._RF.push({}, "8fa9auj9kVFhbwdsSaTzP60", "ConfigJurisdEnableNode", void 0);
    const {
        ccclass: f,
        property: p,
        menu: h,
        requireComponent: b,
        executeInEditMode: g,
        disallowMultiple: y,
        playOnFocus: C,
        executionOrder: N
    } = s;
    e("default", (r = h("Custom UI/Config Jurisdiction Enable Node"), l = N(-1), c = p({
        tooltip: "If self node should be affected or not. Keep this Node enabled if this option is selected."
    }), f(a = y(a = g(a = C(a = r(a = l((d = i((u = class extends n {
        constructor(...e) {
            super(...e), t(this, "affectSelf", d, this)
        }
        reload() {
            this.affectSelf ? this.node.active = this.isApply() : this.setChildrenNodeVisible(this.isApply())
        }
    }).prototype, "affectSelf", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), a = u)) || a) || a) || a) || a) || a) || a));
    o._RF.pop()
}