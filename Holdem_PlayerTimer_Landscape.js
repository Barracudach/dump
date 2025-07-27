import * as t from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./Holdem_PlayerTimer_ts.js";
import * as n from "./TweenControl.js";

function main() {
    var c;
    t._RF.push({}, "dabe4I2CsBOZbYxzjRMjyka", "Holdem_PlayerTimer_Landscape", void 0);
    const {
        ccclass: l,
        property: d
    } = r;
    e("default", l(c = class extends a {
        runOverTimeEffect() {
            this.player && this.player.isSelf() ? this.overTimeNode.setPosition(new s(105, 12, 0)) : this.overTimeNode.setPosition(new s(0, 12, 0)), this.overTimeNode && (this.overTimeNode.active = !0, this.overTimeNode.setScale(o(0, 0, 0)), i(this.overTimeNode).sequence(i().to(.4, {
                scale: new s(1.2, 1.2, 1)
            }), i().to(.4, {
                scale: new s(1, 1, 1)
            }, {
                easing: n.easeInOut(.5)
            }), i().delay(1), i().call((() => {
                this.overTimeNode.active = !1, this.overTimeNode.setScale(o(0, 0, 0))
            }))).start())
        }
    }) || c);
    t._RF.pop()
}