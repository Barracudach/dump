import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as c from "./TooltipsManager.js";
import * as a from "./cv.js";
import * as u from "./BindNewDevice.js";

function main() {
    var l, p, r, v, B, f, x;
    n._RF.push({}, "1b5ccD/VX9MWYPH85bdh8Ri", "BindNewDeviceLandscape", void 0);
    const {
        ccclass: I,
        property: w,
        executionOrder: E
    } = s;
    t("BindNewDeviceLandscape", (l = E(1), p = w(o), r = w(o), I(v = l((f = i((B = class extends u {
        constructor(...t) {
            super(...t), e(this, "validButton", f, this), e(this, "invalidButton", x, this)
        }
        onEnable() {
            super.onEnable(), this.node.on(a.Enum.CustomEvent.ActionShowFinish, this.onShowFinish, this), this.phoneInput.editBox.node.on(h.EventType.TEXT_CHANGED, this.checkValidation, this), this.vcodeInput.editBox.node.on(h.EventType.TEXT_CHANGED, this.checkValidation, this), this.checkValidation()
        }
        onDisable() {
            super.onDisable(), this.node.off(a.Enum.CustomEvent.ActionShowFinish, this.onShowFinish, this), d(this.phoneInput, !0) && d(this.phoneInput.editBox, !0) && d(this.phoneInput.editBox.node, !0) && this.phoneInput.editBox.node.off("text-changed", this.checkValidation, this), d(this.vcodeInput, !0) && d(this.vcodeInput.editBox, !0) && d(this.vcodeInput.editBox.node, !0) && this.vcodeInput.editBox.node.off("text-changed", this.checkValidation, this)
        }
        onShowFinish() {
            this.autoFocus()
        }
        autoFocus() {
            0 == this.phoneInput.string.length ? this.phoneInput.editBox.focus() : 0 == this.vcodeInput.string.length && this.vcodeInput.editBox.focus()
        }
        checkValidation() {
            let t = this.phoneInput.isFieldValid(!1) && this.vcodeInput.isFieldValid(!1);
            this.updateButtons(t)
        }
        updateButtons(t) {
            this.validButton.active = t, this.invalidButton.active = !t
        }
        showValidationMsg(t, i) {
            this.updateButtons(!1), null != i ? (i.showInvalidEffectsOnServerError(), c.hideAllTooltips(), c.showToolTipsForFieldValidator(i, t.title, t.txt)) : super.showValidationMsg(t, i)
        }
        onBtnBack() {
            c.hideAllTooltips(), super.onBtnBack()
        }
    }).prototype, "validButton", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = i(B.prototype, "invalidButton", [r], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = B)) || v) || v));
    n._RF.pop()
}