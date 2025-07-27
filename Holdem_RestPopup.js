import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./AnalyticsHandler.js";
import * as c from "./cv.js";
import * as h from "./i18nText.js";

function main() {
    var b, p, g, m, f, C, S, T, d, y, R, v, L, w, z, P, G, x, A, M, _, D, E, B, H, k, I, N, q, J, j, F, U;
    n._RF.push({}, "81ac0AuOWBKxaZfGSLobl4H", "Holdem_RestPopup", void 0);
    const {
        ccclass: K,
        property: O
    } = s;
    e("default", (b = O(r), p = O(o), g = O(r), m = O(r), f = O(r), C = O(r), S = O(r), T = O(r), d = O(r), y = O(o), R = O(r), v = O(r), L = O(r), w = O(r), z = O(o), K(((U = class extends a {
        constructor(...e) {
            super(...e), i(this, "PreRest", x, this), i(this, "PreRestLabel", A, this), i(this, "InRest", M, this), i(this, "Prepare", _, this), i(this, "Shadow", D, this), i(this, "Background", E, this), i(this, "ContentText", B, this), i(this, "ContentLineSpacing", H, this), i(this, "ContentTime", k, this), i(this, "ContentTimeLabel", I, this), i(this, "StaticContent", N, this), i(this, "Title", q, this), i(this, "Line", J, this), i(this, "CrossSell", j, this), i(this, "RememberLabel", F, this), this.restTime = 0, this.restDuration = 0, this.isShowCrossSell = !0
        }
        start() {}
        onEnable() {
            c.MessageCenter.register(c.config.CHANGE_LANGUAGE, this.onChangeLanguage.bind(this), this.node)
        }
        onDisable() {
            c.MessageCenter.unregister(c.config.CHANGE_LANGUAGE, this.node)
        }
        setStypeRestMessage(e, t = !0, i = !0, n = !0) {
            this.node.active = !0, this.isShowCrossSell = n, e ? (this.PreRest.active = !0, this.InRest.active = !1) : (this.PreRest.active = !1, this.InRest.active = !0, t ? (this.StaticContent.active = i, this.ContentTime.active = !0, this.Title.active = i, this.Line.active = i, l(this.ContentLineSpacing) && (this.ContentLineSpacing.active = !i)) : (this.StaticContent.active = !1, this.ContentTime.active = !1), this.updateCrossSellButtons()), u.getInstance().sendEvent(c.Enum.CurrentScreen.room, c.Enum.segmentEvent.PromotionShown, c.Enum.Functionality.crossell, {
                game: "mtt",
                context: "ClickThePopUp"
            }), this.updateRememberLabel()
        }
        updateRememberLabel() {
            this.RememberLabel.string = c.StringTools.formatC(c.config.getStringData("Remember_return_game"), this.restDuration)
        }
        onChangeLanguage() {
            this.updateRememberLabel()
        }
        updateCrossSellButtons() {
            this.CrossSell && (this.CrossSell.active = this.isShowCrossSell && c.appConfig.getGameConfig().enableCrossSellInMTTBreak && c.getTotalOpeningGames() < c.appConfig.getGameConfig().gameTablesConcurrent.maxConcurrent, this.Line.active = this.Line.active && !this.CrossSell.active)
        }
        setRichTextRestMessage(e, t) {
            this.ContentText.getComponent(h) && this.ContentText.getComponent(h).setKey(e), c.StringTools.setThemeSystemRichText(this.ContentText, t)
        }
        setTitleRestMessage(e) {
            this.Title.getComponent(o).string = e
        }
        countDownRest() {
            this.updateCrossSellButtons();
            let e = Math.floor((this.restTime - cc_mtt.vv.DataManager.getNow().getTime()) / 1e3);
            if (0 === this.restTime || e <= 0) return this.unschedule(this.countDownRest), void(this.node.active = !1);
            const t = Math.floor(e / 60),
                i = e % 60;
            let n = (Array(2).join("0") + t).slice(-2) + ":" + (Array(2).join("0") + i).slice(-2);
            this.ContentTimeLabel.string = n
        }
    }).requestingJoinCasinoGame = !1, U.requestingJoinPaceGame = !1, U.requestingJoinGlobalSpinGame = !1, U.requestingJoinPokerMasterGame = !1, x = t((G = U).prototype, "PreRest", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(G.prototype, "PreRestLabel", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(G.prototype, "InRest", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(G.prototype, "Prepare", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(G.prototype, "Shadow", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(G.prototype, "Background", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(G.prototype, "ContentText", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(G.prototype, "ContentLineSpacing", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(G.prototype, "ContentTime", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(G.prototype, "ContentTimeLabel", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(G.prototype, "StaticContent", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(G.prototype, "Title", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(G.prototype, "Line", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(G.prototype, "CrossSell", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(G.prototype, "RememberLabel", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = G)) || P));
    n._RF.pop()
}