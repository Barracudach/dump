import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as _ from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as r from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./cv.js";

function main() {
    var m, d, S, C, f, y, I, g, D;
    s._RF.push({}, "bd1cct5/VhF2IhTcmBgGKYw", "GiftAnim", void 0);
    const {
        ccclass: T,
        property: E
    } = c;
    i("GiftAnim", (m = E(l), d = E(n), S = E([a]), T(((D = class i extends h {
        constructor(...i) {
            super(...i), e(this, "txt", y, this), e(this, "hitScaleAnim", I, this), e(this, "bgNodes", g, this), this._loopWaitTime = 5, this._isSpecial = !1, this._anim = null, this._clips = [], this._particles = [], this._finishCallBack = null, this._playEndClicpCallBack = null
        }
        play(i, t, e, s, l, n = !1) {
            let a = new o(o.ZERO);
            this.node.parent.getComponent(p).convertToNodeSpaceAR(i, a), this.node.setPosition(a), this.node.active = !0, this._finishCallBack = l, this._playEndClicpCallBack = s;
            let c = 1,
                h = !0;
            switch (t) {
                case u.Enum.SeatDriction.DRICTION_LEFT_MIDDLEDOWN:
                case u.Enum.SeatDriction.DRICTION_LEFT_UP:
                    c = this._isSpecial ? .4 : .6, h = !1;
                    break;
                case u.Enum.SeatDriction.DRICTION_RIGHT_MIDDLEDOWN:
                case u.Enum.SeatDriction.DRICTION_RIGHT_UP:
                case u.Enum.SeatDriction.DRICTION_TOP_RIGHT:
                    c = this._isSpecial ? .4 : .6, h = !1;
                    break;
                case u.Enum.SeatDriction.DRICTION_TOP_LEFT:
                case u.Enum.SeatDriction.DRICTION_BOTTOM:
            }
            this.node.setScale(new o(c, c));
            for (let i = 0; i < this.bgNodes.length; ++i) this.bgNodes[i].active = h;
            this._isSpecial || (this.txt.node.active = !0, this.txt.string = `x${e}`), n && this._isSpecial && this._anim.getState(this._anim.name).clip ? (this._playHitScaleAnim(e), this._resetLoopClipSchedule()) : this._playStartClip(e)
        }
        stop() {
            this._anim.stop();
            for (let i = 0; i < this._particles.length; ++i) this._particles[i].stopSystem(), this._particles[i].node.active = !1;
            this.txt.node.active = !1, this._anim.node.active = !1, this._anim.node.targetOff(this), this.unscheduleAllCallbacks(), this._finishCallBack = null, this._playEndClicpCallBack = null
        }
        onLoad() {
            this.txt.node.active = !1, this._anim = this.node.getComponent(n), this._clips = this._anim.clips, this._isSpecial = this._clips.length > 1;
            let i = t => {
                let e = t.getComponent(r);
                e && this._particles.push(e);
                for (let e = 0; e < t.children.length; ++e) i(t.children[e])
            };
            i(this.node)
        }
        start() {}
        reuse() {
            console.log(`${i.g_class_name} - pool node reuse`)
        }
        unuse() {
            console.log(`${i.g_class_name} - pool node unuse`), this.stop()
        }
        _playHitScaleAnim(i) {
            this.scheduleOnce((() => {
                this.txt.node.active = !0, this.txt.string = `x${i}`, this.hitScaleAnim && this.hitScaleAnim.play()
            }), .4)
        }
        _playStartClip(i) {
            for (let i = 0; i < this._particles.length; ++i) this._particles[i].node.parent.active && (this._particles[i].node.active = !0, this._particles[i].resetSystem());
            this._anim.play(this._clips[0].name), this._anim.on(n.EventType.FINISHED, ((i, t) => {
                if (this._anim.off(n.EventType.FINISHED), this._isSpecial) {
                    let i = this._anim.clips[1];
                    i.wrapMode = _.WrapMode.Loop, this._anim.play(i.name);
                    let t = this._loopWaitTime - this._clips[0].duration;
                    this._resetLoopClipSchedule(t)
                } else this._finishCallBack && this._finishCallBack()
            }), this), this._isSpecial && i > 1 && this._playHitScaleAnim(i)
        }
        _resetLoopClipSchedule(i = this._loopWaitTime) {
            this.unschedule(this._onLoopClipSchedule), this.scheduleOnce(this._onLoopClipSchedule, i)
        }
        _onLoopClipSchedule() {
            let i = this._clips[2];
            i ? (this._anim.play(i.name), this._playEndClicpCallBack && this._playEndClicpCallBack(), this._anim.on(n.EventType.FINISHED, ((i, t) => {
                this._anim.off(n.EventType.FINISHED), this._finishCallBack && this._finishCallBack()
            }), this)) : this._finishCallBack && this._finishCallBack()
        }
    }).g_class_name = "GiftAnim", y = t((f = D).prototype, "txt", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(f.prototype, "hitScaleAnim", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(f.prototype, "bgNodes", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), C = f)) || C));
    s._RF.pop()
}