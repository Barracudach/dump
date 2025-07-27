import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as g from "./ThemeSystem.js";
import * as c from "./Tools.js";
import * as f from "./cv.js";
import * as p from "./Pb.js";
import * as d from "./observer.js";

function main() {
    var T, L, S, m, y, w, _, B, A, z, F, P, v, H, R, D, I, O, k, x, C, J, V, j, E, M, N, q;
    l._RF.push({}, "8ab0596H7FJwLiyn2hJmLvy", "Holdem_PlayerTags_ts", void 0);
    const {
        ccclass: G,
        property: K
    } = o;
    t("Holdem_PlayerTags", (T = K(a), L = K(a), S = K(r), m = K(r), y = K([n]), w = K([n]), _ = K(r), B = K(s), A = K(r), z = K(n), F = K(n), P = K(n), v = K(n), G(H = d((D = e((R = class extends u {
        constructor(...t) {
            super(...t), i(this, "leftTag", D, this), i(this, "rightTag", I, this), i(this, "foldLabel", O, this), i(this, "defaultLabel", k, this), i(this, "bubbleLeft", x, this), i(this, "bubbleRight", C, this), i(this, "rightLabel", J, this), i(this, "leftTagPos", V, this), i(this, "leftLabel", j, this), i(this, "tipBgStatusAllIn", E, this), i(this, "tipBgStatusRaise", M, this), i(this, "tipBgStatusFold", N, this), i(this, "tipBgStatusBetOrST", q, this), this._stateLabel = null, this._isFlat = !1, this._isShowingHideAnim = !1
        }
        set stateLabel(t) {
            this._stateLabel = t, this.leftLabel.string = t, this.rightLabel.string = t
        }
        get stateLabel() {
            return this._stateLabel
        }
        getDefaultLabelString() {
            return this.defaultLabel.string
        }
        set isFlat(t) {
            this._isFlat = t
        }
        get isFlat() {
            return this._isFlat
        }
        onLoad() {
            this.leftTagPos = this.leftTag.node.getPosition(), this.hideAll()
        }
        hideAll() {
            this.clearTagsSprite(), !this._isShowingHideAnim && this.leftTag.node.active && (this._isShowingHideAnim = !0, f.tools.hideActionLabel(this.leftTag.node, this.leftTagPos, (() => {
                this._isShowingHideAnim = !1
            })))
        }
        clearTagsSprite() {}
        setTabSprite(t, e, i) {
            let l = this.tipBgStatusBetOrST;
            const {
                Action: a
            } = p.holdem;
            switch (i) {
                case a.ALL_IN:
                    l = this.tipBgStatusAllIn;
                    break;
                case a.RAISE:
                    l = this.tipBgStatusRaise;
                    break;
                case a.FOLD:
                    l = this.tipBgStatusFold
            }
            if (b(l)) t.spriteFrame = l;
            else {
                let e = t.node.getComponent(g);
                c.loadTipBg([e], i, !0)
            }
        }
        setTagSprite(t, e) {
            let i = t ? this.leftTag : this.rightTag;
            this.setTabSprite(i, t, e)
        }
        activeLeftTag(t) {
            this.leftTag.node.active = !0, h.stopAllByTarget(this.leftTag.node), f.tools.showActionLabel(this.leftTag.node, this.leftTagPos)
        }
    }).prototype, "leftTag", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(R.prototype, "rightTag", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(R.prototype, "foldLabel", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(R.prototype, "defaultLabel", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(R.prototype, "bubbleLeft", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), C = e(R.prototype, "bubbleRight", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), J = e(R.prototype, "rightLabel", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(R.prototype, "leftTagPos", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new s(172, -79)
        }
    }), j = e(R.prototype, "leftLabel", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(R.prototype, "tipBgStatusAllIn", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(R.prototype, "tipBgStatusRaise", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(R.prototype, "tipBgStatusFold", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(R.prototype, "tipBgStatusBetOrST", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = R)) || H) || H));
    l._RF.pop()
}