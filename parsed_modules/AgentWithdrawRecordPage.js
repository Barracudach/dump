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
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as m from "./DateSelectionPopUp.js";
import * as L from "./ImpokerHall.js";
import * as w from "./agent.js";
import * as _ from "./observer.js";
import * as b from "./observer.js";
import * as P from "./Translator.js";
import * as R from "./AgentWithdrawRecordTuple.js";
import * as A from "./NodePage.js";
import * as v from "./httpApis.js";
import * as y from "./AndroidBackButton.js";
import * as C from "./CommonTools.js";

function main() {
    var S, B, I, T, k, V, W, D, E, N, O, U, M, z;
    o._RF.push({}, "425db9DotdAm61uAqNN3xkN", "AgentWithdrawRecordPage", void 0);
    const {
        ccclass: H,
        property: x
    } = h;
    t("AgentWithdrawRecordPage", (S = x(s), B = x(n), I = x(r), T = x(a), k = x(l), V = x(l), H(W = b((E = e((D = class extends c {
        constructor(...t) {
            super(...t), i(this, "backButton", E, this), i(this, "dateButtonLabel", N, this), i(this, "scrollView", O, this), i(this, "tuplePrefab", U, this), i(this, "emptyMessage", M, this), i(this, "popUp", z, this), this._hallScript = null, this._parentPage = null, this._tupleHeight = 0, this.spawnNum = 15, this.spacing = 3, this.tuples = [], this.updateTimer = 0, this.updateInterval = .2, this.bufferZone = 0, this.lastContentPosY = 0, this.dataList = [], this.aList = [], this.store = void 0
        }
        onLoad() {
            this._hallScript = C.instance.getParentScene(p, this.node).getComponentInChildren(L), this.dateButtonLabel.string = P("GAME_CATEGORY.ALL"), this._tupleHeight = this.tuplePrefab.data.height, this.store = new w
        }
        update(t) {
            this.aList.length < 1 || (this.updateTimer += t, this.updateTimer > this.updateInterval && (this.updateTimer = 0, this.lastContentPosY = this.updateTuplesPosition(this.aList, this.tuples, this.scrollView, this.lastContentPosY)))
        }
        updateTuplesPosition(t, e, i, o) {
            let s = i.content.position.y < o,
                n = (this._tupleHeight + this.spacing) * e.length;
            for (let o = 0; o < e.length; o++) {
                let r = A.getPositionInView(e[o], i.node);
                if (s) {
                    if (r.y < -this.bufferZone && e[o].position.y + n < 0) {
                        e[o].position = new d(e[o].position.x, e[o].position.y + n, e[o].position.z);
                        let i = e[o].getComponent(R),
                            s = i._tupleId - e.length;
                        i.setInfo(t[s], s)
                    }
                } else if (r.y > this.bufferZone && e[o].position.y - n > -i.content.getComponent(u).height) {
                    e[o].position = new d(e[o].position.x, e[o].position.y - n, e[o].position.z);
                    let i = e[o].getComponent(R),
                        s = i._tupleId + e.length;
                    i.setInfo(t[s], s)
                }
            }
            return i.content.position.y
        }
        getPositionInView(t) {
            let e = t.parent.getComponent(u).convertToWorldSpaceAR(t.position);
            return this.scrollView.node.getComponent(u).convertToNodeSpaceAR(e)
        }
        setPage() {
            g.isNative && g.os === g.OS.ANDROID && y.getInstance().addBackFunction("AgentWithdrawRecordPage", this.onBackClicked.bind(this)), this.requestAssociationWithdrawRecordsPage()
        }
        resetPage() {
            this.dateButtonLabel.string = P("GAME_CATEGORY.ALL"), this.popUp.active = !1, this.removeList()
        }
        handleRecordsUpdate() {
            this.aList = this.dataList = this.store.withdrawRecords, this.scrollView.content.children.length < 1 && this.addList(this.dataList)
        }
        addList(t) {
            let e;
            this.scrollView.content.getComponent(u).height = Math.max(0, (this._tupleHeight + this.spacing) * t.length - this.spacing), this.scrollView.content.position = new d(this.scrollView.content.position.x, this.scrollView.content.parent.getComponent(u).height / 2, this.scrollView.content.position.z), this.bufferZone = .6 * this.scrollView.node.getComponent(u).height, t.length ? this.emptyMessage.active = !1 : this.emptyMessage.active = !0;
            for (let i = 0; i < this.spawnNum && i < t.length; i++) e = f(this.tuplePrefab), e.parent = this.scrollView.content, e.setPosition(0, -this._tupleHeight * (.5 + i) - this.spacing * i), e.getComponent(R).setInfo(t[i], i), this.tuples.push(e)
        }
        removeList() {
            this.tuples = [], this.scrollView.content.destroyAllChildren()
        }
        filter(t) {
            let e = this.dataList.filter((e => e.date >= t));
            this.removeList(), this.aList = e, this.addList(this.aList)
        }
        onSelectDateClicked() {
            this.popUp.getComponent(m).setPopUp()
        }
        onSelectAllClicked() {
            this.aList.length != this.dataList.length && (this.removeList(), this.aList = this.dataList, this.addList(this.aList)), this.dateButtonLabel.string = P("GAME_CATEGORY.ALL")
        }
        onBackClicked() {
            g.isNative && g.os === g.OS.ANDROID && y.getInstance().removeBackFunction("AgentWithdrawRecordPage"), this._hallScript.controlHallBlockLayer(!0, this.name), this._hallScript.movePageToRight(this.node, this._parentPage), setTimeout((() => {
                this.resetPage(), this._hallScript.controlHallBlockLayer(!1, this.name)
            }), 1100 * this._hallScript.pageActionSpeed)
        }
        requestAssociationWithdrawRecordsPage() {
            this._hallScript.showLoading();
            let t = {
                assoId: cc_mtt.vv.DataManager.ownAssociationId
            };
            cc_mtt.vv.ConsoleLog.log("assoWithdrawRecords_SEND", t.assoId > 0), v.requestAssociationWithdrawRecords(t, (t => {
                cc_mtt.vv.ConsoleLog.log("assoWithdrawRecords_RES:", t && t.records ? t.records.length : "empty record"), t.errorCode ? this._hallScript.hidLoading((() => {
                    let e = "ERROR_CODE_PKW." + t.errorCode;
                    this._hallScript.callPopUpBox(e, void 0)
                })) : (this.store.reloadWithdrawRecords(t), this._hallScript.hidLoading())
            }), (() => {
                cc_mtt.vv.ConsoleLog.log("onerror:requestAssociationWithdrawRecords"), this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0)
                }))
            }))
        }
    }).prototype, "backButton", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(D.prototype, "dateButtonLabel", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(D.prototype, "scrollView", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(D.prototype, "tuplePrefab", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(D.prototype, "emptyMessage", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(D.prototype, "popUp", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), e(D.prototype, "handleRecordsUpdate", [_], Object.getOwnPropertyDescriptor(D.prototype, "handleRecordsUpdate"), D.prototype), W = D)) || W) || W));
    o._RF.pop()
}