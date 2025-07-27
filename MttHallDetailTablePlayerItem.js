import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./FormatParser.js";
import * as p from "./MttItemRenderHelper.js";
import * as u from "./cv.js";

function main() {
    var b, h, g, m, y, d, f, F, L, S, P;
    i._RF.push({}, "b1016U/uVVHmL04r3yburBO", "MttHallDetailTablePlayerItem", void 0);
    const {
        ccclass: N,
        property: k
    } = s;
    t("MttHallDetailTablePlayerItem", (b = N("MttHallDetailTablePlayerItem"), h = k(r), g = k(l), m = k(n), y = k(n), b((F = e((f = class extends o {
        constructor(...t) {
            super(...t), a(this, "nationFlagSprite", F, this), a(this, "nationFlagSpriteAtlas", L, this), a(this, "playerNameLabel", S, this), a(this, "stackLabel", P, this), this._bigBlind = 0
        }
        render(t, e) {
            this._bigBlind = e, this.setNationFlag(t.areaCode, t.area), this.setPlayerName(t.playerName), this.setStack(t.coins)
        }
        setNationFlag(t, e = "") {
            u.appConfig.isLandscapeLayout || (this.nationFlagSprite.node.active = !1), p.getNationFlag(t, e).then((t => {
                this.nationFlagSprite.spriteFrame = t, this.nationFlagSprite.node.active = !0
            })).catch((() => {
                this.nationFlagSprite.node.active = !1
            }))
        }
        setPlayerName(t) {
            this.playerNameLabel && (this.playerNameLabel.string = t)
        }
        setStack(t) {
            this.stackLabel && (this.stackLabel.string = c.ThousandPointFormat(t, 0), this._bigBlind && (this.stackLabel.string += ` (${c.ThousandPointFormat(t/this._bigBlind,1)} BB)`))
        }
    }).prototype, "nationFlagSprite", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(f.prototype, "nationFlagSpriteAtlas", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(f.prototype, "playerNameLabel", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(f.prototype, "stackLabel", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = f)) || d));
    i._RF.pop()
}