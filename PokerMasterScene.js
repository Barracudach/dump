import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as F from "./cc.js";
import * as G from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as H from "./cc.js";
import * as N from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as P from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as B from "./cc.js";
import * as x from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as M from "./cc.js";
import * as D from "./cc.js";
import * as w from "./cc.js";
import * as b from "./cc.js";
import * as A from "./cc.js";
import * as o from "./cc.js";
import * as O from "./cc.js";
import * as l from "./cc.js";
import * as W from "./cc.js";
import * as d from "./cc.js";
import * as R from "./cc.js";
import * as v from "./cc.js";
import * as L from "./cc.js";
import * as I from "./cc.js";
import * as k from "./cc.js";
import * as T from "./cc.js";
import * as y from "./cc.js";
import * as U from "./Deque.js";
import * as Z from "./HashMap.js";
import * as z from "./pokermaster.mjs_cjs=&original=.js";
import * as V from "./cv.js";
import * as q from "./CowboyCard.js";
import * as X from "./PokerMasterDataMgr.js";
import * as Y from "./LuckTurntablesButton.js";
import * as K from "./HumanboyExchange.js";
import * as mod10 from "./CowboySetting.js";
import * as Q from "./PokerMasterDef.js";
import * as j from "./define.js";
import * as J from "./define.js";
import * as ee from "./CircleSprite.js";
import * as te from "./HumanboyList.js";
import * as ie from "./HumanboyGuid.js";
import * as ne from "./HumanboyMenu.js";
import * as oe from "./HumanboyToast.js";
import * as ae from "./HumanboyDialog.js";
import * as se from "./HumanboyBetCoin.js";
import * as re from "./HumanboyRewardTips.js";
import * as _e from "./HumanboyFlutterScore.js";
import * as le from "./HumanboyAdvancedAuto.js";
import * as he from "./HumanboyAdvancedSetting.js";
import * as de from "./PokerMasterSquintCard.js";
import * as ge from "./PokerMasterChart.js";
import * as me from "./PokerMasterReview.js";
import * as ce from "./PokerMasterReview.js";
import * as ue from "./PokerMasterReview.js";
import * as pe from "./Enum.js";
import * as Ce from "./HeadPointsAni.js";
import * as ye from "./HeadPointsAni.js";
import * as fe from "./GameSceneInstance.js";
import * as be from "./PopSilence.js";
import * as Ae from "./MiniGameDialog.js";
import * as Se from "./MiniGameAdvancedAuto.js";
import * as ve from "./ConcreteAdvancedAuto.js";
import * as Be from "./ConcreteMiniGameDialog.js";
import * as Pe from "./DialogStyleModel.js";
import * as Te from "./CowboyExit.js";
import * as Me from "./CurrencyValue.js";
import * as we from "./MiniGameRuleContainer.js";
import * as ke from "./MiniGamePopupManager.js";
import * as Ee from "./AppConfig.js";
import * as Re from "./Holdem_RestPopup.js";
import * as Ne from "./StatusView.js";
import * as Ie from "./MiniGameSoundManager.js";
import * as Oe from "./CrashTracing.js";
import * as Le from "./PokerMasterSkeletonAnimHandler.js";
import * as De from "./GroupLabel.js";
import * as xe from "./cb.js";
import * as Ge from "./AnalyticsHandler.js";
import * as We from "./LoginController.js";
import * as He from "./PushNoticeInGame.js";
import * as Fe from "./CommonTools.js";
import * as Ue from "./TweenControl.js";
import * as Ze from "./MappingPlist.js";

function main() {
    var ze, Ve, qe, Xe, Ye, Ke, $e, Qe, Je, je, et, tt, it, nt, ot, at, st, rt, _t, lt, ht, dt, gt, ut, ct, mt, pt, Ct, yt, ft, bt, At, St, vt, Bt, Pt, Tt, Mt, wt, kt, Et, Rt, Nt, It, Ot, Lt, Dt, xt, Gt, Wt, Ht, Ft, Ut, Zt, zt, Vt, qt, Xt, Yt, Kt, $t, Qt, Jt, jt, ei, ti, ii, ni, oi, ai, si, ri, _i, li, hi, di, gi, ui, ci, mi, pi, Ci, yi, fi, bi, Ai, Si, vi, Bi, Pi, Ti, Mi, wi;
    n._RF.push({}, "db686T1X1hMCI9FKK9qaT8/", "PokerMasterScene", void 0);
    class ki {
        constructor() {
            this.uid = 0, this.imgBg = null, this.nodeHead = null, this.txtCoin = null, this.imgFlag = null
        }
    }
    e("PokerMasterPlayerInfo", ki);
    class Ei {
        constructor() {
            this.nAreaIdx = 0, this.nGold = 0, this.nUid = 0, this.bAnim = !1, this.bHeadAnim = !1, this.bPlaySound = !1
        }
    }
    e("PokerMasterCoinOptimization", Ei);
    class Ri {
        constructor() {
            this.zoneIndex = 0, this.zoneOption = Ze.pokermaster_proto.BetZoneOption.BetZoneOption_DUMMY, this.wayOutStyle = Q.eGameboyWayOutStyle.GWS_NONE, this.wayOutLoseLimitCount = 0, this.panelArea = null, this.panelCoin = null, this.panelWayOut = null, this.txtSelfBetNum = null, this.txtTotalBetNum = null, this.rtxtWayOut = null, this.txtOdds = null, this.coinQueue = new U, this.wayOutImgArray = [], this.wayOutImgSrcPosArray = []
        }
    }
    e("PokerMasterAreaInfo", Ri);
    const {
        ccclass: Ni,
        property: Ii
    } = l;
    e("PokerMasterScene", (ze = Ii(o), Ve = Ii(o), qe = Ii(o), Xe = Ii(o), Ye = Ii(o), Ke = Ii(o), $e = Ii(o), Qe = Ii(o), Je = Ii(o), je = Ii(o), et = Ii(o), tt = Ii(o), it = Ii(o), nt = Ii(o), ot = Ii(o), at = Ii(o), st = Ii(o), rt = Ii(o), _t = Ii(o), lt = Ii(o), ht = Ii(o), dt = Ii(o), gt = Ii(o), ut = Ii(o), ct = Ii(o), mt = Ii(o), pt = Ii(o), Ct = Ii(o), yt = Ii(o), ft = Ii(a), bt = Ii(a), At = Ii(o), St = Ii(o), vt = Ii(s), Bt = Ii(s), Pt = Ii(o), Tt = Ii(o), Mt = Ii(o), wt = Ii(r), kt = Ii(We), Et = Ii(o), Rt = Ii(o), Nt = Ii(a), It = Ii(Ue), Ot = ye(), Ni(((wi = class e extends h {
        constructor(...e) {
            super(...e), i(this, "prefab_cb_win_player_light", xt, this), i(this, "prefab_cb_exchange", Gt, this), i(this, "prefab_cb_rule", Wt, this), i(this, "prefab_cb_soundSetting", Ht, this), i(this, "prefab_cb_exit", Ft, this), i(this, "mainAquamanPrefab", Ut, this), i(this, "mainSharkPrefab", Zt, this), i(this, "prefab_cb_round_start", zt, this), i(this, "prefab_pm_show_odds", Vt, this), i(this, "prefab_pm_squid_card", qt, this), i(this, "prefab_pm_chart", Xt, this), i(this, "prefab_pm_review", Yt, this), i(this, "prefab_hb_win_flag", Kt, this), i(this, "special_card_type_prefab", $t, this), i(this, "prefab_hb_start_bets", Qt, this), i(this, "prefab_hb_end_bets", Jt, this), i(this, "prefab_hb_way_out", jt, this), i(this, "prefab_hb_flutterScore", ei, this), i(this, "prefab_hb_betCoin", ti, this), i(this, "prefab_hb_toast", ii, this), i(this, "prefab_hb_guid", ni, this), i(this, "prefab_hb_menu", oi, this), i(this, "prefab_hb_advancedSetting", ai, this), i(this, "prefab_hb_advancedAuto", si, this), i(this, "prefab_hb_addAdvancedAuto", ri, this), i(this, "prefab_hb_dialog", _i, this), i(this, "prefab_hb_playerList", li, this), i(this, "prefab_hb_rewardTips", hi, this), i(this, "prefab_luckButton", di, this), i(this, "cowboy_trend_anim_PLIST", gi, this), i(this, "game_dznz_PLIST", ui, this), i(this, "points_ani_prefab", ci, this), i(this, "popSilencePre", mi, this), i(this, "btnInfo", pi, this), i(this, "btnInfo2", Ci, this), this.points_node = null, i(this, "miniGameLoadingScreenPrefab", yi, this), i(this, "resultCardTypePrefab", fi, this), i(this, "winCountPrefab", bi, this), i(this, "luckPanelLayer", Ai, this), i(this, "pushNotice", Si, this), i(this, "luckWelcomePopup_prefab", vi, this), i(this, "mxnCurrencyInfo_prefab", Bi, this), i(this, "cowboy_PLIST", Pi, this), i(this, "mappingPlist", Ti, this), this._luckWelcomePopupNode = null, this._hasShownLuckWelcomePopup = !1, this._msInterval = 1, this._msNowTime = 0, this._msLastTime = 0, this._nLeftTime = 0, this._panel_game = null, this._panel_card = null, this._panel_top = null, this._panel_bottom = null, this._panel_self = null, this._panel_bet_btn = null, this._vBottomBetBtns = [], this._vTopWayOutImg = [], this._vTopWayOutImgSrcPos = [], this._vLeftHandCards = [], this._vRightHandCards = [], this._vPublicHoleCards = [], this._vLeftHandCardsSrcPos = [], this._vRightHandCardsSrcPos = [], this._vPublicHoleCardsSrcPos = [], this._img_left_card_type = null, this._img_right_card_type = null, this._img_left_card_type_bg = null, this._img_right_card_type_bg = null, this._left_card_type_win_node = null, this._left_card_type_lose_node = null, this._left_card_lead_node = null, this._right_card_type_win_node = null, this._right_card_type_lose_node = null, this._right_card_lead_node = null, this._squintCard = null, this._txt_self_name = null, this._txt_self_gold = null, this._img_self_gold = null, this._img_self_head = null, this._img_bet_clock = null, this._img_bet_clock_src_pos = d(g.ZERO), this._img_count_down = null, this._img_count_down_src_pos = d(g.ZERO), this._btn_review = null, this._btn_playerList = null, this._btn_betAuto = null, this._autoBetUsingNode = null, this._btn_betClean = null, this._btn_redpacket_festival = null, this._btn_redpacket_festival_layer = null, this._luckButton = null, this._vAreasInfo = [], this._vOtherPlayerInfo = [], this._vBetButtons = [], this._mapSounds = new Z, this._otherPlayerDescLeft = null, this._otherPlayerDescRight = null, this._nodeAnim = null, this._nodeCoinPool = null, this._llCoinPoolZOrderCount = 0, this._mapCoinQueue = new Z, this._vCoinOptimizationDeque = new U, this._mapAnimWinFlags = new Z, this._mapAnimShowOdds = new Z, this._animRoundStart = null, this._animStartBet = null, this._animStopBet = null, this._animWayoutLight = null, this._aquamanNode = void 0, this._sharkNode = void 0, this._nBetBtnNum = 5, this._fBetBtnSrcScaleRate = .75, this._fBetBtnTarScaleRate = 1, this._fFlyCoinScaleRate = .5, this._nCurBetBtnIndex = -1, this._nAreaCoinLimitCountMin = 100, this._nAreaCoinLimitCountMax = 200, this._bWaitting = !1, this._nWaittingTime = 0, this._fActDelayed_RoundStart = 0, this._fActExecute_RoundStart = 1.3, this._fActDelayed_SendCard = 0, this._fActExecute_SendCard = 1.5, this._fActDelayed_ShowHandCard = 0, this._fActExecute_ShowHandCard = 1.2, this._fActDelayed_ShowTurnCard = 0, this._fActExecute_ShowTurnCard = .5, this._fActDelayed_ShowRiverCard = .5, this._fActExecute_ShowRiverCard = .5, this._fActDelayed_ShowOdds = 0, this._fActExecute_ShowOdds = 1, this._fActDelayed_StartBet = 0, this._fActExecute_Startbet = 1, this._fActExecute_BetClock = .5, this._fActExecute_TableTrans = .5, this._fActDelayed_StopBet = .5, this._fActExecute_StopBet = 1, this._fActDelayed_SkipInsure = .5, this._fActExecute_SkipInsure = 2, this._fActDelayed_Squint_Card = .5, this._fActExecute_Squint_Card = 6, this._fActDelayed_ShowCardType = 0, this._fActExecute_ShowCardType = .5, this._fActDelayed_ShowWinFlag = .5, this._fActExecute_WinFlag = 2.5, this._fActDelayed_HideWinFlag = 1, this._fActExecute_WayOut = 1, this._fActExecute_WayOutLight = 1.2, this._fActDelayed_FlyWinCoin = .5, this._fActExecute_FlyWinCoin = 1.5, this._fActExecute_FlyWinCoinEnd = 2, this._miPai_time = 6, this._special_type_time = 8, this._bTrueFullScreen = !1, this._bOpenNarrowAdapter = !0, this._eAutoBtnStyle = Q.eGameboyAutoBtnStyle.GAB_STYLE_NONE, this._humanboyGuid = null, this._humanboyMenu = null, this._humanboyAdvancedSetting = null, this._humanboyAdvancedAuto = null, this._pokerMasterChart = null, this._pokerMasterReview = null, this._humanboyPlayerList = null, this._humanboyExchange = null, this._humanboyRule = null, this._humanboySetting = null, this._humanboyRewardTips = null, this._atlas_pm_pokermaster = null, this._atlas_hb_humanboy = null, this._strCardFacePath = "zh_CN/game/pokermaster/card_type_0/", this._strCardBackPath = "zh_CN/game/pokermaster/card_type_0/", this.s_special_card_type = "zh_CN/game/cowboy/audio/special_card_type_big", this.silenceMusic = "zh_CN/game/dzpoker/audio/silence2", this.flyCoinToPlayerArr = [], this.isIphoneX_area = !1, this.trend_anim = null, this.isSquintCard = !1, this.mttbeginMsg = "", this.ispad = !1, i(this, "gameSceneInstance", Mi, this), this._bSwitchTable = !1, this.isWayOutAnimPlaying = !1, this._currentSpecialCardType = void 0, this._skeletonAnimHandler = null, this._miniGameLoadingScreen = null, this._statusController = null, this._winFlagNodes = [], this._advancceAutoTipsLabelKey = void 0, this._isLeaving = !1, this._leftPlayerPanel = void 0, this._rightPlayerPanel = void 0, this._panel_game_narrow_width = 1822, this.advanceAutoAddBet = null, this.onPageVisibilityChange = () => {
                if (!z.appConfig.isWebApp) return;
                const e = document.visibilityState;
                "hidden" === e ? this.OnAppEnterBackground() : "visible" === e && this.OnAppEnterForeground()
            }
        }
        onLoad() {
            if (z.appConfig.isWebApp) {
                const e = this.node.scene.getComponentInChildren(u);
                e.overrideResolutionPolicy = !0, e.resolutionPolicy = c.NO_BORDER
            }
            z.config.setCurrentScene(z.Enum.SCENE.POKERMASTER_SCENE), z.config.adaptScreenHen(this.node), z.appConfig.getGeneralConfig().multiWindowEnabled ? z.resMgr.adaptWidget(this.node, !0, !1) : z.resMgr.adaptWidget(this.node, !0), this._skeletonAnimHandler = this.node.addComponent(Oe), z.appConfig.getGeneralConfig().multiWindowEnabled && (this._miniGameLoadingScreen = m(this.miniGameLoadingScreenPrefab), this._miniGameLoadingScreen.setParent(this.node), this._miniGameLoadingScreen.active = !0, this._miniGameLoadingScreen.setSiblingIndex($.LayerZorder.Z_IDX_LOADING_SCREEN), z.SwitchLoadingView.hide(), z.SwitchLoadingView.switchToPotrait()), (z.appConfig.isWebApp || p.isMobile) && (C.on("canvas-resize", this.onResize, this), this.registerPageVisibility())
        }
        start() {
            var e, t, i;
            if (z.appConfig.getGeneralConfig().multiWindowEnabled) {
                let e = z.roomManager.getGameScene(z.Enum.GameId.PokerMaster, z.roomManager.getMiniGameRoomIdTemplate(z.Enum.GameId.PokerMaster));
                if (e) {
                    e.windowID;
                    y.setWindowTitle(e.windowID, "Poker Master")
                }
                z.resMgr.adaptWidget(this.node, !0, !1)
            }
            z.appConfig.isWebApp && this.onResize(!0), this._init(), this.gameSceneInstance && this.gameSceneInstance.gameData && this.gameSceneInstance.gameData.tRoomData && (this.gameSceneInstance.gameData.tRoomData.m_bIsReconnectMode = !0), z.roomManager.RequestJoinRoom(null == (e = this.gameSceneInstance) || null == (e = e.room) ? void 0 : e.getCurrentGameID(), null == (t = this.gameSceneInstance) || null == (t = t.room) ? void 0 : t.getCurrentRoomID());
            const n = z.cowboyPromotionManager.data.instanceData;
            "" != n.launchFromScreen && (n.launchFromScreen = ""), Ee.requestingJoinPokerMasterGame && (xe.getInstance().sendEvent(z.Enum.CurrentScreen.room, z.Enum.segmentEvent.CasinoGameStarted, z.Enum.Functionality.casino, {
                game: "mtt",
                context: "clickThePopUp",
                buttonName: z.Enum.GameNameMap[z.Enum.GameId.PokerMaster],
                crosssell: !0
            }), Ee.requestingJoinPokerMasterGame = !1), z.dataHandler.getUserData().minigameId = z.Enum.GameId.PokerMaster, null == (i = this._miniGameLoadingScreen) || i.setSiblingIndex($.LayerZorder.Z_IDX_LOADING_SCREEN), z.StatusView.show(!1)
        }
        onDestroy() {
            z.StatusView.show(!0), this._removeObserver(), Ne.stopMusic(), z.StatusView.destroyMiniGameStatusController(), (z.appConfig.isWebApp || p.isMobile) && C.off("canvas-resize", this.onResize, this)
        }
        update(e) {
            this._msNowTime += e;
            let t = this._msNowTime - this._msLastTime;
            t >= this._msInterval && (this._msLastTime = this._msNowTime - (t - this._msInterval), --this._nLeftTime), this._updateCoinOptimization(e)
        }
        _addObserver() {
            z.MessageCenter.register($.LocalMsg().SWITCH_SCENEB_EGAN, this._onMsgSwitchSceneBegan.bind(this), this.node);
            let e = $.LocalMsg().MsgPrefix;
            z.MessageCenter.register(z.Enum.MessageCenterAction.statusLatencyUpdated, this.onStatusLantencyUpdated.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().RECHARGE, this._onMsgRecharge.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().ERROR, this._onMsgGameError.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().ROOM_KICK, this._onMsgKick.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().ROOM_PARAM_CHANGE, this._onMsgRoomParamChange.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().GAME_DATA_SYN, this._onMsgGameDataSyn.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().STATUS_DEAL, this._onMsgGameStatusDeal.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().STATUS_SHOW_ODDS, this._onMsgGameStatusShowOdds.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().STATUS_START_BET, this._onMsgGameStatusStartBet.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().STATUS_STOP_BET, this._onMsgGameStatusStopBet.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().STATUS_ROUND_END, this._onMsgGameStatusRoundEnd.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().STATUS_READY, this._onMsgGameStatusReady.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().BET, this._onMsgBet.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().AUTO_BET, this._onMsgAutoBet.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().AUTO_BET_MERGE, this._onMsgMergeAutoBet.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().ADVANCE_BET_LEVEL_CHANGE, this._onMsgBetAmountLevelChange.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().ADVANCE_AUTOBET_SET, this._onMsgAdvanceAutobetSet.bind(this), this.node), z.MessageCenter.register($.LocalMsg().ADVANCE_AUTOBET, this._onMsgAdvanceAutobet.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().ADVANCE_AUTOBET_CANCEL, this._onMsgAdvanceAutobetCancel.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().REACH_LIMIT_BET, this._onMsgAdvanceAutobetLimitReached.bind(this), this.node), z.MessageCenter.register(e + $.LocalMsg().UPDATE_PLAYER_LIST, this._onMsgPlayerList.bind(this), this.node), z.MessageCenter.register($.LocalMsg().REWARD_TIPS, this._onMsgRewardTips.bind(this), this.node), z.MessageCenter.register($.LocalMsg().UPDATE_WORLDSERVER_GOLD, this._onMsgUpdateWorldServerGold.bind(this), this.node), z.MessageCenter.register($.LocalMsg().SHOW_LUCK_BUTTON, this._onMsgShowLuckButton.bind(this), this.node), z.MessageCenter.register($.LocalMsg().TURN_TABLE_REWARD, this._onMsgTurntableResultNotice.bind(this), this.node), z.MessageCenter.register("goldViewShop", this.onGoldViewShop.bind(this), this.node), z.MessageCenter.register("onNoticeOpenCalmDownWindow", this.onCalmDownShowTip.bind(this), this.node), z.MessageCenter.register("onCalmDownMsg", this.onCalmDownShowTip.bind(this), this.node), z.MessageCenter.register("onClickedExchangeRate", this.showIntroPopup.bind(this), this.node), z.config.isSiyuType() ? (z.MessageCenter.register("on_syOnEnterBackground", this.OnAppEnterBackground.bind(this), this.node), z.MessageCenter.register("on_syOnEnterForeground", this.OnAppEnterForeground.bind(this), this.node)) : (f.on(b.EVENT_HIDE, this.OnAppEnterBackground, this), f.on(b.EVENT_SHOW, this.OnAppEnterForeground, this)), z.MessageCenter.register("NoticeMTT_MatchBegin", this.NoticeMttMatchBegin.bind(this), this.node), z.MessageCenter.register("on_advance_autobet_add", this.onMsgAdvanceAutobetAdd.bind(this), this.node), z.MessageCenter.register("click_btn_exit_room", this.callExitProcess.bind(this), this.node), z.MessageCenter.register("on_leave_room_success", this._onExitRoomSuccess.bind(this), this.node), z.MessageCenter.register($.LocalMsg().ON_BGM_ENABLE, this.OnBackgroundMusicEnable.bind(this), this.node), z.MessageCenter.register(z.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this.node), z.MessageCenter.register("sendNoticeMsg", this.showNoticeMsg.bind(this), this.node), z.MessageCenter.register(z.Enum.MessageCenterAction.ExitRoomGame, this._backToMainScene.bind(this, "", !0), this.node)
        }
        _removeObserver() {
            z.MessageCenter.unregister($.LocalMsg().SWITCH_SCENEB_EGAN, this.node);
            let e = $.LocalMsg().MsgPrefix;
            z.MessageCenter.unregister(e + $.LocalMsg().RECHARGE, this.node), z.MessageCenter.unregister(e + $.LocalMsg().ERROR, this.node), z.MessageCenter.unregister(e + $.LocalMsg().ROOM_KICK, this.node), z.MessageCenter.unregister(e + $.LocalMsg().ROOM_PARAM_CHANGE, this.node), z.MessageCenter.unregister(e + $.LocalMsg().GAME_DATA_SYN, this.node), z.MessageCenter.unregister(e + $.LocalMsg().STATUS_DEAL, this.node), z.MessageCenter.unregister(e + $.LocalMsg().STATUS_SHOW_ODDS, this.node), z.MessageCenter.unregister(e + $.LocalMsg().STATUS_START_BET, this.node), z.MessageCenter.unregister(e + $.LocalMsg().STATUS_STOP_BET, this.node), z.MessageCenter.unregister(e + $.LocalMsg().STATUS_ROUND_END, this.node), z.MessageCenter.unregister(e + $.LocalMsg().STATUS_READY, this.node), z.MessageCenter.unregister(e + $.LocalMsg().BET, this.node), z.MessageCenter.unregister(e + $.LocalMsg().AUTO_BET, this.node), z.MessageCenter.unregister(e + $.LocalMsg().AUTO_BET_MERGE, this.node), z.MessageCenter.unregister(e + $.LocalMsg().ADVANCE_BET_LEVEL_CHANGE, this.node), z.MessageCenter.unregister(e + $.LocalMsg().ADVANCE_AUTOBET_SET, this.node), z.MessageCenter.unregister($.LocalMsg().ADVANCE_AUTOBET, this.node), z.MessageCenter.unregister(e + $.LocalMsg().ADVANCE_AUTOBET_CANCEL, this.node), z.MessageCenter.unregister(e + $.LocalMsg().REACH_LIMIT_BET, this.node), z.MessageCenter.unregister(e + $.LocalMsg().UPDATE_PLAYER_LIST, this.node), z.MessageCenter.unregister($.LocalMsg().REWARD_TIPS, this.node), z.MessageCenter.unregister($.LocalMsg().UPDATE_WORLDSERVER_GOLD, this.node), z.MessageCenter.unregister($.LocalMsg().SHOW_LUCK_BUTTON, this.node), z.MessageCenter.unregister($.LocalMsg().TURN_TABLE_REWARD, this.node), z.MessageCenter.unregister("goldViewShop", this.node), z.MessageCenter.unregister("onNoticeOpenCalmDownWindow", this.node), z.MessageCenter.unregister("onCalmDownMsg", this.node), z.MessageCenter.unregister("onClickedExchangeRate", this.node), z.config.isSiyuType() ? (z.MessageCenter.unregister("on_syOnEnterBackground", this.node), z.MessageCenter.unregister("on_syOnEnterForeground", this.node)) : (f.off(b.EVENT_HIDE, this.OnAppEnterBackground, this), f.off(b.EVENT_SHOW, this.OnAppEnterForeground, this)), z.MessageCenter.unregister("NoticeMTT_MatchBegin", this.node), z.MessageCenter.unregister("on_advance_autobet_add", this.node), z.MessageCenter.unregister("click_btn_exit_room", this.node), z.MessageCenter.unregister(z.Enum.MessageCenterAction.statusLatencyUpdated, this.node), z.MessageCenter.unregister($.LocalMsg().ON_BGM_ENABLE, this.node), z.MessageCenter.unregister(z.config.CHANGE_LANGUAGE, this.node), z.MessageCenter.unregister("sendNoticeMsg", this.node), z.MessageCenter.unregister(z.Enum.MessageCenterAction.ExitRoomGame, this.node), this.unregisterPageVisibility()
        }
        _resetAllUI() {
            this.clearSpecialCardTypeAnim(), this._resetGameView(), this._resetOtherView(), this._updateGameView()
        }
        _resetGameView() {
            this._resetCardPos(), this._resetLeftTime(), this._resetCardTypeOrRoleLead(), this._setAllCardsFace(!1), this._setAllCardsVisible(!1), this._resetAllBetAreas(), this._resetAllBetAreaCoins(), this._restAllTimelineAnims(), this._resetSquintCardInfo(), this._stopTimeBetClock(), this._stopWaittingNextRound(), this._stopPrepareNextRound(), this.resetTempPaixing(), this.resetFlyCoinToPlayerArr(), this.hideTrendChangeAnim(), this.mttbeginMsg = "", this.resetPointAni()
        }
        _resetOtherView() {}
        _updateGameView() {
            this._updateRoleFortune(), this._updateBetAmountLevel(), this._updateBetBtnState(), this._updateBetAreaTouchEnabled(), this._updateSelfInfo(), this._updateOtherPlayersInfo(), this._updateAllPlayerWinCount()
        }
        _init() {
            De.addPlist("game_dznz_PLIST", this.game_dznz_PLIST), De.addPlist("cowboy_trend_anim_PLIST", this.cowboy_trend_anim_PLIST), z.SHOP.msgNode.active = !1, z.viewAdaptive.isselfchange = !1, z.viewAdaptive.pokerMasterRoomID = 0, this.pushNotice.setPushNoticeType(ue.PUSH_POKERMASTER), z.native.isFullScreen() && (e.g_fullScreenOffset.x = z.native.isScreenLandscape() ? z.viewAdaptive.IPHONEX_OFFSETY : 0, e.g_fullScreenOffset.y = z.native.isScreenLandscape() ? 0 : z.viewAdaptive.IPHONEX_OFFSETY), this._initConnectionView(), this._initAtlasList(), this._initUI(), this._initTopWayOut(), this._initBtnsEvents(), this.initGuide(), this._initPlayersInfo(), this._initCardInfo(), this._initBetAreas(), this._initCoinPool(), this.initTrendChangeAnim(), this._initTimelineAnims(), this._initBetButtons(), this._adaptiveScreen(), this._initRedPackage(), this._adaptiveBetBtnPanel(), this._addObserver(), this._resetAllUI(), this._initMexicoInfoPanel(), this._initAudio()
        }
        _initConnectionView() {
            if (this._statusController = z.StatusView.getMiniGameStatusController(), this._statusController && this._statusController.haveAssets()) {
                let e = this.node.getSiblingIndex();
                this._statusController.node.setParent(this.node), this._statusController.node.setSiblingIndex(e), this._statusController.showLatency(), this._statusController.node.setSiblingIndex($.LayerZorder.Z_IDX_PANEL_SETTING)
            }
        }
        _initAtlasList() {
            this._atlas_pm_pokermaster = z.resMgr.getSpriteAtlas("zh_CN/game/pokermasterPlist/pokermaster"), this._atlas_hb_humanboy = z.resMgr.getSpriteAtlas("zh_CN/game/humanboyPlist/humanboy")
        }
        getWinSize() {
            return He.instance.getWinSize(this.node)
        }
        isPad() {
            const e = this.getWinSize();
            return e.width > e.height ? e.width / e.height <= 1920 / 1439 : e.height / e.width <= 1920 / 1439
        }
        _initUI() {
            let t = this.node.getChildByName("panel_game"),
                i = this.node.getChildByName("panel_game_x"),
                n = this.node.getChildByName("panel_game_ipad"),
                o = this.node.getChildByName("panel_left_playerlist"),
                a = this.node.getChildByName("panel_right_playerlist");
            if (this._leftPlayerPanel = o, this._rightPlayerPanel = a, z.native.isFullScreen()) {
                if (z.native.isScreenLandscape()) {
                    let t = 0;
                    t += 2 * e.g_fullScreenOffset.x, t += i.addOrGetComponent(A).width, t += o.addOrGetComponent(A).width - 50, t += a.addOrGetComponent(A).width - 50, this._bTrueFullScreen = t <= this.getWinSize().width
                }
            } else {
                let e = this.getWinSize();
                e.width / e.height <= 1920 / 1439 && (this.ispad = !0)
            }
            this._bOpenNarrowAdapter && this._bTrueFullScreen ? (t.removeFromParent(), t.destroy(), n.removeFromParent(), n.destroy(), this._panel_game = i, this.setNodePosByIphoneX(), this.isIphoneX_area = !0, z.resMgr.setSpriteFrame(this._panel_game, "textures/game/pokermaster/Bg_X")) : this.ispad ? (i.removeFromParent(), i.destroy(), t.removeFromParent(), t.destroy(), this._panel_game = n, z.resMgr.setSpriteFrame(this._panel_game, "textures/game/pokermaster/table_ipad")) : (i.removeFromParent(), i.destroy(), n.removeFromParent(), n.destroy(), this._panel_game = t, z.resMgr.setSpriteFrame(this._panel_game, "textures/game/pokermaster/table_normal")), this.updateTipsRefundText(), this._panel_game.active = !0, this._panel_top = this.node.getChildByName("panel_top"), this._panel_card = this.node.getChildByName("panel_card"), this._panel_bottom = this.node.getChildByName("panel_bottom"), this._panel_self = this._panel_bottom.getChildByName("panel_self"), this._panel_bet_btn = this._panel_bottom.getChildByName("panel_bet_btn"), this._img_count_down = this.node.getChildByName("img_count_down"), this._img_count_down.setSiblingIndex($.LayerZorder.Z_IDX_PANEL_COUNT_DOWN), this._img_count_down.active = !1, this._img_bet_clock = this.node.getChildByName("img_bet_clock"), this._img_bet_clock.active = !1;
            let s = this.node.getChildByName("temp_paixing");
            if (this.ispad) {
                let e = 185;
                this._panel_game.setPosition(0, -50), this._panel_card.setPosition(this._panel_card.getPosition().x, this._panel_card.getPosition().y + e), this._img_bet_clock.setPosition(this._img_bet_clock.getPosition().x, this._img_bet_clock.getPosition().y + e), s.setPosition(s.getPosition().x, s.getPosition().y + e);
                let t = this.node.getChildByName("btn_menu");
                t.getComponent(S).top = 68;
                let i = this.node.getChildByName("btn_review");
                i.getComponent(S).top = 68;
                let n = this.node.getChildByName("btnInfo");
                n.getComponent(S).top = 68, z.resMgr.adaptWidget(t), z.resMgr.adaptWidget(i), z.resMgr.adaptWidget(n)
            }
            this.setLeftAndRightList(), this._img_count_down_src_pos = d(this._img_count_down.getPosition()), this._img_bet_clock_src_pos = d(this._img_bet_clock.getPosition())
        }
        _initTopWayOut() {
            let e = this._panel_top.getChildByName("panel_record");
            for (let t = 0; t < e.children.length; ++t) {
                let i = e.getChildByName(`img_dot_${t}`);
                i && (this._vTopWayOutImg.push(i.getComponent(v)), this._vTopWayOutImgSrcPos.push(d(i.getPosition())))
            }
        }
        _initBtnsEvents() {
            {
                let e = this.node.getChildByName("btn_menu");
                e.on("click", (t => {
                    this.isSquintCard || (this._humanboyMenu || (this._humanboyMenu = m(this.prefab_hb_menu).getComponent(ie), this.node.insertChild(this._humanboyMenu.node, $.LayerZorder.Z_IDX_PANEL_SETTING), this._humanboyMenu.getBtnExchange().node.on("click", (e => {
                        this._playSoundEffect($.Sounds().sound_button), this._humanboyMenu.hide(!1), z.dataHandler.getUserData().usdt <= 0 ? z.TT.showMsg(z.config.getStringDataCasino("USDTView_ex_coin_error_0_usdt"), z.Enum.ToastType.ToastTypeError) : this._humanboyExchange ? this._humanboyExchange.openView() : (this._humanboyExchange = m(this.prefab_cb_exchange).getComponent(Y), this.node.insertChild(this._humanboyExchange.node, $.LayerZorder.Z_IDX_PANEL_SETTING))
                    })), this._humanboyMenu.getBtnRule().node.on("click", (e => {
                        var t;
                        (this._playSoundEffect($.Sounds().sound_button), this._humanboyMenu.hide(!1), this._humanboyRule) ? null == (t = this._humanboyRule.getComponent(Me)) || t.open(): (this._humanboyRule = m(this.prefab_cb_rule), this.node.insertChild(this._humanboyRule, $.LayerZorder.Z_IDX_PANEL_SETTING))
                    }), this), this._humanboyMenu.getBtnSoundSetting().node.on("click", (e => {
                        this._playSoundEffect($.Sounds().sound_button), this._humanboyMenu.hide(!1), this._humanboySetting ? (this._humanboySetting.initSwitch(), this._humanboySetting.node.active = !0) : (this._humanboySetting = m(this.prefab_cb_soundSetting).getComponent(K), this.node.insertChild(this._humanboySetting.node, $.LayerZorder.Z_IDX_PANEL_SETTING))
                    })), this._humanboyMenu.getBtnAdvancedSetting().node.on("click", (e => {
                        this._playSoundEffect($.Sounds().sound_button), this._humanboyMenu.hide(!1), this._humanboyAdvancedSetting || (this._humanboyAdvancedSetting = m(this.prefab_hb_advancedSetting).getComponent(le), this.node.insertChild(this._humanboyAdvancedSetting.node, $.LayerZorder.Z_IDX_PANEL_SETTING)), this._humanboyAdvancedSetting.show()
                    })), this._humanboyMenu.getBtnExit().node.on("click", (e => {
                        var t;
                        if (this._playSoundEffect($.Sounds().sound_button), z.appConfig.getGeneralConfig().multiWindowEnabled) return this._humanboyMenu.hide(!1), void z.focusWindow(1);
                        this.callExitProcess(null == (t = this.gameSceneInstance) ? void 0 : t.gameData)
                    }))), Ne.playButtonSound("button_click"), this._humanboyMenu.show(!0), this._humanboyMenu.setMenuPosition(d(e.getPosition().x, e.getPosition().y - e.getComponent(A).height / 2, 0)))
                }), this)
            }
            this._btn_playerList = this._panel_bottom.getChildByName("btn_playerlist"), this._btn_playerList.setSiblingIndex($.LayerZorder.Z_IDX_PANEL_SETTING), this._btn_playerList.on("click", (e => {
                this.isSquintCard || (this._playSoundEffect($.Sounds().sound_button), z.pokerMasterNet.requestPlayerList())
            })), this._btn_review = this.node.getChildByName("btn_review"), this._btn_review.on("click", (e => {
                this.isSquintCard || (this._playSoundEffect($.Sounds().sound_button), this._showReview())
            })), this._panel_top.on(r.EventType.TOUCH_END, (e => {
                this.isSquintCard || (this._playSoundEffect($.Sounds().sound_button), this._showChart())
            })), this.btnInfo.node.on("click", (e => {
                this.showIntroPopup()
            })), this.btnInfo2.node.on("click", (e => {
                this.showIntroPopup()
            }))
        }
        showIntroPopup() {
            var e, t, i;
            this.isSquintCard || (z.miniGamePopupManager.clearPopupContent(null == (e = this.gameSceneInstance) || null == (e = e.room) ? void 0 : e.gameScene), z.miniGamePopupManager.showPopup({
                popupId: we.IntroPokerMaster,
                gameScene: null == (t = this.gameSceneInstance) || null == (t = t.room) ? void 0 : t.gameScene
            }), null == (i = this._humanboyMenu) || null == (i = i.getComponent(ie)) || i.hide(!1))
        }
        callExitProcess(e) {
            var t, i;
            if (!e || e.tRoomData.u32GameID != z.Enum.GameId.PokerMaster) return;
            if (this.isSquintCard) return;
            null == (t = this._humanboyMenu) || t.hide(!1), z.miniGamePopupManager.processClose(null == (i = this.gameSceneInstance) || null == (i = i.room) ? void 0 : i.gameScene);
            let n = q.getPokerMasterRoom().iUsedAutoBetCount,
                o = q.getPokerMasterRoom().iSelectAutoBetCount;
            if (o > 0) {
                const e = this.node.getChildByName("PokerMaster_Dialog");
                if (e) e.active = !0;
                else {
                    let e = m(this.prefab_hb_dialog);
                    e.name = "PokerMaster_Dialog";
                    const t = e.getComponent(be);
                    this.node.insertChild(e, $.LayerZorder.Z_IDX_PANEL_SERVER_TOAST);
                    const i = e.getComponent(oe),
                        a = z.StringTools.formatC(z.config.getStringDataCasino("Cowboy_auto_bet_exit_tips"), o - n, o),
                        s = z.config.getStringDataCasino("CowBoy_btn_desc_exit_game"),
                        r = z.config.getStringDataCasino("CowBoy_btn_desc_resume_game"),
                        _ = e => {
                            z.pokerMasterNet.requestLeaveRoom()
                        },
                        l = e => {
                            null == t || t.close()
                        },
                        h = z.config.getStringDataCasino("MiniGame_AddAutoBet_Text"),
                        d = e => {
                            this.showAutoAddBetList(e)
                        },
                        g = e => {
                            if (i) {
                                let e = q.getPokerMasterRoom().iUsedAutoBetCount,
                                    t = q.getPokerMasterRoom().iSelectAutoBetCount;
                                i.txt_content.string = z.StringTools.calculateAutoWrapString(i.txt_content.node, z.StringTools.formatC(z.config.getStringDataCasino("Cowboy_auto_bet_exit_tips"), t - e, t))
                            }
                            q.getPokerMasterRoom().reachLimitBet && (null == t || t.blockCenterButton())
                        },
                        u = {
                            title: "Notice_Layer_notice_panel_message_button",
                            textContent: "Cowboy_auto_bet_exit_tips",
                            leftBtn: "CowBoy_btn_desc_exit_game",
                            rightBtn: "CowBoy_btn_desc_resume_game",
                            centerBtn: "MiniGame_AddAutoBet_Text",
                            gameID: z.Enum.GameId.PokerMaster,
                            contentArgs: () => {
                                const e = q.getPokerMasterRoom().iUsedAutoBetCount,
                                    t = q.getPokerMasterRoom().iSelectAutoBetCount;
                                return [t - e, t]
                            }
                        },
                        c = ve.onChangeLanguageAutoBetPopup(i, t, u),
                        p = {
                            miniDialog: t,
                            stringContent: a,
                            stringLeftBtn: s,
                            stringRightBtn: r,
                            cbLeftBtn: _,
                            cbRightBtn: l,
                            isReachedMax: q.getPokerMasterRoom().reachLimitBet,
                            legacyDialog: i,
                            isShowBtnCenter: !0,
                            stringCenterButton: h,
                            cbCenterBtn: d,
                            onUpdateContent: g,
                            themeType: null,
                            onChangeLanguage: c
                        };
                    ve.showDialog(p)
                }
            } else {
                let e = this.node.getChildByName("PokerMaster_nodeExit");
                if (e) e.active = !0;
                else {
                    let e = m(this.prefab_cb_exit);
                    const t = e.getComponent(Pe),
                        i = () => {
                            z.roomManager.RequestLeaveRoom(z.Enum.GameId.PokerMaster, z.roomManager.getMiniGameRoomIdTemplate(z.Enum.GameId.PokerMaster), (() => {
                                if (T(t) && z.config.NEEDS_LANDSCAPE()) {
                                    var e;
                                    let t = {
                                        title: "Attention",
                                        txt: "ErrorToast2",
                                        isTwoBtn: !1,
                                        sureCallback: null,
                                        sureLabel: "OK",
                                        isPopupDarkActive: z.appConfig.isLandscapeLayout,
                                        cashGameScene: null == (e = this.gameSceneInstance) || null == (e = e.room) ? void 0 : e.gameScene
                                    };
                                    z.popUp.showMsgI18n(t)
                                }
                            }))
                        };
                    null == t || t.show(i), e.name = "PokerMaster_nodeExit", this.node.insertChild(e, $.LayerZorder.Z_IDX_PANEL_SETTING)
                }
            }
        }
        _onExitRoomSuccess() {
            var e;
            z.appConfig.getGeneralConfig().multiWindowEnabled && (null != (e = this._luckButton) && null != (e = e.turntables_node) && e.active && z.dataHandler.getUserData().removeLuckTurnById(z.roomManager.luckTurntablesRewardId));
            Ne.stopMusic(), Ne.pauseAll(), this._isLeaving = !0, z.appConfig.isLandscapeLayout || z.SwitchLoadingView.show(z.config.getStringData("Loading"))
        }
        showAutoAddBetList(e) {
            this.advanceAutoAddBet ? this.advanceAutoAddBet.setSiblingIndex($.LayerZorder.Z_IDX_ADVANCE_AUTO_ADD_SELECT) : (this.advanceAutoAddBet = m(this.prefab_hb_addAdvancedAuto), this.node.insertChild(this.advanceAutoAddBet, $.LayerZorder.Z_IDX_ADVANCE_AUTO_ADD_SELECT));
            const t = this.advanceAutoAddBet.getComponent(Ae),
                i = new Se(t);
            i.adaptSelectPanelPos(e.btn_center.node), i.showSelectPanel(!0), i.setCountUpdateCallback((() => {
                e.updateCenterButton()
            }))
        }
        onGoldViewShop() {
            this._playSoundEffect($.Sounds().sound_button), z.MessageCenter.send($.LocalMsg().MsgPrefix + $.LocalMsg().RECHARGE)
        }
        _initPlayersInfo() {
            this._txt_self_name = this._panel_self.getChildByName("txt_name").getComponent(B), this._txt_self_gold = this._panel_self.getChildByName("gold").getComponent(Te), this._txt_self_gold.updateVal("", ce.CNY), this._img_self_gold = this._panel_self.getChildByName("gold").getChildByName("own_coin").getComponent(v), this._img_self_head = this._panel_self.getChildByName("img_head").getComponent(v), this._panel_self.getChildByName("btn_recharge").on("click", (e => {
                this._playSoundEffect($.Sounds().sound_button), z.MessageCenter.send($.LocalMsg().MsgPrefix + $.LocalMsg().RECHARGE)
            }));
            {
                let e = this.node.getChildByName("panel_left_playerlist"),
                    t = this.node.getChildByName("panel_right_playerlist"),
                    i = this.ispad ? 5 : 4;
                for (let n = 0; n < i; ++n) {
                    {
                        let t = new ki;
                        if (t.imgBg = e.getChildByName(z.StringTools.formatC("img_bg_%d", n)).getComponent(v), t.nodeHead = e.getChildByName(z.StringTools.formatC("node_head_%d", n)), t.txtCoin = e.getChildByName(z.StringTools.formatC("text_coin_%d", n)).getComponent(B), 0 === n) {
                            t.imgFlag = e.getChildByName("nb_flag").getComponent(v);
                            let i = t.imgFlag.node.getChildByName("nb_flag_desc").getComponent(B);
                            i.string = z.StringTools.formatC(z.config.getStringDataCasino("Cowboy_fuhao_no_text"), 1), this._otherPlayerDescLeft = i
                        }
                        this.ispad && n == i - 1 && (t.imgBg.node.active = !0, t.nodeHead.active = !0, t.txtCoin.node.active = !0), this._vOtherPlayerInfo.push(t)
                    } {
                        let e = new ki;
                        if (e.imgBg = t.getChildByName(z.StringTools.formatC("img_bg_%d", n)).getComponent(v), e.nodeHead = t.getChildByName(z.StringTools.formatC("node_head_%d", n)), e.txtCoin = t.getChildByName(z.StringTools.formatC("text_coin_%d", n)).getComponent(B), 0 === n) {
                            e.imgFlag = t.getChildByName("nb_flag").getComponent(v);
                            let i = e.imgFlag.node.getChildByName("nb_flag_desc").getComponent(B);
                            i.string = z.config.getStringDataCasino("Cowboy_shensuanzi_text"), this._otherPlayerDescRight = i
                        }
                        this.ispad && n == i - 1 && (e.imgBg.node.active = !0, e.nodeHead.active = !0, e.txtCoin.node.active = !0), this._vOtherPlayerInfo.push(e)
                    }
                }
                for (let e = 0; e < this._vOtherPlayerInfo.length; ++e) this._vOtherPlayerInfo[e].imgBg.spriteFrame = this._atlas_hb_humanboy.getSpriteFrame("humanboy_icon_seat_bg_1"), this._vOtherPlayerInfo[e].nodeHead.getChildByName("img").getComponent(v).spriteFrame = null, this._vOtherPlayerInfo[e].txtCoin.node.setSiblingIndex($.LayerZorder.Z_IDX_IMG_HEAD_TXT), this._vOtherPlayerInfo[e].imgFlag && this._vOtherPlayerInfo[e].imgFlag.node.setSiblingIndex($.LayerZorder.Z_IDX_IMG_HEAD_FLAG)
            }
        }
        _updateSelfInfo() {
            z.StringTools.setShrinkString(this._txt_self_name.node, q.getPokerMasterRoom().tSelfPlayer.name, !0);
            let e = q.getPokerMasterRoom().tSelfPlayer.curCoin;
            this.updateUserBalanceStatus(e);
            let t = q.getPokerMasterRoom().tSelfPlayer.head;
            J.setCircleSprite(this._img_self_head.node, t)
        }
        _updateOtherPlayersInfo() {
            for (let e = 0; e < this._vOtherPlayerInfo.length; ++e) {
                let t = q.getPokerMasterRoom().vOtherPlayer;
                if (e < t.length) {
                    let i = t[e];
                    this._vOtherPlayerInfo[e].uid = i.uid;
                    let n = i.head;
                    this._vOtherPlayerInfo[e].imgBg.getComponent(v).spriteFrame = this._atlas_hb_humanboy.getSpriteFrame("humanboy_icon_seat_bg_1"), this._vOtherPlayerInfo[e].nodeHead.active = !0, J.setCircleSprite(this._vOtherPlayerInfo[e].nodeHead.getChildByName("img"), n, i.plat, !0, j.IRREGULAR, !0, !0, !1), this._vOtherPlayerInfo[e].txtCoin.string = q.getPokerMasterRoom().transGoldShortString(i.curCoin, 3), this._vOtherPlayerInfo[e].imgFlag && (this._vOtherPlayerInfo[e].imgFlag.node.active = !0)
                } else {
                    this._vOtherPlayerInfo[e].uid = 0, this._vOtherPlayerInfo[e].imgBg.getComponent(v).spriteFrame = this._atlas_hb_humanboy.getSpriteFrame("humanboy_icon_seat_bg_2"), this._vOtherPlayerInfo[e].nodeHead.active = !1, this._vOtherPlayerInfo[e].txtCoin.string = "", this._vOtherPlayerInfo[e].imgFlag && (this._vOtherPlayerInfo[e].imgFlag.node.active = !1);
                    let t = "win_player_win_count_" + this._vOtherPlayerInfo[e].nodeHead.uuid,
                        i = P(t, this.node);
                    i && T(i, !0) && (this.node.removeChild(i), i.destroy())
                }
            }
        }
        updateUserBalanceStatus(e) {
            z.dataHandler.getUserData().minigame_coin = e, this._txt_self_gold.string = q.getPokerMasterRoom().transGoldShortString(e, 4, z.appConfig.enableUserBalanceShortCoin())
        }
        _updatePlayerGold(e) {
            let t = "";
            if (e === z.dataHandler.getMiniGameUserId()) {
                let e = q.getPokerMasterRoom().tSelfPlayer.curCoin;
                t = q.getPokerMasterRoom().transGoldShortString(e, 3), this.updateUserBalanceStatus(e)
            }
            for (let i = 0; i < this._vOtherPlayerInfo.length; ++i)
                if (this._vOtherPlayerInfo[i].uid === e)
                    if (e === z.dataHandler.getMiniGameUserId()) this._vOtherPlayerInfo[i].txtCoin.string = t;
                    else {
                        let t = q.getPokerMasterRoom().getOtherPlayerByUid(e);
                        if (t) {
                            let e = t.curCoin;
                            this._vOtherPlayerInfo[i].txtCoin.string = q.getPokerMasterRoom().transGoldShortString(e, 3)
                        }
                    }
        }
        _updateAllPlayerGold() {
            let e = q.getPokerMasterRoom().vPlayerSettles;
            for (let t = 0; t < e.length; ++t) this._updatePlayerGold(e[t].uid)
        }
        _updatePlayerWinCount(e, t = !1) {
            let i = this._getPlayerHeadNodesByUid(e);
            if (0 != i.length)
                for (let n = 0; n < i.length; ++n) {
                    let o = i[n];
                    if (this._vOtherPlayerInfo[0].nodeHead === o || this._vOtherPlayerInfo[1].nodeHead === o) continue;
                    let a = "win_player_win_count_" + o.uuid,
                        s = P(a, this.node);
                    s && T(s, !0) && (this.node.removeChild(s), s.destroy());
                    let r = q.getPokerMasterRoom().getPlayerKeepWinCountByUid(e);
                    if (r >= 3) {
                        r = r > 10 ? 11 : r;
                        let e = o === this._img_self_head.node ? 40 : 70,
                            i = d(g.ZERO);
                        o.getComponent(A).convertToWorldSpaceAR(d(0, e, 0), i);
                        const n = m(this.winCountPrefab);
                        this.node.addChild(n), n.setSiblingIndex($.LayerZorder.Z_IDX_IMG_WIN_COUNT), n.active = !0, n.name = a, n.setPosition(n.parent.convertToNodeSpaceAR(i));
                        const s = n.getComponentInChildren(Le);
                        if (s ? s.setString(z.config.getStringData(z.StringTools.formatC("Wins_streak_%d", r))) : M("[CowboyScene] prefab winCountPrefab is missing GroupLabel"), t) {
                            let e = new g(n.position),
                                t = new g(e),
                                i = new g(g.ZERO);
                            if (o.parent.convertToWorldSpaceAR(o.position, i), i.x < C.getVisibleSize().width / 2) {
                                let e = (0 - n.parent.getComponent(A).anchorX) * n.parent.getComponent(A).width;
                                t.x = e - n.getComponent(A).width
                            } else {
                                let e = (1 - n.parent.getComponent(A).anchorX) * n.parent.getComponent(A).width;
                                t.x = e + n.getComponent(A).width
                            }
                            n.setPosition(t), Fe.moveTo(n, .8, e, "backOut")
                        }
                    }
                }
        }
        _updateAllPlayerWinCount(e = !1) {
            this._updatePlayerWinCount(z.dataHandler.getMiniGameUserId(), e);
            for (let t = 0; t < this._vOtherPlayerInfo.length; ++t) {
                let i = q.getPokerMasterRoom().vOtherPlayer;
                t < i.length && this._updatePlayerWinCount(i[t].uid, e)
            }
        }
        _initCardInfo() {
            let e = this._panel_card.getChildByName("node_card");
            for (let t = 0; t < e.children.length; ++t) {
                let i = e.getChildByName(`left_card_${t}`);
                if (i) {
                    let e = V.create(this._strCardFacePath, this._strCardBackPath);
                    e.ResetFromNode(i), this._vLeftHandCards.push(e), this._vLeftHandCardsSrcPos.push(d(e.node.position))
                }
                let n = e.getChildByName(`right_card_${t}`);
                if (n) {
                    let e = V.create(this._strCardFacePath, this._strCardBackPath);
                    e.ResetFromNode(n), this._vRightHandCards.push(e), this._vRightHandCardsSrcPos.push(d(e.node.position))
                }
                let o = e.getChildByName(`pub_card_${t}`);
                if (o) {
                    let e = V.create(this._strCardFacePath, this._strCardBackPath);
                    e.ResetFromNode(o), this._vPublicHoleCards.push(e), this._vPublicHoleCardsSrcPos.push(d(e.node.position))
                }
            }
            this._img_left_card_type = e.getChildByName("img_left_card_type").getComponent(v), this._img_right_card_type = e.getChildByName("img_right_card_type").getComponent(v), this._img_left_card_type_bg = e.getChildByName("img_left_card_type_bg").getComponent(v), this._img_right_card_type_bg = e.getChildByName("img_right_card_type_bg").getComponent(v);
            this._img_left_card_type.node.setSiblingIndex(-1), this._img_right_card_type.node.setSiblingIndex(-1), this._img_left_card_type_bg.node.setSiblingIndex(-1), this._img_right_card_type_bg.node.setSiblingIndex(-1);
            const t = m(this.resultCardTypePrefab);
            this._img_left_card_type_bg.node.addChild(t), this._left_card_type_win_node = t.getChildByName("win_card_type").getComponent(Le), this._left_card_type_lose_node = t.getChildByName("lose_card_type").getComponent(Le), this._left_card_lead_node = t.getChildByName("lead_card_type").getComponent(Le), this._left_card_lead_node.setString(z.config.getStringData("PokerMasterLead"));
            const i = m(this.resultCardTypePrefab);
            this._img_right_card_type_bg.node.addChild(i), this._right_card_type_win_node = i.getChildByName("win_card_type").getComponent(Le), this._right_card_type_lose_node = i.getChildByName("lose_card_type").getComponent(Le), this._right_card_lead_node = i.getChildByName("lead_card_type").getComponent(Le), this._right_card_lead_node.setString(z.config.getStringData("PokerMasterLead"))
        }
        _setAllCardsVisible(e) {
            for (let t = 0; t < this._vLeftHandCards.length; ++t) w.stopAllByTarget(this._vLeftHandCards[t].node), this._vLeftHandCards[t].node.active = e;
            for (let t = 0; t < this._vRightHandCards.length; ++t) w.stopAllByTarget(this._vRightHandCards[t].node), this._vRightHandCards[t].node.active = e;
            for (let t = 0; t < this._vPublicHoleCards.length; ++t) w.stopAllByTarget(this._vPublicHoleCards[t].node), this._vPublicHoleCards[t].node.active = e
        }
        _setAllCardsFace(e) {
            this._setAllHandsCardsFace(e), this._setAllPublicHoleCardsFace(e, !1)
        }
        _setAllHandsCardsFace(e) {
            let t = q.getPokerMasterRoom().vLeftHandCards,
                i = q.getPokerMasterRoom().vRightHandCards;
            for (let i = 0; i < this._vLeftHandCards.length; ++i) this._vLeftHandCards[i].Gray(!1), i < t.length ? (this._vLeftHandCards[i].SetContent(t[i].number, t[i].suit), this._vLeftHandCards[i].SetFace(e)) : this._vLeftHandCards[i].SetFace(!1);
            for (let t = 0; t < this._vRightHandCards.length; ++t) this._vRightHandCards[t].Gray(!1), t < i.length ? (this._vRightHandCards[t].SetContent(i[t].number, i[t].suit), this._vRightHandCards[t].SetFace(e)) : this._vRightHandCards[t].SetFace(!1)
        }
        _setAllPublicHoleCardsFace(e, t) {
            let i = q.getPokerMasterRoom().vPublicHoleCards;
            for (let n = 0; n < this._vPublicHoleCards.length; ++n) this._vPublicHoleCards[n].Gray(!1), n < i.length ? (this._vPublicHoleCards[n].SetContent(i[n].number, i[n].suit), e ? t && n === this._vPublicHoleCards.length - 1 ? this._vPublicHoleCards[n].SetFace(!1) : this._vPublicHoleCards[n].SetFace(!0) : this._vPublicHoleCards[n].SetFace(!1)) : this._vPublicHoleCards[n].SetFace(!1)
        }
        _initSquintCardInfo() {
            this._squintCard && (this._squintCard.node.destroy(), this._squintCard = void 0), this._squintCard = m(this.prefab_pm_squid_card).getComponent(he), this.node.addChild(this._squintCard.node), this._squintCard.node.setSiblingIndex($.LayerZorder.Z_IDX_PANEL_SQUINT)
        }
        _resetSquintCardInfo() {
            this.isSquintCard = !1, this._squintCard && this._squintCard.hide()
        }
        _initBetAreas() {
            let e = [];
            e.push(Ze.pokermaster_proto.BetZoneOption.FISHER_WIN), e.push(Ze.pokermaster_proto.BetZoneOption.SHARK_WIN), e.push(Ze.pokermaster_proto.BetZoneOption.FIVE_NONE_1DUI), e.push(Ze.pokermaster_proto.BetZoneOption.FIVE_2DUI), e.push(Ze.pokermaster_proto.BetZoneOption.FIVE_SAN_SHUN_TONG), e.push(Ze.pokermaster_proto.BetZoneOption.FIVE_GOURD), e.push(Ze.pokermaster_proto.BetZoneOption.FIVE_KING_TONG_HUA_SHUN_4);
            let t = this._panel_game.getChildByName("panel_area"),
                i = this._panel_game.getChildByName("panel_coin"),
                n = this._panel_game.getChildByName("panel_txt"),
                o = this._panel_game.getChildByName("panel_way_out");
            for (let a = 0; a < e.length; ++a) {
                let s = new Ri;
                if (s.zoneIndex = a, s.zoneOption = e[a], s.panelArea = t.getChildByName(`area_${a}`), s.panelCoin = i.getChildByName(`coin_${a}`), s.txtOdds = n.getChildByName(`txt_bet_odd_${a}`).getComponent(B), s.txtSelfBetNum = n.getChildByName(`txt_self_bet_num_${a}`).getComponent(B), s.txtTotalBetNum = n.getChildByName(`txt_total_bet_num_${a}`).getComponent(B), s.txtTotalBetNum.isBold = !0, s.txtSelfBetNum.isBold = !0, s.txtSelfBetNum.color = new k(232, 201, 147), s.panelArea.on(r.EventType.TOUCH_END, (e => {
                        this._onClickAreaCoinPanel(s.zoneIndex)
                    })), s.panelWayOut = o.getChildByName(`way_out_${a}`), s.panelWayOut) {
                    switch (s.panelWayOut.on(r.EventType.TOUCH_END, (e => {
                            this._showChart()
                        })), s.zoneOption) {
                        case Ze.pokermaster_proto.BetZoneOption.FIVE_NONE_1DUI:
                        case Ze.pokermaster_proto.BetZoneOption.FIVE_2DUI:
                        case Ze.pokermaster_proto.BetZoneOption.FIVE_SAN_SHUN_TONG:
                            s.wayOutStyle = Q.eGameboyWayOutStyle.GWS_IMG;
                            break;
                        case Ze.pokermaster_proto.BetZoneOption.FIVE_GOURD:
                            s.wayOutStyle = Q.eGameboyWayOutStyle.GWS_TXT, s.wayOutLoseLimitCount = 200;
                            break;
                        case Ze.pokermaster_proto.BetZoneOption.FIVE_KING_TONG_HUA_SHUN_4:
                            s.wayOutStyle = Q.eGameboyWayOutStyle.GWS_TXT, s.wayOutLoseLimitCount = 300
                    }
                    let e = s.panelWayOut.children.length;
                    for (let t = 0; t < e; ++t) {
                        let e = s.panelWayOut.getChildByName(`img_${t}`);
                        e && (e.active = !1, s.wayOutImgArray.push(e.getComponent(v)), s.wayOutImgSrcPosArray.push(d(e.position)))
                    }
                    let t = n.getChildByName(`txt_way_out_${a}`);
                    if (t) {
                        let e = (new r).addComponent(E);
                        e.fontSize = t.getComponent(B).fontSize, e.node.addOrGetComponent(A).setAnchorPoint(t.addOrGetComponent(A).anchorPoint), e.node.addOrGetComponent(A).setContentSize(t.addOrGetComponent(A).contentSize);
                        let i = n.addOrGetComponent(A).convertToNodeSpaceAR(t.parent.addOrGetComponent(A).convertToWorldSpaceAR(t.getPosition()));
                        e.node.setPosition(i), e.node.active = !1, e.handleTouchEvent = !1, e.verticalAlign = E.VerticalAlign.CENTER, n.addChild(e.node), s.rtxtWayOut = e, z.tools.isValidNode(t) && (t.removeFromParent(), t.destroy())
                    }
                }
                this._vAreasInfo.push(s)
            }
        }
        _updateBetAreaTouchEnabled() {
            for (let e = 0; e < this._vAreasInfo.length; ++e) {
                let t = this._vAreasInfo[e],
                    i = !0;
                i = i && q.getPokerMasterRoom().eCurState === Ze.pokermaster_proto.RoundState.BET, i = i && this._getLeftTime() > 0, i ? t.panelArea.resumeSystemEvents(!1) : t.panelArea.pauseSystemEvents(!1)
            }
        }
        _resetAllBetAreas() {
            for (let e = 0; e < this._vAreasInfo.length; ++e) this._resetBetArea(this._vAreasInfo[e].zoneOption)
        }
        _resetBetArea(e) {
            this._updateBetAreaBetsNum(e, 0, 0)
        }
        _updateBetAreaBetsNum(e, t = -1, i = -1) {
            let n = this._getAreaIdxByBetOption(e);
            if (n < 0 || n >= this._vAreasInfo.length) return;
            let o = 0,
                a = 0,
                s = q.getPokerMasterRoom().mapZoneData.get(e);
            if (s && (o = s.totalBet, a = s.selfBet), t = t < 0 ? o : t, (i = i < 0 ? a : i) > 0) {
                let e = q.getPokerMasterRoom().transGoldShortString(i, 5);
                this._vAreasInfo[n].txtSelfBetNum.string = e
            } else this._vAreasInfo[n].txtSelfBetNum.string = "";
            let r = q.getPokerMasterRoom().transGoldShortString(t, 5);
            this._vAreasInfo[n].txtTotalBetNum.string = r
        }
        _initCoinPool() {
            this._nodeCoinPool = new r, this._nodeCoinPool.name = "_CoinPool_", this._nodeCoinPool.addOrGetComponent(A).setContentSize(this.getWinSize()), this._nodeCoinPool.addOrGetComponent(A).setAnchorPoint(_(.5, .5)), this.node.insertChild(this._nodeCoinPool, $.LayerZorder.Z_IDX_COIN_POOL);
            for (let e = 0; e < this._vAreasInfo.length; ++e) {
                let t = this._vAreasInfo[e].zoneOption,
                    i = this._mapCoinQueue.get(t);
                i || (i = new U, this._mapCoinQueue.add(t, i))
            }
        }
        _resetAllBetAreaCoins() {
            this._mapCoinQueue.forEach(((e, t) => {
                this._resetBetAreaCoins(e)
            })), this._llCoinPoolZOrderCount = 0, this._vCoinOptimizationDeque.clear()
        }
        _clearCurrentAreaCoinsBeyondFly() {
            this._mapCoinQueue.forEach(((e, t) => {
                this._resetBetAreaCoins(e)
            })), this._llCoinPoolZOrderCount = 0
        }
        _resetBetAreaCoins(e) {
            let t = this._mapCoinQueue.get(e);
            if (t)
                for (let e = 0; e < t.size(); ++e) {
                    let i = t.at(e);
                    this._resetCoin(i)
                }
        }
        _resetCoin(e) {
            return e && T(e, !0) ? (e.node.setSiblingIndex(0), e.node.addOrGetComponent(R).opacity = 255, e.node.angle = 0, e.node.setPosition(g.ZERO), w.stopAllByTarget(e.node), e.node.active = !1, e.txtBetNode.addOrGetComponent(R).opacity = 255, e.txtBetNode.active = !0, e.btn.enabled = !1, e.imgMask.node.active = !1, e) : null
        }
        _regenerateAllBetAreaCoinsPos() {
            this._mapCoinQueue.forEach(((e, t) => {
                this._regenerateAreaCoinsPos(e)
            }))
        }
        _regenerateAreaCoinsPos(e) {
            let t = this._mapCoinQueue.get(e);
            if (t) {
                let i = this._getAreaIdxByBetOption(e);
                for (let e = 0; e < t.size(); ++e) {
                    let n = t.at(e);
                    if (!n.node.active) continue;
                    let o = this._getCoinRandomPos(n.node, i, !0);
                    n.node.parent.convertToNodeSpaceAR(o, o), n.node.setPosition(o)
                }
            }
        }
        _recoverAreasCoin(e) {
            q.getPokerMasterRoom().mapZoneData.forEach(((t, i) => {
                let n = this._getAreaIdxByBetOption(t);
                if (n < 0 || n >= this._vAreasInfo.length) return "continue";
                let o = i.vTotalBetDetail;
                for (let t = 0; t < o.length; ++t) e && this._showCoinAnim(n, o[t], 0, !1, !1, !1);
                this._updateBetAreaBetsNum(t)
            }))
        }
        _createFlyCoin(e) {
            let t = m(this.prefab_hb_betCoin);
            t.setSiblingIndex(0), t.addOrGetComponent(A).setAnchorPoint(.5, .5), t.setScale(d(this._fFlyCoinScaleRate, this._fFlyCoinScaleRate, this._fFlyCoinScaleRate)), t.setPosition(g.ZERO);
            let i = t.getComponent(ae);
            return i.setShape(this._getBetCoinShapeByAmount(e)), i.setTxtNum(z.StringTools.serverGoldToShowNumber(e)), i.btn.enabled = !1, i
        }
        _getBetCoinShapeByAmount(e) {
            return z.StringTools.clientGoldByServer(e) < q.getPokerMasterRoom().llCoinUICritical ? ae.eHumanboyBetCoinShape.SHAPE_COIN : ae.eHumanboyBetCoinShape.SHAPE_BLOCK
        }
        _getCoinRandomPos(e, t, i) {
            if (!e || t < 0 || t >= this._vAreasInfo.length) return d(g.ZERO);
            let n = this._vAreasInfo[t].panelCoin.getContentSize(),
                o = N(I.ZERO);
            o.width = e.getComponent(A).width * e.getScale().x, o.height = e.getComponent(A).height * e.getScale().y;
            let a = n.width / 2,
                s = n.height / 2,
                r = Math.floor(a - o.width / 2),
                _ = Math.floor(s - o.height / 2),
                l = z.StringTools.randomRange(0, 2) < 1 ? -1 : 1,
                h = z.StringTools.randomRange(0, 2) < 1 ? -1 : 1,
                u = l * z.StringTools.randomRange(0, r),
                c = h * z.StringTools.randomRange(0, _),
                m = d(u, c, 0);
            return i && this._vAreasInfo[t].panelCoin.convertToWorldSpaceAR(m, m), m
        }
        _getCoinFromPool(e, t) {
            let i = null,
                n = this._mapCoinQueue.get(e);
            return n && (n.size() < this._nAreaCoinLimitCountMin ? (i = this._createFlyCoin(t), i.node.setSiblingIndex(++this._llCoinPoolZOrderCount), i.node.setPosition(g.ZERO), this._nodeCoinPool.addChild(i.node), n.push_back(i)) : (i = n.pop_front(), i = this._resetCoin(i), i && (i.node.setSiblingIndex(++this._llCoinPoolZOrderCount), i.setShape(this._getBetCoinShapeByAmount(t)), i.setTxtNum(z.StringTools.serverGoldToShowNumber(t)), n.push_back(i)))), i
        }
        _getFreeCoinCountFromPool(e) {
            let t = 0,
                i = this._mapCoinQueue.get(e);
            if (i)
                for (let e = 0; e < i.size(); ++e) i.at(e).node.active || ++t;
            return t
        }
        _updateCoinOptimization(e) {
            let t = this._vCoinOptimizationDeque.size();
            if (!(t <= 0))
                if (q.getPokerMasterRoom().eCurState === Ze.pokermaster_proto.RoundState.BET && this._getLeftTime() >= 0) {
                    let e = 0;
                    this._getLeftTime() > 1 ? (e = t / f.getFrameRate(), e = Math.ceil(e)) : e = t;
                    for (let t = 0; t < e; ++t) {
                        let e = this._vCoinOptimizationDeque.pop_front();
                        this._showCoinAnim(e.nAreaIdx, e.nGold, e.nUid, e.bAnim, e.bHeadAnim, e.bPlaySound), this._updateBetAreaBetsNum(this._getBetOptionByAreaIdx(e.nAreaIdx)), this._updatePlayerGold(e.nUid), q.getPokerMasterRoom().tSelfPlayer.uid === e.nUid && this._updateBetBtnState()
                    }
                } else {
                    for (let e = 0; e < t; ++e) {
                        let e = this._vCoinOptimizationDeque.pop_front();
                        this._updateBetAreaBetsNum(this._getBetOptionByAreaIdx(e.nAreaIdx)), this._updatePlayerGold(e.nUid), q.getPokerMasterRoom().tSelfPlayer.uid === e.nUid && this._updateBetBtnState()
                    }
                    this._vCoinOptimizationDeque.clear()
                }
        }
        _initBetButtons() {
            for (let e = 0; e < this._nBetBtnNum; ++e) {
                let t = this._panel_bet_btn.getChildByName(`btn_bet_${e}`).getComponent(ae);
                t.node.setScale(d(this._fBetBtnSrcScaleRate, this._fBetBtnSrcScaleRate, this._fBetBtnSrcScaleRate)), t.node.on("click", (t => {
                    this._playSoundEffect($.Sounds().sound_button), this._setBetBtnSelected(e)
                })), this._vBetButtons.push(t)
            }
            this._humanboyAdvancedAuto || (this._humanboyAdvancedAuto = m(this.prefab_hb_advancedAuto).getComponent(_e), this.node.insertChild(this._humanboyAdvancedAuto.node, $.LayerZorder.Z_IDX_PANEL_ADVANCE_AUTO_SELECT)), this._btn_betAuto = this._panel_bet_btn.getChildByName("btn_bet_auto").getComponent(s), this._btn_betAuto.node.on("click", (e => {
                switch (this._playSoundEffect($.Sounds().sound_button), this._eAutoBtnStyle) {
                    case Q.eGameboyAutoBtnStyle.GAB_STYLE_NORMAL:
                        z.pokerMasterNet.requestAutoBet();
                        break;
                    case Q.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE:
                        this._humanboyAdvancedAuto.adaptSelectPanelPos(this._btn_betAuto.node), this._humanboyAdvancedAuto.showSelectPanel(!0);
                        break;
                    case Q.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING: {
                        let e = q.getPokerMasterRoom().iUsedAutoBetCount,
                            t = q.getPokerMasterRoom().iSelectAutoBetCount,
                            i = m(this.prefab_hb_dialog);
                        i.name = "GAB_STYLE_ADVANCE_USING_tips";
                        const n = i.getComponent(be);
                        this.node.insertChild(i, $.LayerZorder.Z_IDX_PANEL_SERVER_TOAST);
                        const o = i.getComponent(oe),
                            a = z.StringTools.formatC(z.config.getStringDataCasino("Cowboy_auto_bet_stop_tips"), t - e, t),
                            s = z.config.getStringDataCasino("CowBoy_btn_desc_stop_auto_bet"),
                            r = z.config.getStringDataCasino("CowBoy_btn_desc_resume_auto_bet"),
                            _ = e => {
                                z.pokerMasterNet.reqCancelAdvanceAutoBet()
                            },
                            l = e => {
                                null == n || n.close
                            },
                            h = z.config.getStringDataCasino("MiniGame_AddAutoBet_Text"),
                            d = e => {
                                this.showAutoAddBetList(e)
                            },
                            g = e => {
                                if (o) {
                                    let e = q.getPokerMasterRoom().iUsedAutoBetCount,
                                        t = q.getPokerMasterRoom().iSelectAutoBetCount;
                                    o.txt_content.string = z.StringTools.calculateAutoWrapString(o.txt_content.node, z.StringTools.formatC(z.config.getStringDataCasino("Cowboy_auto_bet_stop_tips"), t - e, t))
                                }
                                q.getPokerMasterRoom().reachLimitBet && (null == n || n.blockCenterButton())
                            },
                            u = {
                                title: "Notice_Layer_notice_panel_message_button",
                                textContent: "Cowboy_auto_bet_stop_tips",
                                leftBtn: "CowBoy_btn_desc_stop_auto_bet",
                                rightBtn: "CowBoy_btn_desc_resume_auto_bet",
                                centerBtn: "MiniGame_AddAutoBet_Text",
                                gameID: z.Enum.GameId.PokerMaster,
                                contentArgs: () => {
                                    const e = q.getPokerMasterRoom().iUsedAutoBetCount,
                                        t = q.getPokerMasterRoom().iSelectAutoBetCount;
                                    return [t - e, t]
                                }
                            },
                            c = ve.onChangeLanguageAutoBetPopup(o, n, u),
                            p = {
                                miniDialog: n,
                                stringContent: a,
                                stringLeftBtn: s,
                                stringRightBtn: r,
                                cbLeftBtn: _,
                                cbRightBtn: l,
                                isReachedMax: q.getPokerMasterRoom().reachLimitBet,
                                legacyDialog: o,
                                isShowBtnCenter: !0,
                                stringCenterButton: h,
                                cbCenterBtn: d,
                                onUpdateContent: g,
                                themeType: null,
                                onChangeLanguage: c
                            };
                        ve.showDialog(p)
                    }
                }
            })), this._autoBetUsingNode = P("is_using", this._btn_betAuto.node), this._autoBetUsingNode || O("[CowboyScene] btnBetAuto is missing child node"), this._btn_betClean = this._panel_bet_btn.getChildByName("btn_bet_clean").getComponent(s), this._btn_betClean.node.on("click", (e => {
                this._clearCurrentAreaCoinsBeyondFly()
            })), this._setBetBtnSelected(0, !1)
        }
        _initMexicoInfoPanel() {
            if (!z.appConfig.getGameConfig().miniGameConfig.showMexicoDisclaimerAndCurrencyConversion || z.dataHandler.getUserData().getCountryCurrency().type !== ce.MXN) return;
            const e = new r("mexico_panel"),
                t = this._panel_game.scale.x;
            e.addOrGetComponent(A).width = this._panel_game.addOrGetComponent(A).width * t, e.addOrGetComponent(A).height = this._panel_game.addOrGetComponent(A).height * t, e.position = this._panel_game.position, this.node.addChild(e, $.LayerZorder.Z_IDX_PANEL_SETTING);
            const i = m(this.mxnCurrencyInfo_prefab);
            e.addChild(i);
            const n = i.getComponent(S);
            let o = !1;
            const a = this._leftPlayerPanel.getComponent(A).width,
                s = this._rightPlayerPanel.getComponent(A).width,
                _ = a + e.getComponent(A).width + s;
            o = Math.abs(this._leftPlayerPanel.position.x) + Math.abs(this._rightPlayerPanel.position.x) + .5 * a + .5 * s > _ + 100, o ? (n.top = 40, n.right = -35) : (n.top = -40, n.right = 30), n.updateAlignment()
        }
        _initAudio() {
            z.tools.isSoundEffectOpen() ? Ne.playMusic($.Sounds().sound_bgm, !0) : (z.tools.SetMiniGameMusicOn(!1), z.tools.SetMiniGameSoundEffectOn(!1))
        }
        _updateAutoBetBtnStatus() {
            switch (this._eAutoBtnStyle) {
                case Q.eGameboyAutoBtnStyle.GAB_STYLE_NORMAL:
                    if (q.getPokerMasterRoom().eCurState === Ze.pokermaster_proto.RoundState.BET && this._getLeftTime() > 0)
                        if (q.getPokerMasterRoom().bHasBetInCurRound) this._btn_betAuto.interactable = !1;
                        else {
                            let e = q.getPokerMasterRoom().bCanAuto;
                            this._btn_betAuto.interactable = e
                        }
                    else this._btn_betAuto.interactable = !1;
                    break;
                case Q.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE:
                    if (q.getPokerMasterRoom().bHasBetInCurRound) this._btn_betAuto.interactable = !0;
                    else {
                        let e = q.getPokerMasterRoom().bCanAuto;
                        this._btn_betAuto.interactable = e
                    }
                    break;
                case Q.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING:
                    this._btn_betAuto.interactable = !0
            }
        }
        _updateCleanBtnStatus() {
            let e = !1;
            q.getPokerMasterRoom().eCurState === Ze.pokermaster_proto.RoundState.BET && this._getLeftTime() > 0 && (e = !0), this._btn_betClean.getComponent(s).interactable = e
        }
        _setBetBtnSelected(e, t = !0) {
            if (e < 0 || e >= this._nBetBtnNum) return;
            this._resetAllBetBtn(!0), this._updateBetBtnState();
            let i = q.getPokerMasterRoom().vBetCoinOption,
                n = q.getPokerMasterRoom().tSelfPlayer.curCoin;
            if (e >= 0 && e < this._nBetBtnNum)
                if (t) {
                    let t = 0;
                    e < i.length && (t = i[e]), n > 0 && n >= t && (this._nCurBetBtnIndex = e, this._vBetButtons[e].node.setScale(d(this._fBetBtnTarScaleRate, this._fBetBtnTarScaleRate, this._fBetBtnTarScaleRate)))
                } else this._nCurBetBtnIndex = e, this._vBetButtons[e].node.setScale(d(this._fBetBtnTarScaleRate, this._fBetBtnTarScaleRate, this._fBetBtnTarScaleRate))
        }
        _resetBetBtn(e, t) {
            e < 0 || e >= this._vBetButtons.length || (this._vBetButtons[e].btn.enabled = t, this._vBetButtons[e].node.setScale(d(this._fBetBtnSrcScaleRate, this._fBetBtnSrcScaleRate, this._fBetBtnSrcScaleRate)), this._vBetButtons[e].txtBetNode.active = !0, this._vBetButtons[e].imgMask.node.active = !1, this._nCurBetBtnIndex === e && (this._nCurBetBtnIndex = -1))
        }
        _resetAllBetBtn(e) {
            for (let t = 0; t < this._vBetButtons.length; ++t) this._resetBetBtn(t, e)
        }
        _updateBetBtnState(e = !0) {
            let t = q.getPokerMasterRoom().vBetCoinOption,
                i = q.getPokerMasterRoom().tSelfPlayer.curCoin;
            for (let e = 0; e < t.length; ++e) i >= t[e] ? (this._vBetButtons[e].btn.enabled = !0, this._vBetButtons[e].btn.interactable = !0, this._vBetButtons[e].setTxtColor(ae.eHumanboyBetCoinTxtColor.YELLOW)) : (this._vBetButtons[e].btn.enabled = !1, this._vBetButtons[e].btn.interactable = !1, this._vBetButtons[e].setTxtColor(ae.eHumanboyBetCoinTxtColor.GRAY));
            let n = q.getPokerMasterRoom().eCurState === Ze.pokermaster_proto.RoundState.BET && this._getLeftTime() > 0;
            for (let e = 0; e < this._vBetButtons.length; ++e) this._vBetButtons[e].imgMask.node.active = !n, this._vBetButtons[e].imgMask.getComponent(L).enabled = !0;
            this._updateAutoBetBtnStatus(), this._updateCleanBtnStatus()
        }
        _setAutoBetBtnStytle(e) {
            switch (this._humanboyAdvancedAuto && (this._humanboyAdvancedAuto.hideAdvanceAutoTips(), this._humanboyAdvancedAuto.hideAdvanceAutoCount(), this._humanboyAdvancedAuto.hideSelectPanel(!1)), this._eAutoBtnStyle = e, this._eAutoBtnStyle) {
                case Q.eGameboyAutoBtnStyle.GAB_STYLE_NONE:
                    break;
                case Q.eGameboyAutoBtnStyle.GAB_STYLE_NORMAL:
                    De.loadButtonTextureByAutoAtlas(this.cowboy_PLIST, this._btn_betAuto.node, "autobet_normal", "autobet_normal", "autobet_normal", "autobet_gray", this.mappingPlist), this._autoBetUsingNode && (this._autoBetUsingNode.active = !1);
                    break;
                case Q.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE:
                    De.loadButtonTextureByAutoAtlas(this.cowboy_PLIST, this._btn_betAuto.node, "autobet_block_normal", "autobet_block_normal", "autobet_block_normal", "autobet_block_gray", this.mappingPlist), this._autoBetUsingNode && (this._autoBetUsingNode.active = !1);
                    break;
                case Q.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING:
                    De.loadButtonTextureByAutoAtlas(this.cowboy_PLIST, this._btn_betAuto.node, "autobet_block_normal", "autobet_block_normal", "autobet_block_normal", "autobet_block_gray", this.mappingPlist), this._autoBetUsingNode && (this._autoBetUsingNode.active = !0), this._humanboyAdvancedAuto && (this._humanboyAdvancedAuto.adaptAdvanceAutoCountPos(this._btn_betAuto.node), this._humanboyAdvancedAuto.showAdvanceAutoCount())
            }
            this._btn_betAuto.getComponent(v).type = v.Type.SIMPLE
        }
        _getAutoBetBtnStytle() {
            return this._eAutoBtnStyle
        }
        _initTimelineAnims() {
            this._nodeAnim = new r, this._nodeAnim.addOrGetComponent(A).setContentSize(this.getWinSize()), this._nodeAnim.getComponent(A).setAnchorPoint(_(.5, .5)), this._nodeAnim.setPosition(g.ZERO), this.node.insertChild(this._nodeAnim, $.LayerZorder.Z_IDX_ANIM_NODE), this._winFlagNodes = [];
            for (let e = 0; e < this._vAreasInfo.length; ++e) {
                let t = this._vAreasInfo[e].zoneOption;
                {
                    let i = m(this.prefab_hb_win_flag);
                    i.active = !1, this._nodeAnim.insertChild(i, $.LayerZorder.Z_IDX_ANIM_NODE_1), this._mapAnimWinFlags.add(t, i.getComponent(D));
                    let n = d(g.ZERO);
                    this._vAreasInfo[e].panelCoin.convertToWorldSpaceAR(d(0, -170, 0), n), i.parent.convertToNodeSpaceAR(n, n), i.setPosition(n);
                    const o = i.getChildByName("win_29");
                    if (o) {
                        this._winFlagNodes.push(o);
                        [z.Enum.LANGUAGE_TYPE.en_US, z.Enum.LANGUAGE_TYPE.zh_TW, ...z.appConfig.getGameConfig().miniGameConfig.availableLangResForMiniGames].includes(z.config.getCurrentLanguage()) && z.resMgr.setSpriteFrame(o, De.getLanguagePath("game/cowboy/language/win_flag"))
                    }
                }
            }
            this._animRoundStart = m(this.prefab_cb_round_start).getComponent(D), this._animRoundStart.node.active = !1, this._animRoundStart.node.setPosition(g.ZERO), this._nodeAnim.addChild(this._animRoundStart.node, $.LayerZorder.Z_IDX_ANIM_NODE_1);
            {
                this._animStartBet = m(this.prefab_hb_start_bets).getComponent(D), this._nodeAnim.insertChild(this._animStartBet.node, $.LayerZorder.Z_IDX_ANIM_NODE_1), this._animStartBet.node.setPosition(g.ZERO), this._animStartBet.node.active = !1;
                let e = this._animStartBet.node.getChildByName("Sprite_2");
                z.resMgr.setSpriteFrame(e, z.config.getLanguagePath("game/humanboy/animation/game_round/002"));
                let t = this._animStartBet.node.getChildByName("Sprite_7");
                z.resMgr.setSpriteFrame(t, z.config.getLanguagePath("game/humanboy/animation/game_round/004"))
            } {
                this._animStopBet = m(this.prefab_hb_end_bets).getComponent(D), this._nodeAnim.insertChild(this._animStopBet.node, $.LayerZorder.Z_IDX_ANIM_NODE_1), this._animStopBet.node.setPosition(g.ZERO), this._animStopBet.node.active = !1;
                let e = this._animStopBet.node.getChildByName("Sprite_2");
                z.resMgr.setSpriteFrame(e, z.config.getLanguagePath("game/humanboy/animation/game_round/003"));
                let t = this._animStopBet.node.getChildByName("Sprite_7");
                z.resMgr.setSpriteFrame(t, z.config.getLanguagePath("game/humanboy/animation/game_round/005"))
            } {
                let e = d(g.ZERO);
                this._btn_review.parent.convertToWorldSpaceAR(this._btn_review.position, e), this._animWayoutLight = m(this.prefab_hb_way_out).getComponent(D), this._nodeAnim.insertChild(this._animWayoutLight.node, $.LayerZorder.Z_IDX_ANIM_NODE_1), this._animWayoutLight.node.setPosition(this._animWayoutLight.node.parent.convertToNodeSpaceAR(e)), this._animWayoutLight.node.active = !1
            } {
                let e = this._panel_card.getChildByName("node_fisherman"),
                    t = this._panel_card.getChildByName("node_shark"),
                    i = e.getChildByName("img").position,
                    n = t.getChildByName("img").position;
                this._aquamanNode = m(this.mainAquamanPrefab), this._sharkNode = m(this.mainSharkPrefab), e.addChild(this._aquamanNode, $.LayerZorder.Z_IDX_ANIM_NODE_1), t.addChild(this._sharkNode, $.LayerZorder.Z_IDX_ANIM_NODE_1), this._aquamanNode.setPosition(i), this._sharkNode.setPosition(n), this._skeletonAnimHandler.initMainAquamanSkeleton(this._aquamanNode), this._skeletonAnimHandler.initMainSharkSkeleton(this._sharkNode), this._skeletonAnimHandler.setMainAquamanIdleState(), this._skeletonAnimHandler.setMainSharkIdleState()
            }
        }
        _stopTimelineAnims(e) {
            e && e instanceof D && T(e, !0) && (e.play(), e.stop(), e.node.active = !1)
        }
        _restAllTimelineAnims() {
            this._stopTimelineAnims(this._animRoundStart), this._stopTimelineAnims(this._animStartBet), this._stopTimelineAnims(this._animStopBet), this._stopTimelineAnims(this._animWayoutLight), this._hideAllOdds(), this._hideAllWinFlagAnim(), this._hideAllWinPlayerLightAnim(), w.stopAllByTarget(this._nodeAnim)
        }
        _initRedPackage() {
            this._btn_redpacket_festival = this._panel_bet_btn.getChildByName("btn_redpacket_festival"), this._btn_redpacket_festival.getComponent(v).spriteFrame = null, this._btn_redpacket_festival.active = !1, this._btn_redpacket_festival_layer = m(this._btn_redpacket_festival), this.node.insertChild(this._btn_redpacket_festival_layer, $.LayerZorder.Z_IDX_PANEL_RED_PACKET);
            let e = d(g.ZERO);
            this._btn_redpacket_festival.convertToWorldSpaceAR(d(g.ZERO), e), this._btn_redpacket_festival_layer.setPosition(this._btn_redpacket_festival_layer.parent.convertToNodeSpaceAR(e)), this._onMsgShowLuckButton()
        }
        _adaptiveScreen() {
            e.g_fullScreenOffset.x, e.g_fullScreenOffset.y;
            if (z.native.isFullScreen() || z.appConfig.isWebApp && !this.ispad) {
                let e = this.node.getChildByName("panel_left_playerlist"),
                    t = this.node.getChildByName("panel_right_playerlist"),
                    i = this.node.getChildByName("btn_menu");
                if (i && i.setPosition(d(e.getPosition().x, i.getPosition().y, 0)), this._btn_review && this._btn_review.setPosition(d(t.getPosition().x, this._btn_review.getPosition().y, 0)), this.btnInfo) {
                    const e = 10,
                        i = this.btnInfo.node.getComponent(A).width,
                        n = t.getPosition().x - i - e;
                    this.btnInfo.node.setPosition(d(n, this._btn_review.getPosition().y, 0))
                }
                if (this._panel_self) {
                    let e = this._panel_self.getChildByName("img_head"),
                        t = d(g.ZERO);
                    i.convertToWorldSpaceAR(d(g.ZERO), t), e.parent.convertToNodeSpaceAR(t, t);
                    let n = t.x - e.getPosition().x,
                        o = 0;
                    this._panel_self.setPosition(d(this._panel_self.getPosition().x + n, this._panel_self.getPosition().y + o, 0))
                }
                this._btn_playerList && this._btn_playerList.setPosition(new g(t.position.x, this._btn_playerList.position.y))
            }
        }
        _adaptiveBetBtnPanel() {
            if (this._vBottomBetBtns.length <= 0) {
                for (let e = 0; e < this._vBetButtons.length; ++e) this._vBottomBetBtns.push(new Q.tGameNodeScale(this._vBetButtons[e].node, this._fBetBtnSrcScaleRate, !0));
                this._vBottomBetBtns.push(new Q.tGameNodeScale(this._btn_betAuto.node, this._btn_betAuto.node.scale, !0)), this._vBottomBetBtns.push(new Q.tGameNodeScale(this._btn_betClean.node, this._btn_betClean.node.scale, !0)), this._vBottomBetBtns.push(new Q.tGameNodeScale(this._btn_redpacket_festival, this._btn_redpacket_festival.scale))
            }
            let e = this._btn_playerList.position.x - this._btn_playerList.getComponent(A).width / 2;
            e -= this._panel_self.getPosition().x + this._panel_self.getComponent(A).width / 2, this._panel_bet_btn.getComponent(A).setContentSize(N(e, this._panel_bet_btn.getComponent(A).height)), this._panel_bet_btn.setPosition(this._panel_self.getPosition().x + this._panel_self.getComponent(A).width / 2 + e / 2, this._panel_bet_btn.getPosition().y);
            let t = 0,
                i = 0,
                n = 0;
            for (let e = 0; e < this._vBottomBetBtns.length; ++e) {
                let i = this._vBottomBetBtns[e].node,
                    o = this._vBottomBetBtns[e].scale,
                    a = this._vBottomBetBtns[e].isFixLayout;
                (i.active || a) && (++n, t += i.getComponent(A).width * o.x)
            }
            i = (this._panel_bet_btn.getComponent(A).width - t) / (n + 1);
            let o = -this._panel_bet_btn.getComponent(A).width * this._panel_bet_btn.getComponent(A).anchorX;
            for (let e = 0; e < this._vBottomBetBtns.length; ++e) {
                let t = this._vBottomBetBtns[e].node,
                    n = this._vBottomBetBtns[e].scale,
                    a = this._vBottomBetBtns[e].isFixLayout;
                if (t.active || a) {
                    let e = o + i + t.getComponent(A).width * n.x * t.getComponent(A).anchorX,
                        a = d(g.ZERO);
                    this._panel_bet_btn.convertToWorldSpaceAR(d(e, 0, 0), a), t.parent.convertToNodeSpaceAR(a, a), t.setPosition(a.x, t.position.y), o = a.x + t.getComponent(A).width * n.x * t.getComponent(A).anchorX
                }
            }
            if (this._btn_redpacket_festival_layer) {
                let e = d(g.ZERO);
                this._btn_redpacket_festival.convertToWorldSpaceAR(d(g.ZERO), e), this._btn_redpacket_festival_layer.setPosition(this._btn_redpacket_festival_layer.parent.convertToNodeSpaceAR(e))
            }
            this._humanboyAdvancedAuto && (this._humanboyAdvancedAuto.adaptAdvanceAutoTipsPos(this._btn_betAuto.node), this._humanboyAdvancedAuto.adaptAdvanceAutoCountPos(this._btn_betAuto.node))
        }
        _showWinFlagAnim(e) {
            let t = this._mapAnimWinFlags.get(e);
            if (!t) return;
            t.node.active = !0;
            let i = t.getState("animation0"),
                n = t.getState("animation1");
            i.speed = Q.getAnimClipSpeedByDuring(i.clip, this._fActExecute_WinFlag), i.wrapMode = x.WrapMode.Normal, t.play(i.name), t.on(D.EventType.FINISHED, ((e, i) => {
                t.off(D.EventType.FINISHED), n.wrapMode = x.WrapMode.Loop, n.play()
            }), this)
        }
        _hideWinFlagAnim(e) {
            let t = this._mapAnimWinFlags.get(e);
            this._stopTimelineAnims(t)
        }
        _showAllWinFlagAnim() {
            q.getPokerMasterRoom().mapZoneData.forEach(((e, t) => {
                1 === t.vHistoryResults[0] && this._showWinFlagAnim(e)
            }))
        }
        _hideAllWinFlagAnim() {
            this._mapAnimWinFlags.forEach(((e, t) => {
                this._hideWinFlagAnim(e)
            }))
        }
        _showTopWayOutAnim() {
            let e = "",
                t = "",
                i = "",
                n = q.getPokerMasterRoom().tRoundresult.winOp;
            switch (n) {
                case Ze.pokermaster_proto.BetZoneOption.FISHER_WIN:
                    e = "record_red", t = "record_red_fire", i = "record_red_fire_light";
                    break;
                case Ze.pokermaster_proto.BetZoneOption.SHARK_WIN:
                    e = "record_blue", t = "record_blue_fire", i = "record_blue_fire_light";
                    break;
                case Ze.pokermaster_proto.BetZoneOption.EQUAL:
                    e = "record_draw", t = "record_draw_fire", i = "record_draw_fire_light"
            }
            let o = this._vTopWayOutImg.length;
            for (let e = 0; e < this._vTopWayOutImg.length; ++e)
                if (!this._vTopWayOutImg[e].node.active) {
                    o = e;
                    break
                } let a = this._getAreaIdxByBetOption(n);
            if (a >= 0 && a < this._vAreasInfo.length) {
                let e = (new r).addComponent(v),
                    n = (new r).addComponent(v);
                this._nodeAnim.insertChild(e.node, $.LayerZorder.Z_IDX_ANIM_NODE_0), this._nodeAnim.insertChild(n.node, $.LayerZorder.Z_IDX_ANIM_NODE_0), e.node.active = !0, e.spriteFrame = this._atlas_pm_pokermaster.getSpriteFrame(t), n.node.active = !1, n.spriteFrame = this._atlas_pm_pokermaster.getSpriteFrame(i);
                let s = d(g.ZERO);
                this._vAreasInfo[a].panelCoin.convertToWorldSpaceAR(d(g.ZERO), s);
                let l = Math.min(o, this._vTopWayOutImg.length - 1),
                    h = d(g.ZERO);
                this._vTopWayOutImg[l].node.convertToWorldSpaceAR(d(g.ZERO), h);
                let u = _(0, s.y),
                    c = _(h.x - s.x, h.y - s.y).signAngle(u) / Math.PI * 180;
                e.node.angle = -c;
                let m = d(g.ZERO);
                n.node.parent.convertToNodeSpaceAR(h, m), n.node.setPosition(m), e.node.getComponent(A).setAnchorPoint(_(.5, .7)), e.node.parent.convertToNodeSpaceAR(s, s), e.node.parent.convertToNodeSpaceAR(h, h), e.node.setPosition(s), Fe.moveTo(e.node, .6 * this._fActExecute_WayOut, h, G.sineOut, .2 * this._fActExecute_WayOut, (() => {
                    e.node.removeFromParent(), e.node.destroy(), n.node.active = !0;
                    let t = n.node.addOrGetComponent(R);
                    t.opacity = 255, W(t).to(.2, {
                        opacity: 0
                    }, {
                        easing: "fade"
                    }).to(.2, {
                        opacity: 255
                    }, {
                        easing: "fade"
                    }).to(.2, {
                        opacity: 0
                    }, {
                        easing: "fade"
                    }).call((() => {
                        n.node.removeFromParent(), n.node.destroy()
                    })).start()
                }))
            }
            this.showTrendChangeAnim(), W(this._nodeAnim).delay(1.5).call((() => {
                this.hideTrendChangeAnim()
            })).start(), o > this._vTopWayOutImg.length - 1 ? W(this._nodeAnim).delay(.2 * this._fActExecute_WayOut).call((() => {
                this._vTopWayOutImg.length > 0 && Fe.scaleAndFade(this._vTopWayOutImg[0].node, .2, d(g.ZERO), 0, null, (() => {
                    this._vTopWayOutImg[0].node.active = !1;
                    let e = d(g.ZERO);
                    for (let t = 0; t < this._vTopWayOutImg.length; ++t) t <= 0 || (e.x = this._vTopWayOutImgSrcPos[t - 1].x, e.y = this._vTopWayOutImgSrcPos[t - 1].y, Fe.moveTo(this._vTopWayOutImg[t].node, .4 * this._fActExecute_WayOut, e, null, 0, (() => {
                        t === this._vTopWayOutImg.length - 1 && (this._updateTopWayOut(), this._vTopWayOutImg[0].node.setScale(d(g.ONE)), this._vTopWayOutImg[0].node.addOrGetComponent(R).opacity = 255, this._vTopWayOutImg[0].node.active = !0)
                    })))
                }))
            })).start() : W(this._nodeAnim).delay(.8 * this._fActExecute_WayOut).call((() => {
                this._vTopWayOutImg[o].node.active = !0, this._vTopWayOutImg[o].spriteFrame = this._atlas_pm_pokermaster.getSpriteFrame(e)
            })).start()
        }
        _updateTopWayOut(e = 0) {
            let t = "",
                i = q.getPokerMasterRoom().vLastResult,
                n = Math.min(this._vTopWayOutImg.length, i.length),
                o = 0,
                a = 0;
            this._vTopWayOutImg.length >= i.length ? (o = 0, a = n - e) : (o = i.length - n - e, a = n);
            for (let e = 0; e < this._vTopWayOutImg.length; ++e) {
                this._vTopWayOutImg[e].node.setPosition(this._vTopWayOutImgSrcPos[e]);
                let n = o + e;
                if (e < a && n >= 0 && n < i.length) {
                    switch (i[n]) {
                        case Ze.pokermaster_proto.BetZoneOption.FISHER_WIN:
                            t = "record_red";
                            break;
                        case Ze.pokermaster_proto.BetZoneOption.SHARK_WIN:
                            t = "record_blue";
                            break;
                        case Ze.pokermaster_proto.BetZoneOption.EQUAL:
                            t = "record_draw"
                    }
                    this._vTopWayOutImg[e].node.active = !0, this._vTopWayOutImg[e].spriteFrame = this._atlas_pm_pokermaster.getSpriteFrame(t)
                } else this._vTopWayOutImg[e].node.active = !1
            }
        }
        _showWayOutMoveAnim(e) {
            let t = this._getAreaIdxByBetOption(e);
            if (t < 0 || t >= this._vAreasInfo.length) return;
            let i = this._vAreasInfo[t].panelWayOut,
                n = this._vAreasInfo[t].wayOutImgArray,
                o = this._vAreasInfo[t].wayOutImgSrcPosArray;
            !i || n.length <= 0 || Fe.scaleAndFade(n[0].node, .2, d(g.ZERO), 0, null, (() => {
                n[0].node.active = !1;
                let t = d(g.ZERO);
                for (let i = 0; i < n.length; ++i) 0 !== i && (t.x = o[i - 1].x, t.y = o[i - 1].y, Fe.moveTo(n[i].node, .5, t, null, 0, (() => {
                    i === n.length - 1 && (this._updateWayOut(e, 0), n[0].node.setScale(d(g.ONE)), n[0].node.addOrGetComponent(R).opacity = 255, n[0].node.active = !0)
                })))
            }))
        }
        _showWayOutImgAnim(e, t) {
            let i = this._getAreaIdxByBetOption(t);
            if (i < 0 || i >= this._vAreasInfo.length) return;
            let n = this._vAreasInfo[i].wayOutImgArray;
            if (n.length <= 0) return;
            let o = q.getPokerMasterRoom().mapZoneData.get(t);
            if (!o) return;
            let a = this._vAreasInfo[i].rtxtWayOut;
            a && (a.string = "", a.node.active = !1);
            let s = o.result,
                r = n.length;
            for (let e = 0; e < n.length; ++e)
                if (!n[e].node.active) {
                    r = e;
                    break
                } let _ = () => {
                e && (this.isWayOutAnimPlaying = !1)
            };
            r > n.length - 1 ? W(this._nodeAnim).sequence(W().delay(.3 * this._fActExecute_WayOut).call((() => {
                this._showWayOutMoveAnim(t)
            })), W().call(_)).start() : W(this._nodeAnim).sequence(W().delay(.8 * this._fActExecute_WayOut).call((() => {
                n[r].node.active = !0;
                let e = "";
                0 == s ? e = "cowboy_icon_circle_small_gray" : 1 == s && (e = z.config.getCurrentLanguage() == z.Enum.LANGUAGE_TYPE.zh_CN ? "cowboy_icon_circle_small_red" : "cowboy_icon_circle_small_red_en"), De.loadSpriteTextureByPlist(this.game_dznz_PLIST, n[r], e)
            })), W().call(_)).start()
        }
        _showWayOutAnim(e, t) {
            let i = this._getAreaIdxByBetOption(t);
            if (i < 0 || i >= this._vAreasInfo.length) return;
            let n = this._vAreasInfo[i].panelWayOut,
                o = this._vAreasInfo[i].wayOutImgArray;
            if (!n || o.length <= 0) return;
            let a = q.getPokerMasterRoom().mapZoneData.get(t);
            if (a) switch (this._vAreasInfo[i].wayOutStyle) {
                case Q.eGameboyWayOutStyle.GWS_NONE:
                    break;
                case Q.eGameboyWayOutStyle.GWS_IMG:
                    this._updateWayOutImg(t, 1), this._showWayOutImgAnim(e, t);
                    break;
                case Q.eGameboyWayOutStyle.GWS_TXT:
                    this._updateWayOutTxt(t);
                    break;
                case Q.eGameboyWayOutStyle.GWS_AUTO: {
                    let i = !1,
                        n = a.vHistoryResults;
                    if (n.length > 0 && n.length > o.length) {
                        let e = !0;
                        for (let t = 0; t <= o.length; ++t) e = e && n[t] > 0;
                        e && (i = !0)
                    }
                    i ? this._updateWayOutTxt(t) : (this._updateWayOutImg(t, 1), this._showWayOutImgAnim(e, t))
                }
            }
        }
        _updateWayOutImg(e, t) {
            let i = this._getAreaIdxByBetOption(e);
            if (i < 0 || i >= this._vAreasInfo.length) return;
            this._vAreasInfo[i].panelWayOut.active = !0;
            let n = this._vAreasInfo[i].wayOutImgArray,
                o = this._vAreasInfo[i].wayOutImgSrcPosArray,
                a = q.getPokerMasterRoom().mapZoneData.get(e);
            if (!a) return;
            let s = this._vAreasInfo[i].rtxtWayOut;
            s && (s.string = "", s.node.active = !1);
            let r = a.vHistoryResults,
                _ = Math.min(n.length, r.length),
                l = 0,
                h = 0;
            n.length >= r.length ? (l = _ - 1, h = _ - t) : (l = _ - 1 + t, h = _);
            for (let e = 0; e < n.length; ++e) {
                n[e].node.setPosition(o[e]);
                let t = l - e;
                if (e < h && t >= 0 && t < r.length) {
                    let i = r[t];
                    n[e].node.active = !0;
                    let o = "";
                    0 == i ? o = "cowboy_icon_circle_small_gray" : 1 == i && (o = z.config.getCurrentLanguage() == z.Enum.LANGUAGE_TYPE.zh_CN ? "cowboy_icon_circle_small_red" : "cowboy_icon_circle_small_red_en"), De.loadSpriteTextureByPlist(this.game_dznz_PLIST, n[e], o)
                } else n[e].node.active = !1
            }
        }
        _updateWayOutTxt(e) {
            let t = this._getAreaIdxByBetOption(e);
            if (t < 0 || t >= this._vAreasInfo.length) return;
            let i = this._vAreasInfo[t].rtxtWayOut;
            if (!i) return;
            let n = this._vAreasInfo[t].wayOutImgArray,
                o = this._vAreasInfo[t].wayOutLoseLimitCount;
            for (let e = 0; e < n.length; ++e) n[e].node.active = !1;
            let a = q.getPokerMasterRoom().eCurState,
                s = q.getPokerMasterRoom().mapZoneData.get(e);
            if (!s) return;
            let r = s.luckLoseHand;
            if (r < 0) i.string = "";
            else if (0 === r) a === Ze.pokermaster_proto.RoundState.WAIT_NEXT_ROUND ? z.StringTools.setRichTextString(i.node, z.config.getStringDataCasino("PokerMaster_game_wayout_hit_txt")) : z.StringTools.setRichTextString(i.node, z.config.getStringDataCasino("PokerMaster_game_wayout_hit_last_txt"));
            else {
                let e = "";
                e = 0 != o && r > o ? z.StringTools.formatC("%d", o) : z.StringTools.formatC("%d", r), z.StringTools.setRichTextString(i.node, z.StringTools.formatC(z.config.getStringDataCasino("PokerMaster_game_wayout_lose_txt"), e))
            }
            i.node.active = !0
        }
        _updateWayOut(e, t) {
            let i = this._getAreaIdxByBetOption(e);
            if (i < 0 || i >= this._vAreasInfo.length) return;
            let n = this._vAreasInfo[i].wayOutImgArray,
                o = q.getPokerMasterRoom().mapZoneData.get(e);
            if (o) switch (this._vAreasInfo[i].wayOutStyle) {
                case Q.eGameboyWayOutStyle.GWS_NONE:
                    break;
                case Q.eGameboyWayOutStyle.GWS_IMG:
                    this._updateWayOutImg(e, t);
                    break;
                case Q.eGameboyWayOutStyle.GWS_TXT:
                    this._updateWayOutTxt(e);
                    break;
                case Q.eGameboyWayOutStyle.GWS_AUTO: {
                    let i = !1,
                        a = o.vHistoryResults;
                    if (a.length > 0 && a.length > n.length) {
                        let e = !0;
                        for (let t = 0; t <= n.length; ++t) e = e && a[t] > 0;
                        e && (i = !0)
                    }
                    i ? this._updateWayOutTxt(e) : this._updateWayOutImg(e, t)
                }
            }
        }
        _updateAllWayOut(e = 0) {
            for (let t = 0; t < this._vAreasInfo.length; ++t) this._updateWayOut(this._vAreasInfo[t].zoneOption, e)
        }
        _showAllWayOutAnim() {
            if (!this.isWayOutAnimPlaying) {
                this.isWayOutAnimPlaying = !0;
                for (let e = 0; e < this._vAreasInfo.length; ++e) e == this._vAreasInfo.length - 1 ? this._showWayOutAnim(!0, this._vAreasInfo[e].zoneOption) : this._showWayOutAnim(!1, this._vAreasInfo[e].zoneOption);
                W(this._nodeAnim).delay(this._fActExecute_WayOut).call((() => {
                    this._pokerMasterChart && this._pokerMasterChart.node.active && z.pokerMasterNet.requestTrend(), this._showWayOutLightAnim()
                })).start()
            }
        }
        _showWayOutLightAnim() {
            let e = d(g.ZERO);
            this._btn_review.parent.convertToWorldSpaceAR(this._btn_review.position, e), this._animWayoutLight.node.active = !0, this._animWayoutLight.node.setPosition(this._animWayoutLight.node.parent.convertToNodeSpaceAR(e));
            let t = this._animWayoutLight,
                i = t.defaultClip;
            i.speed = Q.getAnimClipSpeedByDuring(i, this._fActExecute_WayOutLight), i.wrapMode = x.WrapMode.Normal, t.play(), t.on(D.EventType.FINISHED, ((e, i) => {
                t.off(D.EventType.FINISHED), this._animWayoutLight.node.active = !1
            }), this)
        }
        _showRoundStartAnim() {
            this._animRoundStart.node.active = !0;
            let e = P("vs_tom/aquaman_prefab", this._animRoundStart.node).getComponent(H.Skeleton),
                t = P("vs_shark/shark_prefab", this._animRoundStart.node).getComponent(H.Skeleton);
            e.setAnimation(0, "Idle_Simple", !0), t.setAnimation(0, "Idle_Simple", !0);
            let i = this._animRoundStart,
                n = i.defaultClip;
            n.speed = Q.getAnimClipSpeedByDuring(n, this._fActExecute_RoundStart), n.wrapMode = x.WrapMode.Normal, i.play(), i.on(D.EventType.FINISHED, ((e, t) => {
                i.off(D.EventType.FINISHED), this._animRoundStart.node.active = !1
            }), this)
        }
        _showStartBetAnim() {
            W(this._nodeAnim).delay(this._fActDelayed_StartBet).call((() => {
                this._playSoundEffect($.Sounds().sound_begin_bet), this._animStartBet.node.active = !0;
                let e = this._animStartBet,
                    t = e.defaultClip;
                t.speed = Q.getAnimClipSpeedByDuring(t, this._fActExecute_Startbet), t.wrapMode = x.WrapMode.Normal, e.play(), e.on(D.EventType.FINISHED, ((t, i) => {
                    e.off(D.EventType.FINISHED), this._animStartBet.node.active = !1
                }), this)
            })).start()
        }
        _showStopBetAnim() {
            W(this._nodeAnim).delay(this._fActDelayed_StopBet).call((() => {
                this._playSoundEffect($.Sounds().sound_end_bet), this._animStopBet.node.active = !0;
                let e = this._animStopBet,
                    t = e.defaultClip;
                t.speed = Q.getAnimClipSpeedByDuring(t, this._fActExecute_StopBet), t.wrapMode = x.WrapMode.Normal, e.play(), e.on(D.EventType.FINISHED, ((t, i) => {
                    e.off(D.EventType.FINISHED), this._animStopBet.node.active = !1
                }))
            })).start()
        }
        _sendCardAnim() {
            this._setAllCardsFace(!1), this._setAllCardsVisible(!1);
            let e = [],
                t = [],
                i = 15;
            for (let n = 0; n < this._vLeftHandCards.length; ++n) {
                let o = this._vLeftHandCardsSrcPos[n].x + i,
                    a = this._vLeftHandCardsSrcPos[n].y - i;
                this._vLeftHandCards[n].node.setPosition(o, a), e.push(this._vLeftHandCards[n]), t.push(this._vLeftHandCardsSrcPos[n])
            }
            for (let n = 0; n < this._vRightHandCards.length; ++n) {
                let o = this._vRightHandCardsSrcPos[n].x - i,
                    a = this._vRightHandCardsSrcPos[n].y - i;
                this._vRightHandCards[n].node.setPosition(o, a), e.push(this._vRightHandCards[n]), t.push(this._vRightHandCardsSrcPos[n])
            }
            for (let e = 0; e < this._vPublicHoleCards.length; ++e) {
                let t = this._vPublicHoleCardsSrcPos[e].x - i,
                    n = this._vPublicHoleCardsSrcPos[e].y - i;
                this._vPublicHoleCards[e].node.setPosition(t, n)
            }
            let n = .07;
            for (let i = 0; i < e.length; ++i) {
                let o = () => {
                    e[i].SetFace(!1)
                };
                this.scheduleOnce((a => {
                    e[i].node.active = !0, W(e[i].node).sequence(W().call(o), W().to(n, {
                        position: t[i]
                    }, {
                        easing: Fe.easeInOut(1)
                    }), W().call((() => {
                        if (this._playSoundEffect($.Sounds().sound_fapai), i === e.length - 1)
                            for (let e = 0; e < this._vPublicHoleCards.length; ++e) {
                                let t = () => {
                                    this._vPublicHoleCards[e].SetFace(!1), this._playSoundEffect($.Sounds().sound_fapai)
                                };
                                this.scheduleOnce((i => {
                                    this._vPublicHoleCards[e].node.active = !0, W(this._vPublicHoleCards[e].node).sequence(W().to(n, {
                                        position: this._vPublicHoleCardsSrcPos[e]
                                    }, {
                                        easing: Fe.easeInOut(1)
                                    }), W().call(t)).start()
                                }), e * n)
                            }
                    }))).start()
                }), i * n)
            }
        }
        _showHandCardsAnim() {
            this._setAllCardsVisible(!0);
            let e = 0,
                t = q.getPokerMasterRoom().vLeftHandCards,
                i = q.getPokerMasterRoom().vRightHandCards;
            e = Math.min(this._vLeftHandCards.length, t.length);
            for (let i = 0; i < e; ++i) this._vLeftHandCards[i].SetContent(t[i].number, t[i].suit), this._vLeftHandCards[i].SetFace(!1), this._vLeftHandCards[i].Turn(!0), 0 === i && this._playSoundEffect($.Sounds().sound_kaipai);
            e = Math.min(this._vRightHandCards.length, i.length);
            for (let t = 0; t < e; ++t) this._vRightHandCards[t].SetContent(i[t].number, i[t].suit), this._vRightHandCards[t].SetFace(!1), this._vRightHandCards[t].Turn(!0, .5), 0 === t && this.scheduleOnce((() => {
                this._playSoundEffect($.Sounds().sound_kaipai)
            }), .5)
        }
        _showPublicHoleCardsAnim(e) {
            let t = q.getPokerMasterRoom().vPublicHoleCards,
                i = Math.min(e, t.length);
            for (let e = 0; e < this._vPublicHoleCards.length; ++e)
                if (this._vPublicHoleCards[e].SetFace(!1), e < i) {
                    let n = () => {
                        e === i - 1 && this._playSoundEffect($.Sounds().sound_kaipai)
                    };
                    Fe.stopAll(this._vPublicHoleCards[e].node), W(this._vPublicHoleCards[e].node).sequence(W().to(.3, {
                        position: this._vPublicHoleCardsSrcPos[0]
                    }).call((() => {
                        this._vPublicHoleCards[e].SetContent(t[e].number, t[e].suit), this._vPublicHoleCards[e].Turn(!0)
                    })), W().to(.2, {
                        position: this._vPublicHoleCardsSrcPos[e]
                    }).call(n)).start()
                }
        }
        _updateWinCardGray() {
            let e = q.getPokerMasterRoom().tRoundresult;
            if (!(e.Cards.length <= 0)) {
                for (let e = 0; e < this._vLeftHandCards.length; ++e) this._vLeftHandCards[e].Gray(!0);
                for (let e = 0; e < this._vRightHandCards.length; ++e) this._vRightHandCards[e].Gray(!0);
                for (let e = 0; e < this._vPublicHoleCards.length; ++e) this._vPublicHoleCards[e].Gray(!0);
                for (let t = 0; t < e.Cards.length; ++t) {
                    let i = e.Cards[t].suit,
                        n = e.Cards[t].number;
                    console.log("boob =>", i, ",", n);
                    for (let e = 0; e < this._vLeftHandCards.length; ++e) this._vLeftHandCards[e].GetSuit() === i && this._vLeftHandCards[e].GetNumber() === n && this._vLeftHandCards[e].Gray(!1);
                    for (let e = 0; e < this._vRightHandCards.length; ++e) this._vRightHandCards[e].GetSuit() === i && this._vRightHandCards[e].GetNumber() === n && this._vRightHandCards[e].Gray(!1);
                    for (let e = 0; e < this._vPublicHoleCards.length; ++e) this._vPublicHoleCards[e].GetSuit() === i && this._vPublicHoleCards[e].GetNumber() === n && this._vPublicHoleCards[e].Gray(!1)
                }
            }
        }
        _getCardTypeFrameName(e, t = !1) {
            let i = "";
            switch (e) {
                case Ze.pokermaster_proto.HandLevel.HAND_DUMMY:
                    break;
                case Ze.pokermaster_proto.HandLevel.HAND_NONE:
                    i = "gaopai";
                    break;
                case Ze.pokermaster_proto.HandLevel.HAND_DUI:
                    i = "yidui";
                    break;
                case Ze.pokermaster_proto.HandLevel.HAND_DUI_TWO:
                    i = "liangdui";
                    break;
                case Ze.pokermaster_proto.HandLevel.HAND_SANJO:
                    i = "santiao";
                    break;
                case Ze.pokermaster_proto.HandLevel.HAND_SHUN:
                    i = "shunzi";
                    break;
                case Ze.pokermaster_proto.HandLevel.HAND_TONG:
                    i = "tonghua";
                    break;
                case Ze.pokermaster_proto.HandLevel.HAND_HULU:
                    i = "hulu";
                    break;
                case Ze.pokermaster_proto.HandLevel.HAND_SIJO:
                    i = "jingang";
                    break;
                case Ze.pokermaster_proto.HandLevel.HAND_TONG_SHUN:
                    i = "tonghuashun";
                    break;
                case Ze.pokermaster_proto.HandLevel.HAND_KING:
                    i = "huangtong"
            }
            return i = t ? i + "_gray" : i, i
        }
        _showCardTypeAnim(e) {
            let t = q.getPokerMasterRoom().tRoundresult;
            this._left_card_lead_node.node.active = !1, this._img_left_card_type_bg.node.active = !0, this._right_card_lead_node.node.active = !1, this._img_right_card_type_bg.node.active = !0;
            let i = "",
                n = "";
            switch (t.winOp) {
                case Ze.pokermaster_proto.BetZoneOption.FISHER_WIN:
                    i = "win_cardtype_bg", n = "lose_cardtype_bg", this._left_card_type_win_node.node.active = !0, this._left_card_type_win_node.setString(this.getCardTypeString(t.fisherLevel)), this._right_card_type_lose_node.node.active = !0, this._right_card_type_lose_node.setString(this.getCardTypeString(t.sharkLevel));
                    break;
                case Ze.pokermaster_proto.BetZoneOption.SHARK_WIN:
                    i = "lose_cardtype_bg", n = "win_cardtype_bg", this._left_card_type_lose_node.node.active = !0, this._left_card_type_lose_node.setString(this.getCardTypeString(t.fisherLevel)), this._right_card_type_win_node.node.active = !0, this._right_card_type_win_node.setString(this.getCardTypeString(t.sharkLevel));
                    break;
                case Ze.pokermaster_proto.BetZoneOption.EQUAL:
                    i = "win_cardtype_bg", n = "win_cardtype_bg", this._left_card_type_win_node.node.active = !0, this._left_card_type_win_node.setString(this.getCardTypeString(t.fisherLevel)), this._right_card_type_win_node.node.active = !0, this._right_card_type_win_node.setString(this.getCardTypeString(t.sharkLevel))
            }
            this._img_left_card_type_bg.spriteFrame = this._atlas_pm_pokermaster.getSpriteFrame(i), this._img_right_card_type_bg.spriteFrame = this._atlas_pm_pokermaster.getSpriteFrame(n), e && (this._img_left_card_type_bg.node.scale = new g(0, 0, 1), this._img_right_card_type_bg.node.scale = new g(0, 0, 1), Fe.scaleTo(this._img_left_card_type_bg.node, .2, new g(g.ONE), Fe.easeInOut(1)), Fe.scaleTo(this._img_right_card_type_bg.node, .2, new g(g.ONE), Fe.easeInOut(1)))
        }
        _showRoleLeadAnim(e) {
            let t = q.getPokerMasterRoom().uWhoIsLeader;
            if (this._img_left_card_type_bg.node.active = !1, this._img_right_card_type_bg.node.active = !1, 1 === t ? (this._img_left_card_type_bg.node.active = !0, this._img_left_card_type_bg.spriteFrame = this._atlas_pm_pokermaster.getSpriteFrame("win_cardtype_bg"), this._left_card_lead_node.node.active = !0) : 0 === t || -1 === t && (this._img_right_card_type_bg.node.active = !0, this._img_right_card_type_bg.spriteFrame = this._atlas_pm_pokermaster.getSpriteFrame("win_cardtype_bg"), this._right_card_lead_node.node.active = !0), e) {
                let e = [];
                e.push(this._img_left_card_type_bg.node), e.push(this._img_right_card_type_bg.node);
                for (let t = 0; t < e.length; ++t) e[t].active && (e[t].setScale(d(g.ZERO)), Fe.scaleTo(e[t], .2, d(g.ONE), Fe.easeInOut(1)))
            }
        }
        _updateRoleFortune() {
            let e = this._panel_card.getChildByName("node_fortune"),
                t = e => {
                    let t = new k(k.WHITE);
                    return e > 0 ? t.set(255, 64, 0) : t.set(255, 255, 255), t
                };
            {
                let i = e.getChildByName("img_left_fortune_bg"),
                    n = e.getChildByName("img_left_fortune"),
                    o = e.getChildByName("txt_left_fortune").getComponent(B),
                    a = Q.getNumberFixedDown(q.getPokerMasterRoom().fLeftFortune),
                    s = z.String(a);
                if (s !== o.string) {
                    o.string = s, o.node.getComponent(B).color = t(a);
                    let e = n.getContentSize(),
                        r = z.resMgr.getLabelStringSize(o),
                        _ = e.width + 20 + r.width,
                        l = i.position.x - i.getComponent(A).width * i.getComponent(A).anchorX + (i.getComponent(A).width - _) / 2,
                        h = n.position.y;
                    l += e.width * n.getComponent(A).anchorX, n.setPosition(l, h), l += e.width * (1 - n.getComponent(A).anchorX), l += 20, l += r.width * o.node.getComponent(A).anchorX, o.node.setPosition(l, h)
                }
            } {
                let i = e.getChildByName("img_right_fortune_bg"),
                    n = e.getChildByName("img_right_fortune"),
                    o = e.getChildByName("txt_right_fortune").getComponent(B),
                    a = Q.getNumberFixedDown(q.getPokerMasterRoom().fRightFortune),
                    s = z.String(a);
                if (s !== o.string) {
                    o.string = s, o.node.getComponent(B).color = t(a);
                    let e = n.getContentSize(),
                        r = z.resMgr.getLabelStringSize(o),
                        _ = e.width + 20 + r.width,
                        l = i.position.x - i.getComponent(A).width * i.getComponent(A).anchorX + (i.getComponent(A).width - _) / 2,
                        h = n.position.y;
                    l += e.width * n.getComponent(A).anchorX, n.setPosition(l, h), l += e.width * (1 - n.getComponent(A).anchorX), l += 20, l += r.width * o.node.getComponent(A).anchorX, o.node.setPosition(l, h)
                }
            }
        }
        getCardTypeString(e) {
            let t = "";
            switch (e) {
                case 1:
                    t = "M_UITitle113";
                    break;
                case 2:
                    t = "M_UITitle114";
                    break;
                case 3:
                    t = "M_UITitle115";
                    break;
                case 4:
                    t = "Cowboy_three_of_a_kind_text";
                    break;
                case 5:
                    t = "M_UITitle117";
                    break;
                case 6:
                    t = "M_UITitle118";
                    break;
                case 7:
                    t = "M_UITitle119";
                    break;
                case 8:
                    t = "Cowboy_quads_text";
                    break;
                case 9:
                    t = "M_UITitle121";
                    break;
                case 10:
                    t = "M_UITitle122"
            }
            return z.config.getStringData(t)
        }
        updateCardTypeText() {
            var e, t, i, n, o, a;
            const s = q.getPokerMasterRoom().fisherLevel,
                r = q.getPokerMasterRoom().sharkLevel;
            null == (e = this._left_card_type_win_node) || e.setString(this.getCardTypeString(s)), null == (t = this._left_card_type_lose_node) || t.setString(this.getCardTypeString(s)), null == (i = this._left_card_lead_node) || i.setString(z.config.getStringData("PokerMasterLead")), null == (n = this._right_card_type_win_node) || n.setString(this.getCardTypeString(r)), null == (o = this._right_card_type_lose_node) || o.setString(this.getCardTypeString(r)), null == (a = this._right_card_lead_node) || a.setString(z.config.getStringData("PokerMasterLead"))
        }
        _resetCardTypeOrRoleLead() {
            this._img_left_card_type_bg.node.setScale(d(g.ONE)), Fe.stopAll(this._img_left_card_type_bg.node), this._img_left_card_type_bg.node.active = !1, this._img_left_card_type.node.active = !1, this._img_right_card_type_bg.node.setScale(d(g.ONE)), Fe.stopAll(this._img_right_card_type_bg.node), this._img_right_card_type_bg.node.active = !1, this._img_right_card_type.node.active = !1, this._left_card_type_win_node.node.active = !1, this._left_card_type_lose_node.node.active = !1, this._right_card_type_win_node.node.active = !1, this._right_card_type_lose_node.node.active = !1, this._left_card_lead_node.node.active = !1, this._right_card_lead_node.node.active = !1
        }
        _showOdds(e, t) {
            let i = q.getPokerMasterRoom().mapZoneData.get(e);
            if (!i) return;
            let n = Q.getNumberFixedDown(i.odds, 2),
                o = z.String(n) + (z.config.getCurrentLanguage() == me.zh_CN || z.config.getCurrentLanguage() == me.zh_TW ? ";" : ""),
                a = this._getAreaIdxByBetOption(e);
            if (a < 0 || a >= this._vAreasInfo.length) return;
            let s = this._vAreasInfo[a].txtOdds;
            s.node.active = !0, s.string = o, t && (s.node.scale = d(3, 3, 3), s.node.addOrGetComponent(R).opacity = 20, Fe.scaleAndFade(s.node, 1, d(g.ONE), 255, null, null))
        }
        _hideOdds(e) {
            let t = this._getAreaIdxByBetOption(e);
            t < 0 || t >= this._vAreasInfo.length || (this._vAreasInfo[t].txtOdds.string = "", this._vAreasInfo[t].txtOdds.node.active = !1, Fe.stopAll(this._vAreasInfo[t].txtOdds.node))
        }
        _showAllOdds(e) {
            for (let t = 0; t < this._vAreasInfo.length; ++t) this._showOdds(this._vAreasInfo[t].zoneOption, e)
        }
        _hideAllOdds() {
            this._vAreasInfo.forEach((e => {
                this._hideOdds(e.zoneOption)
            }))
        }
        _showWinPlayerLightAnim(e, t) {
            let i = this._getPlayerHeadNodesByUid(e);
            if (i.length <= 0) return;
            W(this._nodeAnim).delay(t).call((() => {
                for (let e = 0; e < i.length; ++e) {
                    let t = i[e];
                    if (t === this._img_self_head.node) continue;
                    let n = P("win_player_light", t);
                    n && T(n, !0) && (t.removeChild(n), n.destroy());
                    let o = m(this.prefab_cb_win_player_light);
                    t.addChild(o), o.active = !0, o.name = "win_player_light", o.setPosition(g.ZERO), o.setSiblingIndex(10);
                    let a = o.getComponent(D);
                    a.defaultClip.wrapMode = x.WrapMode.Loop, a.play()
                }
            })).start()
        }
        _hideAllWinPlayerLightAnim() {
            for (let e = 0; e < this._vOtherPlayerInfo.length; ++e) {
                let t = P("win_player_light", this._vOtherPlayerInfo[e].nodeHead);
                t && T(t, !0) && (this._vOtherPlayerInfo[e].nodeHead.removeChild(t), t.destroy())
            }
        }
        _getPlayerCoinNodesByUid(e) {
            let t = [];
            e === z.dataHandler.getMiniGameUserId() && t.push(this._img_self_gold.node);
            for (let i = 0; i < this._vOtherPlayerInfo.length; ++i) e > 0 && this._vOtherPlayerInfo[i].uid === e && t.push(this._vOtherPlayerInfo[i].nodeHead);
            return t
        }
        _getPlayerHeadNodesByUid(e) {
            let t = [];
            e === z.dataHandler.getMiniGameUserId() && t.push(this._img_self_head.node);
            for (let i = 0; i < this._vOtherPlayerInfo.length; ++i) e > 0 && this._vOtherPlayerInfo[i].uid === e && t.push(this._vOtherPlayerInfo[i].nodeHead);
            return t
        }
        _getBetDetailAmounts(e) {
            let t = q.getPokerMasterRoom().tCurRoom.totalAmountLevel;
            return Q.disinteBetAmounts(e, t)
        }
        _hideAreaCoinsAnim(e) {
            let t = q.getPokerMasterRoom().tRoundresult.winOp;
            for (let i = 0; i < this._vAreasInfo.length; ++i) {
                let n = this._vAreasInfo[i].zoneOption,
                    o = this._mapCoinQueue.get(n),
                    a = q.getPokerMasterRoom().mapZoneData.get(n);
                if (!o || !a) return;
                let s = (n == Ze.pokermaster_proto.BetZoneOption.FISHER_WIN || n == Ze.pokermaster_proto.BetZoneOption.SHARK_WIN) && t == Ze.pokermaster_proto.BetZoneOption.EQUAL;
                if (!e && s) continue;
                let r = a.result;
                if (e && 1 === r || !e && 0 === r || e && s)
                    for (let e = 0; e < o.size(); ++e) {
                        let t = o.at(e);
                        t.node.active && Fe.fadeOut(t.node, this._fActDelayed_FlyWinCoin, (() => {
                            t.node.active = !1
                        }))
                    }
            }
        }
        _showCoinToWinAreaFromSystem(e = !0) {
            let t = [];
            for (let e = 0; e < q.getPokerMasterRoom().vPlayerSettles.length; ++e) t.push(q.getPokerMasterRoom().vPlayerSettles[e]);
            t.push(q.getPokerMasterRoom().tOtherPlayerSettle);
            for (let i = 0; i < t.length; ++i) {
                let n = t[i];
                for (let t = 0; t < n.settle.length; ++t) {
                    let i = n.settle[t],
                        o = i.winAmount;
                    if (o <= 0) continue;
                    o -= i.betAmount;
                    let a = this._getAreaIdxByBetOption(i.option);
                    if (a < 0 || a >= this._vAreasInfo.length) continue;
                    let s = this._vAreasInfo[a].panelCoin,
                        r = d(g.ZERO);
                    s.convertToWorldSpaceAR(d(g.ZERO), r);
                    let _ = this._getBetDetailAmounts(o);
                    for (let t = 0; t < _.length; ++t) {
                        let i = .2 + .02 * t;
                        this._showCoinToWinAreaFromPos(r, a, _[t], e, i)
                    }
                }
            }
        }
        _showCoinToWinAreaFromPos(e, t, i, n, o, a = null) {
            if (t < 0 || t >= this._vAreasInfo.length) return;
            let s = this._getCoinFromPool(t, i);
            if (!s) return;
            let r = d(g.ZERO);
            s.node.parent.convertToNodeSpaceAR(e, r);
            let _ = this._getCoinRandomPos(s.node, t, !0);
            s.node.parent.convertToNodeSpaceAR(_, _), n ? (s.node.setPosition(r), this.scheduleOnce((e => {
                s.node.active = !0, W(s.node).sequence(W().to(.5, {
                    position: _
                }, {
                    easing: Fe.easeOut(.8)
                }), W().by(.15, {
                    angle: 180
                }), W().by(.15, {
                    angle: 180
                }), W().call(a)).start()
            }), o)) : (s.node.active = !0, s.node.setPosition(_), a && a())
        }
        _showFlyCoinToPlayerAnim(e, t, i, n = !0, o = null) {
            if (t <= 0 || !i) return;
            let a = this._getPlayerCoinNodesByUid(e);
            0 === a.length && (console.log(`showFlyCoinToPlayerAnim - playerSettles uid: ${e} not in gameplayers, use player list button`), a.push(this._btn_playerList));
            for (let s = 0; s < a.length; ++s) {
                if (e === z.dataHandler.getMiniGameUserId() && s > 0) continue;
                let r = a[s],
                    _ = this._getBetDetailAmounts(t);
                for (let e = 0; e < _.length; ++e) {
                    let t = this._createFlyCoin(_[e]);
                    this._nodeAnim.insertChild(t.node, $.LayerZorder.Z_IDX_ANIM_NODE_0), this.flyCoinToPlayerArr.push(t.node);
                    let o = d(g.ZERO);
                    n && (o.x = z.StringTools.randomRange(.3 * i.getComponent(A).width, .7 * i.getComponent(A).width) - i.getComponent(A).width * i.getComponent(A).anchorX, o.y = z.StringTools.randomRange(.3 * i.getComponent(A).height, .7 * i.getComponent(A).height) - i.getComponent(A).height * i.getComponent(A).anchorY);
                    let a = d(g.ZERO);
                    i.convertToWorldSpaceAR(o, a);
                    let s = d(g.ZERO);
                    r.convertToWorldSpaceAR(d(g.ZERO), s), t.node.parent.convertToNodeSpaceAR(a, a), t.node.parent.convertToNodeSpaceAR(s, s), t.node.setPosition(a), this.scheduleOnce((i => {
                        z.tools.isValidNode(t) ? (t.node.active = !0, W(t.node).delay(.2 + .02 * e).to(.5, {
                            position: s
                        }, {
                            easing: Fe.easeOut(.8)
                        }).destroySelf().start()) : console.error("PokerMasterScene - _showFlyCoinToPlayerAnim: flyCoin.node isn't exist")
                    }), this._fActDelayed_FlyWinCoin)
                }
                o && t > 0 && (this._showHeadElasticAnim(r, this._fActExecute_FlyWinCoin), this._showWinPlayerLightAnim(e, this._fActExecute_FlyWinCoin), this._showAddCoinAnim(r, t, this._fActExecute_FlyWinCoin, o))
            }
        }
        _showAddCoinAnim(e, t, i, n = null) {
            e && W(this._nodeAnim).delay(i).call((() => {
                let i = q.getPokerMasterRoom().transNumberToString(t, 2, !0),
                    o = m(this.prefab_hb_flutterScore).getComponent(re);
                o.node.setScale(d(1.4, 1.4, 1.4)), this._nodeAnim.insertChild(o.node, $.LayerZorder.Z_IDX_ANIM_NODE_2), o.init(i);
                let a = d(g.ZERO);
                e.convertToWorldSpaceAR(d(g.ZERO), a), o.node.parent.convertToNodeSpaceAR(a, a);
                {
                    let t = 10,
                        i = this.getWinSize().width / 2 - Math.abs(a.x),
                        n = o.node.getComponent(A).width * o.node.scale.x;
                    o.node.getComponent(A).height, o.node.scale.y;
                    if (e === this._img_self_gold.node) {
                        let o = Math.max(0, n / 2 - i);
                        a.x += o, a.y += e.getComponent(A).height / 2 + t
                    } else if (e === this._btn_playerList) {
                        let o = Math.max(0, n / 2 - i);
                        a.x -= o, a.y += e.getComponent(A).height / 2 + t
                    } else a.x < 0 ? a.x += e.getComponent(A).width / 2 + n / 2 + t : a.x > 0 && (a.x -= e.getComponent(A).width / 2 + n / 2 + t)
                }
                o.node.setPosition(a), o.show(), W(this._nodeAnim).delay(this._fActDelayed_FlyWinCoin).call(n).start()
            })).start()
        }
        _showHeadElasticAnim(e, t) {
            if (!e) return;
            let i = d(e.scale);
            W(e).delay(t).sequence(W(e).to(.5, {
                scale: d(i.x + .2, i.y + .2, i.z + .2)
            }, {
                easing: G.backOut
            }), W(e).to(.2, {
                scale: d(i.x - .2, i.y - .2, i.z - .2)
            }), W(e).to(.5, {
                scale: i
            }, {
                easing: G.backOut
            })).start()
        }
        _showAllAreaWinFlagsAndFlyCoinAnim() {
            this._hideAreaCoinsAnim(!0);
            let e = [];
            for (let t = 0; t < q.getPokerMasterRoom().vPlayerSettles.length; ++t) e.push(q.getPokerMasterRoom().vPlayerSettles[t]);
            e.push(q.getPokerMasterRoom().tOtherPlayerSettle);
            for (let t = 0; t < e.length; ++t) {
                let i = e[t],
                    n = i.uid,
                    o = i.totalWinAmount;
                for (let e = 0; e < i.settle.length; ++e) {
                    let t = i.settle[e],
                        o = t.option,
                        a = this._getAreaIdxByBetOption(o);
                    if (a < 0 || a >= this._vAreasInfo.length) continue;
                    let s = t.winAmount;
                    if (s > 0) {
                        let e = this._vAreasInfo[a].panelCoin;
                        this._showFlyCoinToPlayerAnim(n, s, e, !0)
                    }
                }
                if (o > 0) {
                    let e = this._getPlayerCoinNodesByUid(n);
                    0 === e.length && (console.log("playerSettles uid: %d not in gameplayers, use player list button", n), e.push(this._btn_playerList));
                    for (let t = 0; t < e.length; ++t) {
                        if (t > 0 && n === z.dataHandler.getMiniGameUserId()) continue;
                        let i = e[t];
                        this._showHeadElasticAnim(i, this._fActExecute_FlyWinCoin), this._showWinPlayerLightAnim(n, this._fActExecute_FlyWinCoin), this._showAddCoinAnim(i, o, this._fActExecute_FlyWinCoin)
                    }
                }
            }
        }
        _clearData() {
            this._removeObserver(), this._stopSound("", !0), this._resetAllUI(), q.getPokerMasterRoom().reset(), z.pokerMasterNet.unregisterNetMsgs(), $.clear()
        }
        _backToRoomListScene() {
            var e;
            z.netWorkManager.closeGameConnect(!1, z.Enum.GameId.PokerMaster, q.getPokerMasterRoom().u32RoomId), this._clearData(), z.viewAdaptive.isselfchange = !1, z.viewAdaptive.humanboyroomid = 0;
            const t = null == (e = this.gameSceneInstance) ? void 0 : e.room;
            null == t || t.reset(), z.action.switchScene(z.Enum.SCENE.HALL_SCENE, (e => {
                z.MessageCenter.send($.LocalMsg().SWITCH_SCENE_TO_MINIGAME)
            }))
        }
        _backToMainScene(e, t) {
            z.netWorkManager.closeGameConnect(!1, z.Enum.GameId.PokerMaster, z.roomManager.getMiniGameRoomIdTemplate(z.Enum.GameId.PokerMaster)), z.isDesktopBuild() && z.appConfig.getGeneralConfig().multiWindowEnabled ? z.MessageCenter.send("showMainTip", e) : q.getPokerMasterRoom().sBackToMainTips = z.String(e), t ? z.roomManager.RequestLeaveRoom(z.Enum.GameId.PokerMaster, z.roomManager.getMiniGameRoomIdTemplate(z.Enum.GameId.PokerMaster)) : (z.casinoTracing.logInfo({
                spanName: Ie.CasinoKickOut,
                eventName: "ExecBackToMainScene",
                attribute: {
                    gameId: z.Enum.GameId.PokerMaster,
                    roomId: z.roomManager.getMiniGameRoomIdTemplate(z.Enum.GameId.PokerMaster)
                }
            }), z.roomManager.onResponse_LeaveRoom(Ze.pokermaster_proto.LeaveRoomResp.create({
                code: 1
            }), z.Enum.GameId.PokerMaster, z.roomManager.getMiniGameRoomIdTemplate(z.Enum.GameId.PokerMaster)), z.casinoTracing.logInfo({
                spanName: Ie.CasinoKickOut,
                eventName: "FinishLeaveRoom",
                attribute: {
                    gameId: z.Enum.GameId.PokerMaster,
                    roomId: z.roomManager.getMiniGameRoomIdTemplate(z.Enum.GameId.PokerMaster)
                }
            }))
        }
        _playSoundEffect(e, t = !1) {
            this._isLeaving || z.tools.IsMiniGameSoundEffectOn() && (this._mapSounds.has(e) || this._mapSounds.add(e, !0), Ne.playSoundEffect(e, t))
        }
        _pauseSound(e, t = !1) {
            if (t) this._mapSounds.forEach(((e, t, i) => {
                let n = Ne.getAudioID(e);
                Ne.pause(n)
            }));
            else {
                if (!this._mapSounds.has(e)) return;
                let t = Ne.getAudioID(e);
                Ne.pause(t)
            }
        }
        _resumeSound(e, t = !1) {
            if (t) this._mapSounds.forEach(((e, t, i) => {
                let n = Ne.getAudioID(e);
                Ne.resume(n)
            }));
            else {
                if (!this._mapSounds.has(e)) return;
                let t = Ne.getAudioID(e);
                Ne.resume(t)
            }
        }
        _stopSound(e, t = !1) {
            if (t) this._mapSounds.forEach(((e, t, i) => {
                let n = Ne.getAudioID(e);
                Ne.stop(n)
            }));
            else {
                if (!this._mapSounds.has(e)) return;
                let t = Ne.getAudioID(e);
                Ne.stop(t)
            }
        }
        _resetLeftTime() {
            this._nLeftTime = q.getPokerMasterRoom().llLeftSeconds, this._msNowTime = 0, this._msLastTime = 0
        }
        _getLeftTime() {
            return this._nLeftTime
        }
        _showBetClockAction(e, t = !0) {
            this._img_bet_clock.active = !0, Fe.stopAll(this._img_bet_clock), this._img_bet_clock.setPosition(this._img_bet_clock_src_pos);
            let i = d(0, this.getWinSize().height / 2 + this._img_bet_clock.getComponent(A).height / 2, 0);
            this.node.convertToWorldSpaceAR(i, i);
            let n = d(g.ZERO);
            this._img_bet_clock.parent.convertToNodeSpaceAR(i, n);
            let o = d(this._img_bet_clock_src_pos.x, n.y),
                a = this._img_bet_clock.getChildByName("txt").getComponent(B);
            a.string = "1", e ? (t ? (this._img_bet_clock.setPosition(o), W(this._img_bet_clock).to(this._fActExecute_BetClock, {
                position: this._img_bet_clock_src_pos
            }, {
                easing: G.backOut
            }).start()) : this._img_bet_clock.setPosition(this._img_bet_clock_src_pos), a.string = z.StringTools.formatC("%lld", this._getLeftTime())) : t ? (this._img_bet_clock.setPosition(this._img_bet_clock_src_pos), W(this._img_bet_clock).to(this._fActExecute_BetClock, {
                position: o
            }, {
                easing: G.backIn
            }).call((() => {
                this._img_bet_clock.active = !1
            })).start()) : (this._img_bet_clock.setPosition(this._img_bet_clock_src_pos), this._img_bet_clock.active = !1)
        }
        _startTimeBetClock() {
            q.getPokerMasterRoom().eCurState === Ze.pokermaster_proto.RoundState.BET && this._getLeftTime() > 0 && (this.schedule(this._onTimeBetClock, 1), this._showBetClockAction(!0, !0))
        }
        _stopTimeBetClock(e = !1) {
            this.unschedule(this._onTimeBetClock), this._showBetClockAction(!1, e)
        }
        _onTimeBetClock(e) {
            q.getPokerMasterRoom().eCurState === Ze.pokermaster_proto.RoundState.BET && this._getLeftTime() > 0 ? (this._playSoundEffect($.Sounds().sound_time_tick), this._showBetClockAction(!0, !1)) : this._stopTimeBetClock(!0)
        }
        _startWaittingNextRound() {
            let e = this._getLeftTime();
            q.getPokerMasterRoom().eCurState === Ze.pokermaster_proto.RoundState.WAIT_NEXT_ROUND && e >= 0 && (this.unschedule(this._onTimeWaittingNextRound), this.schedule(this._onTimeWaittingNextRound, 1), this._updateCountDownClock(!0, e))
        }
        _stopWaittingNextRound() {
            this.unschedule(this._onTimeWaittingNextRound), this._updateCountDownClock(!1, 0)
        }
        _onTimeWaittingNextRound() {
            let e = this._getLeftTime();
            q.getPokerMasterRoom().eCurState === Ze.pokermaster_proto.RoundState.WAIT_NEXT_ROUND && e > 0 ? this._updateCountDownClock(!0, e) : this._stopWaittingNextRound()
        }
        _startPrepareNextRound() {
            if (0 != q.getPokerMasterRoom().nStopWorld) this._showGameToast(z.config.getStringDataCasino("Humanboy_server_will_stop_text")), W(this._nodeAnim).delay(2).call((() => {
                this._backToRoomListScene()
            })).start();
            else {
                let e = this._getLeftTime();
                q.getPokerMasterRoom().eCurState === Ze.pokermaster_proto.RoundState.READY_GAME && e > 0 && (z.MessageCenter.send("on_pokerMaster_willstart_notify"), this.unschedule(this._onTimePrepareNextRound), this.schedule(this._onTimePrepareNextRound, 1), this._updateCountDownClock(!0, e))
            }
        }
        _stopPrepareNextRound() {
            this.unschedule(this._onTimePrepareNextRound), this._updateCountDownClock(!1, 0)
        }
        _onTimePrepareNextRound() {
            let e = this._getLeftTime();
            q.getPokerMasterRoom().eCurState === Ze.pokermaster_proto.RoundState.READY_GAME && e > 0 ? this._updateCountDownClock(!0, e) : this._stopPrepareNextRound()
        }
        _updateCountDownClock(e, t) {
            this._img_count_down.active = e, this._img_count_down.setPosition(this._img_count_down_src_pos);
            let i = this._img_count_down.getChildByName("txt").getComponent(B);
            if (e) switch (q.getPokerMasterRoom().eCurState) {
                case Ze.pokermaster_proto.RoundState.WAIT_NEXT_ROUND:
                    i.string = z.StringTools.formatC(z.config.getStringDataCasino("Humanboy_game_tips_wait_next_enter_text"), t);
                    break;
                case Ze.pokermaster_proto.RoundState.READY_GAME:
                    i.string = z.StringTools.formatC(z.config.getStringDataCasino("Humanboy_game_tips_wait_next_round_text"), t)
            } else i.string = "", this._img_count_down.setPosition(this._img_count_down_src_pos)
        }
        _showGameToast(e, t = .5) {
            let i = m(this.prefab_hb_toast).getComponent(ne);
            i.txt.string = e, this.node.insertChild(i.node, $.LayerZorder.Z_IDX_PANEL_SERVER_TOAST), W(i.node).by(1, {
                position: d(0, 120, 0)
            }).delay(.5).call((() => {
                W(i.node.getComponent(R)).to(.8, {
                    opacity: 0
                }, {
                    easing: Fe.easeInOut(1)
                }).start()
            })).start()
        }
        _showCoinAnim(t, i, n, o, a, s, r = null) {
            if (t < 0 || t >= this._vAreasInfo.length) return;
            let _ = this._getBetOptionByAreaIdx(t);
            if (o) {
                let o = this._getPlayerCoinNodesByUid(n);
                0 === z.StringTools.getArrayLength(o) && (console.log(`${e.gClassName} showBetInAnim, cannot find valid headBg, use btnPlayerList, oneBet.uid: ${n}`), o.push(this._btn_playerList));
                let l = d(g.ZERO),
                    h = d(g.ZERO);
                for (let e = 0; e < o.length; ++e) {
                    let g = o[e];
                    if (g.parent.convertToWorldSpaceAR(g.position, l), null == g.isTweenRunning && (g.isTweenRunning = !1), a && g != this._img_self_gold.node && !g.isTweenRunning) {
                        g.isTweenRunning = !0;
                        let e = 20,
                            t = 0,
                            i = null;
                        i = l.x < this.getWinSize().width / 2 ? W(g).sequence(W().by(.1, {
                            position: d(-e, 0, 0)
                        }), W().by(.1, {
                            position: d(e, t, 0)
                        }, {
                            easing: Fe.easeInOut(1)
                        })) : W(g).sequence(W().by(.1, {
                            position: d(e, t, 0)
                        }), W().by(.1, {
                            position: d(-e, t, 0)
                        }, {
                            easing: Fe.easeInOut(1)
                        })), i && i.call((() => {
                            g.isTweenRunning = !1
                        })).start()
                    }
                    if (!(n === z.dataHandler.getMiniGameUserId() && e > 0)) {
                        let n = this._getCoinFromPool(_, i);
                        if (n)
                            if (n.node.setPosition(n.node.parent.convertToNodeSpaceAR(l)), 0 === e) {
                                if (s) {
                                    let e = z.StringTools.clientGoldByServer(i) < q.getPokerMasterRoom().llCoinUICritical ? $.Sounds().sound_betin : $.Sounds().sound_betin_many;
                                    this._playSoundEffect(e)
                                }
                                h = this._getCoinRandomPos(n.node, t, !0), n.node.parent.convertToNodeSpaceAR(h, h), console.log("#>#>#>#>#>#> coin.node.parent.size " + n.node.parent.getComponent(A).contentSize), console.log("#>#>#>#>#>#> coin.node.parent " + n.node.parent.name + " / position : " + h), n.node.active = !0, W(n.node).to(.3, {
                                    position: h
                                }).by(.15, {
                                    angle: 180
                                }).by(.15, {
                                    angle: 180
                                }).call(r).start()
                            } else n.node.active = !0, W(n.node).to(.3, {
                                position: h
                            }).by(.15, {
                                angle: 180
                            }).by(.15, {
                                angle: 180
                            }).call((() => {
                                n.node.active = !1
                            })).start()
                    }
                }
            } else {
                let e = this._getCoinFromPool(_, i);
                if (e) {
                    let i = this._getCoinRandomPos(e.node, t, !0);
                    e.node.setPosition(e.node.parent.convertToNodeSpaceAR(i)), e.node.active = !0
                }
                r && r()
            }
        }
        _gameStepsAnimStart(e = 0) {
            let t = 0;
            switch (e) {
                case 0:
                    t += this._fActDelayed_RoundStart, W(this._nodeAnim).delay(t).call((() => {
                        this._showRoundStartAnim()
                    })).start(), t += this._fActExecute_RoundStart;
                case 1:
                    t += this._fActDelayed_SendCard, W(this._nodeAnim).delay(t).call((() => {
                        this._sendCardAnim()
                    })).start(), t += this._fActExecute_SendCard;
                case 2:
                    t += this._fActDelayed_ShowHandCard, W(this._nodeAnim).delay(t).call((() => {
                        this._showHandCardsAnim()
                    })).start(), t += this._fActExecute_ShowHandCard
            }
        }
        _gameStepsAnimOdds(e = 0) {
            let t = 0;
            switch (e) {
                case 0:
                    t += this._fActDelayed_ShowOdds, W(this._nodeAnim).delay(t).call((() => {
                        this._showAllOdds(!0)
                    })).start(), t += this._fActExecute_ShowOdds;
                case 1:
                    t += this._fActDelayed_StartBet, W(this._nodeAnim).delay(t).call((() => {
                        this._showStartBetAnim()
                    })).start(), t += this._fActExecute_Startbet
            }
        }
        _gameStepsAnimStopBet(e = 0) {
            let t = 0;
            switch (e) {
                case 0:
                    t += this._fActDelayed_StopBet, W(this._nodeAnim).delay(t).call((() => {
                        this._showStopBetAnim()
                    })).start(), t += this._fActExecute_StopBet;
                case 1:
                    t += this._fActDelayed_ShowTurnCard, W(this._nodeAnim).delay(t).call((() => {
                        this._showPublicHoleCardsAnim(4)
                    })).start(), t += this._fActExecute_ShowTurnCard;
                case 2:
                    t += this._fActDelayed_ShowCardType, W(this._nodeAnim).delay(t).call((() => {
                        this.showTempPaixing(q.getPokerMasterRoom().fisherLevel, q.getPokerMasterRoom().sharkLevel), this._showRoleLeadAnim(!0)
                    })).start(), t += this._fActExecute_ShowCardType;
                case 3: {
                    let e = q.getPokerMasterRoom().vPublicHoleCards[4];
                    this.preLoadCard(e.number, e.suit);
                    let i = this._getLeftTime() - this._fActDelayed_ShowRiverCard - this._fActExecute_ShowRiverCard;
                    if (i = Math.min(this._fActExecute_Squint_Card, i), q.getPokerMasterRoom().bSkipSquint) return;
                    i >= 1 && (t += this._fActDelayed_Squint_Card, W(this._nodeAnim).delay(t).call((() => {
                        var t, n;
                        (this.isSquintCard = !0, this._humanboyMenu && this._humanboyMenu.hide(!1), this._humanboyRule) && (null == (n = this._humanboyRule.getComponent(Me)) || n.close());
                        this._humanboySetting && this._humanboySetting.close(), this._humanboyAdvancedSetting && this._humanboyAdvancedSetting.hide(), this._humanboyAdvancedSetting && this._humanboyAdvancedSetting.hide();
                        let o = this.node.getChildByName("PokerMaster_Dialog");
                        o && o.getComponent(oe).close();
                        let a = this.node.getChildByName("PokerMaster_nodeExit");
                        a && (a.active = !1), this._pokerMasterChart && this._pokerMasterChart.close(), this._humanboyPlayerList && (this._humanboyPlayerList.node.active = !1), this._pokerMasterReview && this._pokerMasterReview.autoHide(!1), this._luckButton && this._luckButton.hidePopup(), this._humanboyAdvancedAuto && (this._humanboyAdvancedAuto.hideAdvanceAutoTips(), this._humanboyAdvancedAuto.hideSelectPanel(!1));
                        let s = this.node.getChildByName("GAB_STYLE_ADVANCE_USING_tips");
                        if (s && s.getComponent(oe).close(), q.getPokerMasterRoom().bCanSquint) {
                            let e = z.TP.getTag();
                            null != e && "NoticeMTT_MatchBegin" == e && z.TP.hideTipsPanel()
                        }
                        let r = this.node.getChildByName("humanboy_dialog_recharge");
                        r && (r.removeFromParent(), r.destroy()), this.advanceAutoAddBet && this.advanceAutoAddBet.getComponent(Ae).hideSelectPanel(!1), z.miniGamePopupManager.processClose(null == (t = this.gameSceneInstance) || null == (t = t.room) ? void 0 : t.gameScene), this._initSquintCardInfo(), this._squintCard.show(q.getPokerMasterRoom().bCanSquint, e.number, e.suit, i, q.getPokerMasterRoom().sharkOuts, q.getPokerMasterRoom().dashiOuts, this.isIphoneX_area)
                    })).start(), t += i), W(this._nodeAnim).delay(t).call((() => {
                        this._resetSquintCardInfo()
                    })).start()
                }
            }
        }
        _gameStepsAnimRoundEnd(e = 0) {
            let t = 0,
                i = q.getPokerMasterRoom().vPublicHoleCards[4];
            switch (e) {
                case 0:
                    W(this._nodeAnim).delay(t).call((() => {
                        let e = this._vPublicHoleCards.length - 1;
                        i && this._vPublicHoleCards[e].SetContent(i.number, i.suit), this._vPublicHoleCards[e].Turn(!0), this._playSoundEffect($.Sounds().sound_kaipai)
                    })).start(), t += this._fActExecute_ShowRiverCard;
                case 1:
                    t += this._fActDelayed_ShowCardType, W(this._nodeAnim).delay(t + .4).call((() => {
                        this._updateWinCardGray(), this._showCardTypeAnim(!0)
                    })).start(), t += this._fActExecute_ShowCardType;
                case 2:
                    t += 0, W(this._nodeAnim).delay(t).call((() => {
                        this._hideAreaCoinsAnim(!1), this.playResultAni()
                    })).start(), t += this._fActDelayed_FlyWinCoin;
                case 3:
                    W(this._nodeAnim).delay(t).call((() => {
                        this.showSpecialCardTypeAnim() || this._showAllWinFlagAnim()
                    })).start(), this.isResultSpecialCardType() && (t += this._special_type_time), t += this._fActDelayed_ShowWinFlag;
                case 4: {
                    let e = !1,
                        i = [];
                    for (let e = 0; e < q.getPokerMasterRoom().vPlayerSettles.length; ++e) i.push(q.getPokerMasterRoom().vPlayerSettles[e]);
                    i.push(q.getPokerMasterRoom().tOtherPlayerSettle);
                    for (let t = 0; t < i.length; ++t) {
                        if (i[t].totalWinAmount > 0) {
                            e = !0;
                            break
                        }
                    }
                    e && (W(this._nodeAnim).delay(t).call((() => {
                        this._showCoinToWinAreaFromSystem()
                    })).start(), t += this._fActExecute_FlyWinCoin, W(this._nodeAnim).delay(t).call((() => {
                        this._hideAllWinFlagAnim(), this._playSoundEffect($.Sounds().sound_get_win_coin), this._showAllAreaWinFlagsAndFlyCoinAnim()
                    })).start()), W(this._nodeAnim).delay(t).call((() => {
                        this._showTopWayOutAnim(), this._showAllWayOutAnim()
                    })).start(), e && (t += this._fActExecute_FlyWinCoin), W(this._nodeAnim).delay(t).call((() => {
                        if (this._updateAllPlayerGold(), this._updateAllPlayerWinCount(!0), 0 != q.getPokerMasterRoom().nStopWorld) {
                            let e = q.getPokerMasterRoom().idle_roomid > 0;
                            e || this._showGameToast(z.config.getStringDataCasino("Humanboy_server_will_stop_text")), W(this._nodeAnim).delay(2).call((() => {
                                e ? this.showSwitchTable() : this._backToRoomListScene()
                            })).start()
                        }
                    }))
                }
            }
        }
        _gameStepsAnimReady() {
            this._resetAllUI(), this._updateAllWayOut(), this._startPrepareNextRound()
        }
        _showChart() {
            this._pokerMasterChart ? this._pokerMasterChart.node.active = !0 : (this._pokerMasterChart = m(this.prefab_pm_chart).getComponent(de), this.node.insertChild(this._pokerMasterChart.node, $.LayerZorder.Z_IDX_PANEL_RECORD)), z.pokerMasterNet.requestTrend()
        }
        _showReview() {
            this._pokerMasterReview || (this._pokerMasterReview = m(this.prefab_pm_review).getComponent(ge), this.node.insertChild(this._pokerMasterReview.node, $.LayerZorder.Z_IDX_PANEL_RECORD)), this._pokerMasterReview.autoShow()
        }
        _updateBetAmountLevel() {
            let t = q.getPokerMasterRoom().vBetCoinOption;
            for (let i = 0; i < t.length; ++i)
                if (i < this._nBetBtnNum) {
                    let e = z.StringTools.clientGoldByServer(t[i]);
                    this._vBetButtons[i].setTxtNum(z.StringTools.numberToShowNumber(e)), e < q.getPokerMasterRoom().llCoinUICritical ? this._vBetButtons[i].setShape(ae.eHumanboyBetCoinShape.SHAPE_COIN) : this._vBetButtons[i].setShape(ae.eHumanboyBetCoinShape.SHAPE_BLOCK)
                } else console.error(`${e.gClassName} updateBetAmountLevel vBetCoinOption must be ${this._nBetBtnNum}, size: ${t.length}`);
            switch (q.getPokerMasterRoom().eAutoLevel) {
                case Ze.pokermaster_proto.AutoBetLevel.Level_Normal:
                    this._setAutoBetBtnStytle(Q.eGameboyAutoBtnStyle.GAB_STYLE_NORMAL);
                    break;
                case Ze.pokermaster_proto.AutoBetLevel.Level_Advance:
                    q.getPokerMasterRoom().iSelectAutoBetCount > 0 ? this._setAutoBetBtnStytle(Q.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING) : this._setAutoBetBtnStytle(Q.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE)
            }
            this._adaptiveBetBtnPanel()
        }
        _getCurBetLevel() {
            if (this._nCurBetBtnIndex < 0) return 0;
            return q.getPokerMasterRoom().vBetCoinOption[this._nCurBetBtnIndex]
        }
        _getAreaIdxByBetOption(e) {
            for (let t = 0; t < this._vAreasInfo.length; ++t)
                if (this._vAreasInfo[t].zoneOption === e) return this._vAreasInfo[t].zoneIndex;
            return -1
        }
        _getBetOptionByAreaIdx(e) {
            for (let t = 0; t < this._vAreasInfo.length; ++t)
                if (this._vAreasInfo[t].zoneIndex === e) return this._vAreasInfo[t].zoneOption;
            return Ze.pokermaster_proto.BetZoneOption.BetZoneOption_DUMMY
        }
        _checkAdvanceAutoReq() {
            q.getPokerMasterRoom().eCurState === Ze.pokermaster_proto.RoundState.BET && this._getAutoBetBtnStytle() === Q.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING && (this._humanboyAdvancedAuto && this._humanboyAdvancedAuto.hideAdvanceAutoTips(), q.getPokerMasterRoom().iUsedAutoBetCount < q.getPokerMasterRoom().iSelectAutoBetCount && z.pokerMasterNet.reqAdvanceAutoBet())
        }
        _onClickAreaCoinPanel(t) {
            if (t < 0 || t >= this._vAreasInfo.length) return;
            if (z.appConfig.isWebApp && (!z.dataHandler.getUserData().isLoggedIn() || z.dataHandler.getUserData().isTouristUser)) return void Ge.getInstance().switchToLoginOrRegistrationScene();
            if (q.getPokerMasterRoom().eCurState === Ze.pokermaster_proto.RoundState.BET && this._getLeftTime() > 0) {
                if (this._nCurBetBtnIndex < 0) return void this._showGameToast(z.config.getStringDataCasino("Humanboy_not_select_betbtn"));
                z.pokerMasterNet.requestBet(this._vAreasInfo[t].zoneOption, this._getCurBetLevel())
            } else console.log(`${e.gClassName} click betArea, cannot bet, curState: ${q.getPokerMasterRoom().eCurState}, left bet time: ${this._getLeftTime()}`), this._showGameToast(z.config.getStringDataCasino("PokerMaster_ServerErrorCode51009"))
        }
        _onMsgSwitchSceneBegan(e) {
            console.log(z.StringTools.formatC("SwitchScene - From[%s] To [%s]", z.Enum.SCENE.POKERMASTER_SCENE, e)), this._clearData(), z.appConfig.isWebApp && (this._panel_game.active = !1)
        }
        onStatusLantencyUpdated(e) {
            this._statusController && this._statusController.showLatency(e)
        }
        _onMsgRecharge(e) {
            z.appConfig.getGeneralConfig().multiWindowEnabled || (z.viewAdaptive.isselfchange = !0, z.viewAdaptive.pokerMasterRoomID = q.getPokerMasterRoom().u32RoomId), z.SHOP.RechargeClick(!0)
        }
        _onMsgSoundSwitch() {
            z.tools.IsMiniGameMusicOn() ? Ne.playMusic($.Sounds().sound_bgm, !0) : Ne.stopMusic()
        }
        _onMsgGameError(e) {
            let t = z.Number(e),
                i = `PokerMaster_ServerErrorCode${t}`;
            if (t === Ze.pokermaster_proto.ErrorCode.BET_TOO_SMALL) {
                let e = z.StringTools.clientGoldByServer(q.getPokerMasterRoom().tCurRoom.smallBet);
                this._showGameToast(z.StringTools.formatC(z.config.getStringDataCasino(i), z.StringTools.numberToString(e)))
            } else t == Ze.pokermaster_proto.ErrorCode.NO_BET || this._showGameToast(z.config.getStringDataCasino(i))
        }
        _onMsgGameDataSyn(t) {
            if (t != z.Enum.GameId.PokerMaster) return;
            this._statusController && this._statusController.showLatency(Re.Normal);
            let i = q.getPokerMasterRoom().eCurState;
            switch (console.log(`${e.gClassName} RoundState =  ${i}`), this._bSwitchTable = !1, this.unscheduleAllCallbacks(), this._nodeAnim && Fe.stopAll(this._nodeAnim), this._resetAllUI(), i) {
                case Ze.pokermaster_proto.RoundState.RoundState_DUMMY:
                case Ze.pokermaster_proto.RoundState.GAME_PENDING:
                    break;
                case Ze.pokermaster_proto.RoundState.NEW_ROUND: {
                    this._updateTopWayOut(), this._updateAllWayOut();
                    let e = this._getLeftTime();
                    e >= this._fActExecute_RoundStart + this._fActExecute_SendCard + this._fActDelayed_SendCard + this._fActExecute_SendCard + this._fActDelayed_ShowHandCard + this._fActExecute_ShowHandCard + this._fActDelayed_ShowCardType + this._fActExecute_ShowCardType ? this._gameStepsAnimStart(0) : e >= this._fActDelayed_SendCard + this._fActExecute_SendCard + this._fActDelayed_ShowHandCard + this._fActExecute_ShowHandCard + this._fActDelayed_ShowCardType + this._fActExecute_ShowCardType ? this._gameStepsAnimStart(1) : e >= this._fActDelayed_ShowHandCard + this._fActExecute_ShowHandCard + this._fActDelayed_ShowCardType + this._fActExecute_ShowCardType ? (this._setAllCardsVisible(!0), this._gameStepsAnimStart(2)) : (this._setAllCardsVisible(!0), this._setAllHandsCardsFace(!0), this._showRoleLeadAnim(!1))
                }
                break;
                case Ze.pokermaster_proto.RoundState.SHOW_ODDS:
                    this._updateTopWayOut(), this._updateAllWayOut(), this._setAllCardsVisible(!0), this._setAllHandsCardsFace(!0), this._showRoleLeadAnim(!1), this._getLeftTime() >= this._fActDelayed_ShowOdds + this._fActExecute_ShowOdds + this._fActDelayed_StartBet + this._fActExecute_Startbet ? this._gameStepsAnimOdds(0) : this._getLeftTime() >= this._fActDelayed_StartBet + this._fActExecute_Startbet ? (this._showAllOdds(!1), this._gameStepsAnimOdds(1)) : this._showAllOdds(!1);
                    break;
                case Ze.pokermaster_proto.RoundState.BET:
                    this._updateTopWayOut(), this._updateAllWayOut(), this._setAllCardsVisible(!0), this._setAllHandsCardsFace(!0), this._showRoleLeadAnim(!1), this._showAllOdds(!1), this._recoverAreasCoin(!0), this._getLeftTime() >= this._fActDelayed_StartBet + this._fActExecute_Startbet && this._showStartBetAnim(), this._onMsgGameStatusStartBet(!0);
                    break;
                case Ze.pokermaster_proto.RoundState.STOP_BET: {
                    this._updateTopWayOut(), this._updateAllWayOut(), this._setAllCardsVisible(!0), this._setAllHandsCardsFace(!0), this._showRoleLeadAnim(!1), this._showAllOdds(!1), this._recoverAreasCoin(!0);
                    let e = this._getLeftTime();
                    e >= this._fActDelayed_StopBet + this._fActExecute_StopBet + this._fActDelayed_ShowTurnCard + this._fActExecute_ShowTurnCard + this._fActDelayed_ShowCardType + this._fActExecute_ShowCardType + this._miPai_time ? this._gameStepsAnimStopBet(0) : e >= this._fActDelayed_ShowTurnCard + this._fActExecute_ShowTurnCard + this._fActDelayed_ShowCardType + this._fActExecute_ShowCardType + this._miPai_time ? this._gameStepsAnimStopBet(1) : (this._gameStepsAnimStopBet(3), this._setAllPublicHoleCardsFace(!0, !0), this.showTempPaixing(q.getPokerMasterRoom().fisherLevel, q.getPokerMasterRoom().sharkLevel))
                }
                break;
                case Ze.pokermaster_proto.RoundState.WAIT_NEXT_ROUND: {
                    this._setAllCardsVisible(!0), this._setAllCardsFace(!0), this._showCardTypeAnim(!1), this._updateWinCardGray(), this._showAllOdds(!1);
                    let e = this._getLeftTime();
                    e > 5 && this.showSpecialCardTypeAnim(e - 3) || this._showAllWinFlagAnim(), this._getLeftTime() >= this._fActExecute_WayOutLight ? (this._updateTopWayOut(1), this._showTopWayOutAnim(), this._updateAllWayOut(1), this._showAllWayOutAnim()) : (this._updateTopWayOut(), this._updateAllWayOut()), this._startWaittingNextRound()
                }
                break;
                case Ze.pokermaster_proto.RoundState.READY_GAME:
                    this._updateTopWayOut(), this._updateAllWayOut(), this._startPrepareNextRound()
            }
            z.appConfig.getGeneralConfig().multiWindowEnabled ? this.schedule((() => {
                this._miniGameLoadingScreen.active = !1
            }), 0, 0, 1) : (z.SwitchLoadingView.hide(), z.appConfig.isWebApp || z.SwitchLoadingView.switchToPotrait())
        }
        _onMsgKick(e) {
            if (e.idle_roomid > 0) return void(this._bSwitchTable || (q.getPokerMasterRoom().idle_roomid = e.idle_roomid, this.showSwitchTable()));
            let t = z.Number(e.kickType);
            switch (z.casinoTracing.logInfo({
                    spanName: Ie.CasinoKickOut,
                    attribute: {
                        kickType: t
                    },
                    eventName: "OnMsgKickOut"
                }), t) {
                case Ze.pokermaster_proto.Kick.Kick_DUMMY:
                    break;
                case Ze.pokermaster_proto.Kick.IDLE_LONG_TIME: {
                    let e = z.config.getStringDataCasino("Humanboy_server_kick_long_time_text");
                    this._backToMainScene(e)
                }
                break;
                case Ze.pokermaster_proto.Kick.Stop_World: {
                    let e = z.config.getStringDataCasino("Humanboy_server_kick_stop_world_text");
                    this._backToMainScene(e)
                }
            }
        }
        _onMsgBetAmountLevelChange(e) {
            this._updateBetAmountLevel(), this._updateBetBtnState()
        }
        _onMsgAdvanceAutobetSet(e) {
            this._setAutoBetBtnStytle(Q.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING), !q.getPokerMasterRoom().bHasBetInCurRound && q.getPokerMasterRoom().bCanAuto && this._checkAdvanceAutoReq()
        }
        _onMsgAdvanceAutobet(e) {
            let t = z.Number(e);
            switch (t) {
                case Ze.pokermaster_proto.ErrorCode.OK:
                    break;
                case Ze.pokermaster_proto.ErrorCode.AUTO_BET_EXCEED_LIMIT:
                    this._humanboyAdvancedAuto && (this._advancceAutoTipsLabelKey = z.StringTools.formatC("PokerMaster_ServerErrorCode%d", t), this._humanboyAdvancedAuto.adaptAdvanceAutoTipsPos(this._btn_betAuto.node), this._humanboyAdvancedAuto.showAdvanceAutoTips(z.config.getStringDataCasino(this._advancceAutoTipsLabelKey)));
                    break;
                case Ze.pokermaster_proto.ErrorCode.AUTO_BET_NO_MONEY: {
                    let e = "humanboy_dialog_recharge",
                        i = this.node.getChildByName(e);
                    if (!i) {
                        i = m(this.prefab_hb_dialog), i.name = e;
                        const n = i.getComponent(be);
                        this.node.insertChild(i, $.LayerZorder.Z_IDX_PANEL_SERVER_TOAST);
                        const o = i.getComponent(oe),
                            a = z.config.getStringDataCasino(z.StringTools.formatC("PokerMaster_ServerErrorCode%d", t)),
                            s = z.config.getStringDataCasino("CowBoy_btn_desc_auto_cancel"),
                            r = z.config.getStringDataCasino("CowBoy_btn_desc_auto_recharge"),
                            _ = e => {
                                z.pokerMasterNet.reqCancelAdvanceAutoBet()
                            },
                            l = e => {
                                z.MessageCenter.send($.LocalMsg().MsgPrefix + $.LocalMsg().RECHARGE)
                            },
                            h = {
                                title: "Notice_Layer_notice_panel_message_button",
                                textContent: z.StringTools.formatC("PokerMaster_ServerErrorCode%d", t),
                                leftBtn: "CowBoy_btn_desc_auto_cancel",
                                rightBtn: "CowBoy_btn_desc_auto_recharge",
                                centerBtn: "",
                                gameID: z.Enum.GameId.PokerMaster
                            },
                            d = ve.onChangeLanguageAutoBetPopup(o, n, h),
                            g = {
                                miniDialog: n,
                                stringContent: a,
                                stringLeftBtn: s,
                                stringRightBtn: r,
                                cbLeftBtn: _,
                                cbRightBtn: l,
                                isReachedMax: !1,
                                legacyDialog: o,
                                isShowBtnCenter: !1,
                                themeType: Be.TwoButton_NoMoney_Style,
                                onChangeLanguage: d
                            };
                        ve.showDialog(g)
                    }
                }
                break;
                default:
                    z.MessageCenter.send($.LocalMsg().MsgPrefix + $.LocalMsg().ERROR, t)
            }
            this._humanboyAdvancedAuto && (this._humanboyAdvancedAuto.adaptAdvanceAutoCountPos(this._btn_betAuto.node), this._humanboyAdvancedAuto.showAdvanceAutoCount())
        }
        _onMsgAdvanceAutobetCancel(e) {
            this._updateBetAmountLevel(), this._updateBetBtnState()
        }
        _onMsgAdvanceAutobetLimitReached(e) {
            const t = e;
            t && this._showGameToast(z.StringTools.formatC(z.config.getStringDataCasino("MiniGame_btn_desc_auto_bet_reached"), t))
        }
        _onMsgRoomParamChange(e) {}
        _onMsgGameStatusDeal(e) {
            this._resetLeftTime(), this._updateBetBtnState(), this._updateBetAreaTouchEnabled(), this._updateSelfInfo(), this._updateOtherPlayersInfo(), this._updateAllPlayerWinCount(), this._gameStepsAnimStart()
        }
        _onMsgGameStatusShowOdds(e) {
            this._resetLeftTime(), this._gameStepsAnimOdds(), W(this._nodeAnim).delay(.2).call((() => {
                this._showRoleLeadAnim(!0)
            })).start()
        }
        _onMsgGameStatusStartBet(e) {
            e = 1 == e, this._resetLeftTime(), this._startTimeBetClock(), this._updateBetBtnState(), this._updateBetAreaTouchEnabled(), (0 == e || e && q.getPokerMasterRoom().bCanAdvanceAuto) && this._checkAdvanceAutoReq()
        }
        _onMsgGameStatusStopBet(e) {
            this._resetLeftTime(), this._stopTimeBetClock(), this._updateBetBtnState(!1), this._updateBetAreaTouchEnabled(), this._gameStepsAnimStopBet(), this._humanboyAdvancedAuto && this._humanboyAdvancedAuto.hideSelectPanel(!1)
        }
        _onMsgGameStatusRoundEnd(e) {
            this.playPointAni(), this.showMttBeginMsg(), this.resetTempPaixing(), this._resetLeftTime(), this._gameStepsAnimRoundEnd()
        }
        _onMsgGameStatusReady(e) {
            this._resetLeftTime(), this._gameStepsAnimReady()
        }
        _onMsgBet(e) {
            this._updateAutoBetBtnStatus();
            let t = this._getAreaIdxByBetOption(e.detail.option),
                i = new Ei;
            i.nAreaIdx = t, i.nGold = e.detail.betAmount, i.nUid = e.uid, i.bAnim = !0, i.bHeadAnim = !0, i.bPlaySound = !0, this._vCoinOptimizationDeque.push_back(i)
        }
        _onMsgAutoBet(e) {
            this._updateBetBtnState()
        }
        _onMsgMergeAutoBet(e) {
            let t = e.notify.length;
            this._updateBetBtnState();
            for (let i = 0; i < e.notify.length; ++i) {
                let n = e.notify[i].uid,
                    o = e.notify[i].detail.betAmount,
                    a = e.notify[i].detail.option,
                    s = this._getAreaIdxByBetOption(a);
                {
                    let e = this._getFreeCoinCountFromPool(a);
                    if (t > e) {
                        let i = t - e,
                            n = Math.min(this._nAreaCoinLimitCountMin + i, this._nAreaCoinLimitCountMax);
                        this._nAreaCoinLimitCountMin = n
                    }
                }
                let r = new Ei;
                r.nAreaIdx = s, r.nGold = o, r.nUid = n, r.bAnim = !0, r.bHeadAnim = !0, r.bPlaySound = !0, this._vCoinOptimizationDeque.push_back(r)
            }
        }
        _onMsgPlayerList(e) {
            this._humanboyPlayerList ? (this._humanboyPlayerList.node.active = !0, this._humanboyPlayerList.setPokerMasterData(), this._humanboyPlayerList.displayCell(-1)) : (this._humanboyPlayerList = m(this.prefab_hb_playerList).getComponent(ee), this.node.insertChild(this._humanboyPlayerList.node, $.LayerZorder.Z_IDX_PANEL_RECORD), this._humanboyPlayerList.setPokerMasterData(), this._humanboyPlayerList.displayCell(0))
        }
        _onMsgRewardTips(e) {
            if (!this._humanboyRewardTips) {
                let e = this.node.getComponent(A),
                    t = (1 - e.anchorX) * e.width * this.node.scale.x,
                    i = (1 - e.anchorY) * e.height * this.node.scale.y - 122;
                this._humanboyRewardTips = m(this.prefab_hb_rewardTips).getComponent(se), this.node.insertChild(this._humanboyRewardTips.node, $.LayerZorder.Z_IDX_PANEL_REWRAD_TIP), this._humanboyRewardTips.node.setPosition(t, i)
            }
            let t = z.String(e);
            this._humanboyRewardTips.show(t, 4)
        }
        _onMsgUpdateWorldServerGold(e) {
            if (z.appConfig.getGameConfig().miniGameConfig.useSharePlayerPool) return;
            let t = z.dataHandler.getUserData().total_amount;
            if (q.getPokerMasterRoom().bCanUpdateWorldServerGold) {
                q.getPokerMasterRoom().tSelfPlayer.curCoin = t, this._updatePlayerGold(z.dataHandler.getMiniGameUserId());
                let e = !1,
                    i = q.getPokerMasterRoom().vOtherPlayer;
                for (let n = 0; n < i.length; ++n) z.dataHandler.getMiniGameUserId() === i[n].uid && (e = !0, i[n].curCoin = t);
                e && this._updateOtherPlayersInfo()
            }
        }
        _onMsgShowLuckButton() {
            if (!this._luckButton) {
                this._luckButton = m(this.prefab_luckButton).getComponent(X), this._btn_redpacket_festival.addChild(this._luckButton.node), this._luckButton.init(this.luckPanelLayer), this.luckPanelLayer.setSiblingIndex($.LayerZorder.Z_IDX_GIFT_POPUP), this._luckButton.node.setPosition(0, 0);
                let e = d(g.ZERO);
                this._img_self_gold.node.convertToWorldSpaceAR(d(g.ZERO), e), this._luckButton.setViewData(e), this._luckButton.onAbleToShowWelcome = this.showLuckPopupWelcome.bind(this)
            }
            z.dataHandler.getUserData().isShowLuckTurntables ? (this._btn_redpacket_festival.active = !0, this._luckButton.updateView(!1, this._btn_redpacket_festival_layer)) : this._btn_redpacket_festival.active = !1, this._btn_redpacket_festival_layer.active = this._btn_redpacket_festival.active, this._adaptiveBetBtnPanel()
        }
        showLuckPopupWelcome(e) {
            z.dataHandler.getUserData().isShowLuckTurntables ? e && !this._hasShownLuckWelcomePopup && this._showLuckWelcomePopupNode() : this._removeLuckWelcomePopupNode()
        }
        _removeLuckWelcomePopupNode() {
            z.tools.isValidNode(this._luckWelcomePopupNode) && this._luckWelcomePopupNode.removeFromParent()
        }
        _showLuckWelcomePopupNode() {
            z.tools.isValidNode(this._luckWelcomePopupNode) || (this._luckWelcomePopupNode = m(this.luckWelcomePopup_prefab), this.node.addChild(this._luckWelcomePopupNode), this._luckWelcomePopupNode.setSiblingIndex($.LayerZorder.Z_IDX_GIFT_WELCOME), this._luckWelcomePopupNode.setPosition(0, 0), this._hasShownLuckWelcomePopup = !0)
        }
        _onMsgTurntableResultNotice(e) {
            let t = this._getPlayerCoinNodesByUid(e.uid);
            t.length <= 0 && t.push(this._btn_playerList);
            for (let i = 0; i < t.length; i++) {
                let n = t[i],
                    o = new g(g.ZERO);
                n.getParent().convertToWorldSpaceAR(n.getPosition(), o), this._luckButton.showGoldMoveAction(o, e.currency_type)
            }
        }
        _resetCardPos() {
            let e = this._vLeftHandCards.length;
            for (let t = 0; t < e; ++t) Fe.stopAll(this._vLeftHandCards[t].node), this._vLeftHandCards[t].node.setPosition(this._vLeftHandCardsSrcPos[t]);
            e = this._vRightHandCards.length;
            for (let t = 0; t < e; ++t) Fe.stopAll(this._vRightHandCards[t].node), this._vRightHandCards[t].node.setPosition(this._vRightHandCardsSrcPos[t]);
            e = this._vPublicHoleCards.length;
            for (let t = 0; t < e; ++t) Fe.stopAll(this._vPublicHoleCards[t].node), this._vPublicHoleCards[t].node.setPosition(this._vPublicHoleCardsSrcPos[t])
        }
        showSpecialCardTypeAnim(e = 8) {
            if (this.clearSpecialCardTypeAnim(), !this.isResultSpecialCardType()) return !1;
            let t = q.getPokerMasterRoom().tRoundresult,
                i = 0;
            switch (t.winOp) {
                case Ze.pokermaster_proto.BetZoneOption.FISHER_WIN:
                    i = t.fisherLevel;
                    break;
                case Ze.pokermaster_proto.BetZoneOption.SHARK_WIN:
                    i = t.sharkLevel;
                    break;
                case Ze.pokermaster_proto.BetZoneOption.EQUAL:
                    i = t.fisherLevel
            }
            let n = "",
                o = q.getPokerMasterRoom().mapZoneData.get(Ze.pokermaster_proto.BetZoneOption.FIVE_KING_TONG_HUA_SHUN_4),
                a = Q.getNumberFixedDown(o.odds, 2),
                s = z.String(a) + (z.config.getCurrentLanguage() == me.zh_CN || z.config.getCurrentLanguage() == me.zh_TW ? ";" : "");
            if (i == Ze.pokermaster_proto.HandLevel.HAND_SIJO) n = "special_jingang";
            else if (i == Ze.pokermaster_proto.HandLevel.HAND_TONG_SHUN) n = "special_tonghuashun";
            else {
                if (i != Ze.pokermaster_proto.HandLevel.HAND_KING) return console.log("showSpecialCardTypeAnim, show special cardtype anim error1"), !1;
                n = "special_huangtong"
            }
            let r = this._nodeAnim.getChildByName("special_card_type_anim"),
                _ = null;
            r || (r = m(this.special_card_type_prefab), this._nodeAnim.insertChild(r, $.LayerZorder.Z_IDX_ANIM_NODE_1), r.name = "special_card_type_anim"), _ = r.getComponent(D), r.active = !0;
            const l = z.config.getCurrentLanguage();
            if (z.appConfig.getGameConfig().miniGameConfig.availableLangResForMiniGames.includes(l)) {
                const e = r.getChildByName("special_card_type");
                z.resMgr.setSpriteFrame(e, De.getLanguagePath(`game/cowboy/language/${n}`))
            } else {
                const e = r.getChildByName("special_card_type");
                z.resMgr.setSpriteFrame(e, De.getLanguagePath(`game/cowboy/language/${n}`, me.en_US))
            }
            return this._currentSpecialCardType = n, r.getChildByName("special_card_odd").getComponent(B).string = s, e > 7.8 && this._playSoundEffect(this.s_special_card_type), this.gotoFrameAndPlay(_, e), _.on(D.EventType.FINISHED, (e => {
                _.off(D.EventType.FINISHED), r.active = !1, this._showAllWinFlagAnim()
            })), !0
        }
        isResultSpecialCardType() {
            let e = q.getPokerMasterRoom().tRoundresult;
            return e.sharkLevel >= Ze.pokermaster_proto.HandLevel.HAND_SIJO || e.fisherLevel >= Ze.pokermaster_proto.HandLevel.HAND_SIJO
        }
        clearSpecialCardTypeAnim() {
            let e = this._nodeAnim.getChildByName("special_card_type_anim");
            if (e) {
                let t = e.getComponent(D);
                t.off(D.EventType.FINISHED), t.stop(), e.active = !1
            }
        }
        gotoFrameAndPlay(e, t) {
            let i = e.defaultClip.name;
            e.play(i), e.getState(i).setTime(e.defaultClip.duration - t)
        }
        initGuide() {
            let e = "master_has_show_guide_2";
            if ("true" != z.tools.GetStringByCCFile(e)) {
                this._humanboyGuid || (this._humanboyGuid = m(this.prefab_hb_guid), this.node.insertChild(this._humanboyGuid, $.LayerZorder.Z_IDX_PANEL_GUID));
                let t = this._humanboyGuid.getComponent(te);
                t.setDescString(z.config.getStringDataCasino("Cowboy_ludan_guide_text")), t.show(this._panel_top, (() => {
                    z.tools.SaveStringByCCFile(e, "true"), this._showChart(), this._playSoundEffect($.Sounds().sound_button)
                }), !0)
            }
        }
        playResultAni() {
            switch (q.getPokerMasterRoom().tRoundresult.winOp) {
                case Ze.pokermaster_proto.BetZoneOption.FISHER_WIN:
                    this._skeletonAnimHandler.setMainAquamanWinState(), this._skeletonAnimHandler.setMainSharkLooseState();
                    break;
                case Ze.pokermaster_proto.BetZoneOption.SHARK_WIN:
                    this._skeletonAnimHandler.setMainAquamanLooseState(), this._skeletonAnimHandler.setMainSharkWinState();
                    break;
                case Ze.pokermaster_proto.BetZoneOption.EQUAL:
            }
        }
        setNodePosByIphoneX() {
            let e = e => {
                    e.position.x > 0 ? e.setPosition(.5 * this.getWinSize().width - 960 + e.position.x - 100, e.position.y) : e.setPosition(.5 * -this.getWinSize().width + 960 + e.position.x + 100, e.position.y)
                },
                t = this.node.getChildByName("panel_card"),
                i = t.getChildByName("node_fisherman"),
                n = t.getChildByName("node_shark"),
                o = t.getChildByName("node_fortune"),
                a = o.getChildByName("img_left_fortune_bg"),
                s = o.getChildByName("img_right_fortune_bg"),
                r = o.getChildByName("img_left_fortune"),
                _ = o.getChildByName("img_right_fortune"),
                l = o.getChildByName("txt_left_fortune"),
                h = o.getChildByName("txt_right_fortune");
            e(i), e(n), e(a), e(s), e(r), e(_), e(l), e(h)
        }
        showTempPaixing(e, t) {
            let i = this.node.getChildByName("temp_paixing");
            if (e <= Ze.pokermaster_proto.HandLevel.HAND_DUMMY || e > Ze.pokermaster_proto.HandLevel.HAND_KING || t <= Ze.pokermaster_proto.HandLevel.HAND_DUMMY || t > Ze.pokermaster_proto.HandLevel.HAND_KING) return void(i.active = !1);
            i.active = !0;
            let n = i.getChildByName("temp_bg_dashi"),
                o = i.getChildByName("temp_bg_shark"),
                a = i.getChildByName("temp_lab_shark").getComponent(B),
                s = i.getChildByName("temp_lab_dashi").getComponent(B),
                r = z.resMgr.getLabelStringSize(s, z.config.getStringDataCasino(8 != e ? `M_UITitle${e+112}` : "Humanboy_game_card_type_four_of_a_kind")),
                _ = z.resMgr.getLabelStringSize(a, z.config.getStringDataCasino(8 != t ? `M_UITitle${t+112}` : "Humanboy_game_card_type_four_of_a_kind"));
            n.getComponent(A).setContentSize(r.width <= 86 ? 110 : r.width + 24, n.getComponent(A).height), o.getComponent(A).setContentSize(_.width <= 86 ? 110 : _.width + 24, o.getComponent(A).height)
        }
        resetTempPaixing() {
            let e = this.node.getChildByName("temp_paixing");
            e && (e.active = !1)
        }
        resetFlyCoinToPlayerArr() {
            for (let e = 0; e < this.flyCoinToPlayerArr.length; ++e) {
                let t = this.flyCoinToPlayerArr[e];
                z.tools.isValidNode(t) && (t.removeFromParent(), t.destroy())
            }
            this.flyCoinToPlayerArr = []
        }
        initTrendChangeAnim() {
            this.trend_anim = x.createWithSpriteFrames(this.cowboy_trend_anim_PLIST.getSpriteFrames(), 10), this.trend_anim.wrapMode = x.WrapMode.Loop
        }
        showTrendChangeAnim() {
            let e = this._panel_top.getChildByName("img_record");
            e.active = !1;
            let t = this._panel_top.getChildByName("trend_anim");
            t && (t.removeFromParent(), t.destroy());
            let i = (new r).addComponent(v);
            z.resMgr.loadSpriteTextureByPlist(this.cowboy_trend_anim_PLIST, i, "cowboy_trend_0"), i.node.name = "trend_anim", i.node.setPosition(e.position.x - 1, e.position.y + 3, 0), this._panel_top.addChild(i.node);
            let n = i.node.addComponent(D);
            n.addClip(this.trend_anim, "trend_anim"), n.play("trend_anim")
        }
        hideTrendChangeAnim() {
            this._panel_top.getChildByName("img_record").active = !0;
            let e = this._panel_top.getChildByName("trend_anim");
            e && (e.removeFromParent(), e.destroy())
        }
        OnAppEnterBackground() {
            p.os == p.OS.ANDROID ? (Ne.stopMusic(), Ne.pauseAll()) : z.tools.IsMiniGameSoundEffectOn() || Ne.play(this.silenceMusic, !0, .5, !0), z.tools.setEnterbackState(!0), Fe.stopAll(this.node), this.unscheduleAllCallbacks()
        }
        OnAppEnterForeground() {
            z.tools.setEnterbackState(!1), p.os == p.OS.ANDROID ? (Ne.resumeAll(), this._onMsgSoundSwitch()) : z.tools.IsMiniGameMusicOn() || Ne.stop(Ne.getAudioID(this.silenceMusic))
        }
        NoticeMttMatchBegin(e) {
            this.mttbeginMsg = e, q.getPokerMasterRoom().eCurState == Ze.pokermaster_proto.RoundState.STOP_BET && !q.getPokerMasterRoom().bSkipSquint && q.getPokerMasterRoom().bCanSquint || this.showMttBeginMsg()
        }
        showMttBeginMsg() {
            this.mttbeginMsg && "" != this.mttbeginMsg && (z.roomManager.mtt_time > 10 ? z.TP.showMsg(this.mttbeginMsg, z.Enum.ButtonStyle.GOLD_BUTTON, (() => {
                z.MessageCenter.send("HideWebview_ShowWindows", !0)
            })) : (z.TP.showMsg(this.mttbeginMsg, z.Enum.ButtonStyle.TWO_BUTTON, (() => {
                z.MessageCenter.send("HideWebview_ShowWindows", !0), z.roomManager.closeScheduleForMTT(), z.roomManager.isEnterMTT = !0, z.pokerMasterNet.requestLeaveRoom()
            }), (() => {
                z.MessageCenter.send("HideWebview_ShowWindows", !0), z.roomManager.closeScheduleForMTT()
            })), z.TP.setButtonText(z.Enum.ButtonType.TWO_BUTTON_MTT_FRAME), z.roomManager.startScheduleForMTT()), z.TP.setTag("NoticeMTT_MatchBegin"), this.mttbeginMsg = "")
        }
        preLoadCard(e, t) {
            let i = this._getSquintCardFrameName(e, t);
            i = "zh_CN/game/pokermaster/rubcard/" + i + "/spriteFrame", z.resMgr.load(i, F, (e => {}), z.resMgr.CleanResLevel.LEVEL_SCENE), z.resMgr.load("zh_CN/game/pokermaster/rubcard/card_back/spriteFrame", F, (e => {}), z.resMgr.CleanResLevel.LEVEL_SCENE)
        }
        _getSquintCardFrameName(e, t) {
            let i = "";
            switch (t) {
                case z.Enum.CardSuit.CARD_SPADE:
                    i = "Bhm_";
                    break;
                case z.Enum.CardSuit.CARD_HEART:
                    i = "Rhm_";
                    break;
                case z.Enum.CardSuit.CARD_CLUB:
                    i = "Bcm_";
                    break;
                case z.Enum.CardSuit.CARD_DIAMOND:
                    i = "Rbm_";
                    break;
                default:
                    i = "Bhm_"
            }
            return `${i}${e+1}`
        }
        playPointAni() {
            if (!ke.Instance.getGameConfig().miniGameConfig.showChangePoints) return;
            let e = q.getPokerMasterRoom().change_points;
            e < 0 || (this.points_node || (this.points_node = m(this.points_ani_prefab), this.node.insertChild(this.points_node, $.LayerZorder.Z_IDX_ANIM_NODE_3), this.points_node.setPosition(this.node.convertToNodeSpaceAR(this._img_self_head.node.parent.convertToWorldSpaceAR(this._img_self_head.node.position))), this.points_node.getComponent(D).on(D.EventType.FINISHED, (e => {
                this.resetPointAni()
            }), this)), this.points_node.getComponent(pe).playPointAni(e))
        }
        resetPointAni() {
            q.getPokerMasterRoom().change_points = 0, this.points_node && this.points_node.getComponent(pe).resetPointAni()
        }
        setLeftAndRightList() {
            let e = this.node.getChildByName("panel_left_playerlist"),
                t = this.node.getChildByName("panel_right_playerlist"),
                i = e.getChildByName("img_bg_0").getComponent(A).width,
                n = [288, 92, -104, -300, -300],
                o = d(-4, 330, 0),
                a = d(-16, 333, 0),
                s = 22;
            if (this.ispad) n = [419, 205, -9, -223, -437], o = d(-4, 461, 0), a = d(-16, 464, 0);
            else if (this._bOpenNarrowAdapter && this._bTrueFullScreen) {
                s = 96 + .5 * (this.getWinSize().width - 2338)
            } else {
                let e = this.getWinSize().width - 1920;
                s = e > 0 ? 22 + .5 * e : 22
            }
            e.getComponent(S).left = s + .5 * i - .5 * e.getComponent(A).width, t.getComponent(S).right = s + .5 * i - .5 * t.getComponent(A).width, z.resMgr.adaptWidget(e), z.resMgr.adaptWidget(t);
            for (let i = 0; i < 5; ++i) {
                let s = e.getChildByName(z.StringTools.formatC("img_bg_%d", i)),
                    r = e.getChildByName(z.StringTools.formatC("node_head_%d", i)),
                    _ = e.getChildByName(z.StringTools.formatC("text_coin_%d", i)),
                    l = t.getChildByName(z.StringTools.formatC("img_bg_%d", i)),
                    h = t.getChildByName(z.StringTools.formatC("node_head_%d", i)),
                    g = t.getChildByName(z.StringTools.formatC("text_coin_%d", i));
                if (s.setPosition(d(0, n[i], 0)), r.setPosition(d(0, n[i] + 15, 0)), _.setPosition(d(0, n[i] + -67, 0)), l.setPosition(d(0, n[i], 0)), h.setPosition(d(0, n[i] + 15, 0)), g.setPosition(d(0, n[i] + -67, 0)), 0 === i) {
                    let i = e.getChildByName("nb_flag"),
                        n = t.getChildByName("nb_flag");
                    i.setPosition(o), n.setPosition(a)
                }
            }
        }
        showSwitchTable() {
            this._bSwitchTable || (this._bSwitchTable = !0, z.TP.showMsg(z.config.getStringDataCasino("MiniGames_Switch_content"), z.Enum.ButtonStyle.TWO_BUTTON, (() => {
                z.MessageCenter.send("HideWebview_ShowWindows", !0), z.roomManager.setMiniGameRoomIdTemplate(z.Enum.GameId.PokerMaster, q.getPokerMasterRoom().idle_roomid), Ce.getInstanceGameData(null == this ? void 0 : this.node).tRoomData.m_bIsReconnectMode = !0, z.netWorkManager.clearLoginGameServerSuccFlag(z.Enum.GameId.PokerMaster), z.roomManager.RequestJoinRoom(z.Enum.GameId.PokerMaster, q.getPokerMasterRoom().idle_roomid)
            }), (() => {
                z.MessageCenter.send("HideWebview_ShowWindows", !0), this._backToRoomListScene()
            })), z.TP.setButtonText(z.Enum.ButtonType.TWO_BUTTON_SWITCH_TABLE))
        }
        onCalmDownShowTip(e) {
            let t = e.CalmDownLeftSeconds,
                i = e.CalmDownDeadLineTimeStamp;
            if (!(t <= 0 || i <= 0) && t > 0) {
                fe.getSinglePrefabInst(this.popSilencePre).getComponent(fe).autoShow(z.Enum.popSilenceType.countDownGame, e, y.getScene(), $.LayerZorder.Z_IDX_PANEL_SERVER_TOAST)
            }
        }
        onMsgAdvanceAutobetAdd(e) {
            console.log("onMsgAdvanceAutobetAdd", e), this._humanboyAdvancedAuto && (this._humanboyAdvancedAuto.getComponent(_e).adaptAdvanceAutoCountPos(this._btn_betAuto.node), this._humanboyAdvancedAuto.getComponent(_e).showAdvanceAutoCount())
        }
        OnBackgroundMusicEnable(e) {
            e ? Ne.playMusic($.Sounds().sound_bgm, !0) : Ne.stopMusic()
        }
        updateTipsRefundText() {
            let e = this._panel_game.getChildByName("lab_0"),
                t = this._panel_game.getChildByName("lab_1");
            e.getComponent(B).string = z.config.getStringDataCasino("PokerMaster_tips_refund money_txt"), t.getComponent(B).string = z.config.getStringDataCasino("PokerMaster_tips_refund money_txt")
        }
        onLanguageChange() {
            if (this._humanboyAdvancedAuto && this._humanboyAdvancedAuto.node.active) {
                const e = this._humanboyAdvancedAuto.getComponent(_e);
                e.onChangeLanguage(), this._eAutoBtnStyle === Q.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING && e.showAdvanceAutoCount()
            }
            if (this.updateCardTypeText(), this._updateAllPlayerWinCount(), this.updateTipsRefundText(), this._updateAllWayOut(), this._otherPlayerDescLeft && this._otherPlayerDescLeft.node.active && (this._otherPlayerDescLeft.string = z.StringTools.formatC(z.config.getStringDataCasino("Cowboy_fuhao_no_text"), 1)), this._otherPlayerDescRight && this._otherPlayerDescRight.node.active && (this._otherPlayerDescRight.string = z.config.getStringDataCasino("Cowboy_shensuanzi_text")), this._winFlagNodes.forEach((e => {
                    [z.Enum.LANGUAGE_TYPE.en_US, z.Enum.LANGUAGE_TYPE.zh_TW, ...z.appConfig.getGameConfig().miniGameConfig.availableLangResForMiniGames].includes(z.config.getCurrentLanguage()) ? z.resMgr.setSpriteFrame(e, De.getLanguagePath("game/cowboy/language/win_flag")) : z.resMgr.setSpriteFrame(e, "en_US/game/cowboy/language/win_flag")
                })), "true" != z.tools.GetStringByCCFile("master_has_show_guide_2")) {
                this._humanboyGuid.getComponent(te).setDescString(z.config.getStringDataCasino("Cowboy_ludan_guide_text"))
            }
            if (this._squintCard && this._squintCard.updateLanguage(q.getPokerMasterRoom().bCanSquint), "" != this._currentSpecialCardType && null != this._nodeAnim) {
                let e = this._nodeAnim.getChildByName("special_card_type_anim");
                if (null != e) {
                    const t = z.config.getCurrentLanguage();
                    let i = z.config.getCurrentLanguage() == z.Enum.LANGUAGE_TYPE.zh_CN || z.config.getCurrentLanguage() == z.Enum.LANGUAGE_TYPE.zh_TW ? this.special_card_type_PLIST : this.en_animation_PLIST;
                    if (z.appConfig.getGameConfig().miniGameConfig.availableLangResForMiniGames.includes(t)) {
                        const t = e.getChildByName("special_card_type");
                        z.resMgr.setSpriteFrame(t, De.getLanguagePath(`game/cowboy/language/${this._currentSpecialCardType}`))
                    } else {
                        let t = e.getChildByName("special_card_type");
                        t && z.resMgr.loadSpriteTextureByPlist(i, t.getComponent(v), this._currentSpecialCardType)
                    }
                }
            }
            "" != this._advancceAutoTipsLabelKey && this._humanboyAdvancedAuto.updateAdvanceAutoTipsText(this._advancceAutoTipsLabelKey), this._showAllOdds(!1)
        }
        showNoticeMsg(e) {
            this.pushNotice.addPushNotice(e, !1)
        }
        onResize(e = !1) {
            if (z.config.adaptScreenHen(this.node), !this.ispad) {
                const e = this.node.scene.getComponentInChildren(u);
                let t = !1,
                    i = !1;
                if (this.isIphoneX_area) {
                    const e = z.config.isWinSizeIphoneX();
                    t = e, i = !e
                } else {
                    const n = e.designResolution,
                        o = C.getVisibleSize(),
                        a = (o.width > o.height ? o.width / o.height : o.height / o.width) > n.width / n.height;
                    t = a, i = !a
                }
                e.overrideResolutionPolicy && (e.resolutionPolicy = z.config.getResolutionPolicy(i, t))
            }
            z.resMgr.adaptWidget(this.node, !0, !1), !0 !== e && (this.setLeftAndRightList(), this._adaptiveScreen(), this._adaptiveBetBtnPanel(), T(this._humanboyGuid) && this._humanboyGuid.active && this._humanboyGuid.getComponent(te).reLayout(this._panel_top), this.isChangedLayout() && this.startReloadScene())
        }
        startReloadScene() {
            z.SwitchLoadingView.show(z.config.getStringData("Loading")), this.unschedule(this.reloadScene), this.scheduleOnce(this.reloadScene, .3)
        }
        reloadScene() {
            if (this._isLeaving) return;
            if (!this.isChangedLayout()) return void z.SwitchLoadingView.hide();
            const e = y.getScene().name;
            y.loadScene(e, ((e, t) => {
                if (e) return void console.error("[PokerMasterScene] reload scene error: ", e);
                const i = z.roomManager.getPokerMasterGame();
                i ? Ce.addInstance(t, i) : console.trace("room instance for cowboy game should be defined")
            }))
        }
        isChangedLayout() {
            if (!z.appConfig.isWebApp) return !1;
            if (this.ispad) return !this.isPad();
            {
                let e = this.isPad();
                if (!e) {
                    const t = this._bOpenNarrowAdapter && this.isTrueFullScreenOnWeb();
                    e = this.isIphoneX_area && !t || !this.isIphoneX_area && t
                }
                return e
            }
        }
        isTrueFullScreenOnWeb() {
            if (z.native.isFullScreen() && z.native.isScreenLandscape()) {
                let t = 0;
                t += 2 * e.g_fullScreenOffset.x, t += this._panel_game_narrow_width, t += this._leftPlayerPanel.addOrGetComponent(A).width - 50, t += this._rightPlayerPanel.addOrGetComponent(A).width - 50;
                return t <= this.getWinSize().width
            }
            return !1
        }
        registerPageVisibility() {
            z.appConfig.isWebApp && document && document.addEventListener("visibilitychange", this.onPageVisibilityChange)
        }
        unregisterPageVisibility() {
            z.appConfig.isWebApp && document && document.removeEventListener("visibilitychange", this.onPageVisibilityChange)
        }
    }).g_fullScreenOffset = _(0, 0), wi.gClassName = "PokerMasterScene", xt = t((Dt = wi).prototype, "prefab_cb_win_player_light", [ze], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = t(Dt.prototype, "prefab_cb_exchange", [Ve], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Wt = t(Dt.prototype, "prefab_cb_rule", [qe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = t(Dt.prototype, "prefab_cb_soundSetting", [Xe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = t(Dt.prototype, "prefab_cb_exit", [Ye], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = t(Dt.prototype, "mainAquamanPrefab", [Ke], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Zt = t(Dt.prototype, "mainSharkPrefab", [$e], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = t(Dt.prototype, "prefab_cb_round_start", [Qe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = t(Dt.prototype, "prefab_pm_show_odds", [Je], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qt = t(Dt.prototype, "prefab_pm_squid_card", [je], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xt = t(Dt.prototype, "prefab_pm_chart", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yt = t(Dt.prototype, "prefab_pm_review", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Kt = t(Dt.prototype, "prefab_hb_win_flag", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $t = t(Dt.prototype, "special_card_type_prefab", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qt = t(Dt.prototype, "prefab_hb_start_bets", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Jt = t(Dt.prototype, "prefab_hb_end_bets", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), jt = t(Dt.prototype, "prefab_hb_way_out", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ei = t(Dt.prototype, "prefab_hb_flutterScore", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ti = t(Dt.prototype, "prefab_hb_betCoin", [_t], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ii = t(Dt.prototype, "prefab_hb_toast", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ni = t(Dt.prototype, "prefab_hb_guid", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oi = t(Dt.prototype, "prefab_hb_menu", [dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ai = t(Dt.prototype, "prefab_hb_advancedSetting", [gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), si = t(Dt.prototype, "prefab_hb_advancedAuto", [ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ri = t(Dt.prototype, "prefab_hb_addAdvancedAuto", [ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _i = t(Dt.prototype, "prefab_hb_dialog", [mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), li = t(Dt.prototype, "prefab_hb_playerList", [pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), hi = t(Dt.prototype, "prefab_hb_rewardTips", [Ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), di = t(Dt.prototype, "prefab_luckButton", [yt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gi = t(Dt.prototype, "cowboy_trend_anim_PLIST", [ft], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ui = t(Dt.prototype, "game_dznz_PLIST", [bt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ci = t(Dt.prototype, "points_ani_prefab", [At], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mi = t(Dt.prototype, "popSilencePre", [St], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pi = t(Dt.prototype, "btnInfo", [vt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ci = t(Dt.prototype, "btnInfo2", [Bt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yi = t(Dt.prototype, "miniGameLoadingScreenPrefab", [Pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fi = t(Dt.prototype, "resultCardTypePrefab", [Tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bi = t(Dt.prototype, "winCountPrefab", [Mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ai = t(Dt.prototype, "luckPanelLayer", [wt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Si = t(Dt.prototype, "pushNotice", [kt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vi = t(Dt.prototype, "luckWelcomePopup_prefab", [Et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bi = t(Dt.prototype, "mxnCurrencyInfo_prefab", [Rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pi = t(Dt.prototype, "cowboy_PLIST", [Nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ti = t(Dt.prototype, "mappingPlist", [It], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Mi = t(Dt.prototype, "gameSceneInstance", [Ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = Dt)) || Lt));
    n._RF.pop()
}