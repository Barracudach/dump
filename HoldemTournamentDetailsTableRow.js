import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as r from "./FormatParser.js";
import * as i from "./CustomScrollViewItem.js";
import * as s from "./CommonTools.js";

function main() {
    var u, b, c, d, m, p, h, f;
    l._RF.push({}, "538a0fomMRCKbJMNgd1XOnm", "HoldemTournamentDetailsTableRow", void 0);
    const {
        ccclass: g,
        property: y
    } = n;
    t("default", (u = y(o), b = y(o), c = y(o), g((p = e((m = class extends i {
        constructor(...t) {
            super(...t), a(this, "tableNoLabel", p, this), a(this, "playerNoLabel", h, this), a(this, "tableStackLabel", f, this), this.tableId = 0
        }
        get tableNo() {
            return this.tableId % 1e4
        }
        start() {}
        setData(t) {
            super.setData(t), this.tableId = t.TableId, this.tableNoLabel.string = this.tableNo.toString(), this.playerNoLabel.string = t.PlayersNum.toString(), this.tableStackLabel.string = r.ThousandPointFormat(t.MinCoins) + "/" + r.ThousandPointFormat(t.MaxCoins), s.instance.updateRenderData(this.tableNoLabel)
        }
        onTableRankingButtonClicked() {
            let t = this.holdemRoom;
            t.tournamentRecord.tablePage.showTableRankingPage(), t.store.MttRealTimeRecord(!1, this.tableId)
        }
    }).prototype, "tableNoLabel", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = e(m.prototype, "playerNoLabel", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = e(m.prototype, "tableStackLabel", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = m)) || d));
    l._RF.pop()
}