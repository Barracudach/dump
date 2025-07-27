import * as e from "./cc.js";
import * as n from "./BaseAdvancedAuto.js";

function main() {
    e._RF.push({}, "9a128m/emhAG6XWIrLVYIGP", "ConcreteAdvancedAuto", void 0);
    t("ConcreteAdvancedAuto", class extends n {
        setCountUpdateCallback(t) {
            var e;
            null == (e = this.implementation) || e.betCountUpdateCallback(t)
        }
        showSelectPanel(t, e) {
            this.implementation.showSelectPanel(t, e)
        }
        hideSelectPanel(t) {
            this.implementation.hideSelectPanel(t)
        }
        adaptSelectPanelPos(t) {
            this.implementation.adaptSelectPanelPos(t)
        }
        showAdvanceAutoTips(t) {
            this.implementation.showAdvanceAutoTips(t)
        }
        hideAdvanceAutoTips() {
            this.implementation.hideAdvanceAutoTips()
        }
        adaptAdvanceAutoTipsPos(t) {
            this.implementation.adaptAdvanceAutoTipsPos(t)
        }
        showAdvanceAutoCount() {
            this.implementation.showAdvanceAutoCount()
        }
        hideAdvanceAutoCount() {
            this.implementation.hideAdvanceAutoCount()
        }
        adaptAdvanceAutoCountPos(t) {
            this.implementation.adaptAdvanceAutoCountPos(t)
        }
    }), e._RF.pop()
}