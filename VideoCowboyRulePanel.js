import * as A from "./cc.js";
import * as t from "./cc.js";
import * as _ from "./cc.js";
import * as u from "./Enum.js";
import * as D from "./Enum.js";
import * as R from "./MiniGameRuleHandItem.js";
import * as C from "./MiniGameRulePanelBase.js";

function main() {
    var i;
    _._RF.push({}, "1f907ea3g1MTIl6Ju4S00+r", "VideoCowboyRulePanel", void 0);
    const {
        ccclass: o,
        property: a
    } = A;
    n("default", o(i = class extends C {
        initWinningHandItems() {
            super.initWinningHandItems();
            const n = (n, _) => {
                const A = t(this.handItemTemplatePrefab);
                A.parent = n, A.active = !0, A.getComponent(R).init(_, this)
            };
            if (this.winningHandHoleCardsContent.active = !1, this.winningHandRankingContent.children.length <= 0) {
                [{
                    name: "CowboyRule_hand_ranking_1",
                    cards: [{
                        num: u.CARD_A,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_K,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_Q,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_J,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_10,
                        suit: D.CARD_SPADE
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_1"
                }, {
                    name: "CowboyRule_hand_ranking_2",
                    cards: [{
                        num: u.CARD_4,
                        suit: D.CARD_HEART
                    }, {
                        num: u.CARD_5,
                        suit: D.CARD_HEART
                    }, {
                        num: u.CARD_6,
                        suit: D.CARD_HEART
                    }, {
                        num: u.CARD_7,
                        suit: D.CARD_HEART
                    }, {
                        num: u.CARD_8,
                        suit: D.CARD_HEART
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_2"
                }, {
                    name: "CowboyRule_hand_ranking_3",
                    cards: [{
                        num: u.CARD_A,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_K,
                        suit: D.CARD_CLUB
                    }, {
                        num: u.CARD_K,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_K,
                        suit: D.CARD_HEART
                    }, {
                        num: u.CARD_K,
                        suit: D.CARD_DIAMOND
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_3"
                }, {
                    name: "CowboyRule_hand_ranking_4",
                    cards: [{
                        num: u.CARD_K,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_K,
                        suit: D.CARD_HEART
                    }, {
                        num: u.CARD_A,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_A,
                        suit: D.CARD_CLUB
                    }, {
                        num: u.CARD_A,
                        suit: D.CARD_DIAMOND
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_4"
                }, {
                    name: "CowboyRule_hand_ranking_5",
                    cards: [{
                        num: u.CARD_4,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_8,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_9,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_J,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_6,
                        suit: D.CARD_SPADE
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_5"
                }, {
                    name: "CowboyRule_hand_ranking_6",
                    cards: [{
                        num: u.CARD_7,
                        suit: D.CARD_HEART
                    }, {
                        num: u.CARD_8,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_9,
                        suit: D.CARD_DIAMOND
                    }, {
                        num: u.CARD_10,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_J,
                        suit: D.CARD_CLUB
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_6"
                }, {
                    name: "CowboyRule_hand_ranking_7",
                    cards: [{
                        num: u.CARD_2,
                        suit: D.CARD_HEART
                    }, {
                        num: u.CARD_J,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_J,
                        suit: D.CARD_CLUB
                    }, {
                        num: u.CARD_J,
                        suit: D.CARD_DIAMOND
                    }, {
                        num: u.CARD_3,
                        suit: D.CARD_CLUB
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_7"
                }, {
                    name: "CowboyRule_hand_ranking_8",
                    cards: [{
                        num: u.CARD_A,
                        suit: D.CARD_DIAMOND
                    }, {
                        num: u.CARD_5,
                        suit: D.CARD_CLUB
                    }, {
                        num: u.CARD_9,
                        suit: D.CARD_HEART
                    }, {
                        num: u.CARD_9,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_5,
                        suit: D.CARD_DIAMOND
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_8"
                }, {
                    name: "CowboyRule_hand_ranking_9",
                    cards: [{
                        num: u.CARD_A,
                        suit: D.CARD_DIAMOND
                    }, {
                        num: u.CARD_A,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_9,
                        suit: D.CARD_DIAMOND
                    }, {
                        num: u.CARD_7,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_5,
                        suit: D.CARD_HEART
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_9"
                }, {
                    name: "CowboyRule_hand_ranking_10",
                    cards: [{
                        num: u.CARD_A,
                        suit: D.CARD_DIAMOND
                    }, {
                        num: u.CARD_J,
                        suit: D.CARD_CLUB
                    }, {
                        num: u.CARD_9,
                        suit: D.CARD_HEART
                    }, {
                        num: u.CARD_7,
                        suit: D.CARD_SPADE
                    }, {
                        num: u.CARD_5,
                        suit: D.CARD_DIAMOND
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_10"
                }].forEach((_ => n(this.winningHandRankingContent, _)))
            }
        }
    }) || i);
    _._RF.pop()
}