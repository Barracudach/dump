import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as m from "./observer.js";
import * as g from "./holdem_game_explaination.js";
import * as C from "./Pb.js";
import * as b from "./ResourcesLoader.js";
import * as f from "./AndroidBackButton.js";
import * as y from "./Holdem_Basic_Item.js";
import * as _ from "./cv.js";
import * as B from "./Enum.js";
import * as A from "./MTTGameRules.js";
import * as v from "./MTTConnector.js";
import * as E from "./Translator.js";

function main() {
    var R, P, L, k, M, S, T, w, N, D, H, O, I, G, U, F, K, x, z, J, W, q;
    i._RF.push({}, "3fe68RaJh5HJKP1Oi1CX5wM", "Holdem_RoomMenu_ts", void 0);
    const {
        ccclass: Q,
        property: j
    } = s;
    t("Holdem_RoomMenu", (R = j(n), P = j(n), L = j(n), k = j(n), M = j(n), S = j(n), T = j(n), w = j(n), N = j(n), D = j(n), Q(H = m((I = e((O = class extends y {
        constructor(...t) {
            super(...t), o(this, "mask", I, this), o(this, "blocker", G, this), o(this, "rulesButton", U, this), o(this, "settingsButton", F, this), o(this, "rechargeButton", K, this), o(this, "reliveButton", x, this), o(this, "quitButton", z, this), o(this, "cancelApplyButton", J, this), o(this, "rulesPos", W, this), o(this, "panelPosition", q, this), this.room = void 0, this.rulesNodePopup = null, this.OFFSET_Y_DEFAULT = 80
        }
        onLoad() {
            this.blocker.active = !1, this.mask.on(l.EventType.CLICK, this.onClickMask.bind(this)), this.rulesButton.on(l.EventType.CLICK, this.onClickRules.bind(this)), this.settingsButton.on(l.EventType.CLICK, this.onClickSettings.bind(this)), this.rechargeButton.on(l.EventType.CLICK, this.onClickRecharge.bind(this)), this.cancelApplyButton.on(l.EventType.CLICK, this.onClickCancelApply.bind(this)), this.reliveButton.on(l.EventType.CLICK, this.onClickRelive.bind(this)), this.quitButton.on(l.EventType.CLICK, this.onClickQuit.bind(this)), this.SetActiveMenuButton(this.settingsButton, _.appConfig.getGameConfig().settingMenuEnabled), this.adaptScreen()
        }
        adaptScreen() {
            if (r(this.panelPosition)) {
                let t = this.panelPosition.getComponent(u);
                t.top = t.top + _.tools.calcTopOffsetToMove(this.OFFSET_Y_DEFAULT)
            }
            _.dataHandler.getUserData().total_amount > 0 && this.scheduleOnce((() => {
                [this.rulesButton, this.settingsButton, this.rechargeButton, this.cancelApplyButton, this.reliveButton, this.quitButton].forEach((t => {
                    if (r(t) && t.active) {
                        const e = t.children[0].getComponent(u);
                        r(e) && e.updateAlignment()
                    }
                }))
            }), .1)
        }
        playAnimation(t) {
            let e = this.node.getComponent(a);
            e.play(e.clips[t].name)
        }
        show() {
            v.instance.sendMessageCenter(v.instance.config.BroadCast.SHOW_FULL_SCREEN_PANEL), cc_mtt.vv.ConsoleLog.log("Holdem_RoomMenu show"), c.isNative && c.os === c.OS.ANDROID && f.getInstance().addBackFunction("Holdem_RoomMenu", this.hide.bind(this)), this.node.active = !0, this.blocker.active = !1, this.playAnimation(0)
        }
        hide() {
            c.isNative && c.os === c.OS.ANDROID && f.getInstance().removeBackFunction("Holdem_RoomMenu"), r(this.blocker, !0) && (this.blocker.active = !0), this.playAnimation(1), v.instance.sendMessageCenter(v.instance.config.BroadCast.HIDE_FULL_SCREEN_PANEL)
        }
        onShow() {}
        onHide() {
            this.node.active = !1
        }
        createRulePrefab() {
            let t;
            switch (_.appConfig.jurisdiction) {
                case B.Asia:
                    t = b.RES_PATH.PREFAB.HOLDEM.MTT_GAME_RULES_PKW;
                    break;
                default:
                    var e;
                    if (this.rulesNodePopup) return void(null == (e = this.rulesNodePopup.getComponent(A)) || e.showRulePopup());
                    t = _.appConfig.isLandscapeLayout ? b.RES_PATH.PREFAB.HOLDEM.MTT_GAME_RULES_LANDSCAPE : b.RES_PATH.PREFAB.HOLDEM.MTT_GAME_RULES
            }
            cc_mtt.vv.AssetsManager.loadRes(t, p, ((t, e) => {
                if (!e || !this.node) return;
                this.rulesNodePopup = h(e), this.rulesNodePopup.parent = this.node.parent, this.rulesNodePopup.position = this.rulesPos.position, this.rulesNodePopup.setSiblingIndex(this.rulesPos.getSiblingIndex());
                let o = this.rulesNodePopup.getComponent(g);
                o && (o.setHoldemRoom(this.holdemRoom), this.rulesNodePopup.getComponent(g).updateGameRule(this.room._gameViewType == C.commonProto.MTT_GAME_MODE.SHORT_DECK), this.rulesNodePopup.getComponent(g).show())
            }))
        }
        hideRulePopup() {
            var t;
            r(this.rulesNodePopup) && this.rulesNodePopup.active && (null == (t = this.rulesNodePopup.getComponent(A)) || t.onBtnClickClose())
        }
        onClickMask() {
            _.AudioMgr.playButtonSound("button_click"), this.hide()
        }
        onClickRules() {
            _.AudioMgr.playButtonSound("button_click"), this.hide(), this.createRulePrefab()
        }
        onClickSettings() {
            _.AudioMgr.playButtonSound("button_click"), cc_mtt.vv.ConsoleLog.log("onClickSettings"), this.hide(), this.holdemRoom.roomSetting()
        }
        onClickRelive() {
            _.AudioMgr.playButtonSound("button_click"), cc_mtt.vv.ConsoleLog.log("onClickRelive", this.room.store.isRebuyAllow, this.room.rebuyLeftTime), this.hide(), this.room.store.isSignUpAllow ? this.room.store.signUpPopUp() : this.room.store.isRebuyAllow && this.room.rebuyLeftTime > 0 ? this.room.store.reJoinPopUp(-2) : this.room.store.reJoinPopUp(-1)
        }
        onClickCancelApply() {
            _.AudioMgr.playButtonSound("button_click"), cc_mtt.vv.ConsoleLog.log("onClickCancelApply"), this.holdemRoom.dialogController.showDialogBox("", "HOLDEM.CANCEL_SIGNUP", !1, [{
                type: 1,
                text: "MESSAGE_DIALOG_BLOCKER.CANCEL"
            }, {
                type: 1,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: () => {
                    this.hide(), this.room.store.Standby()
                }
            }])
        }
        onClickRecharge() {
            _.AudioMgr.playButtonSound("button_click"), cc_mtt.vv.ConsoleLog.log("tryShowMoreCoinBoxHoldem deprecated")
        }
        onClickQuit() {
            if (_.AudioMgr.playButtonSound("button_click"), this.hide(), _.appConfig.getGeneralConfig().multiWindowEnabled) _.focusWindow(1);
            else if (this.room.store.self && (this.room.store.self.hasCards || this.room.store.self.leftCoin > 0) && _.appConfig.getGameConfig().enableMTTQuitConfirmPopup) {
                let t = E("GAME.QUIT_DIALOG").split("|"),
                    e = t[0],
                    o = t[1],
                    i = t[2],
                    n = () => {
                        this.room.store.LeaveGame()
                    };
                this.room.dialogController.showDialogBox(e, o, !0, [{
                    type: 0,
                    text: i,
                    callback: n
                }])
            } else this.room.store.LeaveGame()
        }
        updateReliveButton(t) {
            let e = this.reliveButton;
            e.getComponent(l).interactable = t, t ? (e.children[0].getComponent(d).opacity = 255, e.children[1].getComponent(d).opacity = 255) : (e.children[0].getComponent(d).opacity = 51, e.children[1].getComponent(d).opacity = 51)
        }
        updateCancelJoinButton(t) {
            let e = this.cancelApplyButton;
            e.getComponent(l).interactable = t, t ? (e.children[0].getComponent(d).opacity = 255, e.children[1].getComponent(d).opacity = 255) : (e.children[0].getComponent(d).opacity = 51, e.children[1].getComponent(d).opacity = 51)
        }
        SetActiveMenuButton(t, e) {
            t.getComponent(l).interactable = e, e ? (t.children[0].getComponent(d).opacity = 255, t.children[1].getComponent(d).opacity = 255) : (t.children[0].getComponent(d).opacity = 51, t.children[1].getComponent(d).opacity = 51)
        }
    }).prototype, "mask", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(O.prototype, "blocker", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(O.prototype, "rulesButton", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(O.prototype, "settingsButton", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(O.prototype, "rechargeButton", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(O.prototype, "reliveButton", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(O.prototype, "quitButton", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(O.prototype, "cancelApplyButton", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(O.prototype, "rulesPos", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(O.prototype, "panelPosition", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = O)) || H) || H));
    i._RF.pop()
}