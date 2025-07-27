import * as e from "./cc.js";
import * as l from "./cc.js";
import * as o from "./FlashMyGameView.js";
import * as s from "./MVCController.js";
import * as r from "./CashMyGameController.js";
import * as n from "./MVCListController.js";
import * as i from "./CashGameNonGroupItemController.js";
import * as c from "./LobbyTabController.js";
import * as a from "./LobbyTabController.js";

function main() {
    var h;
    e._RF.push({}, "2cc72iImG1HcJ6IHP3bSos4", "FlashMyGameController", void 0);
    const {
        ccclass: u,
        property: C
    } = l;
    class m extends r {}
    t("FlashMyGameModel", m);
    t("FlashMyGameController", u("FlashMyGameController")(h = class extends s {
        constructor(t, e) {
            super(o, m, t, e), this.listController = void 0
        }
        onInitializeEnded(t) {
            this.listController = new n(t.onRequestRefreshList, this.createItemController.bind(this), this.updateItemControllerByData.bind(this), this.view.getMyGameListEngineView()), this.listController.init()
        }
        createItemController(t) {
            return new i(t)
        }
        updateItemControllerByData(t, e) {
            null == t || t.updateItemDataWhenScrolling(e, !1)
        }
        reloadList(t) {
            var e, l, o;
            null == (e = this.listController) || e.setItems(t), null == (l = this.listController) || l.scrollToTop(), this.model.listState = null != (o = this.listController) && o.getItems().length ? a : c, this.view.updateListStatus(this.model.listState)
        }
        destroy() {
            this.listController.destroy()
        }
    }) || h);
    e._RF.pop()
}