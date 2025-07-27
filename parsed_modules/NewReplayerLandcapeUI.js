import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./DesignSystemButtonBase.js";
import * as c from "./DesignSystemButtonBase.js";
import * as p from "./MttHallDetailInfoDialog.js";
import * as g from "./cv.js";
import * as v from "./RecordType.js";
import * as C from "./NodeScreenshot.js";
import * as b from "./NodeScreenshot.js";
import * as y from "./Translator.js";

function main() {
    var T, m, f, H, R, D, _, w, B, I, S, M, E, k, A, L, P, U, z, F, N;
    a._RF.push({}, "9453eoVuztB2qYliLDKkqwM", "NewReplayerLandcapeUI", void 0);
    const {
        ccclass: x,
        property: V
    } = r;
    e("NewReplayerLandcapeUI", (T = x("NewReplayerLandcapeInfo"), m = V(o), f = V(o), H = V(o), R = V(i), D = V(i), _ = V(p), w = V(l), B = V(l), I = V(i), T((E = t((M = class extends s {
        constructor(...e) {
            super(...e), n(this, "handIdTitle", E, this), n(this, "handIdLabel", k, this), n(this, "dateLabel", A, this), n(this, "extraButtonParent", L, this), n(this, "reportHandButton", P, this), this.switchAnonymousMode = null, this.isAnonymous = !1, n(this, "toolTipsPanel", U, this), n(this, "revealHandButton", z, this), this.onClickRevealHandCallback = null, this.revealHandFeeAmount = null, this.revealHandFeeCurrency = null, n(this, "coinModeToggle", F, this), this.onToggleCoinModeCallback = null, n(this, "objectsToHideWhenCapture", N, this), this._newReplayerController = null, this._handRecordData = null, this._handId = ""
        }
        setHandRecordData(e, t) {
            h(t) && (this._newReplayerController = t), this._handRecordData !== e && (this._handRecordData = e, this.init())
        }
        init() {
            this.showHandId(this._handRecordData.customData.replayUUID), this.showStartTime(this._handRecordData.customData.startTime), this._checkValidButtons()
        }
        _checkValidButtons() {
            h(this.reportHandButton) && (this.reportHandButton.active = !!this._handRecordData && this._handRecordData.type === v.Cash)
        }
        onLoad() {
            h(this.extraButtonParent) && !g.appConfig.getGameConfig().enableReplayerExtraButtons && (this.extraButtonParent.active = g.appConfig.getGameConfig().enableReplayerExtraButtons), h(this.revealHandButton) && (this.revealHandButton.node.active = !1, this.revealHandButton.node.on(i.EventType.MOUSE_ENTER, this.onMouseEnterRevealHand, this), this.revealHandButton.node.on(i.EventType.MOUSE_LEAVE, this.onMouseLeaveRevealHand, this))
        }
        onClickAnonymous() {
            this.isAnonymous = !this.isAnonymous, this.switchAnonymousMode && this.switchAnonymousMode(this.isAnonymous)
        }
        getHandId() {
            var e;
            return this._handId && "" !== this._handId ? this._handId : null != (e = this._handRecordData) && null != (e = e.customData) && e.replayUUID ? this._handRecordData.customData.replayUUID : ""
        }
        showHandId(e) {
            this._handId = e, e && e.trim().length > 0 && h(this.handIdLabel) && (this.handIdLabel.string = e)
        }
        showStartTime(e) {
            h(this.dateLabel) && (this.dateLabel.node.active = e && e.trim().length > 0, this.dateLabel.node.active && (this.dateLabel.string = e))
        }
        onReportButtonClicked() {
            if (!this._handRecordData) return;
            const e = g.Number(this._handRecordData.customData.clubId),
                t = this._handRecordData.customData.roomUUIDjs,
                n = this._handRecordData.customData.replayUUID,
                a = this._handRecordData.customData.cashGameId;
            g.worldNet.RequestQuerySendFairReport(e, n, t, a)
        }
        showCoinModeToggle(e, t) {
            this.coinModeToggle.node.active = e, this.revealHandButton.getComponent(u).isChecked = t
        }
        setToggleCoinModeCallback(e) {
            this.onToggleCoinModeCallback = e
        }
        onToggleCoinMode(e) {
            var t;
            null == (t = this.onToggleCoinModeCallback) || t.call(this, this.coinModeToggle.getComponent(u).isChecked)
        }
        showRevealHandButton(e, t, n, a) {
            this.revealHandButton.node.active = e, this.revealHandButton.interactable = t, this.revealHandButton.getComponent(u).btnState = t ? c.normal : c.disabled, this.revealHandFeeAmount = n, this.revealHandFeeCurrency = a
        }
        setOnClickRevealHandCallback(e) {
            this.onClickRevealHandCallback = e
        }
        onClickRevealHand(e) {
            var t;
            null == (t = this.onClickRevealHandCallback) || t.call(this)
        }
        onMouseEnterRevealHand() {
            this.showToolTipRevealHands()
        }
        onMouseLeaveRevealHand() {
            this.hideToolTips()
        }
        showToolTipRevealHands() {
            var e, t;
            if (!h(this.toolTipsPanel)) return;
            if (null == this.revealHandFeeAmount || null == this.revealHandFeeCurrency) return;
            const n = this.revealHandButton.node.parent.convertToWorldSpaceAR(this.revealHandButton.node.position),
                a = this.toolTipsPanel.node.parent.convertToNodeSpaceAR(n);
            this.toolTipsPanel.node.position = new d(a.x - 170, a.y - 38, this.toolTipsPanel.node.position.z), this.toolTipsPanel.setDialogConeWorldPosition(n.x), this.toolTipsPanel.setText(g.StringTools.formatC(g.config.getStringData("new_replayer_reveal_cards_tool_tip", !1, "Reveal opponents cards for %s"), ((null == (e = this.revealHandFeeCurrency) ? void 0 : e.shortSymbol) ?? (null == (t = this.revealHandFeeCurrency) ? void 0 : t.symbol)) + g.StringTools.serverGoldToShowString(this.revealHandFeeAmount))), this.toolTipsPanel.node.active = !0
        }
        hideToolTips() {
            h(this.toolTipsPanel) && (this.toolTipsPanel.node.active = !1)
        }
        getStateAnonymous() {
            return this.isAnonymous
        }
        getDownloadFilename() {
            return `${y("id")}_${this.getHandId()}`
        }
        prepareCapture() {
            this.objectsToHideWhenCapture.forEach((e => {
                h(e) && (e.active = !1)
            }))
        }
        finishCapture() {
            this.objectsToHideWhenCapture.forEach((e => {
                h(e) && (e.active = !0)
            }))
        }
        getCaptureDelayTime() {
            return 0
        }
        getCaptureMaxSize() {
            return -1
        }
        processCapture(e, t = "") {
            var n;
            if (null != (n = this._newReplayerController) && n.getShareableViewNode()) {
                this.prepareCapture();
                const n = () => {
                    try {
                        b.captureWithType(this._newReplayerController.getShareableViewNode(), e, t, this.getCaptureMaxSize()).then((e => {
                            this.finishCapture()
                        }))
                    } catch (t) {
                        console.error("Error capturing screenshot:", t, e), this.finishCapture()
                    }
                };
                this.getCaptureDelayTime() > 0 ? setTimeout(n, this.getCaptureDelayTime()) : n()
            }
        }
        onDownloadBtnClicked() {
            this.processCapture(C.SAVE_IMAGE, this.getDownloadFilename())
        }
        onShareBtnClicked() {
            this.processCapture(C.SHARE_IMAGE)
        }
    }).prototype, "handIdTitle", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(M.prototype, "handIdLabel", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(M.prototype, "dateLabel", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(M.prototype, "extraButtonParent", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(M.prototype, "reportHandButton", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(M.prototype, "toolTipsPanel", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(M.prototype, "revealHandButton", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(M.prototype, "coinModeToggle", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(M.prototype, "objectsToHideWhenCapture", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), S = M)) || S));
    a._RF.pop()
}