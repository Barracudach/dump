import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./PlayAnim_MB.js";

function main() {
    var p, v, m, d, y, f, b, g, _, A;
    r._RF.push({}, "79fb3TPHLZMHa0WSNepBcuc", "MysteryBountyWinners", void 0);
    const {
        ccclass: P,
        property: L
    } = n;
    t("MysteryBountyWinners", (p = L(i), v = L(s), m = L(o), d = L(o), P((b = e((f = class extends l {
        constructor(...t) {
            super(...t), a(this, "nameLabel", b, this), a(this, "avatar", g, this), a(this, "starAvatar", _, this), a(this, "sprite", A, this), this._defaultPhoto = null, this._url = ""
        }
        onLoad() {
            this._defaultPhoto = this.sprite.spriteFrame
        }
        onDestroy() {
            cc_mtt.vv.ConsoleLog.log("onDestroy MysteryBountyWinners avatar"), cc_mtt.vv.AssetsManager.releaseWebImage(this._url)
        }
        show() {
            this.node.getComponent(h).playAnimation()
        }
        initNode(t, e, a) {
            this._url = t, this.setName(a), this.load(t), this.loadStar(e)
        }
        loadDefaultPhoto() {
            this.sprite.spriteFrame = this._defaultPhoto
        }
        load(t) {
            this.loadDefaultPhoto(), cc_mtt.vv.ConsoleLog.log("PlayerAvatar load", t), cc_mtt.vv.AssetsManager.loadWebImage(this.sprite, t, this._defaultPhoto, (t => {
                this.sprite.spriteFrame = new u, this.sprite.spriteFrame.texture = t
            }), null, 4, !1)
        }
        loadStar(t) {
            cc_mtt.vv.ConsoleLog.log("PlayerAvatar loadStar", t), this.starAvatar.node.active = !1, cc_mtt.vv.AssetsManager.loadWebImage(this.starAvatar, t, null, (t => {
                c(this.starAvatar) && (this.starAvatar.node.active = !0, this.starAvatar.spriteFrame = new u, this.starAvatar.spriteFrame.texture = t)
            }), null, 4, !1)
        }
        setName(t) {
            this.nameLabel.string = t
        }
    }).prototype, "nameLabel", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = e(f.prototype, "avatar", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = e(f.prototype, "starAvatar", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(f.prototype, "sprite", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = f)) || y));
    r._RF.pop()
}