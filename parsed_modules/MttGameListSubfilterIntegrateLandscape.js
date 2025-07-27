import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./MttGameListSubfilter.js";
import * as c from "./MTTSubfilterTextButton.js";
import * as d from "./DesignSystemButtonBase.js";
import * as f from "./DesignSystemButtonBase.js";

function main() {
    var g, S, b, p, w, B, A;
    r._RF.push({}, "b8d79HhlrtKfp8gdSiE793G", "MttGameListSubfilterIntegrateLandscape", void 0);
    const {
        ccclass: m,
        property: v
    } = n;
    t("MttGameListSubfilterIntegrateLandscape", (g = m("MttGameListSubfilterIntegrateLandscape"), S = v(f), b = v(f), g((B = e((w = class extends u {
        constructor(...t) {
            super(...t), i(this, "leftArrowBtn", B, this), i(this, "rightArrowBtn", A, this)
        }
        onLoad() {
            super.onLoad(), this.filterButton.node.active = !0;
            this.filterButton.enableNotification(!1), this.leftArrowBtn.btnState = d.disabled, this.rightArrowBtn.btnState = d.normal
        }
        onEnable() {
            this.rightScrollView.node.off(o.EventType.SIZE_CHANGED, this.updateFadeOutOverlay, this), this.rightListSubfilter.off(o.EventType.SIZE_CHANGED, this.updateFadeOutOverlay, this), this.rightScrollView.node.on(o.EventType.SIZE_CHANGED, this.updateFadeOutOverlay, this), this.rightListSubfilter.on(o.EventType.SIZE_CHANGED, this.updateFadeOutOverlay, this), this.rightScrollView.node.on(l.EventType.SCROLL_ENDED, this.scrollEnded, this)
        }
        onDisable() {
            s(this.rightScrollView.node) && s(this.rightListSubfilter) && (this.rightScrollView.node.off(o.EventType.SIZE_CHANGED, this.updateFadeOutOverlay, this), this.rightListSubfilter.off(o.EventType.SIZE_CHANGED, this.updateFadeOutOverlay, this), this.rightScrollView.node.off(l.EventType.SCROLL_ENDED, this.scrollEnded, this))
        }
        scrollEnded() {
            if (s(this.fadeOutOverlay) && this.fadeOutOverlay.active) {
                const t = this.rightScrollView.getScrollOffset(),
                    e = this.rightScrollView.getMaxScrollOffset();
                Math.abs(t.x) <= 1 ? (this.leftArrowBtn.btnState = d.disabled, this.leftArrowBtn.getComponent(a).interactable = !1, this.rightArrowBtn.btnState = d.normal, this.rightArrowBtn.getComponent(a).interactable = !0) : Math.abs(t.x) >= e.x - 1 ? (this.leftArrowBtn.btnState = d.normal, this.leftArrowBtn.getComponent(a).interactable = !0, this.rightArrowBtn.btnState = d.disabled, this.rightArrowBtn.getComponent(a).interactable = !1) : (this.leftArrowBtn.btnState = d.normal, this.leftArrowBtn.getComponent(a).interactable = !0, this.rightArrowBtn.btnState = d.normal, this.rightArrowBtn.getComponent(a).interactable = !0)
            }
        }
        updateFadeOutOverlay() {
            if (s(this.fadeOutOverlay)) {
                const t = this.rightScrollView.content.getContentSize(),
                    e = this.rightScrollView.node.getContentSize(),
                    i = this.rightScrollView.node.getComponent(h);
                t.width < e.width ? (this.fadeOutOverlay.active = !1, s(i) && (i.right = 0)) : (this.fadeOutOverlay.active = !0, s(i) && (i.right = 120)), i.updateAlignment()
            }
        }
        setupButtonIcon(t, e) {
            const i = t.getComponent(c);
            null == i || i.setIcon(e.icon)
        }
        setSubfilterAmount(t, e) {
            const i = this.getSubfilterNodeByName(t);
            if (i) {
                const t = i.getComponent(c);
                null == t || t.setAmount(e)
            }
        }
        onClickLeftArrow() {
            this.rightScrollView.scrollToBottomLeft(.3), this.leftArrowBtn.btnState = d.disabled
        }
        onClickRightArrow() {
            this.rightScrollView.scrollToBottomRight(.3), this.rightArrowBtn.btnState = d.disabled
        }
        setFilterToggleButton(t) {
            var e;
            if (s(null == (e = this.filterButton) ? void 0 : e.node)) {
                this.filterButton.enableNotification(Boolean(t))
            }
        }
    }).prototype, "leftArrowBtn", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(w.prototype, "rightArrowBtn", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = w)) || p));
    r._RF.pop()
}