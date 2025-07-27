import * as e from "./cc.js";
import * as i from "./MVCController.js";
import * as s from "./MVCModel.js";
import * as l from "./SubfilterView.js";

function main() {
    e._RF.push({}, "62f0eZyEr1HoL2LD0M4+3ZP", "SubfilterController", void 0);
    class h extends s {
        constructor(...t) {
            super(...t), this.subfilters = void 0, this.currentSubfilter = void 0, this.isShow = void 0, this.showSwitchCurrency = void 0, this.showMyGame = void 0, this.showSwitchMyTicket = void 0, this.showFilterButton = void 0, this.showRefreshButton = void 0
        }
    }
    t("SubfilterModel", h);
    t("MY_GAMES_SUBFILTER_NAME", "MyGames"), t("MY_MTT_SUBFILTER_NAME", "MyMTTs"), t("MY_TICKET_SUBFILTER_NAME", "Available_Tickets"), t("MY_TICKET_SUBFILTER_NAME_UPPER_CASE", "MYTICKETS"), t("SWITCH_CURRENCY", "SWITCHCURRENCY");
    t("default", class extends i {
        get currentSubfilter() {
            return this.model.currentSubfilter
        }
        constructor(t, e, i, s, n, o, r, u) {
            super(l, h, r, u), this.handlerOnSubfilterClicked = t, this.handleSwitchCurrency = e, this.handleSwitchMyGames = i, this.handleSwitchCanUseMyTicket = s, this.handleFilterButton = n, this.handleRefreshButtonClicked = o
        }
        onInitializeBegin(t) {
            this.view.onSubfilterClicked = this.onSubfilterClicked.bind(this), this.view.onSwitchCurrencyClick = this.onSwitchCurrencyClicked.bind(this), this.view.onMyGamesClick = this.onSwitchMyGamesClicked.bind(this), this.view.onCanUseMyTicketClick = this.onSwitchCanUseMyTicketClicked.bind(this), this.view.onFilterButtonClick = this.onFilterButtonClicked.bind(this), this.view.onRefreshClicked = this.onRefreshButtonClicked.bind(this)
        }
        onInitializeEnded(t) {
            this.model.subfilters = t.subfilters, this.model.subfilters && this.model.subfilters.forEach((t => {
                void 0 === t.isShow && (t.isShow = !0)
            })), this.model.showSwitchCurrency = t.showSwitchCurrency, this.model.showMyGame = t.showMyGame, this.model.showSwitchMyTicket = t.showSwitchMyTicket, this.model.showFilterButton = t.showFilterButton, this.model.showRefreshButton = t.showRefreshButton, this.model.subfilters.length && this.setDefaultCurrentSubfilter(t.defaultSubfilter)
        }
        setDefaultCurrentSubfilter(t) {
            const e = null == t ? void 0 : t.toLowerCase(),
                i = this.model.subfilters.find((t => {
                    var i;
                    return (null == (i = t.name) ? void 0 : i.toLowerCase()) === e
                }));
            this.model.currentSubfilter = (null == i ? void 0 : i.name) || this.model.subfilters[0].name
        }
        onSubfilterClicked(t) {
            this.model.subfilters.find((e => e.name == t)) && this.handlerOnSubfilterClicked(t)
        }
        onSwitchCurrencyClicked(t) {
            var e;
            null == (e = this.handleSwitchCurrency) || e.call(this, t)
        }
        onSwitchMyGamesClicked(t) {
            var e;
            null == (e = this.handleSwitchMyGames) || e.call(this, t)
        }
        onSwitchCanUseMyTicketClicked(t) {
            var e;
            null == (e = this.handleSwitchCanUseMyTicket) || e.call(this, t)
        }
        onFilterButtonClicked() {
            var t;
            null == (t = this.handleFilterButton) || t.call(this)
        }
        showSubFilter(t, e) {
            const i = this.model.subfilters.find((t => t.name == e));
            i && (i.isShow = t), this.view.updateView(this.model)
        }
        selectSubFilter(t) {
            this.model.currentSubfilter = t, this.view.updateView(this.model)
        }
        unselectSubFilter() {
            this.model.currentSubfilter = "", this.view.updateView(this.model)
        }
        setIsShow(t) {
            this.model.isShow = t, this.view.updateView(this.model)
        }
        setSubfilterAmount(t, e) {
            const i = this.model.subfilters.find((e => e.name.toUpperCase() == t.toUpperCase()));
            i && this.view.setSubfilterAmount(i.name, e)
        }
        setMyGameAmount(t) {
            this.view.setMyGameAmount(t)
        }
        syncMyGameChecked(t) {
            this.view.syncMyGameToggle(t)
        }
        setSwitchCanUseMyTicketButton(t) {
            this.view.setSwitchCanUseMyTicketButton(t)
        }
        setFilterToggleButton(t) {
            this.view.setFilterToggleButton(t)
        }
        updateFilterToggleButtonState(t) {
            this.view.updateFilterToggleButtonState(t)
        }
        onRefreshButtonClicked() {
            var t;
            null == (t = this.handleRefreshButtonClicked) || t.call(this)
        }
    }), e._RF.pop()
}