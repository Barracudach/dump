import * as r from "./cc.js";
import * as e from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as s from "./ThemeSystem.js";
import * as n from "./ThemeSystemForGradient.js";
import * as _ from "./ColorSystemType.js";
import * as l from "./ColorsystemLobbyV2.js";
import * as T from "./CrashTracing.js";
import * as M from "./CrashTracing.js";
import * as m from "./StringTools.js";
import * as c from "./borderGraphic.js";
import * as u from "./NodePage.js";
import * as g from "./Translator.js";
import * as S from "./Pb.js";
import * as p from "./LobbyResourcesHelper.js";
import * as d from "./MttItemHelper.js";
import * as I from "./MttGameItemColorIndentifier.js";
import * as E from "./LobbyV2ColorMap.js";
import * as L from "./LobbyTools.js";
import * as P from "./cv.js";
import * as D from "./FormatParser.js";
import * as R from "./CommonTools.js";
import * as A from "./CommonTools.js";
import * as O from "./Enum.js";

function main() {
    var h;
    e._RF.push({}, "1e929uV4ehK0r8JGN7uyQ8Z", "MttItemRenderHelper", void 0);
    let y = t("ExtendMTTGameStatus", function(t) {
        return t[t.Registered = -1] = "Registered", t[t.NotStarted = 0] = "NotStarted", t[t.Paused = 100] = "Paused", t[t.NotStartedAndOver1Hour = 200] = "NotStartedAndOver1Hour", t[t.Announced = 300] = "Announced", t
    }({}));
    class G {
        static getSignUpButtonColorMap() {
            let t = new E;
            const e = [];
            e.push(l.HallMttDetail_Bg_ButtonActive), e.push(l.HallMttDetail_Text_ButtonActive);
            const a = [];
            a.push(l.HallMttDetail_Bg_ButtonDisable), a.push(l.HallMttDetail_Text_ButtonDisable);
            const o = [];
            return o.push(l.HallMttDetail_Bg_ButtonUnregister), o.push(l.HallMttDetail_Text_ButtonUnregister), t.data.set(1, e), t.data.set(2, a), t.data.set(3, o), t
        }
        static getSpeedColorMap() {
            let t = new E;
            const e = [];
            e.push(l.HallMttDetail_BgSpeed_Normal_From), e.push(l.HallMttDetail_BgSpeed_Normal_To);
            const a = [];
            a.push(l.HallMttDetail_BgSpeed_Turbo_From), a.push(l.HallMttDetail_BgSpeed_Turbo_To);
            const o = [];
            return o.push(l.HallMttDetail_BgSpeed_Hyper_From), o.push(l.HallMttDetail_BgSpeed_Hyper_To), t.data.set(0, e), t.data.set(1, a), t.data.set(2, o), t
        }
        static getGameModeColorMap() {
            let t = new E;
            const e = [];
            e.push(l.HallMttDetail_Bg_NHLE), e.push(l.HallMttDetail_Text_NHLE);
            const a = [];
            a.push(l.HallMttDetail_Bg_PLO), a.push(l.HallMttDetail_Text_PLO);
            const o = [];
            return o.push(l.HallMttDetail_Bg_SD), o.push(l.HallMttDetail_Text_SD), t.data.set(S.commonProto.MTT_GAME_MODE.NLH, e), t.data.set(S.commonProto.MTT_GAME_MODE.OMAHA, a), t.data.set(S.commonProto.MTT_GAME_MODE.SHORT_DECK, o), t
        }
        static getGameDetailStatusColorMap() {
            let t = new E;
            const e = [l.ListItem_Mtt_Bg_Text_Register, l.HallMttDetail_Text_StateRoom_Register, l.HallMttDetail_TextTime_Register, l.HallMttDetail_Icon_Register, l.ListItem_Mtt_Bg_Text_Register],
                a = [l.ListItem_Mtt_Background_Running, l.HallMttDetail_Text_StateRoom_Running, l.HallMttDetail_TextTime_Running, l.HallMttDetail_Icon_Running, l.ListItem_Mtt_Bg_Text_Running],
                o = [l.ListItem_Mtt_Background_LateReg, l.HallMttDetail_Text_StateRoom_LateReg, l.HallMttDetail_TextTime_LateReg, l.HallMttDetail_Icon_LateReg, l.ListItem_Mtt_Bg_Text_LateReg],
                i = [l.ListItem_Mtt_Background_Registered, l.ListItem_Mtt_Text_Registered, l.ListItem_Mtt_Text_Registered, l.ListItem_Mtt_Text_Registered, l.ListItem_Mtt_Bg_Text_Registered],
                r = [l.ListItem_Mtt_Background_Running, l.HallMttDetail_Text_StateRoom_Running, l.HallMttDetail_TextTime_Running, l.HallMttDetail_Icon_Running, l.ListItem_Mtt_Bg_Text_Running],
                s = [l.ListItem_Mtt_Background_Running, l.HallMttDetail_Text_StateRoom_Running, l.HallMttDetail_TextTime_Running, l.HallMttDetail_Icon_Running, l.ListItem_Mtt_Bg_Text_Running];
            return t.data.set(S.commonProto.MTT_GAME_STATUS.NOT_STARTED, e), t.data.set(S.commonProto.MTT_GAME_STATUS.STARTED, o), t.data.set(S.commonProto.MTT_GAME_STATUS.STARTED + 100, o), t.data.set(S.commonProto.MTT_GAME_STATUS.STOP_SIGNUP, a), t.data.set(S.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100, a), t.data.set(S.commonProto.MTT_GAME_STATUS.ENDED, s), t.data.set(y.Registered, i), t.data.set(y.Paused, r), t.spriteData.set(S.commonProto.MTT_GAME_STATUS.NOT_STARTED, this.registerSprites), t.spriteData.set(S.commonProto.MTT_GAME_STATUS.STARTED, this.lateRegSprites), t.spriteData.set(S.commonProto.MTT_GAME_STATUS.STARTED + 100, this.lateRegSprites), t.spriteData.set(S.commonProto.MTT_GAME_STATUS.STOP_SIGNUP, this.runningSprites), t.spriteData.set(S.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100, this.runningSprites), t.spriteData.set(S.commonProto.MTT_GAME_STATUS.ENDED, this.endSprites), t.spriteData.set(y.Registered, this.registeredSprites), t.spriteData.set(y.Paused, this.pausedSprites), t
        }
        static getgamePrizePoolColorMap() {
            let t = new E;
            const e = [l.ListItem_Mtt_Text, l.ListItem_Mtt_Text_PrizePoolValue_Normal, l.ListItem_Mtt_Text_PrizePoolValue_Normal],
                a = [l.ListItem_Mtt_Text_PrizePool_Title2, l.ListItem_Mtt_Text_PrizePoolValue_Gradient1, l.ListItem_Mtt_Text_PrizePoolValue_Gradient2];
            return t.data.set(0, e), t.data.set(1, a), t
        }
        static getgameLandscapePrizePoolColorMap() {
            let t = new E;
            const e = [l.ListItem_Mtt_Text, l.ListItem_Mtt_Text_PrizePoolValue_Gradient1, l.ListItem_Mtt_Text_PrizePoolValue_Gradient2],
                a = [l.ListItem_Mtt_Text_PrizePool_Title2, l.ListItem_Mtt_Text_PrizePoolValue_Gradient1, l.ListItem_Mtt_Text_PrizePoolValue_Gradient2];
            return t.data.set(0, e), t.data.set(1, a), t
        }
        static getGameStatusColorMap() {
            let t = new E;
            const e = [l.ListItem_Mtt_Background_Register, l.ListItem_Mtt_Bg_Text_Register, l.ListItem_Mtt_Title_Other_Text, l.HallMttDetail_Icon_Register, l.ListItem_Mtt_Bg_Text_Register],
                a = [l.ListItem_Mtt_Background_Running, l.ListItem_Mtt_Bg_Text_Running, l.ListItem_Mtt_Title_Other_Text, l.HallMttDetail_Icon_Running, l.ListItem_Mtt_Bg_Text_Running],
                o = [l.ListItem_Mtt_Background_LateReg, l.ListItem_Mtt_Bg_Text_LateReg, l.ListItem_Mtt_Title_Other_Text, l.HallMttDetail_Icon_LateReg, l.ListItem_Mtt_Bg_Text_LateReg],
                i = (l.ListItem_Mtt_Background_Registered, l.ListItem_Mtt_Bg_Text_Register, l.ListItem_Mtt_Title_Other_Text, l.ListItem_Mtt_Text_Registered, l.ListItem_Mtt_Bg_Text_Registered, [l.ListItem_Mtt_Background_Running, l.ListItem_Mtt_Bg_Text_Running, l.ListItem_Mtt_Title_Other_Text, l.HallMttDetail_Icon_Running, l.ListItem_Mtt_Bg_Text_Running]),
                r = [l.ListItem_Mtt_Background_Paused, l.ListItem_Mtt_Title_Other_Text, l.ListItem_Mtt_Title_Other_Text],
                s = [l.ListItem_Mtt_Background_Register, l.ListItem_Mtt_Bg_Text_NotStarted_Over1Hour, l.ListItem_Mtt_Title_Other_Text, l.HallMttDetail_Icon_Register, l.ListItem_Mtt_Bg_Text_NotStarted_Over1Hour];
            return t.data.set(S.commonProto.MTT_GAME_STATUS.NOT_STARTED, e), t.data.set(S.commonProto.MTT_GAME_STATUS.STARTED, o), t.data.set(S.commonProto.MTT_GAME_STATUS.STARTED + 100, r), t.data.set(S.commonProto.MTT_GAME_STATUS.STOP_SIGNUP, a), t.data.set(S.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100, r), t.data.set(S.commonProto.MTT_GAME_STATUS.ENDED, i), t.data.set(y.NotStartedAndOver1Hour, s), t
        }
        static getTitleDetailColorMap() {
            let t = G.getCommonTitleColorMap();
            const e = S.commonProto;
            return t.spriteData.set(e.MttIcon.WPTTrophy, ["icon_series"]), t.spriteData.set(e.MttIcon.KoreaFlag, ["live_korea"]), t.spriteData.set(e.MttIcon.MainEventPassport, ["live_passport"]), t.spriteData.set(e.MttIcon.PrimePassport, ["live_prime"]), t.spriteData.set(e.MttIcon.Crown, ["special_kingofcash"]), t.spriteData.set(e.MttIcon.Medals, ["special_rakeback"]), t.spriteData.set(e.MttIcon.BumpUp, ["special_bump_up"]), t.spriteData.set(e.MttIcon.BountyHunterAim, ["ko"]), t.spriteData.set(e.MttIcon.PKOGlove, ["pko"]), t
        }
        static getTitleColorMap() {
            let t = G.getCommonTitleColorMap();
            const e = S.commonProto;
            return t.spriteData.set(e.MttIcon.WPTTrophy, ["title_icon_series"]), t.spriteData.set(e.MttIcon.KoreaFlag, ["title_icon_live_korea"]), t.spriteData.set(e.MttIcon.MainEventPassport, ["title_icon_live_passport"]), t.spriteData.set(e.MttIcon.PrimePassport, ["title_icon_live_prime"]), t.spriteData.set(e.MttIcon.Crown, ["title_icon_special_kingofcash"]), t.spriteData.set(e.MttIcon.Medals, ["title_icon_special_rakeback"]), t.spriteData.set(e.MttIcon.BumpUp, ["title_icon_special_bump_up"]), t.spriteData.set(e.MttIcon.BountyHunterAim, ["title_icon_ko"]), t.spriteData.set(e.MttIcon.PKOGlove, ["title_icon_pko"]), t
        }
        static getCommonTitleColorMap() {
            let t = new E;
            const e = [l.ListItem_Mtt_Title_Series_Gradient1, l.ListItem_Mtt_Title_Series_Gradient2, l.ListItem_Mtt_Title_Series_Text],
                a = [l.ListItem_Mtt_Title_Live_Gradient1, l.ListItem_Mtt_Title_Live_Gradient2, l.ListItem_Mtt_Title_Live_Text],
                o = [l.ListItem_Mtt_Title_Satellite_Gradient1, l.ListItem_Mtt_Title_Satellite_Gradient2, l.ListItem_Mtt_Title_Satellite_Text],
                i = [l.ListItem_Mtt_Title_Special_Gradient1, l.ListItem_Mtt_Title_Special_Gradient2, l.ListItem_Mtt_Title_Special_Text],
                r = [l.ListItem_Mtt_Title_ShortDeck_Gradient1, l.ListItem_Mtt_Title_ShortDeck_Gradient2, l.ListItem_Mtt_Title_ShortDeck_Text],
                s = [l.ListItem_Mtt_Title_PKO_Gradient1, l.ListItem_Mtt_Title_PKO_Gradient2, l.ListItem_Mtt_Title_PKO_Text],
                n = [l.ListItem_Mtt_Title_Bounty_Gradient1, l.ListItem_Mtt_Title_Bounty_Gradient2, l.ListItem_Mtt_Title_Bounty_Text],
                _ = [l.ListItem_Mtt_Title_OverTenThousand_Gradient1, l.ListItem_Mtt_Title_OverTenThousand_Gradient2, l.ListItem_Mtt_Title_OverThenThousand_Text],
                T = [l.ListItem_Mtt_Title_Other_Gradient1, l.ListItem_Mtt_Title_Other_Gradient2, l.ListItem_Mtt_Title_Other_Text];
            return t.data.set(I.Series, e), t.data.set(I.Satellite, o), t.data.set(I.Live, a), t.data.set(I.Special, i), t.data.set(I.ShortDeck, r), t.data.set(I.PKO, s), t.data.set(I.Bounty, n), t.data.set(I.OverTenThousand, _), t.data.set(I.Other, T), t
        }
        static getTitleIconColorMap() {
            let t = new E;
            const e = [l.ListItem_Mtt_Title_Series_Details_Gradient1, l.ListItem_Mtt_Title_Series_Details_Gradient2, l.ListItem_Mtt_Title_Series_Details_Stroke],
                a = [l.ListItem_Mtt_Title_Live_Details_Gradient1, l.ListItem_Mtt_Title_Live_Details_Gradient2, l.ListItem_Mtt_Title_Live_Details_Stroke],
                o = [l.ListItem_Mtt_Title_Special_Details_Gradient1, l.ListItem_Mtt_Title_Special_Details_Gradient2, l.ListItem_Mtt_Title_Special_Details_Stroke],
                i = [l.ListItem_Mtt_Title_PKO_Details_Gradient1, l.ListItem_Mtt_Title_PKO_Details_Gradient2, l.ListItem_Mtt_Title_PKO_Details_Stroke],
                r = [l.ListItem_Mtt_Title_KO_Details_Gradient1, l.ListItem_Mtt_Title_KO_Details_Gradient1, l.ListItem_Mtt_Title_KO_Details_Stroke],
                s = (l.ListItem_Mtt_Title_PKO_Details_Gradient1, l.ListItem_Mtt_Title_PKO_Details_Gradient2, l.ListItem_Mtt_Title_PKO_Details_Stroke, S.commonProto);
            return t.data.set(s.MttIcon.WPTTrophy, e), t.data.set(s.MttIcon.KoreaFlag, a), t.data.set(s.MttIcon.MainEventPassport, a), t.data.set(s.MttIcon.PrimePassport, a), t.data.set(s.MttIcon.Crown, o), t.data.set(s.MttIcon.Medals, o), t.data.set(s.MttIcon.BumpUp, o), t.data.set(s.MttIcon.PKOGlove, i), t.data.set(s.MttIcon.BountyHunterAim, r), t
        }
        static getGameMode(t) {
            let e = null;
            switch (t) {
                case S.commonProto.MTT_GAME_MODE.NLH:
                    e = g("MTT_GAME_MODE.NLH");
                    break;
                case S.commonProto.MTT_GAME_MODE.SHORT_DECK:
                    e = g("MTT_GAME_MODE.SHORT_DECK");
                    break;
                case S.commonProto.MTT_GAME_MODE.OMAHA:
                    e = g("MTT_GAME_MODE.OMAHA")
            }
            return e
        }
        static getGameModeFullName(t) {
            let e = null;
            switch (t) {
                case S.commonProto.MTT_GAME_MODE.NLH:
                    e = g("NLHE_Text_Title");
                    break;
                case S.commonProto.MTT_GAME_MODE.SHORT_DECK:
                    e = g("Short_Deck_text_Title");
                    break;
                case S.commonProto.MTT_GAME_MODE.OMAHA:
                    e = g("Rules_Mtt_Pot_Limit_Omaha_Game_Title")
            }
            return e
        }
        static getGameSpeedString(t) {
            let e = null;
            switch (t) {
                case S.commonProto.MTT_MODE.Normal:
                    e = g("PKWMTT.GAMELIST.FILTER.SPEED.NORMAL");
                    break;
                case S.commonProto.MTT_MODE.Turbo:
                    e = g("PKWMTT.GAMELIST.FILTER.SPEED.TURBO");
                    break;
                case S.commonProto.MTT_MODE.Hyper:
                    e = g("PKWMTT.GAMELIST.FILTER.SPEED.HYPER")
            }
            return e
        }
        static applyGradientColor(t, e, a) {
            if (t && t.data && t.data.has(e)) {
                const t = G.speedColorMap.data.get(e);
                if (!t || 0 == t.length) return;
                const o = t[0],
                    i = t[t.length - 1];
                a.colorSchemeLobbyV2 = o, a.toColorSchemeLobbyV2 = i, a.applyTheme()
            }
        }
        static applyGameSpeedColor(t, e) {
            G.applyGradientColor(G.speedColorMap, t, e)
        }
        static applyGameModeColor(t, e, a) {
            const o = G.gameModeColorMap;
            if (o && o.data && o.data.has(t)) {
                const i = o.data.get(t);
                if (!i || 0 == i.length) return;
                const r = i[0],
                    s = i[i.length - 1];
                e instanceof c ? (e.setFillColorScheme(_.LobbyV2, r), e.update()) : e.setColorScheme(_.LobbyV2, r), a.setColorScheme(_.LobbyV2, s), a.applyTheme()
            }
        }
        static applySignUpColor(t, e) {
            G.applyColorLstMtt(t, G.signUpButtonColorMap, e)
        }
        static applyGameStatusColor(t, e, a, o, i) {
            const r = [e, a, o, i];
            G.applyColorLstMtt(t, G.gameStatusColorMap, r)
        }
        static applyGameDetailStatusColorLstMtt(t, e) {
            G.applyColorLstMtt(t, G.gameDetailStatusColorMap, e)
        }
        static applyGameStatusColorLstMtt(t, e) {
            G.applyColorLstMtt(t, G.gameStatusColorMap, e)
        }
        static applyDetailMttStatusLandscape(t, e) {
            G.applyColorLstMtt(t, G.detailMttStatusLandscapeColorMap, e)
        }
        static applyTitleColor(t, e) {
            G.applyColorLstMtt(t, G.titleColorMap, e)
        }
        static applyGamePrizePoolColor(t, e, a) {
            let o = [e, a];
            G.applyColorLstMtt(t ? 1 : 0, G.gamePrizePoolColorMap, o)
        }
        static applyGameLandscapePrizePoolColor(t, e, a) {
            let o = [e, a];
            G.applyColorLstMtt(t ? 1 : 0, G.gameLandscapePrizePoolColorMap, o)
        }
        static applyColorLstMtt(t, e, a) {
            if (e && e.data && e.data.has(t)) {
                const o = e.data.get(t);
                if (!o || o.length < a.length) return;
                for (let t = 0, e = 0; t < a.length && e < o.length; t++) {
                    const i = a[t];
                    i instanceof c ? (i.setFillColorScheme(_.LobbyV2, o[e]), i.update()) : i instanceof n ? (i.colorSchemeLobbyV2 = o[e], e + 1 < o.length && (e++, i.toColorSchemeLobbyV2 = o[e]), i.applyTheme()) : i instanceof s && (i.setColorScheme(_.LobbyV2, o[e]), i.applyTheme()), e++
                }
            }
        }
        static haveAssetPath(t, e = 0) {
            return t.spriteData.has(e) && t.spriteData.get(e).length > 0
        }
        static setSprite(t, e, o, i = !1) {
            if (a(t) && o)
                if (G.haveAssetPath(o, e)) {
                    const r = o.spriteData.get(e)[0];
                    p.getSpriteFrame(r, (o => {
                        var s, n;
                        a(t) && a(t.node) ? a(o) ? (t.node.active = !0, t.spriteFrame = o) : (null == (s = T.getInstance()) || s.trace(M.MTTLobby, "LoadIconStatusRoom", {
                            path: r,
                            status: e,
                            autoHide: i,
                            type: "SpriteFrameInvalid"
                        }), i && (t.node.active = !1)) : null == (n = T.getInstance()) || n.trace(M.MTTLobby, "LoadIconStatusRoom", {
                            path: r,
                            status: e,
                            autoHide: i,
                            type: "SpriteInvalid"
                        })
                    }), (t => {
                        var a;
                        null == (a = T.getInstance()) || a.trace(M.MTTLobby, "LoadIconStatusRoom", {
                            path: r,
                            status: e,
                            autoHide: i,
                            error: t,
                            type: "LoadSpriteFrameError"
                        })
                    }))
                } else {
                    var r;
                    null == (r = T.getInstance()) || r.trace(M.MTTLobby, "LoadIconStatusRoom", {
                        status: e,
                        autoHide: i,
                        type: "PathInvalid"
                    }), i && (t.node.active = !1)
                }
            else i && a(t) && (t.node.active = !1)
        }
        static setBuyIn(t, e, a, o, i = "", r, s, n = 0, _ = null) {
            let l = e > 0 ? `${e}` : g("PKWMTT.GAMELIST.FREE");
            n > 0 ? l = "N/A" : a && (l = g("PKWMTT.GAMELIST.TICKET")), t.updateVal(l, o, r, i, s, _)
        }
        static setBuyInWithAdminFee(t, e, a, o, i, r = "", s, n, _ = 0) {
            let l = e > 0 ? `${r}${e}` : g("PKWMTT.GAMELIST.FREE"),
                T = a > 0 ? l + " + " + (a > 0 ? `${r}${a}` : "") : l;
            _ > 0 && (T = "N/A"), t.updateVal(T, i, s, r, n, 4)
        }
        static setTimeLeftSecLabel(t, e, a, o) {
            if (e >= 0 && (!a || o)) {
                const a = d.getRemainTimeInHoursString(e);
                return t.string = a, !0
            }
            return !1
        }
        static setTimeLeftSecLabelLandscape(t, e, a, o) {
            if (e >= 0 && (!a || o)) {
                const a = d.getRemainTimeInHoursString(e);
                return t.string = a, !0
            }
            return !1
        }
        static setTimeLeftSecLandscapeInDetail(t, e, o, i, r) {
            t.node.active = !0, e.node.active = !0, i < 0 && (i = 0);
            let s = Math.floor(i / 3600),
                n = Math.floor(i / 86400);
            if (n >= 1) t.string = `${n}`, e.string = g("PKWMTT.GAMELIST.DAY");
            else if (s >= 1) t.string = `${s}`, e.string = g("PKWMTT.GAMELIST.HOUR");
            else {
                let a = Math.floor(i / 60);
                t.string = `${a}`, e.string = g("PKWMTT.GAMELIST.MIN")
            }
            if (r <= 0 && (r = 1), a(o)) {
                let t = i / r;
                o.fillRange = t
            }
        }
        static setTimeRunningLandscapeInDetail(t, e, o, i) {
            t.node.active = !0, e.node.active = !0;
            let r = Math.floor(i / 60);
            r = Math.floor(r), t.string = `${r}`, e.string = g("PKWMTT.GAMELIST.MIN"), a(o) && (o.fillRange = 1)
        }
        static setMttStatusTimeLabel_pasued(t, e) {
            let a = 0;
            return e < 0 ? t.string = g("PKWMTT.GAMELIST.TBD") : (e && e > d.getServerNow().getTime() && (a = Math.floor(d.timeStampToTimeLeftSec(e))), a < 0 && (a = 0), t.string = d.showRemainTime(!0, a, !0)), a
        }
        static setMttStatusTimeLabel_paused_landscape(t, e) {
            const a = g("GAME_LIST.TOURNAMENT_STATUS_PAUSE_INTEGRATE");
            let o = 0;
            return e < 0 ? t.string = `${a} (${g("PKWMTT.GAMELIST.TBD")})` : (e && e > d.getServerNow().getTime() && (o = Math.floor(d.timeStampToTimeLeftSec(e))), o < 0 && (o = 0), t.string = `${a} (${d.showRemainTime(!0,o)})`), o
        }
        static setDetailMttStatusTimeLabel_paused_landscape(t, e, a) {
            let o = 0;
            return -1 == a ? (e.node.active = !1, t.string = g("PKWMTT.GAMELIST.TBD")) : (a && a > d.getServerNow().getTime() && (o = Math.floor(d.timeStampToTimeLeftSec(a))), o < 0 && (o = 0), G.setTimeLeftSecLandscapeInDetail(t, e, null, o, o)), o
        }
        static setMttStatusTimeLabel_registering(t, e) {
            let a = Math.floor(d.timeStampToTimeLeftSec(e.getTime()));
            return t.string = G.getStringTimeLeftSecDateOrTime(a, e), a
        }
        static setMttStatusTimeLabel_registering_landscape(t, e) {
            let a = Math.floor(d.timeStampToTimeLeftSec(e.getTime()));
            return t.string = G.getStringTimeLeftSecDateOrTimeLandscape(a, e), a
        }
        static getStringTimeLeftSecDateOrTime(t, e) {
            if (t <= 86400) {
                let {
                    hr: e,
                    min: a,
                    sec: o
                } = d.splitSecond(t);
                return e > 0 ? `${e}${g("TIME.HOUR")} ${a}${g("TIME.MINUTE")}` : `${a}${g("TIME.MINUTE")}`
            }
            return d.showDateOrTime(e, !1, !0)
        }
        static getStringTimeLeftSecDateOrTimeLandscape(t, e) {
            let {
                hr: a,
                min: i,
                sec: r
            } = d.splitSecond(t);
            const s = d.showDateOrTime(e, !0, !0),
                n = o.formatStr(g("PKWMTT.GAMELIST.LANDSCAPE.IN_MIN"), i);
            return a > 0 ? s : n
        }
        static setMttStatusTimeLabel_running(t, e, a, o = !1) {
            t.string = o ? g("Mtt_Running") + ` (${e} / ${a})` : `${e} / ${a}`
        }
        static getRenderRoomStatus(t, e, a, o = !0) {
            let i = t;
            return e ? i = y.Paused : a && (i = y.Registered), i == y.NotStarted && 0 == o && (i = y.Announced), i
        }
        static getDetailMttStatusLandscapeColorMap() {
            let t = new E;
            const e = [l.HallMttDetail_Status_Text_Register, l.HallMttDetail_Status_Text_Register, l.HallMttDetail_Status_Text_Register, l.HallMttDetail_Status_Text_LateReg, l.HallMttDetail_Status_Text_Register],
                a = [l.HallMttDetail_Status_Text_Running, l.HallMttDetail_Status_Text_Running, l.HallMttDetail_Status_Text_Running, l.HallMttDetail_Status_Text_Running, l.HallMttDetail_Status_Text_Running],
                o = [l.HallMttDetail_Status_Text_LateReg, l.HallMttDetail_Status_Text_LateReg, l.ListItem_Mtt_Text, l.MttDetail_Bg_Timer, l.HallMttDetail_Status_Text_LateReg],
                i = [l.HallMttDetail_Status_Text_Register, l.HallMttDetail_Status_Text_Register, l.HallMttDetail_Status_Text_Register, l.HallMttDetail_Status_Text_LateReg, l.HallMttDetail_Status_Text_Register],
                r = [l.ListItem_Mtt_Text, l.ListItem_Mtt_Text, l.ListItem_Mtt_Text, l.MttDetail_ScrollBarBg, l.MttDetail_ScrollBarBg],
                s = [l.ListItem_Mtt_Text, l.ListItem_Mtt_Text, l.ListItem_Mtt_Text, l.MttDetail_ScrollBarBg, l.MttDetail_ScrollBarBg];
            return t.data.set(S.commonProto.MTT_GAME_STATUS.NOT_STARTED, e), t.data.set(S.commonProto.MTT_GAME_STATUS.NOT_STARTED + 200, i), t.data.set(S.commonProto.MTT_GAME_STATUS.NOT_STARTED + 300, s), t.data.set(S.commonProto.MTT_GAME_STATUS.STARTED, o), t.data.set(S.commonProto.MTT_GAME_STATUS.STARTED + 100, s), t.data.set(S.commonProto.MTT_GAME_STATUS.STOP_SIGNUP, a), t.data.set(S.commonProto.MTT_GAME_STATUS.ENDED, r), t
        }
        static setRoomName(t, e, a, o) {
            const i = cc_mtt.vv.DataManager.i18DataFromServer(e, a);
            t.setString(i)
        }
        static setPrizePool(t, e, a, o, i, r, s = !0) {
            const n = a ? L.appConfig.getWalletConfig().convertStringToCurrencyType(a) : R.None,
                _ = i ? L.appConfig.getWalletConfig().convertStringToCurrencyType(i.toString()) : R.None,
                l = t.getCurrencyShown(o, n, _);
            if (!s || m.prizePoolThreshold.has(l) && e < m.prizePoolThreshold.get(l)) t.updateVal(P.ThousandPointFormat(e), a, o, i, r);
            else {
                const s = m.ScientificNotationWithFormat(u.roundValue(e), 4);
                t.updateVal(s, a, o, i, r)
            }
        }
        static getStartDateTimeString(t, e) {
            let a = "";
            return a = d.checkStartingTime(t) ? d.showDateOrTime(t, !0) : "-", a
        }
        static getEstDurationString(t) {
            let e = "-";
            if (t > 0) {
                const {
                    hour: a,
                    min: o
                } = D.instance.splitSecond(t, {
                    hasDay: !1,
                    hasHour: !0
                });
                e = "", a > 0 && (e += `${a} ${g("TIME.HOURS")} `), e += `${o} ${g("TIME.MINUTES")}`
            }
            return e
        }
        static getDetailBuyInString(t, e, a, o) {
            let i = `${o+P.ThousandPointFormat(t-e,2)}`;
            return e > 0 && (i += `+${o+P.ThousandPointFormat(e,2)}`), i += `+${o+P.ThousandPointFormat(a)}`, i
        }
        static getCurrencySignString(t) {
            return t == A[R.USD].code ? A[R.USD].symbol : t == A[R.CNY].code ? A[R.CNY].shortSymbol : ""
        }
        static getStartingChipsString(t, e, a) {
            let o = P.ThousandPointFormat(t, 0),
                i = a[e > 0 ? e - 1 : 0];
            return i && (o += ` (${P.ThousandPointFormat(t/i.BigBlind,1)} BB)`), o
        }
        static getBountyString(t, e, a) {
            let i = "";
            L.appConfig.isLandscapeLayout;
            switch (t) {
                case S.commonProto.TOURNAMENT_MODE.HUNTER:
                    i = o.formatStr(g("PKWMTT.OVERVIEW.FIXED_BOUNTY"), e + P.DisplayGold(a.RegFee * a.HunterModeBountyProportion));
                    break;
                case S.commonProto.TOURNAMENT_MODE.SUPER_HUNTER:
                    i = o.formatStr(g("PKWMTT.OVERVIEW.PROGRESSIVE_BOUNTY"), `${e+P.DisplayGold(a.RegFee*a.HunterModeBountyProportion*(1-a.HunterModeBountyIncreasingRate))}`);
                    break;
                case S.commonProto.TOURNAMENT_MODE.Mystery:
                    i = a.MysteryType == S.commonProto.Mystery_Type.MysteryBlindLevel ? o.formatStr(g("PKWMTT.OVERVIEW.MYSTERY_BOUNTY_START_FROM_BLIND_LEVEL"), a.MysteryBlindLevel) : a.MysteryType == S.commonProto.Mystery_Type.MysteryPrizeCirlce ? g("PKWMTT.OVERVIEW.MYSTERY_BOUNTY_START_FROM_ITM") : a.MysteryType == S.commonProto.Mystery_Type.MysteryDay2 ? g("PKWMTT.OVERVIEW.MYSTERY_BOUNTY_START_FROM_DAY2") : a.MysteryType == S.commonProto.Mystery_Type.MysteryLeftPercent ? o.formatStr(g("PKWMTT.OVERVIEW.MYSTERY_BOUNTY_START_FROM_PLAYER_REMAIN"), P.RoundToDecimal(a.MysteryLeftPercent, 2)) : ""
            }
            return i
        }
        static getBountyTipText(t) {
            let e = "";
            switch (t.TournamentMode) {
                case S.commonProto.TOURNAMENT_MODE.HUNTER:
                    e = g("PKWMTT.OVERVIEW.FIXED_BOUNTY_TIP");
                    break;
                case S.commonProto.TOURNAMENT_MODE.SUPER_HUNTER:
                    e = o.formatStr(g("PKWMTT.OVERVIEW.PROGRESSIVE_BOUNTY_TIP"), P.RoundToDecimal(100 * t.HunterModeBountyProportion), P.RoundToDecimal(100 * (1 - t.HunterModeBountyIncreasingRate)), P.RoundToDecimal(100 * t.HunterModeBountyIncreasingRate));
                    break;
                case S.commonProto.TOURNAMENT_MODE.Mystery:
                    e = g("PKWMTT.OVERVIEW.MYSTERY_BOUNTY_TIP")
            }
            return e
        }
        static rendertMttInfoItem(t, e, i, r) {
            const {
                name: s,
                gameType: n,
                regFee: _,
                rebuyCount: l,
                moreBuyParam: T,
                bounty: M,
                guarantee: m,
                additionalPrizePool: c,
                startingChip: u,
                lateRegEndTimestamp: p,
                estimatedDuration: I,
                blindInterval: E,
                seats: L,
                minPlayers: R,
                breakDuration: A,
                currencySign: O
            } = t, h = {
                breakDuration: A,
                minPlayers: R,
                seats: L,
                blindInterval: E,
                estimatedDuration: I,
                lateRegEndTimestamp: p,
                startingChip: u,
                additionalPrizePool: c,
                guarantee: m,
                bounty: M,
                moreBuyParam: T,
                rebuyCount: l,
                regFee: _,
                gameType: n,
                name: s
            };
            for (const y in h) {
                a(i) && i(y);
                let h = "",
                    C = "",
                    N = "",
                    H = !0;
                switch (y) {
                    case "name":
                        h = g("PKWMTT.OVERVIEW.EVENT"), C = s;
                        break;
                    case "gameType":
                        switch (h = g("MTT_HALL.TAB.HALL.TOURNAMENT_DETAIL_HEADER.GAME_TYPE"), n) {
                            default:
                                C = "";
                                break;
                            case S.commonProto.MTT_GAME_MODE.NLH:
                                C = g("MTT_GAME_MODE.NLH");
                                break;
                            case S.commonProto.MTT_GAME_MODE.OMAHA:
                                C = g("MTT_GAME_MODE.OMAHA");
                                break;
                            case S.commonProto.MTT_GAME_MODE.SHORT_DECK:
                                C = g("MTT_GAME_MODE.SHORT_DECK")
                        }
                        break;
                    case "regFee":
                        h = g("PKWMTT.GAMELIST.HEADER.BUY_IN");
                        let a = t.bountyFee;
                        C = `${O+P.ThousandPointFormat(_-a,2)}`, a > 0 && (C += `+${O+P.ThousandPointFormat(a,2)}`), C += `+${O+P.ThousandPointFormat(t.srvFee)}`, t.multiFlightLevel > 0 && (C = "N/A");
                        break;
                    case "rebuyCount":
                        h = g("PKWMTT.OVERVIEW.REENTRY"), C = l > 0 ? l.toString() : g("NOT_AVAILABLE"), N = g("PKWMTT.OVERVIEW.REENTRY_TIP");
                        break;
                    case "moreBuyParam":
                        H = !(null == T || !T.defineParam), h = g("PKWMTT.OVERVIEW.ADD_ON"), C = null != T && T.defineParam ? o.formatStr(g("PKWMTT.OVERVIEW.ADD_ON_TXT"), T.quantity, P.ThousandPointFormat(T.initCoin), O + P.ThousandPointFormat(T.regFee + T.srvFee)) : "-", N = g("PKWMTT.OVERVIEW.ADD_ON_TIP");
                        break;
                    case "bounty":
                        H = t.tournamentMode != S.commonProto.TOURNAMENT_MODE.NORMAL, h = g("HISTORY_DETAIL.HEADER.BOUNTY"), C = M, N = G.getBountyTipText(e);
                        break;
                    case "guarantee":
                        h = g("PKWMTT.OVERVIEW.GUARANTEE"), C = m > 0 ? O + P.ThousandPointFormat(m) : "-", H = m > 0;
                        break;
                    case "additionalPrizePool":
                        H = c > 0, h = g("PKWMTT.OVERVIEW.ADDITIONAL_PRIZE_POOL"), C = O + P.ThousandPointFormat(c);
                        break;
                    case "startingChip":
                        h = g("PKWMTT.OVERVIEW.STARTING_CHIP"), H = 0 == e.MultiFlightLevel, C = P.ThousandPointFormat(u, 0);
                        let i = t.currentLevel > 0 ? t.currentLevel - 1 : 0,
                            r = t.blindConfig[i];
                        if (r) {
                            let e = t.isShortDeck ? r.Ante : r.BigBlind;
                            C += ` (${P.ThousandPointFormat(u/e,1)} BB)`
                        }
                        break;
                    case "lateRegEndTimestamp":
                        h = g("PKWMTT.OVERVIEW.LATE_REG");
                        let y = t.stopSignUpLevel - 1;
                        if (y > 0) {
                            const t = new Date(p);
                            C = `${d.showDateOrTime(t,!0,!0)} (${g("TOURNAMENT_DETAIL.TAB.BLIND_LEVEL.HEADER.LEVEL")} ${y})`
                        } else C = g("NOT_AVAILABLE");
                        break;
                    case "estimatedDuration":
                        if (h = g("PKWMTT.OVERVIEW.ESTIMATED_DURATION"), I <= 0) C = "-";
                        else {
                            const {
                                hour: t,
                                min: e
                            } = D.instance.splitSecond(I, {
                                hasDay: !1,
                                hasHour: !0
                            });
                            C = "", t > 0 && (C += `${t} ${g("TIME.HOURS")} `), C += `${e} ${g("TIME.MINUTES")}`
                        }
                        break;
                    case "blindInterval":
                        h = g("PKWMTT.OVERVIEW.BLIND_INTERVAL"), C = t.blindHand > 0 ? o.formatStr(g("PKWMTT.OVERVIEW.BLIND_HAND"), t.blindHand) : P.RoundToDecimal(E / 60, 2) + g("TIME.MINUTE_V2");
                        break;
                    case "seats":
                        h = g("PKWMTT.OVERVIEW.TABLE_TYPE"), C = o.formatStr(g("PKWMTT.OVERVIEW.TABLE_TYPE_TXT"), L);
                        break;
                    case "minPlayers":
                        h = g("PKWMTT.OVERVIEW.MIN_MAX_PLAYER"), C = `${P.ThousandPointFormat(R)}~${P.ThousandPointFormat(t.maxPlayers)}`;
                        break;
                    case "breakDuration":
                        h = g("PKWMTT.OVERVIEW.BREAK_TIME"), C = A > 0 ? o.formatStr(g("PKWMTT.OVERVIEW.BREAK_TIME_TXT"), A) : g("MTT_HALL.ABSTRACT.INTERMISSION_NONE")
                }
                let B = {
                    isShow: H,
                    name: h,
                    text: C,
                    hint: N
                };
                a(r) && r(y, B)
            }
        }
        static getFullAreaCode(t) {
            let e = t.split("+").pop();
            for (let t = 0; t < 238; t++) {
                let a = L.config.getStringData("areaCode" + t).split(",").pop(),
                    o = a.split("*").pop();
                if (o && o == e) return a.replace("*", "+")
            }
            return t
        }
        static getFlagCode(t) {
            let e = "",
                a = G.getFullAreaCode(t);
            return a.indexOf("+") > 0 && (e = a.split("+")[0]), e
        }
        static getNationFlag(t, e = "") {
            return new Promise(((o, s) => {
                let n = e || G.getFlagCode(t);
                if (n) {
                    var _;
                    n = null != (_ = O.Instance) && null != (_ = _.getLobbyConfig()) && _.restrictedNationFlagCodes.includes(n) ? "international" : n;
                    const t = `textures/nationFlags/${n.toLowerCase()}/spriteFrame`,
                        e = i.get(t);
                    var l;
                    if (e) o(e);
                    else null == (l = cc_mtt) || null == (l = l.vv) || null == (l = l.AssetsManager) || l.loadRes(`textures/nationFlags/${n.toLowerCase()}/spriteFrame`, r, ((t, e) => {
                        !t && a(e) ? o(e) : s()
                    }), !1)
                } else s()
            }))
        }
    }
    t("MttItemRenderHelper", G), h = G, G.registerSprites = ["Calendare"], G.lateRegSprites = ["Clock"], G.runningSprites = ["Running"], G.registeredSprites = ["registered"], G.endSprites = ["Running"], G.pausedSprites = ["paused"], G.signUpButtonColorMap = h.getSignUpButtonColorMap(), G.speedColorMap = h.getSpeedColorMap(), G.gameModeColorMap = h.getGameModeColorMap(), G.gameDetailStatusColorMap = h.getGameDetailStatusColorMap(), G.gamePrizePoolColorMap = h.getgamePrizePoolColorMap(), G.gameLandscapePrizePoolColorMap = h.getgameLandscapePrizePoolColorMap(), G.gameStatusColorMap = h.getGameStatusColorMap(), G.titleDetailsColorMap = h.getTitleDetailColorMap(), G.titleColorMap = h.getTitleColorMap(), G.titleIconColorMap = h.getTitleIconColorMap(), G.detailMttStatusLandscapeColorMap = h.getDetailMttStatusLandscapeColorMap(), e._RF.pop()
}