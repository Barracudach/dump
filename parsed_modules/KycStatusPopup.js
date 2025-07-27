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
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as P from "./SlideView.js";
import * as m from "./cv.js";

function main() {
    var U, y, C, v, w, E, S, _, N, D, T, R, L;
    n._RF.push({}, "192e7eFPEBBZY74GtxiQvy/", "KycStatusPopup", void 0);
    const {
        ccclass: B,
        property: V
    } = l;
    let k = e("eKycStatusPopupType", function(e) {
        return e[e.REQESTED = 0] = "REQESTED", e[e.APPROVED = 1] = "APPROVED", e[e.REJECTED = 2] = "REJECTED", e
    }({}));
    e("default", (U = V(o), y = V(o), C = V(o), v = V(s), w = V([p]), B(((L = class e extends a {
        constructor(...e) {
            super(...e), i(this, "subTitleLabel", _, this), i(this, "contentLabel", N, this), i(this, "confirmBtnLabel", D, this), i(this, "popupIconSprite", T, this), i(this, "popupIconFrames", R, this), this.popUpPrefab = null, this.currentParams = null, this.popUpNode = null, this.popUp = null, this.slideView = null, this.destroyOnHide = !1
        }
        static getInstance() {
            return e.g_instance && e.g_instance.popUpPrefab || (e.g_instance = new e, e.g_instance.init()), e.g_instance
        }
        init() {
            let e = r.getBundle(m.appConfig.layoutUse);
            e ? this.onBundleLoaded(null, e) : r.loadBundle(m.appConfig.layoutUse, this.onBundleLoaded.bind(this))
        }
        onBundleLoaded(e, t) {
            e ? u(e.message || e) : t.load("prefabs/KycStatusPopup", h, function(e, t) {
                e ? u(e.message || e) : this.popUpPrefab = t
            }.bind(this))
        }
        onLoad() {
            this.slideView = this.node.getComponent(P)
        }
        onDisable() {
            var e;
            (this.node.active || m.tools.triggerPopupHideEvent(), this.destroyOnHide) && (null == (e = this.node) || e.destroy())
        }
        createPopUp(t = null) {
            if (this.popUpPrefab && c(this.popUpPrefab, !0)) {
                if (this.popUpNode = d(this.popUpPrefab), null !== t && c(t.parentNode)) t.parentNode.addChild(this.popUpNode);
                else {
                    b.getScene().getComponentInChildren(g).node.addChild(this.popUpNode), b.addPersistRootNode(this.popUpNode), this.popUpNode.setSiblingIndex(m.Enum.ZORDER_TYPE.ZORDER_TT)
                }
                this.popUpNode.addComponent(f), this.popUp = this.popUpNode.getComponent(e), this.popUpNode.active = !1, t && this.popUp.showPopup(t)
            } else this.init()
        }
        show() {
            this.isNodeActive(!1) || (this.slideView ? this.slideView.show(!1, (e => {
                var t;
                null == (t = this.currentParams) || null == t.closeCallback || t.closeCallback(), this.currentParams = null
            })) : this.node.active = !0)
        }
        hide() {
            var e;
            this.slideView ? this.slideView.hide() : (null == (e = this.currentParams) || null == e.closeCallback || e.closeCallback(), this.currentParams = null, this.node.active = !1)
        }
        hideAllPopup(e = !1) {
            this.destroyOnHide = e, null == this.node ? this.popUp && c(this.popUp.node, !0) && (this.unscheduleAllCallbacks(), this.popUp.hideAllPopup(e)) : this.hide()
        }
        isNodeActive(e = !0) {
            var t;
            return null == this.node ? (null == (t = this.popUp) ? void 0 : t.isNodeActive(e)) ?? !1 : 0 == e && null != this.slideView ? this.slideView.isActive : this.node.active
        }
        showPopup(t) {
            this == e.g_instance && m.appConfig.getGeneralConfig().multiWindowEnabled && m.focusWindow(1), null === this.node ? this.popUp && c(this.popUpNode, !0) ? (this.popUpNode || (this.popUpNode = this.popUp.node), this.scheduleOnce(this.popUp.showPopup.bind(this.popUp, t))) : this.createPopUp(t) : (m.tools.showPopupOnTop(this.node), this.updatePopUp(t))
        }
        updatePopUp(e) {
            this.currentParams = e, this.popupIconSprite.spriteFrame = this.popupIconFrames[this.currentParams.popupType], this.confirmBtnLabel.string = m.config.getStringData(this.currentParams.popupType == k.REQESTED ? "KYC_verify_now" : "OK"), this.subTitleLabel.string = m.config.getStringData("KYC_status_subtitle_" + k[this.currentParams.popupType]), this.contentLabel.string = m.config.getStringData("KYC_status_content_" + k[this.currentParams.popupType]), this.node.active || (m.tools.triggerPopupShowEvent(), this.show())
        }
        onConfirmButton() {
            var e;
            m.AudioMgr.playButtonSound("button_click.mp3"), null == (e = this.currentParams) || null == e.confirmCallback || e.confirmCallback(), this.hide()
        }
        onClickXCloseeButton() {
            this.hide()
        }
    }).g_instance = void 0, _ = t((S = L).prototype, "subTitleLabel", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(S.prototype, "contentLabel", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(S.prototype, "confirmBtnLabel", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(S.prototype, "popupIconSprite", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(S.prototype, "popupIconFrames", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), E = S)) || E));
    n._RF.pop()
}