import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./Login_ts.js";
import * as g from "./httpApis.js";
import * as E from "./LoadingBlocker.js";
import * as R from "./AndroidBackButton.js";

function main() {
    var S, B, I, _, w, P, O, v;
    n._RF.push({}, "61f79ynWKxNi4i/KxMe+7rm", "ResetPasswordPage", void 0);
    const {
        ccclass: A,
        property: C
    } = r;
    t("ResetPasswordPage", (S = C(s), B = C(o), I = C(o), A((P = e((w = class extends a {
        constructor(...t) {
            super(...t), i(this, "passwordInput", P, this), i(this, "isHidButton", O, this), i(this, "nextButton", v, this), this.passwordRegex = /[^\w-\/:;()$&@".,?!'[\]{}#%^*+=_\\|~<>€£¥•\s]/g, this.loginScript = null
        }
        start() {
            this.loginScript = l.getScene().getComponentInChildren("Login_ts")
        }
        update(t) {
            1 == this.node.active && ("" == this.passwordInput.string || null == this.passwordInput.string || this.passwordInput.string.length < 6 ? this.nextButton.interactable = !1 : this.nextButton.interactable = !0, this.nextButton.getComponentInChildren(c).node.getComponent(d).color = this.nextButton.interactable ? u.WHITE : (new u).fromHEX("#9B9B9B"))
        }
        onPasswordChange() {
            this.passwordInput.string = this.passwordInput.string.replace(this.passwordRegex, "")
        }
        onIsHidClicked() {
            this.isHidButton.node.children[0].active = !this.isHidButton.node.children[0].active, this.isHidButton.node.children[1].active = !this.isHidButton.node.children[1].active, 1 == this.isHidButton.node.children[0].active ? this.passwordInput.inputFlag = s.InputFlag.SENSITIVE : this.passwordInput.inputFlag = s.InputFlag.PASSWORD
        }
        onBackClicked() {
            p.isNative && p.os === p.OS.ANDROID && R.getInstance().removeBackFunction("ResetPasswordPage"), this.loginScript.moveFromCenter(h.RESET_PASSWORD, h.VALID_CODE)
        }
        onResetPasswordClicked() {
            this.nextButton.enabled = !1;
            let t = this.loginScript._userPhone,
                e = this.loginScript._userAreaCode,
                i = this.loginScript._userValidCode,
                n = this.passwordInput.string;
            if (this.passwordRegex.test(n)) return void cc_mtt.vv.AssetsManager.showDialogBox("POPUP_TITLE.REMIND", "RESET_PASSWORD.PASSWORD_INVALID", !1, [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: void 0
            }]);
            let s = {
                AreaCode: e,
                Mobile: t
            };
            E.show(this.loginScript.loginLoadingKey), g.requestUserPasswordReset(s, n, i, (t => {
                if (this.nextButton.enabled = !0, E.hide(this.loginScript.loginLoadingKey), t)
                    if (0 != t.ErrorCode) {
                        let e = "ERROR_CODE_PKW." + t.ErrorCode;
                        cc_mtt.vv.AssetsManager.showDialogBox("POPUP_TITLE.REMIND", e, !1, [{
                            type: 0,
                            text: "MESSAGE_DIALOG_BLOCKER.OK",
                            callback: void 0
                        }])
                    } else this.loginScript.userPasswordValue.string = "", this.loginScript.moveFromCenter(h.RESET_PASSWORD, h.LOGIN);
                else cc_mtt.vv.ConsoleLog.log("requestUserPasswordReset:no data")
            }), (t => {
                this.nextButton.enabled = !0, cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", !1, [{
                    type: 0,
                    text: "MESSAGE_DIALOG_BLOCKER.OK",
                    callback: void 0
                }])
            }))
        }
    }).prototype, "passwordInput", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(w.prototype, "isHidButton", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(w.prototype, "nextButton", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = w)) || _));
    n._RF.pop()
}