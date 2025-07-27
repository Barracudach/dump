import * as t from "./cc.js";
import * as r from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as i from "./worldWebsocket.js";
import * as s from "./GPSController.js";
import * as c from "./mttconfig.js";
import * as l from "./mttconfig.js";
import * as d from "./FormatParser.js";
import * as u from "./Pb.js";
import * as g from "./MTTConnector.js";
import * as m from "./cv.js";

function main() {
    var T, f;
    t._RF.push({}, "79f99PC28JHjI1tkbGDUh7f", "DataManager", void 0);
    const {
        ccclass: _
    } = a;
    e("DataManager", _(((f = class e {
        static get worldNetwork() {
            return i.getInstance()
        }
        static getStoredLoginData() {
            let e = g.instance.getStorage(l.key_loginData);
            if (e) {
                let t = e,
                    a = [],
                    o = 0;
                for (; void 0 !== t[o];) a.push(t[o]), o++;
                return u.commonProto.User_Login_Response.decode(new Uint8Array(a))
            }
            return null
        }
        static getStoredMttTournament() {
            let e = g.instance.getStorage(l.key_mttGameLevelList);
            if (e) {
                let t = e,
                    a = [],
                    o = 0;
                for (; void 0 !== t[o];) a.push(t[o]), o++;
                return u.commonProto.Game_Level_List.decode(new Uint8Array(a))
            }
        }
        static updateStoredJoinedTournaments() {
            let t = e.getStoredLoginData();
            t && (t.JoinedTournaments = e.JoinedTournaments, g.instance.setStorage(l.key_loginData, u.commonProto.User_Login_Response.encode(t).finish()))
        }
        static get hasArchivedMttTournament() {
            let t = e.getStoredLoginData();
            return t && (cc_mtt.vv.DataManager.JoinedTournaments = t.JoinedTournaments, cc_mtt.vv.ConsoleLog.log("DataManager.JoinedTournaments get", cc_mtt.vv.DataManager.JoinedTournaments)), cc_mtt.vv.ConsoleLog.log("DataManager hasArchivedMttTournament", o(e.GAME_LEVEL_LIST), o(e.GAME_LEVEL_LIST.MttTournaments), e.GAME_LEVEL_LIST.MttTournaments.length > 0), o(e.GAME_LEVEL_LIST) && o(e.GAME_LEVEL_LIST.MttTournaments) && e.GAME_LEVEL_LIST.MttTournaments.length > 0
        }
        static get GAME_LEVEL_LIST() {
            return e._GAME_LEVEL_LIST || (e._GAME_LEVEL_LIST = new u.commonProto.Game_Level_List), e._GAME_LEVEL_LIST
        }
        static set GAME_LEVEL_LIST(t) {
            e._GAME_LEVEL_LIST = t
        }
        static set userData(e) {
            e ? (this.needGoldCheck ? e.Gold && (e.Gold = d.DisplayGold(Math.max(0, e.Gold))) : e.Gold = 9999999, this._userData = e) : this._userData = e
        }
        static get userData() {
            return this._userData
        }
        static get userId() {
            return e.isReplay && e.replayUserId ? e.replayUserId : e.userData ? e.userData.Id : 0
        }
        static get listCoinModeTableSetMtt() {
            return e._listCoinModeTableSetMtt
        }
        static getDataPointInTableMtt(t) {
            return e._listCoinModeTableSetMtt[t] || 0
        }
        static setDataPointInTableMtt(t, a) {
            e._listCoinModeTableSetMtt[t] = a
        }
        static getSignUpToolsByRegFee(t) {
            return e.backPackTool.filter((e => e.Config.ForCategory.indexOf(u.commonProto.GAME_CATEGORY.SNG) >= 0 && t == d.RoundToDecimal(e.Value, 2)))
        }
        static get allBackPackTool() {
            return m.dataHandler.getUserData().isTouristUser ? [] : e._backPackTool
        }
        static get backPackTool() {
            return m.dataHandler.getUserData().isTouristUser ? [] : e._backPackTool.filter((t => !(t.Expired || t.Expiry && t.Expiry.getTime() <= e.getNow().getTime())))
        }
        static set backPackTool(t) {
            m.dataHandler.getUserData().isTouristUser ? e._backPackTool = [] : e._backPackTool = t
        }
        static get backPackToolRecord() {
            if (m.dataHandler.getUserData().isTouristUser) return [];
            let t = e._backPackTool.filter((t => t.Expired || t.Expiry && t.Expiry.getTime() <= e.getNow().getTime()));
            return e._backPackToolRecord.concat(t)
        }
        static set backPackToolRecord(t) {
            m.dataHandler.getUserData().isTouristUser ? e._backPackToolRecord = [] : e._backPackToolRecord = t
        }
        static init() {
            e.gameMode = 0, e.sngSortStatus = [0, 0], e.pineSortStatus = [0, 0], e.gameViewType = 0, e.listPageIdx = 0, e.currentReplayBackScene = c.SCENE_NAME.HALL, e.webPage = c.WEB_PAGE.MTT_LIST
        }
        static get currentResultId() {
            return e._currentResultId
        }
        static set currentResultId(t) {
            cc_mtt.vv.ConsoleLog.log("currentResultId", t), e._currentResultId = t
        }
        static i18DataFromServer(t, a) {
            try {
                if (a && "sc" !== e.lang) {
                    let t = e.lang;
                    switch (t) {
                        case "vi":
                            t = "vn"
                    }
                    a = (a = (a = (a = (a = (a = (a = a.replace(/^"(.*)"$/, "$1")).replace(/\\/g, "\\\\")).replace(/\n/g, "\\n")).replace(/\r/g, "\\r")).replace(/\t/g, "\\t")).replace(/\f/g, "\\f")).replace(/[\x00-\x1F]/g, ""), "Windows" === r.os && (a = a.replace(/\u2060/g, ""));
                    let o = JSON.parse(a),
                        n = e.i18DataMap[t];
                    if (n && o[n]) return o[n];
                    if (n = e.lang, n = n.charAt(0).toUpperCase() + n.slice(1), o[n]) return o[n];
                    if (n = e.i18DataMap.en, n && o[n]) return o[n]
                }
            } catch (e) {
                cc_mtt.vv.ConsoleLog.error(e)
            }
            return t
        }
        static customFormatStr(e, t) {
            let a = e;
            for (let e = 0; e < t.length; e++) a = a.replace("{$" + (e + 1) + "}", t[e]);
            return a
        }
        static updateToolList(t, a = !1) {
            let o = [];
            e.worldNetwork.requestToolsInBackpackRequest((r => {
                cc_mtt.vv.ConsoleLog.log("getMyToolIds_RES:", a ? r.ToolConsumptions.length : r.ToolInBackpacks.length);
                for (const e of a ? r.ToolConsumptions : r.ToolInBackpacks) o.push(e.ToolId);
                if (o.length > 0) {
                    let n = {
                        ToolIds: o
                    };
                    e.worldNetwork.getToolsInfo(n, (o => {
                        cc_mtt.vv.ConsoleLog.log("getMyToolsInfo_RES");
                        let n = [];
                        for (const t of a ? r.ToolConsumptions : r.ToolInBackpacks) {
                            let r = o.ToolInfos.find((e => e.Id == t.ToolId));
                            if (r) {
                                const o = e.fillBackPackData(t, r, a);
                                n.push(o)
                            }
                        }
                        a ? e.backPackToolRecord = n : e.backPackTool = n, t && t()
                    }))
                } else a ? e.backPackToolRecord = [] : e.backPackTool = [], t && t()
            }))
        }
        static fillBackPackData(e, t, a = !1) {
            if (!e || !t) return e;
            const o = e;
            return o.Created || (o.Created = o.created = t.Created, cc_mtt.vv.ConsoleLog.log("empty Created!")), o.Value = t.Value, o.IconUrl = t.IconUrl, o.Name = cc_mtt.vv.DataManager.i18DataFromServer(t.Name, t.NameI18N), o.SellRatio = t.SellRatio, o.Type = t.Type, o.Description = cc_mtt.vv.DataManager.i18DataFromServer(t.Description, t.DescriptionI18N), o.Expiry || (o.Expiry = t.Expiry), !a && o.Expiry && (o.Expiry = new Date(o.Expiry.getTime() + 86399e3)), o.Currency = t.Currency, o.Validity = t.Validity, t.Config.startsWith('"{') && t.Config.endsWith('}"') && (t.Config = t.Config.slice(1, -1).split('\\"').join('"')), o.Config = t.Config ? JSON.parse(t.Config) : {
                ForCategory: [],
                Aof: !1,
                ForId: []
            }, o.Config && "object" == typeof o.Config ? Array.isArray(o.Config.ForCategory) ? o.Config.ForCategory.forEach(((e, t, a) => {
                a[t] = Number(e)
            })) : o.Config.ForCategory = [] : o.Config = {
                ForCategory: [],
                Aof: !1,
                ForId: []
            }, o.needShowExpireDate = null != o.Expiry, o
        }
        static getAvatarId(e, t) {
            if (e) {
                let t = e.toString();
                if (t.indexOf(",") >= 0) {
                    let e = t.split(",");
                    e.length > 0 && (t = e[0])
                }
                return t
            }
            return t ? t.toString() : ""
        }
        static get avatarId() {
            return e.userData ? e.getAvatarId(e.userData.Avatar, e.userData.Id) : ""
        }
        static isMultipleGame() {
            return n.getScene().name == c.SCENE_NAME.MULTIPLE_GAME || n.getScene().name == c.SCENE_NAME.MULTIPLE_GAME_NEW
        }
        static isTournamentFinished(e) {
            return this.finishedTournamentIds.indexOf(e) >= 0
        }
        static resetVariables() {
            e.ERROR_CODE = {}, e.ante = 0, e.gameList = "", e.mttId = 0, e.moreCoin = 0, e.currentRoomID = 0, e.GAME_LEVEL_LIST = null, e.timeOffset = 0, e.loginData = null, e.agentCodes = {}, e.defaultAgentCode = "", e.ownAssociationId = 0, e.userData = null, e.replayUserId = 0, e.JoinedTournaments = [], e.gameMode = 0, e.isMtt = !1, e.mttReviewTableId = 0, e.mttReviewPlayerId = 0, e.gameViewType = 0, e.listPageIdx = 0, e.currentGameInfo = null, e.lastGameInfo = null, e.currentXhrs = [], e.backPackTool = [], e.backPackToolRecord = [], e.newBagsCount = 0, e._listCoinModeTableSetMtt = {}, e.isEndGame = !1, e.finishedTournamentIds = [], e.hasShowLoginPopup = !1, e.replayRecord = [], e.isReplay = !1, e.currentResultId = 0, e.currentResultUserId = 0, e.replayGameResultDetail = null, e.currentFavouriteResultId = 0, e.currentReplayBackScene = c.SCENE_NAME.HALL, e.isWebReplay = !1, e.isFullScreen = !1, e.miniGameId = 0, e.miniGamePlatform = 0, e.miniGameURL = "", e.miniGameRedPocketNotice = [], e.miniGameActivityRewards = [], e.mttGameListInformerClosed = !1
        }
    }).ERROR_CODE = {}, f.ante = 0, f.gameList = "", f.token = "", f.mttId = 0, f.moreCoin = 0, f.currentRoomID = 0, f.reConnectLoading = null, f.loading = null, f.loadingTargets = [], f.addLoading = (e, t, a = 40) => {
        f.loading && (f.loadingTargets.push(e), t instanceof Function || (t = () => {
            f.removeLoading(e)
        }), f.loading.getComponent("LoadingBlocker").setLoading(t, a), f.updateLoading())
    }, f.removeLoading = (e, t = !1) => {
        f.loadingTargets = t ? [] : f.loadingTargets.filter((t => t != e)), f.updateLoading()
    }, f.updateLoading = () => {
        f.loading && (f.loading.active = f.loadingTargets.length > 0)
    }, f.SMSStatus = ["sent", "checksum", "error", "wait", "user_exists", "user_not_exists", "locked"], f.LanguageSelected = "LanguageSelected", f.versionNumber = "1.1", f._GAME_LEVEL_LIST = void 0, f.pageActionSpeed = .15, f.timeOffset = 0, f.getNow = () => {
        let e = new Date;
        return e = new Date(e.getTime() - f.timeOffset), e
    }, f.floorValue = e => Math.floor(100 * e) / 100, f.roundCoins = e => Number.isInteger(e) ? e.toString() : e.toFixed(2), f.loginData = null, f.popUps = [], f.agentCodes = {}, f.defaultAgentCode = "", f.ownAssociationId = 0, f._userData = null, f.replayUserId = 0, f.JoinedTournaments = [], f.banners = [], f.events = [], f.gameMode = 0, f.isMtt = !1, f.mttReviewTableId = 0, f.mttReviewPlayerId = 0, f.gameViewType = 0, f.listPageIdx = 0, f.currentGameInfo = void 0, f.lastGameInfo = void 0, f.currentXhrs = [], f._backPackTool = [], f._backPackToolRecord = [], f.newBagsCount = 0, f._listCoinModeTableSetMtt = {}, f.StatusBar = null, f.GPSController = new s, f.sngSortStatus = [0, 0], f.pineSortStatus = [0, 0], f.joinedGameClicked = !1, f.withdrawResetTimer = 0, f.isEndGame = !1, f.finishedTournamentIds = [], f.selectedTournamentID = 0, f.hasRedirect = !1, f.hasShowLoginPopup = !1, f.replayRecord = [], f.isReplay = !1, f._currentResultId = 0, f.currentResultUserId = 0, f.currentFavouriteResultId = 0, f.currentReplayBackScene = "hall", f.replayGameResultDetail = null, f.isWebReplay = !1, f.isWebFeature = !1, f.webPlatform = 1, f.needGoldCheck = !0, f.webPage = 0, f.isFullScreen = !1, f.lang = "en", f.miniGameId = 0, f.miniGamePlatform = 0, f.miniGameToolId = 0, f.miniGameURL = "", f.miniGameRedPocketNotice = [], f.miniGameActivityRewards = [], f.mttGameListInformerClosed = !1, f.mttGameListLastSubfilter = "All", f.i18DataMap = {
        en: "En",
        sc: "Sc",
        tc: "Tc",
        vn: "Vn",
        th: "Th",
        es: "Es",
        fr: "Fr",
        pt: "Pt",
        ja: "Ja",
        id: "Id",
        ko: "Ko",
        fi: "Fi",
        hi: "Hi",
        pl: "Pl"
    }, T = f)) || T);
    t._RF.pop()
}