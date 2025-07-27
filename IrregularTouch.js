import * as r from "./cc.js";
import * as e from "./cc.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";

function main() {
    var s;
    o._RF.push({}, "92e28L5TApKranTcnXRJYmN", "IrregularTouch", void 0);
    const {
        ccclass: p,
        property: l
    } = c;
    t("default", p(s = class extends e {
        constructor(...t) {
            super(...t), this._oldHitTest = null
        }
        onLoad() {
            this.node.getComponent(n)
        }
        polygonHitTest(t, o = 0) {
            let e = this.node;
            var n = e.getComponent(r);
            return n ? (point = e.convertToNodeSpaceAR(t), point.x -= e.getContentSize().width / 2, point.y -= e.getContentSize().height / 2, i.pointInPolygon(point, n.points)) : e._oldHitTest(point)
        }
    }) || s);
    o._RF.pop()
}