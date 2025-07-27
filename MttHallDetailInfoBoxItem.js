import * as t from "./cc.js";
import * as a from "./cc.js";
import * as s from "./LabelAndValueItem.js";
import * as n from "./Enum.js";
import * as r from "./Enum.js";
import * as o from "./FormatParser.js";
import * as c from "./Translator.js";
import * as T from "./Pb.js";

function main() {
    var i;
    a._RF.push({}, "f3107q3DoZHlJGapbImV7W+", "MttHallDetailInfoBoxItem", void 0);
    const {
        ccclass: l,
        property: P
    } = t;
    e("MttHallDetailInfoBoxItem", l("MttHallDetailInfoBoxItem")(i = class extends s {
        setInfo(e, a, t) {
            super.setInfo(e, a, t);
            let s = a[e],
                i = "",
                l = (null == s ? void 0 : s.toString()) || "-",
                P = "";
            switch (t.currency) {
                case r[n.USD].code:
                    P = r[n.USD].symbol;
                    break;
                case r[n.CNY].code:
                    P = r[n.CNY].shortSymbol
            }
            t.status, T.commonProto.MTT_GAME_STATUS.NOT_STARTED;
            switch (e) {
                case "prizePool":
                    i = c("TOURNAMENT_DETAIL.PRIZE_POOL");
                    break;
                case "firstPlacePrize":
                    i = c("MTT_HALL.FIRST_PLACE");
                    break;
                case "nextPlacePrize":
                    i = c("MTT_HALL.NEXT_PRIZE");
                    break;
                case "playingPlayers":
                    i = c("MTT_HALL.PLAYERS_LEFT");
                    break;
                case "inTheMoney":
                    i = c("MTT_HALL.PLACES_PAID");
                    break;
                case "myRank":
                    i = c("MTT_HALL.MY_RANK");
                    break;
                case "guarantee":
                    i = c("PKWMTT.OVERVIEW.GUARANTEE");
                    break;
                case "overlay":
                    i = c("PKWMTT.OVERVIEW.OVERLAY");
                    break;
                case "entries":
                    i = c("MTT_HALL.TAB.HALL.TOURNAMENT_DETAIL_HEADER.ENTRIES");
                    break;
                case "minPlayers":
                    i = c("MTT_HALL.MIN_PLAYERS");
                    break;
                case "maxPlayers":
                    i = c("MTT_HALL.MAX_PLAYERS")
            }
            switch (e) {
                case "prizePool":
                case "firstPlacePrize":
                case "nextPlacePrize":
                    l = P + o.ThousandPointFormat(s);
                    break;
                case "overlay":
                    l = t.guarantee > 0 ? P + o.ThousandPointFormat(s || 0) : "-";
                    break;
                case "guarantee":
                    l = s > 0 ? P + o.ThousandPointFormat(s) : "-";
                    break;
                case "playingPlayers":
                    l = `${o.ThousandPointFormat(s)}/${o.ThousandPointFormat(t.entries)}`;
                    break;
                case "myRank":
                    l = s > 0 ? s.toString() : "-";
                    break;
                case "entries":
                case "minPlayers":
                case "maxPlayers":
                case "inTheMoney":
                    l = `${o.ThousandPointFormat(s)}`
            }
            this.setNameLabel(i), this.setValueLabel(l)
        }
    }) || i);
    a._RF.pop()
}