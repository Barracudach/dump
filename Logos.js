import * as t from "./cc.js";
import * as n from "./cc.js";
import * as e from "./cc.js";
import * as i from "./cv.js";

function main() {
    var l;
    t._RF.push({}, "e99d4A6yPBMLKZEXYnQWZg5", "Logos", void 0);
    const {
        ccclass: u
    } = e;
    o("Logos", u("Logos")(l = class extends n {
        onBtn99Click(o) {
            i.AudioMgr.playButtonSound("hall_bottom_button.mp3"), i.native.openUrl(i.appConfig.getGeneralConfig().Logo_99_Url)
        }
        onBtnSecurityClick(o) {
            i.AudioMgr.playButtonSound("hall_bottom_button.mp3"), i.native.openUrl(i.appConfig.getGeneralConfig().Logo_Security_Url)
        }
        onBtnSitusClick(o) {
            i.AudioMgr.playButtonSound("hall_bottom_button.mp3"), i.native.openUrl(i.appConfig.getGeneralConfig().Logo_Situs_Url)
        }
    }) || l);
    t._RF.pop()
}