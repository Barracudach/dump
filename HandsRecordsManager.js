import * as t from "./cc.js";
import * as n from "./HandsRecord.js";
import * as o from "./RecordType.js";
import * as r from "./commonProto.mjs_cjs=&original=.js";
import * as a from "./httpApis.js";
import * as s from "./cv.js";
import * as i from "./FormatParser.js";

function main() {
    t._RF.push({}, "61e6fUy4LpNPYlUFA4c7tCf", "HandsRecordsManager", void 0);
    class c {
        constructor() {
            this._recordMap = void 0, this._recordMap = new Map, a.MessageCenter.register("on_replay_forceshow", this._onMsgForceShow.bind(this), this)
        }
        static getInstance() {
            return this._instance || (this._instance = new c), this._instance
        }
        setRecord(e, t) {
            const r = t instanceof i.commonProto.Holdem_Record ? o.Mtt : o.Cash,
                a = new n(r, t);
            this._recordMap.set(e, a)
        }
        getRecord(e, t, s = 0) {
            return this._recordMap.has(e) ? Promise.resolve(this._recordMap.get(e)) : new Promise((i => {
                switch (t) {
                    case o.Mtt:
                        r.requestHoldemOneRoundData(e, (t => {
                            if (t) {
                                const r = new n(o.Mtt, t);
                                this._recordMap.set(e, r), i(r)
                            } else i(void 0)
                        }));
                        break;
                    case o.Cash:
                        const t = a.dataHandler.getUserData().getUserIdByGameID(s);
                        let c = a.dataHandler.getUserData().getUserTokenByGameID(s);
                        a.dataNet.RequestHandRecord(t, e, s, c, (t => {
                            if (t) {
                                const r = new n(o.Cash, t);
                                this._recordMap.set(e, r), i(r)
                            } else i(void 0)
                        }));
                        break;
                    default:
                        i(void 0)
                }
            }))
        }
        hasRecord(e) {
            return this._recordMap.has(e)
        }
        formatMoneyText(e, t, n, r) {
            const i = t.isShortDeck;
            let c = i ? t.ante : t.bigBlind,
                l = "";
            var d;
            e == o.Cash ? (c = a.StringTools.toFixed(c, a.currencyManager.defaultRoundDecimal, a.StringTools.RoundingMode.ROUND_FLOOR), l = s.getDataPointValueWithCurrency(a.StringTools.clientGoldByServer(a.Number(r)), a.StringTools.clientGoldByServer(c), n, i, null == (d = t.currency) ? void 0 : d.type, a.appConfig.getGameConfig().useShortCurrencySymbolCashGame)) : l = s.getDataPointValue(r, c, n, i);
            return l
        }
        formatMoneyTextWithData(e, t) {
            return this.formatMoneyText(e.recordType, e.dataPointInfo, e.coinMode, t)
        }
        _onMsgForceShow(e) {
            var t, n, o, r;
            const s = this._recordMap.get(e.gameUUID),
                i = e.msg;
            if (!s || !i || (null == (t = s.customData) ? void 0 : t.roomId) !== e.msg.roomid) return;
            let c = a.dataHandler.getUserData().getUserIdByGameID(null == (n = s.customData) ? void 0 : n.cashGameId);
            i.playerid === c && (null == (o = s.customData) || o.players.forEach((e => {
                const t = i.show_seats.find((t => {
                    var n, o;
                    return (null == t || null == (n = t.uid) ? void 0 : n.toString()) === (null == e || null == (o = e.uid) ? void 0 : o.toString())
                }));
                t && (e.cards = (null == t ? void 0 : t.cards) || [])
            })), s.customData.forcedShowByRevealHand = !0, null == (r = s.customDetailData) || r.neReplayerBetRounds.forEach((e => {
                var t;
                null == e || null == (t = e.newReplayerActions) || t.forEach((e => {
                    var t;
                    const n = null == (t = i.show_seats) ? void 0 : t.find((t => {
                        var n, o;
                        return (null == t || null == (n = t.uid) ? void 0 : n.toString()) === (null == (o = e.player) || null == (o = o.uid) ? void 0 : o.toString())
                    }));
                    var o;
                    n && e && null != e && e.player && (e.player.cards = (null == n || null == (o = n.cards) ? void 0 : o.map((e => ({
                        number: (null == e ? void 0 : e.number) ?? -1,
                        suit: (null == e ? void 0 : e.suit) ?? -1
                    })))) || [])
                }))
            })), a.MessageCenter.send("onShownCardsByRevealHand", s))
        }
    }
    e("default", c), c._instance = null, t._RF.pop()
}