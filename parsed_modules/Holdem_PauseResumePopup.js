import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./Translator.js";
import * as u from "./cv.js";

function main() {
    var h, c, m, b, g, p, T, M, d, f, L, _, C, v;
    s._RF.push({}, "fdbc3H8wVRPEIIqgNI+fKQ0", "Holdem_PauseResumePopup", void 0);
    const {
        ccclass: E,
        property: w
    } = o;
    e("default", (h = w(n), c = w(a), m = w(a), b = w(n), g = w(a), p = w(a), E((d = t((M = class extends r {
        constructor(...e) {
            super(...e), i(this, "Container", d, this), i(this, "ContentLabel_1", f, this), i(this, "ContentLabel_2", L, this), i(this, "TimeNode", _, this), i(this, "TimeLabel", C, this), i(this, "Title", v, this), this.endTime = 0, this.resumeMessage = "", this.resumeMessageStore = "", this.resumeMessageI18N = "", this.isResuming = !1, this.layoutType = -1
        }
        onEnable() {
            u.MessageCenter.register(u.config.CHANGE_LANGUAGE, this.updateLabels.bind(this), this.node)
        }
        onDisable() {
            u.MessageCenter.unregister(u.config.CHANGE_LANGUAGE, this.node)
        }
        setTitleLabel(e) {
            this.Title.string = e
        }
        setContentLabel1(e) {
            this.ContentLabel_1.string = e
        }
        setContentLabel2(e) {
            this.ContentLabel_2.string = e
        }
        setTimeLabel() {
            let e = Math.floor(this.endTime - cc_mtt.vv.DataManager.getNow().getTime() / 1e3);
            this.TimeLabel.string = this.formatTime(e)
        }
        updateLabels() {
            switch (this.resumeMessageI18N && (this.resumeMessage = cc_mtt.vv.DataManager.i18DataFromServer(this.resumeMessageStore, this.resumeMessageI18N)), this.layoutType) {
                case 0:
                    this.setTitleLabel(l("GAME.GAME_ROOM_PAUSE_TITLE")), this.resumeMessage ? this.setContentLabel1(this.resumeMessage) : this.setContentLabel1(l("GAME.GAME_ROOM_PAUSE"));
                    break;
                case 1:
                    this.setTitleLabel(l("GAME.GAME_ROOM_PAUSE_TITLE")), this.resumeMsgConversion()
            }
        }
        switchLayout(e) {
            switch (this.layoutType = e, this.updateLabels(), e) {
                case 0:
                    this.isResuming = Boolean(e), this.ContentLabel_2.node.active = !1, this.TimeNode.active = !1;
                    break;
                case 1:
                    this.isResuming = Boolean(e), this.schedule(this.countDownResume), this.ContentLabel_2.node.active = !0, this.TimeNode.active = !0
            }
            this.showPopup(!0)
        }
        showPopup(e) {
            this.Container.active = e
        }
        countDownResume() {
            let e = Math.floor(this.endTime - cc_mtt.vv.DataManager.getNow().getTime() / 1e3);
            if (e <= 0 && this.setTimeLabel(), 0 === this.endTime || e <= -1) return this.unschedule(this.countDownResume), void this.showPopup(!1);
            this.setTimeLabel()
        }
        resumeMsgConversion() {
            if (Math.floor(this.endTime - cc_mtt.vv.DataManager.getNow().getTime() / 1e3) >= 0)
                if (this.resumeMessage)
                    if (this.resumeMessage.includes("%time%")) {
                        let e = this.resumeMessage.replace(/\\n/g, "").split("%time%.");
                        e && 0 != e.length && e[1] || (e = this.resumeMessage.split("%time%")), e && e.length > 0 && (" " === e[0].slice(-1) && (e[0] = e[0].slice(0, e[0].length - 1)), "." === e[1].substring(0, 1) && (e[1] = e[1].slice(1)), ". " === e[1].substring(0, 2) && (e[1] = e[1].slice(2)), this.setContentLabel1(e[0]), this.setContentLabel2(e[1]))
                    } else this.setContentLabel1(this.resumeMessage), this.ContentLabel_2.node.active = !1;
            else this.setContentLabel1(l("GAME.GAME_ROOM_PAUSE")), this.ContentLabel_2.node.active = !1
        }
        formatTime(e) {
            if (e <= 0) return "00:00:00";
            let t = e >= 3600 ? Math.floor(e / 3600) : 0,
                i = e >= 60 ? Math.floor(e % 3600 / 60) : 0,
                s = e > 0 ? Math.floor(e % 3600 % 60) : 0;
            return `${this.padZeroToTime(t)}:${this.padZeroToTime(i)}:${this.padZeroToTime(s)}`
        }
        padZeroToTime(e) {
            return e < 10 ? "0" + e : e
        }
    }).prototype, "Container", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(M.prototype, "ContentLabel_1", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(M.prototype, "ContentLabel_2", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(M.prototype, "TimeNode", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(M.prototype, "TimeLabel", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(M.prototype, "Title", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = M)) || T));
    s._RF.pop()
}