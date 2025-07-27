import * as t from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as i from "./Helpers2.js";
import * as a from "./Enum.js";
import * as s from "./cv.js";
import * as c from "./MockMiniGameLogic.js";
import * as r from "./MockToolDataSet.js";

function main() {
    n._RF.push({}, "3fa204E1yhIa7LKwG0MoNhH", "MockTool", void 0);
    const g = new o;
    class d {
        constructor() {
            this._config = void 0, this._mockDataSet = null
        }
        static getInstance() {
            return d.g_instance || (d.g_instance = new d), d.g_instance
        }
        init() {
            this._mockDataSet = r.getInstance(), this._loadConfig(), window.mockEventEmitter = g, this._setupEventListener()
        }
        _loadConfig() {
            s.resMgr.load("dev/MockConfig", t, (e => {
                this._config = e.json
            }), s.resMgr.CleanResLevel.LEVEL_BASE)
        }
        _setupEventListener() {
            window.mockEventEmitter.on("MockTurnTableEvent", this._mockTurnTableEvent.bind(this)), window.mockEventEmitter.on("TriggerJackpotAwardNotice", this._mockNoticeJackPotAwardInfo.bind(this)), window.mockEventEmitter.on("TriggerFallingMarsJackpotAwardNotice", this._mockFallingMarsJackpotAwardInfo.bind(this)), window.mockEventEmitter.on("TriggerKickOutGame", (e => c.getInstance().mockKickPlayer(e)), this), window.mockEventEmitter.on("MockLeaveRoom", (e => c.getInstance().mockLeaveRoom(e)), this), window.mockEventEmitter.on("MockStartMtt", (() => c.getInstance().mockStartMtt()), this), window.mockEventEmitter.on(i.UserLoginSuccess, (e => {
                s.MessageCenter.send(i.UserLoginSuccess, e)
            })), window.mockEventEmitter.on("webAppLoginFailed", (e => {
                s.MessageCenter.send("webAppLoginFailed", e)
            })), window.mockEventEmitter.on("webApp_open_profile", (e => {
                s.MessageCenter.send("webApp_open_profile", e)
            })), window.mockEventEmitter.on("webApp_close_profile", (e => {
                s.MessageCenter.send("webApp_close_profile", e)
            })), window.mockEventEmitter.on("webApp_open_notification", (e => {
                s.MessageCenter.send("webApp_open_notification", e)
            })), window.mockEventEmitter.on("web_go_back", (e => {
                s.MessageCenter.send(s.Enum.MessageCenterAction.onGoBack)
            })), window.mockEventEmitter.on("web_focus_poker", (() => {
                window.DeeplinkCustomSchemaParseInfo(JSON.stringify({
                    link: "hall"
                })), s.MessageCenter.send(s.Enum.MessageCenterAction.onShowHall)
            })), window.mockEventEmitter.on("hide_loading", (e => {
                s.SwitchLoadingView.hide()
            })), window.mockEventEmitter.on("show_loading", (e => {
                0 === e ? s.SwitchLoadingView.show(s.config.getStringData("Loading")) : 1 === e ? s.SwitchLoadingView.show(s.config.getStringData("Loading"), !1, !0, !1) : 2 === e ? s.SwitchLoadingView.show(s.config.getStringData("Loading"), !1, !1, !0, !1, !1) : 3 === e ? s.SwitchLoadingView.show(s.config.getStringData("Loading"), !1, !1, !1, !1, !0) : 4 === e && s.SwitchLoadingView.show(s.config.getStringData("Loading"), !1, !1, !1, !0, !1)
            })), window.mockEventEmitter.on("MockLanguageChange", this._mockLanguageChange.bind(this)), window.mockEventEmitter.on("MockAppExit", this._mockExitPopUp.bind(this)), window.mockEventEmitter.on("MockNoticeGlobalMessage", this._mockNoticeGlobalMessage.bind(this)), window.mockEventEmitter.on("MessageCenter.send", ((e, t) => {
                console.log(`[MockTool] MessageCenter.send event: ${e}, data: ${"object"==typeof t?JSON.stringify(t):t}`), s.MessageCenter.send(e, t)
            })), window.mockEventEmitter.on("MockOpenMiniGame", (e => {
                s.roomManager.requestJoinMiniRoom(Number(e.gameId), Number(e.roomId))
            }))
        }
        _mockNoticeJackPotAwardInfo(e) {
            const t = e || this._config.NormalJackpotAwardNotice;
            s.worldNet.noticeJackPotAwardMsg(t)
        }
        _mockFallingMarsJackpotAwardInfo(e) {
            const t = e || this._config.FallingMarsJackpotAwardNotice;
            s.worldNet.noticeJackPotAwardMsg(t)
        }
        _mockTurnTableEvent(e) {
            const t = e || this._config.MockTurnTableEvent;
            console.log(t), console.log("mock turn table event"), s.dataHandler.getUserData().luckTurntables = [];
            for (let e = 0; e < t.draw_list.length; e++) s.dataHandler.getUserData().luckTurntables.push(t.draw_list[e]);
            s.dataHandler.getUserData().luckTurntables.length > 0 ? s.MessageCenter.send("drawRedPackage") : s.MessageCenter.send("updataLuckTurntablesButton")
        }
        _mockLanguageChange(e) {
            if (Object.values(a).includes(e)) {
                const t = e;
                s.config.setCurrentLanguage(t)
            } else console.error(`Invalid language type: ${e}`)
        }
        _mockNoticeGlobalMessage(e) {
            s.worldNet.onHandleNoticeGlobalMessage(e)
        }
        _mockExitPopUp() {
            s.showAppExitPopup()
        }
    }
    e("default", d), d.g_instance = void 0, n._RF.pop()
}