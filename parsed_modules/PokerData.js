import * as _ from "./cc.js";
import * as t from "./cv.js";
import * as r from "./Enum.js";
import * as a from "./Enum.js";
import * as E from "./Enum.js";

function main() {
    _._RF.push({}, "f3ce47K34hCeYHy9VQRtUSc", "PokerData", void 0);
    let i = e("PokerType", function(e) {
            return e[e.POKER_TYPE_SINGLE = 0] = "POKER_TYPE_SINGLE", e[e.POKER_TYPE_PAIR = 1] = "POKER_TYPE_PAIR", e[e.POKER_TYPE_TWO_PAIR = 2] = "POKER_TYPE_TWO_PAIR", e[e.POKER_TYPE_THREE = 3] = "POKER_TYPE_THREE", e[e.POKER_TYPE_STRAIGHT = 4] = "POKER_TYPE_STRAIGHT", e[e.POKER_TYPE_FLUSH = 5] = "POKER_TYPE_FLUSH", e[e.POKER_TYPE_FULL_HOUSE = 6] = "POKER_TYPE_FULL_HOUSE", e[e.POKER_TYPE_FOUR = 7] = "POKER_TYPE_FOUR", e[e.POKER_TYPE_STRAIGHT_FLUSH = 8] = "POKER_TYPE_STRAIGHT_FLUSH", e[e.POKER_TYPE_STRAIGHT_KING = 9] = "POKER_TYPE_STRAIGHT_KING", e
        }({})),
        R = e("PokerValue", function(e) {
            return e[e.POKER_VALUE_A = 0] = "POKER_VALUE_A", e[e.POKER_VALUE_2 = 1] = "POKER_VALUE_2", e[e.POKER_VALUE_3 = 2] = "POKER_VALUE_3", e[e.POKER_VALUE_4 = 3] = "POKER_VALUE_4", e[e.POKER_VALUE_5 = 4] = "POKER_VALUE_5", e[e.POKER_VALUE_6 = 5] = "POKER_VALUE_6", e[e.POKER_VALUE_7 = 6] = "POKER_VALUE_7", e[e.POKER_VALUE_8 = 7] = "POKER_VALUE_8", e[e.POKER_VALUE_9 = 8] = "POKER_VALUE_9", e[e.POKER_VALUE_10 = 9] = "POKER_VALUE_10", e[e.POKER_VALUE_J = 10] = "POKER_VALUE_J", e[e.POKER_VALUE_Q = 11] = "POKER_VALUE_Q", e[e.POKER_VALUE_K = 12] = "POKER_VALUE_K", e[e.POKER_VALUE_COUNT = 13] = "POKER_VALUE_COUNT", e[e.POKER_VALUE_BACK = 52] = "POKER_VALUE_BACK", e[e.POKER_VALUE_EMPTY = 53] = "POKER_VALUE_EMPTY", e
        }({})),
        O = e("ShortPokerValue", function(e) {
            return e[e.SHORT_POKER_VALUE_A = 0] = "SHORT_POKER_VALUE_A", e[e.SHORT_POKER_VALUE_6 = 1] = "SHORT_POKER_VALUE_6", e[e.SHORT_POKER_VALUE_7 = 2] = "SHORT_POKER_VALUE_7", e[e.SHORT_POKER_VALUE_8 = 3] = "SHORT_POKER_VALUE_8", e[e.SHORT_POKER_VALUE_9 = 4] = "SHORT_POKER_VALUE_9", e[e.SHORT_POKER_VALUE_10 = 5] = "SHORT_POKER_VALUE_10", e[e.SHORT_POKER_VALUE_J = 6] = "SHORT_POKER_VALUE_J", e[e.SHORT_POKER_VALUE_Q = 7] = "SHORT_POKER_VALUE_Q", e[e.SHORT_POKER_VALUE_K = 8] = "SHORT_POKER_VALUE_K", e[e.SHORT_POKER_VALUE_COUNT = 9] = "SHORT_POKER_VALUE_COUNT", e[e.SHORT_POKER_VALUE_BACK = 36] = "SHORT_POKER_VALUE_BACK", e[e.SHORT_POKER_VALUE_EMPTY = 37] = "SHORT_POKER_VALUE_EMPTY", e
        }({}));
    class P {
        constructor(e) {
            switch (this.value = 0, this.color = a.CARD_SPADE, this.mode = E.CreateGame_Mode_None, this.faceValue = 0, this.mode = e, this.mode) {
                case E.CreateGame_Mode_Short:
                    this.value = O.SHORT_POKER_VALUE_BACK, this.faceValue = O.SHORT_POKER_VALUE_EMPTY, this.color = 0;
                    break;
                default:
                    this.value = R.POKER_VALUE_BACK, this.faceValue = R.POKER_VALUE_EMPTY, this.color = 0
            }
        }
        initWhitValue(e, _, t) {
            switch (this.value = e, this.color = _, t && (this.mode = t), t) {
                case E.CreateGame_Mode_Short:
                    this.faceValue = (e + O.SHORT_POKER_VALUE_COUNT - 1) % O.SHORT_POKER_VALUE_COUNT;
                    break;
                default:
                    this.faceValue = (e + R.POKER_VALUE_COUNT - 1) % R.POKER_VALUE_COUNT
            }
        }
        initWithNumber(e, _) {
            switch (_ && (this.mode = _), this.mode) {
                case E.CreateGame_Mode_Short:
                    this.value = e % O.SHORT_POKER_VALUE_COUNT, this.faceValue = (e + O.SHORT_POKER_VALUE_COUNT - 1) % O.SHORT_POKER_VALUE_COUNT, this.color = Math.floor(e / O.SHORT_POKER_VALUE_COUNT);
                    break;
                default:
                    this.value = e % R.POKER_VALUE_COUNT, this.faceValue = (e + R.POKER_VALUE_COUNT - 1) % R.POKER_VALUE_COUNT, this.color = Math.floor(e / R.POKER_VALUE_COUNT)
            }
        }
        getNumber(e) {
            let _ = 0;
            switch (e) {
                case E.CreateGame_Mode_Short:
                    _ = this.color * O.SHORT_POKER_VALUE_COUNT + this.value;
                    break;
                default:
                    _ = this.color * R.POKER_VALUE_COUNT + this.value
            }
            return _
        }
        static getLocalValue(e, _) {
            let t = R.POKER_VALUE_2;
            switch (_) {
                case E.CreateGame_Mode_Short:
                    switch (e) {
                        case r.CARD_6:
                            t = O.SHORT_POKER_VALUE_6;
                            break;
                        case r.CARD_7:
                            t = O.SHORT_POKER_VALUE_7;
                            break;
                        case r.CARD_8:
                            t = O.SHORT_POKER_VALUE_8;
                            break;
                        case r.CARD_9:
                            t = O.SHORT_POKER_VALUE_9;
                            break;
                        case r.CARD_10:
                            t = O.SHORT_POKER_VALUE_10;
                            break;
                        case r.CARD_J:
                            t = O.SHORT_POKER_VALUE_J;
                            break;
                        case r.CARD_Q:
                            t = O.SHORT_POKER_VALUE_Q;
                            break;
                        case r.CARD_K:
                            t = O.SHORT_POKER_VALUE_K;
                            break;
                        case r.CARD_A:
                            t = O.SHORT_POKER_VALUE_A;
                            break;
                        default:
                            t = O.SHORT_POKER_VALUE_6
                    }
                    break;
                default:
                    switch (e) {
                        case r.CARD_2:
                            t = R.POKER_VALUE_2;
                            break;
                        case r.CARD_3:
                            t = R.POKER_VALUE_3;
                            break;
                        case r.CARD_4:
                            t = R.POKER_VALUE_4;
                            break;
                        case r.CARD_5:
                            t = R.POKER_VALUE_5;
                            break;
                        case r.CARD_6:
                            t = R.POKER_VALUE_6;
                            break;
                        case r.CARD_7:
                            t = R.POKER_VALUE_7;
                            break;
                        case r.CARD_8:
                            t = R.POKER_VALUE_8;
                            break;
                        case r.CARD_9:
                            t = R.POKER_VALUE_9;
                            break;
                        case r.CARD_10:
                            t = R.POKER_VALUE_10;
                            break;
                        case r.CARD_J:
                            t = R.POKER_VALUE_J;
                            break;
                        case r.CARD_Q:
                            t = R.POKER_VALUE_Q;
                            break;
                        case r.CARD_K:
                            t = R.POKER_VALUE_K;
                            break;
                        case r.CARD_A:
                            t = R.POKER_VALUE_A;
                            break;
                        default:
                            t = R.POKER_VALUE_2
                    }
            }
            return t
        }
        static getPokerTypeString(e, _, t, a, E, r, i) {
            let R = P.getPokerType(e, _, t, a, E, r, i);
            return P.getPokerTypeStringFromTypeCode(R)
        }
        static getPokerTypeStringFromTypeCode(e) {
            let _ = "unknow";
            switch (e) {
                case i.POKER_TYPE_SINGLE:
                    _ = t.config.getStringData("UITitle113");
                    break;
                case i.POKER_TYPE_PAIR:
                    _ = t.config.getStringData("UITitle114");
                    break;
                case i.POKER_TYPE_TWO_PAIR:
                    _ = t.config.getStringData("UITitle115");
                    break;
                case i.POKER_TYPE_THREE:
                    _ = t.config.getStringData("UITitle116");
                    break;
                case i.POKER_TYPE_STRAIGHT:
                    _ = t.config.getStringData("UITitle117");
                    break;
                case i.POKER_TYPE_FLUSH:
                    _ = t.config.getStringData("UITitle118");
                    break;
                case i.POKER_TYPE_FULL_HOUSE:
                    _ = t.config.getStringData("UITitle119");
                    break;
                case i.POKER_TYPE_FOUR:
                    _ = t.config.getStringData("UITitle120");
                    break;
                case i.POKER_TYPE_STRAIGHT_FLUSH:
                    _ = t.config.getStringData("UITitle121");
                    break;
                case i.POKER_TYPE_STRAIGHT_KING:
                    _ = t.config.getStringData("UITitle122")
            }
            return _
        }
        static getPokerType(e, _, t, a, E, r, R) {
            let O = i.POKER_TYPE_SINGLE;
            if (null == a) {
                let a = e.concat(_),
                    E = [];
                O = P._getPokerType(a, t, E)
            } else O = P._getCombPokerType(e, _, t, a, E, r, R);
            return O
        }
        static _getStraightValue(e, _) {
            let a = -1,
                E = 0,
                r = t.StringTools.arrayMemsetNew(R.POKER_VALUE_COUNT, 0);
            for (let a = 0; a < t.StringTools.getArrayLength(e); ++a) {
                let t = new P(_);
                t.initWithNumber(e[a]), t.value >= 0 && t.value < R.POKER_VALUE_COUNT && ++r[t.value]
            }
            switch (_) {
                case t.Enum.CreateGameMode.CreateGame_Mode_Short:
                    for (let e = 0; e < O.SHORT_POKER_VALUE_COUNT; ++e) r[e] > 0 ? ++E : E = 0, E >= 5 && (a = e), E >= 4 && e === O.SHORT_POKER_VALUE_K && r[O.SHORT_POKER_VALUE_A] > 0 && (a = O.SHORT_POKER_VALUE_A);
                    break;
                default:
                    for (let e = 0; e < R.POKER_VALUE_COUNT; ++e) r[e] > 0 ? ++E : E = 0, E >= 5 && (a = e), E >= 4 && e === R.POKER_VALUE_K && r[R.POKER_VALUE_A] > 0 && (a = R.POKER_VALUE_A)
            }
            return a
        }
        static _comparePoker(e, _) {
            return P._compareValue(e.value, _.value)
        }
        static _comparePokerShort(e, _) {
            return P._compareValueShort(e.value, _.value)
        }
        static _compareValue(e, _) {
            let t = 0,
                a = 0;
            return t = (e + R.POKER_VALUE_COUNT - 1) % R.POKER_VALUE_COUNT, a = (_ + R.POKER_VALUE_COUNT - 1) % R.POKER_VALUE_COUNT, a - t
        }
        static _compareValueShort(e, _) {
            let t = 0,
                a = 0;
            return t = (e + O.SHORT_POKER_VALUE_COUNT - 1) % O.SHORT_POKER_VALUE_COUNT, a = (_ + O.SHORT_POKER_VALUE_COUNT - 1) % O.SHORT_POKER_VALUE_COUNT, a - t
        }
        static _findPokersWithValue(e, _, a, E, r) {
            E = t.Number(E);
            let i = 0,
                R = [];
            for (let r = 0; r < t.StringTools.getArrayLength(e) && !(e[r].value === a && (R.push(e[r].getNumber(_)), ++i, E > 0 && i >= E)); ++r);
            r && r.push.apply(r, R)
        }
        static _findStraightPokers(e, _, a, E) {
            let r = [];
            switch (_) {
                case t.Enum.CreateGameMode.CreateGame_Mode_Short:
                    for (let E = 0; E < 5; ++E)
                        for (let i = 0; i < t.StringTools.getArrayLength(e); ++i)
                            if (e[i].value === (a + O.SHORT_POKER_VALUE_COUNT - E) % O.SHORT_POKER_VALUE_COUNT) {
                                r.push(e[i].getNumber(_));
                                break
                            } break;
                default:
                    for (let E = 0; E < 5; ++E)
                        for (let i = 0; i < t.StringTools.getArrayLength(e); ++i)
                            if (e[i].value === (a + R.POKER_VALUE_COUNT - E) % R.POKER_VALUE_COUNT) {
                                r.push(e[i].getNumber(_));
                                break
                            }
            }
            E && E.push.apply(E, r)
        }
        static _findStraightFlushPokers(e, _, a, E, r) {
            let i = [];
            switch (_) {
                case t.Enum.CreateGameMode.CreateGame_Mode_Short:
                    for (let r = 0; r < 5; ++r)
                        for (let R = 0; R < t.StringTools.getArrayLength(e); ++R)
                            if (e[R].value === (a + O.SHORT_POKER_VALUE_COUNT - r) % O.SHORT_POKER_VALUE_COUNT && e[R].color === E) {
                                i.push(e[R].getNumber(_));
                                break
                            } break;
                default:
                    for (let r = 0; r < 5; ++r)
                        for (let O = 0; O < t.StringTools.getArrayLength(e); ++O)
                            if (e[O].value === (a + R.POKER_VALUE_COUNT - r) % R.POKER_VALUE_COUNT && e[O].color === E) {
                                i.push(e[O].getNumber(_));
                                break
                            }
            }
            r && r.push.apply(r, i)
        }
        static _findBigPokers(e, _, a, E) {
            let r = [];
            switch (_) {
                case t.Enum.CreateGameMode.CreateGame_Mode_Short:
                    e.sort(P._comparePokerShort);
                    break;
                default:
                    e.sort(P._comparePoker)
            }
            for (let E = 0; E < a; ++E) E >= 0 && E < t.StringTools.getArrayLength(e) && r.push(e[E].getNumber(_));
            E && E.push.apply(E, r)
        }
        static _findPokersWithColor(e, _, a, E) {
            let r = [];
            switch (_) {
                case t.Enum.CreateGameMode.CreateGame_Mode_Short:
                    e.sort(P._comparePokerShort);
                    break;
                default:
                    e.sort(P._comparePoker)
            }
            let i = 0;
            for (let E = 0; E < t.StringTools.getArrayLength(e) && (e[E].color === a && (r.push(e[E].getNumber(_)), ++i), !(i >= 5)); ++E);
            E && E.push.apply(E, r)
        }
        static _getCombPokerType(e, _, t, a, E, r, R) {
            let O = (e, _) => {
                let t = [],
                    a = (e, E) => {
                        if (e.length === _) t.push(e);
                        else
                            for (var r = 0, i = E.length - _ + e.length; r <= i; ++r) a(e.concat(E[r]), E.slice(r + 1))
                    };
                return a([], e), t
            };
            a = Math.min(a, e.length), E = Math.min(E, _.length);
            let l = O(e, a),
                o = O(_, E),
                T = 0,
                u = 0,
                s = -1,
                c = [],
                A = new P(t),
                V = new P(t);
            for (let e = 0; e < l.length; ++e)
                for (let _ = 0; _ < o.length; ++_) {
                    let a = !1,
                        E = [],
                        r = l[e].concat(o[_]),
                        R = this._getPokerType(r, t, E);
                    if (R > s) a = !0;
                    else if (R === s) switch (R) {
                        case i.POKER_TYPE_SINGLE:
                            for (let e = 0; e < E.length; ++e) {
                                if (A.initWithNumber(E[e]), V.initWithNumber(c[e]), A.faceValue > V.faceValue) {
                                    a = !0;
                                    break
                                }
                                if (A.faceValue !== V.faceValue) break
                            }
                            break;
                        case i.POKER_TYPE_PAIR:
                            if (A.initWithNumber(E[0]), V.initWithNumber(c[0]), A.faceValue > V.faceValue) a = !0;
                            else if (A.faceValue === V.faceValue)
                                for (let e = 2; e < E.length; ++e) {
                                    if (A.initWithNumber(E[e]), V.initWithNumber(c[e]), A.faceValue > V.faceValue) {
                                        a = !0;
                                        break
                                    }
                                    if (A.faceValue !== V.faceValue) break
                                }
                            break;
                        case i.POKER_TYPE_TWO_PAIR:
                            if (A.initWithNumber(E[0]), V.initWithNumber(c[0]), A.faceValue > V.faceValue) a = !0;
                            else if (A.faceValue === V.faceValue)
                                if (A.initWithNumber(E[2]), V.initWithNumber(c[2]), A.faceValue > V.faceValue) a = !0;
                                else if (A.faceValue === V.faceValue)
                                for (let e = 4; e < E.length; ++e) {
                                    if (A.initWithNumber(E[e]), V.initWithNumber(c[e]), A.faceValue > V.faceValue) {
                                        a = !0;
                                        break
                                    }
                                    if (A.faceValue !== V.faceValue) break
                                }
                            break;
                        case i.POKER_TYPE_THREE:
                            if (A.initWithNumber(E[0]), V.initWithNumber(c[0]), A.faceValue > V.faceValue) a = !0;
                            else if (A.faceValue === V.faceValue)
                                for (let e = 3; e < E.length; ++e) {
                                    if (A.initWithNumber(E[e]), V.initWithNumber(c[e]), A.faceValue > V.faceValue) {
                                        a = !0;
                                        break
                                    }
                                    if (A.faceValue !== V.faceValue) break
                                }
                            break;
                        case i.POKER_TYPE_STRAIGHT:
                        case i.POKER_TYPE_STRAIGHT_FLUSH:
                            A.initWithNumber(E[0]), V.initWithNumber(c[0]), A.faceValue > V.faceValue && (a = !0);
                            break;
                        case i.POKER_TYPE_FLUSH:
                            for (let e = 0; e < E.length; ++e) {
                                if (A.initWithNumber(E[e]), V.initWithNumber(c[e]), A.faceValue > V.faceValue) {
                                    a = !0;
                                    break
                                }
                                if (A.faceValue !== V.faceValue) break
                            }
                            break;
                        case i.POKER_TYPE_FULL_HOUSE:
                            A.initWithNumber(E[0]), V.initWithNumber(c[0]), A.faceValue > V.faceValue ? a = !0 : A.faceValue === V.faceValue && (A.initWithNumber(E[3]), V.initWithNumber(c[3]), A.faceValue > V.faceValue && (a = !0));
                            break;
                        case i.POKER_TYPE_FOUR:
                            if (A.initWithNumber(E[0]), V.initWithNumber(c[0]), A.faceValue > V.faceValue) a = !0;
                            else if (A.faceValue === V.faceValue)
                                for (let e = 4; e < E.length; ++e) {
                                    if (A.initWithNumber(E[e]), V.initWithNumber(c[e]), A.faceValue > V.faceValue) {
                                        a = !0;
                                        break
                                    }
                                    if (A.faceValue !== V.faceValue) break
                                }
                            break;
                        case i.POKER_TYPE_STRAIGHT_KING:
                    }
                    a && (T = e, u = _, s = R, c = E)
                }
            return r && r.push.apply(r, l[T]), R && R.push.apply(R, o[u]), s
        }
        static _getPokerType(e, _, E) {
            let r = i.POKER_TYPE_SINGLE,
                l = 0,
                o = 0,
                T = a.CARD_DIAMOND,
                u = a.CardSuit_MAX,
                s = null;
            switch (_) {
                case t.Enum.CreateGameMode.CreateGame_Mode_Short:
                    l = O.SHORT_POKER_VALUE_A, o = O.SHORT_POKER_VALUE_COUNT, s = P._compareValueShort;
                    break;
                case t.Enum.CreateGameMode.CreateGame_Mode_Normal:
                    l = R.POKER_VALUE_A, o = R.POKER_VALUE_COUNT, s = P._compareValue
            } {
                let a = t.StringTools.arrayMemsetNew(o, 0),
                    R = t.StringTools.arrayMemsetNew(u, 0),
                    O = [];
                for (let E = 0; E < t.StringTools.getArrayLength(e); ++E) {
                    let t = new P(_);
                    t.initWithNumber(e[E], _), O.push(t), t.value >= 0 && t.value < o && ++a[t.value], t.color >= 0 && t.color < u && ++R[t.color]
                }
                let c = !1,
                    A = !1,
                    V = 0,
                    U = 0,
                    K = 0,
                    f = t.StringTools.arrayMemsetNew(3, -1);
                for (let e = l; e < o; ++e) {
                    if (a[e] >= 4 && (U = e, c = !0), 3 === a[e])
                        if (A) {
                            let _ = (K + o - 1) % o,
                                t = (e + o - 1) % o,
                                a = _ > t ? e : K;
                            K = _ > t ? K : e, f[V] = a, ++V
                        } else K = e, A = !0;
                    2 === a[e] && (f[V] = e, ++V)
                }
                for (let e = 0; e < f.length; ++e) f[e] < 0 && f.splice(e--, 1);
                f.length > 0 && f.sort(s);
                let n = !1,
                    h = 0;
                for (let e = T; e < u; ++e)
                    if (R[e] >= 5) {
                        n = !0, h = e;
                        break
                    } let L = P._getStraightValue(e, _),
                    S = L >= 0,
                    g = !1,
                    k = 0,
                    b = [];
                if (n && S) {
                    for (let _ = 0; _ < t.StringTools.getArrayLength(O); ++_) O[_].color === h && b.push(e[_]);
                    k = P._getStraightValue(b, _), g = k >= 0
                }
                if (g) P._findStraightFlushPokers(O, _, L, h, E), r = k === l ? i.POKER_TYPE_STRAIGHT_KING : i.POKER_TYPE_STRAIGHT_FLUSH;
                else if (c) {
                    let e = [];
                    for (let _ = 0; _ < O.length; ++_) O[_].value !== U && e.push(O[_]);
                    P._findPokersWithValue(O, _, U, 4, E), P._findBigPokers(e, _, 1, E), r = i.POKER_TYPE_FOUR
                } else if (n) P._findPokersWithColor(O, _, h, E), r = i.POKER_TYPE_FLUSH;
                else if (A && V > 0) P._findPokersWithValue(O, _, K, 3, E), P._findPokersWithValue(O, _, f[0], 2, E), r = i.POKER_TYPE_FULL_HOUSE;
                else if (S) P._findStraightPokers(O, _, L, E), r = i.POKER_TYPE_STRAIGHT;
                else if (A) {
                    let e = [];
                    for (let _ = 0; _ < O.length; ++_) O[_].value !== K && e.push(O[_]);
                    P._findPokersWithValue(O, _, K, 3, E), P._findBigPokers(e, _, 2, E), r = i.POKER_TYPE_THREE
                } else if (V >= 2) {
                    let e = [];
                    for (let _ = 0; _ < O.length; ++_) O[_].value !== f[0] && O[_].value !== f[1] && e.push(O[_]);
                    P._findPokersWithValue(O, _, f[0], 2, E), P._findPokersWithValue(O, _, f[1], 2, E), P._findBigPokers(e, _, 1, E), r = i.POKER_TYPE_TWO_PAIR
                } else if (1 === V) {
                    let e = [];
                    for (let _ = 0; _ < O.length; ++_) O[_].value !== f[0] && e.push(O[_]);
                    P._findPokersWithValue(O, _, f[0], 2, E), P._findBigPokers(e, _, 3, E), r = i.POKER_TYPE_PAIR
                } else P._findBigPokers(O, _, 5, E), r = i.POKER_TYPE_SINGLE
            }
            return r
        }
    }
    e("PokerData", P), _._RF.pop()
}