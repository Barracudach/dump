import * as e from "./cc.js";
import * as a from "./MVCController.js";
import * as i from "./MttDetailWindowLeftView.js";
import * as l from "./MVCModel.js";
import * as n from "./MttItemHelper.js";
import * as s from "./LobbyTools.js";

function main() {
    e._RF.push({}, "4eea4i9BiBJeaiDdzb4xnRa", "MttDetailWindowLeftController", void 0);
    class o {
        constructor() {
            this.fullDescription = void 0, this.detailInfo = {
                mttId: 0,
                isShow: !0,
                currency: "",
                name: "",
                gameType: 0,
                tournamentMode: 0,
                status: 0,
                statusStr: "",
                regStatus: 0,
                startingTime: new Date,
                regFee: 0,
                srvFee: 0,
                rebuyCount: 0,
                prizePool: 0,
                prizeCircle: 0,
                bounty: "",
                guarantee: 0,
                overlay: 0,
                startingChip: 0,
                stopSignUpLevel: 0,
                currentLevel: 0,
                lateRegEndTimestamp: 0,
                gameDuration: 0,
                estimatedDuration: 0,
                blindInterval: 0,
                blindHand: 0,
                seats: 0,
                minPlayers: 0,
                maxPlayers: 0,
                breakDuration: 0,
                smallestStack: 0,
                avgStack: 0,
                largestStack: 0,
                myRank: 0,
                description: "",
                currentBlindConfig: null,
                nextBlindConfig: null,
                playingPlayers: 0,
                registeredPlayers: 0,
                entries: 0,
                firstPlacePrize: 0,
                nextPlacePrize: 0,
                rebuyParam: null,
                moreBuyParam: null,
                targetId: 0,
                targetEventName: "",
                targetEvents: [],
                additionalPrizePool: 0,
                timerStop: !1
            }
        }
    }
    t("MTTDetailWindowLeftInfoData", o);
    class r {
        constructor() {
            this.multiFlightId = void 0, this.multiFlightLevel = void 0, this.feederEvents = void 0, this.satelliteEvents = void 0, this._timeStampLastSatelliteUpdate = 0
        }
    }
    t("MTTDetailWindowLeftSatelliteData", r);
    class d {
        constructor() {
            this.infoData = void 0, this.satelliteData = void 0
        }
    }
    t("MTTDetailWindowLeftData", d);
    let h = t("TabMttDetailWindowLeft", function(t) {
        return t[t.Info = 0] = "Info", t[t.Satellite = 1] = "Satellite", t
    }({}));
    class m extends l {
        constructor(...t) {
            super(...t), this.detailData = void 0, this.tournamentData = void 0, this.data = void 0, this.currentTab = h.Info, this.isFirstLoaded = !0
        }
    }
    t("MTTDetailWindowLeftModel", m);
    let v = t("MttDetailLeftTab", function(t) {
        return t[t.Info = 0] = "Info", t[t.Satellite = 1] = "Satellite", t
    }({}));
    t("MttDetailWindowLeftController", class extends a {
        constructor(t) {
            super(i, m, t), this.eventListController = null, this.windowController = null
        }
        addWindowController(t) {
            this.windowController = t
        }
        loadByDatas(t) {
            this.model.tournamentData = t.tournamentData, this.model.detailData = t.tournamentDetail, null == this.model.data && (this.model.data = new d), this.loadDataInfo(), this.loadDataSatellite(t), this.model.isFirstLoaded ? (this.model.isFirstLoaded = !1, this.onTabSwitched(v.Info)) : this.onTabSwitched(this.model.currentTab)
        }
        loadDataInfo() {
            null == this.model.data.infoData && (this.model.data.infoData = new o), this.model.data.infoData.fullDescription = n.getFullDescriptionMttDetail(this.model.detailData.Desc, this.model.detailData.DescI18N), this.model.data.infoData.detailInfo = n.getMTTDetailInfoData(this.model.tournamentData, this.model.detailData)
        }
        loadDataSatellite(t) {
            var e, a, i, l;
            null == this.model.data.satelliteData && (this.model.data.satelliteData = new r), this.model.data.infoData.detailInfo.targetEvents = t.targetEvents, this.model.data.satelliteData.feederEvents = t.feederEvents, this.model.data.satelliteData.satelliteEvents = t.satelliteEvents, this.showSatellitePage(t.feederEvents.length > 0 || t.satelliteEvents.length > 0), null == (e = this.view.getMultiFlight()) || e.setMaxListViewHeight(315), null == (a = this.view.getSatellite()) || a.setMaxListViewHeight(315), null == (i = this.view.getMultiFlight()) || i.render({
                mttList: this.model.data.satelliteData.feederEvents
            }), null == (l = this.view.getSatellite()) || l.render({
                mttList: this.model.data.satelliteData.satelliteEvents
            }), this.model.data.satelliteData._timeStampLastSatelliteUpdate = cc_mtt.vv.DataManager.getNow().getTime(), this.onTabSwitched(this.model.currentTab)
        }
        onInitializeBegin(t) {
            this.view.onTabSwitched = this.onTabSwitched.bind(this), this.view.onGetMttPopupParent = this.onGetMttPopupParent.bind(this), this.view.onClickTargetEventName = this.onClickTargetEventName.bind(this)
        }
        onClickTargetEventName(t) {
            s.openMttDetailWindowByTourId(t)
        }
        onInitializeEnded(t) {
            this.eventListController = this.view.getEventListPage().getComponent("MttHallDetailEventPageComp"), this.eventListController.onClickButtonBack(), this.eventListController.setCallbackOnClick(this.onClickTargetEventName.bind(this)), this.eventListController.registerPageHideCallback(this.onHideEvent.bind(this)), this.view.getMultiFlight().registerOnClickShowAllCallback(this.showFeederEvent.bind(this)), this.view.getMultiFlight().setCallbackOnClick(this.onClickTargetEventName.bind(this)), this.view.getSatellite().registerOnClickShowAllCallback(this.showSatelliteEvent.bind(this)), this.view.getSatellite().setCallbackOnClick(this.onClickTargetEventName.bind(this)), this.registerOnClickShowAllTargetEventCallback(this.showTargetEvent.bind(this))
        }
        onHideEvent() {
            this.eventListController.reset()
        }
        registerOnClickShowAllTargetEventCallback(t) {
            this.view.onClickShowAllTargetEvent = t
        }
        showTargetEvent() {
            this.model.data.satelliteData && this.model.data.infoData.detailInfo.targetEvents && (this.eventListController.show(), this.eventListController.render({
                tournamentName: cc_mtt.vv.DataManager.i18DataFromServer(this.model.detailData.TournamentName, this.model.detailData.TournamentNameI18N),
                mttList: this.model.data.infoData.detailInfo.targetEvents,
                displayEventType: 3
            }))
        }
        showFeederEvent() {
            this.model.data.satelliteData && this.model.data.satelliteData.feederEvents && (this.eventListController.show(), this.eventListController.render({
                tournamentName: cc_mtt.vv.DataManager.i18DataFromServer(this.model.detailData.TournamentName, this.model.detailData.TournamentNameI18N),
                mttList: this.model.data.satelliteData.feederEvents,
                displayEventType: 2
            }))
        }
        showSatelliteEvent() {
            this.model.data.satelliteData && this.model.data.satelliteData.satelliteEvents && (this.eventListController.show(), this.eventListController.render({
                tournamentName: cc_mtt.vv.DataManager.i18DataFromServer(this.model.detailData.TournamentName, this.model.detailData.TournamentNameI18N),
                mttList: this.model.data.satelliteData.satelliteEvents,
                displayEventType: 1
            }))
        }
        onTabSwitched(t) {
            this.model.currentTab = t, t == h.Info ? (this.view.updateViewInfo(this.model), this.view.switchTab(h.Info)) : (this.view.updateViewSatellite(this.model), this.view.switchTab(h.Satellite))
        }
        onGetMttPopupParent() {
            return this.windowController.getMttPopupsParent()
        }
        showSatellitePage(t) {
            const e = this.view.getTabSatellite();
            e && (e.active = t)
        }
        destroy() {
            this.eventListController.reset(), this.eventListController.destroy()
        }
    }), e._RF.pop()
}