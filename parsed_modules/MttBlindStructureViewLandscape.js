import * as e from "./cc.js";
import * as c from "./MttBlindStructureView.js";
import * as n from "./MttStructureTabComp.js";

function main() {
    e._RF.push({}, "a5860JaLkpBbYbAqvc0dSTv", "MttBlindStructureViewLandscape", void 0);
    t("MttBlindStructureViewLandscape", class extends c {
        constructor(...t) {
            super(...t), this.comp = null
        }
        onAttachedEngineView(t) {
            this.comp = t.getComponent(n), this.comp.mvcView = this
        }
    }), e._RF.pop()
}