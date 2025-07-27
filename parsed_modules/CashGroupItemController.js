import * as t from "./cc.js";
import * as i from "./MVCItemController.js";
import * as n from "./CashGroupItemHelper.js";
import * as s from "./CashGroupItemModel.js";
import * as r from "./CashGroupItemView.js";

function main() {
    t._RF.push({}, "557e7m3pnxIXbzj0NpTRu4C", "CashGroupItemController", void 0);
    e("default", class extends i {
        constructor(e) {
            super(r, s, e), this._clickHander = void 0
        }
        init() {
            super.init(), this.model.registerHandlers(this.onModelUpdated.bind(this))
        }
        registerHandlers(e) {
            this._clickHander = e
        }
        onViewEvent(e, ...t) {
            "VIEW_LOADED" === e && this.view.registerHandlers(this.clickHandler.bind(this))
        }
        updateItemDataWhenScrolling(e) {
            this.model.setData(e)
        }
        onModelUpdated() {
            this.view.updateView(n.getRenderData(this.model.getBaseDataForRendering()))
        }
        clickHandler() {
            var e;
            null == (e = this._clickHander) || e.call(this, this.model.groupName)
        }
    }), t._RF.pop()
}