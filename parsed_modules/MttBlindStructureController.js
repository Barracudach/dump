import * as e from "./cc.js";
import * as i from "./MVCController.js";
import * as l from "./MttBlindStructureModel.js";
import * as r from "./MttBlindStructureView.js";

function main() {
    e._RF.push({}, "6c4a9Gla+RGIKJPE22Jr8oE", "MttBlindStructureController", void 0);
    t("default", class extends i {
        constructor(t) {
            super(r, l, t), this.view.onClickButtonBack = this.hide.bind(this)
        }
        registerPageShowCallback(t) {
            this.view.registerOnShowCallback(t)
        }
        registerPageHideCallback(t) {
            this.view.registerOnHideCallback(t)
        }
        updateInfo(t, e, i, l, r, s) {
            this.model.blindPots = t, this.model.currentLevel = e, this.model.levelStopSignUp = i, this.model.levelDuration = l, this.model.isShortDesk = r, this.model.blindHand = s, this.view.updateView(this.model)
        }
        show() {
            this.view.show()
        }
        hide() {
            this.view.hide()
        }
        hideImmediate() {
            this.view.hideImmediately()
        }
        isShowing() {
            return !!this.view.isShowing()
        }
    }), e._RF.pop()
}