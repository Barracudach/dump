import * as e from "./cc.js";
import * as o from "./MVCView.js";
import * as r from "./MttStructurePayoutPrizepoolComp.js";

function main() {
    e._RF.push({}, "e7bf7Zd3jtPHoBJhUO2nB5m", "MttStructurePayoutPrizePoolView", void 0);
    t("MttStructurePayoutPrizePoolView", class extends o {
        constructor(...t) {
            super(...t), this.comp = null
        }
        onAttachedEngineView(t) {
            this.comp = t.getComponent(r), this.comp.mvcView = this
        }
        getBlindStructureEngineView() {
            return this.comp.getBlindStructure()
        }
        getPrizePoolRendererNode() {
            return this.comp.getPrizepool()
        }
        getPayoutRenderNode() {
            return this.comp.getPayout()
        }
        updateView(t) {
            var e, o;
            null == (e = this.comp) || e.showPayout(t.showPayout), null == (o = this.comp) || o.showPrizePool(t.showPrizepool)
        }
    }), e._RF.pop()
}