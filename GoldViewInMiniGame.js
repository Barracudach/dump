import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./Enum.js";
import * as u from "./cv.js";
import * as l from "./GoldView.js";
import * as h from "./DailyExchangeRate.js";

function main() {
    var d, g, f, m, p, C, y, b;
    i._RF.push({}, "55011uwSTxI2r1M2LVJdvDR", "GoldViewInMiniGame", void 0);
    const {
        ccclass: x,
        property: G
    } = r;
    e("GoldViewInMiniGame", (d = G(h), g = G(a), f = G(o), x((C = n((p = class extends l {
        constructor(...e) {
            super(...e), t(this, "exchangeRate", C, this), t(this, "mxCurrency", y, this), t(this, "btnExchangeInfo", b, this)
        }
        onLoad() {
            u.appConfig.getGameConfig().miniGameConfig.useSharePlayerPool && (this.main_currency.updateVal("0", c.CNY), this.exchangeRate && (this.exchangeRate.node.active = !0)), super.onLoad()
        }
        onEnable() {
            this.updateUserCoin(), u.MessageCenter.register("UpdateMiniGameCoin", this.updateUserCoin.bind(this), this.node), this.btnExchangeInfo.node.on(o.EventType.CLICK, (e => {
                u.MessageCenter.send("onClickedExchangeRate")
            }), this)
        }
        onDisable() {
            u.MessageCenter.unregister("UpdateMiniGameCoin", this.node), s(this.btnExchangeInfo, !0) && s(this.btnExchangeInfo.node, !0) && this.btnExchangeInfo.node.off(o.EventType.CLICK)
        }
        updateUserCoin() {
            u.appConfig.getGameConfig().miniGameConfig.useSharePlayerPool ? this.setGoldNumber(u.dataHandler.getUserData().minigame_coin) : this.setGoldNumber(u.dataHandler.getUserData().total_amount), this.mxCurrency && (this.mxCurrency.active = u.appConfig.getGameConfig().miniGameConfig.showMexicoDisclaimerAndCurrencyConversion)
        }
        setGoldNumber(e) {
            this.main_currency && (this.main_currency.node.active = !0, this.main_currency.value = u.StringTools.numToFloatString(e))
        }
        UpdateUserInfo() {}
    }).prototype, "exchangeRate", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = n(p.prototype, "mxCurrency", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = n(p.prototype, "btnExchangeInfo", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = p)) || m));
    i._RF.pop()
}