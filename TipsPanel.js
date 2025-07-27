import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as p from "./cc.js";
import * as l from "./cc.js";
import * as _ from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as N from "./cv.js";

function main() {
    var C, b;
    e._RF.push({}, "4732dxfe5lDfLCEB5AOShVL", "TipsPanel", void 0);
    const {
        ccclass: x,
        property: y
    } = s;
    t("TipsPanel", x(((b = class t extends n {
        constructor(...t) {
            super(...t), this.tipsMsg = null, this.sureCallback = null, this.cancelCallback = null, this.msgNode = null, this.down_txt = null, this.time = 0, this._panelTag = null, this.message_text_positionY = 0, this.NOT_RESET_TAG = "NOT_RESET_TAG"
        }
        init() {
            i.load("zh_CN/commonPrefab/TipsPanel", function(t, e) {
                if (console.log("start load commonPrefab/TipsPanel.prefab file"), t) return void console.log(t.message || t);
                this.msgNode = o(e), a.addPersistRootNode(this.msgNode), this.msgNode.addComponent(g), this.msgNode.setSiblingIndex(N.Enum.ZORDER_TYPE.ZORDER_TT), l("sure_button", this.msgNode).on(h.EventType.CLICK, this.onBtnSureClick, this), l("sure0_button", this.msgNode).on(h.EventType.CLICK, this.onBtnSureClick, this), l("sure1_button", this.msgNode).on(h.EventType.CLICK, this.onBtnSureClick, this), l("cancel_button", this.msgNode).on(h.EventType.CLICK, this.onBtnCancelClick, this), this.down_txt = l("Image_1/down_txt", this.msgNode), this.msgNode.on(d.EventType.TOUCH_END, (t => {
                    t.propagationStopped = !0
                })), this.msgNode.active = !1, this.showMsgMail(!1), l("lastMoney_text", this.msgNode).active = !1, this.initLanguage(), N.MessageCenter.register(N.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.msgNode);
                let s = l("Image_1/message_text", this.msgNode);
                this.message_text_positionY = s.position.y
            }.bind(this))
        }
        onDestroy() {
            N.MessageCenter.unregister(N.config.CHANGE_LANGUAGE, this.node)
        }
        recharge() {
            N.popUp.recharge()
        }
        reset() {
            this.msgNode && (N.resMgr.adaptWidget(this.msgNode, !0), this._panelTag != this.NOT_RESET_TAG && this.hideTipsPanel())
        }
        initLanguage() {
            l("sure_button/Label", this.msgNode).getComponent(c).string = N.config.getStringData("OK"), l("cancel_button/Label", this.msgNode).getComponent(c).string = N.config.getStringData("Cancel"), l("sure0_button/Label", this.msgNode).getComponent(c).string = N.config.getStringData("Confirm")
        }
        showImage(t) {
            t = void 0 !== t && t, l("edit_text", this.msgNode).active = t, l("bg", this.msgNode).active = t
        }
        showMsgMail(t) {
            t = void 0 !== t && t, l("Image_duanxin", this.msgNode).active = t
        }
        getEditBoxString() {
            return l("edit_text", this.msgNode).getComponent(m).string
        }
        getEditBox() {
            return l("edit_text", this.msgNode).getComponent(m)
        }
        showMsg(t, e, s, n, i = !1, o = !1, a = "", g = !1, l = c.HorizontalAlign.CENTER, h = !1, d) {
            let m, r;
            m = "boolean" == typeof e ? e : "number" == typeof e ? e == N.Enum.ButtonStyle.TWO_BUTTON : null != n, r = h, N.popUp.showMsg({
                txt: t,
                title: a,
                isTwoBtn: m,
                sureCallback: s,
                cancelCallback: n,
                needEditBox: i,
                iconType: o ? N.Enum.PopUpIconType.Message : void 0,
                msgType: N.Enum.ToastType.ToastTypeDefault,
                isPopupDarkActive: r,
                cashGameScene: d
            })
        }
        showTimeMsg(t, e, s, n = !1, i = !1, o = "", a) {
            N.popUp.showMsg({
                title: o,
                txt: t,
                sureCallback: e,
                cancelCallback: s,
                needEditBox: n,
                isTwoBtn: null != s,
                iconType: i ? N.Enum.PopUpIconType.Message : void 0,
                msgType: N.Enum.ToastType.ToastTypeDefault,
                cashGameScene: a
            })
        }
        hideDialogButton(t) {
            switch (t) {
                case N.Enum.ButtonStyle.TWO_BUTTON:
                    l("gold_button", this.msgNode).active = !1, l("gray_button", this.msgNode).active = !1;
                    break;
                case N.Enum.ButtonStyle.GOLD_BUTTON:
                    l("gold_button", this.msgNode).active = !1;
                    break;
                case N.Enum.ButtonStyle.GRAY_BUTTON:
                    l("gray_button", this.msgNode).active = !1
            }
        }
        setTag(t) {
            this._panelTag = t
        }
        getTag() {
            return this._panelTag
        }
        setButtonText(t) {
            N.popUp.setButtonText(t)
        }
        getMessageImage() {
            return l("Image_duanxin", this.msgNode).getComponent(r)
        }
        getMessageImageText() {
            return l("Image_duanxin/text_duanxin", this.msgNode).getComponent(c)
        }
        getMessageText() {
            if (null != this.msgNode) return l("bgPanel/message_text", this.msgNode).getComponent(c)
        }
        setMessageText(t) {
            let e = l("bgPanel/message_text", this.msgNode);
            if (!e) return;
            e.getComponent(u).color = new p(225, 225, 225), e.getComponent(T).setContentSize(780, 280);
            let s = l("bgPanel/temp_text", this.msgNode);
            s.getComponent(c).string = t;
            let n = N.resMgr.getLabelStringSize(s.getComponent(c), t).width;
            s.active = !1;
            let i = n / e.getComponent(T).contentSize.width,
                o = e.getComponent(c);
            i <= 2 ? (o.fontSize = 48, o.lineHeight = 67) : (o.fontSize = 40, o.lineHeight = 56), o.string = N.StringTools.calculateAutoWrapString(e, t)
        }
        hideTipsPanel() {
            this && this.msgNode && _(this.msgNode, !0) && (this.msgNode.active = !1)
        }
        getVisible() {
            return !!(this && this.msgNode && _(this.msgNode, !0)) && this.msgNode.active
        }
        hideTipsByDelay() {
            if (this.msgNode) {
                let t = this.msgNode;
                this.unschedule(this.scheduleUpdate), t.active = !1
            }
        }
        onBtnSureClick() {
            N.AudioMgr.playButtonSound("button_click.mp3"), null != this.sureCallback && this.sureCallback(l("edit_text", this.msgNode).getComponent(m)), this.hideTipsByDelay()
        }
        onBtnCancelClick() {
            N.AudioMgr.playButtonSound("button_click.mp3"), null != this.cancelCallback && this.cancelCallback(l("edit_text", this.msgNode).getComponent(m)), this.hideTipsByDelay()
        }
        static getInstance() {
            return t.g_instance && t.g_instance.msgNode && _(t.g_instance.msgNode, !0) || (t.g_instance = new t, t.g_instance.init()), t.g_instance
        }
        scheduleUpdate(t) {
            this.time = this.time - 1, this.time >= 0 ? this.down_txt.getComponent(c).string = this.time.toString() + "s" : this.onBtnCancelClick()
        }
        haveMsgNode() {
            return !!(this && this.msgNode && _(this.msgNode, !0))
        }
    }).g_instance = void 0, C = b)) || C);
    e._RF.pop()
}