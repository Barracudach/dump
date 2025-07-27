import * as e from "./cc.js";
import * as i from "./ws_protocol.mjs_cjs=&original=.js";
import * as r from "./ws_protocol.mjs_cjs=&original=.js";
import * as a from "./ws_protocol.mjs_cjs=&original=.js";
import * as l from "./JackfruitData.js";
import * as s from "./JackfruitData.js";
import * as n from "./Enum.js";
import * as u from "./cv.js";

function main() {
    e._RF.push({}, "385d9r5yK1AkaEy72/c3gBe", "JackfruitManager", void 0);
    class g {
        constructor() {
            this.tRoomData = null, this.tGameRecords = null, this._init()
        }
        static getInstance() {
            return g.g_instance || (g.g_instance = new g), g.g_instance
        }
        clearData() {
            delete g.g_instance, g.g_instance = null, g.g_instance = g.getInstance()
        }
        _init() {
            this.tRoomData = r.getInstance(), this.tGameRecords = new a
        }
        getPlayerSettleBySeatID(t) {
            for (let e = 0; e < this.tRoomData.cachedNotifyMsg.playerSettle.length; e++) {
                let r = this.tRoomData.cachedNotifyMsg.playerSettle[e];
                if (t == r.player.seatId) return r
            }
            return null
        }
        getIsAllWinBySeatID(t) {
            for (let e = 0; e < this.tRoomData.cachedNotifyMsg.playerSettle.length; e++) {
                let r = this.tRoomData.cachedNotifyMsg.playerSettle[e];
                if (t == r.player.seatId) {
                    let t = !1;
                    return r.headResult.score > 0 && r.middleResult.score > 0 && r.tailResult.score > 0 && (t = !0), t
                }
            }
            return !1
        }
        getAllScoreBySeatID(t) {
            for (let e = 0; e < this.tRoomData.cachedNotifyMsg.playerSettle.length; e++) {
                let r = this.tRoomData.cachedNotifyMsg.playerSettle[e];
                if (t == r.player.seatId) {
                    let t = !1;
                    return r.headResult.score > 0 && r.middleResult.score > 0 && r.tailResult.score > 0 && (t = !0), t
                }
            }
            return !1
        }
        _sortCard(t, e) {
            return t.number <= e.number ? 1 : -1
        }
        getCardListByType(t, e) {
            if (!t || t.length < 5) return [];
            let r = JSON.parse(JSON.stringify(t)),
                a = [];
            for (let t = l.CARD_DIAMOND; t < l.CardSuit_MAX; t++) {
                let e = [];
                for (let a = 0; a < r.length; a++) r[a].suit == t && e.push(r[a]);
                e.sort(this._sortCard.bind(this)), a.push(e)
            }
            switch (r.sort(this._sortCard.bind(this)), e) {
                case i.RoyalFlush:
                    return this.getRoyalFlush(a);
                case i.StraightFlush:
                    return this.getStraightFlush(a);
                case i.FourOfAKind:
                    return this.getFourOfAKind(r);
                case i.FullHouse:
                    return this.getFullHouse(r);
                case i.Flush:
                    return this.getFlush(a);
                case i.StraightI:
                    return this.getStraightI(r);
                case i.ThreeOfAKind:
                    return this.getThreeOfAKind(r);
                case i.TwoPair:
                    return this.getTwoPair(r);
                case i.OnePair:
                    return this.getOnePair(r);
                case i.HighCard:
                    return this.getHighCard(r);
                default:
                    return []
            }
        }
        _getMultipleCard(t, e) {
            let r = [];
            r.push(t[0]);
            for (let a = 1; a < t.length; a++)
                if (r[0].number != t[a].number && (r = []), r.push(t[a]), r.length == e) return r;
            return []
        }
        _removeCards(t, e) {
            for (let r = 0; r < e.length; r++)
                for (let a = 0; a < t.length; a++) t[a].number == e[r].number && t[a].suit == e[r].suit && t.splice(a, 1);
            return t
        }
        _getCardResPath() {
            let t = n.tools.GetCardFaceJackfruit();
            return n.StringTools.formatC("zh_CN/game/dzpoker/card/card_type_%d/", t)
        }
        getRoyalFlush(t) {
            let e = this.getStraightFlush(t);
            return 5 == e.length && e[0].number == s.CARD_A ? e : []
        }
        getStraightFlush(t) {
            for (let e = 0; e < t.length; e++) {
                let r = t[e];
                if (r.length >= 5) {
                    let t = this.getStraightI(r);
                    if (5 == t.length) return t
                }
            }
            return []
        }
        getFourOfAKind(t) {
            let e = this._getMultipleCard(t, 4);
            return 4 != e.length ? [] : (t = this._removeCards(t, e), e.push(t[0]), e)
        }
        getFullHouse(t) {
            let e = [],
                r = this._getMultipleCard(t, 3);
            if (3 != r.length) return [];
            t = this._removeCards(t, r);
            let a = this._getMultipleCard(t, 2);
            if (2 != a.length) return [];
            for (let t = 0; t < 3; t++) e.push(r[t]);
            for (let t = 0; t < 2; t++) e.push(a[t]);
            return e
        }
        getFlush(t) {
            let e = [];
            for (let r = 0; r < t.length; r++)
                if (t[r].length >= 5) {
                    for (let a = 0; a < 5; a++) e.push(t[r][a]);
                    return e
                } return []
        }
        getStraightI(t) {
            let e = [];
            e.push(t[0]);
            for (let r = 1; r < t.length; r++)
                if (e[e.length - 1].number == t[r].number + 1 ? e.push(t[r]) : e[e.length - 1].number != t[r].number && (e = [], e.push(t[r])), 5 == e.length) return e;
            return 4 == e.length && t[0].number == s.CARD_A ? (e.push(t[0]), e) : []
        }
        getThreeOfAKind(t) {
            let e = [],
                r = this._getMultipleCard(t, 3);
            if (3 != r.length) return [];
            t = this._removeCards(t, r), e = r;
            for (let r = 0; r < t.length; r++)
                if (e.push(t[r]), 5 == e.length) return e;
            return []
        }
        getTwoPair(t) {
            let e = [],
                r = this._getMultipleCard(t, 2);
            if (2 != r.length) return [];
            t = this._removeCards(t, r);
            let a = this._getMultipleCard(t, 2);
            return 2 == a.length ? (t = this._removeCards(t, a), e.push(r[0]), e.push(r[1]), e.push(a[0]), e.push(a[1]), e.push(t[0]), e) : []
        }
        getOnePair(t) {
            let e = [],
                r = this._getMultipleCard(t, 2);
            if (2 != r.length) return [];
            e = r, t = this._removeCards(t, r);
            for (let r = 0; r < t.length; r++)
                if (e.push(t[r]), 5 == e.length) return e;
            return []
        }
        getHighCard(t) {
            let e = [];
            for (let r = 0; r < t.length; r++)
                if (e.push(t[r]), 5 == e.length) return e;
            return []
        }
        getCardTypeStr(t) {
            let e = "";
            switch (t) {
                case i.HighCard:
                    e = n.config.getStringData("M_UITitle113");
                    break;
                case i.OnePair:
                    e = n.config.getStringData("M_UITitle114");
                    break;
                case i.TwoPair:
                    e = n.config.getStringData("M_UITitle115");
                    break;
                case i.ThreeOfAKind:
                    e = n.config.getStringData("M_UITitle116");
                    break;
                case i.StraightI:
                    e = n.config.getStringData("M_UITitle117");
                    break;
                case i.Flush:
                    e = n.config.getStringData("M_UITitle118");
                    break;
                case i.FullHouse:
                    e = n.config.getStringData("M_UITitle119");
                    break;
                case i.FourOfAKind:
                    e = n.config.getStringData("M_UITitle120");
                    break;
                case i.StraightFlush:
                    e = n.config.getStringData("M_UITitle121");
                    break;
                case i.RoyalFlush:
                    e = n.config.getStringData("M_UITitle122")
            }
            return e
        }
        setCardImg(t, e) {
            if (null == e) return void(t.active = !1);
            let r = e.number,
                a = e.suit;
            r === n.Number(u.pb.SpecialCards.Cards_Zero) && (r = s.CARD_2), a == n.Number(u.pb.SpecialCards.Cards_Zero) && (a = l.CARD_DIAMOND), t.active = !0;
            let i = "";
            switch (a) {
                case l.CARD_SPADE:
                    i = "Bhm_";
                    break;
                case l.CARD_HEART:
                    i = "Rhm_";
                    break;
                case l.CARD_CLUB:
                    i = "Bcm_";
                    break;
                case l.CARD_DIAMOND:
                    i = "Rbm_";
                    break;
                default:
                    i = "Bhm_"
            }
            if (r >= s.CARD_2 && r < s.CARD_INVALID) {
                let e = n.StringTools.format("{0}{1}{2}", this._getCardResPath(), i, r + 1);
                n.resMgr.setSpriteFrame(t, e)
            } else t.active = !1
        }
        filterCards(t, e) {
            for (let r = 0; r < e.length; r++)
                for (let a = 0; a < t.length; a++)
                    if (t[a].number == e[r].number && t[a].suit == e[r].suit) {
                        t.splice(a, 1);
                        break
                    }
        }
    }
    t("JackfruitManager", g), g.g_instance = null;
    t("default", g.getInstance());
    e._RF.pop()
}