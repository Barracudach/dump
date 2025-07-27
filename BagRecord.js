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
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as f from "./CrashTracing.js";
import * as _ from "./CrashTracing.js";
import * as P from "./AndroidBackButton.js";
import * as T from "./BasicScene.js";
import * as L from "./httpApis.js";
import * as m from "./Translator.js";
import * as b from "./BagTuplePrefab.js";
import * as B from "./NodeTools.js";

function main() {
    var k, v, y, I, C, D, R, w, x, A, N, E;
    o._RF.push({}, "461b4CNUGlCILS5C2DZpH60", "BagRecord", void 0);
    const {
        ccclass: V,
        property: H
    } = c;
    t("default", (k = H(s), v = H(n), y = H(a), I = H(l), C = H(r), V((w = e((R = class extends T {
        constructor(...t) {
            super(...t), i(this, "tuplePrefab", w, this), i(this, "listView", x, this), i(this, "emptyLabel", A, this), i(this, "searchBar", N, this), i(this, "searchButton", E, this), this._spacing = 0, this._titleHeight = 0, this._tupleHeight = 0, this._tuplePerPage = 0, this._lastContentY = 0, this._dataList = [], this.dataList = [], this._dialog = null
        }
        onLoad() {
            super.onLoad(), this.initBasicScene()
        }
        onDestroy() {
            super.onDestroy(), this.destroyBasicScene()
        }
        start() {
            let t = this.listView.getComponent(h);
            g(t) && (t.top = 0)
        }
        update(t) {
            if (this.node.active && this.listView.content.children.length > 0) {
                const t = this.listView.content.position.y,
                    e = B.getNodeHeight(this.listView.node),
                    i = t - this._lastContentY,
                    o = i > 0,
                    s = i < 0,
                    n = this.listView.content.children[0],
                    a = this.listView.content.children[this.listView.content.children.length - 1];
                if (o) {
                    if (t + n.position.y > B.getNodeHeight(n)) {
                        const t = n.getComponent(b),
                            e = this.dataList[this._tuplePerPage * ++t._currentPage + t._index],
                            i = "string" == typeof e;
                        void 0 !== e && t.setInfo(e, i, !1, !i), n.setPosition(n.position.x, a.position.y - B.getNodeHeight(a) - this._spacing), n.setSiblingIndex(this.listView.content.children.length)
                    }
                } else if (s && t + a.position.y < -e) {
                    const t = a.getComponent(b),
                        e = this.dataList[this._tuplePerPage * --t._currentPage + t._index],
                        i = "string" == typeof e;
                    void 0 !== e && t.setInfo(e, i, !1, !i), a.setPosition(a.position.x, n.position.y + B.getNodeHeight(a) + this._spacing), a.setSiblingIndex(0)
                }
                this._lastContentY = t
            }
        }
        resetBagRecordPage() {
            this._dialog && (this._dialog.active = !1, this._dialog = null), this.closeAllPopUp(), this.resetPage(), this.setPage()
        }
        setPage(t) {
            d.isNative && d.os === d.OS.ANDROID && P.getInstance().addBackFunction("BagRecordPrefab", this.onBackClicked.bind(this)), this.showLoading(), this.updateToolListHttp((() => {
                g(this) && (cc_mtt.vv.ConsoleLog.log("record check->", cc_mtt.vv.DataManager.backPackToolRecord), this._dataList = this.sortList(), this.addList(), this.hideLoading(), t && t instanceof Function && t())
            }), !0)
        }
        resetPage() {
            this.listView.scrollToTop(0), this.removeList()
        }
        sortList() {
            return cc_mtt.vv.DataManager.backPackToolRecord.sort(((t, e) => (e.Consumed ? e.Consumed.getTime() : (e.Expired || e.Expiry).getTime()) - (t.Consumed ? t.Consumed.getTime() : (t.Expired || t.Expiry).getTime())))
        }
        removeList() {
            this.listView.content.destroyAllChildren()
        }
        addList() {
            let t = {};
            for (let e = 0; e < this._dataList.length; e++) {
                let i = this._dataList[e].Consumed || this._dataList[e].Expired || this._dataList[e].Expiry,
                    o = `${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()}`;
                t.hasOwnProperty(o) || (t[o] = []), t[o].push(this._dataList[e])
            }
            let e = Object.keys(t),
                i = t => {
                    let e = new Date(t),
                        i = cc_mtt.vv.DataManager.getNow();
                    if (e.getFullYear() === i.getFullYear() && e.getMonth() === i.getMonth()) {
                        if (e.getDate() === i.getDate()) return m("PKW_BAG.TODAY");
                        if (e.getDate() === i.getDate() - 1) return m("PKW_BAG.YESTERDAY")
                    }
                    return t
                };
            this.dataList = [];
            for (let o = 0; o < e.length; o++) {
                this.dataList.push(i(e[o]));
                for (let i = 0; i < t[e[o]].length; i++) this.dataList.push(t[e[o]][i])
            }
            this._spacing = this.listView.content.getComponent(p).spacingY, this._titleHeight = this.tuplePrefab.data.getChildByName("tuple_header").height + this._spacing, this._tupleHeight = this.tuplePrefab.data.getChildByName("background").height + this._spacing, this._tuplePerPage = Math.ceil(B.getNodeHeight(this.listView.node) / this._titleHeight) + 1;
            let o = 0;
            const s = this._tuplePerPage,
                n = this.listView.content.children.length;
            let a;
            for (let t = 0; t < s || t < this.dataList.length; t++) {
                t < n ? a = this.listView.content.children[t] : t <= s && (a = u(this.tuplePrefab), a.parent = this.listView.content), a.name = `${t}`;
                const e = a.getComponent(b);
                e.setIndex(t);
                const i = this.dataList[t],
                    l = "string" == typeof i;
                void 0 !== i ? (e.setInfo(i, l, !1, !l), a.setPosition(a.position.x, -o), o += B.getNodeHeight(a) + this._spacing) : a.setPosition(a.position.x, -(o + this._tupleHeight * (t - this.dataList.length))), t === this.dataList.length - 1 && t >= s && (a.parent = null, a.destroy())
            }
            B.setNodeHeight(this.listView.content, o), this.emptyLabel.node.active = 0 === this._dataList.length
        }
        onBackClicked() {
            d.isNative && d.os === d.OS.ANDROID && P.getInstance().removeBackFunction("BagRecordPrefab")
        }
        onSearchClicked() {}
        closeAllPopUp() {
            this.dialogController.hideAllDialogBox()
        }
        callPopUpBox(t, e, i = null, o = "ERROR_CODE_PKW.TITLE") {
            cc_mtt.vv.ConsoleLog.log("callPopUpBox", t), i || (i = [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: e
            }]), this.dialogController.showDialogBox(o, t, !1, i, this.node.parent)
        }
        updateToolListHttp(t, e = !1) {
            let i = [];
            L.requestUserToolInBackPack((o => {
                cc_mtt.vv.ConsoleLog.log("getMyToolIds_RES:", o.ErrorCode, e ? o.ToolConsumptions.length : o.ToolInBackpacks.length);
                for (const t of e ? o.ToolConsumptions : o.ToolInBackpacks) i.push(t.ToolId);
                if (i.length > 0) {
                    let s = {
                        ToolIds: i
                    };
                    L.requestToolInfo(s, (i => {
                        cc_mtt.vv.ConsoleLog.log("getMyToolsInfo_RES:", i.ErrorCode, i.ToolInfos.length);
                        let s = [];
                        for (const t of e ? o.ToolConsumptions : o.ToolInBackpacks) {
                            let o = i.ToolInfos.find((e => e.Id == t.ToolId));
                            if (o) {
                                const i = cc_mtt.vv.DataManager.fillBackPackData(t, o, e);
                                s.push(i)
                            }
                        }
                        e ? cc_mtt.vv.DataManager.backPackToolRecord = s : cc_mtt.vv.DataManager.backPackTool = s, t && t()
                    }), (t => {
                        var e;
                        console.log("httpApis.requestToolInfo onerror"), this.callPopUpBox("WITHDRAW_POPUP.WARNING.NETWORK_FAILURE", (() => {})), null == (e = f.getInstance()) || e.trace(_.RequestToolInfoFail, "RequestToolInfoFail", t)
                    }))
                } else e ? cc_mtt.vv.DataManager.backPackToolRecord = [] : cc_mtt.vv.DataManager.backPackTool = [], t && t()
            }), (t => {
                var e;
                console.log("httpApis.requestUserToolInBackPack onerror"), this.callPopUpBox("WITHDRAW_POPUP.WARNING.NETWORK_FAILURE", (() => {})), null == (e = f.getInstance()) || e.trace(_.RequestToolBackPackFail, "RequestToolBackPackFail", t)
            }))
        }
    }).prototype, "tuplePrefab", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(R.prototype, "listView", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(R.prototype, "emptyLabel", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(R.prototype, "searchBar", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(R.prototype, "searchButton", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = R)) || D));
    o._RF.pop()
}