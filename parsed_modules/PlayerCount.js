import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as l from "./cc.js";
import * as a from "./cc.js";
import * as s from "./ThemeSystemForGradient.js";
import * as i from "./ColorSystemType.js";
import * as u from "./ColorsystemLobbyV2.js";

function main() {
    var C, y, c, _, p, g;
    r._RF.push({}, "9f0f7SF7xRLBqTyS5ZuYP/z", "PlayerCount", void 0);
    const {
        ccclass: b,
        property: d
    } = l;
    t("default", (C = d(n), y = d(s), b((p = o((_ = class extends a {
        constructor(...t) {
            super(...t), e(this, "playerCountLabel", p, this), e(this, "playerCountBgGradient", g, this), this.bgColors = [{
                startColor: u.PlayerCount_Bg_2_Start,
                endColor: u.PlayerCount_Bg_2_End
            }, {
                startColor: u.PlayerCount_Bg_4_Start,
                endColor: u.PlayerCount_Bg_4_End
            }, {
                startColor: u.PlayerCount_Bg_6_Start,
                endColor: u.PlayerCount_Bg_6_End
            }, {
                startColor: u.PlayerCount_Bg_8_Start,
                endColor: u.PlayerCount_Bg_8_End
            }]
        }
        setData(t) {
            this.playerCountLabel.string = t.toString();
            const o = Math.max(0, (Math.floor(t / 2) - 1) % this.bgColors.length);
            this.playerCountBgGradient.setColorScheme(i.LobbyV2, this.bgColors[o].startColor), this.playerCountBgGradient.setEndColorScheme(i.LobbyV2, this.bgColors[o].endColor)
        }
    }).prototype, "playerCountLabel", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = o(_.prototype, "playerCountBgGradient", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = _)) || c));
    r._RF.pop()
}