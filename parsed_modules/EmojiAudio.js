import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as u from "./cc.js";
import * as e from "./cc.js";
import * as r from "./IEmojiComponent.js";
import * as s from "./AudioEngine.js";

function main() {
    var c, a, l, p;
    e._RF.push({}, "d3d54wVZXZLNoCOjwu8f4rE", "EmojiAudio", void 0);
    const {
        ccclass: d,
        property: f
    } = u;
    i("EmojiAudio", (c = f(n), d((p = o((l = class extends r {
        constructor(...i) {
            super(...i), t(this, "audio", p, this), this.isMuted = !1
        }
        play() {
            this.audio && !this.isMuted && s.play(this.audio, !1, 1, !1)
        }
        stop() {}
    }).prototype, "audio", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), a = l)) || a));
    e._RF.pop()
}