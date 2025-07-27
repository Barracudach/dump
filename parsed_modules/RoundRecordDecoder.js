import * as s from "./cc.js";
import * as o from "./Pb.js";
import * as r from "./CommonTools.js";

function main() {
    s._RF.push({}, "afb7fs5yVdFNK2q2R6Ag4Df", "RoundRecordDecoder", void 0);
    class d {
        constructor() {
            this.userId = 0, this.avatar = "", this.holeCards = null, this.boardCards = [], this.profit = 0, this.cardRank = 0, this.isDealer = !1
        }
    }
    e("RoundPlayerRecord", d);
    e("RoundRecordDecoder", class {
        static decodeHoldem(e) {
            let s = e.Players,
                a = e.dealer,
                t = {},
                l = [],
                c = {},
                n = e.ranks;
            cc_mtt.vv.ConsoleLog.log("Players: ", s);
            for (const d of e.Actions) {
                var i = r.instance.intFromBytes(d.slice(4, 6));
                if (cc_mtt.vv.ConsoleLog.log("Msg Id: ", i, " - ", o.holdem.MessageId[i]), i == o.holdem.MessageId.HoleCardsMsg) {
                    var u = o.holdem.HoleCardsMsg.decode(d.slice(6));
                    cc_mtt.vv.ConsoleLog.log("Hole Cards: ", JSON.stringify(u.cards), ", id=", u.userId), u.userId == cc_mtt.vv.DataManager.userId && (t[u.userId] = u.cards)
                } else if (i == o.holdem.MessageId.BoardCardsMsg) {
                    var g = o.holdem.BoardCardsMsg.decode(d.slice(6));
                    cc_mtt.vv.ConsoleLog.log("Board Cards: ", JSON.stringify(g.cards));
                    for (const e of g.cards) l.push(e)
                } else if (i == o.holdem.MessageId.PlayerActionMsg) {
                    var f = o.holdem.PlayerActionMsg.decode(d.slice(6));
                    f.action == o.holdem.Action.FOLD && (cc_mtt.vv.ConsoleLog.log("Player " + s[f.seatNum].userId + " fold."), n[s[f.seatNum].userId] = 0)
                } else if (i == o.holdem.MessageId.ShowdownMsg) {
                    var m = o.holdem.ShowdownMsg.decode(d.slice(6));
                    cc_mtt.vv.ConsoleLog.log("Showdown Players: ", JSON.stringify(m.players), m.players);
                    for (const e of m.players) void 0 === t[s[e.seatNum].userId] && (t[s[e.seatNum].userId] = e.holeCards), n[s[e.seatNum].userId] = e.rank
                } else if (i == o.holdem.MessageId.RoundResultMsg) {
                    var h = o.holdem.RoundResultMsg.decode(d.slice(6));
                    cc_mtt.vv.ConsoleLog.log("Player Profits: ", JSON.stringify(h.players), h.players);
                    for (const e of h.players) cc_mtt.vv.ConsoleLog.log("Profit Player - " + s[e.seatNum].userId + ":", "profit: ", e.profit), c[s[e.seatNum].userId] = e.profit
                }
            }
            let v = [];
            return Object.keys(s).forEach((e => {
                let o = new d,
                    r = s[e].userId;
                o.userId = r, o.avatar = s[e].avatar, o.isDealer = a == +e, o.holeCards = t[r], o.boardCards = l, o.profit = c[r] ? c[r] : 0, o.holeCards ? o.cardRank = n[r] : o.cardRank = o.profit > 0 ? -1 : 0, v.push(o)
            })), v
        }
    }), s._RF.pop()
}