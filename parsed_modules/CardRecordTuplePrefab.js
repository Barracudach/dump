import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./Pb.js";
import * as p from "./mttconfig.js";
import * as f from "./mttconfig.js";
import * as g from "./mttconfig.js";
import * as m from "./NodePage.js";
import * as y from "./Translator.js";
import * as b from "./FormatParser.js";
import * as N from "./CommonTools.js";
import * as C from "./Holdem_Card_ts.js";
import * as _ from "./EventCustom.js";
import * as R from "./rankpoint.js";

function main() {
    var A, I, P, S, T, H, E, v, D, w, O, G, K, M, L, B, F, z, U, k, j, x, V, W, $, q, X, Q, Y, J, Z, ee, te, re;
    i._RF.push({}, "ec401qMoDxEx4qlVo34kjQ+", "CardRecordTuplePrefab", void 0);
    const {
        ccclass: ie,
        property: se
    } = o;
    e("CardRecordTuplePrefab", (A = se(s), I = se(a), P = se(a), S = se([s]), T = se(a), H = se(s), E = se(a), v = se([s]), D = se([s]), w = se(s), O = se(a), G = se([s]), K = se(n), M = se([s]), L = se([s]), B = se(a), ie((U = t((z = class extends l {
        constructor(...e) {
            super(...e), r(this, "header", U, this), r(this, "gameName", k, this), r(this, "gameDate", j, this), r(this, "tupleType", x, this), r(this, "type1Label", V, this), r(this, "type1Fantasy", W, this), r(this, "type2Label", $, this), r(this, "type2HoleCards", q, this), r(this, "type2BoardCards", X, this), r(this, "guessCardNode", Q, this), r(this, "guessCoins", Y, this), r(this, "guessCardType", J, this), r(this, "favour", Z, this), r(this, "stars", ee, this), r(this, "benefitSign", te, this), r(this, "benefit", re, this), this._tupleId = 0, this.myUserId = 0, this.gameMode = 0, this.cardLoaded = !1
        }
        onLoad() {
            this.myUserId = cc_mtt.vv.DataManager.userId
        }
        start() {}
        setInfo(e, t, r) {
            this._tupleId = t, this.showStar(e.UserFavouriteRoundId > 0), this.gameMode = r || e.GameMode;
            let i = r ? r == h.commonProto.MTT_GAME_MODE.PP : e.GameMode == h.commonProto.MTT_GAME_MODE.PP;
            if (r) this.header.active = !1;
            else {
                this.header.active = !0, this.gameName.string = e.Name;
                let [t, r] = m.handleTimeLabel(e.EndTime);
                this.gameDate.string = m.handleDateLabel(e.EndTime).join("-") + " " + [t, r].join(":")
            }
            this.node.getComponent(u).updateAlignment(), cc_mtt.vv.ConsoleLog.log("isPP", i, t), i ? this.handlePP(e) : this.handleHoldem(e)
        }
        handleHoldem(e) {
            this.tupleType[1].active = !0, this.tupleType[0].active = !1;
            let [t, r, i, s, a] = this.parseMsgHoldem(e.GameRoundData);
            this.showGuessCardNode(a.length > 0, a), this.showBenefit(i), this.type2Label.string = this.checkType(s), this.addCards(t, r)
        }
        handlePP(e) {
            this.tupleType[1].active = !1, this.tupleType[0].active = !0;
            let t = e.GameRoundData.players[this.myUserId.toString()];
            if (t.broken) this.type1Label.string = y("POKER_HAND_RANKINGS.BURST");
            else {
                let e = t.turns[t.turns.length - 1],
                    [r, i, s] = this.checkTypeByPPScore(Array.from(e.headCards), Array.from(e.midCards), Array.from(e.tailCards));
                this.type1Label.string = `${r}/${i}/${s}`
            }
            this.type1Fantasy.active = Object.getOwnPropertyNames(t.turns[0]).length < 1, this.showBenefit(t.total)
        }
        checkTypeByPPScore(e, t, r) {
            let i = R(e, t, r),
                s = g.CARDS_COMBINATION;
            return [y("POKER_HAND_RANKINGS." + s[i[0].length > 0 ? i[0][0] : 0]), y("POKER_HAND_RANKINGS." + s[i[0].length > 0 ? i[1][0] : 0]), y("POKER_HAND_RANKINGS." + s[i[0].length > 0 ? i[2][0] : 0])]
        }
        checkType(e) {
            switch (e) {
                case void 0:
                case 0:
                    return y("POKER_HAND_RANKINGS.FOLD");
                case 1:
                    return y("POKER_HAND_RANKINGS.HIGH_CARD");
                case 2:
                    return y("POKER_HAND_RANKINGS.PAIR");
                case 3:
                    return y("POKER_HAND_RANKINGS.TWO_PAIRS");
                case 4:
                    return y("POKER_HAND_RANKINGS.THREE_OF_A_KIND");
                case 5:
                    return y("POKER_HAND_RANKINGS.STRAIGHT");
                case 6:
                    return y("POKER_HAND_RANKINGS.FLUSH");
                case 7:
                    return y("POKER_HAND_RANKINGS.FULL_HOUSE");
                case 8:
                    return y("POKER_HAND_RANKINGS.FOUR_OF_A_KIND");
                case 9:
                    return y("POKER_HAND_RANKINGS.STRAIGHT_FLUSH");
                case 10:
                    return y("POKER_HAND_RANKINGS.ROYAL_FLUSH");
                default:
                    return ""
            }
        }
        addCards(e, t) {
            this.type2HoleCards[2].parent.active = this.gameMode == h.commonProto.MTT_GAME_MODE.OMAHA;
            for (let t = 0; t < e.length; t++) this.createCard(this.type2HoleCards[t], e[t]);
            let r = 0;
            for (; r < t.length && r < 5; r++) this.createCard(this.type2BoardCards[r], t[r]);
            for (; r < this.type2BoardCards.length; r++) this.createCard(this.type2BoardCards[r], 0)
        }
        createCard(e, t) {
            e.getComponent(C).setId(t)
        }
        showBenefit(e) {
            this.benefit.node.getComponent(d).color = e > 0 ? (new c).fromHEX(p.SIGN_COLOR.POSITIVE) : e < 0 ? (new c).fromHEX(p.SIGN_COLOR.NEGATIVE) : c.WHITE, this.showBenefitSign(e > 0 ? 1 : e < 0 ? 0 : 1e3), this.benefit.string = b.DisplayGold(Math.abs(e)).toString()
        }
        showBenefitSign(e) {
            for (let t = 0; t < this.benefitSign.length; t++) this.benefitSign[t].active = t === e
        }
        onFavourClicked() {
            cc_mtt.vv.ConsoleLog.log("click favour"), m.coolDownButton(this.favour, this);
            let e = this.stars[0].active ? new _(f.addCardRecord, !0) : new _(f.removeCardRecord, !0);
            e.setUserData({
                tupleId: this._tupleId,
                tupleScript: this
            }), this.node.dispatchEvent(e)
        }
        showStar(e) {
            this.stars[0].active = !e, this.stars[1].active = e
        }
        onTupleClicked() {
            let e = new _(f.replayEvent, !0);
            e.setUserData(this._tupleId), this.node.dispatchEvent(e)
        }
        parseMsgHoldem(e) {
            let t = e.Players,
                r = [],
                i = [],
                s = 0,
                a = [];
            for (const n of e.Actions) {
                let e = N.instance.intFromBytes(n.slice(4, 6));
                if (e == h.holdem.MessageId.HoleCardsMsg) {
                    let e = h.holdem.HoleCardsMsg.decode(n.slice(6));
                    e.userId == this.myUserId && (r = Array.from(e.cards))
                } else if (e == h.holdem.MessageId.BoardCardsMsg) {
                    let e = h.holdem.BoardCardsMsg.decode(n.slice(6));
                    for (const t of e.cards) i.push(t)
                } else if (e == h.holdem.MessageId.RoundResultMsg) {
                    let e = h.holdem.RoundResultMsg.decode(n.slice(6));
                    for (const r of e.players) t[r.seatNum] && t[r.seatNum].userId == this.myUserId && (s = r.profit, a = t[r.seatNum].guessCards)
                }
            }
            return [r, i, s, e.ranks[this.myUserId.toString()], a]
        }
        showGuessCard(e) {
            for (let t = 0; t < this.guessCardType.length; t++) this.guessCardType[t].active = t == e - 1
        }
        showGuessCardNode(e, t) {
            this.guessCardNode.active = e, e && (this.guessCoins.string = t[0].BetCoin.toString(), this.showGuessCard(t[0].BetType))
        }
    }).prototype, "header", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(z.prototype, "gameName", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(z.prototype, "gameDate", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(z.prototype, "tupleType", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), V = t(z.prototype, "type1Label", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(z.prototype, "type1Fantasy", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = t(z.prototype, "type2Label", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(z.prototype, "type2HoleCards", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), X = t(z.prototype, "type2BoardCards", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Q = t(z.prototype, "guessCardNode", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(z.prototype, "guessCoins", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(z.prototype, "guessCardType", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Z = t(z.prototype, "favour", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t(z.prototype, "stars", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), te = t(z.prototype, "benefitSign", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), re = t(z.prototype, "benefit", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = z)) || F));
    i._RF.pop()
}