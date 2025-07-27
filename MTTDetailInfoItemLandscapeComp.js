import * as t from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as i from "./MTTDetailInfoItemComp.js";
import * as s from "./ButtonTooltip.js";

function main() {
    var l;
    t._RF.push({}, "72bbdUNjRBDiKfRgNmYcefT", "MTTDetailInfoItemLandscapeComp", void 0);
    const {
        ccclass: c,
        property: u
    } = n;
    e("MTTDetailInfoItemLandscapeComp", c("MTTDetailInfoItemLandscapeComp")(l = class extends i {
        setInfoDialogText(e) {
            const t = this.node.getComponent(s);
            t && t.setInfoDialogText(e)
        }
        setValueLabel(e) {
            this.valueLabel.string = e, this.valueLabel.overflow = o.Overflow.NONE, this.valueLabel.updateRenderData(!0);
            const t = this.valueLabel.getComponent(a);
            t.width >= this.valueLimit.width && (this.valueLabel.overflow = o.Overflow.RESIZE_HEIGHT, t.width = this.valueLimit.width), this.valueLabel.updateRenderData(!0), this.node.getComponent(a).height = t.height
        }
    }) || l);
    t._RF.pop()
}