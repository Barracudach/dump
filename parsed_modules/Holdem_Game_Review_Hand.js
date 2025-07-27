import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./mttconfig.js";
import * as h from "./Holdem_Card_ts.js";
import * as u from "./Translator.js";
import * as p from "./ThemeSystem.js";
import * as m from "./ColorSystemType.js";
import * as f from "./ColorSystemTypeOther.js";

function main() {
    var g, b, _, y, C, N, I, R, A, S, v, T, O, H, P, K, D, E, G, k, w, F;
    r._RF.push({}, "4a3cffixv9K4b7iMtD4Ioyr", "Holdem_Game_Review_Hand", void 0);
    const {
        ccclass: z,
        property: L
    } = s;
    e("default", (g = L(i), b = L(n), _ = L(o), y = L(i), C = L(i), N = L(o), I = L(o), R = L(o), A = L(o), S = L(o), z((O = t((T = class extends c {
        constructor(...e) {
            super(...e), a(this, "playerName", O, this), a(this, "playerIcon", H, this), a(this, "dealerIcon", P, this), a(this, "cardType", K, this), a(this, "roundProfit", D, this), a(this, "handCard", E, this), a(this, "handCardOmaha", G, this), a(this, "boardCard", k, this), a(this, "boardCardOmaha", w, this), a(this, "foldTag", F, this), this.iconPath = void 0
        }
        setPlayerName(e) {
            this.playerName.string = e
        }
        loadGameRecord(e, t) {
            this.playerName.string = "", this.iconPath = cc_mtt.vv.AssetsManager.getAvatarUrl(cc_mtt.vv.DataManager.getAvatarId(e.avatar, e.userId), {
                isThumbnails: !0,
                timestamp: e.userId === cc_mtt.vv.DataManager.userId ? Date.now() : null
            }), cc_mtt.vv.AssetsManager.loadWebImage(this.playerIcon, this.iconPath), this.dealerIcon.active = e.isDealer, e.profit >= 0 ? (this.roundProfit.string = (e.profit > 0 ? "+" : "") + e.profit, this.roundProfit.getComponent(p).setColorScheme(m.Other, f.InsuranceHighlight)) : (this.roundProfit.string = e.profit.toString(), this.roundProfit.getComponent(p).setColorScheme(m.Other, f.WhiteCreamy_100));
            let a = parseInt(l.localStorage.getItem(d.key_cardFaceSetting));
            switch (t > 2 ? (this.handCard.active = !1, this.handCardOmaha.active = !0, this.handCardOmaha.children.forEach((e => {
                    e.active = !0
                })), e.holeCards && e.holeCards.forEach(((e, t) => {
                    const r = this.handCardOmaha.children[t].getComponent(h);
                    r.cardFaceSetting = a, r.setId(e)
                }))) : (this.handCard.active = !0, this.handCardOmaha.active = !1, this.handCard.children.forEach((e => {
                    e.active = !0
                })), e.holeCards && e.holeCards.forEach(((e, t) => {
                    const r = this.handCard.children[t].getComponent(h);
                    r.cardFaceSetting = a, r.setId(e)
                }))), this.boardCard.children.forEach((e => {
                    e.isValid && (e.active = !0)
                })), e.boardCards.forEach(((e, t) => {
                    this.boardCard.children[t].active = !0;
                    const r = this.boardCard.children[t].getComponent(h);
                    r.cardFaceSetting = a, r.setId(e)
                })), e.cardRank) {
                case 0:
                    this.cardType.string = u("POKER_HAND_RANKINGS.FOLD"), this.foldTag.active = !0;
                    break;
                case 1:
                    this.cardType.string = u("POKER_HAND_RANKINGS.HIGH_CARD");
                    break;
                case 2:
                    this.cardType.string = u("POKER_HAND_RANKINGS.PAIR");
                    break;
                case 3:
                    this.cardType.string = u("POKER_HAND_RANKINGS.TWO_PAIRS");
                    break;
                case 4:
                    this.cardType.string = u("POKER_HAND_RANKINGS.THREE_OF_A_KIND");
                    break;
                case 5:
                    this.cardType.string = u("POKER_HAND_RANKINGS.STRAIGHT");
                    break;
                case 6:
                    this.cardType.string = u("POKER_HAND_RANKINGS.FLUSH");
                    break;
                case 7:
                    this.cardType.string = u("POKER_HAND_RANKINGS.FULL_HOUSE");
                    break;
                case 8:
                    this.cardType.string = u("POKER_HAND_RANKINGS.FOUR_OF_A_KIND");
                    break;
                case 9:
                    this.cardType.string = u("POKER_HAND_RANKINGS.STRAIGHT_FLUSH");
                    break;
                case 10:
                    this.cardType.string = u("POKER_HAND_RANKINGS.ROYAL_FLUSH");
                    break;
                default:
                    this.cardType.string = ""
            }
        }
        onDestroy() {
            cc_mtt.vv.AssetsManager.releaseWebImage(this.iconPath)
        }
    }).prototype, "playerName", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(T.prototype, "playerIcon", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(T.prototype, "dealerIcon", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(T.prototype, "cardType", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(T.prototype, "roundProfit", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(T.prototype, "handCard", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(T.prototype, "handCardOmaha", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(T.prototype, "boardCard", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(T.prototype, "boardCardOmaha", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(T.prototype, "foldTag", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = T)) || v));
    r._RF.pop()
}