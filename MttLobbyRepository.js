import * as e from "./cc.js";
import * as i from "./LobbyFilterHelper.js";
import * as s from "./LobbyHelper.js";
import * as l from "./MttItemHelper.js";

function main() {
    e._RF.push({}, "f35aem30TJL/4LFm5VfmkNI", "MttLobbyRepository", void 0);
    t("MttLobbyItemFilterId", function(t) {
        return t.All = "all", t.WPT = "WPT", t.WPTG = "WPTG", t.Special = "Special", t.Satellites = "Satellites", t.Live = "Live", t.Private = "Private", t
    }({}));
    let a = t("MttLobbyItemListDisplayMode", function(t) {
        return t[t.Full = 0] = "Full", t[t.Simplified = 1] = "Simplified", t
    }({}));
    t("MttLobbyRepository", class {
        constructor(t) {
            this.lobbyDatabase = void 0, this._listDisplayMode = a.Simplified, this._displayLimit = 30, this.lobbyDatabase = t
        }
        setDisplayMode(t) {
            this._listDisplayMode = t
        }
        getDisplayMode() {
            return this._listDisplayMode
        }
        refresh() {
            return s.isHttpApisTokenReady() ? this.lobbyDatabase.request(null, (() => {
                this.updateLobbyItemsMyTickets(), this.updateLobbyItemsMyMtt(), this.updateLobbyItemsUpdatedTime()
            }), {
                rows: this._listDisplayMode == a.Simplified ? this._displayLimit : 0
            }) : new Promise(((t, e) => {
                setTimeout((() => {
                    e()
                }), 1)
            }))
        }
        getByFilter(t) {
            return t ? i.filterMttGameList(this.getAll(), t) : this.getAll()
        }
        getByExtraFilter(t, e) {
            return t ? i.filterMttGameListExtra(this.getAll(), t, e) : this.getAll()
        }
        getAll() {
            return this.updateLobbyItemsMyTickets(), this.updateLobbyItemsMyMtt(), this.lobbyDatabase.lobbyItems
        }
        getById(t) {
            return this.lobbyDatabase.lobbyItems.find((e => {
                var i;
                return (null == (i = e.Detail) ? void 0 : i.Id) === t
            }))
        }
        update(t) {
            const e = this.lobbyDatabase.lobbyItems.findIndex((e => {
                var i, s;
                return (null == (i = e.Detail) ? void 0 : i.Id) === (null == (s = t.Detail) ? void 0 : s.Id)
            }));
            e > -1 && (this.lobbyDatabase.lobbyItems[e] = t)
        }
        updateLobbyItemsMyTickets() {
            let t = this.lobbyDatabase.lobbyItems;
            for (let e = 0; e < t.length; e++) {
                const i = t[e];
                i.canUseMyTicket = l.hasTicket(i)
            }
        }
        updateLobbyItemsMyMtt() {
            let t = this.lobbyDatabase.lobbyItems;
            for (let e = 0; e < t.length; e++) {
                const s = t[e];
                s.isMyMTT = i.isMyMTT(s)
            }
        }
        updateLobbyItemsUpdatedTime() {
            let t = this.lobbyDatabase.lobbyItems;
            for (let e = 0; e < t.length; e++) {
                t[e].updatedAt = cc_mtt.vv.DataManager.getNow().getTime()
            }
        }
        clearAllData() {
            this.lobbyDatabase.updateLobbyItems([])
        }
    }), e._RF.pop()
}