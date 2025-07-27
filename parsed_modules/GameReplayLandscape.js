import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as m from "./GameReplay.js";
import * as h from "./CurrencyValue.js";
import * as c from "./GameSceneInstance.js";
import * as g from "./cv.js";
import * as d from "./TablePositionContainerHandler.js";

function main() {
    var p, _, b, f, D, y, S, T, C, R, v, I, P, U, w, x, G, A, k, E, L, M, B, N, H, F, z, V, q, Z;
    i._RF.push({}, "8b4b9UQL/hMu4I4HcmVbXC0", "GameReplayLandscape", void 0);
    const {
        ccclass: O,
        property: Q
    } = r;
    t("default", (p = Q(o), _ = Q(o), b = Q(o), f = Q(n), D = Q(o), y = Q(n), S = Q(n), T = Q(n), C = Q(n), R = Q(n), v = Q(n), I = Q(n), P = Q(n), U = Q(d), O((G = e((x = class extends m {
        constructor(...t) {
            super(...t), this._fromData = void 0, a(this, "btn_report", G, this), a(this, "btn_favorite", A, this), a(this, "btn_explodeCard", k, this), a(this, "explodePriceLabel", E, this), a(this, "btn_rabbitCard", L, this), a(this, "rabbitPriceLabel", M, this), a(this, "gameIdText", B, this), a(this, "mangZhu_text", N, this), a(this, "pokerNameText", H, this), a(this, "createTime", F, this), a(this, "gameResultTxt", z, this), a(this, "gameResultVal", V, this), a(this, "stakeTxt", q, this), a(this, "tablePositions", Z, this), this.explodeCardCurrency = null, this.rabbitCardCurrency = null
        }
        onLoad() {
            super.onLoad(), this.explodeCardCurrency = this.btn_explodeCard.getComponent(h), this.rabbitCardCurrency = this.btn_rabbitCard.getComponent(h), this.btn_report.node.active = g.appConfig.getUserProfileConfig().reportEnabled
        }
        _initSeatsPos() {
            this.tablePositions.node.active = !0, g.StringTools.clearArray(this._vSeatPosList);
            for (let t = 2; t <= 9; ++t) {
                let e = [];
                for (let a = 0; a < t; ++a) {
                    let i = this.tablePositions.getSeatPosition(t, a);
                    e.push(this.panel_seat.getComponent(s).convertToNodeSpaceAR(i))
                }
                this._vSeatPosList.push(e)
            }
        }
        _initSeatNodeProp(t) {}
        lastAction() {
            this._nCurrentActionSeq >= 0 ? g.StringTools.getArrayLength(this._vPlayedActionsList) > 0 && (this._vPlayedActionsList.pop(), this._nCurrentActionSeq -= 1, this._updateAllActions(), this._updateSlider(), this.unschedule(this._onScheduleUpdateActions)) : this._seatMap.forEachKeyValue(((t, e) => {
                this._getSeatById(t.key).hideFire()
            })), this._bPlayOrPause && this.play()
        }
        nextAction() {
            this._onScheduleUpdateActions(0), this.unschedule(this._onScheduleUpdateActions), this._bPlayOrPause && this.play()
        }
        autoShow(t, e, a = !0) {
            this._eDataSourceType = t, this.node.active = !0, this.unscheduleAllCallbacks(), l.stopAllByTarget(this.node), this.resetUI(), g.MessageCenter.send("update_hand", this.gameDataInstance), this._updateFavoriteBtnState()
        }
        autoHide(t = !0) {
            this.unscheduleAllCallbacks(), l.stopAllByTarget(this.node), this._resetTable(), this.node.active = !1
        }
        _updateFavoriteBtnState() {
            let t = this.gameDataInstance.tCollectPokerMapData.vCollectUUidList,
                e = !1;
            for (let a = 0; a < t.length; ++a)
                if (t[a].sUUID == this._fromData.sCurGameUUID) {
                    e = !0;
                    break
                } this.btn_favorite.interactable = !e
        }
        _drunAction(t) {
            let e = this._getSeatById(t);
            if (l.stopAllByTarget(this.img_d.node), !e) return;
            this.img_d.node.active = !0;
            let a = this.tablePositions.getDealIconPosition(this._nPlayerCount, t),
                i = this.img_d.node.parent.getComponent(s).convertToNodeSpaceAR(a);
            this.img_d.node.setPosition(i)
        }
        _updateSeatView(t) {
            for (let e = 0; e < g.StringTools.getArrayLength(this._vSeatsList); ++e) {
                this._vSeatsList[e].ReplayPlayerCount = t, this._vSeatsList[e].setSeatViewId(e, t, g.Enum.SeatType.SeatType_ReplaySeat), this._vSeatsList[e].serverId = e;
                let a = this.tablePositions.getChipsPosition(t, e);
                if (this._vSeatsList[e].setChipPosition(new u(a.x, a.y)), e < this._nPlayerCount) {
                    let a = this._vSeatPosList[t - 2][e];
                    this._vSeatsList[e].node.active = !0, this._vSeatsList[e].node.setPosition(a)
                } else this._vSeatsList[e].node.active = !1
            }
        }
        _switchPlayPauseIcon(t) {
            let e = this.btn_play.node.getChildByName("sprite_pause_node"),
                a = this.btn_play.node.getChildByName("sprite_play_node");
            e.active = !t, a.active = t
        }
        setDataFromGameReview(t) {
            this._fromData = t, this._updateFavoriteBtnState()
        }
        setReportBtnStatus(t) {
            g.appConfig.getUserProfileConfig().reportEnabled && (this.btn_report.node.active = t)
        }
        setFavoriteBtnStatus(t) {
            this.btn_favorite.node.active = t
        }
        setExplodeCardBtnStatus(t, e) {
            this.btn_explodeCard.node.active = t, this.explodeCardCurrency && t && e && this.explodeCardCurrency.updateVal(e, this.gameDataInstance.tRoomData.currency.type)
        }
        setRabbitCardBtnStatus(t, e) {
            this.btn_rabbitCard.node.active = t, e && this.rabbitCardCurrency && t && this.rabbitCardCurrency.updateVal(e, this.gameDataInstance.tRoomData.currency.type)
        }
        _initData() {
            super._initData(), this.gameResultTxt.node.active = !1, this.gameResultVal.node.active = !1, this._setCreateTime(), this._setGameResult(), g.config.getCurrentScene() === g.Enum.SCENE.GAME_SCENE ? (this._showHideGameRoomInfo(!0), this._setGameRoomInfo()) : this._showHideGameRoomInfo(!1), this.gameIdText.string = this._tPokerHandData.sGameUUID
        }
        _setShowCardsAngle() {}
        _setCreateTime() {
            let t = this._tPokerHandData.nCreateTime;
            this.createTime.string = g.StringTools.formatDateTimeByCountry(t, !1, !0)
        }
        _setGameResult() {
            let t = g.dataHandler.getUserData().user_id,
                e = this._tPokerHandData.vPlayerRecords;
            for (let a = 0; a < e.length; ++a)
                if (e[a].nPlayerID.toString() == t) {
                    this.gameResultTxt.node.active = !0, this.gameResultVal.node.active = !0;
                    let t = g.StringTools.clientGoldByServer(e[a].nWinBet);
                    t = g.StringTools.numberToShowNumber(g.StringTools.toFixed(t, 2, g.StringTools.RoundingMode.ROUND_HALF_UP)), t >= 0 ? (this.gameResultTxt.string = g.config.getStringData("Won") + ":", this.gameResultVal.string = t.toString()) : (this.gameResultTxt.string = g.config.getStringData("Loose") + ":", this.gameResultVal.string = Math.abs(t).toString());
                    break
                }
        }
        _showHideGameRoomInfo(t) {
            this.mangZhu_text.node.active = t, this.pokerNameText.node.active = t, this.stakeTxt.node.active = t
        }
        _setGameRoomInfo() {
            if (this.gameDataInstance.tRoomData.pkRoomParam.manual_created) this.pokerNameText.string = this.gameDataInstance.tRoomData.pkRoomParam.game_name;
            else {
                let t = g.tools.displayChineseName(this.gameDataInstance.tRoomData.pkRoomParam.game_name);
                this.pokerNameText.string = t
            }
            let t, e = g.StringTools.clientGoldByServer(this.gameDataInstance.tRoomData.pkRoomParam.rule_ante_amount);
            if (this.gameDataInstance.tRoomData.pkRoomParam.game_mode == g.Enum.CreateGameMode.CreateGame_Mode_Normal) {
                t = g.config.getblindString(this.gameDataInstance.tRoomData.pkRoomParam.rule_blind_enum - 1);
                let a = t.split("/"),
                    i = Number(a[1]);
                if (t = g.config.getStringData("UIGameBlind").replace("%s", t), this.gameDataInstance.tRoomData.pkRoomParam.rule_switch_force_straddle) {
                    let e = g.numFix.times(Number(i), 2);
                    t = g.StringTools.formatC("%s/%s", t, e.toString())
                }
                e && (t += g.StringTools.formatC("(%f)", g.StringTools.numberToShowNumber(e)))
            } else if (this.gameDataInstance.tRoomData.pkRoomParam.game_mode == g.Enum.CreateGameMode.CreateGame_Mode_Short) {
                t = g.config.getStringData("UIGameAnti").replace("%s", g.StringTools.numberToShowString(e))
            }
            if (0 != this.gameDataInstance.tRoomData.pkRoomParam.club_id) this.mangZhu_text.string = t;
            else {
                let e = t + g.config.getStringData("UIGameRoomId").replace("%d", this.gameDataInstance.tRoomData.u32RoomId.toString());
                this.mangZhu_text.string = e
            }
            let a = g.config.getStringData("UIGameBlind");
            a = a.replace("%s", "");
            let i = this.mangZhu_text.string;
            this.stakeTxt.string = i.replace(a, "").replace(/[\d.,]+/g, (function(t) {
                return g.StringTools.toFixedAsString(g.Number(t), g.currencyManager.defaultRoundDecimal)
            }))
        }
        onClickClose() {
            this.autoHide(!1)
        }
        onClickAudit(t) {
            if (g.AudioMgr.playButtonSound("button_click.mp3"), this._fromData.vGameUUID.length <= 0) g.TT.showMsg(g.config.getStringData("UIAllreviewReplayTips"), g.Enum.ToastType.ToastTypeError);
            else {
                if (g.config.getCurrentScene() === g.Enum.SCENE.GAME_SCENE && !this._fromData.bShowAudit) return void g.TT.showMsg(g.config.getStringData("UIAllreviewReplayTips3"), g.Enum.ToastType.ToastTypeError);
                let t = this._fromData.gameDataMgr.tGameRecords.tPokerHandData.nClubID,
                    e = this._fromData.gameDataMgr.tGameRecords.tPokerHandData.sRoomUUID;
                g.worldNet.RequestQuerySendFairReport(t, this._fromData.sCurGameUUID, e, this.gameDataInstance.tRoomData.u32GameID)
            }
        }
        onClickCollect(t) {
            if (g.AudioMgr.playButtonSound("button_click.mp3"), this._fromData.vGameUUID.length <= 0) g.TT.showMsg(g.config.getStringData("UIAllreviewReplayTips"), g.Enum.ToastType.ToastTypeError);
            else {
                let t = g.dataHandler.getUserData().getUserIdByGameID(this.gameDataInstance.tRoomData.u32GameID),
                    e = 0;
                e = g.config.getCurrentScene() == g.Enum.SCENE.HALL_SCENE ? this._fromData.gameDataMgr.tGameRecords.gameID : c.getInstanceGameId(null == this ? void 0 : this.node), g.httpHandler.requestDoFavorite(t, this._fromData.sCurGameUUID, e, this.gameDataInstance)
            }
        }
        onClickForceShow(t) {
            g.AudioMgr.playButtonSound("button_click.mp3"), this._fromData.vGameUUID.length <= 0 ? g.TT.showMsg(g.config.getStringData("UIAllreviewReplayTips"), g.Enum.ToastType.ToastTypeError) : (this._fromData.shieldLayer_card_act.active = !0, g.gameNet.RequestReplayForceShowCard(this._fromData.gameDataMgr.tRoomData.u32RoomId, this._fromData.sCurGameUUID))
        }
        onClickSendOut(t) {
            g.AudioMgr.playButtonSound("button_click.mp3"), this._fromData.vGameUUID.length <= 0 ? g.TT.showMsg(g.config.getStringData("UIAllreviewReplayTips"), g.Enum.ToastType.ToastTypeError) : (this._fromData.shieldLayer_card_act.active = !0, g.gameNet.RequestReplaySendCard(this._fromData.gameDataMgr.tRoomData.u32RoomId, this._fromData.sCurGameUUID))
        }
    }).prototype, "btn_report", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(x.prototype, "btn_favorite", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(x.prototype, "btn_explodeCard", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(x.prototype, "explodePriceLabel", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(x.prototype, "btn_rabbitCard", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(x.prototype, "rabbitPriceLabel", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(x.prototype, "gameIdText", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(x.prototype, "mangZhu_text", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(x.prototype, "pokerNameText", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(x.prototype, "createTime", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(x.prototype, "gameResultTxt", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(x.prototype, "gameResultVal", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(x.prototype, "stakeTxt", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(x.prototype, "tablePositions", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = x)) || w));
    i._RF.pop()
}