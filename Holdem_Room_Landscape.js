import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
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
import * as g from "./MTTConnector.js";
import * as m from "./Holdem_Room_ts.js";
import * as T from "./cv.js";
import * as b from "./BottomMenuHandler.js";
import * as y from "./mttGameReviewLandscape.js";
import * as f from "./holdemRoomStoreLandscape.js";
import * as M from "./Holdem_PlayerControl_Landscape.js";
import * as B from "./Holdem_Player_Landscape.js";
import * as C from "./mttconfig.js";
import * as S from "./ResourcesLoader.js";
import * as _ from "./Pb.js";
import * as v from "./Enum.js";
import * as k from "./Enum.js";
import * as P from "./MultipleRoomManager.js";
import * as G from "./MttItemHelper.js";
import * as I from "./Translator.js";
import * as L from "./notifyMsgMttLandscape.js";
import * as H from "./MultipleNewReplayerWindow.js";
import * as R from "./JurisdLoader.js";

function main() {
    var E, w, A, x, N, D, F, O, W, z, U, V, j, J, Y, K, X, q, Q, Z;
    i._RF.push({}, "4e258mzKmVKh4s9VBDtPh+X", "Holdem_Room_Landscape", void 0);
    const {
        ccclass: $,
        property: ee
    } = r;
    e("default", (E = ee(n), w = ee(a), A = ee(s), x = ee(a), N = ee(l), D = ee(l), F = ee(l), O = ee(l), W = ee(L), $((V = t((U = class extends m {
        constructor(...e) {
            super(...e), o(this, "tableSettingPrefab", V, this), o(this, "bottomMenu", j, this), o(this, "gameTypeText", J, this), o(this, "gameTypeIcon", Y, this), o(this, "backButtonBgrHover", K, this), o(this, "backButtonBgrClick", X, this), o(this, "backAllTablesButtonBgrHover", q, this), o(this, "backAllTablesButtonBgrClick", Q, this), o(this, "notifyMsgMtt", Z, this), this._statusController = void 0, this.Enlarge_UI_Shift_Y_GlobalSpins = 60
        }
        adaptWidget() {
            g.instance.cv.resMgr.adaptWidget(this.node, !0, !1)
        }
        initGameRecord() {
            let e = this.bottomMenu.getComponent(b);
            e.setClickHandCb(this.onClickNewReplayerWindow.bind(this)), this.gameRecord = e.getMttGameReviewNode().getComponent(y)
        }
        initEmojiPanel() {
            this.bottomMenu.getComponent(b).setHoldemRoom(this)
        }
        getDefaultSlideArr() {
            return []
        }
        onLoad() {
            if (super.onLoad(), this.playerControl.buyTimeButton.active = !1, this._statusController = T.StatusView.getMttGamesStatusController(), this._statusController && this._statusController.haveAssets() && this.bottomMenu) {
                let e = this.bottomMenu.getSiblingIndex();
                this._statusController.node.setParent(this.bottomMenu.parent), this._statusController.node.setSiblingIndex(e), this._statusController.showLatency()
            }
            this.adjustUI(), T.MessageCenter.register(T.config.CHANGE_LANGUAGE, this._onLanguageChange.bind(this), this)
        }
        adjustUI() {
            if (this.isGlobalSpinGameMode()) {
                this.publicCardsHandler.node.position = new u(this.publicCardsHandler.node.position.x, this.publicCardsHandler.node.position.y + this.Enlarge_UI_Shift_Y_GlobalSpins, this.publicCardsHandler.node.position.z);
                const e = this.mainPotStake.node.parent;
                e.position = new u(e.position.x, e.position.y + this.Enlarge_UI_Shift_Y_GlobalSpins, e.position.z)
            }
        }
        onDestroy() {
            super.onDestroy(), T.StatusView.destroyMttGamesStatusController(this._statusController), T.MessageCenter.unregister(T.config.CHANGE_LANGUAGE, this)
        }
        loadBgTableImage(e) {}
        setTableThemeSprites(e) {
            this.loadButtonsTheme(e), this.loadBetButtonFoldTheme(e), c(this.backButtonBgr) && T.resMgr.updateBackButton(this.backButtonBgr), c(this.backAllTablesButtonBgr) && T.resMgr.updateBackButton(this.backAllTablesButtonBgr)
        }
        setBackground_GP() {
            super.setBackground_GP();
            let e = T.tools.GetTableBack();
            this.setTableThemeSprites(e)
        }
        loadBetButtonFoldTheme(e, t = null, o = null) {
            let i = null;
            if (this.playerControl instanceof M) {
                i = [this.playerControl.callButton.getComponent(l), this.playerControl.foldButton.getComponent(l), this.playerControl.raiseOrBetButton.getComponent(l)], T.resMgr.loadBetButtonFoldHoverTheme(this.playerControl.mouseOverBetButtonsSprites.concat([this.backAllTablesButtonBgrHover, this.backButtonBgrHover]), e), T.resMgr.loadBetButtonFoldClickTheme(this.playerControl.mouseClickBetButtonsSprites.concat([this.backAllTablesButtonBgrClick, this.backButtonBgrClick]), e), T.resMgr.setPlusMinusHoverThemeColors(this.playerControl.mouseOverPlusMinusButtonsColors, e), T.resMgr.setPlusMinusClickThemeColors(this.playerControl.mouseClickPlusMinusButtonsColors, e), T.resMgr.setPlusMinusNormalThemeColors(this.playerControl.mouseNormalPlusMinusButtonsColors, e), T.resMgr.setClickThemeColors(this.playerControl.mouseClickOtherBetButtonsColors, e), T.resMgr.setSliderHandleTheme(this.playerControl.sliderHandleSprite, e)
            }
            T.resMgr.loadBetButtonFoldTheme(i, e)
        }
        loadButtonsTheme(e) {
            T.resMgr.loadButtonsTheme(e, [], [])
        }
        loadBackgroundImage(e) {
            var t;
            let o = T.tools.GetTableBack();
            this.setTableThemeSprites(o), this.loadCount = 2;
            const i = null == (t = this.tableTexturesLoadedCallback) ? void 0 : t.bind(this);
            if (this.specialTournamentType == v.None) {
                const e = this.bgTable.getComponent(l),
                    t = "Textures/tableBgs/table_" + o;
                R.loadTableSpriteWithFallback(e, t, void 0, i);
                const n = this.bg.getComponent(l),
                    a = "Textures/tableBgs/table_bg_" + o;
                R.loadTableSpriteWithFallback(n, a, void 0, i)
            } else this.loadCount = 4, o = this.specialTournamentType, T.resMgr.loadSpecialTable(o, [this.bgTable], this.tableTexturesLoadedCallback.bind(this)), T.resMgr.loadSpecialTableBackground(o, [this.bg], this.tableTexturesLoadedCallback.bind(this)), T.resMgr.loadFinalTable(o, this.finalBgTable, this.tableTexturesLoadedCallback.bind(this)), T.resMgr.loadFinalTableBackground(o, this.finalBg, this.tableTexturesLoadedCallback.bind(this))
        }
        setFinalBackground() {}
        setBackgroundTopActive(e) {}
        setBackgroundTheme(e) {}
        replayUISettings() {
            this.node.setScale(new u(.5, .5)), this.addTableButton.node.active = !1
        }
        setMaxPlayerPOPUPReplay(e) {
            this.setMaxPlayer(this.seats)
        }
        createGameRoomStoreInstance(e, t, o, i, n, a) {
            return new f(e, t, o, i, n, a)
        }
        setPlayerLayout(e, t, o) {
            super.setPlayerLayout(e, t, o), t instanceof B && t.setSeatIndex(e)
        }
        loadSelfSettingNode(e = null) {
            this.loadPrefabTableSetting(this.tableSettingPrefab, e)
        }
        updateAddTableButton() {
            this.addTableButton.node.active = !1
        }
        initMultipleGame(e, t) {
            T.appConfig.getGeneralConfig().multiWindowEnabled ? (this.multipleGameType = e, this.setMultipleGameIndex(t), this.multipleGameInfo = P.instance.listRoom[this.multipleGameIndex]) : super.initMultipleGame(e, t)
        }
        onClickEmoji() {}
        setGameIcon() {
            if (this._gameMode == C.GAME_LEVEL_LIST_ID.MTT)
                if (this.store && this.store.MTTDetail && G.getIsBounty(this.store.MTTDetail.TournamentMode)) {
                    cc_mtt.vv.AssetsManager.loadRes(S.RES_PATH.SPRITE.HOLDEM.MODE_HUNTERGAME, d, ((e, t) => {
                        this.gameTypeSprite.node.active = !0, this.gameTypeSprite.spriteFrame = t, this.gameTypeSprite.node.getComponent(h).opacity = 255, this.gameTypeText.node.active = !1, this.gameTypeIcon.active = !1
                    }));
                    for (const e of this._players)(this.store.MTTDetail.TournamentMode != _.commonProto.TOURNAMENT_MODE.Mystery || this.store.isMysteryBountyStage) && (e.isHunterGame = !0)
                } else this.gameTypeSprite.node.active = !1, this.gameTypeText.node.active = !0, this.gameTypeText.string = T.config.getStringData("Game_Mode_MTT"), this.gameTypeIcon.active = !0, T.resMgr.loadSprite("Textures/gameTypeIcon/" + k.MTT.toString(), [this.gameTypeIcon.getComponent(l)], null, null, !0);
            else this._gameMode == C.GAME_LEVEL_LIST_ID.SNG ? cc_mtt.vv.AssetsManager.loadRes(S.RES_PATH.SPRITE.HOLDEM.MODE_GLOBAL_SPINES, d, ((e, t) => {
                let o = new a,
                    i = o.addComponent(l);
                o.parent = this.gameTypeSprite.node.parent, i.spriteFrame = t, o.setPosition(this.gameTypeSprite.node.getPosition()), this.gameTypeText.node.active = !1, this.gameTypeIcon.active = !1, o.setScale(p(.6, .6, 1));
                let n = o.getPosition();
                n.y -= 26, o.setPosition(n), n = this.infoPanel.getPosition(), n.y += 140, this.infoPanel.setPosition(n)
            })) : this._gameMode == C.GAME_LEVEL_LIST_ID.AOF ? (this.gameTypeSprite.node.active = !1, this.gameTypeText.node.active = !0, this.gameTypeText.string = T.config.getStringData("Game_Mode_AOF"), this.gameTypeIcon.active = !1) : (this.gameTypeSprite.node.active = !1, this.gameTypeText.node.active = !0, this.gameTypeText.string = T.config.getStringData("Game_Mode_SNG"), this.gameTypeIcon.active = !1);
            this.setSubGameIcon()
        }
        hideGameType() {
            this.gameTypeText.node.active = !1, this.gameTypeIcon.active = !1
        }
        updateWidgetLayout() {
            T.appConfig.getGeneralConfig().multiWindowEnabled || super.updateWidgetLayout()
        }
        CreateChildNode() {
            super.CreateChildNode(), this.isGlobalSpinGameMode() && (this.tableBackNode.active = !0)
        }
        setActiveHoldemRoomInfoField(e, t) {
            super.setActiveHoldemRoomInfoField(e, t)
        }
        notifyMessageTourStartShortly() {
            var e;
            if (c(this.notifyMsgMtt) && (null == (e = this.store) ? void 0 : e.tournamentId) > 0 && this.isMttPreparing) {
                const e = cc_mtt.vv.DataManager.JoinedTournaments.find((e => e.TournamentId == this.store.tournamentId));
                c(e) && e.JoinStatus > 0 && this.scheduleOnce((() => {
                    const e = I("MTT_Prompt_SuccessfullyRegistered"),
                        t = I("MTT_Prompt_TourStartShortly");
                    this.notifyMsgMtt.showWithDescription(e, t, !1)
                }), 2)
            }
        }
        onClickNewReplayerWindow() {
            H.initNewReplayerWindowByHoldem(this)
        }
        _onLanguageChange() {
            this.setWaitForTableMessageText()
        }
    }).prototype, "tableSettingPrefab", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(U.prototype, "bottomMenu", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(U.prototype, "gameTypeText", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(U.prototype, "gameTypeIcon", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(U.prototype, "backButtonBgrHover", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(U.prototype, "backButtonBgrClick", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(U.prototype, "backAllTablesButtonBgrHover", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(U.prototype, "backAllTablesButtonBgrClick", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = t(U.prototype, "notifyMsgMtt", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = U)) || z));
    i._RF.pop()
}