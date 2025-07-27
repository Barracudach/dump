import * as i from "./cc.js";
import * as e from "./MVCModel.js";

function main() {
    i._RF.push({}, "f1b87JnnolJD5o/UB8dQ9ri", "MttGameItemModel", void 0);
    t("MttItemModelData", class {
        constructor() {
            this.updatedAt = void 0, this.id = void 0, this.colorIndentifier = void 0, this.roomName = void 0, this.roomNameI18n = void 0, this.gameMode = void 0, this.gameSpeed = void 0, this.isBounty = void 0, this.hasTicket = void 0, this.maxPlayers = void 0, this.buyIn = void 0, this.registeredPlayer = void 0, this.roomStatusNumber = void 0, this.roomStatusI18nKey = void 0, this.prizePool = void 0, this.titleIconUrl = void 0, this.startingTime = void 0, this.timeStampLateReg = void 0, this.playerOnJoint = void 0, this.timerStop = void 0, this.duration = void 0, this.currency = void 0, this.displayCurrency = void 0, this.currencyRate = void 0, this.convertCurrency = void 0, this.showTicketStringOnBuyIn = void 0, this.isRegistered = void 0, this.isPaused = void 0, this.colorIndentifierSubType = 0, this.regFee = void 0, this.srvFee = void 0, this.isSelected = void 0, this.multiFlightId = void 0, this.multiFlightLevel = void 0, this.showingPosition = void 0, this.joinedPlayer = void 0, this.willPlayStartTime = void 0, this.prizePoolOverlay = void 0, this.userJoinState = void 0, this.playingPlayersCount = void 0, this.allowSignupDate = void 0, this.iconType = void 0, this.bannerType = void 0, this.cachedShorterMttName = void 0, this.pageType = void 0, this.hidePin = void 0, this.rebuyStatus = void 0, this.fontColor = void 0
        }
    });
    t("MttGameItemModel", class extends e {
        constructor(...t) {
            super(...t), this.data = void 0, this.tournamentData = void 0, this._onDataUpdated = void 0, this._onCurrencyUpdated = void 0
        }
        setData(t) {
            var i;
            this.data = t, null == (i = this._onDataUpdated) || i.call(this)
        }
        setConvertCurrency(t) {
            var i;
            this.data.convertCurrency = t, this.tournamentData.convertCurrency = t, null == (i = this._onCurrencyUpdated) || i.call(this)
        }
        setTournamentData(t) {
            this.tournamentData = t
        }
        registerHandlers(t, i) {
            this._onDataUpdated = t, this._onCurrencyUpdated = i
        }
        updatePrizePool(t) {
            this.data.prizePool = t
        }
    }), i._RF.pop()
}