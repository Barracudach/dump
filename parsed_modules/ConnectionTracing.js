import * as e from "./cc.js";
import * as n from "./cv.js";
import * as i from "./Enum.js";
import * as s from "./Enum.js";
import * as a from "./HashMap.js";
import * as o from "./CrashTracing.js";

function main() {
    e._RF.push({}, "1de347nNdNJWpTQUAg6VRjG", "ConnectionTracing", void 0);
    let r = t("ConnectionTracingAction", function(t) {
            return t.Start = "start", t.Open = "open", t.Close = "close", t.Error = "error", t.Timeout = "timeout", t
        }({})),
        c = t("HeartBeatTracingAction", function(t) {
            return t[t.Request = 0] = "Request", t[t.Response = 1] = "Response", t[t.TimeOut = 2] = "TimeOut", t
        }({})),
        u = t("HttpApisTracingAction", function(t) {
            return t.Request = "Request", t.Response = "Response", t.Error = "Error", t.TimeOut = "TimeOut", t.Abort = "Abort", t.NotValidResponse = "NotValidResponse", t.NetworkError = "NetworkError", t
        }({}));
    class h {
        constructor() {
            this.connectionType = "", this.disconnectionCount = 0, this.startTime = 0, this.timeoutFunction = null
        }
    }
    t("DisconnectionInfo", h);
    class m {
        constructor() {
            this.averageHeartBeat = 0, this.minHeartBeat = 0, this.maxHeartBeat = 0, this.maxInAverageHeartBeats = 0, this.lastHeartBeatRequestTime = 0, this.lastSentToNewRelicTime = 0, this.heartBeatsHistory = [], this.requestCount = 0, this.responseCount = 0
        }
        getHeartbeatInfo() {
            return `${this.averageHeartBeat}:${this.minHeartBeat}:${this.maxHeartBeat}`
        }
        updateHeartBeat(t) {
            if (this.lastHeartBeatRequestTime <= 0) return !1;
            let e = t - this.lastHeartBeatRequestTime;
            (0 == this.minHeartBeat || this.minHeartBeat > e) && (this.minHeartBeat = e), (0 == this.maxHeartBeat || this.maxHeartBeat < e) && (this.maxHeartBeat = e);
            this.heartBeatsHistory.length >= 100 && this.heartBeatsHistory.shift(), this.heartBeatsHistory.push(e);
            let n = 0;
            this.maxInAverageHeartBeats = 0, this.heartBeatsHistory.forEach((t => {
                n += t, t > this.maxInAverageHeartBeats && (this.maxInAverageHeartBeats = t)
            }));
            let i = this.heartBeatsHistory.length;
            this.averageHeartBeat = n / i;
            return (this.lastSentToNewRelicTime <= 0 || t - this.lastSentToNewRelicTime > 6e5) && (this.lastSentToNewRelicTime = t, !0)
        }
        setLastHeartBeatRequestTime(t) {
            this.lastHeartBeatRequestTime = t
        }
        getLatestHeartBeatDuration() {
            return this.heartBeatsHistory && this.heartBeatsHistory.length > 0 ? this.heartBeatsHistory[this.heartBeatsHistory.length - 1] : 0
        }
    }
    t("ServerLatencyInfo", m);
    class g {
        constructor(t) {
            this.connectionType = "", this.isHavingError = !1, this.isHavingTimeOut = !1, this.connectionType = t
        }
    }
    t("HttpApiInfo", g);
    class d extends m {
        constructor(...t) {
            super(...t), this.connectionInfo = new a
        }
    }
    t("MttApiServerLatencyInfo", d);
    class l {
        constructor(t) {
            this.connectionType = "", this.isConnectionOpened = !1, this.triedOnce = !1, this.startTime = 0, this.retryTimes = 0, this.lastCloseTime = 0, this.disconnectionCount = 0, this.timeOutFunction = null, this.serverLatencyInfo = new a, this.connectionStartCount = 0, this.connectionOpenCount = 0, this.connectionTimeOutCount = 0, this.connectionErrorCount = 0, this.connectionIssueCount = 0, this.connectionType = t
        }
        updateHeartBeat(t, e) {
            return this.getOrCreateServerLatencyInfo(t).updateHeartBeat(e)
        }
        setLastHeartBeatRequestTime(t, e) {
            this.getOrCreateServerLatencyInfo(t).setLastHeartBeatRequestTime(e)
        }
        getOrCreateServerLatencyInfo(t) {
            let e;
            return this.serverLatencyInfo.has(t) ? e = this.serverLatencyInfo.get(t) : (e = new m, this.serverLatencyInfo.add(t, e)), e
        }
    }
    t("ConnectionInfo", l);
    class v {
        constructor(t, e, n) {
            this.name = void 0, this.attributesOrStartTime = void 0, this.startTime = void 0, this.name = t, this.attributesOrStartTime = e, this.startTime = n
        }
    }
    t("CustomSpanEvent", v);
    class C {
        constructor(t) {
            this.events = [], this.name = void 0, this.attributes = void 0, this.startTime = void 0, this.name = t
        }
        setAttributes(t) {
            this.attributes = t
        }
        updateName(t) {
            this.name = t
        }
        end() {
            if (!o.IsActive()) return;
            let t = o.getInstance().getTracer().startSpan(this.name);
            this.attributes || (this.attributes = o.getInstance().getCommonAttributes()), t.setAttributes(this.attributes), this.events.forEach((e => {
                t.addEvent(e.name, e.attributesOrStartTime, e.startTime)
            })), t.end()
        }
        addEvent(t, e, n) {
            e && (e.eventTime = n);
            let i = new v(t, e, n);
            this.events.push(i)
        }
        updateAttributes(t, e) {
            this.attributes[t] = e
        }
    }
    t("CustomSpan", C);
    class T {
        static hasInstance() {
            return !!T._instance
        }
        static getInstance() {
            return T._instance || (T._instance = new T), T._instance
        }
        constructor() {
            this._mainSpan = null, this._connectionInfo = null, this._mttConnectionInfo = null, this.isNameSet = !1, this._disconnectionEvents = null, this._connectionInfo = new a, this._mttConnectionInfo = new d, this.startSession()
        }
        startSession() {
            o.IsActive() && null == this._mainSpan && (this.debugTrace("start session"), this._mainSpan = new C("connection-session"), this._mainSpan.startTime = this.getNow(), this.isNameSet = !1)
        }
        getParamString(t) {
            return `app.${n.appConfig.jurisdiction}.connectionTrace.${t}`
        }
        setAttribute(t, e, n) {
            o.IsActive() && o.getInstance().setAttribute(t, e, n)
        }
        getServerName(t, e = "") {
            switch (t) {
                case i.SererType_World_WPTO:
                    return `${e}_${n.appConfig.getAppClone()==s.WPTO?"wpto":"wptg"}`;
                case i.SeverType_World:
                    return `${e}_pkw`;
                case i.SeverType_Game:
                    return "game_pkw";
                case i.SeverType_WebSocketType_HOLDEM_MTT:
                    return "game_mtt_holdem";
                case i.SeverType_WebSocketType_OMAHA_MTT:
                    return "game_mtt_omaha";
                default:
                    return `${e}_${t}`
            }
        }
        traceHeartBeat(t, e, n, i = "", s) {
            var a;
            let o = null == e || null == (a = e.wSocket) ? void 0 : a.url;
            this.traceHeartBeatDetail(t, o, n, this.getServerName(n, i), s)
        }
        traceHeartBeatWebsocket(t, e, n, i = "") {
            let s = n;
            s += 1e3, n = s, this.traceHeartBeatDetail(t, e, n, this.getServerName(n, i))
        }
        traceHttpApis(t, e, n = {}) {
            if (this.debugTrace("traceHttpApis", t, ":", e, ":", JSON.stringify(n)), !o.IsActive()) return;
            if (!e) return void this.debugTrace("Invalid api type");
            e.endsWith("/") || (e += "/");
            let i = e.split("?");
            i && i[0] && (e = i[0]);
            let s = o.getInstance().getCommonAttributes(!0, 4);
            this.setAttribute(s, this.getParamString("connectionType"), e), this.setAttribute(s, this.getParamString("averageHeartBeat"), this._mttConnectionInfo.averageHeartBeat), this.setAttribute(s, this.getParamString("minHeartBeat"), this._mttConnectionInfo.minHeartBeat), this.setAttribute(s, this.getParamString("maxHeartBeat"), this._mttConnectionInfo.maxHeartBeat), this.setAttribute(s, this.getParamString("maxInAverageHeartBeats"), this._mttConnectionInfo.maxInAverageHeartBeats);
            for (const t in n) this.setAttribute(s, this.getParamString(t), n[t]);
            let a = this._mttConnectionInfo.connectionInfo.get(e);
            switch (a || (a = new g(e), this._mttConnectionInfo.connectionInfo.add(e, a)), t) {
                case u.Request:
                    this._mttConnectionInfo.setLastHeartBeatRequestTime(this.getNow()), this._mttConnectionInfo.requestCount++;
                    break;
                case u.Response:
                    let t = this.getNow();
                    this._mttConnectionInfo.updateHeartBeat(t) && this.addEvent("mtt-http-status", s, !1, !0), this._mttConnectionInfo.responseCount++, a.isHavingError = !1, a.isHavingTimeOut = !1;
                    break;
                case u.Error:
                    this.setAttribute(s, this.getParamString("requestCount"), this._mttConnectionInfo.requestCount), this.setAttribute(s, this.getParamString("responseCount"), this._mttConnectionInfo.responseCount), this.setAttribute(s, this.getParamString("type"), e), a.isHavingError || this.addEvent("mtt-http-error", s, !0), a.isHavingError = !0;
                    break;
                case u.TimeOut:
                    this.setAttribute(s, this.getParamString("requestCount"), this._mttConnectionInfo.requestCount), this.setAttribute(s, this.getParamString("responseCount"), this._mttConnectionInfo.responseCount), this.setAttribute(s, this.getParamString("type"), e), a.isHavingTimeOut || this.addEvent("mtt-http-timeout", s, !0), a.isHavingTimeOut = !0
            }
        }
        traceHeartBeatDetail(t, e, i, s = "", a) {
            if (this.debugTrace("TraceHeartBeat", t, ":", e, ":", i, ":", s), !e) return void this.debugTrace("Invalid connection type");
            if (e.endsWith("/") || (e += "/"), !o.IsActive()) return;
            let r;
            r = o.getInstance().getCommonAttributes(!0, 4), this.setAttribute(r, this.getParamString("connectionType"), e), this.setAttribute(r, this.getParamString("server"), i), this.setAttribute(r, this.getParamString("quickInfo"), s), a && this.setAttribute(r, this.getParamString("additionInfo"), a);
            let u = this._connectionInfo.get(e);
            switch (t) {
                case c.Request:
                    u ? u.setLastHeartBeatRequestTime(i, this.getNow()) : (this.setAttribute(r, this.getParamString("managedConnectionType"), e), this.addEvent("unmanaged-heartbeat-request", r, !0));
                    break;
                case c.Response:
                    if (u) {
                        u.updateHeartBeat(i, this.getNow()) && (this.setAttribute(r, this.getParamString("averageHeartBeat"), u.getOrCreateServerLatencyInfo(i).averageHeartBeat), this.setAttribute(r, this.getParamString("minHeartBeat"), u.getOrCreateServerLatencyInfo(i).minHeartBeat), this.setAttribute(r, this.getParamString("maxHeartBeat"), u.getOrCreateServerLatencyInfo(i).maxHeartBeat), this.setAttribute(r, this.getParamString("maxInAverageHeartBeats"), u.getOrCreateServerLatencyInfo(i).maxInAverageHeartBeats), this.setAttribute(r, this.getParamString("connectionStartCount"), u.connectionStartCount), this.setAttribute(r, this.getParamString("connectionOpenCount"), u.connectionOpenCount), this.setAttribute(r, this.getParamString("server"), this.getServerName(i, "heartbeat")), this.addEvent("server-status-" + i, r, !1, !0)), n.StatusView.updateLatencyStatus(e, i, u.getOrCreateServerLatencyInfo(i).getLatestHeartBeatDuration())
                    } else this.setAttribute(r, this.getParamString("managedConnectionType"), e), this.addEvent("unmanaged-heartbeat-response", r, !0);
                    this.clearDisconnectionCheckTimeOut(e) && (r.recoverConnectionType = e, this.addEvent("recover-connection", r, !0));
                    break;
                case c.TimeOut:
                    u ? (this.setAttribute(r, this.getParamString("averageHeartBeat"), u.getOrCreateServerLatencyInfo(i).averageHeartBeat), this.setAttribute(r, this.getParamString("minHeartBeat"), u.getOrCreateServerLatencyInfo(i).minHeartBeat), this.setAttribute(r, this.getParamString("maxHeartBeat"), u.getOrCreateServerLatencyInfo(i).maxHeartBeat), this.setAttribute(r, this.getParamString("maxInAverageHeartBeats"), u.getOrCreateServerLatencyInfo(i).maxInAverageHeartBeats), this.setAttribute(r, this.getParamString("connectionStartCount"), u.connectionStartCount), this.setAttribute(r, this.getParamString("connectionOpenCount"), u.connectionOpenCount), this.addEvent("heartbeat-timeout", r, !0)) : (this.setAttribute(r, this.getParamString("managedConnectionType"), e), this.addEvent("unmanaged-heartbeat-timeout", r, !0)), n.StatusView.updateLatencyStatus(e, i, -1), this.updateDisconnectionTime(e)
            }
        }
        updateDisconnectionTime(t) {
            if (o.IsActive())
                if (this.debugTrace("disconnect: " + t), this._disconnectionEvents || (this._disconnectionEvents = new a), this._disconnectionEvents.has(t)) {
                    let e = this._disconnectionEvents[t];
                    e && (e.connectionType = t, e.startTime = this.getNow(), e.disconnectionCount++, e.timeoutFunction && (clearTimeout(e.timeoutFunction), e.timeoutFunction = null))
                } else {
                    let e = new h;
                    e.connectionType = t, e.startTime = this.getNow(), e.disconnectionCount++, e.timeoutFunction = setTimeout((() => {
                        this.onDisconnectionCheckTimeOut(e)
                    }), 3e5), this._disconnectionEvents.add(t, e)
                }
        }
        onLoginSceneLoaded() {
            this.clearDisconnectionCheckTimeOutAll()
        }
        clearDisconnectionCheckTimeOut(t) {
            if (o.IsActive()) {
                if (this._disconnectionEvents && this._disconnectionEvents.has(t)) {
                    const e = this._disconnectionEvents.get(t);
                    if (e.timeoutFunction) return clearTimeout(e.timeoutFunction), e.timeoutFunction = null, !0
                }
                return !1
            }
        }
        clearReconnectionCheckTimeOut(t) {
            if (o.IsActive()) {
                if (this._connectionInfo && this._connectionInfo.has(t)) {
                    const e = this._connectionInfo.get(t);
                    if (e.timeOutFunction) return clearTimeout(e.timeOutFunction), e.timeOutFunction = null, !0
                }
                return !1
            }
        }
        clearDisconnectionCheckTimeOutAll() {
            o.IsActive() && (this._disconnectionEvents && this._disconnectionEvents.forEachKeyValue((t => {
                this.clearDisconnectionCheckTimeOut(t.key) && this.onDisconnectionCheckTimeOut(t.value)
            })), this._connectionInfo && this._connectionInfo.forEachKeyValue((t => {
                this.clearReconnectionCheckTimeOut(t.key) && this.onReconnectCheckTimeOut(t.value)
            })))
        }
        onDisconnectionCheckTimeOut(t) {
            if (!o.IsActive()) return;
            if (!t) return;
            this.debugTrace("onDisconnectionCheckTimeOut" + t.connectionType);
            let e = o.getInstance().getCommonAttributes(!1, 4);
            e.connectionType = t.connectionType, e.disconnectionTime = this.getNow() - t.startTime, this.addEvent("recover-connection-fail", e, !0)
        }
        onReconnectCheckTimeOut(t) {
            if (!o.IsActive()) return;
            if (!t) return;
            let e = o.getInstance().getCommonAttributes(!1, 4);
            e.connectionType = t.connectionType, e.disconnectionTime = this.getNow() - t.startTime, this.addEvent("recover-connection-fail", e, !0)
        }
        traceConnection(t, e, s = "") {
            if (this.debugTrace("TraceConnection", t, ":", e, ":", s), !e) return void this.debugTrace("Invalid connection type");
            let a;
            e.endsWith("/") || (e += "/"), o.IsActive() && (a = o.getInstance().getCommonAttributes(!0, 4), this.setAttribute(a, this.getParamString("connectionType"), e), this.setAttribute(a, this.getParamString("quickInfo"), s), this.setAttribute(a, this.getParamString("type"), e), this.addEvent(t, a));
            let c = null;
            switch (t) {
                case r.Start:
                    if (this._connectionInfo.has(e) ? c = this._connectionInfo.get(e) : (c = new l(e), c.triedOnce = !1, this._connectionInfo.add(e, c)), o.IsActive() && c.lastCloseTime > 0) {
                        let t = this.getNow() - c.lastCloseTime;
                        c.lastCloseTime = 0, c.disconnectionCount++, this.debugTrace("retryTimeFromLastClose:" + t), t < 3e3 && (c.timeOutFunction && clearTimeout(c.timeOutFunction), c.timeOutFunction = setTimeout((() => {
                            this.onReconnectCheckTimeOut(c)
                        }), 12e4))
                    }
                    c.connectionStartCount++, this.setAttribute(a, this.getParamString("connectionStartCount"), c.connectionStartCount), this.setAttribute(a, this.getParamString("connectionOpenCount"), c.connectionOpenCount), 1 == c.connectionStartCount && this.traceIndependent("connection_" + r.Start, a, null, !0);
                    break;
                case r.Open:
                    this.updateSpanName(), this._connectionInfo.has(e) ? (c = this._connectionInfo.get(e), c.triedOnce = !1, c.isConnectionOpened = !0, c.startTime = this.getNow(), c.retryTimes > 0 && (this.addEvent("reconnect-success", a, !0), c.retryTimes = 0), c.connectionOpenCount++, this.setAttribute(a, this.getParamString("connectionStartCount"), c.connectionStartCount), this.setAttribute(a, this.getParamString("connectionOpenCount"), c.connectionOpenCount), this.setAttribute(a, this.getParamString("connectionErrorCount"), c.connectionTimeOutCount), this.setAttribute(a, this.getParamString("connectionErrorCount"), c.connectionErrorCount), this.setAttribute(a, this.getParamString("connectionIssueCount"), c.connectionIssueCount), this.traceIndependent("connection_" + r.Open, a, null, !0)) : (this.setAttribute(a, this.getParamString("managedConnectionType"), e), this.addEvent("unmanaged-connection-open", a, !0)), this.clearDisconnectionCheckTimeOut(e) && (a.recoverConnectionType = e, this.addEvent("recover-connection-success", a, !0)), this.clearReconnectionCheckTimeOut(e) && (a.recoverConnectionType = e, this.addEvent("recover-connection-success", a, !0));
                    break;
                case r.Close:
                    if (this._connectionInfo.has(e)) {
                        let t = this._connectionInfo.get(e);
                        this.setAttribute(a, this.getParamString("connectionStartCount"), t.connectionStartCount), this.setAttribute(a, this.getParamString("connectionOpenCount"), t.connectionOpenCount), t.isConnectionOpened ? (t.serverLatencyInfo.forEachKeyValue((t => {
                            const e = t.value,
                                n = t.value;
                            this.setAttribute(a, this.getParamString(`heartBeatInfo_${e}`), n.getHeartbeatInfo())
                        })), this.setAttribute(a, this.getParamString("retryTimes"), t.retryTimes), this.setAttribute(a, this.getParamString("duration"), this.getNow() - t.startTime), this.addEvent("connection-close", a), this._mainSpan && this._mainSpan.events && this._mainSpan.events, this.addEvent("connection-close", a, !1, !0), t.isConnectionOpened = !1, t.lastCloseTime = this.getNow()) : (t.retryTimes++, this.setAttribute(a, this.getParamString("retryTimes"), t.retryTimes), this.addEvent("retry_connection", a, !0))
                    } else this.setAttribute(a, this.getParamString("managedConnectionType"), e), this.addEvent("unmanaged-connection-close", a, !0);
                    n.StatusView.updateLatencyStatus(e, i.SeverType_None, -1);
                    break;
                case r.Timeout:
                    this._connectionInfo.has(e) ? (c = this._connectionInfo.get(e), !c.isConnectionOpened && c.triedOnce || (c.connectionTimeOutCount++, c.connectionIssueCount++, this.traceIndependent("connection_" + r.Timeout, a, null, !0)), c.triedOnce = !0, this.setAttribute(a, this.getParamString("connectionStartCount"), c.connectionStartCount), this.setAttribute(a, this.getParamString("connectionOpenCount"), c.connectionOpenCount), this.setAttribute(a, this.getParamString("connectionErrorCount"), c.connectionTimeOutCount), this.setAttribute(a, this.getParamString("connectionIssueCount"), c.connectionIssueCount), this.addEvent("connection-time-out", a, !0)) : (this.setAttribute(a, this.getParamString("managedConnectionType"), e), this.addEvent("unmanaged-connection-timeout", a, !0));
                    break;
                case r.Error:
                    this._connectionInfo.has(e) ? (c = this._connectionInfo.get(e), !c.isConnectionOpened && c.triedOnce || (c.connectionErrorCount++, c.connectionIssueCount++, this.traceIndependent("connection_" + r.Error, a, null, !0)), c.triedOnce = !0, this.setAttribute(a, this.getParamString("connectionStartCount"), c.connectionStartCount), this.setAttribute(a, this.getParamString("connectionOpenCount"), c.connectionOpenCount), this.setAttribute(a, this.getParamString("connectionErrorCount"), c.connectionErrorCount), this.setAttribute(a, this.getParamString("connectionIssueCount"), c.connectionIssueCount), this.addEvent("connection-error", a, !0)) : (this.setAttribute(a, this.getParamString("managedConnectionType"), e), this.addEvent("unmanaged-connection-error", a, !0))
            }
        }
        addEventDefault(t, e = !1) {
            if (!o.IsActive()) return;
            let n = o.getInstance().getCommonAttributes(!0, 4);
            this.addEvent(t, n, e)
        }
        addIssueDefault(t, e, n) {
            if (!o.IsActive()) return;
            let i = o.getInstance().getCommonAttributes(!0, 4);
            e && n && "" != e && "" != n && (i[e] = n), this.addEvent(t, i, !0)
        }
        addEvent(t, e, n = !1, i = !1) {
            if (!o.IsActive()) return;
            this.startSession();
            let s = this.getNow();
            if (this._mainSpan) {
                if (this.updateSpanName(), this._mainSpan.addEvent(t, e, s), n || i) {
                    let n = this._mainSpan.events;
                    this.traceIndependent(t, e, n, i)
                }
            } else this.debugTrace("Invalid span")
        }
        traceIndependent(t, e, n, i = !1) {
            if (!o.IsActive()) return;
            let s = o.getInstance().getTracer().startSpan(t);
            if (s.setAttributes(e), i ? s.setAttribute(this.getParamString("connectionInfo"), t) : s.setAttribute(this.getParamString("connectionIssue"), t), n) {
                let t = this.getNow(),
                    e = t;
                for (let i = 0; i < n.length; i++) {
                    const a = n[i];
                    let o = a.startTime;
                    0 == i && (e = o);
                    let r = o - e;
                    s.addEvent(a.name, a.attributesOrStartTime, t + r)
                }
            }
            s.end()
        }
        updateSpanName() {
            if (o.IsActive() && !this.isNameSet) {
                const t = n.dataHandler.getUserData();
                let e;
                if (t && (e = t.loginData && t.loginData.username ? t.loginData.username : t.user_id), !e) return;
                this.isNameSet = !0, this._mainSpan.setAttributes(o.getInstance().getCommonAttributes())
            }
        }
        getNow() {
            return (new Date).getTime()
        }
        debugTrace(t, ...e) {
            console.log("Connection Tracing:" + t + ", " + e.join(", "))
        }
        logOut(t = "unknown") {
            this.endSession(t), this.startSession()
        }
        endSession(t = "unknown") {
            if (!o.IsActive()) return;
            if (!this._mainSpan) return void this.debugTrace("Invalid span");
            let e = 0,
                n = !1,
                i = o.getInstance().getCommonAttributes(!1),
                s = this.getNow() - this._mainSpan.startTime;
            this._connectionInfo.forEachKeyValue((t => {
                t.value && t.value.retryTimes > 0 && (this.setAttribute(i, this.getParamString("connectionType"), t.key), this.debugTrace("FAIL CONNECTION: ", t.key, t.value), n = !0), t.value && t.value.disconnectionCount && (e += t.value.disconnectionCount)
            })), n && s >= 3e3 && this.addEvent("haveTroubleSession", i, !0), this._disconnectionEvents && this._disconnectionEvents.forEachKeyValue((t => {
                this.setAttribute(i, this.getParamString("diconnectionType_" + t.key), t.key), this.setAttribute(i, this.getParamString("disconnectionCount_" + t.key), t.value.disconnectionCount), t.value && t.value.disconnectionCount && (e += t.value.disconnectionCount)
            })), this.setAttribute(i, this.getParamString("sessionTime"), s), this.setAttribute(i, this.getParamString("disconnectionCount"), e), this.setAttribute(i, this.getParamString("endsession"), t), this.addEvent(t, i, !0), this._mainSpan.end(), this._mainSpan = null, this.debugTrace("endSession")
        }
    }
    t("default", T), T._instance = null, e._RF.pop()
}