import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as b from "./cc.js";
import * as A from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as I from "./cc.js";
import * as T from "./cc.js";
import * as y from "./cc.js";
import * as N from "./cv.js";
import * as D from "./Card.js";
import * as w from "./HashMap.js";
import * as L from "./Seat.js";
import * as f from "./Enum.js";
import * as v from "./Enum.js";
import * as O from "./Enum.js";
import * as R from "./RoomData.js";
import * as P from "./InsuranceData.js";
import * as M from "./InsuranceEntrance.js";
import * as k from "./InsuranceHitOutsTips.js";
import * as B from "./GameSceneInstance.js";
import * as G from "./GameSceneInstance.js";
import * as H from "./GameMain.js";
import * as Y from "./GameScene.js";

function main() {
    var F, U, x, z, j, V, W, q, K, X, Z, Q, J, $, tt, et, it, st, nt, at, ot, rt, _t, ht, lt, ut, ct, dt, St, pt, Tt, gt, mt, At, yt, bt, Ct, Et, It, Nt, Dt, wt, Lt, ft, vt, Ot, Rt, Pt, Mt, kt, Bt, Gt, Ht, Yt;
    s._RF.push({}, "69621KH+uBLQq8sm87kbdP0", "GameReplay", void 0);
    var Ft = function(t) {
            return t[t.ESG_NONE = 0] = "ESG_NONE", t[t.ESG_GEAR_1 = 1] = "ESG_GEAR_1", t[t.ESG_GEAR_1_5 = 2] = "ESG_GEAR_1_5", t[t.ESG_GEAR_2 = 3] = "ESG_GEAR_2", t[t.ESG_MAX = 4] = "ESG_MAX", t
        }(Ft || {}),
        Ut = function(t) {
            return t[t.SYSTEM_ACTION_ENDPREFLOP = 0] = "SYSTEM_ACTION_ENDPREFLOP", t[t.SYSTEM_ACTION_DEALFLOP = 1] = "SYSTEM_ACTION_DEALFLOP", t[t.SYSTEM_ACTION_ENDFLOP = 2] = "SYSTEM_ACTION_ENDFLOP", t[t.SYSTEM_ACTION_DEALINSURANCE = 3] = "SYSTEM_ACTION_DEALINSURANCE", t[t.SYSTEM_ACTION_ENDINSURANCE = 4] = "SYSTEM_ACTION_ENDINSURANCE", t[t.SYSTEM_ACTION_DEALTURN = 5] = "SYSTEM_ACTION_DEALTURN", t[t.SYSTEM_ACTION_ENDTURN = 6] = "SYSTEM_ACTION_ENDTURN", t[t.SYSTEM_ACTION_DEALRIVER = 7] = "SYSTEM_ACTION_DEALRIVER", t[t.SYSTEM_ACTION_ENDRIVER = 8] = "SYSTEM_ACTION_ENDRIVER", t[t.SYSTEM_ACTION_SHOWDOWN = 9] = "SYSTEM_ACTION_SHOWDOWN", t[t.SYSTEM_ACTION_SETTLEMENT = 10] = "SYSTEM_ACTION_SETTLEMENT", t[t.SYSTEM_ACTION_FORCESHOW = 11] = "SYSTEM_ACTION_FORCESHOW", t[t.SYSTEM_ACTION_SENDOUT = 12] = "SYSTEM_ACTION_SENDOUT", t
        }(Ut || {}),
        xt = function(t) {
            return t[t.ACTION_NULL = 0] = "ACTION_NULL", t[t.ACTION_PLAYER = 1] = "ACTION_PLAYER", t[t.ACTION_SYSTEM = 2] = "ACTION_SYSTEM", t
        }(xt || {});
    class zt {
        constructor() {
            this.eSrcType = xt.ACTION_NULL
        }
    }
    class jt extends zt {
        constructor(...t) {
            super(...t), this.nSeatID = 0, this.nAmount = 0, this.eAction = O.Enum_Action_Null, this.eSeq = 0
        }
    }
    class Vt extends zt {
        constructor(...t) {
            super(...t), this.eAction = Ut.SYSTEM_ACTION_ENDPREFLOP, this.data = ""
        }
    }
    const {
        ccclass: Wt,
        property: qt
    } = l;
    t("GameReplay", (F = qt(n), U = qt(n), x = qt(n), z = qt(a), j = qt(a), V = qt(a), W = qt(o), q = qt(o), K = qt(o), X = qt(r), Z = qt(r), Q = qt(r), J = qt(r), $ = qt(r), tt = qt(r), et = qt(r), it = qt(D), st = qt(a), nt = qt(a), at = qt(a), ot = qt(a), rt = qt(_), _t = qt(h), ht = qt(_), lt = G(), ut = G("GameDataInstance"), Wt((St = e((dt = class extends u {
        constructor(...t) {
            super(...t), i(this, "prefab_seat", St, this), i(this, "prefab_insuranceEntrance", pt, this), i(this, "prefab_hitOutsTipsAnim", Tt, this), i(this, "panel_main", gt, this), i(this, "panel_seat", mt, this), i(this, "panel_insurance", At, this), i(this, "txt_game_mode", yt, this), i(this, "txt_game_uuid", bt, this), i(this, "txt_pot", Ct, this), i(this, "btn_play", Et, this), i(this, "btn_replay", It, this), i(this, "btn_speed", Nt, this), i(this, "btn_last_page", Dt, this), i(this, "btn_next_page", wt, this), i(this, "btn_last_step", Lt, this), i(this, "btn_next_step", ft, this), i(this, "pub_card_list", vt, this), i(this, "panel_shield", Ot, this), i(this, "side_pool_list", Rt, this), i(this, "main_pool", Pt, this), i(this, "node_insurance", Mt, this), i(this, "img_d", kt, this), i(this, "slider", Bt, this), i(this, "spCriticsimTips", Gt, this), this._sGameUUID = "", this._eDataSourceType = f.EDST_NONE, this._tPokerHandData = null, this._objReplayGame = null, this._objReplayInsurance = null, this._lastInsuranceReplayData = null, this._bMirco = !1, this._tInsuranceReplay = null, this._tInsuranceHitOutsTips = null, this._nTurnActIdx = 0, this._nRiverActIdx = 0, this._bShowCrackAnimTurn = !1, this._bShowCrackAnimRiver = !1, this._mapShowInsuranceFrameFlag = new w, this._vActionsList = [], this._vPlayedActionsList = [], this._nCurrentActionSeq = -1, this._vInitialStakeList = new w, this._vSeatsList = [], this._vSeatPosList = [], this._nPlayerCount = 0, this._vPostSeatList = [], this._vShowDownList = [], this._vMuckList = [], this._bPlayOrPause = !0, this._nSpeedDelayTime = 1, this._nSpeed = 0, this._nSpeedGear = Ft.ESG_NONE, this._nAnte = 0, this._nBlind = 0, this._nSB = 0, this._nBB = 0, this._nStraddle = 0, this._bDoubleAnte = !1, this._nMode = 0, this._nDealerSeat = 0, this._nBBSeat = 0, this._nSBSeat = 0, this._nStraddleSeat = -1, this._isNowCritTime = !1, this._seatMap = new w, i(this, "gameSceneInstance", Ht, this), i(this, "gameDataInstance", Yt, this)
        }
        onLoad() {
            N.resMgr.adaptWidget(this.node), this.txt_pot.node.active = !1, this.spCriticsimTips.node.active = !1, this.btn_play.node.on(r.EventType.CLICK, (t => {
                N.AudioMgr.playButtonSound("button_click.mp3"), this.playAndPause()
            }), this), this.btn_replay.node.on(r.EventType.CLICK, (t => {
                N.AudioMgr.playButtonSound("button_click.mp3"), this.loadAll(this._sGameUUID)
            }), this), this.btn_speed.node.on(r.EventType.CLICK, (t => {
                N.AudioMgr.playButtonSound("button_click.mp3"), this.changeSpeed()
            }), this), this.btn_last_page.node.on(r.EventType.CLICK, (t => {
                N.AudioMgr.playButtonSound("button_click.mp3"), this.lastHand()
            }), this), this.btn_next_page.node.on(r.EventType.CLICK, (t => {
                N.AudioMgr.playButtonSound("button_click.mp3"), this.nextHand()
            }), this), this.btn_last_step.node.on(r.EventType.CLICK, (t => {
                N.AudioMgr.playButtonSound("button_click.mp3"), this.lastAction()
            }), this), this.btn_next_step.node.on(r.EventType.CLICK, (t => {
                N.AudioMgr.playButtonSound("button_click.mp3"), this.nextAction()
            }), this), this.panel_shield.on(a.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0
            })), this.node.on(a.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0, this.autoHide()
            }), this), N.MessageCenter.register("update_replay_data", this._onMsgUpdateReplayData.bind(this), this.node), this._initSeatsPos(), N.StringTools.clearArray(this._vSeatsList);
            for (let t = 0; t < 9; ++t) {
                let t = c(this.prefab_seat);
                this._initSeatNodeProp(t), this.panel_seat.addChild(t);
                let e = t.getComponent(L);
                if (e.onDestroy(), !N.appConfig.isLandscapeLayout) {
                    const t = this.gameSceneInstance.gameNode.getComponent(Y),
                        i = null == t ? void 0 : t.gameMain_panel.getComponent(H);
                    e.setGameScene(t), e.setGameMain(i)
                }
                e.setMainPool(this.main_pool), e.gameReplay = this;
                let i = this.getseatHandsCardType();
                e.initHandCards(i), e.updateSeatStatus(N.Enum.SeatStatus.SeatStatus_empty), this._vSeatsList.push(e)
            }
        }
        _initSeatNodeProp(t) {
            t.getComponent(d).setAnchorPoint(new S(.5, .5)), t.setPosition(new p(0, 0)), t.setScale(new p(.7, .7))
        }
        start() {
            this._adaptMainPanel(), this._setSlider(0)
        }
        onDestroy() {
            N.MessageCenter.unregister("update_replay_data", this.node)
        }
        setDataFromGameReview(t) {}
        setReportBtnStatus(t) {}
        setFavoriteBtnStatus(t) {}
        setExplodeCardBtnStatus(t, e) {}
        setRabbitCardBtnStatus(t, e) {}
        autoShow(t, e, i = !0) {
            this._eDataSourceType = t, this.node.active = !0, this.unscheduleAllCallbacks(), T.stopAllByTarget(this.node), this.node.setPosition(g(p.ZERO)), this.resetUI(), i ? N.action.showAction(this.node, N.action.eMoveActionDir.EMAD_TO_LEFT, N.action.eMoveActionType.EMAT_FADE_IN, N.action.delay_type.NORMAL, ((t, e) => {}), ((t, e) => {
                N.MessageCenter.send("update_hand", this.gameDataInstance)
            }), .1) : N.MessageCenter.send("update_hand", this.gameDataInstance)
        }
        autoHide(t = !0) {
            this.node.active = !0, this.unscheduleAllCallbacks(), T.stopAllByTarget(this.node), this.node.setPosition(g(p.ZERO)), t ? N.action.showAction(this.node, N.action.eMoveActionDir.EMAD_TO_RIGHT, N.action.eMoveActionType.EMAT_FADE_OUT, N.action.delay_type.NORMAL, ((t, e) => {}), ((t, e) => {
                this._resetTable()
            })) : (this._resetTable(), this.node.active = !1)
        }
        isShow() {
            return this.node.active
        }
        setBtnTouchEnable(t, e) {
            let i = e ? new m(m.WHITE) : new m(127, 127, 127, 255);
            if (t.node.getComponent(A) ? t.node.getComponent(A).color = i : t.node.children.forEach((t => {
                    t.getComponent(A) && (t.getComponent(A).color = i)
                })), t.interactable = e, t === this.btn_speed) {
                let t = this.btn_speed.node.getChildByName("txt");
                t && (t.getComponent(A).color = i)
            }
        }
        _adaptMainPanel() {
            let t = N.Number(N.StringTools.div(y.getVisibleSize().width, this.panel_main.getComponent(d).width).toFixed(2)),
                e = N.Number(N.StringTools.div(y.getVisibleSize().height, this.panel_main.getComponent(d).height).toFixed(2)),
                i = Math.min(t, e);
            this.panel_main.getComponent(d).height * this.panel_main.scale.y * i >= y.getVisibleSize().height - 200 && (i *= .7), this.panel_main.setScale(new p(i, i, i))
        }
        _initSeatsPos() {
            N.StringTools.clearArray(this._vSeatPosList);
            let t = 984,
                e = 96;
            this.getseatHandsCardType() != v.SHCT_PLO5 && this.getseatHandsCardType() != v.SHCT_PLO || (t = 934, e = 146);
            {
                let t = [];
                t.push(new p(540, 190)), t.push(new p(540, 716)), this._vSeatPosList.push(t)
            } {
                let i = [];
                i.push(new p(540, 190)), i.push(new p(e, 620)), i.push(new p(t, 620)), this._vSeatPosList.push(i)
            } {
                let i = [];
                i.push(new p(540, 190)), i.push(new p(e, 620)), i.push(new p(540, 716)), i.push(new p(t, 620)), this._vSeatPosList.push(i)
            } {
                let i = [];
                i.push(new p(540, 190)), i.push(new p(e, 355)), i.push(new p(e, 585)), i.push(new p(t, 585)), i.push(new p(t, 355)), this._vSeatPosList.push(i)
            } {
                let i = [];
                i.push(new p(540, 190)), i.push(new p(e, 355)), i.push(new p(e, 585)), i.push(new p(540, 716)), i.push(new p(t, 585)), i.push(new p(t, 355)), this._vSeatPosList.push(i)
            } {
                let i = [];
                i.push(new p(540, 190)), i.push(new p(e, 355)), i.push(new p(e, 585)), i.push(new p(366, 716)), i.push(new p(722, 716)), i.push(new p(t, 585)), i.push(new p(t, 355)), this._vSeatPosList.push(i)
            } {
                let i = [];
                i.push(new p(540, 190)), i.push(new p(280, 190)), i.push(new p(e, 355)), i.push(new p(e, 585)), i.push(new p(366, 716)), i.push(new p(722, 716)), i.push(new p(t, 585)), i.push(new p(t, 355)), this._vSeatPosList.push(i)
            } {
                let t = [];
                t.push(new p(540, 190)), t.push(new p(260, 190)), t.push(new p(96, 355)), t.push(new p(96, 585)), t.push(new p(366, 716)), t.push(new p(722, 716)), t.push(new p(984, 585)), t.push(new p(984, 355)), t.push(new p(820, 190)), this._vSeatPosList.push(t)
            }
            for (let t = 0; t < N.StringTools.getArrayLength(this._vSeatPosList); ++t)
                for (let e = 0; e < N.StringTools.getArrayLength(this._vSeatPosList[t]); ++e) this._vSeatPosList[t][e].x -= this.panel_seat.getComponent(d).width / 2, this._vSeatPosList[t][e].y -= this.panel_seat.getComponent(d).height / 2
        }
        _initData() {
            switch (this._eDataSourceType) {
                case f.EDST_NONE:
                    break;
                case f.EDST_RECORD:
                case f.EDST_GAMEROOM:
                    this._tPokerHandData = this.gameDataInstance.tGameRecords.tPokerHandData, this._objReplayGame = this.gameDataInstance.tGameRecords.tPokerHandData.objReplay, this._objReplayInsurance = this.gameDataInstance.tGameRecords.tPokerHandData.objReplayInsurance, this._bMirco = this.gameDataInstance.tGameRecords.tPokerHandData.bMirco;
                    break;
                case f.EDST_COLLECTION:
                    this._tPokerHandData = this.gameDataInstance.tCollectPokerMapData.tPokerHandData, this._objReplayGame = this.gameDataInstance.tCollectPokerMapData.tPokerHandData.objReplay, this._objReplayInsurance = this.gameDataInstance.tCollectPokerMapData.tPokerHandData.objReplayInsurance, this._bMirco = this.gameDataInstance.tCollectPokerMapData.tPokerHandData.bMirco
            }
            let t = this.getseatHandsCardType();
            for (let e = 0; e < N.StringTools.getArrayLength(this._vSeatsList); ++e) this._vSeatsList[e].initHandCards(t)
        }
        loadAll(t) {
            this._sGameUUID = t, this._bPlayOrPause = !1, this.spCriticsimTips.node.active = !1, this._seatMap.clear(), this.unschedule(this._onScheduleUpdateActions), this._initData(), this._resetTable(), this._resetInsuranceInfo(), this._setSeatInfo(!0), this._setRoomInfo(), this._setTableInfo(), this._setDealerInfo(), this._setSpeed(Ft.ESG_GEAR_1), this._doAnte(), this._doBlind(), this._analysisActions(), this._updateSlider(), this._setShowCardsAngle(), this.node.active && (1 == this._isNowCritTime && this.showCritisicmTips(), this.play())
        }
        _setShowCardsAngle() {}
        resetUI() {
            this._sGameUUID = "", this._bPlayOrPause = !1, this.setBtnTouchEnable(this.btn_play, !1), this.setBtnTouchEnable(this.btn_replay, !1), this.setBtnTouchEnable(this.btn_speed, !1), this.setBtnTouchEnable(this.btn_last_step, !1), this.setBtnTouchEnable(this.btn_next_step, !1), this.unschedule(this._onScheduleUpdateActions), this._resetTable(), this._resetInsuranceInfo(), this._setSpeed(Ft.ESG_GEAR_1), this._setSlider(0), this._nPlayerCount = 0, this._updateSeatView(0), this.img_d.node.active = !0, T.stopAllByTarget(this.img_d.node), this.img_d.node.active = !1
        }
        _resetTable(t = !0) {
            if (t) {
                N.StringTools.clearArray(this._vActionsList), N.StringTools.clearArray(this._vPlayedActionsList), this._vInitialStakeList.clear();
                for (let t = 0; t < N.StringTools.getArrayLength(this._vSeatsList); ++t) this._vSeatsList[t].updateSeatStatus(N.Enum.SeatStatus.SeatStatus_empty), this._vSeatsList[t].hideWin();
                for (let t = 0; t < N.StringTools.getArrayLength(this.pub_card_list); ++t) this.pub_card_list[t].setCrackAnim(!1), this._hideHitOutsTipsAnim()
            }
            this._setMainPool(0, !1);
            for (let t = 0; t < N.StringTools.getArrayLength(this.side_pool_list); ++t) this._setSidePool(t, 0);
            for (let t = 0; t < N.StringTools.getArrayLength(this.pub_card_list); ++t) this.pub_card_list[t].node.active = !1;
            this._setInsurance(0, !1)
        }
        _resetSeat(t, e) {
            if (t && t.getStatus() !== N.Enum.SeatStatus.SeatStatus_empty) {
                t.SetName(t.getData().name), t.updateSeatStatus(N.Enum.SeatStatus.SeatStatus_waiting, O.Enum_Action_Null), t.hideCards(), t.resetCardsPos(), t.hideChips(), e && t.hideFire(), t.hideTips(), t.hideStatusText(), t.hideWin();
                let i = N.dataHandler.getUserData().getUserIdByGameID(this.gameDataInstance.tRoomData.u32GameID) === t.getData().playerid;
                for (let e = 0; e < t.getHandsCardsCount(); ++e) t.getCard(e).setActive(!i), t.getCard(e).setFace(!1), t.getCard(e).updateCardFace(), t.getCard(e).updateCardBack(), t.getShowCard(e).setActive(i), t.getShowCard(e).setFace(i), t.getShowCard(e).updateCardFace(!1), t.getShowCard(e).updateCardBack();
                t.doGray(!1)
            }
        }
        _setSeatInfo(t) {
            const e = this._objReplayGame.SeatsInfo,
                i = this._objReplayGame.RoomInfo,
                s = e.seats_info;
            this._nPlayerCount = N.Number(i.players_count), this._updateSeatView(this._nPlayerCount);
            for (let e = 0; e < N.StringTools.getArrayLength(s); ++e) {
                const i = s[e],
                    n = N.Number(i.seat_no),
                    a = i.name,
                    o = N.Number(i.UID),
                    r = N.Number(i.stake),
                    _ = N.Number(i.plat),
                    h = this._getSeatById(n);
                let l = t || null == h.getData() ? new R : h.getData();
                if (!0 === i.is_muck && this._vMuckList.push(n), l.name = a, l.playerid = o, l.seatid = n, l.stake = r, l.headurl = N.String(i.head_url), l.round_bet = 0, l.plat = _, this._vInitialStakeList.add(n, r), h) {
                    let e = i.holecards;
                    h.setData(l), t && h.updateSeatStatus(N.Enum.SeatStatus.SeatStatus_waiting);
                    for (let t = 0; t < N.StringTools.getArrayLength(e); ++t) {
                        let i = h.getShowCard(t);
                        if (i) {
                            let s = N.Number(e[t].number),
                                n = N.Number(e[t].suit);
                            i.setContent(s, n), i.updateCard()
                        }
                    }
                    t && this._resetSeat(h, t)
                }
            }
        }
        _updateSeatView(t) {
            for (let e = 0; e < N.StringTools.getArrayLength(this._vSeatsList); ++e)
                if (this._vSeatsList[e].ReplayPlayerCount = t, this._vSeatsList[e].setSeatViewId(e, t, N.Enum.SeatType.SeatType_ReplaySeat), this._vSeatsList[e].serverId = e, e < this._nPlayerCount) {
                    let i = this._vSeatPosList[t - 2][e];
                    this._vSeatsList[e].node.active = !0, this._vSeatsList[e].node.setPosition(i)
                } else this._vSeatsList[e].node.active = !1
        }
        _getSeatById(t) {
            let e = null;
            for (let i = 0; i < N.StringTools.getArrayLength(this._vSeatsList); ++i)
                if (this._vSeatsList[i].serverId === t) {
                    e = this._vSeatsList[i];
                    break
                } return e
        }
        _setDealerInfo() {
            let t = this._objReplayGame.TableInfo,
                e = N.Number(t.dealer_seat);
            this._drunAction(e)
        }
        _setRoomInfo() {
            let t = this._objReplayGame.RoomInfo,
                e = this._objReplayGame.RoundsInfo;
            this._nAnte = N.Number(t.ante), this._nBlind = N.Number(t.blind), this._bDoubleAnte = t.double_ante, this._nMode = N.Number(t.mode), this._nSB = 0, this._nBB = this._nBlind, this._nStraddle = 2 * this._nBlind, this._isNowCritTime = e.is_now_crit_time;
            for (let t = 0; t < 20; ++t) {
                let e = N.config.getblindString(t);
                if (e) {
                    let t = e.split("/"),
                        i = Math.min(N.Number(t[0]), N.Number(t[1])),
                        s = Math.max(N.Number(t[0]), N.Number(t[1]));
                    N.StringTools.serverGoldByClient(s) === this._nBB && (this._nSB = N.StringTools.serverGoldByClient(i))
                }
            }
            switch (this.getseatHandsCardType()) {
                case v.SHCT_PLO:
                    this.txt_game_mode.string = N.config.getStringData("MainScene_Scene_gameType_panel_PLO4_text");
                    break;
                case v.SHCT_PLO5:
                    this.txt_game_mode.string = N.config.getStringData("MainScene_Scene_gameType_panel_PLO5_text");
                    break;
                default:
                    this.txt_game_mode.string = t.type
            }
            this.txt_game_uuid.string = this._sGameUUID
        }
        _setTableInfo() {
            let t = this._objReplayGame.TableInfo,
                e = t.post_seats,
                i = t.showdown_seats;
            t.muck_seats;
            N.StringTools.clearArray(this._vMuckList), N.StringTools.clearArray(this._vPostSeatList), N.StringTools.clearArray(this._vShowDownList), this._nDealerSeat = N.Number(t.dealer_seat), this._nBBSeat = N.Number(t.bb_seat), this._nSBSeat = N.Number(t.sb_seat), this._nStraddleSeat = -1, null != t.straddle_seat && (this._nStraddleSeat = t.straddle_seat);
            for (let t = 0; t < N.StringTools.getArrayLength(e); ++t) this._vPostSeatList.push(N.Number(e[t]));
            for (let t = 0; t < N.StringTools.getArrayLength(i); ++t) this._vShowDownList.push(N.Number(i[t]))
        }
        _drunAction(t) {
            let e = this._getSeatById(t);
            if (T.stopAllByTarget(this.img_d.node), !e) return;
            let i = new p(this._vSeatPosList[this._nPlayerCount - 2][t]),
                s = e.direction;
            this.img_d.node.active = !0, s === N.Enum.SeatDriction.DRICTION_LEFT_MIDDLEDOWN || s === N.Enum.SeatDriction.DRICTION_LEFT_UP || s === N.Enum.SeatDriction.DRICTION_BOTTOM ? this.img_d.node.setPosition(new p(i.x + 90, i.y - 80)) : s === N.Enum.SeatDriction.DRICTION_RIGHT_MIDDLEDOWN || s === N.Enum.SeatDriction.DRICTION_RIGHT_UP ? this.img_d.node.setPosition(new p(i.x - 90, i.y - 80)) : s !== N.Enum.SeatDriction.DRICTION_TOP_LEFT && s !== N.Enum.SeatDriction.DRICTION_TOP_RIGHT || this.img_d.node.setPosition(new p(i.x + 90, i.y - 80))
        }
        _doAnte() {
            let t = this._objReplayGame.RoundsInfo;
            if (t.ante_round) {
                if (this._nMode === N.Enum.CreateGameMode.CreateGame_Mode_Short) {
                    if (this._bDoubleAnte) {
                        let t = this._getSeatById(this._nDealerSeat);
                        t && t.showChipsNow(this._nAnte)
                    }
                    for (let t = 0; t < N.StringTools.getArrayLength(this._vPostSeatList); ++t) {
                        let e = this._getSeatById(this._vPostSeatList[t]);
                        if (e) {
                            e.showTips(N.config.getStringData("ActionTips8"), N.Enum.TipsType.Tips_mendAnte), e.showChipsNow(this._nAnte);
                            let t = e.getData();
                            t && (t.round_bet = t.round_bet + this._nAnte, t.stake = t.stake - this._nAnte, e.setStake(t.stake))
                        }
                    }
                }
                for (let t = 0; t < N.StringTools.getArrayLength(this._vSeatsList); ++t)
                    if (this._vSeatsList[t].getStatus() !== N.Enum.SeatStatus.SeatStatus_empty) {
                        let e = this._vSeatsList[t].getData();
                        e && (e.stake = e.stake - this._nAnte, this._vSeatsList[t].setStake(e.stake))
                    } let e = t.end_ante_round.pots_info;
                if (N.StringTools.getArrayLength(e) > 0) {
                    let t = e[0];
                    this._setMainPool(N.Number(t.amount), !0)
                }
            }
        }
        _doBlind() {
            if (this._objReplayGame.RoundsInfo.blind_round) {
                let t = this._getSeatById(this._nSBSeat);
                if (t) {
                    t.showChipsNow(this._nSB);
                    let e = t.getData();
                    e && (e.round_bet = e.round_bet + this._nSB, e.stake = e.stake - this._nSB, t.setStake(e.stake))
                }
                let e = this._getSeatById(this._nBBSeat);
                if (e) {
                    e.showChipsNow(this._nBB);
                    let t = e.getData();
                    t && (t.round_bet = t.round_bet + this._nBB, t.stake = t.stake - this._nBB, e.setStake(t.stake))
                }
                if (-1 != this._nStraddleSeat) {
                    let t = this._getSeatById(this._nStraddleSeat);
                    if (t) {
                        t.showTips(N.config.getStringData("ActionTips5"), N.Enum.TipsType.Tips_straddle), t.showChipsNow(this._nStraddle);
                        let e = t.getData();
                        e && (e.round_bet = e.round_bet + this._nStraddle, e.stake = e.stake - this._nStraddle, t.setStake(e.stake))
                    }
                }
                for (let t = 0; t < N.StringTools.getArrayLength(this._vPostSeatList); ++t) {
                    let e = this._getSeatById(this._vPostSeatList[t]);
                    if (e) {
                        this._vInitialStakeList.length;
                        let t = 0;
                        this._vInitialStakeList.length > 3 && -1 != this._nStraddleSeat ? (e.showTips(N.config.getStringData("ActionTips8"), N.Enum.TipsType.Tips_mendAnte), t = this._nStraddle) : (e.showTips(N.config.getStringData("ActionTips8"), N.Enum.TipsType.Tips_mendAnte), t = this._nBB), e.showChipsNow(t);
                        let i = e.getData();
                        i && (i.round_bet = i.round_bet + t, i.stake = i.stake - t, e.setStake(i.stake))
                    }
                }
            }
        }
        _forceShowAction() {
            let t = this._objReplayGame.SeatsInfo.seats_info,
                e = e => {
                    for (let i = 0; i < N.StringTools.getArrayLength(t); ++i)
                        if (t[i].UID === e) return t[i].seat_no;
                    return -1
                },
                i = [],
                s = !1,
                n = N.dataHandler.getUserData().getUserIdByGameID(this.gameDataInstance.tRoomData.u32GameID);
            for (let t = 0; t < this._tPokerHandData.vPlayerRecords.length; ++t)
                if (this._tPokerHandData.vPlayerRecords[t].nPlayerID !== n) {
                    let s = e(this._tPokerHandData.vPlayerRecords[t].nPlayerID); - 1 != s && this._tPokerHandData.vPlayerRecords[t].vCards.length > 0 && i.push(s)
                } else s = this._tPokerHandData.vPlayerRecords[t].bForceShowDown;
            if (!s)
                for (let t = 0; t < this._tPokerHandData.vShowCardByStanderUID.length; ++t)
                    if (this._tPokerHandData.vShowCardByStanderUID[t] === n) {
                        s = !0;
                        break
                    } if (i.length > 0 && s) {
                let t = new Vt;
                t.eSrcType = xt.ACTION_SYSTEM, t.eAction = Ut.SYSTEM_ACTION_FORCESHOW, t.data = i, this._vActionsList.push(t)
            }
        }
        _doForceShow(t) {
            for (let e = 0; e < N.StringTools.getArrayLength(t); ++e) {
                let i = this._getSeatById(t[e]);
                if (i)
                    for (let t = 0; t < i.getHandsCardsCount(); ++t) i.getCard(t).setActive(!1), i.getShowCard(t).setActive(!0), i.getShowCard(t).setFace(!0), i.getShowCard(t).hasContent() ? i.getShowCard(t).setFace(!0) : i.getShowCard(t).setFace(!1)
            }
        }
        _sendOutAction() {
            let t = 0,
                e = N.dataHandler.getUserData().getUserIdByGameID(this.gameDataInstance.tRoomData.u32GameID);
            for (let i = 0; i < this._tPokerHandData.vPlayerRecords.length; ++i)
                if (this._tPokerHandData.vPlayerRecords[i].nPlayerID === e) {
                    t = this._tPokerHandData.vPlayerRecords[i].nReviewSendOutLen;
                    break
                } if (t > this._tPokerHandData.vPublicCards.length) {
                let e = new Vt;
                e.eSrcType = xt.ACTION_SYSTEM, e.eAction = Ut.SYSTEM_ACTION_SENDOUT, e.data = t, this._vActionsList.push(e)
            }
        }
        _doSendOut(t) {
            let e = this._tPokerHandData.vPublicCards.concat(this._tPokerHandData.vUnsendPublicCards);
            for (let i = 0; i < this.pub_card_list.length; ++i) i < t && (this.pub_card_list[i].setContent(e[i].eCardNum, e[i].eCardSuit), this.pub_card_list[i].node.active = !0, this.pub_card_list[i].setFace(!0))
        }
        _analysisActions() {
            this._nCurrentActionSeq = -1, N.StringTools.clearArray(this._vActionsList), N.StringTools.clearArray(this._vPlayedActionsList);
            let t = this._objReplayGame.RoundsInfo;
            {
                let e = t.preflop;
                for (let t = 0; t < N.StringTools.getArrayLength(e); ++t) {
                    let i = new jt;
                    i.eSrcType = xt.ACTION_PLAYER, i.nSeatID = N.Number(e[t].seat_no), i.nAmount = N.Number(e[t].amount), i.eAction = N.Number(e[t].action_type), i.eSeq = N.Number(e[t].seq), this._vActionsList.push(i)
                }
            } {
                let e = t.end_preflop_round,
                    i = new Vt;
                i.eSrcType = xt.ACTION_SYSTEM, i.eAction = Ut.SYSTEM_ACTION_ENDPREFLOP, i.data = e.pots_info, this._vActionsList.push(i)
            } {
                let e = t.flop_community_cards;
                if (!(N.StringTools.getArrayLength(e) > 0)) {
                    let e = new Vt;
                    return e.eSrcType = xt.ACTION_SYSTEM, e.eAction = Ut.SYSTEM_ACTION_SETTLEMENT, e.data = t.settlement_round, this._vActionsList.push(e), this._forceShowAction(), void this._sendOutAction()
                } {
                    let i = new Vt;
                    i.eSrcType = xt.ACTION_SYSTEM, i.eAction = Ut.SYSTEM_ACTION_DEALFLOP, i.data = e, this._vActionsList.push(i);
                    let s = t.flop;
                    for (let t = 0; t < N.StringTools.getArrayLength(s); ++t) {
                        let e = new jt;
                        e.eSrcType = xt.ACTION_PLAYER, e.nSeatID = N.Number(s[t].seat_no), e.nAmount = N.Number(s[t].amount), e.eAction = N.Number(s[t].action_type), e.eSeq = N.Number(s[t].seq), this._vActionsList.push(e)
                    }
                    let n = t.end_flop_round,
                        a = new Vt;
                    a.eSrcType = xt.ACTION_SYSTEM, a.eAction = Ut.SYSTEM_ACTION_ENDFLOP, a.data = n.pots_info, this._vActionsList.push(a)
                }
            }
            for (let t = 0; t < N.StringTools.getArrayLength(this._objReplayInsurance); ++t) {
                if (this._tInsuranceHitOutsTips || (this._tInsuranceHitOutsTips = c(this.prefab_hitOutsTipsAnim).getComponent(k), this._tInsuranceHitOutsTips.node.setScale(new p(.8, .8, .8)), this.panel_insurance.addChild(this._tInsuranceHitOutsTips.node)), !this._tInsuranceReplay) {
                    let t = c(this.prefab_insuranceEntrance);
                    this.panel_insurance.addChild(t), this._tInsuranceReplay = t.getComponent(M)
                }
                this._tInsuranceReplay.init(), this._tInsuranceReplay.initFinish(this._objReplayInsurance[t].InsuranceMode, !1), this._tInsuranceReplay.setViewMode(P.InsuranceViewMode.VIEW_REPLAY)
            }
            this._doHideInsurance();
            for (let t = 0; t < N.StringTools.getArrayLength(this._objReplayInsurance); ++t)
                if (2 === N.Number(this._objReplayInsurance[t].Round)) {
                    let t = new Vt;
                    t.eSrcType = xt.ACTION_SYSTEM, t.eAction = Ut.SYSTEM_ACTION_DEALINSURANCE, t.data = this._objReplayInsurance[0], this._vActionsList.push(t), this._mapShowInsuranceFrameFlag.add(this._vActionsList.length - 1, 2);
                    let e = new Vt;
                    N.StringTools.deepCopy(t, e), this._vActionsList.push(e), this._mapShowInsuranceFrameFlag.add(this._vActionsList.length - 1, 2);
                    let i = new Vt;
                    i.eSrcType = xt.ACTION_SYSTEM, i.eAction = Ut.SYSTEM_ACTION_ENDINSURANCE, this._vActionsList.push(i);
                    break
                } if (!t.turn_community_card) {
                let e = new Vt;
                return e.eSrcType = xt.ACTION_SYSTEM, e.eAction = Ut.SYSTEM_ACTION_SETTLEMENT, e.data = t.settlement_round, this._vActionsList.push(e), this._forceShowAction(), void this._sendOutAction()
            } {
                let e = new Vt;
                e.eSrcType = xt.ACTION_SYSTEM, e.eAction = Ut.SYSTEM_ACTION_DEALTURN, e.data = t.turn_community_card, this._vActionsList.push(e);
                let i = t.turn;
                for (let t = 0; t < N.StringTools.getArrayLength(i); ++t) {
                    let e = new jt;
                    e.eSrcType = xt.ACTION_PLAYER, e.nSeatID = N.Number(i[t].seat_no), e.nAmount = N.Number(i[t].amount), e.eAction = N.Number(i[t].action_type), e.eSeq = N.Number(i[t].seq), this._vActionsList.push(e)
                }
                let s = t.end_turn_round,
                    n = new Vt;
                n.eSrcType = xt.ACTION_SYSTEM, n.eAction = Ut.SYSTEM_ACTION_ENDTURN, n.data = s.pots_info, this._vActionsList.push(n), this._nTurnActIdx = this._vActionsList.length - 1
            }
            for (let t = 0; t < N.StringTools.getArrayLength(this._objReplayInsurance); ++t)
                if (3 === N.Number(this._objReplayInsurance[t].Round)) {
                    let e = new Vt;
                    e.eSrcType = xt.ACTION_SYSTEM, e.eAction = Ut.SYSTEM_ACTION_DEALINSURANCE, e.data = this._objReplayInsurance[t], this._vActionsList.push(e), this._mapShowInsuranceFrameFlag.add(this._vActionsList.length - 1, 3);
                    let i = new Vt;
                    N.StringTools.deepCopy(e, i), this._vActionsList.push(i), this._mapShowInsuranceFrameFlag.add(this._vActionsList.length - 1, 3);
                    let s = new Vt;
                    s.eSrcType = xt.ACTION_SYSTEM, s.eAction = Ut.SYSTEM_ACTION_ENDINSURANCE, this._vActionsList.push(s);
                    break
                } if (!t.river_community_card) {
                let e = new Vt;
                return e.eSrcType = xt.ACTION_SYSTEM, e.eAction = Ut.SYSTEM_ACTION_SETTLEMENT, e.data = t.settlement_round, this._vActionsList.push(e), this._forceShowAction(), void this._sendOutAction()
            } {
                let e = new Vt;
                e.eSrcType = xt.ACTION_SYSTEM, e.eAction = Ut.SYSTEM_ACTION_DEALRIVER, e.data = t.river_community_card, this._vActionsList.push(e);
                let i = t.river;
                for (let t = 0; t < N.StringTools.getArrayLength(i); ++t) {
                    let e = new jt;
                    e.eSrcType = xt.ACTION_PLAYER, e.nSeatID = N.Number(i[t].seat_no), e.nAmount = N.Number(i[t].amount), e.eAction = N.Number(i[t].action_type), e.eSeq = N.Number(i[t].seq), this._vActionsList.push(e)
                }
                let s = t.end_river_round,
                    n = new Vt;
                n.eSrcType = xt.ACTION_SYSTEM, n.eAction = Ut.SYSTEM_ACTION_ENDRIVER, n.data = s.pots_info, this._vActionsList.push(n), this._nRiverActIdx = this._vActionsList.length - 1
            }
            if (N.StringTools.getArrayLength(this._vShowDownList) > 0) {
                let t = new Vt;
                t.eSrcType = xt.ACTION_SYSTEM, t.eAction = Ut.SYSTEM_ACTION_SHOWDOWN, this._vActionsList.push(t)
            } {
                let e = new Vt;
                e.eSrcType = xt.ACTION_SYSTEM, e.eAction = Ut.SYSTEM_ACTION_SETTLEMENT, e.data = t.settlement_round, this._vActionsList.push(e), this._forceShowAction(), this._sendOutAction()
            }
        }
        _onScheduleUpdateActions(t) {
            if (this._nCurrentActionSeq + 1 < 0 || this._nCurrentActionSeq + 1 >= N.StringTools.getArrayLength(this._vActionsList)) return;
            let e = this._vActionsList[this._nCurrentActionSeq + 1];
            this._vPlayedActionsList.push(e), ++this._nCurrentActionSeq, this._updateAllActions(), this._updateSlider()
        }
        _updateAllActions() {
            this._resetTable(!1), this._setSeatInfo(), this._doAnte(), this._doBlind();
            for (let t = 0; t < N.StringTools.getArrayLength(this._vPlayedActionsList); ++t) {
                let e = this._vPlayedActionsList[t];
                switch (e.eSrcType) {
                    case xt.ACTION_PLAYER: {
                        let t = this._getSeatById(e.nSeatID);
                        this._seatMap.add(e.nSeatID, e.eAction), this._doPlayerAction(t, e)
                    }
                    break;
                    case xt.ACTION_SYSTEM:
                        this._doSystemAction(e)
                }
            }
            this._seatMap.forEachKeyValue(((t, e) => {
                if (t.value != O.Enum_Action_Allin) {
                    this._getSeatById(t.key).hideFire()
                }
            })), this._nTurnActIdx > 0 && (this._nCurrentActionSeq < this._nTurnActIdx - 1 ? (this.pub_card_list[3].setCrackAnim(!1), this._hideHitOutsTipsAnim()) : this._nCurrentActionSeq === this._nTurnActIdx - 1 ? this.pub_card_list[3].node.active && this._bShowCrackAnimTurn && (this.pub_card_list[3].setCrackAnim(!0), this._showHitOutsTipsAnim()) : this._nCurrentActionSeq < this._nRiverActIdx - 1 ? (this.pub_card_list[4].setCrackAnim(!1), this._hideHitOutsTipsAnim()) : this._nCurrentActionSeq === this._nRiverActIdx - 1 && this.pub_card_list[4].node.active && (this.pub_card_list[3].setCrackAnim(!1), this._bShowCrackAnimRiver && (this.pub_card_list[4].setCrackAnim(!0), this._showHitOutsTipsAnim())))
        }
        _doPlayerAction(t, e) {
            if (!t || !e) return;
            let i = t.getData();
            if (i && i.last_action !== O.Enum_Action_Fold && i.last_action !== O.Enum_Action_Allin) switch (i.last_action = e.eAction, e.eAction) {
                case O.Enum_Action_Null:
                    t.updateSeatStatus(N.Enum.SeatStatus.SeatStatus_inGame_actionType, O.Enum_Action_Null, !0);
                    break;
                case O.Enum_Action_Check:
                    t.updateSeatStatus(N.Enum.SeatStatus.SeatStatus_inGame_actionType, O.Enum_Action_Check, !0);
                    break;
                case O.Enum_Action_Fold:
                    t.updateSeatStatus(N.Enum.SeatStatus.SeatStatus_inGame_actionType, O.Enum_Action_Fold, !0);
                    break;
                case O.Enum_Action_Call:
                    i.round_bet = i.round_bet + e.nAmount, i.stake - e.nAmount >= 0 ? i.stake = i.stake - e.nAmount : i.stake = 0, t.showChipsNow(i.round_bet), t.setStake(i.stake), t.updateSeatStatus(N.Enum.SeatStatus.SeatStatus_inGame_actionType, O.Enum_Action_Call, !0);
                    break;
                case O.Enum_Action_Bet:
                    i.stake = i.stake - (e.nAmount - i.round_bet), i.round_bet = e.nAmount, t.showChipsNow(e.nAmount), t.setStake(i.stake), t.updateSeatStatus(N.Enum.SeatStatus.SeatStatus_inGame_actionType, O.Enum_Action_Bet, !0);
                    break;
                case O.Enum_Action_Raise:
                    i.stake = i.stake - (e.nAmount - i.round_bet), i.round_bet = e.nAmount, t.setStake(i.stake), t.showChipsNow(e.nAmount), t.updateSeatStatus(N.Enum.SeatStatus.SeatStatus_inGame_actionType, O.Enum_Action_Raise, !0);
                    break;
                case O.Enum_Action_Allin:
                    i.round_bet = e.nAmount, i.stake = 0, t.showChipsNow(e.nAmount), t.setStake(0), t.updateSeatStatus(N.Enum.SeatStatus.SeatStatus_inGame_actionType, O.Enum_Action_Allin, !0)
            }
        }
        _doSystemAction(t) {
            switch (t.eAction) {
                case Ut.SYSTEM_ACTION_ENDPREFLOP:
                    this._doEndRound(Ut.SYSTEM_ACTION_ENDPREFLOP, t.data);
                    break;
                case Ut.SYSTEM_ACTION_DEALFLOP:
                    this._dealCommunityCard(Ut.SYSTEM_ACTION_DEALFLOP, t.data);
                    break;
                case Ut.SYSTEM_ACTION_ENDFLOP:
                    this._doEndRound(Ut.SYSTEM_ACTION_ENDFLOP, t.data);
                    break;
                case Ut.SYSTEM_ACTION_DEALTURN:
                    this._dealCommunityCard(Ut.SYSTEM_ACTION_DEALTURN, t.data);
                    break;
                case Ut.SYSTEM_ACTION_ENDTURN:
                    this._doEndRound(Ut.SYSTEM_ACTION_ENDTURN, t.data);
                    break;
                case Ut.SYSTEM_ACTION_DEALRIVER:
                    this._dealCommunityCard(Ut.SYSTEM_ACTION_DEALRIVER, t.data);
                    break;
                case Ut.SYSTEM_ACTION_ENDRIVER:
                    this._doEndRound(Ut.SYSTEM_ACTION_ENDRIVER, t.data);
                    break;
                case Ut.SYSTEM_ACTION_SHOWDOWN:
                    this._doShowDown();
                    break;
                case Ut.SYSTEM_ACTION_SETTLEMENT:
                    this._doWin(t.data);
                    break;
                case Ut.SYSTEM_ACTION_DEALINSURANCE:
                    this._doReplayInsurance(t.data);
                    break;
                case Ut.SYSTEM_ACTION_ENDINSURANCE:
                    this._doHideInsurance();
                    break;
                case Ut.SYSTEM_ACTION_FORCESHOW:
                    this._doForceShow(t.data);
                    break;
                case Ut.SYSTEM_ACTION_SENDOUT:
                    this._doSendOut(t.data)
            }
            t.eAction !== Ut.SYSTEM_ACTION_DEALINSURANCE && this._doHideInsurance()
        }
        _doEndRound(t, e) {
            let i = 0,
                s = 0;
            for (let t = 0; t < N.StringTools.getArrayLength(this._vSeatsList); ++t) {
                let e = this._vSeatsList[t];
                if (e.getStatus() !== N.Enum.SeatStatus.SeatStatus_empty) {
                    if (e.SetName(e.getData().name), e.hideChips(), e.hideWin(), e.getData().last_action !== O.Enum_Action_Fold && e.getData().last_action !== O.Enum_Action_Allin && (e.updateSeatStatus(N.Enum.SeatStatus.SeatStatus_waiting, O.Enum_Action_Null), e.doGray(!1), e.hideTips(), e.hideStatusText()), e.getData().last_action === O.Enum_Action_Allin && ++i, N.dataHandler.getUserData().getUserIdByGameID(this.gameDataInstance.tRoomData.u32GameID) === e.getData().playerid)
                        for (let t = 0; t < e.getHandsCardsCount(); ++t) e.getCard(t).setActive(!1), e.getShowCard(t).setActive(!0), e.getShowCard(t).setFace(!0);
                    e.getData().last_action === O.Enum_Action_Fold && (e.hideCards(), e.doGray(!0)), e.getData().last_action !== O.Enum_Action_Fold && ++s, e.getData().round_bet = 0
                }
            }
            if (s >= 2 && s <= i + 1)
                for (let t = 0; t < N.StringTools.getArrayLength(this._vSeatsList); t++) {
                    let e = this._vSeatsList[t];
                    if (e.getStatus() != N.Enum.SeatStatus.SeatStatus_empty && e.getData().last_action !== O.Enum_Action_Fold)
                        for (let t = 0; t < e.getHandsCardsCount(); ++t) e.getCard(t).setActive(!1), e.getShowCard(t).setActive(!0), e.getShowCard(t).setFace(!0)
                }
            let n = N.StringTools.getArrayLength(e);
            if (n > 0) {
                this._setMainPool(N.Number(e[0].amount), !0);
                for (let t = 1; t < n; ++t) this._setSidePool(t - 1, N.Number(e[t].amount))
            }
        }
        _doWin(t) {
            for (let e = 0; e < N.StringTools.getArrayLength(t); ++e) {
                let i = this._getSeatById(N.Number(t[e].win_seat_no));
                if (!i) continue;
                let s = N.Number(t[e].win_amount),
                    n = i.getData().stake;
                this._vInitialStakeList.forEach(((t, e) => {
                    if (t == i.serverId) return n = e, "break"
                })), i.getData().stake = n + s, i.setStake(i.getData().stake), s > 0 && (i.SetName("+" + N.StringTools.serverGoldToShowString(s), N.Enum.NameTextType.SetNameType_setWinNumber), i.showWin())
            }
            for (let t = 0; t < N.StringTools.getArrayLength(this._vSeatsList); ++t) {
                let e = this._vSeatsList[t];
                e.getStatus() !== N.Enum.SeatStatus.SeatStatus_empty && (e.getData().last_action !== O.Enum_Action_Fold && (e.hideTips(), e.hideStatusText()), e.hideFire())
            }
            this._setMainPool(0, !0);
            for (let t = 0; t < N.StringTools.getArrayLength(this.side_pool_list); ++t) this._setSidePool(t, 0)
        }
        _dealCommunityCard(t, e) {
            switch (t) {
                case Ut.SYSTEM_ACTION_DEALFLOP:
                    this.pub_card_list[0].setContent(N.Number(e[0].number), N.Number(e[0].suit)), this.pub_card_list[0].node.active = !0, this.pub_card_list[0].setFace(!0), this.pub_card_list[1].setContent(N.Number(e[1].number), N.Number(e[1].suit)), this.pub_card_list[1].node.active = !0, this.pub_card_list[1].setFace(!0), this.pub_card_list[2].setContent(N.Number(e[2].number), N.Number(e[2].suit)), this.pub_card_list[2].node.active = !0, this.pub_card_list[2].setFace(!0), this.pub_card_list[3].node.active = !1, this.pub_card_list[4].node.active = !1;
                    break;
                case Ut.SYSTEM_ACTION_DEALTURN:
                    this.pub_card_list[3].setContent(N.Number(e.number), N.Number(e.suit)), this.pub_card_list[3].node.active = !0, this.pub_card_list[3].setFace(!0), this.pub_card_list[4].node.active = !1;
                    break;
                case Ut.SYSTEM_ACTION_DEALRIVER:
                    this.pub_card_list[4].setContent(N.Number(e.number), N.Number(e.suit)), this.pub_card_list[4].node.active = !0, this.pub_card_list[4].setFace(!0)
            }
        }
        _doShowDown() {
            for (let t = 0; t < N.StringTools.getArrayLength(this._vShowDownList); ++t) {
                let e = this._getSeatById(this._vShowDownList[t]);
                if (e)
                    for (let t = 0; t < e.getHandsCardsCount(); ++t) e.getCard(t).setActive(!1), e.getShowCard(t).setActive(!0), e.getShowCard(t).setFace(!0), e.getShowCard(t).hasContent() ? e.getShowCard(t).setFace(!0) : e.getShowCard(t).setFace(!1)
            }
            for (let t = 0; t < N.StringTools.getArrayLength(this._vMuckList); ++t) {
                let e = this._getSeatById(this._vMuckList[t]);
                e && (e.showTips(N.config.getStringData("ActionTips10"), N.Enum.TipsType.Tips_waitOrLeave), e.doGray(!0))
            }
        }
        _doHideInsurance() {
            this._tInsuranceReplay && this._tInsuranceReplay.autoHide(!1)
        }
        _doReplayInsurance(t) {
            if (!this._tInsuranceReplay || this._tInsuranceReplay.isActive()) return;
            this._lastInsuranceReplayData = this._tInsuranceReplay.parseInsuranceReplayData(this._tPokerHandData.nGameid, t, this._bMirco);
            let e = this._lastInsuranceReplayData,
                i = !1;
            if (this._mapShowInsuranceFrameFlag.forEach(((t, s) => {
                    if (this._nCurrentActionSeq === t && e.round === s) return i = !0, "break"
                })), !i) return;
            let s = this.panel_insurance.getComponent(d).height / this._tInsuranceReplay.getMainPanelSize().height;
            this._tInsuranceReplay.node.setScale(new p(s, s, s));
            let n = this.panel_insurance.getComponent(d).width * (this._tInsuranceReplay.node.getComponent(d).anchorX - this.panel_insurance.getComponent(d).anchorX),
                a = this.panel_insurance.getComponent(d).height * (this._tInsuranceReplay.node.getComponent(d).anchorY - this.panel_insurance.getComponent(d).anchorY);
            if (this._tInsuranceReplay.node.setPosition(new p(n, a)), N.StringTools.getArrayLength(e.insurancePlayerInfo) > 0) {
                let t = e.insurancePlayerInfo[0],
                    i = N.Number(t.Playerid),
                    s = N.String(t.Playername),
                    n = 0,
                    a = t.Holecards;
                this._tInsuranceReplay.addPlayerCardsData(i, s, n, a, !0)
            }
            for (let t = 0; t < N.StringTools.getArrayLength(e.insuranceData.player_seats); ++t) {
                let i = e.insuranceData.player_seats[t],
                    s = N.Number(i.playerid),
                    n = N.String(i.playername),
                    a = N.Number(i.outs_count),
                    o = i.holecards;
                this._tInsuranceReplay.addPlayerCardsData(s, n, a, o, !1)
            }
            if (this._tInsuranceReplay.autoShow(!1), e.shot) switch (e.round) {
                case 2:
                    this._bShowCrackAnimTurn = !0;
                    break;
                case 3:
                    this._bShowCrackAnimRiver = !0
            }
        }
        _showHitOutsTipsAnim() {
            if (!this._tInsuranceHitOutsTips || !this._lastInsuranceReplayData) return;
            let t = this._lastInsuranceReplayData;
            if (0 === t.insureWinBet) return;
            do {
                let t = this.pub_card_list[0].node,
                    e = this._tInsuranceHitOutsTips.node;
                if (!b(t, !0) || !b(e, !0)) continue;
                let i = new p(y.getVisibleSize().width / 2, y.getVisibleSize().height / 2);
                i.y = t.getComponent(d).convertToWorldSpaceAR(g(p.ZERO)).y, i.y -= (1 - t.getComponent(d).anchorY) * t.getComponent(d).height * t.parent.scale.x, i.y -= (1 - e.getComponent(d).anchorY) * e.getComponent(d).height * e.scale.y, i.y -= (this.panel_main.scale.x - 1) * e.getComponent(d).height, i.y -= 10, e.parent.getComponent(d).convertToNodeSpaceAR(i, i), e.setPosition(i)
            } while (0);
            let e = this._bMirco ? 2 : 0,
                i = N.StringTools.clientGoldByServer(t.insureWinBet);
            i = N.StringTools.toFixed(i, e, N.StringTools.RoundingMode.ROUND_HALF_UP), this._tInsuranceHitOutsTips.showAnim(i)
        }
        _hideHitOutsTipsAnim() {
            this._tInsuranceHitOutsTips && this._tInsuranceHitOutsTips.hideAnim()
        }
        _resetInsuranceInfo() {
            this._nTurnActIdx = 0, this._nRiverActIdx = 0, this._bShowCrackAnimTurn = !1, this._bShowCrackAnimRiver = !1, this._mapShowInsuranceFrameFlag.clear(), this._doHideInsurance(), this._hideHitOutsTipsAnim()
        }
        _updateSlider() {
            let t = N.Number(N.StringTools.getArrayLength(this._vPlayedActionsList) / N.StringTools.getArrayLength(this._vActionsList));
            this._setSlider(t)
        }
        _setSlider(t) {
            this.slider.progress = Math.min(1, t), this.slider.node.getChildByName("img_sp").getComponent(_).node.getComponent(d).width = this.slider.progress * this.slider.node.getComponent(d).width
        }
        _setMainPool(t, e) {
            this.main_pool.getChildByName("txt").getComponent(o).string = this.gameDataInstance.tRoomData.getDataPointValue(N.StringTools.clientGoldByServer(t)), this.main_pool.active = e
        }
        _setSidePool(t, e) {
            if (t < 0 || t >= N.StringTools.getArrayLength(this.side_pool_list)) return;
            e = N.StringTools.clientGoldByServer(e);
            let i = this.side_pool_list[t];
            i.getChildByName("txt").getComponent(o).string = this.gameDataInstance.tRoomData.getDataPointValue(e), i.active = e > 0
        }
        _setInsurance(t, e) {
            this.node_insurance.active = e, this.node_insurance.getChildByName("txt").getComponent(o).string = N.StringTools.numberToString(t)
        }
        play() {
            this._bPlayOrPause = !0, this._switchPlayPauseIcon(!1), C.getScheduler().isScheduled(this._onScheduleUpdateActions, this) ? (E.instance.ActionManager.resumeTarget(this.node), C.getScheduler().resumeTarget(this)) : (this.unschedule(this._onScheduleUpdateActions), this.schedule(this._onScheduleUpdateActions, this._nSpeed))
        }
        pause() {
            this._bPlayOrPause = !1, this._switchPlayPauseIcon(!0), E.instance.ActionManager.pauseTarget(this.node), C.getScheduler().pauseTarget(this)
        }
        _switchPlayPauseIcon(t) {
            let e = this.btn_play.getComponent(_),
                i = t ? "zh_CN/game/dzpoker/common/game_replay_btn_play" : "zh_CN/game/dzpoker/common/game_replay_btn_pause";
            N.resMgr.setSpriteFrame(e.node, i)
        }
        playAndPause() {
            this._bPlayOrPause = !this._bPlayOrPause, this._bPlayOrPause ? this.play() : this.pause()
        }
        changeSpeed() {
            let t = this._nSpeedGear;
            ++t >= Ft.ESG_MAX && (t = Ft.ESG_GEAR_1), this._setSpeed(t), this.unschedule(this._onScheduleUpdateActions), this.play()
        }
        _setSpeed(t) {
            this._nSpeedGear = t;
            let e = this.btn_speed.node.getChildByName("txt").getComponent(o);
            switch (this._nSpeedGear) {
                case Ft.ESG_GEAR_1_5:
                    this._nSpeed = this._nSpeedDelayTime / 1.5, e.string = "X1.5";
                    break;
                case Ft.ESG_GEAR_2:
                    this._nSpeed = this._nSpeedDelayTime / 2, e.string = "X2.0";
                    break;
                case Ft.ESG_NONE:
                case Ft.ESG_GEAR_1:
                default:
                    this._nSpeed = this._nSpeedDelayTime / 1, e.string = "X1.0"
            }
        }
        _onMsgUpdateReplayData(t) {
            B.isInvalidGameDataMultiWindow(t.gameDataInstance, this.gameDataInstance) || this.isShow() && (this.setBtnTouchEnable(this.btn_last_page, !0), this.setBtnTouchEnable(this.btn_next_page, !0), t.param.hasReplayData ? (this.setBtnTouchEnable(this.btn_play, !0), this.setBtnTouchEnable(this.btn_replay, !0), this.setBtnTouchEnable(this.btn_speed, !0), this.setBtnTouchEnable(this.btn_last_step, !0), this.setBtnTouchEnable(this.btn_next_step, !0), this.loadAll(t.param.uuid)) : (this.resetUI(), N.TT.showMsg(N.config.getStringData("UIAllreviewReplayTips2"), N.Enum.ToastType.ToastTypeError)))
        }
        lastHand() {
            this.pause(), N.MessageCenter.send("game_replay_lastHand", this.gameDataInstance)
        }
        nextHand() {
            this.pause(), N.MessageCenter.send("game_replay_nextHand", this.gameDataInstance)
        }
        lastAction() {
            console.log("lastAction:" + this._nCurrentActionSeq), this._nCurrentActionSeq >= 0 ? N.StringTools.getArrayLength(this._vPlayedActionsList) > 0 && (this._vPlayedActionsList.pop(), this._nCurrentActionSeq -= 1, this._updateAllActions(), this._updateSlider(), this.unschedule(this._onScheduleUpdateActions), this.schedule(this._onScheduleUpdateActions, this._nSpeed)) : this._seatMap.forEachKeyValue(((t, e) => {
                this._getSeatById(t.key).hideFire()
            })), this.play()
        }
        nextAction() {
            this._onScheduleUpdateActions(0), this.unschedule(this._onScheduleUpdateActions), this.schedule(this._onScheduleUpdateActions, this._nSpeed), this.play()
        }
        showCritisicmTips() {
            this.spCriticsimTips.node.active = !0, this.spCriticsimTips.node.scale = new p(.01, .01, .01), N.StringTools.setRichTextString(this.spCriticsimTips.node.getChildByName("txtRichTips"), N.config.getStringData("Criticsim_start_tip")), N.StringTools.setRichTextString(this.spCriticsimTips.node.getChildByName("txtRichTips2"), N.config.getStringData("Criticsim_start_tip2")), I(this.spCriticsimTips.node).show().delay(.3).to(.2, {
                scale: g(1, 1, 1)
            }).delay(1.2).hide().start()
        }
        getseatHandsCardType() {
            let t = v.SHCT_NONE;
            switch (this.gameDataInstance.tRoomData.u32GameID) {
                case N.Enum.GameId.Plo:
                    t = v.SHCT_PLO;
                    break;
                case N.Enum.GameId.Plo5:
                    t = v.SHCT_PLO5;
                    break;
                default:
                    t = v.SHCT_TEXAS
            }
            return t
        }
    }).prototype, "prefab_seat", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(dt.prototype, "prefab_insuranceEntrance", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(dt.prototype, "prefab_hitOutsTipsAnim", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(dt.prototype, "panel_main", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(dt.prototype, "panel_seat", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = e(dt.prototype, "panel_insurance", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(dt.prototype, "txt_game_mode", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(dt.prototype, "txt_game_uuid", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(dt.prototype, "txt_pot", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = e(dt.prototype, "btn_play", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(dt.prototype, "btn_replay", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(dt.prototype, "btn_speed", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(dt.prototype, "btn_last_page", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(dt.prototype, "btn_next_page", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(dt.prototype, "btn_last_step", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(dt.prototype, "btn_next_step", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(dt.prototype, "pub_card_list", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Ot = e(dt.prototype, "panel_shield", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(dt.prototype, "side_pool_list", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Pt = e(dt.prototype, "main_pool", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(dt.prototype, "node_insurance", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(dt.prototype, "img_d", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(dt.prototype, "slider", [_t], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(dt.prototype, "spCriticsimTips", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(dt.prototype, "gameSceneInstance", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yt = e(dt.prototype, "gameDataInstance", [ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = dt)) || ct));
    s._RF.pop()
}