import * as t from "./cc.js";
import * as o from "./cc.js";
import * as n from "./DesignSystemButtonBase.js";
import * as r from "./DesignSystemButtonBase.js";
import * as a from "./DesignSystemButtonBase.js";
import * as s from "./DesignSystemButtonBase.js";
import * as l from "./ColorSystemType.js";
import * as c from "./ColorSystemTypeOther.js";

function main() {
    var u;
    t._RF.push({}, "36fa08sFAxIz4y4jd82PmnG", "HallPokerTabButtonLandscape", void 0);
    const {
        ccclass: i,
        property: h
    } = o;
    e("HallPokerTabButtonLandscape", i("HallPokerTabButtonLandscape")(u = class extends r {
        setColorConfig() {
            const e = [, , , , ],
                t = this.node.name,
                o = this.getColorByTab(t);
            switch (this.colorConfig.clear(), this.btnStyle) {
                case n.lobbyV2GameTypePanelTab:
                default:
                    e[s.normal] = this.getColorComp(l.Other, c.transparent), e[s.hover] = e[s.disabled] = e[s.normal], e[s.pressed] = this.getColorComp(l.Other, o), e[s.mouseDown] = e[s.pressed]
            }
            this.colorConfig.set(a.sprite1, e)
        }
        getColorByTab(e) {
            switch (e) {
                case "mtt":
                    return c.MainBlue;
                case "nlhe":
                    return c.Green;
                case "plo":
                    return c.Blue;
                case "short_deck":
                    return c.BrandyPunchOrange;
                case "sng":
                    return c.Purple;
                case "flash":
                    return c.Pink;
                default:
                    return c.WhiteCreamy
            }
        }
        getThemeNodeColorVis(e) {
            return this.colorConfig.has(e)
        }
    }) || u);
    t._RF.pop()
}