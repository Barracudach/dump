import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./cv.js";

function main() {
    var d, m, f, b, y, L, g, A, P, T, D, _, v, x, z, C, E, F, w, S;
    n._RF.push({}, "38962IqxflCQ4OEnD8kLZlM", "WPTOBombPotAnim", void 0);
    const {
        ccclass: I,
        property: N
    } = h;
    i("default", (d = N(l), m = N([s]), f = N([o]), b = N([r]), y = N([r]), L = N(a), g = N(a), A = N(a), P = N(a), I((_ = e((D = class extends c {
        constructor(...i) {
            super(...i), t(this, "nodeAnimList", _, this), t(this, "nodeParticle2DList", v, this), t(this, "nodeLocalised", x, this), t(this, "line1Texts", z, this), t(this, "line2Texts", C, this), t(this, "line1", E, this), t(this, "line1Copy", F, this), t(this, "line2", w, this), t(this, "line2Copy", S, this), this._delayInSec = 3.3
        }
        onLoad() {
            this.node.active = !1
        }
        onEnable() {
            for (let i = 0; i < this.nodeAnimList.length; i++) null != this.nodeAnimList[i] && this.nodeAnimList[i].on(l.EventType.FINISHED, this._onFinished, this)
        }
        onDisable() {
            for (let i = 0; i < this.nodeAnimList.length; i++) null != this.nodeAnimList[i] && this.nodeAnimList[i].off(l.EventType.FINISHED, this._onFinished, this)
        }
        playBombAnim() {
            this.node.active = !0;
            let i = 0;
            p.config.getCurrentLanguage() != p.Enum.LANGUAGE_TYPE.zh_CN && p.config.getCurrentLanguage() != p.Enum.LANGUAGE_TYPE.zh_TW || (i = 1);
            for (let e = 0; e < this.nodeLocalised.length; e++) this.nodeLocalised[e].active = i == e;
            this.line1.spriteFrame = this.line1Texts[i], this.line1Copy.spriteFrame = this.line1Texts[i], this.line2.spriteFrame = this.line2Texts[i], this.line2Copy.spriteFrame = this.line2Texts[i], this.line1.node.active = 1 != i, this.playAnimation(), this.playParticles2D(), this.hide()
        }
        hide() {
            this.unscheduleAllCallbacks(), this.scheduleOnce((() => {
                this.node.active = !1
            }), this._delayInSec)
        }
        _onFinished(...i) {
            const e = i[1];
            for (let i = 0; i < this.nodeAnimList.length; i++) {
                const t = this.nodeAnimList[i].clips,
                    n = t.indexOf(e.clip);
                n > -1 && n + 1 < t.length && this.playAnimation(n + 1)
            }
        }
        playAnimation(i) {
            for (let e = 0; e < this.nodeAnimList.length; e++) {
                if (!this.nodeAnimList[e]) return;
                const t = this.nodeAnimList[e].clips,
                    n = u.isNumber(i) ? i : 0;
                n >= 0 && n < t.length && this.nodeAnimList[e].play(t[n].name)
            }
        }
        playParticles2D() {
            if (this.nodeParticle2DList && 0 != this.nodeParticle2DList.length)
                for (let i = 0; i < this.nodeParticle2DList.length; i++);
        }
    }).prototype, "nodeAnimList", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), v = e(D.prototype, "nodeParticle2DList", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), x = e(D.prototype, "nodeLocalised", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), z = e(D.prototype, "line1Texts", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), C = e(D.prototype, "line2Texts", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), E = e(D.prototype, "line1", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(D.prototype, "line1Copy", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(D.prototype, "line2", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(D.prototype, "line2Copy", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = D)) || T));
    n._RF.pop()
}