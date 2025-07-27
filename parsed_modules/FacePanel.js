import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as c from "./cv.js";
import * as s from "./JackfruitData.js";
import * as u from "./FaceEmoBase.js";
import * as r from "./GameSceneInstance.js";
import * as l from "./GameSceneInstance.js";
import * as d from "./JackfruitManager.js";

function main() {
    var m, f, h, p, I, g;
    n._RF.push({}, "74cf2qyzUJCrr3PN9MUD+XU", "FacePanel", void 0);
    const {
        ccclass: D,
        property: S
    } = o;
    e("default", (m = S(i), f = l("GameDataInstance"), D((I = t((p = class extends u {
        constructor(...e) {
            super(...e), a(this, "face_panel", I, this), a(this, "gameDataInstance", g, this)
        }
        faceItemClick(e) {
            let t = e.currentTarget,
                a = c.Number(t.name.slice(5));
            const n = r.getInstanceGameId(null == this ? void 0 : this.node); - 1 != this.gameDataInstance.tRoomData.i32SelfSeat && n != c.Enum.GameId.Jackfruit && this.sendChat(!1, a), n == c.Enum.GameId.Jackfruit && -1 != d.tRoomData.nSelfSeatID && this.sendChat(!0, a), this.hideSlideView()
        }
        hideSlideView() {}
        sendChat(e, t) {
            e ? c.jackfruitNet.requestSendChat(r.getInstanceRoomId(null == this ? void 0 : this.node), s.Enum_Emoji, c.String(t)) : r.getInstanceGameId(null == this ? void 0 : this.node) == c.Enum.GameId.Allin ? c.aofNet.RequestSendChat(this.gameDataInstance.tRoomData.u32RoomId, c.Enum.ChatType.Enum_Emoji, c.String(t)) : c.gameNet.RequestSendChat(this.gameDataInstance.tRoomData.u32RoomId, c.Enum.ChatType.Enum_Emoji, c.String(t))
        }
        addChildToContainer(e) {}
    }).prototype, "face_panel", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(p.prototype, "gameDataInstance", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = p)) || h));
    n._RF.pop()
}