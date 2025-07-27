import * as t from "./cc.js";
import * as i from "./cc.js";
import * as o from "./SelectView.js";
import * as s from "./cv.js";
import * as n from "./DropDownFieldOccupation.js";
import * as c from "./SelectViewLandscape.js";

function main() {
    var a;
    t._RF.push({}, "5b6640gEutAM5sOqHhstSym", "DropDownFieldOccupationLandscape", void 0);
    const {
        ccclass: l,
        property: r
    } = i;
    e("default", l(a = class extends n {
        onClick(e = null) {
            this.isShown || (e && (e.propagationStopped = !0, s.AudioMgr.playButtonSound("button_click.mp3")), this.onArrowUpDown(!0), c.showPrefab({
                titleKey: this.titleKey,
                searchPlaceholderKey: this.searchPlaceholderKey,
                itemPrefab: this.itemPrefab,
                itemClassName: this.itemClassName,
                items: o.sortMethod(this.dropDownItemList, !0),
                searchEnabled: this.searchEnabled,
                onValueSelected: this.onValueSelected.bind(this),
                onValueExit: this.onDropDownHide.bind(this)
            }, this.dropDownSelectViewPrefab, this.onMouseEventNode))
        }
    }) || a);
    t._RF.pop()
}