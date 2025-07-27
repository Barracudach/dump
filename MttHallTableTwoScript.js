import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as f from "./Enum.js";
import * as I from "./MttItemHelper.js";
import * as y from "./NodePage.js";
import * as _ from "./Pb.js";
import * as T from "./httpApis.js";
import * as b from "./commonProto.mjs_cjs=&original=.js";
import * as g from "./ScrollItem.js";
import * as L from "./PageTwoTableTuplePkw.js";
import * as P from "./PageTwoTableTuple.js";

function main() {
    var S, w, H, C, v, D, R, V, N, M, x, A, U, B, E;
    s._RF.push({}, "b4652PkyT1PdIBYmRtQzFW+", "MttHallTableTwoScript", void 0);
    const {
        ccclass: z,
        property: O
    } = h, k = t("LIST_OPTION", l({
        DATA_LIST: 0,
        SEARCH_LIST: 1
    }));
    t("MttHallTableTwoScript", (S = O(o), w = O(b), H = O(n), C = O(a), v = O(r), D = O(r), z(((E = class t extends u {
        constructor(...t) {
            super(...t), i(this, "scrollView", N, this), i(this, "scrollItem", M, this), i(this, "tuplePrefab", x, this), i(this, "editBox", A, this), i(this, "noResultLabel", U, this), i(this, "bountyLabel", B, this), this.spawnNum = 15, this.spacing = 0, this.tupleHeight = 0, this.tuples = [], this.tournamentMode = 0, this.updateTimer = 0, this.updateInterval = .2, this.bufferZone = 0, this.lastContentPosY = 0, this.pageActive = !1, this._mttHallInfo = null, this._mttHallScript = null, this.tuplePool = new p, this.dataList = [], this.matchedList = [], this._tableList = [], this._listOption = 0, this._celebrityList = [], this._lastTimeUpdatePlayerList = 0, this._updateDataInterval = 5, this._lastSearchKeyword = void 0, this._lastSearchTime = 0
        }
        onLoad() {
            this.tupleHeight = this.tuplePrefab.data.height, this.initScrollView()
        }
        update(t) {
            !1 === this.pageActive || this._tableList.length < 1 || this.tuples.length < 1 || this.scrollItem || this.updateTuplesPosition(t)
        }
        initScrollView() {
            this.scrollItem && this.scrollItem.setItemFunc(0, ((t, e) => {
                this.getTupleComponent(t).setInfo(e, Number(t.name), this._mttHallInfo.Status, this.tournamentMode, this.isCelebrityPlayer(e.UserId))
            }))
        }
        updateTuplesPosition(t) {
            if (this.updateTimer += t, 0 == this.bufferZone && (this.bufferZone = .5 * this.scrollView.node.getComponent(c).height + 1.5 * this.tupleHeight), this.updateTimer > this.updateInterval) {
                this.updateTimer = 0;
                let t = this.scrollView.content.position.y < this.lastContentPosY,
                    e = (this.tupleHeight + this.spacing) * this.tuples.length;
                for (let i = 0; i < this.tuples.length; i++) {
                    let s, l = y.getPositionInView(this.tuples[i], this.scrollView.node);
                    if (t) {
                        if (l.y < -this.bufferZone && this.tuples[i].position.y + e < 0) {
                            let t = this.getTupleComponent(this.tuples[i]);
                            for (s = t.tupleId; l.y < -this.bufferZone && this.tuples[i].position.y + e < 0;) this.tuples[i].position = new m(this.tuples[i].position.x, this.tuples[i].position.y + e, this.tuples[i].position.z), s -= this.tuples.length, l = y.getPositionInView(this.tuples[i], this.scrollView.node);
                            this.setTupleInfo(t, s)
                        }
                    } else if (l.y > this.bufferZone && this.tuples[i].position.y - e > -this.scrollView.content.getComponent(c).height) {
                        let t = this.getTupleComponent(this.tuples[i]);
                        for (s = t.tupleId; l.y > this.bufferZone && this.tuples[i].position.y - e > -this.scrollView.content.getComponent(c).height;) this.tuples[i].position = new m(this.tuples[i].position.x, this.tuples[i].position.y - e, this.tuples[i].position.z), s += this.tuples.length, l = y.getPositionInView(this.tuples[i], this.scrollView.node);
                        this.setTupleInfo(t, s)
                    }
                }
                this.lastContentPosY = this.scrollView.content.position.y
            }
        }
        onSearchClicked() {
            this._mttHallScript.addSignUpLoading();
            let t = this.editBox.string.trim();
            if ("" === t) return this._lastSearchKeyword = "", this.searchLocally(), void this._mttHallScript.removeSignUpLoading();
            this.requestMttTournamentPlayers(t, (() => {
                this._mttHallScript.removeSignUpLoading()
            }))
        }
        requestMttTournamentPlayers(t, e) {
            let i = Date.now(),
                s = !1;
            if (this._lastSearchKeyword == t) {
                const t = 3e3;
                i - this._lastSearchTime > t && (this._lastSearchTime = i, s = !0)
            } else s = !0;
            if (!s) return void(e instanceof Function && e());
            this._lastSearchKeyword = t, this._lastSearchTime = i;
            let l = new _.commonProto.MttTournamentPlayersRequest;
            l.TournamentId = this._mttHallInfo.TournamentId, l.SearchKeyword = t, T.requestMttTournamentPlayers(l, (t => {
                if (t && t.ErrorCode) {
                    let e = "ERROR_CODE_PKW." + t.ErrorCode;
                    this._mttHallScript._hallScript.callPopUpBox(e, void 0)
                } else this.matchedList = t.PlayersDetail, this.updateTableList(k.SEARCH_LIST), this.updatePlayersList(!0);
                e instanceof Function && e()
            }), (() => {
                this.searchLocally(), e instanceof Function && e()
            }))
        }
        searchLocally(t) {
            let e = this.editBox.string.trim();
            if ("" !== e) {
                if (y.checkForSymbols(e)) this.matchedList = [];
                else {
                    let t = new RegExp(e);
                    this.matchedList = this.dataList.filter((e => t.test(e.PlayerName)))
                }
                this.updateTableList(k.SEARCH_LIST), this.updatePlayersList(!0)
            } else(this._listOption !== k.DATA_LIST || t) && (this.updateTableList(), this.updatePlayersList(!1))
        }
        updatePlayersList(t) {
            this.scrollItem ? this.scrollItem.changeItemData(this._tableList, !0) : (this.recycleTuples(), this.addTuples(this._tableList, t))
        }
        sortList(t) {
            return t
        }
        addTuples(t, e = !1) {
            let i;
            this.setNoResultContent(t.length <= 0), this.scrollView.content.getComponent(c).height = (this.tupleHeight + this.spacing) * t.length - this.spacing, this.scrollView.content.position = new m(this.scrollView.content.position.x, this.scrollView.content.parent.getComponent(c).height / 2, this.scrollView.content.position.z), this.bufferZone = 0;
            for (let e = 0; e < t.length && e < this.spawnNum; e++) {
                i = this.addTupleNode(), i.parent = this.scrollView.content;
                let s = this.getTupleComponent(i);
                this.setTuplePosition(i, e), s.setInfo(t[e], e, this._mttHallInfo.Status, this.tournamentMode, this.isCelebrityPlayer(t[e].UserId)), this.tuples.push(i)
            }
        }
        addTupleNode() {
            return this.tuplePool.get()
        }
        removeTuples() {
            this.tuples = [], this.scrollView.content.destroyAllChildren(), this.tuplePool.clear()
        }
        createTuples() {
            if (this.scrollItem && !(this.tuplePool.size() + this.tuples.length >= this.spawnNum))
                for (let t = 0; t < this.spawnNum; ++t) {
                    let t = d(this.tuplePrefab);
                    this.tuplePool.put(t)
                }
        }
        recycleTuples() {
            for (; this.tuples.length > 0;) this.tuplePool.put(this.tuples.pop())
        }
        updateTuples(t) {
            for (let e of this.tuples) {
                let i = this.getTupleComponent(e);
                this.updateTupleInfo(i, t)
            }
        }
        updateTableList(t = k.DATA_LIST) {
            this._listOption = t, this._tableList = t === k.SEARCH_LIST ? this.matchedList : this.dataList
        }
        setPage(e) {
            var i;
            let s = null != this._mttHallInfo && null != e._mttHallInfo && this._mttHallInfo.TournamentId == e._mttHallInfo.TournamentId;
            this._mttHallScript = e, this._updateDataInterval = this._mttHallScript._updateDataInterval;
            const l = !this._mttHallInfo || this._mttHallInfo.TournamentId != (null == (i = this._mttHallScript._mttHallInfo) ? void 0 : i.TournamentId);
            this._mttHallInfo = this._mttHallScript._mttHallInfo, t.currentSymbolCurrency = "", t.currentCurrency = "", this._mttHallInfo && this._mttHallInfo.currency && f[this._mttHallInfo.currency] && (t.currentSymbolCurrency = f[this._mttHallInfo.currency].symbol, t.currentCurrency = this._mttHallInfo.currency), this.tournamentMode = this._mttHallInfo.TournamentMode, this.bountyLabel.node.active = I.getIsBounty(this.tournamentMode), this.createTuples(), this.setCelebrityList(e._mttHallInfo.CelebrityList), console.log("original PlayersDetail\n", JSON.parse(JSON.stringify(this._mttHallInfo.PlayersDetail)));
            let o = [],
                n = [];
            if (this._mttHallInfo.PlayersDetail.forEach((t => {
                    t.JoinStatus >= 0 ? this._celebrityList.find((e => e.UserID === t.UserId)) ? o.push(t) : n.push(t) : t.Rank <= 200 && n.push(t)
                })), this._mttHallInfo.PlayersDetail = o.sort(((t, e) => t.Index - e.Index)).concat(n), (l || !(cc_mtt.vv.DataManager.getNow().getTime() - this._lastTimeUpdatePlayerList < 1e3 * this._updateDataInterval)) && (this.dataList = this.sortList(this._mttHallInfo.PlayersDetail), !s || this._listOption != k.SEARCH_LIST))
                if (this.editBox.string = "", this.updateTableList(), this.scrollItem) this.scrollItem.changeItemData(this._tableList, !s), this.setNoResultContent(this._tableList.length <= 0);
                else {
                    this.dataList.length === this._mttHallInfo.PlayersDetail.length ? this.updateTuples(this._tableList) : (this.recycleTuples(), this.addTuples(this._tableList))
                }
        }
        resetPage() {
            this._tableList = this.matchedList = this.dataList = [], this.editBox.string = "", this.setNoResultContent(!1), this._listOption = k.DATA_LIST, this.removeTuples()
        }
        getTupleComponent(t) {
            return t.getComponent(L) || t.getComponent(g)
        }
        setCelebrityList(t) {
            this._celebrityList = [], t.forEach((t => {
                t.Role != P.commonProto.CelebrityRole.Celebrity && t.Role != P.commonProto.CelebrityRole.LiveBroadcast || this._celebrityList.push(t)
            }))
        }
        isCelebrityPlayer(t) {
            return this._celebrityList.findIndex((e => e.UserID == t)) > -1
        }
        setTuplePosition(t, e) {
            t.setPosition(0, -this.tupleHeight * (.5 + e) - this.spacing * e)
        }
        setTupleInfo(t, e) {
            t.setInfo(this._tableList[e], e, this._mttHallInfo.Status, this.tournamentMode, this.isCelebrityPlayer(this._tableList[e].UserId))
        }
        updateTupleInfo(t, e) {
            t.setInfo(e[t.tupleId], t.tupleId, this._mttHallInfo.Status, this.tournamentMode, this.isCelebrityPlayer(e[t.tupleId].UserId))
        }
        setNoResultContent(t) {
            this.noResultLabel.node.active = t
        }
        updatePlayerList(t) {
            if (null != this._mttHallInfo && t.mttId == this._mttHallInfo.TournamentId) {
                for (let e = 0; e < t.players.length; e++) {
                    const i = t.players[e],
                        s = this.dataList.find((t => t.UserId == i.userId));
                    s && (s.Wins = i.wins, s.Bounty = i.bounty, s.Value = i.value, s.Coins = i.leftcoin, s.UserId = i.userId, s.JoinStatus = i.joinStatus, s.Rank = i.rank, s.Index = i.rank, s.Bullet = i.bullet)
                }
                this.searchLocally(!0), this.updateTuples(this._tableList), this._lastTimeUpdatePlayerList = cc_mtt.vv.DataManager.getNow().getTime()
            }
        }
    }).currentSymbolCurrency = "", E.currentCurrency = "", N = e((V = E).prototype, "scrollView", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(V.prototype, "scrollItem", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(V.prototype, "tuplePrefab", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(V.prototype, "editBox", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(V.prototype, "noResultLabel", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(V.prototype, "bountyLabel", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = V)) || R));
    s._RF.pop()
}