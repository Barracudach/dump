import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./cv.js";
import * as u from "./node-extension.js";
import * as d from "./ThemeSystem.js";
import * as h from "./ColorSystemType.js";
import * as p from "./ColorSystemTypeOther.js";

function main() {
    var m, S, b, y, f, g;
    n._RF.push({}, "e6dc4eUoNRCzrIpdWxo4MA0", "SelectItem", void 0);
    const {
        ccclass: C,
        property: x
    } = o;
    e("SelectItem", (m = x(s), S = x(l), C((f = t((y = class extends r {
        constructor(...e) {
            super(...e), i(this, "button", f, this), i(this, "label", g, this), this.index = 0, this.itemData = null, this._isSelected = !1
        }
        set isSelected(e) {
            this._isSelected = e, this.updateSelectedUI()
        }
        get isSelected() {
            return this._isSelected
        }
        updateSelectedUI() {
            this._isSelected ? this.label.getComponent(d).setColorScheme(h.Other, p.MainBlue) : this.label.getComponent(d).setColorScheme(h.Other, p.TypoGraphyMain)
        }
        set isDisabled(e) {
            this.button.interactable = !e, u.addOrGetComponent(this.node, a).opacity = e ? 128 : 255
        }
        get isDisabled() {
            return !this.button.interactable
        }
        updateSVReuseData(e, t) {
            let i = c.StringTools.getArrayLength(t);
            i < 1 || i - 1 < e || e < 0 || (this.index = e, this.itemData = t[e], this.updateView(t[e]))
        }
        updateView(e) {
            null != e.id ? this.isSelected = e.selected == e.id : this.isSelected = e.selected == e.text, this.label.string = e.text
        }
        onBtnItemClick() {
            let e = this.itemData.text;
            null != this.itemData.id && (e = this.itemData.id), c.MessageCenter.send(c.Enum.MessageCenterAction.OnSelectViewOptionSelected, [this.index, e])
        }
    }).prototype, "button", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(y.prototype, "label", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = y)) || b));
    n._RF.pop()
}