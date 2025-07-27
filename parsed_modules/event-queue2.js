import * as t from "./cc.js";
import * as i from "./group-by.js";
import * as s from "./priority-queue.js";
import * as n from "./context2.js";
import * as a from "./context2.js";
import * as r from "./emitter.js";
import * as u from "./task-group.js";
import * as o from "./delivery.js";
import * as l from "./delivery.js";

function main() {
    t._RF.push({}, "f332cAHYB1Bx6OHzi7Lj52J", "event-queue", void 0);
    e("CoreEventQueue", class extends r {
        constructor(e) {
            super(), this.criticalTasks = u(), this.queue = void 0, this.plugins = [], this.failedInitializations = [], this.flushing = !1, this.queue = e, this.queue.on(s, (() => {
                this.scheduleFlush(0)
            }))
        }
        async register(e, t, i) {
            this.plugins.push(t);
            const s = i => {
                this.failedInitializations.push(t.name), this.emit("initialization_failure", t), console.warn(t.name, i), e.log("warn", "Failed to load destination", {
                    plugin: t.name,
                    error: i
                }), this.plugins = this.plugins.filter((e => e !== t))
            };
            if ("destination" === t.type && "Segment.io" !== t.name) t.load(e, i).catch(s);
            else try {
                await t.load(e, i)
            } catch (e) {
                s(e)
            }
        }
        async deregister(e, t, i) {
            try {
                t.unload && await Promise.resolve(t.unload(e, i)), this.plugins = this.plugins.filter((e => e.name !== t.name))
            } catch (i) {
                e.log("warn", "Failed to unload destination", {
                    plugin: t.name,
                    error: i
                })
            }
        }
        async dispatch(e) {
            e.log("debug", "Dispatching"), e.stats.increment("message_dispatched"), this.queue.push(e);
            const t = this.subscribeToDelivery(e);
            return this.scheduleFlush(0), t
        }
        async subscribeToDelivery(e) {
            return new Promise((t => {
                const i = (s, n) => {
                    s.isSame(e) && (this.off("flush", i), t(s))
                };
                this.on("flush", i)
            }))
        }
        async dispatchSingle(e) {
            return e.log("debug", "Dispatching"), e.stats.increment("message_dispatched"), this.queue.updateAttempts(e), e.attempts = 1, this.deliver(e).catch((t => this.enqueuRetry(t, e) ? this.subscribeToDelivery(e) : (e.setFailedDelivery({
                reason: t
            }), e)))
        }
        isEmpty() {
            return 0 === this.queue.length
        }
        scheduleFlush(e = 500) {
            this.flushing || (this.flushing = !0, setTimeout((() => {
                this.flush().then((() => {
                    setTimeout((() => {
                        this.flushing = !1, this.queue.length && this.scheduleFlush(0)
                    }), 0)
                }))
            }), e))
        }
        async deliver(e) {
            await this.criticalTasks.done();
            const t = Date.now();
            try {
                e = await this.flushOne(e);
                const i = Date.now() - t;
                return this.emit("delivery_success", e), e.stats.gauge("delivered", i), e.log("debug", "Delivered", e.event), e
            } catch (t) {
                const i = t;
                throw e.log("error", "Failed to deliver", i), this.emit("delivery_failure", e, i), e.stats.increment("delivery_failed"), t
            }
        }
        enqueuRetry(e, t) {
            return !(e instanceof n && !e.retry) && this.queue.pushWithBackoff(t)
        }
        async flush() {
            if (0 === this.queue.length) return [];
            let e = this.queue.pop();
            if (!e) return [];
            e.attempts = this.queue.getAttempts(e);
            try {
                e = await this.deliver(e), this.emit("flush", e, !0)
            } catch (t) {
                return this.enqueuRetry(t, e) || (e.setFailedDelivery({
                    reason: t
                }), this.emit("flush", e, !1)), []
            }
            return [e]
        }
        isReady() {
            return !0
        }
        availableExtensions(e) {
            const t = this.plugins.filter((t => {
                    var i;
                    if ("destination" !== t.type && "Segment.io" !== t.name) return !0;
                    let s;
                    return null == (i = t.alternativeNames) || i.forEach((t => {
                        void 0 !== e[t] && (s = e[t])
                    })), e[t.name] ?? s ?? !1 !== ("Segment.io" === t.name || e.All)
                })),
                {
                    before: s = [],
                    enrichment: n = [],
                    destination: a = [],
                    after: r = []
                } = i(t, "type");
            return {
                before: s,
                enrichment: n,
                destinations: a,
                after: r
            }
        }
        async flushOne(e) {
            if (!this.isReady()) throw new Error("Not ready");
            e.attempts > 1 && this.emit("delivery_retry", e);
            const {
                before: t,
                enrichment: i
            } = this.availableExtensions(e.event.integrations ?? {});
            for (const i of t) {
                const t = await o(e, i);
                t instanceof a && (e = t), this.emit("message_enriched", e, i)
            }
            for (const t of i) {
                const i = await l(e, t);
                i instanceof a && (e = i), this.emit("message_enriched", e, t)
            }
            const {
                destinations: s,
                after: n
            } = this.availableExtensions(e.event.integrations ?? {});
            await new Promise(((t, i) => {
                setTimeout((() => {
                    const n = s.map((t => l(e, t)));
                    Promise.all(n).then(t).catch(i)
                }), 0)
            })), e.stats.increment("message_delivered"), this.emit("message_delivered", e);
            const r = n.map((t => l(e, t)));
            return await Promise.all(r), e
        }
    }), t._RF.pop()
}