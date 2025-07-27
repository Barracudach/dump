import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as c from "./TrackingComp.js";

function main() {
    var u, a, s, l, p, b, d, h;
    i._RF.push({}, "7fed1iqjm5Kl4cFcb42uA4r", "ButtonTracking", void 0);
    const {
        ccclass: g,
        property: f,
        executeInEditMode: k
    } = o;
    t("ButtonTracking", (u = f({
        override: !0,
        visible: !1
    }), a = f({
        override: !0,
        readonly: !0
    }), s = f(r), g(l = k((b = e((p = class extends c {
        constructor(...t) {
            super(...t), n(this, "trackOnLoad", b, this), n(this, "segmentEvent", d, this), n(this, "button", h, this)
        }
        onLoad() {
            this.button || (this.button = this.getComponent(r)), this.button && this.button.node.on("click", this.track, this)
        }
    }).prototype, "trackOnLoad", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), d = e(p.prototype, "segmentEvent", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return "Clicked"
        }
    }), h = e(p.prototype, "button", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), l = p)) || l) || l));
    i._RF.pop()
}