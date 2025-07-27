import * as t from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./FreshchatHandler.js";
import * as h from "./TooltipsHandler.js";
import * as r from "./TooltipsHandler.js";
import * as d from "./TooltipsManager.js";
import * as l from "./cv.js";
import * as u from "./CashierLobby.js";

function main() {
    var c;
    o._RF.push({}, "885e8V7j6tOtIxdaJ3ktpK+", "CashierLobbyLandscape", void 0);
    const {
        ccclass: p,
        property: C
    } = i;
    e("default", p(c = class extends u {
        onLoad() {
            null == super.onLoad || super.onLoad(), l.appConfig.getWalletConfig().showFreshChatWindow && a.getInstance().loadWebview(this.node)
        }
        start() {
            super.start(), this.mexicanCashierToolTipNode.on(s.EventType.MOUSE_ENTER, this.onMouseOver, this), this.mexicanCashierToolTipNode.on(s.EventType.MOUSE_LEAVE, this.onMouseLeave, this)
        }
        onDestroy() {
            null == super.onDestroy || super.onDestroy()
        }
        showToolTip(e, o, s) {
            this.hideToolTip();
            let i = e.getContentSize(),
                a = e.getComponent(t).anchorPoint,
                l = new n(i.width * (.5 - a.x), i.height * (0 - a.y)),
                u = e.convertToWorldSpaceAR(l);
            d.showToolTips(u, "", o, new n(0, 40), r.PointerDown, 374, h.Default, e)
        }
        onEnable() {
            super.onEnable()
        }
        onDisable() {
            super.onDisable(), l.MessageCenter.send(l.Enum.MessageCenterAction.onCashierWebViewHide)
        }
        onCashierNodeShowPos(e) {
            this.node.uuid === (null == e ? void 0 : e.uuid) && (this.showPromoOnCashierClose = !0, l.appConfig.getWalletConfig().showFreshChatWindow && l.dataHandler.getUserData().isLoggedIn() && !l.dataHandler.getUserData().isTouristUser && a.getInstance().initFreshchat(), this.processPopupQueue())
        }
        onCashierNodeAwayPos(e) {
            this.node.uuid === (null == e ? void 0 : e.uuid) && (l.MessageCenter.send(l.Enum.MessageCenterAction.onCashierWebViewHide), this.showPromoOnCashierClose && l.authenticator.showDelayedPromo(), this.showPromoOnCashierClose = !1)
        }
    }) || c);
    o._RF.pop()
}