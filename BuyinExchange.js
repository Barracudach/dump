import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";
import * as r from "./cv.js";
import * as h from "./USDTAndCoin.js";
import * as u from "./ControlSwitch.js";
import * as l from "./GameSceneInstance.js";

function main() {
    var c, g, p, T, _, d, x, f, S, b, m, E, U, C, D, w, v, y, P, F, R, B, N, I, M;
    n._RF.push({}, "12a50Ezh1lPnr5qD86b9ByJ", "BuyinExchange", void 0);
    const {
        ccclass: L,
        property: z
    } = a;
    let G = (c = L("ExchangeDataMobile"), g = z([s]), p = z(o), c((d = e((_ = class {
        constructor() {
            i(this, "inputs", d, this), i(this, "rate", x, this)
        }
    }).prototype, "inputs", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), x = e(_.prototype, "rate", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = _)) || T);
    t("default", (f = z([G]), S = z(o), b = z(o), m = z(o), E = z(o), U = z(u), C = z(o), D = z(o), L((y = e((v = class extends h {
        constructor(...t) {
            super(...t), i(this, "exchangeUI", y, this), i(this, "coinsToUsdtInfo2Label", P, this), i(this, "txt_freeTimes", F, this), i(this, "txt_feeTips", R, this), i(this, "txt_pointsTips", B, this), i(this, "btn_usePoint", N, this), i(this, "coinBalance", I, this), i(this, "usdtBalance", M, this), this.coin_2_usdt_TotalFreeTime = 10, this.coin_2_usdt_freeTime = 0, this.coin_2_usdt_feeRatio = .005, this.coin_2_usdt_pointRatio = 0, this.usdt_exchange_interval = 0
        }
        onDisable() {
            this.resetTabTestExNum(this.select_index)
        }
        start() {
            super.start(), this.switchTab(0), this.open_use_point = !1, r.MessageCenter.register("onExchangeGetConfigResponse", this.onExhangeConfigResponse.bind(this), this.node), r.MessageCenter.register("onExchangeGetConfigNotice", this.onExhangeConfigChangeNotice.bind(this), this.node), r.MessageCenter.register("onExchangeTimeLimitError", this.onExchangeTimeLimitError.bind(this), this.node)
        }
        onDestroy() {
            super.onDestroy(), r.MessageCenter.unregister("onExchangeGetConfigResponse", this.node), r.MessageCenter.unregister("onExchangeGetConfigNotice", this.node), r.MessageCenter.unregister("onExchangeTimeLimitError", this.node)
        }
        initLanguage() {
            this.updateExhangeFreeTimesTips(), super.initLanguage()
        }
        initTabLanguage(t) {
            this.updateTabExHuilv(t)
        }
        switchTab(t) {
            0 != t && 1 != t || (this.select_index = t, this.resetTabTestExNum(t), this.requestTabHuilv(t))
        }
        resetTabTestExNum(t) {
            0 != t && 1 != t || (this.exchangeUI[t].inputs.forEach((t => t.string = "0")), this.hideExchangeTxtTips(), this.txt_freeTimes && (this.txt_freeTimes.node.active = !0))
        }
        hideExchangeTxtTips() {
            this.txt_freeTimes && (this.txt_freeTimes.node.active = !1), this.txt_feeTips && (this.txt_feeTips.node.active = !1), this.open_use_point = !1, this.setShowPointStatus(!1), this.setBtnSpriteStatus(this.open_use_point)
        }
        updateTabExHuilv(t) {
            this.exchangeUI[t].rate.string = r.StringTools.formatC(r.config.getStringData("USDTView_usdt_coin_ex_label_" + t), this.getTabExHuilv(t))
        }
        updateTabTestExNumPositive(t) {
            let e = this.exchangeUI[t].inputs[0],
                i = this.exchangeUI[t].inputs[0],
                n = 0 == t ? this.getUSDT2CoinExRate() : this.getCoin2USDTExRate();
            this.updateTabTestExNum(e, i, n)
        }
        initExplanTxtLanguage(t) {}
        onUSDT2Coin(t) {
            r.AudioMgr.playButtonSound("button_click"), this.switchTab(0)
        }
        onCoin2USDT(t) {
            r.AudioMgr.playButtonSound("button_click"), this.switchTab(1)
        }
        onTestCoin2USDT(t, e, i) {
            super.onTestCoin2USDT(t, e, i), this.onUpdateUsdtInput()
        }
        getUSDTEditBox(t) {
            return 0 == t ? this.exchangeUI[t].inputs[0] : this.exchangeUI[t].inputs[1]
        }
        onTestUSDT2Coin(t, e, i) {
            super.onTestUSDT2Coin(t, e, i), this.onUpdateUsdtInput()
        }
        getCoinsEditBox(t) {
            return 0 == t ? this.exchangeUI[t].inputs[1] : this.exchangeUI[t].inputs[0]
        }
        onUpdateUsdtInput() {
            if (!this.usdtNode || !this.usdtNode.active) return;
            let t = this.exchangeUI[1].inputs[0].string;
            if (!this.checkTestExNumber(t) || "" == t) return this.updateExchangeFeeTips(0), void this.updateExchangePointTips(0);
            let e = parseFloat(t);
            isNaN(e) || e <= 0 ? (this.updateExchangeFeeTips(0), this.updateExchangePointTips(0)) : (this.updateExchangeFeeTips(e), this.updateExchangePointTips(e))
        }
        formatExRate(t) {
            return isNaN(t) || t <= 0 ? "" : r.StringTools.handleNumberByFloor(t, 4).toString()
        }
        onTabExResponse(t) {
            var e;
            this.hideExchangeTxtTips();
            let i = 1 == t.op_type ? "USDTView_ex_coin_success_label" : "USDTView_ex_usdt_success_label",
                n = r.StringTools.numToFloatString(t.to_amt),
                s = null == (e = l.getInstance(null == this ? void 0 : this.node)) || null == (e = e.room) ? void 0 : e.gameScene;
            r.TP.showMsg(r.StringTools.formatC(r.config.getStringData(i), n), !1, null, null, !1, !1, "", !1, o.HorizontalAlign.CENTER, !1, s), r.popUp.showMsg({
                txt: r.StringTools.formatC(r.config.getStringData(i), n),
                msgType: r.Enum.ToastType.ToastTypeSuccess,
                cashGameScene: s
            })
        }
        onCoin2USDTAll(t) {
            super.onCoin2USDTAll(t), this.onUpdateUsdtInput()
        }
        updateExhangeFreeTimesTips() {
            if (this.txt_freeTimes) {
                this.txt_freeTimes.node.active = !0;
                let t = this.coin_2_usdt_freeTime >= 0 ? this.coin_2_usdt_freeTime : 0;
                this.txt_freeTimes.string = r.StringTools.formatC(r.config.getStringData("USDTView_usdt_change_free_tips"), t)
            }
            this.coinsToUsdtInfo2Label && (this.coinsToUsdtInfo2Label.string = r.StringTools.formatC(r.config.getStringData("USDTView_exchange_tips_label"), this.coin_2_usdt_TotalFreeTime, this.usdt_exchange_interval))
        }
        updateExchangeFeeTips(t = 0, e = 0) {
            if (this.coin_2_usdt_freeTime > 0 || t <= 0) return void(this.txt_feeTips && (this.txt_feeTips.node.active = !1));
            let i = this.coin_2_usdt_feeRatio,
                n = t - t * i + e,
                s = this.getCoin2USDTExRate();
            n = r.StringTools.serverGoldByClient(n), n = Math.floor(n);
            let o = s * n;
            o = Math.floor(o);
            let a = r.StringTools.numToFloatString(o);
            this.txt_feeTips && (this.txt_feeTips.node.active = !0, this.txt_feeTips.string = r.StringTools.formatC(r.config.getStringData("USDTView_usdt_change_fee_tips"), 100 * i + "%", a))
        }
        setShowPointStatus(t = !1) {
            this.txt_pointsTips && (this.txt_pointsTips.node.active = t), this.btn_usePoint && (this.btn_usePoint.node.active = t)
        }
        updateExchangePointTips(t = 0) {
            if (!r.appConfig.getLobbyConfig().casino.showPrimary) return void this.setShowPointStatus(!1);
            let e = r.dataHandler.getUserData().user_points;
            if (this.coin_2_usdt_freeTime > 0 || e <= 0 || t <= 0) return void this.setShowPointStatus(!1);
            if (this.coin_2_usdt_pointRatio <= 0 || e < this.coin_2_usdt_pointRatio) return void this.setShowPointStatus(!1);
            this.setShowPointStatus(!0);
            let i = "",
                n = r.StringTools.toFixed(t * this.coin_2_usdt_feeRatio, 2, r.StringTools.RoundingMode.ROUND_UP),
                s = n * this.coin_2_usdt_pointRatio,
                o = 0;
            e > s ? (i = r.StringTools.numToFloatString(s), o = n) : (i = r.StringTools.numToFloatString(e), o = r.StringTools.handleNumberByFloor(e / this.coin_2_usdt_pointRatio, 2)), this.txt_pointsTips && (this.txt_pointsTips.string = r.StringTools.formatC(r.config.getStringData("USDTView_usdt_change_point_tips"), i, o)), this.open_use_point && this.updateExchangeFeeTips(t, o)
        }
        onBtnUsePoint() {
            this.btn_usePoint && (this.open_use_point = this.btn_usePoint.isOn());
            let t = this.exchangeUI[1].inputs[0].string,
                e = parseFloat(t);
            isNaN(e) || e <= 0 ? (this.updateExchangeFeeTips(0), this.updateExchangePointTips(0)) : (this.updateExchangeFeeTips(e), this.updateExchangePointTips(e))
        }
        setBtnSpriteStatus(t = !1) {
            this.btn_usePoint && (this.btn_usePoint.switchOn = t)
        }
        onExhangeConfigResponse(t) {
            this.coin_2_usdt_TotalFreeTime = t.max_usdt_exchange_count, this.coin_2_usdt_freeTime = t.left_usdt_exchange_count, this.coin_2_usdt_feeRatio = parseFloat(t.usdt_fee_ratio), this.coin_2_usdt_pointRatio = t.point_to_usd_deduction, this.usdt_exchange_interval = r.StringTools.handleNumberByFloor(t.usdt_exchange_interval / 60, 2), this.updateExhangeFreeTimesTips()
        }
        onExhangeConfigChangeNotice(t) {
            r.worldNet.ExchangeGetUsdtConfigRequest()
        }
        onExchangeTimeLimitError(t) {
            r.TT.showMsg(r.StringTools.formatC(r.config.getStringData("ServerErrorCode257"), this.usdt_exchange_interval), r.Enum.ToastType.ToastTypeError)
        }
        updateCoinAndUSDT() {
            this.usdtBalance && (this.usdtBalance.string = r.StringTools.serverGoldToShowString(r.dataHandler.getUserData().usdt)), this.coinBalance && (this.coinBalance.string = r.StringTools.serverGoldToShowString(r.dataHandler.getUserData().u32Chips))
        }
        onUSDT2CoinEx(t) {
            super.onUSDT2CoinEx(t)
        }
        onUSDT2CoinAll(t) {
            super.onUSDT2CoinAll(t)
        }
        onCoin2USDTEx(t) {
            super.onCoin2USDTEx(t)
        }
    }).prototype, "exchangeUI", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), P = e(v.prototype, "coinsToUsdtInfo2Label", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(v.prototype, "txt_freeTimes", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(v.prototype, "txt_feeTips", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(v.prototype, "txt_pointsTips", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(v.prototype, "btn_usePoint", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(v.prototype, "coinBalance", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(v.prototype, "usdtBalance", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = v)) || w));
    n._RF.pop()
}