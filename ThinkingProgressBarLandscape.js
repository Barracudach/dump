import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as T from "./RadialProgressBarWithEdges.js";
import * as C from "./ThemeSystem.js";
import * as _ from "./ColorSystemType.js";
import * as y from "./ColorSystemTypeOther.js";

function main() {
    var d, w, B, S, D, f, b, F, A, x, R, P, v, O, z, k, G, L;
    i._RF.push({}, "aa5cd9IZg9Hh5xgEMyCqMe8", "ThinkingProgressBarLandscape", void 0);
    const {
        ccclass: M,
        property: q
    } = o;
    e("default", (d = q(r), w = q(r), B = q(r), S = q(r), D = q(r), f = q(T), b = q(s), F = q(s), M((R = t((x = class extends a {
        constructor(...e) {
            super(...e), n(this, "sprFrmTimerGreen", R, this), n(this, "sprFrmTimerOrange", P, this), n(this, "sprFrmTimerRed", v, this), n(this, "sprFrmTimerDisconnect", O, this), n(this, "sprFrmTimerReconnect", z, this), n(this, "radialProgressBar", k, this), n(this, "ringBase", G, this), n(this, "ringCountDown", L, this), this._ringBaseThemeSystem = null, this._ringCountDownSprite = null, this._countDownText = null, this._oldCountDownText = "", this._actionCountDownTag = 1e4, this._actionRingBaseTag = 10001, this._canChangeColor = !0
        }
        onLoad() {
            this._ringBaseThemeSystem = this.ringBase.getComponent(C), this._ringCountDownSprite = this.ringCountDown.getComponent(h), this.ringBase.active = !1
        }
        onDisable() {
            this.stopSchedulesAndActions()
        }
        onDestroy() {
            this.stopSchedulesAndActions()
        }
        updateProgress(e, t) {
            if (this.radialProgressBar && this.radialProgressBar.updateProgress(e), t && (this._canChangeColor = t), this._canChangeColor && (e < .5 ? (this._ringCountDownSprite.spriteFrame = this.sprFrmTimerGreen, this._ringBaseThemeSystem.setColorScheme(_.Other, y.TimerAvatarBaseGreen)) : e < .75 ? (this._ringCountDownSprite.spriteFrame = this.sprFrmTimerOrange, this._ringBaseThemeSystem.setColorScheme(_.Other, y.TimerAvatarBaseOrange)) : (this._ringCountDownSprite.spriteFrame = this.sprFrmTimerRed, this._ringBaseThemeSystem.setColorScheme(_.Other, y.TimerAvatarBaseRed))), this._countDownText && this._countDownText.string !== this._oldCountDownText) {
                this._oldCountDownText = this._countDownText.string;
                const t = e >= .75 ? 1.15 : 1.05;
                this.setCountDownTextAnim(t)
            }
            if (this._ringBaseThemeSystem && this._ringBaseThemeSystem.node.active) {
                const e = this._ringBaseThemeSystem.node.getComponent(l).opacity;
                if (e > 0) {
                    let t = this._ringBaseThemeSystem.node.getComponent(l);
                    c.instance.ActionManager.getActionByTag(this._actionRingBaseTag, t) || m.stopAllByTag(this._actionRingBaseTag, t), this.setRingBaseAnim(e)
                }
            }
        }
        setDisconnectColor() {
            this._canChangeColor = !1, this._ringCountDownSprite.spriteFrame = this.sprFrmTimerDisconnect
        }
        setReconnectColor() {
            this._canChangeColor = !1, this._ringCountDownSprite.spriteFrame = this.sprFrmTimerReconnect
        }
        setNormalColor() {
            this._canChangeColor = !0
        }
        setCountDownText(e) {
            this._countDownText = e
        }
        setCountDownTextAnim(e) {
            this._countDownText.node.setScale(new u(1, 1, 1));
            let t = g().sequence(g().to(.1, {
                scale: new u(e, e, 1)
            }), g().to(.4, {
                scale: new u(1, 1, 1)
            }));
            t.tag(this._actionCountDownTag), t.target(this._countDownText.node).start()
        }
        setRingBaseAnim(e = 200) {
            this._ringBaseThemeSystem.node.active = !0, this._ringBaseThemeSystem.node.getComponent(l).opacity = e, g().to(1, {
                opacity: 0
            }).tag(this._actionRingBaseTag).target(this._ringBaseThemeSystem.node.getComponent(l)).start()
        }
        stopSchedulesAndActions() {
            this.unscheduleAllCallbacks(), p(this._countDownText) && m.stopAllByTarget(this._countDownText.node), p(this._ringBaseThemeSystem) && m.stopAllByTarget(this._ringBaseThemeSystem.node)
        }
    }).prototype, "sprFrmTimerGreen", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(x.prototype, "sprFrmTimerOrange", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(x.prototype, "sprFrmTimerRed", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(x.prototype, "sprFrmTimerDisconnect", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(x.prototype, "sprFrmTimerReconnect", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(x.prototype, "radialProgressBar", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(x.prototype, "ringBase", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(x.prototype, "ringCountDown", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = x)) || A));
    i._RF.pop()
}