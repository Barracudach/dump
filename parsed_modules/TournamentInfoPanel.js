import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as T from "./ColorSystemType.js";
import * as P from "./ColorSystemTypeOther.js";
import * as d from "./ThemeSystem.js";
import * as f from "./StringTools.js";
import * as g from "./CustomLocalizedLabel.js";
import * as z from "./FormatParser.js";
import * as b from "./cv.js";
import * as y from "./Pb.js";
import * as R from "./TextureinLabelsCalculation.js";
import * as S from "./TournamentInfoPanelDetail.js";
import * as C from "./Translator.js";

function main() {
    var I, L, k, D, M, N, v, w, x, _, E, F, G, O, U, A, W, H, K, Y, j, B, J, V, Z, q, X, $, Q, ee, te, ie, ne, re, ae, se, oe, le, he, ue, ce, me, pe, Te, Pe, de, fe, ge, ze, be, ye, Re, Se, Ce, Ie, Le, ke, De, Me, Ne, ve, we, xe, _e, Ee, Fe, Ge, Oe, Ue, Ae, We, He;
    n._RF.push({}, "effa8y6UzhDm43Ae/8E0j1k", "TournamentInfoPanel", void 0);
    const {
        ccclass: Ke,
        property: Ye
    } = l;
    let je = e("TournamentInfoPanelType", function(e) {
        return e[e.Grid_Small = 0] = "Grid_Small", e[e.Grid_Wide = 1] = "Grid_Wide", e[e.Grid_Wide_Special = 2] = "Grid_Wide_Special", e[e.List = 3] = "List", e
    }({}));
    e("default", (I = Ye(g), L = Ye(g), k = Ye(r), D = Ye(g), M = Ye(r), N = Ye(a), v = Ye(a), w = Ye(a), x = Ye(a), _ = Ye(a), E = Ye(s), F = Ye(s), G = Ye(s), O = Ye(a), U = Ye([d]), A = Ye([d]), W = Ye(s), H = Ye(a), K = Ye(a), Y = Ye(s), j = Ye(s), B = Ye(g), J = Ye(r), V = Ye(o), Z = Ye(o), q = Ye(o), X = Ye(o), $ = Ye(o), Q = Ye(o), ee = Ye(o), te = Ye(o), ie = Ye(R), ne = Ye(s), re = Ye(s), ae = Ye(S), Ke((le = t((oe = class extends h {
        constructor(...e) {
            super(...e), i(this, "lbLevel", le, this), i(this, "prizePoolTitle", he, this), i(this, "prizePoolIcon", ue, this), i(this, "lateRegisterTitle", ce, this), i(this, "lateRegisterIcon", me, this), i(this, "lbLevelTime", pe, this), i(this, "lbLateRegSec", Te, this), i(this, "lbPrize", Pe, this), i(this, "lbRank", de, this), i(this, "lbTotalEntries", fe, this), i(this, "prizePoolTicketReward", ge, this), i(this, "nextPrizeTicketReward", ze, this), i(this, "rankAvailable", be, this), i(this, "rankUnavailable", ye, this), i(this, "prizeThemeColor", Re, this), i(this, "lateRegThemeColor", Se, this), i(this, "nextRankNode", Ce, this), i(this, "lbNextRankNum", Ie, this), i(this, "lbNextRankUnit", Le, this), i(this, "lateRegisterContainer", ke, this), i(this, "myRankContainer", De, this), i(this, "myRankLabel", Me, this), i(this, "myRankIcon", Ne, this), i(this, "icFirstPrize", ve, this), i(this, "icLatReg", we, this), i(this, "icCurrentPrize", xe, this), i(this, "icNextPrize", _e, this), i(this, "icMyRank", Ee, this), i(this, "icInTheMoney", Fe, this), i(this, "icPrize", Ge, this), i(this, "icTotalEntries", Oe, this), i(this, "specialLabel", Ue, this), i(this, "leftGroup", Ae, this), i(this, "rightGroup", We, this), this.panelLayoutType = je.Grid_Small, i(this, "tournamentInfoPanelDetail", He, this), this.originalMyRankContainerParent = null, this.originalLateRegisterContainerParent = null, this.timeLeftSec = -1, this.currentPrize = void 0, this.firstPrize = void 0, this.nextPrize = void 0, this.firstPrizeHasTicketReward = void 0, this.prizeHasTicketReward = void 0, this.nextPrizeHasTicketReward = void 0, this.prizeCircle = void 0, this.rank = void 0, this.nextRank = void 0, this.playerCount = 0, this._initialized = !1, this.tourState = 32, this.levelStopSignUp = void 0, this.isStopSignup = !1, this.prizeList = void 0, this.exchangeRate = void 0, this.displayCurrency = void 0, this.isLateRegisterPhase = !1, this.isMultiFlightDay1 = !1, this.tournamentId = void 0, this.holdemStore = void 0, this.currentPrizeNum = 0, this.firstPrizeNum = 0, this.nextPrizeNum = 0
        }
        onLoad() {
            this.originalMyRankContainerParent = this.myRankContainer.parent, this.originalLateRegisterContainerParent = this.lateRegisterContainer.parent, b.MessageCenter.register(b.Enum.MessageCenterAction.onMttDetailUpdate, this.onUpdateMttDetail.bind(this), this.node), this.node.on(s.EventType.MOUSE_ENTER, this.onMouseEnter, this), this.node.on(s.EventType.MOUSE_LEAVE, this.onMouseLeave, this)
        }
        onMouseEnter() {
            this.unschedule(this.showTournamentPanelDetail), this.scheduleOnce(this.showTournamentPanelDetail, 3)
        }
        showTournamentPanelDetail() {
            this.unschedule(this.showTournamentPanelDetail), this.tournamentInfoPanelDetail.node.active = !0
        }
        onMouseLeave() {
            this.unschedule(this.showTournamentPanelDetail)
        }
        onDestroy() {
            b.MessageCenter.unregister(b.Enum.MessageCenterAction.onMttDetailUpdate, this.node), this.unschedule(this.showTournamentPanelDetail), this.tournamentInfoPanelDetail.destroy()
        }
        changeLayout(e) {
            if (this.panelLayoutType != e) {
                switch (e) {
                    case je.Grid_Small:
                        this.node.setContentSize(588, this.node.getContentSize().y);
                        break;
                    case je.Grid_Wide:
                    case je.Grid_Wide_Special:
                        this.node.setContentSize(852, this.node.getContentSize().y)
                }
                this.panelLayoutType != je.Grid_Wide_Special && e != je.Grid_Wide_Special || this.adjustGroups(e != je.Grid_Wide_Special), this.panelLayoutType = e, b.resMgr.adaptWidget(this.node, !0, !1)
            }
        }
        adjustGroups(e) {
            if (!u(this.leftGroup) || !u(this.rightGroup)) return;
            const t = this.leftGroup.getComponent(c),
                i = this.rightGroup.getComponent(c);
            t.right = e ? .5 : .6, i.left = e ? .5 : .4
        }
        init(e) {
            e && e.MTTDetail && (this.holdemStore = e, this.tournamentInfoPanelDetail.holdemStore = e, this.prizeList = e.prizeList, this.exchangeRate = e.exchangeRate, this.displayCurrency = e.displayCurrency, this.isMultiFlightDay1 = e.isMultiFlightDay1, this.setActive(!0), this.updateLateRegCountdown(Math.max(e.MTTDetail.TimeLeftSec, 0)), this.setPrizeCircle(Math.max(e.prizeCircle, 0)), this._initialized || this.setPlayerCount(e.MTTDetail.PlayingPlayersCount || 0), this.setTourState(e.roomSnapshotState), this.updateInfoPrize(e.prizeList, e.exchangeRate, e.displayCurrency), this.setTotalPrize(e.prizePool + e.bountyPool), this._initialized || this.setRank(e.MTTRank), this.levelStopSignUp = e.MTTDetail.LevelStopSignup, this._initialized || this.setLevel(e.MTTDetail.CurrentLevel), this._initialized = !0, this.rankUnavailable.string = e.MTTDetail.JoinedCount.toString(), this.startLateRegCountdown(!this.isPausing(e)), this.tournamentId = e.tournamentId, this.setStacks(e.MTTDetail.MinCoins, e.MTTDetail.AvgCoins, e.MTTDetail.MaxCoins), this.refreshPanel())
        }
        isPausing(e) {
            return !(!u(e) || !u(e.node)) && e.node.stopBlindTimeCounter
        }
        setLevel(e) {
            this.lbLevel.setPrefixAndSuffix("", ` ${e}`), this.isStopSignup = e >= this.levelStopSignUp, this.tournamentInfoPanelDetail.setLevel(e), this.refreshPanel()
        }
        setLevelTime(e) {
            this.lbLevelTime.string = e, this.tournamentInfoPanelDetail.setLevelTime(e), this.refreshPanel()
        }
        setLateRegSec(e) {
            const t = z.changeSecToTime(e);
            this.lbLateRegSec.string = t, this.tournamentInfoPanelDetail.setLateRegSec(e), this.refreshPanel()
        }
        setPrizeTool(e) {
            this.prizeHasTicketReward = e
        }
        setNextPrizeTool(e) {
            this.nextPrizeHasTicketReward = e
        }
        setFirstPrize(e) {
            this.firstPrize = e, this.refreshPanel()
        }
        setFirstPrizeTool(e) {
            this.firstPrizeHasTicketReward = e
        }
        setPrize(e) {
            this.currentPrize = e, this.refreshPanel()
        }
        setNextPrize(e) {
            this.nextPrize = e, this.refreshPanel()
        }
        setRank(e) {
            this.rank = e, this.lbRank.string = e.toString(), this.tournamentInfoPanelDetail.setMyRank(e), this.refreshPanel(), this.isLateRegisterPhase || (this.rankAvailable.active = e > 0, this.rankUnavailable.node.active = e <= 0)
        }
        setNextRank(e) {
            this.nextRank = e, this.refreshPanel()
        }
        setPrizeCircle(e) {
            this.prizeCircle = e, this.tournamentInfoPanelDetail.setPrizeCircle(e), this.refreshPanel()
        }
        switchUI(e) {
            const t = e ? this.originalMyRankContainerParent : this.originalLateRegisterContainerParent,
                i = e ? this.originalLateRegisterContainerParent : this.originalMyRankContainerParent;
            if (u(i) && u(t)) {
                this.myRankContainer.setParent(i), this.lateRegisterContainer.setParent(t);
                const e = this.myRankContainer.getPosition();
                this.myRankContainer.setPosition(0, e.y);
                const n = this.lateRegisterContainer.getPosition();
                this.lateRegisterContainer.setPosition(0, n.y), b.resMgr.adaptWidget(this.node, !0, !1)
            }
        }
        setPlayerCount(e) {
            this.playerCount = e, this.lbTotalEntries.string = e.toString(), this.tournamentInfoPanelDetail.setPlayNum(e), this.reUpdateInfoPrize(), this.refreshPanel()
        }
        setTourState(e) {
            this.tourState != e && (this.tourState = e, this.refreshPanel())
        }
        refreshPanel() {
            if (this.node.active = 32 != this.tourState, !this.node.active) return;
            const e = !this.isStopSignup;
            if (e !== this.isLateRegisterPhase && this.switchUI(e), this.nextRankNode.active = !1, this.isLateRegisterPhase = e, e) this.prizePoolTitle.dataID = "TOURNAMENT_INFO.FIRSTPRIZE", this.prizePoolIcon.spriteFrame = this.icFirstPrize, this.lateRegisterTitle.dataID = "TOURNAMENT_INFO.LATE_REGISTRATION", this.lateRegisterIcon.spriteFrame = this.icLatReg, this.lbPrize.string = this.firstPrize ? this.firstPrize.toString() + (this.firstPrizeHasTicketReward ? "+T" : "") : this.firstPrizeHasTicketReward ? C("PKWMTT.GAMELIST.TICKET") : "-", this.isMultiFlightDay1 && (this.lbPrize.string = "-"), this.setThemeColor(this.prizeThemeColor, T.Other, P.TournamentInfoYellow), this.setThemeColor(this.lateRegThemeColor, T.Other, P.WhiteCreamy), this.rankAvailable.active = !1, this.rankUnavailable.node.active = !0, this.myRankLabel.dataID = "TOURNAMENT_INFO.ENTRIES", this.myRankIcon.spriteFrame = this.icTotalEntries;
            else {
                if (this.playerCount && this.playerCount <= this.prizeCircle) {
                    if (this.prizePoolTitle.dataID = "TOURNAMENT_INFO.PRIZE", this.prizePoolIcon.spriteFrame = this.icPrize, this.rank && this.rank <= this.playerCount && this.playerCount > 1 ? (this.lateRegisterTitle.dataID = "TOURNAMENT_INFO.NEXT_PAYOUT", this.lateRegisterIcon.spriteFrame = this.icNextPrize) : (this.lateRegisterTitle.dataID = "TOURNAMENT_INFO.PAYOUT", this.lateRegisterIcon.spriteFrame = this.icCurrentPrize, this.nextRank = this.rank, this.nextPrize = this.currentPrize), this.lbPrize.string = this.currentPrize ? this.currentPrize.toString() + (this.prizeHasTicketReward ? "+T" : "") : this.prizeHasTicketReward ? C("PKWMTT.GAMELIST.TICKET") : "-", this.isMultiFlightDay1 && (this.lbPrize.string = "-"), this.isMultiFlightDay1) this.lbLateRegSec.string = "-";
                    else {
                        this.nextPrize ? this.lbLateRegSec.string = this.nextPrize.toString() + (this.nextPrizeHasTicketReward ? "+T" : "") : this.lbLateRegSec.string = this.nextPrizeHasTicketReward ? C("PKWMTT.GAMELIST.TICKET") : "-", this.lbNextRankNum.string = this.nextRank.toString();
                        let e = this.nextRank % 100;
                        const t = ["th", "st", "nd", "rd"];
                        this.lbNextRankUnit.string = t[(e - 20) % 10] || t[e] || t[0], this.nextRankNode.active = !0
                    }
                    this.setThemeColor(this.prizeThemeColor, T.Other, P.TournamentInfoGreen), this.setThemeColor(this.lateRegThemeColor, T.Other, P.TournamentInfoYellow), this.myRankLabel.dataID = "TOURNAMENT_INFO.MY_RANKING", this.myRankIcon.spriteFrame = this.icMyRank
                } else {
                    if (this.prizePoolTitle.dataID = "TOURNAMENT_INFO.FIRSTPRIZE", this.prizePoolIcon.spriteFrame = this.icFirstPrize, this.lateRegisterTitle.dataID = "TOURNAMENT_INFO.IN_THE_MONEY", this.lateRegisterIcon.spriteFrame = this.icInTheMoney, this.prizeCircle) {
                        const e = f.ScientificNotationWithFormat(this.prizeCircle);
                        this.lbLateRegSec.string = e
                    } else this.lbLateRegSec.string = "-";
                    this.lbPrize.string = this.firstPrize ? this.firstPrize.toString() + (this.firstPrizeHasTicketReward ? "+T" : "") : this.firstPrizeHasTicketReward ? C("PKWMTT.GAMELIST.TICKET") : "-", this.isMultiFlightDay1 && (this.lbPrize.string = "-"), this.setThemeColor(this.prizeThemeColor, T.Other, P.TournamentInfoYellow), this.setThemeColor(this.lateRegThemeColor, T.Other, P.WhiteCreamy), this.myRankLabel.dataID = "TOURNAMENT_INFO.MY_RANKING", this.myRankIcon.spriteFrame = this.icMyRank
                }
                this.rankAvailable.active = !0, this.rankUnavailable.node.active = !1
            }
        }
        getPanelLayoutType() {
            if (this.panelLayoutType == je.List) return this.panelLayoutType;
            const e = 1e5,
                t = 1e9;
            return this.currentPrizeNum >= t || this.firstPrizeNum >= t || this.nextPrizeNum >= t ? je.Grid_Wide_Special : this.currentPrizeNum >= e || this.firstPrizeNum >= e || this.nextPrizeNum >= e ? je.Grid_Wide : je.Grid_Small
        }
        setThemeColor(e, t, i) {
            e.forEach((e => {
                e.setColorScheme(t, i)
            }))
        }
        startLateRegCountdown(e) {
            this.unschedule(this.updateLateReg);
            let t = this.holdemStore && this.holdemStore.restMessage == y.mttPro.RestTime_Type.RestTime_Type_MIDFIELD;
            (e || t) && this.schedule(this.updateLateReg, 1, m.REPEAT_FOREVER)
        }
        updateLateRegCountdown(e) {
            this.timeLeftSec > 0 && e > this.timeLeftSec || (this.setLateRegSec(e), this.timeLeftSec = e)
        }
        updateLateReg() {
            this.timeLeftSec -= 1 / p.getScheduler().getTimeScale(), this.timeLeftSec >= 0 ? this.setLateRegSec(this.timeLeftSec) : this.timeLeftSec <= -10 && this.unschedule(this.updateLateReg)
        }
        reUpdateInfoPrize() {
            this.updateInfoPrize(this.prizeList, this.exchangeRate, this.displayCurrency)
        }
        updateInfoPrize(e, t, i) {
            if (!e || !t || !i) return;
            this.setPrizeList(e);
            const n = e[Object.keys(e).find((e => 1 === parseInt(e, 10)))];
            if (u(n)) {
                const e = void 0 !== n.tool && null !== n.tool;
                let r = "";
                z.DisplayGold(n.money) >= .01 ? (this.firstPrizeNum = n.money, r = z.ExchangeCurrency_ScientificNotation(n.money, t, i, i, 2, !0), this.setFirstPrize(r)) : this.setFirstPrize(""), this.setFirstPrizeTool(e), this.tournamentInfoPanelDetail.setFirstPrize(r, e)
            } else this.tournamentInfoPanelDetail.setFirstPrize("-", !1);
            const r = Math.max(this.playerCount, this.rank),
                a = e[Object.keys(e).find((e => parseInt(e, 10) === r))];
            if (a) {
                if (z.DisplayGold(a.money) >= .01) {
                    this.currentPrizeNum = a.money;
                    const e = z.ExchangeCurrency_ScientificNotation(a.money, t, i, i, 2, !0);
                    this.setPrize(e)
                } else this.setPrize("");
                const e = void 0 !== a.tool && null !== a.tool;
                this.setPrizeTool(e)
            }
            const s = e[1 === r ? r : Object.keys(e).reverse().find((e => parseInt(e, 10) < r))] ?? a;
            if (s) {
                const e = void 0 !== s.tool && null !== s.tool;
                let n = "";
                z.DisplayGold(s.money) >= .01 ? (this.nextPrizeNum = s.money, n = z.ExchangeCurrency_ScientificNotation(s.money, t, i, i, 2, !0), this.setNextPrize(n)) : this.setNextPrize(""), this.setNextPrizeTool(e), this.setNextRank(s.rank), this.tournamentInfoPanelDetail.setNextPrize(n, e)
            } else this.tournamentInfoPanelDetail.setNextPrize("-", !1)
        }
        setActive(e) {
            this && this.node && this.node.active != e && (this.node.active = e)
        }
        onUpdateMttDetail(e) {
            var t;
            if (cc_mtt.vv.ConsoleLog.log("onUpdateMttDetail:", null == e || null == (t = e.TournamentDetail) ? void 0 : t.TournamentId), e && e.TournamentDetail && this.holdemStore && this.holdemStore.MTTDetail && this.tournamentId == e.TournamentDetail.TournamentId) {
                const t = z.RoundToDecimal(e.TournamentDetail.GamePot, 2),
                    i = z.RoundToDecimal(e.TournamentDetail.BountyPot, 2);
                if (this.setTotalPrize(t + i), e.TournamentDetail.PrizeMoney && e.TournamentDetail.PrizeTools) {
                    let t = e.TournamentDetail.PrizeMoney.sort(((e, t) => e.Rank - t.Rank)),
                        i = e.TournamentDetail.PrizeTools;
                    this.holdemStore.updatePrizeList(t, i), this.updateInfoPrize(this.holdemStore.prizeList, this.holdemStore.exchangeRate, this.holdemStore.displayCurrency)
                }
                this.setPrizeCircle(e.TournamentDetail.InTheMoney), this.holdemStore.MTTDetail.MultiFlightLevel = e.TournamentDetail.MultiFlightLevel, this.holdemStore.MTTDetail.MFJoinedCount = e.TournamentDetail.MFJoinedCount, this.holdemStore.MTTDetail.JoinedCount = e.TournamentDetail.JoinedCount, this.setPlayerCount(e.TournamentDetail.PlayingPlayersCount), this.init(this.holdemStore), this.holdemStore.requestRealTimeRecord()
            }
        }
        setTotalPrize(e) {
            var t;
            null == (t = this.tournamentInfoPanelDetail) || t.setTotalPrize(e)
        }
        setStacks(e, t, i) {
            var n;
            null == (n = this.tournamentInfoPanelDetail) || n.setStacks(e, t, i)
        }
        setPrizeList(e) {
            this.tournamentInfoPanelDetail.setPrizeList(e)
        }
        onChangedBBGameplaySetting() {
            this.tournamentInfoPanelDetail.updateStacksInfo()
        }
    }).prototype, "lbLevel", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = t(oe.prototype, "prizePoolTitle", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = t(oe.prototype, "prizePoolIcon", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = t(oe.prototype, "lateRegisterTitle", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = t(oe.prototype, "lateRegisterIcon", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = t(oe.prototype, "lbLevelTime", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Te = t(oe.prototype, "lbLateRegSec", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pe = t(oe.prototype, "lbPrize", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = t(oe.prototype, "lbRank", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fe = t(oe.prototype, "lbTotalEntries", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = t(oe.prototype, "prizePoolTicketReward", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ze = t(oe.prototype, "nextPrizeTicketReward", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), be = t(oe.prototype, "rankAvailable", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ye = t(oe.prototype, "rankUnavailable", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Re = t(oe.prototype, "prizeThemeColor", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Se = t(oe.prototype, "lateRegThemeColor", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Ce = t(oe.prototype, "nextRankNode", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ie = t(oe.prototype, "lbNextRankNum", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Le = t(oe.prototype, "lbNextRankUnit", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ke = t(oe.prototype, "lateRegisterContainer", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), De = t(oe.prototype, "myRankContainer", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Me = t(oe.prototype, "myRankLabel", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ne = t(oe.prototype, "myRankIcon", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ve = t(oe.prototype, "icFirstPrize", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), we = t(oe.prototype, "icLatReg", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xe = t(oe.prototype, "icCurrentPrize", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _e = t(oe.prototype, "icNextPrize", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ee = t(oe.prototype, "icMyRank", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Fe = t(oe.prototype, "icInTheMoney", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ge = t(oe.prototype, "icPrize", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Oe = t(oe.prototype, "icTotalEntries", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ue = t(oe.prototype, "specialLabel", [ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ae = t(oe.prototype, "leftGroup", [ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), We = t(oe.prototype, "rightGroup", [re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), He = t(oe.prototype, "tournamentInfoPanelDetail", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = oe)) || se));
    n._RF.pop()
}