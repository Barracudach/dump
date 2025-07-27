import * as t from "./cc.js";
import * as o from "./cc.js";
import * as e from "./Enum.js";
import * as n from "./Translator.js";
import * as E from "./holdemRoom.js";

function main() {
    var a;
    t._RF.push({}, "db087t4MXNAka4Ao9N5U6UL", "UtilsPkw", void 0);
    const {
        ccclass: l,
        property: s
    } = o;
    r("default", l(a = class {
        static NumberToString(r) {
            return r.toString()
        }
        static getFullErrorCode(r, t = "ERROR_CODE_PKW") {
            if (r && r.ErrorCode) {
                if (r.ExternalErrorCode) {
                    if (r.ExternalErrorCode instanceof Array && r.ExternalErrorCode.length) {
                        for (const o of r.ExternalErrorCode) {
                            let e = t + "." + r.ErrorCode + "." + o,
                                E = n(e);
                            if (o > 0 && E && E.length && E != e) return r.ErrorCode + "." + o
                        }
                        let o = r.ExternalErrorCode.find((r => r > 0));
                        return o ? r.ErrorCode + "." + o : r.ErrorCode
                    }
                    if ("number" == typeof r.ExternalErrorCode && r.ExternalErrorCode > 0) return r.ErrorCode + "." + r.ExternalErrorCode
                }
                return r.ErrorCode
            }
            return ""
        }
        static getMttRoomName(r, t, o) {
            var n;
            const a = (null == (n = e[r]) ? void 0 : n.symbol) || "$";
            let l = "MTT";
            return o == E.SNG && (l = "Spin"), `${a}${t} ${l}`
        }
    }) || a);
    t._RF.pop()
}