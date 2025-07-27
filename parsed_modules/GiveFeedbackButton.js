import * as n from "./cc.js";
import * as e from "./cc.js";
import * as c from "./cc.js";
import * as o from "./cv.js";

function main() {
    var u;
    e._RF.push({}, "9cbb0/T0XFMh6P961/IG6Jm", "GiveFeedbackButton", void 0);
    const {
        ccclass: a,
        property: r
    } = c;
    t("default", a(u = class extends n {
        onClickFeedbackButton() {
            o.AudioMgr.playButtonSound("button_click.mp3"), o.native.openUrl(o.appConfig.getGeneralConfig().FeedbackBtn_Url)
        }
    }) || u);
    e._RF.pop()
}