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
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as S from "./ThemeSystem.js";
import * as C from "./SlideView.js";
import * as I from "./CrashTracing.js";
import * as f from "./CrashTracing.js";
import * as M from "./cv.js";
import * as L from "./AutoRecallBuyin.js";
import * as v from "./Buyin.js";
import * as D from "./GameMain.js";
import * as B from "./RuleDiscription.js";

function main() {
    var R, y, w, G, P, T, E, A, k, z, N, x, U, W, H, O, F, q, V, Z, j, $, K, Y, J, Q, X, ee, te, ne, ae, ie, oe, se, ue, le, re, me;
    a._RF.push({}, "b4bf5xdNmFLnIlHKqfEUmRS", "menu", void 0);
    const {
        ccclass: ge,
        property: he
    } = u;
    e("menu", (R = he(i), y = he(o), w = he(i), G = he(i), P = he(s), T = he(s), E = he(s), A = he(s), k = he(s), z = he(s), N = he(s), x = he(s), U = he(s), W = he(s), H = he(s), O = he(s), F = he(S), q = he(S), ge((j = t((Z = class extends l {
        constructor() {
            super(), n(this, "background", j, this), n(this, "goldview", $, this), n(this, "menubg", K, this), n(this, "startItem", Y, this), n(this, "standUp_button", J, this), n(this, "houseOwer_button", Q, this), n(this, "ruleDiscription_button", X, this), n(this, "buyin_button", ee, this), n(this, "recallBuyIn_button", te, this), n(this, "changeCard_button", ne, this), n(this, "changeTable_button", ae, this), n(this, "leaveSeat_button", ie, this), n(this, "exitPoker_button", oe, this), n(this, "settlement_button", se, this), n(this, "witchServer_button", ue, this), n(this, "leaveRoom_button", le, this), n(this, "interactableColor", re, this), n(this, "disableColor", me, this), this.menuList = [], this.menuImgList = [], this.game = void 0, this.gameManager = void 0, this.gamenet = void 0
        }
        onLoad() {
            let e = r(this.goldview);
            m("gold_Panel", this.node).addChild(e), this.adaptWidgetOnload(), this.init(), M.MessageCenter.register(M.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node), M.appConfig.isWebApp && M.MessageCenter.register(M.Enum.MessageCenterAction.ExitRoomGame, this.onBtnExitPoker.bind(this), this.node)
        }
        onDestroy() {
            M.MessageCenter.unregister(M.config.CHANGE_LANGUAGE, this.node), M.appConfig.isWebApp && M.MessageCenter.unregister(M.Enum.MessageCenterAction.ExitRoomGame, this.node)
        }
        onDisable() {
            this.gameManager.updateHeader()
        }
        onEnable() {
            var e, t;
            null != (e = this.game) && null != (e = e.gameSceneInstance) && e.room && (this.gamenet = (null == (t = this.game) || null == (t = t.gameSceneInstance) ? void 0 : t.room.getCurrentGameID()) == M.Enum.GameId.Allin ? M.aofNet : M.gameNet)
        }
        adaptWidgetOnload() {
            M.resMgr.adaptWidget(this.node, !0)
        }
        start() {
            this.initLanguage();
            let e = M.tools.GetStringByCCFile("changeCard_button");
            this.changeCard_button.node.getChildByName("image_pos").active = null == e || "" == e
        }
        init() {
            this.menuList.push(this.witchServer_button), this.menuList.push(this.standUp_button), this.menuList.push(this.houseOwer_button), this.menuList.push(this.ruleDiscription_button), this.menuList.push(this.buyin_button), this.menuList.push(this.recallBuyIn_button), this.menuList.push(this.leaveSeat_button), this.menuList.push(this.changeCard_button), this.menuList.push(this.changeTable_button), this.menuList.push(this.exitPoker_button), this.menuList.push(this.settlement_button), !M.appConfig.isLandscapeLayout && this.leaveRoom_button && this.menuList.push(this.leaveRoom_button);
            for (let e = 0; e < this.menuList.length; e++) this.menuImgList.push(m("menu_img" + e, this.node));
            this.gamenet = M.gameNet
        }
        initLanguage(e = 2) {
            M.StringTools.setLabelString(this.standUp_button.node, "Label", "GameScene_menu_Panel_menu_img0_aroundLook_button", e), M.StringTools.setLabelString(this.houseOwer_button.node, "Label", "GameScene_menu_Panel_menu_img1_houseOwer_button", e), M.StringTools.setLabelString(this.ruleDiscription_button.node, "Label", "GameScene_menu_Panel_menu_img2_ruleDiscription_button", e), M.StringTools.setLabelString(this.buyin_button.node, "Label", "GameScene_menu_Panel_menu_img3_buyin_button", e), M.StringTools.setLabelString(this.recallBuyIn_button.node, "Label", "GameScene_menu_Panel_menu_img4_recallBuyIn_button", e), M.StringTools.setLabelString(this.leaveSeat_button.node, "Label", "GameScene_menu_Panel_menu_img6_leaveSeat_button", e), M.StringTools.setLabelString(this.changeCard_button.node, "Label", "GameScene_menu_Panel_menu_img7_changeCard_button", e), M.StringTools.setLabelString(this.changeTable_button.node, "Label", "GameScene_menu_Panel_menu_img8_changeTable_button", e), M.StringTools.setLabelString(this.exitPoker_button.node, "Label", "GameScene_menu_Panel_menu_img9_exitPoker_button", e), M.StringTools.setLabelString(this.settlement_button.node, "Label", "GameScene_menu_Panel_menu_img10_settlement_button", e), M.StringTools.setLabelString(this.witchServer_button.node, "Label", "GameScene_menu_Panel_menu_img11_settlement_button", e), g(this.leaveRoom_button, !0) && M.StringTools.setLabelString(this.leaveRoom_button.node, "Label", "GameScene_menu_Panel_menu_img12_leaveRoom_button", e)
        }
        setGameScene(e) {
            this.game = e
        }
        setGameManager(e) {
            this.gameManager = e
        }
        onClickSelf(e) {
            this.node.active = !1
        }
        enableMenuButton(e, t, n = !0) {
            this.menuList[e].interactable = t, console.log("indexï¼š" + e + "  isSeat::" + t), this.menuImgList[e].active = n, this.menuList[e].interactable ? (this.menuList[e].node.getComponent(h).color = this.getInteracableColor(), m("Label", this.menuList[e].node).getComponent(h).color = this.getInteracableColor()) : (this.menuList[e].node.getComponent(h).color = this.getDisableColor(), m("Label", this.menuList[e].node).getComponent(h).color = this.getDisableColor())
        }
        hideBtns() {}
        aofUpdateMenu() {
            var e;
            for (let e = 0; e < 10; e++) this.menuImgList[e].active = !1;
            let t = -1 != this.game.gameDataInstance.tRoomData.i32SelfSeat;
            M.appConfig.getLobbyConfig().showSwitchServer ? this.enableMenuButton(0, !0) : this.menuImgList[0].active = !1, this.enableMenuButton(3, !0), this.enableMenuButton(7, !0), t ? (this.enableMenuButton(1, !this.game.gameDataInstance.tRoomData.m_isAllInMode), this.enableMenuButton(8, !this.game.gameDataInstance.tRoomData.m_isAllInMode)) : (this.enableMenuButton(1, !1), this.enableMenuButton(8, !0)), this.enableMenuButton(7, M.appConfig.getGameConfig().settingMenuEnabled);
            let n = 0;
            for (let e = 0; e < this.menuImgList.length; e++) this.menuImgList[e].active && (this.setMenuItemPosition(n, e, this.menuImgList[e].getPosition().x, this.startItem.position.y - n * this.getMenuItemGap()), n++);
            null == (e = this.menubg.getComponent(c)) || e.setContentSize(b(this.menubg.getComponent(c).contentSize.width, this.getMenuBgTopPadding() + this.getMenuItemGap() * n))
        }
        setMenuItemPosition(e, t, n, a) {
            this.menuImgList[t].setPosition(n, a)
        }
        getMenuItemGap() {
            return 138
        }
        getMenuBgTopPadding() {
            let e = 0;
            return e = M.config.FULLSCREEN_OFFSETY, 74 + e
        }
        getInteracableColor() {
            return null == this.interactableColor ? d(255, 255, 255) : this.interactableColor.getThemeColor()
        }
        getDisableColor() {
            return null == this.disableColor ? d(130, 130, 130) : this.disableColor.getThemeColor()
        }
        updateMenu(e) {
            var t;
            this.game = e;
            let n = M.dataHandler.getUserData().u32Uid == this.game.gameDataInstance.tRoomData.u32OwnerId,
                a = -1 != this.game.gameDataInstance.tRoomData.i32SelfSeat;
            console.log("this.game.gameDataInstance.tRoomData.i32SelfSeat::" + this.game.gameDataInstance.tRoomData.i32SelfSeat), this.enableMenuButton(0, !0), n ? (this.menuImgList[2].active = !0, this.enableMenuButton(1, a), this.enableMenuButton(2, !0), this.enableMenuButton(4, a), this.enableMenuButton(5, a), this.enableMenuButton(6, a), this.enableMenuButton(10, this.game.gameDataInstance.tRoomData.isBuyin)) : (this.menuImgList[2].active = !1, this.enableMenuButton(1, a), this.enableMenuButton(4, a), this.enableMenuButton(5, a), this.enableMenuButton(6, a), this.enableMenuButton(10, this.game.gameDataInstance.tRoomData.isBuyin)), this.enableMenuButton(3, !0, M.appConfig.getGameConfig().rulesMenuItemEnabled), a ? (this.enableMenuButton(1, !this.game.gameDataInstance.tRoomData.m_isAllInMode), this.enableMenuButton(9, !this.game.gameDataInstance.tRoomData.m_isAllInMode, !M.appConfig.isWebApp)) : (this.enableMenuButton(1, !1), this.enableMenuButton(9, !0, !M.appConfig.isWebApp));
            let i = this.game.gameDataInstance.tRoomData.pkRoomParam.is_opened_drawback,
                o = this.game.gameDataInstance.tRoomData.pkRoomParam.auto_withdraw;
            a && i || a && o ? this.enableMenuButton(5, !0) : this.enableMenuButton(5, !1);
            this.game.gameDataInstance.tRoomData.pkRoomParam.rule_ante_amount;
            let s = this.game.gameDataInstance.tRoomData.pkRoomParam.game_mode == M.Enum.CreateGameMode.CreateGame_Mode_Short;
            if ((1 == this.game.gameDataInstance.tRoomData.pkRoomParam.is_mirco || this.game.gameDataInstance.tRoomData.pkRoomParam.IscalcIncomePerhand || s) && (this.menuImgList[10].active = !1), this.game.gameSceneInstance.room.getCurrentGameID() == M.Enum.GameId.Bet && (this.menuImgList[10].active = !1), this.enableMenuButton(9, !0, !M.appConfig.isWebApp), M.dataHandler.getUserData().isLoggedIn() && !M.dataHandler.getUserData().isTouristUser && this.game.gameDataInstance.tRoomData.isZoom()) {
                this.enableMenuButton(4, !0);
                for (let e = 0; e < 11; e++)
                    if (0 == e || 3 == e || 4 == e || 5 == e || 7 == e || 9 == e) {
                        if (M.appConfig.isWebApp && 9 == e) continue;
                        this.menuImgList[e].active = !0
                    } else this.menuImgList[e].active = !1;
                M.appConfig.getGameConfig().replaceZoomTextToPaceText && (this.menuImgList[3].active = !0)
            }
            this.enableMenuButton(8, !a), this.game.gameDataInstance.tRoomData.u32GameID == M.Enum.GameId.StarSeat || this.game.gameDataInstance.tRoomData.isZoom() ? this.menuImgList[8].active = !1 : this.menuImgList[8].active = !0, 0 == M.appConfig.getLobbyConfig().showSwitchServer && (this.menuImgList[0].active = !1), this.menuImgList[5].active = M.appConfig.getGameConfig().cashierEnabled, this.recallBuyIn_button.node.parent.active = M.appConfig.getGameConfig().cashierEnabled, this.enableMenuButton(7, M.appConfig.getGameConfig().settingMenuEnabled);
            let u = 0;
            for (let e = 0; e < this.menuImgList.length; e++) this.menuImgList[e].active && (this.setMenuItemPosition(u, e, this.menuImgList[e].getPosition().x, this.startItem.position.y - u * this.getMenuItemGap()), u++);
            null == (t = this.menubg.getComponent(c)) || t.setContentSize(b(this.menubg.getComponent(c).contentSize.width, this.getMenuBgTopPadding() + this.getMenuItemGap() * u))
        }
        onBtnstandUpButton() {
            M.AudioMgr.playButtonSound("tab.mp3"), this.node.active = !1, this.gamenet.RequestStandup(this.game.gameDataInstance.tRoomData.u32RoomId)
        }
        onBtnHouseOwer() {
            M.AudioMgr.playButtonSound("tab.mp3"), this.node.active = !1, this.gamenet.RequestAddRoomTimeCount(this.game.gameDataInstance.tRoomData.u32RoomId)
        }
        onBtnRuleDiscription() {
            M.AudioMgr.playButtonSound("tab.mp3"), this.node.active = !1, this.showRuleDiscription()
        }
        showRuleDiscription() {
            this.gameManager.ruleDiscription_panel.getComponent(B).show(!0, this.game.gameDataInstance)
        }
        onBtnBuyin(e, t = !0) {
            if (t && M.AudioMgr.playButtonSound("tab.mp3"), M.dataHandler.getUserData().showWebAppTouristPopup()) return;
            if (M.dataHandler.getUserData().showTouristLimited("GameSeat_tourist_msg")) return;
            if (M.dataHandler.getUserData().showNDRPVerificationReviewPopup()) return;
            0 == e ? this.game.gameDataInstance.tRoomData.isZoom() && (this.node.active = !1, this.game.gameMain_panel.getComponent(D).quickSit()) : (this.node.active = !1, M.worldNet.requestGetUserData(), this.game.buyin_panel.active = !0, this.game.buyin_panel.getComponent(v).UpdateBuyinInfo(this.game.gameDataInstance))
        }
        onBtnrecallBuyIn() {
            M.AudioMgr.playButtonSound("tab.mp3"), this.node.active = !1, this.game.autorecallbuyin_panel.active = !0, this.game.autorecallbuyin_panel.getComponent(L).updateHoldTimes(), this.game.autorecallbuyin_panel.getComponent(L).updateTotal(), !this.game.gameDataInstance.tRoomData.pkRoomParam.is_opened_drawback && this.game.gameDataInstance.tRoomData.pkRoomParam.auto_withdraw || this.game.autorecallbuyin_panel.getComponent(L).calculate()
        }
        onBtnLeaveSeat() {
            M.AudioMgr.playButtonSound("tab.mp3"), console.log("onBtnLeaveSeat"), this.gamenet.RequestStayPosition(this.game.gameDataInstance.tRoomData.u32RoomId), M.MessageCenter.send("click_btn_leave_seat", this.game.gameDataInstance)
        }
        onBtnChangeCard() {
            M.AudioMgr.playButtonSound("tab.mp3"), console.log("onBtnChangeCard"), this.isShowPos() && (M.tools.SaveStringByCCFile("changeCard_button", "1"), M.MessageCenter.send(M.Enum.MessageCenterAction.OnNotificationStatusChanged)), this.changeCard_button.node.getChildByName("image_pos").active = !1, this.updateInGameMenu(), this.node.active = !1
        }
        updateInGameMenu() {
            this.gameManager.setMenuNewIcon(!1), this.gameManager.changeCard_panel.active = !0, this.gameManager.changeCard_panel.getComponent(C) && this.gameManager.changeCard_panel.getComponent(C).show(!1)
        }
        onBtnChangeTable() {
            var e;
            M.AudioMgr.playButtonSound("tab.mp3");
            const t = null == (e = this.game.gameSceneInstance) ? void 0 : e.room;
            M.gameNet.RequestChangeTable(null == t ? void 0 : t.getCurrentGameID(), null == t ? void 0 : t.getCurrentRoomID()), this.node.active = !1
        }
        onBtnExitPoker() {
            if (M.appConfig.getGeneralConfig().multiWindowEnabled) return M.miniGamePopupManager.reloadPopup(), void M.focusWindow(1);
            var e;
            M.appConfig.isLandscapeLayout ? this.onBtnLeaveRoom() : (M.AudioMgr.playButtonSound("tab.mp3"), M.MessageCenter.send("click_btn_exit_room", null == (e = this.game) ? void 0 : e.gameDataInstance), M.action.switchScene(M.Enum.SCENE.HALL_SCENE))
        }
        onBtnSettlement() {
            var e;
            M.AudioMgr.playButtonSound("tab.mp3"), console.log("onBtnSettlement");
            let t = null == (e = this.game) || null == (e = e.gameSceneInstance) || null == (e = e.room) ? void 0 : e.gameScene;
            M.TP.showMsg(M.config.getStringData("TipsPanel_Image_duanxin_text_duanxin_3"), !0, this.sureToSettlement.bind(this), this.cancleToSettlement.bind(this), !1, !1, "", !1, p.HorizontalAlign.CENTER, !1, t);
            let n = M.TP.getMessageImage(),
                a = M.TP.getMessageImageText(),
                i = M.TP.getMessageText();
            n.node.active = !0, a.string = "", a.node.active = !0, M.resMgr.setSpriteFrame(n.node, "zh_CN/hall/ui/common_prompt"), i.node.setPosition(_(i.node.position.x, 255, i.node.position.z))
        }
        sureToSettlement() {
            var e, t;
            const n = null == (e = this.game) ? void 0 : e.gameSceneInstance,
                a = null == n ? void 0 : n.room;
            null == a || a.checkOutCashGame(), this.enableMenuButton(10, null == n || null == (t = n.gameData) ? void 0 : t.tRoomData.isBuyin), this.updateMenu(this.game)
        }
        cancleToSettlement() {}
        onBtnLeaveRoom() {
            var e, t;
            if (M.appConfig.getGeneralConfig().multiWindowEnabled) return void M.focusWindow(1);
            if (!M.appConfig.isLandscapeLayout && !this.node.activeInHierarchy) return void(null == (t = I.getInstance()) || t.trace(f.CashGameIssues, "LeaveRoomWithoutUserAction", {
                stackTrace: I.getTrace(0, 20)
            }, !1, !0));
            M.AudioMgr.playButtonSound("tab.mp3");
            const n = null == (e = this.game) || null == (e = e.gameSceneInstance) ? void 0 : e.room;
            var a, i;
            n ? (n.isNeedCheckOutCashGame() && this.sureToSettlement(), this.node.active = !1, n.RequestLeaveRoom(), M.MessageCenter.send("click_btn_exit_room", null == (a = this.game) ? void 0 : a.gameDataInstance)) : (null == (i = I.getInstance()) || i.trace(f.CashGameIssues, "CashGameExitButNoRoomValid", {
                roomList: M.roomManager.rooms.map((e => `gameId: ${e.getCurrentGameID()} - roomId: ${e.getCurrentRoomID()} - joined: ${e.joinedGame}`)),
                socketReadyState: M.netWork.wSocket.readyState,
                heartBeat: M.netWorkManager.getHeartBeatList().toString(),
                timeOut: M.netWorkManager.getTimeOutList().toString()
            }, !1, !1), M.roomManager.hasOpeningRoom() || M.action.switchScene(M.Enum.SCENE.HALL_SCENE))
        }
        isShowPos() {
            let e = M.tools.GetStringByCCFile("changeCard_button");
            return null == e || "" == e
        }
        onClickSwitchServer(e) {
            var t;
            M.AudioMgr.playButtonSound("tab.mp3");
            let n = null == (t = this.game) || null == (t = t.gameSceneInstance) || null == (t = t.room) ? void 0 : t.gameScene;
            M.TP.showMsg(M.config.getStringData("UIWitchServer2"), !0, this.onGoReconnect.bind(this), null, !1, !1, "", !1, p.HorizontalAlign.CENTER, !1, n)
        }
        onGoReconnect() {
            M.netWorkManager.onGoReconnect()
        }
    }).prototype, "background", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = t(Z.prototype, "goldview", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(Z.prototype, "menubg", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(Z.prototype, "startItem", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(Z.prototype, "standUp_button", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(Z.prototype, "houseOwer_button", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(Z.prototype, "ruleDiscription_button", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t(Z.prototype, "buyin_button", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = t(Z.prototype, "recallBuyIn_button", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = t(Z.prototype, "changeCard_button", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = t(Z.prototype, "changeTable_button", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = t(Z.prototype, "leaveSeat_button", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = t(Z.prototype, "exitPoker_button", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = t(Z.prototype, "settlement_button", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = t(Z.prototype, "witchServer_button", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = t(Z.prototype, "leaveRoom_button", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = t(Z.prototype, "interactableColor", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = t(Z.prototype, "disableColor", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = Z)) || V));
    a._RF.pop()
}