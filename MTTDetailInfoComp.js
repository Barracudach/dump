import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./LobbyTools.js";
import * as T from "./MTTDetailInfoItemComp.js";
import * as b from "./CollapsibleLabel.js";
import * as S from "./Pb.js";
import * as f from "./CommonTools.js";
import * as p from "./FormatParser.js";
import * as y from "./ThemeSystem.js";
import * as x from "./ColorSystemType.js";
import * as B from "./ColorsystemLobbyV2.js";
import * as k from "./MttHallDetailInfoBoxItem.js";
import * as v from "./Enum.js";
import * as P from "./Enum.js";
import * as N from "./MttHallDetailExpandTab.js";
import * as I from "./cv.js";
import * as w from "./MttItemHelper.js";
import * as C from "./Translator.js";
import * as E from "./NodePage.js";
import * as M from "./MttGameItemIntegrateTimeStatus.js";
import * as z from "./AutoResizeLabel.js";
import * as _ from "./MttItemRenderHelper.js";

function main() {
    var D, L, A, R, F, O, V, U, G, H, $, j, J, K, W, Y, q, Q, X, Z, tt, et, it, nt, at, ot, rt, st, lt, ut, ct, ht, mt, dt, gt, Tt, bt, St, ft, pt, yt, xt, Bt, kt, vt, Pt, Nt, It, wt, Ct, Et, Mt, zt, _t, Dt, Lt, At, Rt, Ft, Ot, Vt, Ut, Gt, Ht, $t, jt, Jt, Kt, Wt, Yt, qt, Qt, Xt, Zt, te, ee, ie, ne, ae, oe;
    n._RF.push({}, "a5a49aPaSNEVKwKVfjBJq4O", "MTTDetailInfoComp", void 0);
    const {
        ccclass: re,
        property: se
    } = l;
    t("default", (D = se(a), L = se(z), A = se(a), R = se(a), F = se(o), O = se(r), V = se(y), U = se(s), G = se(a), H = se(r), $ = se(r), j = se(r), J = se(a), K = se([k]), W = se([k]), Y = se(r), q = se(r), Q = se(r), X = se(r), Z = se(r), tt = se(a), et = se(a), it = se(a), nt = se(a), at = se(a), ot = se(r), rt = se(r), st = se(r), lt = se(r), ut = se(r), ct = se(r), ht = se(r), mt = se(r), dt = se(r), gt = se(r), Tt = se(a), bt = se(b), St = se(s), ft = se(a), re((xt = e((yt = class extends N {
        constructor(...t) {
            super(...t), this.mvcView = null, this.model = null, i(this, "targetEventNode", xt, this), i(this, "targetEventName", Bt, this), i(this, "targetEventNameMaxSizeNode", kt, this), i(this, "targetEventNameMinSizeNode", vt, this), i(this, "targetEventsBtn", Pt, this), i(this, "targetEventsBtnTxt", Nt, this), i(this, "statusBg", It, this), i(this, "statusBoxPrefab", wt, this), i(this, "statusBoxContainer", Ct, this), i(this, "startTimeTxt", Et, this), i(this, "runningTimeTxt", Mt, this), i(this, "buyInTxt", zt, this), i(this, "overlayIconNode", _t, this), i(this, "leftInfoBoxItems", Dt, this), i(this, "rightInfoBoxItems", Lt, this), i(this, "gameClockTxt", At, this), i(this, "curLevelTxt", Rt, this), i(this, "nextBreakTxt", Ft, this), i(this, "curBlindTxt", Ot, this), i(this, "nextBlindTxt", Vt, this), i(this, "smallStackNode", Ut, this), i(this, "avgStackNode", Gt, this), i(this, "largestStackNode", Ht, this), i(this, "startingStackNode", $t, this), i(this, "myStackNode", jt, this), i(this, "smallestStackTxt", Jt, this), i(this, "avgStackTxt", Kt, this), i(this, "largestStackTxt", Wt, this), i(this, "smallestStackBbTxt", Yt, this), i(this, "avgStackBbTxt", qt, this), i(this, "largestStackBbTxt", Qt, this), i(this, "startingStackTxt", Xt, this), i(this, "startingStackBbTxt", Zt, this), i(this, "myStackTxt", te, this), i(this, "myStackBbTxt", ee, this), i(this, "descriptionNode", ie, this), i(this, "descriptionTxt", ne, this), i(this, "infoItemPrefab", ae, this), i(this, "infoContentNode", oe, this), this.itemCompList = {}, this._statusBox = null, this.onToggleOverlayButton = (t, e = null) => {
                this.mvcView.onToggleOverlayButton(t, e)
            }
        }
        get statusBox() {
            if (!u(this._statusBox)) {
                const t = c(this.statusBoxPrefab);
                t.parent = this.statusBoxContainer, t.setPosition(0, 0), this._statusBox = t.getComponent(M)
            }
            return this._statusBox
        }
        onLoad() {
            this.targetEventName.node.on(a.EventType.TOUCH_END, this.onClickTargetEventName.bind(this))
        }
        onDestroy() {}
        updateInfo(t) {
            this.model = t;
            const e = t.data;
            let i = t.hallModelData.isStarted;
            this.updateRoomStatus(), this.showOverlayIcon(t.tournamentDetail.ShowOverlayIcon), this.setStartTime(e.startingTime), this.setBuyInFee(t.hallModelData.buyIn), this.setInfoBox(), this.setCurrentLevel(i ? e.currentLevel : 0), this.setCurrentBlind(e.currentBlindConfig), this.setNextBlind(e.nextBlindConfig), this.showSmallestStack(i), this.showAvgStack(i), this.showLargestStack(i);
            let n = i && Math.abs(t.hallModelData.myJoinStatus) > 0;
            this.showMyStack(n), this.showStartingStack(!n), i && (this.setSmallestStack(e.smallestStack), this.setAvgStack(e.avgStack), this.setLargestStack(e.largestStack)), n ? this.setMyStack(w.getMyTournamentStack(e.mttId)) : this.setStartingStack(0 == e.multiFlightLevel ? e.startingChip : 0), this.setDescription(e.description), this.setInfoItem()
        }
        showTargetEvent(t) {
            this.targetEventNode.active = t
        }
        setTargetEventName(t) {
            u(this.targetEventNameMinSizeNode) && u(this.targetEventNameMaxSizeNode) && (this.targetEventName.sizeRefNode = this.targetEventsBtn.node.active ? this.targetEventNameMinSizeNode : this.targetEventNameMaxSizeNode), this.targetEventName.setString(t)
        }
        showTargetEventsBtn(t) {
            this.targetEventsBtn.node.active = t
        }
        setTargetEventsCount(t) {
            this.showTargetEventsBtn(t > 1), this.targetEventsBtnTxt.string = h.formatStr(C("MTT_HALL.VIEW_ALL"), t)
        }
        setTargetEvents(t, e) {
            this.showTargetEvent(t.length > 0, t.length), this.setTargetEventsCount(t.length), this.setTargetEventName(e)
        }
        onLanguageChange() {
            this.setTargetEventsCount(this.model.hallModelData.targetEvents.length), this.setInfoBox(), this.setInfoItem()
        }
        isValidObject() {
            return u(this.node, !0)
        }
        onClickButtonBack() {
            var t;
            g.playSoundBack(), null == (t = this.mvcView) || null == t.onClickButtonBack || t.onClickButtonBack()
        }
        updateRoomStatus() {
            const {
                status: t,
                timerStop: e
            } = this.model.data, [i, n, a] = w.getMttRoomStatusI18n(this.model.tournamentDetail), o = this.model.hallModelData.timeStampWillPlay;
            this.statusBox.applyData({
                status: this.model.data.status,
                roomStatusI18nKey: i,
                startingTime: this.model.data.startingTime,
                timeStampLateReg: this.model.data.lateRegEndTimestamp,
                duration: this.model.data.gameDuration,
                allowSignupDate: this.model.data.allowSignupDate,
                timerStop: this.model.tournamentDetail.TimerStop,
                playingPlayersCount: this.model.data.playingPlayers,
                registeredPlayer: this.model.data.entries,
                willPlayStartTime: o,
                playerOnJoint: this.model.tournamentDetail.PlayOnJoint,
                rebuyStatus: this.model.tournamentDetail.RebuyStatus
            });
            let r = e || t > 100 ? B.HallMttDetail_Status_Bg_Paused : t == S.commonProto.MTT_GAME_STATUS.NOT_STARTED ? B.HallMttDetail_Status_Bg_Register : t == S.commonProto.MTT_GAME_STATUS.STARTED ? B.HallMttDetail_Status_Bg_LateReg : t == S.commonProto.MTT_GAME_STATUS.STOP_SIGNUP ? B.HallMttDetail_Status_Bg_Running : B.HallMttDetail_Status_Bg_Paused;
            this.statusBg.setColorScheme(x.LobbyV2, r)
        }
        showOverlayIcon(t) {
            this.overlayIconNode && (this.overlayIconNode.active = !1)
        }
        setBuyInFee(t) {
            if (!this.buyInTxt) return;
            let e = "";
            switch (this.model.data.currency) {
                case v[P.USD].code:
                    e = v[P.USD].symbol;
                    break;
                case v[P.CNY].code:
                    e = v[P.CNY].shortSymbol
            }
            this.buyInTxt.string = this.model.data.multiFlightLevel > 0 ? "N/A" : e + p.ThousandPointFormat(t)
        }
        setStartTime(t) {
            if (!this.startTimeTxt) return;
            let e = w.checkStartingTime(t);
            this.startTimeTxt.node.parent.active = e, e && (this.startTimeTxt.string = w.showDateOrTime(t, !0, !0))
        }
        setRunningTimeTxt(t) {
            this.runningTimeTxt && (this.runningTimeTxt.string = t, this.runningTimeTxt.node.active = !!t)
        }
        setNextBreak(t) {
            if (!this.nextBreakTxt) return;
            if (t < 0) return void(this.nextBreakTxt.string = "-");
            const {
                min: e,
                sec: i
            } = f.instance.splitSecond(t, {
                hasDay: !1,
                hasHour: !1
            }), [n, a] = p.addStartPadding([e, i], 2, "0");
            this.nextBreakTxt.string = `${n}:${a}`
        }
        updateNextBreak() {
            let t = this.model.data.isPaused ? -1 : w.timeStampToTimeLeftSec(this.model.hallModelData.timeStampNextBreak);
            this.model.data.inMiddlePause && (t = 0), this.model.data.breakDuration <= 0 && (t = -1), this.setNextBreak(t)
        }
        showSmallestStack(t) {
            this.smallStackNode && (this.smallStackNode.active = t)
        }
        showAvgStack(t) {
            this.avgStackNode && (this.avgStackNode.active = t)
        }
        showLargestStack(t) {
            this.largestStackNode && (this.largestStackNode.active = t)
        }
        showStartingStack(t) {
            this.startingStackNode && (this.startingStackNode.active = t)
        }
        showMyStack(t) {
            this.myStackNode && (this.myStackNode.active = t)
        }
        setSmallestStack(t) {
            var e, i;
            if (!this.smallestStackTxt) return;
            if (this.smallestStackTxt.string = p.ThousandPointFormat(t, 0), !this.smallestStackBbTxt) return;
            const n = this.model.data.isShortDeck ? null == (e = this.model.data.currentBlindConfig) ? void 0 : e.Ante : null == (i = this.model.data.currentBlindConfig) ? void 0 : i.BigBlind;
            this.smallestStackBbTxt.string = n > 0 ? `(${p.ThousandPointFormat(t/n,1)} BB)` : "-"
        }
        setAvgStack(t) {
            var e, i;
            if (!this.avgStackTxt) return;
            if (this.avgStackTxt.string = p.ThousandPointFormat(t, 0), !this.avgStackBbTxt) return;
            const n = this.model.data.isShortDeck ? null == (e = this.model.data.currentBlindConfig) ? void 0 : e.Ante : null == (i = this.model.data.currentBlindConfig) ? void 0 : i.BigBlind;
            this.avgStackBbTxt.string = n > 0 ? `(${p.ThousandPointFormat(t/n,1)} BB)` : "-"
        }
        setLargestStack(t) {
            var e, i;
            if (!this.largestStackTxt) return;
            if (this.largestStackTxt.string = p.ThousandPointFormat(t, 0), !this.largestStackBbTxt) return;
            const n = this.model.data.isShortDeck ? null == (e = this.model.data.currentBlindConfig) ? void 0 : e.Ante : null == (i = this.model.data.currentBlindConfig) ? void 0 : i.BigBlind;
            this.largestStackBbTxt.string = n > 0 ? `(${p.ThousandPointFormat(t/n,1)} BB)` : "-"
        }
        setStartingStack(t) {
            var e, i;
            if (!this.startingStackTxt) return;
            if (this.startingStackTxt.string = t > 0 ? p.ThousandPointFormat(t, 0) : "-", !this.startingStackBbTxt) return;
            const n = this.model.data.currentLevel > 0 ? this.model.data.currentLevel - 1 : 0,
                a = this.model.data.isShortDeck ? null == (e = this.model.data.blindConfig[n]) ? void 0 : e.Ante : null == (i = this.model.data.blindConfig[n]) ? void 0 : i.BigBlind;
            this.startingStackBbTxt.string = t > 0 && a > 0 ? `(${p.ThousandPointFormat(t/a,1)} BB)` : "-"
        }
        setMyStack(t) {
            var e, i;
            if (!this.myStackTxt) return;
            if (this.myStackTxt.string = t > 0 ? p.ThousandPointFormat(t, 0) : "-", !this.myStackBbTxt) return;
            const n = this.model.data.isShortDeck ? null == (e = this.model.data.currentBlindConfig) ? void 0 : e.Ante : null == (i = this.model.data.currentBlindConfig) ? void 0 : i.BigBlind;
            this.myStackBbTxt.string = t > 0 && n > 0 ? `(${p.ThousandPointFormat(t/n,1)} BB)` : "-"
        }
        setCurrentLevel(t) {
            this.curLevelTxt && (this.curLevelTxt.string = t > 0 ? t.toString() : "-")
        }
        setCurrentBlind(t) {
            if (t) {
                const {
                    SmallBlind: e,
                    BigBlind: i,
                    Ante: n
                } = t;
                this.curBlindTxt.string = this.model.data.isShortDeck ? E.getCoinsLabelV2(n) : `${E.getCoinsLabelV2(e)} / ${E.getCoinsLabelV2(i)} (${E.getCoinsLabelV2(n)})`
            } else this.curBlindTxt.string = "-"
        }
        setNextBlind(t) {
            if (t) {
                const {
                    SmallBlind: e,
                    BigBlind: i,
                    Ante: n
                } = t;
                this.nextBlindTxt.string = this.model.data.isShortDeck ? E.getCoinsLabelV2(n) : `${E.getCoinsLabelV2(e)} / ${E.getCoinsLabelV2(i)} (${E.getCoinsLabelV2(n)})`
            } else this.nextBlindTxt.string = "-"
        }
        setDescription(t) {
            this.descriptionNode && (this.descriptionNode.active = !!t);
            let e = this.descriptionTxt.node.parent.getComponent(m).width + 11;
            this.descriptionTxt.node.getComponent(d).maxWidth = e, this.scheduleOnce((() => {
                this.descriptionTxt && this.descriptionTxt.setText(t, !0)
            }), 0)
        }
        setInfoBox() {
            const t = this.model.data,
                e = this.model.tournamentDetail;
            let i = null,
                n = null;
            const {
                prizePool: a,
                firstPlacePrize: o,
                nextPlacePrize: r,
                playingPlayers: s,
                inTheMoney: l,
                myRank: c,
                guarantee: h,
                overlay: m,
                entries: d,
                minPlayers: g,
                maxPlayers: T
            } = t, {
                multiFlightId: b,
                multiFlightLevel: f
            } = this.model.hallModelData, p = b && 0 == f;
            switch (e.RebuyStatus == S.commonProto.Rebuy_Status_STATE.Rebuy_Status_Rebuy ? S.commonProto.MTT_GAME_STATUS.STARTED : e.RebuyStatus == S.commonProto.Rebuy_Status_STATE.Rebuy_Status_Add_ons ? S.commonProto.MTT_GAME_STATUS.STOP_SIGNUP : t.status) {
                case S.commonProto.MTT_GAME_STATUS.NOT_STARTED:
                    i = {
                        prizePool: a,
                        guarantee: h,
                        overlay: m
                    }, n = {
                        entries: d,
                        minPlayers: g,
                        maxPlayers: T
                    };
                    break;
                case S.commonProto.MTT_GAME_STATUS.STARTED:
                case S.commonProto.MTT_GAME_STATUS.STARTED + 100:
                    i = p ? h > 0 ? {
                        prizePool: a,
                        overlay: m
                    } : {
                        prizePool: a
                    } : h > 0 ? {
                        prizePool: a,
                        firstPlacePrize: o,
                        overlay: m
                    } : {
                        prizePool: a,
                        firstPlacePrize: o,
                        nextPlacePrize: r
                    }, n = p ? {
                        playingPlayers: s,
                        myRank: c
                    } : {
                        playingPlayers: s,
                        inTheMoney: l,
                        myRank: c
                    };
                    break;
                case S.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                case S.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
                    i = p ? h > 0 ? {
                        prizePool: a,
                        overlay: m
                    } : {
                        prizePool: a
                    } : {
                        prizePool: a,
                        firstPlacePrize: o,
                        nextPlacePrize: r
                    }, n = p ? {
                        playingPlayers: s,
                        myRank: c
                    } : {
                        playingPlayers: s,
                        inTheMoney: l,
                        myRank: c
                    }
            }
            this.leftInfoBoxItems.forEach((t => t.node.active = !1)), Object.keys(i).forEach(((e, n) => {
                const a = this.leftInfoBoxItems[n];
                u(a) && (a.node.active = !0, a.setInfo(e, i, t))
            })), this.rightInfoBoxItems.forEach((t => t.node.active = !1)), Object.keys(n).forEach(((e, i) => {
                const a = this.rightInfoBoxItems[i];
                u(a) && (a.node.active = !0, a.setInfo(e, n, t))
            }))
        }
        setInfoItem() {
            const {
                data: t,
                tournamentDetail: e
            } = this.model;
            _.rendertMttInfoItem(t, e, (t => {
                if (!u(this.itemCompList[t])) {
                    const e = c(this.infoItemPrefab);
                    e.parent = this.infoContentNode;
                    const i = e.getComponent(T);
                    this.itemCompList[t] = i, this.itemCompList[t].registerOnToggleCallback(this.onToggleOverlayButton)
                }
            }).bind(this), ((t, e) => {
                this.itemCompList[t].setInfo(t, e)
            }).bind(this))
        }
        onClickShowAllTargetEvent() {
            var t, e;
            null == (t = (e = this.mvcView).onClickShowAllTargetEvent) || t.call(e)
        }
        onClickTargetEventName() {
            var t;
            null != (t = this.model) && null != (t = t.data) && t.targetId && I.MessageCenter.send("showMttDetailLobbyV2FromDeepLink", this.model.data.targetId)
        }
    }).prototype, "targetEventNode", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(yt.prototype, "targetEventName", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(yt.prototype, "targetEventNameMaxSizeNode", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(yt.prototype, "targetEventNameMinSizeNode", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(yt.prototype, "targetEventsBtn", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(yt.prototype, "targetEventsBtnTxt", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(yt.prototype, "statusBg", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(yt.prototype, "statusBoxPrefab", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(yt.prototype, "statusBoxContainer", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = e(yt.prototype, "startTimeTxt", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(yt.prototype, "runningTimeTxt", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = e(yt.prototype, "buyInTxt", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(yt.prototype, "overlayIconNode", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(yt.prototype, "leftInfoBoxItems", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Lt = e(yt.prototype, "rightInfoBoxItems", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), At = e(yt.prototype, "gameClockTxt", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(yt.prototype, "curLevelTxt", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = e(yt.prototype, "nextBreakTxt", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(yt.prototype, "curBlindTxt", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(yt.prototype, "nextBlindTxt", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = e(yt.prototype, "smallStackNode", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(yt.prototype, "avgStackNode", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(yt.prototype, "largestStackNode", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $t = e(yt.prototype, "startingStackNode", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), jt = e(yt.prototype, "myStackNode", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Jt = e(yt.prototype, "smallestStackTxt", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Kt = e(yt.prototype, "avgStackTxt", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Wt = e(yt.prototype, "largestStackTxt", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yt = e(yt.prototype, "smallestStackBbTxt", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qt = e(yt.prototype, "avgStackBbTxt", [ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qt = e(yt.prototype, "largestStackBbTxt", [ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xt = e(yt.prototype, "startingStackTxt", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Zt = e(yt.prototype, "startingStackBbTxt", [mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = e(yt.prototype, "myStackTxt", [dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = e(yt.prototype, "myStackBbTxt", [gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = e(yt.prototype, "descriptionNode", [Tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = e(yt.prototype, "descriptionTxt", [bt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = e(yt.prototype, "infoItemPrefab", [St], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = e(yt.prototype, "infoContentNode", [ft], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = yt)) || pt));
    n._RF.pop()
}