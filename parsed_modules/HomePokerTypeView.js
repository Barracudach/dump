import * as t from "./cc.js";
import * as o from "./cc.js";
import * as i from "./MVCView.js";
import * as n from "./HomePokerTypeComp.js";
import * as s from "./HomePokerTypeComp.js";

function main() {
    t._RF.push({}, "8e7f2Po8JZPzahLqO4eePe5", "HomePokerTypeView", void 0);
    e("HomePokerTypeView", class extends i {
        constructor(...e) {
            super(...e), this.comp = void 0, this.eventListener = new o
        }
        onAttachedEngineView(e) {
            this.comp = e.getComponent(n), this.comp.setMvcViewTarget(this.eventListener), this.registerEventFromRenderer()
        }
        initView(e) {
            this.comp.createTabs(e.tabs)
        }
        registerEventFromRenderer() {
            this.eventListener.on(s.SHOW_HALL_TAB, this.onEventShowHallPokerTab, this), this.eventListener.on(s.SHOW_MY_MTT, this.onEventShowMyMtt, this)
        }
        onEventShowHallPokerTab(e) {
            this.emitEvent(s.SHOW_HALL_TAB, e)
        }
        onEventShowMyMtt() {
            this.emitEvent(s.SHOW_MY_MTT)
        }
        show() {
            this.comp && (this.comp.node.active = !0)
        }
        hide() {
            this.comp && (this.comp.node.active = !1)
        }
        updateMyMttCount(e) {
            var t;
            null == (t = this.comp) || t.updateMyMttCount(e)
        }
        isShow() {
            return this.comp && this.comp.node.active
        }
    }), t._RF.pop()
}