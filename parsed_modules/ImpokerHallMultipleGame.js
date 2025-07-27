import * as o from "./cc.js";
import * as e from "./cc.js";
import * as l from "./cc.js";
import * as a from "./LoadingBlocker.js";
import * as i from "./ImpokerHall.js";
import * as s from "./MttPrefab.js";
import * as c from "./MttHall.js";
import * as n from "./mttconfig.js";
import * as p from "./ImpokerHallFeature.js";

function main() {
    var r;
    e._RF.push({}, "950cfR+w8ZDGK5mY0f12h70", "ImpokerHallMultipleGame", void 0);
    const {
        ccclass: h,
        property: g
    } = o;
    t("ImpokerHallMultipleGame", h(r = class extends p {
        startpage() {
            this.initStartPage()
        }
        showArchivedMttTournament() {}
        initStartPageAction() {
            a.hide("Hall"), i.instance = this, this.initBasicScene(this.isMain), this.attachGameListPage(), this.bindMessageHandler(), this.createPagePrefab()
        }
        createPagePrefab() {
            this.callGamePage(n.GAME_LEVEL_LIST_ID.MTT, !0, this.autoOpenGameView)
        }
        autoOpenGameViewAction() {}
        callPopUpBox(t, e, o = "ERROR_CODE_PKW.TITLE", a) {
            cc_mtt.vv.ConsoleLog.log("callPopUpBox", t), l(this.node) && (a = a || this.layers[7], this.dialogController.showDialogBox(o, t, !1, [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: e
            }], a, null, "callPopUpBox"), this.kickWebViewPage())
        }
        callPopUpBoxWithTwoOptions(t, e, o, a = "ERROR_CODE_PKW.TITLE", i) {
            cc_mtt.vv.ConsoleLog.log("callPopUpBoxWithTwoOptions", t), l(this.node) && (i = i || this.layers[7], this.dialogController.showDialogBox(a, t, !1, [{
                type: 1,
                text: "MESSAGE_DIALOG_BLOCKER.CANCEL",
                callback: o
            }, {
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: e
            }], i, null, "callPopUpBoxWithTwoOptions"), this.kickWebViewPage())
        }
        callRetryPopUpBox(t, e, o, a = "ERROR_CODE_PKW.TITLE", i) {
            cc_mtt.vv.ConsoleLog.log("callRetryPopUpBox", t), l(this.node) && (i = i || this.layers[7], this.dialogController.showDialogBox(a, t, !1, [{
                type: 1,
                text: "MESSAGE_DIALOG_BLOCKER.CANCEL",
                callback: o
            }, {
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.RETRY",
                callback: e
            }], i, null, "callRetryPopUpBox"), this.kickWebViewPage())
        }
        callPopUpBoxDIY(t, e, o, a, i) {
            cc_mtt.vv.ConsoleLog.log("callPopUpBoxDIY", e), l(this.node) && (i = i || this.layers[7], this.dialogController.showDialogBox(t, e, !1, a, i, null, "callPopUpBoxDIY"), this.kickWebViewPage())
        }
        onHideAllDialogAction() {
            if (this._mttPage) {
                let t = this._mttPage.getComponent(s);
                if (t && t._mttHall) {
                    let e = t._mttHall.getComponent(c);
                    e && e.closePopUps()
                }
            }
        }
    }) || r);
    e._RF.pop()
}