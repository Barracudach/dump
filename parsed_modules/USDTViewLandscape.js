import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";
import * as r from "./ControlSwitch.js";
import * as h from "./GameSceneInstance.js";
import * as u from "./cv.js";
import * as c from "./USDTAndCoin.js";

function main() {
    var g, p, l, _, T, d, x, f, S, m, b, E, U, C, D, w, v, y, N, F, P;
    n._RF.push({}, "6e2f65tBKJIRpzHMkCcpMAh", "USDTViewLandscape", void 0);
    const {
        ccclass: R,
        property: I
    } = a;
    let L = (g = R("ExchangeData"), p = I([s]), l = I(o), g((d = e((T = class {
        constructor() {
            i(this, "inputs", d, this), i(this, "rate", x, this)
        }
    }).prototype, "inputs", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), x = e(T.prototype, "rate", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = T)) || _);
    t("USDTViewLandscape", (f = I([L]), S = I(o), m = I(o), b = I(o), E = I(o), U = I(r), R((w = e((D = class extends c {
        constructor(...t) {
            super(...t), i(this, "exchangeUI", w, this), i(this, "coinsToUsdtInfo2Label", v, this), i(this, "txt_freeTimes", y, this), i(this, "txt_feeTips", N, this), i(this, "txt_pointsTips", F, this), i(this, "btn_usePoint", P, this), this.coin_2_usdt_TotalFreeTime = 10, this.coin_2_usdt_freeTime = 0, this.coin_2_usdt_feeRatio = .005, this.coin_2_usdt_pointRatio = 0, this.usdt_exchange_interval = 0
        }
        onDisable() {
            this.resetTabTestExNum(this.select_index)
        }
        start() {
            super.start(), this.switchTab(0), this.open_use_point = !1, u.MessageCenter.register("onExchangeGetConfigResponse", this.onExhangeConfigResponse.bind(this), this.node), u.MessageCenter.register("onExchangeGetConfigNotice", this.onExhangeConfigChangeNotice.bind(this), this.node), u.MessageCenter.register("onExchangeTimeLimitError", this.onExchangeTimeLimitError.bind(this), this.node)
        }
        onDestroy() {
            super.onDestroy(), u.MessageCenter.unregister("onExchangeGetConfigResponse", this.node), u.MessageCenter.unregister("onExchangeGetConfigNotice", this.node), u.MessageCenter.unregister("onExchangeTimeLimitError", this.node)
        }
        initLanguage() {
            this.updateExhangeFreeTimesTips(), super.initLanguage()
        }
        initTabLanguage(t) {
            this.updateTabExHuilv(t)
        }
        switchTab(t) {
            super.switchTab(t), this.usdtNode && this.usdtNode.active ? (u.worldNet.ExchangeGetUsdtConfigRequest(), this.updateExhangeFreeTimesTips()) : this.coinNode && this.coinNode.active && this.hideExchangeTxtTips()
        }
        resetTabTestExNum(t) {
            0 != t && 1 != t || (this.exchangeUI[t].inputs.forEach((t => t.string = "0")), this.hideExchangeTxtTips(), this.txt_freeTimes && (this.txt_freeTimes.node.active = !0))
        }
        hideExchangeTxtTips() {
            this.txt_freeTimes && (this.txt_freeTimes.node.active = !1), this.txt_feeTips && (this.txt_feeTips.node.active = !1), this.open_use_point = !1, this.setShowPointStatus(!1), this.setBtnSpriteStatus(this.open_use_point)
        }
        updateTabExHuilv(t) {
            this.exchangeUI[t].rate.string = u.StringTools.formatC(u.config.getStringData("USDTView_usdt_coin_ex_label_" + t), this.getTabExHuilv(t))
        }
        updateTabTestExNumPositive(t) {
            let e = this.exchangeUI[t].inputs[0],
                i = this.exchangeUI[t].inputs[0],
                n = 0 == t ? this.getUSDT2CoinExRate() : this.getCoin2USDTExRate();
            this.updateTabTestExNum(e, i, n)
        }
        initExplanTxtLanguage(t) {}
        onUSDT2Coin(t) {
            u.AudioMgr.playButtonSound("button_click"), this.switchTab(0)
        }
        onCoin2USDT(t) {
            u.AudioMgr.playButtonSound("button_click"), this.switchTab(1)
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
            return isNaN(t) || t <= 0 ? "" : u.StringTools.handleNumberByFloor(t, 4).toString()
        }
        onTabExResponse(t) {
            var e;
            this.hideExchangeTxtTips();
            let i = 1 == t.op_type ? "USDTView_ex_coin_success_label" : "USDTView_ex_usdt_success_label",
                n = u.StringTools.numToFloatString(t.to_amt),
                s = null == (e = h.getInstance(null == this ? void 0 : this.node)) || null == (e = e.room) ? void 0 : e.gameScene;
            u.TP.showMsg(u.StringTools.formatC(u.config.getStringData(i), n), !1, null, null, !1, !1, "", !1, o.HorizontalAlign.CENTER, !1, s), u.popUp.showMsg({
                txt: u.StringTools.formatC(u.config.getStringData(i), n),
                msgType: u.Enum.ToastType.ToastTypeSuccess,
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
                this.txt_freeTimes.string = u.StringTools.formatC(u.config.getStringData("USDTView_usdt_change_free_tips"), t)
            }
            this.coinsToUsdtInfo2Label && (this.coinsToUsdtInfo2Label.string = u.StringTools.formatC(u.config.getStringData("USDTView_exchange_tips_label"), this.coin_2_usdt_TotalFreeTime, this.usdt_exchange_interval))
        }
        updateExchangeFeeTips(t = 0, e = 0) {
            if (this.coin_2_usdt_freeTime > 0 || t <= 0) return void(this.txt_feeTips && (this.txt_feeTips.node.active = !1));
            let i = this.coin_2_usdt_feeRatio,
                n = t - t * i + e,
                s = this.getCoin2USDTExRate();
            n = u.StringTools.serverGoldByClient(n), n = Math.floor(n);
            let o = s * n;
            o = Math.floor(o);
            let a = u.StringTools.numToFloatString(o);
            this.txt_feeTips && (this.txt_feeTips.node.active = !0, this.txt_feeTips.string = u.StringTools.formatC(u.config.getStringData("USDTView_usdt_change_fee_tips"), 100 * i + "%", a))
        }
        setShowPointStatus(t = !1) {
            this.txt_pointsTips && (this.txt_pointsTips.node.active = t), this.btn_usePoint && (this.btn_usePoint.node.active = t)
        }
        updateExchangePointTips(t = 0) {
            if (!u.appConfig.getLobbyConfig().casino.showPrimary) return void this.setShowPointStatus(!1);
            let e = u.dataHandler.getUserData().user_points;
            if (this.coin_2_usdt_freeTime > 0 || e <= 0 || t <= 0) return void this.setShowPointStatus(!1);
            if (this.coin_2_usdt_pointRatio <= 0 || e < this.coin_2_usdt_pointRatio) return void this.setShowPointStatus(!1);
            this.setShowPointStatus(!0);
            let i = "",
                n = u.StringTools.toFixed(t * this.coin_2_usdt_feeRatio, 2, u.StringTools.RoundingMode.ROUND_UP),
                s = n * this.coin_2_usdt_pointRatio,
                o = 0;
            e > s ? (i = u.StringTools.numToFloatString(s), o = n) : (i = u.StringTools.numToFloatString(e), o = u.StringTools.handleNumberByFloor(e / this.coin_2_usdt_pointRatio, 2)), this.txt_pointsTips && (this.txt_pointsTips.string = u.StringTools.formatC(u.config.getStringData("USDTView_usdt_change_point_tips"), i, o)), this.open_use_point && this.updateExchangeFeeTips(t, o)
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
            this.coin_2_usdt_TotalFreeTime = t.max_usdt_exchange_count, this.coin_2_usdt_freeTime = t.left_usdt_exchange_count, this.coin_2_usdt_feeRatio = parseFloat(t.usdt_fee_ratio), this.coin_2_usdt_pointRatio = t.point_to_usd_deduction, this.usdt_exchange_interval = u.StringTools.handleNumberByFloor(t.usdt_exchange_interval / 60, 2), this.updateExhangeFreeTimesTips()
        }
        onExhangeConfigChangeNotice(t) {
            u.worldNet.ExchangeGetUsdtConfigRequest()
        }
        onExchangeTimeLimitError(t) {
            u.TT.showMsg(u.StringTools.formatC(u.config.getStringData("ServerErrorCode257"), this.usdt_exchange_interval), u.Enum.ToastType.ToastTypeError)
        }
    }).prototype, "exchangeUI", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), v = e(D.prototype, "coinsToUsdtInfo2Label", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(D.prototype, "txt_freeTimes", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(D.prototype, "txt_feeTips", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(D.prototype, "txt_pointsTips", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(D.prototype, "btn_usePoint", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = D)) || C));
    n._RF.pop()
}