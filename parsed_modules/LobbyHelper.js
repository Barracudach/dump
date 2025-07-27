import * as t from "./cc.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as c from "./Enum.js";
import * as s from "./Enum.js";
import * as i from "./Enum.js";
import * as o from "./Enum.js";
import * as l from "./Enum.js";
import * as u from "./LobbyTypes.js";
import * as _ from "./LobbyTools.js";
import * as m from "./RuleDiscription.js";
import * as y from "./cv.js";
import * as S from "./DesignSystemButtonBase.js";
import * as b from "./DesignSystemButtonBase.js";
import * as p from "./CurrencyValue.js";
import * as g from "./Holdem_Room_ts.js";
import * as d from "./GameMain.js";

function main() {
    r._RF.push({}, "69672WoEBhB3p0yJk/UI9Cp", "LobbyHelper", void 0);
    class f {
        static formatCurrencyString(e, t, a) {
            const n = o[t] && t != c.None ? `${o[t].symbol}` : "",
                r = _.numberSeparator(_.toFixedAsString(e, _.defaultRoundDecimal));
            return a ? `${n}${r}` : `${r}`
        }
        static exchangeToWalletCurrencyStr(e, t) {
            const a = _.defaultCurrency;
            return o[a].symbol + this.exchangeValueStr(t, a, e)
        }
        static exchangeValueStr(e, t, a, n) {
            const r = _.convertCurrency(e, t, a),
                o = _.toFixedAsString(r, _.defaultRoundDecimal);
            return n ? _.numberSeparator(o) : o
        }
        static formatToWalletCurrencyStr(e, t) {
            return e >= 1e3 ? _.formatC("%sK", this.exchangeToWalletCurrencyStr(e / 1e3, t)) : this.exchangeToWalletCurrencyStr(e, t)
        }
        static exchangeToWalletCurrency(e, t) {
            const a = _.defaultCurrency;
            return _.convertCurrency(t, a, e)
        }
        static getStakeStringInWalletCurrency(e) {
            let t = e.currency,
                a = [],
                n = "";
            if (e.gameMode == s.CreateGame_Mode_Normal) {
                const t = this.parseFloat(e.bigBlind),
                    n = this.parseFloat(e.smallBlind);
                a.push(n), a.push(t), e.hasStraddle && a.push(2 * t), e.gameId == i.Bet && (a = [this.parseFloat(e.buyInMin)])
            }
            if (n = a.map((e => f.formatToWalletCurrencyStr(e, t))).join(" / "), e.ante && e.gameId != i.Bet) {
                let r = f.exchangeToWalletCurrencyStr(.01 * e.ante, t);
                a.length > 0 && (r = " (" + r + ")"), n += r
            }
            return n
        }
        static getFormatedStakeString(e, t) {
            let a = e.stakes.filter((e => !!e)).map((e => f.formatCurrencyString(e, t, !0))).join("/");
            if (null != e.ante) {
                let n = f.formatCurrencyString(e.ante, t, !0);
                e.stakes.length > 0 && (n = " (" + n + ")"), a += n
            }
            return a
        }
        static getCashGroupName(e, t, a) {
            var n;
            return e && null != e && null != (n = e.stakes) && n.length ? t == c.CNY ? f.getFormatedStakeString(a, t) : f.getFormatedStakeString(e, t) : "OTHERS"
        }
        static parseFloat(e) {
            return parseFloat(_.numToFloatString(e))
        }
        static getStakeData(e) {
            let t = [];
            if (e.gameMode == s.CreateGame_Mode_Normal) {
                const a = _.clientGoldByServer(e.bigBlind),
                    n = _.clientGoldByServer(e.smallBlind);
                t.push(n), t.push(a), e.hasStraddle && t.push(2 * a), e.gameId == i.Bet && (t = [_.clientGoldByServer(e.buyInMin)])
            }
            let a = 0;
            return e.ante && e.gameId != i.Bet && (a = .01 * e.ante), {
                stakes: t,
                ante: a
            }
        }
        static getBuyInLevel(e, t) {
            const a = _.convertCurrency(t, c.USD, e);
            return a >= 400 ? u.big : a >= 40 ? u.medium : u.small
        }
        static getI18nKeyOfGameTypeNameByName(e) {
            switch (e.toLocaleLowerCase()) {
                case "all":
                    return "Lobby_Subfilter_All";
                case "mtt":
                    return "Game_Mode_MTT";
                case "nlhe":
                    return "MainScene_Scene_gameType_panel_button1_text";
                case "sd":
                case "shortDeck":
                case "short_deck":
                case "short deck":
                    return "MainScene_Scene_gameType_panel_button2_text";
                case "aof":
                    return "MainScene_Scene_gameType_panel_button3_text";
                case "splash":
                    return "MainScene_Scene_gameType_panel_button4_text";
                case "pace":
                    return "MainScene_Scene_gameType_panel_button5_text";
                case "jackfruit":
                    return "MainScene_Scene_gameType_panel_button7_text";
                case "plo":
                    return "MainScene_Scene_gameType_panel_button8_text";
                case "sng":
                case "global_spin":
                case "globalSpin":
                    return "MainScene_Scene_gameType_panel_button9_text";
                case "plo4":
                    return "Lobby_Subfilter_PLO4";
                case "plo5":
                    return "Lobby_Subfilter_PLO5";
                case "satellites":
                case "satellite":
                    return "Lobby_Subfilter_Satellties";
                case "private":
                    return "Lobby_Subfilter_Private";
                case "wptg":
                    return "Lobby_Subfilter_WPTG";
                case "wpt":
                    return "Lobby_Subfilter_WPT";
                case "festival":
                    return "Lobby_Subfilter_Festival";
                case "special":
                    return "Lobby_Subfilter_Special";
                case "live":
                    return "Lobby_Subfilter_Live";
                case "mymtt":
                case "mymtts":
                case "my_mtt":
                case "my_mtts":
                    return "Lobby_Subfilter_MyMTT";
                case "mygames":
                case "my_games":
                    return "MainScene_Scene_pokerPage_panel_mygame_button_text";
                case "wpt_daily_asia":
                    return "Lobby_Subfilter_WPT_Daily_Asia";
                case "daily_prime":
                    return "Lobby_Subfilter_Daily_Prime";
                case "bounty_rumble":
                    return "Lobby_Subfilter_Bounty_Rumble";
                case "one_shot":
                    return "Lobby_Subfilter_One_Shot";
                case "hyper_dash":
                    return "Lobby_Subfilter_Hyper_Dash";
                case "weekly_golden_bounty":
                    return "Lobby_Subfilter_Weekly_Golden";
                case "wpt_mystery_million":
                    return "Lobby_Subfilter_WPT_Mystery_Million";
                case "available_tickets":
                    return "Lobby_Subfilter_Available_Tickets";
                case "crazy_freeroll":
                    return "Lobby_Subfilter_Crazy_Freeroll";
                case "wpt_live":
                    return "Lobby_Subfilter_WPT_Live";
                case "tourney":
                    return "HOME.TOURNEY";
                case "flash":
                    return "HOME.FLASH";
                case "micro":
                    return "MainScene_Scene_pokerPage_panel_button0_text";
                case "low":
                    return "MainScene_Scene_pokerPage_panel_button1_text";
                case "mid":
                    return "MainScene_Scene_pokerPage_panel_button2_text";
                case "high":
                    return "MainScene_Scene_pokerPage_panel_button3_text";
                default:
                    return e
            }
        }
        static setDesignBtnState(e, n, r = !1) {
            if (!t(e, !0)) return;
            if (r) {
                let r = e.getComponent(a);
                t(r) && r.setIsCheckedWithoutNotify(n)
            }
            let o = e.getComponent(b);
            n ? (o.btnState = S.pressed, o.isChecked = !0) : (o.btnState = S.normal, o.isChecked = !1)
        }
        static checkCashGameIsZoom(e) {
            return y.roomManager.checkGameIsZoom(e)
        }
        static getGameType(e, t) {
            return t == y.Enum.CreateGameMode.CreateGame_Mode_Short ? y.roomManager.checkGameIsZoom(e) ? m.PACE : m.SHORT_DECK : y.roomManager.checkGameIsZoom(e) ? m.PACE : e == y.Enum.GameId.Plo ? m.PLO : e == y.Enum.GameId.Plo5 ? m.PLO5 : m.NLHE
        }
        static updateToolList() {
            return new Promise(((e, t) => {
                try {
                    cc_mtt.vv.DataManager.updateToolList((() => {
                        e()
                    }))
                } catch (e) {
                    t(e)
                }
            }))
        }
        static getAllStatusCashGames(e) {
            const a = {
                totalTables: 0,
                totalPlayers: 0,
                currencyTypes: [],
                tableMaxes: [],
                minStake: Number.MAX_VALUE,
                maxStake: Number.MIN_VALUE,
                hasBombPot: !1,
                hasSquid: !1,
                hasBigAnte: !1,
                hasPace: !1
            };
            if (t(e)) {
                const t = e.length;
                for (let n = 0; n < t; n++) {
                    const t = e[n];
                    y.appConfig.getWalletConfig().checkAndSetGameTableCurrency(t, !0), a.totalTables++, a.totalPlayers += t.player_count;
                    const r = t.currency;
                    if (Boolean(r) && Boolean(o[r])) {
                        const e = o[r].code;
                        a.currencyTypes.includes(e) || a.currencyTypes.push(e)
                    }
                    const s = t.player_count_max;
                    a.tableMaxes.includes(s) || a.tableMaxes.push(s);
                    t.big_blind;
                    const u = _.convertCurrency(r, c.USD, _.clientGoldByServer(t.buyin_min));
                    u < a.minStake && (a.minStake = u), u > a.maxStake && (a.maxStake = u);
                    const b = t.isCriticismField,
                        S = t.game_id === i.Squid,
                        p = f.getGameType(t.game_id, t.game_mode) == m.PACE,
                        g = t.room_name.startsWith(l);
                    b && (a.hasBombPot = b), S && (a.hasSquid = S), g && (a.hasBigAnte = g), p && (a.hasPace = p)
                }
            }
            return a.minStake === Number.MAX_VALUE && (a.minStake = 0), a.maxStake === Number.MIN_VALUE && (a.maxStake = 0), a.minStake = _.roundBuyInRange(a.minStake), a.maxStake = _.roundBuyInRange(a.maxStake), a.currencyTypes.sort(), a.tableMaxes.sort(), a
        }
        static getPaceGameName(e) {
            const t = e == y.Enum.CreateGameMode.CreateGame_Mode_Short ? "DataView_data_panel_dataInfo_panel_zoomShortGame_button" : "DataView_data_panel_dataInfo_panel_zoomGame_button";
            return y.tools.updateGameType(y.config.getStringData(t))
        }
        static showPanelFromRight(e, a, r = !1, o = null, c = !0) {
            if (t(e)) return y.appConfig.isLandscapeLayout ? (e.active = a, void(a && (null == o || o()))) : void y.action.showAction(e, a ? y.action.eMoveActionDir.EMAD_TO_LEFT : y.action.eMoveActionDir.EMAD_TO_RIGHT, a ? y.action.eMoveActionType.EMAT_FADE_IN : y.action.eMoveActionType.EMAT_FADE_OUT, r ? y.action.delay_type.INSTANT : y.action.delay_type.NORMAL, ((e, t) => {}), ((e, t) => {
                a && (null == o || o())
            }), 0, a, c, new n(0, 0), new n(y.config.WIDTH))
        }
        static setCurrencyValue(e, t, a, n, r, o) {
            let c = e.getComponent(p);
            if (c) {
                const e = !0;
                c.updateVal(t, a, e, n, r || o)
            } else e.string = t
        }
        static isHttpApisTokenReady() {
            return !!cc_mtt.vv.DataManager.token
        }
        static getLobbyTabShowAtBegin() {
            const e = _.getForceShowLobbyTab();
            let t = null;
            return e && (t = e), t || (t = _.getLastSelectedTabFromFile()), t
        }
        static sortArrayByDefinedOrder(e, t) {
            const a = new Map;
            return t.forEach(((e, t) => {
                a.set(e, t)
            })), e.sort(((e, t) => {
                const n = a.get(e),
                    r = a.get(t);
                return n >= 0 && r >= 0 ? n - r : n >= 0 ? -1 : r >= 0 ? 1 : 0
            }))
        }
        static getRoomId(e) {
            if (t(e)) {
                if (e instanceof g) return e.store.tournamentId;
                if (e instanceof d) return e.gameSceneInstance.room.firstId
            }
            return 0
        }
    }
    e("default", f), r._RF.pop()
}