import * as t from "./cc.js";
import * as n from "./cc.js";
import * as s from "./cc.js";
import * as c from "./Card.js";

function main() {
    var o;
    t._RF.push({}, "f37e63ThCBHXZ5Qz7cS/hHk", "CardLandscape", void 0);
    const {
        ccclass: a,
        property: r
    } = n;
    e("default", a(o = class extends c {
        onLoad() {
            super.onLoad();
            let e = this.img_eye.node.position;
            this.img_eye.node.setPosition(new s(e.x, e.y + 20, e.z))
        }
        resetAngle() {}
    }) || o);
    t._RF.pop()
}