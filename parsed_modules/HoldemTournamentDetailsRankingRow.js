import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as s from "./Pb.js";
import * as l from "./FormatParser.js";
import * as u from "./CustomScrollViewItem.js";
import * as c from "./StringTools.js";

function main() {
    var h, p, m, g, f, d, b, N, R, y, T, k, v, D;
    n._RF.push({}, "5b7cegetYxDl4E+sl0b5hjf", "HoldemTournamentDetailsRankingRow", void 0);
    const {
        ccclass: S,
        property: w
    } = a;
    t("default", (h = w(r), p = w(r), m = w(r), g = w(r), f = w(o), d = w(o), S((R = e((N = class extends u {
        constructor(...t) {
            super(...t), i(this, "ranking", R, this), i(this, "playerName", y, this), i(this, "chips", T, this), i(this, "resurrect", k, this), i(this, "hunterNode", v, this), i(this, "selfRankingOverlay", D, this), this.tournamentType = 0
        }
        setTournamentType(t) {
            this.tournamentType = t
        }
        getRankString(t) {
            return t.toString()
        }
        setData(t) {
            super.setData(t);
            let e = t.rank,
                i = t.nickName,
                n = t.leftcoin || t.leftCoin || 0,
                r = l.RoundToDecimal(n),
                o = Math.abs(t.joinStatus) - 1;
            switch (this.selfRankingOverlay.active = t.userId == this.holdemRoom.store.playerUserId, this.ranking.string = this.getRankString(e), this.playerName.string = i, this.chips.string = c.ScientificNotationWithFormat(r), this.resurrect.string = o ? o.toString() + "R" : "", this.tournamentType) {
                case s.commonProto.TOURNAMENT_MODE.NORMAL:
                    this.hunterNode.active = !1;
                    break;
                case s.commonProto.TOURNAMENT_MODE.HUNTER:
                    this.hunterNode.active = !0, this.hunterNode.children[0].active = !0, this.setHunterValue(l.RoundToDecimal(t.wins, 1).toString());
                    break;
                case s.commonProto.TOURNAMENT_MODE.SUPER_HUNTER:
                    this.hunterNode.active = !0, this.hunterNode.children[0].active = !1, this.setHunterValue(l.RoundToDecimal(t.value, 2).toString());
                    break;
                default:
                    this.hunterNode.active = !1
            }
        }
        setHunterValue(t) {
            this.hunterNode.children[1].getComponent(r).string = t
        }
    }).prototype, "ranking", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(N.prototype, "playerName", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(N.prototype, "chips", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(N.prototype, "resurrect", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(N.prototype, "hunterNode", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(N.prototype, "selfRankingOverlay", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = N)) || b));
    n._RF.pop()
}