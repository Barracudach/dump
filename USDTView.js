import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as _ from "./USDTAndCoin.js";

function main() {
    var T, x, b, m, f, S, E, C, N, v, y, D, w, U, B, P, R, F, M, A, z, L, V, I, k, G;
    n._RF.push({}, "b0eb4wcqRNDOoIdIFBJZ5Yl", "USDTView", void 0);
    const {
        ccclass: H,
        property: O
    } = a;
    t("default", (T = O(o), x = O(o), b = O(s), m = O(s), f = O(s), S = O(s), E = O(s), C = O(s), N = O(s), v = O(o), y = O(o), D = O(o), H((B = e((U = class extends _ {
        constructor(...t) {
            super(...t), i(this, "tabButton", B, this), i(this, "totalNumNode", P, this), i(this, "titleText", R, this), i(this, "userNumText", F, this), i(this, "coinNumText", M, this), i(this, "usdtNumText", A, this), i(this, "txt_freeTimes", z, this), i(this, "txt_feeTips", L, this), i(this, "txt_pointsTips", V, this), i(this, "btn_usePoint", I, this), i(this, "bgExplanation", k, this), i(this, "ItemNode", G, this), this.coin_2_usdt_TotalFreeTime = 10, this.coin_2_usdt_freeTime = 0, this.coin_2_usdt_feeRatio = .005, this.coin_2_usdt_pointRatio = 0, this.usdt_exchange_interval = 0, this.color_lab_select = r(208, 171, 110), this.color_lab_noSelect = r(148, 149, 149)
        }
        onLoad() {
            c.resMgr.adaptWidget(this.node, !0)
        }
        start() {
            super.start(), this.switchTab(0), this.open_use_point = !1, this.bgExplanation.active = !1, c.MessageCenter.register("onExchangeGetConfigResponse", this.onExhangeConfigResponse.bind(this), this.node), c.MessageCenter.register("onExchangeGetConfigNotice", this.onExhangeConfigChangeNotice.bind(this), this.node), c.MessageCenter.register("onExchangeTimeLimitError", this.onExchangeTimeLimitError.bind(this), this.node), this.node.on(o.EventType.TOUCH_END, (t => {
                this.bgExplanation.active = !1
            }))
        }
        onDestroy() {
            super.onDestroy(), c.MessageCenter.unregister("onExchangeGetConfigResponse", this.node), c.MessageCenter.unregister("onExchangeGetConfigNotice", this.node), c.MessageCenter.unregister("onExchangeTimeLimitError", this.node)
        }
        initLanguage() {
            this.tabButton[0].getChildByName("Label").getComponent(s).string = c.config.getStringData("USDTView_exchange_coin_label"), this.tabButton[1].getChildByName("Label").getComponent(s).string = c.config.getStringData("USDTView_exchange_usdt_label"), this.titleText.string = c.config.getStringData("USDTView_title_label"), this.userNumText.string = c.config.getStringData("USDTView_usdt_change_title_tips"), this.coinNumText.string = c.config.getStringData("USDTView_usdt_change_coin_tips"), this.usdtNumText.string = c.config.getStringData("USDTView_usdt_change_usdt_tips"), this.updateExhangeFreeTimesTips();
            let t = u("coin_layout/sprite", this.totalNumNode),
                e = u("coin_layout/Label", this.totalNumNode);
            t.setPosition(l(e.getPosition().x - c.resMgr.getLabelStringSize(e.getComponent(s)).width / 2 - t.getComponent(h).width / 2 - 15, t.getPosition().y, t.getPosition().z));
            let i = u("usdt_layout/sprite", this.totalNumNode),
                n = u("usdt_layout/Label", this.totalNumNode);
            i.setPosition(l(n.getPosition().x - c.resMgr.getLabelStringSize(n.getComponent(s)).width / 2 - i.getComponent(h).width / 2 - 15, i.getPosition().y, i.getPosition().z)), super.initLanguage()
        }
        updateTabExHuilv(t) {
            let e = this.getTabNode(t);
            if (e) {
                let i = c.StringTools.formatC(c.config.getStringData("USDTView_usdt_coin_ex_label_" + t), this.getTabExHuilv(t)),
                    n = null;
                e == this.usdtNode ? n = u("layoutTips/huilvNode/txt_huilv", e) : e == this.coinNode && (n = u("txt_huilv", e)), n && (n.getComponent(s).string = i)
            }
            super.updateTabExHuilv(t)
        }
        initExplanTxtLanguage(t) {
            if (null == t) return;
            this.bgExplanation.destroyAllChildren(), this.bgExplanation.removeAllChildren();
            let e = t.split("\n");
            if (0 != e.length)
                for (let t = 0; t < e.length; ++t) {
                    let i = g(this.ItemNode),
                        n = c.resMgr.getLabelStringSize(i.children[1].getComponent(s), e[t]),
                        o = i.getComponent(h);
                    o.height = n.height, i.active = !0;
                    let a = this.bgExplanation.getComponent(h);
                    i.setPosition(l(-(a.width - .5 * (a.width - o.width)), i.getPosition().y, i.getPosition().z)), this.bgExplanation.addChild(i)
                }
        }
        updateCoinAndUSDT() {
            u("coin_layout/coin_num", this.totalNumNode).getComponent(s).string = c.StringTools.serverGoldToShowString(c.dataHandler.getUserData().u32Chips), u("usdt_layout/usdt_num", this.totalNumNode).getComponent(s).string = c.StringTools.serverGoldToShowString(c.dataHandler.getUserData().usdt)
        }
        onBack(t) {
            this.resetTabTestExNum(this.select_index), c.AudioMgr.playButtonSound("back_button"), c.action.showAction(this.node, c.action.eMoveActionDir.EMAD_TO_RIGHT, c.action.eMoveActionType.EMAT_FADE_OUT, c.action.delay_type.NORMAL, ((t, e) => {}), ((t, e) => {
                c.MessageCenter.send("show_mail_entrance", !0)
            }))
        }
        onUSDT2Coin(t) {
            c.AudioMgr.playButtonSound("button_click"), this.switchTab(0)
        }
        onCoin2USDT(t) {
            c.AudioMgr.playButtonSound("button_click"), this.switchTab(1)
        }
        onTestCoin2USDT(t, e, i) {
            super.onTestCoin2USDT(t, e, i), this.onUpdateUsdtInput()
        }
        onTestUSDT2Coin(t, e, i) {
            super.onTestUSDT2Coin(t, e, i), this.onUpdateUsdtInput()
        }
        onUpdateUsdtInput() {
            if (!this.usdtNode || !this.usdtNode.active) return;
            let t = u("input_node/editbox_coin", this.usdtNode).getComponent(d).string;
            if (!this.checkTestExNumber(t) || "" == t) return this.updateExchangeFeeTips(0), void this.updateExchangePointTips(0);
            let e = parseFloat(t);
            isNaN(e) || e <= 0 ? (this.updateExchangeFeeTips(0), this.updateExchangePointTips(0)) : (this.updateExchangeFeeTips(e), this.updateExchangePointTips(e))
        }
        switchTab(t) {
            0 != t && 1 != t || this.select_index == t || (this.setBtnState(0, 0 == t), this.setBtnState(1, 1 == t), super.switchTab(t), this.bgExplanation.active = !1, this.usdtNode && this.usdtNode.active ? (c.worldNet.ExchangeGetUsdtConfigRequest(), this.updateExhangeFreeTimesTips()) : this.coinNode && this.coinNode.active && this.hideExchangeTxtTips())
        }
        setBtnState(t, e) {
            let i = this.tabButton[t],
                n = i.getChildByName("Label").getComponent(p);
            e ? (n && (n.color = this.color_lab_select), i.getChildByName("Background").active = !0) : (n && (n.color = this.color_lab_noSelect), i.getChildByName("Background").active = !1)
        }
        formatExRate(t) {
            return isNaN(t) || t <= 0 ? "" : c.StringTools.handleNumberByFloor(t, 4).toString()
        }
        onTabExResponse(t) {
            super.onTabExResponse(t), this.hideExchangeTxtTips(), this.bgExplanation.active = !1
        }
        onCoin2USDTAll(t) {
            super.onCoin2USDTAll(t), this.onUpdateUsdtInput(), this.bgExplanation.active = !1
        }
        onUSDT2CoinAll(t) {
            super.onUSDT2CoinAll(t), this.bgExplanation.active = !1
        }
        onBtnHuilvQuestion(t) {
            var e = t.target.getComponent(h);
            let i = e.convertToWorldSpaceAR(l(.5, .5, 0)),
                n = this.bgExplanation.parent.getComponent(h).convertToNodeSpaceAR(i);
            this.bgExplanation.setPosition(n.x + 40, n.y - e.height / 2 + 10), c.AudioMgr.playButtonSound("button_click"), this.bgExplanation.active = !0, this.initExplanTxtLanguage(c.config.getStringData("USDTView_explan_label"))
        }
        onBtnPointQuestion(t) {
            var e = t.target.getComponent(h);
            let i = e.convertToWorldSpaceAR(l(.5, .5, 0)),
                n = this.bgExplanation.parent.getComponent(h).convertToNodeSpaceAR(i);
            this.bgExplanation.setPosition(n.x + 40, n.y - e.height / 2 + 10), c.AudioMgr.playButtonSound("button_click"), this.bgExplanation.active = !0;
            let o = c.StringTools.formatC(c.config.getStringData("USDTView_exchange_tips_label"), this.coin_2_usdt_TotalFreeTime, this.usdt_exchange_interval);
            this.initExplanTxtLanguage(o)
        }
        onEditBegin(t, e, i) {
            super.onEditBegin(t, e, i), this.bgExplanation.active = !1
        }
        resetTabTestExNum(t) {
            super.resetTabTestExNum(t), this.hideExchangeTxtTips(), this.txt_freeTimes.node.active = !0
        }
        hideExchangeTxtTips() {
            this.txt_freeTimes.node.active = !1, this.txt_feeTips.node.active = !1, this.open_use_point = !1, this.setShowPointStatus(!1), this.setBtnSpriteStatus(this.open_use_point)
        }
        updateExhangeFreeTimesTips() {
            this.txt_freeTimes.node.active = !0;
            let t = this.coin_2_usdt_freeTime >= 0 ? this.coin_2_usdt_freeTime : 0;
            this.txt_freeTimes.string = c.StringTools.formatC(c.config.getStringData("USDTView_usdt_change_free_tips"), t)
        }
        updateExchangeFeeTips(t = 0, e = 0) {
            if (this.coin_2_usdt_freeTime > 0 || t <= 0) return void(this.txt_feeTips.node.active = !1);
            this.txt_feeTips.node.active = !0;
            let i = this.coin_2_usdt_feeRatio,
                n = t - t * i + e,
                o = this.getCoin2USDTExRate();
            n = c.StringTools.serverGoldByClient(n), n = Math.floor(n);
            let s = o * n;
            s = Math.floor(s);
            let a = c.StringTools.numToFloatString(s);
            this.txt_feeTips.string = c.StringTools.formatC(c.config.getStringData("USDTView_usdt_change_fee_tips"), 100 * i + "%", a)
        }
        setShowPointStatus(t = !1) {
            let e = this.usdtNode.getChildByName("input_node").getChildByName("bg"),
                i = u("layoutTips", this.usdtNode);
            this.txt_pointsTips.node.active = t, this.btn_usePoint.active = t;
            let n = i.getPosition();
            t ? (i.setPosition(l(n.x, -639, n.z)), e.getComponent(h).setContentSize(1e3, 514)) : (e.getComponent(h).setContentSize(1e3, 348), i.setPosition(l(n.x, -473, n.z))), c.resMgr.adaptWidget(e, !0)
        }
        updateExchangePointTips(t = 0) {
            let e = c.dataHandler.getUserData().user_points;
            if (this.coin_2_usdt_freeTime > 0 || e <= 0 || t <= 0) return void this.setShowPointStatus(!1);
            if (this.coin_2_usdt_pointRatio <= 0 || e < this.coin_2_usdt_pointRatio) return void this.setShowPointStatus(!1);
            this.setShowPointStatus(!0);
            let i = "",
                n = c.StringTools.toFixed(t * this.coin_2_usdt_feeRatio, 2, c.StringTools.RoundingMode.ROUND_UP),
                o = n * this.coin_2_usdt_pointRatio,
                s = 0;
            e > o ? (i = c.StringTools.numToFloatString(o), s = n) : (i = c.StringTools.numToFloatString(e), s = c.StringTools.handleNumberByFloor(e / this.coin_2_usdt_pointRatio, 2)), this.txt_pointsTips.string = c.StringTools.formatC(c.config.getStringData("USDTView_usdt_change_point_tips"), i, s), this.open_use_point && this.updateExchangeFeeTips(t, s)
        }
        onBtnUsePoint() {
            c.AudioMgr.playButtonSound("button_click"), this.open_use_point = !this.open_use_point, this.setBtnSpriteStatus(this.open_use_point);
            let t = u("input_node/editbox_coin", this.usdtNode).getComponent(d).string,
                e = parseFloat(t);
            isNaN(e) || e <= 0 ? (this.updateExchangeFeeTips(0), this.updateExchangePointTips(0)) : (this.updateExchangeFeeTips(e), this.updateExchangePointTips(e))
        }
        setBtnSpriteStatus(t = !1) {
            t ? (this.btn_usePoint.getChildByName("spOff").active = !1, this.btn_usePoint.getChildByName("spOn").active = !0) : (this.btn_usePoint.getChildByName("spOff").active = !0, this.btn_usePoint.getChildByName("spOn").active = !1)
        }
        onExhangeConfigResponse(t) {
            this.coin_2_usdt_TotalFreeTime = t.max_usdt_exchange_count, this.coin_2_usdt_freeTime = t.left_usdt_exchange_count, this.coin_2_usdt_feeRatio = parseFloat(t.usdt_fee_ratio), this.coin_2_usdt_pointRatio = t.point_to_usd_deduction, this.usdt_exchange_interval = c.StringTools.handleNumberByFloor(t.usdt_exchange_interval / 60, 2), this.updateExhangeFreeTimesTips()
        }
        onExhangeConfigChangeNotice(t) {
            c.worldNet.ExchangeGetUsdtConfigRequest()
        }
        onExchangeTimeLimitError(t) {
            this.bgExplanation.active = !1, c.TT.showMsg(c.StringTools.formatC(c.config.getStringData("ServerErrorCode257"), this.usdt_exchange_interval), c.Enum.ToastType.ToastTypeError)
        }
    }).prototype, "tabButton", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), P = e(U.prototype, "totalNumNode", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(U.prototype, "titleText", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(U.prototype, "userNumText", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(U.prototype, "coinNumText", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(U.prototype, "usdtNumText", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(U.prototype, "txt_freeTimes", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(U.prototype, "txt_feeTips", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(U.prototype, "txt_pointsTips", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(U.prototype, "btn_usePoint", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(U.prototype, "bgExplanation", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(U.prototype, "ItemNode", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = U)) || w));
    n._RF.pop()
}