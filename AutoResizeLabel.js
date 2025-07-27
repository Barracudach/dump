import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./CommonTools.js";

function main() {
    var c, z, f, S, d, b, m, L, R, y, w, _, C, x, O, F, E, v, N, T, H, I, D, M;
    n._RF.push({}, "0375cR4J1dPhLYOr2PWcV5Y", "AutoResizeLabel", void 0);
    const {
        ccclass: A,
        property: W,
        menu: U,
        executeInEditMode: k
    } = a;
    e("AutoResizeLabel", (c = U("Custom UI Component/AutoResizeLabel"), z = W(s), f = W({
        visible: function() {
            return r(this.sizeRefNode)
        }
    }), S = W({
        type: o,
        visible: function() {
            return this.overflow == h.Overflow.NONE && !r(this.sizeRefNode)
        }
    }), d = W({
        type: o,
        visible: function() {
            return this.overflow == h.Overflow.RESIZE_HEIGHT && !r(this.sizeRefNode)
        }
    }), b = W({
        type: o,
        visible: function() {
            return this.overflow == h.Overflow.SHRINK
        }
    }), m = W(Boolean), L = W({
        type: o,
        visible: function() {
            return this.useChangeFontSize
        }
    }), R = W({
        type: o,
        visible: function() {
            return this.useChangeFontSize
        }
    }), y = W({
        type: o,
        visible: function() {
            return this.useChangeFontSize
        }
    }), A(w = c(w = k((C = t((_ = class extends h {
        constructor(...e) {
            super(...e), i(this, "sizeRefNode", C, this), i(this, "refreshOnRefNodeSizeChange", x, this), i(this, "maxWidth", O, this), i(this, "maxHeight", F, this), i(this, "fontSizeTolerance", E, this), i(this, "suffix", v, this), i(this, "needSetStringWhenEnable", N, this), i(this, "useChangeFontSize", T, this), i(this, "useCommonToolElipseText", H, this), i(this, "maxFontSize", I, this), i(this, "minFontSize", D, this), i(this, "resizeFontStep", M, this), this._currentFontSize = 0, this.useUpdateRenderData = !1, this.tempString = "", this.originalString = "", this._lowerLength = 0, this._upperLength = 0, this._isResizing = !1, this._onResizeComplete = null, this.uiOpacity = null
        }
        onLoad() {
            var e;
            (super.onLoad(), this.uiOpacity = this.getOrAddUIOpacity(), r(this.sizeRefNode) && this.refreshOnRefNodeSizeChange) && (null == (e = this.sizeRefNode) || e.on(s.EventType.SIZE_CHANGED, (() => {
                this.setString(this.originalString, this.useUpdateRenderData, !0)
            })))
        }
        getOriginString() {
            return this.originalString
        }
        getOrAddUIOpacity() {
            if (r(this.uiOpacity)) return this.uiOpacity;
            let e = this.node.getComponent(l);
            return r(e) || (e = this.node.addComponent(l)), e
        }
        onDestroy() {
            var e;
            r(this.sizeRefNode) && (null == (e = this.sizeRefNode) || e.off(s.EventType.SIZE_CHANGED));
            super.onDestroy()
        }
        onEnable() {
            super.onEnable(), this.needSetStringWhenEnable && this.setString(this.originalString, this.useUpdateRenderData, !0)
        }
        update(e) {}
        isEqualToOriginalString(e) {
            return this.originalString == e
        }
        setString(e, t = !1, i = !1) {
            e = e || "", (i || this.originalString !== e || this._isResizing) && (this.useCommonToolElipseText ? (this.originalString != e || i) && (this.scheduleOnce((() => {
                p.instance.ellipseText(this, e, this.getMaxWidth())
            }), .01), this.originalString = e) : this.string != e || i ? (this._isResizing = !0, this.useUpdateRenderData = t, this.string = e, this.tempString = e, this.originalString = e, this._upperLength = 0, this._lowerLength = 0, this.useChangeFontSize && (this._currentFontSize = this.maxFontSize, this.fontSize = this.maxFontSize), this.unscheduleAllCallbacks(), this.nextResizeLabelLoop()) : this._isResizing || this.resizeLabelLoopEnd())
        }
        resizeLabelLoop() {
            if (r(this.node))
                if (this.useChangeFontSize && this.fontSize > this.minFontSize) this.changeLabelFont();
                else {
                    switch (this.overflow) {
                        case h.Overflow.NONE:
                            this.node.getContentSize().width > this.getMaxWidth() ? this._upperLength = this.tempString.length : this._lowerLength = this.tempString.length;
                            break;
                        case h.Overflow.RESIZE_HEIGHT:
                            this.node.getContentSize().height > this.getMaxHeight() ? this._upperLength = this.tempString.length : this._lowerLength = this.tempString.length
                    }
                    if (this._upperLength - this._lowerLength > 1) {
                        let e = Math.floor((this._lowerLength + this._upperLength) / 2);
                        this.tempString = this.originalString.slice(0, e), this.string = this.tempString + this.suffix, this.nextResizeLabelLoop()
                    } else this.tempString = this.originalString.slice(0, this._lowerLength), this._upperLength > 0 && (this.tempString += this.suffix), this.string = this.tempString, this.resizeLabelLoopEnd()
                }
        }
        animShowOpacity() {
            this.uiOpacity = this.getOrAddUIOpacity(), u.stopAllByTarget(this.uiOpacity), g(this.uiOpacity).delay(.02).call((() => {
                this.uiOpacity.opacity = 255
            })).start()
        }
        changeLabelFont() {
            if (!this.useChangeFontSize) return;
            let e = !1;
            switch (this.overflow) {
                case h.Overflow.NONE:
                    this.node.getContentSize().width > this.getMaxWidth() && (e = !0);
                    break;
                case h.Overflow.RESIZE_HEIGHT:
                    this.node.getContentSize().height > this.getMaxHeight() && (e = !0)
            }
            e ? (this._currentFontSize -= this.resizeFontStep, this._currentFontSize < this.minFontSize && (this._currentFontSize = this.minFontSize), this.fontSize = this._currentFontSize, this.nextResizeLabelLoop()) : this.resizeLabelLoopEnd()
        }
        nextResizeLabelLoop() {
            this.useUpdateRenderData ? (this.getComponent(h).updateRenderData(), this.resizeLabelLoop()) : this.scheduleOnce(this.resizeLabelLoop.bind(this))
        }
        resizeLabelLoopEnd() {
            this._onResizeComplete && this._onResizeComplete(this), this._isResizing = !1, this.tempString = "", this._lowerLength = 0, this._upperLength = 0, this.useChangeFontSize && (this._currentFontSize = this.maxFontSize), this.animShowOpacity()
        }
        getMaxWidth() {
            return Math.max(0, r(this.sizeRefNode) ? this.sizeRefNode.getContentSize().width : this.maxWidth)
        }
        getMaxHeight() {
            return Math.max(0, r(this.sizeRefNode) ? this.sizeRefNode.getContentSize().height : this.maxHeight)
        }
        setResizeCompleteCallback(e = null) {
            this._onResizeComplete = e
        }
    }).prototype, "sizeRefNode", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(_.prototype, "refreshOnRefNodeSizeChange", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), O = t(_.prototype, "maxWidth", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), F = t(_.prototype, "maxHeight", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), E = t(_.prototype, "fontSizeTolerance", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), v = t(_.prototype, "suffix", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return "..."
        }
    }), N = t(_.prototype, "needSetStringWhenEnable", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), T = t(_.prototype, "useChangeFontSize", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), H = t(_.prototype, "useCommonToolElipseText", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), I = t(_.prototype, "maxFontSize", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 39
        }
    }), D = t(_.prototype, "minFontSize", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 33
        }
    }), M = t(_.prototype, "resizeFontStep", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 3
        }
    }), w = _)) || w) || w) || w));
    n._RF.pop()
}