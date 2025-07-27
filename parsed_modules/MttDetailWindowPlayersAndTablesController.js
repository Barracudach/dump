import * as t from "./cc.js";
import * as i from "./MttDetailWindowPlayersAndTablesView.js";
import * as s from "./MVCController.js";
import * as a from "./MVCModel.js";
import * as n from "./LobbyTools.js";
import * as o from "./cv.js";

function main() {
    t._RF.push({}, "fe89b4YSyNPHr9R4MCFC+72", "MttDetailWindowPlayersAndTablesController", void 0);
    let l = e("MttDetailWindowPlayersAndTablesTab", function(e) {
        return e[e.PLAYERS = 0] = "PLAYERS", e[e.TABLES = 1] = "TABLES", e
    }({}));
    class r extends a {
        constructor(...e) {
            super(...e), this.tournament = void 0, this.tournamentDetail = void 0, this.currentTab = void 0, this.playersRenderData = void 0, this.forceRerenderTab = void 0
        }
    }
    e("MttDetailWindowPlayersAndTablesModel", r);
    e("MttDetailWindowPlayersAndTablesController", class extends s {
        constructor(e) {
            super(i, r, e), this._lastTimeUpdatePlayerList = 0, this._updateDataIntervalPlayerList = 5
        }
        onInitializeBegin(e) {
            this.model.currentTab = l.PLAYERS, this.model.playersRenderData = [], this.view.onClickTab = this.onTabClicked.bind(this)
        }
        onInitializeEnded(e) {
            n.registerMessage(o.Enum.MessageCenterAction.onUpdateMttRecordList, this.updateMttRealTimeRecordRes.bind(this), this)
        }
        destroy() {
            n.unregisterMessage(o.Enum.MessageCenterAction.onUpdateMttRecordList, this)
        }
        onTabClicked(e) {
            const t = this.model.currentTab !== e;
            this.model.currentTab = e, this.model.forceRerenderTab = t, this.view.updateView(this.model)
        }
        loadByDatas(e, t) {
            this.model.tournament = e, this.model.tournamentDetail = t, cc_mtt.vv.DataManager.getNow().getTime() - this._lastTimeUpdatePlayerList >= 1e3 * this._updateDataIntervalPlayerList && (this.model.playersRenderData = t.PlayersDetail.map((e => Object.assign(e)))), this.model.tournament && this.model.tournamentDetail && (this.model.forceRerenderTab = !0, this.view.updateView(this.model))
        }
        updateMttRealTimeRecordRes(e) {
            var t;
            e.mttId == (null == (t = this.model) || null == (t = t.tournamentDetail) ? void 0 : t.TournamentId) && (this.model.playersRenderData.forEach((t => {
                const i = e.players.find((e => e.userId == t.UserId));
                if (i) t.Wins = i.wins, t.Bounty = i.bounty, t.Value = i.value, t.Coins = i.leftcoin, t.UserId = i.userId, null != i.joinStatus && null != i.joinStatus && i.leftcoin > 0 && (t.JoinStatus = i.joinStatus), t.Rank = i.rank, t.Index = i.rank, t.Bullet = i.bullet;
                else {
                    e.visitorplayers.some((e => e.userId == t.UserId)) && (t.Coins = 0, t.JoinStatus = -Math.abs(t.JoinStatus ?? 1))
                }
            })), this.model.forceRerenderTab = !0, this.view.updateView(this.model), this._lastTimeUpdatePlayerList = cc_mtt.vv.DataManager.getNow().getTime())
        }
    }), t._RF.pop()
}