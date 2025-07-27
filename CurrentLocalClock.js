import * as t from "./cc.js";
import * as n from "./cc.js";
import * as o from "./CurrentClock.js";
import * as r from "./cv.js";

function main() {
    var c;
    t._RF.push({}, "a06c301+tJMHqRlFooyDbb/", "CurrentLocalClock", void 0);
    const {
        ccclass: i,
        property: a
    } = n;
    e("default", i(c = class extends o {
        updateLabel() {
            let e = r.StringTools.formatTime(Date.now(), r.Enum.eTimeType.Hour_Minute, !0),
                t = r.appConfig.getGeneralConfig().timeZone.nameAbbrev;
            null != t && "" != t || (t = r.config.tryGetTimeZoneAbbreviation()), this.label.string = (e + " " + t).trim()
        }
    }) || c);
    t._RF.pop()
}