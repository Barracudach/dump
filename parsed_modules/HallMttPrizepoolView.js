import * as r from "./cc.js";
import * as t from "./MVCView.js";
import * as i from "./HallMttPrizepoolRender.js";

function main() {
    r._RF.push({}, "32148qgyw9A6bkprdAJa7x2", "HallMttPrizepoolView", void 0);
    e("default", class extends t {
        constructor(...e) {
            super(...e), this._render = void 0, this.onClickButtonBack = null
        }
        onAttachedEngineView(e) {
            this._render = e.getComponent(i), this._render.mvcView = this
        }
        updateView(e) {
            var r;
            null == (r = this._render) || r.render(e)
        }
        getNode() {
            var e;
            return null == (e = this._render) ? void 0 : e.node
        }
        setPrizePool(e) {
            var r;
            null == (r = this._render) || r.setPrizePool(e)
        }
        createItem() {
            var e;
            return null == (e = this._render) ? void 0 : e.createItem()
        }
        registerOnShowCallback(e) {
            this._render.registerOnShowCallback(e)
        }
        registerOnHideCallback(e) {
            this._render.registerOnHideCallback(e)
        }
        show() {
            this._render.show()
        }
        hide() {
            this._render.hide()
        }
        hideImmediately() {
            this._render.hideImmediately()
        }
        isShowing() {
            return this._render.isShowing()
        }
    }), r._RF.pop()
}