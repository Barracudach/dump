import * as e from "./cc.js";
import * as i from "./MVCView.js";
import * as s from "./MVCListComp.js";

function main() {
    e._RF.push({}, "18e85IbSvtPsaKDPcCfPCu5", "MVCListView", void 0);
    t("MVCListView", class extends i {
        constructor(...t) {
            super(...t), this.comp = void 0, this.onUpdateItemDataWhenScrolling = void 0, this.onTopRefresh = void 0
        }
        onAttachedEngineView(t) {
            this.comp = t.getComponent(s), this.comp.mvcViews.push(this)
        }
        updateView(t) {
            var e;
            null == (e = this.comp) || e.setDataForMainListView(t.items)
        }
        scrollToTop() {
            var t;
            null == (t = this.comp) || t.scrollToTop()
        }
        scrollToItem(t) {
            var e;
            null == (e = this.comp) || e.scrollToItem(t)
        }
    }), e._RF.pop()
}