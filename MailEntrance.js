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
import * as _ from "./cc.js";
import * as l from "./cc.js";
import * as M from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cv.js";
import * as b from "./MailPopLayer.js";
import * as m from "./GlobalMsgLayer.js";
import * as A from "./CrashTracing.js";
import * as C from "./CrashTracing.js";
import * as y from "./HallScene.js";
import * as L from "./Helpers2.js";
import * as S from "./Helpers2.js";
import * as w from "./MessageSender.js";

function main() {
    var v, P, E, I, N, W, T, B, k, D, U, V, z;
    n._RF.push({}, "de3b51T0VJBk4a4UF3fFvfN", "MailEntrance", void 0);
    const {
        ccclass: O,
        property: R
    } = g;
    e("MailEntrance", (v = R(s), P = R(s), E = R(o), I = R(a), N = R(r), O(((z = class e extends l {
        constructor(...e) {
            super(...e), i(this, "prefab_globalMsg", B, this), i(this, "prefab_mailPopLayer", k, this), i(this, "img_red", D, this), i(this, "txt_new_num", U, this), i(this, "panel_parent", V, this), this._fronzeActive = !1, this._nodeWidget = void 0, this._redImageWidget = void 0, this._root = null, this._instance = null, this.inst_mailPopLayer = null, this.messageLayer = null
        }
        static getInstance() {
            return e._g_instance
        }
        show() {
            this._fronzeActive = !1, this._onMsgUpdateListView()
        }
        hide(e = !1) {
            this._fronzeActive = e, this.node.active = !1
        }
        closeMailLayer() {
            f.MessageCenter.send("close_mailPopLayer"), f.MessageCenter.send("close_globalMsgLayer", !1)
        }
        onLoad() {
            e._g_instance = this, this.getComponent(h).node.on("click", this._onClick, this), this._root = f.tools.getRoot(this.node), f.resMgr.adaptWidget(this.node)
        }
        start() {
            if (this.img_red.node.active = !1, this._addObserver(), this._updateView(), this._createMsgLayer(), this._createMailPopUp(), f.appConfig.isWebApp) {
                const e = p.getScene().getComponentInChildren(y);
                if (f.globalMsgDataMgr.clearMailGlobalData(), e.mailCountInfo && f.globalMsgDataMgr.setMailCountInfo(e.mailCountInfo), !this.panel_parent) {
                    const t = e.node,
                        i = c("mainView", t);
                    this.panel_parent = i || this.node.scene.getComponentInChildren(d).node
                }
                this.createOpenAndHideMsgLayer()
            }
        }
        onDestroy() {
            this._removeObserver(), e._g_instance = null
        }
        _addObserver() {
            f.MessageCenter.register("close_mail_layer", this.closeMailLayer.bind(this), this.node), f.MessageCenter.register("switchSceneBegan", this._onMsgSwitchSceneBegan.bind(this), this.node), f.MessageCenter.register("switchSceneFinish", this._onMsgSwitchSceneFinish.bind(this), this.node), f.MessageCenter.register("updateListView", this._onMsgUpdateListView.bind(this), this.node), f.MessageCenter.register("on_notify_mail_num", this._onMsgUpdateMailNum.bind(this), this.node), f.MessageCenter.register("update_notice_status", this._onMsgUpdateCountStatus.bind(this), this.node), f.MessageCenter.register("on_pop_one_anounce", this._onMsgPopOneAnounce.bind(this), this.node), f.MessageCenter.register("webApp_open_notification", this.webAppOpenNotification.bind(this), this.node), f.MessageCenter.register("webApp_close_notification", this.closeMailLayer.bind(this), this.node)
        }
        _removeObserver() {
            f.MessageCenter.unregister("close_mail_layer", this.node), f.MessageCenter.unregister("switchSceneBegan", this.node), f.MessageCenter.unregister("switchSceneFinish", this.node), f.MessageCenter.unregister("updateListView", this.node), f.MessageCenter.unregister("on_notify_mail_num", this.node), f.MessageCenter.unregister("update_notice_status", this.node), f.MessageCenter.unregister("on_pop_one_anounce", this.node), f.MessageCenter.unregister("webApp_open_notification", this.node), f.MessageCenter.unregister("webApp_close_notification", this.node)
        }
        _updateView() {
            if (0 != f.appConfig.getGeneralConfig().showInAppMessages && (this._onMsgUpdateCountStatus(), _(this._root, !0))) {
                let e = f.config.getCurrentScene(f.String(this._root.name));
                this._checkNodeActiveStatus(e)
            }
        }
        _onClick(e) {
            if (f.AudioMgr.playButtonSound("button_click.mp3"), _(this._instance, !0) || this._createMsgLayer(), !this._instance.active) {
                const e = !f.appConfig.isWebApp;
                this.messageLayer.autoShow(this.panel_parent ?? this._root, e), f.MessageCenter.send("hide_bombInfoTips"), f.MessageCenter.send("HideWebview_ShowWindows"), f.appConfig.isLandscapeLayout || f.MessageCenter.send("hide_hallMttDetailView")
            }
        }
        createOpenAndHideMsgLayer(e = !1) {
            e || this._createMsgLayer(), this.messageLayer.autoShow(this.panel_parent ?? this._root, !1), this.messageLayer.autoHide(!1)
        }
        _createMsgLayer() {
            try {
                const e = p.getScene().getComponentInChildren(y),
                    t = this.prefab_globalMsg ? this.prefab_globalMsg : e.notificationPref;
                this._instance = m.getSinglePrefabInst(t), this.messageLayer = this._instance.getComponent(m), this.messageLayer && this.scheduleOnce((() => {
                    this.createOpenAndHideMsgLayer(!0), f.MessageCenter.send("NotificationLoaded")
                }), .5), this._instance.active = !1
            } catch (t) {
                var e;
                f.appConfig.isWebApp && f.SwitchLoadingView.hide(""), null == (e = C.getInstance()) || e.trace(A.NotificationCenter, "NotificationCenter", {
                    Reason: "Failed to create instace of notification center popup",
                    ErrorMessage: null == t ? void 0 : t.message,
                    ErrorStack: null == t ? void 0 : t.stack
                })
            }
        }
        updateWidgetComponents() {
            let e = this.node.getComponent(u);
            e || (e = this.node.addComponent(u)), e && (e.left = 0, e.isAlignLeft = !1, e.top = 0, e.isAlignTop = !1, e.right = 0, e.isAlignRight = !1, e.bottom = 0, e.isAlignBottom = !1), this._nodeWidget = e;
            let t = this.img_red.getComponent(u);
            t || (t = this.img_red.addComponent(u)), t && (t.left = 0, t.isAlignLeft = !1, t.top = 0, t.isAlignTop = !1, t.right = 0, t.isAlignRight = !1, t.bottom = 0, t.isAlignBottom = !1), this._redImageWidget = t
        }
        updateNodeActiveStatus(e) {
            if (0 == f.appConfig.getGeneralConfig().showInAppMessages) return;
            let t = this._nodeWidget,
                i = this._redImageWidget;
            switch (e) {
                case f.Enum.SCENE.HALL_SCENE:
                    this._fronzeActive || (this.node.active = !0), this.node.setSiblingIndex(0), t && (t.isAlignTop = !0, t.isAbsoluteTop = !0, t.top = 132, t.isAlignRight = !0, t.isAbsoluteRight = !0, t.right = 10, t.isAlignLeft = !1, t.isAlignBottom = !1), i && (i.isAlignTop = !0, i.isAbsoluteTop = !0, i.top = -7.45, i.isAlignLeft = !0, i.isAbsoluteLeft = !0, i.left = 61, i.isAlignRight = !1, i.isAlignBottom = !1);
                    break;
                case f.Enum.SCENE.GAME_SCENE:
                case f.Enum.SCENE.GAME_SCENE_AOF:
                    this._fronzeActive || (this.node.active = !0), f.resMgr.setSpriteFrame(this.node, "zh_CN/common/icon_letter1"), this.node.setSiblingIndex(0), t && (t.isAlignTop = !0, t.isAbsoluteTop = !0, t.top = 127.5, t.isAlignRight = !0, t.isAbsoluteRight = !0, t.right = 39, t.isAlignLeft = !1, t.isAlignBottom = !1), i && (i.isAlignTop = !0, i.isAbsoluteTop = !0, i.top = -35, i.isAlignLeft = !0, i.isAbsoluteLeft = !0, i.left = 52, i.isAlignRight = !1, i.isAlignBottom = !1);
                    break;
                default:
                    this.node.active = !1, this.node.setSiblingIndex(0), this._fronzeActive = !1
            }
        }
        _checkNodeActiveStatus(e) {
            this.updateNodeActiveStatus(e), f.resMgr.adaptWidget(this.node), f.resMgr.adaptWidget(this.img_red.node)
        }
        _onMsgSwitchSceneBegan(e) {}
        _onMsgSwitchSceneFinish(e) {
            this._updateView()
        }
        _onMsgUpdateListView() {
            this._updateView()
        }
        _onMsgUpdateMailNum(e) {
            f.globalMsgDataMgr.clearMailGlobalData(), f.globalMsgDataMgr.setMailCountInfo(e), f.MessageCenter.send("update_notice_status")
        }
        _onMsgUpdateCountStatus() {
            let e = f.globalMsgDataMgr.getUnreadMsgCount();
            this.txt_new_num.string = e.toString(), this.img_red.node.active = e > 0, f.appConfig.isWebApp && w.sendMessage({
                sourceApp: L.Poker,
                targetApp: L.WebApp,
                eventType: S.SendNotificationCount,
                payload: f.globalMsgDataMgr.getMailCountInfo()
            })
        }
        _onMsgPopOneAnounce(e) {
            var t;
            _(this.inst_mailPopLayer, !0) || this._createMailPopUp(), this.inst_mailPopLayer.getComponent(b).autoShow(e), this.inst_mailPopLayer.setSiblingIndex((null == (t = this._root) ? void 0 : t.children.length) + 1)
        }
        _createMailPopUp() {
            this.inst_mailPopLayer = M(this.prefab_mailPopLayer);
            let e = p.getScene().getComponentInChildren(d).node;
            e.getChildByUuid(this.inst_mailPopLayer.uuid) || e.addChild(this.inst_mailPopLayer), this.inst_mailPopLayer.active = !1
        }
        webAppOpenNotification() {
            this._onClick(null)
        }
    })._g_instance = null, B = t((T = z).prototype, "prefab_globalMsg", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(T.prototype, "prefab_mailPopLayer", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(T.prototype, "img_red", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(T.prototype, "txt_new_num", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = t(T.prototype, "panel_parent", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = T)) || W));
    n._RF.pop()
}