import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as a from "./cv.js";
import * as l from "./USDTAndCoin.js";

function main() {
    var r, s, o, c, u, d, h, g;
    n._RF.push({}, "458d2egOc5MM70DVEL3gLQy", "JackfruitBuyinExchange", void 0);
    const {
        ccclass: p,
        property: x
    } = cc._decorator;
    e("default", (r = x(cc.Node), s = x(cc.Label), o = x(cc.Label), p((d = t((u = class extends l {
        constructor(...e) {
            super(...e), i(this, "explainNode", d, this), i(this, "usdtBalanceText", h, this), i(this, "userBalanceNum", g, this)
        }
        onLoad() {}
        start() {
            super.start(), this.switchTab(0)
        }
        initLanguage() {
            this.usdtBalanceText.string = a.config.getStringData("USDTView_usdt_balance_label"), super.initLanguage()
        }
        initExplanTxtLanguage() {
            this.explanText.destroyAllChildren(), this.explanText.removeAllChildren(!0);
            let e = a.config.getStringData("USDTView_explan_label").split("\n");
            if (0 == e.length) return;
            let t = this.explainNode.getChildByName("txt_item");
            for (let i = 0; i < e.length; ++i) {
                let n = cc.instantiate(t),
                    l = a.resMgr.getLabelStringSize(n.children[1].getComponent(cc.Label), e[i]);
                n.height = l.height, n.active = !0, this.explanText.addChild(n)
            }
        }
        updateCoinAndUSDT() {
            this.userBalanceNum.string = a.StringTools.serverGoldToShowString(a.dataHandler.getUserData().usdt)
        }
        onUSDT2CoinEx(e) {
            this.onHiddenExplain(), super.onUSDT2CoinEx(e)
        }
        onUSDT2CoinAll(e) {
            this.onHiddenExplain(), super.onUSDT2CoinAll(e)
        }
        show() {
            this.node.active = !0, this.resetTabTestExNum(0), this.onHiddenExplain(), this.requestTabHuilv(0)
        }
        onShowExplain() {
            this.explainNode.active = !0
        }
        onHiddenExplain() {
            this.explainNode.active = !1
        }
        switchTab(e) {
            0 != e && 1 != e || this.select_index == e || (this.select_index = e, this.coinNode && (this.coinNode.active = 0 == e), this.usdtNode && (this.usdtNode.active = 1 == e))
        }
        getTabExBtnLanguage() {
            return a.config.getStringData("USDTView_exchange_btn_label")
        }
    }).prototype, "explainNode", [r], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = t(u.prototype, "usdtBalanceText", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(u.prototype, "userBalanceNum", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = u)) || c));
    n._RF.pop()
}