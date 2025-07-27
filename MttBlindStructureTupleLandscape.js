import * as n from "./cc.js";
import * as e from "./cc.js";
import * as r from "./MttBlindPotTuplePkw.js";
import * as s from "./StringTools.js";
import * as i from "./Translator.js";

function main() {
    var o;
    e._RF.push({}, "bdfe6foiXZFKbG2yGjXG2SB", "MttBlindStructureTupleLandscape", void 0);
    const {
        ccclass: u,
        property: c
    } = n;
    t("default", u(o = class extends r {
        setDuration(t, e) {
            this.durationLbl.string = t > 0 ? t.toString() : Math.round(e / 60) + i("TIME.MINUTE_V2")
        }
        setLevelText(t) {
            this.level.string = s.getOrinalNumberText(t.Level)
        }
    }) || o);
    e._RF.pop()
}