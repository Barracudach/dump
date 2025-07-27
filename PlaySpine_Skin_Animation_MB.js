import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var f, m, S, d, b, y, g, L, A, w, D, k, B, F, z, C, N, _, E, H, v, P, I, M;
    n._RF.push({}, "51b3cgYizJFj5dHdH/N3ocS", "PlaySpine_Skin_Animation_MB", void 0);
    const {
        ccclass: T,
        property: Y
    } = c;
    i("default", (f = Y(o), m = Y(l), S = Y(r.Skeleton), d = Y(s), b = Y(s), y = Y(a), g = Y(o), L = Y(a), A = Y(a), w = Y(u), D = Y(h), T((F = e((B = class extends p {
        constructor(...i) {
            super(...i), t(this, "ShowNodeList", F, this), t(this, "nodeList", z, this), t(this, "SpineList", C, this), t(this, "DefaultSkin", N, this), t(this, "AnimationName", _, this), t(this, "TimeScale", E, this), t(this, "Loop", H, this), t(this, "SpineShowDelay", v, this), t(this, "SpineHideDelay", P, this), t(this, "EmitButtonAfterFinished", I, this), t(this, "Comments", M, this), this.FinishedCallBack = null
        }
        PlaySpine_SkinAndAnim() {
            this.scheduleOnce((function() {
                if (1 == this.ShowNodeList)
                    for (let i = 0; i < this.nodeList.length; i++) this.nodeList[i].active = !0;
                for (let i = 0; i < this.SpineList.length; i++) this.SpineList[i].setSkin(this.DefaultSkin), this.SpineList[i].setAnimation(0, this.AnimationName, this.Loop).timeScale = this.TimeScale
            }), this.SpineShowDelay), -1 == this.SpineHideDelay && (this.SpineHideDelay = 999999999999999), console.log("PLAYING " + this.DefaultSkin + ", " + this.AnimationName), this.SpineList[0].setCompleteListener((() => {
                if (console.log("FINISHED PLAYING " + this.DefaultSkin + ", " + this.AnimationName), this.scheduleOnce((function() {
                        for (let i = 0; i < this.nodeList.length; i++) this.nodeList[i].active = !1
                    }), this.SpineHideDelay), null != this.EmitButtonAfterFinished) {
                    for (let i = 0; i < this.EmitButtonAfterFinished.clickEvents.length; i++) this.EmitButtonAfterFinished.clickEvents[i].emit([]);
                    console.log("EmitButtonAfterFinished: " + this.EmitButtonAfterFinished.name)
                }
                this.FinishedCallBack && this.FinishedCallBack()
            }))
        }
    }).prototype, "ShowNodeList", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), z = e(B.prototype, "nodeList", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), C = e(B.prototype, "SpineList", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), N = e(B.prototype, "DefaultSkin", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return "default"
        }
    }), _ = e(B.prototype, "AnimationName", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), E = e(B.prototype, "TimeScale", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1
        }
    }), H = e(B.prototype, "Loop", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), v = e(B.prototype, "SpineShowDelay", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), P = e(B.prototype, "SpineHideDelay", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return -1
        }
    }), I = e(B.prototype, "EmitButtonAfterFinished", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(B.prototype, "Comments", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = B)) || k));
    n._RF.pop()
}