import * as t from "./cc.js";
import * as i from "./MVCController.js";
import * as s from "./MVCModel.js";
import * as n from "./MttGroupFilterPopupView.js";

function main() {
    t._RF.push({}, "634c0Nsql1KVrm4MywCq4kM", "MttGroupFilterPopupController", void 0);
    class o extends s {
        constructor(...e) {
            super(...e), this.isShow = void 0, this.filterOptions = void 0
        }
    }
    e("MttGroupFilterPopupModel", o);
    e("default", class extends i {
        get parent() {
            return this._parent
        }
        set parent(e) {
            this._parent = e
        }
        constructor(e, t) {
            super(n, o, t), this._parent = null, this.onFilterChanged = e, this.model.isShow = !1
        }
        onInitializeBegin(e) {
            this.view.onFilterOptionChanged = this.onFilterOptionChanged.bind(this), super.onInitializeBegin(e)
        }
        onInitializeEnded(e) {
            super.onInitializeEnded(e)
        }
        start() {}
        onViewEvent(e, ...t) {
            switch (e) {
                case "CLOSE_BTN_CLICK":
                    this._parent && this._parent.hideGroupFiler();
                    break;
                case "EXPAND_GROUP_FILTER":
                    this._parent && this._parent.resizeGroupFilter(t[0]);
                    break;
                case "POPUP_ON_HIDE":
                    this.model.isShow = !1
            }
        }
        onFilterOptionChanged(e, t = !1) {
            this.model.filterOptions = e, this.onFilterChanged(e, t)
        }
        show() {
            this.model.isShow = !0, this.view.updateView(this.model)
        }
        hide(e = !0) {
            this.model.isShow = !1, this.view.updateView(this.model, e)
        }
        reset() {
            this.model.filterOptions = null, this.view.reset()
        }
        setBuyinCustomField(e) {
            this.view.setBuyinCustomField(e)
        }
        getFilterOptions() {
            return this.model.filterOptions ? this.model.filterOptions : null
        }
        isFiltered() {
            let e = this.model.filterOptions;
            return e && ("" != e.searchName || e.showRunning || e.hideSatellites || !e.buyin.includes(0) || !e.gameType.includes(0))
        }
        isFilteredExceptName() {
            let e = this.model.filterOptions;
            return e && (e.showRunning || e.hideSatellites || !e.buyin.includes(0) || !e.gameType.includes(0))
        }
        isShowing() {
            return this.model.isShow
        }
    }), t._RF.pop()
}