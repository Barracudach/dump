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
import * as x from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as C from "./cv.js";
import * as w from "./PokerMasterDataMgr.js";
import * as k from "./pokermaster.mjs_cjs=&original=.js";
import * as S from "./PokerMasterDef.js";
import * as y from "./CowboyCard.js";
import * as v from "./Enum.js";
import * as P from "./CommonTools.js";
import * as z from "./TweenControl.js";

function main() {
    var M, T, N, R, E, L, A, F, B, D, O, U, I, G, H, W, V, Z, $, j, K, Y, q, J, Q, X, tt, et, it, nt, rt, ot, at, st, _t, lt, ht, gt, ut, pt, ct, dt, ft, bt, mt, xt, Ct, wt, kt, St, yt, vt, Pt, zt, Mt, Tt, Nt, Rt, Et, Lt, At, Ft, Bt, Dt, Ot, Ut, It, Gt, Ht, Wt, Vt, Zt, $t, jt, Kt, Yt, qt, Jt, Qt, Xt, te, ee, ie, ne, re, oe, ae;
    n._RF.push({}, "535d0JF1eVCmKow7iYO4jFS", "PokerMasterReview", void 0);
    const {
        ccclass: se,
        property: _e,
        executionOrder: le
    } = s;
    t("PokerMasterReview", (M = le(1), T = _e(r), N = _e(r), R = _e(r), E = _e(r), L = _e(r), A = _e(r), F = _e(r), B = _e(r), D = _e(r), O = _e(r), U = _e(r), I = _e(r), G = _e(r), H = _e(r), W = _e(r), V = _e(r), Z = _e(r), $ = _e(r), j = _e(r), K = _e(r), Y = _e(r), q = _e(r), J = _e(r), Q = _e(r), X = _e(r), tt = _e(r), et = _e(r), it = _e(r), nt = _e(r), rt = _e(o), ot = _e(o), at = _e(o), st = _e(o), _t = _e(r), lt = _e(a), ht = _e(a), gt = _e(a), ut = _e(a), pt = _e(a), ct = _e(a), dt = _e(a), ft = _e(a), se(bt = M((xt = e((mt = class extends _ {
        constructor(...t) {
            super(...t), i(this, "layout1", xt, this), i(this, "layout2", Ct, this), i(this, "layout3", wt, this), i(this, "bottom", kt, this), i(this, "_totalbet_txt", St, this), i(this, "_totalbet_text", yt, this), i(this, "_profit_txt", vt, this), i(this, "card0", Pt, this), i(this, "card1", zt, this), i(this, "card2", Mt, this), i(this, "card3", Tt, this), i(this, "card4", Nt, this), i(this, "card5", Rt, this), i(this, "card6", Et, this), i(this, "card7", Lt, this), i(this, "card8", At, this), i(this, "panel_public_card", Ft, this), i(this, "panel_fisherman_card", Bt, this), i(this, "panel_shark_card", Dt, this), i(this, "_first_bet_txt", Ot, this), i(this, "_fisherman_txt", Ut, this), i(this, "_fisherman_odds_txt", It, this), i(this, "_fisherman_bet_txt", Gt, this), i(this, "_fisherman_num", Ht, this), i(this, "_shark_bet_txt", Wt, this), i(this, "_shark_odds_txt", Vt, this), i(this, "_shark_txt", Zt, this), i(this, "_shark_num", $t, this), i(this, "_second_bet_txt", jt, this), i(this, "btn_first", Kt, this), i(this, "btn_last", Yt, this), i(this, "btn_before", qt, this), i(this, "btn_next", Jt, this), this.paixing_txt_arr = [], this.paixing_peilv_arr = [], this.paixing_xiazhu_arr = [], this.paixing_win_arr = [], i(this, "panel_main", Qt, this), i(this, "txt_paixing", Xt, this), i(this, "txt_page_0", te, this), i(this, "txt_page_1", ee, this), this._curPage = 19, this._vFishermanCard = [], this._vPubsCard = [], this._vSharkCard = [], this._strCardFacePath = "zh_CN/game/cowboy/card_type_0/", this._strCardBackPath = "zh_CN/game/pokermaster/card_type_0/", this.loseColor = new l(153, 153, 153), this.winColor = new l(255, 106, 7), this.startPos = h(g.ZERO), this.languageChangedHidden = !1, i(this, "shark_bet_txt_0", ie, this), i(this, "fisherman_bet_txt_0", ne, this), i(this, "fisherman_odds_txt_0", re, this), i(this, "shark_odds_txt_0", oe, this), i(this, "profit_txt_0", ae, this), this.NUM_0 = 6, this.NUM_1 = 4
        }
        getWinSize() {
            return v.instance.getWinSize(this.node)
        }
        onLoad() {
            C.resMgr.adaptWidget(this.node, !0);
            let t = y.zh_CN == C.config.getCurrentLanguage() || y.zh_TW == C.config.getCurrentLanguage();
            this._totalbet_text = u("totalbet_text", this.layout2), this._totalbet_txt = u("totalbet_txt", this.layout2), this._profit_txt = u("profit_txt", this.layout2), this._profit_txt.getComponent(p).color = new l(255, 106, 7), this.profit_txt_0.node.getComponent(p).color = new l(255, 106, 7), this._first_bet_txt = u("first_bet_txt", this.layout2), this._fisherman_txt = u("fisherman_txt", this.layout2), this._fisherman_bet_txt = u("fisherman_bet_txt", this.layout2), this._fisherman_odds_txt = u("fisherman_odds_txt", this.layout2), this._shark_txt = u("shark_txt", this.layout2), this._shark_bet_txt = u("shark_bet_txt", this.layout2), this._shark_odds_txt = u("shark_odds_txt", this.layout2), this._second_bet_txt = u("second_bet_txt", this.layout2);
            for (let e = 0; e < 5; e++) {
                let i = this.layout2.getChildByName("paixin_txt_" + e),
                    n = this.layout2.getChildByName(C.StringTools.formatC("paixin_num_%d_0", e)),
                    r = this.layout2.getChildByName(C.StringTools.formatC("paixin_num_%d_1", e)),
                    o = this.layout2.getChildByName(C.StringTools.formatC("paixin_num_%d_2", e));
                t || (i.getComponent(a).fontSize = i.getComponent(a).fontSize - this.NUM_1), this.paixing_txt_arr.push(i), this.paixing_peilv_arr.push(n.getComponent(a)), this.paixing_xiazhu_arr.push(r.getComponent(a)), this.paixing_win_arr.push(o.getComponent(a))
            }
            this._fisherman_num = u("fisherman_num", this.layout2), this._shark_num = u("shark_num", this.layout2);
            let e = this.panel_fisherman_card.children;
            for (let t = 0; t < e.length; ++t) {
                let e = this.panel_fisherman_card.getChildByName(`card_${t}`);
                if (e) {
                    let t = S.create(this._strCardFacePath, this._strCardBackPath);
                    t.ResetFromNode(e), t.SetFace(!1), this._vFishermanCard.push(t)
                }
            }
            let i = this.panel_public_card.children;
            for (let t = 0; t < i.length; ++t) {
                let e = this.panel_public_card.getChildByName(`card_${t}`);
                if (e) {
                    let t = S.create(this._strCardFacePath, this._strCardBackPath);
                    t.ResetFromNode(e), t.SetFace(!1), this._vPubsCard.push(t)
                }
            }
            let n = this.panel_shark_card.children;
            for (let t = 0; t < n.length; ++t) {
                let e = this.panel_shark_card.getChildByName(`card_${t}`);
                if (e) {
                    let t = S.create(this._strCardFacePath, this._strCardBackPath);
                    t.ResetFromNode(e), t.SetFace(!1), this._vSharkCard.push(t)
                }
            }
            if (C.config.IS_FULLSCREEN) {
                let t = C.native.isScreenLandscape() ? C.viewAdaptive.IPHONEX_OFFSETY : 0;
                this.panel_main.setPosition(this.getWinSize().width / 2 - this.panel_main.getComponent(c).width / 2 - t + this.panel_main.getComponent(c).width / 2, this.panel_main.getPosition().y)
            }
            if (this.startPos = this.node.getPosition(), this.btn_first.node.on("click", (t => {
                    this.firstPage()
                }), this), this.btn_last.node.on("click", (t => {
                    this.lastPage()
                }), this), this.btn_before.node.on("click", (t => {
                    this.beforePage()
                }), this), this.btn_next.node.on("click", (t => {
                    this.nextPage()
                }), this), this.node.on(r.EventType.TOUCH_END, this.autoHide, this), !t) {
                this.txt_paixing.fontSize = this.txt_paixing.fontSize - this.NUM_0;
                let t = [this._totalbet_txt, this._profit_txt, this._first_bet_txt, this._fisherman_txt, this._fisherman_bet_txt, this._fisherman_odds_txt, this._shark_txt, this._shark_bet_txt, this._shark_odds_txt, this._second_bet_txt],
                    e = t.length;
                for (let i = 0; i < e; ++i) {
                    let e = t[i].getComponent(a);
                    e.fontSize > 24 ? e.fontSize = e.fontSize - this.NUM_0 : e.fontSize = e.fontSize - this.NUM_1
                }
            }
            this.registerMsg(), d.on(f.EVENT_SHOW, this.OnAppEnterForeground, this)
        }
        onEnable() {
            this.languageChangedHidden && (this.languageChangedHidden = !1, this.onChangeLanguage())
        }
        start() {
            this.onChangeLanguage()
        }
        OnAppEnterForeground() {
            this && this.node && b(this.node, !0) && C.pokerMasterNet.reqBetReview()
        }
        onChangeLanguage() {
            C.resMgr.getLabelStringSize(this._totalbet_txt.getComponent(a), C.config.getStringDataCasino("PokerMaster_totalbet_txt"));
            this._profit_txt.getComponent(a).string = C.config.getStringDataCasino("PokerMaster_profit_txt"), this._fisherman_txt.getComponent(a).string = C.config.getStringDataCasino("PokerMaster_fishermanwin_txt"), this._shark_txt.getComponent(a).string = C.config.getStringDataCasino("PokerMaster_shark_txt");
            let t = C.resMgr.getLabelStringSize(this._fisherman_bet_txt.getComponent(a), C.config.getStringDataCasino("PokerMaster_bet_txt"));
            this._shark_bet_txt.getComponent(a).string = C.config.getStringDataCasino("PokerMaster_bet_txt");
            let e = C.resMgr.getLabelStringSize(this._fisherman_odds_txt.getComponent(a), C.config.getStringDataCasino("PokerMaster_odds_txt"));
            this._shark_odds_txt.getComponent(a).string = C.config.getStringDataCasino("PokerMaster_odds_txt");
            for (let t = 0; t < 5; t++) this.paixing_txt_arr[t].getComponent(a).string = C.config.getStringDataCasino("PokerMaster_paixin_txt_" + t);
            this._first_bet_txt.getComponent(a).string = C.config.getStringDataCasino("PokerMaster_first_bet_txt"), this._second_bet_txt.getComponent(a).string = C.config.getStringDataCasino("PokerMaster_second_bet_txt"), this.fisherman_bet_txt_0.node.setPosition(new g(this._fisherman_bet_txt.position.x + t.width, this._fisherman_bet_txt.position.y, this._fisherman_bet_txt.position.z)), this.fisherman_odds_txt_0.node.setPosition(new g(this._fisherman_odds_txt.position.x + e.width, this._fisherman_odds_txt.position.y, this._fisherman_odds_txt.position.z));
            let i = this._curPage,
                n = w.getPokerMasterRoom().vBetReview;
            if (i = i < 0 ? 0 : i, 0 != n.length && i < n.length) {
                let t = n[i],
                    e = 8 != t.level ? `M_UITitle${t.level+112}` : "Humanboy_game_card_type_four_of_a_kind";
                this.txt_paixing.string = C.config.getStringDataCasino(e)
            }
            this.languageChangedHidden = !this.node.active
        }
        registerMsg() {
            let t = k.LocalMsg().MsgPrefix;
            C.MessageCenter.register(t + k.LocalMsg().UPDATE_REVIEW, this._onUpdateReview.bind(this), this.node), C.MessageCenter.register(C.config.CHANGE_LANGUAGE, this.onChangeLanguage.bind(this), this.node)
        }
        unregisterMsg() {
            let t = k.LocalMsg().MsgPrefix;
            C.MessageCenter.unregister(t + k.LocalMsg().UPDATE_REVIEW, this.node), C.MessageCenter.unregister(C.config.CHANGE_LANGUAGE, this.node)
        }
        onDestroy() {
            this.unregisterMsg(), d.off(f.EVENT_SHOW, this.OnAppEnterForeground, this)
        }
        beforePage() {
            let t = this._curPage - 1 >= 0 ? this._curPage - 1 : this._curPage;
            this.updatePage(t)
        }
        nextPage() {
            let t = this._curPage + 1 < w.getPokerMasterRoom().vBetReview.length ? this._curPage + 1 : this._curPage;
            this.updatePage(t)
        }
        firstPage() {
            this.updatePage(0)
        }
        lastPage() {
            this.updatePage(w.getPokerMasterRoom().vBetReview.length - 1)
        }
        autoShow(t, e = !0) {
            this.node.active = !0, this.unscheduleAllCallbacks(), P.stopAll(this.node), C.action.removeShieldLayer(m.getScene().getComponentInChildren(x).node, `shieldLayer-showAction_${this.node.name}`), e && C.action.showAction(this.node, C.action.eMoveActionDir.EMAD_TO_LEFT, C.action.eMoveActionType.EMAT_FADE_IN), C.pokerMasterNet.reqBetReview()
        }
        autoHide(t = !0) {
            this.node.active && (P.stopAll(this.node), C.action.removeShieldLayer(m.getScene().getComponentInChildren(x).node, `shieldLayer-showAction_${this.node.name}`), this.node.setPosition(this.startPos), t ? C.action.showAction(this.node, C.action.eMoveActionDir.EMAD_TO_RIGHT, C.action.eMoveActionType.EMAT_FADE_OUT, C.action.delay_type.NORMAL) : this.node.active = !1)
        }
        _onUpdateReview() {
            this._curPage = w.getPokerMasterRoom().vBetReview.length, this.updatePage(this._curPage - 1)
        }
        updatePage(t) {
            let e = t < 0 || null == w.getPokerMasterRoom().vBetReview[t];
            for (let t = 0; t < 2; ++t) this._vFishermanCard[t].node.active = !e;
            for (let t = 0; t < 5; ++t) this._vPubsCard[t].node.active = !e;
            for (let t = 0; t < 2; ++t) this._vSharkCard[t].node.active = !e;
            if (u("panel_main/paixing_bg", this.node).active = !e, e) return;
            this._curPage = t, this._totalbet_text.getComponent(a).string = C.StringTools.serverGoldToShowString(w.getPokerMasterRoom().vBetReview[t].totalBet);
            let i = w.getPokerMasterRoom().vBetReview[t].totalWin > 0,
                n = (C.resMgr.getLabelStringSize(this.profit_txt_0, (i ? "+" : "") + C.StringTools.serverGoldToShowString(w.getPokerMasterRoom().vBetReview[t].totalWin)), C.StringTools.getArrayLength(w.getPokerMasterRoom().vBetReview));
            this.txt_page_0.string = C.String(t + 1), this.txt_page_1.string = "/" + C.String(n);
            let r = (t, e) => {
                    t.interactable = e, t.enabled = e;
                    let i = "zh_CN/game/pokermaster/ui/" + (e ? "touch" : "no_touch");
                    C.resMgr.setButtonFrame(t.node, i, i, i, i)
                },
                o = [!0, !0, !0, !0];
            0 == t ? (o[0] = !1, o[1] = !1, 1 == n && (o[2] = !1, o[3] = !1)) : t > 0 && t + 1 == n && (o[2] = !1, o[3] = !1), r(this.btn_first, o[0]), r(this.btn_before, o[1]), r(this.btn_next, o[2]), r(this.btn_last, o[3]);
            let s = w.getPokerMasterRoom().vBetReview[t],
                _ = !1,
                h = s.winOps.length;
            for (let t = 0; t < h; t++) s.winOps[t] == z.pokermaster_proto.BetZoneOption.EQUAL && (_ = !0);
            let g = 8 != s.level ? `M_UITitle${s.level+112}` : "Humanboy_game_card_type_four_of_a_kind";
            this.txt_paixing.string = C.config.getStringDataCasino(g);
            for (let t = 0; t < 2; ++t) {
                let e = z.pokermaster_proto.CardItem.create(s.fisherCard[t]);
                this._vFishermanCard[t].SetContent(e.number, e.suit), this._vFishermanCard[t].SetFace(!0)
            }
            for (let t = 0; t < 5; ++t) {
                let e = z.pokermaster_proto.CardItem.create(s.pubCard[t]);
                this._vPubsCard[t].SetContent(e.number, e.suit), this._vPubsCard[t].SetFace(!0)
            }
            for (let t = 0; t < 2; ++t) {
                let e = z.pokermaster_proto.CardItem.create(s.sharkCard[t]);
                this._vSharkCard[t].SetContent(e.number, e.suit), this._vSharkCard[t].SetFace(!0)
            }
            let p = [z.pokermaster_proto.BetZoneOption.FIVE_NONE_1DUI, z.pokermaster_proto.BetZoneOption.FIVE_2DUI, z.pokermaster_proto.BetZoneOption.FIVE_SAN_SHUN_TONG, z.pokermaster_proto.BetZoneOption.FIVE_GOURD, z.pokermaster_proto.BetZoneOption.FIVE_KING_TONG_HUA_SHUN_4];
            for (let e = 0; e < w.getPokerMasterRoom().vBetReview[t].detail.length; ++e) {
                let i = w.getPokerMasterRoom().vBetReview[t].detail[e];
                if (i.option === z.pokermaster_proto.BetZoneOption.FISHER_WIN) {
                    this._fisherman_txt.getComponent(a).color = new l(153, 153, 153), this._fisherman_odds_txt.getComponent(a).color = new l(153, 153, 153), this.fisherman_odds_txt_0.getComponent(a).color = new l(153, 153, 153), this._fisherman_bet_txt.getComponent(a).color = new l(153, 153, 153), this.fisherman_bet_txt_0.color = new l(153, 153, 153), this._fisherman_num.getComponent(a).color = new l(153, 153, 153), i.win_amt > 0 && !_ && (this._fisherman_txt.getComponent(a).color = new l(255, 106, 7), this._fisherman_odds_txt.getComponent(a).color = new l(255, 106, 7), this.fisherman_odds_txt_0.color = new l(255, 106, 7), this._fisherman_bet_txt.getComponent(a).color = new l(255, 106, 7), this.fisherman_bet_txt_0.color = new l(255, 106, 7), this._fisherman_num.getComponent(a).color = new l(255, 106, 7)), this.fisherman_odds_txt_0.string = C.StringTools.serverGoldToShowString(i.odds) + (y.zh_CN == C.config.getCurrentLanguage() ? "倍" : ""), this.fisherman_bet_txt_0.string = C.StringTools.serverGoldToShowString(i.betAmount);
                    let t = i.win_amt > 0;
                    this._fisherman_num.getComponent(a).string = (t ? "+" : "") + C.StringTools.serverGoldToShowString(i.win_amt)
                } else if (i.option === z.pokermaster_proto.BetZoneOption.SHARK_WIN) {
                    this._shark_txt.getComponent(a).color = new l(153, 153, 153), this._shark_odds_txt.getComponent(a).color = new l(153, 153, 153), this.shark_odds_txt_0.color = new l(153, 153, 153), this._shark_bet_txt.getComponent(a).color = new l(153, 153, 153), this.shark_bet_txt_0.color = new l(153, 153, 153), this._shark_num.getComponent(a).color = new l(153, 153, 153), i.win_amt > 0 && !_ && (this._shark_txt.getComponent(a).color = new l(255, 106, 7), this._shark_odds_txt.getComponent(a).color = new l(255, 106, 7), this.shark_odds_txt_0.color = new l(255, 106, 7), this._shark_bet_txt.getComponent(a).color = new l(255, 106, 7), this.shark_bet_txt_0.color = new l(255, 106, 7), this._shark_num.getComponent(a).color = new l(255, 106, 7));
                    let t = C.resMgr.getLabelStringSize(this.shark_odds_txt_0, C.StringTools.serverGoldToShowString(i.odds) + (y.zh_CN == C.config.getCurrentLanguage() ? "倍" : ""));
                    this._shark_odds_txt.setPosition(this.shark_odds_txt_0.node.position.x - t.width, this._shark_odds_txt.position.y, 0);
                    let e = C.resMgr.getLabelStringSize(this.shark_bet_txt_0, C.StringTools.serverGoldToShowString(i.betAmount));
                    this._shark_bet_txt.setPosition(this.shark_bet_txt_0.node.position.x - e.width, this._shark_bet_txt.position.y, 0);
                    let n = i.win_amt > 0;
                    this._shark_num.getComponent(a).string = (n ? "+" : "") + C.StringTools.serverGoldToShowString(i.win_amt)
                } else
                    for (let t = 0; t < 5; t++)
                        if (i.option == p[t]) {
                            this.paixing_peilv_arr[t].string = C.StringTools.serverGoldToShowString(i.odds) + (y.zh_CN == C.config.getCurrentLanguage() ? "倍" : ""), this.paixing_xiazhu_arr[t].string = C.StringTools.serverGoldToShowString(i.betAmount);
                            let e = i.win_amt > 0;
                            this.paixing_win_arr[t].string = (e ? "+" : "") + C.StringTools.serverGoldToShowString(i.win_amt), this.setLabColor(this.paixing_peilv_arr[t].node, e), this.setLabColor(this.paixing_xiazhu_arr[t].node, e), this.setLabColor(this.paixing_win_arr[t].node, e), this.setLabColor(this.paixing_txt_arr[t], e);
                            break
                        }
            }
        }
        setLabColor(t, e) {
            t.getComponent(a).color = e ? this.winColor : this.loseColor
        }
    }).prototype, "layout1", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(mt.prototype, "layout2", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(mt.prototype, "layout3", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(mt.prototype, "bottom", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(mt.prototype, "_totalbet_txt", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(mt.prototype, "_totalbet_text", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(mt.prototype, "_profit_txt", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(mt.prototype, "card0", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = e(mt.prototype, "card1", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(mt.prototype, "card2", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(mt.prototype, "card3", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(mt.prototype, "card4", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(mt.prototype, "card5", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = e(mt.prototype, "card6", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(mt.prototype, "card7", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = e(mt.prototype, "card8", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = e(mt.prototype, "panel_public_card", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(mt.prototype, "panel_fisherman_card", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(mt.prototype, "panel_shark_card", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(mt.prototype, "_first_bet_txt", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = e(mt.prototype, "_fisherman_txt", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(mt.prototype, "_fisherman_odds_txt", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(mt.prototype, "_fisherman_bet_txt", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(mt.prototype, "_fisherman_num", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Wt = e(mt.prototype, "_shark_bet_txt", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(mt.prototype, "_shark_odds_txt", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Zt = e(mt.prototype, "_shark_txt", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $t = e(mt.prototype, "_shark_num", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), jt = e(mt.prototype, "_second_bet_txt", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Kt = e(mt.prototype, "btn_first", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yt = e(mt.prototype, "btn_last", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qt = e(mt.prototype, "btn_before", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Jt = e(mt.prototype, "btn_next", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qt = e(mt.prototype, "panel_main", [_t], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xt = e(mt.prototype, "txt_paixing", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = e(mt.prototype, "txt_page_0", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = e(mt.prototype, "txt_page_1", [gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = e(mt.prototype, "shark_bet_txt_0", [ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = e(mt.prototype, "fisherman_bet_txt_0", [pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = e(mt.prototype, "fisherman_odds_txt_0", [ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = e(mt.prototype, "shark_odds_txt_0", [dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = e(mt.prototype, "profit_txt_0", [ft], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = mt)) || bt) || bt));
    n._RF.pop()
}