import * as n from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as c from "./cv.js";
import * as r from "./InstallPromptStatusManager.js";

function main() {
    var a;
    e._RF.push({}, "ab5eeYUhZZGeYPM4y8hrFRM", "AddToHomeScreenBtn", void 0);
    const {
        ccclass: s
    } = o;
    t("AddToHomeScreenBtn", s("AddToHomeScreenBtn")(a = class extends n {
        onClickAddToHomeScreenButton() {
            c.AudioMgr.playButtonSound("button_click.mp3"), r.getInstance().handleClickAddToHomeScreenButton()
        }
    }) || a);
    e._RF.pop()
}