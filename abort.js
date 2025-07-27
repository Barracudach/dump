import * as e from "./cc.js";
import * as r from "./emitter3.js";
import * as n from "./env.js";

function main() {
    let o, i;
    e._RF.push({}, "c8823tI3y9IW5DF/J0IMo5f", "abort", void 0), o = Symbol.toStringTag;
    class s {
        constructor() {
            this.onabort = null, this.aborted = !1, this.eventEmitter = new r
        }
        toString() {
            return "[object AbortSignal]"
        }
        get[o]() {
            return "AbortSignal"
        }
        removeEventListener(...t) {
            this.eventEmitter.off(...t)
        }
        addEventListener(...t) {
            this.eventEmitter.on(...t)
        }
        dispatchEvent(t) {
            const e = {
                    type: t,
                    target: this
                },
                r = `on${t}`;
            "function" == typeof this[r] && this[r](e), this.eventEmitter.emit(t, e)
        }
    }
    t("AbortSignal", s), i = Symbol.toStringTag;
    class l {
        constructor() {
            this.signal = new s
        }
        abort() {
            this.signal.aborted || (this.signal.aborted = !0, this.signal.dispatchEvent("abort"))
        }
        toString() {
            return "[object AbortController]"
        }
        get[i]() {
            return "AbortController"
        }
    }
    t("AbortController", l);
    t("abortSignalAfterTimeout", (t => {
        if ("cloudflare-worker" === n()) return [];
        const e = new(globalThis.AbortController || l),
            r = setTimeout((() => {
                e.abort()
            }), t);
        return null == r || null == r.unref || r.unref(), [e.signal, r]
    }));
    e._RF.pop()
}