import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as c from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as S from "./cv.js";
import * as C from "./HashMap.js";
import * as P from "./humanboy.mjs_cjs=&original=.js";
import * as x from "./HumanboyBaseSocket.js";
import * as w from "./HumanboyDataMgr.js";
import * as D from "./Enum.js";
import * as z from "./TweenControl.js";

function main() {
    var H, M, T, v, L, R, B, O, A, N, G, j, U, E, Z, k, I, K, V, Q, q, F, Y, J, W, X, $, tt, et, it, ot, nt, at, rt, st, ut, lt, _t, ht, gt, mt, pt, ct, bt, yt, dt, ft, St, Ct, Pt, xt, wt, Dt, zt, Ht, Mt, Tt, vt, Lt, Rt, Bt, Ot, At, Nt, Gt, jt, Ut, Et, Zt, kt, It, Kt, Vt, Qt, qt, Ft, Yt, Jt, Wt, Xt, $t, te, ee, ie;
    o._RF.push({}, "8f311nlfcNIDZBRvHdiPwo8", "HumanboyChart", void 0);
    var oe = function(t) {
        return t[t.PageMode_None = 0] = "PageMode_None", t[t.PageMode_Spade = 1] = "PageMode_Spade", t[t.PageMode_Heart = 2] = "PageMode_Heart", t[t.PageMode_Club = 3] = "PageMode_Club", t[t.PageMode_Diamond = 4] = "PageMode_Diamond", t[t.PageMode_Type = 5] = "PageMode_Type", t
    }(oe || {});
    const {
        ccclass: ne,
        property: ae
    } = l;
    t("HumanboyChart", (H = ae(n), M = ae(a), T = ae(a), v = ae(a), L = ae(a), R = ae(a), B = ae(a), O = ae(n), A = ae(n), N = ae(n), G = ae(n), j = ae(n), U = ae(n), E = ae(n), Z = ae(n), k = ae(n), I = ae(n), K = ae(n), V = ae(n), Q = ae(n), q = ae(n), F = ae(n), Y = ae(n), J = ae(n), W = ae(n), X = ae(n), $ = ae(n), tt = ae(n), et = ae(n), it = ae(n), ot = ae(n), nt = ae(n), at = ae(n), rt = ae(r), st = ae(r), ut = ae(s), lt = ae(a), _t = ae(u), ne((mt = e((gt = class extends _ {
        constructor(...t) {
            super(...t), i(this, "chartbg", mt, this), i(this, "btn_close", pt, this), i(this, "btn_1", ct, this), i(this, "btn_2", bt, this), i(this, "btn_3", yt, this), i(this, "btn_4", dt, this), i(this, "btn_5", ft, this), i(this, "_layout1", St, this), i(this, "_layout2", Ct, this), i(this, "_layout3", Pt, this), i(this, "_layout4", xt, this), i(this, "_layout5", wt, this), i(this, "_panelRecord", Dt, this), i(this, "_panelBiaoGe2", zt, this), i(this, "_zhuang_text", Ht, this), i(this, "_title_text", Mt, this), i(this, "tong_txt", Tt, this), i(this, "tong_num_txt", vt, this), i(this, "gaopai_txt", Lt, this), i(this, "gaopai_num_txt", Rt, this), i(this, "santiao_txt", Bt, this), i(this, "santiao_num_txt", Ot, this), i(this, "liangdui_txt", At, this), i(this, "liangdui_num_txt", Nt, this), i(this, "yidui_txt", Gt, this), i(this, "yidui_num_txt", jt, this), i(this, "shun_txt", Ut, this), i(this, "shun_num_txt", Et, this), i(this, "ths_txt", Zt, this), i(this, "ths_num_txt", kt, this), i(this, "_zhuang_bg", It, this), i(this, "title_bg", Kt, this), i(this, "_zhuang_img", Vt, this), i(this, "hollow", Qt, this), i(this, "dot", qt, this), i(this, "_buttonList", Ft, this), i(this, "_layoutList", Yt, this), i(this, "_recordNum", Jt, this), i(this, "_recordDots", Wt, this), i(this, "_oriRecordDotsPos", Xt, this), i(this, "_hollowDots", $t, this), this._mapPageMode = new C, this._curPage = oe.PageMode_Spade, i(this, "humanboy_chart_PLIST", te, this), this._atlas_hb_language = null, i(this, "des_btn", ee, this), i(this, "des_spr", ie, this)
        }
        onLoad() {
            this._atlas_hb_language = S.resMgr.getSpriteAtlas(S.config.getLanguagePath("game/humanboyPlist/language"));
            for (var t = 1; t < 6; t++) {
                let e = S.StringTools.formatC("Layout%d", t),
                    i = h(e, this.chartbg);
                i.name = String(t), this._layoutList.push(i)
            }
            this._layout1 = this._layoutList[0], this._layout2 = this._layoutList[1], this._layout3 = this._layoutList[2], this._layout4 = this._layoutList[3], this._layout5 = this._layoutList[4], this._title_text = h("5/title_bg/title_text", this.chartbg), this._zhuang_bg = h("5/zhuang_bg", this.chartbg), this._zhuang_text = h("5/zhuang_bg/zhuang_text", this.chartbg), this._zhuang_img = h("5/zhuang_img", this.chartbg), this.btn_close.node.on("click", function() {
                S.AudioMgr.playButtonSound("close"), this.des_spr.node.parent.active = !1, this.node.active = !1
            }.bind(this)), this.des_spr.node.parent.active = !1, this.node.getChildByName("zhezhao_panel").on(n.EventType.TOUCH_END, (t => {
                this.des_spr.node.parent.active = !1, t.propagationStopped = !0
            }), this), this.des_spr.node.on(n.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0
            }), this), this.des_btn.node.on(n.EventType.TOUCH_END, (t => {
                S.AudioMgr.playButtonSound("tab"), this.des_spr.node.parent.active = !0
            }), this), S.config.getCurrentLanguage() != w.zh_CN && S.resMgr.setSpriteFrame(this.des_spr.node, "en_US/game/cowboy/br_des"), this._mapPageMode.add(z.humanboy_proto.BetZoneOption.POS1, oe.PageMode_Spade), this._mapPageMode.add(z.humanboy_proto.BetZoneOption.POS2, oe.PageMode_Heart), this._mapPageMode.add(z.humanboy_proto.BetZoneOption.POS3, oe.PageMode_Club), this._mapPageMode.add(z.humanboy_proto.BetZoneOption.POS4, oe.PageMode_Diamond), this._mapPageMode.add(z.humanboy_proto.BetZoneOption.POS_LUCK_1, oe.PageMode_Type), this._mapPageMode.add(z.humanboy_proto.BetZoneOption.POS_LUCK_2, oe.PageMode_Type), this._mapPageMode.add(z.humanboy_proto.BetZoneOption.POS_LUCK_3, oe.PageMode_Type), this._mapPageMode.add(z.humanboy_proto.BetZoneOption.POS_LUCK_4, oe.PageMode_Type), this._mapPageMode.add(z.humanboy_proto.BetZoneOption.POS_LUCK_5, oe.PageMode_Type), this._mapPageMode.add(z.humanboy_proto.BetZoneOption.POS_LUCK_6, oe.PageMode_Type);
            for (t = 0; t < 4; t++) {
                var e = [];
                this._hollowDots[t] = e;
                for (var i = 0; i < 6; i++) {
                    e[i] = []
                }
            }
            for (t = 1; t < 6; t++) {
                e = [];
                this._recordDots[t] = e
            }
            for (let t = 1; t < 6; t++) {
                let e = S.StringTools.formatC("Button_%d", t),
                    i = h("title_img/" + e, this.chartbg);
                i.name = String(t), this._buttonList.push(i), i.on("click", ((t, e) => {
                    S.AudioMgr.playButtonSound("tab"), this._curPage = Number(t.target.name);
                    let i = this._layoutList[this._curPage - 1];
                    this._panelRecord = h("panelRecord", i), this.updateData()
                }), this)
            }
            this.cleanData();
            for (let t = 4; t > 0; t--) this.initRecord(t), this.initBiaoge2(t);
            this.updateData(), S.MessageCenter.register(S.config.CHANGE_LANGUAGE, this.onChangeLanguage.bind(this), this.node), S.MessageCenter.register("humanboy_start_history_move_anim", this.updateReusult.bind(this), this.node), S.MessageCenter.register("on_humanboy_trend_notify", this.onMsgGameTrend.bind(this), this.node), this.onChangeLanguage()
        }
        onMsgGameTrend() {
            this.updateChartList(this._curPage)
        }
        showView(t) {
            this.node.active = !0;
            var e = this;
            this._mapPageMode.forEach((function(i, o, n) {
                i == t && (e._curPage = o)
            })), P.getInstance().requestTrend(), this.displayPage(e._curPage)
        }
        updateChartList(t) {
            this._curPage = t, this.updateData()
        }
        updateReusult() {
            this.showHistoryMoveAnim(), P.getInstance().requestTrend()
        }
        displayPage(t) {
            switch (t) {
                case oe.PageMode_None:
                    S.resMgr.loadSpriteTextureByPlist(this._atlas_hb_language, this.title_bg.getComponent(u), "humanboy_title_spade"), this._layout1.active = !1, this._layout2.active = !1, this._layout3.active = !1, this._layout4.active = !1, this._layout5.active = !1, this.setQuestionView(!1);
                    break;
                case oe.PageMode_Spade:
                    S.resMgr.loadSpriteTextureByPlist(this._atlas_hb_language, this.title_bg.getComponent(u), "humanboy_title_spade"), this._layout1.active = !0, this._layout2.active = !1, this._layout3.active = !1, this._layout4.active = !1, this._layout5.active = !1, this.setQuestionView(!0);
                    break;
                case oe.PageMode_Heart:
                    S.resMgr.loadSpriteTextureByPlist(this._atlas_hb_language, this.title_bg.getComponent(u), "humanboy_title_heart"), this._layout1.active = !1, this._layout2.active = !0, this._layout3.active = !1, this._layout4.active = !1, this._layout5.active = !1, this.setQuestionView(!0);
                    break;
                case oe.PageMode_Club:
                    S.resMgr.loadSpriteTextureByPlist(this._atlas_hb_language, this.title_bg.getComponent(u), "humanboy_title_club"), this._layout1.active = !1, this._layout2.active = !1, this._layout3.active = !0, this._layout4.active = !1, this._layout5.active = !1, this.setQuestionView(!0);
                    break;
                case oe.PageMode_Diamond:
                    S.resMgr.loadSpriteTextureByPlist(this._atlas_hb_language, this.title_bg.getComponent(u), "humanboy_title_diamond"), this._layout1.active = !1, this._layout2.active = !1, this._layout3.active = !1, this._layout4.active = !0, this._layout5.active = !1, this.setQuestionView(!0);
                    break;
                case oe.PageMode_Type:
                    S.resMgr.loadSpriteTextureByPlist(this._atlas_hb_language, this.title_bg.getComponent(u), "humanboy_title_statistics"), this._layout1.active = !1, this._layout2.active = !1, this._layout3.active = !1, this._layout4.active = !1, this._layout5.active = !0, this.setQuestionView(!1)
            }
        }
        initRecord(t) {
            let e = t - 1;
            this._panelRecord = h("panelRecord", this._layoutList[e]);
            let i = h("recordDot", this._panelRecord);
            i.active = !1;
            let o = i.getPosition();
            this._recordDots[e] = [], this._oriRecordDotsPos = [];
            for (let t = 0; t < this._recordNum + 1; t++) {
                let i = g(this.dot);
                i.addOrGetComponent(m).setContentSize(p(50, 50)), this._panelRecord.addChild(i), i.active = !1, i.setPosition(c(o.x + 64.64 * t, o.y, o.z)), this._recordDots[e].push(i), this._oriRecordDotsPos.push(this._recordDots[e][t].getPosition())
            }
        }
        updateBiaoge2(t) {
            if (t < 5) {
                for (let e = 0; e < 6; e++)
                    for (let i = 0; i < 23; i++) D.stopAll(this._hollowDots[t - 1][e][i]), this._hollowDots[t - 1][e][i].active = !1;
                let e = t - 1;
                if (e >= 0 && e < x.getHumanboyRoom().TrendOption.length)
                    for (let e = 0; e < x.getHumanboyRoom().TrendOption[t - 1].road.length; e++) {
                        let i = x.getHumanboyRoom().TrendOption[t - 1].road[e];
                        for (let o = 0; o < i.roadRow.length; o++) {
                            if (this._hollowDots[t - 1][e][o].destroyAllChildren(), this._hollowDots[t - 1][e][o].removeAllChildren(), i.roadRow[o].result < 0 ? (this._hollowDots[t - 1][e][o].active = !0, this._hollowDots[t - 1][e][o].addOrGetComponent(b).opacity = 255, S.resMgr.loadSpriteTextureByPlist(this.humanboy_chart_PLIST, this._hollowDots[t - 1][e][o].getComponent(u), "humanboy_hollow_red")) : i.roadRow[o].result > 0 && (this._hollowDots[t - 1][e][o].active = !0, this._hollowDots[t - 1][e][o].addOrGetComponent(b).opacity = 255, S.resMgr.loadSpriteTextureByPlist(this.humanboy_chart_PLIST, this._hollowDots[t - 1][e][o].getComponent(u), "humanboy_hollow_gray")), i.roadRow[o].eqc > 0) {
                                let a = S.StringTools.formatC("%d", i.roadRow[o].eqc),
                                    r = new n("text");
                                r.name = "ping", r.addComponent(y), r.getComponent(y).string = a, r.getComponent(y).fontSize = 24, r.getComponent(y).color = d(23, 130, 82), r.setPosition(c(0, -11, 0)), this._hollowDots[t - 1][e][o].addChild(r)
                            }
                            if (e == x.getHumanboyRoom().TrendOption[t - 1].lastRow && o == x.getHumanboyRoom().TrendOption[t - 1].lastCol) {
                                if (0 == e && 0 == o) return;
                                D.blink(this._hollowDots[t - 1][e][o], 2, 2)
                            }
                        }
                    }
            }
        }
        hideHistoryMoveAnim() {
            for (let t = 0; t < this._recordDots[this._curPage].length; t++) this._recordDots[this._curPage - 1][t].stopAllActions(), this._recordDots[this._curPage - 1][t].setPosition(this._oriRecordDotsPos[t])
        }
        showHistoryMoveAnim() {
            if (this._curPage < 5) {
                let t = this._curPage - 1;
                if (x.getHumanboyRoom().lastResult.length > 0) {
                    let e = x.getHumanboyRoom().TrendOption[t].lastResult[x.getHumanboyRoom().TrendOption[t].lastResult.length - 1],
                        i = "humanboy_draw";
                    e == z.humanboy_proto.BetZoneOption.POS_LUCK_1 ? i = "humanboy_win" : e == z.humanboy_proto.BetZoneOption.POS_LUCK_2 && (i = "humanboy_lose"), S.resMgr.loadSpriteTextureByPlist(this._atlas_hb_language, this._recordDots[t][this._recordDots[t].length - 1].getComponent(u), i);
                    this._oriRecordDotsPos[0], this._oriRecordDotsPos[1];
                    for (let e = 0; e < this._recordDots[t].length; e++) e == this._recordDots[t].length - 1 && this.updateHistoryResults()
                }
            }
        }
        updateHistoryResults() {
            if (this._curPage < 5) {
                this.hideHistoryMoveAnim();
                let t = this._curPage - 1;
                if (t >= 0 && t < x.getHumanboyRoom().TrendOption.length) {
                    let e = x.getHumanboyRoom().TrendOption[t].lastResult.length;
                    for (let i = 0; i < this._recordNum; i++) {
                        let o = e - i - 1,
                            n = this._recordNum - i - 1;
                        if (o < 0) S.resMgr.loadSpriteTextureByPlist(this.humanboy_chart_PLIST, this._recordDots[t][n].getComponent(u), "humanboy_draw"), this._recordDots[t][n].active = !1;
                        else {
                            let e = x.getHumanboyRoom().TrendOption[t].lastResult[o],
                                i = "humanboy_draw";
                            e < 0 ? i = "humanboy_win" : e > 0 && (i = "humanboy_lose"), S.resMgr.loadSpriteTextureByPlist(this._atlas_hb_language, this._recordDots[t][n].getComponent(u), i), this._recordDots[t][n].active = !0
                        }
                    }
                }
            }
        }
        initBiaoge2(t) {
            this._panelBiaoGe2 = h("panelBiaoGe2", this._layoutList[t - 1]);
            let e = h("item_image", this._panelBiaoGe2),
                i = e.getPosition();
            e.active = !1;
            let o = f(56, -56);
            for (let e = 0; e < 6; e++)
                for (let n = 0; n < 23; n++) {
                    let a = g(this.hollow);
                    this._panelBiaoGe2.addChild(a), a.active = !1, a.setPosition(c(i.x + n * o.x, i.y + e * o.y, i.z)), this._hollowDots[t - 1][e].push(a)
                }
        }
        cleanData() {
            this.gaopai_num_txt.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_ju"), 0), this.yidui_num_txt.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_ju"), 0), this.liangdui_num_txt.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_ju"), 0), this.santiao_num_txt.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_ju"), 0), this.shun_num_txt.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_ju"), 0), this.ths_num_txt.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_ju"), 0), this.tong_num_txt.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_ju"), 0)
        }
        onChangeLanguage() {
            if (this.gaopai_txt.getComponent(y).string = S.config.getStringData("Humanboy_chart_type_high_card"), this.yidui_txt.getComponent(y).string = S.config.getStringData("Humanboy_chart_type_high_pairs"), this.liangdui_txt.getComponent(y).string = S.config.getStringData("Humanboy_chart_type_two_pairs"), this.santiao_txt.getComponent(y).string = S.config.getStringData("Humanboy_chart_type_three_of_a_kind"), this.shun_txt.getComponent(y).string = S.config.getStringData("Humanboy_chart_type_straight_flush"), this.ths_txt.getComponent(y).string = S.config.getStringData("Humanboy_chart_type_combine"), S.config.getCurrentLanguage() != S.Enum.LANGUAGE_TYPE.zh_CN) {
                this.gaopai_txt.getComponent(y).fontSize = 30, this.gaopai_num_txt.getComponent(y).fontSize = 30, this.yidui_txt.getComponent(y).fontSize = 30, this.yidui_num_txt.getComponent(y).fontSize = 30, this.liangdui_txt.getComponent(y).fontSize = 30, this.liangdui_num_txt.getComponent(y).fontSize = 30, this.santiao_txt.getComponent(y).fontSize = 30, this.santiao_num_txt.getComponent(y).fontSize = 30, this.shun_txt.getComponent(y).fontSize = 30, this.shun_num_txt.getComponent(y).fontSize = 30, this.ths_txt.getComponent(y).fontSize = 30, this.ths_num_txt.getComponent(y).fontSize = 30, this.tong_txt.getComponent(y).fontSize = 30, this.tong_num_txt.getComponent(y).fontSize = 30;
                let t = 6,
                    e = S.resMgr.getLabelStringSize(this.gaopai_txt.getComponent(y), S.config.getStringData("Humanboy_chart_type_high_card"));
                this.gaopai_num_txt.setPosition(this.gaopai_txt.getPosition().x + e.width + t, this.gaopai_num_txt.getPosition().y);
                let i = S.resMgr.getLabelStringSize(this.yidui_txt.getComponent(y), S.config.getStringData("Humanboy_chart_type_high_pairs"));
                this.yidui_num_txt.setPosition(this.yidui_txt.getPosition().x + i.width + t, this.yidui_num_txt.getPosition().y);
                let o = S.resMgr.getLabelStringSize(this.liangdui_txt.getComponent(y), S.config.getStringData("Humanboy_chart_type_two_pairs"));
                this.liangdui_num_txt.setPosition(this.liangdui_txt.getPosition().x + o.width + t, this.liangdui_num_txt.getPosition().y);
                let n = S.resMgr.getLabelStringSize(this.santiao_txt.getComponent(y), S.config.getStringData("Humanboy_chart_type_three_of_a_kind"));
                this.santiao_num_txt.setPosition(this.santiao_txt.getPosition().x + n.width + t, this.santiao_num_txt.getPosition().y), this.shun_num_txt.setPosition(this.shun_txt.getPosition().x + S.resMgr.getLabelStringSize(this.shun_txt.getComponent(y), S.config.getStringData("Humanboy_chart_type_straight_flush")).width + t, this.shun_num_txt.getPosition().y);
                let a = S.resMgr.getLabelStringSize(this.ths_txt.getComponent(y), S.config.getStringData("Humanboy_chart_type_combine"));
                this.ths_num_txt.setPosition(this.ths_txt.getPosition().x + a.width + t, this.ths_num_txt.getPosition().y);
                let r = S.resMgr.getLabelStringSize(this.tong_txt.getComponent(y), S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_tongchi")));
                this.tong_num_txt.setPosition(this.tong_txt.getPosition().x + r.width + t, this.tong_num_txt.getPosition().y)
            }
        }
        updateData() {
            this.updatePage(this._curPage), this.updateHistoryResults(), this.updateBiaoge2(this._curPage)
        }
        updatePage(t) {
            if (t < 5) {
                let e = h("panelStatistics", this._layoutList[t - 1]),
                    i = h("statistics_text", e),
                    o = h("win_text", e),
                    n = h("lose_text", e),
                    a = h("draw_text", e),
                    r = h("win_img", e),
                    s = h("lose_img", e),
                    l = h("draw_img", e);
                S.resMgr.loadSpriteTextureByPlist(this._atlas_hb_language, r.getComponent(u), "humanboy_win"), S.resMgr.loadSpriteTextureByPlist(this._atlas_hb_language, s.getComponent(u), "humanboy_lose"), S.resMgr.loadSpriteTextureByPlist(this._atlas_hb_language, l.getComponent(u), "humanboy_draw");
                let _ = t - 1;
                if (_ >= 0 && _ < x.getHumanboyRoom().TrendOption.length) {
                    let t = x.getHumanboyRoom().TrendOption[_].stats.capHandNum,
                        e = x.getHumanboyRoom().TrendOption[_].stats.win,
                        r = x.getHumanboyRoom().TrendOption[_].stats.lose,
                        s = x.getHumanboyRoom().TrendOption[_].stats.equal;
                    i.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_statistics"), t), o.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_win"), e), n.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_lose"), r), a.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_draw"), s)
                }
            } else {
                let t = x.getHumanboyRoom().handLevelStatistics.stats.gaoPai,
                    e = x.getHumanboyRoom().handLevelStatistics.stats.yuDui,
                    i = x.getHumanboyRoom().handLevelStatistics.stats.lianDui,
                    o = x.getHumanboyRoom().handLevelStatistics.stats.sanTiao,
                    n = x.getHumanboyRoom().handLevelStatistics.stats.shunZiAnd1,
                    a = x.getHumanboyRoom().handLevelStatistics.stats.huLuAnd3,
                    r = x.getHumanboyRoom().handLevelStatistics.stats.winAll;
                x.getHumanboyRoom().handLevelStatistics.stats.loseAll;
                this.gaopai_num_txt.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_ju"), t), this.yidui_num_txt.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_ju"), e), this.liangdui_num_txt.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_ju"), i), this.santiao_num_txt.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_ju"), o), this.shun_num_txt.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_ju"), n), this.ths_num_txt.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_ju"), a), this._title_text.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_max"), x.getHumanboyRoom().handLevelStatistics.stats.capHandNum), this._zhuang_text.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_des"), x.getHumanboyRoom().handLevelStatistics.stats.capHandNum), this.tong_txt.getComponent(y).string = S.config.getStringData("Humanboy_chart_type_tongchi"), this.tong_num_txt.getComponent(y).string = S.StringTools.formatC(S.config.getStringData("Humanboy_chart_type_ju"), r)
            }
            this.displayPage(t)
        }
        onDestroy() {
            S.MessageCenter.unregister(S.config.CHANGE_LANGUAGE, this.node), S.MessageCenter.unregister("humanboy_start_history_move_anim", this.node), S.MessageCenter.unregister("on_humanboy_trend_notify", this.node)
        }
        setQuestionView(t) {
            this.des_spr.node.parent.active = !1, this.des_btn.node.active = t
        }
    }).prototype, "chartbg", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(gt.prototype, "btn_close", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(gt.prototype, "btn_1", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(gt.prototype, "btn_2", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(gt.prototype, "btn_3", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(gt.prototype, "btn_4", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(gt.prototype, "btn_5", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(gt.prototype, "_layout1", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(gt.prototype, "_layout2", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(gt.prototype, "_layout3", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xt = e(gt.prototype, "_layout4", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(gt.prototype, "_layout5", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(gt.prototype, "_panelRecord", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = e(gt.prototype, "_panelBiaoGe2", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(gt.prototype, "_zhuang_text", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(gt.prototype, "_title_text", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(gt.prototype, "tong_txt", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(gt.prototype, "tong_num_txt", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(gt.prototype, "gaopai_txt", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(gt.prototype, "gaopai_num_txt", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(gt.prototype, "santiao_txt", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(gt.prototype, "santiao_num_txt", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = e(gt.prototype, "liangdui_txt", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(gt.prototype, "liangdui_num_txt", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(gt.prototype, "yidui_txt", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), jt = e(gt.prototype, "yidui_num_txt", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = e(gt.prototype, "shun_txt", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = e(gt.prototype, "shun_num_txt", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Zt = e(gt.prototype, "ths_txt", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(gt.prototype, "ths_num_txt", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(gt.prototype, "_zhuang_bg", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Kt = e(gt.prototype, "title_bg", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(gt.prototype, "_zhuang_img", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qt = e(gt.prototype, "hollow", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qt = e(gt.prototype, "dot", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = e(gt.prototype, "_buttonList", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Yt = e(gt.prototype, "_layoutList", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Jt = e(gt.prototype, "_recordNum", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 20
        }
    }), Wt = e(gt.prototype, "_recordDots", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new Array
        }
    }), Xt = e(gt.prototype, "_oriRecordDotsPos", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new Array
        }
    }), $t = e(gt.prototype, "_hollowDots", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new Array
        }
    }), te = e(gt.prototype, "humanboy_chart_PLIST", [ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = e(gt.prototype, "des_btn", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = e(gt.prototype, "des_spr", [_t], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = gt)) || ht));
    o._RF.pop()
}