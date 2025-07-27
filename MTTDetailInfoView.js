import * as t from "./cc.js";
import * as i from "./MVCView.js";
import * as o from "./MTTDetailInfoComp.js";

function main() {
    t._RF.push({}, "7e4bdv/I7NKR6xfpeaCYxR1", "MTTDetailInfoView", void 0);
    e("MTTDetailInfoView", class extends i {
        constructor(...e) {
            super(...e), this.comp = void 0, this.onClickButtonBack = null, this.onHideCallBack = null, this.onClickShowAllTargetEvent = null, this.onToggleOverlayButton = null
        }
        onAttachedEngineView(e) {
            this.comp = e.getComponent(o), this.comp.mvcView = this
        }
        updateView(e) {
            this.comp.updateInfo(e)
        }
        updateTargetEvent(e, t) {
            this.comp.setTargetEvents(e, t)
        }
        getNode() {
            var e;
            return null == (e = this.comp) ? void 0 : e.node
        }
        removeAllChildren() {
            var e;
            null == (e = this.comp) || e.removeAllChildren()
        }
        isValidObject() {
            var e;
            return (null == (e = this.comp) ? void 0 : e.isValidObject()) ?? !1
        }
        onLanguageChange() {
            var e;
            null == (e = this.comp) || e.onLanguageChange()
        }
        registerOnShowCallback(e) {
            this.comp.registerOnShowCallback(e)
        }
        registerOnHideCallback(e) {
            this.comp.registerOnHideCallback(e)
        }
        show() {
            this.comp.show()
        }
        showImmdiately() {
            this.comp.showImmdiately()
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
        schedulerAction() {
            this.comp.updateNextBreak()
        }
    }), t._RF.pop()
}