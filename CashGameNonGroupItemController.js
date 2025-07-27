import * as t from "./cc.js";
import * as a from "./MVCItemController.js";
import * as n from "./CashGameItemHelper.js";
import * as o from "./CashGameItemModel.js";
import * as s from "./CashGameNonGroupItemView.js";

function main() {
    t._RF.push({}, "c25b0pm9NNDoqcFU2RJ24oM", "CashGameNonGroupItemController", void 0);
    e("default", class extends a {
        constructor(e) {
            super(s, o, e)
        }
        init() {
            super.init(), this.model.registerHandlers(this.onModelUpdated.bind(this), this.onModelDisplayCurrencyChanged.bind(this))
        }
        updateItemDataWhenScrolling(e, t) {
            this.model.setData(n.parseCashGameSnapshot(e), t)
        }
        updateDisplayCurrency(e) {
            this.model.setDisplayCurrency(e)
        }
        onLanguageChanged() {
            const e = n.getDisplayRoomName(this.model.roomName, this.model.gameId, this.model.gameMode);
            this.view.updateI18nLabels(e)
        }
        onViewEvent(e, ...t) {
            "VIEW_LOADED" === e && this.view.registerHandlers(this.onClickHandler.bind(this))
        }
        onModelUpdated() {
            this.view.updateView(n.getRenderNonGroupData(this.model.getBaseDataForRendering()))
        }
        onModelDisplayCurrencyChanged() {
            this.view.setCurrencyValues(n.getCurrencyData(this.model.getBaseDataForRendering()))
        }
        onClickHandler() {
            n.joinRoom(this.model.getDataForJoiningRoom(), this.view.isValidObject())
        }
    }), t._RF.pop()
}