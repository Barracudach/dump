import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./NodePage.js";
import * as c from "./mttconfig.js";
import * as u from "./FormatParser.js";
import * as f from "./Translator.js";

function main() {
    var h, p, d, g, m, b, v, I, y, _, U, T, G, D, N, w;
    a._RF.push({}, "d89a8NnvVRLr6UutOna606q", "GiftRecordTuple", void 0);
    const {
        ccclass: z,
        property: F
    } = l;
    t("GiftRecordTuple", (h = F(r), p = F(o), d = F(r), g = F(r), m = F(r), b = F(o), v = F(r), z((_ = e((y = class extends n {
        constructor(...t) {
            super(...t), i(this, "giftDate", _, this), i(this, "avatar", U, this), i(this, "playerName", T, this), i(this, "playerId", G, this), i(this, "giftGold", D, this), i(this, "toolIcon", N, this), i(this, "toolName", w, this), this._tupleId = 0, this._toolUrl = "", this._avatarUrl = "", this.defaultIcon = null
        }
        onLoad() {
            this.defaultIcon = this.toolIcon.spriteFrame
        }
        start() {}
        showGift(t, e = 0, i, a) {
            if (this.giftGold.node.parent.active = t, this.toolName.node.parent.active = !t, t) this.giftGold.string = u.DisplayGold(e).toString();
            else if (this.toolName.string = i, a && a.length > 0) {
                this._toolUrl = c.avatarHost + a, cc_mtt.vv.AssetsManager.loadWebImage(this.toolIcon, this._toolUrl) || (this.toolIcon.spriteFrame = this.defaultIcon)
            } else this.toolIcon.spriteFrame = this.defaultIcon
        }
        setInfo(t, e, i) {
            this._tupleId = e;
            let a = t.Gift;
            if (a.Created) {
                let [t, e] = s.handleTimeLabel(a.Created), [i, r, o] = s.handleDateLabel(a.Created);
                this.giftDate.string = `${i}-${r}-${o} ${t}:${e}`
            } else this.giftDate.string = "";
            this._avatarUrl = cc_mtt.vv.AssetsManager.getAvatarUrl(cc_mtt.vv.DataManager.getAvatarId(t.ToUserAvatarUrl, a.ToUserId), {
                isThumbnails: !0,
                timestamp: a.ToUserId === cc_mtt.vv.DataManager.userId ? i : null
            }), cc_mtt.vv.AssetsManager.loadWebImage(this.avatar, this._avatarUrl, this.defaultIcon), this.playerName.string = t.ToUserNickname, this.playerId.string = f("PROFILE.ID") + a.ToUserId, this.showGift(a.Coins > 0, a.Coins, t.GiftToolName, t.GiftToolImgUrl)
        }
    }).prototype, "giftDate", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(y.prototype, "avatar", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(y.prototype, "playerName", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(y.prototype, "playerId", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(y.prototype, "giftGold", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(y.prototype, "toolIcon", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(y.prototype, "toolName", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = y)) || I));
    a._RF.pop()
}