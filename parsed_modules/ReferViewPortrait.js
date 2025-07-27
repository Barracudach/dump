import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as a from "./ReferView.js";
import * as s from "./SlideView.js";
import * as l from "./InviteFriendsView.js";
import * as c from "./InviteFriendsView.js";
import * as d from "./cv.js";
import * as p from "./NodeScreenshot.js";
import * as u from "./NodeScreenshot.js";

function main() {
    var f, v, h, w;
    n._RF.push({}, "35c04w911BIWpuHU10sliV0", "ReferViewPortrait", void 0);
    const {
        ccclass: V,
        property: g
    } = r;
    e("default", (f = g(s), V((w = t((h = class extends a {
        constructor(...e) {
            super(...e), i(this, "slideView", w, this)
        }
        show() {
            this.node.active = !0;
            this.slideView.show(!1, (() => {
                this.node.active = !1
            }))
        }
        hide() {
            this.slideView.hide()
        }
        onBtnCopyToClipboard() {
            d.appConfig.isWebApp ? super.onBtnCopyToClipboard() : (c.inviteFriendP2PEvent(l.InviteButton), a.sendReferalCodeAndLink(d.dataHandler.getUserData().referralCode + "\n\n" + d.dataHandler.getUserData().referralInviteLink))
        }
        onBtnSaveImage() {
            super.onBtnSaveImage(), o(this.captureNode) && u.captureWithType(this.captureNode, p.SHARE_IMAGE, d.config.getStringData("Refer_view_title"))
        }
    }).prototype, "slideView", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = h)) || v));
    n._RF.pop()
}