import * as t from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cv.js";
import * as o from "./ws_protocol.mjs_cjs=&original=.js";
import * as s from "./ws_protocol.mjs_cjs=&original=.js";
import * as l from "./Enum.js";
import * as c from "./Tools.js";
import * as u from "./RuleDiscription.js";
import * as g from "./MultipleRoomManager.js";
import * as d from "./FormatParser.js";
import * as m from "./bignumber.mjs.js";
import * as S from "./LobbyHelper.js";
import * as T from "./Pb.js";
import * as _ from "./MultipleGame.js";
import * as h from "./mttconfig.js";
import * as p from "./FullscreenController.js";
import * as f from "./MultipleMttDetailsWindow.js";
import * as E from "./TweenControl.js";

function main() {
    t._RF.push({}, "7b6aaaGl/JEXravDIPqfWJ0", "LobbyTools", void 0);
    e("CashGameSnapShot", E.pb.ClubGameSnapshot);
    class L {
        constructor() {
            this.convertCurrency = (e, t, o, n) => r.currencyManager.convert(e, t, o, n), this.numToFloatString = e => r.StringTools.numToFloatString(e), this.toFixedAsString = (e, t) => r.StringTools.toFixedAsString(e, t), this.formatC = (e, ...t) => r.StringTools.formatC(e, t), this.numberSeparator = e => l.numberSeparator(e), this.ThousandPointFormat = (e, t = 2, o = d.ROUND_HALF_UP) => g.ThousandPointFormat(e, t, o), this.getI18nString = (e, t = !1, o = "", n = !1) => r.config.getStringData(e, t, o, n), this.joinRoom = (e, t) => r.roomManager.joinRoom(e, t), this.isJP = () => r.dataHandler.getUserData().isJP, this.LAST_SELECTED_TAB_KEY = "LOBBY_LAST_SELECTED_TAB", this.LAST_SELECTED_SUBFILTER_KEY = "LOBBY_LAST_SELECTED_SUBFILTER", this.registerMessage = (e, t, o) => r.MessageCenter.register(e, t, o), this.unregisterMessage = (e, t) => r.MessageCenter.unregister(e, t), this.emitMessage = (e, t = null) => r.MessageCenter.send(e, t), this.changeLanguageMsg = () => r.config.CHANGE_LANGUAGE, this.getUserData = () => r.dataHandler.getUserData(), this.getUserTotalAmount = () => r.StringTools.clientGoldByServer(r.dataHandler.getUserData().total_amount), this.checkDoubleClickJoinRoom = () => {
                const e = o.getTotalTime();
                if (e - r.roomManager.lastClickJoiningRoomTime <= 500) return !0;
                r.roomManager.lastClickJoiningRoomTime = e
            }, this.isAbleToJoinRoom = e => {
                if (this.checkDoubleClickJoinRoom()) return !1;
                if (!r.appConfig.getGeneralConfig().multiWindowEnabled) {
                    if (u.instance.getCashRoomById(null == e ? void 0 : e.gameId, null == e ? void 0 : e.roomId)) return !0
                }
                return !r.roomManager.checkAndShowLimitMultiGamesPopup(null == e ? void 0 : e.gameId)
            }, this.checkAndJoinRoom = (e, t) => {
                const o = r.roomManager.rooms.find((t => t.joinedGame && t.getCurrentGameID() == e.gameId && (t.getCurrentRoomID() == e.roomId || t.firstId == e.roomId)));
                if (o) {
                    if (r.appConfig.getGeneralConfig().multiWindowEnabled) return void o.checkAndFocusGameWindow();
                    {
                        const e = u.instance.getCashRoom(o);
                        if (e) return r.SwitchLoadingView.show(r.config.getStringData("SwitchLoadingView_des_0"), !0), o.openMobileGameScene() && o.checkShowLoadingByGameID(), void(u.instance.selectedRoomInfo = e)
                    }
                }
                if (this.isAbleToJoinRoom(e)) {
                    if (r.appConfig.isWebApp && r.dataHandler.getUserData().isTouristUser) {
                        if (m.getGameType(e.gameId, e.gameMode) == c.PACE) return void r.dataHandler.getUserData().showWebAppTouristPopup()
                    }
                    if (r.appConfig.isWebApp) {
                        if (!h.getInstance().isAbleToJoinRoom()) return;
                        r.SwitchLoadingView.show(r.config.getStringData("SwitchLoadingView_des_0"), !0)
                    }
                    this.joinRoom(e, t)
                }
            }, this.numberToString = e => r.StringTools.numberToString(e), this._zoomActionSpeed = .15, this._moveIn_Left_ActionSpeed = .35, this._moveIn_Left_PosXGap = 200, this._isMTTJPcurrencySwitcherOn = !1
        }
        static getInstance() {
            return L.g_instance || (L.g_instance = new L), L.g_instance
        }
        get defaultCurrency() {
            return r.appConfig.getWalletConfig().defaultCurrency.type
        }
        get defaultRoundDecimal() {
            return r.currencyManager.defaultRoundDecimal
        }
        get redEnvelopeEnabled() {
            return r.appConfig.getGameConfig().redEnvelopeEnabled
        }
        get showAvgPot() {
            return r.appConfig.getLobbyConfig().showAvgPotInLobbyV2
        }
        clientGoldByServer(e) {
            return r.StringTools.clientGoldByServer(e)
        }
        serverGoldByClient(e) {
            return r.StringTools.serverGoldByClient(e)
        }
        arrayEquals(e, t) {
            return e.length === t.length && e.every(((e, o) => e === t[o]))
        }
        saveStringToLocalStorage(e, t) {
            r.tools.SaveStringByCCFile(e, t)
        }
        getStringFromLocalStorage(e) {
            return r.tools.GetStringByCCFile(e)
        }
        saveOpenSeatsOnlyToLocalStorage(e) {
            this.saveStringToLocalStorage("FindView_noSeeFull", e ? "1" : "0")
        }
        getOpenSeatsOnlyFromLocalStorage() {
            return "1" == this.getStringFromLocalStorage("FindView_noSeeFull")
        }
        saveLastSelectedTabToFile(e) {
            this.saveStringToLocalStorage(this.LAST_SELECTED_TAB_KEY, e)
        }
        getLastSelectedTabFromFile() {
            return this.getStringFromLocalStorage(this.LAST_SELECTED_TAB_KEY)
        }
        saveTabSubfilterSelected(e, t) {
            const o = this.LAST_SELECTED_SUBFILTER_KEY + e;
            this.saveStringToLocalStorage(o, t)
        }
        getTabSubfilterSelected(e) {
            const t = this.LAST_SELECTED_SUBFILTER_KEY + e;
            return this.getStringFromLocalStorage(t)
        }
        getForceShowLobbyTab() {
            switch (A.getUserData().forceStartingGameTypeInHall) {
                case s.DZPK:
                case s.AOF:
                case s.BET:
                    return "nlhe";
                case s.DZPK_SHORT:
                    return "short_deck";
                case s.MTT:
                    return "mtt";
                case s.PLO:
                    return "plo";
                case s.GLOBAL_SPIN:
                    return "sng";
                case s.ZOOM_TEXAS:
                    return "flash";
                default:
                    return null
            }
        }
        setSelectedSngGameInfo(e) {
            if (null !== u.instance && void 0 !== u.instance) {
                const t = new S.commonProto.SngTournament;
                t.Detail = new S.modelProto.SngTournament, t.Detail.Id = e, t.Detail.LevelTime = 0, t.Detail.GameMode = S.commonProto.MTT_GAME_MODE.NLH;
                const o = {
                    type: T.HOLDEM,
                    data: t,
                    gameMode: S.commonProto.MTT_GAME_MODE.NLH,
                    gameListId: _.GAME_LEVEL_LIST_ID.SNG,
                    index: 0,
                    isWatching: !1
                };
                u.instance.selectedRoomInfo = o
            }
        }
        playSound(e) {
            r.AudioMgr.playButtonSound(e)
        }
        playSoundClick() {
            this.playSound("button_click.mp3")
        }
        playSoundBack() {
            this.playSound("back_button.mp3")
        }
        playSoundTab() {
            this.playSound("tab.mp3")
        }
        playSoundClose() {
            this.playSound("close.mp3")
        }
        clientCurrencyFromServerCurrency(e) {
            return r.appConfig.getWalletConfig().getTempCurrency(e).type
        }
        openMttDetailWindowByTourId(e) {
            p.initMttDetailsWindowByTourId(e)
        }
        openMttDetailWindowByTourData(e, t) {
            p.initMttDetailsWindowByTourData(e, t)
        }
        zoomIn(e, t) {
            n(e) && n(t) && (f.fadeIn(e, this._zoomActionSpeed), f.scaleTo(t, this._zoomActionSpeed, new i(i.ONE), a.backOut))
        }
        zoomOut(e, t, o) {
            n(e) && n(t) ? (f.fadeOut(e, this._zoomActionSpeed), f.scaleTo(t, this._zoomActionSpeed, new i(i.ZERO), a.backIn, (() => {
                o && o()
            }))) : o && o()
        }
        moveIn_Left(e, t, o) {
            n(e) && n(t) && (f.fadeIn(e, this._moveIn_Left_ActionSpeed), t.setPosition(new i(o.x - this._moveIn_Left_PosXGap, o.y, o.z)), f.moveTo(t, this._moveIn_Left_ActionSpeed, o, a.backOut))
        }
        moveOut_Left(e, t, o) {
            if (n(e) && n(t)) {
                f.fadeOut(e, this._moveIn_Left_ActionSpeed);
                const n = t.getPosition(),
                    r = new i(n.x - this._moveIn_Left_PosXGap, n.y, n.z);
                f.moveTo(t, this._moveIn_Left_ActionSpeed, r, a.backIn, 0, (() => {
                    o && o()
                }))
            } else o && o()
        }
        get isMTTJPcurrencySwitcherOn() {
            return this._isMTTJPcurrencySwitcherOn
        }
        set isMTTJPcurrencySwitcherOn(e) {
            this._isMTTJPcurrencySwitcherOn = e
        }
        isLandscapeLayout() {
            return r.appConfig.isLandscapeLayout
        }
        getSpaceBetweenNumberAndText() {
            return r.config.getCurrentLanguage() == r.Enum.LANGUAGE_TYPE.zh_CN || r.config.getCurrentLanguage() == r.Enum.LANGUAGE_TYPE.zh_TW || r.config.getCurrentLanguage() == r.Enum.LANGUAGE_TYPE.ja_JP || r.config.getCurrentLanguage() == r.Enum.LANGUAGE_TYPE.ko_KR ? "" : " "
        }
        roundBuyInRange(e) {
            return e < 1 ? Math.round(10 * e) / 10 : e < 10 ? Math.round(e) : e < 100 ? 5 * Math.round(e / 5) : e < 1e3 ? 10 * Math.round(e / 10) : e < 1e4 ? 100 * Math.round(e / 100) : e < 1e5 ? 500 * Math.round(e / 500) : 1e3 * Math.round(e / 1e3)
        }
    }
    L.g_instance = null;
    const A = e("LobbyTools", L.getInstance());
    t._RF.pop()
}