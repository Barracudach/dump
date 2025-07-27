import * as t from "./cc.js";
import * as n from "./cc.js";
import * as i from "./MVCView.js";
import * as o from "./MTTDetailInfoLandscapeComp.js";

function main() {
    var s;
    t._RF.push({}, "e45fbJxgMhFXbkNfmcGEQO3", "MTTDetailInfoLandscapeView", void 0);
    const {
        ccclass: c,
        property: a
    } = n;
    e("MTTDetailInfoLandscapeView", c("MTTDetailInfoLandscapeView")(s = class extends i {
        constructor(...e) {
            super(...e), this.comp = null, this.onClickedSignUp = null, this.onDisableAction = null, this.getWindowNode = null, this.onRefreshUI = null
        }
        onAttachedEngineView(e) {
            this.comp = e.getComponent(o), this.comp.mvcView = this
        }
        updateView(e) {
            this.comp.updateInfo(e)
        }
        getCurLevelLabel() {
            return this.comp.getCurLevelLabel()
        }
        getSignUpButtonLabel() {
            return this.comp.getSignUpButtonLabel()
        }
        getSignUpButton() {
            return this.comp.getSignUpButton()
        }
        updatRoomStatus() {
            this.comp.updateRoomStatus()
        }
        setNextBreakTime() {
            this.comp.setNextBreakTime()
        }
        getRender() {
            return this.comp
        }
        isActive() {
            return this.comp.node.active
        }
        getGameClockLabel() {
            return this.comp.curTimeTxt
        }
        increaseCurLevel() {
            var e;
            null == (e = this.comp) || e.increaseCurLevel()
        }
        getUnregisterPopup() {
            var e;
            return null == (e = this.comp) ? void 0 : e.getUnregisterPopup()
        }
    }) || s);
    t._RF.pop()
}