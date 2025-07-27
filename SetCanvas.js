import * as t from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";

function main() {
    var h;
    t._RF.push({}, "3d2997rec5Lcr7VRLkbuxP0", "SetCanvas", void 0);
    const {
        ccclass: g
    } = s;
    class d {
        constructor() {
            this.hasAddResizeEvent = !1, this.setBrowser = () => {
                this.setPolicy(), n.emit("canvas-resize")
            }
        }
        static get instance() {
            return d._instance || (d._instance = new d), d._instance
        }
        init() {
            this.hasAddResizeEvent || (this.hasAddResizeEvent = !0, this.set()), o.isNative && this.setPolicy(), window.dispatchEvent(new Event("resize"))
        }
        set() {
            o.isNative || window.addEventListener("resize", this.setBrowser)
        }
        onDestroy() {
            o.isNative || window.removeEventListener("resize", this.setBrowser)
        }
        setPolicy() {
            r.windowSize.width / r.windowSize.height > n.getDesignResolutionSize().width / n.getDesignResolutionSize().height ? n.setDesignResolutionSize(n.getDesignResolutionSize().width, n.getDesignResolutionSize().height, new a(a.ContainerStrategy.EQUAL_TO_FRAME, a.ContentStrategy.FIXED_HEIGHT)) : n.setDesignResolutionSize(n.getDesignResolutionSize().width, n.getDesignResolutionSize().height, new a(a.ContainerStrategy.EQUAL_TO_FRAME, a.ContentStrategy.FIXED_WIDTH))
        }
    }
    d._instance = null;
    e("default", g(h = class extends i {
        onLoad() {
            this.setKeepScreenOn(!0)
        }
        start() {
            d.instance.init()
        }
        onDestroy() {
            this.setKeepScreenOn(!1), c.appConfig.isWebApp && d.instance.onDestroy()
        }
        setKeepScreenOn(e) {}
    }) || h);
    t._RF.pop()
}