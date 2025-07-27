import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./cv.js";
import * as p from "./Card.js";
import * as b from "./RecordData.js";
import * as m from "./PokerData.js";
import * as C from "./CircleSprite.js";
import * as v from "./ThemeSystem.js";
import * as f from "./GameSceneInstance.js";
import * as S from "./GameSceneInstance.js";
import * as y from "./JackpotData.js";
import * as P from "./ColorSystemType.js";
import * as x from "./ColorSystemTypeOther.js";
import * as w from "./TweenControl.js";
import * as T from "./node-extension.js";

function main() {
    var k, A, z, R, D, G, I, M, N, F, L, B, O, E, j, H, W, U, X, V, J, Y, K, Q, Z, q, $, tt, et, it, nt, at, rt, ot, st, lt, dt, _t, ut, ht, ct, gt, pt, bt, mt, Ct, vt, ft;
    n._RF.push({}, "0a2aa+m8YVC6KB9gD6Z3vQf", "GameReviewItem", void 0);
    const {
        ccclass: St,
        property: yt
    } = l;
    t("GameReviewItem", (k = yt(a), A = yt(a), z = yt(r), R = yt(r), D = yt(r), G = yt(r), I = yt(r), M = yt(r), N = yt(r), F = yt(r), L = yt(o), B = yt(o), O = yt(o), E = yt(o), j = yt(o), H = yt(o), W = yt(a), U = yt(o), X = yt(r), V = yt([s]), J = yt(o), Y = yt(a), K = S("GameDataInstance"), St((q = e((Z = class extends d {
        constructor(...t) {
            super(...t), i(this, "panel_self_card", q, this), i(this, "panel_public_card", $, this), i(this, "img_head", tt, this), i(this, "img_head_sheild", et, this), i(this, "img_pei", it, this), i(this, "img_bao", nt, this), i(this, "img_d", at, this), i(this, "img_pub_card_box_1", rt, this), i(this, "img_pub_card_box_3", ot, this), i(this, "img_pub_card_box_4", st, this), i(this, "txt_username", lt, this), i(this, "txt_cardtype", dt, this), i(this, "txt_number", _t, this), i(this, "txt_pei", ut, this), i(this, "txt_bao", ht, this), i(this, "txt_head_sheild", ct, this), i(this, "falling_mars_holder", gt, this), i(this, "txt_player_type", pt, this), i(this, "img_jackpot_mars", bt, this), i(this, "jackpot_mars_sf", mt, this), i(this, "jp_win_text", Ct, this), i(this, "win_separator_node", vt, this), this._vSelfCard = [], this._vPubsCard = [], i(this, "gameDataInstance", ft, this)
        }
        onLoad() {
            let t = this.panel_self_card.children;
            for (let e = 0; e < t.length; ++e) this._vSelfCard.push(t[e].getComponent(p));
            let e = this.panel_public_card.children;
            for (let t = 0; t < e.length; ++t) this._vPubsCard.push(e[t].getComponent(p));
            this.img_d.node.active = !1, this.img_pub_card_box_1.node.active = !1, this.img_pub_card_box_3.node.active = !1, this.img_pub_card_box_4.node.active = !1
        }
        start() {}
        _setWinAmount(t) {
            let e = g.StringTools.clientGoldByServer(t);
            e = g.StringTools.numberToShowNumber(g.StringTools.toFixed(e, 2, g.StringTools.RoundingMode.ROUND_HALF_UP)), this.txt_number.string = g.StringTools.getSignString(e), this._setWinTextColor(e)
        }
        _setWinTextColor(t) {
            const e = this.txt_number.getComponent(v),
                i = t > 0 ? x.InsuranceHighlight : x.WhiteCreamy_100;
            e.setColorScheme(P.Other, i)
        }
        _setJackPotAmout(t, e) {
            t > 0 && !e ? (this.win_separator_node.active = !0, this.jp_win_text.node.active = !0, this.jp_win_text.string = "JP: " + g.StringTools.serverGoldToShowString(t)) : (this.jp_win_text.node.active = !1, this.win_separator_node.active = !1)
        }
        _setInsuredAmount(t, e) {
            {
                let e = g.StringTools.clientGoldByServer(t);
                e = g.StringTools.numberToShowNumber(g.StringTools.toFixed(e, 2, g.StringTools.RoundingMode.ROUND_DOWN));
                let i = new _(_.WHITE);
                if (e > 0 ? (g.String(e), i = g.tools.getWinColor()) : e < 0 && (i = g.tools.getLoseColor()), this.txt_pei.string = g.StringTools.formatC(g.config.getStringData("UIPeiFuE"), e), this.txt_pei.color = i, this.txt_pei.node.active = 0 !== e, this.img_pei.node.active = this.txt_pei.node.active, this.img_pei.node.active) {
                    let t = "game/dzpoker/ui/gameMain/game_icon_pei";
                    g.config.getCurrentLanguage() === g.Enum.LANGUAGE_TYPE.vi_VN ? g.resMgr.setSpriteFrame(this.img_pei.node, "zh_CN/" + t) : g.resMgr.setSpriteFrame(this.img_pei.node, g.config.getLanguagePath(t))
                }
            } {
                let t = g.StringTools.clientGoldByServer(e);
                t = g.StringTools.numberToShowNumber(g.StringTools.toFixed(t, 2, g.StringTools.RoundingMode.ROUND_DOWN));
                let i = "0",
                    n = new _(_.WHITE);
                if (t > 0 ? (i = "-" + g.String(t), n = g.tools.getLoseColor()) : t < 0 && (t = Math.abs(t), i = "+" + g.String(t), n = g.tools.getWinColor()), this.txt_bao.string = g.StringTools.formatC(g.config.getStringData("UITouBaoE"), i), this.txt_bao.color = n, this.txt_bao.node.active = 0 !== t, this.img_bao.node.active = this.txt_bao.node.active, this.img_bao.node.active) {
                    let t = "game/dzpoker/ui/gameMain/game_icon_bao";
                    g.config.getCurrentLanguage() === g.Enum.LANGUAGE_TYPE.vi_VN ? g.resMgr.setSpriteFrame(this.img_bao.node, "zh_CN/" + t) : g.resMgr.setSpriteFrame(this.img_bao.node, g.config.getLanguagePath(t))
                }
            } {
                let t = 25,
                    e = 1;
                this.txt_pei.fontSize = t, this.txt_bao.fontSize = t, this.img_pei.node.setScale(u(e, e)), this.img_bao.node.setScale(u(e, e));
                let i = 0,
                    n = 0,
                    a = 15,
                    r = 30,
                    o = 1,
                    s = .05,
                    l = t + o,
                    d = e + s,
                    _ = this.txt_pei.node.parent;
                do {
                    if (l -= o, d -= s, i = _.getComponent(h).width * (1 - _.getComponent(h).anchorX), this.txt_pei.node.active) {
                        this.txt_pei.fontSize = l, this.img_pei.node.setScale(u(d, d));
                        let t = g.resMgr.getLabelStringSize(this.txt_pei).width;
                        i -= t * (1 - this.txt_pei.node.getComponent(h).anchorX), this.txt_pei.node.setPosition(i, n), i -= t * this.txt_pei.node.getComponent(h).anchorX, i -= a, i -= this.img_pei.node.getComponent(h).width * this.img_pei.node.getScale().x * (1 - this.img_pei.node.getComponent(h).anchorX), this.img_pei.node.setPosition(i, n), i -= this.img_pei.node.getComponent(h).width * this.img_pei.node.getScale().x * this.img_pei.node.getComponent(h).anchorX
                    }
                    if (this.txt_bao.node.active) {
                        this.txt_pei.node.active && (i -= r), this.txt_bao.fontSize = l, this.img_bao.node.setScale(u(d, d));
                        let t = g.resMgr.getLabelStringSize(this.txt_bao).width;
                        i -= t * (1 - this.txt_bao.node.getComponent(h).anchorX), this.txt_bao.node.setPosition(i, n), i -= t * this.txt_bao.node.getComponent(h).anchorX, i -= a, i -= this.img_bao.node.getComponent(h).width * this.img_bao.node.getScale().x * (1 - this.img_bao.node.getComponent(h).anchorX), this.img_bao.node.setPosition(i, n), i -= this.img_bao.node.getComponent(h).width * this.img_bao.node.getScale().x * this.img_bao.node.getComponent(h).anchorX
                    }
                } while (Math.abs(i) > _.getComponent(h).width)
            }
        }
        _calculateCardType(t) {
            let e = [],
                i = [];
            for (let i = 0; i < this._vSelfCard.length; ++i)
                if (this._vSelfCard[i].isActive) {
                    let n = this._vSelfCard[i].eCardNum,
                        a = this._vSelfCard[i].eCardSuit,
                        r = m.getLocalValue(n, t.nGameMode),
                        o = new m(t.nGameMode);
                    o.initWhitValue(r, a, t.nGameMode), e.push(o.getNumber(t.nGameMode))
                } for (let e = 0; e < this._vPubsCard.length; ++e)
                if (this._vPubsCard[e].isActive) {
                    let n = this._vPubsCard[e].eCardNum,
                        a = this._vPubsCard[e].eCardSuit,
                        r = m.getLocalValue(n, t.nGameMode),
                        o = new m(t.nGameMode);
                    o.initWhitValue(r, a, t.nGameMode), i.push(o.getNumber(t.nGameMode))
                } let n = "";
            n = e.length > 2 ? m.getPokerTypeString(e, i, t.nGameMode, 2, 3) : m.getPokerTypeString(e, i, t.nGameMode), t.bFold ? t.vHandCards.length > 0 ? this.txt_cardtype.string = n : this.txt_cardtype.string = g.config.getStringData("ActionTips1") : t.bMuck ? this.txt_cardtype.string = g.config.getStringData("ActionTips10") : t.vHandCards.length > 0 ? this.txt_cardtype.string = n : this.txt_cardtype.string = "", g.StringTools.clearArray(e), g.StringTools.clearArray(i)
        }
        _checkSendOut(t, e) {
            let i = g.dataHandler.getUserData().getUserIdByGameID(t.nGameid);
            if (t.nPlayerID !== i) return;
            let n = t.vPubsCards.concat(t.vUnsendPublicCards),
                a = e,
                r = t.vPubsCards.length - a;
            if (t.nReviewSendOutLen - t.vPubsCards.length > 0) {
                for (let e = 0; e < this._vPubsCard.length; ++e)
                    if (e < t.nReviewSendOutLen)
                        if (this._vPubsCard[e].setActive(!0), this._vPubsCard[e].setFace(!0), this._vPubsCard[e].setContent(n[e].eCardNum, n[e].eCardSuit), this._vPubsCard[e].updateCard(), e < t.vPubsCards.length) {
                            if (r > 0) switch (r) {
                                case 1:
                                    this.img_pub_card_box_1.node.active = !0;
                                    break;
                                case 3:
                                    this.img_pub_card_box_3.node.active = !0;
                                    break;
                                case 4:
                                    this.img_pub_card_box_4.node.active = !0
                            }
                        } else this._vPubsCard[e].getComponent(c) || this._vPubsCard[e].addComponent(c), this._vPubsCard[e].getComponent(c).opacity = 127.5;
                else this._vPubsCard[e].setActive(!1);
                {
                    let e = 0;
                    for (let t = 0; t < this._vPubsCard.length; ++t) t < n.length && this._vPubsCard[t].isActive && ++e;
                    a = e, r = t.vPubsCards.length - a
                }
            }
            if (t.nReviewSendOutActLen > 0) {
                let e = .5,
                    i = .4,
                    a = 0,
                    o = t.nReviewSendOutLen;
                switch (r) {
                    case 1:
                        a = 1, o = 3, this.img_pub_card_box_1.node.active = !0;
                        break;
                    case 3:
                        a = 3, o = 0, this.img_pub_card_box_3.node.active = !0;
                        break;
                    case 4:
                        a = 4, o = 0, this.img_pub_card_box_4.node.active = !0
                }
                for (let s = o, l = 0, d = 0; s < this._vPubsCard.length; ++s)
                    if (s < n.length)
                        if (r > 0 && l++ < a) this._vPubsCard[s].setActive(!0), this._vPubsCard[s].setFace(!1), this._vPubsCard[s].setContent(n[s].eCardNum, n[s].eCardSuit), this._vPubsCard[s].updateCard(), this._vPubsCard[s].updateCardBack(), this._vPubsCard[s].getComponent(c) || this._vPubsCard[s].addComponent(c), this._vPubsCard[s].getComponent(c).opacity = 0, w.fade(this._vPubsCard[s].node, e, 255), this._vPubsCard[s].turn(e, !0);
                        else if (d++ < t.nReviewSendOutActLen) {
                    this._vPubsCard[s].setActive(!0), this._vPubsCard[s].setFace(!1), this._vPubsCard[s].setContent(n[s].eCardNum, n[s].eCardSuit), this._vPubsCard[s].updateCard(), this._vPubsCard[s].updateCardBack(), this._vPubsCard[s].getComponent(c) || this._vPubsCard[s].addComponent(c), this._vPubsCard[s].getComponent(c).opacity = 0;
                    let t = r > 0 ? e + i : 0;
                    w.fade(this._vPubsCard[s].node, e, 127.5, t), t += e, this._vPubsCard[s].turn(t, !0), t += i, this.scheduleOnce((t => {
                        g.MessageCenter.send("game_replay_hide_sendout_shieldlayer", this.gameDataInstance)
                    }), t)
                }
                t.nReviewSendOutActLen = 0
            }
        }
        updateSVReuseData(t, e) {
            if (t < 0 || t >= e.length) return;
            let i = e[t];
            C.setCircleSprite(this.img_head.node, i.sPlayerHead, i.plat), this.img_head_sheild.node.active = !1, this.img_pub_card_box_1.node.active = !1, this.img_pub_card_box_3.node.active = !1, this.img_pub_card_box_4.node.active = !1;
            const n = i.jackpotType >= y.Earth;
            if (this.falling_mars_holder.active = n, n) {
                const t = i.jackpotType === y.Earth;
                this.txt_player_type && (this.txt_player_type.string = g.StringTools.formatC(g.config.getStringData("" + (t ? "Earth_Player" : "Mars_Player")))), this.img_jackpot_mars && (this.img_jackpot_mars.spriteFrame = t ? this.jackpot_mars_sf[0] : this.jackpot_mars_sf[1])
            }
            let a = g.dataHandler.getUserData().vRemarkData.get(i.nPlayerID);
            a && a.sRemark ? g.StringTools.setShrinkString(this.txt_username.node, a.sRemark, !0) : g.StringTools.setShrinkString(this.txt_username.node, i.sPlayerName, !0), this._setWinAmount(i.nWinBet), this._setJackPotAmout(i.nJackWinbet, n), this._setInsuredAmount(i.nInsuranceAmount, i.nInsuranceBet);
            let r = g.tools.getCardsLengthFromGameID(i.nGameid);
            for (let t = 0; t < this._vSelfCard.length; ++t) {
                let e = i.nGameid;
                if (0 === e && (e = f.getInstanceGameId(null == this ? void 0 : this.node)), this._vSelfCard[t].setActive(t < r), this._vSelfCard[t].isActive)
                    if (w.stopAll(this._vSelfCard[t].node), this._vSelfCard[t].node.setScale(u(1, 1)), T.addOrGetComponent(this._vSelfCard[t].node, c).opacity = 255, t < i.vHandCards.length)
                        if (i.bForceShowedAct) {
                            this._vSelfCard[t].setFace(!1), this._vSelfCard[t].setContent(i.vHandCards[t].eCardNum, i.vHandCards[t].eCardSuit), this._vSelfCard[t].updateCard(), this._vSelfCard[t].updateCardBack();
                            let e = .2,
                                n = .4;
                            this._vSelfCard[t].turn(e, !0), e += n, this.scheduleOnce((t => {
                                i.bForceShowedAct = !1, this._calculateCardType(i), g.MessageCenter.send("game_replay_hide_sendout_shieldlayer", this.gameDataInstance)
                            }), e)
                        } else this._vSelfCard[t].setFace(!0), this._vSelfCard[t].setContent(i.vHandCards[t].eCardNum, i.vHandCards[t].eCardSuit), this._vSelfCard[t].updateCard();
                else this._vSelfCard[t].setFace(!1), this._vSelfCard[t].updateCard(), this._vSelfCard[t].updateCardBack()
            }
            let o = 0,
                s = i.nPlayerBettingRoundBet > 0;
            for (let t = 0; t < this._vPubsCard.length; ++t)
                if (w.stopAll(this._vPubsCard[t].node), this._vPubsCard[t].node.setScale(u(1, 1)), T.addOrGetComponent(this._vPubsCard[t].node, c).opacity = 255, s)
                    if (t < i.vPubsCards.length) {
                        if (i.nLastRoundType <= 0) this._vPubsCard[t].setActive(!0), ++o;
                        else {
                            switch (i.nLastRoundType) {
                                case b.Enum_BettingRound_None:
                                    break;
                                case b.Enum_BettingRound_Preflop:
                                    o = 0;
                                    break;
                                case b.Enum_BettingRound_Flop:
                                    o = 3;
                                    break;
                                case b.Enum_BettingRound_Turn:
                                    o = 4;
                                    break;
                                case b.Enum_BettingRound_River:
                                case b.Enum_BettingRound_ShowDown:
                                    o = 5
                            }
                            this._vPubsCard[t].setActive(t < o)
                        }
                        this._vPubsCard[t].isActive && (this._vPubsCard[t].setFace(!0), this._vPubsCard[t].setContent(i.vPubsCards[t].eCardNum, i.vPubsCards[t].eCardSuit), this._vPubsCard[t].updateCard())
                    } else this._vPubsCard[t].setActive(!1);
            else this._vPubsCard[t].setActive(!1);
            i.bFold && (this.img_head_sheild.node.active = !0, this.txt_head_sheild.string = g.config.getStringData("ActionTips1")), this.img_d.node.active = 1 == (1 & i.seatInfo) && e.length >= 2, i.bForceShowedAct || this._calculateCardType(i), this._checkSendOut(i, o)
        }
    }).prototype, "panel_self_card", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(Z.prototype, "panel_public_card", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(Z.prototype, "img_head", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(Z.prototype, "img_head_sheild", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(Z.prototype, "img_pei", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(Z.prototype, "img_bao", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(Z.prototype, "img_d", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(Z.prototype, "img_pub_card_box_1", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(Z.prototype, "img_pub_card_box_3", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(Z.prototype, "img_pub_card_box_4", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(Z.prototype, "txt_username", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(Z.prototype, "txt_cardtype", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(Z.prototype, "txt_number", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(Z.prototype, "txt_pei", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(Z.prototype, "txt_bao", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(Z.prototype, "txt_head_sheild", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(Z.prototype, "falling_mars_holder", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(Z.prototype, "txt_player_type", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(Z.prototype, "img_jackpot_mars", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(Z.prototype, "jackpot_mars_sf", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Ct = e(Z.prototype, "jp_win_text", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(Z.prototype, "win_separator_node", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(Z.prototype, "gameDataInstance", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = Z)) || Q));
    n._RF.pop()
}