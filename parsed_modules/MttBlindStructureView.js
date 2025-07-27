import * as e from "./cc.js";
import * as i from "./MVCView.js";
import * as c from "./MttBlindStructureComp.js";

function main() {
    e._RF.push({}, "f06a3k61mJDlKdVaSMcIWGr", "MttBlindStructureView", void 0);
    t("MttBlindStructureView", class extends i {
        constructor(...t) {
            super(...t), this.comp = void 0, this.onClickButtonBack = null, this.onHideCallBack = null
        }
        onAttachedEngineView(t) {
            this.comp = t.getComponent(c), this.comp.mvcView = this
        }
        updateView(t) {
            var e;
            null == (e = this.comp) || e.setInfo(t)
        }
        showBackBtn(t) {
            var e;
            null == (e = this.comp) || e.showBackBtn(t)
        }
        getNode() {
            var t;
            return null == (t = this.comp) ? void 0 : t.node
        }
        registerOnShowCallback(t) {
            this.comp.registerOnShowCallback(t)
        }
        registerOnHideCallback(t) {
            this.comp.registerOnHideCallback(t)
        }
        show() {
            this.comp.show()
        }
        hide() {
            this.comp.hide()
        }
        hideImmediately() {
            this.comp.hideImmediately()
        }
        isShowing() {
            return this.comp.isShowing()
        }
    }), e._RF.pop()
}