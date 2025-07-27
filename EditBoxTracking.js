import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as a from "./EditBoxValidator.js";
import * as d from "./TrackingComp.js";

function main() {
    var l, s, c, u, p, h, b, x, g, f, V;
    r._RF.push({}, "ce19fCfrvZM1bdlr47VNUHb", "EditBoxTracking", void 0);
    const {
        ccclass: B,
        property: m,
        executeInEditMode: y
    } = n;
    t("EditBoxTracking", (l = m({
        override: !0,
        visible: !1
    }), s = m({
        override: !0,
        readonly: !0
    }), c = m(a), u = m(o), B(p = y((b = i((h = class extends d {
        constructor(...t) {
            super(...t), e(this, "trackOnLoad", b, this), e(this, "segmentEvent", x, this), e(this, "editboxValidator", g, this), e(this, "editBox", f, this), e(this, "sendValidProperty", V, this)
        }
        onLoad() {
            this.editboxValidator || (this.editboxValidator = this.getComponent(a)), this.editBox || (this.editboxValidator && this.editboxValidator.editBox ? this.editBox = this.editboxValidator.editBox : this.editBox = this.getComponent(o)), this.editBox && this.editBox.node.on("editing-did-ended", this.track, this)
        }
        getProperties() {
            let t = {};
            return t.item = this.itemString, this.sendValidProperty && this.editboxValidator && (t.isValid = this.editboxValidator.valid), t
        }
    }).prototype, "trackOnLoad", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), x = i(h.prototype, "segmentEvent", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return "InputFieldValueEntered"
        }
    }), g = i(h.prototype, "editboxValidator", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = i(h.prototype, "editBox", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = i(h.prototype, "sendValidProperty", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), p = h)) || p) || p));
    r._RF.pop()
}