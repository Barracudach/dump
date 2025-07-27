import * as t from "./cc.js";
import * as s from "./cc.js";
import * as c from "./MyTicketsPrefab.js";

function main() {
    var a;
    t._RF.push({}, "1fb3ftNM7xBsb2RJ4ugqT+6", "MyTicketsPrefabLandscape", void 0);
    const {
        ccclass: n,
        property: r
    } = s;
    e("default", n(a = class extends c {
        onEnable() {
            this.headerContainer.active = !1, this.setupMessageCenter()
        }
    }) || a);
    t._RF.pop()
}