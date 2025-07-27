import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var M, p, g, x, v, c, f, b, E, S, B, m, y, F;
    s._RF.push({}, "760faFRh25CXaRAHqqmrU43", "SliderDouble", void 0);
    const {
        ccclass: _,
        property: C,
        executeInEditMode: w
    } = a;
    e("SliderDouble", (M = C(r), p = C(r), g = C(n), x = C(r), v = C({
        type: l
    }), c = C({
        type: l
    }), _(f = w((E = i((b = class extends o {
        constructor(...e) {
            super(...e), t(this, "sliderMin", E, this), t(this, "sliderMax", S, this), t(this, "barFull", B, this), t(this, "sliderMinExtra", m, this), t(this, "valueMinBase", y, this), t(this, "valueMaxBase", F, this), this.sliderMinExtraWidget = null, this.eventTarget = null
        }
        get progressMin() {
            return this.sliderMin.progress
        }
        set progressMin(e) {
            this.sliderMin.progress = e, this.updateUI()
        }
        get progressMax() {
            return this.sliderMax.progress
        }
        set progressMax(e) {
            this.sliderMax.progress = e, this.updateUI()
        }
        get valueMin() {
            return this.valueMinBase + (this.valueMaxBase - this.valueMinBase) * this.progressMin
        }
        set valueMin(e) {
            this.progressMin = (e - this.valueMinBase) / (this.valueMaxBase - this.valueMinBase)
        }
        get valueMax() {
            return this.valueMinBase + (this.valueMaxBase - this.valueMinBase) * this.progressMax
        }
        set valueMax(e) {
            this.progressMax = (e - this.valueMinBase) / (this.valueMaxBase - this.valueMinBase)
        }
        onLoad() {
            this._validateProperties(), this._setSlidersEvents()
        }
        start() {
            this.updateUI()
        }
        onDestroy() {
            this._removeSlidersEvents()
        }
        _validateProperties() {
            if (null == this.sliderMin || null == this.sliderMax || null == this.sliderMinExtra) {
                let e = this.node.getComponentsInChildren(r);
                e.length > 0 && (this.sliderMin = e[0]), e.length > 1 && (this.sliderMax = e[1]), e.length > 2 && (this.sliderMinExtra = e[2])
            }
            if (null == this.barFull) {
                let e = d("bar/BackgroundFull", this.node);
                e && (this.barFull = e.getComponent(n))
            }
            this.sliderMinExtraWidget = this.sliderMinExtra.getComponent(h)
        }
        _setSlidersEvents() {
            this.sliderMin && this.sliderMin.node.on("slide", this.onSlideMin, this), this.sliderMax && this.sliderMax.node.on("slide", this.onSlideMax, this), this.sliderMinExtra && this.sliderMinExtra.node.on("slide", this.onSlideMinExtra, this)
        }
        _removeSlidersEvents() {
            this.sliderMin && this.sliderMin.node.off("slide"), this.sliderMax && this.sliderMax.node.off("slide"), this.sliderMinExtra && this.sliderMinExtra.node.off("slide")
        }
        bindEventTarget(e) {
            e && (this.eventTarget = e)
        }
        onSlideMin(e) {
            this.sliderMin.progress > this.sliderMax.progress && (this.sliderMin.progress = this.sliderMax.progress), this.updateUI(), this._onSlideEvent()
        }
        onSlideMax(e) {
            this.sliderMax.progress < this.sliderMin.progress && (this.sliderMax.progress = this.sliderMin.progress), this.updateUI(), this._onSlideEvent()
        }
        onSlideMinExtra(e) {
            this.sliderMin.progress = this.sliderMinExtra.progress * this.sliderMinExtraWidget.node.getComponent(u).width / this.node.getComponent(u).width, this.onSlideMin(this.sliderMin)
        }
        updateUI() {
            this.updateBarFull(), this.updateSliderMinExtra()
        }
        updateBarFull() {
            this.barFull.fillStart = this.sliderMin.progress, this.barFull.fillRange = this.sliderMax.progress - this.sliderMin.progress
        }
        updateSliderMinExtra() {
            this.sliderMinExtraWidget.right = (1 - this.sliderMax.progress + .5 * (this.sliderMax.progress - this.sliderMin.progress)) * this.node.getComponent(u).width, this.sliderMinExtraWidget.updateAlignment()
        }
        _onSlideEvent() {
            this.eventTarget && "function" == typeof this.eventTarget.onSlideEvent && this.eventTarget.onSlideEvent(this.valueMin, this.valueMax)
        }
    }).prototype, "sliderMin", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = i(b.prototype, "sliderMax", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = i(b.prototype, "barFull", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = i(b.prototype, "sliderMinExtra", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = i(b.prototype, "valueMinBase", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), F = i(b.prototype, "valueMaxBase", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 100
        }
    }), f = b)) || f) || f));
    s._RF.pop()
}