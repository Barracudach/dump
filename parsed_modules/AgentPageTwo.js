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
import * as _ from "./cc.js";
import * as l from "./cc.js";
import * as P from "./cc.js";
import * as S from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as L from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as E from "./AgentPrefabPage.js";
import * as T from "./ImpokerHall.js";
import * as C from "./AgentPlayerTableTuple.js";
import * as I from "./AgentPlayerDetailPage.js";
import * as f from "./NodePage.js";
import * as y from "./httpApis.js";
import * as b from "./ListLoader.js";
import * as A from "./AndroidBackButton.js";
import * as v from "./CommonTools.js";

function main() {
    var O, w, R, B, D, N, k, M, F, G, H, x, U, V, z, q;
    s._RF.push({}, "74031z5R7tC1YZcULt8zzkg", "AgentPageTwo", void 0);
    const {
        ccclass: W,
        property: K
    } = c, Z = o({
        REG_TIME: "users.reg_time",
        CONTRIBUTION: "association_members.contribution",
        GOLD: "users.gold",
        ACTION: "users.last_action"
    }), Y = o({
        ASC: "ASC",
        DESC: "DESC"
    });
    t("AgentPageTwo", (O = K(n), w = K([n]), R = K(h), B = K(r), D = K(a), N = K(l), k = K(n), W((G = e((F = class t extends g {
        constructor(...t) {
            super(...t), i(this, "agentPage", G, this), i(this, "sortingOptions", H, this), i(this, "searchInput", x, this), i(this, "searchButton", U, this), i(this, "scrollView", V, this), i(this, "tuplePrefab", z, this), i(this, "emptyMessage", q, this), this._agentPageScript = void 0, this._hallScript = null, this._hasFullList = !1, this._assoId = 0, this._limitPerTime = 50, this._searchStr = "", this.dataList = [], this.searchList = [], this.sortOption = "", this.sortOrder = "", this.pageActive = !0, this._tupleHeight = 0, this.spawnNum = 15, this.spacing = 3, this.tuples = [], this.updateTimer = 0, this.updateInterval = .2, this.bufferZone = 0, this.lastContentPosY = 0, this._secondAgentPage = null, this._playerDetailPage = null, this.tupleRef = 0, this.AGENT_TUPLE_REF = o({
                DOWNLINE_LIST: 2,
                MEMEBER_LIST: 1
            }), this.tupleClickedEventName = "agentTupleClicked", this.tuplePool = new p, this._buttonLock = !1
        }
        onLoad() {
            this.agentPage ? this._agentPageScript = this.agentPage.getComponent(E) : this._agentPageScript = u.getScene().getComponentInChildren(E), this._hallScript = v.instance.getParentScene(u, this.node).getComponentInChildren(T), this._tupleHeight = this.tuplePrefab.data.height
        }
        start() {
            this.node.on(this.tupleClickedEventName, (t => {
                this.agentTableTupleClickedHandler(t.getUserData()), t.propagationStopped = !0
            }));
            let t = this.node.getComponent(b);
            t && t.initExtendLoader((t => {
                this.handleTupleExtension(t)
            }))
        }
        update(t) {
            this.searchList.length < 1 && !this.pageActive || (this.updateTimer += t, this.updateTimer > this.updateInterval && (this.updateTimer = 0, this.lastContentPosY = this.updateTuplesPosition(this.searchList, this.tuples, this.scrollView, this.lastContentPosY)))
        }
        updateTuplesPosition(t, e, i, s) {
            let o = i.content.position.y < s,
                n = (this._tupleHeight + this.spacing) * e.length;
            for (let s = 0; s < e.length; s++) {
                let h = f.getPositionInView(e[s], i.node);
                if (o) {
                    if (h.y < -this.bufferZone && e[s].position.y + n < 0) {
                        e[s].position = new d(e[s].position.x, e[s].position.y + n, e[s].position.z);
                        let i = e[s].getComponent(C),
                            o = i._tupleId - e.length;
                        i.setInfo(t[o], o)
                    }
                } else if (h.y > this.bufferZone && e[s].position.y - n > -i.content.getComponent(_).height) {
                    e[s].position = new d(e[s].position.x, e[s].position.y - n, e[s].position.z);
                    let i = e[s].getComponent(C),
                        o = i._tupleId + e.length;
                    i.setInfo(t[o], o)
                }
            }
            return i.content.position.y
        }
        updateContentList(t) {
            t.length < this._limitPerTime && (this._hasFullList = !0), "" === this._searchStr ? this.searchList = this.dataList = this.dataList.concat(t) : this.searchList = this.searchList.concat(t), this.scrollView.content.getComponent(_).height += (this._tupleHeight + this.spacing) * t.length, this.bufferZone = .5 * this.scrollView.node.getComponent(_).height + this._tupleHeight
        }
        handleTupleExtension(t) {
            switch (this.tupleRef) {
                case this.AGENT_TUPLE_REF.MEMEBER_LIST:
                    this.handleTupleExtensionMember(t);
                    break;
                case this.AGENT_TUPLE_REF.DOWNLINE_LIST:
            }
        }
        handleTupleExtensionMember(t) {
            if (this._hasFullList) cc_mtt.vv.ConsoleLog.log("hasFullList:agent member", this.searchList.length), t(!1);
            else {
                let e = !1;
                const i = () => {
                    e = !0, cc_mtt.vv.ConsoleLog.log("hidLoaderOverTime:agent member"), t(!1, !0)
                };
                this.scheduleOnce(i, 20), this.requestAssociationMemeberListPage(this.searchList.length, this._searchStr).then((s => {
                    e || (this.unschedule(i), this.updateContentList(s), t(s.length > 0))
                })).catch((s => {
                    e || (this.unschedule(i), cc_mtt.vv.ConsoleLog.log("handleTupleExtension error:agent member", s), t(!1, !0))
                }))
            }
        }
        requestAssociationMemeberListPage(t = 0, e = "", i = this.getSorting()) {
            let s = {
                assoId: this._assoId,
                offset: t,
                search: e,
                order: i
            };
            return new Promise(((t, e) => {
                cc_mtt.vv.ConsoleLog.log("requestAssociationMemeberListPage::", s), y.requestAssociationMemberList(s, (i => {
                    if (i.errorCode) {
                        let t = "ERROR_CODE_PKW." + i.errorCode;
                        e(t)
                    } else cc_mtt.vv.ConsoleLog.log("agent member", i.members.length, this.searchList.length, this.dataList.length, this._searchStr), cc_mtt.vv.ConsoleLog.log("agent member msg", i.members), t(i.members)
                }), (() => {
                    cc_mtt.vv.ConsoleLog.log("onerror:requestAssociationMemberList"), e("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR")
                }))
            }))
        }
        requestAssociationDownlineListPage() {
            let t = {
                assoId: this._assoId
            };
            return new Promise(((e, i) => {
                y.requestAssociationDownlineList(t, (t => {
                    if (t.errorCode) {
                        let e = "ERROR_CODE_PKW." + t.errorCode;
                        i(e)
                    } else cc_mtt.vv.ConsoleLog.log("agent downline", t.downlines.length, this.searchList.length), cc_mtt.vv.ConsoleLog.log("agent downline msg", t.downlines), e(t.downlines)
                }), (() => {
                    cc_mtt.vv.ConsoleLog.log("onerror:requestAssociationDownlineList"), i("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR")
                }))
            }))
        }
        setPage(t, e = cc_mtt.vv.DataManager.ownAssociationId) {
            this.tupleRef = t, this._assoId = e, this._buttonLock = !1;
            const i = e => {
                    this.createTuples(), this.dataList = e, this.searchList = this.dataList.slice(), this.addList(this.searchList), t != this.AGENT_TUPLE_REF.MEMEBER_LIST ? this.sortByRegister() : (this.rotateSortIcon(Z.REG_TIME), this.setSortingByOption(Z.REG_TIME))
                },
                s = () => {
                    this._hasFullList = !0, this.searchList = this.dataList = [], this.addList([]), this.rotateSortIcon(Z.REG_TIME)
                };
            return new Promise(((e, o) => {
                switch (t) {
                    case this.AGENT_TUPLE_REF.MEMEBER_LIST:
                        this.requestAssociationMemeberListPage(0, "", Z.REG_TIME + " " + Y.DESC).then((t => {
                            this._hasFullList = t.length < this._limitPerTime, i(t), e("ok")
                        })).catch((t => {
                            cc_mtt.vv.ConsoleLog.log("translated errorCode:", t), s(), o(t)
                        }));
                        break;
                    case this.AGENT_TUPLE_REF.DOWNLINE_LIST:
                        this.requestAssociationDownlineListPage().then((t => {
                            this._hasFullList = !0, i(t), e("ok")
                        })).catch((t => {
                            cc_mtt.vv.ConsoleLog.log("translated errorCode:", t), s(), o(t)
                        }));
                        break;
                    default:
                        o("code error")
                }
            }))
        }
        resetPage() {
            this.removeList(), this.rotateSortIcon(""), this.resetSorting(), this.searchInput.string = "", this._searchStr = ""
        }
        addList(t) {
            let e;
            this.scrollView.content.getComponent(_).height = Math.max(0, (this._tupleHeight + this.spacing) * t.length - this.spacing), this.scrollView.content.position = new d(this.scrollView.content.position.x, this.scrollView.content.parent.getComponent(_).height / 2, this.scrollView.content.position.z), this.bufferZone = .5 * this.scrollView.node.getComponent(_).height + this._tupleHeight, t.length ? this.emptyMessage.active = !1 : this.emptyMessage.active = !0;
            for (let i = 0; i < this.spawnNum && i < t.length && this.tuplePool.size() > 0; i++) e = this.tuplePool.get(), e.parent = this.scrollView.content, e.setPosition(0, -this._tupleHeight * (.5 + i) - this.spacing * i), e.getComponent(C).setInfo(t[i], i, this.tupleRef), this.tuples.push(e)
        }
        createTuples() {
            if (!(this.tuplePool.size() + this.tuples.length >= this.spawnNum))
                for (let t = 0; t < this.spawnNum; ++t) {
                    let t = L(this.tuplePrefab);
                    this.tuplePool.put(t)
                }
        }
        recycleTuples() {
            for (; this.tuples.length > 0;) this.tuplePool.put(this.tuples.pop())
        }
        removeTuples() {
            this.tuples = [], this.scrollView.content.destroyAllChildren(), this.tuplePool.clear()
        }
        removeList() {
            this.dataList = this.searchList = [], this.removeTuples()
        }
        getSortIconIndex(t) {
            switch (t) {
                case Z.REG_TIME:
                    return 0;
                case Z.GOLD:
                    return 2;
                case Z.ACTION:
                    return 3;
                default:
                    return -1
            }
        }
        rotateSortIcon(t) {
            let e = this.getSortIconIndex(t);
            if (this.sortingOptions.length > 0) {
                let t = 0;
                for (let i = 0; i < this.sortingOptions.length; i++) t = this.sortingOptions[i].getChildByName("icon").angle, this.sortingOptions[i].getChildByName("icon").angle = e === i ? t - 180 : 0, this.sortingOptions[i].getComponent(m).color = e === i ? (new P).fromHEX("#0094FA") : (new P).fromHEX("#282936")
            }
        }
        doSorting(t, e = this.searchList) {
            e = this.sortOption == t ? e.slice().reverse() : this.handleSorting(t, Y.DESC, e), this.setSortingByOption(t), this.searchList = e, this.updateTuples(e)
        }
        handleSorting(t, e, i) {
            let s = e === Y.DESC;
            switch (t) {
                case Z.REG_TIME:
                    i = s ? i.slice().sort(((t, e) => e.userId - t.userId)) : i.slice().sort(((t, e) => t.userId - e.userId));
                    break;
                case Z.GOLD:
                    i = s ? i.slice().sort(((t, e) => e.gold - t.gold)) : i.slice().sort(((t, e) => t.gold - e.gold));
                    break;
                case Z.ACTION:
                    i = s ? i.slice().sort(((t, e) => e.lastAction.getTime() - t.lastAction.getTime())) : i.slice().sort(((t, e) => t.lastAction.getTime() - e.lastAction.getTime()))
            }
            return i
        }
        updateTuples(t = this.searchList) {
            for (let e = 0; e < this.tuples.length; e++) {
                let i = this.tuples[e].getComponent(C);
                i.setInfo(t[i._tupleId], i._tupleId)
            }
        }
        setSorting(t, e) {
            this.sortOption = t, this.sortOrder = e
        }
        resetSorting() {
            this.sortOption = "", this.sortOrder = ""
        }
        getSorting() {
            return this.sortOption + " " + this.sortOrder
        }
        setSortOrder(t) {
            this.sortOrder = t
        }
        setSortingByOption(t) {
            this.sortOption === t ? this.setSortOrder(this.sortOrder === Y.DESC ? Y.ASC : Y.DESC) : this.setSorting(t, Y.DESC)
        }
        getSortingByOption(t) {
            let e = "";
            return e = this.sortOption === t && this.sortOrder === Y.DESC ? Y.ASC : Y.DESC, t + " " + e
        }
        sortByCriteria(t) {
            this._buttonLock || (this._buttonLock = !0, cc_mtt.vv.ConsoleLog.log("sortByCriteria", t, "<-current:", this.sortOption, this.sortOrder), this.rotateSortIcon(t), this._hasFullList ? this.doSorting(t) : (this._hallScript.showLoading(), cc_mtt.vv.ConsoleLog.log("sort from server"), this.requestAssociationMemeberListPage(0, this._searchStr, this.getSortingByOption(t)).then((e => {
                this.setSortingByOption(t), this.recycleTuples(), this.searchList = e, this.addList(this.searchList), this._hallScript.hidLoading()
            })).catch((t => {
                cc_mtt.vv.ConsoleLog.log("translated errorCode:", t), this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox(t, void 0)
                }))
            }))), this._buttonLock = !1)
        }
        sortByRegister() {
            this.sortByCriteria(Z.REG_TIME)
        }
        sortByContribution() {}
        sortByCoins() {
            this.sortByCriteria(Z.GOLD)
        }
        sortByVitality() {
            this.sortByCriteria(Z.ACTION)
        }
        searchMember() {
            this._hallScript.showLoading();
            let t = this.searchInput.string.trim();
            cc_mtt.vv.ConsoleLog.log("member search:", t), this._searchStr === this.searchInput.string ? this._hallScript.hidLoading() : "" !== t ? this.requestAssociationMemeberListPage(0, this.searchInput.string).then((t => {
                this._hasFullList = t.length < this._limitPerTime, this._searchStr = this.searchInput.string, this.recycleTuples(), this.searchList = t, this.addList(this.searchList), this._hallScript.hidLoading()
            })).catch((t => {
                this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox(t, void 0)
                }))
            })) : this.searchList.length != this.dataList.length || JSON.stringify(this.searchList) != JSON.stringify(this.dataList) ? (cc_mtt.vv.ConsoleLog.log("search dataList"), this._hasFullList = !1, this._searchStr = "", this.searchList = this.dataList, this.recycleTuples(), this.addList(this.searchList), this._hallScript.hidLoading()) : this._hallScript.hidLoading()
        }
        searchLocally() {
            this._hallScript.showLoading();
            let t = this.searchInput.string.trim();
            if (cc_mtt.vv.ConsoleLog.log("local search:", t), "" == t) this.searchList.length !== this.dataList.length && (this.recycleTuples(), this.searchList = this.handleSorting(this.sortOption, this.sortOrder, this.dataList), this.addList(this.searchList));
            else if (this.recycleTuples(), f.checkForSymbols(t)) this.searchList = [], this.addList(this.searchList);
            else {
                let e = new RegExp(t, "i");
                this.searchList = this.dataList.filter((t => e.test(t.nickname) || e.test(t.userId.toString()))), this.searchList = this.handleSorting(this.sortOption, this.sortOrder, this.searchList), this.addList(this.searchList)
            }
            this._hallScript.hidLoading()
        }
        onSearchClicked() {
            if (!(this._buttonLock || this.dataList.length <= 0)) {
                switch (this._buttonLock = !0, this.tupleRef) {
                    case this.AGENT_TUPLE_REF.MEMEBER_LIST:
                        "" == this._searchStr && this._hasFullList ? this.searchLocally() : this.searchMember();
                        break;
                    case this.AGENT_TUPLE_REF.DOWNLINE_LIST:
                        this.searchLocally()
                }
                this._buttonLock = !1
            }
        }
        onBackClicked() {
            S.isNative && S.os === S.OS.ANDROID && A.getInstance().removeBackFunction("AgentPageTwo"), this._hallScript.controlHallBlockLayer(!0, this.name), this._hallScript.movePageToRight(this.node, this.agentPage), setTimeout((() => {
                this.resetPage(), this._hallScript.controlHallBlockLayer(!1, this.name)
            }), 1100 * this._hallScript.pageActionSpeed)
        }
        addBackFunction() {
            S.isNative && S.os === S.OS.ANDROID && A.getInstance().addBackFunction("AgentPageTwo", this.onBackClicked.bind(this))
        }
        callSecondAgentPage(e) {
            this._hallScript.controlHallBlockLayer(!0, this.name), this._hallScript.showLoading(), this._secondAgentPage || (this._secondAgentPage = this._agentPageScript.createSecondAgentPage()), this._secondAgentPage.getComponent(t).addBackFunction(), this._hallScript.movePageFromRight(this._secondAgentPage, this.agentPage), setTimeout((() => {
                this._secondAgentPage.getComponent(t).setPage(this.AGENT_TUPLE_REF.MEMEBER_LIST, e).then((() => {
                    this._hallScript.controlHallBlockLayer(!1, this.name), this._hallScript.hidLoading()
                })).catch((t => {
                    this._hallScript.controlHallBlockLayer(!1, this.name), this._hallScript.hidLoading((() => {
                        this._hallScript.callPopUpBox(t, void 0)
                    }))
                }))
            }), 1100 * cc_mtt.vv.DataManager.pageActionSpeed)
        }
        callPlayerDetailPage(t, e, i = this.agentPage) {
            this._hallScript.controlHallBlockLayer(!0, this.name), this._playerDetailPage || (this._playerDetailPage = this._agentPageScript.createPlayerDetailPage()), this._hallScript.movePageFromRight(this._playerDetailPage, i), setTimeout((() => {
                this._playerDetailPage.getComponent(I).parentPage = i, this._playerDetailPage.getComponent(I).setPage(t, e), this._hallScript.controlHallBlockLayer(!1, this.name)
            }), 1100 * cc_mtt.vv.DataManager.pageActionSpeed)
        }
        agentTableTupleClickedHandler(t) {
            let e, i;
            switch ([e, i] = t, this._secondAgentPage = this._agentPageScript.getSecondAgentPage(), this._playerDetailPage = this._agentPageScript.getPlayerDetailPage(), e) {
                case this.AGENT_TUPLE_REF.MEMEBER_LIST:
                    this._secondAgentPage && this._secondAgentPage.active ? this.callPlayerDetailPage(i, !0, this._secondAgentPage) : this.callPlayerDetailPage(i, !1);
                    break;
                case this.AGENT_TUPLE_REF.DOWNLINE_LIST:
                    this.callSecondAgentPage(i.assoId)
            }
        }
    }).prototype, "agentPage", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(F.prototype, "sortingOptions", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), x = e(F.prototype, "searchInput", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(F.prototype, "searchButton", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(F.prototype, "scrollView", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(F.prototype, "tuplePrefab", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(F.prototype, "emptyMessage", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = F)) || M));
    s._RF.pop()
}