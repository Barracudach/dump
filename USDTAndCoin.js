import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./GameSceneInstance.js";
import * as d from "./cv.js";

function main() {
    var _, T, h, x, p, c, b, E;
    n._RF.push({}, "f208cZbyRpMea1hoWi2jzPM", "USDTAndCoin", void 0);
    const {
        ccclass: S,
        property: m
    } = s;
    t("default", (_ = m(o), T = m(o), h = m(o), S((c = e((p = class extends a {
        constructor(...t) {
            super(...t), i(this, "coinNode", c, this), i(this, "usdtNode", b, this), i(this, "explanText", E, this), this.usdt_2_coin_ex_val = 0, this.coin_2_usdt_ex_val = 0, this.usdt_2_coin_ex = "", this.coin_2_usdt_ex = "", this.select_index = -1, this.usdt_ex_min = 2e3, this.usdt_ex_max = 1e8, this.open_use_point = !1
        }
        onLoad() {}
        start() {
            this.registerMsg(), this.initLanguage(), this.updateCoinAndUSDT()
        }
        onDestroy() {
            d.MessageCenter.unregister(d.config.CHANGE_LANGUAGE, this.node), d.MessageCenter.unregister("onExchangeCurrencyResponse", this.node), d.MessageCenter.unregister("onGetScalerQuoteResponse", this.node), d.MessageCenter.unregister("update_info", this), d.MessageCenter.unregister("update_gold", this)
        }
        registerMsg() {
            d.MessageCenter.register(d.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node), d.MessageCenter.register("onExchangeCurrencyResponse", this.onTabExResponse.bind(this), this.node), d.MessageCenter.register("onGetScalerQuoteResponse", this.requestExRateResponse.bind(this), this.node), d.MessageCenter.register("update_info", this.updateCoinAndUSDT.bind(this), this), d.MessageCenter.register("update_gold", this.updateCoinAndUSDT.bind(this), this)
        }
        initLanguage() {
            this.initExplanTxtLanguage(null), this.initTabLanguage(0), this.initTabLanguage(1)
        }
        initTabLanguage(t) {
            let e = this.getTabNode(t);
            if (!e) return;
            let i = r("input_node", e);
            r("txt_from", i).getComponent(u).string = d.config.getStringData("USDTView_from_label"), r("txt_to", i).getComponent(u).string = d.config.getStringData("USDTView_to_label"), r("txt_coin", i).getComponent(u).string = d.config.getStringData("USDTView_coin_label"), r("button/Label", i).getComponent(u).string = d.config.getStringData("USDTView_all_label");
            let n = 0 == t ? r("input_node/editbox_usdt", e).getComponent(g) : r("input_node/editbox_coin", e).getComponent(g),
                o = 0 == t ? r("input_node/editbox_coin", e).getComponent(g) : r("input_node/editbox_usdt", e).getComponent(g);
            n.placeholder = d.config.getStringData("USDTView_input_num_label"), o.placeholder = d.config.getStringData("USDTView_exchange_num_label"), r("btn_ex/Background/Label", e).getComponent(u).string = this.getTabExBtnLanguage(), this.updateTabExHuilv(t)
        }
        initExplanTxtLanguage(t) {
            this.explanText.getComponent(u).string = d.config.getStringData("USDTView_explan_label")
        }
        getTabExBtnLanguage() {
            return d.config.getStringData("USDTView_exchange_label")
        }
        getTabNode(t) {
            return 0 != t && 1 != t ? null : 0 == t ? this.coinNode : this.usdtNode
        }
        getTabExHuilv(t) {
            return 0 != t && 1 != t ? "" : 0 == t ? this.usdt_2_coin_ex : this.coin_2_usdt_ex
        }
        getUSDT2CoinExRate() {
            return isNaN(this.usdt_2_coin_ex_val) || this.usdt_2_coin_ex_val <= 0 ? 0 : this.usdt_2_coin_ex_val
        }
        getCoin2USDTExRate() {
            return isNaN(this.coin_2_usdt_ex_val) || this.coin_2_usdt_ex_val <= 0 ? 0 : this.coin_2_usdt_ex_val
        }
        updateCoinAndUSDT() {}
        updateTabExHuilv(t) {
            let e = this.getTabNode(t);
            if (e) {
                let i = d.StringTools.formatC(d.config.getStringData("USDTView_usdt_coin_ex_label_" + t), this.getTabExHuilv(t)),
                    n = r("txt_huilv", e);
                n && (n.getComponent(u).string = i)
            }
        }
        updateTabTestExNum(t, e, i, n = !0) {
            if (!t || !e) return;
            let o = t.string;
            if (!this.checkTestExNumber(o) || isNaN(i) || i <= 0 || "" == o) return void(e.string = "");
            let s = parseFloat(o);
            if (isNaN(s) || s <= 0) e.string = "0";
            else {
                s = d.StringTools.serverGoldByClient(s), s = Math.floor(s);
                let t = i * s;
                t = n ? Math.floor(t) : Math.ceil(t), e.string = d.StringTools.numToFloatString(t)
            }
        }
        updateTabTestExNumPositive(t) {
            let e = this.getTabNode(t);
            if (!e) return;
            let i = 0 == t ? r("input_node/editbox_usdt", e).getComponent(g) : r("input_node/editbox_coin", e).getComponent(g),
                n = 0 == t ? r("input_node/editbox_coin", e).getComponent(g) : r("input_node/editbox_usdt", e).getComponent(g),
                o = 0 == t ? this.getUSDT2CoinExRate() : this.getCoin2USDTExRate();
            this.updateTabTestExNum(i, n, o)
        }
        resetTabTestExNum(t) {
            let e = this.getTabNode(t);
            e && (r("input_node/editbox_usdt", e).getComponent(g).string = "", r("input_node/editbox_coin", e).getComponent(g).string = "")
        }
        switchTab(t) {
            0 != t && 1 != t || this.select_index == t || (this.select_index = t, this.coinNode && (this.coinNode.active = 0 == t), this.usdtNode && (this.usdtNode.active = 1 == t), this.resetTabTestExNum(t), this.requestTabHuilv(t))
        }
        fixTabTestExNum(t) {
            if (!t) return;
            let e = t.string;
            if (!this.checkTestExNumber(e)) return void d.TT.showMsg(d.config.getStringData("USDTView_input_invalid_num_label"), d.Enum.ToastType.ToastTypeError);
            let i = e.indexOf(".");
            if (-1 != i) {
                e.length - 1 - i >= 3 && (t.string = e.slice(0, i + 3))
            }
        }
        onTestUSDT2Coin(t, e, i) {
            let n = parseInt(i);
            if (isNaN(n) || 0 != n && 1 != n) return;
            let o = e,
                s = this.getCoinsEditBox(n),
                a = 0 == n ? this.getUSDT2CoinExRate() : 0 == this.getCoin2USDTExRate() ? 0 : 1 / this.getCoin2USDTExRate(),
                r = 0 == n;
            this.fixTabTestExNum(o), this.updateTabTestExNum(o, s, a, r)
        }
        getCoinsEditBox(t) {
            return r("input_node/editbox_coin", this.getTabNode(t)).getComponent(g)
        }
        onTestCoin2USDT(t, e, i) {
            let n = parseInt(i);
            if (isNaN(n) || 0 != n && 1 != n) return;
            let o = e,
                s = this.getUSDTEditBox(n),
                a = 1 == n ? this.getCoin2USDTExRate() : 0 == this.getUSDT2CoinExRate() ? 0 : 1 / this.getUSDT2CoinExRate(),
                r = 1 == n;
            this.fixTabTestExNum(o), this.updateTabTestExNum(o, s, a, r)
        }
        getUSDTEditBox(t) {
            return r("input_node/editbox_usdt", this.getTabNode(t)).getComponent(g)
        }
        onEditBegin(t, e, i) {}
        checkTestExNumber(t) {
            return /(^[1-9]\d*(\.\d{0,})?$)|(^0(\.\d{0,})?$)/.test(t)
        }
        checkExNumber(t) {
            return /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/.test(t)
        }
        onUSDT2CoinEx(t) {
            d.AudioMgr.playButtonSound("button_click");
            let e = this.getUSDTEditBox(0).string,
                i = parseFloat(e);
            !this.checkExNumber(e) || isNaN(i) || i <= 0 ? d.TT.showMsg(d.config.getStringData("USDTView_input_invalid_num_label"), d.Enum.ToastType.ToastTypeError) : (i = d.StringTools.serverGoldByClient(i), i = Math.floor(i), d.dataHandler.getUserData().usdt < i ? d.TT.showMsg(d.config.getStringData("ServerErrorCode251"), d.Enum.ToastType.ToastTypeError) : i < this.usdt_ex_min || i > this.usdt_ex_max ? d.TT.showMsg(d.config.getStringData("ServerErrorCode253"), d.Enum.ToastType.ToastTypeError) : (d.worldNet.ExchangeCurrencyRequest(1, i), this.resetTabTestExNum(0)))
        }
        onCoin2USDTEx(t) {
            d.AudioMgr.playButtonSound("button_click");
            let e = this.getCoinsEditBox(1).string,
                i = parseFloat(e);
            if (!this.checkExNumber(e) || isNaN(i) || i <= 0) d.TT.showMsg(d.config.getStringData("USDTView_input_invalid_num_label"), d.Enum.ToastType.ToastTypeError);
            else if (i = d.StringTools.serverGoldByClient(i), i = Math.floor(i), d.dataHandler.getUserData().u32Chips < i) d.TT.showMsg(d.config.getStringData("ServerErrorCode172"), d.Enum.ToastType.ToastTypeError);
            else {
                if (this.getCoin2USDTExRate() > 0) {
                    let t = Math.floor(i * this.getCoin2USDTExRate());
                    if (t < this.usdt_ex_min || t > this.usdt_ex_max) return void d.TT.showMsg(d.config.getStringData("ServerErrorCode253"), d.Enum.ToastType.ToastTypeError)
                }
                d.worldNet.ExchangeCurrencyRequest(0, i, this.open_use_point), this.resetTabTestExNum(1)
            }
        }
        onTabExResponse(t) {
            var e;
            let i = 1 == t.op_type ? "USDTView_ex_coin_success_label" : "USDTView_ex_usdt_success_label",
                n = d.StringTools.numToFloatString(t.to_amt),
                o = null == (e = l.getInstance(null == this ? void 0 : this.node)) || null == (e = e.room) ? void 0 : e.gameScene;
            d.TP.showMsg(d.StringTools.formatC(d.config.getStringData(i), n), !1, null, null, !1, !1, "", !1, u.HorizontalAlign.CENTER, !1, o)
        }
        onUSDT2CoinAll(t) {
            d.AudioMgr.playButtonSound("button_click");
            let e = this.getUSDTEditBox(0),
                i = this.getCoinsEditBox(0),
                n = this.getUSDT2CoinExRate();
            e.string = d.StringTools.numToFloatString(d.dataHandler.getUserData().usdt), this.updateTabTestExNum(e, i, n)
        }
        onCoin2USDTAll(t) {
            d.AudioMgr.playButtonSound("button_click");
            let e = this.getCoinsEditBox(1),
                i = this.getUSDTEditBox(1),
                n = this.getCoin2USDTExRate();
            e.string = d.StringTools.numToFloatString(d.dataHandler.getUserData().u32Chips), this.updateTabTestExNum(e, i, n)
        }
        requestTabHuilv(t) {
            if ("" == (0 == t ? this.usdt_2_coin_ex : this.coin_2_usdt_ex)) {
                let e = 0 == t ? 1 : 0;
                d.worldNet.GetScalerQuoteRequest(e)
            } else this.updateTabExHuilv(t), this.updateTabTestExNumPositive(t)
        }
        onTabHuilvResponse(t) {
            0 == t.op_type ? (this.updateTabExHuilv(1), this.updateTabTestExNumPositive(1)) : 1 == t.op_type && (this.updateTabExHuilv(0), this.updateTabTestExNumPositive(0))
        }
        requestExRateResponse(t) {
            let e = Number(t.rate);
            isNaN(e) || e <= 0 || 1 != t.op_type && 0 != t.op_type || (0 == t.op_type ? (this.coin_2_usdt_ex_val = e, this.coin_2_usdt_ex = this.formatExRate(e)) : (this.usdt_2_coin_ex_val = e, this.usdt_2_coin_ex = this.formatExRate(e)), this.onTabHuilvResponse(t))
        }
        formatExRate(t) {
            return isNaN(t) || t <= 0 ? "" : d.StringTools.handleNumberByFloor(t, 2).toString()
        }
    }).prototype, "coinNode", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(p.prototype, "usdtNode", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(p.prototype, "explanText", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = p)) || x));
    n._RF.pop()
}