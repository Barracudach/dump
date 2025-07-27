import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as u from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as l from "./HoldemTournamentDetailsRankingRow.js";
import * as o from "./StringTools.js";
import * as s from "./CurrencyValue.js";

function main() {
    var c, p, h, d, v, f, g, m;
    r._RF.push({}, "06ca0cGveZBWKfvru5z5NJY", "HoldemTournamentDetailsRankingRowLandscape", void 0);
    const {
        ccclass: y,
        property: D
    } = u;
    t("default", (c = D(n), p = D(i), h = D(s), y((f = e((v = class extends l {
        constructor(...t) {
            super(...t), a(this, "avatarSprite", f, this), a(this, "defaultPhoto", g, this), a(this, "hunterCurrencyValue", m, this)
        }
        setData(t) {
            super.setData(t);
            let e = cc_mtt.vv.DataManager.getAvatarId(t.AvatarId, t.userId);
            this.loadAvatar(cc_mtt.vv.AssetsManager.getAvatarUrl(e, {
                isThumbnails: !0,
                timestamp: t.userId === cc_mtt.vv.DataManager.userId ? Date.now() : null
            }))
        }
        getRankString(t) {
            return o.getOrinalNumberText(t)
        }
        loadAvatar(t) {
            this.loadDefaultPhoto(), cc_mtt.vv.AssetsManager.loadWebImage(this.avatarSprite, t, this.defaultPhoto, (t => {
                this.avatarSprite.spriteFrame = new i, this.avatarSprite.spriteFrame.texture = t
            }), (t => {
                this.loadDefaultPhoto()
            }))
        }
        loadDefaultPhoto() {
            this.avatarSprite.spriteFrame = this.defaultPhoto
        }
        setHunterValue(t) {
            const e = this.getCurrency();
            this.hunterCurrencyValue.updateVal(t, e, null, this.getDisplayCurrency())
        }
    }).prototype, "avatarSprite", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = e(v.prototype, "defaultPhoto", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = e(v.prototype, "hunterCurrencyValue", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = v)) || d));
    r._RF.pop()
}