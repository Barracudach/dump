import * as n from "./cc.js";
import * as t from "./cc.js";
import * as c from "./cv.js";
import * as i from "./InquireView.js";

function main() {
    var s;
    n._RF.push({}, "ba97aoiSyBDxbIBMysAdGs5", "InquireViewLandscape", void 0);
    const {
        ccclass: u,
        property: o
    } = t;
    e("InquireViewLandscape", u(s = class extends i {
        onBtnClose() {
            c.AudioMgr.playButtonSound("button_click.mp3"), this.node.active = !1
        }
    }) || s);
    n._RF.pop()
}