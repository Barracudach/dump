import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
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
import * as d from "./Enum.js";
import * as m from "./Enum.js";
import * as g from "./i18nText.js";
import * as b from "./cv.js";

function main() {
    var f, C, N, y, T, _, E, F, S, v, w, B, z, R, G, D, k, A;
    n._RF.push({}, "80531T0lNhDMaAu1zb5VsUI", "MiniGameRuleHandItem", void 0);
    const {
        ccclass: L,
        property: P
    } = s;
    e("default", (f = P(o), C = P(r), N = P(r), y = P(l), T = P(l), _ = P([a]), E = P([a]), F = P([a]), L((w = t((v = class extends u {
        constructor(...e) {
            super(...e), i(this, "labelName", w, this), i(this, "cardContainer", B, this), i(this, "helpBtnNode", z, this), i(this, "redColor", R, this), i(this, "blackColor", G, this), i(this, "redNumbSpriteFrames", D, this), i(this, "blackNumbSpriteFrames", k, this), i(this, "suitSpriteFrames", A, this), this._rulePanel = null, this._info = null
        }
        init(e, t) {
            var i;
            this._info = e, this._rulePanel = t;
            let n = null == (i = this.labelName) ? void 0 : i.getComponent(g),
                o = b.config.getCurrentLanguage();
            var l;
            (b.appConfig.getGameConfig().miniGameConfig.useOnlyEnglishForGameRule && o != m.zh_CN && (null == n || n.setOptionUseEngTextOnly(!0)), null == n || n.setKey(e.name), this.cardContainer.children.forEach(((t, i) => {
                if (i >= e.cards.length) return void(t.active = !1);
                t.active = !0;
                const n = t.getChildByName("num").getComponent(p),
                    o = t.getChildByName("suitParent").getChildByName("suit").getComponent(p),
                    r = e.cards[i].suit,
                    l = r == d.CARD_HEART || r == d.CARD_DIAMOND,
                    a = l ? this.redNumbSpriteFrames : this.blackNumbSpriteFrames;
                n.spriteFrame = a[e.cards[i].num], o.spriteFrame = this.suitSpriteFrames[r], o.node.getComponent(h).color = l ? this.redColor : this.blackColor
            })), b.appConfig.isLandscapeLayout) && (this.helpBtnNode.on(r.EventType.MOUSE_ENTER, this.showToolTip, this), this.helpBtnNode.on(r.EventType.MOUSE_LEAVE, this.hideToolTip, this), null == (l = this.helpBtnNode.getComponent(c)) || l.destroy())
        }
        showToolTip(e) {
            console.log("showToolTip: " + this.helpBtnNode.uuid);
            const t = b.config.getCurrentLanguage();
            this._rulePanel.showTooltip(this.helpBtnNode, b.config.getStringData(this._info.tooltip, !1, "", b.appConfig.getGameConfig().miniGameConfig.useOnlyEnglishForGameRule && t != m.zh_CN))
        }
        hideToolTip(e) {
            console.log("hide tooltip: " + this.helpBtnNode.uuid), this._rulePanel.hideToolTip()
        }
        onHelpClicked() {
            this.showToolTip()
        }
    }).prototype, "labelName", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(v.prototype, "cardContainer", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(v.prototype, "helpBtnNode", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(v.prototype, "redColor", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(v.prototype, "blackColor", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(v.prototype, "redNumbSpriteFrames", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), k = t(v.prototype, "blackNumbSpriteFrames", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), A = t(v.prototype, "suitSpriteFrames", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), S = v)) || S));
    n._RF.pop()
}