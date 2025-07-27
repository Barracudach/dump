import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as C from "./observer.js";
import * as c from "./cv.js";
import * as d from "./Holdem_Card_ts.js";
import * as u from "./ThemeSystem.js";
import * as h from "./ColorSystemType.js";
import * as _ from "./ColorSystemTypeOther.js";

function main() {
    var m, p, T, S;
    s._RF.push({}, "088c9QvqANCep9ECjYqcu1y", "Holdem_Card_TableBar_ts", void 0);
    const {
        ccclass: E,
        property: f
    } = i;
    e("Holdem_Card_TableBar", (m = f(o), E(p = C((S = t((T = class extends d {
        constructor(...e) {
            super(...e), this.SIZE_CARD_ICON_W = 23.2, this.SIZE_CARD_ICON_H = 19.7, this.COLOR_CARD_SELECTED = (new a).fromHEX("#E1E1E1FE"), this.COLOR_CARD_UNSELECTED = (new a).fromHEX("#E1E1E17D"), r(this, "cardText", S, this)
        }
        onLoadInit() {
            super.onLoadInit(), this.setStatusCardSelect(!1)
        }
        loadCardFaceSpriteSucess() {
            null != this.sprite && (console.log("load sucess ....."), this.sprite.node.getComponent(n).setContentSize(this.SIZE_CARD_ICON_W, this.SIZE_CARD_ICON_H))
        }
        setCardFaceSprite(e) {
            let t = this.getCardNumberFromCardId(e);
            c.resMgr.loadCardFrontFromRes(this.cardFaceSetting, this.getCardSuitFromCardId(e), t, [this.sprite], this.loadCardFaceSpriteSucess.bind(this), null, "zh_CN/game/dzpoker/cardTableBar/"), this.setCardText(t)
        }
        setCardText(e) {
            if (null == this.cardText) return;
            let t = this.convertToCardText(e + 1);
            this.cardText.string = t
        }
        convertToCardText(e) {
            var t = "";
            if (e < 10) return "" + (e + 1).toString();
            switch (e) {
                case 10:
                    t = "J";
                    break;
                case 11:
                    t = "Q";
                    break;
                case 12:
                    t = "K";
                    break;
                case 13:
                    t = "A"
            }
            return t
        }
        setStatusCardSelect(e) {
            if (null == this.cardText || null == this.sprite) return;
            let t = this.getThemeSystem(this.cardText.node),
                r = this.getThemeSystem(this.sprite.node);
            this.setCustomColorTheme(t, e ? this.COLOR_CARD_SELECTED : this.COLOR_CARD_UNSELECTED), this.setCustomColorTheme(r, e ? this.COLOR_CARD_SELECTED : this.COLOR_CARD_UNSELECTED)
        }
        getThemeSystem(e) {
            return null == e ? null : e.getComponent(u)
        }
        setCustomColorTheme(e, t) {
            null != e && (e.customColor = t, e.setColorScheme(h.Other, _.Custom), e.node.getComponent(l).opacity = t.a)
        }
    }).prototype, "cardText", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = T)) || p) || p));
    s._RF.pop()
}