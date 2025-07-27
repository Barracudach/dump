import * as e from "./cc.js";
import * as l from "./cv.js";
import * as s from "./LobbyFilterHelper.js";
import * as r from "./MVCController.js";
import * as i from "./MVCModel.js";
import * as o from "./MVCListController.js";
import * as n from "./CashGameItemController.js";
import * as h from "./LobbyTabController.js";
import * as a from "./LobbyTabController.js";
import * as u from "./CashMyGameView.js";

function main() {
    e._RF.push({}, "8727esrMC5Lra/ydKDOvJqD", "CashMyGameController", void 0);
    class c extends i {
        constructor(...t) {
            super(...t), this.listState = void 0
        }
    }
    t("CashMyGameModel", c);
    const C = t("IS_MY_GAME_PROPERTY_NAME", "isMyGame");
    t("default", class extends r {
        set filter(t) {
            this._filter = t
        }
        get filter() {
            return this._filter
        }
        constructor(t, e) {
            super(u, c, t, e), this.listController = void 0, this._filter = void 0
        }
        onInitializeEnded(t) {
            this.listController = new o(t.onRequestRefreshList, this.createItemController.bind(this), this.updateItemControllerByData.bind(this), this.view.getMyGameListEngineView()), this.listController.init()
        }
        destroy() {
            this.listController.destroy()
        }
        getFilteredItems() {
            return l.lobbyService.getCashItemsByFilter(this.filter).filter((t => !!t[C]))
        }
        createItemController(t) {
            return new n(t)
        }
        updateItemControllerByData(t, e) {
            null == t || t.updateItemDataWhenScrolling(e, !1)
        }
        setIsMyGameForAllCashGames() {
            const t = l.lobbyService.getCashItemsByFilter(this.filter);
            let e = 0;
            return t.forEach((t => {
                const l = s.isMyCashGame(t);
                t[C] = l, l && e++
            })), e
        }
        reloadList() {
            var t, e, l;
            null == (t = this.listController) || t.setItems(this.getFilteredItems()), null == (e = this.listController) || e.scrollToTop(), this.model.listState = null != (l = this.listController) && l.getItems().length ? a : h, this.view.updateListStatus(this.model.listState)
        }
    }), e._RF.pop()
}