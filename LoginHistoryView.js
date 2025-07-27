import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as c from "./cv.js";
import * as l from "./ScrollViewReuse.js";
import * as a from "./userLoginHistoryEntry.js";

function main() {
    var h, u, g, p, y, f, w;
    o._RF.push({}, "8350f4+zXRKdoPoRjcilALn", "LoginHistoryView", void 0);
    const {
        ccclass: d,
        property: _,
        executionOrder: b
    } = r;
    t("LoginHistoryView", (h = b(1), u = _(l), g = _(n), d(p = h((f = e((y = class extends s {
        constructor(...t) {
            super(...t), i(this, "scrollView", f, this), i(this, "itemPrefab", w, this), this.fetchDataOnShow = !0
        }
        onLoad() {
            this.scrollView.bindPrefab(this.itemPrefab, "LoginHistoryItem"), this.scrollView.generateItemPool(), this.scrollView.bindScrollEventTarget(this)
        }
        onEnable() {
            this.node.on(c.Enum.CustomEvent.ActionShowFinish, this.onFinishShow, this)
        }
        onDisable() {
            this.node.off(c.Enum.CustomEvent.ActionShowFinish, this.onFinishShow, this)
        }
        onFinishShow() {
            this.fetchDataOnShow && this.requestUserActivityHistory()
        }
        requestUserActivityHistory() {
            let t = c.config.getStringData("WEB_API_USERP_PBI_ACTIVITY_HISTORY", !0);
            c.http.sendRequestV2(t, {}, this.onGetUserActivityHistory.bind(this), c.popUp.showFirstServerError.bind(c.popUp), c.http.HttpRequestType.GET)
        }
        onGetUserActivityHistory(t) {
            if ("getUserLoginHistory" in t) {
                let e = [],
                    i = c.StringTools.getArrayLength(t.getUserLoginHistory);
                if (i > 0) {
                    this.fetchDataOnShow = !1;
                    for (let o = 0; o < i; o++) {
                        let i = a(t.getUserLoginHistory[o]);
                        i && e.push(i)
                    }
                    e.sort((function(t, e) {
                        return e.logged_at_ts.getTime() - t.logged_at_ts.getTime()
                    })), this.scrollView.reloadView(e)
                }
            }
        }
        onBtnBackClick() {
            c.AudioMgr.playButtonSound("back_button.mp3"), c.action.showAction(this.node, c.action.eMoveActionDir.EMAD_TO_RIGHT, c.action.eMoveActionType.EMAT_FADE_OUT, c.action.delay_type.NORMAL, ((t, e) => {}), ((t, e) => {
                c.MessageCenter.send("show_mail_entrance", !0)
            }))
        }
    }).prototype, "scrollView", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(y.prototype, "itemPrefab", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = y)) || p) || p));
    o._RF.pop()
}