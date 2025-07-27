import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var S, c, b, f, m, y, D, d, g, k, w, A, L, N, z, _, C, v;
    n._RF.push({}, "f6ab7ODBvNNMauLO7RPB6Wq", "PlaySpine_Skin_Animation", void 0);
    const {
        ccclass: H,
        property: P
    } = p;
    e("default", (S = P(l), c = P(a.SkeletonData), b = P(a.Skeleton), f = P(r), m = P(r), y = P(o), D = P({
        type: s,
        visible: !1,
        min: 0
    }), d = P(u), H((w = i((k = class extends h {
        constructor(...e) {
            super(...e), t(this, "nodeList", w, this), t(this, "SkeletonDataList", A, this), t(this, "Spine", L, this), t(this, "DefaultSkin", N, this), t(this, "AnimationName", z, this), t(this, "SpineHideDelay", _, this), t(this, "ShowAll", C, this), t(this, "SpineName", v, this)
        }
        PlaySpine_SkinAndAnim() {
            this.Spine.setSkin(this.DefaultSkin), this.Spine.animation = this.AnimationName, -1 == this.SpineHideDelay && (this.SpineHideDelay = 999999999999999), this.Spine.setCompleteListener((() => {
                this.scheduleOnce((function() {
                    for (let e = 0; e < this.nodeList.length; e++) this.nodeList[e].active = !1
                }), this.SpineHideDelay)
            }))
        }
        SetNextSpineFile() {
            this.ShowAll >= this.SkeletonDataList.length ? this.SpineName.string = "No More" : (this.SpineName.string = this.ShowAll + ") " + this.SkeletonDataList[this.ShowAll].name, this.Spine.skeletonData = this.SkeletonDataList[this.ShowAll], this.ShowAll++)
        }
    }).prototype, "nodeList", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), A = i(k.prototype, "SkeletonDataList", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return [null]
        }
    }), L = i(k.prototype, "Spine", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = i(k.prototype, "DefaultSkin", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), z = i(k.prototype, "AnimationName", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), _ = i(k.prototype, "SpineHideDelay", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return -1
        }
    }), C = i(k.prototype, "ShowAll", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), v = i(k.prototype, "SpineName", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = k)) || g));
    n._RF.pop()
}