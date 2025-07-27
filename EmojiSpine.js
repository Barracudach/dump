import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";
import * as r from "./IEmojiComponent.js";

function main() {
    var l, c, p, u, h, m, b, d;
    e._RF.push({}, "281b01RL8tCBINqa1BsHypM", "EmojiSpine", void 0);
    const {
        ccclass: f,
        property: k
    } = s;
    i("EmojiSpine", (l = k(a.Skeleton), c = k(o), p = k(o), f((m = n((h = class extends r {
        constructor(...i) {
            super(...i), t(this, "spine", m, this), t(this, "defaultSkin", b, this), t(this, "animationName", d, this), this.animationEndCallback = null
        }
        play() {
            this.node.active = !0, this.spine && (this.spine.setSkin(this.defaultSkin), this.spine.animation = this.animationName, this.spine.setCompleteListener(this._onAnimationFinished.bind(this)))
        }
        stop() {
            this.spine && this.spine.clearTrack(0)
        }
        clearCallback() {
            this.animationEndCallback = null
        }
        _onAnimationFinished(...i) {
            this.node.active = !1, this.animationEndCallback && this.animationEndCallback(i)
        }
    }).prototype, "spine", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = n(h.prototype, "defaultSkin", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), d = n(h.prototype, "animationName", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), u = h)) || u));
    e._RF.pop()
}