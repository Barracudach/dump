import * as e from "./cc.js";
import * as i from "./MVCView.js";
import * as n from "./MttDetailWindowComp.js";

function main() {
    e._RF.push({}, "aaddcAxHqxFaoXsjB1GfuZW", "MttDetailWindowView", void 0);
    t("MttDetailWindowView", class extends i {
        constructor(...t) {
            super(...t), this.comp = null, this.onRefreshWindowsMttDetail = null, this.onViewDestroyed = null
        }
        get playersAndTablesEngineView() {
            var t;
            return null == (t = this.comp) ? void 0 : t.playersAndTables
        }
        get leftWindowEngineView() {
            var t;
            return null == (t = this.comp) ? void 0 : t.leftWindow
        }
        get topWindowEngineView() {
            var t;
            return null == (t = this.comp) ? void 0 : t.topWindow
        }
        get buyInPopupEngineView() {
            var t;
            return null == (t = this.comp) ? void 0 : t.buyInPopup
        }
        onAttachedEngineView(t) {
            this.comp = t.getComponent(n), this.comp.mvcView = this
        }
        get structurePayoutsPrizepoolEngineView() {
            var t;
            return null == (t = this.comp) ? void 0 : t.structurePayoutsPrizepool
        }
        getRender() {
            return this.comp
        }
        getMttPopupsParent() {
            return this.comp.getMttPopupsParent()
        }
        getDialogPrefab() {
            return this.comp.getDialogPrefab()
        }
        fadeIn() {
            this.comp.fade(!0, .3)
        }
    }), e._RF.pop()
}