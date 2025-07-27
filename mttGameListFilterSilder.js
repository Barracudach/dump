import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as e from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var g, c, d, p, m, B, _, b, f, y, x, C, F, w;
    o._RF.push({}, "aa8a1wnaJtFzK3qZqpHyGZv", "mttGameListFilterSilder", void 0);
    const {
        ccclass: D,
        property: S
    } = a;
    t("mttGameListFilterSilder", (g = S(r), c = S(r), d = S(e), p = S(e), m = S(n), B = S(n), D((f = i((b = class extends u {
        constructor(...t) {
            super(...t), s(this, "progressBar", f, this), s(this, "filledBar", y, this), s(this, "startBtn", x, this), s(this, "endBtn", C, this), s(this, "buyInCustomFrom", F, this), s(this, "buyInCustomTo", w, this), this._progressBarWidth = 0, this._isDraggingStart = !1, this._isDraggingEnd = !1, this._customValueMax = 0, this._customFrom = 0, this._customTo = 0
        }
        onEnable() {}
        start() {
            this._progressBarWidth = this.progressBar.width
        }
        setCustomMax(t) {
            this._customValueMax = t, this.buyInCustomTo.string = `$${this._customValueMax}`, this._customTo = this._customValueMax
        }
        onStartDragStartButton(t) {
            this._isDraggingStart = !0
        }
        onStartDragEndButton(t) {
            this._isDraggingEnd = !0
        }
        onDraggingStartButton(t, i) {
            const s = t.getUILocation(),
                o = this.filledBar.parent.getComponent(l).convertToNodeSpaceAR(new h(s.x, s.y, 0));
            o.x < 0 || o.x > this._progressBarWidth || o.x >= this.endBtn.node.position.x || i && i(o.x, 0)
        }
        onDraggingEndButton(t, i) {
            const s = t.getUILocation(),
                o = this.filledBar.parent.getComponent(l).convertToNodeSpaceAR(new h(s.x, s.y, 0));
            o.x > this._progressBarWidth || o.x < 0 || o.x <= this.startBtn.node.position.x || i && i(0, o.x)
        }
        onEndDrag(t) {
            this._isDraggingStart = !1, this._isDraggingEnd = !1
        }
        updateFilledBar(t, i) {
            let s = this.startBtn.node.position.x,
                o = this.endBtn.node.position.x;
            0 != t && (s = t), 0 != i && (o = i);
            let r = this._progressBarWidth;
            0 != t && (r = this._progressBarWidth - s - (this._progressBarWidth - o)), 0 != i && (r = o - s), this.filledBar.width = r, this.filledBar.setPosition(new h(s, this.filledBar.position.y, 0)), this.startBtn.node.setPosition(new h(s, this.filledBar.position.y, 0)), this.endBtn.node.setPosition(new h(o, this.filledBar.position.y, 0)), this.updateCustomField(s, o)
        }
        updateCustomField(t, i) {
            this._customFrom = Math.floor(t / this._progressBarWidth * this._customValueMax), this._customTo = Math.floor(i / this._progressBarWidth * this._customValueMax), this.buyInCustomFrom.string = `$${this._customFrom}`, this.buyInCustomTo.string = `$${this._customTo}`
        }
        onClickCustomFieldBeganFrom() {
            this.buyInCustomFrom.string = ""
        }
        onClickCustomFieldBeganTo() {
            this.buyInCustomTo.string = ""
        }
    }).prototype, "progressBar", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = i(b.prototype, "filledBar", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = i(b.prototype, "startBtn", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = i(b.prototype, "endBtn", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = i(b.prototype, "buyInCustomFrom", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = i(b.prototype, "buyInCustomTo", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = b)) || _));
    o._RF.pop()
}