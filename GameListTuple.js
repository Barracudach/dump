import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./ImpokerHall.js";
import * as S from "./mttconfig.js";
import * as E from "./NodePage.js";
import * as I from "./Pb.js";
import * as p from "./Translator.js";
import * as L from "./CommonTools.js";
import * as g from "./CurrencyValue.js";
import * as A from "./cv.js";
import * as f from "./SignUpBoxProperty.js";
import * as M from "./FormatParser.js";
import * as P from "./ThemeSystem.js";
import * as R from "./ColorSystemType.js";
import * as N from "./ColorSystemTypeOther.js";
import * as G from "./EventCustom.js";

function main() {
    var O, b, w, D, d, C, y, U, v, k, V, F, B, H, z, J, x, X, Y, K, Q, $, W, q, j, Z, tt, et, it, ot, at, st, nt, rt, lt, ht, ut, Tt, mt, _t;
    o._RF.push({}, "ec813QmArpPVK7lKWgln0TG", "GameListTuple", void 0);
    const {
        ccclass: ct,
        property: St
    } = r, Et = a({
        PP_GEN: 0,
        PP_LOOP: 1,
        PP_COWBOY: 2,
        SNG: 3,
        AOF: 4,
        MTT: 5,
        MTT_HUNTER: 6,
        MTT_SUPER_HUNTER: 7
    });
    t("GameListTuple", (O = St([s]), b = St(s), w = St(s), D = St(n), d = St(n), C = St(n), y = St(n), U = St(n), v = St(g), k = St(n), V = St(n), F = St(n), B = St(n), H = St(n), z = St(n), J = St(n), x = St(n), X = St(s), Y = St(s), ct(($ = e((Q = class extends l {
        constructor(...t) {
            super(...t), i(this, "gameIcon", $, this), i(this, "quickTag", W, this), i(this, "signUpTag", q, this), i(this, "roomName", j, this), i(this, "gameTag1", Z, this), i(this, "gameTag2", tt, this), i(this, "feeLabel", et, this), i(this, "feeNum", it, this), i(this, "feeCurrVal", ot, this), i(this, "peopleNum", at, this), i(this, "anteNum", st, this), i(this, "roomStatusBottom", nt, this), i(this, "gameStartDate", rt, this), i(this, "roomStatusRight", lt, this), i(this, "remainTime", ht, this), i(this, "customStatusLabel", ut, this), i(this, "remark", Tt, this), i(this, "AIPTLogo", mt, this), i(this, "SatelliteLogo", _t, this), this._tupleInfo = null, this._tupleId = 0, this._gameId = 0, this.timeInterval = 1, this._timeUpdate = 0, this.parentPage = null, this._mttPrefab = null, this.convertCurrency = !1
        }
        get _hallScript() {
            return c.instance
        }
        get lastCallGetLevelListTime() {
            return this._mttPrefab ? this._mttPrefab.lastCallGetLevelListTime : 0
        }
        get timeDiffFromLastCallGameLevelList() {
            return Math.floor((cc_mtt.vv.DataManager.getNow().getTime() - this.lastCallGetLevelListTime) / 1e3)
        }
        get duration() {
            return this._tupleInfo ? Math.max(0, this._tupleInfo.Detail.Status > 100 ? this._tupleInfo.Duration : this._tupleInfo.Duration + this.timeDiffFromLastCallGameLevelList) : 0
        }
        onLoad() {}
        start() {}
        updateInfo(t, e, i, o = !1) {
            switch (this._tupleInfo = t, null != i && (this._tupleId = i), this._gameId = e, this.convertCurrency = !0 === o, this.node.getComponent(h).color = this._tupleId % 2 == 0 ? (new u).fromHEX("#303241") : (new u).fromHEX("#37394B"), e) {
                case S.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL:
                case S.GAME_LEVEL_LIST_ID.PINEAPPLE_ROLL:
                    this.updateInfoPP(), this.parentPage = this._hallScript._pinePage;
                    break;
                case S.GAME_LEVEL_LIST_ID.SNG:
                case S.GAME_LEVEL_LIST_ID.AOF:
                    this.updateInfoSNG(), this.parentPage = this._hallScript._sngPage;
                    break;
                case S.GAME_LEVEL_LIST_ID.MTT:
                    this.updateInfoMTT(), this.parentPage = this._hallScript._mttPage
            }
        }
        updateCardEntrants(t) {
            let e = this._tupleInfo.Detail;
            switch (t) {
                case S.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL:
                    this.peopleNum.string = this._tupleInfo.Joined + "/" + this._tupleInfo.Players;
                    break;
                case S.GAME_LEVEL_LIST_ID.PINEAPPLE_ROLL:
                    this.peopleNum.string = this._tupleInfo.Joined.toString();
                    break;
                case S.GAME_LEVEL_LIST_ID.SNG:
                case S.GAME_LEVEL_LIST_ID.AOF:
                    this.peopleNum.string = this._tupleInfo.CurrentPlayers + "/" + e.Seats;
                    break;
                case S.GAME_LEVEL_LIST_ID.MTT:
                    this.peopleNum.string = this._tupleInfo.RegisteredCount + (e.PlayOnJoint > 0 ? "/" + e.PlayOnJoint : "")
            }
        }
        updateInfoPP() {
            switch (this.showRoomName(this._tupleInfo.Label, 2), this.changeTagsPP(this._tupleInfo.Mode, this._tupleInfo.Deal), this.showGameStartDate(!1), this._gameId) {
                case S.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL:
                    this.setGameIcon(Et.PP_GEN), this.peopleNum.string = this._tupleInfo.Joined + "/" + this._tupleInfo.Players, this.changeRoomStatusPP(this._tupleInfo.State);
                    break;
                case S.GAME_LEVEL_LIST_ID.PINEAPPLE_ROLL:
                    this.setGameIcon(Et.PP_LOOP), this.peopleNum.string = this._tupleInfo.Joined.toString(), this.changeRoomStatusPP(1)
            }
            this.feeLabel && (this.feeLabel.string = p("GAME_LIST.BUY_IN_FEE")), this.setFee(E.getFeeLabel(this._tupleInfo.takeInCoin), this._tupleInfo.Detail.currency, this._tupleInfo.Detail.DisplayCurrency), this.showAnte(!0), this.showSignUpTag(!1), this.showQuickTag(!1), this.showAIPT(!1), this.showSatellite(!1), this.showRemark(!1)
        }
        updateInfoSNG() {
            this.setGameIcon(this._gameId === S.GAME_LEVEL_LIST_ID.SNG ? Et.SNG : Et.AOF), this.setTags(!1, !1), this.showGameStartDate(!1);
            let t = this._tupleInfo.Detail;
            this.showRoomName(t.TournamentName, 0), this.changeRoomStatusSNG(t.Status), this.feeLabel && (this.feeLabel.string = p("GAME_LIST.ENROLLMENT_FEE")), this.setFee(E.getFeeLabel(t.RegFee + t.SrvFee), t.currency, t.DisplayCurrency), this.peopleNum.string = this._tupleInfo.CurrentPlayers + "/" + t.Seats, this.showAnte(!1), this.showSignUpTag(!1), this.showQuickTag(!1), this.showAIPT(!1), this.showSatellite(!1), this.showRemark(!1)
        }
        updateInfoMTT() {
            let t = this._tupleInfo.Detail;
            this.setMttIcon(t.TournamentMode);
            let e = this.changeTagsMTT();
            this.showRoomName(t.TournamentName, e), this.changeRoomStatusMTT(t.Status), this.peopleNum.string = this._tupleInfo.RegisteredCount + (t.PlayOnJoint > 0 ? "/" + t.PlayOnJoint : ""), this.feeLabel && (this.feeLabel.string = p("GAME_LIST.ENROLLMENT_FEE")), this.setFee(E.getFeeLabel(t.RegFee + t.SrvFee), t.currency, t.DisplayCurrency), this.showAnte(!1), this.showSignUpTag(!0), this.showQuickTag(t.PlayOnJoint > 0), this.showAIPT(t.IsAipt), this.showSatellite(t.IsSatelliteMode), this.showRemark(t.Desc && t.Desc.length > 0, t.Desc)
        }
        setFee(t, e, i = "", o) {
            if (this.feeCurrVal) {
                if (this.feeCurrVal.updateVal(t, e, this.convertCurrency, i, this._tupleInfo.CurrencyRate), o && o.length && this.feeCurrVal.isIconShown) {
                    A.resMgr.setSpriteFrame(this.feeCurrVal.iconSprite.node, o);
                    let t = this.feeCurrVal.iconSprite.getComponent(P);
                    t && (t.setColorScheme(R.Other, N.Icon), t.applyTheme())
                }
            } else this.feeNum.string = t
        }
        setMttIcon(t) {
            switch (t) {
                case I.commonProto.TOURNAMENT_MODE.HUNTER:
                    this.setGameIcon(Et.MTT_HUNTER);
                    break;
                case I.commonProto.TOURNAMENT_MODE.SUPER_HUNTER:
                    this.setGameIcon(Et.MTT_SUPER_HUNTER);
                    break;
                default:
                    this.setGameIcon(Et.MTT)
            }
        }
        showRoomName(t, e) {
            window.mttCacheName || (window.mttCacheName = {}), this.roomName.string = window.mttCacheName[e] || t, this.roomName.scheduleOnce((() => {
                L.instance.ellipseText(this.roomName, t, this.roomName.node.parent.getComponent(T).width)
            }), 0)
        }
        showGameStartDate(t) {
            if (this.gameStartDate.node.active = t, t) {
                let [t, e, i] = E.handleDateLabel(this._tupleInfo.Detail.StartingTime), [o, a] = E.handleTimeLabel(this._tupleInfo.Detail.StartingTime);
                this.gameStartDate.string = `${t}-${e}-${i} ${o}:${a}`
            }
        }
        showAnte(t) {
            this.anteNum.node.parent.active = t, t && (this.anteNum.string = E.getFeeLabel(this._tupleInfo.GoldMinPerPoint))
        }
        showRemainTime(t, e, i) {
            if (this.remainTime.node.active = t, t) {
                let t = (e = Math.max(0, e)) / 60;
                this.remainTime.string = t <= 59 ? p("GAME_LIST.REMAIN_TIME") + Math.floor(e / 60) + p("TIME.MINUTE") : p("GAME_LIST.REMAIN_TIME") + Math.floor(e / 360) / 10 + p("TIME.HOUR"), this.remainTime.node.getComponent(h).color = this.roomStatusRight.node.getComponent(h).color
            }
        }
        showCustomStatusLabel(t, e = "") {
            this.customStatusLabel.node.parent.active = t, this.customStatusLabel.string = e
        }
        showQuickTag(t) {
            this.quickTag.active = t
        }
        showSignUpTag(t) {
            if (t) {
                let t = cc_mtt.vv.DataManager.JoinedTournaments.findIndex((t => t.TournamentId === this._tupleInfo.Detail.Id));
                this.signUpTag.active = t >= 0
            } else this.signUpTag.active = !1
        }
        showAIPT(t) {
            this.AIPTLogo.active = t
        }
        showSatellite(t) {
            this.SatelliteLogo.active = t
        }
        showRemark(t, e = "") {
            this.remark.node.parent.active = t, t && (this.remark.string = e)
        }
        setGameIcon(t) {
            for (let e = 0; e < this.gameIcon.length; e++) this.gameIcon[e].active = e === t
        }
        changeTagsPP(t = 0, e) {
            let i = p(e ? "GAME_LIST.DEAL" : "GAME_LIST.NOT_DEAL");
            switch (t) {
                case I.pineapple.RoomMode.ROOM_MODE_NORMAL:
                    this.setTags(!0, !0, p("PINEAPPLE.PINEAPPLE_NORMAL"), i);
                    break;
                case I.pineapple.RoomMode.ROOM_MODE_JOKERS:
                    this.setTags(!0, !0, p("PINEAPPLE.PINEAPPLE_JOKER_MODE"), i);
                    break;
                case I.pineapple.RoomMode.ROOM_MODE_BLOODWAR:
                    this.setTags(!0, !0, p("PINEAPPLE.PINEAPPLE_BLOODY_BATTLE"), i);
                    break;
                case I.pineapple.RoomMode.ROOM_MODE_BLOODINOUT:
                    this.setTags(!0, !0, p("PINEAPPLE.PINEAPPLE_PROGRESSIVE"), i)
            }
        }
        changeTagsMTT() {
            let t = this._tupleInfo.Detail.TournamentMode !== I.commonProto.TOURNAMENT_MODE.NORMAL,
                e = p("GAME_LIST.GAME_TAG_HUNTER"),
                i = t ? 1 : 0;
            switch (this._tupleInfo.Detail.GameMode) {
                case I.commonProto.MTT_GAME_MODE.SHORT_DECK:
                    this.setTags(!0, t, p("GAME_LIST.GAME_TAG_SHORT"), e), i++;
                    break;
                default:
                    this.setTags(!1, t, "", e)
            }
            return i
        }
        setTags(t, e, i = "", o = "") {
            this.gameTag1.node.parent.active = t, t && (this.gameTag1.string = i), this.gameTag2.node.parent.active = e, e && (this.gameTag2.string = o)
        }
        changeRoomStatusPP(t) {
            switch (t) {
                case I.commonProto.GAME_ROOM_STATE.READY:
                    this.setRoomStatusTranslation("GAME_LIST.TOURNAMENT_STATUS_ENROLLING"), this.roomStatusBottom.string = p("GAME_LIST.ROOM_STATUS_ENROLLING"), this.setRoomStatusLabelColor((new u).fromHEX(S.SIGN_COLOR.POSITIVE)), this.showRemainTime(!1);
                    break;
                case I.commonProto.GAME_ROOM_STATE.PLAYING:
                case I.commonProto.GAME_ROOM_STATE.PLAYING + 100:
                    this.setRoomStatusTranslation("GAME_LIST.ROOM_STATUS_STARTED"), this.roomStatusBottom.string = p("GAME_LIST.GAME_START_INFO_STARTED"), this.setRoomStatusLabelColor((new u).fromHEX(S.SIGN_COLOR.NEGATIVE)), this.showRemainTime(!(this._tupleInfo.TimeLeftSec <= 0 && this._tupleInfo.TimerStop), this._tupleInfo.TimeLeftSec)
            }
        }
        changeRoomStatusSNG(t) {
            switch (t) {
                case I.commonProto.SNG_GAME_STATUS.SNG_NOT_STARTED:
                    this.setRoomStatusTranslation("GAME_LIST.TOURNAMENT_STATUS_ENROLLING"), this.roomStatusBottom.string = p("GAME_LIST.ROOM_STATUS_ENROLLING"), this.setRoomStatusLabelColor((new u).fromHEX(S.SIGN_COLOR.POSITIVE)), this.showRemainTime(!1);
                    break;
                case I.commonProto.SNG_GAME_STATUS.SNG_STARTED:
                case I.commonProto.SNG_GAME_STATUS.SNG_STARTED + 100:
                    this.setRoomStatusTranslation("GAME_LIST.ROOM_STATUS_STARTED"), this.roomStatusBottom.string = p("GAME_LIST.GAME_START_INFO_STARTED"), this.setRoomStatusLabelColor((new u).fromHEX(S.SIGN_COLOR.NEGATIVE)), this.showRemainTime(!1)
            }
        }
        changeRoomStatusMTT(t) {
            switch (t) {
                case I.commonProto.MTT_GAME_STATUS.NOT_STARTED:
                    this._tupleInfo.Detail.PlayOnJoint > 0 ? (this.roomStatusBottom.string = p("MTT_HALL.FULL_TO_PLAY_PKW"), this.showGameStartDate(!1)) : (this.roomStatusBottom.string = p("GAME_LIST.GAME_START_INFO_START_TIME"), this.showGameStartDate(!0)), this.setRoomStatusTranslation("GAME_LIST.TOURNAMENT_STATUS_ENROLLING"), this.setRoomStatusLabelColor((new u).fromHEX(S.SIGN_COLOR.POSITIVE)), this.showRemainTime(!1);
                    break;
                case I.commonProto.MTT_GAME_STATUS.STARTED:
                case I.commonProto.MTT_GAME_STATUS.STARTED + 100:
                    this.roomStatusBottom.string = p("GAME_LIST.GAME_START_INFO_STARTED"), this.showGameStartDate(!1), this.setRoomStatusTranslation("GAME_LIST.TOURNAMENT_STATUS_DELAY"), this.setRoomStatusLabelColor((new u).fromHEX(S.SIGN_COLOR.NEGATIVE)), this.showRemainTime(!0, this._tupleInfo.TimeLeftSec);
                    break;
                case I.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                case I.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
                    this.roomStatusBottom.string = p("GAME_LIST.GAME_START_INFO_STARTED"), this.showGameStartDate(!1), this.setRoomStatusTranslation("GAME_LIST.TOURNAMENT_STATUS_EOE"), this.setRoomStatusLabelColor((new u).fromHEX(S.SIGN_COLOR.NEUTRAL)), this.showRemainTime(!1)
            }
        }
        onClickTuple() {
            if (!m(this.node, !0)) return;
            let t = this.node.getComponent(_);
            t && E.coolDownButton(t, this), this._hallScript.checkAgent((() => {
                switch (this._gameId) {
                    case S.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL:
                    case S.GAME_LEVEL_LIST_ID.PINEAPPLE_ROLL:
                        let t = new G("gameListTupleEvent", !0);
                        t.setUserData(this._tupleInfo), this.node.dispatchEvent(t);
                        break;
                    case S.GAME_LEVEL_LIST_ID.SNG:
                    case S.GAME_LEVEL_LIST_ID.AOF:
                        this._hallScript.showLoading(), this._hallScript.callGameView(this._tupleInfo.Detail.GameMode, this._gameId, this._tupleInfo.Detail.Id);
                        break;
                    case S.GAME_LEVEL_LIST_ID.MTT:
                        let e = new G("callMttHall", !0);
                        e.setUserData(this._tupleInfo), this.node.dispatchEvent(e)
                }
            }), this.parentPage)
        }
        setRoomStatusLabelColor(t) {
            this.roomStatusRight.node.getComponent(h).color = t
        }
        setRoomStatusTranslation(t) {
            this.roomStatusRight.string = p(t)
        }
        getSignUpBoxProperty(t) {
            let e = t || this._tupleInfo;
            return e ? new f("", M.DisplayGold(e.RegFee + e.SrvFee), I.commonProto.GAME_CATEGORY.MTT, e.SignUpOptions, e.currency, e.GameInvitationCode, e.Tag, e.DisplayCurrency, e.Rate) : null
        }
    }).prototype, "gameIcon", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), W = e(Q.prototype, "quickTag", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(Q.prototype, "signUpTag", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(Q.prototype, "roomName", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(Q.prototype, "gameTag1", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(Q.prototype, "gameTag2", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(Q.prototype, "feeLabel", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(Q.prototype, "feeNum", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(Q.prototype, "feeCurrVal", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(Q.prototype, "peopleNum", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(Q.prototype, "anteNum", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(Q.prototype, "roomStatusBottom", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(Q.prototype, "gameStartDate", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(Q.prototype, "roomStatusRight", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(Q.prototype, "remainTime", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(Q.prototype, "customStatusLabel", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(Q.prototype, "remark", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(Q.prototype, "AIPTLogo", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(Q.prototype, "SatelliteLogo", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = Q)) || K));
    o._RF.pop()
}