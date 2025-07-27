import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cv.js";
import * as d from "./GameSceneInstance.js";
import * as b from "./GameSceneInstance.js";

function main() {
    var g, h, p, _, S, D, f, R, v, I, y, T;
    n._RF.push({}, "19a20ppXlZBAYGxwwswVgpV", "HouseOwer", void 0);
    const {
        ccclass: w,
        property: C
    } = u;
    t("default", (g = C(a), h = C(i), p = C(i), _ = C(s), S = b("GameDataInstance"), w((R = e((f = class extends l {
        constructor(...t) {
            super(...t), o(this, "timeCount", R, this), o(this, "dissolve_button", v, this), o(this, "pause_button", I, this), o(this, "currentTime_prefab", y, this), o(this, "gameDataInstance", T, this), this.game = void 0
        }
        onLoad() {
            m.StringTools.setLabelString(this.node, "bg/houseOwerTitle_txt", "GameScene_houseOwer_panel_houseOwerTitle_txt"), m.StringTools.setLabelString(this.node, "bg/buyinInfo_button/Label", "GameScene_houseOwer_panel_buyinInfo_button"), m.StringTools.setLabelString(this.node, "bg/dissolve_button/Label", "GameScene_houseOwer_panel_dissolve_button"), m.StringTools.setLabelString(this.node, "bg/pause_button/Label", "GameScene_houseOwer_panel_pause_button"), m.StringTools.setLabelString(this.node, "bg/addTime_button/Label", "GameScene_houseOwer_panel_addTime_button"), m.StringTools.setLabelString(this.node, "bg/addTime_button/left_text", "GameScene_houseOwer_panel_addTime_button_left_text")
        }
        setGameScene(t) {
            this.game = t
        }
        setTimeOut() {
            this.timeCount.string = this.gameDataInstance.tRoomData.u32DelayLeft.toString(), this.updateBtn()
        }
        onClickSelf(t) {
            this.node.active = !1
        }
        onClickBuyinInfo(t) {
            m.AudioMgr.playButtonSound("button_click.mp3"), this.node.active = !0, this.game.dairu_panel.active = !0, m.gameNet.RequestPlayerBuyinsInfo(this.gameDataInstance.tRoomData.u32RoomId)
        }
        onClickDissolve(t) {
            var e;
            m.AudioMgr.playButtonSound("button_click.mp3"), this.node.active = !1, this.dissolve_button.enabled = !1;
            let o = null == (e = d.getInstance(null == this ? void 0 : this.node)) || null == (e = e.room) ? void 0 : e.gameScene;
            m.TP.showMsg(m.config.getStringData("UIGameSceneTips19"), !0, this.DoDestroyRoom.bind(this), this.noDestroyRoom.bind(this), !1, !1, "", !1, a.HorizontalAlign.CENTER, !1, o)
        }
        onClickPause(t) {
            m.AudioMgr.playButtonSound("button_click.mp3"), this.node.active = !1, m.gameNet.RequestPauseGame(this.gameDataInstance.tRoomData.u32RoomId, !0)
        }
        onClickAddTime(t) {
            var e;
            m.AudioMgr.playButtonSound("button_click.mp3"), this.node.active = !1;
            let o = null == (e = d.getInstance(null == this ? void 0 : this.node)) || null == (e = e.room) ? void 0 : e.gameScene;
            m.TP.showMsg(m.config.getStringData("UIGameSceneTips21"), !0, this.DoAddRoomTime.bind(this), null, !1, !1, "", !1, a.HorizontalAlign.CENTER, !1, o)
        }
        DoDestroyRoom() {
            m.gameNet.RequestDestroyRoom(this.gameDataInstance.tRoomData.u32RoomId)
        }
        noDestroyRoom() {
            this.dissolve_button.disabledColor = r(255, 255, 255), this.dissolve_button.enabled = !0
        }
        DoAddRoomTime() {
            m.gameNet.RequestAddRoomTime(this.gameDataInstance.tRoomData.u32RoomId)
        }
        updateBtn() {
            this.gameDataInstance.tRoomData.pkRoomState.isBegin ? (this.pause_button.interactable = !this.gameDataInstance.tRoomData.pkRoomState.isPause, this.gameDataInstance.tRoomData.pkRoomState.isPause || (this.pause_button.node.getComponent(c).color = r(255, 255, 255))) : (this.pause_button.interactable = !1, this.pause_button.node.getComponent(c).color = r(166, 166, 166))
        }
    }).prototype, "timeCount", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(f.prototype, "dissolve_button", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(f.prototype, "pause_button", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(f.prototype, "currentTime_prefab", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(f.prototype, "gameDataInstance", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = f)) || D));
    n._RF.pop()
}