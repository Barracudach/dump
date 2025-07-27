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
import * as w from "./cv.js";
import * as C from "./PokerMasterDataMgr.js";
import * as D from "./PokerMasterDef.js";
import * as P from "./cb.js";
import * as k from "./Enum.js";
import * as x from "./MiniGameSoundManager.js";
import * as T from "./TweenControl.js";

function main() {
    var v, M, S, z, B, L, F, R, N, G, E, A, I, O, U, H, V, W, q, Y, j, J, K, Q, X, Z, $, tt, et, it, ot, nt, rt, st, at, ht, lt, _t, ut, gt, pt, ct, mt, ft, dt, bt, yt, wt, Ct, Dt, Pt;
    o._RF.push({}, "7ea44rSwxRJEburOYVTL5Vf", "PokerMasterChart", void 0);
    const {
        ccclass: kt,
        property: xt
    } = l;
    t("PokerMasterChart", (v = xt(n), M = xt(r), S = xt(n), z = xt(n), B = xt(n), L = xt(n), F = xt(n), R = xt(n), N = xt(n), G = xt(n), E = xt(s), A = xt(s), I = xt(s), O = xt(n), U = xt(n), H = xt(n), V = xt(n), W = xt(n), q = xt(n), Y = xt(a), j = xt(h), J = xt(n), kt((X = e((Q = class extends _ {
        constructor(...t) {
            super(...t), i(this, "_btn_close", X, this), i(this, "chartbg", Z, this), i(this, "layout1", $, this), i(this, "layout2", tt, this), i(this, "_fortune_txt", et, this), i(this, "_panelBiaoge1", it, this), i(this, "_panelBiaoge2", ot, this), i(this, "road_statistics_txt", nt, this), i(this, "_fisherman_txt", rt, this), i(this, "_shark_txt", st, this), i(this, "solid", at, this), i(this, "hollow", ht, this), i(this, "newCrown", lt, this), i(this, "_fisherman_bar", _t, this), i(this, "_shark_bar", ut, this), i(this, "_fisherman_huo", gt, this), i(this, "_shark_huo", pt, this), i(this, "_fisherman_points", ct, this), i(this, "_shark_points", mt, this), i(this, "chart_PLIST", ft, this), i(this, "index1", dt, this), i(this, "index2", bt, this), i(this, "index3", yt, this), i(this, "_entityDots", wt, this), i(this, "_hollowDots", Ct, this), i(this, "des_btn", Dt, this), i(this, "des_spr", Pt, this)
        }
        start() {
            P.addPlist("chart_PLIST", this.chart_PLIST)
        }
        onLoad() {
            this._btn_close = u("btn_close", this.chartbg.node), this._btn_close.on(h.EventType.CLICK, (t => {
                this.node.active = !1, this.des_spr.parent.active = !1
            }), this), this._fisherman_txt = u("fisherman_txt", this.layout1), this._shark_txt = u("shark_txt", this.layout1), k.zh_CN != w.config.getCurrentLanguage() && k.zh_TW != w.config.getCurrentLanguage() && (this._fisherman_txt.getComponent(g).fontSize = this._fisherman_txt.getComponent(g).fontSize - 6, this._shark_txt.getComponent(g).fontSize = this._shark_txt.getComponent(g).fontSize - 6, w.resMgr.setSpriteFrame(this.road_statistics_txt, "en_US/game/pokermaster/title_statistics")), this._fortune_txt = u("fortune_txt", this.layout1), this._fisherman_huo = u("fisherman_huo", this.layout1), this._shark_huo = u("shark_huo", this.layout1), this._fisherman_points = u("fisherman_points", this.layout1), this._shark_points = u("shark_points", this.layout1), this._fisherman_bar = u("fisherman_progressBar", this.layout1), this._shark_bar = u("shark_progressBar", this.layout1), this._fisherman_huo = u("fisherman_huo", this.layout1), this._shark_huo = u("shark_huo", this.layout1);
            for (let t = 0; t < 6; t++) this._hollowDots[t] = [];
            this.initFortune(), this.initBiaoge1(), this.initBiaoge2(), this.registerMsg(), this.onChangeLanguage(), this.des_spr.parent.active = !1, this.node.getChildByName("zhezhao_panel").on(n.EventType.TOUCH_END, (t => {
                this.des_spr.parent.active = !1, t.propagationStopped = !0
            }), this), this.des_spr.on(n.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0
            }), this), this.des_btn.node.on(n.EventType.TOUCH_END, (t => {
                x.playButtonSound("tab"), this.des_spr.parent.active = !0
            }), this)
        }
        updateFortune() {
            this._fisherman_points.getComponent(g).string = w.StringTools.clientGoldByServer(C.getPokerMasterRoom().tFortune.fisherFortune).toString(), this._shark_points.getComponent(g).string = w.StringTools.clientGoldByServer(C.getPokerMasterRoom().tFortune.sharkFortune).toString();
            let t = C.getPokerMasterRoom().tFortune.fisherFortune + C.getPokerMasterRoom().tFortune.sharkFortune,
                e = 0 == t ? 0 : C.getPokerMasterRoom().tFortune.fisherFortune / (C.getPokerMasterRoom().tFortune.fisherFortune + C.getPokerMasterRoom().tFortune.sharkFortune);
            this._fisherman_bar.getComponent(p).progress = e, this._shark_bar.getComponent(p).progress = 0 == t ? 0 : 1 - e, this._fisherman_huo.setPosition(this._fisherman_bar.getPosition().x - this._fisherman_bar.getContentSize().width / 2 + this._fisherman_bar.getComponent(p).progress * this._fisherman_bar.getContentSize().width + 30, this._fisherman_huo.getPosition().y), this._fisherman_points.setPosition(this._fisherman_huo.getPosition().x + 30, this._fisherman_points.getPosition().y), this._shark_huo.setPosition(this._shark_bar.getPosition().x - this._shark_bar.getContentSize().width / 2 + this._shark_bar.getComponent(p).progress * this._shark_bar.getContentSize().width + 30, this._shark_huo.getPosition().y), this._shark_points.setPosition(this._shark_huo.getPosition().x + 30, this._shark_points.getPosition().y)
        }
        onChangeLanguage() {
            this._fisherman_txt.getComponent(g).string = w.config.getStringDataCasino("PokerMaster_fisherman"), this._shark_txt.getComponent(g).string = w.config.getStringDataCasino("PokerMaster_shark"), this._fortune_txt.getComponent(g).string = w.config.getStringDataCasino("PokerMaster_fortune")
        }
        registerMsg() {
            let t = D.LocalMsg().MsgPrefix;
            w.MessageCenter.register(t + D.LocalMsg().UPDATE_TREND, this._onTrendUpdate.bind(this), this.node), w.MessageCenter.register(w.config.CHANGE_LANGUAGE, this.onChangeLanguage.bind(this), this.node)
        }
        unregisterMsg() {
            let t = D.LocalMsg().MsgPrefix;
            w.MessageCenter.unregister(t + D.LocalMsg().UPDATE_TREND, this.node), w.MessageCenter.unregister(w.config.CHANGE_LANGUAGE, this.node)
        }
        onDestroy() {
            this.unregisterMsg()
        }
        initFortune() {
            this.updateFortune()
        }
        initBiaoge1() {
            this._panelBiaoge1 = u("panelBiaoGe1", this.layout2);
            let t = u("recordDot", this._panelBiaoge1);
            t.active = !1;
            let e = t.getPosition(),
                i = c(54.25, -326 / 6);
            for (let t = 0; t < 48; t++) {
                let o = m(this.solid);
                this._panelBiaoge1.addChild(o), o.setPosition(f(e.x + Math.floor(t / 6) * i.x, e.y + t % 6 * i.y, 0)), this._entityDots.push(o)
            }
        }
        initBiaoge2() {
            this._panelBiaoge2 = u("panelBiaoGe2", this.layout2);
            let t = u("item_image", this._panelBiaoge2);
            t.active = !1;
            let e = t.getPosition(),
                i = c(812 / 15, -326 / 6);
            for (let t = 0; t < 6; t++)
                for (let o = 0; o < 15; o++) {
                    let n = m(this.hollow);
                    this._panelBiaoge2.addChild(n), n.setPosition(f(e.x + o * i.x, e.y + t * i.y, 0)), this._hollowDots[t].push(n)
                }
        }
        updateBiaoge1() {
            for (let t = 0; t < 48; t++) {
                T.stopAll(this._entityDots[t]), this._entityDots[t].active = !1;
                const e = this._entityDots[t].getChildByName("new");
                e && (e.active = !1)
            }
            if (C.getPokerMasterRoom().vTrendData.length <= 48)
                for (let e = 0; e < C.getPokerMasterRoom().vTrendData.length; e++) {
                    var t;
                    this._entityDots[e].active = !0, this._entityDots[e].addOrGetComponent(d).opacity = 255, 101 == C.getPokerMasterRoom().vTrendData[e].win ? this._entityDots[e].getComponent(r).spriteFrame = P.getTextureByName("chart_PLIST", "chart_13") : 102 == C.getPokerMasterRoom().vTrendData[e].win ? this._entityDots[e].getComponent(r).spriteFrame = P.getTextureByName("chart_PLIST", "chart_12") : 103 == C.getPokerMasterRoom().vTrendData[e].win && (this._entityDots[e].getComponent(r).spriteFrame = P.getTextureByName("chart_PLIST", "chart_11"));
                    const i = C.getPokerMasterRoom().vTrendData[e].win_patterns,
                        o = null == (t = this._entityDots[e].getChildByName("text")) ? void 0 : t.getComponent(g);
                    if (o && (o.node.active = !0, o.string = P.getWinPatternString(i)), e + 1 == C.getPokerMasterRoom().vTrendData.length) {
                        const t = m(this.newCrown);
                        t.setPosition(new b(0, 0, 1)), this._entityDots[e].addChild(t);
                        let i = () => {
                            this._entityDots[e].active = !0, this._entityDots[e].addOrGetComponent(d).opacity = 255
                        };
                        this.index1 = e, T.blink(this._entityDots[e], 2, 2, i)
                    }
                } else {
                    let t = C.getPokerMasterRoom().vTrendData.length - 48;
                    for (let i = 0; i < 48; i++) {
                        var e;
                        this._entityDots[i].active = !0, this._entityDots[i].addOrGetComponent(d).opacity = 255, 101 == C.getPokerMasterRoom().vTrendData[i + t].win ? this._entityDots[i].getComponent(r).spriteFrame = P.getTextureByName("chart_PLIST", "chart_13") : 102 == C.getPokerMasterRoom().vTrendData[i + t].win ? this._entityDots[i].getComponent(r).spriteFrame = P.getTextureByName("chart_PLIST", "chart_12") : 103 == C.getPokerMasterRoom().vTrendData[i + t].win && (this._entityDots[i].getComponent(r).spriteFrame = P.getTextureByName("chart_PLIST", "chart_11"));
                        this._entityDots[i].getContentSize();
                        if (47 == i) {
                            let t = m(this.solid);
                            t.getComponent(r).spriteFrame = P.getTextureByName("chart_PLIST", "chart_new"), t.setPosition(f(22, 22, 0)), this._entityDots[i].addChild(t), this._entityDots[i].active = !0;
                            let e = () => {
                                this._entityDots[i].active = !0, this._entityDots[i].addOrGetComponent(d).opacity = 255
                            };
                            this.index1 = i, T.blink(this._entityDots[i], 2, 2, e)
                        }
                        const o = C.getPokerMasterRoom().vTrendData[i + t].win_patterns,
                            n = null == (e = this._entityDots[i].getChildByName("text")) ? void 0 : e.getComponent(g);
                        n && (n.node.active = !0, n.string = P.getWinPatternString(o))
                    }
                }
        }
        updateBiaoge2() {
            for (let t = 0; t < 6; t++)
                for (let e = 0; e < 15; e++) T.stopAll(this._hollowDots[t][e]), this._hollowDots[t][e].active = !1, null != this._hollowDots[t][e].getChildByName("ping") && (this._hollowDots[t][e].destroyAllChildren(), this._hollowDots[t][e].removeAllChildren());
            let t = C.getPokerMasterRoom().vTrendRoad.length;
            for (let e = 0; e < t; e++) {
                let t = C.getPokerMasterRoom().vTrendRoad[e],
                    i = t.road_row.length;
                for (let o = 0; o < i; o++) {
                    if (this._hollowDots[e][o].addOrGetComponent(d).opacity = 255, "r" == t.road_row[o].win ? (this._hollowDots[e][o].active = !0, this._hollowDots[e][o].getComponent(r).spriteFrame = P.getTextureByName("chart_PLIST", "chart_03")) : "b" == t.road_row[o].win && (this._hollowDots[e][o].active = !0, this._hollowDots[e][o].getComponent(r).spriteFrame = P.getTextureByName("chart_PLIST", "chart_02")), t.road_row[o].eqc > 0) {
                        let i = w.StringTools.formatC("%d", t.road_row[o].eqc),
                            r = new n("text");
                        r.name = "ping", r.addComponent(g), r.getComponent(g).string = i, r.getComponent(g).fontSize = 24, r.getComponent(g).color = y(23, 130, 82), r.setPosition(f(0, -10, 0)), r.addOrGetComponent(d).opacity = 255, this._hollowDots[e][o].addChild(r)
                    }
                    if (e == C.getPokerMasterRoom().iLastRow && o == C.getPokerMasterRoom().iLastCol) {
                        this._hollowDots[e][o].active = !0;
                        let t = () => {
                            this._hollowDots[e][o].active = !0, this._hollowDots[e][o].addOrGetComponent(d).opacity = 255
                        };
                        this.index2 = e, this.index3 = o, T.blink(this._hollowDots[e][o], 2, 2, t)
                    }
                }
            }
        }
        _onTrendUpdate() {
            this.setData(), this.layout1.active = !0, this.layout2.active = !0
        }
        setData() {
            this.updateFortune(), this.updateBiaoge1(), this.updateBiaoge2()
        }
        close() {
            this.node.active = !1
        }
    }).prototype, "_btn_close", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(Q.prototype, "chartbg", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(Q.prototype, "layout1", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(Q.prototype, "layout2", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(Q.prototype, "_fortune_txt", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(Q.prototype, "_panelBiaoge1", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(Q.prototype, "_panelBiaoge2", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(Q.prototype, "road_statistics_txt", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(Q.prototype, "_fisherman_txt", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(Q.prototype, "_shark_txt", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(Q.prototype, "solid", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(Q.prototype, "hollow", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(Q.prototype, "newCrown", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(Q.prototype, "_fisherman_bar", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(Q.prototype, "_shark_bar", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(Q.prototype, "_fisherman_huo", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(Q.prototype, "_shark_huo", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(Q.prototype, "_fisherman_points", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(Q.prototype, "_shark_points", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(Q.prototype, "chart_PLIST", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(Q.prototype, "index1", [xt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return -1
        }
    }), bt = e(Q.prototype, "index2", [xt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return -1
        }
    }), yt = e(Q.prototype, "index3", [xt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return -1
        }
    }), wt = e(Q.prototype, "_entityDots", [xt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Ct = e(Q.prototype, "_hollowDots", [xt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new Array
        }
    }), Dt = e(Q.prototype, "des_btn", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(Q.prototype, "des_spr", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = Q)) || K));
    o._RF.pop()
}