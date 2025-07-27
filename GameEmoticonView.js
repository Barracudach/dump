import * as i from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as s from "./Holdem_Basic_Item.js";

function main() {
    var n;
    o._RF.push({}, "69cbe9TkPRGD4WPe5JMLt2f", "GameEmoticonView", void 0);
    const {
        ccclass: c,
        property: a
    } = i;
    t("default", c(n = class extends s {
        constructor(...t) {
            super(...t), this.animationCount = 0
        }
        init() {
            e(this.holdemRoom) && this.holdemRoom.store && (this.animationCount = this.holdemRoom.store.anmiTimes)
        }
        setEmoticon(t) {
            if (t._GameEmoticons = this.node, t.setHoldemRoom(this.holdemRoom), cc_mtt.vv.DataManager.webPlatform) {
                let o = t.money,
                    i = t.chargeNode,
                    s = "0",
                    n = !1;
                this.animationCount > 2 && (s = "0.5"), e(i) && (i.active = n), e(o) && (o.string = s)
            }
        }
    }) || n);
    o._RF.pop()
}