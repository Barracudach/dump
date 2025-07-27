import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./mttconfig.js";
import * as b from "./FormatParser.js";
import * as m from "./AndroidBackButton.js";
import * as f from "./Holdem_Basic_Item.js";
import * as R from "./NodeTools.js";
import * as L from "./Enum.js";

function main() {
    var T, S, y, k, w, I, D, _, v, B, C, z, P, N, E, V, H, M, x, A, O, G, F, Y, Z, j, X, J, Q, U, q, K, W, $, ee, te, ie, ne, oe, re, le, ae, se, ce, de;
    n._RF.push({}, "7f557gYpk1NQIZJ40Ze3VRX", "holdem_tournament_records", void 0);
    const {
        ccclass: ge,
        property: he
    } = d;
    e("default", (T = he(o), S = he(r), y = he(l), k = he(l), w = he(r), I = he(r), D = he(r), _ = he(a), v = he(r), B = he(s), C = he(r), z = he(a), P = he(r), N = he(s), E = he(a), V = he(r), H = he(s), M = he(c), x = he(r), ge((G = t((O = class extends f {
        constructor(...e) {
            super(...e), i(this, "gameRecordsBackground", G, this), i(this, "mttRoomInfo", F, this), i(this, "prizePoolLabel", Y, this), i(this, "prizeCircleLabel", Z, this), i(this, "tournamentDetailsSwitch", j, this), i(this, "scrollViewDisplayBuffer", X, this), i(this, "tableListSwitch", J, this), i(this, "rankingRecordListHeader", Q, this), i(this, "rankingRecordScrollView", U, this), i(this, "rankingRecordList", q, this), i(this, "rankingRecordTuple", K, this), i(this, "rankingDisplayLimit", W, this), this._rankingDisplayItems = [], i(this, "levelRecordListHeader", $, this), i(this, "levelRecordScrollView", ee, this), i(this, "levelRecordList", te, this), i(this, "blindLevelRecordTuple", ie, this), i(this, "blindLevelDisplayLimit", ne, this), i(this, "tableRecordScrollView", oe, this), i(this, "tableRecordList", re, this), i(this, "tableDetailRowPrefab", le, this), i(this, "tableDisplayLimit", ae, this), i(this, "pagesScrollingSpeedInSecond", se, this), i(this, "backButton", ce, this), i(this, "buttonPanel", de, this)
        }
        onLoad() {
            this.node.on(r.EventType.TOUCH_END, (() => {
                this.onBackButtonClick()
            }), this)
        }
        start() {}
        onBackButtonClick() {
            g.isNative && g.os === g.OS.ANDROID && m.getInstance().removeBackFunction("holdem_tournament_records"), this.node.active = !1
        }
        updateRealTimeRecordCurrentPage() {
            if (0 != this.gameRecordsBackground.getPages().length)
                if (0 == this.gameRecordsBackground.getCurrentPageIndex()) {
                    for (const e of this.tournamentDetailsSwitch.getComponents(c)) e.interactable = !1;
                    for (const e of this.tableListSwitch.getComponents(c)) e.interactable = !0
                } else {
                    for (const e of this.tournamentDetailsSwitch.getComponents(c)) e.interactable = !0;
                    for (const e of this.tableListSwitch.getComponents(c)) e.interactable = !1
                }
        }
        setRoomInfoLayout(e) {
            this.mttRoomInfo.active = e == p.GAME_LEVEL_LIST_ID.MTT
        }
        setRankingRewardLayout(e) {
            e != p.MTT_PRIZE_MODE.MTT_PRIZE_CONFIG_MODE_AVERAGE && e != p.MTT_PRIZE_MODE.MTT_PRIZE_CONFIG_MODE_FIX || (this.rankingRecordListHeader.children[1].active = !1)
        }
        setLevelRecordLayout(e) {
            e != p.GAME_LEVEL_LIST_ID.MTT ? this.levelRecordListHeader.children[2].active = !1 : this.levelRecordListHeader.children[2].active = !0
        }
        updatePrizePool(e) {
            this.prizePoolLabel.string = e.toString()
        }
        updatePrizeCircle(e) {
            this.prizeCircleLabel.string = e.toString()
        }
        updateBlindLevelList() {
            let e = this.blindLevelDisplayLimit + 2 * this.scrollViewDisplayBuffer;
            for (let t = 1; t <= e; t++) {
                let e = null,
                    i = t;
                this.levelRecordList.children.length < t ? (e = h(this.blindLevelRecordTuple), e.parent = this.levelRecordList) : e = this.levelRecordList.children[t - 1], this.updateBlindLevelTuple(i, e)
            }
            this.levelRecordScrollView.scrollToTop()
        }
        updateBlindLevelTuple(e, t) {
            let i = this.holdemRoom,
                n = i.store.rbcList,
                o = i._gameMode,
                r = i.store.currentBlindLevel,
                a = i.store.MTTDetail ? i.store.MTTDetail.LevelStopSignup : -1,
                s = n[e - 1];
            o == p.GAME_LEVEL_LIST_ID.MTT ? (t.children[0].getComponent(l).string = s.Level ? s.Level.toString() : e.toString(), t.children[1].getComponent(l).string = b.RoundToDecimal(s.SmallBlind) + "/" + b.RoundToDecimal(s.BigBlind), t.children[2].getComponent(l).string = b.RoundToDecimal(s.Ante).toString(), t.children[3].active = s.Level == r, a > 0 && (t.children[4].active = s.Level == a, t.children[5].active = s.Level < a)) : (t.children[0].getComponent(l).string = e.toString(), t.children[1].getComponent(l).string = b.RoundToDecimal(s.SmallBlind) + "/" + b.RoundToDecimal(s.BigBlind), t.children[2].getComponent(l).string = "", t.children[3].active = e == r), t.name = t.children[0].getComponent(l).string
        }
        onBlindLevelListScroll(e, t, i) {
            if (t == L.SCROLLING) {
                let t = e.content.children[0],
                    i = parseInt(t.name),
                    n = e.content.children[e.content.children.length - 1],
                    o = parseInt(n.name),
                    r = R.getNodeHeight(e.node) * (1 - R.getNodeAnchorY(e.node)) + R.getNodeHeight(t) * this.scrollViewDisplayBuffer,
                    l = R.getNodeHeight(e.node) * (1 - R.getNodeAnchorY(e.node));
                e.content.position.y > r ? o < this.holdemRoom.store.rbcList.length && (t.setSiblingIndex(n.getSiblingIndex() + 1), this.updateBlindLevelTuple(o + 1, t), e.setContentPosition(e.content.position.add(new u(0, -R.getNodeHeight(t))))) : e.content.position.y < l && i > 1 && (n.setSiblingIndex(t.getSiblingIndex() ? t.getSiblingIndex() - 1 : 0), this.updateBlindLevelTuple(i - 1, n), e.setContentPosition(e.content.position.add(new u(0, R.getNodeHeight(n)))))
            }
        }
        updateRankingRewardList(e, t, i, n) {
            if (this._rankingDisplayItems = [], n == p.GAME_LEVEL_LIST_ID.MTT) {
                e.forEach(((i, n) => {
                    let o = i.Rank;
                    if (n > 0)
                        if (b.RoundToDecimal(i.Proportion, 2) === b.RoundToDecimal(e[n - 1].Proportion, 2) && t[o] == t[o - 1]) {
                            let e = this._rankingDisplayItems[this._rankingDisplayItems.length - 1],
                                t = e.ranking.split("-");
                            t[1] = o.toString(), e.ranking = t.join("-")
                        } else this._rankingDisplayItems.push({
                            ranking: o.toString(),
                            proportion: b.RoundToDecimal(i.Proportion, 3),
                            prize: t[o]
                        });
                    else this._rankingDisplayItems.push({
                        ranking: o.toString(),
                        proportion: b.RoundToDecimal(i.Proportion, 3),
                        prize: t[o]
                    })
                })), cc_mtt.vv.ConsoleLog.log("MTT Ranking Reward List Display", this._rankingDisplayItems);
                let i = this.rankingDisplayLimit + 2 * this.scrollViewDisplayBuffer;
                this.rankingRecordList.children.length >= this._rankingDisplayItems.length ? this.rankingRecordList.children.forEach(((e, t) => {
                    t < this._rankingDisplayItems.length ? this.updateRankingRewardTuple(t, e) : e.destroy()
                })) : this._rankingDisplayItems.forEach(((e, t) => {
                    if (t < i) {
                        let e = null;
                        t >= this.rankingRecordList.children.length ? (e = h(this.rankingRecordTuple), e.zIndex = t, e.parent = this.rankingRecordList) : (e = this.rankingRecordList.children[t], e.zIndex = t), this.updateRankingRewardTuple(t, e)
                    }
                }))
            } else {
                let t = [];
                t = i < 5 ? [100] : i < 8 ? [65, 35] : [60, 25, 15], cc_mtt.vv.ConsoleLog.log("SNG Reward List", e), e.forEach(((e, i) => {
                    var n = this.rankingRecordList.getChildByName(i.toString());
                    n || ((n = h(this.rankingRecordTuple)).parent = this.rankingRecordList), this._rankingDisplayItems.push({
                        ranking: (i + 1).toString(),
                        proportion: t[i],
                        prize: b.DisplayGold(e, 2).toString()
                    }), this.updateRankingRewardTuple(i, n)
                }))
            }
            this.rankingRecordScrollView.scrollToTop()
        }
        updateRankingRewardTuple(e, t) {
            let i = t.children[0].getComponent(l),
                n = t.children[1].getComponent(l),
                o = t.children[2].getComponent(l);
            i.string = this._rankingDisplayItems[e].ranking, n.string = this._rankingDisplayItems[e].proportion ? this._rankingDisplayItems[e].proportion + "%" : "", o.string = this._rankingDisplayItems[e].prize, t.name = e.toString()
        }
        onRankingRewardListScroll(e, t, i) {
            if (t == L.SCROLLING) {
                let t = e.content.children[0],
                    i = parseInt(t.name),
                    n = e.content.children[e.content.children.length - 1],
                    o = parseInt(n.name),
                    r = R.getNodeHeight(e.node) * (1 - R.getNodeAnchorY(e.node)) + R.getNodeHeight(t) * this.scrollViewDisplayBuffer,
                    l = R.getNodeHeight(e.node) * (1 - R.getNodeAnchorY(e.node));
                e.content.position.y > r ? o + 1 < this._rankingDisplayItems.length && (t.setSiblingIndex(n.getSiblingIndex() + 1), this.updateRankingRewardTuple(o + 1, t), e.setContentPosition(e.content.position.add(new u(0, -R.getNodeHeight(t))))) : e.content.position.y < l && i > 0 && (n.setSiblingIndex(t.getSiblingIndex() ? t.getSiblingIndex() - 1 : 0), this.updateRankingRewardTuple(i - 1, n), e.setContentPosition(e.content.position.add(new u(0, R.getNodeHeight(n)))))
            }
        }
        updateTableDetail() {
            let e = this.tableDisplayLimit + 2 * this.scrollViewDisplayBuffer,
                t = this.holdemRoom.store.mttTablesDetail;
            if (this.tableRecordList.children.length >= t.length) this.tableRecordList.children.forEach(((e, i) => {
                i < t.length ? this.updateTableTuple(i, e) : e.destroy()
            }));
            else
                for (let i = 0; i < t.length && i < e; i++) {
                    let e = null;
                    i >= this.tableRecordList.children.length ? (e = h(this.tableDetailRowPrefab), e.parent = this.tableRecordList) : e = this.tableRecordList.children[i], this.updateTableTuple(i, e)
                }
            this.tableRecordScrollView.scrollToTop()
        }
        updateTableTuple(e, t) {
            let i = this.holdemRoom.store.mttTablesDetail[e],
                n = i.TableId.toString().slice(-4);
            t.children[0].getComponent(l).string = parseInt(n).toString(), t.children[1].getComponent(l).string = i.PlayersNum.toString(), t.children[2].getComponent(l).string = i.MaxCoins + "/" + i.MinCoins, t.name = e.toString()
        }
        onTableListScroll(e, t, i) {
            if (t == L.SCROLLING) {
                let t = e.content.children[0],
                    i = parseInt(t.name),
                    n = e.content.children[e.content.children.length - 1],
                    o = parseInt(n.name),
                    r = R.getNodeHeight(e.node) * (1 - R.getNodeAnchorY(e.node)) + R.getNodeHeight(t) * this.scrollViewDisplayBuffer,
                    l = R.getNodeHeight(e.node) * (1 - R.getNodeAnchorY(e.node));
                e.content.position.y > r ? o + 1 < this.holdemRoom.store.mttTablesDetail.length && (t.setSiblingIndex(n.getSiblingIndex() + 1), this.updateTableTuple(o + 1, t), e.setContentPosition(e.content.position.add(new u(0, -R.getNodeHeight(t))))) : e.content.position.y < l && i > 0 && (n.setSiblingIndex(t.getSiblingIndex() ? t.getSiblingIndex() - 1 : 0), this.updateTableTuple(i - 1, n), e.setContentPosition(e.content.position.add(new u(0, R.getNodeHeight(n)))))
            }
        }
        selectRealTimeRecordPage() {
            this.gameRecordsBackground.scrollToPage(0, this.pagesScrollingSpeedInSecond)
        }
        selectGameRoundReviewPage() {
            this.gameRecordsBackground.scrollToPage(1, this.pagesScrollingSpeedInSecond)
        }
        show() {
            g.isNative && g.os === g.OS.ANDROID && m.getInstance().addBackFunction("holdem_tournament_records", this.onBackButtonClick.bind(this)), this.node.active = !0
        }
    }).prototype, "gameRecordsBackground", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(O.prototype, "mttRoomInfo", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(O.prototype, "prizePoolLabel", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = t(O.prototype, "prizeCircleLabel", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(O.prototype, "tournamentDetailsSwitch", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(O.prototype, "scrollViewDisplayBuffer", [he], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1
        }
    }), J = t(O.prototype, "tableListSwitch", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(O.prototype, "rankingRecordListHeader", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(O.prototype, "rankingRecordScrollView", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(O.prototype, "rankingRecordList", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(O.prototype, "rankingRecordTuple", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(O.prototype, "rankingDisplayLimit", [he], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 4
        }
    }), $ = t(O.prototype, "levelRecordListHeader", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t(O.prototype, "levelRecordScrollView", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = t(O.prototype, "levelRecordList", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = t(O.prototype, "blindLevelRecordTuple", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = t(O.prototype, "blindLevelDisplayLimit", [he], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 13
        }
    }), oe = t(O.prototype, "tableRecordScrollView", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = t(O.prototype, "tableRecordList", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = t(O.prototype, "tableDetailRowPrefab", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = t(O.prototype, "tableDisplayLimit", [he], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 19
        }
    }), se = t(O.prototype, "pagesScrollingSpeedInSecond", [he], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return .1
        }
    }), ce = t(O.prototype, "backButton", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = t(O.prototype, "buttonPanel", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = O)) || A));
    n._RF.pop()
}