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
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as S from "./GameReview.js";
import * as f from "./GameSceneInstance.js";
import * as C from "./Audit.js";
import * as T from "./CircleSprite.js";
import * as b from "./cv.js";
import * as w from "./PokerInfoItemNew.js";

function main() {
    var v, y, I, P, D, R, E, A;
    i._RF.push({}, "b607fy1siVL5Yub/BKSD9al", "PokerInfoNew", void 0);
    const {
        ccclass: L,
        property: k
    } = s;
    e("default", (v = k(o), y = k(o), I = k(o), L((R = t((D = class extends r {
        constructor(...e) {
            super(...e), n(this, "pokerInfoItem", R, this), n(this, "gameReview", E, this), this.msg = null, this.itemList = [], n(this, "prefab_report", A, this), this.alliceItemList = [], this.beginPosY = 0, this._isShowAudit = !1, this.backBtnClickFunc = null, this.scrolllHeigt = 1530
        }
        onLoad() {
            let e = a("scorellview/content", this.node);
            this.scrolllHeigt = e.getComponent(l).contentSize.height, this.registerMsg(), this.initLanguage(), this.node.on(g.TOUCH_END, (e => {
                e.propagationStopped = !0
            }), this)
        }
        start() {
            b.config.adaptSize([a("scorellview", this.node)])
        }
        onDestroy() {
            b.MessageCenter.unregister("responseRoomRecordSuccess", this.node), b.MessageCenter.unregister("show_Audit", this.node), b.MessageCenter.unregister(b.config.CHANGE_LANGUAGE, this.node)
        }
        registerMsg() {
            b.MessageCenter.register("responseRoomRecordSuccess", this.responseRoomRecordSuccess.bind(this), this.node), b.MessageCenter.register("show_Audit", this.showAudit.bind(this), this.node), b.MessageCenter.register(b.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node)
        }
        initLanguage() {
            b.StringTools.setLabelString(this.node, "title_text", "PokerInfo_title_text"), b.StringTools.setLabelString(this.node, "subtitle_text_2", "PokerInfo_subtitle_text_2"), b.StringTools.setLabelString(this.node, "subtitle_text_3", "PokerInfo_subtitle_text_3"), b.StringTools.setLabelString(this.node, "subtitle_text_4", "PokerInfo_subtitle_text_4"), b.StringTools.setLabelString(this.node, "insurance_title_text", "PokerInfo_scorellview_insurance_icon_insurance_title_text"), b.StringTools.setLabelString(a("scorellview/content/Panel_1", this.node), "hand_map_text", "DataView_data_panel_dataInfo_panel_records_title_txt"), b.StringTools.setLabelString(this.node, "scorellview/content/Panel_1/title", "DataView_data_panel_dataInfo_panel_detailPlayer_title_txt"), b.resMgr.setSpriteFrame(a("scorellview/content/Panel_1/dayu_img/Image_2", this.node), b.config.getLanguagePath("hall/recordView/fish_icon")), b.resMgr.setSpriteFrame(a("scorellview/content/Panel_1/fuhao_img/Image_2_0_0", this.node), b.config.getLanguagePath("hall/recordView/rich_icon"));
            let e = a("scorellview/content/Panel_1/line1", this.node),
                t = a("scorellview/content/Panel_1/line2", this.node),
                n = a("scorellview/content/Panel_1/title", this.node),
                i = b.resMgr.getLabelStringSize(n.getComponent(c)).width;
            e.getComponent(l).setContentSize(h(470 - i / 2, e.getComponent(l).height)), t.getComponent(l).setContentSize(h(470 - i / 2, t.getComponent(l).height))
        }
        responseRoomRecordSuccess(e) {
            f.isInvalidRoomMultiWindow(e.gameData, null == this ? void 0 : this.node) || this.initData(e.value)
        }
        onBtnBackClick() {
            b.AudioMgr.playButtonSound("back_button.mp3"), b.MessageCenter.send("show_mail_entrance"), this.backBtnClickFunc ? this.backBtnClickFunc() : (console.log("====> back: " + this.node.getComponent(l).anchorPoint + ", " + this.node.getPosition()), b.action.moveToAction(this.node, "TO_RIGHT", "OUT", "FAST", new u(.5 * b.config.WIDTH, .5 * b.config.HEIGHT), new u(1.5 * b.config.WIDTH, .5 * b.config.HEIGHT)))
        }
        initData(e) {
            this.msg = e, this.node.setSiblingIndex(b.Enum.ZORDER_TYPE.ZORDER_2), b.action.moveToAction(this.node, "TO_LEFT", "ENTER", b.Enum.action_FuncType.dt_FAST, new u(1.5 * b.config.WIDTH, .5 * b.config.HEIGHT), new u(.5 * b.config.WIDTH, .5 * b.config.HEIGHT)), a("day_text", this.node).getComponent(c).string = b.StringTools.formatTime(this.msg.create_time, b.Enum.eTimeType.Year_Month_Day) + " " + b.StringTools.formatTime(this.msg.create_time, b.Enum.eTimeType.Hour_Minute), a("allTotal_text", this.node).getComponent(c).string = this.msg.total_hand_count, a("mostBigPot_text", this.node).getComponent(c).string = b.StringTools.serverGoldToShowString(this.msg.max_port), a("totalBring", this.node).getComponent(c).string = b.StringTools.serverGoldToShowString(this.msg.room_total_buyin);
            let t = a("blindWordText", this.node),
                n = a("mangZhu_text", this.node);
            this.msg.room_param.game_mode == b.Enum.CreateGameMode.CreateGame_Mode_Normal ? (t.getComponent(c).string = b.config.getStringData("Cell0") + ":", n.getComponent(c).string = b.config.getblindString(this.msg.room_param.rule_blind_enum - 1)) : (t.getComponent(c).string = b.config.getStringData("Cell4") + ":", n.getComponent(c).string = b.StringTools.clientGoldByServer(this.msg.room_param.rule_ante_amount).toString()), t.setPosition(n.position.x - b.resMgr.getLabelStringSize(n.getComponent(c)).width - 10, t.position.y);
            let i = a("insurance_text", this.node);
            this.msg.insurace_winbet > 0 ? (i.getComponent(c).color = b.tools.getWinColor(), i.getComponent(c).string = "+" + b.StringTools.serverGoldToShowString(this.msg.insurace_winbet)) : 0 == this.msg.insurace_winbet ? (i.getComponent(c).color = new m(m.WHITE), i.getComponent(c).string = b.StringTools.serverGoldToShowString(this.msg.insurace_winbet)) : (i.getComponent(c).color = b.tools.getLoseColor(), i.getComponent(c).string = b.StringTools.serverGoldToShowString(this.msg.insurace_winbet));
            let o = a("scorellview/content", this.node),
                s = a("Panel_1/dayu_img/dayu_roleName", o).getComponent(c),
                r = a("Panel_1/mvp_img/mvpName", o).getComponent(c),
                g = a("Panel_1/fuhao_img/fuhaoName", o).getComponent(c),
                h = a("Panel_1/dayu_img/head", o),
                _ = a("Panel_1/mvp_img/head", o),
                p = a("Panel_1/fuhao_img/head", o);
            a("Panel_1", o);
            if (b.StringTools.cleanNodeArray(this.itemList), this.msg.buyins) {
                this.msg.buyins.sort((function(e, t) {
                    return t.WinBet - e.WinBet
                }));
                let e = [];
                b.StringTools.deepCopy(this.msg.buyins, e), e.sort((function(e, t) {
                    return t.TotalBuyin - e.TotalBuyin
                }));
                let t = this.msg.buyins[this.msg.buyins.length - 1].Playername;
                b.StringTools.getStrLen(t) > 14 ? s.fontSize = 24 : s.fontSize = 30, b.StringTools.setShrinkString(s.node, t, !0);
                let n = this.msg.buyins[0].Playername;
                b.StringTools.getStrLen(n) > 14 ? r.fontSize = 24 : r.fontSize = 30, b.StringTools.setShrinkString(r.node, n, !0);
                let i = e[0].Playername;
                b.StringTools.getStrLen(i) > 14 ? g.fontSize = 24 : g.fontSize = 30, b.StringTools.setShrinkString(g.node, i, !0), T.setCircleSprite(h, this.msg.buyins[this.msg.buyins.length - 1].PlayerHead, this.msg.buyins[this.msg.buyins.length - 1].plat, !1), T.setCircleSprite(_, this.msg.buyins[0].PlayerHead, this.msg.buyins[0].plat, !1), T.setCircleSprite(p, e[0].PlayerHead, e[0].plat, !1);
                for (let e = 0; e < this.msg.buyins.length; e++) {
                    let t = d(this.pokerInfoItem);
                    t.getComponent(w).setData(this.msg, e), t.setPosition(t.position.x, 176 * -(e + 1) - 600), o.addChild(t), this.itemList.push(t)
                }
            } else T.cleanHeadNode(h), T.cleanHeadNode(_), T.cleanHeadNode(p), T.setCircleSprite(h, "", 0, !1), T.setCircleSprite(_, "", 0, !1), T.setCircleSprite(p, "", 0, !1), s.getComponent(c).string = "", r.getComponent(c).string = "", g.getComponent(c).string = "";
            let S = 0;
            S = 600 + 176 * b.StringTools.getArrayLength(this.msg.buyins), S >= o.getComponent(l).contentSize.height ? o.getComponent(l).setContentSize(o.getComponent(l).contentSize.width, S) : o.getComponent(l).setContentSize(o.getComponent(l).contentSize.width, this.scrolllHeigt)
        }
        onBtnGameReviewClick(e) {
            var t;
            b.AudioMgr.playButtonSound("button_click.mp3");
            let n = S.getSinglePrefabInst(null == (t = f.getInstance(null == this ? void 0 : this.node)) ? void 0 : t.gameNode, this.gameReview);
            if (n) {
                let e = n.getComponent(S);
                e.setShowAudit(this._isShowAudit), e.autoShow(b.Enum.GameReviewDataType.EDST_RECORD)
            }
        }
        onBtnReturnClick(e) {
            b.AudioMgr.playButtonSound("back_button.mp3"), b.action.showAction(e.currentTarget.parent, b.action.eMoveActionDir.EMAD_TO_RIGHT, b.action.eMoveActionType.EMAT_FADE_OUT)
        }
        setShowAudit(e) {
            this._isShowAudit = e
        }
        showAudit(e) {
            var t, n, i;
            if (e.gameData) {
                if (f.isInvalidGameDataMultiWindow(null == (i = f.getInstance(null == this ? void 0 : this.node)) ? void 0 : i.gameData, e.gameData)) return
            } else if (f.isInvalidRoomUuidMultiWindow(e.room_uuid_js, null == (t = f.getInstance(null == this ? void 0 : this.node)) ? void 0 : t.gameData, e.game_uuid_js)) return;
            const o = (null == (n = f.getInstance(null == this ? void 0 : this.node)) ? void 0 : n.room.gameScene) || _.getScene(),
                s = C.getSinglePrefabInst(this.prefab_report, f.getInstance(null == this ? void 0 : this.node));
            if (p(s) && e.value) {
                s.getComponent(C).autoShow(o, f.getInstance(null == this ? void 0 : this.node), b.Enum.GameReviewDataType.EDST_RECORD, b.Enum.ZORDER_TYPE.ZORDER_TOP)
            }
        }
        isCanSeeAllianceResult(e) {
            for (let t = 0; t < b.StringTools.getArrayLength(this.msg.club_adminids); t++)
                if (e == this.msg.club_adminids[t]) return !0;
            return !1
        }
    }).prototype, "pokerInfoItem", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(D.prototype, "gameReview", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(D.prototype, "prefab_report", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = D)) || P));
    i._RF.pop()
}