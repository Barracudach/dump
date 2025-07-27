import * as g from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";
import * as c from "./DataView.js";
import * as _ from "./JackfruitReview.js";

function main() {
    var d;
    e._RF.push({}, "42e5a8xxx5CvY/UQqDS6bXX", "FightItem", void 0);
    const {
        ccclass: h
    } = s;
    t("default", h(d = class extends a {
        constructor(...t) {
            super(...t), this.msg = null, this.msgType = null, this.canClick = !0, this.bMttGame = !1, this.isJackfruit = !1, this.parent = null, this.thisJackfruitData = null
        }
        onLoad() {
            l.resMgr.adaptWidget(this.node, !0)
        }
        renderItem(t, e, a) {
            switch (this.msg = t, this.parent = a, this.msgType = e, e) {
                case "mtt":
                    this.bMttGame = !0, this.isJackfruit = !1;
                    break;
                case "jackfruit":
                    this.bMttGame = !1, this.isJackfruit = !0;
                    break;
                default:
                    this.bMttGame = !1, this.isJackfruit = !1
            }
            const s = n("box/main/data/title", this.node),
                c = n("box/main/type", this.node),
                _ = n("box/main/type/pokerTypes_text", this.node),
                d = n("box/main/fraction/text", this.node),
                h = n("box/main/type/splash_num_text", this.node).getComponent(o),
                f = n("box/main/type/splash_word_text", this.node).getComponent(o);
            n("box/main/data/meta/common", this.node).active = "common" === e, n("box/main/data/meta/mtt", this.node).active = "mtt" === e, n("box/main/data/meta/jackfruit", this.node).active = "jackfruit" === e;
            let u = 0,
                p = "";
            switch (e) {
                case "jackfruit": {
                    const {
                        recordTime: e,
                        ante: a,
                        playerCount: i,
                        netMargin: r
                    } = t;
                    this.thisJackfruitData = t, u = e, p = l.StringTools.formatTime(u, l.Enum.eTimeType.Month_Day);
                    const g = l.numFix.round(l.StringTools.clientGoldByServer(a), 2);
                    let m = l.config.getStringData("DataView_data_panel_fightInfo_panel_Jackfruit_level_1");
                    g < 1 ? m = l.config.getStringData("DataView_data_panel_fightInfo_panel_Jackfruit_level_1") : g >= 1 && g < 5 ? m = l.config.getStringData("DataView_data_panel_fightInfo_panel_Jackfruit_level_2") : g >= 5 && g < 50 ? m = l.config.getStringData("DataView_data_panel_fightInfo_panel_Jackfruit_level_3") : g >= 50 && (m = l.config.getStringData("DataView_data_panel_fightInfo_panel_Jackfruit_level_4")), s.getComponent(o).string = `${l.config.getStringData("DataView_gameType_panel_button_7_text")}-${m}`, n("box/main/data/meta/jackfruit/ante/text", this.node).getComponent(o).string = l.StringTools.numberToShowString(g), n("box/main/data/meta/jackfruit/people/text", this.node).getComponent(o).string = i, l.StringTools.setLabelValueAndColor(d, r), d.getComponent(o).fontSize = 42, h.node.active = !1, f.node.active = !1, l.resMgr.setSpriteFrame(c, l.config.getLanguagePath("hall/lobby/common_jackfruit")), n("box/header/time", this.node).active = !1;
                    break
                }
                case "mtt": {
                    const {
                        startingTime: e,
                        mttName: a,
                        numPlayers: i,
                        fee: r,
                        rank: _,
                        levelMode: b
                    } = t;
                    u = e, p = l.StringTools.formatTime(u, l.Enum.eTimeType.Month_Day);
                    let S = a.En;
                    switch (l.config.getCurrentLanguage()) {
                        case l.Enum.LANGUAGE_TYPE.zh_CN:
                            S = a.Ch;
                            break;
                        case l.Enum.LANGUAGE_TYPE.vi_VN:
                            S = a.Vn;
                            break;
                        case l.Enum.LANGUAGE_TYPE.th_TH:
                            S = a.Th;
                            break;
                        default:
                            S = a.En
                    }
                    s.getComponent(o).string = S, n("box/main/data/meta/mtt/people/text", this.node).getComponent(o).string = i, n("box/main/data/meta/mtt/money/text", this.node).getComponent(o).string = l.StringTools.numberToString(l.StringTools.clientGoldByServer(r));
                    const C = l.StringTools.formatC(l.config.getStringData("DataView_data_panel_dataInfo_panel_MTT_Rank_txt"), _);
                    d.getComponent(g).color = m(232, 216, 152), d.getComponent(o).string = C, d.getComponent(o).fontSize = 36;
                    const T = n("box/main/data/meta/mtt/type/text", this.node),
                        x = n("box/main/data/meta/mtt/type/icon", this.node),
                        v = n("box/main/data/meta/mtt/type/icon2", this.node);
                    0 == b ? (T.getComponent(o).string = l.config.getStringData("DataView_data_panel_dataInfo_panel_MTT_matchType_txt"), v.active = !1, x.active = !0) : (T.getComponent(o).string = l.config.getStringData("DataView_data_panel_dataInfo_panel_MTT_matchPlusType_txt"), v.active = !0, x.active = !1), h.node.active = !1, f.node.active = !1, l.resMgr.setSpriteFrame(c, l.config.getLanguagePath("hall/lobby/common_mtt")), n("box/header/time", this.node).active = !0;
                    break
                }
                default: {
                    const {
                        create_time: e,
                        room_param: a,
                        self_winbet: g,
                        gameid: m
                    } = t, {
                        player_count_max: b,
                        game_mode: S,
                        isCriticismField: C,
                        rule_blind_enum: T,
                        rule_ante_amount: x,
                        is_mirco: v,
                        IscalcIncomePerhand: D,
                        rule_time_limit: k,
                        game_name: y,
                        manual_created: M,
                        rule_switch_force_straddle: w
                    } = a;
                    u = e, p = l.StringTools.formatTime(u, l.Enum.eTimeType.Month_Day), M ? l.resMgr.getLabelStringSize(s.getComponent(o), y) : l.resMgr.getLabelStringSize(s.getComponent(o), l.tools.displayChineseName(y)), n("box/main/data/meta/common/people/text", this.node).getComponent(o).string = b, l.StringTools.setLabelValueAndColor(d, g), d.getComponent(o).fontSize = 42;
                    const G = n("box/main/data/meta/common/ante/text", this.node),
                        I = n("box/main/data/meta/common/time", this.node);
                    if (h.node.active = !1, f.node.active = !1, S == l.Enum.CreateGameMode.CreateGame_Mode_Normal) {
                        if (20 == m) l.resMgr.setSpriteFrame(c, "zh_CN/hall/lobby/common_aof"), I.active = !1, _.getComponent(o).string = l.config.getStringData("DataView_data_panel_dataInfo_panel_aofGame_button");
                        else if (60 == m) {
                            l.resMgr.setSpriteFrame(c, "zh_CN/hall/lobby/common_Splash"), I.active = !1, _.getComponent(o).string = l.config.getStringData("DataView_data_panel_dataInfo_panel_bet_button");
                            const t = l.StringTools.serverGoldToShowNumber(x),
                                e = t >= 1e3 ? l.StringTools.formatC("%sK", (t / 1e3).toString()) : t.toString();
                            let a = c.getComponent(i);
                            l.config.getCurrentLanguage() == l.Enum.LANGUAGE_TYPE.zh_CN ? (h.string = e.toString(), f.string = l.config.getStringData("FindItem_bet_text"), l.resMgr.getLabelStringSize(h, e.toString()), l.resMgr.getLabelStringSize(f, l.config.getStringData("FindItem_bet_text")), h.node.active = !0, f.node.active = !0, h.node.setPosition(r(h.node.getPosition().x, a.height / 2 + f.node.getComponent(i).height / 2 - 65, h.node.getPosition().z)), f.node.setPosition(r(f.node.getPosition().x, a.height / 2 - h.node.getComponent(i).width / 2 - 65, f.node.getPosition().z))) : (h.string = l.StringTools.formatC(l.config.getStringData("FindItem_bet_text"), e), h.node.active = !0, h.node.setPosition(r(h.node.getPosition().x, a.height / 2 - 65, h.node.getPosition().z)), f.node.active = !1)
                        } else {
                            const t = S == l.Enum.CreateGameMode.CreateGame_Mode_Short;
                            1 == v || D || t ? I.active = !1 : (I.active = !0, n("box/main/data/meta/common/time/text", this.node).getComponent(o).string = `${l.config.timeArr[k-1]}h`), _.getComponent(o).string = l.config.getStringData("DataView_data_panel_dataInfo_panel_normalGame_button"), m == l.Enum.GameId.Plo ? l.resMgr.setSpriteFrame(c, l.config.getLanguagePath("hall/lobby/common_omaha")) : 1 == C ? l.resMgr.setSpriteFrame(c, l.config.getLanguagePath("hall/lobby/common_baojiDezhou")) : l.resMgr.setSpriteFrame(c, l.config.getLanguagePath("hall/lobby/common_normalju"))
                        }
                        const t = l.config.getblindString(T - 1).split("/"),
                            e = Number(t[1]) >= 1e3 ? l.StringTools.formatC("%dk", Number(t[1]) / 1e3) : t[1],
                            a = Number(t[0]) >= 1e3 ? l.StringTools.formatC("%dk", Number(t[0]) / 1e3) : t[0];
                        if (1 === w) {
                            const n = Number(t[1]) >= 1e3 ? l.StringTools.formatC("%dk", 2 * Number(t[1]) / 1e3) : 2 * Number(t[1]);
                            G.getComponent(o).string = l.StringTools.formatC("%s/%s/%s", a, e, n)
                        } else G.getComponent(o).string = l.StringTools.formatC("%s/%s", a, e);
                        x && x > 0 && (G.getComponent(o).string = G.getComponent(o).string + l.StringTools.formatC("(%s)", l.StringTools.numToFloatString(x)))
                    } else if (S == l.Enum.CreateGameMode.CreateGame_Mode_Short) {
                        if (20 == m) I.active = !1, _.getComponent(o).string = l.config.getStringData("DataView_data_panel_dataInfo_panel_aofGameShort_button"), l.resMgr.setSpriteFrame(c, l.config.getLanguagePath("hall/lobby/common_aofshort"));
                        else if (60 == m) I.active = !1, _.getComponent(o).string = l.config.getStringData("DataView_data_panel_dataInfo_panel_bet_button"), l.resMgr.setSpriteFrame(c, l.config.getLanguagePath("hall/lobby/common_bet"));
                        else {
                            const t = S == l.Enum.CreateGameMode.CreateGame_Mode_Short;
                            1 == v || D || t ? I.active = !1 : (I.active = !0, n("box/main/data/meta/common/time/text", this.node).getComponent(o).string = `${l.config.timeArr[k-1]}h`), _.getComponent(o).string = l.config.getStringData("DataView_data_panel_dataInfo_panel_short_button"), m == l.Enum.GameId.Plo ? l.resMgr.setSpriteFrame(c, l.config.getLanguagePath("hall/lobby/common_omaha")) : 1 == C ? l.resMgr.setSpriteFrame(c, l.config.getLanguagePath("hall/lobby/common_baojiDezhouShort")) : l.resMgr.setSpriteFrame(c, l.config.getLanguagePath("hall/lobby/common_shortju"))
                        }
                        G.getComponent(o).string = l.StringTools.numberToShowString(l.numFix.round(l.StringTools.clientGoldByServer(x), 2))
                    }
                    l.roomManager.checkGameIsZoom(m) && (S == l.Enum.CreateGameMode.CreateGame_Mode_Normal ? l.resMgr.setSpriteFrame(c, l.config.getLanguagePath("hall/lobby/common_zoom")) : l.resMgr.setSpriteFrame(c, l.config.getLanguagePath("hall/lobby/common_zoomShort"))), n("box/header/time", this.node).active = !0;
                    break
                }
            }
            n("box/header/date", this.node).getComponent(o).string = p, n("box/header/time", this.node).getComponent(o).string = l.StringTools.formatTime(u, l.Enum.eTimeType.Hour_Minute)
        }
        onBtnItemClick(t) {
            if (this.canClick) {
                if (this.canClick = !1, this.scheduleOnce(function(t) {
                        this.canClick = !0
                    }.bind(this), 2), this.bMttGame) l.worldNet.RequestMttDetail(l.dataHandler.getUserData().getUserIdS(), this.msg.mttId);
                else if (this.isJackfruit) {
                    if (this.parent) {
                        if (this.parent.getComponent(c).jackfruitReviewPanel && this.thisJackfruitData) {
                            const {
                                jfId: t,
                                ante: e,
                                recordTime: a
                            } = this.thisJackfruitData;
                            l.httpHandler.requestJackfruitGameUUID(t, e, a, this.openJackfruitReview.bind(this))
                        }
                    }
                } else l.httpHandler.requestRoomRecord(this.msg.room_uuid_js);
                l.MessageCenter.send("hide_mail_entrance")
            }
        }
        openJackfruitReview(t) {
            const {
                ante: e
            } = this.thisJackfruitData, {
                gameUUidsJs: a
            } = t, n = this.parent.getComponent(c).jackfruitReviewPanel, o = l.numFix.round(l.StringTools.clientGoldByServer(e), 2), i = `${l.config.getStringData("DataView_gameType_panel_button_7_text")}-${l.config.getStringData("DataView_data_panel_fightInfo_panel_Jackfruit_ante")}${o}`;
            n.activeInHierarchy || (n.active = !0, n.getComponent(_).show(l.Enum.GameReviewDataType.EDST_RECORD, 0, a, i))
        }
    }) || d);
    e._RF.pop()
}