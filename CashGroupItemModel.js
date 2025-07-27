import * as a from "./cc.js";
import * as e from "./LobbyTools.js";
import * as s from "./MVCModel.js";

function main() {
    a._RF.push({}, "ff8e4gaEZZBBqwVWiQMAOQn", "CashGroupItemModel", void 0);
    t("default", class extends e {
        constructor(...t) {
            super(...t), this._currency = s.USD, this._buyInMin = void 0, this._hasSquid = void 0, this._hasBigAnte = void 0, this._hasBombPot = void 0, this._hasPace = void 0, this._hasRedEnvelope = void 0, this._gameType = void 0, this._playerCountMax = void 0, this._playerCount = void 0, this._usdStakeData = void 0, this._cnyStakeData = void 0, this._groupName = "", this._onDataUpdated = void 0
        }
        get groupName() {
            return this._groupName
        }
        registerHandlers(t) {
            this._onDataUpdated = t
        }
        setData(t) {
            var a;
            this._buyInMin = t.buyIn, this._hasSquid = t.hasSquid, this._hasBigAnte = t.hasBigAnte, this._hasBombPot = t.hasBombPot, this._gameType = t.gameType, this._playerCountMax = t.playerCountMax, this._playerCount = t.playerCount, this._cnyStakeData = t.cnyStake, this._usdStakeData = t.usdStake, this._groupName = t.groupName, this._hasRedEnvelope = t.hasRedEnvelope, this._hasPace = t.hasPace, null == (a = this._onDataUpdated) || a.call(this)
        }
        getBaseDataForRendering() {
            return {
                currency: this._currency,
                buyIn: this._buyInMin,
                hasSquid: this._hasSquid,
                hasBigAnte: this._hasBigAnte,
                hasBombPot: this._hasBombPot,
                hasRedEnvelope: this._hasRedEnvelope,
                gameType: this._gameType,
                playerCountMax: this._playerCountMax,
                playerCount: this._playerCount,
                usdStake: this._usdStakeData,
                cnyStake: this._cnyStakeData,
                hasPace: this._hasPace
            }
        }
    }), a._RF.pop()
}