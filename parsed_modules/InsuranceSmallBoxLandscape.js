import * as n from "./cc.js";
import * as e from "./cc.js";
import * as c from "./InsuranceSmallBox.js";
import * as a from "./cv.js";

function main() {
    var s;
    e._RF.push({}, "1981cWyaxJIXL1mdtmF8GfS", "InsuranceSmallBoxLandscape", void 0);
    const {
        ccclass: r,
        property: o
    } = n;
    t("default", r(s = class extends c {
        getDescStringKey() {
            return "GameScene_insurance_button_cdTime_buyInsurance_reskin_txt"
        }
        setTextTime(t) {
            this.txt_time.string = a.StringTools.formatC(a.config.getStringData("getCodeAgain"), t)
        }
    }) || s);
    e._RF.pop()
}