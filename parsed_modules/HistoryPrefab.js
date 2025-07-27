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
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as b from "./ImpokerHall.js";
import * as y from "./HistoryTuplePrefab.js";
import * as L from "./HistoryDetailPrefab.js";
import * as D from "./DropDownMenu.js";
import * as _ from "./Pb.js";
import * as w from "./NodePage.js";
import * as T from "./LoadingBlocker.js";
import * as O from "./Translator.js";
import * as C from "./AndroidBackButton.js";
import * as A from "./CommonTools.js";

function main() {
    var v, I, E, S, M, G, H, k, R, N, B, V, z, Y, F, x, U, Z, K, j;
    o._RF.push({}, "c1408jKhl5E6L+y5fT2v3Dt", "HistoryPrefab", void 0);
    const {
        ccclass: W,
        property: q
    } = h;
    t("HistoryPrefab", (v = q(s), I = q(n), E = q(a), S = q(r), M = q(n), G = q(r), H = q(l), k = q(n), R = q(n), W((V = i((B = class extends p {
        constructor(...t) {
            super(...t), e(this, "currentOptionLabel", V, this), e(this, "dropDownMenu", z, this), e(this, "scrollView", Y, this), e(this, "tuplePrefab", F, this), e(this, "emptyMessage", x, this), e(this, "historyDetailPrefab", U, this), e(this, "backButton", Z, this), e(this, "headerContainer", K, this), e(this, "dropDownButton", j, this), this._hallScript = null, this._historyDetailPage = null, this.dropDownOption = void 0, this._tupleHeight = 0, this.spawnNum = 12, this.spacing = 3, this.tuples = [], this.updateTimer = 0, this.updateInterval = .2, this.bufferZone = 0, this.lastContentPosY = 0, this.dataList = [], this.aList = [], this.toolList = []
        }
        onLoad() {
            this.dropDownOption = [O("GAME_CATEGORY.ALL"), O("GAME_CATEGORY.MTT"), O("GAME_CATEGORY.GEN_PP"), O("GAME_CATEGORY.LOOP_PP"), O("GAME_CATEGORY.SNG"), O("GAME_CATEGORY.SNG_AOF")], cc_mtt.vv.DataManager.webPlatform != _.commonProto.PLATFORM.TRIBAL_PIONEER && this.hideHeader(), this._hallScript = A.instance.getParentScene(c, this.node).getComponentInChildren(b), this._tupleHeight = this.tuplePrefab.data.height
        }
        start() {
            this.node.on("callHistoryDetail", (t => {
                t.propagationStopped = !0, this.callHistoryDetailPage(t.getUserData().tupleDataId, t.getUserData().callback, t.getUserData().skipAnimation)
            })), this.currentOptionLabel.string = this.dropDownOption[0];
            let t = this.dropDownOption.slice(1);
            this.dropDownMenu.getComponent(D).createOptions(t, this.filterHistory.bind(this))
        }
        update(t) {
            this.aList.length < 1 || (this.updateTimer += t, this.updateTimer > this.updateInterval && (this.updateTimer = 0, this.lastContentPosY = this.updateTuplesPosition(this.aList, this.tuples, this.scrollView, this.lastContentPosY)))
        }
        updateTuplesPosition(t, i, e, o) {
            let s = e.content.position.y < o,
                n = (this._tupleHeight + this.spacing) * i.length;
            for (let o = 0; o < i.length; o++) {
                let a = w.getPositionInView(i[o], e.node);
                if (s) {
                    if (a.y < -this.bufferZone && i[o].position.y + n < 0) {
                        i[o].position = new u(i[o].position.x, i[o].position.y + n, i[o].position.z);
                        let e = i[o].getComponent(y),
                            s = e._tupleId - i.length;
                        e.setInfo(t[s], s, this.toolList)
                    }
                } else if (a.y > this.bufferZone && i[o].position.y - n > -e.content.getComponent(d).height) {
                    i[o].position = new u(i[o].position.x, i[o].position.y - n, i[o].position.z);
                    let e = i[o].getComponent(y),
                        s = e._tupleId + i.length;
                    e.setInfo(t[s], s, this.toolList)
                }
            }
            return e.content.position.y
        }
        showDropDownMenu() {
            this.dropDownMenu.getComponent(D).dropDown()
        }
        filterHistory(t) {
            if (!(t == this.currentOptionLabel.string || this.dataList.length < 1)) {
                switch (this.currentOptionLabel.string = t, T.show("HistoryPrefab filterHistory"), this._hallScript.showLoading(), this.removeList(), t) {
                    case this.dropDownOption[1]:
                        this.aList = this.dataList.filter((t => t.TypeId == _.commonProto.GAME_CATEGORY.MTT));
                        break;
                    case this.dropDownOption[2]:
                        this.aList = this.dataList.filter((t => t.TypeId == _.commonProto.GAME_CATEGORY.GEN_PP));
                        break;
                    case this.dropDownOption[3]:
                        this.aList = this.dataList.filter((t => t.TypeId == _.commonProto.GAME_CATEGORY.LOOP_PP));
                        break;
                    case this.dropDownOption[4]:
                        this.aList = this.dataList.filter((t => t.TypeId == _.commonProto.GAME_CATEGORY.SNG && !t.IsAofSng));
                        break;
                    case this.dropDownOption[5]:
                        this.aList = this.dataList.filter((t => t.TypeId == _.commonProto.GAME_CATEGORY.SNG && t.IsAofSng));
                        break;
                    default:
                        this.aList = this.dataList
                }
                this.addList(this.aList), this.scrollView.scrollToTop(.01), this._hallScript.hidLoading(), T.hide("HistoryPrefab filterHistory")
            }
        }
        createHistoryDetailPage(t, i = this.node) {
            this._historyDetailPage || (this._historyDetailPage = g(this.historyDetailPrefab), this._historyDetailPage.parent = t.layers[1]), this._historyDetailPage.getComponent(L)._parentNode = i
        }
        callDetailPage(t, i, e) {
            i.blockLayer.active = !0, this.createHistoryDetailPage(i, e), i.movePageFromRight(this._historyDetailPage, e, !0, !1), setTimeout((() => {
                i.blockLayer.active = !1, this._historyDetailPage.getComponent(L).setPage(t, void 0)
            }), 1100 * i.pageActionSpeed)
        }
        callHistoryDetailPage(t, i, e = !1) {
            this._hallScript.blockLayer.active = !0, this.createHistoryDetailPage(this._hallScript), this._hallScript.movePageFromRight(this._historyDetailPage, this.node, !0, e), setTimeout((() => {
                this._hallScript.blockLayer.active = !1;
                this.aList.filter((i => i.Id == t))[0];
                this._historyDetailPage.getComponent(L).setPage(t, i)
            }), 1100 * this._hallScript.pageActionSpeed)
        }
        setPage(t) {
            f.isNative && f.os === f.OS.ANDROID && C.getInstance().addBackFunction("HistoryPrefab", this.onBackClicked.bind(this)), this._hallScript.showLoading();
            let i = {
                UserId: cc_mtt.vv.DataManager.userId
            };
            this._hallScript.getGameResult(i, (i => {
                cc_mtt.vv.ConsoleLog.log("setPage::history", i), this.aList = this.dataList = i.GameResults.sort(((t, i) => i.EndTime.getTime() - t.EndTime.getTime())), this.getTools(this.dataList, (() => {
                    this.addList(this.dataList), this._hallScript.hidLoading(), t && t instanceof Function && t()
                }))
            }), (() => {
                this.addList([]), this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0)
                }))
            }))
        }
        getTools(t, i) {
            let e = [];
            if (t.forEach((t => {
                    t.PrizeTool && e.push(t.PrizeTool)
                })), e.length > 0) {
                let t = {
                    ToolIds: e
                };
                cc_mtt.vv.DataManager.worldNetwork.getToolsInfo(t, (t => {
                    for (const i of t.ToolInfos) {
                        let t = {};
                        t.ToolId = i.Id, t.Value = i.Value, t.Name = i.Name, this.toolList.push(t)
                    }
                    i && i(this.toolList)
                }))
            } else i && i([])
        }
        resetPage() {
            this.dropDownMenu.getComponent(D).resetDropDownMenu(), this.currentOptionLabel.string = this.dropDownOption[0], this.removeList()
        }
        addList(t) {
            let i;
            this.tuples.length > 0 && this.removeList(), this.scrollView.content.getComponent(d).height = Math.max(0, (this._tupleHeight + this.spacing) * t.length - this.spacing), this.scrollView.content.position = new u(this.scrollView.content.position.x, this.scrollView.content.parent.getComponent(d).height / 2, this.scrollView.content.position.z), this.bufferZone = this.scrollView.node.getComponent(d).height * (this.spawnNum / 16), t.length ? this.emptyMessage.active = !1 : this.emptyMessage.active = !0;
            for (let e = 0; e < this.spawnNum && e < t.length; e++) i = g(this.tuplePrefab), i.parent = this.scrollView.content, i.setPosition(0, -this._tupleHeight * (.5 + e) - this.spacing * e), i.getComponent(y).setInfo(t[e], e, this.toolList), this.tuples.push(i)
        }
        clickTuple(t, i, e = !1) {
            for (let o = 0; o < this.dataList.length; o++) this.dataList[o].Id == t && this.tuples[0].getComponent(y).onTupleClicked(i, e, this.dataList[o])
        }
        removeList() {
            this.tuples = [], this.scrollView.content.destroyAllChildren()
        }
        hideHeader() {
            this.headerContainer.active = !1, this.dropDownButton.active = !1;
            let t = this.scrollView.getComponent(m);
            P(t) && (t.top = 0)
        }
        onBackClicked() {
            f.isNative && f.os === f.OS.ANDROID && C.getInstance().removeBackFunction("HistoryPrefab"), this._hallScript.blockLayer.active = !0, this._hallScript.movePageToRight(this.node), setTimeout((() => {
                this.resetPage(), this._hallScript.blockLayer.active = !1
            }), 1100 * this._hallScript.pageActionSpeed)
        }
    }).prototype, "currentOptionLabel", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = i(B.prototype, "dropDownMenu", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = i(B.prototype, "scrollView", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = i(B.prototype, "tuplePrefab", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = i(B.prototype, "emptyMessage", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = i(B.prototype, "historyDetailPrefab", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = i(B.prototype, "backButton", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = i(B.prototype, "headerContainer", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = i(B.prototype, "dropDownButton", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = B)) || N));
    o._RF.pop()
}