import * as e from "./cc.js";
import * as s from "./callback.js";
import * as i from "./bind-all.js";
import * as n from "./settings.js";
import * as a from "./segmentio.js";
import * as o from "./event-factory.js";
import * as u from "./dispatch-emit.js";
import * as r from "./emitter2.js";
import * as h from "./context.js";
import * as c from "./event-queue.js";
import * as d from "./http-client.js";

function main() {
    e._RF.push({}, "7f576/uqp1JarLpz3B69r2G", "analytics-node", void 0);
    t("Analytics", class extends r {
        constructor(t) {
            super(), this._eventFactory = void 0, this._isClosed = !1, this._pendingEvents = 0, this._closeAndFlushDefaultTimeout = void 0, this._publisher = void 0, this._isFlushing = !1, this._queue = void 0, this.ready = void 0, n(t), this._eventFactory = new o, this._queue = new c;
            const e = t.flushInterval ?? 1e4;
            this._closeAndFlushDefaultTimeout = 1.25 * e;
            const {
                plugin: s,
                publisher: u
            } = a({
                writeKey: t.writeKey,
                host: t.host,
                path: t.path,
                maxRetries: t.maxRetries ?? 3,
                flushAt: t.flushAt ?? t.maxEventsInBatch ?? 15,
                httpRequestTimeout: t.httpRequestTimeout,
                disable: t.disable,
                flushInterval: e,
                httpClient: "function" == typeof t.httpClient ? new d(t.httpClient) : t.httpClient ?? new d,
                oauthSettings: t.oauthSettings
            }, this);
            this._publisher = u, this.ready = this.register(s).then((() => {})), this.emit("initialize", t), i(this)
        }
        get VERSION() {
            return "2.0.2"
        }
        closeAndFlush({
            timeout: t = this._closeAndFlushDefaultTimeout
        } = {}) {
            return this.flush({
                timeout: t,
                close: !0
            })
        }
        async flush({
            timeout: t,
            close: e = !1
        } = {}) {
            if (this._isFlushing) return void console.warn("Overlapping flush calls detected. Please wait for the previous flush to finish before calling .flush again");
            this._isFlushing = !0, e && (this._isClosed = !0), this._publisher.flush(this._pendingEvents);
            const i = new Promise((t => {
                this._pendingEvents ? this.once("drained", (() => {
                    t()
                })) : t()
            })).finally((() => {
                this._isFlushing = !1
            }));
            return t ? s(i, t).catch((() => {})) : i
        }
        _dispatch(t, e) {
            this._isClosed ? this.emit("call_after_close", t) : (this._pendingEvents++, u(t, this._queue, this, e).catch((t => t)).finally((() => {
                this._pendingEvents--, this._pendingEvents || this.emit("drained")
            })))
        }
        alias({
            userId: t,
            previousId: e,
            context: s,
            timestamp: i,
            integrations: n,
            messageId: a
        }, o) {
            const u = this._eventFactory.alias(t, e, {
                context: s,
                integrations: n,
                timestamp: i,
                messageId: a
            });
            this._dispatch(u, o)
        }
        group({
            timestamp: t,
            groupId: e,
            userId: s,
            anonymousId: i,
            traits: n = {},
            context: a,
            integrations: o,
            messageId: u
        }, r) {
            const h = this._eventFactory.group(e, n, {
                context: a,
                anonymousId: i,
                userId: s,
                timestamp: t,
                integrations: o,
                messageId: u
            });
            this._dispatch(h, r)
        }
        identify({
            userId: t,
            anonymousId: e,
            traits: s = {},
            context: i,
            timestamp: n,
            integrations: a,
            messageId: o
        }, u) {
            const r = this._eventFactory.identify(t, s, {
                context: i,
                anonymousId: e,
                userId: t,
                timestamp: n,
                integrations: a,
                messageId: o
            });
            this._dispatch(r, u)
        }
        page({
            userId: t,
            anonymousId: e,
            category: s,
            name: i,
            properties: n,
            context: a,
            timestamp: o,
            integrations: u,
            messageId: r
        }, h) {
            const c = this._eventFactory.page(s ?? null, i ?? null, n, {
                context: a,
                anonymousId: e,
                userId: t,
                timestamp: o,
                integrations: u,
                messageId: r
            });
            this._dispatch(c, h)
        }
        screen({
            userId: t,
            anonymousId: e,
            category: s,
            name: i,
            properties: n,
            context: a,
            timestamp: o,
            integrations: u,
            messageId: r
        }, h) {
            const c = this._eventFactory.screen(s ?? null, i ?? null, n, {
                context: a,
                anonymousId: e,
                userId: t,
                timestamp: o,
                integrations: u,
                messageId: r
            });
            this._dispatch(c, h)
        }
        track({
            userId: t,
            anonymousId: e,
            event: s,
            properties: i,
            context: n,
            timestamp: a,
            integrations: o,
            messageId: u
        }, r) {
            const h = this._eventFactory.track(s, i, {
                context: n,
                userId: t,
                anonymousId: e,
                timestamp: a,
                integrations: o,
                messageId: u
            });
            this._dispatch(h, r)
        }
        register(...t) {
            return this._queue.criticalTasks.run((async () => {
                const e = h.system(),
                    s = t.map((t => this._queue.register(e, t, this)));
                await Promise.all(s), this.emit("register", t.map((t => t.name)))
            }))
        }
        async deregister(...t) {
            const e = h.system(),
                s = t.map((t => {
                    const s = this._queue.plugins.find((e => e.name === t));
                    if (s) return this._queue.deregister(e, s, this);
                    e.log("warn", `plugin ${t} not found`)
                }));
            await Promise.all(s), this.emit("deregister", t)
        }
    }), e._RF.pop()
}