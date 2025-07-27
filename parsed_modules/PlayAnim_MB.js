import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var h, d, m, u, p, c, f, y, L, A, N, b, F, g, P, E, C, w, S;
    n._RF.push({}, "7af11xOegJL2qlfxWk/tGWJ", "PlayAnim_MB", void 0);
    const {
        ccclass: B,
        property: v,
        menu: T
    } = a;
    i("default", (h = T("Animation/PlayAnim"), d = v({
        displayName: "Show Animtion List",
        tooltip: "Show the Animator's Node too.\r----------\r(Becareful, the Animator MAY NOT be the parent UI Node.)"
    }), m = v({
        displayName: "Hide Animtion List onFinished",
        tooltip: "Hide the Animator's Node too when Finished animations.\r----------\r(Becareful, the Animator MAY NOT be the parent UI Node.)"
    }), u = v({
        tooltip: "Play animation clip while another is currently playing.\r----------\rUseful for Loop animations"
    }), p = v({
        type: o,
        displayName: "Animtion List",
        tooltip: "Animations to animate."
    }), c = v({
        tooltip: "Animation Clip Name to Play.\r----------\rIf blank, it will play Clip 0."
    }), f = v({
        type: s,
        min: 0,
        tooltip: "Set the time to JUMP TO and play."
    }), y = v({
        type: s,
        min: 0,
        tooltip: "Delay before starting Animation."
    }), L = v({
        type: l,
        tooltip: "Run a Button after animation finished.\r----------\r(When ANY animation finished first)"
    }), B(A = h((b = t((N = class extends r {
        constructor(...i) {
            super(...i), e(this, "ShowNodeList", b, this), e(this, "HideNodeListOnFinished", F, this), e(this, "PlayAdditive", g, this), e(this, "nodeList", P, this), e(this, "PlayClipName", E, this), e(this, "PlayheadStartTime", C, this), e(this, "delay", w, this), e(this, "EmitButtonAfterFinished", S, this), this.FinishCallback = null
        }
        _onFinished() {
            if (console.log("_onFinished triggered"), 1 == this.HideNodeListOnFinished)
                for (let i = 0; i < this.nodeList.length; i++) this.nodeList[i].node.active = !1, console.log("HideNodeListOnFinished: " + this.nodeList[i].node.name);
            if (null != this.EmitButtonAfterFinished) {
                for (let i = 0; i < this.EmitButtonAfterFinished.clickEvents.length; i++) this.EmitButtonAfterFinished.clickEvents[i].emit([]);
                console.log("EmitButtonAfterFinished: " + this.EmitButtonAfterFinished.name)
            }
            this.FinishCallback && this.FinishCallback(), console.log("UN---REGISTERRED _onFinished!!!!!!!!!!!!!");
            for (let i = 0; i < this.nodeList.length; i++) this.nodeList[i].off(o.EventType.FINISHED, this._onFinished, this)
        }
        playAnimation() {
            this.scheduleOnce((() => {
                if (1 == this.HideNodeListOnFinished || null != this.EmitButtonAfterFinished)
                    for (let i = 0; i < this.nodeList.length; i++) null != this.nodeList[i] && this.nodeList[i].once(o.EventType.FINISHED, this._onFinished, this), console.log("REGISTERRED _onFinished: " + this.nodeList[i].name);
                for (let i = 0; i < this.nodeList.length; i++) {
                    if (!this.nodeList[i]) return;
                    if (1 == this.ShowNodeList && (this.nodeList[i].node.active = !0), "" == this.PlayClipName) {
                        const t = this.nodeList[i].clips;
                        this.nodeList[i].crossFade(t[0].name, this.PlayheadStartTime), console.log("No ClipNames specified, playing Clip 0: " + t[0].name)
                    } else 1 == this.PlayAdditive ? (this.nodeList[i].crossFade(this.PlayClipName, this.PlayheadStartTime), console.log("Play Additive Anim Name: " + this.PlayClipName + ".anim from " + this.nodeList[i].node.name)) : (this.nodeList[i].crossFade(this.PlayClipName, this.PlayheadStartTime), console.log("Play Anim Name: " + this.PlayClipName + ".anim from " + this.nodeList[i].node.name))
                }
            }), this.delay)
        }
    }).prototype, "ShowNodeList", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), F = t(N.prototype, "HideNodeListOnFinished", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), g = t(N.prototype, "PlayAdditive", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), P = t(N.prototype, "nodeList", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), E = t(N.prototype, "PlayClipName", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), C = t(N.prototype, "PlayheadStartTime", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), w = t(N.prototype, "delay", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), S = t(N.prototype, "EmitButtonAfterFinished", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = N)) || A) || A));
    n._RF.pop()
}