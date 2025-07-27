import * as e from "./cc.js";

function main() {
    e._RF.push({}, "b33892XPG9K54mG0VJOYr5v", "MttLobbyListHelper", void 0);
    class n {
        constructor() {
            this.tournamentMap = void 0, this.canceledTournaments = void 0, this.tournamentMap = new Map, this.canceledTournaments = new Set
        }
        static getInstance() {
            return n.instance || (n.instance = new n), n.instance
        }
        getTournament(t) {
            return this.tournamentMap.get(t)
        }
        updateTournament(t) {
            return !(!t.Detail || void 0 === t.Detail.Id) && (this.tournamentMap.set(t.Detail.Id, t), !0)
        }
        hasTournament(t) {
            return this.tournamentMap.has(t)
        }
        markTournamentAsCanceled(t) {
            this.canceledTournaments.add(t)
        }
        isTournamentCanceled(t) {
            return this.canceledTournaments.has(t)
        }
    }
    t("MttTournamentManager", n), n.instance = void 0, e._RF.pop()
}