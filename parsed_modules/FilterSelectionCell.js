import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./cv.js";

function main() {
    var s, u, h, m, d, p, g, I;
    n._RF.push({}, "88762V+vn1Muqj3JxMWIToq", "FilterSelectionCell", void 0);
    const {
        ccclass: f,
        property: b
    } = r;
    e("FilterSelectionCell", (s = b(l), u = b(a), h = b(a), f((p = t((d = class extends o {
        constructor(...e) {
            super(...e), i(this, "filterNameLabel", p, this), i(this, "selectionImage", g, this), i(this, "nextSelectionImage", I, this), this.currentIndex = -1
        }
        onLoad() {
            this.selectionImage.node.active = !1, this.nextSelectionImage.node.active = !1
        }
        updateSVReuseData(e, t) {
            t.length <= 0 || t.length - 1 < e || this.updateItemData(t[e], e)
        }
        updateItemData(e, t) {
            this.currentIndex = t, this.filterNameLabel.string = e.filterName, this.selectionImage.node.active = e.isSelected, this.nextSelectionImage.node.active = !1, e.hasSubFilters && (this.selectionImage.node.active = !1, this.nextSelectionImage.node.active = !0)
        }
        tableCellTouched(e, t) {
            c.MessageCenter.send(c.Enum.MessageCenterAction.FilterItemClick, this.currentIndex)
        }
        clearCellSelection() {
            this.selectionImage.node.active = !1
        }
    }).prototype, "filterNameLabel", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(d.prototype, "selectionImage", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(d.prototype, "nextSelectionImage", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = d)) || m));
    n._RF.pop()
}