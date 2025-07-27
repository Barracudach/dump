import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as p from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as C from "./cv.js";
import * as b from "./JackfruitMenu.js";
import * as y from "./JackfruitJackPotNumber.js";
import * as S from "./FaceView.js";
import * as T from "./AofDesc.js";
import * as w from "./JackfruitSeat.js";
import * as v from "./JackfruitBuyin.js";
import * as I from "./LuckTurntablesButton.js";
import * as B from "./JackfruitData.js";
import * as P from "./JackfruitData.js";
import * as E from "./JackfruitData.js";
import * as M from "./JackfruitData.js";
import * as D from "./JackfruitData.js";
import * as k from "./JackfruitData.js";
import * as A from "./JackfruitData.js";
import * as N from "./JackfruitData.js";
import * as R from "./Card.js";
import * as z from "./JackfruitReview.js";
import * as O from "./ws_protocol.mjs_cjs=&original=.js";
import * as L from "./gs_protocol.mjs_cjs=&original=.js";
import * as F from "./CircleSprite.js";
import * as j from "./JackfruitPrivateInfo.js";
import * as x from "./labaBtn.js";
import * as G from "./labaBtn.js";
import * as H from "./Enum.js";
import * as J from "./GameSceneInstance.js";
import * as U from "./EmojiView.js";
import * as V from "./EmojiLoader.js";

function main() {
    var W, K, q, Y, Z, X, $, Q, ee, te, ie, ae, se, ne, oe, re, le, he, de, ce, _e, ue, ge, pe, fe, me, Ce, be, ye, Se, Te, we, ve, Ie, ke, Be, De, Me, Ae, Pe, Ee, Ne, Re, ze, Oe, Le, Fe, je, xe, Ge, He, Je, Ue, Ve, We, Ke, qe, Ye, Ze, Xe, $e, Qe, et, tt, it, at, st, nt, ot, rt, lt, ht, dt, ct, _t, ut, gt, pt, ft, mt, Ct, bt, yt, St, Tt, wt, vt, It, kt, Bt, Dt, Mt, At, Pt, Et, Nt, Rt, zt, Ot, Lt, Ft, jt, xt, Gt, Ht, Jt, Ut, Vt, Wt, Kt, qt, Yt, Zt, Xt, $t, Qt, ei, ti, ii, ai, si, ni, oi, ri, li, hi, di, ci, _i, ui, gi, pi, fi, mi, Ci, bi, yi, Si, Ti, wi, vi, Ii, ki, Bi, Di, Mi, Ai, Pi, Ei, Ni, Ri, zi, Oi, Li, Fi, ji, xi, Gi, Hi, Ji, Ui, Vi, Wi, Ki, qi, Yi, Zi, Xi, $i, Qi, ea, ta, ia, aa, sa, na, oa, ra, la, ha, da, ca, _a, ua, ga, pa, fa, ma, Ca, ba, ya, Sa, Ta, wa, va, Ia, ka, Ba, Da, Ma, Aa, Pa, Ea, Na, Ra, za, Oa, La, Fa, ja, xa, Ga, Ha, Ja, Ua, Va, Wa, Ka;
    a._RF.push({}, "abc16VFcIFC4YBHqiNtnWdP", "JackfruitMain", void 0);
    const {
        ccclass: qa,
        property: Ya
    } = c;
    let Za = e("Countdown_type", function(e) {
        return e[e.empty = 0] = "empty", e[e.aboutToStart = 1] = "aboutToStart", e[e.PlaceCard = 2] = "PlaceCard", e[e.Ready = 3] = "Ready", e
    }({}));
    class Xa {
        constructor() {
            this.size = void 0, this.index = void 0
        }
    }
    e("SizeItem", Xa);
    e("JackfruitMain", (W = Ya(s), K = Ya(s), q = Ya(n), Y = Ya(s), Z = Ya(s), X = Ya(s), $ = Ya(s), Q = Ya(s), ee = Ya(s), te = Ya(s), ie = Ya(s), ae = Ya(s), se = Ya(o), ne = Ya(o), oe = Ya(o), re = Ya(o), le = Ya(s), he = Ya(s), de = Ya(s), ce = Ya(s), _e = Ya(s), ue = Ya(s), ge = Ya(s), pe = Ya(s), fe = Ya(n), me = Ya(s), Ce = Ya(s), be = Ya(s), ye = Ya(s), Se = Ya(s), Te = Ya(o), we = Ya(s), ve = Ya(s), Ie = Ya(s), ke = Ya(n), Be = Ya(s), De = Ya(r), Me = Ya(n), Ae = Ya(s), Pe = Ya(s), Ee = Ya(r), Ne = Ya(n), Re = Ya(s), ze = Ya(s), Oe = Ya(r), Le = Ya(n), Fe = Ya(n), je = Ya(n), xe = Ya(s), Ge = Ya(s), He = Ya(s), Je = Ya(s), Ue = Ya(s), Ve = Ya(n), We = Ya(l), Ke = Ya(s), qe = Ya(h), Ye = Ya(h), Ze = Ya(h), Xe = Ya(h), $e = Ya(h), Qe = Ya(h), et = Ya(h), tt = Ya(h), it = Ya(h), at = Ya(h), st = Ya(s), nt = Ya(h), ot = Ya(h), rt = Ya(h), lt = Ya(h), ht = Ya(h), dt = Ya(h), ct = Ya(h), _t = Ya(h), ut = Ya(h), gt = Ya(h), pt = Ya(h), ft = Ya(h), mt = Ya(h), Ct = Ya(h), bt = Ya(h), yt = Ya(h), St = Ya(h), Tt = Ya(h), wt = Ya(h), vt = Ya(h), It = Ya(h), kt = Ya(h), Bt = Ya(n), Dt = Ya(s), Mt = Ya(d), At = Ya(d), Pt = Ya(d), Et = Ya(d), Nt = Ya(d), Rt = Ya(d), zt = Ya(d), Ot = Ya(d), Lt = Ya(d), Ft = Ya(d), jt = Ya(d), xt = Ya(d), Gt = Ya(d), Ht = Ya(s), Jt = Ya(s), Ut = G(), Vt = G("GameDataInstance"), qa((qt = t((Kt = class extends _ {
        constructor(...e) {
            super(...e), i(this, "logo_node", qt, this), i(this, "logo_img", Yt, this), i(this, "game_name_label", Zt, this), i(this, "guide_panel", Xt, this), i(this, "chat_panel", $t, this), i(this, "specialEffects_panel", Qt, this), i(this, "specialEffects_mask_panel", ei, this), i(this, "mask_panel", ti, this), i(this, "card_panel", ii, this), i(this, "public_card_panel", ai, this), i(this, "seat_panel", si, this), i(this, "allReview_button", ni, this), i(this, "otherTableCardBgs", oi, this), i(this, "otherMultipleImages", ri, this), i(this, "selfTableCardBgs", li, this), i(this, "selfMultipleImages", hi, this), i(this, "otherCardTypeNode", di, this), i(this, "selfCardTypeNode", ci, this), i(this, "face_button", _i, this), i(this, "redEnvelope_btn", ui, this), i(this, "shop_button", gi, this), i(this, "modal_panel", pi, this), i(this, "damon_img", fi, this), i(this, "addTime_btn", mi, this), i(this, "addTime_text", Ci, this), i(this, "wait_node", bi, this), i(this, "game_bg", yi, this), i(this, "change_table_btn", Si, this), i(this, "select_card_img", Ti, this), i(this, "other_fold_card_panel", wi, this), i(this, "other_fold_card", vi, this), i(this, "danmu_btns", Ii, this), i(this, "guide_bg", ki, this), i(this, "exchange_node", Bi, this), i(this, "exchange_label", Di, this), i(this, "aboutToStart_panel", Mi, this), i(this, "aboutToStart_progressBar", Ai, this), i(this, "aboutToStart_label", Pi, this), i(this, "aboutToStart_img", Ei, this), i(this, "waitReady_panel", Ni, this), i(this, "waitReady_progressBar", Ri, this), i(this, "waitReady_label", zi, this), i(this, "waitReady_img", Oi, this), i(this, "placeCardIsOK_btn", Li, this), i(this, "placeCardIsOK_progressBar", Fi, this), i(this, "placeCardIsOK_time_label", ji, this), i(this, "placeCardIsOK_label", xi, this), i(this, "placeCardIsOK_delay_label", Gi, this), i(this, "game_end_panel", Hi, this), i(this, "back_btn", Ji, this), i(this, "continue_btn", Ui, this), i(this, "menu_button", Vi, this), i(this, "upper_limit_panel", Wi, this), i(this, "upper_limit_label", Ki, this), i(this, "upper_limit_richtext", qi, this), i(this, "start_match_panel", Yi, this), i(this, "seat", Zi, this), i(this, "card", Xi, this), i(this, "jackfrunt_chat_item", $i, this), i(this, "chat", Qi, this), this.chat_node = null, i(this, "face", ea, this), this.face_node = null, i(this, "bighead", ta, this), this.bighead_node = null, i(this, "headAni", ia, this), i(this, "calmDown_prefab", aa, this), i(this, "luckButton_prefab", sa, this), i(this, "lost_prefab", na, this), i(this, "aof_lost_btn", oa, this), i(this, "labaBtn_prefab", ra, this), this.labaBtnNode = null, i(this, "start_action_ball_1", la, this), i(this, "start_action_ball_2", ha, this), i(this, "start_action_light", da, this), this.start_action_ball_node_list = [], this.start_action_light_node_list = [], i(this, "card_action_drop", ca, this), i(this, "card_bg_action_back", _a, this), i(this, "card_bg_action_face", ua, this), i(this, "card_action_huo", ga, this), i(this, "card_action_big", pa, this), i(this, "card_type_jiafen1", fa, this), i(this, "card_type_jiafen2", ma, this), i(this, "all_victory_feipai_1", Ca, this), i(this, "all_victory_feipai_2", ba, this), i(this, "all_victory", ya, this), i(this, "all_failed", Sa, this), i(this, "you_win", Ta, this), i(this, "repeat_win", wa, this), i(this, "big_card", va, this), i(this, "total_result", Ia, this), i(this, "jack_number", ka, this), i(this, "jack_action", Ba, this), i(this, "buyin", Da, this), this.buyin_panel = null, i(this, "all_score_label", Ma, this), i(this, "all_victory_img", Aa, this), i(this, "all_lose_number", Pa, this), i(this, "all_win_number", Ea, this), i(this, "all_level_number", Na, this), i(this, "cardtype_win_fnt_8", Ra, this), i(this, "cardtype_win_fnt_9", za, this), i(this, "cardtype_win_fnt_10", Oa, this), i(this, "settle_lose_number", La, this), i(this, "settle_win_number", Fa, this), i(this, "single_lose_number", ja, this), i(this, "single_win_number", xa, this), i(this, "victory_number", Ga, this), i(this, "total_result_win", Ha, this), i(this, "total_result_lose", Ja, this), i(this, "record_button_img", Ua, this), i(this, "record_button", Va, this), this._bTouchStop = !1, this._androidRecord = !1, this._recordTime = 10, this._isAllin = !1, this._selfMultiplePos = [], this._otherMultiplePos = [], this.lostDesc = null, this._selfCardBgs = [], this._cardPosOffsetByBg = new u(3, -3), this._selfCards = [], this._publicCards = [], this._otherTableCards = [], this._publicCardsPos = [], this._bIsInit = !1, this._postList = new Array, this._seatList = [], this._isSeat = !1, this._isTurning = !1, this._trunIngSeatViewID = 0, this._clickSeatID = 0, this._htime = 0, this._time = 0, this._lastTime = 0, this._isPlaceCardOver = !1, this._countdownType = Za.empty, this._actionStartBallList = [], this._actionStartLightList = [], this._JackPotNumberList = [], this.SHOW_SINGLE_SCORE_TAG = 1e5, this.SHOW_SEAT_LOST_TAG = 100001, this.SHOW_SELECT_CARD_TAG = 100002, this.WAITING_OTHER_PLAYER_NOTIFY_TAG = 100003, this.game = void 0, this.PUBLIC_Y = 120, this._isReady = !1, this._headAni_arr = [], this.calmDown_arr = [], this._showCardTypeNum = 0, this.luckLayer = null, this._oldLocation = new u(0, 0), this._location = new u(0, 0), this._oldTime = 0, this._moveCards = [], this._selectCard = null, this._isDoubleClick = !0, this._isPress = !1, this._placeCardType = 0, this._lostTime = 0, this._playEffectList = [], this._jackPotHitCardType = null, this._jackpotInfos = [], this._path_Bgm = "zh_CN/game/jackfruit/audio/back", this._path_allwin = "zh_CN/game/jackfruit/audio/allwin", this._path_all_failed = "zh_CN/game/jackfruit/audio/allfailed", this._path_big_card = "zh_CN/game/jackfruit/audio/big_card", this._path_countdownS = "zh_CN/game/jackfruit/audio/countdownS", this._path_countdownP = "zh_CN/game/jackfruit/audio/countdownP", this._path_draw = "zh_CN/game/jackfruit/audio/draw", this._path_youlose = "zh_CN/game/jackfruit/audio/youwin_lose", this._path_youwin_small = "zh_CN/game/jackfruit/audio/youwin_small", this._path_youwin_big = "zh_CN/game/jackfruit/audio/youwin_big", this._path_hand_1 = "zh_CN/game/jackfruit/audio/hand_1", this._path_hand_2 = "zh_CN/game/jackfruit/audio/hand_2", this._path_place_card_1 = "zh_CN/game/jackfruit/audio/place_card_1", this._path_place_card_2 = "zh_CN/game/jackfruit/audio/place_card_2", this._path_public_card_3 = "zh_CN/game/jackfruit/audio/public_card_3", this._path_public_card_4 = "zh_CN/game/jackfruit/audio/public_card_4", this._path_allwinjiafen = "zh_CN/game/jackfruit/audio/allwinjiafen", this._path_feipai = "zh_CN/game/jackfruit/audio/feipai", this._path_determine = "zh_CN/game/jackfruit/audio/determine", this._path_self_place = "zh_CN/game/jackfruit/audio/self_place", this._path_single_win = "zh_CN/game/jackfruit/audio/single_win", this._path_single_lose = "zh_CN/game/jackfruit/audio/single_lose", this._path_all_score = "zh_CN/game/jackfruit/audio/all_score", this._path_btn_continue = "zh_CN/game/jackfruit/audio/btn_continue", this._path_place_card_ok = "zh_CN/game/jackfruit/audio/place_card_ok", this._path_winning_streak = "zh_CN/game/jackfruit/audio/winning_streak", this._path_gold = "zh_CN/game/jackfruit/audio/gold", this._path_add_time = "zh_CN/game/jackfruit/audio/add_time", i(this, "gameSceneInstance", Wa, this), i(this, "gameDataInstance", Ka, this)
        }
        onLoad() {
            this._init(), this.buyin_panel = g(this.buyin), this.node.addChild(this.buyin_panel), this.buyin_panel.active = !1, this._updateUIWithAppConfig(), C.MessageCenter.register("change_game_bg", this.onChangeBg.bind(this), this.node), C.MessageCenter.register("change_cardface_jackfruit", this.UpdateCardFace.bind(this), this.node), C.config.isSiyuType() ? (C.MessageCenter.register("on_syOnEnterBackground", this.onAppEnterBackground.bind(this), this.node), C.MessageCenter.register("on_syOnEnterForeground", this.onAppEnterForeground.bind(this), this.node)) : (p.on(f.EVENT_HIDE, this.onAppEnterBackground, this), p.on(f.EVENT_SHOW, this.onAppEnterForeground, this)), C.MessageCenter.register("on_game_data_sync", this.OnGameDataSync.bind(this), this.node), C.MessageCenter.register("exit_the_room", this.gotoHallScene.bind(this), this.node), C.MessageCenter.register("updataBGM", this.onUpdataBGM.bind(this), this.node), C.MessageCenter.register("showLuckButton", this.onShowLuckButton.bind(this), this.node), C.MessageCenter.register("showObRoleInfo", this.showObRoleInfo.bind(this), this.node), C.MessageCenter.register("NotDisturb", this.onNotDisturb.bind(this), this.node), this.gameDataInstance.tRoomData.m_bIsReconnectMode = !0, C.jackfruitNet.requestGameDataSync(x.getInstanceRoomId(null == this ? void 0 : this.node)), this.showLuckButton(), C.config.isSiyuType() && (this.record_button.active = !1), this.setRecordEnabled(!1), null == this.bighead_node && (this.bighead_node = cc.instantiate(this.bighead), this.gameSceneInstance.gameNode.addChild(this.bighead_node, C.Enum.ZORDER_TYPE.ZORDER_TOP, "bighead"), this.bighead_node.position = cc.v2(.5 * C.config.WIDTH, .5 * C.config.HEIGHT)), this.bighead_node.active = !1, null == this.face_node && (this.face_node = cc.instantiate(this.face), this.gameSceneInstance.gameNode.addChild(this.face_node, C.Enum.ZORDER_TYPE.ZORDER_TOP, "privateinfo"), this.face_node.position = cc.v2(.5 * C.config.WIDTH, .5 * C.config.HEIGHT)), this.face_node.active = !1
        }
        start() {
            this.onUpdataBGM()
        }
        onDestroy() {
            C.config.isSiyuType() ? (C.MessageCenter.unregister("on_syOnEnterBackground", this.node), C.MessageCenter.unregister("on_syOnEnterForeground", this.node)) : (p.off(p.EVENT_HIDE, this.onAppEnterBackground, this), p.off(p.EVENT_SHOW, this.onAppEnterForeground, this)), C.MessageCenter.unregister("change_game_bg", this.node), C.MessageCenter.unregister("change_cardface_jackfruit", this.node), C.MessageCenter.unregister("on_game_data_sync", this.node), C.MessageCenter.unregister("exit_the_room", this.node), C.MessageCenter.unregister("updataBGM", this.node), C.MessageCenter.unregister("on_sitdown_succ", this.node), C.MessageCenter.unregister("stand_up_succ", this.node), C.MessageCenter.unregister("need_buyin", this.node), C.MessageCenter.unregister("game_will_start", this.node), C.MessageCenter.unregister("notice_deal", this.node), C.MessageCenter.unregister("start_place_card", this.node), C.MessageCenter.unregister("modify_place_card", this.node), C.MessageCenter.unregister("show_place_card", this.node), C.MessageCenter.unregister("community_cards", this.node), C.MessageCenter.unregister("game_round_end", this.node), C.MessageCenter.unregister("buy_in", this.node), C.MessageCenter.unregister("destroy_room", this.node), C.MessageCenter.unregister("confirm_to_continue", this.node), C.MessageCenter.unregister("place_card_over", this.node), C.MessageCenter.unregister("player_ready", this.node), C.MessageCenter.unregister("on_show_chat_panel", this.node), C.MessageCenter.unregister("on_show_face_panel", this.node), C.MessageCenter.unregister("effet_call", this.node), C.MessageCenter.unregister("on_fly_emoji", this.node), C.MessageCenter.unregister("on_showFace", this.node), C.MessageCenter.unregister("on_SendChat", this.node), C.MessageCenter.unregister("on_SendMagicEmoji", this.node), C.MessageCenter.unregister("on_SendNoticeDynamicConfig", this.node), C.MessageCenter.unregister("send_chat_notify", this.node), C.MessageCenter.unregister("updata_delay", this.node), C.MessageCenter.unregister("action_delay", this.node), C.MessageCenter.unregister("turntableResultNotice", this.node), C.MessageCenter.unregister("showLuckButton", this.node), C.MessageCenter.unregister("waiting_other_player_notify", this.node), C.MessageCenter.unregister("show_hit_jackPotCardType", this.node), C.MessageCenter.unregister("can_operation", this.node), C.MessageCenter.unregister("total_settle", this.node), C.MessageCenter.unregister("player_info_sync", this.node), C.MessageCenter.unregister("updata_start_match", this.node), C.MessageCenter.unregister("brand_barrage", this.node), C.MessageCenter.unregister("on_voice_record_count_down", this.node), C.MessageCenter.unregister("on_voice_record_finish", this.node), C.MessageCenter.unregister("on_play_voice", this.node), C.MessageCenter.unregister("on_voice_record_too_short", this.node), C.MessageCenter.unregister("on_upload_voice_done", this.node), C.MessageCenter.unregister("on_voice_show_micPhoneToast", this.node), C.MessageCenter.unregister("SYStartRecord", this.node), C.MessageCenter.unregister("SYStopRecord", this.node), C.MessageCenter.unregister("SYCancelRecord", this.node), C.MessageCenter.unregister("showObRoleInfo", this.node), C.MessageCenter.unregister("updata_jackpotdata", this.node), C.MessageCenter.unregister("NotDisturb", this.node)
        }
        _updateUIWithAppConfig() {
            !C.appConfig.getGameConfig().chatTabEnabled && (this.face_button.parent = null), !C.appConfig.getGameConfig().audioChatEnabled && (this.record_button.parent = null), !C.appConfig.getGameConfig().redEnvelopeEnabled && (this.redEnvelope_btn.parent = null)
        }
        _addEvent() {
            C.MessageCenter.register("on_sitdown_succ", this.onSitdownSubind(this), this.node), C.MessageCenter.register("stand_up_succ", this.onStandUpSubind(this), this.node), C.MessageCenter.register("need_buyin", this.onNeedBuyin.bind(this), this.node), C.MessageCenter.register("game_will_start", this.onGameWillStart.bind(this), this.node), C.MessageCenter.register("notice_deal", this.onNoticeDeal.bind(this), this.node), C.MessageCenter.register("start_place_card", this.onStartPlaceCard.bind(this), this.node), C.MessageCenter.register("modify_place_card", this.onModifyPlaceCard.bind(this), this.node), C.MessageCenter.register("show_place_card", this.onShowPlaceCard.bind(this), this.node), C.MessageCenter.register("community_cards", this.onCommunityCards.bind(this), this.node), C.MessageCenter.register("game_round_end", this.onGameRoundEne.bind(this), this.node), C.MessageCenter.register("buy_in", this.onBuyIn.bind(this), this.node), C.MessageCenter.register("destroy_room", this.onDestroyRoom.bind(this), this.node), C.MessageCenter.register("confirm_to_continue", this.onConfirmToContinue.bind(this), this.node), C.MessageCenter.register("place_card_over", this.onPlaceCardOver.bind(this), this.node), C.MessageCenter.register("player_ready", this.onPlayerReady.bind(this), this.node), C.MessageCenter.register("on_show_chat_panel", this.onShowChatPanel.bind(this), this.node), C.MessageCenter.register("on_show_face_panel", this.onShowFacePanel.bind(this), this.node), C.MessageCenter.register("effet_call", this.effectCall.bind(this), this.node), C.MessageCenter.register("on_fly_emoji", this.OnFlyEmoji.bind(this), this.node), C.MessageCenter.register("on_showFace", this.onShowFace.bind(this), this.node), C.MessageCenter.register("on_SendChat", this.onSendChat.bind(this), this.node), C.MessageCenter.register("on_SendMagicEmoji", this.onSendEmoji.bind(this), this.node), C.MessageCenter.register("on_SendNoticeDynamicConfig", this.onSendDynamicConfig.bind(this), this.node), C.MessageCenter.register("send_chat_notify", this.onSendChatNotify.bind(this), this.node), C.MessageCenter.register("updata_delay", this.onUpdataDelay.bind(this), this.node), C.MessageCenter.register("action_delay", this.onActionDelay.bind(this), this.node), C.MessageCenter.register("turntableResultNotice", this.onTurntableResultNotice.bind(this), this.node), C.MessageCenter.register("waiting_other_player_notify", this.onWaitingOtherPlayer.bind(this), this.node), C.MessageCenter.register("show_hit_jackPotCardType", this.showhitjackPotCardType.bind(this), this.node), C.MessageCenter.register("can_operation", this.onShowChangeTableBtn.bind(this), this.node), C.MessageCenter.register("total_settle", this.onTotalSettle.bind(this), this.node), C.MessageCenter.register("player_info_sync", this.onPlayerInfoSync.bind(this), this.node), C.MessageCenter.register("updata_start_match", this.onUpdataStartMatch.bind(this), this.node), C.MessageCenter.register("brand_barrage", this.onBrandBarrage.bind(this), this.node), this.record_button.on(s.EventType.TOUCH_START, this.onbtnRecordClick.bind(this)), this.record_button.on(s.EventType.TOUCH_END, this.onbtnRecordClick.bind(this)), this.record_button.on(s.EventType.TOUCH_CANCEL, this.onbtnRecordClick.bind(this)), C.MessageCenter.register("on_voice_record_count_down", this.onVoiceRecordCountDown.bind(this), this.node), C.MessageCenter.register("on_voice_record_finish", this.onVoiceRecordFinish.bind(this), this.node), C.MessageCenter.register("on_play_voice", this.onPlayVoice.bind(this), this.node), C.MessageCenter.register("on_voice_record_too_short", this.OnVoiceRecordTooShort.bind(this), this.node), C.MessageCenter.register("on_upload_voice_done", this.OnUploadVoiceDone.bind(this), this.node), C.MessageCenter.register("on_voice_show_micPhoneToast", this.OnVoiceShowMiPhoneTips.bind(this), this.node), C.MessageCenter.register("SYStartRecord", this.onSyStartRecord.bind(this), this.node), C.MessageCenter.register("SYStopRecord", this.onSyStopRecord.bind(this), this.node), C.MessageCenter.register("SYCancelRecord", this.onSyCancelRecord.bind(this), this.node), C.MessageCenter.register("updata_jackpotdata", this.updateJackpotNumEvent.bind(this), this.node)
        }
        _init() {
            this._initLanguage(), this._initPos(), this._initCards(), this._initCardBgAction(), this._initView()
        }
        _initLanguage() {
            C.StringTools.setLabelString(this.start_match_panel, "layer/start_match_label", "jackfruit_start_match_label"), C.resMgr.setSpriteFrame(this.aboutToStart_img, C.config.getLanguagePath("game/jackfruit/ui/about_to_start_img")), C.resMgr.setSpriteFrame(find("change_img", this.change_table_btn), C.config.getLanguagePath("game/jackfruit/ui/change_table_btn")), C.resMgr.setSpriteFrame(find("fold", this.other_fold_card_panel), C.config.getLanguagePath("game/jackfruit/review/fold")), this.placeCardIsOK_delay_label.string = C.config.getStringData("ActionTips7"), C.StringTools.setLabelString(this.placeCardIsOK_btn, "btn_label", "jackfruit_placeCardIsOK_button_label_0");
            for (let e = 0; e < 2; e++) {
                find(C.StringTools.formatC("title_%d/label", e), this.guide_panel).getComponent(n).string = C.config.getStringData("jackfruit_guide_label_" + e)
            }
            for (let e = 0; e < 3; e++) {
                let t = this.otherMultipleImages[e],
                    i = this.selfMultipleImages[e];
                C.resMgr.setSpriteFrame(t.node, C.config.getLanguagePath("game/jackfruit/ui/multiple_" + e)), C.resMgr.setSpriteFrame(i.node, C.config.getLanguagePath("game/jackfruit/ui/multiple_" + e))
            }
            C.config.getCurrentLanguage() == C.Enum.LANGUAGE_TYPE.zh_CN || C.config.getCurrentLanguage() == C.Enum.LANGUAGE_TYPE.zh_TW ? (cc.find("bg_node", this.upper_limit_panel).setContentSize(cc.size(700, 250)), this.upper_limit_label.fontSize = 60) : (find("bg_node", this.upper_limit_panel).setContentSize(size(820, 250)), this.upper_limit_label.fontSize = 50)
        }
        _initCardBgAction() {
            for (let e = 0; e < 6; e++) {
                let t = g(this.card_bg_action_back);
                t.name = "action_back", this.otherTableCardBgs[e].node.addChild(t);
                let i = g(this.card_bg_action_face);
                i.name = "action_face";
                let a = g(this.card_bg_action_back);
                a.name = "action_back", this.selfTableCardBgs[e].node.addChild(i), this.selfTableCardBgs[e].node.addChild(a), this.selfTableCardBgs[e].node.name = e.toString(), this.selfTableCardBgs[e].node.on(s.EventType.TOUCH_START, this.clickSelfTableCardBg.bind(this), this.selfTableCardBgs[e].node), i.active = !1, t.active = !1, a.active = !1
            }
        }
        _initCards() {
            let e = this.selfTableCardBgs[0].node.getPosition(),
                t = (winSize.width - 2 * e.x) / 6;
            for (let i = 0; i < 7; i++) {
                let a = new s;
                a.addComponent(o), this.card_panel.addChild(a), C.resMgr.setSpriteFrame(a, "zh_CN/game/jackfruit/ui/card_bg"), a.setPosition(v2(e.x + t * i, 337 * winSize.height / C.config.DESIGN_HEIGHT)), this._selfCardBgs[i] = a.getComponent(o), a.name = i.toString(), a.on(s.EventType.TOUCH_START, this.clickSelfCardBg.bind(this), a)
            }
            this._initPublicCard(), this._initSelfCard(), this._initOtherTableCards()
        }
        _initGuide() {
            let e = this._selfCardBgs[3].node.x - this._selfCardBgs[0].node.x + 60,
                t = this.selfTableCardBgs[4].node.y - this._selfCardBgs[0].node.y + this.selfTableCardBgs[4].node.height / 2 + this._selfCardBgs[0].node.height / 2 + 50,
                i = this._selfCardBgs[0].node.y + (this.selfTableCardBgs[4].node.y - this._selfCardBgs[0].node.y) / 2 - 10;
            for (let a = 0; a < this.guide_bg.length; a++) this.guide_bg[a].setContentSize(e, t), this.guide_bg[a].y = i;
            this.guide_bg[0].x = this._selfCardBgs[0].node.x - this._selfCardBgs[0].node.width / 2 - 20, this.guide_bg[1].x = this._selfCardBgs[6].node.x + this._selfCardBgs[6].node.width / 2 + 20;
            let a = this.guide_panel.getChildByName("action_node"),
                s = this.guide_panel.getChildByName("action_node_1");
            a.zIndex = 1, s.zIndex = 1;
            let n = this._selfCardBgs[4].node.getPosition();
            s.setPosition(v2(n.x, n.y + this._selfCardBgs[4].node.height / 4));
            let o = this.guide_panel.getChildByName("title_0"),
                r = this.guide_panel.getChildByName("title_1");
            o.setPosition(v2(this.guide_bg[0].x + e / 2, i + t / 2 + 70)), r.setPosition(v2(this.guide_bg[1].x - e / 2, i + t / 2 + 70));
            let l = g(this._selfCards[0].img_cardFace);
            this.guide_panel.addChild(l), l.zIndex = 0, l.setPosition(this._selfCards[0].node.getPosition());
            let h = g(this._selfCards[4].img_cardFace);
            this.guide_panel.addChild(h), h.zIndex = 0, h.setPosition(this._selfCards[4].node.getPosition())
        }
        _initPublicCard() {
            let e = this.selfTableCardBgs[0].node.getPosition(),
                t = (winSize.width - e.x) / 5,
                i = this.selfTableCardBgs[0].node.y + (this.otherTableCardBgs[0].node.y - this.selfTableCardBgs[0].node.y) / 2;
            for (let a = 0; a < 5; ++a) {
                this._publicCards[a] = g(this.card).getComponent("Card"), this.public_card_panel.addChild(this._publicCards[a].node), this._publicCards[a].node.setPosition(v2(e.x + t * a, i)), this._publicCardsPos[a] = this._publicCards[a].node.getPosition(), this._publicCards[a].setContent(2, 1);
                let s = this._publicCards[a].node.getContentSize();
                this._publicCards[a].node.setScale(v2(146 / s.width, 208 / s.height)), this._publicCards[a].node.active = !1;
                let n = g(this.card_action_big);
                if (this._publicCards[a].node.addChild(n), n.name = "huo", n.active = !1, a > 2) {
                    let e = this._publicCardsPos[a],
                        t = e.y - s.height * this._publicCards[a].node.scale / 2 - this.danmu_btns[a - 3].getContentSize().height / 2 + 10;
                    this.danmu_btns[a - 3].setPosition(v2(e.x, t))
                }
            }
        }
        _playEffect(e, t = !1, i = .5) {
            if (this._playEffectList.push(e), this._playEffectList.length >= 3) {
                let e = this._playEffectList.splice(0, 1),
                    t = C.AudioMgr.getAudioID(e[0]);
                C.AudioMgr.stopEffect(t)
            }
            C.AudioMgr.playEffect(e, t, i)
        }
        _setSelfCardTouch(e) {
            for (let t = 0; t < 7; ++t) {
                let i = this._selfCards[t];
                if (e) i.node.off(s.EventType.TOUCH_START), i.node.off(s.EventType.TOUCH_MOVE), i.node.off(s.EventType.TOUCH_END), i.node.off(s.EventType.TOUCH_CANCEL), i.node.on(s.EventType.TOUCH_START, this.clickSelfCardBack.bind(this)), i.node.on(s.EventType.TOUCH_MOVE, this.clickSelfCardBack.bind(this)), i.node.on(s.EventType.TOUCH_END, this.clickSelfCardBack.bind(this)), i.node.on(s.EventType.TOUCH_CANCEL, this.clickSelfCardBack.bind(this));
                else {
                    i.node.off(s.EventType.TOUCH_START), i.node.off(s.EventType.TOUCH_MOVE), i.node.off(s.EventType.TOUCH_END), i.node.off(s.EventType.TOUCH_CANCEL);
                    let e, a = i.tag;
                    i.node.stopAllActions(), i.node.setScale(1), e = -1 != a ? this._getCardPosByBg(this.selfTableCardBgs[C.Number(a)]) : this._getCardPosByBg(this._selfCardBgs[C.Number(i.name)]), i.node.setPosition(e), i.name = t.toString(), i.node.zIndex = 0, i.tag = -1, this._selectCard = null, this.select_card_img.active = !1, this._isDoubleClick = !1
                }
            }
        }
        _initSelfCard() {
            for (let e = 0; e < 7; ++e) {
                this._selfCards[e] = g(this.card).getComponent("Card"), this.card_panel.addChild(this._selfCards[e].node), this._selfCards[e].node.setPosition(this._getCardPosByBg(this._selfCardBgs[e])), this._selfCards[e].tag = -1, this._selfCards[e].name = e.toString();
                let t = g(this.card_action_drop);
                this._selfCards[e].node.addChild(t), t.name = "activeDrop", t.active = !1;
                let i = g(this.card_action_big);
                this._selfCards[e].node.addChild(i), i.name = "huo", i.active = !1, this._selfCards[e].node.active = !1
            }
        }
        _initOtherTableCards() {
            for (let e = 0; e < 6; ++e) {
                this._otherTableCards[e] = g(this.card).getComponent("Card"), this.card_panel.addChild(this._otherTableCards[e].node), this._otherTableCards[e].node.name = e.toString(), this._otherTableCards[e].node.setPosition(this._getCardPosByBg(this.otherTableCardBgs[e])), this._otherTableCards[e].node.active = !1;
                let t = g(this.card_action_big);
                this._otherTableCards[e].node.addChild(t), t.name = "huo", t.active = !1
            }
        }
        _cardCollisionCheck(e, t) {
            let i = t,
                a = i.node.getPosition(),
                s = e.node.getPosition(),
                n = i.node.getContentSize(),
                o = e.node.getContentSize(),
                r = e.node.scale,
                l = Math.abs(a.x - s.x),
                h = Math.abs(a.y - s.y),
                d = (n.width + o.width * r) / 2,
                c = (n.height + o.height * r) / 2;
            return l < d && h < c ? (d - l) * (c - h) : 0
        }
        _tableCardCheck(e) {
            for (let t = 0; t < this._selfCards.length; t++) {
                if (e == this._selfCards[t].tag) return !0
            }
            return !1
        }
        _getTableCard(e, t) {
            for (let i = 0; i < this._selfCards.length; i++) {
                let a = this._selfCards[i];
                if (e == a.tag && (t.eCardNum != a.eCardNum || t.eCardSuit != a.eCardSuit)) return a
            }
            return null
        }
        _getSelfTableCard() {
            let e = !0,
                t = [];
            for (let i = 0; i < 6; i++) {
                let a = new N;
                for (let e = 0; e < this._selfCards.length; e++) {
                    let t = this._selfCards[e];
                    if (t.tag == i) {
                        a.number = t.eCardNum, a.suit = t.eCardSuit;
                        break
                    }
                }
                null == a.number && (e = !1, a.number = C.Number(U.pb.SpecialCards.Cards_Back), a.suit = C.Number(U.pb.SpecialCards.Cards_Back)), t[i] = a
            }
            return this._isPlaceCardOver = e, 2 == this._placeCardType || 5 == this._placeCardType ? e ? this.setPlaceCardIsOKTime(this._placeCardType - 1) : this.setPlaceCardIsOKTime(0) : this.setPlaceCardIsOKTime(e ? 1 : 0), t
        }
        _getSelfHoleCards() {
            let e = [];
            for (let t = 0; t < 7; t++) {
                let i = new N;
                for (let a = 0; a < this._selfCards.length; a++) {
                    let s = this._selfCards[a];
                    if (C.Number(s.name) == t) {
                        i.number = s.eCardNum, i.suit = s.eCardSuit, e[t] = i;
                        break
                    }
                }
            }
            return e
        }
        _getCardByTag(e) {
            for (let t = 0; t < this._selfCards.length; t++) {
                let i = this._selfCards[t];
                if (C.Number(i.tag) == e) return i
            }
            return null
        }
        _getCardByName(e) {
            for (let t = 0; t < this._selfCards.length; t++) {
                let i = this._selfCards[t];
                if (i.name == e) return i
            }
            return null
        }
        _getVacancyCardIndex() {
            for (let e = 0; e < 6; e++)
                if (null == this._getCardByTag(e)) return e;
            return -1
        }
        _getCardPosByBg(e) {
            let t = e.node.getPosition();
            return v2(t.x + this._cardPosOffsetByBg.x, t.y + this._cardPosOffsetByBg.y)
        }
        _setAllScoreFont(e, t, i) {
            t = C.StringTools.serverGoldToShowNumber(t);
            let a = (t = C.StringTools.toFixed(t, 1)).toString();
            0 == t ? (e.font = this.all_level_number, i ? (e.fontSize = 35, e.lineHeight = 35, e.string = a) : (e.fontSize = 95, e.lineHeight = 95, e.string = "+" + a)) : (e.font = t < 0 ? this.all_lose_number : this.all_win_number, i ? (e.fontSize = t < 0 ? 40 : 45, e.lineHeight = t < 0 ? 40 : 45) : (e.fontSize = t < 0 ? 100 : 130, e.lineHeight = t < 0 ? 100 : 130), e.string = t < 0 ? a : "+" + a)
        }
        _setAllScore(e) {
            this.all_score_label.node.active = !0, this._setAllScoreFont(this.all_score_label, e);
            let t = C.resMgr.getLabelStringSize(this.all_score_label),
                i = v2(this._selfMultiplePos[1].x, this._selfMultiplePos[1].y + 43 - 17);
            i = v2(i.x + t.width / 2, i.y), this.all_score_label.node.setPosition(i)
        }
        onChangeBg(e) {
            C.resMgr.setSpriteFrame(this.game_bg, "zh_CN/game/jackfruit/bg/bg_" + e)
        }
        UpdateCardFace() {
            this._selfCards.forEach((e => e.updateCard())), this._publicCards.forEach((e => e.updateCard())), this._otherTableCards.forEach((e => e.updateCard())), this._moveCards.forEach((e => e.updateCard()))
        }
        onRequestPlaceCard(e) {
            let t = this._getSelfTableCard(),
                i = [],
                a = [],
                s = [],
                n = this._getSelfHoleCards();
            for (let e = 0; e < 6; e++) e < 2 ? i[e] = t[e] : e < 4 ? a[e - 2] = t[e] : s[e - 4] = t[e];
            e ? C.jackfruitNet.requestPlaceCardOver(i, a, s, n) : C.jackfruitNet.requestPlaceCard(i, a, s, n)
        }
        moveCardByTableCardBgIndex(e, t, i = !0) {
            if (t < 0 || t >= this.selfTableCardBgs.length) return void this.moveCardByHand(e);
            let a = this.selfTableCardBgs[t],
                s = moveTo(.05, this._getCardPosByBg(a)),
                n = callFunc(((e, t) => {
                    let i = t.card,
                        a = t.cardBg,
                        s = t.isShowAction;
                    if (i.node.zIndex = 0, s) {
                        i.showActionD(0);
                        let e = a.node.getChildByName("action_face");
                        e.active = !0;
                        let t = e.getComponent(Animation);
                        t.hasEventListener("finished") || t.on("finished", (function() {
                            e.active = !1
                        }), this), t.play("card_bg_action_face"), this._playEffect(this._path_self_place)
                    }
                    1 != e.scale && e.runAction(scaleTo(.1, 1))
                }), this, {
                    card: e,
                    cardBg: a,
                    isShowAction: i
                });
            e.node.stopAllActions(), e.node.runAction(sequence(s, n)), i && this.onRequestPlaceCard(!1)
        }
        moveCardByHand(e) {
            if (-1 != e.tag && (e.tag = -1, this.onRequestPlaceCard(!1)), "" != e.name) {
                let t = this._getCardPosByBg(this._selfCardBgs[C.Number(e.name)]),
                    i = moveTo(.05, t),
                    a = callFunc((e => {
                        e.zIndex = 0, 1 != e.scale && e.runAction(scaleTo(.1, 1))
                    }), this);
                e.node.stopAllActions(), e.node.runAction(sequence(i, a))
            }
        }
        _sortSize(e, t) {
            return e.size < t.size ? 1 : -1
        }
        putCardByCheck(e) {
            let t = [];
            for (let i = 0; i < this.selfTableCardBgs.length; i++) {
                let a = this.selfTableCardBgs[i],
                    s = new Xa;
                s.size = this._cardCollisionCheck(e, a), s.index = i, t.push(s)
            }
            if (t.sort(this._sortSize.bind(this)), t[0].size > 0) {
                let i = t[0].index,
                    a = this.selfTableCardBgs[i];
                C.resMgr.setSpriteFrame(a.node, "zh_CN/game/jackfruit/ui/card_bg");
                let s = this._getTableCard(i, e);
                if (null != s) {
                    let t = e.tag,
                        i = s.tag != t;
                    if (s.tag = t, -1 != t) this.moveCardByTableCardBgIndex(s, C.Number(t), i);
                    else {
                        let t = e.name;
                        e.name = s.name, s.name = t, this.moveCardByHand(s)
                    }
                }
                let n = e.tag != i;
                e.tag = i, this.moveCardByTableCardBgIndex(e, i, n)
            } else this.moveCardByHand(e)
        }
        _exchangeCard(e, t) {
            console.log("tag1 = " + e.tag + "  tag2 = " + t.tag);
            let i = e.tag;
            e.tag = t.tag, t.tag = i;
            let a = e.name;
            e.name = t.name, t.name = a, this._moveCard(e), this._moveCard(t)
        }
        _moveCard(e) {
            -1 != e.tag ? this.moveCardByTableCardBgIndex(e, C.Number(e.tag)) : this.moveCardByHand(e)
        }
        _doubleClickCard(e) {
            if (console.log("双击"), -1 != e.tag) this.moveCardByHand(e);
            else {
                let t = this._getVacancyCardIndex(); - 1 != t && (e.tag = t, this.moveCardByTableCardBgIndex(e, t))
            }
        }
        setSelectCardImg(e) {
            if (0 == e.length) return;
            let t, i, a = e[0].node.getContentSize(),
                s = e[0].node.scale,
                n = t(s * (a.width + 24), s * (a.height + 24));
            if (1 == e.length) t = t(n.width, n.height), i = e[0].node.getPosition();
            else {
                let a = e[0].node.getPosition().x < e[1].node.getPosition().x ? e[0].node.getPosition().x : e[1].node.getPosition().x,
                    s = Math.abs(e[0].node.getPosition().x - e[1].node.getPosition().x);
                t = t(n.width + s, n.height), i = v2(a + s / 2, e[0].node.getPosition().y)
            }
            this.select_card_img.setContentSize(t), this.select_card_img.setPosition(v2(i.x - 4, i.y + 4))
        }
        clickSelfCardBg(e, t) {
            if (null == this._selectCard) return;
            let i = e.currentTarget.name;
            if (this._selectCard.name == i) this.moveCardByHand(this._selectCard);
            else {
                this._getCardByName(i).name = this._selectCard.name, this._selectCard.name = i, this.moveCardByHand(this._selectCard)
            }
            this._selectCard = null, this.select_card_img.active = !1
        }
        clickSelfTableCardBg(e, t) {
            if (null == this._selectCard) return;
            let i = C.Number(e.currentTarget.name);
            this._selectCard.tag = i, this.moveCardByTableCardBgIndex(this._selectCard, i), this._selectCard = null, this.select_card_img.active = !1
        }
        clickSelfCardBack(e, t) {
            if (-1 == C.JackfruitManager.tRoomData.nSelfSeatID) return;
            let i = e.currentTarget.getComponent(R),
                a = e.getLocation(),
                n = (new Date).getTime();
            switch (e.type) {
                case s.EventType.TOUCH_START:
                    if (null != this._selectCard && (console.log("双击 " + n + "  " + this._oldTime), this._selectCard == i && n - this._oldTime < 500)) return this._isDoubleClick = !0, this._selectCard = null, this.select_card_img.active = !1, void this._doubleClickCard(i);
                    this._isDoubleClick = !1, this._oldTime = n, this._oldLocation = a, this._location = a, this._moveCards = [], this._isPress = !0, i.node.zIndex = 1, i.node.stopAllActions(), i.node.setScale(1), this._moveCards.push(i), this.node.stopActionByTag(this.SHOW_SELECT_CARD_TAG), this.node.runAction(sequence(delayTime(.5), callFunc((() => {
                        this._selectCard = null, this._addMoveCards()
                    }), this))).setTag(this.SHOW_SELECT_CARD_TAG);
                    break;
                case s.EventType.TOUCH_MOVE:
                    if (this._isPress && (Math.abs(this._oldLocation.x - a.x) > 2 || Math.abs(this._oldLocation.y - a.y) > 2) && (this._isPress = !1, this.node.stopActionByTag(this.SHOW_SELECT_CARD_TAG)), this._selectCard != i && (this._isPress || (this._selectCard = null), 2 != this._moveCards.length && (this.select_card_img.active = !1)), this._isDoubleClick && null != this._selectCard) return;
                    this._setMoveCardsPos(a);
                    break;
                case s.EventType.TOUCH_END:
                case s.EventType.TOUCH_CANCEL:
                    if (this._isPress = !1, this.node.stopActionByTag(this.SHOW_SELECT_CARD_TAG), this._isDoubleClick) return;
                    if (null == this._selectCard) Math.abs(this._oldLocation.x - a.x) < 2 && Math.abs(this._oldLocation.y - a.y) < 2 && (console.log("选中"), this._selectCard = i, this.select_card_img.active = !0, this.setSelectCardImg([i]));
                    else {
                        if (this._selectCard != i) return this._exchangeCard(i, this._selectCard), this._selectCard = null, void(this.select_card_img.active = !1);
                        Math.abs(this._oldLocation.x - a.x) < 2 && Math.abs(this._oldLocation.y - a.y) < 2 ? (console.log("选中"), this._selectCard = i, this.select_card_img.active = !0, this.setSelectCardImg([i])) : (this._selectCard = null, this.select_card_img.active = !1)
                    }
                    2 == this._moveCards.length && (this.select_card_img.active = !1);
                    for (let e = 0; e < this._moveCards.length; e++) {
                        let t = this._moveCards[e];
                        t.node.stopAllActions(), t.setGary(!1), this.putCardByCheck(t)
                    }
                    this._moveCards = []
            }
        }
        _setMoveCardsPos(e) {
            this._resetSelfTableCardBgs();
            let t = v2(e.x - this._location.x, e.y - this._location.y);
            for (let e = 0; e < this._moveCards.length; e++) {
                let i = this._moveCards[e],
                    a = i.node.getPosition();
                i.node.setPosition(v2(a.x + t.x, a.y + t.y));
                let s = [];
                for (let e = 0; e < this.selfTableCardBgs.length; e++) {
                    let t = this.selfTableCardBgs[e],
                        a = new Xa;
                    a.size = this._cardCollisionCheck(i, t), a.index = e, s.push(a)
                }
                if (s.sort(this._sortSize.bind(this)), s[0].size > 0) {
                    let e = this.selfTableCardBgs[s[0].index];
                    C.resMgr.setSpriteFrame(e.node, "zh_CN/game/jackfruit/ui/card_bg_bright")
                }
            }
            this._location = e, this.setSelectCardImg(this._moveCards)
        }
        _addMoveCards() {
            let e = this._moveCards[0];
            if (-1 == e.tag) return [];
            let t = C.Number(e.tag) % 2 == 0 ? C.Number(e.tag) + 1 : C.Number(e.tag) - 1;
            for (let e = 0; e < this._selfCards.length; e++)
                if (this._selfCards[e].tag == t) {
                    this._selfCards[e].node.zIndex = 1, this._selfCards[e].node.stopAllActions(), this._moveCards.push(this._selfCards[e]);
                    break
                } if (2 == this._moveCards.length) {
                this._selectCard = null;
                for (let e = 0; e < this._moveCards.length; e++) {
                    let t = this._moveCards[e],
                        i = scaleTo(.1, .8),
                        a = scaleTo(.1, 1.1),
                        s = callFunc(((e, t) => {
                            t.setGary(!0)
                        }), this, t),
                        n = callFunc(((t, i) => {
                            i.setGary(!1), 1 == e && (this.select_card_img.active = !0, this.setSelectCardImg(this._moveCards))
                        }), this, t);
                    t.node.stopAllActions(), t.node.runAction(sequence(s, i, a, n))
                }
            }
        }
        _initPos() {
            let e = winSize.height / C.config.DESIGN_HEIGHT,
                t = winSize.height;
            C.config.IS_FULLSCREEN && (e = (winSize.height - C.config.FULLSCREEN_OFFSETY) / C.config.DESIGN_HEIGHT, t = winSize.height - C.config.FULLSCREEN_OFFSETY), this.card_panel.height = t;
            let i = this.card_panel.getComponentsInChildren(Widget);
            for (let e = 0; e < i.length; e++) i[e].updateAlignment();
            let a = v2(C.config.WIDTH / 2, 200 * e),
                s = v2(C.config.WIDTH / 2, 1765 * e);
            this._postList.push(a), this._postList.push(s);
            for (let e = 0; e < 3; e++) {
                let t = this.otherMultipleImages[e].node.getPosition(),
                    i = this.otherTableCardBgs[2 * e].node.getPosition();
                this._otherMultiplePos[e] = v2(t.x, i.y - 43), this.otherMultipleImages[e].node.setPosition(this._otherMultiplePos[e]), t = this.selfMultipleImages[e].node.getPosition(), i = this.selfTableCardBgs[2 * e].node.getPosition(), this._selfMultiplePos[e] = v2(t.x, i.y - 43), this.selfMultipleImages[e].node.setPosition(this._selfMultiplePos[e])
            }
        }
        _initSeat(e) {
            for (let t = 0; t < e; t++) {
                let e = g(this.seat).getComponent(w);
                this.seat_panel.addChild(e.node), e.setSpecialEffectsPanel(this.specialEffects_panel), e.node.setPosition(v2(this._postList[t].x, this._postList[t].y)), e.setSeatID(t), e.setSeatViewID(t), this._seatList.push(e), e.updateSeatStatus(k.SeatStatus_empty)
            }
        }
        _initStartActive() {
            let e = this.specialEffects_mask_panel.convertToNodeSpaceAR(this.aboutToStart_panel.convertToWorldSpaceAR(this.aboutToStart_label.node.getPosition()));
            for (let e = 0; e < this._seatList.length + 1; e++) this.start_action_ball_node_list[e] = g(0 == e ? this.start_action_ball_1 : this.start_action_ball_2), this._actionStartBallList[e] = this.start_action_ball_node_list[e].getComponent(Animation), this.specialEffects_mask_panel.addChild(this.start_action_ball_node_list[e]);
            for (let t = 0; t < this._seatList.length; t++) this.start_action_light_node_list[t] = g(this.start_action_light), this._actionStartLightList[t] = this.start_action_light_node_list[t].getComponent(Animation), this.specialEffects_mask_panel.addChild(this.start_action_light_node_list[t]), this._actionStartLightList[t].node.setPosition(e);
            this.start_action_ball_node_list[0].setPosition(e), this.start_action_ball_node_list[0].active = !1;
            for (let t = 0; t < this._seatList.length; t++) {
                let i = this._seatList[t],
                    a = this.specialEffects_mask_panel.convertToNodeSpaceAR(i.getHeadWorldPos());
                this.start_action_ball_node_list[t + 1].setPosition(a), this.start_action_ball_node_list[t + 1].active = !1;
                let s = Math.abs(a.x - e.x),
                    n = Math.abs(a.y - e.y),
                    o = s / n,
                    r = Math.atan(o) / (Math.PI / 180),
                    l = Math.sqrt(s * s + n * n),
                    h = 0;
                h = a.x < e.x ? a.y < e.y ? 180 - r : r : a.y < e.y ? 270 - r : 360 - r, this.start_action_light_node_list[t].angle = h, this.start_action_light_node_list[t].scaleY = l / this.start_action_light_node_list[t].getContentSize().height, this.start_action_light_node_list[t].active = !1
            }
        }
        _getFeipaiMovePos(e, t) {
            let i = e ? this.otherTableCardBgs : this.selfTableCardBgs,
                a = i[2 * t].node.getPosition(),
                s = i[2 * t + 1].node.getPosition();
            return v2(a.x + (s.x - a.x) / 2, a.y)
        }
        _initView() {
            this.logo_img.active = !1, this.waitReady_panel.active = !1, this.exchange_node.active = !1, this.all_score_label.node.zIndex = 2, this.select_card_img.zIndex = 2;
            for (let e = 0; e < this.wait_node.length; e++) this.wait_node[e].zIndex = macro.MAX_ZINDEX;
            this.onUpdataStartMatch(!1), this._resetView()
        }
        _resetView() {
            if (this.showUpperLimit(!1), this._jackPotHitCardType) {
                find("action_panel", this._jackPotHitCardType).getComponent(Animation).stop(), this._jackPotHitCardType.removeFromParent(), this._jackPotHitCardType = null
            }
            this._jackpotInfos = [], this.other_fold_card_panel.stopAllActions(), this.other_fold_card.node.stopAllActions(), this.other_fold_card_panel.active = !1, this._selectCard = null, this.select_card_img.active = !1, this.change_table_btn.active = !1, this.all_score_label.node.active = !1, this.placeCardIsOK_btn.getChildByName("delay_node").active = !1, this.all_victory_img.active = !1, this.game_end_panel.active = !1, this.card_panel.active = !1, this.aboutToStart_panel.active = !1, this.modal_panel.active = !1, this.placeCardIsOK_btn.stopAllActions(), this.placeCardIsOK_btn.setScale(v2(1, 1)), this.placeCardIsOK_progressBar.progress = 1, this.placeCardIsOK_btn.active = !1;
            let e = this.aboutToStart_panel.getChildByName("action_node"),
                t = this.aboutToStart_panel.getChildByName("action_node_1");
            e.active = !1, t.active = !0;
            for (let e = 0; e < this.wait_node.length; e++) this.wait_node[e].active = !1;
            let i = C.tools.GetStringByCCFile("jackfruit_bg");
            this.onChangeBg(C.Number(i)), this.updateLabaNum(!1), this.addTime_btn.active = !1, this.guide_panel.on(s.EventType.TOUCH_START, (function() {
                this.guide_panel.getChildByName("action_node").stopAllActions(), this.guide_panel.active = !1
            }), this), this.guide_panel.active = !1, this._setSelfCardTouch(!1), this.logo_node.active = !0;
            for (let e = 0; e < 3; e++) this.otherMultipleImages[e].node.stopAllActions(), this.selfMultipleImages[e].node.stopAllActions(), this.otherMultipleImages[e].node.setPosition(this._otherMultiplePos[e]), this.selfMultipleImages[e].node.setPosition(this._selfMultiplePos[e]), this.otherMultipleImages[e].node.opacity = 255, this.selfMultipleImages[e].node.opacity = 255;
            for (let e = 0; e < 2; e++) this.danmu_btns[e].active = !1
        }
        _recetAllSeats() {
            let e = this._seatList.length;
            for (let t = 0; t < e; t++) this._seatList[t].updateSeatStatus(k.SeatStatus_empty);
            C.JackfruitManager.tRoomData.nSelfSeatID = -1, this._isSeat = !1
        }
        _resetSelfTableCardBgs() {
            for (let e = 0; e < this.selfTableCardBgs.length; e++) {
                let t = this.selfTableCardBgs[e];
                C.resMgr.setSpriteFrame(t.node, "zh_CN/game/jackfruit/ui/card_bg")
            }
        }
        _resetGame(e) {
            this._resetView(), this._placeCardType = 0, this.specialEffects_panel.removeAllChildren(), this.specialEffects_mask_panel.removeAllChildren(), this.specialEffects_mask_panel.removeComponent(BlockInputEvents);
            let t = g(this.mask_panel);
            t.active = !0, this.specialEffects_mask_panel.addChild(t), this.specialEffects_mask_panel.active = !1;
            for (let e = 0; e < 7; ++e) this._selfCards[e].node.stopAllActions(), this._selfCards[e].node.setScale(1), this._selfCards[e].node.setPosition(this._getCardPosByBg(this._selfCardBgs[e])), this._selfCards[e].enabled = !0, this._selfCards[e].tag = -1, this._selfCards[e].node.zIndex = 0, this._selfCards[e].setGary(!1), this._selfCards[e].node.getChildByName("huo").active = !1, this._selfCards[e].node.active = !1;
            for (let e = 0; e < 5; ++e) this._publicCards[e].setGary(!1), this._publicCards[e].node.getChildByName("huo").active = !1, this._publicCards[e].node.active = !1;
            for (let e = 0; e < 6; ++e) this._otherTableCards[e].node.setPosition(this._getCardPosByBg(this.otherTableCardBgs[e])), this._otherTableCards[e].setGary(!1), this._otherTableCards[e].node.getChildByName("huo").active = !1, this._otherTableCards[e].node.active = !1;
            for (let e = 0; e < this.otherCardTypeNode.length; e++) this.selfCardTypeNode[e].active = !1, this.otherCardTypeNode[e].opacity = 255, this.otherCardTypeNode[e].active = !1;
            for (let e = 0; e < this._selfCardBgs.length; e++) this._selfCardBgs[e].node.opacity = 255;
            this.node.stopActionByTag(this.SHOW_SINGLE_SCORE_TAG), this.node.stopActionByTag(this.SHOW_SEAT_LOST_TAG), this.node.stopActionByTag(this.SHOW_SELECT_CARD_TAG), this.node.stopActionByTag(this.WAITING_OTHER_PLAYER_NOTIFY_TAG), this._resetSelfTableCardBgs(), e || (this.waitReady_panel.active = !1, this.stopTimeUpdate(), this._isReady = !1)
        }
        _initRoomData() {
            let e = C.JackfruitManager.tRoomData.param,
                t = C.StringTools.serverGoldToShowNumber(e.ante);
            this.exchange_node.active = !0, this.exchange_label.string = t.toString()
        }
        onAppEnterBackground(e) {
            sys.os == sys.OS_ANDROID ? C.AudioMgr.stopMusic() : C.tools.isPlayMusic() || C.AudioMgr.play("zh_CN/game/dzpoker/audio/silence2", !0, .5, !0), C.tools.setEnterbackState(!0), this._resetGame()
        }
        onAppEnterForeground(e) {
            C.tools.setEnterbackState(!1), sys.os == sys.OS_ANDROID ? this.onUpdataBGM() : C.tools.isPlayMusic() || C.AudioMgr.stop(C.AudioMgr.getAudioID("zh_CN/game/dzpoker/audio/silence2"))
        }
        setGameScene(e) {
            this.game = e
        }
        OnGameDataSync(e) {
            this.face_button.active = !1;
            let t = C.JackfruitManager.tRoomData.param.playerCountMax,
                i = !1;
            this._bIsInit ? (this._resetGame(), this._recetAllSeats()) : (i = !0, this._bIsInit = !0, this._initSeat(t), this._addEvent()), this._initRoomData(), this.setRecordEnabled(!1);
            let a = C.JackfruitManager.tRoomData.kTablePlayerList;
            for (let e = 0; e < a.length; e++) {
                let t = a[e];
                this.playerSitDown(t)
            }
            i && this.setFirstSeat(), C.JackfruitManager.tRoomData.canChangeTable && this.onShowChangeTableBtn(), -1 != C.JackfruitManager.tRoomData.jackpotLeftAmount ? this.showJackPotNumPanel() : this.game.jackpot_number_panel.active = !1, this.onUpdataStartMatch(C.JackfruitManager.tRoomData.startMatchTimeStamp > 0), this.setGame(), this.setDynamicConfig()
        }
        setGame() {
            let e = C.JackfruitManager.tRoomData.cachedNotifyMsg,
                t = C.JackfruitManager.tRoomData.curState,
                i = C.JackfruitManager.tRoomData.cachedNotifyMsg.playerSettle;
            switch (t) {
                case B.RS_FREE:
                    break;
                case B.RS_READY:
                    2 != C.JackfruitManager.tRoomData.kTablePlayerList.length && -1 == C.JackfruitManager.tRoomData.nSelfSeatID || this.showGameEnd(e.leftSeconds);
                    break;
                case B.RS_WAIT:
                    this.setGameWillStart(e.leftSeconds);
                    break;
                case B.RS_DEAL:
                case B.RS_TURN:
                case B.RS_RIVER:
                    this.card_panel.active = !0, this.logo_node.active = !1, this.setPublicCards(e.pubCards);
                    for (let e = 0; e < i.length; e++) {
                        let a = i[e];
                        this.setSeatInfo(a, t)
                    }
                    break;
                case B.RS_PLACE_CARDS:
                    this.card_panel.active = !0, this.logo_node.active = !1, this.setPublicCards(e.pubCards);
                    for (let e = 0; e < i.length; e++) {
                        let a = i[e];
                        this.setSeatInfo(a, t)
                    }
                    let a = e.leftSeconds;
                    this.updataPlaceCardTime(a);
                    break;
                case B.RS_SETTLEMENT:
                    this.card_panel.active = !0, this.logo_node.active = !1, this.setPublicCards(e.pubCards);
                    for (let e = 0; e < i.length; e++) {
                        let a = i[e];
                        this.setSeatInfo(a, t)
                    }
                    e.leftSeconds >= 4 && this.showWinOrLose()
            }
        }
        setPublicCards(e, t, i) {
            for (let a = 0; a < e.length; a++) {
                let s = e[a],
                    n = this._publicCards[a];
                if (n.setContent(s.number, s.suit), n.setHighLight(!1), n.setGary(!1), n.resetPos(), n.node.getChildByName("huo").active = !1, t && !n.node.active) {
                    n.setFace(!(256 == s.number)), n.node.active = !0, n.node.stopAllActions();
                    let e = this._publicCardsPos[a];
                    n.node.setPosition(v2(winSize.width + n.node.getContentSize().width * n.node.scaleX, e.y));
                    let t = i(i),
                        o = moveTo(.2, e),
                        r = callFunc((() => {
                            this._playEffect(this._path_public_card_4)
                        }), this),
                        l = callFunc(((e, t) => {
                            t.showActionD(1)
                        }), this, n);
                    n.node.runAction(sequence(t, r, o, l))
                } else n.setFace(!(256 == s.number)), n.node.active = !0
            }
        }
        setSelfCards(e, t) {
            for (let i = 0; i < this._selfCards.length; i++) {
                let a = this._selfCards[i];
                a.node.active = !0;
                let s = e[i];
                if (a.setContent(s.number, s.suit), a.setFace(!(256 == s.number)), a.setHighLight(!1), a.setGary(!1), a.resetPos(), a.tag = -1, a.name = i.toString(), a.node.getChildByName("huo").active = !1, t) {
                    a.node.stopAllActions(), a.node.opacity = 0;
                    let e = this._getCardPosByBg(this._selfCardBgs[i]),
                        t = delayTime(.05 * i),
                        s = callFunc(((t, i) => {
                            "0" == i.name && this._playEffect(this._path_hand_2), i.node.opacity = 255, i.node.setPosition(v2(e.x, 700));
                            let a = i.node.getChildByName("activeDrop");
                            a.active = !0;
                            let s = a.getComponent(Animation);
                            s.hasEventListener("finished") || s.on("finished", (function() {
                                a.active = !1
                            }), this), s.play("card_action_drop")
                        }), this, a),
                        n = moveTo(.2, e),
                        o = callFunc(((e, t) => {
                            t.showActionD(2)
                        }), this, a);
                    a.node.runAction(sequence(t, s, n, o))
                } else a.node.opacity = 255
            }
        }
        setSelfTableCards(e, t, i) {
            if (256 == e[0].number && -1 == C.JackfruitManager.tRoomData.nSelfSeatID)
                for (let i = 0; i < e.length; i++) {
                    let a = i + 2 * t,
                        s = this._selfCards[a];
                    s.node.active = !0, s.setHighLight(!1), s.setGary(!1), s.resetPos(), s.setContent(e[i].number, e[i].suit), s.node.getChildByName("huo").active = !1, s.setFace(!1), s.tag = a, s.node.stopAllActions(), s.node.setPosition(this._getCardPosByBg(this.selfTableCardBgs[a]))
                } else
                    for (let a = 0; a < e.length; a++)
                        for (let s = 0; s < this._selfCards.length; s++) {
                            let n = this._selfCards[s];
                            if (n.eCardNum == e[a].number && n.eCardSuit == e[a].suit) {
                                let e = a + 2 * t;
                                n.tag = e, n.node.stopAllActions(), n.node.setPosition(this._getCardPosByBg(this.selfTableCardBgs[e])), i && (n.setFace(!1), n.turn(0, !0));
                                break
                            }
                        }
        }
        hideSurplusSelfCard() {
            for (let e = 0; e < this._selfCards.length; e++) {
                let t = this._selfCards[e]; - 1 == t.tag && (t.node.stopAllActions(), t.node.setPosition(this._getCardPosByBg(this._selfCardBgs[e])), -1 == C.JackfruitManager.tRoomData.nSelfSeatID ? t.node.active = !1 : t.setGary(!0))
            }
            for (let e = 0; e < this._selfCardBgs.length; e++) this._selfCardBgs[e].node.opacity = 127
        }
        otherPlaceOver() {
            this._playEffect(this._path_place_card_1);
            for (let e = 0; e < this._otherTableCards.length; e++) {
                let t = this._otherTableCards[e];
                t.node.active = !0, t.setHighLight(!1), t.setGary(!1), t.resetPos(), t.setFace(!1)
            }
            for (let e = 0; e < this.otherTableCardBgs.length; e++) {
                let t = this.otherTableCardBgs[e].node.getChildByName("action_back");
                t.active = !0;
                let i = t.getComponent(Animation);
                i.play("card_bg_action_back"), i.hasEventListener("finished") || i.on("finished", (function() {
                    t.active = !1
                }), this)
            }
        }
        selfPlaceOver() {
            this._playEffect(this._path_place_card_1);
            for (let e = 0; e < this.selfTableCardBgs.length; e++) {
                let t = this._selfCards[e];
                t.node.active = !0, t.setFace(!1), t.node.setPosition(this._getCardPosByBg(this.selfTableCardBgs[e]))
            }
            this._selfCards[6].node.active = !1;
            for (let e = 0; e < this.selfTableCardBgs.length; e++) {
                let t = this.selfTableCardBgs[e].node.getChildByName("action_back");
                t.active = !0;
                let i = t.getComponent(Animation);
                i.play("card_bg_action_back"), i.hasEventListener("finished") || i.on("finished", (function() {
                    t.active = !1
                }), this)
            }
        }
        setOtherFoldCard(e, t) {
            let i = [];
            for (let t = 0; t < e.holeCards.length; t++) i[t] = e.holeCards[t];
            if (C.JackfruitManager.filterCards(i, e.headCards), C.JackfruitManager.filterCards(i, e.middleCards), C.JackfruitManager.filterCards(i, e.tailCards), this.other_fold_card_panel.stopAllActions(), this.other_fold_card.node.stopAllActions(), this.other_fold_card_panel.active = 1 == i.length, 1 == i.length)
                if (C.JackfruitManager.setCardImg(this.other_fold_card.node, i[0]), t) {
                    this.other_fold_card_panel.scale = 1.4, this.other_fold_card_panel.runAction(scaleTo(.2, 1)), this.other_fold_card.node.color = color(255, 255, 255, 128);
                    let e = sequence(delayTime(.07), tintTo(.13, 197, 197, 197));
                    this.other_fold_card.node.runAction(spawn(fadeTo(.1, 255), e))
                } else this.other_fold_card_panel.scale = 1, this.other_fold_card.node.color = color(197, 197, 197, 255)
        }
        setOtherTableCards(e, t, i) {
            for (let a = 0; a < e.length; a++) {
                let s = e[a],
                    n = this._otherTableCards[a + 2 * t];
                n.node.active = !0, n.setContent(s.number, s.suit), n.setHighLight(!1), n.setGary(!1), n.resetPos(), n.node.getChildByName("huo").active = !1, i ? (n.setFace(!1), n.turn(0, !0)) : n.setFace(!(256 == s.number))
            }
        }
        setFirstSeat() {
            if (-1 == C.JackfruitManager.tRoomData.nSelfSeatID)
                for (let e = 0; e < this._seatList.length; e++) this._seatList[e]._seat_status == k.SeatStatus_empty && this.turnSeat(this._seatList[e].getSeatViewID(), !1)
        }
        playerSitDown(e) {
            if (e) {
                let t = e.seatId,
                    i = e.playerId;
                i === C.dataHandler.getUserData().u32Uid && (this.face_button.active = !0, this.setRecordEnabled(!0), this._resetGame(), C.JackfruitManager.tRoomData.nSelfSeatID = t, C.JackfruitManager.tRoomData.nPrePickSeatID = -1, this.game.menu_Panel.getComponent(b).updateMenu());
                let a = this.getSeatBySeatID(t);
                if (a)
                    if (a.setData(e), a.setSeatViewID(a.getSeatViewID()), a.updateSeatStatus(k.SeatStatus_waiting), i === C.dataHandler.getUserData().u32Uid) this._isSeat = !0, this.turnSeat(a.getSeatViewID(), !C.dataHandler.getUserData().m_bIsReconnect), C.dataHandler.getUserData().m_bIsReconnect = !1, this.addTime_text.string = C.StringTools.serverGoldToShowString(C.JackfruitManager.tRoomData.actionDelayCountsFee);
                    else switch (e.state) {
                        case D.SReady:
                            2 == C.JackfruitManager.tRoomData.kTablePlayerList.length ? a.updateSeatStatus(k.SeatStatus_ready) : a.updateSeatStatus(k.SeatStatus_waiting_bubble);
                            break;
                        case D.SClickReady:
                            a.updateSeatStatus(k.SeatStatus_wait_ready);
                            break;
                        default:
                            a.updateSeatStatus(k.SeatStatus_inGame)
                    } else {
                        this._seatList.length > 0 && C.TT.showMsg("can't find Seat(" + t + ")", C.Enum.ToastType.ToastTypeError)
                    }
            }
        }
        getSeatByPlayerID(e) {
            for (let t = 0; t < C.JackfruitManager.tRoomData.kTablePlayerList.length; ++t) {
                let i = C.JackfruitManager.tRoomData.kTablePlayerList[t];
                if (i && e == i.playerId) {
                    return this.getSeatBySeatID(i.seatId)
                }
            }
        }
        getSeatBySeatID(e) {
            let t = this._seatList.length;
            for (let i = 0; i < t; i++)
                if (this._seatList[i].getSeatID() == e) return this._seatList[i];
            return null
        }
        getSeatByViewID(e) {
            let t = this._seatList.length;
            for (let i = 0; i < t; i++)
                if (this._seatList[i].getSeatViewID() == e) return this._seatList[i];
            return null
        }
        setSeatInfo(e, t) {
            if (e) {
                let i = e.player;
                if (this.getSeatBySeatID(i.seatId)) {
                    let a = this.getSeatBySeatID(i.seatId).getSeatViewID();
                    0 == a ? (-1 == C.JackfruitManager.tRoomData.nSelfSeatID ? i.state != D.SWaitPlaceCards && i.state != D.SModifyPlaceCards && i.state != D.SPlaceCards && i.state != D.SConfirmsPlaceCards || this.setSelfCards(i.holeCards) : i.state != D.SPlaceCards && i.state != D.SModifyPlaceCards && i.state != D.SConfirmsPlaceCards || this._setSelfCardTouch(!0), i.state != D.SWaitResult && C.JackfruitManager.tRoomData.nSelfSeatID != i.seatId || (this.setSelfCards(i.holeCards), this.setSelfTableCards(i.headCards, 0), this.setSelfTableCards(i.middleCards, 1), this.setSelfTableCards(i.tailCards, 2)), i.state == D.SWaitResult ? (this.hideSurplusSelfCard(), this.setPlaceCardIsOKTime(2)) : i.state == D.SConfirmsPlaceCards ? this.setPlaceCardIsOKTime(2) : i.state != D.SPlaceCards && i.state != D.SModifyPlaceCards || (C.JackfruitManager.tRoomData.nSelfSeatID == i.seatId ? (this._getSelfTableCard(), this.addTime_btn.active = -1 != C.JackfruitManager.tRoomData.actionDelayCountsFee) : (this.setPlaceCardIsOKTime(0), i.state == D.SPlaceCards ? this.setWaitByViewID(0, !0) : this.setModifyByViewID(0, !0)))) : i.state == D.SWaitResult ? (this.setOtherFoldCard(i, !1), this.setOtherTableCards(i.headCards, 0), this.setOtherTableCards(i.middleCards, 1), this.setOtherTableCards(i.tailCards, 2), this.setWaitByViewID(1, !1)) : i.state == D.SPlaceCards ? this.setWaitByViewID(1, !0) : i.state == D.SModifyPlaceCards ? (this.setOtherTableCards(i.headCards, 0), this.setOtherTableCards(i.middleCards, 1), this.setOtherTableCards(i.tailCards, 2), this.setModifyByViewID(1, !0)) : i.state == D.SConfirmsPlaceCards && (this.setOtherTableCards(i.headCards, 0), this.setOtherTableCards(i.middleCards, 1), this.setOtherTableCards(i.tailCards, 2)), t == B.RS_SETTLEMENT && 0 == a && (this.hideSurplusSelfCard(), this._setAllScore(e.totalScore))
                } else C.TT.showMsg("can't find Seat:" + i.seatId, C.Enum.ToastType.ToastTypeError)
            }
        }
        turnSeat(e, t) {
            if (this._isTurning) return;
            this._trunIngSeatViewID = e;
            this._seatList.length;
            0 != this._trunIngSeatViewID ? t ? (this.modal_panel.active = !0, this._isTurning = !0, this.startTurning()) : this.startTurningWithNoAction() : this.turnEndSitDown()
        }
        startTurning(e = .2) {
            let t = this._seatList.length,
                i = this._postList;
            for (let a = 0; a < t; a++) {
                let s, n = this._seatList[a].getSeatViewID();
                if (s = n + 1 == t ? 0 : n + 1, this._seatList[a].node.stopAllActions(), a == t - 1) {
                    let t = moveTo(e, v2(i[s].x, i[s].y)),
                        n = callFunc(this.turnIngCallBack.bind(this), this);
                    this._seatList[a].node.runAction(sequence(t, n)), this._seatList[a].setSeatViewID(s)
                } else {
                    let t = moveTo(e, v2(i[s].x, i[s].y));
                    this._seatList[a].node.runAction(t), this._seatList[a].setSeatViewID(s)
                }
            }
        }
        turnIngCallBack() {
            let e = this._seatList.length;
            this._trunIngSeatViewID += 1, this._trunIngSeatViewID < e ? this.startTurning() : (this._isTurning = !1, this.modal_panel.active = !1, this.turnEndSitDown())
        }
        startTurningWithNoAction() {
            let e = this._seatList.length,
                t = this._postList,
                i = 0;
            for (let a = 0; a < e; a++) {
                let s, n = this._seatList[a].getSeatViewID();
                i = e - this._trunIngSeatViewID, s = n + i >= e ? n + i - e : n + i, this._isTurning = !1, this._seatList[a].node.stopAllActions(), this._seatList[a].node.setPosition(v2(t[s].x, t[s].y)), this._seatList[a].setSeatViewID(s)
            }
            this.turnEndSitDown()
        }
        turnEndSitDown() {
            let e = this._seatList.length;
            for (let t = 0; t < e; t++) this._seatList[t].setSeatViewID(this._seatList[t].getSeatViewID());
            let t = this.getSeatBySeatID(C.JackfruitManager.tRoomData.nSelfSeatID);
            if (t) switch (this._isSeat = !0, t._playerInfo.state) {
                case D.SReady:
                    2 == C.JackfruitManager.tRoomData.kTablePlayerList.length ? t.updateSeatStatus(k.SeatStatus_ready) : t.updateSeatStatus(k.SeatStatus_waiting_bubble);
                    break;
                case D.SClickReady:
                    t.updateSeatStatus(k.SeatStatus_wait_ready);
                    break;
                default:
                    t.updateSeatStatus(k.SeatStatus_inGame)
            }
        }
        onSitdownSucc(e) {
            let t = C.JackfruitManager.tRoomData.GetTablePlayer(e);
            this.playerSitDown(t)
        }
        onStandUpSucc(e) {
            this.setRoomCurState(B.RS_FREE);
            let t = C.JackfruitManager.tRoomData.GetTablePlayer(e);
            this.Standup(t), t && C.JackfruitManager.tRoomData.RemoveTablePlayer(t.playerId)
        }
        onNeedBuyin(e) {
            this.buyin_panel.getComponent(v).show(e)
        }
        Standup(e) {
            if (e) {
                let t = e.seatId;
                e.playerId == C.dataHandler.getUserData().u32Uid ? (this.face_button.active = !1, C.JackfruitManager.tRoomData.nSelfSeatID = -1, this._isSeat = !1, this.game.menu_Panel.getComponent(b).updateMenu(), this.change_table_btn.active = !1, this.setRecordEnabled(!1)) : this._isReady && this.stopTimeUpdate(Za.Ready);
                let i = this.getSeatBySeatID(t);
                i ? i.updateSeatStatus(k.SeatStatus_empty) : C.TT.showMsg(C.StringTools.formatC("can't find Seat(%d)", t), C.Enum.ToastType.ToastTypeError), -1 == C.JackfruitManager.tRoomData.nSelfSeatID && this.stopTimeUpdate(Za.Ready)
            }
            for (let e = 0; e < this._seatList.length; e++) this._seatList[e]._seat_status != k.SeatStatus_ready && this._seatList[e]._seat_status != k.SeatStatus_inGame || this._seatList[e].updateSeatStatus(k.SeatStatus_waiting_bubble)
        }
        onGameWillStart(e) {
            this._resetGame();
            let t = e.leftSeconds;
            this.setRoomCurState(B.RS_WAIT), this.setGameWillStart(t)
        }
        setGameWillStart(e) {
            for (let e = 0; e < this._seatList.length; e++) {
                this._seatList[e].updateSeatStatus(k.SeatStatus_inGame)
            }
            if (e <= 0) return;
            this.aboutToStart_panel.active = !0, this.aboutToStart_label.string = e.toString(), this._time = 100, this._htime = this._time / (e * p.getFrameRate()), this.aboutToStart_progressBar.progress = 1, this._countdownType = Za.aboutToStart, this.aboutToStart_panel.getChildByName("action_node_1").angle = 0, this.schedule(this.timeUpdate, 0)
        }
        onNoticeDeal(e) {
            this._resetGame(), this.showActiveStart(e)
        }
        showActiveStart(e) {
            this.specialEffects_mask_panel.active = !0, this._initStartActive();
            for (let t = 0; t < this._actionStartBallList.length; t++) {
                this.start_action_ball_node_list[t].active = !0;
                let i = 0 == t ? "start_action_ball_1" : "start_action_ball_2";
                this._actionStartBallList[t].play(i), t < this._actionStartLightList.length ? (this.start_action_light_node_list[t].active = !0, this._actionStartLightList[t].play("start_action_light"), this._playEffect(this._path_hand_1)) : this._actionStartBallList[t].hasEventListener("finished") || this._actionStartBallList[t].on("finished", (function() {
                    this.hideActionStart(), this.setDeal(e)
                }), this)
            }
        }
        hideActionStart() {
            for (let e = 0; e < this._actionStartBallList.length; e++) this._actionStartBallList[e].stop(), this.start_action_ball_node_list[e].active = !1, e < this._actionStartLightList.length && (this.start_action_light_node_list[e].active = !1, this._actionStartLightList[e].stop());
            this.specialEffects_mask_panel.active = !1
        }
        setDeal(e) {
            this.card_panel.active = !0, this.logo_node.active = !1, this.setSelfCards(e.holdCards, !0), this.setPublicCards(e.publicCards, !0, .55)
        }
        onStartPlaceCard(e) {
            this.setRoomCurState(B.RS_PLACE_CARDS), this.setWaitByViewID(1, !0), -1 != C.JackfruitManager.tRoomData.nSelfSeatID ? (this.addTime_btn.active = -1 != C.JackfruitManager.tRoomData.actionDelayCountsFee, this._setSelfCardTouch(!0), this.showGuide()) : this.setWaitByViewID(0, !0), this.setPlaceCardIsOKTime(this._placeCardType), this.updataPlaceCardTime(e)
        }
        showGuide() {
            if ("true" != C.tools.GetStringByCCFile("hideJackfruitGuideNew")) {
                C.tools.SaveStringByCCFile("hideJackfruitGuideNew", "true"), this._initGuide(), this.guide_panel.active = !0;
                let e = this.guide_panel.getChildByName("action_node");
                e.setPosition(this._getCardPosByBg(this._selfCardBgs[0]));
                let t = callFunc((e => {
                        e.setPosition(this._getCardPosByBg(this._selfCardBgs[0]))
                    }), this),
                    i = delayTime(.1),
                    a = moveTo(1, this._getCardPosByBg(this.selfTableCardBgs[4])),
                    s = delayTime(.4);
                e.runAction(repeatForever(sequence(t, i, a, s))), this.guide_panel.getChildByName("action_node_1").getComponent(Animation).play("guide")
            }
        }
        onModifyPlaceCard(e) {
            let t = this.getSeatBySeatID(e);
            t && C.JackfruitManager.tRoomData.nSelfSeatID != e && this.setModifyByViewID(t.getSeatViewID(), !0), C.JackfruitManager.tRoomData.nSelfSeatID == e && (this.addTime_btn.active = -1 != C.JackfruitManager.tRoomData.actionDelayCountsFee)
        }
        onShowPlaceCard(e) {
            this._playEffect(this._path_place_card_2), this.setRoomCurState(B.RS_TURN), this.node.stopActionByTag(this.SHOW_SELECT_CARD_TAG), this._resetSelfTableCardBgs(), this.addTime_btn.active = !1, this._setSelfCardTouch(!1), this.stopTimeUpdate(), this.guide_panel.getChildByName("action_node").stopAllActions(), this.guide_panel.active = !1;
            let t = -1 == C.JackfruitManager.tRoomData.nSelfSeatID;
            for (let i = 0; i < e.length; i++) {
                let a = e[i];
                0 == this.getSeatBySeatID(a.seatId).getSeatViewID() ? (this.setSelfCards(a.holeCards), this.setSelfTableCards(a.headCards, 0, t), this.setSelfTableCards(a.middleCards, 1, t), this.setSelfTableCards(a.tailCards, 2, t), this.hideSurplusSelfCard()) : (this.setOtherFoldCard(a, !0), this.setOtherTableCards(a.headCards, 0, !0), this.setOtherTableCards(a.middleCards, 1, !0), this.setOtherTableCards(a.tailCards, 2, !0))
            }
        }
        updataPlaceCardTime(e) {
            e <= 0 || (this.stopTimeUpdate(), this.placeCardIsOK_btn.active = !0, this.placeCardIsOK_time_label.string = e.toString(), this._time = 100, this._htime = this._time / (e * p.getFrameRate()), this._countdownType = Za.PlaceCard, this.schedule(this.timeUpdate, 0))
        }
        updataWaitAction(e, t) {
            let i = e.getChildByName("placecard_wait"),
                a = "",
                s = "";
            t ? (a = "placeCard_img", s = "placeCard_img_pos") : (a = "modify_placeCard_img", s = "modify_placeCard_img_pos"), C.resMgr.setSpriteFrame(i, C.config.getLanguagePath("game/jackfruit/ui/" + a));
            let n = i.getContentSize(),
                o = i.getPosition();
            for (let t = 0; t < 3; t++) {
                let i = e.getChildByName("placecard_wait_" + t);
                C.resMgr.setSpriteFrame(i, "zh_CN/game/jackfruit/ui/" + s), i.setPosition(v2(o.x + n.width / 2 - 10 + 20 * t, i.getPosition().y))
            }
        }
        setWaitByViewID(e, t) {
            if (this.wait_node[e].active = t, t) {
                this.updataWaitAction(this.wait_node[e], !0), this.wait_node[e].getComponent(Animation).play("placecard_wait")
            }
        }
        setModifyByViewID(e, t) {
            if (this.wait_node[e].active = t, t) {
                this.updataWaitAction(this.wait_node[e], !1), this.wait_node[e].getComponent(Animation).play("placecard_wait")
            }
        }
        setPlaceCardIsOKTime(e) {
            let t = this.placeCardIsOK_btn.getChildByName("btn_label"),
                i = this.placeCardIsOK_btn.getChildByName("action_node"),
                a = i.getChildByName("xiaodaojishi").getComponent(Animation);
            switch (this._placeCardType = e, e) {
                case 0:
                    i.active = !1, find("btn_bg_img", this.placeCardIsOK_btn).active = !0, t.active = !0, this.placeCardIsOK_btn.getComponent(Button).enabled = !1, C.resMgr.setSpriteFrame(this.placeCardIsOK_btn.getChildByName("btn_bg_img"), "zh_CN/game/jackfruit/ui/placeCard_btn_0"), C.resMgr.setSpriteFrame(this.placeCardIsOK_btn.getChildByName("arrow_img"), "zh_CN/game/jackfruit/ui/placeCard_arrow_0"), C.resMgr.setSpriteFrame(this.placeCardIsOK_progressBar.node, "zh_CN/game/jackfruit/ui/placeCard_progress_0"), t.opacity = 102, this.placeCardIsOK_time_label.node.color = color(255, 255, 255);
                    break;
                case 1:
                    i.active = !1, find("btn_bg_img", this.placeCardIsOK_btn).active = !0, t.active = !0, this.placeCardIsOK_btn.getComponent(Button).enabled = !0, C.resMgr.setSpriteFrame(this.placeCardIsOK_btn.getChildByName("btn_bg_img"), "zh_CN/game/jackfruit/ui/placeCard_btn_1"), C.resMgr.setSpriteFrame(this.placeCardIsOK_btn.getChildByName("arrow_img"), "zh_CN/game/jackfruit/ui/placeCard_arrow_1"), C.resMgr.setSpriteFrame(this.placeCardIsOK_progressBar.node, "zh_CN/game/jackfruit/ui/placeCard_progress_1"), t.opacity = 255, this.placeCardIsOK_time_label.node.color = color(255, 255, 0);
                    break;
                case 2:
                    i.active = !1, find("btn_bg_img", this.placeCardIsOK_btn).active = !1, t.active = !1, this.placeCardIsOK_btn.getComponent(Button).enabled = !1, C.resMgr.setSpriteFrame(this.placeCardIsOK_btn.getChildByName("btn_bg_img"), "zh_CN/game/jackfruit/ui/placeCard_btn_0"), C.resMgr.setSpriteFrame(this.placeCardIsOK_btn.getChildByName("arrow_img"), "zh_CN/game/jackfruit/ui/placeCard_arrow_0"), C.resMgr.setSpriteFrame(this.placeCardIsOK_progressBar.node, "zh_CN/game/jackfruit/ui/placeCard_progress_0"), this.placeCardIsOK_time_label.node.color = color(255, 255, 255);
                    break;
                case 3:
                    i.active = !0, find("btn_bg_img", this.placeCardIsOK_btn).active = !0, t.active = !0, a.play("xiaodaojishi"), this.placeCardIsOK_btn.getComponent(Button).enabled = !1, C.resMgr.setSpriteFrame(this.placeCardIsOK_btn.getChildByName("btn_bg_img"), "zh_CN/game/jackfruit/ui/placeCard_btn_2"), C.resMgr.setSpriteFrame(this.placeCardIsOK_btn.getChildByName("arrow_img"), "zh_CN/game/jackfruit/ui/placeCard_arrow_2"), C.resMgr.setSpriteFrame(this.placeCardIsOK_progressBar.node, "zh_CN/game/jackfruit/ui/placeCard_progress_2"), t.opacity = 102, this.placeCardIsOK_time_label.node.color = color(255, 104, 0);
                    break;
                case 4:
                    i.active = !0, find("btn_bg_img", this.placeCardIsOK_btn).active = !0, t.active = !0, a.play("xiaodaojishi"), this.placeCardIsOK_btn.getComponent(Button).enabled = !0, C.resMgr.setSpriteFrame(this.placeCardIsOK_btn.getChildByName("btn_bg_img"), "zh_CN/game/jackfruit/ui/placeCard_btn_3"), C.resMgr.setSpriteFrame(this.placeCardIsOK_btn.getChildByName("arrow_img"), "zh_CN/game/jackfruit/ui/placeCard_arrow_2"), C.resMgr.setSpriteFrame(this.placeCardIsOK_progressBar.node, "zh_CN/game/jackfruit/ui/placeCard_progress_2"), t.opacity = 102, this.placeCardIsOK_time_label.node.color = color(255, 104, 0);
                    break;
                case 5:
                    i.active = !0, find("btn_bg_img", this.placeCardIsOK_btn).active = !1, t.active = !1, a.play("xiaodaojishi"), this.placeCardIsOK_btn.getComponent(Button).enabled = !1, C.resMgr.setSpriteFrame(this.placeCardIsOK_btn.getChildByName("btn_bg_img"), "zh_CN/game/jackfruit/ui/placeCard_btn_2"), C.resMgr.setSpriteFrame(this.placeCardIsOK_btn.getChildByName("arrow_img"), "zh_CN/game/jackfruit/ui/placeCard_arrow_2"), C.resMgr.setSpriteFrame(this.placeCardIsOK_progressBar.node, "zh_CN/game/jackfruit/ui/placeCard_progress_2"), this.placeCardIsOK_time_label.node.color = color(255, 104, 0)
            }
        }
        onCommunityCards(e) {
            this.setRoomCurState(e.roundState), this.setPublicCards(e.publicCards, !0, 0)
        }
        timeUpdate() {
            if (this._time <= 0) return void this.stopTimeUpdate();
            let e = m.getDeltaTime() / (1 / 60) * this._htime;
            this._time -= e;
            let t = this._time / 100,
                i = 0;
            switch (this._countdownType) {
                case Za.aboutToStart:
                    let e = this.aboutToStart_panel.getChildByName("action_node"),
                        a = this.aboutToStart_panel.getChildByName("action_node_1");
                    if (i = Math.floor(Math.abs(this._time) / (this._htime * p.getFrameRate())), this._lastTime != i)
                        if (this._lastTime = i, i < 3) {
                            if (0 == e.active) {
                                e.active = !0, e.getComponent(Animation).play("countdown"), this.aboutToStart_label.node.active = !1
                            }
                            this._playEffect(this._path_countdownS), e.getChildByName("aboutToStart_label").getComponent(n).string = i.toString()
                        } else this.aboutToStart_label.node.active = !0, this.aboutToStart_label.string = i.toString();
                    a.angle = 360 * t, this.aboutToStart_progressBar.progress = t;
                    break;
                case Za.PlaceCard:
                    let s = this.placeCardIsOK_btn.getChildByName("action_node");
                    i = Math.floor(Math.abs(this._time) / (this._htime * p.getFrameRate())), -1 != C.JackfruitManager.tRoomData.nSelfSeatID && this._lostTime != i && 4 == i && 2 != this._placeCardType && 5 != this._placeCardType && (this._playEffect(this._path_countdownP), C.tools.isVibrate() && C.native.Vibrate()), this._placeCardType < 3 && i < 5 && this.setPlaceCardIsOKTime(this._placeCardType + 3), this._placeCardType > 2 && i >= 5 && this.setPlaceCardIsOKTime(this._placeCardType - 3), this._lostTime = i, s.angle = 360 * t, this.placeCardIsOK_progressBar.progress = t, this.placeCardIsOK_time_label.string = Math.floor(Math.abs(this._time) / (this._htime * p.getFrameRate())).toString();
                    break;
                case Za.Ready:
                    if (-1 == C.JackfruitManager.tRoomData.nSelfSeatID) this.waitReady_progressBar.progress = t, this.waitReady_label.string = Math.floor(Math.abs(this._time) / (this._htime * p.getFrameRate())).toString(), C.resMgr.setSpriteFrame(this.waitReady_img, C.config.getLanguagePath("game/jackfruit/ui/wait_other_1"));
                    else if (this._isReady) this.waitReady_progressBar.progress = t, this.waitReady_label.string = Math.floor(Math.abs(this._time) / (this._htime * p.getFrameRate())).toString(), C.resMgr.setSpriteFrame(this.waitReady_img, C.config.getLanguagePath("game/jackfruit/ui/wait_other_0"));
                    else {
                        this.continue_btn.getChildByName("continue_label").getComponent(n).string = C.StringTools.formatC(C.config.getStringData("jackfruit_continue_btn_label"), Math.floor(Math.abs(this._time) / (this._htime * p.getFrameRate())).toString())
                    }
            }
        }
        stopTimeUpdate(e) {
            if (null == e || this._countdownType == e) {
                switch (this._time = 100, this._lastTime = 0, this.unschedule(this.timeUpdate), this._countdownType) {
                    case Za.aboutToStart:
                        let e = this.aboutToStart_panel.getChildByName("action_node"),
                            t = this.aboutToStart_panel.getChildByName("action_node_1");
                        this.aboutToStart_label.node.active = !0, e.active = !1, t.angle = 0, this.aboutToStart_panel.active = !1;
                        break;
                    case Za.PlaceCard:
                        this.placeCardIsOK_btn.stopAllActions(), this.placeCardIsOK_btn.setScale(v2(1, 1)), this.placeCardIsOK_progressBar.progress = 1, this.placeCardIsOK_btn.active = !1;
                        let i = this.placeCardIsOK_btn.getChildByName("action_node");
                        i.angle = 0, i.active = !1;
                        break;
                    case Za.Ready:
                        this.waitReady_panel.active = !1
                }
                this._countdownType = Za.empty
            }
        }
        onGameRoundEne(e) {
            this.setRoomCurState(B.RS_SETTLEMENT), this.updateJackpotNumEvent(), this.setPublicCards(e.pubCards), this._showCardTypeNum = 0;
            let t = [];
            for (let i = 0; i < e.playerSettle.length; i++) {
                let a = e.playerSettle[i],
                    s = a.player,
                    n = this.getSeatBySeatID(s.seatId).getSeatViewID(),
                    o = delayTime(0),
                    r = callFunc(this.showCardType.bind(this), this, {
                        viewID: n,
                        index: 0,
                        result: a.headResult,
                        cards: s.headCards,
                        pubCards: e.pubCards
                    }),
                    l = delayTime(1.7),
                    h = callFunc(this.showCardType.bind(this), this, {
                        viewID: n,
                        index: 1,
                        result: a.middleResult,
                        cards: s.middleCards,
                        pubCards: e.pubCards
                    }),
                    d = delayTime(1.7),
                    c = callFunc(this.showCardType.bind(this), this, {
                        viewID: n,
                        index: 2,
                        result: a.tailResult,
                        cards: s.tailCards,
                        pubCards: e.pubCards
                    });
                t[i] = sequence(o, r, l, h, d, c)
            }
            let i = i(t[0], t[1]);
            i.setTag(this.SHOW_SINGLE_SCORE_TAG), this.node.runAction(i)
        }
        showCardType(e, t) {
            let i = t.viewID,
                a = t.index,
                s = t.result;
            this._showCardTypeNum % 2 == 0 && this.setAllCardGary(!0);
            let n = 0 == i ? this.selfCardTypeNode : this.otherCardTypeNode,
                o = 0 == i ? this.selfMultipleImages : this.otherMultipleImages;
            if (a >= n.length) return;
            n[a].active = !0, this._initCardTypeNode(n[a], s);
            let r = o[a].node.getPosition();
            n[a].opacity = 0, n[a].setPosition(v2(winSize.width, r.y));
            let l = moveTo(.2, v2(r.x - 27, r.y)),
                h = moveTo(.1, v2(r.x, r.y)),
                d = fadeIn(.3),
                c = callFunc(((e, t) => {
                    let i = t.viewID,
                        a = t.index,
                        s = t.result,
                        n = t.cards,
                        o = t.pubCards;
                    if (s.score >= 0 && this.showWinCardAction(i, a, s, n, o), s.level >= M.FourOfAKind) {
                        let t = e.getChildByName("bigCardNode");
                        t.active = !0;
                        let i = t.getComponent(Animation);
                        i.play("dapai"), i.hasEventListener("finished") || i.on("finished", (function() {
                            t.active = !1
                        }), this), this._playEffect(this._path_big_card)
                    }
                }), this, t),
                _ = delayTime(1);
            n[a].stopAllActions(), n[a].runAction(sequence(spawn(sequence(l, h), d), c, _, callFunc((() => {
                5 == this._showCardTypeNum && (this.showJiaFen(), this.setAllCardGary(!1)), this._showCardTypeNum++
            }), this))), o[a].node.runAction(sequence(delayTime(.3), spawn(moveTo(.2, v2(r.x, r.y + 65)), fadeOut(.2)))), 0 == i && (s.score >= 0 ? this._playEffect(this._path_single_win) : this._playEffect(this._path_single_lose, !1, .8))
        }
        showJiaFen() {
            for (let e = 0; e < 3; e++) {
                this.selfCardTypeNode[e].stopAllActions(), this.selfCardTypeNode[e].runAction(fadeOut(.2)), this.otherCardTypeNode[e].stopAllActions();
                let t = v2(winSize.width, this.otherCardTypeNode[e].getPosition().y);
                this.otherCardTypeNode[e].runAction(sequence(spawn(moveTo(.25, t), fadeOut(.15)), callFunc((t => {
                    this.otherCardTypeNode[e].opacity = 255, this.otherCardTypeNode[e].active = !1
                }), this)))
            }
            let e = g(this.card_type_jiafen1),
                t = v2(this._selfMultiplePos[1].x, this._selfMultiplePos[1].y + 43 - 17),
                i = C.JackfruitManager.getPlayerSettleBySeatID(this.getSeatByViewID(0).getSeatID());
            this._setAllScore(i.headResult.score + i.middleResult.score + i.tailResult.score);
            let a = C.resMgr.getLabelStringSize(this.all_score_label);
            t = v2(t.x + a.width / 2, t.y);
            for (let i = 0; i < 3; i++) {
                let a = v2(this._selfMultiplePos[i].x + this.all_score_label.node.getContentSize().width / 2, this._selfMultiplePos[i].y),
                    s = 2 == i;
                this.jiaFenAction(g(e), a, t, s)
            }
            this.all_score_label.node.opacity = 0, this.all_score_label.node.scale = 5, this.all_score_label.node.runAction(sequence(delayTime(.5), spawn(fadeIn(.1), scaleTo(.1, 1))));
            let s = g(this.card_type_jiafen2);
            this.specialEffects_panel.addChild(s), s.setPosition(t), s.runAction(sequence(hide(), delayTime(.6), show(), delayTime(1), removeSelf()))
        }
        jiaFenAction(e, t, i, a) {
            this.specialEffects_panel.addChild(e), e.setPosition(t);
            let s = delayTime(.2),
                n = moveTo(.4, i),
                o = callFunc((e => {
                    e.opacity = 255
                }), this),
                r = delayTime(.2),
                l = callFunc(((e, t) => {
                    if (t) {
                        let e = C.JackfruitManager.tRoomData.param.playerCountMax;
                        for (let t = 0; t < e; t++) {
                            if (C.JackfruitManager.getIsAllWinBySeatID(this.getSeatByViewID(t).getSeatID())) return void this.showFeipai(0 == t)
                        }
                        this.showWinOrLose()
                    }
                }), this, a);
            e.runAction(sequence(s, o, n, r, l, removeSelf())), this._playEffect(this._path_all_score, !1, .8)
        }
        showFeipai(e) {
            let t = g(this.all_victory_feipai_1),
                i = this.getSeatByViewID(e ? 0 : 1).node.getPosition();
            this.feipaiAction_1(g(t), e, i, this._getFeipaiMovePos(e, 0), !1), this.feipaiAction_1(g(t), e, i, this._getFeipaiMovePos(e, 1), !1), this.feipaiAction_1(g(t), e, i, this._getFeipaiMovePos(e, 2), !0)
        }
        feipaiAction_1(e, t, i, a, s) {
            this.specialEffects_panel.addChild(e), e.setPosition(i);
            let n = Math.abs(i.x - a.x),
                o = Math.abs(i.y - a.y),
                r = n / o,
                l = Math.atan(r) / (Math.PI / 180),
                h = Math.sqrt(n * n + o * o),
                d = 0;
            d = t ? l : 180 - l, e.angle = d, e.setScale(v2(1, h / e.getContentSize().height));
            let c = e.getComponent(Animation);
            c.play("feipai"), this._playEffect(this._path_feipai), c.hasEventListener("finished") || c.on("finished", (function() {
                this.feipaiAction_2(g(this.all_victory_feipai_2), t, a, s), e.removeFromParent()
            }), this)
        }
        feipaiAction_2(e, t, i, a) {
            this.specialEffects_panel.addChild(e), t || (e.angle = -180), e.setPosition(i);
            let s = e.getComponent(Animation);
            s.play("feipai_2"), s.hasEventListener("finished") || s.on("finished", (function() {
                e.removeFromParent()
            }), this), a && this.showAllVictory()
        }
        showAllVictory() {
            if (this.showAllVictoryAddScore(), C.JackfruitManager.getIsAllWinBySeatID(this.getSeatByViewID(0).getSeatID())) {
                this.specialEffects_mask_panel.active = !0;
                let e = this.specialEffects_mask_panel.getChildByName("all_victory");
                e || (e = g(this.all_victory), this.specialEffects_mask_panel.addChild(e), e.setPosition(v2(winSize.width / 2, winSize.height / 2)), e.name = "all_victory", C.resMgr.setSpriteFrame(find("quansheng", e), C.config.getLanguagePath("game/jackfruit/animation/victory/quansheng")), C.resMgr.setSpriteFrame(find("quansheng2", e), C.config.getLanguagePath("game/jackfruit/animation/victory/quansheng"))), e.active = !0;
                let t = e.getComponent(Animation);
                t.hasEventListener("finished") || t.on("finished", (function() {
                    e.active = !1, this.specialEffects_mask_panel.active = !1, this.showWinOrLose(!1)
                }), this), C.config.getCurrentLanguage() == C.Enum.LANGUAGE_TYPE.zh_CN || C.config.getCurrentLanguage() == C.Enum.LANGUAGE_TYPE.zh_TW ? t.play("AllWin") : t.play("AllWin_en"), this._playEffect(this._path_allwin)
            } else {
                this.specialEffects_mask_panel.active = !0;
                let e = this.specialEffects_mask_panel.getChildByName("all_failed");
                e || (e = g(this.all_failed), this.specialEffects_mask_panel.addChild(e), e.setPosition(v2(winSize.width / 2, winSize.height / 2)), e.name = "all_failed"), e.active = !0;
                let t = e.getComponent(Animation);
                t.hasEventListener("finished") || t.on("finished", (function() {
                    e.active = !1, this.specialEffects_mask_panel.active = !1, this.showWinOrLose(!1)
                }), this), C.config.getCurrentLanguage() == C.Enum.LANGUAGE_TYPE.zh_CN || C.config.getCurrentLanguage() == C.Enum.LANGUAGE_TYPE.zh_TW ? t.play("AllFailed") : t.play("AllFailed_en"), this._playEffect(this._path_all_failed, !1, 1)
            }
        }
        showAllVictoryAddScore() {
            let e = C.JackfruitManager.getIsAllWinBySeatID(this.getSeatByViewID(0).getSeatID()),
                t = this.all_score_label,
                i = g(this.all_victory_img);
            this.specialEffects_mask_panel.addChild(i), i.active = !0, i.setPosition(v2(winSize.width / 2, winSize.height / 2 - 100));
            let a = e ? "plus30" : "minus30";
            C.resMgr.setSpriteFrame(i, "zh_CN/game/jackfruit/animation/common/" + a), i.stopAllActions();
            let s = t.node.getPosition(),
                n = v2(s.x + t.node.getContentSize().width / 2 + i.getContentSize().width / 2 + 20, s.y),
                o = callFunc((e => {
                    let t = C.JackfruitManager.getPlayerSettleBySeatID(this.getSeatByViewID(0).getSeatID());
                    this._setAllScore(t.totalScore);
                    let i = g(this.card_type_jiafen2);
                    this.specialEffects_panel.addChild(i), i.setPosition(e.getPosition()), i.runAction(sequence(delayTime(1), removeSelf()));
                    let a = g(this.all_score_label.node);
                    this.specialEffects_mask_panel.addChild(a), a.name = "all_score_temp"
                }), this);
            i.scale = 0, i.opacity = 0;
            let r = spawn(scaleTo(.1, 1), fadeIn(.1)),
                l = scaleTo(.05, 1.05),
                h = scaleTo(.12, 1),
                d = spawn(scaleTo(.43, .6), moveTo(.43, n)),
                c = spawn(fadeOut(.1), moveTo(.1, s));
            i.runAction(sequence(r, l, h, d, c, o, removeSelf())), this._playEffect(this._path_allwinjiafen)
        }
        showUpperLimit(e) {
            if (e) {
                let e = C.JackfruitManager.tRoomData.cachedNotifyMsg,
                    t = C.StringTools.serverGoldToShowNumber(e.onlyWinAmount);
                if (t = C.StringTools.toFixed(t, 1), 0 == e.settleType) return;
                this.upper_limit_panel.stopAllActions(), this.upper_limit_panel.opacity = 255, this.upper_limit_panel.active = !0, this.upper_limit_label.string = C.StringTools.formatC(C.config.getStringData("jackfruit_upper_limit_label"), t.toString());
                let i = "";
                i = 1 == e.settleType ? C.StringTools.formatC(C.config.getStringData("jackfruit_upper_limit_richtext_lose"), t.toString()) : C.StringTools.formatC(C.config.getStringData("jackfruit_upper_limit_richtext_win"), t.toString()), C.StringTools.setRichTextString(this.upper_limit_richtext.node, i), this.upper_limit_panel.runAction(sequence(delayTime(1.8), fadeOut(.2), callFunc((e => {
                    e.active = !1
                }), this)))
            } else this.upper_limit_panel.stopAllActions(), this.upper_limit_panel.opacity = 255, this.upper_limit_panel.active = !1
        }
        showWinOrLose(e = !0) {
            let t = find("all_score_temp", this.specialEffects_mask_panel);
            t && t.removeFromParent();
            let i = this.getSeatByViewID(0),
                a = C.JackfruitManager.getPlayerSettleBySeatID(i.getSeatID());
            if (null != a)
                if (a.totalScore > 0)
                    if (a.repeatWining > 2) {
                        this.specialEffects_mask_panel.active = !0, this._playEffect(this._path_winning_streak);
                        let e = this.specialEffects_mask_panel.getChildByName("repeatwin");
                        if (!e) {
                            e = g(this.repeat_win), e.setPosition(v2(winSize.width / 2, winSize.height / 2)), e.name = "repeatwin", this.specialEffects_mask_panel.addChild(e);
                            let t = e.getComponent(Animation);
                            t.hasEventListener("finished") || t.on("finished", (function() {
                                this.specialEffects_mask_panel.active = !1, this.showAddToalScoreAction()
                            }), this)
                        }
                        e.active = !0, cc.find("Node_Pivot/Node_Hands/label_streak", e).getComponent(cc.Label).string = a.repeatWining.toString();
                        let t = e.getComponent(cc.Animation);
                        C.config.getCurrentLanguage() == C.Enum.LANGUAGE_TYPE.zh_CN || C.config.getCurrentLanguage() == C.Enum.LANGUAGE_TYPE.zh_TW ? t.play("YouWin_Streak") : t.play("YouWin_StreakEN")
                    } else e ? (this.specialEffects_mask_panel.active = !1, i.runYouWinOrLose(a.totalScore), this._playEffect(this._path_youwin_small), this.showAddToalScoreAction()) : this.showAddToalScoreAction();
            else a.totalScore < 0 ? (this._playEffect(this._path_youlose), this.showAddToalScoreAction()) : (i.runYouWinOrLose(a.totalScore), this._playEffect(this._path_draw), this.showAddToalScoreAction())
        }
        showAddToalScoreAction() {
            this.showUpperLimit(!0), this.all_score_label.node.stopAllActions();
            let e = this.getSeatByViewID(0).getGoldWorldPos(),
                t = this.all_score_label.node.getParent().convertToNodeSpaceAR(e),
                i = this.all_score_label.node.getPosition(),
                a = [];
            a[0] = v2(i.x + 260, i.y - 10), a[1] = v2(i.x + 180, i.y - 220), a[2] = v2(t.x, t.y);
            let s = bezierTo(.6, a);
            s.easing(easeBezierAction(0, .1, .9, 1));
            let n = sequence(scaleTo(.1, 1.3), scaleTo(.5, .5)),
                o = sequence(fadeTo(.4, 255), fadeTo(.2, 100), callFunc((e => {
                    e.active = !1, this.showGoldAction()
                }), this));
            this.all_score_label.node.runAction(sequence(delayTime(.3), spawn(s, n, o)))
        }
        showGoldAction() {
            this.updateLabaNum(!0);
            for (let e = 0; e < this._seatList.length; e++) {
                let t = this._seatList[e],
                    i = C.JackfruitManager.getPlayerSettleBySeatID(t.getSeatID());
                t.setStake(i.player.score, !0, i.winScore > 0)
            }
            this._playEffect(this._path_gold)
        }
        showTotalResult(e) {
            this.specialEffects_mask_panel.active = !0;
            let t = this.specialEffects_mask_panel.getChildByName("total_result");
            this.specialEffects_mask_panel.addComponent(BlockInputEvents), t || (t = g(this.total_result), this.specialEffects_mask_panel.addChild(t, 1), t.setPosition(v2(winSize.width / 2, winSize.height / 2)), t.name = "total_result"), t.active = !0;
            let i = find("Node_Panel/Node_CoinValue/label_CoinValue", t).getComponent(n);
            this._setTotalNumber(i, e);
            let a = t.getComponent(Animation);
            a.hasEventListener("finished") || a.on("finished", (function() {
                t.active = !1, this.specialEffects_mask_panel.active = !1
            }), this), e < 0 ? a.play("TotalLoose") : a.play("TotalWin")
        }
        setAllCardGary(e) {
            for (let e = 0; e < this._publicCards.length; e++) {
                this._publicCards[e].node.getChildByName("huo").active = !1
            }
            for (let e = 0; e < this._selfCards.length; e++) {
                this._selfCards[e].node.getChildByName("huo").active = !1
            }
            for (let e = 0; e < this._otherTableCards.length; e++) {
                this._otherTableCards[e].node.getChildByName("huo").active = !1
            }
        }
        showWinCardAction(e, t, i, a, s) {
            let n = JSON.parse(JSON.stringify(s));
            for (let e = 0; e < a.length; e++) n.push(a[e]);
            let o = C.JackfruitManager.getCardListByType(n, i.level),
                r = 0 == e ? this._selfCards : this._otherTableCards;
            for (let e = 0; e < o.length; e++) {
                let t = o[e],
                    i = !1;
                for (let e = 0; e < this._publicCards.length; e++) {
                    let a = this._publicCards[e];
                    a.eCardNum == t.number && a.eCardSuit == t.suit && (i = !0, this.showCardActionHuo(a))
                }
                if (!i)
                    for (let e = 0; e < r.length; e++) {
                        let i = r[e];
                        if (i.eCardNum == t.number && i.eCardSuit == t.suit) {
                            this.showCardActionHuo(i);
                            break
                        }
                    }
            }
        }
        showCardActionHuo(e) {
            let t = e.node.getChildByName("huo");
            t.active = !0, t.getComponent(Animation).play("HighlightCard_Loop")
        }
        _setSingleNumber(e, t, i) {
            t = C.StringTools.serverGoldToShowNumber(t);
            let a = (t = C.StringTools.toFixed(t, 1)).toString();
            if (i >= M.FourOfAKind && t >= 0) {
                switch (i) {
                    case M.FourOfAKind:
                        e.font = this.cardtype_win_fnt_8;
                        break;
                    case M.StraightFlush:
                        e.font = this.cardtype_win_fnt_9;
                        break;
                    case M.RoyalFlush:
                        e.font = this.cardtype_win_fnt_10
                }
                e.fontSize = 60, e.lineHeight = 60
            } else e.font = t < 0 ? this.single_lose_number : this.single_win_number, e.fontSize = t < 0 ? 50 : 60, e.lineHeight = t < 0 ? 50 : 60;
            e.string = t < 0 ? a : "+" + a
        }
        _setTotalNumber(e, t) {
            let i = (t = C.StringTools.serverGoldToShowNumber(t)).toString();
            e.font = t < 0 ? this.total_result_lose : this.total_result_win, e.fontSize = 84, e.lineHeight = 84, e.string = i
        }
        _initCardTypeNode(e, t) {
            let i = t.score,
                a = e.getChildByName("card_type_label").getComponent(n),
                s = e.getChildByName("card_type_img"),
                o = e.getChildByName("card_type_img_1"),
                r = e.getChildByName("card_type_light"),
                l = i < 0 ? "lose_" : "win_";
            C.resMgr.setSpriteFrame(s, C.config.getLanguagePath("game/jackfruit/cardtype/cardtype_" + l + t.level)), C.resMgr.setSpriteFrame(o, C.config.getLanguagePath("game/jackfruit/cardtype/cardtype_" + l + t.level)), this._setSingleNumber(a, i, t.level), a.node.setPosition(s.getPosition().x + s.getContentSize().width + 5, s.getPosition().y);
            let h = e.getChildByName("bigCardNode");
            h || (h = g(this.big_card), h.name = "bigCardNode", e.addChild(h)), h.setPosition(v2(s.getPosition().x + s.getContentSize().width / 2, s.getPosition().y)), h.active = !1;
            let d = s.getPosition();
            o.stopAllActions(), r.stopAllActions(), r.setPosition(v2(d.x + s.getContentSize().width / 2)), o.setPosition(v2(d.x + 250, d.y)), r.opacity = 0, o.opacity = 0, o.runAction(sequence(delayTime(.1), fadeTo(.1, 200), spawn(fadeOut(.1), moveTo(.1, d)))), s.stopAllActions(), a.node.stopAllActions(), s.opacity = 0, a.node.opacity = 0, s.runAction(fadeIn(.5)), a.node.runAction(fadeIn(.5)), t.level < M.FourOfAKind && r.runAction(sequence(delayTime(.4), fadeIn(.05), fadeOut(.65)))
        }
        showGameEnd(e) {
            if (this.stopTimeUpdate(), -1 != C.JackfruitManager.tRoomData.nSelfSeatID) {
                if (C.JackfruitManager.tRoomData.GetTablePlayerBySeatId(C.JackfruitManager.tRoomData.nSelfSeatID).state == D.SClickReady) {
                    this.game_end_panel.active = !0, this.continue_btn.getChildByName("continue_label").getComponent(n).string = e.toString()
                } else this._isReady = !0, this.game_end_panel.active = !1, this.waitReady_panel.active = !0, this.waitReady_progressBar.progress = 1
            } else this.game_end_panel.active = !1, this.waitReady_panel.active = !0, this.waitReady_progressBar.progress = 1;
            for (let e = 0; e < C.JackfruitManager.tRoomData.kTablePlayerList.length; e++) {
                let t = this.getSeatBySeatID(C.JackfruitManager.tRoomData.kTablePlayerList[e].seatId);
                switch (t._playerInfo.state) {
                    case D.SReady:
                        2 == C.JackfruitManager.tRoomData.kTablePlayerList.length ? t.updateSeatStatus(k.SeatStatus_ready) : t.updateSeatStatus(k.SeatStatus_waiting_bubble);
                        break;
                    case D.SClickReady:
                        t.updateSeatStatus(k.SeatStatus_wait_ready);
                        break;
                    default:
                        t.updateSeatStatus(k.SeatStatus_inGame)
                }
            }
            this._time = 100, this._htime = this._time / (e * p.getFrameRate()), this._countdownType = Za.Ready, this.schedule(this.timeUpdate, 0)
        }
        onBuyIn(e) {
            let t = C.JackfruitManager.tRoomData.GetTablePlayerBySeatId(e.seatId);
            t && (t.amount = e.amount, t.score = e.score);
            let i = this.getSeatBySeatID(e.seatId);
            i && i.setStake(e.score)
        }
        onDestroyRoom(e) {
            var t;
            let i = null == (t = x.getInstance(null == this ? void 0 : this.node)) || null == (t = t.room) ? void 0 : t.gameScene;
            C.TP.showMsg(C.config.getStringData("jackfruit_destroy_room"), !1, this.gotoHallScene.bind(this), null, !1, !1, "", !1, cc.Label.HorizontalAlign.CENTER, !1, i)
        }
        onConfirmToContinue(e) {
            this.setRoomCurState(B.RS_READY), this.showGameEnd(e)
        }
        onPlaceCardOver(e) {
            1 == this.getSeatBySeatID(e).getSeatViewID() ? (this.setWaitByViewID(1, !1), this.otherPlaceOver()) : -1 == C.JackfruitManager.tRoomData.nSelfSeatID && (this.addTime_btn.active = !1, this._setSelfCardTouch(!1), this.setWaitByViewID(0, !1), this.selfPlaceOver())
        }
        onShowChatPanel() {
            if (null == this.chat_node) {
                this.chat_node = g(this.chat);
                let e = this.chat_node.getChildByName("view_panel");
                this.chat_panel.addChild(this.chat_node);
                let t = this.getSeatByViewID(0),
                    i = t.node.getPosition(),
                    a = t.node.getContentSize(),
                    n = e.getContentSize().height;
                e.setPosition(v2(i.x, i.y + a.height / 2 + n / 2 + 12)), e.stopAllActions(), e.scale = .2, e.runAction(scaleTo(.2, 1)), this.chat_node.on(s.EventType.TOUCH_START, (e => {
                    this.chat_node.active = !1
                }))
            }
            this.chat_node.active = !0
        }
        onShowFacePanel(e) {
            this._clickSeatID = e.seatId, this.face_node.getComponent(L).setUidAndName(e.playerId, e.name), this.face_node.active = !0, O.setCircleSprite(find("root/head_panel/headNode", this.face_node), e.headUrl, e.plat, !1), O.setBigCircleSprite(find("headNode", this.bighead_node), e.headUrl, e.plat, !1, 0), this.face_node.getComponent(L).setUidAndName(e.playerId, e.name), C.httpHandler.requestJFData(e.playerId, C.JackfruitManager.tRoomData.param.ante), this.face_node.stopAllActions(), this.face_node.scale = .2, this.face_node.runAction(scaleTo(.2, 1)), this.face_node.getComponent(L).updateView(this.getSeatBySeatID(e.seatId).getSeatID(), e)
        }
        effectCall(e) {
            let t = e,
                i = 0;
            i = -1 != C.JackfruitManager.tRoomData.nSelfSeatID ? this.getSeatByViewID(0).getSeatID() : -1;
            let a = this.getSeatBySeatID(this._clickSeatID).getSeatID(),
                s = "#";
            s += C.StringTools.formatC("%d", i), s += "#", s += C.StringTools.formatC("%d", a), s += "#", s += C.StringTools.formatC("%d", t), s += "#", s += C.dataHandler.getUserData().nick_name, -1 != C.JackfruitManager.tRoomData.nSelfSeatID && this.showEffect(i, a, t, C.dataHandler.getUserData().nick_name), C.jackfruitNet.requestSendChat(x.getInstanceRoomId(null == this ? void 0 : this.node), A.Enum_Emoji_Interactive, s)
        }
        OnFlyEmoji(e) {
            let t = "",
                i = "",
                a = "",
                s = "",
                n = e.split("#");
            for (let e = 0; e < n.length; e++) 1 == e ? t = n[e] : 2 == e ? i = n[e] : 3 == e ? a = n[e] : 4 == e && n[e] && (s = n[e]);
            (Number(t) != C.JackfruitManager.tRoomData.nSelfSeatID || -1 == Number(t)) && this.showEffect(Number(t), Number(i), Number(a), s)
        }
        getAniNode() {
            for (let e = 0; e < this._headAni_arr.length; e++)
                if (0 == this._headAni_arr[e].zIndex) {
                    let t = this._headAni_arr[e];
                    if ("0" == t.name) {
                        this._headAni_arr.splice(e, 1), e--;
                        continue
                    }
                    return t.setScale(1), t.active = !1, t.angle = 0, t.zIndex = this.getTopZorder(), t
                } let e = g(this.headAni);
            return e.setScale(1), this.node.addChild(e, C.Enum.ZORDER_TYPE.ZORDER_5), this._headAni_arr.push(e), e.zIndex = this.getTopZorder(), e.active = !1, e
        }
        getCalmDownNode() {
            for (let e = 0; e < this.calmDown_arr.length; e++)
                if (0 == this.calmDown_arr[e].zIndex) {
                    let t = this.calmDown_arr[e];
                    return t.setScale(1), t.active = !1, t.rotation = 0, t.zIndex = this.getTopZorder(), t
                } let e = g(this.calmDown_prefab);
            return e.setScale(1), this.node.addChild(e, C.Enum.ZORDER_TYPE.ZORDER_5), this.calmDown_arr.push(e), e.zIndex = this.getTopZorder(), e.active = !1, e
        }
        getTopZorder() {
            for (let e = 0; e < this._headAni_arr.length; e++) {
                let t = this._headAni_arr[e].zIndex;
                t > 0 && (t = 0)
            }
            for (let e = 0; e < this.calmDown_arr.length; e++) {
                let t = this.calmDown_arr[e].zIndex;
                t > 0 && (t = 0)
            }
            return 1
        }
        showEffect(e, t, i, a) {
            let s = null;
            s = 6 != i ? this.getAniNode() : this.getCalmDownNode();
            let n, r;
            if (-1 == e) {
                n = this.menu_button.getPosition();
                let e = C.resMgr.createLabel(this.node, a, 24, C.resMgr.getLocalFontByName("arial"));
                e.setAnchorPoint(0, .5), e.setPosition(v2(n.x - 34, n.y + 56)), e.zIndex = C.Enum.ZORDER_TYPE.ZORDER_5, e.runAction(sequence(delayTime(2), removeSelf()))
            } else {
                let t = this.node.convertToNodeSpaceAR(this.getSeatBySeatID(e).getHeadWorldPosForFace());
                n = v2(t.x, t.y + 30)
            }
            let l = this.node.convertToNodeSpaceAR(this.getSeatBySeatID(t).getHeadWorldPosForFace());
            if (r = v2(l.x, l.y + 30), 4 == i && (r = v2(l.x, l.y)), 0 == i) {
                s.active = !0, s.scale = 1.8, s.name = i.toString(), s.getComponent(Animation).play(C.config.getStringData(C.StringTools.formatC("CocosEffect%d", i))), s.setPosition(n);
                v2(.5 * (n.x + r.x), .5 * (n.y + r.y));
                let e = 3.14159 * (240 * Math.random() - 120) / 180,
                    t = n.x + (r.x - n.x) / 4,
                    a = v2(t, 0 + n.y + Math.cos(e) * t),
                    o = n.x + (r.x - n.x) / 2,
                    l = v2(o, 0 + n.y + Math.cos(e) * o),
                    h = bezierTo(2, [a, l, r]);
                s.angle = -180 * Math.atan2(r.x - n.x, r.y - n.y) / 3.1415926;
                let d = function() {
                    this.UpdateRocketAngle(s, n, r)
                };
                this.schedule(d, 0), s.runAction(sequence(h.easing(easeInOut(.5)), callFunc(this.effectPlay, this, {
                    sp: null,
                    ani_node: s,
                    isSp: !1
                }))), C.tools.isSoundEffectOpen() && C.AudioMgr.playEffect("zh_CN/game/dzpoker/audio/daodanfeixing.mp3")
            } else if (6 == i) {
                let e = s.getComponent(Animation);
                s.setPosition(n);
                let t = find("Node_HandScale/sprite_Hand", s);
                t.setPosition(.962, -4.802), t.setRotation(0), t.opacity = 255, s.active = !0, s.name = i.toString(), s.runAction(sequence(moveTo(.3, r), callFunc((() => {
                    C.tools.isSoundEffectOpen() && C.AudioMgr.playEffect("zh_CN/game/dzpoker/audio/calmDown.mp3"), e.play(), e.on("finished", (t => {
                        e.off("finished"), s.zIndex = 0, s.active = !1
                    }))
                }), this)))
            } else {
                C.tools.isSoundEffectOpen() && C.AudioMgr.playEffect(C.StringTools.formatC("zh_CN/game/dzpoker/audio/effectVoice%d.mp3", i < 6 ? i : i - 1));
                let e = C.resMgr.getSpriteAtlasFrame("zh_CN/game/dzpoker/animation/icon/effect", C.StringTools.formatC("animation-icon-icon_fly_%d", i < 6 ? i : i - 1)),
                    t = C.resMgr.createSprite(this.node);
                if (t.getComponent(o).spriteFrame = e, t.active = !0, t.name = i.toString(), t.scale = .8, t.setPosition(n), 1 != i && 2 != i && 3 != i) t.runAction(sequence(moveTo(.3, r), callFunc(this.effectPlay, this, {
                    sp: t,
                    ani_node: s,
                    isSp: !0
                })));
                else {
                    v2(.5 * (n.x + r.x), .5 * (n.y + r.y));
                    let e = 3.14159 * (200 * Math.random() - 100) / 180,
                        i = n.x + (r.x - n.x) / 4,
                        a = v2(i, 0 + n.y + Math.cos(e) * i * 1.5),
                        o = n.x + (r.x - n.x) / 2,
                        l = v2(o, 0 + n.y + Math.cos(e) * o * 1.5),
                        h = bezierTo(1, [a, l, r]),
                        d = rotateTo(1, 720);
                    t.runAction(d), t.runAction(sequence(h.easing(easeInOut(.5)), callFunc(this.effectPlay, this, {
                        sp: t,
                        ani_node: s,
                        isSp: !0
                    })))
                }
            }
        }
        UpdateRocketAngle(e, t, i) {
            e.angle = 180 * -Math.atan2(i.x - e.getPosition().x, i.y - e.getPosition().y) / 3.1415926
        }
        effectPlay(e, t) {
            let i = t.sp,
                a = t.ani_node,
                s = t.isSp ? parseInt(i.name) : parseInt(a.name),
                n = t.isSp ? i.getPosition() : a.getPosition(),
                o = t.isSp ? i.scale : a.scale;
            s = s > 6 ? s - 1 : s;
            let r = ([40, 170, 100, 65, 170, 90, 160, 70, 70, 70, 105][s] + 10) / 60;
            0 == s && (C.tools.isSoundEffectOpen() && C.AudioMgr.playEffect("zh_CN/game/dzpoker/audio/daodanbaozha.mp3"), s = 100);
            let l = this.getAniNode();
            if (l.scale = o, s < 7 || s > 9) l.getComponent(Animation).play(C.config.getStringData(C.StringTools.formatC("CocosEffect%d", s)));
            else {
                let e = ["photo", "zhua", "eat"];
                l.getComponent(Animation).play(e[s - 7]), l.setScale(1.3)
            }
            l.setPosition(n), 4 == s && (l.setPosition(v2(l.getPosition().x - 27, l.getPosition().y)), l.setPosition(v2(l.getPosition().x, l.getPosition().y + 75))), 100 == s && l.setScale(1.3);
            l.active = !0, l.runAction(sequence(delayTime(r), callFunc((function() {
                l.active = !1, l.zIndex = 0
            }), this))), i && i.removeFromParent(), a.active = !1, a.zIndex = 0
        }
        onSendChat(e) {
            if (e.seatID != C.JackfruitManager.tRoomData.nSelfSeatID) {
                let t = this.getSeatBySeatID(e.seatID).getHeadWorldPosForFace();
                this.game.face_Panel.getComponent(S).showFaceAni(t, C.Number(e.face))
            }
        }
        onSendEmoji(e) {
            const t = this.getSeatByPlayerID(e.playerId),
                i = this.getSeatByPlayerID(C.dataHandler.getUserData().u32Uid),
                a = C.dataHandler.getUserData().u32Uid === e.playerId && cc.isValid(i);
            if (null != t) {
                const i = t.getHeadWorldPosForFace();
                this.game.emoji_Panel.getComponent(H).showEmojiAni(i, C.Number(e.type), a)
            }
        }
        onSendDynamicConfig(e) {
            void 0 !== e.magicEmojiEnable && (JackfruitManager.tRoomData.dynamicConfig.magicEmojiEnable = e.magicEmojiEnable), void 0 !== e.magicEmojiDuration && (JackfruitManager.tRoomData.dynamicConfig.magicEmojiDuration = e.magicEmojiDuration), this.setDynamicConfig()
        }
        setDynamicConfig() {
            const e = JackfruitManager.tRoomData.dynamicConfig;
            J.config.TableCountdown = e.magicEmojiDuration, J.config.Enable = e.magicEmojiEnable, this.game.emoji_Panel.getComponent(H).updateConfig()
        }
        onShowFace(e) {
            let t = this._seatList.length;
            for (let i = 0; i < t; i++) this._seatList[i].getSeatID() == e.seatID && this._seatList[i].showFace(e.face)
        }
        onSendChatNotify(e) {
            let t = g(this.jackfrunt_chat_item);
            this.specialEffects_panel.addChild(t);
            let i = t.getChildByName("chat_label"),
                a = t.getChildByName("chat_bg");
            i.getComponent(n).string = C.config.getStringData("jackfruit_chat_label_list_" + e.index);
            let s = C.resMgr.getLabelStringSize(i.getComponent(n)).width,
                o = a.getContentSize(),
                r = o(s + 110, o.height);
            a.setContentSize(r), t.setContentSize(r);
            let l = this._publicCards[0].node.getPosition().y,
                h = 150 + Math.floor(C.StringTools.randomRange(1, 100));
            l = Math.floor(C.StringTools.randomRange(1, 100)) > 50 ? l + h : l - h;
            let d = e.playerId == C.dataHandler.getUserData().u32Uid;
            i.color = d ? color(242, 113, 55) : color(221, 221, 221), t.setPosition(v2(winSize.width, l)), t.runAction(sequence(moveTo(4, v2(-r.width, l)), removeSelf()))
        }
        onUpdataDelay() {
            -1 == C.JackfruitManager.tRoomData.actionDelayCountsFee ? this.addTime_btn.active = !1 : this.addTime_text.string = C.StringTools.serverGoldToShowString(C.JackfruitManager.tRoomData.actionDelayCountsFee)
        }
        onActionDelay(e) {
            this._playEffect(this._path_add_time), this._placeCardType > 2 && this.setPlaceCardIsOKTime(this._placeCardType - 3);
            let t = e.leftSeconds;
            this.updataPlaceCardTime(t);
            let i = this.placeCardIsOK_btn.getChildByName("delay_node");
            i.active = !0;
            let a = i.getComponent(Animation);
            a.play("place_card_btn_delay"), a.hasEventListener("finished") || a.on("finished", (function() {
                i.active = !1
            }), this)
        }
        onbtnMenuClick(e) {
            C.AudioMgr.playButtonSound("button_click.mp3"), this.game.menu_Panel.active = !0, this.game.menu_Panel.getComponent(b).updateMenu()
        }
        onbtnAddTimeClick(e) {
            C.AudioMgr.playButtonSound("button_click.mp3"), C.jackfruitNet.requestActionDelay(C.dataHandler.getUserData().u32Uid)
        }
        onbtnFaceClick(e) {
            C.AudioMgr.playButtonSound("button_click.mp3"), this.game.face_Panel.getComponent(S).showUi()
        }
        onbtnFullscreenEmojiClick(e) {
            C.AudioMgr.playButtonSound("button_click.mp3"), this.game.emoji_Panel.getComponent(H).showUi()
        }
        onBtnPlaceCardIsOK(e) {
            if (!this._isPlaceCardOver) return;
            this._selectCard = null, this.select_card_img.active = !1, this.onRequestPlaceCard(!0), this.addTime_btn.active = !1, this._playEffect(this._path_determine), this.placeCardIsOK_btn.stopAllActions(), this.placeCardIsOK_btn.setScale(v2(1, 1));
            let t = callFunc((() => {
                this.placeCardIsOK_progressBar.progress = 1, this.setPlaceCardIsOKTime(2)
            }), this);
            this._playEffect(this._path_place_card_ok), this.placeCardIsOK_btn.runAction(sequence(scaleTo(.1, 1, .01), t, scaleTo(.3, 1, 1)))
        }
        onBtnShowShop() {
            C.AudioMgr.playButtonSound("button_click.mp3"), C.worldNet.requestGetUserData(), C.SHOP.RechargeClick(!0)
        }
        onBtnBack(e) {
            C.AudioMgr.playButtonSound("button_click.mp3"), this.stopTimeUpdate(Za.Ready), this.game.menu_Panel.getComponent(b).onBtnExitPoker()
        }
        onBtnDanmu(e, t) {
            if (!C.tools.isShowBarrage()) return;
            this.danmu_btns[C.Number(t)].active = !1;
            let i = C.JackfruitManager.tRoomData.BrandBarrageInfos;
            C.AudioMgr.playButtonSound("button_click.mp3");
            let a = "",
                s = 0;
            for (let e = 0; e < i.length; e++)
                if (i[e].index == C.Number(t) + 3) {
                    i[e].type == P.LIKE ? (a += "0", i[e].hasReverse ? (a += "_1", s = 10) : (a += "_0", s = 10)) : (a += "1", i[e].hasReverse ? (a += "_1", s = 10) : (a += "_0", s = 10)), a = a + "_" + Math.floor(Math.random() * s), a = a + ";" + t + ";" + i[e].card.suit.toString() + ";" + i[e].card.number.toString();
                    break
                } if (0 != s) {
                C.jackfruitNet.requestSendBarrage(a, E.Enum_CardType);
                let e = new V.protocol.NoticeSendBarrage;
                e.content = a, e.nickname = C.dataHandler.getUserData().nick_name, e.playerid = C.Number(C.dataHandler.getUserData().user_id), e.at_list = [], C.GameDataManager.addDanmuMsg(e)
            }
        }
        onClickAuto() {
            C.AudioMgr.playButtonSound("button_click.mp3"), null == this.lostDesc && (this.lostDesc = g(this.lost_prefab), this.game.node.addChild(this.lostDesc, C.Enum.ZORDER_TYPE.ZORDER_LOADING), this.lostDesc.getComponent(T).updateView()), this.lostDesc.active = !0
        }
        onbtnCurrentClick(e) {
            C.AudioMgr.playButtonSound("button_click.mp3"), C.jackfruitNet.requestSituation(x.getInstanceRoomId(null == this ? void 0 : this.node)), this.game.currentTime_panel.active = !0
        }
        onBtnContinue(e) {
            C.AudioMgr.playButtonSound("button_click.mp3"), this._playEffect(this._path_btn_continue), C.jackfruitNet.requestReady()
        }
        onBtnGameReview(e) {
            C.AudioMgr.playButtonSound("button_click.mp3"), this.game.review_panel.active = !0, this.game.review_panel.getComponent(z).show(C.Enum.GameReviewDataType.EDST_GAMEROOM, this.getSeatByViewID(0).getSeatID())
        }
        onBtnChangeTable(e) {
            C.AudioMgr.playButtonSound("button_click.mp3"), this.change_table_btn.active = !1, C.jackfruitNet.requestChangeTable()
        }
        onPlayerReady(e) {
            let t = C.JackfruitManager.tRoomData.GetTablePlayer(e),
                i = this.getSeatBySeatID(t.seatId);
            e == C.dataHandler.getUserData().u32Uid ? (this._isReady = !0, this.game_end_panel.active = !1, this._resetGame(!0)) : 0 == i.getSeatViewID() && -1 == C.JackfruitManager.tRoomData.nSelfSeatID && this._resetGame(!0);
            let a = !0,
                s = C.JackfruitManager.tRoomData.kTablePlayerList;
            for (let e = 0; e < s.length; e++) {
                if (s[e].state == D.SClickReady) {
                    a = !1;
                    break
                }
            }
            a ? this.stopTimeUpdate(Za.Ready) : e == C.dataHandler.getUserData().u32Uid && (this.waitReady_panel.active = !0, this.waitReady_progressBar.progress = 1), 2 == s.length ? i.updateSeatStatus(k.SeatStatus_ready) : i.updateSeatStatus(k.SeatStatus_waiting_bubble)
        }
        gotoHallScene() {
            const e = C.viewAdaptive.enterHallJumpToIndex == j.DepositScene;
            C.viewAdaptive.enterHallJumpToIndex = j.None, C.roomManager.closeGame(x.getInstanceGameId(null == this ? void 0 : this.node), x.getInstanceRoomId(null == this ? void 0 : this.node), C.Enum.SCENE.HALL_SCENE, !1, (t => {
                e && C.MessageCenter.send("switchSceneToEarnView", j.DepositScene)
            }))
        }
        setRoomCurState(e) {
            C.JackfruitManager.tRoomData.curState = e, this.game.menu_Panel.getComponent(b).updateMenu()
        }
        updateLabaNum(e = !0) {
            C.appConfig.getGameConfig().labaEnabled && (e = 0 != e, this.labaBtnNode || (this.labaBtnNode = g(this.labaBtn_prefab), this.aof_lost_btn.addChild(this.labaBtnNode), this.labaBtnNode.on("click", (() => {
                this.onClickAuto()
            }), this)), this.labaBtnNode.getComponent(F).updateLabaNum(e), null != this.lostDesc && this.lostDesc.getComponent(T).updateView())
        }
        onTurntableResultNotice(e) {
            x.isInvalidRoomMultiWindow(e.gameData, null == this ? void 0 : this.node) || this.turntableResultNotice(e.puf)
        }
        turntableResultNotice(e) {
            let t = this.getSeatByPlayerID(e.uid);
            if (null != t) {
                let i = t.node.getParent().convertToWorldSpace(t.node.getPosition());
                this.luckLayer.showGoldMoveAction(i, e.currency_type)
            }
        }
        onWaitingOtherPlayer() {
            let e = delayTime(4.5),
                t = callFunc(this._resetGame.bind(this)),
                i = sequence(e, t);
            i.setTag(this.WAITING_OTHER_PLAYER_NOTIFY_TAG), this.node.runAction(i)
        }
        onShowChangeTableBtn() {
            this.change_table_btn.active = !0
        }
        onTotalSettle(e) {
            this.showTotalResult(e.settleAmount)
        }
        onPlayerInfoSync(e) {
            let t = e.playerList;
            for (let e = 0; e < t.length; e++) {
                let i = t[e];
                this.getSeatBySeatID(i.seatId).setStake(i.score)
            }
        }
        onUpdataStartMatch(e) {
            if (this.start_match_panel.active = e, e) {
                this.start_match_panel.getComponent(Animation).play("start_match")
            }
        }
        onBrandBarrage() {
            if (!C.tools.isShowBarrage()) return;
            let e = C.JackfruitManager.tRoomData.BrandBarrageInfos;
            for (let t = 0; t < e.length; t++) {
                let i = this.danmu_btns[e[t].index - 3];
                i.active = !0;
                let a = e[t].type == P.LIKE ? "icon_happy" : "icon_angry";
                C.resMgr.setSpriteFrame(find("icon", i), "zh_CN/game/jackfruit/ui/" + a)
            }
        }
        onShowLuckButton(e) {
            x.isInvalidRoomMultiWindow(e.gameData, null == this ? void 0 : this.node) || this.showLuckButton()
        }
        showLuckButton() {
            null == this.luckLayer && (this.luckLayer = g(this.luckButton_prefab).getComponent(I), this.redEnvelope_btn.addChild(this.luckLayer.node), this.luckLayer.node.setPosition(0, 0)), C.dataHandler.getUserData().isShowLuckTurntables ? (this.redEnvelope_btn.active = !0, this.luckLayer.updateView(!0)) : this.redEnvelope_btn.active = !1
        }
        onUpdataBGM() {
            C.tools.isPlayMusic() ? C.AudioMgr.playMusic(this._path_Bgm, !0, .2) : C.AudioMgr.stopMusic()
        }
        showJackPotNumPanel() {
            if (this.game.jackpot_number_panel.active = !0, 0 == this._JackPotNumberList.length) {
                let e = this.game.jackpot_number_panel.getChildByName("jackpot_img_node"),
                    t = e.getContentSize();
                e.removeAllChildren();
                for (let i = 0; i < 7; i++) {
                    let a = g(this.jack_number);
                    a.setPosition(-t.width / 2 + 12 + 31 * i, -t.height / 2), e.addChild(a), a.active = !0;
                    let s = a.getComponent(y);
                    s.init(), this._JackPotNumberList.push(s)
                }
            }
            this.updateJackpotNumEvent()
        }
        updateJackpotNumEvent() {
            if (-1 == C.JackfruitManager.tRoomData.jackpotLeftAmount) return;
            let e = C.JackfruitManager.tRoomData.jackpotLeftAmount,
                t = Math.round(C.StringTools.serverGoldToShowNumber(e));
            this.updateJackpotNum(t.toString())
        }
        updateJackpotNum(e) {
            let t = e.length,
                i = C.StringTools.getArrayLength(this._JackPotNumberList);
            for (let a = 0; a < i; ++a) a < t ? (this._JackPotNumberList[i - a - 1].showNum(Number(e[t - a - 1]), .1), e.substr(1, 2)) : this._JackPotNumberList[i - a - 1].showNum(0, .1)
        }
        showhitjackPotCardType(e) {
            let t = C.JackfruitManager.tRoomData.noticeJackPotAwardInfo;
            this._jackpotInfos.push(t), this.showjackPotAction()
        }
        showjackPotAction() {
            if (0 == this._jackpotInfos.length || null != this._jackPotHitCardType) return;
            let e = this._jackpotInfos[0];
            if (C.JackfruitManager.tRoomData.GetTablePlayer(e.award_playid)) {
                this._jackPotHitCardType = g(this.jack_action), this.node.addChild(this._jackPotHitCardType);
                let t = find("action_panel/label_Content", this._jackPotHitCardType),
                    i = find("action_panel/sprite_Bar/label_WinValue", this._jackPotHitCardType),
                    a = e.award_player_name,
                    s = C.config.getStringData(`M_UITitle${112+e.hand_level}`),
                    o = C.config.getStringData("UIJackpotHitCardPlayer") + "\n" + C.config.getStringData("UIJackpotHitCardType");
                t.getComponent(n).string = C.StringTools.formatC(o, a, s), i.getComponent(n).string = C.StringTools.serverGoldToShowString(e.award_amount);
                let r = find("action_panel", this._jackPotHitCardType).getComponent(Animation);
                r.hasEventListener("finished") || r.on("finished", (function() {
                    null != this._jackPotHitCardType && (this._jackpotInfos.splice(0, 1), this._jackPotHitCardType.removeFromParent(), this._jackPotHitCardType = null, this.showjackPotAction())
                }), this), r.play("JackpotBigWin"), this.game.sendNetJackPot()
            }
        }
        record() {
            if (C.appConfig.getGameConfig().audioChatEnabled)
                if (this.gameDataInstance.tRoomData.m_bIsCancelVoice = !1, sys.isBrowser) {
                    if (C.config.GET_CLIENT_TYPE() == C.Enum.ClientType.H5WebPage) {
                        let e = '{"cmd": "1007", "op":0}';
                        C.native.SYwebjsToClient(e), this._bTouchStop = !1
                    }
                } else if (sys.os == sys.OS_IOS) console.log("DoStartRecord==="), C.native.DoStartRecord(), this.startShowRecord();
            else if (sys.os == sys.OS_ANDROID) {
                if (C.config.getCurrentScene() == C.Enum.SCENE.JACKFRUIT_SCENE && C.AudioMgr.stopMusic(), !C.native.DoStartRecord()) return void(this._androidRecord = !1);
                this._androidRecord = !0, this.startShowRecord()
            }
        }
        onbtnRecordClick(e) {
            if (console.log("click Record event type===" + e.type), C.appConfig.getGameConfig().audioChatEnabled && 0 != this.record_button.getComponent(Button).interactable)
                if (e.type == s.EventType.TOUCH_START) {
                    let e = callFunc(this.record.bind(this), this),
                        t = delayTime(.3);
                    this.record_button.runAction(sequence(t, e))
                } else if (e.type == s.EventType.TOUCH_END) {
                if (this.record_button.getNumberOfRunningActions() > 0) return void this.record_button.stopAllActions();
                if (this.gameDataInstance.tRoomData.m_bIsCancelVoice = !1, sys.isBrowser) {
                    if (C.config.GET_CLIENT_TYPE() == C.Enum.ClientType.H5WebPage) {
                        this._bTouchStop = !0;
                        let e = '{"cmd": "1007", "op":1}';
                        C.native.SYwebjsToClient(e)
                    }
                } else if (sys.os == sys.OS_IOS) C.native.DoStopRecord(), this.recordSuccess();
                else if (sys.os == sys.OS_ANDROID) {
                    if (C.native.DoStopRecord(), !this._androidRecord) return;
                    this.recordSuccess()
                }
            } else if (e.type == s.EventType.TOUCH_CANCEL) {
                if (this.record_button.getNumberOfRunningActions() > 0) return void this.record_button.stopAllActions();
                this.cancelRecord(), C.MessageCenter.send("updataBGM")
            }
        }
        recordSuccess() {
            this.game.recordComplete_img.node.active = !0, this.game.recording_img.node.active = !1, this.unschedule(this.updateRecord);
            let e = callFunc((() => {
                this.game.voice_panel.active = !1
            }), this);
            this.game.voice_panel.runAction(e)
        }
        cancelRecord() {
            if (C.appConfig.getGameConfig().audioChatEnabled && (sys.os != sys.OS_ANDROID || sys.isBrowser || this._androidRecord))
                if (this.game.voice_panel.active = !1, this.unschedule(this.updateRecord), this.gameDataInstance.tRoomData.m_bIsCancelVoice = !0, sys.isBrowser) {
                    if (C.config.GET_CLIENT_TYPE() == C.Enum.ClientType.H5WebPage) {
                        this._bTouchStop = !0;
                        let e = '{"cmd": "1007", "op":1}';
                        C.native.SYwebjsToClient(e)
                    }
                } else sys.os == sys.OS_IOS && C.native.DoStopRecord(), sys.os == sys.OS_ANDROID && C.native.DoStopRecord()
        }
        startShowRecord() {
            this.game.voice_panel.stopAllActions(), this.game.voice_panel.active = !0, this.game.recordComplete_img.node.active = !1, this.game.recording_img.node.active = !0, this._recordTime = 10, this.game.recording_img.node.getChildByName("cdTime_text").getComponent(n).string = "" + this._recordTime, this.schedule(this.updateRecord, 1)
        }
        updateRecord(e) {
            if (0 == this._recordTime) return sys.os == sys.OS_IOS || (sys.os, sys.OS_ANDROID), void this.recordSuccess();
            this._recordTime -= 1, this.game.recording_img.node.getChildByName("cdTime_text").getComponent(n).string = "" + this._recordTime
        }
        setRecordEnabled(e) {
            this.record_button.active && (this.record_button.getComponent(Button).interactable = e, this.cancelRecord(), e ? C.resMgr.setSpriteFrame(this.record_button_img, "zh_CN/game/dzpoker/ui/submenu/submenu＿mic_on") : C.resMgr.setSpriteFrame(this.record_button_img, "zh_CN/game/dzpoker/ui/submenu/submenu＿mic_off"))
        }
        onVoiceRecordCountDown(e) {
            this.game.voice_panel.active = !0, find("recording_img/cdTime_text", this.game.voice_panel).getComponent(n).string = "" + e
        }
        onVoiceRecordFinish(e) {
            this.game.voice_panel.active = !1, console.log("onVoiceRecordFinish:" + this._recordTime), this.onUpdataBGM(), this._recordTime <= 9 ? (console.log("onVoiceRecordFinish:00  " + this.gameDataInstance.tRoomData.m_bIsCancelVoice), this.gameDataInstance.tRoomData.m_bIsCancelVoice || (cc.sys.isBrowser && C.config.GET_CLIENT_TYPE() == C.Enum.ClientType.H5WebPage ? C.httpHandler.UploadVoiceFile_Sy(e) : (console.log("onVoiceRecordFinish:1111  "), C.httpHandler.UploadVoiceFile()))) : C.MessageCenter.send("on_voice_record_too_short")
        }
        OnVoiceRecordTooShort() {
            this.record_button.active = !0, this.record_button.getComponent(Button).interactable = !0, C.TT.showMsg(C.config.getStringData("ErrorToast24"), C.Enum.ToastType.ToastTypeError)
        }
        OnUploadVoiceDone() {
            this.setRecordEnabled(!0)
        }
        OnVoiceShowMiPhoneTips() {
            C.TT.showMsg(C.config.getStringData("MicPhoneToast2"), C.Enum.ToastType.ToastTypeError)
        }
        onPlayVoice(e) {
            sys.os == sys.OS_IOS && "ios_self" == e.kSender && (e.u32SeatId = JackfruitManager.tRoomData.nSelfSeatID);
            let t = this.getSeatBySeverId(e.u32SeatId);
            t && t.speak(e.f32Time)
        }
        onSyStartRecord(e) {
            let t = e.ret;
            e.op;
            0 == t && (0 == this._bTouchStop ? this.startShowRecord() : C.TT.showMsg(C.config.getStringData("ErrorToast24"), C.Enum.ToastType.ToastTypeError))
        }
        onSyStopRecord(e) {
            let t = e.ret,
                i = e.file_base64;
            0 == t && (this.recordSuccess(), this.onVoiceRecordFinish(i)), this._bTouchStop = !1
        }
        onSyCancelRecord(e) {
            this._bTouchStop = !1
        }
        getSeatBySeverId(e) {
            let t = this._seatList.length;
            for (let i = 0; i < t; i++)
                if (this._seatList[i].getSeatID() == e) return this._seatList[i];
            return null
        }
        showObRoleInfo(e) {
            x.isInvalidRoomMultiWindow(e, null == this ? void 0 : this.node) || (O.setCircleSprite(cc.find("root/head_panel/headNode", this.face_node), this.gameDataInstance.tRoomData.obPlayer.headPath, this.gameDataInstance.tRoomData.obPlayer.plat, !1), O.setBigCircleSprite(cc.find("headNode", this.bighead_node), this.gameDataInstance.tRoomData.obPlayer.headPath, this.gameDataInstance.tRoomData.obPlayer.plat, !1, 0), this.face_node.getComponent(L).setUidAndName(this.gameDataInstance.tRoomData.obPlayer.playerid, this.gameDataInstance.tRoomData.obPlayer.name), this.face_node.active = !0, C.httpHandler.requestJFData(this.gameDataInstance.tRoomData.obPlayer.playerid, JackfruitManager.tRoomData.param.ante), this.face_node.stopAllActions(), this.face_node.scale = .2, this.face_node.runAction(scaleTo(.2, 1)), this.face_node.getComponent(L).showob())
        }
        getSeatByUid(e) {
            let t = null;
            for (let i = 0; i < this._seatList.length; ++i)
                if (null != this._seatList[i]._playerInfo && this._seatList[i]._playerInfo.playerId == e) {
                    t = this._seatList[i];
                    break
                } return t
        }
        onNotDisturb(e) {
            let t = this.getSeatByUid(e.whoId);
            t && t.showHeadBlock(1 == e.operate)
        }
    }).prototype, "logo_node", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yt = t(Kt.prototype, "logo_img", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Zt = t(Kt.prototype, "game_name_label", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xt = t(Kt.prototype, "guide_panel", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $t = t(Kt.prototype, "chat_panel", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qt = t(Kt.prototype, "specialEffects_panel", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ei = t(Kt.prototype, "specialEffects_mask_panel", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ti = t(Kt.prototype, "mask_panel", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ii = t(Kt.prototype, "card_panel", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ai = t(Kt.prototype, "public_card_panel", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), si = t(Kt.prototype, "seat_panel", [ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ni = t(Kt.prototype, "allReview_button", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oi = t(Kt.prototype, "otherTableCardBgs", [se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ri = t(Kt.prototype, "otherMultipleImages", [ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), li = t(Kt.prototype, "selfTableCardBgs", [oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), hi = t(Kt.prototype, "selfMultipleImages", [re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), di = t(Kt.prototype, "otherCardTypeNode", [le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ci = t(Kt.prototype, "selfCardTypeNode", [he], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), _i = t(Kt.prototype, "face_button", [de], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ui = t(Kt.prototype, "redEnvelope_btn", [ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gi = t(Kt.prototype, "shop_button", [_e], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pi = t(Kt.prototype, "modal_panel", [ue], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fi = t(Kt.prototype, "damon_img", [ge], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mi = t(Kt.prototype, "addTime_btn", [pe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ci = t(Kt.prototype, "addTime_text", [fe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bi = t(Kt.prototype, "wait_node", [me], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), yi = t(Kt.prototype, "game_bg", [Ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Si = t(Kt.prototype, "change_table_btn", [be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ti = t(Kt.prototype, "select_card_img", [ye], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wi = t(Kt.prototype, "other_fold_card_panel", [Se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vi = t(Kt.prototype, "other_fold_card", [Te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ii = t(Kt.prototype, "danmu_btns", [we], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ki = t(Kt.prototype, "guide_bg", [ve], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Bi = t(Kt.prototype, "exchange_node", [Ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Di = t(Kt.prototype, "exchange_label", [ke], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mi = t(Kt.prototype, "aboutToStart_panel", [Be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ai = t(Kt.prototype, "aboutToStart_progressBar", [De], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pi = t(Kt.prototype, "aboutToStart_label", [Me], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ei = t(Kt.prototype, "aboutToStart_img", [Ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ni = t(Kt.prototype, "waitReady_panel", [Pe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ri = t(Kt.prototype, "waitReady_progressBar", [Ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zi = t(Kt.prototype, "waitReady_label", [Ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Oi = t(Kt.prototype, "waitReady_img", [Re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Li = t(Kt.prototype, "placeCardIsOK_btn", [ze], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Fi = t(Kt.prototype, "placeCardIsOK_progressBar", [Oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ji = t(Kt.prototype, "placeCardIsOK_time_label", [Le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xi = t(Kt.prototype, "placeCardIsOK_label", [Fe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gi = t(Kt.prototype, "placeCardIsOK_delay_label", [je], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Hi = t(Kt.prototype, "game_end_panel", [xe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ji = t(Kt.prototype, "back_btn", [Ge], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ui = t(Kt.prototype, "continue_btn", [He], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vi = t(Kt.prototype, "menu_button", [Je], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Wi = t(Kt.prototype, "upper_limit_panel", [Ue], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ki = t(Kt.prototype, "upper_limit_label", [Ve], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qi = t(Kt.prototype, "upper_limit_richtext", [We], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yi = t(Kt.prototype, "start_match_panel", [Ke], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Zi = t(Kt.prototype, "seat", [qe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xi = t(Kt.prototype, "card", [Ye], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $i = t(Kt.prototype, "jackfrunt_chat_item", [Ze], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qi = t(Kt.prototype, "chat", [Xe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ea = t(Kt.prototype, "face", [$e], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ta = t(Kt.prototype, "bighead", [Qe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ia = t(Kt.prototype, "headAni", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), aa = t(Kt.prototype, "calmDown_prefab", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), sa = t(Kt.prototype, "luckButton_prefab", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), na = t(Kt.prototype, "lost_prefab", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oa = t(Kt.prototype, "aof_lost_btn", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ra = t(Kt.prototype, "labaBtn_prefab", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), la = t(Kt.prototype, "start_action_ball_1", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ha = t(Kt.prototype, "start_action_ball_2", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), da = t(Kt.prototype, "start_action_light", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ca = t(Kt.prototype, "card_action_drop", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _a = t(Kt.prototype, "card_bg_action_back", [dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ua = t(Kt.prototype, "card_bg_action_face", [ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ga = t(Kt.prototype, "card_action_huo", [_t], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pa = t(Kt.prototype, "card_action_big", [ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fa = t(Kt.prototype, "card_type_jiafen1", [gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ma = t(Kt.prototype, "card_type_jiafen2", [pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ca = t(Kt.prototype, "all_victory_feipai_1", [ft], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ba = t(Kt.prototype, "all_victory_feipai_2", [mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ya = t(Kt.prototype, "all_victory", [Ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Sa = t(Kt.prototype, "all_failed", [bt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ta = t(Kt.prototype, "you_win", [yt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wa = t(Kt.prototype, "repeat_win", [St], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), va = t(Kt.prototype, "big_card", [Tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ia = t(Kt.prototype, "total_result", [wt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ka = t(Kt.prototype, "jack_number", [vt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ba = t(Kt.prototype, "jack_action", [It], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Da = t(Kt.prototype, "buyin", [kt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ma = t(Kt.prototype, "all_score_label", [Bt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Aa = t(Kt.prototype, "all_victory_img", [Dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pa = t(Kt.prototype, "all_lose_number", [Mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ea = t(Kt.prototype, "all_win_number", [At], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Na = t(Kt.prototype, "all_level_number", [Pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ra = t(Kt.prototype, "cardtype_win_fnt_8", [Et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), za = t(Kt.prototype, "cardtype_win_fnt_9", [Nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Oa = t(Kt.prototype, "cardtype_win_fnt_10", [Rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), La = t(Kt.prototype, "settle_lose_number", [zt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Fa = t(Kt.prototype, "settle_win_number", [Ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ja = t(Kt.prototype, "single_lose_number", [Lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xa = t(Kt.prototype, "single_win_number", [Ft], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ga = t(Kt.prototype, "victory_number", [jt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ha = t(Kt.prototype, "total_result_win", [xt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ja = t(Kt.prototype, "total_result_lose", [Gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ua = t(Kt.prototype, "record_button_img", [Ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Va = t(Kt.prototype, "record_button", [Jt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Wa = t(Kt.prototype, "gameSceneInstance", [Ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ka = t(Kt.prototype, "gameDataInstance", [Vt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Wt = Kt)) || Wt));
    a._RF.pop()
}