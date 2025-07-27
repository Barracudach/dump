import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as g from "./cv.js";
import * as d from "./CurrencyValue.js";
import * as p from "./GameSceneInstance.js";
import * as _ from "./Enum.js";

function main() {
    var y, b, f, D, S, R, T, w, I, C, M, v, x, k, V, A, B, N, z, P, G, U, H, E, L, O;
    r._RF.push({}, "11f2dsciWhC8YUnLiB33Gu8", "RecallBuyin", void 0);
    const {
        ccclass: W,
        property: j
    } = s;
    t("default", (y = j(n), b = j(o), f = j(i), D = j(d), S = j(o), R = j(o), T = j(d), w = j(d), I = j(i), C = j(l), M = j(d), v = p("GameDataInstance"), W((V = e((k = class extends u {
        constructor(...t) {
            super(...t), a(this, "bg", V, this), a(this, "totalRecallNum", A, this), a(this, "progress", B, this), a(this, "curMoney", N, this), a(this, "drawback_hold_times_text", z, this), a(this, "drawback_times_text", P, this), a(this, "recallMin_text", G, this), a(this, "recallMax_text", U, this), a(this, "modelbg", H, this), a(this, "slider", E, this), a(this, "convert_txt_currencyValue", L, this), this._recallAmount = [], this.gameMain = void 0, this._width = 716, this.progressNodeUITransform = null, this.currency = null, a(this, "gameDataInstance", O, this)
        }
        onLoad() {
            this.progressNodeUITransform = this.progress.node.getComponent(c), this.modelbg.node.on(n.EventType.TOUCH_START, this.onHide.bind(this), this), this.bg.on(n.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0
            }), this), this._width = this.progress.node.getComponent(c).width, this.totalRecallNum.string = g.StringTools.serverGoldToShowString(g.dataHandler.getUserData().m_totalBuyOut), this.currency = this.gameDataInstance.tRoomData.currency
        }
        onClickSelf(t) {
            this.node.active = !1
        }
        updateHoldTimes() {
            let t = g.StringTools.formatC("%.1f", this.gameDataInstance.tRoomData.pkRoomParam.drawback_hold_times / 10),
                e = g.StringTools.formatC("%.1f", this.gameDataInstance.tRoomData.pkRoomParam.drawback_hold_times / 10);
            this.drawback_hold_times_text.string = g.StringTools.cutZero(t), m("============holdTimes:" + t + "    holdTimes2:" + e);
            let a = g.StringTools.formatC("%.1f", this.gameDataInstance.tRoomData.pkRoomParam.drawback_times / 10);
            this.drawback_times_text.string = g.StringTools.cutZero(a)
        }
        calculate() {
            var t, e;
            this.gameDataInstance.tRoomData.pkRoomParam.game_mode == g.Enum.CreateGameMode.CreateGame_Mode_Normal ? (t = this.gameDataInstance.tRoomData.pkRoomParam.rule_blind_enum, e = g.config.GetBuyinScoreValue(t - 1)) : this.gameDataInstance.tRoomData.pkRoomParam.game_mode == g.Enum.CreateGameMode.CreateGame_Mode_Short && (e = 100 * (t = g.StringTools.clientGoldByServer(this.gameDataInstance.tRoomData.pkRoomParam.rule_ante_amount)));
            var a = this.gameDataInstance.tRoomData.pkRoomParam.rule_buyin_min_enum / 100,
                r = this.gameDataInstance.tRoomData.pkRoomParam.drawback_times / 10,
                n = e * a,
                o = n * (this.gameDataInstance.tRoomData.pkRoomParam.drawback_hold_times / 10),
                i = n * r;
            if (0 == i) return;
            let l = this.gameMain.getSeatBySeatViewId(0).getMoney() - o;
            l = l >= i ? l : 0;
            let s = l / i;
            this._recallAmount = [];
            for (let t = 0; t <= s; t++) this._recallAmount.push(t * i);
            if (0 == l) this.curMoney.updateVal("0", this.gameDataInstance.tRoomData.currency.type), this.recallMin_text.updateVal("0", this.gameDataInstance.tRoomData.currency.type), this.recallMax_text.updateVal("0", this.gameDataInstance.tRoomData.currency.type);
            else {
                this.recallMin_text.updateVal(g.StringTools.formatC("%d", 0), this.gameDataInstance.tRoomData.currency.type), this.recallMax_text.updateVal(g.StringTools.formatC("%d", g.StringTools.numberToShowNumber(this._recallAmount[this._recallAmount.length - 1])), this.gameDataInstance.tRoomData.currency.type);
                let t = this.slider.progress;
                if (0 == g.StringTools.showStringToNumber(this.recallMax_text.value)) return;
                if (0 == this._recallAmount.length) return;
                var u;
                1 == this._recallAmount.length ? (t = 100 == t ? 95 : t, u = 100) : u = 100 / (this._recallAmount.length - 1);
                let e = Math.floor(100 * t / u);
                this.curMoney.updateVal(g.StringTools.formatC("%d", g.StringTools.numberToShowNumber(this._recallAmount[e])), this.gameDataInstance.tRoomData.currency.type)
            }
            this.totalRecallNum.string = g.StringTools.serverGoldToShowString(g.dataHandler.getUserData().m_totalBuyOut), this.updateBuyInAmount(this.curMoney.value), this.currency = this.gameDataInstance.tRoomData.currency;
            let m = !(this.currency.type == _.USD && g.appConfig.isPKW) && g.appConfig.getWalletConfig().shouldConvertCurrency(this.currency);
            this.convert_txt_currencyValue && (this.convert_txt_currencyValue.node.active = m), this.progress.node.getComponent(c).width = this._width * this.slider.progress, this.slider.node.on("slide", this.onSliderChange.bind(this))
        }
        setGameMain(t) {
            this.gameMain = t
        }
        onRecall() {
            g.AudioMgr.playButtonSound("button_click.mp3");
            let t = g.StringTools.showStringToNumber(this.curMoney.value);
            0 != t ? (g.gameNet.RequestBuyout(this.gameDataInstance.tRoomData.u32RoomId, t), this.node.active = !1) : this.node.active = !1
        }
        updateBuyInAmount(t) {
            let e = t;
            return this.convert_txt_currencyValue && this.convert_txt_currencyValue.updateVal(e, this.currency.type, !0), e
        }
        onHide() {
            this.node.active = !1
        }
        onSliderChange(t) {
            const e = this.slider;
            if (!h(e)) return;
            this.progress.getComponent(c).width = this.slider.progress * this._width;
            let a = g.StringTools.showStringToNumber(this.recallMax_text.value),
                r = this.slider.progress;
            if (0 == a) return;
            var n;
            1 == this._recallAmount.length ? (r = 100 == r ? 95 : r, n = 100) : n = 100 / (this._recallAmount.length - 1);
            let o = parseInt((100 * r / n).toString());
            1 == r ? this.curMoney.updateVal(g.StringTools.formatC("%d", g.StringTools.numberToShowNumber(this._recallAmount[this._recallAmount.length - 1])), this.gameDataInstance.tRoomData.currency.type) : this.curMoney.updateVal(g.StringTools.formatC("%d", g.StringTools.numberToShowNumber(this._recallAmount[o])), this.gameDataInstance.tRoomData.currency.type), this.updateBuyInAmount(this.curMoney.value)
        }
        onMinBuyInBtnClick() {
            const t = this.slider;
            h(t) && (t.progress = 0, this.onSliderChange(null))
        }
        onMaxBuyInBtnClick() {
            const t = this.slider;
            h(t) && (t.progress = 1, this.onSliderChange(null))
        }
    }).prototype, "bg", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(k.prototype, "totalRecallNum", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(k.prototype, "progress", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(k.prototype, "curMoney", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(k.prototype, "drawback_hold_times_text", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(k.prototype, "drawback_times_text", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(k.prototype, "recallMin_text", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(k.prototype, "recallMax_text", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(k.prototype, "modelbg", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(k.prototype, "slider", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(k.prototype, "convert_txt_currencyValue", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(k.prototype, "gameDataInstance", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = k)) || x));
    r._RF.pop()
}