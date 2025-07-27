import * as i from "./cc.js";
import * as a from "./MVCModel.js";

function main() {
    i._RF.push({}, "0ce06iqALNDJ4zj8mdHjevW", "CashGameItemModel", void 0);
    t("default", class extends a {
        constructor(...t) {
            super(...t), this._gameMode = void 0, this._gameId = void 0, this._roomName = void 0, this._playerCount = void 0, this._playerCountMax = void 0, this._tableCount = 0, this._currency = void 0, this._displayInUSD = !1, this._smallBlind = void 0, this._bigBlind = void 0, this._ante = void 0, this._buyInMin = void 0, this._hasStraddle = void 0, this._hasBombPot = void 0, this._hasSquid = void 0, this._hasBigAnte = void 0, this._avgPot = void 0, this._vipThumbPath = void 0, this._vipPlatform = void 0, this._requirePassword = void 0, this._antiSimulator = void 0, this._antiSimulatorIgnoreCond = void 0, this._roomId = void 0, this._clubId = void 0, this._hasRedEnvelope = !1, this._onDataUpdated = void 0, this._onDisplayCurrencyChanged = void 0
        }
        get roomName() {
            return this._roomName
        }
        get gameId() {
            return this._gameId
        }
        get gameMode() {
            return this._gameMode
        }
        registerHandlers(t, i) {
            this._onDataUpdated = t, this._onDisplayCurrencyChanged = i
        }
        setData(t, i) {
            var a;
            this._gameMode = t.gameMode, this._gameId = t.gameId, this._roomName = t.roomName, this._playerCount = t.playerCount, this._playerCountMax = t.playerCountMax, this._tableCount = t.tableCount, this._currency = t.currency, this._displayInUSD = i, this._smallBlind = t.smallBlind, this._bigBlind = t.bigBlind, this._ante = t.ante, this._buyInMin = t.buyInMin, this._hasStraddle = t.hasStraddle, this._hasBombPot = t.hasBombPot, this._hasSquid = t.hasSquid, this._hasBigAnte = t.hasBigAnte, this._avgPot = t.avgPot, this._vipThumbPath = t.vipThumbPath, this._vipPlatform = t.vipPlatform, this._antiSimulator = t.antiSimulator, this._antiSimulatorIgnoreCond = t.antiSimulatorIgnoreCond, this._roomId = t.roomId, this._clubId = t.clubId, this._requirePassword = t.requirePassword, this._hasRedEnvelope = t.hasRedEnvelope, null == (a = this._onDataUpdated) || a.call(this)
        }
        setDisplayCurrency(t) {
            var i;
            this._displayInUSD !== t && (this._displayInUSD = t, null == (i = this._onDisplayCurrencyChanged) || i.call(this))
        }
        getBaseDataForRendering() {
            return {
                gameId: this._gameId,
                gameMode: this._gameMode,
                displayInUSD: this._displayInUSD,
                roomName: this._roomName,
                playerCount: this._playerCount,
                playerCountMax: this._playerCountMax,
                tableCount: this._tableCount,
                currencyData: this.currencyData,
                hasBombPot: this._hasBombPot,
                hasSquid: this._hasSquid,
                hasBigAnte: this._hasBigAnte,
                avgPot: this._avgPot,
                vipAvatarPath: this._vipThumbPath,
                vipPlatform: this._vipPlatform,
                hasRedEnvelope: this._hasRedEnvelope
            }
        }
        get currencyData() {
            return {
                gameMode: this._gameMode,
                gameId: this._gameId,
                bigBlind: this._bigBlind,
                smallBlind: this._smallBlind,
                ante: this._ante,
                buyInMin: this._buyInMin,
                hasStraddle: this._hasStraddle,
                currency: this._currency
            }
        }
        getDataForJoiningRoom() {
            return {
                antiSimulator: this._antiSimulator,
                antiSimulatorIgnoreCond: this._antiSimulatorIgnoreCond,
                gameId: this._gameId,
                roomId: this._roomId,
                clubId: this._clubId,
                requirePassword: this._requirePassword,
                gameMode: this._gameMode
            }
        }
    }), i._RF.pop()
}