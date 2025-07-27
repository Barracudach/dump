import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./cv.js";
import * as d from "./GameSceneInstance.js";

function main() {
    var p, g, h, _, f, m;
    a._RF.push({}, "4d9769PktZIdLhVhtNR5N0O", "FaceSprine", void 0);
    const {
        ccclass: b,
        property: S
    } = s;
    e("default", (p = S(o), g = S(i), b((f = t((_ = class extends l {
        constructor(...e) {
            super(...e), n(this, "bg_node", f, this), n(this, "gold_Label", m, this), this._node = null, this._tag = 0
        }
        onClick(e) {
            const t = d.getInstanceGameData(null == this ? void 0 : this.node); - 1 != t.tRoomData.i32SelfSeat && (u.MessageCenter.send("on_showFace", {
                seatID: t.tRoomData.i32SelfSeat,
                face: this._tag,
                gameData: t
            }), u.gameNet.RequestSendChat(t.tRoomData.u32RoomId, u.Enum.ChatType.Enum_Emoji, u.String(this._tag))), console.log(this._tag), this._node.active = !1
        }
        updateView(e, t) {
            this._tag = e, this._node = t;
            let n = this.bg_node.addComponent(r.Skeleton);
            c.load(`zh_CN/game/dzpoker/animation/face/baseSpineAni_${e}`, r.SkeletonData, (function(e, t) {
                e || (n.skeletonData = t)
            })), this.gold_Label.string = "0.2"
        }
    }).prototype, "bg_node", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(_.prototype, "gold_Label", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = _)) || h));
    a._RF.pop()
}