import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./cv.js";
import * as d from "./MultipleGame.js";
import * as p from "./MultipleRoomManager.js";
import * as g from "./FormatParser.js";
import * as b from "./GameViewLoader.js";
import * as f from "./Translator.js";
import * as w from "./Enum.js";
import * as m from "./Enum.js";
import * as E from "./CurrencyValue.js";
import * as G from "./ConfigEnablerNode.js";
import * as _ from "./MultipleGameJsng.js";

function main() {
    var L, N, P, I, v, S, W, y, A, M, T, k, C, B, U, D, F, O, R, z, j, x, H;
    n._RF.push({}, "69b70NA2ZpIk5crn9AeBn6a", "GameEndPopUpJsng", void 0);
    const {
        ccclass: V,
        property: J
    } = o;
    e("GameEndPopUpJsng", (L = J(a), N = J(E), P = J(r), I = J(r), v = J(a), S = J(a), W = J(a), y = J(a), A = J(a), M = J(G), V(((H = class e extends l {
        constructor(...e) {
            super(...e), this.prefabUrl = "prefabs/GlobalSpins/game_end_pop_up_jsng", this.gameEndPopUpPrefab = null, i(this, "jackpotNode", C, this), i(this, "reward", B, this), i(this, "rank", U, this), i(this, "title", D, this), i(this, "rewardNode", F, this), i(this, "watchNode", O, this), i(this, "watchButtonBG", R, this), i(this, "eyeIcon", z, this), i(this, "watchText", j, this), i(this, "nodeEnabler", x, this), this.callback = void 0, this.reEnter = void 0, this.levelId = 0, this.isGPS = !1, this._willWatch = !1, this._borderRoundRadius = 30, this._multipleGameInfo = null, this.regFee = 0, this.roomStore = null, this.rewardMsg = null
        }
        static getInstance() {
            return e.g_instance || (e.g_instance = new e), e.g_instance
        }
        set willWatch(e) {
            this._willWatch = e, this.watchButtonBG.active = e, this.eyeIcon.getComponent(s).color = (new c).fromHEX(e ? "#E9E1D1" : "#86899E"), this.watchText.getComponent(s).color = (new c).fromHEX(e ? "#E9E1D1" : "#86899E")
        }
        get willWatch() {
            return this._willWatch
        }
        onLoad() {
            u.MessageCenter.register(m.LeaveToLobby, this.autoWillWatch.bind(this, !0), this), u.MessageCenter.register(u.config.CHANGE_LANGUAGE, this.onLanguageChanged.bind(this), this)
        }
        onDestroy() {
            u.MessageCenter.unregister(m.LeaveToLobby, this), u.MessageCenter.unregister(u.config.CHANGE_LANGUAGE, this)
        }
        callGameEndPopUp(e, t, i, n, a = null, r = !0) {
            this.updateInfo(t, i), this.callback = n, this.reEnter = a, this.rewardMsg = t, this.roomStore = e, this.isGPS = i.isGPS, this.regFee = i.regFee, this._multipleGameInfo = i.multipleGameInfo, this.willWatch = _.isSngCacheGameModelWatchingRoom(e.roomId), this.watchNode.active && !r && (this.willWatch = !1, this.watchNode.active = !1, this.saveWillWatchData())
        }
        updateInfo(e, t) {
            console.log("pat_check jsng game end info", e), this.levelId = t.levelId, e.reward > 0 ? (this.nodeEnabler.enabled = !0, this.title.string = f("GLOBAL_SPINS.GAME_END.TITLE_WIN"), this.rewardNode.active = !0, this.reward.updateVal(g.ThousandPointFormat(e.reward), w.USD, null, w.USD), this.jackpotNode.active = t.isJackpotMatch) : (this.title.string = f("GLOBAL_SPINS.GAME_END.TITLE_LOSE"), this.rewardNode.active = !1, this.jackpotNode.active = !1, this.nodeEnabler.setActiveNodes(!1), this.nodeEnabler.enabled = !1), this.rank.string = f("GLOBAL_SPINS.GAME_END.RANK") + " " + e.rank + "/3", this.watchNode.active = 3 == e.rank
        }
        updateTranslation(e) {
            e && (e.reward > 0 ? this.title.string = f("GLOBAL_SPINS.GAME_END.TITLE_WIN") : this.title.string = f("GLOBAL_SPINS.GAME_END.TITLE_LOSE"), this.rank.string = f("GLOBAL_SPINS.GAME_END.RANK") + " " + e.rank + "/3")
        }
        onLanguageChanged() {
            this.updateTranslation(this.rewardMsg)
        }
        autoWillWatch() {
            this.watchNode.active && (this.willWatch = !0, this.saveWillWatchData())
        }
        onReturnHallClicked() {
            this.node.active = !1, this.willWatch || this.callback && this.callback instanceof Function && this.callback()
        }
        onPlayAgainClicked() {
            if (this.willWatch) {
                const e = e => {
                    this.showLimitErrorPopup(e)
                };
                if (!b.checkValidOpeningGame(p.Sng, e)) return
            }
            var e;
            (this.node.active = !1, u.dataHandler.getUserData().autoShowBuyInSNGValue = this.regFee, this.onReturnHallClicked(), u.appConfig.getGeneralConfig().multiWindowEnabled) ? (u.MessageCenter.send("jumpToSng"), u.MessageCenter.send("reloadSngGameList"), u.focusWindow(1)) : null == (e = d.instance) || e.exitToLobby(!0)
        }
        unlockPlayAgainButton(e) {
            h(this.playAgainButton) && (this.playAgainButton.enabled = e)
        }
        showLimitErrorPopup(e) {
            const t = f("GLOBAL_SPINS.BUY_IN_POPUP.MULTI_TABLE_LIMIT_TITLE");
            u.popUp.showMsg({
                txt: t,
                isTwoBtn: !1,
                sureCallback: () => {}
            })
        }
        watchOnclick() {
            this.willWatch = !this.willWatch, this.saveWillWatchData()
        }
        saveWillWatchData() {
            var e;
            this._multipleGameInfo && (this._multipleGameInfo.isWatching = this.willWatch), this.willWatch ? _.cacheSngGameModel(this._multipleGameInfo, this.rewardMsg) : _.removeCacheSngGameModel(null == (e = this.roomStore) ? void 0 : e.roomId)
        }
        loadPrefab() {
            return new Promise(((e, t) => {
                this.gameEndPopUpPrefab && h(this.gameEndPopUpPrefab, !0) ? e(this.gameEndPopUpPrefab) : u.tools.loadAssetFromBundle(this.prefabUrl).then((t => {
                    this.gameEndPopUpPrefab = t, e instanceof Function && e(this.gameEndPopUpPrefab)
                })).catch((e => {
                    t instanceof Function && t(e)
                }))
            }))
        }
    }).g_instance = void 0, C = t((k = H).prototype, "jackpotNode", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(k.prototype, "reward", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(k.prototype, "rank", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(k.prototype, "title", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(k.prototype, "rewardNode", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(k.prototype, "watchNode", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(k.prototype, "watchButtonBG", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(k.prototype, "eyeIcon", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(k.prototype, "watchText", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(k.prototype, "nodeEnabler", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = k)) || T));
    n._RF.pop()
}