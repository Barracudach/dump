import * as e from "./cc.js";
import * as n from "./MVCView.js";
import * as i from "./MttDetailWindowPlayersAndTablesComp.js";

function main() {
    e._RF.push({}, "1085bnkYQhIdYL9XmqSCRNG", "MttDetailWindowPlayersAndTablesView", void 0);
    t("MttDetailWindowPlayersAndTablesView", class extends n {
        constructor(...t) {
            super(...t), this.comp = null, this.onClickTab = null
        }
        onAttachedEngineView(t) {
            this.comp = t.getComponent(i), this.comp.mvcView = this
        }
        updateView(t) {
            var e;
            null == (e = this.comp) || e.render(t)
        }
    }), e._RF.pop()
}