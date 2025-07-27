import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as g from "./cv.js";

function main() {
    var c, d, h, C, f, y, F, S, L, D, N, _, w, z, k, A, R, E, v, T, J, H, I, x, O, B, G, K, P, Q, U, j;
    i._RF.push({}, "06501gD2gJOPJIC892SLvAn", "HandItem", void 0);
    const {
        ccclass: M,
        property: V
    } = u;
    e("HandItem", (c = V(a), d = V(a), h = V(n), C = V(l), f = V(l), y = V(a), F = V(a), S = V(a), L = V(a), D = V(l), N = V(l), _ = V(l), w = V(l), z = V(n), k = V(n), M((E = t((R = class extends o {
        constructor(...e) {
            super(...e), r(this, "timeLabel", E, this), r(this, "nameLabel", v, this), r(this, "likeNode", T, this), r(this, "likeSpriteFrame", J, this), r(this, "unlikeSpriteFrame", H, this), r(this, "gameStatusLabel", I, this), r(this, "gameTypeLabel", x, this), r(this, "gameAmountLabel", O, this), r(this, "gameRefLabel", B, this), r(this, "spadeCardFrame", G, this), r(this, "heartCardFrame", K, this), r(this, "diamondCardFrame", P, this), r(this, "clubCardFrame", Q, this), r(this, "leftCards", U, this), r(this, "rightCards", j, this)
        }
        updateSVReuseData(e, t) {
            t.length <= 0 || t.length - 1 < e || (this.populateGameData(t[e]), this.populateCardsNumbers(t[e].private_cards, !0), this.populateCardsNumbers(t[e].community_cards, !1))
        }
        populateGameData(e) {
            let t = g.Enum.FilterGameType[e.game_type];
            this.timeLabel.string = g.StringTools.formatDateTimeByCountry(e.started_at.seconds, !1, !0), this.nameLabel.string = e.winner_username, this.gameTypeLabel.string = g.config.getStringData("Name_" + t, !1, e.game_type), this.gameAmountLabel.string = e.total_pot + " " + e.currency, this.gameRefLabel.string = e.game_id, 1 == e.result ? (this.likeNode.getComponent(s).spriteFrame = this.likeSpriteFrame, this.gameStatusLabel.string = g.config.getStringData("Win")) : (this.likeNode.getComponent(s).spriteFrame = this.unlikeSpriteFrame, this.gameStatusLabel.string = g.config.getStringData("Loose"))
        }
        populateCardsNumbers(e, t) {
            let r = 1,
                i = this.leftCards;
            t || (i = this.rightCards), 0 == g.StringTools.getArrayLength(e) ? i.active = !1 : (i.active = !0, e.forEach((e => {
                m(JSON.stringify(r), i).getComponent(s).spriteFrame = this.getCardFrame(e.suit), m(JSON.stringify(r) + "/label", i).getComponent(a).string = this.getCardText(e.number), m(JSON.stringify(r) + "/label", i).getComponent(p).color = this.getCardColor(e.suit), r += 1
            })))
        }
        getCardFrame(e) {
            let t = this.spadeCardFrame;
            switch (e) {
                case "Club":
                    t = this.clubCardFrame;
                    break;
                case "Heart":
                    t = this.heartCardFrame;
                    break;
                case "Diamond":
                    t = this.diamondCardFrame;
                    break;
                case "Spade":
                    t = this.spadeCardFrame
            }
            return t
        }
        getCardColor(e) {
            return "Club" == e || "Spade" == e ? b.BLACK : b.RED
        }
        getCardText(e) {
            let t = g.Enum.CardNum[e.toUpperCase()];
            return t >= g.Enum.CardNum.CARD_2 && t <= g.Enum.CardNum.CARD_10 ? (t + 2).toString() : t == g.Enum.CardNum.CARD_J ? "J" : t == g.Enum.CardNum.CARD_Q ? "Q" : t == g.Enum.CardNum.CARD_K ? "K" : t == g.Enum.CardNum.CARD_A ? "A" : ""
        }
    }).prototype, "timeLabel", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(R.prototype, "nameLabel", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(R.prototype, "likeNode", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(R.prototype, "likeSpriteFrame", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(R.prototype, "unlikeSpriteFrame", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(R.prototype, "gameStatusLabel", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(R.prototype, "gameTypeLabel", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(R.prototype, "gameAmountLabel", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(R.prototype, "gameRefLabel", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(R.prototype, "spadeCardFrame", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(R.prototype, "heartCardFrame", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(R.prototype, "diamondCardFrame", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(R.prototype, "clubCardFrame", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(R.prototype, "leftCards", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(R.prototype, "rightCards", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = R)) || A));
    i._RF.pop()
}