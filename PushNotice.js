import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as N from "./cc.js";
import * as a from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as P from "./cc.js";
import * as E from "./cc.js";
import * as m from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as i from "./cc.js";
import * as C from "./cv.js";
import * as y from "./Enum.js";

function main() {
    var T, f;
    e._RF.push({}, "32bd6iVGclK8ZUW7oDysKye", "PushNotice", void 0);
    t("PushNoticeData", class {
        constructor() {
            this.str = "", this.msgType = []
        }
    });
    const {
        ccclass: b,
        property: x
    } = i;
    t("PushNotice", b(((f = class t extends s {
        constructor(...t) {
            super(...t), this.prefab = null, this.msgNode = null, this._pushNotice_panel = null, this._bPuchNoticeIsShowIng = !1, this._notice_text = null, this._notice_text_1 = null, this._notice_bg = null, this._pushType = 0, this.m_pushNoticeList = [], this.maxNoticeCount = 100
        }
        static getInstance() {
            return t.g_instance && t.g_instance.msgNode && o(t.g_instance.msgNode, !0) || (t.g_instance = new t, t.g_instance.init()), t.g_instance
        }
        getPushNotice() {
            return this.m_pushNoticeList
        }
        addPushNotice(t, e = !0) {
            this.isEnableShow && (t.str = C.tools.updateGameType(t.str), !C.appConfig.getGameConfig().enablePokerFlipsNotice && t.str.includes("Poker Flips") || (e && C.MessageCenter.send("sendNoticeMsg", t), C.StringTools.getArrayLength(t.str) > 0 && (this.m_pushNoticeList.length > this.maxNoticeCount && this.m_pushNoticeList.shift(), this.m_pushNoticeList.push(t))))
        }
        earseFirstPushNotice() {
            this.m_pushNoticeList.splice(0, 1)
        }
        setPushNoticeType(t) {
            this._pushNotice_panel && this.setPushType(t)
        }
        hideNoticeLayer(t) {
            this._pushNotice_panel && (this._pushNotice_panel.active = !1)
        }
        init() {
            this.isEnableShow && n.load("zh_CN/commonPrefab/PushNotice", function(t, e) {
                if (console.log("start load commonPrefab/PushNotice.prefab file"), t) return void console.log(t.message || t);
                this.prefab = e, this._bPuchNoticeIsShowIng = !1;
                let i = h(this.prefab);
                c.addPersistRootNode(i), i.addComponent(_), i.getComponent(g).setAnchorPoint(new p(.5, .5)), i.setSiblingIndex(C.Enum.ZORDER_TYPE.ZORDER_TT), this._pushNotice_panel = i.getChildByName("PushNotice_panel"), this._notice_text = this._pushNotice_panel.getChildByName("notice_text").getComponent(r), this._notice_text_1 = this._pushNotice_panel.getChildByName("notice_text_1").getComponent(r), this._notice_bg = this._pushNotice_panel.getChildByName("notice_bg"), this._pushNotice_panel.active = !1;
                let s = C.config.IS_IPHONEX_SCREEN ? C.config.FULLSCREEN_OFFSETY : 0;
                C.resMgr.adaptWidget(i, !0), i.setPosition(i.position.x, i.position.y - s), this.msgNode = i, this.schedule(this.Update.bind(this), 1), a.on(u.EVENT_HIDE, this.OnAppEnterBackground, this)
            }.bind(this))
        }
        onDestroy() {
            a.off(u.EVENT_HIDE, this.OnAppEnterBackground, this)
        }
        reset() {
            if (!this.msgNode) return;
            C.resMgr.adaptWidget(this.msgNode, !0), N.stopAllByTarget(this._notice_text.node), N.stopAllByTarget(this._notice_text_1.node), this.hidePushNotice();
            let t = C.config.IS_IPHONEX_SCREEN ? C.config.FULLSCREEN_OFFSETY : 0;
            this.msgNode.setPosition(this.msgNode.position.x, this.msgNode.position.y - t);
            let e = C.config.getCurrentScene();
            e === C.Enum.SCENE.LOADING_SCENE || e === C.Enum.SCENE.LOGIN_SCENE || e === C.Enum.SCENE.VIDEOCOWBOY_SCENE || e === C.Enum.SCENE.HUMANBOY_SCENE ? this.msgNode.active = !1 : this.msgNode.active = !0
        }
        Update(t) {
            this.getPushNotice().length > 0 && !this._bPuchNoticeIsShowIng ? this.showPushNotice() : this._pushNotice_panel.active = this._bPuchNoticeIsShowIng
        }
        getMessage() {
            if (this.getPushNotice().length > 0) {
                let t = this.getPushNotice()[0];
                if (this._pushType == y.PUSH_ERROR) return this.earseFirstPushNotice(), this.getMessage();
                {
                    let e = t.msgType.length;
                    for (let i = 0; i < e; i++) {
                        if (t.msgType[i] === y.PUSH_WORLD) return this._pushType === y.PUSH_COWBOY || this._pushType === y.PUSH_HUMANBOY || this._pushType === y.PUSH_VIDEOCOWBOY || this._pushType === y.PUSH_POKERMASTER ? (C.MessageCenter.send("showMedalMsg", t.str), this.earseFirstPushNotice(), "") : this._pushType === y.PUSH_LOBBY ? (this.earseFirstPushNotice(), "") : t.str;
                        if (t.msgType[i] === this._pushType) return this._pushType === y.PUSH_LOBBY ? (this.earseFirstPushNotice(), "") : t.str;
                        if (i === e - 1) return this.earseFirstPushNotice(), this.getMessage()
                    }
                }
            }
            return ""
        }
        showPushNotice() {
            let t = this.getMessage();
            if (C.StringTools.getArrayLength(t) > 0) {
                if (l.instance.ActionManager.getNumberOfRunningActionsInTarget(this._notice_text.node) > 0) return;
                this._bPuchNoticeIsShowIng = !0, this._pushNotice_panel.active = !0;
                let t = this.getPushNotice()[0].str,
                    e = C.StringTools.getStringIndexByLength(this._notice_text.node, t);
                this._notice_text.string = t.substr(0, e), e >= t.length ? this._notice_text_1.string = " " : this._notice_text_1.string = t.substr(e, t.length);
                let i = C.resMgr.getRichTextStringSize(this._notice_text).width,
                    s = C.resMgr.getRichTextStringSize(this._notice_text_1).width;
                this._notice_text.node.setPosition(this._pushNotice_panel.getComponent(g).contentSize.width, this._notice_text.node.position.y), this._notice_text_1.node.setPosition(this._notice_text.node.position.x + i, this._notice_text.node.position.y);
                let o = 4;
                o += (i + s) / (this._pushNotice_panel.getComponent(g).contentSize.width / o), d(this._notice_text.node).to(o, {
                    position: m(-(i + s) - this._pushNotice_panel.getComponent(g).contentSize.width, this._notice_text.node.position.y)
                }).start(), d(this._notice_text_1.node).to(o, {
                    position: m(-s - this._pushNotice_panel.getComponent(g).contentSize.width, this._notice_text.node.position.y)
                }).call((() => {
                    this.moveCallBack()
                })).start()
            } else this.hidePushNotice()
        }
        hidePushNotice() {
            this._bPuchNoticeIsShowIng = !1, this._pushNotice_panel.active = !1
        }
        moveCallBack() {
            this.earseFirstPushNotice(), this._bPuchNoticeIsShowIng = !1
        }
        Adaptation() {
            let t = c.getScene().getComponentInChildren(S).node.getComponent(g).contentSize;
            if (t.height > t.width) {
                let e = 1;
                C.config.IS_FULLSCREEN && (e = (t.height - C.config.FULLSCREEN_OFFSETY) / t.height), C.resMgr.setSpriteFrame(this._notice_bg.node, "zh_CN/common/common_notice_bg"), this._notice_bg.node.getComponent(g).setContentSize(new P(t.width, this._notice_bg.node.getComponent(g).contentSize.height)), this._pushNotice_panel.getComponent(g).setContentSize(this._notice_bg.node.getComponent(g).contentSize), this._notice_bg.node.setPosition(new E(this._notice_bg.node.getComponent(g).contentSize.width / 2, 0)), this._pushNotice_panel.setPosition(new E(t.width / 2, (t.height - this._pushNotice_panel.getComponent(g).contentSize.height / 2 - 5) * e))
            } else C.resMgr.setSpriteFrame(this._notice_bg.node, "zh_CN/common/common_notice_bg_1"), this._pushNotice_panel.getComponent(g).setContentSize(this._notice_bg.node.getComponent(g).contentSize), this._notice_bg.node.setPosition(new E(this._notice_bg.node.getComponent(g).contentSize.width / 2, 0)), this._pushNotice_panel.setPosition(new E(t.width / 2, t.height / 2))
        }
        setPushType(t) {
            this._pushType = t
        }
        OnAppEnterBackground() {
            this.m_pushNoticeList = [], N.stopAllByTarget(this._notice_text.node), N.stopAllByTarget(this._notice_text_1.node), this.hidePushNotice()
        }
        get isEnableShow() {
            return C.tools.isGiftFestivalMessageDisplay()
        }
    }).g_instance = void 0, T = f)) || T);
    e._RF.pop()
}