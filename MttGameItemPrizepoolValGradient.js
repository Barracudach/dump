import * as e from "./cc.js";
import * as a from "./cc.js";
import * as o from "./Gradient.js";

function main() {
    var s;
    e._RF.push({}, "72210vZZNVJW62NlmJXJRRe", "MttGameItemPrizepoolValGradient", void 0);
    const {
        ccclass: r,
        property: i
    } = a;
    t("MttGameItemPrizepoolValGradient", r("MttGameItemPrizepoolValGradient")(s = class extends o {
        update(t) {}
        lateUpdate(t) {
            if (this.calcWorldPosChangeReq && this.lastWorldPos) {
                let t = this.getWorldPos();
                Math.abs(this.lastWorldPos.x - t.x) + Math.abs(this.lastWorldPos.y - t.y) > .1 && this.onNodePositionChanged(), this.lastWorldPos = t
            }
        }
    }) || s);
    e._RF.pop()
}