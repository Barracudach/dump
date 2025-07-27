import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as o from "./ReferView.js";
import * as a from "./ReferViewNotifyMsg.js";
import * as u from "./cv.js";
import * as f from "./InviteFriendsView.js";
import * as c from "./InviteFriendsView.js";
import * as g from "./NodeScreenshot.js";

function main() {
    var l, p, d, v;
    n._RF.push({}, "96954Yw3KlBKIhg0xoIL5si", "ReferViewLandscape", void 0);
    const {
        ccclass: h,
        property: y
    } = r;
    e("default", (l = y(a), h((v = t((d = class extends o {
        constructor(...e) {
            super(...e), i(this, "referViewNotifyMsg", v, this)
        }
        onLoad() {
            super.onLoad(), u.MessageCenter.register(u.Enum.MessageCenterAction.saveImageResult, this.onSaveImageResult.bind(this), this.node)
        }
        onDestroy() {
            super.onDestroy(), u.MessageCenter.unregister(u.Enum.MessageCenterAction.saveImageResult, this.node)
        }
        onBtnCopyToClipboard() {
            var e;
            u.appConfig.isWebApp ? super.onBtnCopyToClipboard() : (f.inviteFriendP2PEvent(c.CopyButton), u.native.copyToClipboard(u.dataHandler.getUserData().referralInviteLink), null == (e = this.referViewNotifyMsg) || e.show(u.config.getStringData("Refer_link_copied"), !1))
        }
        onBtnSaveImage() {
            super.onBtnSaveImage(), s(this.captureNode) && g.capture(this.captureNode).then((e => {
                u.native.saveImage(e, u.config.getStringData("Refer_view_title"))
            }))
        }
        onSaveImageResult(e) {
            var t, i;
            e.status ? null == (t = this.referViewNotifyMsg) || t.show(u.config.getStringData("Refer_image_saved"), !1) : null == (i = this.referViewNotifyMsg) || i.show(u.config.getStringData("Refer_image_saved_failed"), !0)
        }
    }).prototype, "referViewNotifyMsg", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = d)) || p));
    n._RF.pop()
}