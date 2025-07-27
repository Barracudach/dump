import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";

function main() {
    var i, c, a, l;
    n._RF.push({}, "75c05w5DVVFY7NLsquo7GAS", "PlaySound", void 0);
    const {
        ccclass: p,
        property: d
    } = r;
    o("default", (i = d(u), p((l = e((a = class extends s {
        constructor(...o) {
            super(...o), t(this, "Sound", l, this)
        }
        SoundPlay() {
            this.Sound.play()
        }
        SoundPause() {
            this.Sound.pause()
        }
        SoundResume() {
            this.Sound.play()
        }
        SoundStop() {
            this.Sound.stop()
        }
    }).prototype, "Sound", [i], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = a)) || c));
    n._RF.pop()
}