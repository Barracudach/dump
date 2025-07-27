import * as e from "./cc.js";
import * as t from "./LobbyHelper.js";
import * as r from "./LobbyTools.js";
import * as n from "./RuleDiscription.js";
import * as u from "./Enum.js";
import * as o from "./Enum.js";
import * as c from "./Enum.js";

function main() {
    e._RF.push({}, "a42d8v7UrRHj6cdcOl8wNsN", "CashGameItemHelper", void 0);
    class i {
        static getRenderData(a) {
            let e = a.roomName;
            const r = t.getGameType(a.gameId, a.gameMode);
            return r == n.PACE && (e = t.getPaceGameName(a.gameMode)), {
                gameType: r,
                roomName: e,
                playerCount: a.playerCount,
                playerCountMax: a.playerCountMax,
                tableCount: a.tableCount,
                hasBombPot: a.hasBombPot,
                hasSquid: a.hasSquid,
                hasBigAnte: a.roomName.startsWith(o),
                buyInLevel: t.getBuyInLevel(a.currencyData.buyInMin, a.currencyData.currency),
                vipAvatarPath: a.vipAvatarPath,
                vipPlatform: a.vipPlatform,
                formatedCurrencyData: i.getCurrencyData(a),
                hasRedEnvelope: a.hasRedEnvelope
            }
        }
        static getRenderNonGroupData(a) {
            return {
                ...i.getRenderData(a),
                gameMode: a.gameMode,
                gameId: a.gameId
            }
        }
        static getDisplayRoomName(a, e, r) {
            return t.getGameType(e, r) == n.PACE ? t.getPaceGameName(r) : a
        }
        static getCurrencyData(a) {
            const e = a.currencyData;
            return {
                currency: e.currency,
                displayInUSD: a.displayInUSD,
                buyInStr: r.numToFloatString(e.buyInMin),
                avgPotStr: r.numToFloatString(a.avgPot),
                stakeData: t.getStakeData(e)
            }
        }
        static convertCurrency(a, e) {
            return e.displayInUSD && (e.currencyData.buyInMin = r.convertCurrency(a, u.USD, e.currencyData.buyInMin), e.currencyData.smallBlind = r.convertCurrency(a, u.USD, e.currencyData.smallBlind), e.currencyData.bigBlind = r.convertCurrency(a, u.USD, e.currencyData.bigBlind), e.currencyData.ante = r.convertCurrency(a, u.USD, e.currencyData.ante), e.avgPot = r.convertCurrency(a, u.USD, e.avgPot)), e
        }
        static parseFloat(a) {
            return parseFloat(r.numToFloatString(a))
        }
        static joinRoom(a, e) {
            r.checkAndJoinRoom(a, e)
        }
        static parseCashGameSnapshot(a) {
            let e, t = u.None;
            a && a.currency && (t = a.currency);
            let r = -1;
            return a.mvp_data && a.mvp_data.uid > 0 && (e = a.mvp_data.thumb, r = a.mvp_data.plat), {
                gameMode: a.game_mode,
                gameId: a.game_id,
                roomName: a.room_name,
                playerCount: a.player_count,
                playerCountMax: a.player_count_max,
                tableCount: a.tablesCount,
                currency: t,
                smallBlind: a.small_blind,
                bigBlind: a.big_blind,
                ante: a.ante,
                buyInMin: a.buyin_min,
                hasStraddle: a.straddle,
                hasBombPot: 1 == a.isCriticismField,
                hasSquid: a.game_id == c.Squid,
                hasBigAnte: a.room_name.startsWith(o),
                avgPot: a.averagePotAmount,
                vipThumbPath: e,
                vipPlatform: r,
                antiSimulator: a.anti_simulator,
                antiSimulatorIgnoreCond: a.anti_simulator_ignore_cond,
                roomId: a.room_id,
                clubId: a.club_id,
                requirePassword: a.join_password.length > 0,
                hasRedEnvelope: a.red_envelope_switch
            }
        }
    }
    a("default", i), e._RF.pop()
}