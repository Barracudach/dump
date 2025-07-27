import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./cc.js";
import * as n from "./cv.js";
import * as c from "./JackfruitData.js";
import * as o from "./GameSceneInstance.js";

function main() {
    var s, l, r, u, h, f;
    a._RF.push({}, "910d07CqFtGka7liGVApNg2", "JackfruitChat", void 0);
    const {
        ccclass: d,
        property: _
    } = cc._decorator;
    t("default", (s = _(cc.Node), l = _(cc.Label), d((u = class extends cc.Component {
        constructor(...t) {
            super(...t), e(this, "chat_node_list", h, this), e(this, "chat_label_list", f, this), this.lostTime = 0, this.isEnabled = !0
        }
        onLoad() {
            for (let t = 0; t < 4; t++) this.chat_node_list[t].on(cc.Node.EventType.TOUCH_START, (e => {
                let i = n.config.getTimeWithTimeZone().getTime();
                this.isEnabled || (this.lostTime = i, n.jackfruitNet.requestSendChat(o.getInstanceRoomId(null == this ? void 0 : this.node), c.Enum_Barrage, t.toString()), this.node.active = !1)
            }), this), this.chat_label_list[t].string = n.config.getStringData("jackfruit_chat_label_list_" + t)
        }
        setLabel(t) {
            this.isEnabled = t;
            for (let e = 0; e < 4; e++) this.chat_label_list[e].node.opacity = t ? 76.5 : 255
        }
        update(t) {
            let e = n.config.getTimeWithTimeZone().getTime();
            this.setLabel(e - this.lostTime < 1e3 * n.JackfruitManager.tRoomData.barrageLeftSeconds)
        }
    }, h = i(u.prototype, "chat_node_list", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), f = i(u.prototype, "chat_label_list", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), r = u)) || r));
    a._RF.pop()
}