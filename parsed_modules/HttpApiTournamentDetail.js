import * as t from "./cc.js";
import * as s from "./CrashTracing.js";
import * as i from "./httpApis.js";

function main() {
    t._RF.push({}, "703a6mnl8VLfJeOMB3JWYu8", "HttpApiTournamentDetail", void 0);
    e("HttpApiTournamentDetailRequestId", function(e) {
        return e[e.MTT_TOURNAMENT_DETAIL_IN_LOBBY_RIGHT_PANEL = 1] = "MTT_TOURNAMENT_DETAIL_IN_LOBBY_RIGHT_PANEL", e
    }({}));
    class u {
        constructor() {
            this._requestQueue = [], this._isProcessing = !1, this._lastRequestTime = 0, this.RATE_LIMIT_MS = 250
        }
        static get instance() {
            return u._instance || (u._instance = new u), u._instance
        }
        static requestMttTournamentDetail(e, t, s, i = 0, n = {}, r = 0, a) {
            u.instance._enqueueRequest(e, t, s, i, n, r, a)
        }
        _enqueueRequest(e, t, s, i, u, n, r) {
            this._requestQueue.push({
                id: e,
                callback: t,
                onerror: s,
                timeout: i,
                option: u,
                retryCount: n,
                clearDuplicateId: r
            }), this._isProcessing || this._processQueue()
        }
        _processQueue() {
            if (0 === this._requestQueue.length) return void(this._isProcessing = !1);
            this._isProcessing = !0;
            const e = Date.now() - this._lastRequestTime;
            if (e < this.RATE_LIMIT_MS) return void setTimeout((() => this._processQueue()), this.RATE_LIMIT_MS - e);
            const t = this._requestQueue.shift();
            this._executeRequest(t)
        }
        _isMatchingRequest(e, t, s) {
            return e.id === t && (e.option.page === s.page || 0 === s.page)
        }
        _handleMatchingRequests(e, t, s) {
            this._requestQueue.filter((s => this._isMatchingRequest(s, e, t))).forEach(s), this._requestQueue = this._requestQueue.filter((s => !this._isMatchingRequest(s, e, t)))
        }
        _executeRequest(e) {
            const {
                id: t,
                callback: u,
                onerror: n,
                timeout: r,
                option: a,
                retryCount: c
            } = e;
            i.requestMttTournamentDetail(t, (e => {
                this._handleMatchingRequests(t, a, (t => t.callback(e))), this._lastRequestTime = Date.now(), setTimeout((() => this._processQueue()), 0);
                try {
                    u(e)
                } catch (e) {
                    s.Trace("HttpApiTournamentDetail_Callback_Error", "ErrorMessageHandler", {
                        error: e instanceof Error ? e.message : String(e),
                        stackTrace: s.getTrace(0, 20)
                    })
                }
            }), (e => {
                if (c > 0) this._enqueueRequest(t, u, n, r, a, c - 1);
                else if (n) {
                    const s = e instanceof Error ? e : new Error(String(e));
                    n(s), this._handleMatchingRequests(t, a, (e => e.onerror(s)))
                }
                this._lastRequestTime = Date.now(), setTimeout((() => this._processQueue()), 0)
            }), r, a)
        }
    }
    e("default", u), u._instance = null, t._RF.pop()
}