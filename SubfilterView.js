import * as e from "./cc.js";
import * as i from "./MVCView.js";
import * as o from "./SubfilterComp.js";

function main() {
    e._RF.push({}, "b2929n+iOZJJabAoZCWY5am", "SubfilterView", void 0);
    t("SubfilterView", class extends i {
        constructor(...t) {
            super(...t), this.comp = void 0, this.onSubfilterClicked = void 0, this.onSwitchCurrencyClick = void 0, this.onMyGamesClick = void 0, this.onCanUseMyTicketClick = void 0, this.onFilterButtonClick = void 0, this.onRefreshClicked = void 0
        }
        onAttachedEngineView(t) {
            this.comp = t.getComponent(o), this.comp.mvcView = this
        }
        initView(t) {
            var e, i, o, s, n, u;
            null == (e = this.comp) || e.createSubFilterButtons(t.subfilters), null == (i = this.comp) || i.setShowSwitchCurrencyButton(t.showSwitchCurrency), null == (o = this.comp) || o.setShowMyGameButton(t.showMyGame), null == (s = this.comp) || s.setShowCanUseMyTicketButton(t.showSwitchMyTicket), null == (n = this.comp) || n.setShowFilterButton(t.showFilterButton), null == (u = this.comp) || u.setShowRefreshButton(t.showRefreshButton)
        }
        updateView(t) {
            var e, i, o;
            null == (e = this.comp) || e.setActive(t.isShow), null == (i = this.comp) || i.setSelectedSubFilterButton(t.currentSubfilter), null == (o = this.comp) || o.setActiveSubFilterButton(t.subfilters)
        }
        setSubfilterAmount(t, e) {
            var i;
            null == (i = this.comp) || i.setSubfilterAmount(t, e)
        }
        setMyGameAmount(t) {
            var e;
            null == (e = this.comp) || e.setMyGameAmount(t)
        }
        syncMyGameToggle(t) {
            var e;
            null == (e = this.comp) || e.syncMyGameToggle(t)
        }
        setSwitchCanUseMyTicketButton(t) {
            var e;
            null == (e = this.comp) || e.setSwitchCanUseMyTicketButton(t)
        }
        setFilterToggleButton(t) {
            var e;
            null == (e = this.comp) || e.setFilterToggleButton(t)
        }
        updateFilterToggleButtonState(t) {
            var e;
            null == (e = this.comp) || e.updateFilterToggleButtonState(t)
        }
        setShowRefreshButton(t) {
            var e;
            null == (e = this.comp) || e.setShowRefreshButton(t)
        }
    }), e._RF.pop()
}