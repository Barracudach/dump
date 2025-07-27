import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./ListView.js";
import * as d from "./cv.js";
import * as h from "./RightItemNewReplayerRenderer.js";
import * as c from "./Holdem_Room_ts.js";
import * as g from "./GameMain.js";
import * as m from "./LobbyHelper.js";
import * as f from "./HandsRecordsManager.js";
import * as R from "./RecordType.js";
import * as p from "./TooltipsManager.js";

function main() {
    var I, w, y, L, b, C, G, v, D;
    n._RF.push({}, "64e5b3Zv39Btbowxx1xkmK/", "RightPanelNewReplayerRenderer", void 0);
    const {
        ccclass: N,
        property: V
    } = r;
    t("RightPanelNewReplayerRenderer", (I = N("RightPanelNewReplayerRenderer"), w = V(l), y = V(a), L = V(s), I((G = e((C = class extends u {
        constructor(...t) {
            super(...t), i(this, "listView", G, this), i(this, "prefabItem", v, this), i(this, "loadingNode", D, this), this.dataList = [], this.roomId = 0, this.currentGameuuid = null, this.currentItemData = null, this.currentIndex = 0, this.gameInstance = null, this.coinMode = 0, this.loadRecord = null
        }
        getGameId() {
            var t;
            return null == (t = this.currentItemData) ? void 0 : t.gameId
        }
        show(t) {
            o(t) && (this.gameInstance = t, t instanceof c && (this.dataList = t.store.getDataRightPanelNewReplayer()), t instanceof g && (this.dataList = t.getDataRightPanelNewReplayer())), this.roomId = m.getRoomId(t), this.updateView()
        }
        autoChoseItemFirstOrCurrent() {
            null == this.currentGameuuid ? this.dataList.length > 0 && this.choseItem(this.dataList[0].gameuuid_js) : this.choseItem(this.currentGameuuid)
        }
        choseItem(t) {
            if (null == t || t == this.currentGameuuid) return;
            let e = t => {
                if (this.currentIndex = this.dataList.findIndex((t => t.gameuuid_js == this.currentGameuuid)), this.currentItemData = this.dataList[this.currentIndex], null != this.currentItemData) {
                    this.currentItemData.isChosing = t;
                    let e = this.getCurrentItemRender();
                    o(e) && e.setHighlight(t)
                }
            };
            null != this.currentGameuuid && e(!1), this.currentGameuuid = t.toString(), e(!0), o(this.gameInstance) && (this.gameInstance instanceof c && this.requestGetRecord(t.toString(), R.Mtt, c.getSelfUserId()), this.gameInstance instanceof g && this.requestGetRecord(t.toString(), R.Cash, this.gameInstance.getUserIDData()))
        }
        requestGetRecord(t, e, i) {
            f.getInstance().getRecord(t, e, this.currentItemData.gameId).then((n => {
                var a;
                t == this.currentGameuuid && (null == (a = this.loadRecord) || a.call(this, n, this.gameInstance));
                this.reLoadRightItemByRecord(n, i, e != R.Cash, t)
            }))
        }
        reLoadRightItemByRecord(t, e, i, n) {
            if (o(t)) {
                const a = this.getItemRenderByGameuuid(n);
                o(a) && null != a.data && a.data.gameuuid_js == n && a.reloadDataByRecord(t, e, i)
            }
        }
        getCurrentItemRender() {
            for (let t = 0; t < this.listView.sv.content.children.length; t++) {
                const e = this.listView.sv.content.children[t];
                if (o(e) && e.active) {
                    let t = e.getComponent(h);
                    if (o(t) && null != t.data && null != this.currentGameuuid && t.data.gameuuid_js == this.currentGameuuid) return t
                }
            }
            return null
        }
        getItemRenderByGameuuid(t) {
            for (let e = 0; e < this.listView.sv.content.children.length; e++) {
                const i = this.listView.sv.content.children[e];
                if (o(i) && i.active) {
                    let e = i.getComponent(h);
                    if (o(e) && null != e.data && null != t && e.data.gameuuid_js == t) return e
                }
            }
            return null
        }
        bindcallfunc(t, e, i) {
            o(t) && t.getComponent(h).init(this, e, this.coinMode)
        }
        onEnable() {
            d.MessageCenter.register("updateRightPanelNewReplayer", this.onUpdateList.bind(this), this), this.showLoading(this.dataList.length <= 0)
        }
        updateView() {
            p.hideAllTooltips(), this.listView.init(this.bindcallfunc.bind(this)), this.listView.notifyDataSetChanged(this.dataList), this.dataList.forEach(((t, e) => {
                null != this.currentGameuuid && t.gameuuid_js == this.currentGameuuid && (this.currentGameuuid = t.gameuuid_js)
            })), this.autoChoseItemFirstOrCurrent(), this.showLoading(this.dataList.length <= 0)
        }
        showLoading(t) {
            o(this.loadingNode) && (this.loadingNode.active = t)
        }
        onUpdateList(t) {
            this.roomId == t.roomId && (this.dataList = t.dataList, this.updateView())
        }
        onDisable() {
            d.MessageCenter.unregister("updateRightPanelNewReplayer", this), this.dataList.forEach(((t, e) => {
                t.isChosing = !1
            }))
        }
        getCurrentItemIndex() {
            return this.dataList.findIndex((t => t == this.currentItemData))
        }
        setCoinMode(t) {
            this.coinMode = t, this.listView.sv.content.children.forEach((e => {
                if (o(e)) {
                    e.getComponent(h).setCoinMode(t)
                }
            }))
        }
    }).prototype, "listView", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(C.prototype, "prefabItem", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(C.prototype, "loadingNode", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = C)) || b));
    n._RF.pop()
}