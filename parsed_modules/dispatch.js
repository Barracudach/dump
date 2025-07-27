import * as a from "./cc.js";
import * as c from "./callback.js";

function main() {
    t("dispatch", (async function(t, a, e, i) {
        e.emit("dispatch_start", t);
        const s = Date.now();
        let u;
        u = a.isEmpty() ? await a.dispatchSingle(t) : await a.dispatch(t);
        null != i && i.callback && (u = await c(u, i.callback, n(s, i.timeout)));
        null != i && i.debug && u.flush();
        return u
    })), a._RF.push({}, "50872puR9ZKmJYuHdafqQXZ", "dispatch", void 0);
    const n = t("getDelay", ((t, a) => {
        const c = Date.now() - t;
        return Math.max((a ?? 300) - c, 0)
    }));
    a._RF.pop()
}