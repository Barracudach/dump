import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as r from "./CowboyPromotionManager.js";
import * as m from "./AppConfig.js";
import * as u from "./Enum.js";
import * as l from "./cv.js";
import * as p from "./AnalyticsHandler.js";

function main() {
    var h, d, g, y;
    o._RF.push({}, "ce8a8Li6+9ParT9b/2D8laY", "MiniGameComboPromoPopup", void 0);
    const {
        ccclass: E,
        property: P
    } = a;
    t("default", (h = P(i), E((y = n((g = class extends s {
        constructor(...t) {
            super(...t), this.context = r.menuBarPopUp, this.trackingScreen = l.Enum.CurrentScreen.lobby, e(this, "nodeList", y, this)
        }
        onLoad() {
            if (this.node.active = !1, this.node.children.length > 0) {
                let t = m.Instance.isLandscapeLayout ? 1 : 1.34;
                this.node.children[0].setScale(c(t, t, t))
            }
        }
        showWithContext(t) {
            this.context = t, this.trackingScreen = t == r.mttGameFloatingIcon ? l.Enum.CurrentScreen.room : l.Enum.CurrentScreen.lobby, this.node.active = !0, l.tools.triggerPopupShowEvent(u.Promotion), this.playAnimation();
            const n = {
                creativeId: this.context.toString(),
                promotionName: "miniGame",
                item: "menuBar"
            };
            switch (this.context) {
                case r.mttGameFloatingIcon:
                    n.item = "cashRoom"
            }
            p.getInstance().sendEvent(this.trackingScreen, l.Enum.segmentEvent.PromotionShown, l.Enum.Functionality.casino, n)
        }
        onCloseClicked() {
            l.AudioMgr.playButtonSound("button_click.mp3");
            let t = {
                creativeId: this.context.toString(),
                promotionName: "miniGame",
                item: "closeButton"
            };
            p.getInstance().sendEvent(this.trackingScreen, l.Enum.segmentEvent.PromotionCancelled, l.Enum.Functionality.casino, t), this.processClose()
        }
        onRemindLateClicked() {
            l.AudioMgr.playButtonSound("button_click.mp3");
            let t = {
                creativeId: this.context.toString(),
                promotionName: "miniGame",
                item: "remindMeLaterButton"
            };
            p.getInstance().sendEvent(this.trackingScreen, l.Enum.segmentEvent.PromotionShown, l.Enum.Functionality.casino, t), this.context == r.cashGameExitPopUp && l.cowboyPromotionManager.remindLaterFromCashGameExit(), this.processClose()
        }
        processClose() {
            this.node.active = !1, l.tools.triggerPopupHideEvent(u.Promotion)
        }
        onPlayNowClicked() {
            l.AudioMgr.playButtonSound("button_click.mp3");
            let t = {
                game: "pokerFlip",
                item: "popupPlayButton",
                context: this.context.toString()
            };
            switch (this.context) {
                case r.menuBarPopUp:
                    t.context = "menuBarPopup";
                    break;
                case r.cashGameExitPopUp:
                    t.context = "cashExitPopup";
                    break;
                case r.mttGameFloatingIcon:
                    t.context = "cashRoom", t.item = "notification"
            }
            p.getInstance().sendEvent(this.trackingScreen, l.Enum.segmentEvent.CasinoGameStarted, l.Enum.Functionality.casino, t), this.context == r.mttGameFloatingIcon ? this.node.active = !1 : (l.cowboyPromotionManager.data.instanceData.launchFromScreen = this.trackingScreen, l.MessageCenter.send(l.Enum.MessageCenterAction.OpenListMiniGamePopup, l.Enum.GameId.CowBoy)), this.processClose()
        }
        playAnimation(t) {
            for (let n = 0; n < this.nodeList.length; n++) {
                if (!this.nodeList[n]) return;
                const e = this.nodeList[n].getClips(),
                    o = js.isNumber(t) ? t : 0;
                o >= 0 && o < e.length && this.nodeList[n].play(e[o].name)
            }
        }
    }).prototype, "nodeList", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), d = g)) || d));
    o._RF.pop()
}