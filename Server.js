import * as n from "./cc.js";
import * as t from "./cv.js";
import * as i from "./ServerPKW.js";
import * as c from "./ServerWPTG.js";

function main() {
    n._RF.push({}, "0fb04aXaB5O75kKMAkVnEFe", "Server", void 0);
    class s {
        static getInstance() {
            if (!s._g_instence) {
                if (t.appConfig.isPKW) s._g_instence = new i;
                else switch (t.appConfig.jurisdiction) {
                    case t.Enum.AppJurisdiction.WPTO:
                    case t.Enum.AppJurisdiction.WPTG:
                        s._g_instence = new c;
                        break;
                    default:
                        s._g_instence = new c
                }
                s._g_instence.init()
            }
            return s._g_instence
        }
    }
    e("Server", s), s._g_instence = null, n._RF.pop()
}