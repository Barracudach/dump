import * as e from "./cc.js";
import * as s from "./MVCModel.js";

function main() {
    e._RF.push({}, "f8497jR2ddHoqXTpG0V9TJs", "MttDetailStatsModel", void 0);
    t("default", class extends s {
        constructor(...t) {
            super(...t), this.playerInfos = void 0, this.tableInfos = void 0, this._gameStatus = void 0, this._tournamentMode = void 0, this.tournamentId = void 0, this.isAutoRefresh = void 0, this._onDataUpdated = void 0
        }
        registerHandlers(t) {
            this._onDataUpdated = t
        }
        setData(t, e, s, o) {
            var a;
            this.playerInfos = t, this.tableInfos = e, this.tournamentId = s, this.isAutoRefresh = o, null == (a = this._onDataUpdated) || a.call(this)
        }
        getRenderData() {
            return {
                playerInfos: this.playerInfos,
                tableInfos: this.tableInfos,
                tournamentId: this.tournamentId,
                isAutoRefresh: this.isAutoRefresh
            }
        }
    }), e._RF.pop()
}