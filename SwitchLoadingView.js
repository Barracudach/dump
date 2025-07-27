import * as t from "./cc.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";
import * as p from "./LoadingAnimationManager.js";

function main() {
    var u, _;
    e._RF.push({}, "1c46ezNvLxLSorxP1grqSIj", "SwitchLoadingView", void 0);
    const {
        ccclass: w
    } = t;
    i("SwitchLoadingView", w(((_ = class i extends n {
        constructor(...i) {
            super(...i), this.loadingNode = null, this.animManager = null, this._prefab = null, this._isPortrait = !0, this._scheduledHide = !1, this._scheduledCallback = null, this._waitingDescriptToHide = [], this._pendingRequest = ""
        }
        init() {
            const i = l.getLoadingPrefab();
            i ? (this.onloadPrefabsSuccess(i), this._prefab = i) : console.warn("Loading prefab is not set. Ensure HotUpdate sets it before CV init.")
        }
        switchToLandscape() {
            if (this._isPortrait = !1, !a(this.loadingNode)) return;
            let i = s("LandscapeLoadingView", this.loadingNode),
                e = s("MobileLoadingView", this.loadingNode);
            this.isShow() && null != i && i.active || (l.StatusView.show(!1), null !== i && null !== e && (this.loadingNode.active = !0, i.active = !0, e.active = !1, this.loadingNode.setSiblingIndex(-1), this.animManager.forceShowSwitchLandscapeTableLoadingAnimation()))
        }
        switchToPotrait() {
            if (this._isPortrait = !0, !a(this.loadingNode)) return;
            let i = s("LandscapeLoadingView", this.loadingNode),
                e = s("MobileLoadingView", this.loadingNode);
            this.loadingNode.scene.windowSize.width > this.loadingNode.scene.windowSize.height && l.roomManager.checkIsSceneMiniGame(this.loadingNode.scene.name) && (this.loadingNode.scene.getComponentInChildren(o).overrideDesignResolution = !1, d.setDesignResolutionSize(l.config.DESIGN_WIDTH, l.config.DESIGN_HEIGHT, h.FIXED_HEIGHT), l.resMgr.adaptWidget(this.loadingNode, !0, !1)), this.isShow() && e.active || (i && e && (i.active = !1, e.active = !0), this.loadingNode.setSiblingIndex(-1))
        }
        resetLoadingNode(i, e) {
            a(this.loadingNode, !0) && (this.loadingNode.parent = i, this.loadingNode.setSiblingIndex(e), l.resMgr.adaptWidget(this.loadingNode, !0, !1))
        }
        onloadPrefabsSuccess(i) {
            this.loadingNode = g(i), r.addPersistRootNode(this.loadingNode), this.loadingNode.addComponent(c), this.loadingNode.setSiblingIndex(l.Enum.ZORDER_TYPE.ZORDER_LOADING), this.animManager = this.loadingNode.getComponent(p), this.loadingNode.active = !1, this._pendingRequest && this.show(this._pendingRequest)
        }
        show(i, e = !1, t = !1, n = !1, s = !1, o = !1) {
            if (this._scheduledHide && this.cancelScheduledHide(), !a(this.loadingNode)) {
                if (null === this._prefab) return void(this._pendingRequest = i);
                this.onloadPrefabsSuccess(this._prefab), this._isPortrait ? this.switchToPotrait() : this.switchToLandscape()
            }
            if (e && !this._waitingDescriptToHide.includes(i) && this._waitingDescriptToHide.push(i), a(this.loadingNode, !0)) {
                if (1 == this.loadingNode.active) return this.animManager.description = i, this.animManager.descriptionSwitchLandscape = i, void(t && this.animManager.activateBottomSpinnerAnimation(i));
                l.MessageCenter.send("HideWebview_ShowWindows"), this.loadingNode.active = !0, this.loadingNode.setSiblingIndex(-1), this.animManager && (n ? l.appConfig.isWebApp ? this.animManager.startWebAppLoadingAnimation() : this.animManager.startAppLoadingAnimation() : o ? this.animManager.activateCenterSpinnerAnimation(i) : l.appConfig.isLandscapeLayout || this._isPortrait ? (this.animManager.tableVersionText = l.config.getStringData("Version") + " " + l.config.GET_CLIENT_VERSION(), this.animManager.description = i, this.animManager.descriptionSwitchLandscape = i, s ? this.animManager.forceShowTableLoadingAnimation(i) : this.animManager.startTableLoadingAnimation(i)) : (this.animManager.tableVersionTextSwitchLandscape = l.config.getStringData("Version") + " " + l.config.GET_CLIENT_VERSION(), this.animManager.descriptionSwitchLandscape = i, this.animManager.startSwitchLandscapeTableLoadingAnimation(i))), this._pendingRequest && (this._pendingRequest = "")
            }
        }
        hide(i = "", e = !1, t = !1) {
            if (this._pendingRequest && (this._pendingRequest = ""), e) {
                let e = this._waitingDescriptToHide.indexOf(i);
                e >= 0 && this._waitingDescriptToHide.splice(e, 1)
            }
            if (this._waitingDescriptToHide.length > 0) {
                let i = this._waitingDescriptToHide[this._waitingDescriptToHide.length - 1];
                this.show(i, !1, !1, !1, !0, !1)
            } else 0 != this.isShow() && (t ? this.scheduleHide() : this.performHide())
        }
        performHide() {
            if (a(this.loadingNode, !0) && this.animManager && (this.animManager.hideAppLoadingAnimation(), this.animManager.hideswitchLandscapeTableLoadingAnimation(), this.animManager.hideTableLoadingAnimation(), this.animManager.hideCenterSuitLoadingAnimation(), this.loadingNode.active)) {
                const i = l.tools.getRoot(this.loadingNode);
                this.loadingNode.parent !== i && this.loadingNode.setParent(i), this.loadingNode.active = !1
            }
            this._scheduledHide = !1, this._scheduledCallback = null
        }
        scheduleHide() {
            this._scheduledHide || (this._scheduledHide = !0, this._scheduledCallback = () => {
                this.performHide()
            }, this.scheduleOnce(this._scheduledCallback, 1))
        }
        cancelScheduledHide() {
            this._scheduledHide && this._scheduledCallback && (this.unschedule(this._scheduledCallback), this._scheduledHide = !1, this._scheduledCallback = null)
        }
        updateAppLoadingInfo(i) {
            this.animManager.appLoadingInfo = i
        }
        updateByteProgressBar(i) {
            this.animManager.byteProgressbar = i
        }
        updateByteProgressPercent(i) {
            this.animManager.percent = i
        }
        updateAppVersionText() {
            this.animManager.appVersionText = l.config.getStringData("Version") + " " + l.config.GET_CLIENT_VERSION()
        }
        isShow() {
            return a(this.loadingNode, !0) && this.loadingNode.active
        }
        showRetryPanel(i) {
            this.animManager.showRetryPanel(i)
        }
        get parent() {
            return a(this.loadingNode, !0) ? this.loadingNode.parent : null
        }
        get siblingIndex() {
            return a(this.loadingNode, !0) ? this.loadingNode.getSiblingIndex() : 0
        }
        static getInstance() {
            return null != l.SwitchLoadingView ? l.SwitchLoadingView : (i.g_instance && i.g_instance.loadingNode && a(i.g_instance.loadingNode, !0) || (i.g_instance = new i, i.g_instance.init()), i.g_instance)
        }
    }).g_instance = void 0, u = _)) || u);
    e._RF.pop()
}