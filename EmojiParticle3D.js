import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";
import * as l from "./IEmojiComponent.js";

function main() {
    var o, c, p, d;
    s._RF.push({}, "6b30cNsDGZJlaRpp4yrB5Hy", "EmojiParticle3D", void 0);
    const {
        ccclass: h,
        property: u
    } = a;
    t("EmojiParticle3D", (o = u(n), h((d = i((p = class extends l {
        constructor(...t) {
            super(...t), e(this, "particle3dList", d, this), this.animationEndCallback = null
        }
        play() {
            let t = 0;
            for (let i = 0; i < this.particle3dList.length; i++) r(this.particle3dList[i]) && (this.particle3dList[i].stop(), this.particle3dList[i].play(), t += this.particle3dList[i].duration);
            this.scheduleOnce(this._onAnimationFinished.bind(this), t)
        }
        _onAnimationFinished(...t) {
            this.animationEndCallback && this.animationEndCallback(t)
        }
        stop() {
            for (let t = 0; t < this.particle3dList.length; t++) r(this.particle3dList[t]) && this.particle3dList[t].stop()
        }
    }).prototype, "particle3dList", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), c = p)) || c));
    s._RF.pop()
}