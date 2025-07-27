import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./ImpokerHall.js";
import * as L from "./GiftRecordPrefab.js";
import * as f from "./worldWebsocket.js";
import * as m from "./Translator.js";
import * as _ from "./GiftTuple.js";
import * as P from "./mttconfig.js";
import * as b from "./GiftPlayerPrefab.js";
import * as y from "./NodePage.js";
import * as S from "./httpApis.js";
import * as T from "./ListLoader.js";
import * as v from "./AndroidBackButton.js";
import * as C from "./CommonTools.js";
import * as w from "./NodeTools.js";

function main() {
    var I, k, N, A, R, B, H, G, E, O, F, M, V, x;
    s._RF.push({}, "6d7caHPYFZCXLP7Nx9WQ1Xy", "GiftPrefab", void 0);
    const {
        ccclass: D,
        property: q
    } = n;
    t("GiftPrefab", (I = q(l), k = q(o), N = q(h), A = q(r), R = q(h), B = q(h), D((E = e((G = class extends a {
        constructor(...t) {
            super(...t), i(this, "searchInput", E, this), i(this, "scrollView", O, this), i(this, "tuplePrefab", F, this), i(this, "emptyMessage", M, this), i(this, "recordPagePrefab", V, this), i(this, "playerPagePrefab", x, this), this._hallScript = void 0, this._recordPage = null, this._playerPage = null, this.tuplePool = new c, this.dataList = [], this.resultList = [], this._tupleHeight = 0, this.spawnNum = 16, this.spacing = 3, this.tuples = [], this.updateTimer = 0, this.updateInterval = .2, this.bufferZone = 0, this.lastContentPosY = 0, this._imgGetTime = 0, this._hasFullList = !1, this._searchStr = "", this._limitPerTime = 50, this._buttonLock = !1
        }
        onLoad() {
            this._hallScript = C.instance.getParentScene(u, this.node).getComponentInChildren(d), this._tupleHeight = this.tuplePrefab.data.height
        }
        start() {
            this.node.on(P.showGiftPlayerEvent, (t => {
                this.handleTupleClicked(t.getUserData()), t.propagationStopped = !0
            })), this.node.getComponent(T).initExtendLoader((t => {
                this.handleTupleExtension(t)
            }))
        }
        update(t) {
            this.updateTimer += t, this.updateTimer > this.updateInterval && (this.updateTimer = 0, this.lastContentPosY = this.updateTuplesPosition(this.resultList, this.tuples, this.scrollView, this.lastContentPosY))
        }
        updateTuplesPosition(t, e, i, s) {
            let l = i.content.position.y < s,
                o = (this._tupleHeight + this.spacing) * e.length;
            for (let s = 0; s < e.length; s++) {
                let h = y.getPositionInView(e[s], i.node);
                if (l) {
                    if (h.y < -this.bufferZone && e[s].position.y + o < 0) {
                        e[s].setPosition(e[s].position.x, e[s].position.y + o);
                        let i = e[s].getComponent(_),
                            l = i._tupleId - e.length;
                        i.setInfo(t[l], l, this._imgGetTime)
                    }
                } else if (h.y > this.bufferZone && e[s].position.y - o > -w.getNodeHeight(i.content)) {
                    e[s].setPosition(e[s].position.x, e[s].position.y - o);
                    let i = e[s].getComponent(_),
                        l = i._tupleId + e.length;
                    i.setInfo(t[l], l, this._imgGetTime)
                }
            }
            return i.content.position.y
        }
        searchLocally(t) {
            if (cc_mtt.vv.ConsoleLog.log("gift search locally"), "" !== t) {
                if (this.recycleTuples(), y.checkForSymbols(t)) this.resultList = [];
                else {
                    let e = new RegExp(t);
                    this.resultList = this.dataList.filter((t => e.test(t.userId.toString()) || e.test(t.nickname)))
                }
                this.addList(this.resultList)
            } else this.resultList.length != this.dataList.length && (this.resultList = this.dataList, this.recycleTuples(), this.addList(this.resultList))
        }
        searchByRequest(t) {
            this._hallScript.showLoading(), this._searchStr === this.searchInput.string ? this._hallScript.hidLoading() : "" !== t ? this.requestAssociationMemberShortList(0, this.searchInput.string).then((t => {
                this._hasFullList = t.length < this._limitPerTime, this._searchStr = this.searchInput.string, this.recycleTuples(), this.resultList = this.sortListById(t), this.addList(this.resultList), this._hallScript.hidLoading()
            })).catch((t => {
                this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox(t, void 0)
                }))
            })) : this.resultList.length != this.dataList.length || JSON.stringify(this.resultList) != JSON.stringify(this.dataList) ? (this._hasFullList = !1, this._searchStr = "", this.resultList = this.dataList, this.recycleTuples(), this.addList(this.resultList), this._hallScript.hidLoading()) : this._hallScript.hidLoading()
        }
        onSearchClicked() {
            if (this._buttonLock) return;
            this._buttonLock = !0;
            let t = this.searchInput.string.trim();
            cc_mtt.vv.ConsoleLog.log("gift search:", t), "" === this._searchStr && this._hasFullList ? this.searchLocally(t) : this.searchByRequest(t), this._buttonLock = !1
        }
        addList(t) {
            let e;
            w.setNodeHeight(this.scrollView.content, (this._tupleHeight + this.spacing) * t.length - this.spacing), this.scrollView.content.setPosition(this.scrollView.content.position.x, w.getNodeHeight(this.scrollView.content.parent) / 2), this.bufferZone = .5 * w.getNodeHeight(this.scrollView.node) + 1.5 * this._tupleHeight, this.emptyMessage.active = t.length <= 0;
            for (let i = 0; i < t.length && i < this.spawnNum && this.tuplePool.size() > 0; i++) e = this.tuplePool.get(), e.parent = this.scrollView.content, e.setPosition(0, -this._tupleHeight * (.5 + i) - this.spacing * i), e.getComponent(_).setInfo(t[i], i, this._imgGetTime), this.tuples.push(e)
        }
        createTuples() {
            if (!(this.tuplePool.size() + this.tuples.length >= this.spawnNum))
                for (let t = 0; t < this.spawnNum; ++t) {
                    let t = p(this.tuplePrefab);
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
            this.resultList = this.dataList = [], this.removeTuples()
        }
        sortListById(t) {
            return t.sort(((t, e) => t.userId - e.userId))
        }
        requestAssociationMemberShortList(t = this.resultList.length, e = this._searchStr) {
            return new Promise(((i, s) => {
                let l = {
                    assoId: cc_mtt.vv.DataManager.ownAssociationId,
                    offset: t,
                    search: e
                };
                f.checkNetwork("requestAssociationMemberList") && s(m("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR")), S.requestAssociationMemberShortList(l, (t => {
                    if (t.errorCode) {
                        let e = "ERROR_CODE_PKW." + t.errorCode;
                        s(e)
                    } else cc_mtt.vv.ConsoleLog.log("requestAssociationMemberShortList", t.members.length, this.resultList.length, this.dataList.length, this._searchStr), i(t.members)
                }), (() => {
                    cc_mtt.vv.ConsoleLog.log("onerror:requestAssociationMemberShortList"), s("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR")
                }))
            }))
        }
        setPage() {
            g.isNative && g.os === g.OS.ANDROID && v.getInstance().addBackFunction("GiftPrefab", this.onBackClicked.bind(this)), this._hallScript.showLoading(), this.createTuples(), this._imgGetTime = (new Date).getTime();
            let t = (t, e = []) => {
                this.resultList = this.dataList = e, this.addList(this.resultList), this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox(t, void 0)
                }))
            };
            this._searchStr = "", this.requestAssociationMemberShortList(0, this._searchStr).then((t => {
                cc_mtt.vv.ConsoleLog.log("gift page list", t.length), this._hasFullList = t.length < this._limitPerTime, this.resultList = this.dataList = this.sortListById(t), this.addList(this.resultList), this._hallScript.hidLoading()
            })).catch((e => {
                t(e)
            }))
        }
        resetPage() {
            this.searchInput.string = "", this._hasFullList = !1, this.resultList = this.dataList = [], this.removeList()
        }
        updateContentList(t) {
            t.length < this._limitPerTime && (this._hasFullList = !0), "" === this._searchStr ? this.resultList = this.dataList = this.resultList.concat(t) : this.resultList = this.resultList.concat(t), w.setNodeHeight(this.scrollView.content, w.getNodeHeight(this.scrollView.content) + (this._tupleHeight + this.spacing) * t.length), this.bufferZone = .5 * w.getNodeHeight(this.scrollView.node) + this._tupleHeight
        }
        handleTupleExtension(t) {
            if (this._hasFullList) cc_mtt.vv.ConsoleLog.log("gift page: hasFullList", this.resultList.length), t(!1);
            else {
                let e = !1;
                const i = () => {
                    e = !0, cc_mtt.vv.ConsoleLog.log("hidLoaderOverTime"), t(!1, !0)
                };
                this.scheduleOnce(i, 20), this.requestAssociationMemberShortList(this.resultList.length).then((s => {
                    e || (this.unschedule(i), this.updateContentList(s), t(s.length > 0))
                })).catch((s => {
                    e || (this.unschedule(i), cc_mtt.vv.ConsoleLog.log("handleTupleExtension error:", s), t(!1, !0))
                }))
            }
        }
        handleTupleClicked(t) {
            let e = t;
            e && this.callPlayerPage(e)
        }
        callAPage(t, e, i, s) {
            return this._hallScript.controlHallBlockLayer(!0, this.name), t || ((t = p(e)).parent = i), this._hallScript.movePageFromRight(t, this.node, !0, !1, (() => {
                setTimeout((() => {
                    s instanceof Function && s(t), this._hallScript.controlHallBlockLayer(!1, this.name)
                }), 100 * cc_mtt.vv.DataManager.pageActionSpeed)
            })), t
        }
        callPlayerPage(t) {
            this._playerPage = this.callAPage(this._playerPage, this.playerPagePrefab, this._hallScript.layers[0], (e => {
                e.getComponent(b).setPage(this.node, t)
            }))
        }
        onRecordClicked() {
            this._recordPage = this.callAPage(this._recordPage, this.recordPagePrefab, this._hallScript.layers[0], (t => {
                t.getComponent(L).setPage(this.node, this._imgGetTime)
            }))
        }
        onBackClicked() {
            g.isNative && g.os === g.OS.ANDROID && v.getInstance().removeBackFunction("GiftPrefab"), this._hallScript.controlHallBlockLayer(!0, this.name), this._hallScript.movePageToRight(this.node), setTimeout((() => {
                this.resetPage(), this._hallScript.controlHallBlockLayer(!1, this.name)
            }), 1100 * this._hallScript.pageActionSpeed)
        }
    }).prototype, "searchInput", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(G.prototype, "scrollView", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(G.prototype, "tuplePrefab", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(G.prototype, "emptyMessage", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(G.prototype, "recordPagePrefab", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(G.prototype, "playerPagePrefab", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = G)) || H));
    s._RF.pop()
}