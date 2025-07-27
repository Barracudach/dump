import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as h from "./AreaView.js";

function main() {
    var u, C, m, f;
    i._RF.push({}, "e8588fgHV5Pw5BgHscvDSEP", "BindDevice", void 0);
    const {
        ccclass: T,
        property: y
    } = a;
    e("default", (u = y(o), T((f = t((m = class extends s {
        constructor(...e) {
            super(...e), n(this, "ModifyPassword_panel", f, this), this.areaCode = null, this._cdGetCodeTime = 0, this._logintimestamp = 0, this._isCdCodeing = !1, this._backClickCallBack = null
        }
        onLoad() {
            this.registerMsg(), this.node.on(o.EventType.TOUCH_END, (e => {
                e.propagationStopped = !0
            }), this), c.resMgr.adaptWidget(this.node), c.action.listenEditboxLimitNum(d("phone_Panel/phoneNumber_text", this.ModifyPassword_panel).getComponent(r)), c.action.listenEditboxLimitNum(d("enter_code_panel/identifynum_text", this.ModifyPassword_panel).getComponent(r))
        }
        onDestroy() {
            g.off(l.EVENT_HIDE, this.OnAppEnterBackground, this), g.off(l.EVENT_SHOW, this.OnAppEnterForeground, this), c.MessageCenter.unregister("BindDevice_vcode_succ", this.node)
        }
        registerMsg() {
            g.on(l.EVENT_HIDE, this.OnAppEnterBackground, this), g.on(l.EVENT_SHOW, this.OnAppEnterForeground, this), c.MessageCenter.register("BindDevice_vcode_succ", this.OnResetPassVCodeCallBack.bind(this), this.node)
        }
        OnAppEnterBackground() {
            this.stopCd()
        }
        OnAppEnterForeground() {
            this.calculationCd()
        }
        init(e, t) {
            this.areaCode = t, this.initText(), this._backClickCallBack = e, this.calculationCd(), d("phone_Panel/areaCode_text", this.ModifyPassword_panel).getComponent(p).string = this.areaCode.getComponent(h).getAreaCode(c.String(c.dataHandler.getUserData().areaCode))
        }
        updateAreaCode(e) {
            d("phone_Panel/areaCode_text", this.ModifyPassword_panel).getComponent(p).string = e
        }
        onBtnAreaCodeClick() {
            this.node.active = !1, this.areaCode.active = !0
        }
        initText() {
            d("title_text", this.ModifyPassword_panel).getComponent(p).string = c.config.getStringData("BindDevice_title");
            let e = d("guard_phone_panel/guard_text", this.ModifyPassword_panel);
            e.getComponent(p).string = c.config.getStringData("BindDevice_guard_text");
            let t = d("guard_phone_panel/phonenumber_text", this.ModifyPassword_panel),
                n = c.dataHandler.getUserData().mobile,
                i = c.StringTools.getArrayLength(n),
                o = i - 5;
            if (i >= 5) {
                let e = "";
                for (let t = 0; t < o; t++) e += "*";
                t.getComponent(p).string = "(" + n.substring(0, 3) + e + n.substring(i - 2) + ")"
            }
            c.resMgr.adaptWidget(t);
            let a = c.resMgr.getLabelStringSize(e.getComponent(p)),
                s = c.resMgr.getLabelStringSize(t.getComponent(p));
            t.setPosition(new _(e.position.x + a.width + 23, t.position.y)), d("guard_phone_panel/label_0", this.ModifyPassword_panel).getComponent(p).string = c.config.getStringData("BindDevice_label_0");
            let g = d("guard_phone_panel/label_1", this.ModifyPassword_panel);
            g.getComponent(p).string = c.config.getStringData("BindDevice_label_1"), g.setPosition(new _(e.position.x + a.width + 23 + s.width + 23, g.position.y)), d("phone_Panel/phoneNumber_text", this.ModifyPassword_panel).getComponent(r).placeholder = c.config.getStringData("BindDevice_phoneNumber_text"), d("enter_code_panel/identifynum_text", this.ModifyPassword_panel).getComponent(r).placeholder = c.config.getStringData("BindDevice_identifynum_text"), d("enter_code_panel/getInvateCode_button/Label", this.ModifyPassword_panel).getComponent(p).string = c.config.getStringData("BindDevice_getInvateCode_button"), d("fok_button/Label", this.ModifyPassword_panel).getComponent(p).string = c.config.getStringData("BindDevice_fok_button")
        }
        stopCd() {
            this.unschedule(this.UpdateTime.bind(this));
            let e = new Date;
            this._logintimestamp = e.getTime()
        }
        calculationCd() {
            let e = (new Date).getTime(),
                t = Math.floor((e - this._logintimestamp) / 1e3);
            0 == this._isCdCodeing || 0 != this._logintimestamp && t >= this._cdGetCodeTime ? (this._cdGetCodeTime = 0, this._logintimestamp = 0, this.resetTime()) : this._cdGetCodeTime = this._cdGetCodeTime - t
        }
        getAreaCodeData() {
            let e = d("phone_Panel/areaCode_text", this.ModifyPassword_panel).getComponent(p).string,
                t = e.indexOf("+");
            return e = e.substring(t + 1, e.length), e
        }
        onBtnBackClick() {
            c.AudioMgr.playButtonSound("back_button.mp3"), this.stopCd(), this._backClickCallBack && this._backClickCallBack()
        }
        onBtnInvateCodeClick() {
            let e = d("phone_Panel/phoneNumber_text", this.ModifyPassword_panel).getComponent(r).string,
                t = this.getAreaCodeData();
            this._isCdCodeing || (e.length <= 0 ? c.TT.showMsg(c.config.getStringData("BindDevice_phoneNumber_text"), c.Enum.ToastType.ToastTypeError) : c.httpHandler.requestGetVCodeByDevice(e, t))
        }
        onBtnSureClick() {
            let e = d("phone_Panel/phoneNumber_text", this.ModifyPassword_panel).getComponent(r).string,
                t = d("enter_code_panel/identifynum_text", this.ModifyPassword_panel).getComponent(r).string,
                n = this.getAreaCodeData();
            return e.length <= 0 ? (c.TT.showMsg(c.config.getStringData("BindDevice_phoneNumber_text"), c.Enum.ToastType.ToastTypeError), void c.AudioMgr.playButtonSound("button_click.mp3")) : c.StringTools.getArrayLength(t) <= 0 ? (c.TT.showMsg(c.config.getStringData("BindDevice_identifynum_text"), c.Enum.ToastType.ToastTypeWarning), void c.AudioMgr.playButtonSound("button_click.mp3")) : void c.httpHandler.requestBindSafeDevice(e, n, t)
        }
        resetTime() {
            this.unschedule(this.UpdateTime), this._isCdCodeing = !1
        }
        OnResetPassVCodeCallBack() {
            this.unschedule(this.UpdateTime), this.schedule(this.UpdateTime, 1), this._isCdCodeing = !0, this._cdGetCodeTime = 60
        }
        UpdateTime(e) {
            if (!(this._cdGetCodeTime > 0)) return this.resetTime(), void(d("enter_code_panel/getInvateCode_button/Label", this.ModifyPassword_panel).getComponent(p).string = c.config.getStringData("getCode"));
            this._cdGetCodeTime -= 1, d("enter_code_panel/getInvateCode_button/Label", this.ModifyPassword_panel).getComponent(p).string = c.StringTools.formatC(c.config.getStringData("getCodeAgain"), this._cdGetCodeTime)
        }
        OnClear() {
            this.onBtnBackClick(), d("code_panel/password_text", this.ModifyPassword_panel).getComponent(r).string = "", d("code_panel_0/password_text", this.ModifyPassword_panel).getComponent(r).string = "", d("enter_code_panel/getInvateCode_button/Label", this.ModifyPassword_panel).getComponent(p).string = c.config.getStringData("getCode"), d("enter_code_panel/enter_phone_Panel/forget_setInvateCode_text", this.ModifyPassword_panel).getComponent(r).string = ""
        }
        rightEnterToLeft() {
            c.action.moveToAction(this.node, c.Enum.action_FuncType.to_left, c.Enum.action_FuncType.enter, c.Enum.action_FuncType.dt_NORMAL, new _(1.5 * c.config.WIDTH, 0, 1), new _(.5 * c.config.WIDTH, 0, 1))
        }
        leftOutToRight() {
            c.action.moveToAction(this.node, c.Enum.action_FuncType.to_right, c.Enum.action_FuncType.out, c.Enum.action_FuncType.dt_NORMAL, new _(.5 * c.config.WIDTH, 0, 1), new _(1.5 * c.config.WIDTH, 0, 1))
        }
    }).prototype, "ModifyPassword_panel", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = m)) || C));
    i._RF.pop()
}