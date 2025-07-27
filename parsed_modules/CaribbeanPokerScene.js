import * as t from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cv.js";
import * as l from "./WebGameScene.js";

function main() {
    var r;
    a._RF.push({}, "74264VH+ZJFl4P4btyzOIJZ", "CaribbeanPokerScene", void 0);
    const {
        ccclass: c,
        property: d
    } = s;
    e("CaribbeanPokerScene", c("CaribbeanPokerScene")(r = class extends l {
        onEnable() {
            if (this.gameId = o.habaNetwork.getHabaGameId(), o.appConfig.getGeneralConfig().multiWindowEnabled) {
                const e = o.roomManager.getGameScene(this.gameId, o.roomManager.getMiniGameRoomIdTemplate(this.gameId));
                if (e) {
                    const a = e.windowID;
                    t.setWindowTitle(a, this.gameId === o.Enum.GameId.CaribbeanStud ? "Caribbean Stud" : "Caribbean Holdem")
                }
                o.resMgr.adaptWidget(this.node, !0, !1)
            }
            super.onEnable(), o.dataHandler.getUserData().minigameId = this.gameId
        }
        setCurrentScene() {
            o.config.setCurrentScene(o.Enum.SCENE.CARIBBEAN_POKER_SCENE)
        }
        setWebUrl() {
            this.reset(o.habaNetwork.getHabaGamesUrl(this.gameId))
        }
        onWebViewLoaded(e) {
            console.log("----webView---loaded----URL : " + (null == e ? void 0 : e._url)), (null == e ? void 0 : e.url) === this.urlToCall && (this.isWebViewLoaded = !0, n.stopAllByTarget(this.node), i(this.node).delay(1).call((() => {
                var e;
                null == (e = this.baseImg) || e.cleanImage(), this.setShowWebView(!0)
            })).start())
        }
        onWindowCloseCallback(e) {
            var a;
            e && e.tRoomData.u32GameID == this.gameId && (this.setShowWebView(!1, !0), o.popUp.showMsg({
                txt: "CowboyExit_bg_exit_text",
                msgType: o.Enum.ToastType.ToastTypeInfo,
                isPopupDarkActive: !0,
                title: "ClubNotice_title_1",
                isTwoBtn: !0,
                cancelCallback: this.cancelExit.bind(this),
                sureCallback: this.exitGame.bind(this),
                cashGameScene: null == (a = this.gameSceneInstance) || null == (a = a.room) ? void 0 : a.gameScene,
                isParamInKeyFormatMsgI18n: !0
            }))
        }
        cancelExit() {
            this.setShowWebView(!0), this.scheduleOnce((() => {
                var e;
                null == (e = this.baseImg) || e.cleanImage()
            }), .2)
        }
    }) || r);
    a._RF.pop()
}