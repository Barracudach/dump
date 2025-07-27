import * as t from "./cc.js";
import * as _ from "./cc.js";
import * as A from "./cc.js";
import * as R from "./Enum.js";
import * as u from "./Enum.js";
import * as D from "./MiniGameRulePanelBase.js";
import * as C from "./MiniGameRuleHandItem.js";

function main() {
    var i;
    _._RF.push({}, "13fdaiR3WxO55p/5pCmr9Hk", "PokerMasterRulePanel", void 0);
    const {
        ccclass: o,
        property: a
    } = t;
    n("default", o(i = class extends D {
        initWinningHandItems() {
            super.initWinningHandItems();
            const n = (n, _) => {
                const t = A(this.handItemTemplatePrefab);
                t.parent = n, t.active = !0, t.getComponent(C).init(_, this)
            };
            if (this.winningHandHoleCardsContent.children.length <= 0) {
                [{
                    name: "CowboyRule_holecards_suited",
                    cards: [{
                        num: u.CARD_3,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_5,
                        suit: R.CARD_SPADE
                    }],
                    tooltip: "CowboyRule_holecards_tooltip_suited"
                }, {
                    name: "CowboyRule_holecards_connector",
                    cards: [{
                        num: u.CARD_4,
                        suit: R.CARD_DIAMOND
                    }, {
                        num: u.CARD_5,
                        suit: R.CARD_HEART
                    }],
                    tooltip: "CowboyRule_holecards_tooltip_connector"
                }, {
                    name: "CowboyRule_holecards_suited_connector",
                    cards: [{
                        num: u.CARD_A,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_K,
                        suit: R.CARD_SPADE
                    }],
                    tooltip: "CowboyRule_holecards_tooltip_suited_connector"
                }].forEach((_ => n(this.winningHandHoleCardsContent, _)))
            }
            if (this.winningHandRankingContent.children.length <= 0) {
                [{
                    name: "CowboyRule_hand_ranking_1",
                    cards: [{
                        num: u.CARD_A,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_K,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_Q,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_J,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_10,
                        suit: R.CARD_SPADE
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_1"
                }, {
                    name: "CowboyRule_hand_ranking_2",
                    cards: [{
                        num: u.CARD_4,
                        suit: R.CARD_HEART
                    }, {
                        num: u.CARD_5,
                        suit: R.CARD_HEART
                    }, {
                        num: u.CARD_6,
                        suit: R.CARD_HEART
                    }, {
                        num: u.CARD_7,
                        suit: R.CARD_HEART
                    }, {
                        num: u.CARD_8,
                        suit: R.CARD_HEART
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_2"
                }, {
                    name: "CowboyRule_hand_ranking_3",
                    cards: [{
                        num: u.CARD_A,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_K,
                        suit: R.CARD_CLUB
                    }, {
                        num: u.CARD_K,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_K,
                        suit: R.CARD_HEART
                    }, {
                        num: u.CARD_K,
                        suit: R.CARD_DIAMOND
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_3"
                }, {
                    name: "CowboyRule_hand_ranking_4",
                    cards: [{
                        num: u.CARD_K,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_K,
                        suit: R.CARD_HEART
                    }, {
                        num: u.CARD_A,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_A,
                        suit: R.CARD_CLUB
                    }, {
                        num: u.CARD_A,
                        suit: R.CARD_DIAMOND
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_4"
                }, {
                    name: "CowboyRule_hand_ranking_5",
                    cards: [{
                        num: u.CARD_4,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_8,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_9,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_J,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_6,
                        suit: R.CARD_SPADE
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_5"
                }, {
                    name: "CowboyRule_hand_ranking_6",
                    cards: [{
                        num: u.CARD_7,
                        suit: R.CARD_HEART
                    }, {
                        num: u.CARD_8,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_9,
                        suit: R.CARD_DIAMOND
                    }, {
                        num: u.CARD_10,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_J,
                        suit: R.CARD_CLUB
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_6"
                }, {
                    name: "CowboyRule_hand_ranking_7",
                    cards: [{
                        num: u.CARD_2,
                        suit: R.CARD_HEART
                    }, {
                        num: u.CARD_J,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_J,
                        suit: R.CARD_CLUB
                    }, {
                        num: u.CARD_J,
                        suit: R.CARD_DIAMOND
                    }, {
                        num: u.CARD_3,
                        suit: R.CARD_CLUB
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_7"
                }, {
                    name: "CowboyRule_hand_ranking_8",
                    cards: [{
                        num: u.CARD_A,
                        suit: R.CARD_DIAMOND
                    }, {
                        num: u.CARD_5,
                        suit: R.CARD_CLUB
                    }, {
                        num: u.CARD_9,
                        suit: R.CARD_HEART
                    }, {
                        num: u.CARD_9,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_5,
                        suit: R.CARD_DIAMOND
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_8"
                }, {
                    name: "CowboyRule_hand_ranking_9",
                    cards: [{
                        num: u.CARD_A,
                        suit: R.CARD_DIAMOND
                    }, {
                        num: u.CARD_A,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_9,
                        suit: R.CARD_DIAMOND
                    }, {
                        num: u.CARD_7,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_5,
                        suit: R.CARD_HEART
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_9"
                }, {
                    name: "CowboyRule_hand_ranking_10",
                    cards: [{
                        num: u.CARD_A,
                        suit: R.CARD_DIAMOND
                    }, {
                        num: u.CARD_J,
                        suit: R.CARD_CLUB
                    }, {
                        num: u.CARD_9,
                        suit: R.CARD_HEART
                    }, {
                        num: u.CARD_7,
                        suit: R.CARD_SPADE
                    }, {
                        num: u.CARD_5,
                        suit: R.CARD_DIAMOND
                    }],
                    tooltip: "CowboyRule_hand_ranking_tooltip_10"
                }].forEach((_ => n(this.winningHandRankingContent, _)))
            }
        }
    }) || i);
    _._RF.pop()
}