import * as e from "./cc.js";
import * as s from "./cc.js";
import * as i from "./FlashMyGameComp.js";
import * as c from "./LobbyTabController.js";
import * as n from "./MVCView.js";

function main() {
    var o;
    e._RF.push({}, "2f6b1CduzRMDpcwSbweSZyp", "FlashMyGameView", void 0);
    const {
        ccclass: a
    } = s;
    t("FlashMyGameView", a("FlashMyGameView")(o = class extends n {
        constructor(...t) {
            super(...t), this.comp = void 0
        }
        onAttachedEngineView(t) {
            this.comp = t.getComponent(i), this.comp.mvcView = this
        }
        getMyGameListEngineView() {
            var t;
            return null == (t = this.comp) || null == (t = t.listView) ? void 0 : t.node
        }
        updateListStatus(t) {
            var e;
            null == (e = this.comp) || e.setActiveListEmpty(t == c)
        }
    }) || o);
    e._RF.pop()
}