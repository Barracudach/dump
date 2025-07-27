import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as y from "./RankingBox.js";
import * as m from "./Holdem_Celebrity_Audio.js";

function main() {
    var f, _, v, w, k, A, P, I, B, D, x, F, M, z, S, R, L, C, H, N, E, U, G, O, T, V, W, j, X, q;
    r._RF.push({}, "488abgkcOFAc4Biom4gg6f9", "Holdem_PlayerAvatar_ts", void 0);
    const {
        ccclass: J,
        property: K
    } = h;
    t("Holdem_PlayerAvatar", (f = K(o), _ = K(a), v = K(n), w = K(l), k = K(l), A = K(o), P = K(n), I = K(o), B = K(n), D = K(s), x = K([u]), F = K(m), M = K({
        type: n,
        tooltip: "bg node which enable when avatar set to gray (e.g fold)"
    }), z = K(u), J((L = e((R = class extends c {
        constructor(...t) {
            super(...t), i(this, "sprite", L, this), i(this, "allinMode", C, this), i(this, "rankingNode", H, this), this.rankingBox = null, i(this, "rankingLabel", N, this), i(this, "stateMsg", E, this), i(this, "koStatus", U, this), i(this, "autoPlayNode", G, this), i(this, "userBoarder", O, this), i(this, "userBoarderFlat", T, this), i(this, "userDarkMode", V, this), i(this, "imageFrame", W, this), i(this, "celebrityAudioIcon", j, this), i(this, "borderGray", X, this), this._url = "", i(this, "_defaultPhoto", q, this), this._allowShowingAvatar = !0, this._playerPhoto = null
        }
        get isDark() {
            return !!this.sprite && !this.userDarkMode.interactable
        }
        set isDark(t) {
            this.sprite && (this.sprite.node.getComponent(s).interactable = !t, this.userDarkMode.interactable = !t)
        }
        onDestroy() {
            cc_mtt.vv.ConsoleLog.log("onDestroy Holdem_PlayerAvatar"), this.releaseImage()
        }
        onLoad() {
            this._defaultPhoto = this.sprite.spriteFrame, p(this.allinMode) && (this.allinMode.node.active = !1)
        }
        loadDefaultPhoto() {
            this.sprite.spriteFrame = this._defaultPhoto
        }
        releaseImage() {
            p(this.sprite) && this.sprite.webImageUrl && cc_mtt.vv.AssetsManager.releaseWebImage(this.sprite.webImageUrl)
        }
        load(t) {
            this._playerPhoto = null, this.loadDefaultPhoto(), cc_mtt.vv.ConsoleLog.log("PlayerAvatar load", t), this._url = t, cc_mtt.vv.AssetsManager.loadWebImage(this.sprite, t, this._defaultPhoto, (t => {
                this._playerPhoto = new u, this._playerPhoto.texture = t, this._allowShowingAvatar && (this.sprite.spriteFrame = this._playerPhoto), d("TEXTURE URL:", t.nativeUrl, t._uuid)
            }), (() => {
                p(this.sprite, !0) && this.sprite.currentWebImageUrl == this._url && this._playerPhoto && this._allowShowingAvatar && this.loadDefaultPhoto()
            })), this.allinMode.once(a.EventType.FINISHED, (() => {}))
        }
        loadStar(t) {
            cc_mtt.vv.ConsoleLog.log("PlayerAvatar loadStar", t), this._url = t, cc_mtt.vv.AssetsManager.loadWebImage(this.userBoarder, t, this._defaultPhoto, (t => {
                this.userBoarder.spriteFrame = new u, this.userBoarder.spriteFrame.texture = t
            })), this.allinMode.once(a.EventType.FINISHED, (() => {}))
        }
        ranking(t) {
            this.rankingBox && (this.showRanking(!0), this.rankingBox.setRanking(t))
        }
        showRanking(t) {
            this.rankingBox && (this.rankingBox.node.active = t)
        }
        createRankingBox(t) {
            let e = g(t);
            e && (this.rankingBox = e.getComponent(y), this.rankingBox && (this.rankingBox.node.parent = this.rankingNode, this.rankingBox.node.position = new b(0, 120)))
        }
        showAllInAnimation(t, e = !1) {}
        activeCelebrityAudioIcon(t) {
            p(this.celebrityAudioIcon) && this.celebrityAudioIcon.setActiveAudioIcon(t)
        }
        onAudioVolumeIndication(t = !1) {
            p(this.celebrityAudioIcon) && this.celebrityAudioIcon.onAudioVolumeIndication(t)
        }
        showAvatar(t) {
            this._allowShowingAvatar = t, t && this._playerPhoto ? this.sprite.spriteFrame = this._playerPhoto : this.loadDefaultPhoto(), this.scheduleOnce((() => {
                var t;
                const e = null == (t = this.sprite) || null == (t = t.node) ? void 0 : t.parent;
                p(e) && (e.active = !1, e.active = !0)
            }), .1)
        }
        setGrayScale(t) {
            this.sprite.grayscale = t, p(this.borderGray) && (this.borderGray.active = t)
        }
    }).prototype, "sprite", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(R.prototype, "allinMode", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(R.prototype, "rankingNode", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(R.prototype, "rankingLabel", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(R.prototype, "stateMsg", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(R.prototype, "koStatus", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(R.prototype, "autoPlayNode", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(R.prototype, "userBoarder", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(R.prototype, "userBoarderFlat", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(R.prototype, "userDarkMode", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(R.prototype, "imageFrame", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), j = e(R.prototype, "celebrityAudioIcon", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(R.prototype, "borderGray", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), e(R.prototype, "isDark", [K], Object.getOwnPropertyDescriptor(R.prototype, "isDark"), R.prototype), q = e(R.prototype, "_defaultPhoto", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = R)) || S));
    r._RF.pop()
}