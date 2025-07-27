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
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as N from "./FormatParser.js";
import * as b from "./Pb.js";
import * as f from "./Translator.js";
import * as M from "./cv.js";
import * as T from "./Enum.js";
import * as _ from "./Enum.js";
import * as R from "./CommonTools.js";
import * as w from "./TweenControl.js";
import * as D from "./LocalizationController.js";
import * as v from "./LocalizationEvents.js";
import * as C from "./MttItemRenderHelper.js";

function main() {
    var k, F, L, I, S, O, A, G, P, E, z, B, K, V, x, U, H, W, $, j, J, Z, q, Y, Q, X, tt, et, it, at, nt, rt, ot, lt, st, ut, ht, mt, ct, yt, dt, gt, pt, Nt, bt, ft, Mt, Tt, _t, Rt, wt, Dt, vt, Ct, kt, Ft, Lt, It, St, Ot, At, Gt, Pt, Et, zt, Bt, Kt, Vt, xt, Ut, Ht, Wt, $t, jt, Jt, Zt, qt, Yt, Qt, Xt, te, ee, ie, ae;
    a._RF.push({}, "2c643qRtmpLBop18IZOhj7l", "GameOverWindow", void 0);
    const {
        ccclass: ne,
        property: re
    } = s;
    t("REWARD_ICON", function(t) {
        return t[t.Default = 0] = "Default", t[t.Chips = 1] = "Chips", t[t.Chips_Ticket = 2] = "Chips_Ticket", t[t.Ticket = 3] = "Ticket", t[t.None = 4] = "None", t
    }({}));
    t("GameOverWindow", (k = re(n), F = re(r), L = re(n), I = re(r), S = re(r), O = re(r), A = re(n), G = re(n), P = re(r), E = re(r), z = re(n), B = re(r), K = re(o), V = re([l]), x = re(o), U = re(l), H = re(r), W = re(o), $ = re([o]), j = re(r), J = re(r), Z = re(n), q = re(n), Y = re(n), Q = re(n), X = re(r), tt = re(r), et = re(r), it = re(n), at = re(n), nt = re(n), rt = re(r), ot = re(r), lt = re(n), st = re(n), ut = re(r), ht = re(n), mt = re(r), ct = re(n), yt = re(r), dt = re(n), ne((Nt = e((pt = class extends u {
        constructor(...t) {
            super(...t), i(this, "panelNoMoney", Nt, this), i(this, "gameNameNoMoney", bt, this), i(this, "multiFlightCongratsNoMoney", ft, this), i(this, "multiFlightDateNoMoney", Mt, this), i(this, "multiFlightNameNoMoney", Tt, this), i(this, "rankResultNoMoney", _t, this), i(this, "rankNodeNoMoney", Rt, this), i(this, "notDeterminedNoMoney", wt, this), i(this, "rankNumNoMoney", Dt, this), i(this, "rankNumNextLineNoMoney", vt, this), i(this, "panelInMoney", Ct, this), i(this, "gamePlayTime", kt, this), i(this, "rewardBg", Ft, this), i(this, "rewardBgList", Lt, this), i(this, "profilePicture", It, this), i(this, "defaultProfile", St, this), i(this, "playerName", Ot, this), i(this, "playerNationalFlag", At, this), i(this, "playerCards", Gt, this), i(this, "gameDate", Pt, this), i(this, "gameNameInMoney", Et, this), i(this, "rankNodeInMoney", zt, this), i(this, "rankBgLight", Bt, this), i(this, "rankBgDark", Kt, this), i(this, "notDeterminedInMoney", Vt, this), i(this, "rankNumInMoney", xt, this), i(this, "rankNumJoinedInMoney", Ut, this), i(this, "rewardCongrats", Ht, this), i(this, "totalRewardRootNode", Wt, this), i(this, "totalRewardTool", $t, this), i(this, "totalRewardAdd", jt, this), i(this, "totalReward", Jt, this), i(this, "totalRewardDecimal", Zt, this), i(this, "detailPayoutBountyNode", qt, this), i(this, "detailPayoutNode", Yt, this), i(this, "detailPayout", Qt, this), i(this, "detailBountyNode", Xt, this), i(this, "detailBounty", te, this), i(this, "detailToolNode", ee, this), i(this, "detailTool", ie, this), i(this, "multiDayCongrats", ae, this), this.currencyType = T.GOLDCOIN, this.displayCurrencyType = T.GOLDCOIN, this._congratsStrKey = "", this._rankResultNoMoneyKey = "", this._gameNameKey = "", this._rankLabelKey = "", this._multiFlightDateNoMoneyKey = "", this._startDate = null, this._multiFlightDate = "", this._multiFlightTime = "", this._multiFlightTimeZone = "", this._multiFlightNextTournamentTime = "", this.closeCallback = void 0
        }
        onLoad() {
            D.getObserver().subscribe(v.CHANGE_LANGUAGE, this.updateLabel, this)
        }
        onCloseClicked() {
            cc_mtt.vv.ConsoleLog.log("onCloseClicked");
            w.scaleAndFade(this.node, .2, h(m.ZERO), 0, c.quartInOut), this.node.destroy(), this.closeCallback && this.closeCallback instanceof Function && this.closeCallback()
        }
        callGameOverWindow(t, e, i) {
            var a, n, r;
            let o = t.rank,
                l = null == (a = e.MTTDetail) ? void 0 : a.IsSatelliteMode,
                s = t.duration,
                u = e.MTTDetail.StartingTime,
                h = e.joinedCount > 0 ? e.joinedCount : null == (n = e.MTTDetail) ? void 0 : n.JoinedCount,
                m = null == (r = e.MTTDetail) ? void 0 : r.Status,
                c = e.isMultiFlightDay1,
                d = cc_mtt.vv.DataManager.i18DataFromServer(t.mttName, t.mttNameI18N),
                g = t.rewardType,
                p = e.isFixPrize,
                f = t.bounty,
                M = t.reward;
            this.currencyType = e.getCurrencyType(), this.displayCurrencyType = e.displayCurrency;
            let T = cc_mtt.vv.DataManager.i18DataFromServer(t.toolName, t.toolNameI18n),
                _ = 0;
            if (null != t.toolValue && t.toolValue > 0) {
                let i = e.displayCurrency;
                if (t.toolCurrency != e.displayCurrency) {
                    let a = "GOLD" == t.toolCurrency ? e.exchangeRate : e.getCurrencyRate(i);
                    _ = N.ExchangeCurrency(t.toolValue, a, i)
                } else _ = t.toolValue
            }
            null == M && (M = 0), null == f && (f = 0), p || (M -= _);
            let R = null != f && f > 0,
                w = _ > 0,
                D = null != M && M >= .01,
                v = !1;
            c && g == b.mttPro.Rank_Type.Rank_Type_Final && t.mttFinalName && t.mttFinalNameI18N && t.mttFinalStartTime && (v = !0), y("callGameOverWindow->mttPro.mttPro.RewardMsg:", JSON.stringify(t)), y("callGameOverWindow->holdemRoomStore:", "isSatelliteMode:" + l, "joinedCount:" + h, "mttStatus:" + m, "isMultiFlightDay1:" + c, "isFixPrize:" + p, "currencyType:" + this.currencyType, "displayCurrencyType:" + this.displayCurrencyType, "gameStartTime:" + u, "enterDay2:" + v), y("reward option:", "payout:" + M, "bounty:" + f, "toolValue:" + _, "hsaPayout" + D, "hasBounty:" + R, "hasTool:" + w), o < 0 || (this.resetDisplay(), D || R || w || v ? (this.setPanel(!0), this.setPlayTime(s), this.setGameNameLabel(d), this.setRewardBg(o, D, R, w, g, l, c), this.setPlayerInfo(t.holeCards, o, c), this.setGameDate(u), this.setRankInfo(o, h, g), this.setTotalRewardInfo(M + f, t.coinLeft, v, l, D, R, w), this.setDetailReward(M, f, T, D, R, w)) : (this.setPanel(!1), this.setGameNameLabel(d), this.setNoMoneyInfo(t, g, m, c, h)), this.closeCallback = i)
        }
        resetDisplay() {
            this.rankResultNoMoney.node.active = !1, this.multiFlightCongratsNoMoney.active = !1, this.notDeterminedNoMoney.active = !1, this.rankNodeNoMoney.active = !1, this.rankNumNextLineNoMoney.node.active = !1, this.rankNodeInMoney.active = !1, this.notDeterminedInMoney.active = !1, this.totalRewardTool.active = !1, this.totalRewardAdd.active = !1, this.totalReward.node.active = !1, this.totalRewardDecimal.node.active = !1, this.detailPayoutNode.active = !1, this.detailBountyNode.active = !1, this.detailToolNode.active = !1, this.detailPayoutBountyNode.active = !1, this.multiDayCongrats.active = !1
        }
        setPanel(t) {
            t ? (this.panelNoMoney.active = !1, this.panelInMoney.active = !0) : (this.panelNoMoney.active = !0, this.panelInMoney.active = !1)
        }
        setPlayTime(t) {
            this.gamePlayTime.string = N.changeSecToTime(t, "hhmmss")
        }
        setGameNameLabel(t) {
            this.gameNameInMoney.string = t, this.gameNameNoMoney.string = t
        }
        setRewardBg(t, e, i, a, n, r, o) {
            r || o ? this.rewardBg.spriteFrame = a ? this.rewardBgList[2] : this.rewardBgList[3] : 1 != t || !e && !i ? n != b.mttPro.Rank_Type.Rank_Type_Not_Determined ? this.rewardBg.spriteFrame = e || i || !a ? this.rewardBgList[1] : this.rewardBgList[2] : this.rewardBg.spriteFrame = this.rewardBgList[3] : this.rewardBg.spriteFrame = this.rewardBgList[0]
        }
        setPlayerInfo(t, e, i) {
            y("callGameOverWindow->setPlayerInfo:", JSON.stringify(t)), this.playerName.string = cc_mtt.vv.DataManager.userData.Nickname;
            const a = cc_mtt.vv.DataManager.userData.AreaCode,
                n = cc_mtt.vv.DataManager.userData.Area;
            this.playerNationalFlag.node.active = !1, C.getNationFlag(a, n).then((t => {
                y("Load flag success", a, n), this.playerNationalFlag.spriteFrame = t, this.playerNationalFlag.node.active = !0
            })).catch((() => {
                y("Load flag failure", a, n), this.playerNationalFlag.node.active = !1
            }));
            let r = cc_mtt.vv.DataManager.avatarId;
            if (cc_mtt.vv.AssetsManager.loadWebImage(this.profilePicture, r, this.defaultProfile, (t => {
                    this.profilePicture.spriteFrame = new l, this.profilePicture.spriteFrame.texture = t
                }), null, 4, !1), 1 == e && !i && t && t.length >= 2)
                for (let e = 0; e < this.playerCards.length; e++) {
                    let i = t[e];
                    const a = this.playerCards[e];
                    M.resMgr.loadCardFront(0, this.getCardSuitFromCardId(i), this.getCardNumberFromCardId(i), [a])
                }
        }
        setGameDate(t) {
            this._startDate = t;
            let e = new Date(t),
                [i, a, n] = this.handleDateLabel(e),
                [r, o] = this.handleTimeLabel(e);
            "00" != a && (a = f(`Month${a}`)), this.gameDate.string = `${a} ${n}, ${r}:${o}, ${i}`
        }
        setRankInfo(t, e, i) {
            i == b.mttPro.Rank_Type.Rank_Type_Not_Determined ? this.notDeterminedInMoney.active = !0 : (this.rankNodeInMoney.active = !0, this.rankNumInMoney.string = `${t} `, this.rankNumJoinedInMoney.string = `/ ${e}`), this.rankBgLight.active = 1 == t, this.rankBgDark.active = 1 != t
        }
        setTotalRewardInfo(t, e, i, a, n, r, o) {
            let l = "";
            if (i) l = "GAME_OVER.CONGRATULATIONS_MULITIDAY", this.totalReward.string = N.ThousandPointFormat(e), this.totalReward.node.active = !0, this.multiDayCongrats.active = !0;
            else if (n || r || !o) {
                l = "GAME_OVER.CONGRATULATIONS";
                let e = this.getRewardStr(t),
                    [i, n] = this.handleDecimalSplit(e);
                "" != i && (this.totalReward.string = i, this.totalReward.node.active = !0), "" != n && (this.totalRewardDecimal.string = n, this.totalRewardDecimal.node.active = !0), a && o && (this.totalRewardTool.active = !0, this.totalRewardAdd.active = !0)
            } else l = "GAME_OVER.CONGRATULATIONS", this.totalRewardTool.active = !0;
            R.instance.updateRenderData(this.totalReward), R.instance.updateRenderData(this.totalRewardDecimal), this.totalRewardRootNode.getComponent(d).updateLayout(), this.scheduleOnce((() => {
                let t = this.totalRewardRootNode.getContentSize().width;
                t >= 882 && this.totalRewardRootNode.setScale(new m(882 / t, 882 / t, 882 / t))
            }), 0), this._congratsStrKey = l, this.rewardCongrats.string = f(l).toUpperCase()
        }
        setDetailReward(t, e, i, a, n, r) {
            if (a) {
                this.detailPayoutNode.active = !0;
                let e = this.getRewardStr(t);
                this.detailPayout.string = e
            }
            if (n) {
                this.detailBountyNode.active = !0;
                let t = this.getRewardStr(e);
                this.detailBounty.string = t
            }
            r && (this.detailToolNode.active = !0, this.detailTool.string = i);
            let o = M.appConfig.isLandscapeLayout ? 1045 : 882;
            this.detailPayoutBountyNode.active = a || n, a && !n && r && this.detailPayoutNode.getComponent(g).setContentSize(o, 150), !a && n && r && this.detailBountyNode.getComponent(g).setContentSize(o, 150)
        }
        handleDecimalSplit(t) {
            let e = t.split("."),
                i = "",
                a = "";
            return e.length > 1 ? (i = e[0], a = "." + e[1]) : i = e[0], [i, a]
        }
        handleTimeLabel(t) {
            if (!t) return ["00", "00", "00"];
            return [t.getHours() < 10 ? "0" + t.getHours() : t.getHours().toString(), t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes().toString(), t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds().toString()]
        }
        handleDateLabel(t) {
            if (!t) return ["0000", "00", "00"];
            return [t.getFullYear().toString(), (t.getMonth() + 1).toString(), t.getDate() < 10 ? "0" + t.getDate() : t.getDate().toString()]
        }
        getFullAreaCode(t) {
            let e = t.split("+").pop();
            if ("" == e) return t;
            for (let t = 0; t < 238; t++) {
                let i = M.config.getStringData("areaCode" + t).split(",").pop(),
                    a = i.split("*").pop();
                if ("" != a && a == e) return i.replace("*", "+")
            }
            return t
        }
        getCardNumberFromCardId(t) {
            return t >= 130 ? t - 130 : t >= 66 ? t - 66 : t >= 34 ? t - 34 : t >= 18 ? t - 18 : 0
        }
        getCardSuitFromCardId(t) {
            return t >= 130 ? _.CARD_SPADE : t >= 66 ? _.CARD_HEART : t >= 34 ? _.CARD_CLUB : t >= 18 ? _.CARD_DIAMOND : 0
        }
        setNoMoneyInfo(t, e, i, a, n) {
            if (e == b.mttPro.Rank_Type.Rank_Type_Not_Determined) this._rankResultNoMoneyKey = "GAME_OVER.ELIMILATE_MSG", this.rankResultNoMoney.string = f("GAME_OVER.ELIMILATE_MSG"), this.rankResultNoMoney.node.active = !0, i == b.commonProto.MTT_GAME_STATUS.STOP_SIGNUP ? (this.setRankingLabel(t.rank.toString() + "/" + n.toString()), this.rankNodeNoMoney.active = !0) : this.notDeterminedNoMoney.active = !0;
            else if (e == b.mttPro.Rank_Type.Rank_Type_Final) {
                this._gameNameKey = "RED_POCKET.CONGREGATION";
                let e = f("RED_POCKET.CONGREGATION") + "!";
                if (this.setGameNameLabel(e), t.mttFinalName && t.mttFinalNameI18N && t.mttFinalStartTime) {
                    let e = cc_mtt.vv.DataManager.i18DataFromServer(t.mttFinalName, t.mttFinalNameI18N),
                        i = 1e3 * t.mttFinalStartTime,
                        a = "GMT" + M.config.tryGetTimeZoneAbbreviation(),
                        n = i - cc_mtt.vv.DataManager.getNow();
                    n < 0 && (n = 0);
                    let r = M.StringTools.formatTime(n, M.Enum.eTimeType.Day_Hour_Min, !0),
                        o = M.StringTools.formatTime(i, M.Enum.eTimeType.WD_MMM_DDD, !0),
                        l = M.StringTools.formatTime(i, M.Enum.eTimeType.Hour_Minute, !0);
                    this._multiFlightDateNoMoneyKey = "GAME_OVER.GO_TO_FINAL_2", this.multiFlightDateNoMoney.string = p.formatStr(f("GAME_OVER.GO_TO_FINAL_2"), o, l, a, r), this.setMultiFlightDate(o, l, a, r), this.multiFlightNameNoMoney.string = e, this.multiFlightCongratsNoMoney.active = !0
                } else this._rankResultNoMoneyKey = "GAME_OVER.GO_TO_FINAL", this.rankResultNoMoney.string = f("GAME_OVER.GO_TO_FINAL"), this.rankResultNoMoney.node.active = !0
            } else this._rankResultNoMoneyKey = "GAME_OVER.ELIMILATE_MSG", this.rankResultNoMoney.string = f("GAME_OVER.ELIMILATE_MSG"), this.rankResultNoMoney.node.active = !0, a ? (this._rankLabelKey = "GAME_OVER.NO_RANK", this.setRankingLabel(f("GAME_OVER.NO_RANK"))) : this.setRankingLabel(t.rank.toString() + "/" + n.toString()), this.rankNodeNoMoney.active = !0
        }
        setRankingLabel(t) {
            this.rankNumInMoney.string = t, this.rankNumNoMoney.string = t, t && t.length > 10 ? (this.rankNumNextLineNoMoney.string = t, this.rankNumNoMoney.node.active = !1, this.rankNumNextLineNoMoney.node.active = !0) : (this.rankNumNoMoney.node.active = !0, this.rankNumNextLineNoMoney.node.active = !1)
        }
        getRewardStr(t) {
            return `${N.GetCurrencySign(this.displayCurrencyType)}${N.ThousandPointFormat(N.DisplayGold(t))}`
        }
        updateLabel() {
            this._congratsStrKey && (this.rewardCongrats.string = f(this._congratsStrKey).toUpperCase()), this._rankResultNoMoneyKey && (this.rankResultNoMoney.string = f(this._rankResultNoMoneyKey)), this._gameNameKey && this.setGameNameLabel(f(this._gameNameKey) + "!"), this._rankLabelKey && this.setRankingLabel(f(this._rankLabelKey)), this._multiFlightDateNoMoneyKey && (this.multiFlightDateNoMoney.string = p.formatStr(f(this._multiFlightDateNoMoneyKey), this._multiFlightDate, this._multiFlightTime, this._multiFlightTimeZone, this._multiFlightNextTournamentTime)), this._startDate && this.setGameDate(this._startDate)
        }
        setMultiFlightDate(t, e, i, a) {
            this._multiFlightDate = t, this._multiFlightTime = e, this._multiFlightTimeZone = i, this._multiFlightNextTournamentTime = a
        }
    }).prototype, "panelNoMoney", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(pt.prototype, "gameNameNoMoney", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(pt.prototype, "multiFlightCongratsNoMoney", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(pt.prototype, "multiFlightDateNoMoney", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(pt.prototype, "multiFlightNameNoMoney", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(pt.prototype, "rankResultNoMoney", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(pt.prototype, "rankNodeNoMoney", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(pt.prototype, "notDeterminedNoMoney", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(pt.prototype, "rankNumNoMoney", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(pt.prototype, "rankNumNextLineNoMoney", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(pt.prototype, "panelInMoney", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(pt.prototype, "gamePlayTime", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = e(pt.prototype, "rewardBg", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(pt.prototype, "rewardBgList", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), It = e(pt.prototype, "profilePicture", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(pt.prototype, "defaultProfile", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = e(pt.prototype, "playerName", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = e(pt.prototype, "playerNationalFlag", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(pt.prototype, "playerCards", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Pt = e(pt.prototype, "gameDate", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = e(pt.prototype, "gameNameInMoney", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = e(pt.prototype, "rankNodeInMoney", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(pt.prototype, "rankBgLight", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Kt = e(pt.prototype, "rankBgDark", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(pt.prototype, "notDeterminedInMoney", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xt = e(pt.prototype, "rankNumInMoney", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = e(pt.prototype, "rankNumJoinedInMoney", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ht = e(pt.prototype, "rewardCongrats", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Wt = e(pt.prototype, "totalRewardRootNode", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $t = e(pt.prototype, "totalRewardTool", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), jt = e(pt.prototype, "totalRewardAdd", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Jt = e(pt.prototype, "totalReward", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Zt = e(pt.prototype, "totalRewardDecimal", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qt = e(pt.prototype, "detailPayoutBountyNode", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Yt = e(pt.prototype, "detailPayoutNode", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qt = e(pt.prototype, "detailPayout", [ut], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xt = e(pt.prototype, "detailBountyNode", [ht], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = e(pt.prototype, "detailBounty", [mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = e(pt.prototype, "detailToolNode", [ct], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = e(pt.prototype, "detailTool", [yt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = e(pt.prototype, "multiDayCongrats", [dt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = pt)) || gt));
    a._RF.pop()
}