import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as r from "./IEmojiComponent.js";

function main() {
    var m, c, h, p, u, d;
    a._RF.push({}, "8ea60gy3cxA9IOO5w6a2M2b", "EmojiAnimation", void 0);
    const {
        ccclass: f,
        property: g
    } = s;
    i("EmojiAnimation", (m = g(o), c = g(e), f((u = t((p = class extends r {
        constructor(...i) {
            super(...i), n(this, "animationList", u, this), n(this, "playAnimationAdditive", d, this), this.animationEndCallback = null
        }
        onLoad() {
            for (let i = 0; i < this.animationList.length; i++) null != this.animationList[i] && this.animationList[i].on(o.EventType.FINISHED, this._onAnimationFinished, this)
        }
        play(i) {
            for (let n = 0; n < this.animationList.length; n++) {
                var t;
                if (!this.animationList.length) return;
                const a = null == (t = this.animationList[n]) ? void 0 : t.clips;
                if (this.playAnimationAdditive)
                    for (let i = 0; i < a.length; i++) {
                        const t = a[i];
                        t && this.animationList[n].crossFade(t.name)
                    } else {
                        const t = l.isNumber(i) ? i : 0;
                        t >= 0 && t < a.length && a[t] && this.animationList[n].play(a[t].name)
                    }
            }
        }
        stop(i) {
            for (let n = 0; n < this.animationList.length; n++) {
                var t;
                if (!this.animationList.length) return;
                const a = null == (t = this.animationList[n]) ? void 0 : t.clips;
                if (this.playAnimationAdditive)
                    for (let i = 0; i < a.length; i++) {
                        const t = a[i];
                        t && this.animationList[n].getState(t.name).stop()
                    } else {
                        const t = l.isNumber(i) ? i : 0;
                        t >= 0 && t < a.length && a[t] && this.animationList[n].getState(a[t].name).stop()
                    }
            }
        }
        clearCallback() {
            for (let i = 0; i < this.animationList.length; i++) this.animationEndCallback = null
        }
        _onAnimationFinished(...i) {
            const t = i[1];
            for (let i = 0; i < this.animationList.length; i++) {
                const n = this.animationList[i].clips,
                    a = n.indexOf(t.clip);
                a > -1 && a + 1 < n.length && this.play(a + 1)
            }
            this.animationEndCallback && this.animationEndCallback(i)
        }
    }).prototype, "animationList", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), d = t(p.prototype, "playAnimationAdditive", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), h = p)) || h));
    a._RF.pop()
}