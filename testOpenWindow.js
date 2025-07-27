import * as t from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cv.js";

function main() {
    var c;
    t._RF.push({}, "bc798hhXMdO6ooCiiIpfE2q", "testOpenWindow", void 0);
    const {
        ccclass: a,
        property: g
    } = s;
    e("testOpenWindow", a("testOpenWindow")(c = class extends n {
        constructor(...e) {
            super(...e), this.TAG = "testOpenWindow", this.game_scene = null
        }
        get gameScene() {
            return i.appConfig.getGeneralConfig().multiWindowEnabled && this.game_scene ? this.game_scene : o.getScene()
        }
        onLoad() {
            cc_mtt.vv.ConsoleLog.log(this.TAG, "onLoad", this.gameScene.windowID)
        }
        start() {}
        update(e) {}
        init(e, t) {
            this.game_scene = e, cc_mtt.vv.ConsoleLog.log(this.TAG, "init winID:", this.gameScene.windowID, "Data:", t), cc_mtt.vv.ConsoleLog.log(this.TAG, o.getScene().name, this.game_scene.name)
        }
        onClickCloseWindow() {
            cc_mtt.vv.ConsoleLog.log(this.TAG, "onClickCloseWindow", this.gameScene.windowID), i.closeWindow(this.gameScene.windowID)
        }
    }) || c);
    t._RF.pop()
}