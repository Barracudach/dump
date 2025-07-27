import * as t from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as r from "./Holdem_Room_Landscape.js";
import * as c from "./Holdem_Scene_Landscape.js";
import * as d from "./CommonTools.js";
import * as l from "./AnalyticsHandler.js";
import * as u from "./cv.js";

function main() {
    var m;
    n._RF.push({}, "5807bwKwM9BHIloX9g8Npx6", "MiniGameFloatingList", void 0);
    const {
        ccclass: h,
        property: g
    } = a;
    e("default", h(m = class e extends t {
        constructor(...e) {
            super(...e), this.firstTimeCheckToShow = !0
        }
        onLoad() {
            u.MessageCenter.register(u.Enum.MessageCenterAction.OnMiniGameStart, this.checkAndShow.bind(this), this.node), u.MessageCenter.register(u.Enum.MessageCenterAction.OnRoomWindowClosed, this.checkAndShow.bind(this), this)
        }
        start() {
            this.node.active = !1, this.scheduleOnce((() => {
                this.checkAndShow()
            }))
        }
        onDestroy() {
            u.MessageCenter.unregister(u.Enum.MessageCenterAction.OnMiniGameStart, this.node), u.MessageCenter.unregister(u.Enum.MessageCenterAction.OnRoomWindowClosed, this.checkAndShow.bind(this))
        }
        static findHoldemRoomParent(e) {
            let n = null,
                t = e;
            for (let e = 0; e < 100 && (t = t.parent, t && !n); e++) {
                if (t instanceof o) return null;
                n = t.getComponent(r)
            }
            return n
        }
        checkAndShow(n = null) {
            var t;
            if (!i(this.node, !0)) return;
            const o = !this.node.active || this.firstTimeCheckToShow,
                a = null == (t = d.instance.getParentScene(s, this.node)) || null == (t = t.getComponentInChildren(c)) || null == (t = t.holdem_view_node) ? void 0 : t.getComponentInChildren(r),
                m = e.findHoldemRoomParent(this.node),
                h = null == a ? void 0 : a.isGlobalSpinGameMode(),
                g = null == m ? void 0 : m.isReplay;
            this.node.active = u.appConfig.isLandscapeLayout && !h && !g && (!u.roomManager.isJoinedMiniGame() || u.roomManager.checkIsMiniGame(null == n ? void 0 : n.getCurrentGameID())), this.firstTimeCheckToShow = !1, o && this.node.active && l.getInstance().sendEvent(u.Enum.CurrentScreen.room, u.Enum.segmentEvent.PromotionShown, u.Enum.Functionality.casino, {
                creativeId: "tournamentGameNotification",
                promotionName: "miniGame"
            })
        }
    }) || m);
    n._RF.pop()
}