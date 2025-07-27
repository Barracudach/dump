import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as P from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as R from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as T from "./ImpokerHall.js";
import * as y from "./HistoryDetailTuplePrefab.js";
import * as D from "./CardRecordPrefab.js";
import * as _ from "./Translator.js";
import * as k from "./Pb.js";
import * as L from "./NodePage.js";
import * as w from "./RedPocketHall.js";
import * as C from "./ListLoader.js";
import * as E from "./httpApis.js";
import * as I from "./AndroidBackButton.js";
import * as A from "./CommonTools.js";

function main() {
    var N, G, S, v, O, M, H, B, z, V, Y, F, j, U, x, $, q, J, W, Z, K, X, Q, tt, et, it, st, ot, lt, at, nt, rt, ht, ut, ct, pt, mt, gt, dt, Pt, Rt, bt, ft, Tt, yt, Dt;
    s._RF.push({}, "f1644sN/gVJ/Z641MM1Z+7r", "HistoryDetailPrefab", void 0);
    const {
        ccclass: _t,
        property: kt
    } = h;
    t("HistoryDetailPrefab", (N = kt(o), G = kt(o), S = kt(o), v = kt(l), O = kt(l), M = kt(l), H = kt(l), B = kt(l), z = kt(l), V = kt(l), Y = kt(l), F = kt(l), j = kt(l), U = kt(l), x = kt(l), $ = kt(a), q = kt(n), J = kt(r), W = kt(a), Z = kt(a), K = kt(r), X = kt(r), _t((et = e((tt = class extends u {
        constructor(...t) {
            super(...t), i(this, "backButton", et, this), i(this, "redPocketBtn", it, this), i(this, "recordButton", st, this), i(this, "gameName", ot, this), i(this, "gameDate", lt, this), i(this, "gameDuration", at, this), i(this, "gamePool", nt, this), i(this, "personalHandsTotal", rt, this), i(this, "pplNum", ht, this), i(this, "buyTotal", ut, this), i(this, "benefitBureau", ct, this), i(this, "fantasyNum", pt, this), i(this, "playerAttributeValue", mt, this), i(this, "bountyAttribute", gt, this), i(this, "prizeAttribute", dt, this), i(this, "myTupleParent", Pt, this), i(this, "scrollView", Rt, this), i(this, "tuplePrefab", bt, this), i(this, "jackpotTitle", ft, this), i(this, "emptyMessage", Tt, this), i(this, "redPocketPrefab", yt, this), i(this, "cardRecordPrefab", Dt, this), this._hallScript = null, this._parentNode = null, this._cardRecordPage = null, this.jackpotTuple = null, this.redPocket = null, this._tupleHeight = 0, this.spawnNum = 15, this.spacing = 3, this.tuples = [], this.updateTimer = 0, this.updateInterval = .2, this.bufferZone = 0, this.lastContentPosY = 0, this.gameResultDetail = null, this.myDetail = null, this.dataList = [], this.toolList = [], this.myTuple = null, this.gameResultId = 0, this._hasFullList = !1, this._limitPerTime = 15
        }
        onDestroy() {
            this.unscheduleAllCallbacks()
        }
        onLoad() {
            this._hallScript = A.instance.getParentScene(c, this.node).getComponentInChildren(T), this._tupleHeight = this.tuplePrefab.data.height, this.addMyTuple()
        }
        start() {
            this.resetInfo(), this.node.getComponent(C).initExtendLoader((t => {
                this.handleTupleExtension(t)
            }))
        }
        update(t) {
            this.dataList.length < 1 || (this.updateTimer += t, this.updateTimer > this.updateInterval && (this.updateTimer = 0, this.lastContentPosY = this.updateTuplesPosition(this.dataList, this.tuples, this.scrollView, this.lastContentPosY)))
        }
        updateTuplesPosition(t, e, i, s) {
            let o = i.content.position.y < s,
                l = (this._tupleHeight + this.spacing) * e.length;
            for (let s = 0; s < e.length; s++) {
                let a = L.getPositionInView(e[s], i.node);
                if (o) {
                    if (a.y < -this.bufferZone && e[s].position.y + l < 0) {
                        e[s].position = new p(e[s].position.x, e[s].position.y + l, e[s].position.z);
                        let i = e[s].getComponent(y),
                            o = i._tupleId - e.length;
                        i.setInfo(t[o], o, this.gameResultDetail, this.toolList)
                    }
                } else if (a.y > this.bufferZone && e[s].position.y - l > -i.content.getComponent(m).height) {
                    e[s].position = new p(e[s].position.x, e[s].position.y - l, e[s].position.z);
                    let i = e[s].getComponent(y),
                        o = i._tupleId + e.length;
                    i.setInfo(t[o], o, this.gameResultDetail, this.toolList)
                }
            }
            return i.content.position.y
        }
        updateContentList(t) {
            t.length < this._limitPerTime && (this._hasFullList = !0), this.dataList = this.dataList.concat(t), this.scrollView.content.getComponent(m).height += (this._tupleHeight + this.spacing) * t.length, this.bufferZone = .5 * this.scrollView.node.getComponent(m).height + this._tupleHeight
        }
        handleTupleExtension(t) {
            if (this._hasFullList) cc_mtt.vv.ConsoleLog.log("history detail page: hasFullList"), t(!1);
            else {
                let e = !1;
                const i = () => {
                    e = !0, cc_mtt.vv.ConsoleLog.log("hidLoaderOverTime"), t(!1, !0)
                };
                this.scheduleOnce(i, 20), this.requestGameResultsDetailList(this.gameResultId, (s => {
                    e || this.getTools(s, (() => {
                        e || (this.unschedule(i), this.updateContentList(s), t(s.length > 0))
                    }))
                }), (s => {
                    e || (this.unschedule(i), cc_mtt.vv.ConsoleLog.log("handleTupleExtension error:", s), t(!1, !0))
                }))
            }
        }
        getTools(t, e) {
            let i = [];
            if (t.forEach((t => {
                    t.PrizeToolId > 0 && this.toolList.findIndex((e => e.ToolId === t.PrizeToolId)) < 0 && i.push(t.PrizeToolId)
                })), i.length > 0) {
                let t = {
                    ToolIds: i
                };
                cc_mtt.vv.DataManager.worldNetwork.getToolsInfo(t, (t => {
                    for (const e of t.ToolInfos) {
                        let t = {};
                        t.ToolId = e.Id, t.Value = e.Value, t.Name = e.Name, this.toolList.push(t)
                    }
                    e && e(this.toolList)
                }))
            } else e && e([])
        }
        requestGameResultsDetailList(t, e, i) {
            let s = {
                GameResultId: t,
                offset: this.dataList.length,
                limit: Math.min(this._limitPerTime, 400 - this.dataList.length)
            };
            s.limit <= 0 ? e([]) : E.requestGameResultDetailList(s, (t => {
                if (cc_mtt.vv.ConsoleLog.log("requestGameResultsDetailList_res", t), t && !t.ErrorCode) e(t.PlayerDetails);
                else {
                    let e = _("ERROR_CODE_PKW." + t.ErrorCode);
                    i(e)
                }
            }), (() => {
                i(_("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR"))
            }))
        }
        requestGameResultsDetail(t, e, i) {
            let s = {
                GameResultId: t
            };
            E.requestGameResultDetail(s, (t => {
                cc_mtt.vv.ConsoleLog.log("check PlayerDetails length:", t && t.GameResultDetail ? t.GameResultDetail.PlayerDetails.length : 0), cc_mtt.vv.ConsoleLog.log("check PlayerDetails:", t), t && !t.ErrorCode ? e(t) : i("ERROR_CODE_PKW." + t.ErrorCode)
            }), (() => {
                cc_mtt.vv.ConsoleLog.log("onerror:requestGameResultDetail"), i("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR")
            }))
        }
        setPage(t, e) {
            g.isNative && g.os === g.OS.ANDROID && I.getInstance().addBackFunction("HistoryDetailPrefab", this.onBackClicked.bind(this)), this._hallScript.showLoading(), this.gameResultId = t, this.requestGameResultsDetail(t, (t => {
                this.gameResultDetail = t.GameResultDetail;
                let i = this.adjustScrollViewWidget();
                if (this.node.getComponent(C).setNeedLoader(i), i) this.myDetail = this.gameResultDetail.SelfDetail;
                else {
                    let t = this.gameResultDetail.PlayerDetails.findIndex((t => t.UserId == cc_mtt.vv.DataManager.userId));
                    this.myDetail = t >= 0 ? this.gameResultDetail.PlayerDetails[t] : null
                }
                if (this.myDetail) this.dataList = this.gameResultDetail.TypeId === k.commonProto.GAME_CATEGORY.LOOP_PP ? [this.myDetail] : this.gameResultDetail.PlayerDetails, this.sortDataList(), this.setInfo(), this.getTools(this.dataList, (() => {
                    this.showMyTuple(i), this.addList(), e && e instanceof Function && e(), this._hallScript.hidLoading()
                }));
                else {
                    let t = "HISTORY_DETAIL.SERVER_NO_PLAYER_RECORD";
                    this._hallScript.hidLoading((() => {
                        this._hallScript.callPopUpBox(t, (() => {
                            this.onBackClicked()
                        }))
                    }))
                }
            }), (t => {
                this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox(t, (() => {
                        this.onBackClicked()
                    }))
                }))
            }))
        }
        resetPage() {
            this.showMyTuple(!1), this.gameResultDetail = null, this._hasFullList = !1, this.dataList = [], this.toolList = [], this.removeList(), this.resetInfo(), this.destroyRedPocket(), this.unscheduleAllCallbacks()
        }
        adjustScrollViewWidget() {
            let t = this.scrollView.node.getComponent(d),
                e = this.gameResultDetail.TypeId === k.commonProto.GAME_CATEGORY.MTT;
            if (t) {
                let i = this.myTupleParent.getComponent(d).top,
                    s = i + this.tuplePrefab.data.height + 2;
                t.top = e ? s : i;
                let o = this.scrollView.node.children[0].getComponent(d);
                o && o.updateAlignment()
            }
            return e
        }
        sortDataList() {
            this.gameResultDetail.TypeId === k.commonProto.GAME_CATEGORY.SNG_AOF || this.gameResultDetail.TypeId === k.commonProto.GAME_CATEGORY.SNG || this.gameResultDetail.TypeId === k.commonProto.GAME_CATEGORY.MTT ? this.dataList.sort(((t, e) => t.Rank - e.Rank)) : this.dataList.sort(((t, e) => e.ResultMoney - t.ResultMoney))
        }
        showPlayerAttributes(t) {
            const {
                TOURNAMENT_MODE: e
            } = k.commonProto;
            if (t === k.commonProto.GAME_CATEGORY.MTT) switch (this.gameResultDetail.TournamentMode) {
                case e.SUPER_HUNTER:
                    this.bountyAttribute.node.active = !0, this.bountyAttribute.string = _("HISTORY_DETAIL.HEADER.BOUNTY");
                    break;
                case e.HUNTER:
                    this.bountyAttribute.node.active = !0, this.bountyAttribute.string = _("HISTORY_DETAIL.HEADER.BOUNTY.HUNTER");
                    break;
                default:
                    this.bountyAttribute.node.active = !1
            } else this.bountyAttribute.node.active = !1
        }
        setGameDuration() {
            if (this.gameResultDetail.GameTimeSec < 60) this.gameDuration.string = _("HISTORY_DETAIL.DURATION.LESS");
            else {
                let t, e;
                t = Math.floor(this.gameResultDetail.GameTimeSec / 3600), e = Math.floor(this.gameResultDetail.GameTimeSec % 3600 / 60);
                let i = t > 0 ? `${t}${_("HISTORY_DETAIL.DURATION.HOUR")} ` : "",
                    s = e > 0 ? `${e}${_("HISTORY_DETAIL.DURATION.MINUTE")}` : "";
                this.gameDuration.string = i + s
            }
        }
        showMyTuple(t) {
            this.myTuple.active = t, t && this.myDetail && this.myTuple.getComponent(y).setInfo(this.myDetail, 0, this.gameResultDetail, this.toolList)
        }
        showFantasyNum(t) {
            this.fantasyNum.node.parent.active = t, t && (this.fantasyNum.string = this.gameResultDetail.FantasyRoundCount.toString())
        }
        showBuyTotal(t) {
            this.buyTotal.node.parent.active = t, t && (this.buyTotal.string = L.floorValue(this.gameResultDetail.TotalBuyMoney).toString())
        }
        showGamePool(t) {
            this.gamePool.node.parent.active = t, t && (this.gamePool.string = L.getFeeLabel(this.gameResultDetail.GamePot))
        }
        showPplNum(t) {
            this.pplNum.node.parent.active = t, t && (this.pplNum.string = `${this.gameResultDetail.PlayerCount}/${this.gameResultDetail.JoinCount}`)
        }
        showRedPocket(t) {
            this.redPocketBtn.node.active = t
        }
        checkIsPP() {
            return this.gameResultDetail.TypeId === k.commonProto.GAME_CATEGORY.LOOP_PP || this.gameResultDetail.TypeId === k.commonProto.GAME_CATEGORY.GEN_PP
        }
        checkRedPocket() {
            return this.gameResultDetail.RedPocket > 0 || this.gameResultDetail.RedPocketToolNames.length > 0
        }
        handleTimeLabel(t) {
            return [t.getHours() < 10 ? "0" + t.getHours() : t.getHours(), t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes(), t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds()]
        }
        showGameDate(t) {
            if (t) {
                let [e, i, s] = this.handleTimeLabel(t);
                this.gameDate.string = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${e}:${i}`
            } else this.gameDate.string = ""
        }
        setInfo() {
            this.gameName.string = this.gameResultDetail.Name;
            let t = this.gameResultDetail.EndTime;
            switch (this.showGameDate(t), this.setGameDuration(), this.showPlayerAttributes(this.gameResultDetail.TypeId), this.showRedPocket(this.checkRedPocket()), this.playerAttributeValue.string = "（" + this.gameResultDetail.PlayerCount + "）", this.gameResultDetail.TypeId) {
                case k.commonProto.GAME_CATEGORY.GEN_PP:
                case k.commonProto.GAME_CATEGORY.LOOP_PP:
                    this.showFantasyNum(!0), this.showBuyTotal(!0), this.showGamePool(!1), this.showPplNum(!1);
                    break;
                case k.commonProto.GAME_CATEGORY.MTT:
                    this.showFantasyNum(!1), this.showBuyTotal(!1), this.showGamePool(!0), this.showPplNum(!0);
                    break;
                case k.commonProto.GAME_CATEGORY.SNG:
                    this.showFantasyNum(!1), this.showBuyTotal(!1), this.showGamePool(!0), this.showPplNum(!1)
            }
            this.benefitBureau.string = this.gameResultDetail.WinRoundCount.toString(), this.personalHandsTotal.string = this.gameResultDetail.RoundCount.toString()
        }
        resetInfo() {
            this.gameName.string = "", this.gameDate.string = "", this.gameDate.string = "", this.gameDuration.string = "", this.benefitBureau.string = "", this.personalHandsTotal.string = "", this.playerAttributeValue.string = "", this.showFantasyNum(!1), this.showBuyTotal(!1), this.showGamePool(!1), this.showPplNum(!1), this.showRedPocket(!1)
        }
        addMyTuple() {
            this.myTuple = P(this.tuplePrefab), this.myTuple.getComponent(R).color = (new b).fromHEX("#45475D"), this.myTuple.parent = this.myTupleParent, this.myTuple.active = !1
        }
        addJackPotTuple() {
            this.gameResultDetail.JackPot > 0 && this.checkIsPP() && (this.jackpotTitle.parent = this.scrollView.content, this.jackpotTitle.setPosition(0, -this._tupleHeight * this.dataList.length - this.spacing * (this.dataList.length - 1)), this.jackpotTitle.active = !0, this.jackpotTuple = P(this.tuplePrefab), this.jackpotTuple.parent = this.jackpotTitle, this.jackpotTuple.getComponent(y).setInfo(this.myDetail, 0, this.gameResultDetail, this.toolList, this.gameResultDetail.JackPot))
        }
        removeJackPot() {
            return new Promise((t => {
                this.jackpotTuple && (this.jackpotTuple.destroy(), this.jackpotTuple = null), this.jackpotTitle.parent = this.node, this.jackpotTitle.active = !1, t(!this.jackpotTuple)
            }))
        }
        addList() {
            let t;
            this.tuples.length > 0 && this.removeList(), this.scrollView.content.getComponent(m).height = Math.max(0, (this._tupleHeight + this.spacing) * this.dataList.length - this.spacing), this.scrollView.content.position = new p(this.scrollView.content.position.x, this.scrollView.content.parent.getComponent(m).height / 2, this.scrollView.content.position.z), this.bufferZone = this.scrollView.node.getComponent(m).height * (this.spawnNum / 20);
            for (let e = 0; e < this.spawnNum && e < this.dataList.length; e++) t = P(this.tuplePrefab), t.parent = this.scrollView.content, t.setPosition(0, -this._tupleHeight * (.5 + e) - this.spacing * e), t.getComponent(y).setInfo(this.dataList[e], e, this.gameResultDetail, this.toolList), this.tuples.push(t);
            this.addJackPotTuple()
        }
        removeList() {
            this.removeJackPot().then((() => {
                this.tuples = [], this.scrollView.content.destroyAllChildren()
            }))
        }
        destroyRedPocket() {
            this.redPocket && (this.redPocket.destroy(), this.redPocket = null)
        }
        onRedPocketClicked() {
            L.coolDownButton(this.redPocketBtn, this), this.checkRedPocket() && (f(this.redPocket) || (this.redPocket = P(this.redPocketPrefab), this.redPocket.parent = this.node), this.redPocket && this.redPocket.getComponent(w).callRedPocket(this.gameResultDetail.RedPocket, this.gameResultDetail.RedPocketToolNames, this.gameResultDetail.RedPocketIds))
        }
        onRecordClicked(t = !1) {
            this.gameResultDetail && (this._hallScript.blockLayer.active = !0, this._cardRecordPage || (this._cardRecordPage = P(this.cardRecordPrefab), this._cardRecordPage.parent = this._hallScript.layers[1], this._cardRecordPage.getComponent(D)._parentNode = this.node), this._hallScript.movePageFromRight(this._cardRecordPage, this.node, !0, t), setTimeout((() => {
                this._cardRecordPage.getComponent(D).setPage(this.gameResultDetail, this.gameResultId), this._hallScript.blockLayer.active = !1, this._hallScript.activeBlackScreen(!1)
            }), 1100 * this._hallScript.pageActionSpeed))
        }
        onBackClicked() {
            g.isNative && g.os === g.OS.ANDROID && I.getInstance().removeBackFunction("HistoryDetailPrefab"), this._hallScript.blockLayer.active = !0, this._hallScript.movePageToRight(this.node, this._parentNode, (() => {
                setTimeout((() => {
                    this.resetPage(), this._hallScript.blockLayer.active = !1
                }), 100 * this._hallScript.pageActionSpeed)
            }))
        }
    }).prototype, "backButton", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(tt.prototype, "redPocketBtn", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(tt.prototype, "recordButton", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(tt.prototype, "gameName", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(tt.prototype, "gameDate", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(tt.prototype, "gameDuration", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(tt.prototype, "gamePool", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(tt.prototype, "personalHandsTotal", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(tt.prototype, "pplNum", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(tt.prototype, "buyTotal", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(tt.prototype, "benefitBureau", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(tt.prototype, "fantasyNum", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(tt.prototype, "playerAttributeValue", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(tt.prototype, "bountyAttribute", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(tt.prototype, "prizeAttribute", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(tt.prototype, "myTupleParent", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(tt.prototype, "scrollView", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(tt.prototype, "tuplePrefab", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(tt.prototype, "jackpotTitle", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(tt.prototype, "emptyMessage", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(tt.prototype, "redPocketPrefab", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(tt.prototype, "cardRecordPrefab", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = tt)) || Q));
    s._RF.pop()
}