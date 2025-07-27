import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as x from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as D from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as v from "./cc.js";
import * as k from "./cc.js";
import * as T from "./cc.js";
import * as y from "./cc.js";
import * as N from "./cv.js";
import * as I from "./RoomData.js";
import * as B from "./CircleSprite.js";
import * as P from "./FaceItem.js";
import * as w from "./FaceView.js";
import * as U from "./FaceBarrage.js";
import * as R from "./GameSceneInstance.js";
import * as E from "./GameSceneInstance.js";

function main() {
    var H, z, M, O, A, L, F, G, W, V, X, q, j, Y, Z, J, K, Q, $, tt, et, it, nt, at, st, ot, _t, rt, ht, lt, gt, dt, pt, ut, ct, mt, bt, Ct;
    n._RF.push({}, "b9ec9YTYbhFz5vapYQ2OIH+", "StarPrivateInfo", void 0);
    const {
        ccclass: ft,
        property: yt
    } = h;
    t("default", (H = yt(a), z = yt(s), M = yt(s), O = yt(o), A = yt(_), L = yt(s), F = yt(s), G = yt(s), W = yt(r), V = E(), X = E("GameDataInstance"), q = yt(s), j = yt(s), Y = yt(o), Z = yt(o), J = yt(o), K = yt(o), Q = yt(s), ft((et = e((tt = class t extends l {
        constructor(...t) {
            super(...t), i(this, "faceItem", et, this), i(this, "roleName_text", it, this), i(this, "userID_panel", nt, this), i(this, "userID_text", at, this), i(this, "giftPrice", st, this), i(this, "root", ot, this), i(this, "other_panel", _t, this), i(this, "remark_panel", rt, this), this._roleImg_Img = null, this._gender_img = null, this._remark_text = null, this._local_text = null, this._voice_img = null, this._recond_button = null, this._playback_text = null, this._block_button = null, this._like_button = null, this._like_label = null, this._like_img = null, this._other_like_text = null, this._at_button = null, this._at_img = null, this._at_text = null, this._like_node = null, this._self_like_text = null, this._friend_des_btn = null, this._friend_des_sp = null, this._friend_des_txt = null, this._friend_node = null, this._friend_sp = null, this._friend_num = null, this._friend_text = null, this.signInput_text = null, this._remark_button = null, this._remarkbtn_panel = null, this.all_panel = null, this._other_info_panel = null, this.menu_button = null, this.menu_text = null, this.menu_icon = null, this.menu_arrow = null, this.sure_button = null, this.cancle_button = null, this._total_text = null, this._ruchi_text = null, this._totalPoker_text = null, this._ruchiWin_text = null, this._shoushu_text = null, this._other_total_text = null, this._other_ruchi_text = null, this._other_totalPoker_text = null, this._other_ruchiWin_text = null, this._other_shoushu_text = null, this._vip_panel = null, this._panelbg = null, this._signInput_text = null, this._vipDataInfo_Panel = null, this._jiJin_text = null, this._fanPaiLv_text = null, this._3bet_text = null, this._vpip_text = null, this._pfr_text = null, this._cbet_text = null, this._jiJin_img = null, this._fanPaiLv_img = null, this._tanPaiLv_img = null, this._jiaZhu_img = null, this._touMangLv_img = null, this._fanBei_img = null, this._tanPaiWin_img = null, this._chiXuXiaZhu_img = null, this._nothing_panel = null, this._selfInfo_panel = null, this._totalFight_text = null, this._totalBring_text = null, this._avarge_text = null, this._avargebring_text = null, this._big_text = null, this._fight_text = null, this._houseOwer_Panel = null, this._face_bg = null, this._kickOut_button = null, this.ng_Button = null, this._prohibit_sitdown_button = null, this._authentication_button = null, this._face_panel = null, this._faceTouch_panel = null, this._faceMoudle_panel = null, this.face_over_img = null, this._allin_panel = null, this._allin_label = null, this.buttonList = [], this.kickX = 0, this.prohibitX = 0, this.u32CurrentUid = 0, this.opcityNum = 0, this.remark_click_type = 0, this.m_i32CurrPlayVoiceId = 0, this.m_pkTempHead = null, this._shade = null, this.canSendFace = !0, this.speakingVoice = !1, this.BG_H_self = 1013, this.BG_H_other = 1200, this.BG_H_other_star = 1230, this.BG_H_self_star = 1260, this.HouseBg_H = 130, this.housePanel_pos = null, this._interaction_panel = null, this._signature_panel = null, this._signature_button = null, this._signature_editbox = null, this._signature_text = null, this._signature_sure_button = null, this._countdown_text = null, this._countdown_sp = null, this._countdown_bg = null, this._certification_sp = null, this._cn_des_sp = null, this._cn_des_txt = null, this._live_buttton = null, this._otherPos = null, this._player = null, this._obplayer = null, this._enterType = 0, this._disturb = 2, this._liveStatus = 0, this._signature_text_uiTransform = null, this._signature_text_uiRenderer = null, this._signature_text_uiOpacity = null, this._panelbg_uiTransform = null, this.hasCreateFaceItem = !1, this._star_node = null, i(this, "btnSwitch", ht, this), this._mic_panel = null, this._mic_txt = null, this._editbox_state = 0, this._isAuthVerify = !1, this._BakSignalString = null, this._timeIDs = [], i(this, "gameSceneInstance", lt, this), i(this, "gameDataInstance", gt, this), this._isInit = !1, i(this, "playerStats_panel", dt, this), i(this, "playerStats_userAvatar", pt, this), i(this, "playerStats_levelHands", ut, this), i(this, "playerStats_totalHands", ct, this), i(this, "playerStats_vpip", mt, this), i(this, "playerStats_PFR", bt, this), i(this, "playerStats_closeButton", Ct, this), this._currentUserData = null
        }
        onLoad() {
            this._panelbg = this.root.getChildByName("panelbg"), this._signature_panel = this._panelbg.getChildByName("signature_panel"), this._signature_text = this._signature_panel.getChildByName("signature_text"), this._signature_text_uiTransform = this._signature_text.getComponent(g), this._signature_text_uiRenderer = this._signature_text.getComponent(d), this._signature_text_uiOpacity = this._signature_text.getComponent(p), this._panelbg_uiTransform = this._panelbg.getComponent(g), this.hasCreateFaceItem = !1, this.adaptWidget(this.node, !0), this._shade = N.action.createShieldLayer(this.node, "shieldLayer-starPrivateInfo", N.Enum.ZORDER_TYPE.ZORDER_6, u.BLACK, 0, (t => {
                t.propagationStopped = !0, this.node.active = !1, this._shade.active = !1
            })), this._shade.setSiblingIndex(0), this.getStarNode(), this._mic_panel = this._star_node.getChildByName("mic_panel"), this._mic_txt = this._mic_panel.getChildByName("mic_txt"), this._mic_txt.getComponent(o).string = N.config.getStringData("Star_open_mic"), this._mic_panel.active = !1, this.getInteractionPanel(), this._signature_button = this._signature_panel.getChildByName("signature_button"), this._signature_editbox = this._signature_panel.getChildByName("editbox"), this._signature_editbox.getComponent(c).placeholder = N.config.getStringData("Star_input_signature"), this._signature_sure_button = this._signature_panel.getChildByName("signature_sure_button"), this._signature_editbox.active = !1, this._signature_sure_button.active = !1, this._signature_panel.on(s.EventType.TOUCH_END, this.closeSign, this), this._signature_button.on(s.EventType.TOUCH_END, this.closeSign, this), this._panelbg.getChildByName("zhezhao_panel").active = !1, this._signature_sure_button.on("click", (function() {
                let t = this._signature_editbox.getComponent(c).string,
                    e = null,
                    i = null,
                    n = N.dataHandler.getUserData().mark_edit_state;
                1 != n ? 2 != n ? (t == N.config.getStringData("Star_signature") || N.StringTools.isClubNameFormat(t) ? N.StringTools.isSensitiveWords(t) && (e = "tips_no_sensitive_words", i = "ToastTypeWarning", N.worldNet.UpdateUserMarksRequest("", 1)) : (e = "tips_no_special_words", i = "ToastTypeWarning"), null == e ? (this._signature_editbox.getComponent(c).string.trim().length, N.worldNet.UpdateUserMarksRequest(this._signature_editbox.getComponent(c).string)) : N.TT.showMsg(N.config.getStringData(e), i)) : N.TT.showMsg(N.config.getStringData("signature_sensitive_tip"), N.Enum.ToastType.ToastTypeError) : N.TT.showMsg(N.config.getStringData("signature_limit_tip"), N.Enum.ToastType.ToastTypeError)
            }), this), this._shade.active = !1, this.btnSwitch.node.on(r.EventType.CLICK, this._onMicSwitch, this), this.opcityNum = 300, this.remark_click_type = 0, this.speakingVoice = !1, this.getLikeNodes(), this._friend_node = this._panelbg.getChildByName("friend_node"), this._friend_sp = this._friend_node.getChildByName("friend_sp"), this._friend_des_btn = this._friend_node.getChildByName("des_btn"), this._friend_des_sp = this.root.getChildByName("des_sp"), this._friend_des_txt = this._friend_des_sp.getChildByName("des_txt"), this._panelbg.getChildByName("zhezhao_panel").on(s.EventType.TOUCH_END, (t => {
                this._friend_des_sp.active = !1, this._cn_des_sp.active = !1, this._panelbg.getChildByName("zhezhao_panel").active = !1, t.propagationStopped = !0
            }), this), this._friend_des_btn.on(s.EventType.TOUCH_END, (t => {
                N.AudioMgr.playButtonSound("tab"), this._cn_des_sp.active = !1, this._friend_des_sp.active ? (this._friend_des_sp.active = !1, this._panelbg.getChildByName("zhezhao_panel").active = !1) : (this._friend_des_sp.active = !0, this._friend_des_txt.getComponent(o).string = N.config.getStringData("Star_friend_degree"), this._panelbg.getChildByName("zhezhao_panel").active = !0)
            }), this), this._friend_num = this._friend_node.getChildByName("friend_num"), this._friend_text = this._friend_node.getChildByName("friend_text"), this.setLikeNodeActive(!1), this._friend_node.active = !1, this.initGenderObject(), this._local_text = this.root.getChildByName("local_text"), this._local_text.active = !1, this.initButtons(), this._at_button = this._interaction_panel.getChildByName("at_button"), this._at_img = this._at_button.getChildByName("Background"), this._at_text = this._at_button.getChildByName("Label"), this._countdown_text = this._panelbg.getChildByName("countdown_text"), this._countdown_sp = this._panelbg.getChildByName("countdown_sp"), this._countdown_bg = this._panelbg.getChildByName("countdown_bg"), this._certification_sp = this._panelbg.getChildByName("certification_sp"), this._cn_des_sp = this._certification_sp.getChildByName("cn_des_sp"), this._cn_des_txt = this._cn_des_sp.getChildByName("cn_des_txt"), this._cn_des_sp.active = !1, this._certification_sp.on(s.EventType.TOUCH_END, (t => {
                this._friend_des_sp.active = !1, this._cn_des_sp.active ? (this._cn_des_sp.active = !1, this._panelbg.getChildByName("zhezhao_panel").active = !1) : (N.config.getCurrentLanguage() === N.Enum.LANGUAGE_TYPE.zh_CN || N.config.getCurrentLanguage() === N.Enum.LANGUAGE_TYPE.zh_TW ? this._cn_des_txt.getComponent(g).setContentSize(390, 64) : this._cn_des_txt.getComponent(g).setContentSize(370, 64), this._cn_des_sp.active = !0, this._isAuthVerify ? (this._cn_des_txt.getComponent(o).string = N.config.getStringData("Star_certification_pass"), this._cn_des_sp.getComponent(g).setContentSize(440, 80), this._cn_des_txt.setPosition(220, this._cn_des_txt.getPosition().y), this._cn_des_txt.getComponent(d).color = (new u).fromHEX("#E9E1D1")) : (this._cn_des_txt.getComponent(o).string = N.config.getStringData("Star_certification_not_pass"), this._cn_des_sp.getComponent(g).setContentSize(400, 80), this._cn_des_txt.setPosition(200, this._cn_des_txt.getPosition().y), this._cn_des_txt.getComponent(d).color = (new u).fromHEX("#FF4D4D")), this._panelbg.getChildByName("zhezhao_panel").active = !0, this._cn_des_txt.getComponent(o).horizontalAlign = o.HorizontalAlign.CENTER), t.propagationStopped = !0
            })), this._live_buttton = this._panelbg.getChildByName("live_btn"), this._countdown_text.active = !1, this._countdown_sp.active = !1, this._countdown_bg.active = !1, this._at_button.on("click", (t => {
                this.node.active = !1, this._shade.active = !1, this._cn_des_sp.active = !1, this._friend_des_sp.active = !1;
                const e = this.gameSceneInstance.gameNode;
                e.getChildByName("curentTime").active = !1;
                const i = R.getInstanceGameId(null == this ? void 0 : this.node);
                i == N.Enum.GameId.StarSeat ? e.getChildByName("Scene").getChildByName("facepanel").getComponent(U).showUi() : e.getChildByName("Scene").getChildByName("facepanel").getComponent(w).showUi(), 0 == this._enterType ? i == N.Enum.GameId.StarSeat ? (e.getChildByName("Scene").getChildByName("facepanel").getComponent(U).onclickRoleHead(this._player.playerid, !0), e.getChildByName("Scene").getChildByName("facepanel").getComponent(U).onselect(this._player.playerid)) : (e.getChildByName("Scene").getChildByName("facepanel").getComponent(w).onclickRoleHead(this._player.playerid, !0), e.getChildByName("Scene").getChildByName("facepanel").getComponent(w).onselect(this._player.playerid)) : 1 == this._enterType && (i == N.Enum.GameId.StarSeat ? (e.getChildByName("Scene").getChildByName("facepanel").getComponent(U).onclickRoleHead(this._obplayer.playerid, !0), e.getChildByName("Scene").getChildByName("facepanel").getComponent(U).onselect(this._obplayer.playerid)) : (e.getChildByName("Scene").getChildByName("facepanel").getComponent(w).onclickRoleHead(this._obplayer.playerid, !0), e.getChildByName("Scene").getChildByName("facepanel").getComponent(w).onselect(this._obplayer.playerid)))
            }), this), this._block_button.on("click", (t => {
                var e;
                if (this._cn_des_sp.active = !1, this._friend_des_sp.active = !1, 0 == this._enterType) N.gameNet.requestNotDisturb(null == (e = this.gameDataInstance) || null == (e = e.tRoomData) ? void 0 : e.u32RoomId, this._disturb, this._player.playerid);
                else if (1 == this._enterType) {
                    var i;
                    N.gameNet.requestNotDisturb(null == (i = this.gameDataInstance) || null == (i = i.tRoomData) ? void 0 : i.u32RoomId, this._disturb, this._obplayer.playerid)
                }
            }), this), this._live_buttton.on("click", (t => {
                var e;
                N.gameNet.requestOpenLiveReq(null == (e = this.gameDataInstance) || null == (e = e.tRoomData) ? void 0 : e.u32RoomId, this._liveStatus)
            }), this), this._like_button.on("click", (t => {
                var e;
                if (this._cn_des_sp.active = !1, this._friend_des_sp.active = !1, 0 == this._enterType) N.gameNet.requestLike(null == (e = this.gameDataInstance) || null == (e = e.tRoomData) ? void 0 : e.u32RoomId, this._player.playerid);
                else if (1 == this._enterType) {
                    var i;
                    N.gameNet.requestLike(null == (i = this.gameDataInstance) || null == (i = i.tRoomData) ? void 0 : i.u32RoomId, this._obplayer.playerid)
                }
            }), this), this.initAddNotes(), this._vip_panel = this._star_node.getChildByName("vip_panel"), this.all_panel = this._star_node.getChildByName("all_panel"), this._other_info_panel = this.root.getChildByName("other_info_panel"), this.initUserDataTextFields(), this._vipDataInfo_Panel = this._vip_panel.getChildByName("vipDataInfo_Panel"), this._jiJin_text = this._vipDataInfo_Panel.getChildByName("jiJin_text"), this._fanPaiLv_text = this._vipDataInfo_Panel.getChildByName("fanPaiLv_text"), this._3bet_text = this._vipDataInfo_Panel.getChildByName("3bet_text"), this._vpip_text = this._vipDataInfo_Panel.getChildByName("vpip_text"), this._pfr_text = this._vipDataInfo_Panel.getChildByName("pfr_text"), this._cbet_text = this._vipDataInfo_Panel.getChildByName("cbet_text"), this._jiJin_img = this._vipDataInfo_Panel.getChildByName("jiJin_img"), this._fanPaiLv_img = this._vipDataInfo_Panel.getChildByName("fanPaiLv_img"), this._fanPaiLv_img = this._vipDataInfo_Panel.getChildByName("tanPaiLv_img"), this._jiaZhu_img = this._vipDataInfo_Panel.getChildByName("jiaZhu_img"), this._touMangLv_img = this._vipDataInfo_Panel.getChildByName("touMangLv_img"), this._fanBei_img = this._vipDataInfo_Panel.getChildByName("fanBei_img"), this._tanPaiWin_img = this._vipDataInfo_Panel.getChildByName("tanPaiWin_img"), this._chiXuXiaZhu_img = this._vipDataInfo_Panel.getChildByName("chiXuXiaZhu_img"), this._nothing_panel = this._vip_panel.getChildByName("nothing_panel"), this._selfInfo_panel = this._star_node.getChildByName("selfInfo_panel"), this._avarge_text = this._selfInfo_panel.getChildByName("avarge_text"), this._avargebring_text = this._selfInfo_panel.getChildByName("avargebring_text"), this._big_text = this._selfInfo_panel.getChildByName("big_text"), this._fight_text = this._selfInfo_panel.getChildByName("fight_text"), this._houseOwer_Panel = this.root.getChildByName("houseOwer_Panel"), this.housePanel_pos = this._houseOwer_Panel.getPosition(), this._otherPos = this.other_panel.getPosition(), this._face_bg = this.other_panel.getChildByName("face_bg"), this._face_panel = this.other_panel.getChildByName("face_panel"), this._faceTouch_panel = this.other_panel.getChildByName("faceTouch_panel"), this._faceTouch_panel.pauseSystemEvents(!0), this._faceMoudle_panel = this.other_panel.getChildByName("faceMoudle_panel"), this._faceMoudle_panel.active = !1, this._allin_panel = this.other_panel.getChildByName("allin_panel"), this._allin_label = this._allin_panel.getChildByName("allin_label").getComponent(o), this.face_over_img = this._faceMoudle_panel.getChildByName("face_over_img"), this._kickOut_button = this._houseOwer_Panel.getChildByName("kickOut_button"), this._prohibit_sitdown_button = this._houseOwer_Panel.getChildByName("prohibit_sitdown_button"), this._authentication_button = this._houseOwer_Panel.getChildByName("authentication_button"), this._authentication_button.active = !1, this._prohibit_sitdown_button.setPosition(m(this._authentication_button.position.x, this._prohibit_sitdown_button.position.y, this._prohibit_sitdown_button.position.z)), this.kickX = this._kickOut_button.position.x, this.prohibitX = this._prohibit_sitdown_button.position.x, this.gameDataInstance.tRoomData.pkRoomParam.rule_blind_enum < 8 ? (this._authentication_button.pauseSystemEvents(!0), this._authentication_button.getComponent(d).color = u.GRAY) : (this._authentication_button.pauseSystemEvents(!0), this._authentication_button.getComponent(d).color = u.WHITE);
            let t = this._vip_panel.getChildByName("text_bg"),
                e = this._vip_panel.getChildByName("Image_10"),
                i = t.getChildByName("vip_title_des_text_1"),
                n = t.getChildByName("vip_title_des_text_2"),
                a = e.getChildByName("vip_title_text"),
                _ = this.all_panel.getChildByName("title_des_text_1"),
                h = this.all_panel.getChildByName("title_des_text_2"),
                l = this.all_panel.getChildByName("title_des_text_3"),
                C = this.all_panel.getChildByName("title_des_text_4"),
                f = this.all_panel.getChildByName("title_des_text_5"),
                y = this._other_info_panel.getChildByName("title_des_text_1"),
                v = this._other_info_panel.getChildByName("title_des_text_2"),
                k = this._other_info_panel.getChildByName("title_des_text_3"),
                S = this._other_info_panel.getChildByName("title_des_text_4"),
                D = this._other_info_panel.getChildByName("title_des_text_5"),
                x = this._selfInfo_panel.getChildByName("info_title_text_3"),
                T = this._selfInfo_panel.getChildByName("info_title_text_4"),
                I = this._selfInfo_panel.getChildByName("info_title_text_5"),
                B = this._selfInfo_panel.getChildByName("info_title_text_6");
            i.getComponent(o).string = N.config.getStringData("roleInfo_root_vip_panel_vip_title_des_text_1"), n.getComponent(o).string = N.config.getStringData("roleInfo_root_vip_panel_vip_title_des_text_2"), _.getComponent(o).string = N.config.getStringData("roleInfo_root_title_des_text_1"), N.config.getCurrentLanguage() === N.Enum.LANGUAGE_TYPE.zh_CN ? (h.getComponent(o).string = N.config.getStringData("DataView_data_panel_dataInfo_panel_vip_panel_vpip_txt").replace("VPIP", ""), C.getComponent(o).string = N.config.getStringData("DataView_data_panel_dataInfo_panel_vip_panel_pfr_txt").replace("PFR", "")) : (h.getComponent(o).string = N.config.getStringData("DataView_data_panel_dataInfo_panel_vip_panel_vpip_txt"), C.getComponent(o).string = N.config.getStringData("DataView_data_panel_dataInfo_panel_vip_panel_pfr_txt")), l.getComponent(o).string = N.config.getStringData("roleInfo_root_title_des_text_3"), f.getComponent(o).string = N.config.getStringData("roleInfo_root_title_des_text_5"), _.getComponent(o).isBold = !0, h.getComponent(o).isBold = !0, l.getComponent(o).isBold = !0, C.getComponent(o).isBold = !0, f.getComponent(o).isBold = !0, y.getComponent(o).string = N.config.getStringData("roleInfo_root_title_des_text_1"), N.config.getCurrentLanguage() == N.Enum.LANGUAGE_TYPE.zh_CN ? (v.getComponent(o).string = N.config.getStringData("DataView_data_panel_dataInfo_panel_vip_panel_vpip_txt").replace("VPIP", ""), S.getComponent(o).string = N.config.getStringData("DataView_data_panel_dataInfo_panel_vip_panel_pfr_txt").replace("PFR", "")) : (v.getComponent(o).string = N.config.getStringData("DataView_data_panel_dataInfo_panel_vip_panel_vpip_txt"), S.getComponent(o).string = N.config.getStringData("DataView_data_panel_dataInfo_panel_vip_panel_pfr_txt")), k.getComponent(o).string = N.config.getStringData("roleInfo_root_title_des_text_3"), D.getComponent(o).string = N.config.getStringData("roleInfo_root_title_des_text_5"), y.getComponent(o).isBold = !0, v.getComponent(o).isBold = !0, k.getComponent(o).isBold = !0, S.getComponent(o).isBold = !0, D.getComponent(o).isBold = !0, this._at_text.getComponent(o).string = N.config.getStringData("Faceview_danmu_button_danmu"), b("Label", this._recond_button).getComponent(o).string = N.config.getStringData("Star_playback"), this.gameDataInstance.tRoomData.pkRoomParam.game_mode == N.Enum.CreateGameMode.CreateGame_Mode_Short ? x.getComponent(o).string = N.config.getStringData("roleInfo_root_selfInfo_panel_info_title_text_3_shot") : x.getComponent(o).string = N.config.getStringData("roleInfo_root_selfInfo_panel_info_title_text_3"), T.getComponent(o).string = N.config.getStringData("roleInfo_root_selfInfo_panel_info_title_text_4"), I.getComponent(o).string = N.config.getStringData("roleInfo_root_selfInfo_panel_info_title_text_5"), B.getComponent(o).string = N.config.getStringData("roleInfo_root_selfInfo_panel_info_title_text_6"), a.getComponent(o).string = N.config.getStringData("roleInfo_root_vip_panel_Image_10_vip_title_text"), this._local_text.getComponent(o).string = N.config.getStringData("roleInfo_root_local_text"), this._remark_text.getComponent(o).string = N.config.getStringData("roleInfo_root_role_remark_text"), this._remark_text.getComponent(o).updateRenderData(!0), this.setRemarkButtonPosition(this._remark_text.getPosition().x + this._remark_text.getComponent(g).width + 15, this._remark_button.getPosition().y), this._kickOut_button.getChildByName("Label").getComponent(o).string = N.config.getStringData("roleInfo_root_houseOwer_Panel_kickOut_button"), this._prohibit_sitdown_button.getChildByName("Label").getComponent(o).string = N.config.getStringData("roleInfo_root_houseOwer_Panel_prohibit_sitdown_button"), this._authentication_button.getChildByName("Label").getComponent(o).string = N.config.getStringData("roleInfo_root_houseOwer_Panel_authentication_button"), this.sure_button.getChildByName("Label").getComponent(o).string = N.config.getStringData("roleInfo_root_remark_panel_sure_button"), this.cancle_button.getChildByName("Label").getComponent(o).string = N.config.getStringData("roleInfo_root_remark_panel_cancle_button"), N.config.getCurrentLanguage() == N.Enum.LANGUAGE_TYPE.zh_CN || N.config.getCurrentLanguage() == N.Enum.LANGUAGE_TYPE.zh_TW ? (this._prohibit_sitdown_button.getChildByName("Label").getComponent(o).fontSize = 34, this._authentication_button.getChildByName("Label").getComponent(o).fontSize = 34) : N.config.getCurrentLanguage() == N.Enum.LANGUAGE_TYPE.vi_VN ? (this._prohibit_sitdown_button.getChildByName("Label").getComponent(o).fontSize = 34, this._authentication_button.getChildByName("Label").getComponent(o).fontSize = 30) : (this._prohibit_sitdown_button.getChildByName("Label").getComponent(o).fontSize = 32, this._authentication_button.getChildByName("Label").getComponent(o).fontSize = 30), this.addEvent(), this.setForbidChat(!1), N.MessageCenter.send("hide_bombInfoTips"), this.playerStats_onLoad(), this._isInit = !0
        }
        createFaceItem() {
            if (!this._isInit) return;
            if (this.hasCreateFaceItem) return;
            const t = this.gameDataInstance.tRoomData.neededFeeAsPerCurrency(this.gameDataInstance.tRoomData.pkPayMoneyItem.emotionFee);
            this.giftPrice.string = this.gameDataInstance.tRoomData.getDataPointValue(N.StringTools.clientGoldByServer(t)), this.hasCreateFaceItem = !0;
            for (let t = 0; t < 18; t++) {
                let e = C(this.faceItem);
                e.getComponent(P).setData(t), t >= 12 ? e.setPosition(new f(146.66 * (t - 12) - 440, -258, 0)) : t >= 6 && t < 12 ? e.setPosition(new f(146.66 * (t - 6) - 440, -86, 0)) : e.setPosition(new f(146.66 * t - 440, 86, 0)), this._face_panel.addChild(e)
            }
        }
        initAddNotes() {
            this.remark_panel.on(s.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0, this.setRemarkPanelActive(!1)
            })), b("Image_2", this.remark_panel).on(s.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0
            })), this._remarkbtn_panel = this._panelbg.getChildByName("remarkbtn_panel"), this._remark_text = this._panelbg.getChildByName("remark_text"), this.menu_button = this.remark_panel.getChildByName("menu_button"), this.menu_text = this.menu_button.getChildByName("menu_text"), this.menu_icon = this.menu_button.getChildByName("menu_icon"), this.menu_arrow = this.menu_button.getChildByName("menu_arrow"), this._signInput_text = this.remark_panel.getChildByName("signInput_text"), this._signInput_text.getComponent(c).string = N.config.getStringData("roleInfo_root_remark_panel_signInput_text"), this._signInput_text.getComponent(c).placeholder = N.config.getStringData("roleInfo_root_remark_panel_signInput_text");
            for (let t = 0; t < 6; t++) {
                let e = this.remark_panel.getChildByName(N.StringTools.formatC("remark_button_%d", t));
                e.setPosition(e.position.x, this.menu_button.position.y - (this.menu_button.getComponent(g).height - 5) * (t + 1)), e.active = !1, e.on(s.EventType.TOUCH_END, this.onClickRemarkButton, this), this.buttonList.push(e)
            }
            this.setRemarkPanelActive(!1), this.sure_button = this.remark_panel.getChildByName("sure_button"), this.cancle_button = this.remark_panel.getChildByName("cancle_button");
            let t = this.remark_panel.getChildByName("label_text"),
                e = this.remark_panel.getChildByName("set_note_text"),
                i = this.remark_panel.getChildByName("remark_button_0").getChildByName("menu_text_0");
            t.getComponent(o).string = N.config.getStringData("roleInfo_root_remark_panel_label_text"), e.getComponent(o).string = N.config.getStringData("roleInfo_root_remark_panel_set_note_text"), this.menu_text.getComponent(o).string = N.config.getStringData("roleInfo_root_remark_panel_menu_button_menu_text"), i.getComponent(o).string = N.config.getStringData("roleInfo_root_remark_panel_remark_button_0_menu_text_0")
        }
        setItemPosition(t, e) {
            e >= 6 ? t.setPosition(new f(145 * (e - 6) - 430, -320, 0)) : t.setPosition(new f(145 * e - 430, -155, 0))
        }
        initButtons() {
            this._recond_button = this._interaction_panel.getChildByName("replay_button"), this._block_button = this._interaction_panel.getChildByName("block_button"), this._remark_button = this._panelbg.getChildByName("remark_button"), this._like_button = this._interaction_panel.getChildByName("like_button"), this._like_img = this._like_button.getChildByName("Background"), this._other_like_text = this._like_button.getChildByName("Label")
        }
        initUserDataTextFields() {
            this._total_text = this.all_panel.getChildByName("total_text"), this._ruchi_text = this.all_panel.getChildByName("ruchi_text"), this._totalPoker_text = this.all_panel.getChildByName("totalPoker_text"), this._ruchiWin_text = this.all_panel.getChildByName("ruchiWin_text"), this._shoushu_text = this.all_panel.getChildByName("shoushu_text"), this._other_total_text = this._other_info_panel.getChildByName("total_text"), this._other_ruchi_text = this._other_info_panel.getChildByName("ruchi_text"), this._other_totalPoker_text = this._other_info_panel.getChildByName("totalPoker_text"), this._other_ruchiWin_text = this._other_info_panel.getChildByName("ruchiWin_text"), this._other_shoushu_text = this._other_info_panel.getChildByName("shoushu_text")
        }
        initGenderObject() {
            this._gender_img = this._panelbg.getChildByName("gender_img"), this._gender_img.active = N.appConfig.getRegistrationConfig().showGenderField
        }
        setGender(t) {
            1 != t ? this.setSpriteFrame(this._gender_img, "zh_CN/game/dzpoker/datacard/icon_women") : this.setSpriteFrame(this._gender_img, "zh_CN/game/dzpoker/datacard/icon_men")
        }
        onDestroy() {
            for (N.MessageCenter.unregister("update_userPokerData", this.node), N.MessageCenter.unregister("on_address_update", this.node), N.MessageCenter.unregister("RecetRoleInfoView", this.node), N.MessageCenter.unregister("update_prohibit_button", this.node), N.MessageCenter.unregister("update_remarks", this.node), N.MessageCenter.unregister("isHavePriviledge", this.node), N.MessageCenter.unregister("forbid_chat", this.node), N.MessageCenter.unregister("on_play_voice", this.node), N.MessageCenter.unregister("NotDisturb", this.node), N.MessageCenter.unregister("liveStatus", this.node), N.MessageCenter.unregister("mikeMode", this.node), N.MessageCenter.unregister("like", this.node), N.MessageCenter.unregister("usermarks", this.node), N.MessageCenter.unregister("get_usermarks", this.node), N.MessageCenter.unregister("modify_usermarks", this.node), this.unschedule(this.Update); this._timeIDs.length > 0;) clearTimeout(this._timeIDs.shift())
        }
        doOpcity(t, e) {
            t && t !== this._face_bg && (t.getComponent(p).opacity = e)
        }
        closeSign() {
            let t = N.dataHandler.getUserData().mark_edit_state;
            1 != t ? 2 != t ? (this._signature_editbox.active = !0, this._signature_text.getComponent(o).string == N.config.getStringData("Star_signature") ? (this._signature_editbox.getComponent(c).string = "", this._signature_text_uiRenderer.color = (new u).fromHEX("#4C4C4C")) : (this._signature_editbox.getComponent(c).string = this._signature_text.getComponent(o).string, this._signature_text_uiRenderer.color = (new u).fromHEX("#E9E1D1")), this.setSpriteFrame(b("Background", this._signature_sure_button), "zh_CN/game/dzpoker/datacard/btn_signature1"), this._signature_sure_button.active = !0, this._signature_text.active = !1, this._signature_button.active = !1, this.onTextChanged(), 0 == this._editbox_state && (this._editbox_state = 1, this._signature_editbox.getComponent(c).focus())) : N.TT.showMsg(N.config.getStringData("signature_sensitive_tip"), N.Enum.ToastType.ToastTypeError) : N.TT.showMsg(N.config.getStringData("signature_limit_tip"), N.Enum.ToastType.ToastTypeError)
        }
        onClose(t) {
            t.propagationStopped = !0, this.node.active = !1, this._shade.active = !1, this._friend_des_sp.active = !1, this._cn_des_sp.active = !1, this._panelbg.getChildByName("zhezhao_panel").active = !1, this._editbox_state = 0
        }
        addEvent() {
            this._panelbg.on(s.EventType.TOUCH_END, (t => {
                this._signature_sure_button.active = !1, this._signature_editbox.active = !1, this._signature_text.active = !0, this._friend_des_sp.active = !1, this._cn_des_sp.active = !1, this._panelbg.getChildByName("zhezhao_panel").active = !1, this._editbox_state = 0, this.getUserId() == this.u32CurrentUid ? this._signature_button.active = !0 : this._signature_button.active = !1, t.propagationStopped = !0
            }));
            let t = this.gameSceneInstance.gameNode.getChildByName("bighead");
            t.on(s.EventType.TOUCH_END, (e => {
                e.propagationStopped = !0, t.active = !1, this.node.active = !0
            }), this), this._face_bg.on(s.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0
            })), this._kickOut_button.on(s.EventType.TOUCH_END, this.kickOutCallBack, this), this._prohibit_sitdown_button.on(s.EventType.TOUCH_END, this.noSeatCallBack, this), this._authentication_button.on(s.EventType.TOUCH_END, this.authenticationCallBack, this), this._remark_button.on(s.EventType.TOUCH_END, this.showRemarkPanel, this), this._remarkbtn_panel.on(s.EventType.TOUCH_END, this.showRemarkPanel, this), this.sure_button.on(s.EventType.TOUCH_END, function(t) {
                N.AudioMgr.playButtonSound("button_click");
                let e = this.getPlayerNoteString(),
                    i = null,
                    n = null;
                N.StringTools.isClubNameFormat(e) ? N.StringTools.isSensitiveWords(e) && (i = "tips_no_sensitive_words", n = "ToastTypeWarning") : (i = "tips_no_special_words", n = "ToastTypeWarning"), null == i ? y.os === y.OS.IOS && N.native.stringContainsEmoji(e) ? N.TT.showMsg(N.config.getStringData("UIRemarkTips"), N.Enum.ToastType.ToastTypeError) : N.StringTools.getStrLen(e) > 10 ? N.TT.showMsg(N.config.getStringData("EditBoxNickName"), N.Enum.ToastType.ToastTypeError) : (e = e.replace(/[\r\n]/g, ""), N.worldNet.RequestAddRemarks(this.u32CurrentUid, this.remark_click_type, e), t.propagationStopped = !0, this.setRemarkPanelActive(!1)) : N.TT.showMsg(N.config.getStringData(i), n)
            }.bind(this)), this.cancle_button.on(s.EventType.TOUCH_END, function(t) {
                N.AudioMgr.playButtonSound("button_click"), t.propagationStopped = !0, this.setRemarkPanelActive(!1)
            }.bind(this)), this.cancle_button.on(s.EventType.TOUCH_END, function(t) {
                N.AudioMgr.playButtonSound("button_click"), t.propagationStopped = !0, this.setRemarkPanelActive(!1)
            }.bind(this)), this.setEventForMenuButton(), N.MessageCenter.register("update_userPokerData", this.updatePokerData.bind(this), this.node), N.MessageCenter.register("on_address_update", this.OnUpdateAddres.bind(this), this.node), N.MessageCenter.register("RecetRoleInfoView", this.recetRoleInfo.bind(this), this.node), N.MessageCenter.register("update_prohibit_button", this.updateProhibitButton.bind(this), this.node), N.MessageCenter.register("update_remarks", this.OnUpdate_remarks.bind(this), this.node), N.MessageCenter.register("isHavePriviledge", this.onIsHavePriviledge.bind(this), this.node), N.MessageCenter.register("forbid_chat", this.forbidChat.bind(this), this.node), N.MessageCenter.register("on_play_voice", this.speakOverFunc.bind(this), this.node), N.MessageCenter.register("NotDisturb", this.NotDisturb.bind(this), this.node), N.MessageCenter.register("liveStatus", this.liveStatus.bind(this), this.node), N.MessageCenter.register("mikeMode", this.onMikeMode.bind(this), this.node), N.MessageCenter.register("like", this.OnLike.bind(this), this.node), N.MessageCenter.register("get_usermarks", this.onGetUserMarks.bind(this), this.node), N.MessageCenter.register("modify_usermarks", this.onModifyUserMarks.bind(this), this.node)
        }
        setEventForMenuButton() {
            this.menu_button.on(s.EventType.TOUCH_END, function(t) {
                N.AudioMgr.playButtonSound("button_click"), t.propagationStopped = !0, this.setButtonListToShow(!this.buttonList[0].active)
            }.bind(this))
        }
        updateMenuButton() {
            v(this.menu_arrow).to(.1, {
                angle: 180
            }).start(), 0 == this.remark_click_type ? (this.menu_text.active = !0, this.menu_icon.active = !1) : (this.menu_text.active = !1, this.menu_icon.active = !0, this.setSpriteFrame(this.menu_icon, N.StringTools.formatC("zh_CN/game/dzpoker/ui/common_remark_icon%d", this.remark_click_type)))
        }
        setPlayerNoteString(t) {
            this._signInput_text.getComponent(c).string = t
        }
        getPlayerNoteString() {
            return this._signInput_text.getComponent(c).string
        }
        showRemarkPanel(t) {
            N.AudioMgr.playButtonSound("button_click"), this.setRemarkPanelActive(!0), this.sure_button.getComponent(r).interactable = !0, this.cancle_button.getComponent(r).interactable = !0;
            let e = N.dataHandler.getUserData().getRemarkData(this.u32CurrentUid);
            e || console.log("===> remark ="), this.remark_click_type = e.nType, N.StringTools.getArrayLength(e.sRemark) > 0 ? this.setPlayerNoteString(e.sRemark) : this.setPlayerNoteString(""), this.updateNodeMenuText(e)
        }
        updateNodeMenuText(t) {
            0 == t.nUid || 0 == t.nType ? (this.menu_text.active = !0, this.menu_icon.active = !1) : (this.menu_text.active = !1, this.menu_icon.active = !0, this.setSpriteFrame(this.menu_icon, N.StringTools.formatC("zh_CN/game/dzpoker/ui/common_remark_icon%d", t.nType)))
        }
        stopPropagationEventOnRemarkClick(t) {
            t.propagationStopped = !0
        }
        onClickRemarkButton(t) {
            N.AudioMgr.playButtonSound("button_click.mp3"), this.stopPropagationEventOnRemarkClick(t);
            let e = t.target;
            this.remark_click_type = N.Number(e.name.charAt(e.name.length - 1)), this.updateMenuButton(), this.setButtonListToShow(!1)
        }
        Update(t) {
            if (this.opcityNum = this.opcityNum - 1, this.opcityNum <= 150) return this.node.active = !1, this._shade.active = !1, this.opcityNum = 300, void this.unschedule(this.Update);
            let e = this.opcityNum >= 255 ? 255 : this.opcityNum;
            this.doOpcity(this.other_panel, e)
        }
        onTouchFacePanel(t) {
            if (!this.canSendFace) return t.propagationStopped = !0, void t.target.getParent().getComponent(P).setClick(!1);
            switch (t.target.getParent().getComponent(P).setClick(!0), t.type) {
                case s.EventType.TOUCH_START:
                    this.root.active = !1, this._shade.active = !1, this._face_bg.active = !0, this.doOpcity(this.other_panel, 255), this.unschedule(this.Update), this.opcityNum = 300;
                    break;
                case s.EventType.TOUCH_END:
                case s.EventType.TOUCH_CANCEL:
                    this.doOpcityX(null)
            }
        }
        speak(t) {
            if (this._cn_des_sp.active = !1, this._friend_des_sp.active = !1, t.type == s.EventType.TOUCH_END)
                for (let t = 0; t < this.gameDataInstance.tRoomData.kTablePlayerList.length; t++) {
                    let e = this.gameDataInstance.tRoomData.kTablePlayerList[t];
                    if (this.u32CurrentUid == e.playerid) {
                        if (1 == this.speakingVoice) return void console.log("speaking is now.");
                        if (e.last_voice.length > 0) {
                            if (y.isNative && y.os == y.OS.IOS) {
                                N.native.StopPlay();
                                let t = new I;
                                t.kUrl = e.last_voice, t.kSender = this.roleName_text.getComponent(o).string, t.u32SeatId = e.seatid, N.native.PlayRoomVoice(t)
                            } else N.AudioMgr.stop(this.m_i32CurrPlayVoiceId), this.downloadVoice(e);
                            this.speakingVoice = !0, this.updataRecondButtonTouch()
                        }
                        return
                    }
                }
        }
        speakOverFunc(t = null) {
            if (null == t) return this.speakingVoice = !1, void this.updataRecondButtonTouch();
            let e = t.f32Time,
                i = this,
                n = setTimeout((function() {
                    i._timeIDs.shift(), i.speakingVoice = !1, i.updataRecondButtonTouch()
                }), 1e3 * e);
            this._timeIDs.push(n)
        }
        setRemarkButtonPosition(t, e, i) {
            "number" == typeof t ? this._remark_button.setPosition(t, e, i) : this._remark_button.setPosition(t.x, e, i)
        }
        downloadVoice(t) {
            let e = N.AudioMgr.getAudioID(t.last_voice),
                i = N.AudioMgr.getDuration(e);
            this.m_i32CurrPlayVoiceId = e;
            let n = new I,
                a = t.last_voice;
            if (-1 != a.indexOf("@")) {
                let t = a.split("@");
                n.kUrl = t[2]
            } else n.kUrl = t.last_voice;
            n.kSender = this.roleName_text.getComponent(o).string, n.f32Time = i > 10 ? 10 : i, n.u32SeatId = t.seatid, N.httpHandler.DoDownloadVoice(n, this.speakOverFunc.bind(this))
        }
        setRemarkPanelActive(t) {
            this.remark_panel.active = t
        }
        lookonSelf(t) {
            this.adaptSelfWidget(), this.canSendFace = !0, this.remark_panel.active = !1, this.unschedule(this.Update), this.root.active = !0, this._shade.active = !0, this._enterType = 1, this._signature_editbox.active = !1, this._signature_sure_button.active = !1, this._signature_text.active = !0, this._signature_button.active = !0, this.doOpcity(this.other_panel, 255), N.MessageCenter.send("FaceItem_canSendFace", this.canSendFace), this.setVipView(!0), this.u32CurrentUid = t.playerid, N.worldNet.GetUserMarksRequest(t.playerid, this.gameDataInstance.tRoomData.u32GameID), b("Background", this._recond_button).getComponent(p).opacity = 76.5, this._recond_button.getComponent(r).enabled = !1, b("Background", this._block_button).getComponent(p).opacity = 76.5, this._block_button.getComponent(r).enabled = !1, console.log("---------------------" + this.getUserId() + "<" + this.gameDataInstance.tRoomData.u32OwnerId + "<" + this.u32CurrentUid), this.getUserId() == this.gameDataInstance.tRoomData.u32OwnerId && this.u32CurrentUid != this.getUserId() ? (this.setHouseOwer(!0), this._vip_panel.active = !1, this.all_panel.active = !1, this._other_info_panel.active = !0, this._panelbg_uiTransform.setContentSize(this._panelbg_uiTransform.contentSize.width, this.BG_H_other + this.HouseBg_H), this._panelbg.setPosition(this._panelbg.getPosition().x, -75), this.adaptWidget(this._panelbg, !0)) : this.getUserId() != this.gameDataInstance.tRoomData.u32OwnerId && this.u32CurrentUid != this.getUserId() ? (this.setHouseOwer(!1), this._vip_panel.active = !1, this.all_panel.active = !1, this._other_info_panel.active = !0, this._panelbg_uiTransform.setContentSize(this._panelbg_uiTransform.contentSize.width, this.BG_H_other), this.adaptWidget(this._panelbg, !0), this.resetPos()) : (this.setHouseOwer(!1), this._vip_panel.active = !0, this.all_panel.active = !0, this._other_info_panel.active = !1, this._panelbg_uiTransform.setContentSize(this._panelbg_uiTransform.contentSize.width, this.BG_H_self), this.adaptWidget(this._panelbg, !0), this.resetPos()), this.getUserId() == this.u32CurrentUid ? (this.showSelfPanel(t), this._signature_panel.on(s.EventType.TOUCH_END, this.closeSign, this)) : (this.showOtherPanel(t), this._signature_panel.off(s.EventType.TOUCH_END, this.closeSign, this)), this.playerStats_updateAvatar(this.playerStats_userAvatar, t.headurl, t.plat, !1);
            let e = this.gameSceneInstance.gameNode.getChildByName("bighead");
            B.setBigCircleSprite(e.getChildByName("headNode"), t.headurl, t.plat, !1, 0), this.updateRemarkText(t.playerid), this.setNameAndID(this.roleName_text, t.name, t.playerid), this._local_text.getComponent(o).string = N.config.getStringData("ToastMessage8"), t.playerid != this.getUserId() ? N.httpHandler.GetPubliceData(this.gameDataInstance, t.playerid, t.identity) : N.httpHandler.requestInGameUserData(this.gameDataInstance, t.identity), 1 != t.gender ? this.setSpriteFrame(this._gender_img, "zh_CN/game/dzpoker/datacard/icon_woman") : this.setSpriteFrame(this._gender_img, "zh_CN/game/dzpoker/datacard/icon_man"), this.getUserId() != this.gameDataInstance.tRoomData.u32OwnerId && this.gameDataInstance.tGameData.isHavePriviledge(this.getUserId()) && this.u32CurrentUid != this.getUserId() && (this._player && this.setNameAndID(this.roleName_text, this._player.name, this._player.playerid), N.gameNet.RequestCheckAllianceRoomPriviledge(this.u32CurrentUid, this.gameDataInstance.tRoomData.u32RoomId))
        }
        updateView(t) {
            this.canSendFace = !0, this.setRemarkPanelActive(!1), this._signature_editbox.active = !1, this._signature_sure_button.active = !1, this._signature_text.active = !0, this._signature_button.active = !1, this.speakingVoice = !1, this.unschedule(this.Update), this.root.active = !0, this._shade.active = !0, this._enterType = 0, this.doOpcity(this.other_panel, 255), N.MessageCenter.send("FaceItem_canSendFace", this.canSendFace), this.gameDataInstance.tRoomData.pkRoomParam.game_mode, N.Enum.CreateGameMode.CreateGame_Mode_Short, this.setVipView(!0);
            for (let e = 0; e < this.gameDataInstance.tRoomData.kTablePlayerList.length; e++) {
                let i = this.gameDataInstance.tRoomData.kTablePlayerList[e];
                if (i.seatid == t) {
                    this.u32CurrentUid = i.playerid, this.u32CurrentUid == this.getUserId() && (this._signature_button.active = !0), this._player = i, N.worldNet.GetUserMarksRequest(i.playerid, this.gameDataInstance.tRoomData.u32GameID), this.gameDataInstance.tRoomData.isZoom() || this.gameDataInstance.tRoomData.u32GameID == N.Enum.GameId.Bet ? (b("Background", this._recond_button).getComponent(p).opacity = 76.5, this._recond_button.getComponent(r).enabled = !1, b("Background", this._block_button).getComponent(p).opacity = 76.5, this._block_button.getComponent(r).enabled = !1) : this.u32CurrentUid != this.getUserId() ? (b("Background", this._recond_button).getComponent(p).opacity = 255, this._recond_button.getComponent(r).enabled = !0, b("Background", this._block_button).getComponent(p).opacity = 255, this._block_button.getComponent(r).enabled = !0) : (b("Background", this._recond_button).getComponent(p).opacity = 76.5, this._recond_button.getComponent(r).enabled = !1, b("Background", this._block_button).getComponent(p).opacity = 76.5, this._block_button.getComponent(r).enabled = !1), console.log("---------------------" + this.getUserId() + "<" + this.gameDataInstance.tRoomData.u32OwnerId + "<" + this.u32CurrentUid), this.getUserId() == this.gameDataInstance.tRoomData.u32OwnerId && this.u32CurrentUid != this.getUserId() ? (this.setHouseOwer(!0), this._vip_panel.active = !1, this.all_panel.active = !1, this._other_info_panel.active = !0, this._panelbg_uiTransform.setContentSize(this._panelbg_uiTransform.contentSize.width, this.BG_H_other + this.HouseBg_H), this._panelbg.setPosition(this._panelbg.getPosition().x, -75), this.adaptWidget(this._panelbg, !0)) : this.getUserId() != this.gameDataInstance.tRoomData.u32OwnerId && this.u32CurrentUid != this.getUserId() ? (this.setHouseOwer(!1), this._vip_panel.active = !1, this.all_panel.active = !1, this._other_info_panel.active = !0, this._panelbg_uiTransform.setContentSize(this._panelbg_uiTransform.contentSize.width, this.BG_H_other), this.adaptWidget(this._panelbg, !0), this.resetPos()) : (this.setHouseOwer(!1), this._vip_panel.active = !0, this.all_panel.active = !0, this._other_info_panel.active = !1, this._panelbg_uiTransform.setContentSize(this._panelbg_uiTransform.contentSize.width, this.BG_H_self), this.adaptWidget(this._panelbg, !0), this.resetPos()), this.getUserId() == this.u32CurrentUid ? (this.showSelfPanel(i), this._signature_panel.on(s.EventType.TOUCH_END, this.closeSign, this)) : (this.showOtherPanel(i), this._signature_panel.off(s.EventType.TOUCH_END, this.closeSign, this)), this.playerStats_updateAvatar(this.playerStats_userAvatar, i.headurl, i.plat, !1);
                    let t = this.gameSceneInstance.gameNode.getChildByName("bighead");
                    B.setBigCircleSprite(t.getChildByName("headNode"), i.headurl, i.plat, !1, 0), this.updateRemarkText(i.playerid), this.setNameAndID(this.roleName_text, i.name, i.playerid), this._local_text.getComponent(o).string = N.config.getStringData("ToastMessage8"), i.playerid != this.getUserId() ? N.httpHandler.GetPubliceData(this.gameDataInstance, i.playerid, i.identity) : N.httpHandler.requestInGameUserData(this.gameDataInstance, i.identity), 1 != i.gender ? this.setSpriteFrame(this._gender_img, "zh_CN/game/dzpoker/datacard/icon_woman") : this.setSpriteFrame(this._gender_img, "zh_CN/game/dzpoker/datacard/icon_man");
                    break
                }
            }
            this.getUserId() != this.gameDataInstance.tRoomData.u32OwnerId && this.gameDataInstance.tGameData.isHavePriviledge(this.getUserId()) && this.u32CurrentUid != this.getUserId() && (this._player && this.setNameAndID(this.roleName_text, this._player.name, this._player.playerid), N.gameNet.RequestCheckAllianceRoomPriviledge(this.u32CurrentUid, this.gameDataInstance.tRoomData.u32RoomId))
        }
        getUserId() {
            var t;
            let e = null == this || null == (t = this.gameDataInstance) || null == (t = t.tRoomData) ? void 0 : t.u32GameID;
            return e ? N.dataHandler.getUserData().getUserIdByGameID(e) : N.dataHandler.getUserData().u32Uid
        }
        isRegisteredPlayer() {
            var t;
            return null !== (null == (t = this.gameDataInstance) || null == (t = t.tRoomData) ? void 0 : t.GetTablePlayer(this.getUserId()))
        }
        doOpcityX(t) {
            this.root.active = !1, this._shade.active = !1, this._face_bg.active = !0, this.doOpcity(this.other_panel, 255), this.unschedule(this.Update), this.opcityNum = 300, this.schedule(this.Update, 0)
        }
        OnUpdateAddres(t) {
            this.gameDataInstance.tRoomData.u32OwnerId == this.getUserId() && (this._local_text.getComponent(o).string = "")
        }
        recetRoleInfo(t) {
            this._total_text.getComponent(o).string = N.StringTools.formatC("%d", 0), this._totalPoker_text.getComponent(o).string = N.StringTools.formatC("%d", 0), this._ruchi_text.getComponent(o).string = N.StringTools.formatC("%d", 0) + "%", this._ruchiWin_text.getComponent(o).string = N.StringTools.formatC("%d", 0) + "%", this._other_total_text.getComponent(o).string = N.StringTools.formatC("%d", 0), this._other_totalPoker_text.getComponent(o).string = N.StringTools.formatC("%d", 0), this._other_ruchi_text.getComponent(o).string = N.StringTools.formatC("%d", 0) + "%", this._other_ruchiWin_text.getComponent(o).string = N.StringTools.formatC("%d", 0) + "%", this._avargebring_text.getComponent(o).string = N.StringTools.formatC("%d", 0), this._avarge_text.getComponent(o).string = N.StringTools.formatC("%d", 0), this._big_text.getComponent(o).string = N.StringTools.formatC("%d", 0), this._fight_text.getComponent(o).string = N.StringTools.formatC("%d", 0), this._jiJin_text.getComponent(o).string = N.StringTools.formatC("%d", 0), this._fanPaiLv_text.getComponent(o).string = N.StringTools.formatC("%d", 0) + "%", this._3bet_text.getComponent(o).string = N.StringTools.formatC("%d", 0) + "%", this._vpip_text.getComponent(o).string = N.StringTools.formatC("%d", 0) + "%", this._pfr_text.getComponent(o).string = N.StringTools.formatC("%d", 0) + "%", this._cbet_text.getComponent(o).string = N.StringTools.formatC("%d", 0) + "%", this.playerStats_recetRoleInfo(t)
        }
        updatePokerData(e) {
            if (e.gameDataInstance !== this.gameDataInstance) return;
            this._total_text.getComponent(o).string = N.StringTools.formatC("%d", N.dataHandler.getUserData().pokerdata.Total_hand_card_count), this._totalPoker_text.getComponent(o).string = N.StringTools.formatC("%d", N.dataHandler.getUserData().pokerdata.Total_end_room_count), this._ruchi_text.getComponent(o).string = N.StringTools.formatC("%d", N.dataHandler.getUserData().pokerdata.Vpip_rate) + "%", this._ruchiWin_text.getComponent(o).string = N.StringTools.formatC("%d", N.dataHandler.getUserData().pokerdata.Pfr_rate) + "%", this._shoushu_text.getComponent(o).string = N.StringTools.formatC("%d", N.dataHandler.getUserData().pokerdata.level_hands), this._other_total_text.getComponent(o).string = N.StringTools.formatC("%d", N.dataHandler.getUserData().pokerdata.Total_hand_card_count), this._other_totalPoker_text.getComponent(o).string = N.StringTools.formatC("%d", N.dataHandler.getUserData().pokerdata.Total_end_room_count), this._other_ruchi_text.getComponent(o).string = N.StringTools.formatC("%d", N.dataHandler.getUserData().pokerdata.Vpip_rate) + "%", this._other_ruchiWin_text.getComponent(o).string = N.StringTools.formatC("%d", N.dataHandler.getUserData().pokerdata.Pfr_rate) + "%", this._other_shoushu_text.getComponent(o).string = N.StringTools.formatC("%d", N.dataHandler.getUserData().pokerdata.level_hands), this.updateLikesText(), null == N.dataHandler.getUserData().pokerdata.star_duration && (N.dataHandler.getUserData().pokerdata.star_duration = 0), this.updateLikes(N.dataHandler.getUserData().pokerdata.has_liked), this._friend_num.getComponent(o).string = N.dataHandler.getUserData().pokerdata.intimacy.toString(), N.dataHandler.getUserData().pokerdata.intimacy < 100 && N.dataHandler.getUserData().pokerdata.intimacy >= 0 ? (this.setSpriteFrame(this._friend_sp, "zh_CN/game/dzpoker/datacard/friend_luren_tag"), this._friend_sp.setPosition(0, 0), this._friend_num.setPosition(0, -70), this._friend_num.getComponent(d).color = (new u).fromHEX("#E9E1D1"), this._friend_text.setPosition(0, -103), this._friend_text.getComponent(g).setContentSize(112, 50), this._friend_des_sp.setPosition(201, 347)) : (this.setSpriteFrame(this._friend_sp, "zh_CN/game/dzpoker/datacard/friend_tag"), this._friend_sp.setPosition(0, 10), this._friend_num.setPosition(0, -88), this._friend_num.getComponent(d).color = (new u).fromHEX("#FFF59C"), this._friend_text.setPosition(0, -131), this._friend_text.getComponent(g).setContentSize(118, 50), this._friend_des_sp.setPosition(201, 310)), N.dataHandler.getUserData().pokerdata.intimacy >= 100 && N.config.getCurrentLanguage() === N.Enum.LANGUAGE_TYPE.vi_VN && (this._friend_text.setPosition(0, -128), this._friend_text.getComponent(g).setContentSize(118, 58)), N.config.getCurrentLanguage() === N.Enum.LANGUAGE_TYPE.vi_VN && (this._friend_text.getComponent(o).fontSize = 20);
            let i = N.StringTools.calculateAutoWrapString(this._friend_text.getComponent(o).node, N.tools.GetFriendLevelName(N.dataHandler.getUserData().pokerdata.intimacy));
            this._friend_text.getComponent(o).string = i, this._countdown_text.getComponent(o).string = N.tools.secondFormat(N.dataHandler.getUserData().pokerdata.star_duration), this._avargebring_text.getComponent(o).string = N.StringTools.numToFloatString(N.dataHandler.getUserData().pokerdata.Buyin_average), this._avarge_text.getComponent(o).string = N.StringTools.numToFloatString(N.dataHandler.getUserData().pokerdata.Fight_average);
            let n = t.getBbValue(this.gameDataInstance);
            0 != n && (this._big_text.getComponent(o).string = n.toString()), this._fight_text.getComponent(o).string = N.StringTools.numToFloatString(N.dataHandler.getUserData().pokerdata.Fight_100), this._jiJin_text.getComponent(o).string = N.StringTools.formatC("%0.1f", N.dataHandler.getUserData().pokerdata.Af_rate / 100), this._fanPaiLv_text.getComponent(o).string = N.StringTools.formatC("%d", N.dataHandler.getUserData().pokerdata.Etf_rate) + "%", this._3bet_text.getComponent(o).string = N.StringTools.formatC("%d", N.dataHandler.getUserData().pokerdata.Rate_3bet) + "%";
            let a = N.StringTools.formatC("%d", N.dataHandler.getUserData().pokerdata.Pfr_rate) + "%";
            this._vpip_text.getComponent(o).string = N.StringTools.formatC("%d", N.dataHandler.getUserData().pokerdata.Vpip_rate) + "%", this._pfr_text.getComponent(o).string = a, this._cbet_text.getComponent(o).string = N.StringTools.formatC("%d", N.dataHandler.getUserData().pokerdata.Cbet_rate) + "%", this.playerStats_updatePokerData(e)
        }
        static getBbValue(t) {
            let e = "",
                i = N.StringTools.clientGoldByServer(t.tRoomData.pkRoomParam.rule_ante_amount);
            if (t.tRoomData.pkRoomParam.game_mode == N.Enum.CreateGameMode.CreateGame_Mode_Normal) {
                e = N.config.getblindString(t.tRoomData.pkRoomParam.rule_blind_enum - 1);
                let i = e.split("/");
                e = i[1];
                Number(i[1]), N.config.getStringData("UIGameBlind")
            } else t.tRoomData.pkRoomParam.game_mode == N.Enum.CreateGameMode.CreateGame_Mode_Short && (e = N.StringTools.numberToShowString(i));
            let n = 0;
            for (let t = 0; t < N.dataHandler.getUserData().pokerdata.Bb100s.length; t++) 100 * N.Number(e) == N.dataHandler.getUserData().pokerdata.Bb100s[t].bb_value && (n = N.dataHandler.getUserData().pokerdata.Bb100s[t].bb_100);
            return n
        }
        setVipView(t) {
            t ? (this._nothing_panel.active = !1, this._vipDataInfo_Panel.active = !0) : (this._nothing_panel.active = !0, this._vipDataInfo_Panel.active = !1)
        }
        hideRootNode() {
            this.node.active = !1, k(this._shade) && (this._shade.active = !1)
        }
        showObView() {
            this.canSendFace = !1, this._enterType = 1, this.speakingVoice = !1;
            let t = this.gameDataInstance.tRoomData.obPlayer;
            this.u32CurrentUid = t.playerid, N.worldNet.GetUserMarksRequest(t.playerid, this.gameDataInstance.tRoomData.u32GameID), this.remark_panel.active = !1, this.recetRoleInfo(null), this.unschedule(this.Update), this.root.active = !0, this._shade.active = !0, this._interaction_panel.active = N.tools.isThrowableAnimationDisplay(), this.playerStats_closeButton.active = !1, this.doOpcity(this.m_pkTempHead, 255), this._signature_editbox.active = !1, this._signature_sure_button.active = !1, this._signature_text.active = !0, this._signature_button.active = !1, this.gameDataInstance.tRoomData.pkRoomParam.game_mode == N.Enum.CreateGameMode.CreateGame_Mode_Short ? this.setVipView(!1) : this.setVipView(N.dataHandler.getUserData().u32CardType >= 2), this.gameDataInstance.tRoomData.isZoom() || this.gameDataInstance.tRoomData.u32GameID == N.Enum.GameId.Bet ? (b("Background", this._recond_button).getComponent(p).opacity = 76.5, this._recond_button.getComponent(r).enabled = !1, b("Background", this._block_button).getComponent(p).opacity = 76.5, this._block_button.getComponent(r).enabled = !1, this.u32CurrentUid != this.getUserId() ? (this.showOtherPanel(t.data), this._signature_panel.off(s.EventType.TOUCH_END, this.closeSign, this)) : (b("Background", this._block_button).getComponent(p).opacity = 76.5, this._block_button.getComponent(r).enabled = !1, this.showSelfPanel(t.data), this._signature_panel.on(s.EventType.TOUCH_END, this.closeSign, this))) : this.u32CurrentUid != this.getUserId() ? (b("Background", this._recond_button).getComponent(p).opacity = 255, this._recond_button.getComponent(r).enabled = !0, b("Background", this._block_button).getComponent(p).opacity = 255, this._block_button.getComponent(r).enabled = !0, this.showOtherPanel(t.data), this._signature_panel.off(s.EventType.TOUCH_END, this.closeSign, this)) : (b("Background", this._recond_button).getComponent(p).opacity = 76.5, this._recond_button.getComponent(r).enabled = !1, b("Background", this._block_button).getComponent(p).opacity = 76.5, this._block_button.getComponent(r).enabled = !1, this.showSelfPanel(t.data), this._signature_panel.on(s.EventType.TOUCH_END, this.closeSign, this)), this._selfInfo_panel.active = !1, this.other_panel.active = !0, this._faceMoudle_panel.active = !0, this.updateProhibitButton(null);
            let e = this.gameSceneInstance.gameNode.getChildByName("bighead");
            this.playerStats_updateAvatar(this.playerStats_userAvatar, t.headPath, t.plat, !1, 0), B.setBigCircleSprite(b("headNode", e), t.headPath, t.plat, !1, 0), this.gameDataInstance.tRoomData.u32OwnerId == this.getUserId() && this.u32CurrentUid != this.getUserId() ? (this.setHouseOwer(!0), this._vip_panel.active = !1, this.all_panel.active = !1, this._other_info_panel.active = !0, this._panelbg_uiTransform.setContentSize(this._panelbg_uiTransform.contentSize.width, this.BG_H_other + this.HouseBg_H), this._panelbg.setPosition(this._panelbg.getPosition().x, -75), this.adaptWidget(this._panelbg, !0)) : (this.setHouseOwer(!1), this._vip_panel.active = !1, this.all_panel.active = !1, this._other_info_panel.active = !0, this.u32CurrentUid != this.getUserId() ? 1 == t.data.identity ? (this._panelbg_uiTransform.setContentSize(this._panelbg_uiTransform.contentSize.width, this.BG_H_other_star), this.adaptOtherWidget()) : (this._panelbg_uiTransform.setContentSize(this._panelbg_uiTransform.contentSize.width, this.BG_H_other), this.adaptWidget(this._panelbg, !0), this.resetPos()) : (this._panelbg_uiTransform.setContentSize(this._panelbg_uiTransform.contentSize.width, this.BG_H_self), this.adaptWidget(this._panelbg, !0), this.resetPos())), this.setNameAndID(this.roleName_text, t.name, t.playerid), this.updateRemarkText(t.playerid);
            let i = t.data;
            this._obplayer = t.data, this._local_text.getComponent(o).string = N.config.getStringData("ToastMessage8"), 1 != i.gender ? this.setSpriteFrame(this._gender_img, "zh_CN/game/dzpoker/datacard/icon_woman") : this.setSpriteFrame(this._gender_img, "zh_CN/game/dzpoker/datacard/icon_man"), i.playerid != this.getUserId() ? N.httpHandler.GetPubliceData(this.gameDataInstance, i.playerid, i.identity) : N.httpHandler.requestInGameUserData(this.gameDataInstance, i.identity), this.getUserId() != this.gameDataInstance.tRoomData.u32OwnerId && this.gameDataInstance.tGameData.isHavePriviledge(this.getUserId()) && this.u32CurrentUid != this.getUserId() && N.gameNet.RequestCheckAllianceRoomPriviledge(this.u32CurrentUid, this.gameDataInstance.tRoomData.u32RoomId), this.face_over_img.getComponent(p).opacity = 102, N.MessageCenter.send("FaceItem_canSendFace", this.canSendFace)
        }
        showSelfPanel(t) {
            this._certification_sp.setPosition(-128, 478), this._signature_panel.setPosition(-176, 398), this.adaptSelfWidget(), this.setLikeNodeActive(!0), this._friend_node.active = !1, this._signature_button.active = !0, this._remark_button.active = !1, this._remarkbtn_panel.active = !1, this.setRoleRemarkTextActive(!1), this._interaction_panel.active = !1, this.playerStats_closeButton.active = !0, this._mic_panel.active = !1, this._signature_editbox.getComponent(c).enabled = !0, 1 == t.identity ? (this.adaptSelfStarWidget(), this._remark_button.active = !1, this._remarkbtn_panel.active = !1, this.setRoleRemarkTextActive(!1), this._local_text.active = !1, 0 == this._enterType && (this._mic_panel.active = !0, this.onMikeMode(null), this._panelbg_uiTransform.setContentSize(this._panelbg_uiTransform.contentSize.width, this.BG_H_self_star), this.adaptWidget(this._panelbg, !0), this.all_panel.setPosition(this.all_panel.getPosition().x, 88), this._vip_panel.setPosition(this._vip_panel.getPosition().x, -270), this._selfInfo_panel.setPosition(this._selfInfo_panel.getPosition().x, -430), this._mic_panel.setPosition(this._mic_panel.getPosition().x, -585)), 0 == this._enterType ? this._live_buttton.active = !0 : 1 == this._enterType && (this._live_buttton.active = !1), this._countdown_sp.active = !0, this._countdown_text.active = !0, this._countdown_bg.active = !0, 1 == t.liveStatus ? (this._liveStatus = 2, this.setSpriteFrame(b("Background", this._live_buttton), "zh_CN/game/dzpoker/datacard/btn_golive_off")) : 2 != t.liveStatus && 0 != t.liveStatus || (this._liveStatus = 1, this.setSpriteFrame(b("Background", this._live_buttton), "zh_CN/game/dzpoker/datacard/btn_golive_on"))) : (this._countdown_sp.active = !1, this._countdown_text.active = !1, this._countdown_bg.active = !1, this._star_node.setPosition(m(0, 0, 0))), this._faceMoudle_panel.active = !1, this._selfInfo_panel.active = !0, this.other_panel.active = !1, B.cleanHeadNode(this.playerStats_userAvatar), this.playerStats_updateAvatar(this.playerStats_userAvatar, N.dataHandler.getUserData().headUrl, 0, !1);
            let e = this.gameSceneInstance.gameNode.getChildByName("bighead");
            B.cleanHeadNode(e.getChildByName("headNode")), B.setBigCircleSprite(e.getChildByName("headNode"), N.dataHandler.getUserData().headUrl, 0, !1, 0), this.setNameAndID(this.roleName_text, N.dataHandler.getUserData().nick_name, this.getUserId())
        }
        resetPos() {
            this.all_panel.setPosition(this.all_panel.getPosition().x, 36), this._vip_panel.setPosition(this._vip_panel.getPosition().x, -317), this._selfInfo_panel.setPosition(this._selfInfo_panel.getPosition().x, -478), this._mic_panel.setPosition(this._mic_panel.getPosition().x, -700), this._other_info_panel.setPosition(this._other_info_panel.getPosition().x, 135), this.other_panel.setPosition(this.other_panel.getPosition().x, -294), this._interaction_panel.setPosition(this._interaction_panel.getPosition().x, -3), this._panelbg.setPosition(this._panelbg.getPosition().x, 0)
        }
        showOtherPanel(t) {
            this._certification_sp.setPosition(-128, 478), this._signature_panel.setPosition(-176, 398), this.adaptOtherWidget(), this.setLikeNodeActive(!1), this._friend_node.active = !0, this._signature_button.active = !1, this._mic_panel.active = !1, this._signature_editbox.getComponent(c).enabled = !1;
            let e = !1;
            for (let i = 0; i < t.NotDisturbUids.length; i++)
                if (this.getUserId() == t.NotDisturbUids[i]) {
                    e = !0;
                    break
                } if (1 == e ? this.DisturbOrNot(1, t.playerid) : this.DisturbOrNot(2, t.playerid), 1 == t.identity) this._certification_sp.setPosition(-136, 478), this._signature_panel.setPosition(-184, 398), this.adaptOtherStarWidget(), this._countdown_sp.active = !0, this._countdown_text.active = !0, this._countdown_bg.active = !0, b("Background", this._block_button).getComponent(p).opacity = 76.5, this._block_button.getComponent(r).enabled = !1, this._houseOwer_Panel.active || (this._panelbg_uiTransform.setContentSize(this._panelbg_uiTransform.contentSize.width, this.BG_H_other_star), this._panelbg.setPosition(this._panelbg.getPosition().x, -15), this.adaptWidget(this._panelbg, !0)), this.all_panel.setPosition(this.all_panel.getPosition().x, 105), this._other_info_panel.setPosition(this._other_info_panel.getPosition().x, 103), this.other_panel.setPosition(this.other_panel.getPosition().x, -328), this._interaction_panel.setPosition(this._interaction_panel.getPosition().x, -29), this._local_text.active = !1, this.setRoleRemarkTextActive(!1), this._remark_button.active = !1, this._remarkbtn_panel.active = !1;
            else {
                this._countdown_sp.active = !1, this._countdown_text.active = !1, this._countdown_bg.active = !1, b("Background", this._block_button).getComponent(p).opacity = 255, this._block_button.getComponent(r).enabled = !0, this._remark_button.active = !0, this._remarkbtn_panel.active = !0, this.setRoleRemarkTextActive(!0);
                let t = -1 != this.gameDataInstance.tRoomData.i32SelfSeat;
                0 == this._enterType ? (b("Background", this._block_button).getComponent(p).opacity = 255, this._block_button.getComponent(r).enabled = !0) : 1 == this._enterType && (t ? (b("Background", this._block_button).getComponent(p).opacity = 255, this._block_button.getComponent(r).enabled = !0) : (b("Background", this._block_button).getComponent(p).opacity = 76.5, this._block_button.getComponent(r).enabled = !1))
            }
            let i = -1 != this.gameDataInstance.tRoomData.i32SelfSeat;
            this.enableMessageButton(i && !this._allin_panel.active), this._faceMoudle_panel.active = !1, this._selfInfo_panel.active = !1, this.other_panel.active = N.tools.isThrowableAnimationDisplay(), this._interaction_panel.active = !0, this.playerStats_closeButton.active = !N.tools.isThrowableAnimationDisplay(), this._live_buttton.active = !1, this.setNameAndID(this.roleName_text, N.dataHandler.getUserData().nick_name, this.getUserId())
        }
        setHouseOwer(t) {
            this._houseOwer_Panel.active = t, t && this._houseOwer_Panel.setPosition(this.housePanel_pos.x, -710)
        }
        kickOutCallBack(t) {
            N.AudioMgr.playButtonSound("button_click"), console.log("kickOutCallBack"), N.gameNet.RequestForceStandup(this.gameDataInstance.tRoomData.u32RoomId, this.u32CurrentUid), this.node.active = !1, this._shade.active = !1
        }
        noSeatCallBack(t) {
            N.AudioMgr.playButtonSound("button_click"), console.log("noTalkCallBack"), N.gameNet.RequestProhibitSitdown(this.gameDataInstance.tRoomData.u32RoomId, this.u32CurrentUid, !this.gameDataInstance.tRoomData.isProhibit_sitdown(this.u32CurrentUid))
        }
        authenticationCallBack(t) {
            N.AudioMgr.playButtonSound("button_click"), this.gameDataInstance.tRoomData.pkRoomParam.rule_blind_enum < 8 || N.gameNet.RequestPhotoVerify(this.gameDataInstance.tRoomData.u32RoomId, this.u32CurrentUid)
        }
        updateProhibitButton(t) {
            this.gameDataInstance.tRoomData.isProhibit_sitdown(this.u32CurrentUid) ? this._prohibit_sitdown_button.getChildByName("Label").getComponent(o).string = N.config.getStringData("AllowSeat") : this._prohibit_sitdown_button.getChildByName("Label").getComponent(o).string = N.config.getStringData("ProhibitSeat")
        }
        onIsHavePriviledge(t) {
            this._kickOut_button.active = t, this._prohibit_sitdown_button.active = t, this.setHouseOwer(t), this._authentication_button.active = this.getUserId() == this.gameDataInstance.tRoomData.u32OwnerId, t ? (this._kickOut_button.setPosition(.3 * this._houseOwer_Panel.getComponent(g).contentSize.width, this._kickOut_button.position.y), this._prohibit_sitdown_button.setPosition(.7 * this._houseOwer_Panel.getComponent(g).contentSize.width, this._prohibit_sitdown_button.position.y), this._panelbg_uiTransform.setContentSize(this._panelbg_uiTransform.contentSize.width, this.BG_H_other + this.HouseBg_H), this._panelbg.setPosition(this._panelbg.getPosition().x, -75)) : (this._kickOut_button.setPosition(this.kickX, this._kickOut_button.position.y), this._prohibit_sitdown_button.setPosition(this.prohibitX, this._prohibit_sitdown_button.position.y), this.u32CurrentUid != this.getUserId() ? this._panelbg.getComponent(g).setContentSize(this._panelbg.getComponent(g).width, this.BG_H_other) : this._panelbg_uiTransform.setContentSize(this._panelbg_uiTransform.contentSize.width, this.BG_H_self)), this.adaptWidget(this._panelbg)
        }
        OnUpdate_remarks(t) {
            this.updateRemarkText(this.u32CurrentUid)
        }
        setButtonListToShow(t) {
            let e = N.dataHandler.getUserData().getRemarkData(this.u32CurrentUid);
            for (let i = 0; i < this.buttonList.length; i++) this.buttonList[i].getChildByName("button_bg").active = !1, 0 == e.nUid ? this.buttonList[0].getChildByName("button_bg").active = !0 : this.buttonList[e.nType].getChildByName("button_bg").active = !0, this.buttonList[i].active = t;
            t ? v(this.menu_arrow).to(0, {
                scale: m(this.menu_arrow.scale.x, -this.menu_arrow.scale.y, this.menu_arrow.scale.z)
            }).start() : v(this.menu_arrow).to(0, {
                scale: m(this.menu_arrow.scale.x, Math.abs(this.menu_arrow.scale.y), this.menu_arrow.scale.z)
            }).start()
        }
        showRootNode() {
            this.node.active = !0, this._shade.active = !0, B.cleanHeadNode(this.playerStats_userAvatar), this.runNodeAnimation(!0)
        }
        GetAddress(t, e) {
            if (this.gameDataInstance.tRoomData.u32OwnerId != this.getUserId()) return void(this._local_text.getComponent(o).string = N.config.getStringData("ServerErrorCode87"));
            if (t.f32Latitude == t.f32Longitude && this.roleName_text.getComponent(o).string == e) return void(this._local_text.getComponent(o).string = N.config.getStringData("UIEmulatorText"));
            let i = "";
            i = N.StringTools.formatC("%s%f,%f&language=zh_CN", "http://ditu.google.cn/maps/api/geocode/json?latlng=", t.f32Latitude, t.f32Longitude);
            var n = new XMLHttpRequest;
            n.onreadystatechange = function() {
                console.log("xhr.readyState  " + n.readyState), console.log("xhr.status  " + n.status), 4 === n.readyState && 200 === n.status && this.OnHttpTaskCompleted(n.response)
            }.bind(this), n.responseType = "arraybuffer", n.open("GET", i, !0), n.send()
        }
        OnHttpTaskCompleted(t) {
            t && (console.log(t), JSON.parse(t))
        }
        forbidChat(t) {
            this.setForbidChat(t), !t && this.isRegisteredPlayer() || this.enableMessageButton(!1)
        }
        setForbidChat(t) {
            if (!this.isRegisteredPlayer()) return this._allin_panel.active = !0, void(this._allin_label.string = "");
            this._allin_panel.active = t, this._allin_label.string = N.config.getStringData("roleInfo_other_panel_allin_panel_allin_label")
        }
        setNameAndID(t, e, i) {
            t.getComponent(o).string = e, this.userID_text.string = N.config.getStringData("id") + " " + i
        }
        NotDisturb(t) {
            if (!R.isInvalidRoomMultiWindow(t.gameData, null == this ? void 0 : this.node)) {
                if (this.DisturbOrNot(t.msg.operate, t.msg.whoId), 1 == t.msg.operate) {
                    let t = N.config.getStringData("Star_block_tips");
                    N.TT.showMsg(t, N.Enum.ToastType.ToastTypeInfo)
                } else if (2 == t.msg.operate) {
                    let t = N.config.getStringData("Star_block_cancel");
                    N.TT.showMsg(t, N.Enum.ToastType.ToastTypeInfo)
                }
                if (0 == this._enterType) {
                    if (1 == (1 == t.msg.operate)) this._player.NotDisturbUids.push(this.getUserId());
                    else
                        for (let t = 0; t < this._player.NotDisturbUids.length; t++)
                            if (this.getUserId() == this._player.NotDisturbUids[t]) {
                                this._player.NotDisturbUids.splice(t, 1);
                                break
                            } this.gameDataInstance.tRoomData.updateTablePlayer(t.msg.playerId, this._player)
                } else if (1 == this._enterType) {
                    if (1 == (1 == t.msg.operate)) this._obplayer.NotDisturbUids.push(this.getUserId());
                    else
                        for (let t = 0; t < this._obplayer.NotDisturbUids.length; t++)
                            if (this.getUserId() == this._obplayer.NotDisturbUids[t]) {
                                this._obplayer.NotDisturbUids.splice(t, 1);
                                break
                            } this.gameDataInstance.tRoomData.obPlayer.data = this._obplayer
                }
            }
        }
        updateBlockButton(t) {
            let e = b("Background", this._block_button).getComponent(S),
                i = b("Label", this._block_button).getComponent(o);
            t ? (i.string = N.config.getStringData("Star_unblock"), this.setSpriteFrame(e.node, "zh_CN/game/dzpoker/datacard/btn_block_off")) : (i.string = N.config.getStringData("Star_block"), this.setSpriteFrame(e.node, "zh_CN/game/dzpoker/datacard/btn_block_on"))
        }
        DisturbOrNot(t, e) {
            1 == t ? (this.updateBlockButton(!0), this._disturb = 2) : 2 == t && (this.updateBlockButton(!1), this._disturb = 1), this.updataRecondButtonTouch()
        }
        liveStatus(t) {
            if (R.isInvalidRoomMultiWindow(t.gameData, null == this ? void 0 : this.node)) return;
            const e = t.msg;
            e.uid == this.getUserId() && this._player && (this._player.liveStatus = e.liveStatus, this.gameDataInstance.tRoomData.updateTablePlayer(this._player.playerid, this._player), 1 == e.liveStatus ? (N.TT.showMsg(N.config.getStringData("Star_live_tips"), N.Enum.ToastType.ToastTypeInfo), this._liveStatus = 2, this.setSpriteFrame(b("Background", this._live_buttton), "zh_CN/game/dzpoker/datacard/btn_golive_off")) : 2 != e.liveStatus && 0 != e.liveStatus || (N.TT.showMsg(N.config.getStringData("Star_live_cancel"), N.Enum.ToastType.ToastTypeInfo), this._liveStatus = 1, this.setSpriteFrame(b("Background", this._live_buttton), "zh_CN/game/dzpoker/datacard/btn_golive_on")))
        }
        updataRecondButtonTouch() {
            1 != this._disturb || this.speakingVoice ? (b("Background", this._recond_button).getComponent(p).opacity = 76.5, this._recond_button.getComponent(r).enabled = !1) : (b("Background", this._recond_button).getComponent(p).opacity = 255, this._recond_button.getComponent(r).enabled = !0)
        }
        OnLike(t) {
            this.onLikeDisableBg(), this._self_like_text.getComponent(o).string = N.StringTools.formatC("%d", t.likedCount), this._other_like_text.getComponent(o).string = N.StringTools.formatC("%d", t.likedCount), this._like_button.getComponent(r).enabled = !1, this._like_label = N.resMgr.createLabel(this._like_button, "+1", this.getLikeFontSize(), this.getLikeFont()), this._like_label.active = !0, v(this._like_label).call((() => {
                this._like_label.active = !0
            })).to(.9, {
                position: m(0, 72, 0)
            }).call((() => {
                this._like_label.active = !1
            })).start()
        }
        onGetUserMarks(t) {
            if (t) {
                if (t.targetId != this.u32CurrentUid) return;
                t.marks.length > 0 ? (this._signature_text.getComponent(o).string = t.marks, this._signature_text_uiRenderer.color = (new u).fromHEX("#E9E1D1"), this._signature_text_uiOpacity.opacity = 255) : (this._signature_text.getComponent(o).string = N.config.getStringData("Star_signature"), this._signature_text_uiRenderer.color = (new u).fromHEX("#4C4C4C"), this._signature_text_uiOpacity.opacity = 255), this._BakSignalString = this._signature_text.getComponent(o).string, this._signature_text.getComponent(o).updateRenderData(!0);
                let e = N.tools.getActualSize(this._signature_text);
                this._signature_button.setPosition(this._signature_text.getPosition().x + e.width + 12, this._signature_button.getPosition().y), this._isAuthVerify = t.isAuthVerify, t.isAuthVerify ? this.setSpriteFrame(this._certification_sp, "zh_CN/game/dzpoker/datacard/icon_certification2") : this.setSpriteFrame(this._certification_sp, "zh_CN/game/dzpoker/datacard/icon_certification1")
            }
        }
        onModifyUserMarks(t) {
            if (t) {
                this._editbox_state = 0, N.TT.showMsg(N.config.getStringData("Star_edit_success"), N.Enum.ToastType.ToastTypeSuccess), t.marks.length > 0 ? (this._signature_text.getComponent(o).string = t.marks, this._signature_text_uiRenderer.color = (new u).fromHEX("#E9E1D1"), this._signature_text_uiOpacity.opacity = 255) : (this._signature_text.getComponent(o).string = N.config.getStringData("Star_signature"), this._signature_text_uiRenderer.color = (new u).fromHEX("#4C4C4C"), this._signature_text_uiOpacity.opacity = 255), this._BakSignalString = this._signature_text.getComponent(o).string, this._signature_text.getComponent(o).updateRenderData(!0);
                let e = N.tools.getActualSize(this._signature_text);
                this._signature_button.setPosition(this._signature_text.getPosition().x + e.width + 12, this._signature_button.getPosition().y), this._signature_editbox.active = !1, this._signature_sure_button.active = !1, this._signature_text.active = !0, this._signature_button.active = !0
            }
        }
        onTextChanged() {
            let t = this._signature_editbox.getComponent(c).string.trim(),
                e = this._signature_sure_button.getChildByName("Background");
            this._BakSignalString == t || t.length <= 0 && this._BakSignalString === N.config.getStringData("Star_signature") ? (this._signature_sure_button.getComponent(r).interactable = !1, e.getComponent(d).color = D(76, 76, 76)) : (this._signature_sure_button.getComponent(r).interactable = !0, e.getComponent(d).color = D(255, 255, 255)), this.setSpriteFrame(b("Background", this._signature_sure_button), "zh_CN/game/dzpoker/datacard/btn_signature2"), this._signature_sure_button.getComponent(r).enabled = !0
        }
        onEditReturn() {
            x("return return return")
        }
        onEditDidEnded() {
            x("ended ended ended")
        }
        _onMicSwitch() {
            N.AudioMgr.playButtonSound("button_click");
            let t = this.gameDataInstance.tRoomData.GetTablePlayer(this.getUserId());
            if (t) {
                var e;
                let i = 1 == t.mikeMode ? 0 : 1;
                N.gameNet.requestMikeModeReq(null == (e = this.gameDataInstance) || null == (e = e.tRoomData) ? void 0 : e.u32RoomId, i)
            }
        }
        onMikeMode(t) {
            if (R.isInvalidRoomMultiWindow(t.gameData, null == this ? void 0 : this.node)) return;
            let e = this.gameDataInstance.tRoomData.GetTablePlayer(this.getUserId());
            e && this._setMicBtn(e.mikeMode)
        }
        _setMicBtn(t) {
            1 == t ? this.setSpriteFrame(this.btnSwitch.node, "zh_CN/game/dzpoker/datacard/btn_on") : this.setSpriteFrame(this.btnSwitch.node, "zh_CN/game/dzpoker/datacard/btn_off")
        }
        adaptSelfWidget() {
            this.setWidgetTop(this._gender_img, 85), this.setWidgetTop(this._certification_sp, 84), this.setWidgetTop(this._signature_panel, 211), this.setWidgetTop(this._countdown_bg, 268), this.setWidgetTop(this._countdown_sp, 276), this.setWidgetTop(this._countdown_text, 275.6), N.resMgr.adaptWidget(this._gender_img), N.resMgr.adaptWidget(this._certification_sp), N.resMgr.adaptWidget(this._signature_panel), N.resMgr.adaptWidget(this._countdown_bg), N.resMgr.adaptWidget(this._countdown_sp), N.resMgr.adaptWidget(this._countdown_text)
        }
        setWidgetTop(t, e) {
            if (!k(t, !0)) return;
            let i = t.getComponent(T);
            i && (i.top = e)
        }
        adaptOtherStarWidget() {
            this._gender_img.getComponent(T).top = 121, this._certification_sp.getComponent(T).top = 122, this._signature_panel.getComponent(T).top = 184, N.resMgr.adaptWidget(this._gender_img), N.resMgr.adaptWidget(this._certification_sp), N.resMgr.adaptWidget(this._signature_panel)
        }
        adaptSelfStarWidget() {
            this._gender_img.getComponent(T).top = 122, this._certification_sp.getComponent(T).top = 123, this._signature_panel.getComponent(T).top = 178, 1 == this._enterType || (this._countdown_bg.getComponent(T).top = 297, this._countdown_sp.getComponent(T).top = 307, this._countdown_text.getComponent(T).top = 306), N.resMgr.adaptWidget(this._gender_img), N.resMgr.adaptWidget(this._certification_sp), N.resMgr.adaptWidget(this._signature_panel), N.resMgr.adaptWidget(this._countdown_bg), N.resMgr.adaptWidget(this._countdown_sp), N.resMgr.adaptWidget(this._countdown_text)
        }
        adaptOtherWidget() {
            var t, e, i, n, a, s, o, _, r;
            this._updateWidgetTop(null == (t = this._gender_img) ? void 0 : t.getComponent(T), 101), this._updateWidgetTop(null == (e = this._certification_sp) ? void 0 : e.getComponent(T), 100), this._updateWidgetTop(null == (i = this._signature_panel) ? void 0 : i.getComponent(T), 166), this._updateWidgetTop(null == (n = this._remark_text) ? void 0 : n.getComponent(T), 219), this._updateWidgetTop(null == (a = this._remarkbtn_panel) ? void 0 : a.getComponent(T), 207.8), this._updateWidgetTop(null == (s = this._remark_button) ? void 0 : s.getComponent(T), 213), this._updateWidgetTop(null == (o = this._countdown_bg) ? void 0 : o.getComponent(T), 276), this._updateWidgetTop(null == (_ = this._countdown_sp) ? void 0 : _.getComponent(T), 285), this._updateWidgetTop(null == (r = this._countdown_text) ? void 0 : r.getComponent(T), 284)
        }
        _updateWidgetTop(t, e) {
            t && (t.top = e, N.resMgr.adaptWidget(t.node))
        }
        getStarNode() {
            this._star_node = this.root.getChildByName("star_node")
        }
        getInteractionPanel() {
            this._interaction_panel = this.root.getChildByName("interaction_panel")
        }
        adaptWidget(t, e) {
            N.resMgr.adaptWidget(t, e)
        }
        setSpriteFrame(t, e) {
            N.resMgr.setSpriteFrame(t, e)
        }
        runNodeAnimation(t) {
            let e = t ? this.playerStats_panel : this.node;
            e.setScale(m(.01, .01, .01)), v(e).delay(.05).call((() => {
                e.active = !0
            })).to(.15, {
                scale: m(1, 1, 1)
            }).start()
        }
        getNoteInputText() {
            return this._signInput_text.getComponent(c).string
        }
        setRoleRemarkTextActive(t) {
            this._remark_text.active = t
        }
        updateRemarkText(t) {
            let e = N.dataHandler.getUserData().getRemarkData(t);
            !e || e.sRemark.length <= 0 ? this._remark_text.getComponent(o).string = this.getDefaultNoteText() : this._remark_text.getComponent(o).string = e.sRemark, this._remark_text.getComponent(o).updateRenderData(!0), this.setRemarkButtonPosition(this._remark_text.getPosition().x + this._remark_text.getComponent(g).width + 15, this._remark_button.getPosition().y)
        }
        getDefaultNoteText() {
            return N.config.getStringData("UIroleInfoRemark")
        }
        updateLikes(t) {
            t ? (this._like_button.getComponent(r).enabled = !1, this.setSpriteFrame(b("Background", this._like_button), "zh_CN/game/dzpoker/datacard/btn_like_disable")) : (this._like_button.getComponent(r).enabled = !0, this.setSpriteFrame(b("Background", this._like_button), "zh_CN/game/dzpoker/datacard/btn_like_enable"))
        }
        updateLikesText() {
            this._self_like_text.getComponent(o).string = N.StringTools.formatC("%d", N.dataHandler.getUserData().pokerdata.liked_count), this._other_like_text.getComponent(o).string = N.StringTools.formatC("%d", N.dataHandler.getUserData().pokerdata.liked_count)
        }
        getLikeNodes() {
            this._like_node = this._panelbg.getChildByName("like_node"), this._self_like_text = this._like_node.getChildByName("like_num")
        }
        setLikeNodeActive(t) {
            this._like_node.active = t
        }
        onLikeDisableBg() {
            this.setSpriteFrame(b("Background", this._like_button), "zh_CN/game/dzpoker/datacard/btn_like_disable")
        }
        getLikeFont() {
            return N.resMgr.getLocalFontByName("arial")
        }
        getLikeFontSize() {
            return 42
        }
        enableMessageButton(t) {
            this._at_button.getComponent(r).enabled = t, b("Background", this._at_button).getComponent(p).opacity = t ? 255 : 76.5
        }
        playerStats_onLoad() {
            this.playerStats_closeButton.on(s.EventType.TOUCH_END, (t => {
                this.onClose(t)
            }))
        }
        playerStats_recetRoleInfo(t) {
            this.playerStats_levelHands.string = "", this.playerStats_totalHands.string = "", this.playerStats_vpip.string = "", this.playerStats_PFR.string = ""
        }
        playerStats_updateAvatar(t, e, i, n, a) {
            B.setCircleSprite(t, e, i, n, a)
        }
        playerStats_updatePokerData(t) {
            this._currentUserData = N.dataHandler.getUserData();
            const e = this._currentUserData.pokerdata;
            this.playerStats_levelHands.string = N.StringTools.formatC("%d", e.level_hands), this.playerStats_totalHands.string = N.StringTools.formatC("%d", e.Total_hand_card_count), this.playerStats_vpip.string = N.StringTools.formatC("%d", e.Vpip_rate) + "%", this.playerStats_PFR.string = N.StringTools.formatC("%d", e.Pfr_rate) + "%"
        }
    }).prototype, "faceItem", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(tt.prototype, "roleName_text", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(tt.prototype, "userID_panel", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(tt.prototype, "userID_text", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(tt.prototype, "giftPrice", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(tt.prototype, "root", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(tt.prototype, "other_panel", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(tt.prototype, "remark_panel", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(tt.prototype, "btnSwitch", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(tt.prototype, "gameSceneInstance", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(tt.prototype, "gameDataInstance", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(tt.prototype, "playerStats_panel", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(tt.prototype, "playerStats_userAvatar", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(tt.prototype, "playerStats_levelHands", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(tt.prototype, "playerStats_totalHands", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(tt.prototype, "playerStats_vpip", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(tt.prototype, "playerStats_PFR", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(tt.prototype, "playerStats_closeButton", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = tt)) || $));
    n._RF.pop()
}