import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as F from "./cc.js";
import * as G from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as P from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as M from "./cc.js";
import * as b from "./cc.js";
import * as A from "./cc.js";
import * as o from "./cc.js";
import * as O from "./cc.js";
import * as l from "./cc.js";
import * as t from "./cc.js";
import * as d from "./cc.js";
import * as v from "./cc.js";
import * as i from "./cc.js";
import * as k from "./cc.js";
import * as T from "./cc.js";
import * as y from "./cc.js";
import * as I from "./Pb.js";
import * as B from "./GameChipsDrop.js";
import * as w from "./cv.js";
import * as N from "./AppConfig.js";
import * as D from "./aesHandler.js";
import * as L from "./HashMap.js";
import * as K from "./EncryptDecryptString.js";
import * as R from "./Enum.js";
import * as x from "./Enum.js";
import * as H from "./Enum.js";
import * as U from "./Enum.js";
import * as V from "./mttconfig.js";
import * as j from "./NativeEvent.js";
import * as Y from "./CrashTracing.js";
import * as W from "./CrashTracing.js";
import * as z from "./ColorSystemType.js";
import * as mod13 from "./ColorSystemTypeOther.js";
import * as Z from "./ThemeSystemModel.js";
import * as X from "./Helpers2.js";
import * as J from "./Helpers2.js";
import * as q from "./MessageSender.js";
import * as Q from "./ObjUtils.js";
import * as ee from "./node-extension.js";
import * as te from "./SafeAreaHelper.js";
import * as ne from "./CommonScriptsDependencies.js";
import * as oe from "./LocalizationController.js";

function main() {
    t._RF.push({}, "a58aa7yLwlOWZ2JdpMM2RyW", "Tools", void 0);
    class ae {
        constructor() {
            this.cardFaceKey = "user_cardface_type", this.cardBackKey = "user_cardback_type", this.tableBackKey = "user_tablebg_type", this.tableBackKey_star = "user_tablebg_type_star", this.m_eCardFaceType = 0, this.m_eCardBackType = 0, this.m_eTableBackType = 0, this.m_eTableBackType_star = -1, this.cardFaceJackfruitKey = "user_cardface_jackfruit_type", this.m_eCardFaceJackfruitType = 0, this.cardFacePloKey = "user_cardface_plo_type", this.m_eCardFacePloType = 0, this._bEnterbackground = !1, this._visiblePopupCount = 0, this.popupTypeVisible = []
        }
        static getInstance() {
            return ae.g_instance || (ae.g_instance = new ae), ae.g_instance
        }
        init() {
            let e = this.GetStringByCCFile(this.cardBackKey);
            const t = w.appConfig.getGameConfig().defaultCardBackSetting;
            this.SetCardBack(w.Number(e || t));
            let n = this.GetStringByCCFile(this.cardFaceKey);
            this.SetCardFace(w.Number(n || 0));
            let o = this.GetStringByCCFile(this.tableBackKey);
            this.SetTableBack(w.Number(o || 0));
            let a = this.GetStringByCCFile(this.cardFaceJackfruitKey);
            this.SetCardFaceJackfruit(w.Number(a || 0))
        }
        static isCocosSimulator() {
            return n(window.__quick_compile_project__, !0)
        }
        isCocosSimulator() {
            return ae.isCocosSimulator()
        }
        static isDesktopMultiWindowSupported() {
            return o.isNative && (o.os == o.OS.OSX || o.os == o.OS.WINDOWS) && !ae.isCocosSimulator()
        }
        SetCardFace(e) {
            let t;
            if (e = w.Number(e), e = Math.floor(e), t = w.appConfig.isLandscapeLayout ? w.Enum.CardFaceDesktop.CARD_FACE_MAX : N.Instance.getGameConfig().cardFaceList.length, e >= 0 && e < t) {
                let t = w.StringTools.formatC("%d", e);
                this.SaveStringByCCFile(this.cardFaceKey, t), this.m_eCardFaceType = e
            }
        }
        SetCardBack(e) {
            let t;
            if (e = w.Number(e), e = Math.floor(e), t = w.appConfig.isLandscapeLayout ? w.Enum.CardBackDesktop.CARD_BACK_MAX : w.Enum.CardBack.CARD_BACK_MAX, e >= 0 && e < t) {
                let t = w.StringTools.formatC("%d", e);
                this.SaveStringByCCFile(this.cardBackKey, t), this.m_eCardBackType = e
            }
        }
        SetTableBack(e, t = !1) {
            let n, o;
            if (e = w.Number(e), e = Math.floor(e), w.appConfig.isLandscapeLayout ? (o = 0, n = N.Instance.getGameConfig().tableList.length) : (o = w.Enum.TableBack.TABLE_BACK_STAR, n = w.Enum.TableBack.TABLE_BACK_MAX), e >= o && e < n) {
                let n = w.StringTools.formatC("%d", e);
                t ? (this.SaveStringByCCFile(this.tableBackKey_star, n), this.m_eTableBackType_star = e) : (this.SaveStringByCCFile(this.tableBackKey, n), this.m_eTableBackType = e)
            }
        }
        SetCardFaceJackfruit(e) {
            let t;
            if (e = w.Number(e), e = Math.floor(e), t = w.appConfig.isLandscapeLayout ? w.Enum.CardFaceDesktop.CARD_FACE_MAX : w.Enum.CardFace.CARD_FACE_MAX, e >= 0 && e < t) {
                let t = w.StringTools.formatC("%d", e);
                this.SaveStringByCCFile(this.cardFaceJackfruitKey, t), this.m_eCardFaceJackfruitType = e
            }
        }
        SetCardFacePlo(e) {
            if (e = w.Number(e), (e = Math.floor(e)) >= 0 && e < w.Enum.CardFace.CARD_FACE_MAX) {
                let t = w.StringTools.formatC("%d", e);
                this.SaveStringByCCFile(this.cardFacePloKey, t), this.m_eCardFacePloType = e
            }
        }
        GetCardFacePlo() {
            return this.m_eCardFacePloType
        }
        GetCardBack() {
            return this.m_eCardBackType
        }
        GetCardFace() {
            return this.m_eCardFaceType
        }
        GetTableBack(e = !1) {
            return e ? this.m_eTableBackType_star : this.m_eTableBackType
        }
        GetCardFaceJackfruit() {
            return this.m_eCardFaceJackfruitType
        }
        IsFaction(e) {
            return e.indexOf("/")
        }
        SplitChipsLevel(e, t, n = w.Enum.SliderType.Game_FreeFill, o) {
            let a = [];
            a.push(0);
            let i = t,
                r = 0;
            for (r = o ? this.GetRaiseLevel(i, n) : w.StringTools.serverGoldByClient(this.GetRaiseLevel(w.StringTools.clientGoldByServer(i), n)), a.push(t); i != e;) i + r <= e ? i += r : i = e, a.push(i), r = o ? this.GetRaiseLevel(i, n) : w.StringTools.serverGoldByClient(this.GetRaiseLevel(w.StringTools.clientGoldByServer(i), n));
            return a
        }
        GetRaiseLevel(e, t) {
            let n = 1;
            return t == w.Enum.SliderType.Game_FreeFill ? n = e < 50 ? 1 : e < 100 ? 5 : e < 1e3 ? 10 : e < 1e4 ? 100 : e < 1e5 ? 1e3 : e < 1e6 ? 2e3 : e < 1e7 ? 1e4 : e < 1e8 ? 2e4 : 1e5 : e < 10 ? n = 1 : e < 100 ? n = 10 : e < 1e3 ? n = 100 : e < 1e4 ? n = 1e3 : e < 2e4 ? n = 5e3 : e < 3e4 && (n = 1e4), n
        }
        Fraction2Decimal(e) {
            if (-1 != e.indexOf("/")) {
                let t = e.substr(0, e.indexOf("/")),
                    n = e.substr(e.lastIndexOf("/") + 1, e.length);
                return parseFloat(t) / parseFloat(n)
            }
            return 0
        }
        round_double(e) {
            return Math.round(e)
        }
        getRandomUUID() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16)
            }))
        }
        RoundingNum(e) {
            if (e > 100 && e <= 1e3) {
                let t = this.round_double(e / 10);
                return Math.floor(10 * t)
            }
            if (e > 1e3 && e <= 1e4) {
                let t = this.round_double(e / 100);
                return Math.floor(100 * t)
            }
            if (e > 1e4 && e <= 1e5) {
                let t = this.round_double(e / 1e3);
                return Math.floor(1e3 * t)
            }
            if (e > 1e5 && e <= 1e6) {
                let t = this.round_double(e / 1e4);
                return Math.floor(1e4 * t)
            }
            if (e > 1e6 && e <= 1e7) {
                let t = this.round_double(e / 1e5);
                return Math.floor(1e5 * t)
            }
            if (e > 1e7 && e <= 1e8) {
                let t = this.round_double(e / 1e6);
                return Math.floor(1e6 * t)
            }
            if (e > 1e8) {
                let t = this.round_double(e / 1e6);
                return Math.floor(1e6 * t)
            }
            return e
        }
        SaveStringByCCFile(e, t) {
            t = "" + t, "user_account" == e || "user_password" == e ? (t && (t = K.encryptData(t)), o.localStorage.setItem(e, t)) : o.localStorage.setItem(e, t), "user_account" == e ? o.os == o.OS.IOS ? w.native.invokeSyncFunc(w.nativeCMD.KEY_SAVE_USERNAME_INKEY, {
                username: t
            }) : o.os == o.OS.ANDROID && w.native.writeToFileForAndroid("pkuserinfo", t) : "user_password" == e && (o.os == o.OS.IOS ? w.native.invokeSyncFunc(w.nativeCMD.KEY_SAVE_PASSWORD_INKEY, {
                password: t
            }) : o.os == o.OS.ANDROID && w.native.writeToFileForAndroid("pkpassinfo", t))
        }
        GetStringByCCFile(e) {
            let t = o.localStorage.getItem(e);
            return "" != t && null != t || ("user_account" == e ? o.os == o.OS.IOS ? t = w && w.nativeCMD ? w.native.invokeSyncFunc(w.nativeCMD.KEY_GET_USERNAME_INKEY) : "" : o.os == o.OS.ANDROID && (t = w.native.readFileForAndroid("pkuserinfo")) : "user_password" == e && (o.os == o.OS.IOS ? t = w && w.nativeCMD ? w.native.invokeSyncFunc(w.nativeCMD.KEY_GET_PASSWORD_INKEY) : "" : o.os == o.OS.ANDROID && (t = w.native.readFileForAndroid("pkpassinfo")))), "user_account" != e && "user_password" != e || t && "" != t && (t = K.decryptData(t)), t
        }
        RemoveStringByCCFile(e) {
            o.localStorage.removeItem(e)
        }
        unique(e) {
            let t = [];
            if (w.StringTools.getArrayLength(e) > 0) {
                let n = {};
                for (let o = 0; o < e.length; ++o) {
                    let a = e[o];
                    n[a] || (n[a] = !0, t.push(a))
                }
            }
            return t
        }
        isSoundEffectOpen() {
            let e = o.localStorage.getItem(this.getSoundEffectKey());
            return null == e || "true" === e || "1" === e || 1 == +e
        }
        setSoundEffect(e) {
            let t = this.getSoundEffectKey();
            this.setSoundLocalStorage(t, e ? 1 : 0), w.appConfig.isWebApp && q.sendMessage({
                sourceApp: X.Poker,
                targetApp: X.WebApp,
                eventType: J.ChangeSoundEffectPref,
                payload: {
                    shouldPlaySoundEffect: e
                }
            })
        }
        getSoundEffectKey() {
            return V.key_enableSoundEffect
        }
        getGameplaySoundEffectKey() {
            return V.key_enableSoundEffect
        }
        isGameplaySoundEffectOpen() {
            let e = o.localStorage.getItem(this.getGameplaySoundEffectKey());
            return null == e || "true" === e || "1" === e || 1 == +e
        }
        setGameplaySoundEffect(e) {
            let t = this.getGameplaySoundEffectKey();
            this.setSoundLocalStorage(t, e ? 1 : 0)
        }
        setSoundLocalStorage(e, t) {
            o.localStorage.setItem(e, t.toString()), w.MessageCenter.send(w.Enum.MessageCenterAction.soundStateChanged, t)
        }
        getGameplayBBChoiceKey() {
            return "gameplay_bb_key"
        }
        isGameplayBBChoice() {
            return "1" === o.localStorage.getItem(this.getGameplayBBChoiceKey())
        }
        setGameplayBBChoice(e) {
            let t = this.getGameplayBBChoiceKey();
            o.localStorage.setItem(t, (e ? 1 : 0).toString())
        }
        getGameplayGSMultiplierBackgroundKey() {
            return "gameplay_GS_multiplier_background_key"
        }
        isGameplayGSMultiplierBackground() {
            return "0" !== o.localStorage.getItem(this.getGameplayGSMultiplierBackgroundKey())
        }
        setGameplayGSMultiplierBackground(e) {
            let t = this.getGameplayGSMultiplierBackgroundKey();
            o.localStorage.setItem(t, e ? 1 : 0)
        }
        getGiftFestivalMessageDisplayKey() {
            return "gift_festival_message_display"
        }
        isGiftFestivalMessageDisplay() {
            return "0" !== o.localStorage.getItem(this.getGiftFestivalMessageDisplayKey())
        }
        setGiftFestivalMessageDisplay(e) {
            let t = this.getGiftFestivalMessageDisplayKey();
            o.localStorage.setItem(t, e ? 1 : 0)
        }
        getThrowableAnimationDisplayKey() {
            return "throwable_animation_display"
        }
        isThrowableAnimationDisplay() {
            return "0" !== localStorage.getItem(this.getThrowableAnimationDisplayKey())
        }
        setThrowableAnimationDisplay(e) {
            const t = this.getThrowableAnimationDisplayKey();
            localStorage.setItem(t, e ? "1" : "0")
        }
        getGameplayMuckLosingHandsKey() {
            return "gameplay_muck_losing_hands_key"
        }
        isGameplayMuckLosingHands() {
            let e = o.localStorage.getItem(this.getGameplayMuckLosingHandsKey());
            return e = null == e || null == e || "1" === e || 1 == e, e
        }
        setGameplayMuckLosingHands(e) {
            let t = this.getGameplayMuckLosingHandsKey();
            o.localStorage.setItem(t, e ? 1 : 0)
        }
        getObserverOnFoldZoomKey() {
            return "observe_on_fold_zoom"
        }
        isObserverOnFoldZoom() {
            let e = o.localStorage.getItem(this.getObserverOnFoldZoomKey());
            return e = "1" === e || 1 == e, e
        }
        getNoticedObserverOnFoldZoomKey() {
            return "noticed_observe_on_fold_zoom"
        }
        isNoticedObserverOnFoldZoom() {
            let e = o.localStorage.getItem(this.getNoticedObserverOnFoldZoomKey());
            return e = "1" === e || 1 == e, e
        }
        setNoticedObserverOnFoldZoom(e) {
            let t = this.getNoticedObserverOnFoldZoomKey();
            o.localStorage.setItem(t, e ? 1 : 0)
        }
        getAutoFocusOnMobileKey() {
            return "auto_focus_on_mobile"
        }
        isAutoFocusOnMobile() {
            let e = o.localStorage.getItem(this.getAutoFocusOnMobileKey());
            return e = null == e || "1" === e || 1 == e, e
        }
        setAutofocusOnMobile(e) {
            let t = this.getAutoFocusOnMobileKey();
            o.localStorage.setItem(t, e ? 1 : 0)
        }
        getThemeUsageKey() {
            return "theme_usage_index"
        }
        getCurrentThemeUsage() {
            return w.appConfig.isWebApp ? 1 : parseInt(w.tools.GetStringByCCFile(this.getThemeUsageKey()) ?? "-1")
        }
        setCurrentThemeUsage(e) {
            w.tools.SaveStringByCCFile(this.getThemeUsageKey(), e.toString())
        }
        isEmailNotificationOn() {
            let e = o.localStorage.getItem(this.getEmailNotificationKey());
            return null == e || "true" === e
        }
        setEmailNotification(e) {
            e = Boolean(e);
            let t = this.getEmailNotificationKey(),
                n = w.String(e);
            o.localStorage.setItem(t, n)
        }
        getEmailNotificationKey() {
            return "client_email_notification"
        }
        isSmsNotificationOn() {
            let e = o.localStorage.getItem(this.getSmsNotificationKey());
            return null == e || "true" === e
        }
        setSmsNotification(e) {
            e = Boolean(e);
            let t = this.getSmsNotificationKey(),
                n = w.String(e);
            o.localStorage.setItem(t, n)
        }
        getSmsNotificationKey() {
            return "client_sms_notification"
        }
        isLoginNotificationOn() {
            let e = o.localStorage.getItem(this.getLoginNotificationKey());
            return null == e || "true" === e
        }
        setLoginNotification(e) {
            e = Boolean(e);
            let t = this.getLoginNotificationKey(),
                n = w.String(e);
            o.localStorage.setItem(t, n)
        }
        getLoginNotificationKey() {
            return "client_login_notification"
        }
        setVibrate(e) {
            o.localStorage.setItem(this.getVibrateKey(), w.String(e))
        }
        isVibrate() {
            var e = o.localStorage.getItem(this.getVibrateKey());
            return null == e || "true" === e
        }
        getVibrateKey() {
            return "client_vibrate_key"
        }
        setShowBarrage(e) {
            o.localStorage.setItem(this.getShowBarrageKey(), w.String(e))
        }
        isShowBarrage() {
            if (!w.appConfig.getGameConfig().enableShowBarrage) return !1;
            var e = o.localStorage.getItem(this.getShowBarrageKey());
            return null == e || "true" === e
        }
        getShowBarrageKey() {
            return "client_show_barrage_key"
        }
        getMaxBetKey() {
            return "client_max_bet_key"
        }
        setShowGiftAnim(e) {
            o.localStorage.setItem(this.getShowGiftAnimKey(), w.String(e))
        }
        isShowGiftAnim() {
            var e = o.localStorage.getItem(this.getShowGiftAnimKey());
            return null == e || "true" === e
        }
        getShowGiftAnimKey() {
            return "client_GiftAnim_key"
        }
        setPlayVoice(e) {
            o.localStorage.setItem(this.getPlayVoiceKey(), w.String(e))
        }
        isPlayVoice() {
            var e = o.localStorage.getItem(this.getPlayVoiceKey());
            return null == e || "true" === e
        }
        getPlayVoiceKey() {
            return "client_play_voice_key"
        }
        setEnterbackState(e = !1) {
            this._bEnterbackground = e
        }
        getEnterbackState() {
            return this._bEnterbackground
        }
        isPlayMusic() {
            return "false" != this.GetStringByCCFile("client_music_key")
        }
        SetPlayMusic(e) {
            e = Boolean(e);
            let t = w.String(e);
            this.SaveStringByCCFile("client_music_key", t)
        }
        get miniGameMusicKey() {
            return "mini_game_music_key"
        }
        get miniGameSoundEffectKey() {
            return "mini_game_sound_effect_key"
        }
        IsMiniGameMusicOn() {
            return !("false" == this.GetStringByCCFile(this.miniGameMusicKey))
        }
        IsMiniGameSoundEffectOn() {
            return !("false" == this.GetStringByCCFile(this.miniGameSoundEffectKey))
        }
        SetMiniGameMusicOn(e) {
            e = Boolean(e), this.SaveStringByCCFile(this.miniGameMusicKey, w.String(e))
        }
        SetMiniGameSoundEffectOn(e) {
            e = Boolean(e), this.SaveStringByCCFile(this.miniGameSoundEffectKey, w.String(e))
        }
        GetBase64String(e) {
            if (o.isNative) {
                let t = a.fileUtils.getStringFromFile(e);
                return D.bytesToBase64(t)
            }
            return ""
        }
        getGreenColor() {
            let e = new i(0, 255, 0);
            return w.config.getCurrentScene() != w.Enum.SCENE.GAME_SCENE && w.config.getCurrentScene() != w.Enum.SCENE.GAME_SCENE_AOF && (e = new i(67, 198, 116)), e
        }
        getRedColor() {
            let e = new i(255, 0, 0);
            return w.config.getCurrentScene() != w.Enum.SCENE.GAME_SCENE && w.config.getCurrentScene() != w.Enum.SCENE.GAME_SCENE_AOF && (e = new i(228, 69, 69)), e
        }
        getWinColor() {
            let e = w.config.getCurrentLanguage(),
                t = this.getGreenColor(),
                n = this.getRedColor();
            return e === w.Enum.LANGUAGE_TYPE.en_US || e === w.Enum.LANGUAGE_TYPE.th_TH ? t : n
        }
        getLoseColor() {
            let e = w.config.getCurrentLanguage(),
                t = this.getGreenColor(),
                n = this.getRedColor();
            return e === w.Enum.LANGUAGE_TYPE.en_US || e === w.Enum.LANGUAGE_TYPE.th_TH ? n : t
        }
        getLanguageStr(e) {
            let t = w.config.getCurrentLanguageDetails().index,
                n = e.split("(*)");
            return n.length < t + 1 && (t = 0), n[t]
        }
        ThroughNode(e) {
            let t = e.children,
                o = [];
            o = o.concat(t);
            let a = 0;
            for (; o.length > a;) {
                let t = o[a];
                if (a++, t.children.length > 0) {
                    let e = t.children;
                    for (let t = 0; t < e.length; t++) o.push(e[t])
                }
                let i = t.getComponent(r);
                console.log(w.StringTools.formatC("length:%d count:%d  obj.childrenCount:%d", o.length, a, e.children.length)), i && !n(i.spriteFrame, !0) && (console.log(w.StringTools.formatC("sp:%s", i.name)), i.spriteFrame = null)
            }
        }
        logCache() {
            console.log("Picture in memory ***********************"), console.log(s.assets.count);
            var e = s.assets;
            for (var t in e) {
                let e = l.get(t);
                e && e instanceof c ? console.log("Prefab:" + e.name) : e instanceof g ? console.log("Texture2D:" + e.nativeUrl) : e instanceof u ? console.log("SpriteFrame:" + e.name) : e instanceof p ? console.log("SpriteAtlas:" + e.nativeUrl) : e && e.nativeUrl && console.log("1111:" + e.nativeUrl)
            }
            console.log("end *****************************")
        }
        displayChineseName(e) {
            if (w.config.getCurrentLanguage() === w.Enum.LANGUAGE_TYPE.zh_CN) {
                let t = new L;
                t.add("HL", "德州扑克"), t.add("HLZ", "急速扑克"), t.add("HLB", "暴击德州扑克"), t.add("HS", "短牌德州"), t.add("HSZ", "急速短牌"), t.add("HSB", "暴击短牌"), t.add("AL", "AoF德州扑克"), t.add("AS", "AoF短牌"), t.add("AN", "必下"), t.add("JF", "菠萝蜜");
                let n = new RegExp("[0-9]"),
                    o = e.match(n);
                if (null != o) {
                    let n = e.split(o[0]);
                    if (t.has(n[0])) return t.get(n[0]) + "-" + e.replace(n[0], "")
                }
            }
            return e
        }
        logObject(e) {
            let t = "";
            for (let n in e) t += n + ":" + e[n] + "\n";
            return t
        }
        copyObjectProperties(e, t) {
            if (t) {
                for (var n in e || (e = {}), t) e[n] = t[n];
                w.tools.logObject(e)
            } else console.log("copyObjectProperties 不能传入空对象")
        }
        secondFormat(e) {
            let t = Math.floor(e / 3600 % 24),
                n = Math.floor(e / 60 % 60);
            return t < 1 ? n < 10 ? "00:0" + n : "00:" + n : t < 10 ? "0" + t + ":" + n : t + ":" + n
        }
        GetFriendLevelName(e) {
            let t = -1;
            return e < 100 && e >= 0 ? t = 0 : e <= 299 && e >= 100 ? t = 1 : e <= 999 && e >= 300 ? t = 2 : e <= 2999 && e >= 1e3 ? t = 3 : e <= 6999 && e >= 3e3 ? t = 4 : e <= 12999 && e >= 7e3 ? t = 5 : e <= 19999 && e >= 13e3 ? t = 6 : e <= 49999 && e >= 2e4 ? t = 7 : e >= 5e4 && (t = 8), t > -1 ? w.config.getStringData("Star_friend_" + t) : ""
        }
        getRandomArrayElements(e, t) {
            for (var n, o, a = e.slice(0), i = e.length, r = i - t; i-- > r;) n = a[o = Math.floor((i + 1) * Math.random())], a[o] = a[i], a[i] = n;
            return a.slice(r)
        }
        getActualSize(e) {
            let t = new d,
                n = t.addComponent(m);
            n.fontSize = e.getComponent(m).fontSize;
            let o = w.resMgr.getLabelStringSize(n, e.getComponent(m).string);
            return t.destroy(), o.width <= e.getComponent(S).width ? o : e.getComponent(S).contentSize
        }
        dealRaiseData(e) {
            for (let t = 0; t < e.length; t++) e[t] = this.dealRaiseDataStr(e[t])
        }
        dealRaiseDataStr(e) {
            return this.dealRaiseDataNumber(w.Number(e))
        }
        dealRaiseDataNumber(e) {
            return (e / 100).toFixed(2)
        }
        getStringByTime(e) {
            let t = Math.floor(e / 3600),
                n = Math.floor(e % 3600 / 60),
                o = Math.floor(e % 60);
            return 0 == t ? 0 == n ? o + w.config.getStringData("seconds") : n + w.config.getStringData("minute") + o + w.config.getStringData("seconds") : t + w.config.getStringData("hour") + n + w.config.getStringData("minute") + o + w.config.getStringData("seconds")
        }
        getStringByDay(e) {
            let t = Math.floor(e / 3600 / 24);
            return t > 0 ? t + w.config.getStringData("day") : this.getStringByTime(e)
        }
        getBackgroundBannerImgPath() {
            let e = "client_type/";
            w.config.isOverSeas() ? e += "pkc/" : w.config.isThai() ? e += "pkt/" : e += "pkw/";
            let t = "banner_0";
            return w.native.isWideScreen() && (t = "banner_1"), e + t
        }
        isValidNode(e) {
            return e && n(e, !0)
        }
        destroyNode(e) {
            this.isValidNode(e) && e.destroy()
        }
        traverseObjGet(e, t) {
            return Q.traverseObjGet(e, t)
        }
        traverseObjSet(e, t, n) {
            return Q.traverseObjSet(e, t, n)
        }
        traverseObjRemove(e, t) {
            Q.traverseObjRemove(e, t)
        }
        getRoot(e) {
            return n(e, !0) ? null == e.parent ? e : this.getRoot(e.parent) : y.getScene().getComponentInChildren(h).node
        }
        getRootCanvas(e) {
            const t = this.getRoot(e);
            if (null !== t.getComponent(h)) return t;
            const n = t.getComponentInChildren(h);
            return null !== n ? n.node : t
        }
        checkNestedValue(e, ...t) {
            return t.reduce(((e, t) => e && e[t]), e)
        }
        degreesToRadians(e) {
            return e * Math.PI / 180
        }
        removeItemsFromArray(e, t) {
            return e.filter((e => !t.includes(e)))
        }
        static compareColors(e, t, n = !0) {
            return e.r == t.r && (e.g == t.g && (e.b == t.b && (!n || e.a == t.a)))
        }
        static loadTipBg(e, t, n) {
            if (!e) return;
            let o;
            if (n) {
                const {
                    Action: e
                } = I.holdem;
                switch (t) {
                    case e.ALL_IN:
                        o = $.PlayerSeatTagAllIn;
                        break;
                    case e.FOLD:
                        o = $.PlayerSeatTagFold;
                        break;
                    case e.BET:
                    case e.RAISE:
                    default:
                        o = $.PlayerSeatTagCallOrSB
                }
            } else switch (t) {
                case w.Enum.TipsType.Tips_allIn:
                    o = $.PlayerSeatTagAllIn;
                    break;
                case w.Enum.TipsType.Tips_bet:
                case w.Enum.TipsType.Tips_raise:
                    o = $.PlayerSeatTagRaise;
                    break;
                case w.Enum.TipsType.Tips_fold:
                    o = $.PlayerSeatTagFold;
                    break;
                default:
                    o = $.PlayerSeatTagCallOrSB
            }
            for (let t = 0; t < e.length; t++) {
                const n = e[t];
                n && n.setColorScheme(z.Other, o)
            }
        }
        static compareNumbers(e, t, n) {
            const o = 10 * n,
                a = Math.round(e * o),
                i = Math.round(t * o);
            return a < i ? 1 : i < a ? -1 : 0
        }
        static nrEqual(e, t, n) {
            return 0 == ae.compareNumbers(e, t, n)
        }
        static forceUpdateLayout(e, t) {
            !0 === t && e.getComponentsInChildren(f).forEach((e => e.updateLayout()));
            let n = e.getComponent(f);
            n && n.updateLayout()
        }
        selfFoldCardAnim(e, t, n, o, a, i) {
            const r = e ? 300 : 200,
                s = e ? 200 : 50,
                l = n.getPosition().y - 155;
            let c = C(n);
            c.parent = a || n.parent;
            let g = n.getPosition();
            var u = c.getComponent(_);
            T(c).call((() => {
                u.opacity = 0, c.setScale(i)
            })).delay(t).call((() => {
                u.opacity = 255, c.setPosition(b(g.x, l, c.getPosition().z))
            })).parallel(T().to(.2, {
                position: new O(g.x / 6, g.y, g.z),
                scale: i
            }), T().delay(.2).to(.3, {
                position: new O(g.x + r + -80 * o, g.y + s + -10 * o, g.z)
            }), T().delay(.4).to(.1, {}, {
                onUpdate: (e, t) => {
                    u.opacity = 255 - 255 * t
                }
            })).removeSelf().start()
        }
        foldCardAnim(e, t, n = 0, o, a, i, r = !1) {
            let s = this.getSeatPositionType(o, a),
                l = C(t);
            l.parent = t.parent, l.active = !0, l.getComponent(_).opacity = 0;
            const c = i ? this.getMoveCardTweenPLO(s, n, t, l, r) : this.getMoveCardTween(s, n, t, l, r);
            let g = T().delay(e),
                u = T().call((() => {
                    l.destroy()
                }));
            T(l).then(g).then(c).then(u).start()
        }
        getSeatPositionType(e, t) {
            let n = x.TOP,
                o = Math.floor(t / 2),
                a = t % 2 == 0;
            return 0 == e ? n = x.BOTTOM : a ? n = e < o ? x.LEFT : e == o ? x.TOP : x.RIGHT : t <= 7 ? n = e <= o ? x.LEFT : x.RIGHT : e == o ? n = x.TOP_LEFT : e == o + 1 ? n = x.TOP_RIGHT : e == o - 1 ? n = x.LEFT_TOP : e == o + 2 ? n = x.RIGHT_TOP : e < o - 1 ? n = x.LEFT : e > o + 2 && (n = x.RIGHT), n
        }
        getMoveCardTween(e, t, n, o, a = !1) {
            let i = T(),
                r = T(),
                s = n.getPosition(),
                l = s.x,
                c = s.y,
                g = 0,
                u = 0,
                p = 0,
                d = 255,
                m = -10,
                S = -20,
                y = 2,
                h = "sineOut",
                f = 0,
                C = 0,
                E = 0,
                v = -10,
                F = -255,
                P = -20,
                G = 2,
                A = "sineOut";
            switch (e) {
                case x.BOTTOM:
                    0 == t ? (g = -71, u = c - 80, p = -6, d = 255, m = 178, S = 255, h = "sineOut", y = 13) : (g = -85, u = c - 80, p = 6, d = 255, m = 160, S = 248, h = "sineOut", y = 24, f = -2, C = -6, E = 0), v = -8, F = -255, P = 31, A = "sineOut", G = -1.1;
                    break;
                case x.TOP:
                    0 == t ? (g = l + 10, u = c - 80, p = -6, d = 255, m = -175, S = -145, h = "sineIn", y = 13) : (g = l - 10, u = c - 80, p = 6, d = 255, m = a ? -190 : -160, S = -150, h = "sineIn", y = 24, f = -5, C = -7, E = 0), G = -2, v = 10, P = -28, A = "sineOut", F = -255;
                    break;
                case x.TOP_LEFT:
                    0 == t ? (g = 90, u = c - 80, p = -6, d = 255, m = a ? -160 : -100, S = -165, h = "sineIn", y = 13) : (g = 15, u = c - 80, p = 6, d = 255, m = a ? -120 : -60, S = -175, h = "sineIn", y = 24, f = 5, C = -7, E = 0), G = -2, v = 10, P = -28, A = "sineOut", F = -255;
                    break;
                case x.TOP_RIGHT:
                    0 == t ? (g = -44, u = c - 80, p = 24, d = 255, m = a ? 120 : 60, S = -165, h = "sineIn", y = -22) : (g = -59, u = c - 80, p = 14, d = 255, m = a ? 155 : 95, S = -170, h = "sineIn", y = -40, f = 5, C = -7, E = 0), G = 2, v = -10, P = -28, A = "sineOut", F = -255;
                    break;
                case x.RIGHT_TOP:
                    0 == t ? (g = 87, u = c - 80, p = -20, d = 255, m = -250, S = -110, h = "sineOut", y = a ? 70 : 78) : (g = 72, u = c - 80, p = -14, d = 255, m = -250, S = -126, h = "sineOut", y = a ? 66 : 58), G = -2, v = -15, P = -20, A = "sineOut", F = -255;
                    break;
                case x.LEFT_TOP:
                    0 == t ? (g = -71, u = c - 80, p = 10, d = 255, m = 240, S = -110, h = "sineOut", y = a ? -60 : -50) : (g = -86, u = c - 80, p = 3, d = 255, m = 270, S = -130, h = "sineOut", y = a ? -55 : -60), G = 2, v = 15, P = -20, A = "sineOut", F = -255;
                    break;
                case x.LEFT:
                    0 == t ? (g = -26, u = c - 20, p = 5, d = 255, m = 222, S = 44, h = "sineOut", y = -8) : (g = -1, u = c - 20, p = 3, d = 255, m = 212, S = a ? 46 : 42, h = "sineOut", y = a ? -6 : -18, f = 2, C = -1, E = -2), G = -2, v = 10, P = -20, A = "sineOut", F = -255;
                    break;
                case x.RIGHT:
                    0 == t ? (g = 27, u = c - 20, p = -20, d = 255, m = -202, S = 45, h = "sineOut", y = 35) : (g = 12, u = c - 20, p = -11, d = 255, m = -198, S = 44, h = "sineOut", y = a ? 25 : 10, f = -2, C = -1, E = 2), G = 2, v = -10, P = -20, A = "sineOut", F = -255
            }
            return i = T().set({
                position: b(g, u, 0),
                angle: p
            }).call((() => {
                ee.addOrGetComponent(o, _).opacity = d
            })).parallel(T().by(.433, {
                position: new O(m, S, 0)
            }, {
                easing: h
            }), T().by(.433, {
                angle: y
            })).by(.334, {
                position: b(f, C, 0),
                angle: E
            }), r = T().delay(.767).parallel(T().by(.267, {
                position: b(v, P, 0)
            }, {
                easing: A
            }), T().by(.267, {
                angle: G
            }, {
                onUpdate(e, t) {
                    ee.addOrGetComponent(e, _).opacity = 255 + F * t
                }
            })), T().parallel(i, r)
        }
        getMoveCardTweenPLO(e, t, n, o, a = !1) {
            let i = T(),
                r = T(),
                s = n.getPosition(),
                l = (s.x, s.y),
                c = 0,
                g = 0,
                u = 0,
                p = 255,
                d = -10,
                m = -20,
                S = 2,
                y = "sineOut",
                h = -10,
                f = -255,
                C = -20,
                E = 2,
                v = "sineOut";
            switch (e) {
                case x.BOTTOM:
                    c = -4.7 * t - 71, g = l - 80, u = 4 * t - 6, p = 255, d = 178 + -6 * t, m = 255 + -2.3 * t, y = "sineOut", S = 13 + 3.7 * t, h = -8, f = -255, C = 31, v = "sineOut", E = -1.1;
                    break;
                case x.TOP:
                    c = 60, g = l - 80, u = 4 * t - 6, p = 255, d = t * (a ? -5 : 5) - 175, m = -1.7 * t - 145, y = "sineIn", S = 13 + 3.7 * t, E = -2, h = 10, C = -28, v = "sineOut", f = -255;
                    break;
                case x.TOP_LEFT:
                    c = 90 + -25 * t, g = l - 80, u = 4 * t - 6, p = 255, d = 13.3 * t - 100 + (a ? -60 : 0), m = -3.3 * t - 165, y = "sineIn", S = 13 + 3.7 * t, E = -2, h = 10, C = -28, v = "sineOut", f = -255;
                    break;
                case x.TOP_RIGHT:
                    c = -5 * t - 44, g = l - 80, u = 24 + -3.3 * t, p = 255, d = 60 + 11.7 * t + (a ? 60 : 0), m = -1.7 * t - 165, y = "sineIn", S = -6 * t - 22, E = 2, h = -10, C = -28, v = "sineOut", f = -255;
                    break;
                case x.RIGHT_TOP:
                    c = 87 + -5 * t, g = l - 80, u = 2 * t - 20, p = 255, d = -250, m = -5.3 * t - 110, y = "sineOut", S = a ? 70 - 1.3 * t : 78 - 6.7 * t, E = -2, h = -15, C = -20, v = "sineOut", f = -255;
                    break;
                case x.LEFT_TOP:
                    c = -5 * t - 71, g = l - 80, u = 10 + -2.3 * t, p = 255, d = 240 + 10 * t, m = -110 - 6.7 * t, y = "sineOut", S = a ? 1.7 * t - 60 : -50 - 1.3 * t, E = 2, h = 15, C = -20, v = "sineOut", f = -255;
                    break;
                case x.LEFT:
                    c = 8.3 * t - 26, g = l - 20, u = 5 - t, p = 255, d = 222 - 3.3 * t, m = a ? 44 + t : 44 - t, y = "sineOut", S = a ? -8 + t : -8 - 3.3 * t, E = -2, h = 10, C = -20, v = "sineOut", f = -255;
                    break;
                case x.RIGHT:
                    c = 27 - 5 * t, g = l - 20, u = 3 * t - 20, p = 255, d = 1.3 * t - 202, m = 44 - .3 * t, y = "sineOut", S = a ? 35 - 3.3 * t : 35 - 8.3 * t, E = 2, h = -10, C = -20, v = "sineOut", f = -255
            }
            return i = T().set({
                position: b(c, g, 0),
                angle: u
            }).call((() => {
                ee.addOrGetComponent(o, _).opacity = p
            })).parallel(T().by(.433, {
                position: new O(d, m, 0)
            }, {
                easing: y
            }), T().by(.433, {
                angle: S
            })), r = T().delay(.767).parallel(T().by(.267, {
                position: b(h, C, 0)
            }, {
                easing: v
            }), T().by(.267, {
                angle: E
            }, {
                onUpdate(e, t) {
                    ee.addOrGetComponent(e, _).opacity = 255 + f * t
                }
            })), T().parallel(i, r)
        }
        showChipDropReverst(e, t, n = !1) {
            null != t && null != e && (n ? this.chipDropTieRevert(e, t) : this.chipsDropNormalRevert(e, t))
        }
        chipDropTieRevert(e, t) {
            const o = C(t);
            if (n(o)) {
                const t = o.getComponent(B);
                n(t) && (n(e) && (t.node.parent = e), t.showBetAnimReverst(3))
            }
        }
        chipsDropNormalRevert(e, t) {
            let o = e.getChildByName("ChipDropReverst");
            if (n(o)) {
                const e = o.getComponent(E),
                    t = null == e ? void 0 : e.getState("ChipDropReverst");
                if (n(e) && n(t)) return null == t || t.stop(), null == t || t.play(), void(n(t) && (t.wrapMode = 36));
                o.removeFromParent(), o = null
            }
            o = C(t), o.parent = e, o.setPosition(0, 0);
            let a = o.getComponent(E);
            if (n(a)) {
                a.play();
                let e = a.getState("ChipsDropReverst");
                n(e) && (e.wrapMode = 36)
            }
        }
        showChipInPot(e, t, n = !0, o = (e => {})) {
            if (!t) return;
            let a = () => {};
            if (n && (a = function(e) {
                    e.on(E.EventType.FINISHED, (function(t) {
                        e.off(E.EventType.FINISHED), o && o(e)
                    }), this)
                }), e.getChildByName("ChipDrop")) {
                let t = e.getChildByName("ChipDrop").getComponent(E);
                if (t) {
                    let e = t.getState("ChipsDrop");
                    o && n && a(t), e && !e.isPlaying && n && (e.stop(), e.play())
                }
                return
            }
            let i = C(t);
            if (i) {
                i.parent = e, i.setPosition(0, 0);
                let t = i.getComponent(E);
                t && (t.play(), a(t))
            }
        }
        fadeOutPot(e, t = 0) {
            let n = C(e);
            n.parent = e.parent, n.active = !0;
            let o = n.getComponent(_);
            T(o).delay(t).to(.5, {
                opacity: 0
            }).call((() => {
                n.destroy()
            })).start()
        }
        toggleComponents(e, t, n, o) {
            let a = e.getComponent(t);
            a && (a.enabled = n), o && e.getComponentsInChildren(t).forEach((e => e.enabled = n))
        }
        getGlobalScale(e) {
            let t = e.getScale(new O);
            if (n(e.parent)) {
                let n = this.getGlobalScale(e.parent);
                t.x = t.x * n.x, t.y = t.y * n.y
            }
            return t
        }
        updateGameType(e) {
            let t = e;
            return null == t || (w.appConfig.getGameConfig().replaceZoomTextToPaceText && (t = t.replace(/zoom/i, "Flash")), w.appConfig.getGameConfig().replaceCowboyPokerTextToPokerFlipsText && (t = t.replace(/cowboy poker/i, "Poker Flips"))), t
        }
        showActionLabel(e, t, n = null) {
            v.stopAllByTarget(e), e.setPosition(t);
            let o = e.scale.x > 0 ? 1 : -1;
            e.setScale(new O(o > 0 ? .85 : -.85, .85, 1)), e.getComponent(_).opacity = 0, T(e).parallel(T().to(.233, {
                scale: new O(1.01 * o, 1.01, 1)
            }).to(.3, {
                scale: new O(o, 1, 1)
            }), T().to(.3, {}, {
                onUpdate(e, t) {
                    e.getComponent(_).opacity = 255 * t
                }
            })).delay(.429).to(.231, {
                scale: new O(.9 * o, .9, 1)
            }).call((() => {
                e.getComponent(_).opacity = 0
            })).call((() => {
                e.active = !1, e.scale = new O(o, 1, 1), n && n()
            })).start()
        }
        hideActionLabel(e, t, n = null) {
            v.stopAllByTarget(e), e.active = !1, e.getComponent(_).opacity = 255, e.setPosition(t), n && n()
        }
        static numberSeparator(e) {
            if (null == e) return "";
            const t = w.config.getStringData("Decimal_Separator"),
                n = w.config.getStringData("Number_Separator", !1, " ");
            let o = e.toString().split("."),
                a = o[0];
            return a && (!w.appConfig.isMX || w.appConfig.isMX && a.length > 4) && (a.indexOf(",") > 0 && (a = a.replace(/,/g, "")), o[0] = a.replace(/\B(?=(\d{3})+(?!\d))/g, n)), o.join(t)
        }
        static convertValueToStandardFormat(e) {
            if (null == e || 0 == e.length) return "";
            const t = w.config.getStringData("Number_Separator", !1, " ");
            " " === t && (e = e.replace(/(\d)\s+(?=\d)/g, "$1"));
            const n = w.config.getStringData("Decimal_Separator");
            return "." == t || " " == t && "." !== n ? e.replace(/[.,]/g, (e => "." === e ? "," : ".")) : e
        }
        static removeNumberSeparator(e) {
            const t = w.config.getStringData("Number_Separator", !1, " "),
                n = new RegExp(" " === t ? "\\s" : "\\" + t, "g");
            return e.replace(n, "")
        }
        static removeDataPointFromString(e) {
            const t = w.config.getStringData("jackfruit_setting_custom_data_point_bb"),
                n = w.config.getStringData("jackfruit_setting_custom_data_point_ante");
            return (e = ae.removeNumberSeparator(e)).replace(`${t}`, "").replace(`${n}`, "").replace(/\s+/g, "")
        }
        static detectURLs(e) {
            return e.match(/(((https?:\/\/)|(www\.))[^\s]+)/g)
        }
        isAbleTakeScreenShot() {
            let e = !0;
            const t = j.getGPUList();
            if (F(`############## isAbleTakeScreenShot ::: list_GPU_devices : ${t}`), "" !== t) {
                e = !w.appConfig.listDeviceIgnoreTakeScreenShot.some((e => t.includes(e)))
            }
            return e
        }
        getTimeFormat() {
            const e = Date.now(),
                t = new Date(e);
            return `${String(t.getDate()).padStart(2,"0")}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getFullYear())} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}:${String(t.getSeconds()).padStart(2,"0")}`
        }
        logInfo(e) {
            e && (console.log(`*****${this.getTimeFormat()} [NR TRACE >> logInfo] : ${JSON.stringify(e)}`), W.IsActive() && (W.getInstance().startSpan(e.spanName), W.getInstance().endSpan(e.spanName, e.eventName, e.attribute, e.spandCode, !1)))
        }
        loadingStatus(e, ...t) {
            console.timeLog(e, ...t);
            const n = {
                eventName: "WebLoadStatus",
                attribute: {
                    content: t
                }
            };
            w.tools.logInfoWebApp(n)
        }
        logInfoWebApp(e) {
            if (!e || !o.isBrowser) return;
            const t = {
                spanName: Y.WebAppData,
                ...e
            };
            this.logInfo(t)
        }
        adjustLayoutPosition(e) {
            if (!o.isMobile || !e || !e.parent) return;
            let t = e.getComponent(S),
                n = (e.getWorldPosition().y - t.height * t.anchorPoint.y) / P.getVisibleSize().height * 100;
            n = Math.max(n, 0), w.native.setEditBoxPosYRatio(n)
        }
        triggerPopupShowEvent(e = R.General) {
            this._visiblePopupCount++, this.popupTypeVisible.push(e), w.MessageCenter.send(w.Enum.MessageCenterAction.onOpenPopUpMsg, this._visiblePopupCount)
        }
        triggerPopupHideEvent(e = R.General) {
            let t = this.popupTypeVisible.indexOf(e);
            t >= 0 && this.popupTypeVisible.splice(t, 1), this._visiblePopupCount > 0 && (this._visiblePopupCount--, w.MessageCenter.send(w.Enum.MessageCenterAction.onDisablePopUpMsg, this._visiblePopupCount))
        }
        isAnyPopupVisible(e = !1) {
            return e ? this._visiblePopupCount > 1 : this._visiblePopupCount > 0
        }
        get visiblePopupCount() {
            return this._visiblePopupCount
        }
        isAnyPopupVisibleOfType(e) {
            return this.popupTypeVisible.includes(e)
        }
        resetPopupTypeVisible() {
            this.popupTypeVisible = []
        }
        showPopupOnTop(e, t = !1) {
            if (!n(e)) return;
            const o = w.SwitchLoadingView;
            o.isShow() && o.parent === e.parent && !t ? e.setSiblingIndex(o.siblingIndex - 1) : e.setSiblingIndex(-1)
        }
        getHandCardTypeFromGameID(e, t = !0) {
            let n = H.SHCT_NONE;
            if (t) {
                switch (e) {
                    case w.Enum.GameId.Plo:
                        n = H.SHCT_PLO;
                        break;
                    case w.Enum.GameId.Plo5:
                        n = H.SHCT_PLO5;
                        break;
                    default:
                        n = H.SHCT_TEXAS
                }
                return n
            }
            switch (e) {
                case I.commonProto.MTT_GAME_MODE.OMAHA:
                    n = H.SHCT_PLO;
                    break;
                default:
                    n = H.SHCT_TEXAS
            }
            return n
        }
        getCardsLengthFromGameID(e, t = !0) {
            let n = 2;
            if (t) {
                switch (e) {
                    case w.Enum.GameId.Plo:
                        n = 4;
                        break;
                    case w.Enum.GameId.Plo5:
                        n = 5;
                        break;
                    default:
                        n = 2
                }
                return n
            }
            switch (e) {
                case I.commonProto.MTT_GAME_MODE.OMAHA:
                    n = 4;
                    break;
                default:
                    n = 2
            }
            return n
        }
        loadBundle() {
            let e = s.getBundle(w.appConfig.layoutUse);
            return new Promise(((t, n) => {
                e ? t instanceof Function && t() : s.loadBundle(w.appConfig.layoutUse, (() => {
                    t instanceof Function && t()
                }))
            }))
        }
        loadAssetFromBundle(e) {
            return new Promise(((t, n) => {
                this.loadBundle().then((() => {
                    let o = s.getBundle(w.appConfig.layoutUse);
                    if (o) o.load(e, c, function(e, o) {
                        e ? n(e) : t(o)
                    }.bind(this));
                    else if (n instanceof Function) {
                        n({
                            message: "can't get bundle"
                        })
                    }
                }))
            }))
        }
        setScrollViewElasticThreshold(e, t) {
            if (e.elastic) {
                e.onScrollEventPreventScrollToFar = (e, n) => {
                    let o = e.getScrollOffset().y;
                    n == U.SCROLLING && (o < -t ? e.content.position = new O(e.content.position.x, -t, e.content.position.z) : o > e.getMaxScrollOffset().y + t && (e.content.position = new O(e.content.position.x, e.getMaxScrollOffset().y + t, e.content.position.z)))
                };
                var n = new G.EventHandler;
                n.target = e.node, n.component = "ScrollView", n.handler = "onScrollEventPreventScrollToFar", e.scrollEvents.push(n)
            }
        }
        waitForPredicate(e, t = 500) {
            const n = o => {
                e() ? o() : setTimeout((() => n(o)), t)
            };
            return new Promise(n)
        }
        getAdjustedColor(e, t) {
            let n = e.r;
            n + t <= 255 ? n += t : n - t >= 0 && (n -= t);
            let o = e.g;
            o + t <= 255 ? o += t : o - t >= 0 && (o -= t);
            let a = e.b;
            return a + t <= 255 ? a += t : a - t >= 0 && (a -= t), new i(n, o, a, e.a)
        }
        getWebViewHexColor() {
            return "#" + Z.getInstance().getColor(w.appConfig.themeUse, z.Other, null, $.DefaultBackground).toHEX("#rrggbb")
        }
        verifyGetPropertyName(e, t) {
            for (const n of Object.keys(e))
                if (n === t) return n;
            return console.warn(`[verifyGetPropertyName] failed, should double check ${t.toString()}`), null
        }
        setSpriteGray(e, t, o = !0) {
            if (!n(e)) return;
            let a = null;
            const i = () => {
                const t = [e.getComponent(r)];
                o && t.concat(e.getComponentsInChildren(r));
                for (let e = 0; e < t.length; e++) n(t[e]) && (t[e].customMaterial = a, t[e].updateMaterial())
            };
            if (t) {
                const e = "shader/SpriteGray/sprite-gray-material";
                a = l.get(e), n(a) ? i() : l.load(e, A, ((e, t) => {
                    a = t, n(a) && i()
                }))
            } else i()
        }
        pointInPolygon(e, t) {
            let n = !1;
            const o = e.x,
                a = e.y,
                i = t.length;
            for (let e = 0, r = i - 1; e < i; r = e++) {
                const i = t[e].x,
                    s = t[e].y,
                    l = t[r].x,
                    c = t[r].y;
                s > a != c > a && o < (l - i) * (a - s) / (c - s) + i && (n = !n)
            }
            return n
        }
        resetMask(e, t = 0) {
            if (1 === t) e.node.setPosition(e.node.getPosition().add(b(1, 0, 0))), setTimeout((() => {
                n(e) && e.node.setPosition(e.node.getPosition().add(b(-1, 0, 0)))
            }), 50);
            else {
                let t = e.type;
                e.type = t == k.Type.SPRITE_STENCIL ? k.Type.GRAPHICS_RECT : k.Type.SPRITE_STENCIL, e.type = t
            }
        }
        convertToNodeSpaceAR(e, t) {
            const n = null == e ? void 0 : e.getComponent(S),
                o = new O(t.x, t.y, 0),
                a = n ? n.convertToNodeSpaceAR(o) : o;
            return new M(a.x, a.y)
        }
        calcTopOffsetToMove(e) {
            return te.getUpperDangerZoneYOffset() <= e ? 0 : te.getUpperDangerZoneYOffset() - e
        }
        addParameterToURL(e, t, n) {
            return e += `${e.split("?")[1]?"&":"?"}${t}=${n}`
        }
        findClosestIndex(e, t) {
            if (0 === e.length) return null;
            let n = 0,
                o = e.length - 1;
            for (; n < o;) {
                let a = Math.floor((n + o) / 2);
                if (e[a] === t) return a;
                e[a] < t ? n = a + 1 : o = a
            }
            return 0 === n ? 0 : n === e.length ? e.length - 1 : Math.abs(e[n] - t) < Math.abs(e[n - 1] - t) ? n : n - 1
        }
        getTranslatedString(e) {
            const t = ne.getDeps();
            return oe.getInstance().getTranslatedString(e, t.getUserLanguage())
        }
        get bombPotPromptShowAgain() {
            return "bomb_pot_prompt_show_again"
        }
        isBombPotPromptShowAgain() {
            return "false" != this.GetStringByCCFile(this.bombPotPromptShowAgain)
        }
        setBombPotPromptShowAgain(e) {
            e = Boolean(e);
            let t = w.String(e);
            this.SaveStringByCCFile(this.bombPotPromptShowAgain, t)
        }
    }
    e("Tools", ae), ae.g_instance = void 0, t._RF.pop()
}