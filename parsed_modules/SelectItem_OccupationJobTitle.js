import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as c from "./cc.js";
import * as l from "./cv.js";
import * as s from "./SelectItem.js";
import * as r from "./ThemeSystem.js";
import * as u from "./ColorSystemType.js";
import * as a from "./ColorSystemTypeOther.js";

function main() {
    var p, d, h, C;
    i._RF.push({}, "50193Git0hG26wj4OHmoW0y", "SelectItem_OccupationJobTitle", void 0);
    const {
        ccclass: m,
        property: S
    } = n;
    e("default", (p = S(c), m((C = t((h = class extends s {
        constructor(...e) {
            super(...e), o(this, "labelOccupationCode", C, this), this.occupationCode = ""
        }
        updateSelectedUI() {
            super.updateSelectedUI(), this._isSelected ? this.labelOccupationCode.getComponent(r).setColorScheme(u.Other, a.MainBlue) : this.labelOccupationCode.getComponent(r).setColorScheme(u.Other, a.TypoGraphySecond)
        }
        updateView(e) {
            var t;
            if (!e) return;
            let o = null == e || null == (t = e.text) ? void 0 : t.split("-"),
                i = "";
            i = o && o.length > 1 ? o[1].trim() : e.text, this.label.string = i, this.occupationCode = e.id, this.labelOccupationCode.string = this.occupationCode, this.isSelected = e.selected == this.occupationCode
        }
        onBtnItemClick() {
            l.MessageCenter.send(l.Enum.MessageCenterAction.OnSelectViewOptionSelected, [this.index, this.occupationCode])
        }
    }).prototype, "labelOccupationCode", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = h)) || d));
    i._RF.pop()
}