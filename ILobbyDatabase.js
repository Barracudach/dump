import * as e from "./cc.js";
import * as n from "./connections.js";
import * as s from "./connections.js";

function main() {
    e._RF.push({}, "067e9hfNYBMbp4voAnegY4C", "ILobbyDatabase", void 0);
    let o = t("ViewState", function(t) {
        return t[t.Idle = 0] = "Idle", t[t.Requesting = 1] = "Requesting", t[t.Received = 2] = "Received", t[t.Error = 3] = "Error", t[t.Timeout = 4] = "Timeout", t
    }({}));
    class a {
        constructor() {
            this.lobbyItems = void 0, this.state = void 0, this._requestingTimeout = 30, this.connection = void 0, this.lobbyItems = [], this.state = o.Idle
        }
        request(t = null, e = null, s) {
            return new Promise(((n, a) => {
                this.state = o.Requesting, t && t(this.state);
                const i = setTimeout((() => {
                    this.state = o.Timeout, e && e(this.state, null), a({
                        state: this.state
                    })
                }), 1e3 * this._requestingTimeout);
                this.connection.requestLobbyData((t => {
                    clearTimeout(i);
                    let s = this._parseData(t);
                    this.updateLobbyItems(s), this.state = o.Received, e && e(this.state, this.lobbyItems), n({
                        state: this.state,
                        lobbyItems: this.lobbyItems
                    })
                }), (t => {
                    clearTimeout(i), this.state = o.Error, e && e(this.state, t), setTimeout((() => {
                        a({
                            state: this.state,
                            error: t
                        })
                    }), 1)
                }), s)
            }))
        }
        updateLobbyItems(t) {
            this.lobbyItems = t
        }
    }
    t("ILobbyDatabase", a);
    t("MttLobbyDatabase", class extends a {
        constructor() {
            super(), this.connection = new s(n.Mtt)
        }
        _parseData(t) {
            let e = [];
            if (t.TournamentInfos)
                for (let n = 0; n < t.TournamentInfos.length; n++) {
                    let o = t.TournamentInfos[n];
                    var s;
                    if (o) o.id = null == (s = o.Detail) ? void 0 : s.Id, e.push(o)
                }
            return e
        }
    });
    t("SngLobbyDatabase", class extends a {
        constructor() {
            super(), this.connection = new s(n.Sng)
        }
        _parseData(t) {
            let e = [];
            if (t.SngTournaments)
                for (let s = 0; s < t.SngTournaments.length; s++) {
                    let n = t.SngTournaments[s];
                    n && e.push(n)
                }
            return e
        }
    });
    t("CashPKWLobbyDatabase", class extends a {
        constructor() {
            super(), this.connection = new s(n.CashPKW)
        }
        _parseData(t) {
            return t
        }
    });
    t("CashWPTGLobbyDatabase", class extends a {
        constructor() {
            super(), this.connection = new s(n.CashWPTG)
        }
        _parseData(t) {
            return t
        }
    }), e._RF.pop()
}