import * as t from "./cc.js";
import * as n from "./MVCView.js";
import * as r from "./MttGameItemRender.js";

function main() {
    t._RF.push({}, "f64c9xQ1iNNkbMMcpwAVWmD", "MttGameItemView", void 0);
    e("default", class extends n {
        constructor(...e) {
            super(...e), this.render = void 0, this.onClick = null, this.onAutoSizeLabelFinish = null
        }
        onAttachedEngineView(e) {
            this.render = e.getComponent(r), this.render.mvcView = this, this.emitEvent("VIEW_LOADED")
        }
        registerHandlers(e) {
            var t;
            null == (t = this.render) || t.registerHandlers(e)
        }
        setDoubleClickHandler(e) {
            var t;
            null == (t = this.render) || t.setDoubleClickHandler(e)
        }
        updateView(e) {
            this.render.render(e.data)
        }
        updateCurrency(e) {
            this.render.updateCurrency(e.data)
        }
        updateSelected(e) {
            this.render.updateSelected(e.data)
        }
    }), t._RF.pop()
}