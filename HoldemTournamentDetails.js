import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as P from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as C from "./AndroidBackButton.js";
import * as L from "./HoldemTournamentDetailsRanking.js";
import * as S from "./FormatParser.js";
import * as y from "./HoldemTournamentDetailsReward.js";
import * as v from "./HoldemTournamentDetailsBlindLevel.js";
import * as R from "./HoldemTournamentDetailsTable.js";
import * as w from "./Pb.js";
import * as _ from "./Holdem_Basic_Item.js";
import * as k from "./mttconfig.js";
import * as B from "./MTTConnector.js";
import * as D from "./CustomWidget.js";
import * as E from "./cv.js";
import * as N from "./AutoWrapAndLimitLengthLabel.js";
import * as A from "./StringTools.js";
import * as O from "./CurrencyValue.js";
import * as M from "./Enum.js";

function main() {
    var z, I, G, H, F, W, U, V, x, Y, X, K, j, q, J, Q, Z, $, tt, et, it, nt, at, ot, rt, st, lt, ut, ht, gt, ct, mt, bt, pt, dt, ft, Pt, Tt, Ct, Lt, St, yt, vt, Rt, wt, _t, kt, Bt, Dt, Et, Nt, At, Ot, Mt, zt, It, Gt, Ht, Ft, Wt, Ut, Vt, xt, Yt, Xt, Kt;
    n._RF.push({}, "28ad6X+IZ1HUoaOzKzWkUDQ", "HoldemTournamentDetails", void 0);
    const {
        ccclass: jt,
        property: qt
    } = l;
    t("default", (z = qt(a), I = qt(a), G = qt(o), H = qt(L), F = qt(y), W = qt(R), U = qt(v), V = qt(N), x = qt(N), Y = qt(N), X = qt(N), K = qt(r), j = qt(r), q = qt(r), J = qt(r), Q = qt(N), Z = qt(N), $ = qt(N), tt = qt(r), et = qt(r), it = qt(r), nt = qt(s), at = qt(s), ot = qt(a), rt = qt(r), st = qt(a), lt = qt(a), ut = qt(a), ht = qt(a), gt = qt(r), ct = qt(O), mt = qt(r), jt((dt = e((pt = class extends _ {
        constructor(...t) {
            super(...t), this.ACTION_TAG_OPEN_CLOSE = 0, this.ACTION_TAG_ROTATE = 1, i(this, "tournamentDetailPage", dt, this), i(this, "pagesContainer", ft, this), i(this, "pagesMask", Pt, this), i(this, "rankingPage", Tt, this), i(this, "rewardPage", Ct, this), i(this, "tablePage", Lt, this), i(this, "blindLevelPage", St, this), i(this, "myRankingLabel", yt, this), i(this, "entriesLabel", vt, this), i(this, "prizeCircleLabel", Rt, this), i(this, "lateRegTimer", wt, this), i(this, "currentLevelBlindLabel", _t, this), i(this, "nextLevelBlindLabel", kt, this), i(this, "levelCountdownTimer", Bt, this), i(this, "currentLevelLabel", Dt, this), i(this, "resurrectLimitLabel", Et, this), i(this, "prizePoolLabel", Nt, this), i(this, "bountyPoolLabel", At, this), i(this, "largestStackLabel", Ot, this), i(this, "avgStackLabel", Mt, this), i(this, "smallestStackLabel", zt, this), i(this, "controlPanel", It, this), i(this, "infoBtn", Gt, this), i(this, "infoBubble", Ht, this), i(this, "infoDescLabel", Ft, this), i(this, "closeButton", Wt, this), i(this, "stack_info", Ut, this), i(this, "detailPanel", Vt, this), i(this, "detailPanelSNG", xt, this), i(this, "StartTingStackSNG", Yt, this), i(this, "PrizepoolSNG", Xt, this), i(this, "RankSNG", Kt, this), this.evenTypeShowInfo = void 0, this.pageInitHeight = 0, this.pagesContainerInitPosY = 0, this.blindLevelCountdown = 0, this.lateRegCountdown = 0, this.currentPage = null, this.pageMoveDuration = .3, this.buttonRotateDuration = .1, this.currentTween = null, this._isTimerCounting = !0, this.minStack = void 0, this.avgStack = void 0, this.maxStack = void 0
        }
        isTimerCounting(t = !1) {
            let e = this.holdemRoom,
                i = e && e.store.roomMessage != w.mttPro.Tips_Type.Game_Pause && e.store.roomMessage != w.mttPro.Tips_Type.Game_Will_Playing && e.store.roomMessage != w.mttPro.Tips_Type.Game_Wait_Rebuy && e.store.roomMessage != w.mttPro.Tips_Type.Game_Wait_Morebuy && e.store.roomMessage != w.mttPro.Tips_Type.Game_Final_Pause && e.store.restMessage != w.mttPro.RestTime_Type.RestTime_Type_FINALS && e.store.roomSnapshotState >= 3 && 101 !== e.store.sngStatus;
            if (t || (i = i && e.store.restMessage != w.mttPro.RestTime_Type.RestTime_Type_MIDFIELD), this._isTimerCounting != i)
                if (i) cc_mtt.vv.ConsoleLog.log("isTimerCounting true");
                else {
                    let t = this.holdemRoom.store;
                    cc_mtt.vv.ConsoleLog.log("isTimerCounting false", t.roomMessage, t.restMessage, t.roomSnapshotState, t.currentBlindLevel, t.sngStatus)
                } return this._isTimerCounting = i, i
        }
        onLoad() {
            this.pageInitHeight = this.tournamentDetailPage.getComponent(u).height, this.pagesContainerInitPosY = this.pagesContainer.position.y, this.adaptWidget(), this.pagesContainer.on(D.EventType.ALIGNMENT_UPDATE, this.onPagesContainerAlignmentUpdate.bind(this)), this.resetPanelPosition(), this.node.active = !1, this.closeButton.active = !E.appConfig.isLandscapeLayout
        }
        resetPanelPosition() {
            this.tournamentDetailPage.setPosition(0, 0)
        }
        start() {
            this.rankingPage.node.active = !1, this.rewardPage.node.active = !1, this.tablePage.node.active = !1, this.blindLevelPage.node.active = !1
        }
        setRoomToChild() {
            this.rankingPage.setHoldemRoom(this.holdemRoom), this.rewardPage.setHoldemRoom(this.holdemRoom), this.tablePage.setHoldemRoom(this.holdemRoom), this.blindLevelPage.setHoldemRoom(this.holdemRoom), this.blindLevelPage.init()
        }
        update(t) {
            this.isTimerCounting(!0) && this.lateRegCountdown > 0 && (this.lateRegCountdown = Math.max(this.lateRegCountdown - t, 0), this.updateLateRegTimer(Math.ceil(this.lateRegCountdown)))
        }
        onDestroy() {
            this.unscheduleAllCallbacks()
        }
        onBackButtonClick() {
            h.isNative && h.os === h.OS.ANDROID && C.getInstance().removeBackFunction("HoldemTournamentDetails"), this.close()
        }
        setBlindRiseType(t) {
            this.blindLevelPage.setBlindRiseType(t)
        }
        setTournamentType(t) {
            this.rankingPage.setTournamentType(t), this.tablePage.tableRankingPage.setTournamentType(t)
        }
        setTournamentName(t) {}
        setResurrectLimit(t) {
            this.resurrectLimitLabel.setString(""), this.resurrectLimitLabel.setString(t.toString())
        }
        updateTournamentInfoDesc(t) {
            this.infoDescLabel.string = t, this.infoBtn.node.active = !!t, this.infoBtn.node.active || (this.infoBubble.active = !1)
        }
        updateRealTimeRecord(t, e) {
            this.myRankingLabel.setString(""), this.entriesLabel.setString(""), this.myRankingLabel.setString(e && e > 0 ? e.toString() : "-"), t instanceof w.mttPro.MttRealTimeRecordRes ? this.entriesLabel.setString(t.PlayerCount + "/" + t.AllPlayerJoinCount) : t instanceof w.mttPro.SngRealTimeRecordRes && this.setRankSNG(e || 0), this.currentPage == this.tablePage.node ? this.tablePage.updateTableRankingPage(t.players.sort(((t, e) => t.rank - e.rank)), parseInt(t.roomId.toString().slice(-4))) : this.rankingPage.setRankingPlayers(t.players.sort(((t, e) => t.rank - e.rank)))
        }
        updatePrizeCircle(t) {
            this.prizeCircleLabel.setString(""), this.prizeCircleLabel.setString(t.toString())
        }
        updatePrizePool(t) {
            this.prizePoolLabel.setString(""), this.prizePoolLabel.setString(t.toString())
        }
        updateBountyPool(t) {
            this.bountyPoolLabel.setString(""), this.bountyPoolLabel.setString(t.toString())
        }
        updateCurrentLevel(t) {
            let e = this.holdemRoom,
                i = e._gameViewType == k.MTT_GAME_MODE.SHORT_DECK;
            if (this.currentLevelLabel.string = t.toString(), t - 1 < e.store.rbcList.length) {
                let n = e.store.rbcList[t - 1];
                this.currentLevelBlindLabel.string = i ? A.ScientificNotationWithFormat(n.Ante) : A.ScientificNotationWithFormat(n.SmallBlind) + "/" + A.ScientificNotationWithFormat(n.BigBlind) + "(" + A.ScientificNotationWithFormat(n.Ante) + ")"
            } else this.currentLevelBlindLabel.string = "-";
            let n = t + 1;
            if (n - 1 < e.store.rbcList.length) {
                let t = e.store.rbcList[n - 1];
                this.nextLevelBlindLabel.string = i ? A.ScientificNotationWithFormat(t.Ante) : A.ScientificNotationWithFormat(t.SmallBlind) + "/" + A.ScientificNotationWithFormat(t.BigBlind) + "(" + A.ScientificNotationWithFormat(t.Ante) + ")"
            } else this.nextLevelBlindLabel.string = "-";
            this.blindLevelPage.refreshBlindLevelList()
        }
        setStackInfo(t, e, i) {
            this.minStack = t, this.avgStack = e, this.maxStack = i, this.updateStacksInfo()
        }
        updateStacksInfo() {
            if (!g(this.holdemRoom) || !this.holdemRoom.store) return;
            const t = this.getGameMode() == w.commonProto.MTT_GAME_MODE.SHORT_DECK,
                e = t ? this.holdemRoom.store.ante : this.holdemRoom.store.calcBigBlind;
            this.smallestStackLabel.string = S.getDataPointValue(this.minStack, e, this.holdemRoom.coinMode, t), this.avgStackLabel.string = S.getDataPointValue(this.avgStack, e, this.holdemRoom.coinMode, t), this.largestStackLabel.string = S.getDataPointValue(this.maxStack, e, this.holdemRoom.coinMode, t)
        }
        onPageTabClicked(t, e) {
            let i = null,
                n = +e;
            switch (n) {
                case 0:
                    i = this.rankingPage.node;
                    break;
                case 1:
                    i = this.rewardPage.node;
                    break;
                case 2:
                    i = this.tablePage.node;
                    break;
                case 3:
                    i = this.blindLevelPage.node
            }
            g(i) && (i != this.currentPage ? (g(this.currentPage) && this.closeTabPage(this.currentPage), this.controlPanel.forEach(((t, e) => {
                this.togglePanelButton(t, e == n, e == n)
            })), this.showTabPage(i, !0)) : this.onClickSameTab(i, n))
        }
        onClickSameTab(t, e) {
            this.closeTabPage(t, !0), this.togglePanelButton(this.controlPanel[e], !1)
        }
        togglePanelButton(t, e, i = !0) {
            let n = t.target.children[0],
                a = t.target.children[1],
                o = a.children[0],
                r = a.children[1];
            c.stopAllByTarget(a), i ? m(a).to(this.buttonRotateDuration, {
                angle: e ? 180 : 0
            }).call((() => {
                o.active = !e, r.active = e, n.getComponent(b).color = e ? (new p).fromHEX(B.instance.tournamentDetailColorCode.tabBtnLabelColorOn) : (new p).fromHEX(B.instance.tournamentDetailColorCode.tabBtnLabelColorOff)
            })).start() : (a.angle = e ? 180 : 0, o.active = !e, r.active = e, n.getComponent(b).color = e ? (new p).fromHEX(B.instance.tournamentDetailColorCode.tabBtnLabelColorOn) : (new p).fromHEX(B.instance.tournamentDetailColorCode.tabBtnLabelColorOff))
        }
        showTabPage(t, e = !1) {
            g(t) && (this.pagesContainer.children.forEach((t => t.active = !1)), t.active = !0, g(this.currentTween) && (this.currentTween.stop(), this.currentTween = null), c.stopAllByTag(this.ACTION_TAG_OPEN_CLOSE, this.pagesContainer), e ? (this.currentTween = m(this.tournamentDetailPage.getComponent(u)).to(this.pageMoveDuration, {
                height: this.node.getComponent(u).height
            }).start(), m(this.pagesContainer).by(this.pageMoveDuration, {
                position: d(0, -this.pagesContainer.getComponent(u).height - this.pagesContainer.position.y, 0)
            }).tag(this.ACTION_TAG_OPEN_CLOSE).start()) : (this.tournamentDetailPage.getComponent(u).height = this.node.getComponent(u).height, this.pagesContainer.setPosition(0, -this.pagesContainer.getComponent(u).height)), this.currentPage = t)
        }
        closeTabPage(t, e = !1) {
            g(t) && (g(this.currentTween) && (this.currentTween.stop(), this.currentTween = null), c.stopAllByTag(this.ACTION_TAG_OPEN_CLOSE, this.pagesContainer), e ? (this.currentTween = m(this.tournamentDetailPage.getComponent(u)).to(this.pageMoveDuration, {
                height: this.pageInitHeight
            }).call((() => {
                t.active = !1, this.currentTween = null
            })).start(), m(this.pagesContainer).by(this.pageMoveDuration, {
                position: d(0, this.pagesContainerInitPosY - this.pagesContainer.position.y, 0)
            }).tag(this.ACTION_TAG_OPEN_CLOSE).start()) : (this.tournamentDetailPage.getComponent(u).height = this.pageInitHeight, this.pagesContainer.setPosition(0, this.pagesContainerInitPosY), t.active = !1), this.currentPage = null)
        }
        getLeftEdgeGap() {
            return 0
        }
        show() {
            var t;
            cc_mtt.vv.ConsoleLog.log("HoldemTournamentDetails show"), h.isNative && h.os === h.OS.ANDROID && C.getInstance().addBackFunction("HoldemTournamentDetails", this.onBackButtonClick.bind(this)), this.node.active = !0, null == (t = f.instance.ActionManager.getActionByTag(this.ACTION_TAG_OPEN_CLOSE, this.tournamentDetailPage)) || t.stop(), m(this.tournamentDetailPage).to(this.pageMoveDuration, {
                position: new P(-this.tournamentDetailPage.getComponent(u).width + this.getLeftEdgeGap(), this.tournamentDetailPage.position.y, 1)
            }).tag(this.ACTION_TAG_OPEN_CLOSE).start(), this.node.on(a.EventType.TOUCH_END, this.onBackButtonClick.bind(this))
        }
        close() {
            var t;
            null == (t = f.instance.ActionManager.getActionByTag(this.ACTION_TAG_OPEN_CLOSE, this.tournamentDetailPage)) || t.stop(), m(this.tournamentDetailPage).sequence(m().to(this.pageMoveDuration, {
                position: new P(0, this.tournamentDetailPage.position.y, 1)
            }), m().call((() => {
                this.hideInfoBubble(T.MOUSE_LEAVE), this.closeTabPage(this.currentPage, !1), this.controlPanel.forEach((t => {
                    this.togglePanelButton(t, !1, !1)
                })), this.resetAllPages(), this.scheduleOnce((() => this.node.active = !1), .1)
            }))).tag(this.ACTION_TAG_OPEN_CLOSE).start(), this.node.off(a.EventType.TOUCH_END)
        }
        resetAllPages() {
            this.rankingPage.resetPage(), this.rewardPage.resetPage(), this.tablePage.resetPage(), this.blindLevelPage.resetPage()
        }
        updateBlindValue(t, e) {
            var i;
            if (null == (i = this.holdemRoom) || null == (i = i.store) || !i.isSngGame() || !this.holdemRoom.store.isWaitingForPlayers() && this.holdemRoom.store.isSngGameStart()) switch (t) {
                case k.BLIND_RISE_TYPE.DURATION:
                    this.levelCountdownTimer.string = "number" == typeof e ? S.changeSecToTime(e, "mmss") : e;
                    break;
                case k.BLIND_RISE_TYPE.HANDS:
                    this.levelCountdownTimer.string = "number" == typeof e ? e.toString() : e
            }
        }
        updateLateRegCountdown(t) {
            (0 == this.lateRegCountdown && t > 0 || this.lateRegCountdown > 0 && t < this.lateRegCountdown || Math.abs(t - this.lateRegCountdown) <= 6) && (this.lateRegCountdown = Math.max(t, 0)), this.updateLateRegTimer(this.lateRegCountdown)
        }
        updateLateRegTimer(t) {
            this.lateRegTimer.setString(""), this.lateRegTimer.setString(S.changeSecToTime(t))
        }
        onPagesContainerAlignmentUpdate() {
            g(this.currentPage) && this.showTabPage(this.currentPage, g(f.instance.ActionManager.getActionByTag(this.ACTION_TAG_OPEN_CLOSE, this.pagesContainer)))
        }
        showInfoBubble(t) {
            this.infoBubble.active = !0, this.evenTypeShowInfo = t
        }
        hideInfoBubble(t) {
            t && t == T.MOUSE_LEAVE && this.evenTypeShowInfo != T.MOUSE_ENTER || (this.infoBubble.active = !1)
        }
        adaptWidget() {
            B.instance.cv.resMgr.adaptWidget(this.pagesMask.node, !0, !0)
        }
        isDataEmpty() {
            var t, e, i, n;
            return (null == (t = this.rankingPage) ? void 0 : t.isDataEmpty()) || (null == (e = this.rewardPage) ? void 0 : e.isDataEmpty()) || (null == (i = this.tablePage) ? void 0 : i.isDataEmpty()) || (null == (n = this.blindLevelPage) ? void 0 : n.isDataEmpty())
        }
        setRankSNG(t) {
            this.RankSNG.string = t > 0 ? t.toString() : "-"
        }
        updateSNGData() {
            var t, e;
            if (this.setRoomToChild(), this.holdemRoom.TournamentBlindList_GP(), this.rewardPage.updateRankingRewardList(null == (t = this.holdemRoom) || null == (t = t.store) ? void 0 : t.prizeList), null != (e = this.holdemRoom) && e.store) {
                const t = (this.holdemRoom.store.Multiplier * this.holdemRoom.store.regFee).toString();
                this.PrizepoolSNG.updateVal(t, M.USD);
                let e = 0;
                if (this.holdemRoom.store.Multiplier >= 100) e = 1e3;
                else switch (this.holdemRoom.store.Multiplier) {
                    case 2:
                        e = 400;
                        break;
                    case 3:
                        e = 500;
                        break;
                    case 5:
                        e = 600;
                        break;
                    case 10:
                        e = 700;
                        break;
                    case 25:
                        e = 800;
                        break;
                    default:
                        e = 0
                }
                this.StartTingStackSNG.string = e.toString()
            }
        }
        onChangedBBGameplaySetting() {
            this.updateStacksInfo()
        }
    }).prototype, "tournamentDetailPage", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(pt.prototype, "pagesContainer", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(pt.prototype, "pagesMask", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(pt.prototype, "rankingPage", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(pt.prototype, "rewardPage", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(pt.prototype, "tablePage", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(pt.prototype, "blindLevelPage", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(pt.prototype, "myRankingLabel", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(pt.prototype, "entriesLabel", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(pt.prototype, "prizeCircleLabel", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(pt.prototype, "lateRegTimer", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(pt.prototype, "currentLevelBlindLabel", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(pt.prototype, "nextLevelBlindLabel", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(pt.prototype, "levelCountdownTimer", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(pt.prototype, "currentLevelLabel", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = e(pt.prototype, "resurrectLimitLabel", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(pt.prototype, "prizePoolLabel", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = e(pt.prototype, "bountyPoolLabel", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(pt.prototype, "largestStackLabel", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(pt.prototype, "avgStackLabel", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = e(pt.prototype, "smallestStackLabel", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(pt.prototype, "controlPanel", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Gt = e(pt.prototype, "infoBtn", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(pt.prototype, "infoBubble", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = e(pt.prototype, "infoDescLabel", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Wt = e(pt.prototype, "closeButton", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = e(pt.prototype, "stack_info", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(pt.prototype, "detailPanel", [ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xt = e(pt.prototype, "detailPanelSNG", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yt = e(pt.prototype, "StartTingStackSNG", [gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xt = e(pt.prototype, "PrizepoolSNG", [ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Kt = e(pt.prototype, "RankSNG", [mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = pt)) || bt));
    n._RF.pop()
}