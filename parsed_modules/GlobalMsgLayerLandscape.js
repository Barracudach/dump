import * as o from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";
import * as t from "./GlobalMsgLayer.js";

function main() {
    var c;
    a._RF.push({}, "fb49axjHeNJcqCypYDw7HWQ", "GlobalMsgLayerLandscape", void 0);
    const {
        ccclass: n,
        property: r
    } = s;
    e("GlobalMsgLayerLandscape", n(c = class extends t {
        onLoad() {
            super.onLoad(), this.node.on(o.MOUSE_DOWN, this._onClickBack, this)
        }
        autoShow(e, a = !1) {
            super.autoShow(e, a)
        }
        autoHide(e = !1) {
            super.autoHide(e)
        }
    }) || c);
    a._RF.pop()
}