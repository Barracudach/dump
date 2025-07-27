import * as e from "./cc.js";
import * as a from "./httpApiQueueRequests.js";
import * as n from "./httpApis.js";

function main() {
    e._RF.push({}, "ff9f54A7LpAIL5Qb2DGVCqa", "HttpApiRelateTournamentList", void 0);
    class s {
        static get instance() {
            return !1 === Boolean(s._instance) && (s._instance = new s), s._instance
        }
        constructor() {
            this.tournamentRelateCallbacks = void 0, this.tournamentRelateListRequestTime = void 0, this.tournamentRelateCallbacks = new Map, this.tournamentRelateListRequestTime = new Map
        }
        static requestRelateTournamentList(t, e, a, n = 0, l = {}, i = 0) {
            s.instance.handleRequestRelateTournamentList(t, e, a, n, l, i)
        }
        handleRequestRelateTournamentList(t, e, a, n = 0, s = {}, l = 0) {
            let i = !0;
            const u = t.tournamentId,
                c = t.tournamentId,
                o = e.toString();
            if (this.tournamentRelateCallbacks.has(c)) {
                const t = this.tournamentRelateCallbacks.get(c);
                !1 === Boolean(t.callbacks) && (t.callbacks = new Map), t.callbacks.has(o) || t.callbacks.set(o, e), this.tournamentRelateListRequestTime.has(c) && Date.now() - this.tournamentRelateListRequestTime.get(c) < 3e3 && (i = !1)
            } else {
                const t = {
                    tournamentId: u,
                    callbacks: (new Map).set(o, e)
                };
                this.tournamentRelateCallbacks.set(c, t)
            }
            i && (this.tournamentRelateListRequestTime.set(c, Date.now()), this.executeRequestRelateTournamentList(t, s, n, l).then((t => {
                var e;
                if (Boolean(t) && null != (e = Object.keys(t)) && e.length) {
                    if (this.tournamentRelateCallbacks.has(c)) {
                        const e = this.tournamentRelateCallbacks.get(c);
                        for (const a of e.callbacks.values()) a(t);
                        this.tournamentRelateCallbacks.delete(c)
                    }
                } else this.tournamentRelateCallbacks.has(c) && this.tournamentRelateCallbacks.delete(c), null == a || a("invalid_data")
            })).catch((t => {
                this.tournamentRelateCallbacks.has(c) && this.tournamentRelateCallbacks.delete(c), null == a || a(t)
            })))
        }
        async executeRequestRelateTournamentList(t, e, s = 0, l = 0) {
            return new Promise(((i, u) => {
                a.requestHttpApi(n.requestRelateTournamentList, t, (t => {
                    i(t)
                }), (a => {
                    l > 0 ? this.executeRequestRelateTournamentList(t, e, s, l - 1).then(i).catch(u) : a instanceof Error ? u(a) : u(new Error(a))
                }), s, e)
            }))
        }
    }
    t("default", s), s._instance = null, e._RF.pop()
}