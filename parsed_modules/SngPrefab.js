import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as P from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as m from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as L from "./cc.js";
import * as T from "./cc.js";
import * as b from "./mttconfig.js";
import * as O from "./ImpokerHall.js";
import * as I from "./NestableScrollView_Outer_ts.js";
import * as w from "./NestableScrollView_Inner_ts.js";
import * as C from "./NodePage.js";
import * as v from "./GameListTuple.js";
import * as k from "./QuickToEnterBox.js";
import * as y from "./Pb.js";
import * as B from "./AndroidBackButton.js";
import * as N from "./CommonTools.js";

function main() {
    var D, A, V, M, x, G, H, R, W, z, U, Y, F, q, Q, Z, X, K, j, J, $, tt, et, it, st, ot, nt, at, rt, lt;
    s._RF.push({}, "6472fXvY7dJ+51l9u6zUtsA", "SngPrefab", void 0);
    const {
        ccclass: ht,
        property: gt
    } = h, ct = o({
        ALL: 0,
        LIST_ONE: 1,
        LIST_TWO: 2
    }), ut = t("SORT_STATUS", o({
        DOWN_NON: 0,
        DOWN_SPACE: 1,
        UP_NON: 2,
        UP_SPACE: 3
    }));
    t("SngPrefab", (D = gt(n), A = gt(I), V = gt([w]), M = gt([a]), x = gt(a), G = gt(r), H = gt(l), R = gt([a]), W = gt(a), z = gt(a), U = gt([a]), Y = gt(a), F = gt(a), q = gt(r), ht((X = e((Z = class extends g {
        constructor(...t) {
            super(...t), i(this, "headerLabel", X, this), i(this, "pageView", K, this), i(this, "pageScrollViews", j, this), i(this, "subHeader", J, this), i(this, "underline", $, this), i(this, "tuplePrefab", tt, this), i(this, "backButton", et, this), i(this, "levelSortBtns", it, this), i(this, "spaceSortBtns", st, this), i(this, "quickToEnterBtns", ot, this), i(this, "emptyMessage", nt, this), i(this, "loader", at, this), i(this, "sngBlocker", rt, this), i(this, "quickToEnterBoxPrefab", lt, this), this._tupleHeight = 0, this._remarkHeight = 0, this.spawnNum = 12, this.spacing = 0, this.sngListOne = [], this.sngListTwo = [], this.sngLOneTuples = [], this.sngLTwoTuples = [], this.listOneRemarkList = [], this.listTwoRemarkList = [], this.updateTimer = 0, this.updateInterval = .2, this.bufferZone = 0, this.sngLOneLastContentPosY = 0, this.sngLTwoLastContentPosY = 0, this.initYPos = 0, this.stopYPos = 0, this.maxYPos = 0, this._hallScript = void 0, this.quickToEnterBox = null
        }
        onLoad() {
            this._tupleHeight = this.tuplePrefab.data.height, this._remarkHeight = this.tuplePrefab.data.getComponent(v).remark.node.parent.height, this._hallScript = N.instance.getParentScene(c, this.node).getComponentInChildren(O), this.initLoading(), this.showAllEmptyMessage()
        }
        start() {
            this.pageView.node.on(u.EventType.PAGE_TURNING, (() => {
                this.onChangedPage(this.pageView.getCurrentPageIndex())
            }))
        }
        update(t) {
            if (C.updateUnderlinePos(this.underline, this.pageView, this.subHeader.length), !(!1 === this.node.active || this.sngListOne.length < 1 && this.sngListTwo.length < 1) && (this.updateTimer += t, this.updateTimer > this.updateInterval))
                if (this.updateTimer = 0, 0 === this.pageView.getCurrentPageIndex()) {
                    let t = this.pageScrollViews[0];
                    this.sngLOneLastContentPosY = this.updateTuplesPosition(b.GAME_LEVEL_LIST_ID.SNG, this.sngListOne, this.sngLOneTuples, t, this.listOneRemarkList, this.sngLOneLastContentPosY)
                } else {
                    let t = this.pageScrollViews[1];
                    this.sngLTwoLastContentPosY = this.updateTuplesPosition(b.GAME_LEVEL_LIST_ID.AOF, this.sngListTwo, this.sngLTwoTuples, t, this.listTwoRemarkList, this.sngLTwoLastContentPosY)
                }
        }
        updateTuplesPosition(t, e, i, s, o, n) {
            let a = s.content.position.y < n;
            for (let n = 0; n < i.length; n++) {
                let r = C.getPositionInView(i[n], s.node);
                if (a) {
                    if (r.y < -this.bufferZone) {
                        let s = i[n].getComponent(v),
                            a = s._tupleId - i.length;
                        a >= 0 && (s.updateInfo(e[a], t, a), i[n].position = new p(i[n].position.x, -this._tupleHeight * (.5 + a) - this.spacing * a - o[a], i[n].position.z))
                    }
                } else if (r.y > this.bufferZone) {
                    let s = i[n].getComponent(v),
                        a = s._tupleId + i.length;
                    a < e.length && (s.updateInfo(e[a], t, a), i[n].position = new p(i[n].position.x, -this._tupleHeight * (.5 + a) - this.spacing * a - o[a], i[n].position.z))
                }
            }
            return s.content.position.y
        }
        initLoading() {
            let t;
            this.initYPos = this.loader.position.y, this.stopYPos = this.loader.position.y - 1.8 * this.loader.getComponent(L).height - 100, this.maxYPos = this.loader.position.y - this._tupleHeight - 2 * this.spacing - this.loader.getComponent(L).height / 2 - 100, this.loader.active = !1, this.sngBlocker.active = !1;
            const e = e => {
                    if (t = this.pageScrollViews[this.pageView.getCurrentPageIndex()], !this.loader.active && t.getScrollOffset().y <= 0 && !this.pageView.m_isMoving ? (this.loader.active = !0, t.scrollToTop(.01), t.vertical = !1) : this.loader.active && this.loader.position.y == this.initYPos && (t.vertical = !0, this.loader.active = !1), 1 == this.loader.active) {
                        this.sngBlocker.active = !0, this.loader.angle = 720 * (this.initYPos - this.loader.getPosition().y) / (this.initYPos - this.maxYPos);
                        let t = e.getDeltaY();
                        t > 0 ? this.loader.setPosition(this.loader.position.x, Math.min(this.loader.position.y + t, this.initYPos)) : this.loader.setPosition(this.loader.position.x, Math.max(this.loader.position.y + t, this.maxYPos))
                    } else this.sngBlocker.active = !1
                },
                i = () => {
                    if (t = this.pageScrollViews[this.pageView.getCurrentPageIndex()], 1 == this.loader.active) {
                        let t = c.getScene().getComponentInChildren(O);
                        if (t.controlHallBlockLayer(!0, this.name), this.loader.position.y > this.stopYPos) {
                            let e = t.blockLayer.getComponent(P).opacity;
                            t.blockLayer.getComponent(P).opacity = 0, E(this.loader).to(.1, {
                                position: m(this.loader.getPosition().x, this.initYPos, this.loader.getPosition().z)
                            }).call((() => {
                                this.loader.setPosition(m(this.loader.getPosition().x, this.initYPos, this.loader.getPosition().z)), this.loader.active = !1, t.controlHallBlockLayer(!1, this.name), this.sngBlocker.active = !1, t.blockLayer.getComponent(P).opacity = e
                            })).start()
                        } else if (this.loader.position.y <= this.stopYPos) {
                            let e = E().by(.35, {
                                angle: 360
                            }).repeatForever();
                            const i = () => {
                                setTimeout((() => {
                                    E(this.loader).to(.2, {
                                        scale: m(p.ZERO)
                                    }).call((() => {
                                        f.stopAllByTarget(this.loader), this.loader.setPosition(m(this.loader.position.x, this.initYPos, this.loader.position.z)), this.loader.setScale(m(p.ONE)), this.loader.active = !1, this.sngBlocker.active = !1, t.controlHallBlockLayer(!1, this.name)
                                    })).start()
                                }), 200)
                            };
                            E(this.loader).to(.1, {
                                position: m(this.loader.position.x, this.stopYPos, this.loader.position.z)
                            }).call((() => {
                                this.loader.setPosition(m(this.loader.position.x, this.stopYPos, this.loader.position.z)), e.target(this.loader).start();
                                let s = {
                                        ListId: 0 === this.pageView.getCurrentPageIndex() ? b.GAME_LEVEL_LIST_ID.SNG : b.GAME_LEVEL_LIST_ID.AOF
                                    },
                                    o = !1,
                                    n = () => {
                                        clearTimeout(a), o || (this.addList(0 === this.pageView.getCurrentPageIndex() ? ct.LIST_ONE : ct.LIST_TWO), i())
                                    },
                                    a = setTimeout((() => {
                                        o = !0, cc_mtt.vv.ConsoleLog.log("update sngList failed"), i()
                                    }), 2e4);
                                t.getLevelList("SngPrefab initLoading", s, n, n, !1)
                            })).start()
                        } else this.loader.active = !1, this.sngBlocker.active = !1, t.controlHallBlockLayer(!1, this.name)
                    }
                    0 == t.vertical && (t.vertical = !0)
                };
            for (let t of this.pageScrollViews) t.node.on(a.EventType.TOUCH_MOVE, (t => {
                e(t)
            }), this), t.node.on(a.EventType.TOUCH_CANCEL, (() => {
                i()
            }), this), t.node.on(a.EventType.TOUCH_END, (() => {
                i()
            }), this)
        }
        onChangedPage(t, e) {
            for (let e = 0; e < this.subHeader.length; e++) this.subHeader[e].children[0].getComponent(d).color = e === t ? S.WHITE : (new S).fromHEX("#9B9B9B");
            this.pageView.getCurrentPageIndex() !== t && this.pageView.scrollToPage(t, .3), C.updateContentWidget(this.pageView.content, t)
        }
        onClickHoldem() {
            this.onChangedPage(0)
        }
        onClickOmaha() {
            this.onChangedPage(1)
        }
        changeColor(t) {
            return t ? S.WHITE : S.WHITE.fromHEX("#9B9B9B")
        }
        updateLevelButton(t, e) {
            this.levelSortBtns[e].children[0].getComponent(d).color = this.changeColor(!t), this.levelSortBtns[e].children[1].getComponent(d).color = this.changeColor(t)
        }
        updateSpaceButton(t, e) {
            this.spaceSortBtns[e].getComponent(d).color = this.changeColor(t)
        }
        updateQuickToEnterButton(t, e) {
            this.quickToEnterBtns[e].children[0].getComponent(d).color = this.changeColor(t), this.quickToEnterBtns[e].getComponent(l).enabled = t
        }
        updateSortStatus(t, e) {
            cc_mtt.vv.DataManager.sngSortStatus[t] = e
        }
        getSortStatus(t) {
            return cc_mtt.vv.DataManager.sngSortStatus[t]
        }
        resetSortStatus() {
            for (let t = 0; t < this.pageView.content.children.length; t++) cc_mtt.vv.DataManager.sngSortStatus[t] = ut.DOWN_NON, this.updateSpaceButton(!1, t), this.updateLevelButton(!0, t)
        }
        categorizeByStatus(t) {
            let e = [],
                i = [];
            for (let s of t) switch (s.Detail.Status) {
                case 0:
                    e.push(s);
                    break;
                case 1:
                case 101:
                    i.push(s)
            }
            return [e.sort(((t, e) => t.Detail.Id - e.Detail.Id)), i.sort(((t, e) => t.Detail.Id - e.Detail.Id))]
        }
        sortBySubLevel(t, e = !1) {
            return t.sort(((t, e) => e.Detail.RegFee - t.Detail.RegFee)), e && t.reverse(), t
        }
        sortByLevel(t, e = !1) {
            let [i, s] = this.categorizeByStatus(t);
            return i = this.sortBySubLevel(i, e), s = this.sortBySubLevel(s, e), i.concat(s)
        }
        sortBySpace(t, e = !1) {
            let [i, s] = this.categorizeByStatus(t);
            i.sort(((t, e) => t.Detail.Seats - t.CurrentPlayers - (e.Detail.Seats - e.CurrentPlayers))), s = this.sortBySubLevel(s, e);
            let o = [];
            for (let t of i)
                if (o.length < 1) o.push([t]);
                else {
                    let e = o[o.length - 1][0];
                    e.Detail.Seats - e.CurrentPlayers === t.Detail.Seats - t.CurrentPlayers ? o[o.length - 1].push(t) : o.push([t])
                } for (let t of o) t = this.sortBySubLevel(t, e);
            return o.reduce(((t, e) => t.concat(e)), []).concat(s)
        }
        sortList(t, e, i = this.pageView.getCurrentPageIndex(), s = !1) {
            this.getSortStatus(i);
            switch (s && this.updateSortStatus(i, e), e) {
                case ut.DOWN_NON:
                    t = this.sortByLevel(t);
                    break;
                case ut.DOWN_SPACE:
                    t = this.sortBySpace(t);
                    break;
                case ut.UP_NON:
                    t = this.sortByLevel(t, !0);
                    break;
                case ut.UP_SPACE:
                    t = this.sortBySpace(t, !0)
            }
            return this.updateLevelButton(e === ut.DOWN_SPACE || e === ut.DOWN_NON, i), this.updateSpaceButton(e === ut.DOWN_SPACE || e === ut.UP_SPACE, i), t
        }
        onSortByLevelClicked() {
            let t = 0 === this.pageView.getCurrentPageIndex() ? ct.LIST_ONE : ct.LIST_TWO;
            switch (this.getSortStatus(this.pageView.getCurrentPageIndex())) {
                case ut.DOWN_NON:
                    this.updateList(t, ut.UP_NON);
                    break;
                case ut.DOWN_SPACE:
                    this.updateList(t, ut.UP_SPACE);
                    break;
                case ut.UP_NON:
                    this.updateList(t, ut.DOWN_NON);
                    break;
                case ut.UP_SPACE:
                    this.updateList(t, ut.DOWN_SPACE)
            }
        }
        onSortBySpaceClicked() {
            let t = 0 === this.pageView.getCurrentPageIndex() ? ct.LIST_ONE : ct.LIST_TWO;
            switch (this.getSortStatus(this.pageView.getCurrentPageIndex())) {
                case ut.DOWN_NON:
                    this.updateList(t, ut.DOWN_SPACE);
                    break;
                case ut.DOWN_SPACE:
                    this.updateList(t, ut.DOWN_NON);
                    break;
                case ut.UP_NON:
                    this.updateList(t, ut.UP_SPACE);
                    break;
                case ut.UP_SPACE:
                    this.updateList(t, ut.UP_NON)
            }
        }
        handleOnEnterClicked(t, e) {
            this._hallScript.showLoading();
            let i = 0 === this.pageView.getCurrentPageIndex();
            this.updateListData((() => {
                let e = (i ? cc_mtt.vv.DataManager.GAME_LEVEL_LIST.commonProto.SngTournaments : cc_mtt.vv.DataManager.GAME_LEVEL_LIST.AofTournaments).filter((e => C.roundValue(e.Detail.RegFee + e.Detail.SrvFee) == t && e.Detail.Status === y.commonProto.SNG_GAME_STATUS.SNG_NOT_STARTED));
                if (cc_mtt.vv.ConsoleLog.log("SNG enterList", e.length, t), e.length > 0) {
                    let t = e.sort(((t, e) => t.Detail.Id - e.Detail.Id)).reduce(((t, e) => t.Detail.Seats - t.CurrentPlayers < e.Detail.Seats - e.CurrentPlayers ? t : e)),
                        s = i ? b.GAME_LEVEL_LIST_ID.SNG : b.GAME_LEVEL_LIST_ID.AOF;
                    this._hallScript.callGameView(t.Detail.GameMode, s, t)
                } else this.addList(i ? ct.LIST_ONE : ct.LIST_TWO), this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox("POPUP_HINTS.GAME_LIST.NO_MATCHED_GAME", void 0)
                }))
            }), (() => {
                this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0)
                }))
            }))
        }
        getOptionList(t) {
            t.sort(((t, e) => t.Detail.RegFee - e.Detail.RegFee));
            let e = [];
            return t.forEach((t => {
                if (e.length < 1) e.push(t.Detail.RegFee + t.Detail.SrvFee);
                else {
                    let i = t.Detail.RegFee + t.Detail.SrvFee;
                    e[e.length - 1] != i && e.push(i)
                }
            })), e
        }
        onQuickToEnterClicked() {
            let t = 0 === this.pageView.getCurrentPageIndex() ? this.sngListOne.slice() : this.sngListTwo.slice();
            if (t.length < 1) return;
            this.quickToEnterBox || (this.quickToEnterBox = _(this.quickToEnterBoxPrefab), this.quickToEnterBox.parent = this.node);
            let e = this.getOptionList(t);
            this.quickToEnterBox.getComponent(k).callBox(e, ((t, e) => {
                this._hallScript.checkAgent((() => {
                    this.handleOnEnterClicked(t, e)
                }), this.node)
            }))
        }
        updateListData(t, e) {
            if (0 === this.pageView.getCurrentPageIndex()) {
                let i = {
                    ListId: b.GAME_LEVEL_LIST_ID.SNG
                };
                this._hallScript.getLevelList("sngList", i, t, e)
            } else {
                let i = {
                    ListId: b.GAME_LEVEL_LIST_ID.AOF
                };
                this._hallScript.getLevelList("aofList", i, t, e)
            }
        }
        updateSubList(t, e, i) {
            let s;
            for (let o = 0; o < i.length; o++) {
                s = i[o];
                let n = s.getComponent(v);
                n.updateInfo(e[n._tupleId], t, n._tupleId)
            }
        }
        updateList(t, e) {
            const i = () => {
                    this.sngListOne = this.sortList(this.sngListOne, e, 0, !0), this.updateSubList(b.GAME_LEVEL_LIST_ID.SNG, this.sngListOne, this.sngLOneTuples)
                },
                s = () => {
                    this.sngListTwo = this.sortList(this.sngListTwo, e, 1, !0), this.updateSubList(b.GAME_LEVEL_LIST_ID.AOF, this.sngListTwo, this.sngLTwoTuples)
                };
            switch (t) {
                case ct.LIST_ONE:
                    i();
                    break;
                case ct.LIST_TWO:
                    s();
                    break;
                default:
                    i(), s()
            }
        }
        getSubRemarkList(t) {
            let e = [],
                i = 0;
            for (let s = 0; s < t.length; s++) e.push(t[s].remark ? (i += this._remarkHeight) - this._remarkHeight / 2 : i);
            return [e, i]
        }
        addSubList(t, e, i, s, o) {
            let n, a, r;
            o.active = e.length <= 0, [a, n] = this.getSubRemarkList(e), s.getComponent(L).height = Math.max(0, (this._tupleHeight + this.spacing) * e.length - this.spacing + n), s.position = new p(s.position.x, s.parent.getComponent(L).height / 2, s.position.z);
            for (let o = 0; o < this.spawnNum && o < e.length; o++) r = _(this.tuplePrefab), r.parent = s, r.setPosition(0, -this._tupleHeight * (.5 + o) - this.spacing * o - a[o]), r.getComponent(v).updateInfo(e[o], t, o), i.push(r);
            return a
        }
        addList(t = ct.ALL) {
            this.bufferZone = .5 * this.pageScrollViews[0].node.getComponent(L).height + this._tupleHeight;
            const e = () => {
                    this.sngListOne.length > 0 && this.removeList(ct.LIST_ONE), this.sngListOne = cc_mtt.vv.DataManager.GAME_LEVEL_LIST.commonProto.SngTournaments, this.sngListOne || (this.sngListOne = []), this.updateQuickToEnterButton(this.sngListOne.length > 0, 0), this.sngListOne = this.sortList(this.sngListOne, this.getSortStatus(0), 0), this.listOneRemarkList = this.addSubList(b.GAME_LEVEL_LIST_ID.SNG, this.sngListOne, this.sngLOneTuples, this.pageScrollViews[0].content, this.emptyMessage[0])
                },
                i = () => {
                    this.sngListTwo.length > 0 && this.removeList(ct.LIST_TWO), this.sngListTwo = cc_mtt.vv.DataManager.GAME_LEVEL_LIST.AofTournaments, this.sngListTwo || (this.sngListTwo = []), this.updateQuickToEnterButton(this.sngListTwo.length > 0, 1), this.sngListTwo = this.sortList(this.sngListTwo, this.getSortStatus(1), 1), this.listTwoRemarkList = this.addSubList(b.GAME_LEVEL_LIST_ID.AOF, this.sngListTwo, this.sngLTwoTuples, this.pageScrollViews[1].content, this.emptyMessage[1])
                };
            switch (t) {
                case ct.LIST_ONE:
                    e();
                    break;
                case ct.LIST_TWO:
                    i();
                    break;
                default:
                    e(), i()
            }
        }
        showAllEmptyMessage() {
            this.emptyMessage.forEach((t => {
                t.active = !0
            }))
        }
        returnToPage() {
            let t = cc_mtt.vv.DataManager.gameMode == b.GAME_LEVEL_LIST_ID.AOF ? 1 : 0;
            this.onChangedPage(t)
        }
        setPage(t) {
            T.isNative && T.os === T.OS.ANDROID && B.getInstance().addBackFunction("SngPrefab", this.onBackClicked.bind(this)), this._hallScript.showLoading();
            const e = () => {
                    this.addList(), this.returnToPage(), t && t instanceof Function && t(), this._hallScript.blockLayer.active && this._hallScript.controlHallBlockLayer(!1, this.name), this._hallScript.hidLoading()
                },
                i = () => {
                    let t = {
                        ListId: b.GAME_LEVEL_LIST_ID.AOF
                    };
                    this._hallScript.getLevelList("aofList", t, e, e)
                };
            let s = {
                ListId: b.GAME_LEVEL_LIST_ID.SNG
            };
            this._hallScript.getLevelList("sngList", s, i, i)
        }
        resetPage() {
            this.removeList(), this.showAllEmptyMessage(), this.resetSortStatus()
        }
        removeList(t = ct.ALL) {
            const e = () => {
                    this.sngLOneTuples = [], this.sngListOne = [], this.pageScrollViews[0].content.destroyAllChildren()
                },
                i = () => {
                    this.sngLTwoTuples = [], this.sngListTwo = [], this.pageScrollViews[1].content.destroyAllChildren()
                };
            switch (t) {
                case ct.LIST_ONE:
                    e();
                    break;
                case ct.LIST_TWO:
                    i();
                    break;
                default:
                    e(), i()
            }
        }
        onBackClicked() {
            T.isNative && T.os === T.OS.ANDROID && B.getInstance().removeBackFunction("SngPrefab"), cc_mtt.vv.DataManager.init(), this._hallScript.controlHallBlockLayer(!0, this.name), this._hallScript.movePageToRight(this.node), setTimeout((() => {
                this.resetPage(), this.pageView.scrollToPage(0, 0), this._hallScript.controlHallBlockLayer(!1, this.name), this._hallScript.getLevelList("SngPrefab onBackClicked", "", (() => {
                    this._hallScript.updateTableNum()
                }), (() => {}))
            }), 1100 * this._hallScript.pageActionSpeed)
        }
    }).prototype, "headerLabel", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(Z.prototype, "pageView", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(Z.prototype, "pageScrollViews", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), J = e(Z.prototype, "subHeader", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), $ = e(Z.prototype, "underline", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(Z.prototype, "tuplePrefab", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(Z.prototype, "backButton", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(Z.prototype, "levelSortBtns", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), st = e(Z.prototype, "spaceSortBtns", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ot = e(Z.prototype, "quickToEnterBtns", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), nt = e(Z.prototype, "emptyMessage", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), at = e(Z.prototype, "loader", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(Z.prototype, "sngBlocker", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(Z.prototype, "quickToEnterBoxPrefab", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = Z)) || Q));
    s._RF.pop()
}