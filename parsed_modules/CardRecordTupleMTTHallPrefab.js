import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as n from "./Pb.js";
import * as l from "./Translator.js";
import * as i from "./CardRecordTuplePrefab.js";
import * as c from "./CommonTools.js";

function main() {
    var u, f, h, m;
    o._RF.push({}, "b99e44tfMhFfo+V9x6S8IQE", "CardRecordTupleMTTHallPrefab", void 0);
    const {
        ccclass: p,
        property: I
    } = a;
    e("CardRecordTupleMTTHallPrefab", (u = I(r), p((m = s((h = class extends i {
        constructor(...e) {
            super(...e), t(this, "handIndexLabel", m, this), this._playerCount = 0, this._roomName = "", this._gameMode = 2, this._category = void 0, this._roomId = void 0, this._tournamentId = void 0
        }
        onLoad() {}
        setInfo(e, s, t, o = -1, r = 0, a = "", d = 0, n = 0) {
            this.setHandIndex(o), this._playerCount = r, this._roomName = a, this._gameMode = t, this._category = d, this._roomId = e.GameRoundData.levelId, this.myUserId = n, super.setInfo(e, s, t)
        }
        parseMsgHoldem(e) {
            let s = e.Players,
                t = [],
                o = [],
                r = 0,
                a = [];
            for (const d of e.Actions) {
                let e = c.instance.intFromBytes(d.slice(4, 6));
                if (e == n.holdem.MessageId.HoleCardsMsg) {
                    let e = n.holdem.HoleCardsMsg.decode(d.slice(6));
                    e.userId == this.myUserId && (t = Array.from(e.cards))
                } else if (e == n.holdem.MessageId.BoardCardsMsg) {
                    let e = n.holdem.BoardCardsMsg.decode(d.slice(6));
                    for (const s of e.cards) o.push(s)
                } else if (e == n.holdem.MessageId.RoundResultMsg) {
                    let e = n.holdem.RoundResultMsg.decode(d.slice(6));
                    for (const t of e.players) s[t.seatNum] && s[t.seatNum].userId == this.myUserId && (r = t.profit, a = s[t.seatNum].guessCards)
                }
            }
            return [t, o, r, e.ranks[this.myUserId.toString()], a]
        }
        setHandIndex(e) {
            e >= 0 && this.handIndexLabel && (this.handIndexLabel.string = d.formatStr(l("PLAY_RECORD.HAND_INDEX"), e.toString()))
        }
    }).prototype, "handIndexLabel", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = h)) || f));
    o._RF.pop()
}