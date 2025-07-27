import * as n from "./cc.js";
import * as i from "./cc.js";
import * as e from "./cc.js";
import * as s from "./SlideView.js";
import * as l from "./cv.js";
import * as o from "./AnalyticsHandler.js";

function main() {
    var c;
    e._RF.push({}, "a43ccMLUzNKNZHRoxhFH5FJ", "DepositPromoPopup", void 0);
    const {
        ccclass: a,
        property: u
    } = n;
    t("default", a(c = class extends i {
        constructor(...t) {
            super(...t), this.slideView = null, this.sureCallback = null, this.cancelCallback = null
        }
        onDisable() {
            l.tools.triggerPopupHideEvent()
        }
        onLoad() {
            this.slideView = this.getComponent(s)
        }
        showPopup(t, e) {
            l.tools.triggerPopupShowEvent(), this.sureCallback = t, this.cancelCallback = e, this.slideView ? this.slideView.show(!1) : this.node.active = !0;
            o.getInstance().sendEvent(l.Enum.CurrentScreen.registrationStageTwoOneLastStep, l.Enum.segmentEvent.ScreenOpened, l.Enum.Functionality.registration, {
                journey: "registration"
            })
        }
        onBtnSureClick() {
            var t;
            l.AudioMgr.playButtonSound("button_click.mp3"), this.hide();
            null == (t = this.sureCallback) || t.call(this, {
                intent: "cta",
                label: "continue"
            })
        }
        onBtnXClick() {
            var t;
            l.AudioMgr.playButtonSound("button_click.mp3"), this.hide(), null == (t = this.cancelCallback) || t.call(this)
        }
        hide() {
            this.slideView ? this.slideView.hide() : this.node.active = !1
        }
    }) || c);
    e._RF.pop()
}