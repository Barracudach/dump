import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as l from "./cc.js";
import * as i from "./PlayerCount.js";
import * as s from "./cv.js";

function main() {
    var c, u, p, y, f, m, b;
    r._RF.push({}, "a55aac3EGxKro7nQI/VSSj3", "FlashRoomKindItem", void 0);
    const {
        ccclass: h,
        property: d
    } = o;
    t("FlashRoomKindItem", (c = h("FlashRoomKindItem"), u = d(i), p = d(n), c((m = e((f = class extends l {
        constructor(...t) {
            super(...t), a(this, "playerCount", m, this), a(this, "labelMaxPlayer", b, this)
        }
        start() {}
        setData(t) {
            this.playerCount.setData(t);
            const e = s.config.getStringData("lobby_right_panel_max_player");
            this.labelMaxPlayer.string = s.StringTools.formatC(e, t)
        }
    }).prototype, "playerCount", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(f.prototype, "labelMaxPlayer", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = f)) || y));
    r._RF.pop()
}