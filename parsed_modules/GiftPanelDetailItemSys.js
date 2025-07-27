import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as l from "./gs_protocol.mjs_cjs=&original=.js";
import * as s from "./cv.js";

function main() {
    var c, f, g, u;
    a._RF.push({}, "5e29bSDLN1Mt7pM7Hlv4ffs", "GiftPanelDetailItemSys", void 0);
    const {
        ccclass: p,
        property: y
    } = r;
    t("GiftPanelDetailItemSys", (c = y(n), p((u = e((g = class extends o {
        constructor(...t) {
            super(...t), i(this, "txt", u, this)
        }
        onLoad() {}
        start() {}
        updateSVReuseData(t, e) {
            switch (e.gift.dynamic) {
                case s.protocol.PlayerDynamicValue.PlayerDynamicValue_JoinRoom: {
                    let t = "%s";
                    1 === e.gift.player.identity ? t = l.config.getStringData("Gift_star_join") : 3 === e.gift.player.identity && (t = l.config.getStringData("Gift_special_guest_join")), this.txt.string = l.StringTools.formatC(t, e.gift.player.nickname)
                }
                break;
                case s.protocol.PlayerDynamicValue.PlayerDynamicValue_Sit: {
                    let t = "%s";
                    1 === e.gift.player.identity ? t = l.config.getStringData("Gift_star_sit") : 3 === e.gift.player.identity && (t = l.config.getStringData("Gift_special_guest_sit")), this.txt.string = l.StringTools.formatC(t, e.gift.player.nickname)
                }
            }
        }
    }).prototype, "txt", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = g)) || f));
    a._RF.pop()
}