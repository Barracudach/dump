import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as g from "./cv.js";
import * as C from "./FormView.js";

function main() {
    var p, m, q, b, _, f, E;
    s._RF.push({}, "7c335yruEdKj5jahzkfJ3R7", "ValidateEmail", void 0);
    const {
        ccclass: S,
        property: M
    } = r;
    e("ValidateEmail", (p = M(i), m = M(n), S(((E = class e extends C {
        constructor(...e) {
            super(...e), o(this, "requestCodeMsg", _, this), o(this, "requestCodeErrorColor", f, this), this.backNode = null, this.requestCodeNormalColor = a(255, 255, 255, 255), this.requestCodeMsgUIRenderer = null
        }
        static getSinglePrefabInst(t, o) {
            let s = o;
            return s || (s = u.getScene().getComponentInChildren(d).node), e.prefabInst && (s.getChildByUuid(e.prefabInst.uuid) || l(e.prefabInst, !0)) || (e.prefabInst = c(t), s.addChild(e.prefabInst)), e.prefabInst
        }
        onLoad() {
            super.onLoad(), this.requestCodeMsgUIRenderer = this.requestCodeMsg.node.getComponent(h), this.requestCodeNormalColor = this.requestCodeMsgUIRenderer.color, this.node.on(g.Enum.CustomEvent.ActionShowFinish, this.onFinishShow, this)
        }
        onEnable() {
            this.clear(), this.requestCodeMsg.string = ""
        }
        onDestroy() {
            this.node.off(g.Enum.CustomEvent.ActionShowFinish, this.onFinishShow, this)
        }
        onFinishShow() {
            this.requestCode()
        }
        onBtnClickRequestCode() {
            g.AudioMgr.playButtonSound("button_click.mp3"), this.requestCode()
        }
        requestCode() {
            this.clear(), this.requestCodeMsg.string = g.config.getStringData("ValidateEmailPhone_requestCode_sending_msg"), g.http.sendRequestV2(g.config.getStringData("WEB_API_USERP_VERIFICATION_REQUEST", !0), {}, this.onRequestCodeSuccess.bind(this), this.onRequestCodeError.bind(this), g.http.HttpRequestType.POST)
        }
        onRequestCodeSuccess(e) {
            this.requestCodeMsg.string = g.config.getStringData("ValidateEmail_requestCode_success_msg"), this.requestCodeMsgUIRenderer.color = this.requestCodeNormalColor
        }
        onRequestCodeError(e) {
            this.requestCodeMsg.string = g.config.getStringData("ValidateEmailPhone_requestCode_error_msg"), this.requestCodeMsgUIRenderer.color = this.requestCodeErrorColor
        }
        onBtnClickBack() {
            g.AudioMgr.playButtonSound("back_button.mp3"), this.goBack()
        }
        goBack() {
            this.backNode ? g.action.showActionBothRight(this.backNode, this.node) : g.action.showAction(this.node, g.action.eMoveActionDir.EMAD_TO_RIGHT, g.action.eMoveActionType.EMAT_FADE_OUT, g.action.delay_type.NORMAL)
        }
        onBtnClickValidate() {
            g.AudioMgr.playButtonSound("button_click.mp3"), this.submit(this.onValidateSuccess.bind(this))
        }
        onValidateSuccess(e) {
            g.dataHandler.getUserData().emailValid = !0, this.clear(), g.popUp.showMsgI18n({
                txt: "ValidateEmail_success_popup_msg",
                sureCallback: this.goBack.bind(this),
                msgType: g.Enum.ToastType.ToastTypeSuccess
            })
        }
    }).prefabInst = null, _ = t((b = E).prototype, "requestCodeMsg", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(b.prototype, "requestCodeErrorColor", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return a(255, 100, 100, 255)
        }
    }), q = b)) || q));
    s._RF.pop()
}