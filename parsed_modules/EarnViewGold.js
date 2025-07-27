import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./cv.js";
import * as l from "./CurrencyValue.js";

function main() {
    var d, g, c, h, p, C, f, _, b, m, y, v, S, w;
    i._RF.push({}, "9e28cU0kwFJ56imz3fT3rEY", "EarnViewGold", void 0);
    const {
        ccclass: U,
        property: D
    } = r;
    e("EarnViewGold", (d = D(l), g = D(o), c = D(s), h = D(o), p = D(o), C = D(s), U((b = t((_ = class extends a {
        constructor(...e) {
            super(...e), n(this, "totalAmount", b, this), n(this, "goldCoins_node", m, this), n(this, "goldCoins_amount", y, this), n(this, "casinoCoins_node", v, this), n(this, "usdt_node", S, this), n(this, "usdt_amount", w, this)
        }
        onLoad() {
            this.registerMsg()
        }
        onEnable() {
            this.noticeUpdateData(), this.onUpdateConfig(), u.MessageCenter.register(u.Enum.MessageCenterAction.OnUpdateServerConfigSuccess, this.onUpdateConfig.bind(this), this)
        }
        onUpdateConfig() {
            this.usdt_node && (this.usdt_node.active = u.appConfig.getWalletConfig().haveUSDTCurrency), this.casinoCoins_node && (this.casinoCoins_node.active = u.appConfig.getLobbyConfig().showCasinoCoin), this.goldCoins_node && (this.goldCoins_node.active = u.appConfig.getLobbyConfig().casino.showPrimary || u.appConfig.getWalletConfig().haveUSDTCurrency)
        }
        onDisable() {
            u.MessageCenter.unregister(u.Enum.MessageCenterAction.OnUpdateServerConfigSuccess, this)
        }
        onDestroy() {
            this.unregisterMsg()
        }
        registerMsg() {
            u.MessageCenter.register("update_info", this.noticeUpdateData.bind(this), this.node), u.MessageCenter.register("update_gold", this.noticeUpdateData.bind(this), this.node)
        }
        unregisterMsg() {
            u.MessageCenter.unregister("update_info", this.node), u.MessageCenter.unregister("update_gold", this.node)
        }
        noticeUpdateData() {
            this.totalAmount.value = u.StringTools.serverGoldToShowString(u.dataHandler.getUserData().total_amount), this.goldCoins_amount && this.goldCoins_amount.node.activeInHierarchy && (this.goldCoins_amount.string = u.StringTools.serverGoldToShowString(u.dataHandler.getUserData().u32Chips)), this.usdt_amount && this.usdt_amount.node.activeInHierarchy && (this.usdt_amount.string = u.StringTools.serverGoldToShowString(u.dataHandler.getUserData().usdt))
        }
        onBtnExplainGoldCoins() {
            u.AudioMgr.playButtonSound("button_click.mp3")
        }
    }).prototype, "totalAmount", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(_.prototype, "goldCoins_node", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(_.prototype, "goldCoins_amount", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(_.prototype, "casinoCoins_node", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(_.prototype, "usdt_node", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(_.prototype, "usdt_amount", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = _)) || f));
    i._RF.pop()
}