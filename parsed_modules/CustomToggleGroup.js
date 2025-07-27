import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as l from "./cc.js";
import * as s from "./cc.js";

function main() {
    var g, r, n, c;
    l._RF.push({}, "0a789kXYEpD1YJeRmpiOxUs", "CustomToggleGroup", void 0);
    const {
        ccclass: h,
        property: a
    } = s;
    e("CustomToggleGroup", (g = a({
        tooltip: "如果这个设置为 true， 那么 toggle 按钮在被点击的时候可以反复地被选中和未选中"
    }), h((c = t((n = class extends i {
        constructor(...e) {
            super(...e), o(this, "allowSwitchOff", c, this), this._toggleItems = []
        }
        get toggleItems() {
            return this._toggleItems
        }
        addToggle(e) {
            -1 === this._toggleItems.indexOf(e) && this._toggleItems.push(e), this._allowOnlyOneToggleChecked()
        }
        removeToggle(e) {
            let t = this._toggleItems.indexOf(e);
            t > -1 && this._toggleItems.splice(t, 1), this._makeAtLeastOneToggleChecked()
        }
        updateToggles(e) {
            this.enabledInHierarchy && e.isChecked && this._toggleItems.forEach(((t, o, l) => {
                e.isChecked && t !== e && t.isChecked && t.enabled && t.hideCheckMark()
            }))
        }
        onLoad() {}
        start() {
            this._makeAtLeastOneToggleChecked()
        }
        _allowOnlyOneToggleChecked() {
            let e = !1;
            return this._toggleItems.forEach(((t, o, l) => {
                e && t.enabled && t.hideCheckMark(), t.isChecked && t.enabled && (e = !0)
            })), e
        }
        _makeAtLeastOneToggleChecked() {
            this._allowOnlyOneToggleChecked() || this.allowSwitchOff || this._toggleItems.length > 0 && (this._toggleItems[0].isChecked = !0)
        }
    }).prototype, "allowSwitchOff", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), r = n)) || r));
    l._RF.pop()
}