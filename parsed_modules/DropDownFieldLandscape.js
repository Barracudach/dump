import * as t from "./cc.js";
import * as i from "./cc.js";
import * as o from "./TooltipsManager.js";
import * as n from "./SelectView.js";
import * as s from "./cv.js";
import * as c from "./DropDownField.js";
import * as l from "./DropDownField.js";
import * as a from "./SelectViewLandscape.js";

function main() {
    var r;
    t._RF.push({}, "3e6d67XS95P+IqFaDaHNZEt", "DropDownFieldLandscape", void 0);
    const {
        ccclass: d,
        property: h
    } = i;
    e("default", d(r = class extends l {
        onClick(e = null) {
            this.isShown || (e && (e.propagationStopped = !0, s.AudioMgr.playButtonSound("button_click.mp3")), this.onArrowUpDown(!0), o.hideAllTooltips(), c.BirthDayType || (this.dropDownItemList = n.sortMethod(this.dropDownItemList, !0)), this.selectViewNode = a.showPrefab({
                titleKey: this.titleKey,
                searchPlaceholderKey: this.searchPlaceholderKey,
                itemPrefab: this.itemPrefab,
                itemClassName: this.itemClassName,
                items: this.dropDownItemList,
                searchEnabled: this.searchEnabled,
                onValueSelected: this.onValueSelected.bind(this),
                onValueExit: this.onDropDownHide.bind(this),
                onClickConfirm: this.onClickConfirm.bind(this),
                valueSelected: this.value,
                enableDynamicScroll: this.custmiseDropDownScrollContentSize
            }, this.dropDownSelectViewPrefab, this.onMouseEventNode ?? this.node))
        }
    }) || r);
    t._RF.pop()
}