import * as t from "./cc.js";
import * as a from "./MVCItemController.js";
import * as s from "./CashGameItemHelper.js";
import * as i from "./CashGameItemModel.js";
import * as n from "./CashGameItemView.js";

function main() {
    t._RF.push({}, "64b1676Q+lO3Iyzl5SjIqKq", "CashGameItemController", void 0);
    e("default", class extends a {
        constructor(e) {
            super(n, i, e)
        }
        init() {
            super.init(), this.model.registerHandlers(this.onModelUpdated.bind(this), this.onModelDisplayCurrencyChanged.bind(this))
        }
        onViewEvent(e, ...t) {
            "VIEW_LOADED" === e && this.view.registerHandlers(this.onClickHandler.bind(this))
        }
        onModelUpdated() {
            this.view.updateView(s.getRenderData(this.model.getBaseDataForRendering()))
        }
        onModelDisplayCurrencyChanged() {
            this.view.setCurrencyValues(s.getCurrencyData(this.model.getBaseDataForRendering()))
        }
        onClickHandler() {
            s.joinRoom(this.model.getDataForJoiningRoom(), this.view.isValidObject())
        }
        updateItemDataWhenScrolling(e, t) {
            this.model.setData(s.parseCashGameSnapshot(e), t)
        }
        updateDisplayCurrency(e) {
            this.model.setDisplayCurrency(e)
        }
        onLanguageChanged() {
            const e = s.getDisplayRoomName(this.model.roomName, this.model.gameId, this.model.gameMode);
            this.view.updateI18nLabels(e)
        }
    }), t._RF.pop()
}