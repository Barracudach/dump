import * as e from "./cc.js";
import * as s from "./LobbyFilterHelper.js";

function main() {
    e._RF.push({}, "327c1IwXhNF3oa+oVSHDn/P", "CashLobbyRepository", void 0);
    t("CashLobbyRepository", class {
        constructor(t) {
            this.lobbyDatabase = void 0, this.lobbyDatabase = t
        }
        refresh() {
            return this.lobbyDatabase.request()
        }
        getByFilter(t) {
            return s.filterCashGameList(this.getAll(), t)
        }
        getAll() {
            return this.lobbyDatabase.lobbyItems
        }
        getById(t) {
            return null
        }
        getByIds(t, e) {
            return this.lobbyDatabase.lobbyItems.find((s => s.game_id == t && s.room_id == e))
        }
        update(t) {
            const e = this.lobbyDatabase.lobbyItems.findIndex((e => e.game_id === t.game_id && e.room_id == t.room_id));
            e > -1 && (this.lobbyDatabase.lobbyItems[e] = t)
        }
        clearAllData() {
            this.lobbyDatabase.updateLobbyItems([])
        }
    }), e._RF.pop()
}