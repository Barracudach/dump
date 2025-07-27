import * as n from "./cc.js";
import * as t from "./context2.js";
import * as r from "./context2.js";

function main() {
    function i(e, n) {
        e.log("debug", "plugin", {
            plugin: n.name
        });
        const r = (new Date).getTime(),
            i = n[e.event.type];
        if (void 0 === i) return Promise.resolve(e);
        return async function(e) {
            try {
                return await e()
            } catch (e) {
                return Promise.reject(e)
            }
        }((() => i.apply(n, [e]))).then((e => {
            const t = (new Date).getTime() - r;
            return e.stats.gauge("plugin_time", t, [`plugin:${n.name}`]), e
        })).catch((r => {
            if (r instanceof t && "middleware_cancellation" === r.type) throw r;
            return r instanceof t ? (e.log("warn", r.type, {
                plugin: n.name,
                error: r
            }), r) : (e.log("error", "plugin Error", {
                plugin: n.name,
                error: r
            }), e.stats.increment("plugin_error", 1, [`plugin:${n.name}`]), r)
        }))
    }
    e({
        attempt: i,
        ensure: function(e, n) {
            return i(e, n).then((n => {
                if (n instanceof r) return n;
                e.log("debug", "Context canceled"), e.stats.increment("context_canceled"), e.cancel(n)
            }))
        }
    }), n._RF.push({}, "79444y1m0pHNKbpU82KbLyn", "delivery", void 0), n._RF.pop()
}