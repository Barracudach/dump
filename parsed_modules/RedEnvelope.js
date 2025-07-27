import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./cv.js";
import * as m from "./ThemeSystem.js";
import * as b from "./RedEnvelopeHistoryStripe.js";
import * as f from "./RedEnvelopeWinnerStripe.js";
import * as w from "./ListView.js";
import * as _ from "./SlideView.js";
import * as y from "./ColorSystemTypeOther.js";
import * as L from "./ColorSystemType.js";
import * as C from "./GameSceneInstance.js";
import * as S from "./AudioComp.js";

function main() {
    var T, D, I, v, P, x, V, R, H, G, z, B, A, E, N, k, F, U, W, M, J, O, q, j, K, Q, X, Y, Z, $, ee, te, ie, ne, ae, re;
    n._RF.push({}, "fe1a0xa949KLrAl/E1EGNMD", "RedEnvelope", void 0);
    const {
        ccclass: oe,
        property: se
    } = u;
    e("default", (T = se(a), D = se(r), I = se(o), v = se(o), P = se(o), x = se(m), V = se(a), R = se(a), H = se(s), G = se(l), z = se(s), B = se(l), A = se(_), E = se(a), N = se(a), k = se(a), F = C("GameDataInstance"), oe((M = t((W = class extends d {
        constructor(...e) {
            super(...e), i(this, "bg_Node", M, this), i(this, "leaderBoard_Top50Winners", J, this), i(this, "leaderboard_toggle", O, this), i(this, "whatIsGiftFest_toggle", q, this), i(this, "toggleItemsList", j, this), i(this, "mainTabs_textsThemeSystem", K, this), i(this, "whatIsGiftFest_panel", Q, this), i(this, "leaderboard_panel", X, this), i(this, "leaderboardListView", Y, this), i(this, "leaderboardList_item", Z, this), i(this, "winnerHistoryListView", $, this), i(this, "winnerHistoryList_item", ee, this), i(this, "mainPanelSlideView", te, this), i(this, "noWinnersAnnounced_Parent", ie, this), i(this, "winnerHistory_Parent", ne, this), i(this, "leaderboard_Parent", ae, this), this.cellIdx = 0, this.timeCount = 0, this.lumpCount = 5, this.txts = [], i(this, "gameDataInstance", re, this)
        }
        onLoad() {
            var e;
            p.MessageCenter.register("showLuckTurnSnaplist", this.updateView.bind(this), this.node), p.MessageCenter.register(p.config.CHANGE_LANGUAGE, this._initLanguage.bind(this), this.node), this.noWinnersAnnounced_Parent.active = !1, null == (e = this.bg_Node) || e.on(a.EventType.TOUCH_END, (function() {
                this.hideView()
            }), this)
        }
        onDestroy() {
            p.MessageCenter.unregister("showLuckTurnSnaplist", this.node), p.MessageCenter.unregister(p.config.CHANGE_LANGUAGE, this.node)
        }
        start() {
            this._initLanguage(), this.LampListBind(), this.RecordListBind()
        }
        LampListBind() {
            this.winnerHistoryListView.getComponent(w).bindScrollEventTarget(this), this.winnerHistoryListView.getComponent(w).init(this.bindLamp.bind(this))
        }
        _initLanguage() {
            this.leaderBoard_Top50Winners.string = p.StringTools.formatC(p.config.getStringData("red_envelope_top_50_winners"), 50)
        }
        bindLamp(e, t, i) {
            e.getComponent(b).init(t, this.winnerHistoryListView.content.getComponent(h).width)
        }
        RecordListBind() {
            this.leaderboardListView.getComponent(w).bindScrollEventTarget(this), this.leaderboardListView.getComponent(w).init(this.bindRecord.bind(this))
        }
        bindRecord(e, t, i) {
            e.getComponent(f).init(t, i)
        }
        onEnable() {
            this.leaderboard_toggle.isChecked = !0, this.showLeadeboardPanel()
        }
        getLanguageIndx() {
            return p.config.getCurrentLanguageDetails().index
        }
        updateView() {
            c("DJ :: received updated lamp data"), this.updateLeaderBoardPanel()
        }
        getLampIdx() {
            this.cellIdx + 1 == this.lumpCount ? this.cellIdx = 0 : this.cellIdx = this.cellIdx + 1
        }
        scorllView() {
            for (let e = 0; e < this.lumpCount; e++) this.cellIdx = e, this.setLampData(-1 * this.cellIdx)
        }
        startUpdate() {
            var e;
            this.txts = [], this.lumpCount = 5, this.schedule(this.onUpdate, 0), p.worldNet.RequestLuckTurntableSnaplistResult(8, 50, null == (e = this.gameDataInstance) || null == (e = e.tRoomData) ? void 0 : e.u32RoomId), this.mainPanelSlideView ? this.mainPanelSlideView.show(!1) : this.node.active = !0
        }
        hideView() {
            this.unschedule(this.onUpdate), this.txts = [], this.mainPanelSlideView ? this.mainPanelSlideView.hide() : this.node.active = !1
        }
        onUpdate(e) {
            var t;
            this.timeCount > 5 && (this.timeCount = 0, 0 != p.dataHandler.getUserData().luckTurntablesEndTime && p.worldNet.RequestLuckTurntableSnaplistResult(5, 50, null == (t = this.gameDataInstance) || null == (t = t.tRoomData) ? void 0 : t.u32RoomId))
        }
        setLampData(e) {
            let t = new a;
            if (t.addComponent(g), t.getComponent(h).setAnchorPoint(0, .5), t.getComponent(g).fontSize = 28, t.getComponent(g).maxWidth = 829, t.setPosition(5, 80 * e - 20), this.txts.push(t), p.dataHandler.getUserData().lamp_list.length > this.cellIdx) {
                let e = p.dataHandler.getUserData().lamp_list[this.cellIdx],
                    i = this.getLanguageIndx(),
                    n = e.room_name.split("#");
                if (n.length < i + 1 && (i = n.length >= 2 ? 1 : 0), 1 == e.game_type) {
                    let a = p.StringTools.formatC("Small_Game_Hongbao_desc_%d", e.currency_type);
                    p.StringTools.setRichTextString(t, p.StringTools.formatC(p.config.getStringData(a), e.nick_name, n[i], p.StringTools.numToFloatString(e.amount)))
                } else {
                    let a = p.StringTools.formatC("Game_Hongbao_desc_%d", e.currency_type);
                    p.StringTools.setRichTextString(t, p.StringTools.formatC(p.config.getStringData(a), n[i], e.nick_name, p.StringTools.numToFloatString(e.amount)))
                }
            } else t.getComponent(g).string = ""
        }
        closePael() {
            this.playSoundButton("close.mp3"), this.hideView()
        }
        setDissPanel() {
            this.whatIsGiftFest_panel.active = !1, this.leaderboard_panel.active = !1, this.updateMainTabsTextThemeColor()
        }
        updateMainTabsTextThemeColor() {
            for (let e in this.toggleItemsList) {
                let t = this.toggleItemsList[e].isChecked ? y.TextColorBlueLight : y.ToggleKnobNormal;
                this.mainTabs_textsThemeSystem[e].setColorScheme(L.Other, t)
            }
        }
        onBtnLeaderboardClicked() {
            this.leaderboard_toggle.isChecked && (this.playSoundButton("tab"), this.showLeadeboardPanel())
        }
        onBtnGiftFestClicked() {
            this.whatIsGiftFest_toggle.isChecked && (this.playSoundButton("tab"), this.setDissPanel(), this.whatIsGiftFest_panel.active = !0)
        }
        playSoundButton(e) {
            p.AudioMgr.playSoundButtonInMiniAndCashGame(S.Instance().setUrl(e).setRoomId(this.gameDataInstance.tRoomData.u32RoomId).setGameId(this.gameDataInstance.tRoomData.u32GameID))
        }
        showLeadeboardPanel() {
            this.setDissPanel(), this.leaderboard_panel.active = !0, this.updateLeaderBoardPanel()
        }
        updateLeaderBoardPanel() {
            this.setLampDataNew(), this.setWinnersData()
        }
        setLampDataNew() {
            let e = p.dataHandler.getUserData().lamp_list;
            e = e.filter((e => 0 == e.currency_type || 1 == e.currency_type || 2 == e.currency_type || 6 === e.currency_type)), c("DJ :: lampListData.length  ", e), this.winnerHistoryListView.content.removeAllChildren(), this.winnerHistory_Parent.active = e.length > 0, this.noWinnersAnnounced_Parent.active = !(e.length > 0);
            const t = this.winnerHistoryListView.getComponent(w);
            t.bindItemFunc ? t.notifyDataSetChanged(e) : c("DJ :: Lamp bind function not available")
        }
        setWinnersData() {
            let e = p.dataHandler.getUserData().record_list;
            e = e.filter((e => 0 == e.currency_type || 1 == e.currency_type || 2 == e.currency_type || 6 === e.currency_type)), e.sort((e => e.seq_num)), c("DJ :: recordListData.length = ", e), this.leaderboardListView.content.removeAllChildren(), this.leaderboard_Parent.active = e.length > 0;
            const t = this.leaderboardListView.getComponent(w);
            t.bindItemFunc ? t.notifyDataSetChanged(e) : c("DJ :: Record bind function not available")
        }
    }).prototype, "bg_Node", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(W.prototype, "leaderBoard_Top50Winners", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(W.prototype, "leaderboard_toggle", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(W.prototype, "whatIsGiftFest_toggle", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(W.prototype, "toggleItemsList", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), K = t(W.prototype, "mainTabs_textsThemeSystem", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Q = t(W.prototype, "whatIsGiftFest_panel", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(W.prototype, "leaderboard_panel", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(W.prototype, "leaderboardListView", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = t(W.prototype, "leaderboardList_item", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = t(W.prototype, "winnerHistoryListView", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t(W.prototype, "winnerHistoryList_item", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = t(W.prototype, "mainPanelSlideView", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = t(W.prototype, "noWinnersAnnounced_Parent", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = t(W.prototype, "winnerHistory_Parent", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = t(W.prototype, "leaderboard_Parent", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = t(W.prototype, "gameDataInstance", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = W)) || U));
    n._RF.pop()
}