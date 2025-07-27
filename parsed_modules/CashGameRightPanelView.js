import * as t from "./cc.js";
import * as r from "./cc.js";
import * as n from "./CashGameRightPanelRenderer.js";
import * as i from "./MVCView.js";

function main() {
    var s;
    t._RF.push({}, "f9ebfVqq8RIjZeP+5/mP9V5", "CashGameRightPanelView", void 0);
    const {
        ccclass: a,
        property: c
    } = r;
    e("CashGameRightPanelView", a("CashGameRightPanelView")(s = class extends i {
        constructor(...e) {
            super(...e), this._renderer = void 0
        }
        onAttachedEngineView(e) {
            this._renderer = e.getComponent(n), this._renderer.mvcView = this
        }
        getNode() {
            var e;
            return null == (e = this._renderer) ? void 0 : e.node
        }
        updateView(e) {
            this._renderer.render(e)
        }
    }) || s);
    t._RF.pop()
}