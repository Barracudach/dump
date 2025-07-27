import * as t from "./cc.js";
import * as o from "./cc.js";
import * as s from "./BottomMenuTabItemHandler.js";
import * as r from "./ColorSystemType.js";
import * as n from "./ColorSystemTypeOther.js";

function main() {
    var c;
    t._RF.push({}, "2d7afs6SChH9IzVTYjQKYoh", "BottomMenuTabItemHandlerMobile", void 0);
    const {
        ccclass: a,
        property: m
    } = o;
    e("default", a(c = class extends s {
        onMouseOver() {}
        onMouseLeave() {}
        setTextTheme(e) {
            e ? this.textThemeSystem.setColorScheme(r.Other, n.WhiteCreamy_100) : this.textThemeSystem.setColorScheme(r.Other, n.InsuranceTxtDescSmallBox)
        }
    }) || c);
    t._RF.pop()
}