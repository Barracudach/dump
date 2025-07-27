import * as e from "./cc.js";
import * as n from "./MttBlindStructureViewLandscape.js";
import * as l from "./MttBlindStructureModel.js";
import * as r from "./MVCController.js";

function main() {
    e._RF.push({}, "50560uNFAhESqNEWVHL5Gb/", "MttBlindStructureControllerLandscape", void 0);
    t("default", class extends r {
        constructor(t) {
            super(n, l, t)
        }
        updateInfo(t, e, n, l, r, i) {
            this.model.blindPots = t, this.model.currentLevel = e, this.model.levelStopSignUp = n, this.model.levelDuration = l, this.model.isShortDesk = r, this.model.blindHand = i, this.view.updateView(this.model)
        }
    }), e._RF.pop()
}