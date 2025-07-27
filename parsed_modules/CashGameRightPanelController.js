import * as t from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./CashGameRightPanelView.js";
import * as s from "./CashGameRightPanelModel.js";
import * as n from "./MVCController.js";

function main() {
    var l;
    t._RF.push({}, "3654fQ5NuJBmZL3/Civpwu8", "CashGameRightPanelController", void 0);
    const {
        ccclass: r,
        property: h
    } = i;
    e("CashGameRightPanelController", r("CashGameRightPanelController")(l = class extends n {
        constructor(e, t) {
            super(o, s, e, t)
        }
        updateInfo(e, t) {
            t.tabName = e, this.model.data = t, a(this.view.getNode(), !0) && 0 == this.view.getNode().active && (this.view.getNode().active = !0), this.view.updateView(this.model)
        }
    }) || l);
    t._RF.pop()
}