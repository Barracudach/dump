import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as H from "./cc.js";
import * as N from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as P from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as b from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as v from "./cc.js";
import * as i from "./cc.js";
import * as y from "./cc.js";
import * as A from "./observer.js";
import * as w from "./observer.js";
import * as I from "./Holdem_PlayerSeat_ts.js";
import * as L from "./Holdem_PlayerAvatar_ts.js";
import * as T from "./Holdem_PlayerInfo_ts.js";
import * as k from "./Holdem_PlayerTags_ts.js";
import * as O from "./Holdem_PlayerTimer_ts.js";
import * as D from "./Holdem_Stake_ts.js";
import * as B from "./Holdem_CardsHandler_ts.js";
import * as R from "./Pb.js";
import * as M from "./Holdem_Room_ts.js";
import * as E from "./holdemPlayer.js";
import * as x from "./mttconfig.js";
import * as G from "./Translator.js";
import * as F from "./Emoticons_ts.js";
import * as z from "./soundEffect.js";
import * as V from "./ResourcesLoader.js";
import * as U from "./CommonTools.js";
import * as W from "./Holdem_Basic_Item.js";
import * as j from "./FormatParser.js";
import * as K from "./MultipleGame.js";
import * as Y from "./Holdem_Celebrity_Player.js";
import * as q from "./MTTConnector.js";
import * as Z from "./cv.js";
import * as X from "./AppConfig.js";
import * as J from "./MultipleGameTabButton.js";
import * as mod27 from "./GameChipsDrop.js";
import * as Q from "./FakeMultipleGame.js";
import * as tt from "./StringTools.js";
import * as et from "./PlayAudioClip_MB.js";
import * as ot from "./PlaySpine_Skin_Animation_MB.js";
import * as it from "./Enum.js";
import * as st from "./Enum.js";
import * as at from "./LanguageManager.js";
import * as rt from "./VecTools.js";

function main() {
    var nt, lt, dt, ht, ct, yt, pt, ut, mt, gt, Ct, bt, ft, vt, Nt, Pt, _t, St, Ht, At, wt, It, Lt, Tt, kt, Ot, Dt, Bt, Rt, Mt, Et, xt, Gt, Ft, zt, Vt, Ut, Wt, jt, Kt, Yt, qt, Zt, Xt, Jt, $t, Qt, te, ee, oe, ie, se, ae, re, ne, le, de, he, ce, ye, pe;
    i._RF.push({}, "d4d97r6q4BI3ZjaZNA6Okfc", "Holdem_Player_ts", void 0);
    const ue = t("selfPos", new s(180, 460)),
        me = new s(210, 110),
        ge = t("PlayerLayoutType", a({
            Self: 0,
            Bottom: 1,
            Left: 2,
            Top: 3,
            Right: 4
        }));
    t("StarListPre", a({
        5897330: 1,
        5897331: 2,
        5897356: 3,
        5898252: 4
    })), t("StarList", a({
        164927: 1,
        158574: 2,
        6983: 3,
        342093: 4,
        145853: 5,
        414163: 6,
        413564: 7,
        413569: 8,
        413571: 9,
        413587: 10,
        413590: 11,
        413593: 12,
        413597: 13,
        414039: 14,
        413604: 15
    }));
    t("PlayerState", function(t) {
        return t[t.None = 0] = "None", t[t.Leave = 1] = "Leave", t[t.WaitNext = 2] = "WaitNext", t
    }({}));
    const {
        ccclass: Ce,
        property: be
    } = d;
    t("Holdem_Player", (nt = be(I), lt = be(L), dt = be(r), ht = be(r), ct = be(T), yt = be(r), pt = be(r), ut = be(k), mt = be(O), gt = be(D), Ct = be(B), bt = be(r), ft = be(r), vt = be(n), Nt = be(r), Pt = be(r), _t = be(r), St = be(r), Ht = be(r), At = be(r), wt = be(l), It = be(r), Lt = be(n), Tt = be(r), kt = be({
        type: ge
    }), Ot = be(r), Dt = be(Y), Bt = be(n), Rt = be(r), Mt = be(r), Ce(Et = A((Gt = e((xt = class extends W {
        constructor(...t) {
            super(...t), o(this, "seat", Gt, this), o(this, "avatar", Ft, this), o(this, "winBorder", zt, this), o(this, "outAnimation", Vt, this), o(this, "info", Ut, this), o(this, "balanceNode", Wt, this), o(this, "balanceValNode", jt, this), o(this, "tags", Kt, this), o(this, "timer", Yt, this), o(this, "stake", qt, this), o(this, "cardsHandler", Zt, this), o(this, "opponentCardsHandlerContainer", Xt, this), o(this, "selfCardsHandlerContainer", Jt, this), o(this, "voiceBarPrefab", $t, this), o(this, "voiceBar", Qt, this), o(this, "dealerContainer", te, this), this.emoticon = null, o(this, "emoticonParent", ee, this), o(this, "outerNode", oe, this), o(this, "bountyBoard", ie, this), o(this, "disconnectNode", se, this), o(this, "headOverlay", ae, this), o(this, "introChest", re, this), o(this, "mysteryBountyGlove", ne, this), o(this, "sittingOutNode", le, this), this._isHunterGame = !1, this._isPromoter = !1, this._isUseCelebrityLayout = !1, this._lastChipStackNum = 3, this._selfCardDSI = -1, this._opponentCardDSI = -1, this._bountyDSI = -1, this._allowShowingInfo = !0, this._layout = ge.Left, this._startWorldPosition = new s(0, 0, 1), this._startLocalPosition = new s(0, 0, 1), this._seatIndex = 0, this._seatOffset = 0, this.room = void 0, this._store = void 0, this.hasCards = !1, this.folded = !1, this._deskCoin = 0, this.coinMode = 0, this.state = 0, this.actualState = 0, this._tmpMaxDeskCoin = 0, this.maxCards = 2, this.isVisitor = !1, this._isOut = !1, this._isGameOver = !1, this.winAniTimeout = null, this.outAniTimeout = null, this.isAppPause = !1, this._playerCardScale = .686, this.isFlatTheme = !1, this.selfCardHandlerY = 80, this.CelebrityList = [], o(this, "normalPlayerNode", de, this), o(this, "celebrityNode", he, this), o(this, "chipsDropPrefab", ce, this), this.m_pkChipsDrop = null, this.m_chipsDropOffset = new h(0, -60), o(this, "dealCardSelfNode", ye, this), o(this, "cardsHandlerAnchor", pe, this), this._isRotating = !1, this.seatIndex = void 0, this.cardFlipGapX = -138, this.onAppPause = () => {
                this.isAppPause ? cc_mtt.vv.ConsoleLog.log("onAppPause holdem player other") : (this.isAppPause = !0, cc_mtt.vv.ConsoleLog.log("onAppPause holdem player"), this.unscheduleAllCallbacks())
            }, this.onAppResume = () => {
                this.isAppPause && (this.isAppPause = !1, cc_mtt.vv.ConsoleLog.log("onAppResume holdem player"))
            }, this._bountyBoardOriginalPosition = null, this._bountyBoardPosChanged = !1, this._originalPosition = void 0, this._positionChanged = !1
        }
        get isHunterGame() {
            return this._isHunterGame
        }
        set isHunterGame(t) {
            this._isHunterGame = t, this.bountyBoard.active = t
        }
        get layout() {
            return this._layout
        }
        set layout(t) {
            var e;
            this._layout != ge.Self && ge.Self;
            this._layout == ge.Self && t != ge.Self && (this.reverseSelfPosition(), this.resetBountyBoarPositionIfNeed()), this._layout = t;
            let o = this.node.getComponentsInChildren("Holdem_PlayerLayoutHandler");
            if (!Z.appConfig.isLandscapeLayout && !this.isRotating) {
                this.cardsHandlerAnchor.setParent(this.isSelf() ? this.selfCardsHandlerContainer : this.opponentCardsHandlerContainer);
                const t = -60,
                    e = -50;
                this.cardsHandlerAnchor.setPosition(new s(0, this.isSelf() ? t : e))
            }
            null != (e = this.holdemRoom) && e.store ? this.outerNode.active = !1 : this.outerNode.active = !(!this.store || !this.store.userId);
            for (const e of o) e.layout = t;
            this.refreshOuterNodePosition(), this.updateSeatSize()
        }
        set store(t) {
            this._store = t
        }
        get store() {
            return this._store
        }
        get isMute() {
            return this.room.store.checkMuteList(this.store.userId)
        }
        onLoad() {
            this.seat.player = this, this.winBorder.active = !1, this.avatar.node.setScale(c(0, 0, 1)), cc_mtt.vv.ConsoleLog.log("Player onLoad avatar set scale 0 "), this.info.node.getComponent(y).opacity = 0, this.avatar.rankingLabel.string = "", this.initCelebrity();
            let t = this.voiceBar.position;
            this.voiceBar = p(this.voiceBarPrefab), this.voiceBar.position = t, this.voiceBar.parent = this.node, this.voiceBar.active = !1, this.m_pkChipsDrop = p(this.chipsDropPrefab).getComponent($), this.stake.node.parent.addChild(this.m_pkChipsDrop.node), u.on(m.EVENT_HIDE, this.onAppPause), u.on(m.EVENT_SHOW, this.onAppResume), this.timer.player = this
        }
        holeCardsErrorSafetyCheck() {
            var t, e;
            this.room && this.room.store && !this.room.store.isEndRound && this.store && this.store.hasCards && this.hasCards && !this.folded && !this._isOut && (this._isPromoter ? null == (t = this.celebrityNode) || null == (t = t.cardsHandler) || t.checkAndRecover(this.maxCards) : null == (e = this.cardsHandler) || e.checkAndRecover(this.maxCards))
        }
        recoverChildNodesVisible() {
            let t = Z.appConfig.getGameConfig().seatExtraScale;
            this.node.scale = new s(t, t, 1), this.node.getComponent(y).opacity = 255, this.avatar && (this.avatar.node.active = !0, this.avatar.node.scale = c(1, 1, 1), this.avatar.node.getComponent(y).opacity = 255), this.info && (this.info.node.active = !0, this.info.node.scale = c(1, 1, 1), this.info.node.getComponent(y).opacity = 255), this.cardsHandler && (this.cardsHandler.node.active = !0)
        }
        isChildNodeNotShow() {
            return this.node.active ? this.avatar && this.avatar.node.active && !rt.comapreVec3ToSingleValue(this.avatar.node.scale, 0) && 0 != this.avatar.node.getComponent(y).opacity ? this.info && this.info.node.active && !rt.comapreVec3ToSingleValue(this.info.node.scale, 0) && 0 != this.info.node.getComponent(y).opacity ? this.cardsHandler && this.cardsHandler.node.active ? 0 : 4 : 3 : 2 : 1
        }
        initCelebrity() {
            this.celebrityNode.winBorder.active = !1, this.celebrityNode.avatar.rankingLabel.string = ""
        }
        initCardHandler() {
            for (let t = 0; t < 4; t++) {
                this.cardsHandler.addCard(t, 0);
                let e = this.cardsHandler._cards[t];
                this.room && this.store && e.setSelf(this.room.store && this.room.store.self && this.room.store.self.userId == this.store.userId), this.updateCardPosition(e, t)
            }
        }
        initCelebrityCardHandler() {
            for (let t = 0; t < 4; t++) {
                this.celebrityNode.cardsHandler.addCard(t, 0);
                let e = this.celebrityNode.cardsHandler._cards[t];
                this.room && this.store && e.setSelf(this.room.store && this.room.store.self && this.room.store.self.userId == this.store.userId), this.updateCardPosition(e, t)
            }
        }
        updateCardPosition(t, e) {
            if (t.sprite.node.active = !1, t.player = this, this.holdemRoom && this.holdemRoom.is2CardsMode() && !Z.appConfig.isLandscapeLayout) {
                const o = 1.1;
                if (t._showHolder.scale.multiply(new s(o, o, 1)), 2 == e) {
                    const e = 10;
                    t._showHolder.setPosition(new s(t._showHolder.position.x + e, t._showHolder.position.y, t._showHolder.position.z))
                }
            }
        }
        onDestroy() {
            cc_mtt.vv.ConsoleLog.log("onDestroy holdem player"), u.off(m.EVENT_HIDE, this.onAppPause), u.off(m.EVENT_SHOW, this.onAppResume), this.unscheduleAllCallbacks()
        }
        setStore(t) {
            if (this.store = t, this.isSngGame()) {
                var e;
                const o = (null == (e = this.room) || null == (e = e.store) ? void 0 : e.playerUserId) == t.userId;
                this.showIdentityInfo(o)
            }
            this.maxCards = this.store.room.maxHoleCard, this.setRenders()
        }
        setSeatIndex(t) {
            this.seatIndex = t, this.updateStakePosition();
            Z.appConfig.isLandscapeLayout
        }
        setFlip(t) {
            this.setCardsFlip(t), this.setBountyBoardFlip(t)
        }
        setCardsFlip(t) {
            this.cardsHandler.hideCardHolders.forEach((e => {
                let o = e.position.x;
                !t && e.position.x < 0 ? o = e.position.x - this.cardFlipGapX : t && e.position.x > 0 && (o = e.position.x + this.cardFlipGapX), e.setPosition(new s(o, e.position.y, e.position.z)), this.setCardPosition()
            }))
        }
        setBountyBoardFlip(t) {
            this.bountyBoard.setPosition(new s((t ? 1 : -1) * Math.abs(this.bountyBoard.position.x), this.bountyBoard.position.y))
        }
        setRoomToChild() {
            this.seat.setHoldemRoom(this.holdemRoom), this.cardsHandler.setHoldemRoom(this.holdemRoom), this.initCardHandler(), this.celebrityNode.cardsHandler.setHoldemRoom(this.holdemRoom), this.initCelebrityCardHandler()
        }
        updateCelebrityPlayer() {
            if (this.store && this.store.userId) {
                let t = "",
                    e = this.CelebrityList.filter((t => t.UserID == this.store.userId && 0 == t.Role));
                e.length > 0 ? (this._isPromoter = !0, this.avatar.userBoarderFlat.active = !1, this.avatar.userBoarder.node.active = !0, t = x.webUrl + cc_mtt.vv.DataManager.getAvatarId(e[0].Avatar, this.store.userId), this.info.avatar != t && (this.info.avatar = t, this.avatar.loadStar(t))) : this._isPromoter = !1
            }
        }
        infoChanged() {
            if (this.store) {
                const {
                    userId: t,
                    nickName: e,
                    mttRank: o,
                    avatar: i
                } = this.store;
                this.seat.hasPlayer = !0, cc_mtt.vv.ConsoleLog.log("infoChanged ", t, e, o, i);
                let a = "";
                if (this.node.getComponent(y).opacity = 255, this.info.userId !== t) {
                    if (this.CelebrityList.length > 0) {
                        let e = this.CelebrityList.filter((e => e.UserID == t && 0 == e.Role));
                        e.length > 0 ? (this._isPromoter = !0, this.avatar.userBoarderFlat.active = !1, this.avatar.userBoarder.node.active = !0, a = x.webUrl + cc_mtt.vv.DataManager.getAvatarId(e[0].Avatar, t), this.info.avatar != a && (this.info.avatar = a, this.avatar.loadStar(a))) : (this._isPromoter = !1, a = cc_mtt.vv.DataManager.getAvatarId(i, t), this.info.avatar !== a && (this.avatar.userBoarder.spriteFrame = this.avatar.imageFrame[0], this.avatar.load(cc_mtt.vv.AssetsManager.getAvatarUrl(a, {
                            isThumbnails: !0,
                            timestamp: t === cc_mtt.vv.DataManager.userId ? Date.now() : null
                        })), this.info.avatar = a))
                    } else this._isPromoter = !1, a = cc_mtt.vv.DataManager.getAvatarId(i, t), this.info.avatar !== a && (this.avatar.userBoarder.spriteFrame = this.avatar.imageFrame[0], this.avatar.load(cc_mtt.vv.AssetsManager.getAvatarUrl(a, {
                        isThumbnails: !0,
                        timestamp: t === cc_mtt.vv.DataManager.userId ? Date.now() : null
                    })), this.info.avatar = a);
                    this.info.userId = t, this.celebrityNode.info.userId = t, this.celebrityNode.info.setCoinActive(!0)
                }
                this.info.setCoinActive(!0), this.activeCelebrityLayout(this.room && this.room.isLiveValid() && this.room.liveHandler.isPlayerVideoStreaming(t)), this.avatar.node.active = !0, this.avatar.node.setScale(new s(1, 1, 1)), g.stopAllByTarget(this.avatar.node), g.stopAllByTarget(this.avatar.node.getComponent(y)), this.info.coinButton.interactable = !0, this.info.node.active = !0, g.stopAllByTarget(this.info.node), g.stopAllByTarget(this.info.node.getComponent(y)), this.avatar.node.getComponent(y).opacity = 255, this.info.node.getComponent(y).opacity = 255;
                const r = M.getSelfUserId() !== t && this.store.isAutoPlay;
                this.sittingOutNode ? (this.sittingOutNode.active = r, this.info.username = e) : this.info.username = M.getSelfUserId() == t ? e : this.store.isAutoPlay ? Z.config.getStringData("Mtt_Sitting_Out") : e;
                let n = !this.room.store.isWaitingPlayerSngGame() || this.room.store.isReplay;
                M.getSelfUserId() == t && (n = !0), this.showIdentityInfo(n), this.celebrityNode.avatar.node.active = !0, this.celebrityNode.avatar.node.setScale(new s(1, 1, 1)), g.stopAllByTarget(this.celebrityNode.avatar.node), g.stopAllByTarget(this.celebrityNode.avatar.node.getComponent(y)), this.celebrityNode.info.coinButton.interactable = !0, this.celebrityNode.info.node.active = !0, g.stopAllByTarget(this.celebrityNode.info.node), g.stopAllByTarget(this.celebrityNode.info.node.getComponent(y)), this.celebrityNode.avatar.node.getComponent(y).opacity = 255, this.celebrityNode.info.node.getComponent(y).opacity = 255, this.celebrityNode.sittingOutNode ? (this.celebrityNode.sittingOutNode.active = r, this.celebrityNode.info.username = e) : this.celebrityNode.info.username = M.getSelfUserId() == t ? e : this.store.isAutoPlay ? Z.config.getStringData("Mtt_Sitting_Out") : e, this.celebrityNode.avatar.showAvatar(n), this.celebrityNode.info.showName(n);
                const l = this.getDisplayCurrency(),
                    d = this.getGameMode();
                this.info.setTableCurrency(l), this.info.setGameMode(d), this.celebrityNode.info.setTableCurrency(l), this.celebrityNode.info.setGameMode(d)
            } else this.isVisitor || this.setEmpty();
            this.updateWidget()
        }
        updateWidget() {}
        coinChanged() {
            if (this.store) {
                const {
                    leftCoin: t,
                    getPot: e,
                    potsInfo: o
                } = this.store;
                this.store.room.tournamentMode == x.GAME_LEVEL_LIST_ID.HOLDEM_NORMAL && t.toFixed(1).toString();
                const i = this.stake.node;
                if (this.room.sidePotList.length > 0 && o && o.length > 0) o.forEach((e => {
                    let o = new s(U.instance.convertToWorldSpace(i, h.ZERO).x, U.instance.convertToWorldSpace(i, h.ZERO).y);
                    this.room.sidePotList[e.sidePot.idx].getComponent(D).moveSidePotToTarget(o, 1.2, (() => {
                        this.updateLeftCoinValue(t)
                    }), this.room.mainPotStake.node.parent)
                }));
                else if (e)
                    if (this.store.needAnimation) {
                        this.room.addMainPot(null), this.room.mainPotStake.stopAllCallbackAndAnimation(), this.room.mainPotStake.setShowChipMainPot(!1), this.room.mainPotStake.setShowLabelMainPot(!1);
                        let e = new s(U.instance.convertToWorldSpace(i, h.ZERO).x, U.instance.convertToWorldSpace(i, h.ZERO).y);
                        this.room.mainPotStake.movePotToTarget(e, 1.2, (() => {
                            this.updateLeftCoinValue(t)
                        }))
                    } else this.updateLeftCoinValue(t);
                else this.updateLeftCoinValue(t)
            }
        }
        playerClickSwitchCoinMode() {
            this.holdemRoom && this.holdemRoom.onClickSwitchCoinMode()
        }
        switchCoinMode(t, e, o) {
            this.coinMode = t, this.store && (this.store.calcBB = e, this.store.calcAnte = o), this.info.coinMode = t, this.celebrityNode.info.coinMode = t;
            const i = this.getDisplayCurrency(),
                s = this.getGameMode();
            this.info.setTableCurrency(i), this.info.setGameMode(s), this.celebrityNode.info.setTableCurrency(i), this.celebrityNode.info.setGameMode(s), this.updateLeftCoinValue()
        }
        updateLeftCoinValue(t = 0) {
            if (this.store) {
                var e, o;
                let i = t > 0 ? t : this.store.leftCoin;
                !C(this.holdemRoom) || null == (e = this.holdemRoom) || null == (e = e.store) || !e.isSngGame() || null != (o = this.holdemRoom) && null != (o = o.store) && o._sngGameStart || (i = ""), this.info.bbValue = this.store.calcBB, this.celebrityNode.info.bbValue = this.store.calcBB, this.info.anteValue = this.store.calcAnte, this.celebrityNode.info.anteValue = this.store.calcAnte, this.info.coin = i, this.celebrityNode.info.coin = i
            }
        }
        StakeSkin() {}
        NeedAction() {
            this.store
        }
        RoundBalance() {
            if (this.store) {
                const {
                    coinBalance: t,
                    rank: e
                } = this.store;
                cc_mtt.vv.ConsoleLog.log(this.store.userId, "RoundBalance", t, e);
                let o = M.getCardType(e);
                Z.appConfig.getGameConfig().enableShowHandRankMTT || (o = "");
                let i = e > 0;
                this.balanceNode.children[0].children[0].getComponent(b).string = o, this.celebrityNode.balanceNode.children[0].children[0].getComponent(b).string = o, this.balanceNode.active = 0 !== t, this.celebrityNode.balanceNode.active = 0 !== t, this.avatar.showAvatar(this._allowShowingInfo), this.info.showName(("" === o || Z.appConfig.isLandscapeLayout) && this._allowShowingInfo), this.avatar.showAllInAnimation(2), this.celebrityNode.avatar.showAllInAnimation(2, this._layout == ge.Self), this._isPromoter && this.celebrityNode.info.setCoinActive(!i)
            }
        }
        TimerControl() {
            if (this.store) {
                const {
                    buyTimeCount: t,
                    countdownTtl: e,
                    countdownLeft: o,
                    state: i
                } = this.store;
                cc_mtt.vv.ConsoleLog.log("TimerControl", this.store.userId, this.store.nickName, e, o, t, "state:", i), e > 0 ? (cc_mtt.vv.ConsoleLog.log("TimerControl", e > 0, this.store.userId, this.store.nickName, e, o), cc_mtt.vv.ConsoleLog.log("** UI START TIMER", this.store.nickName), this.tags.hideAll(), this.celebrityNode.tags.hideAll(), this.store.showControl && !this.room.store.isReplay ? (cc_mtt.vv.ConsoleLog.log("** UI SHOW PLAYER CONTROL PANEL", this.room.store && this.room.store.self && this.room.store.self.userId == this.store.userId ? this.room.store.self.userId : "no self"), this.room.store && this.room.store.self && this.store.userId == this.room.store.self.userId ? (!this.timer.isTimeCounting || this.timer._timeUpAt < Date.now()) && (this.startTimerForSelf(), this.room.TogglePlayerControl(this.store)) : this.room.updateControlTimer(this.store)) : (this.startTimer(e, o, 0, 7 == i), this.startCelebrityTimer(e, o, 0, 7 == i))) : (cc_mtt.vv.ConsoleLog.log("** UI STOP TIMER"), this.stopTimer(), this.stopCelebrityTimer(), this.room && this.room.store && this.room.store.self && this.store && this.room.store.self.userId == this.store.userId && this.room.playerControl.stopAllTimer()), this.room.store.self && this.room.store.self.userId == this.store.userId && (cc_mtt.vv.ConsoleLog.log("buyTimeCount check self", this.store.userId, t), 0 != t && (this.timer.stopCardShake(), this.celebrityNode.timer.stopCardShake()))
            }
        }
        startTimerForSelf() {
            if (this.room._gameMode !== x.GAME_LEVEL_LIST_ID.AOF && !this.room.playerControl._preClickFold && !this.room.playerControl._preClickCall && this.room.store.self && this.room.store.self.showControl) {
                const {
                    countdownTtl: t,
                    countdownLeft: e,
                    state: o
                } = this.store;
                this.startTimer(t, e, 0, 7 == o)
            }
        }
        CoinAction() {
            if (this.store) {
                const {
                    leftCoin: t
                } = this.store;
                let e = this.store.deskCoin;
                if (e != this._deskCoin)
                    if (this.store.room.tournamentMode == x.GAME_LEVEL_LIST_ID.HOLDEM_NORMAL ? (this.info.coin = t, this.celebrityNode.info.coin = t) : this.updateLeftCoinValue(t), this.stake.bbValue = this.store.calcBB, this.celebrityNode.stake.bbValue = this.store.calcBB, this.stake.anteValue = this.store.calcAnte, this.celebrityNode.stake.anteValue = this.store.calcAnte, e > this._deskCoin) {
                        this.info.coinLabel.node;
                        let t = this.celebrityNode.info.coinLabel.node;
                        if (this.setActiveStake(!0), this.store.needAnimation) {
                            C(this.room) && this.room.audioPlayer.playEffect(z.ChipsToTable, this.room.store);
                            let o = c(this.stake.node.getPosition());
                            this.m_pkChipsDrop.node.setPosition(o.add(new s(this.m_chipsDropOffset.x, this.m_chipsDropOffset.y, 1))), this._lastChipStackNum = this.getChipStackNum(e), this.stake.setChipStackNum(this._lastChipStackNum), this.setActiveStake(!1), this.m_pkChipsDrop.showBetAnimation(this._lastChipStackNum, (() => {
                                this.setActiveStake(!0), this.stake.value = e, this.stake.showChipByNumberIndex()
                            }));
                            let i = new s(U.instance.convertToWorldSpace(t.parent, t.position).x, U.instance.convertToWorldSpace(t.parent, t.position).y, 1);
                            this.celebrityNode.stake.stakeFrom(i, (() => {
                                this.celebrityNode.stake.value = e
                            }))
                        } else this.stake.value = e, this.celebrityNode.stake.value = e;
                        this._deskCoin = e
                    } else e < this._deskCoin && (this.stake.value = e, this.celebrityNode.stake.value = e, this.store.needAnimation ? (this.room.mainPotStake.setShowChipMainPot(!1), this.room.mainPotStake.setShowLabelMainPot(!1), this.scheduleOnce((() => {
                        0 == e && (this.setActiveStake(!1), this.m_pkChipsDrop.removeCallback());
                        let t = this._isUseCelebrityLayout ? U.instance.convertToWorldSpace(this.celebrityNode.stake.iconNode, h.ZERO) : U.instance.convertToWorldSpace(this.stake.iconNode, h.ZERO);
                        this.room.mainPotStake.stakeFrom(new s(t.x, t.y), (() => {}), this._lastChipStackNum), C(this.holdemRoom) && this.holdemRoom.audioPlayer.playEffect(z.ChipsToPot, this.holdemRoom.store)
                    }))) : 0 == e && (this.setActiveStake(!1), this.m_pkChipsDrop.removeCallback()), this._deskCoin = e)
            }
        }
        PlayerAction() {
            if (this.store) {
                const {
                    state: e,
                    actualState: o,
                    hasCards: i,
                    cards: s
                } = this.store, {
                    Action: a
                } = R.holdem;
                this.state = e, this.actualState = o, this.folded = e == a.FOLD, cc_mtt.vv.ConsoleLog.log("PlayerActionMsg", this.store.userId, this.store.nickName, e, o);
                let r = this.holdemRoom.store.curSeatNumPlayerAction == this.store.seatNum,
                    n = this._layout == ge.Self;
                if (0 !== e ? e == a.ALL_IN ? (this.avatar.showAllInAnimation(1), this.celebrityNode.avatar.showAllInAnimation(1, n), this._isPromoter && this.celebrityNode.info.setCoinActive(!1)) : (this.avatar.showAllInAnimation(0), this.celebrityNode.avatar.showAllInAnimation(0, n), this._isPromoter && this.celebrityNode.info.setCoinActive(!0)) : o !== a.ALL_IN && (this.avatar.showAllInAnimation(0), this.celebrityNode.avatar.showAllInAnimation(0, n), this._isPromoter && this.celebrityNode.info.setCoinActive(!0)), this.setPlayerNotActionRound(), e === a.FOLD) {
                    this.avatar.isDark = !0, this.celebrityNode.avatar.isDark = !0, this.timer && this.stopTimer(), this.celebrityNode.timer && this.stopCelebrityTimer(), cc_mtt.vv.ConsoleLog.log("pat check fold", this.store.isAutoPlay);
                    let t = this.getDefaultSpriteNum(e),
                        o = t.spriteNum,
                        i = t.stateStr;
                    if (this.tags.stateLabel = i, this.celebrityNode.tags.stateLabel = i, r && (this.tags.activeLeftTag(!1), this.celebrityNode.tags.activeLeftTag(!1)), o >= 0 && (o = this.isFlatTheme ? o + 5 : o, this.tags.setTagSprite(!1, o), this.celebrityNode.tags.setTagSprite(!1, o)), this.setEnableCardPanelMask(!0), this.setEnableCardPanelMaskTop(!1), this.store.userId === this.room.store.playerUserId) cc_mtt.vv.ConsoleLog.log("in playing"), this.doGray(!1), this.room.PlayerActionPanelControl(!1), this.store.needAnimation && this.cardsHandler._cards.forEach(((t, e) => {
                        t.cardPositionAfterDeal = t.node.getPosition(), t.hideAnimation(e, null, this.setEnableCardPanelMask.bind(this, !1))
                    }));
                    else {
                        Z.appConfig.isLandscapeLayout || this.cardsHandler._cards.forEach(((t, e) => {
                            U.instance.changeParentKeepPos(t.node, this.cardsHandler.node)
                        }));
                        let t = (this.seatIndex + this.room.seats + this._seatOffset) % this.room.seats;
                        this.cardsHandler.discardCards(t, this.room.seats, this.maxCards, this.setEnableCardPanelMask.bind(this, !1)), this.doGray(!0)
                    }
                } else if (this.avatar.isDark = this._isOut || this.store && this.store.isAutoPlay || 20 == e, this.celebrityNode.avatar.isDark = this._isOut || this.store && this.store.isAutoPlay || 20 == e, this.doGray(!1), 0 == e) this.tags.clearTagsSprite(), this.celebrityNode.tags.clearTagsSprite();
                else {
                    let t = -1,
                        o = "";
                    cc_mtt.vv.ConsoleLog.log(this.info.userId + " state: " + e);
                    let i = this.getDefaultSpriteNum(e);
                    if (t = i.spriteNum, o = i.stateStr, t < 0) return cc_mtt.vv.ConsoleLog.log("default state log", e), this.tags.clearTagsSprite(), void this.celebrityNode.tags.clearTagsSprite();
                    this.store.userId === this.room.store.playerUserId && 7 == e || (cc_mtt.vv.ConsoleLog.log("Pat_check state1145", o, t, e), this.tags.stateLabel = o, this.celebrityNode.tags.stateLabel = o, this._layout == ge.Right || this._layout == ge.Self || this._layout == ge.Bottom ? (r && (this.tags.activeLeftTag(!0), this.celebrityNode.tags.activeLeftTag(!0)), t >= 0 && (t = this.isFlatTheme ? t + 5 : t, this.tags.setTagSprite(!0, t), this.celebrityNode.tags.setTagSprite(!0, t))) : (r && (this.tags.activeLeftTag(!1), this.celebrityNode.tags.activeLeftTag(!1)), t >= 0 && (t = this.isFlatTheme ? t + 5 : t, this.tags.setTagSprite(!1, t), this.celebrityNode.tags.setTagSprite(!1, t))))
                }
                if (!1 === this.store.showControl && this.room.TogglePlayerControl(null), this.room.store.self && this.store.userId == this.room.store.playerUserId && this.room.CheckPlayerControlPanel(), !Z.appConfig.isLandscapeLayout && this.store.userId === this.room.store.playerUserId && !this.store.room.isReplay) {
                    var t;
                    let e = null == (t = Q.instance) ? void 0 : t._multipleGameTabButtons[this.holdemRoom.multipleGameIndex];
                    if (this.store.room.isSittingOut) {
                        e.getStatus() !== J.SITTING_OUT && (e.setPreStatus(), e.setStatus(J.SITTING_OUT))
                    } else e.updateStatus()
                }
            }
        }
        PlayerNeedAction() {
            if (this.store) {
                const {
                    isHaveAction: t
                } = this.store;
                this.room.CheckPlayerControlPanel()
            }
        }
        OnCheckPlayerVisible() {
            if (this.store) {
                const {
                    visibleChecking: t
                } = this.store;
                this.node.active || this.setNodeActive(!0)
            }
        }
        autoPlayLabel() {
            if (this.store) {
                const {
                    isAutoPlay: t
                } = this.store;
                null !== this.avatar.autoPlayNode && (cc_mtt.vv.ConsoleLog.log("AUTO PLAY label pkw", t), this.setPlayerNotActionRound())
            }
        }
        setPlayerNotActionRound() {
            if (this.store) {
                const {
                    isAutoPlay: t,
                    state: e,
                    isOut: o
                } = this.store;
                cc_mtt.vv.ConsoleLog.log("------ setPlayerNotActionRound", e, t, this.store.nickName, this.store.isSittingOut, this.store.timeBank), o ? (this.avatar.autoPlayNode.children[0].active = !1, this.avatar.autoPlayNode.children[1].active = !1, this.celebrityNode.avatar.autoPlayNode.children[0].active = !1, this.celebrityNode.avatar.autoPlayNode.children[1].active = !1) : t || 4 == e ? (this.avatar.autoPlayNode.active = !0, this.celebrityNode.avatar.autoPlayNode.active = !0, this.avatar.autoPlayNode.children[0].active = !1, this.celebrityNode.avatar.autoPlayNode.children[0].active = !1, t ? this.setAutoPlayStatus(!0) : 4 == e && this.setAutoPlayStatus(!1)) : (this.avatar.autoPlayNode.active = !1, this.celebrityNode.avatar.autoPlayNode.active = !1, this.setAutoPlayStatus(!1))
            }
        }
        stateChange() {
            if (this.store) {
                const {
                    state: t
                } = this.store;
                this.store.state == R.holdem.Action.NONE_ACTION && (this.tags.hideAll(), this.celebrityNode.tags.hideAll()), this.store.state == R.holdem.Action.ALL_IN && (this._isPromoter && this.celebrityNode.info.setCoinActive(!1), this.room.store.self && this.store.userId == this.room.store.playerUserId && (this.room.playerControl.preActionPanel.active = !1)), this.room.store.playerUserId == this.store.userId && this.room.CheckPlayerControlPanel(), cc_mtt.vv.ConsoleLog.log("stateChange", t, this.store.state, this.store.userId)
            }
        }
        playerSitDown() {
            if (this.store) {
                const {
                    isSittingDown: t
                } = this.store;
                if (t) {
                    if (cc_mtt.vv.ConsoleLog.log("isSittingDown"), cc_mtt.vv.ConsoleLog.log("check avatar and info", this.avatar ? "true" : "false", this.info ? "true" : "false", this._layout), this.avatar) {
                        g.stopAllByTarget(this.avatar.node), g.stopAllByTarget(this.avatar.node.getComponent(y)), this.avatar.node.getComponent(y).opacity = 0, this.avatar.node.setScale(new s(1, 1, 1));
                        let t = this.getAvatarPosY(),
                            e = f().delay(.3),
                            o = f().to(.3, {
                                position: new s(0, t)
                            }),
                            i = f().call((() => {
                                let t = this.avatar.node.getPosition();
                                t.y = this.getAvatarPosY(), this.avatar.node.setPosition(t)
                            }));
                        f(this.avatar.node).then(f(this.avatar.node.getComponent(y)).to(.3, {
                            opacity: 255
                        })).start(), f(this.avatar.node).sequence(e, o, i).start(), this.node.active = !1, this.node.active = !0
                    }
                    if (this.info) {
                        g.stopAllByTarget(this.info.node), g.stopAllByTarget(this.info.node.getComponent(y)), this.info.node.getComponent(y).opacity = 0;
                        const t = f().delay(.3),
                            e = f(this.info.node.getComponent(y)).to(.3, {
                                opacity: 255
                            });
                        f(this.info.node).sequence(t, e).start()
                    }
                    if (this.celebrityNode.avatar) {
                        g.stopAllByTarget(this.celebrityNode.avatar.node), g.stopAllByTarget(this.celebrityNode.avatar.node.getComponent(y)), this.celebrityNode.avatar.node.getComponent(y).opacity = 0, this.celebrityNode.avatar.node.setScale(new s(1, 1, 1));
                        let t = this.getAvatarPosY(),
                            e = f().delay(.3),
                            o = f().to(.3, {
                                position: new s(0, t)
                            }),
                            i = f().call((() => {
                                let t = this.celebrityNode.avatar.node.getPosition();
                                t.y = this.getAvatarPosY(), this.celebrityNode.avatar.node.setPosition(t)
                            }));
                        f(this.celebrityNode.avatar.node).then(f(this.celebrityNode.avatar.node.getComponent(y)).to(.3, {
                            opacity: 255
                        })).start(), f(this.celebrityNode.avatar.node).sequence(e, o, i).start()
                    }
                    if (this.celebrityNode.info) {
                        g.stopAllByTarget(this.celebrityNode.info.node), g.stopAllByTarget(this.celebrityNode.info.node.getComponent(y)), this.celebrityNode.info.node.getComponent(y).opacity = 0;
                        const t = f().delay(.3),
                            e = f(this.celebrityNode.info.node.getComponent(y)).to(.3, {
                                opacity: 255
                            });
                        f(this.celebrityNode.info.node).sequence(t, e).start()
                    }
                }
            }
        }
        getAvatarPosY() {
            return 0
        }
        playWinnerAnimation() {
            if (this.store) {
                const {
                    isWinner: t
                } = this.store;
                t ? (cc_mtt.vv.ConsoleLog.log("Show Win Animation"), cc_mtt.vv.DataManager.webPlatform == R.commonProto.PLATFORM.PKW && this.room.store.self && this.store.userId == this.room.store.playerUserId ? (this.winAniTimeout = () => {
                    this.winBorder && (this.winBorder.active = !0, this.winBorder.getComponent(v).play(this.winBorder.getComponent(v).clips[0].name)), this.celebrityNode.winBorder && (this.celebrityNode.winBorder.active = !0, this.celebrityNode.winBorder.getComponent(v).play(this.winBorder.getComponent(v).clips[0].name))
                }, this.scheduleOnce(this.winAniTimeout, 1)) : (this.winAniTimeout = () => {
                    this.winBorder && (this.winBorder.active = !0, this.winBorder.getComponent(v).play()), this.celebrityNode.winBorder && (this.celebrityNode.winBorder.active = !0, this.celebrityNode.winBorder.getComponent(v).play())
                }, this.scheduleOnce(this.winAniTimeout, 1))) : (cc_mtt.vv.ConsoleLog.log("Hide Win animation"), this.winBorder.active = !1, this.celebrityNode.winBorder.active = !1)
            }
        }
        playerIsOut() {
            if (this.store) {
                const {
                    isOut: t,
                    isAnimated: e
                } = this.store;
                this._isOut = t, t ? (cc_mtt.vv.ConsoleLog.log("playerIsOut : userid", this.store.userId, "seatNum", this.store.seatNum), this.info.coinLabel.string = "", this.info.coinButton.interactable = !1, this.celebrityNode.info.coinLabel.string = "", this.celebrityNode.info.coinButton.interactable = !1, e ? (0 == this.store.userRank && (this.avatar.rankingLabel.string = "", this.celebrityNode.avatar.rankingLabel.string = ""), this.outAniTimeout && (this.unschedule(this.outAniTimeout), this.outAniTimeout = null), this.outAniTimeout = () => {
                    if (this.store) {
                        if (this.room.store.self && this.store.userId == this.room.store.playerUserId && !this.room.store.isReplay && (cc_mtt.vv.ConsoleLog.log("playerIsOut", "setPlayer to bottom"), this.layout = ge.Bottom), this.outAnimation) {
                            this.outAnimation.active = !0, this.outAnimation.getComponent(v).play(), this.outAnimation.getComponent(v).on(v.EventType.FINISHED, this.OutAnimationOnFinished, this)
                        }
                        if (this.celebrityNode.outAnimation) {
                            this.celebrityNode.outAnimation.active = !0, this.celebrityNode.outAnimation.getComponent(v).play(), this.celebrityNode.outAnimation.getComponent(v).on(v.EventType.FINISHED, this.OutCelebrityAnimationOnFinished, this)
                        }
                    }
                }, this.scheduleOnce(this.outAniTimeout, 3)) : (this.room.store.self && this.store.userId == this.room.store.playerUserId && (this.layout = this.room._gameMode == x.GAME_LEVEL_LIST_ID.SNG ? ge.Self : ge.Bottom), this.OutAnimationOnFinished(), this.OutCelebrityAnimationOnFinished())) : (cc_mtt.vv.ConsoleLog.log("playerIsBack : userid ", this.store.userId, "seatNum", this.store.seatNum), this.outAniTimeout && this.unschedule(this.outAniTimeout), this.outAnimation && (this.outAniTimeout = null, this.outAnimation.active = !1), this.celebrityNode.outAnimation && (this.celebrityNode.outAnimation.active = !1), this.room.store.self && this.store.userId == this.room.store.playerUserId && !this.room.store.isReplay && (this.layout = ge.Self, cc_mtt.vv.ConsoleLog.log("playerIsOut", "setPlayer to Self")), this.avatar && (this.avatar.rankingLabel.node.active = !1, this.avatar.isDark = this.store && (this.store.isAutoPlay || 4 == this.store.state || 20 == this.store.state)), this.celebrityNode.avatar && (this.celebrityNode.avatar.rankingLabel.node.active = !1, this.celebrityNode.avatar.isDark = this.store && (this.store.isAutoPlay || 4 == this.store.state || 20 == this.store.state)), cc_mtt.vv.ConsoleLog.log("playerIsOut check is Dark", this.avatar.isDark, this.celebrityNode.avatar.isDark))
            }
        }
        stopOutAnimation() {
            if (this.outAniTimeout && (this.unschedule(this.outAniTimeout), this.outAniTimeout = null), this.outAnimation) {
                let t = this.outAnimation.getComponent(v);
                t && (t.stop(), t.off(v.EventType.FINISHED, this.OutAnimationOnFinished, this)), this.outAnimation.active = !1
            }
            if (this.celebrityNode.outAnimation) {
                let t = this.celebrityNode.outAnimation.getComponent(v);
                t && (t.stop(), t.off(v.EventType.FINISHED, this.OutCelebrityAnimationOnFinished, this)), this.celebrityNode.outAnimation.active = !1
            }
        }
        OutAnimationOnFinished() {
            this._isOut && (this.outAnimation.active = !1, this.avatar && (this.avatar.rankingLabel.node.active = !0, this.avatar.isDark = !0), this.updateAvatar())
        }
        OutCelebrityAnimationOnFinished() {
            this._isOut && (this.celebrityNode.outAnimation.active = !1, this.celebrityNode.avatar && (this.celebrityNode.avatar.rankingLabel.node.active = !0, this.celebrityNode.avatar.isDark = !0), this.updateAvatar())
        }
        updateAvatar() {
            var t;
            null != (t = this.room) && t.store && this.store && this.room.store.isSngGame() && !this.room.store.isWaitingPlayerSngGame() && this.isSngPlayerGameOver() && !this.room.store.isGameEnd && this.setNodeActive(!1)
        }
        isSngPlayerGameOver() {
            var t;
            return !(null == (t = this.room) || !t.store.isSngGame() || !this.store) && (this.store.userRank > 0 && this.store.isOut)
        }
        setNodeActive(t) {
            this.node.active = t
        }
        setAutoPlayLabel(t) {
            null !== this.avatar.autoPlayNode && (this.avatar.autoPlayNode.active = t), null !== this.celebrityNode.avatar.autoPlayNode && (this.celebrityNode.avatar.autoPlayNode.active = t)
        }
        setAutoPlayStatus(t, e = !1) {
            var o;
            this.disconnectNode.active = !t && e, this.celebrityNode.info.username = this.info.username = t && (null == (o = this.room) || null == (o = o.store) || null == (o = o.self) ? void 0 : o.userId) !== this.store.userId ? Z.config.getStringData("Mtt_Sitting_Out") : this.store.nickName
        }
        setRankingLabel() {
            if (this.store) {
                const {
                    userRank: t
                } = this.store;
                this.avatar && (this.avatar.rankingLabel.string = 0 == t ? "" : N.formatStr(G("HOLDEM.RANKING"), t)), this.celebrityNode.avatar && (this.celebrityNode.avatar.rankingLabel.string = 0 == t ? "" : N.formatStr(G("HOLDEM.RANKING"), t))
            }
        }
        setSnapshotShowCard() {
            if (this.store && this.store instanceof E) {
                const {
                    snapshotShowCards: t
                } = this.store;
                t.length > 0 ? this.cardsHandler._cards.forEach((e => {
                    e.showIcon.active = t.indexOf(e._cardId) >= 0, cc_mtt.vv.ConsoleLog.log("active show card", this.store.userId, e._cardId, e.showIcon.active)
                })) : (cc_mtt.vv.ConsoleLog.log("inactive show card", this.store.userId), this.cardsHandler._cards.forEach((t => {
                    t.showIcon.active = !1
                })))
            }
        }
        getCardPos() {
            let t = [-135, -140, -56, 135];
            return this._layout !== ge.Right && (t = [-135, 56, 140, 135]), t
        }
        isOmana() {
            return 4 == this.maxCards
        }
        omahaPos() {
            let t = [-178, -142, -106, -70];
            return this.room.isReplay ? t = [-66, -22, 22, 66] : this._layout !== ge.Right && (t = [78, 114, 150, 186]), t
        }
        cardChangesShowCard(t) {
            let e = 1;
            4 == this.maxCards && (e = 0);
            let o = this.getCardPos();
            4 == this.maxCards && (o = this.omahaPos()), t.forEach(((t, i) => {
                this.cardChangesShowCardDetail(t, i, e, o, this.cardsHandler, !1), this.cardChangesShowCardDetail(t, i, e, o, this.celebrityNode.cardsHandler, !0)
            }))
        }
        cardChangesShowCardDetail(t, e, o, i, a, r) {
            if (!Z.appConfig.getGameConfig().enableShowOpponentCards) return;
            const n = a._cards[e + o];
            n.node.active = !0, n._cardId = t;
            let l = this.room.holders.dealingShoe,
                d = this.room.store.isReplay ? new s(n._hideHolder.scale) : new s(1, 1, 1).multiply(new s(this._playerCardScale, this._playerCardScale, 1));
            n.showCard(.5, d, t, (() => {
                n.init(l, a.node);
                let t = n._showHolder.getPosition();
                if (n._showHolder.parent != n.node.parent) {
                    let e = U.instance.convertToWorldSpace(n._showHolder, P(0, 0)),
                        o = U.instance.convertToNodeSpace(n.node.parent, e);
                    t = new s(o.x, o.y)
                }
                n.node.setPosition(t), n.node.getComponent(y).opacity = 255
            }), (() => {
                Z.appConfig.isLandscapeLayout && n.moveToClear(2, l, (() => {
                    n._cardId = 0
                }), (() => {
                    n.setId(0), n.sprite.node.active = !1
                }))
            }))
        }
        cardChangesShowCardDetail_updateCard(t, e, o) {
            t.node.setScale(new s(.1, .1, 1))
        }
        cardChangesAddCard(t, e, o, i, s) {
            let a = 1,
                r = 1;
            4 == this.maxCards && (a = 0, r = 2), this.store.userId === this.room.store.playerUserId ? (this.cardChangesAddCardDetailSelf(this.cardsHandler, !0, a, r, t, e, !1, o, i, s), this.cardChangesAddCardDetailSelf(this.celebrityNode.cardsHandler, !1, a, r, t, e, !0, o, i, s)) : (this.cardChangesAddCardDetail(this.cardsHandler, !0, a, r, t, e, !1, o, i, s), this.cardChangesAddCardDetail(this.celebrityNode.cardsHandler, !1, a, r, t, e, !0, o, i, s))
        }
        cardChangesAddCardDetailSelf(t, e, o, i, a, r, n, l, d, h) {
            let c = 0,
                y = (2 == i ? 3 * d : d) + .5;
            const p = this,
                u = Z.appConfig.isLandscapeLayout ? .6 : 1;
            this.setEnableCardPanelMask(!0);
            const m = cc_mtt.vv.DataManager.getNow().getTime();
            for (; c < this.maxCards;) {
                let i = c + o,
                    g = l + d * c;
                for (; c > t._tempCardIds.length;) t._tempCardIds.push(0);
                t._tempCardIds[c] = a[c];
                const b = t._cards[i];
                b.showIcon.active = !1, b.sprite.node.active = !0, b.node.active = !0;
                let f = b._showHolder.getScale();
                b._showHolder.setScale(new s(f.x, f.y, 1)), b.init2(b._showHolder, t.node), b._cardId = a[c], b.clearAnimation(g), b.controlRoom = e, b.setDealRotate(b._showHolder.angle), b.setDealNode(this.room.holders.dealingShoe), b.setOpenCardDelay(m + 1e3 * y), b.setCardPositionAfterDeal(!0, !0);
                let v = new s(b._hideHolder.scale);
                v = v.multiplyScalar(u), b.setCardScaleOnDeal(v, v);
                const N = new s(b._showHolder.scale);
                b.setCardScaleOnOpen(N), b.setDealCardCallback((() => {
                    if (b.node.on("click", b.toggleHideShowSetting, b), this.setEnableCardPanelMask(!0), !Z.appConfig.isLandscapeLayout && !n) {
                        U.instance.changeParentKeepPos(b.node, t.node);
                        let e = 20 + i;
                        for (let o = i; o < t._cards.length - 1; o++) {
                            const i = t._cards[o + 1];
                            if (C(i) && i.node.parent === t.node) {
                                e = i.node.getSiblingIndex();
                                break
                            }
                        }
                        for (let o = i; o > 0; o--) {
                            const i = t._cards[o - 1];
                            if (C(i) && i.node.parent === t.node) {
                                e = i.node.getSiblingIndex() + 1;
                                break
                            }
                        }
                        b.node.setSiblingIndex(e)
                    }
                    r && b.moveToDark(h)
                })), Z.appConfig.isLandscapeLayout || n || U.instance.changeParentKeepPos(b.node, p.dealCardSelfNode), b.deal(g), r || this.store.userId === this.room.store.playerUserId && e && this.room.PlayerActionPanelControl(!0), c++
            }
        }
        cardChangesAddCardDetail(t, e, o, i, a, r, n, l, d, h) {
            let c = 0;
            this.setEnableCardPanelMask(!1);
            const y = this,
                p = Z.appConfig.isLandscapeLayout ? .6 : 1;
            let u = this.seatIndex > 0 && this.seatIndex < this.room.seats / 2,
                m = 0;
            const g = () => {
                ++m >= y.maxCards && this.setEnableCardPanelMask(!0)
            };
            for (; c < this.maxCards;) {
                let i = u ? c + o : this.maxCards - 1 - c + o,
                    h = l + d * c;
                for (; c > t._tempCardIds.length;) t._tempCardIds.push(0);
                const m = t._cards[i];
                m.showIcon.active = !1, m.sprite.node.active = !0, m.node.active = !0, m.init2(m._hideHolder, t.node), m.clearAnimation(h), m.controlRoom = e, m.setDealRotate(m._hideHolder.angle), m.setDealNode(this.room.holders.dealingShoe), m.setOpenCardDelay(0), m.setCardPositionAfterDeal(!1);
                let C = new s(m._hideHolder.scale),
                    b = new s(C).multiplyScalar(p);
                if (m.setCardScaleOnDeal(b, C), m.setCardScaleOnOpen(C), m.setDealCardCallback((() => {
                        Z.appConfig.isLandscapeLayout && g(), c < a.length && (m._cardId = a[c], m.rotateCard(a[c], C, (() => {
                            let t = this.getCardPos();
                            cc_mtt.vv.DataManager.webPlatform == R.commonProto.PLATFORM.PKW && 4 == this.maxCards && (t = this.omahaPos())
                        }), !1)), r && m.moveToDark(!1)
                    })), !Z.appConfig.isLandscapeLayout && !n) {
                    U.instance.changeParentKeepPos(m.node, y.node);
                    const t = 20 + i;
                    m.node.setSiblingIndex(t)
                }
                m.deal(h), c++
            }
        }
        cardChangesRemoveAllCard() {
            this.folded = !1;
            let t = 1;
            4 == this.maxCards && (t = 0), this.cardChangesRemoveAllCardDetail(this.cardsHandler, t), this.cardChangesRemoveAllCardDetail(this.celebrityNode.cardsHandler, t)
        }
        cardChangesRemoveAllCardDetail(t, e) {
            let o = 0;
            for (t._tempCardIds = []; o < this.maxCards;) {
                let i = o + e;
                const s = t._cards[i];
                s.discarded || (s.node.active = !0), s.setId(0), o++
            }
        }
        cardChangesRotateAllCard(t, e) {
            let o = 1;
            4 == this.maxCards && (o = 0), Z.appConfig.isLandscapeLayout || (this.setEnableCardPanelMask(!1), this.cardsHandler._cards.forEach(((t, e) => {
                U.instance.changeParentKeepPos(t.node, this.cardsHandler.node)
            }))), this.cardChangesRotateAllCardDetail(this.cardsHandler, o, t, e, !1), this.cardChangesRotateAllCardDetail(this.celebrityNode.cardsHandler, o, t, e, !0)
        }
        cardChangesRotateAllCardDetail(t, e, o, i, s) {
            let a = 0,
                r = this.getCardPos();
            for (4 == this.maxCards && (r = this.omahaPos()); a < this.maxCards;) {
                let s = a + e;
                const r = t._cards[s];
                0 == r._cardId && (r.node.active = !0, a < o.length && (r._cardId = o[a], r.rotateOpponentCard(o[a], (a + 1) / this.maxCards, (() => {}), !1))), i && r.moveToDark(!1), a++
            }
        }
        cardChangesRotateAllCardDetail_updateCard(t, e, o) {
            t.node.setScale(new s(e, e, 1)), t.node.setPosition(o)
        }
        cardChangesHandleRankCard(t) {
            t && t.length && (cc_mtt.vv.ConsoleLog.log(532, t), t.forEach(((t, e) => {
                let o = 4 == this.maxCards ? e : e + 1;
                t ? 4 == this.maxCards && this.room.store.playerUserId != this.info.userId && (this.cardsHandler._cards[o].moveToPopUp(!1), this.celebrityNode.cardsHandler._cards[o].moveToPopUp(!1)) : (this.room.store.playerUserId == this.info.userId ? this.cardsHandler._cards[o].moveToDark(!1) : this.cardsHandler._cards[o].moveToDarkOpponent(!1), this.celebrityNode.cardsHandler._cards[o].moveToDark(!1))
            })))
        }
        cardChangesHandleNewOldHasCard(t, e, o, i) {
            this.cardsHandler.cardsLength() > 0 && !this.cardsHandler.isAllHide() && t.length > 0 && !this.cardsHandler.equals(t) || this.cardsHandler.hasClearAnimationNotDone() ? (this.cardsHandler.clearCardImmediate(), this.celebrityNode.cardsHandler.clearCardImmediate(), this.cardChangesAddCard(t, e, o, i)) : this.room.store.playerUserId == this.info.userId ? (this.cardChangesHandleNewOldHasCardDetailSelf(this.cardsHandler, t, 0, e), this.cardChangesHandleNewOldHasCardDetailSelf(this.celebrityNode.cardsHandler, t, 0, e)) : this.cardChangesRotateAllCard(t, e)
        }
        cardChangesHandleNewOldHasCardDetailSelf(t, e, o, i) {
            let s = 1;
            4 == this.maxCards && (s = 0);
            let a = 0;
            for (; a < this.maxCards;) {
                let o = a + s;
                if (a < e.length) {
                    const e = t._cards[o];
                    i ? e.moveToDark(!1) : e.node.active = !0
                }
                a++
            }
        }
        cardChangesNoAnimation(t, e, o, i) {
            if (this.cardsHandler.clearCardImmediate(), this.celebrityNode.cardsHandler.clearCardImmediate(), t) {
                let s = 1;
                if (4 == this.maxCards && (s = 0), this.room.store.playerUserId == this.info.userId) this.cardChangesNoAnimationDetailSelf(this.cardsHandler, s, t, e, o, i), this.cardChangesNoAnimationDetailSelf(this.celebrityNode.cardsHandler, s, t, e, o, i);
                else {
                    let a = this.getCardPos();
                    cc_mtt.vv.DataManager.webPlatform == R.commonProto.PLATFORM.PKW && 4 == this.maxCards && (a = this.omahaPos()), this.cardChangesNoAnimationDetail(this.cardsHandler, s, a, t, e, o, i, !1), this.cardChangesNoAnimationDetail(this.celebrityNode.cardsHandler, s, a, t, e, o, i, !0)
                }
                o && o.length && o.forEach(((t, e) => {
                    t || (this.cardsHandler._cards[e + s] && this.cardsHandler._cards[e + s].node && (cc_mtt.vv.ConsoleLog.log(this.store.userId + " cardChanges rankCards dark", e + s, this.cardsHandler._cards), this.cardsHandler._cards[e + s].setColorWithAdjustment(x.HOLDEM_DARK_TINT)), this.celebrityNode.cardsHandler._cards[e + s] && this.celebrityNode.cardsHandler._cards[e + s].node && (cc_mtt.vv.ConsoleLog.log(this.store.userId + " cardChanges rankCards dark celebrityNode", e + s, this.celebrityNode.cardsHandler._cards), this.celebrityNode.cardsHandler._cards[e + s].setColorWithAdjustment(x.HOLDEM_DARK_TINT)))
                }))
            }
        }
        cardChangesNoAnimationDetailSelf(t, e, o, i, a, r) {
            let n = 0;
            for (; n < this.maxCards;) {
                let o = n + e,
                    a = t._cards[o];
                a.init(this.room.holders.dealingShoe, t.node), a.node.active = !0, a.sprite.node.active = !0, t._cards[o]._cardId = i[n], t._tempCardIds.push(i[n]);
                let l = a._showHolder.getPosition();
                if (a._showHolder.parent != a.node.parent) {
                    let t = U.instance.convertToWorldSpace(a._showHolder, new h(0, 0));
                    l = new s(U.instance.convertToNodeSpace(a.node.parent, t).x, U.instance.convertToNodeSpace(a.node.parent, t).y)
                }
                a.node.setPosition(l), a.node.angle = a._showHolder.angle, a.node.setScale(new s(a._showHolder.scale)), a.node.getComponent(y).opacity = 255, a.setId(0), this.store.userId === this.room.store.playerUserId && (cc_mtt.vv.ConsoleLog.log(2224, this.store, i.slice()), this.room.PlayerActionPanelControl(!0)), n < i.length && (a.setId(i[n]), a.node.on(_.EventType.CLICK, a.toggleHideShowSetting, a)), r && (a.setToDark(), a.setAnimationSelfFoldCard(!0)), n++
            }
        }
        cardChangesNoAnimationDetail(t, e, o, i, a, r, n, l) {
            let d = 0;
            for (; d < this.maxCards;) {
                let i = d + e,
                    r = t._cards[i];
                r.init(this.room.holders.dealingShoe, t.node), d < a.length ? t._tempCardIds.push(a[d]) : t._tempCardIds.push(0), r.node.active = !0, r.sprite.node.active = !0;
                let p = r._hideHolder.getPosition();
                if (r._hideHolder.parent != r.node.parent) {
                    let t = U.instance.convertToWorldSpace(r._hideHolder, new h(0, 0));
                    p = new s(U.instance.convertToNodeSpace(r.node.parent, t).x, U.instance.convertToNodeSpace(r.node.parent, t).y)
                }
                r.node.setPosition(p), r.node.angle = r._hideHolder.angle, r.node.setScale(new s(r._hideHolder.scale)), r.node.getComponent(y).opacity = 255, r.setId(0), d < a.length && (l && this.cardChangesRotateAllCardDetail_updateCard(r, this._playerCardScale, c(o[i], -40)), r.showCardNoAnimation(a[d])), Z.appConfig.isLandscapeLayout || l || U.instance.changeParentKeepPos(r.node, this.node), n && r.setToDark(), d++
            }
        }
        cardChanges() {
            if (this.store) {
                const {
                    hasCards: e,
                    cards: o,
                    rankCards: i,
                    firstCardDelay: s,
                    gapDelay: a
                } = this.store, r = this.store.actualState == R.holdem.Action.FOLD;
                if (this.folded = r, !Z.appConfig.getGeneralConfig().multiWindowEnabled && !Z.appConfig.isLandscapeLayout && K.instance && this.holdemRoom.store.playerUserId == this.info.userId && !this.store.room.isSittingOut && !this.store.room.isReplay) {
                    var t;
                    cc_mtt.vv.ConsoleLog.log("MultipleGame card", this.holdemRoom.multipleGameIndex, e, o);
                    let i = null == (t = Q.instance) ? void 0 : t._multipleGameTabButtons[this.holdemRoom.multipleGameIndex];
                    !r && !this.store.room.isHeroOut && e && o && o.length > 0 ? null == i || i.setCards(o) : this.room.store.isReplay || (null == i || i.setCards([]), (null == i ? void 0 : i.getStatus()) != J.IN_BREAK && (null == i || i.setText(this.room.store.getMttRoomName())))
                }
                let n = [];
                for (let t = 0; t < this.cardsHandler._cards.length; t++) this.cardsHandler._cards[t].node.active && n.push(this.cardsHandler._cards[t]._cardId);
                let l = [];
                for (let t = 0; t < this.celebrityNode.cardsHandler._cards.length; t++) this.celebrityNode.cardsHandler._cards[t].node.active && l.push(this.celebrityNode.cardsHandler._cards[t]._cardId);
                if (cc_mtt.vv.ConsoleLog.log(this.store.userId + " cardChanges", JSON.stringify(this.cardsHandler._tempCardIds), JSON.stringify(o), e, this.hasCards), this.setEnableCardPanelMaskTop(!1), this.store.needAnimation)
                    if (this.hasCards = this.cardsHandler.cardsLength() > 0, e) this.hasCards ? (this.cardChangesHandleNewOldHasCard(o, r, s, a), this.cardChangesHandleRankCard(i)) : (this.cardChangesAddCard(o, r, s, a), this.cardChangesHandleRankCard(i));
                    else if (this.hasCards) {
                    if (this.cardsHandler._cards.findIndex((t => t.showIcon.active)) >= 0) {
                        let t = !1;
                        this.cardsHandler._cards.forEach((e => {
                            e.showIcon.active && e.showCardFromHand((() => {}), (() => {
                                t || (this.cardChangesRemoveAllCard(), t = !0)
                            }))
                        }))
                    } else this.cardChangesRemoveAllCard()
                } else this.cardChangesShowCard(o);
                else this.cardChangesNoAnimation(e, o, i, r);
                this.room && this.room.CheckPlayerControlPanel()
            }
        }
        isRoomHoldem() {
            return this.room && (this.room._gameMode == x.GAME_LEVEL_LIST_ID.MTT || this.room._gameMode == x.GAME_LEVEL_LIST_ID.SNG)
        }
        setEmpty(t = !1) {
            cc_mtt.vv.ConsoleLog.log("Player setEmpty"), this._isOut = !1, this.store && (this.store.isSittingDown = !1), t ? (cc_mtt.vv.ConsoleLog.log(9550), this.seat.hasPlayer && (this.node.getComponent(y).opacity = 0, this.seat.hasPlayer = !1, this.seat.enableSeat = !1, this.winBorder.active = !1, this.celebrityNode.winBorder.active = !1, this.resetPlayer()), cc_mtt.vv.ConsoleLog.log("player status ", this)) : (cc_mtt.vv.ConsoleLog.log("Player setEmpty sng ", t), g.stopAllByTarget(this.avatar.node), g.stopAllByTarget(this.avatar.node.getComponent(y)), f(this.avatar.node).sequence(f().to(.2, {
                scale: new s(0, 0, 0)
            }, {
                easing: "elasticInOut"
            }), f().call((() => {
                this.avatar.node.active = !1, cc_mtt.vv.ConsoleLog.log("Player setEmpty avatar active set false")
            }))).start(), g.stopAllByTarget(this.celebrityNode.avatar.node), g.stopAllByTarget(this.celebrityNode.avatar.node.getComponent(y)), f(this.celebrityNode.avatar.node).sequence(f().to(.2, {
                scale: new s(0, 0, 0)
            }, {
                easing: "elasticInOut"
            }), f().call((() => {
                this.celebrityNode.avatar.node.active = !1
            }))).start(), g.stopAllByTarget(this.info.node), g.stopAllByTarget(this.info.node.getComponent(y)), f(this.info.node).sequence(f(this.info.node.getComponent(y)).to(.2, {
                opacity: 0
            }), f().call((() => {
                this.info.node.active = !1, this.info.userId = 0, this.info.coinButton.interactable = !1
            }))).start(), g.stopAllByTarget(this.celebrityNode.info.node), g.stopAllByTarget(this.celebrityNode.info.node.getComponent(y)), f(this.celebrityNode.info.node).sequence(f(this.celebrityNode.info.node.getComponent(y)).to(.2, {
                opacity: 0
            }), f().call((() => {
                this.celebrityNode.info.node.active = !1, this.celebrityNode.info.userId = 0, this.celebrityNode.info.coinButton.interactable = !1
            }))).start(), this.room && !this.isRoomHoldem() || (this.node.getComponent(y).opacity = 0), this.seat.hasPlayer = !1, this.seat.enableSeat = !1, this.winBorder.active = !1, this.celebrityNode.winBorder.active = !1, this.resetPlayer())
        }
        setPlayer(t, e, o, i) {
            this.seat.hasPlayer = !0, this.avatar.node.active = !0, this.avatar.load(i), this.info.node.active = !0, this.info.userId = t, this.info.username = e, this.info.coin = o, this.info.coinButton.interactable = !0, cc_mtt.vv.ConsoleLog.log("Holdem_Player info.node show", this.info.userId), this.celebrityNode.avatar.node.active = !0, this.celebrityNode.avatar.load(i), this.celebrityNode.info.node.active = !0, this.celebrityNode.info.userId = t, this.celebrityNode.info.username = e, this.celebrityNode.info.coin = o, this.celebrityNode.info.coinButton.interactable = !0, this.resetPlayer()
        }
        stopTimer() {
            this.timer.stopTimer(), this.headOverlay.node.active = !1
        }
        startTimer(t, e, o = 0, i = !1) {
            this.timer.startTimer(t, e, o, i), this.headOverlay.node.active = !0
        }
        stopCelebrityTimer() {
            this.celebrityNode.timer.stopTimer()
        }
        startCelebrityTimer(t, e, o = 0, i = !1) {
            this.celebrityNode.timer.startTimer(t, e, o, i)
        }
        resetSngPlayer() {
            this._isGameOver = !1, this.store && (this.store.isGameOver = !1), this._isRotating = !1, this._seatOffset = 0, this._layout = ge.Self
        }
        resetPlayer() {
            this.avatar.isDark = !1, this._isOut && (this.avatar.isDark = !0), this.tags.hideAll(), this.stopTimer(), this.winBorder.active = !1, this.stake.value = 0, this.avatar.node.setScale(c(1, 1, 1)), this.info.node.setScale(c(1, 1, 1)), this.avatar.autoPlayNode && (this.avatar.autoPlayNode.active = !1), this.celebrityNode.avatar.isDark = !1, this._isOut && (this.celebrityNode.avatar.isDark = !0), this.celebrityNode.tags.hideAll(), this.stopCelebrityTimer(), this.celebrityNode.winBorder.active = !1, this.celebrityNode.stake.value = 0, this.celebrityNode.avatar.node.setScale(c(1, 1, 1)), this.celebrityNode.info.node.setScale(c(1, 1, 1)), this.celebrityNode.avatar.autoPlayNode && (this.celebrityNode.avatar.autoPlayNode.active = !1), this.store && (this.celebrityNode.info.username = this.info.username = this.store.nickName), this.resetBountyBoarPositionIfNeed()
        }
        nextTurn() {
            this.avatar.isDark || this.tags.getDefaultLabelString() == at.t("HOLDEM.ALL_IN") || this.tags.hideAll(), this.celebrityNode.avatar.isDark || this.celebrityNode.tags.getDefaultLabelString() == at.t("HOLDEM.ALL_IN") || this.celebrityNode.tags.hideAll()
        }
        hideCards() {
            this.setEnableCardPanelMask(!0), Z.appConfig.isLandscapeLayout || this.cardsHandler._cards.forEach(((t, e) => {
                U.instance.changeParentKeepPos(t.node, this.cardsHandler.node)
            })), this.cardsHandler.hideCards(this.setEnableCardPanelMask.bind(this, !1))
        }
        winsChanges() {
            if (this.store) {
                const {
                    wins: t
                } = this.store;
                this.refreshHunterBorderColor(t)
            }
        }
        updateHunterValue() {
            if (this.store) {
                const {
                    bounty: t
                } = this.store;
                cc_mtt.vv.ConsoleLog.log("updateHunterValue", t, this.isHunterGame);
                let e = tt.ScientificNotationWithFormat(t, 0);
                const o = Math.trunc(t).toString().length;
                o < 3 ? e = j.DisplayGold(t, 2).toString() : o < 5 ? e = j.RoundToDecimal(t, 0).toString() : o < 6 && (e = tt.ScientificNotationWithFormat(t, 1));
                const i = this.getDisplayCurrency(),
                    s = i == it.USD ? st[it.USD].symbol : i == it.CNY ? st[it.CNY].shortSymbol : "";
                this.bountyBoard.children[0].getComponent(b).string = s + "" + e, this.celebrityNode.bountyBoard.children[0].getComponent(b).string = s + "" + e
            }
        }
        refreshHunterBorderColor(t) {
            this.store && cc_mtt.vv.ConsoleLog.log("refreshHunterBorderColor", this.store.userId, t), t > 0 && this.avatar && this.avatar.koStatus && (this.avatar.koStatus.node.getComponent(y).opacity = x.getHunterIconOpacity(t)), t > 0 && this.celebrityNode.avatar && this.celebrityNode.avatar.koStatus && (this.celebrityNode.avatar.koStatus.node.getComponent(y).opacity = x.getHunterIconOpacity(t))
        }
        showGuessHandResult(t) {}
        onPlayerIconClicked() {}
        playEmoticon(t) {
            if (C(this.emoticon) && C(this.celebrityNode.emoticon)) this.emoticon.getComponent(F).playEmoticon(t), this.celebrityNode.emoticon.getComponent(F).playEmoticon(t);
            else {
                let e = V.RES_PATH.PREFAB.HOLDEM.EMOTICONS;
                V.instance.loadRes(e, n, null, ((e, o) => {
                    this.playEmoticonLoadRes(this.emoticon, t, o, !0, this.emoticonParent), this.playEmoticonLoadRes(this.celebrityNode.emoticon, t, o, !1, this.celebrityNode.emoticonParent)
                }))
            }
        }
        playEmoticonLoadRes(t, e, o, i, s) {
            let a = (t = p(o)).getComponent(F);
            if (a) {
                a.setHoldemRoom(this.holdemRoom), cc_mtt.vv.DataManager.webPlatform && a.chargeNode && (a.chargeNode.active = !1, a.animate.setScale(1.2, 1.2, 1), a.background.active = !1), t.parent = s, t.setPosition(s.children[0].position), a.setAnimationCallBack(), t.getComponent(_).enabled = !1, a.playEmoticon(e), cc_mtt.vv.DataManager.webPlatform == R.commonProto.PLATFORM.PKW && i && a.playEmoticonAudio(e)
            }
        }
        updateTheme(t) {
            this.isFlatTheme = t, this.tags.isFlat = t, t ? (this._isPromoter || (this.avatar.userBoarderFlat.active = !0, this.avatar.userBoarder.node.active = !1), this.info.bg.getComponent(l).spriteFrame = this.info.bgFrame[1]) : (this.avatar.userBoarderFlat.active = !1, this.avatar.userBoarder.node.active = !0, this.info.bg.getComponent(l).spriteFrame = this.info.bgFrame[0]), this.celebrityNode.tags.isFlat = t
        }
        updateXDeviceLayout() {
            this.selfCardHandlerY = q.instance.xDeviceLayoutYPos.selfCardHandlerY
        }
        setPkwOmahaLayout() {
            if (cc_mtt.vv.DataManager.webPlatform == R.commonProto.PLATFORM.PKW && 4 == this.maxCards && this._layout == ge.Self) {
                let t = q.instance.xDeviceLayoutYPos.omahaSelfCardPosition,
                    e = q.instance.xDeviceLayoutYPos.omahaSelfCardScale,
                    o = new s(e, e, 1);
                this.cardsHandler.showCardHolders[0].setPosition(t[0], this.cardsHandler.showCardHolders[0].position.y), this.cardsHandler.showCardHolders[0].setScale(o), this.cardsHandler.showCardHolders[1].setPosition(t[1], this.cardsHandler.showCardHolders[0].position.y), this.cardsHandler.showCardHolders[1].setScale(o), this.cardsHandler.showCardHolders[2].setPosition(t[2], this.cardsHandler.showCardHolders[0].position.y), this.cardsHandler.showCardHolders[2].setScale(o), this.cardsHandler.showCardHolders[3].setPosition(t[3], this.cardsHandler.showCardHolders[0].position.y), this.cardsHandler.showCardHolders[3].setScale(o), this.celebrityNode.cardsHandler.showCardHolders[0].setPosition(t[0], this.celebrityNode.cardsHandler.showCardHolders[0].position.y), this.celebrityNode.cardsHandler.showCardHolders[0].setScale(o), this.celebrityNode.cardsHandler.showCardHolders[1].setPosition(t[1], this.celebrityNode.cardsHandler.showCardHolders[0].position.y), this.celebrityNode.cardsHandler.showCardHolders[1].setScale(o), this.celebrityNode.cardsHandler.showCardHolders[2].setPosition(t[2], this.celebrityNode.cardsHandler.showCardHolders[0].position.y), this.celebrityNode.cardsHandler.showCardHolders[2].setScale(o), this.celebrityNode.cardsHandler.showCardHolders[3].setPosition(t[3], this.celebrityNode.cardsHandler.showCardHolders[0].position.y), this.celebrityNode.cardsHandler.showCardHolders[3].setScale(o)
            }
        }
        activeCelebrityLayout(t = !1) {
            cc_mtt.vv.ConsoleLog.log("holdemLive activeCelebrityLayout", t, this._layout, this.node.position.x, this.node.position.y, this.node.scale, this.node.active, this.node.getComponent(y).opacity), this._isUseCelebrityLayout = t, this.celebrityNode.node.getComponent(y).opacity = t ? 255 : 0, this.normalPlayerNode.getComponent(y).opacity = t ? 0 : 255, this.celebrityNode.node.setScale(t ? new s(1, 1, 1) : new s(0, 0, 1)), this.normalPlayerNode.setScale(t ? new s(0, 0, 1) : new s(1, 1, 1)), this.celebrityNode.node.active = !0, this.refreshOuterNodePosition(), t && this.setCardPosition(), this.room && this.room.updateLivePlayerLayout(t, this.store ? this.store.userId : this.info.userId), cc_mtt.vv.ConsoleLog.log("holdemLive activeCelebrityLayout", this.celebrityNode.node.active, this.celebrityNode.node.getComponent(y).opacity, this.celebrityNode.node.scale), cc_mtt.vv.ConsoleLog.log("holdemLive activeCelebrityLayout", this.normalPlayerNode.active, this.normalPlayerNode.getComponent(y).opacity, this.normalPlayerNode.scale)
        }
        updateOpponentZoder(t = !1) {
            null != this.opponentCardsHandlerContainer && null != this.selfCardsHandlerContainer && 0 != this.cardsHandler.showCardHolders.length && this.isHunterGame && (this._opponentCardDSI < 0 && (this._opponentCardDSI = this.opponentCardsHandlerContainer.getSiblingIndex()), this._selfCardDSI < 0 && (this._selfCardDSI = this.selfCardsHandlerContainer.getSiblingIndex()), this._bountyDSI < 0 && (this._bountyDSI = this.bountyBoard.getSiblingIndex()), t ? (this.selfCardsHandlerContainer.setSiblingIndex(this._selfCardDSI), this.opponentCardsHandlerContainer.setSiblingIndex(this._opponentCardDSI), this.bountyBoard.setSiblingIndex(this._bountyDSI)) : (this.selfCardsHandlerContainer.setSiblingIndex(99), this.opponentCardsHandlerContainer.setSiblingIndex(99), this.bountyBoard.setSiblingIndex(100)))
        }
        resetBountyBoarPositionIfNeed() {
            this._bountyBoardPosChanged && (this.bountyBoard.setPosition(this._bountyBoardOriginalPosition), this._bountyBoardPosChanged = !1)
        }
        setCardPosition() {
            if (this._layout == ge.Self && (this._bountyBoardPosChanged || (this._bountyBoardOriginalPosition = this.bountyBoard.getPosition(), this._bountyBoardPosChanged = !0), this.bountyBoard.setPosition(0, this.bountyBoard.position.y, this.bountyBoard.position.z)), 2 == this.maxCards) {
                let t = this.cardsHandler.hideCardHolders[1].getPosition(),
                    e = this.cardsHandler.hideCardHolders[2].getPosition(),
                    o = this.celebrityNode.cardsHandler.hideCardHolders[1].getPosition(),
                    i = this.celebrityNode.cardsHandler.hideCardHolders[2].getPosition();
                this._layout == ge.Right ? (this.cardsHandler.hideCardHolders[1].angle = 8, this.cardsHandler.hideCardHolders[1].setPosition(55, t.y, t.z), this.cardsHandler.hideCardHolders[2].setPosition(75, e.y, e.z), this.cardsHandler.hideCardHolders[2].angle = -15, this.celebrityNode.cardsHandler.hideCardHolders[1].angle = 8, this.celebrityNode.cardsHandler.hideCardHolders[1].setPosition(-75, o.y, o.z), this.celebrityNode.cardsHandler.hideCardHolders[2].setPosition(-55, i.y, i.z), this.celebrityNode.cardsHandler.hideCardHolders[2].angle = -15, this.bountyBoard.setPosition(-Math.abs(this.bountyBoard.position.x), this.bountyBoard.position.y, this.bountyBoard.position.z)) : this._layout == ge.Left ? (this.cardsHandler.hideCardHolders[1].angle = 8, this.cardsHandler.hideCardHolders[1].setPosition(-75, t.y, t.z), this.cardsHandler.hideCardHolders[2].setPosition(-55, e.y, e.z), this.cardsHandler.hideCardHolders[2].angle = -15, this.celebrityNode.cardsHandler.hideCardHolders[1].angle = 8, this.celebrityNode.cardsHandler.hideCardHolders[1].setPosition(55, o.y, o.z), this.celebrityNode.cardsHandler.hideCardHolders[2].setPosition(75, i.y, i.z), this.celebrityNode.cardsHandler.hideCardHolders[2].angle = -15, this.bountyBoard.setPosition(Math.abs(this.bountyBoard.position.x), this.bountyBoard.position.y, this.bountyBoard.position.z)) : this._layout == ge.Bottom || this._layout == ge.Top ? (this.cardsHandler.hideCardHolders[1].angle = 8, this.cardsHandler.hideCardHolders[1].setPosition(55, t.y, t.z), this.cardsHandler.hideCardHolders[2].setPosition(75, e.y, e.z), this.cardsHandler.hideCardHolders[2].angle = -15, this.celebrityNode.cardsHandler.hideCardHolders[1].angle = 8, this.celebrityNode.cardsHandler.hideCardHolders[1].setPosition(55, o.y, o.z), this.celebrityNode.cardsHandler.hideCardHolders[2].setPosition(75, i.y, i.z), this.celebrityNode.cardsHandler.hideCardHolders[2].angle = -15, this.bountyBoard.setPosition(-Math.abs(this.bountyBoard.position.x), this.bountyBoard.position.y, this.bountyBoard.position.z)) : (this._layout, ge.Self)
            }
        }
        refreshOuterNodePosition() {
            this._isUseCelebrityLayout ? (this.outerNode.getComponent(S).setContentSize(230, 315), this.celebrityNode.outerNodeLocation && (this.outerNode.setParent(this.celebrityNode.outerNodeLocation), this.outerNode.setPosition(0, 0), this.outerNode.setScale(1, 1, 1))) : (this.outerNode.getComponent(S).setContentSize(180, 180), this.outerNode.setParent(this.node))
        }
        getDefaultSpriteNum(t) {
            let e = -1,
                o = "";
            const {
                Action: i
            } = R.holdem;
            switch (t) {
                case i.CALL:
                    e = 1, o = G("HOLDEM.CALL");
                    break;
                case i.BET:
                    e = 3, o = G("HOLDEM.BET");
                    break;
                case i.RAISE:
                    e = 5, o = G("HOLDEM.RAISE");
                    break;
                case i.CHECK:
                    e = 2, o = G("HOLDEM.CHECK");
                    break;
                case i.ALL_IN:
                    e = 6, o = G("HOLDEM.ALL_IN");
                    break;
                case i.FOLD:
                    e = 4, o = G("HOLDEM.FOLD")
            }
            return {
                spriteNum: e,
                stateStr: o
            }
        }
        setSelfPosition() {
            this._positionChanged && this.isInSpecialSeat() || (this._originalPosition = this.node.getPosition(), this.node.setPosition(new s(ue.x, ue.y)), this._positionChanged = !0, this.updateSeatSize())
        }
        reverseSelfPosition() {
            this._positionChanged && (this.node.setPosition(this._originalPosition), this.updateSeatSize()), this._positionChanged = !1
        }
        updateSeatSize() {
            if (X.Instance.isLandscapeLayout) {
                const t = Z.appConfig.getGameConfig().seatExtraScale;
                this.node.setScale(t, t)
            } else {
                let t = this.room.seats > 4 && !this.isSelf();
                this.node.setScale(t ? .8 : 1, t ? .8 : 1, 1)
            }
        }
        get isRotating() {
            return this._isRotating
        }
        set isRotating(t) {
            this._isRotating = t
        }
        doneRotating() {
            !X.Instance.isLandscapeLayout && this.isSelf() ? (this.setSelfPosition(), this.stake.node.setPosition(me), this.stake.setNodeStartPosition()) : this.updateStakePosition()
        }
        isInSpecialSeat() {
            return this.node.position.x == ue.x && this.node.position.y == ue.y
        }
        isSelf() {
            return this._layout == ge.Self
        }
        updateStakePosition() {
            let t = this.room;
            if (t) {
                if (t.isReplay && !X.Instance.isLandscapeLayout) {
                    let t = new h(0, 0);
                    switch (this.node.position.y > 1600 ? ge.Top : this._layout) {
                        case ge.Left:
                            t = P(180, this.room.seats >= 8 ? -55 : -15);
                            break;
                        case ge.Right:
                            t = P(-180, this.room.seats >= 8 ? -55 : -15);
                            break;
                        case ge.Top:
                            t = P(0, -250);
                            break;
                        case ge.Bottom:
                        case ge.Self:
                            t = P(0, 170)
                    }
                    this.stake.node.setPosition(new s(t.x, t.y))
                } else {
                    let e = Z.appConfig.isLandscapeLayout ? this.seatIndex % this.room.seats : (this.seatIndex + this._seatOffset) % this.room.seats,
                        o = t.tablePositionHandler.getChipsPosition(t.seats, e),
                        i = this.stake.node.parent.getComponent(S).convertToNodeSpaceAR(o);
                    this.stake.node.setPosition(i.x, i.y)
                }
                this.stake.setNodeStartPosition()
            }
        }
        getDealerContainer() {
            return this.dealerContainer
        }
        refreshCelebrityLayoutByMaxSeat(t) {
            let e = new s(q.instance.getMttCelebrityAvatarScale(t), q.instance.getMttCelebrityAvatarScale(t), 1);
            if (q.instance.isBL)
                if (t <= 6 || this._layout == ge.Self) {
                    this.celebrityNode.avatar.node.setScale(c(1, 1, 1)), this.celebrityNode.timer.node.setScale(c(1, 1, 1)), this.celebrityNode.info.node.setScale(c(1, 1, 1)), this.celebrityNode.tags.node.setPosition(0, 0, 1), this.celebrityNode.tags.leftTag.node.setPosition(-119, 137), this.celebrityNode.tags.rightTag.node.setPosition(119, 137), this.celebrityNode.cardsHandler.node.parent.setScale(c(1, 1, 1)), this.celebrityNode.cardsHandler.node.parent.setPosition(0, -78);
                    let t = this.celebrityNode.stake.getComponent("Holdem_PlayerLayoutHandler");
                    t && (t.layout = this._layout)
                } else switch (this.celebrityNode.avatar.node.setScale(e), this.celebrityNode.timer.node.setScale(e), this.celebrityNode.info.node.setScale(e), this.celebrityNode.tags.node.setPosition(0, -37), this.celebrityNode.tags.leftTag.node.setPosition(-92.5, 137), this.celebrityNode.tags.rightTag.node.setPosition(92.5, 137), this.celebrityNode.cardsHandler.node.parent.setScale(e), this.celebrityNode.cardsHandler.node.parent.setPosition(0, -60), this._layout) {
                        case ge.Left:
                        case ge.Right:
                            this.celebrityNode.stake.node.setPosition(200, 50);
                            break;
                        case ge.Top:
                        case ge.Bottom:
                            this.celebrityNode.stake.node.setPosition(200, -57)
                    } else if (this._layout == ge.Self) this.celebrityNode.info.node.children[2].active = !1, this.celebrityNode.avatar.node.children[0].active = !1, this.celebrityNode.avatar.node.children[1].active = !0, this.celebrityNode.avatar.sprite.node.parent.setScale(new s(.79, .79, 1)), this.celebrityNode.avatar.sprite.node.parent.setPosition(this.celebrityNode.avatar.sprite.node.parent.position.x, 32), this.celebrityNode.avatar.autoPlayNode.setScale(new s(.79, .79, 1)), this.celebrityNode.avatar.autoPlayNode.setPosition(this.celebrityNode.avatar.autoPlayNode.position.x, 32), this.celebrityNode.cardsHandler.node.setPosition(-25, 60, this.celebrityNode.cardsHandler.node.position.z), this.celebrityNode.info.node.setScale(c(1, 1, 1)), this.celebrityNode.balanceNode.setScale(c(1, 1, 1)), this.celebrityNode.info.node.setPosition(this.celebrityNode.info.node.position.x, 150, this.celebrityNode.info.node.position.z);
                    else {
                        this.celebrityNode.info.node.children[2].active = !0, this.celebrityNode.avatar.node.children[0].active = !0, this.celebrityNode.avatar.node.children[1].active = !1;
                        let t = 60;
                        this.room && this.room.seats >= 8 && (this._layout == ge.Left && (this.celebrityNode.node.setPosition(20, this.celebrityNode.node.position.y, this.celebrityNode.node.position.z), this.celebrityNode.stake.node.setPosition(this.celebrityNode.stake.node.position.x, -55, this.celebrityNode.stake.node.position.z)), this._layout == ge.Right && (this.celebrityNode.node.setPosition(-20, this.celebrityNode.node.position.y, this.celebrityNode.node.position.z), this.celebrityNode.stake.node.setPosition(this.celebrityNode.stake.node.position.x, -55, this.celebrityNode.stake.node.position.z)), this._layout == ge.Top && this.celebrityNode.stake.node.setPosition(this.celebrityNode.stake.node.position.x, -160, this.celebrityNode.stake.node.position.z), t = 80), this.celebrityNode.avatar.allinMode.node.children[1].setScale(e), this.celebrityNode.balanceNode.setScale(e), this.celebrityNode.info.node.setScale(e), this.celebrityNode.info.node.setPosition(this.celebrityNode.info.node.position.x, this.room && this.room.seats >= 8 ? -90 : -110), this.celebrityNode.avatar.sprite.node.parent.setScale(e), this.celebrityNode.avatar.sprite.node.parent.setPosition(this.celebrityNode.avatar.sprite.node.parent.position.x, 2), this.celebrityNode.avatar.autoPlayNode.setScale(e), this.celebrityNode.avatar.node.children[0].setScale(e), this.celebrityNode.avatar.autoPlayNode.setPosition(this.celebrityNode.avatar.autoPlayNode.position.x, 2), this.celebrityNode.timer.node.setScale(e), this.celebrityNode.cardsHandler.node.setPosition(0, t, this.celebrityNode.cardsHandler.node.position.z)
                    }
        }
        setCardPositionAfterMoveShow(t) {
            t.node.setPosition(t.node.position.x, t.node.position.y - 190)
        }
        setCardPositionAfterMoveHide(t) {}
        setEnableCardPanelMask(t) {
            const e = this.cardsHandler.node.parent.parent.getComponent(H);
            C(e) && (e.enabled = t, Z.tools.resetMask(e, 1));
            let o = new s(0, 0, 0);
            this.room.holders.dealingShoe.getComponent(S).convertToWorldSpaceAR(c(0, 0, 0), o);
            let i = new s(0, 0, 0);
            this.cardsHandler.node.getComponent(S).convertToWorldSpaceAR(c(0, 0, 0), i), this.setEnableCardPanelMaskTop(i.y - o.y > 300 && !t)
        }
        setEnableCardPanelMaskTop(t) {
            let e = this.cardsHandler.node.parent.getComponent(H);
            e && (e.enabled = !1)
        }
        setActiveStake(t) {
            this.stake.node.active = t, this.celebrityNode.stake.node.active = t
        }
        getChipStackNum(t) {
            let e = 3;
            if (null == this.room.store.currentBlindLevel) return e;
            if (0 == this.stake.value) {
                if (1 == this.store.stakeIcon) {
                    if (0 == this.room.store.currentBlindLevel) this.room.store.bigBlind == t && (e = 2);
                    else if (this.room.store.currentBlindLevel > 0) {
                        let o = this.room.store.rbcList[this.room.store.currentBlindLevel - 1];
                        o && o.BigBlind == t && (e = 2)
                    }
                } else if (2 == this.store.stakeIcon)
                    if (0 == this.room.store.currentBlindLevel) this.room.store.smallBlind == t && (e = 1);
                    else if (this.room.store.currentBlindLevel > 0) {
                    let o = this.room.store.rbcList[this.room.store.currentBlindLevel - 1];
                    o && o.SmallBlind == t && (e = 1)
                }
            } else e = 3;
            return e
        }
        showIdentityInfo(t) {
            this._allowShowingInfo = t, this.avatar.showAvatar(t), this.timer.isTimeCounting ? !Z.appConfig.isLandscapeLayout && this.info.isShowingName() && this.info.showName(!1) : this.info.showName(t)
        }
        isSngGame() {
            var t;
            return !(null == (t = this.room) || !t.store) && this.room.store.isSngGame()
        }
        getUserId() {
            return this.store ? this.store.userId : this.info ? this.info.userId : -1
        }
        playMysteryBountyIntroChestAnim() {
            this.introChest.setScale(1, 1);
            let t = this.introChest.getComponent(v);
            t && (t.once("finished", (() => {
                q.instance.sendMessageCenter(q.instance.config.BroadCast.MYSTERY_BOUNTY_INTRO_COMPLETED)
            })), t.play("Chest_Intro"))
        }
        showMysteryBountyWinValueAnim(t) {
            this.introChest.setScale(1, 1);
            let e = this.introChest.getComponentInChildren(b);
            e && (e.string = `+${t}`);
            let o = this.introChest.getComponent(v);
            o && o.play("ShowWinValue")
        }
        playMysteryBountyGloveHitAnim() {
            let t = null,
                e = null,
                o = c(-1, .5, 1);
            switch (this.layout) {
                case ge.Bottom:
                    this.introChest.setScale(1, 1), t = "glove_2", e = c(1, -1, 1), o = c(0, -1, 0);
                    break;
                case ge.Left:
                    this.introChest.setScale(1, 1), t = "glove_1", e = c(1, 1, 1), o = c(-1, .5, 1);
                    break;
                case ge.Top:
                    this.introChest.setScale(1, 1), t = "glove_2", e = c(1, 1, 1), o = c(0, 1, 0);
                    break;
                case ge.Self:
                    this.introChest.setScale(1, 1), t = "glove_2", e = c(1, -1, 1), o = c(0, -1, 0);
                    break;
                case ge.Right:
                    this.introChest.setScale(-1, 1), t = "glove_1", e = c(-1, 1, 1), o = c(1, .5, 1)
            }
            let i = this.introChest.getComponent(v);
            i && i.play("Glove_Hit");
            let a = p(this.mysteryBountyGlove);
            a.parent = this.node, a.setPosition(this.introChest.position), a.setScale(e);
            let r = a.getComponent(ot);
            r && (r.AnimationName = t, r.FinishedCallBack = () => {
                C(a) && a.destroy()
            }, r.PlaySpine_SkinAndAnim()), a.getComponent(et).ClipPlay();
            let n = this.avatar.node.position;
            if (f(this.avatar.node).delay(.7).to(.1, {
                    position: new s(n.x + 20 * o.x, n.y + 20 * o.y, 0),
                    scale: new s(1.05, 1.05, 1)
                }, {
                    easing: "sineOut"
                }).to(.15, {
                    position: new s(n.x + -10 * o.x, n.y + -10 * o.y, 0),
                    scale: new s(.98, .98, 1)
                }, {
                    easing: "sineOut"
                }).to(.5, {
                    position: new s(n.x, n.y, 0),
                    scale: new s(s.ONE)
                }, {
                    easing: "sineOut"
                }).start(), this.layout != ge.Self) {
                let t = this.cardsHandler.node.position;
                f(this.cardsHandler.node).delay(.7).to(.1, {
                    position: new s(t.x + 20 * o.x, t.y + 20 * o.y, 0),
                    scale: new s(1.05, 1.05, 1)
                }, {
                    easing: "sineOut"
                }).to(.15, {
                    position: new s(t.x + -10 * o.x, t.y + -10 * o.y, 0),
                    scale: new s(.98, .98, 1)
                }, {
                    easing: "sineOut"
                }).to(.5, {
                    position: new s(t.x, t.y, 0),
                    scale: new s(s.ONE)
                }, {
                    easing: "sineOut"
                }).start()
            }
        }
        playOutAnimaiton() {
            this.outAnimation.active = !0, this.outAnimation.getComponent(v).play()
        }
        onClickSwitchCoinMode() {
            this.holdemRoom && (this.holdemRoom.coinMode = 1 - this.holdemRoom.coinMode, this.holdemRoom.store && cc_mtt.vv.DataManager.setDataPointInTableMtt(this.holdemRoom.store.tournamentId, this.holdemRoom.coinMode), this.holdemRoom.updateCoinModeValue())
        }
        doGray(t) {
            this.avatar.setGrayScale(t), this.info.setGrayNameAndChipsText(t), this.celebrityNode.avatar.setGrayScale(t), this.celebrityNode.info.setGrayNameAndChipsText(t)
        }
    }).prototype, "seat", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = e(xt.prototype, "avatar", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = e(xt.prototype, "winBorder", [dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(xt.prototype, "outAnimation", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = e(xt.prototype, "info", [ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Wt = e(xt.prototype, "balanceNode", [yt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), jt = e(xt.prototype, "balanceValNode", [pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Kt = e(xt.prototype, "tags", [ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yt = e(xt.prototype, "timer", [mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qt = e(xt.prototype, "stake", [gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Zt = e(xt.prototype, "cardsHandler", [Ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xt = e(xt.prototype, "opponentCardsHandlerContainer", [bt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Jt = e(xt.prototype, "selfCardsHandlerContainer", [ft], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $t = e(xt.prototype, "voiceBarPrefab", [vt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qt = e(xt.prototype, "voiceBar", [Nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = e(xt.prototype, "dealerContainer", [Pt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = e(xt.prototype, "emoticonParent", [_t], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = e(xt.prototype, "outerNode", [St], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = e(xt.prototype, "bountyBoard", [Ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = e(xt.prototype, "disconnectNode", [At], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = e(xt.prototype, "headOverlay", [wt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = e(xt.prototype, "introChest", [It], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = e(xt.prototype, "mysteryBountyGlove", [Lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = e(xt.prototype, "sittingOutNode", [Tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), e(xt.prototype, "layout", [kt], Object.getOwnPropertyDescriptor(xt.prototype, "layout"), xt.prototype), de = e(xt.prototype, "normalPlayerNode", [Ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = e(xt.prototype, "celebrityNode", [Dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = e(xt.prototype, "chipsDropPrefab", [Bt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ye = e(xt.prototype, "dealCardSelfNode", [Rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = e(xt.prototype, "cardsHandlerAnchor", [Mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), e(xt.prototype, "infoChanged", [w], Object.getOwnPropertyDescriptor(xt.prototype, "infoChanged"), xt.prototype), e(xt.prototype, "coinChanged", [w], Object.getOwnPropertyDescriptor(xt.prototype, "coinChanged"), xt.prototype), e(xt.prototype, "StakeSkin", [w], Object.getOwnPropertyDescriptor(xt.prototype, "StakeSkin"), xt.prototype), e(xt.prototype, "NeedAction", [w], Object.getOwnPropertyDescriptor(xt.prototype, "NeedAction"), xt.prototype), e(xt.prototype, "RoundBalance", [w], Object.getOwnPropertyDescriptor(xt.prototype, "RoundBalance"), xt.prototype), e(xt.prototype, "TimerControl", [w], Object.getOwnPropertyDescriptor(xt.prototype, "TimerControl"), xt.prototype), e(xt.prototype, "CoinAction", [w], Object.getOwnPropertyDescriptor(xt.prototype, "CoinAction"), xt.prototype), e(xt.prototype, "PlayerAction", [w], Object.getOwnPropertyDescriptor(xt.prototype, "PlayerAction"), xt.prototype), e(xt.prototype, "PlayerNeedAction", [w], Object.getOwnPropertyDescriptor(xt.prototype, "PlayerNeedAction"), xt.prototype), e(xt.prototype, "OnCheckPlayerVisible", [w], Object.getOwnPropertyDescriptor(xt.prototype, "OnCheckPlayerVisible"), xt.prototype), e(xt.prototype, "autoPlayLabel", [w], Object.getOwnPropertyDescriptor(xt.prototype, "autoPlayLabel"), xt.prototype), e(xt.prototype, "stateChange", [w], Object.getOwnPropertyDescriptor(xt.prototype, "stateChange"), xt.prototype), e(xt.prototype, "playerSitDown", [w], Object.getOwnPropertyDescriptor(xt.prototype, "playerSitDown"), xt.prototype), e(xt.prototype, "playWinnerAnimation", [w], Object.getOwnPropertyDescriptor(xt.prototype, "playWinnerAnimation"), xt.prototype), e(xt.prototype, "playerIsOut", [w], Object.getOwnPropertyDescriptor(xt.prototype, "playerIsOut"), xt.prototype), e(xt.prototype, "setRankingLabel", [w], Object.getOwnPropertyDescriptor(xt.prototype, "setRankingLabel"), xt.prototype), e(xt.prototype, "setSnapshotShowCard", [w], Object.getOwnPropertyDescriptor(xt.prototype, "setSnapshotShowCard"), xt.prototype), e(xt.prototype, "cardChanges", [w], Object.getOwnPropertyDescriptor(xt.prototype, "cardChanges"), xt.prototype), e(xt.prototype, "winsChanges", [w], Object.getOwnPropertyDescriptor(xt.prototype, "winsChanges"), xt.prototype), e(xt.prototype, "updateHunterValue", [w], Object.getOwnPropertyDescriptor(xt.prototype, "updateHunterValue"), xt.prototype), Et = xt)) || Et) || Et));
    i._RF.pop()
}