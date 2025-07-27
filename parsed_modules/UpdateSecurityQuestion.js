import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as u from "./UserChallengeForm.js";

function main() {
    var h, p, g, d, m, f;
    i._RF.push({}, "2db9fGdR+hK+ZOxfzrEq+yR", "UpdateSecurityQuestion", void 0);
    const {
        ccclass: b,
        property: C
    } = r;
    e("UpdateSecurityQuestions", (h = C(s), p = C(o), b((m = t((d = class extends a {
        constructor(...e) {
            super(...e), n(this, "userChallengeFormPrefab", m, this), n(this, "formContainer", f, this), this.challengeSchema = {}, this.objValues = null, this.challengeForm = void 0
        }
        start() {
            c.resMgr.adaptWidget(this.node, !0), this.objValues = {
                captcha: "",
                version: c.config.GET_CLIENT_VERSION(),
                device_uuid: c.native.GetDeviceUUID()
            };
            let e = c.config.getStringData("WEB_API_GET_CHALLENGE_CONFIG", !0);
            c.http.sendRequestV2(e, null, this.onChallengeConfigSuccess.bind(this), c.popUp.showFirstServerError.bind(c.popUp), c.http.HttpRequestType.GET, c.http.HttpParseType.NONE, !1)
        }
        onChallengeConfigSuccess(e) {
            null != e && (this.challengeSchema = e, this.buildChallengeForm())
        }
        buildChallengeForm() {
            this.challengeForm = l(this.userChallengeFormPrefab).getComponent(u), this.challengeForm.init(this.challengeSchema), this.formContainer.addChild(this.challengeForm.node), c.resMgr.adaptWidget(this.challengeForm.node, !0)
        }
        onFormResponseSuccess(e) {
            c.popUp.showMsgI18n({
                txt: "SecurityQuestions_updateSuccessMsg",
                msgType: c.Enum.ToastType.ToastTypeSuccess
            }), this.goBack()
        }
        goBack() {
            this.node.removeFromParent()
        }
        submit() {
            c.AudioMgr.playButtonSound("button_click.mp3"), this.challengeForm.submit(this.onFormResponseSuccess.bind(this))
        }
    }).prototype, "userChallengeFormPrefab", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(d.prototype, "formContainer", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = d)) || g));
    i._RF.pop()
}