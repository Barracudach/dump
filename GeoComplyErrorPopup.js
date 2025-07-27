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
import * as P from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as w from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as U from "./SlideView.js";
import * as v from "./SizeContentSync.js";
import * as y from "./cv.js";

function main() {
    var S, x, B, V, O, T, E, k, L, z, N, _, G, R, I, D, M, Z, A, W, H, Y, F, j, X, q, J, K, Q, $;
    n._RF.push({}, "b6c92OIuLZEZYpGkLg46BMs", "GeoComplyErrorPopup", void 0);
    const {
        ccclass: ee,
        property: te
    } = p;
    let ie = (S = ee("InstructionStepItem"), x = te(o), B = te(s), S((T = t((O = class {
        constructor() {
            i(this, "text", T, this), i(this, "line", E, this)
        }
    }).prototype, "text", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(O.prototype, "line", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = O)) || V);
    e("default", (k = te(s), L = te(l), z = te(r), N = te(v), _ = te(s), G = te(a), R = te(l), I = te(l), D = te(l), M = te({
        type: ie
    }), ee((($ = class e extends c {
        constructor(...e) {
            super(...e), i(this, "mainPanel", W, this), i(this, "titleLabel", H, this), i(this, "scrollView", Y, this), i(this, "scrollViewContentSync", F, this), i(this, "maxSizeNode", j, this), i(this, "confirmButton", X, this), i(this, "lblConfirmButton", q, this), i(this, "lblObserveButton", J, this), i(this, "textLabels", K, this), i(this, "instructionSteps", Q, this), this.popUpPrefab = null, this.currentParams = null, this.popUpNode = null, this.popUp = null, this.slideView = null, this.mainPanelUITransform = null, this.maxSizeNodeUITransform = null, this.scrollViewUITransform = null
        }
        static getInstance() {
            return e.g_instance || (e.g_instance = new e, e.g_instance.init()), e.g_instance
        }
        init() {
            let e = u.getBundle(y.appConfig.layoutUse);
            e ? this.onBundleLoaded(null, e) : u.loadBundle(y.appConfig.layoutUse, this.onBundleLoaded.bind(this))
        }
        onBundleLoaded(e, t) {
            e ? h(e.message || e) : t.load("prefabs/GeoComplyErrorPopup", d, function(e, t) {
                e ? h(e.message || e) : this.popUpPrefab || (this.popUpPrefab = t, this.createPopUp())
            }.bind(this))
        }
        onLoad() {
            this.slideView = this.node.getComponent(U)
        }
        onDisable() {
            var e;
            null != (null == this || null == (e = this.currentParams) ? void 0 : e.cashGameScene) || this.node.active || y.tools.triggerPopupHideEvent()
        }
        createPopUp(t = null) {
            this.popUpPrefab && b(this.popUpPrefab, !0) && !b(this.popUpNode, !0) ? (this.popUpPrefab.data.active = !1, this.popUpNode = m(this.popUpPrefab), f.addPersistRootNode(this.popUpNode), this.popUpNode.addComponent(g), this.popUpNode.setSiblingIndex(y.Enum.ZORDER_TYPE.ZORDER_TT), this.popUp = this.popUpNode.getComponent(e), t ? this.popUp.showMsg(t) : this.currentParams ? this.popUp.showMsg(this.currentParams) : this.popUp.hide()) : (this.currentParams = t, this.init())
        }
        hide() {
            this.slideView ? this.slideView.hide(!1, !0) : b(this.node, !0) && (this.node.active = !1), this.currentParams = null
        }
        hideAllPopup() {
            null == this.node ? this.popUp && b(this.popUp.node, !0) && (this.unscheduleAllCallbacks(), this.popUp.hideAllPopup()) : this.hide()
        }
        show() {
            console.log("GeoComplyCocos ErrorPopup show"), this.node.scale = new C(C.ONE), this.slideView && this.slideView.show(!1)
        }
        showMsg(t) {
            if (this == e.g_instance) {
                if (t.cashGameScene && b(t.cashGameScene)) {
                    let i = t.cashGameScene.getComponentInChildren(e);
                    if (i) return y.appConfig.getGeneralConfig().multiWindowEnabled && y.focusWindow(t.cashGameScene.windowID), void i.showMsg(t)
                }
                y.appConfig.getGeneralConfig().multiWindowEnabled && y.focusWindow(1)
            }
            null == this.node ? this.popUp && b(this.popUpNode, !0) ? (this.popUpNode || (this.popUpNode = this.popUp.node), this.scheduleOnce(this.popUp.showMsg.bind(this.popUp, t))) : this.createPopUp(t) : (y.tools.showPopupOnTop(this.node), this.updatePopUp(t))
        }
        updatePopUp(e) {
            this.node.active || null != (null == e ? void 0 : e.cashGameScene) || y.tools.triggerPopupShowEvent(), this.currentParams = e, e.title && (this.titleLabel.string = e.title);
            let t = e.instructionSteps.length;
            this.instructionSteps.forEach(((i, n) => {
                if (n < t) {
                    i.text.node.active = !0, i.line.active = n != t - 1, i.text.node.getComponent(o) ? y.StringTools.setRichTextString(i.text.node, e.instructionSteps[n]) : i.text.string = e.instructionSteps[n]
                } else i.text.node.active = !1
            })), this.confirmButton.interactable = 0 != e.enableConfirmButton, this.lblConfirmButton.string = y.StringTools.convertText(e.confirmButtonText, 2), e.callObserverCallbackOnCloseClick = !!e.callObserverCallbackOnCloseClick, this.lblObserveButton && (e.observeButtonText || (e.observeButtonText = y.config.getStringData("Zoom_button_text_3")), this.lblObserveButton.string = y.StringTools.convertText(e.observeButtonText, 2));
            let i = e.texts ? e.texts.length : 0;
            this.textLabels.forEach(((t, n) => {
                n < i ? (t.node.active = !0, t.string = e.texts[n]) : t.node.active = !1
            })), this.node.active && this.slideView && this.slideView.stopAllAnims(), this.node.active = !0, this.scrollView.node.parent.active = !1, this.node.scale = new C(C.ZERO), console.log("GeoComplyCocos ErrorPopup updatePopUp"), this.unscheduleAllCallbacks(), this.scheduleOnce(this.resetLayout.bind(this), .02)
        }
        resetLayout() {
            console.log("GeoComplyCocos ErrorPopup resetLayout"), this.scrollView.node.parent.active = !0, this.scrollView.enabled = !1, this.scrollViewContentSync.enabled = !0, this.scrollView.scrollToTop(), this.scheduleOnce(this.updateLayout.bind(this), .15)
        }
        updateLayout() {
            console.log("GeoComplyCocos ErrorPopup updateLayout");
            let e = this.mainPanel.getComponent(w).height - this.maxSizeNode.getComponent(w).height;
            e > 0 && (this.scrollView.enabled = !0, this.scrollViewContentSync.enabled = !1, this.scrollView.node.getComponent(w).height = this.scrollView.node.getComponent(w).height - e), this.scheduleOnce(this.show.bind(this), .03)
        }
        onClickConfirmButton() {
            var e;
            this.confirmButton.interactable = !1, null == (e = this.currentParams) || null == e.confirmCallback || e.confirmCallback(), setTimeout((() => {
                this.hide()
            }), 15)
        }
        onClickObserveButton() {
            var e;
            null == (e = this.currentParams) || null == e.observeCallback || e.observeCallback(), this.currentParams && !this.currentParams.hideOnClickOfObserve || this.hide()
        }
        onClickXCloseeButton() {
            var e, t;
            null != (e = this.currentParams) && e.callObserverCallbackOnCloseClick && (null == (t = this.currentParams) || null == t.observeCallback || t.observeCallback());
            this.hide()
        }
        createGamePopup(t) {
            if (this.popUpPrefab && b(this.popUpPrefab, !0) && b(t)) {
                let i = m(this.popUpPrefab);
                i._persistNode = !0, t.getComponentInChildren(P).node.addChild(i), i.setSiblingIndex(y.Enum.ZORDER_TYPE.ZORDER_TT);
                let n = i.getComponent(e);
                n.popUpPrefab = this.popUpPrefab, n.popUpNode = i, n.popUp = n, n.hide()
            }
        }
        RichTextLinkClickHandler(e) {}
    }).g_instance = void 0, W = t((A = $).prototype, "mainPanel", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(A.prototype, "titleLabel", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(A.prototype, "scrollView", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(A.prototype, "scrollViewContentSync", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(A.prototype, "maxSizeNode", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(A.prototype, "confirmButton", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(A.prototype, "lblConfirmButton", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(A.prototype, "lblObserveButton", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(A.prototype, "textLabels", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Q = t(A.prototype, "instructionSteps", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Z = A)) || Z));
    n._RF.pop()
}