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
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as w from "./cc.js";
import * as y from "./cc.js";
import * as S from "./cv.js";
import * as z from "./VideoCowboyManager.js";
import * as D from "./VideoCowboyScene.js";
import * as T from "./Enum.js";
import * as P from "./CommonTools.js";
import * as B from "./TweenControl.js";

function main() {
    var v, R, N, L, V, I, E, F, A, k, M, j, O, H, G, U, W, X, Y, Z, q, Q, J, K, $, tt, et, it, ot, nt, at, rt, st, lt, _t, ht, gt, ut, pt, ct, dt, mt, bt, yt, xt, Ct, ft, wt, St, zt, Dt, Tt, Pt, Bt, vt, Rt, Nt, Lt, Vt, It, Et, Ft, At, kt, Mt, jt, Ot, Ht, Gt, Ut, Wt, Xt, Yt, Zt, qt, Qt, Jt, Kt, $t, te, ee, ie, oe, ne, ae, re, se, le, _e, he, ge, ue, pe, ce, de, me, be, ye, xe, Ce, fe, we, Se, ze;
    o._RF.push({}, "48e40TtljtHc5g7+yGkhEJ6", "VideoCowboyChart", void 0);
    const {
        ccclass: De,
        property: Te
    } = _;
    t("VideoCowboyChart", (v = Te(n), R = Te(n), N = Te(n), L = Te(n), V = Te(n), I = Te(n), E = Te(n), F = Te(n), A = Te(n), k = Te(n), M = Te(n), j = Te(n), O = Te(n), H = Te(n), G = Te(n), U = Te(n), W = Te(n), X = Te(n), Y = Te(n), Z = Te(n), q = Te(n), Q = Te(n), J = Te(n), K = Te(n), $ = Te(n), tt = Te(n), et = Te(n), it = Te(n), ot = Te(a), nt = Te(a), at = Te(a), rt = Te(n), st = Te(n), lt = Te(n), _t = Te(n), ht = Te(r), gt = Te(r), ut = Te(n), pt = Te(n), ct = Te(n), dt = Te(s), mt = Te(s), bt = Te(s), yt = Te(n), xt = Te(n), Ct = Te(r), ft = Te(n), wt = Te(l), St = Te(l), De((Tt = e((Dt = class extends h {
        constructor(...t) {
            super(...t), i(this, "chartbg", Tt, this), i(this, "layout1", Pt, this), i(this, "layout2", Bt, this), i(this, "_line1", vt, this), i(this, "_line2", Rt, this), i(this, "_line3", Nt, this), i(this, "_nz_txt", Lt, this), i(this, "_xn_txt", Vt, this), i(this, "_ping_txt", It, this), i(this, "_ping_text", Et, this), i(this, "_thlp_txt", Ft, this), i(this, "_da_txt", At, this), i(this, "_hulu_txt", kt, this), i(this, "_ths_txt", Mt, this), i(this, "_xiaoniu_text", jt, this), i(this, "_niuzai_text", Ot, this), i(this, "_thlp_text", Ht, this), i(this, "_duia_text", Gt, this), i(this, "_hulu_text", Ut, this), i(this, "_jghjths_text", Wt, this), i(this, "_gaopai_text", Xt, this), i(this, "_gaopai_txt", Yt, this), i(this, "_sf_txt", Zt, this), i(this, "_hs_txt", qt, this), i(this, "_liangdui_text", Qt, this), i(this, "_liangdui_txt", Jt, this), i(this, "_sst_text", Kt, this), i(this, "_sst_txt", $t, this), i(this, "_loadingBar1", te, this), i(this, "_loadingBar2", ee, this), i(this, "_loadingBar3", ie, this), i(this, "_red_text", oe, this), i(this, "_green_text", ne, this), i(this, "_lan_text", ae, this), i(this, "_title_img", re, this), i(this, "_button1", se, this), i(this, "_button2", le, this), i(this, "_panelBiaoge1", _e, this), i(this, "_panelBiaoge2", he, this), i(this, "_panelRecord", ge, this), i(this, "dot", ue, this), i(this, "solid", pe, this), i(this, "hollow", ce, this), i(this, "zhezhao_panel", de, this), i(this, "back_panel", me, this), i(this, "_recordDots", be, this), i(this, "_oriRecordDotsPos", ye, this), i(this, "_entityDots", xe, this), i(this, "_hollowDots", Ce, this), i(this, "des_btn", fe, this), i(this, "des_spr", we, this), i(this, "atlas_cb_language", Se, this), i(this, "atlas_cb", ze, this), this.xn = 0, this.nz = 0, this.ping = 0, this.recordNum = 20, this._initialPositionX = void 0, this._atlas_cb_language = null, this._page1_btn_text = null, this._page2_btn_text = null, this.titleDisabledColor = null
        }
        onLoad() {
            this._atlas_cb_language = this.atlas_cb_language;
            for (let t = 0; t < 6; t++) this._hollowDots[t] = [];
            this.layout1.active = !1, this.layout2.active = !0, this._loadingBar1 = g("LoadingBar_1", this.layout1).getComponent(a), this._loadingBar2 = g("LoadingBar_2", this.layout1).getComponent(a), this._loadingBar3 = g("LoadingBar_3", this.layout1).getComponent(a), this._red_text = g("red_text", this.layout1), this._green_text = g("green_text", this.layout1), this._lan_text = g("lan_text", this.layout1), this._title_img = g("title_img", this.chartbg), this._button1 = g("Button_1", this.chartbg), this._button2 = g("Button_2", this.chartbg), this._page1_btn_text = this._button1.getComponentInChildren(u), this._page2_btn_text = this._button2.getComponentInChildren(u), this.titleDisabledColor = p(this._page2_btn_text.color), this._line1 = g("Line1", this.layout1.getChildByName("jrtjbg_img")), this._line2 = g("Line2", this.layout1.getChildByName("jrtjbg_img")), this._line3 = g("Line3", this.layout1.getChildByName("jrtjbg_img")), this._nz_txt = g("nz_txt", this._line1), this._xn_txt = g("xn_txt", this._line1), this._ping_txt = g("ping_num_txt", this._line1), this._ping_text = g("ping_txt", this._line1), this._thlp_txt = g("thlp_txt", this._line2), this._da_txt = g("da_txt", this._line2), this._hulu_txt = g("hulu_txt", this._line3), this._ths_txt = g("ths_txt", this._line3), this._gaopai_text = g("gaopai_num_txt", this._line3), this._gaopai_txt = g("gaopai_txt", this._line3), this._liangdui_text = g("liangdui_num_txt", this._line3), this._liangdui_txt = g("liangdui_txt", this._line3), this._sst_text = g("sst_num_txt", this._line3), this._sst_txt = g("sst_txt", this._line3), this._xiaoniu_text = g("xn_num_txt", this._line1), this._niuzai_text = g("nz_num_txt", this._line1), this._thlp_text = g("thlp_num_txt", this._line2), this._duia_text = g("da_num_txt", this._line2), this._hulu_text = g("hulu_num_txt", this._line3), this._jghjths_text = g("ths_num_txt", this._line3), this._sf_txt = g("sf_txt", this._line1), this._hs_txt = g("hs_txt", this._line3), this.zhezhao_panel.on(n.EventType.TOUCH_END, (t => {
                S.AudioMgr.playButtonSound("button_click.mp3");
                let e = P.instance.getWinSize(this.node);
                this.des_spr.parent.active = !1, t.propagationStopped = !0, B.stopAll(this.chartbg), B.moveTo(this.chartbg, .2, c(e.width, this.chartbg.getPosition().y, 0), null, null, (() => {
                    this.node.active = !1, this.node.getParent().getComponent(D).getChartPanel().active = !0
                }))
            })), this.chartbg.on(n.EventType.TOUCH_END, (t => {
                this.des_spr.parent.active = !1
            })), this.back_panel.on(n.EventType.TOUCH_END, (t => {
                S.AudioMgr.playButtonSound("button_click.mp3");
                let e = P.instance.getWinSize(this.node);
                this.des_spr.parent.active = !1, B.stopAll(this.chartbg), B.moveTo(this.chartbg, .2, c(e.width, this.chartbg.getPosition().y, 0), null, null, (() => {
                    this.node.active = !1, this.node.getParent().getComponent(D).getChartPanel().active = !0
                }))
            })), this._button1.on("click", function() {
                S.AudioMgr.playButtonSound("tab.mp3"), this._button1.getComponent(r).Enabled = !1, this._button2.getComponent(r).Enabled = !0, this.layout1.active = !1, this.setQuestionView(!0), this.layout2.active = !0, this._title_img.setScale(1, 1, 1), this._page1_btn_text && (this._page1_btn_text.color = new d(d.WHITE)), this._page2_btn_text && (this._page2_btn_text.color = this.titleDisabledColor)
            }.bind(this)), this._button2.on("click", function() {
                S.AudioMgr.playButtonSound("tab.mp3"), this._button2.getComponent(r).Enabled = !1, this._button1.getComponent(r).Enabled = !0, this.layout1.active = !0, this.setQuestionView(!1), this.layout2.active = !1, this._title_img.setScale(-1, 1, 1), this._page1_btn_text && (this._page1_btn_text.color = this.titleDisabledColor), this._page2_btn_text && (this._page2_btn_text.color = new d(d.WHITE))
            }.bind(this)), this.des_spr.parent.active = !1;
            this.node.children.length;
            this.des_spr.on(n.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0, this.des_spr.parent.active = !1
            }), this), this.des_btn.node.on(n.EventType.TOUCH_END, (t => {
                S.AudioMgr.playButtonSound("tab.mp3"), this.des_spr.parent.active = !this.des_spr.parent.active
            }), this), S.config.getCurrentLanguage() != T.zh_CN && S.config.getCurrentLanguage() != T.zh_TW && S.resMgr.setSpriteFrame(this.des_spr, "en_US/game/cowboy/des_img"), this.initRecord(), this.initBiaoge1(), this.initBiaoge2(), S.MessageCenter.register(S.config.CHANGE_LANGUAGE, this.onChangeLanguage.bind(this), this.node), S.MessageCenter.register("cowboy_start_history_move_anim", this.updateReusult.bind(this), this.node), this.onChangeLanguage(), this.setData(), this._initialPositionX = this.chartbg.position.x
        }
        updateReusult() {
            this.showHistoryMoveAnim(), S.videoCowboyNet.RequestTrend()
        }
        moveChart() {
            let t = g("Panel", this.node);
            B.stopAll(t);
            let e = P.instance.getWinSize(this.node),
                i = t.getPosition().x;
            t.setPosition(e.width, t.getPosition().y);
            let o = g("bg_img", t),
                n = 0;
            S.config.IS_IPHONEX_SCREEN ? (o.setContentSize(m.size(722 + S.viewAdaptive.IPHONEX_OFFSETY, o.getContentSize().height)), n = this._initialPositionX - 722 - S.viewAdaptive.IPHONEX_OFFSETY) : (o.setContentSize(m.size(722, o.getContentSize().height)), n = this._initialPositionX - 722);
            let a = () => {
                t.setPosition(c(n, t.getPosition().y, 0)), this.node.getParent().getComponent(D).getChartPanel().active = !1
            };
            this.node.active ? Math.floor(i) != Math.floor(n) ? b(t).to(.2, {
                position: c(n, t.getPosition().y, 0)
            }).delay(.02).call(a).start() : (t.setPosition(c(n, t.getPosition().y, 0)), t.active = !0) : this.node.getParent().getComponent(D).getChartPanel().active = !0
        }
        OnTrendUpdate() {
            this.updateBiaoge1(), this.updateBiaoge2(), this.updateData(), this.calculatePercent()
        }
        initRecord() {
            this._panelRecord = g("panelRecord", this.layout2);
            let t = g("recordDot", this._panelRecord);
            t.active = !1;
            let e = t.getPosition(),
                i = (this._panelRecord.getContentSize().width - 2 * e.x) / (this.recordNum - 1);
            for (let t = 0; t < this.recordNum + 1; t++) {
                let o = y(this.dot);
                o.setScale(c(.625, .625, .625)), this._panelRecord.addChild(o), o.active = !0, o.setPosition(c(e.x + t * i, e.y, 0)), this._recordDots.push(o), this._oriRecordDotsPos.push(this._recordDots[t].getPosition())
            }
        }
        updateBiaoge1() {
            for (let t = 0; t < 48; t++) B.stopAll(this._entityDots[t]), this._entityDots[t].active = !1, this._entityDots[t].removeAllChildren();
            z.getVideoCowboyRoom().trendData.length;
            if (z.getVideoCowboyRoom().trendData.length <= 48)
                for (let t = 0; t < z.getVideoCowboyRoom().trendData.length; t++) {
                    this._entityDots[t].active = !0, this._entityDots[t].addOrGetComponent(x).opacity = 255, 101 == z.getVideoCowboyRoom().trendData[t].win ? this._entityDots[t].getComponent(C).spriteFrame = z.getTextureByName("chart_PLIST", "chart_13") : 102 == z.getVideoCowboyRoom().trendData[t].win ? this._entityDots[t].getComponent(C).spriteFrame = z.getTextureByName("chart_PLIST", "chart_12") : 103 == z.getVideoCowboyRoom().trendData[t].win && (this._entityDots[t].getComponent(C).spriteFrame = z.getTextureByName("chart_PLIST", "chart_11"));
                    let e = new n;
                    e.addComponent(C), this._entityDots[t].getContentSize();
                    if (this._entityDots[t].addChild(e), t + 1 == z.getVideoCowboyRoom().trendData.length) {
                        let e = new n;
                        e.name = "new", e.addComponent(C), e.getComponent(C).spriteFrame = z.getTextureByName("chart_PLIST", "chart_new"), e.setPosition(c(22, 22, 0)), this._entityDots[t].addChild(e);
                        let i = () => {
                            this._entityDots[t].active = !0, this._entityDots[t].addOrGetComponent(x).opacity = 255
                        };
                        B.blink(this._entityDots[t], 2, 2, i)
                    }
                    switch (z.getVideoCowboyRoom().trendData[t].win_patterns) {
                        case 1:
                            e.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_gaopai");
                            break;
                        case 2:
                            e.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_yidui");
                            break;
                        case 3:
                            e.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_liangdui");
                            break;
                        case 4:
                            e.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_santiao");
                            break;
                        case 5:
                            e.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_shunzi");
                            break;
                        case 6:
                            e.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_tonghua");
                            break;
                        case 7:
                            e.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_hulu");
                            break;
                        case 8:
                            e.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_jingang");
                            break;
                        case 9:
                            e.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_tonghuashun");
                            break;
                        case 10:
                            e.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_huangtong")
                    }
                } else {
                    let t = z.getVideoCowboyRoom().trendData.length - 48;
                    for (let e = 0; e < 48; e++) {
                        this._entityDots[e].active = !0, this._entityDots[e].addOrGetComponent(x).opacity = 255, 101 == z.getVideoCowboyRoom().trendData[e + t].win ? this._entityDots[e].getComponent(C).spriteFrame = z.getTextureByName("chart_PLIST", "chart_13") : 102 == z.getVideoCowboyRoom().trendData[e + t].win ? this._entityDots[e].getComponent(C).spriteFrame = z.getTextureByName("chart_PLIST", "chart_12") : 103 == z.getVideoCowboyRoom().trendData[e + t].win && (this._entityDots[e].getComponent(C).spriteFrame = z.getTextureByName("chart_PLIST", "chart_11"));
                        this._entityDots[e].getContentSize();
                        if (47 == e) {
                            let t = y(this.solid);
                            t.getComponent(C).spriteFrame = z.getTextureByName("chart_PLIST", "chart_new"), t.setPosition(c(22, 22, 0)), this._entityDots[e].addChild(t), this._entityDots[e].active = !0;
                            let i = () => {
                                this._entityDots[e].active = !0, this._entityDots[e].addOrGetComponent(x).opacity = 255
                            };
                            B.blink(this._entityDots[e], 2, 2, i)
                        }
                        let i = y(this.solid);
                        switch (this._entityDots[e].addChild(i), z.getVideoCowboyRoom().trendData[e + t].win_patterns) {
                            case 1:
                                i.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_gaopai");
                                break;
                            case 2:
                                i.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_yidui");
                                break;
                            case 3:
                                i.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_liangdui");
                                break;
                            case 4:
                                i.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_santiao");
                                break;
                            case 5:
                                i.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_shunzi");
                                break;
                            case 6:
                                i.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_tonghua");
                                break;
                            case 7:
                                i.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_hulu");
                                break;
                            case 8:
                                i.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_jingang");
                                break;
                            case 9:
                                i.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_tonghuashun");
                                break;
                            case 10:
                                i.getComponent(C).spriteFrame = z.getTextureByName("chartlang_PLIST", "chart_huangtong")
                        }
                    }
                }
        }
        updateBiaoge2() {
            for (let t = 0; t < 6; t++)
                for (let e = 0; e < 8; e++) B.stopAll(this._hollowDots[t][e]), this._hollowDots[t][e].active = !1, null != this._hollowDots[t][e].getChildByName("ping") && this._hollowDots[t][e].removeAllChildren();
            let t = z.getVideoCowboyRoom().trendRoad.length;
            for (let e = 0; e < t; e++) {
                let t = z.getVideoCowboyRoom().trendRoad[e],
                    i = t.road_row.length;
                for (let o = 0; o < i; o++) {
                    if (this._hollowDots[e][o].addOrGetComponent(x).opacity = 255, "r" == t.road_row[o].win ? (this._hollowDots[e][o].active = !0, this._hollowDots[e][o].getComponent(C).spriteFrame = z.getTextureByName("chart_PLIST", "chart_03")) : "b" == t.road_row[o].win && (this._hollowDots[e][o].active = !0, this._hollowDots[e][o].getComponent(C).spriteFrame = z.getTextureByName("chart_PLIST", "chart_02")), t.road_row[o].eqc > 0) {
                        let i = S.StringTools.formatC("%d", t.road_row[o].eqc),
                            a = new n("text");
                        a.name = "ping", a.addComponent(u), a.getComponent(u).string = i, a.getComponent(u).fontSize = 24, a.getComponent(u).color = p(23, 130, 82), a.setPosition(c(0, -10, 0)), a.addOrGetComponent(x).opacity = 255, this._hollowDots[e][o].addChild(a)
                    }
                    if (e == z.getVideoCowboyRoom().lastRow && o == z.getVideoCowboyRoom().lastCol) {
                        this._hollowDots[e][o].active = !0;
                        let t = () => {
                            this._hollowDots[e][o].active = !0, this._hollowDots[e][o].addOrGetComponent(x).opacity = 255
                        };
                        B.blink(this._hollowDots[e][o], 2, 2, t)
                    }
                }
            }
        }
        hideHistoryMoveAnim() {
            for (let t = 0; t < this._recordDots.length; t++) B.stopAll(this._recordDots[t]), this._recordDots[t].setPosition(this._oriRecordDotsPos[t])
        }
        showHistoryMoveAnim() {
            if (z.getVideoCowboyRoom().historyResults.length > 0) {
                let t = z.getVideoCowboyRoom().historyResults[z.getVideoCowboyRoom().historyResults.length - 1],
                    e = "record_draw";
                t == z.Enum.BetZoneOption.RED_WIN ? e = "record_red" : t == z.Enum.BetZoneOption.BLUE_WIN && (e = "record_blue"), this._recordDots[this._recordDots.length - 1].getComponent(C).spriteFrame = z.getTextureByName("game_dznz_PLIST", e);
                let i = c(this._oriRecordDotsPos[0].x - this._oriRecordDotsPos[1].x, this._oriRecordDotsPos[0].y - this._oriRecordDotsPos[1].y, 0);
                for (let t = 0; t < this._recordDots.length; t++) B.moveBy(this._recordDots[t], .3, i, null, null, (() => {
                    t == this._recordDots.length - 1 && this.updateHistoryResults()
                }))
            }
        }
        updateHistoryResults() {
            this.hideHistoryMoveAnim();
            let t = z.getVideoCowboyRoom().historyResults.length;
            for (let e = 0; e < this.recordNum; e++) {
                let i = t - e - 1,
                    o = this.recordNum - e - 1;
                if (i < 0) this._recordDots[o].getComponent(C).spriteFrame = z.getTextureByName("game_dznz_PLIST", "record_draw"), this._recordDots[o].active = !1;
                else {
                    let t = z.getVideoCowboyRoom().historyResults[i],
                        e = "record_draw";
                    t == z.Enum.BetZoneOption.RED_WIN ? e = "record_red" : t == z.Enum.BetZoneOption.BLUE_WIN && (e = "record_blue"), this._recordDots[o].getComponent(C).spriteFrame = z.getTextureByName("game_dznz_PLIST", e), this._recordDots[o].active = !0
                }
            }
        }
        initBiaoge1() {
            this._panelBiaoge1 = g("panelBiaoGe1", this.layout2);
            let t = g("recordDot", this._panelBiaoge1);
            t.active = !1;
            let e = t.getPosition(),
                i = f(40, -40);
            for (let t = 0; t < 48; t++) {
                let o = y(this.solid);
                o.setScale(c(.75, .75, .75)), this._panelBiaoge1.addChild(o), o.setPosition(c(e.x + Math.floor(t / 6) * i.x, e.y + t % 6 * i.y, 0)), this._entityDots.push(o)
            }
        }
        initBiaoge2() {
            this._panelBiaoge2 = g("panelBiaoGe2", this.layout2);
            let t = g("item_image", this._panelBiaoge2);
            t.active = !1;
            let e = t.getPosition(),
                i = f(40, -40);
            for (let t = 0; t < 6; t++)
                for (let o = 0; o < 8; o++) {
                    let n = y(this.hollow);
                    n.setScale(c(.75, .75, .75)), this._panelBiaoge2.addChild(n), n.setPosition(c(e.x + o * i.x, e.y + t * i.y, 0)), this._hollowDots[t].push(n)
                }
        }
        setData() {
            this.cleanData(), this.updateData(), this.calculatePercent(), this.updateHistoryResults(), this.updateBiaoge1(), this.updateBiaoge2()
        }
        setData1() {
            this.updateBiaoge1(), this.updateBiaoge2(), this.updateData(), this.calculatePercent(), this.updateHistoryResults()
        }
        calculatePercent() {
            let t = this.nz + this.xn + this.ping,
                e = this.xn / t * 100,
                i = this.nz / t * 100,
                o = 0,
                n = "",
                a = "";
            0 == this.ping ? (o = 0, e = 100 - i) : o = 100 - e - i, e > 0 ? (n = S.StringTools.formatC("%.1f", e), this._red_text.getComponent(u).string = S.StringTools.formatC("%.1f", e) + "%", this._red_text.active = !0) : this._red_text.active = !1, i > 0 ? (a = S.StringTools.formatC("%.1f", i), this._lan_text.getComponent(u).string = S.StringTools.formatC("%.1f", i) + "%", this._lan_text.active = !0) : this._lan_text.active = !1, o > 0 ? (o = 100 - Number(a) - Number(n), this._green_text.getComponent(u).string = S.StringTools.formatC("%.1f", o) + "%", this._green_text.active = !0) : this._green_text.active = !1, 0 == t ? (this._loadingBar1.node.active = !1, this._loadingBar2.node.active = !1, this._loadingBar3.node.active = !1, this._red_text.active = !1, this._lan_text.active = !1, this._green_text.active = !1) : (this._loadingBar1.node.active = !0, this._loadingBar2.node.active = !0, this._loadingBar3.node.active = !0, this._red_text.active = e > 0, this._lan_text.active = i > 0, 0 == this.ping ? this._green_text.active = !1 : this._green_text.active = o > 0), this._loadingBar1.progress = e / 100, this._loadingBar2.progress = (o + e) / 100, this._loadingBar3.progress = i / 100;
            let r = this._loadingBar1.node.getPosition().x - this._loadingBar1.node.getContentSize().width / 2;
            this._lan_text.setPosition(r + 6.35 * (o + e) + 6.35 * i / 2, this._lan_text.position.y), this._red_text.setPosition(r + 6.35 * e / 2, this._red_text.position.y), this._green_text.setPosition(r + 6.35 * e + 6.35 * o / 2, this._green_text.position.y)
        }
        cleanData() {
            this._ping_txt.getComponent(u).string = "0", this._xiaoniu_text.getComponent(u).string = "0", this._niuzai_text.getComponent(u).string = "0", this._thlp_text.getComponent(u).string = "0", this._duia_text.getComponent(u).string = "0", this._hulu_text.getComponent(u).string = "0", this._jghjths_text.getComponent(u).string = "0"
        }
        updateData() {
            for (let t = 0; t < z.getVideoCowboyRoom().dailyStat.length; t++) 101 != z.getVideoCowboyRoom().dailyStat[t].betzone_type ? 102 != z.getVideoCowboyRoom().dailyStat[t].betzone_type ? 103 != z.getVideoCowboyRoom().dailyStat[t].betzone_type ? 205 != z.getVideoCowboyRoom().dailyStat[t].betzone_type ? 206 != z.getVideoCowboyRoom().dailyStat[t].betzone_type ? 301 != z.getVideoCowboyRoom().dailyStat[t].betzone_type ? 302 != z.getVideoCowboyRoom().dailyStat[t].betzone_type ? 303 != z.getVideoCowboyRoom().dailyStat[t].betzone_type ? 304 != z.getVideoCowboyRoom().dailyStat[t].betzone_type ? 305 != z.getVideoCowboyRoom().dailyStat[t].betzone_type || (this._jghjths_text.getComponent(u).string = S.StringTools.numberToString(z.getVideoCowboyRoom().dailyStat[t].count)) : this._hulu_text.getComponent(u).string = S.StringTools.numberToString(z.getVideoCowboyRoom().dailyStat[t].count) : this._sst_text.getComponent(u).string = S.StringTools.numberToString(z.getVideoCowboyRoom().dailyStat[t].count) : this._liangdui_text.getComponent(u).string = S.StringTools.numberToString(z.getVideoCowboyRoom().dailyStat[t].count) : this._gaopai_text.getComponent(u).string = S.StringTools.numberToString(z.getVideoCowboyRoom().dailyStat[t].count) : this._thlp_text.getComponent(u).string = S.StringTools.numberToString(z.getVideoCowboyRoom().dailyStat[t].count) : this._duia_text.getComponent(u).string = S.StringTools.numberToString(z.getVideoCowboyRoom().dailyStat[t].count) : (this._ping_txt.getComponent(u).string = S.StringTools.numberToString(z.getVideoCowboyRoom().dailyStat[t].count), this.ping = z.getVideoCowboyRoom().dailyStat[t].count) : (this._xiaoniu_text.getComponent(u).string = S.StringTools.numberToString(z.getVideoCowboyRoom().dailyStat[t].count), this.nz = z.getVideoCowboyRoom().dailyStat[t].count) : (this._niuzai_text.getComponent(u).string = S.StringTools.numberToString(z.getVideoCowboyRoom().dailyStat[t].count), this.xn = z.getVideoCowboyRoom().dailyStat[t].count)
        }
        onChangeLanguage() {
            this._nz_txt.getComponent(u).string = S.config.getStringData("Cowboy_cow_text"), this._xn_txt.getComponent(u).string = S.config.getStringData("Cowboy_calf_text"), this._ping_text.getComponent(u).string = S.config.getStringData("Cowboy_ping_text"), this._thlp_txt.getComponent(u).string = S.config.getStringData("Cowboy_thlp_text"), this._da_txt.getComponent(u).string = S.config.getStringData("Cowboy_da_text"), this._hulu_txt.getComponent(u).string = S.config.getStringData("Cowboy_hulu_text"), this._ths_txt.getComponent(u).string = S.config.getStringData("Cowboy_ths_text"), this._sf_txt.getComponent(u).string = S.config.getStringData("Cowboy_sf_text");
            let t = S.config.getStringData("Cowboy_hs_text");
            if (this._hs_txt.getComponent(u).string = S.StringTools.calculateAutoWrapString(this._hs_txt, t), this._gaopai_txt.getComponent(u).string = S.config.getStringData("Cowboy_gpyd_text"), this._liangdui_txt.getComponent(u).string = S.config.getStringData("Cowboy_liangdui_text"), this._sst_txt.getComponent(u).string = S.config.getStringData("Cowboy_sst_text"), S.config.getCurrentLanguage() != S.Enum.LANGUAGE_TYPE.zh_CN) {
                this._gaopai_txt.getComponent(u).fontSize = 14, this._gaopai_text.getComponent(u).fontSize = 14, this._sf_txt.getComponent(u).fontSize = 14, this._hs_txt.getComponent(u).fontSize = 14, this._hs_txt.setContentSize(w(80, 100)), this._nz_txt.getComponent(u).fontSize = 14, this._niuzai_text.getComponent(u).fontSize = 14, this._xn_txt.getComponent(u).fontSize = 14, this._xiaoniu_text.getComponent(u).fontSize = 14, this._ping_txt.getComponent(u).fontSize = 14, this._ping_text.getComponent(u).fontSize = 14, this._liangdui_txt.getComponent(u).fontSize = 14, this._liangdui_text.getComponent(u).fontSize = 14, this._sst_txt.getComponent(u).fontSize = 14, this._sst_text.getComponent(u).fontSize = 14, this._hulu_txt.getComponent(u).fontSize = 14, this._hulu_text.getComponent(u).fontSize = 14, this._thlp_text.getComponent(u).fontSize = 14, this._ths_txt.getComponent(u).fontSize = 14, this._jghjths_text.getComponent(u).fontSize = 14;
                let t = 6;
                this._niuzai_text.setPosition(this._nz_txt.getPosition().x + S.resMgr.getLabelStringSize(this._nz_txt.getComponent(u), S.config.getStringData("Cowboy_cow_text")).width + t, this._niuzai_text.getPosition().y), this._xiaoniu_text.setPosition(this._xn_txt.getPosition().x + S.resMgr.getLabelStringSize(this._xn_txt.getComponent(u), S.config.getStringData("Cowboy_calf_text")).width + t, this._niuzai_text.getPosition().y), this._ping_txt.setPosition(this._ping_text.getPosition().x + S.resMgr.getLabelStringSize(this._ping_text.getComponent(u), S.config.getStringData("Cowboy_ping_text")).width + t, this._ping_text.getPosition().y), this._gaopai_text.setPosition(this._gaopai_txt.getPosition().x + S.resMgr.getLabelStringSize(this._gaopai_txt.getComponent(u), S.config.getStringData("Cowboy_gpyd_text")).width + t, this._gaopai_text.getPosition().y), this._liangdui_text.setPosition(this._liangdui_txt.getPosition().x + S.resMgr.getLabelStringSize(this._liangdui_txt.getComponent(u), S.config.getStringData("Cowboy_liangdui_text")).width + t, this._liangdui_text.getPosition().y), this._sst_text.setPosition(this._sst_txt.getPosition().x + S.resMgr.getLabelStringSize(this._sst_txt.getComponent(u), S.config.getStringData("Cowboy_sst_text")).width + t, this._sst_text.getPosition().y), this._hulu_text.setPosition(this._hulu_txt.getPosition().x + S.resMgr.getLabelStringSize(this._hulu_txt.getComponent(u), S.config.getStringData("Cowboy_hulu_text")).width + t, this._niuzai_text.getPosition().y), this._jghjths_text.setPosition(this._ths_txt.getPosition().x + S.resMgr.getLabelStringSize(this._ths_txt.getComponent(u), S.config.getStringData("Cowboy_ths_text")).width + t, this._jghjths_text.getPosition().y)
            }
        }
        onDestroy() {
            S.MessageCenter.unregister(S.config.CHANGE_LANGUAGE, this.node), S.MessageCenter.unregister("cowboy_start_history_move_anim", this.node), S.MessageCenter.unregister("on_update_trend", this.node)
        }
        setQuestionView(t) {
            this.des_spr.parent.active = !1, this.des_btn.node.active = t
        }
    }).prototype, "chartbg", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(Dt.prototype, "layout1", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(Dt.prototype, "layout2", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(Dt.prototype, "_line1", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(Dt.prototype, "_line2", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(Dt.prototype, "_line3", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(Dt.prototype, "_nz_txt", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(Dt.prototype, "_xn_txt", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(Dt.prototype, "_ping_txt", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = e(Dt.prototype, "_ping_text", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = e(Dt.prototype, "_thlp_txt", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = e(Dt.prototype, "_da_txt", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(Dt.prototype, "_hulu_txt", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(Dt.prototype, "_ths_txt", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), jt = e(Dt.prototype, "_xiaoniu_text", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(Dt.prototype, "_niuzai_text", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(Dt.prototype, "_thlp_text", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(Dt.prototype, "_duia_text", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = e(Dt.prototype, "_hulu_text", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Wt = e(Dt.prototype, "_jghjths_text", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xt = e(Dt.prototype, "_gaopai_text", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yt = e(Dt.prototype, "_gaopai_txt", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Zt = e(Dt.prototype, "_sf_txt", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qt = e(Dt.prototype, "_hs_txt", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qt = e(Dt.prototype, "_liangdui_text", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Jt = e(Dt.prototype, "_liangdui_txt", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Kt = e(Dt.prototype, "_sst_text", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $t = e(Dt.prototype, "_sst_txt", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = e(Dt.prototype, "_loadingBar1", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = e(Dt.prototype, "_loadingBar2", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = e(Dt.prototype, "_loadingBar3", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = e(Dt.prototype, "_red_text", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = e(Dt.prototype, "_green_text", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = e(Dt.prototype, "_lan_text", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = e(Dt.prototype, "_title_img", [_t], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = e(Dt.prototype, "_button1", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = e(Dt.prototype, "_button2", [gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _e = e(Dt.prototype, "_panelBiaoge1", [ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = e(Dt.prototype, "_panelBiaoge2", [pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = e(Dt.prototype, "_panelRecord", [ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = e(Dt.prototype, "dot", [dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = e(Dt.prototype, "solid", [mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = e(Dt.prototype, "hollow", [bt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = e(Dt.prototype, "zhezhao_panel", [yt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = e(Dt.prototype, "back_panel", [xt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), be = e(Dt.prototype, "_recordDots", [Te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ye = e(Dt.prototype, "_oriRecordDotsPos", [Te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), xe = e(Dt.prototype, "_entityDots", [Te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Ce = e(Dt.prototype, "_hollowDots", [Te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new Array
        }
    }), fe = e(Dt.prototype, "des_btn", [Ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), we = e(Dt.prototype, "des_spr", [ft], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Se = e(Dt.prototype, "atlas_cb_language", [wt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ze = e(Dt.prototype, "atlas_cb", [St], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = Dt)) || zt));
    o._RF.pop()
}