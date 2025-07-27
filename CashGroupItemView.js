import * as r from "./cc.js";
import * as t from "./MVCView.js";
import * as n from "./CashGroupItemRenderer.js";

function main() {
    r._RF.push({}, "3094euBXc1Ol6RDrdFM4V2w", "CashGroupItemView", void 0);
    e("default", class extends t {
        constructor(...e) {
            super(...e), this._renderer = void 0
        }
        onAttachedEngineView(e) {
            this._renderer = e.getComponent(n), this.emitEvent("VIEW_LOADED")
        }
        updateView(e) {
            var r;
            null == (r = this._renderer) || r.setData(e)
        }
        registerHandlers(e) {
            var r;
            null == (r = this._renderer) || r.registerHandlers(e)
        }
        setCurrencyValues(e) {
            var r;
            null == (r = this._renderer) || r.setCurrencyValues(e, e.currency)
        }
    }), r._RF.pop()
}