import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./DeeplinksDataHandler.js";
import * as d from "./Enum.js";
import * as u from "./Enum.js";
import * as c from "./NativeEventCMD.js";
import * as f from "./EditBoxValidator.js";
import * as h from "./cv.js";
import * as p from "./AnalyticsHandler.js";

function main() {
    var b, g, C, v, S, y;
    i._RF.push({}, "5205bZvYhRM5bOl5GVzVfBc", "InviteCodeField", void 0);
    const {
        ccclass: D,
        property: O
    } = a;
    e("InviteCodeField", (b = O(o), g = O(o), D((S = t((v = class extends f {
        constructor(...e) {
            super(...e), r(this, "addBtnLayer", S, this), r(this, "editboxLayer", y, this), this.referrer = ""
        }
        onEnable() {
            super.onEnable(), this.setInviteCode(this.getReferralCodeFromAttributionAndPasteboard()), h.MessageCenter.register(d.GetAttributionDataSuccess, this.reloadReferralCode.bind(this), this)
        }
        onDisable() {
            super.onDisable(), h.MessageCenter.unregister(d.GetAttributionDataSuccess, this)
        }
        onClickAddBtn() {
            this.showInputBoxLayer(), this.drawBorderEditBox(!1);
            p.getInstance().sendEvent(h.Enum.CurrentScreen.registrationStageOne, h.Enum.segmentEvent.Clicked, h.Enum.Functionality.registration, {
                intent: "cta",
                label: "I have an invite code"
            })
        }
        setValueFromObj(e) {
            super.setValueFromObj(e), h.dataHandler.getUserData().registrationData && this.showInputBoxLayer()
        }
        addValueToObject(e) {
            e[h.appConfig.getFormsConfig().invitationCode.key] = this.value, e.referrer = this.referrer
        }
        showInputBoxLayer(e = !0) {
            n(this.editboxLayer, !0) && n(this.addBtnLayer, !0) && (this.editboxLayer.active = e, this.addBtnLayer.active = !e, e && this.doValidateOnShowHideNodes())
        }
        reloadReferralCode() {
            this.setInviteCode(this.getReferralCodeFromAttributionAndPasteboard())
        }
        setInviteCode(e) {
            e.length > 0 && (this.showInputBoxLayer(), this.string = e, this.interactable = !1, this.drawBorderEditBox(!1))
        }
        getReferralCodeFromClipboard() {
            var e = "";
            if (s.isNative) {
                var t = "";
                s.os !== s.OS.IOS && s.os !== s.OS.ANDROID || (t = h.native.invokeSyncFunc(c.KEY_GET_PASTEBOARD_STRING)), s.os !== s.OS.WINDOWS && s.os !== s.OS.OSX || (t = h.native.getTextFromClipboard());
                let r = h.appConfig.getGeneralConfig().inviteCodePrefix;
                if (new RegExp("^" + r + "[A-Za-z0-9]{6}$").test(t)) {
                    s.os !== s.OS.IOS && s.os !== s.OS.ANDROID || h.native.invokeSyncFunc(c.KEY_SET_PASTEBOARDSTRING, {
                        text: ""
                    }), s.os !== s.OS.WINDOWS && s.os !== s.OS.OSX || h.native.copyToClipboard(""), e = t.slice(r.length), console.log("Referral code found from clipboard : " + e)
                } else console.log("Referral code not found from clipboard")
            }
            return e
        }
        getReferralCodeFromAttributionAndPasteboard() {
            var e = l.GetLastAttributedDataString(),
                t = "";
            if ("" != e && null != e) try {
                var r = JSON.parse(e);
                t = r[u.referralCode] && "" != r[u.referralCode] ? r[u.referralCode] : this.getReferralCodeFromClipboard()
            } catch (e) {
                t = this.getReferralCodeFromClipboard(), console.log("Parse Deeplink Data Json fail")
            } else t = this.getReferralCodeFromClipboard();
            return t
        }
    }).prototype, "addBtnLayer", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(v.prototype, "editboxLayer", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = v)) || C));
    i._RF.pop()
}