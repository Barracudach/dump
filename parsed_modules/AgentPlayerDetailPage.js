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
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as L from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as _ from "./ImpokerHall.js";
import * as D from "./DropDownMenu.js";
import * as b from "./AgentPlayerDetailTuple.js";
import * as T from "./Translator.js";
import * as f from "./agent.js";
import * as y from "./observer.js";
import * as P from "./observer.js";
import * as A from "./NodePage.js";
import * as O from "./Pb.js";
import * as G from "./ListLoader.js";
import * as w from "./FormatParser.js";
import * as E from "./httpApis.js";
import * as C from "./AndroidBackButton.js";
import * as I from "./CommonTools.js";

function main() {
    var M, v, R, S, k, F, N, B, Y, z, $, q, x, V, H, K, U, W, j, J, Z, Q, X, tt, et, it;
    s._RF.push({}, "b66a8bi0BhFoK3YgwzZkxYy", "AgentPlayerDetailPage", void 0);
    const {
        ccclass: st,
        property: ot
    } = h;
    t("AgentPlayerDetailPage", (M = ot(o), v = ot(n), R = ot(n), S = ot(n), k = ot(n), F = ot(n), N = ot(r), B = ot(n), Y = ot(r), z = ot(a), $ = ot(l), q = ot(r), st(x = y((H = e((V = class extends u {
        constructor(...t) {
            super(...t), i(this, "backButton", H, this), i(this, "playerName", K, this), i(this, "playerId", U, this), i(this, "regDate", W, this), i(this, "coins", j, this), i(this, "lastGame", J, this), i(this, "dropDownBar", Z, this), i(this, "currentOptionLabel", Q, this), i(this, "dropDownMenu", X, this), i(this, "scrollView", tt, this), i(this, "tuplePrefab", et, this), i(this, "emptyMessage", it, this), this._hallScript = null, this.parentPage = null, this.dropDownOption = void 0, this.tuples = [], this.updateTimer = 0, this.updateInterval = .2, this.dataList = [], this.aList = [], this.store = void 0, this.tuplePool = new c, this._assoId = 0, this._userId = 0, this._isForFirstLevelAsso = !1, this._gameType = -1, this._limitPerTime = 15, this._touchEnd = !1, this._retrySecond = 10
        }
        onDestroy() {
            this.unscheduleAllCallbacks()
        }
        onLoad() {
            this.dropDownOption = [T("GAME_CATEGORY.ALL"), T("GAME_CATEGORY.MTT"), T("GAME_CATEGORY.GEN_PP"), T("GAME_CATEGORY.LOOP_PP"), T("GAME_CATEGORY.SNG"), T("GAME_CATEGORY.SNG_AOF")], this._hallScript = I.instance.getParentScene(p, this.node).getComponentInChildren(_), this.store = new f
        }
        start() {
            this.currentOptionLabel.string = this.dropDownOption[0];
            let t = this.dropDownOption.slice(1);
            this.dropDownMenu.getComponent(D).createOptions(t, this.filterHistory.bind(this)), this.node.getComponent(G).initExtendLoader((t => {
                this.handleTupleExtension(this._gameType, t)
            }))
        }
        update(t) {
            this.aList.length <= 0 || (this.updateTimer += t, this.updateTimer > this.updateInterval && (this.updateTimer = 0, this.hideTuplesOutsideView(this.scrollView)))
        }
        hideTuplesOutsideView(t) {
            for (let e of t.content.children) {
                let i = A.getPositionInView(e, t.node),
                    s = 1.5 * e.getComponent(d).height,
                    o = i.y - s > t.node.getComponent(d).height / 2,
                    n = i.y + s < -t.node.getComponent(d).height / 2;
                e.getComponent(g).opacity = o || n ? 0 : 255
            }
        }
        showDropDownMenu() {
            this.dropDownMenu.getComponent(D).dropDown()
        }
        filterHistory(t) {
            t == this.currentOptionLabel.string || this.dataList.length < 1 || (this.currentOptionLabel.string = t, this.recycleTuples().then((() => {
                switch (t) {
                    case this.dropDownOption[1]:
                        this._gameType = O.commonProto.GAME_CATEGORY.MTT;
                        break;
                    case this.dropDownOption[2]:
                        this._gameType = O.commonProto.GAME_CATEGORY.GEN_PP;
                        break;
                    case this.dropDownOption[3]:
                        this._gameType = O.commonProto.GAME_CATEGORY.LOOP_PP;
                        break;
                    case this.dropDownOption[4]:
                        this._gameType = O.commonProto.GAME_CATEGORY.SNG;
                        break;
                    case this.dropDownOption[5]:
                        this._gameType = O.commonProto.GAME_CATEGORY.SNG_AOF;
                        break;
                    default:
                        return this._gameType = -1, this.aList = this.dataList, void this.addList(this.aList)
                }
                this._hallScript.showLoading(), cc_mtt.vv.ConsoleLog.log("sendFilterRequest: " + t), this.requestAssociationMemberGameDetailPage(this._gameType, (e => {
                    cc_mtt.vv.ConsoleLog.log("sendFilterRequest response: " + t), this.aList = e, this.addList(e), this._hallScript.hidLoading()
                }), (t => {
                    this._hallScript.hidLoading((() => {
                        this._hallScript.callPopUpBox(t, void 0)
                    }))
                }))
            })))
        }
        handleTupleExtension(t = -1, e) {
            let i = !1;
            const s = () => {
                i = !0, cc_mtt.vv.ConsoleLog.log("hidLoaderOverTime"), e(!1, !0)
            };
            this.scheduleOnce(s, 35), this.requestAssociationMemberGameDetailPage(t, (t => {
                i || (this.unschedule(s), t = this.checkGameDetailDuplication(t), this.addList(t, !1), e(t.length > 0))
            }), (t => {
                i || (this.unschedule(s), cc_mtt.vv.ConsoleLog.log("handleTupleExtension error:", t), e(!1, !0))
            }))
        }
        setLastGameLabelFromList() {
            if (this.dataList.length > 0) {
                let [t, e, i, s, o] = this.handleTime(this.dataList[0].endTime);
                this.lastGame.string = t > 2e3 ? `${t}-${e}-${i} ${s}:${o}` : "-"
            } else this.lastGame.string = "-"
        }
        sortGameDetailList(t) {
            return t.sort(((t, e) => (t.endTime || (t.endTime = new Date), e.endTime || (e.endTime = new Date), e.endTime.getTime() - t.endTime.getTime())))
        }
        checkGameDetailDuplication(t) {
            if (t.length > 0) {
                let e = JSON.stringify(t[0]),
                    i = this.aList.findIndex((t => JSON.stringify(t) === e));
                if (i >= 0) {
                    let e = this.aList.length - 1 - i;
                    t = t.slice(e)
                }
            }
            return -1 == this._gameType ? this.aList = this.dataList = this.dataList.length > 0 ? this.dataList.concat(t) : t : this.aList = this.aList.length > 0 ? this.aList.concat(t) : t, t
        }
        setPage(t, e = !1) {
            m.isNative && m.os === m.OS.ANDROID && C.getInstance().addBackFunction("AgentPlayerDetailPage", this.onBackClicked.bind(this)), this._hallScript.showLoading(), this._assoId = t.assoId, this._userId = t.userId, this._isForFirstLevelAsso = e, this.requestAssociationMemberDetailPage((t => {
                this.aList = this.dataList = t, this.setLastGameLabelFromList(), this.addList(this.aList), this._hallScript.hidLoading()
            }), (t => {
                this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox(t, (() => {
                        this.aList = this.dataList = [], this.addList([])
                    }))
                }))
            }))
        }
        resetPage() {
            this.dropDownMenu.getComponent(D).resetDropDownMenu(), this.currentOptionLabel.string = this.dropDownOption[0], this.resetInfo(), this.removeList(), this.tuplePool.clear(), this._gameType = -1, this.aList = this.dataList = [], this.unscheduleAllCallbacks()
        }
        requestAssociationMemberDetailPage(t, e) {
            let i = {
                assoId: this._assoId,
                userId: this._userId,
                isForFirstLevelAsso: this._isForFirstLevelAsso,
                from: 0,
                limit: this._limitPerTime
            };
            E.requestAssociationMemberDetail(i, (i => {
                cc_mtt.vv.ConsoleLog.log("requestAssociationMemberDetail", i && i.GameDetails ? i.GameDetails.length : ""), i.errorCode ? e("ERROR_CODE_PKW." + i.errorCode) : (this.store.reloadMemberDetail(i), t(this.sortGameDetailList(i.GameDetails)))
            }), (() => {
                cc_mtt.vv.ConsoleLog.log("onerror:requestAssociationMemberDetail"), e("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR")
            }))
        }
        requestAssociationMemberGameDetailPage(t, e, i, s = !0) {
            let o = Math.min(this._limitPerTime, 100 - this.tuples.length);
            if (o <= 0) return void(e && e([]));
            let n = {
                assoId: this._assoId,
                userId: this._userId,
                isForFirstLevelAsso: this._isForFirstLevelAsso,
                gameType: t,
                from: this.tuples.length,
                limit: o
            };
            E.requestAssociationMemberGameDetail(n, (t => {
                t.errorCode ? i("ERROR_CODE_PKW." + t.errorCode) : e && e(this.sortGameDetailList(t.GameDetails))
            }), (() => {
                cc_mtt.vv.ConsoleLog.log("onerror:requestAssociationMemberGameDetail"), i("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR")
            }))
        }
        setInfo() {
            if (0 == this.store.userId) return;
            this.playerName.string = `${this.store.nickname}`, this.playerId.string = `${T("AGENT.PLAYER.DETAIL.ID")}${this.store.userId}`;
            let [t, e, i, s, o, n] = this.handleTime(this.store.regTime);
            this.regDate.string = `${T("AGENT.PLAYER.DETAIL.REG_TIME")}${t}-${e}-${i} ${s}:${o}`, this.coins.string = `${w.DisplayGold(this.store.coin)}`
        }
        resetInfo() {
            this.playerName.string = "", this.playerId.string = "", this.regDate.string = "", this.coins.string = "", this.lastGame.string = "-"
        }
        handleTime(t) {
            return [t.getFullYear(), t.getMonth() + 1, t.getDate(), (t.getHours() < 10 ? "0" : "") + t.getHours(), (t.getMinutes() < 10 ? "0" : "") + t.getMinutes(), (t.getSeconds() < 10 ? "0" : "") + t.getSeconds()]
        }
        recycleTuples() {
            return new Promise((t => {
                for (; this.tuples.length > 0;) {
                    let t = this.tuples.pop();
                    t.getComponent(b).resetTuple(), this.tuplePool.put(t)
                }
                t(!0)
            }))
        }
        addList(t, e = !0) {
            let i;
            this.emptyMessage.active = this.aList.length < 1;
            for (let e = 0; e < t.length; e++) i = this.tuplePool.size() > 0 ? this.tuplePool.get() : L(this.tuplePrefab), i.parent = this.scrollView.content, i.getComponent(b).setInfo(t[e]), this.tuples.push(i);
            e && this.scrollView.scrollToTop()
        }
        removeList() {
            this.tuples = [], this.scrollView.content.destroyAllChildren()
        }
        onBackClicked() {
            m.isNative && m.os === m.OS.ANDROID && C.getInstance().removeBackFunction("AgentPlayerDetailPage"), this._hallScript.controlHallBlockLayer(!0, this.name), this._hallScript.movePageToRight(this.node, this.parentPage), setTimeout((() => {
                this.resetPage(), this._hallScript.controlHallBlockLayer(!1, this.name)
            }), 1100 * this._hallScript.pageActionSpeed)
        }
    }).prototype, "backButton", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(V.prototype, "playerName", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(V.prototype, "playerId", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(V.prototype, "regDate", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(V.prototype, "coins", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(V.prototype, "lastGame", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(V.prototype, "dropDownBar", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(V.prototype, "currentOptionLabel", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(V.prototype, "dropDownMenu", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(V.prototype, "scrollView", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(V.prototype, "tuplePrefab", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(V.prototype, "emptyMessage", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), e(V.prototype, "setInfo", [P], Object.getOwnPropertyDescriptor(V.prototype, "setInfo"), V.prototype), x = V)) || x) || x));
    s._RF.pop()
}