import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./Enum.js";
import * as c from "./Enum.js";
import * as p from "./cv.js";

function main() {
    var g, h, b, m, y, d, f, S;
    r._RF.push({}, "8b53aG0X81PZ6g9rnE5cosK", "JackpotSngGameListItem", void 0);
    const {
        ccclass: L,
        property: v
    } = o;
    t("default", (g = v(n), h = v([a]), b = v(s), L((d = e((y = class extends u {
        constructor(...t) {
            super(...t), i(this, "bg", d, this), i(this, "bgSpriteFrame", f, this), i(this, "buyIn", S, this), this.gameListPage = null, this.data = null, this.currency = c.USD
        }
        init() {}
        setGameListPage(t) {
            this.gameListPage = t
        }
        setData(t) {
            this.data = t
        }
        setTicket() {}
        setBackground(t) {
            this.bg.spriteFrame = this.bgSpriteFrame[t]
        }
        setBuyIn(t) {
            var e;
            const i = null == (e = l[this.currency]) ? void 0 : e.symbol;
            this.buyIn.string = `${i}${t}`
        }
        onClick() {
            p.dataHandler.getUserData().showTouristLimited() ? p.authenticator.autoShowBuyInSNG = this.data : this.gameListPage.showSignUp(this.data, !0)
        }
    }).prototype, "bg", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = e(y.prototype, "bgSpriteFrame", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), S = e(y.prototype, "buyIn", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = y)) || m));
    r._RF.pop()
}