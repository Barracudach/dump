import * as t from "./cc.js";
import * as s from "./cc.js";
import * as c from "./GameListFilter2.js";

function main() {
    var a;
    t._RF.push({}, "9721b3sg1BDQa/RuB95ChJx", "GameListFilterLandscape", void 0);
    const {
        ccclass: i,
        property: n
    } = s;
    e("default", i(a = class extends c {
        setFilterYPos() {}
        onShow() {
            this.node.parent.active = !0, this.updateDelemeter(), this.checkTracing()
        }
        onHide() {
            this.node.parent.active = !1
        }
    }) || a);
    t._RF.pop()
}