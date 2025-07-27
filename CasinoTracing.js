import * as t from "./cc.js";
import * as a from "./cc.js";
import * as e from "./CrashTracing.js";
import * as s from "./otel-api.mjs.js";

function main() {
    t._RF.push({}, "10b16sXXZBNmKxAppxPSmEU", "CasinoTracing", void 0);
    n("WEB_LOAD_EVENT_NAME", function(n) {
        return n.LOADED = "Casino Lobby Loaded OK", n.ERROR = "Casino Lobby Loaded Error", n.TIMEOUT = "Casino Lobby Error TimeOut", n
    }({}));
    class i {
        constructor() {
            this.arrayCasinoInfoAttributes = {}
        }
        static getInstance() {
            return i._instance || (i._instance = new i), i._instance
        }
        startTrace(n) {
            n && this.startSpan(n.spanName)
        }
        addInfoTrace(n) {
            n && (this.arrayCasinoInfoAttributes[n.spanName] || (this.arrayCasinoInfoAttributes[n.spanName] = n.attribute))
        }
        getAttributeData(n) {
            return this.arrayCasinoInfoAttributes && this.arrayCasinoInfoAttributes[n] ? this.arrayCasinoInfoAttributes[n] : null
        }
        endTrace(n) {
            n && this.endSpan(n.spanName, n.eventName, n.attribute, n.spandCode)
        }
        get isEnableTracing() {
            return e.IsActive()
        }
        startSpan(n) {
            this.debug(`[startSpan] spanName : ${n}`), this.isEnableTracing && e.getInstance().startSpan(n)
        }
        endSpan(n, t, a = {}, i = s.OK, r) {
            this.debug(`[endSpan] \n                spanName: ${n}\n                eventName : ${t}\n                attributes :${JSON.stringify(a)}\n                spanCode :${i}\n                isSendLogsToSegment :${r}`), this.isEnableTracing && e.getInstance().endSpan(n, t, a, i)
        }
        logInfo(n) {
            n && (this.startSpan(n.spanName), this.endSpan(n.spanName, n.eventName, n.attribute, n.spandCode, !1))
        }
        debug(n) {
            a(`***** [CASINO TRACE] : ${n}`)
        }
    }
    n("CasinoTracing", i), i._instance = null, t._RF.pop()
}