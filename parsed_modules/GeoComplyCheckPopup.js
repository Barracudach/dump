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
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as f from "./SlideView.js";
import * as m from "./cv.js";

function main() {
    var P, U, C, y, v, w, I, T, N;
    o._RF.push({}, "4d08dhOdVpO9IgSRYE6CnHg", "GeoComplyCheckPopup", void 0);
    const {
        ccclass: O,
        property: V
    } = p;
    let R = e("eGeoComplyCheckPopupIconType", function(e) {
        return e[e.IN_PROGRESS = 0] = "IN_PROGRESS", e[e.VALID = 1] = "VALID", e[e.INVALID = 2] = "INVALID", e
    }({}));
    e("default", (P = V(n), U = V(n), C = V(s), O(((N = class e extends l {
        constructor(...e) {
            super(...e), i(this, "titleLabel", w, this), i(this, "textLabel", I, this), i(this, "typeIcons", T, this), this.popUpPrefab = null, this.currentParams = null, this.popUpNode = null, this.popUp = null, this.slideView = null, this.autoHideDelayTime = 5, this.autoHideTimeOut = null
        }
        static getInstance() {
            return e.g_instance && e.g_instance.popUpPrefab || (e.g_instance = new e, e.g_instance.init()), e.g_instance
        }
        init() {
            let e = a.getBundle(m.appConfig.layoutUse);
            e ? this.onBundleLoaded(null, e) : a.loadBundle(m.appConfig.layoutUse, this.onBundleLoaded.bind(this))
        }
        onBundleLoaded(e, t) {
            e ? h(e.message || e) : t.load("prefabs/GeoComplyCheckPopup", u, function(e, t) {
                e ? h(e.message || e) : (this.popUpPrefab = t, this.createPopUp())
            }.bind(this))
        }
        onLoad() {
            this.slideView = this.node.getComponent(f)
        }
        onDisable() {
            this.node.active || m.tools.triggerPopupHideEvent()
        }
        createPopUp(t = null) {
            this.popUpPrefab && d(this.popUpPrefab, !0) ? (this.popUpPrefab.data.active = !1, this.popUpNode = r(this.popUpPrefab), c.getScene().getComponentInChildren(g).node.addChild(this.popUpNode), c.addPersistRootNode(this.popUpNode), this.popUpNode.addComponent(b), this.popUpNode.setSiblingIndex(m.Enum.ZORDER_TYPE.ZORDER_TT), this.popUp = this.popUpNode.getComponent(e), this.popUp.hide(), t && this.popUp.showMsgI18n(t)) : this.init()
        }
        show() {
            this.isNodeActive(!1) || (this.slideView ? this.slideView.show(!1, (e => {
                var t;
                e && (null == (t = this.currentParams) || null == t.closeCallback || t.closeCallback())
            })) : this.node.active = !0), this.clearAutoHideTimeOut()
        }
        hide(e = !1) {
            var t;
            e || (null == (t = this.currentParams) || null == t.closeCallback || t.closeCallback());
            this.clearAutoHideTimeOut(), this.slideView ? this.slideView.hide() : this.node.active = !1
        }
        hideAllPopup(e = !1) {
            null == this.node ? this.popUp && d(this.popUp.node, !0) && (this.unscheduleAllCallbacks(), this.popUp.hideAllPopup(e)) : this.hide(e)
        }
        isNodeActive(e = !0) {
            var t;
            return null == this.node ? (null == (t = this.popUp) ? void 0 : t.isNodeActive(e)) ?? !1 : 0 == e && null != this.slideView ? this.slideView.isActive : this.node.active
        }
        showMsgI18n(t) {
            this == e.g_instance && m.appConfig.getGeneralConfig().multiWindowEnabled && m.focusWindow(1), null === this.node ? this.popUp && d(this.popUpNode, !0) ? (this.popUpNode || (this.popUpNode = this.popUp.node), this.scheduleOnce(this.popUp.showMsgI18n.bind(this.popUp, t))) : this.createPopUp(t) : (m.tools.showPopupOnTop(this.node), this.updatePopUp(t))
        }
        updatePopUp(e) {
            this.node.active || m.tools.triggerPopupShowEvent(), this.currentParams = e, e.iconType = e.iconType || R.IN_PROGRESS;
            for (let t = 0; t < this.typeIcons.length; t++) this.typeIcons[t].active = e.iconType == t;
            let t = e.title || (e.iconType == R.IN_PROGRESS ? "VerifyingYourAccount" : "VerificationComplete");
            this.titleLabel.string = m.config.getStringData(t);
            let i = e.text || "GeoCcomplyVerifyingAccountPopupText";
            this.textLabel.string = m.config.getStringData(i), this.show(), e.enableAutoHide && (this.autoHideTimeOut = setTimeout(this.hide.bind(this), 1e3 * this.autoHideDelayTime))
        }
        clearAutoHideTimeOut() {
            this.autoHideTimeOut && (clearTimeout(this.autoHideTimeOut), this.autoHideTimeOut = null)
        }
        onClickOkayButton() {
            var e;
            null == (e = this.currentParams) || null == e.okayCallback || e.okayCallback(), this.hide()
        }
        onClickXCloseeButton() {
            this.hide()
        }
    }).g_instance = void 0, w = t((v = N).prototype, "titleLabel", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(v.prototype, "textLabel", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(v.prototype, "typeIcons", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), y = v)) || y));
    o._RF.pop()
}