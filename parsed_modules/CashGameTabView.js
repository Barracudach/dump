import * as t from "./cc.js";
import * as a from "./LobbyTabView.js";

function main() {
    t._RF.push({}, "21c82dn5MFO4rz/C12uMgDg", "CashGameTabView", void 0);
    e("CashGameListView", class extends a {
        constructor(...e) {
            super(...e), this.comp = void 0
        }
        getMyGamesEngineView() {
            var e;
            return null == (e = this.comp) ? void 0 : e.getMyGameNode()
        }
        getCashGameRightPanelEngineView() {
            var e;
            return null == (e = this.comp) ? void 0 : e.getCashGameRightPanelNode()
        }
        updateShowMyGames(e) {
            var t;
            null == (t = this.comp) || t.setShowMyGame(e)
        }
        updateView(e) {
            super.updateView(e), this.updateShowMyGames(e.showMyGames)
        }
    }), t._RF.pop()
}