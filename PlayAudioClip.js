import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as l from "./cc.js";

function main() {
    var s, a, c, n;
    t._RF.push({}, "d1b6b1+GZxIj5qAlpAIy2k5", "PlayAudioClip", void 0);
    const {
        ccclass: d,
        property: h
    } = u;
    i("default", (s = h(l), d((n = o((c = class extends r {
        constructor(...i) {
            super(...i), e(this, "Clip", n, this), this.audioSource = void 0
        }
        onLoad() {
            this.audioSource = this.addComponent(p)
        }
        ClipPlay() {
            this.audioSource.playOneShot(this.Clip, 1)
        }
        ClipPauseAll() {
            this.audioSource.pause()
        }
        ClipResumeAll() {
            this.audioSource.play()
        }
        ClipStopAll() {
            this.audioSource.stop()
        }
    }).prototype, "Clip", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), a = c)) || a));
    t._RF.pop()
}