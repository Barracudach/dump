import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./ImpokerHall.js";
import * as d from "./TranHisScrollViewControl.js";
import * as p from "./httpApis.js";
import * as u from "./NestableScrollView_Inner_ts.js";
import * as w from "./NestableScrollView_Outer_ts.js";
import * as g from "./NodePage.js";
import * as f from "./CommonTools.js";
import * as L from "./NodeTools.js";

function main() {
    var m, _, b, C, V, y, S, T, P, v;
    o._RF.push({}, "5b079MTkLNOJJcGM5pbZP9t", "TransferHistoryPrefab", void 0);
    const {
        ccclass: N,
        property: H
    } = r;
    t("TransferHistoryPrefab", (m = H(w), _ = H([u]), b = H([s]), C = H(s), N((S = i((y = class extends l {
        constructor(...t) {
            super(...t), e(this, "bodyView", S, this), e(this, "scrollViews", T, this), e(this, "options", P, this), e(this, "underline", v, this), this._hallScript = null, this._pageComeFrom = null, this._scrollViewScripts = [], this._updateTimer = 0, this.allList = [], this.withdrawList = [], this.depositList = []
        }
        onLoad() {
            this._hallScript = f.instance.getParentScene(n, this.node).getComponentInChildren(c)
        }
        start() {
            this.optionControl(0);
            for (let t of this.scrollViews) this._scrollViewScripts.push(t.node.getComponent(d));
            this.bodyView.node.on(a.EventType.PAGE_TURNING, (() => {
                this.optionControl(this.bodyView.getCurrentPageIndex())
            }))
        }
        update(t) {
            this._updateTimer += t, this._updateTimer >= .2 && (this._updateTimer = 0, g.hidePagesOutsidePageView(this.bodyView)), g.updateUnderlinePos(this.underline, this.bodyView, this.options.length)
        }
        optionControl(t) {
            for (let i = 0; i < this.options.length; i++) L.changeNodeColor(this.options[i].children[0], i === t ? h.WHITE : (new h).fromHEX("#9B9B9B"));
            this.bodyView.getCurrentPageIndex() !== t && this.bodyView.scrollToPage(t, .3), g.updateContentWidget(this.bodyView.content, t)
        }
        onAllClicked() {
            this.optionControl(0)
        }
        onWithdrawClicked() {
            this.optionControl(1)
        }
        onDepositClicked() {
            this.optionControl(2)
        }
        setPage() {
            this._hallScript.showLoading(), p.requestTransferRecord(cc_mtt.vv.DataManager.userId, (t => {
                cc_mtt.vv.ConsoleLog.log("transfer msg", t), this.allList = t || [], this.allList.forEach(((t, i, e) => {
                    e[i].created = new Date(t.created)
                })), this.allList = t.sort(((t, i) => i.created.getTime() - t.created.getTime())), this.addAllList(), this.depositList = this.allList.filter((t => t.amount >= 0)), this.addDepositList(), this.withdrawList = this.allList.filter((t => t.amount < 0)), this.addWithdrawList(), this._hallScript.hidLoading()
            }))
        }
        resetPage() {
            this.optionControl(0), this.removeList()
        }
        addAllList() {
            this._scrollViewScripts[0].addList(this.allList)
        }
        addWithdrawList() {
            this._scrollViewScripts[1].addList(this.withdrawList)
        }
        addDepositList() {
            this._scrollViewScripts[2].addList(this.depositList)
        }
        removeList() {
            this.allList = [], this.withdrawList = [], this.depositList = [];
            for (let t of this._scrollViewScripts) t.removeList()
        }
        onBackClicked() {
            this._hallScript.controlHallBlockLayer(!0, this.name), this._hallScript.movePageToRight(this.node, this._pageComeFrom), setTimeout((() => {
                this.resetPage(), this._hallScript.controlHallBlockLayer(!1, this.name)
            }), 1100 * this._hallScript.pageActionSpeed)
        }
    }).prototype, "bodyView", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = i(y.prototype, "scrollViews", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), P = i(y.prototype, "options", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), v = i(y.prototype, "underline", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = y)) || V));
    o._RF.pop()
}