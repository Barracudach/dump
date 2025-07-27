import * as r from "./cc.js";
import * as e from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";
import * as g from "./Pb.js";
import * as u from "./mttconfig.js";
import * as E from "./AndroidBackButton.js";
import * as h from "./LoadingBlocker.js";
import * as _ from "./ResourcesLoader.js";
import * as C from "./Translator.js";
import * as T from "./ConsoleLog.js";
import * as m from "./HttpApiTournamentDetail.js";
import * as d from "./ConnectionTracing.js";
import * as f from "./CrashTracing.js";
import * as M from "./DataManager.js";
import * as S from "./AssetsManager.js";
import * as v from "./buildConfig.js";

function main() {
    var p, L;
    e._RF.push({}, "45cc5wNGEhJV75y0hBc+5Ex", "MTTConnector", void 0);
    const {
        ccclass: A,
        property: N
    } = n;
    let D = t("MTTRequestTokenStatus", function(t) {
        return t[t.ERROR = -1] = "ERROR", t[t.NOT_REQUEST = 0] = "NOT_REQUEST", t[t.REQUESTING = 1] = "REQUESTING", t[t.REQUESTED = 2] = "REQUESTED", t
    }({}));
    t("default", A(((L = class t {
        constructor() {
            this.PLATFORM = {
                A92: 1,
                A93: 3,
                WPTG: 4
            }, this.prefix = "pkw", this.langMap = {
                en_us: "en",
                zh_cn: "sc",
                vi_vn: "vn",
                th_th: "th",
                hi_in: "hi",
                es_mx: "es",
                fr_ca: "fr",
                pt_br: "pt",
                ja_jp: "ja",
                ko_kr: "ko",
                zh_tw: "tc",
                pl_pl: "pl",
                no_no: "no",
                fi_fi: "fi",
                id_id: "id"
            }, this.v = void 0, this.listColorCode = "#71727E", this.listSelectedColorCode = "#B39F6D", this.filterColorCode = "#414248", this.filterSelectedColorCode = "#504226", this.selfSettingBoarderOFF = (new o).fromHEX("979797"), this.selfSettingBoarderON = (new o).fromHEX("E9C501"), this.selfSettingMenuON = (new o).fromHEX("FBD888"), this.selfSettingMenuOFF = (new o).fromHEX("8A8B90"), this.gameListRegColor = {
                0: "#DEC68D",
                1: "#DEC68D",
                2: "#DE5959",
                3: "#C7C4D3",
                4: "#5757A7"
            }, this.mttHallColorOn = (new o).fromHEX("#E5D38D"), this.mttHallColorOff = (new o).fromHEX("#C7C4D3"), this.signUpColorLightUp = (new o).fromHEX("#E9C501"), this.signUpColorLightDown = (new o).fromHEX("#9B9B9B"), this.tournamentDetailColorCode = {
                tabBtnLabelColorOff: "#C7C4D3",
                tabBtnLabelColorOn: "#D0AB6E",
                blindLevel: {
                    normalColor: "#C7C4D3",
                    highLightColor: "#D0AB6E"
                }
            }, this.xDeviceLayoutYPos = {
                platform: "pkw",
                playerBottom: -830,
                cardType: -995,
                cardTypeOmaha: -985,
                playerControlNode: -720,
                potButtons: 230,
                potButtonSpaceX: 43,
                freeRaiseButton: 85,
                allInPanel: 98,
                slideBackBtn: -9,
                selfCardHandlerY: 100,
                menuButton: 115,
                tournamentButton: 107,
                addTableButton: 0,
                omahaSelfCardScale: .845,
                omahaSelfCardPosition: [-127, -26, 75, 176],
                selfStakeY: new a(140, 210)
            }, this.originLayoutPos = {
                potButtons: 240,
                freeRaiseButton: 103,
                allInPanel: 129,
                slideBackBtn: -22
            }, this.liveViewLayoutPosChange = {
                playerControl: 100
            }, this.liveViewLayoutXDevicePosChange = {
                playerControl: 100
            }, this.backgroundThemeCount = 15, this.customMaxAudioInstance = 30, this.needHideLoadingUI = !0, this.config = new R, this.platform = g.commonProto.PLATFORM.PKW, this.requestTokenStatus = D.NOT_REQUEST, this.requestTokenResponseTimeout = null, this.requestTokenResponseInterval = 5e3, this.isJSONString = (t = "") => {
                if ("string" == typeof t) try {
                    if ("object" == typeof JSON.parse(t)) return !0
                } catch (t) {}
                return !1
            }, this.getStorage = (t, e = !1) => {
                const n = r.localStorage.getItem(t);
                if (this.isJSONString(n)) {
                    const o = JSON.parse(n);
                    return e && "global" === o.id || !e && o.id == l.dataHandler.getUserData().getUserIdS() ? o.data : (r.localStorage.removeItem(t), null)
                }
                return n
            }, this.setStorage = (t, e, n = !1) => {
                try {
                    const o = JSON.stringify({
                        id: n ? "global" : l.dataHandler.getUserData().getUserIdS(),
                        data: e
                    });
                    r.localStorage.setItem(t, o)
                } catch (e) {
                    cc_mtt.vv.ConsoleLog.log("setStorage", t, e)
                }
            }
        }
        static get instance() {
            return s(t._instance) || (t._instance = new t, t._instance.initCCVV()), t._instance
        }
        get cv() {
            return l
        }
        get isBL() {
            return "bl" === this.prefix
        }
        get isPKW() {
            return "pkw" === this.prefix
        }
        get isWPK() {
            return "wpk" === this.prefix
        }
        get promoterList() {
            return 0 !== v.getDebugMode() ? [5897330, 5897331, 5897356] : [164927, 158574, 6983, 342093, 145853, 414163, 413564, 413569, 413571, 413587, 413590, 413593, 413597, 414039, 413604, 413606]
        }
        getMttCelebrityAvatarScale(t) {
            return t <= 6 ? 1 : .8
        }
        enterScene(t, e) {
            l.config.setCurrentScene(e), l.config.adaptScreen(t), l.LoadingView.reset(), l.TP.reset(), l.TT.reset(), l.StatusView.reset(e), l.pushNotice.reset(), l.MessageCenter.send("switchSceneFinish", e), l.SwitchLoadingView.hide()
        }
        getHoldemBackgroundData(t) {
            const e = l.config.IS_WIDESCREEN ? "gameBgIpad" : "gameBg";
            return [`mtt/BG/${e}/BG_Floor${t}`, `mtt/BG/${e}/BG_Table${t}`, "1"]
        }
        getHallSceneName() {
            return l.Enum.SCENE.HALL_SCENE
        }
        loadScene(e, n) {
            cc_mtt.vv.DataManager.webPlatform == g.commonProto.PLATFORM.PKW && (e == u.SCENE_NAME.HALL ? e = t.instance.getHallSceneName() : e == u.SCENE_NAME.HOLDEM ? e = l.appConfig.getGameConfig().enableMultipleCashGamesMobile ? u.SCENE_NAME.MULTIPLE_GAME_NEW : u.SCENE_NAME.MULTIPLE_GAME : e == u.SCENE_NAME.HOLDEM_REPLAY && (e = u.SCENE_NAME.HOLDEM_REPLAY_FEATURE)), r.isNative && r.os === r.OS.ANDROID && E.getInstance().resetBackFunction();
            let o = 0;
            l.appConfig.getGeneralConfig().multiWindowEnabled || (o = h.show("loadScene " + e)), _.instance.Reset(), l.action.switchScene(e, (() => {
                l.appConfig.getGeneralConfig().multiWindowEnabled || h.hide("loadScene " + e, !1, o)
            }))
        }
        sendMessageCenter(t, e = null) {
            l.MessageCenter.send(t, e)
        }
        registerMessageCenter(t, e, n) {
            l.MessageCenter.register(t, e, n)
        }
        unregisterMessageCenter(t, e) {
            l.MessageCenter.unregister(t, e)
        }
        isInMTTGame() {
            return l.config.getCurrentScene() == u.SCENE_NAME.HOLDEM || l.config.getCurrentScene() == u.SCENE_NAME.MULTIPLE_GAME || l.config.getCurrentScene() == u.SCENE_NAME.MULTIPLE_GAME_NEW
        }
        initCCVV() {
            cc_mtt.vv || (cc_mtt.vv = {}, cc_mtt.vv.db = t => {}, cc_mtt.vv.DataManager = M, cc_mtt.vv.AssetsManager = S, cc_mtt.vv.ConsoleLog = {
                log: T.log,
                error: T.error,
                trace: T.trace,
                warn: T.warn,
                getTrace: T.getTrace
            }, this.removeExpiredLogs(), cc_mtt.vv.AssetsManager.init(), cc_mtt.vv.DataManager.init(), cc_mtt.vv.DataManager.resetVariables(), cc_mtt.vv.setLanguage = t => {
                l.config.setCurrentLanguage(t)
            })
        }
        getAllUrlParams(t) {
            var e = t ? t.split("?")[1] : window.location.search.slice(1),
                n = {};
            if (e)
                for (var o = (e = e.split("#")[0]).split("&"), a = 0; a < o.length; a++) {
                    var r = o[a].split("="),
                        s = r[0],
                        i = void 0 === r[1] || r[1];
                    if (s = s.toLowerCase(), "string" == typeof i && (i = i.toLowerCase()), s.match(/\[(\d+)?\]$/)) {
                        var c = s.replace(/\[(\d+)?\]/, "");
                        if (n[c] || (n[c] = []), s.match(/\[\d+\]$/)) {
                            var l = /\[(\d+)\]/.exec(s)[1];
                            n[c][l] = i
                        } else n[c].push(i)
                    } else n[s] ? n[s] && "string" == typeof n[s] ? (n[s] = [n[s]], n[s].push(i)) : n[s].push(i) : n[s] = i
                }
            return n
        }
        removeExpiredLogs() {
            try {
                r.os === r.OS.ANDROID ? i.reflection.callStaticMethod("com/cocos/game/AppActivity", "removeExpiredLogs", "(I)V", 1) : r.os === r.OS.IOS && i.reflection.callStaticMethod("AppController", "removeExpiredLogs:", 1)
            } catch (t) {}
        }
        getLangCode(t) {
            let e = t;
            return e && this.langMap[e] ? this.langMap[e] : "en"
        }
        covertToSelfLangCode(t) {
            if (t && "string" == typeof t) {
                let e = t.toLowerCase();
                if (e && this.langMap[e]) return this.langMap[e]
            }
            return "en"
        }
        getCurrentLanguage() {
            return l.config.getCurrentLanguage()
        }
        getSelfCurrentLanguage() {
            let t = this.getCurrentLanguage();
            return this.covertToSelfLangCode(t)
        }
        getFindView() {
            let t = c.getScene().getComponentInChildren("FindView");
            return s(t) ? t : null
        }
        enterMTTGameFailAction(t) {
            cc_mtt.vv.ConsoleLog.error("enterMTTGameFailAction ::::::: ", t)
        }
        enterMTTGame(t, e) {
            this.initCCVV(), m.requestMttTournamentDetail(t, (t => {
                t && !t.ErrorCode && t.TournamentDetail ? cc_mtt.vv.ConsoleLog.log("enterMTTGame enter", t.TournamentDetail) : (cc_mtt.vv.ConsoleLog.log("enterMTTGame data", t), this.enterMTTGameFailAction(t.ErrorCode ? C(`ERROR_CODE_PKW.${t.ErrorCode}`) : C("NETWORK.PINEAPPLE_DISCONNECT")))
            }), (t => {
                cc_mtt.vv.ConsoleLog.log("enterMTTGame error", t), this.enterMTTGameFailAction(C("NETWORK.PINEAPPLE_DISCONNECT"))
            }))
        }
        initMTTBag() {
            this.initMTTParams()
        }
        initMTTParams() {
            this.initCCVV(), h._instance = null, cc_mtt.vv.DataManager.isWebFeature = !0, cc_mtt.vv.DataManager.needGoldCheck = !1, cc_mtt.vv.DataManager.webPlatform = 1, cc_mtt.vv.DataManager.webPage = 0, cc_mtt.vv.DataManager.isWebFeature = !0, cc_mtt.vv.DataManager.lang = t.instance.getSelfCurrentLanguage(), cc_mtt.vv.DataManager.isFullScreen = !0, _.instance.updateResPath(), _.instance.initNeccessaryPrefabPath()
        }
        requestToken() {
            if (this.initCCVV(), cc_mtt.vv.ConsoleLog.log("mtt requestToken"), l.dataHandler.getUserData().m_bIsLoginServerSucc)
                if (this.requestTokenStatus != D.REQUESTING)
                    if (cc_mtt.vv.DataManager.token) cc_mtt.vv.ConsoleLog.log("mtt requestToken is already exist"), this.onTokenUpdate(cc_mtt.vv.DataManager.token);
                    else {
                        l.worldNet.RequestAuthApi() ? this.requestTokenStatus = D.REQUESTING : this.onAuthMttError(this.config.tokenErrorMsg.REQUEST_TOKEN_FAIL)
                    }
            else cc_mtt.vv.ConsoleLog.log("mtt requestToken is requesting")
        }
        onAuthMttSucc(t) {
            cc_mtt.vv.ConsoleLog.log("onAuthMttSucc", t), clearTimeout(this.requestTokenResponseTimeout), t.url && (l.dataHandler.getUserData().mtt_url = t.url), t.bl_token ? (l.dataHandler.getUserData().mtt_token = t.bl_token, this.requestTokenStatus = D.REQUESTED, this.onTokenUpdate(t.bl_token)) : t.token ? (l.dataHandler.getUserData().mtt_token = t.token, this.requestTokenStatus = D.REQUESTED, this.onTokenUpdate(t.token)) : this.onAuthMttError(this.config.tokenErrorMsg.NO_TOKEN)
        }
        getPlatform() {
            return l.appConfig.isPKW ? this.platform : g.commonProto.PLATFORM.A5
        }
        onAuthMttError(t, e = !1) {
            d.hasInstance() && d.getInstance().addIssueDefault("onAuthMttError", "Stack Trace", `${f.getTrace(0,20)}`), cc_mtt.vv.ConsoleLog.log("onAuthMttError", t), clearTimeout(this.requestTokenResponseTimeout), this.requestTokenStatus = D.ERROR, e || (cc_mtt.vv.DataManager.token = ""), this.sendMessageCenter(this.config.BroadCast.MTT_TOKEN_ERROR, t)
        }
        onTokenUpdate(t) {
            cc_mtt.vv.ConsoleLog.log("onTokenUpdate old:`" + cc_mtt.vv.DataManager.token + "` new:`" + t + "`");
            let e = cc_mtt.vv.DataManager.token;
            this.initCCVV(), cc_mtt.vv.DataManager.token = t, e != t ? this.sendMessageCenter(this.config.BroadCast.MTT_TOKEN_END) : t && t.length > 0 && this.sendMessageCenter(this.config.BroadCast.MTT_TOKEN_UPDATE)
        }
    })._instance = null, p = L)) || p);
    class R {
        constructor() {
            this.mttColor = new O, this.tokenErrorMsg = new w, this.BroadCast = new B
        }
    }
    class O {
        constructor() {
            this.bagPrefab = new k, this.messagePage = new P
        }
    }
    class k {
        constructor() {
            this.headerOff = (new o).fromHEX("#999990"), this.headerOn = (new o).fromHEX("#C8A053")
        }
    }
    class P {
        constructor() {
            this.headerOff = (new o).fromHEX("#9B9B9B"), this.headerOn = (new o).fromHEX("#E9E1D1")
        }
    }
    class B {
        constructor() {
            this.CHANGE_LANGUAGE = "change_language", this.PLATFORM_TOKEN_UPDATE_SUCCESS = "onAuthMttSucc", this.PLATFORM_TOKEN_UPDATE_ERROR = "onAuthMttError", this.MTT_TOKEN_UPDATE = "mtt_token_update", this.MTT_TOKEN_END = "mtt_token_end", this.MTT_TOKEN_ERROR = "mtt_token_error", this.SHOW_FULL_SCREEN_PANEL = "onShowFullScreenPanel", this.HIDE_FULL_SCREEN_PANEL = "onHideFullScreenPanel", this.MULTI_TABLE_BAR_TABLE_SELECTED = "multi_table_bar_selected", this.MYSTERY_BOUNTY_INTRO_COMPLETED = "mysteryBountyIntroCompleted"
        }
    }
    class w {
        constructor() {
            this.NO_TOKEN = "mtt_no_token", this.REQUEST_TOKEN_FAIL = "mtt_request_token_fail", this.EMPTY_RESPONSE = "mtt_empty_response", this.BACK_NORMAL = "mtt_back_normal", this.BACK_ABNORMAL = "mtt_back_abnormal", this.NETWORK_ERROR = "mtt_network_error"
        }
    }
    e._RF.pop()
}