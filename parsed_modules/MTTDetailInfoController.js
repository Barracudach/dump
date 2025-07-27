import * as t from "./cc.js";
import * as a from "./LobbyTools.js";
import * as i from "./MttItemHelper.js";
import * as n from "./MVCController.js";
import * as r from "./MVCModel.js";
import * as o from "./MTTDetailInfoView.js";
import * as l from "./Pb.js";
import * as u from "./Enum.js";
import * as s from "./Enum.js";
import * as d from "./MttItemRenderHelper.js";

function main() {
    t._RF.push({}, "6337ddNE6dJnZLGPvK2Jw1x", "MTTDetailInfoController", void 0);
    class m extends r {
        constructor(...e) {
            super(...e), this.tournamentData = void 0, this.tournamentDetail = void 0, this.hallModelData = void 0, this.data = {
                mttId: 0,
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
    e("MTTDetailInfoModel", m);
    e("default", class extends n {
        constructor(e) {
            super(o, m, e), this.view.onClickButtonBack = this.hide.bind(this)
        }
        start() {}
        registerPageShowCallback(e) {
            this.view.registerOnShowCallback(e)
        }
        registerPageHideCallback(e) {
            this.view.registerOnHideCallback(e)
        }
        registerOnClickShowAllTargetEventCallback(e) {
            this.view.onClickShowAllTargetEvent = e
        }
        registerOnClickInfoButtonCallback(e) {
            this.view.onToggleOverlayButton = e
        }
        updateDisplayCurrency() {
            this.model.data.currency = a.isMTTJPcurrencySwitcherOn ? "USD" : "CNY", this.view.updateView(this.model)
        }
        updateInfo(e, t, a) {
            this.model.tournamentData = e, this.model.tournamentDetail = t, this.model.hallModelData = a, this.prepareData(), this.view.updateView(this.model)
        }
        updateTargetEvent(e, t) {
            this.view.updateTargetEvent(e, t)
        }
        prepareData() {
            const e = this.model.hallModelData,
                t = this.model.tournamentData,
                a = this.model.tournamentDetail,
                n = this.model.data,
                r = cc_mtt.vv.DataManager.getNow();
            let o = a.Status != l.commonProto.MTT_GAME_STATUS.NOT_STARTED;
            n.mttId = a.TournamentId, n.currency = t.Detail.currency, n.currencySign = n.currency == s[u.USD].code ? s[u.USD].symbol : n.currency == s[u.CNY].code ? s[u.CNY].shortSymbol : "", n.name = cc_mtt.vv.DataManager.i18DataFromServer(a.TournamentName, a.TournamentNameI18N), n.gameType = a.GameMode, n.tournamentMode = a.TournamentMode, n.bounty = d.getBountyString(a.TournamentMode, n.currencySign, a), n.startingTime = a.StartingTime, n.status = a.Status;
            const [m, c, g] = i.getMttRoomStatus(a);
            n.statusStr = m, n.regStatus = g, n.description = e.fullDescription, n.lateRegEndTimestamp = e.timeStampLateReg, n.stopSignUpLevel = a.LevelStopSignup, n.blindConfig = e.blindConfig, n.currentLevel = a.CurrentLevel, o ? (n.currentBlindConfig = e.blindConfig[n.currentLevel - 1], n.nextBlindConfig = e.blindConfig[n.currentLevel], n.smallestStack = a.MinCoins, n.avgStack = a.AvgCoins, n.largestStack = a.MaxCoins) : (n.currentBlindConfig = null, n.nextBlindConfig = null, n.smallestStack = 0, n.avgStack = 0, n.largestStack = 0), n.startingChip = a.StartingCoins, n.blindInterval = a.LevelTime, n.blindHand = a.BlindHands, n.breakDuration = a.RestDuration, n.gameDuration = e.gameDuration, n.estimatedDuration = a.EstimatedDuration, n.regFee = e.regFee, n.bountyFee = a.BountyFee, n.srvFee = e.srvFee, n.rebuyCount = a.ReentryLimit, n.rebuyParam = e.rebuyParam, n.moreBuyParam = e.moreBuyParam, n.seats = a.Seats, n.playingPlayers = a.PlayingPlayersCount, n.registeredPlayers = a.PlayersCount, n.entries = a.JoinedCount, n.minPlayers = a.PlayOnJoint > 0 ? a.PlayOnJoint : a.LowerLimitPlayers, n.maxPlayers = a.PlayOnJoint > 0 ? a.PlayOnJoint : a.SignupLimit, n.prizePool = e.prizePool, n.firstPlacePrize = a.FirstPrize, n.nextPlacePrize = a.NextPrize, n.prizeCircle = a.PrizeCircle, n.inTheMoney = a.InTheMoney, n.myRank = i.getMyRank(a.TournamentId), n.guarantee = a.Guaranteed, n.overlay = a.Overlay, n.targetId = e.targetId, n.targetEventName = e.targetEventName, n.targetEvents = e.targetEvents, n.additionalPrizePool = a.AdditionalPrizePool;
            let y = i.getAllowSignupDateFromTournamentDetail(a);
            n.allowSignupDate = r.getTime() < (null == y ? void 0 : y.getTime()) ? y : null, n.timerStop = e.timerStop, n.multiFlightLevel = e.multiFlightLevel, n.isPaused = i.isPaused(a), n.inMiddlePause = !i.isPaused(a) && a.PauseStatus, n.isShortDeck = i.isDetailShortDeck(a)
        }
        show() {
            this.view.show()
        }
        showImmdiately() {
            this.view.showImmdiately()
        }
        hide() {
            this.view.hide()
        }
        hideImmediate() {
            this.view.hideImmediately()
        }
        isShowing() {
            return this.view.isShowing()
        }
        schedulerAction() {
            this.view.schedulerAction()
        }
    }), t._RF.pop()
}