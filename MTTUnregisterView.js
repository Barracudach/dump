import * as e from "./cc.js";
import * as i from "./MVCView.js";
import * as n from "./MTTUnregisterComp.js";

function main() {
    e._RF.push({}, "c8c64jVDilF8Yux8vqSMrNW", "MTTUnregisterView", void 0);
    t("MTTUnregisterView", class extends i {
        constructor(...t) {
            super(...t), this.comp = null, this.isShowing = !1, this.onUnregisterBtnClicked = void 0, this.onCancelBtnClicked = void 0
        }
        onAttachedEngineView(t) {
            this.comp = t.getComponent(n), this.comp.mvcView = this
        }
        updateView(t) {
            var e;
            null == (e = this.comp) || e.updateInfo(t)
        }
        show() {
            var t;
            this.isShowing = !0, null == (t = this.comp) || t.show()
        }
        hide(t = null) {
            var e;
            this.isShowing = !1, null == (e = this.comp) || e.hide(t)
        }
        updateUnregisterButtonState(t) {
            var e;
            null == (e = this.comp) || e.updateUnregisterButtonState(t)
        }
    }), e._RF.pop()
}