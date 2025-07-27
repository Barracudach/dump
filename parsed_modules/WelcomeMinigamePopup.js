import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./AppConfig.js";
import * as h from "./cv.js";
import * as f from "./IntroMinigamePopup.js";
import * as m from "./MiniGamePopupManager.js";
import * as d from "./Enum.js";

function main() {
    var g, C, y, b, x, M, w, I, P, W, v, z;
    i._RF.push({}, "2ff190A+sdJcomXas10bEw4", "WelcomeMinigamePopup", void 0);
    const {
        ccclass: L,
        property: _
    } = l;
    e("default", (g = _(o), C = _([r]), y = _(s), b = _(c), x = _(c), L((I = t((w = class extends f {
        constructor(...e) {
            super(...e), n(this, "btPlay", I, this), n(this, "richTexts", P, this), n(this, "scrollContent", W, this), n(this, "textWelcome", v, this), n(this, "textWelcomeClone", z, this), this.paddingRight = 100, this.paddingLeft = 252
        }
        start() {
            this.btPlay.node.on("click", (e => {
                h.MessageCenter.send("onSureCallback")
            })), p.Instance.isLandscapeLayout || (this.richTexts.forEach((e => {
                e.maxWidth = a.getVisibleSize().width - this.paddingLeft - this.paddingRight
            })), this.textWelcome && this.textWelcomeClone && a.getVisibleSize().width > this.textWelcomeClone.node.getComponent(u).width && (this.textWelcome.node.getComponent(u).width = this.textWelcomeClone.node.getComponent(u).width), this.scrollContent && this.scheduleOnce((() => {
                this.scrollContent.parent.getComponent(u).height = this.scrollContent.getComponent(u).height, h.MessageCenter.send("onRefeshLayout")
            }), .1))
        }
        initMexicoInfo() {
            const e = h.miniGamePopupManager.getCurGamePopupId();
            h.dataHandler.getUserData().getCountryCurrency().type === d.MXN && h.appConfig.getLobbyConfig().casino.showMXNInfo ? (this.mxnCurrencyInfo.setKey("Mexico_currency_Info"), this.mxnCurrencyInfo.node.active = !0) : e === m.WelcomePokerFlip ? (this.mxnCurrencyInfo.setKey("minigame_intro_4"), this.mxnCurrencyInfo.node.active = !0) : this.mxnCurrencyInfo.node.active = !1
        }
    }).prototype, "btPlay", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(w.prototype, "richTexts", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), W = t(w.prototype, "scrollContent", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(w.prototype, "textWelcome", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(w.prototype, "textWelcomeClone", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = w)) || M));
    i._RF.pop()
}