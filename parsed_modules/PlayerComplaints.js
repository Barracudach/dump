import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as s from "./cc.js";
import * as a from "./profile_player_complaint.js";
import * as r from "./cv.js";
import * as l from "./AnalyticsHandler.js";
import * as c from "./FreshchatHandler.js";

function main() {
    var u, p, h, d, g;
    o._RF.push({}, "e1356X5uF5DK6v15y2vO3HA", "PlayerComplaints", void 0);
    const {
        ccclass: m,
        property: y
    } = s;
    e("default", (u = y({
        tooltip: "PopUp just show in, not PopUp slide from right to left"
    }), m(((g = class e extends a {
        constructor(...e) {
            super(...e), n(this, "isPopUp", d, this), this.backToView = null
        }
        onEnable() {
            super.onEnable(), e.onChangeState.emit("state", !0), l.getInstance().sendEvent(r.Enum.CurrentScreen.playerSupport, r.Enum.segmentEvent.ScreenOpened, r.Enum.Functionality.registration, {
                journey: "registration"
            })
        }
        onDisable() {
            e.onChangeState.emit("state", !1), r.tools.triggerPopupHideEvent()
        }
        show(e = !1) {
            r.tools.triggerPopupShowEvent(), this._handleMainEntrance = !1, this.showScreenAnim()
        }
        showScreenAnim() {
            this.isPopUp ? this.node.active = !0 : super.showScreenAnim()
        }
        phoneButtonPressed(e, t) {
            this.onPhone()
        }
        emailButtonPressed(e, t) {
            this.onEmail(e, t)
        }
        backButtonPressed(e, t) {
            r.AudioMgr.playButtonSound("close.mp3"), this.hidePanel()
        }
        hidePanel() {
            null == a.closeCallback || a.closeCallback(), this.backToView ? r.action.showActionBothRight(this.backToView, this.node, r.action.delay_type.NORMAL, null, null, null, null) : this.node.active = !1
        }
        onFreshChatBtnClick() {
            r.AudioMgr.playButtonSound("button_click.mp3"), c.getInstance().openExternalWindow || (this.hidePanel(), r.MessageCenter.send("switchSceneToEarnView")), c.getInstance().expandFreshChat()
        }
    }).onChangeState = new i, d = t((h = g).prototype, "isPopUp", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), p = h)) || p));
    o._RF.pop()
}