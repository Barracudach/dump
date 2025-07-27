import * as t from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";

function main() {
    var a;
    t._RF.push({}, "74f4fPeWxVIrKHp86p7aKYL", "Rotator", void 0);
    const {
        ccclass: c,
        property: l
    } = s;
    e("default", c(a = class extends n {
        onEnable() {
            this.node.angle = 0, o(this.node).by(1, {
                angle: -360
            }).repeatForever().start()
        }
        onDisable() {
            r.stopAllByTarget(this.node)
        }
    }) || a);
    t._RF.pop()
}