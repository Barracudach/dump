import * as o from "./cc.js";
import * as e from "./cc.js";
import * as n from "./MttSignUpBoxPkw.js";
import * as s from "./MttSignUpBoxPkw.js";

function main() {
    var c;
    e._RF.push({}, "84857/tUvZOQoKT3DIL09Wo", "MttSignUpBoxPkwLandscape", void 0);
    const {
        ccclass: i,
        property: a
    } = o;
    t("default", i(c = class extends s {
        start() {}
        update(t) {}
        createTickets() {
            super.createTickets(), this.showBuyIn("")
        }
        showRegistrationExtra() {
            super.showRegistrationExtra(), this.title.node.active = !0
        }
        showReenterExtra() {
            super.showReenterExtra(), this.showDate(!1), this.title.node.active = !1
        }
        activeOptions() {}
        checkGoldBuyIn() {
            super.checkGoldBuyIn()
        }
        setBuyInTexts(t) {}
        showBuyIn(t) {
            super.showBuyIn(t), this.signUpBoxProperty.toolOption || this.checkGoldBuyIn()
        }
        setStartDateText(t) {}
        activeStartDateText(t) {}
        onSelectBuyInOption(t) {
            t == n.tool && this.oneTool ? (this.toolSelected = this.oneTool, this.onToolToggleSelected(!0)) : (this.toolSelected = null, this.onGoldToggleSelected(!0))
        }
        clickBuyInToggle(t) {
            let e = parseInt(t.checkEvents[0].customEventData);
            this.onSelectBuyInOption(e)
        }
    }) || c);
    e._RF.pop()
}