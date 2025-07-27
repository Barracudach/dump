import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as l from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./cc.js";
import * as u from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as a from "./mttconfig.js";
import * as o from "./AudioEngine.js";

function main() {
    var r, p, h, d, f, y, C;
    t._RF.push({}, "dc27dmXvYxN2a5jTReu7HDE", "PlayAudioClip_MB", void 0);
    const {
        ccclass: A,
        property: b,
        menu: m
    } = s;
    e("default", (r = m("Animation/PlayAudioClip"), p = b(c), h = b(n), A(d = r((y = l((f = class extends u {
        constructor(...e) {
            super(...e), i(this, "Clip", y, this), i(this, "DelaySec", C, this)
        }
        ClipPlay() {
            this.unscheduleAllCallbacks(), 1 == a.getLocalStorageItem(a.key_enableSoundEffect, 1) && this.scheduleOnce((function() {
                o.play(this.Clip, !1, 1, !1)
            }), this.DelaySec)
        }
        ClipPauseAll() {
            this.unscheduleAllCallbacks(), this.scheduleOnce((function() {
                o.pauseAll()
            }), this.DelaySec)
        }
        ClipResumeAll() {
            this.unscheduleAllCallbacks(), this.scheduleOnce((function() {
                o.resumeAll()
            }), this.DelaySec)
        }
        ClipStopAll() {
            this.unscheduleAllCallbacks(), this.scheduleOnce((function() {
                o.stopAll()
            }), this.DelaySec)
        }
        ClipPlayLoop() {
            this.unscheduleAllCallbacks(), this.scheduleOnce((function() {
                o.play(this.Clip, !0, 1, !1)
            }), this.DelaySec)
        }
    }).prototype, "Clip", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = l(f.prototype, "DelaySec", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), d = f)) || d) || d));
    t._RF.pop()
}