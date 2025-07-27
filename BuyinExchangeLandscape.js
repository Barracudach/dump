import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as l from "./USDTViewLandscape.js";
import * as u from "./ThemeSystemType.js";

function main() {
    var d, h, p, g, f, T, b, y;
    a._RF.push({}, "92d9dgY4bJMHIrFJg24dxEq", "BuyinExchangeLandscape", void 0);
    const {
        ccclass: B,
        property: S
    } = r;
    e("BuyinExchangeLandscape", (d = S(n), h = S(n), p = S(s), B((T = t((f = class extends l {
        constructor(...e) {
            super(...e), i(this, "coinBalance", T, this), i(this, "usdtBalance", b, this), i(this, "lightNodes", y, this)
        }
        start() {
            super.start(), this.updateLightNode()
        }
        updateLightNode() {
            o(this.lightNodes) && c.appConfig.themeUse === u.WPTODark && this.lightNodes.forEach((e => {
                o(e) && (e.active = !1)
            }))
        }
        updateCoinAndUSDT() {
            this.usdtBalance && (this.usdtBalance.string = c.StringTools.serverGoldToShowString(c.dataHandler.getUserData().usdt)), this.coinBalance && (this.coinBalance.string = c.StringTools.serverGoldToShowString(c.dataHandler.getUserData().u32Chips))
        }
        switchTab(e) {
            0 != e && 1 != e || (this.select_index = e, this.resetTabTestExNum(e), this.requestTabHuilv(e))
        }
    }).prototype, "coinBalance", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = t(f.prototype, "usdtBalance", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(f.prototype, "lightNodes", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), g = f)) || g));
    a._RF.pop()
}