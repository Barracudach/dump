import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as w from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as U from "./SlideView.js";
import * as P from "./SizeContentSync.js";
import * as y from "./cv.js";

function main() {
    var V, C, S, B, N, v, _, z, R, L, x, T, O, k, D, E, A;
    n._RF.push({}, "3a937brItVFx6S9E8SBWrIi", "KycRequiredPopup", void 0);
    const {
        ccclass: M,
        property: I
    } = r;
    e("default", (V = I(o), C = I(s), S = I(P), B = I(o), N = I(l), v = I(p), _ = I(p), M(((A = class e extends a {
        constructor(...e) {
            super(...e), this.currentParams = null, i(this, "mainPanel", L, this), i(this, "scrollView", x, this), i(this, "scrollViewContentSync", T, this), i(this, "maxSizeNode", O, this), i(this, "lblStep1", k, this), i(this, "confirmButton", D, this), i(this, "laterButton", E, this), this.popUpPrefab = null, this.popUpNode = null, this.popUp = null, this.slideView = null
        }
        static getInstance() {
            return e.g_instance || (e.g_instance = new e, e.g_instance.init()), e.g_instance
        }
        init() {
            let e = h.getBundle(y.appConfig.layoutUse);
            e ? this.onBundleLoaded(null, e) : h.loadBundle(y.appConfig.layoutUse, this.onBundleLoaded.bind(this))
        }
        onBundleLoaded(e, t) {
            e ? u(e.message || e) : t.load("prefabs/KycRequiredPopup", c, function(e, t) {
                e ? u(e.message || e) : this.popUpPrefab || (this.popUpPrefab = t, this.createPopUp())
            }.bind(this))
        }
        onLoad() {
            this.slideView = this.getComponent(U)
        }
        onDisable() {
            y.tools.triggerPopupHideEvent()
        }
        createPopUp(t) {
            this.popUpPrefab && d(this.popUpPrefab, !0) && !d(this.popUpNode, !0) ? (this.popUpNode = b(this.popUpPrefab), g.addPersistRootNode(this.popUpNode), this.popUpNode.addComponent(f), this.popUpNode.setSiblingIndex(y.Enum.ZORDER_TYPE.ZORDER_TOP), this.popUp = this.popUpNode.getComponent(e), t ? this.popUp.showMsg(t) : this.currentParams ? this.popUp.showMsg(this.currentParams) : this.popUp.hide()) : this.currentParams = t
        }
        hide() {
            this.slideView ? this.slideView.hide(!1, !0) : this.node.active = !1
        }
        hideAllPopup() {
            null == this.node ? this.popUp && d(this.popUp.node, !0) && (this.unscheduleAllCallbacks(), this.popUp.hideAllPopup()) : this.hide()
        }
        show() {
            this.node.scale = new w(w.ONE), this.slideView && this.slideView.show(!1)
        }
        showMsg(e) {
            null == this.node ? this.popUp && d(this.popUpNode, !0) ? (this.popUpNode || (this.popUpNode = this.popUp.node), this.scheduleOnce(this.popUp.showMsg.bind(this.popUp, e))) : this.createPopUp(e) : (y.tools.showPopupOnTop(this.node), this.updatePopUp(e))
        }
        updatePopUp(e) {
            this.currentParams = e, y.tools.triggerPopupShowEvent(), this.confirmButton.interactable = !0, this.laterButton.node.active = 1 == e.enableLaterButton, e.step1Text && e.step1Text.length > 0 ? this.lblStep1.string = e.step1Text : this.lblStep1.string = y.config.getStringData("KYC_Required_Popup_Text1"), this.node.active && this.slideView && this.slideView.stopAllAnims(), this.node.active = !0, this.scrollView.node.parent.active = !1, this.node.scale = new w(0, 0, 1), this.unscheduleAllCallbacks(), this.scheduleOnce(this.resetLayout.bind(this), .02)
        }
        resetLayout() {
            this.scrollView.node.parent.active = !0, this.scrollView.enabled = !1, this.scrollViewContentSync.enabled = !0, this.scrollView.scrollToTop(), this.scheduleOnce(this.updateLayout.bind(this), .15)
        }
        updateLayout() {
            let e = this.mainPanel.getComponent(m).height - this.maxSizeNode.getComponent(m).height;
            e > 0 && (this.scrollView.enabled = !0, this.scrollViewContentSync.enabled = !1, this.scrollView.node.getComponent(m).height = this.scrollView.node.getComponent(m).height - e), this.scheduleOnce(this.show.bind(this), .03)
        }
        onClickConfirmButton() {
            var e;
            this.confirmButton.interactable = !1, null == (e = this.currentParams) || null == e.confirmCallback || e.confirmCallback(), setTimeout((() => {
                this.hide()
            }), 15)
        }
        onClickLaterButton() {
            this.hide()
        }
        onClickXCloseeButton() {
            this.hide()
        }
    }).g_instance = void 0, L = t((R = A).prototype, "mainPanel", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(R.prototype, "scrollView", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(R.prototype, "scrollViewContentSync", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(R.prototype, "maxSizeNode", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(R.prototype, "lblStep1", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(R.prototype, "confirmButton", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(R.prototype, "laterButton", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = R)) || z));
    n._RF.pop()
}