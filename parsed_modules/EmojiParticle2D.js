import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as c from "./IEmojiComponent.js";

function main() {
    var l, n, a, p;
    r._RF.push({}, "a2fdbsdznBE4oyJVheeer+S", "EmojiParticle2D", void 0);
    const {
        ccclass: u,
        property: d
    } = o;
    t("EmojiParticle2D", (l = d(s), u((p = e((a = class extends c {
        constructor(...t) {
            super(...t), i(this, "particle2dList", p, this)
        }
        play() {
            for (let t = 0; t < this.particle2dList.length; t++) this.particle2dList[t] && this.particle2dList[t].resetSystem()
        }
        stop() {
            for (let t = 0; t < this.particle2dList.length; t++) this.particle2dList[t] && this.particle2dList[t].stopSystem()
        }
    }).prototype, "particle2dList", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), n = a)) || n));
    r._RF.pop()
}