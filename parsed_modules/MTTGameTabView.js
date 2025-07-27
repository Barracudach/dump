import * as e from "./cc.js";
import * as i from "./LobbyTabView.js";
import * as n from "./MTTGameTabController.js";
import * as l from "./MTTGameTabController.js";

function main() {
    e._RF.push({}, "99cdbL04SRKmaa3VCkC07W3", "MTTGameTabView", void 0);
    t("MTTGameTabView", class extends i {
        constructor(...t) {
            super(...t), this.comp = void 0, this.onGroupFilterClicked = void 0, this.onInformerClosed = void 0
        }
        getGroupFilterPopupEngineView() {
            var t;
            return null == (t = this.comp) ? void 0 : t.getGroupFilterPopup()
        }
        changeFilterToggleState(t) {
            var e;
            null == (e = this.comp) || e.changeFilterToggleState(t)
        }
        updateListStatus(t) {
            var e, i;
            super.updateListStatus(t), null == (e = this.comp) || e.setShowMyMTTEmptyList(t == l), null == (i = this.comp) || i.setShowFilterEmptyList(t == n)
        }
        activeInformer(t) {
            var e, i;
            t ? null == (e = this.comp) || e.activeInformer() : null == (i = this.comp) || i.hideInformer()
        }
        playFilterAni(t, e = null) {
            var i;
            null == (i = this.comp) || i.playFilterAni(t, e)
        }
        playExpandAnim(t, e = null) {
            var i;
            null == (i = this.comp) || i.playExpanAnim(t, e)
        }
        updateFilterCount(t) {
            var e;
            null == (e = this.comp) || e.updateFilterCount(t)
        }
    }), e._RF.pop()
}