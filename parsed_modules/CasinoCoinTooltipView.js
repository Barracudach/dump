import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as l from "./cc.js";
import * as g from "./HallSceneLandscape.js";
import * as f from "./cv.js";
import * as N from "./HallScene.js";

function main() {
    var _, v, y, C, B, E, b, w, M, m, O, S;
    i._RF.push({}, "ce6dbzdsT5KbJ5szhR4BivI", "CasinoCoinTooltipView", void 0);
    const {
        ccclass: P,
        property: L
    } = r;
    var A = function(o) {
        return o[o.TOP = 0] = "TOP", o[o.BOTTOM = 1] = "BOTTOM", o
    }(A || {});
    o("default", (_ = L(n), v = L(n), y = L(s), C = L({
        type: n,
        tooltip: "The parent node will contain the tooltip node when tooltip showing."
    }), B = L({
        type: l(A)
    }), P((w = t((b = class extends p {
        constructor(...o) {
            super(...o), e(this, "toolTipNodeBottom", w, this), e(this, "toolTipNodeTop", M, this), e(this, "toolTipTriggerBtn", m, this), e(this, "parentTooltipNode", O, this), e(this, "toolTipDirection", S, this), this._isShowToolTip = !1, this._hallScene = null, this._tooltipsParentNode = null, this._originTooltipParent = null, this._originTooltipPos = void 0
        }
        start() {
            var o, t;
            this.toolTipNodeTop && (this.toolTipNodeTop.active = !1), this.toolTipNodeBottom && (this.toolTipNodeBottom.active = !1), this._originTooltipParent = null == (o = this.getToolTipNode()) ? void 0 : o.parent, this._originTooltipPos = null == (t = this.getToolTipNode()) ? void 0 : t.position, f.appConfig.isLandscapeLayout ? this._hallScene = T.getScene().getComponentInChildren(g) : this._hallScene = T.getScene().getComponentInChildren(N), this._hallScene && (this._tooltipsParentNode = a("tooltipsNode", this._hallScene.node), this._tooltipsParentNode || h("missing node with name: tooltipsNode ---\x3e pls add it ...."))
        }
        onEnable() {
            this.toolTipTriggerBtn && (f.appConfig.isLandscapeLayout ? (this.toolTipTriggerBtn.node.on(n.EventType.MOUSE_ENTER, this.onMouseOver, this), this.toolTipTriggerBtn.node.on(n.EventType.MOUSE_LEAVE, this.onMouseLeave, this)) : this.toolTipTriggerBtn.node.on(n.EventType.TOUCH_END, this.showToolTip, this)), f.MessageCenter.register("update_info", this.hideToolTip.bind(this), this.node), f.MessageCenter.register("update_gold", this.hideToolTip.bind(this), this.node), f.MessageCenter.register(f.Enum.MessageCenterAction.HideCashierCoinToolTips, this.hideToolTip.bind(this), this.node)
        }
        onDisable() {
            this.hideToolTip(), this.toolTipTriggerBtn && (f.appConfig.isLandscapeLayout ? (this.toolTipTriggerBtn.node.off(n.EventType.MOUSE_ENTER, this.onMouseOver, this), this.toolTipTriggerBtn.node.off(n.EventType.MOUSE_LEAVE, this.onMouseLeave, this)) : this.toolTipTriggerBtn.node.off(n.EventType.TOUCH_END, this.showToolTip, this)), f.MessageCenter.unregister("update_info", this.node), f.MessageCenter.unregister("update_gold", this.node), f.MessageCenter.unregister(f.Enum.MessageCenterAction.HideCashierCoinToolTips, this.node)
        }
        getToolTipNode() {
            switch (this.toolTipDirection) {
                case A.BOTTOM:
                    return this.toolTipNodeBottom;
                case A.TOP:
                    return this.toolTipNodeTop
            }
        }
        showToolTip() {
            if (this._isShowToolTip) return;
            this.changeParentToolTipNode(this._tooltipsParentNode), this._isShowToolTip = !0;
            const o = this.getToolTipNode();
            d.stopAllByTarget(o), o.getComponent(c).opacity = 0, u(o).set({
                active: !0
            }).to(.3, {}, {
                onUpdate(o, t) {
                    o.getComponent(c).opacity = 255 * t
                }
            }).delay(3).call((() => {
                this.hideToolTip()
            })).start()
        }
        changeParentToolTipNode(o) {
            this.parentTooltipNode = o;
            const t = this.getToolTipNode();
            if (this.parentTooltipNode) {
                const o = t.parent.convertToWorldSpaceAR(t.position),
                    e = this.parentTooltipNode.convertToNodeSpaceAR(o);
                t.parent = this.parentTooltipNode, t.position = e
            }
        }
        onMouseOver() {
            u(this.node).delay(.3).call(this.showToolTip.bind(this)).start()
        }
        onMouseLeave() {
            d.stopAllByTarget(this.node), this.hideToolTip()
        }
        hideToolTip() {
            if (!this._isShowToolTip) return;
            this._isShowToolTip = !1;
            const o = this.getToolTipNode();
            o && (d.stopAllByTarget(o), o.active = !1, this.changeParentToolTipNode(this._originTooltipParent), o.position = this._originTooltipPos, f.appConfig.isLandscapeLayout && f.tools.triggerPopupHideEvent())
        }
    }).prototype, "toolTipNodeBottom", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(b.prototype, "toolTipNodeTop", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(b.prototype, "toolTipTriggerBtn", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(b.prototype, "parentTooltipNode", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(b.prototype, "toolTipDirection", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return A.BOTTOM
        }
    }), E = b)) || E));
    i._RF.pop()
}