import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./cv.js";
import * as l from "./LoginScene.js";
import * as p from "./UpgradeView.js";

function main() {
    var c, d, u, w, m, f, C, x, P, b, S, v;
    i._RF.push({}, "6b280rK2aRJroAIGBXCinn8", "RegisterFinish", void 0);
    const {
        ccclass: y,
        property: D
    } = r;
    t("default", (c = D(s), d = D(s), u = D(s), w = D(s), m = D(s), y((x = e((C = class extends o {
        constructor(...t) {
            super(...t), n(this, "pw_strength_Panel", x, this), n(this, "pw_strength_low", P, this), n(this, "pw_strength_mid", b, this), n(this, "pw_strength_high", S, this), n(this, "txt_pw_strength", v, this)
        }
        onLoad() {
            this.initText(), this.registerMsg()
        }
        start() {
            this.pw_strength_Panel.active = !1
        }
        initText() {
            a("title_text", this.node).getComponent(g).string = h.config.getStringData("RegisterTitleText"), a("nickname_Panel/nickname_text", this.node).getComponent(_).placeholder = "请输入昵称", a("password_Panel/password_text", this.node).getComponent(_).placeholder = h.config.getStringData("Login_Scene_login_panel_password_Panel_password_text1"), a("password_Panel_0/password_text", this.node).getComponent(_).placeholder = h.config.getStringData("Login_Scene_login_panel_password_Panel_password_text0"), a("finish_button/Label", this.node).getComponent(g).string = h.config.getStringData("NextBtnText")
        }
        registerMsg() {
            h.MessageCenter.register("register_to_set_account", this.onFinishRegisterSuccess.bind(this), this.node)
        }
        onDestroy() {
            h.MessageCenter.unregister("register_to_set_account", this.node)
        }
        onFinishRegisterSuccess(t) {
            console.log("onFinishRegisterSuccess"), this.node.getParent().getComponent(l).onFinishRegisterSuccess()
        }
        onMiddleRegisterSuccess(t) {}
        onBtnFinishRegisterClick() {
            h.AudioMgr.playButtonSound("button_click.mp3");
            let t = a("phone_Panel/phoneNumber_text", this.node.getParent().getComponent(l).registerView).getComponent(_).string,
                e = a("nickname_Panel/nickname_text", this.node).getComponent(_).string,
                n = a("password_Panel/password_text", this.node).getComponent(_).string,
                i = a("password_Panel_0/password_text", this.node).getComponent(_).string,
                s = this.node.getParent().getComponent(l).getAreaCodeData();
            if (h.config.getCurrentScene() == h.Enum.SCENE.LOGIN_SCENE) {
                if (this.node.getParent().getComponent(l).showError({
                        nickname: e,
                        phoneNum: t,
                        password0: n,
                        password1: i,
                        AreaCode: s
                    })) return
            } else if (this.node.getParent().getComponent(p).showError({
                    nickname: e,
                    phoneNum: t,
                    password0: n,
                    password1: i,
                    AreaCode: s
                })) return;
            h.httpHandler.requestCheckNickName(e, n)
        }
        onPsdEditBoxChange() {
            let t = a("password_Panel/password_text", this.node).getComponent(_).string,
                e = !0;
            if (0 == t.length && (e = !1), -1 != t.search(" ") && (e = !1), (t.length < 6 || t.length > 14) && (e = !1), !e) return void(this.pw_strength_Panel.active = !1);
            let n = !1,
                i = !1,
                s = !1,
                r = t.length;
            for (let e = 0; e < r; e++) t[e] >= "0" && t[e] <= "9" ? n = !0 : t[e] >= "a" && t[e] <= "z" || t[e] >= "A" && t[e] <= "Z" ? i = !0 : s = !0;
            let o = 0;
            n && o++, i && o++, s && o++, this.pw_strength_Panel.active = !0, this.pw_strength_low.active = !1, this.pw_strength_mid.active = !1, this.pw_strength_high.active = !1, 1 == o ? (this.txt_pw_strength.getComponent(g).string = h.config.getStringData("Login_Scene_register_panel_setPassword_strength_low_text"), this.pw_strength_low.active = !0) : 2 == o ? (this.txt_pw_strength.getComponent(g).string = h.config.getStringData("Login_Scene_register_panel_setPassword_strength_mid_text"), this.pw_strength_low.active = !0, this.pw_strength_mid.active = !0) : 3 == o ? (this.txt_pw_strength.getComponent(g).string = h.config.getStringData("Login_Scene_register_panel_setPassword_strength_high_text"), this.pw_strength_low.active = !0, this.pw_strength_mid.active = !0, this.pw_strength_high.active = !0) : this.pw_strength_Panel.active = !1
        }
    }).prototype, "pw_strength_Panel", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(C.prototype, "pw_strength_low", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(C.prototype, "pw_strength_mid", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(C.prototype, "pw_strength_high", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(C.prototype, "txt_pw_strength", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = C)) || f));
    i._RF.pop()
}