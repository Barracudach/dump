import * as t from "./cc.js";
import * as o from "./cc.js";
import * as s from "./httpApis.js";

function main() {
    o._RF.push({}, "8da78qse7xLeJFWlEovi78b", "CheckUpdateTools", void 0);
    class a {
        static hasNewAppVersion(e, t) {
            cc_mtt.vv.ConsoleLog.log("App Version Compare: app version is " + e + ", remoteVer is " + t);
            for (var o = e.split("."), s = t.split("."), a = 0; a < o.length; ++a) {
                var p = parseInt(o[a]),
                    c = parseInt(s[a] || "0");
                if (p !== c) return p < c
            }
        }
        static checkHotupdate(e) {
            let o = "1.0.0";
            cc_mtt.vv.ConsoleLog.log("~~~~~~~~~~~ check Hot Update ~~~~~~~~~~~~~~~~~"), t.isNative && null != t.localStorage.getItem("appVersion") && (o = JSON.parse(t.localStorage.getItem("appVersion")).version, cc_mtt.vv.ConsoleLog.log("App Version", o), s.requestHotUpdateManifest((t => {
                cc_mtt.vv.ConsoleLog.log("requestHotUpdateManifest callback", t), t && t.version && e(a.hasNewAppVersion(o, t.version))
            })))
        }
    }
    e("default", a), o._RF.pop()
}