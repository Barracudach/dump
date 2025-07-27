import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as l from "./CustomScrollView.js";
import * as s from "./CustomWidget.js";
import * as n from "./Holdem_Basic_Item.js";
import * as a from "./HoldemTournamentDetailsRewardRow.js";

function main() {
    var d, u, c, p;
    o._RF.push({}, "fcb80bkDEFIe4NRHNK4QmEm", "HoldemTournamentDetailsReward", void 0);
    const {
        ccclass: m,
        property: h
    } = r;
    e("RankingItem", class {
        constructor() {
            this.rank = void 0, this.rankTail = void 0, this.prize = void 0
        }
    });
    e("default", (d = h(l), m((p = t((c = class extends n {
        constructor(...e) {
            super(...e), i(this, "rewardScrollView", p, this), this._prizeList = []
        }
        onLoad() {
            this.rewardScrollView.view.node.on(s.EventType.ALIGNMENT_UPDATE, (() => {
                this.updateRankingRewardList(this._prizeList)
            }))
        }
        start() {}
        isDataEmpty() {
            return null == this._prizeList || 0 == this._prizeList.length
        }
        resetPage() {
            this.rewardScrollView.resetScrollView(), this._prizeList = []
        }
        updateRankingRewardList(e) {
            this._prizeList = e;
            let t = this.getDisplayPrizeList(e);
            this.rewardScrollView.loadItem(t, (e => {
                let t = e.getComponent(a);
                t.setHoldemRoom(this.holdemRoom), t.setPrizeMode(this.holdemRoom.store.prizeMode)
            }))
        }
        getDisplayPrizeList(e) {
            let t, i = [];
            return Object.keys(e).forEach((o => {
                var r, l, s, n, a;
                const d = {
                    rank: +o,
                    prize: e[o]
                };
                let u = d.prize.money == (null == (r = t) ? void 0 : r.prize.money),
                    c = !d.prize.tool && !(null != (l = t) && l.prize.tool) || (null == (s = d.prize.tool) ? void 0 : s.ToolId) == (null == (n = t) || null == (n = n.prize.tool) ? void 0 : n.ToolId),
                    p = d.prize.proportion == (null == (a = t) ? void 0 : a.prize.proportion);
                u && c && p ? t.rankTail = +o : (i.push(d), t = d)
            })), cc_mtt.vv.ConsoleLog.log("HoldemTournamentDetailsReward getDisplayPrizeList", i), i
        }
    }).prototype, "rewardScrollView", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = c)) || u));
    o._RF.pop()
}