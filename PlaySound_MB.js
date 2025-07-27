import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./mttconfig.js";

function main() {
    var c, r, d, h, S, p, y;
    n._RF.push({}, "d55ad1XPf9Obbs2f78CKr2O", "PlaySound_MB", void 0);
    const {
        ccclass: f,
        property: m,
        menu: b
    } = l;
    e("default", (c = b("Animation/PlaySound"), r = m(o), d = m(s), f(h = c((p = t((S = class extends i {
        constructor(...e) {
            super(...e), u(this, "Sound", p, this), u(this, "Delay", y, this)
        }
        SoundPlay() {
            this.unscheduleAllCallbacks(), 1 == a.getLocalStorageItem(a.key_enableSoundEffect, 1) && this.scheduleOnce((() => {
                this.Sound.play()
            }), this.Delay)
        }
        SoundPause() {
            this.scheduleOnce((() => {
                this.Sound.pause()
            }), this.Delay)
        }
        SoundResume() {
            this.scheduleOnce((() => {
                this.Sound.resume()
            }), this.Delay)
        }
        SoundStop() {
            this.scheduleOnce((() => {
                this.Sound.stop()
            }), this.Delay)
        }
        Sound_FadeOut() {
            this.schedule((() => {
                this.Sound.volume -= .05, this.Sound.volume <= .05 && (this.unscheduleAllCallbacks(), this.schedule((() => {
                    this.Sound.volume -= .001, this.Sound.volume <= 0 && (this.Sound.stop(), this.Sound.volume = 1, this.unscheduleAllCallbacks())
                }), 1e-5, 99, this.Delay))
            }), 5e-4, 99, this.Delay)
        }
    }).prototype, "Sound", [r], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(S.prototype, "Delay", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), h = S)) || h) || h));
    n._RF.pop()
}