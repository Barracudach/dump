import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./SlideStepsView.js";
import * as h from "./PageNewReplayerMobile.js";
import * as p from "./HandsRecordsManager.js";
import * as d from "./RecordType.js";
import * as w from "./cv.js";
import * as y from "./NewReplayerHistoryDetail.js";
import * as b from "./NewReplayerTableViewMobile.js";
import * as g from "./NewReplayerMobileUI.js";

function main() {
    var m, R, f, V, D, M, N, I, S, C, T, v, P, B, H, z, k;
    a._RF.push({}, "761f7MJXaxFVKtT5w+f7TNZ", "NewReplayerMobile", void 0);
    const {
        ccclass: A,
        property: U
    } = o;
    e("NewReplayerMobile", (m = A("NewReplayerMobile"), R = U(c), f = U(h), V = U(n), D = U(y), M = U(b), N = U(g), I = U(n), m((T = t((C = class extends l {
        constructor(...e) {
            super(...e), i(this, "slideView", T, this), i(this, "pageNewReplayer", v, this), i(this, "reportHandButton", P, this), this.gameInstance = null, i(this, "newReplayerDetail", B, this), i(this, "tableView", H, this), i(this, "uiView", z, this), i(this, "shareableView", k, this), this.coinMode = 0, this.dataPointInfo = null
        }
        onLoad() {
            this.uiView.setToggleCoinModeCallback(this.onToggleCoinMode.bind(this))
        }
        getShareableViewNode() {
            return this.shareableView
        }
        show(e) {
            this.node.setSiblingIndex(-1), this.gameInstance = e, this.slideView.showPopup(), this.pageNewReplayer.show(e), this.pageNewReplayer.loadRecord = this.loadRecord.bind(this), r(this.uiView) && (this.uiView.switchAnonymousMode = this.switchAnonymousMode.bind(this)), this._checkValidButtons()
        }
        switchAnonymousMode(e) {
            r(this.newReplayerDetail) && this.newReplayerDetail.switchAnonymousMode(e), r(this.tableView) && this.tableView.switchAnonymousMode(e)
        }
        loadRecord(e, t) {
            var i, a, n, o, l, r;
            (this.dataPointInfo = {
                isShortDeck: null == e || null == (i = e.customData) ? void 0 : i.isShortDeck,
                ante: null == e || null == (a = e.customData) ? void 0 : a.ante,
                bigBlind: null == e || null == (n = e.customData) ? void 0 : n.bigBlind,
                currency: null == e || null == (o = e.customData) ? void 0 : o.currency
            }, this.dataPointInfo.bigBlind <= 0 && null != (l = this.pageNewReplayer) && null != (l = l.currentItemData) && l.dataPointInfo) && (this.dataPointInfo = null == (r = this.pageNewReplayer) || null == (r = r.currentItemData) ? void 0 : r.dataPointInfo);
            this.uiView.setHandRecordData(e, this), this.newReplayerDetail.init(e.customDetailData, e.type, this.dataPointInfo, this.coinMode, t), this.tableView.init(e.customData, t, this.uiView, this.pageNewReplayer, this.coinMode, this.dataPointInfo), this.uiView.showCoinModeToggle(!0, this.coinMode >= 1), this.switchAnonymousMode(this.uiView.getStateAnonymous()), setTimeout((() => this.updateShareableViewTransform()), 0)
        }
        updateShareableViewTransform() {
            const e = this.shareableView.getComponent(s),
                t = this.tableView.node.getComponent(s).height + this.newReplayerDetail.getNodeHeight();
            e.setContentSize(new u(e.width, t))
        }
        onToggleCoinMode(e) {
            this.coinMode = e ? 1 : 0, this.tableView.setCoinMode(this.coinMode), this.newReplayerDetail.setCoinMode(this.coinMode)
        }
        _checkValidButtons() {
            r(this.reportHandButton) && (null == this.pageNewReplayer.currentItemData ? this.reportHandButton.active = !1 : this.reportHandButton.active = this.pageNewReplayer.currentItemData.isCash)
        }
        async onReportButtonClicked() {
            if (!r(this.pageNewReplayer)) return;
            const e = await p.getInstance().getRecord(this.pageNewReplayer.currentGameuuid, d.Cash, this.pageNewReplayer.currentItemData.gameId),
                t = w.Number(e.customData.clubId),
                i = e.customData.roomUUIDjs,
                a = e.customData.replayUUID,
                n = e.customData.cashGameId;
            w.worldNet.RequestQuerySendFairReport(t, a, i, n)
        }
    }).prototype, "slideView", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(C.prototype, "pageNewReplayer", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(C.prototype, "reportHandButton", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(C.prototype, "newReplayerDetail", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(C.prototype, "tableView", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(C.prototype, "uiView", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(C.prototype, "shareableView", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = C)) || S));
    a._RF.pop()
}