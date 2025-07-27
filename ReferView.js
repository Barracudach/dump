import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as C from "./cv.js";
import * as v from "./InviteFriendsView.js";
import * as m from "./InviteFriendsView.js";
import * as b from "./Base64Img.js";
import * as A from "./CircleSprite.js";
import * as I from "./MessageSender.js";
import * as M from "./Helpers2.js";
import * as y from "./Helpers2.js";

function main() {
    var U, S, N, k, B, R, E, L, w, P, D, H, _, T, F;
    r._RF.push({}, "5876fjZhuRCC6qPefTVhEqz", "ReferView", void 0);
    const {
        ccclass: x,
        property: z
    } = s;
    e("default", (U = z(a), S = z(a), N = z(a), k = z(i), B = z(i), R = z(b), x(((F = class e extends o {
        constructor(...e) {
            super(...e), this.selfView = null, n(this, "captureNode", w, this), n(this, "bannerNode", P, this), n(this, "avatarNode", D, this), n(this, "userName", H, this), n(this, "referralCode", _, this), n(this, "qrBaseImg", T, this)
        }
        static getSinglePrefabInst(t, n) {
            let r = n;
            return r || (r = l.getScene().getComponentInChildren(d).node), e.prefabInstant || (e.prefabInstant = u(t)), r.getChildByUuid(e.prefabInstant.uuid) || g(e.prefabInstant, !0) || (e.prefabInstant = u(t)), e.prefabInstant
        }
        static sendReferalCodeAndLink(e) {
            let t = C.appConfig.getAppTitle();
            p.isNative ? p.os === p.OS.ANDROID ? c.reflection.callStaticMethod("com/cocos/game/InviteFriends", "shareReferralCode", "(Ljava/lang/String;Ljava/lang/String;)V", t, e) : p.os === p.OS.IOS ? c.reflection.callStaticMethod("InviteFriends", "shareReferralCode:url:", t, e) : C.native.openUrl(encodeURI(e)) : C.native.openUrl(e)
        }
        onLoad() {
            C.MessageCenter.register("update_info", this.updateUserInfo.bind(this), this.node), C.MessageCenter.register("modify_info_succ", this.updateUserInfo.bind(this), this.node), C.MessageCenter.register(C.Enum.MessageCenterAction.OnUserAvatarChanged, this.updateAvatarImage.bind(this), this.node), C.MessageCenter.register(C.Enum.MessageCenterAction.OnUserAvatarMaterialChanged, this.updateAvatarMaterial.bind(this), this.node), C.MessageCenter.register(C.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this.node)
        }
        onDestroy() {
            C.MessageCenter.unregister("update_info", this.node), C.MessageCenter.unregister("modify_info_succ", this.node), C.MessageCenter.unregister(C.Enum.MessageCenterAction.OnUserAvatarChanged, this.node), C.MessageCenter.unregister(C.Enum.MessageCenterAction.OnUserAvatarMaterialChanged, this.node), C.MessageCenter.unregister(C.config.CHANGE_LANGUAGE, this.node)
        }
        onEnable() {
            C.tools.triggerPopupShowEvent(), this.updateShareInfo()
        }
        onBtnCopyToClipboard() {
            C.appConfig.isWebApp && I.sendMessage({
                sourceApp: M.Poker,
                targetApp: M.WebApp,
                eventType: y.NavigatorShare,
                payload: {
                    title: C.appConfig.getAppTitle(),
                    text: C.dataHandler.getUserData().referralCode,
                    url: C.dataHandler.getUserData().referralInviteLink
                }
            })
        }
        onBtnEmail() {
            C.AudioMgr.playButtonSound("button_click.mp3"), v.inviteFriendP2PEvent(m.Email);
            let t = "mailto:?subject=" + this.getReferrelCode() + "&body=" + C.dataHandler.getUserData().referralInviteLink;
            e.sendReferalCodeAndLink(t)
        }
        onBtnMessage() {
            C.AudioMgr.playButtonSound("button_click.mp3"), v.inviteFriendP2PEvent(m.Message);
            let t = "sms:?body=" + C.dataHandler.getUserData().referralInviteLink + "&text=" + this.getReferrelCode();
            e.sendReferalCodeAndLink(t)
        }
        onBtnFacebook() {
            C.AudioMgr.playButtonSound("button_click.mp3"), v.inviteFriendP2PEvent(m.Facebook);
            let t = "https://www.facebook.com/sharer.php?u=" + C.dataHandler.getUserData().referralInviteLink + "&title=" + this.getReferrelCode();
            e.sendReferalCodeAndLink(t)
        }
        onBtnTwitter() {
            C.AudioMgr.playButtonSound("button_click.mp3"), v.inviteFriendP2PEvent(m.Twitter);
            let t = "https://twitter.com/intent/tweet?url=" + C.dataHandler.getUserData().referralInviteLink + "&text=" + this.getReferrelCode();
            e.sendReferalCodeAndLink(t)
        }
        onBtnTelegram() {
            C.AudioMgr.playButtonSound("button_click.mp3"), v.inviteFriendP2PEvent(m.Telegram);
            let t = "https://t.me/share/url?url=" + C.dataHandler.getUserData().referralInviteLink + "&text=" + this.getReferrelCode();
            e.sendReferalCodeAndLink(t)
        }
        onBtnSaveImage() {
            C.AudioMgr.playButtonSound("button_click.mp3")
        }
        onBtnClose() {
            C.AudioMgr.playButtonSound("close.mp3"), this.node.active = !1, C.tools.triggerPopupHideEvent()
        }
        updateShareInfo() {
            var e;
            C.resMgr.downloadImg("", this.bannerNode), this.updateUserInfo(), this.referralCode.string = this.getReferrelCode(), null == (e = this.qrBaseImg) || e.cleanImage(!0)
        }
        getReferrelCode() {
            return C.dataHandler.getUserData().referralCode
        }
        updateUserInfo() {
            this.updateAvatarImage(C.dataHandler.getUserData().headUrl), this.userName.node.parent.active = !C.dataHandler.getUserData().isTouristUser, this.userName.string = C.dataHandler.getUserData().nick_name || "", this.userName.node.parent.active = !C.dataHandler.getUserData().isTouristUser
        }
        updateAvatarImage(e) {
            this.avatarNode && (e instanceof f ? A.setHeadTexture(this.avatarNode, e, 1) : A.setCircleSprite(this.avatarNode, e))
        }
        updateAvatarMaterial(e) {
            let t = A.getHeadNode(this.avatarNode);
            t && t.getComponent(h).setMaterial(e, 0)
        }
        onLanguageChange() {}
    }).prefabInstant = null, w = t((L = F).prototype, "captureNode", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(L.prototype, "bannerNode", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(L.prototype, "avatarNode", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(L.prototype, "userName", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(L.prototype, "referralCode", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(L.prototype, "qrBaseImg", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = L)) || E));
    r._RF.pop()
}