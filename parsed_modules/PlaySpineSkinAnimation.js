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

function main() {
    var p, f, S, m, d, b, y, L, g, D, w, A, k, N, z, B, F, E, v, C, H, P;
    n._RF.push({}, "a86feJsxudDZalB15wihVt1", "PlaySpineSkinAnimation", void 0);
    const {
        ccclass: _,
        property: I
    } = h;
    i("default", (p = I(o), f = I(l), S = I(r.Skeleton), m = I(s), d = I(s), b = I(a), y = I(o), L = I(a), g = I(a), D = I(u), _((k = e((A = class extends c {
        constructor(...i) {
            super(...i), t(this, "ShowNodeList", k, this), t(this, "nodeList", N, this), t(this, "SpineList", z, this), t(this, "DefaultSkin", B, this), t(this, "AnimationName", F, this), t(this, "TimeScale", E, this), t(this, "Loop", v, this), t(this, "SpineShowDelay", C, this), t(this, "SpineHideDelay", H, this), t(this, "EmitButtonAfterFinished", P, this)
        }
        PlaySpine_SkinAndAnim() {
            this.SpineShowDelay < 0 && (this.SpineShowDelay = 0), this.scheduleOnce((function() {
                if (1 == this.ShowNodeList)
                    for (let i = 0; i < this.nodeList.length; i++) this.nodeList[i].active = !0;
                for (let i = 0; i < this.SpineList.length; i++) this.SpineList[i].setSkin(this.DefaultSkin), this.SpineList[i].setAnimation(0, this.AnimationName, this.Loop).timeScale = this.TimeScale
            }), this.SpineShowDelay), this.SpineHideDelay < 0 && (this.SpineHideDelay = 999999999999999), console.log("PLAYING " + this.DefaultSkin + ", " + this.AnimationName), this.SpineList[0].setCompleteListener((() => {
                if (console.log("FINISHED PLAYING " + this.DefaultSkin + ", " + this.AnimationName), this.scheduleOnce((function() {
                        for (let i = 0; i < this.nodeList.length; i++) this.nodeList[i].active = !1
                    }), this.SpineHideDelay), null != this.EmitButtonAfterFinished) {
                    for (let i = 0; i < this.EmitButtonAfterFinished.clickEvents.length; i++) this.EmitButtonAfterFinished.clickEvents[i].emit([]);
                    console.log("EmitButtonAfterFinished: " + this.EmitButtonAfterFinished.name)
                }
            }))
        }
    }).prototype, "ShowNodeList", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), N = e(A.prototype, "nodeList", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), z = e(A.prototype, "SpineList", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), B = e(A.prototype, "DefaultSkin", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return "default"
        }
    }), F = e(A.prototype, "AnimationName", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), E = e(A.prototype, "TimeScale", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1
        }
    }), v = e(A.prototype, "Loop", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), C = e(A.prototype, "SpineShowDelay", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), H = e(A.prototype, "SpineHideDelay", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return -1
        }
    }), P = e(A.prototype, "EmitButtonAfterFinished", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = A)) || w));
    n._RF.pop()
}