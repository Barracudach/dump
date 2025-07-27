import * as t from "./cc.js";
import * as i from "./cc.js";
import * as n from "./MttGameOverviewViewLandscape.js";
import * as o from "./cv.js";
import * as s from "./LobbyTools.js";
import * as r from "./CommonTools.js";
import * as l from "./ImpokerHall.js";
import * as a from "./HallScene.js";
import * as h from "./HallPokerController.js";
import * as d from "./MttHallCommonControllerIntegrate.js";
import * as u from "./MTTUnregisterController.js";

function main() {
    t._RF.push({}, "0b04ecCEUpI1q1nDWBbIety", "MttGameOverviewControllerLandscape", void 0);
    e("MttGameOverviewControllerLandscape", class extends d {
        get view() {
            return this._view
        }
        get model() {
            return this._model
        }
        constructor(e, t) {
            super(n, e, t), this.TAG = "MttGameOverviewControllerLandscape", this.mttGameListController = void 0, this._hallScript = void 0, this.hallScene = void 0, this.signUpPopUpScript = void 0, this.unregisterController = null, s.registerMessage(o.Enum.MessageCenterAction.onRefreshJoinedTournaments, this.onRefreshJoinedTournaments.bind(this), this)
        }
        onInitializeBegin(e) {
            var t;
            this._hallScript = r.instance.getParentScene(i, null == (t = this.view.engineView) ? void 0 : t.node).getComponentInChildren(l), this.hallScene = i.getScene().getComponentInChildren(a), this.view.hideHallMttDetailView = this.hideHallMttDetailView.bind(this), this.view.onClickPlayerTableItem = this.watchTable.bind(this), this.view.onClickSignup = this.onMttBuyinClicked.bind(this), this.view.onClickMttLobby = this.onMttLobbyClicked.bind(this)
        }
        onInitializeEnded(e) {}
        destroy() {
            s.unregisterMessage(o.Enum.MessageCenterAction.onRefreshJoinedTournaments, this), this.hide(), super.destroy()
        }
        showLoading(e) {
            this.view.setLoading(e)
        }
        showPopup(e, t, i) {
            s.emitMessage(h, {
                message: e,
                callback: t,
                title: i
            })
        }
        hide() {
            this.view.hide(), clearInterval(this.scheduleRender)
        }
        show(e, t, i, n = !0, o) {
            cc_mtt.vv.ConsoleLog.log(this.TAG, "show", t, i), this.model.setTournamentData(t), this.model.setDetailData(i);
            const s = this.convertData(t, i);
            this.model.setData(s), this.model.setCurrentPage(e), this.view.reset(), this.view.updateView(this.model), this.updateSignUpButton(), this.updateTimeDifference(), this.setMttSchedule(), this.view.show()
        }
        onRefreshJoinedTournaments() {
            var e;
            null != (e = this.model) && null != (e = e.data) && e._timeUpdate2 && (this.model.data._timeUpdate2 = 0)
        }
        showUnregisterPopup(e, t) {
            this.unregisterController = new u(this.view.getUnregisterPopup()), this.unregisterController.init(), this.unregisterController.show(this.model.detailData.TournamentId, (() => {
                e && e(), this.unregisterController.hide()
            }), t)
        }
        registerEvent() {}
        unregisterEvent() {}
        closeMttPopups() {}
        closeSignUpPopup() {}
        setSignUpButtonLabel(e) {
            this.view.setSignUpButtonColor(e)
        }
        onMttLobbyClicked() {
            var e;
            null != (e = this.model) && e.detailData && s.openMttDetailWindowByTourData(this.model.tournamentData, this.model.detailData)
        }
        onMttBuyinClicked() {
            this.processButtonAction()
        }
        getMttId() {
            return this.model.detailData.TournamentId
        }
        isShowingTournament(e) {
            var t, i;
            return this.model && (null == (t = this.model.data) ? void 0 : t._showing) && (null == (i = this.model.detailData) ? void 0 : i.TournamentId) === e
        }
        updateGameClock(e) {}
        updateDisplayCurrency() {
            !1 !== Boolean(this.model.data) && (this.model.data.convertCurrency = s.isMTTJPcurrencySwitcherOn, this.view.updateDisplayCurrency())
        }
    }), t._RF.pop()
}