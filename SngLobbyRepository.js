import * as e from "./cc.js";

function main() {
    e._RF.push({}, "7588eyBiNdITY9/vM+Q3I7I", "SngLobbyRepository", void 0);
    t("SngLobbyRepository", class {
        constructor(t) {
            this.lobbyDatabase = void 0, this.lobbyDatabase = t
        }
        refresh() {
            return this.lobbyDatabase.request()
        }
        getByFilter(t) {
            return this.getAll()
        }
        getAll() {
            return this.lobbyDatabase.lobbyItems
        }
        getById(t) {
            return this.lobbyDatabase.lobbyItems.find((e => {
                var b;
                return (null == (b = e.Detail) ? void 0 : b.Id) === t
            }))
        }
        update(t) {
            const e = this.lobbyDatabase.lobbyItems.findIndex((e => {
                var b, a;
                return (null == (b = e.Detail) ? void 0 : b.Id) === (null == (a = t.Detail) ? void 0 : a.Id)
            }));
            e > -1 && (this.lobbyDatabase.lobbyItems[e] = t)
        }
        clearAllData() {
            this.lobbyDatabase.updateLobbyItems([])
        }
    }), e._RF.pop()
}