import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./cc.js";
import * as r from "./DesignSystemButtonBase.js";
import * as c from "./DesignSystemRegularButton.js";

function main() {
    var h, a, g, d, w, u, S;
    n._RF.push({}, "26215dzIJ9JDrOCaygrfric", "DesignSystemControlSwitch", void 0);
    const {
        ccclass: p,
        property: y,
        executeInEditMode: B,
        playOnFocus: f,
        executionOrder: m,
        requireComponent: b,
        menu: C
    } = o;
    t("default", (h = b(l), a = C("Design System/Design System Control Switch"), g = m(-1), d = y({
        tooltip: "set switch ball widget margin. will apply it on margin left when Switch on, on margin right when Switch off"
    }), p(w = h(w = a(w = B(w = f(w = g((S = i((u = class extends c {
        constructor(...t) {
            super(...t), this.switchBallWidget = null, this.switchBallShadowWidget = null, e(this, "switchBallMargin", S, this)
        }
        onLoad() {
            super.onLoad(), this.autoDectectBtnState = !0, this.switchBallWidget = this.border2Fill.renderedNode.getComponent(s), this.switchBallShadowWidget = this.border3Fill.renderedNode.getComponent(s), this.btnStyle != r.controlSwitch && this.btnStyle != r.pokerGroupFilterControlSwitchV2 && this.btnStyle != r.controlSwitchInPopUp && (this.btnStyle = r.controlSwitch), this.btnStyle != r.controlSwitch && this.btnStyle != r.controlSwitchInPopUp && (this.btnStyle = r.controlSwitch)
        }
        onCCToggleEvent(t) {
            super.onCCToggleEvent(t), this.switchBallWidget && this.moveSwitchBall(this.switchBallWidget), this.switchBallShadowWidget && this.moveSwitchBall(this.switchBallShadowWidget)
        }
        moveSwitchBall(t) {
            t.enabled = !0, t.alignMode = s.AlignMode.ALWAYS, this.isChecked ? (t.isAlignLeft = !1, t.isAlignRight = !0, t.right = this.switchBallMargin) : (t.isAlignRight = !1, t.isAlignLeft = !0, t.left = this.switchBallMargin)
        }
    }).prototype, "switchBallMargin", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 4
        }
    }), w = u)) || w) || w) || w) || w) || w) || w));
    n._RF.pop()
}