import * as t from "./cc.js";
import * as n from "./cc.js";
import * as r from "./MttGameListOverviewCompLandscape.js";
import * as i from "./cv.js";
import * as l from "./MVCView.js";
import * as o from "./HallMttDetailRenderer.js";

function main() {
    n._RF.push({}, "e09ac4Zy0BJxLj5PAwjuMkv", "HallMttDetailView", void 0);
    e("default", class extends l {
        constructor(...e) {
            super(...e), this._renderer = void 0, this.onClickButtonBack = null, this.onClickButtonEntries = null, this.onClickButtonPlayers = null, this.onClickButtonTables = null, this.onClickButtonPrizepool = null, this.onClickButtonPayout = null, this.onClickButtonDetail = null, this.onClickButtonStructure = null, this.onClickButtonShowFullDescription = null, this.onClickButtonAction = null, this.hideHallMttDetailView = null, this.onClickPlayerTableItem = null, this.onTabSwitched = null
        }
        onAttachedEngineView(e) {
            this._renderer = e.getComponent(o), !this._renderer && i.appConfig.isLandscapeLayout && (this._renderer = e.getComponent(r)), this._renderer.mvcView = this
        }
        show(e) {
            var t;
            null == (t = this.getRender()) || t.show(e)
        }
        updateView(e) {
            var t;
            null == (t = this.getRender()) || t.render(e)
        }
        updateDisplayCurrency() {
            var e;
            null == (e = this.getRender()) || e.updateDisplayCurrency()
        }
        getCurLevelLabel() {
            var e;
            return null == (e = this.getRender()) ? void 0 : e.infoPage.curLevelTxt
        }
        setGameClockLabel(e) {
            t(this.getRender()) && t(this.getRender().infoPage) && t(this.getRender().infoPage.gameClockTxt) && (this.getRender().infoPage.gameClockTxt.string = e)
        }
        getMttPopupsParent() {
            var e;
            return null == (e = this.getRender()) ? void 0 : e.getMttPopupsParent()
        }
        getRender() {
            return this._renderer
        }
        getNode() {
            var e;
            return null == (e = this.getRender()) ? void 0 : e.node
        }
        isActive() {
            return this.getRender().isActive()
        }
        getSignUpButton() {
            var e;
            return null == (e = this.getRender()) ? void 0 : e.getSignUpButton()
        }
        getSignUpPopup() {
            var e;
            return null == (e = this.getRender()) ? void 0 : e.getSignUpPopup()
        }
        getSignUpButtonLabel() {
            var e;
            return null == (e = this.getRender()) ? void 0 : e.getSignUpButtonLabel()
        }
        getRoomStatusString() {
            var e;
            return null == (e = this.getRender()) || null == (e = e.infoPage) || null == (e = e.statusTxt) ? void 0 : e.string
        }
        getDateInfoString() {
            var e;
            return null == (e = this.getRender()) || null == (e = e.infoPage) || null == (e = e.startTimeTxt) ? void 0 : e.string
        }
        setLoading(e) {
            var t;
            null == (t = this.getRender()) || t.setLoading(e)
        }
        updatRoomStatus() {}
        hide() {
            this.getRender().node.active = !1
        }
        getInfoCompNode() {
            return this.getRender().infoPage.node
        }
        getBlindStructureEngineView() {
            return this.getRender().blindStructurePage.node
        }
        getPrizePoolRendererNode() {
            return this.getRender().prizePoolPage.node
        }
        getPayoutCompNode() {
            return this.getRender().payoutPage.node
        }
        getPlayerComp() {
            return this.getRender().playerPage
        }
        getTableComp() {
            return this.getRender().tablePage
        }
        getEventListPage() {
            return this.getRender().getEventListPage()
        }
        getMultiflightFeederComp() {
            return this.getRender().multiflightFeederComp
        }
        getSatelliteFeederComp() {
            return this.getRender().satelliteFeederComp
        }
        getStatusBoxTxt() {
            var e;
            return null == (e = this.getRender()) ? void 0 : e.infoPage.statusBoxTxt
        }
        switchTab(e) {
            this.getRender().switchTab(e)
        }
        getCurrentTabPageIndex() {
            return this.getRender().currentTabPageIndex
        }
        onToggleOverlayButton(e, t = null) {
            var n;
            null == (n = this.getRender()) || n.onToggleOverlayButton(e, t)
        }
    }), n._RF.pop()
}