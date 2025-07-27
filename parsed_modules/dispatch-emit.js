import * as e from "./cc.js";
import * as c from "./dispatch.js";
import * as i from "./context.js";

function main() {
    e._RF.push({}, "3f4c41ifAxOZ4O1RQrMZcCa", "dispatch-emit", void 0);
    t("dispatchAndEmit", (async (t, e, n, r) => {
        try {
            const o = new i(t),
                s = await c(o, e, n, {
                    ...r ? {
                        callback: (a = r, t => {
                            const e = t.failedDelivery();
                            return a(e ? e.reason : void 0, t)
                        })
                    } : {}
                }),
                d = s.failedDelivery();
            d ? n.emit("error", {
                code: "delivery_failure",
                reason: d.reason,
                ctx: s
            }) : n.emit(t.type, s)
        } catch (t) {
            n.emit("error", {
                code: "unknown",
                reason: t
            })
        }
        var a
    }));
    e._RF.pop()
}