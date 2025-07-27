import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cv.js";
import * as h from "./FiltersDataModel.js";
import * as c from "./FiltersDataModel.js";
import * as u from "./ListView.js";
import * as f from "./FilterSelectionCell.js";
import * as d from "./FilterSliderDouble.js";
import * as g from "./FilterTimeInterval.js";

function main() {
    var p, D, b, m, F, w, S, L, C, y;
    l._RF.push({}, "ac090kbt0hAjprFtAjw5SQr", "FilterView", void 0);
    const {
        ccclass: V,
        property: M
    } = a;
    e("FilterView", (p = M(r), D = M(u), b = M(s), m = M(r), V((S = t((w = class extends n {
        constructor(...e) {
            super(...e), i(this, "pageTitle", S, this), i(this, "filterScrollView", L, this), i(this, "filterListItem", C, this), i(this, "titleLabel", y, this), this.filterViewDataKey = "", this.isMainView = !0, this.filterListData = null, this.currentSelectedFilter = 0
        }
        onEnable() {
            o.MessageCenter.register(o.Enum.MessageCenterAction.FilterItemClick, this.tableCellTouchedResponse.bind(this), this.node), o.MessageCenter.register(o.Enum.MessageCenterAction.FilterSliderDoubleChanged, this.filterSliderDoubleChanged.bind(this), this.node)
        }
        onDisable() {
            o.MessageCenter.unregister(o.Enum.MessageCenterAction.FilterItemClick, this.node), o.MessageCenter.unregister(o.Enum.MessageCenterAction.FilterSliderDoubleChanged, this.node)
        }
        start() {
            this.isMainView = !0, this.registerPrefab(), this.filterListData = c.getInstance().getFilterListData(this.filterViewDataKey), this.populateData(this.filterListData)
        }
        registerPrefab() {
            this.filterScrollView.bindScrollEventTarget(this), this.filterScrollView.init(this.scrollListBindItem.bind(this), this.scrollListGetItemType.bind(this))
        }
        scrollListBindItem(e, t, i) {
            t.filterType == h.Toggle ? e.getComponent(f).updateItemData(t, i) : t.filterType == h.SliderDouble ? e.getComponent(d).updateItemData(t, i) : t.filterType == h.TimeInterval && e.getComponent(g).updateItemData(t, i)
        }
        scrollListGetItemType(e, t) {
            return e.filterType
        }
        populateData(e) {
            e.titleName && (this.titleLabel.string = e.titleName), e.filterList.length > 0 && this.filterScrollView.notifyDataSetChanged([...e.filterList])
        }
        cancelFilterView(e, t) {
            this.goBack()
        }
        goBack() {
            this.isMainView ? this.node.removeFromParent() : (this.isMainView = !0, this.populateData(this.filterListData))
        }
        resetFilter(e, t) {
            this.filterListData = c.getInstance().getInitalFilterViewData(), c.getInstance().updateFilterViewData(this.filterViewDataKey, this.filterListData), o.MessageCenter.send(o.Enum.MessageCenterAction.FilterHandsHistory, this.filterListData), this.isMainView ? this.filterScrollView.notifyDataSetChanged([...this.filterListData.filterList]) : this.goBack()
        }
        applyFilter(e, t) {
            c.getInstance().updateFilterViewData(this.filterViewDataKey, this.filterListData), o.MessageCenter.send(o.Enum.MessageCenterAction.FilterHandsHistory, this.filterListData), this.node.removeFromParent()
        }
        tableCellTouchedResponse(e) {
            let t = this.filterListData.filterList;
            if (this.isMainView) this.currentSelectedFilter = e, t[e].hasSubFilters ? (this.isMainView = !1, this.populateData(t[e].subfilter)) : (t[e].isSelected = !t[e].isSelected, this.filterScrollView.notifyDataSetChanged([...t]));
            else {
                let i = t[this.currentSelectedFilter].subfilter.filterList;
                i[e].isSelected = !i[e].isSelected, this.filterScrollView.notifyDataSetChanged([...i])
            }
        }
        filterSliderDoubleChanged(e) {
            let t = this.filterListData.filterList;
            t[e[0]].valueMin = e[1], t[e[0]].valueMax = e[2]
        }
    }).prototype, "pageTitle", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(w.prototype, "filterScrollView", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(w.prototype, "filterListItem", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(w.prototype, "titleLabel", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = w)) || F));
    l._RF.pop()
}