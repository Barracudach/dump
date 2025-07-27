import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cv.js";
import * as u from "./GameSceneInstance.js";

function main() {
    var l, c, p, d;
    n._RF.push({}, "8d072vLqi9IW4ioFjFposGT", "PauseGame", void 0);
    const {
        ccclass: _,
        property: g
    } = s;
    t("default", (l = g(o), _((d = e((p = class extends r {
        constructor(...t) {
            super(...t), a(this, "start_Btn", d, this)
        }
        onLoad() {
            i.StringTools.setLabelString(this.node, "bg/pausePoker_txt", "GameScene_pausePoker_panel_pausePoker_txt"), i.StringTools.setLabelString(this.node, "bg/hasPause_txt", "GameScene_pausePoker_panel_hasPause_txt"), i.StringTools.setLabelString(this.node, "bg/start_button/Label", "GameScene_pausePoker_panel_start_button")
        }
        onContinue(t) {
            i.gameNet.RequestPauseGame(u.getInstanceGameData(null == this ? void 0 : this.node).tRoomData.u32RoomId, !1)
        }
        setStartBtn() {
            let t = i.dataHandler.getUserData().u32Uid == u.getInstanceGameData(null == this ? void 0 : this.node).tRoomData.u32OwnerId;
            this.start_Btn.node.active = t
        }
    }).prototype, "start_Btn", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = p)) || c));
    n._RF.pop()
}