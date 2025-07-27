import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./Translator.js";
import * as u from "./Pb.js";
import * as m from "./WebPlatformTools.js";
import * as L from "./CommonTools.js";
import * as v from "./MTTConnector.js";
import * as p from "./cv.js";
import * as y from "./CrashTracing.js";
import * as C from "./CrashTracing.js";

function main() {
    var _, f, T, B, w, D, b, E, I, S, k, K, M, O;
    n._RF.push({}, "af311UZJJRDBrYEsCpW8Pt6", "LoadingBlocker", void 0);
    const {
        ccclass: R,
        property: x
    } = r;
    e("default", (_ = x(o), f = x(a), T = x(s), B = x([o]), w = x(l), R(((O = class e extends c {
        constructor(...t) {
            super(...t), i(this, "container", E, this), i(this, "progressBar", I, this), i(this, "loadingAnimation", S, this), i(this, "loadingCompletePerSecond", k, this), i(this, "styleContainer", K, this), i(this, "loadingLbl", M, this), this.loadingController = null, this.updateTimer = 0, this.maxLoadingTimeInSecond = 40, this.maxLoadingDelayInSecond = 10, this.loadingErrorText = null, this.handleLoadingTimeout = void 0, this.msgBoxhiding = !0, this.loadingKey = [], this.showErrorDialogTimeout = null, this.showLoadingDelay = null, this.loadingDelayKey = "", this.hideLoadingDelay = .3, this.hideLoadingTimeout = null, this.prefix = "", this.target = null, this.showLoadingUITimeout = null, this.showLoadingUIInterval = 500, this.showErrorDialog = () => {
                this.msgBoxhiding && (this.reset(), this.loadingErrorText = "MESSAGE_DIALOG_BLOCKER.SERVER_NO_RESPONSE", cc_mtt.vv.ConsoleLog.log(h("MESSAGE_DIALOG_BLOCKER.ERROR_OCCUR")), this.msgBoxhiding = !1, cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", this.loadingErrorText, !1, [{
                    type: 0,
                    text: "MESSAGE_DIALOG_BLOCKER.OK",
                    callback: () => {
                        this.msgBoxhiding = !0, this.handleLoadingTimeout instanceof Function ? this.handleLoadingTimeout() : (cc_mtt.vv.ConsoleLog.log("loading blocker: no handler!"), this.defaultTimeoutHandler()), cc_mtt.vv.DataManager.webPlatform != u.commonProto.PLATFORM.TRIBAL_PIONEER && m.instance.sendCCJS("confirm-loading-timeout")
                    }
                }]))
            }, this.showLoadingUI = () => {
                this.showContainerUI()
            }, this.hideLoadingUI = () => {
                d(this.node) && (this.hideContainerUI(), clearTimeout(this.showLoadingUITimeout), this.showLoadingUITimeout = setTimeout(this.showLoadingUI, this.showLoadingUIInterval))
            }, this.defaultTimeoutHandler = () => {
                cc_mtt.vv.ConsoleLog.log("loading blocker, default handler!"), e.hide("All"), this.node.active = !1
            }
        }
        static get instance() {
            return cc_mtt.vv.BLLoadingBlocker ? cc_mtt.vv.BLLoadingBlocker : (e._instance || cc_mtt.vv.ConsoleLog.warn("LoadingBlocker instance is null"), e._instance)
        }
        static hasInstance() {
            return !!cc_mtt.vv.BLLoadingBlocker || null != e._instance
        }
        static addInstance(t) {
            -1 == e._instances.indexOf(t) ? e._instances.push(t) : cc_mtt.vv.ConsoleLog.error("addInstance: Duplicated LoadingBlocker instance")
        }
        static removeInstance(t) {
            let i = e._instances.indexOf(t); - 1 != i ? e._instances.splice(i, 1) : cc_mtt.vv.ConsoleLog.error("removeInstance: LoadingBlocker instance not found")
        }
        onLoad() {
            cc_mtt.vv.ConsoleLog.log("LoadingBlocker onLoad", d(e._instance)), d(e._instance) || (e._instance = this), e.addInstance(this), this.node.active = !1, this.target = this.node.parent, this.loadingAnimation.enabled = !1, v.instance.registerMessageCenter("changeMTTStyle", this.updateStyle.bind(this), this.node)
        }
        onDestroy() {
            cc_mtt.vv.ConsoleLog.log("LoadingBlocker onDestroy"), this.reset(), e._instance == this && (e._instance = null), e.removeInstance(this), v.instance.unregisterMessageCenter("changeMTTStyle", this.node)
        }
        resetTarget() {
            d(this.node) && (this.node.parent = this.target)
        }
        setTarget(e) {
            this.node.parent = e || this.target
        }
        update(e) {}
        updateProgressBarByDT(e) {
            this.progressBar.progress > 0 ? (this.progressBar.progress -= e * (1 / this.loadingCompletePerSecond), this.progressBar.node.angle = L.instance.rotationToAngle(360 * this.progressBar.progress)) : this.progressBar.progress = 1
        }
        static setLoading(t, i = 40) {
            d(e.instance) ? e.instance.setLoading(t, i) : cc_mtt.vv.ConsoleLog.warn("setLoading: LoadingBlocker instance is null")
        }
        setLoading(e, t = 40) {
            this.updateTimer = 0, this.maxLoadingTimeInSecond = t, this.handleLoadingTimeout = e instanceof Function ? e : this.defaultTimeoutHandler
        }
        clearShowErrorDialogTimeout() {
            this.showErrorDialogTimeout && clearTimeout(this.showErrorDialogTimeout)
        }
        clearShowLoadingDelay() {
            this.showLoadingDelay && (clearTimeout(this.showLoadingDelay), this.showLoadingDelay = null), this.loadingDelayKey = ""
        }
        reset() {
            cc_mtt.vv.ConsoleLog.log("LoadingBlocker reset"), this.clearHideLoadingTimeout(), this.clearShowErrorDialogTimeout(), this.loadingKey = [], this.node.active = !1
        }
        static show(t, i) {
            let n = 0;
            if (!p.appConfig.getGeneralConfig().multiWindowEnabled) return e.hasInstance() && e.instance.checkLabelLoading(t), cc_mtt.vv.BLLoadingBlocker ? (cc_mtt.vv.BLLoadingBlocker.show(t), e.instance && p.MessageCenter.send("show_loading", e.instance.loadingKey), n = 1) : cc_mtt.vv.MultipleGame ? (cc_mtt.vv.MultipleGame.showLoading(t), e.instance && p.MessageCenter.send("show_loading", e.instance.loadingKey), n = 16) : e.instance && (e.instance.show(t, i), n = 256), n
        }
        static hide(t, i = !1, n = 4369) {
            p.appConfig.getGeneralConfig().multiWindowEnabled || (1 & n && cc_mtt.vv.BLLoadingBlocker ? (cc_mtt.vv.BLLoadingBlocker.hide(t, i), e.instance && p.MessageCenter.send("hide_loading", e.instance.loadingKey)) : 16 & n && cc_mtt.vv.MultipleGame ? (cc_mtt.vv.MultipleGame.hideLoading(t), e.instance && p.MessageCenter.send("hide_loading", e.instance.loadingKey)) : 256 & n && e.instance && e.instance.hide(t, i))
        }
        clearHideLoadingTimeout() {
            this.hideLoadingTimeout && clearTimeout(this.hideLoadingTimeout)
        }
        stopHttpRequest() {
            for (cc_mtt.vv.ConsoleLog.log("LoadingBlocker:stop Xhr"); cc_mtt.vv.DataManager.currentXhrs.length > 0;) {
                cc_mtt.vv.DataManager.currentXhrs.pop().stopRequest()
            }
            this.handleLoadingTimeout instanceof Function ? this.handleLoadingTimeout() : (cc_mtt.vv.ConsoleLog.log("loading blocker: no handler!"), this.defaultTimeoutHandler())
        }
        show(t, i, n) {
            if (!p.appConfig.getGeneralConfig().multiWindowEnabled) {
                if (this.checkLabelLoading(t), cc_mtt.vv.BLLoadingBlocker) return cc_mtt.vv.BLLoadingBlocker.show(t), void p.MessageCenter.send("show_loading", this.loadingKey);
                if (i && this.setTarget(i), this.loadingKey) {
                    let i = !1;
                    "All" != t && (-1 == this.loadingKey.indexOf(t) ? this.loadingKey.push(t) : i = !0), this.clearHideLoadingTimeout(), this.updateStyle(), this.node.active = !0, n && !i && (this.clearShowLoadingDelay(), this.hideContainer(), this.loadingDelayKey = t, this.showLoadingDelay = setTimeout((() => {
                        d(this.node) && this.showContainer()
                    }), 1e3 * this.maxLoadingDelayInSecond)), this.loadingAnimation.enabled = this.node.active, this.setContainerOpacity(255), this.clearShowErrorDialogTimeout();
                    const o = C.getTrace(0, 20);
                    this.showErrorDialogTimeout = setTimeout((() => {
                        var t, i, n, a;
                        d(this.node) && (null == (t = C.getInstance()) || t.trace(y.MttIssues, "Show_Error_Dialog_Timeout", {
                            trace: o,
                            isMain: this == e._instance,
                            active: null == (i = this.node) ? void 0 : i.activeInHierarchy,
                            containerActive: null == (n = this.container) ? void 0 : n.activeInHierarchy,
                            containerOpacity: null == (a = this.container) || null == (a = a.getComponent(g)) ? void 0 : a.opacity
                        }), cc_mtt.vv.DataManager.currentXhrs.length > 0 ? this.stopHttpRequest() : this.showErrorDialog(), p.MessageCenter.send("hide_loading", this.loadingKey))
                    }), 1e3 * this.maxLoadingTimeInSecond), p.MessageCenter.send("show_loading", this.loadingKey), cc_mtt.vv.ConsoleLog.log("LoadingBlocker show", t, JSON.stringify(this.loadingKey))
                } else cc_mtt.vv.ConsoleLog.log("LoadingBlocker loadingKey null")
            }
        }
        hide(e, t = !1) {
            if (!p.appConfig.getGeneralConfig().multiWindowEnabled) {
                if (cc_mtt.vv.BLLoadingBlocker) return cc_mtt.vv.BLLoadingBlocker.hide(e, t), void p.MessageCenter.send("hide_loading", this.loadingKey);
                if (this.resetTarget(), this.clearHideLoadingTimeout(), this.loadingKey) {
                    if ("All" == e) this.reset();
                    else {
                        let t = this.loadingKey.indexOf(e);
                        t >= 0 && this.loadingKey.splice(t, 1), this.loadingDelayKey == e && this.clearShowLoadingDelay()
                    }
                    this.loadingKey.length <= 0 && (this.node.active || "All" == e) && (t ? this.hideLoadingTimeout = setTimeout((() => {
                        this.actualHide()
                    }), 1e3 * this.hideLoadingDelay) : this.actualHide()), p.MessageCenter.send("hide_loading", this.loadingKey), cc_mtt.vv.ConsoleLog.log("LoadingBlocker hide", e, JSON.stringify(this.loadingKey))
                } else cc_mtt.vv.ConsoleLog.log("LoadingBlocker loadingKey null")
            }
        }
        actualHide() {
            d(this.node) && (this.node.active = !1, this.loadingAnimation.enabled = this.node.active, this.clearShowErrorDialogTimeout())
        }
        showContainer() {
            cc_mtt.vv.ConsoleLog.log("LoadingBlocker showContainer"), d(this.container) && (this.container.active = !0)
        }
        hideContainer() {
            cc_mtt.vv.ConsoleLog.log("LoadingBlocker hideContainer"), d(this.container) && (this.container.active = !1)
        }
        setContainerOpacity(e) {
            cc_mtt.vv.ConsoleLog.log("LoadingBlocker setContainerOpacity", e), d(this.container) && (this.container.getComponent(g).opacity = e)
        }
        showContainerUI() {
            this.setContainerOpacity(255)
        }
        hideContainerUI() {
            this.setContainerOpacity(0)
        }
        updateStyle() {
            if (this.loadingController && this.styleContainer && this.styleContainer.length > 0) {
                for (let e = 0; e < this.styleContainer.length; e++) this.styleContainer[e].active = !1;
                this.loadingController.loadingStyle < this.styleContainer.length ? this.styleContainer[this.loadingController.loadingStyle].active = !0 : this.styleContainer[0].active = !0
            }
        }
        checkLabelLoading(e) {
            if (d(this.loadingLbl, !0))
                if ("Connecting" == e) this.loadingLbl.string = p.config.getStringData("Mtt_Connecting");
                else {
                    let e = this.loadingLbl.node.getComponent("CustomLocalizedLabel");
                    null != e && (null == e.fetchRender || e.fetchRender())
                }
        }
    })._instance = null, O._instances = [], E = t((b = O).prototype, "container", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(b.prototype, "progressBar", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(b.prototype, "loadingAnimation", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(b.prototype, "loadingCompletePerSecond", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1
        }
    }), K = t(b.prototype, "styleContainer", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), M = t(b.prototype, "loadingLbl", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = b)) || D));
    n._RF.pop()
}