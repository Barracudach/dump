import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as l from "./cc.js";
import * as o from "./MttDetailStatsPlayer.js";
import * as u from "./MttDetailWindowPlayersAndTablesController.js";
import * as s from "./MttDetailStatsHelper.js";
import * as b from "./MttItemHelper.js";
import * as c from "./DesignSystemRegularButton.js";
import * as d from "./LobbyHelper.js";
import * as T from "./MttDetailStatsTable.js";

function main() {
    var p, y, f, D, m, h, P, B, C, g;
    n._RF.push({}, "c7e37PPWlRPd4NQbTCf55BV", "MttDetailWindowPlayersAndTablesComp", void 0);
    const {
        ccclass: S,
        property: v
    } = l;
    t("default", (p = v(c), y = v(c), f = v(o), D = v(T), S((P = e((h = class extends i {
        constructor(...t) {
            super(...t), this.mvcView = null, a(this, "tabButtonPlayer", P, this), a(this, "tabButtonTable", B, this), a(this, "playerTab", C, this), a(this, "tableTab", g, this)
        }
        render(t) {
            r(this) && (d.setDesignBtnState(this.tabButtonPlayer.node, t.currentTab == u.PLAYERS), d.setDesignBtnState(this.tabButtonTable.node, t.currentTab == u.TABLES), t.currentTab == u.PLAYERS && t.forceRerenderTab ? (this.playerTab.node.active = !0, this.tableTab.node.active = !1, this.playerTab.render(s.getPlayerDetail(t.playersRenderData, t.tournamentDetail, t.tournamentDetail.currency, t.tournamentDetail.DisplayCurrency, t.tournament.CurrencyRate, !1, b.getCurBlindIndex(t.tournamentDetail)), t.tournamentDetail.TournamentId)) : t.currentTab == u.TABLES && t.forceRerenderTab && (this.playerTab.node.active = !1, this.tableTab.node.active = !0, this.tableTab.onPlayerCountUpdated = (e, a) => {
                const n = t.tournamentDetail.TablesDetail.find((t => t.TableId === e));
                n && (n.PlayersNum = a)
            }, this.tableTab.render({
                tableList: s.parseTableDetailList(t.tournamentDetail.TablesDetail),
                tournamentId: t.tournamentDetail.TournamentId,
                bigBlind: b.getCurBlindIndex(t.tournamentDetail)
            })))
        }
        onPlayerTabClicked() {
            var t;
            null == (t = this.mvcView) || null == t.onClickTab || t.onClickTab(u.PLAYERS)
        }
        onTableTabClicked() {
            var t;
            null == (t = this.mvcView) || null == t.onClickTab || t.onClickTab(u.TABLES)
        }
    }).prototype, "tabButtonPlayer", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(h.prototype, "tabButtonTable", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(h.prototype, "playerTab", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = e(h.prototype, "tableTab", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = h)) || m));
    n._RF.pop()
}