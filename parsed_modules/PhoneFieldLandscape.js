import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cv.js";
import * as c from "./PhoneField.js";
import * as l from "./SelectViewLandscape.js";
import * as s from "./SelectView.js";

function main() {
    var d, u, p, h;
    n._RF.push({}, "ecb2blKcJVOm4nup2/uj8Ga", "PhoneFieldLandscape", void 0);
    const {
        ccclass: f,
        property: b
    } = r;
    e("default", (d = b(i), f((h = t((p = class extends c {
        constructor(...e) {
            super(...e), o(this, "parentNodeForDropdown", h, this)
        }
        initAreaCode() {
            a.AudioMgr.playButtonSound("button_click.mp3"), l.showPrefab({
                titleKey: "SelectPhoneArea_Title",
                searchPlaceholderKey: "SelectPhoneArea_SearchInputPlaceholder",
                itemPrefab: this.itemPhoneArea,
                itemClassName: "SelectItem_PhoneArea",
                items: s.i18nKeysToItems(this.areaCodeKeyList, this.fullAreaCode),
                searchEnabled: !0,
                onValueExit: this.onDropDownHide.bind(this),
                valueSelected: this.fullAreaCode,
                onValueSelected: this.updateAreaCode.bind(this)
            }, this.areaCode_prefab, this.parentNodeForDropdown), this.isDropDownShown = !0
        }
    }).prototype, "parentNodeForDropdown", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = p)) || u));
    n._RF.pop()
}