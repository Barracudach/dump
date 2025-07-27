import * as i from "./cc.js";
import * as e from "./MVCView.js";
import * as o from "./MttHallDetailPayoutComp.js";

function main() {
    i._RF.push({}, "a5b5fNwPJJJK63E6bpki70B", "MttHallDetailPayoutView", void 0);
    t("MttHallDetailPayoutView", class extends e {
        constructor(...t) {
            super(...t), this.comp = void 0, this.onClickButtonBack = null, this.onHideCallBack = null
        }
        onAttachedEngineView(t) {
            this.comp = t.getComponent(o), this.comp.mvcView = this
        }
        updateView(t) {
            var i;
            null == (i = this.comp) || i.updateInfo(t)
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
    }), i._RF.pop()
}