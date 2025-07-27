import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./CustomScrollView.js";
import * as u from "./Pb.js";
import * as m from "./Translator.js";
import * as d from "./HoldemTournamentDetailsRankingRow.js";
import * as p from "./Holdem_Basic_Item.js";
import * as R from "./CustomWidget.js";
import * as E from "./ScrollItem.js";
import * as g from "./HoldemTournamentDetailsRankingRowLandscape.js";

function main() {
    var T, y, f, b, _, N, A, L, k, I, D, B;
    n._RF.push({}, "72cb2M1e7xJHp4fDoEDjYNy", "HoldemTournamentDetailsRanking", void 0);
    const {
        ccclass: S,
        property: P
    } = r;
    t("default", (T = P(c), y = P(E), f = P(s), b = P(o), _ = P(a), S((L = e((A = class extends p {
        constructor(...t) {
            super(...t), i(this, "rankingScrollView", L, this), i(this, "scrollItem", k, this), i(this, "searchEditBox", I, this), i(this, "searchBox", D, this), i(this, "hunterLabel", B, this), this.tournamentType = 0, this._players = [], this._lastPlayers = []
        }
        onLoad() {
            l(this.searchEditBox) && (this.searchEditBox.placeholder = m("TOURNAMENT_DETAIL.TAB.RANKING.SEARCH_FOR_PLAYERS"));
            let t = null,
                e = this;
            this.scrollItem ? (this.scrollItem.setItemFunc(0, ((t, i) => {
                let n = t.getComponent(g);
                n.setHoldemRoom(e.holdemRoom), n.setTournamentType(e.tournamentType), n.setData(i)
            })), t = this.scrollItem.getComponentInChildren(h)) : t = this.rankingScrollView.view, t && t.node.on(R.EventType.ALIGNMENT_UPDATE, this.onAlignmentUpdate.bind(this))
        }
        start() {}
        setTournamentType(t) {
            switch (this.tournamentType = t, t) {
                case u.commonProto.TOURNAMENT_MODE.NORMAL:
                    this.hunterLabel.node.active = !1;
                    break;
                case u.commonProto.TOURNAMENT_MODE.HUNTER:
                    this.hunterLabel.string = m("TOURNAMENT_DETAIL.TAB.RANKING.HEADER.WINS"), this.hunterLabel.node.active = !0;
                    break;
                case u.commonProto.TOURNAMENT_MODE.SUPER_HUNTER:
                    this.hunterLabel.string = m("TOURNAMENT_DETAIL.TAB.RANKING.HEADER.VALUE"), this.hunterLabel.node.active = !0;
                    break;
                default:
                    this.hunterLabel.node.active = !1
            }
        }
        isDataEmpty() {
            return null == this._players || 0 == this._players.length
        }
        resetPage() {
            l(this.searchEditBox) && (this.searchEditBox.string = ""), this._players = [], this.scrollItem ? this.scrollItem.changeItemData([], !0) : this.rankingScrollView.content.destroyAllChildren()
        }
        setRankingPlayers(t) {
            this._lastPlayers = t, this.holdemRoom.store.isSngGame() ? (this.holdemRoom.store.isWaitingPlayerSngGame() ? this._players = [] : this._players = t, this._players && this.updateRankingList(this._players)) : (this.updateRankingList(t), this._players = t)
        }
        refreshRankingList() {
            this._lastPlayers && this.updateRankingList(this._lastPlayers)
        }
        updateRankingList(t) {
            this.scrollItem ? this.scrollItem.changeItemData(t, !0) : this.rankingScrollView.loadItem(t, (t => {
                let e = t.getComponent(d);
                e.setHoldemRoom(this.holdemRoom), e.setTournamentType(this.tournamentType)
            }))
        }
        onSearchClick() {
            this.onSearchEditEnded(this.searchEditBox)
        }
        onSearchEditEnded(t) {
            let e = t.string;
            if (e) {
                let t = new RegExp(".*" + e + ".*"),
                    i = this._players.filter((e => t.test(e.nickName)));
                this.updateRankingList(i), this.holdemRoom.store.MttRealTimeRecord(!1, 0, e)
            } else this.holdemRoom.store.MttRealTimeRecord(!0)
        }
        onAlignmentUpdate() {
            l(this.searchEditBox) ? this.onSearchEditEnded(this.searchEditBox) : this.updateRankingList(this._players)
        }
    }).prototype, "rankingScrollView", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(A.prototype, "scrollItem", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(A.prototype, "searchEditBox", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(A.prototype, "searchBox", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(A.prototype, "hunterLabel", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = A)) || N));
    n._RF.pop()
}