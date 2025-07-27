import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./RGView.js";
import * as n from "./ScrollViewReuse.js";
import * as c from "./cv.js";
import * as u from "./userRGLimitHistoryItem.js";

function main() {
    var a, p, f, b, d, y;
    s._RF.push({}, "bb7804jVp9G6YNgGlwtS6qe", "RGHistoryView", void 0);
    const {
        ccclass: h,
        property: m
    } = o;
    e("default", (a = m(n), p = m(r), h((d = t((b = class extends l {
        constructor(...e) {
            super(...e), i(this, "scrollView", d, this), i(this, "itemPrefab", y, this)
        }
        onLoad() {
            this.scrollView.bindPrefab(this.itemPrefab, "RGHistoryItem"), this.scrollView.generateItemPool(), this.scrollView.bindScrollEventTarget(this)
        }
        onEnable() {
            this.requestUserActivityHistory()
        }
        onDisable() {
            this.scrollView.removeAll(!1)
        }
        requestUserActivityHistory() {
            let e = c.config.getStringData("WEB_API_RG_LIMIT_HISTORY", !0);
            c.http.sendRequestV2(e, {}, this.onGetUserActivityHistory.bind(this), c.popUp.showFirstServerError.bind(c.popUp), c.http.HttpRequestType.GET)
        }
        onGetUserActivityHistory(e) {
            let t = [];
            if (e && e.items && e.items.length > 0) {
                let i = {
                        loss: "loss",
                        deposit_blocked: "ability_to_deposit_blocked",
                        deposit: "deposit",
                        time: "playing_time",
                        self_exclusion: "self_exclusion",
                        wager: "wager"
                    },
                    s = Object.keys(i);
                for (let r of s) {
                    let s = e.items[0][r];
                    if (s)
                        for (let e of s) {
                            let s = new u(i[r], e);
                            if (i[r] == i.time) {
                                let t = e.limit,
                                    i = ("0" + Math.floor(t / 60)).slice(-2),
                                    r = ("0" + t % 60).slice(-2);
                                s.value = `${i} : ${r}`
                            }
                            t.push(s)
                        }
                }
                t.sort((function(e, t) {
                    return t.updated_at_ts.getTime() - e.updated_at_ts.getTime()
                }))
            }
            this.scrollView.reloadView(t)
        }
    }).prototype, "scrollView", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(b.prototype, "itemPrefab", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = b)) || f));
    s._RF.pop()
}