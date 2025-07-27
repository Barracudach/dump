import * as e from "./cc.js";
import * as i from "./MVCView.js";
import * as s from "./LobbyTabController.js";
import * as n from "./CashMyGameComp.js";

function main() {
    e._RF.push({}, "b3f0cOw/RxJUrC+CyC+u7J8", "CashMyGameView", void 0);
    t("CashMyGameView", class extends i {
        constructor(...t) {
            super(...t), this.comp = void 0
        }
        onAttachedEngineView(t) {
            this.comp = t.getComponent(n), this.comp.mvcView = this
        }
        getMyGameListEngineView() {
            var t;
            return null == (t = this.comp) || null == (t = t.listView) ? void 0 : t.node
        }
        updateListStatus(t) {
            var e;
            null == (e = this.comp) || e.setActiveListEmpty(t == s)
        }
    }), e._RF.pop()
}