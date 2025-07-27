import * as t from "./cc.js";
import * as o from "./cc.js";
import * as c from "./cc.js";
import * as n from "./cv.js";

function main() {
    var s;
    t._RF.push({}, "c108fSuHDRGCJsvmdgZhVfq", "RedEnvelopeHallPopup", void 0);
    const {
        ccclass: u,
        property: l
    } = c;
    e("default", u(s = class extends o {
        start() {}
        onCloseBtnClick() {
            n.AudioMgr.playButtonSound("close.mp3"), this.node.active = !1
        }
    }) || s);
    t._RF.pop()
}