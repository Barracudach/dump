import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as S from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as E from "./cv.js";
import * as b from "./LoginScene.js";
import * as x from "./NativeEventCMD.js";
import * as P from "./UpgradeView.js";
import * as T from "./AnalyticsHandler.js";

function main() {
    var f, v, N, y, L, k;
    i._RF.push({}, "a0748JxySNJMIwHqcT2AasV", "RegisterView", void 0);
    const {
        ccclass: w,
        property: I
    } = a;
    e("default", (f = I(o), v = I(s), w((L = t((y = class extends r {
        constructor(...e) {
            super(...e), n(this, "captcha_button", L, this), n(this, "protocol_prefab", k, this), this.protocolNode = null, this.defaultCaptcha_img = "zh_CN/common/click_get_captcha", this.tiaocodeY = 0, this.setPassword_PanelY = 0
        }
        onLoad() {
            E.resMgr.adaptWidget(this.node), this.initText(), this.registerMsg(), E.action.listenEditboxLimitNum(c("phone_Panel/phoneNumber_text", this.node).getComponent(d)), E.action.listenEditboxLimitNum(c("setPassword_Panel/identifynum_text", this.node).getComponent(d)), this.getPasteboardString(), this.tiaocodeY = c("tiaoCode", this.node).y, this.setPassword_PanelY = c("setPassword_Panel", this.node).y
        }
        initText() {
            E.action.setText(this.node, "phone_Panel/phoneNumber_text", "Login_Scene_register_panel_enter_phone_Panel_phoneNumber_text", !0), E.action.setText(this.node, "setPassword_Panel/identifynum_text", "Login_Scene_register_panel_setPassword_Panel_identifynum_text", !0), E.action.setText(this.node, "invate_code_panel/invateCode_text", "Login_Scene_register_panel_invate_code_panel_invateCode_text", !0), E.action.setText(this.node, "tiaoCode/captcha_bg/captcha_text", "Login_Scene_register_panel_register_Panel_captcha_text", !0), E.StringTools.setLabelString(this.node, "next_button/Label", "Login_Scene_register_panel_next_button"), E.StringTools.setLabelString(this.node, "regiest_tips_text", "Login_Scene_register_panel_regiest_tips_text"), E.dataHandler.getUserData().isOpenUpdateUserMode ? E.StringTools.setLabelString(this.node, "Text_4", "RegisterTitle_Update_Text") : E.StringTools.setLabelString(this.node, "Text_4", "RegisterTitleText"), E.StringTools.setLabelString(this.node, "setPassword_Panel/identify_button/Label", "getCode"), E.StringTools.setLabelString(this.node, "Text_4_0", "Login_Scene_register_panel_Text_4_0"), E.StringTools.setLabelString(this.node, "Text_4_0/Text_4_0_0", "Login_Scene_register_panel_Text_4_0_0"), E.StringTools.setLabelString(this.captcha_button, "captcha_label", "Login_Scene_register_panel_register_Panel_click_refresh_captcha_text");
            let e = c("Text_4_0/protocol_button", this.node),
                t = c("Text_4_0", this.node),
                n = c("Text_4_0/Text_4_0_0", this.node);
            n.position = new g(t.getComponent(l).width / 2 + 6, n.position.y, n.position.z), t.position = new g(-n.getComponent(l).width / 2 + 3, t.position.y, t.position.z), e.position = new g(n.position.x, e.position.y, e.position.z)
        }
        registerMsg() {
            E.MessageCenter.register("onCheckRegisterIdCodeSuccess", this.onCheckRegisterIdCodeSuccess.bind(this), this.node), E.MessageCenter.register("responseCaptchaSucc", this.responseCaptchaSucc.bind(this), this.node), E.MessageCenter.register("responseCaptchaUrlSucc", this.responseCaptchaUrlSucc.bind(this), this.node), E.MessageCenter.register(E.config.CHANGE_LANGUAGE, this.initText.bind(this), this.node)
        }
        onDestroy() {
            E.MessageCenter.unregister("onCheckRegisterIdCodeSuccess", this.node), E.MessageCenter.unregister("responseCaptchaSucc", this.node), E.MessageCenter.unregister("responseCaptchaUrlSucc", this.node), E.MessageCenter.unregister(E.config.CHANGE_LANGUAGE, this.node)
        }
        onCheckRegisterIdCodeSuccess(e) {
            console.log("onCheckRegisterIdCodeSuccess"), E.config.getCurrentScene() == E.Enum.SCENE.LOGIN_SCENE ? this.node.getParent().getComponent(b).onCheckRegisterIdCodeSuccess() : this.node.getParent().getComponent(P).onCheckRegisterIdCodeSuccess()
        }
        responseCaptchaSucc(e) {
            let t = new Image;
            t.src = e;
            let n = new h;
            n.image = new _(t);
            let i = new p;
            i.texture = n, this.captcha_button.getComponent(u).spriteFrame = i, this.captcha_button.getChildByName("captcha_label").active = !1, this.captcha_button.getChildByName("click_refresh").active = !1
        }
        responseCaptchaUrlSucc(e) {
            let t = c("setPassword_Panel", this.node),
                n = c("regiest_tips_text", this.node);
            if (0 == e) return c("tiaoCode", this.node).active = !1, t.setPosition(t.getPosition().x, this.setPassword_PanelY), void n.setPosition(n.position.x, t.position.y - t.getComponent(l).contentSize.height / 2 - n.getComponent(l).contentSize.height / 2);
            let i = c("tiaoCode", this.node);
            i.setPosition(i.position.x, this.setPassword_PanelY), t.setPosition(t.getPosition().x, this.tiaocodeY + n.getComponent(l).height / 2), n.setPosition(n.position.x, t.position.y - t.getComponent(l).contentSize.height / 2 - n.getComponent(l).contentSize.height / 2), i.active = !0, C.loadRemote(e, function(e, t) {
                if (e) return void console.log(e.message || e);
                let n = new p;
                n.texture = t, this.captcha_button.getComponent(u).spriteFrame = n, this.captcha_button.getChildByName("captcha_label").active = !1, this.captcha_button.getChildByName("click_refresh").active = !1
            }.bind(this))
        }
        onBtnCheckRegisterIdCodeClick() {
            E.AudioMgr.playButtonSound("button_click.mp3");
            var e = c("phone_Panel/phoneNumber_text", this.node).getComponent(d).string,
                t = c("setPassword_Panel/identifynum_text", this.node).getComponent(d).string,
                n = c("invate_code_panel/invateCode_text", this.node).getComponent(d).string;
            let i = this.getAreacode();
            if (E.config.getCurrentScene() == E.Enum.SCENE.LOGIN_SCENE) {
                if (this.node.getParent().getComponent(b).showError({
                        phoneNum: e,
                        AreaCode: i,
                        KVCode: t
                    })) return
            } else if (this.node.getParent().getComponent(P).showError({
                    phoneNum: e,
                    AreaCode: i,
                    KVCode: t
                })) return;
            console.log("isOpenUpdateUserMode::" + E.dataHandler.getUserData().isOpenUpdateUserMode), E.dataHandler.getUserData().isOpenUpdateUserMode ? E.httpHandler.requestCheckUpdateGradeIdCode(e, i, t, n) : E.httpHandler.requestCheckRegisterIdCode(e, i, t, n);
            T.getInstance().sendEvent(E.Enum.CurrentScreen.validation, E.Enum.segmentEvent.Clicked, E.Enum.Functionality.registration, {
                item: "nextButton"
            })
        }
        getAreacode() {
            var e = c("phone_Panel/areaCode_text", this.node).getComponent(m).string;
            let t = e.indexOf("+");
            return e.substring(t + 1, e.length)
        }
        onBtnCaptchaClick() {
            this.captcha_button.getChildByName("captcha_label").active = !0, this.captcha_button.getChildByName("click_refresh").active = !1;
            let e = this.captcha_button.getComponent(u);
            E.resMgr.setSpriteFrame(e.node, this.defaultCaptcha_img), E.httpHandler.requestCaptcha()
        }
        onBtnProtocolClick() {
            E.AudioMgr.playButtonSound("button_click.mp3"), this.protocolNode || (this.protocolNode = E.action.addChildToScene(this, this.protocol_prefab, [], E.Enum.ZORDER_TYPE.ZORDER_TT, !0)), this.protocolNode.active = !0
        }
        getPasteboardString() {
            let e = "";
            S.isNative ? e = E.native.invokeSyncFunc(x.KEY_GET_PASTEBOARD_STRING) : S.isBrowser && E.config.GET_CLIENT_TYPE() == E.Enum.ClientType.H5WebPage && (e = E.native.SYgetClipboardContent());
            let t = e.split("##"),
                n = "";
            if (t.length > 1 && (n = t[1], n.length > 0)) {
                if (S.isNative) E.native.invokeSyncFunc(x.KEY_SET_PASTEBOARDSTRING, {
                    text: ""
                });
                else if (S.isBrowser && E.config.GET_CLIENT_TYPE() == E.Enum.ClientType.H5WebPage) {
                    let e = '{"cmd": "1013", "op": 1, "content": ""}';
                    E.native.SYwebjsToClient(e)
                }
                c("invate_code_panel/invateCode_text", this.node).getComponent(d).string = n
            }
        }
        onClickBackButton() {
            E.MessageCenter.send("exitRegister");
            T.getInstance().sendEvent(E.Enum.CurrentScreen.validation, E.Enum.segmentEvent.Clicked, E.Enum.Functionality.registration, {
                item: "loginButton"
            })
        }
        onClickIdCode() {
            E.MessageCenter.send("getIdcode");
            T.getInstance().sendEvent(E.Enum.CurrentScreen.validation, E.Enum.segmentEvent.Clicked, E.Enum.Functionality.registration, {
                item: "getTheCodeButton"
            });
            T.getInstance().sendEvent(E.Enum.CurrentScreen.validation, E.Enum.segmentEvent.GetCodeInitiated, E.Enum.Functionality.registration, {
                item: "getTheCodeButton",
                method: "sms"
            })
        }
        onClickAreaCode() {
            E.dataHandler.getUserData().isOpenUpdateUserMode ? this.node.getParent().getComponent(P).onBtnAreaCodeClick(null, "REGISTER_PANEL") : this.node.getParent().getComponent(b).onBtnAreaCodeClick(null, "REGISTER_PANEL")
        }
    }).prototype, "captcha_button", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(y.prototype, "protocol_prefab", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = y)) || N));
    i._RF.pop()
}