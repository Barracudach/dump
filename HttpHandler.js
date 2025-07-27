import * as t from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as o from "./gs_protocol.mjs_cjs=&original=.js";
import * as d from "./data.mjs_cjs=&original=.js";
import * as g from "./data.mjs_cjs=&original=.js";
import * as u from "./data.mjs_cjs=&original=.js";
import * as c from "./data.mjs_cjs=&original=.js";
import * as i from "./data.mjs_cjs=&original=.js";
import * as l from "./data.mjs_cjs=&original=.js";
import * as p from "./cv.js";
import * as _ from "./cv.js";
import * as m from "./RecordData.js";
import * as D from "./RoomData.js";
import * as S from "./activityData.js";
import * as h from "./activityData.js";
import * as f from "./aesHandler.js";
import * as U from "./Enum.js";
import * as T from "./Enum.js";
import * as C from "./userData.js";
import * as y from "./CrashTracing.js";
import * as E from "./CrashTracing.js";
import * as I from "./CIOHandler.js";
import * as b from "./CIOHandler.js";
import * as H from "./KYCHandler.js";
import * as R from "./PopupMsgHelper.js";
import * as v from "./AnalyticsHandler.js";
import * as k from "./RegisterScene.js";
import * as N from "./NotifyMsg.js";

function main() {
    t._RF.push({}, "484daCP7n1Bd4q6ZvFrYqbq", "HttpHandler", void 0);
    class A {
        constructor() {
            this.valueCache = null, setTimeout((() => {
                o.MessageCenter.register(o.Enum.MessageCenterAction.OnLoginSuccess, this.onLoginSuccessCallback.bind(this), this)
            }), 100)
        }
        emptyValueCache() {
            this.valueCache && (this.valueCache = null)
        }
        getDefaultLoginObj() {
            0 == o.appConfig.isProd && o.domainMgr.initLogin();
            let e = this.getDeviceInfo(),
                t = {
                    version: o.config.GET_CLIENT_VERSION(),
                    recaptcha_token: "",
                    recaptcha_siteKey: "",
                    device_uuid: o.native.GetDeviceUUID(),
                    device_os: e.deviceOS,
                    device_name: e.deviceInfo.dname,
                    device_model: e.deviceInfo.dmodel,
                    location: o.native.GetLocation(),
                    domain_type: o.dataHandler.getServerId(),
                    device_mac_address: o.native.getMacAddress(),
                    DeviceAgent: o.native.getDeviceAgent(),
                    deviceType: o.config.getPlatform(),
                    is_emulator: o.native.IsSimulator() ? 1 : 0
                },
                a = this.getAdvertiserTrackingObj();
            return null != a && (t.advertiserTracking = a), t
        }
        getDefaultRegistrationObj() {
            let e = this.getDeviceInfo(),
                t = {
                    captcha: "",
                    version: o.config.GET_CLIENT_VERSION(),
                    device_uuid: o.native.GetDeviceUUID(),
                    device_os: e.deviceOS,
                    deviceName: e.deviceInfo.dname,
                    deviceModel: e.deviceInfo.dmodel,
                    deviceType: o.config.getPlatform(),
                    deviceAgent: o.native.getDeviceAgent(),
                    is_emulator: o.native.IsSimulator() ? 1 : 0,
                    legalDocuments: []
                },
                a = this.getAdvertiserTrackingObj();
            return null != a && (t.advertiserTracking = a), t
        }
        isValidGuid(e) {
            return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(e)
        }
        getAdvertiserTrackingObj() {
            if (!a.isNative) return null;
            let e = o.native.getAdvertisingId(),
                t = null;
            if (a.os === a.OS.ANDROID) {
                let a = !e;
                this.isValidGuid(e) || (e = ""), t = {
                    androidAdvertisingId: e,
                    androidId: o.native.GetDeviceUUID(!1, !0),
                    advertiserTrackingDisabled: a
                }
            } else if (a.os === a.OS.IOS) {
                let a = (e ?? "").split("||");
                this.isValidGuid(a[0]) || (a[0] = ""), t = {
                    iOsAdvertisingId: a[0],
                    iOsVendorId: a[1] ?? "",
                    advertiserTrackingDisabled: !a[2]
                }
            } else if (a.os === a.OS.WINDOWS) {
                let a = !e;
                this.isValidGuid(e) || (e = ""), t = {
                    windowsAdvertisingId: e,
                    advertiserTrackingDisabled: a
                }
            } else if (a.os == a.OS.OSX) {
                let a = !e;
                this.isValidGuid(e) || (e = ""), t = {
                    iOsAdvertisingId: e,
                    advertiserTrackingDisabled: a
                }
            }
            return t
        }
        getDeviceInfo() {
            let e = JSON.parse(o.native.GenerateDeviceInfo()),
                t = a.os;
            return e.dversion && e.dversion.length > 0 && (t += " " + e.dversion), {
                deviceOS: t,
                deviceInfo: e
            }
        }
        getResponseCode(e) {
            return null == e ? null : o.StringTools.isNumber(e) ? e : e.code ? e.code.toString() : null
        }
        responseHaveErrorCode(e) {
            let t = this.getResponseCode(e);
            return null != t && "0" != t
        }
        getResponseMessage(e) {
            return null == e ? null : e.description
        }
        getErrorMessage(e, t) {
            o.SwitchLoadingView.hide("", !1, !0);
            let a = null,
                n = this.getResponseCode(e);
            return null != n && "0" != n && (a = {
                code: n,
                description: this.getResponseMessage(e)
            }, e = e.payload), !0 === t && this.initUserData(e, !1), a
        }
        getVerificationCode(e, t, a) {
            let n = o.config.getStringData("WEB_API_VCODE", !0);
            o.http.sendRequestV2(n, e, t, a, o.http.HttpRequestType.POST, o.http.HttpParseType.NONE, !0, null, !1)
        }
        requestTouristLogin(e, t, a = !1) {
            a && o.SwitchLoadingView.show(o.config.getStringData("Loading_resource")), o.security.TryLoginTourist((() => {
                o.tools.loadingStatus("[WEB LOAD MEASURE]", "[HotUpdate][WEB LOAD MEASURE][onLoad][TryLoginTourist]"), this._login(null, e ?? this.onTouristLoginSuccess.bind(this), t ?? this.onTouristLoginFail.bind(this), !0)
            }), (() => {
                t ? t(null) : this.onTouristLoginFail(null)
            }))
        }
        onTouristLoginFail(e) {
            this.onLoginFail(e, !0)
        }
        onTouristLoginSuccess(e) {
            o.tools.loadingStatus("[WEB LOAD MEASURE]", "[onTouristLoginSuccess][WEB LOAD MEASURE]");
            let t = this.getResponseCode(e);
            if (null != t && "0" != t) return o.SwitchLoadingView.hide("", !1, !0), void this.doLoginFaile(e, !0);
            this.initUserData(e, !0), this.postLogin(e, null, "1")
        }
        requestLogin(e, t, a, n = !0) {
            H.getInstance().sendEvent(o.Enum.CurrentScreen.Login, o.Enum.segmentEvent.LogInInitiated, o.Enum.Functionality.login, {
                intent: "cta",
                method: "login"
            }), o.worldNet.SetpasswordForAutologinOff(e.password), n && o.SwitchLoadingView.show(o.config.getStringData("Loading"), !1, !1, !1, !1, !0), o.security.TryLogin((() => {
                this._login(e, t, a, !1)
            }), (() => {
                o.config.getCurrentScene() == o.Enum.SCENE.HOTUPDATE_SCENE ? o.authenticator.logOutAndDoGuestLogin() : o.SwitchLoadingView.hide()
            }))
        }
        _login(e, t, a, n) {
            let r, s = this.getDefaultLoginObj();
            if (n) r = o.config.getStringData("WEB_API_LOGIN_BY_TOURIST_NAME", !0);
            else {
                var i;
                o.dataHandler.getUserData().setLoginData(e.loginMode, e.userName, e.password, !0), r = o.config.getStringData("WEB_API_LOGIN_BY_USER_NAME", !0);
                let t, a = o.appConfig.getFormsConfig().password.modifier ? o.appConfig.getFormsConfig().password.modifier(e.password) : e.password;
                try {
                    t = JSON.parse(e.userName)
                } catch {}
                o.tools.traverseObjSet(s, o.appConfig.getFormsConfig().loginUsername.key, (null == (i = t) ? void 0 : i.formatedData) || e.userName), o.tools.traverseObjSet(s, o.appConfig.getFormsConfig().password.key, a)
            }
            o.http.sendRequestV2(r, s, t || this.onLoginSuccess.bind(this), a || this.onLoginFail.bind(this), o.http.HttpRequestType.POST, null, !1, !1, !1, null, !0)
        }
        onLoginSuccess(e) {
            let t = this.getErrorMessage(e, !0);
            this.postLogin(e, t, "0")
        }
        onLoginFail(e, t = !1) {
            let a = {
                failureReason: e
            };
            if (H.getInstance().sendEvent(o.Enum.CurrentScreen.Login, o.Enum.segmentEvent.UserLoggedInFailed, o.Enum.Functionality.login, a), t) return void o.authenticator.onGuestLoginFails();
            if (o.authenticator.logOutAndDoGuestLogin(), o.config.getCurrentScene() == o.Enum.SCENE.HOTUPDATE_SCENE) return void(this.valueCache = e);
            o.SwitchLoadingView.hide();
            let n = "Unknown error occured";
            if (null == e) return void v.getInstance().show(n, !0);
            let r = o.config.getStringData("Attention"),
                s = o.Number(this.getResponseCode(e));
            switch (s) {
                case 10000017:
                    n = o.config.getStringData("serverErrorCode10000017", !1, n);
                    let a = o.tools.checkNestedValue(e, "payload", "responsibleGamingMetadata", "dateTime");
                    if (null != a) {
                        let e = new Date;
                        e.setFullYear(e.getFullYear() + 20), a > e.getTime() ? n = o.config.getStringData("serverErrorCode10000017_permanent", !1, n) : (n = o.config.getStringData("serverErrorCode10000017_until", !1, n), n = o.StringTools.formatC(n, o.StringTools.formatDateTimeByCountry(a, !0, !0)))
                    }
                    break;
                case 10000036:
                case 10000038:
                case 100065:
                case 100068:
                    let i = t ? "serverErrorCode" + s + "_tourist" : "serverErrorCode" + s;
                    n = o.config.getStringData(i, !1, this.getResponseMessage(e) || n), 10000038 == s ? r = t ? o.config.getStringData("Locked_title") : o.config.getStringData("AccountLocked_title") : 10000036 == s ? r = t ? o.config.getStringData("Banned_title") : o.config.getStringData("AccountBanned_title") : 100065 != s && 100068 != s || (r = t ? o.config.getStringData("Blacklisted_title") : o.config.getStringData("AccountBlacklisted_title"));
                    break;
                case 10000075:
                    n = o.config.getStringData("serverErrorCode" + s, !1, this.getResponseMessage(e) || n);
                    break;
                default:
                    null != this.getResponseMessage(e) && (n = this.getResponseMessage(e)), null != e.payload && (null != e.payload.login && (n = "login: " + e.payload.login[0].description), null != e.payload.password && (n = "password: " + e.payload.password[0].description)), s && (n = o.config.getStringData("serverErrorCode" + s, !1, n))
            }
            100033 == s ? o.MessageCenter.send("login_Lock", n) : (r === o.config.getStringData("Attention") && (r = ""), v.getInstance().show(n, !0))
        }
        initActivities(e) {
            let t = (null == e ? void 0 : e.activity) || {};
            o.dataHandler.getActivityData().isShow = !0, o.dataHandler.getActivityData().removeActivityInfo(), o.dataHandler.getActivityData().is_alert_avatar = (null == t ? void 0 : t.is_alert_avatar) || !1;
            let a = t.act || [],
                n = o.StringTools.getArrayLength(a);
            for (let e = 0; e < n; ++e) {
                let t = new m;
                t.activity_id = a[e].id, t.activity_url = a[e].link, t.activity_pictrue = a[e].pictrue, t.frequency = a[e].times, t.activity_type = a[e].type, t.resource = a[e].resource, t.day_times = a[e].day_times, t.action_type = a[e].action_type, o.dataHandler.getActivityData().addActivityInfo(e, t)
            }
            let r = t.game || [],
                s = o.StringTools.getArrayLength(r);
            for (let e = 0; e < s; ++e) {
                let t = new m;
                t.activity_id = r[e].id, t.activity_url = r[e].link, t.activity_pictrue = r[e].pictrue, t.frequency = r[e].times, t.activity_type = r[e].type, t.resource = r[e].resource, t.day_times = r[e].day_times, t.action_type = r[e].action_type, o.dataHandler.getActivityData().addActivityInfo(n + e, t)
            }
        }
        initUserData(e, t) {
            null == o.dataHandler.getUserData().user_id && (o.dataHandler.getUserData().showLoadingScreenOnInitialFetch = !0), e && (o.dataHandler.getUserData().download_url = e.download_url);
            let a = e;
            o.dataHandler.getUserData().user_id = a.user_id, o.dataHandler.getUserData().sharedPlayerId = parseInt(a.sharedPlayerId) || null, o.dataHandler.getUserData().originalSharedPlayerToken = a.sharedPlayerToken || "", o.dataHandler.getUserData().originalUserToken = a.token || "", o.dataHandler.getUserData().sharedPlayerToken = a.sharedPlayerToken || "", o.tools.SaveStringByCCFile("user_id", a.user_id), o.dataHandler.getUserData().u32Uid = parseInt(a.user_id), o.dataHandler.getUserData().user_token = a.token, this.md5token(), o.dataHandler.getUserData().pkf_add_url = a.pkf_add_url || "", o.dataHandler.getUserData().user_ip = a.ip, o.dataHandler.getUserData().mobile = o.String(a.mobile), o.dataHandler.getUserData().verificationType = a.verificationType, o.dataHandler.getUserData().user_safe = a.safe, o.dataHandler.getUserData().areaCode = a.areaCode, o.dataHandler.getUserData().vipTool_url = a.vipTool_url, o.dataHandler.getUserData().pay_type = a.pay_type ?? 0, o.dataHandler.getUserData().button_1 = a.button_1, o.dataHandler.getUserData().button_1_english = a.button_1_english, o.dataHandler.getUserData().button_2 = a.button_2, o.dataHandler.getUserData().button_2_english = a.button_2_english, o.dataHandler.getUserData().button_3 = a.button_3, o.dataHandler.getUserData().button_3_english = a.button_3_english, o.dataHandler.getUserData().shopUrl = a.shop, o.dataHandler.getUserData().isEncrypt = [], o.StringTools.deepCopy(a.encry_switch, o.dataHandler.getUserData().isEncrypt), o.dataHandler.getUserData().club_head = a.club_head, o.dataHandler.getUserData().bk_img = a.bk_img, o.dataHandler.getUserData().isvpn = Boolean(a.is_vpn), o.dataHandler.getUserData().isban = Boolean(a.is_ban), o.dataHandler.getUserData().is_allow_update_name = Boolean(a.is_allow_update_name), o.dataHandler.getUserData().file_upload_url = a.file_upload_url, o.dataHandler.getUserData().isallowsimulator = a.isallowsimulator, o.dataHandler.getUserData().isTouristUser = t, o.dataHandler.getUserData().verityType = a.send_vcode_type || 1, o.dataHandler.getUserData().is_bind_sl = a.is_bind_sl || !1, o.dataHandler.getUserData().sl_down_url = a.sl_down_url || "", o.dataHandler.getUserData().sl_account = a.sl_account || "", o.dataHandler.getUserData().is_alert_sl = a.is_alert_sl || !1, o.dataHandler.getUserData().isViewWPT = "1" == a.wpt, o.dataHandler.getUserData().countryISO2 = a.countryIsoCode ?? "", o.dataHandler.getUserData().playerFeatures = a.playerFeatures ?? [];
            let n = o.config.HAVE_MTT;
            2 == a.mtt_status ? o.config.HAVE_MTT = !1 : 1 == a.mtt_status && o.config.setMTT(), n != o.config.HAVE_MTT && o.MessageCenter.send("update_mtt_state"), this.initActivities(a), o.MessageCenter.send(h.OnUserDataChanged)
        }
        postLogin(e, t, a) {
            o.domainMgr.initDoMain();
            for (const t of e.domain) o.domainMgr.addDomain(t);
            e.pkwFileAddress && o.domainMgr.setpkwFileAddress(e.pkwFileAddress), e.avatarAddress && o.domainMgr.setWpkAvatarAddress(e.avatarAddress), o.domainMgr.saveDomain(e), o.domainMgr.initLoginServer(), o.tools.SaveStringByCCFile("is_tourist_login", a), null == t ? this.checkKycStatus() : o.MessageCenter.send(o.Enum.MessageCenterAction.OnLoginSuccessActionsReq, t), this.emptyValueCache(), "0" === a ? (this.requestUserActivityHistory(), this.requestPlayerLocks(null, !0)) : o.dataHandler.getUserData().playerLocks = []
        }
        checkKycStatus() {
            if (o.dataHandler.getUserData().isTouristUser || !o.appConfig.getLoginConfig().checkNDRPStatus && !o.appConfig.getGeneralConfig().enableKycVerification) o.MessageCenter.send(o.Enum.MessageCenterAction.OnLoginSuccess);
            else {
                let e = R.isCurrentView;
                o.KYCHandler.checkStatus({
                    type: y.Ndrp,
                    onCBKycStatus: e => {
                        e == E.Rejected ? (o.netWorkManager.Logout(!1, null, o.Enum.LogOutReason.NDRPCheckFailed), b.showNDRPPopupMsgI18n(I.Verifcation_Failed)) : (o.dataHandler.getUserData().userNDRPStatus = e, o.MessageCenter.send(o.Enum.MessageCenterAction.OnLoginSuccess))
                    },
                    onCBCheckStatusSuccess: () => {
                        o.MessageCenter.send(o.Enum.MessageCenterAction.OnLoginSuccess)
                    }
                }, e)
            }
        }
        requestUserActivityHistory() {
            let e = o.config.getStringData("WEB_API_USERP_ACTIVITY_HISTORY", !0) + "?Count=5";
            o.http.sendRequestV2(e, {}, this.onGetUserActivityHistory.bind(this), null, o.http.HttpRequestType.GET)
        }
        onGetUserActivityHistory(e) {
            o.dataHandler.getUserActivityData().add(e);
            let t = o.dataHandler.getUserActivityData().getLast(o.Enum.UserActionType.Login);
            if (t) {
                let e = Date.now(),
                    n = Math.floor((e - t.at.getTime()) / 1e3);
                var a;
                if (Math.abs(n) > 600) o.dataHandler.getUserData().isSystemTimeIncorrect = !0, null == (a = T.getInstance()) || a.trace(U.IncorrectTime, "DeviceTimeIsIncorrect", {
                    ServerUTCTime: t.at.toUTCString(),
                    DeviceUTCTime: new Date(e).toUTCString(),
                    TimeDifferenceInSecs: n.toString()
                })
            }
        }
        requestPlayerLocks(e, t = !1) {
            if (void 0 === o.dataHandler.getUserData().playerLocks || t || !o.appConfig.getSecurityConfig().cachePlayerLocks) {
                let t = o.config.getStringData("WEB_GET_PLAYER_LOCKS", !0);
                const a = t => {
                    this.onGetPlayerLocksSuccess(t), null == e || e()
                };
                o.http.sendRequestV2(t, null, a, null, o.http.HttpRequestType.GET)
            } else null == e || e()
        }
        onGetPlayerLocksSuccess(e) {
            var t;
            Array.isArray(e) ? (o.dataHandler.getUserData().playerLocks = e ?? [], o.MessageCenter.send("on_get_player_locks_success")) : null == (t = T.getInstance()) || t.trace(U.UserProfileSettings, "PlayerLocks", {
                Reason: "Player locks not in Array format",
                RequiredFormat: "Array",
                Value: e
            })
        }
        requestWhitelistChecks(e) {
            o.dataHandler.getUserData().whitelist = [];
            let t = o.config.getStringData("API_GET_WHITELIST_USER", !0);
            o.http.sendRequestV2(t, null, (t => {
                this.onGetWhitelistConfigSuccess(t, e)
            }), e, o.http.HttpRequestType.GET, o.http.HttpParseType.NONE, !1, !1, !1, null, !0)
        }
        onGetWhitelistConfigSuccess(e, t) {
            var a;
            Array.isArray(e) ? e.forEach((e => {
                o.dataHandler.getUserData().whitelist.push(e.toLowerCase())
            })) : null == (a = T.getInstance()) || a.trace(U.UserProfileSettings, "PlayerWhitelist", {
                Reason: "Whitelist checks not in Array format",
                RequiredFormat: "Array",
                Value: e
            });
            null == t || t()
        }
        hasFaileCache() {
            return null != this.valueCache
        }
        getFaileCache() {
            return this.valueCache
        }
        doLoginFaile(e, t = !1) {
            if (t && o.config.getCurrentScene() == o.Enum.SCENE.HOTUPDATE_SCENE) return void(this.valueCache = e);
            let n = e.msg_code;
            if ("110000" == n) return o.dataHandler.getUserData().KYCVerificationStatus = e.data.kyc_verification_status, void o.MessageCenter.send("doKycVerification");
            if ("200000" == n) return this.tipsMsg(e), void o.dataHandler.setServerId(o.Enum.ServerButtonType.ServerButtonType_special);
            if (console.log("onUserNameLoginSuccess===》》fail"), "100033" == n) {
                let t;
                t = o.config.getCurrentLanguage() == o.Enum.LANGUAGE_TYPE.zh_CN ? e.msg : e.message, t = o.config.getStringData("serverErrorCode" + n, !1, t), o.MessageCenter.send("login_Lock", t)
            } else if ("100070" == n) {
                if (e && e.data) {
                    let t = e.data;
                    o.dataHandler.getUserData().user_id = t.user_id, o.dataHandler.getUserData().mobile = o.String(t.mobile), o.dataHandler.getUserData().areaCode = t.areaCode, o.dataHandler.getUserData().verityType = t.send_vcode_type, o.dataHandler.getUserData().sl_account = t.sl_account, o.MessageCenter.send("goTobindDevice")
                }
            } else if (this.tipsMsg(e), e.is_upgrade && 1 === Math.abs(e.is_upgrade)) {
                if (!a.isNative) return;
                return void o.netWorkManager.OnHttplogin()
            }
        }
        requestSetAccount(e) {
            let t = o.config.getStringData("WEB_API_SET_USER_NAME", !0),
                a = {
                    user_id: o.dataHandler.getUserData().getUserId(),
                    username: e,
                    token: o.dataHandler.getUserData().getUserToken()
                };
            o.http.sendRequest(t, a, this.onSetAccountSuccess.bind(this))
        }
        onSetAccountSuccess(e) {
            "0" === e.msg_code && o.MessageCenter.send("onSetAccountSuccess")
        }
        requestCheckNickName(e, t) {
            let a = {
                nick_name: e,
                passwd: o.md5.md5(t)
            };
            o.http.sendRequest(o.config.getStringData("WEB_API_CHECK_NICK_NAME", !0), a, this.responseCheckNickName.bind(this))
        }
        responseCheckNickName(e) {
            "0" == e.msg_code && o.MessageCenter.send("register_to_set_account")
        }
        requestCheckUserName(e, t) {
            let a = {
                username: e,
                passwd: o.md5.md5(t)
            };
            o.http.sendRequest(o.config.getStringData("WEB_API_CHECK_USER_NAME", !0), a, this.responseCheckUserName.bind(this))
        }
        responseCheckUserName(e) {
            "0" == e.msg_code ? o.MessageCenter.send("register_to_user_account") : o.TT.showMsg(e.value, o.Enum.ToastType.ToastTypeError)
        }
        requestRegisterVCode(e, t, a) {
            let n = {
                    mobile: e,
                    areaCode: t,
                    device_uuid: o.native.GetDeviceUUID(),
                    captcha: a,
                    version: o.config.GET_BIG_VERSION()
                },
                r = o.config.getStringData("WEB_API_VCODE", !0);
            o.http.sendRequest(r, n, this.onGetRegisterVCodeSuccess.bind(this))
        }
        requestUpdateGradeVCode(e, t, a) {
            let n = {
                    user_id: o.dataHandler.getUserData().getUserId(),
                    token: o.dataHandler.getUserData().getUserToken(),
                    mobile: e,
                    areaCode: t,
                    device_uuid: o.native.GetDeviceUUID(),
                    captcha: a,
                    version: o.config.GET_BIG_VERSION()
                },
                r = o.config.getStringData("WEB_API_TOURIST_VCODE", !0);
            o.http.sendRequest(r, n, this.onGetRegisterVCodeSuccess.bind(this))
        }
        requestVCode(e, t, a) {
            let n = {
                mobile: e,
                areaCode: t
            };
            o.http.sendRequest(a, n, this.onGetForgetVCodeSuccess.bind(this))
        }
        onGetRegisterVCodeSuccess(e) {
            "0" === e.msg_code ? (o.TT.showMsg(e.msg, o.Enum.ToastType.ToastTypeWarning), console.log("onGetRegisterVCodeSuccess===》》")) : console.log("onGetRegisterVCodeSuccess===》》fail"), o.MessageCenter.send("onGetRegisterVCodeSuccess", e)
        }
        onGetForgetVCodeSuccess(e) {
            "0" === e.msg_code ? (o.TT.showMsg(e.msg, o.Enum.ToastType.ToastTypeWarning), console.log("onGetForgetVCodeSuccess===》》")) : console.log("onGetForgetVCodeSuccess===》》fail"), o.MessageCenter.send("onGetForgetVCodeSuccess", e)
        }
        requestCheckForgetPsd(e, t, a) {
            let n = o.config.getStringData("WEB_API_FORGET_VCODE", !0),
                r = {
                    mobile: e,
                    v_code: a,
                    areaCode: t
                };
            o.http.sendRequest(n, r, this.onCheckForgetPsdSuccess.bind(this))
        }
        onCheckForgetPsdSuccess(e) {
            if ("0" === e.msg_code) {
                e.data;
                o.MessageCenter.send("onCheckForgetPsdSuccess"), console.log("onCheckForgetPsdSuccess===》》")
            } else console.log("onCheckForgetPsdSuccess===》》fail")
        }
        requestCheckNewPsd(e, t, a) {
            let n = o.config.getStringData("WEB_API_FORGET_SUBMIT", !0),
                r = {
                    mobile: e,
                    passwd: o.md5.md5(a),
                    areaCode: t
                };
            o.http.sendRequest(n, r, this.onCheckNewPsdSuccess.bind(this))
        }
        onCheckNewPsdSuccess(e) {
            if ("0" === e.msg_code) {
                e.data;
                o.MessageCenter.send("onCheckNewPsdSuccess"), console.log("onCheckNewPsdSuccess===》》")
            } else console.log("onCheckNewPsdSuccess===》》fail")
        }
        requestResetPsd(e, t, a, n) {
            let r = o.config.getStringData("WEB_API_RESET_PASS", !0),
                s = {
                    mobile: e,
                    v_code: a,
                    passwd: o.md5.md5(t),
                    areacode: n
                };
            o.http.sendRequest(r, s, this.onResetPsdSuccess.bind(this))
        }
        onResetPsdSuccess(e) {
            if ("0" === e.msg_code) {
                e.data;
                o.TT.showMsg(e.msg, o.Enum.ToastType.ToastTypeWarning), o.MessageCenter.send("onResetPsdSuccess")
            } else console.log("modify password failed")
        }
        requestSubmitTwoLevelPwd(e, t, a, n) {
            let r = o.config.getStringData("WEB_API_RESET_SAFE", !0),
                s = {
                    mobile: e,
                    v_code: a,
                    safe: o.md5.md5(t),
                    areacode: n,
                    token: o.dataHandler.getUserData().getUserToken()
                };
            o.http.sendRequest(r, s, this.onTwoLevelSubmitSucc.bind(this))
        }
        onTwoLevelSubmitSucc(e) {
            if ("0" === e.msg_code) {
                e.data;
                o.TT.showMsg(e.msg, o.Enum.ToastType.ToastTypeWarning)
            } else console.log("onTwoLevelSubmitSucc===》》fail")
        }
        requestCheckRegisterIdCode(e, t, a, n) {
            let r = o.config.getStringData("WEB_API_CHECK_VCODE", !0),
                s = {
                    mobile: e,
                    v_code: a,
                    areaCode: t,
                    invitation_code: n
                };
            o.http.sendRequest(r, s, this.onCheckRegisterIdCodeSuccess.bind(this))
        }
        requestCheckUpdateGradeIdCode(e, t, a, n) {
            let r = o.config.getStringData("WEB_API_CHECK_TOURIST_VCODE", !0),
                s = {
                    user_id: o.dataHandler.getUserData().getUserId(),
                    token: o.dataHandler.getUserData().getUserToken(),
                    mobile: e,
                    v_code: a,
                    areaCode: t,
                    invitation_code: n
                };
            o.http.sendRequest(r, s, this.onCheckRegisterIdCodeSuccess.bind(this))
        }
        onCheckRegisterIdCodeSuccess(e) {
            this.tipsMsg(e), "0" === e.msg_code ? (o.MessageCenter.send("onCheckRegisterIdCodeSuccess"), console.log("onCheckRegisterIdCodeSuccess===》》")) : console.log("onCheckRegisterIdCodeSuccess===》》fail")
        }
        requestFinishRegister(e, t, n, r, s, i, d, l, c, g) {
            let u = o.config.getStringData("WEB_API_REG", !0),
                _ = o.md5.md5(n),
                p = o.native.GetDeviceUUID(),
                m = o.native.GetLocation(),
                D = "";
            D = a.OS.ANDROID == a.os ? "android" : a.OS.IOS == a.os ? "ios" : "win32";
            let h = {
                areaCode: i,
                device_uuid: p,
                mobile: e,
                nick_name: t,
                passwd: _,
                reg_code: r,
                v_code: s,
                username: d,
                invitation_code: l,
                version: o.config.GET_CLIENT_VERSION(),
                latitude: m.latitude,
                longitude: m.longitude,
                deviceType: D,
                avatar: c,
                gender: g
            };
            o.http.sendRequest(u, h, this.onFinishRegisterSuccess.bind(this))
        }
        onFinishRegisterSuccess(e) {
            if ("0" === e.msg_code) {
                let t = e.data;
                console.log("onUserNameLoginSuccess"), o.dataHandler.getUserData().user_id = t.user_id, o.dataHandler.getUserData().sharedPlayerId = parseInt(t.sharedPlayerId) || null, o.dataHandler.getUserData().originalSharedPlayerToken = t.sharedPlayerToken, o.dataHandler.getUserData().originalUserToken = t.token, o.dataHandler.getUserData().sharedPlayerToken = t.sharedPlayerToken || "", o.dataHandler.getUserData().u32Uid = parseInt(t.user_id), o.dataHandler.getUserData().user_token = t.token, this.md5token(), o.dataHandler.getUserData().user_ip = t.ip, o.dataHandler.getUserData().mobile = o.String(t.mobile), o.dataHandler.getUserData().verificationType = t.verificationType, o.dataHandler.getUserData().user_safe = t.safe, o.dataHandler.getUserData().areaCode = t.areaCode, o.dataHandler.getUserData().pay_type = t.pay_type ?? 0, o.dataHandler.getUserData().vipTool_url = t.vipTool_url, o.dataHandler.getUserData().button_1 = t.button_1, o.dataHandler.getUserData().button_1_english = t.button_1_english, o.dataHandler.getUserData().button_2 = t.button_2, o.dataHandler.getUserData().button_2_english = t.button_2_english, o.dataHandler.getUserData().button_3 = t.button_3, o.dataHandler.getUserData().button_3_english = t.button_3_english, o.dataHandler.getUserData().shopUrl = t.shop, o.dataHandler.getUserData().isEncrypt = [], o.StringTools.deepCopy(t.encry_switch, o.dataHandler.getUserData().isEncrypt), o.dataHandler.getUserData().download_url = t.download_url, o.dataHandler.getUserData().club_head = t.club_head, o.dataHandler.getUserData().bk_img = t.bk_img, o.dataHandler.getUserData().isvpn = Boolean(t.is_vpn), o.dataHandler.getUserData().isban = Boolean(t.is_ban), o.dataHandler.getUserData().is_allow_update_name = Boolean(t.is_allow_update_name), o.dataHandler.getUserData().file_upload_url = t.file_upload_url, o.dataHandler.getUserData().countryISO2 = t.countryIsoCode ?? "", o.dataHandler.getUserData().playerFeatures = t.playerFeatures ?? [];
                let a = o.config.HAVE_MTT;
                2 == t.mtt_status ? o.config.HAVE_MTT = !1 : 1 == t.mtt_status && o.config.setMTT(), a != o.config.HAVE_MTT && o.MessageCenter.send("update_mtt_state"), this.initActivities(t), o.domainMgr.initDoMain();
                for (const e of t.domain) o.domainMgr.addDomain(e);
                o.domainMgr.saveDomain(t), o.domainMgr.initLoginServer(), o.TP.showMsg(o.config.getStringData("Login_Scene_register_panel_succeed"), !1, this.sureToLoginSuccess.bind(this), null, !1, !1, "")
            } else console.log("onFinishRegisterSuccess===》》fail"), this.tipsMsg(e)
        }
        sureToLoginSuccess() {
            o.MessageCenter.send(o.Enum.MessageCenterAction.OnLoginSuccess)
        }
        requestFinishUpdateGrade(e, t, n, r, s, i, d, l, c, g) {
            let u = o.config.getStringData("WEB_API_TOURIST_UPGRADE", !0),
                _ = o.md5.md5(n),
                p = o.native.GetDeviceUUID(),
                m = o.native.GetLocation(),
                D = "";
            D = a.OS.ANDROID == a.os ? "android" : a.OS.IOS == a.os ? "ios" : "win32";
            let h = {
                user_id: o.dataHandler.getUserData().getUserId(),
                token: o.dataHandler.getUserData().getUserToken(),
                areaCode: i,
                device_uuid: p,
                mobile: e,
                nick_name: t,
                passwd: _,
                reg_code: r,
                v_code: s,
                username: d,
                invitation_code: l,
                version: o.config.GET_BIG_VERSION(),
                latitude: m.latitude,
                longitude: m.longitude,
                deviceType: D,
                avatar: c,
                gender: g
            };
            o.http.sendRequest(u, h, this.onFinishUpdateGradeSuccess.bind(this))
        }
        onFinishUpdateGradeSuccess(e) {
            if ("0" === e.msg_code) {
                let t = e.data;
                return console.log("onUserNameLoginSuccess"), o.dataHandler.getUserData().is_allow_update_name = t.is_allow_update_name, void o.TP.showMsg(o.config.getStringData("Login_Scene_updateGrade_panel_succeed"), !1, this.sureToRelogin.bind(this), null, !1, !1, "")
            }
            console.log("onFinishUpdateGradeSuccess===》》fail"), this.tipsMsg(e)
        }
        sureToRelogin() {
            o.tools.SaveStringByCCFile("is_tourist_login", "0"), o.MessageCenter.send("toRelogin")
        }
        requsetNoticeJsonData() {
            let e = o.config.getStringData("WEB_API_NOTICE_LIST", !0),
                t = {
                    is_english: o.config.getCurrentLanguage() == o.Enum.LANGUAGE_TYPE.zh_CN ? 0 : 1
                };
            o.http.sendRequest(e, t, this.onGetNoticeSuccess.bind(this))
        }
        onGetNoticeSuccess(e) {
            "0" === e.msg_code ? (o.MessageCenter.send("onGetNoticeSuccess", e), console.log("onGetNoticeSuccess===》》")) : (this.tipsMsg(e), console.log("onGetNoticeSuccess===》》 fail"))
        }
        setDefaultHead(e) {
            let t = o.config.getStringData("WEB_API_SET_DEFAULT_HEAD", !0),
                a = {
                    token: o.dataHandler.getUserData().getUserToken(),
                    user_id: o.dataHandler.getUserData().getUserIdS(),
                    avatar: e
                };
            console.log("====> setDefaultHead:data =" + a), o.http.sendRequest(t, a, this._onSetDefaultHead.bind(this))
        }
        _onSetDefaultHead(e) {
            if ("0" != e.msg_code) this.tipsMsg(e);
            else {
                let t = e.data;
                o.dataHandler.getUserData().headUrl = o.dataHandler.getUserData().getImageURL(t.avatar), o.MessageCenter.send("update_info")
            }
        }
        requestUserData(e, t, a = 0, n = 0, r = 0, s = 101) {
            let i = o.dataHandler.getUserData().getUserTokenByGameID(t);
            const d = o.dataHandler.getUserData().getUserIdByGameID(t);
            if (null == i || null == i) return;
            const l = {
                uid: d,
                token: i,
                mode: e,
                gameid: t,
                blind: a,
                ante: n,
                identity: r,
                currencyType: s
            };
            o.dataNet.RequestGetData(k.data.CMD.GET_DATA_REQ, l, this.responseUserData.bind(this, null), !0)
        }
        requestInGameUserData(e, t) {
            const a = e.tRoomData.u32GameID;
            let n = o.dataHandler.getUserData().getUserTokenByGameID(a);
            const r = o.dataHandler.getUserData().getUserIdByGameID(a);
            if (null == n || null == n) return;
            const {
                mode: s,
                blind: i,
                ante: d,
                currencyType: l
            } = this.getParamsForRequestPlayerStats(e), c = {
                uid: r,
                token: n,
                mode: s,
                gameid: a,
                blind: i,
                ante: d,
                identity: t,
                currencyType: l
            };
            o.dataNet.RequestGetData(k.data.CMD.GET_DATA_REQ, c, this.responseUserData.bind(this, e), !0)
        }
        getParamsForRequestPlayerStats(e) {
            const t = e.tRoomData.pkRoomParam.game_mode;
            let a = o.config.getblindString(e.tRoomData.pkRoomParam.rule_blind_enum - 1);
            a = a.substr(0, a.indexOf("/"));
            return {
                mode: t,
                blind: o.StringTools.serverGoldByClient(o.StringTools.showStringToNumber(a)),
                ante: e.tRoomData.pkRoomParam.rule_ante_amount,
                currencyType: e.tRoomData.pkRoomParam.currencyType
            }
        }
        responseUserData(e, t) {
            const {
                data: a,
                jfdata: n,
                star_duration: r
            } = t;
            if (a && a.trim().length > 0)
                if ("decode error" === a) this.tipsMsg(t), o.MessageCenter.send("error_load_statistics");
                else if ("load data error" === a) o.MessageCenter.send("RecetRoleInfoView"), o.MessageCenter.send("error_load_statistics");
            else {
                let t;
                try {
                    t = JSON.parse(a)
                } catch (e) {
                    var s;
                    return void(null == (s = T.getInstance()) || s.trace(U.CashGameIssues, "GetUserDataError", {
                        data: a
                    }))
                }
                if (Object.keys(t).length > 0) {
                    o.dataHandler.getUserData().pokerdata = t, o.dataHandler.getUserData().pokerdata.star_duration = r, 0 !== t.Total_win_money && 0 !== t.Total_hand_card_count ? o.dataHandler.getUserData().pokerdata.Fight_100 = t.Total_win_money / t.Total_hand_card_count * 100 : o.dataHandler.getUserData().pokerdata.Fight_100 = 0, t.Total_end_room_count > 0 ? (o.dataHandler.getUserData().pokerdata.Fight_average = t.Total_win_money / t.Total_end_room_count, o.dataHandler.getUserData().pokerdata.Buyin_average = t.Total_buyin / t.Total_end_room_count) : (o.dataHandler.getUserData().pokerdata.Fight_average = 0, o.dataHandler.getUserData().pokerdata.Buyin_average = 0), o.dataHandler.getUserData().pokerdata.Bb100s = [];
                    for (let e = 0; e < o.StringTools.getArrayLength(t.bb_100_s); e++) {
                        let a = new f;
                        a.bb_value = t.bb_100_s[e].bb_value, a.total_win_bb_count = t.bb_100_s[e].total_win_bb_count, a.bb_100 = t.bb_100_s[e].bb_100, o.dataHandler.getUserData().pokerdata.Bb100s.push(a)
                    }
                }
                const n = o.dataHandler.getUserData().pokerdata;
                for (var i in n) n[i] && !Number.isNaN(n[i]) || (n[i] = 0);
                o.MessageCenter.send("update_userPokerData", {
                    gameDataInstance: e
                })
            } else if ("decode error" === n) this.tipsMsg(t), o.MessageCenter.send("error_load_statistics");
            else if ("load data error" === n) o.MessageCenter.send("RecetRoleInfoView"), o.MessageCenter.send("error_load_statistics");
            else {
                let e;
                try {
                    e = JSON.parse(n)
                } catch (e) {
                    var d;
                    return void(null == (d = T.getInstance()) || d.trace(U.CashGameIssues, "GetUserDataError", {
                        jfdata: n
                    }))
                }
                Object.keys(e).length > 0 && (o.dataHandler.getUserData().pokerdata = e);
                const t = o.dataHandler.getUserData().pokerdata;
                for (var i in t) t[i] && !Number.isNaN(t[i]) || (t[i] = 0);
                o.MessageCenter.send("updateUserJackfruitData")
            }
        }
        static getInstance() {
            return this.instence || (this.instence = new A), this.instence
        }
        requestDoFavorite(e, t, a, n) {
            o.config.getStringData("DATA_DOFAVORITE", !0);
            let r = {
                uid: e,
                game_uuid_js: t,
                gameid: a
            };
            o.dataNet.RequestGetData(k.data.CMD.DO_FAVORITE_REQ, r, this._onDoFavorite.bind(this, n))
        }
        _onDoFavorite(e, t) {
            let a = o.Number(t.result);
            if (0 === a) {
                o.TT.showMsg(o.config.getStringData("UICollectSuccess"), o.Enum.ToastType.ToastTypeSuccess);
                const t = (null == e ? void 0 : e.tCollectPokerMapData) || o.GameDataManager.tCollectPokerMapDataHallScene;
                t.vCollectUUidList = [], o.httpHandler.requestGetFavoriteList(o.dataHandler.getUserData().u32Uid, 1, t.nPageNum, e)
            } else 2 === a ? o.TT.showMsg(o.config.getStringData("UIHasCollect"), o.Enum.ToastType.ToastTypeError, !1, !0) : o.TT.showMsg("Unknown Error", o.Enum.ToastType.ToastTypeError, !1, !0)
        }
        requestGetFavoriteList(e, t, a, n) {
            ((null == n ? void 0 : n.tCollectPokerMapData) || o.GameDataManager.tCollectPokerMapDataHallScene).vCollectUUidList = [], this._fetchFavoriteList(e, t, a, n)
        }
        _fetchFavoriteList(e, t, a, n) {
            o.config.getStringData("DATA_GETFAVORITELISTNew", !0);
            let r = {
                uid: e,
                pageNum: a,
                pageSize: t
            };
            o.dataNet.RequestGetData(k.data.CMD.FAVORITE_LIST_NEW_REQ, r, this._onGetFavoriteList.bind(this, n))
        }
        _onGetFavoriteList(e, t) {
            let a = o.Number(t.totalCount),
                n = o.Number(t.pageSize);
            const r = (null == e ? void 0 : e.tCollectPokerMapData) || o.GameDataManager.tCollectPokerMapDataHallScene;
            r.nCollectHaveCount = a, r.nCurPageSize = n;
            let s = t.games ? t.games : [];
            for (let e = 0; e < s.length; ++e) {
                let t = new d;
                t.sUUID = o.String(s[e].game_uuid_js), t.nAddTime = o.Number(s[e].add_time), r.vCollectUUidList.push(t)
            }
            r.nCollectCurGetCount = r.vCollectUUidList.length, r.nCollectCurGetCount < a ? this._fetchFavoriteList(o.dataHandler.getUserData().u32Uid, n + 1, r.nPageNum, e) : o.MessageCenter.send("update_handMap", e)
        }
        requestFavoriteHand(e, t, a) {
            o.config.getStringData("DATA_GETFAVORITEHAND", !0);
            let n = {
                uid: e,
                game_uuid_js: t,
                token: o.dataHandler.getUserData().getUserTokenByGameID()
            };
            o.dataNet.RequestGetData(k.data.CMD.FAVORITE_HAND_REQ, n, this._onFavoriteHand.bind(this, a), !0)
        }
        _onFavoriteHand(e, t) {
            let a = o.String(t.game_uuid_js);
            const n = (null == e ? void 0 : e.tCollectPokerMapData) || o.GameDataManager.tCollectPokerMapDataHallScene;
            n.mHandMapCache.add(a, t);
            let r = N.protocol.GameRecord.fromObject(t.game_record);
            o.StringTools.clearArray(n.tPokerHandData.vPublicCards);
            for (let e = 0; e < o.StringTools.getArrayLength(r.public_cards); ++e) {
                let t = new i;
                t.eCardNum = o.Number(r.public_cards[e].number), t.eCardSuit = o.Number(r.public_cards[e].suit), n.tPokerHandData.vPublicCards.push(t)
            }
            o.StringTools.clearArray(n.tPokerHandData.vUnsendPublicCards);
            for (let e = 0; e < o.StringTools.getArrayLength(r.unsend_public_cards); ++e) {
                let t = new i;
                t.eCardNum = o.Number(r.unsend_public_cards[e].number), t.eCardSuit = o.Number(r.unsend_public_cards[e].suit), n.tPokerHandData.vUnsendPublicCards.push(t)
            }
            o.StringTools.clearArray(n.tPokerHandData.vShowCardByStanderUID);
            for (let e = 0; e < o.StringTools.getArrayLength(t.show_card_bystander_uid); ++e) n.tPokerHandData.vShowCardByStanderUID.push(t.show_card_bystander_uid[e]);
            let s = t.replay.TableInfo,
                d = {};
            if (t.replay.SeatsInfo) {
                let e = t.replay.SeatsInfo.seats_info,
                    a = t.replay.RoundsInfo;
                for (let t = 0; t < o.StringTools.getArrayLength(e); ++t) {
                    let n = {
                        seatNo: e[t].seat_no,
                        seatInfo: 0,
                        jackpotType: 0,
                        uid: e[t].UID
                    };
                    const r = a.settlement_round.filter((a => a.win_seat_no === e[t].seat_no));
                    n.jackpotType = r[0].jackpot_type, n.seatNo === s.dealer_seat && (n.seatInfo |= 1), n.seatNo === s.sb_seat && (n.seatInfo |= 2), n.seatNo === s.bb_seat && (n.seatInfo |= 4), d[n.uid] = n
                }
            }
            o.StringTools.clearArray(n.tPokerHandData.vPlayerRecords);
            for (let e = 0; e < o.StringTools.getArrayLength(r.records); ++e) {
                let t = new l;
                t.sPlayerName = r.records[e].player_name, t.sPlayerHead = o.String(r.records[e].player_head), t.nPlayerBettingRoundBet = o.Number(r.records[e].player_betting_round_bet), t.nWinBet = o.Number(r.records[e].win_bet), t.nInsuranceBet = o.Number(r.records[e].insurance_bet_amount), t.nInsuranceAmount = o.Number(r.records[e].insurance_winbet), t.bFold = Boolean(r.records[e].is_fold), t.nPlayerID = o.Number(r.records[e].playerid), t.bMuck = Boolean(r.records[e].is_muck), t.bActiveShow = Boolean(r.records[e].is_active_show), t.bForceShowDown = Boolean(r.records[e].is_force_show), t.nLastRoundType = o.Number(r.records[e].LastRoundType), t.plat = o.Number(r.records[e].plat), t.nReviewSendOutLen = o.Number(r.records[e].send_card_len), t.nJackWinbet = o.Number(r.records[e].jack_winbet);
                for (let a = 0; a < o.StringTools.getArrayLength(r.records[e].cards); ++a) {
                    let n = new i;
                    n.eCardNum = o.Number(r.records[e].cards[a].number), n.eCardSuit = o.Number(r.records[e].cards[a].suit), t.vCards.push(n)
                }
                let a = d[t.nPlayerID];
                "object" == typeof a && (t.seatNo = a.seatNo, t.seatInfo = a.seatInfo, t.jackpotType = a.jackpotType), n.tPokerHandData.vPlayerRecords.push(t)
            }
            let c = o.Number(t.game_mode);
            n.tPokerHandData.sGameUUID = a, n.tPokerHandData.nJackpotWinbet = o.Number(t.jackpot_winbet), n.tPokerHandData.bAssociatedJackpot = Boolean(t.is_associated_jackpot), n.tPokerHandData.nCreateTime = o.Number(t.start_time), n.tPokerHandData.nTotalPot = o.Number(r.total_pot), n.tPokerHandData.nMaxPot = o.Number(t.max_port), n.tPokerHandData.nInsuranceWinbet = o.Number(t.insurace_winbet), n.tPokerHandData.nGameMode = 0 === c ? 1 : c, n.tPokerHandData.nShortFull = o.Number(t.short_full), n.tPokerHandData.objReplay = t.replay, n.tPokerHandData.objReplayInsurance = t.replayinsurance, n.tPokerHandData.bMirco = Boolean(t.ismirco), n.tPokerHandData.nGameid = o.Number(t.gameid), n.tPokerHandData.nJackpotTotalWinbet = o.Number(t.replay.RoundsInfo.jp_total_winbet), o.MessageCenter.send("update_handMap", e)
        }
        requestGameHand(e, t, a, n) {
            o.config.getStringData("DATA_GETGAMEHAND", !0);
            let r = {
                uid: e,
                game_uuid_js: t,
                gameid: a,
                token: o.dataHandler.getUserData().getUserTokenByGameID(a)
            };
            o.dataNet.RequestGetData(k.data.CMD.GAME_HAND_REQ, r, this._onGameHand.bind(this, n), !0)
        }
        _onGameHand(e, t) {
            let a = o.String(t.game_uuid_js);
            e.tGameRecords.mHandMapCache.add(a, t);
            let n = N.protocol.GameRecord.fromObject(t.game_record);
            o.StringTools.clearArray(e.tGameRecords.tPokerHandData.vPublicCards);
            for (let t = 0; t < n.public_cards.length; ++t) {
                let a = new i;
                a.eCardNum = o.Number(n.public_cards[t].number), a.eCardSuit = o.Number(n.public_cards[t].suit), e.tGameRecords.tPokerHandData.vPublicCards.push(a)
            }
            o.StringTools.clearArray(e.tGameRecords.tPokerHandData.vUnsendPublicCards);
            for (let t = 0; t < n.unsend_public_cards.length; ++t) {
                let a = new i;
                a.eCardNum = o.Number(n.unsend_public_cards[t].number), a.eCardSuit = o.Number(n.unsend_public_cards[t].suit), e.tGameRecords.tPokerHandData.vUnsendPublicCards.push(a)
            }
            o.StringTools.clearArray(e.tGameRecords.tPokerHandData.vShowCardByStanderUID);
            for (let a = 0; a < o.StringTools.getArrayLength(t.show_card_bystander_uid); ++a) e.tGameRecords.tPokerHandData.vShowCardByStanderUID.push(t.show_card_bystander_uid[a]);
            let r = t.replay.TableInfo,
                s = t.replay.SeatsInfo.seats_info,
                d = {},
                c = t.replay.RoundsInfo;
            for (let e = 0; e < o.StringTools.getArrayLength(s); ++e) {
                let t = {
                    seatNo: s[e].seat_no,
                    seatInfo: 0,
                    jackpotType: 0,
                    uid: s[e].UID
                };
                const a = c.settlement_round.filter((t => t.win_seat_no === s[e].seat_no));
                t.jackpotType = a[0].jackpot_type, t.seatNo === r.dealer_seat && (t.seatInfo |= 1), t.seatNo === r.sb_seat && (t.seatInfo |= 2), t.seatNo === r.bb_seat && (t.seatInfo |= 4), d[t.uid] = t
            }
            o.StringTools.clearArray(e.tGameRecords.tPokerHandData.vPlayerRecords);
            for (let t = 0; t < n.records.length; ++t) {
                let a = new l;
                a.sPlayerName = o.String(n.records[t].player_name), a.sPlayerHead = o.String(n.records[t].player_head), a.nPlayerBettingRoundBet = o.Number(n.records[t].player_betting_round_bet), a.nWinBet = o.Number(n.records[t].win_bet), a.nInsuranceBet = o.Number(n.records[t].insurance_bet_amount), a.nInsuranceAmount = o.Number(n.records[t].insurance_winbet), a.bFold = Boolean(n.records[t].is_fold), a.nPlayerID = o.Number(n.records[t].playerid), a.bMuck = Boolean(n.records[t].is_muck), a.bActiveShow = Boolean(n.records[t].is_active_show), a.bForceShowDown = Boolean(n.records[t].is_force_show), a.nLastRoundType = o.Number(n.records[t].LastRoundType), a.plat = o.Number(n.records[t].plat), a.nReviewSendOutLen = o.Number(n.records[t].send_card_len), a.nJackWinbet = o.Number(n.records[t].jack_winbet);
                for (let e = 0; e < n.records[t].cards.length; ++e) {
                    let r = new i;
                    r.eCardNum = o.Number(n.records[t].cards[e].number), r.eCardSuit = o.Number(n.records[t].cards[e].suit), a.vCards.push(r)
                }
                let r = d[a.nPlayerID];
                "object" == typeof r && (a.seatNo = r.seatNo, a.seatInfo = r.seatInfo, a.jackpotType = r.jackpotType), e.tGameRecords.tPokerHandData.vPlayerRecords.push(a)
            }
            let g = o.Number(t.game_mode);
            e.tGameRecords.tPokerHandData.sGameUUID = a, e.tGameRecords.tPokerHandData.nClubID = o.Number(t.clubid), e.tGameRecords.tPokerHandData.nRoomID = o.Number(t.roomid), e.tGameRecords.tPokerHandData.sRoomUUID = o.String(t.room_uuid_js), e.tGameRecords.tPokerHandData.nCreateTime = o.Number(t.start_time), e.tGameRecords.tPokerHandData.nTotalPot = o.Number(n.total_pot), e.tGameRecords.tPokerHandData.nMaxPot = o.Number(t.max_port), e.tGameRecords.tPokerHandData.nInsuranceWinbet = o.Number(t.insurace_winbet), e.tGameRecords.tPokerHandData.nJackpotWinbet = o.Number(t.jackpot_winbet), e.tGameRecords.tPokerHandData.nGameMode = 0 === g ? 1 : g, e.tGameRecords.tPokerHandData.nShortFull = o.Number(t.short_full), e.tGameRecords.tPokerHandData.objReplay = t.replay, e.tGameRecords.tPokerHandData.objReplayInsurance = t.replayinsurance, e.tGameRecords.tPokerHandData.bMirco = Boolean(t.ismirco), e.tGameRecords.tPokerHandData.nGameid = o.Number(t.gameid), e.tGameRecords.tPokerHandData.bForceShowcard = Boolean(t.force_showcard), e.tGameRecords.tPokerHandData.nJackpotTotalWinbet = o.Number(t.replay.RoundsInfo.jp_total_winbet), null === t.is_star_closed && void 0 === t.is_star_closed || (e.tGameRecords.tPokerHandData.bStarClosed = Boolean(t.is_star_closed)), o.MessageCenter.send("update_handMap", e)
        }
        requestRoomRecordList(e, t, a, n, r) {
            let s = o.dataHandler.getUserData().getUserTokenByGameID(a),
                i = o.dataHandler.getUserData().getUserIdByGameID(a);
            o.config.getStringData("DATA_GETROOMRECORDLIST", !0), o.config.GET_CLIENT_TYPE();
            if (null == s || null == s) return void console.log("请求战绩、胜率数据失败，user_token  is null");
            let d = {
                token: s,
                uid: i,
                clubid: e,
                mode: t,
                gameid: a,
                have_count: n
            };
            o.dataNet.RequestGetData(k.data.CMD.ROOM_RECORDS_LIST_REQ, d, r, !0)
        }
        requestRoomRecord(e) {
            let t = o.dataHandler.getUserData().getUserTokenByGameID(),
                a = o.dataHandler.getUserData().getUserIdByGameID();
            o.config.getStringData("DATA_GETROOMRECORD", !0);
            if (null == t || null == t) return void console.log("请求结算数据失败，user_token  is null");
            let n = {
                token: t,
                uid: a,
                room_uuid_js: e
            };
            o.dataNet.RequestGetData(k.data.CMD.ROOM_RECORD_REQ, n, this.responseRoomRecordSuccess.bind(this), !0)
        }
        responseRoomRecordSuccess(e) {
            const t = o.GameDataManager.getDataInstanceByGameAndRoomUuidJs(o.Number(e.gameid), o.String(e.room_uuid_js));
            if (t) {
                let a = e.alliance_clubids,
                    n = [];
                t.tGameRecords.tPokerInfoData.vAllinceResultInfos = [];
                for (let e = 0; e < o.StringTools.getArrayLength(a); ++e) {
                    let r = new c;
                    r.nAllianceID = a[e].AllianceId, r.sAllianceName = a[e].AllianceName;
                    let s = a[e].Clubids;
                    for (let e = 0; e < o.StringTools.getArrayLength(s); ++e) {
                        let t = o.Number(s[e]);
                        r.vClubID.push(t), n.push(t)
                    }
                    t.tGameRecords.tPokerInfoData.vAllinceResultInfos.push(r)
                }
                let r = e.club_adminids;
                t.tGameRecords.tPokerInfoData.vClubAdminids = [];
                for (let e = 0; e < o.StringTools.getArrayLength(r); ++e) t.tGameRecords.tPokerInfoData.vClubAdminids.push(o.Number(r[e]));
                t.tGameRecords.tPokerInfoData.sRoomUUID = o.String(e.room_uuid_js), t.tGameRecords.tPokerInfoData.nCreateTime = o.Number(e.create_time), t.tGameRecords.tPokerInfoData.sOwnerName = o.String(e.owner_name), t.tGameRecords.tPokerInfoData.nTotalHand = o.Number(e.total_hand_count), t.tGameRecords.tPokerInfoData.nMaxPot = o.Number(e.max_port), t.tGameRecords.tPokerInfoData.nInsurance_Winbet = o.Number(e.insurace_winbet), t.tGameRecords.tPokerInfoData.nTotalBuyin = o.Number(e.room_total_buyin), t.tGameRecords.tPokerInfoData.nJackpotWinbet = o.Number(e.jackpot_winbet), t.tGameRecords.tPokerInfoData.sAllianceName = o.String(e.alliance_name), t.tGameRecords.tPokerInfoData.nAllianceId = o.Number(e.alliance_id), t.tGameRecords.tPokerInfoData.sOwnerClubName = o.String(e.owner_club_name), t.tGameRecords.gameID = o.Number(e.gameid);
                let s = e.clubInfos;
                t.tGameRecords.tPokerInfoData.vClubs = [];
                {
                    let e = new c;
                    e.nAllianceID = 0, e.sAllianceName = o.config.getStringData("UIAllianceTitle");
                    for (let a = 0; a < o.StringTools.getArrayLength(s); ++a) {
                        let r = new g;
                        r.sClubName = o.String(s[a].Clubname), r.nCreateClubUid = o.Number(s[a].CreateClubUid), r.nOwnerId = o.Number(s[a].OwnerId), r.nClubId = o.Number(s[a].ClubId), r.vUID = [];
                        let i = s[a].UIDs;
                        for (let e = 0; e < o.StringTools.getArrayLength(i); ++e) r.vUID.push(o.Number(i[e]));
                        t.tGameRecords.tPokerInfoData.vClubs.push(r);
                        let d = !1;
                        for (let e = 0; e < o.StringTools.getArrayLength(n); ++e) n[e] === r.nClubId && (d = !0);
                        d || e.vClubID.push(r.nClubId), o.StringTools.getArrayLength(e.vClubID) > 0 && t.tGameRecords.tPokerInfoData.vAllinceResultInfos.push(e)
                    }
                } {
                    let a = e.room_param,
                        n = new _;
                    o.StringTools.deepCopy(a, n), t.tGameRecords.tPokerInfoData.tRoomParam = n
                } {
                    t.tGameRecords.tPokerInfoData.vBuyinList = [];
                    let a = e.buyins;
                    for (let e = 0; e < o.StringTools.getArrayLength(a); ++e) {
                        let n = new u;
                        n.nUID = o.Number(a[e].UID), n.sPlayername = o.String(a[e].Playername), n.sPlayerHead = o.String(a[e].PlayerHead), n.nTotalBuyin = o.Number(a[e].TotalBuyin), 0 !== n.nTotalBuyin && (n.nInsuraceWinbet = o.Number(a[e].InsuraceWinbet), n.nInsuranceBetAmount = o.Number(a[e].InsuranceBetAmount), n.nJackpotWinbet = o.Number(a[e].JackpotWinbet), n.nDrawin = o.Number(a[e].Drawin), n.nAward2CludFund = o.Number(a[e].Award2ClubFund), n.nLastBuyinClubid = o.Number(a[e].LastBuyinClubid), n.nWinBet = o.Number(a[e].WinBet), n.nHand = o.Number(a[e].HandCount), t.tGameRecords.tPokerInfoData.vBuyinList.push(n))
                    }
                } {
                    t.tGameRecords.tPokerInfoData.vHandUUIDList = [];
                    let a = e.game_uuids_js;
                    for (let e = 0; e < o.StringTools.getArrayLength(a); ++e) t.tGameRecords.tPokerInfoData.vHandUUIDList.push(o.String(a[e]));
                    t.tGameRecords.tPokerInfoData.vHandUUIDList.sort(((e, t) => {
                        if (e.length != t.length) return e.length - t.length;
                        if (0 === e.length) return 0;
                        for (let a = 0; a < e.length; ++a) {
                            let n = o.Number(e[a]),
                                r = o.Number(t[a]);
                            if (n !== r) return n - r
                        }
                    })), t.tGameRecords.tPokerInfoData.vHandUUIDList = o.tools.unique(t.tGameRecords.tPokerInfoData.vHandUUIDList)
                }
            } else console.error(`[responseRoomRecordSuccess] no gameDataInstance matched gameid: ${e.gameid}, room_uuid_js: ${e.room_uuid_js}`);
            o.MessageCenter.send("responseRoomRecordSuccess", {
                value: e,
                gameData: t
            })
        }
        requestJFRoomRecordList(e, t, a) {
            const n = {
                token: o.dataHandler.getUserData().getUserTokenByGameID(),
                jfId: o.dataHandler.getUserData().u32Uid,
                pageNum: e,
                pageSize: t
            };
            o.dataNet.RequestGetData(k.data.CMD.JF_ROOM_LIST_REQ, n, a, !1)
        }
        GetPubliceData(e, t, a, n = null) {
            const r = e.tRoomData.u32GameID;
            let s = o.dataHandler.getUserData().getUserTokenByGameID(r);
            if (s.length <= 0 && (s = o.tools.GetStringByCCFile("user_token"), s.length <= 0)) return;
            n = n ?? o.dataHandler.getUserData().getUserIdByGameID(e.tRoomData.u32GameID);
            const {
                mode: i,
                blind: d,
                ante: l,
                currencyType: c
            } = this.getParamsForRequestPlayerStats(e);
            let g = {
                uid: t,
                mode: i,
                gameid: r,
                blind: d,
                ante: l,
                identity: a,
                req_uid: n,
                currencyType: c
            };
            o.dataNet.RequestGetData(k.data.CMD.GET_PUBLIC_DATA_REQ, g, this.responsePubliceData.bind(this, e), !1)
        }
        responsePubliceData(e, t) {
            if ("decode error" == t.data) this.tipsMsg(t);
            else if ("load data error" == t.data) console.log("have not any data, so reset all"), o.MessageCenter.send("RecetRoleInfoView");
            else {
                let n = t.data,
                    r = JSON.parse(n);
                r && (r.UID, o.dataHandler.getUserData().pokerdata.Total_win_money = r.Total_win_money, o.dataHandler.getUserData().pokerdata.Total_hand_card_count = r.Total_hand_card_count, o.dataHandler.getUserData().pokerdata.Vpip_rate = r.Vpip_rate, o.dataHandler.getUserData().pokerdata.Win_rate = r.Win_rate, o.dataHandler.getUserData().pokerdata.Pfr_rate = r.Pfr_rate, o.dataHandler.getUserData().pokerdata.Af_rate = r.Af_rate, o.dataHandler.getUserData().pokerdata.Sb_rate = r.Sb_rate, o.dataHandler.getUserData().pokerdata.Etf_rate = r.Etf_rate, o.dataHandler.getUserData().pokerdata.Wsf_rate = r.Wsf_rate, o.dataHandler.getUserData().pokerdata.Wsd_rate = r.Wsd_rate, o.dataHandler.getUserData().pokerdata.Rate_3bet = r.Rate_3bet, o.dataHandler.getUserData().pokerdata.Rate_fold_to_3bet = r.Rate_fold_to_3bet, o.dataHandler.getUserData().pokerdata.Cbet_rate = r.Cbet_rate, o.dataHandler.getUserData().pokerdata.Total_enter_game_count = r.Total_enter_game_count, o.dataHandler.getUserData().pokerdata.Enter_rate = r.Enter_rate, o.dataHandler.getUserData().pokerdata.star_duration = t.star_duration, o.dataHandler.getUserData().pokerdata.liked_count = r.liked_count, o.dataHandler.getUserData().pokerdata.has_liked = r.has_liked, o.dataHandler.getUserData().pokerdata.intimacy = r.intimacy, 0 != r.Total_hand_card_count && 0 != r.Total_win_money ? o.dataHandler.getUserData().pokerdata.Fight_100 = 1 * r.Total_win_money / r.Total_hand_card_count * 100 : o.dataHandler.getUserData().pokerdata.Fight_100 = 0, o.dataHandler.getUserData().pokerdata.Total_buyin = r.Total_buyin, o.dataHandler.getUserData().pokerdata.Total_end_room_count = r.Total_end_room_count, o.dataHandler.getUserData().pokerdata.Wtsd_rate = r.Wtsd_rate, o.dataHandler.getUserData().pokerdata.level_hands = r.level_hands, o.dataHandler.getUserData().pokerdata.Total_end_room_count > 0 ? (o.dataHandler.getUserData().pokerdata.Fight_average = 1 * o.dataHandler.getUserData().pokerdata.Total_win_money / o.dataHandler.getUserData().pokerdata.Total_end_room_count, o.dataHandler.getUserData().pokerdata.Buyin_average = 1 * o.dataHandler.getUserData().pokerdata.Total_buyin / o.dataHandler.getUserData().pokerdata.Total_end_room_count) : (o.dataHandler.getUserData().pokerdata.Fight_average = 0, o.dataHandler.getUserData().pokerdata.Buyin_average = 0), o.dataHandler.getUserData().pokerdata.UID = r.UID);
                let s = o.dataHandler.getUserData().pokerdata;
                for (var a in s) s[a] && !Number.isNaN(s[a]) || (s[a] = 0);
                o.MessageCenter.send("update_userPokerData", {
                    gameDataInstance: e
                })
            }
        }
        tipsMsg(e, t = !1) {
            if (t && "0" == e.msg_code) return;
            if (["100033", "100070", "100071", "100017"].includes(e.msg_code)) return;
            let a = "";
            a = o.config.getCurrentLanguage() == o.Enum.LANGUAGE_TYPE.zh_CN ? e.msg : e.message, o.popUp.showMsg({
                txt: o.config.getStringData("serverErrorCode" + e.msg_code, !1, a),
                msgType: o.Enum.ToastType.ToastTypeWarning
            })
        }
        requestCaptcha() {
            let e = {
                device_uuid: o.native.GetDeviceUUID()
            };
            o.http.sendRequest(o.config.getStringData("WEB_API_GET_CAPTCHA", !0), e, this.responseCaptchaSucc.bind(this))
        }
        responseCaptchaSucc(e) {
            if (0 == e.msg_code) {
                let t = e.data;
                if (0 == t.type) o.MessageCenter.send("responseCaptchaUrlSucc", 0);
                else if (1 == t.type) {
                    if (t.captcha_url.length > 0) {
                        console.log("===>@@@@ " + t.captcha_url);
                        let e = t.captcha_url;
                        o.MessageCenter.send("responseCaptchaUrlSucc", e)
                    }
                } else if (t.captcha.length > 0) {
                    console.log("===>@@@@ " + t.captcha);
                    let e = t.captcha;
                    o.MessageCenter.send("responseCaptchaSucc", e)
                }
            }
        }
        addGeneralField(e) {
            let t = o.dataHandler.getUserData().getUserToken();
            if (o.StringTools.getArrayLength(t) <= 0 && (t = o.tools.GetStringByCCFile("user_token"), o.StringTools.getArrayLength(t) <= 0)) return;
            let a = o.dataHandler.getUserData().getUserIdS();
            "" == a && (a = o.tools.GetStringByCCFile("user_id"), o.StringTools.getArrayLength(a) <= 0) || (e.token = t, e.user_id = a)
        }
        UploadVoiceFile() {
            let e = (n.fileUtils ? n.fileUtils.getWritablePath() : "/") + "lvRecord.mp3";
            if (console.log("##############UploadVoiceFile. path=" + e), n.fileUtils.isFileExist(e)) {
                if (a.os === a.OS.IOS && (o.config.getCurrentScene() == o.Enum.SCENE.GAME_SCENE || o.config.getCurrentScene() == o.Enum.SCENE.GAME_SCENE_AOF || o.config.getCurrentScene() == o.Enum.SCENE.JACKFRUIT_SCENE && -1 != o.JackfruitManager.tRoomData.nSelfSeatID && o.native.playLocalVoice()), a.os === a.OS.ANDROID) {
                    let t = !1,
                        a = 0;
                    o.config.getCurrentScene() == o.Enum.SCENE.GAME_SCENE || o.config.getCurrentScene() == o.Enum.SCENE.GAME_SCENE_AOF || o.config.getCurrentScene() == o.Enum.SCENE.JACKFRUIT_SCENE && (t = -1 != o.JackfruitManager.tRoomData.nSelfSeatID, a = o.JackfruitManager.tRoomData.nSelfSeatID), o.config.getCurrentScene() != o.Enum.SCENE.GAME_SCENE && o.config.getCurrentScene() != o.Enum.SCENE.GAME_SCENE_AOF && o.config.getCurrentScene() != o.Enum.SCENE.JACKFRUIT_SCENE || t && (o.native.DoStopRecord(), r.loadRemote(e, ((e, t) => {
                        if (e) return console.error(e), null;
                        let n = o.AudioMgr.executePlayEffect(t, !1),
                            s = o.AudioMgr.getDuration(n);
                        setTimeout((function() {
                            r.releaseAsset(t)
                        }), 1e3 * (s + .05));
                        let i = new p;
                        i.u32SeatId = Number(a), i.f32Time = s > 10 ? 10 : s, -1 == i.f32Time && (i.f32Time = 3), o.MessageCenter.send("on_play_voice", i)
                    })))
                }
                let t = o.tools.GetBase64String(e);
                t = t.replace(/\+/g, "-"), t = t.replace(/\//g, "_");
                let n = {
                    type: 0,
                    filename: o.dataHandler.getUserData().user_id + "_" + (new Date).getTime(),
                    img: t
                };
                this.addGeneralField(n);
                let s = o.dataHandler.getUserData().file_upload_url;
                o.http.sendRequest(s, n, this._OnUploadVoiceSucc.bind(this), o.http.HttpRequestType.POST, o.http.HttpParseType.NONE)
            } else o.MessageCenter.send("on_upload_voice_done")
        }
        UploadVoiceFile_Sy(e) {
            console.log("############################### UploadVoiceFile_Sy:" + e), e = (e = e.replace(/\+/g, "-")).replace(/\//g, "_");
            let t = {
                type: 0,
                filename: o.dataHandler.getUserData().user_id + "_" + (new Date).getTime(),
                img: e
            };
            this.addGeneralField(t);
            let a = o.dataHandler.getUserData().file_upload_url;
            o.http.sendRequest(a, t, this._OnUploadVoiceSucc.bind(this), o.http.HttpRequestType.POST, o.http.HttpParseType.NONE)
        }
        _OnUploadVoiceSucc(e) {
            if (console.log("############## _OnUploadVoiceSucc value=="), console.log(e), "0" == e.code) {
                let t = e.url;
                console.log("############## _OnUploadVoiceSucc file==" + t);
                const n = o.GameDataManager.getLastDataInstance();
                if (o.StringTools.getArrayLength(t) > 0) {
                    if (o.config.getCurrentScene() == o.Enum.SCENE.GAME_SCENE) return void o.gameNet.RequestSendChat(n.tRoomData.u32RoomId, o.Enum.ChatType.Enum_Voice, t);
                    if (o.config.getCurrentScene() == o.Enum.SCENE.GAME_SCENE_AOF) return void o.aofNet.RequestSendChat(n.tRoomData.u32RoomId, o.Enum.ChatType.Enum_Voice, t);
                    o.config.getCurrentScene() == o.Enum.SCENE.JACKFRUIT_SCENE && o.jackfruitNet.requestSendChat(n.tRoomData.u32RoomId, o.Enum.ChatType.Enum_Voice, t)
                }
                a.isBrowser && o.config.GET_CLIENT_TYPE() == o.Enum.ClientType.H5WebPage && r.loadRemote(t, ((e, t) => {
                    if (e) return console.error("error:", e), null;
                    let a = o.AudioMgr.executePlayEffect(t, !1),
                        s = o.AudioMgr.getDuration(a);
                    setTimeout((function() {
                        r.releaseAsset(t)
                    }), 1e3 * (s + .05));
                    let i = new p;
                    o.config.getCurrentScene() == o.Enum.SCENE.JACKFRUIT_SCENE ? i.u32SeatId = Number(o.JackfruitManager.tRoomData.nSelfSeatID) : i.u32SeatId = Number(n.tRoomData.i32SelfSeat), i.f32Time = s > 10 ? 10 : s, -1 == i.f32Time && (i.f32Time = 3), o.MessageCenter.send("on_play_voice", i)
                }))
            } else o.TT.showMsg(o.config.getStringData("Upload_voice_error_tips"), o.Enum.ToastType.ToastTypeError);
            o.MessageCenter.send("on_upload_voice_done")
        }
        DoDownloadVoice(e, t = null) {
            let a = e.kUrl,
                n = a.lastIndexOf("/") + 1,
                s = a.substr(n);
            r.loadRemote(a, ((a, n) => {
                if (a) return t && t(), null;
                if (o.config.getCurrentScene() != o.Enum.SCENE.GAME_SCENE && o.config.getCurrentScene() != o.Enum.SCENE.GAME_SCENE_AOF && o.config.getCurrentScene() != o.Enum.SCENE.JACKFRUIT_SCENE) return void console.log(" current scene is not in Game_SCENE:");
                let i = o.AudioMgr.executePlayEffect(n, !1),
                    d = o.AudioMgr.getDuration(i);
                const l = o.GameDataManager.getLastDataInstance();
                l && (l.tRoomData.last_audioID = i), setTimeout((function() {
                    r.releaseAsset(n)
                }), 1e3 * (d + .05));
                let c = new p;
                c.kUrl = s, c.kSender = e.kSender, c.u32SeatId = e.u32SeatId, c.f32Time = d > 10 ? 10 : d, -1 == c.f32Time && (c.f32Time = 3), o.MessageCenter.send("on_play_voice", c)
            }))
        }
        OnDownloadCompleted(e, t) {
            if (null == e) return;
            let s = e;
            console.log();
            let i = t.split("#");
            if (i.length <= 0) return;
            let d = i[0],
                l = i[1],
                c = i[2];
            if (a.isNative) {
                let e = (n.fileUtils ? n.fileUtils.getWritablePath() : "/") + d;
                n.fileUtils.isFileExist(e) && n.fileUtils.removeFile(e), n.fileUtils.writeStringToFile(s, e), r.loadRemote(e, ((e, t) => {
                    if (e) return console.error(e), null;
                    let a = o.AudioMgr.executePlayEffect(t, !1),
                        n = o.AudioMgr.getDuration(a);
                    setTimeout((function() {
                        r.releaseAsset(t)
                    }), 1e3 * n);
                    let s = new p;
                    s.kUrl = d, s.kSender = l, s.u32SeatId = Number(c), s.f32Time = n > 10 ? 10 : n, -1 == s.f32Time && (s.f32Time = 3), o.MessageCenter.send("on_play_voice", s)
                }))
            }
        }
        requestUploadClubHead(e, t) {
            let a = o.config.getStringData("WEB_API_UPLOAD_CLUB_HEAD", !0),
                n = {
                    club_id: e,
                    img_ext: "jpg",
                    club_img: t,
                    club_thumb: t
                };
            this.addGeneralField(n), o.http.sendRequest(a, n, this._responseUploadClubHead.bind(this), o.http.HttpRequestType.POST, o.http.HttpParseType.NONE)
        }
        _responseUploadClubHead(e) {
            if ("0" == e.msg_code) {
                let t = e.data,
                    a = t.club_id,
                    n = t.club_img,
                    r = o.clubDataMgr.getClubDataList();
                for (let e = 0; e < r.length; ++e)
                    if (r[e].club.club_id === a) {
                        r[e].club.club_icon = n;
                        break
                    } o.MessageCenter.send("update_clubdata")
            }
        }
        UpdateAvatar(e, t, a = (() => {})) {
            let n = {
                    avatarUrl: e = e.replace("data:image/png;base64,", "")
                },
                r = o.config.getStringData("WEB_API_POST_UPDATE_SYSTEM_AVATAR", !0);
            t && (n = {
                avatarBase64: e,
                imgExt: "jpg"
            }, r = o.config.getStringData("WEB_API_POST_UPDATE_CUSTOM_AVATAR", !0)), o.http.sendRequestV2(r, n, this.OnUpdateAvatarSucc.bind(this, a), this.OnModifyInfoError.bind(this, a), o.http.HttpRequestType.POST, null, !0, !1, !0, null, !0)
        }
        OnUpdateAvatarSucc(e = (() => {}), t) {
            o.popUp.showMsg({
                title: o.config.getStringData("Success"),
                txt: o.config.getStringData("Profile_update_msg"),
                msgType: o.Enum.ToastType.ToastTypeSuccess
            }), t.avatarUrl && (o.dataHandler.getUserData().headUrl = o.dataHandler.getUserData().getImageURL(t.avatarUrl), o.dataHandler.getUserData().HeadPath = t.avatarUrl), o.MessageCenter.send("modify_info_succ"), e()
        }
        ModifyPlayerInfo(e, t, a, n, r = (() => {})) {
            let s = {
                nick_name: e,
                gender: t.toString(),
                img_ext: "jpg",
                avatar: a = a.replace("data:image/png;base64,", ""),
                avatar_thumb: a,
                user_area: n
            };
            this.addGeneralField(s), o.http.sendRequestV2(o.config.getStringData("WEB_API_MODIFY_INFO", !0), s, this.OnModifyInfoSucc.bind(this, r), this.OnModifyInfoError.bind(this, r), o.http.HttpRequestType.POST, null, !0, !1, !0, null, !0)
        }
        OnModifyInfoError(e = (() => {}), t) {
            console.warn("OnModifyInfoError : " + JSON.stringify(t)), o.popUp.showFirstServerError(t), e()
        }
        OnModifyInfoSucc(e = (() => {}), t) {
            if (console.log("OnModifyInfoSucc : " + JSON.stringify(t)), "0" == t.msg_code) {
                o.popUp.showMsg({
                    txt: o.config.getStringData("Profile_update_msg"),
                    msgType: o.Enum.ToastType.ToastTypeSuccess
                });
                let e = t.data;
                e.user_id && (o.dataHandler.getUserData().user_id = e.user_id, o.dataHandler.getUserData().u32Uid = o.Number(e.user_id)), e.nick_name && (o.dataHandler.getUserData().nick_name = e.nick_name), e.gender && (o.dataHandler.getUserData().gender = e.gender), e.user_marks ? o.dataHandler.getUserData().user_marks = e.user_marks : o.dataHandler.getUserData().user_marks = 0, e.avatar && (o.dataHandler.getUserData().headUrl = o.dataHandler.getUserData().getImageURL(e.avatar), o.dataHandler.getUserData().HeadPath = e.avatar), e.user_area && (o.dataHandler.getUserData().user_area = e.user_area), o.dataHandler.getUserData().is_allow_update_name = Boolean(e.is_allow_update_name), o.MessageCenter.send("modify_info_succ")
            }
            e()
        }
        getServerAvatars(e) {
            let t = o.config.getStringData("WEB_API_GET_SERVER_AVATAR", !0),
                a = {
                    user_id: o.dataHandler.getUserData().getUserId()
                };
            o.http.sendRequestV2(t, a, e, null, o.http.HttpRequestType.GET)
        }
        requestUploadVar(e) {
            let t = {
                    language: o.config.getCurrentLanguage(),
                    user_id: o.dataHandler.getUserData().getUserIdS() || "0",
                    avatar: e,
                    ext: "jpg"
                },
                a = [];
            a.url = o.config.getStringData("WEB_API_MODIFY_UPLOADVAR", !0), a.jsondata = t, a.handler = this.onUploadVarSucc.bind(this), o.http.sendPostRequest(a)
        }
        onUploadVarSucc(e) {
            if ("0" == e.code) {
                let t = e.data;
                o.MessageCenter.send("UploadVarSuccess", t.filename)
            } else o.TT.showMsg(e.msg, o.Enum.ToastType.ToastTypeWarning)
        }
        requestQrcodeURL(e) {
            let t = o.config.getStringData("WEB_API_QRCODE", !0),
                a = {
                    code: e
                };
            this.addGeneralField(a), o.http.sendRequest(t, a, this._responseQrcodeURL.bind(this), o.http.HttpRequestType.POST, o.http.HttpParseType.NONE)
        }
        _responseQrcodeURL(e) {
            if ("0" == e.msg_code) {
                let t = e.data,
                    a = t.qrcode,
                    n = t.ieh,
                    r = t.code;
                o.MessageCenter.send("updataQrcodeUrl", a + "[" + n + "[" + r)
            }
        }
        getCustom() {
            if (o.dataHandler.getUserData().CustomUrl.length > 0) {
                let e = o.dataHandler.getUserData().CustomUrl + o.config.getCurrentLanguage();
                if (o.config.getCurrentScene() != S.LOGIN_SCENE && (e = e + "&uid=" + o.dataHandler.getUserData().getUserIdS()), a.isBrowser && o.config.isSiyuType()) {
                    let t = '{"cmd": "1006", "url":"%s", "op":1, "width":%d, "height":%d}',
                        n = 0;
                    a.os == a.OS.IOS && o.config.IS_IPHONEX_SCREEN && (n = 0);
                    let r = o.StringTools.formatC(t, e, o.config.WIDTH, o.config.HEIGHT - n);
                    o.native.SYwebjsToClient(r)
                } else a.openURL(e);
                return
            }
            o.http.sendRequest(o.config.getStringData("WEB_API_GET_CUSTOM", !0), {}, this.onGetCustom.bind(this))
        }
        onGetCustom(e) {
            if ("0" == e.msg_code) {
                let t = e.data;
                o.dataHandler.getUserData().CustomUrl = t.custom_url;
                let n = o.dataHandler.getUserData().CustomUrl + o.config.getCurrentLanguage();
                if (o.config.getCurrentScene() != S.LOGIN_SCENE && (n = n + "&uid=" + o.dataHandler.getUserData().getUserIdS()), a.isBrowser && o.config.isSiyuType()) {
                    let e = '{"cmd": "1006", "url":"%s","op":1,"width":%d, "height":%d}',
                        t = 0;
                    a.os == a.OS.IOS && o.config.IS_IPHONEX_SCREEN && (t = 0);
                    let r = o.StringTools.formatC(e, n, o.config.WIDTH, o.config.HEIGHT - t);
                    o.native.SYwebjsToClient(r)
                } else a.openURL(n)
            }
        }
        md5token() {
            var e;
            let t = "@lnFi8<eIKYazt:$_;MX9T/d(gk[JW3{Upcw";
            t = t.substring(0, 32);
            let a = o.dataHandler.getUserData().getUserToken(!1);
            a = D.DecryptBase64(a || "", t), o.dataHandler.getUserData().user_token = o.md5.md5(o.md5.md5(a)), o.appConfig.getModulesConfig().sharedPlayersPool && (a = o.dataHandler.getUserData().sharedPlayerToken, o.dataHandler.getUserData().sharedPlayerToken = o.md5.md5(o.md5.md5(a))), null == (e = T.getInstance()) || e.trace(U.UserAuth, "LogIn", {
                event: "World_Login_SUCCESS",
                original_shared_token: o.dataHandler.getUserData().originalSharedPlayerToken,
                original_token: o.dataHandler.getUserData().originalUserToken,
                sent_shared_token: o.dataHandler.getUserData().getUserToken(!0),
                sent_token: o.dataHandler.getUserData().getUserToken(!1)
            })
        }
        getDeviceType() {
            let e = "";
            return e = a.OS.ANDROID == a.os ? "android" : a.OS.IOS == a.os ? "ios" : "win32", e
        }
        onSendNativeErrorSuccess(e) {
            console.log("onSendNativeErrorSuccess.");
            e.msg_code;
            o.native.clearNativeError()
        }
        sendNativeError() {
            let e = o.native.getNativeError();
            if (null == e || e.length < 5) return void console.log("send NativeError is null.");
            console.log("send NativeError result=" + e);
            let t = this.getDeviceType(),
                a = o.native.GetDeviceUUID(),
                n = o.native.getSystemVersion(),
                r = o.config.GET_BIG_VERSION();
            r = r + "|" + o.config.GET_CLIENT_VERSION();
            let s = {
                    user_id: o.dataHandler.getUserData().getUserIdS() || 0,
                    deviceType: t,
                    deviceVersion: n,
                    deviceUuid: a,
                    version: r,
                    info: e
                },
                i = o.config.getStringData("WEB_REQUEST_CRASH_INFO", !0);
            o.http.sendRequest(i, s, this.onSendNativeErrorSuccess.bind(this))
        }
        requestGetVCodeByDevice(e, t, a) {
            let n = {
                user_id: o.dataHandler.getUserData().getUserIdS(),
                mobile: e,
                areaCode: t,
                language: o.config.getCurrentLanguage(),
                clientType: o.config.GET_CLIENT_TYPE()
            };
            o.http.sendRequest(o.config.getStringData("WEB_GET_VCODE_BY_DEVICE", !0), n, a || this.responseGetVCodeByDevice.bind(this))
        }
        responseGetVCodeByDevice(e) {
            this.tipsMsg(e), "0" === e.msg_code ? (o.TT.showMsg(e.msg, o.Enum.ToastType.ToastTypeWarning), o.MessageCenter.send("BindDevice_vcode_succ"), console.log("responseGetVCodeByDevice===》》")) : console.log("responseGetVCodeByDevice===》》fail")
        }
        requestBindSafeDevice(e, t, a, n) {
            let r = {
                user_id: o.dataHandler.getUserData().getUserIdS(),
                mobile: e,
                areaCode: t,
                language: o.config.getCurrentLanguage(),
                clientType: o.config.GET_CLIENT_TYPE(),
                device_uuid: o.native.GetDeviceUUID(),
                deviceType: this.getDeviceType(),
                v_code: a
            };
            o.http.sendRequest(o.config.getStringData("WEB_BIND_SAFE_DEVICE", !0), r, n || this.responseBindSafeDevice.bind(this))
        }
        responseBindSafeDevice(e) {
            "0" === e.msg_code ? (o.MessageCenter.send("goToLoginAccount"), console.log("responseBindSafeDevice===》》")) : console.log("responseBindSafeDevice===》》fail")
        }
        requestMTTMatchListData(e, t) {
            let a = o.dataHandler.getUserData().getUserIdS(),
                n = o.config.getStringData("WEB_MTT_GET_MATCH_LIST_DATA", !0);
            n += "?Offset=" + e + "&Limit=" + t + "&ForeignId=" + a, console.log("[HttpHandler] {requestMTTMatchDetailData} url = " + n), o.http.sendRequestV2(n, {}, this._onResponseMTTListSucced.bind(this), this._onResponseMTTListFailed.bind(this), o.http.HttpRequestType.GET)
        }
        _onResponseMTTListSucced(e) {
            console.log("[HttpHandler] {_onResponseMTTListSucced} = " + e), o.MessageCenter.send("sendMttMatchListData", e.data || e)
        }
        _onResponseMTTListFailed(e) {
            console.log("[HttpHandler] {_onResponseMTTListFailed} = " + e)
        }
        requestMTTMatchDetailData(e) {
            let t = o.dataHandler.getUserData().getUserIdS(),
                a = o.config.getStringData("WEB_MTT_GET_MATCH_DEATAIL_DATA", !0);
            a += "?MttId=" + e + "&ForeignId=" + t, console.log("[HttpHandler] {requestMTTMatchDetailData} url = " + a), o.http.sendRequestV2(a, {}, this._onResponseMTTDetailSucced.bind(this), this._onResponseDetailListFailed.bind(this), o.http.HttpRequestType.GET)
        }
        _onResponseMTTDetailSucced(e) {
            console.log("[HttpHandler] {_onResponseMTTDetailSucced} = " + e), o.MessageCenter.send("responseMTTDataDetailSuccess", e.data || e)
        }
        _onResponseDetailListFailed(e) {
            console.log("[HttpHandler] {_onResponseMTTListFailed} = " + e)
        }
        requestMTTUserData() {
            let e = o.dataHandler.getUserData().getUserIdS(),
                t = o.config.getStringData("WEB_MTT_GET_USER_INFO_DATA", !0);
            t += "ForeignId=" + e, console.log("[HttpHandler] {requestMTTUserData} url = " + t), o.http.sendRequestV2(t, {}, this._onResponseMTTUserInfoSucced.bind(this), this._onResponseMTTUserInfoFailed.bind(this), o.http.HttpRequestType.GET)
        }
        _onResponseMTTUserInfoSucced(e) {
            console.log("[HttpHandler] {_onResponseMTTUserInfoSucced} = " + e), o.MessageCenter.send("ResponseMTTUserInfoData", e.data || e)
        }
        _onResponseMTTUserInfoFailed(e) {
            console.log("[HttpHandler] {_onResponseMTTUserInfoFailed} = " + e)
        }
        requestJackfruitGameRecord(e, t, a) {
            let n = {
                uid: e,
                game_uuid_js: t,
                gameid: a,
                token: o.dataHandler.getUserData().user_token
            };
            o.dataNet.RequestGetData(k.data.CMD.JF_GAME_HAND_REQ, n, this._onJackfruitGameRecord.bind(this), !0)
        }
        _onJackfruitGameRecord(e) {
            const t = e,
                a = t.game_uuid_js;
            o.JackfruitManager.tGameRecords.recordCaches.add(a, t), o.MessageCenter.send("update_jackfruit_record")
        }
        requestJackfruitGameUUID(e, t, a, n) {
            const r = {
                jfId: e,
                ante: t,
                recordTime: a,
                token: o.dataHandler.getUserData().user_token
            };
            o.dataNet.RequestGetData(k.data.CMD.JF_GAME_UUIDS_REQ, r, n, !1)
        }
        requestJFData(e, t, a = 3) {
            const n = o.dataHandler.getUserData().user_token,
                r = o.dataHandler.getUserData().u32Uid;
            if (null == n || null == n) return;
            const s = {
                owner: r,
                dataId: e,
                token: n,
                mode: a,
                ante: t
            };
            o.dataNet.RequestGetData(k.data.CMD.JF_DATA_REQ, s, this._onResponseJFData.bind(this), !0)
        }
        _onResponseJFData(e) {
            o.MessageCenter.send("JFPrivateInfo", e)
        }
        onGetHotUpdateUrl(e, t, a) {
            if ("HotUpdate" == e.update.type) {
                if (e.update.downloadUrl) {
                    let n = e.update.downloadUrl + e.update.version + "/";
                    s("hotUpdate Url: " + n), t(n, a)
                } else s("invalid url");
                return !1
            }
            return "BigRelease" == e.update.type && (o.dataHandler.getUserData().download_url = e.update.downloadUrl, !0)
        }
        requestHotupdateUrl(e, t, n, r = null) {
            return e += "?licenseType=" + o.appConfig.getGeneralConfig().bunderConfig.AppLicenseType, a.isMobile ? a.os === a.OS.IOS ? e += "&deviceType=Ios" : e += "&deviceType=Android" : a.os === a.OS.WINDOWS ? e += "&deviceType=Win32" : e += "&deviceType=OsX", e += "&appVersion=" + o.config.GET_CLIENT_VERSION(), s(" httpHandler request url sent: " + e + " requestObj: " + JSON.stringify(t)), o.http.sendRequestV2(e, t, n, r, o.http.HttpRequestType.GET, null, !1, !1, !1, null, !0)
        }
        getLegalDocsURL(e, t = -1) {
            let a = o.config.getStringData("WEB_API_USER_GET_LEGAL_DOC", !0);
            a = o.http.constructFullURL(a);
            const n = o.appConfig.getRegistrationConfig().legalDocsNamePrefix;
            return n && !e.startsWith(n) && (e = n + e), a += "?DocumentName=" + e, t >= 0 && (a += "&Version=" + t), a
        }
        onLoginSuccessCallback() {
            this.fetchUserReferralCode(), o.appConfig.getGeneralConfig().delayFetchUserData || this.fetchUserData(), this.sendAnalyticsForLoginSuccess()
        }
        sendAnalyticsForLoginSuccess() {
            o.dataHandler.getUserData().isTouristUser ? H.getInstance().sendEvent(o.Enum.CurrentScreen.visitorPopup, o.Enum.segmentEvent.UserLoggedIn, o.Enum.Functionality.registration, {
                isVisitor: !0
            }) : (H.getInstance().sendEvent(o.Enum.CurrentScreen.Login, o.Enum.segmentEvent.UserLoggedIn, o.Enum.Functionality.login), H.getInstance().identify({
                distinctId: o.dataHandler.getUserData().getUserIdS(!1).toString(),
                functionality: o.Enum.Functionality.registration,
                currentScreen: o.Enum.CurrentScreen.profile
            }))
        }
        fetchUserReferralCode() {
            if (!o.appConfig.getUserProfileConfig().showInviteFriends) return;
            let e = o.config.getStringData("GET_INVITE_FRIEND_REFERRALS_CODE_API", !0);
            o.http.sendRequestV2(e, null, this.onFetchReferralCodeSuccess.bind(this), null, o.http.HttpRequestType.GET)
        }
        onFetchReferralCodeSuccess(e) {
            o.dataHandler.getUserData().referralCode = e.code ?? "", o.dataHandler.getUserData().referralInviteLink = e.inviteLink ?? ""
        }
        fetchUserData() {
            let e = o.config.getStringData("WEB_API_GET_USER_INFO", !0);
            o.http.sendRequestV2(e, null, this.onFetchUserDataSuccess.bind(this), null, o.http.HttpRequestType.GET, o.http.HttpParseType.NONE, !1)
        }
        onFetchUserDataSuccess(e) {
            o.dataHandler.getUserData().email = e.email, e.email && "" != e.email ? C.getInstance().Login(e.email) : C.getInstance().Login(o.dataHandler.getUserData().getUserIdS().toString() + "/WPTO")
        }
    }
    e("HttpHandler", A), A.instence = void 0, t._RF.pop()
}