import * as n from "./cc.js";
import * as e from "./cc.js";
import * as o from "./CommonTools.js";
import * as l from "./HallScene.js";
import * as i from "./ImpokerHall.js";
import * as r from "./HallMttDetailController.js";

function main() {
    e._RF.push({}, "13c0f4GqhJK3Z575/UemFYd", "MttHallCommonControllerIntegrate", void 0);
    t("MttHallCommonControllerIntegrate", class extends r {
        constructor(t, e, n) {
            super(t, e, n), this._hallScript = void 0, this.hallScene = void 0, this.signUpPopUpScript = void 0, this.mttGameListController = void 0
        }
        onInitializeBegin(t) {
            var e;
            this._hallScript = o.instance.getParentScene(n, null == (e = this.view.engineView) ? void 0 : e.node).getComponentInChildren(i), this.hallScene = n.getScene().getComponentInChildren(l)
        }
    }), e._RF.pop()
}