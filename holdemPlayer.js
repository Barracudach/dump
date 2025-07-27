import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./mobx.cjs.production.min.mjs_cjs=&original=.js";
import * as n from "./Pb.js";
import * as a from "./soundEffect.js";
import * as l from "./cv.js";
import * as p from "./MultiWindowFocusManager.js";
import * as h from "./MultiWindowFocusManager.js";
import * as c from "./CrashTracing.js";

function main() {
    var u, b, d, y, m, f, g, w, C, O, S, v, P, k, A, N, T, D, I, B, z, R, j, U, L, E, F, H, _, W, M, x, G, V, J, K, X, Y, Z, q, Q, $, tt, et, it, ot, rt, st, nt, at, lt, ht, pt, ct, ut, bt, dt, yt, mt, ft, gt, wt, Ct, Ot, St, vt, Pt, kt, At, Nt, Tt, Dt, It, Bt, zt, Rt, jt, Ut, Lt, Et, Ft, Ht, _t, Wt, Mt, xt, Gt, Vt, Jt, Kt, Xt, Yt, Zt, qt, Qt, $t, te, ee, ie;
    o._RF.push({}, "feb61XCdJJMM6WUgzZY/cH+", "holdemPlayer", void 0);
    let oe = t("holdemPlayerStore", (u = c.observable, b = c.observable, d = c.observable, y = c.observable, m = c.observable, f = c.observable, g = c.observable, w = c.observable, C = c.observable, O = c.observable, S = c.observable, v = c.observable, P = c.observable, k = c.observable, A = c.observable, N = c.observable, T = c.observable, D = c.observable, I = c.observable, B = c.observable, z = c.observable, R = c.observable, j = c.observable, U = c.observable, L = c.observable, E = c.observable, F = c.observable, H = c.observable, _ = c.observable, W = c.observable, M = c.observable, x = c.observable, G = c.action, V = c.action, J = c.action, K = c.action, X = c.action, Y = c.action, Z = c.action, q = c.action, Q = c.action, $ = c.action, tt = c.action, et = c.action, it = c.action, ot = c.action, rt = c.action, st = c.action, nt = c.action, at = c.action, lt = c.action, ht = c.action, ct = e((pt = class {
        constructor(t, e) {
            this.room = void 0, this.seatNum = void 0, this.gender = void 0, this.timeBank = 0, i(this, "hasCards", ct, this), i(this, "cards", ut, this), i(this, "rankCards", bt, this), i(this, "userId", dt, this), i(this, "avatar", yt, this), i(this, "state", mt, this), this.lastState = s.holdem.PlayerState.NONE_STATE, i(this, "actualState", ft, this), this.hasFold = void 0, i(this, "nickName", gt, this), i(this, "leftCoin", wt, this), this.calcBB = 1, this.calcAnte = 1, i(this, "deskCoin", Ct, this), i(this, "countdownTtl", Ot, this), i(this, "countdownLeft", St, this), i(this, "buyTimeCount", vt, this), i(this, "minBetCoin", Pt, this), i(this, "rank", kt, this), i(this, "mttRank", At, this), i(this, "userRank", Nt, this), i(this, "isWinner", Tt, this), i(this, "isOut", Dt, this), i(this, "isSittingDown", It, this), i(this, "isAnimated", Bt, this), i(this, "isShowdown", zt, this), i(this, "stakeIcon", Rt, this), i(this, "coinBalance", jt, this), i(this, "getPot", Ut, this), i(this, "wins", Lt, this), i(this, "bounty", Et, this), i(this, "optAction", Ft, this), this.maxBetCoin = 0, this.needAnimation = !0, this.lastRaisePos = 0, this.isGameOver = !1, i(this, "isAutoPlay", Ht, this), i(this, "isSittingOut", _t, this), this.potsInfo = void 0, i(this, "isHaveAction", Wt, this), i(this, "visibleChecking", Mt, this), this.firstCardDelay = void 0, this.gapDelay = void 0, c.makeObservable(this), this.UpdatePlayer(t, e)
        }
        Reset() {
            101 !== this.state && (this.state = s.holdem.PlayerState.NONE_STATE), this.nickName = "", this.leftCoin = 0, this.deskCoin = 0, this.countdownLeft = 0, this.countdownTtl = 0, this.mttRank = 0, this.userRank = 0, this.isOut = !1, this.isAnimated = !1
        }
        OnBuyTime(t) {
            this.countdownLeft = t, this.countdownTtl = t, this.buyTimeCount++, this.setStateTimeBank()
        }
        setStateTimeBank() {
            this.lastState = this.state, this.state = 7
        }
        OnAction(t) {
            this.state = t.action, this.actualState = t.action, this.isHaveAction = !0, this.triggerVisibleChecking(), this.room.playerUserId == this.userId && !this.room.isReplay || this.actualState != s.holdem.Action.FOLD || (this.cards = [], this.hasCards = !1), this.leftCoin = t.leftCoin, this.deskCoin = t.deskCoin, this.SetHasFold()
        }
        triggerVisibleChecking() {
            this.visibleChecking = !this.visibleChecking
        }
        OnNewCards(t) {
            this.room.playerUserId != this.userId && this.actualState == s.holdem.Action.FOLD ? (this.cards = [], this.hasCards = !1) : (this.room.playerUserId != this.userId && null == t && (this.cards = []), this.hasCards = !0)
        }
        dealNewCards(t, e, i) {
            this.firstCardDelay = e, this.gapDelay = i, this.OnNewCards(t)
        }
        OnNeedAction(t, e, i, o) {
            var s, a, l;
            this.minBetCoin = t.minBetCoin, this.optAction = t.optAction, this.countdownLeft = i, this.countdownTtl = e, this.maxBetCoin = o, this.isHaveAction = !1, this.triggerVisibleChecking(), this.userId == this.room.playerUserId && (this.room && r(this.room.node) && this.room.node.audioPlayer.playEffect(n.PlayerTurn, this.room), h.StartSpan(p.MTTTimeBank)), null == (s = h.getInstance()) || s.stopSpan(p.UnderRaise), null == (a = h.getInstance()) || a.startSpan(p.UnderRaise), null == (l = h.getInstance()) || l.addEventToSpan(p.UnderRaise, "OnNeedAction", {
                minBetCoin: t.minBetCoin,
                maxBetCoin: o,
                optAction: t.optAction
            })
        }
        Showdown(t, e, i) {
            if (this.rank = e, this.hasCards = !0, this.room.playerUserId == this.userId && !this.room.isReplay || this.actualState != s.holdem.Action.FOLD) {
                const e = [];
                if (0 == this.cards.length) {
                    for (t.forEach((t => {
                            e.push(t)
                        })); e.length < this.room.maxHoleCard;) e.push(0);
                    this.cards = e
                }
                if (null != i) {
                    this.isShowdown = !0;
                    const t = [];
                    this.cards.forEach((e => {
                        t.push(-1 !== i.indexOf(e))
                    })), this.rankCards = t
                } else this.isShowdown = !1
            } else {
                if (t) {
                    let e = Array.from(t, (t => t));
                    for (; e.length < this.room.maxHoleCard;) e.push(0);
                    this.cards = e
                } else this.cards = [];
                this.hasCards = !1
            }
        }
        RoundResultProfit(t, e, i) {
            this.getPot = i, this.leftCoin = e, this.coinBalance = t, cc_mtt.vv.ConsoleLog.log("roundResultProfit.user:", this.nickName, ", coins:", t, ",seat:", this.seatNum), t > 1e-4 && (this.isWinner = !0)
        }
        PlayerIsOut(t, e = !1) {
            this.isOut = !0, this.isAnimated = t, this.isGameOver = e
        }
        PlayerIsBack() {
            this.isOut = !1, this.isAnimated = !1
        }
        SetUserRank(t) {
            cc_mtt.vv.ConsoleLog.log("userRank", t, this.userRank), this.userRank = t
        }
        Win(t, e) {
            cc_mtt.vv.ConsoleLog.log("Win.user:", this.nickName, ", coins:", t, ",seat:", this.seatNum), this.isWinner = !0, this.state = 999, this.coinBalance = t, this.leftCoin = e
        }
        Lose(t, e) {
            this.leftCoin = e, this.state = 0, t > 0 && (this.coinBalance = t)
        }
        NewTurn() {
            this.isHaveAction = !1, this.deskCoin = 0, cc_mtt.vv.ConsoleLog.log(this.userId, "stateChange: ", this.state), this.state != s.holdem.Action.FOLD && 20 != this.state && (this.state = s.holdem.Action.NONE_ACTION)
        }
        SetStakeIcon(t, e) {
            this.seatNum == t || this.seatNum == e ? (this.seatNum == t && (this.stakeIcon = 1), this.seatNum == e && (this.stakeIcon = 2)) : this.stakeIcon = 0
        }
        NewRound(t, e, i = 1, o = 1) {
            this.buyTimeCount = 0, this.deskCoin = t, this.leftCoin = e, this.calcBB = i, this.calcAnte = o, this.isHaveAction = !1, 101 !== this.state && (this.state = s.holdem.Action.NONE_ACTION), this.potsInfo = null
        }
        ClearTable() {
            cc_mtt.vv.ConsoleLog.log("CleatTable, user:", this.nickName, ",seat:", this.seatNum, this.state, this.actualState), this.rank = 0, this.coinBalance = 0, this.isShowdown = !1, this.cards = [], 101 !== this.state && 20 !== this.state && (this.state = 0, this.actualState = 0), this.rankCards = null, this.countdownTtl = 0, this.countdownLeft = 0, this.hasCards = !1, this.getPot = !1, this.SetHasFold(), this.isWinner = !1, this.isSittingDown = !1
        }
        SitDownAnimation() {
            this.isSittingDown = !0
        }
        UpdatePlayer(t, e) {
            !this.isOut || 0 == e.leftCoin && 0 == e.deskCoin && 6 != e.state || (cc_mtt.vv.ConsoleLog.log("reset Player isOut to false", this.isOut, e.leftCoin, e.deskCoin, e.state), this.isOut = !1), this.room = t, this.userId = e.userId, this.avatar = e.avatar, this.nickName = e.nickName, this.deskCoin = e.deskCoin, this.leftCoin = e.leftCoin, this.state = e.state, this.actualState = e.state, this.seatNum = e.seatNum, this.gender = e.gender, this.calcBB = t.calcBigBlind, this.calcAnte = t.ante, cc_mtt.vv.DataManager.webPlatform == s.commonProto.PLATFORM.PKW && (this.isAutoPlay = !!(1 & e.flags)), this.userId != this.room.playerUserId && this.actualState == s.holdem.Action.FOLD && (this.cards = [], this.hasCards = !1), this.SetHasFold()
        }
        SetHasFold() {
            this.state == s.holdem.Action.FOLD ? this.hasFold = !0 : this.hasFold = !1, cc_mtt.vv.ConsoleLog.log("SetHasFold", this.state, this.hasFold)
        }
    }).prototype, "hasCards", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), ut = e(pt.prototype, "cards", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), bt = e(pt.prototype, "rankCards", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), dt = e(pt.prototype, "userId", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), yt = e(pt.prototype, "avatar", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), mt = e(pt.prototype, "state", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return s.holdem.PlayerState.NONE_STATE
        }
    }), ft = e(pt.prototype, "actualState", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return s.holdem.PlayerState.NONE_STATE
        }
    }), gt = e(pt.prototype, "nickName", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), wt = e(pt.prototype, "leftCoin", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), Ct = e(pt.prototype, "deskCoin", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), Ot = e(pt.prototype, "countdownTtl", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), St = e(pt.prototype, "countdownLeft", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), vt = e(pt.prototype, "buyTimeCount", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), Pt = e(pt.prototype, "minBetCoin", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), kt = e(pt.prototype, "rank", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), At = e(pt.prototype, "mttRank", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), Nt = e(pt.prototype, "userRank", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), Tt = e(pt.prototype, "isWinner", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), Dt = e(pt.prototype, "isOut", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), It = e(pt.prototype, "isSittingDown", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), Bt = e(pt.prototype, "isAnimated", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), zt = e(pt.prototype, "isShowdown", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), Rt = e(pt.prototype, "stakeIcon", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), jt = e(pt.prototype, "coinBalance", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), Ut = e(pt.prototype, "getPot", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), Lt = e(pt.prototype, "wins", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), Et = e(pt.prototype, "bounty", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), Ft = e(pt.prototype, "optAction", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), Ht = e(pt.prototype, "isAutoPlay", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), _t = e(pt.prototype, "isSittingOut", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), Wt = e(pt.prototype, "isHaveAction", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), Mt = e(pt.prototype, "visibleChecking", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), e(pt.prototype, "Reset", [G], Object.getOwnPropertyDescriptor(pt.prototype, "Reset"), pt.prototype), e(pt.prototype, "OnBuyTime", [V], Object.getOwnPropertyDescriptor(pt.prototype, "OnBuyTime"), pt.prototype), e(pt.prototype, "OnAction", [J], Object.getOwnPropertyDescriptor(pt.prototype, "OnAction"), pt.prototype), e(pt.prototype, "OnNewCards", [K], Object.getOwnPropertyDescriptor(pt.prototype, "OnNewCards"), pt.prototype), e(pt.prototype, "dealNewCards", [X], Object.getOwnPropertyDescriptor(pt.prototype, "dealNewCards"), pt.prototype), e(pt.prototype, "OnNeedAction", [Y], Object.getOwnPropertyDescriptor(pt.prototype, "OnNeedAction"), pt.prototype), e(pt.prototype, "Showdown", [Z], Object.getOwnPropertyDescriptor(pt.prototype, "Showdown"), pt.prototype), e(pt.prototype, "RoundResultProfit", [q], Object.getOwnPropertyDescriptor(pt.prototype, "RoundResultProfit"), pt.prototype), e(pt.prototype, "PlayerIsOut", [Q], Object.getOwnPropertyDescriptor(pt.prototype, "PlayerIsOut"), pt.prototype), e(pt.prototype, "PlayerIsBack", [$], Object.getOwnPropertyDescriptor(pt.prototype, "PlayerIsBack"), pt.prototype), e(pt.prototype, "SetUserRank", [tt], Object.getOwnPropertyDescriptor(pt.prototype, "SetUserRank"), pt.prototype), e(pt.prototype, "Win", [et], Object.getOwnPropertyDescriptor(pt.prototype, "Win"), pt.prototype), e(pt.prototype, "Lose", [it], Object.getOwnPropertyDescriptor(pt.prototype, "Lose"), pt.prototype), e(pt.prototype, "NewTurn", [ot], Object.getOwnPropertyDescriptor(pt.prototype, "NewTurn"), pt.prototype), e(pt.prototype, "SetStakeIcon", [rt], Object.getOwnPropertyDescriptor(pt.prototype, "SetStakeIcon"), pt.prototype), e(pt.prototype, "NewRound", [st], Object.getOwnPropertyDescriptor(pt.prototype, "NewRound"), pt.prototype), e(pt.prototype, "ClearTable", [nt], Object.getOwnPropertyDescriptor(pt.prototype, "ClearTable"), pt.prototype), e(pt.prototype, "SitDownAnimation", [at], Object.getOwnPropertyDescriptor(pt.prototype, "SitDownAnimation"), pt.prototype), e(pt.prototype, "UpdatePlayer", [lt], Object.getOwnPropertyDescriptor(pt.prototype, "UpdatePlayer"), pt.prototype), e(pt.prototype, "SetHasFold", [ht], Object.getOwnPropertyDescriptor(pt.prototype, "SetHasFold"), pt.prototype), pt));
    t("holdemSelfStore", (xt = c.observable, Gt = c.observable, Vt = c.observable, Jt = c.action, Kt = c.action, Xt = c.action, Yt = c.action, Zt = c.action, qt = c.action, Qt = c.action, te = e(($t = class extends oe {
        constructor(t, e, o) {
            super(t, e), i(this, "optCoin", te, this), i(this, "showControl", ee, this), i(this, "snapshotShowCards", ie, this), c.makeObservable(this), this.UpdateCards(o), this.UpdateSnapshotShowCards(e.showCards)
        }
        OnNewCards(t) {
            if (this.room.playerUserId != this.userId && this.actualState == s.holdem.Action.FOLD) this.cards = [], this.hasCards = !1;
            else {
                const e = [];
                t && t.length && t.forEach((t => (e.push(t), null))), this.cards = e
            }
            super.OnNewCards(null)
        }
        OnNeedAction(t, e, i, o) {
            t.seatNum == this.seatNum && (this.optCoin = t.optCoin, this.optAction = t.optAction, this.showControl = !0, this.lastRaisePos = t.lastRaisePos, super.OnNeedAction(t, e, i, o), a.appConfig.getGeneralConfig().multiWindowEnabled && l.getInstance().startTurn(this.room.node.currentScene), a.MessageCenter.send("MTT_onStartMyTurn", this.room.roomId))
        }
        OnAction(t) {
            this.showControl = !1, super.OnAction(t), a.appConfig.getGeneralConfig().multiWindowEnabled && l.getInstance().endTurn(this.room.node.currentScene)
        }
        HideControl() {
            this.countdownTtl = 0, this.showControl = !1, a.appConfig.getGeneralConfig().multiWindowEnabled && l.getInstance().endTurn(this.room.node.currentScene)
        }
        OnBuyTime(t) {
            this.showControl = !0, super.OnBuyTime(t)
        }
        UpdateSelfPlayer(t, e, i) {
            super.UpdatePlayer(t, e), this.UpdateCards(i), this.UpdateSnapshotShowCards(e.showCards)
        }
        UpdateCards(t) {
            if (t && t.length) {
                for (this.hasCards = !0; this.cards.length > 0;) this.cards.pop();
                t.forEach((t => (this.cards.push(t), null)))
            } else this.cards = [], this.hasCards = !1
        }
        UpdateSnapshotShowCards(t) {
            t && (this.snapshotShowCards = [], t.forEach((t => {
                this.snapshotShowCards.push(t)
            })))
        }
    }).prototype, "optCoin", [xt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), ee = e($t.prototype, "showControl", [Gt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), ie = e($t.prototype, "snapshotShowCards", [Vt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), e($t.prototype, "OnNewCards", [Jt], Object.getOwnPropertyDescriptor($t.prototype, "OnNewCards"), $t.prototype), e($t.prototype, "OnNeedAction", [Kt], Object.getOwnPropertyDescriptor($t.prototype, "OnNeedAction"), $t.prototype), e($t.prototype, "OnAction", [Xt], Object.getOwnPropertyDescriptor($t.prototype, "OnAction"), $t.prototype), e($t.prototype, "HideControl", [Yt], Object.getOwnPropertyDescriptor($t.prototype, "HideControl"), $t.prototype), e($t.prototype, "OnBuyTime", [Zt], Object.getOwnPropertyDescriptor($t.prototype, "OnBuyTime"), $t.prototype), e($t.prototype, "UpdateSelfPlayer", [qt], Object.getOwnPropertyDescriptor($t.prototype, "UpdateSelfPlayer"), $t.prototype), e($t.prototype, "UpdateSnapshotShowCards", [Qt], Object.getOwnPropertyDescriptor($t.prototype, "UpdateSnapshotShowCards"), $t.prototype), $t));
    o._RF.pop()
}