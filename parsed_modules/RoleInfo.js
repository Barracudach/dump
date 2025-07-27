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
import * as _ from "./cc.js";
import * as D from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as y from "./cc.js";
import * as v from "./cv.js";
import * as k from "./RoomData.js";
import * as I from "./CircleSprite.js";
import * as S from "./FaceItem.js";
import * as B from "./GameSceneInstance.js";
import * as N from "./GameSceneInstance.js";

function main() {
    var U, T, P, H, w, R, O, E;
    a._RF.push({}, "38165/EihlESaQQBU439vH9", "RoleInfo", void 0);
    const {
        ccclass: M,
        property: L
    } = o;
    t("default", (U = L(n), T = B(), P = B("GameDataInstance"), M((R = e((w = class extends s {
        constructor(...t) {
            super(...t), i(this, "faceItem", R, this), this._root = null, this._headPanel = null, this._headNode = null, this._bigheadPanel = null, this._bigheadNode = null, this._gender_img = null, this._roleName_text = null, this._role_remark_text = null, this._sign_text = null, this._local_text = null, this._voice_img = null, this._recond_button = null, this._playback_text = null, this.signInput_text = null, this._remark_button = null, this.remark_panel = null, this.all_panel = null, this._other_info_panel = null, this.menu_button = null, this.menu_text = null, this.menu_icon = null, this.menu_arrow = null, this.sure_button = null, this.cancle_button = null, this._total_text = null, this._ruchi_text = null, this._totalPoker_text = null, this._ruchiWin_text = null, this._shoushu_text = null, this._other_total_text = null, this._other_ruchi_text = null, this._other_totalPoker_text = null, this._other_ruchiWin_text = null, this._other_shoushu_text = null, this._vip_panel = null, this._panelbg = null, this._signInput_text = null, this._vipDataInfo_Panel = null, this._jiJin_text = null, this._fanPaiLv_text = null, this._tanPaiLv_text = null, this._3bet_text = null, this._prf_text = null, this._fanBei_text = null, this._tanPaiWin_text = null, this._cbet_text = null, this._jiJin_img = null, this._fanPaiLv_img = null, this._tanPaiLv_img = null, this._jiaZhu_img = null, this._touMangLv_img = null, this._fanBei_img = null, this._tanPaiWin_img = null, this._chiXuXiaZhu_img = null, this._nothing_panel = null, this._zhezhao = null, this._profretion_Button = null, this.noCheckReson_text = null, this._qustion_button = null, this._selfInfo_panel = null, this._totalFight_text = null, this._totalBring_text = null, this._avarge_text = null, this._avargebring_text = null, this._big_text = null, this._fight_text = null, this._houseOwer_Panel = null, this._other_panel = null, this._face_bg = null, this._kickOut_button = null, this.ng_Button = null, this._prohibit_sitdown_button = null, this._authentication_button = null, this._face_panel = null, this._faceTouch_panel = null, this._faceMoudle_panel = null, this.face_over_img = null, this._allin_panel = null, this.buttonList = [], this.kickX = 0, this.prohibitX = 0, this.u32CurrentUid = 0, this.opcityNum = 0, this.remark_click_type = 0, this.m_i32CurrPlayVoiceId = 0, this.m_pkTempHead = null, this._shade = null, this.canSendFace = !0, this.speakingVoice = !1, this.name_text_size = _(0, 0), this.BG_H_self = 910, this.BG_H_other = 826, this.HouseBg_H = 130, this.housePanel_pos = null, this._panelbgUITransform = null, i(this, "gameSceneInstance", O, this), i(this, "gameDataInstance", E, this)
        }
        onLoad() {
            this._panelbgUITransform = this._panelbg.getComponent(r), this._shade = v.action.createShieldLayer(this.node.getParent(), "shieldLayer-roleInfo", v.Enum.ZORDER_TYPE.ZORDER_SHADER, h.BLACK, 100, function(t) {
                t.propagationStopped = !0, this.node.active = !1, this._shade.active = !1
            }.bind(this)), this._shade.active = !1, this._root = this.node.getChildByName("root"), this._panelbg = this._root.getChildByName("panelbg"), this.opcityNum = 300, this.remark_click_type = 0, this.speakingVoice = !1, this._headPanel = this._root.getChildByName("head_panel"), this._headNode = this._headPanel.getChildByName("headNode");
            let t = this.gameSceneInstance.gameNode.getChildByName("bighead");
            this._headNode.on(l.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0
            }), this), t.on(l.EventType.TOUCH_END, (e => {
                e.propagationStopped = !0, t.active = !1, this.node.active = !0
            }), this), I.setCircleSprite(this._headNode, v.dataHandler.getUserData().headUrl), I.setBigCircleSprite(g("headNode", t), v.dataHandler.getUserData().headUrl, 0, !1, 0), this._gender_img = this._root.getChildByName("gender_img"), this._gender_img.active = v.appConfig.getRegistrationConfig().showGenderField, this._roleName_text = this._root.getChildByName("roleName_text"), this._role_remark_text = this._root.getChildByName("role_remark_text"), this._sign_text = this._root.getChildByName("sign_text"), this._local_text = this._root.getChildByName("local_text"), this._local_text.active = !1, this._sign_text.active = !1, this.name_text_size = this._roleName_text.getComponent(r).contentSize, this._recond_button = this._root.getChildByName("recond_button");
            let e = v.config.getLanguagePath("game/dzpoker/ui/game_playback1"),
                i = v.config.getLanguagePath("game/dzpoker/ui/game_playback2");
            v.resMgr.setButtonFrame(this._recond_button, e, i, e, e), this.remark_panel = this.node.getChildByName("remark_panel"), this.remark_panel.on(l.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0, this.remark_panel.active = !1
            })), g("Image_2", this.remark_panel).on(l.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0
            })), this._remark_button = this._root.getChildByName("remark_button"), this.menu_button = this.remark_panel.getChildByName("menu_button"), this.menu_text = this.menu_button.getChildByName("menu_text"), this.menu_icon = this.menu_button.getChildByName("menu_icon"), this.menu_arrow = this.menu_button.getChildByName("menu_arrow"), d(this.menu_arrow).by(0, {
                scale: m(this.menu_arrow.scale.x, -this.menu_arrow.scale.y, this.menu_arrow.scale.z)
            }).start(), this._signInput_text = this.remark_panel.getChildByName("signInput_text"), this._signInput_text.getComponent(p).string = v.config.getStringData("roleInfo_root_remark_panel_signInput_text"), this._signInput_text.getComponent(p).placeholder = v.config.getStringData("roleInfo_root_remark_panel_signInput_text");
            for (let t = 0; t < 6; t++) {
                let e = this.remark_panel.getChildByName(v.StringTools.formatC("remark_button_%d", t));
                e.setPosition(e.position.x, this.menu_button.position.y - (this.menu_button.getComponent(r).height - 5) * (t + 1)), e.active = !1, e.on(l.EventType.TOUCH_END, this.onClickRemarkButton, this), this.buttonList.push(e)
            }
            this.remark_panel.active = !1, this.sure_button = this.remark_panel.getChildByName("sure_button"), this.cancle_button = this.remark_panel.getChildByName("cancle_button"), this._vip_panel = this._root.getChildByName("vip_panel"), this.all_panel = this._root.getChildByName("all_panel"), this._other_info_panel = this._root.getChildByName("other_info_panel"), this._total_text = this.all_panel.getChildByName("total_text"), this._ruchi_text = this.all_panel.getChildByName("ruchi_text"), this._totalPoker_text = this.all_panel.getChildByName("totalPoker_text"), this._ruchiWin_text = this.all_panel.getChildByName("ruchiWin_text"), this._shoushu_text = this.all_panel.getChildByName("shoushu_text"), this._other_total_text = this._other_info_panel.getChildByName("total_text"), this._other_ruchi_text = this._other_info_panel.getChildByName("ruchi_text"), this._other_totalPoker_text = this._other_info_panel.getChildByName("totalPoker_text"), this._other_ruchiWin_text = this._other_info_panel.getChildByName("ruchiWin_text"), this._other_shoushu_text = this._other_info_panel.getChildByName("shoushu_text"), this._vipDataInfo_Panel = this._vip_panel.getChildByName("vipDataInfo_Panel"), this._jiJin_text = this._vipDataInfo_Panel.getChildByName("jiJin_text"), this._fanPaiLv_text = this._vipDataInfo_Panel.getChildByName("fanPaiLv_text"), this._tanPaiLv_text = this._vipDataInfo_Panel.getChildByName("tanPaiLv_text"), this._3bet_text = this._vipDataInfo_Panel.getChildByName("3bet_text"), this._prf_text = this._vipDataInfo_Panel.getChildByName("prf_text"), this._fanBei_text = this._vipDataInfo_Panel.getChildByName("fanBei_text"), this._tanPaiWin_text = this._vipDataInfo_Panel.getChildByName("tanPaiWin_text"), this._cbet_text = this._vipDataInfo_Panel.getChildByName("cbet_text"), this._jiJin_img = this._vipDataInfo_Panel.getChildByName("jiJin_img"), this._fanPaiLv_img = this._vipDataInfo_Panel.getChildByName("fanPaiLv_img"), this._fanPaiLv_img = this._vipDataInfo_Panel.getChildByName("tanPaiLv_img"), this._jiaZhu_img = this._vipDataInfo_Panel.getChildByName("jiaZhu_img"), this._touMangLv_img = this._vipDataInfo_Panel.getChildByName("touMangLv_img"), this._fanBei_img = this._vipDataInfo_Panel.getChildByName("fanBei_img"), this._tanPaiWin_img = this._vipDataInfo_Panel.getChildByName("tanPaiWin_img"), this._chiXuXiaZhu_img = this._vipDataInfo_Panel.getChildByName("chiXuXiaZhu_img"), this._nothing_panel = this._vip_panel.getChildByName("nothing_panel"), this._zhezhao = this._vip_panel.getChildByName("zhezhao"), this._profretion_Button = this._zhezhao.getChildByName("profretion_Button"), this.noCheckReson_text = this._profretion_Button.getChildByName("noCheckReson_text"), this._qustion_button = this._zhezhao.getChildByName("qustion_button"), this._selfInfo_panel = this._root.getChildByName("selfInfo_panel"), this._avarge_text = this._selfInfo_panel.getChildByName("avarge_text"), this._avargebring_text = this._selfInfo_panel.getChildByName("avargebring_text"), this._big_text = this._selfInfo_panel.getChildByName("big_text"), this._fight_text = this._selfInfo_panel.getChildByName("fight_text"), this._houseOwer_Panel = this._root.getChildByName("houseOwer_Panel"), this.housePanel_pos = this._houseOwer_Panel.getPosition(), this._other_panel = this.node.getChildByName("other_panel"), this._face_bg = this._other_panel.getChildByName("face_bg"), this._face_panel = this._other_panel.getChildByName("face_panel"), this._faceTouch_panel = this._other_panel.getChildByName("faceTouch_panel"), this._faceTouch_panel.pauseSystemEvents(!0), this._faceMoudle_panel = this._other_panel.getChildByName("faceMoudle_panel"), this._faceMoudle_panel.active = !1, this._allin_panel = this._other_panel.getChildByName("allin_panel"), this.face_over_img = this._faceMoudle_panel.getChildByName("face_over_img"), this._kickOut_button = this._houseOwer_Panel.getChildByName("kickOut_button"), this._prohibit_sitdown_button = this._houseOwer_Panel.getChildByName("prohibit_sitdown_button"), this._authentication_button = this._houseOwer_Panel.getChildByName("authentication_button"), this._authentication_button.active = !1, this._prohibit_sitdown_button.setPosition(m(this._authentication_button.position.x, this._authentication_button.position.y, this._prohibit_sitdown_button.position.z)), this.kickX = this._kickOut_button.position.x, this.prohibitX = this._prohibit_sitdown_button.position.x, this.gameDataInstance.tRoomData.pkRoomParam.rule_blind_enum < 8 ? (this._authentication_button.pauseSystemEvents(!0), this._authentication_button.getComponent(u).color = h.GRAY) : (this._authentication_button.pauseSystemEvents(!0), this._authentication_button.getComponent(u).color = h.WHITE);
            let a = this._vip_panel.getChildByName("text_bg"),
                n = this._vip_panel.getChildByName("Image_10"),
                o = a.getChildByName("vip_title_des_text_1"),
                s = a.getChildByName("vip_title_des_text_2"),
                _ = a.getChildByName("vip_title_des_text_3"),
                b = a.getChildByName("vip_title_des_text_6"),
                D = a.getChildByName("vip_title_des_text_7"),
                y = n.getChildByName("vip_title_text"),
                x = this.all_panel.getChildByName("title_des_text_1"),
                k = this.all_panel.getChildByName("title_des_text_2"),
                N = this.all_panel.getChildByName("title_des_text_3"),
                B = this.all_panel.getChildByName("title_des_text_4"),
                U = this.all_panel.getChildByName("title_des_text_5"),
                T = this._allin_panel.getChildByName("allin_label"),
                P = this._other_info_panel.getChildByName("title_des_text_1"),
                H = this._other_info_panel.getChildByName("title_des_text_2"),
                w = this._other_info_panel.getChildByName("title_des_text_3"),
                R = this._other_info_panel.getChildByName("title_des_text_4"),
                O = this._other_info_panel.getChildByName("title_des_text_5"),
                E = this._selfInfo_panel.getChildByName("info_title_text_3"),
                M = this._selfInfo_panel.getChildByName("info_title_text_4"),
                L = this._selfInfo_panel.getChildByName("info_title_text_5"),
                z = this._selfInfo_panel.getChildByName("info_title_text_6"),
                G = this._root.getChildByName("note_text"),
                A = this._root.getChildByName("sign_txt");
            this._root.getChildByName("Image_6_0_0").active = !1, A.active = !1;
            let F = this.remark_panel.getChildByName("label_text"),
                V = this.remark_panel.getChildByName("set_note_text"),
                W = this.remark_panel.getChildByName("remark_button_0").getChildByName("menu_text_0");
            o.getComponent(c).string = v.config.getStringData("roleInfo_root_vip_panel_vip_title_des_text_1"), s.getComponent(c).string = v.config.getStringData("roleInfo_root_vip_panel_vip_title_des_text_2"), _.getComponent(c).string = v.config.getStringData("roleInfo_root_vip_panel_vip_title_des_text_3"), b.getComponent(c).string = v.config.getStringData("roleInfo_root_vip_panel_vip_title_des_text_6"), D.getComponent(c).string = v.config.getStringData("roleInfo_root_vip_panel_vip_title_des_text_7"), x.getComponent(c).string = v.config.getStringData("roleInfo_root_title_des_text_1"), k.getComponent(c).string = v.config.getStringData("roleInfo_root_title_des_text_2"), N.getComponent(c).string = v.config.getStringData("roleInfo_root_title_des_text_3"), B.getComponent(c).string = v.config.getStringData("roleInfo_root_title_des_text_4"), U.getComponent(c).string = v.config.getStringData("roleInfo_root_title_des_text_5"), P.getComponent(c).string = v.config.getStringData("roleInfo_root_title_des_text_1"), H.getComponent(c).string = v.config.getStringData("roleInfo_root_title_des_text_2"), w.getComponent(c).string = v.config.getStringData("roleInfo_root_title_des_text_3"), R.getComponent(c).string = v.config.getStringData("roleInfo_root_title_des_text_4"), O.getComponent(c).string = v.config.getStringData("roleInfo_root_title_des_text_5"), T.getComponent(c).string = v.config.getStringData("roleInfo_other_panel_allin_panel_allin_label"), this.gameDataInstance.tRoomData.pkRoomParam.game_mode == v.Enum.CreateGameMode.CreateGame_Mode_Short ? E.getComponent(c).string = v.config.getStringData("roleInfo_root_selfInfo_panel_info_title_text_3_shot") : E.getComponent(c).string = v.config.getStringData("roleInfo_root_selfInfo_panel_info_title_text_3"), M.getComponent(c).string = v.config.getStringData("roleInfo_root_selfInfo_panel_info_title_text_4"), L.getComponent(c).string = v.config.getStringData("roleInfo_root_selfInfo_panel_info_title_text_5"), z.getComponent(c).string = v.config.getStringData("roleInfo_root_selfInfo_panel_info_title_text_6"), y.getComponent(c).string = v.config.getStringData("roleInfo_root_vip_panel_Image_10_vip_title_text"), this._local_text.getComponent(c).string = v.config.getStringData("roleInfo_root_local_text"), this.noCheckReson_text.getComponent(c).string = v.config.getStringData("HandCardMap_black_panel_profretion_Button_noCheckReson_text"), this._role_remark_text.getComponent(c).string = v.config.getStringData("roleInfo_root_role_remark_text"), G.getComponent(c).string = v.config.getStringData("roleInfo_root_note_text"), A.getComponent(c).string = v.config.getStringData("roleInfo_root_sign_text"), F.getComponent(c).string = v.config.getStringData("roleInfo_root_remark_panel_label_text"), V.getComponent(c).string = v.config.getStringData("roleInfo_root_remark_panel_set_note_text"), this.menu_text.getComponent(c).string = v.config.getStringData("roleInfo_root_remark_panel_menu_button_menu_text"), W.getComponent(c).string = v.config.getStringData("roleInfo_root_remark_panel_remark_button_0_menu_text_0"), this._kickOut_button.getChildByName("Label").getComponent(c).string = v.config.getStringData("roleInfo_root_houseOwer_Panel_kickOut_button"), this._prohibit_sitdown_button.getChildByName("Label").getComponent(c).string = v.config.getStringData("roleInfo_root_houseOwer_Panel_prohibit_sitdown_button"), this._authentication_button.getChildByName("Label").getComponent(c).string = v.config.getStringData("roleInfo_root_houseOwer_Panel_authentication_button"), this.sure_button.getChildByName("Label").getComponent(c).string = v.config.getStringData("roleInfo_root_remark_panel_sure_button"), this.cancle_button.getChildByName("Label").getComponent(c).string = v.config.getStringData("roleInfo_root_remark_panel_cancle_button"), v.config.getCurrentLanguage() != v.Enum.LANGUAGE_TYPE.zh_CN && v.config.getCurrentLanguage() != v.Enum.LANGUAGE_TYPE.zh_TW || (this._prohibit_sitdown_button.getChildByName("Label").getComponent(c).fontSize = 34, this._authentication_button.getChildByName("Label").getComponent(c).fontSize = 34), this._sign_text.setPosition(A.position.x + A.getComponent(r).width, this._sign_text.position.y);
            for (let t = 0; t < 12; t++) {
                let e = C(this.faceItem);
                e.getComponent(S).setData(t), t >= 6 ? e.setPosition(new f(145 * (t - 6) - 430, -320, 0)) : e.setPosition(new f(145 * t - 430, -155, 0)), this._face_panel.addChild(e)
            }
            this.addEvent(), this.setForbidChat(!1), v.MessageCenter.send("hide_bombInfoTips")
        }
        onDestroy() {
            v.MessageCenter.unregister("update_userPokerData", this.node), v.MessageCenter.unregister("on_address_update", this.node), v.MessageCenter.unregister("effet_call", this.node), v.MessageCenter.unregister("RecetRoleInfoView", this.node), v.MessageCenter.unregister("update_prohibit_button", this.node), v.MessageCenter.unregister("update_remarks", this.node), v.MessageCenter.unregister("isHavePriviledge", this.node), v.MessageCenter.unregister("forbid_chat", this.node), v.MessageCenter.unregister("on_play_voice", this.node), this.unschedule(this.Update)
        }
        doOpcity(t, e) {
            if (!t) return;
            let i = t.children;
            t == this._other_panel && t == this._face_bg || (t.getComponent(b).opacity = e);
            let a = t.children.length;
            for (let t = 0; t < a; t++) i[t] != this._other_panel && (i[t].getComponent(b).opacity = e, i[t].children.length > 0 && this.doOpcity(i[t], e))
        }
        addEvent() {
            this._panelbg.on(l.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0
            })), this.node.on(l.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0, this.node.active = !1, this._shade.active = !1
            })), this._face_bg.on(l.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0
            })), this._kickOut_button.on(l.EventType.TOUCH_END, this.kickOutCallBack, this), this._prohibit_sitdown_button.on(l.EventType.TOUCH_END, this.noSeatCallBack, this), this._authentication_button.on(l.EventType.TOUCH_END, this.authenticationCallBack, this), this._profretion_Button.on(l.EventType.TOUCH_END, this.profretionCallBack, this), this._qustion_button.on(l.EventType.TOUCH_END, this.qustionCallBack, this), this._recond_button.on(l.EventType.TOUCH_END, this.speak, this), this._remark_button.on(l.EventType.TOUCH_END, this.showRemarkPanel, this), this.sure_button.on(l.EventType.TOUCH_END, function(t) {
                v.AudioMgr.playButtonSound("button_click.mp3");
                let e = this._signInput_text.getComponent(p).string;
                D.os === D.OS.IOS && v.native.stringContainsEmoji(e) ? v.TT.showMsg(v.config.getStringData("UIRemarkTips"), v.Enum.ToastType.ToastTypeError) : v.StringTools.getStrLen(e) > 10 ? v.TT.showMsg(v.config.getStringData("EditBoxNickName"), v.Enum.ToastType.ToastTypeError) : (e = e.replace(/[\r\n]/g, ""), v.worldNet.RequestAddRemarks(this.u32CurrentUid, this.remark_click_type, e), t.propagationStopped = !0, this.remark_panel.active = !1)
            }.bind(this)), this.cancle_button.on(l.EventType.TOUCH_END, function(t) {
                v.AudioMgr.playButtonSound("button_click.mp3"), t.propagationStopped = !0, this.remark_panel.active = !1
            }.bind(this)), this.menu_button.on(l.EventType.TOUCH_END, function(t) {
                v.AudioMgr.playButtonSound("button_click.mp3"), t.propagationStopped = !0, this.setButtonListToShow(!this.buttonList[0].active)
            }.bind(this)), v.MessageCenter.register("update_userPokerData", this.updatePokerData.bind(this), this.node), v.MessageCenter.register("on_address_update", this.OnUpdateAddres.bind(this), this.node), v.MessageCenter.register("effet_call", this.doOpcityX.bind(this), this.node), v.MessageCenter.register("RecetRoleInfoView", this.recetRoleInfo.bind(this), this.node), v.MessageCenter.register("update_prohibit_button", this.updateProhibitButton.bind(this), this.node), v.MessageCenter.register("update_remarks", this.OnUpdate_remarks.bind(this), this.node), v.MessageCenter.register("isHavePriviledge", this.onIsHavePriviledge.bind(this), this.node), v.MessageCenter.register("forbid_chat", this.forbidChat.bind(this), this.node), v.MessageCenter.register("on_play_voice", this.speakOverFunc.bind(this), this.node)
        }
        updateMenuButton() {
            d(this.menu_arrow).by(0, {
                scale: m(this.menu_arrow.scale.x, -this.menu_arrow.scale.y, this.menu_arrow.scale.z)
            }).start(), 0 == this.remark_click_type ? (this.menu_text.active = !0, this.menu_icon.active = !1) : (this.menu_text.active = !1, this.menu_icon.active = !0, v.resMgr.setSpriteFrame(this.menu_icon, v.StringTools.formatC("zh_CN/game/dzpoker/ui/common_remark_icon%d", this.remark_click_type)))
        }
        showRemarkPanel() {
            v.AudioMgr.playButtonSound("button_click.mp3"), this.remark_panel.active = !0, this.sure_button.getComponent(y).interactable = !0, this.cancle_button.getComponent(y).interactable = !0;
            let t = v.dataHandler.getUserData().getRemarkData(this.u32CurrentUid);
            t || console.log("===> remark ="), this.remark_click_type = t.nType, v.StringTools.getArrayLength(t.sRemark) > 0 ? this._signInput_text.getComponent(p).string = t.sRemark : this._signInput_text.getComponent(p).string = "", 0 == t.nUid || 0 == t.nType ? (this.menu_text.active = !0, this.menu_icon.active = !1) : (this.menu_text.active = !1, this.menu_icon.active = !0, v.resMgr.setSpriteFrame(this.menu_icon, v.StringTools.formatC("zh_CN/game/dzpoker/ui/common_remark_icon%d", t.nType)))
        }
        onClickRemarkButton(t) {
            v.AudioMgr.playButtonSound("button_click.mp3"), t.propagationStopped = !0;
            let e = t.target;
            this.remark_click_type = v.Number(e.name.charAt(e.name.length - 1)), this.updateMenuButton(), this.setButtonListToShow(!1)
        }
        Update(t) {
            if (this.opcityNum = this.opcityNum - 1, this.opcityNum <= 150) return this.node.active = !1, this._shade.active = !1, this.opcityNum = 300, void this.unschedule(this.Update);
            let e = this.opcityNum >= 255 ? 255 : this.opcityNum;
            this.doOpcity(this._other_panel, e)
        }
        onTouchFacePanel(t) {
            if (!this.canSendFace) return t.propagationStopped = !0, void t.target.getParent().getComponent(S).setClick(!1);
            switch (t.target.getParent().getComponent(S).setClick(!0), t.type) {
                case l.EventType.TOUCH_START:
                    this._root.active = !1, this._shade.active = !1, this._face_bg.active = !0, this.doOpcity(this._other_panel, 255), this.unschedule(this.Update), this.opcityNum = 300;
                    break;
                case l.EventType.TOUCH_END:
                case l.EventType.TOUCH_CANCEL:
                    this.doOpcityX(null)
            }
        }
        speak(t) {
            if (console.log("speak"), t.type == l.EventType.TOUCH_END)
                for (let t = 0; t < this.gameDataInstance.tRoomData.kTablePlayerList.length; t++) {
                    let e = this.gameDataInstance.tRoomData.kTablePlayerList[t];
                    if (this.u32CurrentUid == e.playerid) {
                        if (1 == this.speakingVoice) return void console.log("speaking is now.");
                        if (this.speakingVoice = !0, e.last_voice.length > 0)
                            if (D.isNative && D.os == D.OS.IOS) {
                                v.native.StopPlay();
                                let t = new k;
                                t.kUrl = e.last_voice, t.kSender = this._roleName_text.getComponent(c).string, t.u32SeatId = e.seatid, v.native.PlayRoomVoice(t)
                            } else v.AudioMgr.stop(this.m_i32CurrPlayVoiceId), this.downloadVoice(e);
                        return
                    }
                }
        }
        speakOverFunc(t = null) {
            if (null == t) return void(this.speakingVoice = !1);
            let e = t.f32Time;
            this.scheduleOnce(function() {
                this.speakingVoice = !1
            }.bind(this), e)
        }
        downloadVoice(t) {
            let e = v.AudioMgr.getAudioID(t.last_voice),
                i = v.AudioMgr.getDuration(e);
            this.m_i32CurrPlayVoiceId = e;
            let a = new k,
                n = t.last_voice;
            if (-1 != n.indexOf("@")) {
                let t = n.split("@");
                a.kUrl = t[2]
            } else a.kUrl = t.last_voice;
            a.kSender = this._roleName_text.getComponent(c).string, a.f32Time = i > 10 ? 10 : i, a.u32SeatId = t.seatid, v.httpHandler.DoDownloadVoice(a, this.speakOverFunc.bind(this))
        }
        updateView(t) {
            this.canSendFace = !0, this.remark_panel.active = !1, this.unschedule(this.Update), this._root.active = !0, this._shade.active = !0, this.doOpcity(this._other_panel, 255), v.MessageCenter.send("FaceItem_canSendFace", this.canSendFace), this._face_bg.active = !1, this.gameDataInstance.tRoomData.pkRoomParam.game_mode, v.Enum.CreateGameMode.CreateGame_Mode_Short, this.setVipView(!0);
            let e = null,
                i = "";
            for (let a = 0; a < this.gameDataInstance.tRoomData.kTablePlayerList.length; a++) {
                let n = this.gameDataInstance.tRoomData.kTablePlayerList[a];
                if (n.seatid == t) {
                    this.u32CurrentUid = n.playerid, this.updateProhibitButton(null), e = n, this.gameDataInstance.tRoomData.isZoom() || this.gameDataInstance.tRoomData.u32GameID == v.Enum.GameId.Bet ? this._recond_button.active = !1 : this._recond_button.active = this.u32CurrentUid != v.dataHandler.getUserData().u32Uid, console.log("---------------------" + v.dataHandler.getUserData().u32Uid + "<" + this.gameDataInstance.tRoomData.u32OwnerId + "<" + this.u32CurrentUid), v.dataHandler.getUserData().u32Uid == this.gameDataInstance.tRoomData.u32OwnerId && this.u32CurrentUid != v.dataHandler.getUserData().u32Uid ? (this.setHouseOwer(!0), this._vip_panel.active = !1, this.all_panel.active = !1, this._other_info_panel.active = !0, this._panelbgUITransform.setContentSize(this._panelbgUITransform.width, this.BG_H_other + this.HouseBg_H)) : v.dataHandler.getUserData().u32Uid != this.gameDataInstance.tRoomData.u32OwnerId && this.u32CurrentUid != v.dataHandler.getUserData().u32Uid ? (this.setHouseOwer(!1), this._vip_panel.active = !1, this.all_panel.active = !1, this._other_info_panel.active = !0, this._panelbgUITransform.setContentSize(this._panelbgUITransform.width, this.BG_H_other)) : (this.setHouseOwer(!1), this._vip_panel.active = !0, this.all_panel.active = !0, this._other_info_panel.active = !1, this._panelbgUITransform.setContentSize(this._panelbgUITransform.width, this.BG_H_self)), v.dataHandler.getUserData().u32Uid == this.u32CurrentUid ? this.showSelfPanel() : this.showOtherPanel();
                    let t = this.gameSceneInstance.room.gameScene.getChildByName("bighead");
                    I.setCircleSprite(this._headNode, n.headurl, n.plat, !1), I.setBigCircleSprite(g("headNode", t), n.headurl, n.plat, !1, 0), i = this.gameDataInstance.tRoomData.u32OwnerId == v.dataHandler.getUserData().u32Uid ? v.StringTools.formatC("(ID:%d)", n.playerid) : "";
                    let a = v.dataHandler.getUserData().getRemarkData(n.playerid);
                    !a || a.sRemark.length <= 0 ? this._role_remark_text.getComponent(c).string = v.config.getStringData("UIroleInfoRemark") : this._role_remark_text.getComponent(c).string = a.sRemark, this.setNameAndID(this._roleName_text, n.name, i), this._local_text.getComponent(c).string = v.config.getStringData("ToastMessage8");
                    let o = {};
                    o.f32Latitude = n.position.latitude, o.f32Longitude = n.position.longtitude, this.GetAddress(o, this._roleName_text.getComponent(c).string), this._sign_text.getComponent(c).string = n.marks, n.playerid != v.dataHandler.getUserData().u32Uid ? v.httpHandler.GetPubliceData(this.gameDataInstance, n.playerid, n.identity) : v.httpHandler.requestInGameUserData(this.gameDataInstance, n.identity), 1 != n.gender ? v.resMgr.setSpriteFrame(this._gender_img, "zh_CN/game/dzpoker/common/girl") : v.resMgr.setSpriteFrame(this._gender_img, "zh_CN/game/dzpoker/common/boy");
                    break
                }
            }
            v.dataHandler.getUserData().u32Uid != this.gameDataInstance.tRoomData.u32OwnerId && this.gameDataInstance.tGameData.isHavePriviledge(v.dataHandler.getUserData().u32Uid) && this.u32CurrentUid != v.dataHandler.getUserData().u32Uid && (e && (i = v.StringTools.formatC("(ID:%d)", e.playerid()), this.setNameAndID(this._roleName_text, e.name(), i)), v.gameNet.RequestCheckAllianceRoomPriviledge(this.u32CurrentUid, this.gameDataInstance.tRoomData.u32RoomId))
        }
        doOpcityX(t) {
            N.isInvalidRoomMultiWindow(t.gameData, null == this ? void 0 : this.node) || (this._root.active = !1, this._shade.active = !1, this._face_bg.active = !0, this.doOpcity(this._other_panel, 255), this.unschedule(this.Update), this.opcityNum = 300, this.schedule(this.Update, 0))
        }
        OnUpdateAddres(t) {
            this.gameDataInstance.tRoomData.u32OwnerId == v.dataHandler.getUserData().u32Uid && (this._local_text.getComponent(c).string = "")
        }
        recetRoleInfo(t) {
            this._total_text.getComponent(c).string = v.StringTools.formatC("%d", 0), this._totalPoker_text.getComponent(c).string = v.StringTools.formatC("%d", 0), this._ruchi_text.getComponent(c).string = v.StringTools.formatC("%d", 0) + "%", this._ruchiWin_text.getComponent(c).string = v.StringTools.formatC("%d", 0) + "%", this._other_total_text.getComponent(c).string = v.StringTools.formatC("%d", 0), this._other_totalPoker_text.getComponent(c).string = v.StringTools.formatC("%d", 0), this._other_ruchi_text.getComponent(c).string = v.StringTools.formatC("%d", 0) + "%", this._other_ruchiWin_text.getComponent(c).string = v.StringTools.formatC("%d", 0) + "%", this._avargebring_text.getComponent(c).string = v.StringTools.formatC("%d", 0), this._avarge_text.getComponent(c).string = v.StringTools.formatC("%d", 0), this._big_text.getComponent(c).string = v.StringTools.formatC("%d", 0), this._fight_text.getComponent(c).string = v.StringTools.formatC("%d", 0), this._jiJin_text.getComponent(c).string = v.StringTools.formatC("%d", 0), this._fanPaiLv_text.getComponent(c).string = v.StringTools.formatC("%d", 0) + "%", this._tanPaiLv_text.getComponent(c).string = v.StringTools.formatC("%d", 0) + "%", this._3bet_text.getComponent(c).string = v.StringTools.formatC("%d", 0) + "%", this._prf_text.getComponent(c).string = v.StringTools.formatC("%d", 0) + "%", this._fanBei_text.getComponent(c).string = v.StringTools.formatC("%d", 0) + "%", this._tanPaiWin_text.getComponent(c).string = v.StringTools.formatC("%d", 0) + "%", this._cbet_text.getComponent(c).string = v.StringTools.formatC("%d", 0) + "%"
        }
        updatePokerData(t) {
            if (t.gameDataInstance !== this.gameDataInstance) return;
            this._total_text.getComponent(c).string = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.Total_hand_card_count), this._totalPoker_text.getComponent(c).string = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.Total_end_room_count), this._ruchi_text.getComponent(c).string = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.Enter_rate) + "%", this._ruchiWin_text.getComponent(c).string = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.Win_rate) + "%", this._shoushu_text.getComponent(c).string = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.level_hands), this._other_total_text.getComponent(c).string = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.Total_hand_card_count), this._other_totalPoker_text.getComponent(c).string = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.Total_end_room_count), this._other_ruchi_text.getComponent(c).string = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.Enter_rate) + "%", this._other_ruchiWin_text.getComponent(c).string = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.Win_rate) + "%", this._other_shoushu_text.getComponent(c).string = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.level_hands), this._avargebring_text.getComponent(c).string = v.StringTools.numToFloatString(v.dataHandler.getUserData().pokerdata.Buyin_average), this._avarge_text.getComponent(c).string = v.StringTools.numToFloatString(v.dataHandler.getUserData().pokerdata.Fight_average), this._big_text.getComponent(c).string = v.StringTools.numToFloatString(v.dataHandler.getUserData().pokerdata.Bb100), this._fight_text.getComponent(c).string = v.StringTools.numToFloatString(v.dataHandler.getUserData().pokerdata.Fight_100), this._jiJin_text.getComponent(c).string = v.StringTools.formatC("%0.1f", v.dataHandler.getUserData().pokerdata.Af_rate / 100), this._fanPaiLv_text.getComponent(c).string = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.Etf_rate) + "%", this._tanPaiLv_text.getComponent(c).string = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.Wtsd_rate) + "%", this._3bet_text.getComponent(c).string = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.Rate_3bet) + "%";
            let e = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.Pfr_rate) + "%";
            this._prf_text.getComponent(c).string = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.Vpip_rate) + "%/" + e, this._fanBei_text.getComponent(c).string = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.Wsf_rate) + "%", this._tanPaiWin_text.getComponent(c).string = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.Wsd_rate) + "%", this._cbet_text.getComponent(c).string = v.StringTools.formatC("%d", v.dataHandler.getUserData().pokerdata.Cbet_rate) + "%"
        }
        setVipView(t) {
            t ? (this._nothing_panel.active = !1, this._zhezhao.active = !1, this._vipDataInfo_Panel.active = !0) : (this._nothing_panel.active = !0, this._zhezhao.active = !0, this._vipDataInfo_Panel.active = !1), this.gameDataInstance.tRoomData.pkRoomParam.game_mode == v.Enum.CreateGameMode.CreateGame_Mode_Short ? this.noCheckReson_text.getComponent(c).string = v.config.getStringData("RoleInfoSetShortModeTips") : this.noCheckReson_text.getComponent(c).string = v.config.getStringData("RoleInfoSetVipTips")
        }
        setShadeHide() {
            x(this._shade) && (this._shade.active = !1)
        }
        showObView() {
            this.canSendFace = !1;
            let t = this.gameDataInstance.tRoomData.obPlayer;
            this.u32CurrentUid = t.playerid, this.remark_panel.active = !1, this.recetRoleInfo(null), this.unschedule(this.Update), this._root.active = !0, this._shade.active = !0, this.doOpcity(this.m_pkTempHead, 255), this.gameDataInstance.tRoomData.pkRoomParam.game_mode == v.Enum.CreateGameMode.CreateGame_Mode_Short ? this.setVipView(!1) : this.setVipView(v.dataHandler.getUserData().u32CardType >= 2), this.gameDataInstance.tRoomData.isZoom() || this.gameDataInstance.tRoomData.u32GameID == v.Enum.GameId.Bet ? this._recond_button.active = !1 : this._recond_button.active = this.u32CurrentUid != v.dataHandler.getUserData().u32Uid, this._selfInfo_panel.active = !1, this._other_panel.active = !0, this._faceMoudle_panel.active = !0;
            this._other_panel.getComponent(b).opacity;
            this.updateProhibitButton(null);
            let e = this.gameSceneInstance.room.gameScene.getChildByName("bighead");
            I.setCircleSprite(this._headNode, t.headPath, t.plat), I.setBigCircleSprite(g("headNode", e), t.headPath, t.plat, !1, 0);
            let i = "",
                a = this.gameDataInstance.tRoomData.u32OwnerId == v.dataHandler.getUserData().u32Uid;
            a && this.u32CurrentUid != v.dataHandler.getUserData().u32Uid ? (this.setHouseOwer(!0), this._vip_panel.active = !1, this.all_panel.active = !1, this._other_info_panel.active = !0, this._panelbgUITransform.setContentSize(this._panelbgUITransform.width, this.BG_H_other + this.HouseBg_H)) : (this.setHouseOwer(!1), this._vip_panel.active = !1, this.all_panel.active = !1, this._other_info_panel.active = !0, this.u32CurrentUid != v.dataHandler.getUserData().u32Uid ? this._panelbgUITransform.setContentSize(this._panelbgUITransform.width, this.BG_H_other) : this._panelbgUITransform.setContentSize(this._panelbgUITransform.width, this.BG_H_self)), i = a ? v.StringTools.formatC("(ID:%d)", t.playerid) : "", this.setNameAndID(this._roleName_text, t.name, i);
            let n = v.dataHandler.getUserData().getRemarkData(t.playerid);
            this._role_remark_text.getComponent(c).string = n.sRemark;
            let o = t.data;
            this._local_text.getComponent(c).string = v.config.getStringData("ToastMessage8");
            let s = {};
            s.f32Latitude = o.position.latitude, s.f32Longitude = o.position.longtitude, this.GetAddress(s, this._roleName_text.getComponent(c).string), this._sign_text.getComponent(c).string = t.marks, 1 != o.gender ? v.resMgr.setSpriteFrame(this._gender_img, "zh_CN/game/dzpoker/common/girl") : v.resMgr.setSpriteFrame(this._gender_img, "zh_CN/game/dzpoker/common/boy"), o.playerid != v.dataHandler.getUserData().u32Uid ? v.httpHandler.GetPubliceData(this.gameDataInstance, o.playerid, o.identity) : v.httpHandler.requestInGameUserData(this.gameDataInstance, o.identity), v.dataHandler.getUserData().u32Uid != this.gameDataInstance.tRoomData.u32OwnerId && this.gameDataInstance.tGameData.isHavePriviledge(v.dataHandler.getUserData().u32Uid) && this.u32CurrentUid != v.dataHandler.getUserData().u32Uid && v.gameNet.RequestCheckAllianceRoomPriviledge(this.u32CurrentUid, this.gameDataInstance.tRoomData.u32RoomId), this.face_over_img.getComponent(b).opacity = 102, v.MessageCenter.send("FaceItem_canSendFace", this.canSendFace)
        }
        showSelfPanel() {
            this._faceMoudle_panel.active = !1, this._selfInfo_panel.active = !0, this._other_panel.active = !1, I.setCircleSprite(this._headNode, v.dataHandler.getUserData().headUrl);
            let t = this.gameSceneInstance.room.gameScene.getChildByName("bighead");
            I.setBigCircleSprite(g("headNode", t), v.dataHandler.getUserData().headUrl, 0, !1, 2);
            let e = "";
            e = this.gameDataInstance.tRoomData.u32OwnerId == v.dataHandler.getUserData().u32Uid ? v.StringTools.formatC("(ID:%d)", v.dataHandler.getUserData().u32Uid) : "", this.setNameAndID(this._roleName_text, v.dataHandler.getUserData().nick_name, e), this._sign_text.getComponent(c).string = v.dataHandler.getUserData().user_marks.toString()
        }
        showOtherPanel() {
            this._faceMoudle_panel.active = !1, this._selfInfo_panel.active = !1, this._other_panel.active = !0
        }
        setHouseOwer(t) {
            this._houseOwer_Panel.active = t, t ? this._houseOwer_Panel.setPosition(this.housePanel_pos.x, this.housePanel_pos.y + (this.BG_H_self - this.BG_H_other)) : this._houseOwer_Panel.setPosition(this.housePanel_pos)
        }
        kickOutCallBack(t) {
            v.AudioMgr.playButtonSound("button_click.mp3"), console.log("kickOutCallBack"), v.gameNet.RequestForceStandup(this.gameDataInstance.tRoomData.u32RoomId, this.u32CurrentUid), this.node.active = !1, this._shade.active = !1
        }
        noSeatCallBack(t) {
            v.AudioMgr.playButtonSound("button_click.mp3"), console.log("noTalkCallBack"), v.gameNet.RequestProhibitSitdown(this.gameDataInstance.tRoomData.u32RoomId, this.u32CurrentUid, !this.gameDataInstance.tRoomData.isProhibit_sitdown(this.u32CurrentUid))
        }
        authenticationCallBack(t) {
            v.AudioMgr.playButtonSound("button_click.mp3"), this.gameDataInstance.tRoomData.pkRoomParam.rule_blind_enum < 8 || v.gameNet.RequestPhotoVerify(this.gameDataInstance.tRoomData.u32RoomId, this.u32CurrentUid)
        }
        profretionCallBack(t) {
            v.AudioMgr.playButtonSound("button_click.mp3"), console.log("profretionCallBack"), this.gameDataInstance.tRoomData.pkRoomParam.game_mode != v.Enum.CreateGameMode.CreateGame_Mode_Short && v.MessageCenter.send("showgameshop")
        }
        qustionCallBack(t) {
            v.AudioMgr.playButtonSound("button_click.mp3"), console.log("qustionCallBack")
        }
        updateProhibitButton(t) {
            this.gameDataInstance.tRoomData.isProhibit_sitdown(this.u32CurrentUid) ? this._prohibit_sitdown_button.getChildByName("Label").getComponent(c).string = v.config.getStringData("AllowSeat") : this._prohibit_sitdown_button.getChildByName("Label").getComponent(c).string = v.config.getStringData("ProhibitSeat")
        }
        onIsHavePriviledge(t) {
            this._kickOut_button.active = t, this._prohibit_sitdown_button.active = t, this.setHouseOwer(t), this._authentication_button.active = v.dataHandler.getUserData().u32Uid == this.gameDataInstance.tRoomData.u32OwnerId, t ? (this._kickOut_button.setPosition(.3 * this._houseOwer_Panel.getComponent(r).width, this._kickOut_button.position.y), this._prohibit_sitdown_button.setPosition(.7 * this._houseOwer_Panel.getComponent(r).width, this._prohibit_sitdown_button.position.y), this._panelbgUITransform.setContentSize(this._panelbgUITransform.width, this.BG_H_other + this.HouseBg_H)) : (this._kickOut_button.setPosition(this.kickX, this._kickOut_button.position.y), this._prohibit_sitdown_button.setPosition(this.prohibitX, this._prohibit_sitdown_button.position.y), this.u32CurrentUid != v.dataHandler.getUserData().u32Uid ? this._panelbgUITransform.setContentSize(this._panelbgUITransform.width, this.BG_H_other) : this._panelbgUITransform.setContentSize(this._panelbgUITransform.width, this.BG_H_self))
        }
        OnUpdate_remarks(t) {
            let e = v.dataHandler.getUserData().getRemarkData(this.u32CurrentUid);
            e.sRemark.length <= 0 ? this._role_remark_text.getComponent(c).string = v.config.getStringData("UIroleInfoRemark") : this._role_remark_text.getComponent(c).string = e.sRemark
        }
        setButtonListToShow(t) {
            let e = v.dataHandler.getUserData().getRemarkData(this.u32CurrentUid);
            for (let i = 0; i < this.buttonList.length; i++) this.buttonList[i].getChildByName("button_bg").active = !1, 0 == e.nUid ? this.buttonList[0].getChildByName("button_bg").active = !0 : this.buttonList[e.nType].getChildByName("button_bg").active = !0, this.buttonList[i].active = t;
            t ? d(this.menu_arrow).to(0, {
                scale: m(this.menu_arrow.scale.x, this.menu_arrow.scale.y, this.menu_arrow.scale.z)
            }).start() : d(this.menu_arrow).to(0, {
                scale: m(this.menu_arrow.scale.x, -this.menu_arrow.scale.y, this.menu_arrow.scale.z)
            }).start()
        }
        showRootNode() {
            this.node.active = !0, this._shade.active = !0, this.node.setScale(m(.01, .01, .01)), I.cleanHeadNode(this._roleImgFrame_Img), d(this.node).delay(.05).to(.15, {
                scale: m(1, 1, 1)
            }).start()
        }
        GetAddress(t, e) {
            if (this.gameDataInstance.tRoomData.u32OwnerId != v.dataHandler.getUserData().u32Uid) return void(this._local_text.getComponent(c).string = v.config.getStringData("ServerErrorCode87"));
            if (t.f32Latitude == t.f32Longitude && this._roleName_text.getComponent(c).string == e) return void(this._local_text.getComponent(c).string = v.config.getStringData("UIEmulatorText"));
            let i = "";
            i = v.StringTools.formatC("%s%f,%f&language=zh_CN", "http://ditu.google.cn/maps/api/geocode/json?latlng=", t.f32Latitude, t.f32Longitude);
            var a = new XMLHttpRequest;
            a.onreadystatechange = function() {
                console.log("xhr.readyState  " + a.readyState), console.log("xhr.status  " + a.status), 4 === a.readyState && 200 === a.status && this.OnHttpTaskCompleted(a.response)
            }.bind(this), a.responseType = "arraybuffer", a.open("GET", i, !0), a.send()
        }
        OnHttpTaskCompleted(t) {
            t && (console.log(t), JSON.parse(t))
        }
        forbidChat(t) {
            this.setForbidChat(t)
        }
        setForbidChat(t) {
            this._allin_panel.active = t
        }
        setNameAndID(t, e, i) {
            let a = (new l).addComponent(c);
            a.fontSize = t.getComponent(c).fontSize;
            let n = v.resMgr.getLabelStringSize(a, i);
            t.getComponent(r).setContentSize(_(this.name_text_size.width - n.width, this.name_text_size.height)), v.StringTools.setShrinkString(t, e, !0), t.getComponent(r).setContentSize(this.name_text_size), t.getComponent(c).string = t.getComponent(c).string + i
        }
    }).prototype, "faceItem", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(w.prototype, "gameSceneInstance", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(w.prototype, "gameDataInstance", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = w)) || H));
    a._RF.pop()
}