import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cv.js";
import * as x from "./USDTAndCoin.js";

function main() {
    var b, f, _, T, S, m, y, N, v, C, D, E, w, L;
    n._RF.push({}, "09a2bIAHT1HorPiBms4pl0C", "HumanboyExchange", void 0);
    const {
        ccclass: B,
        property: H
    } = s;
    e("default", (b = H(a), f = H(o), _ = H(l), T = H(l), S = H(r), m = H(r), B((v = t((N = class extends x {
        constructor(...e) {
            super(...e), i(this, "topLayout", v, this), i(this, "titleSprite", C, this), i(this, "questionNode", D, this), i(this, "explainNode", E, this), i(this, "usdtBalanceText", w, this), i(this, "userBalanceNum", L, this), this._atlas_hb_exchange = null
        }
        onLoad() {}
        start() {
            super.start(), this.switchTab(0)
        }
        initLanguage() {
            this._atlas_hb_exchange = d.resMgr.getSpriteAtlas(d.config.getLanguagePath("game/humanboyPlist/exchangetexture")), d.resMgr.loadSpriteTextureByPlist(this._atlas_hb_exchange, this.titleSprite, "title_change_coin"), this.topLayout.updateLayout();
            let e = u(p.ZERO),
                t = u(p.ZERO);
            this.questionNode.getComponent(c).convertToWorldSpaceAR(u(p.ZERO), e), this.explainNode.getComponent(c).convertToNodeSpaceAR(e, t), h("exchange_explain_top", this.explainNode).position = new p(t.x, h("exchange_explain_top", this.explainNode).position.y, h("exchange_explain_top", this.explainNode).position.z), this.usdtBalanceText.string = d.config.getStringData("USDTView_usdt_balance_label"), super.initLanguage()
        }
        initExplanTxtLanguage() {
            this.explanText.destroyAllChildren(), this.explanText.removeAllChildren();
            let e = d.config.getStringData("USDTView_explan_label").split("\n");
            if (0 == e.length) return;
            let t = this.explainNode.getChildByName("txt_item");
            for (let i = 0; i < e.length; ++i) {
                let n = g(t),
                    a = d.resMgr.getLabelStringSize(n.children[1].getComponent(r), e[i]);
                n.getComponent(c).height = a.height, n.active = !0, this.explanText.addChild(n)
            }
        }
        getTabExBtnLanguage() {
            return d.config.getStringData("USDTView_exchange_btn_label")
        }
        updateCoinAndUSDT() {
            this.userBalanceNum.string = d.StringTools.serverGoldToShowString(d.dataHandler.getUserData().usdt)
        }
        onUSDT2CoinEx(e) {
            this.onHiddenExplain(), super.onUSDT2CoinEx(e)
        }
        onUSDT2CoinAll(e) {
            this.onHiddenExplain(), super.onUSDT2CoinAll(e)
        }
        openView() {
            this.node.active = !0, this.resetTabTestExNum(0), this.onHiddenExplain(), this.requestTabHuilv(0)
        }
        onClose() {
            this.node.active = !1
        }
        onShowExplain() {
            this.explainNode.active = !0
        }
        onHiddenExplain() {
            this.explainNode.active = !1
        }
    }).prototype, "topLayout", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(N.prototype, "titleSprite", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(N.prototype, "questionNode", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(N.prototype, "explainNode", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(N.prototype, "usdtBalanceText", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(N.prototype, "userBalanceNum", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = N)) || y));
    n._RF.pop()
}