import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
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
import * as T from "./ThemeSystem.js";
import * as p from "./CurrencyValue.js";
import * as g from "./AppConfig.js";
import * as S from "./CommonTools.js";
import * as d from "./MTTConnector.js";
import * as f from "./NodePage.js";
import * as I from "./Translator.js";
import * as _ from "./mttconfig.js";
import * as M from "./Pb.js";
import * as b from "./FormatParser.js";
import * as P from "./GameListTuple.js";
import * as y from "./MttPrefab.js";
import * as D from "./CrashTracing.js";
import * as E from "./CrashTracing.js";
import * as L from "./ColorSystemType.js";
import * as A from "./ColorSystemTypeOther.js";
import * as C from "./MttItemHelper.js";
import * as R from "./cv.js";
import * as v from "./StringUtils.js";
import * as N from "./ColorsystemLobbyV2.js";

function main() {
    var G, w, O, k, z, U, F, H, B, W, x, V, K, J, $, X, Y, Z, j, q, Q, tt, et, it, ot, st, at, nt, rt, lt, ut, ct, ht, mt, Tt, pt, gt, St, dt, ft, It, _t, Mt, bt, Pt, yt, Et, Dt, Lt, At, Ct, Rt, vt, Nt, Gt, wt, Ot;
    o._RF.push({}, "454f8SRX4xOvptI04XqBwvh", "GameListTuplePkw", void 0);
    const {
        ccclass: kt,
        property: zt
    } = l, Ut = 0, Ft = 1, Ht = 2, Bt = 3, Wt = 4, xt = 5, Vt = t("REG_STATUS", {
        DATE: 0,
        TIME: 1,
        LATE: 2,
        END: 3
    });
    t("default", (G = zt(s), w = zt(a), O = zt(p), k = zt(a), z = zt(a), U = zt(s), F = zt([n]), H = zt([n]), B = zt(a), W = zt(r), x = zt([n]), V = zt(r), K = zt(a), J = zt(r), $ = zt(r), X = zt(r), Y = zt(r), Z = zt(r), j = zt(r), q = zt([n]), Q = zt(r), tt = zt(T), et = zt(T), it = zt(r), ot = zt(r), st = zt(r), at = zt(r), kt(((Ot = class t extends P {
        constructor(...t) {
            super(...t), i(this, "customIcon", lt, this), i(this, "prizePool", ut, this), i(this, "prizePoolCurrVal", ct, this), i(this, "gameType", ht, this), i(this, "gameSpeed", mt, this), i(this, "statusIcon", Tt, this), i(this, "iconSpriteFrames", pt, this), i(this, "iconSelectedSpriteFrames", gt, this), i(this, "statusInfo", St, this), i(this, "bg", dt, this), i(this, "bgSprite", ft, this), i(this, "regIconNode", It, this), i(this, "regLabel", _t, this), i(this, "tagLayout", Mt, this), i(this, "mysteryBountyTag", bt, this), i(this, "wptTag", Pt, this), i(this, "starTag", yt, this), i(this, "multiDayTag", Et, this), i(this, "myTicketTag", Dt, this), i(this, "starTagSprite", Lt, this), i(this, "roomNameMaxWidth", At, this), i(this, "sideBarThemeSystem", Ct, this), i(this, "roomStatusRightThemeSystem", Rt, this), i(this, "selectedHighlight", vt, this), i(this, "pinNode", Nt, this), i(this, "prizePoolBg", Gt, this), i(this, "prizePoolOverlayBg", wt, this), this.defaultTitleColor = "#D6DDE4", this._verticalCenter = 16.16, this.regStatus = Vt.DATE, this.customOnClick = null, this.updatingRoomName = !1, this.isUSDGame = !1, this._isMyTicketPageComponent = !1
        }
        static get LastSelectedTournamentId() {
            return this.lastSelectedTournamentId
        }
        static set LastSelectedTournamentId(e) {
            if (0 == e) {
                const e = t.lastSelectedTournamentListItem;
                u(e, !0) && e.deselect()
            }
            this.lastSelectedTournamentId = e
        }
        static get lastSelectedTournamentListItem() {
            var e;
            const i = null == (e = y.instance) || null == (e = e.scrollView) ? void 0 : e.content.children;
            if (u(i) && i.length > 0)
                for (let e = i.length - 1; e >= 0; e--) {
                    const o = i[e].getComponent(t),
                        s = null == o ? void 0 : o._tupleInfo;
                    if (o && s && s.Detail && s.Detail.Id == t.LastSelectedTournamentId) return o
                }
            return null
        }
        static get PreviousSelectedTournamentId() {
            return this.previousSelectedTournamentId
        }
        static set PreviousSelectedTournamentId(e) {
            if (0 === e) {
                const e = t.previousSelectedTournamentListItem;
                u(e, !0) && e.deselect()
            }
            this.previousSelectedTournamentId = e
        }
        static get previousSelectedTournamentListItem() {
            var e;
            const i = null == (e = y.instance) || null == (e = e.scrollView) ? void 0 : e.content.children;
            if (i && i.length)
                for (let e = i.length - 1; e >= 0; e--) {
                    const o = i[e].getComponent(t),
                        s = null == o ? void 0 : o._tupleInfo;
                    if (o && s && s.Detail && s.Detail.Id == t.PreviousSelectedTournamentId) return o
                }
            return null
        }
        onEnable() {
            this.tagLayout.parent.on("size-changed", this.updateTagPosition, this), this.roomNameMaxWidth.on(r.EventType.SIZE_CHANGED, this.roomNameSizeChanged, this)
        }
        onDisable() {
            u(this.tagLayout, !0) && u(this.tagLayout.parent, !0) && this.tagLayout.parent.off("size-changed", this.updateTagPosition, this), u(this.roomNameMaxWidth, !0) && this.roomNameMaxWidth.off(r.EventType.SIZE_CHANGED, this.roomNameSizeChanged, this), this.unscheduleAllMyTicketCallbacks()
        }
        updateInfo(e, i, o, s = !1, a = !1, n = null) {
            this.customOnClick = n;
            let r = !1;
            switch (this._tupleInfo && this._tupleInfo.Detail && this._tupleInfo.Detail.Id && (r = this._tupleInfo.Detail.Id == e.Detail.Id), this._tupleInfo = e, t.LastSelectedTournamentId == e.Detail.Id && R.MessageCenter.send("gameListTupleDataChanged", this._tupleInfo), this.isUSDGame = 1 == e.type, this._tupleInfo.IsCardsShown = !1, null != o && (this._tupleId = o), this._gameId = i, this.convertCurrency = !0 === s, i) {
                case _.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL:
                case _.GAME_LEVEL_LIST_ID.PINEAPPLE_ROLL:
                    this.updateInfoPP(), this.parentPage = this._hallScript._pinePage;
                    break;
                case _.GAME_LEVEL_LIST_ID.SNG:
                case _.GAME_LEVEL_LIST_ID.AOF:
                    this.updateInfoSNG(), this.parentPage = this._hallScript._sngPage;
                    break;
                case _.GAME_LEVEL_LIST_ID.MTT:
                    this.updateInfoMTT(r, a), this.parentPage = this._hallScript._mttPage
            }
        }
        setMttIcon(t) {
            let e = Ut;
            e = t == M.commonProto.TOURNAMENT_MODE.NORMAL ? Ut : xt, this._tupleInfo.Detail.GameMode == M.commonProto.MTT_GAME_MODE.SHORT_DECK && (e = Ht), this._tupleInfo.Detail.IsAipt && (e = Bt), this._tupleInfo.Detail.PlayOnJoint > 0 && (e = Ft), this._tupleInfo.Detail.IsSatelliteMode && (e = Wt), this.setGameIcon(e)
        }
        showSignUpTag(t) {
            if (t) {
                let t = this._tupleInfo.Detail.Status,
                    e = cc_mtt.vv.DataManager.JoinedTournaments.findIndex((t => t.TournamentId === this._tupleInfo.Detail.Id)),
                    i = 0;
                if (e >= 0 && (i = cc_mtt.vv.DataManager.JoinedTournaments[e].JoinStatus), cc_mtt.vv.ConsoleLog.log("showSignUpTag", this._tupleInfo.Detail.Id, e, i), 0 != i) {
                    this.regIconNode.active = !0;
                    let e = 0;
                    switch (t) {
                        case M.commonProto.MTT_GAME_STATUS.NOT_STARTED:
                            e = 0;
                            break;
                        case M.commonProto.MTT_GAME_STATUS.STARTED:
                        case M.commonProto.MTT_GAME_STATUS.STARTED + 100:
                        case M.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                        case M.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
                            e = i < 0 ? 2 : 1;
                            break;
                        case M.commonProto.MTT_GAME_STATUS.ENDED:
                            e = 2
                    }
                    let o = this.regIconNode.getComponent(T);
                    u(o) && (0 == e ? (o.setColorScheme(L.LobbyV2, N.ListItem_Mtt_Bg_Text_Registered), this.regLabel.string = R.StringTools.convertText(I("PKWMTT.GAMELIST.SIGNED_UP"), v.Uppercase_All)) : 1 == e ? (o.setColorScheme(L.LobbyV2, N.ListItem_Mtt_Bg_Text_Playing), this.regLabel.string = R.StringTools.convertText(I("PKWMTT.GAMELIST.PLAYING"), v.Uppercase_All)) : (o.setColorScheme(L.LobbyV2, N.ListItem_Mtt_Bg_Text_Finished), this.regLabel.string = R.StringTools.convertText(I("MTT_SIGN_UP.OUT"), v.Uppercase_All)))
                } else this.regIconNode.active = !1;
                this.signUpTag.active = !1
            } else this.regIconNode.active = !1, this.signUpTag.active = !1
        }
        updateTagPosition() {}
        updateMyTicket(t = null) {
            if (this.regStatus != Vt.END) {
                if (!t && this._tupleInfo.Detail && (t = this.getSignUpBoxProperty(this._tupleInfo.Detail)), this.myTicketTag) {
                    const e = R.appConfig.getUserProfileConfig().showMyTickets;
                    this.myTicketTag.active = e && t && t.toolOption && t.tools.length > 0
                }
            } else this.myTicketTag.active = !1
        }
        updateInfoMTT(t = !1, e = !1) {
            var i;
            if (!u(this, !0)) return;
            let o = this._tupleInfo.Detail,
                s = this.getGameConfig(o);
            const a = this.getSignUpBoxProperty(o);
            if (o.MultiFlightLevel > 0) this.setFee("N/A", o.currency, o.DisplayCurrency);
            else {
                let t = o.RegFee + o.SrvFee,
                    e = t > 0 ? f.getFeeLabel(t) : I("PKWMTT.GAMELIST.FREE");
                a && a.toolOption && !a.goldOption && a.tools.length < 1 ? (e = I("PKWMTT.GAMELIST.TICKET"), this.setFee(e, o.currency, o.DisplayCurrency, "textures/lobby/ticket_icon")) : this.setFee(e, o.currency, o.DisplayCurrency)
            }
            if (this.updateMyTicket(a), S.instance.updateRenderData(this.feeNum, !0), this.updatePrizePool(), e) return;
            this.setMttIcon(-1), this.wptTag && (this.wptTag.active = "WPT" === o.DisplayTag && g.Instance.isPKW), this.starTag && (this.starTag.active = o.IsCelebrity), this.multiDayTag && (this.multiDayTag.active = o.MultiFlightId > 0), this.updateTagPosition();
            const n = cc_mtt.vv.DataManager.i18DataFromServer(o.TournamentName, o.TournamentNameI18N);
            this.showRoomName(n, o.Id), this.changeRoomStatusMTT(o.Status);
            let r = this.peopleNum.string,
                l = (null == (i = this._tupleInfo.Detail) ? void 0 : i.MultiFlightLevel) > 0 ? this._tupleInfo.RegisteredCount : this._tupleInfo.JoinedCount;
            if (this.peopleNum.string = l + (o.PlayOnJoint > 0 ? "/" + o.PlayOnJoint : ""), t && r != this.peopleNum.string && "0" == this.peopleNum.string) {
                this._tupleInfo.Detail.Id;
                let t = {
                    MttID: this._tupleInfo.Detail.Id,
                    peopleNumBefore: r,
                    peopleNumAfter: this.peopleNum.string
                };
                E.hasInstance() && E.getInstance().trace(D.MTTLobby, "peopleNum_is_update_wrong", t, !0)
            }
            this.showAnte(!1), this.showSignUpTag(!0), this.showQuickTag(!1), this.showAIPT(!1), this.showSatellite(!1), this.showRemark(!1), this.updateRoomNameColor(s), this.setGameMode(o.GameMode, o.MttMode), this.setPin(o.ShowingPosition > 0), this.setActiveOverlay(this._tupleInfo.overlay), null != this._tupleInfo && null != this._tupleInfo.Detail && this.setBackgroundThemeSystem()
        }
        updatePrizePool() {
            let t = this._tupleInfo.Detail,
                e = this._tupleInfo.GamePool;
            this.setPrizePool(b.DisplayGold(e), t.currency, t.DisplayCurrency)
        }
        updateRegisteredPlayers(t) {
            this.peopleNum.string = t + (this._tupleInfo.PlayOnJoint > 0 ? "/" + this._tupleInfo.PlayOnJoint : "")
        }
        changeRoomStatusMTT(t) {
            this.unschedule(this.updateWithin3Hrs), this.unschedule(this.updateLateRegScheduler), this.unschedule(this.updateStarted), d.instance.isPKW && this.setRoomStatusLabelColor((new c).fromHEX("#D6DDE4"));
            let e, [i, o, s] = C.getMttRoomStatus(this._tupleInfo);
            switch (this.regStatus = s, t) {
                case M.commonProto.MTT_GAME_STATUS.NOT_STARTED:
                    d.instance.isPKW && this.setRoomStatusLabelColor((new c).fromHEX("#533611")), this._tupleInfo.Detail.PlayOnJoint > 0 ? (this.regStatus = Vt.DATE, i = I("PKWMTT.GAMELIST.SIGNING_UP"), e = "", this.setRoomSprite(), this.setRoomStatus(i, o, e)) : (e = this.showDateOrTime(this._tupleInfo.Detail.StartingTime, !0), this.setRoomSprite(), this.setRoomStatus(i, o, e));
                    break;
                case M.commonProto.MTT_GAME_STATUS.STARTED:
                case M.commonProto.MTT_GAME_STATUS.STARTED + 100:
                    let t = C.timeStampToTimeLeftSec(C.getStopSignUpTimestampFromMtt(this._tupleInfo));
                    e = this.getRemainTimeString(Math.max(t, 0), "PKWMTT.GAMELIST.LATE_REG", !0, !0), this.schedule(this.updateLateRegScheduler, 1, h.REPEAT_FOREVER), this.setRoomSprite(), this.setRoomStatus(i, o, e);
                    break;
                case M.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                case M.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
                    e = "", this.schedule(this.updateStarted, 1, h.REPEAT_FOREVER), this.setRoomSprite(), this.setRoomStatus(i, o, e), this.updateMyTicket();
                    break;
                case M.commonProto.MTT_GAME_STATUS.ENDED:
                    e = "", this.setRoomSprite(), this.setRoomStatus(i, o, e), this.updateMyTicket()
            }
        }
        showGameStartDate(t) {
            if (this.gameStartDate.node.active = t, t) {
                let [t, e, i] = f.handleDateLabel(this._tupleInfo.Detail.StartingTime);
                this.gameStartDate.string = `${e.toString().padStart(2,"0")}/${i.toString().padStart(2,"0")}`
            }
        }
        showRemainTime(t, e, i) {
            e = Math.max(e, 0), t && (e *= 1e3);
            let o = 6e4,
                s = 60 * o,
                a = Math.floor(e / s),
                n = Math.floor(e % s / o),
                r = Math.floor(e % s % o / 1e3);
            return this.formatTime(i, a, t, n, r)
        }
        updateWithin3Hrs() {
            if (this.statusInfo) {
                let t = (this._tupleInfo.Detail.StartingTime - cc_mtt.vv.DataManager.getNow()) / 1e3;
                t >= 0 ? this.statusInfo.string = this.getRemainTimeString(t, "PKWMTT.GAMELIST.START_TIME", !0) : this.unschedule(this.updateWithin3Hrs)
            }
        }
        updateLateRegScheduler() {
            C.updateTimeLeftSec(this._tupleInfo);
            let t = this._tupleInfo.TimeLeftSec;
            0 == t && this.reloadLevelList(), t >= 0 && this._tupleInfo.Detail.Status < 100 ? this.updateLateReg() : t <= -10 && (this.reloadLevelList(), this.unschedule(this.updateLateRegScheduler))
        }
        updateLateReg() {
            this.statusInfo && (this.statusInfo.string = this.getRemainTimeString(this._tupleInfo.TimeLeftSec, "PKWMTT.GAMELIST.LATE_REG", !0, !0))
        }
        reloadLevelList() {
            y.instance && y.instance.getLevelList()
        }
        updateStarted() {
            this.statusInfo.string = ""
        }
        setRoomSprite(t = !1) {
            u(this.statusIcon) && (t && this.iconSelectedSpriteFrames || !t && this.iconSpriteFrames) && (this.statusIcon.spriteFrame = t ? this.iconSelectedSpriteFrames[this.regStatus] : this.iconSpriteFrames[this.regStatus]);
            let e = this.statusInfo.getComponent(T),
                i = A.TypoGraphyMain;
            if (e) switch (this.regStatus) {
                case Vt.DATE:
                case Vt.TIME:
                    i = A.MainBlue;
                    break;
                case Vt.LATE:
                    i = A.LateReg;
                    break;
                case Vt.END:
                default:
                    i = A.TypoGraphyMain
            }
            if (e.setColorScheme(e.colorScheme, i), u(this.statusIcon)) {
                let t = this.statusIcon.getComponent(T),
                    e = i;
                t.setColorScheme(t.colorScheme, e)
            }
            this.setActiveSelectedHighlight(t)
        }
        setRoomStatus(t, e, i) {
            this.setRoomStatusLabel(t), u(i) || (i = ""), this.statusInfo.string = i
        }
        setGameMode(t, e) {
            let i = "";
            switch (t) {
                case M.commonProto.MTT_GAME_MODE.NLH:
                    i = I("MTT_GAME_MODE.NLH");
                    break;
                case M.commonProto.MTT_GAME_MODE.SHORT_DECK:
                    i = I("MTT_GAME_MODE.SHORT_DECK");
                    break;
                case M.commonProto.MTT_GAME_MODE.OMAHA:
                    i = I("MTT_GAME_MODE.OMAHA")
            }
            let o = "";
            switch (e) {
                case M.commonProto.MTT_MODE.Normal:
                    o = I("PKWMTT.GAMELIST.FILTER.SPEED.NORMAL");
                    break;
                case M.commonProto.MTT_MODE.Turbo:
                    o = I("PKWMTT.GAMELIST.FILTER.SPEED.TURBO");
                    break;
                case M.commonProto.MTT_MODE.Hyper:
                    o = I("PKWMTT.GAMELIST.FILTER.SPEED.HYPER")
            }
            this.setGameModeLabels(i, o)
        }
        setPrizePool(t, e, i = "") {
            this.prizePoolCurrVal ? this.prizePoolCurrVal.updateVal(b.ThousandPointFormat(t), e, this.convertCurrency, i, this._tupleInfo.CurrencyRate) : this.prizePool.string = b.ThousandPointFormat(t)
        }
        setGameIcon(t) {
            super.setGameIcon(t), this.customIcon.node.active = !1
        }
        getGameConfig(t) {
            try {
                if (t.GameConfig) return JSON.parse(t.GameConfig)
            } catch (t) {
                cc_mtt.vv.ConsoleLog.error(t)
            }
            return null
        }
        updateRoomNameColor(t) {
            t && t.titleColor ? this.setRoomNameColor(t.titleColor) : this.setRoomNameColor(this.defaultTitleColor)
        }
        setRoomNameColor(t) {}
        updateIcon(t) {
            t && t.customIcon && this.setIcon(t.customIcon)
        }
        setIcon(t) {
            t && cc_mtt.vv.AssetsManager.loadWebImage(this.customIcon, _.imageUrl + t, null, (t => {
                if (u(t) && u(this.customIcon)) {
                    this.customIcon.spriteFrame = new n, this.customIcon.spriteFrame.texture = t;
                    for (let t = 0; t < this.gameIcon.length; t++) this.gameIcon[t].active = !1;
                    this.customIcon.node.active = !0
                }
            }), (t => {
                cc_mtt.vv.ConsoleLog.error(t)
            }))
        }
        roomNameSizeChanged() {
            if (!this.updatingRoomName) {
                let t = this._tupleInfo.Detail;
                window.mttCacheName && (window.mttCacheName[t.Id] = null);
                const e = cc_mtt.vv.DataManager.i18DataFromServer(t.TournamentName, t.TournamentNameI18N);
                this.showRoomName(e, t.Id)
            }
        }
        showRoomName(t, e) {
            window.mttCacheName || (window.mttCacheName = {}), this.roomName.string = window.mttCacheName[e] || t, this.roomName.scheduleOnce((() => {
                this.updatingRoomName = !0, S.instance.ellipseText(this.roomName, t, this.roomName.node.parent.getComponent(m).width, this.roomNameMaxWidth.getComponent(m).width), window.mttCacheName[e] = this.roomName.string, this.updatingRoomName = !1
            }), 0)
        }
        formatTime(t, e, i, o, s) {
            const a = e.toString().padStart(2, "0"),
                n = s.toString().padStart(2, "0");
            let r;
            return t && e > 0 && (o += 60 * e), r = o.toString().padStart(2, "0"), !t && e > 0 ? `${a}:${r}` : i ? `${r}:${n}` : `${r}`
        }
        showDateOrTime(t, e) {
            return e ? `${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}` : `${(t.getMonth()+1).toString().padStart(2,"0")}/${t.getDate().toString().padStart(2,"0")}`
        }
        getRemainTimeString(t, e, i, o) {
            return this.showRemainTime(i, t, o)
        }
        getDateOrTimeString(t) {
            return I("PKWMTT.GAMELIST.START_DATE").replace("{0}", t).replace("{1}", this.showDateOrTime(this._tupleInfo.Detail.StartingTime, !0))
        }
        setRoomStatusLabel(t) {
            t = t.toUpperCase(), this.roomStatusRight.string = t
        }
        setGameModeLabels(t, e) {
            t = t.toUpperCase(), e = e.toUpperCase(), this.gameType.string = t, this.gameSpeed.string = e
        }
        setRoomStatusLabelColor(t) {}
        static getGameModeColor(t) {
            switch (t) {
                case M.commonProto.MTT_GAME_MODE.NLH:
                    return A.CeruleanBlue;
                case M.commonProto.MTT_GAME_MODE.SHORT_DECK:
                    return A.JewelGreen;
                case M.commonProto.MTT_GAME_MODE.OMAHA:
                default:
                    return A.Orange
            }
        }
        setGameModeColor(t) {}
        setRoomStatusTranslation(t) {
            this.roomStatusRight.string = I(t).toUpperCase()
        }
        setBackgroundThemeSystem() {
            null != this._hallScript._mttPage && this.isSelected() ? this.select() : this.deselect()
        }
        isSelected() {
            return null != this._tupleInfo && null != this._tupleInfo.Detail && this._tupleInfo.Detail.Id === t.LastSelectedTournamentId
        }
        select() {
            this.setRoomSprite(!0)
        }
        deselect() {
            this.setRoomSprite(!1)
        }
        deselectLastItem() {
            const e = t.lastSelectedTournamentListItem;
            u(e, !0) && e.deselect()
        }
        onClickTuple() {
            var t;
            this.customOnClick ? null == (t = this.customOnClick) || t.call(this) : (this.deselectLastItem(), this.select(), super.onClickTuple(), this.saveSelectedId())
        }
        saveSelectedId() {
            null != this._tupleInfo && null != this._tupleInfo.Detail && (t.lastSelectedTournamentListItem && t.lastSelectedTournamentListItem.setActiveSelectedHighlight(!1), t.PreviousSelectedTournamentId = t.LastSelectedTournamentId, t.LastSelectedTournamentId = this._tupleInfo.Detail.Id, t.lastSelectedTournamentListItem && t.lastSelectedTournamentListItem.setActiveSelectedHighlight(!0))
        }
        updateMyTicketSchedule() {
            switch (this._isMyTicketPageComponent = !0, this.unscheduleAllMyTicketCallbacks(), this._tupleInfo.Detail.Status) {
                case M.commonProto.MTT_GAME_STATUS.NOT_STARTED:
                    var t;
                    if (null != (t = this._tupleInfo.Detail) && t.StartingTime) {
                        let t = Math.abs((cc_mtt.vv.DataManager.getNow() - this._tupleInfo.Detail.StartingTime) / 1e3);
                        this.scheduleOnce(this.onMyTicketRefreshList, t)
                    }
                    break;
                case M.commonProto.MTT_GAME_STATUS.STARTED:
                case M.commonProto.MTT_GAME_STATUS.STARTED + 100: {
                    let t = this._tupleInfo.TimeLeftSec;
                    t > 0 && this.scheduleOnce(this.onMyTicketRefreshList, t)
                }
                break;
                case M.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                case M.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
            }
        }
        unscheduleAllMyTicketCallbacks() {
            this._isMyTicketPageComponent && this.unschedule(this.onMyTicketRefreshList)
        }
        onMyTicketRefreshList() {
            this.reloadLevelList()
        }
        setActiveSelectedHighlight(t) {
            u(this.selectedHighlight) && (this.selectedHighlight.active = t), u(this.bg) && (this.bg.active = !t)
        }
        setPin(t) {
            u(this.pinNode) && (this.pinNode.active = t)
        }
        setActiveOverlay(t) {
            u(this.prizePoolBg) && (this.prizePoolBg.active = !t), u(this.prizePoolOverlayBg) && (this.prizePoolOverlayBg.active = t)
        }
    }).lastSelectedTournamentId = 0, Ot.PreviousSelectedTournamentDetail = void 0, Ot.previousSelectedTournamentId = 0, lt = e((rt = Ot).prototype, "customIcon", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(rt.prototype, "prizePool", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(rt.prototype, "prizePoolCurrVal", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(rt.prototype, "gameType", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(rt.prototype, "gameSpeed", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(rt.prototype, "statusIcon", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(rt.prototype, "iconSpriteFrames", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), gt = e(rt.prototype, "iconSelectedSpriteFrames", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), St = e(rt.prototype, "statusInfo", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(rt.prototype, "bg", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(rt.prototype, "bgSprite", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), It = e(rt.prototype, "regIconNode", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(rt.prototype, "regLabel", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = e(rt.prototype, "tagLayout", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(rt.prototype, "mysteryBountyTag", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(rt.prototype, "wptTag", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(rt.prototype, "starTag", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = e(rt.prototype, "multiDayTag", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(rt.prototype, "myTicketTag", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(rt.prototype, "starTagSprite", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), At = e(rt.prototype, "roomNameMaxWidth", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(rt.prototype, "sideBarThemeSystem", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(rt.prototype, "roomStatusRightThemeSystem", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(rt.prototype, "selectedHighlight", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = e(rt.prototype, "pinNode", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(rt.prototype, "prizePoolBg", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(rt.prototype, "prizePoolOverlayBg", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = rt)) || nt));
    o._RF.pop()
}