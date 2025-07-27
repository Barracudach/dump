import * as t from "./cc.js";
import * as r from "./MVCView.js";
import * as n from "./MttItemPrizepoolRender.js";

function main() {
    t._RF.push({}, "e3ce2iFtv9IaabE81m8m9my", "MttItemPrizepoolView", void 0);
    e("default", class extends r {
        constructor(...e) {
            super(...e), this._renderer = void 0
        }
        onAttachedEngineView(e) {
            this._renderer = e.getComponent(n), this._renderer.mvcView = this
        }
        updateView(e) {
            var t;
            null == (t = this._renderer) || t.render(e)
        }
        updateDisplayCurrency(e) {
            var t;
            null == (t = this._renderer) || t.updateDisplayCurrency(e)
        }
    }), t._RF.pop()
}