import * as e from "./cc.js";
import * as i from "./MVCView.js";
import * as o from "./LobbyTabController.js";
import * as s from "./LobbyTabController.js";
import * as n from "./LobbyTabComp.js";

function main() {
    e._RF.push({}, "561dfxwT3JJZ7shURIBf28o", "LobbyTabView", void 0);
    t("LobbyTabView", class extends i {
        constructor(...t) {
            super(...t), this.comp = void 0
        }
        onAttachedEngineView(t) {
            this.comp = t.getComponent(n), this.comp.mvcViews.push(this)
        }
        getSubfilterEngineView() {
            var t;
            return null == (t = this.comp) ? void 0 : t.getSubfilterPanel()
        }
        getGameListEngineView() {
            var t;
            return null == (t = this.comp) ? void 0 : t.getGameListNode()
        }
        updateListStatus(t) {
            var e, i;
            null == (e = this.comp) || e.setShowLoadingList(t == s), null == (i = this.comp) || i.setShowEmptyList(t == o)
        }
        updateIsShow(t) {
            var e;
            null == (e = this.comp) || e.setActive(t)
        }
        updateView(t) {
            this.updateIsShow(t.isShow), this.updateListStatus(t.listState)
        }
    }), e._RF.pop()
}