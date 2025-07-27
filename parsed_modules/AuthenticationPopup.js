import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as P from "./SlideView.js";
import * as f from "./cv.js";

function main() {
    var w, U, R, v, A, C, T, S, y, N, _;
    o._RF.push({}, "34793jzYApLe672kZ1jXfMA", "AuthenticationPopup", void 0);
    const {
        ccclass: L,
        property: O
    } = p;
    let V = e("eAuthenticationPopupType", function(e) {
        return e.LOGIN = "login", e.REGISTER = "register", e.FORGOT_PASSWORD = "forgot_password", e
    }({}));
    e("default", (w = O(n), U = O(s), R = O(s), v = O(s), L(((_ = class e extends a {
        constructor(...e) {
            super(...e), i(this, "titleLabel", T, this), i(this, "LoginView", S, this), i(this, "RegisterView", y, this), i(this, "ForgotPasswordView", N, this), this.popUpPrefab = null, this.currentParams = null, this.popUpNode = null, this.popUp = null, this.slideView = null, this.destroyOnHide = !1
        }
        static getInstance() {
            return e.g_instance && e.g_instance.popUpPrefab || (e.g_instance = new e, e.g_instance.init()), e.g_instance
        }
        init() {
            let e = l.getBundle(f.appConfig.layoutUse);
            e ? this.onBundleLoaded(null, e) : l.loadBundle(f.appConfig.layoutUse, this.onBundleLoaded.bind(this))
        }
        onBundleLoaded(e, t) {
            e ? r(e.message || e) : t.load("prefabs/AuthenticationPopup", d, function(e, t) {
                e ? r(e.message || e) : this.popUpPrefab = t
            }.bind(this))
        }
        onLoad() {
            this.destroyOnHide = !1, this.slideView = this.node.getComponent(P)
        }
        onDisable() {
            var e;
            (this.node.active || f.tools.triggerPopupHideEvent(), this.destroyOnHide) && (null == (e = this.node) || e.destroy())
        }
        createPopUp(t = null) {
            if (this.popUpPrefab && h(this.popUpPrefab, !0)) {
                if (this.popUpNode = u(this.popUpPrefab), null !== t && h(t.parentNode)) t.parentNode.addChild(this.popUpNode);
                else {
                    c.getScene().getComponentInChildren(g).node.addChild(this.popUpNode), c.addPersistRootNode(this.popUpNode), this.popUpNode.setSiblingIndex(f.Enum.ZORDER_TYPE.ZORDER_TT)
                }
                this.popUpNode.addComponent(b), this.popUp = this.popUpNode.getComponent(e), this.popUpNode.active = !1, t && this.popUp.showPopup(t)
            } else this.init()
        }
        show() {
            this.isNodeActive(!1) || (this.slideView ? this.slideView.show(!1, (e => {
                var t;
                null == (t = this.currentParams) || null == t.closeCallback || t.closeCallback()
            })) : this.node.active = !0)
        }
        hide() {
            var e;
            this.slideView ? this.slideView.hide() : (null == (e = this.currentParams) || null == e.closeCallback || e.closeCallback(), this.node.active = !1)
        }
        hideAllPopup(e = !1) {
            this.destroyOnHide = e, null == this.node ? this.popUp && h(this.popUp.node, !0) && (this.unscheduleAllCallbacks(), this.popUp.hideAllPopup(e)) : this.hide()
        }
        isNodeActive(e = !0) {
            var t;
            return null == this.node ? (null == (t = this.popUp) ? void 0 : t.isNodeActive(e)) ?? !1 : 0 == e && null != this.slideView ? this.slideView.isActive : this.node.active
        }
        showPopup(t) {
            this == e.g_instance && f.appConfig.getGeneralConfig().multiWindowEnabled && f.focusWindow(1), null === this.node ? this.popUp && h(this.popUpNode, !0) ? (this.popUpNode || (this.popUpNode = this.popUp.node), this.scheduleOnce(this.popUp.showPopup.bind(this.popUp, t))) : this.createPopUp(t) : (f.tools.showPopupOnTop(this.node), this.updatePopUp(t))
        }
        updatePopUp(e) {
            let t;
            switch (this.currentParams = e, e.popupType) {
                case V.LOGIN:
                    t = "LoginBtnText";
                    break;
                case V.REGISTER:
                    t = "Registration";
                    break;
                case V.FORGOT_PASSWORD:
                    t = "ForgetBtnText";
                    break;
                default:
                    t = "LoginBtnText"
            }
            this.titleLabel.string = f.config.getStringData(t), this.RegisterView.active = e.popupType == V.REGISTER, this.LoginView.active = e.popupType == V.LOGIN, this.ForgotPasswordView.active = e.popupType == V.FORGOT_PASSWORD, this.node.active || (f.tools.triggerPopupShowEvent(), this.show())
        }
        onClickXCloseeButton() {
            this.currentParams.popupType == V.REGISTER ? f.popUp.showMsg({
                title: f.config.getStringData("RegistrationAbandonsAlertPopup_Title"),
                subtitle: f.config.getStringData("RegistrationAbandonsAlertPopup_SubTitle"),
                txt: f.config.getStringData("RegistrationAbandonsAlertPopup_Content"),
                isTwoBtn: !0,
                cancelCallback: this.hideAllPopup.bind(this, !0),
                onXCancelCallback: !1,
                sureLabel: f.config.getStringData("RegistrationAbandonsAlertPopup_ContinueBtn"),
                cancelLabel: f.config.getStringData("UPDATE.DIALOG_EXIT")
            }) : this.hide()
        }
    }).g_instance = void 0, T = t((C = _).prototype, "titleLabel", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(C.prototype, "LoginView", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(C.prototype, "RegisterView", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(C.prototype, "ForgotPasswordView", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = C)) || A));
    o._RF.pop()
}