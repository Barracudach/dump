import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as l from "./cc.js";
import * as s from "./cc.js";
import * as n from "./SliderDouble.js";
import * as u from "./cv.js";

function main() {
    var o, d, h, c, g, b, m, f, p, M, v, x;
    i._RF.push({}, "00de2JEtSVLz4DLl5iJE2DE", "FilterSliderDouble", void 0);
    const {
        ccclass: S,
        property: y
    } = r;
    e("FilterSliderDouble", (o = y(l), d = y(l), h = y(l), c = y(l), g = y(n), S((f = t((m = class extends s {
        constructor(...e) {
            super(...e), a(this, "filterNameLabel", f, this), a(this, "filterValue", p, this), a(this, "valueMin", M, this), a(this, "valueMax", v, this), a(this, "slider", x, this), this.currentIndex = -1, this.data = null
        }
        onLoad() {
            this.slider.bindEventTarget(this)
        }
        start() {
            setTimeout((() => u.resMgr.adaptWidget(this.filterNameLabel.node, !0, !1)), 1e3 / 60)
        }
        updateSVReuseData(e, t) {
            t.length <= 0 || t.length - 1 < e || this.updateItemData(t[e], e)
        }
        updateItemData(e, t) {
            u.resMgr.adaptWidget(this.node, !0, !1), this.data = e, this.currentIndex = t, this.filterNameLabel.string = e.filterName, this.slider.valueMinBase = e.valueMinBase, this.slider.valueMin = e.valueMin, this.slider.valueMaxBase = e.valueMaxBase, this.slider.valueMax = e.valueMax, this.updateMinMaxLabels(), this.updateValueLabel(e.valueMin, e.valueMax)
        }
        updateMinMaxLabels() {
            this.valueMin.string = Number(this.data.valueMinBase).toFixed(Number(this.data.decimals)), this.valueMax.string = Number(this.data.valueMaxBase).toFixed(Number(this.data.decimals)), this.data.isCurrency && (this.valueMin.string = u.dataHandler.getUserData().getCurrencySymbol() + this.valueMin.string, this.valueMax.string = u.dataHandler.getUserData().getCurrencySymbol() + this.valueMax.string)
        }
        onSlideEvent(e, t) {
            e = u.StringTools.toFixed(e, this.data.decimals), t = u.StringTools.toFixed(t, this.data.decimals), this.updateValueLabel(e, t), u.MessageCenter.send(u.Enum.MessageCenterAction.FilterSliderDoubleChanged, [this.currentIndex, e, t])
        }
        updateValueLabel(e, t) {
            let a = u.StringTools.toFixed(this.data.valueMinBase, this.data.decimals),
                i = u.StringTools.toFixed(this.data.valueMaxBase, this.data.decimals);
            if (e == a && t == i) this.filterValue.string = u.config.getStringData("Any");
            else {
                let l = e.toFixed(this.data.decimals);
                this.data.isCurrency && (l = u.dataHandler.getUserData().getCurrencySymbol() + l);
                let r = t.toFixed(this.data.decimals);
                this.data.isCurrency && (r = u.dataHandler.getUserData().getCurrencySymbol() + r), this.filterValue.string = e == a ? u.StringTools.formatC(u.config.getStringData("Smaller_than"), r) : t == i ? u.StringTools.formatC(u.config.getStringData("Bigger_than"), l) : l + " - " + r
            }
        }
    }).prototype, "filterNameLabel", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = t(m.prototype, "filterValue", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(m.prototype, "valueMin", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(m.prototype, "valueMax", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(m.prototype, "slider", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = m)) || b));
    i._RF.pop()
}