import * as t from "./cc.js";
import * as r from "./uuid.js";
import * as s from "./backoff.js";
import * as i from "./callback.js";
import * as n from "./emitter.js";

function main() {
    t._RF.push({}, "355dalWSf5FZaGPZvqKtsC3", "token-manager", void 0);

    function o(e) {
        const t = {};
        if (!e) return {};
        if (function(e) {
                if ("object" == typeof e && null !== e && "entries" in Object(e) && "function" == typeof Object(e).entries) return !0;
                return !1
            }(e)) {
            for (const [r, s] of e.entries()) t[r.toLowerCase()] = s;
            return t
        }
        for (const [r, s] of Object.entries(e)) t[r.toLowerCase()] = s;
        return t
    }
    e("TokenManager", class {
        constructor(e) {
            this.alg = "RS256", this.grantType = "client_credentials", this.clientAssertionType = "urn:ietf:params:oauth:client-assertion-type:jwt-bearer", this.clientId = void 0, this.clientKey = void 0, this.keyId = void 0, this.scope = void 0, this.authServer = void 0, this.httpClient = void 0, this.maxRetries = void 0, this.clockSkewInSeconds = 0, this.accessToken = void 0, this.tokenEmitter = new i, this.retryCount = void 0, this.pollerTimer = void 0, this.keyId = e.keyId, this.clientId = e.clientId, this.clientKey = e.clientKey, this.authServer = e.authServer ?? "https://oauth2.segment.io", this.scope = e.scope ?? "tracking_api:write", this.httpClient = e.httpClient, this.maxRetries = e.maxRetries, this.tokenEmitter.on("access_token", (e => {
                "token" in e && (this.accessToken = e.token)
            })), this.retryCount = 0
        }
        stopPoller() {
            clearTimeout(this.pollerTimer)
        }
        async pollerLoop() {
            let e, t = 25;
            try {
                e = await this.requestAccessToken()
            } catch (e) {
                return this.handleTransientError({
                    error: e
                })
            }
            if (!(e => "function" == typeof e.text)(e)) return this.handleInvalidCustomResponse();
            const r = o(e.headers);
            if (r.date && this.updateClockSkew(Date.parse(r.date)), 200 !== e.status) return 429 === e.status ? await this.handleRateLimited(e, r, t) : [400, 401, 415].includes(e.status) ? this.handleUnrecoverableErrors(e) : this.handleTransientError({
                error: new Error(`[${e.status}] ${e.statusText}`)
            });
            try {
                const r = await e.text(),
                    i = JSON.parse(r);
                if (s = i, !Boolean(s && "object" == typeof s && "access_token" in s && "expires_in" in s && "string" == typeof s.access_token && "number" == typeof s.expires_in)) throw new Error("Response did not contain a valid access_token and expires_in");
                return i.expires_at = Math.round(Date.now() / 1e3) + i.expires_in, this.tokenEmitter.emit("access_token", {
                    token: i
                }), this.retryCount = 0, t = i.expires_in / 2 * 1e3, this.queueNextPoll(t)
            } catch (e) {
                return this.handleTransientError({
                    error: e,
                    forceEmitError: !0
                })
            }
            var s
        }
        handleTransientError({
            error: e,
            forceEmitError: t
        }) {
            this.incrementRetries({
                error: e,
                forceEmitError: t
            });
            const s = r({
                attempt: this.retryCount,
                minTimeout: 25,
                maxTimeout: 1e3
            });
            this.queueNextPoll(s)
        }
        handleInvalidCustomResponse() {
            this.tokenEmitter.emit("access_token", {
                error: new Error("HTTPClient does not implement response.text method")
            })
        }
        async handleRateLimited(e, t, r) {
            if (this.incrementRetries({
                    error: new Error(`[${e.status}] ${e.statusText}`)
                }), t["x-ratelimit-reset"]) {
                const e = parseInt(t["x-ratelimit-reset"], 10);
                r = isFinite(e) ? e - Date.now() + 1e3 * this.clockSkewInSeconds : 5e3, await s(r), r = 0
            }
            this.queueNextPoll(r)
        }
        handleUnrecoverableErrors(e) {
            this.retryCount = 0, this.tokenEmitter.emit("access_token", {
                error: new Error(`[${e.status}] ${e.statusText}`)
            }), this.stopPoller()
        }
        updateClockSkew(e) {
            this.clockSkewInSeconds = (Date.now() - e) / 1e3
        }
        incrementRetries({
            error: e,
            forceEmitError: t
        }) {
            this.retryCount++, (t || this.retryCount % this.maxRetries == 0) && (this.retryCount = 0, this.tokenEmitter.emit("access_token", {
                error: e
            }))
        }
        queueNextPoll(e) {
            this.pollerTimer = setTimeout((() => this.pollerLoop()), e), this.pollerTimer.unref && this.pollerTimer.unref()
        }
        async requestAccessToken() {
            n(), Math.round(Date.now() / 1e3), this.clockSkewInSeconds, this.clientId, this.clientId, this.authServer;
            const e = `grant_type=${this.grantType}&client_assertion_type=${this.clientAssertionType}&client_assertion=&scope=${this.scope}`,
                t = {
                    method: "POST",
                    url: `${this.authServer}/token`,
                    body: e,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    httpRequestTimeout: 1e4
                };
            return this.httpClient.makeRequest(t)
        }
        async getAccessToken() {
            return this.isValidToken(this.accessToken) ? this.accessToken : (this.stopPoller(), this.pollerLoop().catch((() => {})), new Promise(((e, t) => {
                this.tokenEmitter.once("access_token", (r => {
                    "token" in r ? e(r.token) : t(r.error)
                }))
            })))
        }
        clearToken() {
            this.accessToken = void 0
        }
        isValidToken(e) {
            return null != e && e.expires_in < Date.now() / 1e3
        }
    }), t._RF.pop()
}