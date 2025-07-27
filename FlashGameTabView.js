import * as t from "./cc.js";
import * as a from "./cc.js";
import * as s from "./LobbyTabView.js";

function main() {
    var i;
    a._RF.push({}, "05d850XkYNFH5yL4R/roe8I", "FlashGameTabView", void 0);
    const {
        ccclass: o,
        property: c
    } = t;
    e("FlashGameTabView", o("FlashGameTabView")(i = class extends s {
        constructor(...e) {
            super(...e), this.comp = void 0
        }
        getPaceGameRightPanelEngineView() {
            var e;
            return null == (e = this.comp) ? void 0 : e.getCashGameRightPanelNode()
        }
        getMyGamesEngineView() {
            var e;
            return null == (e = this.comp) ? void 0 : e.getMyGameNode()
        }
        updateShowMyGames(e) {
            var a;
            null == (a = this.comp) || a.setShowMyGame(e)
        }
        updateView(e) {
            super.updateView(e), this.updateShowMyGames(e.showMyGames)
        }
    }) || i);
    a._RF.pop()
}