import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as o from "./cv.js";
import * as u from "./JackfruitGameRule.js";
import * as a from "./JackfruitSetting.js";
import * as s from "./JackfruitCardScore.js";
import * as r from "./GameSceneInstance.js";

function main() {
    var l, c, h, b, g, m, d, p, _, f, S, L, B, C, v, M, k, w, y, I;
    i._RF.push({}, "abe13q6V51D2YL5SGa2CmTC", "JackfruitMenu", void 0);
    const {
        ccclass: P,
        property: T
    } = cc._decorator;
    t("JackfruitMenu", (l = T(cc.Prefab), c = T(cc.Node), h = T(cc.Button), b = T(cc.Button), g = T(cc.Button), m = T(cc.Button), d = T(cc.Button), p = T(cc.Button), _ = T(cc.Button), P((S = class extends cc.Component {
        constructor() {
            super(), e(this, "goldview", L, this), e(this, "menubg", B, this), e(this, "standUp_button", C, this), e(this, "ruleDiscription_button", v, this), e(this, "changeCard_button", M, this), e(this, "exitPoker_button", k, this), e(this, "witchServer_button", w, this), e(this, "cardMultiples_button", y, this), e(this, "changeTable_button", I, this), this.menuList = [], this.menuImgList = [], this.game = null
        }
        onLoad() {
            let t = cc.instantiate(this.goldview);
            cc.find("gold_Panel", this.node).addChild(t), o.resMgr.adaptWidget(this.node, !0), this.init()
        }
        setGameScene(t) {
            this.game = t
        }
        start() {
            this.initLanguage()
        }
        init() {
            this.menuList.push(this.witchServer_button), this.menuList.push(this.ruleDiscription_button), this.menuList.push(this.cardMultiples_button), this.menuList.push(this.changeCard_button), this.menuList.push(this.changeTable_button), this.menuList.push(this.standUp_button), this.menuList.push(this.exitPoker_button);
            for (let t = 0; t < 7; t++) this.menuImgList.push(cc.find("menu_img" + t, this.node))
        }
        initLanguage() {
            o.StringTools.setLabelString(this.standUp_button.node, "Label", "GameScene_menu_Panel_menu_img0_aroundLook_button"), o.StringTools.setLabelString(this.ruleDiscription_button.node, "Label", "jackfruit_menu_ruleDiscription_button_label"), o.StringTools.setLabelString(this.changeCard_button.node, "Label", "GameScene_menu_Panel_menu_img7_changeCard_button"), o.StringTools.setLabelString(this.exitPoker_button.node, "Label", "GameScene_menu_Panel_menu_img9_exitPoker_button"), o.StringTools.setLabelString(this.witchServer_button.node, "Label", "GameScene_menu_Panel_menu_img11_settlement_button"), o.StringTools.setLabelString(this.cardMultiples_button.node, "Label", "jackfruit_menu_cardMultiples_button_label"), o.StringTools.setLabelString(this.changeTable_button.node, "Label", "jackfruit_menu_changetable_button_label")
        }
        onClickSelf(t) {
            this.node.active = !1
        }
        enableMenuButton(t, e) {
            this.menuList[t].interactable = e, console.log("index：" + t + "  isSeat::" + e), this.menuImgList[t].active = !0, this.menuList[t].interactable ? (this.menuList[t].node.color = cc.color(255, 255, 255), cc.find("Label", this.menuList[t].node).color = cc.color(255, 255, 255)) : (this.menuList[t].node.color = cc.color(130, 130, 130), cc.find("Label", this.menuList[t].node).color = cc.color(130, 130, 130))
        }
        updateMenu() {
            let t = 0;
            o.config.IS_FULLSCREEN && (t = o.config.FULLSCREEN_OFFSETY);
            let e = -1 != o.JackfruitManager.tRoomData.nSelfSeatID;
            o.appConfig.getLobbyConfig().showSwitchServer ? this.enableMenuButton(0, !0) : this.menuImgList[0].active = !1, this.enableMenuButton(1, !0), this.enableMenuButton(2, !0), this.enableMenuButton(3, !0), this.enableMenuButton(4, !e), this.enableMenuButton(5, e), this.enableMenuButton(6, !0), this.menuImgList[4].active = !e;
            let n = 0;
            for (let t = 0; t < this.menuImgList.length; t++) this.menuImgList[t].active && (this.menuImgList[t].setPosition(this.menuImgList[t].getPosition().x, this.menuImgList[0].y - 130 * n), n++);
            this.menubg.setContentSize(cc.size(this.menubg.getContentSize().width, 140 + 130 * n + t))
        }
        onBtnCardMultiplesButton() {
            o.AudioMgr.playButtonSound("tab.mp3"), this.game.card_score_Panel.getComponent(s).show()
        }
        onBtnstandUpButton() {
            o.AudioMgr.playButtonSound("tab.mp3"), this.node.active = !1, o.jackfruitNet.requestStandUp(r.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        onBtnRuleDiscription() {
            o.AudioMgr.playButtonSound("tab.mp3"), this.game.gamerule_Panel.getComponent(u).show()
        }
        onBtnChangeCard() {
            o.AudioMgr.playButtonSound("tab.mp3"), console.log("onBtnChangeCard"), o.tools.SaveStringByCCFile("changeCard_button", "1"), this.game.setting_Panel.getComponent(a).show(), this.node.active = !1
        }
        onBtnExitPoker() {
            o.AudioMgr.playButtonSound("tab.mp3"), this.node.active = !1, o.roomManager.RequestLeaveRoom(r.getInstanceGameId(null == this ? void 0 : this.node), r.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        onBtnChangeTable() {
            o.AudioMgr.playButtonSound("tab.mp3"), this.node.active = !1, o.jackfruitNet.requestChangeTable()
        }
        onClickSwitchServer(t) {
            var e;
            o.AudioMgr.playButtonSound("tab.mp3");
            let n = null == (e = r.getInstance(null == this ? void 0 : this.node)) || null == (e = e.room) ? void 0 : e.gameScene;
            o.TP.showMsg(o.config.getStringData("UIWitchServer2"), !0, this.onGoReconnect.bind(this), null, !1, !1, "", !1, cc.Label.HorizontalAlign.CENTER, !1, n)
        }
        onGoReconnect() {
            o.netWorkManager.onGoReconnect()
        }
    }, L = n(S.prototype, "goldview", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = n(S.prototype, "menubg", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = n(S.prototype, "standUp_button", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = n(S.prototype, "ruleDiscription_button", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = n(S.prototype, "changeCard_button", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = n(S.prototype, "exitPoker_button", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = n(S.prototype, "witchServer_button", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = n(S.prototype, "cardMultiples_button", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = n(S.prototype, "changeTable_button", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = S)) || f));
    i._RF.pop()
}