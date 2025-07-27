import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./TooltipsHandler.js";
import * as c from "./TooltipsManager.js";
import * as u from "./cv.js";

function main() {
    var g, f, d, _, v, S, T;
    o._RF.push({}, "466aaCKhkdIRrF8hEJQzlEB", "HelpIconHandler", void 0);
    const {
        ccclass: y,
        property: M
    } = r, E = new n(0, 35, 0);
    t("default", (g = M(s), f = M(s), y((v = e((_ = class extends l {
        constructor(...t) {
            super(...t), i(this, "tooltipTitleKey", v, this), i(this, "tooltipContentKey", S, this), i(this, "maxTooltipWidth", T, this), this._isMouseHover = !1, this._titleString = void 0, this._contentString = void 0, this._posRefNode = null
        }
        get MouseOver() {
            return this._isMouseHover
        }
        setText(t, e) {
            this._titleString = t, this._contentString = e
        }
        setTextKey(t, e) {
            this.tooltipTitleKey = t, this.tooltipContentKey = e, this._titleString = u.config.getStringData(t), this._contentString = u.config.getStringData(e)
        }
        setPosRefNode(t) {
            this._posRefNode = t
        }
        set MouseOver(t) {
            if (this._isMouseHover != t)
                if (this._isMouseHover = t, this._isMouseHover) {
                    this._posRefNode || (this._posRefNode = this.node);
                    let t = this._posRefNode.getComponent(h).convertToWorldSpaceAR(n.ZERO);
                    this.maxTooltipWidth || (this.maxTooltipWidth = 500), this._titleString = u.config.getStringData(this.tooltipTitleKey, !1, this._titleString), this._contentString = u.config.getStringData(this.tooltipContentKey, !1, this._contentString), c.showToolTips(t, this._titleString, this._contentString, E, p.PointerDown, this.maxTooltipWidth)
                } else c.hideAllTooltips()
        }
        onLoad() {
            this._titleString = u.config.getStringData(this.tooltipTitleKey), this._contentString = u.config.getStringData(this.tooltipContentKey)
        }
        onEnable() {
            this.node.on(a.EventType.MOUSE_ENTER, this.onMouseOver, this), this.node.on(a.EventType.MOUSE_LEAVE, this.onMouseLeave, this)
        }
        onDisable() {
            this.node.off(a.EventType.MOUSE_ENTER, this.onMouseOver, this), this.node.off(a.EventType.MOUSE_LEAVE, this.onMouseLeave, this)
        }
        onMouseOver() {
            this.MouseOver = !0
        }
        onMouseLeave() {
            this.MouseOver = !1
        }
    }).prototype, "tooltipTitleKey", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), S = e(_.prototype, "tooltipContentKey", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), T = e(_.prototype, "maxTooltipWidth", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 500
        }
    }), d = _)) || d));
    o._RF.pop()
}