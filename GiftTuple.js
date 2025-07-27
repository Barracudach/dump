import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./mttconfig.js";
import * as c from "./NodePage.js";
import * as p from "./Translator.js";
import * as h from "./EventCustom.js";

function main() {
    var m, d, f, g, v, b, _, y, I, D;
    i._RF.push({}, "c70d322cwBNg7LCVJR05eKn", "GiftTuple", void 0);
    const {
        ccclass: w,
        property: C
    } = s;
    t("GiftTuple", (m = C(r), d = C(n), f = C(n), g = C(n), w((_ = e((b = class extends l {
        constructor(...t) {
            super(...t), a(this, "avatar", _, this), a(this, "playerName", y, this), a(this, "playerId", I, this), a(this, "mobile", D, this), this._imageUrl = "", this._tupleId = 0, this._tupleData = void 0, this._defaultIcon = void 0
        }
        onLoad() {
            this._defaultIcon = this.avatar.spriteFrame
        }
        onDestroy() {
            this._imageUrl && c.releaseImage(this._imageUrl)
        }
        setInfo(t, e, a) {
            this._tupleId = e, this._tupleData = t, this.avatar.spriteFrame = this._defaultIcon, this._imageUrl = cc_mtt.vv.AssetsManager.getAvatarUrl(cc_mtt.vv.DataManager.getAvatarId(t.avatar, t.userId), {
                isThumbnails: !0,
                timestamp: t.userId === cc_mtt.vv.DataManager.userId ? a : null
            }), this.playerName.string = t.nickname, this.playerId.string = p("PROFILE.ID") + t.userId, this.mobile.string = `${t.mobile}`
        }
        onTupleClicked() {
            c.coolDownButton(this.node.getComponent(o), this);
            let t = new h(u.showGiftPlayerEvent, !0);
            t.setUserData({
                data: this._tupleData,
                avatar: this.avatar.spriteFrame
            }), this.node.dispatchEvent(t)
        }
    }).prototype, "avatar", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(b.prototype, "playerName", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(b.prototype, "playerId", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(b.prototype, "mobile", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = b)) || v));
    i._RF.pop()
}