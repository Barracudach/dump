import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";
import * as m from "./ResourceManager.js";
import * as p from "./CFTurnstileCaptcha.js";

function main() {
    var g, f, C, b, T, D, A, _, w, N, E, S, v, y, M, R;
    n._RF.push({}, "7d729pQ3upMS4460RWeuaM6", "CountDownButton", void 0);
    let B = t("CountDownButtonState", function(t) {
        return t[t.normal = 0] = "normal", t[t.countDown = 1] = "countDown", t
    }({}));
    const {
        ccclass: k,
        property: F
    } = r;
    t("default", (g = F(a), f = F(a), C = F({
        tooltip: "set how many seconds to count down"
    }), b = F(o), T = F({
        tooltip: "prefix string data before count down clock"
    }), D = F({
        type: a,
        tooltip: "Other Node visibility to be affected by this one"
    }), A = F({
        type: a,
        tooltip: "CAPTCHA holder node from registration vcode prefab"
    }), k((N = e((w = class extends s {
        constructor(...t) {
            super(...t), i(this, "normalStyleNode", N, this), i(this, "countDownNode", E, this), i(this, "countDownTime", S, this), i(this, "remainTimeLabel", v, this), i(this, "timerStringData", y, this), i(this, "affectNode", M, this), i(this, "captchaNode", R, this), this.isCaptchaValidationNeeded = !1, this._remainTime = 0, this._disabledAt = 0
        }
        get isStillCounting() {
            return this.updateRemainTimeForCountDown(), this._remainTime > 0
        }
        onLoad() {
            m.updateWidget(this.node, !0, h.AlignMode.ALWAYS)
        }
        onEnable() {
            c.on(u.EVENT_HIDE, this.OnAppEnterBackground, this), c.on(u.EVENT_SHOW, this.OnAppEnterForeground, this), l.MessageCenter.register(l.config.CHANGE_LANGUAGE, this.onLanguageChanged.bind(this), this.node), l.MessageCenter.register(l.Enum.MessageCenterAction.onCaptchaverified, this.onCaptchaValidated.bind(this), this.node), l.MessageCenter.register(l.Enum.MessageCenterAction.onCaptchaRefresh, this.updateSendAgainBtnState.bind(this), this.node), this.OnAppEnterForeground(), this.updateSendAgainBtnState(), this.affectNode && (this.affectNode.active = !1)
        }
        onDisable() {
            c.off(u.EVENT_HIDE, this.OnAppEnterBackground, this), c.off(u.EVENT_SHOW, this.OnAppEnterForeground, this), l.MessageCenter.unregister(l.config.CHANGE_LANGUAGE, this.node), l.MessageCenter.unregister(l.Enum.MessageCenterAction.onCaptchaverified, this.node), l.MessageCenter.unregister(l.Enum.MessageCenterAction.onCaptchaRefresh, this.node), this.OnAppEnterBackground(), this.affectNode && (this.affectNode.active = !0)
        }
        OnAppEnterBackground() {
            this.updateDisabledAtTimeForCountDown()
        }
        OnAppEnterForeground() {
            this.updateRemainTimeForCountDown(), this.checkRemain()
        }
        onLanguageChanged() {
            this._updateRemain()
        }
        resetRemainTime() {
            this._remainTime = 0, this.updateDisabledAtTimeForCountDown()
        }
        reset(t = B.normal) {
            this.node.getComponent(d);
            switch (t) {
                case B.countDown:
                    this.activateButton(!1, this.countDownTime), this.activateCaptcha(!1), this.OnAppEnterBackground(), this._updateRemain();
                    break;
                case B.normal:
                default:
                    this.unschedule(this.tick), this.isCaptchaValidationNeeded ? (this.activateCaptcha(), this.updateSendAgainBtnState()) : this.activateButton()
            }
        }
        disable() {
            this.reset();
            let t = this.node.getComponent(d);
            t && (t.interactable = !1)
        }
        activateCaptcha(t = !0) {
            this.captchaNode && (this.captchaNode.active = t)
        }
        onCaptchaValidated() {
            this.isCaptchaValidationNeeded && this._remainTime <= 0 && this.activateButton()
        }
        activateButton(t = !0, e = 0) {
            const i = this.node.getComponent(d);
            this.normalStyleNode.active = t, this.countDownNode.active = !t, this._remainTime = e, i && (i.interactable = t)
        }
        startCountDown(t = !0) {
            t && this.reset(B.countDown), this.schedule(this.tick, 1)
        }
        tick() {
            this._remainTime = Math.max(0, this._remainTime - 1), this.checkRemain()
        }
        _getRemainedTimeString(t) {
            let e = t % 60,
                i = Math.floor(t / 60).toString(),
                n = e.toString();
            return e < 10 && (n = "0" + n), i + ":" + n
        }
        checkRemain() {
            this._updateRemain(), this._remainTime <= 0 && this.reset(B.normal)
        }
        _updateRemain() {
            let t = this._getRemainedTimeString(this._remainTime);
            this._remainTime > 0 ? this.remainTimeLabel.string = l.config.getStringData(this.timerStringData) + " (" + t + ")" : this.remainTimeLabel.string = l.config.getStringData(this.timerStringData)
        }
        updateRemainTimeForCountDown() {
            const t = c.totalTime / 1e3 - this._disabledAt;
            this._remainTime = Math.max(0, this._remainTime - Math.round(t))
        }
        updateDisabledAtTimeForCountDown() {
            this._disabledAt = c.totalTime / 1e3
        }
        updateSendAgainBtnState() {
            if (this.isCaptchaValidationNeeded && this._remainTime <= 0) {
                var t;
                const e = null == (t = this.captchaNode.children[0]) ? void 0 : t.getComponent(p).isValueEmpty;
                void 0 !== e && this.activateButton(!e)
            }
        }
    }).prototype, "normalStyleNode", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(w.prototype, "countDownNode", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(w.prototype, "countDownTime", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 5
        }
    }), v = e(w.prototype, "remainTimeLabel", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(w.prototype, "timerStringData", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), M = e(w.prototype, "affectNode", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(w.prototype, "captchaNode", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = w)) || _));
    n._RF.pop()
}