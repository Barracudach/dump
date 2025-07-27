import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./FontSystem.js";
import * as c from "./cv.js";
import * as u from "./i18nText.js";
import * as p from "./LobbyHelper.js";
import * as b from "./LobbyTypes.js";

function main() {
    var h, g, f, T, d, m, S, L, y;
    n._RF.push({}, "ca263Gcgl1KUpsGtFw65K1+", "HomePokerButton", void 0);
    const {
        ccclass: B,
        property: _
    } = r;
    t("HomePokerButton", (h = B("HomePokerButton"), g = _(o), f = _(o), T = _(s), h((S = e((m = class extends a {
        constructor(...t) {
            super(...t), i(this, "bgSprite", S, this), i(this, "iconSprite", L, this), i(this, "titleLabel", y, this), this.bgName = "", this.TITLE_FONT_SIZE_TABLET = 72
        }
        onLoad() {
            this.bgSprite && (this.bgName = this.bgSprite.spriteFrame.name), c.config.isIPadDesign(this.node) && this.onUpdateDesign(!0)
        }
        setupTabBtn(t) {
            if (this.bgSprite) {
                const e = c.config.isIPadDesign(this.node);
                c.resMgr.loadHomeButtonBg(t, e, [this.bgSprite], null, (() => {
                    this.node.active = !1
                }))
            }
            if (this.iconSprite && c.resMgr.loadHomeButtonIcon(t, [this.iconSprite], null, (() => {
                    this.node.active = !1
                })), this.titleLabel) {
                const e = this.titleLabel.getComponent(u);
                if (e) {
                    const i = p.getI18nKeyOfGameTypeNameByName(t === b.MTT ? b.TOURNEY : t);
                    e.setKey(i)
                }
            }
        }
        onUpdateDesign(t) {
            t && this.updateFontSizeTablet()
        }
        updateFontSizeTablet() {
            if (this.titleLabel) {
                const t = this.titleLabel.node.getComponent(l);
                t && (this.titleLabel.lineHeight = this.TITLE_FONT_SIZE_TABLET, t.fontSize = this.TITLE_FONT_SIZE_TABLET)
            }
        }
    }).prototype, "bgSprite", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(m.prototype, "iconSprite", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(m.prototype, "titleLabel", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = m)) || d));
    n._RF.pop()
}