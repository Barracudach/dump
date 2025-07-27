import * as e from "./cc.js";
import * as i from "./ILobbyDatabase.js";
import * as o from "./ILobbyDatabase.js";
import * as r from "./ILobbyDatabase.js";
import * as s from "./ILobbyDatabase.js";
import * as a from "./CashLobbyRepository.js";
import * as y from "./MttLobbyRepository.js";
import * as h from "./MttLobbyRepository.js";
import * as n from "./SngLobbyRepository.js";
import * as l from "./cv.js";

function main() {
    e._RF.push({}, "ae99ePeyIZG6axHBdMzcvwI", "LobbyService", void 0);
    t("LobbyService", class {
        constructor() {
            this.cashPkwRepository = void 0, this.cashWptoRepository = void 0, this.mttRepository = void 0, this.sngRepository = void 0, this.cashPkwRepository = new a(new s), this.cashWptoRepository = new a(new o), this.mttRepository = new y(new i), this.sngRepository = new n(new r)
        }
        refreshCashPkw() {
            return this.cashPkwRepository.refresh()
        }
        refreshCashWptg() {
            return this.cashWptoRepository.refresh()
        }
        async refreshAllCash() {
            await this.refreshCashPkw(), await this.refreshCashWptg()
        }
        setMttListDisplayMode(t) {
            this.mttRepository.setDisplayMode(t)
        }
        getMttListDisplayMode() {
            return this.mttRepository.getDisplayMode()
        }
        switchMttListDisplayModeToFullList() {
            var t;
            this.setMttListDisplayMode(h.Full), null == l || null == (t = l.MessageCenter) || t.send(l.Enum.MessageCenterAction.RequestMttLobbyLevelList)
        }
        refreshMtt() {
            return this.mttRepository.refresh()
        }
        refreshSng() {
            return this.sngRepository.refresh()
        }
        getCashItemsByFilter(t) {
            return [...this.cashPkwRepository.getByFilter(t), ...this.cashWptoRepository.getByFilter(t)]
        }
        getMttItemsByFilter(t) {
            return this.mttRepository.getByFilter(t)
        }
        getMttItemsByExtraFilter(t, e) {
            return this.mttRepository.getByExtraFilter(t, e)
        }
        getSngItemsByFilter(t) {
            return this.sngRepository.getByFilter(t)
        }
        clearAllData() {
            this.cashPkwRepository.clearAllData(), this.cashWptoRepository.clearAllData(), this.mttRepository.clearAllData(), this.sngRepository.clearAllData()
        }
    }), e._RF.pop()
}