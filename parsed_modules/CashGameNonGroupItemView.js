import * as r from "./cc.js";
import * as t from "./MVCView.js";
import * as n from "./CashGameNonGroupItemRenderer.js";

function main() {
    r._RF.push({}, "30d57z9TlxN9qGou899MdOj", "CashGameNonGroupItemView", void 0);
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
        updateI18nLabels(e) {}
    }), r._RF.pop()
}