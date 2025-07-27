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
import * as f from "./cv.js";
import * as S from "./GameMain.js";
import * as y from "./FaceView.js";
import * as C from "./SliderVerify.js";
import * as T from "./FaceBarrage.js";
import * as I from "./GameSceneInstance.js";
import * as D from "./EmojiView.js";
import * as w from "./CrashTracing.js";
import * as P from "./CrashTracing.js";
import * as E from "./EmojiLoader.js";
import * as M from "./AutoRecallBuyin.js";

function main() {
    var G, R, B, v, F, k, j, L, z, N, x, O, H, A, U, V, J, Z, W, q, Y, $, K, Q, X, ee, te, ne, ae, ie, oe, re, se, le, ue, ce, ge, me, he, de, _e, pe, be, fe, Se, ye, Ce, Te, Ie, De, Pe, we, Ee, Me, Ge, Re;
    a._RF.push({}, "3d01aEL6rpNh7L39w5soPTj", "GameScene", void 0);
    const {
        ccclass: Be,
        property: ve
    } = s;
    e("GameScene", (G = ve(i), R = ve(i), B = ve(o), v = ve(o), F = ve(i), k = ve(i), j = ve(i), L = ve(i), z = ve(i), N = ve(o), x = ve(o), O = ve(o), H = ve(i), A = ve(o), U = ve(o), V = ve(o), J = ve(o), Z = ve(o), W = ve(o), q = ve(o), Y = ve(o), $ = ve(r), K = ve(r), Q = ve(o), X = ve(i), ee = I(), te = I("GameDataInstance"), Be((ie = t((ae = class extends l {
        constructor() {
            super(), n(this, "jackPotPanel", ie, this), n(this, "gameMain_panel", oe, this), n(this, "face_Panel_prefab", re, this), n(this, "face_barrage_prefab", se, this), this.face_Panel = null, n(this, "danmu_Panel", le, this), this.emoji_Panel = null, this.emoji_fullscreen = null, n(this, "gameIcon_img", ue, this), n(this, "gameIcon_img_star", ce, this), n(this, "game_bg", ge, this), n(this, "publicCard_panel", me, this), n(this, "currentTime_prefab", he, this), n(this, "buyinList_prefab", de, this), this.currentTime_panel = null, this.dairu_panel = null, n(this, "jackPot_prefab", _e, this), this.jackPot_Panel = null, n(this, "allreview_panel", pe, this), n(this, "buyin_prefab", be, this), this.buyin_panel = null, n(this, "sliderVerify_prefab", fe, this), this.sliderVerify_panel = null, n(this, "insuranceEntrance_prefab", Se, this), this.insurance_panel = null, n(this, "insuranceHitOutsTips_prefab", ye, this), this.insuranceHitOutsTips = null, n(this, "autorecallbuyin_prefab", Ce, this), this.autorecallbuyin_panel = null, n(this, "card", Te, this), n(this, "ChipsMoveprefab", Ie, this), n(this, "starInfo", De, this), n(this, "buttonFace", Pe, this), n(this, "buttonEmoji", we, this), n(this, "guess_hand_card_prefab", Ee, this), this.guess_hand_card = null, n(this, "tableBarContainer", Me, this), this.gameSeatIsTurning = !1, this.roomHasEnd = !1, this.manager = void 0, this.multipleGameIndex = -1, n(this, "gameSceneInstance", Ge, this), n(this, "gameDataInstance", Re, this)
        }
        onLoad() {
            var e, t, n;
            f.config.setCurrentScene(f.Enum.SCENE.GAME_SCENE), f.config.adaptScreen(this.node), null == (e = this.gameDataInstance) || null == (e = e.tRoomData) || e.resetVoice(), this.createEmojiFullscreenNode(), this.guess_hand_card = u(this.guess_hand_card_prefab), this.node.addChild(this.guess_hand_card), this.guess_hand_card.active = !1, this.isGameStarSeat() ? (this.face_Panel = u(this.face_barrage_prefab), this.face_Panel.addChild(this.face_Panel), this.face_Panel.setSiblingIndex(this.guess_hand_card.getSiblingIndex() + 1), this.face_Panel.name = "facepanel", this.face_Panel.getComponent(T).setParentNode(this.danmu_Panel), this.face_Panel.getComponent(T).setGameScene(this), this.face_Panel.getComponent(T).hideUi()) : (this.face_Panel = u(this.face_Panel_prefab), this.node.addChild(this.face_Panel), this.face_Panel.setSiblingIndex(this.guess_hand_card.getSiblingIndex() + 1), this.face_Panel.name = "facepanel", this.face_Panel.getComponent(y).setParentNode(this.danmu_Panel), this.face_Panel.getComponent(y).setGameScene(this), this.face_Panel.getComponent(y).hideUi()), E.instance.initialize(), this.gameMain_panel.getComponent(S).setFullscreenEmojiBtnEnabled(!1), f.appConfig.getGameConfig().fullscreenEmojiEnabled && f.resMgr.loadPrefabFromBundle("prefabs/EmojiView", this.onFullscreenEmojiLoaded.bind(this), (e => {
                var t;
                null == (t = P.getInstance()) || t.trace(w.CashGameIssues, "FullScreenEmojiError", {
                    name: "loadPrefabFromBundle",
                    issue: `load bundle error: ${e.toString()}`,
                    rooms: f.roomManager.rooms.map((e => `GameId: ${e.getCurrentGameID()} - RoomId: ${e.getCurrentRoomID()} - IsJoined: ${e.joinedGame}`)).join(),
                    roomLength: f.roomManager.rooms.length
                }, !1, !1)
            })), this.buyin_panel = u(this.buyin_prefab), this.node.addChild(this.buyin_panel), this.autorecallbuyin_panel = u(this.autorecallbuyin_prefab), this.node.addChild(this.autorecallbuyin_panel), f.appConfig.isLandscapeLayout || (this.sliderVerify_panel = C.initSingleInst(this.sliderVerify_prefab, this.node, f.Enum.ZORDER_TYPE.ZORDER_TOP)), this.insurance_panel = u(this.insuranceEntrance_prefab), this.node.addChild(this.insurance_panel), this.insurance_panel.setSiblingIndex(this.guess_hand_card.getSiblingIndex() + 1), this.insuranceHitOutsTips = u(this.insuranceHitOutsTips_prefab), this.node.addChild(this.insuranceHitOutsTips), this.insuranceHitOutsTips.setSiblingIndex(this.insurance_panel.getSiblingIndex()), (null == (t = this.gameSceneInstance) || null == (t = t.room) ? void 0 : t.getCurrentGameID()) == f.Enum.GameId.Allin || (this.gameMain_panel.getComponent(S).setGameScene(this), this.autorecallbuyin_panel.getComponent(M).setGameMain(this.gameMain_panel.getComponent("GameMain"))), c(this.allreview_panel) && (this.allreview_panel.active = !1), this.jackPot_Panel = u(this.jackPot_prefab), this.node.addChild(this.jackPot_Panel), this.currentTime_panel = f.action.addChildToScene(this, this.currentTime_prefab, [], f.Enum.ZORDER_TYPE.ZORDER_6, !0, null, null == (n = this.gameSceneInstance) ? void 0 : n.gameNode), this.dairu_panel = u(this.buyinList_prefab), this.node.addChild(this.dairu_panel), this.gameIcon_img_star.active = !1, this.gameIcon_img.getComponent(g).sizeMode = g.SizeMode.RAW, this.buyin_panel.active = !1, this.autorecallbuyin_panel.active = !1, this.currentTime_panel.active = !1, this.jackPot_Panel.active = !1, this.dairu_panel.active = !1, this.jackPotPanel.active = !1, this.game_bg.active = !0, f.MessageCenter.register("on_NoticeBuyin", this.onNoticeBuyin.bind(this), this.node), this.onNoticeBuyin(null), this.adaptWidgetOnLoad(), this.AdaptiveExpand(), this.buttonFace.node.on("click", (e => {
                this.onbtnFaceClick(e)
            }), this), c(this.buttonEmoji) && this.buttonEmoji.node.on("click", (e => {
                this.onbtnFullscreenEmojiClick(e)
            }), this)
        }
        adaptWidgetOnLoad() {
            f.resMgr.adaptWidget(this.node, !0)
        }
        start() {
            0 == f.GameDataManager.bIsAuthMicphone && f.appConfig.getGameConfig().audioChatEnabled && (f.native.AuthMicphone(), f.GameDataManager.bIsAuthMicphone = !0), this.initLanguage()
        }
        onDestroy() {
            var e;
            f.gameNet.stopVoice(this.gameDataInstance), this.unscheduleAllCallbacks(), f.MessageCenter.unregister("on_NoticeBuyin", this.node), f.MessageCenter.unregister("roleInfoSet_setAvatar", this.node), null == (e = this.gameDataInstance) || e.tRoomData.resetVoice()
        }
        setLabelStringForDichiButtons(e) {
            f.StringTools.setLabelString(e, "dichiContainer/dichi_button0/dichi_wordText0", "GameScene_gameMain_panel_controlButton_panel_dichi_button0_dichi_wordText0"), f.StringTools.setLabelString(e, "dichiContainer/dichi_button1/dichi_wordText1", "GameScene_gameMain_panel_controlButton_panel_dichi_button1_dichi_wordText1"), f.StringTools.setLabelString(e, "dichiContainer/dichi_button2/dichi_wordText2", "GameScene_gameMain_panel_controlButton_panel_dichi_button2_dichi_wordText2"), f.StringTools.setLabelString(e, "dichiContainer/dichi_button3/dichi_wordText3", "GameScene_gameMain_panel_controlButton_panel_dichi_button3_dichi_wordText3"), f.StringTools.setLabelString(e, "dichiContainer/dichi_button4/dichi_wordText4", "GameScene_gameMain_panel_controlButton_panel_dichi_button4_dichi_wordText4")
        }
        setDealButtonFrame(e) {
            f.resMgr.setButtonFrame(e.getChildByName("deal_button"), f.config.getLanguagePath("game/dzpoker/ui/gameMain/game_Button_big_14/spriteFrame"), f.config.getLanguagePath("game/dzpoker/ui/gameMain/game_Button_big_141/spriteFrame"), f.config.getLanguagePath("game/dzpoker/ui/gameMain/game_Button_big_14/spriteFrame"), f.config.getLanguagePath("game/dzpoker/ui/gameMain/game_Button_big_14/spriteFrame"))
        }
        setForceShowCardButtonFrame(e) {
            f.resMgr.setButtonFrame(e.getChildByName("forceShowCard_button"), f.config.getLanguagePath("game/dzpoker/ui/gameMain/game_force_showCardOn/spriteFrame"), f.config.getLanguagePath("game/dzpoker/ui/gameMain/game_force_showCardDown/spriteFrame"), f.config.getLanguagePath("game/dzpoker/ui/gameMain/game_force_showCardOn/spriteFrame"), f.config.getLanguagePath("game/dzpoker/ui/gameMain/game_force_showCardOn/spriteFrame"))
        }
        setGuessHandCardUi() {
            let e = this.guess_hand_card.getChildByName("guess_panel"),
                t = this.guess_hand_card.getChildByName("continue_panel");
            f.StringTools.setLabelString(e, "guess_button_1/title_label", "GameScene_gameMain_panel_guess_hand_card_guess_panel_guess_button_title_label"), f.StringTools.setLabelString(e, "guess_button_2/title_label", "GameScene_gameMain_panel_guess_hand_card_guess_panel_guess_button_title_label"), f.StringTools.setLabelString(e, "close_button/label", "GameScene_gameMain_panel_guess_hand_card_guess_panel_guess_close_button_label"), f.StringTools.setLabelString(t, "continue_button/label", "GameScene_gameMain_panel_guess_hand_card_continue_panel_continue_button_Label")
        }
        updateGuessTips(e) {
            let t = e.getChildByName("guess_hand_card_button").getChildByName("guess_tips"),
                n = t.getChildByName("guess_tips_label");
            n.getComponent(m).string = f.StringTools.formatC(f.config.getStringData("UIGuesstips"));
            let a = f.resMgr.getLabelStringSize(n.getComponent(m)).width;
            t.getComponent(h).setContentSize(d(a + 45, t.getComponent(h).height))
        }
        onFullscreenEmojiLoaded(e) {
            this.emoji_Panel = u(e), this.node.addChild(this.emoji_Panel, f.Enum.ZORDER_TYPE.ZORDER_7), this.emoji_Panel.name = "emojipanel", this.emoji_Panel.getComponent(D).setGame(this), this.emoji_Panel.getComponent(D).hideUi();
            let t = this.gameMain_panel.getComponent(S);
            c(t) && (t.setGameScene(this), t.setFullscreenEmojiBtnEnabled(!0), t.setDynamicConfig())
        }
        initLanguage() {
            let e = _("gameMain_panel", this.node),
                t = e.getChildByName("actionButton_panel");
            this.setLabelStringForDichiButtons(t), this.setDealButtonFrame(e), this.setForceShowCardButtonFrame(e), this.setGuessHandCardUi(), this.updateGuessTips(e)
        }
        onNoticeBuyin(e) {
            var t, n, a, i, o, r;
            if (!this.gameDataInstance.tRoomData.hasRecvBuyinNotice) return;
            (null == e && (e = this.gameDataInstance.tRoomData.recNeedBuyNoticeData), null != e) && (e.usdt_subtract && e.gold_add && 0 != e.usdt_subtract && 0 != e.gold_add ? e.is_auto ? e.next_hand && f.TT.showMsg(f.StringTools.formatC(f.config.getStringData("ErrorToast48"), f.StringTools.numToFloatString(e.usdt_subtract), f.StringTools.numToFloatString(e.gold_add), f.StringTools.numToFloatString(e.buyin_amount)), f.Enum.ToastType.ToastTypeSuccess, !1, !1, null == (n = this.gameSceneInstance) || null == (n = n.room) ? void 0 : n.gameScene) : f.TT.showMsg(f.StringTools.formatC(e.next_hand ? f.config.getStringData("ErrorToast48") : f.config.getStringData("ErrorToast49"), f.StringTools.numToFloatString(e.usdt_subtract), f.StringTools.numToFloatString(e.gold_add), f.StringTools.numToFloatString(e.buyin_amount)), f.Enum.ToastType.ToastTypeSuccess, !1, !1, null == (a = this.gameSceneInstance) || null == (a = a.room) ? void 0 : a.gameScene) : e.is_auto ? e.next_hand && f.TT.showMsg(f.StringTools.formatC(f.config.getStringData("ErrorToast45"), f.StringTools.numToFloatString(e.buyin_amount)), f.Enum.ToastType.ToastTypeSuccess, !1, !1, null == (i = this.gameSceneInstance) || null == (i = i.room) ? void 0 : i.gameScene) : f.TT.showMsg(f.StringTools.formatC(e.next_hand ? f.config.getStringData("ErrorToast45") : f.config.getStringData("ErrorToast46"), f.StringTools.numToFloatString(e.buyin_amount)), f.Enum.ToastType.ToastTypeSuccess, !1, !1, null == (o = this.gameSceneInstance) || null == (o = o.room) ? void 0 : o.gameScene));
            this.gameDataInstance.tRoomData.isAntiRatHoleBuyIn && f.popUp.showMsg({
                txt: f.config.getStringData("GameScene_antiRatHole_message"),
                sureLabel: f.config.getStringData("GAME.CONFIRM"),
                isTwoBtn: !1,
                isPopupDarkActive: !0,
                cashGameScene: null == (r = this.gameSceneInstance) || null == (r = r.room) ? void 0 : r.gameScene
            });
            let s = f.dataHandler.getUserData().getUserIdByGameID(null == (t = this.gameSceneInstance) || null == (t = t.room) ? void 0 : t.getCurrentGameID());
            if (null != this.gameDataInstance.tRoomData.GetTablePlayer(s) && e.is_auto)
                if (e.next_hand) f.MessageCenter.send("on_update_self_buyin_stake", this.gameDataInstance);
                else {
                    var l;
                    let e = null == (l = this.gameSceneInstance) || null == (l = l.room) ? void 0 : l.getCurrentGameID(),
                        t = this.gameDataInstance.tRoomData.pkRoomParam.game_mode,
                        n = this.gameDataInstance.tRoomData.pkRoomParam.auto_withdraw;
                    (e === f.Enum.GameId.StarSeat || f.Enum.GameId.Plo || e === f.Enum.GameId.Bet || e === f.Enum.GameId.Texas && t === f.Enum.CreateGameMode.CreateGame_Mode_Short && n) && f.MessageCenter.send("on_auto_buyin_eff", this.gameDataInstance)
                }
        }
        onbtnFaceClick(e) {
            f.AudioMgr.playButtonSound("button_click.mp3"), this.isGameStarSeat() ? this.face_Panel.getComponent(T).showUi() : this.face_Panel.getComponent(y).showUi()
        }
        onbtnFullscreenEmojiClick(e) {
            f.AudioMgr.playButtonSound("button_click.mp3"), this.emoji_Panel.getComponent(D).showUi()
        }
        createEmojiFullscreenNode() {
            let e = this.gameMain_panel.getComponent(S);
            this.emoji_fullscreen = new i("emoji_fullscreen"), this.emoji_fullscreen.addComponent(h), this.emoji_fullscreen.addComponent(p), this.emoji_fullscreen.setParent(e.youwin.parent), this.emoji_fullscreen.setSiblingIndex(e.youwin.getSiblingIndex() - 1);
            let t = this.emoji_fullscreen.addComponent(b);
            t.top = t.bottom = t.left = t.right = 0, t.updateAlignment()
        }
        isGameStarSeat() {
            var e;
            return (null == (e = this.gameDataInstance) || null == (e = e.tRoomData) ? void 0 : e.u32GameID) == f.Enum.GameId.StarSeat
        }
        OnOwnerApplyBuyin2() {}
        OnBuyinNow(e) {
            for (let e = 0; e < this.gameDataInstance.tRoomData.kTablePlayerList.length; ++e) {
                var t;
                let a = this.gameDataInstance.tRoomData.kTablePlayerList[e],
                    i = f.dataHandler.getUserData().getUserIdByGameID(null == (t = this.gameSceneInstance) || null == (t = t.room) ? void 0 : t.getCurrentGameID());
                var n;
                if (a.name == f.dataHandler.getUserData().nick_name && a.playerid != i) return void f.TT.showMsg(f.config.getStringData("SitDownErrorToast1"), f.Enum.ToastType.ToastTypeError, !1, !1, null == (n = this.gameSceneInstance) || null == (n = n.room) ? void 0 : n.gameScene)
            }
            this.gameDataInstance.tRoomData.pkRoomParam.club_id;
            f.gameNet.RequestBuyin(this.gameDataInstance.tRoomData.u32RoomId, e)
        }
        sendNetJackPot() {
            f.worldNet.RequestCurrentRoomJackpot(this.gameDataInstance.tRoomData.pkRoomParam.club_id, this.gameDataInstance.tRoomData.u32RoomId, this.gameDataInstance.tRoomData.pkRoomParam.rule_blind_enum), f.worldNet.RequestGetJackpotData(this.gameDataInstance.tRoomData.pkRoomParam.club_id, this.gameDataInstance.tRoomData.u32RoomId), f.worldNet.RequestJackpotAwardRecord(this.gameDataInstance.tRoomData.pkRoomParam.club_id, this.gameDataInstance.tRoomData.u32RoomId, this.gameDataInstance.tRoomData.pkRoomParam.rule_blind_enum)
        }
        showJackpot() {
            f.AudioMgr.playButtonSound("tab"), this.sendNetJackPot(), this.jackPot_Panel.active = !0, f.MessageCenter.send("hide_bombInfoTips")
        }
        AdaptiveExpand() {
            if (f.config.IS_FULLSCREEN) {
                f.config.HEIGHT, f.config.FULLSCREEN_OFFSETY, f.config.HEIGHT;
                let e = _("gameMain_panel/sliderBg", this.node),
                    t = e.getChildByName("freeSlider"),
                    n = e.getComponent(h),
                    a = n.contentSize,
                    i = d(a.width / f.config.DESIGN_HEIGHT * f.config.HEIGHT, a.height);
                n.setContentSize(i);
                let o = e.children.length,
                    r = e.children;
                for (let e = 0; e < o; e++) r[e].setPosition(r[e].position.x / a.width * i.width, r[e].position.y);
                let s = t.getComponent(h);
                s.setContentSize(d(s.width / a.width * i.width, s.height))
            }
        }
        setGameManager(e) {
            this.manager = e, this.gameMain_panel.getComponent(S).setGameManager(e)
        }
        onBtnExitPoker() {
            var e;
            null == (e = this.manager) || e.onBtnExitPoker()
        }
        onBtnBuyin(e, t) {
            var n;
            null == (n = this.manager) || n.onBtnBuyin(e, t)
        }
        updateMenu() {
            var e;
            null == (e = this.manager) || e.updateMenu(this)
        }
    }).prototype, "jackPotPanel", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = t(ae.prototype, "gameMain_panel", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = t(ae.prototype, "face_Panel_prefab", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = t(ae.prototype, "face_barrage_prefab", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = t(ae.prototype, "danmu_Panel", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = t(ae.prototype, "gameIcon_img", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = t(ae.prototype, "gameIcon_img_star", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = t(ae.prototype, "game_bg", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = t(ae.prototype, "publicCard_panel", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = t(ae.prototype, "currentTime_prefab", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = t(ae.prototype, "buyinList_prefab", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _e = t(ae.prototype, "jackPot_prefab", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = t(ae.prototype, "allreview_panel", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), be = t(ae.prototype, "buyin_prefab", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fe = t(ae.prototype, "sliderVerify_prefab", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Se = t(ae.prototype, "insuranceEntrance_prefab", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ye = t(ae.prototype, "insuranceHitOutsTips_prefab", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ce = t(ae.prototype, "autorecallbuyin_prefab", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Te = t(ae.prototype, "card", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ie = t(ae.prototype, "ChipsMoveprefab", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), De = t(ae.prototype, "starInfo", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pe = t(ae.prototype, "buttonFace", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), we = t(ae.prototype, "buttonEmoji", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ee = t(ae.prototype, "guess_hand_card_prefab", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Me = t(ae.prototype, "tableBarContainer", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ge = t(ae.prototype, "gameSceneInstance", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Re = t(ae.prototype, "gameDataInstance", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = ae)) || ne));
    a._RF.pop()
}