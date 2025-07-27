import * as r from "./cc.js";
import * as t from "./MVCView.js";
import * as n from "./CashGameItemRenderer.js";

function main() {
    r._RF.push({}, "e6d06BYUoNJUbXU99C2QMQs", "CashGameItemView", void 0);
    e("default", class extends t {
        constructor(...e) {
            super(...e), this._renderer = void 0
        }
        onAttachedEngineView(e) {
            this._renderer = e.getComponent(n), this.emitEvent("VIEW_LOADED")
        }
        registerHandlers(e) {
            var r;
            null == (r = this._renderer) || r.registerHandlers(e)
        }
        updateView(e) {
            var r;
            null == (r = this._renderer) || r.render(e)
        }
        setCurrencyValues(e) {
            var r;
            null == (r = this._renderer) || r.setCurrencyValues(e)
        }
        isValidObject() {
            var e;
            return (null == (e = this._renderer) ? void 0 : e.isValidObject()) ?? !1
        }
        updateI18nLabels(e) {
            var r;
            null == (r = this._renderer) || r.setRoomName(e)
        }
    }), r._RF.pop()
}