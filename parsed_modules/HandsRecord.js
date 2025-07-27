import * as e from "./cc.js";
import * as a from "./cc.js";
import * as s from "./gs_protocol.mjs_cjs=&original=.js";
import * as o from "./RecordType.js";
import * as n from "./cv.js";
import * as l from "./Enum.js";
import * as i from "./winRateTools.js";
import * as r from "./RoundRecordDecoder.js";
import * as c from "./HoldemReplayPrefab.js";
import * as d from "./Pb.js";
import * as u from "./StringTools.js";

function main() {
    e._RF.push({}, "db017XAkn5ECYEy1OMG9YgM", "HandsRecord", void 0);
    let h = t("ReplayerActionTitle", function(t) {
            return t.SB = "SB", t.BB = "BB", t.STRADDLE = "STR", t.RAISE = "Raise", t.CALL = "Call", t.BET = "Bet", t.FOLD = "Fold", t.CHECK = "Check", t.ALL_IN = "All In", t.ALL_IN_PERCENTAGE = "ALL_IN_PERCENTAGE", t.SHOW_CARDS = "SHOW_CARDS", t.SHOWDOWN = "SHOWDOWN", t.SHOW_WINNER = "SHOW_WINNER", t.NO_ACTION = "NO_ACTION", t.BTB = "BTB", t
        }({})),
        m = t("ReplayerRoundType", function(t) {
            return t[t.PreFlop = 0] = "PreFlop", t[t.Flop = 1] = "Flop", t[t.Turn = 2] = "Turn", t[t.River = 3] = "River", t
        }({}));
    t("HandsRecord", class {
        constructor(t, e) {
            this.type = void 0, this.data = void 0, this.customData = void 0, this.customDetailData = void 0, this._cashSeatLabelList = {
                2: ["SB", "BB"],
                3: ["BTN", "SB", "BB"],
                4: ["BTN", "SB", "BB", "CO"],
                5: ["BTN", "SB", "BB", "UTG", "CO"],
                6: ["BTN", "SB", "BB", "UTG", "MP", "CO"],
                7: ["BTN", "SB", "BB", "UTG", "UTG1", "MP", "CO"],
                8: ["BTN", "SB", "BB", "UTG", "UTG1", "MP", "MP1", "CO"],
                9: ["BTN", "SB", "BB", "UTG", "UTG1", "MP", "MP1", "MP2", "CO"]
            }, this._cashSDSeatLabelList = {
                2: ["BTN", "UTG"],
                3: ["BTN", "UTG", "CO"],
                4: ["BTN", "UTG", "MP", "CO"],
                5: ["BTN", "UTG", "UTG1", "MP", "CO"],
                6: ["BTN", "UTG", "UTG1", "MP", "MP1", "CO"],
                7: ["BTN", "UTG", "UTG1", "MP", "MP1", "MP2", "CO"],
                8: ["BTN", "UTG", "UTG1", "MP", "MP1", "MP2", "MP3", "CO"],
                9: ["BTN", "UTG", "UTG1", "MP", "MP1", "MP2", "MP3", "MP4", "CO"]
            }, this._mttSeatLabelList = {
                2: ["SB", "BB"],
                3: ["BTN", "SB", "BB"],
                4: ["BTN", "SB", "BB", "CO"],
                5: ["BTN", "SB", "BB", "UTG", "CO"],
                6: ["BTN", "SB", "BB", "UTG", "MP", "CO"],
                7: ["BTN", "SB", "BB", "UTG", "UTG1", "MP", "CO"],
                8: ["BTN", "SB", "BB", "UTG", "UTG1", "MP", "MP1", "CO"],
                9: ["BTN", "SB", "BB", "UTG", "UTG1", "MP", "MP1", "MP2", "CO"]
            }, this._mttSDSeatLabelList = {
                2: ["BTN", "UTG"],
                3: ["BTN", "UTG", "CO"],
                4: ["BTN", "UTG", "MP", "CO"],
                5: ["BTN", "UTG", "UTG1", "MP", "CO"],
                6: ["BTN", "UTG", "UTG1", "MP", "MP1", "CO"],
                7: ["BTN", "UTG", "UTG1", "MP", "MP1", "MP2", "CO"],
                8: ["BTN", "UTG", "UTG1", "MP", "MP1", "MP2", "MP3", "CO"],
                9: ["BTN", "UTG", "UTG1", "MP", "MP1", "MP2", "MP3", "MP4", "CO"]
            }, this.type = t, this.data = e, this.type === s.Cash ? this._convertCashGameRecordToTableInfo() : this.type === s.Mtt && this._convertMttGameRecordToTableInfo()
        }
        _convertCashGameRecordToTableInfo() {
            const t = this.data,
                e = o.Number(t.gameid),
                a = o.Number(t.game_mode);
            this.customData = {}, this.customData.players = [], this.customData.publicCards = [], this.customData.type = s.Cash, this.customData.roomId = t.roomid, this.customData.cashGameId = t.gameid, this.customData.replayUUID = t.game_uuid_js, this.customData.clubId = t.clubid, this.customData.roomUUIDjs = t.room_uuid_js, this.customData.isShortDeck = a == o.Enum.CreateGameMode.CreateGame_Mode_Short, t.start_time && (this.customData.startTime = o.StringTools.formatTime(t.start_time, o.Enum.eTimeType.Year_Month_Day_Hour_Min_Sec, !1));
            const n = u.protocol.GameRecord.fromObject(t.game_record),
                l = t.replay.TableInfo,
                i = t.replay.SeatsInfo.seats_info,
                r = t.replay.RoundsInfo,
                c = t.replay.RoomInfo;
            this.customData.seatCount = c.players_count, this.customData.handCardType = o.tools.getHandCardTypeFromGameID(e), this.customData.currency = o.appConfig.getWalletConfig().getTempCurrency({
                currencyType: t.currency_type
            }), l && (this.customData.dealer = l.dealer_seat), c && (this.customData.ante = c.ante, this.customData.bigBlind = c.blind);
            const d = {};
            if (o.StringTools.clearArray(this.customData.publicCards), n) {
                this.customData.totalPot = o.Number(n.total_pot);
                for (let t = 0; t < n.public_cards.length; ++t) {
                    const e = {
                        number: o.Number(n.public_cards[t].number),
                        suit: o.Number(n.public_cards[t].suit)
                    };
                    this.customData.publicCards.push(e)
                }
            }
            const h = o.tools.getCardsLengthFromGameID(e);
            o.StringTools.clearArray(this.customData.players);
            for (let t = 0; t < o.StringTools.getArrayLength(i); ++t) {
                var m;
                const e = {
                        uid: i[t].UID,
                        name: i[t].name,
                        avatarUrl: i[t].head_url,
                        label: i[t].label,
                        finalStake: o.Number((null == (m = i[t]) ? void 0 : m.stake) ?? 0),
                        cards: [],
                        seat: o.Number(i[t].seat_no),
                        isWinning: !1,
                        winningPot: 0,
                        winningJackpot: 0,
                        plat: 0
                    },
                    a = n.records.find((e => e.playerid == i[t].UID));
                if (a) {
                    const t = o.Number(a.win_bet),
                        s = o.Number(a.hand_total_valid_bet),
                        n = o.Number(a.player_betting_round_bet),
                        l = o.Number(a.jack_winbet),
                        i = o.Number(a.drawin);
                    if (e.winningPot = t + n + i, e.finalStake += t + i, this.customData.totalPot += n - s, e.winningJackpot = l, e.isWinning = !1, e.plat = o.Number(a.plat), a.cards && a.cards.length)
                        for (let t = 0; t < a.cards.length; ++t) {
                            const s = {
                                number: o.Number(a.cards[t].number),
                                suit: o.Number(a.cards[t].suit)
                            };
                            e.cards.push(s)
                        }
                    if (e.cards.length < h)
                        for (let t = e.cards.length; t < h; ++t) {
                            const t = {
                                number: -1,
                                suit: -1
                            };
                            e.cards.push(t)
                        }
                }
                d[e.seat] = e, this.customData.players.push(e)
            }
            this._isValidPlayerSeatAlias(d) || this._setPlayerSeatAlias(i, d), this.customDetailData = {};
            const _ = [];
            this.customDetailData.neReplayerBetRounds = _, this.customDetailData.gameId = e, this.customDetailData.replayUUID = this.customData.replayUUID;
            const p = this._doAnteBlindRound(r, c, l, d);
            _.push(p);
            const g = p.totalPot;
            p.totalPot = 0;
            let T = [];
            const y = r.preflop,
                P = r.end_preflop_round,
                A = this._doPlayerActions(y, P, d, T, e, a),
                b = A.totalPot > 0 ? A.totalPot : g;
            A.totalPot = g, _.push(A);
            const D = r.flop_community_cards,
                M = r.settlement_round;
            if (!D || 0 == D.length) return void this._doEndHand(A, M, d, n);
            const f = r.flop,
                B = r.end_flop_round;
            T.push(...D);
            const N = this._doPlayerActions(f, B, d, T, e, a),
                C = N.totalPot > 0 ? N.totalPot : b;
            N.totalPot = b, _.push(N);
            const I = r.turn_community_card;
            if (!I) return void this._doEndHand(N, M, d, n);
            const S = r.turn,
                R = r.end_turn_round;
            T.push(I);
            const L = this._doPlayerActions(S, R, d, T, e, a),
                U = L.totalPot > 0 ? L.totalPot : C;
            L.totalPot = C, _.push(L);
            const O = r.river_community_card;
            if (!O) return void this._doEndHand(L, M, d, n);
            const E = r.river,
                G = r.end_turn_round;
            T.push(O);
            const w = this._doPlayerActions(E, G, d, T, e, a);
            w.totalPot = U, _.push(w), this._doEndHand(w, M, d, n)
        }
        _isValidPlayerSeatAlias(t) {
            for (const e in t) {
                const s = t[e].label;
                if (!a(s) || "" === s || d.getInstance().isNumber(s)) return !1
            }
            return !0
        }
        _setPlayerSeatAlias(t, e) {
            const s = o.StringTools.getArrayLength(t),
                n = this.customData.isShortDeck ? this._cashSDSeatLabelList[s] : this._cashSeatLabelList[s];
            if (!a(n)) return;
            const l = this.customData.dealer;
            let i = this._getDealerIndexInDataPlayerList(t, l);
            const r = [];
            for (let e = 0; e < s; e++) r.push(t[i].seat_no), i++, i >= s && (i = 0);
            for (let t = 0; t < r.length; t++) {
                e[r[t]].label = n[t]
            }
        }
        _getDealerIndexInDataPlayerList(t, e) {
            let a = 0;
            for (let s = 0; s < o.StringTools.getArrayLength(t); s++)
                if (t[s].seat_no === e) {
                    a = s;
                    break
                } return a
        }
        _doAnteBlindRound(t, e, a, s) {
            const n = {
                totalPot: 0,
                newReplayerActions: [],
                allAnte: 0,
                blinds: 0
            };
            if (t.ante_round) {
                const e = t.end_ante_round;
                if (e) {
                    const t = e.pots_info;
                    let a = 0;
                    t && t.length > 0 && t.forEach((t => {
                        a += t.amount
                    })), n.allAnte = a
                }
            }
            n.totalPot += n.allAnte;
            const l = o.Number(e.ante),
                i = o.Number(e.blind),
                r = o.config.findSmallBlind(i),
                c = 2 * i;
            if (this.customData.ante = l, this.customDetailData.ante = l, this.customDetailData.bb = i, this.customData.isShortDeck ? (this.customDetailData.sb = 0, this.customDetailData.straddle = 0) : (this.customDetailData.sb = r, this.customDetailData.straddle = c, n.blinds = r + i), n.blinds = this.customDetailData.sb + this.customDetailData.bb, n.totalPot += n.blinds, this.customData.isShortDeck) {
                const t = {
                    player: s[a.dealer_seat],
                    actionTitle: h.BTB,
                    actionValue: l,
                    isAllIn: !1
                };
                return n.newReplayerActions.push(t), n
            }
            const d = {
                player: s[a.sb_seat],
                actionTitle: h.SB,
                actionValue: r,
                isAllIn: !1
            };
            n.newReplayerActions.push(d);
            const u = {
                player: s[a.bb_seat],
                actionTitle: h.BB,
                actionValue: i,
                isAllIn: !1
            };
            if (n.newReplayerActions.push(u), null !== a.straddle_seat && void 0 !== a.straddle_seat && -1 !== a.straddle_seat) {
                const t = {
                    player: s[a.straddle_seat],
                    actionTitle: h.STRADDLE,
                    actionValue: c,
                    isAllIn: !1
                };
                n.newReplayerActions.push(t), n.totalPot += c
            }
            return n
        }
        _doPlayerActions(t, e, a, s, i, r) {
            const c = {
                totalPot: 0,
                newReplayerActions: []
            };
            let d = [],
                u = e.pots_info;
            const m = o.tools.getCardsLengthFromGameID(i),
                _ = [];
            for (let t = 0; t < m; t++) _.push({
                number: -1,
                suit: -1
            });
            let p = 0;
            for (let e = 0; e < o.StringTools.getArrayLength(t); e++) {
                const s = o.Number(t[e].seat_no),
                    l = o.Number(t[e].amount),
                    i = o.Number(t[e].action_type),
                    r = a[s];
                let u = i == n.Enum_Action_Allin,
                    m = this._getActionTitleFromActionTypeCash(i);
                u && (d.push({
                    seatID: r.seat,
                    handCards: r.cards.map((t => ({
                        num: t.number,
                        suit: t.suit
                    })))
                }), m = l > p ? h.RAISE : h.CALL);
                const g = {
                    player: {
                        uid: r.uid,
                        name: r.name,
                        avatarUrl: r.avatarUrl,
                        seat: r.seat,
                        cards: _,
                        jackpot: 0,
                        label: r.label
                    },
                    actionTitle: m,
                    actionValue: l,
                    isAllIn: u
                };
                c.newReplayerActions.push(g), p = l
            }
            if (d.length > 0) {
                const t = l.getInstance().getWinRateByCards(i, r, d, s);
                for (let e = 0; e < t.length; e++) {
                    const s = t[e].seatId,
                        o = t[e].winRate,
                        n = a[s],
                        l = {
                            player: {
                                uid: n.uid,
                                name: n.name,
                                avatarUrl: n.avatarUrl,
                                seat: n.seat,
                                cards: n.cards,
                                jackpot: 0,
                                label: n.label
                            },
                            actionTitle: h.ALL_IN_PERCENTAGE,
                            actionValue: o,
                            isAllIn: !0
                        };
                    c.newReplayerActions.push(l)
                }
            }
            for (let t = 0; t < o.StringTools.getArrayLength(u); t++) c.totalPot += o.Number(u[t].amount);
            return c
        }
        _doEndHand(t, e, a, s) {
            const n = [],
                l = [],
                i = [];
            let r = !0;
            for (let t = 0; t < o.StringTools.getArrayLength(e); t++) {
                o.Number(e[t].win_amount) > 0 && (r = !1)
            }
            for (let t = 0; t < o.StringTools.getArrayLength(e); t++) {
                const c = o.Number(e[t].win_seat_no),
                    d = o.Number(e[t].win_amount),
                    u = a[c];
                u.isWinning = d > 0 || !(0 != d || !r);
                const m = s.records.find((t => t.playerid == u.uid)),
                    _ = Boolean(m.IsShowDown),
                    p = Boolean(m.is_show_card);
                if (_ || p) {
                    const t = {
                        player: {
                            uid: u.uid,
                            name: u.name,
                            avatarUrl: u.avatarUrl,
                            seat: u.seat,
                            cards: u.cards,
                            jackpot: 0,
                            label: u.label
                        },
                        actionTitle: _ ? h.SHOWDOWN : h.SHOW_CARDS,
                        actionValue: 0,
                        isAllIn: !1
                    };
                    _ ? n.push(t) : l.push(t)
                }
                const g = {
                    player: {
                        uid: u.uid,
                        name: u.name,
                        avatarUrl: u.avatarUrl,
                        seat: u.seat,
                        cards: u.cards,
                        jackpot: u.winningJackpot,
                        label: u.label
                    },
                    actionTitle: h.SHOW_WINNER,
                    actionValue: d,
                    isAllIn: !1
                };
                i.push(g)
            }
            t.newReplayerActions.push(...i), t.newReplayerActions.push(...l)
        }
        _getActionTitleFromActionTypeCash(t) {
            switch (t) {
                case n.Enum_Action_Null:
                    return h.NO_ACTION;
                case n.Enum_Action_Check:
                    return h.CHECK;
                case n.Enum_Action_Fold:
                    return h.FOLD;
                case n.Enum_Action_Call:
                    return h.CALL;
                case n.Enum_Action_Bet:
                    return h.BET;
                case n.Enum_Action_Raise:
                    return h.RAISE;
                case n.Enum_Action_Allin:
                    return h.ALL_IN
            }
            return h.NO_ACTION
        }
        _convertMttGameRecordToTableInfo() {
            const t = this.data,
                e = t.roomId,
                a = t.roundId,
                n = t.seatnum,
                l = t.gameId;
            this.customData = {}, this.customData.players = [], this.customData.publicCards = [], this.customData.type = s.Mtt, this.customData.roomId = e, this.customData.replayUUID = a.toString(), this.customData.seatCount = n, this.customData.isShortDeck = l === o.Enum.CreateGameMode.CreateGame_Mode_Short, this.customData.handCardType = o.tools.getHandCardTypeFromGameID(l, !1), t.ActionTimeStamp && t.ActionTimeStamp.length > 0 && t.ActionTimeStamp[0] && (this.customData.startTime = o.StringTools.formatTime(t.ActionTimeStamp[0], o.Enum.eTimeType.Year_Month_Day_Hour_Min_Sec, !0)), this.customDetailData = {}, this.customDetailData.replayUUID = this.customData.replayUUID, this.decode_Mtt_AllActions(t), this.decode_Mtt_Players(t);
            const r = i.decodeHoldem(t),
                d = t.DecodedActions.find((t => t.ReplayMessageType === c.holdem.MessageId.DealerPosMsg)),
                u = t.DecodedActions.filter((t => t.ReplayMessageType === c.holdem.MessageId.PotsMsg)),
                h = t.DecodedActions.filter((t => t.ReplayMessageType === c.holdem.MessageId.BoardCardsMsg)),
                _ = t.DecodedActions.filter((t => t.ReplayMessageType === c.holdem.MessageId.ShowdownMsg)),
                p = t.DecodedActions.find((t => t.ReplayMessageType === c.holdem.MessageId.RoundResultMsg)),
                g = {},
                T = new Map,
                y = this.get_Mtt_BlindPos(t, d);
            this.cache_Mtt_PlayerActionsByRoundType(t, T), this.set_Mtt_Dealer(t, y, d), this.set_Mtt_AnteBlind(t), this.set_Mtt_TotalPot(t), this.set_Mtt_PublicCards(t, r), this.set_Mtt_Players(t, {}, g, l, r, p, T), this.set_Mtt_PlayerSeatAlias(t, y, g);
            const P = [];
            this.customDetailData.neReplayerBetRounds = P, this.customDetailData.gameId = l;
            const A = this.do_Mtt_Round_BlindAnte(t, d, g, y);
            P.push(A);
            const b = A.totalPot;
            A.totalPot = 0;
            let D = [],
                M = {
                    index: 0
                };
            const f = this.do_Mtt_Round(m.PreFlop, T, M, u, g, D, l),
                B = f.totalPot > 0 ? f.totalPot : b;
            if (f.totalPot = b, P.push(f), !T.has(m.Flop)) {
                const t = this.get_Mtt_LastShowdownMsg(_);
                return void this.do_Mtt_EndHand(f, t, p, g)
            }
            let N = 0,
                C = h[N];
            for (let t = 0; t < C.cards.length; t++) {
                const e = this.get_Mtt_Card(C.cards[t]);
                D.push(e)
            }
            const I = this.do_Mtt_Round(m.Flop, T, M, u, g, D, l),
                S = I.totalPot > 0 ? I.totalPot : B;
            if (I.totalPot = B, P.push(I), !T.has(m.Turn)) {
                const t = this.get_Mtt_LastShowdownMsg(_);
                return void this.do_Mtt_EndHand(I, t, p, g)
            }
            if (N + 1 < h.length) {
                N++, C = h[N];
                for (let t = 0; t < C.cards.length; t++) {
                    const e = this.get_Mtt_Card(C.cards[t]);
                    D.push(e)
                }
            }
            const R = this.do_Mtt_Round(m.Turn, T, M, u, g, D, l),
                L = R.totalPot > 0 ? R.totalPot : S;
            if (R.totalPot = S, P.push(R), !T.has(m.River)) {
                const t = this.get_Mtt_LastShowdownMsg(_);
                return void this.do_Mtt_EndHand(R, t, p, g)
            }
            if (N + 1 < h.length) {
                N++, C = h[N];
                for (let t = 0; t < C.cards.length; t++) {
                    const e = this.get_Mtt_Card(C.cards[t]);
                    D.push(e)
                }
            }
            const U = this.do_Mtt_Round(m.River, T, M, u, g, D, l);
            U.totalPot = L, P.push(U);
            const O = this.get_Mtt_LastShowdownMsg(_);
            this.do_Mtt_EndHand(U, O, p, g)
        }
        correct_player_seats_num() {
            var t, e;
            null != (t = this.customData) && t.players && (null == (e = this.customData) || e.players.forEach((t => t.seat--)));
            this.customData.dealer--
        }
        decode_Mtt_AllActions(t) {
            t.DecodedActions = [], t.OriginalDecodedActions = [];
            for (let e = 0; e < t.Actions.length; e++) {
                let a = r.decodeAction(t.Actions[e]);
                a && t.DecodedActions.push(a), a = r.decodeAction(t.Actions[e]), a && t.OriginalDecodedActions.push(a), t.DecodedActions[e].ReplayActionTime = t.ActionTimes[e]
            }
        }
        decode_Mtt_Players(t) {
            for (let e in t.Players) {
                let a = parseInt(e);
                t.Players[e].seatNum = a
            }
        }
        is_Mtt_AllInAction(t) {
            return t === c.holdem.Action.ALL_IN
        }
        get_Mtt_Card(t) {
            let e = 0,
                a = 0;
            switch (240 & t) {
                case 16:
                    e = 0;
                    break;
                case 32:
                    e = 1;
                    break;
                case 64:
                    e = 2;
                    break;
                case 128:
                    e = 3
            }
            return a = (15 & t) - 2, {
                number: a,
                suit: e
            }
        }
        get_Mtt_ActionTitle(t) {
            switch (t) {
                case c.holdem.Action.NONE_ACTION:
                    return h.NO_ACTION;
                case c.holdem.Action.CHECK:
                    return h.CHECK;
                case c.holdem.Action.CALL:
                    return h.CALL;
                case c.holdem.Action.BET:
                    return h.BET;
                case c.holdem.Action.FOLD:
                    return h.FOLD;
                case c.holdem.Action.RAISE:
                    return h.RAISE;
                case c.holdem.Action.ALL_IN:
                    return h.ALL_IN
            }
            return h.NO_ACTION
        }
        get_Mtt_TotalPot(t) {
            let e = 0;
            for (let a = t.DecodedActions.length - 1; a >= 0; a--) {
                const s = t.DecodedActions[a];
                if (s.ReplayMessageType === c.holdem.MessageId.PotsMsg) {
                    e = 0;
                    for (let t = 0; t < s.pots.length; t++) e += o.Number(s.pots[t]);
                    break
                }
            }
            return e
        }
        get_Mtt_NextPotsMsg(t, e) {
            const a = t.index < e.length ? e[t.index] : [];
            return t.index + 1 < e.length && t.index++, a
        }
        get_Mtt_DealerIndexInDataPlayerList(t, e, a) {
            let s = 0;
            for (let t = 0; t < a.length; t++) {
                if (o.Number(a[t]) === e) {
                    s = t;
                    break
                }
            }
            return s
        }
        get_Mtt_BlindPos(t, e) {
            const s = Object.entries(t.Players).length;
            let n = a(t.dealer) ? o.Number(t.dealer) : -1,
                l = a(e.sbPos) ? o.Number(e.sbPos) : -1,
                i = a(e.bbPos) ? o.Number(e.bbPos) : -1,
                r = a(e.straddlePos) ? o.Number(e.straddlePos) : -1,
                c = -1;
            n < 1 && (n = e.dealerPos);
            const d = Object.keys(t.Players);
            let u = this.get_Mtt_DealerIndexInDataPlayerList(t, n, d);
            if (this.customData.isShortDeck) c = n;
            else if (l < 1 || l < 1)
                for (let t = 0; t < s; t++) 1 == t ? l = o.Number(d[u]) : 2 == t && (i = o.Number(d[u])), u++;
            return {
                dealerPos: n,
                sbPos: l,
                bbPos: i,
                straddlePos: r,
                btbPos: c
            }
        }
        get_Mtt_LastShowdownMsg(t) {
            return t.length > 0 ? t[t.length - 1] : null
        }
        do_Mtt_Round_BlindAnte(t, e, s, n) {
            const l = {
                    newReplayerActions: [],
                    totalPot: 0,
                    blinds: 0
                },
                i = t.ante,
                r = t.bigBlind;
            let c = t.smallBlind;
            const d = r,
                u = 2 * r;
            if (c <= 0 && (c = o.config.findSmallBlind(d)), this.customDetailData.ante = i, this.customDetailData.bb = r, this.customDetailData.sb = c, this.customDetailData.straddle = u, l.allAnte = o.Number(e.pot), l.blinds = c + d, l.totalPot = l.allAnte, n.btbPos > 0 && a(s[n.btbPos])) {
                const t = {
                    player: s[n.btbPos],
                    actionTitle: h.BTB,
                    actionValue: i,
                    isAllIn: !1
                };
                l.newReplayerActions.push(t), l.totalPot += i
            }
            if (n.sbPos > 0 && a(s[n.sbPos])) {
                const t = {
                    player: s[n.sbPos],
                    actionTitle: h.SB,
                    actionValue: c,
                    isAllIn: !1
                };
                l.newReplayerActions.push(t), l.totalPot += c
            }
            if (n.bbPos > 0 && a(s[n.bbPos])) {
                const t = {
                    player: s[n.bbPos],
                    actionTitle: h.BB,
                    actionValue: d,
                    isAllIn: !1
                };
                l.newReplayerActions.push(t), l.totalPot += d
            }
            if (n.straddlePos > 0 && a(s[n.straddlePos])) {
                const t = {
                    player: s[n.straddlePos],
                    actionTitle: h.STRADDLE,
                    actionValue: u,
                    isAllIn: !1
                };
                l.newReplayerActions.push(t), l.totalPot += u
            }
            return l
        }
        do_Mtt_Round(t, e, a, s, o, n, l) {
            const i = e.get(t),
                r = this.get_Mtt_NextPotsMsg(a, s);
            return this.do_Mtt_PlayerActions(i, r, o, n, l)
        }
        do_Mtt_PlayerActions(t, e, a, s, n) {
            const i = {
                totalPot: 0,
                newReplayerActions: []
            };
            let r = [];
            const d = o.tools.getCardsLengthFromGameID(n, !1),
                u = [];
            for (let t = 0; t < d; t++) u.push({
                number: -1,
                suit: -1
            });
            let m = 0;
            for (let e = 0; e < t.length; e++) {
                const s = t[e];
                if (s.ReplayMessageType === c.holdem.MessageId.PlayerActionMsg) {
                    const t = o.Number(s.seatNum),
                        e = o.Number(s.deskCoin),
                        n = o.Number(s.action),
                        l = a[t];
                    let c = this.get_Mtt_ActionTitle(n),
                        d = this.is_Mtt_AllInAction(n);
                    d && (r.push({
                        seatID: l.seat,
                        handCards: l.cards.map((t => ({
                            num: t.number,
                            suit: t.suit
                        })))
                    }), c = e > m ? h.RAISE : h.CALL, m = e);
                    const _ = {
                        player: {
                            uid: l.uid,
                            name: l.name,
                            avatarUrl: l.avatarUrl,
                            seat: l.seat,
                            cards: u,
                            jackpot: 0,
                            label: l.label
                        },
                        actionTitle: c,
                        actionValue: e,
                        isAllIn: d
                    };
                    i.newReplayerActions.push(_)
                }
            }
            if (r.length > 0) {
                const t = o.Enum.CreateGameMode.CreateGame_Mode_None,
                    e = l.getInstance().getWinRateByCards(n, t, r, s);
                for (let t = 0; t < e.length; t++) {
                    const s = e[t].seatId,
                        o = e[t].winRate,
                        n = (e[t].bLead, a[s]),
                        l = {
                            player: {
                                uid: n.uid,
                                name: n.name,
                                avatarUrl: n.avatarUrl,
                                seat: n.seat,
                                cards: n.cards,
                                jackpot: 0,
                                label: n.label
                            },
                            actionTitle: h.ALL_IN_PERCENTAGE,
                            actionValue: o,
                            isAllIn: !0
                        };
                    i.newReplayerActions.push(l)
                }
            }
            if (e)
                for (let t = 0; t < e.pots.length; t++) i.totalPot += o.Number(e.pots[t]);
            return i
        }
        do_Mtt_EndHand(t, e, s, n) {
            for (let l = 0; l < s.players.length; l++) {
                const i = o.Number(s.players[l].seatNum),
                    r = n[i];
                let c = !1;
                if (e && e.players) {
                    const t = e.players.find((t => t.seatNum === i));
                    if (t) {
                        const e = a(t.holeCards) && t.holeCards.length > 0,
                            s = a(t.rankCards) && t.rankCards.length > 0;
                        c = e && !s
                    }
                }
                const d = o.Number(s.players[l].profit),
                    u = {
                        player: {
                            uid: r.uid,
                            name: r.name,
                            avatarUrl: r.avatarUrl,
                            seat: r.seat,
                            cards: r.cards,
                            jackpot: r.winningJackpot,
                            label: r.label
                        },
                        actionTitle: h.SHOW_WINNER,
                        actionValue: d,
                        isAllIn: !1
                    };
                if (t.newReplayerActions.push(u), c) {
                    const e = {
                        player: {
                            uid: r.uid,
                            name: r.name,
                            avatarUrl: r.avatarUrl,
                            seat: r.seat,
                            cards: r.cards,
                            jackpot: 0,
                            label: r.label
                        },
                        actionTitle: h.SHOW_CARDS,
                        actionValue: 0,
                        isAllIn: !1
                    };
                    t.newReplayerActions.push(e)
                }
            }
            this.correct_player_seats_num()
        }
        set_Mtt_Dealer(t, e, s) {
            a(e.dealerPos) && e.dealerPos > 0 ? this.customData.dealer = e.dealerPos : a(t.dealer) && t.dealer > 0 ? this.customData.dealer = t.dealer : s && a(s.dealerPos) && s.dealerPos > 0 && (this.customData.dealer = o.Number(s.dealerPos))
        }
        set_Mtt_AnteBlind(t) {
            this.customData.ante = t.ante, this.customData.bigBlind = t.bigBlind
        }
        set_Mtt_TotalPot(t) {
            const e = this.get_Mtt_TotalPot(t);
            this.customData.totalPot = e
        }
        set_Mtt_PublicCards(t, e) {
            o.StringTools.clearArray(this.customData.publicCards);
            const a = e[0].boardCards;
            for (let t = 0; t < a.length; t++) {
                const e = this.get_Mtt_Card(a[t]);
                this.customData.publicCards.push(e)
            }
        }
        set_Mtt_Players(t, e, a, s, n, l, i) {
            o.StringTools.clearArray(this.customData.players);
            const r = o.tools.getCardsLengthFromGameID(s, !1),
                c = l.players.filter((t => !0 === t.getPot)).length;
            let d = !0;
            for (let e in t.Players) {
                const t = o.Number(e),
                    a = l.players.find((e => e.seatNum === t));
                if (a && a.profit > 0) {
                    d = !1;
                    break
                }
            }
            for (let s in t.Players) {
                const u = o.Number(s),
                    h = t.Players[s],
                    m = n.find((t => t.userId === h.userId)),
                    _ = l.players.find((t => t.seatNum === u)),
                    p = {
                        uid: h.userId.toString(),
                        name: h.nickname,
                        avatarUrl: h.avatar,
                        label: "",
                        finalStake: 0,
                        cards: [],
                        seat: h.seatNum,
                        isWinning: !1,
                        winningPot: 0,
                        winningJackpot: 0
                    };
                if (m.holeCards)
                    for (let t = 0; t < m.holeCards.length; t++) {
                        const e = this.get_Mtt_Card(m.holeCards[t]);
                        p.cards.push(e)
                    }
                if (p.cards.length < r)
                    for (let t = p.cards.length; t < r; t++) {
                        const t = {
                            number: -1,
                            suit: -1
                        };
                        p.cards.push(t)
                    }
                const g = (null == _ ? void 0 : _.profit) ?? 0;
                p.finalStake = (null == _ ? void 0 : _.leftCoins) ?? 0, p.isWinning = g > 0 || !(0 != g || !d), null != _ && _.getPot && (p.winningPot = 1 == c ? this.customData.totalPot : this.getTotalBetAmountFromMttPlayerActions(o.Number(p.seat), t, i) + g), e[p.uid] = p, a[p.seat] = p, this.customData.players.push(p)
            }
        }
        getTotalBetAmountFromMttPlayerActions(t, e, a) {
            let s = e.ante;
            for (const [e, n] of a)
                for (let e = n.length - 1; e >= 0; e--) {
                    const a = n[e];
                    if (a.ReplayMessageType === c.holdem.MessageId.PlayerActionMsg && o.Number(a.seatNum) === t) {
                        const t = o.Number(a.deskCoin),
                            e = o.Number(a.action);
                        if (e === c.holdem.Action.CHECK || e === c.holdem.Action.BET || e === c.holdem.Action.RAISE || e === c.holdem.Action.ALL_IN || e === c.holdem.Action.CALL) {
                            s += t;
                            break
                        }
                    }
                }
            return s
        }
        set_Mtt_PlayerSeatAlias(t, e, s) {
            const n = Object.entries(t.Players).length,
                l = this.customData.isShortDeck ? this._mttSDSeatLabelList[n] : this._mttSeatLabelList[n];
            if (!a(l)) return;
            const i = e.dealerPos,
                r = Object.keys(t.Players);
            let c = this.get_Mtt_DealerIndexInDataPlayerList(t, i, r);
            const d = [];
            for (let t = 0; t < n; t++) d.push(o.Number(r[c])), c++, c >= n && (c = 0);
            for (let t = 0; t < d.length; t++) {
                s[d[t]].label = l[t]
            }
        }
        cache_Mtt_PlayerActionsByRoundType(t, e) {
            let a = m.PreFlop,
                s = [];
            for (let o = 0; o < t.DecodedActions.length; o++) {
                const n = t.DecodedActions[o];
                n.ReplayMessageType === c.holdem.MessageId.PlayerActionMsg ? s.push(n) : n.ReplayMessageType !== c.holdem.MessageId.BoardCardsMsg && n.ReplayMessageType !== c.holdem.MessageId.RoundResultMsg || (e.set(a, s), s = [], n.ReplayMessageType === c.holdem.MessageId.BoardCardsMsg && a++)
            }
            0 === e.size && a === m.PreFlop && e.set(a, s)
        }
    }), e._RF.pop()
}