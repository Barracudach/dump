import * as r from "./cc.js";

function main() {
    function t(e, r) {
        return new Promise(((t, c) => {
            const n = setTimeout((() => {
                c(Error("Promise timed out"))
            }), r);
            e.then((e => (clearTimeout(n), t(e)))).catch(c)
        }))
    }

    function c(e) {
        return new Promise((r => setTimeout(r, e)))
    }
    e({
        invokeCallback: function(e, r, n) {
            return c(n).then((() => t((() => {
                try {
                    return Promise.resolve(r(e))
                } catch (e) {
                    return Promise.reject(e)
                }
            })(), 1e3))).catch((r => {
                null == e || e.log("warn", "Callback Error", {
                    error: r
                }), null == e || e.stats.increment("callback_error")
            })).then((() => e))
        },
        pTimeout: t,
        sleep: c
    }), r._RF.push({}, "2e08cdmsvhOsI3cBt+OmCDL", "callback", void 0), r._RF.pop()
}