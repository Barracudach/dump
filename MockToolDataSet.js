import * as n from "./cc.js";
import * as a from "./cv.js";

function main() {
    n._RF.push({}, "49f0bAquHBJpYidkiKUXLBO", "MockToolDataSet", void 0);
    class t {
        static getInstance() {
            return t.g_instance || (t.g_instance = new t), t.g_instance
        }
        getGameReviewData() {
            let u = {
                nClubID: 101,
                nRoomID: 1877482,
                sGameUUID: "877921548139433984",
                sRoomUUID: "876224870312611840",
                nCreateTime: 1684115696,
                nTotalPot: 5e3,
                nMaxPot: 37e3,
                nInsuranceWinbet: 0,
                nJackpotWinbet: 0,
                nGameMode: 1,
                nShortFull: 0,
                bMirco: !1,
                nGameid: 2,
                bAssociatedJackpot: !0,
                objReplay: {
                    RoomInfo: {
                        type: "No-Limit Hold'em",
                        mode: 1,
                        blind: 5e3,
                        ante: 0,
                        players_count: 8,
                        double_ante: !1
                    },
                    TableInfo: {
                        dealer_seat: 7,
                        sb_seat: 7,
                        bb_seat: 0,
                        straddle_seat: -1,
                        post_seats: null,
                        showdown_seats: null
                    },
                    SeatsInfo: {
                        seats_info: [{
                            seat_no: 0,
                            UID: 41335,
                            name: "a5team0030",
                            head_url: "8",
                            stake: 495e3,
                            holecards: [{
                                number: 6,
                                suit: 1
                            }, {
                                number: 5,
                                suit: 2
                            }],
                            label: "BB",
                            is_muck: !1,
                            plat: 0,
                            is_pro: 2
                        }, {
                            seat_no: 7,
                            UID: 41325,
                            name: "a5team0020",
                            head_url: "avatar_41325_1678913767.jpg",
                            stake: 505e3,
                            holecards: [],
                            label: "SB/BTN",
                            is_muck: !1,
                            plat: 0,
                            is_pro: 2
                        }]
                    },
                    RoundsInfo: {
                        ante_round: !1,
                        end_ante_round: {
                            pots_info: null
                        },
                        blind_round: !0,
                        preflop: [{
                            seq: 1,
                            seat_no: 7,
                            action_type: 2,
                            amount: 0,
                            action_time: 14
                        }],
                        end_preflop_round: {
                            pots_info: [{
                                pot_id: 1,
                                amount: 7500
                            }]
                        },
                        flop_community_cards: null,
                        flop: null,
                        end_flop_round: {
                            pots_info: null
                        },
                        turn_community_card: null,
                        turn: null,
                        end_turn_round: {
                            pots_info: null
                        },
                        river_community_card: null,
                        river: null,
                        end_river_round: {
                            pots_info: null
                        },
                        jp_total_winbet: 0,
                        settlement_round: [{
                            win_seat_no: 0,
                            win_amount: 2500,
                            jackpot_type: 0
                        }, {
                            win_seat_no: 7,
                            win_amount: -2500,
                            jackpot_type: 0
                        }],
                        is_now_crit_time: !1
                    }
                },
                objReplayInsurance: null,
                vPlayerRecords: [{
                    nPlayerBettingRoundBet: 5e3,
                    nWinBet: 2500,
                    nInsuranceBet: 0,
                    nInsuranceAmount: 0,
                    nJackWinbet: 0,
                    nPlayerID: 41335,
                    sPlayerName: "a5team0030",
                    sPlayerHead: "8",
                    bMuck: !1,
                    bActiveShow: !1,
                    bForceShowDown: !1,
                    nLastRoundType: 1,
                    vCards: [{
                        eCardNum: 6,
                        eCardSuit: 1
                    }, {
                        eCardNum: 5,
                        eCardSuit: 2
                    }],
                    plat: 0,
                    seatNo: 0,
                    seatInfo: 4,
                    bFold: !1,
                    nReviewSendOutLen: 0,
                    nReviewSendOutActLen: 0,
                    nForceShowedActLen: 0,
                    jackpotType: 0
                }],
                vPublicCards: [],
                vUnsendPublicCards: [{
                    eCardNum: 9,
                    eCardSuit: 2
                }, {
                    eCardNum: 2,
                    eCardSuit: 1
                }, {
                    eCardNum: 7,
                    eCardSuit: 2
                }, {
                    eCardNum: 4,
                    eCardSuit: 1
                }, {
                    eCardNum: 11,
                    eCardSuit: 1
                }],
                bForceShowcard: !0,
                bStarClosed: !0,
                vShowCardByStanderUID: [],
                nForceShowCoin: 0,
                nSendOutCoin: 0,
                nJackpotTotalWinbet: 0
            };
            for (let n = 0; n < 100; n++) u.vPlayerRecords.push({
                nPlayerBettingRoundBet: 5e3,
                nWinBet: 2500,
                nInsuranceBet: 0,
                nInsuranceAmount: 0,
                nJackWinbet: 0,
                nPlayerID: 41335,
                sPlayerName: "a5team0030",
                sPlayerHead: "8",
                bMuck: !1,
                bActiveShow: !1,
                bForceShowDown: !1,
                nLastRoundType: 1,
                vCards: [{
                    eCardNum: 6,
                    eCardSuit: 1
                }, {
                    eCardNum: 5,
                    eCardSuit: 2
                }],
                plat: 0,
                seatNo: 0,
                seatInfo: 4,
                bFold: !1,
                nReviewSendOutLen: 0,
                nReviewSendOutActLen: 0,
                nForceShowedActLen: 0,
                jackpotType: 0
            });
            return u
        }
        getWinRateData() {
            return [{
                playerCards: [{
                    seatID: 0,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_CLUB,
                        num: a.Enum.CardNum.CARD_2
                    }, {
                        suit: a.Enum.CardSuit.CARD_DIAMOND,
                        num: a.Enum.CardNum.CARD_2
                    }]
                }, {
                    seatID: 1,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_HEART,
                        num: a.Enum.CardNum.CARD_2
                    }, {
                        suit: a.Enum.CardSuit.CARD_SPADE,
                        num: a.Enum.CardNum.CARD_2
                    }]
                }],
                publicCards: [{
                    suit: a.Enum.CardSuit.CARD_CLUB,
                    num: a.Enum.CardNum.CARD_9
                }, {
                    suit: a.Enum.CardSuit.CARD_DIAMOND,
                    num: a.Enum.CardNum.CARD_9
                }, {
                    suit: a.Enum.CardSuit.CARD_HEART,
                    num: a.Enum.CardNum.CARD_9
                }]
            }, {
                playerCards: [{
                    seatID: 0,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_CLUB,
                        num: a.Enum.CardNum.CARD_2
                    }, {
                        suit: 3,
                        num: a.Enum.CardNum.CARD_A
                    }]
                }, {
                    seatID: 1,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_CLUB,
                        num: a.Enum.CardNum.CARD_8
                    }, {
                        suit: a.Enum.CardSuit.CARD_HEART,
                        num: a.Enum.CardNum.CARD_8
                    }]
                }],
                publicCards: []
            }, {
                playerCards: [{
                    seatID: 0,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_CLUB,
                        num: a.Enum.CardNum.CARD_2
                    }, {
                        suit: a.Enum.CardSuit.CARD_HEART,
                        num: a.Enum.CardNum.CARD_2
                    }]
                }, {
                    seatID: 1,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_CLUB,
                        num: a.Enum.CardNum.CARD_4
                    }, {
                        suit: a.Enum.CardSuit.CARD_HEART,
                        num: a.Enum.CardNum.CARD_4
                    }]
                }, {
                    seatID: 2,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_CLUB,
                        num: a.Enum.CardNum.CARD_10
                    }, {
                        suit: a.Enum.CardSuit.CARD_HEART,
                        num: a.Enum.CardNum.CARD_9
                    }]
                }],
                publicCards: []
            }, {
                playerCards: [{
                    seatID: 0,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_CLUB,
                        num: a.Enum.CardNum.CARD_5
                    }, {
                        suit: a.Enum.CardSuit.CARD_HEART,
                        num: a.Enum.CardNum.CARD_2
                    }]
                }, {
                    seatID: 1,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_DIAMOND,
                        num: a.Enum.CardNum.CARD_5
                    }, {
                        suit: a.Enum.CardSuit.CARD_CLUB,
                        num: a.Enum.CardNum.CARD_2
                    }]
                }, {
                    seatID: 2,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_SPADE,
                        num: a.Enum.CardNum.CARD_5
                    }, {
                        suit: a.Enum.CardSuit.CARD_DIAMOND,
                        num: a.Enum.CardNum.CARD_2
                    }]
                }],
                publicCards: [{
                    suit: a.Enum.CardSuit.CARD_CLUB,
                    num: a.Enum.CardNum.CARD_10
                }, {
                    suit: a.Enum.CardSuit.CARD_DIAMOND,
                    num: a.Enum.CardNum.CARD_10
                }, {
                    suit: a.Enum.CardSuit.CARD_HEART,
                    num: a.Enum.CardNum.CARD_J
                }, {
                    suit: a.Enum.CardSuit.CARD_SPADE,
                    num: a.Enum.CardNum.CARD_J
                }]
            }, {
                playerCards: [{
                    seatID: 0,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_DIAMOND,
                        num: a.Enum.CardNum.CARD_3
                    }, {
                        suit: a.Enum.CardSuit.CARD_SPADE,
                        num: a.Enum.CardNum.CARD_2
                    }]
                }, {
                    seatID: 1,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_CLUB,
                        num: a.Enum.CardNum.CARD_3
                    }, {
                        suit: a.Enum.CardSuit.CARD_HEART,
                        num: a.Enum.CardNum.CARD_2
                    }]
                }, {
                    seatID: 2,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_SPADE,
                        num: a.Enum.CardNum.CARD_3
                    }, {
                        suit: a.Enum.CardSuit.CARD_DIAMOND,
                        num: a.Enum.CardNum.CARD_2
                    }]
                }],
                publicCards: [{
                    suit: a.Enum.CardSuit.CARD_SPADE,
                    num: a.Enum.CardNum.CARD_5
                }, {
                    suit: a.Enum.CardSuit.CARD_DIAMOND,
                    num: a.Enum.CardNum.CARD_J
                }, {
                    suit: a.Enum.CardSuit.CARD_HEART,
                    num: a.Enum.CardNum.CARD_10
                }]
            }, {
                playerCards: [{
                    seatID: 0,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_DIAMOND,
                        num: a.Enum.CardNum.CARD_3
                    }, {
                        suit: a.Enum.CardSuit.CARD_SPADE,
                        num: a.Enum.CardNum.CARD_2
                    }]
                }, {
                    seatID: 1,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_CLUB,
                        num: a.Enum.CardNum.CARD_3
                    }, {
                        suit: a.Enum.CardSuit.CARD_HEART,
                        num: a.Enum.CardNum.CARD_2
                    }]
                }, {
                    seatID: 2,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_SPADE,
                        num: a.Enum.CardNum.CARD_3
                    }, {
                        suit: a.Enum.CardSuit.CARD_DIAMOND,
                        num: a.Enum.CardNum.CARD_2
                    }]
                }],
                publicCards: []
            }, {
                playerCards: [{
                    seatID: 0,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_DIAMOND,
                        num: a.Enum.CardNum.CARD_3
                    }, {
                        suit: a.Enum.CardSuit.CARD_SPADE,
                        num: a.Enum.CardNum.CARD_2
                    }]
                }, {
                    seatID: 1,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_SPADE,
                        num: a.Enum.CardNum.CARD_3
                    }, {
                        suit: a.Enum.CardSuit.CARD_HEART,
                        num: a.Enum.CardNum.CARD_2
                    }]
                }, {
                    seatID: 2,
                    handCards: [{
                        suit: a.Enum.CardSuit.CARD_HEART,
                        num: a.Enum.CardNum.CARD_3
                    }, {
                        suit: a.Enum.CardSuit.CARD_DIAMOND,
                        num: a.Enum.CardNum.CARD_2
                    }]
                }],
                publicCards: []
            }]
        }
    }
    u("default", t), t.g_instance = void 0, n._RF.pop()
}