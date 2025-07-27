import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var r, d, m, u, c, p, f, y, F, L, N, g, A, E, b, P, _, v;
    n._RF.push({}, "be5deqrKupN64KQfJRTR7Gd", "PlayAnim_New", void 0);
    const {
        ccclass: C,
        property: O
    } = a;
    i("default", (r = O({
        displayName: "Show Animtion List",
        tooltip: "Show the Animator's Node too.\r----------\r(Becareful, the Animator MAY NOT be the parent UI Node.)"
    }), d = O({
        displayName: "Hide Animtion List onFinished",
        tooltip: "Hide the Animator's Node too when Finished animations.\r----------\r(Becareful, the Animator MAY NOT be the parent UI Node.)"
    }), m = O({
        tooltip: "Play animation clip while another is currently playing.\r----------\rUseful for Loop animations"
    }), u = O({
        tooltip: "Play animation automatically without external call."
    }), c = O({
        type: s,
        displayName: "Animtion List",
        tooltip: "Animations to animate."
    }), p = O({
        tooltip: "Animation Clip Name to Play.\r----------\rIf blank, it will play Clip 0."
    }), f = O({
        type: o,
        min: 0,
        tooltip: "Delay before starting Animation."
    }), y = O({
        type: l,
        tooltip: "Run a Button after animation finished.\r----------\r(When ANY animation finished first)"
    }), C((N = t((L = class extends h {
        constructor(...i) {
            super(...i), e(this, "ShowNodeList", N, this), e(this, "HideNodeListOnFinished", g, this), e(this, "PlayAdditive", A, this), e(this, "autoPlayAnimation", E, this), e(this, "nodeList", b, this), e(this, "PlayClipName", P, this), e(this, "delay", _, this), e(this, "EmitButtonAfterFinished", v, this), this._customOnFinish = null
        }
        start() {
            this.autoPlayAnimation && this.playAnimation()
        }
        _onFinished() {
            if (console.log("_onFinished triggered"), 1 == this.HideNodeListOnFinished)
                for (let i = 0; i < this.nodeList.length; i++) this.nodeList[i].node.active = !1, console.log("HideNodeListOnFinished: " + this.nodeList[i].node.name);
            if (null != this.EmitButtonAfterFinished) {
                for (let i = 0; i < this.EmitButtonAfterFinished.clickEvents.length; i++) this.EmitButtonAfterFinished.clickEvents[i].emit([]);
                console.log("EmitButtonAfterFinished: " + this.EmitButtonAfterFinished.name)
            }
            console.log("UN---REGISTERRED _onFinished!!!!!!!!!!!!!");
            for (let i = 0; i < this.nodeList.length; i++) this.nodeList[i].off(s.EventType.FINISHED, this._onFinished, this);
            null != this._customOnFinish && (this._customOnFinish(), this._customOnFinish = null)
        }
        SetCallback(i) {
            this._customOnFinish = i
        }
        playAnimation() {
            this.scheduleOnce((() => {
                if (1 == this.HideNodeListOnFinished || null != this.EmitButtonAfterFinished)
                    for (let i = 0; i < this.nodeList.length; i++) null != this.nodeList[i] && this.nodeList[i].once(s.EventType.FINISHED, this._onFinished, this), console.log("REGISTERRED _onFinished: " + this.nodeList[i].name);
                for (let i = 0; i < this.nodeList.length; i++) {
                    if (!this.nodeList[i]) return;
                    if (1 == this.ShowNodeList && (this.nodeList[i].node.active = !0), "" == this.PlayClipName) {
                        const t = this.nodeList[i].clips;
                        this.nodeList[i].play(t[0].name), console.log("No ClipNames specified, playing Clip 0: " + t[0].name)
                    } else if (1 == this.PlayAdditive) {
                        this.nodeList[i].getState(this.PlayClipName) && (this.nodeList[i].getState(this.PlayClipName).isPlaying || (this.nodeList[i].getState(this.PlayClipName).play(), console.log("Play Additive Anim Name: " + this.PlayClipName + ".anim from " + this.nodeList[i].node.name)))
                    } else this.nodeList[i].play(this.PlayClipName), console.log("Play Anim Name: " + this.PlayClipName + ".anim from " + this.nodeList[i].node.name)
                }
            }), this.delay)
        }
        moveToLastFrame() {
            for (let i = 0; i < this.nodeList.length; i++) {
                const t = this.nodeList[i];
                if (!t) continue;
                const e = this.PlayClipName ? t.getState(this.PlayClipName) : t.clips[0] && t.getState(t.clips[0].name);
                e && (e.time = e.duration, e.sample())
            }
            if (this.HideNodeListOnFinished)
                for (let i = 0; i < this.nodeList.length; i++) {
                    const t = this.nodeList[i];
                    t && (t.node.active = !1)
                }
            if (this.EmitButtonAfterFinished)
                for (let i = 0; i < this.EmitButtonAfterFinished.clickEvents.length; i++) this.EmitButtonAfterFinished.clickEvents[i].emit([]);
            this._customOnFinish && (this._customOnFinish(), this._customOnFinish = null);
            for (let i = 0; i < this.nodeList.length; i++) {
                const t = this.nodeList[i];
                t && t.off(s.EventType.FINISHED, this._onFinished, this)
            }
        }
        playAnimationStopAtFirstFrame() {
            for (let i = 0; i < this.nodeList.length; i++) {
                const t = this.nodeList[i];
                if (!t) continue;
                const e = this.PlayClipName ? t.getState(this.PlayClipName) : t.clips[0] && t.getState(t.clips[0].name);
                if (e) {
                    if (e.play(), e.time = 0, e.sample(), e.stop(), this.HideNodeListOnFinished)
                        for (let i = 0; i < this.nodeList.length; i++) this.nodeList[i].node.active = !1;
                    if (this.EmitButtonAfterFinished)
                        for (let i = 0; i < this.EmitButtonAfterFinished.clickEvents.length; i++) this.EmitButtonAfterFinished.clickEvents[i].emit([]);
                    this._customOnFinish && (this._customOnFinish(), this._customOnFinish = null)
                }
            }
        }
    }).prototype, "ShowNodeList", [r], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), g = t(L.prototype, "HideNodeListOnFinished", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), A = t(L.prototype, "PlayAdditive", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), E = t(L.prototype, "autoPlayAnimation", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), b = t(L.prototype, "nodeList", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), P = t(L.prototype, "PlayClipName", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), _ = t(L.prototype, "delay", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), v = t(L.prototype, "EmitButtonAfterFinished", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = L)) || F));
    n._RF.pop()
}