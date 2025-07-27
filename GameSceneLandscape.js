import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./GameScene.js";
import * as p from "./GameMainLandscape.js";
import * as h from "./cv.js";
import * as d from "./menu.js";
import * as m from "./GameSceneInstance.js";
import * as g from "./BottomMenuHandler.js";
import * as C from "./ChangeCard.js";
import * as _ from "./AutoRecallBuyin.js";

function main() {
    var b, f, M, S, P, k, G, E, F, w, y, D, v, I;
    a._RF.push({}, "337cfHJvsFJgYqwFz2qU3n9", "GameSceneLandscape", void 0);
    const {
        ccclass: B,
        property: A
    } = o;
    e("default", (b = A(i), f = A(i), M = A(s), S = A(s), P = A(s), k = A(i), B((F = t((E = class extends c {
        constructor(...e) {
            super(...e), n(this, "game_table_background", F, this), n(this, "pokerFlipsCrossSell", w, this), n(this, "changeCard_panel_prefab", y, this), this.changeCard_panel = null, n(this, "menu_Panel_prefab", D, this), this.menu_Panel = null, n(this, "ruleDiscription_panel_prefab", v, this), this.ruleDiscription_panel = null, n(this, "menuButtonImagePos", I, this), this._statusController = null
        }
        onLoad() {
            if (super.onLoad(), this.game_table_background.active = !0, this._statusController = h.StatusView.getCashGameStatusController(), this._statusController && this._statusController.haveAssets()) {
                let e = this.gameMain_panel.getComponent(p);
                if (e && e.bottomMenuHandler) {
                    let t = e.bottomMenuHandler.node.getSiblingIndex();
                    this._statusController.node.setParent(e.bottomMenuHandler.node.parent), this._statusController.node.setSiblingIndex(t), this._statusController.showLatency(), this._statusController.node.setSiblingIndex(h.Enum.ZORDER_TYPE.ZORDER_TOP)
                }
            }
            var e;
            (this.checkAndShowPokerFlipsCrossSell(), h.MessageCenter.register(h.Enum.MessageCenterAction.OnMiniGameStart, this.checkAndShowPokerFlipsCrossSell.bind(this), this), h.MessageCenter.register(h.Enum.MessageCenterAction.OnRoomWindowClosed, this.checkAndShowPokerFlipsCrossSell.bind(this), this), h.MessageCenter.register(h.Enum.MessageCenterAction.OnNotificationStatusChanged, this.updateMenuNotification.bind(this), this), this.menu_Panel = r(this.menu_Panel_prefab), this.node.addChild(this.menu_Panel), this.menu_Panel.getComponent(d).setGameScene(this), this.ruleDiscription_panel = r(this.ruleDiscription_panel_prefab), this.node.addChild(this.ruleDiscription_panel), this.ruleDiscription_panel.setSiblingIndex(121), this.updateMenuNotification(), m.getInstanceGameId(this.node) == h.Enum.GameId.Allin) || (null == (e = this.gameMain_panel.getComponent(p)) || e.setGameScene(this), this.autorecallbuyin_panel.getComponent(_).setGameMain(this.gameMain_panel.getComponent(p)));
            this.ruleDiscription_panel.active = !1, this.menu_Panel.active = !1
        }
        start() {
            super.start(), m.getInstanceGameId(this.node) !== h.Enum.GameId.Allin && (this.changeCard_panel = r(this.changeCard_panel_prefab), this.changeCard_panel.getComponent(C).setGameMain(this.gameMain_panel.getComponent(p)), this.node.addChild(this.changeCard_panel), this.changeCard_panel.setSiblingIndex(h.Enum.ZORDER_TYPE.ZORDER_7)), this.changeCard_panel.active = !1
        }
        onBtnExitPoker() {
            this.menu_Panel.getComponent(d).onBtnExitPoker()
        }
        updateMenu() {
            this.menu_Panel.getComponent(d).updateMenu(this)
        }
        onDestroy() {
            super.onDestroy(), h.StatusView.destroyMttGamesStatusController(this._statusController), h.MessageCenter.unregister(h.Enum.MessageCenterAction.OnMiniGameStart, this), h.MessageCenter.unregister(h.Enum.MessageCenterAction.OnRoomWindowClosed, this), h.MessageCenter.unregister(h.Enum.MessageCenterAction.OnNotificationStatusChanged, this)
        }
        AdaptiveExpand() {}
        adaptWidgetOnLoad() {
            h.resMgr.adaptWidget(this.node, !0, !1)
        }
        betaFeedback() {
            var e;
            h.popUp.showMsg({
                txt: "感谢您测试桌面应用程序的 Beta 版。如果您发现 Beta 版的错误，请在此处报告desktopfeedback@a5labs.co",
                isTwoBtn: !0,
                cashGameScene: null == (e = this.gameSceneInstance) || null == (e = e.room) ? void 0 : e.gameScene,
                sureCallback: () => {
                    l.openURL("mailto:desktopfeedback@a5labs.co")
                }
            })
        }
        setLabelStringForDichiButtons(e) {}
        setDealButtonFrame(e) {}
        setForceShowCardButtonFrame(e) {}
        setGuessHandCardUi() {}
        updateGuessTips(e) {}
        onFullscreenEmojiLoaded(e) {
            super.onFullscreenEmojiLoaded(e);
            let t = this.gameMain_panel.getComponent(p);
            t && t.bottomMenuHandler && (this.emoji_Panel.removeFromParent(), t.bottomMenuHandler.panels[g.FullscreenEmoji].addChild(this.emoji_Panel))
        }
        checkAndShowPokerFlipsCrossSell(e = null) {
            u(this.pokerFlipsCrossSell, !0) && (this.pokerFlipsCrossSell.active = h.appConfig.isLandscapeLayout && (!h.roomManager.isJoinedMiniGame() || h.roomManager.checkIsMiniGame(null == e ? void 0 : e.getCurrentGameID())))
        }
        updateMenuNotification() {
            this.menuButtonImagePos && (this.menuButtonImagePos.active = this.menu_Panel.getComponent(d).isShowPos())
        }
    }).prototype, "game_table_background", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(E.prototype, "pokerFlipsCrossSell", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(E.prototype, "changeCard_panel_prefab", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(E.prototype, "menu_Panel_prefab", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(E.prototype, "ruleDiscription_panel_prefab", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(E.prototype, "menuButtonImagePos", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = E)) || G));
    a._RF.pop()
}