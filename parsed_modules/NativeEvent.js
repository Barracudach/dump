import * as t from "./cc.js";
import * as g from "./cc.js";
import * as S from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as d from "./cv.js";
import * as u from "./NativeEventCMD.js";
import * as v from "./NativeEventCMD.js";
import * as O from "./Tools.js";
import * as p from "./BranchSDKHandler.js";
import * as N from "./AppsflyerSDKHandler.js";
import * as E from "./WebSystemInfo.js";
import * as I from "./CrashTracing.js";
import * as f from "./env.js";
import * as h from "./MessageBroker.js";
import * as D from "./Base64Util.js";

function main() {
    let m, A;
    t._RF.push({}, "0707adAG3JAFJVTOl26x7ck", "NativeEvent", void 0);
    let T = !1,
        _ = null,
        C = null,
        M = null,
        y = null,
        b = null,
        R = !1;
    i.isNative && i.os == i.OS.IOS ? (m = "NativeEvent", A = "call_native:") : i.isNative && i.os == i.OS.ANDROID && (A = "call_native", m = "com/cocos/game/NativeEvent");
    class w {
        constructor() {
            this._supportWebPos = !1, this._positionInfo = null, this._latitude = 0, this._longitude = 0, this._cacheUUID = null, this.isSetConfigAppSize = !1, this.oldConditionChangeResolution = d.config.GET_CLIENT_TYPE() != d.Enum.ClientType.CowboyWeb && d.config.GET_CLIENT_TYPE() != d.Enum.ClientType.H5WebPage || 0 == d.config.IS_WEBVIEW
        }
        static getInstance() {
            return w.g_instance || (w.g_instance = new w, i.os == i.OS.IOS && w.g_instance.AuthLocation()), w.g_instance
        }
        callWebEvents(e, t) {
            let i = E.getInstance();
            return e == u.KEY_IS_NETWORK_AVAILABLE ? window.NativeStringReturnTrue : e == u.KEY_GET_DEVICE_INO ? JSON.stringify({
                disroot: !1,
                dmodel: i.getDeviceModel(),
                dname: i.getDeviceName(),
                duuid: "",
                dversion: i.getOsVersion()
            }) : ""
        }
        callSimulatorEvent(e, t) {
            if (e == u.KEY_IS_NETWORK_AVAILABLE) {
                if (d.tools.isCocosSimulator()) return window.NativeStringReturnTrue;
                if (i.isNative && i.os == i.OS.WINDOWS) {
                    if (!(n = o.cppbridge.sendMessage("NativeEvents", "isNetworkAvailable"))) return window.NativeStringReturnFalse
                } else if (i.isNative && i.os == i.OS.OSX) {
                    var n;
                    if (n = o.reflection.callStaticMethod("NativeEvents", "isNetworkAvailable:", "")) return n
                }
                return window.NativeStringReturnTrue
            }
            if (e == u.KEY_GET_LOCATION) return JSON.stringify({
                latitude: 77.7777,
                longitude: 77.7777
            });
            if (e == u.KEY_GET_SYS_LANGUAGE) return "en_US";
            if (e == u.KEY_GET_DEVICE_INO) {
                let e = this.getPCSystemInfo(),
                    t = e.length > 2 ? e[2] : "";
                return JSON.stringify({
                    disroot: !1,
                    dmodel: t,
                    dname: this.getPCName(),
                    duuid: "",
                    dversion: this.getPCOsVersion()
                })
            }
            return ""
        }
        getPCName() {
            try {
                if (i.isNative && i.os == i.OS.WINDOWS) return o.cppbridge.sendMessage("NativeEvents", "GetDeviceName");
                if (i.isNative && i.os == i.OS.OSX) {
                    var e = o.reflection.callStaticMethod("NativeUUID", "getDeviceName:", "");
                    if (e) return e
                }
                return "wefans"
            } catch (e) {
                return "wefans"
            }
        }
        getPCOsVersion() {
            try {
                if (i.isNative && i.os == i.OS.WINDOWS) return o.cppbridge.sendMessage("NativeEvents", "GetOSVersion");
                if (i.isNative && i.os == i.OS.OSX) {
                    var e = o.reflection.callStaticMethod("NativeUUID", "getOSVersion:", "");
                    if (e) return e
                }
                return ""
            } catch (e) {
                return ""
            }
        }
        getPCSystemInfo() {
            try {
                if (i.isNative && i.os == i.OS.WINDOWS) {
                    var e = o.cppbridge.sendMessage("NativeUUID", "getUUID");
                    let t = /\((.*?)\)/g;
                    return e.match(t).map((e => e.replace(/\(|\)/g, "")))
                }
                if (i.isNative && i.os == i.OS.OSX) {
                    e = o.reflection.callStaticMethod("NativeUUID", "getUUIDWithMacAndDeviceModel:", "");
                    let t = /\((.*?)\)/g;
                    return e.match(t).map((e => e.replace(/\(|\)/g, "")))
                }
                return []
            } catch (e) {
                return []
            }
        }
        callNativeEvent(e, t, n, a, s) {
            let r = {
                    param: JSON.stringify(a),
                    isSync: s ? 1 : 0,
                    respMsgKey: n,
                    object: e,
                    method: t
                },
                c = JSON.stringify(r),
                l = "";
            if (i.os == i.OS.IOS) l = o.reflection.callStaticMethod(m, A, c);
            else if (i.os == i.OS.ANDROID) {
                let e = "(Ljava/lang/String;)Ljava/lang/String;";
                l = o.reflection.callStaticMethod(m, A, e, c)
            }
            return l
        }
        invoke(e, t = {}, o) {
            let n = v.METHOD_MAP[e];
            if (!n) return console.log("Expection: cannot find nativeKey:" + e), "";
            e != u.KEY_IS_NETWORK_AVAILABLE && console.log("NativeEvent invoke event:", n.obj, n.method, n.respMsgKey);
            let a = n.obj,
                s = n.method,
                r = n.respMsgKey ? n.respMsgKey : "";
            return a && s ? !i.isNative || i.os != i.OS.ANDROID && i.os != i.OS.IOS ? d.appConfig.isWebApp ? this.callWebEvents(e, r) : this.callSimulatorEvent(e, r) : this.callNativeEvent(a, s, r, t, o) : (console.log("Expection: object or method is nil, nativeKey:" + e), "")
        }
        invokeSyncFunc(e, t = {}) {
            return this.invoke(e, t, !0)
        }
        invokeAsynFunc(e, t = {}) {
            return this.invoke(e, t, !1)
        }
        static OnNativeEventCallback(e) {
            e = decodeURIComponent(e);
            let t = JSON.parse(e);
            var i;
            t.respMsgKey && (null == d || null == (i = d.MessageCenter) || null == i.send || i.send(t.respMsgKey, t))
        }
        CheckNetWork() {
            return this.invokeSyncFunc(u.KEY_IS_NETWORK_AVAILABLE) == window.NativeStringReturnTrue
        }
        GetLocation(e = !1) {
            let t = null;
            var n;
            (i.isNative && !d.tools.isCocosSimulator() ? (i.os == i.OS.ANDROID || i.os == i.OS.IOS ? t = JSON.parse(this.invokeSyncFunc(u.KEY_GET_LOCATION)) : i.os == i.OS.OSX ? t = JSON.parse(o.reflection.callStaticMethod("NativeLocation", "getLocation")) : i.os == i.OS.WINDOWS && (t = JSON.parse(o.cppbridge.sendMessage("NativeLocation", "getLocation"))), t = {
                latitude: 0,
                longitude: 0
            }) : t = d.appConfig.getGeneralConfig().isWebApp && null != C ? JSON.parse(C) : JSON.parse(this._positionInfo), this.isLocationInvalid(t)) && (t = null == (n = d.geoComplyManager) ? void 0 : n.getGeoTokenLocation(), this.isLocationInvalid(t) && (t = d.appConfig.isPKW || e && d.appConfig.getModulesConfig().sharedPlayersPool ? {
                latitude: 1,
                longitude: 1
            } : {
                latitude: "",
                longitude: ""
            }));
            return t
        }
        isLocationInvalid(e) {
            return null == e || !("latitude" in e) || !("longitude" in e) || null == e.latitude || null == e.longitude || 0 == e.latitude && 0 == e.longitude
        }
        getMacAddress() {
            let e = "";
            if (i.isNative && (i.os == i.OS.ANDROID && (e = this.invokeSyncFunc(u.KEY_MAC_ADDRESS)), i.os == i.OS.WINDOWS || i.os == i.OS.OSX)) {
                let t = this.getPCSystemInfo();
                e = t.length > 1 ? t[1] : ""
            }
            return e
        }
        getDeviceAgent() {
            let e = "";
            return i.isBrowser && (e = window.navigator.userAgent), e
        }
        localIsZero() {
            let e = this.GetLocation();
            return !(0 != e.latitude && "" != e.latitude && null != e.latitude || 0 != e.longitude && "" != e.longitude && null != e.longitude)
        }
        async initWebLocation() {
            this._positionInfo || (this._positionInfo = JSON.stringify({
                latitude: 0,
                longitude: 0
            }), i.isBrowser && (d.appConfig.isWebApp || (navigator.geolocation ? await this.getWebAppLocation() : (this._supportWebPos = !1, console.log("Geolocation is not supported by this browser.")))))
        }
        async getWebAppLocation() {
            return new Promise((e => {
                navigator.permissions && navigator.permissions.query ? navigator.permissions.query({
                    name: "geolocation"
                }).then((t => {
                    "granted" === t.state || "prompt" === t.state ? navigator.geolocation.getCurrentPosition((t => {
                        this.brower_showPosition(t), e("success")
                    }), (t => {
                        this.brower_onError(t), e("error")
                    })) : (console.log("Permission error"), e(""))
                })).catch((t => {
                    console.error("Error checking geolocation permission: " + t.message), e("")
                })) : (console.log("Permission api not supportted"), e(""))
            }))
        }
        brower_showPosition(e) {
            this._supportWebPos = !0, n("#################### showPosition latitue: " + e.coords.latitude), n("#################### showPosition longitude: " + e.coords.longitude), this._positionInfo = JSON.stringify({
                latitude: e.coords.latitude,
                longitude: e.coords.longitude
            }), C = this._positionInfo
        }
        brower_onError(e) {
            switch (e.code) {
                case 1:
                    console.log("Location services denied");
                    break;
                case 2:
                    console.log("Unable to obtain location information temporarily");
                    break;
                case 3:
                    console.log("Timeout for getting information");
                    break;
                case 4:
                    console.log("unknown mistake")
            }
            this._supportWebPos = !1
        }
        GetDeviceUUID(e = !1, t = !1) {
            let n = "";
            if (this._cacheUUID ? n = this._cacheUUID : (n = !i.isNative || i.isBrowser || d.tools.isCocosSimulator() ? this._getWebDeviceUUID() : i.os == i.OS.ANDROID || i.os == i.OS.IOS ? this.invokeSyncFunc(u.KEY_GET_DEVICE_UUID) : i.os == i.OS.OSX ? o.reflection.callStaticMethod("NativeUUID", "getUUID") : i.os == i.OS.WINDOWS ? o.cppbridge.sendMessage("NativeUUID", "getUUID") : this._getWebDeviceUUID(), this._cacheUUID = n), !0 !== t && (n = d.md5.md5(n)), !e) return n;
            let a = null;
            if (d.appConfig.getGeneralConfig().isWebApp) return a = i.os == i.OS.ANDROID ? {
                dmodel: "android",
                duuid: n
            } : i.os == i.OS.IOS ? {
                dmodel: "iPhone",
                duuid: n
            } : {
                dmodel: "otherDevice",
                duuid: n
            }, JSON.stringify(a);
            a = this.GenerateDeviceInfo();
            let s = null;
            try {
                s = JSON.parse(a)
            } catch (e) {
                s = {
                    disroot: !1,
                    dmodel: "",
                    dname: "wefans",
                    duuid: "",
                    dversion: ""
                }
            }
            return console.log("Before replacing uuid info::" + a), s.duuid = n, console.log("After replacing uuid DeviceInfo ::" + JSON.stringify(s)), JSON.stringify(s)
        }
        _getWebDeviceUUID() {
            let e = "00000000-0000-0000-0000-000000000000";
            if (_) e = _;
            else try {
                let t = i.localStorage.getItem("_WebUUID");
                t || (t = d.tools.getRandomUUID(), i.localStorage.setItem("_WebUUID", t)), e = t
            } catch (e) {
                a("Unable to generate UUID!", e)
            }
            return e
        }
        GetCurrentBatteryLevel() {
            return parseInt(this.invokeSyncFunc(u.KEY_GET_CURRENT_BATTERY_LEVEL))
        }
        getSystemVolume() {
            return this.invokeSyncFunc(u.KEY_GET_SYSTEM_VOLUME)
        }
        GenerateDeviceInfo() {
            let e = this.invokeSyncFunc(u.KEY_GET_DEVICE_INO);
            try {
                JSON.parse(e)
            } catch (e) {
                return "{}"
            }
            return e
        }
        JumpToUpdateSite(e) {
            i.isMobile ? this.invokeSyncFunc(u.KEY_JUMP_TO_UPDATE_SITE, {
                url: e
            }) : i.openURL(e)
        }
        stringContainsEmoji(e) {
            return this.invokeSyncFunc(u.KEY_IS_CONTAINS_EMOJI, {
                content: e
            }) == window.NativeStringReturnTrue
        }
        AnalysisCountEvent(e, t) {}
        IsSimulator() {
            return !d.dataHandler.getUserData().isallowsimulator && this.judgeSimulator()
        }
        closeAllWebViewWindows() {
            O.isCocosSimulator() || (i.isNative && i.os == i.OS.WINDOWS && o.cppbridge.sendMessage("NativeEvents", "onLogOut"), i.isNative && i.os === i.OS.OSX && o.reflection.callStaticMethod("WebviewMonitorMac", "closeAll:", ""))
        }
        judgeSimulator() {
            if (i.isNative) {
                if (i.os == i.OS.ANDROID) {
                    let e = o.reflection.callStaticMethod("com.cocos.game.AppActivity", "emulatorCheck", "()I");
                    return console.log("IsSimulator ret=" + e), 1 == e
                }
                if (i.os == i.OS.IOS) return "true" == this.invokeSyncFunc(u.KEY_IS_SIMULATOR)
            } else if (d.config.GET_CLIENT_TYPE() == d.Enum.ClientType.H5WebPage) return T;
            return d.appConfig.getGeneralConfig().identifiesAsSimulator
        }
        showSimulatorTips(e, t) {
            if (i.isBrowser && d.config.GET_CLIENT_TYPE() != d.Enum.ClientType.H5WebPage) return !1;
            let o = d.native.IsSimulator();
            return !!(o || d.dataHandler.getUserData().isallowsimulator || d.appConfig.getModulesConfig().sharedPlayersPool) && (!!o && (e > 0 ? d.TT.showMsg(d.StringTools.formatC(d.config.getStringData("UIEmulatorErrorText_1"), e), d.Enum.ToastType.ToastTypeWarning) : d.TT.showMsg(d.config.getStringData("UIEmulatorErrorText"), d.Enum.ToastType.ToastTypeWarning), !0))
        }
        IsPad() {
            return !i.isNative || i.os != i.OS.ANDROID && i.os != i.OS.IOS ? d.config.GET_CLIENT_TYPE() == d.Enum.ClientType.H5WebPage && i.os == i.OS.IOS && R : "true" == this.invokeSyncFunc(u.KEY_IS_PAD)
        }
        isFullScreen() {
            return d.config.IS_FULLSCREEN
        }
        isWideScreen() {
            return !!this.IsPad() || d.config.IS_WIDESCREEN
        }
        calsld() {}
        getClipBoardString() {
            let e = "";
            if (i.isNative) e = d.native.invokeSyncFunc(u.KEY_GET_PASTEBOARD_STRING);
            else if (i.isBrowser && d.config.GET_CLIENT_TYPE() == d.Enum.ClientType.H5WebPage) e = d.native.SYgetClipboardContent();
            else {
                let t = t => {
                    e = t.clipboardData.getData("text/plain"), t.preventDefault()
                };
                document.addEventListener("paste", t), document.execCommand("paste"), document.removeEventListener("paste", t)
            }
            return e
        }
        setClipBoardString(e) {
            if (e = d.String(e), i.isNative) d.native.invokeSyncFunc(u.KEY_SET_PASTEBOARDSTRING, {
                text: e
            });
            else if (i.isBrowser && d.config.GET_CLIENT_TYPE() == d.Enum.ClientType.H5WebPage) {
                let t = '{"cmd": "1013", "op": 1, "content": "%s"}';
                t = d.StringTools.formatC(t, e), d.native.SYwebjsToClient(t)
            } else if (i.isBrowser) {
                let t = t => {
                    t.clipboardData.setData("text/plain", e), t.preventDefault()
                };
                document.addEventListener("copy", t), document.execCommand("copy"), document.removeEventListener("copy", t)
            }
        }
        setAutoRotate(e = !0) {
            w.triggerAutoRotate(e)
        }
        setPortrait(e, t = !0, n = !0, a) {
            const S = d.config.getCurrentSceneEnum() === d.Enum.SCENE.HOTUPDATE_SCENE;
            if (d.config.HEIGHT > d.config.WIDTH && (!i.isBrowser || !i.isMobile) && !S) return;
            if (S && this.isSetConfigAppSize) return;
            if (i.isNative && i.os === i.OS.ANDROID) t && o.reflection.callStaticMethod("com/cocos/game/AppActivity", "changeOrientation", "(I)V", 1), s.setOrientation(r.ORIENTATION_PORTRAIT);
            else if (i.isNative && i.os === i.OS.IOS) t && d.native.invokeAsynFunc(u.KEY_CALL_CHANGEORIENTATION, {
                bool: "0"
            }), s.setOrientation(r.ORIENTATION_PORTRAIT);
            else if (this.IsSimulator() && d.config.GET_CLIENT_TYPE() == d.Enum.ClientType.H5WebPage && d.native.SYwebjsToClient('{"cmd": "1005", op:0}'), d.appConfig.isWebApp && f && (c.enabledCssRotate = !(null != a && a.disableCssRotation)), s.setOrientation(r.ORIENTATION_PORTRAIT), i.isMobile && d.config.GET_CLIENT_TYPE() != d.Enum.ClientType.CowboyWeb && d.config.GET_CLIENT_TYPE() != d.Enum.ClientType.H5WebPage) return;
            if (e) return;
            if (this.oldConditionChangeResolution && !d.appConfig.isWebApp) {
                let e = c.windowSize.height > c.windowSize.width ? c.windowSize.width : c.windowSize.height,
                    t = c.windowSize.height < c.windowSize.width ? c.windowSize.width : c.windowSize.height;
                s.setFrameSize(e, t), s.setDesignResolutionSize(d.config.DESIGN_WIDTH, d.config.DESIGN_HEIGHT, l.FIXED_HEIGHT)
            }
            let g = d.config.DESIGN_HEIGHT;
            n && (d.config.DESIGN_HEIGHT = d.config.DESIGN_WIDTH, d.config.DESIGN_WIDTH = g), S && d.config.HEIGHT > d.config.WIDTH ? this.isSetConfigAppSize = !0 : (S && (this.isSetConfigAppSize = !0), g = d.config.HEIGHT, d.config.HEIGHT = d.config.WIDTH, d.config.WIDTH = g)
        }
        resetToPortrait(e) {
            if (d.config.HEIGHT > d.config.WIDTH && (!i.isBrowser || !i.isMobile) && d.config.getCurrentScene() != d.Enum.SCENE.HOTUPDATE_SCENE) return;
            let t = d.config.DESIGN_HEIGHT;
            d.config.DESIGN_WIDTH > d.config.DESIGN_HEIGHT && (d.config.DESIGN_HEIGHT = d.config.DESIGN_WIDTH, d.config.DESIGN_WIDTH = t), this.setPortrait(!1, e)
        }
        setLandscape(e = !0) {
            if (d.config.WIDTH > d.config.HEIGHT && (!i.isBrowser || !i.isMobile)) return;
            if (i.isNative && i.os === i.OS.ANDROID) e && o.reflection.callStaticMethod("com/cocos/game/AppActivity", "changeOrientation", "(I)V", 0), s.setOrientation(r.ORIENTATION_LANDSCAPE);
            else if (i.isNative && i.os === i.OS.IOS) e && d.native.invokeAsynFunc(u.KEY_CALL_CHANGEORIENTATION, {
                bool: "1"
            }), s.setOrientation(r.ORIENTATION_LANDSCAPE);
            else if (d.native.IsSimulator() && d.config.GET_CLIENT_TYPE() == d.Enum.ClientType.H5WebPage && d.native.SYwebjsToClient('{"cmd": "1005", op: 1}'), d.appConfig.isWebApp && f && (c.enabledCssRotate = !0), s.setOrientation(r.ORIENTATION_LANDSCAPE), i.isMobile && d.config.GET_CLIENT_TYPE() != d.Enum.ClientType.CowboyWeb && d.config.GET_CLIENT_TYPE() != d.Enum.ClientType.H5WebPage) return;
            if (this.oldConditionChangeResolution && !d.appConfig.isWebApp) {
                let e = c.windowSize.height < c.windowSize.width ? c.windowSize.width : c.windowSize.height,
                    t = c.windowSize.height > c.windowSize.width ? c.windowSize.width : c.windowSize.height;
                s.setFrameSize(e, t), s.setDesignResolutionSize(d.config.DESIGN_HEIGHT, d.config.DESIGN_WIDTH, l.FIXED_WIDTH)
            }
            let t = d.config.DESIGN_HEIGHT;
            d.config.DESIGN_HEIGHT = d.config.DESIGN_WIDTH, d.config.DESIGN_WIDTH = t, t = d.config.HEIGHT, d.config.HEIGHT = d.config.WIDTH, d.config.WIDTH = t
        }
        isScreenLandscape() {
            let e = s.getVisibleSize();
            return e.width > e.height
        }
        DoStartRecord() {
            let e = !0;
            if (i.isNative && i.os === i.OS.ANDROID) e = o.reflection.callStaticMethod("com/cocos/game/AppActivity", "DoRecord", "(I)Z", 0);
            else if (i.isNative && i.os === i.OS.IOS) {
                let e = this.invokeSyncFunc(u.KEY_RECORD_START_RECORD);
                console.log("DoStartRecord  ios================ret:" + e)
            }
            return e
        }
        AuthMicphone() {
            i.isNative && i.os === i.OS.IOS && this.invokeSyncFunc(u.KEY_CALL_AUTH_MICPHONE)
        }
        keepScreenOn() {
            i.isNative && i.os === i.OS.IOS && this.invokeSyncFunc(u.KEY_CALL_SCREEN_LIGHTING)
        }
        DoStopRecord() {
            if (i.isNative && i.os === i.OS.ANDROID) o.reflection.callStaticMethod("com/cocos/game/AppActivity", "StopRecord", "(I)V", 0);
            else if (i.isNative && i.os === i.OS.IOS) {
                this.invokeSyncFunc(u.KEY_RECORD_STOP_RECORD)
            }
            return !0
        }
        playLocalVoice() {
            i.isNative && i.os === i.OS.IOS && this.invokeSyncFunc(u.KEY_RECORD_PLAY_LOCALFILE)
        }
        playRecordByUrl(e) {
            i.isNative && i.os === i.OS.IOS && this.invokeSyncFunc(u.KEY_RECORD_PLAY_RECORD, {
                fileUrl: e
            })
        }
        PlayRoomVoice(e) {
            if (i.isNative && i.os === i.OS.IOS) {
                if (!e.kUrl) return;
                this.invokeSyncFunc(u.KEY_RECORD_PLAY_ROOMFILE, {
                    kUrl: e.kUrl,
                    kSender: e.kSender,
                    u32SeatId: e.u32SeatId
                })
            }
        }
        StopPlay() {
            i.isNative && i.os === i.OS.IOS && this.invokeSyncFunc(u.KEY_RECORD_STOP_PLAY)
        }
        HaveGps(e = !0) {
            return !!d.dataHandler.getUserData().isallowsimulator || (!!d.tools.isCocosSimulator() || (i.isNative && i.os === i.OS.ANDROID ? "true" == this.invokeSyncFunc(u.KEY_HAVE_GPS, {
                showTP: e
            }) : i.isNative && i.os === i.OS.IOS ? "true" == this.invokeSyncFunc(u.KEY_IS_HAVE_GPS) : i.isNative && i.os == i.OS.OSX ? "true" == o.reflection.callStaticMethod("NativeLocation", "haveGPS") : i.isNative && i.os == i.OS.WINDOWS ? "true" == o.cppbridge.sendMessage("NativeLocation", "haveGPS") : d.appConfig.getGeneralConfig().isWebApp ? null != C : i.os == i.OS.OSX || i.os == i.OS.WINDOWS))
        }
        AuthLocation() {
            this.invokeSyncFunc(u.KEY_IS_AUTHLOCATION)
        }
        getDeviceModel() {
            return i.os === i.OS.IOS ? this.invokeSyncFunc(u.KEY_GETDEVICEMODEL) : JSON.parse(d.native.GenerateDeviceInfo()).dmodel ?? ""
        }
        getDeviceName() {
            return JSON.parse(d.native.GenerateDeviceInfo()).dname ?? ""
        }
        SetWriteblePath(e) {
            if (i.isNative) return i.os === i.OS.ANDROID ? o.reflection.callStaticMethod("com/cocos/game/AppActivity", "SetWriteblePath", "(Ljava/lang/String;)V", e) : (i.os, i.OS.IOS), !0
        }
        writeToFileForAndroid(e, t) {
            i.os == i.OS.ANDROID && i.isNative ? (t = window.btoa(t), o.reflection.callStaticMethod("com/cocos/game/AppActivity", "writeToFile", "(Ljava/lang/String;Ljava/lang/String;)V", e, t)) : console.log("-----------------------\x3e writeToFileForAndroid failed")
        }
        readFileForAndroid(e) {
            let t = "";
            return i.os == i.OS.ANDROID && i.isNative ? (t = o.reflection.callStaticMethod("com/cocos/game/AppActivity", "readFile", "(Ljava/lang/String;)Ljava/lang/String;", e), t = window.atob(t)) : console.log("-----------------------\x3e readFileForAndroid failed"), t
        }
        Vibrate() {
            if (i.isNative) i.os === i.OS.IOS ? this.invokeSyncFunc(u.KEY_VIBRATE) : i.os == i.OS.ANDROID && o.reflection.callStaticMethod("com/cocos/game/AppActivity", "getVibrate", "()V");
            else if (d.appConfig.isWebApp) h.getInstance().sendVibrate(300);
            else if (d.config.GET_CLIENT_TYPE() == d.Enum.ClientType.H5WebPage) {
                let e = '{"cmd": "1003"}';
                this.SYwebjsToClient(e)
            }
        }
        getSystemVersion() {
            let e = "";
            if (i.isNative && i.os === i.OS.ANDROID) try {
                e = o.reflection.callStaticMethod("com/cocos/game/AppActivity", "getVersion", "()Ljava/lang/String;")
            } catch (e) {
                var t;
                null == (t = I.getInstance()) || t.traceJSException("getSystemVersion", e.message + "-" + e.toString(), e.stack, !0)
            } else i.isNative && i.os === i.OS.IOS ? e = this.invokeSyncFunc(u.KEY_GET_DEVICE_SYSTEM_VERSION) : i.isNative && i.os === i.OS.WINDOWS && (e = this.getPCOsVersion());
            return e
        }
        getNativeError() {
            let e = "";
            return i.isNative && i.os === i.OS.ANDROID ? e = o.reflection.callStaticMethod("com/cocos/game/AppActivity", "readFile", "(Ljava/lang/String;)Ljava/lang/String;", "myCrashLog.txt") : i.isNative && i.os === i.OS.IOS && (e = this.invokeSyncFunc(u.KEY_ERROR_DATA)), console.log("getNativeError:" + e), e
        }
        clearNativeError() {
            let e = "";
            return i.isNative && i.os === i.OS.ANDROID ? e = o.reflection.callStaticMethod("com/cocos/game/AppActivity", "writeToFile", "(Ljava/lang/String;Ljava/lang/String;)V", "myCrashLog.txt", "") : i.isNative && i.os === i.OS.IOS && (e = this.invokeSyncFunc(u.KEY_ERROR_DATA)), console.log("clearNativeError:" + e), e
        }
        setScreenCaptureAllowed(e) {
            i.isNative && (i.os === i.OS.ANDROID ? o.reflection.callStaticMethod("com/cocos/game/AppActivity", "setScreenCaptureAllowed", "(Z)V", e) : (i.os, i.OS.IOS))
        }
        getNotchStatus() {
            let e = 0;
            return i.isNative && i.os === i.OS.ANDROID && (e = o.reflection.callStaticMethod("com/cocos/game/AppActivity", "getNotchStatus", "()I")), e
        }
        openUrl(e) {
            if (e)
                if (e = (e = (e = e.replace("http//", "http://")).replace("https//", "https://")).trim().replace(/^"|"$/g, ""), i.isNative)
                    if (i.os === i.OS.ANDROID) try {
                            o.reflection.callStaticMethod("com.cocos.game.AppActivity", "openUrl", "(Ljava/lang/String;)V", e)
                        } catch (e) {
                            var t;
                            null == (t = I.getInstance()) || t.traceJSException("openUrl", e.message + "-" + e.toString(), e.stack, !0)
                        } else if (i.os === i.OS.IOS) try {
                            this.invokeAsynFunc(u.KEY_CALL_OPEN_URL, {
                                url: e
                            })
                        } catch (e) {
                            var n;
                            null == (n = I.getInstance()) || n.traceJSException("invokeAsynFunc::NATIVE_KEY_MAP.KEY_CALL_OPEN_URL", e.message + "-" + e.toString(), e.stack, !0)
                        } else i.openURL(e);
                        else i.openURL(e)
        }
        openImagePicker() {
            i.isNative ? i.os == i.OS.IOS ? d.native.invokeAsynFunc(u.KEY_OPEN_PHOTO) : i.os == i.OS.ANDROID ? o.reflection.callStaticMethod("com/cocos/game/ImagePicker", "openPhoto", "()V") : i.os == i.OS.OSX ? o.reflection.callStaticMethod("ImagePicker", "selectLocalImage") : i.os == i.OS.WINDOWS && o.cppbridge.sendMessage("ImagePicker", "selectLocalImage") : i.isBrowser && S("Image Picker not supported in Browser!")
        }
        copyToClipboard(e) {
            if (i.isNative) i.os == i.OS.WINDOWS ? o.cppbridge.sendMessage("NativeEvents", "copyToClipboard", e) : i.os == i.OS.OSX ? o.reflection.callStaticMethod("NativeEvents", "copyToClipboard:", e) : a("Copy to clipboard `" + e + "` is not currently supported in `" + i.os + "` platform!");
            else if (i.isBrowser) {
                const t = document.createElement("textarea");
                t.value = e, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t)
            }
        }
        saveImage(e, t = "", n = !0) {
            let a = n ? "saveImageFromBase64" : "saveImageFromUrl";
            const s = n ? e.replace(/^data:image\/\w+;base64,/, "") : e,
                r = {
                    data: s,
                    fileName: t
                },
                c = D.getInstance().encode(JSON.stringify(r));
            let l = !1;
            if (i.isNative) {
                const e = "";
                i.os == i.OS.WINDOWS ? e = o.cppbridge.sendMessage("NativeEvents", a, c) : i.os == i.OS.ANDROID ? e = o.reflection.callStaticMethod("com/cocos/game/NativeEvent", a, "(Ljava/lang/String;Ljava/lang/String;)V", s, t) : i.os == i.OS.IOS ? (e = this.invokeAsynFunc(n ? u.KEY_SAVE_IMAGE_FROM_BASE64 : u.KEY_SAVE_IMAGE_FROM_URL, r), e = "true") : i.os == i.OS.OSX && (e = o.reflection.callStaticMethod("NativeEvents", a + ":", c)), l = "true" === e
            }
            return l
        }
        shareImageSNS(e) {
            const t = e.replace(/^data:image\/\w+;base64,/, "");
            i.isNative && (i.os == i.OS.WINDOWS ? o.cppbridge.sendMessage("NativeEvents", "shareImage", t) : i.os == i.OS.OSX ? o.reflection.callStaticMethod("NativeEvents", "shareImage:", t) : i.os == i.OS.ANDROID ? o.reflection.callStaticMethod("com/cocos/game/NativeEvent", "shareImage", "(Ljava/lang/String;)V", t) : i.os == i.OS.IOS && this.invokeAsynFunc(u.KEY_SHARE_IMAGE, {
                data: t
            }))
        }
        getTextFromClipboard() {
            if (i.isNative) {
                if (i.os == i.OS.WINDOWS) return o.cppbridge.sendMessage("NativeEvents", "getTextFromClipboard");
                if (i.os == i.OS.OSX) return o.reflection.callStaticMethod("NativeEvents", "getTextFromClipboard");
                a("Get text from clipboard is not currently supported in `" + i.os + "` platform!")
            }
        }
        SYgetBatteryLevel() {
            return M
        }
        SYgetSysLanguage() {
            return y
        }
        SYgetClipboardContent() {
            return b
        }
        SYwebjsToClient(e) {
            !i.isBrowser || i.os != i.OS.ANDROID && i.os != i.OS.IOS || console.log("#################### SYwebjsToClient cmd:" + e)
        }
        SYwebCloseChildWebview() {
            d.config.GET_CLIENT_TYPE() == d.Enum.ClientType.H5WebPage && this.SYwebjsToClient('{"cmd": "1006", "op":0}')
        }
        static SYwebClientToJs(e) {
            if (console.log("#################### SYwebClientToJs callBack:" + e), null == e) return void console.log("SYwebClientToJs return data is null.");
            e = (e = e.replace(/\n/g, "")).replace(/\r/g, "");
            let t = JSON.parse(e),
                i = t.cmd,
                o = t.op;
            switch (i) {
                case "1001":
                    _ = t.device_id;
                    break;
                case "1002": {
                    let e = t.lat,
                        i = t.lng;
                    C = 0 == e || 0 == i ? null : JSON.stringify({
                        latitude: e,
                        longitude: i
                    })
                }
                break;
                case "1003":
                    break;
                case "1004": {
                    let e = t.is_android_emulator;
                    0 == e ? T = !1 : 1 == e && (T = !0)
                }
                break;
                case "1005":
                case "1006":
                    break;
                case "1007":
                    0 == o ? d.MessageCenter.send("SYStartRecord", t) : 1 == o ? d.MessageCenter.send("SYStopRecord", t) : 2 == o && d.MessageCenter.send("SYCancelRecord", t);
                    break;
                case "1008":
                    0 == t.ret ? d.TT.showMsg(d.config.getStringData("ClubSpreadTips0"), d.Enum.ToastType.ToastTypeInfo) : d.TT.showMsg(d.config.getStringData("ClubSpreadTips1"), d.Enum.ToastType.ToastTypeInfo);
                    break;
                case "1009":
                    0 == o ? (d.MessageCenter.send("on_syOnEnterBackground"), d.netWorkManager.OnAppEnterBackground()) : 1 == o && (d.MessageCenter.send("on_syOnEnterForeground"), d.netWorkManager.OnAppEnterForeground());
                    break;
                case "1010":
                    let e = t.battery,
                        i = t.is_charging;
                    M = JSON.stringify({
                        battery: e,
                        is_charging: i
                    });
                    break;
                case "1011":
                    y = t.language_code;
                    break;
                case "1013":
                    b = t.content;
                    break;
                case "1014":
                    R = 1 == t.is_ipad;
                    break;
                case "1015":
                    let n = t.url;
                    null != n && d.MessageCenter.send("on_syCcjsCallback", n)
            }
        }
        static webCcjsCallback(e) {
            i.isBrowser && null != d && null != d.MessageCenter && d.MessageCenter.send("on_webCcjsCallback", e.data)
        }
        setEditBoxPosYRatio(e) {
            i.isNative && (i.os === i.OS.ANDROID ? o.reflection.callStaticMethod("com/cocos/game/AppActivity", "setEditBoxPosYRatio", "(I)V", e) : i.os === i.OS.IOS && this.invokeSyncFunc(u.KEY_EDIT_BOX_POS, {
                content: e
            }))
        }
        static checkAutoUpdate(e) {
            i.isNative && (i.os === i.OS.WINDOWS ? o.cppbridge.sendMessage("NativeEvents", "checkAutoUpdate", e) : i.os === i.OS.OSX ? o.reflection.callStaticMethod("SparkleSDKMac", "checkUpdates:", e) : i.os === i.OS.ANDROID && o.reflection.callStaticMethod("com/cocos/game/AutoUpdateManager", "checkUpdate", "(Ljava/lang/String;)V", e))
        }
        static updatePackageDomain(e) {
            i.isNative && (i.os === i.OS.WINDOWS || (i.os === i.OS.OSX ? o.reflection.callStaticMethod("SparkleSDKMac", "updatePackageDomain:", e) : (i.os, i.OS.ANDROID)))
        }
        static reopenTheApp() {
            i.isNative && i.os === i.OS.WINDOWS && o.cppbridge.sendMessage("NativeEvents", "reopenTheApp")
        }
        static onAutoUpdateMessage(e, t) {
            console.log(`NativeEvent.onAutoUpdate: ${e}, ${t}`), d.MessageCenter.send(e, t)
        }
        initFreshchatSDK(e) {
            i.os === i.OS.ANDROID ? o.reflection.callStaticMethod("com/cocos/game/AppActivity", "initFreshchatSDK", "(Ljava/lang/String;)V", JSON.stringify(e)) : i.os === i.OS.IOS && this.invokeSyncFunc(u.KEY_INIT_FRESHCHAT_IOS, e)
        }
        notifyNativeOnEnableCashier(e) {
            i.os === i.OS.ANDROID ? e ? o.reflection.callStaticMethod("com/cocos/game/FreshchatManager", "onEnableCashier", "()V") : o.reflection.callStaticMethod("com/cocos/game/FreshchatManager", "onDisableCashier", "()V") : i.os === i.OS.IOS && (e ? this.invokeSyncFunc(u.KEY_ON_CASHIER_ENABLE_IOS) : this.invokeSyncFunc(u.KEY_ON_CASHIER_DISABLE_IOS))
        }
        setMobileStatusBar(e) {
            i.isNative && i.os === i.OS.IOS && this.invokeSyncFunc(u.KEY_SET_STATUS_BAR, {
                enabled: e
            })
        }
        static resetPendingDeeplinkFunction() {
            i.isNative && (i.os !== i.OS.WINDOWS ? i.os !== i.OS.ANDROID || o.reflection.callStaticMethod("com/cocos/game/AppsflyerSDK", "resetDeeplink", "()V") : o.cppbridge.sendMessage("BranchSDK", "resetDeeplink"))
        }
        static checkPendingDeeplinkFunction() {
            i.isNative && (i.os !== i.OS.WINDOWS ? i.os !== i.OS.ANDROID || o.reflection.callStaticMethod("com/cocos/game/AppsflyerSDK", "checkPendingDeeplinkFunction", "()Z") : o.cppbridge.sendMessage("BranchSDK", "checkPendingDeeplinkFunction"))
        }
        static setReceiveAttributionDataReady() {
            i.isNative && (i.os !== i.OS.WINDOWS ? i.os !== i.OS.ANDROID ? i.os !== i.OS.IOS ? i.os !== i.OS.OSX || o.reflection.callStaticMethod("NativeEvents", "setReceiveAttributionDataReady:", "TRUE") : o.reflection.callStaticMethod("NativeEvent", "setReceiveAttributionDataReady:", "TRUE") : o.reflection.callStaticMethod("com/cocos/game/NativeEvent", "setReceiveAttributionDataReady", "(Z)V", !0) : o.cppbridge.sendMessage("NativeEvents", "setReceiveAttributionDataReady", !0))
        }
        static notifyDeeplinkHandlerIsReady() {
            i.isNative && (i.os !== i.OS.WINDOWS ? i.os !== i.OS.ANDROID ? i.os !== i.OS.IOS ? i.os !== i.OS.OSX || o.reflection.callStaticMethod("BranchSDKMac", "BranchSDKSetDeeplinkHandlerReady:", "TRUE") : o.reflection.callStaticMethod("AppsflyerSDK", "AppsflyerSDKSetDeeplinkHandlerReady:", "TRUE") : o.reflection.callStaticMethod("com/cocos/game/AppsflyerSDK", "setDeeplinkHandlerReady", "(Z)V", !0) : o.cppbridge.sendMessage("BranchSDK", "setDeeplinkHandlerReady", !0))
        }
        getAdvertisingId(e = !0) {
            if (!i.isNative) return "";
            if (i.os === i.OS.ANDROID) return o.reflection.callStaticMethod("com/cocos/game/NativeEvent", "getAdvertisingId", "()Ljava/lang/String;");
            if (i.os === i.OS.IOS) {
                let t = N.getInstance().AppsflyerAdvertisingDataString();
                if (e) return t ?? "";
                let i = (t ?? "").split("||");
                return i[0] ?? i[1] ?? ""
            }
            return i.os == i.OS.OSX ? p.getInstance().BranchSDKAdvertisingDataString() : i.os == i.OS.WINDOWS ? o.cppbridge.sendMessage("NativeEvents", "getAdvertisingId") : ""
        }
        static showMainWindow() {
            i.isNative && (i.os !== i.OS.WINDOWS ? i.os !== i.OS.OSX || o.reflection.callStaticMethod("NativeEvents", "showMainWindow") : o.cppbridge.sendMessage("NativeEvents", "showMainWindow"))
        }
        static getGPUList() {
            if (!i.isNative) return "";
            if (i.os === i.OS.WINDOWS) {
                if ("" === w.gpuList) {
                    let e = o.fileUtils.getWritablePath() + "gpu-list";
                    o.fileUtils.isFileExist(e) && (w.gpuList = o.fileUtils.getStringFromFile(e))
                }
                return w.gpuList
            }
            return ""
        }
        static hardRestart() {
            i.isNative ? i.os != i.OS.WINDOWS ? i.os === i.OS.ANDROID ? o.reflection.callStaticMethod("com/cocos/game/NativeEvent", "hardRestart", "()V") : i.os == i.OS.OSX ? setTimeout((() => {
                g.restart()
            }), 1e3) : g.restart() : w.reopenTheApp() : g.restart()
        }
        static onNativeEventMessage(e, t) {
            if (console.log(`NativeEvent.onNativeEventMessage: ${e}, ${t}`), null != d && null != d.MessageCenter && d.MessageCenter.send instanceof Function) try {
                d.MessageCenter.send(e, t)
            } catch (e) {
                var i;
                null == (i = I.getInstance()) || i.traceJSException("onNativeEventMessage", e.message + "-" + e.toString(), e.stack, !0)
            }
        }
        static triggerAutoRotate(e) {
            i.isNative && (i.os === i.OS.IOS ? o.reflection.callStaticMethod("NativeEvent", "triggerAutoRotate:", e.toString()) : i.os === i.OS.ANDROID && o.reflection.callStaticMethod("com/cocos/game/NativeEvent", "triggerAutoRotate", "(Z)V", e))
        }
        static registerOrientationChangedEvent() {
            i.isNative && (i.os === i.OS.IOS ? o.reflection.callStaticMethod("NativeEvent", "registerOrientationChangedEvent:", "") : i.os === i.OS.ANDROID && o.reflection.callStaticMethod("com/cocos/game/NativeEvent", "registerOrientationChangedEvent", "()V"))
        }
        static clearWebViewBrowsingData(e) {
            i.isNative && (i.os === i.OS.IOS ? o.reflection.callStaticMethod("NativeEvent", "deleteWebData:", e) : i.os === i.OS.ANDROID && o.reflection.callStaticMethod("com/cocos/game/NativeEvent", "deleteWebData", "()V"))
        }
        static changeWebviewBGColor(e) {
            i.isNative && i.os === i.OS.ANDROID && o.reflection.callStaticMethod("com/cocos/game/NativeEvent", "setWebviewBGColor", "(Ljava/lang/String;)V", e)
        }
        getTotalMemory() {
            if (i.isNative && i.os === i.OS.WINDOWS) return o.cppbridge.sendMessage("PerformanceReporter", "getTotalMemory");
            if (i.isNative && i.os === i.OS.OSX) return o.reflection.callStaticMethod("PerformanceReporterMac", "getTotalMemory:", "");
            if (i.isNative && i.os === i.OS.ANDROID) {
                return o.reflection.callStaticMethod("com/cocos/game/PerformanceReport", "getTotalMemory", "()I") / 1024
            }
            return i.isNative && i.os === i.OS.IOS ? o.reflection.callStaticMethod("PerformanceReporterIOS", "getTotalMemory") : (d.appConfig.isWebApp, 0)
        }
        getTotalAvailableMemory() {
            if (i.isNative && i.os === i.OS.WINDOWS) return o.cppbridge.sendMessage("PerformanceReporter", "getTotalAvailableMemory");
            if (i.isNative && i.os === i.OS.OSX) return o.reflection.callStaticMethod("PerformanceReporterMac", "getTotalAvailableMemory:", "");
            if (i.isNative && i.os === i.OS.ANDROID) {
                return o.reflection.callStaticMethod("com/cocos/game/PerformanceReport", "getTotalAvailableMemory", "()I") / 1024
            }
            return i.isNative && i.os === i.OS.IOS ? o.reflection.callStaticMethod("PerformanceReporterIOS", "getTotalAvailableMemory") : (d.appConfig.isWebApp, 0)
        }
        getUsedMemory() {
            return i.isNative && i.os === i.OS.WINDOWS ? o.cppbridge.sendMessage("PerformanceReporter", "getUsedMemory") : i.isNative && i.os === i.OS.OSX ? o.reflection.callStaticMethod("PerformanceReporterMac", "getMemoryUsage:", "") : i.isNative && i.os === i.OS.ANDROID ? o.reflection.callStaticMethod("com/cocos/game/PerformanceReport", "getTotalMemoryUsed", "()I") : i.isNative && i.os === i.OS.IOS ? o.reflection.callStaticMethod("PerformanceReporterIOS", "getMemoryUsage") : d.appConfig.isWebApp && window.performance && window.performance.memory ? (window.performance.memory.usedJSHeapSize / 1048576).toFixed(2) : 0
        }
        getCPUUsage() {
            if (i.isNative && i.os === i.OS.WINDOWS) return o.cppbridge.sendMessage("PerformanceReporter", "getCPUUsage");
            if (i.isNative && i.os === i.OS.OSX) return o.reflection.callStaticMethod("PerformanceReporterMac", "getCPUPercentUsage:", "");
            if (i.isNative && i.os === i.OS.ANDROID) {
                const e = o.reflection.callStaticMethod("com/cocos/game/PerformanceReport", "getCpuUsagePercentage", "()Ljava/lang/String;");
                return parseFloat(e)
            }
            return i.isNative && i.os === i.OS.IOS ? o.reflection.callStaticMethod("PerformanceReporterIOS", "getCPUPercentUsage") : (d.appConfig.isWebApp, 0)
        }
        getFPS() {
            return 1 / g.deltaTime
        }
        static restartAppFromNative() {
            i.os === i.OS.OSX && o.reflection.callStaticMethod("NativeEvents", "restartApp")
        }
        static getAppSchemaByJurisdiction() {
            var e;
            let t = "wptg:";
            const o = null == d || null == (e = d.appConfig) ? void 0 : e.getModulesConfig();
            var n, a;
            i.isNative && (t = d.appConfig.isLandscapeLayout ? ((null == o || null == (n = o.branchConfig) ? void 0 : n.branch_Schema) ?? t) + ":" : ((null == o || null == (a = o.appsflyerConfig) ? void 0 : a.appsflyer_Schema) ?? t) + ":");
            return t
        }
        static openExternalWebViewWindow(e, t, n) {
            var a;
            if (i.isNative && i.os === i.OS.WINDOWS) {
                return o.cppbridge.sendMessage("ExternalWebViewManager", "OpenExternalWebViewWindow", e, t, n)
            }
            if (i.isNative && i.os === i.OS.OSX) {
                return o.reflection.callStaticMethod("WebviewMonitorMac", "OpenExternalWebViewWindow:width:height:", e, t, n)
            }
            return null == (a = d.native) || a.openUrl(e), 0
        }
        static focusExternalWebViewWindow(e) {
            if (i.isNative && i.os === i.OS.WINDOWS) {
                return o.cppbridge.sendMessage("ExternalWebViewManager", "FocusExternalWebViewWindow", e)
            }
            if (i.isNative && i.os === i.OS.OSX) {
                return o.reflection.callStaticMethod("WebviewMonitorMac", "FocusExternalWebViewWindow:", e)
            }
            return !0
        }
        encodeImageBufferAndSave(e, t, n, a) {
            if (!i.isNative) return "";
            switch (i.os) {
                case i.OS.IOS:
                    return this.invokeSyncFunc(u.KEY_CAPTURE_NODE_AND_SAVE, {
                        path: e,
                        width: t,
                        height: n,
                        fileName: a
                    }), "true";
                case i.OS.OSX:
                    return o.reflection.callStaticMethod("NativeEvents", "encodeImageBufferAndSave:width:height:fileName:", e, t, n, a);
                case i.OS.ANDROID:
                    return o.reflection.callStaticMethod("com/cocos/game/NativeEvent", "encodeImageBufferAndSave", "(Ljava/lang/String;IILjava/lang/String;)Ljava/lang/String;", e, t, n, a);
                case i.OS.WINDOWS:
                    return o.cppbridge.sendMessage("NativeEvents", "encodeImageBufferAndSave", e, t, n, a);
                default:
                    return ""
            }
        }
        encodeImageBufferAndShare(e, t, n) {
            if (!i.isNative) return "";
            switch (i.os) {
                case i.OS.IOS:
                    this.invokeSyncFunc(u.KEY_CAPTURE_NODE_AND_SHARE, {
                        path: e,
                        width: t,
                        height: n
                    });
                    return "true";
                case i.OS.OSX:
                    return o.reflection.callStaticMethod("NativeEvents", "encodeImageBufferAndShare:width:height:", e, t, n);
                case i.OS.ANDROID:
                    return o.reflection.callStaticMethod("com/cocos/game/NativeEvent", "encodeImageBufferAndShare", "(Ljava/lang/String;II)Ljava/lang/String;", e, t, n);
                case i.OS.WINDOWS:
                    return o.cppbridge.sendMessage("NativeEvents", "encodeImageBufferAndShare", e, t, n);
                default:
                    return ""
            }
        }
    }
    e("NativeEvent", w), w.g_instance = void 0, w.gpuList = "", window.addEventListener("message", w.webCcjsCallback), window.webCcjsCallback = w.webCcjsCallback, window.clientToJs = w.SYwebClientToJs, window.OnNativeEventCallback = w.OnNativeEventCallback, window.NativeStringReturnTrue = "true", window.NativeStringReturnFalse = "false", window.onAutoUpdateMessage = w.onAutoUpdateMessage, window.onNativeEventMessage = w.onNativeEventMessage, t._RF.pop()
}