import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as h from "./RightPanelNewReplayerRenderer.js";
import * as d from "./NewReplayerHistoryDetail.js";
import * as p from "./NewReplayerTableViewLandscape.js";
import * as g from "./NewReplayerLandcapeUI.js";
import * as w from "./GameSceneInstance.js";
import * as b from "./Audit.js";
import * as f from "./CommonTools.js";

function main() {
    var m, y, R, D, I, M, P, S, _, v, C, V, A, B, T, U, N, k, L;
    n._RF.push({}, "545d6kJHhNB+KgEI6Ub/Smk", "NewReplayerLandscape", void 0);
    const {
        ccclass: z,
        property: E
    } = s;
    e("NewReplayerLandscape", (m = z("NewReplayerLandscape"), y = E(d), R = E(h), D = E(p), I = E(g), M = E(g), P = E(a), S = E(a), _ = E(o), m((V = t((C = class extends r {
        constructor(...e) {
            super(...e), i(this, "newReplayerDetail", V, this), i(this, "rightPanel", A, this), i(this, "tableView", B, this), i(this, "tableViewUI", T, this), this.coinMode = 0, this.dataPointInfo = null, i(this, "replayerUI", U, this), i(this, "shareableView", N, this), i(this, "browserBackButton", k, this), i(this, "prefab_report", L, this), this.gameSceneInstance = null, this.gameDataInstance = null, this.scene = null
        }
        onLoad() {
            this.setupBrowser(), this.tableViewUI.setToggleCoinModeCallback(this.onToggleCoinMode.bind(this)), c.MessageCenter.register("show_Audit", this.showAudit.bind(this), this.node), c.MessageCenter.register("show_Audit_fail", this.showAuditFail.bind(this), this.node), c.MessageCenter.register("audit_report_response", this.onReportResponse.bind(this), this.node)
        }
        onDestroy() {
            c.MessageCenter.unregister("show_Audit", this.node), c.MessageCenter.unregister("show_Audit_fail", this.node), c.MessageCenter.unregister("audit_report_response", this.node)
        }
        show(e) {
            this.rightPanel.loadRecord = this.loadReplayerRecord.bind(this), this.rightPanel.show(e), l(this.tableViewUI) && (this.tableViewUI.switchAnonymousMode = this.switchAnonymousMode.bind(this))
        }
        switchAnonymousMode(e) {
            l(this.newReplayerDetail) && this.newReplayerDetail.switchAnonymousMode(e), l(this.tableView) && this.tableView.switchAnonymousMode(e)
        }
        getShareableViewNode() {
            return this.shareableView
        }
        setupBrowser() {
            c.appConfig.getGeneralConfig().multiWindowEnabled || l(this.browserBackButton) && (this.browserBackButton.active = !0)
        }
        onBrowserBackButtonClicked() {
            this.node.active = !1
        }
        loadReplayerRecord(e, t) {
            var i, n, a, o, s, r, u, c;
            (this.dataPointInfo = {
                isShortDeck: null == e || null == (i = e.customData) ? void 0 : i.isShortDeck,
                ante: null == e || null == (n = e.customData) ? void 0 : n.ante,
                bigBlind: null == e || null == (a = e.customData) ? void 0 : a.bigBlind,
                currency: null == e || null == (o = e.customData) ? void 0 : o.currency
            }, (this.dataPointInfo.bigBlind <= 0 || null == (null == e || null == (s = e.customData) ? void 0 : s.isShortDeck) || null == (null == e || null == (r = e.customData) ? void 0 : r.isShortDeck)) && null != (u = this.rightPanel) && null != (u = u.currentItemData) && u.dataPointInfo) && (this.dataPointInfo = null == (c = this.rightPanel) || null == (c = c.currentItemData) ? void 0 : c.dataPointInfo);
            this.tableView.init(e.customData, t, this.tableViewUI, this.rightPanel, this.coinMode, this.dataPointInfo), this.newReplayerDetail.init(e.customDetailData, e.type, this.dataPointInfo, this.coinMode, t), this.tableViewUI.showCoinModeToggle(!0, this.coinMode >= 1), l(this.replayerUI) && this.replayerUI.setHandRecordData(e, this), this.switchAnonymousMode(this.tableViewUI.getStateAnonymous())
        }
        onToggleCoinMode(e) {
            this.coinMode = e ? 1 : 0, this.tableView.setCoinMode(this.coinMode), this.rightPanel.setCoinMode(this.coinMode), this.newReplayerDetail.setCoinMode(this.coinMode)
        }
        showAudit(e) {
            if (e.gameData) {
                if (w.isInvalidGameDataMultiWindow(this.gameDataInstance, e.gameData)) return
            } else if (w.isInvalidRoomUuidMultiWindow(e.room_uuid_js, this.gameDataInstance, e.game_uuid_js)) return;
            let t = this.scene ?? this.gameSceneInstance.gameNode,
                i = b.getSinglePrefabInst(this.prefab_report, this.gameSceneInstance);
            if (l(i))
                if (e.value) {
                    i.getComponent(b).autoShow(t, this.gameSceneInstance, null, c.Enum.ZORDER_TYPE.ZORDER_TOP)
                } else {
                    i.getComponent(b).autoHide()
                }
        }
        showAuditFail(e) {
            var t;
            const i = c.appConfig.isLandscapeLayout ? f.instance.getParentScene(u, this.node) : null == (t = this.gameSceneInstance) || null == (t = t.room) ? void 0 : t.gameScene;
            c.TT.showMsg(c.config.getStringData("UIAllreviewReplayTips3"), c.Enum.ToastType.ToastTypeError, !1, !0, i)
        }
        onReportResponse(e) {
            var t;
            let i = e.error;
            const n = c.appConfig.isLandscapeLayout ? f.instance.getParentScene(u, this.node) : null == (t = this.gameSceneInstance) || null == (t = t.room) ? void 0 : t.gameScene;
            1 == i && c.TP.showMsg(c.config.getStringData("AuditTips"), !1, null, null, !1, !1, c.config.getStringData("AuditReport_Success_title"), !1, 0, !0, n)
        }
    }).prototype, "newReplayerDetail", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(C.prototype, "rightPanel", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(C.prototype, "tableView", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(C.prototype, "tableViewUI", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(C.prototype, "replayerUI", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(C.prototype, "shareableView", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(C.prototype, "browserBackButton", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(C.prototype, "prefab_report", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = C)) || v));
    n._RF.pop()
}