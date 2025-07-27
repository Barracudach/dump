import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
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
import * as V from "./cc.js";
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
import * as T from "./cc.js";
import * as b from "./cc.js";
import * as A from "./cc.js";
import * as W from "./cc.js";
import * as O from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as R from "./cc.js";
import * as v from "./cc.js";
import * as L from "./cc.js";
import * as i from "./cc.js";
import * as I from "./cc.js";
import * as k from "./cc.js";
import * as w from "./cc.js";
import * as y from "./cc.js";
import * as z from "./cowboy.mjs_cjs=&original=.js";
import * as U from "./cv.js";
import * as Z from "./CowboyCard.js";
import * as Y from "./define.js";
import * as X from "./HashMap.js";
import * as q from "./CowboyEnum.js";
import * as j from "./CowboyRoomData.js";
import * as K from "./CowboyRoomData.js";
import * as J from "./CircleSprite.js";
import * as Q from "./HumanboyExchange.js";
import * as mod11 from "./CowboySetting.js";
import * as tt from "./HumanboyList.js";
import * as et from "./HumanboyDialog.js";
import * as ot from "./HumanboyGuid.js";
import * as it from "./HumanboyMenu.js";
import * as nt from "./HumanboyAdvancedSetting.js";
import * as rt from "./HumanboyAdvancedAuto.js";
import * as at from "./HumanboyAdvancedAuto.js";
import * as st from "./HumanboyAdvancedAuto.js";
import * as lt from "./LuckTurntablesButton.js";
import * as dt from "./cowboyScene.js";
import * as ht from "./VideoCowboyManager.js";
import * as _t from "./VideoCowboyOpenCard.js";
import * as ut from "./video_cowboy.mjs_cjs=&original=.js";
import * as ct from "./VideoCowboyChart.js";
import * as Ct from "./LiveVideoComp.js";
import * as gt from "./LiveVideoComp.js";
import * as pt from "./Deque.js";
import * as mt from "./Deque.js";
import * as yt from "./HeadPointsAni.js";
import * as bt from "./GameSceneInstance.js";
import * as ft from "./Enum.js";
import * as At from "./MiniGameDialog.js";
import * as St from "./ConcreteMiniGameDialog.js";
import * as wt from "./ConcreteAdvancedAuto.js";
import * as Bt from "./MiniGameAdvancedAuto.js";
import * as Tt from "./DialogStyleModel.js";
import * as Pt from "./CowboyExit.js";
import * as vt from "./MiniGameRuleContainer.js";
import * as Nt from "./CurrencyValue.js";
import * as Ot from "./GroupLabel.js";
import * as Rt from "./MappingPlist.js";
import * as Et from "./MiniGamePopupManager.js";
import * as Lt from "./PushNoticeInGame.js";
import * as It from "./TweenControl.js";
import * as xt from "./CommonTools.js";
import * as Dt from "./MiniGameSoundManager.js";

function main() {
    var Wt, Gt, kt, Mt, Ht, Vt, Ft, zt, Ut, Zt, Yt, Xt, qt, jt, Kt, Jt, Qt, $t, te, ee, oe, ie, ne, se, ae, re, le, de, he, _e, ue, ce, ge, Ce, me, pe, ye, be, fe, Ae, Se, we, Be, Te, Pe, ve, Ne, Oe, Re, Ee, Le, Ie, xe, De, We, Ge, ke, Me, He, Ve, Fe, ze, Ue, Ze, Ye, Xe, qe, je, Ke, Je, Qe, $e, to, eo, oo, io, no, so, ao, ro, lo, ho, _o, uo, co, go, Co, mo, po, yo, bo, fo, Ao, So, wo, Bo, To, Po, vo, No, Oo, Ro, Eo, Lo, Io, xo;
    i._RF.push({}, "3d673Ne00RNe5+qAeRMouUr", "VideoCowboyScene", void 0);
    class Do {
        constructor() {
            this.minX = 0, this.minY = 0, this.maxX = 0, this.maxY = 0, this.aArr = [], this.bArr = [], this.x1 = [], this.x2 = []
        }
    }
    class Wo {
        constructor() {
            this.audioId = 0, this.duringTime = 0, this.startPlayTime = 0, this.bGoOn = !1, this.func = null
        }
    }
    const {
        BlendFactor: Go
    } = F, {
        ccclass: ko,
        property: Mo
    } = h;
    t("default", (Wt = Mo(n), Gt = Mo(n), kt = Mo(s), Mt = Mo(s), Ht = Mo(a), Vt = Mo(n), Ft = Mo(n), zt = Mo(n), Ut = Mo(n), Zt = Mo(n), Yt = Mo(n), Xt = Mo(n), qt = Mo(n), jt = Mo(n), Kt = Mo(n), Jt = Mo(n), Qt = Mo(n), $t = Mo(n), te = Mo(n), ee = Mo(n), oe = Mo(n), ie = Mo(n), ne = Mo(n), se = Mo(n), ae = Mo(a), re = Mo(a), le = Mo(a), de = Mo(a), he = Mo(a), _e = Mo(a), ue = Mo(a), ce = Mo(a), ge = Mo(s), Ce = Mo(s), me = Mo(s), pe = Mo(n), ye = Mo(n), be = Mo(n), fe = Mo(r), Ae = Mo(n), Se = Mo(vt), we = Mo(l), Be = Mo(r), Te = Mo(n), Pe = Mo(n), ve = Mo(d), Ne = Mo(d), Oe = Mo(Ot), Re = Mo(r), Ee = Mo(n), Le = Mo(n), Ie = Ct(), ko((We = e((De = class extends _ {
        constructor(...t) {
            super(...t), o(this, "openCard_prefab", We, this), o(this, "clock_prefab", Ge, this), o(this, "time_xiazhu", ke, this), o(this, "time_xiazhu_1", Me, this), o(this, "game_videonz_PLIST", He, this), this._openCardLayer = null, this._btn_xianlu = null, this._statusLayerPosNode = null, this._videoStatusTips = null, this._betLineNode = [], this.lineInfoArr = [], this._clock_node = null, this._clock_num_txt = null, this._clock_green = null, this._clock_circle = null, this._bTrueFullScreen = !1, this._kaiju_Sprite = null, this._stopXz_Sprite = null, this._openCard_Node = null, this._jieSuan_Node = null, this._openCard_blink = null, this._jieSuan_blink = null, this._clock_total_time = 0, this._clock_canShow = !1, this._clock_canChange = !1, this._rightChartPanel = null, this._chartBg = null, o(this, "wait_for_next_round_prefab", Ve, this), o(this, "win_flag_prefab", Fe, this), o(this, "special_card_type_prefab", ze, this), o(this, "win_player_light_prefab", Ue, this), o(this, "btnBet_0_prefab", Ze, this), o(this, "btnBet_3_prefab", Ye, this), o(this, "cowboyChart", Xe, this), o(this, "humanboyExchange_prefab", qe, this), o(this, "cowboyRule", je, this), o(this, "cowboySetting", Ke, this), o(this, "cowboyExit", Je, this), o(this, "cowboyList", Qe, this), o(this, "humanboyAdvancedSetting_prefab", $e, this), o(this, "HumanboyDialog", to, this), o(this, "humanboyGuid_prefab", eo, this), o(this, "HumanboyMenu_prefab", oo, this), o(this, "HumanboyAdvancedAuto_prefab", io, this), o(this, "MiniGameAddAdvancedAuto_prefab", no, this), o(this, "HumanboyDialog_prefab", so, this), o(this, "game_dznz_PLIST", ao, this), o(this, "cowboy_trend_anim_PLIST", ro, this), o(this, "special_card_type_PLIST", lo, this), o(this, "chart_PLIST", ho, this), o(this, "en_animation_PLIST", _o, this), o(this, "videoLanguage_PLIST", uo, this), o(this, "language_PLIST", co, this), o(this, "chartlang_PLIST", go, this), o(this, "win_num_FNT", Co, this), o(this, "bet_btn_num_gray", mo, this), o(this, "bet_btn_num_yellow", po, this), o(this, "luckButton_prefab", yo, this), o(this, "points_ani_prefab", bo, this), o(this, "miniGameLoadingScreenPrefab", fo, this), o(this, "luckPanelLayer", Ao, this), o(this, "winCountPrefab", So, this), o(this, "mappingPlist", wo, this), o(this, "gameTipsLabel", Bo, this), o(this, "gameTipsNode", To, this), o(this, "jiesuan_prefab", Po, this), o(this, "kaipai_prefab", vo, this), o(this, "btnInfo", No, this), o(this, "btnInfo2", Oo, this), o(this, "pushNotice", Ro, this), o(this, "luckWelcomePopup_layer", Eo, this), o(this, "luckWelcomePopup_prefab", Lo, this), o(this, "mxnCurrencyInfo_prefab", Io, this), this.luckWelcomePopupNode = null, this._hasShownLuckWelcomePopup = !1, this.points_node = null, this._redCardPanel = null, this._blueCardPanel = null, this._publicCardPanel = null, this._oriRedHandCards = [], this._oriBlueHandCards = [], this._oriPublicCards = [], this._oriRedHandCardsPos = [], this._oriBlueHandCardsPos = [], this._oriPublicCardsPos = [], this._redHandCards = [], this._blueHandCards = [], this._publicCards = [], this._gameContent = null, this._menuPanel = null, this._betContentBg = null, this._menuBg = null, this._bottomPanel = null, this._btnMenu = null, this._btnPlayerList = null, this.self_panel = null, this._topBg = null, this._btnZouShi = null, this._betButtons = [], this._betButtonTexts = [], this._betButtonMasks = [], this._vBottomBetBtns = [], this._betButtonNum = 5, this._fBetBtnSrcScaleRate = .7, this._fBetBtnTarScaleRate = .85, this._fFlyCoinScaleRate = .375, this._curBetButtonIdx = 0, this.bottom_bg = null, this._panel_betbtn = null, this._btnBetAuto = null, this._btnBetClean = null, this._betAreas = [], this._betCoinContents = [], this._textSelfBetNum = [], this._textTotalBetNum = [], this._oriTextSelfBetNumPos = [], this._oriTextTotalBetNumPos = [], this._sprBetAreaWinFlags = [], this._textBetAreaOdds = [], this._mapBetOptionArea = new Y, this._betCountDownBg = null, this._textCountDown = null, this._oriBetCountDownBgPos = new u(0, 0, 0), this._textNickName = null, this._textCoin = null, this._selfHeadBg = null, this._selfCoin = null, this._otherPlayerHeads = [], this._leftPlayerPanel = null, this._rightPlayerPanel = null, this._nodeAnim = null, this._timelineNodeAnim = null, this._waitForNextRoundAnim = null, this._waitForNextRoundAction = null, this._effNode = null, this._prizeAnim = null, this._prizeAction = null, this._prizeActionIndex = 0, this._winFlagAnims = [], this._winFlagActions = [], this._rewardPanel = null, this._rewardTips = null, this._rewardSize = null, this._recordDotsTemp = [], this._recordDots = [], this._oriRecordDotsPos = [], this._lastRecordDotWorldPos = new u(0, 0, 0), this._recordNum = 10, this._humanboyGuid = null, this._humanboyMenu = null, this._humanboyAdvancedSetting = null, this._humanboyAdvancedAuto = null, this._eAutoBtnStyle = Z.eGameboyAutoBtnStyle.GAB_STYLE_NONE, this._cowboyChart = null, this._humanboyExchange = null, this._cowboyRule = null, this._cowboySetting = null, this._cowboyExit = null, this._cowboyList = null, this._toastNode = null, this._HEAD_IMG_TAG = "cowboy_head_tag", this._openIphoneXAdapter = !0, this._leftTime = 0, this._btn_redpacket_festival = null, this._btn_redpacket_festival_layer = null, this._luckButton = null, this._autoBetUsingNode = null, this._labelBetAuto = null, this._autobetBtnColor = void 0, this.s_cowboyBGM = "zh_CN/game/cowboy/audio/back", this.s_chuzhan_kaizhan = "zh_CN/game/cowboy/audio/half_time", this.s_betin = "zh_CN/game/cowboy/audio/chip", this.s_betin_many = "zh_CN/game/cowboy/audio/hechip", this.s_win_lose = "zh_CN/game/cowboy/audio/bx_getCoin", this.s_get_win_coin = "zh_CN/game/cowboy/audio/bigying", this.s_button = "zh_CN/game/cowboy/audio/press", this.s_time_tick = "zh_CN/game/cowboy/audio/time", this.s_special_card_type = "zh_CN/game/cowboy/audio/special_card_type_big", this.silenceMusic = "zh_CN/game/dzpoker/audio/silence", this._waitForNextRoundOutTheshould = 2, this._betCountDownEndDuration = .3, this._fightEndDuration = 1.05, this._showHandCardsDuration = 1, this._showPublicCardsDuration = 1.5, this._hideLoseBetCoinsDuration = 1.5, this._specialCardTypeDuration = 8, this._betWinFlagsAndFlyCoinsDuration = 2.7, this._showNextRoundDuration = 3, this.LABEL_SIZE = 10, this.trend_anim = null, this._coinNode = null, this._coinNodeByArea = [], this._circlePool = new c, this._squarePool = new c, this._areaCoinMax = [200, 200, 200, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], this._isAddEvent = !1, this._mapWayOutInfo = new Y, this._fActExecute_WayOut = 1, this._vCoinOptimizationDeque = new ut, this._msInterval = 1, this._msNowTime = 0, this._msLastTime = 0, this._nLeftTime = 0, this._nMinTime = 0, this._isEnterBackground = !1, this._effectMap = new Y, this._miniGameLoadingScreen = null, o(this, "gameSceneInstance", xo, this), this.advanceAutoAddBet = null
        }
        onLoad() {
            z.config.setCurrentScene(z.Enum.SCENE.VIDEOCOWBOY_SCENE), z.config.adaptScreenHen(this.node), z.resMgr.adaptWidget(this.node, !0);
            let t = this.node.getChildByName("liveVideo");
            lt.isPlayVideo() ? (t.addComponent(_t), t.active = !0) : t.active = !1, z.appConfig.getGeneralConfig().multiWindowEnabled && (this._miniGameLoadingScreen = g(this.miniGameLoadingScreenPrefab), this._miniGameLoadingScreen.setParent(this.node), this._miniGameLoadingScreen.active = !0, this._miniGameLoadingScreen.setSiblingIndex(st.COWBOY_LOCAL_ZORDER_LOADING_SCREEN), z.SwitchLoadingView.hide(), z.SwitchLoadingView.switchToPotrait()), (z.appConfig.isWebApp || C.isMobile) && m.on("canvas-resize", this.onResize, this)
        }
        onResize() {
            z.config.adaptScreenHen(this.node), z.resMgr.adaptWidget(this.node, !0), this.adaptiveScreen(), this.adaptiveBetBtnPanel()
        }
        start() {
            var t, e, o;
            if (z.appConfig.getGeneralConfig().multiWindowEnabled) {
                let t = z.roomManager.getGameScene(z.Enum.GameId.VideoCowboy, z.roomManager.getMiniGameRoomIdTemplate(z.Enum.GameId.VideoCowboy));
                t && p.setWindowTitle(t.windowID, "Poker Flips Live")
            }
            z.SHOP.msgNode.active = !1, this.pushNotice.setPushNoticeType(mt.PUSH_VIDEOCOWBOY), lt.addPlist("game_dznz_PLIST", this.game_dznz_PLIST), lt.addPlist("special_card_type_PLIST", this.special_card_type_PLIST), lt.addPlist("cowboy_trend_anim_PLIST", this.cowboy_trend_anim_PLIST), lt.addPlist("chart_PLIST", this.chart_PLIST), lt.addPlist("language_PLIST", this.language_PLIST), lt.addPlist("en_animation_PLIST", this.en_animation_PLIST), lt.addPlist("chartlang_PLIST", this.chartlang_PLIST), this._gameContent = this.node.getChildByName("game_content"), this._bottomPanel = this.node.getChildByName("bottomPanel"), console.log("this._bottomPanel.position = " + this._bottomPanel.position), this._rewardPanel = this.node.getChildByName("rewardPanel"), this._rewardTips = this._rewardPanel.getChildByName("notice_text").getComponent(y), this._rewardSize = this._rewardTips.node.getContentSize(), this._rewardPanel.active = !1, this._panel_betbtn = this._bottomPanel.getChildByName("panel_betbtn"), this._coinNode = new r, this.node.addChild(this._coinNode, st.COWBOY_LOCAL_ZORDER_COIN_NODE), this._coinNode.addOrGetComponent(b).setContentSize(z.config.WIDTH, z.config.HEIGHT), this._nodeAnim = new r, this.node.addChild(this._nodeAnim, st.COWBOY_LOCAL_ZORDER_ANIM_NODE), this._nodeAnim.addOrGetComponent(b).setContentSize(z.config.WIDTH, z.config.HEIGHT), this._timelineNodeAnim = new r, this.node.addChild(this._timelineNodeAnim, st.COWBOY_LOCAL_ZORDER_TIMELINE_NODE), this._timelineNodeAnim.addOrGetComponent(b).setContentSize(z.config.WIDTH, z.config.HEIGHT), this._openCardLayer = g(this.openCard_prefab).getComponent(dt), this.node.addChild(this._openCardLayer.node), this._rightChartPanel = this.node.getChildByName("rightChartPanel"), this.initTimelineAnims(), this.initCowboyToastNode(), this.initButtonEvents(), this.initCards(), this.initBetArea(), this.initBetButtons(), this.initBetCountDown(), this._initBetClock(), this.initCheckXianLu(), this.initPlayersInfo(), this.initHistoryDots(), this.adaptiveScreen(), this.initRedPackage(), this.adaptiveBetBtnPanel(), this.initWinFlagAnims(), this.initTrendChangeAnim(), this.initGuide(), this.initChart(), this._initMexicoInfoPanel(), this.clearRound(), this.betButtonSelected(0, !0), this.playCowboyBGM(), z.viewAdaptive.isselfchange = !1, z.viewAdaptive.videoCowboyRoomId = 0, z.MessageCenter.register("on_cowboy_gamedata_syn_notify", this.OnGameDataSynNotify.bind(this), this.node), z.MessageCenter.register("on_update_trend_notify", this.OnTrendUpdate.bind(this), this.node), z.MessageCenter.register("on_update_playerlist_notify", this.OnPlayerListUpdate.bind(this), this.node), z.MessageCenter.register("on_cowboy_sound_switch_notify", this.OnSoundSwitchNotify.bind(this), this.node), z.MessageCenter.register("on_selfinfo_notify", this.OnSelfInfo.bind(this), this.node), z.MessageCenter.register("showMedalMsg", this.OnCowboyRewardTips.bind(this), this.node), z.MessageCenter.register("goldViewShop", this.onGoldViewShop.bind(this), this.node), z.MessageCenter.register("on_videoCowboy_HandleStopBetNotify", this._HandleStopBetNotify.bind(this), this.node), z.MessageCenter.register("on_videoCowboy_HandleSkipRoundNotify", this._HandleSkipRoundNotify.bind(this), this.node), z.MessageCenter.register("on_videoCowboy_HandleCancelRoundNotify", this._HandleCancelRoundNotify.bind(this), this.node), z.MessageCenter.register("videoCowboy_ShowCardNotify", this.playKaiPai.bind(this), this.node), z.MessageCenter.register("on_videocowboy_showVideoStatusTips", this.showVideoStatusTips.bind(this), this.node), z.MessageCenter.register("onExitCowboyLiveVideo", this.onExitCowboyLiveVideo.bind(this), this.node), z.config.isSiyuType() ? (z.MessageCenter.register("on_syOnEnterBackground", this.OnAppEnterBackground.bind(this), this.node), z.MessageCenter.register("on_syOnEnterForeground", this.OnAppEnterForeground.bind(this), this.node)) : (f.on(A.EVENT_HIDE, this.OnAppEnterBackground, this), f.on(A.EVENT_SHOW, this.OnAppEnterForeground, this)), z.MessageCenter.register("click_btn_exit_room", this.callExitProcess.bind(this), this.node), z.MessageCenter.register("sendNoticeMsg", this.showNoticeMsg.bind(this), this.node);
            let i = S("btn_xianlu/statusLayer_pos", this.node),
                n = i.parent.convertToWorldSpaceAR(i.position);
            z.StatusView.showElectricImgs(!0, n), this.gameSceneInstance && this.gameSceneInstance.gameData && this.gameSceneInstance.gameData.tRoomData && (this.gameSceneInstance.gameData.tRoomData.m_bIsReconnectMode = !0), z.roomManager.RequestJoinRoom(null == (t = this.gameSceneInstance) || null == (t = t.room) ? void 0 : t.getCurrentGameID(), null == (e = this.gameSceneInstance) || null == (e = e.room) ? void 0 : e.getCurrentRoomID()), z.dataHandler.getUserData().minigameId = z.Enum.GameId.VideoCowboy, this.gameTipsNode.active = !1, null == (o = this._miniGameLoadingScreen) || o.setSiblingIndex(st.COWBOY_LOCAL_ZORDER_LOADING_SCREEN), z.StatusView.show(!1)
        }
        onDestroy() {
            z.StatusView.show(!0, !0), this.cleanData(), (z.appConfig.isWebApp || C.isMobile) && m.off("canvas-resize", this.onResize, this)
        }
        OnAppEnterBackground() {
            C.os == C.OS.ANDROID ? (Lt.stopMusic(), Lt.pauseAll()) : z.tools.IsMiniGameMusicOn() || Lt.play(this.silenceMusic, !0, .5, !0), z.tools.setEnterbackState(!0), this._effectMap.forEach(((t, e, o) => {
                It.stopEffect(e.audioId), this.unschedule(e.func)
            })), this._effectMap.clear(), this._isEnterBackground = !0
        }
        OnAppEnterForeground() {
            z.tools.setEnterbackState(!1), C.os == C.OS.ANDROID ? (Lt.resumeAll(), this.OnSoundSwitchNotify()) : z.tools.IsMiniGameMusicOn() || Lt.stop(Lt.getAudioID(this.silenceMusic)), this._isEnterBackground = !1
        }
        update(t) {
            this._vCoinOptimizationDeque.size() <= 0 || this._updateCoinOptimization(t)
        }
        _updateCoinOptimization(t) {
            let e = this._vCoinOptimizationDeque.size();
            if (!(e <= 0))
                if (lt.getVideoCowboyRoom().curState === xt.cowboy_proto.RoundState.BET && this._leftTime > 0) {
                    let t = 0;
                    this._leftTime > 1 ? (t = e / f.getFrameRate(), t = Math.ceil(t)) : t = e;
                    for (let e = 0; e < t; ++e) {
                        let t = this._vCoinOptimizationDeque.pop_front();
                        this.showBetInAnim(t)
                    }
                } else {
                    for (let t = 0; t < e; ++t) {
                        let t = this._vCoinOptimizationDeque.pop_front();
                        this.updatePlayerCoin(t.uid), this.updateBetArea(t.betOption)
                    }
                    this._vCoinOptimizationDeque.clear()
                }
        }
        playEffectForPath(t) {
            if (this._effectMap.has(t)) {
                let e = this._effectMap.get(t),
                    o = It.getState(e.audioId),
                    i = o == w.AudioState.PLAYING;
                if (!0 === e.bGoOn && i) return;
                let n = (new Date).getTime();
                if (!1 === i) return void(o == w.AudioState.PAUSED ? (console.log(" PAUSED", ", ", e), It.resumeEffect(e.audioId), e.startPlayTime = n, this.schedule(e.func, e.duringTime)) : console.log(" !PAUSED state = ", o, ", ", e));
                console.log(" PLAYING", ", ", e), n > e.startPlayTime + .5 * e.duringTime * 1e3 && (e.bGoOn = !0)
            } else {
                let e = B.get(t),
                    o = Lt.executePlayEffect(e, !0),
                    i = It.getDuration(o),
                    n = new Wo;
                n.audioId = o, n.bGoOn = !1, n.duringTime = i, n.startPlayTime = (new Date).getTime(), n.func = e => {
                    let o = this._effectMap.get(t);
                    o.startPlayTime = (new Date).getTime(), !1 === o.bGoOn && (It.pauseEffect(o.audioId), console.log("yyx123 setCurrentTime"), It.setCurrentTime(o.audioId, 0), this.unschedule(o.func)), o.bGoOn = !1
                }, this._effectMap.add(t, n), It.setFinishCallback(o, (() => {
                    console.log("yyx123 setFinishCallback"), It.stopEffect(o), this.unschedule(n.func), this._effectMap.remove(t)
                })), this.schedule(n.func, n.duringTime)
            }
        }
        onGoldViewShop() {
            this.openShop(null)
        }
        ingorePutInQuenue(t) {
            return t != this.s_win_lose && t != this.s_special_card_type && t != this.s_time_tick
        }
        playCowboyEffect(t) {
            z.tools.IsMiniGameSoundEffectOn() && 0 == this._isEnterBackground && (C.isBrowser && this.ingorePutInQuenue(t) ? this.playEffectForPath(t) : Lt.playSoundEffect(t, !1))
        }
        playCowboyBGM() {
            Lt.playMusic(this.s_cowboyBGM, !0)
        }
        stopCowboyBGM() {
            Lt.stopMusic()
        }
        backToCowboyListScene() {
            var t, e;
            lt.getVideoCowboyRoom().Reset(), z.netWorkManager.closeGameConnect(!1, null == (t = this.gameSceneInstance) || null == (t = t.room) ? void 0 : t.getCurrentGameID()), z.viewAdaptive.isselfchange = !1, z.viewAdaptive.videoCowboyRoomId = 0;
            const o = null == (e = gt.getInstance(this.node)) ? void 0 : e.room;
            null == o || o.reset(), z.action.preSwitchScene(z.Enum.SCENE.HALL_SCENE, (t => {
                z.MessageCenter.send("switchSceneToMiniGame")
            }))
        }
        cleanData() {
            z.MessageCenter.send("onExitCowboyLiveVideo"), z.MessageCenter.unregister("on_cowboy_gamedata_syn_notify", this.node), z.MessageCenter.unregister("on_update_trend_notify", this.node), z.MessageCenter.unregister("on_update_playerlist_notify", this.node), z.MessageCenter.unregister("on_cowboy_sound_switch_notify", this.node), z.MessageCenter.unregister("on_selfinfo_notify", this.node), z.MessageCenter.unregister("showMedalMsg", this.node), z.MessageCenter.unregister("goldViewShop", this.node), z.MessageCenter.unregister("on_cowboy_game_round_end_notify", this.node), z.MessageCenter.unregister("on_cowboy_deal_notify", this.node), z.MessageCenter.unregister("on_cowboy_start_bet_notify", this.node), z.MessageCenter.unregister("on_cowboy_bet_notify", this.node), z.MessageCenter.unregister("on_cowboy_auto_bet_notify", this.node), z.MessageCenter.unregister("on_cowboy_auto_bet_notify_handle_over", this.node), z.MessageCenter.unregister("on_cowboy_leave_room_succ", this.node), z.MessageCenter.unregister("on_cowboy_auto_bet_succ", this.node), z.MessageCenter.unregister("on_cowboy_room_param_change_notify", this.node), z.MessageCenter.unregister("on_cowboy_server_error", this.node), z.MessageCenter.unregister("on_cowboy_kick_notify", this.node), z.MessageCenter.unregister("on_cowboy_join_room_failed", this.node), z.MessageCenter.unregister("showShopPanel", this.node), z.MessageCenter.unregister("showLuckButton", this.node), z.MessageCenter.unregister("turntableResultNotice", this.node), z.MessageCenter.unregister("update_gold", this.node), z.MessageCenter.unregister("on_cowboy_bet_amount_level_change", this.node), z.MessageCenter.unregister("on_cowboy_advance_autobet_set", this.node), z.MessageCenter.unregister("on_cowboy_advance_autobet", this.node), z.MessageCenter.unregister("on_cowboy_advance_autobet_cancel", this.node), z.MessageCenter.unregister("on_videoCowboy_HandleStopBetNotify", this.node), z.MessageCenter.unregister("on_videoCowboy_HandleSkipRoundNotify", this.node), z.MessageCenter.unregister("on_videoCowboy_HandleCancelRoundNotify", this.node), z.MessageCenter.unregister("videoCowboy_ShowCardNotify", this.node), z.MessageCenter.unregister("on_videocowboy_showVideoStatusTips", this.node), z.MessageCenter.unregister("onExitCowboyLiveVideo", this.node), z.MessageCenter.unregister("on_advance_autobet_add", this.node), z.MessageCenter.unregister("on_cowboy_advance_autobet_limit_reached", this.node), z.MessageCenter.unregister("sendNoticeMsg", this.node), z.config.isSiyuType() ? (z.MessageCenter.unregister("on_syOnEnterBackground", this.node), z.MessageCenter.unregister("on_syOnEnterForeground", this.node)) : (f.off(A.EVENT_HIDE, this.OnAppEnterBackground, this), f.off(A.EVENT_SHOW, this.OnAppEnterForeground, this)), z.MessageCenter.unregister("click_btn_exit_room", this.node), this.stopCowboyBGM(), this.unschedule(this.onLeftTimeUpdate), this._clearWayOutInfo(), z.MessageCenter.unregister(z.config.CHANGE_LANGUAGE, this.node), z.MessageCenter.unregister("onClickedExchangeRate", this.node)
        }
        backToMainScene(t, e) {
            var o;
            t = null == t ? "" : t, z.netWorkManager.closeGameConnect(!1, null == (o = this.gameSceneInstance) || null == (o = o.room) ? void 0 : o.getCurrentGameID()), z.isDesktopBuild() && z.appConfig.getGeneralConfig().multiWindowEnabled ? z.MessageCenter.send("showMainTip", t) : lt.getVideoCowboyRoom().backToMainTips = t, e ? z.videoCowboyNet.RequestLeaveRoom() : z.roomManager.onResponse_LeaveRoom(Dt.video_cowboy_proto.LeaveRoomResp.create({
                code: 1
            }), z.Enum.GameId.VideoCowboy, z.roomManager.getMiniGameRoomIdTemplate(z.Enum.GameId.VideoCowboy))
        }
        clearRound() {
            this.hideAllWinPlayerLightAnim(), this.hideAllCardsAndCardType(), this.hideWinCards(), this.clearAllBetArea(), this.hideBetCountDown(), this._nodeAnim.removeAllChildren(), Rt.stopAll(this._nodeAnim), this.hideAllTimelineAnims(), this.hideGameTips(), this.hideHistoryMoveAnim(), this.hideTrendChangeAnim(), this.clearAllCowboyToasts(), this._openCardLayer.reset(), this.showBetClock(!1), this.hideKaiJuSprite(), this.hideStopXiazhuSprite(), this.hideKaiPaiSprite(), this.hideJieSuanSprite(), this.handleClockChangeColor(), this._updateBetButtonState(), this.resetPointAni()
        }
        clearSceneAfterJieSuan() {
            this.hideAllWinPlayerLightAnim(), this.hideAllCardsAndCardType(), this.hideWinCards(), this.clearAllBetArea(), this.hideBetCountDown(), this._nodeAnim.removeAllChildren(), Rt.stopAll(this._nodeAnim), this.hideGameTips(), this.hideHistoryMoveAnim(), this.hideTrendChangeAnim(), this.clearAllCowboyToasts(), this.showBetClock(!1), this.hideKaiJuSprite(), this.hideStopXiazhuSprite(), this.hideKaiPaiSprite(), this.hideJieSuanSprite(), this.handleClockChangeColor()
        }
        initCards() {
            this._redCardPanel = this._gameContent.getChildByName("red_card_panel"), this._blueCardPanel = this._gameContent.getChildByName("blue_card_panel"), this._oriRedHandCards.push(this._redCardPanel.getChildByName("handcard_0").getComponent(T)), this._oriRedHandCards.push(this._redCardPanel.getChildByName("handcard_1").getComponent(T)), this._oriBlueHandCards.push(this._blueCardPanel.getChildByName("handcard_0").getComponent(T)), this._oriBlueHandCards.push(this._blueCardPanel.getChildByName("handcard_1").getComponent(T));
            for (let t = 0; t < 2; t++) {
                let e = Et.v3tov2(this._oriRedHandCards[t].node.getPosition()),
                    o = Et.v3tov2(this._oriBlueHandCards[t].node.getPosition());
                this._oriRedHandCardsPos.push(e), this._oriBlueHandCardsPos.push(o), this._redHandCards.push(U.create()), this._blueHandCards.push(U.create()), this._redHandCards[t].ResetFromNode(this._oriRedHandCards[t].node), this._blueHandCards[t].ResetFromNode(this._oriBlueHandCards[t].node)
            }
            this._publicCardPanel = this._gameContent.getChildByName("public_card_panel");
            for (let t = 0; t < 5; t++) {
                this._oriPublicCards.push(this._publicCardPanel.getChildByName(z.StringTools.formatC("handcard_%d", t)).getComponent(T));
                let e = Et.v3tov2(this._oriPublicCards[t].node.getPosition());
                this._oriPublicCardsPos.push(e), this._publicCards.push(U.create()), this._publicCards[t].ResetFromNode(this._oriPublicCards[t].node)
            }
        }
        hideAllCardsAndCardType() {
            this.setAllCardsVisible(!1), this._openCardLayer.hideAllCardsAndCardType()
        }
        setAllHandCardsVisible(t) {
            for (let e = 0; e < 2; e++) this._redHandCards[e].node.active = t, this._blueHandCards[e].node.active = t, Rt.stopAll(this._redHandCards[e].node), Rt.stopAll(this._blueHandCards[e].node), t && (this._redHandCards[e].node.setPosition(Et.v2tov3(this._oriRedHandCardsPos[e])), this._blueHandCards[e].node.setPosition(Et.v2tov3(this._oriBlueHandCardsPos[e])))
        }
        setAllPublicCardsVisible(t) {
            for (let e = 0; e < 5; e++) this._publicCards[e].node.active = t, Rt.stopAll(this._publicCards[e].node), t && this._publicCards[e].node.setPosition(Et.v2tov3(this._oriPublicCardsPos[e]))
        }
        setAllCardsVisible(t) {
            this.setAllHandCardsVisible(t), this.setAllPublicCardsVisible(t)
        }
        updateAllCardsBack() {
            for (let t = 0; t < 2; t++) this._redHandCards[t].SetFace(!1), this._blueHandCards[t].SetFace(!1);
            for (let t = 0; t < 5; t++) this._publicCards[t].SetFace(!1)
        }
        updateCards() {
            if (this.setAllCardsVisible(!0), this.updateAllCardsBack(), 2 == lt.getVideoCowboyRoom().redHandCards.length && 2 == lt.getVideoCowboyRoom().blueHandCards.length)
                for (let t = 0; t < 2; t++) this._redHandCards[t].SetContent(lt.getVideoCowboyRoom().redHandCards[t].number, lt.getVideoCowboyRoom().redHandCards[t].suit), this._blueHandCards[t].SetContent(lt.getVideoCowboyRoom().blueHandCards[t].number, lt.getVideoCowboyRoom().blueHandCards[t].suit), this._redHandCards[t].SetFace(!0), this._blueHandCards[t].SetFace(!0);
            let t = lt.getVideoCowboyRoom().publicCards.length;
            if (1 != t)
                for (let e = 0; e < 5; e++) e < t && (this._publicCards[e].SetContent(lt.getVideoCowboyRoom().publicCards[e].number, lt.getVideoCowboyRoom().publicCards[e].suit), this._publicCards[e].SetFace(!0));
            else console.log("1111111111-》publicCardNum == 1")
        }
        updateWinCards() {
            for (let t = 0; t < 2; t++) this._redHandCards[t].Gray(!0), this._blueHandCards[t].Gray(!0);
            for (let t = 0; t < 5; t++) this._publicCards[t].Gray(!0);
            let t = lt.getVideoCowboyRoom().winCards.length;
            for (let e = 0; e < t; e++) {
                let t = lt.getVideoCowboyRoom().winCards[e],
                    o = !1;
                for (let e = 0; e < 2; e++) {
                    if (this._redHandCards[e].GetNumber() == t.number && this._redHandCards[e].GetSuit() == t.suit) {
                        this._redHandCards[e].Gray(!1), o = !0;
                        break
                    }
                    if (this._blueHandCards[e].GetNumber() == t.number && this._blueHandCards[e].GetSuit() == t.suit) {
                        this._blueHandCards[e].Gray(!1), o = !0;
                        break
                    }
                }
                if (!o)
                    for (let e = 0; e < 5; e++)
                        if (this._publicCards[e].GetNumber() == t.number && this._publicCards[e].GetSuit() == t.suit) {
                            this._publicCards[e].Gray(!1), o = !0;
                            break
                        }
            }
        }
        hideWinCards() {
            for (let t = 0; t < 2; t++) this._redHandCards[t].Gray(!1), this._blueHandCards[t].Gray(!1);
            for (let t = 0; t < 5; t++) this._publicCards[t].Gray(!1)
        }
        updateWinFlags() {
            let t = lt.getVideoCowboyRoom().matchOption,
                e = t.length;
            for (let o = 0; o < e; o++) {
                let e = this.getAreaIdxByBetOption(t[o]);
                this.clearBetArea(e), this.hideWinFlagAnim(e), this.showWinFlagAnim(e)
            }
        }
        hideWinFlags() {
            let t = this._winFlagAnims.length;
            for (let e = 0; e < t; e++) this.hideWinFlagAnim(e), this._sprBetAreaWinFlags[e].node.active = !1
        }
        initCowboyToastNode() {
            this._toastNode = new r, this.node.addChild(this._toastNode), this._toastNode.setSiblingIndex(st.COWBOY_LOCAL_ZORDER_TOAST + 2), this._toastNode.addOrGetComponent(b).setContentSize(z.config.WIDTH, z.config.HEIGHT)
        }
        showCowboyToast(t) {
            let e = (new r).addComponent(T);
            z.resMgr.setSpriteFrame(e.node, "zh_CN/game/cowboy/cowboy_tips_bg"), this._toastNode.addChild(e.node);
            let o = (new r).addComponent(l);
            o.verticalAlign = l.VerticalAlign.CENTER, o.horizontalAlign = l.HorizontalAlign.CENTER, o.fontSize = 45, o.lineHeight = 90, o.color = P(140, 204, 156), o.string = t, e.node.addChild(o.node), Rt.moveBy(e.node, 1, v(0, 12, 0), null, .1), Rt.fadeOut(e.node, .8, (() => {
                e.node.removeFromParent()
            }))
        }
        clearAllCowboyToasts() {
            this._toastNode.removeAllChildren()
        }
        onLeftTimeUpdate(t) {
            this._leftTime--, this._leftTime = this._leftTime < 0 ? 0 : this._leftTime, this._clock_total_time > 5 && 5 == this._leftTime && (this._clock_canChange = !0, this.handleClockChangeColor())
        }
        resetLeftTimer() {
            this._leftTime = lt.getVideoCowboyRoom().leftSeconds, this.unschedule(this.onLeftTimeUpdate), this.schedule(this.onLeftTimeUpdate, 1)
        }
        initTimelineAnims() {
            this._waitForNextRoundAnim = this.initAni(this._timelineNodeAnim, this.wait_for_next_round_prefab), this._waitForNextRoundAction = this._waitForNextRoundAnim.getComponent(N)
        }
        initAni(t, e) {
            let o = g(e);
            return o.active = !1, t.addChild(o), o
        }
        initWinFlagAnims() {
            let t = this._sprBetAreaWinFlags.length;
            for (let e = 0; e < t; e++) {
                let t = this._sprBetAreaWinFlags[e].node,
                    o = this.initAni(this.node, this.win_flag_prefab),
                    i = o.getComponent(N);
                o.setSiblingIndex(st.COWBOY_LOCAL_ZORDER_ANIM_NODE);
                let n = o.parent.convertToNodeSpaceAR(t.parent.convertToWorldSpaceAR(t.position));
                o.setPosition(n.x, n.y - 177);
                const s = o.getChildByName("win_29");
                if (s) {
                    [z.Enum.LANGUAGE_TYPE.en_US, ...z.appConfig.getGameConfig().miniGameConfig.availableLangResForMiniGames].includes(z.config.getCurrentLanguage()) && z.resMgr.setSpriteFrame(s, lt.getLanguagePath("game/cowboy/language/win_flag"))
                }
                this._winFlagAnims.push(o), this._winFlagActions.push(i)
            }
        }
        showWinFlagAnim(t) {
            this._winFlagAnims[t].active = !0, this.gotoFrameAndPlay(this._winFlagActions[t], 0, 145, !0)
        }
        hideWinFlagAnim(t) {
            t >= z.StringTools.getArrayLength(this._winFlagAnims) || (this._winFlagAnims[t].active = !1, this.gotoFrameZeroAndPause(this._winFlagActions[t]))
        }
        showSpecialCardTypeAnim(t, e) {
            if (t = 1 == t, e = null == e ? 0 : e, this.clearSpecialCardTypeAnim(), !this.isResultSpecialCardType()) return;
            let o = -1,
                i = lt.getVideoCowboyRoom().matchOption,
                n = i.length;
            for (let t = 0; t < n; t++) {
                let e = this.getAreaIdxByBetOption(i[t]),
                    n = this.getBetOptionByAreaIdx(e);
                if (n == lt.Enum.BetZoneOption.FIVE_KING_TONG_HUA_SHUN_4) {
                    o = n;
                    break
                }
            }
            if (o < 0) {
                let t = lt.getVideoCowboyRoom().matchOption,
                    e = t.length;
                for (let i = 0; i < e; i++) {
                    let e = this.getAreaIdxByBetOption(t[i]),
                        n = this.getBetOptionByAreaIdx(e);
                    if (n == lt.Enum.BetZoneOption.HOLE_A) {
                        o = n;
                        break
                    }
                }
            }
            if (o < 0) return;
            let s = 0;
            0 == lt.getVideoCowboyRoom().result || 1 == lt.getVideoCowboyRoom().result ? s = lt.getVideoCowboyRoom().redLevel : -1 == lt.getVideoCowboyRoom().result && (s = lt.getVideoCowboyRoom().blueLevel);
            let a = "",
                r = "";
            if (o == lt.Enum.BetZoneOption.FIVE_KING_TONG_HUA_SHUN_4)
                if (8 == s) a = "special_jingang", r = "special_card_odd_248";
                else if (9 == s) a = "special_tonghuashun", r = "special_card_odd_248";
            else {
                if (10 != s) return void console.log("showSpecialCardTypeAnim, show special cardtype anim error1");
                a = "special_huangtong", r = "special_card_odd_248"
            } else {
                if (o != lt.Enum.BetZoneOption.HOLE_A) return void console.log("showSpecialCardTypeAnim, show special cardtype anim error2");
                a = "special_duia", r = "special_card_odd_100"
            }
            let l = this._nodeAnim.getChildByName("special_card_type_anim"),
                d = null;
            l || (l = this.initAni(this._nodeAnim, this.special_card_type_prefab), d = l.getComponent(N), l.name = "special_card_type_anim", this._winFlagAnims.push(l), this._winFlagActions.push(d)), l.active = !0;
            let h = z.config.getCurrentLanguage() == z.Enum.LANGUAGE_TYPE.zh_CN ? this.special_card_type_PLIST : this.en_animation_PLIST;
            lt.loadSpriteTextureByPlist(h, l.getChildByName("special_card_type").getComponent(T), a), lt.loadSpriteTextureByPlist(h, l.getChildByName("special_card_odd").getComponent(T), r), t ? (this.gotoFrameAndPlay(d, 480, 480, !1), O(this._nodeAnim).delay(e).call((function() {
                l.active = !1, this.showBetWinFlagsAndFlyCoinsAnim()
            })).start()) : (this.playCowboyEffect(this.s_special_card_type), this.gotoFrameAndPlay(d, 0, 480, !1), d.once(N.EventType.FINISHED, (t => {
                l.active = !1, this.showBetWinFlagsAndFlyCoinsAnim()
            }), this))
        }
        isResultSpecialCardType() {
            let t = lt.getVideoCowboyRoom().matchOption,
                e = z.StringTools.getArrayLength(t);
            for (let o = 0; o < e; o++) {
                let e = this.getAreaIdxByBetOption(t[o]),
                    i = this.getBetOptionByAreaIdx(e);
                if (i == lt.Enum.BetZoneOption.HOLE_A || i == lt.Enum.BetZoneOption.FIVE_KING_TONG_HUA_SHUN_4) return !0
            }
            return !1
        }
        clearSpecialCardTypeAnim() {
            let t = this._nodeAnim.getChildByName("special_card_type_anim");
            t && t.removeFromParent()
        }
        initTrendChangeAnim() {}
        showTrendChangeAnim() {}
        hideTrendChangeAnim() {}
        showRecordDotBezierAnim() {
            let t = (new r).addComponent(T),
                e = (new r).addComponent(T),
                o = v(0, 0, 0),
                i = R(0, 0),
                n = R(0, 0);
            if (1 == lt.getVideoCowboyRoom().result) {
                lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, t, "record_red_fire_light"), lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, e, "record_red_fire");
                let s = this.getAreaIdxByBetOption(lt.Enum.BetZoneOption.RED_WIN);
                o = this._betAreas[s].getParent().convertToWorldSpaceAR(this._betAreas[s].getPosition()), o = this._nodeAnim.convertToNodeSpaceAR(o), i = R(300 + o.x, 80 + o.y), n = R(600 + o.x, 160 + o.y)
            } else if (-1 == lt.getVideoCowboyRoom().result) {
                lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, t, "record_blue_fire_light"), lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, e, "record_blue_fire");
                let s = this.getAreaIdxByBetOption(lt.Enum.BetZoneOption.BLUE_WIN);
                o = this._betAreas[s].getParent().convertToWorldSpaceAR(this._betAreas[s].getPosition()), o = this._nodeAnim.convertToNodeSpaceAR(o), i = R(-80 + o.x, 80 + o.y), n = R(-120 + o.x, 160 + o.y)
            } else if (0 == lt.getVideoCowboyRoom().result) {
                lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, t, "record_draw_fire_light"), lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, e, "record_draw_fire");
                let s = this.getAreaIdxByBetOption(lt.Enum.BetZoneOption.EQUAL);
                o = this._betAreas[s].getParent().convertToWorldSpaceAR(this._betAreas[s].getPosition()), o = this._nodeAnim.convertToNodeSpaceAR(o), i = R(80 + o.x, 80 + o.y), n = R(160 + o.x, 160 + o.y)
            }
            if (!e) return;
            let s = this._nodeAnim.convertToNodeSpaceAR(this._lastRecordDotWorldPos);
            this._nodeAnim.addChild(t.node), t.node.active = !1, t.node.setPosition(s), this._nodeAnim.addChild(e.node), e.node.setPosition(o), e.node.scale = v(0, 0, 0), e.node.addOrGetComponent(E).opacity = 0, Rt.scaleAndFade(e.node, .3, u.ONE, 255), this.showTrendChangeAnim();
            let a = z.StringTools.getArrayLength(this._recordDots);
            O(e).sequence(O().delay(.32), Rt.bezierTo(e.node, .5, i, n, s, {}), O().call((() => {
                e.node.removeFromParent(), a > 0 && (this._recordDots[a - 1].node.active = !0), t.node.active = !0;
                let o = t.node.addOrGetComponent(E);
                O(o).sequence(O(o).to(.18, {
                    opacity: 0
                }, {
                    easing: L.fade
                }), O(o).to(.18, {
                    opacity: 255
                }, {
                    easing: L.fade
                }), O(o).to(.18, {
                    opacity: 0
                }, {
                    easing: L.fade
                }), O(o).call((() => {
                    t.node.removeFromParent()
                }))).start()
            }))).start(), O(this._nodeAnim).delay(.5).call((() => {
                a > 0 && (this._recordDots[a - 1].node.active = !1), this.showHistoryMoveAnim()
            })).delay(2).call((() => {
                this.hideTrendChangeAnim()
            })).start()
        }
        showWinPlayerLightAnim(t) {
            let e = this.getPlayerHeadNodesByUid(t);
            if (0 != e.length) {
                for (let t = 0; t < e.length; t++) {
                    let o = e[t];
                    if (o == this._selfHeadBg) continue;
                    let i = o.getChildByName("win_player_light");
                    i || (i = this.initAni(o, this.win_player_light_prefab), i.name = "win_player_light", i.setPosition(v(0, 25, 0)), i.setSiblingIndex(10));
                    let n = i.getComponent(N);
                    i.active = !0, this.gotoFrameAndPlay(n, 0, 20, !0)
                }
                O(this._nodeAnim).delay(.5).call((() => {
                    this.updatePlayerWinCount(t, !0)
                })).start()
            } else this.updatePlayerWinCount(t, !0)
        }
        hideAllWinPlayerLightAnim() {
            let t = this._otherPlayerHeads.length;
            for (let e = 0; e < t; e++) {
                let t = this._otherPlayerHeads[e].bg.node.getChildByName("win_player_light");
                t && t.removeFromParent()
            }
        }
        updatePlayerWinCount(t, e) {
            e = 1 == e;
            let o = this.getPlayerHeadNodesByUid(t);
            if (0 != o.length)
                for (let i = 0; i < o.length; i++) {
                    let n = o[i];
                    if (this._otherPlayerHeads[0].bg.node == n || this._otherPlayerHeads[1].bg.node == n) continue;
                    let s = this.node.getChildByName("win_player_win_count_" + n.uuid);
                    s && s.removeFromParent();
                    let a = lt.getVideoCowboyRoom().getPlayerKeepWinCountByUid(t);
                    if (a >= 3) {
                        a = a > 10 ? 11 : a;
                        const t = g(this.winCountPrefab);
                        t.name = "win_player_win_count_" + n.uuid;
                        let o = n == this._selfHeadBg ? 40 : 70,
                            i = n.convertToWorldSpaceAR(v(0, o, 0));
                        i = this.node.convertToNodeSpaceAR(i), t.setPosition(i), this.node.addChild(t, st.COWBOY_LOCAL_ZORDER_IMG_WIN_COUNT);
                        const s = t.getComponentInChildren(Pt);
                        if (s ? s.setString(z.config.getStringData(z.StringTools.formatC("Wins_streak_%d", a))) : I("[CowboyScene] prefab winCountPrefab is missing GroupLabel"), e) {
                            let e = t.getPosition(),
                                o = e,
                                i = n.getParent().convertToWorldSpaceAR(n.getPosition());
                            i = n.convertToNodeSpaceAR(i), o = i.x < z.config.WIDTH / 2 ? v(-200 + o.x, 0 + o.y, 0) : v(200 + o.x, 0 + o.y, 0), t.setPosition(o), Rt.moveTo(t, .18, e, L.backOut)
                        }
                    }
                }
        }
        updateAllPlayerWinCount() {
            this.updatePlayerWinCount(this.getCowboyuserId());
            for (let t = 0; t < this._otherPlayerHeads.length; t++) {
                let e = lt.getVideoCowboyRoom().otherPlayers;
                if (t < e.length) {
                    let o = e[t];
                    this.updatePlayerWinCount(o.uid)
                }
            }
        }
        hideAllTimelineAnims() {
            this.gotoFrameZeroAndPause(this._waitForNextRoundAction), this._waitForNextRoundAnim.active = !1;
            let t = this._winFlagAnims.length;
            for (let e = 0; e < t; e++) this.gotoFrameZeroAndPause(this._winFlagActions[e]), this._winFlagAnims[e].active = !1
        }
        gotoFrameZeroAndPause(t) {
            t.play(), t.stop()
        }
        updatePlayerCoinBeforeSettle() {
            let t = lt.getVideoCowboyRoom().playerSettles.get(this.getCowboyuserId());
            if (t) {
                const e = t.curCoin - t.totalWinAmount;
                this.updateUserBalanceStatus(e)
            }
            for (let t = 0; t < this._otherPlayerHeads.length; t++) {
                let e = this._otherPlayerHeads[t];
                if (e.bg.node.active && e.uid > 0) {
                    let t = lt.getVideoCowboyRoom().playerSettles.get(e.uid);
                    t && (e.textCoin.string = this.getShortOwnCoinString(t.curCoin - t.totalWinAmount))
                }
            }
        }
        updateAllCardsBeforeSettle() {
            this.setAllCardsVisible(!0), this.updateAllCardsBack()
        }
        updateAllCardsExceptPublicBeforeSettle() {
            if (this.setAllCardsVisible(!0), this.updateAllCardsBack(), 2 == lt.getVideoCowboyRoom().redHandCards.length && 2 == lt.getVideoCowboyRoom().blueHandCards.length)
                for (let t = 0; t < 2; t++) this._redHandCards[t].SetContent(lt.getVideoCowboyRoom().redHandCards[t].number, lt.getVideoCowboyRoom().redHandCards[t].suit), this._blueHandCards[t].SetContent(lt.getVideoCowboyRoom().blueHandCards[t].number, lt.getVideoCowboyRoom().blueHandCards[t].suit), this._redHandCards[t].SetFace(!0), this._blueHandCards[t].SetFace(!0)
        }
        clearLoseBetCoins() {
            let t = this._betCoinContents.length,
                e = lt.getVideoCowboyRoom().matchOption,
                o = lt.getVideoCowboyRoom().matchOption.length;
            for (let i = 0; i < t; i++) {
                let t = this.getBetOptionByAreaIdx(i),
                    n = !1;
                for (let i = 0; i < o; i++)
                    if (t == e[i]) {
                        n = !0;
                        break
                    } n || (this._betCoinContents[i].removeAllChildren(), console.log("clearLoseBetCoins-.清理areaIndex = " + i), this.hideAreaCoin(i, !1))
            }
        }
        showRoundStartAnim() {
            this.sendCardsAnim()
        }
        sendCardsAnim() {
            this.setAllCardsVisible(!1), this.updateAllCardsBack();
            let t = [],
                e = [],
                o = R(30, -30),
                i = R(-30, -30),
                n = R(-30, -30);
            for (let t = 0; t < 2; t++) this._redHandCards[t].node.setPosition(this._oriRedHandCardsPos[t].x + o.x, this._oriRedHandCardsPos[t].y + o.y), this._blueHandCards[t].node.setPosition(this._oriBlueHandCardsPos[t].x + i.x, this._oriBlueHandCardsPos[t].y + i.y);
            for (let t = 0; t < 5; t++) this._publicCards[t].node.setPosition(this._oriPublicCardsPos[t].x + n.x, this._oriPublicCardsPos[t].y + n.y), this._publicCards[t].SetFace(!1);
            t.push(this._redHandCards[0]), t.push(this._blueHandCards[0]), t.push(this._redHandCards[1]), t.push(this._blueHandCards[1]), e.push(this._oriRedHandCardsPos[0]), e.push(this._oriBlueHandCardsPos[0]), e.push(this._oriRedHandCardsPos[1]), e.push(this._oriBlueHandCardsPos[1]);
            let s = .14,
                a = t.length;
            for (let o = 0; o < a; o++) {
                let i = O().to(s, {
                        position: Et.v2tov3(e[o])
                    }, {
                        easing: Rt.easeInOut(1)
                    }),
                    n = O().call((() => {
                        t[o].node.active = !0, t[o].SetFace(!1)
                    })),
                    r = O().call(function() {
                        if (o == a - 1)
                            for (let t = 0; t < 5; t++) {
                                let e = O().to(s, {
                                        position: Et.v2tov3(this._oriPublicCardsPos[t])
                                    }, {
                                        easing: Rt.easeInOut(1)
                                    }),
                                    o = O().call(function() {
                                        this._publicCards[t].node.active = !0, this._publicCards[t].SetFace(!1)
                                    }.bind(this)),
                                    i = O().call(function() {}.bind(this));
                                this.scheduleOnce(function() {
                                    this._publicCards[t].node.active = !0, O(this._publicCards[t].node).sequence(o, e, i).start()
                                }.bind(this), t * s)
                            }
                    }.bind(this));
                this.scheduleOnce(function() {
                    t[o].node.active = !0, O(t[o].node).sequence(n, i, r).start()
                }.bind(this), o * s)
            }
        }
        showHandCardsAnim() {
            this.showHideLoseBetCoinsAnim()
        }
        showFightBeginAnim() {
            this.showBetCoutDownBeginAnim()
        }
        showFightEndAnim() {}
        showBetCoutDownBeginAnim() {
            this.updateBetCoutDown(), this._leftTime > 0 && (this.playKaiJu(), this._updateBetButtonState(), this._checkAdvanceAutoReq())
        }
        showBetCoutDownEndAnim() {
            this._updateBetButtonState(), this.showOpenCardTips(), this.hideBetCountDown(), this.showBetClock(!1), this.playStopXiazhu(), this.playPointAni()
        }
        showHideLoseBetCoinsAnim() {
            let t = lt.getVideoCowboyRoom().matchOption,
                e = z.StringTools.getArrayLength(t),
                o = z.StringTools.getArrayLength(this._betCoinContents);
            for (let i = 0; i < o; i++) {
                let o = this.getBetOptionByAreaIdx(i),
                    n = !1;
                for (let i = 0; i < e; i++)
                    if (o == t[i]) {
                        n = !0;
                        break
                    } n || (console.log("清理areaIndex = " + i), this.hideAreaCoin(i))
            }
            O(this._nodeAnim).delay(this._hideLoseBetCoinsDuration).call((() => {
                this.isResultSpecialCardType() ? this.showSpecialCardTypeAnim() : this.showBetWinFlagsAndFlyCoinsAnim()
            })).start()
        }
        hideAreaCoin(t, e) {
            e = 0 != e;
            let o = this._coinNodeByArea[t];
            for (let t = z.StringTools.getArrayLength(o) - 1; t >= 0; t--) {
                let i = o[t];
                e ? Rt.fadeOut(i, .5) : i.addOrGetComponent(E).opacity = 0
            }
        }
        handleCoin() {
            let t = this._coinNode.children.length,
                e = this._coinNode.children;
            for (let o = t - 1; o >= 0; o--) e[o].active = !0, Rt.stopAll(e[o]), this.nodePutToPool(e[o]);
            let o = this._coinNodeByArea.length;
            for (let t = 0; t < o; t++) this._coinNodeByArea[t] = []
        }
        showBetWinFlagsAndFlyCoinsAnim() {
            let t = lt.getVideoCowboyRoom().matchOption,
                e = z.StringTools.getArrayLength(t);
            for (let o = 0; o < e; o++) {
                let e = this.getAreaIdxByBetOption(t[o]);
                this.clearBetArea(e), this.showWinFlagAnim(e)
            }
            O(this._nodeAnim).delay(.5).call((() => {
                this._showAllWayOutAnim(), this.showRecordDotBezierAnim()
            })).start();
            let o = lt.getVideoCowboyRoom().playerSettles;
            o.add(4294967295, lt.getVideoCowboyRoom().otherPlayersSettle), o.forEach(function(t, e, o) {
                let i = t,
                    n = this.getPlayerCoinNodesByUid(i);
                0 == n.length && (console.log("playerSettles uid: %d not in gameplayers, use player list button", i), n.push(this._btnPlayerList.node));
                for (let t = 0; t < n.length; t++) {
                    if (i == this.getCowboyuserId() && t > 0) continue;
                    let o = n[t],
                        s = o.parent.convertToWorldSpaceAR(o.getPosition());
                    console.log("世界坐标系---------." + s);
                    let a = o.parent.convertToWorldSpaceAR(o.getPosition());
                    a = this._nodeAnim.convertToNodeSpaceAR(a);
                    let d = e.settle;
                    for (let t = 0; t < d.length; t++) {
                        let e = d[t];
                        if (e.winAmount > 0) {
                            let t = e.option,
                                o = this.getAreaIdxByBetOption(t),
                                i = this._betLineNode[o],
                                n = (i.getContentSize(), this.getBetDetailAmounts(e.winAmount)),
                                s = n.length;
                            for (let t = 0; t < s; t++) {
                                let e = this.createFlyCoin(o, n[t], !0),
                                    s = i.convertToWorldSpaceAR(this.getOneAreaPos(o, this.isCircleCoin(n[t])));
                                s = this._nodeAnim.convertToNodeSpaceAR(s), this._nodeAnim.addChild(e.node), e.node.setPosition(s), this.scheduleOnce(function() {
                                    e.node.active = !0, O(e.node).delay(.2 + .025 * t).sequence(O().to(.6, {
                                        position: a
                                    }, {
                                        easing: Rt.easeOut(.8)
                                    }), O().call((() => {
                                        this.nodePutToPool(e.node)
                                    }))).start()
                                }.bind(this), .7)
                            }
                        }
                    }
                    let h = e.totalWinAmount;
                    h >= 100 ? (O(this._nodeAnim).delay(.3).call((() => {
                        let t = (new r).addComponent(T);
                        lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, t, "win_coin_bg"), t.node.setPosition(a), console.log("世界坐标系---------." + s + ", " + (z.config.WIDTH / 2).toString()), console.log(o != this._selfCoin.node), o == this._btnPlayerList.node ? t.node.addOrGetComponent(b).setAnchorPoint(R(1, .5)) : s.x < z.config.WIDTH / 2 ? o != this._selfCoin.node && t.node.addOrGetComponent(b).setAnchorPoint(R(0, .5)) : t.node.addOrGetComponent(b).setAnchorPoint(R(1, .5)), this._nodeAnim.addChild(t.node);
                        let e = (new r).addComponent(l);
                        e.font = this.win_num_FNT, e.fontSize = 10, e.string = "+" + z.StringTools.numberToString(z.StringTools.clientGoldByServer(h)), t.node.addChild(e.node), e.node.scale = v(1.4, 1.4, 1.4), o == this._btnPlayerList.node || s.x > z.config.WIDTH / 2 ? e.node.setPosition(-t.node.addOrGetComponent(b).width / 2, 0) : o != this._selfCoin.node && e.node.setPosition(t.node.addOrGetComponent(b).width / 2, 0), O().parallel(O(t.node).delay(1.3).by(1.5, {
                            position: v(0, 50, 0)
                        }), O(t.node.addOrGetComponent(E)).delay(1.4).to(1.5, {
                            opacity: 0
                        }, {
                            easing: Rt.easeInOut(1)
                        })).call((() => {
                            t.node.removeFromParent()
                        })).start(), O(e.node.addOrGetComponent(E)).delay(1.4).to(1.5, {
                            opacity: 0
                        }, {
                            easing: Rt.easeInOut(1)
                        }).start(), O(this._nodeAnim).delay(.3).call(this.updateRoundEndPlayerCoin.bind(this)).start(), this.playCowboyEffect(this.s_get_win_coin)
                    })).start(), O(this._nodeAnim).delay(.7).call((() => {
                        this.showWinPlayerLightAnim(i)
                    })).start()) : (this.updateRoundEndPlayerCoin(), this.updatePlayerWinCount(i, !0))
                }
            }.bind(this)), 0 != lt.getVideoCowboyRoom().stopWorld ? (this.showCowboyToast(z.config.getStringDataCasino("Cowboy_server_will_stop_text")), O(this._nodeAnim).delay(this._betWinFlagsAndFlyCoinsDuration).call(this.backToCowboyListScene.bind(this)).start()) : O(this._nodeAnim).delay(this._betWinFlagsAndFlyCoinsDuration).call(this.showNextRoundTips.bind(this)).start()
        }
        updateRoundEndPlayerCoin() {
            let t = lt.getVideoCowboyRoom().playerSettles.get(this.getCowboyuserId());
            t && this.updateUserBalanceStatus(t.curCoin);
            for (let t = 0; t < this._otherPlayerHeads.length; t++) {
                let e = this._otherPlayerHeads[t];
                if (e.bg.node.active && e.uid > 0) {
                    let t = lt.getVideoCowboyRoom().playerSettles.get(e.uid);
                    t && (e.textCoin.string = this.getShortOwnCoinString(t.curCoin))
                }
            }
        }
        getBetChipIdx(t) {
            let e = lt.getVideoCowboyRoom().pkRoomParam.amountLevel;
            for (let o = 0; o < e.length; o++)
                if (t == e[o]) return o;
            return -1
        }
        getBetDetailAmounts(t) {
            let e = lt.getVideoCowboyRoom().vBetCoinOption;
            return Z.disinteBetAmounts(t, e)
        }
        getAllBetDetailAmounts(t) {
            let e = lt.getVideoCowboyRoom().allZoneBet.get(t);
            if (e) return e;
            return []
        }
        nodePutToPool(t) {
            if (!t) return;
            console.log("#########################nodePutToPool#############################" + this._circlePool.size());
            let e = t.name;
            "btnBet_0" == e ? this._circlePool.put(t) : "btnBet_3" == e && this._squarePool.put(t)
        }
        getRandPos(t, e) {
            let o = .3 * e.addOrGetComponent(b).width,
                i = .3 * e.addOrGetComponent(b).height;
            return R(this.SERangeRandomf(0 + o, t.width - o) - .5 * t.width, this.SERangeRandomf(0 + i, t.height - i) - .5 * t.height)
        }
        createFlyCoin(t, e, o) {
            o = 1 == o;
            let i = this.isCircleCoin(e),
                n = null;
            if (z.StringTools.getArrayLength(this._coinNodeByArea[t]) >= this._areaCoinMax[t]) {
                let e = this._coinNodeByArea[t][0];
                this.nodePutToPool(e), this._coinNodeByArea[t].splice(0, 1)
            }
            return n = i ? this._circlePool.size() > 0 ? this._circlePool.get() : g(this.btnBet_0_prefab) : this._squarePool.size() > 0 ? this._squarePool.get() : g(this.btnBet_3_prefab), o || (this._coinNode.addChild(n), this._coinNodeByArea[t].push(n)), n.scale = v(this._fFlyCoinScaleRate, this._fFlyCoinScaleRate, this._fFlyCoinScaleRate), n.active = !0, n.addOrGetComponent(E).opacity = 255, this.setCoinText(n.getChildByName("textBet"), z.StringTools.clientGoldByServer(e), !0), n.getComponent(T)
        }
        setCoinText(t, e, o) {
            let i = z.StringTools.numberToShowString(e),
                n = z.StringTools.getArrayLength(i);
            t.setContentSize(new x(30 * n, 48)), z.resMgr.adaptWidget(t), t.removeAllChildren();
            for (let e = 0; e < n; e++) {
                let n = new r;
                n.setContentSize(new x(30, 48)), t.addChild(n);
                let s = (new r).addComponent(T);
                s.spriteFrame = this.game_dznz_PLIST.getSpriteFrame((o ? "coin_yellow_" : "coin_gray_") + i.charAt(e)), n.addChild(s.node)
            }
        }
        isCircleCoin(t) {
            return z.StringTools.clientGoldByServer(t) < lt.getVideoCowboyRoom().llCoinUICritical
        }
        showBetInAnim(t, e) {
            e = 1 == e, this.updatePlayerCoin(t.uid), this.updateBetArea(t.betOption);
            let o = this.getAreaIdxByBetOption(t.betOption),
                i = this.getPlayerCoinNodesByUid(t.uid);
            0 == i.length && (console.log("this.showBetInAnim, cannot find valid headBg, use btnPlayerList, oneBet.uid: %d", t.uid), i.push(this._btnPlayerList.node));
            let n = this.isCircleCoin(t.betAmount);
            this._betCoinContents[o].getContentSize();
            for (let s = 0; s < i.length; s++) {
                let a = i[s],
                    r = a.getParent().convertToWorldSpaceAR(a.getPosition());
                if (t.uid == this.getCowboyuserId() && s > 0) continue;
                e || (n ? this.playCowboyEffect(this.s_betin) : this.playCowboyEffect(this.s_betin_many));
                let l = this._coinNode.convertToNodeSpaceAR(r),
                    d = this.createFlyCoin(o, t.betAmount),
                    h = this._betLineNode[o].convertToWorldSpaceAR(this.getOneAreaPos(o, n));
                h = d.node.parent.convertToNodeSpaceAR(h), d.node.setPosition(l), 0 == s ? O(d.node).sequence(O(d.node).to(.3, {
                    position: h
                }), O(d.node).by(.15, {
                    angle: 180
                }), O(d.node).by(.15, {
                    angle: 180
                })).start() : O(d.node).to(.3, {
                    position: h
                }).call((() => {
                    d.node.active = !1
                })).start()
            }
        }
        SERangeRandomf(t, e) {
            return t + Math.random() * (e - t)
        }
        showWaitForNextRoundInAnim() {
            this._waitForNextRoundAnim.active = !0, this.gotoFrameAndPlay(this._waitForNextRoundAction, 0, 30, !1)
        }
        showWaitForNextRoundOutAnim() {
            this._waitForNextRoundAnim && this._waitForNextRoundAnim.active && O(this._waitForNextRoundAnim).to(.3, {
                position: v(1.25 * z.config.WIDTH, 0, 0)
            }).call((() => {
                this._waitForNextRoundAnim.active = !1, this._waitForNextRoundAnim.setPosition(v(0, 0, 0))
            })).start()
        }
        gotoFrameAndPlay(t, e, o, i) {
            t.play()
        }
        initBetArea() {
            let t = this._gameContent.getChildByName("bet_content_bg_ipx"),
                e = this._gameContent.getChildByName("bet_content_bg");
            console.log("--------------------------.###########" + t.addOrGetComponent(b).width);
            let o = 0;
            o += t.addOrGetComponent(b).width, this._bTrueFullScreen = o <= z.config.WIDTH, this._bTrueFullScreen && z.config.IS_FULLSCREEN ? (this._betContentBg = t.getComponent(T), e && e.removeFromParent()) : (S("logo", this._gameContent).setPosition(v(-550, 110, 0)), this._betContentBg = e.getComponent(T), t && t.removeFromParent());
            const i = lt.getBetTableLanguagePath("game/video_cowboy/");
            z.resMgr.setSpriteFrame(this._betContentBg.node, i + (this._bTrueFullScreen && z.config.IS_FULLSCREEN ? "bet_content_ipx" : "bet_content")), this._betContentBg.node.active = !0, this._coinNodeByArea = [], this._mapBetOptionArea.add(lt.Enum.BetZoneOption.RED_WIN, 0), this._mapBetOptionArea.add(lt.Enum.BetZoneOption.EQUAL, 1), this._mapBetOptionArea.add(lt.Enum.BetZoneOption.BLUE_WIN, 2), this._mapBetOptionArea.add(lt.Enum.BetZoneOption.FIVE_NONE_1DUI, 3), this._mapBetOptionArea.add(lt.Enum.BetZoneOption.FIVE_2DUI, 4), this._mapBetOptionArea.add(lt.Enum.BetZoneOption.FIVE_3_SHUN_TONG_HUA, 5), this._mapBetOptionArea.add(lt.Enum.BetZoneOption.FIVE_3_2, 6), this._mapBetOptionArea.add(lt.Enum.BetZoneOption.FIVE_KING_TONG_HUA_SHUN_4, 7);
            let n = [];
            this._mapBetOptionArea.forEach(((t, e) => {
                n.push(e)
            })), n.sort(((t, e) => t > e ? 1 : -1));
            let s = n.length;
            for (let t = 0; t < s; ++t) {
                let e = n[t],
                    o = this._betContentBg.node.getChildByName(z.StringTools.formatC("bet_area_%d", e)),
                    i = o.getChildByName("coin_content"),
                    s = S("image_touch/Image_touch_" + e, this._betContentBg.node);
                s.addOrGetComponent(E).opacity = 0, s.on(r.EventType.TOUCH_END, (t => {
                    this.betAreaClicked(e)
                })), this._betAreas.push(o), this._betCoinContents.push(i), this._coinNodeByArea.push([]);
                let a = S("text_self/text_self_bet_num_" + e, this._betContentBg.node),
                    d = S("text_total/text_total_bet_num_" + e, this._betContentBg.node);
                this._textSelfBetNum.push(a.getComponent(l)), this._textTotalBetNum.push(d.getComponent(l)), this._oriTextSelfBetNumPos.push(a.getPosition()), this._oriTextTotalBetNumPos.push(d.getPosition());
                let h = o.getChildByName("win_flag");
                this._sprBetAreaWinFlags.push(h.getComponent(T));
                let _ = S("fnt_odd/fnt_odd_" + e, this._betContentBg.node).getComponent(l),
                    u = S("fnt_odd/fnt_odd_en_" + e, this._betContentBg.node).getComponent(l);
                _.string = "", u.string = "", z.config.getCurrentLanguage() == z.Enum.LANGUAGE_TYPE.zh_CN || z.config.getCurrentLanguage() == z.Enum.LANGUAGE_TYPE.zh_TW ? (this._textBetAreaOdds.push(_), _.node.active = !0, u.node.active = !1) : (this._textBetAreaOdds.push(u), _.node.active = !1, u.node.active = !0), this._initWayOutInfoByAreaIdx(e)
            }
            this._initAreaLineData()
        }
        canTouchImgeArea(t, e) {
            return !0
        }
        betAreaClicked(t) {
            if (console.log("betAreaClicked, areaIdx: %d", t), lt.getVideoCowboyRoom().curState == lt.Enum.RoundState.BET && this._leftTime > 0 && this._clock_node.active) {
                if (this._curBetButtonIdx < 0) return void this.showCowboyToast(z.config.getStringDataCasino("Cowboy_select_bet_button_first_text"));
                z.videoCowboyNet.RequestBet(this.getBetOptionByAreaIdx(t), this.getCurBetLevel())
            } else console.log("betAreaClicked, cannot bet, curState: %d, left bet time: %d", lt.getVideoCowboyRoom().curState, this._leftTime)
        }
        updateBetArea(t) {
            let e = this.getAreaIdxByBetOption(t),
                o = lt.getVideoCowboyRoom().selfZoneBet.get(t);
            o && this.updateSelfBetAreaCoin(e, o);
            let i = lt.getVideoCowboyRoom().totalZoneBet.get(t);
            i && this.updateTotalBetAreaCoin(e, i)
        }
        updateSelfBetAreaCoin(t, e) {
            let o = this._textSelfBetNum[t];
            o && (o.node.setPosition(this._oriTextSelfBetNumPos[t]), o.string = e >= 100 ? this.getBetAreaCoinString(e) : "")
        }
        updateTotalBetAreaCoin(t, e) {
            let o = this._textTotalBetNum[t];
            o && (o.node.setPosition(this._oriTextTotalBetNumPos[t]), o.string = e >= 100 ? this.getBetAreaCoinString(e) : "")
        }
        updateAllBetAreas() {
            lt.getVideoCowboyRoom().selfZoneBet.forEach(function(t, e, o) {
                this.updateSelfBetAreaCoin(this.getAreaIdxByBetOption(t), e)
            }.bind(this)), lt.getVideoCowboyRoom().totalZoneBet.forEach(function(t, e, o) {
                let i = this.getAreaIdxByBetOption(t),
                    n = e;
                if (this.updateTotalBetAreaCoin(i, n), n > 0) {
                    let e = this._betCoinContents[i];
                    e.removeAllChildren();
                    e.getContentSize();
                    let o = this.getAllBetDetailAmounts(t);
                    for (let t = 0; t < o.length; t++) {
                        let e = this.createFlyCoin(i, o[t]),
                            n = this._betLineNode[i].convertToWorldSpaceAR(this.getOneAreaPos(i, this.isCircleCoin(o[t])));
                        n = e.node.parent.convertToNodeSpaceAR(n), e.node.setPosition(n)
                    }
                }
            }.bind(this))
        }
        initBetCountDown() {
            this._betCountDownBg = this._gameContent.getChildByName("bet_count_down_bg").getComponent(T), z.config.getCurrentLanguage() != z.Enum.LANGUAGE_TYPE.zh_CN && lt.loadSpriteTextureByPlist(this.language_PLIST, this._betCountDownBg, "bet_count_down"), this._textCountDown = this._betCountDownBg.node.getChildByName("text_count_down").getComponent(l), this._oriBetCountDownBgPos = this._betCountDownBg.node.getPosition()
        }
        hideBetCountDown() {
            this._betCountDownBg.node.active = !1, this._betCountDownBg.node.setPosition(this._oriBetCountDownBgPos), this.unschedule(this.updateBetTimer)
        }
        updateBetCoutDown() {
            this.hideBetCountDown(), lt.getVideoCowboyRoom().curState == lt.Enum.RoundState.BET && this._leftTime > 0 && (this._clock_num_txt.string = z.StringTools.formatC("%lld", this._leftTime), this.schedule(this.updateBetTimer, 1))
        }
        updateBetTimer(t) {
            lt.getVideoCowboyRoom().curState == lt.Enum.RoundState.BET && this._leftTime > 0 ? (this._clock_num_txt.string = z.StringTools.formatC("%lld", this._leftTime), this.playCowboyEffect(this.s_time_tick)) : this._clock_num_txt.string = "0"
        }
        hideGameTips() {
            this.unschedule(this.updateNextRoundTipsTimer)
        }
        showNextRoundTips() {
            lt.getVideoCowboyRoom().curState == lt.Enum.RoundState.WAIT_NEXT_ROUND && this._leftTime > 0 && (this.clearSceneAfterJieSuan(), this._waitForNextRoundAnim.active && this._leftTime <= this._waitForNextRoundOutTheshould && this.showWaitForNextRoundOutAnim())
        }
        updateNextRoundTipsTimer(t) {
            lt.getVideoCowboyRoom().curState == lt.Enum.RoundState.WAIT_NEXT_ROUND && this._leftTime > 0 ? this._waitForNextRoundAnim.active && this._leftTime <= this._waitForNextRoundOutTheshould && this.showWaitForNextRoundOutAnim() : this.hideGameTips()
        }
        showSendCardTips() {
            lt.getVideoCowboyRoom().curState, lt.Enum.RoundState.NEW_ROUND
        }
        showOpenCardTips() {
            lt.getVideoCowboyRoom().curState == lt.Enum.RoundState.WAIT_NEXT_ROUND && (this._leftTime, this._betWinFlagsAndFlyCoinsDuration, this._showNextRoundDuration)
        }
        initPlayersInfo() {
            this.self_panel = this._bottomPanel.getChildByName("self_panel"), this._textNickName = this.self_panel.getChildByName("text_nickname").getComponent(l), this._textCoin = this.self_panel.getChildByName("gold").getComponent(Tt), this._textCoin.updateVal("", pt.CNY), this._selfHeadBg = this.self_panel.getChildByName("img_head_box"), this._selfCoin = this.self_panel.getChildByName("own_coin").getComponent(T), this._leftPlayerPanel = this.node.getChildByName("leftPlayerPanel"), this._rightPlayerPanel = this.node.getChildByName("rightPlayerPanel");
            for (let t = 0; t < 4; t++) {
                {
                    let e = new rt,
                        o = this._leftPlayerPanel.getChildByName(z.StringTools.formatC("player_%d", t)).getComponent(T);
                    e.bg = o, e.textCoin = o.node.getChildByName("text_coin").getComponent(Tt), 0 == t && (e.nbFlag = o.node.getChildByName("nb_flag").getComponent(T), e.nbFlag.node.setSiblingIndex(11), e.nbFlag.node.getChildByName("nb_flag_desc").getComponent(l).string = z.StringTools.formatC(z.config.getStringDataCasino("Cowboy_fuhao_no_text"), 1)), this._otherPlayerHeads.push(e)
                } {
                    let e = new rt,
                        o = this._rightPlayerPanel.getChildByName(z.StringTools.formatC("player_%d", t)).getComponent(T);
                    e.bg = o, e.textCoin = o.node.getChildByName("text_coin").getComponent(Tt), 0 == t && (e.nbFlag = o.node.getChildByName("nb_flag").getComponent(T), e.nbFlag.node.setSiblingIndex(11), e.nbFlag.node.getChildByName("nb_flag_desc").getComponent(l).string = z.config.getStringDataCasino("Cowboy_shensuanzi_text")), this._otherPlayerHeads.push(e)
                }
            }
        }
        adaptiveScreen() {
            if (!this._bTrueFullScreen) {
                let t = this._bottomPanel.addOrGetComponent(b).height - 128;
                t > 0 ? (this._gameContent.setPosition(this._gameContent.position.x, this._gameContent.position.y + t, 0), this._gameContent.setScale(v(.95, .95, .95))) : this._bottomPanel.setContentSize(D(this._bottomPanel.addOrGetComponent(b).width, 128))
            }
            if (z.config.IS_IPHONEX_SCREEN && z.config.IS_FULLSCREEN) {
                let t = z.viewAdaptive.IPHONEX_OFFSETY - 50;
                this._leftPlayerPanel.setPosition(this._leftPlayerPanel.position.x + t, this._leftPlayerPanel.position.y), this._rightPlayerPanel.setPosition(this._rightPlayerPanel.position.x - t, this._rightPlayerPanel.position.y), this._btnMenu.node.setPosition(this._leftPlayerPanel.position.x, this._btnMenu.node.position.y), this._btnPlayerList.node.setPosition(this._rightPlayerPanel.position.x, this._btnPlayerList.node.position.y), this.self_panel.setPosition(this.self_panel.position.x + t, this.self_panel.position.y), this._rewardPanel.setPosition(this._btnMenu.node.position.x - .5 * this._btnMenu.node.addOrGetComponent(b).width + 133, this._rewardPanel.position.y, 0), this.btnInfo.node.setPosition(this.btnInfo.node.position.x - z.viewAdaptive.IPHONEX_OFFSETY, this.btnInfo.node.position.y)
            } else if (z.config.IS_WIDESCREEN) {
                if (z.config.WIDTH / z.config.HEIGHT >= 1.4) return;
                let t = 60;
                this._redCardPanel.setPosition(this._redCardPanel.position.x, t + this._redCardPanel.position.y), this._blueCardPanel.setPosition(this._blueCardPanel.position.x, t + this._blueCardPanel.position.y), this._publicCardPanel.setPosition(this._publicCardPanel.position.x, t + this._publicCardPanel.position.y), this._betCountDownBg.node.setPosition(this._betCountDownBg.node.position.x, t + this._betCountDownBg.node.position.y), this._oriBetCountDownBgPos = this._betCountDownBg.node.getPosition()
            }
        }
        adaptiveBetBtnPanel() {
            if (0 == this._vBottomBetBtns.length) {
                let t = z.StringTools.getArrayLength(this._betButtons);
                for (let e = 0; e < t; ++e) this._vBottomBetBtns.push(new Z.tGameNodeScale(this._betButtons[e].node, this._fBetBtnSrcScaleRate));
                this._vBottomBetBtns.push(new Z.tGameNodeScale(this._btnBetAuto.node, this._btnBetAuto.node.scale)), this._vBottomBetBtns.push(new Z.tGameNodeScale(this._btnBetClean.node, this._btnBetClean.node.scale)), this._vBottomBetBtns.push(new Z.tGameNodeScale(this._btn_redpacket_festival, this._btn_redpacket_festival.scale))
            }
            let t = this._btnPlayerList.node.position.x - this._btnPlayerList.node.getContentSize().width / 2;
            t -= this.self_panel.position.x + this.self_panel.getContentSize().width / 2, this._panel_betbtn.setContentSize(D(t, this._panel_betbtn.getContentSize().height)), this._panel_betbtn.setPosition(this.self_panel.position.x + t / 2 + this.self_panel.getContentSize().width / 2, this._panel_betbtn.position.y);
            let e = 0,
                o = 0,
                i = 0,
                n = z.StringTools.getArrayLength(this._vBottomBetBtns);
            for (let t = 0; t < n; ++t) {
                let o = this._vBottomBetBtns[t].node,
                    n = this._vBottomBetBtns[t].scale;
                o.active && (++i, e += o.getContentSize().width * n.x)
            }
            o = (this._panel_betbtn.getContentSize().width - e) / (i + 1);
            let s = .5 * -this._panel_betbtn.getContentSize().width;
            for (let t = 0; t < n; ++t) {
                let e = this._vBottomBetBtns[t].node,
                    i = this._vBottomBetBtns[t].scale;
                if (e.active) {
                    let t = e.getContentSize(),
                        n = s + o + t.width * i.x / 2,
                        a = this._panel_betbtn.convertToWorldSpaceAR(v(n, 0, 0));
                    a = e.getParent().convertToNodeSpaceAR(a), e.setPosition(a.x, e.position.y), s = a.x + t.width * i.x / 2
                }
            }
            if (this._btn_redpacket_festival_layer) {
                let t = this._btn_redpacket_festival.convertToWorldSpaceAR(u.ZERO);
                this._btn_redpacket_festival_layer.setPosition(this._btn_redpacket_festival_layer.parent.convertToNodeSpaceAR(t))
            }
            this._humanboyAdvancedAuto && (this._humanboyAdvancedAuto.getComponent(it).adaptAdvanceAutoTipsPos(this._btnBetAuto.node), this._humanboyAdvancedAuto.getComponent(it).adaptAdvanceAutoCountPos(this._btnBetAuto.node))
        }
        getPlayerCoinNodesByUid(t) {
            let e = [];
            t == this.getCowboyuserId() && e.push(this._selfCoin.node);
            let o = this._otherPlayerHeads.length;
            for (let i = 0; i < o; i++) this._otherPlayerHeads[i].uid == t && e.push(this._otherPlayerHeads[i].bg.node);
            return e
        }
        getPlayerHeadNodesByUid(t) {
            let e = [];
            t == this.getCowboyuserId() && e.push(this._selfHeadBg);
            for (let o = 0; o < this._otherPlayerHeads.length; o++) this._otherPlayerHeads[o].uid == t && e.push(this._otherPlayerHeads[o].bg.node);
            return e
        }
        updatePlayerCoin(t) {
            t == this.getCowboyuserId() && this.updateUserBalanceStatus(lt.getVideoCowboyRoom().selfPlayer.curCoin);
            for (let e = 0; e < this._otherPlayerHeads.length; e++)
                if (this._otherPlayerHeads[e].uid == t)
                    if (t == this.getCowboyuserId()) this._otherPlayerHeads[e].textCoin.string = this.getShortOwnCoinString(lt.getVideoCowboyRoom().selfPlayer.curCoin);
                    else {
                        let o = lt.getVideoCowboyRoom().getOtherPlayerByUid(t);
                        o && (this._otherPlayerHeads[e].textCoin.string = this.getShortOwnCoinString(o.curCoin))
                    }
        }
        getShortOwnCoinString(t, e = !0) {
            let o = z.StringTools.clientGoldByServer(t);
            if (!e) return z.StringTools.numberToString(o);
            const i = 1e6;
            return z.StringTools.numberToShowNumber(o) >= i ? z.StringTools.numberToString(z.StringTools.clientGoldByServer(t / i)) + z.config.getStringDataCasino("Cowboy_million_coin_short_text") : z.StringTools.numberToShowNumber(o) >= 1e3 ? z.StringTools.numberToString(z.StringTools.clientGoldByServer(t / 1e3)) + z.config.getStringDataCasino("Cowboy_coin_short_text") : z.StringTools.numberToString(o)
        }
        getBetAreaCoinString(t) {
            let e = z.StringTools.clientGoldByServer(t);
            return z.StringTools.numberToShowNumber(e) < 1e5 ? z.StringTools.numberToString(e) : z.StringTools.formatC("%lld", z.StringTools.numberToShowNumber(e) / 1e3) + z.config.getStringDataCasino("Cowboy_coin_short_text")
        }
        updateUserBalanceStatus(t) {
            z.dataHandler.getUserData().minigame_coin = t, this._textCoin.string = this.getShortOwnCoinString(t, z.appConfig.enableUserBalanceShortCoin())
        }
        updateSelfCoin() {
            this.updateUserBalanceStatus(lt.getVideoCowboyRoom().selfPlayer.curCoin)
        }
        updateSelfInfo() {
            z.StringTools.setShrinkString(this._textNickName.node, lt.getVideoCowboyRoom().selfPlayer.name, !0), this.updateUserBalanceStatus(lt.getVideoCowboyRoom().selfPlayer.curCoin);
            let t = z.dataHandler.getUserData().headUrl;
            j.setCircleSprite(this._selfHeadBg, t)
        }
        updateOtherPlayersInfo() {
            let t = this._otherPlayerHeads.length;
            for (let e = 0; e < t; e++) {
                let t = lt.getVideoCowboyRoom().otherPlayers;
                if (e < t.length) {
                    lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, this._otherPlayerHeads[e].bg, "player_bg"), this._otherPlayerHeads[e].nbFlag && (this._otherPlayerHeads[e].nbFlag.node.active = !0);
                    let o = t[e];
                    this._otherPlayerHeads[e].uid = o.uid, this._otherPlayerHeads[e].textCoin.string = this.getShortOwnCoinString(o.curCoin);
                    let i = this._otherPlayerHeads[e].bg,
                        n = i.node.getChildByName(this._HEAD_IMG_TAG);
                    n || (n = new r, n.addComponent(T), z.resMgr.setSpriteFrame(n, "zh_CN/game/cowboy/head/head_1"), n.name = this._HEAD_IMG_TAG, n.addOrGetComponent(b).setAnchorPoint(R(.5, .5)), n.setPosition(v(0, 21, 0)), i.node.addChild(n, 9)), n.active = !0;
                    let s = "";
                    o.head.length > 0 && (s = z.dataHandler.getUserData().getImageURL(o.head), j.setCircleSprite(n, s, o.plat, void 0, K.IRREGULAR), n.active = !1)
                } else {
                    let t = this.node.getChildByName("win_player_win_count_" + this._otherPlayerHeads[e].bg.node.uuid);
                    t && t.removeFromParent();
                    let o = this._otherPlayerHeads[e].bg.node.getChildByName(this._HEAD_IMG_TAG);
                    if (o) {
                        o.active = !1;
                        let t = j.getHeadNode(o);
                        t && (t.parent.active = !1)
                    }
                    this._otherPlayerHeads[e].uid = 0, lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, this._otherPlayerHeads[e].bg, "player_bg_2"), this._otherPlayerHeads[e].textCoin.string = "", this._otherPlayerHeads[e].nbFlag && (this._otherPlayerHeads[e].nbFlag.node.active = !1)
                }
            }
        }
        initGuide() {}
        initChart() {
            this._cowboyChart = g(this.cowboyChart);
            let t = S("Panel", this._cowboyChart),
                e = Et.instance.getWinSize(this.node);
            t.setPosition(e.width, t.getPosition().y), this._cowboyChart.setSiblingIndex(st.COWBOY_LOCAL_ZORDER_MENU_PANEL), this.node.addChild(this._cowboyChart), this._cowboyChart.active = !1
        }
        onGuideBgClick(t) {
            Lt.playButtonSound("button_click.mp3"), t.propagationStopped = !0
        }
        onGuideTopBgClick(t) {
            Lt.playButtonSound("button_click.mp3");
            z.tools.SaveStringByCCFile("cowboy_has_show_guide_2", "true"), z.videoCowboyNet.RequestTrend(), this._cowboyChart.active = !0, this.playCowboyEffect(this.s_button), this._recordDotsTemp = []
        }
        openShop(t) {
            z.dataHandler.getUserData().showTouristLimited("AddCoins_tourist_msg") || z.dataHandler.getUserData().showNDRPVerificationReviewPopup() || z.config.GET_CLIENT_TYPE() != z.Enum.ClientType.CowboyWeb && (z.appConfig.getGeneralConfig().multiWindowEnabled || (z.viewAdaptive.isselfchange = !0, z.viewAdaptive.videoCowboyRoomId = lt.getVideoCowboyRoom().u32RoomId), z.SHOP.RechargeClick(!0))
        }
        getChartPanel() {
            return this._rightChartPanel
        }
        initButtonEvents() {
            this._btnMenu = this.node.getChildByName("btnMenu").getComponent(d), this._btnMenu.node.setSiblingIndex(z.Enum.ZORDER_TYPE.ZORDER_5), this._btnMenu.node.on(d.EventType.CLICK, (t => {
                var e, o;
                Lt.playButtonSound("button_click.mp3"), this._humanboyMenu || (this._humanboyMenu = g(this.HumanboyMenu_prefab).getComponent(et), this.node.addChild(this._humanboyMenu.node, st.COWBOY_LOCAL_ZORDER_MENU_PANEL), this._humanboyMenu.getBtnExchange().node.on("click", (t => {
                    this.playCowboyEffect(this.s_button), this._humanboyMenu.hide(!1), z.dataHandler.getUserData().usdt <= 0 ? z.TT.showMsg(z.config.getStringDataCasino("USDTView_ex_coin_error_0_usdt"), z.Enum.ToastType.ToastTypeError) : this._humanboyExchange ? this._humanboyExchange.openView() : (this._humanboyExchange = g(this.humanboyExchange_prefab).getComponent(J), this.node.addChild(this._humanboyExchange.node, st.COWBOY_LOCAL_ZORDER_MENU_PANEL))
                })), this._humanboyMenu.getBtnRule().node.on("click", (t => {
                    var e;
                    (this.playCowboyEffect(this.s_button), this._humanboyMenu.hide(!1), null == this._cowboyRule) ? (this._cowboyRule = g(this.cowboyRule), this._cowboyRule.addOrGetComponent(b).setAnchorPoint(R(.5, .5)), this.node.addChild(this._cowboyRule), this._cowboyRule.setSiblingIndex(st.COWBOY_LOCAL_ZORDER_MENU_PANEL)) : null == (e = this._cowboyRule.getComponent(Bt)) || e.open()
                })), this._humanboyMenu.getBtnSoundSetting().node.on("click", (t => {
                    this.playCowboyEffect(this.s_button), this._humanboyMenu.hide(!1), null == this._cowboySetting ? (this._cowboySetting = g(this.cowboySetting), this._cowboySetting.addOrGetComponent(b).setAnchorPoint(R(.5, .5)), this._cowboySetting.setSiblingIndex(st.COWBOY_LOCAL_ZORDER_MENU_PANEL), this.node.addChild(this._cowboySetting)) : (this._cowboySetting.getComponent(Q).initSwitch(), this._cowboySetting.active = !0)
                })), this._humanboyMenu.getBtnAdvancedSetting().node.on("click", (t => {
                    this.playCowboyEffect(this.s_button), this._humanboyMenu.hide(!1), this._humanboyAdvancedSetting || (this._humanboyAdvancedSetting = g(this.humanboyAdvancedSetting_prefab), this.node.addChild(this._humanboyAdvancedSetting, st.COWBOY_LOCAL_ZORDER_MENU_PANEL)), this._humanboyAdvancedSetting.getComponent(ot).show()
                })), this._humanboyMenu.getBtnExit().node.on("click", (t => {
                    var e;
                    if (z.isDesktopBuild() && z.appConfig.getGeneralConfig().multiWindowEnabled) return this._humanboyMenu.hide(!1), void z.focusWindow(1);
                    this.callExitProcess(null == (e = this.gameSceneInstance) ? void 0 : e.gameData)
                }))), null == (e = this._humanboyMenu) || e.show(!0), null == (o = this._humanboyMenu) || o.setMenuPosition(v(this._btnMenu.node.position.x, this._btnMenu.node.position.y - this._btnMenu.node.getContentSize().height / 2, 0))
            }), this), this._btnPlayerList = this._bottomPanel.getChildByName("btnPlayerList").getComponent(d), this._btnPlayerList.node.on("click", (t => {
                z.videoCowboyNet.RequestPlayerList(), this.playCowboyEffect(this.s_button)
            })), this.self_panel = this._bottomPanel.getChildByName("self_panel"), this.self_panel.getChildByName("btn_shop_valid").on(r.EventType.TOUCH_END, (t => {
                this.openShop(null)
            })), this.btnInfo.node.on("click", (t => {
                this.showIntroPopup()
            })), this.btnInfo2.node.on("click", (t => {
                this.showIntroPopup()
            }))
        }
        initBetButtons() {
            this._betButtons = [], this._betButtonTexts = [], this._betButtonMasks = [];
            for (let t = 0; t < this._betButtonNum; t++) {
                let e = this._panel_betbtn.getChildByName("btn_bet_" + t).getComponent(d);
                this._betButtons.push(e), this._betButtonTexts.push(e.node.getChildByName("textBet")), this._betButtonMasks.push(e.node.getChildByName("imgMask").getComponent(T));
                let o = e.node.getChildByName("imgMask").getComponent(T);
                z.config.isSiyuType() || (o.srcBlendFactor, o.srcBlendFactor = Go.SRC_ALPHA), e.node.on("click", (e => {
                    console.log("GameCowboyScene btnBet %d clicked", t), this.betButtonSelected(t), this.playCowboyEffect(this.s_button)
                }), this)
            }
            this._humanboyAdvancedAuto || (this._humanboyAdvancedAuto = g(this.HumanboyAdvancedAuto_prefab), this.node.addChild(this._humanboyAdvancedAuto, st.COWBOY_LOCAL_ZORDER_ADVANCE_AUTO_SELECT)), this._btnBetAuto = this._panel_betbtn.getChildByName("btn_bet_auto").getComponent(d), this._btnBetAuto.node.on("click", (t => {
                switch (this.playCowboyEffect(this.s_button), this._eAutoBtnStyle) {
                    case Z.eGameboyAutoBtnStyle.GAB_STYLE_NORMAL:
                        z.videoCowboyNet.RequestAutoBet();
                        break;
                    case Z.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE: {
                        const t = this._humanboyAdvancedAuto.getComponent(it),
                            e = new ft(t);
                        e.adaptSelectPanelPos(this._btnBetAuto.node), e.showSelectPanel(!0)
                    }
                    break;
                    case Z.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING: {
                        let t = lt.getVideoCowboyRoom().iUsedAutoBetCount,
                            e = lt.getVideoCowboyRoom().iSelectAutoBetCount,
                            o = g(this.HumanboyDialog_prefab);
                        const i = o.getComponent(yt);
                        this.node.addChild(o, st.COWBOY_LOCAL_ZORDER_TOAST);
                        const n = o.getComponent(tt),
                            s = z.StringTools.formatC(z.config.getStringDataCasino("Cowboy_auto_bet_stop_tips"), e - t, e),
                            a = z.config.getStringDataCasino("CowBoy_btn_desc_stop_auto_bet"),
                            r = z.config.getStringDataCasino("CowBoy_btn_desc_resume_auto_bet"),
                            l = t => {
                                z.videoCowboyNet.ReqCancelAdvanceAutoBet()
                            },
                            d = t => {
                                null == i || i.close()
                            },
                            h = z.config.getStringDataCasino("MiniGame_AddAutoBet_Text"),
                            _ = t => {
                                this.showAutoAddBetList(t)
                            },
                            u = t => {
                                if (n) {
                                    let t = lt.getVideoCowboyRoom().iUsedAutoBetCount,
                                        e = lt.getVideoCowboyRoom().iSelectAutoBetCount;
                                    n.txt_content.string = z.StringTools.formatC(z.config.getStringDataCasino("Cowboy_auto_bet_stop_tips"), e - t, e)
                                }
                                lt.getVideoCowboyRoom().reachLimitBet && (null == i || i.blockCenterButton())
                            },
                            c = {
                                title: "Notice_Layer_notice_panel_message_button",
                                textContent: "Cowboy_auto_bet_stop_tips",
                                leftBtn: "CowBoy_btn_desc_stop_auto_bet",
                                rightBtn: "CowBoy_btn_desc_resume_auto_bet",
                                centerBtn: "MiniGame_AddAutoBet_Text",
                                gameID: z.Enum.GameId.CowBoy,
                                contentArgs: () => {
                                    const t = lt.getVideoCowboyRoom().iUsedAutoBetCount,
                                        e = lt.getVideoCowboyRoom().iSelectAutoBetCount;
                                    return [e - t, e]
                                }
                            },
                            C = bt.onChangeLanguageAutoBetPopup(n, i, c),
                            m = {
                                miniDialog: i,
                                stringContent: s,
                                stringLeftBtn: a,
                                stringRightBtn: r,
                                cbLeftBtn: l,
                                cbRightBtn: d,
                                isReachedMax: lt.getVideoCowboyRoom().reachLimitBet,
                                legacyDialog: n,
                                isShowBtnCenter: !0,
                                stringCenterButton: h,
                                cbCenterBtn: _,
                                onUpdateContent: u,
                                themeType: null,
                                onChangeLanguage: C
                            };
                        bt.showDialog(m)
                    }
                }
            })), this._btnBetClean = this._panel_betbtn.getChildByName("btn_bet_clean").getComponent(d), z.resMgr.loadButtonTextureByPlist(this.language_PLIST, this._btnBetClean.node, "clean_screen_normal", "clean_screen_normal", "clean_screen_normal", "clean_screen_gray"), this._btnBetClean.node.on("click", (t => {
                Lt.playButtonSound("button_click.mp3"), this.clearAllBetAreaCoins()
            })), this._labelBetAuto = this._btnBetAuto.getComponentInChildren(l), this._labelBetAuto && (this._autobetBtnColor = this._labelBetAuto.color), this._autoBetUsingNode = S("is_using", this._btnBetAuto.node), this._autoBetUsingNode || W("[VideoCowboyScene] btnBetAuto is missing child node")
        }
        initRedPackage() {
            this._btn_redpacket_festival = this._panel_betbtn.getChildByName("btn_redpacket_festival"), this._btn_redpacket_festival.getComponent(T).spriteFrame = null, this._btn_redpacket_festival.active = !1, this._btn_redpacket_festival_layer = g(this._btn_redpacket_festival), this.node.addChild(this._btn_redpacket_festival_layer, st.COWBOY_LOCAL_ZORDER_RED_PACKAGE);
            let t = v(0, 0, 0);
            this._btn_redpacket_festival.convertToWorldSpaceAR(u.ZERO, t), this._btn_redpacket_festival_layer.setPosition(this._btn_redpacket_festival_layer.parent.convertToNodeSpaceAR(t)), this.showLuckButton()
        }
        clearAllBetAreaCoins() {
            let t = z.StringTools.getArrayLength(this._betAreas);
            for (let e = 0; e < t; e++) this.hideAreaCoin(e, !1)
        }
        resetAllBetButtons() {
            let t = this._betButtons.length;
            for (let e = 0; e < t; e++) this._betButtons[e].node.setScale(this._fBetBtnSrcScaleRate, this._fBetBtnSrcScaleRate), this._betButtonTexts[e].active = !0, this._betButtonMasks[e].node.active = !1, this._betButtons[e].enabled = !0;
            this._curBetButtonIdx = -1
        }
        betButtonSelected(t, e) {
            e = 1 == e, this.resetAllBetButtons(), e || this._updateBetButtonState(), t < 0 || t > this._betButtonNum - 1 || (this._curBetButtonIdx = t, this._betButtons[t].node.setScale(this._fBetBtnTarScaleRate, this._fBetBtnTarScaleRate))
        }
        updateBetButtonText() {}
        _updateBetOddsDetail() {
            let t = lt.getVideoCowboyRoom().pkRoomParam.oddsDetail;
            for (let e = 0; e < t.length; e++) {
                let o = this.getAreaIdxByBetOption(t[e].option);
                this._textBetAreaOdds[o] && (this._textBetAreaOdds[o].string = z.StringTools.clientGoldByServer(t[e].odds) + z.config.getStringDataCasino("Cowboy_odds_text"))
            }
        }
        _updateBetButtonState() {
            let t = lt.getVideoCowboyRoom().vBetCoinOption,
                e = lt.getVideoCowboyRoom().selfPlayer.curCoin,
                o = z.StringTools.getArrayLength(t);
            for (let i = 0; i < o; ++i) {
                let o = z.StringTools.clientGoldByServer(t[i]);
                e >= t[i] ? (this._betButtons[i].interactable = !0, this._betButtons[i].enabled = !0, this.setCoinText(this._betButtonTexts[i], o, !0)) : (this._betButtons[i].interactable = !1, this._betButtons[i].enabled = !1, this.setCoinText(this._betButtonTexts[i], o, !1))
            }
            let i = lt.getVideoCowboyRoom().curState == lt.Enum.RoundState.BET && this._leftTime > 0,
                n = z.StringTools.getArrayLength(this._betButtons);
            for (let t = 0; t < n; ++t) this._betButtonMasks[t].node.active = !i, this._betButtonMasks[t].enabled = !0, this._betButtons[t].enabled = i;
            this._updateAutoBetBtnStatus(), this._updateCleanBtnStatus()
        }
        updatBetButtonByCurCoin() {}
        enableAutoBetButton(t) {
            this._btnBetAuto.enabled = t, this._btnBetAuto.interactable = t, this.setBetLabelEnable(this._labelBetAuto, t)
        }
        setBetLabelEnable(t, e) {
            e ? (t.node.addOrGetComponent(E).opacity = 255, t.color = this._autobetBtnColor) : (t.node.addOrGetComponent(E).opacity = 100, t.color = new G(G.WHITE))
        }
        _updateAutoBetBtnStatus() {
            switch (this._eAutoBtnStyle) {
                case Z.eGameboyAutoBtnStyle.GAB_STYLE_NORMAL:
                    lt.getVideoCowboyRoom().curState == lt.Enum.RoundState.BET && this._leftTime > 0 ? lt.getVideoCowboyRoom().hasBetInCurRound ? this.enableAutoBetButton(!1) : lt.getVideoCowboyRoom().canAuto ? this.enableAutoBetButton(!0) : this.enableAutoBetButton(!1) : this.enableAutoBetButton(!1);
                    break;
                case Z.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE:
                    lt.getVideoCowboyRoom().hasBetInCurRound || lt.getVideoCowboyRoom().canAuto ? this.enableAutoBetButton(!0) : this.enableAutoBetButton(!1);
                    break;
                case Z.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING:
                    this.enableAutoBetButton(!0)
            }
        }
        _updateCleanBtnStatus() {
            let t = !1;
            lt.getVideoCowboyRoom().curState == X.BET && this._leftTime > 0 && (t = !0), this._btnBetClean.interactable = t
        }
        _updateBetAmountLevel() {
            let t = lt.getVideoCowboyRoom().vBetCoinOption,
                e = z.StringTools.getArrayLength(t);
            for (let o = 0; o < e; ++o)
                if (o < this._betButtonNum) {
                    let e = z.StringTools.clientGoldByServer(t[o]);
                    e < lt.getVideoCowboyRoom().llCoinUICritical ? (lt.loadButtonTextureByPlist(this.game_dznz_PLIST, this._betButtons[o].node, "bet_coin_clicked", "bet_coin_clicked", "bet_coin_clicked", "bet_coin_disabled_big"), lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, this._betButtonMasks[o], "bet_coin_disable_mask_big"), this._betButtonMasks[o].node.scale = v(1.05, 1.05, 1.05)) : (lt.loadButtonTextureByPlist(this.game_dznz_PLIST, this._betButtons[o].node, "bet_block_clicked", "bet_block_clicked", "bet_block_clicked", "bet_block_disabled_big"), lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, this._betButtonMasks[o], "bet_block_disable_mask_big"), this._betButtonMasks[o].node.scale = v(1, 1, 1)), this.setCoinText(this._betButtonTexts[o], e, !0)
                } else console.log("error!! HumanboyMainView._updateBetAmountLevel vBetCoinOption must be %d, size: %d", this._betButtonNum, e);
            switch (lt.getVideoCowboyRoom().eAutoLevel) {
                case xt.cowboy_proto.AutoBetLevel.Level_Normal:
                    this._setAutoBetBtnStytle(Z.eGameboyAutoBtnStyle.GAB_STYLE_NORMAL);
                    break;
                case xt.cowboy_proto.AutoBetLevel.Level_Advance:
                    lt.getVideoCowboyRoom().iSelectAutoBetCount > 0 ? this._setAutoBetBtnStytle(Z.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING) : this._setAutoBetBtnStytle(Z.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE)
            }
            this.adaptiveBetBtnPanel()
        }
        _setAutoBetBtnStytle(t) {
            switch (this._humanboyAdvancedAuto && (this._humanboyAdvancedAuto.getComponent(it).hideAdvanceAutoTips(), this._humanboyAdvancedAuto.getComponent(it).hideAdvanceAutoCount(), this._humanboyAdvancedAuto.getComponent(it).hideSelectPanel(!1)), this._eAutoBtnStyle = t, this._eAutoBtnStyle) {
                case Z.eGameboyAutoBtnStyle.GAB_STYLE_NONE:
                    break;
                case Z.eGameboyAutoBtnStyle.GAB_STYLE_NORMAL:
                    lt.loadButtonTextureByPlist(this.language_PLIST, this._btnBetAuto.node, "autobet_normal", "autobet_normal", "autobet_normal", "autobet_gray", this.mappingPlist), this._autoBetUsingNode && (this._autoBetUsingNode.active = !1);
                    break;
                case Z.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE:
                    lt.loadButtonTextureByPlist(this.language_PLIST, this._btnBetAuto.node, "autobet_block_normal", "autobet_block_normal", "autobet_block_normal", "autobet_block_gray", this.mappingPlist), this._autoBetUsingNode && (this._autoBetUsingNode.active = !1);
                    break;
                case Z.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING:
                    lt.loadButtonTextureByPlist(this.language_PLIST, this._btnBetAuto.node, "autobet_block_normal", "autobet_block_normal", "autobet_block_normal", "autobet_block_gray", this.mappingPlist), this._autoBetUsingNode && (this._autoBetUsingNode.active = !0), this._humanboyAdvancedAuto && (this._humanboyAdvancedAuto.getComponent(it).adaptAdvanceAutoCountPos(this._btnBetAuto.node), this._humanboyAdvancedAuto.getComponent(it).showAdvanceAutoCount())
            }
            let e = this._btnBetAuto.getComponent(T);
            e.type = T.Type.SIMPLE, e.sizeMode = T.SizeMode.CUSTOM
        }
        _getAutoBetBtnStytle() {
            return this._eAutoBtnStyle
        }
        _checkAdvanceAutoReq() {
            lt.getVideoCowboyRoom().curState == lt.Enum.RoundState.BET && this._getAutoBetBtnStytle() === Z.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING && (this._humanboyAdvancedAuto && this._humanboyAdvancedAuto.getComponent(it).hideAdvanceAutoTips(), lt.getVideoCowboyRoom().iUsedAutoBetCount < lt.getVideoCowboyRoom().iSelectAutoBetCount && z.videoCowboyNet.reqAdvanceAutoBet())
        }
        clearBetArea(t) {
            z.StringTools.getArrayLength(this._sprBetAreaWinFlags) > t && (this._sprBetAreaWinFlags[t].node.active = !1), this._betCoinContents[t].removeAllChildren(), console.log("clearBetArea-.清理areaIndex = " + t), this.hideAreaCoin(t, !1), this.updateSelfBetAreaCoin(t, 0), this.updateTotalBetAreaCoin(t, 0)
        }
        clearAllBetArea() {
            let t = this._betAreas.length;
            for (let e = 0; e < t; e++) this.clearBetArea(e)
        }
        getAreaIdxByBetOption(t) {
            return this._mapBetOptionArea.get(t)
        }
        getBetOptionByAreaIdx(t) {
            let e = -1;
            return this._mapBetOptionArea.forEach((function(o, i, n) {
                i == t && (e = o)
            })), e < 0 && console.log("error!! getOptionByAreaIdx -1"), e
        }
        getCurBetLevel() {
            if (this._curBetButtonIdx < 0) return 0;
            return lt.getVideoCowboyRoom().vBetCoinOption[this._curBetButtonIdx]
        }
        initHistoryDots() {
            this._btnZouShi = this._rightChartPanel.getChildByName("btnZouShi").getComponent(d), this._btnZouShi.node.active = !1;
            let t = this._rightChartPanel.getChildByName("panel1"),
                e = this._rightChartPanel.getChildByName("panel2");
            this._chartBg = this._rightChartPanel.getChildByName("image_bg");
            let o = this._rightChartPanel.getChildByName("panelRecord");
            if (z.resMgr.adaptWidget(this._rightChartPanel, !0), z.config.IS_IPHONEX_SCREEN) {
                this._chartBg.addOrGetComponent(b).setAnchorPoint(R(1, 0));
                let i = this._rightChartPanel.getContentSize();
                const n = i.width;
                this._rightChartPanel.setContentSize(D(n + z.viewAdaptive.IPHONEX_OFFSETY, i.height)), this._chartBg.setContentSize(D(n + z.viewAdaptive.IPHONEX_OFFSETY, i.height)), o.setPosition(o.position.x - z.viewAdaptive.IPHONEX_OFFSETY, o.position.y, 0), t.setPosition(t.position.x - z.viewAdaptive.IPHONEX_OFFSETY, t.position.y, 0), e.setContentSize(D(e.getContentSize().width + z.viewAdaptive.IPHONEX_OFFSETY, e.getContentSize().height))
            }
            t.on(r.EventType.TOUCH_END, (t => {
                z.videoCowboyNet.RequestTrend(), this._cowboyChart.active = !0, this.playCowboyEffect(this.s_button)
            })), e.on(r.EventType.TOUCH_END, (t => {
                z.videoCowboyNet.RequestTrend(), this._cowboyChart.active = !0, this.playCowboyEffect(this.s_button)
            }));
            for (let t = 0; t < this._recordNum + 1; t++) {
                this._recordDots.push(o.getChildByName(z.StringTools.formatC("recordDot%d", t)).getComponent(T));
                let e = v(this._recordDots[t].node.getPosition());
                this._oriRecordDotsPos.push(e)
            }
            this._lastRecordDotWorldPos = o.convertToWorldSpaceAR(this._recordDots[this._recordNum - 1].node.getPosition()), this._btnZouShi.node.on("click", (t => {
                z.videoCowboyNet.RequestTrend(), this._cowboyChart.active = !0, this.playCowboyEffect(this.s_button)
            }), this), this._topBg = this.node.getChildByName("top_bg").getComponent(T)
        }
        updateDotState() {
            this.hideHistoryMoveAnim();
            let t = lt.getVideoCowboyRoom().historyResults.length;
            if (1 == t) {
                let t = this._recordNum - 1;
                this._recordDots[t].node.active = !0
            }
            if (t > 2)
                for (let e = 0; e < this._recordNum; e++) {
                    let o = t - e - 1,
                        i = this._recordNum - e - 1;
                    this._recordDots[i].node.active = !0, this._recordDots[i].node.active = !(o <= 0)
                }
        }
        updateHistoryResults() {
            this.hideHistoryMoveAnim();
            let t = lt.getVideoCowboyRoom().historyResults.length;
            for (let e = 0; e < this._recordNum; e++) {
                let o = t - e - 1,
                    i = this._recordNum - e - 1;
                if (this._recordDots[i].node.active = !0, this._recordDotsTemp.length > 0 && (this._recordDotsTemp[i].node.active = !0), o < 0) lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, this._recordDots[i], "record_draw"), this._recordDots[i].node.active = !1, this._recordDotsTemp.length > 0 && (lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, this._recordDotsTemp[i], "record_draw"), this._recordDotsTemp[i].node.active = !1);
                else {
                    let t = lt.getVideoCowboyRoom().historyResults[o],
                        e = "record_draw";
                    t == lt.Enum.BetZoneOption.RED_WIN ? e = "record_red" : t == lt.Enum.BetZoneOption.BLUE_WIN && (e = "record_blue"), lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, this._recordDots[i], e), this._recordDots[i].node.active = !0, this._recordDotsTemp.length > 0 && (lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, this._recordDotsTemp[i], e), this._recordDotsTemp[i].node.active = !0)
                }
            }
        }
        updateHistoryResultsPrevious() {
            let t = lt.getVideoCowboyRoom().removeCurrentHistoryResult(); - 1 != t && (this.updateHistoryResults(), lt.getVideoCowboyRoom().addCurrentHistoryResult(t))
        }
        showHistoryMoveAnim() {
            if (lt.getVideoCowboyRoom().historyResults.length > 0) {
                let t = lt.getVideoCowboyRoom().historyResults[lt.getVideoCowboyRoom().historyResults.length - 1],
                    e = "record_draw";
                t == lt.Enum.BetZoneOption.RED_WIN ? e = "record_red" : t == lt.Enum.BetZoneOption.BLUE_WIN && (e = "record_blue");
                let o = z.StringTools.getArrayLength(this._recordDots);
                console.log("----. len = " + o), lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, this._recordDots[o - 1], e);
                let i = v(this._oriRecordDotsPos[0].x - this._oriRecordDotsPos[1].x, this._oriRecordDotsPos[0].y - this._oriRecordDotsPos[1].y, 0);
                this.updateDotState();
                lt.getVideoCowboyRoom().historyResults.length;
                for (let t = 0; t < o; t++)
                    if (console.log("----2222222----. len = " + o + ", i = " + t), 1 == this._recordDots[t].node.active) {
                        1 == lt.getVideoCowboyRoom().historyResults.length ? this.updateHistoryResults() : Rt.moveBy(this._recordDots[t].node, .3, i).call((() => {
                            z.StringTools.getArrayLength(this._recordDots);
                            console.log("--------. len = " + o + ", i = " + t), t == o - 2 && this.updateHistoryResults()
                        })).start()
                    } z.MessageCenter.send("cowboy_start_history_move_anim"), lt.getVideoCowboyRoom().isOpen && z.videoCowboyNet.RequestTrend()
            }
        }
        hideHistoryMoveAnim() {
            let t = z.StringTools.getArrayLength(this._recordDots);
            for (let e = 0; e < t; e++) Rt.stopAll(this._recordDots[e].node), this._recordDots[e].node.setPosition(this._oriRecordDotsPos[e])
        }
        addEvent() {
            this._isAddEvent || (this._isAddEvent = !0, z.MessageCenter.register("on_cowboy_game_round_end_notify", this.OnGameRoundEndNotify.bind(this), this.node), z.MessageCenter.register("on_cowboy_deal_notify", this.OnDealNotify.bind(this), this.node), z.MessageCenter.register("on_cowboy_start_bet_notify", this.OnStartBetNotify.bind(this), this.node), z.MessageCenter.register("on_cowboy_bet_notify", this.OnBetNotify.bind(this), this.node), z.MessageCenter.register("on_cowboy_auto_bet_notify", this.OnAutoBetNotify.bind(this), this.node), z.MessageCenter.register("on_cowboy_auto_bet_notify_handle_over", this.OnAutoBetNotifyHandleOver.bind(this), this.node), z.MessageCenter.register("on_cowboy_leave_room_succ", this.OnLeaveRoomSucc.bind(this), this.node), z.MessageCenter.register("on_cowboy_auto_bet_succ", this.OnAutoBetSucc.bind(this), this.node), z.MessageCenter.register("on_cowboy_room_param_change_notify", this.OnRoomParamChangeNotify.bind(this), this.node), z.MessageCenter.register("on_cowboy_server_error", this.OnServerError.bind(this), this.node), z.MessageCenter.register("on_cowboy_kick_notify", this.OnKickNotify.bind(this), this.node), z.MessageCenter.register("on_cowboy_join_room_failed", this.OnJoinRoomFailed.bind(this), this.node), z.MessageCenter.register("showShopPanel", this.openShop.bind(this), this.node), z.MessageCenter.register("showLuckButton", this.onShowLuckButton.bind(this), this.node), z.MessageCenter.register("turntableResultNotice", this.onTurntableResultNotice.bind(this), this.node), z.MessageCenter.register("update_gold", this._onMsgUpdateWorldServerGold.bind(this), this.node), z.MessageCenter.register("on_cowboy_bet_amount_level_change", this._onMsgBetAmountLevelChange.bind(this), this.node), z.MessageCenter.register("on_cowboy_advance_autobet_set", this._onMsgAdvanceAutobetSet.bind(this), this.node), z.MessageCenter.register("on_cowboy_advance_autobet", this._onMsgAdvanceAutobet.bind(this), this.node), z.MessageCenter.register("on_cowboy_advance_autobet_cancel", this._onMsgAdvanceAutobetCancel.bind(this), this.node), z.MessageCenter.register("on_advance_autobet_add", this.onMsgAdvanceAutobetAdd.bind(this), this.node), z.MessageCenter.register("on_cowboy_advance_autobet_limit_reached", this._onMsgAdvanceAutobetLimitReached.bind(this), this.node), z.MessageCenter.register(z.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this.node), z.MessageCenter.register("onClickedExchangeRate", this.showIntroPopup.bind(this), this.node))
        }
        OnTrendUpdate() {
            this._cowboyChart.getComponent(ht).setData(), this._cowboyChart.getComponent(ht).moveChart()
        }
        OnPlayerListUpdate() {
            null == this._cowboyList ? (this._cowboyList = g(this.cowboyList), this.node.addChild(this._cowboyList), this._cowboyList.setSiblingIndex(st.COWBOY_LOCAL_ZORDER_TOAST), this._cowboyList.getComponent($).setVideoCowboyData(), this._cowboyList.getComponent($).displayCell(0)) : (this._cowboyList.active = !0, this._cowboyList.getComponent($).setVideoCowboyData(), this._cowboyList.getComponent($).displayCell(-1))
        }
        OnGameDataSynNotify(t) {
            if (t == z.Enum.GameId.VideoCowboy) {
                if (console.error("------------------------------------OnGameDataSynNotify--------------------------."), lt.getVideoCowboyRoom().showTheNewestTrend = !0, this._vCoinOptimizationDeque.clear(), this.clearRound(), this.addEvent(), this.resetLeftTimer(), this._updateBetAmountLevel(), this.updatBetButtonByCurCoin(), this._updateBetButtonState(), this._updateBetOddsDetail(), this.updateSelfInfo(), this.updateOtherPlayersInfo(), this.updateHistoryResults(), this.updateAllPlayerWinCount(), lt.getVideoCowboyRoom().curState == lt.Enum.RoundState.GAME_PENDING);
                else if (lt.getVideoCowboyRoom().curState == lt.Enum.RoundState.NEW_ROUND) this.updateCards(), this._updateAllWayOut();
                else if (lt.getVideoCowboyRoom().curState == lt.Enum.RoundState.BET) this.updateCards(), this._updateAllWayOut(), this.updateAllBetAreas(), this.updateBetCoutDown(), this._leftTime > 0 ? (this.showFightBeginAnim(), lt.getVideoCowboyRoom().canAdvanceAuto && this._checkAdvanceAutoReq()) : this.playKaiPai(null);
                else if (lt.getVideoCowboyRoom().curState == Dt.video_cowboy_proto.RoundState.SKIP_ROUND) this.updateCards(), this._updateAllWayOut();
                else if (lt.getVideoCowboyRoom().curState == Dt.video_cowboy_proto.RoundState.SHOW_CARD) this.updateCards(), this._updateAllWayOut(), this.updateAllBetAreas(), this.updateBetCoutDown(), z.MessageCenter.send("videoCowboy_ShowCardNotify", "0");
                else if (lt.getVideoCowboyRoom().curState == lt.Enum.RoundState.WAIT_NEXT_ROUND) {
                    let t = this.isResultSpecialCardType(),
                        e = t ? this._specialCardTypeDuration : 0;
                    this.showWaitForNextRoundInAnim(), z.MessageCenter.send("videoCowboy_ShowCardNotify", "0"), this._openCardLayer.updateCardType(), this._openCardLayer.updateWinCards(), this._leftTime > this._showNextRoundDuration + this._betWinFlagsAndFlyCoinsDuration + e + this._hideLoseBetCoinsDuration + this._showPublicCardsDuration + this._showHandCardsDuration + this._fightEndDuration + this._betCountDownEndDuration ? (lt.getVideoCowboyRoom().showTheNewestTrend = !1, this.updateHistoryResultsPrevious(), this.updateAllCardsBeforeSettle(), this.updatePlayerCoinBeforeSettle(), this.updateAllBetAreas(), this.showHandCardsAnim(), this.playJieSuan(), console.log("OnGameDataSynNotify, enter this.showBetCoutDownEndAnim")) : this._leftTime > this._showNextRoundDuration + this._betWinFlagsAndFlyCoinsDuration + e + this._hideLoseBetCoinsDuration + this._showPublicCardsDuration + this._showHandCardsDuration + this._fightEndDuration ? (lt.getVideoCowboyRoom().showTheNewestTrend = !1, this.updateHistoryResultsPrevious(), this.updateAllCardsBeforeSettle(), this.updatePlayerCoinBeforeSettle(), this.updateAllBetAreas(), this.playJieSuan(), console.log("OnGameDataSynNotify, enter FightEnd")) : this._leftTime > this._showNextRoundDuration + this._betWinFlagsAndFlyCoinsDuration + e + this._hideLoseBetCoinsDuration + this._showPublicCardsDuration + this._showHandCardsDuration ? (lt.getVideoCowboyRoom().showTheNewestTrend = !1, this.updateHistoryResultsPrevious(), this.updateAllCardsBeforeSettle(), this.updatePlayerCoinBeforeSettle(), this.updateAllBetAreas(), this.showHandCardsAnim(), this.playJieSuan(), console.log("OnGameDataSynNotify, enter showHandCardsAnim")) : this._leftTime > this._showNextRoundDuration + this._betWinFlagsAndFlyCoinsDuration + e + this._hideLoseBetCoinsDuration + this._showPublicCardsDuration ? (lt.getVideoCowboyRoom().showTheNewestTrend = !1, this.updateHistoryResultsPrevious(), this.updateAllCardsExceptPublicBeforeSettle(), this.updatePlayerCoinBeforeSettle(), this.updateAllBetAreas(), this.showHandCardsAnim(), this.playJieSuan(), console.log("OnGameDataSynNotify, enter showPublicCardsAnim")) : this._leftTime > this._showNextRoundDuration + this._betWinFlagsAndFlyCoinsDuration + e + this._hideLoseBetCoinsDuration ? (lt.getVideoCowboyRoom().showTheNewestTrend = !0, this.updateHistoryResultsPrevious(), this.updatePlayerCoinBeforeSettle(), this.updateAllBetAreas(), this.updateCards(), this.showHideLoseBetCoinsAnim(), this.showCowboyLoseAnim(), this.playJieSuan(), console.log("OnGameDataSynNotify, enter showHideLoseBetCoinsAnim")) : this._leftTime > this._showNextRoundDuration + this._betWinFlagsAndFlyCoinsDuration + e ? (lt.getVideoCowboyRoom().showTheNewestTrend = !0, this.updateHistoryResultsPrevious(), this.updatePlayerCoinBeforeSettle(), this.updateAllBetAreas(), this.updateCards(), this.clearLoseBetCoins(), this.showCowboyLoseAnim(), this.playJieSuan(), t ? this.showSpecialCardTypeAnim() : this.showBetWinFlagsAndFlyCoinsAnim(), console.log("OnGameDataSynNotify, enter showSpecialCardTypeAnim/showBetWinFlagsAndFlyCoinsAnim")) : this._leftTime > this._showNextRoundDuration + this._betWinFlagsAndFlyCoinsDuration ? (lt.getVideoCowboyRoom().showTheNewestTrend = !0, this.updateAllBetAreas(), this.updateCards(), this.clearLoseBetCoins(), this.showCowboyLoseAnim(), this.playJieSuan(), t ? this.showSpecialCardTypeAnim(!0, this._leftTime - this._showNextRoundDuration - this._betWinFlagsAndFlyCoinsDuration) : this.showBetWinFlagsAndFlyCoinsAnim(), console.log("OnGameDataSynNotify, enter showSpecialCardTypeAnim/showBetWinFlagsAndFlyCoinsAnim, left time")) : this._leftTime > this._showNextRoundDuration ? (lt.getVideoCowboyRoom().showTheNewestTrend = !0, this.updateWinFlags(), this.showNextRoundTips(), console.log("OnGameDataSynNotify, enter showSpecialCardTypeAnim left time")) : (lt.getVideoCowboyRoom().showTheNewestTrend = !0, this.updateWinFlags(), this.showNextRoundTips(), console.log("OnGameDataSynNotify, enter showNextRoundTips")), this._leftTime > this._showNextRoundDuration + this._betWinFlagsAndFlyCoinsDuration ? this._updateAllWayOut(1) : this._leftTime > this._showNextRoundDuration ? (this._updateAllWayOut(1), this._showAllWayOutAnim()) : this._updateAllWayOut(), this.hideKaiPaiSprite()
                }
                z.appConfig.getGeneralConfig().multiWindowEnabled ? this.schedule((() => {
                    this._miniGameLoadingScreen.active = !1
                }), 0, 0, 1) : (z.SwitchLoadingView.hide(), z.SwitchLoadingView.switchToPotrait())
            }
        }
        OnGameRoundEndNotify() {
            this.hideKaiPaiSprite(), this.playJieSuan(), lt.getVideoCowboyRoom().showTheNewestTrend = !1, this.resetLeftTimer(), this.showHandCardsAnim(), this._openCardLayer.updateCardType(), this._openCardLayer.updateWinCards()
        }
        OnDealNotify() {
            lt.getVideoCowboyRoom().showTheNewestTrend = !0, this._openCardLayer && this._openCardLayer.setMode(!0), this.clearRound(), this.resetLeftTimer(), this.updatBetButtonByCurCoin(), this._updateBetButtonState(), this.updateSelfCoin(), this.updateOtherPlayersInfo(), this.showSendCardTips(), this.updateAllPlayerWinCount(), this.handleCoin(), this._updateAllWayOut(), this.showRoundStartAnim()
        }
        OnStartBetNotify() {
            lt.getVideoCowboyRoom().showTheNewestTrend = !0, this.resetLeftTimer(), this.updatBetButtonByCurCoin(), this.hideGameTips(), this.showFightBeginAnim()
        }
        OnBetNotify() {
            this._updateAutoBetBtnStatus(), lt.getVideoCowboyRoom().curPlayerBet.uid == this.getCowboyuserId() && this._updateBetButtonState();
            let t = lt.getVideoCowboyRoom().curPlayerBet,
                e = new q;
            e.betAmount = t.betAmount, e.betOption = t.betOption, e.uid = t.uid, this._vCoinOptimizationDeque.push_back(e)
        }
        OnAutoBetNotify() {
            let t = lt.getVideoCowboyRoom().curPlayerBet,
                e = new q;
            e.betAmount = t.betAmount, e.betOption = t.betOption, e.uid = t.uid, this._vCoinOptimizationDeque.push_back(e)
        }
        OnAutoBetNotifyHandleOver(t) {
            t > 1 ? this.playCowboyEffect(this.s_betin_many) : this.playCowboyEffect(this.s_betin), this._updateBetButtonState()
        }
        OnLeaveRoomSucc(t) {
            z.appConfig.isLandscapeLayout || z.SwitchLoadingView.show(z.config.getStringData("Loading")), this.cleanData(), z.appConfig.getGeneralConfig().multiWindowEnabled, z.roomManager.onResponse_LeaveRoom(t.data, t.gameId, t.roomId)
        }
        OnAutoBetSucc() {
            this._updateBetButtonState()
        }
        _onMsgBetAmountLevelChange(t) {
            this._updateBetAmountLevel(), this._updateBetButtonState()
        }
        _onMsgAdvanceAutobetSet(t) {
            this._setAutoBetBtnStytle(Z.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING), !lt.getVideoCowboyRoom().hasBetInCurRound && lt.getVideoCowboyRoom().canAuto && this._checkAdvanceAutoReq()
        }
        _onMsgAdvanceAutobet(t) {
            let e = t;
            switch (e) {
                case lt.Enum.ErrorCode.OK:
                    break;
                case lt.Enum.ErrorCode.AUTO_BET_EXCEED_LIMIT:
                    this._humanboyAdvancedAuto && (this._humanboyAdvancedAuto.getComponent(it).adaptAdvanceAutoTipsPos(this._btnBetAuto.node), this._humanboyAdvancedAuto.getComponent(it).showAdvanceAutoTips(z.config.getStringDataCasino(z.StringTools.formatC("Cowboy_ServerErrorCode%d", e))));
                    break;
                case lt.Enum.ErrorCode.AUTO_BET_NO_MONEY: {
                    let t = "cowboy_dialog_recharge";
                    if (!this.node.getChildByName(t)) {
                        let o = g(this.HumanboyDialog_prefab);
                        o.name = t;
                        const i = o.getComponent(yt),
                            n = o.getComponent(tt);
                        this.node.addChild(o, st.COWBOY_LOCAL_ZORDER_TOAST);
                        const s = z.config.getStringDataCasino(z.StringTools.formatC("Cowboy_ServerErrorCode%d", e)),
                            a = z.config.getStringDataCasino("CowBoy_btn_desc_auto_cancel"),
                            r = z.config.getStringDataCasino("CowBoy_btn_desc_auto_recharge"),
                            l = t => {
                                z.videoCowboyNet.ReqCancelAdvanceAutoBet()
                            },
                            d = t => {
                                this.openShop(null)
                            },
                            h = {
                                title: "Notice_Layer_notice_panel_message_button",
                                textContent: z.StringTools.formatC("Cowboy_ServerErrorCode%d", e),
                                leftBtn: "CowBoy_btn_desc_auto_cancel",
                                rightBtn: "CowBoy_btn_desc_auto_recharge",
                                centerBtn: "",
                                gameID: z.Enum.GameId.CowBoy
                            },
                            _ = bt.onChangeLanguageAutoBetPopup(n, i, h),
                            u = {
                                miniDialog: i,
                                stringContent: s,
                                stringLeftBtn: a,
                                stringRightBtn: r,
                                cbLeftBtn: l,
                                cbRightBtn: d,
                                isReachedMax: !1,
                                legacyDialog: n,
                                isShowBtnCenter: !1,
                                themeType: St.TwoButton_NoMoney_Style,
                                onChangeLanguage: _
                            };
                        bt.showDialog(u)
                    }
                }
                break;
                default:
                    z.MessageCenter.send("on_cowboy_server_error", e)
            }
            this._humanboyAdvancedAuto && (this._humanboyAdvancedAuto.getComponent(it).adaptAdvanceAutoCountPos(this._btnBetAuto.node), this._humanboyAdvancedAuto.getComponent(it).showAdvanceAutoCount())
        }
        _onMsgAdvanceAutobetCancel(t) {
            this._updateBetAmountLevel(), this._updateBetButtonState()
        }
        OnRoomParamChangeNotify() {
            this._updateBetAmountLevel(), this._updateBetButtonState()
        }
        OnServerError(t) {
            let e = t,
                o = z.StringTools.formatC("Cowboy_ServerErrorCode%d", e);
            if (console.log("%s", o), e == lt.Enum.ErrorCode.BET_TOO_SMALL) {
                let t = z.StringTools.formatC("%s", z.config.getStringDataCasino(o)),
                    e = z.StringTools.clientGoldByServer(lt.getVideoCowboyRoom().pkRoomParam.smallBet);
                this.showCowboyToast(z.StringTools.formatC(t, z.StringTools.numberToString(e)))
            } else e == lt.Enum.ErrorCode.NO_BET || this.showCowboyToast(z.StringTools.formatC("%s", z.config.getStringDataCasino(o)))
        }
        OnKickNotify(t) {
            let e = t;
            e == lt.Enum.Kick.IDLE_LONG_TIME ? this.backToMainScene(z.StringTools.formatC("%s", z.config.getStringDataCasino("Cowboy_server_kick_long_time_text"))) : e == lt.Enum.Kick.Stop_World && this.backToMainScene(z.StringTools.formatC("%s", z.config.getStringDataCasino("Cowboy_server_kick_stop_world_text")))
        }
        OnSoundSwitchNotify() {
            z.tools.IsMiniGameMusicOn() ? this.playCowboyBGM() : this.stopCowboyBGM()
        }
        OnSelfInfo() {}
        OnJoinRoomFailed(t) {
            let e = t,
                o = z.StringTools.formatC("Cowboy_ServerErrorCode%d", e);
            this.backToMainScene(z.StringTools.formatC("%s", z.config.getStringDataCasino(o)))
        }
        OnCowboyRewardTips(t) {
            z.config.getCurrentLanguage() == z.Enum.LANGUAGE_TYPE.zh_CN || z.config.getCurrentLanguage() == z.Enum.LANGUAGE_TYPE.zh_TW ? this._rewardTips.fontSize = 26 : this._rewardTips.fontSize = 22, this._rewardTips.node.getComponent(b).width = this._rewardSize.width, this._rewardTips.string = z.StringTools.calculateAutoWrapString(this._rewardTips.node, t), this._rewardPanel.active = !0, Rt.stopAll(this._rewardPanel), O(this._rewardPanel).delay(4).call((() => {
                this._rewardPanel.active = !1
            })).start()
        }
        onBtnTopBgClick(t) {
            z.videoCowboyNet.RequestTrend(), this._cowboyChart.active = !0, this.playCowboyEffect(this.s_button)
        }
        _onMsgUpdateWorldServerGold(t) {
            if (z.appConfig.getGameConfig().miniGameConfig.useSharePlayerPool) return;
            t = 1 == t;
            let e = z.dataHandler.getUserData().total_amount;
            (lt.getVideoCowboyRoom().bCanUpdateWorldServerGold || t) && (lt.getVideoCowboyRoom().selfPlayer.curCoin = e, this.updateSelfCoin())
        }
        _initWayOutInfoByAreaIdx(t) {
            if (t < 0 || t >= z.StringTools.getArrayLength(this._betAreas)) return;
            let e = this._betAreas[t].getChildByName("panel_way_out");
            if (!e) return;
            e.getComponent(k) && e.removeComponent(k);
            let o = new at;
            this._mapWayOutInfo.add(t, o), o.iAreaIdx = t, o.panelWayOut = e, o.panelWayOut.on(r.EventType.TOUCH_END, (() => {}));
            {
                let t = o.panelWayOut.children.length;
                for (let e = 0; e < t; ++e) {
                    let t = z.StringTools.formatC("img_%d", e),
                        i = o.panelWayOut.getChildByName(t);
                    i && (i.active = !1, o.vWayOutImg.push(i), o.vWayOutImgSrcPos.push(i.getPosition()))
                }
            } {
                let t = o.panelWayOut.getChildByName("txt_way_out");
                t && (o.rtxtWayOut || (o.rtxtWayOut = (new r).addComponent(y)), o.rtxtWayOut.fontSize = t.getComponent(l).fontSize, o.rtxtWayOut.node.addOrGetComponent(b).setAnchorPoint(R(t.getComponent(b).anchorPoint)), o.rtxtWayOut.node.setContentSize(t.getContentSize()), o.rtxtWayOut.node.setScale(v(t.scale)), o.rtxtWayOut.node.eulerAngles = t.eulerAngles, o.rtxtWayOut.node.setPosition(t.getPosition()), o.rtxtWayOut.node.active = !1, o.rtxtWayOut.handleTouchEvent = !1, t.getParent().addChild(o.rtxtWayOut.node), t.removeFromParent())
            }
            switch (this.getBetOptionByAreaIdx(t)) {
                case lt.Enum.BetZoneOption.EQUAL:
                    o.eWayOutStyle = Z.eGameboyWayOutStyle.GWS_TXT, o.iWayOutLoseLimitCount = 200;
                    break;
                case lt.Enum.BetZoneOption.HOLE_3_TONG_SAME_SHUN:
                case lt.Enum.BetZoneOption.FIVE_NONE_1DUI:
                case lt.Enum.BetZoneOption.FIVE_2DUI:
                    o.eWayOutStyle = Z.eGameboyWayOutStyle.GWS_IMG;
                    break;
                case lt.Enum.BetZoneOption.HOLE_SAME:
                    o.eWayOutStyle = Z.eGameboyWayOutStyle.GWS_AUTO, o.iWayOutLoseLimitCount = 200;
                    break;
                case lt.Enum.BetZoneOption.HOLE_A:
                    o.eWayOutStyle = Z.eGameboyWayOutStyle.GWS_TXT, o.iWayOutLoseLimitCount = 200;
                    break;
                case lt.Enum.BetZoneOption.FIVE_3_SHUN_TONG_HUA:
                    o.eWayOutStyle = Z.eGameboyWayOutStyle.GWS_IMG;
                    break;
                case lt.Enum.BetZoneOption.FIVE_3_2:
                    o.eWayOutStyle = Z.eGameboyWayOutStyle.GWS_TXT, o.iWayOutLoseLimitCount = 200;
                    break;
                case lt.Enum.BetZoneOption.FIVE_KING_TONG_HUA_SHUN_4:
                    o.eWayOutStyle = Z.eGameboyWayOutStyle.GWS_TXT, o.iWayOutLoseLimitCount = 300
            }
        }
        _clearWayOutInfo() {
            this._mapWayOutInfo.clear()
        }
        _showWayOutMoveAnim(t) {
            if (!this._mapWayOutInfo.has(t)) return;
            let e = this._mapWayOutInfo.get(t).panelWayOut,
                o = this._mapWayOutInfo.get(t).vWayOutImg,
                i = this._mapWayOutInfo.get(t).vWayOutImgSrcPos;
            !e || z.StringTools.getArrayLength(o) <= 0 || Rt.scaleAndFade(o[0], .3, v(0, 0, 0), 0, null, (() => {
                o[0].active = !1;
                let e = v(u.ZERO);
                for (let n = 0; n < o.length; ++n) 0 !== n && (e.x = i[n - 1].x, e.y = i[n - 1].y, Rt.moveTo(o[n], .5, e, null, null, (() => {
                    n === o.length - 1 && (this._updateWayOut(t, 0), o[0].setScale(v(1, 1, 1)), o[0].addOrGetComponent(E).opacity = 255, o[0].active = !0)
                })))
            }))
        }
        _showWayOutImgAnim(t) {
            if (!this._mapWayOutInfo.has(t)) return;
            let e = this._mapWayOutInfo.get(t).vWayOutImg,
                o = z.StringTools.getArrayLength(e);
            if (o <= 0) return;
            let i = lt.getVideoCowboyRoom().mapZoneData.get(this.getBetOptionByAreaIdx(t));
            if (!i) return;
            let n = this._mapWayOutInfo.get(t).rtxtWayOut;
            n && (n.string = "", n.node.active = !1);
            let s = i.result,
                a = "";
            0 == s ? a = "cowboy_icon_circle_small_gray" : 1 == s && (a = z.config.getCurrentLanguage() == z.Enum.LANGUAGE_TYPE.zh_CN || z.config.getCurrentLanguage() == z.Enum.LANGUAGE_TYPE.zh_TW ? "cowboy_icon_circle_small_red" : "cowboy_icon_circle_small_red_en");
            let r = e.length;
            for (let t = 0; t < r; ++t)
                if (!e[t].active) {
                    r = t;
                    break
                } r > o - 1 ? O(this._nodeAnim).delay(.3 * this._fActExecute_WayOut).call((() => {
                this._showWayOutMoveAnim(t)
            })).start() : O(this._nodeAnim).delay(.8 * this._fActExecute_WayOut).call((() => {
                e[r].active = !0, lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, e[r].getComponent(T), a)
            })).start()
        }
        _showWayOutAnim(t) {
            if (!this._mapWayOutInfo.has(t)) return;
            let e = this._mapWayOutInfo.get(t).panelWayOut,
                o = this._mapWayOutInfo.get(t).vWayOutImg,
                i = z.StringTools.getArrayLength(o);
            if (!e || i <= 0) return;
            let n = lt.getVideoCowboyRoom().mapZoneData.get(this.getBetOptionByAreaIdx(t));
            if (n) switch (this._mapWayOutInfo.get(t).eWayOutStyle) {
                case Z.eGameboyWayOutStyle.GWS_NONE:
                    break;
                case Z.eGameboyWayOutStyle.GWS_IMG:
                    this._updateWayOutImg(t, 1), this._showWayOutImgAnim(t);
                    break;
                case Z.eGameboyWayOutStyle.GWS_TXT:
                    this._updateWayOutTxt(t);
                    break;
                case Z.eGameboyWayOutStyle.GWS_AUTO: {
                    let e = !1,
                        i = n.vHistoryResults;
                    if (i.length > 0 && i.length > o.length) {
                        let t = !0,
                            n = o.length;
                        for (let e = 0; e <= n; ++e) t = t && 0 == i[e];
                        t && (e = !0)
                    }
                    e ? this._updateWayOutTxt(t) : (this._updateWayOutImg(t, 1), this._showWayOutImgAnim(t))
                }
            }
        }
        _showAllWayOutAnim() {
            this._mapWayOutInfo.forEach(((t, e) => {
                this._showWayOutAnim(t)
            }))
        }
        _updateWayOutImg(t, e) {
            if (!this._mapWayOutInfo.has(t)) return;
            this._mapWayOutInfo.get(t).panelWayOut.active = !0;
            let o = this._mapWayOutInfo.get(t).vWayOutImg,
                i = this._mapWayOutInfo.get(t).vWayOutImgSrcPos,
                n = lt.getVideoCowboyRoom().mapZoneData.get(this.getBetOptionByAreaIdx(t));
            if (!n) return;
            let s = this._mapWayOutInfo.get(t).rtxtWayOut;
            s && (s.string = "", s.node.active = !1);
            let a = "",
                r = n.vHistoryResults,
                l = z.StringTools.getArrayLength(o),
                d = z.StringTools.getArrayLength(r),
                h = l < d ? l : d,
                _ = 0,
                u = 0;
            l >= d ? (_ = h - 1, u = h - e) : (_ = h - 1 + e, u = h);
            for (let t = 0; t < l; ++t) {
                o[t].setPosition(i[t]);
                let e = _ - t;
                if (t < u && e >= 0 && e < d) {
                    o[t].active = !0;
                    let i = r[e];
                    0 == i ? a = "cowboy_icon_circle_small_gray" : 1 == i && (a = z.config.getCurrentLanguage() == z.Enum.LANGUAGE_TYPE.zh_CN || z.config.getCurrentLanguage() == z.Enum.LANGUAGE_TYPE.zh_TW ? "cowboy_icon_circle_small_red" : "cowboy_icon_circle_small_red_en"), lt.loadSpriteTextureByPlist(this.game_dznz_PLIST, o[t].getComponent(T), a)
                } else o[t].active = !1
            }
        }
        _updateWayOutTxt(t) {
            if (!this._mapWayOutInfo.has(t)) return;
            let e = this._mapWayOutInfo.get(t).rtxtWayOut;
            if (!e) return;
            let o = this._mapWayOutInfo.get(t).vWayOutImg,
                i = this._mapWayOutInfo.get(t).iWayOutLoseLimitCount,
                n = z.StringTools.getArrayLength(o);
            for (let t = 0; t < n; ++t) o[t].active = !1;
            let s = lt.getVideoCowboyRoom().curState,
                a = lt.getVideoCowboyRoom().mapZoneData.get(this.getBetOptionByAreaIdx(t));
            if (a) {
                let t = a.luckLoseHand;
                if (t < 0) e.string = "";
                else if (0 == t) s == lt.Enum.RoundState.WAIT_NEXT_ROUND ? z.StringTools.setRichTextString(e.node, z.config.getStringDataCasino("Cowboy_game_wayout_hit_txt")) : z.StringTools.setRichTextString(e.node, z.config.getStringDataCasino("Cowboy_game_wayout_hit_last_txt"));
                else {
                    let o = "";
                    o = 0 != i && t > i ? z.StringTools.formatC("%d+", i) : z.StringTools.formatC("%d", t), z.StringTools.setRichTextString(e.node, z.StringTools.formatC(z.config.getStringDataCasino("Cowboy_game_wayout_lose_txt"), o))
                }
                e.node.getParent().getContentSize(), e.node.getContentSize();
                e.node.active = !0
            }
        }
        _updateWayOut(t, e) {
            if (!this._mapWayOutInfo.has(t)) return;
            let o = this._mapWayOutInfo.get(t).vWayOutImg,
                i = lt.getVideoCowboyRoom().mapZoneData.get(this.getBetOptionByAreaIdx(t));
            if (i) switch (this._mapWayOutInfo.get(t).eWayOutStyle) {
                case Z.eGameboyWayOutStyle.GWS_NONE:
                    break;
                case Z.eGameboyWayOutStyle.GWS_IMG:
                    this._updateWayOutImg(t, e);
                    break;
                case Z.eGameboyWayOutStyle.GWS_TXT:
                    this._updateWayOutTxt(t);
                    break;
                case Z.eGameboyWayOutStyle.GWS_AUTO: {
                    let n = !1,
                        s = i.vHistoryResults,
                        a = z.StringTools.getArrayLength(o),
                        r = z.StringTools.getArrayLength(s);
                    if (r > 0 && r > a) {
                        let t = !0;
                        for (let e = 0; e <= a; ++e) t = t && 0 == s[e];
                        t && (n = !0)
                    }
                    n ? this._updateWayOutTxt(t) : this._updateWayOutImg(t, e)
                }
            }
        }
        _updateAllWayOut(t) {
            t = null == t ? 0 : t, this._mapWayOutInfo.forEach(((e, o) => {
                this._updateWayOut(e, t)
            }))
        }
        getTimelineAnimSpeed(t, e) {
            let o = 0;
            if (t && e > 0) {
                let i = 1 / 60;
                o = t.defaultClip.duration * i / e
            }
            return o
        }
        setTimeSpeed(t, e) {
            t.defaultClip.speed = e
        }
        showCowboyLoseAnim() {
            this.playCowboyEffect(this.s_win_lose)
        }
        onShowLuckButton(t) {
            gt.isInvalidRoomMultiWindow(t.gameData, null == this ? void 0 : this.node) || this.showLuckButton()
        }
        showLuckButton() {
            if (!this._luckButton) {
                this._luckButton = g(this.luckButton_prefab).getComponent(nt), this._btn_redpacket_festival.addChild(this._luckButton.node), this._luckButton.init(this.luckPanelLayer), this.luckPanelLayer.setSiblingIndex(st.COWBOY_LOCAL_ZORDER_GIFT_POPUP), this._luckButton.node.setPosition(0, 0);
                let t = this._selfCoin.node.convertToWorldSpaceAR(u.ZERO);
                this._luckButton.setViewData(t), this._luckButton.onAbleToShowWelcome = this.showLuckPopupWelcome.bind(this)
            }
            z.dataHandler.getUserData().isShowLuckTurntables ? (this._btn_redpacket_festival.active = !0, this._luckButton.updateView(!1, this._btn_redpacket_festival_layer)) : this._btn_redpacket_festival.active = !1, this._btn_redpacket_festival_layer.active = this._btn_redpacket_festival.active, this.adaptiveBetBtnPanel()
        }
        showLuckPopupWelcome(t) {
            z.dataHandler.getUserData().isShowLuckTurntables ? t && !this._hasShownLuckWelcomePopup && this._showLuckWelcomePopupNode() : this._removeLuckWelcomePopupNode()
        }
        _removeLuckWelcomePopupNode() {
            z.tools.isValidNode(this.luckWelcomePopupNode) && this.luckWelcomePopupNode.removeFromParent()
        }
        _showLuckWelcomePopupNode() {
            z.tools.isValidNode(this.luckWelcomePopupNode) || (this.luckWelcomePopup_layer.setSiblingIndex(st.COWBOY_LOCAL_ZORDER_GIFT_WELCOME), this.luckWelcomePopupNode = g(this.luckWelcomePopup_prefab), this.luckWelcomePopupNode.parent = this.luckWelcomePopup_layer, this.luckWelcomePopupNode.setPosition(0, 0), this._hasShownLuckWelcomePopup = !0)
        }
        onTurntableResultNotice(t) {
            gt.isInvalidRoomMultiWindow(t.gameData, null == this ? void 0 : this.node) || this.turntableResultNotice(t.puf)
        }
        turntableResultNotice(t) {
            let e = this.getPlayerCoinNodesByUid(t.uid);
            0 == e.length && e.push(this._btnPlayerList.node);
            for (let o = 0; o < e.length; o++) {
                let i = e[o],
                    n = i.getParent().convertToWorldSpaceAR(i.getPosition());
                this._luckButton.showGoldMoveAction(n, t.currency_type)
            }
        }
        _HandleStopBetNotify() {
            this.hideKaiJuSprite(), this.showBetCoutDownEndAnim(), this._leftTime = 0, this._updateBetButtonState(), this._humanboyAdvancedAuto && this._humanboyAdvancedAuto.getComponent(it).hideSelectPanel(!1)
        }
        _HandleSkipRoundNotify() {
            this.hideKaiJuSprite(), this.showBetClock(!1), this.hideKaiPaiSprite(), this.hideJieSuanSprite();
            let t = this._betCoinContents.length;
            for (let e = 0; e < t; e++) this.hideAreaCoin(e, !0);
            let e = this._textTotalBetNum.length;
            for (let t = 0; t < e; t++) {
                let e = z.Number(this._textTotalBetNum[t].string),
                    o = z.Number(this._textSelfBetNum[t].string);
                this.HandleReturnCoinToPlayers(t, o, !0), this.HandleReturnCoinToPlayers(t, e - o, !1), this._textTotalBetNum[t].string = "", this._textSelfBetNum[t].string = ""
            }
            this._humanboyAdvancedAuto && this._humanboyAdvancedAuto.getComponent(it).hideSelectPanel(!1)
        }
        _HandleCancelRoundNotify() {
            this.hideKaiPaiSprite(), this._openCardLayer && (this._openCardLayer.setMode(!0), this._openCardLayer.reset())
        }
        HandleReturnCoinToPlayers(t, e, o) {
            if (e <= 0) return;
            let i = this._betLineNode[t],
                n = this.getBetDetailAmounts(100 * e),
                s = new u(u.ZERO);
            s = o ? this._selfCoin.node.getParent().convertToWorldSpaceAR(this._selfCoin.node.getPosition()) : this._btnPlayerList.node.getParent().convertToWorldSpaceAR(this._btnPlayerList.node.getPosition()), s = this._nodeAnim.convertToNodeSpaceAR(s);
            let a = z.StringTools.getArrayLength(n);
            for (let e = 0; e < a; e++) {
                let o = this.createFlyCoin(t, n[e], !0),
                    a = i.convertToWorldSpaceAR(this.getOneAreaPos(t, this.isCircleCoin(n[e])));
                a = this._nodeAnim.convertToNodeSpaceAR(a), this._nodeAnim.addChild(o.node), o.node.setPosition(a), o.node.active = !1, this.scheduleOnce(function() {
                    o.node.active = !0, O(o.node).delay(.2 + .025 * e).to(.5, {
                        position: s
                    }, {
                        easing: Rt.easeOut(.8)
                    }).removeSelf().start()
                }.bind(this), .7)
            }
        }
        initCheckXianLu() {
            let t = z.Number(z.tools.GetStringByCCFile("xianLu_index"));
            t = 0 == t ? 2 : t, lt.getVideoCowboyRoom().xianluList.length > t - 1 && z.MessageCenter.send("LiveVideo_onChangeXianLu", lt.getVideoCowboyRoom().xianluList[t - 1]);
            let e = this.node.getChildByName("btn_xianlu");
            this._btn_xianlu = e, z.config.IS_IPHONEX_SCREEN && e.setPosition(e.position.x - z.viewAdaptive.IPHONEX_OFFSETY, e.position.y), this._statusLayerPosNode = e.getChildByName("statusLayer_pos"), this._videoStatusTips = e.getChildByName("Image_videoTips");
            let o = this._videoStatusTips.getChildByName("content_0");
            this._videoStatusTips.active = !1;
            let i = e.getChildByName("btn_xianlu"),
                n = e.getChildByName("Panel_1");
            n.setScale(1, .24);
            let s = e.getChildByName("Button_current");
            s.active = !0, s.getChildByName("Label").getComponent(l).string = z.config.getStringData(z.StringTools.formatC("VideoCowboy_videoResource_Text_%d", t - 1)), o.getComponent(l).string = z.config.getStringData(z.StringTools.formatC("VideoCowboy_videoResource_Text_%d", t - 1));
            let a = e.getChildByName("Image_current");
            for (let t = 0; t < 3; t++) {
                let e = n.getChildByName(z.StringTools.formatC("Button_%d", t));
                e.getChildByName("Label").getComponent(l).string = z.config.getStringData(z.StringTools.formatC("VideoCowboy_videoResource_Text_%d", t)), e.on(d.EventType.CLICK, (i => {
                    Lt.playButtonSound("button_click.mp3"), lt.getVideoCowboyRoom().xianluList.length > t && z.MessageCenter.send("LiveVideo_onChangeXianLu", lt.getVideoCowboyRoom().xianluList[t]), z.tools.SaveStringByCCFile("xianLu_index", z.String(t + 1));
                    let r = e;
                    s.getChildByName("Label").getComponent(l).string = r.getChildByName("Label").getComponent(l).string, o.getComponent(l).string = r.getChildByName("Label").getComponent(l).string, Rt.scaleTo(n, .3, v(1, .24, 0), null, (() => {
                        n.active = !1, this._videoStatusTips.active || (s.active = !0, a.active = !0)
                    }))
                }))
            }
            i.on(d.EventType.CLICK, (t => {
                Lt.playButtonSound("button_click.mp3"), n.active ? (Rt.stopAll(n), Rt.scaleTo(n, .3, v(1, .24, 0), null, (() => {
                    n.active = !1, this._videoStatusTips.active || (s.active = !0, a.active = !0)
                }))) : (s.active = !1, a.active = !1, n.active = !0, Rt.scaleTo(n, .3, v(1, 1, 1)))
            })), s.on(d.EventType.CLICK, (t => {
                Lt.playButtonSound("button_click.mp3"), n.active ? (Rt.stopAll(n), Rt.scaleTo(n, .3, v(1, .24, 0), null, (() => {
                    n.active = !1, this._videoStatusTips.active || (s.active = !0, a.active = !0)
                }))) : (s.active = !1, a.active = !1, n.active = !0, Rt.scaleTo(n, .3, v(1, 1, 1)))
            })), this.node.on(r.EventType.TOUCH_START, (t => {
                if (!n.active) return !0;
                Rt.scaleTo(n, .3, v(1, .24, 0), null, (() => {
                    n.active = !1, this._videoStatusTips.active || (s.active = !0, a.active = !0)
                }))
            }))
        }
        onExitCowboyLiveVideo() {
            this._cowboyExit && (this._cowboyExit.active = !1)
        }
        showVideoStatusTips() {
            if (!this._videoStatusTips) return;
            let t = this._videoStatusTips.getChildByName("content").getComponent(l);
            z.config.getCurrentLanguage() != z.Enum.LANGUAGE_TYPE.zh_CN && z.config.getCurrentLanguage() != z.Enum.LANGUAGE_TYPE.zh_TW || (t.fontSize = 26), t.string = z.config.getStringData("VideoCowboy_videoTips"), this._videoStatusTips.active = !0, Rt.stopAll(this._videoStatusTips), this._videoStatusTips.setScale(.3, this._videoStatusTips.scale.y);
            let e = this._btn_xianlu.getChildByName("Panel_1"),
                o = this._btn_xianlu.getChildByName("Button_current"),
                i = this._btn_xianlu.getChildByName("Image_current");
            o.active = !1, i.active = !1, O(this._videoStatusTips).to(.2, {
                scale: v(1, 1)
            }).delay(.5).to(.3, {
                scale: v(.3, 1)
            }).call((() => {
                this._videoStatusTips.active = !1, e.active || (o.active = !0, i.active = !0)
            })).start()
        }
        _initAreaLineData() {
            this._betLineNode = [], this.lineInfoArr = [];
            for (let t = 0; t < 2; t++) {
                this.lineInfoArr.push([]);
                for (let e = 0; e < 8; e++) this.lineInfoArr[t].push(new Do)
            }
            let t = this._betAreas.length;
            for (let e = 0; e < 2; e++)
                for (let o = 0; o < t; o++) {
                    let t = this._betAreas[o].getChildByName("Node_corner");
                    t.active = !1;
                    let i = t.children.length,
                        n = [];
                    if (0 == e) {
                        this._betLineNode.push(t);
                        for (let e = 0; e < i / 2; e++) {
                            let o = t.getChildByName(z.StringTools.formatC("Image_%d", e));
                            o && n.push(o.getPosition())
                        }
                    } else
                        for (let e = i / 2; e < i; e++) {
                            let o = t.getChildByName(z.StringTools.formatC("Image_%d", e));
                            o && n.push(o.getPosition())
                        }
                    let s = n[0].x,
                        a = n[0].y,
                        r = n[0].x,
                        l = n[0].y,
                        d = n.length;
                    for (let t = 0; t < d; t++) n[t].x < s && (s = n[t].x), n[t].x > r && (r = n[t].x), n[t].y < a && (a = n[t].y), n[t].y > l && (l = n[t].y);
                    this.lineInfoArr[e][o].minX = s, this.lineInfoArr[e][o].minY = a, this.lineInfoArr[e][o].maxX = r, this.lineInfoArr[e][o].maxY = l, this.lineInfoArr[e][o].aArr = [], this.lineInfoArr[e][o].bArr = [];
                    for (let t = 0; t < d; t++) {
                        let i = t + 1 < d ? t + 1 : 0,
                            s = (n[i].y - n[t].y) / (n[i].x - n[t].x),
                            a = n[t].y - s * n[t].x;
                        this.lineInfoArr[e][o].aArr.push(s), this.lineInfoArr[e][o].bArr.push(a), n[i].x > n[t].x ? (this.lineInfoArr[e][o].x1.push(n[t].x), this.lineInfoArr[e][o].x2.push(n[i].x)) : (this.lineInfoArr[e][o].x1.push(n[i].x), this.lineInfoArr[e][o].x2.push(n[t].x))
                    }
                }
        }
        getOneAreaPos(t, e) {
            let o, i = e ? 0 : 1,
                n = this.lineInfoArr[i][t],
                s = this.SERangeRandomf(n.minX, n.maxX),
                a = [],
                r = n.aArr.length;
            for (let t = 0; t < r; t++) {
                if (s < n.x1[t] || s > n.x2[t]) continue;
                let e = n.aArr[t] * s + n.bArr[t];
                e >= n.minY && e <= n.maxY && a.push(e)
            }
            return 2 != a.length && console.error("-------.存在数据错误"), o = a[0] > a[1] ? this.SERangeRandomf(a[1], a[0]) : this.SERangeRandomf(a[0], a[1]), v(s, o, 0)
        }
        _initBetClock() {
            if (!this._clock_node) {
                Et.instance.getWinSize(this.node);
                let t = this.node.getChildByName("Image_clock").getPosition();
                this._clock_node = g(this.clock_prefab), this.node.addChild(this._clock_node), this._clock_node.setPosition(t), this._clock_node.active = !1, this._clock_num_txt = this._clock_node.getChildByName("BitmapFontLabel_index").getComponent(l), this._clock_num_txt.string = "";
                let e = this._clock_node.getChildByName("Sprite_circle");
                this._clock_green = this._clock_node.getChildByName("Sprite_circle_0").getComponent(T), this._clock_circle = e.getComponent(M), this._clock_circle.progress = 0
            }
        }
        showBetClock(t) {
            this._clock_node && (this._clock_node.active = t, t ? O(this._clock_node).set({
                scale: v(0, 0, 0)
            }).sequence(O().to(.3, {
                scale: v(1, 1, 1)
            }), O().to(1 / 40, {
                scale: v(1.1, 1.1, 1.1)
            }), O().to(1 / 40, {
                scale: v(1, 1, 1)
            }), O().to(1 / 40, {
                scale: v(1.05, 1.05, 1.05)
            }), O().to(1 / 40, {
                scale: v(1, 1, 1)
            }), O().call((() => {
                this._clock_total_time = this._leftTime, this._clock_total_time <= 5 && (this._clock_canChange = !0, this.handleClockChangeColor()), this.schedule(this.updateClockCircle, .1)
            }))).start() : (this._clock_total_time = 0, this._clock_canChange = !1, Rt.stopAll(this._clock_node)), this._clock_circle.progress = 0, this.unschedule(this.updateClockCircle))
        }
        updateClockCircle(t) {
            let e = this._clock_circle.progress + 1 / (10 * (this._clock_total_time - 1));
            e = e >= 1 ? 1 : e, this._clock_circle.progress = e, this._clock_circle.progress >= 1 && this.unschedule(this.updateClockCircle)
        }
        handleClockChangeColor() {
            this._clock_canChange ? (this._clock_num_txt.font = this.time_xiazhu, lt.loadSpriteTextureByPlist(this.game_videonz_PLIST, this._clock_green, "red_bg")) : (this._clock_num_txt.font = this.time_xiazhu_1, lt.loadSpriteTextureByPlist(this.game_videonz_PLIST, this._clock_green, "green_bg"))
        }
        playKaiJu() {
            this.gameTipsNode.setPosition(this._clock_node.getPosition()), this.gameTipsNode.setScale(v(.8, .8, .8)), this.gameTipsLabel.string = z.config.getStringDataCasino("VideoCowboy_start_betting_2"), this.gameTipsNode.active = !0, Rt.stopAll(this.gameTipsNode), O(this.gameTipsNode).to(.3, {
                scale: v(1, 1, 1)
            }).to(1 / 40, {
                scale: v(1.1, 1.1, 1.1)
            }).to(1 / 40, {
                scale: v(1, 1, 1)
            }).to(1 / 40, {
                scale: v(1.05, 1.05, 1.05)
            }).to(1 / 40, {
                scale: v(1, 1, 1)
            }).delay(.2).to(.2, {
                scale: v(0, 0, 0)
            }).call((() => {
                this.gameTipsNode.active = !1, this.showBetClock(!0)
            })).start()
        }
        playStopXiazhu() {
            this.gameTipsNode.setPosition(this._clock_node.getPosition()), this.gameTipsNode.setScale(v(.8, .8, .8)), this.gameTipsLabel.string = z.config.getStringDataCasino("VideoCowboy_end_betting_1"), this.gameTipsNode.active = !0, Rt.stopAll(this.gameTipsNode), O(this.gameTipsNode).to(.3, {
                scale: v(1, 1, 1)
            }).to(1 / 40, {
                scale: v(1.1, 1.1, 1.1)
            }).to(1 / 40, {
                scale: v(1, 1, 1)
            }).to(1 / 40, {
                scale: v(1.05, 1.05, 1.05)
            }).to(1 / 40, {
                scale: v(1, 1, 1)
            }).delay(.2).to(.2, {
                scale: v(0, 0, 0)
            }).call((() => {
                this.gameTipsNode.active = !1, this.playKaiPai(null)
            })).start()
        }
        playKaiPai(t) {
            let e = !1;
            t && (e = "1" == t, this._openCardLayer.showCardNotify(e)), this._openCard_Node || (this._openCard_Node = g(this.kaipai_prefab), this.node.addChild(this._openCard_Node), this._openCard_Node.setSiblingIndex(st.COWBOY_LOCAL_ZORDER_TIMELINE_NODE), this._openCard_Node.setPosition(this._clock_node.getPosition()), this._openCard_Node.active = !1, this._openCard_blink = (new r).addComponent(T), lt.loadSpriteTextureByPlist(this.game_videonz_PLIST, this._openCard_blink, "opencard_blink"), this._openCard_Node.addChild(this._openCard_blink.node)), this._openCard_Node.active || (this._openCard_Node.active = !0, O(this._openCard_Node).set({
                scale: v(0, 0, 0)
            }).to(.3, {
                scale: v(1, 1, 1)
            }).to(1 / 40, {
                scale: v(1.1, 1.1, 1.1)
            }).to(1 / 40, {
                scale: v(1, 1, 1)
            }).to(1 / 40, {
                scale: v(1.05, 1.05, 1.05)
            }).to(1 / 40, {
                scale: v(1, 1, 1)
            }).start(), O(this._openCard_blink.node.addOrGetComponent(E)).to(.75, {
                opacity: 0
            }).to(.75, {
                opacity: 255
            }).repeatForever().start())
        }
        playJieSuan() {
            if (!this._jieSuan_Node) {
                this._jieSuan_Node = g(this.jiesuan_prefab), this.node.addChild(this._jieSuan_Node), this._jieSuan_Node.setSiblingIndex(st.COWBOY_LOCAL_ZORDER_TIMELINE_NODE), this._jieSuan_Node.setPosition(this._clock_node.getPosition()), this._jieSuan_blink = (new r).addComponent(T), lt.loadSpriteTextureByPlist(this.game_videonz_PLIST, this._jieSuan_blink, "jiesuan_blink"), this._jieSuan_Node.addChild(this._jieSuan_blink.node);
                this._jieSuan_Node.getContentSize()
            }
            this._jieSuan_Node.active = !0, O(this._jieSuan_Node).set({
                scale: v(0, 0, 0)
            }).to(.3, {
                scale: v(1, 1, 1)
            }).to(1 / 40, {
                scale: v(1.1, 1.1, 1.1)
            }).to(1 / 40, {
                scale: v(1, 1, 1)
            }).to(1 / 40, {
                scale: v(1.05, 1.05, 1.05)
            }).to(1 / 40, {
                scale: v(1, 1, 1)
            }).start(), O(this._jieSuan_blink.node.addOrGetComponent(E)).to(.75, {
                opacity: 0
            }).to(.75, {
                opacity: 255
            }).repeatForever().start()
        }
        hideKaiJuSprite() {
            this._kaiju_Sprite && (Rt.stopAll(this._kaiju_Sprite.node), this._kaiju_Sprite.node.active = !1)
        }
        hideStopXiazhuSprite() {
            this._stopXz_Sprite && (Rt.stopAll(this._stopXz_Sprite.node), this._stopXz_Sprite.node.active = !1)
        }
        hideKaiPaiSprite() {
            this._openCard_Node && (Rt.stopAll(this._openCard_Node), this._openCard_Node.active = !1)
        }
        hideJieSuanSprite() {
            this._jieSuan_Node && (Rt.stopAll(this._jieSuan_Node), this._jieSuan_Node.active = !1)
        }
        playPointAni() {
            let t = lt.getVideoCowboyRoom().change_points;
            t <= 0 || (this.points_node || (this.points_node = g(this.points_ani_prefab), this.node.addChild(this.points_node, st.COWBOY_LOCAL_ZORDER_ANIM_NODE), this.points_node.setPosition(this.node.convertToNodeSpaceAR(this._selfHeadBg.parent.convertToWorldSpaceAR(this._selfHeadBg.position))), this.points_node.getComponent(N).on(N.EventType.FINISHED, (t => {
                this.resetPointAni()
            }), this)), this.points_node.getComponent(ct).playPointAni(t))
        }
        showAutoAddBetList(t) {
            this.advanceAutoAddBet || (this.advanceAutoAddBet = g(this.MiniGameAddAdvancedAuto_prefab), this.node.addChild(this.advanceAutoAddBet, st.COWBOY_LOCAL_ZORDER_ADVANCE_AUTO_ADD_SELECT));
            const e = this.advanceAutoAddBet.getComponent(At),
                o = new ft(e);
            o.adaptSelectPanelPos(t.btn_center.node), o.showSelectPanel(!0), o.setCountUpdateCallback((() => {
                t.updateCenterButton()
            }))
        }
        onMsgAdvanceAutobetAdd(t) {
            console.log("onMsgAdvanceAutobetAdd", t), this._humanboyAdvancedAuto && (this._humanboyAdvancedAuto.getComponent(it).adaptAdvanceAutoCountPos(this._btnBetAuto.node), this._humanboyAdvancedAuto.getComponent(it).showAdvanceAutoCount())
        }
        _onMsgAdvanceAutobetLimitReached(t) {
            const e = t;
            if (e) {
                const t = z.StringTools.formatC(z.config.getStringData("MiniGame_btn_desc_auto_bet_reached"), e);
                this.showCowboyToast(t)
            }
        }
        getCowboyuserId() {
            return z.dataHandler.getMiniGameUserId()
        }
        resetPointAni() {
            lt.getVideoCowboyRoom().change_points = 0, this.points_node && this.points_node.getComponent(ct).resetPointAni()
        }
        callExitProcess(t) {
            var e, o;
            if (!t || t.tRoomData.u32GameID != z.Enum.GameId.VideoCowboy) return;
            null == (e = this._humanboyMenu) || e.hide(!1), z.miniGamePopupManager.processClose(null == (o = this.gameSceneInstance) || null == (o = o.room) ? void 0 : o.gameScene);
            let i = lt.getVideoCowboyRoom().iUsedAutoBetCount,
                n = lt.getVideoCowboyRoom().iSelectAutoBetCount;
            if (n > 0) {
                const t = this.node.getChildByName("Cowboy_Dialog_exit");
                if (t) t.active = !0;
                else {
                    let t = g(this.HumanboyDialog_prefab);
                    t.name = "Cowboy_Dialog_exit";
                    const e = t.getComponent(yt);
                    this.node.addChild(t, st.COWBOY_LOCAL_ZORDER_TOAST);
                    const o = t.getComponent(tt),
                        s = z.StringTools.formatC(z.config.getStringDataCasino("Cowboy_auto_bet_exit_tips"), n - i, n),
                        a = z.config.getStringDataCasino("CowBoy_btn_desc_exit_game"),
                        r = z.config.getStringDataCasino("CowBoy_btn_desc_resume_game"),
                        l = t => {
                            z.videoCowboyNet.RequestLeaveRoom()
                        },
                        d = t => {
                            null == e || e.close()
                        },
                        h = z.config.getStringDataCasino("MiniGame_AddAutoBet_Text"),
                        _ = t => {
                            this.showAutoAddBetList(t)
                        },
                        u = t => {
                            if (o) {
                                let t = lt.getVideoCowboyRoom().iUsedAutoBetCount,
                                    e = lt.getVideoCowboyRoom().iSelectAutoBetCount;
                                o.txt_content.string = z.StringTools.formatC(z.config.getStringDataCasino("Cowboy_auto_bet_exit_tips"), e - t, e)
                            }
                            lt.getVideoCowboyRoom().reachLimitBet && (null == e || e.blockCenterButton())
                        },
                        c = {
                            title: "Notice_Layer_notice_panel_message_button",
                            textContent: "Cowboy_auto_bet_exit_tips",
                            leftBtn: "CowBoy_btn_desc_exit_game",
                            rightBtn: "CowBoy_btn_desc_resume_game",
                            centerBtn: "MiniGame_AddAutoBet_Text",
                            gameID: z.Enum.GameId.CowBoy,
                            contentArgs: () => {
                                const t = lt.getVideoCowboyRoom().iUsedAutoBetCount,
                                    e = lt.getVideoCowboyRoom().iSelectAutoBetCount;
                                return [e - t, e]
                            }
                        },
                        C = bt.onChangeLanguageAutoBetPopup(o, e, c),
                        m = {
                            miniDialog: e,
                            stringContent: s,
                            stringLeftBtn: a,
                            stringRightBtn: r,
                            cbLeftBtn: l,
                            cbRightBtn: d,
                            isReachedMax: lt.getVideoCowboyRoom().reachLimitBet,
                            legacyDialog: o,
                            isShowBtnCenter: !0,
                            stringCenterButton: h,
                            cbCenterBtn: _,
                            onUpdateContent: u,
                            themeType: null,
                            onChangeLanguage: C
                        };
                    bt.showDialog(m)
                }
            } else {
                null == this._cowboyExit && (this._cowboyExit = g(this.cowboyExit), this._cowboyExit.addOrGetComponent(b).setAnchorPoint(R(.5, .5)), this._cowboyExit.setSiblingIndex(st.COWBOY_LOCAL_ZORDER_MENU_PANEL), this.node.addChild(this._cowboyExit));
                let t = this._cowboyExit.getComponent(wt);
                null == t || t.show((() => {
                    z.roomManager.RequestLeaveRoom(z.Enum.GameId.VideoCowboy, z.roomManager.getMiniGameRoomIdTemplate(z.Enum.GameId.VideoCowboy), (() => {
                        if (H(t) && z.config.NEEDS_LANDSCAPE()) {
                            var e;
                            const t = {
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
                })), this.playCowboyEffect(this.s_button)
            }
        }
        onLanguageChange() {
            if (this._humanboyAdvancedAuto && this._humanboyAdvancedAuto.active) {
                const t = this._humanboyAdvancedAuto.getComponent(it);
                t.onChangeLanguage(), this._eAutoBtnStyle === Z.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING && t.showAdvanceAutoCount()
            }
            const t = lt.getBetTableLanguagePath("game/video_cowboy/");
            z.resMgr.setSpriteFrame(this._betContentBg.node, t + (this._bTrueFullScreen && z.config.IS_FULLSCREEN ? "bet_content_ipx" : "bet_content"));
            const e = [z.Enum.LANGUAGE_TYPE.en_US, ...z.appConfig.getGameConfig().miniGameConfig.availableLangResForMiniGames];
            for (const t of this._winFlagAnims) {
                const o = t.getChildByName("win_29");
                o && (e.includes(z.config.getCurrentLanguage()) ? z.resMgr.setSpriteFrame(o, lt.getLanguagePath("game/cowboy/language/win_flag")) : z.resMgr.setSpriteFrame(o, "en_US/game/cowboy/language/win_flag"))
            }
            this._mapWayOutInfo.forEach(((t, e) => {
                const o = e.rtxtWayOut;
                o && o.node.active && this._updateWayOutTxt(t)
            }));
            let o = this._btn_xianlu.getChildByName("Panel_1");
            for (let t = 0; t < 3; t++) {
                o.getChildByName(z.StringTools.formatC("Button_%d", t)).getChildByName("Label").getComponent(l).string = z.config.getStringData(z.StringTools.formatC("VideoCowboy_videoResource_Text_%d", t))
            }
            let i = this._videoStatusTips.getChildByName("content").getComponent(l);
            z.config.getCurrentLanguage() != z.Enum.LANGUAGE_TYPE.zh_CN && z.config.getCurrentLanguage() != z.Enum.LANGUAGE_TYPE.zh_TW || (i.fontSize = 26), i.string = z.config.getStringData("VideoCowboy_videoTips"), this.updateAllPlayerWinCount(), this.showSpecialCardTypeAnim()
        }
        showIntroPopup() {
            var t, e, o;
            z.miniGamePopupManager.clearPopupContent(null == (t = this.gameSceneInstance) || null == (t = t.room) ? void 0 : t.gameScene), z.miniGamePopupManager.showPopup({
                popupId: Nt.InFoVideoCowboy,
                gameScene: null == (e = this.gameSceneInstance) || null == (e = e.room) ? void 0 : e.gameScene
            }), null == (o = this._humanboyMenu) || null == (o = o.getComponent(et)) || o.hide(!1)
        }
        showNoticeMsg(t) {
            this.pushNotice.addPushNotice(t, !1)
        }
        _initMexicoInfoPanel() {
            if (!z.appConfig.getGameConfig().miniGameConfig.showMexicoDisclaimerAndCurrencyConversion || z.dataHandler.getUserData().getCountryCurrency().type !== pt.MXN) return;
            const t = new r("mexico_panel");
            this.node.addChild(t, st.COWBOY_LOCAL_ZORDER_MENU_PANEL - 1), t.position = this._btn_xianlu.position;
            const e = g(this.mxnCurrencyInfo_prefab);
            t.addChild(e);
            const o = e.getComponent(V);
            o.top = 130, o.right = 5, o.updateAlignment()
        }
    }).prototype, "openCard_prefab", [Wt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ge = e(De.prototype, "clock_prefab", [Gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ke = e(De.prototype, "time_xiazhu", [kt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Me = e(De.prototype, "time_xiazhu_1", [Mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), He = e(De.prototype, "game_videonz_PLIST", [Ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ve = e(De.prototype, "wait_for_next_round_prefab", [Vt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Fe = e(De.prototype, "win_flag_prefab", [Ft], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ze = e(De.prototype, "special_card_type_prefab", [zt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ue = e(De.prototype, "win_player_light_prefab", [Ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ze = e(De.prototype, "btnBet_0_prefab", [Zt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ye = e(De.prototype, "btnBet_3_prefab", [Yt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xe = e(De.prototype, "cowboyChart", [Xt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qe = e(De.prototype, "humanboyExchange_prefab", [qt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), je = e(De.prototype, "cowboyRule", [jt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ke = e(De.prototype, "cowboySetting", [Kt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Je = e(De.prototype, "cowboyExit", [Jt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qe = e(De.prototype, "cowboyList", [Qt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $e = e(De.prototype, "humanboyAdvancedSetting_prefab", [$t], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), to = e(De.prototype, "HumanboyDialog", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), eo = e(De.prototype, "humanboyGuid_prefab", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oo = e(De.prototype, "HumanboyMenu_prefab", [oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), io = e(De.prototype, "HumanboyAdvancedAuto_prefab", [ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), no = e(De.prototype, "MiniGameAddAdvancedAuto_prefab", [ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), so = e(De.prototype, "HumanboyDialog_prefab", [se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ao = e(De.prototype, "game_dznz_PLIST", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ro = e(De.prototype, "cowboy_trend_anim_PLIST", [re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lo = e(De.prototype, "special_card_type_PLIST", [le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ho = e(De.prototype, "chart_PLIST", [de], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _o = e(De.prototype, "en_animation_PLIST", [he], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), uo = e(De.prototype, "videoLanguage_PLIST", [_e], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), co = e(De.prototype, "language_PLIST", [ue], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), go = e(De.prototype, "chartlang_PLIST", [ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Co = e(De.prototype, "win_num_FNT", [ge], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mo = e(De.prototype, "bet_btn_num_gray", [Ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), po = e(De.prototype, "bet_btn_num_yellow", [me], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yo = e(De.prototype, "luckButton_prefab", [pe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bo = e(De.prototype, "points_ani_prefab", [ye], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fo = e(De.prototype, "miniGameLoadingScreenPrefab", [be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ao = e(De.prototype, "luckPanelLayer", [fe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), So = e(De.prototype, "winCountPrefab", [Ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wo = e(De.prototype, "mappingPlist", [Se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Bo = e(De.prototype, "gameTipsLabel", [we], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {}
    }), To = e(De.prototype, "gameTipsNode", [Be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {}
    }), Po = e(De.prototype, "jiesuan_prefab", [Te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vo = e(De.prototype, "kaipai_prefab", [Pe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), No = e(De.prototype, "btnInfo", [ve], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Oo = e(De.prototype, "btnInfo2", [Ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ro = e(De.prototype, "pushNotice", [Oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Eo = e(De.prototype, "luckWelcomePopup_layer", [Re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lo = e(De.prototype, "luckWelcomePopup_prefab", [Ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Io = e(De.prototype, "mxnCurrencyInfo_prefab", [Le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xo = e(De.prototype, "gameSceneInstance", [Ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xe = De)) || xe));
    i._RF.pop()
}