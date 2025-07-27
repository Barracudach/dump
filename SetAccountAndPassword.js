import * as e from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cv.js";
import * as r from "./LoginScene.js";
import * as u from "./UpgradeView.js";
import * as g from "./AnalyticsHandler.js";

function main() {
    var _;
    n._RF.push({}, "653e1d3115Liq33aa0Q2BWq", "SetAccountAndPassword", void 0);
    const {
        ccclass: d,
        property: l
    } = i;
    t("default", d(_ = class extends e {
        onLoad() {
            a.resMgr.adaptWidget(this.node), this.initText(), this.registerMsg(), g.getInstance().sendEvent(a.Enum.CurrentScreen.account, a.Enum.segmentEvent.ScreenOpened, a.Enum.Functionality.registration)
        }
        start() {}
        initText() {
            a.action.setText(this.node, "account_warning_text1", "Login_Scene_login_panel_account_warning_text1");
            let t = o("account_warning_text2", this.node).getComponent(s);
            t.string = a.StringTools.calculateAutoWrapString(t.node, a.config.getStringData("Login_Scene_login_panel_account_warning_text2")), a.action.setText(this.node, "Text_4", "Login_Scene_login_panel_account_warning_text4"), a.action.setText(this.node, "ok_button/Label", "UITitle57"), a.action.setText(this.node, "account_panel1/account_text", "Login_Scene_login_panel_phone_Panel_set_userName_text", !0), a.action.setText(this.node, "password_Panel/account_text", "Login_Scene_login_panel_password_Panel_password_text1", !0), a.action.setText(this.node, "password_Panel1/account_text", "Login_Scene_login_panel_password_Panel_password_text0", !0), a.action.setText(this.node, "nickname_Panel/account_text", "Login_Scene_login_panel_password_Panel_nickname_text", !0)
        }
        registerMsg() {
            a.MessageCenter.register("onSetAccountSuccess", this.onSetAccountSuccess.bind(this), this.node), a.MessageCenter.register(a.config.CHANGE_LANGUAGE, this.initText.bind(this), this.node)
        }
        onDestroy() {
            a.MessageCenter.unregister("onSetAccountSuccess", this.node), a.MessageCenter.unregister(a.config.CHANGE_LANGUAGE, this.node)
        }
        onSetAccountSuccess(t) {
            console.log("onSetAccountSuccess"), this.node.getParent().getComponent(r).switchLoginAndSetAccount(!1)
        }
        onBtnMiddleClick() {
            a.AudioMgr.playButtonSound("button_click.mp3");
            var t = o("account_panel1/account_text", this.node).getComponent(c).string,
                n = o("password_Panel/account_text", this.node).getComponent(c).string,
                e = o("password_Panel1/account_text", this.node).getComponent(c).string;
            if (a.config.getCurrentScene() == a.Enum.SCENE.LOGIN_SCENE) {
                if (this.node.getParent().getComponent(r).showError({
                        kAccount0: t,
                        password0: n,
                        password1: e
                    })) return
            } else if (this.node.getParent().getComponent(u).showError({
                    kAccount0: t,
                    password0: n,
                    password1: e
                })) return;
            if (t.length <= 0) return void a.TT.showMsg(a.config.getStringData("ErrorToast3"), a.Enum.ToastType.ToastTypeWarning);
            g.getInstance().sendEvent(a.Enum.CurrentScreen.account, a.Enum.segmentEvent.Clicked, a.Enum.Functionality.registration, {
                item: "nextButton"
            }), a.httpHandler.requestCheckUserName(t, n)
        }
        onBtnSureClick() {
            a.AudioMgr.playButtonSound("button_click.mp3");
            var t = o("account_panel1/account_text", this.node).getComponent(c).string,
                n = o("password_Panel/account_text", this.node).getComponent(c).string,
                e = o("password_Panel1/account_text", this.node).getComponent(c).string;
            this.node.getParent().getComponent(r).showError({
                kAccount0: t,
                password0: n,
                password1: e
            }) || (a.httpHandler.requestSetAccount(t), a.tools.SaveStringByCCFile("login_account", t))
        }
        onClickBackButton() {
            a.MessageCenter.send("exitSetAccountAndPassword");
            g.getInstance().sendEvent(a.Enum.CurrentScreen.account, a.Enum.segmentEvent.Clicked, a.Enum.Functionality.registration, {
                item: "backButton"
            })
        }
    }) || _);
    n._RF.pop()
}