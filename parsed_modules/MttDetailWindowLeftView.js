import * as e from "./cc.js";
import * as i from "./MVCView.js";

function main() {
    e._RF.push({}, "be981gpfnhNLoSgnWRiDR6E", "MttDetailWindowLeftView", void 0);
    t("MttDetailWindowLeftView", class extends i {
        constructor(...t) {
            super(...t), this.comp = null, this.onTabSwitched = null, this.onClickShowAllTargetEvent = null, this.onClickTargetEventName = null, this.onGetMttPopupParent = null
        }
        onAttachedEngineView(t) {
            this.comp = t.getComponent("MttDetailWindowLeftComp"), this.comp.mvcView = this
        }
        getEventListPage() {
            return this.comp.getEventListPage()
        }
        getTabSatellite() {
            return this.comp.getTabSatellite()
        }
        getRender() {
            return this.comp
        }
        getMultiFlight() {
            return this.comp.multiflightFeederComp
        }
        getSatellite() {
            return this.comp.satelliteFeederComp
        }
        switchTab(t) {
            this.comp.switchTab(t)
        }
        updateViewInfo(t) {
            this.comp.updateViewInfo(t)
        }
        updateViewSatellite(t) {
            this.comp.updateViewSatellite(t)
        }
    }), e._RF.pop()
}