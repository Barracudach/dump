import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";

function main() {
    var g, u, h, d, _, b, f;
    o._RF.push({}, "41113QUzldLG5qIdJzQOhk7", "two_factor_authentication", void 0);
    const {
        ccclass: T,
        property: A
    } = n;
    t("default", (g = A(i), u = A(i), T(((f = class t extends a {
        constructor(...t) {
            super(...t), s(this, "toggleYes", _, this), s(this, "toggleNo", b, this)
        }
        static getSinglePrefabInst(e, s) {
            let o = s;
            return o || (o = r.getScene()), t._g_prefabInst || (t._g_prefabInst = c(e)), o.getChildByUuid(t._g_prefabInst.uuid) || p(t._g_prefabInst, !0) || (t._g_prefabInst = c(e)), t._g_prefabInst
        }
        onEnable() {
            let t = l.config.getStringData("WEB_API_2FA", !0);
            l.http.sendRequestV2(t, {}, this.onGet2FAStatus.bind(this), l.popUp.showFirstServerError.bind(l.popUp), l.http.HttpRequestType.GET)
        }
        onGet2FAStatus(t) {
            "is2FAEnabled" in t && (0 == t.is2FAEnabled ? (this.toggleYes.isChecked = !1, this.toggleNo.isChecked = !0) : (this.toggleYes.isChecked = !0, this.toggleNo.isChecked = !1))
        }
        onSet2FAStatus() {
            this.toggleYes.isChecked ? l.popUp.showMsgI18n({
                txt: "TwoFactorAuthentication_enabled",
                sureCallback: this.goBack.bind(this),
                msgType: l.Enum.ToastType.ToastTypeSuccess
            }) : l.popUp.showMsgI18n({
                txt: "TwoFactorAuthentication_disabled",
                sureCallback: this.goBack.bind(this),
                msgType: l.Enum.ToastType.ToastTypeSuccess
            })
        }
        onBtnNext() {
            let t = l.config.getStringData("WEB_API_2FA", !0),
                e = {
                    is2FAEnabled: this.toggleYes.isChecked
                };
            l.http.sendRequestV2(t, e, this.onSet2FAStatus.bind(this), l.popUp.showFirstServerError.bind(l.popUp), l.http.HttpRequestType.POST)
        }
        goBack() {
            l.AudioMgr.playButtonSound("close.mp3"), l.action.showAction(this.node, l.action.eMoveActionDir.EMAD_TO_RIGHT, l.action.eMoveActionType.EMAT_FADE_OUT), l.MessageCenter.send("show_mail_entrance", !0)
        }
    })._g_prefabInst = null, _ = e((d = f).prototype, "toggleYes", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(d.prototype, "toggleNo", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = d)) || h));
    o._RF.pop()
}