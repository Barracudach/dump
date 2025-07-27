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
import * as z from "./cv.js";
import * as S from "./cb.js";
import * as D from "./CowboyEnum.js";
import * as P from "./MiniGameSoundManager.js";
import * as R from "./node-extension.js";
import * as T from "./TweenControl.js";

function main() {
    var B, v, L, N, E, M, I, A, j, G, H, F, O, U, k, W, V, Q, q, Y, J, K, Z, X, $, tt, et, it, ot, nt, st, rt, at, _t, lt, ht, gt, ut, pt, dt, bt, ct, xt, yt, mt, Ct, ft, wt, zt, St, Dt, Pt, Rt, Tt, Bt, vt, Lt, Nt, Et, Mt, It, At, jt, Gt, Ht, Ft, Ot, Ut, kt, Wt, Vt, Qt, qt, Yt, Jt, Kt, Zt, Xt, $t, te, ee, ie, oe, ne, se, re, ae, _e, le, he, ge, ue, pe, de, be, ce, xe, ye, me, Ce, fe, we, ze, Se, De, Pe, Re, Te, Be, ve, Le, Ne, Ee, Me, Ie, Ae, je, Ge, He;
    o._RF.push({}, "36b16tv251Ji70sgCHX5+2k", "cowboyChart", void 0);
    const {
        ccclass: Fe,
        property: Oe
    } = g;
    t("cowboyChart", (B = Oe(n), v = Oe(s), L = Oe(n), N = Oe(n), E = Oe(n), M = Oe(n), I = Oe(n), A = Oe(r), j = Oe(r), G = Oe(r), H = Oe(r), F = Oe(r), O = Oe(r), U = Oe(r), k = Oe(r), W = Oe(r), V = Oe(r), Q = Oe(r), q = Oe(r), Y = Oe(r), J = Oe(r), K = Oe(r), Z = Oe(r), X = Oe(r), $ = Oe(r), tt = Oe(r), et = Oe(r), it = Oe(r), ot = Oe(r), nt = Oe(a), st = Oe(a), rt = Oe(n), at = Oe(r), _t = Oe(r), lt = Oe(r), ht = Oe(r), gt = Oe(r), ut = Oe(r), pt = Oe(r), dt = Oe(r), bt = Oe(n), ct = Oe(n), xt = Oe(n), yt = Oe(_), mt = Oe(_), Ct = Oe(_), ft = Oe(_), wt = Oe(l), zt = Oe(l), St = Oe(l), Dt = Oe(a), Pt = Oe(n), Rt = Oe(h), Fe((vt = e((Bt = class extends u {
        constructor(...t) {
            super(...t), i(this, "_btn_close", vt, this), i(this, "chartbg", Lt, this), i(this, "layout1", Nt, this), i(this, "layout2", Et, this), i(this, "_line1", Mt, this), i(this, "_line2", It, this), i(this, "_line3", At, this), i(this, "_nz_txt", jt, this), i(this, "_xn_txt", Gt, this), i(this, "_ping_txt", Ht, this), i(this, "_ping_text", Ft, this), i(this, "_thlp_txt", Ot, this), i(this, "_da_txt", Ut, this), i(this, "_hulu_txt", kt, this), i(this, "_ths_txt", Wt, this), i(this, "_xiaoniu_text", Vt, this), i(this, "_niuzai_text", Qt, this), i(this, "_thlp_text", qt, this), i(this, "_duia_text", Yt, this), i(this, "_hulu_text", Jt, this), i(this, "_jghjths_text", Kt, this), i(this, "_duizi_text", Zt, this), i(this, "_duizi_txt", Xt, this), i(this, "_gaopai_text", $t, this), i(this, "_gaopai_txt", te, this), i(this, "_liangdui_text", ee, this), i(this, "_liangdui_txt", ie, this), i(this, "_sst_text", oe, this), i(this, "_sst_txt", ne, this), i(this, "_button1", se, this), i(this, "_button2", re, this), i(this, "_title_img", ae, this), i(this, "_ludan_text", _e, this), i(this, "_tongji_text", le, this), i(this, "_lan_text", he, this), i(this, "_green_text", ge, this), i(this, "_red_text", ue, this), i(this, "_sf_txt", pe, this), i(this, "_sp_txt", de, this), i(this, "_hs_txt", be, this), i(this, "_panelRecord", ce, this), i(this, "_panelBiaoge1", xe, this), i(this, "_panelBiaoge2", ye, this), i(this, "solid", me, this), i(this, "hollow", Ce, this), i(this, "dot", fe, this), i(this, "newPrefab", we, this), i(this, "_loadingBar1", ze, this), i(this, "_loadingBar2", Se, this), i(this, "_loadingBar3", De, this), i(this, "_recordNum", Pe, this), i(this, "_recordDots", Re, this), i(this, "_oriRecordDotsPos", Te, this), i(this, "_entityDots", Be, this), i(this, "_hollowDots", ve, this), i(this, "nz", Le, this), i(this, "xn", Ne, this), i(this, "ping", Ee, this), i(this, "index1", Me, this), i(this, "index2", Ie, this), i(this, "index3", Ae, this), i(this, "des_btn", je, this), i(this, "des_node", Ge, this), i(this, "titleDisabledColor", He, this), this._page1_btn_text = null, this._page2_btn_text = null
        }
        onLoad() {
            for (let t = 0; t < 6; t++) this._hollowDots[t] = [];
            this.layout2.active = !1, this._title_img = p("title_img", this.chartbg.node), this._button1 = p("Button_1", this.chartbg.node).getComponent(a), this._button2 = p("Button_2", this.chartbg.node).getComponent(a), this._page1_btn_text = this._button1.getComponentInChildren(r), this._page2_btn_text = this._button2.getComponentInChildren(r), this._line1 = p("Line1", this.layout1.getChildByName("jrtjbg_img")), this._line2 = p("Line2", this.layout1.getChildByName("jrtjbg_img")), this._line3 = p("Line3", this.layout1.getChildByName("jrtjbg_img")), this._nz_txt = p("nz_txt", this._line1).getComponent(r), this._xn_txt = p("xn_txt", this._line1).getComponent(r), this._ping_txt = p("ping_num_txt", this._line1).getComponent(r), this._ping_text = p("ping_txt", this._line1).getComponent(r), this._thlp_txt = p("thlp_txt", this._line2).getComponent(r), this._da_txt = p("da_txt", this._line2).getComponent(r), this._hulu_txt = p("hulu_txt", this._line3).getComponent(r), this._ths_txt = p("ths_txt", this._line3).getComponent(r), this._duizi_text = p("duizi_num_txt", this._line2).getComponent(r), this._duizi_txt = p("duizi_txt", this._line2).getComponent(r), this._gaopai_text = p("gaopai_num_txt", this._line3).getComponent(r), this._gaopai_txt = p("gaopai_txt", this._line3).getComponent(r), this._liangdui_text = p("liangdui_num_txt", this._line3).getComponent(r), this._liangdui_txt = p("liangdui_txt", this._line3).getComponent(r), this._sst_text = p("sst_num_txt", this._line3).getComponent(r), this._sst_txt = p("sst_txt", this._line3).getComponent(r), this._xiaoniu_text = p("xn_num_txt", this._line1).getComponent(r), this._niuzai_text = p("nz_num_txt", this._line1).getComponent(r), this._thlp_text = p("thlp_num_txt", this._line2).getComponent(r), this._duia_text = p("da_num_txt", this._line2).getComponent(r), this._hulu_text = p("hulu_num_txt", this._line3).getComponent(r), this._jghjths_text = p("ths_num_txt", this._line3).getComponent(r), this._sf_txt = p("sf_txt", this._line1).getComponent(r), this._sp_txt = p("sp_txt", this._line2).getComponent(r), this._hs_txt = p("hs_txt", this._line3).getComponent(r), this.on_display_page1(), this._lan_text = p("lan_text", this.layout1).getComponent(r), this._green_text = p("green_text", this.layout1).getComponent(r), this._red_text = p("red_text", this.layout1).getComponent(r), this._loadingBar1 = p("LoadingBar_1", this.layout1).getComponent(l), this._loadingBar2 = p("LoadingBar_2", this.layout1).getComponent(l), this._loadingBar3 = p("LoadingBar_3", this.layout1).getComponent(l), this.layout1.active = !1, this.layout2.active = !0, this._button1.node.on(a.EventType.CLICK, (t => {
                P.playButtonSound("tab"), this.onPage1()
            }), this), this._button2.node.on(a.EventType.CLICK, (t => {
                P.playButtonSound("tab"), this.onPage2()
            }), this), this.des_node.parent.active = !1, this.node.getChildByName("zhezhao_panel").on(n.EventType.TOUCH_END, (t => {
                this.des_node.parent.active = !1, t.propagationStopped = !0
            }), this), this.des_node.on(n.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0
            }), this), this.des_btn.node.on(n.EventType.TOUCH_END, (t => {
                P.playButtonSound("tab"), this.des_node.parent.active = !0
            }), this), this.initRecord(), this.initBiaoge1(), this.initBiaoge2(), this.registerMsg(), this.setData(), this._btn_close = p("Button_close", this.chartbg.node), this._btn_close.on("click", (t => {
                P.playButtonSound("close"), this.onClose()
            }), this)
        }
        start() {
            this.onChangeLanguage()
        }
        setData() {
            this.updateBiaoge1(), this.updateBiaoge2(), this.updateData(), this.calculatePercent(), this.updateHistoryResults()
        }
        registerMsg() {
            z.MessageCenter.register(z.config.CHANGE_LANGUAGE, this.onChangeLanguage.bind(this), this.node), z.MessageCenter.register("cowboy_start_history_move_anim", this.updateResult.bind(this), this.node), z.MessageCenter.register("on_display_page1", this.on_display_page1.bind(this), this.node), z.MessageCenter.register("on_display_page2", this.on_display_page2.bind(this), this.node)
        }
        unregisterMsg() {
            z.MessageCenter.unregister(z.config.CHANGE_LANGUAGE, this.node), z.MessageCenter.unregister("cowboy_start_history_move_anim", this.node), z.MessageCenter.unregister("on_display_page1", this.node), z.MessageCenter.unregister("on_display_page2", this.node)
        }
        onDestroy() {
            this.unregisterMsg()
        }
        onChangeLanguage() {
            this._nz_txt.string = z.config.getStringDataCasino("Cowboy_cow_text"), this._xn_txt.string = z.config.getStringDataCasino("Cowboy_calf_text"), this._ping_text.string = z.config.getStringDataCasino("Cowboy_ping_text"), this._thlp_txt.string = z.config.getStringDataCasino("Cowboy_thlp_text"), this._da_txt.string = z.config.getStringDataCasino("Cowboy_da_text"), this._hulu_txt.string = z.config.getStringDataCasino("Cowboy_hulu_text"), this._ths_txt.string = z.config.getStringDataCasino("Cowboy_ths_text"), this._duizi_txt.string = z.config.getStringDataCasino("Cowboy_dz_text"), this._gaopai_txt.string = z.config.getStringDataCasino("Cowboy_gpyd_text"), this._liangdui_txt.string = z.config.getStringDataCasino("Cowboy_liangdui_text"), this._sst_txt.string = z.config.getStringDataCasino("Cowboy_sst_text"), this._sf_txt.string = z.config.getStringDataCasino("Cowboy_sf_text"), this._sp_txt.string = z.config.getStringDataCasino("Cowboy_sp_text"), this._hs_txt.string = z.config.getStringDataCasino("Cowboy_hs_text");
            let t = 24;
            z.config.getCurrentLanguage() == z.Enum.LANGUAGE_TYPE.ja_JP ? t = 18 : z.config.getCurrentLanguage() == z.Enum.LANGUAGE_TYPE.pt_BR && (t = 20), z.config.getCurrentLanguage() != z.Enum.LANGUAGE_TYPE.zh_CN && (this._nz_txt.getComponent(r).fontSize = t, this._xn_txt.getComponent(r).fontSize = t, this._ping_txt.getComponent(r).fontSize = t, this._thlp_txt.getComponent(r).fontSize = t, this._da_txt.getComponent(r).fontSize = t, this._hulu_txt.getComponent(r).fontSize = t, this._ths_txt.getComponent(r).fontSize = t, this._duizi_txt.getComponent(r).fontSize = t, this._gaopai_txt.getComponent(r).fontSize = t, this._liangdui_txt.getComponent(r).fontSize = t, this._sst_txt.getComponent(r).fontSize = t, this._sf_txt.getComponent(r).fontSize = t, this._sp_txt.getComponent(r).fontSize = t, this._hs_txt.getComponent(r).fontSize = t, this._niuzai_text.getComponent(r).fontSize = t, this._thlp_text.getComponent(r).fontSize = t, this._gaopai_text.getComponent(r).fontSize = t, this._hulu_text.getComponent(r).fontSize = t, this._xiaoniu_text.getComponent(r).fontSize = t, this._duizi_text.getComponent(r).fontSize = t, this._liangdui_text.getComponent(r).fontSize = t, this._jghjths_text.getComponent(r).fontSize = t, this._duia_text.getComponent(r).fontSize = t, this._ping_text.getComponent(r).fontSize = t, this._sst_text.getComponent(r).fontSize = t), this.updateTextPosition()
        }
        updateTextPosition() {
            let t = 16;
            this._niuzai_text.node.setPosition(this._nz_txt.node.getPosition().x + z.resMgr.getLabelStringSize(this._nz_txt.getComponent(r), z.config.getStringDataCasino("Cowboy_cow_text")).width + t, this._nz_txt.node.getPosition().y), this._thlp_text.node.setPosition(this._thlp_txt.node.getPosition().x + z.resMgr.getLabelStringSize(this._thlp_txt.getComponent(r), z.config.getStringDataCasino("Cowboy_thlp_text")).width + t, this._thlp_txt.node.getPosition().y), this._gaopai_text.node.setPosition(this._gaopai_txt.node.getPosition().x + z.resMgr.getLabelStringSize(this._gaopai_txt.getComponent(r), z.config.getStringDataCasino("Cowboy_gpyd_text")).width + t, this._gaopai_txt.node.getPosition().y), this._hulu_text.node.setPosition(this._hulu_txt.node.getPosition().x + z.resMgr.getLabelStringSize(this._hulu_txt.getComponent(r), z.config.getStringDataCasino("Cowboy_hulu_text")).width + t, this._hulu_txt.node.getPosition().y), this._xiaoniu_text.node.setPosition(this._xn_txt.node.getPosition().x + z.resMgr.getLabelStringSize(this._xn_txt.getComponent(r), z.config.getStringDataCasino("Cowboy_calf_text")).width + t, this._xn_txt.node.getPosition().y), this._duizi_text.node.setPosition(this._duizi_txt.node.getPosition().x + z.resMgr.getLabelStringSize(this._duizi_txt.getComponent(r), z.config.getStringDataCasino("Cowboy_dz_text")).width + t, this._duizi_txt.node.getPosition().y), this._liangdui_text.node.setPosition(this._liangdui_txt.node.getPosition().x + z.resMgr.getLabelStringSize(this._liangdui_txt.getComponent(r), z.config.getStringDataCasino("Cowboy_liangdui_text")).width + t, this._liangdui_txt.node.getPosition().y), this._jghjths_text.node.setPosition(this._ths_txt.node.getPosition().x + z.resMgr.getLabelStringSize(this._ths_txt.getComponent(r), z.config.getStringDataCasino("Cowboy_ths_text")).width + t, this._ths_txt.node.getPosition().y), this._ping_txt.node.setPosition(this._ping_text.node.getPosition().x + z.resMgr.getLabelStringSize(this._ping_text.getComponent(r), z.config.getStringDataCasino("Cowboy_ping_text")).width + t, this._ping_text.node.getPosition().y), this._duia_text.node.setPosition(this._da_txt.node.getPosition().x + z.resMgr.getLabelStringSize(this._da_txt.getComponent(r), z.config.getStringDataCasino("Cowboy_da_text")).width + t, this._da_txt.node.getPosition().y), this._sst_text.node.setPosition(this._sst_txt.node.getPosition().x + z.resMgr.getLabelStringSize(this._sst_txt.getComponent(r), z.config.getStringDataCasino("Cowboy_sst_text")).width + t, this._sst_txt.node.getPosition().y)
        }
        on_display_page1() {
            this._button1.enabled = !1, this.setQuestionView(!0), this._button2.enabled = !0, this.layout1.active = !1, this.layout2.active = !0, this.updateTitle(0)
        }
        on_display_page2() {
            this._button1.enabled = !0, this._button2.enabled = !1, this.layout1.active = !0, this.setQuestionView(!1), this.layout2.active = !1, this.updateTitle(1)
        }
        updateResult() {
            this.showHistoryMoveAnim(), z.cowboyNet.RequestTrend()
        }
        initLanguage() {}
        calculatePercent() {
            let t = this.nz + this.xn + this.ping,
                e = this.xn / t * 100,
                i = this.nz / t * 100,
                o = 0,
                n = "",
                s = "";
            0 == this.ping ? (o = 0, e = 100 - i) : o = 100 - e - i, e > 0 ? (n = z.StringTools.formatC("%.1f", e), this._red_text.string = z.StringTools.formatC("%.1f", e) + "%", this._red_text.node.active = !0) : this._red_text.node.active = !1, i > 0 ? (s = z.StringTools.formatC("%.1f", i), this._lan_text.string = z.StringTools.formatC("%.1f", i) + "%", this._lan_text.node.active = !0) : this._lan_text.node.active = !1, o > 0 ? (o = 100 - Number(s) - Number(n), this._green_text.string = z.StringTools.formatC("%.1f", o) + "%", this._green_text.node.active = !0) : this._green_text.node.active = !1, 0 == t ? (this._loadingBar1.node.active = !1, this._loadingBar2.node.active = !1, this._loadingBar3.node.active = !1, this._red_text.node.active = !1, this._lan_text.node.active = !1, this._green_text.node.active = !1) : (this._loadingBar1.node.active = !0, this._loadingBar2.node.active = !0, this._loadingBar3.node.active = !0, this._red_text.node.active = e > 0, this._lan_text.node.active = i > 0, 0 == this.ping ? this._green_text.node.active = !1 : this._green_text.node.active = o > 0), this._loadingBar1.progress = e / 100, this._loadingBar2.progress = (o + e) / 100, this._loadingBar3.progress = i / 100;
            let r = this._loadingBar1.node.getPosition().x - this._loadingBar1.node.getComponent(d).contentSize.width / 2;
            this._lan_text.node.setPosition(r + 12.5 * (o + e) + 12.5 * i / 2, this._lan_text.node.position.y), this._red_text.node.setPosition(r + 12.5 * e / 2, this._red_text.node.position.y), this._green_text.node.setPosition(r + 12.5 * e + 12.5 * o / 2, this._green_text.node.position.y)
        }
        onPage1() {
            this._button1.enabled = !1, this._button2.enabled = !0, this.layout1.active = !1, this.setQuestionView(!0), this.layout2.active = !0, this.updateTitle(0)
        }
        onPage2() {
            this._button1.enabled = !0, this._button2.enabled = !1, this.layout1.active = !0, this.setQuestionView(!1), this.layout2.active = !1, this.updateTitle(1), this.scheduleOnce(this.updateTextPosition.bind(this))
        }
        initRecord() {
            this._panelRecord = p("panelRecord", this.layout2);
            let t = p("recordDot", this._panelRecord);
            t.active = !1;
            let e = t.getPosition();
            for (let t = 0; t < this._recordNum + 1; t++) {
                let i = b(this.dot);
                this._panelRecord.addChild(i), i.active = !0, i.setPosition(new c(e.x + 64 * t, e.y)), this._recordDots.push(i), this._oriRecordDotsPos.push(this._recordDots[t].getPosition())
            }
        }
        initBiaoge1() {
            this._panelBiaoge1 = p("panelBiaoGe1", this.layout2);
            let t = p("recordDot", this._panelBiaoge1);
            t.active = !1;
            let e = t.getPosition(),
                i = new x(54.25, -326 / 6);
            for (let t = 0; t < 48; t++) {
                let o = b(this.solid);
                this._panelBiaoge1.addChild(o), o.setPosition(new c(e.x + Math.floor(t / 6) * i.x, e.y + t % 6 * i.y)), this._entityDots.push(o)
            }
        }
        resetblink() {
            T.blink(this._entityDots[this.index1], 2, 2), T.blink(this._hollowDots[this.index2][this.index3], 2, 2)
        }
        updateBiaoge1() {
            for (let t = 0; t < 48; t++) {
                y.stopAllByTarget(this._entityDots[t]), this._entityDots[t].active = !1;
                const e = this._entityDots[t].getChildByName("new");
                e && (e.active = !1)
            }
            if (S.getCowboyRoom().trendData.length <= 48)
                for (let t = 0; t < S.getCowboyRoom().trendData.length; t++) {
                    if (this._entityDots[t].active = !0, R.addOrGetComponent(this._entityDots[t], m).opacity = 255, 101 == S.getCowboyRoom().trendData[t].win ? this._entityDots[t].getComponent(s).spriteFrame = S.getTextureByName("chart_PLIST", "chart_13") : 102 == S.getCowboyRoom().trendData[t].win ? this._entityDots[t].getComponent(s).spriteFrame = S.getTextureByName("chart_PLIST", "chart_12") : 103 == S.getCowboyRoom().trendData[t].win && (this._entityDots[t].getComponent(s).spriteFrame = S.getTextureByName("chart_PLIST", "chart_11")), t + 1 == S.getCowboyRoom().trendData.length) {
                        const e = this._entityDots[t].getChildByName("new");
                        if (e) e.active = !0;
                        else {
                            const e = b(this.newPrefab);
                            e.setPosition(new c(0, 0, 1)), e.name = "new", this._entityDots[t].addChild(e)
                        }
                        let i = () => {
                            this._entityDots[t].active = !0, R.addOrGetComponent(this._entityDots[t], m).opacity = 255
                        };
                        this.index1 = t, T.blink(this._entityDots[t], 2, 2, i)
                    }
                    const e = S.getCowboyRoom().trendData[t].win_patterns,
                        i = this._entityDots[t].getComponentInChildren(r);
                    i && (i.node.active = !0, i.string = S.getWinPatternString(e))
                } else {
                    let t = S.getCowboyRoom().trendData.length - 48;
                    for (let e = 0; e < 48; e++) {
                        this._entityDots[e].active = !0, R.addOrGetComponent(this._entityDots[e], m).opacity = 255, 101 == S.getCowboyRoom().trendData[e + t].win ? this._entityDots[e].getComponent(s).spriteFrame = S.getTextureByName("chart_PLIST", "chart_13") : 102 == S.getCowboyRoom().trendData[e + t].win ? this._entityDots[e].getComponent(s).spriteFrame = S.getTextureByName("chart_PLIST", "chart_12") : 103 == S.getCowboyRoom().trendData[e + t].win && (this._entityDots[e].getComponent(s).spriteFrame = S.getTextureByName("chart_PLIST", "chart_11"));
                        this._entityDots[e].getComponent(d).contentSize;
                        if (47 == e) {
                            let t = b(this.solid);
                            t.getComponent(s).spriteFrame = S.getTextureByName("chart_PLIST", "chart_new"), t.setPosition(new c(22, 22)), this._entityDots[e].addChild(t), this._entityDots[e].active = !0;
                            let i = () => {
                                this._entityDots[e].active = !0, R.addOrGetComponent(this._entityDots[e], m).opacity = 255
                            };
                            this.index1 = e, T.blink(this._entityDots[e], 2, 2, i)
                        }
                        const i = S.getCowboyRoom().trendData[e + t].win_patterns,
                            o = this._entityDots[e].getComponentInChildren(r);
                        o && (o.node.active = !0, o.string = S.getWinPatternString(i))
                    }
                }
        }
        initBiaoge2() {
            this._panelBiaoge2 = p("panelBiaoGe2", this.layout2);
            let t = p("item_image", this._panelBiaoge2);
            t.active = !1;
            let e = t.getPosition(),
                i = new x(812 / 15, -326 / 6);
            for (let t = 0; t < 6; t++)
                for (let o = 0; o < 15; o++) {
                    let n = b(this.hollow);
                    this._panelBiaoge2.addChild(n), n.setPosition(new c(e.x + o * i.x, e.y + t * i.y)), this._hollowDots[t].push(n)
                }
        }
        updateBiaoge2() {
            for (let t = 0; t < 6; t++)
                for (let e = 0; e < 15; e++) y.stopAllByTarget(this._hollowDots[t][e]), this._hollowDots[t][e].active = !1, null != this._hollowDots[t][e].getChildByName("ping") && (this._hollowDots[t][e].destroyAllChildren(), this._hollowDots[t][e].removeAllChildren());
            let t = S.getCowboyRoom().trendRoad.length;
            for (let e = 0; e < t; e++) {
                let t = S.getCowboyRoom().trendRoad[e],
                    i = t.road_row.length;
                for (let o = 0; o < i; o++) {
                    if (R.addOrGetComponent(this._hollowDots[e][o], m).opacity = 255, "r" == t.road_row[o].win ? (this._hollowDots[e][o].active = !0, this._hollowDots[e][o].getComponent(s).spriteFrame = S.getTextureByName("chart_PLIST", "chart_03")) : "b" == t.road_row[o].win && (this._hollowDots[e][o].active = !0, this._hollowDots[e][o].getComponent(s).spriteFrame = S.getTextureByName("chart_PLIST", "chart_02")), t.road_row[o].eqc > 0) {
                        let i = z.StringTools.formatC("%d", t.road_row[o].eqc),
                            s = new n("text");
                        s.name = "ping", s.addComponent(r), s.getComponent(r).horizontalAlign = r.HorizontalAlign.CENTER, s.getComponent(r).verticalAlign = r.VerticalAlign.CENTER, s.getComponent(r).string = i, s.getComponent(r).fontSize = 24, s.getComponent(C).color = new h(23, 130, 82), s.setPosition(f(c.ZERO)), R.addOrGetComponent(s, m).opacity = 255, this._hollowDots[e][o].addChild(s)
                    }
                    if (e == S.getCowboyRoom().lastRow && o == S.getCowboyRoom().lastCol) {
                        this._hollowDots[e][o].active = !0;
                        let t = () => {
                            this._hollowDots[e][o].active = !0, R.addOrGetComponent(this._hollowDots[e][o], m).opacity = 255
                        };
                        this.index2 = e, this.index3 = o, T.blink(this._hollowDots[e][o], 2, 2, t)
                    }
                }
            }
        }
        updateData() {
            for (let t = 0; t < S.getCowboyRoom().dailyStat.length; t++) 101 != S.getCowboyRoom().dailyStat[t].betzone_type ? 102 != S.getCowboyRoom().dailyStat[t].betzone_type ? 103 != S.getCowboyRoom().dailyStat[t].betzone_type ? 203 != S.getCowboyRoom().dailyStat[t].betzone_type ? 205 != S.getCowboyRoom().dailyStat[t].betzone_type ? 206 != S.getCowboyRoom().dailyStat[t].betzone_type ? 301 != S.getCowboyRoom().dailyStat[t].betzone_type ? 302 != S.getCowboyRoom().dailyStat[t].betzone_type ? 303 != S.getCowboyRoom().dailyStat[t].betzone_type ? 304 != S.getCowboyRoom().dailyStat[t].betzone_type ? 305 != S.getCowboyRoom().dailyStat[t].betzone_type || (this._jghjths_text.string = z.StringTools.numberToString(S.getCowboyRoom().dailyStat[t].count)) : this._hulu_text.string = z.StringTools.numberToString(S.getCowboyRoom().dailyStat[t].count) : this._sst_text.string = z.StringTools.numberToString(S.getCowboyRoom().dailyStat[t].count) : this._liangdui_text.string = z.StringTools.numberToString(S.getCowboyRoom().dailyStat[t].count) : this._gaopai_text.string = z.StringTools.numberToString(S.getCowboyRoom().dailyStat[t].count) : this._thlp_text.string = z.StringTools.numberToString(S.getCowboyRoom().dailyStat[t].count) : this._duia_text.string = z.StringTools.numberToString(S.getCowboyRoom().dailyStat[t].count) : this._duizi_text.string = z.StringTools.numberToString(S.getCowboyRoom().dailyStat[t].count) : (this._ping_txt.string = z.StringTools.numberToString(S.getCowboyRoom().dailyStat[t].count), this.ping = S.getCowboyRoom().dailyStat[t].count) : (this._xiaoniu_text.string = z.StringTools.numberToString(S.getCowboyRoom().dailyStat[t].count), this.nz = S.getCowboyRoom().dailyStat[t].count) : (this._niuzai_text.string = z.StringTools.numberToString(S.getCowboyRoom().dailyStat[t].count), this.xn = S.getCowboyRoom().dailyStat[t].count)
        }
        cleanData() {
            this._ping_txt.string = "0", this._xiaoniu_text.string = "0", this._niuzai_text.string = "0", this._thlp_text.string = "0", this._duia_text.string = "0", this._hulu_text.string = "0", this._jghjths_text.string = "0"
        }
        hideHistoryMoveAnim() {
            for (let t = 0; t < this._recordDots.length; t++) y.stopAllByTarget(this._recordDots[t]), this._recordDots[t].setPosition(this._oriRecordDotsPos[t])
        }
        showHistoryMoveAnim() {
            if (S.getCowboyRoom().historyResults.length > 0) {
                let t = S.getCowboyRoom().historyResults[S.getCowboyRoom().historyResults.length - 1],
                    e = "record_draw";
                t == D.RED_WIN ? e = "record_red" : t == D.BLUE_WIN && (e = "record_blue"), this._recordDots[this._recordDots.length - 1].getComponent(s).spriteFrame = S.getTextureByName("game_dznz_PLIST", e);
                let i = new x(this._oriRecordDotsPos[0].x - this._oriRecordDotsPos[1].x, this._oriRecordDotsPos[0].y - this._oriRecordDotsPos[1].y);
                for (let t = 0; t < this._recordDots.length; t++) w(this._recordDots[t]).sequence(w().by(.3, {
                    position: new c(i.x, i.y)
                }), w.call((() => {
                    t == this._recordDots.length - 1 && this.updateHistoryResults()
                }))).start()
            }
        }
        updateHistoryResults() {
            this.hideHistoryMoveAnim();
            let t = S.getCowboyRoom().historyResults.length;
            for (let e = 0; e < this._recordNum; e++) {
                let i = t - e - 1,
                    o = this._recordNum - e - 1;
                if (i < 0) this._recordDots[o].getComponent(s).spriteFrame = S.getTextureByName("game_dznz_PLIST", "record_draw"), this._recordDots[o].active = !1;
                else {
                    let t = S.getCowboyRoom().historyResults[i],
                        e = "record_draw";
                    t == D.RED_WIN ? e = "record_red" : t == D.BLUE_WIN && (e = "record_blue"), this._recordDots[o].getComponent(s).spriteFrame = S.getTextureByName("game_dznz_PLIST", e), this._recordDots[o].active = !0
                }
            }
        }
        onClose() {
            this.node.active = !1, this.des_node.parent.active = !1
        }
        setQuestionView(t) {
            this.des_node.parent.active = !1, this.des_btn.node.active = t
        }
        updateTitle(t) {
            0 === t ? (this._title_img.scale = new c(1, this._title_img.scale.y, this._title_img.scale.z), this._page1_btn_text && (this._page1_btn_text.node.getComponent(C).color = new h(h.WHITE)), this._page2_btn_text && (this._page2_btn_text.node.getComponent(C).color = this.titleDisabledColor)) : 1 === t && (this._title_img.scale = new c(-1, this._title_img.scale.y, this._title_img.scale.z), this._page1_btn_text && (this._page1_btn_text.node.getComponent(C).color = this.titleDisabledColor), this._page2_btn_text && (this._page2_btn_text.node.getComponent(C).color = new h(h.WHITE)))
        }
    }).prototype, "_btn_close", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(Bt.prototype, "chartbg", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(Bt.prototype, "layout1", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = e(Bt.prototype, "layout2", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(Bt.prototype, "_line1", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(Bt.prototype, "_line2", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = e(Bt.prototype, "_line3", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), jt = e(Bt.prototype, "_nz_txt", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(Bt.prototype, "_xn_txt", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(Bt.prototype, "_ping_txt", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = e(Bt.prototype, "_ping_text", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(Bt.prototype, "_thlp_txt", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = e(Bt.prototype, "_da_txt", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(Bt.prototype, "_hulu_txt", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Wt = e(Bt.prototype, "_ths_txt", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(Bt.prototype, "_xiaoniu_text", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qt = e(Bt.prototype, "_niuzai_text", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qt = e(Bt.prototype, "_thlp_text", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yt = e(Bt.prototype, "_duia_text", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Jt = e(Bt.prototype, "_hulu_text", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Kt = e(Bt.prototype, "_jghjths_text", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Zt = e(Bt.prototype, "_duizi_text", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xt = e(Bt.prototype, "_duizi_txt", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $t = e(Bt.prototype, "_gaopai_text", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = e(Bt.prototype, "_gaopai_txt", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = e(Bt.prototype, "_liangdui_text", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = e(Bt.prototype, "_liangdui_txt", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = e(Bt.prototype, "_sst_text", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = e(Bt.prototype, "_sst_txt", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = e(Bt.prototype, "_button1", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = e(Bt.prototype, "_button2", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = e(Bt.prototype, "_title_img", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _e = e(Bt.prototype, "_ludan_text", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = e(Bt.prototype, "_tongji_text", [_t], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = e(Bt.prototype, "_lan_text", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = e(Bt.prototype, "_green_text", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = e(Bt.prototype, "_red_text", [gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = e(Bt.prototype, "_sf_txt", [ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = e(Bt.prototype, "_sp_txt", [pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), be = e(Bt.prototype, "_hs_txt", [dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = e(Bt.prototype, "_panelRecord", [bt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xe = e(Bt.prototype, "_panelBiaoge1", [ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ye = e(Bt.prototype, "_panelBiaoge2", [xt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = e(Bt.prototype, "solid", [yt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ce = e(Bt.prototype, "hollow", [mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fe = e(Bt.prototype, "dot", [Ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), we = e(Bt.prototype, "newPrefab", [ft], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ze = e(Bt.prototype, "_loadingBar1", [wt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Se = e(Bt.prototype, "_loadingBar2", [zt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), De = e(Bt.prototype, "_loadingBar3", [St], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pe = e(Bt.prototype, "_recordNum", [Oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 20
        }
    }), Re = e(Bt.prototype, "_recordDots", [Oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Te = e(Bt.prototype, "_oriRecordDotsPos", [Oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Be = e(Bt.prototype, "_entityDots", [Oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ve = e(Bt.prototype, "_hollowDots", [Oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new Array
        }
    }), Le = e(Bt.prototype, "nz", [Oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), Ne = e(Bt.prototype, "xn", [Oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), Ee = e(Bt.prototype, "ping", [Oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), Me = e(Bt.prototype, "index1", [Oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return -1
        }
    }), Ie = e(Bt.prototype, "index2", [Oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return -1
        }
    }), Ae = e(Bt.prototype, "index3", [Oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return -1
        }
    }), je = e(Bt.prototype, "des_btn", [Dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ge = e(Bt.prototype, "des_node", [Pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), He = e(Bt.prototype, "titleDisabledColor", [Rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new h(h.WHITE)
        }
    }), Tt = Bt)) || Tt));
    o._RF.pop()
}