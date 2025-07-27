import * as e from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as S from "./cv.js";
import * as h from "./HashMap.js";
import * as u from "./LogSpan.js";
import * as g from "./WebSystemInfo.js";
import * as _ from "./AnalyticsHandler.js";
import * as A from "./otel-api.mjs.js";
import * as p from "./otel-api.mjs.js";
import * as C from "./otel-api.mjs.js";
import * as d from "./otel-exporter-trace-otlp-http.mjs.js";
import * as m from "./otel-resources.mjs_cjs=&original=.js";
import * as E from "./otel-resources.mjs_cjs=&original=.js";
import * as I from "./otel-semantic-conventions.mjs_cjs=&original=.js";
import * as f from "./otel-sdk-trace-base.mjs.js";
import * as T from "./env.js";

function main() {
    var v, F;
    e._RF.push({}, "5319fhUKKVLxJCfhT7F6oHn", "CrashTracing", void 0);
    const {
        ccclass: P,
        property: R
    } = i;
    var b = function(t) {
        return t[t.SUCCESS = 0] = "SUCCESS", t[t.FAILED = 1] = "FAILED", t
    }(b || {});
    let O = t("DebugSpanName", function(t) {
        return t.CashGameRequestAction = "CashGameRequestAction", t.ConnectionFlow = "ConnectionFlow", t.CashGameActions = "CashGameActions", t.MTTTimeBank = "MTTTimeBank", t.MttTournamentRequestDestroyedOne = "MttTournamentRequestDestroyedOne", t.NoticePlayerActionTurn = "NoticePlayerActionTurn", t.MttTableStart = "MttTableStart", t.MttRequestError = "MttRequestError", t.MttMsgComeWrong = "MttMsgComeWrong", t.MttActionComeWrong = "MttActionComeWrong", t.MttAllInTrack = "MttAllInTrack", t.BreakMsg = "BreakMsg", t.PrematureBreak = "PrematureBreak", t.CardRecover = "CardRecover", t.GlobalSpinPlayerVisibleIssue = "GlobalSpinPlayerVisibleIssue", t.PotValue = "PotValue", t.BuyIn = "buy_in", t.Cashier = "Cashier", t.SeatDown = "CashGame_SitDown", t.CowBoy = "Cowboy", t.FlowJoinGame = "FlowJoinGame", t.FlowLeaveGame = "FlowLeaveGame", t.HTTPRequests = "http_requests_errors", t.UserAuth = "UserAuth", t.NoCardDealt = "NoCardDealt", t.MissingPublicCard = "MissingPublicCard", t.ScrollView = "ScrollView", t.AutoStartTournament = "AutoStartTournament", t.MTTLobby = "MTTLobby", t.NotificationCenter = "NotificationCenter", t.CasinoWebLoad = "CasinoWebLoad", t.CasinoLogInfo = "CasinoLogInfo", t.NoCardDealtToSelf = "NoCardDealtToSelf", t.SelfCardPlacedWrongPosition = "SelfCardPlacedWrongPosition", t.UserProfileSettings = "UserProfileSettings", t.CashGameIssues = "CashGameIssues", t.MttIssues = "MttIssues", t.CashGameRaise = "CashGameRaise", t.FreshChat = "FreshChat", t.RequestToolBackPackFail = "RequestToolBackPackFail", t.RequestToolInfoFail = "RequestToolInfoFail", t.RequestToolBackPackGiftFail = "RequestToolBackPackGiftFail", t.AppConfigServerRequest = "AppConfigServerRequest", t.EventFlooded = "EventFlooded", t.GeoComply = "GeoComply", t.WebSocketReqTimeout = "WebSocketRequestTimeout", t.WebSocketReqError = "WebSocketRequestError", t.WebSocketRespNoMatch = "WebSocketRespNoMatch", t.KYC = "KYC", t.cashgameLeaveRoomError = "cashgameLeaveRoomError", t.HandRevealNotShown = "HandRevealNotShown", t.IncorrectTime = "IncorrectTime", t.Performance = "Performance", t.SNG_Global_Spins = "SNG_Global_Spins", t.DynamicPromotions = "DynamicPromotions", t.BUYIN_RESPONSE_NOT_VALID = "BUYIN_RESPONSE_NOT_VALID", t.PacePromoNotFoundRoom = "PacePromoNotFoundRoom", t.CasinoKickOut = "CasinoKickOut", t.UnderRaise = "UnderRaise", t.CommonModule = "CommonModule", t.BlindRaise = "BBblindValue", t.SwitchLoadingIssue = "SwitchLoadingIssue", t.SetSoundVolumeError = "setSoundVolumeError", t.ReloadingScene = "ReloadingScene", t.ExecutionTime = "ExecutionTime", t.MessageHanlder = "MessageHanlder", t.WebAppData = "WebAppData", t.SceneLoadTime = "SceneLoadTime", t.CFTurnstileCaptcha = "CFTurnstileCaptcha", t.WebView = "WebView", t.PeekCard = "PeekCard", t
    }({}));
    class L {}
    t("CustomSpanAttributes", L);
    let N = t("CrashTracing", P("CrashTracing")(((F = class t {
        static hasInstance() {
            return !!t.instance
        }
        static getInstance() {
            return t.IsActive() ? (t.instance || (t.instance = new t), t.instance) : void 0
        }
        static StartSpan(e) {
            t.hasInstance() && t.getInstance().startSpan(e)
        }
        static HasSpan(e) {
            return !!t.hasInstance() && t.getInstance().hasSpan(e)
        }
        static StopSpan(e) {
            t.hasInstance() && t.getInstance().stopSpan(e)
        }
        static SetAttributesToSpan(e, i = {}, s = "") {
            t.hasInstance() && t.getInstance().setAttributesToSpan(e, i, s)
        }
        static SetTrackAttributeToSpan(e, i, s) {
            t.hasInstance() && t.getInstance().setTrackAttributeToSpan(e, i, s)
        }
        static GetTrackAttributeOfSpan(e, i) {
            if (t.hasInstance()) return t.getInstance().getTrackAttributeOfSpan(e, i)
        }
        static GetTrackAttributesOfSpan(e) {
            if (t.hasInstance()) return t.getInstance().getTrackAttributesOfSpan(e)
        }
        static SetTrackAttributesToSpan(e, i) {
            t.hasInstance() && t.getInstance().setTrackAttributesToSpan(e, i)
        }
        static AddEventToSpan(e, i, s = {}) {
            t.hasInstance() && t.getInstance().addEventToSpan(e, i, s)
        }
        static EndSpan(e, i, s = {}, n = A.OK) {
            t.hasInstance() && t.getInstance().endSpan(e, i, s, n)
        }
        static Trace(e, i, s = {}, n = !1, a = !1) {
            t.hasInstance() && t.getInstance().trace(e, i, s, n, a)
        }
        static IsActive() {
            return (s.isNative || S.appConfig.isWebApp && I) && S.appConfig.getModulesConfig().crashTracingConfig.crashTracing_Enable
        }
        static OnJSError(e) {
            t.IsActive() && t.getInstance().checkJSCrash(e)
        }
        static OnJSException(e, i, s) {
            t.IsActive() && t.getInstance().traceJSException(e, i, s, !0)
        }
        constructor() {
            this.provider = null, this.exporter = null, this.COLLECTOR_SERVICE_NAME = "A5Labs.WPTG.Client", this.JS_CRASH_FILE_NAME = "js_crash", this.MAC_CRASH_FILE_NAME = "mac_native_crash", this.IOS_CRASH_FILE_NAME = "ios_native_crash", this.JS_CRASH_FILE_PATH = "", this.MAC_CRASH_FILE_PATH = "", this.IOS_CRASH_FILE_PATH = "", this.Android_CRASH_FILE_NAME = "android_native_crash", this.Android_CRASH_FILE_PATH = "", this.WIN_CRASH_FILE_NAME = "win_native_crash", this.WIN_CRASH_FILE_PATH = "", this.WIN_SPECS_FILE_NAME = "win_device_info", this.WIN_SPECS_FILE_PATH = "", this.MAC_SPECS_FILE_NAME = "mac_device_info", this.MAC_SPECS_FILE_PATH = "", this.EXCEPTION_IGNORE_LIST = ["unhandledRejectedPromise"], this._onGoingSpans = null, this._onGoingSpansT = null, this.PERFORMANCE_REPORT_DELAY = 6e4, t.IsActive() && (this.provider = new m({
                resource: new f.Resource({
                    [T.ATTR_SERVICE_NAME]: this.COLLECTOR_SERVICE_NAME
                })
            }), this.exporter = new d({
                url: this.getOTELCollectorURL()
            }), this._onGoingSpans = new h, this._onGoingSpansT = new h, function(t, e, i) {
                let s = t[e];
                t[e] = function(...t) {
                    t[1] = i, s.apply(this, t)
                }
            }(this.exporter, "export", (function(e, i) {
                e.code === b.SUCCESS && t.IsActive() && t.getInstance().deleteCrashFile()
            })), this.provider.addSpanProcessor(new E(this.exporter)), this.provider.register(), S.appConfig.isWebApp || (performance.timeOrigin = Date.now(), XMLHttpRequest.DONE = 4), s.isNative && (this.JS_CRASH_FILE_PATH = n.fileUtils.getWritablePath() + this.JS_CRASH_FILE_NAME, s.os === s.OS.OSX ? (this.MAC_CRASH_FILE_PATH = n.fileUtils.getWritablePath() + this.MAC_CRASH_FILE_NAME, this.MAC_SPECS_FILE_PATH = n.fileUtils.getWritablePath() + this.MAC_SPECS_FILE_NAME) : s.os === s.OS.IOS ? this.IOS_CRASH_FILE_PATH = n.fileUtils.getWritablePath() + this.IOS_CRASH_FILE_NAME : s.os === s.OS.ANDROID ? this.Android_CRASH_FILE_PATH = n.fileUtils.getWritablePath() + this.Android_CRASH_FILE_NAME : s.os === s.OS.WINDOWS && (this.WIN_CRASH_FILE_PATH = n.fileUtils.getWritablePath() + this.WIN_CRASH_FILE_NAME, this.WIN_SPECS_FILE_PATH = n.fileUtils.getWritablePath() + this.WIN_SPECS_FILE_NAME)), this.checkJSCrash(!0), this.checkNativeCrash(!0), this.traceSystemSpecs(), this.startTracePerformanceReport())
        }
        deleteCrashFile() {
            s.isNative && (n.fileUtils.isFileExist(this.JS_CRASH_FILE_PATH) && n.fileUtils.removeFile(this.JS_CRASH_FILE_PATH), s.os === s.OS.OSX && n.fileUtils.isFileExist(this.MAC_CRASH_FILE_PATH) ? n.fileUtils.removeFile(this.MAC_CRASH_FILE_PATH) : s.os === s.OS.IOS && n.fileUtils.isFileExist(this.IOS_CRASH_FILE_PATH) ? n.fileUtils.removeFile(this.IOS_CRASH_FILE_PATH) : s.os === s.OS.ANDROID && n.fileUtils.isFileExist(this.Android_CRASH_FILE_PATH) ? n.fileUtils.removeFile(this.Android_CRASH_FILE_PATH) : s.os === s.OS.WINDOWS && n.fileUtils.isFileExist(this.WIN_CRASH_FILE_PATH) && n.fileUtils.removeFile(this.WIN_CRASH_FILE_PATH))
        }
        checkJSCrash(t) {
            if (s.isNative) {
                if (n.fileUtils.isFileExist(this.JS_CRASH_FILE_PATH)) {
                    let e = n.fileUtils.getStringFromFile(this.JS_CRASH_FILE_PATH);
                    this.traceCrashFromFile(e, t)
                }
            } else S.appConfig.isWebApp && (window.onerror = (t, e, i, s, n) => (this.traceJSException(e, t.toString(), null == n ? void 0 : n.stack, !1, "JS"), !1), window.addEventListener("unhandledrejection", (t => {
                var e, i, s;
                this.traceJSException(null == t || null == (e = t.reason) ? void 0 : e.message, null == t || null == (i = t.reason) ? void 0 : i.message, null == t || null == (s = t.reason) ? void 0 : s.stack, !1, "JS")
            })))
        }
        checkNativeCrash(t) {
            if (s.isNative) {
                if (s.os === s.OS.OSX) {
                    if (n.fileUtils.isFileExist(this.MAC_CRASH_FILE_PATH)) {
                        let e = n.fileUtils.getStringFromFile(this.MAC_CRASH_FILE_PATH);
                        e && this.traceCrashFromFile(e, t, "Native MacOS")
                    }
                } else if (s.os === s.OS.IOS) {
                    if (n.fileUtils.isFileExist(this.IOS_CRASH_FILE_PATH)) {
                        let e = n.fileUtils.getStringFromFile(this.IOS_CRASH_FILE_PATH);
                        e && this.traceCrashFromFile(e, t, "Native iOS")
                    }
                } else if (s.os === s.OS.ANDROID) {
                    if (n.fileUtils.isFileExist(this.Android_CRASH_FILE_PATH)) {
                        let e = n.fileUtils.getStringFromFile(this.Android_CRASH_FILE_PATH);
                        e && this.traceCrashFromFile(e, t, "Native Android")
                    }
                } else if (s.os === s.OS.WINDOWS && n.fileUtils.isFileExist(this.WIN_CRASH_FILE_PATH)) {
                    let e = n.fileUtils.getStringFromFile(this.WIN_CRASH_FILE_PATH);
                    e && this.traceCrashFromFile(e, t, "Native Windows")
                }
            } else a("Crash Collector is not enabled in web")
        }
        traceCrashFromFile(t, e, i = "JS") {
            if (t) try {
                let s = JSON.parse(t);
                this.traceJSException(atob(s.location), atob(s.message), atob(s.stack), e, i)
            } catch {
                this.deleteCrashFile()
            }
        }
        getOTELCollectorURL() {
            return S.config.getStringData("OTEL_COLLECTOR", !0)
        }
        trace(t, e, i = {}, s, n = !1) {
            this.traceEvent(t, e, i, null, s, n)
        }
        traceChildEvent(e, i, s = {}, n, a = !1) {
            if (!t.IsActive()) return;
            let r = null;
            this._onGoingSpans.has(e) ? (r = this._onGoingSpans.get(e), this.traceEvent(e, i, s, r, n, a), this.endSpan(e), this._onGoingSpansT.has(e) && (clearTimeout(this._onGoingSpansT.get(e)), this._onGoingSpansT.remove(e))) : this.traceEvent(e, i, s, null, n, a)
        }
        traceEvent(e, i, s = {}, n = null, a, r = !1) {
            if (!t.IsActive()) return;
            let o = this.getTracer(),
                l = null;
            if (n) {
                let t = p.setSpan(C.active(), n.span);
                l = new u(o.startSpan(e, void 0, t))
            } else l = new u(o.startSpan(e));
            let c = this.getAttributesFromObjectLiteral(s, e);
            l.setAttributes(c), s && null == s.eventName && l.setAttribute(this.getParamString("eventName"), i), r && l.setStatus({
                code: A.ERROR,
                message: e
            }), l.addEvent(i, s), this.setCommonInfoToSpan(l), a && this.sendSpanLogsToAnalyticsTool(l, i), l.end()
        }
        hasSpan(e) {
            return !!t.IsActive() && this._onGoingSpans.has(e)
        }
        startSpan(e, i = null, s = {}) {
            if (!t.IsActive()) return null;
            let n = null;
            if (this._onGoingSpans.has(e)) n = this._onGoingSpans.get(e);
            else {
                let t = this.getTracer();
                n = new u(t.startSpan(e)), this._onGoingSpans.add(e, n)
            }
            return null != i && this.addEventToSpan(e, i, s), n
        }
        stopSpan(e) {
            if (!t.IsActive()) return null;
            this._onGoingSpans.has(e) && this._onGoingSpans.remove(e)
        }
        setTrackAttributeToSpan(t, e, i) {
            let s = null;
            this._onGoingSpans.has(t) && (s = this._onGoingSpans.get(t), s.setTrackAttribute(e, i))
        }
        setTrackAttributesToSpan(t, e) {
            let i = null;
            this._onGoingSpans.has(t) && (i = this._onGoingSpans.get(t), i.setTrackAttributes(e))
        }
        getTrackAttributeOfSpan(t, e) {
            let i = null;
            if (this._onGoingSpans.has(t)) return i = this._onGoingSpans.get(t), i.getTrackAttribute(e)
        }
        getTrackAttributesOfSpan(t) {
            let e = null;
            if (this._onGoingSpans.has(t)) return e = this._onGoingSpans.get(t), e.getTrackAttributes()
        }
        setAttributesToSpan(e, i = {}, s = "") {
            if (!t.IsActive()) return;
            let n = null;
            if (!this._onGoingSpans.has(e)) return;
            n = this._onGoingSpans.get(e);
            let a = this.getAttributesFromObjectLiteral(i, "" == s ? e : s);
            n.setAttributes(a)
        }
        addEventToSpan(e, i, s = {}) {
            if (!t.IsActive()) return;
            let n = null;
            if (!this._onGoingSpans.has(e)) return;
            n = this._onGoingSpans.get(e);
            let a = this.getAttributesFromObjectLiteral(s, e);
            n.addEvent(i, a), n.setAttributes(a)
        }
        endParentSpan(t, e, i = {}, s = 8) {
            this._onGoingSpansT.has(t) ? this.traceEvent(t, e, i, this._onGoingSpans.get(t)) : (this.addEventToSpan(t, e, i), this._onGoingSpansT.add(t, setTimeout(this.endSpan.bind(this), 1e3 * s, t, "timeout", {}, A.ERROR)))
        }
        endSpan(e, i, s = {}, n = A.OK, a) {
            if (!t.IsActive()) return;
            let r = null;
            if (!this._onGoingSpans.has(e)) return;
            r = this._onGoingSpans.get(e);
            let o = this.getCommonAttributes();
            o.issue = i, r.setAttributes(o);
            let l = this.getAttributesFromObjectLiteral(s, e);
            this.setAttribute(l, "endSpanEventName", i || e), s && r.setAttributes(l), i && r.addEvent(i, l), r.setStatus({
                code: n,
                message: i
            }), a && this.sendSpanLogsToAnalyticsTool(r, i), r.end(), this._onGoingSpans.remove(e)
        }
        getAttributesFromObjectLiteral(t = {}, e = "") {
            let i = new L;
            if (t)
                for (var s in t) this.setAttribute(i, this.getParamString(s, e), t[s]);
            return i
        }
        traceJSException(e, i, s, n, a = "JS") {
            if (t.IsActive())
                if (i && this.EXCEPTION_IGNORE_LIST.includes(i.trim())) this.deleteCrashFile();
                else if (null != s) {
                let t = this.getTracer(),
                    r = n ? "Crash" : "Exception",
                    o = new u(t.startSpan(r)),
                    l = {
                        location: e,
                        message: i,
                        stack: s
                    },
                    c = this.getAttributesFromObjectLiteral(l, r);
                o.setAttributes(c), o.addEvent(r + "-report", c), o.recordException({
                    name: e,
                    stack: s,
                    message: i
                }), o.setStatus({
                    code: A.ERROR,
                    message: a + "-" + r
                }), this.setCommonInfoToSpan(o), n && S.tools.GetStringByCCFile("user_account") && o.setAttribute(this.getParamString("user_account"), S.tools.GetStringByCCFile("user_account")), o.end()
            }
        }
        traceSystemSpecs() {
            if (!t.IsActive()) return;
            let e = this.getSystemSpecs();
            "" !== e && this.trace(O.Performance, "System_Specs", {
                specs: e
            })
        }
        startTracePerformanceReport() {
            r(this) && t.IsActive() && (this.tracePerformance(), setTimeout(this.startTracePerformanceReport.bind(this), this.PERFORMANCE_REPORT_DELAY))
        }
        tracePerformance() {
            var e;
            if (!r(this) || !t.IsActive()) return;
            const i = {
                MainWindow: o.deltaTime
            };
            var s;
            S.appConfig.getGeneralConfig().multiWindowEnabled && (null == (s = l.scenes) || s.forEach((t => {
                i[null == t ? void 0 : t.name] = o.deltaTime
            })));
            const n = {
                cpu: S.native.getCPUUsage(),
                memory: S.native.getUsedMemory(),
                total_memory: S.native.getTotalMemory(),
                total_available_memory: S.native.getTotalAvailableMemory(),
                fps: S.native.getFPS(),
                scene: this.getCurrentSceneName(),
                no_of_open_windows: null == (e = l.scenes) ? void 0 : e.size,
                frame_time: JSON.stringify(i)
            };
            this.trace(O.Performance, "Performance_Report", n)
        }
        getSystemSpecs() {
            if (s.isNative && s.os === s.OS.WINDOWS) {
                if (n.fileUtils.isFileExist(this.WIN_SPECS_FILE_PATH)) return n.fileUtils.getStringFromFile(this.WIN_SPECS_FILE_PATH)
            } else if (s.isNative && s.os === s.OS.OSX) {
                if (n.fileUtils.isFileExist(this.MAC_SPECS_FILE_PATH)) return n.fileUtils.getStringFromFile(this.MAC_SPECS_FILE_PATH)
            } else {
                if (s.isNative && s.os === s.OS.IOS) return n.reflection.callStaticMethod("PerformanceReporterIOS", "getSystemInfo");
                if (s.isNative && s.os === s.OS.ANDROID) return n.reflection.callStaticMethod("com.cocos.game.PerformanceReport", "getSystemInfo", "()Ljava/lang/String;");
                if (S.appConfig.isWebApp) return g.getInstance().getWebSystemInfo()
            }
        }
        getCurrentSceneName() {
            if (S.appConfig.getGeneralConfig().multiWindowEnabled) {
                var t, e;
                let i = l.getFocusedWindowID(),
                    s = null != (t = l.scenes) && t.has(i) ? null == (e = l.scenes) ? void 0 : e.get(i) : l.getScene();
                return (null == s ? void 0 : s.name) || "unknown"
            }
            var i;
            return (null == (i = l.getScene()) ? void 0 : i.name) || "unknown"
        }
        setCommonInfoToSpan(t) {
            t ? t.setAttributes(this.getCommonAttributes()) : c("Invalid span")
        }
        static getTrace(t = 0, e = 6) {
            let i = (new Error).stack.split("\n");
            return t > 0 && i.splice(0, t), i.slice(e), i.join("\n")
        }
        getParamString(t, e = "") {
            let i = "" == e ? "" : `.${e}`;
            return `app.${S.appConfig.jurisdiction}${i}.${t}`
        }
        setAttribute(t, e, i) {
            t && void 0 !== i && null != i && "" != i && ("string" == typeof i && i.length > 4e3 && (i = i.substring(0, 4e3)), t[e] = i ?? "unknown")
        }
        getCommonAttributes(e = !1, i = 3) {
            let s = new L;
            this.setAttribute(s, this.getParamString("platform"), S.config.getPlatform()), this.setAttribute(s, this.getParamString("isWebApp"), S.appConfig.isWebApp), this.setAttribute(s, this.getParamString("device_uuid"), S.native.GetDeviceUUID()), this.setAttribute(s, this.getParamString("version"), S.config.GET_CLIENT_VERSION());
            let n = S.appConfig.isProd ? "prod" : S.appConfig.isStg ? "stg" : "dev";
            this.setAttribute(s, this.getParamString("environment"), n), this.setAttribute(s, this.getParamString("bundle_id"), S.appConfig.getGeneralConfig().bunderConfig.bunder_AppID), this.setAttribute(s, this.getParamString("scene"), this.getCurrentSceneName());
            let a = S.dataHandler.getUserData();
            if (a) {
                var r;
                this.setAttribute(s, this.getParamString("user_id"), a.user_id), this.setAttribute(s, this.getParamString("user_id_nspp"), a.getUserIdS(!1));
                let t = null == (r = a.loginData) ? void 0 : r.username;
                t || (t = S.tools.GetStringByCCFile("user_account")), this.setAttribute(s, this.getParamString("user_account"), t), this.setAttribute(s, this.getParamString("user_ip"), a.user_ip), this.setAttribute(s, this.getParamString("user_areacode"), a.areaCode), this.setAttribute(s, this.getParamString("user_u_areacode"), a.countryISO2)
            }
            let o = S.native.GetLocation();
            if (o) {
                let t = o.latitude + ":" + o.longitude;
                ":" == t && (t = "unknown"), this.setAttribute(s, this.getParamString("gps"), t)
            }
            return e && this.setAttribute(s, this.getParamString("trace"), t.getTrace(i)), s
        }
        ShowRestartDialogeOnNative() {
            let e = S.appConfig.getAppTitle();
            s.isNative && (s.os === s.OS.ANDROID ? n.reflection.callStaticMethod("com/cocos/game/CrashHandler", "CallNativeToRestartAppOnJSCrash", "(Ljava/lang/String;)V", e) : s.os === s.OS.IOS ? n.reflection.callStaticMethod("NativeEvent", "showRestartAlert:", e) : s.os === s.OS.OSX ? n.reflection.callStaticMethod("NativeEvents", "showRestartAlert:", e) : s.os === s.OS.WINDOWS && (n.cppbridge.sendMessage("NativeEvents", "showCrashPopup", e), t.RestartGameOnJsError()))
        }
        static RestartGameOnJsError() {
            o.restart()
        }
        getTracer(t = "poker-crash-trace") {
            return this.provider.getTracer(t)
        }
        getSpan(t) {
            let e = null;
            return this._onGoingSpans.has(t) ? (e = this._onGoingSpans.get(t), e) : e
        }
        sendSpanLogsToAnalyticsTool(t, e) {
            t && _.getInstance().sendEvent(this.getCurrentSceneName(), e, t.name, t.trackAttributes)
        }
    }).instance = null, v = F)) || v);
    window.NativeRestartCallback = N.RestartGameOnJsError, window.OnJSError = N.OnJSError, window.OnJSException = N.OnJSException, e._RF.pop()
}