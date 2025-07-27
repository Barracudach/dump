import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var a, u, c, p, g, b, d, h, v;
    r._RF.push({}, "fe8f6c6rSVLcZSVAji4gO6p", "MTTUnregisterComp", void 0);
    const {
        ccclass: f,
        property: m
    } = l;
    e("MTTUnregisterComp", (a = f("MTTUnregisterComp"), u = m(n), c = m(s), p = m(s), a((d = t((b = class extends o {
        constructor(...e) {
            super(...e), i(this, "unregisterButton", d, this), i(this, "unregisterLabel_active", h, this), i(this, "unregisterLabel_disable", v, this), this.mvcView = null
        }
        show() {
            this.node.active = !0
        }
        hide(e = null) {
            this.node.active = !1, e && e()
        }
        updateInfo(e) {
            this.updateUnregisterButtonState(!0)
        }
        updateUnregisterButtonState(e) {
            this.unregisterButton.interactable = e, this.unregisterLabel_active.active = e, this.unregisterLabel_disable.active = !e
        }
        onUnregisterClicked() {
            var e;
            null == (e = this.mvcView) || e.onUnregisterBtnClicked()
        }
        onCancelClicked() {
            var e;
            null == (e = this.mvcView) || e.onCancelBtnClicked()
        }
    }).prototype, "unregisterButton", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = t(b.prototype, "unregisterLabel_active", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(b.prototype, "unregisterLabel_disable", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = b)) || g));
    r._RF.pop()
}