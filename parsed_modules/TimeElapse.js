import * as t from "./cc.js";
import * as i from "./CrashTracing.js";
import * as s from "./CrashTracing.js";

function main() {
    t._RF.push({}, "11b77NdBCpKQY3xIOAsrVdh", "TimeElapse", void 0);
    class n {
        constructor() {
            this.timeRecords = void 0, this.timeRecords = new Map
        }
        static getInstance() {
            return !1 === Boolean(n.instance) && (n.instance = new n), n.instance
        }
        start(e, t) {
            var s;
            this.timeRecords.has(e) || this.timeRecords.set(e, new Map), null == (s = this.timeRecords.get(e)) || s.set(t, Date.now())
        }
        end(e, t, n = {}, c = 1e3) {
            const r = this.timeRecords.get(e);
            if (null != r && r.has(t)) {
                const o = Date.now() - (r.get(t) || 0);
                r.delete(t), o > c && (console.error(`Elapsed time for ${e} ${t} exceeded the threshold: ${o} ms`), n.step = t, n.executionTime = o, s.Trace(i.ExecutionTime, e, n))
            }
            void 0 !== r && 0 === r.size && this.timeRecords.delete(e)
        }
        getExecutionTime(e, t) {
            var s;
            return (null == (s = this.timeRecords.get(e)) ? void 0 : s.get(t)) || 0
        }
    }
    e("default", n), n.instance = void 0, t._RF.pop()
}