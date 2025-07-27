import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./cv.js";
import * as h from "./GameSceneInstance.js";

function main() {
    var d, _, p, b, m, f, G, T, S, P, B, v, R, C, x, z, y, I, E, D, L, N, w, q, H, A;
    s._RF.push({}, "6104e5KC/NAkax20TCTtL8r", "GuessHandCard", void 0);
    const {
        ccclass: F,
        property: M
    } = l;
    e("GuessHandCard", (d = M(i), _ = M(i), p = M(i), b = M(i), m = M(i), f = M(o), G = M(o), T = M(a), S = M(a), P = M(u), B = M(o), v = M(u), F((x = t((C = class extends r {
        constructor(...e) {
            super(...e), n(this, "guess_button_1", x, this), n(this, "guess_button_2", z, this), n(this, "close_button", y, this), n(this, "guess_update_button", I, this), n(this, "continue_button", E, this), this._bet_seqno = 0, n(this, "guessPanel", D, this), n(this, "continuePanel", L, this), n(this, "guessButton1Label", N, this), n(this, "guessButton2Label", w, this), n(this, "continueRichText", q, this), n(this, "continueButtonHook", H, this), n(this, "guessPanelRichText", A, this), this._localizableElements = {}
        }
        onLoad() {
            g.MessageCenter.register("guess_set_bet_opt", this.onGuessSetBetOpt.bind(this), this.node), this._localizableElements = {
                guessPanel: void 0,
                continuePanel: void 0
            }
        }
        onDestroy() {
            g.MessageCenter.unregister("guess_set_bet_opt", this.node), this._localizableElements = {}
        }
        updatePanelsTexts() {
            this._localizableElements.guessPanel && this.updateGuessPanelText(this._localizableElements.guessPanel.oddsData), this._localizableElements.continuePanel && this.updateContinuePanelText(this._localizableElements.continuePanel.option, this._localizableElements.continuePanel.oddsPercent, this._localizableElements.continuePanel.amount, this._localizableElements.continuePanel.repeat)
        }
        updateGuessPanelText(e) {
            let t = g.StringTools.formatC(g.config.getStringData("UIGuessType" + e.option)),
                n = g.StringTools.clientGoldByServer(e.odds_percent).toString();
            const s = g.config.getStringData("GameScene_gameMain_panel_guess_hand_card_guess_panel_guess_richText"),
                i = g.StringTools.formatC(s, t, n);
            g.StringTools.setRichTextString(this.guessPanelRichText.node, i)
        }
        setGuessBeginBet(e) {
            this.guessPanel.active = !0, this.continuePanel.active = !1, this.setGuessRichText(), this.guessButton1Label.string = g.StringTools.numToFloatString(e.betamout_opt[0]), this.guessButton2Label.string = g.StringTools.numToFloatString(e.betamout_opt[1]), this._bet_seqno = e.bet_seqno
        }
        setGuessBetRsp(e) {
            this.guessPanel.active = !1, this.continuePanel.active = !0, this._localizableElements.continuePanel = {
                option: e.odds.option,
                oddsPercent: e.odds.odds_percent,
                amount: e.amount,
                repeat: e.repeat
            }, this.updateContinuePanelText(e.odds.option, e.odds.odds_percent, e.amount, e.repeat)
        }
        updateContinuePanelText(e, t, n, s) {
            var i;
            let o = g.StringTools.formatC(g.config.getStringData("UIGuessType" + e)),
                a = g.StringTools.clientGoldByServer(t).toString(),
                u = g.StringTools.numToFloatString(n);
            this.continueButtonHook.active = s, this.continueRichText.fontSize = g.config.getCurrentLanguage() == g.Enum.LANGUAGE_TYPE.zh_CN || g.config.getCurrentLanguage() == g.Enum.LANGUAGE_TYPE.zh_TW ? 28 : 25;
            const l = g.config.getStringData("GameScene_gameMain_panel_guess_hand_card_continue_panel_continue_richText"),
                r = g.StringTools.formatC(l, o, a, u);
            g.StringTools.setRichTextString(this.continueRichText.node, r), null == (i = this.continuePanel.getComponent(c)) || i.updateLayout(), g.resMgr.adaptWidget(this.node)
        }
        onGuessButton(e, t) {
            let n = 1 == t ? this.guessButton1Label : this.guessButton2Label,
                s = g.StringTools.showStringToNumber(n.string),
                i = g.Number(g.tools.GetStringByCCFile("guess_option_index")),
                o = h.getInstanceGameId(null == this ? void 0 : this.node);
            const a = h.getInstanceGameData(null == this ? void 0 : this.node);
            o == g.Enum.GameId.Allin ? g.aofNet.RequestGuessBet(a.tRoomData.u32RoomId, a.tRoomData.guess_odds_list[i].option, s, this._bet_seqno) && (this.node.active = !1) : g.gameNet.RequestGuessBet(a.tRoomData.u32RoomId, a.tRoomData.guess_odds_list[i].option, s, this._bet_seqno) && (this.node.active = !1)
        }
        onGuessCloseButton(e) {
            const t = h.getInstanceGameData(null == this ? void 0 : this.node);
            g.MessageCenter.send("guess_close_button", t);
            let n = h.getInstanceGameId(null == this ? void 0 : this.node);
            const s = h.getInstanceRoomId(null == this ? void 0 : this.node);
            n == g.Enum.GameId.Allin ? g.aofNet.RequestUploadGuessState(s) : g.gameNet.RequestUploadGuessState(s)
        }
        onGuessUpdateButton(e) {
            let t = g.Number(g.tools.GetStringByCCFile("guess_option_index"));
            t++;
            t >= h.getInstanceGameData(null == this ? void 0 : this.node).tRoomData.guess_odds_list.length && (t = 0), g.tools.SaveStringByCCFile("guess_option_index", String(t)), this.setGuessRichText()
        }
        onGuessContinueButton(e) {
            let t = h.getInstanceGameId(null == this ? void 0 : this.node);
            const n = h.getInstanceRoomId(null == this ? void 0 : this.node);
            t == g.Enum.GameId.Allin ? g.aofNet.RequestGuessSetBetOpt(n, !this.continueButtonHook.active) : g.gameNet.RequestGuessSetBetOpt(n, !this.continueButtonHook.active)
        }
        setGuessRichText() {
            let e = g.Number(g.tools.GetStringByCCFile("guess_option_index")),
                t = h.getInstanceGameData(null == this ? void 0 : this.node).tRoomData.guess_odds_list[e];
            this._localizableElements.guessPanel = {
                oddsData: t
            }, this.updateGuessPanelText(t)
        }
        onGuessSetBetOpt(e) {
            if (this.continueButtonHook.active = e, e) {
                var t;
                let e = null == (t = h.getInstance(null == this ? void 0 : this.node)) || null == (t = t.room) ? void 0 : t.gameScene;
                g.TP.showMsg(g.config.getStringData("UIGuessMsg"), !1, null, null, !1, !1, "", !1, a.HorizontalAlign.CENTER, !1, e)
            }
        }
    }).prototype, "guess_button_1", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(C.prototype, "guess_button_2", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(C.prototype, "close_button", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(C.prototype, "guess_update_button", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(C.prototype, "continue_button", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(C.prototype, "guessPanel", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(C.prototype, "continuePanel", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(C.prototype, "guessButton1Label", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(C.prototype, "guessButton2Label", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(C.prototype, "continueRichText", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(C.prototype, "continueButtonHook", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(C.prototype, "guessPanelRichText", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = C)) || R));
    s._RF.pop()
}