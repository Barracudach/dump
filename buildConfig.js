import * as e from "./cc.js";
import * as r from "./Enum.js";
import * as a from "./cv.js";

function main() {
    e._RF.push({}, "7d76aNlW7pO6p4YymFtxa4z", "buildConfig", void 0);
    class c {
        constructor() {
            this.webVersion = "3.7.6"
        }
        get isPro() {
            return this.buildPlatform == r.PRO
        }
        get isPrePro() {
            return this.buildPlatform == r.PRE_PRO || this.buildPlatform == r.PRO
        }
        get writeWebLog() {
            if (cc_mtt.vv && cc_mtt.vv.DataManager && 0 != cc_mtt.vv.DataManager.webPlatform) switch (this.buildPlatform) {
                case r.DEV:
                case r.PRE_PRO:
                    return !0
            }
            return !1
        }
        get blockConsoleLog() {
            if (cc_mtt.vv && cc_mtt.vv.DataManager && 0 != cc_mtt.vv.DataManager.webPlatform) switch (this.buildPlatform) {
                case r.PKW_PRO:
                case r.PRO:
                    return !0
            }
            return !1
        }
        get buildPlatform() {
            switch (c.getDebugMode()) {
                case 0:
                    return r.PKW_PRO;
                case 1:
                    return r.DEV;
                case 2:
                    return r.PRE_PRO;
                default:
                    return r.PKW_PRO
            }
        }
        static getDebugMode() {
            return a.appConfig.buildVariant
        }
    }
    t("BuildConfig", c), e._RF.pop()
}