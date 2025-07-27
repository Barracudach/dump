import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as b from "./MttGameItemRender.js";
import * as d from "./ThemeSystem.js";
import * as p from "./Pb.js";
import * as y from "./MttItemHelper.js";
import * as g from "./MttItemRenderHelper.js";
import * as B from "./StringUtils.js";
import * as _ from "./cv.js";
import * as S from "./Translator.js";
import * as T from "./ColorSystemType.js";
import * as I from "./ColorsystemLobbyV2.js";
import * as L from "./ThemeSystemForGradient.js";
import * as M from "./MttGameItemIntegrateTimeStatus.js";
import * as f from "./MttGameItemIntegrateTimeStatus.js";
import * as P from "./MttGameItemColorIndentifier.js";
import * as C from "./MttGameItemPrizepoolValGradient.js";

function main() {
    var G, N, z, v, w, D, R, A, E, V, W, O, k, x, F, U, H, J, Y, K, $, j, Q, Z, q, X, ee, te, re, ie, ne, ae, oe, se, le, ue, me, he, ce, be, de, pe, ye, ge, Be, _e, Se, Te, Ie, Le, Me, fe, Pe, Ce, Ge, Ne, ze, ve, we, De, Re;
    i._RF.push({}, "02c13wGk1ZBUa2TLJQ+ks/4", "MttGameItemRenderIntegrate", void 0);
    const {
        ccclass: Ae,
        property: Ee
    } = m;
    e("MttGameItemRenderIntegrate", (G = Ae("MttGameItemRenderIntegrate"), N = Ee(n), z = Ee(a), v = Ee(d), w = Ee(n), D = Ee(a), R = Ee(n), A = Ee(Boolean), E = Ee(n), V = Ee(a), W = Ee(a), O = Ee(d), k = Ee(L), x = Ee([o]), F = Ee(d), U = Ee(d), H = Ee(s), J = Ee(a), Y = Ee([o]), K = Ee([o]), $ = Ee([o]), j = Ee(s), Q = Ee(l), Z = Ee(a), q = Ee(Number), X = Ee(Number), ee = Ee(Number), te = Ee(M), re = Ee(Boolean), ie = Ee(u), G((oe = t((ae = class extends b {
        constructor(...e) {
            super(...e), r(this, "startDateLabel", oe, this), r(this, "userStatusNode", se, this), r(this, "userStatusBg", le, this), r(this, "userStatusText", ue, this), r(this, "pinNode", me, this), r(this, "statusTimeTitle", he, this), r(this, "isAddBuyInText", ce, this), r(this, "buyInLabel", be, this), r(this, "prizePoolBG", de, this), r(this, "prizePoolOverlayBG", pe, this), r(this, "prizePoolTitleColor", ye, this), r(this, "prizePoolValColor", ge, this), r(this, "bannerIconList", Be, this), r(this, "bannerBg", _e, this), r(this, "bannerBorder", Se, this), r(this, "bannerIcon", Te, this), r(this, "bannerContainer", Ie, this), r(this, "pageTypeBgList", Le, this), r(this, "pageTypeIconList", Me, this), r(this, "pageTypeBorderList", fe, this), r(this, "bannerBorderSprite", Pe, this), r(this, "mttNameMaxWidth", Ce, this), r(this, "mttNameBg", Ge, this), r(this, "mttNameWidgetRightStatus", Ne, this), r(this, "mttNameWidgetRightBanner", ze, this), r(this, "mttNameWidgetRightOrignal", ve, this), r(this, "timeStatus", we, this), r(this, "isForcedAutoResizeName", De, this), r(this, "mttNameDefaultColor", Re, this), this.timerStopResumeTime = -1, this.registeredPlayer = 0, this.playingPlayersCount = 0, this.statusTimeTitleKey = "", this.startingTime = null, this.playerOnJoint = 0, this.currentState = 0, this.abbreviationFormat = !1, this.data = void 0
        }
        onAutoResizeLabelCompleted(e) {
            var t;
            this.labelName == e && (null == (t = this.mvcView) || t.onAutoSizeLabelFinish(e.string), this.labelName.node.addOrGetComponent(h).opacity = 255)
        }
        setGameMode(e) {}
        setMaxPlayers(e) {}
        setBounty(e) {}
        setTicket(e) {}
        setGameSpeed(e) {}
        setColorIndentifier(e, t) {}
        setPin(e, t, r = !1) {
            this.pinNode.active = e > 0 && !t && !r
        }
        render(e) {
            this.data = e, this.timerStop = e.timerStop, this.registeredPlayer = e.registeredPlayer, this.playingPlayersCount = e.playingPlayersCount, this.timerStopResumeTime = e.willPlayStartTime, this.startingTime = e.startingTime, this.playerOnJoint = e.playerOnJoint, this.currentState = e.roomStatusNumber, this.setMttNameColor(e.fontColor ? new u(e.fontColor) : this.mttNameDefaultColor), this.setBannerActive(e.iconType, e.bannerType, e.pageType), super.render(e), this.updateMttTimeStatus(e), this.setPin(e.showingPosition, e.isRegistered, e.hidePin), this.setUserState(e.roomStatusNumber, e.isRegistered, e.userJoinState), this.setStartDate(this.startingTime, this.playerOnJoint), this.setPrizePoolBg(e.prizePoolOverlay), this.updateBuyInTitle()
        }
        updateBuyInTitle() {
            if (_.appConfig.isLandscapeLayout) {
                let e = this.currencyBuyIn.value;
                this.isAddBuyInText && (this.currencyBuyIn.string = S("GAME_LIST.BUY_IN_FEE") + ": " + e)
            } else this.buyInLabel.string = S("GAME_LIST.BUY_IN_FEE") + ":"
        }
        setUserState(e, t, r) {
            if (c(this.userStatusNode))
                if (t) {
                    this.userStatusNode.active = !0;
                    let t = 0;
                    switch (e) {
                        case p.commonProto.MTT_GAME_STATUS.NOT_STARTED:
                            t = 0;
                            break;
                        case p.commonProto.MTT_GAME_STATUS.STARTED:
                        case p.commonProto.MTT_GAME_STATUS.STARTED + 100:
                        case p.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                        case p.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
                            t = r < 0 ? 2 : 1;
                            break;
                        case p.commonProto.MTT_GAME_STATUS.ENDED:
                            t = 2
                    }
                    0 == t ? (this.userStatusBg.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Bg_Text_Registered), this.userStatusText.string = _.StringTools.convertText(S("PKWMTT.GAMELIST.SIGNED_UP"), B.Uppercase_All)) : 1 == t ? (this.userStatusBg.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Bg_Text_Playing), this.userStatusText.string = _.StringTools.convertText(S("PKWMTT.GAMELIST.PLAYING"), B.Uppercase_All)) : (this.userStatusBg.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Bg_Text_Finished), this.userStatusText.string = _.StringTools.convertText(S("PKWMTT.GAMELIST.USER_STATE_OUT"), B.Uppercase_All))
                } else this.userStatusNode.active = !1;
            this.updateMttNameMaxWidth()
        }
        setStartDate(e, t) {
            if (!c(this.startDateLabel, !0)) return;
            const r = g.getStartDateTimeString(e, t);
            _.appConfig.isLandscapeLayout ? this.startDateLabel.string = r : this.startDateLabel.string = S("GAME_LIST.GAME_START_INFO_START_TIME") + " : " + r
        }
        setColorStatus(e, t) {}
        getStringTimeLeftSecDateOrTime(e, t) {
            if (e <= 86400) {
                let {
                    hr: t,
                    min: r,
                    sec: i
                } = y.splitSecond(e);
                return t > 0 ? `${t}${S("TIME.HOUR")} ${r}${S("TIME.MINUTE")}` : `${r}${S("TIME.MINUTE")}`
            }
            return y.showDateOrTime(t, !1, !0)
        }
        setDateStatus(e, t, r, i, n, a, o) {}
        setPrizePoolBg(e) {
            if (c(this.prizePoolOverlayBG) ? (this.prizePoolBG.active = !e, this.prizePoolOverlayBG.active = e) : this.prizePoolBG.active = !0, this.applyGamePrizePoolColor(e, this.prizePoolTitleColor, this.prizePoolValColor), c(this.prizePoolValColor) && c(this.prizePoolValColor.node)) {
                const e = this.prizePoolValColor.node.getComponent(C);
                c(e) && (e.enabled = !1, e.enabled = !0)
            }
        }
        applyGamePrizePoolColor(e, t, r) {
            _.appConfig.isLandscapeLayout ? this.scheduleOnce((() => {
                g.applyGameLandscapePrizePoolColor(e, t, r)
            }), 0) : g.applyGamePrizePoolColor(e, t, r)
        }
        updateStarted() {}
        getTimerResumeTimeSec() {
            return this.timerStopResumeTime && this.timerStopResumeTime > y.getServerNow().getTime() ? Math.floor(y.timeStampToTimeLeftSec(new Date(this.timerStopResumeTime).getTime())) : 0
        }
        setBannerActive(e = 0, t = 0, r = 0) {
            this.bannerBg.getComponent(s).spriteFrame = this.pageTypeBgList[P.None], r != P.None ? this.setPageBannerDisplay(r) : this.setBannerDisplay(e, t), this.mttNameBg.active = !this.bannerBg.node.active, this.updateMttNameMaxWidth()
        }
        setBannerBorderSprite(e, t = null) {
            c(this.bannerBorderSprite) && (this.bannerBorderSprite.node.active = e, this.bannerBorderSprite.spriteFrame = t)
        }
        setBannerIconSprite(e) {
            if (c(this.bannerIcon) && (this.bannerIcon.spriteFrame = e, c(e))) {
                let t = e.originalSize.width / e.originalSize.height;
                this.bannerIcon.node.setContentSize(this.bannerIcon.node.getContentSize().height * t, this.bannerIcon.node.getContentSize().height)
            }
        }
        setPageBannerDisplay(e) {
            if (this.bannerIcon.node.active = !0, this.bannerBg.node.active = !0, this.bannerBorder.node.active = !0, this.setBannerBorderSprite(!1), c(this.pageTypeIconList[e]) ? this.setBannerIconSprite(this.pageTypeIconList[e]) : (this.setBannerIconSprite(null), this.bannerIcon.node.active = !1), c(this.pageTypeBgList[e]) ? (this.bannerBg.getComponent(s).spriteFrame = this.pageTypeBgList[e], this.bannerBg.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_BG_NONE)) : this.bannerBg.node.active = !1, c(this.pageTypeBorderList[e]) && (this.bannerBorder.node.active = !0, this.setBannerBorderSprite(!0, this.pageTypeBorderList[e])), this.bannerBorder.node.active) switch (e) {
                case P.WPTDailyAsia:
                    this.bannerBorder.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_WPTDailyAsia_G1), this.bannerBorder.setEndColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_WPTDailyAsia_G2);
                    break;
                case P.DailyPrime:
                    this.bannerBorder.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_DailyPrime_G1), this.bannerBorder.setEndColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_DailyPrime_G2);
                    break;
                case P.OneShot:
                    this.bannerBorder.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_OneShot_G1), this.bannerBorder.setEndColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_OneShot_G2);
                    break;
                case P.HyperDash:
                    this.bannerBorder.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_HyperDash_G1), this.bannerBorder.setEndColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_HyperDash_G2);
                    break;
                case P.WeeklyGoldenBounty:
                    this.bannerBorder.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_WeeklyGoldenBounty_G1), this.bannerBorder.setEndColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_WeeklyGoldenBounty_G2);
                    break;
                case P.WPTMysteryMillion:
                    this.bannerBorder.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_WPTMysteryMillion_G1), this.bannerBorder.setEndColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_WPTMysteryMillion_G2);
                    break;
                case P.CrazyFreeroll:
                    this.bannerBorder.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_CrazyFreeroll_G1), this.bannerBorder.setEndColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_CrazyFreeroll_G2);
                    break;
                default:
                    this.bannerBorder.node.active = !1
            }
        }
        setBannerDisplay(e, t) {
            switch (this.bannerIcon.node.active = !0, this.bannerBg.node.active = !0, this.bannerBorder.node.active = !0, this.setBannerBorderSprite(!1), e) {
                case p.commonProto.MttIcon.CNYIcon:
                    this.setBannerIconSprite(this.bannerIconList[0]);
                    break;
                case p.commonProto.MttIcon.WeeklyGoldenIcon:
                    this.setBannerIconSprite(this.bannerIconList[1]);
                    break;
                case p.commonProto.MttIcon.WPTIcon:
                    this.setBannerIconSprite(this.bannerIconList[2]);
                    break;
                case p.commonProto.MttIcon.BountyIcon:
                    this.setBannerIconSprite(this.bannerIconList[3]);
                    break;
                default:
                    this.bannerIcon.node.active = !1
            }
            switch (t) {
                case p.commonProto.MttBanner.CNYBanner:
                    this.bannerBg.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_CNY_BG), this.bannerBorder.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_CNY_Gradient1), this.bannerBorder.setEndColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_CNY_Gradient2);
                    break;
                case p.commonProto.MttBanner.WeeklyGoldenBanner:
                    this.bannerBg.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_WeeklyGolden_BG), this.bannerBorder.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_WeeklyGolden_Gradient1), this.bannerBorder.setEndColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_WeeklyGolden_Gradient2);
                    break;
                case p.commonProto.MttBanner.WPTBanner:
                    this.bannerBg.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_WPT_BG), this.bannerBorder.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_WPT_Gradient1), this.bannerBorder.setEndColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_WPT_Gradient2);
                    break;
                case p.commonProto.MttBanner.BountyBanner:
                    this.bannerBg.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Bounty_BG), this.bannerBorder.setColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_Bounty_Gradient1), this.bannerBorder.setEndColorScheme(T.LobbyV2, I.ListItem_Mtt_Banner_Border_Bounty_Gradient2);
                    break;
                default:
                    this.bannerBg.node.active = !1, this.bannerBorder.node.active = !1
            }
        }
        updateMttNameMaxWidth() {
            let e = this.mttNameWidgetRightOrignal,
                t = this.userStatusNode.active ? this.mttNameWidgetRightStatus : this.mttNameWidgetRightOrignal,
                r = this.bannerIcon.node.active ? this.mttNameWidgetRightBanner : this.mttNameWidgetRightOrignal;
            e = Math.max(this.mttNameWidgetRightOrignal, t, r), this.mttNameMaxWidth.right = e, this.mttNameMaxWidth.updateAlignment()
        }
        setRoomName(e, t, r) {
            if (this.roomName = e, this.roomNameI18n = t, r && r.length > 0) this.labelName.setString(r, this.isForcedAutoResizeName, !0);
            else {
                const r = cc_mtt.vv.DataManager.i18DataFromServer(e, t);
                this.labelName.setString(r, this.isForcedAutoResizeName, !0)
            }
        }
        createMttGameItemTimeStatusData(e) {
            let t = new f;
            return t.status = e.roomStatusNumber, t.roomStatusI18nKey = e.roomStatusI18nKey, t.startingTime = e.startingTime, t.timeStampLateReg = e.timeStampLateReg, t.duration = e.duration, t.allowSignupDate = e.allowSignupDate, t.timerStop = e.timerStop, t.playingPlayersCount = e.playingPlayersCount, t.registeredPlayer = e.registeredPlayer, t.willPlayStartTime = e.willPlayStartTime, t.playerOnJoint = e.playerOnJoint, t.rebuyStatus = e.rebuyStatus, t
        }
        updateMttTimeStatus(e) {
            c(this.timeStatus) && this.timeStatus.applyData(this.createMttGameItemTimeStatusData(e))
        }
        onLanguageChanged() {
            null != this.data ? (super.onLanguageChanged(), this.setBuyIn(this.data.buyIn, this.data.showTicketStringOnBuyIn, this.data.currency, this.data.convertCurrency, this.data.displayCurrency, this.data.currencyRate, this.data.multiFlightLevel), this.updateBuyInTitle()) : console.warn("Data is null, cannot proceed with language change updates.")
        }
        setMttNameColor(e) {
            this.labelName.color = e
        }
    }).prototype, "startDateLabel", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = t(ae.prototype, "userStatusNode", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = t(ae.prototype, "userStatusBg", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = t(ae.prototype, "userStatusText", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = t(ae.prototype, "pinNode", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = t(ae.prototype, "statusTimeTitle", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = t(ae.prototype, "isAddBuyInText", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), be = t(ae.prototype, "buyInLabel", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = t(ae.prototype, "prizePoolBG", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = t(ae.prototype, "prizePoolOverlayBG", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ye = t(ae.prototype, "prizePoolTitleColor", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = t(ae.prototype, "prizePoolValColor", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Be = t(ae.prototype, "bannerIconList", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), _e = t(ae.prototype, "bannerBg", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Se = t(ae.prototype, "bannerBorder", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Te = t(ae.prototype, "bannerIcon", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ie = t(ae.prototype, "bannerContainer", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Le = t(ae.prototype, "pageTypeBgList", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Me = t(ae.prototype, "pageTypeIconList", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), fe = t(ae.prototype, "pageTypeBorderList", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Pe = t(ae.prototype, "bannerBorderSprite", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ce = t(ae.prototype, "mttNameMaxWidth", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ge = t(ae.prototype, "mttNameBg", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ne = t(ae.prototype, "mttNameWidgetRightStatus", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 180
        }
    }), ze = t(ae.prototype, "mttNameWidgetRightBanner", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 136
        }
    }), ve = t(ae.prototype, "mttNameWidgetRightOrignal", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 13
        }
    }), we = t(ae.prototype, "timeStatus", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), De = t(ae.prototype, "isForcedAutoResizeName", [re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), Re = t(ae.prototype, "mttNameDefaultColor", [ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new u("#D6DDE4")
        }
    }), ne = ae)) || ne));
    i._RF.pop()
}