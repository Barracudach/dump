import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./CommonScriptsDependencies.js";
import * as c from "./LocalizationController.js";
import * as u from "./CustomSpriteFrameSet.js";

function main() {
    var d, m, h, S, f, g, F;
    r._RF.push({}, "a8b29ksbj5N164SrgGM5Gu5", "CustomLocalizedSprite", void 0);
    const {
        ccclass: C,
        property: z,
        disallowMultiple: L,
        menu: b
    } = n;
    e("default", (d = b("Custom UI/CustomLocalizedSprite"), m = z([u]), h = z(s), C(S = L(S = d((g = t((f = class extends o {
        constructor(...e) {
            super(...e), i(this, "spriteFrameSet", g, this), i(this, "sprite", F, this)
        }
        onLoad() {
            this.fetchRender()
        }
        fetchRender() {
            this.sprite || (this.sprite = this.getComponent(s)), a(this.sprite) ? l.isInit() ? this.updateSprite(c.getInstance().convertLangCodeToMTTCode(l.getDeps().getUserLanguage())) : p("CommonScriptsDependencies not initialized CustomLocalizedSprite::fetchRender") : p("Failed to update localized sprite, sprite component is invalid!")
        }
        getSpriteFrameByLang(e) {
            for (let t = 0; t < this.spriteFrameSet.length; ++t)
                if (this.spriteFrameSet[t].language === e) return this.spriteFrameSet[t].spriteFrame
        }
        updateSprite(e) {
            if (!this.sprite) return void p("Failed to update localized sprite, sprite component is invalid!");
            let t = this.getSpriteFrameByLang(e);
            !t && this.spriteFrameSet[0] && (t = this.spriteFrameSet[0].spriteFrame), this.sprite.spriteFrame = t
        }
    }).prototype, "spriteFrameSet", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), F = t(f.prototype, "sprite", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = f)) || S) || S) || S));
    r._RF.pop()
}