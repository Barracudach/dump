import * as t from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as l from "./Holdem_Room_Landscape.js";
import * as a from "./Holdem_Scene_Landscape.js";
import * as c from "./CommonTools.js";
import * as s from "./DynamicPromoEnums.js";
import * as d from "./cv.js";
import * as u from "./MiniGameFloatingList.js";

function main() {
    var r;
    o._RF.push({}, "e8413rXBRVKiq96YKeMvk2X", "GlobalSpinFloatingIcon", void 0);
    const {
        ccclass: m,
        property: p
    } = i;
    n("default", m(r = class extends e {
        start() {
            this.node.active = !1, this.scheduleOnce((() => {
                var n;
                const o = null == (n = c.instance.getParentScene(t, this.node)) || null == (n = n.getComponentInChildren(a)) || null == (n = n.holdem_view_node) ? void 0 : n.getComponentInChildren(l),
                    e = u.findHoldemRoomParent(this.node);
                this.node.active = d.appConfig.getGameConfig().showGlobalSpinFloatingIcon && (null == o ? void 0 : o.isGlobalSpinGameMode()) && !(null != e && e.isReplay)
            }))
        }
        onClicked() {
            d.AudioMgr.playButtonSound("button_click.mp3"), d.MessageCenter.send(s.LoadPromotionView, {
                promoSlug: "global-spins-launch-promo",
                reloadWebiew: !0,
                focusHallWindow: !0
            })
        }
    }) || r);
    o._RF.pop()
}