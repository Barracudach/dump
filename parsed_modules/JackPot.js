import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./ListView.js";
import * as g from "./cv.js";
import * as d from "./GameJackPotSignItem.js";
import * as m from "./GameJackpotItem.js";
import * as _ from "./ThemeSystem.js";
import * as f from "./CurrencyValue.js";
import * as b from "./SlideView.js";
import * as k from "./FormatParser.js";
import * as S from "./GameSceneInstance.js";
import * as w from "./GameJackPotSignItemLuckDog.js";
import * as y from "./ScrollViewItemPool.js";
import * as P from "./ColorSystemType.js";
import * as J from "./ColorSystemTypeOther.js";

function main() {
    var I, D, C, A, v, T, R, j, x, M, L, G, V, B, z, U, E, N, O, F, H, W, $, K, q, Q, X, Y, Z, tt, et, nt;
    a._RF.push({}, "4bd13CKwtlDDqxxaELU33sj", "JackPot", void 0);
    const {
        ccclass: at,
        property: it
    } = s;
    t("JackPot", (I = it(b), D = it(i), C = it(i), A = it(i), v = it(y), T = it(o), R = it(r), j = it(_), x = it(i), M = it(l), L = it(f), G = it(f), V = it(w), B = it(i), z = S("GameDataInstance"), at((N = e((E = class extends c {
        constructor(...t) {
            super(...t), n(this, "slideView", N, this), n(this, "jackPot_panel", O, this), n(this, "allJackpotInfo_panel", F, this), n(this, "jackpot_record_panel", H, this), n(this, "potSignScrollViewItemPool", W, this), n(this, "infoScorllView", $, this), n(this, "jackpot_toggle", K, this), n(this, "mainTabs_textsThemeSystem", q, this), n(this, "recent_winners_panel", Q, this), n(this, "recent_winners_text", X, this), n(this, "jackpot_level_amount_text", Y, this), n(this, "jackpot_total_amount_text", Z, this), n(this, "gameJackPotSignItemLuckDog", tt, this), n(this, "no_winner_panel", et, this), n(this, "gameDataInstance", nt, this), this.isShort = !1, this.blindArr = [], this.award_type = [], this._isRecordUIActive = !1
        }
        onLoad() {
            g.resMgr.adaptWidget(this.node, !0, !1), g.MessageCenter.register(g.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node), g.MessageCenter.register("currentRoomJackpot", this.updateJackpotPanel.bind(this), this.node), g.MessageCenter.register("on_jackpot_data", this.updateAllJackpotInfoPanel.bind(this), this.node), g.MessageCenter.register("jackpotAwardRecord", this._updateJackpotRecordPanel.bind(this), this.node), this.isShort = this.gameDataInstance.tRoomData.pkRoomParam.game_mode == g.Enum.CreateGameMode.CreateGame_Mode_Short, this.initLanguage()
        }
        start() {
            this.node.getComponentsInChildren(u).forEach((t => t.enabled = !0))
        }
        onEnable() {
            this.jackpot_toggle.isChecked = !0, this.showJackpotPanel(), this.slideView && this.slideView.show(!1, this.hideJackpot)
        }
        hideJackpot() {
            this._isRecordUIActive = !1, this.node.active = !1
        }
        onDestroy() {
            g.MessageCenter.unregister(g.config.CHANGE_LANGUAGE, this.node), g.MessageCenter.unregister("currentRoomJackpot", this.node), g.MessageCenter.unregister("on_jackpot_data", this.node), g.MessageCenter.unregister("jackpotAwardRecord", this.node)
        }
        initLanguage() {
            let t = g.config.getblindString(this.gameDataInstance.tRoomData.pkRoomParam.rule_blind_enum - 1);
            if (this.recent_winners_text) {
                let e = "GameJackPot_record_panel_recent_winner_text";
                this.isShort && (t = t.substr(0, t.indexOf("/")), e = "Aof_game_short_ante_record"), this.recent_winners_text.string = g.StringTools.formatC(g.config.getStringData(e), t.toString())
            }
            this.updateJackpotLevel()
        }
        setDissPanel() {
            this.jackPot_panel.active = !1, this.jackpot_record_panel.active = !1, this.allJackpotInfo_panel.active = !1, this.updateMainTabsTextThemeColor()
        }
        updateMainTabsTextThemeColor() {
            for (let t in this.mainTabs_textsThemeSystem) {
                let e = this.mainTabs_textsThemeSystem[t].node.parent.getComponent(r).isChecked ? J.TextColorBlueLight : J.ToggleKnobNormal;
                this.mainTabs_textsThemeSystem[t].setColorScheme(P.Other, e)
            }
        }
        onBtnAllJackpotInfo() {
            this._isRecordUIActive = !1, g.AudioMgr.playButtonSound("tab"), this.setDissPanel(), this.allJackpotInfo_panel.active = !0
        }
        updateAllJackpotInfoPanel() {
            let t = 0,
                e = g.GameDataManager.tJackPot.baseJackpotInfos.filter((t => t.club_id == this.gameDataInstance.tRoomData.pkRoomParam.club_id));
            this.initBlindArr(e);
            for (let n = 0; n < e.length; n++)
                for (let a = 0; a < this.blindArr.length; a++) this.blindArr[a] == e[n].blind_level - 1 && (t += e[n].amount);
            let n = Math.round(parseInt(g.StringTools.numberToShowString(t)) / 100);
            this.jackpot_total_amount_text.updateVal(k.ThousandPointFormat(n), this.gameDataInstance.tRoomData.currency.type)
        }
        onBtnTerms() {
            g.AudioMgr.playButtonSound("button_click.mp3");
            const t = g.config.getCurrentLanguageDetails().code.toString(),
                e = g.dataHandler.getUserData().countryISO2,
                n = this.getWPTJackpotsLink(t, e);
            g.native.openUrl(n)
        }
        getWPTJackpotsLink(t, e) {
            return ["en", "en-US"].includes(t) ? "https://wptglobal.com/wpt-jackpots" : `https://wptglobal.com/${t}/wpt-jackpots-${t}`
        }
        onBtnJackpot() {
            this._isRecordUIActive = !1, g.AudioMgr.playButtonSound("tab"), this.showJackpotPanel()
        }
        showJackpotPanel() {
            this._isRecordUIActive = !1, this.setDissPanel(), this.jackPot_panel.active = !0, this.updateJackpotPanel()
        }
        updateJackpotPanel() {
            this.updateJackpotLevel();
            let t = g.GameDataManager.tJackPot.currentRoomJackpot.CurrentRoomAwardTypes,
                e = g.StringTools.getArrayLength(t);
            for (let n = 0; n < e; n++) {
                let e = t[n].hand_level;
                p(`handsPanel/hand_${e}/handPercent`, this.jackPot_panel).getComponent(l).string = t[n].award_percent.toString() + "%"
            }
            let n = g.GameDataManager.tJackPot.getJackpotAmountByBlind(this.gameDataInstance.tRoomData.pkRoomParam.rule_blind_enum, this.gameDataInstance.tRoomData.pkRoomParam.club_id),
                a = Math.round(parseInt(g.StringTools.numberToShowString(n)) / 100);
            this.jackpot_level_amount_text.updateVal(k.ThousandPointFormat(a), this.gameDataInstance.tRoomData.currency.type)
        }
        updateJackpotLevel() {
            var t;
            let e = g.config.getblindString(this.gameDataInstance.tRoomData.pkRoomParam.rule_blind_enum - 1),
                n = null == (t = this.jackPot_panel) || null == (t = t.getChildByName("jackPot_blind_text")) ? void 0 : t.getComponent(l);
            if (n)
                if (this.isShort) {
                    let t = e.substr(0, e.indexOf("/"));
                    n.string = g.StringTools.formatC(g.config.getStringData("Aof_game_short_level_number"), t.toString())
                } else n.string = g.StringTools.formatC(g.config.getStringData("UIGameJackpotBlindAwardAmount").toUpperCase(), e.toString())
        }
        onBtnJackpotRecord() {
            g.AudioMgr.playButtonSound("tab"), this._isRecordUIActive || (this._isRecordUIActive = !0, this.setDissPanel(), this.jackpot_record_panel.active = !0, this._updateJackpotSignRecord())
        }
        _updateJackpotSignRecord() {
            if (!this.potSignScrollViewItemPool) throw new Error("JackPot :: _updateJackpotSignRecord : Pot sign scroll view item pool not found.");
            const t = this.award_type ? this.award_type.length : 0;
            this.potSignScrollViewItemPool.init({
                itemCount: t
            });
            const e = this.potSignScrollViewItemPool.getItems();
            e ? e.forEach(((t, e) => {
                const n = t.getComponent(d);
                if (n) {
                    const t = this.award_type[e];
                    n.setdata(t), n.toggleBackground(e % 2 == 0)
                } else console.error(`Failed to get GameJackPotSignItem script from item ${e}.`)
            })) : console.error("JackPot :: _updateJackpotSignRecord : sign items is empty!")
        }
        _updateJackpotRecordPanel() {
            let t = g.GameDataManager.tJackPot.award_players;
            this.award_type = (t => {
                const e = Object.create(null);
                t.forEach((t => {
                    const n = t.game_uuid,
                        a = e[n];
                    a ? a.push(t) : e[n] = [t]
                }));
                const n = [];
                return Object.values(e).forEach((t => {
                    n.push((t => ({
                        data: t.length > 1 ? t.slice() : t[0]
                    }))(t))
                })), n
            })(t);
            let e = g.GameDataManager.tJackPot.luckyDog;
            null != e ? (this.gameJackPotSignItemLuckDog.node.active = !0, this.gameJackPotSignItemLuckDog.setdata(e)) : this.gameJackPotSignItemLuckDog.node.active = !1;
            const n = t.length > 0;
            this.recent_winners_panel.active = n, this.no_winner_panel.active = !n, this._isRecordUIActive && this._updateJackpotSignRecord()
        }
        initBlindArr(t) {
            this.blindArr = [];
            let e = [],
                n = [];
            for (let t = 0; t < 24; t++) {
                let a = g.config.getblindString(t);
                a = a.substr(0, a.indexOf("/")), e[t] = g.Number(a), n[t] = g.Number(a)
            }
            e.sort((function(t, e) {
                return t - e
            }));
            for (let a = 0; a < e.length; a++)
                for (let i = 0; i < n.length; i++)
                    if (e[a] == n[i]) {
                        for (let e = 0; e < t.length; e++) t[e].blind_level - 1 == i && this.blindArr.push(i);
                        break
                    } let a = [],
                i = 0;
            for (let e = 0; e < this.blindArr.length;) {
                let n = [];
                for (let a = 0; a < 3; a++) {
                    let o = a + 3 * i;
                    if (!(o < this.blindArr.length)) break;
                    {
                        let a = {
                            blind: this.blindArr[o],
                            amount: 0
                        };
                        for (let e = 0; e < t.length; e++) this.blindArr[o] == t[e].blind_level - 1 && (a.amount = t[e].amount);
                        n.push(a), e++
                    }
                }
                a.push({
                    type: 0,
                    data: n
                }), i++
            }
            this.infoScorllView.getComponent(h).init(this.bindAllJackpotInfoCallfunc.bind(this), this.getItemType.bind(this)), this.infoScorllView.getComponent(h).notifyDataSetChanged(a)
        }
        bindAllJackpotInfoCallfunc(t, e, n) {
            0 == e.type && t.getComponent(m).setdata(e.data)
        }
        getItemType(t, e) {
            return t.type
        }
    }).prototype, "slideView", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(E.prototype, "jackPot_panel", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(E.prototype, "allJackpotInfo_panel", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(E.prototype, "jackpot_record_panel", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(E.prototype, "potSignScrollViewItemPool", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(E.prototype, "infoScorllView", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(E.prototype, "jackpot_toggle", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(E.prototype, "mainTabs_textsThemeSystem", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Q = e(E.prototype, "recent_winners_panel", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(E.prototype, "recent_winners_text", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(E.prototype, "jackpot_level_amount_text", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(E.prototype, "jackpot_total_amount_text", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(E.prototype, "gameJackPotSignItemLuckDog", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(E.prototype, "no_winner_panel", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(E.prototype, "gameDataInstance", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = E)) || U));
    a._RF.pop()
}