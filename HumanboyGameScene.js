import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./cc.js";
import * as i from "./humanboy.mjs_cjs=&original=.js";
import * as a from "./Deque.js";
import * as s from "./TagCom.js";
import * as _ from "./HashMap.js";
import * as r from "./cv.js";
import * as l from "./CowboyCard.js";
import * as h from "./HumanboyDataMgr.js";
import * as c from "./LuckTurntablesButton.js";
import * as d from "./HumanboyExchange.js";
import * as u from "./CowboySetting.js";
import * as m from "./define.js";
import * as g from "./JackPotNumber.js";
import * as y from "./JackPotNumber.js";
import * as p from "./CircleSprite.js";
import * as b from "./HumanboyList.js";
import * as A from "./HumanboyGuid.js";
import * as f from "./HumanboyMenu.js";
import * as C from "./HumanboyChart.js";
import * as S from "./HumanboyToast.js";
import * as B from "./HumanboyDialog.js";
import * as v from "./HumanboyBetCoin.js";
import * as T from "./HumanboyJackpot.js";
import * as R from "./HumanboyRewardTips.js";
import * as E from "./HumanboyFlutterScore.js";
import * as N from "./HumanboyAdvancedAuto.js";
import * as O from "./HumanboyAdvancedSetting.js";
import * as D from "./HumanboyAdvancedSetting.js";
import * as w from "./HumanboyDealerList.js";
import * as P from "./HeadPointsAni.js";
import * as L from "./PopSilence.js";
import * as H from "./PopSilence.js";
import * as I from "./GameSceneInstance.js";

function main() {
    var M, k, x, F, W, G, Z, U, V, z, q, K, J, Y, j, X, Q, $, ee, te, ne, oe, ie, ae, se, _e, re, le, he, ce, de, ue, me, ge, ye, pe, be, Ae, fe, Ce, Se, Be, ve, Te, Re, Ee, Ne, Oe, De, we, Pe, Le, He, Ie, Me, ke, xe, Fe, We, Ge, Ze, Ue, Ve, ze, qe;
    o._RF.push({}, "4b0b8EZHTpAdrouEFw2lDAh", "HumanboyGameScene", void 0);
    let Ke = e("eHumanboyLocalZorder", function(e) {
            return e[e.HL_ZORDER_DUMMY = 0] = "HL_ZORDER_DUMMY", e[e.HL_ZORDER_IMG_HEAD = 9] = "HL_ZORDER_IMG_HEAD", e[e.HL_ZORDER_IMG_HEAD_TXT = 10] = "HL_ZORDER_IMG_HEAD_TXT", e[e.HL_ZORDER_IMG_HEAD_FLAG = 11] = "HL_ZORDER_IMG_HEAD_FLAG", e[e.HL_ZORDER_IMG_WIN_COUNT = 12] = "HL_ZORDER_IMG_WIN_COUNT", e[e.HL_ZORDER_COIN_POOL = 13] = "HL_ZORDER_COIN_POOL", e[e.HL_ZORDER_ANIM_NODE = 14] = "HL_ZORDER_ANIM_NODE", e[e.HL_ZORDER_ANIM_NODE_0 = 15] = "HL_ZORDER_ANIM_NODE_0", e[e.HL_ZORDER_ANIM_NODE_1 = 16] = "HL_ZORDER_ANIM_NODE_1", e[e.HL_ZORDER_ANIM_NODE_2 = 17] = "HL_ZORDER_ANIM_NODE_2", e[e.HL_ZORDER_ANIM_NODE_3 = 18] = "HL_ZORDER_ANIM_NODE_3", e[e.HL_ZORDER_PANEL_COUNT_DOWN = 19] = "HL_ZORDER_PANEL_COUNT_DOWN", e[e.HL_ZORDER_PANEL_ADVANCE_AUTO_SELECT = 20] = "HL_ZORDER_PANEL_ADVANCE_AUTO_SELECT", e[e.HL_ZORDER_PANEL_REWRAD_TIP = 21] = "HL_ZORDER_PANEL_REWRAD_TIP", e[e.HL_ZORDER_PANEL_RED_PACKET = 22] = "HL_ZORDER_PANEL_RED_PACKET", e[e.HL_ZORDER_PANEL_AUTO_SELECT = 23] = "HL_ZORDER_PANEL_AUTO_SELECT", e[e.HL_ZORDER_PANEL_JACKPOT = 24] = "HL_ZORDER_PANEL_JACKPOT", e[e.HL_ZORDER_PANEL_RECORD = 25] = "HL_ZORDER_PANEL_RECORD", e[e.HL_ZORDER_PANEL_DEALERLIST = 26] = "HL_ZORDER_PANEL_DEALERLIST", e[e.HL_ZORDER_PANEL_SETTING = 27] = "HL_ZORDER_PANEL_SETTING", e[e.HL_ZORDER_PANEL_GUID = 28] = "HL_ZORDER_PANEL_GUID", e[e.HL_ZORDER_PANEL_SERVER_TOAST = 29] = "HL_ZORDER_PANEL_SERVER_TOAST", e
        }({})),
        Je = e("eHumanboyDealerBtnStatus", function(e) {
            return e[e.HDB_STATUS_NONE = 0] = "HDB_STATUS_NONE", e[e.HDB_STATUS_DEALER_UP = 1] = "HDB_STATUS_DEALER_UP", e[e.HDB_STATUS_DEALER_DOWN = 2] = "HDB_STATUS_DEALER_DOWN", e
        }({}));
    class Ye {
        constructor() {
            this.eZone = I.humanboy_proto.BetZoneOption.BetZoneOption_DUMMY, this.eWayOutStyle = u.eGameboyWayOutStyle.GWS_NONE, this.index = 0, this.iWayOutLoseLimitCount = 0, this.panelArea = null, this.panelCoin = null, this.panelCard = null, this.panelWayOut = null, this.panelBorder = null, this.imgCardTypeBg = null, this.imgCardTypeTxt = null, this.txtSelfBetNum = null, this.txtTotalBetNum = null, this.rtxtWayOut = null, this.txtOdds = null, this.vCoinQueue = new i, this.vCardsNode = [], this.vCardsSrcPos = [], this.vWayOutImg = [], this.vWayOutImgSrcPos = []
        }
    }
    e("tHumanboyAreaInfo", Ye);
    class je {
        constructor() {
            this.uid = 0, this.imgBg = null, this.nodeHead = null, this.txtCoin = null, this.imgFlag = null
        }
    }
    e("tHumanboyPlayerInfo", je);
    class Xe {
        constructor() {
            this.index = 0, this.txtName = null, this.txtGold = null, this.imgGold = null, this.imgHead = null, this.imgHeadBox = null, this.imgIcon = null, this.imgBeDealerNum = null, this.rtxtBeDealerNum = null
        }
    }
    e("tHumanboyDealerInfo", Xe);
    class Qe {
        constructor() {
            this.nAreaIdx = 0, this.nGold = 0, this.nUid = 0, this.bAnim = !1, this.bHeadAnim = !1, this.bPlaySound = !1
        }
    }
    e("tHumanboyCoinOptimization", Qe);
    class $e {
        constructor() {
            this.audioId = 0, this.duringTime = 0, this.startPlayTime = 0, this.bGoOn = !1, this.func = null
        }
    }
    const {
        ccclass: et,
        property: tt
    } = cc._decorator;
    e("HumanboyGameScene", (M = tt(cc.Prefab), k = tt(cc.Prefab), x = tt(cc.Prefab), F = tt(cc.Prefab), W = tt(cc.Prefab), G = tt(cc.Prefab), Z = tt(cc.Prefab), U = tt(cc.Prefab), V = tt(cc.Prefab), z = tt(cc.Prefab), q = tt(cc.Prefab), K = tt(cc.Prefab), J = tt(cc.Prefab), Y = tt(cc.Prefab), j = tt(cc.Prefab), X = tt(cc.Prefab), Q = tt(cc.Prefab), $ = tt(cc.Prefab), ee = tt(cc.Prefab), te = tt(cc.Prefab), ne = tt(cc.Prefab), oe = tt(cc.Prefab), ie = tt(cc.Prefab), ae = tt(cc.Prefab), se = tt(cc.Prefab), _e = tt(cc.Prefab), re = tt(cc.Prefab), le = tt(cc.Prefab), he = tt(cc.Prefab), ce = tt(cc.Prefab), de = H(), et(((qe = class e extends cc.Component {
        constructor(...e) {
            super(...e), t(this, "prefab_dz_jackPotNumber", ge, this), t(this, "prefab_cb_win_player_light", ye, this), t(this, "prefab_cb_exchange", pe, this), t(this, "prefab_cb_rule", be, this), t(this, "prefab_cb_soundSetting", Ae, this), t(this, "prefab_cb_exit", fe, this), t(this, "prefab_hb_win_flag", Ce, this), t(this, "prefab_hb_start_bets", Se, this), t(this, "prefab_hb_end_bets", Be, this), t(this, "prefab_hb_dealer_victory_zh_CN", ve, this), t(this, "prefab_hb_dealer_victory_en_US", Te, this), t(this, "prefab_hb_dealer_defeat_zh_CN", Re, this), t(this, "prefab_hb_dealer_defeat_en_US", Ee, this), t(this, "prefab_hb_way_out", Ne, this), t(this, "prefab_hb_flutterScore", Oe, this), t(this, "prefab_hb_betCoin", De, this), t(this, "prefab_hb_toast", we, this), t(this, "prefab_hb_guid", Pe, this), t(this, "prefab_hb_menu", Le, this), t(this, "prefab_hb_advancedSetting", He, this), t(this, "prefab_hb_advancedAuto", Ie, this), t(this, "prefab_hb_dialog", Me, this), t(this, "prefab_hb_jackPot", ke, this), t(this, "prefab_hb_dealerList", xe, this), t(this, "prefab_hb_playerList", Fe, this), t(this, "prefab_hb_chart", We, this), t(this, "prefab_hb_rewardTips", Ge, this), t(this, "prefab_luckButton", Ze, this), t(this, "points_ani_prefab", Ue, this), t(this, "popSilencePre", Ve, this), this.points_node = null, this._msInterval = 1, this._msNowTime = 0, this._msLastTime = 0, this._nLeftTime = 0, this._nMinTime = 0, this._panel_game = null, this._panel_top = null, this._panel_bottom = null, this._panel_self = null, this._panel_betbtn = null, this._panel_jackpot = null, this._panel_dealer = null, this._panel_dealer_extra = null, this._rtxt_dealer_extra = null, this._btn_dealer_extra = null, this._img_dealer_card_type = null, this._img_dealer_card_shield = null, this._txt_shared_limit_word = null, this._txt_shared_limit_amount = null, this._vBottomBetBtns = [], this._vDealerInfo = [], this._vDealerCardNode = [], this._vDealerCardSrcPos = [], this._txt_self_name = null, this._txt_self_gold = null, this._img_self_gold = null, this._img_self_head = null, this._src_bet_clock_pos = cc.Vec2.ZERO, this._img_bet_clock = null, this._img_count_down = null, this._btn_menu = null, this._btn_record = null, this._btn_playerList = null, this._btn_betAuto = null, this._btn_betClean = null, this._btn_redpacket_festival = null, this._btn_redpacket_festival_layer = null, this._luckButton = null, this._vJackPotNumberList = [], this._vOtherPlayerInfo = [], this._vAreasInfo = [], this._vBetButtons = [], this._mapSounds = new s, this._mapBetAreaLimitAmount = new s, this._nodeAnim = null, this._nodeCoinPool = null, this._llCoinPoolZOrderCount = 0, this._vNodeWinFlagAnims = [], this._vAtlWinFlagActions = [], this._nodeFightBeginAnim = null, this._atlFightBeginAction = null, this._nodeFightEndAnim = null, this._atlFightEndAction = null, this._nodeDealerVictoryAnim = null, this._atlDealerVictoryAction = null, this._nodeDealerDefeatAnim = null, this._atlDealerDefeatAction = null, this._nodeWayoutLightAnim = null, this._atlWayoutLightAction = null, this._nBetBtnNum = 5, this._fBetBtnSrcScaleRate = .75, this._fBetBtnTarScaleRate = 1, this._fFlyCoinScaleRate = .5, this._nCurBetBtnIndex = -1, this._nAreaCoinLimitCountMin = 100, this._nAreaCoinLimitCountMax = 200, this._nSendCardsTotalNum = 0, this._nSendCardsCallBackNum = 0, this._nMergeAutoBetNum = 0, this._bWaitting = !1, this._nWaittingTime = 0, this._fActExecute_RoundStart = 0, this._fActDelayed_SendCard = 0, this._fActExecute_SendCard = 1, this._fActDelayed_FightBegin = 0, this._fActExecute_FightBegin = 1, this._fActExecute_BetClock = .5, this._fActDelayed_FightEnd = .5, this._fActExecute_FightEnd = 1, this._fActDelayed_ShowCard_Step_1 = .2, this._fActDelayed_ShowCard_Step_2 = .2, this._fActExecute_ShowCard_Step_1 = .2, this._fActExecute_ShowCard_Step_2 = .2, this._fActDelayed_ShowWinFlag = .5, this._fActExecute_WinFlag = 2.5, this._fActDelayed_HideWinFlag = 1, this._fActExecute_WayOut = 1, this._fActExecute_WayOutLight = 1.2, this._fActDelayed_VictoryOrDefeat = .5, this._fActExecute_VictoryOrDefeat = 2, this._fActDelayed_JackPot = .5, this._fActExecute_JackPot = 2.5, this._fActDelayed_LuckBlow = .5, this._fActExecute_LuckBlow_1 = 0, this._fActExecute_LuckBlow_2 = 3.5, this._fActExecute_LuckBlow_3 = 7.5, this._fActDelayed_LuckBlowHightLight = .5, this._fActExecute_LuckBlowHightLight = 1, this._fActDelayed_FlyWinCoin = .5, this._fActExecute_FlyWinCoin = 1.5, this._fActExecute_FlyWinCoinEnd = 2, this._strCardFacePath = "zh_CN/game/cowboy/card_type_0/", this._strCardBackPath = "zh_CN/game/humanboy/card_type_0/", this._sound_BGM = "zh_CN/game/cowboy/audio/back", this._sound_begin_bet = "zh_CN/game/cowboy/audio/begin_bet", this._sound_end_bet = "zh_CN/game/cowboy/audio/end_bet", this._sound_kaipai = "zh_CN/game/cowboy/audio/kaipai", this._sound_fapai = "zh_CN/game/cowboy/audio/fapai", this._sound_start_round = "zh_CN/game/cowboy/audio/half_time", this._sound_betin = "zh_CN/game/cowboy/audio/chip", this._sound_betin_many = "zh_CN/game/cowboy/audio/hechip", this._sound_win_lose = "zh_CN/game/cowboy/audio/bx_getCoin", this._sound_get_win_coin = "zh_CN/game/cowboy/audio/bigying", this._sound_button = "zh_CN/game/cowboy/audio/press", this._sound_time_tick = "zh_CN/game/cowboy/audio/time", this._sound_dealer_vd = "zh_CN/game/cowboy/audio/dealer_vd", this._sound_special_card_type_small = "zh_CN/game/cowboy/audio/special_card_type_small", this._sound_special_card_type_middle = "zh_CN/game/cowboy/audio/special_card_type_middle", this._sound_special_card_type_big = "zh_CN/game/cowboy/audio/special_card_type_big", this._sound_jackpot = "zh_CN/game/cowboy/audio/jackpot", this.silenceMusic = "zh_CN/game/dzpoker/audio/silence", this._dealerListView = null, this._btnStatus = Je.HDB_STATUS_NONE, this._eAutoBtnStyle = u.eGameboyAutoBtnStyle.GAB_STYLE_NONE, this._eGameboyScreenType = u.eGameboyScreenType.GST_SCREEN_NORMAL, this._humanboyGuid = null, this._humanboyMenu = null, this._humanboyAdvancedSetting = null, this._humanboyAdvancedAuto = null, this._humanboyChart = null, this._humanboyJackpot = null, this._humanboyPlayerList = null, this._humanboyExchange = null, this._humanboySetting = null, this._humanboyRewardTips = null, this._atlas_cb_language = null, this._atlas_hb_language = null, this._atlas_hb_humanboy = null, this._vCoinOptimizationDeque = new i, this._isEnterBackground = !1, this._effectMap = new s, this._bSwitchTable = !1, t(this, "gameSceneInstance", ze, this)
        }
        onLoad() {
            _.config.setCurrentScene(_.Enum.SCENE.HUMANBOY_SCENE), _.config.adaptScreenHen(this.node), _.resMgr.adaptWidget(this.node, !0)
        }
        start() {
            var e, t;
            this._init(), this.gameSceneInstance && this.gameSceneInstance.gameData && this.gameSceneInstance.gameData.tRoomData && (this.gameSceneInstance.gameData.tRoomData.m_bIsReconnectMode = !0), _.roomManager.RequestJoinRoom(null == (e = this.gameSceneInstance) || null == (e = e.room) ? void 0 : e.getCurrentGameID(), null == (t = this.gameSceneInstance) || null == (t = t.room) ? void 0 : t.getCurrentRoomID())
        }
        onDestroy() {
            this._removeObserver()
        }
        update(e) {
            this._msNowTime += e;
            let t = this._msNowTime - this._msLastTime;
            t >= this._msInterval && (this._msLastTime = this._msNowTime - (t - this._msInterval), --this._nLeftTime), this._updateCoinOptimization(e)
        }
        _init() {
            _.SHOP.msgNode.active = !1, _.viewAdaptive.isselfchange = !1, _.viewAdaptive.humanboyroomid = 0, _.pushNotice.setPushNoticeType(PushNoticeType.PUSH_HUMANBOY), _.native.isFullScreen() && (e.g_fullScreenOffset.x = _.native.isScreenLandscape() ? _.viewAdaptive.IPHONEX_OFFSETY : 0, e.g_fullScreenOffset.y = _.native.isScreenLandscape() ? 0 : _.viewAdaptive.IPHONEX_OFFSETY), this._initAtlasList(), this._initUI(), this._initBetAreaLimit(), this._initJackPot(), this._initBtnsEvents(), this._initDealerInfo(), this._initPlayersInfo(), this._initBetAreas(), this._initCoinPool(), this._initBetButtons(), this._initTimelineAnims(), this._initGuid(), this._adaptiveScreen(), this._initRedPackage(), this._adaptiveBetBtnPanel(), this._onMsgSoundSwitch(), this._addObserver(), this._resetAllUI()
        }
        _initAtlasList() {
            this._atlas_hb_humanboy = _.resMgr.getSpriteAtlas("zh_CN/game/humanboyPlist/humanboy"), this._atlas_cb_language = _.resMgr.getSpriteAtlas(_.config.getLanguagePath("game/cowboyPlist/language")), this._atlas_hb_language = _.resMgr.getSpriteAtlas(_.config.getLanguagePath("game/humanboyPlist/language"))
        }
        _addObserver() {
            _.MessageCenter.register("switchSceneBegan", this._onMsgSwitchSceneBegan.bind(this), this.node), _.MessageCenter.register("on_recharge_notify", this._onMsgRecharge.bind(this), this.node), _.MessageCenter.register("on_humanboy_sound_switch_notify", this._onMsgSoundSwitch.bind(this), this.node), _.MessageCenter.register("on_humanboy_server_error", this._onMsgGameError.bind(this), this.node), _.MessageCenter.register("on_humanboy_kick_notify", this._onMsgKick.bind(this), this.node), _.MessageCenter.register("on_humanboy_gamedata_syn_notify", this._onMsgGameDataSyn.bind(this), this.node), _.MessageCenter.register("on_humanboy_room_param_change_notify", this._onMsgRoomParamChange.bind(this), this.node), _.MessageCenter.register("on_humanboy_willstart_notify", this._onMsgWillStartNotify.bind(this), this.node), _.MessageCenter.register("on_humanboy_deal_notify", this._onMsgGameDeal.bind(this), this.node), _.MessageCenter.register("on_humanboy_start_bet_notify", this._onMsgGameStartBet.bind(this), this.node), _.MessageCenter.register("on_humanboy_game_round_end_notify", this._onMsgGameRoundEnd.bind(this), this.node), _.MessageCenter.register("on_humanboy_bet_notify", this._onMsgBet.bind(this), this.node), _.MessageCenter.register("on_humanboy_auto_bet", this._onMsgAutoBet.bind(this), this.node), _.MessageCenter.register("on_humanboy_merge_auto_bet_act", this._onMsgMergeAutoBetAct.bind(this), this.node), _.MessageCenter.register("on_humanboy_merge_auto_bet_end", this._onMsgMergeAutoBetEnd.bind(this), this.node), _.MessageCenter.register("on_humanboy_bet_amount_level_change", this._onMsgBetAmountLevelChange.bind(this), this.node), _.MessageCenter.register("on_humanboy_advance_autobet_set", this._onMsgAdvanceAutobetSet.bind(this), this.node), _.MessageCenter.register("on_humanboy_advance_autobet", this._onMsgAdvanceAutobet.bind(this), this.node), _.MessageCenter.register("on_humanboy_advance_autobet_cancel", this._onMsgAdvanceAutobetCancel.bind(this), this.node), _.MessageCenter.register("on_humanboy_dealer_list", this._onMsgDealerList.bind(this), this.node), _.MessageCenter.register("on_humanboy_dealer_up", this._onMsgDealerUp.bind(this), this.node), _.MessageCenter.register("on_humanboy_dealer_up_notify", this._onMsgDealerUpNotify.bind(this), this.node), _.MessageCenter.register("on_humanboy_kickdealerapply_notify", this._onMsgKickDealerApplyNotify.bind(this), this.node), _.MessageCenter.register("on_humanboy_dealer_cancel_wait", this._onMsgDealerCancelWait.bind(this), this.node), _.MessageCenter.register("on_humanboy_dealer_down", this._onMsgDealerDown.bind(this), this.node), _.MessageCenter.register("on_humanboy_dealer_down_notify", this._onMsgDealerDownNotify.bind(this), this.node), _.MessageCenter.register("on_update_humanboy_playerlist_notify", this._onMsgPlayerList.bind(this), this.node), _.MessageCenter.register("showMedalMsg", this._onMsgRewardTips.bind(this), this.node), _.MessageCenter.register("update_gold", this._onMsgUpdateWorldServerGold.bind(this), this.node), _.MessageCenter.register("showLuckButton", this.onShowLuckButton.bind(this), this.node), _.MessageCenter.register("turntableResultNotice", this.onTurntableResultNotice.bind(this), this.node), _.MessageCenter.register("goldViewShop", this.onGoldViewShop.bind(this), this.node), _.MessageCenter.register("onNoticeOpenCalmDownWindow", this.onCalmDownShowTip.bind(this), this.node), _.MessageCenter.register("onCalmDownMsg", this.onCalmDownShowTip.bind(this), this.node), _.config.isSiyuType() ? (_.MessageCenter.register("on_syOnEnterBackground", this.OnAppEnterBackground.bind(this), this.node), _.MessageCenter.register("on_syOnEnterForeground", this.OnAppEnterForeground.bind(this), this.node)) : (cc.game.on(cc.game.EVENT_HIDE, this.OnAppEnterBackground, this), cc.game.on(cc.game.EVENT_SHOW, this.OnAppEnterForeground, this))
        }
        _removeObserver() {
            _.MessageCenter.unregister("switchSceneBegan", this.node), _.MessageCenter.unregister("on_recharge_notify", this.node), _.MessageCenter.unregister("on_humanboy_sound_switch_notify", this.node), _.MessageCenter.unregister("on_humanboy_server_error", this.node), _.MessageCenter.unregister("on_humanboy_kick_notify", this.node), _.MessageCenter.unregister("on_humanboy_gamedata_syn_notify", this.node), _.MessageCenter.unregister("on_humanboy_room_param_change_notify", this.node), _.MessageCenter.unregister("on_humanboy_willstart_notify", this.node), _.MessageCenter.unregister("on_humanboy_deal_notify", this.node), _.MessageCenter.unregister("on_humanboy_start_bet_notify", this.node), _.MessageCenter.unregister("on_humanboy_game_round_end_notify", this.node), _.MessageCenter.unregister("on_humanboy_bet_notify", this.node), _.MessageCenter.unregister("on_humanboy_auto_bet", this.node), _.MessageCenter.unregister("on_humanboy_merge_auto_bet_act", this.node), _.MessageCenter.unregister("on_humanboy_merge_auto_bet_end", this.node), _.MessageCenter.unregister("on_humanboy_bet_amount_level_change", this.node), _.MessageCenter.unregister("on_humanboy_advance_autobet_set", this.node), _.MessageCenter.unregister("on_humanboy_advance_autobet", this.node), _.MessageCenter.unregister("on_humanboy_advance_autobet_cancel", this.node), _.MessageCenter.unregister("on_humanboy_dealer_list", this.node), _.MessageCenter.unregister("on_humanboy_dealer_up", this.node), _.MessageCenter.unregister("on_humanboy_dealer_up_notify", this.node), _.MessageCenter.unregister("on_humanboy_kickdealerapply_notify", this.node), _.MessageCenter.unregister("on_humanboy_dealer_cancel_wait", this.node), _.MessageCenter.unregister("on_humanboy_dealer_down", this.node), _.MessageCenter.unregister("on_humanboy_dealer_down_notify", this.node), _.MessageCenter.unregister("on_update_humanboy_playerlist_notify", this.node), _.MessageCenter.unregister("showMedalMsg", this.node), _.MessageCenter.unregister("update_gold", this.node), _.MessageCenter.unregister("showLuckButton", this.node), _.MessageCenter.unregister("turntableResultNotice", this.node), _.MessageCenter.unregister("goldViewShop", this.node), _.MessageCenter.unregister("onNoticeOpenCalmDownWindow", this.node), _.MessageCenter.unregister("onCalmDownMsg", this.node), _.config.isSiyuType() ? (_.MessageCenter.unregister("on_syOnEnterBackground", this.node), _.MessageCenter.unregister("on_syOnEnterForeground", this.node)) : (cc.game.off(cc.game.EVENT_HIDE, this.OnAppEnterBackground, this), cc.game.off(cc.game.EVENT_SHOW, this.OnAppEnterForeground, this))
        }
        OnAppEnterBackground() {
            cc.sys.os == cc.sys.OS_ANDROID ? (_.AudioMgr.stopMusic(), _.AudioMgr.pauseAll()) : _.tools.isPlayMusic() || _.AudioMgr.play(this.silenceMusic, !0, .5, !0), _.tools.setEnterbackState(!0), this._effectMap.forEach(((e, t, n) => {
                cc.audioEngine.stopEffect(t.audioId), this.unschedule(t.func)
            })), this._effectMap.clear(), this._isEnterBackground = !0, this.node.stopAllActions(), this.unscheduleAllCallbacks()
        }
        OnAppEnterForeground() {
            _.tools.setEnterbackState(!1), cc.sys.os == cc.sys.OS_ANDROID ? (_.AudioMgr.resumeAll(), this._onMsgSoundSwitch()) : _.tools.isPlayMusic() || _.AudioMgr.stop(_.AudioMgr.getAudioID(this.silenceMusic)), this._isEnterBackground = !1
        }
        _clearData() {
            this._removeObserver(), this._stopSound("", !0), _.AudioMgr.stopMusic(), this._resetAllUI(), l.getHumanboyRoom().reset()
        }
        _backToRoomListScene() {
            var e;
            _.netWorkManager.closeGameConnect(!1, _.Enum.GameId.HumanBoy), this._clearData(), _.viewAdaptive.isselfchange = !1, _.viewAdaptive.humanboyroomid = 0;
            const t = null == (e = L.getInstance(this.node)) ? void 0 : e.room;
            null == t || t.reset(), _.action.switchScene(_.Enum.SCENE.HALL_SCENE, (e => {
                _.MessageCenter.send("switchSceneToMiniGame")
            }))
        }
        _backToMainScene(e) {
            _.netWorkManager.closeGameConnect(!1, _.Enum.GameId.HumanBoy), this._clearData(), l.getHumanboyRoom().sBackToMainTips = _.String(e), _.action.switchScene(_.Enum.SCENE.HALL_SCENE)
        }
        _resetAllUI() {
            this._resetGameView(), this._resetOtherView(), this._updateGameView()
        }
        _resetGameView() {
            this._resetLeftTime(), this._resetAllCards(), this._resetAllBetAreaLimitAmount(), this._resetAllBetAreas(), this._restAllTimelineAnims(), this._showBetClockAction(!1, !1), this._showNextRoundCountDown(!1, 0), this._showNextRoundEnterCountDown(!1, 0), this._showWaittingTime(!1), this._nSendCardsCallBackNum = 0, this._nMergeAutoBetNum = 0, this.resetPointAni()
        }
        _resetOtherView() {
            this._dealerListView && this._dealerListView.hide(!1)
        }
        _updateGameView() {
            this._updateJackPotNum(), this._updateBetAmountLevel(), this._updateBetOddsDetail(), this._updateBetButtonState(), this._updateBetAreaTouchEnabled(), this._updateDealerInfo(), this._updateSelfInfo(), this._updateOtherPlayersInfo(), this._updateAllPlayerWinCount()
        }
        _createFlyCoin(e) {
            let t = cc.instantiate(this.prefab_hb_betCoin);
            t.zIndex = 0, t.setAnchorPoint(.5, .5), t.setScale(this._fFlyCoinScaleRate), t.setPosition(cc.Vec2.ZERO);
            let n = t.getComponent(B);
            return n.setShape(this._getBetCoinShapeByAmount(e)), n.setTxtNum(_.StringTools.serverGoldToShowNumber(e)), n.btn.enabled = !1, n
        }
        _getBetCoinShapeByAmount(e) {
            return _.StringTools.clientGoldByServer(e) < l.getHumanboyRoom().llCoinUICritical ? B.eHumanboyBetCoinShape.SHAPE_COIN : B.eHumanboyBetCoinShape.SHAPE_BLOCK
        }
        _getCoinRandomPos(e, t, n) {
            if (!e || t < 0 || t >= this._vAreasInfo.length) return cc.Vec2.ZERO;
            let o = this._vAreasInfo[t].panelCoin.getContentSize(),
                i = cc.size(cc.Size.ZERO);
            i.width = e.width * e.scaleX, i.height = e.height * e.scaleY;
            let a = o.width / 2,
                s = o.height / 2,
                r = Math.floor(a - i.width / 2),
                l = Math.floor(s - i.height / 2),
                h = _.StringTools.randomRange(0, 2) < 1 ? -1 : 1,
                c = _.StringTools.randomRange(0, 2) < 1 ? -1 : 1,
                d = h * _.StringTools.randomRange(0, r),
                u = c * _.StringTools.randomRange(0, l),
                m = cc.v2(d, u);
            return n && this._vAreasInfo[t].panelCoin.convertToWorldSpaceAR(m, m), m
        }
        _getCoinFromPool(e, t) {
            let n = null;
            if (e >= 0 && e < this._vAreasInfo.length) {
                let o = this._vAreasInfo[e].vCoinQueue;
                o.size() < this._nAreaCoinLimitCountMin ? (n = this._createFlyCoin(t), n.node.zIndex = ++this._llCoinPoolZOrderCount, n.node.setPosition(cc.Vec2.ZERO), this._nodeCoinPool.addChild(n.node), o.push_back(n)) : (n = o.pop_front(), n = this._resetCoin(n), n && (n.node.zIndex = ++this._llCoinPoolZOrderCount, n.setShape(this._getBetCoinShapeByAmount(t)), n.setTxtNum(_.StringTools.serverGoldToShowNumber(t)), o.push_back(n)))
            }
            return n
        }
        _getFreeCoinCountFromPool(e) {
            let t = 0;
            if (e >= 0 && e < this._vAreasInfo.length) {
                let n = this._vAreasInfo[e].vCoinQueue;
                for (let e = 0; e < n.size(); ++e) n.at(e).node.active || ++t
            }
            return t
        }
        _updateCoinOptimization(e) {
            let t = this._vCoinOptimizationDeque.size();
            if (!(t <= 0))
                if (l.getHumanboyRoom().eCurState === I.humanboy_proto.RoundState.BET && this._getLeftTime() >= 0) {
                    let e = 0;
                    this._getLeftTime() > 1 ? (e = t / cc.game.getFrameRate(), e = Math.ceil(e)) : e = t;
                    for (let t = 0; t < e; ++t) {
                        let e = this._vCoinOptimizationDeque.pop_front();
                        this._showCoinAnim(e.nAreaIdx, e.nGold, e.nUid, e.bAnim, e.bHeadAnim, e.bPlaySound), this._updateBettAreaLimitAmount(this._getAreaIdxByBetOption(e.nAreaIdx), -e.nGold), this._updatePlayerGold(e.nUid), l.getHumanboyRoom().tSelfPlayer.uid === e.nUid && this._updateBetButtonState()
                    }
                } else {
                    for (let e = 0; e < t; ++e) {
                        let e = this._vCoinOptimizationDeque.pop_front();
                        this._updateBettAreaLimitAmount(this._getAreaIdxByBetOption(e.nAreaIdx), -e.nGold), this._updatePlayerGold(e.nUid), l.getHumanboyRoom().tSelfPlayer.uid === e.nUid && this._updateBetButtonState()
                    }
                    this._vCoinOptimizationDeque.clear()
                }
        }
        _showCoinAnim(e, t, n, o, i, a, s = null) {
            if (!(e < 0 || e >= this._vAreasInfo.length))
                if (o) {
                    let o = this._getPlayerCoinNodesByUid(n);
                    0 === _.StringTools.getArrayLength(o) && (console.log(_.StringTools.formatC("HumanboyMainView.showBetInAnim, cannot find valid headBg, use btnPlayerList, oneBet.uid: %d", n)), o.push(this._btn_playerList));
                    let r = cc.Vec2.ZERO,
                        h = cc.Vec2.ZERO;
                    for (let c = 0; c < o.length; ++c) {
                        let d = o[c];
                        if (d.parent.convertToWorldSpaceAR(d.position, r), i && d != this._img_self_gold.node && cc.director.getActionManager().getNumberOfRunningActionsInTarget(d) <= 0) {
                            let e = 20,
                                t = 0,
                                n = null;
                            n = r.x < cc.winSize.width / 2 ? cc.sequence(cc.moveBy(.1, cc.v2(-e, 0)), cc.moveBy(.1, cc.v2(e, t)).easing(cc.easeInOut(1))) : cc.sequence(cc.moveBy(.1, cc.v2(e, t)), cc.moveBy(.1, cc.v2(-e, t)).easing(cc.easeInOut(1))), n && d.runAction(n)
                        }
                        if (!(n === _.dataHandler.getUserData().u32Uid && c > 0)) {
                            let n = this._getCoinFromPool(e, t);
                            if (n)
                                if (n.node.setPosition(n.node.parent.convertToNodeSpaceAR(r)), 0 === c) {
                                    if (a) {
                                        let e = _.StringTools.clientGoldByServer(t) < l.getHumanboyRoom().llCoinUICritical ? this._sound_betin : this._sound_betin_many;
                                        this._playSoundEffect(e)
                                    }
                                    h = this._getCoinRandomPos(n.node, e, !0), n.node.parent.convertToNodeSpaceAR(h, h), n.node.active = !0, n.node.runAction(cc.sequence(cc.moveTo(.3, h), cc.rotateBy(.15, 180), cc.rotateBy(.15, 180), cc.callFunc(s, this)))
                                } else n.node.active = !0, n.node.runAction(cc.sequence(cc.moveTo(.3, h), cc.rotateBy(.15, 180), cc.rotateBy(.15, 180), cc.callFunc((() => {
                                    n.node.active = !1
                                }))))
                        }
                    }
                } else {
                    let n = this._getCoinFromPool(e, t);
                    if (n) {
                        let t = this._getCoinRandomPos(n.node, e, !0);
                        n.node.setPosition(n.node.parent.convertToNodeSpaceAR(t)), n.node.active = !0
                    }
                    s && s()
                }
        }
        _showCoinAnimFromPos(e, t, n, o, i, a = null) {
            if (t < 0 || t >= this._vAreasInfo.length) return;
            let s = this._getCoinFromPool(t, n);
            if (!s) return;
            let _ = cc.Vec2.ZERO;
            s.node.parent.convertToNodeSpaceAR(e, _);
            let r = this._getCoinRandomPos(s.node, t, !0);
            s.node.parent.convertToNodeSpaceAR(r, r), o ? (s.node.setPosition(_), this.scheduleOnce((e => {
                s.node.active = !0, s.node.runAction(cc.sequence(cc.moveTo(.5, r).easing(cc.easeOut(.8)), cc.rotateBy(.15, 180), cc.rotateBy(.15, 180), cc.callFunc(a, this)))
            }), i)) : (s.node.active = !0, s.node.setPosition(r), a && a())
        }
        _resetCoin(e) {
            return e && cc.isValid(e, !0) ? (e.node.zIndex = 0, e.node.opacity = 255, e.node.angle = 0, e.node.setPosition(cc.Vec2.ZERO), e.node.stopAllActions(), e.node.active = !1, e.txtBetNode.opacity = 255, e.txtBetNode.active = !0, e.btn.enabled = !1, e.imgMask.node.active = !1, e) : null
        }
        _resetBetAreaCoins(e) {
            let t = this._getAreaIdxByBetOption(e);
            if (t < 0 || t >= this._vAreasInfo.length) return;
            let n = this._vAreasInfo[t].vCoinQueue.size();
            for (let e = 0; e < n; ++e) {
                let n = this._vAreasInfo[t].vCoinQueue.at(e);
                this._resetCoin(n)
            }
        }
        _resetAllBetAreaCoins() {
            for (let e = 0; e < this._vAreasInfo.length; ++e) this._resetBetAreaCoins(this._vAreasInfo[e].eZone);
            this._llCoinPoolZOrderCount = 0, this._vCoinOptimizationDeque.clear()
        }
        _recoverAreasCoin(e) {
            l.getHumanboyRoom().mapZoneData.forEach(((t, n) => {
                let o = this._getAreaIdxByBetOption(t);
                if (o < 0 || o >= this._vAreasInfo.length) return "continue";
                let i = 0,
                    a = n.vTotalBetDetail;
                for (let t = 0; t < a.length; ++t) i += a[t], e && this._showCoinAnim(o, a[t], 0, !1, !1, !1);
                this._updateBettAreaLimitAmount(t, -i)
            }))
        }
        _getCurBetLevel() {
            if (this._nCurBetBtnIndex < 0) return 0;
            return l.getHumanboyRoom().vBetCoinOption[this._nCurBetBtnIndex]
        }
        _getAreaIdxByBetOption(e) {
            for (let t = 0; t < this._vAreasInfo.length; ++t)
                if (this._vAreasInfo[t].eZone === e) return this._vAreasInfo[t].index;
            return -1
        }
        _getBetOptionByAreaIdx(e) {
            for (let t = 0; t < this._vAreasInfo.length; ++t)
                if (this._vAreasInfo[t].index === e) return this._vAreasInfo[t].eZone;
            return I.humanboy_proto.BetZoneOption.BetZoneOption_DUMMY
        }
        _getPlayerCoinNodesByUid(e) {
            let t = [];
            e === _.dataHandler.getUserData().u32Uid && t.push(this._img_self_gold.node);
            for (let n = 0; n < this._vOtherPlayerInfo.length; ++n) e > 0 && this._vOtherPlayerInfo[n].uid === e && t.push(this._vOtherPlayerInfo[n].nodeHead);
            return t
        }
        _getPlayerHeadNodesByUid(e) {
            let t = [];
            e === _.dataHandler.getUserData().u32Uid && t.push(this._img_self_head.node);
            for (let n = 0; n < this._vOtherPlayerInfo.length; ++n) e > 0 && this._vOtherPlayerInfo[n].uid === e && t.push(this._vOtherPlayerInfo[n].nodeHead);
            return t
        }
        _getBetDetailAmounts(e) {
            let t = l.getHumanboyRoom().tCurRoom.amountLevel;
            return u.disinteBetAmounts(e, t)
        }
        playEffectForPath(e) {
            if (this._effectMap.has(e)) {
                let t = this._effectMap.get(e),
                    n = cc.audioEngine.getState(t.audioId),
                    o = n == cc.audioEngine.AudioState.PLAYING;
                if (!0 === t.bGoOn && o) return;
                let i = (new Date).getTime();
                if (!1 === o) return void(n == cc.audioEngine.AudioState.PAUSED ? (console.log(" PAUSED", ", ", t), cc.audioEngine.resumeEffect(t.audioId), t.startPlayTime = i, this.schedule(t.func, t.duringTime)) : console.log(" !PAUSED state = ", n, ", ", t));
                console.log(" PLAYING", ", ", t), i > t.startPlayTime + .5 * t.duringTime * 1e3 && (t.bGoOn = !0)
            } else {
                let t = _.resMgr.get(e, cc.AudioClip),
                    n = _.AudioMgr.executePlayEffect(t, !0),
                    o = cc.audioEngine.getDuration(n),
                    i = new $e;
                i.audioId = n, i.bGoOn = !1, i.duringTime = o, i.startPlayTime = (new Date).getTime(), i.func = t => {
                    let n = this._effectMap.get(e);
                    n.startPlayTime = (new Date).getTime(), !1 === n.bGoOn && (cc.audioEngine.pauseEffect(n.audioId), console.log("yyx123 setCurrentTime"), cc.audioEngine.setCurrentTime(n.audioId, 0), this.unschedule(n.func)), n.bGoOn = !1
                }, this._effectMap.add(e, i), cc.audioEngine.setFinishCallback(n, (() => {
                    console.log("yyx123 setFinishCallback"), cc.audioEngine.stopEffect(n), this.unschedule(i.func), this._effectMap.remove(e)
                })), this.schedule(i.func, i.duringTime)
            }
        }
        ingorePutInQuenue(e) {
            return e != this._sound_begin_bet && e != this._sound_end_bet && e != this._sound_win_lose && e != this._sound_special_card_type_big && e != this._sound_time_tick
        }
        _playSoundEffect(e, t = !1) {
            _.tools.isSoundEffectOpen() && 0 == this._isEnterBackground && (this._mapSounds.has(e) || this._mapSounds.add(e, !0), cc.sys.isBrowser && this.ingorePutInQuenue(e) ? this.playEffectForPath(e) : _.AudioMgr.playEffect(e, t))
        }
        _pauseSound(e, t = !1) {
            if (t) this._mapSounds.forEach(((e, t, n) => {
                let o = _.AudioMgr.getAudioID(e);
                _.AudioMgr.pause(o)
            }));
            else {
                if (!this._mapSounds.has(e)) return;
                let t = _.AudioMgr.getAudioID(e);
                _.AudioMgr.pause(t)
            }
        }
        _resumeSound(e, t = !1) {
            if (t) this._mapSounds.forEach(((e, t, n) => {
                let o = _.AudioMgr.getAudioID(e);
                _.AudioMgr.resume(o)
            }));
            else {
                if (!this._mapSounds.has(e)) return;
                let t = _.AudioMgr.getAudioID(e);
                _.AudioMgr.resume(t)
            }
        }
        _stopSound(e, t = !1) {
            if (t) this._mapSounds.forEach(((e, t, n) => {
                let o = _.AudioMgr.getAudioID(e);
                _.AudioMgr.stop(o)
            }));
            else {
                if (!this._mapSounds.has(e)) return;
                let t = _.AudioMgr.getAudioID(e);
                _.AudioMgr.stop(t)
            }
        }
        _showGameToast(e) {
            let t = cc.instantiate(this.prefab_hb_toast).getComponent(C);
            t.txt.string = e, this.node.addChild(t.node, Ke.HL_ZORDER_PANEL_SERVER_TOAST);
            let n = cc.sequence(cc.delayTime(.1), cc.moveBy(1, cc.v2(0, 120))),
                o = cc.sequence(cc.delayTime(.4), cc.fadeOut(.8).easing(cc.easeInOut(1)), cc.destroySelf());
            t.node.runAction(n), t.node.runAction(o)
        }
        _setBetButtonSelected(e, t = !0) {
            if (e < 0 || e >= this._nBetBtnNum) return;
            this._resetAllBetButtons(!0), this._updateBetButtonState();
            let n = l.getHumanboyRoom().vBetCoinOption,
                o = l.getHumanboyRoom().tSelfPlayer.curCoin;
            if (e >= 0 && e < this._nBetBtnNum)
                if (t) {
                    let t = 0;
                    e < n.length && (t = n[e]), o > 0 && o >= t && (this._nCurBetBtnIndex = e, this._vBetButtons[e].node.setScale(this._fBetBtnTarScaleRate))
                } else this._nCurBetBtnIndex = e, this._vBetButtons[e].node.setScale(this._fBetBtnTarScaleRate)
        }
        _initUI() {
            this._panel_top = this.node.getChildByName("panel_top"), this._panel_bottom = this.node.getChildByName("panel_bottom"), this._btn_menu = this.node.getChildByName("btn_menu").getComponent(cc.Button), this._btn_record = this.node.getChildByName("btn_record").getComponent(cc.Button), this._panel_jackpot = this._panel_top.getChildByName("panel_jackpot"), this._panel_dealer_extra = this._panel_top.getChildByName("panel_dealer_extra"), this._panel_self = this._panel_bottom.getChildByName("panel_self"), this._panel_betbtn = this._panel_bottom.getChildByName("panel_betbtn"), this._img_count_down = this.node.getChildByName("img_count_down").getComponent(cc.Sprite), this._img_count_down.node.zIndex = Ke.HL_ZORDER_PANEL_COUNT_DOWN, this._img_count_down.node.active = !1;
            {
                let t = this.node.getChildByName("panel_game"),
                    n = this.node.getChildByName("panel_game_broad"),
                    o = this.node.getChildByName("panel_game_narrow");
                if (this._eGameboyScreenType = u.eGameboyScreenType.GST_SCREEN_NORMAL, _.native.isFullScreen()) {
                    let t = this.node.getChildByName("panel_left_playerlist"),
                        n = this.node.getChildByName("panel_right_playerlist"),
                        i = 0,
                        a = 0;
                    i += 2 * e.g_fullScreenOffset.x, i += o.width, i += t.width - 50, i += n.width - 50, i += a, i <= cc.winSize.width && (this._eGameboyScreenType = u.eGameboyScreenType.GST_SCREEN_NARROW)
                } else if (_.native.isWideScreen()) {
                    let e = 0,
                        t = 0;
                    e += this._panel_top.height, e += n.height, e += this._panel_bottom.height, e += t, e <= cc.winSize.height && (this._eGameboyScreenType = u.eGameboyScreenType.GST_SCREEN_BROAD)
                }
                switch (this._eGameboyScreenType) {
                    case u.eGameboyScreenType.GST_SCREEN_BROAD:
                        t.removeFromParent(!0), _.tools.destroyNode(t), o.removeFromParent(!0), _.tools.destroyNode(o), this._panel_game = n, _.resMgr.setSpriteFrame(this._panel_game, _.config.getLanguagePath("game/humanboy/humanboy_table_broad"));
                        break;
                    case u.eGameboyScreenType.GST_SCREEN_NARROW:
                        t.removeFromParent(!0), n.removeFromParent(!0), _.tools.destroyNode(t), _.tools.destroyNode(n), this._panel_game = o, _.resMgr.setSpriteFrame(this._panel_game, _.config.getLanguagePath("game/humanboy/humanboy_table_narrow"));
                        break;
                    case u.eGameboyScreenType.GST_SCREEN_NORMAL:
                    default:
                        n.removeFromParent(!0), o.removeFromParent(!0), _.tools.destroyNode(n), _.tools.destroyNode(o), this._panel_game = t, _.resMgr.setSpriteFrame(this._panel_game, _.config.getLanguagePath("game/humanboy/humanboy_table"))
                }
                this._panel_game.active = !0
            }
        }
        _initGuid() {
            let e = "humanboy_has_show_guide";
            "true" != _.tools.GetStringByCCFile(e) && (this._humanboyGuid || (this._humanboyGuid = cc.instantiate(this.prefab_hb_guid).getComponent(b), this.node.addChild(this._humanboyGuid.node, Ke.HL_ZORDER_PANEL_GUID)), this._humanboyGuid.setTouchSizeScale(0, 3), this._humanboyGuid.setDescString(_.config.getStringData("Humanboy_game_guide_text")), this._humanboyGuid.show(this._vAreasInfo[0].panelWayOut, (() => {
                _.tools.SaveStringByCCFile(e, "true"), this._showChart(I.humanboy_proto.BetZoneOption.POS1)
            }), !0))
        }
        _initJackPot() {
            for (let e = 0; e < 7; ++e) {
                let t = this._panel_jackpot.getChildByName("panel"),
                    n = cc.instantiate(this.prefab_dz_jackPotNumber);
                t.addChild(n);
                let o = n.getComponent(m);
                o.init(!1);
                for (let e = 0; e < 10; ++e) {
                    let t = _.StringTools.formatC("um_%d", e),
                        n = _.resMgr.getSpriteAtlasFrame("zh_CN/game/humanboyPlist/number", t);
                    o.setNumberImg(e, n)
                }
                o.setGameStyle(.31);
                let i = o.root.width * o.root.scaleX,
                    a = (o.root.height, o.root.scaleY, (t.width - 7 * i) / 6),
                    s = -t.width * t.anchorX + i * o.root.anchorX + (i + a) * e,
                    r = 0;
                o.node.setPosition(cc.v2(s, r)), o.hideBg(), this._vJackPotNumberList.push(o)
            }
        }
        _initBtnsEvents() {
            this._btn_menu.node.on("click", (e => {
                _.AudioMgr.playButtonSound("button_click"), this._humanboyMenu || (this._humanboyMenu = cc.instantiate(this.prefab_hb_menu).getComponent(A), this.node.addChild(this._humanboyMenu.node, Ke.HL_ZORDER_PANEL_SETTING), this._humanboyMenu.getBtnExchange().node.on("click", (e => {
                    this._playSoundEffect(this._sound_button), this._humanboyMenu.hide(!1), _.dataHandler.getUserData().usdt <= 0 ? _.TT.showMsg(_.config.getStringData("USDTView_ex_coin_error_0_usdt"), _.Enum.ToastType.ToastTypeError) : this._humanboyExchange ? this._humanboyExchange.openView() : (this._humanboyExchange = cc.instantiate(this.prefab_cb_exchange).getComponent(c), this.node.addChild(this._humanboyExchange.node, Ke.HL_ZORDER_PANEL_SETTING))
                })), this._humanboyMenu.getBtnRule().node.on("click", (e => {
                    this._playSoundEffect(this._sound_button), this._humanboyMenu.hide(!1)
                })), this._humanboyMenu.getBtnSoundSetting().node.on("click", (e => {
                    this._playSoundEffect(this._sound_button), this._humanboyMenu.hide(!1), this._humanboySetting ? (this._humanboySetting.initSwitch(), this._humanboySetting.node.active = !0) : (this._humanboySetting = cc.instantiate(this.prefab_cb_soundSetting).getComponent(d), this.node.addChild(this._humanboySetting.node, Ke.HL_ZORDER_PANEL_SETTING))
                })), this._humanboyMenu.getBtnAdvancedSetting().node.on("click", (e => {
                    this._playSoundEffect(this._sound_button), this._humanboyMenu.hide(!1), this._humanboyAdvancedSetting || (this._humanboyAdvancedSetting = cc.instantiate(this.prefab_hb_advancedSetting).getComponent(N), this.node.addChild(this._humanboyAdvancedSetting.node, Ke.HL_ZORDER_PANEL_SETTING)), this._humanboyAdvancedSetting.show()
                })), this._humanboyMenu.getBtnExit().node.on("click", (e => {
                    this._playSoundEffect(this._sound_button), this._humanboyMenu.hide(!1);
                    let t = l.getHumanboyRoom().iUsedAutoBetCount,
                        n = l.getHumanboyRoom().iSelectAutoBetCount;
                    if (n > 0) {
                        let e = cc.instantiate(this.prefab_hb_dialog).getComponent(S);
                        e.show(_.StringTools.formatC(_.config.getStringData("Cowboy_auto_bet_exit_tips"), t, n), _.config.getStringData("CowBoy_btn_desc_exit_game"), _.config.getStringData("CowBoy_btn_desc_resume_game"), (e => {
                            _.humanboyNet.requestLeaveRoom()
                        }), (e => {})), this.node.addChild(e.node, Ke.HL_ZORDER_PANEL_SERVER_TOAST)
                    } else {
                        let e = cc.instantiate(this.prefab_cb_exit);
                        this.node.addChild(e, Ke.HL_ZORDER_PANEL_SETTING)
                    }
                }))), this._humanboyMenu.show(!0), this._humanboyMenu.setMenuPosition(cc.v2(this._btn_menu.node.x, this._btn_menu.node.y - this._btn_menu.node.height / 2))
            })), this._btn_playerList = this._panel_bottom.getChildByName("btn_playerlist"), this._btn_playerList.on("click", (e => {
                this._playSoundEffect(this._sound_button), _.humanboyNet.requestPlayerList()
            }));
            this.node.getChildByName("btn_record").on("click", (e => {
                this._playSoundEffect(this._sound_button), this._showChart(I.humanboy_proto.BetZoneOption.BetZoneOption_DUMMY)
            }));
            this._panel_jackpot.on(cc.Node.EventType.TOUCH_END, (e => {
                _.AudioMgr.playButtonSound("button_click"), this._playSoundEffect(this._sound_button), this._humanboyJackpot ? (this._humanboyJackpot.show(!0), this._humanboyJackpot.getViewType() === v.eHumanboyJackpotListViewType.JACKPOT_TYPE_RULE && this._humanboyJackpot.setViewType(this._humanboyJackpot.getViewType())) : (this._humanboyJackpot = cc.instantiate(this.prefab_hb_jackPot).getComponent(v), this.node.addChild(this._humanboyJackpot.node, Ke.HL_ZORDER_PANEL_JACKPOT), this._humanboyJackpot.show(!0))
            }))
        }
        _updateJackPotNum() {
            let e = l.getHumanboyRoom().llJackpotLeftMoney,
                t = Math.round(_.StringTools.serverGoldToShowNumber(e)).toString(),
                n = t.length,
                o = this._vJackPotNumberList.length;
            for (let e = 0; e < o; ++e) {
                let i = o - 1 - e;
                e < n ? this._vJackPotNumberList[i].showNum(_.Number(t.substr(n - e - 1, 1))) : this._vJackPotNumberList[i].showNum(0)
            }
            _.MessageCenter.send("on_humanboy_jackpot_notify")
        }
        _initCoinPool() {
            this._nodeCoinPool = new cc.Node, this._nodeCoinPool.setContentSize(cc.winSize), this.node.addChild(this._nodeCoinPool, Ke.HL_ZORDER_COIN_POOL)
        }
        _initBtnTest() {
            let e = this.node.getChildByName("tmp_test_node");
            if (!e) {
                e = new cc.Node, e.setAnchorPoint(cc.v2(.5, .5)), this.node.addChild(e, Ke.HL_ZORDER_ANIM_NODE);
                let t = e.addComponent(cc.Sprite);
                _.resMgr.setSpriteFrame(t.node, "zh_CN/internal/image/default_btn_normal", (() => {
                    t.type = cc.Sprite.Type.SLICED, t.sizeMode = cc.Sprite.SizeMode.CUSTOM, t.trim = !1;
                    let n = cc.size(this._vOtherPlayerInfo[0].imgBg.node.getContentSize());
                    e.setContentSize(n.width, n.height / 2);
                    let o = cc.Vec2.ZERO;
                    this._vOtherPlayerInfo[0].imgBg.node.convertToWorldSpaceAR(cc.Vec2.ZERO, o), e.setPosition(e.parent.convertToNodeSpaceAR(o)), e.addComponent(cc.Button).transition = cc.Button.Transition.SCALE;
                    let i = new cc.Node;
                    e.addChild(i), i.setAnchorPoint(cc.v2(.5, .5)), i.setPosition(cc.Vec2.ZERO);
                    let a = i.addComponent(cc.Label);
                    a.horizontalAlign = cc.Label.HorizontalAlign.CENTER, a.verticalAlign = cc.Label.VerticalAlign.CENTER, a.fontSize = 30, a.overflow = cc.Label.Overflow.SHRINK, a.node.color = cc.Color.BLACK, a.node.setContentSize(a.node.parent.getContentSize()), a.string = "BtnTest"
                }))
            }
            e.active = !0, e.on("click", (e => {
                {
                    let e = l.getHumanboyRoom().vBetCoinOption,
                        t = Math.floor(_.StringTools.randomRange(0, e.length)),
                        n = Math.floor(_.StringTools.randomRange(0, 100));
                    for (let o = 0; o < n; ++o) {
                        let n = new Qe;
                        n.nAreaIdx = Math.floor(_.StringTools.randomRange(0, this._vAreasInfo.length)), n.nGold = e[t], n.nUid = _.dataHandler.getUserData().u32Uid, n.bAnim = !0, n.bHeadAnim = !0, n.bPlaySound = !0, this._vCoinOptimizationDeque.push_back(n)
                    }
                }
            }))
        }
        _initDealerInfo() {
            this._panel_dealer = this._panel_top.getChildByName("panel_dealer");
            let e = this._panel_dealer.childrenCount;
            for (let t = 0; t < e; ++t) {
                let e = this._panel_dealer.getChildByName(_.StringTools.formatC("panel_dealer_head_%d", t));
                if (!e) continue;
                let n = new Xe;
                n.index = t, n.imgIcon = e.getChildByName("img_icon").getComponent(cc.Sprite), n.txtName = e.getChildByName("img_name").getChildByName("txt").getComponent(cc.Label), n.txtGold = e.getChildByName("img_gold").getChildByName("txt").getComponent(cc.Label), n.imgGold = e.getChildByName("img_gold").getChildByName("img").getComponent(cc.Sprite), n.imgHead = e.getChildByName("panel_head").getChildByName("img_head").getComponent(cc.Sprite), n.imgHeadBox = e.getChildByName("panel_head").getChildByName("img_head_box").getComponent(cc.Sprite), n.imgBeDealerNum = e.getChildByName("img_count").getComponent(cc.Sprite), n.rtxtBeDealerNum = n.imgBeDealerNum.node.getChildByName("txt").getComponent(cc.RichText), this._vDealerInfo.push(n), n.imgIcon.spriteFrame = this._atlas_hb_language.getSpriteFrame("humanboy_dealer_icon"), n.imgHead.spriteFrame = null, _.resMgr.setSpriteFrame(n.imgHeadBox.node, "zh_CN/game/humanboy/head/head_system_box_circle"), n.imgHeadBox.addComponent(a).nTag = n.index, n.imgHeadBox.node.on(cc.Node.EventType.TOUCH_END, (e => {
                    this._playSoundEffect(this._sound_button);
                    let t = O.HDLV_TYPE_CANDIDATE;
                    if (e.target) {
                        let n = e.target.getComponent(a);
                        if (n) {
                            let e = n.nTag;
                            t = e >= 0 && e < _.StringTools.getArrayLength(l.getHumanboyRoom().vDealerInfo) ? O.HDLV_TYPE_CANDIDATE : O.HDLV_TYPE_WATTING
                        }
                    }
                    this._showDealerListView(!0, t)
                }))
            }
            this._rtxt_dealer_extra = this._panel_dealer_extra.getChildByName("txt").getComponent(cc.RichText), this._btn_dealer_extra = this._panel_dealer_extra.getChildByName("btn").getComponent(cc.Button), this._btn_dealer_extra.node.on("click", this._onClickDealerBtn, this);
            {
                this._img_dealer_card_shield = this._panel_dealer.getChildByName("img_dealer_card_shield"), this._img_dealer_card_shield && (this._img_dealer_card_shield.active = !1);
                let e = this._panel_dealer.getChildByName("panel_dealer_card"),
                    t = e.getChildByName("panel_card");
                if (t)
                    for (let e = 0; e < 5; ++e) {
                        let n = t.getChildByName(_.StringTools.formatC("card_%d", e));
                        n.active = !1;
                        let o = r.create(this._strCardFacePath, this._strCardBackPath);
                        o.ResetFromNode(n), this._vDealerCardNode.push(o), this._vDealerCardSrcPos.push(cc.v2(o.node.position)), ++this._nSendCardsTotalNum
                    }
                let n = e.getChildByName("img_card_type");
                this._img_dealer_card_type = n.getChildByName("img").getComponent(cc.Sprite)
            }
            this._img_bet_clock = this._panel_dealer.getChildByName("img_bet_clock"), this._img_bet_clock.active = !1, this._src_bet_clock_pos = cc.v2(this._img_bet_clock.position)
        }
        _updateDealerInfo() {
            let e = l.getHumanboyRoom().vDealerInfo;
            for (let t = 0; t < this._vDealerInfo.length; ++t) {
                let n = this._vDealerInfo[t].txtName,
                    o = this._vDealerInfo[t].txtGold,
                    i = this._vDealerInfo[t].imgGold,
                    a = this._vDealerInfo[t].imgHead,
                    s = this._vDealerInfo[t].imgHeadBox,
                    r = this._vDealerInfo[t].imgBeDealerNum,
                    h = this._vDealerInfo[t].rtxtBeDealerNum;
                if (t < e.length) {
                    let c = e[t];
                    switch (c.uid) {
                        case 0:
                            if (0 === t) {
                                let e = g.getHeadNode(a.node);
                                e && (e.parent.active = !1), _.resMgr.setSpriteFrame(a.node, "zh_CN/game/humanboy/head/head_system_circle"), _.resMgr.setSpriteFrame(s.node, "zh_CN/game/humanboy/head/head_system_box_circle"), n.string = _.config.getStringData("Humanboy_game_apply_dealer_system"), o.string = l.getHumanboyRoom().transGoldShortString(c.stockCoin), i.node.active = !0, h.string = "", r.node.active = !1
                            } else {
                                let e = g.getHeadNode(a.node);
                                e && (e.parent.active = !1), _.resMgr.setSpriteFrame(a.node, "zh_CN/game/humanboy/head/head_none_circle"), _.resMgr.setSpriteFrame(s.node, "zh_CN/game/humanboy/head/head_player_box_circle"), n.string = _.config.getStringData("Humanboy_game_apply_dealer_system"), o.string = "", i.node.active = !1, h.string = "", r.node.active = !1
                            }
                            break;
                        case 1: {
                            let e = g.getHeadNode(a.node);
                            e && (e.parent.active = !1), _.resMgr.setSpriteFrame(a.node, "zh_CN/game/humanboy/head/head_dealer_choose"), _.resMgr.setSpriteFrame(s.node, "zh_CN/game/humanboy/head/head_player_box_circle"), n.string = _.config.getStringData("Humanboy_game_dealer_choose"), o.string = "", i.node.active = !1, h.string = "", r.node.active = !1
                        }
                        break;
                        default: {
                            let e = "";
                            c.head.length > 0 && (e = _.dataHandler.getUserData().getImageURL(c.head)), g.setCircleSprite(a.node, e, c.plat, !1), a.spriteFrame = null, _.resMgr.setSpriteFrame(s.node, "zh_CN/game/humanboy/head/head_player_box_circle"), n.string = c.name, o.string = l.getHumanboyRoom().transGoldShortString(c.stockCoin), i.node.active = !0;
                            let t = _.StringTools.formatC(_.config.getStringData("Humanboy_game_dealer_up_count_1"), c.beDealerNum, l.getHumanboyRoom().tCurRoom.dealerCount);
                            _.StringTools.setRichTextString(h.node, t), r.node.active = !0
                        }
                    }
                } else {
                    let e = g.getHeadNode(a.node);
                    e && (e.parent.active = !1), _.resMgr.setSpriteFrame(a.node, "zh_CN/game/humanboy/head/head_none_circle"), _.resMgr.setSpriteFrame(s.node, "zh_CN/game/humanboy/head/head_player_box_circle"), n.string = _.config.getStringData("Humanboy_game_apply_dealer_system"), o.string = "", i.node.active = !1, h.string = "", r.node.active = !1
                }
            }
            this._updateDealerExtraInfo()
        }
        _updateDealerExtraInfo() {
            let e = l.getHumanboyRoom().bOnDealerList;
            switch (this._btnStatus = e ? Je.HDB_STATUS_DEALER_DOWN : Je.HDB_STATUS_DEALER_UP, this._btnStatus) {
                case Je.HDB_STATUS_DEALER_UP: {
                    this._btn_dealer_extra.getComponent(cc.Sprite).spriteFrame = this._atlas_hb_language.getSpriteFrame("humanboy_dealer_btn_up"), this._panel_betbtn.active = !0;
                    let e = l.getHumanboyRoom().tCurRoom.moneyPerStock,
                        t = l.getHumanboyRoom().transGoldShortString(e, 8);
                    this._rtxt_dealer_extra.string = _.StringTools.formatC(_.config.getStringData("Humanboy_game_dealer_limit_score"), t)
                }
                break;
                case Je.HDB_STATUS_DEALER_DOWN: {
                    this._btn_dealer_extra.getComponent(cc.Sprite).spriteFrame = this._atlas_hb_language.getSpriteFrame("humanboy_dealer_btn_down");
                    let e = l.getHumanboyRoom().vDealerInfo;
                    if (e.length > 0) {
                        let t = e[0];
                        if (0 != t.uid && 1 != t.uid) {
                            let e = _.StringTools.formatC(_.config.getStringData("Humanboy_game_dealer_up_count_2"), t.beDealerNum, l.getHumanboyRoom().tCurRoom.dealerCount);
                            _.StringTools.setRichTextString(this._rtxt_dealer_extra.node, e)
                        }
                    }
                }
            }
        }
        _resetDealerCards(e = !0) {
            for (let t = 0; t < this._vDealerCardNode.length; ++t) this._vDealerCardNode[t].node.stopAllActions(), this._vDealerCardNode[t].SetFace(!1), this._vDealerCardNode[t].node.setPosition(this._vDealerCardSrcPos[t]), this._vDealerCardNode[t].node.active = e;
            this._img_dealer_card_type.node.parent.active = !1
        }
        _resetPlayerCards(e, t) {
            let n = this._getAreaIdxByBetOption(e);
            if (n < 0 || n >= this._vAreasInfo.length) return;
            let o = this._vAreasInfo[n];
            if (o.panelCard) {
                o.panelCard.active = t, o.imgCardTypeBg.node.active = !1, o.imgCardTypeTxt.node.active = !1;
                for (let e = 0; e < o.vCardsNode.length; ++e) o.vCardsNode[e].node.stopAllActions(), o.vCardsNode[e].SetFace(!1), o.vCardsNode[e].node.setPosition(o.vCardsSrcPos[e]), o.vCardsNode[e].node.active = t
            }
        }
        _resetAllPlayerCards(e = !1) {
            for (let t = 0; t < this._vAreasInfo.length; ++t) {
                let n = this._vAreasInfo[t];
                this._resetPlayerCards(n.eZone, e)
            }
        }
        _resetAllCards(e = !1) {
            this._nSendCardsCallBackNum = 0, this._resetAllPlayerCards(e), this._resetDealerCards(e), this._img_dealer_card_shield.active = !e
        }
        onGoldViewShop() {
            this._playSoundEffect(this._sound_button), _.MessageCenter.send("on_recharge_notify")
        }
        _initPlayersInfo() {
            {
                let e = this._panel_bottom.getChildByName("panel_self"),
                    t = e.getChildByName("img_name"),
                    n = e.getChildByName("img_gold");
                this._txt_self_name = t.getChildByName("txt").getComponent(cc.Label), this._txt_self_gold = n.getChildByName("txt").getComponent(cc.Label), this._img_self_gold = n.getChildByName("img").getComponent(cc.Sprite), this._img_self_head = e.getChildByName("img_head").getComponent(cc.Sprite), _.resMgr.setSpriteFrame(this._img_self_head.node, "zh_CN/game/humanboy/head/head_player_box_circle"), n.getChildByName("btn").on("click", (e => {
                    this._playSoundEffect(this._sound_button), _.MessageCenter.send("on_recharge_notify")
                }))
            }
            this.setLeftAndRightList();
            {
                let e = 0,
                    t = 5;
                switch (this._eGameboyScreenType) {
                    case u.eGameboyScreenType.GST_SCREEN_BROAD:
                        e = 5;
                        break;
                    case u.eGameboyScreenType.GST_SCREEN_NARROW:
                    case u.eGameboyScreenType.GST_SCREEN_NORMAL:
                    default:
                        e = 4
                }
                let n = this.node.getChildByName("panel_left_playerlist"),
                    o = this.node.getChildByName("panel_right_playerlist");
                for (let i = 0; i < t; ++i) {
                    {
                        let t = n.getChildByName(`img_bg_${i}`),
                            o = n.getChildByName(`node_head_${i}`),
                            a = n.getChildByName(`text_coin_${i}`);
                        if (i < e) {
                            let e = new je;
                            if (e.imgBg = t.getComponent(cc.Sprite), e.nodeHead = o, e.txtCoin = a.getComponent(cc.Label), 0 === i) {
                                e.imgFlag = n.getChildByName("nb_flag").getComponent(cc.Sprite), e.imgFlag.node.getChildByName("nb_flag_desc").getComponent(cc.Label).string = _.StringTools.formatC(_.config.getStringData("Cowboy_fuhao_no_text"), 1)
                            }
                            this._vOtherPlayerInfo.push(e)
                        } else n.removeChild(t), n.removeChild(o), n.removeChild(a), _.tools.destroyNode(t), _.tools.destroyNode(o), _.tools.destroyNode(a)
                    } {
                        let t = o.getChildByName(`img_bg_${i}`),
                            n = o.getChildByName(`node_head_${i}`),
                            a = o.getChildByName(`text_coin_${i}`);
                        if (i < e) {
                            let e = new je;
                            if (e.imgBg = t.getComponent(cc.Sprite), e.nodeHead = n, e.txtCoin = a.getComponent(cc.Label), 0 === i) {
                                e.imgFlag = o.getChildByName("nb_flag").getComponent(cc.Sprite), e.imgFlag.node.getChildByName("nb_flag_desc").getComponent(cc.Label).string = _.config.getStringData("Cowboy_shensuanzi_text")
                            }
                            this._vOtherPlayerInfo.push(e)
                        } else o.removeChild(t), o.removeChild(n), o.removeChild(a), _.tools.destroyNode(t), _.tools.destroyNode(n), _.tools.destroyNode(a)
                    }
                }
                for (let e = 0; e < this._vOtherPlayerInfo.length; ++e) this._vOtherPlayerInfo[e].imgBg.spriteFrame = this._atlas_hb_humanboy.getSpriteFrame("humanboy_icon_seat_bg_1"), this._vOtherPlayerInfo[e].nodeHead.getChildByName("img").getComponent(cc.Sprite).spriteFrame = null, this._vOtherPlayerInfo[e].txtCoin.node.zIndex = Ke.HL_ZORDER_IMG_HEAD_TXT, this._vOtherPlayerInfo[e].imgFlag && (this._vOtherPlayerInfo[e].imgFlag.node.zIndex = Ke.HL_ZORDER_IMG_HEAD_FLAG)
            }
        }
        _updateSelfInfo() {
            _.StringTools.setShrinkString(this._txt_self_name.node, l.getHumanboyRoom().tSelfPlayer.name, !0);
            let e = l.getHumanboyRoom().tSelfPlayer.curCoin;
            this._txt_self_gold.string = l.getHumanboyRoom().transGoldShortString(e);
            let t = "";
            l.getHumanboyRoom().tSelfPlayer.head.length > 0 && (t = _.dataHandler.getUserData().getImageURL(l.getHumanboyRoom().tSelfPlayer.head)), g.setCircleSprite(this._img_self_head.node, t, l.getHumanboyRoom().tSelfPlayer.plat), l.getHumanboyRoom().setPlayerBeforeSettlementGold(_.dataHandler.getUserData().u32Uid, e)
        }
        _updateOtherPlayersInfo() {
            for (let e = 0; e < this._vOtherPlayerInfo.length; ++e) {
                let t = l.getHumanboyRoom().vOtherPlayer;
                if (e < t.length) {
                    let n = t[e];
                    this._vOtherPlayerInfo[e].uid = n.uid;
                    let o = "";
                    n.head.length > 0 && (o = _.dataHandler.getUserData().getImageURL(n.head)), this._vOtherPlayerInfo[e].imgBg.spriteFrame = this._atlas_hb_humanboy.getSpriteFrame("humanboy_icon_seat_bg_1"), this._vOtherPlayerInfo[e].nodeHead.active = !0, g.setCircleSprite(this._vOtherPlayerInfo[e].nodeHead.getChildByName("img"), o, n.plat, !0, y.IRREGULAR, !0, !0, !1), this._vOtherPlayerInfo[e].txtCoin.string = l.getHumanboyRoom().transGoldShortString(n.curCoin), this._vOtherPlayerInfo[e].imgFlag && (this._vOtherPlayerInfo[e].imgFlag.node.active = !0), l.getHumanboyRoom().setPlayerBeforeSettlementGold(n.uid, n.curCoin)
                } else {
                    this._vOtherPlayerInfo[e].uid = 0, this._vOtherPlayerInfo[e].imgBg.spriteFrame = this._atlas_hb_humanboy.getSpriteFrame("humanboy_icon_seat_bg_2"), this._vOtherPlayerInfo[e].nodeHead.active = !1, this._vOtherPlayerInfo[e].txtCoin.string = "", this._vOtherPlayerInfo[e].imgFlag && (this._vOtherPlayerInfo[e].imgFlag.node.active = !1);
                    let t = "win_player_win_count_" + this._vOtherPlayerInfo[e].nodeHead.uuid,
                        n = cc.find(t, this.node);
                    n && cc.isValid(n, !0) && (this.node.removeChild(n), n.destroy())
                }
            }
        }
        _updatePlayerGold(e) {
            if (e === _.dataHandler.getUserData().u32Uid) {
                let t = l.getHumanboyRoom().tSelfPlayer.curCoin;
                this._txt_self_gold.string = l.getHumanboyRoom().transGoldShortString(t), l.getHumanboyRoom().setPlayerBeforeSettlementGold(e, t)
            }
            for (let t = 0; t < this._vOtherPlayerInfo.length; ++t)
                if (this._vOtherPlayerInfo[t].uid === e)
                    if (e === _.dataHandler.getUserData().u32Uid) this._vOtherPlayerInfo[t].txtCoin.string = this._txt_self_gold.string;
                    else {
                        let n = l.getHumanboyRoom().getOtherPlayerByUid(e);
                        if (n) {
                            let o = n.curCoin;
                            this._vOtherPlayerInfo[t].txtCoin.string = l.getHumanboyRoom().transGoldShortString(o), l.getHumanboyRoom().setPlayerBeforeSettlementGold(e, o)
                        }
                    }
        }
        _updatePlayerTempGold(e, t) {
            e === _.dataHandler.getUserData().u32Uid && (this._txt_self_gold.string = l.getHumanboyRoom().transGoldShortString(t));
            for (let n = 0; n < this._vOtherPlayerInfo.length; ++n)
                if (this._vOtherPlayerInfo[n].uid === e)
                    if (e === _.dataHandler.getUserData().u32Uid) this._vOtherPlayerInfo[n].txtCoin.string = this._txt_self_gold.string;
                    else {
                        l.getHumanboyRoom().getOtherPlayerByUid(e) && (this._vOtherPlayerInfo[n].txtCoin.string = l.getHumanboyRoom().transGoldShortString(t))
                    }
        }
        _updateAllPlayerTempGold() {
            let e = [];
            _.StringTools.deepCopy(l.getHumanboyRoom().vPlayerSettles, e), e.push(l.getHumanboyRoom().tOtherPlayerSettle);
            for (let t = 0; t < e.length; ++t) {
                let n = e[t].uid,
                    o = e[t].pos4WinAmount,
                    i = e[t].posLuckWinAmount,
                    a = l.getHumanboyRoom().getPlayerBeforeSettlementGold(n);
                a += o, a += i, this._updatePlayerTempGold(n, a), l.getHumanboyRoom().setPlayerBeforeSettlementGold(n, a)
            }
        }
        _initBetAreas() {
            let e = [];
            e.push(I.humanboy_proto.BetZoneOption.POS1), e.push(I.humanboy_proto.BetZoneOption.POS2), e.push(I.humanboy_proto.BetZoneOption.POS3), e.push(I.humanboy_proto.BetZoneOption.POS4), e.push(I.humanboy_proto.BetZoneOption.POS_LUCK_1), e.push(I.humanboy_proto.BetZoneOption.POS_LUCK_2), e.push(I.humanboy_proto.BetZoneOption.POS_LUCK_3), e.push(I.humanboy_proto.BetZoneOption.POS_LUCK_4), e.push(I.humanboy_proto.BetZoneOption.POS_LUCK_5), e.push(I.humanboy_proto.BetZoneOption.POS_LUCK_6);
            let t = this._panel_game.getChildByName("panel_area"),
                n = this._panel_game.getChildByName("panel_border"),
                o = this._panel_game.getChildByName("panel_way_out"),
                i = this._panel_game.getChildByName("panel_card"),
                a = this._panel_game.getChildByName("panel_coin"),
                s = this._panel_game.getChildByName("panel_txt");
            for (let l = 0; l < e.length; ++l) {
                let h = new Ye;
                h.eZone = e[l], h.index = l, h.panelArea = t.getChildByName(_.StringTools.formatC("area_%d", l)), h.panelBorder = n.getChildByName(_.StringTools.formatC("border_%d", l)), h.panelCoin = a.getChildByName(_.StringTools.formatC("coin_%d", l));
                let c = s.getChildByName(_.StringTools.formatC("fnt_odd_%d", l));
                if (c && (h.txtOdds = c.getComponent(cc.Label)), h.panelCard = i.getChildByName(_.StringTools.formatC("card_node_%d", l)), h.panelCard) {
                    h.imgCardTypeBg = i.getChildByName(_.StringTools.formatC("img_card_type_bg_%d", l)).getComponent(cc.Sprite), h.imgCardTypeTxt = i.getChildByName(_.StringTools.formatC("img_card_type_txt_%d", l)).getComponent(cc.Sprite);
                    let e = h.panelCard.children,
                        t = h.panelCard.childrenCount;
                    for (let n = 0; n < t; ++n) {
                        let t = e[n];
                        t.active = !1;
                        let o = r.create(this._strCardFacePath, this._strCardBackPath);
                        o.ResetFromNode(t), h.vCardsNode.push(o), h.vCardsSrcPos.push(cc.v2(o.node.position)), ++this._nSendCardsTotalNum
                    }
                }
                h.txtTotalBetNum = s.getChildByName(_.StringTools.formatC("txt_total_bet_num_%d", l)).getComponent(cc.Label), h.txtSelfBetNum = s.getChildByName(_.StringTools.formatC("txt_self_bet_num_%d", l)).getComponent(cc.Label);
                {
                    h.panelWayOut = o.getChildByName(_.StringTools.formatC("way_out_%d", l)), h.panelWayOut.on(cc.Node.EventType.TOUCH_END, (e => {
                        this._playSoundEffect(this._sound_button), this._showChart(h.eZone)
                    })), h.eZone < I.humanboy_proto.BetZoneOption.POS_LUCK_4 ? h.eWayOutStyle = u.eGameboyWayOutStyle.GWS_IMG : h.eZone === I.humanboy_proto.BetZoneOption.POS_LUCK_4 ? (h.eWayOutStyle = u.eGameboyWayOutStyle.GWS_AUTO, h.iWayOutLoseLimitCount = 200) : h.eZone > I.humanboy_proto.BetZoneOption.POS_LUCK_4 && (h.eWayOutStyle = u.eGameboyWayOutStyle.GWS_TXT, h.iWayOutLoseLimitCount = 200);
                    let e = h.panelWayOut.childrenCount;
                    for (let t = 0; t < e; ++t) {
                        let e = _.StringTools.formatC("img_%d", t),
                            n = h.panelWayOut.getChildByName(e);
                        n && (n.active = !1, h.vWayOutImg.push(n.getComponent(cc.Sprite)), h.vWayOutImgSrcPos.push(cc.v2(n.position)))
                    }
                    let t = s.getChildByName(_.StringTools.formatC("txt_way_out_%d", l));
                    t && (h.rtxtWayOut = t.getComponent(cc.RichText), h.rtxtWayOut.node.active = !1, h.rtxtWayOut.handleTouchEvent = !1)
                }
                this._vAreasInfo.push(h), h.panelArea.on(cc.Node.EventType.TOUCH_END, (e => {
                    this._onClickAreaCoinPanel(h.index)
                }))
            }
        }
        _updateBetAreaBetsNum(e, t = -1, n = -1) {
            let o = this._getAreaIdxByBetOption(e);
            if (o < 0 || o >= this._vAreasInfo.length) return;
            let i = 0,
                a = 0,
                s = l.getHumanboyRoom().mapZoneData.get(e);
            if (s && (i = s.totalBet, a = s.selfBet), t = t < 0 ? i : t, (n = n < 0 ? a : n) > 0) {
                let e = l.getHumanboyRoom().transGoldShortString(n, 5);
                this._vAreasInfo[o].txtSelfBetNum.string = e
            } else this._vAreasInfo[o].txtSelfBetNum.string = "";
            let r = l.getHumanboyRoom().transGoldShortString(t, 5);
            if (this._vAreasInfo[o].txtTotalBetNum.string = r, e < I.humanboy_proto.BetZoneOption.POS_LUCK) {
                let t = 0;
                this._mapBetAreaLimitAmount.has(e) && (t = this._mapBetAreaLimitAmount.get(e));
                let n = l.getHumanboyRoom().transGoldShortString(t, 10);
                if (l.getHumanboyRoom().tCurRoom.shareLimitAmount > 0) {
                    let e = 0;
                    l.getHumanboyRoom().mapZoneData.forEach(((t, n, o) => {
                        if (t >= I.humanboy_proto.BetZoneOption.POS_LUCK) return "continue";
                        e += n.totalBet
                    }));
                    let t = l.getHumanboyRoom().transGoldShortString(e, 10);
                    this._setBetAreaLimitAmount(t, n)
                } else this._vAreasInfo[o].txtTotalBetNum.string = _.StringTools.formatC("%s/%s", r, n)
            }
        }
        _initBetAreaLimit() {
            let e = this._panel_game.getChildByName("panel_txt");
            this._txt_shared_limit_word = e.getChildByName("txt_shared_limit_word").getComponent(cc.Label), this._txt_shared_limit_amount = e.getChildByName("txt_shared_limit_amount").getComponent(cc.Label), this._txt_shared_limit_word.string = _.config.getStringData("Humanboy_game_shared_limit_text")
        }
        _setBetAreaLimitAmount(e, t) {
            this._txt_shared_limit_amount.string = _.StringTools.formatC("%s/%s", e, t);
            let n = _.resMgr.getLabelStringSize(this._txt_shared_limit_word),
                o = _.resMgr.getLabelStringSize(this._txt_shared_limit_amount),
                i = this._txt_shared_limit_word.node.parent,
                a = (i.width - (n.width + 10 + o.width)) / 2 - i.anchorX * i.width + this._txt_shared_limit_word.node.anchorX * n.width,
                s = this._txt_shared_limit_word.node.y;
            this._txt_shared_limit_word.node.setPosition(a, s), a += this._txt_shared_limit_word.node.anchorX * n.width, a += 10, a += this._txt_shared_limit_amount.node.anchorX * o.width, this._txt_shared_limit_amount.node.setPosition(a, s)
        }
        _resetAllBetAreaLimitAmount() {
            this._mapBetAreaLimitAmount.clear(), this._mapBetAreaLimitAmount.add(I.humanboy_proto.BetZoneOption.POS1, 0), this._mapBetAreaLimitAmount.add(I.humanboy_proto.BetZoneOption.POS2, 0), this._mapBetAreaLimitAmount.add(I.humanboy_proto.BetZoneOption.POS3, 0), this._mapBetAreaLimitAmount.add(I.humanboy_proto.BetZoneOption.POS4, 0);
            let e = l.getHumanboyRoom().tCurRoom.oddsDetail;
            for (let t = 0; t < e.length; ++t) {
                let n = e[t].option;
                this._mapBetAreaLimitAmount.has(n) && (this._mapBetAreaLimitAmount[n] = e[t].limit)
            }
            let t = l.getHumanboyRoom().tCurRoom.shareLimitAmount;
            t > 0 && this._mapBetAreaLimitAmount.forEachKeyValue(((e, n) => {
                e.value = t
            }));
            let n = t > 0;
            this._txt_shared_limit_word.node.active = n, this._txt_shared_limit_amount.node.active = n
        }
        _updateBettAreaLimitAmount(e, t) {
            let n = (e, t) => {
                if (this._mapBetAreaLimitAmount.has(e)) {
                    let n = this._mapBetAreaLimitAmount.get(e);
                    this._mapBetAreaLimitAmount.add(e, n + t), this._mapBetAreaLimitAmount.get(e) <= 0 && this._mapBetAreaLimitAmount.add(e, 0)
                }
            };
            if (l.getHumanboyRoom().tCurRoom.shareLimitAmount > 0)
                if (e < I.humanboy_proto.BetZoneOption.POS_LUCK)
                    for (let e = 0; e < this._vAreasInfo.length; ++e) {
                        let t = this._vAreasInfo[e].eZone;
                        this._updateBetAreaBetsNum(t)
                    } else this._updateBetAreaBetsNum(e);
                else n(e, t), this._updateBetAreaBetsNum(e)
        }
        _updateBetAreaTouchEnabled() {
            for (let e = 0; e < this._vAreasInfo.length; ++e) {
                let t = this._vAreasInfo[e],
                    n = !0;
                n = n && l.getHumanboyRoom().eCurState === I.humanboy_proto.RoundState.BET, n = n && this._getLeftTime() > 0, n ? t.panelArea.resumeSystemEvents(!1) : t.panelArea.pauseSystemEvents(!1)
            }
        }
        _resetBetArea(e) {
            let t = this._getAreaIdxByBetOption(e);
            if (t < 0 || t >= this._vAreasInfo.length) return;
            let n = this._vAreasInfo[t];
            this._updateBetAreaBetsNum(e, 0, 0), n.panelArea.getComponent(cc.BlockInputEvents).enabled = !0, n.panelCard && (n.panelCard.active = !1, n.imgCardTypeBg.node.active = !1, n.imgCardTypeTxt.node.active = !1), this._resetPlayerCards(e, !1), this._resetBetAreaCoins(e), this._hideWinFlagAnim(e)
        }
        _resetAllBetAreas() {
            for (let e = 0; e < this._vAreasInfo.length; ++e) this._resetBetArea(this._vAreasInfo[e].eZone);
            this._llCoinPoolZOrderCount = 0, this._vCoinOptimizationDeque.clear()
        }
        _initBetButtons() {
            for (let e = 0; e < this._nBetBtnNum; ++e) {
                let t = this._panel_betbtn.getChildByName(_.StringTools.formatC("btn_bet_%d", e)).getComponent(B);
                t.node.setScale(this._fBetBtnSrcScaleRate), t.node.on("click", (t => {
                    this._playSoundEffect(this._sound_button), this._setBetButtonSelected(e)
                })), this._vBetButtons.push(t)
            }
            this._humanboyAdvancedAuto || (this._humanboyAdvancedAuto = cc.instantiate(this.prefab_hb_advancedAuto).getComponent(E), this.node.addChild(this._humanboyAdvancedAuto.node, Ke.HL_ZORDER_PANEL_ADVANCE_AUTO_SELECT)), this._btn_betAuto = this._panel_betbtn.getChildByName("btn_bet_auto").getComponent(cc.Button), this._btn_betAuto.node.on("click", (e => {
                switch (this._playSoundEffect(this._sound_button), this._eAutoBtnStyle) {
                    case u.eGameboyAutoBtnStyle.GAB_STYLE_NORMAL:
                        _.humanboyNet.requestAutoBet();
                        break;
                    case u.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE:
                        this._humanboyAdvancedAuto.adaptSelectPanelPos(this._btn_betAuto.node), this._humanboyAdvancedAuto.showSelectPanel(!0);
                        break;
                    case u.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING: {
                        let e = l.getHumanboyRoom().iUsedAutoBetCount,
                            t = l.getHumanboyRoom().iSelectAutoBetCount,
                            n = cc.instantiate(this.prefab_hb_dialog).getComponent(S);
                        n.show(_.StringTools.formatC(_.config.getStringData("Cowboy_auto_bet_stop_tips"), e, t), _.config.getStringData("CowBoy_btn_desc_stop_auto_bet"), _.config.getStringData("CowBoy_btn_desc_resume_auto_bet"), (e => {
                            _.humanboyNet.reqCancelAdvanceAutoBet()
                        }), (e => {})), this.node.addChild(n.node, Ke.HL_ZORDER_PANEL_SERVER_TOAST)
                    }
                }
            })), this._btn_betClean = this._panel_betbtn.getChildByName("btn_bet_clean").getComponent(cc.Button), this._btn_betClean.normalSprite = this._atlas_cb_language.getSpriteFrame("clean_screen_normal"), this._btn_betClean.pressedSprite = this._atlas_cb_language.getSpriteFrame("clean_screen_normal"), this._btn_betClean.hoverSprite = this._atlas_cb_language.getSpriteFrame("clean_screen_normal"), this._btn_betClean.disabledSprite = this._atlas_cb_language.getSpriteFrame("clean_screen_gray"), this._btn_betClean.node.on("click", (e => {
                _.AudioMgr.playButtonSound("button_click"), this._resetAllBetAreaCoins()
            })), this._setBetButtonSelected(0, !1)
        }
        _initRedPackage() {
            this._btn_redpacket_festival = this._panel_betbtn.getChildByName("btn_redpacket_festival"), this._btn_redpacket_festival.getComponent(cc.Sprite).spriteFrame = null, this._btn_redpacket_festival.active = !1, this._btn_redpacket_festival_layer = cc.instantiate(this._btn_redpacket_festival), this.node.addChild(this._btn_redpacket_festival_layer, Ke.HL_ZORDER_PANEL_RED_PACKET);
            let e = cc.Vec2.ZERO;
            this._btn_redpacket_festival.convertToWorldSpaceAR(cc.Vec2.ZERO, e), this._btn_redpacket_festival_layer.setPosition(this._btn_redpacket_festival_layer.parent.convertToNodeSpaceAR(e)), this._onMsgShowLuckButton()
        }
        _resetBetButton(e, t) {
            e < 0 || e >= this._vBetButtons.length || (this._vBetButtons[e].btn.enabled = t, this._vBetButtons[e].node.setScale(this._fBetBtnSrcScaleRate), this._vBetButtons[e].txtBetNode.active = !0, this._vBetButtons[e].imgMask.node.active = !1, this._nCurBetBtnIndex === e && (this._nCurBetBtnIndex = -1))
        }
        _resetAllBetButtons(e) {
            for (let t = 0; t < this._vBetButtons.length; ++t) this._resetBetButton(t, e)
        }
        _updateBetAmountLevel() {
            let e = l.getHumanboyRoom().vBetCoinOption;
            for (let t = 0; t < e.length; ++t)
                if (t < this._nBetBtnNum) {
                    let n = _.StringTools.clientGoldByServer(e[t]);
                    this._vBetButtons[t].setTxtNum(_.StringTools.numberToShowNumber(n)), n < l.getHumanboyRoom().llCoinUICritical ? this._vBetButtons[t].setShape(B.eHumanboyBetCoinShape.SHAPE_COIN) : this._vBetButtons[t].setShape(B.eHumanboyBetCoinShape.SHAPE_BLOCK)
                } else console.error(_.StringTools.formatC("HumanboyMainView._updateBetAmountLevel vBetCoinOption must be %d, size: %d", this._nBetBtnNum, e.length));
            switch (l.getHumanboyRoom().eAutoLevel) {
                case I.humanboy_proto.AutoBetLevel.Level_Normal:
                    this._setAutoBetBtnStytle(u.eGameboyAutoBtnStyle.GAB_STYLE_NORMAL);
                    break;
                case I.humanboy_proto.AutoBetLevel.Level_Advance:
                    l.getHumanboyRoom().iSelectAutoBetCount > 0 ? this._setAutoBetBtnStytle(u.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING) : this._setAutoBetBtnStytle(u.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE)
            }
            this._adaptiveBetBtnPanel()
        }
        _updateBetOddsDetail() {
            let e = l.getHumanboyRoom().tCurRoom.oddsDetail;
            for (let t = 0; t < e.length; ++t) {
                let n = e[t].odds,
                    o = e[t].option;
                for (let e = 0; e < this._vAreasInfo.length; ++e)
                    if (this._vAreasInfo[e].eZone > I.humanboy_proto.BetZoneOption.POS_LUCK && this._vAreasInfo[e].eZone === o && this._vAreasInfo[e].txtOdds) {
                        let t = _.StringTools.clientGoldByServer(n).toString();
                        t = _.StringTools.formatC("%s%s", t, _.config.getStringData("Humanboy_game_fnt_table_odd")), this._vAreasInfo[e].txtOdds.string = t
                    }
            }
        }
        _updateBetButtonState(e = !0) {
            let t = l.getHumanboyRoom().vBetCoinOption,
                n = l.getHumanboyRoom().tSelfPlayer.curCoin;
            for (let e = 0; e < t.length; ++e) n >= t[e] ? (this._vBetButtons[e].btn.enabled = !0, this._vBetButtons[e].btn.interactable = !0, this._vBetButtons[e].setTxtColor(B.eHumanboyBetCoinTxtColor.YELLOW)) : (this._vBetButtons[e].btn.enabled = !1, this._vBetButtons[e].btn.interactable = !1, this._vBetButtons[e].setTxtColor(B.eHumanboyBetCoinTxtColor.GRAY));
            let o = l.getHumanboyRoom().eCurState === I.humanboy_proto.RoundState.BET && this._getLeftTime() > 0;
            for (let e = 0; e < this._vBetButtons.length; ++e) this._vBetButtons[e].imgMask.node.active = !o, this._vBetButtons[e].imgMask.getComponent(cc.BlockInputEvents).enabled = !0;
            this._updateAutoBetBtnStatus(), this._updateCleanBtnStatus()
        }
        _updateAutoBetBtnStatus() {
            switch (this._eAutoBtnStyle) {
                case u.eGameboyAutoBtnStyle.GAB_STYLE_NORMAL:
                    if (l.getHumanboyRoom().eCurState === I.humanboy_proto.RoundState.BET && this._getLeftTime() > 0)
                        if (l.getHumanboyRoom().bHasBetInCurRound) this._btn_betAuto.interactable = !1;
                        else {
                            let e = l.getHumanboyRoom().bCanAuto;
                            this._btn_betAuto.interactable = e
                        }
                    else this._btn_betAuto.interactable = !1;
                    break;
                case u.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE:
                    if (l.getHumanboyRoom().bHasBetInCurRound) this._btn_betAuto.interactable = !0;
                    else {
                        let e = l.getHumanboyRoom().bCanAuto;
                        this._btn_betAuto.interactable = e
                    }
                    break;
                case u.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING:
                    this._btn_betAuto.interactable = !0
            }
        }
        _updateCleanBtnStatus() {
            let e = !1;
            l.getHumanboyRoom().eCurState === I.humanboy_proto.RoundState.BET && this._getLeftTime() > 0 && (e = !0), this._btn_betClean.getComponent(cc.Button).interactable = e
        }
        _setAutoBetBtnStytle(e) {
            switch (this._humanboyAdvancedAuto && (this._humanboyAdvancedAuto.hideAdvanceAutoTips(), this._humanboyAdvancedAuto.hideAdvanceAutoCount(), this._humanboyAdvancedAuto.hideSelectPanel(!1)), this._eAutoBtnStyle = e, this._eAutoBtnStyle) {
                case u.eGameboyAutoBtnStyle.GAB_STYLE_NONE:
                    break;
                case u.eGameboyAutoBtnStyle.GAB_STYLE_NORMAL:
                    this._btn_betAuto.normalSprite = this._atlas_cb_language.getSpriteFrame("autobet_normal"), this._btn_betAuto.pressedSprite = this._atlas_cb_language.getSpriteFrame("autobet_normal"), this._btn_betAuto.hoverSprite = this._atlas_cb_language.getSpriteFrame("autobet_normal"), this._btn_betAuto.disabledSprite = this._atlas_cb_language.getSpriteFrame("autobet_gray");
                    break;
                case u.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE:
                    this._btn_betAuto.normalSprite = this._atlas_cb_language.getSpriteFrame("autobet_block_normal"), this._btn_betAuto.pressedSprite = this._atlas_cb_language.getSpriteFrame("autobet_block_normal"), this._btn_betAuto.hoverSprite = this._atlas_cb_language.getSpriteFrame("autobet_block_normal"), this._btn_betAuto.disabledSprite = this._atlas_cb_language.getSpriteFrame("autobet_block_gray");
                    break;
                case u.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING:
                    this._btn_betAuto.normalSprite = this._atlas_cb_language.getSpriteFrame("autobet_block_using"), this._btn_betAuto.pressedSprite = this._atlas_cb_language.getSpriteFrame("autobet_block_using"), this._btn_betAuto.hoverSprite = this._atlas_cb_language.getSpriteFrame("autobet_block_using"), this._btn_betAuto.disabledSprite = this._atlas_cb_language.getSpriteFrame("autobet_block_gray"), this._humanboyAdvancedAuto && (this._humanboyAdvancedAuto.adaptAdvanceAutoCountPos(this._btn_betAuto.node), this._humanboyAdvancedAuto.showAdvanceAutoCount())
            }
            let t = this._btn_betAuto.getComponent(cc.Sprite);
            t.type = cc.Sprite.Type.SIMPLE, t.sizeMode = cc.Sprite.SizeMode.RAW
        }
        _getAutoBetBtnStytle() {
            return this._eAutoBtnStyle
        }
        _checkAdvanceAutoReq() {
            l.getHumanboyRoom().eCurState === I.humanboy_proto.RoundState.BET && this._getAutoBetBtnStytle() === u.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING && (this._humanboyAdvancedAuto && this._humanboyAdvancedAuto.hideAdvanceAutoTips(), l.getHumanboyRoom().iUsedAutoBetCount < l.getHumanboyRoom().iSelectAutoBetCount && _.humanboyNet.reqAdvanceAutoBet())
        }
        _resetLeftTime() {
            this._nLeftTime = l.getHumanboyRoom().llLeftSeconds, this._msNowTime = 0, this._msLastTime = 0
        }
        _getLeftTime() {
            return this._nLeftTime
        }
        _showBetClockAction(e, t = !0) {
            this._img_bet_clock.active = !0, this._img_bet_clock.stopAllActions(), this._img_bet_clock.setPosition(this._src_bet_clock_pos);
            let n = cc.v2(0, cc.winSize.height / 2 + this._img_bet_clock.height / 2);
            this.node.convertToWorldSpaceAR(n, n);
            let o = cc.Vec2.ZERO;
            this._img_bet_clock.parent.convertToNodeSpaceAR(n, o);
            let i = cc.v2(this._src_bet_clock_pos.x, o.y),
                a = this._img_bet_clock.getChildByName("txt").getComponent(cc.Label);
            if (a.string = "1", e) {
                if (t) {
                    this._img_bet_clock.setPosition(i);
                    let e = cc.moveTo(this._fActExecute_BetClock, this._src_bet_clock_pos).easing(cc.easeBackOut());
                    this._img_bet_clock.runAction(e)
                } else this._img_bet_clock.setPosition(this._src_bet_clock_pos);
                a.string = _.StringTools.formatC("%lld", this._getLeftTime())
            } else if (t) {
                this._img_bet_clock.setPosition(this._src_bet_clock_pos);
                let e = cc.moveTo(this._fActExecute_BetClock, i).easing(cc.easeBackIn());
                this._img_bet_clock.runAction(cc.sequence(e, cc.callFunc((() => {
                    this._img_bet_clock.active = !1
                }))))
            } else this._img_bet_clock.setPosition(this._src_bet_clock_pos), this._img_bet_clock.active = !1
        }
        _updateTimeBetClock() {
            l.getHumanboyRoom().eCurState === I.humanboy_proto.RoundState.BET && this._getLeftTime() > 0 ? (this.schedule(this._onTimeBetClock, 1), this._showBetClockAction(!0, !0)) : (this.unschedule(this._onTimeBetClock), this._showBetClockAction(!1, !0))
        }
        _onTimeBetClock(e) {
            l.getHumanboyRoom().eCurState === I.humanboy_proto.RoundState.BET && this._getLeftTime() > 0 ? (this._playSoundEffect(this._sound_time_tick), this._showBetClockAction(!0, !1)) : (this.unschedule(this._onTimeBetClock), this._showBetClockAction(!1, !0))
        }
        _showNextRoundPrepare() {
            0 != l.getHumanboyRoom().nStopWorld ? (this._showGameToast(_.config.getStringData("Humanboy_server_will_stop_text")), this._nodeAnim.runAction(cc.sequence(cc.delayTime(2), cc.callFunc((() => {
                this._backToRoomListScene()
            }), this)))) : (this._resetAllCards(), this._resetAllBetAreaLimitAmount(), this._resetAllBetAreas(), this._restAllTimelineAnims(), this._updateAllWayOut(), this._updateDealerInfo(), this._dealerListView && this._dealerListView.checkBtnDealerEnable(), this._updateNextRoundCountDown())
        }
        _updateNextRoundCountDown() {
            if (this._bWaitting) return;
            let e = this._getLeftTime();
            l.getHumanboyRoom().eCurState === I.humanboy_proto.RoundState.WAIT_NEXT_ROUND2 && e > 0 ? (this.schedule(this._onTimeNextRoundCountDown, 1), this._showNextRoundCountDown(!0, e)) : (this.unschedule(this._onTimeNextRoundCountDown), this._showNextRoundCountDown(!1, 0))
        }
        _onTimeNextRoundCountDown(e) {
            let t = l.getHumanboyRoom().eCurState,
                n = this._getLeftTime();
            t === I.humanboy_proto.RoundState.WAIT_NEXT_ROUND2 && n > 0 ? this._showNextRoundCountDown(!0, n) : (this.unschedule(this._onTimeNextRoundCountDown), this._showNextRoundCountDown(!1, 0))
        }
        _showNextRoundCountDown(e, t) {
            this._img_count_down.node.active = e;
            let n = this._img_count_down.node.getChildByName("txt").getComponent(cc.Label);
            n.string = e ? _.StringTools.formatC(_.config.getStringData("Humanboy_game_tips_wait_next_round_text"), t) : "0"
        }
        _showNextRoundEnterCountDown(e, t) {
            this._img_count_down.node.active = e;
            let n = this._img_count_down.node.getChildByName("txt").getComponent(cc.Label);
            n.string = e ? _.StringTools.formatC(_.config.getStringData("Humanboy_game_tips_wait_next_enter_text"), t) : "0"
        }
        _showWaittingTime(e) {
            this._nWaittingTime = this._getLeftTime(), e && l.getHumanboyRoom().eCurState === I.humanboy_proto.RoundState.WAIT_NEXT_ROUND && this._nWaittingTime >= 0 ? (this._bWaitting = !0, this.schedule(this._onTimeWaitting, 1), this._showNextRoundEnterCountDown(!0, this._nWaittingTime)) : (this._bWaitting = !1, this._nWaittingTime = 0, this.unschedule(this._onTimeWaitting), this._showNextRoundEnterCountDown(!1, 0))
        }
        _onTimeWaitting(e) {
            l.getHumanboyRoom().eCurState;
            --this._nWaittingTime >= 0 ? this._showNextRoundEnterCountDown(!0, this._nWaittingTime) : this._showWaittingTime(!1)
        }
        _initTimelineAnims() {
            this._nodeAnim = new cc.Node, this._nodeAnim.setContentSize(cc.winSize), this._nodeAnim.setAnchorPoint(cc.v2(.5, .5)), this._nodeAnim.setPosition(cc.Vec2.ZERO), this.node.addChild(this._nodeAnim, Ke.HL_ZORDER_ANIM_NODE);
            for (let e = 0; e < this._vAreasInfo.length; ++e) {
                this._vAreasInfo[e].panelCoin.getContentSize();
                let t = cc.Vec2.ZERO;
                this._vAreasInfo[e].panelCoin.convertToWorldSpaceAR(cc.v2(0, -170), t);
                let n = cc.instantiate(this.prefab_hb_win_flag);
                this._nodeAnim.addChild(n, Ke.HL_ZORDER_ANIM_NODE_1), n.parent.convertToNodeSpaceAR(t, t), n.setPosition(t), n.active = !1, this._vNodeWinFlagAnims.push(n), this._vAtlWinFlagActions.push(n.getComponent(cc.Animation))
            } {
                this._nodeFightBeginAnim = cc.instantiate(this.prefab_hb_start_bets), this._nodeAnim.addChild(this._nodeFightBeginAnim, Ke.HL_ZORDER_ANIM_NODE_1), this._nodeFightBeginAnim.setPosition(cc.Vec2.ZERO), this._nodeFightBeginAnim.active = !1, this._atlFightBeginAction = this._nodeFightBeginAnim.getComponent(cc.Animation);
                let e = this._nodeFightBeginAnim.getChildByName("Sprite_2");
                _.resMgr.setSpriteFrame(e, _.config.getLanguagePath("game/humanboy/animation/game_round/002"));
                let t = this._nodeFightBeginAnim.getChildByName("Sprite_7");
                _.resMgr.setSpriteFrame(t, _.config.getLanguagePath("game/humanboy/animation/game_round/004"))
            } {
                this._nodeFightEndAnim = cc.instantiate(this.prefab_hb_end_bets), this._nodeAnim.addChild(this._nodeFightEndAnim, Ke.HL_ZORDER_ANIM_NODE_1), this._nodeFightEndAnim.setPosition(cc.Vec2.ZERO), this._nodeFightEndAnim.active = !1, this._atlFightEndAction = this._nodeFightEndAnim.getComponent(cc.Animation);
                let e = this._nodeFightEndAnim.getChildByName("Sprite_2");
                _.resMgr.setSpriteFrame(e, _.config.getLanguagePath("game/humanboy/animation/game_round/003"));
                let t = this._nodeFightEndAnim.getChildByName("Sprite_7");
                _.resMgr.setSpriteFrame(t, _.config.getLanguagePath("game/humanboy/animation/game_round/005"))
            } {
                let e = null,
                    t = null;
                switch (_.config.getCurrentLanguage()) {
                    case _.Enum.LANGUAGE_TYPE.zh_CN:
                        e = this.prefab_hb_dealer_victory_zh_CN, t = this.prefab_hb_dealer_defeat_zh_CN;
                        break;
                    default:
                        e = this.prefab_hb_dealer_victory_en_US, t = this.prefab_hb_dealer_defeat_en_US
                }
                this._nodeDealerVictoryAnim = cc.instantiate(e), this._nodeAnim.addChild(this._nodeDealerVictoryAnim, Ke.HL_ZORDER_ANIM_NODE_1), this._nodeDealerVictoryAnim.setPosition(cc.Vec2.ZERO), this._nodeDealerVictoryAnim.active = !1, this._atlDealerVictoryAction = this._nodeDealerVictoryAnim.getComponent(cc.Animation), this._nodeDealerDefeatAnim = cc.instantiate(t), this._nodeAnim.addChild(this._nodeDealerDefeatAnim, Ke.HL_ZORDER_ANIM_NODE_1), this._nodeDealerDefeatAnim.setPosition(cc.Vec2.ZERO), this._nodeDealerDefeatAnim.active = !1, this._atlDealerDefeatAction = this._nodeDealerDefeatAnim.getComponent(cc.Animation)
            } {
                let e = cc.Vec2.ZERO;
                this._btn_record.node.parent.convertToWorldSpaceAR(this._btn_record.node.position, e), this._nodeWayoutLightAnim = cc.instantiate(this.prefab_hb_way_out), this._nodeAnim.addChild(this._nodeWayoutLightAnim, Ke.HL_ZORDER_ANIM_NODE_1), this._nodeWayoutLightAnim.setPosition(this._nodeWayoutLightAnim.parent.convertToNodeSpaceAR(e)), this._nodeWayoutLightAnim.active = !1, this._atlWayoutLightAction = this._nodeWayoutLightAnim.getComponent(cc.Animation)
            }
        }
        _restAllTimelineAnims() {
            for (let e = 0; e < this._vAreasInfo.length; ++e) this._hideWinFlagAnim(this._vAreasInfo[e].eZone);
            this._atlFightBeginAction.stop(), this._nodeFightBeginAnim.active = !1, this._atlFightEndAction.stop(), this._nodeFightEndAnim.active = !1, this._atlDealerVictoryAction.stop(), this._nodeDealerVictoryAnim.active = !1, this._atlDealerDefeatAction.stop(), this._nodeDealerDefeatAnim.active = !1, this._atlWayoutLightAction.stop(), this._nodeWayoutLightAnim.active = !1, this._clearJackPotAnim(), this._clearSpecialCardTypeAnim(), this._clearSpecialCardTypeHighLightAnim(), this._hideAllWinPlayerLightAnim(), this._nodeAnim.stopAllActions()
        }
        _getAnimClipSpeedByDuring(e, t) {
            let n = e.speed;
            if (t > 0) {
                n = e.sample * e.duration / cc.game.getFrameRate() / t
            }
            return n
        }
        _showRoundStartAnim() {
            this._nodeAnim.runAction(cc.sequence(cc.delayTime(this._fActDelayed_SendCard), cc.callFunc((() => {
                this._sendAllCardsAnim()
            }))));
            let e = this._fActDelayed_SendCard + this._fActExecute_SendCard - this._fActDelayed_FightBegin - this._fActExecute_FightBegin;
            this._nodeAnim.runAction(cc.sequence(cc.delayTime(e), cc.callFunc((() => {
                this._showFightBeginAnim()
            }), this)))
        }
        _showFightBeginAnim() {
            this._nodeAnim.runAction(cc.sequence(cc.delayTime(this._fActDelayed_FightBegin), cc.callFunc((() => {
                this._playSoundEffect(this._sound_begin_bet), this._nodeFightBeginAnim.active = !0;
                let e = this._atlFightBeginAction.defaultClip;
                e.speed = this._getAnimClipSpeedByDuring(e, this._fActExecute_FightBegin), e.wrapMode = cc.WrapMode.Normal, this._atlFightBeginAction.play(), this._atlFightBeginAction.on(cc.Animation.EventType.FINISHED, ((e, t) => {
                    this._atlFightBeginAction.off(cc.Animation.EventType.FINISHED), this._nodeFightBeginAnim.active = !1
                }), this)
            }), this)))
        }
        _showRoundEndAnim() {
            this._nodeAnim.runAction(cc.sequence(cc.delayTime(this._fActDelayed_FightEnd), cc.callFunc((() => {
                this._playSoundEffect(this._sound_end_bet), this._nodeFightEndAnim.active = !0;
                let e = this._atlFightEndAction.defaultClip;
                e.speed = this._getAnimClipSpeedByDuring(e, this._fActExecute_FightEnd), e.wrapMode = cc.WrapMode.Normal, this.playPointAni(), this._atlFightEndAction.play(), this._atlFightEndAction.on(cc.Animation.EventType.FINISHED, ((e, t) => {
                    this._atlFightEndAction.off(cc.Animation.EventType.FINISHED), this._nodeFightEndAnim.active = !1, this._showAllCardsAnim()
                }), this)
            }), this)))
        }
        _sendAllCardsAnim() {
            this._resetAllCards(), this._sendDealerCardsAnim(this._sendOneCardCallBack), this._sendPlayerCardsAnim(this._sendOneCardCallBack)
        }
        _showAllCardsAnim(e = !0) {
            let t = l.getHumanboyRoom().vPlayerHoleCard,
                n = 0,
                o = 0;
            for (let i = 0; i < t.length; ++i) {
                let a = t[i].option;
                switch (a) {
                    case I.humanboy_proto.BetZoneOption.HOST:
                        e && (n = this._fActDelayed_ShowCard_Step_1, o = n + this._fActExecute_ShowCard_Step_1 + this._fActExecute_ShowCard_Step_2), this._nodeAnim.runAction(cc.sequence(cc.delayTime(n), cc.callFunc((() => {
                            this._playSoundEffect(this._sound_kaipai), this._showDealerCardsAnim(t[i], this._showOneCardCallBack, e)
                        }), this))), this._nodeAnim.runAction(cc.sequence(cc.delayTime(o), cc.callFunc((() => {
                            this._showCardType(a)
                        }), this)));
                        break;
                    case I.humanboy_proto.BetZoneOption.POS1:
                    case I.humanboy_proto.BetZoneOption.POS2:
                    case I.humanboy_proto.BetZoneOption.POS3:
                    case I.humanboy_proto.BetZoneOption.POS4:
                        e && (n = this._fActDelayed_ShowCard_Step_2 + n + this._fActExecute_ShowCard_Step_1 + this._fActExecute_ShowCard_Step_2, o = this._fActDelayed_ShowCard_Step_2 + n + this._fActExecute_ShowCard_Step_1 + this._fActExecute_ShowCard_Step_2), this._nodeAnim.runAction(cc.sequence(cc.delayTime(n), cc.callFunc((() => {
                            this._playSoundEffect(this._sound_kaipai), this._showPlayerCardsAnim(t[i], this._showOneCardCallBack, e)
                        }), this))), this._nodeAnim.runAction(cc.sequence(cc.delayTime(o), cc.callFunc((() => {
                            this._showCardType(a);
                            let e = l.getHumanboyRoom().mapZoneData.get(a);
                            e && e.result < 0 && this._showWinFlagAnim(a)
                        }), this)))
                }
            }
        }
        _sendOneCardCallBack() {
            ++this._nSendCardsCallBackNum >= this._nSendCardsTotalNum && (this._nSendCardsCallBackNum = 0, this._img_dealer_card_shield.active = !1)
        }
        _showOneCardCallBack() {
            ++this._nSendCardsCallBackNum >= this._nSendCardsTotalNum && (this._nSendCardsCallBackNum = 0, this._showCardTypeFinish())
        }
        _sendDealerCardsAnim(e) {
            let t = this._fActExecute_SendCard / (this._vDealerCardNode.length + 1);
            for (let n = 0; n < this._vDealerCardNode.length; ++n) {
                let o = this._vDealerCardNode[n],
                    i = this._vDealerCardSrcPos[n];
                o.node.setPosition(i.x, i.y - o.node.height / 2);
                let a = n * t;
                this.scheduleOnce((n => {
                    o.node.active = !0, o.node.runAction(cc.sequence(cc.callFunc((() => {
                        this._playSoundEffect(this._sound_fapai)
                    }), this), cc.moveTo(t, i).easing(cc.easeInOut(1)), cc.callFunc(e, this)))
                }), a)
            }
        }
        _sendPlayerCardsAnim(e) {
            let t = this._fActExecute_SendCard / (this._vAreasInfo.length + 1);
            for (let n = 0; n < this._vAreasInfo.length; ++n) {
                let o = this._vAreasInfo[n];
                o.panelCard && (o.panelCard.active = !0);
                for (let n = 0; n < o.vCardsNode.length; ++n) {
                    let i = o.vCardsNode[n],
                        a = o.vCardsSrcPos[n];
                    i.node.setPosition(a.x, a.y - i.node.height / 2);
                    let s = n * t;
                    this.scheduleOnce((n => {
                        i.node.active = !0, i.node.runAction(cc.sequence(cc.moveTo(t, a).easing(cc.easeInOut(1)), cc.callFunc(e, this)))
                    }), s)
                }
            }
        }
        _showDealerCardsAnim(e, t, n = !0) {
            let o = e.holeCards;
            for (let e = 0; e < this._vDealerCardNode.length && !(e >= o.length); ++e) {
                let i = this._vDealerCardNode[e],
                    a = this._vDealerCardSrcPos[0],
                    s = this._vDealerCardSrcPos[e];
                n ? i.node.runAction(cc.sequence(cc.moveTo(this._fActExecute_ShowCard_Step_1, a), cc.callFunc((() => {
                    i.SetContent(o[e].number, o[e].suit), i.SetFace(!0)
                }), this), cc.moveTo(this._fActExecute_ShowCard_Step_2, s), cc.callFunc(t, this))) : (i.node.setPosition(s), i.SetContent(o[e].number, o[e].suit), i.SetFace(!0))
            }
        }
        _showPlayerCardsAnim(e, t, n = !0) {
            let o = e.option,
                i = this._getAreaIdxByBetOption(o);
            if (i < 0 || i >= this._vAreasInfo.length) return;
            let a = e.holeCards;
            for (let e = 0; e < this._vAreasInfo[i].vCardsNode.length && !(e >= a.length); ++e) {
                let o = this._vAreasInfo[i].vCardsNode[e],
                    s = this._vAreasInfo[i].vCardsSrcPos[0],
                    _ = this._vAreasInfo[i].vCardsSrcPos[e];
                n ? o.node.runAction(cc.sequence(cc.moveTo(this._fActExecute_ShowCard_Step_1, s), cc.callFunc((() => {
                    o.SetContent(a[e].number, a[e].suit), o.SetFace(!0)
                }), this), cc.moveTo(this._fActExecute_ShowCard_Step_2, _), cc.callFunc(t, this))) : (o.node.setPosition(_), o.SetContent(a[e].number, a[e].suit), o.SetFace(!0))
            }
        }
        _showCardType(e) {
            let t = "",
                n = l.getHumanboyRoom().vPlayerHoleCard;
            for (let o = 0; o < n.length; ++o)
                if (n[o].option === e) {
                    switch (n[o].level) {
                        case I.humanboy_proto.CardResult.CardResult_Dummy:
                            break;
                        case I.humanboy_proto.CardResult.GAO_PAI:
                            t = "humanboy_card_type_high_card";
                            break;
                        case I.humanboy_proto.CardResult.YI_DUI:
                            t = "humanboy_card_type_pair";
                            break;
                        case I.humanboy_proto.CardResult.LIAN_DUI:
                            t = "humanboy_card_type_two_pair";
                            break;
                        case I.humanboy_proto.CardResult.SAN_TIAO:
                            t = "humanboy_card_type_three_of_a_kind";
                            break;
                        case I.humanboy_proto.CardResult.SHUN_ZI:
                            t = "humanboy_card_type_straight";
                            break;
                        case I.humanboy_proto.CardResult.TONG_HUA:
                            t = "humanboy_card_type_flush";
                            break;
                        case I.humanboy_proto.CardResult.HU_LU:
                            t = "humanboy_card_type_gourd";
                            break;
                        case I.humanboy_proto.CardResult.SI_TIAO:
                            t = "humanboy_card_type_four_of_a_kind";
                            break;
                        case I.humanboy_proto.CardResult.TONG_HUA_SHUN:
                            t = "humanboy_card_type_straight_flush";
                            break;
                        case I.humanboy_proto.CardResult.HUANG_TONG:
                            t = "humanboy_card_type_royal_flush"
                    }
                    switch (n[o].option) {
                        case I.humanboy_proto.BetZoneOption.HOST:
                            this._img_dealer_card_type.node.parent.active = !0, this._img_dealer_card_type.spriteFrame = this._atlas_hb_language.getSpriteFrame(t);
                            break;
                        case I.humanboy_proto.BetZoneOption.POS1:
                        case I.humanboy_proto.BetZoneOption.POS2:
                        case I.humanboy_proto.BetZoneOption.POS3:
                        case I.humanboy_proto.BetZoneOption.POS4: {
                            let e = this._getAreaIdxByBetOption(n[o].option);
                            if (e < 0 || e >= this._vAreasInfo.length) break;
                            this._vAreasInfo[e].imgCardTypeBg.node.active = !0, this._vAreasInfo[e].imgCardTypeTxt.node.active = !0, this._vAreasInfo[e].imgCardTypeTxt.spriteFrame = this._atlas_hb_language.getSpriteFrame(t)
                        }
                    }
                    break
                }
        }
        _showAllCardType() {
            let e = l.getHumanboyRoom().vPlayerHoleCard;
            for (let t = 0; t < e.length; ++t) this._showCardType(e[t].option)
        }
        _showCardTypeFinish(e = 0) {
            let t = 0,
                n = !1;
            switch (e) {
                case 0: {
                    let e = 0,
                        n = 0,
                        o = l.getHumanboyRoom().uDealerWinAll;
                    1 !== o && 2 !== o || (e = this._fActDelayed_VictoryOrDefeat, n = this._fActExecute_VictoryOrDefeat, t += e, this._nodeAnim.runAction(cc.sequence(cc.delayTime(t), cc.callFunc((() => {
                        this._showDealerVictoryOrDefeatAnim()
                    }), this))), t += n)
                }
                case 1: {
                    let e = t,
                        n = t,
                        o = l.getHumanboyRoom().mapZoneData.get(I.humanboy_proto.BetZoneOption.POS_LUCK_1);
                    o && o.result < 0 && (e += this._fActDelayed_ShowWinFlag, this._nodeAnim.runAction(cc.sequence(cc.delayTime(e), cc.callFunc((() => {
                        this._showWinFlagAnim(I.humanboy_proto.BetZoneOption.POS_LUCK_1)
                    }), this)))), this._isHitSpecialCardType() && (n += this._fActDelayed_ShowWinFlag, this._nodeAnim.runAction(cc.sequence(cc.delayTime(n), cc.callFunc((() => {
                        this._showSpecialCardTypeHighLightAnim(), this._showWinFlagAnim(this._getHitSpecialCardTypeZone())
                    }), this)))), t = Math.max(e, n)
                }
                case 2:
                    t += this._fActDelayed_ShowWinFlag, this._nodeAnim.runAction(cc.sequence(cc.delayTime(t), cc.callFunc((() => {
                        this._showAllWayOutAnim()
                    }), this))), t += this._fActExecute_WayOut;
                case 3:
                    this._isHitSpecialCardType() && this._getSpecialCardTypeExecuteTime() > 0 && (t += this._fActDelayed_LuckBlow, this._nodeAnim.runAction(cc.sequence(cc.delayTime(t), cc.callFunc((() => {
                        this._showSpecialCardTypeAnim()
                    }), this))), t += this._getSpecialCardTypeExecuteTime());
                case 4: {
                    let e = t,
                        o = t,
                        i = t,
                        a = t,
                        r = 0,
                        h = 0,
                        c = new s,
                        d = new s;
                    if (l.getHumanboyRoom().mapZoneData.forEach(((e, t) => {
                            e < I.humanboy_proto.BetZoneOption.POS_LUCK ? (t.totalBet, t.result > 0 && t.totalBet > 0 && c.add(e, t.totalBet)) : (t.totalBet, t.result > 0 && t.totalBet > 0 && d.add(e, t.totalBet))
                        })), c.length > 0) {
                        if (e += this._fActDelayed_FlyWinCoin, this._nodeAnim.runAction(cc.sequence(cc.delayTime(e), cc.callFunc((() => {
                                this._playSoundEffect(this._sound_get_win_coin), this._showDealerWinFlagsAndFlyCoinsAnim(c)
                            }), this))), !n) {
                            n = !0;
                            let t = e + this._fActDelayed_FlyWinCoin;
                            this._showDealerAddCoinAnim(t), t += this._fActDelayed_FlyWinCoin, this._nodeAnim.runAction(cc.sequence(cc.delayTime(t), cc.callFunc((() => {
                                _.humanboyNet.requestUpdateDealerList()
                            }), this)))
                        }
                        e += this._fActExecute_FlyWinCoin
                    }
                    d.length > 0 && (o += this._fActDelayed_FlyWinCoin, this._nodeAnim.runAction(cc.sequence(cc.delayTime(o), cc.callFunc((() => {
                        l.getHumanboyRoom().mapZoneData.forEach(((e, t) => {
                            if (e <= I.humanboy_proto.BetZoneOption.POS_LUCK) return "continue";
                            t.result > 0 && t.totalBet > 0 && this._hideBetAreaCoinsAnim(e, this._fActExecute_FlyWinCoin)
                        }))
                    }), this))), o += this._fActExecute_FlyWinCoin), r = Math.max(e, o);
                    {
                        let e = !1,
                            t = !1,
                            o = [];
                        _.StringTools.deepCopy(l.getHumanboyRoom().vPlayerSettles, o), o.push(l.getHumanboyRoom().tOtherPlayerSettle);
                        for (let n = 0; n < o.length; ++n) {
                            let i = o[n];
                            if (i.pos4WinAmount > 0 && (e = !0), i.posLuckWinAmount > 0 && (t = !0), e && t) break
                        }
                        if (e) {
                            if (i += this._fActDelayed_FlyWinCoin, this._nodeAnim.runAction(cc.sequence(cc.delayTime(i), cc.callFunc((() => {
                                    this._showCoinToNormalAreaFromDealer()
                                }), this))), !n) {
                                n = !0;
                                let e = i + this._fActDelayed_FlyWinCoin;
                                this._showDealerAddCoinAnim(e), e += this._fActDelayed_FlyWinCoin, this._nodeAnim.runAction(cc.sequence(cc.delayTime(e), cc.callFunc((() => {
                                    _.humanboyNet.requestUpdateDealerList()
                                }), this)))
                            }
                            i += this._fActExecute_FlyWinCoin
                        }
                        t && (a += this._fActDelayed_FlyWinCoin, this._nodeAnim.runAction(cc.sequence(cc.delayTime(a), cc.callFunc((() => {
                            this._showCoinToLuckBlowAreaFromSystem()
                        }), this))), a += this._fActExecute_FlyWinCoin), h = Math.max(i, a), (e || t) && (this._nodeAnim.runAction(cc.sequence(cc.delayTime(h), cc.callFunc((() => {
                            this._hideAllWinFlagAnim(), this._playSoundEffect(this._sound_get_win_coin), this._showAllAreaWinFlagsAndFlyCoinAnim()
                        }), this))), h += this._fActExecute_FlyWinCoin), this._nodeAnim.runAction(cc.sequence(cc.delayTime(h), cc.callFunc((() => {
                            if (this._updateAllPlayerTempGold(), this._updateAllPlayerWinCount(!0), 0 != l.getHumanboyRoom().nStopWorld) {
                                let e = l.getHumanboyRoom().idle_roomid > 0;
                                e || this._showGameToast(_.config.getStringData("Humanboy_server_will_stop_text")), this._nodeAnim.runAction(cc.sequence(cc.delayTime(2), cc.callFunc((() => {
                                    e ? this.showSwitchTable() : this._backToRoomListScene()
                                }), this)))
                            }
                        }), this)))
                    }
                    t = Math.max(r, h)
                }
                case 5:
                    this._nodeAnim.runAction(cc.sequence(cc.delayTime(t), cc.callFunc((() => {
                        this._updateJackPotNum()
                    })))), this._isHitJackpotAward() && (this._nodeAnim.runAction(cc.sequence(cc.delayTime(t), cc.callFunc((() => {
                        this._showJackPotAnim()
                    }), this))), t += this._getJackpotAwardExecuteTime());
                case 6:
                    t += .5, this._nodeAnim.runAction(cc.sequence(cc.delayTime(t), cc.callFunc((() => {
                        this._updateSelfInfo(), this._updateOtherPlayersInfo()
                    }), this)))
            }
        }
        _showWinFlagAnim(e, t = !1) {
            let n = this._getAreaIdxByBetOption(e);
            if (n < 0 || n >= this._vAreasInfo.length) return;
            this._vNodeWinFlagAnims[n].active = !0;
            let o = this._vAtlWinFlagActions[n],
                i = o.getAnimationState("animation0"),
                a = o.getAnimationState("animation1");
            i.speed = this._getAnimClipSpeedByDuring(i.clip, this._fActExecute_WinFlag), i.wrapMode = cc.WrapMode.Normal, o.play(i.name), o.on(cc.Animation.EventType.FINISHED, ((e, t) => {
                o.off(cc.Animation.EventType.FINISHED), a.wrapMode = cc.WrapMode.Loop, a.play()
            }), this)
        }
        _hideWinFlagAnim(e) {
            let t = this._getAreaIdxByBetOption(e);
            if (t < 0 || t >= this._vAreasInfo.length) return;
            let n = this._vAtlWinFlagActions[t].getClips();
            for (let e = 0; e < n.length; ++e) this._vAtlWinFlagActions[t].stop(n[e].name);
            this._vNodeWinFlagAnims[t].active = !1
        }
        _showAllWinFlagAnim() {
            l.getHumanboyRoom().mapZoneData.forEach(((e, t, n) => {
                if (t.result >= 0) return "continue";
                this._showWinFlagAnim(e)
            }))
        }
        _hideAllWinFlagAnim() {
            l.getHumanboyRoom().mapZoneData.forEach(((e, t, n) => {
                if (t.result >= 0) return "continue";
                this._hideWinFlagAnim(e)
            }))
        }
        _showWayOutMoveAnim(e) {
            let t = this._getAreaIdxByBetOption(e);
            if (t < 0 || t >= this._vAreasInfo.length) return;
            let n = this._vAreasInfo[t].panelWayOut,
                o = this._vAreasInfo[t].vWayOutImg,
                i = this._vAreasInfo[t].vWayOutImgSrcPos;
            if (!n || o.length <= 0) return;
            let a = cc.scaleTo(.2, 0),
                s = cc.fadeOut(.3),
                _ = cc.spawn(a, s);
            o[0].node.runAction(cc.sequence(_, cc.callFunc((() => {
                o[0].node.active = !1;
                let t = cc.v2(cc.Vec2.ZERO);
                for (let n = 0; n < o.length; ++n) 0 !== n && (t.x = i[n - 1].x, t.y = i[n - 1].y, o[n].node.runAction(cc.sequence(cc.moveTo(.5, t), cc.callFunc((() => {
                    n === o.length - 1 && (this._updateWayOut(e, 0), o[0].node.setScale(1), o[0].node.opacity = 255, o[0].node.active = !0)
                }), this))))
            }))))
        }
        _showWayOutImgAnim(e) {
            let t = this._getAreaIdxByBetOption(e);
            if (t < 0 || t >= this._vAreasInfo.length) return;
            let n = this._vAreasInfo[t].vWayOutImg;
            if (n.length <= 0) return;
            let o = l.getHumanboyRoom().mapZoneData.get(e);
            if (!o) return;
            let i = this._vAreasInfo[t].rtxtWayOut;
            i && (i.string = "", i.node.active = !1);
            let a = o.result,
                s = "",
                r = "";
            a > 0 ? (s = "humanboy_icon_fire_white", r = e < I.humanboy_proto.BetZoneOption.POS_LUCK ? "humanboy_icon_circle_gray" : "humanboy_icon_circle_small_gray") : 0 === a ? (s = "humanboy_icon_fire_green", r = "humanboy_icon_circle_green") : (s = "humanboy_icon_fire_red", r = e < I.humanboy_proto.BetZoneOption.POS_LUCK ? "humanboy_icon_circle_red" : "humanboy_icon_circle_small_red");
            let h = n.length;
            for (let e = 0; e < n.length; ++e)
                if (!n[e].node.active) {
                    h = e;
                    break
                } if (e < I.humanboy_proto.BetZoneOption.POS_LUCK) {
                let e = (new cc.Node).addComponent(cc.Sprite);
                this._nodeAnim.addChild(e.node, Ke.HL_ZORDER_ANIM_NODE_0), e.node.active = !0, e.spriteFrame = this._atlas_hb_humanboy.getSpriteFrame(s);
                let o = cc.Vec2.ZERO;
                this._vAreasInfo[t].panelCoin.convertToWorldSpaceAR(cc.Vec2.ZERO, o);
                let i = Math.min(h, n.length - 1),
                    a = cc.Vec2.ZERO;
                n[i].node.convertToWorldSpaceAR(cc.Vec2.ZERO, a);
                let r = cc.v2(o.x - o.x, 0 - o.y),
                    l = cc.v2(a.x - o.x, a.y - o.y).signAngle(r) / Math.PI * 180;
                e.node.angle = -l, e.node.parent.convertToNodeSpaceAR(o, o), e.node.parent.convertToNodeSpaceAR(a, a), e.node.setPosition(o), e.node.runAction(cc.sequence(cc.delayTime(.3 * this._fActExecute_WayOut), cc.moveTo(.7 * this._fActExecute_WayOut, a).easing(cc.easeSineInOut()), cc.callFunc((() => {
                    e.node.removeFromParent(!0), _.tools.destroyNode(e.node)
                }), this)))
            }
            h > n.length - 1 ? this._nodeAnim.runAction(cc.sequence(cc.delayTime(.3 * this._fActExecute_WayOut), cc.callFunc((() => {
                this._showWayOutMoveAnim(e)
            }), this))) : this._nodeAnim.runAction(cc.sequence(cc.delayTime(.8 * this._fActExecute_WayOut), cc.callFunc((() => {
                n[h].node.active = !0, n[h].spriteFrame = this._atlas_hb_language.getSpriteFrame(r)
            }), this)))
        }
        _showWayOutAnim(e) {
            let t = this._getAreaIdxByBetOption(e);
            if (t < 0 || t >= this._vAreasInfo.length) return;
            let n = this._vAreasInfo[t].panelWayOut,
                o = this._vAreasInfo[t].vWayOutImg;
            if (!n || o.length <= 0) return;
            let i = l.getHumanboyRoom().mapZoneData.get(e);
            if (i) switch (this._vAreasInfo[t].eWayOutStyle) {
                case u.eGameboyWayOutStyle.GWS_NONE:
                    break;
                case u.eGameboyWayOutStyle.GWS_IMG:
                    this._updateWayOutImg(e, 1), this._showWayOutImgAnim(e);
                    break;
                case u.eGameboyWayOutStyle.GWS_TXT:
                    this._updateWayOutTxt(e);
                    break;
                case u.eGameboyWayOutStyle.GWS_AUTO: {
                    let t = !1,
                        n = i.vHistoryResults;
                    if (n.length > 0 && n.length > o.length) {
                        let e = !0;
                        for (let t = 0; t <= o.length; ++t) e = e && n[t] > 0;
                        e && (t = !0)
                    }
                    t ? this._updateWayOutTxt(e) : (this._updateWayOutImg(e, 1), this._showWayOutImgAnim(e))
                }
            }
        }
        _updateWayOutImg(e, t) {
            let n = this._getAreaIdxByBetOption(e);
            if (n < 0 || n >= this._vAreasInfo.length) return;
            this._vAreasInfo[n].panelWayOut.active = !0;
            let o = this._vAreasInfo[n].vWayOutImg,
                i = this._vAreasInfo[n].vWayOutImgSrcPos,
                a = l.getHumanboyRoom().mapZoneData.get(e);
            if (!a) return;
            let s = this._vAreasInfo[n].rtxtWayOut;
            s && (s.string = "", s.node.active = !1);
            let _ = "",
                r = a.vHistoryResults,
                h = Math.min(o.length, r.length),
                c = 0,
                d = 0;
            o.length >= r.length ? (c = h - 1, d = h - t) : (c = h - 1 + t, d = h);
            for (let t = 0; t < o.length; ++t) {
                o[t].node.setPosition(i[t]);
                let n = c - t;
                if (t < d && n >= 0 && n < r.length) {
                    let i = r[n];
                    _ = i > 0 ? e < I.humanboy_proto.BetZoneOption.POS_LUCK ? "humanboy_icon_circle_gray" : "humanboy_icon_circle_small_gray" : 0 === i ? "humanboy_icon_circle_green" : e < I.humanboy_proto.BetZoneOption.POS_LUCK ? "humanboy_icon_circle_red" : "humanboy_icon_circle_small_red", o[t].node.active = !0, o[t].spriteFrame = this._atlas_hb_language.getSpriteFrame(_)
                } else o[t].node.active = !1
            }
        }
        _updateWayOutTxt(e) {
            let t = this._getAreaIdxByBetOption(e);
            if (t < 0 || t >= this._vAreasInfo.length) return;
            let n = this._vAreasInfo[t].rtxtWayOut;
            if (!n) return;
            let o = this._vAreasInfo[t].vWayOutImg,
                i = this._vAreasInfo[t].iWayOutLoseLimitCount;
            for (let e = 0; e < o.length; ++e) o[e].node.active = !1;
            let a = l.getHumanboyRoom().eCurState,
                s = l.getHumanboyRoom().mapZoneData.get(e);
            if (!s) return;
            let r = s.luckLoseHand;
            if (r < 0) n.string = "";
            else if (0 === r) a === I.humanboy_proto.RoundState.WAIT_NEXT_ROUND ? _.StringTools.setRichTextString(n.node, _.config.getStringData("Humanboy_game_wayout_hit_txt")) : _.StringTools.setRichTextString(n.node, _.config.getStringData("Humanboy_game_wayout_hit_last_txt"));
            else {
                let e = "";
                e = 0 != i && r > i ? _.StringTools.formatC("%d+", i) : _.StringTools.formatC("%d", r), _.StringTools.setRichTextString(n.node, _.StringTools.formatC(_.config.getStringData("Humanboy_game_wayout_lose_txt"), e))
            }
            n.node.active = !0
        }
        _updateWayOut(e, t) {
            let n = this._getAreaIdxByBetOption(e);
            if (n < 0 || n >= this._vAreasInfo.length) return;
            let o = this._vAreasInfo[n].vWayOutImg,
                i = l.getHumanboyRoom().mapZoneData.get(e);
            if (i) switch (this._vAreasInfo[n].eWayOutStyle) {
                case u.eGameboyWayOutStyle.GWS_NONE:
                    break;
                case u.eGameboyWayOutStyle.GWS_IMG:
                    this._updateWayOutImg(e, t);
                    break;
                case u.eGameboyWayOutStyle.GWS_TXT:
                    this._updateWayOutTxt(e);
                    break;
                case u.eGameboyWayOutStyle.GWS_AUTO: {
                    let n = !1,
                        a = i.vHistoryResults;
                    if (a.length > 0 && a.length > o.length) {
                        let e = !0;
                        for (let t = 0; t <= o.length; ++t) e = e && a[t] > 0;
                        e && (n = !0)
                    }
                    n ? this._updateWayOutTxt(e) : this._updateWayOutImg(e, t)
                }
            }
        }
        _updateAllWayOut(e = 0) {
            for (let t = 0; t < this._vAreasInfo.length; ++t) this._updateWayOut(this._vAreasInfo[t].eZone, e)
        }
        _showChart(e) {
            this._humanboyChart || (this._humanboyChart = cc.instantiate(this.prefab_hb_chart).getComponent(f), this.node.addChild(this._humanboyChart.node, Ke.HL_ZORDER_PANEL_RECORD)), this._humanboyChart.showView(e)
        }
        _showAllWayOutAnim() {
            for (let e = 0; e < this._vAreasInfo.length; ++e) this._showWayOutAnim(this._vAreasInfo[e].eZone);
            this._nodeAnim.runAction(cc.sequence(cc.delayTime(this._fActExecute_WayOut), cc.callFunc((() => {
                this._showWayOutLightAnim()
            }), this)))
        }
        _showWayOutLightAnim() {
            let e = cc.Vec2.ZERO;
            this._btn_record.node.parent.convertToWorldSpaceAR(this._btn_record.node.position, e), this._nodeWayoutLightAnim.active = !0, this._nodeWayoutLightAnim.setPosition(this._nodeWayoutLightAnim.parent.convertToNodeSpaceAR(e));
            let t = this._atlWayoutLightAction.defaultClip;
            t.speed = this._getAnimClipSpeedByDuring(t, this._fActExecute_WayOutLight), t.wrapMode = cc.WrapMode.Normal, this._atlWayoutLightAction.play(), this._atlWayoutLightAction.on(cc.Animation.EventType.FINISHED, ((e, t) => {
                this._atlWayoutLightAction.off(cc.Animation.EventType.FINISHED), this._nodeWayoutLightAnim.active = !1
            }), this)
        }
        _hideWinAreaCoinsAnim(e, t) {
            for (let n = 0; n < this._vAreasInfo.length; ++n) {
                if (e && this._vAreasInfo[n].eZone >= I.humanboy_proto.BetZoneOption.POS_LUCK) continue;
                let o = l.getHumanboyRoom().mapZoneData.get(this._vAreasInfo[n].eZone);
                if (!o) return;
                let i = o.result;
                if (t ? i <= 0 : i < 0)
                    for (let e = 0; e < this._vAreasInfo[n].vCoinQueue.size(); ++e) {
                        let t = this._vAreasInfo[n].vCoinQueue.at(e);
                        if (!t.node.active) continue;
                        let o = cc.sequence(cc.fadeOut(this._fActDelayed_FlyWinCoin), cc.callFunc((() => {
                            t.node.active = !1
                        })));
                        t.node.runAction(o)
                    }
            }
        }
        _hideLoseAreaCoinsAnim(e, t) {
            for (let n = 0; n < this._vAreasInfo.length; ++n) {
                if (e && this._vAreasInfo[n].eZone >= I.humanboy_proto.BetZoneOption.POS_LUCK) continue;
                let o = l.getHumanboyRoom().mapZoneData.get(this._vAreasInfo[n].eZone);
                if (!o) return;
                let i = o.result;
                if (t ? i >= 0 : i > 0)
                    for (let e = 0; e < this._vAreasInfo[n].vCoinQueue.size(); ++e) {
                        let t = this._vAreasInfo[n].vCoinQueue.at(e);
                        if (!t.node.active) continue;
                        let o = cc.sequence(cc.fadeOut(this._fActDelayed_FlyWinCoin), cc.callFunc((() => {
                            t.node.active = !1
                        })));
                        t.node.runAction(o)
                    }
            }
        }
        _hideBetAreaCoinsAnim(e, t) {
            let n = this._getAreaIdxByBetOption(e);
            if (!(n < 0 || n >= this._vAreasInfo.length))
                for (let e = 0; e < this._vAreasInfo[n].vCoinQueue.size(); ++e) {
                    let o = this._vAreasInfo[n].vCoinQueue.at(e),
                        i = cc.sequence(cc.fadeOut(t), cc.callFunc((() => {
                            o.node.active = !1
                        })));
                    o.node.runAction(i)
                }
        }
        _hideAllBetCoinsAnim(e, t) {
            for (let n = 0; n < this._vAreasInfo.length; ++n)
                if (e) this._hideBetAreaCoinsAnim(this._vAreasInfo[n].eZone, t);
                else
                    for (let e = 0; e < this._vAreasInfo[n].vCoinQueue.size(); ++e) {
                        this._vAreasInfo[n].vCoinQueue.at(e).node.active = !1
                    }
        }
        _showDealerVictoryOrDefeatAnim() {
            switch (l.getHumanboyRoom().uDealerWinAll) {
                case 1: {
                    this._nodeDealerVictoryAnim.active = !0;
                    let e = this._atlDealerVictoryAction.defaultClip;
                    e.speed = this._getAnimClipSpeedByDuring(e, this._fActExecute_VictoryOrDefeat), e.wrapMode = cc.WrapMode.Normal, this._atlDealerVictoryAction.play(), this._atlDealerVictoryAction.on(cc.Animation.EventType.FINISHED, ((e, t) => {
                        this._atlDealerVictoryAction.off(cc.Animation.EventType.FINISHED), this._nodeDealerVictoryAnim.active = !1
                    }), this)
                }
                break;
                case 2: {
                    this._nodeDealerDefeatAnim.active = !0;
                    let e = this._atlDealerDefeatAction.defaultClip;
                    e.speed = this._getAnimClipSpeedByDuring(e, this._fActExecute_VictoryOrDefeat), e.wrapMode = cc.WrapMode.Normal, this._atlDealerDefeatAction.play(), this._atlDealerDefeatAction.on(cc.Animation.EventType.FINISHED, ((e, t) => {
                        this._atlDealerDefeatAction.off(cc.Animation.EventType.FINISHED), this._nodeDealerDefeatAnim.active = !1
                    }), this)
                }
            }
        }
        _isHitLuckBlow() {
            let e = !1;
            return l.getHumanboyRoom().mapZoneData.forEach(((t, n) => {
                if (t > I.humanboy_proto.BetZoneOption.POS_LUCK && n.result < 0) return e = !0, "break"
            })), e
        }
        _isHitSpecialCardType() {
            let e = !1;
            return l.getHumanboyRoom().mapZoneData.forEach(((t, n) => {
                if (t > I.humanboy_proto.BetZoneOption.POS_LUCK_1 && n.result < 0) return e = !0, "break"
            })), e
        }
        _getHitSpecialCardTypeZone() {
            let e = I.humanboy_proto.BetZoneOption.BetZoneOption_DUMMY;
            return l.getHumanboyRoom().mapZoneData.forEach(((t, n) => {
                if (t > I.humanboy_proto.BetZoneOption.POS_LUCK_1 && n.result < 0) return e = t, "break"
            })), e
        }
        _getSpecialCardTypeExecuteTime() {
            let e = 0;
            switch (l.getHumanboyRoom().eMaxLevel) {
                case I.humanboy_proto.CardResult.YI_DUI:
                case I.humanboy_proto.CardResult.LIAN_DUI:
                case I.humanboy_proto.CardResult.SAN_TIAO:
                    e = this._fActExecute_LuckBlow_1;
                    break;
                case I.humanboy_proto.CardResult.SHUN_ZI:
                case I.humanboy_proto.CardResult.TONG_HUA:
                    e = this._fActExecute_LuckBlow_2;
                    break;
                case I.humanboy_proto.CardResult.HU_LU:
                case I.humanboy_proto.CardResult.SI_TIAO:
                case I.humanboy_proto.CardResult.TONG_HUA_SHUN:
                case I.humanboy_proto.CardResult.HUANG_TONG:
                    e = this._fActExecute_LuckBlow_3
            }
            return e
        }
        _showSpecialCardTypeAnim(e = !0, t = 0) {
            if (this._clearSpecialCardTypeAnim(), !this._isHitSpecialCardType()) return;
            let n = "",
                o = "",
                i = "",
                a = "",
                s = 0,
                r = l.getHumanboyRoom().eMaxLevel,
                h = this._getLuckBlowOdds(r);
            switch (r) {
                case I.humanboy_proto.CardResult.SHUN_ZI: {
                    n = "zh_CN/game/humanboy/animation/special_card_type/special_card_type_2", o = _.config.getLanguagePath("game/humanboy/animation/special_card_type/special_straight");
                    let e = _.StringTools.numberToString(_.StringTools.clientGoldByServer(h.odds));
                    i = _.StringTools.formatC("%s%s", e, _.config.getStringData("Humanboy_game_fnt_anim_odd")), a = this._sound_special_card_type_middle, s = this._fActExecute_LuckBlow_2
                }
                break;
                case I.humanboy_proto.CardResult.TONG_HUA: {
                    n = "zh_CN/game/humanboy/animation/special_card_type/special_card_type_2", o = _.config.getLanguagePath("game/humanboy/animation/special_card_type/special_flush");
                    let e = _.StringTools.numberToString(_.StringTools.clientGoldByServer(h.odds));
                    i = _.StringTools.formatC("%s%s", e, _.config.getStringData("Humanboy_game_fnt_anim_odd")), a = this._sound_special_card_type_middle, s = this._fActExecute_LuckBlow_2
                }
                break;
                case I.humanboy_proto.CardResult.HU_LU: {
                    n = "zh_CN/game/humanboy/animation/special_card_type/special_card_type_3", o = _.config.getLanguagePath("game/humanboy/animation/special_card_type/special_gourd");
                    let e = _.StringTools.numberToString(_.StringTools.clientGoldByServer(h.odds));
                    i = _.StringTools.formatC("%s%s", e, _.config.getStringData("Humanboy_game_fnt_anim_odd")), a = this._sound_special_card_type_big, s = this._fActExecute_LuckBlow_3
                }
                break;
                case I.humanboy_proto.CardResult.SI_TIAO: {
                    n = "zh_CN/game/humanboy/animation/special_card_type/special_card_type_3", o = _.config.getLanguagePath("game/humanboy/animation/special_card_type/special_four_of_a_kind");
                    let e = _.StringTools.numberToString(_.StringTools.clientGoldByServer(h.odds));
                    i = _.StringTools.formatC("%s%s", e, _.config.getStringData("Humanboy_game_fnt_anim_odd")), a = this._sound_special_card_type_big, s = this._fActExecute_LuckBlow_3
                }
                break;
                case I.humanboy_proto.CardResult.TONG_HUA_SHUN: {
                    n = "zh_CN/game/humanboy/animation/special_card_type/special_card_type_3", o = _.config.getLanguagePath("game/humanboy/animation/special_card_type/special_straight_flush");
                    let e = _.StringTools.numberToString(_.StringTools.clientGoldByServer(h.odds));
                    i = _.StringTools.formatC("%s%s", e, _.config.getStringData("Humanboy_game_fnt_anim_odd")), a = this._sound_special_card_type_big, s = this._fActExecute_LuckBlow_3
                }
                break;
                case I.humanboy_proto.CardResult.HUANG_TONG: {
                    n = "zh_CN/game/humanboy/animation/special_card_type/special_card_type_3", o = _.config.getLanguagePath("game/humanboy/animation/special_card_type/special_royal_flush");
                    let e = _.StringTools.numberToString(_.StringTools.clientGoldByServer(h.odds));
                    i = _.StringTools.formatC("%s%s", e, _.config.getStringData("Humanboy_game_fnt_anim_odd")), a = this._sound_special_card_type_big, s = this._fActExecute_LuckBlow_3
                }
            }
            n.length > 0 && _.resMgr.loadPrefab(n, (n => {
                let r = cc.instantiate(n);
                if (r.name = "special_card_type_anim", r.setPosition(cc.Vec2.ZERO), this._nodeAnim.addChild(r, Ke.HL_ZORDER_ANIM_NODE_1), r.active = !0, i.length > 0) {
                    r.getChildByName("fnt_card_odd").getComponent(cc.Label).string = i
                }
                if (o.length > 0) {
                    let e = r.getChildByName("img_card_type").getComponent(cc.Sprite);
                    e.sizeMode = cc.Sprite.SizeMode.RAW, _.resMgr.setSpriteFrame(e.node, o)
                }
                let l = r.getComponent(cc.Animation);
                e ? (this._playSoundEffect(a), l.defaultClip.speed = this._getAnimClipSpeedByDuring(l.defaultClip, s), l.defaultClip.wrapMode = cc.WrapMode.Normal, l.play(), l.on(cc.Animation.EventType.FINISHED, ((e, t) => {
                    l.off(cc.Animation.EventType.FINISHED), r.removeFromParent(!0), _.tools.destroyNode(r), this._clearSpecialCardTypeHighLightAnim()
                }), this)) : (l.play(), this._nodeAnim.runAction(cc.sequence(cc.delayTime(t), cc.callFunc((() => {
                    r.removeFromParent(!0), _.tools.destroyNode(r), this._clearSpecialCardTypeHighLightAnim()
                }), this))))
            }))
        }
        _clearSpecialCardTypeAnim(e = !0) {
            let t = cc.find("special_card_type_anim", this._nodeAnim);
            t && cc.isValid(t, !0) && (t.removeFromParent(e), e && t.destroy())
        }
        _showSpecialCardTypeHighLightAnim() {
            if (this._clearSpecialCardTypeHighLightAnim(), !this._isHitSpecialCardType()) return;
            let e = cc.Vec2.ZERO,
                t = "",
                n = l.getHumanboyRoom().eMaxLevelOption;
            switch (n) {
                case I.humanboy_proto.BetZoneOption.HOST:
                    t = "zh_CN/game/humanboy/animation/light_box/light_box_1", this._panel_dealer.getChildByName("panel_dealer_card").convertToWorldSpaceAR(cc.Vec2.ZERO, e);
                    break;
                case I.humanboy_proto.BetZoneOption.POS1:
                case I.humanboy_proto.BetZoneOption.POS2:
                case I.humanboy_proto.BetZoneOption.POS3:
                case I.humanboy_proto.BetZoneOption.POS4: {
                    let o = this._getAreaIdxByBetOption(n);
                    if (o < 0 || o >= this._vAreasInfo.length) break;
                    switch (this._vAreasInfo[o].panelBorder.convertToWorldSpaceAR(cc.Vec2.ZERO, e), this._eGameboyScreenType) {
                        case u.eGameboyScreenType.GST_SCREEN_BROAD:
                            t = "zh_CN/game/humanboy/animation/light_box/light_box_4";
                            break;
                        case u.eGameboyScreenType.GST_SCREEN_NARROW:
                            t = "zh_CN/game/humanboy/animation/light_box/light_box_3";
                            break;
                        case u.eGameboyScreenType.GST_SCREEN_NORMAL:
                        default:
                            t = "zh_CN/game/humanboy/animation/light_box/light_box_2"
                    }
                }
            }
            _.resMgr.loadPrefab(t, (t => {
                let n = cc.instantiate(t);
                n.name = "special_card_type_high_light_anim", this._nodeAnim.addChild(n, Ke.HL_ZORDER_ANIM_NODE_1), n.setPosition(n.parent.convertToNodeSpaceAR(e)), n.active = !0;
                let o = n.getComponent(cc.Animation);
                o.defaultClip.speed = this._getAnimClipSpeedByDuring(o.defaultClip, this._fActExecute_LuckBlowHightLight), o.defaultClip.wrapMode = cc.WrapMode.Normal, o.play()
            }))
        }
        _clearSpecialCardTypeHighLightAnim(e = !0) {
            let t = cc.find("special_card_type_high_light_anim", this._nodeAnim);
            t && cc.isValid(t, !0) && (t.removeFromParent(e), e && t.destroy())
        }
        _getLuckBlowOdds(e) {
            let t = I.humanboy_proto.OddsDetail.create(),
                n = I.humanboy_proto.BetZoneOption.BetZoneOption_DUMMY,
                o = new s;
            o.add(I.humanboy_proto.CardResult.YI_DUI, I.humanboy_proto.BetZoneOption.POS_LUCK_2), o.add(I.humanboy_proto.CardResult.LIAN_DUI, I.humanboy_proto.BetZoneOption.POS_LUCK_3), o.add(I.humanboy_proto.CardResult.SAN_TIAO, I.humanboy_proto.BetZoneOption.POS_LUCK_4), o.add(I.humanboy_proto.CardResult.SHUN_ZI, I.humanboy_proto.BetZoneOption.POS_LUCK_5), o.add(I.humanboy_proto.CardResult.TONG_HUA, I.humanboy_proto.BetZoneOption.POS_LUCK_5), o.add(I.humanboy_proto.CardResult.HU_LU, I.humanboy_proto.BetZoneOption.POS_LUCK_6), o.add(I.humanboy_proto.CardResult.SI_TIAO, I.humanboy_proto.BetZoneOption.POS_LUCK_6), o.add(I.humanboy_proto.CardResult.TONG_HUA_SHUN, I.humanboy_proto.BetZoneOption.POS_LUCK_6), o.add(I.humanboy_proto.CardResult.HUANG_TONG, I.humanboy_proto.BetZoneOption.POS_LUCK_6), o.forEach(((t, o) => {
                if (t === e) return n = o, "break"
            }));
            let i = l.getHumanboyRoom().tCurRoom.oddsDetail;
            for (let e = 0; e < i.length; ++e)
                if (n == i[e].option) {
                    t = I.humanboy_proto.OddsDetail.create(i[e]);
                    break
                } return t
        }
        _isHitJackpotAward() {
            return l.getHumanboyRoom().vHitJackpotAward.length > 0
        }
        _getJackpotAwardExecuteTime() {
            let e = 0,
                t = !1,
                n = l.getHumanboyRoom().vHitJackpotAward;
            for (let o = 0; o < n.length; ++o) e += this._fActDelayed_JackPot, e += this._fActExecute_JackPot, n[o].hitJackpotAwardData.length > 0 && (t = !0, e += this._fActDelayed_FlyWinCoin, e += this._fActExecute_FlyWinCoin);
            return t && (e += this._fActDelayed_FlyWinCoin), e
        }
        _showJackPotAnim(e = !0, t = 0) {
            if (this._clearJackPotAnim(), !this._isHitJackpotAward()) return;
            let n = 0,
                o = l.getHumanboyRoom().vHitJackpotAward;
            for (let i = 0; i < o.length; ++i)
                if (e) {
                    let a = o[i].option;
                    n += this._fActDelayed_JackPot, this._nodeAnim.runAction(cc.sequence(cc.delayTime(n), cc.callFunc((() => {
                        this._showJackPotAnimByAreaZone(a, e, t)
                    }), this))), n += this._fActExecute_JackPot, o[i].hitJackpotAwardData.length > 0 && (n += this._fActDelayed_FlyWinCoin, this._nodeAnim.runAction(cc.sequence(cc.delayTime(n), cc.callFunc((() => {
                        this._playSoundEffect(this._sound_get_win_coin), this._showJackPotFlagsAndFlyCoinAnim(a)
                    }), this))), n += this._fActExecute_FlyWinCoin)
                } else this._showJackPotAnimByAreaZone(o[i].option, e, t)
        }
        _clearJackPotAnim(e = !0) {
            let t = cc.find("jackpot_anim", this._nodeAnim);
            t && cc.isValid(t, !0) && (t.removeFromParent(e), e && t.destroy())
        }
        _showJackPotAnimByAreaZone(e, t = !0, n = 0) {
            let o = this._getAreaIdxByBetOption(e);
            if (o < 0 || o >= this._vAreasInfo.length) return;
            let i = this._vAreasInfo[o].panelBorder,
                a = cc.Vec2.ZERO;
            i.convertToWorldSpaceAR(cc.Vec2.ZERO, a);
            let s = "",
                h = "";
            switch (this._eGameboyScreenType) {
                case u.eGameboyScreenType.GST_SCREEN_BROAD:
                    s = "zh_CN/game/humanboy/animation/jackpot/jackpot_broad";
                    break;
                case u.eGameboyScreenType.GST_SCREEN_NARROW:
                    s = "zh_CN/game/humanboy/animation/jackpot/jackpot_narrow";
                    break;
                case u.eGameboyScreenType.GST_SCREEN_NORMAL:
                default:
                    s = "zh_CN/game/humanboy/animation/jackpot/jackpot"
            }
            l.getHumanboyRoom().vHitJackpotAward;
            _.resMgr.loadPrefab(s, (o => {
                let i = cc.instantiate(o);
                this._nodeAnim.addChild(i, Ke.HL_ZORDER_ANIM_NODE_1), i.name = "jackpot_anim", i.setPosition(i.parent.convertToNodeSpaceAR(a)), i.active = !0;
                let s = l.getHumanboyRoom().vPlayerHoleCard;
                for (let t = 0; t < s.length; ++t)
                    if (s[t].option === e) {
                        switch (s[t].level) {
                            case I.humanboy_proto.CardResult.LIAN_DUI:
                                h = _.config.getLanguagePath("game/humanboy/animation/special_card_type/special_two_pairs");
                                break;
                            case I.humanboy_proto.CardResult.SAN_TIAO:
                                h = _.config.getLanguagePath("game/humanboy/animation/special_card_type/special_three_of_a_kind");
                                break;
                            case I.humanboy_proto.CardResult.SHUN_ZI:
                                h = _.config.getLanguagePath("game/humanboy/animation/special_card_type/special_straight");
                                break;
                            case I.humanboy_proto.CardResult.TONG_HUA:
                                h = _.config.getLanguagePath("game/humanboy/animation/special_card_type/special_flush");
                                break;
                            case I.humanboy_proto.CardResult.HU_LU:
                                h = _.config.getLanguagePath("game/humanboy/animation/special_card_type/special_gourd");
                                break;
                            case I.humanboy_proto.CardResult.SI_TIAO:
                                h = _.config.getLanguagePath("game/humanboy/animation/special_card_type/special_four_of_a_kind");
                                break;
                            case I.humanboy_proto.CardResult.TONG_HUA_SHUN:
                                h = _.config.getLanguagePath("game/humanboy/animation/special_card_type/special_straight_flush");
                                break;
                            case I.humanboy_proto.CardResult.HUANG_TONG:
                                h = _.config.getLanguagePath("game/humanboy/animation/special_card_type/special_royal_flush")
                        } {
                            let e = i.getChildByName("Node_Jackpot");
                            if (h.length > 0) {
                                let t = e.getChildByName("node_card_type").getChildByName("img").getComponent(cc.Sprite);
                                t.sizeMode = cc.Sprite.SizeMode.RAW, _.resMgr.setSpriteFrame(t.node, h)
                            }
                            let n = s[t].holeCards,
                                o = e.getChildByName("node_card");
                            for (let e = 0; e < o.childrenCount; ++e) {
                                let t = o.getChildByName(_.StringTools.formatC("card_%d", e));
                                if (!t) continue;
                                if (e < 0 || e >= n.length) continue;
                                let i = r.create(this._strCardFacePath, this._strCardBackPath);
                                i.node.setAnchorPoint(t.getAnchorPoint()), i.node.setPosition(cc.Vec2.ZERO), i.SetContent(n[e].number, n[e].suit), i.SetFace(!0), t.addChild(i.node)
                            }
                        }
                    } let c = i.getComponent(cc.Animation);
                t ? (this._playSoundEffect(this._sound_jackpot), c.defaultClip.speed = this._getAnimClipSpeedByDuring(c.defaultClip, this._fActExecute_JackPot), c.defaultClip.wrapMode = cc.WrapMode.Normal, c.play(), c.on(cc.Animation.EventType.FINISHED, ((e, t) => {
                    c.off(cc.Animation.EventType.FINISHED), i.removeFromParent(!0), _.tools.destroyNode(i)
                }), this)) : (c.play(), this._nodeAnim.runAction(cc.sequence(cc.delayTime(n), cc.callFunc((() => {
                    i.removeFromParent(!0), _.tools.destroyNode(i)
                }), this))))
            }))
        }
        _updatePlayerWinCount(e, t = !1) {
            let n = this._getPlayerHeadNodesByUid(e);
            for (let o = 0; o < n.length; ++o) {
                let i = n[o];
                if (this._vOtherPlayerInfo[0].nodeHead === i || this._vOtherPlayerInfo[1].nodeHead === i) continue;
                let a = "win_player_win_count_" + i.uuid,
                    s = cc.find(a, this.node);
                s && cc.isValid(s, !0) && (this.node.removeChild(s), s.destroy());
                let r = l.getHumanboyRoom().getPlayerKeepWinCountByUid(e);
                if (r >= 3) {
                    r = r > 10 ? 11 : r;
                    let e = i === this._img_self_head.node ? 40 : 70,
                        n = cc.Vec2.ZERO;
                    i.convertToWorldSpaceAR(cc.v2(0, e), n);
                    let o = (new cc.Node).addComponent(cc.Sprite);
                    this.node.addChild(o.node, Ke.HL_ZORDER_IMG_WIN_COUNT), o.node.active = !0, o.node.name = a, o.node.setPosition(o.node.parent.convertToNodeSpaceAR(n));
                    let s = _.StringTools.formatC("win_count_%d", r);
                    if (o.spriteFrame = this._atlas_cb_language.getSpriteFrame(s), t) {
                        let e = cc.v2(o.node.position),
                            t = cc.v2(e),
                            n = cc.Vec2.ZERO;
                        if (i.parent.convertToWorldSpaceAR(i.position, n), n.x < cc.winSize.width / 2) {
                            let e = (0 - o.node.parent.anchorX) * o.node.parent.width;
                            t.x = e - o.node.width
                        } else {
                            let e = (1 - o.node.parent.anchorX) * o.node.parent.width;
                            t.x = e + o.node.width
                        }
                        o.node.setPosition(t);
                        let a = cc.moveTo(.8, e).easing(cc.easeBackOut());
                        o.node.runAction(a)
                    }
                }
            }
        }
        _updateAllPlayerWinCount(e = !1) {
            this._updatePlayerWinCount(_.dataHandler.getUserData().u32Uid, e);
            for (let t = 0; t < this._vOtherPlayerInfo.length; ++t) {
                let n = l.getHumanboyRoom().vOtherPlayer;
                t < n.length && this._updatePlayerWinCount(n[t].uid, e)
            }
        }
        _showWinPlayerLightAnim(e, t) {
            let n = this._getPlayerHeadNodesByUid(e);
            if (n.length <= 0) return;
            this._nodeAnim.runAction(cc.sequence(cc.delayTime(t), cc.callFunc((() => {
                for (let e = 0; e < n.length; ++e) {
                    let t = n[e];
                    if (t === this._img_self_head.node) continue;
                    let o = cc.find("win_player_light", t);
                    o && cc.isValid(o, !0) && (t.removeChild(o), o.destroy());
                    let i = cc.instantiate(this.prefab_cb_win_player_light);
                    t.addChild(i), i.active = !0, i.name = "win_player_light", i.setPosition(cc.Vec2.ZERO), i.zIndex = 10;
                    let a = i.getComponent(cc.Animation);
                    a.defaultClip.wrapMode = cc.WrapMode.Loop, a.play()
                }
            }), this)))
        }
        _hideAllWinPlayerLightAnim() {
            for (let e = 0; e < this._vOtherPlayerInfo.length; ++e) {
                let t = cc.find("win_player_light", this._vOtherPlayerInfo[e].nodeHead);
                t && cc.isValid(t, !0) && (this._vOtherPlayerInfo[e].nodeHead.removeChild(t), t.destroy())
            }
        }
        _showCoinToNormalAreaFromDealer(e = !0) {
            let t = new s,
                n = [];
            _.StringTools.deepCopy(l.getHumanboyRoom().vPlayerSettles, n), n.push(l.getHumanboyRoom().tOtherPlayerSettle);
            for (let e = 0; e < n.length; ++e) {
                let o = n[e];
                o.uid, o.pos4WinAmount;
                for (let e = 0; e < o.settle.length; ++e) {
                    let n = o.settle[e],
                        i = n.option,
                        a = n.winAmount,
                        s = n.betAmount;
                    if (i >= I.humanboy_proto.BetZoneOption.POS_LUCK) continue;
                    let _ = this._getAreaIdxByBetOption(i);
                    if (_ < 0 || _ >= this._vAreasInfo.length) continue;
                    let r = l.getHumanboyRoom().mapZoneData.get(i);
                    if (r && r.result < 0 && a > 0) {
                        t.get(_) || t.add(_, 0);
                        let e = t.get(_);
                        e += a, e -= s, t.add(_, e)
                    }
                }
            }
            let o = l.getHumanboyRoom().vDealerInfo;
            for (let n = 0; n < o.length; ++n) {
                if (n < 0 || n >= this._vDealerInfo.length) continue;
                let o = this._vDealerInfo[n].imgGold,
                    i = cc.Vec2.ZERO;
                o.node.convertToWorldSpaceAR(cc.Vec2.ZERO, i), t.forEach(((t, n) => {
                    let o = t,
                        a = Math.abs(n),
                        s = this._getBetDetailAmounts(a);
                    for (let t = 0; t < s.length; ++t) {
                        let n = .2 + .02 * t;
                        this._showCoinAnimFromPos(i, o, s[t], e, n)
                    }
                }))
            }
        }
        _showCoinToLuckBlowAreaFromSystem(e = !0) {
            let t = [];
            _.StringTools.deepCopy(l.getHumanboyRoom().vPlayerSettles, t), t.push(l.getHumanboyRoom().tOtherPlayerSettle);
            for (let n = 0; n < t.length; ++n) {
                let o = t[n];
                for (let t = 0; t < o.settle.length; ++t) {
                    let n = o.settle[t],
                        i = n.winAmount;
                    if (i <= 0) continue;
                    i -= n.betAmount;
                    let a = this._getAreaIdxByBetOption(n.option);
                    if (a < 0 || a >= this._vAreasInfo.length) continue;
                    let s = this._vAreasInfo[a].panelCoin,
                        _ = cc.Vec2.ZERO;
                    s.convertToWorldSpaceAR(cc.Vec2.ZERO, _);
                    let r = this._getBetDetailAmounts(i);
                    for (let t = 0; t < r.length; ++t) {
                        let n = .2 + .02 * t;
                        this._showCoinAnimFromPos(_, a, r[t], e, n)
                    }
                }
            }
        }
        _showFlyCoinToPlayerAnim(e, t, n, o = !0, i = null) {
            if (t <= 0 || !n) return;
            let a = this._getPlayerCoinNodesByUid(e);
            0 === a.length && (console.log("showFlyCoinToPlayerAnim - playerSettles uid: %d not in gameplayers, use player list button", e), a.push(this._btn_playerList));
            for (let s = 0; s < a.length; ++s) {
                if (e === _.dataHandler.getUserData().u32Uid && s > 0) continue;
                let r = a[s];
                {
                    let e = this._getBetDetailAmounts(t);
                    for (let t = 0; t < e.length; ++t) {
                        let i = this._createFlyCoin(e[t]);
                        this._nodeAnim.addChild(i.node, Ke.HL_ZORDER_ANIM_NODE_0);
                        let a = cc.Vec2.ZERO;
                        o && (a.x = _.StringTools.randomRange(.3 * n.width, .7 * n.width) - n.width * n.anchorX, a.y = _.StringTools.randomRange(.3 * n.height, .7 * n.height) - n.height * n.anchorY);
                        let s = cc.Vec2.ZERO;
                        n.convertToWorldSpaceAR(a, s);
                        let l = cc.Vec2.ZERO;
                        r.convertToWorldSpaceAR(cc.Vec2.ZERO, l), i.node.parent.convertToNodeSpaceAR(s, s), i.node.parent.convertToNodeSpaceAR(l, l), i.node.setPosition(s), i.node.active = !1, this.scheduleOnce((e => {
                            i.node.active = !0, i.node.runAction(cc.sequence(cc.delayTime(.2 + .02 * t), cc.moveTo(.5, l).easing(cc.easeOut(.8)), cc.destroySelf()))
                        }), this._fActDelayed_FlyWinCoin)
                    }
                }
                i && t > 0 && (this._showHeadElasticAnim(r, this._fActExecute_FlyWinCoin), this._showWinPlayerLightAnim(e, this._fActExecute_FlyWinCoin), this._showAddCoinAnim(r, t, this._fActExecute_FlyWinCoin, i))
            }
        }
        _showAddCoinAnim(e, t, n, o = null) {
            e && this._nodeAnim.runAction(cc.sequence(cc.delayTime(n), cc.callFunc((() => {
                let n = l.getHumanboyRoom().transNumberToString(t, 2, !0),
                    i = cc.instantiate(this.prefab_hb_flutterScore).getComponent(R);
                i.node.setScale(1.4), this.node.addChild(i.node, Ke.HL_ZORDER_ANIM_NODE_2), i.init(n);
                let a = cc.Vec2.ZERO;
                e.convertToWorldSpaceAR(cc.Vec2.ZERO, a), i.node.parent.convertToNodeSpaceAR(a, a);
                {
                    let t = 10,
                        n = cc.winSize.width / 2 - Math.abs(a.x),
                        o = i.node.width * i.node.scaleX,
                        s = (i.node.height, i.node.scaleY, !1);
                    for (let t = 0; t < this._vDealerInfo.length; ++t)
                        if (e === this._vDealerInfo[t].imgGold.node) {
                            s = !0;
                            break
                        } if (s) {
                        let i = Math.max(0, o / 2 - n);
                        a.x += i, a.y -= e.height / 2 + t
                    } else if (e === this._img_self_gold.node) {
                        let i = Math.max(0, o / 2 - n);
                        a.x += i, a.y += e.height / 2 + t
                    } else if (e === this._btn_playerList) {
                        let i = Math.max(0, o / 2 - n);
                        a.x -= i, a.y += e.height / 2 + t
                    } else a.x < 0 ? a.x += e.width / 2 + o / 2 + t : a.x > 0 && (a.x -= e.width / 2 + o / 2 + t)
                }
                i.node.setPosition(a), i.show(), this._nodeAnim.runAction(cc.sequence(cc.delayTime(this._fActDelayed_FlyWinCoin), cc.callFunc(o, this)))
            }), this)))
        }
        _showHeadElasticAnim(e, t) {
            if (!e) return;
            let n = e.scale;
            e.runAction(cc.sequence(cc.delayTime(t), cc.scaleTo(.5, n + .2).easing(cc.easeBackOut()), cc.scaleTo(.2, n - .2), cc.scaleTo(.5, n).easing(cc.easeBackOut())))
        }
        _showDealerAddCoinAnim(e) {
            let t = l.getHumanboyRoom().vDealerInfo;
            for (let n = 0; n < t.length; ++n) {
                if (n < 0 || n >= this._vDealerInfo.length) continue;
                let o = this._vDealerInfo[n].imgGold.node,
                    i = t[n].recentlyWinCoin;
                this._showHeadElasticAnim(o, e), this._showAddCoinAnim(o, i, e), this._nodeAnim.runAction(cc.sequence(cc.delayTime(e), cc.callFunc((() => {
                    this._updateDealerInfo()
                }), this)))
            }
        }
        _showDealerWinFlagsAndFlyCoinsAnim(e) {
            this._hideLoseAreaCoinsAnim(!0, !1);
            let t = l.getHumanboyRoom().vDealerInfo;
            for (let n = 0; n < t.length; ++n) {
                if (n < 0 || n >= this._vDealerInfo.length) continue;
                let t = this._vDealerInfo[n].imgGold.node,
                    o = cc.Vec2.ZERO,
                    i = cc.Vec2.ZERO;
                e.forEach(((e, n) => {
                    let a = this._getAreaIdxByBetOption(e);
                    if (a < 0 || a >= this._vAreasInfo.length) return "continue";
                    let s = this._vAreasInfo[a].panelCoin,
                        r = this._getBetDetailAmounts(n);
                    for (let e = 0; e < r.length; ++e) {
                        o.x = _.StringTools.randomRange(.3 * s.width, .7 * s.width) - s.width * s.anchorX, o.y = _.StringTools.randomRange(.3 * s.height, .7 * s.height) - s.height * s.anchorY, s.convertToWorldSpaceAR(o, o), t.convertToWorldSpaceAR(cc.Vec2.ZERO, i);
                        let n = this._createFlyCoin(r[e]);
                        this._nodeAnim.addChild(n.node, Ke.HL_ZORDER_ANIM_NODE_0), n.node.parent.convertToNodeSpaceAR(o, o), n.node.parent.convertToNodeSpaceAR(i, i), n.node.setPosition(o), n.node.active = !0, n.node.runAction(cc.sequence(cc.delayTime(.2 + .02 * e), cc.moveTo(.5, i).easing(cc.easeOut(.8)), cc.destroySelf()))
                    }
                }))
            }
        }
        _showJackPotFlagsAndFlyCoinAnim(e) {
            let t = -1,
                n = l.getHumanboyRoom().vHitJackpotAward;
            for (let o = 0; o < n.length; ++o)
                if (n[o].option === e) {
                    t = o;
                    break
                } if (!(t < 0))
                for (let e = 0; e < n[t].hitJackpotAwardData.length; ++e) {
                    let o = n[t].hitJackpotAwardData[e],
                        i = o.uid,
                        a = o.amount;
                    this._showFlyCoinToPlayerAnim(i, a, this._panel_jackpot, !0, (() => {
                        let e = l.getHumanboyRoom().getPlayerBeforeSettlementGold(i);
                        e += a, this._updatePlayerTempGold(i, e), l.getHumanboyRoom().setPlayerBeforeSettlementGold(i, e)
                    }))
                }
        }
        _showAllAreaWinFlagsAndFlyCoinAnim() {
            this._hideWinAreaCoinsAnim(!1, !0);
            let e = [];
            _.StringTools.deepCopy(l.getHumanboyRoom().vPlayerSettles, e), e.push(l.getHumanboyRoom().tOtherPlayerSettle);
            for (let t = 0; t < e.length; ++t) {
                let n = e[t],
                    o = n.uid,
                    i = n.pos4WinAmount,
                    a = n.posLuckWinAmount;
                for (let e = 0; e < n.settle.length; ++e) {
                    let t = n.settle[e],
                        i = t.option,
                        a = this._getAreaIdxByBetOption(i);
                    if (a < 0 || a >= this._vAreasInfo.length) continue;
                    let s = t.winAmount;
                    if (s > 0) {
                        let e = this._vAreasInfo[a].panelCoin;
                        this._showFlyCoinToPlayerAnim(o, s, e, !0)
                    }
                } {
                    let e = i + a;
                    if (e > 0) {
                        let t = this._getPlayerCoinNodesByUid(o);
                        0 === t.length && (console.log("playerSettles uid: %d not in gameplayers, use player list button", o), t.push(this._btn_playerList));
                        for (let n = 0; n < t.length; ++n) {
                            if (n > 0 && o === _.dataHandler.getUserData().u32Uid) continue;
                            let i = t[n];
                            this._showHeadElasticAnim(i, this._fActExecute_FlyWinCoin), this._showWinPlayerLightAnim(o, this._fActExecute_FlyWinCoin), this._showAddCoinAnim(i, e, this._fActExecute_FlyWinCoin)
                        }
                    }
                }
            }
        }
        _onMsgRecharge(e) {
            cc.sys.isBrowser ? _.SHOP.RechargeClick(!0) : (_.viewAdaptive.isselfchange = !0, _.viewAdaptive.humanboyroomid = l.getHumanboyRoom().u32RoomId, this._backToMainScene(""))
        }
        _onMsgSoundSwitch() {
            _.tools.isPlayMusic() ? _.AudioMgr.playMusic(this._sound_BGM, !0) : _.AudioMgr.stopMusic()
        }
        _onMsgGameError(e) {
            let t = _.Number(e),
                n = _.StringTools.formatC("Humanboy_ServerErrorCode%d", t);
            if (t === I.humanboy_proto.ErrorCode.BET_TOO_SMALL) {
                let e = _.StringTools.clientGoldByServer(l.getHumanboyRoom().tCurRoom.smallBet);
                this._showGameToast(_.StringTools.formatC(_.config.getStringData(n), _.StringTools.numberToString(e)))
            } else this._showGameToast(_.StringTools.formatC("%s", _.config.getStringData(n)))
        }
        _onMsgKick(e) {
            if (e.idle_roomid > 0) return void(this._bSwitchTable || (l.getHumanboyRoom().idle_roomid = e.idle_roomid, this.showSwitchTable()));
            switch (_.Number(e.kickType)) {
                case I.humanboy_proto.Kick.Kick_DUMMY:
                    break;
                case I.humanboy_proto.Kick.IDLE_LONG_TIME: {
                    let e = _.config.getStringData("Humanboy_server_kick_long_time_text");
                    this._backToMainScene(e)
                }
                break;
                case I.humanboy_proto.Kick.Stop_World: {
                    let e = _.config.getStringData("Humanboy_server_kick_stop_world_text");
                    this._backToMainScene(e)
                }
            }
        }
        _onMsgGameDataSyn(e) {
            switch (console.log("HumanboyMainView.RoundState =  %d", l.getHumanboyRoom().eCurState), this._bSwitchTable = !1, this._resetAllUI(), l.getHumanboyRoom().eCurState) {
                case I.humanboy_proto.RoundState.RoundState_DUMMY:
                case I.humanboy_proto.RoundState.GAME_PENDING:
                    break;
                case I.humanboy_proto.RoundState.NEW_ROUND:
                    this._getLeftTime() >= this._fActExecute_RoundStart + this._fActExecute_SendCard ? this._showRoundStartAnim() : this._resetAllCards(!0), this._updateAllWayOut();
                    break;
                case I.humanboy_proto.RoundState.BET:
                    this._resetAllCards(!0), this._recoverAreasCoin(!0), this._getLeftTime() >= this._fActDelayed_FightBegin + this._fActExecute_FightBegin && this._showFightBeginAnim(), this._onMsgGameStartBet(this), this._updateAllWayOut(), l.getHumanboyRoom().bCanAdvanceAuto && this._checkAdvanceAutoReq();
                    break;
                case I.humanboy_proto.RoundState.WAIT_NEXT_ROUND:
                    this._resetAllCards(!0), this._recoverAreasCoin(!1), this._showAllCardsAnim(!1), this._showAllWinFlagAnim(), this._getLeftTime() >= this._fActExecute_WayOutLight ? (this._updateAllWayOut(1), this._showAllWayOutAnim()) : this._updateAllWayOut(), this._showWaittingTime(!0);
                    break;
                case I.humanboy_proto.RoundState.WAIT_NEXT_ROUND2:
                    this._showNextRoundPrepare()
            }
        }
        _onMsgBetAmountLevelChange(e) {
            this._updateBetAmountLevel(), this._updateBetButtonState()
        }
        _onMsgAdvanceAutobetSet(e) {
            this._setAutoBetBtnStytle(u.eGameboyAutoBtnStyle.GAB_STYLE_ADVANCE_USING), !l.getHumanboyRoom().bHasBetInCurRound && l.getHumanboyRoom().bCanAuto && this._checkAdvanceAutoReq()
        }
        _onMsgAdvanceAutobet(e) {
            let t = _.Number(e);
            switch (t) {
                case I.humanboy_proto.ErrorCode.OK:
                    break;
                case I.humanboy_proto.ErrorCode.AUTO_BET_EXCEED_LIMIT:
                    this._humanboyAdvancedAuto && (this._humanboyAdvancedAuto.adaptAdvanceAutoTipsPos(this._btn_betAuto.node), this._humanboyAdvancedAuto.showAdvanceAutoTips(_.config.getStringData(_.StringTools.formatC("Humanboy_ServerErrorCode%d", t))));
                    break;
                case I.humanboy_proto.ErrorCode.AUTO_BET_NO_MONEY: {
                    let e = "humanboy_dialog_recharge",
                        n = this.node.getChildByName(e);
                    n || (n = cc.instantiate(this.prefab_hb_dialog), n.name = e, this.node.addChild(n, Ke.HL_ZORDER_PANEL_SERVER_TOAST), n.getComponent(S).show(_.config.getStringData(_.StringTools.formatC("Humanboy_ServerErrorCode%d", t)), _.config.getStringData("CowBoy_btn_desc_auto_cancel"), _.config.getStringData("CowBoy_btn_desc_auto_recharge"), (e => {
                        _.humanboyNet.reqCancelAdvanceAutoBet()
                    }), (e => {
                        _.MessageCenter.send("on_recharge_notify")
                    })), this._humanboyJackpot && this._humanboyJackpot.hide(!1))
                }
                break;
                default:
                    _.MessageCenter.send("on_humanboy_server_error", t)
            }
            this._humanboyAdvancedAuto && (this._humanboyAdvancedAuto.adaptAdvanceAutoCountPos(this._btn_betAuto.node), this._humanboyAdvancedAuto.showAdvanceAutoCount())
        }
        _onMsgAdvanceAutobetCancel(e) {
            this._updateBetAmountLevel(), this._updateBetButtonState()
        }
        _onMsgRoomParamChange(e) {
            this._updateBetOddsDetail()
        }
        _onMsgGameDeal(e) {
            this._resetGameView(), this._updateBetButtonState(), this._updateBetAreaTouchEnabled(), this._updateDealerInfo(), this._updateSelfInfo(), this._updateOtherPlayersInfo(), this._updateAllPlayerWinCount(), this._showRoundStartAnim()
        }
        _onMsgGameStartBet(e) {
            this._resetAllCards(!0), this._resetLeftTime(), this._updateTimeBetClock(), this._updateBetButtonState(), this._updateBetAreaTouchEnabled(), this._checkAdvanceAutoReq()
        }
        _onMsgGameRoundEnd(e) {
            this._resetLeftTime(), this._restAllTimelineAnims(), this._updateBetButtonState(!1), this._updateBetAreaTouchEnabled(), this._showRoundEndAnim(), this._humanboyAdvancedAuto && this._humanboyAdvancedAuto.hideSelectPanel(!1)
        }
        _onMsgWillStartNotify(e) {
            this._resetLeftTime(), this._showNextRoundPrepare(), this._humanboyChart && this._humanboyChart.node.active && _.MessageCenter.send("humanboy_start_history_move_anim")
        }
        _showDealerListView(e, t) {
            this._dealerListView || (this._dealerListView = cc.instantiate(this.prefab_hb_dealerList).getComponent(D), this.node.addChild(this._dealerListView.node, Ke.HL_ZORDER_PANEL_DEALERLIST)), this._dealerListView.show(e, t), _.humanboyNet.requestBuyStockNum(), _.humanboyNet.requestDealerList()
        }
        _onClickDealerBtn(e) {
            switch (this._playSoundEffect(this._sound_button), this._btnStatus) {
                case Je.HDB_STATUS_NONE:
                    break;
                case Je.HDB_STATUS_DEALER_UP:
                    this._showDealerListView(!0, O.HDLV_TYPE_WATTING);
                    break;
                case Je.HDB_STATUS_DEALER_DOWN:
                    _.humanboyNet.requestDownDealer()
            }
        }
        _onClickAreaCoinPanel(e) {
            if (!(e < 0 || e >= this._vAreasInfo.length))
                if (l.getHumanboyRoom().eCurState === I.humanboy_proto.RoundState.BET && this._getLeftTime() > 0) {
                    if (this._nCurBetBtnIndex < 0) return void this._showGameToast(_.config.getStringData("Humanboy_not_select_betbtn"));
                    _.humanboyNet.requestBet(this._vAreasInfo[e].eZone, this._getCurBetLevel())
                } else console.log("HumanboyMainView.betAreaClicked, cannot bet, curState: %d, left bet time: %d", l.getHumanboyRoom().eCurState, this._getLeftTime()), this._showGameToast(_.config.getStringData("Humanboy_ServerErrorCode41009"))
        }
        _onMsgSwitchSceneBegan(e) {
            console.log(_.StringTools.formatC("SwitchScene - From[%s] To [%s]", _.Enum.SCENE.HUMANBOY_SCENE, e)), this._clearData()
        }
        _onMsgBet(e) {
            this._updateAutoBetBtnStatus();
            let t = l.getHumanboyRoom().tCurPlayerOneBet,
                n = this._getAreaIdxByBetOption(t.betOption),
                o = new Qe;
            o.nAreaIdx = n, o.nGold = t.betAmount, o.nUid = t.uid, o.bAnim = !0, o.bHeadAnim = !0, o.bPlaySound = !0, this._vCoinOptimizationDeque.push_back(o)
        }
        _onMsgAutoBet(e) {
            this._updateBetButtonState()
        }
        _onMsgMergeAutoBetAct(e) {
            let t = _.Number(e);
            ++this._nMergeAutoBetNum >= t && (this._nMergeAutoBetNum = 0);
            let n = l.getHumanboyRoom().tCurPlayerOneBet,
                o = this._getAreaIdxByBetOption(n.betOption);
            {
                let e = this._getFreeCoinCountFromPool(o);
                if (t > e) {
                    let n = t - e,
                        o = Math.min(this._nAreaCoinLimitCountMin + n, this._nAreaCoinLimitCountMax);
                    this._nAreaCoinLimitCountMin = o
                }
            }
            let i = new Qe;
            i.nAreaIdx = o, i.nGold = n.betAmount, i.nUid = n.uid, i.bAnim = !0, i.bHeadAnim = !0, i.bPlaySound = !0, this._vCoinOptimizationDeque.push_back(i)
        }
        _onMsgMergeAutoBetEnd(e) {
            let t = _.Number(e) <= 1 ? this._sound_betin : this._sound_betin_many;
            this._playSoundEffect(t), this._updateBetButtonState()
        }
        _onMsgDealerList(e) {
            this._dealerListView && this._dealerListView.updateView()
        }
        _onMsgDealerUp(e) {
            _.Number(e);
            this._showGameToast(_.config.getStringData("Humanboy_game_dealer_up")), _.humanboyNet.requestBuyStockNum(), _.humanboyNet.requestDealerList()
        }
        _onMsgDealerUpNotify(e) {
            if (_.Number(e) === _.dataHandler.getUserData().u32Uid) {
                let e = l.getHumanboyRoom().tSelfPlayer.curCoin;
                this._txt_self_gold.string = l.getHumanboyRoom().transGoldShortString(e), _.humanboyNet.requestBuyStockNum(), _.humanboyNet.requestDealerList(), this._updateDealerInfo()
            }
        }
        _onMsgKickDealerApplyNotify(e) {
            switch (_.Number(e)) {
                case I.humanboy_proto.KickApplyDealerReason.K_NULL:
                    break;
                case I.humanboy_proto.KickApplyDealerReason.K_NoMoney:
                    this._showGameToast(_.config.getStringData("Humanboy_kick_applydealer_nomoney"));
                    break;
                case I.humanboy_proto.KickApplyDealerReason.K_SUPPLY:
                    this._showGameToast(_.config.getStringData("Humanboy_kick_applydealer_supply"));
                    break;
                case I.humanboy_proto.KickApplyDealerReason.K_OFFLINE:
                case I.humanboy_proto.KickApplyDealerReason.K_LEAVE:
            }
            _.humanboyNet.requestBuyStockNum(), _.humanboyNet.requestDealerList()
        }
        _onMsgDealerCancelWait(e) {
            this._showGameToast(_.config.getStringData("Humanboy_game_dealer_cancel_wait")), _.humanboyNet.requestBuyStockNum(), _.humanboyNet.requestDealerList()
        }
        _onMsgDealerDown(e) {
            switch (_.Number(e)) {
                case 1:
                    this._showGameToast(_.config.getStringData("Humanboy_game_dealer_down_1"));
                    break;
                case 2:
                    this._dealerListView && this._dealerListView.setBtnDealerEnable(!1), this._showGameToast(_.config.getStringData("Humanboy_game_dealer_down_2"))
            }
        }
        _onMsgDealerDownNotify(e) {
            let t = l.getHumanboyRoom().tDownDealerNotify;
            if (t.uid === _.dataHandler.getUserData().u32Uid) {
                switch (t.reason) {
                    case I.humanboy_proto.DownDealerReason.NoMoney:
                        this._showGameToast(_.config.getStringData("Humanboy_game_dealer_down_notify_nomoney"));
                        break;
                    case I.humanboy_proto.DownDealerReason.LongTime: {
                        let e = cc.instantiate(this.prefab_hb_dialog);
                        this.node.addChild(e, Ke.HL_ZORDER_PANEL_SERVER_TOAST), e.getComponent(S).show(_.config.getStringData("Humanboy_game_dealer_down_notify_longtime"), _.config.getStringData("TipsPanel_cancel_button"), _.config.getStringData("TipsPanel_sure_button"), (e => {}), (e => {
                            _.humanboyNet.requestUpDealer(t.holdStockNum)
                        })), this._humanboyJackpot && this._humanboyJackpot.hide(!1)
                    }
                    break;
                    case I.humanboy_proto.DownDealerReason.Leave:
                        this._showGameToast(_.config.getStringData("Humanboy_game_dealer_down_1"));
                        break;
                    case I.humanboy_proto.DownDealerReason.Offline:
                }
                let e = l.getHumanboyRoom().tSelfPlayer.curCoin;
                this._txt_self_gold.string = l.getHumanboyRoom().transGoldShortString(e)
            }
        }
        _onMsgPlayerList(e) {
            this._humanboyPlayerList ? (this._humanboyPlayerList.node.active = !0, this._humanboyPlayerList.setHumanboyData(), this._humanboyPlayerList.displayCell(-1)) : (this._humanboyPlayerList = cc.instantiate(this.prefab_hb_playerList).getComponent(p), this.node.addChild(this._humanboyPlayerList.node, Ke.HL_ZORDER_PANEL_RECORD), this._humanboyPlayerList.setHumanboyData(), this._humanboyPlayerList.displayCell(0))
        }
        _onMsgRewardTips(e) {
            if (!this._humanboyRewardTips) {
                let e = (1 - this.node.anchorX) * this.node.width * this.node.scaleX,
                    t = (1 - this.node.anchorY) * this.node.height * this.node.scaleY - 122;
                this._humanboyRewardTips = cc.instantiate(this.prefab_hb_rewardTips).getComponent(T), this.node.addChild(this._humanboyRewardTips.node, Ke.HL_ZORDER_PANEL_REWRAD_TIP), this._humanboyRewardTips.node.setPosition(e, t)
            }
            let t = _.String(e);
            this._humanboyRewardTips.show(t, 4)
        }
        _onMsgUpdateWorldServerGold(e) {
            let t = _.dataHandler.getUserData().total_amount;
            if (l.getHumanboyRoom().bCanUpdateWorldServerGold) {
                l.getHumanboyRoom().tSelfPlayer.curCoin = t, this._updatePlayerGold(_.dataHandler.getUserData().u32Uid);
                let e = !1,
                    n = l.getHumanboyRoom().vOtherPlayer;
                for (let o = 0; o < n.length; ++o) _.dataHandler.getUserData().u32Uid === n[o].uid && (e = !0, n[o].curCoin = t);
                e && this._updateOtherPlayersInfo()
            }
        }
        onShowLuckButton(e) {
            L.isInvalidRoomMultiWindow(e.gameData, null == this ? void 0 : this.node) || this._onMsgShowLuckButton()
        }
        _onMsgShowLuckButton() {
            if (!this._luckButton) {
                this._luckButton = cc.instantiate(this.prefab_luckButton).getComponent(h), this._btn_redpacket_festival.addChild(this._luckButton.node), this._luckButton.node.setPosition(0, 0);
                let e = cc.Vec2.ZERO;
                this._img_self_gold.node.convertToWorldSpaceAR(cc.Vec2.ZERO, e), this._luckButton.setViewData(e)
            }
            _.dataHandler.getUserData().isShowLuckTurntables ? (this._btn_redpacket_festival.active = !0, this._luckButton.updateView(!1, this._btn_redpacket_festival_layer)) : this._btn_redpacket_festival.active = !1, this._btn_redpacket_festival_layer.active = this._btn_redpacket_festival.active, this._adaptiveBetBtnPanel()
        }
        onTurntableResultNotice(e) {
            L.isInvalidRoomMultiWindow(e.gameData, null == this ? void 0 : this.node) || this._onMsgTurntableResultNotice(e.puf)
        }
        _onMsgTurntableResultNotice(e) {
            let t = this._getPlayerCoinNodesByUid(e.uid);
            t.length <= 0 && t.push(this._btn_playerList);
            for (let e = 0; e < t.length; e++) this._luckButton.runGoldMoveAction(this._btn_redpacket_festival, t[e])
        }
        _adaptiveScreen() {
            let e = this.node.getChildByName("panel_left_playerlist"),
                t = this.node.getChildByName("panel_right_playerlist");
            switch (this._eGameboyScreenType) {
                case u.eGameboyScreenType.GST_SCREEN_BROAD:
                    this._btn_menu.node.getComponent(cc.Widget).top = 68, _.resMgr.adaptWidget(this._btn_menu.node), this._btn_record.node.getComponent(cc.Widget).top = 68, _.resMgr.adaptWidget(this._btn_record.node);
                    break;
                case u.eGameboyScreenType.GST_SCREEN_NARROW:
            }
            if (this._btn_menu.node.setPosition(cc.v2(e.x, this._btn_menu.node.y)), this._btn_record.node.setPosition(cc.v2(t.x, this._btn_record.node.y)), this._panel_self) {
                let e = this._panel_self.getChildByName("img_head"),
                    t = cc.Vec2.ZERO;
                this._btn_menu.node.convertToWorldSpaceAR(cc.Vec2.ZERO, t), e.parent.convertToNodeSpaceAR(t, t), this._panel_self.setPosition(this._panel_self.x + t.x - e.x, this._panel_self.y)
            }
            if (this._btn_playerList) {
                let e = cc.Vec2.ZERO;
                this._btn_record.node.convertToWorldSpaceAR(cc.Vec2.ZERO, e), this._btn_playerList.parent.convertToNodeSpaceAR(e, e), this._btn_playerList.setPosition(e.x, this._btn_playerList.y)
            }
        }
        _adaptiveBetBtnPanel() {
            if (this._vBottomBetBtns.length <= 0) {
                for (let e = 0; e < this._vBetButtons.length; ++e) this._vBottomBetBtns.push(new u.tGameNodeScale(this._vBetButtons[e].node, this._fBetBtnSrcScaleRate));
                this._vBottomBetBtns.push(new u.tGameNodeScale(this._btn_betAuto.node, this._btn_betAuto.node.scale)), this._vBottomBetBtns.push(new u.tGameNodeScale(this._btn_betClean.node, this._btn_betClean.node.scale)), this._vBottomBetBtns.push(new u.tGameNodeScale(this._btn_redpacket_festival, this._btn_redpacket_festival.scale))
            }
            let e = this._btn_playerList.x - this._btn_playerList.width / 2;
            e -= this._panel_self.x + this._panel_self.width / 2, this._panel_betbtn.setContentSize(cc.size(e, this._panel_betbtn.height)), this._panel_betbtn.setPosition(this._panel_self.x + this._panel_self.width / 2 + e / 2, this._panel_betbtn.y);
            let t = 0,
                n = 0,
                o = 0;
            for (let e = 0; e < this._vBottomBetBtns.length; ++e) {
                let n = this._vBottomBetBtns[e].node,
                    i = this._vBottomBetBtns[e].scale;
                n.active && (++o, t += n.width * i)
            }
            n = (this._panel_betbtn.width - t) / (o + 1);
            let i = .5 * -this._panel_betbtn.width;
            for (let e = 0; e < this._vBottomBetBtns.length; ++e) {
                let t = this._vBottomBetBtns[e].node,
                    o = this._vBottomBetBtns[e].scale;
                if (t.active) {
                    let e = i + n + t.width * o / 2,
                        a = cc.Vec2.ZERO;
                    this._panel_betbtn.convertToWorldSpaceAR(cc.v2(e, 0), a), t.parent.convertToNodeSpaceAR(a, a), t.setPosition(a.x, t.y), i = a.x + t.width * o / 2
                }
            }
            if (this._btn_redpacket_festival_layer) {
                let e = cc.Vec2.ZERO;
                this._btn_redpacket_festival.convertToWorldSpaceAR(cc.Vec2.ZERO, e), this._btn_redpacket_festival_layer.setPosition(this._btn_redpacket_festival_layer.parent.convertToNodeSpaceAR(e))
            }
            this._humanboyAdvancedAuto && (this._humanboyAdvancedAuto.adaptAdvanceAutoTipsPos(this._btn_betAuto.node), this._humanboyAdvancedAuto.adaptAdvanceAutoCountPos(this._btn_betAuto.node))
        }
        playPointAni() {
            let e = l.getHumanboyRoom().change_points;
            e < 0 || (this.points_node || (this.points_node = cc.instantiate(this.points_ani_prefab), this.node.addChild(this.points_node, Ke.HL_ZORDER_ANIM_NODE_3), this.points_node.setPosition(this.node.convertToNodeSpaceAR(this._img_self_head.node.parent.convertToWorldSpaceAR(this._img_self_head.node.position))), this.points_node.getComponent(cc.Animation).on("finished", (e => {
                this.resetPointAni()
            }), this)), this.points_node.getComponent(w).playPointAni(e))
        }
        resetPointAni() {
            l.getHumanboyRoom().change_points = 0, this.points_node && this.points_node.getComponent(w).resetPointAni()
        }
        setLeftAndRightList() {
            let e = this.node.getChildByName("panel_left_playerlist"),
                t = this.node.getChildByName("panel_right_playerlist"),
                n = e.getChildByName("img_bg_0").width,
                o = [288, 92, -104, -300, -300],
                i = cc.v2(-4, 330),
                a = cc.v2(-16, 333),
                s = 22;
            if (this._eGameboyScreenType == u.eGameboyScreenType.GST_SCREEN_BROAD) o = [419, 205, -9, -223, -437], i = cc.v2(-4, 461), a = cc.v2(-16, 464);
            else if (this._eGameboyScreenType == u.eGameboyScreenType.GST_SCREEN_NARROW) {
                s = 96 + .5 * (cc.winSize.width - 2338)
            } else {
                let e = cc.winSize.width - 1920;
                s = e > 0 ? 22 + .5 * e : 22
            }
            e.getComponent(cc.Widget).left = s + .5 * n - .5 * e.width, t.getComponent(cc.Widget).right = s + .5 * n - .5 * t.width, _.resMgr.adaptWidget(e), _.resMgr.adaptWidget(t);
            for (let n = 0; n < 5; ++n) {
                let s = e.getChildByName(_.StringTools.formatC("img_bg_%d", n)),
                    r = e.getChildByName(_.StringTools.formatC("node_head_%d", n)),
                    l = e.getChildByName(_.StringTools.formatC("text_coin_%d", n)),
                    h = t.getChildByName(_.StringTools.formatC("img_bg_%d", n)),
                    c = t.getChildByName(_.StringTools.formatC("node_head_%d", n)),
                    d = t.getChildByName(_.StringTools.formatC("text_coin_%d", n));
                if (s.setPosition(cc.v2(0, o[n])), r.setPosition(cc.v2(0, o[n] + 15)), l.setPosition(cc.v2(0, o[n] + -67)), h.setPosition(cc.v2(0, o[n])), c.setPosition(cc.v2(0, o[n] + 15)), d.setPosition(cc.v2(0, o[n] + -67)), 0 === n) {
                    let n = e.getChildByName("nb_flag"),
                        o = t.getChildByName("nb_flag");
                    n.setPosition(i), o.setPosition(a)
                }
            }
        }
        showSwitchTable() {
            var e;
            if (this._bSwitchTable) return;
            this._bSwitchTable = !0;
            let t = null == (e = L.getInstance(null == this ? void 0 : this.node)) || null == (e = e.room) ? void 0 : e.gameScene;
            _.TP.showMsg(_.config.getStringData("MiniGames_Switch_content"), _.Enum.ButtonStyle.TWO_BUTTON, (() => {
                _.MessageCenter.send("HideWebview_ShowWindows", !0), L.getInstanceGameData(null == this ? void 0 : this.node).tRoomData.m_bIsReconnectMode = !0, _.netWorkManager.clearLoginGameServerSuccFlag(_.Enum.GameId.HumanBoy), _.roomManager.RequestJoinRoom(_.Enum.GameId.HumanBoy, l.getHumanboyRoom().idle_roomid)
            }), (() => {
                _.MessageCenter.send("HideWebview_ShowWindows", !0), this._backToRoomListScene()
            }), !1, !1, "", !1, cc.Label.HorizontalAlign.CENTER, !1, t), _.TP.setButtonText(_.Enum.ButtonType.TWO_BUTTON_SWITCH_TABLE)
        }
        onCalmDownShowTip(e) {
            let t = e.CalmDownLeftSeconds,
                n = e.CalmDownDeadLineTimeStamp;
            if (!(t <= 0 || n <= 0) && t > 0) {
                P.getSinglePrefabInst(this.popSilencePre).getComponent(P).autoShow(_.Enum.popSilenceType.countDownGame, e)
            }
        }
    }).g_fullScreenOffset = cc.Vec2.ZERO, ge = n((me = qe).prototype, "prefab_dz_jackPotNumber", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ye = n(me.prototype, "prefab_cb_win_player_light", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = n(me.prototype, "prefab_cb_exchange", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), be = n(me.prototype, "prefab_cb_rule", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ae = n(me.prototype, "prefab_cb_soundSetting", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fe = n(me.prototype, "prefab_cb_exit", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ce = n(me.prototype, "prefab_hb_win_flag", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Se = n(me.prototype, "prefab_hb_start_bets", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Be = n(me.prototype, "prefab_hb_end_bets", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ve = n(me.prototype, "prefab_hb_dealer_victory_zh_CN", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Te = n(me.prototype, "prefab_hb_dealer_victory_en_US", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Re = n(me.prototype, "prefab_hb_dealer_defeat_zh_CN", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ee = n(me.prototype, "prefab_hb_dealer_defeat_en_US", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ne = n(me.prototype, "prefab_hb_way_out", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Oe = n(me.prototype, "prefab_hb_flutterScore", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), De = n(me.prototype, "prefab_hb_betCoin", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), we = n(me.prototype, "prefab_hb_toast", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pe = n(me.prototype, "prefab_hb_guid", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Le = n(me.prototype, "prefab_hb_menu", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), He = n(me.prototype, "prefab_hb_advancedSetting", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ie = n(me.prototype, "prefab_hb_advancedAuto", [ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Me = n(me.prototype, "prefab_hb_dialog", [oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ke = n(me.prototype, "prefab_hb_jackPot", [ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xe = n(me.prototype, "prefab_hb_dealerList", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Fe = n(me.prototype, "prefab_hb_playerList", [se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), We = n(me.prototype, "prefab_hb_chart", [_e], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ge = n(me.prototype, "prefab_hb_rewardTips", [re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ze = n(me.prototype, "prefab_luckButton", [le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ue = n(me.prototype, "points_ani_prefab", [he], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ve = n(me.prototype, "popSilencePre", [ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ze = n(me.prototype, "gameSceneInstance", [de], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = me)) || ue));
    o._RF.pop()
}