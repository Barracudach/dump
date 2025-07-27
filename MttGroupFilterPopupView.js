import * as e from "./cc.js";
import * as i from "./MVCView.js";
import * as o from "./MttGroupFilterPopupComp.js";

function main() {
    e._RF.push({}, "3fa2ddIZNJJFbRhIvVBT7vl", "MttGroupFilterPopupView", void 0);
    t("MttGroupFilterPopupView", class extends i {
        constructor(...t) {
            super(...t), this.comp = void 0, this.onFilterOptionChanged = void 0
        }
        onAttachedEngineView(t) {
            this.comp = t.getComponent(o), this.comp.mvcView = this, this.comp.setCallback(this.onFilterOptionChanged)
        }
        initView(t) {}
        updateView(t, e = !0) {
            var i;
            null == (i = this.comp) || i.setActive(t.isShow, e)
        }
        setBuyinCustomField(t) {
            var e;
            null == (e = this.comp) || e.setBuyinCustomField(t)
        }
        reset() {
            var t;
            null == (t = this.comp) || t.onClickReset()
        }
    }), e._RF.pop()
}