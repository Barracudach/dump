import * as e from "./cc.js";
import * as s from "./cv.js";
import * as a from "./winRateUtils.js";

function main() {
    e._RF.push({}, "7bae6cgvOpCqoOd+lOLiYSV", "winRateTools", void 0);
    const i = [0, 1, 2, 3],
        l = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
        n = [14, 13, 12, 11, 10, 9, 8, 7, 6];
    class r {
        constructor() {
            this.gameMode = s.Enum.CreateGameMode.CreateGame_Mode_Normal, this.gameId = s.Enum.GameId.Texas, this.handCards = [], this.publicCards = [], this.allCards = [], this.winRecords = [], this.winRateUtils = a.Instance, this.RANDOMTIMES = 2e3, this.combs = [], this.combs75 = [], this.combs95 = []
        }
        static getInstance() {
            return r._g_instance || (r._g_instance = new r), r._g_instance
        }
        getWinRateByCards(t, e, a, r) {
            this.resetCalc(), this.gameId = t, this.gameMode = e, this._initCombsAarray(), e == s.Enum.CreateGameMode.CreateGame_Mode_Short ? this.allCards = this.winRateUtils.arrayMultiply(i, n) : this.allCards = this.winRateUtils.arrayMultiply(i, l), s.roomManager.checkGameIsPlo(t) ? this.RANDOMTIMES = 1e3 : this.RANDOMTIMES = 2e3, this.winRateUtils.clearCache(this.RANDOMTIMES), this.handCards = [], this.publicCards = [];
            let h = [];
            for (let t = 0; t < a.length; t++) {
                let e = a[t].seatID;
                h.push(e);
                let s = a[t].handCards,
                    i = [];
                for (let t = 0; t < s.length; t++) {
                    let e = s[t].suit,
                        a = s[t].num;
                    i.push([this._cardSuitMap(e), this._cardNumMap(a)])
                }
                this.handCards.push(i)
            }
            for (let t = 0; t < r.length; t++) {
                let e = r[t].suit,
                    s = r[t].num;
                this.publicCards.push([this._cardSuitMap(e), this._cardNumMap(s)])
            }
            let o = this.calculateWinRate(this.handCards, this.publicCards);
            o = this.roundWinRates(o);
            let u = [],
                c = 0;
            for (let t = 0; t < o.length; t++) o[t] > c && (c = o[t]);
            for (let t = 0; t < h.length; t++) {
                let e = !1;
                o[t] == c && (e = !0), u.push({
                    seatId: h[t],
                    winRate: o[t],
                    bLead: e
                })
            }
            return u
        }
        _initCombsAarray() {
            if (this.combs75 = [], this.combs95 = [], this.combs = [], this.gameId == s.Enum.GameId.Plo) {
                let t = this.winRateUtils.combination([0, 1, 2, 3, 4, 5, 6, 7, 8], 5);
                for (let e = 0; e < t.length; e++) {
                    let s = 0;
                    for (let a = 0; a < t[e].length; a++) {
                        let i = t[e][a];
                        i >= 5 && i <= 8 && s++
                    }
                    2 == s && this.combs95.push(t[e])
                }
            } else if (this.gameId == s.Enum.GameId.Plo5) {
                let t = this.winRateUtils.combination([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
                for (let e = 0; e < t.length; e++) {
                    let s = 0;
                    for (let a = 0; a < t[e].length; a++) {
                        let i = t[e][a];
                        i >= 5 && i <= 9 && s++
                    }
                    2 == s && this.combs95.push(t[e])
                }
            } else this.combs75 = this.winRateUtils.combination([0, 1, 2, 3, 4, 5, 6], 5);
            s.roomManager.checkGameIsPlo(this.gameId) ? this.combs = this.combs95 : this.combs = this.combs75
        }
        _cardSuitMap(t) {
            return t == s.Enum.CardSuit.CARD_CLUB ? 2 : t == s.Enum.CardSuit.CARD_DIAMOND ? 3 : t == s.Enum.CardSuit.CARD_HEART ? 1 : t == s.Enum.CardSuit.CARD_SPADE ? 0 : -1
        }
        _cardNumMap(t) {
            let e = 0;
            switch (t) {
                case s.Enum.CardNum.CARD_2:
                    e = 2;
                    break;
                case s.Enum.CardNum.CARD_3:
                    e = 3;
                    break;
                case s.Enum.CardNum.CARD_4:
                    e = 4;
                    break;
                case s.Enum.CardNum.CARD_5:
                    e = 5;
                    break;
                case s.Enum.CardNum.CARD_6:
                    e = 6;
                    break;
                case s.Enum.CardNum.CARD_7:
                    e = 7;
                    break;
                case s.Enum.CardNum.CARD_8:
                    e = 8;
                    break;
                case s.Enum.CardNum.CARD_9:
                    e = 9;
                    break;
                case s.Enum.CardNum.CARD_10:
                    e = 10;
                    break;
                case s.Enum.CardNum.CARD_J:
                    e = 11;
                    break;
                case s.Enum.CardNum.CARD_Q:
                    e = 12;
                    break;
                case s.Enum.CardNum.CARD_K:
                    e = 13;
                    break;
                case s.Enum.CardNum.CARD_A:
                    e = 14
            }
            return e
        }
        resetCalc() {
            this.winRecords = [0, 0, 0], this.handCards = [], this.publicCards = [], this.allCards = []
        }
        showResult(t) {
            let e = "";
            for (let s = 0; s < t.length; s++) e = this.winRateUtils.toPercent(t[s]), console.log("%d showResult#################: %s", s, e)
        }
        calculateWinRate(t, e) {
            let s = [],
                a = this.winRateUtils.arrZero(t.length),
                i = [];
            for (let e = 0; e < t.length; e++)
                for (let s = 0; s < t[e].length; s++) i.push(t[e][s]);
            i = i.concat(e);
            let l = this.winRateUtils.arrayWithout(this.winRateUtils.arrCopy(this.allCards), this.winRateUtils.arrCopy(i)),
                n = 5 - e.length,
                r = this.winRateUtils.combNumber(l.length, n);
            if (console.log("剩余可用牌的数量:" + l.length), console.log("剩余的公共牌数量:" + n), console.log("剩余组合存在数量:" + r), r < this.RANDOMTIMES) {
                console.log("###possibilities less than RANDOMTIMES");
                let i = Array(l.length).fill(0).map(((t, e) => e)),
                    h = this.winRateUtils.combination(i, n);
                for (let s = 0; s < h.length; s++) {
                    let i = [].concat(e);
                    h[s].forEach((t => i.push(l[t])));
                    let n = this.whoWin(i, t);
                    n.forEach((t => {
                        a[t] += 1 / n.length
                    }))
                }
                s = a.map((t => (t / r).toPrecision(4)))
            } else {
                console.log("###possibilities more than RANDOMTIMES");
                for (let s = 0; s < this.RANDOMTIMES; s++) {
                    let s = [],
                        i = e.slice(0),
                        n = this.winRateUtils.randomPick(l.length, 5 - e.length);
                    for (let t = 0; t < n.length; t++) s.push(l[n[t]]);
                    for (let t = 0; t < s.length; t++) i.push(s[t]);
                    let r = this.whoWin(i, t);
                    for (let t = 0; t < r.length; t++) a[r[t]] += 1 / r.length
                }
                s = a.map((t => t / this.RANDOMTIMES))
            }
            return s
        }
        _arrZero(t) {
            return 2 === t ? [0, 0] : 3 === t ? [0, 0, 0] : 4 === t ? [0, 0, 0, 0] : 8 === t ? [0, 0, 0, 0, 0, 0, 0, 0] : 9 === t ? [0, 0, 0, 0, 0, 0, 0, 0, 0] : Array(t).fill(0)
        }
        whoWin(t, e) {
            let s = this._arrZero(e.length);
            for (let a = 0; a < e.length; a++) {
                let i = t.concat(e[a]);
                for (let t = 0; t < this.combs.length; t++) {
                    let e = [];
                    for (let s = 0; s < this.combs[t].length; s++) e.push(i[this.combs[t][s]]);
                    let l = this.winRateUtils.getCardsValue(e, this.gameMode);
                    s[a] < l && (s[a] = l)
                }
            }
            let a = [],
                i = Math.max.apply(null, s);
            return s.map((function(t, e) {
                t === i && a.push(e)
            })), a
        }
        testFunc() {
            let t, e, a, r, h, o;
            this._initCombsAarray(), this.winRateUtils.clearCache(this.RANDOMTIMES), this.gameMode == s.Enum.CreateGameMode.CreateGame_Mode_Short ? this.allCards = this.winRateUtils.arrayMultiply(i, n) : this.allCards = this.winRateUtils.arrayMultiply(i, l), console.log("############################ allCards:" + this.allCards), this.gameMode == s.Enum.CreateGameMode.CreateGame_Mode_Normal && this.gameId != s.Enum.GameId.Plo ? (console.log("##################德州长牌"), t = [
                [1, 8],
                [0, 12]
            ], e = [
                [3, 8],
                [1, 14]
            ]) : this.gameMode == s.Enum.CreateGameMode.CreateGame_Mode_Short && this.gameId != s.Enum.GameId.Plo ? (console.log("##################德州短牌"), t = [
                [0, 14],
                [1, 14]
            ], e = [
                [0, 6],
                [0, 7]
            ]) : this.gameId == s.Enum.GameId.Plo && (console.log("##################奥马哈"), t = [
                [0, 14],
                [0, 5],
                [3, 5],
                [3, 13]
            ], e = [
                [3, 11],
                [2, 8],
                [2, 5],
                [1, 2]
            ]), this.gameMode == s.Enum.CreateGameMode.CreateGame_Mode_Short ? (console.log("##################短牌"), a = [2, 14], r = [0, 10], h = [1, 10], o = [0, 11]) : (console.log("##################长牌"), a = [0, 2], r = [0, 6], h = [1, 10], o = [3, 12]), this.handCards.push(t), this.handCards.push(e), this.publicCards.push(a), this.publicCards.push(r), this.publicCards.push(h), this.publicCards.push(o), console.time("CalcTime");
            let u = this.calculateWinRate(this.handCards, this.publicCards);
            console.timeEnd("CalcTime"), this.showResult(u)
        }
        roundWinRates(t) {
            let e = [];
            for (let s = 0; s < t.length; s++) {
                t[s] *= 100;
                let a = parseFloat((t[s] - Math.round(t[s])).toFixed(2));
                t[s] = Math.round(t[s]), 0 != a && e.push({
                    index: s,
                    value: t[s],
                    delta: -a
                })
            }
            e.sort((function(t, e) {
                return t.delta === e.delta ? t.value - e.value : t.delta > e.delta ? 1 : -1
            }));
            let s = t.reduce(((t, e) => t + e), 0);
            for (; 100 != s;) {
                if (s > 100) {
                    if (0 == e.length || e[e.length - 1].delta < 0) break;
                    t[e.pop().index] -= 1
                } else if (s < 100) {
                    if (0 == e.length || e[0].delta > 0) break;
                    t[e.shift().index] += 1
                }
                s = t.reduce(((t, e) => t + e), 0)
            }
            return t
        }
    }
    t("WinRateTools", r), r._g_instance = null, e._RF.pop()
}