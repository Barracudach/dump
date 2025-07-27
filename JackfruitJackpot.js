import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./cc.js";
import * as n from "./cv.js";

function main() {
    var r, o, l, c, s, u, p, _, g, b, d, h, m, f, k, S, w, T, y, j, P, C, L, v, x, J, N, z, D, M, I, R, A, B, W, G;
    a._RF.push({}, "71555GH6zdCp52GSeltcsP9", "JackfruitJackpot", void 0);
    const {
        ccclass: V,
        property: U
    } = cc._decorator;
    t("default", (r = U(cc.Node), o = U(cc.Node), l = U(cc.Node), c = U(cc.Node), s = U(cc.Label), u = U(cc.Label), p = U(cc.Label), _ = U(cc.Label), g = U(cc.Node), b = U(cc.Label), d = U(cc.Label), h = U(cc.Label), m = U(cc.Label), f = U(cc.Label), k = U(cc.Label), S = U(cc.ScrollView), w = U(cc.Prefab), V((y = class extends cc.Component {
        constructor(...t) {
            super(...t), e(this, "jackpot_button", j, this), e(this, "reward_button", P, this), e(this, "jackpot_panel", C, this), e(this, "reward_panel", L, this), e(this, "jackpot_num_title", v, this), e(this, "jackpot_num_label", x, this), e(this, "jackpot_des_title", J, this), e(this, "jackpot_des_label", N, this), e(this, "card_panels", z, this), e(this, "jackPotInfo_text", D, this), e(this, "bigWinnerName_text", M, this), e(this, "bigWinnerCard_type_text", I, this), e(this, "bigWinnerNumber_text", R, this), e(this, "bigWinnerTime_text", A, this), e(this, "reward_des_title", B, this), e(this, "scrollView", W, this), e(this, "itemPrefab", G, this), this._viewType = 0
        }
        onLoad() {
            n.MessageCenter.register("updata_jackpotdata", this.updateJackpotPanel.bind(this), this.node), n.MessageCenter.register("updata_jackpotReward", this.updateRewardPanel.bind(this), this.node), this._initLanguage(), this.setViewType(0)
        }
        onDestroy() {
            n.MessageCenter.unregister("updata_jackpotdata", this.node), n.MessageCenter.unregister("updata_jackpotReward", this.node)
        }
        _initLanguage() {
            n.StringTools.setLabelString(this.jackpot_panel, "jackpot_cardtype_label", "GameJackPot_jackPot_panel_awardType_txt"), n.StringTools.setLabelString(this.jackpot_panel, "jackpot_proportion_label", "GameJackPot_jackPot_panel_awardPercent_txt"), n.StringTools.setLabelString(this.jackpot_panel, "card_panel_0/cardtype_label", "M_UITitle122"), n.StringTools.setLabelString(this.jackpot_panel, "card_panel_1/cardtype_label", "M_UITitle121"), n.StringTools.setLabelString(this.jackpot_panel, "card_panel_2/cardtype_label", "M_UITitle120"), n.StringTools.setLabelString(this.reward_button, "label", "GameJackPot_button_panel_jackpotRecord_button"), n.StringTools.setLabelString(this.jackpot_button, "label", "GameJackPot_button_panel_jackpot_button"), n.StringTools.setLabelString(this.reward_panel, "big_winner_panel/jackPotInfo_text", "GameJackPot_jackPotSign_panel_Panel_5_jackPotInfo_text");
            let t = n.StringTools.numToFloatString(n.JackfruitManager.tRoomData.param.ante);
            this.jackpot_num_title.string = n.StringTools.formatC(n.config.getStringData("UIGameJackpotBlindAwardAmount"), t.toString()), this.jackpot_des_title.string = n.StringTools.formatC(n.config.getStringData("UIGameJackpotRecordAwardSet"), t.toString()), this.reward_des_title.string = n.StringTools.formatC(n.config.getStringData("jackfruit_Jackpot_reward_des_title"), t.toString())
        }
        onBtnSelect(t, e) {
            this._viewType != n.Number(e) && (n.AudioMgr.playButtonSound("tab.mp3"), this.setViewType(n.Number(e)))
        }
        onBtnClose(t) {
            this.node.active = !1
        }
        _setBtnSelect(t, e) {
            cc.find("select_img", e).active = t, cc.find("noselect_img", e).active = !t, cc.find("label", e).opacity = t ? 255 : 128
        }
        _setCardProportion(t, e) {
            cc.find("proportion_label", this.card_panels[t]).getComponent(cc.Label).string = e.toString() + "%"
        }
        _getAmounts(t) {
            let e = t.toString(),
                i = Math.abs(7 - e.length);
            for (let t = 0; t < i; t++) e.length < 7 ? e = "0" + e : e.length > 7 && (e = e.substr(1, e.length - t - 1));
            return e
        }
        setViewType(t) {
            this._viewType = t, this._setBtnSelect(0 == this._viewType, this.jackpot_button), this._setBtnSelect(1 == this._viewType, this.reward_button), this.jackpot_panel.active = 0 == this._viewType, this.reward_panel.active = 1 == this._viewType, 0 == this._viewType ? this.updateJackpotPanel() : this.updateRewardPanel()
        }
        updateJackpotPanel() {
            let t = n.JackfruitManager.tRoomData.jackpotDataInfo;
            this._setCardProportion(0, n.StringTools.div(t.huangTongPer, 100)), this._setCardProportion(1, n.StringTools.div(t.tongHuaShunPer, 100)), this._setCardProportion(2, n.StringTools.div(t.siTiaoPer, 100));
            let e = n.JackfruitManager.tRoomData.jackpotLeftAmount,
                i = Math.round(n.StringTools.serverGoldToShowNumber(e));
            this.jackpot_num_label.string = this._getAmounts(i);
            let a = n.StringTools.numToFloatString(t.boundaryScore),
                r = n.StringTools.numToFloatString(t.contrScore);
            this.jackpot_des_label.string = n.StringTools.formatC(n.config.getStringData("jackfruit_JackpotDetail"), a, r, r)
        }
        updateRewardPanel() {
            this.scrollView.content.removeAllChildren();
            let t = n.JackfruitManager.tRoomData.JackpotRecords;
            if (t.length <= 0) return;
            let e = n.JackfruitManager.tRoomData.luckyOne,
                i = n.StringTools.numToFloatString(e.awardAmount);
            this.jackPotInfo_text.node.color = cc.color(255, 203, 38), this.jackPotInfo_text.string = n.StringTools.formatC(n.config.getStringData("UIGameJackpotPlayerAwardAmount"), e.playerName, i), n.StringTools.setShrinkString(this.bigWinnerName_text.node, e.playerName, !0), this.bigWinnerCard_type_text.string = n.config.getStringData(`M_UITitle${112+e.level}`), this.bigWinnerNumber_text.string = i, this.bigWinnerTime_text.string = 0 == e.awardTime ? "" : n.StringTools.formatTime(e.awardTime, n.Enum.eTimeType.Month_Day, !1);
            for (let e = 0; e < t.length; e++) {
                let i = cc.instantiate(this.itemPrefab),
                    a = i.getChildByName("playerName_text").getComponent(cc.Label),
                    r = i.getChildByName("cardTypeName_text").getComponent(cc.Label),
                    o = i.getChildByName("award_text").getComponent(cc.Label),
                    l = i.getChildByName("day_text").getComponent(cc.Label);
                n.StringTools.setShrinkString(a.node, t[e].playerName, !0), o.string = n.StringTools.numberToString(t[e].awardAmount / 100), r.string = n.config.getStringData(`M_UITitle${112+t[e].level}`), l.string = n.StringTools.formatTime(t[e].awardTime, n.Enum.eTimeType.Month_Day, !1);
                this.scrollView.content.getContentSize().width;
                i.setPosition(0, -50 * (.5 + e)), this.scrollView.content.addChild(i), i.active = !0
            }
        }
    }, j = i(y.prototype, "jackpot_button", [r], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = i(y.prototype, "reward_button", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = i(y.prototype, "jackpot_panel", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = i(y.prototype, "reward_panel", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = i(y.prototype, "jackpot_num_title", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = i(y.prototype, "jackpot_num_label", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = i(y.prototype, "jackpot_des_title", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = i(y.prototype, "jackpot_des_label", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = i(y.prototype, "card_panels", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), D = i(y.prototype, "jackPotInfo_text", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = i(y.prototype, "bigWinnerName_text", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = i(y.prototype, "bigWinnerCard_type_text", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = i(y.prototype, "bigWinnerNumber_text", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = i(y.prototype, "bigWinnerTime_text", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = i(y.prototype, "reward_des_title", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = i(y.prototype, "scrollView", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = i(y.prototype, "itemPrefab", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = y)) || T));
    a._RF.pop()
}