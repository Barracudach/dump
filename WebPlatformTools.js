import * as e from "./cc.js";
import * as s from "./cc.js";
import * as n from "./MTTConnector.js";

function main() {
    var c, o;
    e._RF.push({}, "2c36dLxKMFLC4xsaAypDCbC", "WebPlatformTools", void 0);
    const {
        ccclass: a,
        property: r
    } = s;
    t("default", a(((o = class t {
        constructor() {
            this.jsScheme = "mttjs://"
        }
        static get instance() {
            return t._instance || (t._instance = new t), t._instance
        }
        sendCCJS(t) {
            let e = this.jsScheme + t;
            cc_mtt.vv.ConsoleLog.log("sendJS", e), n.instance.sendMessageCenter("mttNotify", e)
        }
    })._instance = null, c = o)) || c);
    e._RF.pop()
}