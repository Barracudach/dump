import * as e from "./cc.js";
import * as s from "./backoff.js";
import * as i from "./create-deferred2.js";
import * as n from "./context-batch.js";
import * as h from "./token-manager.js";

function main() {
    function a(t) {
        return new Promise((e => setTimeout(e, t)))
    }

    function r() {}
    e._RF.push({}, "0f7e8dTf4pAiqk1iM2s00oJ", "publisher", void 0);

    function o(t, e) {
        t.getContexts().forEach((t => t.setFailedDelivery({
            reason: e
        }))), t.resolveEvents()
    }
    t("Publisher", class {
        constructor({
            host: t,
            path: e,
            maxRetries: s,
            flushAt: i,
            flushInterval: n,
            writeKey: a,
            httpRequestTimeout: r,
            httpClient: o,
            disable: u,
            oauthSettings: c
        }, l) {
            this.pendingFlushTimeout = void 0, this._batch = void 0, this._flushInterval = void 0, this._flushAt = void 0, this._maxRetries = void 0, this._url = void 0, this._flushPendingItemsCount = void 0, this._httpRequestTimeout = void 0, this._emitter = void 0, this._disable = void 0, this._httpClient = void 0, this._writeKey = void 0, this._tokenManager = void 0, this._emitter = l, this._maxRetries = s, this._flushAt = Math.max(i, 1), this._flushInterval = n, this._url = "https://api.segment.io/v1/batch", this._httpRequestTimeout = r ?? 1e4, this._disable = Boolean(u), this._httpClient = o, this._writeKey = a, c && (this._tokenManager = new h({
                ...c,
                httpClient: c.httpClient ?? o,
                maxRetries: c.maxRetries ?? s
            }))
        }
        createBatch() {
            this.pendingFlushTimeout && clearTimeout(this.pendingFlushTimeout);
            const t = new n(this._flushAt);
            return this._batch = t, this.pendingFlushTimeout = setTimeout((() => {
                t === this._batch && (this._batch = void 0), this.pendingFlushTimeout = void 0, t.length && this.send(t).catch(r)
            }), this._flushInterval), t
        }
        clearBatch() {
            this.pendingFlushTimeout && clearTimeout(this.pendingFlushTimeout), this._batch = void 0
        }
        flush(t) {
            if (!t) return void(this._tokenManager && this._tokenManager.stopPoller());
            if (this._flushPendingItemsCount = t, !this._batch) return;
            this._batch.length === t && (this.send(this._batch).catch(r).finally((() => {
                this._tokenManager && this._tokenManager.stopPoller()
            })), this.clearBatch())
        }
        enqueue(t) {
            const e = this._batch ?? this.createBatch(),
                {
                    promise: s,
                    resolve: n
                } = i(),
                h = {
                    context: t,
                    resolver: n
                };
            if (e.tryAdd(h).success) {
                const t = e.length === this._flushPendingItemsCount;
                return (e.length === this._flushAt || t) && (this.send(e).catch(r), this.clearBatch()), s
            }
            e.length && (this.send(e).catch(r), this.clearBatch());
            const a = this.createBatch(),
                o = a.tryAdd(h);
            if (o.success) {
                return a.length === this._flushPendingItemsCount && (this.send(a).catch(r), this.clearBatch()), s
            }
            return t.setFailedDelivery({
                reason: new Error(o.message)
            }), Promise.resolve(t)
        }
        async send(t) {
            this._flushPendingItemsCount && (this._flushPendingItemsCount -= t.length);
            const e = t.getEvents(),
                i = this._maxRetries + 1;
            let n = 0;
            for (; n < i;) {
                let h, r;
                n++;
                try {
                    if (this._disable) return t.resolveEvents();
                    let s;
                    if (this._tokenManager) {
                        const t = await this._tokenManager.getAccessToken();
                        t && t.access_token && (s = `Bearer ${t.access_token}`)
                    }
                    const i = {
                            "Content-Type": "application/json",
                            "User-Agent": "analytics-node-next/latest",
                            ...s ? {
                                Authorization: s
                            } : {}
                        },
                        n = {
                            url: this._url,
                            method: "POST",
                            headers: i,
                            body: JSON.stringify({
                                batch: e,
                                writeKey: this._writeKey,
                                sentAt: new Date
                            }),
                            httpRequestTimeout: this._httpRequestTimeout
                        };
                    this._emitter.emit("http_request", {
                        body: n.body,
                        method: n.method,
                        url: n.url,
                        headers: n.headers
                    });
                    const a = await this._httpClient.makeRequest(n);
                    if (a.status >= 200 && a.status < 300) return void t.resolveEvents();
                    if (!this._tokenManager || 400 !== a.status && 401 !== a.status && 403 !== a.status) {
                        if (400 === a.status) return void o(t, new Error(`[${a.status}] ${a.statusText}`));
                        if (429 === a.status) {
                            if (a.headers && "x-ratelimit-reset" in a.headers) {
                                const t = parseInt(a.headers["x-ratelimit-reset"], 10);
                                isFinite(t) && (h = t - Date.now())
                            }
                            r = new Error(`[${a.status}] ${a.statusText}`)
                        } else r = new Error(`[${a.status}] ${a.statusText}`)
                    } else this._tokenManager.clearToken(), r = new Error(`[${a.status}] ${a.statusText}`)
                } catch (t) {
                    r = t
                }
                if (n === i) return void o(t, r);
                await a(h || s({
                    attempt: n,
                    minTimeout: 25,
                    maxTimeout: 1e3
                }))
            }
        }
    }), e._RF.pop()
}